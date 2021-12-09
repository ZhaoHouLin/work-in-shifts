import { computed } from 'vue'
import { useStore } from "vuex";


import { time } from './time.js'
import holidayData from '../data/holidayData.json'

const fn = ()=> {
  const store = useStore()

  const { formatTime, theWeek } = time()

  const events = computed(() => {
    return store.getters.eventsData
  })

  const directorList = computed(() => {
    return store.getters.directorListData
  })

  const employeeList = computed(()=> {
    return store.getters.employeeListData
  })
  const employeeWeekendList = computed(()=> {
    return store.getters.employeeWeekendListData
  })
  const arrangeEmployeeList = computed(() => {
    return store.getters.arrangeEmployeeListData
  })
  const arrangeWeekendEmployeeList = computed(() => {
    return store.getters.arrangeWeekendEmployeeListData
  })
  

  // 日期插入-字串
  const insertStr = (source,first,second, newStr) => {
      return source.slice(0, first) + newStr + source.slice(first,6) + newStr + source.slice(second)
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
          store.dispatch('commitEvents', {
            start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
            end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
            title: `
            <h3 style="margin: 4px">${arrangeEmployeeList.value[peopleCounter].name}</h3>
            <h5 style="margin: 4px">${arrangeEmployeeList.value[peopleCounter].phone}</h5>
            <h5 style="margin: 4px">${arrangeEmployeeList.value[peopleCounter].email}</h5>
            `,
            name: `${arrangeEmployeeList.value[peopleCounter].name}`
          })
          // events.push({
          //   start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
          //   end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
          //   title: `
          //   <h3 style="margin: 4px">${arrangeEmployeeList.value[peopleCounter].name}</h3>
          //   <h5 style="margin: 4px">${arrangeEmployeeList.value[peopleCounter].phone}</h5>
          //   <h5 style="margin: 4px">${arrangeEmployeeList.value[peopleCounter].email}</h5>
          //   `,
          //   name: `${arrangeEmployeeList.value[peopleCounter].name}`
          // })
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
          store.dispatch('commitEvents', {
            start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
            end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
            title: `
              <h3 style="margin: 4px">${arrangeWeekendEmployeeList.value[peopleCounter].name}</h3>
              <h5 style="margin: 4px">${arrangeWeekendEmployeeList.value[peopleCounter].phone}</h5>
              <h5 style="margin: 4px">${arrangeWeekendEmployeeList.value[peopleCounter].email}</h5>
              `,
            name: `${arrangeWeekendEmployeeList.value[peopleCounter].name}`
          })
          // events.push({
          //     start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
          //     end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
          //     title: `
          //     <h3 style="margin: 4px">${arrangeWeekendEmployeeList.value[peopleCounter].name}</h3>
          //     <h5 style="margin: 4px">${arrangeWeekendEmployeeList.value[peopleCounter].phone}</h5>
          //     <h5 style="margin: 4px">${arrangeWeekendEmployeeList.value[peopleCounter].email}</h5>
          //     `,
          //     name: `${arrangeWeekendEmployeeList.value[peopleCounter].name}`
          // })
          peopleCounter+=1
        }
        if(peopleCounter>=arrangeWeekendEmployeeList.value.length) peopleCounter = 0
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
          store.dispatch('commitEvents', {
            start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
            end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
            title: `
              <h3 style="margin: 2px">本周主管: ${directorList.value[3].name}</h3>
              `,
            name: `${directorList.value[3].name}`
          })
          // events.push(
          //   {
          //     start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
          //     end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
          //     title: `
          //     <h3 style="margin: 2px">本周主管: ${directorList.value[3].name}</h3>
          //     `,
          //     name: `${directorList.value[3].name}`
          //   },
          //     // {
          //     //   start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
          //     //   end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
          //     //   title: `
          //     //   <h3 style="margin: 4px">本周小組長: ${directorList.value[4].name}</h3>

          //     //   `,
          //     //   name: `${directorList.value[4].name}`
          //     // }
          // )
        } else if(addDay.getDay() === 0 && theWeek(addDay)%2!==0){
          store.dispatch('commitEvents', {
            start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
            end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
            title: `
              <h3 style="margin: 2px">本周主管: ${directorList.value[2].name}</h3>

              `,
            name: `${directorList.value[2].name}`
          })
          // events.push(
          //   {
          //     start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
          //     end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
          //     title: `
          //     <h3 style="margin: 2px">本周主管: ${directorList.value[2].name}</h3>

          //     `,
          //     name: `${directorList.value[2].name}`
          //   }
          // )
        }


        if(addDay.getDay() === 6 && theWeek(addDay)%2===0){
          store.dispatch('commitEvents', {
            start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
            end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
            title: `
              <h3 style="margin: 2px">本周主管: ${directorList.value[0].name}</h3>

              `,
            name: `${directorList.value[0].name}`
          })
          // events.push(
          //   {
          //     start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
          //     end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
          //     title: `
          //     <h3 style="margin: 2px">本周主管: ${directorList.value[0].name}</h3>

          //     `,
          //     name: `${directorList.value[0].name}`
          //   }
          // )
        } else if(addDay.getDay() === 0 && theWeek(addDay)%2===0){
          store.dispatch('commitEvents', {
            start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
            end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
            title: `
              <h3 style="margin: 2px">本周主管: ${directorList.value[1].name}</h3>

              `,
            name: `${directorList.value[1].name}`
          })
          // events.push(
          //   {
          //     start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
          //     end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
          //     title: `
          //     <h3 style="margin: 2px">本周主管: ${directorList.value[1].name}</h3>

          //     `,
          //     name: `${directorList.value[1].name}`
          //   },
          //   // {
          //   //   start: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 09:00`,
          //   //   end: `${addDay.getFullYear()}-${+addDayMonth}-${+addDayDate} 18:00`,
          //   //   title: `
          //   //   <h3 style="margin: 4px">本周小組長: ${directorList.value[5].name}</h3>
    
          //   //   `,
          //   //   name: `${directorList.value[5].name}`
          //   // }
          // )
        }

    } 
  }

  const handleHoliday = ()=> {
    holidayData.forEach(element => {
        if (element['\u662f\u5426\u653e\u5047']==='2') {
          store.dispatch('commitEvents', {
            start: `${insertStr(element['\u897f\u5143\u65e5\u671f'], 4, 6, '-')} 00:00`,
            end: `${insertStr(element['\u897f\u5143\u65e5\u671f'], 4, 6, '-')} 23:59`,
            title: `
            <h4 style="width:100%; height:20px;margin: 0px; color: #f00; ">${element["\u5099\u8a3b"] || '假日'}</h4>
            `
          })
          // events.push({
          //   start: `${insertStr(element['\u897f\u5143\u65e5\u671f'],4,6,'-')} 00:00`,
          //   end: `${insertStr(element['\u897f\u5143\u65e5\u671f'],4,6,'-')} 23:59`,
          //   title: `
          //   <h4 style="width:100%; height:20px;margin: 0px; color: #f00; ">${element["\u5099\u8a3b"]||'假日'}</h4>
          //   `
          // })
        }
    });
  }

  // 排班
  const arrange = ()=> {
    store.dispatch('commitEventsSplice',{
      start: 0,
      deleteCount: events.value.length
    })

    let startDay = new Date(store.getters.startTimeData)
    let endDay = new Date(store.getters.endTimeData)
    let endDayTime = endDay.getTime()
    let plusTimes = endDay.getTime()-startDay.getTime()
    let plusDays = plusTimes/(1000*60*60*24)

    if (store.getters.arrangeEmployeeListData.length === 0) {
      store.dispatch('commitListConcat', employeeList.value)
      store.dispatch('commitEmployeelistSplice',{
        start: 0,
        deleteCount: employeeList.value.length
      })
    }
    if (store.getters.arrangeWeekendEmployeeListData.length === 0) {
      store.dispatch('commitWeekendListConcat', employeeWeekendList.value)
      store.dispatch('commitEmployeeWeekendListSplice', {
        start: 0,
        deleteCount: employeeWeekendList.value.length
      })
    }
    
    handleHoliday()
    arrangeDate(startDay.getTime(),plusDays,endDayTime)
    arrangeWeekendDate(startDay.getTime(),plusDays,endDayTime)
    arrangeDirectList(startDay.getTime(),plusDays,endDayTime)
  }

  return {
      arrangeDate,
      arrangeWeekendDate,
      arrangeDirectList,
      arrange,
      handleHoliday
  }
}

export const arrangeDateList = fn