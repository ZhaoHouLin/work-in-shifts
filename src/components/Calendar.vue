<script>

import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/i18n/zh-hk.js'
import { ref,computed, onMounted } from '@vue/runtime-core';
import { useStore } from "vuex";
import { apiTime,apiArrangeDateList, apiConvertor, apiHandleList } from '../api'

import { initializeApp } from "@firebase/app";
import firebaseConfig from "../data/firebaseConfig.json"

import { 
  getFirestore,
  collection,
  getDocs,
  doc,addDoc,setDoc,
  updateDoc,deleteDoc,
  onSnapshot,
  query,where
} from 'firebase/firestore'

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup, GoogleAuthProvider
} from 'firebase/auth'

export default {
  components: {
    VueCal
  },

  setup() {
    // ↓===↓===↓===↓===↓===↓===↓ 自訂api引入 ↓===↓===↓===↓===↓===↓===↓ //
    const { formatTime,theWeek } = apiTime()

    const { 
      arrange,
      handleHoliday 
    } = apiArrangeDateList()

    const { 
      handleEmployeeList,
      handleArrangeEmployeeList,
      handleWeekendEmployeeList,
      handleWeekendArrangeEmployeeList
    } = apiHandleList()

    const {events,JSONToExcelConvertor,createCsvFile} = apiConvertor()
    // ↑===↑===↑===↑===↑===↑===↑ 自訂api引入 ↑===↑===↑===↑===↑===↑===↑ //

    const store = useStore()
    initializeApp(firebaseConfig)
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    
    

    const eventsData = computed(()=> {
      return store.getters.eventsData
    })
    const todayDate = computed(()=> {
      return store.getters.startTimeData
    })
    const googleUserInfo = computed(()=> {
      return store.getters.googleUserInfoData
    })

    const emailVerified = ref(false)

    const db = getFirestore()

    //使用者狀態監聽
    onAuthStateChanged(auth, (user)=> {
      if(auth.currentUser === null) {
        emailVerified.value = false
      } else {
        emailVerified.value = auth.currentUser.emailVerified
      }
      // console.log('user status changed:',user);
    })

    //定義firebase資料庫集合位置
    const colRef = collection(db,'holidaysData')

    //建立國定假日firebase文件才使用
    const add = (e)=> {
      e.preventDefault()
      setDoc(doc(db,'holidaysData','2022-holidays'),{
        eventsData: eventsData.value
      })
    }
    
    //更新firebase文件
    const update = (e)=> {
      e.preventDefault()
      updateDoc(doc(db,'holidaysData',googleUserInfo.value.user.uid),{
        eventsData: eventsData.value
      })
    }

    //儲存資料到firebase
    const save = (e)=> {
      e.preventDefault()
      getDocs(colRef).then((snapshot)=> {
        snapshot.docs.forEach((userData)=> {
          if(userData.id===googleUserInfo.value.user.uid) {
            updateDoc(doc(db,'userDateData',googleUserInfo.value.user.uid),{
              eventsData: eventsData.value
            })
          } else {
            setDoc(doc(db,'userDateData',googleUserInfo.value.user.uid),{
              eventsData: eventsData.value
            })
          }
        })
      }).catch(err => {
        console.log(err.message);
      })
      console.log('ok');
    }

    //刪除firebase資料
    const del = (e)=> {
      const docRef = doc(db,'holidaysData',todayDate.value)
      e.preventDefault()
      deleteDoc(docRef)
        .then(()=> {})
    }

    //讀取firebase的國定假日資料
    const loadHolidays = ()=> {
      store.dispatch('commitDeleteEvents')
      store.dispatch('commitDeleteGoogleUserInfo')
      getDocs(colRef).then((snapshot)=> {
        snapshot.docs.forEach((data)=> {
          data.data().eventsData.forEach((event)=> {
            store.dispatch('commitEvents',event)
          })
        })
      })
    }

    //讀取使用者排班儲存的firebase資料
    const loadData = ()=> {
      store.dispatch('commitDeleteEvents')
      getDocs(collection(db,'userDateData'))
        .then((snapshot)=> {
          snapshot.docs.forEach((userData)=> {
            if(userData.id===googleUserInfo.value.user.uid) {
              userData.data().eventsData.forEach( (event)=> {
                store.dispatch('commitEvents',event)
              })
            }
          })
        })
        .catch(err => {
          console.log(err.message);
        })
    }

    //查詢firebase
    const q = query(colRef,where('start','==','zz'))

    const que = ()=> {
      // onSnapshot(q,(snapshot)=> {
      //   console.log(snapshot.docs);
      //   snapshot.docs.forEach((doc)=> {
      //     doc.data().eventsData.forEach((event)=> {
      //       console.log(event);
      //     })
      //   })
      // })
    }

    //以email註冊才使用
    const signUp = ()=> {
      createUserWithEmailAndPassword(auth,email,password)
        .then((cred)=> {
          console.log('user created:',cred.user);
        })
        .catch((err)=> {
          console.log(err.message);
        })
    }

    //登出
    const logout = ()=> {
      loadHolidays()
      signOut(auth)
        .then(()=> {
          console.log('the user signed out');
        })
        .catch((err)=>{
          console.log(err.message);
        })
      
    }

    //登入
    const login = async ()=> {
      
      //以郵箱帳密登入
      // signInWithEmailAndPassword(auth,email,password)
      //   .then((cred)=> {
      //     // console.log('user logged in:',cred.user);
      //   })
      //   .catch((err)=>{
      //     console.log(err.message);
      //   })
      await signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          store.dispatch('commitGoogleUserInfo',result)
          // console.log(result);
          
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
      await loadData()
    }


    //↓======Vue-cal用======↓//
    const showAllDayEvents = ref(0)
    const shortEventsOnMonthView = ref(false)
    //↑======Vue-cal用======↑//

    const employeeList = computed(()=> {
      return store.getters.employeeListData
    })

    const arrangeEmployeeList = computed(()=> {
      return store.getters.arrangeEmployeeListData
    })

    const employeeWeekendList = computed(()=> {
      return store.getters.employeeWeekendListData
    })

    const arrangeWeekendEmployeeList = computed(()=> {
      return store.getters.arrangeWeekendEmployeeListData
    })

    const directorList = computed(()=> {
      return store.getters.directorListData
    })

    
    // const editEvents = computed({
    //   set(val) {
    //     console.log(val);
    //     store.dispatch('commitEvents',eventsData.value)
    //   },
    //   get() {
    //     return store.getters.eventsData
    //   }
    // })
    
    const startTimeStatus = computed({
      set(val) {
        store.dispatch('commitStartTime',val)
      },
      get() {
        return store.getters.startTimeData
      }
    })

    const endTimeStatus = computed({
      set(val) {
        store.dispatch('commitEndTime',val)
      },
      get() {
        return store.getters.endTimeData
      }
    })

    

    const isOpen = ref(false)

    const handleOpen = ()=> {
      isOpen.value = !isOpen.value
    }


    onMounted(()=> {
      logout()
      // loadHolidays()
    })
    
    return {
      events,
      showAllDayEvents,
      shortEventsOnMonthView,
      arrange,
      handleHoliday,
      theWeek,
      handleOpen,isOpen,
      employeeList,employeeWeekendList,directorList,
      arrangeEmployeeList,arrangeWeekendEmployeeList,
      handleEmployeeList,handleArrangeEmployeeList,
      handleWeekendEmployeeList,handleWeekendArrangeEmployeeList,
      formatTime,startTimeStatus,endTimeStatus,
      createCsvFile,
      add,del,update,que,
      signUp,logout,login,
      save,
      // editEvents
      // loadData
      emailVerified,
      googleUserInfo
    }
  }
}
</script>

