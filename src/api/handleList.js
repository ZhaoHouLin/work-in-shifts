import { ref } from 'vue'

import employeeData from '../data/employeeData.json'
// import employeeData from '../data/fakeEmployeeData.json'


const fn = ()=> {

    const arrangeEmployeeList = ref([])
    const arrangeWeekendEmployeeList = ref([])
    const employeeList = ref(employeeData)
    const employeeWeekendList = ref([])
    employeeWeekendList.value = employeeList.value.concat()  //��¾����Ʋ`����

    const handleEmployeeList = (item)=> {
        let had = arrangeEmployeeList.value.some((element)=> {            //�ˬd���ǦW��w�g�s�b�ƯZ�W��H��?
          return element.name === item .name
        })
        if (!had) {
          arrangeEmployeeList.value.push(item)
        }
        employeeList.value.forEach((element,idx,arr) => {                 //�R���ƯZ�W��H��
          if (item.name === element.name) {
            arr.splice(idx,1)
          }
        });
      }
  
      // �B�z����ƯZ���ǦW��
      const handleArrangeEmployeeList = (item)=> {
        let had = employeeList.value.some((element)=> {                   //�ˬd�ƯZ�W��w�g�s�b���ǦW��H��?
          return element.name === item .name
        })
        if (!had) {
          employeeList.value.push(item)
        }
        arrangeEmployeeList.value.forEach((element,idx,arr) => {          //�R�����ǦW��H��
          if (item.name === element.name) {
            arr.splice(idx,1)
          }
        });
      }
  
  
      // �B�z����ƯZ�H��
      const handleWeekendEmployeeList = (item)=> {
        let had = arrangeWeekendEmployeeList.value.some((element)=> {            //�ˬd���ǦW��w�g�s�b�ƯZ�W��H��?
          return element.name === item .name
        })
        if (!had) {
          arrangeWeekendEmployeeList.value.push(item)
        }
        employeeWeekendList.value.forEach((element,idx,arr) => {                 //�R���ƯZ�W��H��
          if (item.name === element.name) {
            arr.splice(idx,1)
          }
        });
      }
  
      // �B�z����ƯZ���ǦW��
      const handleWeekendArrangeEmployeeList = (item)=> {
        let had = employeeWeekendList.value.some((element)=> {                   //�ˬd�ƯZ�W��w�g�s�b���ǦW��H��?
          return element.name === item .name
        })
        if (!had) {
          employeeWeekendList.value.push(item)
        }
        arrangeWeekendEmployeeList.value.forEach((element,idx,arr) => {          //�R�����ǦW��H��
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