/*! updated; 02-19-2018 09:01 AM */

var esi='ESI';window.CONST_Akamai_GEO={countryCode:"US",regionCode:"PA",dmaCode:"504",zipRange:"19019+19092-19093+19099+19101-19116+19118-19155+19160-19162+19170-19173+19175-19179+19181-19185+19187-19188+19190-19197+19244+19255"},window.CONST_Akamai_TIME={yr:"2018",mm:"03",dd:"01",dy:"4",hr:"00",min:"07",sec:"44"},window.AKAMAI_TIME_HELPER=function(){function USDST(d){d=d||getAkamaiCurrentTime();var ret=!1,yr=d.getFullYear(),currYrStart=function(){for(var dt=new Date("3/01/"+yr+" 00:00:00"),found=0;2>found;)0===dt.getDay()&&found++,2>found&&dt.setDate(dt.getDate()+1),dt.getMonth>=2&&(found=2,dt.setHours(2));return dt}(),currYrEnd=function(){for(var dt=new Date("11/01/"+yr+" 00:00:00"),found=!1;!found;)0===dt.getDay()?found=!0:dt.setDate(dt.getDate()+1),dt.getMonth()>10&&(found=!0),found&&dt.setHours(2);return dt}();return ret=d.getTime()>=currYrStart.getTime()&&d.getTime()<currYrEnd.getTime()?!0:!1,{val:ret,currYrStart:currYrStart,currYrEnd:currYrEnd,currYr:yr}}var AKAMAI_DATETIME=function(){var d=window.CONST_Akamai_TIME,date=[[d.mm,d.dd,d.yr].join("/"),[d.hr,d.min,d.sec].join(":")].join(" "),dt=new Date(date);return dt}(),customDate=function(){var x,loc=window.location,s=loc.search.substr(1),ret=null;s=s.split("&");for(x=0;x<s.length;x++)if("string"==typeof s[x]&&s[x].length>0){var p=s[x].split("=");if("cdt"===p[0]){var val=p[1]||"",reDate=/^([0-9]+){1,2}(\/|\-)([0-9]+){1,2}(\/|\-)([0-9]+){1,4}/g,reDateOnly=/^([0-9]+){1,2}(\/|\-)([0-9]+){1,2}(\/|\-)([0-9]+){1,4}$/,reTime=/\|([0-9]+){1,2}\:([0-9]+){1,2}\:([0-9]+){1,2}$/g,date=val.match(reDate),time=val.match(reTime);if(!time&&reDateOnly.test(val)&&(time=["|00:00:00"]),date&&time){date=date[0].split("-").join("/"),time=time[0].slice(1);var dateStr=[date,time].join(" "),dt=new Date(dateStr);window.console&&console.log&&console.log("DATE TEST OVERRIDE: "+dateStr),ret=dt}break}}return ret}(),getAkamaiCurrentTime=function(){var LOC_START_TIME=new Date,getTime=function(trueTime){var current=new Date,diff=current.getTime()-LOC_START_TIME.getTime(),useTime=trueTime?AKAMAI_DATETIME:customDate||AKAMAI_DATETIME,currAkamai=new Date(useTime.getTime()+diff);return USDST(currAkamai).val||customDate||currAkamai.setHours(currAkamai.getHours()-1),currAkamai};return getTime}();return{getCurrent:getAkamaiCurrentTime,isDST:USDST}}();