<template lang="pug">
.calendar
  //- button.add(@click='add') add
  //- button.del(@click='del') del
  //- button.query(@click='loadData') loadData
  //- button.save(@click='save') save
  //- button.sign-up(@click='signUp') Sign Up

  .login(@click='login' v-if='!emailVerified')
    //- .fab.fa-google
    h3 Google登入
    .fas.fa-sign-in-alt
  .logout( v-if='emailVerified')
    //- .fab.fa-google
    img(:src='googleUserInfo.user.photoURL', alt="alt")
    h4 {{googleUserInfo.user.displayName}}
    .fas.fa-sign-out-alt(@click='logout')
    //- h4(@click='logout') 登出
  .switch
    button(@click='handleOpen' :class='["fas","fa-bars",{"fa-times": isOpen}]')

  //- .menu(:class='[{"open": isOpen}]')
  .menu(:class='["animate__animated",{"animate__fadeInLeft": isOpen},{"open": isOpen}]')
    
    .date
      .startTime
        h3 開始日期
        input(type='date' v-model='startTimeStatus')
      .endTime
        h3 結束日期
        input(type='date' v-model='endTimeStatus')
    
    .list
      .weekdaysList
        .employeeList 
          h3 平日排班人員
          div(v-for='(item,id) in employeeList' :key='item.name') 
            h4 {{item.name}}
            //- button.fas.fa-plus-circle(@click='handleEmployeeList(item)')
            button.fas.fa-plus-square(@click='handleEmployeeList(item)')
        i.fas.fa-arrow-right
        .arrangeEmployeeList 
          h3 平日排班順序
          div(v-for='(item,id) in arrangeEmployeeList' :key='item.name')
            h4 {{formatTime(id+1)}}. {{item.name}} 
            button.fas.fa-times-circle(@click='handleArrangeEmployeeList(item)')
      .weekendList
        .employeeList 
          h3 假日排班人員
          div(v-for='(item,id) in employeeWeekendList' :key='item.name') 
            h4 {{item.name}}
            //- button.fas.fa-plus-circle(@click='handleEmployeeList(item)')
            button.fas.fa-plus-square(@click='handleWeekendEmployeeList(item)')
        i.fas.fa-arrow-right
        .arrangeEmployeeList 
          h3 假日排班順序
          div(v-for='(item,id) in arrangeWeekendEmployeeList' :key='item.name')
            h4 {{formatTime(id+1)}}. {{item.name}} 
            button.fas.fa-times-circle(@click='handleWeekendArrangeEmployeeList(item)')

    .input
      button(@click='arrange') 排班
      //- button(@click='createCsvFile') .csv班表下載
      button(@click='save') 儲存班表
    .designInfo
      h1 資訊室排班囉
      h5 created by ZhaoHouLin
      
  VueCal.calendar(
    :events='events' active-view="month" 
    :disable-views="['years', 'year']" locale="zh-hk"
    :show-all-day-events="['short', true, false][showAllDayEvents]"
    :events-on-month-view="[true, 'short'][shortEventsOnMonthView * 1]"
    :hide-weekdays="[]"
    :editable-events="{ title: true, drag: false, resize: true, delete: true, create: true }"
  )

  //- VueCal.weekend(
  //-   :events='events' active-view="month" 
  //-   :disable-views="['years', 'year']" locale="zh-hk"
  //-   :show-all-day-events="['short', true, false][showAllDayEvents]"
  //-   :events-on-month-view="[true, 'short'][shortEventsOnMonthView * 1]"
  //-   :hide-weekdays="[1,2,3,4,5]"
  //- )

