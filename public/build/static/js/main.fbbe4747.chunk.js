(this.webpackJsonpstorefront=this.webpackJsonpstorefront||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(26),s=n.n(a),l=n(5),o=n.n(l),i=n(6),d=n(13),u=n(4),b=n(1),m=function(){return Object(b.jsx)("div",{className:"bg-white",children:Object(b.jsx)("div",{className:"max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8",children:Object(b.jsx)(J,{})})})},j=n(3),x=n(11),p=n(9),f=n.n(p),h="https://delicious-tan-adjustment.glitch.me/api",g=function(){var e={admin:"admin"===localStorage.getItem("mode")?"true":"false",Accept:"application/json","Content-Type":"application/json"};return console.log(e),e},O=function(){return f.a.get("".concat(h,"/products"),{headers:g()})},y=function(){return f.a.post("".concat(h,"/cart"),{headers:g()})},v=function(e,t){return f.a.post("".concat(h,"/cart/").concat(e,"/products"),t,{headers:g()})},w=function(e){return f.a.get("".concat(h,"/cart/").concat(e,"/products"),{headers:g()})},N=function(e,t){return f.a.put("".concat(h,"/products/").concat(e),t,{headers:g()})},k=function(e){return f.a.delete("".concat(h,"/products/").concat(e),{headers:g()})},S=function(e){return f.a.post("".concat(h,"/products"),e,{headers:g()})},C=function(e,t){return f.a.delete("".concat(h,"/cart/").concat(e,"/products/").concat(t),{headers:g()})},I=n(10),z=function(e,t){switch(console.log("ACTION TYPE IN REDUCER:",t.type),t.type){case"SET_QUANTITY":return Object(I.a)(Object(I.a)({},e),{},{productQuantity:t.payload});case"RESET_PRODUCTS":return Object(I.a)(Object(I.a)({},e),{},{productQuantity:0});case"SET_PERSISTENCE":return Object(I.a)(Object(I.a)({},e),{},{persistenceType:t.payload});default:return e}};function E(e){var t=e.children,n=Object(c.useReducer)(z,function(){if("undefined"===typeof Storage)throw new Error("You need to enable Storage to run this app.");var e=JSON.parse(localStorage.getItem("globalState"));return JSON.parse(sessionStorage.getItem("globalState"))||e||M}()),r=Object(j.a)(n,2),a=r[0],s=r[1],l=Object(c.useRef)(!0),o=Object(c.useRef)(!0);return console.log("GLOBAL STATE IN STORE",a),Object(c.useEffect)((function(){if(l.current)l.current=!1;else{var e=a.persistenceType;"sessionStorage"===e?sessionStorage.setItem("globalState",JSON.stringify(a)):"localStorage"===e&&localStorage.setItem("globalState",JSON.stringify(a))}}),[a]),Object(c.useEffect)((function(){if(o.current)o.current=!1;else{var e=a.persistenceType;"sessionStorage"===e?localStorage.removeItem("globalState"):"localStorage"===e&&sessionStorage.removeItem("globalState")}}),[a.persistenceType]),Object(b.jsx)(T.Provider,{value:{globalState:a,dispatch:s},children:t})}var T=Object(c.createContext)({}),M={productQuantity:0,isUserAuthenticated:!1,loggedUser:"",persistenceType:"sessionStorage"};var F=n(27),P=function(e){var t=e.id,n=Object(c.useState)("hidden"),r=Object(j.a)(n,2),a=r[0],s=r[1],l=Object(c.useContext)(T).dispatch;function d(){return(d=Object(i.a)(o.a.mark((function e(t){var n,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem("cartId"),e.next=4,v(n,{productId:parseInt(t)});case 4:c=e.sent,(r=c.data)&&(console.log(r),u(r.products.length),s("block"),setTimeout((function(){s("hidden")}),5e3)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function u(e){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l({type:"SET_QUANTITY",payload:t});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{id:"addedSuccessfully",className:"".concat(a," fixed z-10 inset-0 overflow-y-auto"),"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:Object(b.jsx)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:Object(b.jsx)("div",{className:"p-5 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:Object(b.jsxs)("div",{className:"flex items-center justify-center",children:[Object(b.jsx)(F.a,{size:"20",className:"mr-4"})," ",Object(b.jsx)("p",{className:"text-dark pt-1",children:"Product added!"})]})})})}),Object(b.jsx)("button",{type:"button",onClick:function(){return function(e){return d.apply(this,arguments)}("".concat(t))},children:Object(b.jsx)(x.a,{size:"25",color:"#3E4756"})})]})},U=n(28),L=n(12),H=function(e){var t=e.show,n=e.handler,r=e.productToEdit,a=Object(c.useState)(""),s=Object(j.a)(a,2),l=s[0],d=s[1],u=Object(c.useState)(""),m=Object(j.a)(u,2),x=m[0],p=m[1],f=Object(c.useState)(""),h=Object(j.a)(f,2),g=h[0],O=h[1],y=Object(c.useState)(0),v=Object(j.a)(y,2),w=v[0],k=v[1],S=Object(c.useState)(""),C=Object(j.a)(S,2),z=C[0],E=C[1],T=Object(c.useState)(""),M=Object(j.a)(T,2),F=M[0],P=M[1],U=Object(c.useState)(-1),H=Object(j.a)(U,2),R=H[0],A=H[1],B=Object(c.useState)(!1),Y=Object(j.a)(B,2),J=Y[0],V=Y[1],D=Object(c.useState)(""),Q=Object(j.a)(D,2),_=Q[0],W=Q[1];function $(){n(),J&&window.location.reload()}function G(){return(G=Object(i.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={name:l,price:x,imageUrl:g,stock:w,description:z,code:F},e.prev=1,(n=Object.assign(Object(I.a)({},t))).id=R,JSON.stringify(n)!==JSON.stringify(r)){e.next=8;break}W("You need to make changes to edit the product."),e.next=13;break;case 8:return e.next=10,N(R,t);case 10:c=e.sent,c.data&&V(!0);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))).apply(this,arguments)}Object(c.useEffect)((function(){d(r.name),p(r.price),O(r.imageUrl),k(r.stock),E(r.description),P(r.code),A(r.id)}),[r]);var K=function(){return Object(b.jsx)(b.Fragment,{children:_&&Object(b.jsx)("div",{className:"w-full pt-4 text-center text-red-600",children:_})})};return t?Object(b.jsx)("div",{className:"fixed z-10 inset-0 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:Object(b.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(b.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"}),Object(b.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(b.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[Object(b.jsxs)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:[Object(b.jsx)("div",{className:"sm:flex sm:items-start",children:Object(b.jsxs)("div",{className:"mt-3 text-center sm:mt-0 ml-1 sm:text-left w-full",children:[Object(b.jsxs)("div",{className:"flex items-center justify-between pb-4",children:[Object(b.jsx)("h3",{className:"text-lg leading-6 font-medium text-gray-900",id:"modal-title",children:"Edit product"}),Object(b.jsx)("button",{onClick:function(){return $()},children:Object(b.jsx)(L.a,{size:"20"})})]}),Object(b.jsx)("div",{className:"mt-2 w-full",children:!J&&Object(b.jsxs)("form",{className:"text-sm text-gray-500 w-full space-y-2",children:[Object(b.jsx)("input",{className:"bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 \r px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-name",type:"text",placeholder:"Product name",value:l,onChange:function(e){return d(e.target.value)},onFocus:function(){return W("")}}),Object(b.jsx)("input",{className:"bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 \r px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-price",type:"text",placeholder:"Product name",value:x,onChange:function(e){return p(e.target.value)},onFocus:function(){return W("")}}),Object(b.jsx)("input",{className:"bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 \r px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-image",type:"text",placeholder:"Product name",value:g,onChange:function(e){return O(e.target.value)},onFocus:function(){return W("")}}),Object(b.jsx)("input",{className:"bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 \r px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-stock",type:"text",placeholder:"Product name",value:w,onChange:function(e){return k(parseInt(e.target.value))},onFocus:function(){return W("")}}),Object(b.jsx)("input",{className:"bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 \r px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-desc",type:"text",placeholder:"Product name",value:z,onChange:function(e){return E(e.target.value)},onFocus:function(){return W("")}}),Object(b.jsx)("input",{className:"bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 \r px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-code",type:"text",placeholder:"Product name",value:F,onChange:function(e){return P(e.target.value)},onFocus:function(){return W("")}})]})})]})}),Object(b.jsx)(K,{})]}),!J&&Object(b.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[Object(b.jsx)("button",{type:"button",className:"w-full inline-flex \r justify-center rounded-md border \r border-transparent shadow-sm px-4 py-2 \r bg-dark text-base font-medium text-highlight hover:bg-gray-900 focus:outline-none focus:ring-2 \r focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return function(){return G.apply(this,arguments)}()},children:"Edit"}),Object(b.jsx)("button",{onClick:function(){return d(r.name),p(r.price),O(r.imageUrl),k(r.stock),E(r.description),void P(r.code)},type:"button",className:"w-full inline-flex \r justify-center rounded-md border \r border-transparent shadow-sm px-4 py-2 \r bg-gray-300 text-base font-medium text-dark hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",children:"Reset"}),Object(b.jsx)("button",{type:"button",style:{color:"gray"},onClick:function(){return $()},className:"mt-3 w-full\r inline-flex justify-center rounded-md border border-gray-300 \r shadow-sm px-4 py-2 bg-white text-base font-medium\r hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 \r focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",children:"Cancel"})]}),J&&Object(b.jsx)("div",{className:" px-8 pb-16",children:Object(b.jsx)("p",{className:"text-sm text-gray-500",children:"Your product was edited successfully!"})})]})]})}):null},R=function(e){var t=e.id,n=Object(c.useState)(!1),r=Object(j.a)(n,2),a=r[0],s=r[1],l=Object(c.useState)({id:-1,name:"",price:"",imageUrl:"",stock:0,description:"",code:""}),d=Object(j.a)(l,2),u=d[0],m=d[1],x=function(){var e=Object(i.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r=t,f.a.get("".concat(h,"/products/").concat(r),{headers:g()});case 3:n=e.sent,c=n.data,console.log("Nueva data:",c),m(c[0]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:s(!a);case 13:case"end":return e.stop()}var r}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(H,{show:a,handler:x,productToEdit:u}),Object(b.jsx)("button",{id:t,type:"button",className:"editBtn mx-2",onClick:x,children:Object(b.jsx)(U.a,{size:"25",color:"#3E4756"})})]})},A=function(e){var t=e.id,n=e.show,r=e.handler,a=Object(c.useState)(!1),s=Object(j.a)(a,2),l=s[0],d=s[1];function u(){r(),l&&window.location.reload()}function m(){return(m=Object(i.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(t);case 3:n=e.sent,c=n.data,console.log(c),c&&d(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return n?Object(b.jsx)("div",{className:"fixed z-10 inset-0 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:Object(b.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(b.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"}),Object(b.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(b.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[Object(b.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:Object(b.jsxs)("div",{className:"sm:flex sm:items-start",children:[Object(b.jsx)("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:Object(b.jsx)("svg",{className:"h-6 w-6 text-red-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),Object(b.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full",children:[Object(b.jsxs)("div",{className:"flex items-center justify-between pb-4",children:[Object(b.jsx)("h3",{className:"text-lg leading-6 font-medium text-gray-900",id:"modal-title",children:"Delete product"}),Object(b.jsx)("button",{onClick:function(){return u()},children:Object(b.jsx)(L.a,{size:"20"})})]}),!l&&Object(b.jsx)("div",{className:"mt-2",children:Object(b.jsx)("p",{className:"text-sm text-gray-500",children:"Are you sure you want to delete this product? This action cannot be undone."})})]})]})}),!l&&Object(b.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[Object(b.jsx)("button",{type:"button",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return function(){return m.apply(this,arguments)}()},children:"Delete"}),Object(b.jsx)("button",{type:"button",style:{color:"gray"},onClick:function(){return u()},className:"mt-3 w-full\r inline-flex justify-center rounded-md border border-gray-300 \r shadow-sm px-4 py-2 bg-white text-base font-medium\r hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 \r focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",children:"Cancel"})]}),l&&Object(b.jsx)("div",{className:" px-8 pb-16",children:Object(b.jsx)("p",{className:"text-sm text-gray-500",children:"Your product was deleted successfully!"})})]})]})}):null},B=function(e){var t=e.id,n=Object(c.useState)(!1),r=Object(j.a)(n,2),a=r[0],s=r[1],l=function(){s(!a)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(A,{id:t,show:a,handler:l}),Object(b.jsx)("button",{id:t,type:"button",className:"deleteBtn pb-0.5",onClick:l,children:Object(b.jsx)(L.b,{size:"25",color:"#3E4756"})})]})},Y=function(e){var t=e.id,n=e.name,c=e.price,r=e.imageUrl;return Object(b.jsxs)("div",{id:t,className:"group",children:[Object(b.jsx)("div",{className:"w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8",children:Object(b.jsx)("img",{src:r,alt:"Tall slender porcelain bottle with natural clay textured body and cork stopper.",className:"w-full h-full object-center object-contain group-hover:opacity-75 max-h-96"})}),Object(b.jsxs)("div",{className:"flex mt-4 justify-between px-2",children:[Object(b.jsxs)("div",{className:"flex-col",children:[Object(b.jsx)("h3",{className:"text-sm text-gray-700",children:n}),Object(b.jsxs)("p",{className:"mt-1 text-lg font-medium text-gray-900",children:["$",c]})]}),Object(b.jsxs)("div",{className:"flex items-center",children:[Object(b.jsx)(B,{id:t}),Object(b.jsx)(R,{id:t}),Object(b.jsx)(P,{id:t})]})]})]})},J=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(j.a)(a,2),l=s[0],d=s[1];function u(){return(u=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:t=e.sent,n=t.data,r(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[]),Object(b.jsxs)("div",{className:"grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8",children:[!l&&n.map((function(e){return Object(b.jsx)(Y,{name:e.name,id:e.id,price:e.price,imageUrl:e.imageUrl},e.id)})),l&&Object(b.jsx)("span",{children:"There was an error when loading the page. Please retry."})]})},V=function(e){var t=e.id,n=e.name,r=e.price,a=e.imageUrl,s=e.code,l=Object(c.useState)([]),d=Object(j.a)(l,2),u=d[0],m=d[1];function p(){return(p=Object(i.a)(o.a.mark((function e(t){var n,c,r,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,n=localStorage.getItem("cartId"),e.next=5,C(n,t);case 5:if(c=e.sent,r=c.data,console.log(r),!r){e.next=20;break}return e.prev=9,e.next=12,w(n);case 12:a=e.sent,s=a.data,m(s),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(9),console.log(e.t0);case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(1),console.log(e.t1);case 25:case"end":return e.stop()}}),e,null,[[1,22],[9,17]])})))).apply(this,arguments)}return Object(b.jsx)(b.Fragment,{children:0===u.length&&Object(b.jsxs)("div",{id:t,className:"flex justify-between items-center mt-6 pt-6",children:[Object(b.jsxs)("div",{className:"flex items-center",children:[Object(b.jsx)("img",{src:a,width:"60",className:"rounded-full mr-6"}),Object(b.jsxs)("div",{className:"flex flex-col ml-3",children:[" ",Object(b.jsx)("span",{className:"md:text-md font-medium",children:n}),Object(b.jsxs)("span",{className:"text-xs font-light text-gray-400",children:["#",s]})," "]})]}),Object(b.jsxs)("div",{className:"flex justify-center items-center",children:[Object(b.jsxs)("div",{className:"pr-8 ",children:[" ",Object(b.jsxs)("span",{className:"text-md font-medium",children:["$",r]})," "]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"button",onClick:function(){return function(e){return p.apply(this,arguments)}(t)},children:Object(b.jsx)(x.b,{size:"25"})})})]})]})})},D=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),s=Object(j.a)(a,2),l=s[0],u=s[1],m=Object(c.useState)(!1),x=Object(j.a)(m,2),p=x[0],f=x[1],h=Object(c.useContext)(T).dispatch;function g(){return(g=Object(i.a)(o.a.mark((function e(){var t,n,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("cartId"),e.next=4,w(t);case 4:n=e.sent,c=n.data,r(c),a=0,c.forEach((function(e){var t=parseFloat(e.price);a+=t})),u(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function O(){return(O=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("cartId")){e.next=13;break}return e.prev=2,e.next=5,y();case 5:t=e.sent,n=t.data,localStorage.setItem("cartId",n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("Error in creating cart:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}function v(){localStorage.removeItem("cartId"),h({type:"RESET_PRODUCTS"}),function(){O.apply(this,arguments)}(),f(!0)}return Object(c.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[]),Object(b.jsx)("div",{className:"h-full bg-transparent",children:Object(b.jsx)("div",{className:"py-12",children:Object(b.jsx)("div",{className:"max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl",children:Object(b.jsx)("div",{className:"md:flex ",children:Object(b.jsx)("div",{className:"w-full p-4 px-5 py-5",children:Object(b.jsxs)("div",{className:"md:grid gap-2 ",children:[!p&&Object(b.jsxs)("div",{className:"col-span-2 p-5",children:[Object(b.jsx)("h1",{className:"text-xl font-medium ",children:"Shopping Cart"}),n.map((function(e,t){return Object(b.jsx)(V,{name:e.name,id:e.id,price:parseInt(e.price).toFixed(2),imageUrl:e.imageUrl,code:e.code},t)})),Object(b.jsxs)("div",{className:"flex justify-between items-center mt-6 pt-6 border-t",children:[Object(b.jsxs)("div",{className:"flex items-center",children:[" ",Object(b.jsx)("i",{className:"fa fa-arrow-left text-sm pr-2"}),Object(b.jsx)(d.b,{to:{pathname:"/"},className:"text-md font-medium text-blue-400",children:"Continue Shopping"})]}),Object(b.jsxs)("div",{className:"flex justify-center items-center",children:[Object(b.jsx)("span",{className:"text-sm font-medium text-gray-400 mr-1 mt-1",children:"Subtotal:"}),Object(b.jsx)("span",{className:"text-lg font-bold text-gray-800 ",children:l.toFixed(2)})," "]})]}),Object(b.jsx)("div",{className:"w-full flex justify-center",children:Object(b.jsx)("button",{className:"mt-5 h-12 w-3/6 bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600",onClick:function(){return v()},children:"Check Out"})})]}),p&&Object(b.jsxs)("div",{className:"flex flex-col space-y-4",children:[Object(b.jsx)("h4",{className:"text-xl font-semibold",children:"Congratulations!"}),Object(b.jsx)("p",{children:"You just bought a lot of stuff."}),Object(b.jsx)(d.b,{to:{pathname:"/"},className:"text-blue-500",children:"Keep buying more"})]})]})})})})})})},Q=function(){var e=Object(c.useContext)(T).globalState;return console.log(e),Object(b.jsxs)("button",{type:"button",className:"ml-6 flex",children:[Object(b.jsx)(x.c,{size:"30",color:"#3E4756"}),e.productQuantity]})},_=function(){var e=Object(c.useState)(localStorage.getItem("mode")),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("label",{htmlFor:"modeToggler",className:"flex items-center cursor-pointer",children:[Object(b.jsxs)("div",{className:"relative",children:[Object(b.jsx)("input",{type:"checkbox",readOnly:!0,checked:"user"!==n,id:"modeToggler",className:"sr-only",onClick:function(){"user"===localStorage.getItem("mode")?(r("admin"),localStorage.setItem("mode","admin"),document.body.classList.remove("user"),document.body.classList.add("admin")):(r("user"),localStorage.setItem("mode","user"),document.body.classList.remove("admin"),document.body.classList.add("user"))}}),Object(b.jsx)("div",{className:"block ".concat("user"===n?"bg-dark":"bg-highlight"," w-14 h-8 rounded-full")}),Object(b.jsx)("div",{className:"dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"})]}),Object(b.jsx)("div",{className:"ml-3 text-gray-700 font-medium",children:"Admin view"})]})},W=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:64,height:64,viewBox:"0 0 172 172",children:Object(b.jsxs)("g",{fill:"none",strokeMiterlimit:10,fontFamily:"none",fontWeight:"none",fontSize:"none",textAnchor:"none",style:{mixBlendMode:"normal"},children:[Object(b.jsx)("path",{d:"M0 172V0h172v172z"}),Object(b.jsx)("path",{fill:"#97accf",d:"M17.805 43.672h136.391V153.19H17.805z"}),Object(b.jsx)("path",{fill:"#bfaeb8",d:"M17.805 43.672h10.078V153.19H17.805z"}),Object(b.jsx)("path",{fill:"#c8afbe",d:"M124.966 112.06h17.392v29.71h-17.392z"}),Object(b.jsx)("path",{d:"M112.055 102.797H58.79v50.39h53.75v-50.39z",fill:"#bf9fb2"}),Object(b.jsx)("path",{d:"M112.469 89.054v13.622H58.695V89.054z",fill:"#6d7486"}),Object(b.jsx)("path",{fill:"#c8afbe",d:"M29.643 112.06h17.392v29.71H29.643z"}),Object(b.jsx)("path",{d:"M17.726 64.075l.079.008v-.026zM154.195 64.057v.026l.08-.008z",fill:"#97accf"}),Object(b.jsx)("path",{d:"M124.777 18.813H95.023l8.782 25.01.336-.151h35.609zM32.314 43.669l.127.003h35.707l8.829-24.86H50.293z",fill:"#f5cce4"}),Object(b.jsx)("path",{d:"M149.156 18.813h-24.379l14.973 24.859h26.875zM76.977 18.813l-8.829 24.859h35.704l-8.829-24.86zM5.375 43.672H32.25l.064-.003 17.98-24.856H26.3z",fill:"#ffe4f4"}),Object(b.jsx)("path",{d:"M103.805 43.672v10.034c0 4.922 2.314 9.37 5.543 12.598a17.78 17.78 0 0030.402-12.598V43.672zM32.586 53.706c-.016 9.834 7.934 17.822 17.767 17.855 9.845-.034 17.815-8.01 17.842-17.855V43.672h-35.61z",fill:"#d9b1c7"}),Object(b.jsx)("path",{d:"M139.75 43.672V50.8c.038 7.36 5.99 13.32 13.35 13.364h.252c.336 0 .672-.062 1.005-.089 6.97-.59 12.313-6.444 12.268-13.44v-6.963zM68.195 53.706c0 9.834 7.972 17.805 17.805 17.805 9.833 0 17.805-7.971 17.805-17.805V43.672h-35.61zM5.375 50.636v.164a13.401 13.401 0 0012.268 13.275c.357.03.72.09 1.082.09h.252c7.377 0 13.32-6.155 13.273-13.53v-6.963H5.375z",fill:"#f5cce4"}),Object(b.jsx)("path",{fill:"#ac96a5",d:"M58.79 102.798h10.078v50.39H58.79z"}),Object(b.jsx)("path",{fill:"#79838e",d:"M58.79 89.024h10.078v13.774H58.79z"}),Object(b.jsx)("path",{d:"M66.468 113.303a2.016 2.016 0 01-2.016-2.015v-1.621a2.016 2.016 0 114.031 0v1.62a2.016 2.016 0 01-2.015 2.016zM66.468 143.125a2.016 2.016 0 01-2.016-2.016v-22.074a2.016 2.016 0 114.031 0v22.074a2.016 2.016 0 01-2.015 2.016z",fill:"#f4f8fc"})]})})},$=function(e){var t=e.show,n=e.handler,r=Object(c.useState)(""),a=Object(j.a)(r,2),s=a[0],l=a[1],d=Object(c.useState)(""),u=Object(j.a)(d,2),m=u[0],x=u[1],p=Object(c.useState)(""),f=Object(j.a)(p,2),h=f[0],g=f[1],O=Object(c.useState)(0),y=Object(j.a)(O,2),v=y[0],w=y[1],N=Object(c.useState)(""),k=Object(j.a)(N,2),C=k[0],I=k[1],z=Object(c.useState)(""),E=Object(j.a)(z,2),T=E[0],M=E[1],F=Object(c.useState)(!1),P=Object(j.a)(F,2),U=P[0],H=P[1],R=Object(c.useState)(""),A=Object(j.a)(R,2),B=A[0],Y=A[1];function J(){n(),U&&window.location.reload()}function V(){return(V=Object(i.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={name:s,price:m,imageUrl:h,stock:v,description:C,code:T},e.prev=1,!(t.name.length>0&&t.price.length>0&&t.imageUrl.length>0&&t.stock>0&&t.description.length>0&&t.code.length>0)){e.next=11;break}return e.next=5,S(t);case 5:n=e.sent,c=n.data,console.log(c),c&&H(!0),e.next=12;break;case 11:Y("You need to fill all fields to create a product.");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}var D=function(){return Object(b.jsx)(b.Fragment,{children:B&&Object(b.jsx)("div",{className:"w-full pt-4 text-center text-red-600",children:B})})};return t?Object(b.jsx)("div",{className:"fixed z-10 inset-0 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:Object(b.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(b.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"}),Object(b.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(b.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[Object(b.jsxs)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:[Object(b.jsx)("div",{className:"sm:flex sm:items-start",children:Object(b.jsxs)("div",{className:"mt-3 text-center sm:mt-0 ml-1 sm:text-left w-full",children:[Object(b.jsxs)("div",{className:"flex items-center justify-between pb-4",children:[Object(b.jsx)("h3",{className:"text-lg leading-6 font-medium text-gray-900",id:"modal-title",children:"Create new product"}),Object(b.jsx)("button",{onClick:function(){return J()},children:Object(b.jsx)(L.a,{size:"20"})})]}),Object(b.jsx)("div",{className:"mt-2 w-full",children:!U&&Object(b.jsxs)("form",{className:"text-sm text-gray-500 w-full space-y-2",children:[Object(b.jsx)("input",{className:"bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 \r px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-name",type:"text",placeholder:"Product name",value:s,onChange:function(e){return l(e.target.value)},onFocus:function(){return Y("")}}),Object(b.jsx)("input",{className:"bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 \r px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-price",type:"text",placeholder:"Product price",value:m,onChange:function(e){return x(e.target.value)},onFocus:function(){return Y("")}}),Object(b.jsx)("input",{className:"bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 \r px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-image",type:"text",placeholder:"Product image URL",value:h,onChange:function(e){return g(e.target.value)},onFocus:function(){return Y("")}}),Object(b.jsx)("input",{className:"bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 \r px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-stock",type:"text",placeholder:"Product stock",onChange:function(e){return w(parseInt(e.target.value))},onFocus:function(){return Y("")}}),Object(b.jsx)("input",{className:"bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 \r px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-desc",type:"text",placeholder:"Product description",value:C,onChange:function(e){return I(e.target.value)},onFocus:function(){return Y("")}}),Object(b.jsx)("input",{className:"bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 \r px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-code",type:"text",placeholder:"Product code",value:T,onChange:function(e){return M(e.target.value)},onFocus:function(){return Y("")}})]})})]})}),Object(b.jsx)(D,{})]}),!U&&Object(b.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[Object(b.jsx)("button",{type:"button",className:"w-full inline-flex \r justify-center rounded-md border \r border-transparent shadow-sm px-4 py-2 \r bg-dark text-base font-medium text-highlight hover:bg-gray-900 focus:outline-none focus:ring-2 \r focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return function(){return V.apply(this,arguments)}()},children:"Create"}),Object(b.jsx)("button",{type:"button",style:{color:"gray"},onClick:function(){return J()},className:"mt-3 w-full\r inline-flex justify-center rounded-md border border-gray-300 \r shadow-sm px-4 py-2 bg-white text-base font-medium\r hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 \r focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",children:"Cancel"})]}),U&&Object(b.jsx)("div",{className:" px-8 pb-16",children:Object(b.jsx)("p",{className:"text-sm text-gray-500",children:"Your product was created successfully!"})})]})]})}):null},G=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],a=function(){console.log("Here"),r(!n)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)($,{show:n,handler:a}),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"bg-base",children:Object(b.jsx)("div",{className:"max-w-6xl mx-auto px-4",children:Object(b.jsxs)("div",{className:"flex justify-between",children:[Object(b.jsxs)("div",{className:"flex space-x-4",children:[Object(b.jsx)("div",{children:Object(b.jsxs)(d.b,{to:{pathname:"/"},className:"flex items-center py-5 px-2 text-dark hover:text-gray-900",children:[Object(b.jsx)(W,{}),Object(b.jsx)("span",{className:"font-bold ml-6",children:"Storefront"})]})}),Object(b.jsxs)("button",{className:"m-4 addNewBtn flex-row items-center",onClick:function(){return a()},children:[Object(b.jsx)(x.a,{size:"25",color:"#3E4756"}),Object(b.jsx)("p",{className:"pl-2",children:"Add a new product"})]})]}),Object(b.jsxs)("div",{className:"flex",children:[Object(b.jsx)("div",{className:"md:hidden flex items-center",children:Object(b.jsx)("button",{className:"mobile-menu-button",children:Object(b.jsx)("svg",{className:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})}),Object(b.jsx)(_,{}),Object(b.jsx)(d.b,{to:{pathname:"/cart"},className:"flex items-center",children:Object(b.jsx)(Q,{})})]})]})})})})]})};n(53);var K=function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("cartId")){e.next=13;break}return e.prev=2,e.next=5,y();case 5:t=e.sent,n=t.data,localStorage.setItem("cartId",n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("Error in creating cart:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){sessionStorage.clear(),function(){e.apply(this,arguments)}()}),[]),Object(b.jsx)(E,{children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)("div",{children:Object(b.jsx)(G,{})}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{path:"/",element:Object(b.jsx)(m,{})}),Object(b.jsx)(u.a,{path:"/cart",element:Object(b.jsx)(D,{})})]})]})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(54);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(K,{})}),document.getElementById("root")),q()}},[[55,1,2]]]);
//# sourceMappingURL=main.fbbe4747.chunk.js.map