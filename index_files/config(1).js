/*! updated; 02-27-2018 04:46 PM **/


Modulr.define("core.auth:config",["require","jquery","cdn"],function(require,$){var CDN=require("cdn"),env=(CDN.domain,CDN.env),protocol=["htt","ps:"].join(""),config={};return config.hostname=function(){var hostname;switch(env){case"qa":hostname="aem-dev-publisher.foxnews.com";break;case"staging":hostname="foxnews.com";break;default:hostname="foxnews.com"}return hostname}(),config.auth0jslocation=protocol+"//cdn.auth0.com/js/auth0/8.9.2/auth0.min.js",config.profileApiUrl=function(){var res;switch(env){case"qa":res=protocol+"//foxnews-dev.us.webtask.io/userprofile";break;case"staging":res=protocol+"//foxnews.us.webtask.io/userprofile";break;default:res=protocol+"//foxnews.us.webtask.io/userprofile"}return res}(),config.profilePage=protocol+("qa"===env?"//dev.static.":"//www.")+"foxnews.com/community/auth/user/profile.html",config.cdn=CDN,config});