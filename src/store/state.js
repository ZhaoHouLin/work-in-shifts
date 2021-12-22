
import { apiTime } from '../api'
// import employeeData from '../data/employeeData.json'
import directorData from '../data/directorData.json'

const { today,formatTime } = apiTime()
let formatMonth = formatTime(today.getMonth() + 1)
let formatDate = formatTime(today.getDate())
const startTime = `${today.getFullYear()}-${formatMonth}-${formatDate}`

export default {
  employeeList: [],
  employeeWeekendList: [],  //深拷貝
  arrangeEmployeeList: [],
  arrangeWeekendEmployeeList: [],
  directorList: directorData,
  events: [],
  startTime: startTime,
  endTime: startTime,
  googleUserInfo: {
    user:{
      photoURL:'',
      displayName:''
    }
  }
}