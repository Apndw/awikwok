import{a as t,o as L,u as R,c as a,i as c,S as _,b as $,t as b,d as k}from"./index-Cme37Jgp.js";import{C as I,a as P,M as D}from"./main.layout-Cy_1TKfT.js";import{A as N,C as H,a as K,b as U,E as l,c as S,d as w}from"./api.service-BEGUCMTT.js";var j=b('<div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip"><div class="flex flex-col gap-4"><div class="card shadow-2xl"><div class=card-body>');function z(){const[o,g]=t(""),[s,n]=t([]),[u,f]=t(!1),[h,B]=t(!1),[p,A]=t(!1),[C,v]=t(!1),[T,y]=t(!1),[E,m]=t(!1),x=()=>{n([]),g(""),f(!1),v(!1),m(!1)},M=async()=>{if(u()||!o()||o().length<1)return;C()||v(!0);const e=o().trim();g(""),f(!0),n([...s(),{sender:l.USER,messages:e}]),await S.get({url:`?text=${e}`,name:"System",server:w.BARD,success:r=>{const i=r.data;i.status?n([...s(),{sender:l.BOT,messages:i.result}]):(m(!0),!e||e.length<1?n([...s(),{sender:l.BOT,messages:"Please type a message to send!"}]):n([...s(),{sender:l.BOT,messages:i.message}]))},error:()=>{m(!0),n([...s(),{sender:l.BOT,messages:"Something went wrong, please try again later"}])},finally:()=>{y(!0),f(!1)}})};return L(async()=>{await S.get({url:"",name:"System",server:w.CHECK_STATUS,success:e=>{e.data.status&&A(!0)},finally:()=>{B(!0)}})}),R(e=>{C()&&!e.defaultPrevented&&(e.preventDefault(),setTimeout(()=>{k.fire({title:"Konfirmasi",icon:"question",showCancelButton:!0,confirmButtonText:"Ya",cancelButtonText:"Tidak",html:`
            <div class="flex justify-center items-center gap-4 mt-4">
              <span>
                Apakah anda yakin ingin meninggalkan halaman ini?
                <br />
                Semua data yang sudah di buat akan hilang!!
              </span>
            </div>
          `}).then(r=>{r.isConfirmed&&e.retry(!0)})},100))}),a(D,{title:"BARD",get children(){return[a(N,{get isPlaying(){return T()},setIsPlaying:y}),(()=>{var e=j(),r=e.firstChild,i=r.firstChild,d=i.firstChild;return c(d,a(I,{title:"BING",get isLoading(){return u()},onNewChat:x}),null),c(d,a(H,{get isMounted(){return h()}}),null),c(d,a(_,{get when(){return $(()=>!!h())()&&p()},get children(){return[a(K,{get chat(){return s()},get isLoading(){return u()}}),a(P,{get value(){return o()},get isLoading(){return u()},get isError(){return E()},onSend:M,onNewChat:x,onChange:O=>g(O.target.value)})]}}),null),c(d,a(U,{get isMounted(){return h()},get isApiOnline(){return p()}}),null),e})()]}})}export{z as default};
