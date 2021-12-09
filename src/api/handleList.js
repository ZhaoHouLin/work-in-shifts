import { computed } from 'vue'
import { useStore } from "vuex";


const fn = ()=> {
  const store = useStore()

  const employeeList = computed(()=> {
    return store.getters.employeeListData
  })

  const arrangeEmployeeList = computed(()=> {
    return store.getters.arrangeEmployeeListData
  })

  const employeeWeekendList = computed(() => {
    return store.getters.employeeWeekendListData
  })

  const arrangeWeekendEmployeeList = computed(() => {
    return store.getters.arrangeWeekendEmployeeListData
  })

  // 處理平日排班人員
  const handleEmployeeList = (item)=> {
    
      let had = store.getters.arrangeEmployeeListData.some((element)=> {            //檢查順序名單已經存在排班名單人員?
        return element.name === item .name
      })
      if (!had) {
        store.dispatch('commitArrangeEmployeeList',item)
        // arrangeEmployeeList.value.push(item)
      }
      employeeList.value.forEach((element,idx) => {                 //刪除排班名單人員
        if (item.name === element.name) {
          store.dispatch('commitEmployeelistSplice',{
            start: idx,
            deleteCount: 1
          })
          // arr.splice(idx,1)
        }
      });
    }

    // 處理平日排班順序名單
    const handleArrangeEmployeeList = (item)=> {
      let had = employeeList.value.some((element)=> {                   //檢查排班名單已經存在順序名單人員?
        return element.name === item .name
      })
      if (!had) {
        store.dispatch('commitEmployeeList',item)
      }
      arrangeEmployeeList.value.forEach((element,idx) => {          //刪除順序名單人員
        if (item.name === element.name) {
          // arr.splice(idx,1)
          store.dispatch('commitArrangeEmployeeListSplice',{
            start: idx,
            deleteCount: 1
          })
        }
      });
    }


    // 處理假日排班人員
    const handleWeekendEmployeeList = (item)=> {
      let had = store.getters.arrangeWeekendEmployeeListData.some((element)=> {            //檢查順序名單已經存在排班名單人員?
        return element.name === item .name
      })
      if (!had) {
        store.dispatch('commitArrangeWeekendEmployeeList',item)
        // arrangeWeekendEmployeeList.value.push(item)
      }
      employeeWeekendList.value.forEach((element,idx,arr) => {                 //刪除排班名單人員
        if (item.name === element.name) {
          // arr.splice(idx,1)
          store.dispatch('commitEmployeeWeekendListSplice',{
            start: idx,
            deleteCount: 1
          })
        }
      });
    }

    // 處理假日排班順序名單
    const handleWeekendArrangeEmployeeList = (item)=> {
      let had = employeeWeekendList.value.some((element)=> {                   //檢查排班名單已經存在順序名單人員?
        return element.name === item .name
      })
      if (!had) {
        // employeeWeekendList.value.push(item)
        store.dispatch('commitEmployeeWeekendList',item)
      }
      arrangeWeekendEmployeeList.value.forEach((element,idx,arr) => {          //刪除順序名單人員
        if (item.name === element.name) {
          // arr.splice(idx,1)
          store.dispatch('commitArrangeWeekendEmployeeListSplice', {
            start: idx,
            deleteCount: 1
          })
        }
      });
    }

  return {
      handleEmployeeList,
      handleArrangeEmployeeList,
      handleWeekendEmployeeList,
      handleWeekendArrangeEmployeeList
  }
}

export const handleList = fn