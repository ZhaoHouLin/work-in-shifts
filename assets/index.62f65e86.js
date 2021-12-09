import{u as e,c as t,o as a,a as n,b as l,w as s,v as i,F as m,r as o,d as r,t as c,V as d,e as p,f as g,g as h,h as u}from"./vendor.ccda45c9.js";const y=()=>({formatTime:e=>{let t="00"+e;return`${t.substring(t.length-2)}`},theWeek:e=>{let t=0;e.getYear();let a=new Array(12);if(a[0]=31,a[2]=31,a[3]=30,a[4]=31,a[5]=30,a[6]=31,a[7]=31,a[8]=30,a[9]=31,a[10]=30,a[11]=31,Math.round(e.getYear()/4)==e.getYear()/4?a[1]=29:a[1]=28,0==e.getMonth())t+=e.getDate();else{const l=e.getMonth();for(var n=1;n<=l;n++)t+=a[n-1];t+=e.getDate()}return Math.round(t/7)}});var v=[{"西元日期":"20211203","星期":"五","是否放假":"0","備註":""},{"西元日期":"20211204","星期":"六","是否放假":"2","備註":""},{"西元日期":"20211205","星期":"日","是否放假":"2","備註":""},{"西元日期":"20211206","星期":"一","是否放假":"0","備註":""},{"西元日期":"20211207","星期":"二","是否放假":"0","備註":""},{"西元日期":"20211208","星期":"三","是否放假":"0","備註":""},{"西元日期":"20211209","星期":"四","是否放假":"0","備註":""},{"西元日期":"20211210","星期":"五","是否放假":"0","備註":""},{"西元日期":"20211211","星期":"六","是否放假":"2","備註":""},{"西元日期":"20211212","星期":"日","是否放假":"2","備註":""},{"西元日期":"20211213","星期":"一","是否放假":"0","備註":""},{"西元日期":"20211214","星期":"二","是否放假":"0","備註":""},{"西元日期":"20211215","星期":"三","是否放假":"0","備註":""},{"西元日期":"20211216","星期":"四","是否放假":"0","備註":""},{"西元日期":"20211217","星期":"五","是否放假":"0","備註":""},{"西元日期":"20211218","星期":"六","是否放假":"2","備註":""},{"西元日期":"20211219","星期":"日","是否放假":"2","備註":""},{"西元日期":"20211220","星期":"一","是否放假":"0","備註":""},{"西元日期":"20211221","星期":"二","是否放假":"0","備註":""},{"西元日期":"20211222","星期":"三","是否放假":"0","備註":""},{"西元日期":"20211223","星期":"四","是否放假":"0","備註":""},{"西元日期":"20211224","星期":"五","是否放假":"0","備註":""},{"西元日期":"20211225","星期":"六","是否放假":"2","備註":""},{"西元日期":"20211226","星期":"日","是否放假":"2","備註":""},{"西元日期":"20211227","星期":"一","是否放假":"0","備註":""},{"西元日期":"20211228","星期":"二","是否放假":"0","備註":""},{"西元日期":"20211229","星期":"三","是否放假":"0","備註":""},{"西元日期":"20211230","星期":"四","是否放假":"0","備註":""},{"西元日期":"20211231","星期":"五","是否放假":"2","備註":"補假"},{"西元日期":"20220101","星期":"六","是否放假":"2","備註":"開國紀念日"},{"西元日期":"20220102","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220103","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220104","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220105","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220106","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220107","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220108","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220109","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220110","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220111","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220112","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220113","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220114","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220115","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220116","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220117","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220118","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220119","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220120","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220121","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220122","星期":"六","是否放假":"0","備註":"補行上班"},{"西元日期":"20220123","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220124","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220125","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220126","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220127","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220128","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220129","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220130","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220131","星期":"一","是否放假":"2","備註":"農曆除夕"},{"西元日期":"20220201","星期":"二","是否放假":"2","備註":"春節"},{"西元日期":"20220202","星期":"三","是否放假":"2","備註":"春節"},{"西元日期":"20220203","星期":"四","是否放假":"2","備註":"春節"},{"西元日期":"20220204","星期":"五","是否放假":"2","備註":"調整放假"},{"西元日期":"20220205","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220206","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220207","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220208","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220209","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220210","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220211","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220212","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220213","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220214","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220215","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220216","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220217","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220218","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220219","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220220","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220221","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220222","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220223","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220224","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220225","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220226","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220227","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220228","星期":"一","是否放假":"2","備註":"和平紀念日"},{"西元日期":"20220301","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220302","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220303","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220304","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220305","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220306","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220307","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220308","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220309","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220310","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220311","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220312","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220313","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220314","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220315","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220316","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220317","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220318","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220319","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220320","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220321","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220322","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220323","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220324","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220325","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220326","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220327","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220328","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220329","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220330","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220331","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220401","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220402","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220403","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220404","星期":"一","是否放假":"2","備註":"兒童節"},{"西元日期":"20220405","星期":"二","是否放假":"2","備註":"民族掃墓節"},{"西元日期":"20220406","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220407","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220408","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220409","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220410","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220411","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220412","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220413","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220414","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220415","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220416","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220417","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220418","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220419","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220420","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220421","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220422","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220423","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220424","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220425","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220426","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220427","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220428","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220429","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220430","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220501","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220502","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220503","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220504","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220505","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220506","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220507","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220508","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220509","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220510","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220511","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220512","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220513","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220514","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220515","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220516","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220517","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220518","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220519","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220520","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220521","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220522","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220523","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220524","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220525","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220526","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220527","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220528","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220529","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220530","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220531","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220601","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220602","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220603","星期":"五","是否放假":"2","備註":"端午節"},{"西元日期":"20220604","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220605","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220606","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220607","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220608","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220609","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220610","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220611","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220612","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220613","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220614","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220615","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220616","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220617","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220618","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220619","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220620","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220621","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220622","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220623","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220624","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220625","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220626","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220627","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220628","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220629","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220630","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220701","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220702","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220703","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220704","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220705","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220706","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220707","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220708","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220709","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220710","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220711","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220712","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220713","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220714","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220715","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220716","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220717","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220718","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220719","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220720","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220721","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220722","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220723","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220724","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220725","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220726","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220727","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220728","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220729","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220730","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220731","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220801","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220802","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220803","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220804","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220805","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220806","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220807","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220808","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220809","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220810","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220811","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220812","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220813","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220814","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220815","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220816","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220817","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220818","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220819","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220820","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220821","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220822","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220823","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220824","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220825","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220826","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220827","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220828","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220829","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220830","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220831","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220901","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220902","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220903","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220904","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220905","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220906","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220907","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220908","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220909","星期":"五","是否放假":"2","備註":"補假"},{"西元日期":"20220910","星期":"六","是否放假":"2","備註":"中秋節"},{"西元日期":"20220911","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220912","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220913","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220914","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220915","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220916","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220917","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220918","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220919","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220920","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220921","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220922","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220923","星期":"五","是否放假":"0","備註":""},{"西元日期":"20220924","星期":"六","是否放假":"2","備註":""},{"西元日期":"20220925","星期":"日","是否放假":"2","備註":""},{"西元日期":"20220926","星期":"一","是否放假":"0","備註":""},{"西元日期":"20220927","星期":"二","是否放假":"0","備註":""},{"西元日期":"20220928","星期":"三","是否放假":"0","備註":""},{"西元日期":"20220929","星期":"四","是否放假":"0","備註":""},{"西元日期":"20220930","星期":"五","是否放假":"0","備註":""},{"西元日期":"20221001","星期":"六","是否放假":"2","備註":""},{"西元日期":"20221002","星期":"日","是否放假":"2","備註":""},{"西元日期":"20221003","星期":"一","是否放假":"0","備註":""},{"西元日期":"20221004","星期":"二","是否放假":"0","備註":""},{"西元日期":"20221005","星期":"三","是否放假":"0","備註":""},{"西元日期":"20221006","星期":"四","是否放假":"0","備註":""},{"西元日期":"20221007","星期":"五","是否放假":"0","備註":""},{"西元日期":"20221008","星期":"六","是否放假":"2","備註":""},{"西元日期":"20221009","星期":"日","是否放假":"2","備註":""},{"西元日期":"20221010","星期":"一","是否放假":"2","備註":"國慶日"},{"西元日期":"20221011","星期":"二","是否放假":"0","備註":""},{"西元日期":"20221012","星期":"三","是否放假":"0","備註":""},{"西元日期":"20221013","星期":"四","是否放假":"0","備註":""},{"西元日期":"20221014","星期":"五","是否放假":"0","備註":""},{"西元日期":"20221015","星期":"六","是否放假":"2","備註":""},{"西元日期":"20221016","星期":"日","是否放假":"2","備註":""},{"西元日期":"20221017","星期":"一","是否放假":"0","備註":""},{"西元日期":"20221018","星期":"二","是否放假":"0","備註":""},{"西元日期":"20221019","星期":"三","是否放假":"0","備註":""},{"西元日期":"20221020","星期":"四","是否放假":"0","備註":""},{"西元日期":"20221021","星期":"五","是否放假":"0","備註":""},{"西元日期":"20221022","星期":"六","是否放假":"2","備註":""},{"西元日期":"20221023","星期":"日","是否放假":"2","備註":""},{"西元日期":"20221024","星期":"一","是否放假":"0","備註":""},{"西元日期":"20221025","星期":"二","是否放假":"0","備註":""},{"西元日期":"20221026","星期":"三","是否放假":"0","備註":""},{"西元日期":"20221027","星期":"四","是否放假":"0","備註":""},{"西元日期":"20221028","星期":"五","是否放假":"0","備註":""},{"西元日期":"20221029","星期":"六","是否放假":"2","備註":""},{"西元日期":"20221030","星期":"日","是否放假":"2","備註":""},{"西元日期":"20221031","星期":"一","是否放假":"0","備註":""},{"西元日期":"20221101","星期":"二","是否放假":"0","備註":""},{"西元日期":"20221102","星期":"三","是否放假":"0","備註":""},{"西元日期":"20221103","星期":"四","是否放假":"0","備註":""},{"西元日期":"20221104","星期":"五","是否放假":"0","備註":""},{"西元日期":"20221105","星期":"六","是否放假":"2","備註":""},{"西元日期":"20221106","星期":"日","是否放假":"2","備註":""},{"西元日期":"20221107","星期":"一","是否放假":"0","備註":""},{"西元日期":"20221108","星期":"二","是否放假":"0","備註":""},{"西元日期":"20221109","星期":"三","是否放假":"0","備註":""},{"西元日期":"20221110","星期":"四","是否放假":"0","備註":""},{"西元日期":"20221111","星期":"五","是否放假":"0","備註":""},{"西元日期":"20221112","星期":"六","是否放假":"2","備註":""},{"西元日期":"20221113","星期":"日","是否放假":"2","備註":""},{"西元日期":"20221114","星期":"一","是否放假":"0","備註":""},{"西元日期":"20221115","星期":"二","是否放假":"0","備註":""},{"西元日期":"20221116","星期":"三","是否放假":"0","備註":""},{"西元日期":"20221117","星期":"四","是否放假":"0","備註":""},{"西元日期":"20221118","星期":"五","是否放假":"0","備註":""},{"西元日期":"20221119","星期":"六","是否放假":"2","備註":""},{"西元日期":"20221120","星期":"日","是否放假":"2","備註":""},{"西元日期":"20221121","星期":"一","是否放假":"0","備註":""},{"西元日期":"20221122","星期":"二","是否放假":"0","備註":""},{"西元日期":"20221123","星期":"三","是否放假":"0","備註":""},{"西元日期":"20221124","星期":"四","是否放假":"0","備註":""},{"西元日期":"20221125","星期":"五","是否放假":"0","備註":""},{"西元日期":"20221126","星期":"六","是否放假":"2","備註":""},{"西元日期":"20221127","星期":"日","是否放假":"2","備註":""},{"西元日期":"20221128","星期":"一","是否放假":"0","備註":""},{"西元日期":"20221129","星期":"二","是否放假":"0","備註":""},{"西元日期":"20221130","星期":"三","是否放假":"0","備註":""},{"西元日期":"20221201","星期":"四","是否放假":"0","備註":""},{"西元日期":"20221202","星期":"五","是否放假":"0","備註":""},{"西元日期":"20221203","星期":"六","是否放假":"2","備註":""},{"西元日期":"20221204","星期":"日","是否放假":"2","備註":""},{"西元日期":"20221205","星期":"一","是否放假":"0","備註":""},{"西元日期":"20221206","星期":"二","是否放假":"0","備註":""},{"西元日期":"20221207","星期":"三","是否放假":"0","備註":""},{"西元日期":"20221208","星期":"四","是否放假":"0","備註":""},{"西元日期":"20221209","星期":"五","是否放假":"0","備註":""},{"西元日期":"20221210","星期":"六","是否放假":"2","備註":""},{"西元日期":"20221211","星期":"日","是否放假":"2","備註":""},{"西元日期":"20221212","星期":"一","是否放假":"0","備註":""},{"西元日期":"20221213","星期":"二","是否放假":"0","備註":""},{"西元日期":"20221214","星期":"三","是否放假":"0","備註":""},{"西元日期":"20221215","星期":"四","是否放假":"0","備註":""},{"西元日期":"20221216","星期":"五","是否放假":"0","備註":""},{"西元日期":"20221217","星期":"六","是否放假":"2","備註":""},{"西元日期":"20221218","星期":"日","是否放假":"2","備註":""},{"西元日期":"20221219","星期":"一","是否放假":"0","備註":""},{"西元日期":"20221220","星期":"二","是否放假":"0","備註":""},{"西元日期":"20221221","星期":"三","是否放假":"0","備註":""},{"西元日期":"20221222","星期":"四","是否放假":"0","備註":""},{"西元日期":"20221223","星期":"五","是否放假":"0","備註":""},{"西元日期":"20221224","星期":"六","是否放假":"2","備註":""},{"西元日期":"20221225","星期":"日","是否放假":"2","備註":""},{"西元日期":"20221226","星期":"一","是否放假":"0","備註":""},{"西元日期":"20221227","星期":"二","是否放假":"0","備註":""},{"西元日期":"20221228","星期":"三","是否放假":"0","備註":""},{"西元日期":"20221229","星期":"四","是否放假":"0","備註":""},{"西元日期":"20221230","星期":"五","是否放假":"0","備註":""},{"西元日期":"20221231","星期":"六","是否放假":"2","備註":""}];const L=()=>{const a=e(),{formatTime:n,theWeek:l}=y(),s=t((()=>a.getters.eventsData)),i=t((()=>a.getters.directorListData)),m=t((()=>a.getters.employeeListData)),o=t((()=>a.getters.employeeWeekendListData)),r=t((()=>a.getters.arrangeEmployeeListData)),c=t((()=>a.getters.arrangeWeekendEmployeeListData)),d=(e,t,a,n)=>e.slice(0,t)+n+e.slice(t,6)+n+e.slice(a),p=(e,t,l)=>{let s=0;for(let i=0;i<t+1;i+=1){if(e+864e5*i>=l+864e5)return;let t=new Date(e+864e5*i),m=n(t.getMonth()+1),o=n(t.getDate()),c=`${t.getFullYear()}-${m}-${o}`;v.some((e=>"0"===e["是否放假"]&&d(e["西元日期"],4,6,"-")===c))&&(a.dispatch("commitEvents",{start:`${t.getFullYear()}-${+m}-${+o} 09:00`,end:`${t.getFullYear()}-${+m}-${+o} 18:00`,title:`\n            <h3 style="margin: 4px">${r.value[s].name}</h3>\n            <h5 style="margin: 4px">${r.value[s].phone}</h5>\n            <h5 style="margin: 4px">${r.value[s].email}</h5>\n            `,name:`${r.value[s].name}`}),s+=1),s>=r.value.length&&(s=0)}},g=(e,t,l)=>{let s=0;for(let i=0;i<t+1;i+=1){if(e+864e5*i>=l+864e5)return;let t=new Date(e+864e5*i),m=n(t.getMonth()+1),o=n(t.getDate()),r=`${t.getFullYear()}-${m}-${o}`;v.some((e=>"2"===e["是否放假"]&&d(e["西元日期"],4,6,"-")===r))&&(a.dispatch("commitEvents",{start:`${t.getFullYear()}-${+m}-${+o} 09:00`,end:`${t.getFullYear()}-${+m}-${+o} 18:00`,title:`\n              <h3 style="margin: 4px">${c.value[s].name}</h3>\n              <h5 style="margin: 4px">${c.value[s].phone}</h5>\n              <h5 style="margin: 4px">${c.value[s].email}</h5>\n              `,name:`${c.value[s].name}`}),s+=1),s>=c.value.length&&(s=0)}},h=(e,t,s)=>{for(let m=0;m<t+1;m+=1){if(e+864e5*m>=s+864e5)return;let t=new Date(e+864e5*m);console.log();let o=n(t.getMonth()+1),r=n(t.getDate());t.getFullYear(),6===t.getDay()&&l(t)%2!=0?a.dispatch("commitEvents",{start:`${t.getFullYear()}-${+o}-${+r} 09:00`,end:`${t.getFullYear()}-${+o}-${+r} 18:00`,title:`\n              <h3 style="margin: 2px">本周主管: ${i.value[3].name}</h3>\n              `,name:`${i.value[3].name}`}):0===t.getDay()&&l(t)%2!=0&&a.dispatch("commitEvents",{start:`${t.getFullYear()}-${+o}-${+r} 09:00`,end:`${t.getFullYear()}-${+o}-${+r} 18:00`,title:`\n              <h3 style="margin: 2px">本周主管: ${i.value[2].name}</h3>\n\n              `,name:`${i.value[2].name}`}),6===t.getDay()&&l(t)%2==0?a.dispatch("commitEvents",{start:`${t.getFullYear()}-${+o}-${+r} 09:00`,end:`${t.getFullYear()}-${+o}-${+r} 18:00`,title:`\n              <h3 style="margin: 2px">本周主管: ${i.value[0].name}</h3>\n\n              `,name:`${i.value[0].name}`}):0===t.getDay()&&l(t)%2==0&&a.dispatch("commitEvents",{start:`${t.getFullYear()}-${+o}-${+r} 09:00`,end:`${t.getFullYear()}-${+o}-${+r} 18:00`,title:`\n              <h3 style="margin: 2px">本周主管: ${i.value[1].name}</h3>\n\n              `,name:`${i.value[1].name}`})}},u=()=>{v.forEach((e=>{"2"===e["是否放假"]&&a.dispatch("commitEvents",{start:`${d(e["西元日期"],4,6,"-")} 00:00`,end:`${d(e["西元日期"],4,6,"-")} 23:59`,title:`\n            <h4 style="width:100%; height:20px;margin: 0px; color: #f00; ">${e["備註"]||"假日"}</h4>\n            `})}))};return{arrangeDate:p,arrangeWeekendDate:g,arrangeDirectList:h,arrange:()=>{a.dispatch("commitEventsSplice",{start:0,deleteCount:s.value.length});let e=new Date(a.getters.startTimeData),t=new Date(a.getters.endTimeData),n=t.getTime(),l=(t.getTime()-e.getTime())/864e5;0===a.getters.arrangeEmployeeListData.length&&(a.dispatch("commitListConcat",m.value),a.dispatch("commitEmployeelistSplice",{start:0,deleteCount:m.value.length})),0===a.getters.arrangeWeekendEmployeeListData.length&&(a.dispatch("commitWeekendListConcat",o.value),a.dispatch("commitEmployeeWeekendListSplice",{start:0,deleteCount:o.value.length})),u(),p(e.getTime(),l,n),g(e.getTime(),l,n),h(e.getTime(),l,n)},handleHoliday:u}},E=()=>{const a=e(),n=t((()=>a.getters.eventsData)),l=(e,t,a)=>{let n="",l="";for(let m=0;m<e.length;m++)e[m].title&&(l+=e[m].title+",");l=l.slice(0,-1),n+=l+"\r\n";for(let m=0;m<t.length;m++){l="";for(let a=0;a<e.length;a++)t[m]&&(l+=`${t[m][e[a][a]]?t[m][e[a][a]]:""},`);l.slice(0,l.length-1),n+=l+"\r\n"}if(""==n)return void alert("Invalid data");let s=a,i=new Blob(["\ufeff"+n],{type:"text/csv"});if(window.navigator&&window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(n,s+".csv");else{let e=document.createElement("a");e.href=URL.createObjectURL(i),e.style="visibility:hidden",e.download=s+".csv",document.body.appendChild(e),e.click(),document.body.removeChild(e)}};return{events:n,JSONToExcelConvertor:l,createCsvFile:()=>{l([{title:"日期",0:"start"},{title:"值班人員",1:"name"}],n.value,"排班")}}},k=()=>{const a=e(),n=t((()=>a.getters.employeeListData)),l=t((()=>a.getters.arrangeEmployeeListData)),s=t((()=>a.getters.employeeWeekendListData)),i=t((()=>a.getters.arrangeWeekendEmployeeListData));return{handleEmployeeList:e=>{a.getters.arrangeEmployeeListData.some((t=>t.name===e.name))||a.dispatch("commitArrangeEmployeeList",e),n.value.forEach(((t,n)=>{e.name===t.name&&a.dispatch("commitEmployeelistSplice",{start:n,deleteCount:1})}))},handleArrangeEmployeeList:e=>{n.value.some((t=>t.name===e.name))||a.dispatch("commitEmployeeList",e),l.value.forEach(((t,n)=>{e.name===t.name&&a.dispatch("commitArrangeEmployeeListSplice",{start:n,deleteCount:1})}))},handleWeekendEmployeeList:e=>{a.getters.arrangeWeekendEmployeeListData.some((t=>t.name===e.name))||a.dispatch("commitArrangeWeekendEmployeeList",e),s.value.forEach(((t,n,l)=>{e.name===t.name&&a.dispatch("commitEmployeeWeekendListSplice",{start:n,deleteCount:1})}))},handleWeekendArrangeEmployeeList:e=>{s.value.some((t=>t.name===e.name))||a.dispatch("commitEmployeeWeekendList",e),i.value.forEach(((t,n,l)=>{e.name===t.name&&a.dispatch("commitArrangeWeekendEmployeeListSplice",{start:n,deleteCount:1})}))}}},$=y,w=L,W={class:"calendar"},f={class:"switch"},D={class:"date"},C={class:"startTime"},T=l("h3",null,"開始日期",-1),S={class:"endTime"},A=l("h3",null,"結束日期",-1),b={class:"list"},F={class:"weekdaysList"},Y={class:"employeeList"},O=l("h3",null,"平日排班人員",-1),x=l("i",{class:"fas fa-arrow-right"},null,-1),M={class:"arrangeEmployeeList"},j=l("h3",null,"平日排班順序",-1),V={class:"weekendList"},_={class:"employeeList"},H=l("h3",null,"假日排班人員",-1),U=l("i",{class:"fas fa-arrow-right"},null,-1),z={class:"arrangeEmployeeList"},B=l("h3",null,"假日排班順序",-1),I={class:"input"},q=l("div",{class:"designInfo"},[l("h1",null,"資訊室排班囉"),l("h5",null,"created by ZhaoHouLin")],-1);const J={components:{VueCal:d},setup(){const a=p(0),n=p(!1),l=t((()=>r.getters.employeeListData)),s=t((()=>r.getters.arrangeEmployeeListData)),i=t((()=>r.getters.employeeWeekendListData)),m=t((()=>r.getters.arrangeWeekendEmployeeListData)),o=t((()=>r.getters.directorListData)),r=e(),{formatTime:c,theWeek:d}=$(),h=t({set(e){r.dispatch("commitStartTime",e)},get:()=>r.getters.startTimeData}),u=t({set(e){r.dispatch("commitEndTime",e)},get:()=>r.getters.endTimeData}),{arrange:y,handleHoliday:v}=w(),{handleEmployeeList:L,handleArrangeEmployeeList:W,handleWeekendEmployeeList:f,handleWeekendArrangeEmployeeList:D}=k(),{events:C,JSONToExcelConvertor:T,createCsvFile:S}=E(),A=p(!1);return g((()=>{v()})),{events:C,showAllDayEvents:a,shortEventsOnMonthView:n,arrange:y,handleHoliday:v,theWeek:d,handleOpen:()=>{A.value=!A.value},isOpen:A,employeeList:l,employeeWeekendList:i,directorList:o,arrangeEmployeeList:s,arrangeWeekendEmployeeList:m,handleEmployeeList:L,handleArrangeEmployeeList:W,handleWeekendEmployeeList:f,handleWeekendArrangeEmployeeList:D,formatTime:c,startTimeStatus:h,endTimeStatus:u,createCsvFile:S}}};J.render=function(e,t,d,p,g,h){const u=r("VueCal");return a(),n("div",W,[l("div",f,[l("button",{onClick:t[1]||(t[1]=(...e)=>p.handleOpen&&p.handleOpen(...e)),class:["fas","fa-bars",{"fa-times":p.isOpen}]},null,2)]),l("div",{class:["menu",["animate__animated",{animate__fadeInLeft:p.isOpen},{open:p.isOpen}]]},[l("div",D,[l("div",C,[T,s(l("input",{type:"date","onUpdate:modelValue":t[2]||(t[2]=e=>p.startTimeStatus=e)},null,512),[[i,p.startTimeStatus]])]),l("div",S,[A,s(l("input",{type:"date","onUpdate:modelValue":t[3]||(t[3]=e=>p.endTimeStatus=e)},null,512),[[i,p.endTimeStatus]])])]),l("div",b,[l("div",F,[l("div",Y,[O,(a(!0),n(m,null,o(p.employeeList,((e,t)=>(a(),n("div",{key:e.name},[l("h4",null,c(e.name),1),l("button",{class:"fas fa-plus-square",onClick:t=>p.handleEmployeeList(e)},null,8,["onClick"])])))),128))]),x,l("div",M,[j,(a(!0),n(m,null,o(p.arrangeEmployeeList,((e,t)=>(a(),n("div",{key:e.name},[l("h4",null,c(p.formatTime(t+1))+". "+c(e.name),1),l("button",{class:"fas fa-times-circle",onClick:t=>p.handleArrangeEmployeeList(e)},null,8,["onClick"])])))),128))])]),l("div",V,[l("div",_,[H,(a(!0),n(m,null,o(p.employeeWeekendList,((e,t)=>(a(),n("div",{key:e.name},[l("h4",null,c(e.name),1),l("button",{class:"fas fa-plus-square",onClick:t=>p.handleWeekendEmployeeList(e)},null,8,["onClick"])])))),128))]),U,l("div",z,[B,(a(!0),n(m,null,o(p.arrangeWeekendEmployeeList,((e,t)=>(a(),n("div",{key:e.name},[l("h4",null,c(p.formatTime(t+1))+". "+c(e.name),1),l("button",{class:"fas fa-times-circle",onClick:t=>p.handleWeekendArrangeEmployeeList(e)},null,8,["onClick"])])))),128))])])]),l("div",I,[l("button",{onClick:t[4]||(t[4]=(...e)=>p.arrange&&p.arrange(...e))},"排班"),l("button",{onClick:t[5]||(t[5]=(...e)=>p.createCsvFile&&p.createCsvFile(...e))},".csv班表下載")]),q],2),l(u,{class:"calendar",events:p.events,"active-view":"month","disable-views":["years","year"],locale:"zh-hk","show-all-day-events":["short",!0,!1][p.showAllDayEvents],"events-on-month-view":[!0,"short"][1*p.shortEventsOnMonthView],"hide-weekdays":[],"editable-events":{title:!0,drag:!1,resize:!0,delete:!0,create:!0}},null,8,["events","show-all-day-events","events-on-month-view"])])};const N={components:{Calendar:J},setup:()=>({}),render:function(e,t,l,s,i,m){const o=r("Calendar");return a(),n(o)}};var R=[{name:"賴美惠",phone:"0920-214-506",email:"annylai@cdc.gov.tw"},{name:"郭姿伶",phone:"0972-703-325",email:"attewer110@cdc.gov.tw"},{name:"蔡佳學",phone:"0978-137-353",email:"bluesman@cdc.gov.tw"},{name:"鄭聲和",phone:"0922-462-681",email:"shancsh@cdc.gov.tw"},{name:"賴宥安",phone:"0971-818-236",email:"laisj123@cdc.gov.tw"},{name:"朱庭健",phone:"0910-041-680",email:"chien@cdc.gov.tw"},{name:"周貝盈",phone:"0963-692-765",email:"peiying@cdc.gov.tw"},{name:"蔡宗旆",phone:"0966-631-358",email:"r95922154@cdc.gov.tw"},{name:"胡育昇",phone:"0913-825-995",email:"billgate@cdc.gov.tw"},{name:"梁鋆立",phone:"0978-953-500",email:"aj5615@cdc.gov.tw"},{name:"余芳如",phone:"0937-310-361",email:"enzo@cdc.gov.tw"},{name:"徐啟勝",phone:"0933-965-099",email:"vict5733@cdc.gov.tw"},{name:"林振芳",phone:"0988-356-561",email:"jflin598@cdc.gov.tw"},{name:"冷怡慧",phone:"0912-210-167",email:"coldy@cdc.gov.tw"},{name:"謝東村",phone:"0982-656-132",email:"tom1688@cdc.gov.tw"}];const{formatTime:Z}=$(),G=new Date;let K=Z(G.getMonth()+1),P=Z(G.getDate());const Q=`${G.getFullYear()}-${K}-${P}`;var X=h({state:{employeeList:R,employeeWeekendList:R.concat(),arrangeEmployeeList:[],arrangeWeekendEmployeeList:[],directorList:[{name:"主任",phone:"0928-106-098",email:"james_whc@cdc.gov.tw"},{name:"主任電話值班",phone:"0928-106-098",email:"james_whc@cdc.gov.tw"},{name:"科長",phone:"0916-711-041",email:"lsw@cdc.gov.tw"},{name:"科長電話值班",phone:"0916-711-041",email:"lsw@cdc.gov.tw"}],events:[],startTime:Q,endTime:Q},actions:{commitEmployeeList({commit:e},t){e("stateEmployeeList",t)},commitEmployeeWeekendList({commit:e},t){e("stateEmployeeWeekendList",t)},commitArrangeEmployeeList({commit:e},t){e("stateArrangeEmployeeList",t)},commitArrangeWeekendEmployeeList({commit:e},t){e("stateArrangeWeekendEmployeeList",t)},commitEmployeelistSplice({commit:e},t){e("stateEmployeelistSplice",t)},commitEmployeeWeekendListSplice({commit:e},t){e("stateEmployeeWeekendListSplice",t)},commitArrangeEmployeeListSplice({commit:e},t){e("stateArrangeEmployeeListSplice",t)},commitArrangeWeekendEmployeeListSplice({commit:e},t){e("stateArrangeWeekendEmployeeListSplice",t)},commitEventsSplice({commit:e},t){e("stateEventsSplice",t)},commitListConcat({commit:e},t){e("stateListConcat",t)},commitWeekendListConcat({commit:e},t){e("stateWeekendListConcat",t)},commitEvents({commit:e},t){e("stateEvents",t)},commitStartTime({commit:e},t){e("stateStartTime",t)},commitEndTime({commit:e},t){e("stateEndTime",t)}},mutations:{stateEmployeeList(e,t){e.employeeList.push(t)},stateEmployeeWeekendList(e,t){e.employeeWeekendList.push(t)},stateArrangeEmployeeList(e,t){e.arrangeEmployeeList.push(t)},stateArrangeWeekendEmployeeList(e,t){e.arrangeWeekendEmployeeList.push(t)},stateEmployeelistSplice(e,t){e.employeeList.splice(t.start,t.deleteCount)},stateEmployeeWeekendListSplice(e,t){e.employeeWeekendList.splice(t.start,t.deleteCount)},stateArrangeEmployeeListSplice(e,t){e.arrangeEmployeeList.splice(t.start,t.deleteCount)},stateArrangeWeekendEmployeeListSplice(e,t){e.arrangeWeekendEmployeeList.splice(t.start,t.deleteCount)},stateEventsSplice(e,t){e.events.splice(t.start,t.deleteCount)},stateListConcat(e,t){e.arrangeEmployeeList.push(...t)},stateWeekendListConcat(e,t){e.arrangeWeekendEmployeeList.push(...t)},stateEvents(e,t){e.events.push(t)},stateStartTime(e,t){e.startTime=t},stateEndTime(e,t){e.endTime=t}},getters:{employeeListData:e=>e.employeeList,employeeWeekendListData:e=>e.employeeWeekendList,arrangeEmployeeListData:e=>e.arrangeEmployeeList,arrangeWeekendEmployeeListData:e=>e.arrangeWeekendEmployeeList,directorListData:e=>e.directorList,eventsData:e=>e.events,startTimeData:e=>e.startTime,endTimeData:e=>e.endTime}});u(N).use(X).mount("#app");