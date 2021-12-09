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

  // �B�z����ƯZ�H��
  const handleEmployeeList = (item)=> {
    
      let had = store.getters.arrangeEmployeeListData.some((element)=> {            //�ˬd���ǦW��w�g�s�b�ƯZ�W��H��?
        return element.name === item .name
      })
      if (!had) {
        store.dispatch('commitArrangeEmployeeList',item)
        // arrangeEmployeeList.value.push(item)
      }
      employeeList.value.forEach((element,idx) => {                 //�R���ƯZ�W��H��
        if (item.name === element.name) {
          store.dispatch('commitEmployeelistSplice',{
            start: idx,
            deleteCount: 1
          })
          // arr.splice(idx,1)
        }
      });
    }

    // �B�z����ƯZ���ǦW��
    const handleArrangeEmployeeList = (item)=> {
      let had = employeeList.value.some((element)=> {                   //�ˬd�ƯZ�W��w�g�s�b���ǦW��H��?
        return element.name === item .name
      })
      if (!had) {
        store.dispatch('commitEmployeeList',item)
      }
      arrangeEmployeeList.value.forEach((element,idx) => {          //�R�����ǦW��H��
        if (item.name === element.name) {
          // arr.splice(idx,1)
          store.dispatch('commitArrangeEmployeeListSplice',{
            start: idx,
            deleteCount: 1
          })
        }
      });
    }


    // �B�z����ƯZ�H��
    const handleWeekendEmployeeList = (item)=> {
      let had = store.getters.arrangeWeekendEmployeeListData.some((element)=> {            //�ˬd���ǦW��w�g�s�b�ƯZ�W��H��?
        return element.name === item .name
      })
      if (!had) {
        store.dispatch('commitArrangeWeekendEmployeeList',item)
        // arrangeWeekendEmployeeList.value.push(item)
      }
      employeeWeekendList.value.forEach((element,idx,arr) => {                 //�R���ƯZ�W��H��
        if (item.name === element.name) {
          // arr.splice(idx,1)
          store.dispatch('commitEmployeeWeekendListSplice',{
            start: idx,
            deleteCount: 1
          })
        }
      });
    }

    // �B�z����ƯZ���ǦW��
    const handleWeekendArrangeEmployeeList = (item)=> {
      let had = employeeWeekendList.value.some((element)=> {                   //�ˬd�ƯZ�W��w�g�s�b���ǦW��H��?
        return element.name === item .name
      })
      if (!had) {
        // employeeWeekendList.value.push(item)
        store.dispatch('commitEmployeeWeekendList',item)
      }
      arrangeWeekendEmployeeList.value.forEach((element,idx,arr) => {          //�R�����ǦW��H��
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