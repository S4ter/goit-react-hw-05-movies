"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[317],{781:function(e,t,n){n.d(t,{_:function(){return o}});var r=n(861),a=n(757),c=n.n(a),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/".concat(t,"api_key=").concat("f7559877f1d0830f5dd1b2777f8228a1"));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Network response is failed");case 6:return e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:return e.prev=12,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},317:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(861),a=n(439),c=n(757),o=n.n(c),s=n(781),i=n(791),u=n(87),l=n(184),f=function(){var e=(0,i.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],f=(0,i.useState)([]),p=(0,a.Z)(f,2),v=p[0],h=p[1],m=function(){var e=(0,r.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==n.length){e.next=6;break}h([]),alert("Search input cannot me empty"),e.next=16;break;case 6:return e.prev=6,e.next=9,(0,s._)("search/movie?query=".concat(n,"&"));case 9:r=e.sent,h(r.results),console.log(v),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(6);case 16:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}();return(0,l.jsxs)("div",{className:"movies_containter",children:[(0,l.jsxs)("form",{className:"movies_form",onSubmit:m,children:[(0,l.jsx)("input",{className:"movies_input",type:"text",name:"inputSearch",value:n,onChange:function(e){var t=e.target.value;c(t)},placeholder:"Movie title..."}),(0,l.jsx)("button",{className:"movies_button",type:"submit",children:"Search"})]}),(0,l.jsx)("ul",{className:"movies_list",children:0===v.length?(0,l.jsx)("p",{children:"No reviews"}):v.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(u.rU,{className:"movies_item",to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}},861:function(e,t,n){function r(e,t,n,r,a,c,o){try{var s=e[c](o),i=s.value}catch(u){return void n(u)}s.done?t(i):Promise.resolve(i).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var o=e.apply(t,n);function s(e){r(o,a,c,s,i,"next",e)}function i(e){r(o,a,c,s,i,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=317.5fbf078b.chunk.js.map