</template>

<style lang="stylus" >
primary_color = #42b983
secondary_color = #e4f5ef


.calendar 
  width 100%
  height 100vh
  position absolute
  z-index 1


.vuecal__flex.vuecal__menu
  background-color primary_color
  color #fff
.vuecal__title-bar
  background-color secondary_color

.add,.del,.save,.query,.sign-up,.logout,.login
  z-index 100
  position absolute
  right 0
.del
  top 20px
.save
  top 40px
.query
  right 40px
.sign-up
  right 100px
// .logout
//   top 20px
//   right 200px
.login,.logout
  display flex
  justify-content space-around
  align-items center
  width auto
  height 46px
  padding 0 1rem
  color white
  cursor pointer
  // .fa-google
  //   font-size 1.5rem
  //   margin-right 1rem
  h3,h4
    color white
    background-color transparent
    border none
    margin 0px 12px
  .fas
    font-size 1.4rem
.logout
  // border 1px solid #000
  justify-content space-between
  img
    width 32px
    border-radius 100%
  .fas
    font-size 1.6rem
.switch
  position absolute
  top 0
  left 0
  width 46px
  height 46px
  display flex
  justify-content center
  align-items center
  z-index 3
  button
    width 90%
    height 90%
    background-color transparent
    border none
    cursor pointer
    font-size 2rem
    color #fff

.menu
  padding 8px
  width 50%
  height calc(100vh - 46px)
  background-color rgba(66,185,131,0.9)
  z-index 2
  display flex
  justify-content flex-start
  align-items center
  flex-direction column
  padding 1rem 0
  position fixed
  left -50%
  bottom 0
  transition 0.5s
  &.open
    left 0
  .designInfo
    color #fff
    position absolute
    padding 16px
    bottom 0
    width 100%
    z-index -1
  .date
    color #fff
    width 100%
    display flex
    justify-content space-around
    flex-direction column
    align-items center
    margin-bottom 1rem
  .input
    width 100%
    button
      font-size 1rem
      font-weight 700
      border none
      background-color secondary_color
      color #222
      margin 0 8px
      padding 8px 16px
      border-radius 4px
      cursor pointer


  .list
    color #fff
    display flex
    justify-content space-around
    align-items flex-start
    width 100%
    padding 1rem 0
    margin-bottom 1rem
    position relative
    i
      position absolute
      top 50%
      transform translate(-50%,-50%)

    .weekdaysList,.weekendList
      width 50%
      display flex
      justify-content center
      // border 1px solid #222
      .arrangeEmployeeList
        margin-left 2rem
      .employeeList,.arrangeEmployeeList
        h3
          margin-bottom 12px

      .employeeList div,.arrangeEmployeeList div
        color #222
        background-color secondary_color
        display flex
        justify-content center
        align-items center
        margin-bottom 4px
        padding 4px 8px
        border-radius 4px
        button
          border none
          color primary_color
          cursor pointer
          font-size 1rem
          margin-left 8px


.startTime,.endTime
  display flex
  justify-content center
  align-items center
  h3
    margin-right 8px


.vuecal__cell-events .vuecal__event
  background-color transparent


</style>