/** FOX NEWS ISA | 02-27-2018 10:47 AM **/
!function(a,b){a.jQuery&&!a.jQuery.loadAttempt&&(a.jQuery.loadAttempt=b),a.LoadAttempt=a.LoadAttempt||b}(window,function(){var a={attempts:999,timeout:500},b=function(){},c=function(){var c=arguments,f=!1;d(c[0])&&d(c[1])&&e(c[2])?f={attempts:c[0],timeout:c[1],check:c[2],success:e(c[3])?c[3]:b,expires:e(c[4])?c[4]:b}:d(c[0])&&e(c[1])?f={attempts:c[0],timeout:a.timeout,check:c[1],success:e(c[2])?c[2]:b,expires:e(c[3])?c[3]:b}:e(c[0])&&(f={attempts:a.attempts,timeout:a.timeout,check:c[0],success:e(c[1])?c[1]:b,expires:e(c[2])?c[2]:b});var g,h=!1,i=!1,j=!1,k=function(){h?(clearTimeout(g),i="aborted",f.expires(i)):f.check()?(j=!0,f.success(),clearTimeout(g)):f.attempts>0?g=setTimeout(function(){k()},f.timeout):(i="expired",f.expires(i)),f.attempts--};return k(),{abort:function(){h=!0},success:function(a){j?a():f.success=a},expires:function(a){i?a(i):f.expires=a}}},d=function(a){return"number"==typeof a?!0:!1},e=function(a){return"function"==typeof a?!0:!1};return c}());