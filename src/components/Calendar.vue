<script>

import { reactive, ref } from '@vue/reactivity';
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/i18n/zh-hk.js'
import { onMounted } from '@vue/runtime-core';
import holidayData from '../data/holidayData.json'

import employeeData from '../data/employeeData.json'
import directorData from '../data/directorData.json'
// import employeeData from '../data/fakeEmployeeData.json'
// import directorData from '../data/fakeDirectorData.json'

export default {
  components: {
    VueCal
  },

  setup() {
    const showAllDayEvents = ref(0)
    const shortEventsOnMonthView = ref(false)

    const arrangeEmployeeList = ref([])

    const employeeList = ref(employeeData)
    const directorList = ref(directorData)

    const today = new Date()

    const formatTime = (val) => {                           //格式化時間(00:00)
      let dTimes = '00' + val
      return `${dTimes.substring(dTimes.length - 2)}`
    }


    let formatMonth = formatTime(today.getMonth() + 1)
    let formatDate = formatTime(today.getDate())

    const startTime = ref(`${today.getFullYear()}-${formatMonth}-${formatDate}`)
    const endTime = ref(`${today.getFullYear()}-${formatMonth}-${formatDate}`)

    const events = reactive([])

    const isOpen = ref(false)



    /**
      * 匯出excel
      * @param {Object} title        標題列key-val
      * @param {Object} data         值列key-val
      * @param {Object} fileName     檔名稱
    **/
    // 輸出成.csv下載
    const JSONToExcelConvertor = (title, data, name) => {
      let CSV = '';
      let row = "";

      for (let i = 0; i < title.length; i++) {
        if(title[i].title){
          row += title[i].title + ',';
        }
      }
      row = row.slice(0, -1);
      CSV += row + '\r\n'; 

      for (let i = 0; i < data.length; i++) {
        row = "";
        for (let j = 0; j < title.length; j++) {
          if(data[i]){
            row += `${data[i][title[j][j]] ? data[i][title[j][j]] : ''},`
          }
        }
        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
      }

      if (CSV == '') {
        alert("Invalid data");
        return;
      }
      // console.log(CSV);
      let fileName = name;
      let uri = new Blob(['\ufeff' + CSV], {type:"text/csv"});

      if (window.navigator && window.navigator.msSaveOrOpenBlob) { // for IE
        window.navigator.msSaveOrOpenBlob(CSV, fileName + ".csv");
      } else { // for Non-IE（chrome、firefox etc.）
        let link = document.createElement("a");
        link.href = URL.createObjectURL(uri);

        link.style = "visibility:hidden";
        link.download = fileName + ".csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }


    const createCsvFile = ()=> {
      let title = [
        {
          title: '日期',
          0: 'start'
        },
        {
          title:'值班人員',
          1: 'name'
        }
      ]
      // console.log(JSON.stringify(directorList.value));
      JSONToExcelConvertor(title,events,'排班')

    }


    // 處理排班人員
    const handleEmployeeList = (item)=> {
      let had = arrangeEmployeeList.value.some((element)=> {            //檢查順序名單已經存在排班名單人員?
        return element.name === item .name
      })
      if (!had) {
        arrangeEmployeeList.value.push(item)
      }
      employeeList.value.forEach((element,idx,arr) => {                 //刪除排班名單人員
        if (item.name === element.name) {
          arr.splice(idx,1)
        }
      });
    }

    // 處理排班順序名單
    const handleArrangeEmployeeList = (item)=> {
      let had = employeeList.value.some((element)=> {                   //檢查排班名單已經存在順序名單人員?
        return element.name === item .name
      })
      if (!had) {
        employeeList.value.push(item)
      }
      arrangeEmployeeList.value.forEach((element,idx,arr) => {          //刪除順序名單人員
        if (item.name === element.name) {
          arr.splice(idx,1)
        }
      });
    }


    const handleOpen = ()=> {
      isOpen.value = !isOpen.value
    }

    // 判斷單雙周程式
    const theWeek= (now)=> {
      let totalDays = 0;
      // let now = new Date();
      let years = now.getYear()
      if (years < 1000)
          years += 1900
      let days = new Array(12);
      days[0] = 31;
      days[2] = 31;
      days[3] = 30;
      days[4] = 31;
      days[5] = 30;
      days[6] = 31;
      days[7] = 31;
      days[8] = 30;
      days[9] = 31;
      days[10] = 30;
      days[11] = 31;
      
      // 判斷是否為閏年,針對2月的天數進行計算
      if (Math.round(now.getYear() / 4) == now.getYear() / 4) {
        days[1] = 29
      } else {
        days[1] = 28
      }
      if (now.getMonth() == 0) {
        totalDays = totalDays + now.getDate();
      } else {
        const curMonth = now.getMonth();
        for (var count = 1; count <= curMonth; count++) {
            totalDays = totalDays + days[count - 1];
        }
        totalDays = totalDays + now.getDate();
      }
      // 得到第幾周
      let week = Math.round(totalDays / 7);
      // console.log(week);
      return week;
    }

    // 日期插入-字串
    const insertStr = (source,first,second, newStr) => {
      return source.slice(0, first) + newStr + source.slice(first,6) + newStr + source.slice(second)
    }

    // 國定假日
    const handleHoliday = ()=> {
      // console.log(startTime.value);
      holidayData.forEach(element => {
        if (element['\u662f\u5426\u653e\u5047']==='2') {
          events.push({
            start: `${insertStr(element['\u897f\u5143\u65e5\u671f'],4,6,'-')} 00:00`,
            end: `${insertStr(element['\u897f\u5143\u65e5\u671f'],4,6,'-')} 23:59`,
            title: `
            <h4 style="width:100%; height:20px;margin: 0px; color: #f00; ">${element["\u5099\u8a3b"]||'假日'}</h4>
            `
          })
        }
      });
    }


    // 平日排班
    const arrangeDate = (startDayTime,plusDays,endDayTime)=> { 
      let peopleCounter = 0

      for(let dayCounter = 0; dayCounter < plusDays+1; dayCounter+=1) {
        if(startDayTime+1000*60*60*24*dayCounter >=endDayTime+1000*60*60*24) return //判斷增加的天數有無超過結束日期
        let addDay = new Date(startDayTime+1000*60*60*24*dayCounter)

        let addDayMonth = formatTime(addDay.getMonth() + 1)
        let addDayDate = formatTime(addDay.getDate())
        let formatAddDay = `${addDay.getFullYear()}-${addDayMonth}-${addDayDate}`

        let ans = holidayData.some((element)=> {
          return (element["\u662f\u5426\u653e\u5047"] === '0' && insertStr(element['\u897f\u5143\u65e5\u671f'],4,6,'-') === formatAddDay)
        })
   
        if (ans) {
          events.push({
            start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
            end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
            title: `
            <h3 style="margin: 4px">${arrangeEmployeeList.value[peopleCounter].name}</h3>
            <h5 style="margin: 4px">${arrangeEmployeeList.value[peopleCounter].phone}</h5>
            <h5 style="margin: 4px">${arrangeEmployeeList.value[peopleCounter].email}</h5>
            `,
            name: `${arrangeEmployeeList.value[peopleCounter].name}`
          })
          peopleCounter+=1
        }
        if(peopleCounter>=arrangeEmployeeList.value.length) peopleCounter = 0
      }
    }

    // 假日排班
    const arrangeWeekendDate = (startDayTime,plusDays,endDayTime)=> {
      let peopleCounter = 0
      for(let dayCounter = 0; dayCounter < plusDays+1; dayCounter+=1) {
        if(startDayTime+1000*60*60*24*dayCounter >=endDayTime+1000*60*60*24) return //判斷增加的天數有無超過結束日期
        let addDay = new Date(startDayTime+1000*60*60*24*dayCounter)

        let addDayMonth = formatTime(addDay.getMonth() + 1)
        let addDayDate = formatTime(addDay.getDate())
        let formatAddDay = `${addDay.getFullYear()}-${addDayMonth}-${addDayDate}`

        let ans = holidayData.some((element)=> {
          return (element["\u662f\u5426\u653e\u5047"] === '2' && insertStr(element['\u897f\u5143\u65e5\u671f'],4,6,'-') === formatAddDay)
        })

        if (ans) {
          events.push({
            start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
            end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
            title: `
            <h3 style="margin: 4px">${arrangeEmployeeList.value[peopleCounter].name}</h3>
            <h5 style="margin: 4px">${arrangeEmployeeList.value[peopleCounter].phone}</h5>
            <h5 style="margin: 4px">${arrangeEmployeeList.value[peopleCounter].email}</h5>
            `,
            name: `${arrangeEmployeeList.value[peopleCounter].name}`
          })
          peopleCounter+=1
        }
        if(peopleCounter>=arrangeEmployeeList.value.length) peopleCounter = 0
      }
    }

    // 主管周末排班
    const arrangeDirectList = (startDayTime,plusDays,endDayTime)=> {
      let peopleCounter = 0
      for(let dayCounter = 0; dayCounter < plusDays+1; dayCounter+=1) {
        if(startDayTime+1000*60*60*24*dayCounter >=endDayTime+1000*60*60*24) return //判斷增加的天數有無超過結束日期
        let addDay = new Date(startDayTime+1000*60*60*24*dayCounter)
        console.log();
        let addDayMonth = formatTime(addDay.getMonth() + 1)
        let addDayDate = formatTime(addDay.getDate())
        let formatAddDay = `${addDay.getFullYear()}-${addDayMonth}-${addDayDate}`

        // console.log(addDay.getDay());
        if(addDay.getDay() === 6 && theWeek(addDay)%2!==0){
          events.push(
            {
              start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
              end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
              title: `
              <h3 style="margin: 2px">本周主管: ${directorList.value[3].name}</h3>
              `,
              name: `${directorList.value[3].name}`
            },
            {
              start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
              end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
              title: `
              <h3 style="margin: 4px">本周小組長: ${directorList.value[4].name}</h3>

              `,
              name: `${directorList.value[4].name}`
            }
          )
        } else if(addDay.getDay() === 0 && theWeek(addDay)%2!==0){
          events.push(
            {
              start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
              end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
              title: `
              <h3 style="margin: 2px">本周主管: ${directorList.value[2].name}</h3>

              `,
              name: `${directorList.value[2].name}`
            }
          )
        }


        if(addDay.getDay() === 6 && theWeek(addDay)%2===0){
          events.push(
            {
              start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
              end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
              title: `
              <h3 style="margin: 2px">本周主管: ${directorList.value[0].name}</h3>
 
              `,
              name: `${directorList.value[0].name}`
            }
          )
        } else if(addDay.getDay() === 0 && theWeek(addDay)%2===0){
          events.push(
            {
              start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
              end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
              title: `
              <h3 style="margin: 2px">本周主管: ${directorList.value[1].name}</h3>

              `,
              name: `${directorList.value[1].name}`
            },
            {
              start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
              end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
              title: `
              <h3 style="margin: 4px">本周小組長: ${directorList.value[5].name}</h3>
   
              `,
              name: `${directorList.value[5].name}`
            }
          )
        }

      } 
    }

    // 排班
    const arrange = ()=> {
      events.splice(0,events.length)

      let startDay = new Date(startTime.value)
      let endDay = new Date(endTime.value)
      let endDayTime = endDay.getTime()
      let plusTimes = endDay.getTime()-startDay.getTime()
      let plusDays = plusTimes/(1000*60*60*24)

      if (arrangeEmployeeList.value.length === 0) {
        arrangeEmployeeList.value = arrangeEmployeeList.value.concat(employeeList.value)
        employeeList.value.splice(0,employeeList.value.length)
      } 
      
      handleHoliday()
      arrangeDate(startDay.getTime(),plusDays,endDayTime)
      arrangeWeekendDate(startDay.getTime(),plusDays,endDayTime)
      arrangeDirectList(startDay.getTime(),plusDays,endDayTime)
    }


    onMounted(()=> {
      handleHoliday()
    })
    
    return {
      events,
      showAllDayEvents,
      shortEventsOnMonthView,
      arrange,
      startTime,
      endTime,
      handleHoliday,
      theWeek,
      handleOpen,
      isOpen,
      employeeList,
      directorList,
      arrangeEmployeeList,
      handleEmployeeList,
      handleArrangeEmployeeList,
      formatTime,
      createCsvFile
    }
  }
}
</script>

<template lang="pug">
.calendar

  .switch
    button(@click='handleOpen' :class='["fas","fa-bars",{"fa-times": isOpen}]')

  //- .menu(:class='[{"open": isOpen}]')
  .menu(:class='["animate__animated",{"animate__fadeInLeft": isOpen},{"open": isOpen}]')
    
    .date
      .startTime
        h3 開始日期
        input(type='date' v-model='startTime')
      .endTime
        h3 結束日期
        input(type='date' v-model='endTime')
    
    .list
      .employeeList 
        h3 排班人員
        div(v-for='(item,id) in employeeList' :key='item.name') 
          h4 {{item.name}}
          //- button.fas.fa-plus-circle(@click='handleEmployeeList(item)')
          button.fas.fa-plus-square(@click='handleEmployeeList(item)')

      i.fas.fa-arrow-right

      .arrangeEmployeeList 
        h3 排班順序
        div(v-for='(item,id) in arrangeEmployeeList' :key='item.name')
          h4 {{formatTime(id+1)}}. {{item.name}} 
          button.fas.fa-times-circle(@click='handleArrangeEmployeeList(item)')

    .input
      button(@click='arrange') 排班
      button(@click='createCsvFile') .csv班表下載
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
  width 30%
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
    .employeeList,.arrangeEmployeeList
      h3
        margin-bottom 12px
    .employeeList div,.arrangeEmployeeList div
      color #222
      background-color secondary_color
      display flex
      justify-content flex-start
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