/*! updated; 02-27-2018 04:46 PM **/


Modulr.define("core.base:utils/search.query",["require","jquery"],function(require,$){return new function(){var Proto=this;Proto.getVal=function(name){var queryObj=Proto.getAll();return!(!queryObj||!queryObj[name])&&Proto.cleanVal(queryObj[name])},Proto.getAll=function(){for(var ret={},query=window.location.search.substr(1)||"",vals=query.split("&"),x=0;x<vals.length;x++){var sp=vals[x].split("="),name=sp[0]||!1,value=sp[1]||!1;name&&value&&(ret[name]=Proto.cleanVal(value).toString())}return ret},Proto.cleanVal=function(val){return val=$.trim(val||""),val=decodeURIComponent(val),val=val.replace(/\+/g," "),val=val.replace(/\s+/g," "),val=val.replace(/</g,"&lt;"),val=val.replace(/\>/g,"&gt;")},Proto.setToString=function(queryObj){var ret=[];for(var i in queryObj)ret.push(i+"="+queryObj[i]);return ret=ret.join("&")}}});