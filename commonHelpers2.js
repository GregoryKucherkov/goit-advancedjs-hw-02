import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const r=document.querySelector(".form"),a=o=>{o.preventDefault();const t=parseInt(o.target.elements.delay.value,10),i=o.target.elements.state.value;new Promise((e,m)=>{setTimeout(()=>{i==="fulfilled"?e(t):m(t)},t)}).then(e=>{s.success({message:`✅ Fulfilled promise in ${e}ms`,messageColor:"#FFF",backgroundColor:"#00c74b",messageSize:"24",position:"topRight",icon:"",timeout:4e3})}).catch(e=>{s.error({message:`❌ Rejected promise in ${e}ms`,messageColor:"#FFF",backgroundColor:"#FF6865",messageSize:"24",position:"topRight",icon:"",timeout:4e3})})};r.addEventListener("submit",a);
//# sourceMappingURL=commonHelpers2.js.map