/*! updated; 02-27-2018 04:46 PM **/


Modulr.define("core.plugins:ImageResizer",["require"],function(require){return function(url,width,height){var w=width,h=height,u=url;if(isNaN(w)||isNaN(h))return url;if(u.indexOf("a57.foxnews.com")>-1||u.indexOf("nyc.imagesizer.foxnews.com")>-1){url=u.split("/");var idx=url.length;url[idx-3]=w,url[idx-2]=h,url=url.join("/")}else{url=u.split("/");var dim="/"+w+"/"+h+"/";0!==url[0].indexOf("http")&&"//"!==u.slice(0,2)||url.splice(0,2),url.unshift("//a57.foxnews.com"),url=url.slice(0,url.length-1).join("/")+dim+url.slice(url.length-1)}return url}});