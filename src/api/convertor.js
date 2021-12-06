import { reactive } from 'vue'

const fn = ()=> {
    const events = reactive([])

    /**
      * 匯出excel
      * @param {Object} title        標題列key-val
      * @param {Object} data         值列key-val
      * @param {Object} fileName     檔名稱
    **/
    // 輸出成.csv下載
    const JSONToExcelConvertor = (title, data, name) => {
        let CSV = '';
        let row = "";
  
        for (let i = 0; i < title.length; i++) {
          if(title[i].title){
            row += title[i].title + ',';
          }
        }
        row = row.slice(0, -1);
        CSV += row + '\r\n'; 
  
        for (let i = 0; i < data.length; i++) {
          row = "";
          for (let j = 0; j < title.length; j++) {
            if(data[i]){
              row += `${data[i][title[j][j]] ? data[i][title[j][j]] : ''},`
            }
          }
          row.slice(0, row.length - 1);
          CSV += row + '\r\n';
        }
  
        if (CSV == '') {
          alert("Invalid data");
          return;
        }
        // console.log(CSV);
        let fileName = name;
        let uri = new Blob(['\ufeff' + CSV], {type:"text/csv"});
  
        if (window.navigator && window.navigator.msSaveOrOpenBlob) { // for IE
          window.navigator.msSaveOrOpenBlob(CSV, fileName + ".csv");
        } else { // for Non-IE（chrome、firefox etc.）
          let link = document.createElement("a");
          link.href = URL.createObjectURL(uri);
  
          link.style = "visibility:hidden";
          link.download = fileName + ".csv";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
    }

    const createCsvFile = ()=> {
      let title = [
        {
          title: '日期',
          0: 'start'
        },
        {
          title:'值班人員',
          1: 'name'
        }
      ]
      // console.log(JSON.stringify(directorList.value));
      JSONToExcelConvertor(title,events,'排班')
    }
      


    return {
      events,
      JSONToExcelConvertor,
      createCsvFile
    }

}
    
export const convertor = fn
    
    