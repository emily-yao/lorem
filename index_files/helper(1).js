/*! updated; 02-27-2018 04:46 PM **/


Modulr.define("core.auth:helper",["require","jquery"],function(require,$){var Helper=function(){};return Helper.prototype.log=function(){if(window.console){var args=Array.prototype.slice.call(arguments);args.unshift("[core.auth]");try{return window.console.log.apply(window.console,args)}catch(err){window.console.log(args.join(" | "))}}},new Helper});