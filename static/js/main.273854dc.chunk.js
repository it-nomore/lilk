(this.webpackJsonplilk=this.webpackJsonplilk||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var i=n(0),c=n.n(i),a=n(13),s=n.n(a),r=(n(22),n(4)),o=(n(23),n(24),n(1));var u=function(t){var e=t.llck,n=t.onPull,i=t.onSearchChange;return Object(o.jsxs)("form",{className:"Search",onSubmit:function(t){t.preventDefault(),n(t.target[0].value)},children:[Object(o.jsx)("input",{className:"Search-field",type:"text",value:e,onChange:function(t){i(t.target.value)}}),Object(o.jsx)("button",{className:"Search-button",children:"pull"})]})},h=n(2),d=(n(26),[{width:"min",height:"min"},{width:"max",height:"max"},{width:"max",height:"min"},{width:"min",height:"max"},{width:"max",height:"50%"},{width:"50%",height:"max"},{width:"50%",height:"50%"},{width:"min",height:"50%"},{width:"50%",height:"min"},{width:"max",height:"33%"},{width:"max",height:"25%"},{width:"33%",height:"max"},{width:"25%",height:"max"},{width:"33%",height:"33%"},{width:"25%",height:"25%"}]);var b=function(t){var e=t.onSizesChange,n=t.width,c=t.height,a=Object(i.useState)({width:n,height:c}),s=Object(r.a)(a,2),u=s[0],b=s[1];return Object(i.useEffect)((function(){return b({width:n,height:c})}),[n,c]),Object(i.useEffect)((function(){return e(u)}),[u,e]),Object(o.jsx)("form",{className:"DocPanel",onSubmit:function(t){return t.preventDefault()},children:Object(o.jsxs)("button",{className:"DocPanel-button",onClick:function(){return b((function(t){var e=d.findIndex((function(e){return e.width===t.width&&e.height===t.height}));return e<d.length-1?Object(h.a)({},d[e+1]):Object(h.a)({},d[0])}))},children:["sizes : ",u.width," / ",u.height]})})};n(27);var l=function(t){var e=t.html,n=t.name,c=t.sizes,a=Object(i.useState)({width:"1px",height:"1px"}),s=Object(r.a)(a,2),u=s[0],h=s[1],d=Object(i.useRef)(null),b=function(){var t,e,n,i,a,s;try{t=d.current.contentDocument.body,e=d.current.contentDocument.documentElement,n=Math.max(t.scrollHeight,t.offsetHeight,e.offsetHeight),i=Math.max(t.scrollWidth,t.offsetWidth,e.scrollWidth)}catch(u){console.log(u)}switch(c.height){case"min":a=n?"".concat(n,"px"):"100%";break;case"max":var r=document.documentElement.clientHeight;if(!n){a="100%";break}a=r>n?"100%":"".concat(n,"px");break;default:a="".concat(c.height,"px")}switch(c.width){case"min":s=i?"".concat(i,"px"):"100%";break;case"max":var o=document.documentElement.clientWidth;if(!i){s="100%";break}s=o>i?"100%":"".concat(i,"px");break;default:s="".concat(c.width,"px")}h((function(t){return t.width===s&&t.height===a?t:{width:s,height:a}}))},l=Object(i.useCallback)(b,[c.height,c.width]);return Object(i.useEffect)((function(){var t=setInterval(l);return function(){clearInterval(t)}}),[l]),Object(o.jsx)("iframe",{ref:d,onLoad:b,className:"Portal",frameBorder:"0",scrolling:"no",title:"wed",name:n,srcDoc:e,style:{minWidth:u.width,minHeight:u.height,width:u.width,height:u.height}})};n(28);var f=function(t){var e=t.onPush;return Object(o.jsx)("form",{className:"PushForm",onSubmit:function(t){t.preventDefault(),e()},children:Object(o.jsx)("button",{className:"PushForm-button",children:"Push"})})};n(29);var m=function(t){var e=t.index,n=t.isOptions,c=t.html,a=t.message,s=t.onPush,u=t.width,h=t.height,d=Object(i.useState)({width:u,height:h}),m=Object(r.a)(d,2),j=m[0],g=m[1],O=Object(i.useState)({width:"fit-content",height:"fit-content"}),w=Object(r.a)(O,2),p=w[0],x=w[1];return Object(i.useEffect)((function(){x({width:"min"===j.width?"fit-content":"max"===j.width?"100%":j.width,height:"min"===j.height?"fit-content":"max"===j.height?"100%":j.height})}),[j,u,h]),Object(i.useEffect)((function(){x({width:"min"===u?"fit-content":"max"===u?"100%":u,height:"min"===h?"fit-content":"max"===h?"100%":h})}),[u,h]),Object(o.jsxs)("li",{className:"DocView ".concat(n?"DocView--bordered":""),style:{minWidth:p.width,minHeight:p.height,width:p.width,height:p.height},children:[Object(o.jsx)("div",{className:"DocView-portal",children:Object(o.jsx)(l,{html:c,name:e,sizes:j})}),Object(o.jsxs)("div",{className:"DocView-panel",children:[n&&Object(o.jsx)(b,{onSizesChange:function(t){return g(t)},height:h,width:u}),a&&a.from===e.toString()&&Object(o.jsx)(f,{onPush:s})]})]},e)};n(30);var j=function(t){var e=t.name,n=t.count,i=t.onPull;return Object(o.jsxs)("div",{className:"Link",children:[Object(o.jsx)("a",{className:"Link-title",href:"/",onClick:function(t){t.preventDefault(),i(t.target.innerText)},children:e}),Object(o.jsx)("div",{className:"Link-counter",children:n})]})},g=n(14),O=n(15),w=function(){function t(){Object(g.a)(this,t)}return Object(O.a)(t,null,[{key:"inLitForm",value:function(e){return e.split(" ").map((function(e){return t._inLitFormOne(e)})).join("--")}},{key:"inSignForm",value:function(e){return e.split("--").map((function(e){return t._inSignFormOne(e)})).join(" ")}},{key:"makeInfoMap",value:function(e){var n=new Map;return e.forEach((function(e){e.id&&n.set("=".concat(e.id),1),e.it&&t._addKeyInfo(n,e,"it","/"),e.is&&t._addKeyInfo(n,e,"is",":"),e.to&&t._addKeyInfo(n,e,"to","@"),e.in&&t._addKeyInfo(n,e,"in","#"),e.or&&t._addKeyInfo(n,e,"or","!"),e.by&&t._addKeyInfo(n,e,"by","?")})),n}},{key:"parseToQuery",value:function(e){var n=t.parseToObj(e),i="";return n.id&&(i="id=".concat(n.id)),n.it&&(i=t._addParam(i,"it",n.it)),n.is&&(i=t._addParam(i,"is",n.is)),n.to&&(i=t._addParam(i,"to",n.to)),n.in&&(i=t._addParam(i,"in",n.in)),n.or&&(i=t._addParam(i,"or",n.or)),n.by&&(i=t._addParam(i,"by",n.by)),i}},{key:"parseToObj",value:function(e){var n=e.split(" "),i={};return n.forEach((function(e){switch(e[0]){case"=":i.id=e.substr(1);break;case"/":t._addKey(i,"it",e.substr(1));break;case":":t._addKey(i,"is",e.substr(1));break;case"@":t._addKey(i,"to",e.substr(1));break;case"#":t._addKey(i,"in",e.substr(1));break;case"!":t._addKey(i,"or",e.substr(1));break;case"?":t._addKey(i,"by",e.substr(1))}})),i}},{key:"_addKey",value:function(t,e,n){/^[a-z0-9_\-.]+$/.test(n)&&(t[e]?Array.isArray(t[e])?t[e].push(n):t[e]=[t[e],n]:t[e]=n)}},{key:"_addParam",value:function(t,e,n){return Array.isArray(n)?n.forEach((function(n){t+=t?"&".concat(e,"=").concat(n):"".concat(e,"=").concat(n)})):t+=t?"&".concat(e,"=").concat(n):"".concat(e,"=").concat(n),t}},{key:"_addKeyInfo",value:function(t,e,n,i){(Array.isArray(e[n])?e[n]:[e[n]]).forEach((function(e){t.has("".concat(i).concat(e))?t.set("".concat(i).concat(e),t.get("".concat(i).concat(e))+1):t.set("".concat(i).concat(e),1)}))}},{key:"_inLitFormOne",value:function(t){switch(t[0]){case"=":return"id-".concat(t.substr(1));case"/":return"it-".concat(t.substr(1));case":":return"is-".concat(t.substr(1));case"@":return"to-".concat(t.substr(1));case"#":return"in-".concat(t.substr(1));case"!":return"or-".concat(t.substr(1));case"?":return"by-".concat(t.substr(1));default:return}}},{key:"_inSignFormOne",value:function(t){switch(t.substr(0,2)){case"id":return"=".concat(t.substr(3));case"it":return"/".concat(t.substr(3));case"is":return":".concat(t.substr(3));case"to":return"@".concat(t.substr(3));case"in":return"#".concat(t.substr(3));case"or":return"!".concat(t.substr(3));case"by":return"?".concat(t.substr(3));default:return}}}]),t}(),p=(n(31),"https://tranquil-chamber-18069.herokuapp.com/");var x=function(t){var e=t.req,n=t.onPull,c=t.arrange,a=Object(i.useState)(null),s=Object(r.a)(a,2),u=s[0],d=s[1],b=Object(i.useState)(!1),l=Object(r.a)(b,2),f=l[0],g=l[1],O=Object(i.useState)([]),x=Object(r.a)(O,2),y=x[0],v=x[1],k=Object(i.useState)(null),S=Object(r.a)(k,2),N=S[0],z=S[1],P=Object(i.useState)(null),_=Object(r.a)(P,2),C=_[0],E=_[1];Object(i.useEffect)((function(){fetch("".concat(p,"?").concat(e)).then((function(t){return t.json()})).then((function(t){g(!0),v(t),E(e?null:w.makeInfoMap(t))}),(function(t){g(!0),d(t)}))}),[e]),Object(i.useEffect)((function(){window.addEventListener("message",(function(t){t.data&&"string"===typeof t.data&&z({from:t.source.name,data:t.data})}))}),[]);var F=function(){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(h.a)(Object(h.a)({},w.parseToObj(N.data)),{},{html:N.data}))};fetch(p,t),z(null)};return u?Object(o.jsxs)("div",{children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",u.message]}):f?Object(o.jsxs)("ul",{className:"View ".concat(e?"":"View--shorts"),style:{flexDirection:c.direction,flexWrap:c.wrap,justifyContent:c.justify,alignItems:c.items,alignContent:c.content},children:[e&&y.map((function(t,e){return Object(o.jsx)(m,{index:e,isOptions:c.options,html:t.html,message:N,onPush:F,width:c.sizes.width,height:c.sizes.height},e)})),!e&&C&&Array.from(C).map((function(t,e){return Object(o.jsx)("li",{className:"View-item",children:Object(o.jsx)(j,{name:t[0],count:t[1],onPull:n})},e)}))]}):Object(o.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})},y=n(3),v=(n(32),[{width:"min",height:"min"},{width:"max",height:"max"},{width:"max",height:"min"},{width:"min",height:"max"},{width:"max",height:"50%"},{width:"50%",height:"max"},{width:"50%",height:"50%"},{width:"min",height:"50%"},{width:"50%",height:"min"},{width:"max",height:"33%"},{width:"max",height:"25%"},{width:"33%",height:"max"},{width:"25%",height:"max"},{width:"33%",height:"33%"},{width:"25%",height:"25%"}]);var k=function(t){var e=t.onArrangeChange,n=t.display,c=Object(i.useState)({direction:"row",wrap:"wrap",justify:"center",items:"center",content:"start",sizes:{width:"min",height:"min"},options:!1}),a=Object(r.a)(c,2),s=a[0],u=a[1],d=function(t){switch(t.target.name){case"direction":u((function(t){return Object(h.a)(Object(h.a)({},t),{},{sizes:Object(h.a)({},t.sizes),direction:"row"===t.direction?"column":"row"})}));break;case"wrap":u((function(t){return Object(h.a)(Object(h.a)({},t),{},{wrap:"wrap"===t.wrap?"nowrap":"wrap"})}));break;case"justify":u((function(t){return Object(h.a)(Object(h.a)({},t),{},{sizes:Object(h.a)({},t.sizes),justify:"center"===t.justify?"start":"start"===t.justify?"end":"end"===t.justify?"space-between":"space-between"===t.justify?"space-around":"space-around"===t.justify?"space-evenly":"center"})}));break;case"items":u((function(t){return Object(h.a)(Object(h.a)({},t),{},{sizes:Object(h.a)({},t.sizes),items:"center"===t.items?"start":"start"===t.items?"end":"center"})}));break;case"content":u((function(t){return Object(h.a)(Object(h.a)({},t),{},{sizes:Object(h.a)({},t.sizes),content:"center"===t.content?"start":"start"===t.content?"end":"end"===t.content?"space-between":"space-between"===t.content?"space-around":"center"})}));break;case"sizes":var e=v.findIndex((function(t){return t.width===s.sizes.width&&t.height===s.sizes.height}));u((function(t){return Object(h.a)(Object(h.a)({},t),{},{sizes:e<v.length-1?Object(h.a)({},v[e+1]):Object(h.a)({},v[0])})}));break;case"options":u((function(t){return Object(h.a)(Object(h.a)({},t),{},{sizes:Object(h.a)({},t.sizes),options:!t.options})}));break;default:u({direction:"row",wrap:"wrap",justify:"center",items:"center",content:"start",sizes:{width:"min",height:"min"},options:!1})}};return Object(i.useEffect)((function(){return e(s)}),[s,e]),Object(o.jsxs)("form",{className:"Settings ".concat(n?"":"Settings--none"),onSubmit:function(t){return t.preventDefault()},children:[Object(o.jsx)("button",{className:"Settings-button",name:"default",onClick:d,children:"defaults"}),Object(o.jsx)("button",{className:"Settings-button",name:"direction",onClick:d,children:s.direction}),Object(o.jsx)("button",{className:"Settings-button",name:"wrap",onClick:d,children:s.wrap}),Object(o.jsxs)("button",{className:"Settings-button",name:"justify",onClick:d,children:["justify : ",s.justify]}),Object(o.jsxs)("button",{className:"Settings-button",name:"items",onClick:d,children:["align : ",s.items]}),Object(o.jsxs)("button",{className:"Settings-button",name:"content",onClick:d,children:[s.direction,"s : ",s.content]}),Object(o.jsxs)("button",{className:"Settings-button",name:"sizes",onClick:d,children:["sizes : ",s.sizes.width," / ",s.sizes.height]}),Object(o.jsxs)("button",{className:"Settings-button",name:"options",onClick:d,children:["options : ",s.options?"on":"off"]})]})};var S=function(){var t=Object(y.d)(),e=Object(y.e)().search.substr(1),n=Object(i.useState)(e?w.inSignForm(e):""),c=Object(r.a)(n,2),a=c[0],s=c[1],h=Object(i.useState)(e?w.parseToQuery(w.inSignForm(e)):""),d=Object(r.a)(h,2),b=d[0],l=d[1],f=Object(i.useState)({direction:"row",wrap:"wrap",justify:"center",items:"center",content:"start",options:!1}),m=Object(r.a)(f,2),j=m[0],g=m[1],O=Object(i.useState)(!1),p=Object(r.a)(O,2),v=p[0],S=p[1],N=function(e){s(e),l(w.parseToQuery(e)),t.push({search:"?".concat(w.inLitForm(e))})};return Object(i.useEffect)((function(){t.listen((function(t){var e=t.search.substr(1);s(e?w.inSignForm(e):""),l(e?w.parseToQuery(w.inSignForm(e)):"")}))}),[t]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsxs)("div",{className:"Header-up",children:[Object(o.jsx)("button",{className:"settings-switcher",onClick:function(){return S((function(t){return!t}))}}),Object(o.jsx)(u,{llck:a,onPull:N,onSearchChange:function(t){s(t)}})]}),Object(o.jsx)(k,{onArrangeChange:function(t){return g(t)},display:v})]}),Object(o.jsx)("main",{className:"App-main",children:Object(o.jsx)(x,{req:b,onPull:N,arrange:j})})]})},N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),i(t),c(t),a(t),s(t)}))},z=n(10);s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(z.a,{children:Object(o.jsx)(S,{})})}),document.getElementById("root")),N()}},[[41,1,2]]]);
//# sourceMappingURL=main.273854dc.chunk.js.map