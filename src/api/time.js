import { ref } from '@vue/reactivity';

const fn = ()=> {
  const formatTime = (val) => {                           //�榡�Ʈɶ�(00:00)
    let dTimes = '00' + val
    return `${dTimes.substring(dTimes.length - 2)}`
  }


  // �P�_�����P�{��
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

    // �P�_�O�_���|�~,�w��2�몺�Ѽƶi��p��
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
    // �o��ĴX�P
    let week = Math.round(totalDays / 7);
    // console.log(week);
    return week;
  }

  return {
    formatTime,
    theWeek
  }
}

export const time = fn