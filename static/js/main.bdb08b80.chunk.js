(this.webpackJsonpproyecto_led=this.webpackJsonpproyecto_led||[]).push([[0],{132:function(e,t,c){},137:function(e,t,c){},138:function(e,t,c){},139:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(41),r=c.n(n),s=c(20),i=c(26),l=c(9),o=c(1),j=Object(a.createContext)([]),d=function(){return Object(a.useContext)(j)};var b=function(e){var t=e.children,c=Object(a.useState)([]),n=Object(l.a)(c,2),r=n[0],s=n[1],d=function(){return r.reduce((function(e,t){return e+t.quantity*t.price}),0)},b=function(){return r.reduce((function(e){return.21*d()}),0)},u=Object(a.useState)({name:"",phone:"",email:"",emailConfirm:""}),h=Object(l.a)(u,2),m=h[0],O=h[1];return Object(o.jsx)(j.Provider,{value:{cartList:r,addToCart:function(e){var t=r.find((function(t){return t.id===e.id}));if(!t)return s([].concat(Object(i.a)(r),[e]));t.quantity=t.quantity+e.quantity,s([].concat(Object(i.a)(r.filter((function(t){return t.id!==e.id}))),[t]))},removeItemCart:function(e){s(r.filter((function(t){return t.id!==e})))},clearCart:function(){s([])},cartCounter:function(){return r.reduce((function(e,t){return e+t.quantity}),0)},subtotalBuy:d,ivaBuy:b,totalBuy:function(){return r.reduce((function(e){return d()+b()}),0)},dataForm:m,setDataForm:O},children:t})},u=function(){return{formatNumber:function(e){return new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS"}).format(e)}}};c(72);var h=function(e){var t=e.product,c=d().removeItemCart,a=u().formatNumber;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t.name}),Object(o.jsxs)("td",{children:["x",t.quantity]}),Object(o.jsx)("td",{children:a(t.price)}),Object(o.jsx)("td",{children:a(t.quantity*t.price)}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{onClick:function(){return c(t.id)},className:"cart__button--remove",children:Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",className:"bi bi-x-circle",viewBox:"0 0 16 16",children:[Object(o.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(o.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})})})]},t.id)})},m=c(16),O=c(75);var x=function(){var e=d(),t=e.cartList,c=e.clearCart,a=e.subtotalBuy,n=e.ivaBuy,r=e.totalBuy,i=u().formatNumber,l=Object(m.g)();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Nombre"}),Object(o.jsx)("th",{children:"Cantidad"}),Object(o.jsx)("th",{children:"Precio"}),Object(o.jsx)("th",{children:"Subtotal"}),Object(o.jsx)("th",{})]})}),Object(o.jsxs)("tbody",{children:[t.map((function(e){return Object(o.jsx)(h,{product:e},e.id)})),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{colSpan:3,className:"text-end",children:"Subtotal compra"}),Object(o.jsx)("td",{colSpan:2,children:i(a())})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{colSpan:3,className:"text-end",children:"IVA"}),Object(o.jsx)("td",{colSpan:2,children:i(n())})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{colSpan:3,className:"text-end",children:"Total"}),Object(o.jsx)("td",{colSpan:2,children:i(r())})]})]})]}),Object(o.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(o.jsx)(s.a,{onClick:c,className:"cart--button",children:"Vaciar Carrito"}),Object(o.jsx)(s.a,{onClick:function(){l("/")},className:"cart--button",children:"Seguir comprando"}),Object(o.jsx)(s.a,{onClick:function(){l("/checkoutCart")},className:"cart--button",children:"Terminar compra"})]})]})},p=c(28);c(92);var f,v=function(){var e=d().cartList,t=Object(m.g)();return Object(o.jsx)(o.Fragment,{children:0===e.length?Object(o.jsxs)(p.a,{className:"head__cart--none",children:[Object(o.jsx)("h3",{children:"El carrito est\xe1 vac\xedo"}),Object(o.jsx)(s.a,{onClick:function(){t("/")},className:"cart--button w-25",children:"Ir a tienda"})]}):Object(o.jsxs)(p.a,{className:"cart--product",children:[Object(o.jsx)("h2",{className:"head--cart",children:"Carrito de compras"}),Object(o.jsx)(x,{})]})})},g=c(22),N=c(5),y=c(70),C=c(17),w=c(98),k=c(99),S=c.n(k),F=c(91);var I=function(e){var t=Object(F.css)(f||(f=Object(w.a)(["\n        display: block;\n        margin: 15px 0;\n    "])));return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"d-flex justify-content-center mt-4 load--bg",children:[Object(o.jsx)("h5",{style:{fontSize:"40px",marginRight:"20px",color:"white",textShadow:"0 0 20px #FF2079"},children:e.load}),Object(o.jsx)(S.a,{color:"#FF2079",css:t,size:20})]})})},B=c(31),_=c(57);c(73);var L=function(e){var t=e.product,c=u().formatNumber;return Object(o.jsx)(_.a,{className:"card--product",children:Object(o.jsxs)(B.a,{children:[Object(o.jsx)("div",{className:"overflow",children:Object(o.jsx)(B.a.Img,{variant:"top",src:t.img,alt:"..."})}),Object(o.jsxs)(B.a.Body,{children:[Object(o.jsx)(B.a.Title,{className:"text-center",children:t.name}),Object(o.jsx)(B.a.Text,{className:"text-center",children:c(t.price)}),Object(o.jsx)(g.b,{to:"/detalle/".concat(t.id),children:Object(o.jsx)(s.a,{className:"w-100 text-uppercase",children:"ver detalle"})})]})]})},t.id)},A=c(67);var z=function(e){var t=e.products;return Object(o.jsx)(A.a,{xs:1,md:2,lg:3,className:"g-4",children:t.map((function(e){return Object(o.jsx)(L,{product:e},e.id)}))})};var q=function(e){var t=Object(a.useState)([]),c=Object(l.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(!0),i=Object(l.a)(s,2),j=i[0],d=i[1],b=Object(m.h)().idCategory;return Object(a.useEffect)((function(){var e=Object(C.h)(),t=b?Object(C.i)(Object(C.c)(e,"products"),Object(C.j)("category","==",b)):Object(C.i)(Object(C.c)(e,"products"));Object(C.g)(t).then((function(e){return r(e.docs.map((function(e){return Object(N.a)({id:e.id},e.data())})))})).catch((function(e){return console.log(e)})).finally((function(){return d(!1)}))}),[b]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(p.a,{children:[Object(o.jsxs)("div",{className:"head--product",children:[Object(o.jsx)("h2",{children:e.heading}),Object(o.jsxs)(y.a,{title:"Filtro",id:"offcanvasNavbarDropdown",children:[Object(o.jsx)(y.a.Item,{children:Object(o.jsx)(g.b,{className:"dropdown--item",to:"/categoria/luces",children:"Luces"})}),Object(o.jsx)(y.a.Item,{children:Object(o.jsx)(g.b,{className:"dropdown--item",to:"/categoria/barras",children:"Barras"})}),Object(o.jsx)(y.a.Item,{children:Object(o.jsx)(g.b,{className:"dropdown--item",to:"/categoria/carteles",children:"Carteles"})})]})]}),Object(o.jsx)("div",{className:"d-flex justify-content-center",children:j?Object(o.jsx)(I,{load:"Cargando productos"}):Object(o.jsx)(z,{products:n})})]})})};var T=function(e){e.initial;var t=e.stock,c=e.onAdd,n=function(e,t){var c=Object(a.useState)(e),n=Object(l.a)(c,2),r=n[0],s=n[1];return{counter:r,handleSum:function(){r<t&&s(Math.max(r+1,1))},handleRest:function(){r>e&&s(Math.max(r-1,1))}}}(1,t),r=n.counter,i=n.handleRest,j=n.handleSum;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("span",{className:"item__count--number",children:[Object(o.jsx)(s.a,{onClick:i,children:"-"}),r,Object(o.jsx)(s.a,{onClick:j,children:"+"})]}),Object(o.jsx)(s.a,{className:"mt-2 w-75",onClick:function(){return c(r)},children:"Agregar al carrito"})]})},E=c(102),D=c.n(E);c(132);var M=function(e){var t=e.detail,c=Object(m.g)(),n=Object(a.useState)(0),r=Object(l.a)(n,2),i=r[0],j=r[1],b=d().addToCart,h=u().formatNumber;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(_.a,{className:"card--detail",children:Object(o.jsxs)(B.a,{children:[Object(o.jsx)(B.a.Img,{src:t.img,alt:"..."}),Object(o.jsxs)(B.a.Body,{children:[Object(o.jsx)(B.a.Title,{className:"text-center",children:t.name}),Object(o.jsx)(B.a.Text,{className:"detail__text--description",children:t.description}),Object(o.jsxs)(B.a.Text,{className:"detail__text--price",children:["Precio: ",h(t.price)]}),Object(o.jsxs)(B.a.Text,{className:"detail__text--stock",children:["Stock disponible: ",t.stock]}),i?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(s.a,{onClick:function(){c("/")},className:"w-75",children:"Seguir comprando"}),Object(o.jsx)(s.a,{onClick:function(){c("/cart")},className:"mt-2 w-75",children:"Ir al carrito"})]}):Object(o.jsx)(o.Fragment,{children:t.stock>0?Object(o.jsx)(T,{onAdd:function(e){j(!0),D.a.fire({title:"Producto agregado!",text:"Agregaste: ".concat(t.name,". Cantidad: ").concat(e,"."),icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#440bd4"}),b(Object(N.a)(Object(N.a)({},t),{},{quantity:e}))},stock:t.stock}):Object(o.jsx)(s.a,{onClick:function(){c("/")},className:"w-75",children:"Seguir comprando"})})]})]})},t.id)})};var P=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!0),s=Object(l.a)(r,2),i=s[0],j=s[1],d=Object(m.h)().idDetail;return Object(a.useEffect)((function(){var e=Object(C.h)(),t=Object(C.d)(e,"products",d);Object(C.f)(t).then((function(e){return n(Object(N.a)({id:e.id},e.data()))})).catch((function(e){return console.log(e)})).finally((function(){return j(!1)}))}),[d]),Object(o.jsxs)(p.a,{children:[Object(o.jsx)("h2",{className:"head--detail",children:"Detalle Producto"}),Object(o.jsx)("div",{children:i?Object(o.jsx)(I,{load:"Cargando detalle"}):Object(o.jsx)(M,{detail:c},c.id)})]})},X=c(71);var V=function(){var e=d(),t=e.cartList,c=e.cartCounter;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("button",{className:"cart--btn",children:[Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-cart",viewBox:"0 0 16 16",children:Object(o.jsx)("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})}),Object(o.jsx)("span",{style:{visibility:0===t.length?"hidden":"visible"},className:"cart--counter",children:c()})]})})},R=c(106),G=c.p+"static/media/branding_circle.8f5fd309.png";c(96);var H=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(X.a,{expand:"lg",fixed:"top",children:Object(o.jsxs)(p.a,{children:[Object(o.jsx)("div",{children:Object(o.jsx)(g.c,{to:"/",className:"nav--navbrand",children:Object(o.jsx)("img",{src:G,width:"80",height:"80",className:"d-inline-block mx-2",alt:"Logo"})})}),Object(o.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(o.jsx)(X.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(o.jsx)(X.a.Collapse,{id:"basic-navbar-nav",children:Object(o.jsxs)(R.a,{className:"me-auto",children:[Object(o.jsx)(g.c,{to:"/",className:"nav--navlink",children:"Incio"}),Object(o.jsx)(g.c,{to:"/",className:"nav--navlink",children:"\xbfQui\xe9nes somos?"}),Object(o.jsx)(g.c,{to:"/",className:"nav--navlink",children:"Tienda"}),Object(o.jsx)(g.c,{to:"/",className:"nav--navlink",children:"Contacto"})]})}),Object(o.jsx)(g.c,{to:"/cart",children:Object(o.jsx)(V,{})})]})]})}),Object(o.jsx)(X.a,{style:{height:"20vh"}})]})};c(137);var Z=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{id:"copy",children:[Object(o.jsx)("p",{className:"text--copy",children:e.copy}),Object(o.jsx)("a",{rel:"noopener noreferrer",href:"https://github.com/dgfedon/proyecto_led_store",target:"_blank",className:"foo-link",children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-github",viewBox:"0 0 16 16",children:Object(o.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})})]})})};var J=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(Z,{copy:"Copyright\xa9 Led Store 2021 | Todos los derechos reservados."})})};var K=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{className:"slide__bar--container",children:Object(o.jsxs)(p.a,{children:[Object(o.jsx)("h1",{style:{fontSize:50},children:e.title}),Object(o.jsx)("p",{style:{fontSize:25},children:e.subtitle})]})})})};var $=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(K,{title:"Led Store",subtitle:"Luces para ti"}),Object(o.jsx)(q,{heading:"Productos"})]})},Q=c(11),W=c(32),U=c(69);c(97);var Y=function(e){var t=e.send,c=e.change,a=d().dataForm;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(U.b,{validate:function(){var e={};return a.name?a.name.length<3&&(e.name="Nombre inv\xe1lido"):e.name="Ingresa un nombre",a.phone?/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(a.phone)||(e.phone="N\xfamero m\xf3vil inv\xe1lido"):e.phone="Ingresa un n\xfamero m\xf3vil",a.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(a.email)||(e.email="Email inv\xe1lido"):e.email="Ingresa un email, nos comunicamos por este medio",e},children:function(e){var n=e.handleBlur,r=e.isValid;return Object(o.jsxs)(W.a,{onChange:c,children:[Object(o.jsxs)(A.a,{children:[Object(o.jsxs)(W.a.Group,{className:"mb-3 w-50",children:[Object(o.jsx)(W.a.Label,{htmlFor:"name",children:"Nombre"}),Object(o.jsx)(W.a.Control,{type:"text",id:"name",name:"name",placeholder:"Ej: Nombre Apellido",required:!0,defaultValue:a.name,onBlur:n}),Object(o.jsx)(U.a,{name:"name",component:"span",className:"validate--error"})]}),Object(o.jsxs)(W.a.Group,{className:"mb-3 w-50",children:[Object(o.jsx)(W.a.Label,{htmlFor:"phone",children:"Tel\xe9fono"}),Object(o.jsx)(W.a.Control,{type:"tel",id:"phone",name:"phone",placeholder:"Ej: 11 XXXX XXXX",required:!0,defaultValue:a.phone,onBlur:n}),Object(o.jsx)(U.a,{name:"phone",component:"span",className:"validate--error"})]})]}),Object(o.jsxs)(A.a,{children:[Object(o.jsxs)(W.a.Group,{className:"mb-3 w-50",children:[Object(o.jsx)(W.a.Label,{htmlFor:"email",children:"Email"}),Object(o.jsx)(W.a.Control,{type:"email",id:"email",name:"email",placeholder:"Ej: nombre@ejemplo.com",required:!0,defaultValue:a.email,onBlur:n}),Object(o.jsx)(U.a,{name:"email",component:"span",className:"validate--error"})]}),Object(o.jsxs)(W.a.Group,{className:"mb-3 w-50",children:[Object(o.jsx)(W.a.Label,{children:"Confirmaci\xf3n Email"}),Object(o.jsx)(W.a.Control,{type:"email",name:"emailConfirm",placeholder:"Ej: nombre@ejemplo.com",required:!0,defaultValue:a.emailConfirm,onBlur:n})]})]}),Object(o.jsx)("button",{type:"submit",disabled:""===a.name||""===a.phone||""===a.email||a.email!==a.emailConfirm||!1===r,onClick:t,className:"btn--checkout w-100",children:"Generar orden"})]})}})})};var ee=function(){var e=d(),t=e.cartList,c=e.clearCart,n=e.totalBuy,r=e.dataForm,i=e.setDataForm,j=u().formatNumber,b=Object(a.useState)(),h=Object(l.a)(b,2),x=h[0],f=h[1],v=Object(m.g)();return x?Object(o.jsxs)(p.a,{className:"container--order",children:[Object(o.jsx)("h2",{children:"Compra realizada con \xe9xito"}),Object(o.jsxs)("p",{children:["Tu n\xfamero de orden es: ",Object(o.jsx)("strong",{children:x}),"."]}),Object(o.jsx)(s.a,{onClick:function(){v("/")},className:"btn--checkout w-50",children:"Ir a tienda"})]}):Object(o.jsx)(o.Fragment,{children:0===t.length?Object(o.jsxs)(p.a,{className:"container--form",children:[Object(o.jsx)("h3",{children:"A\xfan no agregaste productos al carrito"}),Object(o.jsx)(s.a,{onClick:function(){v("/")},className:"btn--checkout w-50",children:"Ir a tienda"})]}):Object(o.jsxs)(p.a,{className:"container--form",children:[Object(o.jsxs)("div",{className:"summary--buy",children:[Object(o.jsx)("h3",{children:"Resumen compra:"}),Object(o.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Nombre"}),Object(o.jsx)("th",{children:"Cantidad"}),Object(o.jsx)("th",{children:"Precio por unidad"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsxs)("td",{children:["x",e.quantity]}),Object(o.jsx)("td",{children:j(e.price)})]},e.id)}))})]}),Object(o.jsxs)("p",{children:["Total de la compra: ",j(n())]})]}),Object(o.jsx)("h3",{className:"text-center text-white",style:{fontSize:30},children:"Completar los siguientes datos:"}),Object(o.jsx)(Y,{change:function(e){i(Object(N.a)(Object(N.a)({},r),{},Object(Q.a)({},e.target.name,e.target.value)))},send:function(e){e.preventDefault();var a={};a.date=C.a.fromDate(new Date),a.buyer=r,a.total=n(),a.products=t.map((function(e){return{id:e.id,name:e.name,quantity:e.quantity,subtotal:e.price*e.quantity}}));var s=Object(C.h)();var l=Object(C.c)(s,"orders");Object(C.b)(l,a).then((function(e){return f(e.id)})).catch((function(e){return console.log(e)})).finally((function(){i({name:"",email:"",emailConfirm:"",phone:""}),function(){var e=Object(C.k)(s),c=Object(C.c)(s,"products"),a=Object(C.i)(c,Object(C.j)(Object(C.e)(),"in",t.map((function(e){return e.id}))));Object(C.g)(a).then((function(c){c.docs.forEach((function(c){e.update(c.ref,{stock:c.data().stock-t.find((function(e){return e.id===c.id})).quantity})})),e.commit()}))}(),c()}))}})]})})};c(138);var te=function(){return Object(o.jsx)("div",{className:"container--fluid bg--colors",children:Object(o.jsx)(b,{children:Object(o.jsxs)(g.a,{children:[Object(o.jsx)(H,{}),Object(o.jsxs)(m.d,{children:[Object(o.jsx)(m.b,{exact:!0,path:"/",element:Object(o.jsx)($,{})}),Object(o.jsx)(m.b,{exact:!0,path:"/categoria/:idCategory",element:Object(o.jsx)(q,{heading:"Producto Filtrado"})}),Object(o.jsx)(m.b,{exact:!0,path:"/detalle/:idDetail",element:Object(o.jsx)(P,{})}),Object(o.jsx)(m.b,{exact:!0,path:"/cart",element:Object(o.jsx)(v,{})}),Object(o.jsx)(m.b,{exact:!0,path:"/checkoutCart",element:Object(o.jsx)(ee,{})}),Object(o.jsx)(m.b,{path:"*",element:Object(o.jsx)(m.a,{replace:!0,to:"/"})})]}),Object(o.jsx)(J,{})]})})})},ce=c(105);Object(ce.a)({apiKey:"AIzaSyDSNNMfZWeeDKtz5dcylwE6f5doePlpEjc",authDomain:"proyecto-react-led-store.firebaseapp.com",projectId:"proyecto-react-led-store",storageBucket:"proyecto-react-led-store.appspot.com",messagingSenderId:"489306637085",appId:"1:489306637085:web:f4e018d4800788e071d7f4"});r.a.render(Object(o.jsx)(te,{}),document.getElementById("root"))},72:function(e,t,c){},73:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){}},[[139,1,2]]]);
//# sourceMappingURL=main.bdb08b80.chunk.js.map