/*! updated; 02-27-2018 04:46 PM **/


Modulr.define("core.components:newsletter/comm",["require","jquery","cdn","core.plugins:EventMessageHandler"],function(require,$,CDN,EventMessageHandler){var LoadHandler=new EventMessageHandler,IFRAME_LOADED=!1,READY_STACK=[];LoadHandler.addHandler("parent.newsletter.iframe.loaded",function(){if(IFRAME_LOADED=!0,READY_STACK.length>0)for(;READY_STACK.length>0;){var props=READY_STACK.shift();LoadHandler.sendMessage($("#newsletter-ifr-comm").get(0),"newsletter.messenger.submit",props)}});var protocol=/s\:$/.test(window.location.protocol)?window.location.protocol:["h","tt","ps:"].join("");$("body").append('<iframe id="newsletter-ifr-comm" src="'+protocol+'//www.foxnews.com/portal/newsalertsubscribe-xdcomm" style="width:0;height:0;display:none;"></iframe>');var iframe=$("#newsletter-ifr-comm");return function(uid){function runCallbackStack(data){for(var i=0;i<CALLBACK_STACK.length;i++)CALLBACK_STACK[i](data)}var Proto=this,Handler=new EventMessageHandler,CALLBACK_STACK=[];Handler.addHandler("parent.newsletter.receiver",function(data){data.uid===uid&&runCallbackStack(data)}),Proto.receiver=function(callback){"function"==typeof callback&&CALLBACK_STACK.push(callback)},Proto.submit=function(props){IFRAME_LOADED?Handler.sendMessage(iframe.get(0),"newsletter.messenger.submit",props):READY_STACK.push(props)}}});