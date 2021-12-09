<script>

import { ref } from '@vue/reactivity';
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/i18n/zh-hk.js'
import { computed, onMounted } from '@vue/runtime-core';
import { useStore } from "vuex";
import { apiTime,apiArrangeDateList, apiConvertor, apiHandleList } from '../api'

export default {
  components: {
    VueCal
  },

  setup() {
    const showAllDayEvents = ref(0)
    const shortEventsOnMonthView = ref(false)


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

    const store = useStore()

    const { formatTime,theWeek } = apiTime()

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

    const isOpen = ref(false)


    const handleOpen = ()=> {
      isOpen.value = !isOpen.value
    }


    onMounted(()=> {
      handleHoliday()
    })
    
    return {
      events,
      showAllDayEvents,
      shortEventsOnMonthView,
      arrange,
 
      handleHoliday,
      theWeek,
      handleOpen,
      isOpen,
      employeeList,
      employeeWeekendList,
      directorList,
      arrangeEmployeeList,
      arrangeWeekendEmployeeList,
      handleEmployeeList,
      handleArrangeEmployeeList,
      handleWeekendEmployeeList,
      handleWeekendArrangeEmployeeList,
      formatTime,
      startTimeStatus,
      endTimeStatus,
      createCsvFile,
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