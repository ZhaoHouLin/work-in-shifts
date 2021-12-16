import { ref } from '@vue/reactivity';

const fn = ()=> {
  const formatTime = (val) => {                           //格式化時間(00:00)
    let dTimes = '00' + val
    return `${dTimes.substring(dTimes.length - 2)}`
  }

  const today = new Date()

  // 判斷單雙周程式
  const theWeek = (now) => {
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

  return {
    today,
    formatTime,
    theWeek
  }
}

export const time = fn