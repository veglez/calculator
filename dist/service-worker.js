if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,t,i)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(t.map((r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}}))).then((e=>{const r=i(...e);return s.default||(s.default=r),s}))})))}}define("./service-worker.js",["./workbox-52c059be"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/index.html",revision:"7d20cb52b81bc4e263371bb86d63b759"},{url:"/main.[hascontent].js",revision:"a0e5346d1763a473a75aed0079ae6b3a"},{url:"/main.[hascontent].js.LICENSE.txt",revision:"8f06b9e0c45e6669bf287c6947cdbc57"},{url:"/main.css",revision:"0a14a60b62b8db6df8ed7ab2c70f75cf"}],{}),e.registerRoute(/https:\/\/calculator-s7a8qr10d-veglez.vercel.app\//,new e.NetworkFirst({cacheName:"api",plugins:[]}),"GET")}));