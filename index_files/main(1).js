/*! updated; 02-27-2018 04:46 PM **/


Modulr.define("core.video:views/fox-news/embed/main",["require","jquery","helper","config","models/embeds","models/is.authenticated","models/overlay","@fnc/embed/events","@fnc/embed/isa","@fnc/rules","@fnc/listener","ISA","cache.param"],function(require,$,Helper,config){function validate(target,opts,attr){var res=!0,errors=[];return 0===target.length?(res=!1,errors.push("target not found")):attr.videoId||opts.app.videoId||(errors.push("missing videoId"),res=!1),{valid:res,errors:errors}}function getAttr(target){var videoId=target.attr(VIDEO_UID_ATTR)||null,domain=target.attr(VIDEO_DOMAIN_ATTR)||Helper.getDomainId();return videoId=Helper.validateVideoId(videoId)?videoId:null,domain=-1===config.videoDomain.indexOf(domain)?null:domain,{videoId:videoId,domain:domain}}function changeVideo(self,videoId,newOpts){function reEmbed(){Helper.log("[embed] re-embedding iframe..");var currOpts=_.cloneDeep(self._opts);if(config.fncRadioId===videoId?Rules.set("fncRadio",newOpts):newOpts.app.domain||(newOpts.app.domain="foxnews"),!_.isEmpty(currOpts.app.ampConfig)){_.isEmpty(newOpts.app.ampConfig)&&(newOpts.app.ampConfig={site:config.akamai.configParam.site[newOpts.app.domain]||null});for(var id in currOpts.app.ampConfig)newOpts.app.ampConfig[id]||(newOpts.app.ampConfig=currOpts.ampConfig)}currOpts.app.domain!==newOpts.app.domain&&self._target.attr(VIDEO_DOMAIN_ATTR,newOpts.app.domain),self._opts.player={},self._opts.app.omtrVals={},_.merge(self._opts,newOpts),Rules.setApp(self._opts),self._PLAYER_READY=!1,self._INITIALIZED=!1,self.set()}self._target.attr(VIDEO_UID_ATTR,videoId);var attr=getAttr(self._target);Helper.reEmbedIframe(self,newOpts)?reEmbed():IsAuthenticated.check(videoId,newOpts.app.domain||attr.domain||null,function(bool){bool?reEmbed():self._IframeListener.send("__change",{videoId:videoId,opts:newOpts})})}function share(data){require(["core.plugins:Sharing"],function(Sharing){switch(data.provider){case"facebook":Sharing.facebook(data.url);break;case"twitter":Sharing.twitter({url:data.url,title:data.title});break;case"embed":break;case"email":var params=[];params.push("subject="+Helper.enc(data.title)),params.push("body=Video link:"+Helper.enc(data.url)),window.open("mailto:?"+params.join("&"),"_self")}})}var EventListener=require("@fnc/listener"),Events=require("@fnc/embed/events"),ISAInterface=require("@fnc/embed/isa"),Rules=require("@fnc/rules"),PageEmbed=require("models/embeds"),CacheParam=require("cache.param"),Overlay=require("models/overlay"),IsAuthenticated=require("models/is.authenticated"),ENV=Helper.getEnv(),ISA=require("ISA"),VIDEO_UID_ATTR="data-video-id",VIDEO_DOMAIN_ATTR="data-video-domain",CHANGE_STACK_ID="__change",App=function(target,opts){this._UID=PageEmbed.generateUID(),this._target=target||[],this._opts=function(uid){var res=_.cloneDeep(config.optsDefault);return res=_.merge(res,_.cloneDeep(opts)),res=_.merge(res,{app:{uid:uid}})}(this._UID),Rules.setApp(this._opts),this._PLAYER_READY=!1,this._INITIALIZED=!1,this._IframeListener=EventListener.create(this._target,this._UID,"embed"),this._Events=new Events(this._UID,this._IframeListener),this._EVENT_STACK={},this._LISTENER_INIT=!1,PageEmbed.initialize(this._UID,"fox-news"),this.__getOpts=function(){return this._opts}};return App.prototype.on=function(event,callback){"string"==typeof event&&"function"==typeof callback&&(this._EVENT_STACK[event]||(this._EVENT_STACK[event]=[]),this._EVENT_STACK[event].push(callback))},App.prototype.trigger=function(){function exec(){self._Events[event](callback,props)}var self=this,args=arguments,event=args[0],props=null,callback=null;"function"==typeof args[1]?callback=args[1]:("function"!=typeof args[1]&&(props=args[1]),"function"==typeof args[2]&&(callback=args[2])),self._Events[event]&&(self.isReady()?exec():self.on("player.ready",function(){exec()}))},App.prototype.isReady=function(){return!!this._PLAYER_READY},App.prototype.getOpts=function(){return this.__getOpts()},App.prototype.pause=function(){this.trigger("pause")},App.prototype.play=function(){this.trigger("play")},App.prototype.change=function(videoId,newOpts){if(!Helper.validateVideoId(videoId))return void Helper.log("[change] invalid videoId:",videoId);videoId!==this._target.attr(VIDEO_UID_ATTR)&&(newOpts=function(){var res=_.cloneDeep(config.optsDefault);return _.isObject(newOpts)&&_.merge(res,newOpts),res}(),_.merge(newOpts,{app:{videoId:videoId}}),this._PLAYER_READY?changeVideo(this,videoId,newOpts):this._EVENT_STACK[CHANGE_STACK_ID]={videoId:videoId,opts:newOpts})},App.prototype.set=function(callback){function cont(IS_PROTECTED,IS_TVE){IS_PROTECTED&&(IS_TVE&&_.merge(opts,{app:{tve:!0}}),_.merge(opts,{app:{auth:{enabled:!0,domain:VIDEO_DOMAIN}}}),Rules.set("setAIS",opts)),target.attr(function(){var obj={};return obj["data-embed-uid"]=EMBED_UID,obj[VIDEO_UID_ATTR]=VIDEO_ID,obj}());var trigger=function(){var markup='<iframe src="${src}" border="0" frameborder="0" scrolling="no" style="width: 100%; height: 100%;" mozallowfullscreen webkitallowfullscreen allowfullscreen></iframe>',sub="qa"===ENV?"beta.":"",videoType=IS_PROTECTED?"tve":"vod",src="//"+sub+["video",VIDEO_DOMAIN,"com"].join(".")+"/static/orion/html/video/iframe/"+videoType+".html?v="+CacheParam,params=function(){var arr=[];return arr.push("uid="+Helper.enc(EMBED_UID)),arr.join("&")}();if(_.merge(opts,{app:{videoId:VIDEO_ID,domain:VIDEO_DOMAIN}}),window.AamGpt&&"function"==typeof window.AamGpt.getCookie){var aam=AamGpt.getCookie("fngpt")||!1;aam&&(aam=aam.split("="),aam=aam.length>1?aam[1]:aam[0],_.merge(opts,{player:{params:{aam:aam}}}));var aamId=AamGpt.getCookie("aam_did")||!1;aamId&&(aamId=aamId.split("="),aamId=aamId.length>1?aamId[1]:aamId[0],_.merge(opts,{player:{params:{aamId:aamId}}}))}self._LISTENER_INIT||(self._LISTENER_INIT=!0,IframeListener.listen(function(event){var name=event.name,data=event.data;switch(name){case"iframe.ready":IframeListener.send("__load",self.__getOpts());break;case"player.ready.init":if(self._PLAYER_READY=!0,self._opts=_.merge(self._opts,data.opts),"function"==typeof callback&&callback(self),PageEmbed.store(EMBED_UID,"fox-news",self),self._EVENT_STACK[CHANGE_STACK_ID]){var change=self._EVENT_STACK[CHANGE_STACK_ID];changeVideo(self,change.videoId,change.opts)}break;case"amp.play":case"amp.ads.started":case"amp.ads.play":PageEmbed.setPlayState(EMBED_UID,!0);break;case"amp.pause":PageEmbed.setPlayState(EMBED_UID,!1);break;case"amp.sharepanel.share":opts.app.noShare||share(data)}if("player.ready.init"===name&&(name="player.ready",data={videoId:VIDEO_ID,uid:EMBED_UID,domain:opts.app.domain,bundleVersion:data.bundleVersion}),self._EVENT_STACK[name])for(var i=0;i<self._EVENT_STACK[name].length;i++)self._EVENT_STACK[name][i](data)})),markup=markup.replace("${src}",[src,params].join("#")),function(){var triggerFrame=function(vals){vals=vals||{},vals.omtr&&_.merge(opts,{app:{omtrVals:vals.omtr}}),vals.krux&&_.merge(opts,{app:{kruxVals:vals.krux}}),target.empty(),target.html(markup)};ISA?ISAInterface(function(info){triggerFrame(info)}):triggerFrame(null)}()};!function(){if(opts.app.overlay&&opts.app.overlay.enabled){var item=_.cloneDeep(opts.app.overlay);if(Rules.set("autoplay",opts),"function"==typeof item.event){item.event(function(){trigger()});try{delete opts.app.overlay.event}catch(err){opts.app.overlay.event=null}}else new Overlay(target,VIDEO_ID,VIDEO_DOMAIN).set(function(){trigger()})}else trigger()}()}if(!this._INITIALIZED){this._INITIALIZED=!0;var self=this,IframeListener=this._IframeListener,attr=getAttr(this._target),validation=validate(this._target,this._opts,attr);if(callback="function"==typeof callback?callback:function(){},!validation.valid)return void callback(validation,null);var target=this._target,opts=this._opts,EMBED_UID=this._UID,VIDEO_ID=opts.app.videoId||attr.videoId,VIDEO_DOMAIN=opts.app.domain||attr.domain;IsAuthenticated.check(VIDEO_ID,VIDEO_DOMAIN,function(bool,IS_TVE){cont(bool,IS_TVE)})}},App});