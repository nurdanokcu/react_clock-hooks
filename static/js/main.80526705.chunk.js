(this["webpackJsonpreact_clock-hooks"]=this["webpackJsonpreact_clock-hooks"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(4),o=c.n(n),a=c(2),r=c(1),s=(c(9),c(0)),i=function(e){var t=e.clockName,c=Object(r.useState)(new Date),n=Object(a.a)(c,2),o=n[0],i=n[1],u=Object(r.useState)(t),l=Object(a.a)(u,2),j=l[0],d=l[1];return Object(r.useEffect)((function(){var e=window.setInterval((function(){var e=new Date;console.info(e.toUTCString().slice(-12,-4)),i(e)}),1e3);return function(){window.clearInterval(e)}}),[]),Object(r.useEffect)((function(){j!==t&&(console.debug("Renamed to ".concat(t)),d(t))}),[t]),Object(s.jsxs)("div",{className:"Clock",children:[Object(s.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(s.jsx)("span",{className:"Clock__time",children:o.toUTCString().slice(-12,-4)})]})};var u=function(){var e=Object(r.useState)("Clock-0"),t=Object(a.a)(e,2),c=t[0],n=t[1],o=Object(r.useState)(!0),u=Object(a.a)(o,2),l=u[0],j=u[1],d=function(e){e.preventDefault(),j(!1)},f=function(){j(!0)};return Object(r.useEffect)((function(){document.addEventListener("contextmenu",d),document.addEventListener("click",f);var e=window.setInterval((function(){n(function(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}())}),3300);return function(){document.removeEventListener("contextmenu",d),document.removeEventListener("click",f),window.clearInterval(e)}}),[]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"React clock"}),l&&Object(s.jsx)(i,{clockName:c})]})};o.a.render(Object(s.jsx)(u,{}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.80526705.chunk.js.map