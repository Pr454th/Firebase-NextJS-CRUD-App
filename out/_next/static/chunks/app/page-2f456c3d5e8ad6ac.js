(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8501:function(e,t,a){Promise.resolve().then(a.bind(a,6818))},6818:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var n=a(9268);a(6394);var l=a(3956),o=a.n(l),i=a(6006),c=a(4734),s=a(1313),r=a(6936),d=a(4202);let u=(0,s.ZF)({apiKey:"AIzaSyC26s-erEHbGDnYOW96PfWZ3AHNU6gSxtE",authDomain:"project-alpha-phase-1.firebaseapp.com",projectId:"project-alpha-phase-1",storageBucket:"project-alpha-phase-1.appspot.com",messagingSenderId:"624596079081",appId:"1:624596079081:web:868e9ece885e3cd8257b78",measurementId:"G-RR0BRX6YXS"}),h=(0,c.v0)(u),p=new c.hJ,v=(0,r.ad)(u),g=(0,d.cF)(u);var x=a(8705),m=a.n(x);function j(){let[e,t]=(0,i.useState)(""),[a,l]=(0,i.useState)(""),o=async()=>{try{await (0,c.Xb)(h,e,a)}catch(e){console.log(e)}t(""),l("")},s=async()=>{try{await (0,c.e5)(h,e,a)}catch(e){console.log(e.code),console.log(e.message),console.log(e.email)}t(""),l("")},r=async()=>{try{await (0,c.rh)(h,p)}catch(e){console.log(e)}},d=async()=>{var e;try{await (0,c.w7)(h)}catch(e){console.log(e)}console.log(null==h?void 0:null===(e=h.currentUser)||void 0===e?void 0:e.email)};return(0,n.jsxs)("div",{className:m().auth,children:[(0,n.jsxs)("div",{className:m().create,children:[(0,n.jsx)("input",{type:"text",placeholder:"Email",value:e,onChange:e=>t(e.target.value)}),(0,n.jsx)("input",{type:"password",placeholder:"Password",value:a,onChange:e=>l(e.target.value)}),(0,n.jsx)("button",{type:"submit",onClick:o,children:"Create user"})]}),(0,n.jsxs)("div",{className:m().login,children:[(0,n.jsx)("input",{type:"text",placeholder:"Email",value:e,onChange:e=>t(e.target.value)}),(0,n.jsx)("input",{type:"password",placeholder:"Password",value:a,onChange:e=>l(e.target.value)}),(0,n.jsx)("button",{type:"submit",onClick:s,children:"Sign In"}),(0,n.jsx)("button",{type:"submit",onClick:r,children:"Sign in with Google"}),(0,n.jsx)("button",{type:"submit",onClick:d,children:"Sign Out"}),(0,n.jsx)("button",{type:"submit",onClick:()=>{var e,t;console.log(null==h?void 0:null===(e=h.currentUser)||void 0===e?void 0:e.email),console.log(null==h?void 0:null===(t=h.currentUser)||void 0===t?void 0:t.photoURL)},children:"Current User"})]})]})}var y=a(4214);function b(){let[e,t]=(0,i.useState)([]),[a,l]=(0,i.useState)(""),[c,s]=(0,i.useState)(""),[u,p]=(0,i.useState)(0),[x,m]=(0,i.useState)(!1),[b,f]=(0,i.useState)(null),[C,_]=(0,i.useState)(""),[w,k]=(0,i.useState)(""),S=(0,i.useRef)(null),U=(0,r.hJ)(v,"movies"),N=async()=>{try{let e=await (0,r.PL)(U);t(e.docs.map(e=>({...e.data(),id:e.id})))}catch(e){console.log(e)}};(0,i.useEffect)(()=>{let e=(0,r.cf)(U,e=>{t(e.docs.map(e=>({...e.data(),id:e.id})))});return()=>e()},[]);let R=async()=>{try{var e;console.log(a,u,x),await (0,r.ET)(U,{title:a,releaseDate:u,receivedAnOscar:x,userId:null==h?void 0:null===(e=h.currentUser)||void 0===e?void 0:e.uid})}catch(e){console.log(e)}l(""),p(0),m(!1)},E=async e=>{try{await (0,r.oe)((0,r.JU)(v,"movies",e))}catch(e){console.log(e)}N()},I=async e=>{try{await (0,r.r7)((0,r.JU)(v,"movies",e),{title:c})}catch(e){console.log(e)}s("")},A=async()=>{if(b){try{let e=(0,d.iH)(g,"project movies/".concat(b.name));await (0,d.KV)(e,b)}catch(e){console.log(e)}f(null),S.current.value=null}},H=async()=>{try{let e=(0,d.iH)(g,"project movies/".concat(C)),t=await (0,d.Jt)(e);console.log("File download URL:",t),k(t)}catch(e){console.log(e)}},X=async()=>{try{let e=await y.Z.request({method:"GET",url:"https://random-name-and-gender-generator.p.rapidapi.com/",headers:{"X-RapidAPI-Key":"303b7706c9msha608101e58c1a57p1aec83jsnd5b7171640a9","X-RapidAPI-Host":"random-name-and-gender-generator.p.rapidapi.com"}});console.log(e.data)}catch(e){console.error(e)}};return(0,n.jsxs)("div",{className:o().container,children:[(0,n.jsx)("h1",{className:o().title,children:"Welcome to Firebase!"}),(0,n.jsx)("button",{onClick:X,children:"Generate Random Names"}),(0,n.jsx)("div",{children:(0,n.jsx)(j,{})}),(0,n.jsxs)("div",{className:o().form,children:[(0,n.jsx)("input",{type:"text",placeholder:"title",value:a,onChange:e=>l(e.target.value)}),(0,n.jsx)("input",{type:"number",placeholder:"releaseDate",value:u,onChange:e=>p(e.target.value)}),(0,n.jsx)("input",{type:"checkbox",checked:x,onChange:e=>m(e.target.checked)}),(0,n.jsx)("label",{children:"receivedAnOscar"}),(0,n.jsx)("button",{onClick:R,children:"Add Movie"}),(0,n.jsx)("button",{onClick:N,children:"Get Movies"}),(0,n.jsx)("h1",{children:"File Upload"}),(0,n.jsx)("input",{type:"file",onChange:e=>f(e.target.files[0]),ref:S}),(0,n.jsx)("button",{onClick:A,children:"Upload"}),(0,n.jsx)("h1",{children:"File Retrieval"}),(0,n.jsx)("input",{type:"text",placeholder:"file name",value:C,onChange:e=>_(e.target.value)}),(0,n.jsx)("button",{onClick:H,children:"Retrieve"}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:w,children:w})})]}),(0,n.jsx)("div",{className:o().grid,children:e.map(e=>(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:e.title},e.title),(0,n.jsx)("div",{children:e.id}),(0,n.jsx)("div",{children:e.releaseDate}),(0,n.jsx)("div",{children:e.receivedAnOscar?"Yes":"No"}),(0,n.jsx)("button",{onClick:()=>E(e.id),children:"Delete"}),(0,n.jsx)("input",{type:"text",placeholder:"title",value:c,onChange:e=>s(e.target.value)}),(0,n.jsx)("button",{onClick:()=>I(e.id),children:"Update"})]},e.title))})]})}},3956:function(e){e.exports={container:"page_container__HHToX",form:"page_form__vFrUv",grid:"page_grid__2WZXq"}},8705:function(e){e.exports={auth:"auth_auth__gIBHO",create:"auth_create__MY3VA",login:"auth_login__xX_hg"}}},function(e){e.O(0,[662,913,891,253,769,744],function(){return e(e.s=8501)}),_N_E=e.O()}]);