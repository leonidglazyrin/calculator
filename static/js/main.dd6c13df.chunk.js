(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{11:function(t,e,i){"use strict";i.r(e);var n=i(1),c=i.n(n),r=i(4),d=i.n(r),s=i(2),o=(i(9),i(0));var b=function(){var t=Object(n.useState)(""),e=Object(s.a)(t,2),i=e[0],c=e[1],r=Object(n.useState)("0"),d=Object(s.a)(r,2),b=d[0],j=d[1],a=Object(n.useState)(""),l=Object(s.a)(a,2),u=l[0],O=l[1];function h(t){switch(t){case"+":j((function(t){return(parseFloat(t)+parseFloat(i)).toString()}));break;case"-":j((function(t){return(parseFloat(t)-parseFloat(i)).toString()}));break;case"*":j((function(t){return(parseFloat(t)*parseFloat(i)).toString()}));break;case"/":j((function(t){return(parseFloat(t)/parseFloat(i)).toString()}));break;default:j(i)}}return Object(o.jsxs)("div",{id:"calculator",children:[Object(o.jsxs)("div",{id:"display",children:[Object(o.jsx)("div",{id:"upper",children:b}),Object(o.jsx)("div",{id:"lower",children:i})]}),Object(o.jsxs)("div",{onClick:function(t){var e=t.target.innerHTML;if("AC"===e)c(""),j("0"),O("");else if("="===e){if(""===i)return;h(u),c("")}else if(-1!=="+-/*".indexOf(e))i?(h(u),j((function(t){return t.toString()+e})),O(e)):"+-/*".indexOf(-1===b.slice(-1))?(j(b+e),O(e)):j(b.slice(0,-1)+e),c("");else if("."===e)-1===i.indexOf(e)&&c(i+e);else{if("0"===e&&""===i)return;c(i+e)}},id:"pad",children:[Object(o.jsx)("button",{id:"clear",children:"AC"}),Object(o.jsx)("button",{id:"divide",children:"/"}),Object(o.jsx)("button",{id:"multiply",children:"*"}),Object(o.jsx)("button",{id:"seven",children:"7"}),Object(o.jsx)("button",{id:"eight",children:"8"}),Object(o.jsx)("button",{id:"nine",children:"9"}),Object(o.jsx)("button",{id:"subtract",children:"-"}),Object(o.jsx)("button",{id:"four",children:"4"}),Object(o.jsx)("button",{id:"five",children:"5"}),Object(o.jsx)("button",{id:"six",children:"6"}),Object(o.jsx)("button",{id:"add",children:"+"}),Object(o.jsx)("button",{id:"one",children:"1"}),Object(o.jsx)("button",{id:"two",children:"2"}),Object(o.jsx)("button",{id:"three",children:"3"}),Object(o.jsx)("button",{id:"equals",children:"="}),Object(o.jsx)("button",{id:"zero",children:"0"}),Object(o.jsx)("button",{id:"decimal",children:"."})]})]})};d.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))},9:function(t,e,i){}},[[11,1,2]]]);
//# sourceMappingURL=main.dd6c13df.chunk.js.map