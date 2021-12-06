import { ref } from 'vue'

import employeeData from '../data/employeeData.json'
// import employeeData from '../data/fakeEmployeeData.json'


const fn = ()=> {

    const arrangeEmployeeList = ref([])
    const arrangeWeekendEmployeeList = ref([])
    const employeeList = ref(employeeData)
    const employeeWeekendList = ref([])
    employeeWeekendList.value = employeeList.value.concat()  //做職員資料深拷貝

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
  
      // 處理平日排班順序名單
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
  
  
      // 處理假日排班人員
      const handleWeekendEmployeeList = (item)=> {
        let had = arrangeWeekendEmployeeList.value.some((element)=> {            //檢查順序名單已經存在排班名單人員?
          return element.name === item .name
        })
        if (!had) {
          arrangeWeekendEmployeeList.value.push(item)
        }
        employeeWeekendList.value.forEach((element,idx,arr) => {                 //刪除排班名單人員
          if (item.name === element.name) {
            arr.splice(idx,1)
          }
        });
      }
  
      // 處理假日排班順序名單
      const handleWeekendArrangeEmployeeList = (item)=> {
        let had = employeeWeekendList.value.some((element)=> {                   //檢查排班名單已經存在順序名單人員?
          return element.name === item .name
        })
        if (!had) {
          employeeWeekendList.value.push(item)
        }
        arrangeWeekendEmployeeList.value.forEach((element,idx,arr) => {          //刪除順序名單人員
          if (item.name === element.name) {
            arr.splice(idx,1)
          }
        });
      }

    return {
        arrangeEmployeeList,
        arrangeWeekendEmployeeList,
        employeeList,
        employeeWeekendList,
        handleEmployeeList,
        handleArrangeEmployeeList,
        handleWeekendEmployeeList,
        handleWeekendArrangeEmployeeList
    }
}

export const handleList = fn