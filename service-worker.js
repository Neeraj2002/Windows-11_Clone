"use strict";var precacheConfig=[["/Windows-11_Clone/index.html","c489142ed552d4f2bdd8f3169a70a4de"],["/Windows-11_Clone/static/css/main.c265ebfa.css","b9a19ad9753db29a0d780bfc7aeb4d74"],["/Windows-11_Clone/static/js/main.2f9878b6.js","c56cf1825bd028cfd3281bd44cebb751"],["/Windows-11_Clone/static/media/FilesExplorer.f11e2e16.png","f11e2e16da93ff03251a5f63f14533ee"],["/Windows-11_Clone/static/media/calendar.a2356254.svg","a2356254d1fca91a9d89d5571923ad06"],["/Windows-11_Clone/static/media/edge.15317f39.png","15317f39b369ebfe56a357aaea4860ab"],["/Windows-11_Clone/static/media/journal.25b2541b.png","25b2541be45b3542a7356e04aa5c9ce1"],["/Windows-11_Clone/static/media/mail.71b69d17.png","71b69d17366472ae6b140d432abbcbf6"],["/Windows-11_Clone/static/media/movies.ecb4ae1e.png","ecb4ae1ec19ebd5a32020d535a6fe9ea"],["/Windows-11_Clone/static/media/netflix.ce186f95.png","ce186f95746eca16b085c113d17ce6a8"],["/Windows-11_Clone/static/media/notepad.6b8703c2.png","6b8703c21ce321bf0a8c34f58228f0e9"],["/Windows-11_Clone/static/media/oneNote.c22feaa9.png","c22feaa9982b8ad349b1012621b4d188"],["/Windows-11_Clone/static/media/paint.2df0a70e.png","2df0a70e8472f78f1f522243e97d0529"],["/Windows-11_Clone/static/media/photos.a324e62c.png","a324e62c17763e2c8f36f43177bf94ed"],["/Windows-11_Clone/static/media/pinterest.8eaee581.jpg","8eaee581f8e7adcce4425947fbe1fbeb"],["/Windows-11_Clone/static/media/powerpoint.63f01939.svg","63f0193964a9c283f64d038a05b1b446"],["/Windows-11_Clone/static/media/settings.5fa3e9f8.png","5fa3e9f805d883b4136dd6f5d055a742"],["/Windows-11_Clone/static/media/spotify.00e16d60.png","00e16d60d5e9fdb9a519b0873877ad55"],["/Windows-11_Clone/static/media/store.ab70730c.png","ab70730c9a4fd5fd997e37b3fb38f278"],["/Windows-11_Clone/static/media/wallpaper.79a31325.jpg","79a31325c3817ae735a82e5e878c1d65"],["/Windows-11_Clone/static/media/windows-11.73560fd2.svg","73560fd2ba142612a2a688fe79d3be06"],["/Windows-11_Clone/static/media/word.4b13f967.jpg","4b13f967cc691ddf88a1abf0bb21cfd1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(n){return n.redirected?("body"in n?Promise.resolve(n.body):n.blob()).then(function(e){return new Response(e,{headers:n.headers,status:n.status,statusText:n.statusText})}):Promise.resolve(n)},createCacheKey=function(e,n,t,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(n){return t.every(function(e){return!e.test(n[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),s=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var e=new Request(n,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+n+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(n,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(n){return n.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return n.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(n){if("GET"===n.request.method){var e,t=stripIgnoredUrlParameters(n.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t));var s="/Windows-11_Clone/index.html";!e&&"navigate"===n.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],n.request.url)&&(t=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&n.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',n.request.url,e),fetch(n.request)}))}});