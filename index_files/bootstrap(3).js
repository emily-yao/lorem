/*! updated; 02-27-2018 04:46 PM **/


!function(Modulr,FNC){var uid="core.templates";if(Modulr.getInstance(uid))return!1;var Instance=Modulr.config({instance:uid,baseDomain:FNC.CDN.domain,baseUrl:"/static/orion/scripts/core/templates/app",masterFile:"/static/orion/scripts/core/utils/modulr/master.js",packages:["core.plugins","core.base"],shim:{jquery:{src:"/static/orion/scripts/core/utils/jquery/core.js",exports:"jQuery"},lodash:{src:"/static/orion/scripts/core/utils/lodash.js",exports:"_"}}});Instance.define("cdn",function(){return FNC.CDN}),Instance.require(["main"])}(window.Modulr,window.FNC);