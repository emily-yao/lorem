(function(){var g=void 0,h=true,i=null,k=false,m,n=this;
function aa(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b}function ba(a,b){function c(){}c.prototype=b.prototype;a.T=b.prototype;a.prototype=new c;a.prototype.constructor=a};function ca(){}
function da(a,b,c){switch(typeof b){case "string":ea(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==i){c.push("null");break}if(aa(b)=="array"){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),da(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)Object.prototype.hasOwnProperty.call(b,e)&&(f=b[e],typeof f!="function"&&(c.push(d),ea(e,c),c.push(":"),da(a,f,c),d=","));
c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var fa={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},ga=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function ea(a,b){b.push('"',a.replace(ga,function(a){if(a in fa)return fa[a];var b=a.charCodeAt(0),e="\\u";b<16?e+="000":b<256?e+="00":b<4096&&(e+="0");return fa[a]=e+b.toString(16)}),'"')};var ia={scroll:5E3,keydown:5E3,mousemove:5E3,resize:5E3,mousedown:5E3,focus:5E3,pageload:5E3},ja={scroll:2E4,keydown:5E3,mousemove:5E3,resize:5E3,mousedown:5E3,focus:5E3,pageload:5E3};function ka(){for(var a="",b=0;b<16;b++)a+=Math.random();return a}function p(a,b){var c="",d=la(encodeURIComponent(a));d.splice(b||5,d.length);q(d,function(a){if(a==0)a="A";else{a>>>=0;for(var b="",d;a>0;)d=a%64,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(d)+b,a>>>=6;a=b}c+=a});return c}
function la(a){a+=String.fromCharCode(128);for(var b=[1518500249,1859775393,2400959708,3395469782],c=1732584193,d=4023233417,e=2562383102,f=271733878,j=3285377520,o=[],l,u,x,K,L,ha=Math.ceil((a.length/4+2)/16),V=[ha],z=0,w;z<ha;z++){V[z]=[];for(l=0;l<16;l++)V[z][l]=a.charCodeAt(z*64+l*4)<<24|a.charCodeAt(z*64+l*4+1)<<16|a.charCodeAt(z*64+l*4+2)<<8|a.charCodeAt(z*64+l*4+3)}z=(a.length-1)*8;a=ha-1;V[a][14]=Math.floor(z/Math.pow(2,32));V[a][15]=z&4294967295;for(z=0;z<ha;z++){for(w=0;w<16;w++)o[w]=V[z][w];
for(w=16;w<80;w++)o[w]=(o[w-3]^o[w-8]^o[w-14]^o[w-16])<<1|(o[w-3]^o[w-8]^o[w-14]^o[w-16])>>>31;a=c;l=d;u=e;x=f;K=j;for(w=0;w<80;w++)L=Math.floor(w/20),L=(a<<5|a>>>27)+(L==0?l&u^~l&x:L==1?l^u^x:L==2?l&u^l&x^u&x:l^u^x)+K+b[L]+o[w]&4294967295,K=x,x=u,u=l<<30|l>>>2,l=a,a=L;c=c+a&4294967295;d=d+l&4294967295;e=e+u&4294967295;f=f+x&4294967295;j=j+K&4294967295}return[c,d,e,f,j]}
function ma(a){var b=n.navigator,c=n.window.screen,d=[b.userAgent,b.platform,(new Date).getTimezoneOffset(),c.width+c.height+c.colorDepth];q(b.plugins,function(a){d.push(a.name+a.description+a.filename+a[0].type)});b=n.performance;d=d.concat([b&&b.now?b.now():"",document.title,n.location.href,r(),ka()]);return d.concat(a||[]).join()}function s(a,b,c){var d=Array.prototype.slice,e=d.call(arguments,2);return function(){return a.apply(b,e.concat(d.call(arguments)))}}
function t(a){return typeof a!=="undefined"}function v(a){return a.replace(/^www\./,"")}var na=/^((https?\:)?(\/\/))/i;function oa(a){return a.replace(na,"")}var pa=/^((https?\:)?(\/\/))?[^\/]*/;function qa(a){return a.replace(pa,"")}var ra=/\#.*/;function sa(a){return a.replace(ra,"")}var ta=/\?[^\#]*/;function ua(a){return a.toLowerCase()}var va=/\/+((\?|\#).*)?$/;function wa(a){return a.replace(va,"$1")}function xa(a){return a.replace(ta,"")}
function ya(a,b){if(a===b)return 0;var c=i;q([ua,wa,oa,qa,sa,xa],function(d,e){a=d(a);b=d(b);if(a===b)return c=e+1,k});return c}function y(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)}function za(a,b){var c=n;c.removeEventListener?c.removeEventListener(a,b,k):c.detachEvent&&c.detachEvent("on"+a,b)}function A(a){return typeof a==="number"}function B(a){return typeof a==="string"}
function Aa(a){a=new Date(+a);return Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())}function r(){return(new Date).getTime()}function Ba(){return n.location.protocol==="https:"?"https:":"http:"}function C(a){return!!a&&a.constructor===Object}function q(a,b){if(C(a)===h)for(var c in a){if(a.hasOwnProperty(c)&&b(a[c],c)===k)break}else{c=0;for(var d=a.length;c<d;c++)if(b(a[c],c)===k)break}}function Ca(a,b){for(var c=0,d=a.length;c<d;c++)if(b(a[c]))return c;return-1}
function Da(a,b){if(a===b)return 0;if(a.length===0)return b.length;if(b.length===0)return a.length;for(var c=[],d=0,e=b.length;d<=e;d++)c[d]=[d];for(var f=0,j=a.length;f<=j;f++)c[0][f]=f;for(var o,l,u,d=1;d<=e;d++)for(f=1;f<=j;f++)o=d-1,l=f-1,u=c[o][l],b.charAt(o)==a.charAt(l)?c[d][f]=u:(l=c[d][l]+1,o=c[o][f]+1,u+=2,c[d][f]=Math.min(l,o,u));return c[b.length][a.length]}var Ea,Fa=n.setInterval,Ga=n.clearInterval,Ha=n.setTimeout,D=n.clearTimeout;
function Ia(a){switch(a){case g:return"undefined";case "":return"empty";default:return a}};function Ja(a,b,c){c=c||"";if(a===g)a=k;else{var d;if(!(d=c===""&&a.getAttribute(b)))if(d=a.getAttribute(b))d=a.getAttribute(b)===c;a=d?a:a===document.body?k:Ja(a.parentNode,b,c)}return a}
function Ka(a,b,c){a="page"+a+"Offset";b="scroll"+b;if(c){var d,e;d=d||"*";e=e||document;if("querySelectorAll"in e)c=e.querySelectorAll(d+"[data-cb-scroll-element]");else{c=[];d=e.getElementsByTagName(d);for(e=d.length;e--;)d[e].getAttribute("data-cb-scroll-element")&&c.push(d[e])}if(c&&c.length)return c[0][b]}if(A(n[a]))return n[a];else if(document.body&&document.body[b])return document.body[b];else if(document.documentElement[b])return document.documentElement[b];return 0}
function La(a){var b=document,b=b[b.compatMode==="CSS1Compat"?"documentElement":"body"]["client"+a]||0;window["inner"+a]&&(b=Math.min(window["inner"+a],b));return b}function E(a){a="scroll"+a;return Math.max(document.body[a],document.documentElement[a])||0}
function Ma(a,b,c){a.ownerDocument||(a=a.correspondingUseElement);if(!a||!a.ownerDocument)return i;var d=a.ownerDocument.documentElement,e=0,f=t(c)?c+1:-1;B(b)?(b=b.toLowerCase(),c=function(a){return(a=a.nodeName)&&a.toLowerCase()===b}):c=b;for(;a&&a!==d&&e!==f;){if(c(a))return a;a=a.parentNode;e++}return i}function Na(a){return a.nodeName&&a.nodeName.toLowerCase()==="a"&&(!a.namespaceURI||a.namespaceURI==="http://www.w3.org/1999/xhtml")}
function Oa(a){a=a||window.event;return!a?i:Ma(a.target||a.srcElement,Na,10)}function Pa(a,b){var c=document.createElement(a);q(b,function(a,b){c.setAttribute(b,a)});return c};function Qa(){this.G={};this.Ta=1}function F(a,b,c,d){a.Ta++;a.G[b]=a.G[b]||{};a.G[b][a.Ta]=[c,d];return a.Ta}function Ra(a,b){if(B(b))a.G[b]=g,delete a.G[b];else if(A(b)){var c=h;q(a.G,function(a){q(a,function(e,f){if(parseInt(f,10)===b)return a[f]=g,delete a[f],c=k});return c})}}Qa.prototype.O=function(a,b){if(this.G[a]){var c=arguments.length>1?Array.prototype.slice.call(arguments,1):[];q(this.G[a],function(a){var b;a&&a.length===2&&(b=a[0],a=a[1],b.apply(a,c))})}};
Qa.prototype.addEventListener=function(a,b){var c=F(this,a,b);b._cbEventId=c};Qa.prototype.removeEventListener=function(a,b){this.G[a]&&this.G[a][b._cbEventId]&&this.G[a][b._cbEventId][0]===b&&Ra(this,b._cbEventId)};var G=new Qa,Sa="a";var H={};
H.B=function(){H.Ga?H.qa("pageload"):(H.pb=[{target:n,event:"scroll"},{target:document.body,event:"keydown"},{target:document.body,event:"mousemove"},{target:n,event:"resize"},{target:document.body,event:"mousedown"}],H.xa=i,H.U=i,H.Fa={},H.Ea={},H.eb={},H.ya={},q(H.pb,function(a){var b=a.event;y(a.target,b,function(a){H.qa.call(H,b,a)})}),F(G,"f",function(){H.qa("focus")}),H.qa("pageload"),y(document.body,"click",function(a){(a=Oa(a))&&G.O("c",a)},h),y(document.body,"contextmenu",function(a){(a=Oa(a))&&
G.O("r",a)}),H.Ga=h)};H.wb=function(){var a,b=H.eb.keydown;if(b===g)return k;b=r()-b;return b<=(a||15E3)&&b>=0};H.ga=function(a,b){var c=H.ya[a];if(!c)return"";var b=b||r(),d,e=0;q(c,function(a){d=Math.floor((b-a)/1E3);d>=0&&d<16&&(e|=1<<d)});c=("0000"+e.toString(16)).slice(-4);return c=="0000"?"":c};H.Vb=function(){H.ya={}};H.Xa=100;
H.qa=function(a,b){if(!b)b=window.event;if(b&&a==="keydown"){var c=b.keyCode?b.keyCode:b.which;if(c===32||c>36&&c<41)a="scroll"}H.bc(a);if(H.xa===i)H.nb(a);else if(!H.U||ia[H.U]<ia[a]||ja[H.U]<ja[a])H.U=a};H.bc=function(a){var b=r();H.eb[a]=b;var c=H.ya[a];c?c.length<2?c.push(b):c[c.length-2]>b-1E3?c[c.length-1]=b:c.push(b):c=[b];c.length>32&&c.shift();H.ya[a]=c};H.nb=function(a){H.xa=Ha(H.Ab,H.Xa);G.O(Sa);H.Fa[a]!==i&&D(H.Fa[a]);H.Ea[a]!==i&&D(H.Ea[a]);H.lb(a,H.Fa,ia,"i");H.lb(a,H.Ea,ja,"j")};
H.lb=function(a,b,c,d){b[a]=Ha(function(){D(b[a]);delete b[a];var c=k;q(b,function(){c=h;return k});c||G.O(d)},c[a]+H.Xa)};H.Ab=function(){D(H.xa);H.xa=i;if(H.U)H.nb(H.U),H.U=i};var Ta,Ua,Va,Wa,Xa;(function(){var a,b;q(["","moz","o","ms","webkit"],function(c){a=(c+"Hidden").charAt(0).toLowerCase()+(c+"Hidden").slice(1);if(typeof n.document[a]==="boolean")return b=c,k});b!==g&&(Wa=a,Xa=(b+"VisibilityState").charAt(0).toLowerCase()+(b+"VisibilityState").slice(1),Va=b+"visibilitychange")})();var I=k;function Ya(){I=Xa&&n.document[Xa]==="prerender"?h:k}function Za(){Ua=h;G.O("f")}function $a(){Ua=k;G.O("b")}
function ab(a,b,c){n.addEventListener?n.addEventListener(a,c,k):n.document.attachEvent&&n.document.attachEvent(b,c)}function bb(){var a=h;n.document.hasFocus&&(a=n.document.hasFocus());var b=k;Wa&&(b=n.document[Wa]);return a&&!b}function cb(){bb()?Za():$a()}function db(a){Ya();if(I){var b=k,c=function(){b||(Ya(),I||(b=h,a(),n.window.setTimeout(function(){n.document.removeEventListener(Va,c,k)},100)))};n.document.addEventListener(Va,c,k)}else a()};function J(){this.a=n._sf_async_config||{};this.Za=s(this.ib,this)}J.prototype.B=function(){this.jb=0};J.prototype.ib=function(){};J.prototype.ua=function(a){if(!I){var b=this.Za,c;c=new Image(1,1);if(b)c.onerror=b;c.src=a}};J.prototype.ea=function(){this.Za=i};function eb(a){var b={};a&&(a.charAt(0)=="?"&&(a=a.substring(1)),a=a.replace(/\+/g," "),q(a.split(/[&;]/g),function(a){a=a.split("=");b[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}));return b}function fb(a,b){var c="",d=n.location.href.match(/[^?]+[?]([^#]+).*/);if(d){var d=eb(d[1]),e=b||a;d[e]&&(c=d[e])}return encodeURIComponent(c)}function gb(a,b){return!b?h:a==="http:"&&b==="80"||a==="https:"&&b==="443"}
function hb(a){var b=[];q(ib,function(c){var d=a[c];t(d)&&(Object.prototype.toString.call(d)==="[object Array]"?q(d,function(a){b.push(c+"="+a)}):C(d)?q(d,function(a,c){b.push(c+"="+a)}):((d+"").length||c=="r")&&b.push(c+"="+d))});b.push("_");return b.join("&")}
function jb(a){var b={hostname:"",pathname:"",search:"",protocol:"",port:"",hash:""};if(!a)return b;var c=document.createElement("a"),d=n.location;if(!/^https?:/.test(a)&&a.indexOf("javascript:")!==0&&a.indexOf("app:")<0)if(a.indexOf("//")===0)a=d.protocol+a;else if(a.indexOf("/")===0)var e=gb(d.protocol,d.port)?"":d.port,a=d.protocol+"//"+d.hostname+(e?":"+e:"")+a;else{var e=document.baseURI||d.href,f=e.indexOf("?");f===-1&&(f=e.indexOf("#"));if(f===-1)f=e.length;f=e.lastIndexOf("/",f);a=f===-1?
"/"+a:e.substr(0,f)+"/"+a}c.href=a;b.hostname=c.hostname;b.pathname=c.pathname;b.search=c.search;b.protocol=c.protocol;b.port=c.port;b.hash=c.hash;if(b.pathname.charAt(0)!=="/")b.pathname="/"+b.pathname;if(b.hostname==="")b.hostname=d.hostname;if(b.protocol==="")b.protocol=d.protocol;if(b.protocol==="javascript:")b.pathname="",b.hostname="",b.port="",b.hash="";if(gb(b.protocol,b.port)||b.port==="0")b.port="";return b}
function kb(a){var b=a.protocol;a.hostname&&(b+="//"+a.hostname,a.port&&(b+=":"+a.port));return b+a.pathname+a.search+a.hash};function M(a,b,c){a[b]=a[b]||c}function lb(a,b){for(var c=n[a]||[];c.length;)b(c.shift());n[a]={push:b}}function mb(a){q(document.getElementsByTagName("script"),function(b){if(typeof b.src==="string"&&b.src.match(/chartbeat.js/))return b=eb(b.src.split("?")[1]),M(a,"uid",b.uid),M(a,"domain",b.domain),k})}function nb(a,b){return a[b]?encodeURIComponent(a[b]):""}function ob(a){var b={};q(a,function(a,d){d.charAt(0)=="_"&&(b[d]=a)});return b};var N={};N.zb=function(a){try{N.create("_cb_test","1",1,a);var b=N.k("_cb_test");N.remove("_cb_test",a);return b==="1"}catch(c){return k}};N.k=function(a){a+="=";var b="";q(document.cookie.split(";"),function(c){for(;c.charAt(0)===" ";)c=c.substring(1,c.length);if(c.indexOf(a)===0)return b=c.substring(a.length,c.length),k});return b};
N.create=function(a,b,c,d){var e=n._sf_async_config;if(e&&e.noCookies)return"";e=new Date;e.setTime(r()+c*1E3);a=a+"="+b+("; expires="+e.toGMTString())+("; path="+d);return document.cookie=a};N.remove=function(a,b){return N.k(a)?N.create(a,"",-86400,b):""};var O={};O.D=function(a){var b=n._sf_async_config;if(!a&&b&&b.noCookies)return i;if(O.D.Ca!==g)return O.D.Ca;var a=r()+"",c,d;try{if((d=n.localStorage).setItem(a,a),c=d.getItem(a)===a,d.removeItem(a),c)return O.D.Ca=d}catch(e){}return O.D.Ca=i};O.k=function(a){var b=O.D();if(!b)return"";var c=b.getItem(a+"_expires");return c&&(c=+c,!isNaN(c)&&r()>c)?(O.remove(a),""):b.getItem(a)||""};
O.create=function(a,b,c){var d=O.D();if(d){var e=new Date;e.setTime(r()+c*1E3);try{d.setItem(a,b),d.setItem(a+"_expires",e.getTime())}catch(f){}}};O.remove=function(a){var b=O.D();b&&(b.removeItem(a),b.removeItem(a+"_expires"))};function pb(a,b){this.ta=a||"";this.P=b||"/";this.Bb=O.D()!==i||N.zb(this.P);this.Sa=k;qb(this)}m=pb.prototype;m.isSupported=function(){return this.Bb};
function qb(a){if(!N.k("_cb_ls")){var b=O.D()!==i,c=N.k("_SUPERFLY_lockout");c&&q(["","_v_","_p_"],function(b){a.create(b+"_SUPERFLY_lockout",c,600,h)});var d=N.k("_chartbeat3");d&&(a.create("_v__chartbeat3",d,34128E3,h),N.remove("_chartbeat3",a.P));b&&((b=N.k("_chartbeat2"))&&a.create("_chartbeat2",b,34128E3,h),(b=N.k("_chartbeat5"))&&a.create("_chartbeat5",b,60,h));N.create("_cb_ls","1",34128E3,a.P)}}
m.create=function(a,b,c,d){a=d?a:this.ta+a;(O.D()?O:N).create(a,b,c,this.P);O.D()&&N.create(a,b,c,this.P)};m.update=function(a,b,c,d,e,f,j){a=d?a:this.ta+a;e=B(e)?e:"::";d=(d=this.k(a,h))?d.split(e):[];if(j&&d.length){var o=j(b),l=Ca(d,function(a){return j(a)===o});l!==-1&&d.splice(l,1)}d.push(b);for(A(f)&&d.length>f&&d.splice(0,d.length-f);d.length>1&&d.join(e).length>4E3;)d.shift();this.create(a,d.join(e),c,h)};
m.k=function(a,b){var a=b?a:this.ta+a,c=(O.D()?O:N).k(a);if(!c&&O.D()&&(c=N.k(a))&&N.k("_cb_ls")){this.Sa=h;var d;switch(a){case "_SUPERFLY_lockout":d=600;break;case "_chartbeat4":d=60;break;case "_cb_cp":d=60;break;case "_chartbeat3":d=34128E3;break;default:d=34128E3}O.create(a,c,d)}return c};m.remove=function(a,b){a=b?a:this.ta+a;(O.D()?O:N).remove(a,this.P);O.D()&&N.remove(a,this.P)};function rb(a){var b=i;if(a&&(b=sb(),b=!b?b:P(b.pathname)+b.search+b.hash))return b;var c=n.location,b=P(c.pathname),a=c.search||"",a=a.replace(/PHPSESSID=[^&]+/,""),d=/&utm_[^=]+=[^&]+/ig;(c=d.exec(c.search))&&(a=a.replace(d,""));d=/\?utm_[^=]+=[^&]+(.*)/i;(c=d.exec(a))&&(a=a.replace(d,c[1]!=""?"?"+c[1]:""));return b+a}function tb(a){return a&&(a=sb(),a=!a?a:a.hostname)?a:n.location.hostname}function sb(){var a=ub();return!a?a:jb(a.href)}
function ub(){var a=i;q(document.getElementsByTagName("link"),function(b){if(b.rel=="canonical")return a=b,k});return a}for(var vb={},wb=0;wb<81;wb++)vb["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(wb)]=h;function xb(a,b){if(a==="%")return"%25";var c=parseInt(b,16);return vb[c]?String.fromCharCode(c):"%"+b.toUpperCase()}
function P(a){if(!B(a))return a;a=a.replace(/%([0-9A-Fa-f]{2})?/g,xb);return a=a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g,encodeURIComponent)};function Q(a,b){var c=R();return t(b)&&!t(c[a])?b:c[a]}function R(){t(n._cb_shared)||(n._cb_shared={});return n._cb_shared};var S={sb:{IDLE:0,rb:1,qb:2,za:3},tb:{IDLE:0,rb:1,qb:2,za:3},H:0,J:0};S.B=function(){if(!S.Ga)F(G,Sa,S.Ib,S),F(G,"i",S.Mb,S),F(G,"f",S.Kb,S),F(G,"b",S.Jb,S),F(G,"j",S.Lb,S),S.Ga=h};S.Fb=function(){return S.H};S.Gb=function(){return S.J};S.Ib=function(){S.H===1?S.S(3):S.H===0&&S.S(2);S.J===1?S.Q(3):S.J===0&&S.Q(2)};S.Mb=function(){S.H===3?S.S(1):S.H===2&&S.S(0)};S.Lb=function(){S.J===3?S.Q(1):S.J===2&&S.Q(0)};S.Kb=function(){(S.H===0||S.H===2)&&S.S(3);(S.J===0||S.J===2)&&S.Q(3)};
S.Jb=function(){S.H===3?S.S(2):S.H===1&&S.S(0);S.J===3?S.Q(2):S.J===1&&S.Q(0)};S.S=function(a){S.H=a;G.O("s",a)};S.Q=function(a){S.J=a;G.O("x",a)};function yb(a,b){this.Da=a||g;this.Ka=b||g;this.$=this.N=0;this.bb=s(this.Pb,this);this.Ra=this.M=i}m=yb.prototype;m.B=function(){this.$=this.N=0;this.M=i;this.Ra=F(G,"s",this.ha,this);this.ha(S.Fb())};m.ha=function(a){Ga(this.M);this.M=i;if(a===S.sb.za)this.M=Fa(this.bb,1E3)};m.Pb=function(){if(this.Da===g||this.Da())this.N++,this.$++,this.Ka&&this.Ka()};m.terminate=function(){Ga(this.M);this.M=i;Ra(G,this.Ra)};m.ea=function(){this.terminate();this.Ka=this.Da=g};function zb(a,b){yb.call(this,a,b)}ba(zb,yb);zb.prototype.B=function(){this.$=this.N=0;this.M=i;this.Ra=F(G,"x",this.ha,this);this.ha(S.Gb())};zb.prototype.ha=function(a){Ga(this.M);this.M=i;if(a===S.tb.za)this.M=Fa(this.bb,1E3)};function T(){J.call(this);this.Y=[];this.q=new pb(this.Zb,this.a.cookiePath||"/");this.q.remove("_SUPERFLY_nosample");this.F=new yb;this.X=new zb;this.La=s(this.sa,this);y(n,"unload",this.La);db(s(this.B,this))}ba(T,J);m=T.prototype;m.Pa=h;
m.B=function(){T.T.B.call(this);this.oa=this.aa=0;this.da=r();this.Oa=p(Ab(this));this.Na=h;this.Ha=72E5;if(this.Pa){var a=+this.a.sessionLength;if(!isNaN(a))this.Ha=a*6E4}a=Q("d");if(!a){var a=[],b=this.q.k("_chartbeat2",h);b.length>0&&(a=b.split("."));a.length>5&&(a=[]);var b=r(),c=this.q.k("_cb",h);c.length>0?a[1]=a[1]||b:c=a[0];a[0]="";var d=b-+(a[1]||0),e=b-+(a[2]||0);R().n=c&&d>18E5&&e<2592E6?0:1;d=a[4];if(!(e=e>18E5))if(Bb(this))e=k;else{var e=U(this),e=decodeURIComponent(e),e=Cb(e)||e,f;f=
Db(this);f=decodeURIComponent(f);f=Cb(f)||f;e=e!==f}if(!d||e)d=p(Ab(this)),a[4]=d,this.q.remove("_cb_svref",h);e="1";f=a&&+a[2];d=a&&a[3];if(a&&f&&d)if(e=Math.abs((Aa(b)-Aa(f))/864E5)){e=Math.min(e,16)-1;for(f="";e--;)f+=0;e=(d+f+"1").slice(-16)}else e=d;d=e;c||(c=this.a.utoken||p(Ab(this),3),a[1]=b);a[2]=b;a[3]=d;this.a.utoken=this.ma;this.q.create("_cb",c,34128E3,h);this.q.create("_chartbeat2",a.join("."),34128E3,h);a[0]=c;R().d=a}this.mc=a.join(".");var j;c=+a[1];d=+a[2];if((b=a[3])&&c&&d)j=(Math.min((Math.abs((Aa(d)-
Aa(c))/864E5)||0)+1,16,b.length)-1).toString(16),j+=("0000"+parseInt(b,2).toString(16)).slice(-4);this.ab=j;this.Rb=Q("n",1);this.ma=a[0];this.Yb=a[4];this.Xb=Db(this);this.q.create("_cb_svref",Db(this)||"null",1800,h);this.F.B();this.X.B();S.B();H.B();Ta||(Ua=bb(),Va&&n.document.addEventListener&&n.document.addEventListener(Va,cb,k),ab("focus","onfocusin",Za),ab("blur","onfocusout",$a),Ua&&Za(),Ta=h);this.ja=0;this.vb=F(G,Sa,this.Sb,this)};
function Eb(a){if(!a.q.k("_SUPERFLY_lockout")&&!I)a.Qb?a.va():(a.Qb=h,!n._sf_async_config&&!n._cbq?(a.ra=s(a.va,a),y(n,"load",a.ra)):a.va())}m.va=function(){this.Ma=Fb();H.B();var a=s(this.ka,this);this.cb=Fa(a,15E3);this.ka()};
m.ka=function(){var a=this.F.$,a=this.a.reading&&+this.a.reading||a>0;if(this.oa<this.aa&&!a)this.oa++;else{var b;if(Ea===g)b=n.navigator.userAgent,Ea=b.indexOf("AppleWebKit")>0&&b.indexOf("FBIOS")>0;b=Ea;b&&!a?this.oa++:(a?this.aa=0:Gb(this),this.oa=0,this.Y.push(0),this.Y.length>18&&this.Y.shift(),this.Pa&&r()-this.da>=this.Ha?this.terminate():this.la())}};
m.ib=function(){this.Y.push(1);var a=0;q(this.Y,function(b){a+=b});a<3?(this.Na=h,Gb(this)):(this.terminate(),this.q.create("_SUPERFLY_lockout","1",600))};m.sa=function(){};m.Sb=function(){var a=Hb(this);this.ja=Math.max(this.ja,a)};function Hb(a){return Math.floor(Ka("Y","Top",!!a.a.scrollElement))}function Gb(a){var b=a.aa,b=b?Math.min(b*2,16):1;a.aa=b}m.na=function(){this.sa();this.terminate()};m.ob=function(){this.B();Eb(this)};
function Bb(a){if(a.a.virtualReferrer)return h;if(Ib(a))return k;a=document.referrer.indexOf("://"+n.location.hostname+"/");return a!=-1&&a<9}function Ib(a){var b=a.a.referrerOverrideQueryParam,c="";q(window.location.search.substr(1).split("&"),function(a){a=a.split("=");if(a.length==2&&a[0]==b&&a[1])return c=decodeURIComponent(a[1]).replace(/\+/g," "),k});c&&c.indexOf("::")==-1&&(c="external::"+c);return c}
function U(a){a=a.a.virtualReferrer||Ib(a);if(!a&&(a=document.referrer||"")&&!/^(android-)?app:/.test(a)){var b=jb(a);if(b.protocol==="http:"||b.protocol==="https:")b.pathname=P(b.pathname),a=kb(b)}return encodeURIComponent(a)}function Jb(a){a=a.a.title.slice(0,100);return encodeURIComponent(a)}function Ab(a){a=[U(a),E("Width"),E("Height")];return ma(a)}
function Kb(a){var b=[],c=a.q.k("_chartbeat4");c&&(q(c.split("::"),function(a){b.push(encodeURIComponent(a))}),a.q.remove("_chartbeat4"));return b}function Db(a){a=a.q.k("_cb_svref",h)||U(a)||"null";a==="null"&&(a="");return a}function Cb(a){a=a.match(/^https?:\/\/([^\/]*)/);return!a?i:a[1]}function Fb(){var a=n.performance&&n.performance.timing;if(!a||a.navigationStart==0)return-1;var b=a.navigationStart,a=a.loadEventStart;return A(b)&&b?A(a)&&a>b?a-b:r()-b:-1}
m.terminate=function(){this.F.terminate();this.X.terminate();Ra(G,this.vb);this.ra!==g&&za("load",this.ra);Ga(this.cb);R().d=g;R().n=g};m.ea=function(){this.terminate();za("unload",this.La);this.La=this.ra=this.q=this.Y=this.a=i;this.F.ea();this.F=i;this.X.ea();this.X=i;T.T.ea.call(this)};function Lb(a){for(var b=Q("m")||[];b.length;)a(b.shift());a={push:a};R().m=a};function Mb(a,b,c){var d=a.offsetLeft,e=a.offsetTop,f=Nb(a);d+=f.x;e+=f.y;for(var j=k,o=c?0:Math.floor(Ka("X","Left",g)),l=c?0:Math.floor(Ka("Y","Top",g)),f=a.offsetParent;a&&a!==b&&a!==document.body;){if(a===f)f=Nb(a),d+=a.offsetLeft+f.x,e+=a.offsetTop+f.y,f=a.offsetParent;c||(d-=a.scrollLeft,e-=a.scrollTop);if(Ob(a,["position"]).position==="fixed"){j=h;break}a=a.parentElement}c||(d-=b?b.scrollLeft:o,e-=b?b.scrollTop:l);j&&(d+=o,e+=l);return{x:d,y:e}}
function Ob(a,b){var c={},d,e;n.getComputedStyle?d=n.getComputedStyle(a,i):a.currentStyle?e="currentStyle":a.style&&(e="style");q(b,function(b){c[b]=d?d[b]||d.getPropertyValue(b):a[e][b]});return c}var Pb=/matrix(3d)?\((.*)\)/;function Nb(a){var b={x:0,y:0},a=Ob(a,["transform"]).transform;if(!B(a))return b;var c=a.match(Pb);if(!c)return b;var a=c[2].split(", "),d;t(c[1])?(c=12,d=13):(c=4,d=5);b.x=parseInt(a[c],10);b.y=parseInt(a[d],10);return b};function Qb(){var a=n.location.href,a=a.replace(/-{2,}/g,"-"),a=jb(a);a.pathname=P(a.pathname);return a}
function Rb(a){var b=N.k("_chartbeat6");if(!b)return i;var b=b.split("::"),c,d;if(b.length===1)c=b[0].split(","),d=0;else{var e,f=Qb(),j=kb(f);q(b,function(a,b){var f=a.split(","),l=Da(j,decodeURIComponent(f[0]));if(l===0)return c=f,d=b,k;if(e===g||l<e)e=l,c=f,d=b})}b.splice(d,1);a="_chartbeat6="+b.join("::")+Sb(a);document.cookie=a;var a=[],b=decodeURIComponent(c[0]),f=decodeURIComponent(c[1]),o=c[2];c.splice(0,3);for(var l=c.length/3,u=0;u<l;u++){var x=u*3+2;a.push({kc:b,origin:f,ba:o,ca:x<c.length?
c[x]:"",Cb:c[u*3],cc:c[u*3+1]})}return a}function Sb(a){var b="",c;if(!C(a))return b;a.gb&&(c=new Date,c.setTime(c.getTime()+a.gb),b+="; expires="+c.toGMTString());a.domain&&(b+="; domain="+a.domain);a.path&&(b+="; path="+a.path);return b}function Tb(a){var b=a.topStorageDomain,a=a.domain,c=n.location.hostname;return b?b:Ub(c,a)?a:c.replace(/^www\./,"")}
function Ub(a,b){if(a===b)return h;for(var c=b.split("."),d=a.split(".");c.length;){if(d.length===0)return k;if(c.pop()!==d.pop())return k}return h}function Vb(a,b,c,d,e){this.Eb=a;this.Db=b;this.dc=c;this.ba=d;this.ca=e}function Wb(a){var b=a.d,c=i;if(b!==i){var d={};b.s&&q(b.s,function(a,b){d[b]=typeof a==="string"?{Ya:a,ca:""}:{Ya:a.chosenVariant,ca:a.specificLocation}});c={mb:d,ba:b.g,fb:b.m}}return{status:a.s,data:c,code:a.c,message:a.m}};function Xb(a,b){for(var c=b||document.documentElement,d=[],e=i,f=a,j,o,l,u,x,K;f&&f!==c;){j=f.nodeName.toLowerCase();e=f;o=e.nodeName;if((f=f.parentNode)&&f!==document.documentElement){l=f.children;u=0;for(x=0,K=l.length;x<K;x++){if(e===l[x]){j+="["+(1+x-u)+"]";break}l[x].nodeName!==o&&u++}}d.unshift(j)}return d.join("/")};function W(){this.Zb="_t_";T.call(this)}ba(W,T);m=W.prototype;
m.B=function(){W.T.B.call(this);mb(this.a);var a=!!this.a.useCanonical,b=tb(!!this.a.useCanonicalDomain&&a);M(this.a,"mabServer","mabping.chartbeat.net");M(this.a,"title",document.title);M(this.a,"domain",b);this.a.path=this.a.path?P(this.a.path):rb(a);this.ia=v(b);this.a.domain=v(this.a.domain);this.ac=Tb(this.a);this.fa=this.pa=k;this.$a=[];var c=this,a=Rb({domain:"."+this.ac,gb:6E4,path:"/"});if(a!==i)this.pa=h,q(a,function(a){c.$a.push(new Vb(a.origin,a.Cb,a.cc,a.ba,a.ca))});this.hb=0;this.wa=
i;Lb(s(this.Ob,this))};m.la=function(){var a=this.F.N,b=Yb(this),c,d=this;this.pa&&q(this.$a,function(e){c=b+"&x="+e.Db+"&v="+e.dc+"&ml="+e.ba+"&xo="+e.Eb+"&e="+a+"&sl="+e.ca;d.ua(c)});!this.fa&&this.wa&&Zb(this,this.wa);this.fa=h};m.va=function(){this.Ma=Fb();H.B();if(this.pa){var a=s(this.ka,this);this.cb=Fa(a,500)}this.ka()};m.ka=function(){var a,b;this.fa?(a=this.F.N,b=this.hb*15,a-b>=15&&(this.la(),this.hb+=1),a>=45&&this.terminate()):this.la()};
function Yb(a){var b=a.a;return Ba()+"//"+b.mabServer+"/ping/mab?h="+encodeURIComponent(b.domain)+"&p="+encodeURIComponent(b.path)+"&d="+encodeURIComponent(a.ia)+"&u="+a.ma+"&c="+Math.round((r()-a.da)/600)/100}m.sa=function(){};m.$b=function(a){a=Wb(a);this.fa?Zb(this,a):this.wa=a};
function Zb(a,b){var c=Yb(a),d=b.status,e=b.data;if(d=="s"&&e!==i){var f=s(a.ua,a);C(e.mb)&&q(e.mb,function(a,b){f(c+"&x="+b+"&v="+a.Ya+"&ml="+e.ba+"&sl="+a.ca+"&e=-1")});Object.prototype.toString.call(e.fb)==="[object Array]"&&q(e.fb,function(a){f(c+"&me=3&ml="+e.ba+"&x="+a)})}else d=="e"&&a.ua(c+"&me="+b.code)}m.Ob=function(a,b){for(var c=0,d=arguments.length;c<d;c++){var a=arguments[c],e=a.shift();e==="t"?this.$b.apply(this,a):e==="v"&&this.Wb.apply(this,a)}};
m.na=function(){R().m=[];t(this.Ua)&&this.Ua();W.T.na.call(this)};m.Wb=function(a){this.Ua=a};m.terminate=function(){this.Ua=this.lc=g;this.wa=i;this.fa=this.pa=g;W.T.terminate.call(this)};if(!n.pSUPERFLY_mab){var $b=new W,ac={};ac.evps=s($b.na,$b);ac.svps=s($b.ob,$b);n.pSUPERFLY_mab=ac;Eb($b)};var bc="engagedSeconds",cc={ic:"id",hc:bc,ec:"campaignId",fc:"creativeId",jc:"placementId",gc:"element"};var dc,ec,X;
function fc(a){if(a.origin==="https://chartbeat.com"&&(a=String(a.data),a.indexOf("_cb_hud_version=")===0)){var b=a.substr(16);gc();if(b!=="NONE")b=b.indexOf("HUD2.")===0?b.substr(5):"OLD",a="https://static.chartbeat.com/js/inpage.js",b!=="OLD"&&(a="https://static2.chartbeat.com/frontend_ng/hud/hud-inpage/hud-inpage-"+b+".js"),b=t(g)?g:{},b.src=a,a=Pa("script",b),a.setAttribute("type","text/javascript"),b=document.head||document.getElementsByTagName("head")[0],t(g)?g.appendChild(a):b&&b.appendChild(a)}}
function gc(){D(ec);ec=g;za("message",fc);X&&X.parentNode&&X.parentNode.removeChild(X);X=g};function hc(){var a=n._sf_async_config&&n._sf_async_config.domain;if(a&&!dc){dc=h;a="https://chartbeat.com/publishing/hud2/versioninfo/?host="+encodeURIComponent(a);y(n,"message",fc);ec=Ha(gc,1E4);var b=t(g)?g:{};b.src=a;a=Pa("iframe",b);a.style.display="none";t(g)?g.appendChild(a):document.body&&document.body.appendChild(a);X=a}}
function ic(a){if(/[\/.]chartbeat\.com$/.test(a.origin)){var b=O.D(h),c=String(a.data);b&&c.indexOf("_cb_ip")==0&&(b.setItem("_cb_ip","1"),a.source.postMessage(1,a.origin),hc(),za("message",ic))}};function Y(){"postMessage"in window&&y(n,"message",s(this.Nb,this));T.call(this);lb("_cbq",s(this.kb,this))}ba(Y,T);
Y.prototype.B=function(){Y.T.B.call(this);var a=this.ma;R().u=a;a=this.Oa;R().t=a;this.Ba=i;mb(this.a);var a=!!this.a.useCanonical,b=tb(!!this.a.useCanonicalDomain&&a);M(this.a,"pingServer","ping.chartbeat.net");M(this.a,"title",document.title);M(this.a,"domain",b);this.a.path=this.a.path?P(this.a.path):rb(a);this.ia=v(b);this.a.domain=v(this.a.domain);this.xb=F(G,"c",this.Tb,this);this.yb=F(G,"r",this.Ub,this);this.Z=i};Y.prototype.ub=function(a){this.Ba=a};
Y.prototype.sa=function(){this.q.update("_chartbeat4",["t="+this.Oa,"E="+this.F.N,"EE="+this.X.N,"x="+Hb(this),"c="+Math.round((r()-this.da)/600)/100,"y="+E("Height"),"w="+La("Height")].join("&"),60,g,g,1)};var ib="h,p,u,d,g,g0,g1,g3,g4,n,nc,f,c,x,m,y,o,w,j,R,W,I,E,e,v,r,vp,K,l1,KK,PA,b,A,_c,_m,_x,_y,_z,_s,t,V,z,i,L,tz,l,,sn,C,eS,eM,eD,eK,eR,EE,sv,sr".split(",");m=Y.prototype;
m.la=function(a){this.jb++;var b={};b.g=this.a.uid;b.g0=nb(this.a,"sections");b.g1=nb(this.a,"authors");b.g2=nb(this.a,"zone");b.g3=nb(this.a,"sponsorName");b.g4=nb(this.a,"type");!this.a.noCookies&&this.q.isSupported()?b.n=this.Rb:b.nc=1;b.c=Math.round((r()-this.da)/600)/100;b.E=this.F.N;b.EE=this.X.N;var c=Hb(this);this.ja=Math.max(this.ja,c);b.x=c;b.m=this.ja;b.y=E("Height");b.o=E("Width");b.w=La("Height");b.b=this.Ma>0?this.Ma:"";if(this.ab)b.f=this.ab;b[""]=ob(this.a);b.t=this.Oa;b.V=100;b.tz=
(new Date).getTimezoneOffset();b.sn=this.jb;b.sv=this.Yb;b.sr=this.Xb;c=this.F.$;b.h=encodeURIComponent(this.a.domain);b.p=encodeURIComponent(this.a.path);b.u=this.ma;b.d=encodeURIComponent(this.ia);b.j=Math.round((this.aa+2)*15E3/1E3);b.R=0;b.W=0;b.I=0;var d=b.c*6E4+this.da;b.eD=H.ga("mousedown",d);b.eM=H.ga("mousemove",d);b.eK=H.ga("keydown",d);b.eR=H.ga("resize",d);b.eS=H.ga("scroll",d);H.Vb();H.wb()?b.W=1:this.a.reading&&+this.a.reading||c>0||b.c<0.09?b.R=1:b.I=1;b.e=c;c=Bb(this);if(this.Na){this.Na=
k;if(c)this.Z=jc(this);b.i=Jb(this);d=this.a.hudTrackable;d!==g&&(b.L=d?"1":"0");this.a.alias&&(b.PA=encodeURIComponent(this.a.alias))}if(c){if(this.Z){if(b.v=encodeURIComponent(this.Z.path),b.K=kc(this.Z),this.Z.Ja>1)b.l1=this.Z.Ja}else b.v=U(this);this.a.virtualReferrer&&(b.vp=1)}else b.r=U(this);c=Ia(b.v);R().v=c;c=Ia(b.r);R().r=c;b.A=this.Ba?this.Ba:"";b._c=fb("utm_campaign",this.a.campaignTag);b._m=fb("utm_medium",this.a.mediumTag);b._x=fb("utm_source",this.a.sourceTag);b._y=fb("utm_content",
this.a.contentTag);b._z=fb("utm_term",this.a.termTag);this.a.idSync?(c=[],da(new ca,this.a.idSync,c),c=encodeURIComponent(c.join(""))):c="";b._s=c;b.z=Kb(this);b.C=this.a.mobileApp?1:"";b.KK=a?kc(a):"";a=this.q;c=a.Sa;a.Sa=k;b.l=c?1:"";this.F.$=0;this.ua(Ba()+"//"+this.a.pingServer+"/ping?"+hb(b))};
m.Nb=function(a){var b=this.a,c=b.playerdomain||this.ia;if(oa(a.origin)===oa(c))if(c=a.data,B(c)&&c.indexOf("cbqpush::")===0)a=c.split("::"),a.length==3&&(a=a.slice(1),a[0].indexOf("_")===0&&this.kb(a));else if(c=="cbdata?"){var c="&u="+Q("u"),d="&t="+Q("t"),e="&v="+Q("v"),f="&r="+Q("r"),b="domain="+encodeURIComponent(b.domain)+"&uid="+encodeURIComponent(b.uid)+"&path="+encodeURIComponent(b.path)+"&title="+Jb(this)+"&referrer="+U(this)+"&internal="+(Bb(this)?"1":"0")+"&subdomain="+encodeURIComponent(this.ia)+
c+d+e+f+"&utoken="+this.ma;a.source.postMessage(b,"*")}};m.kb=function(a){a[0]==="_demo"&&this.a._demo?this.a._demo=this.a._demo+"%2C"+a[1]:this.a[a[0]]=a[1];this.aa=0};function lc(a){a=a.replace(/-{2,}/g,"-");a=jb(a);a.pathname=P(a.pathname);return a}m.Tb=function(a){mc(this,a,"c")};m.Ub=function(a){mc(this,a,"r")};
function mc(a,b,c){if(a.Pa&&r()-a.da>=a.Ha)a.terminate();else{var d=b.href||"",d=lc(d);if(d.protocol.indexOf("http")===0){var e=d.hostname!==n.location.hostname,d=kb(d),f=Ma(b,function(a){return a.id}),j=Xb(b,f),o="";a.a.moduleAttribute&&(o=(o=Ja(b,a.a.moduleAttribute))?o.getAttribute(a.a.moduleAttribute):"",o=o.replace(/::/g,"-").substr(0,40));f?(j&&(j="/"+j),j="*[@id='"+f.id+"']"+j,f=Xb(b)):f=j;j=p(j);f=p(f);b=Mb(b,g,h);c={left:b.x,top:b.y,path:a.a.path,href:d,Wa:j,Aa:f,Va:"",Qa:c,Ja:0,Hb:a.a.domain,
Ia:o};a.la(c);e||a.q.update("_chartbeat5",nc(c),60,k,g,3,function(a){a=a.split(",");return a[2]+","+a[3]})}}}function kc(a){return[a.left,a.top,a.Wa,encodeURIComponent(a.Va),a.Qa,encodeURIComponent(a.href),a.Aa,a.Ia].join("::")}function nc(a){var b=encodeURIComponent(a.Va),b=b.replace(/-/g,"%2D");b.length>512&&(b="");return[a.left,a.top,encodeURIComponent(a.path),encodeURIComponent(a.href),a.Wa,b,a.Qa,a.Aa,encodeURIComponent(a.Hb),a.Ia].join(",")}
function jc(a){var b=a.q.k("_chartbeat5");if(!b)return i;var c=b.split("::"),b=c.length,d,e=i,f,j=lc(n.location.href),o=kb(j);q(c,function(a,b){var c=a.split(","),j=ya(o,decodeURIComponent(c[3]));if(j===0)return d=c,e=b,k;else if(j===i)return h;if(f===g||j<f)f=j,d=c,e=b});if(e===i)return i;c.splice(e,1);a.q.create("_chartbeat5",c.join("::"),60);(a=d[5])?(a=a.replace(/%2D/g,"-"),a=decodeURIComponent(a)):a="";return{left:d[0],top:d[1],path:decodeURIComponent(d[2]),href:decodeURIComponent(d[3]),Wa:d[4]||
"",Va:"",Aa:d.length>7?d[7]:"",Qa:d.length>6?d[6]:"c",Ja:b,Ia:d[9]?d[9]:""}}m.terminate=function(){Ra(G,this.xb);Ra(G,this.yb);Y.T.terminate.call(this)};function oc(a,b){return function(c,d){if(!I){a();var e=n._sf_async_config,f="",j=e.path,j=oa(j);/^\//.test(j)&&(f=v(n.location.hostname));e.virtualReferrer=Ba()+"//"+f+j;if(B(c))e.path=P(c),d&&(e.title=d);else if(C(c)){var o=["authors","sections","title","path"];q(c,function(a,b){if(Ca(o,function(a){return a===b})!==-1||b.indexOf("_")===0)e[b]=b==="path"?P(a):a})}b()}}};if(!n.pSUPERFLY){var pc=new Y,Z={};n.pSUPERFLY=Z;var qc=n.pSUPERFLY_mab,$=n.pSUPERFLY_pub,rc=[];qc&&rc.push(qc);if($)rc.push($),$.addEngagedAdFilter&&(Z.addEngagedAdFilter=$.addEngagedAdFilter),$.refreshAd&&(Z.refreshAd=$.refreshAd),$.registerGptSlot&&(Z.registerGptSlot=$.registerGptSlot),lb("_cba",function(a){a()});Z.virtualPage=oc(function(){pc.na();q(rc,function(a){a.evps()})},function(){pc.ob();q(rc,function(a){a.svps()})});Z.activity=s(pc.ub,pc);Eb(pc);var sc=O.D(h);if(!sc?0:sc.getItem("_cb_ip")){var tc=
n.location;(!/^(.+[.])?chartbeat\.com$/.test(tc.hostname)?0:/^\/publishing\/(overlay|hud|mab)\//.test(tc.pathname))||hc()}else y(n,"message",ic)};})();
