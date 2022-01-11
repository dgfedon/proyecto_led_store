(this.webpackJsonpproyecto_led=this.webpackJsonpproyecto_led||[]).push([[0],{108:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},116:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(40),r=c.n(n),s=c(22),i=c(24),j=c(9),l=c(1),o=Object(a.createContext)([]),d=function(){return Object(a.useContext)(o)};var b=function(e){var t=e.children,c=Object(a.useState)([]),n=Object(j.a)(c,2),r=n[0],s=n[1],d=function(){return r.reduce((function(e,t){return e+t.quantity*t.price}),0)},b=function(){return r.reduce((function(e){return.21*d()}),0)};return Object(l.jsx)(o.Provider,{value:{cartList:r,addToCart:function(e){var t=r.find((function(t){return t.id===e.id}));if(!t)return s([].concat(Object(i.a)(r),[e]));t.quantity=t.quantity+e.quantity,s([].concat(Object(i.a)(r.filter((function(t){return t.id!==e.id}))),[t]))},removeItemCart:function(e){s(r.filter((function(t){return t.id!==e})))},clearCart:function(){s([])},cartCounter:function(){return r.reduce((function(e,t){return e+t.quantity}),0)},subtotalBuy:d,ivaBuy:b,totalBuy:function(){return r.reduce((function(e){return d()+b()}),0)}},children:t})},u=function(){return{formatNumber:function(e){return new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS"}).format(e)}}};c(66);var h=function(e){var t=e.product,c=d().removeItemCart,a=u().formatNumber;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t.name}),Object(l.jsxs)("td",{children:["x",t.quantity]}),Object(l.jsx)("td",{children:a(t.price)}),Object(l.jsx)("td",{children:a(t.quantity*t.price)}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{onClick:function(){return c(t.id)},className:"cart__button--remove",children:Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",className:"bi bi-x-circle",viewBox:"0 0 16 16",children:[Object(l.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(l.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})})})]},t.id)})},O=c(16),x=c(86);var m=function(){var e=d(),t=e.cartList,c=e.clearCart,a=e.subtotalBuy,n=e.ivaBuy,r=e.totalBuy,i=u().formatNumber,j=Object(O.g)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Nombre"}),Object(l.jsx)("th",{children:"Cantidad"}),Object(l.jsx)("th",{children:"Precio"}),Object(l.jsx)("th",{children:"Subtotal"}),Object(l.jsx)("th",{})]})}),Object(l.jsxs)("tbody",{children:[t.map((function(e){return Object(l.jsx)(h,{product:e},e.id)})),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{colSpan:3,className:"text-end",children:"Subtotal compra"}),Object(l.jsx)("td",{colSpan:2,children:i(a())})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{colSpan:3,className:"text-end",children:"IVA"}),Object(l.jsx)("td",{colSpan:2,children:i(n())})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{colSpan:3,className:"text-end",children:"Total"}),Object(l.jsx)("td",{colSpan:2,children:i(r())})]})]})]}),Object(l.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(l.jsx)(s.a,{onClick:c,className:"cart--button",children:"Vaciar Carrito"}),Object(l.jsx)(s.a,{onClick:function(){j("/")},className:"cart--button",children:"Seguir comprando"}),Object(l.jsx)(s.a,{onClick:function(){j("/checkoutCart")},className:"cart--button",children:"Terminar compra"})]})]})},f=c(27);c(83);var p,g=function(){var e=d().cartList,t=Object(O.g)();return Object(l.jsx)(l.Fragment,{children:0===e.length?Object(l.jsxs)(f.a,{className:"head__cart--none",children:[Object(l.jsx)("h3",{children:"El carrito est\xe1 vac\xedo"}),Object(l.jsx)(s.a,{onClick:function(){t("/")},className:"cart--button w-25",children:"Ir a tienda"})]}):Object(l.jsxs)(f.a,{className:"cart--product",children:[Object(l.jsx)("h2",{className:"head--cart",children:"Carrito de compras"}),Object(l.jsx)(m,{})]})})},v=c(19),N=c(5),y=c(64),C=c(25),w=c(87),k=c(88),S=c.n(k),F=c(82);var I=function(e){var t=Object(F.css)(p||(p=Object(w.a)(["\n        display: block;\n        margin: 15px 0;\n    "])));return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{className:"d-flex justify-content-center mt-4 load--bg",children:[Object(l.jsx)("h5",{style:{fontSize:"40px",marginRight:"20px",color:"white",textShadow:"0 0 20px #FF2079"},children:e.load}),Object(l.jsx)(S.a,{color:"#FF2079",css:t,size:20})]})})},L=c(30),_=c(53);c(68);var z=function(e){var t=e.product,c=u().formatNumber;return Object(l.jsx)(_.a,{className:"card--product",children:Object(l.jsxs)(L.a,{children:[Object(l.jsx)("div",{className:"overflow",children:Object(l.jsx)(L.a.Img,{variant:"top",src:t.img,alt:"..."})}),Object(l.jsxs)(L.a.Body,{children:[Object(l.jsx)(L.a.Title,{className:"text-center",children:t.name}),Object(l.jsx)(L.a.Text,{className:"text-center",children:c(t.price)}),Object(l.jsx)(v.b,{to:"/detalle/".concat(t.id),children:Object(l.jsx)(s.a,{className:"w-100 text-uppercase",children:"ver detalle"})})]})]})},t.id)},T=c(62);var B=function(e){var t=e.products;return Object(l.jsx)(T.a,{xs:1,md:2,lg:3,className:"g-4",children:t.map((function(e){return Object(l.jsx)(z,{product:e},e.id)}))})};var A=function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(!0),i=Object(j.a)(s,2),o=i[0],d=i[1],b=Object(O.h)().idCategory;return Object(a.useEffect)((function(){var e=Object(C.g)(),t=b?Object(C.h)(Object(C.c)(e,"products"),Object(C.i)("category","==",b)):Object(C.h)(Object(C.c)(e,"products"));Object(C.f)(t).then((function(e){return r(e.docs.map((function(e){return Object(N.a)({id:e.id},e.data())})))})).catch((function(e){return console.log(e)})).finally((function(){return d(!1)}))}),[b]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(f.a,{children:[Object(l.jsxs)("div",{className:"head--product",children:[Object(l.jsx)("h2",{children:e.heading}),Object(l.jsxs)(y.a,{title:"Filtro",id:"offcanvasNavbarDropdown",children:[Object(l.jsx)(y.a.Item,{children:Object(l.jsx)(v.b,{className:"dropdown--item",to:"/categoria/luces",children:"Luces"})}),Object(l.jsx)(y.a.Item,{children:Object(l.jsx)(v.b,{className:"dropdown--item",to:"/categoria/barras",children:"Barras"})}),Object(l.jsx)(y.a.Item,{children:Object(l.jsx)(v.b,{className:"dropdown--item",to:"/categoria/carteles",children:"Carteles"})})]})]}),Object(l.jsx)("div",{className:"d-flex justify-content-center",children:o?Object(l.jsx)(I,{load:"Cargando productos"}):Object(l.jsx)(B,{products:n})})]})})};var E=function(e){e.initial;var t=e.stock,c=e.onAdd,n=function(e,t){var c=Object(a.useState)(e),n=Object(j.a)(c,2),r=n[0],s=n[1];return{counter:r,handleSum:function(){r<t&&s(Math.max(r+1,1))},handleRest:function(){r>e&&s(Math.max(r-1,1))}}}(1,t),r=n.counter,i=n.handleRest,o=n.handleSum;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("span",{className:"item__count--number",children:[Object(l.jsx)(s.a,{onClick:i,children:"-"}),r,Object(l.jsx)(s.a,{onClick:o,children:"+"})]}),Object(l.jsx)(s.a,{className:"mt-2 w-75",onClick:function(){return c(r)},children:"Agregar al carrito"})]})};c(108);var D=function(e){var t=e.detail,c=Object(O.g)(),n=Object(a.useState)(0),r=Object(j.a)(n,2),i=r[0],o=r[1],b=d().addToCart,h=u().formatNumber;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(_.a,{className:"card--detail",children:Object(l.jsxs)(L.a,{children:[Object(l.jsx)(L.a.Img,{src:t.img,alt:"..."}),Object(l.jsxs)(L.a.Body,{children:[Object(l.jsx)(L.a.Title,{className:"text-center",children:t.name}),Object(l.jsx)(L.a.Text,{className:"detail__text--description",children:t.description}),Object(l.jsxs)(L.a.Text,{className:"detail__text--price",children:["Precio: ",h(t.price)]}),Object(l.jsxs)(L.a.Text,{className:"detail__text--stock",children:["Stock disponible: ",t.stock]}),i?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.a,{onClick:function(){c("/")},className:"w-75",children:"Seguir comprando"}),Object(l.jsx)(s.a,{onClick:function(){c("/cart")},className:"mt-2 w-75",children:"Ir al carrito"})]}):Object(l.jsx)(E,{onAdd:function(e){o(!0),b(Object(N.a)(Object(N.a)({},t),{},{quantity:e}))},stock:t.stock})]})]})},t.id)})};var q=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!0),s=Object(j.a)(r,2),i=s[0],o=s[1],d=Object(O.h)().idDetail;return Object(a.useEffect)((function(){var e=Object(C.g)(),t=Object(C.d)(e,"products",d);Object(C.e)(t).then((function(e){return n(Object(N.a)({id:e.id},e.data()))})).catch((function(e){return console.log(e)})).finally((function(){return o(!1)}))}),[d]),Object(l.jsxs)(f.a,{children:[Object(l.jsx)("h2",{className:"head--detail",children:"Detalle Producto"}),Object(l.jsx)("div",{children:i?Object(l.jsx)(I,{load:"Cargando detalle"}):Object(l.jsx)(D,{detail:c},c.id)})]})},M=c(65);var P=function(){var e=d(),t=e.cartList,c=e.cartCounter;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("button",{className:"cart--btn",children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-cart",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})}),Object(l.jsx)("span",{style:{visibility:0===t.length?"hidden":"visible"},className:"cart--counter",children:c()})]})})},X=c(92),R=c.p+"static/media/branding_circle.8f5fd309.png";c(85);var V=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M.a,{expand:"lg",fixed:"top",children:Object(l.jsxs)(f.a,{children:[Object(l.jsx)("div",{children:Object(l.jsx)(v.c,{to:"/",className:"nav--navbrand",children:Object(l.jsx)("img",{src:R,width:"80",height:"80",className:"d-inline-block mx-2",alt:"Logo"})})}),Object(l.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(l.jsx)(M.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(l.jsx)(M.a.Collapse,{id:"basic-navbar-nav",children:Object(l.jsxs)(X.a,{className:"me-auto",children:[Object(l.jsx)(v.c,{to:"/",className:"nav--navlink",children:"Incio"}),Object(l.jsx)(v.c,{to:"/",className:"nav--navlink",children:"\xbfQui\xe9nes somos?"}),Object(l.jsx)(v.c,{to:"/",className:"nav--navlink",children:"Tienda"}),Object(l.jsx)(v.c,{to:"/",className:"nav--navlink",children:"Contacto"})]})}),Object(l.jsx)(v.c,{to:"/cart",children:Object(l.jsx)(P,{})})]})]})}),Object(l.jsx)(M.a,{style:{height:"20vh"}})]})};c(113);var G=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{id:"copy",children:[Object(l.jsx)("p",{className:"text--copy",children:e.copy}),Object(l.jsx)("a",{rel:"noopener noreferrer",href:"https://github.com/dgfedon/proyecto_led_store",target:"_blank",className:"foo-link",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-github",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})})]})})};var H=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(G,{copy:"Copyright\xa9 Led Store 2021 | Todos los derechos reservados."})})};var J=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"slide__bar--container",children:Object(l.jsxs)(f.a,{children:[Object(l.jsx)("h1",{style:{fontSize:50},children:e.title}),Object(l.jsx)("p",{style:{fontSize:25},children:e.subtitle})]})})})};var K=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(J,{title:"Led Store",subtitle:"Luces para ti"}),Object(l.jsx)(A,{heading:"Productos"})]})},Q=c(11),W=c(31);c(114);var Z=function(){var e=d(),t=e.cartList,c=e.clearCart,n=e.totalBuy,r=u().formatNumber,i=Object(a.useState)(),o=Object(j.a)(i,2),b=o[0],h=o[1],x=Object(a.useState)({name:"",email:"",phone:""}),m=Object(j.a)(x,2),p=m[0],g=m[1],v=Object(O.g)();return b?Object(l.jsxs)(f.a,{className:"container--order",children:[Object(l.jsx)("h2",{children:"Compra realizada con exito"}),Object(l.jsxs)("p",{children:["Tu n\xfamero de orden es: ",Object(l.jsx)("strong",{children:b}),"."]}),Object(l.jsx)(s.a,{onClick:function(){v("/")},className:"btn--checkout w-50",children:"Ir a tienda"})]}):Object(l.jsx)(l.Fragment,{children:0===t.length?Object(l.jsxs)(f.a,{className:"container--form",children:[Object(l.jsx)("h3",{children:"A\xfan no agregaste productos al carrito"}),Object(l.jsx)(s.a,{onClick:function(){v("/")},className:"btn--checkout w-50",children:"Ir a tienda"})]}):Object(l.jsxs)(f.a,{className:"container--form",children:[Object(l.jsxs)("div",{className:"summary--buy",children:[Object(l.jsx)("h3",{children:"Resumen compra:"}),Object(l.jsxs)("p",{children:["Total de la compra: ",r(n())]})]}),Object(l.jsx)("h3",{className:"text-center text-white",style:{fontSize:30},children:"Completar los siguientes datos:"}),Object(l.jsxs)(W.a,{onChange:function(e){g(Object(N.a)(Object(N.a)({},p),{},Object(Q.a)({},e.target.name,e.target.value)))},children:[Object(l.jsxs)(T.a,{children:[Object(l.jsxs)(W.a.Group,{className:"mb-3 w-50",children:[Object(l.jsx)(W.a.Label,{children:"Nombre"}),Object(l.jsx)(W.a.Control,{type:"text",name:"name",placeholder:"Ej: Juana Petra",defaultValue:p.name})]}),Object(l.jsxs)(W.a.Group,{className:"mb-3 w-50",children:[Object(l.jsx)(W.a.Label,{children:"Tel\xe9fono"}),Object(l.jsx)(W.a.Control,{type:"number",name:"phone",placeholder:"Ej: 11 XXXX XXXX",defaultValue:p.phone})]})]}),Object(l.jsxs)(T.a,{children:[Object(l.jsxs)(W.a.Group,{className:"mb-3 w-50",children:[Object(l.jsx)(W.a.Label,{children:"Email"}),Object(l.jsx)(W.a.Control,{type:"email",name:"email",placeholder:"Ej: nombre@ejemplo.com",defaultValue:p.email})]}),Object(l.jsxs)(W.a.Group,{className:"mb-3 w-50",children:[Object(l.jsx)(W.a.Label,{children:"Confirmaci\xf3n Email"}),Object(l.jsx)(W.a.Control,{type:"email",name:"email",placeholder:"Ej: nombre@ejemplo.com",defaultValue:p.emailConfirm})]})]}),Object(l.jsx)("button",{disabled:!p.name||!p.phone||!p.email||p.emailConfirm===p.email,onClick:function(e){e.preventDefault();var a={};a.date=C.a.fromDate(new Date),a.buyer=p,a.total=n(),a.products=t.map((function(e){return{id:e.id,name:e.name,subtotal:e.price*e.quantity}}));var r=Object(C.g)(),s=Object(C.c)(r,"orders");Object(C.b)(s,a).then((function(e){return h(e.id)})).catch((function(e){return console.log(e)})).finally((function(){c(),g({name:"",email:"",phone:""})}))},className:"btn--checkout w-100",children:"Generar orden"})]})]})})};c(115);var U=function(){return Object(l.jsx)("div",{className:"container--fluid bg--colors",children:Object(l.jsx)(b,{children:Object(l.jsxs)(v.a,{children:[Object(l.jsx)(V,{}),Object(l.jsxs)(O.d,{children:[Object(l.jsx)(O.b,{exact:!0,path:"/",element:Object(l.jsx)(K,{})}),Object(l.jsx)(O.b,{exact:!0,path:"/categoria/:idCategory",element:Object(l.jsx)(A,{heading:"Producto Filtrado"})}),Object(l.jsx)(O.b,{exact:!0,path:"/detalle/:idDetail",element:Object(l.jsx)(q,{})}),Object(l.jsx)(O.b,{exact:!0,path:"/cart",element:Object(l.jsx)(g,{})}),Object(l.jsx)(O.b,{exact:!0,path:"/checkoutCart",element:Object(l.jsx)(Z,{})}),Object(l.jsx)(O.b,{path:"*",element:Object(l.jsx)(O.a,{replace:!0,to:"/"})})]}),Object(l.jsx)(H,{})]})})})},Y=c(91);Object(Y.a)({apiKey:"AIzaSyDSNNMfZWeeDKtz5dcylwE6f5doePlpEjc",authDomain:"proyecto-react-led-store.firebaseapp.com",projectId:"proyecto-react-led-store",storageBucket:"proyecto-react-led-store.appspot.com",messagingSenderId:"489306637085",appId:"1:489306637085:web:f4e018d4800788e071d7f4"});r.a.render(Object(l.jsx)(U,{}),document.getElementById("root"))},66:function(e,t,c){},68:function(e,t,c){},85:function(e,t,c){}},[[116,1,2]]]);
//# sourceMappingURL=main.d31366a3.chunk.js.map