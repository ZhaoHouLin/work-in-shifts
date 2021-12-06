import { ref } from '@vue/reactivity';

const fn = ()=> {

    const today = new Date()

    const formatTime = (val) => {                           //格式化時間(00:00)
      let dTimes = '00' + val
      return `${dTimes.substring(dTimes.length - 2)}`
    }


    let formatMonth = formatTime(today.getMonth() + 1)
    let formatDate = formatTime(today.getDate())

    const startTime = ref(`${today.getFullYear()}-${formatMonth}-${formatDate}`)
    const endTime = ref(`${today.getFullYear()}-${formatMonth}-${formatDate}`)
    
    return {
        formatTime,
        startTime,
        endTime
    }
}

export const time = fn