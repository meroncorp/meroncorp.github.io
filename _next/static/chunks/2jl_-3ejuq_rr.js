(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,85544,e=>{"use strict";var a=e.i(43476),s=e.i(71645);e.i(47167);let t="u">typeof window,i={current:null},r={current:!1},o=[{key:"catalog",label:"קטלוג",href:"/catalog/",aria:"מעבר לקטלוג הבשמים"},{key:"about",label:"עלינו",href:"/about/",aria:"מעבר לעמוד עלינו"},{key:"contact",label:"צור קשר",href:"/contact/",aria:"מעבר לעמוד צור קשר"}],n=Array.from({length:34},(e,a)=>({left:(38*a+7)%100,top:(57*a+11)%100,size:1+a%3*.7,delay:337*a%9e3,dur:16e3+a%6*3400,sway:(a%2?1:-1)*(7+a%4*5)})),l=[{left:30,delay:0,dur:26e3,w:190},{left:55,delay:9e3,dur:32e3,w:150},{left:44,delay:17e3,dur:29e3,w:220}],c=`
.ess-land{
  --espresso-black:#0B0705; --smoky-void:#140D08; --smoky-brown:#1A120B; --warm-brown:#2E1E12;
  --amber-gold:#C8952B; --amber-bright:#E7B450; --amber-core:#F4C777;
  --cognac-juice:#B9752A; --cognac-top:#E3A24F;
  --warm-ivory:#F3E9D6; --muted-ivory:#C9B79C;
  --chrome-light:#EDE9E2; --chrome-mid:#9A948C; --chrome-shadow:#3A342D;
  --mist:#F0E4C8;
  --ease-lux: cubic-bezier(0.16,1,0.3,1);
  position:fixed; inset:0; width:100vw; height:100dvh; overflow:hidden;
  display:grid; place-items:center; isolation:isolate;
  background:
    radial-gradient(115% 85% at 50% 47%, #17100a 0%, #100a06 44%, var(--espresso-black) 80%);
  color:var(--warm-ivory);
  padding: max(1rem, env(safe-area-inset-top)) 1rem max(1rem, env(safe-area-inset-bottom));
  font-family: var(--font-body), system-ui, sans-serif;
  -webkit-font-smoothing:antialiased;
}
.ess-land *{ box-sizing:border-box; }

/* ===== אווירה ===== */
.ess-atmos{ position:absolute; inset:0; z-index:0; pointer-events:none; }
.ess-ember{
  position:absolute; inset:0;
  background: radial-gradient(33% 30% at 50% 50%, rgba(244,199,119,0.30), rgba(200,149,43,0.10) 44%, rgba(46,30,18,0) 68%);
  animation: essEmber 22s ease-in-out infinite;
}
@keyframes essEmber{ 0%,100%{ opacity:.85; transform:scale(1); } 50%{ opacity:1; transform:scale(1.045); } }
.ess-haze{
  position:absolute; left:-10%; right:-10%; bottom:-6%; height:52%;
  background: radial-gradient(60% 100% at 50% 100%, rgba(240,228,200,0.10), rgba(240,228,200,0.03) 45%, transparent 72%);
  filter: blur(26px); animation: essHaze 14s ease-in-out infinite;
}
@keyframes essHaze{ 0%,100%{ opacity:.7; transform:translateY(6px); } 50%{ opacity:1; transform:translateY(-6px); } }
.ess-smoke{ position:absolute; inset:0; mix-blend-mode:screen; }
.ess-smoke span{
  position:absolute; bottom:8%; height:0; padding:0; border-radius:50%;
  background: radial-gradient(closest-side, rgba(150,132,110,0.20), rgba(120,104,86,0.07) 55%, transparent 72%);
  aspect-ratio:1; filter: blur(16px); opacity:0; will-change:transform,opacity;
  animation-name: essSmoke; animation-timing-function: ease-in; animation-iteration-count: infinite;
}
@keyframes essSmoke{
  0%{ opacity:0; transform: translateY(0) scale(.5) translateX(0); }
  18%{ opacity:.7; }
  70%{ opacity:.5; }
  100%{ opacity:0; transform: translateY(-78vh) scale(1.9) translateX(var(--drift,26px)); }
}
.ess-motes{ position:absolute; inset:0; }
.ess-motes span{
  position:absolute; border-radius:50%; background: radial-gradient(circle, var(--amber-core) 20%, rgba(231,180,80,.4) 55%, transparent 72%);
  opacity:0; filter: blur(.4px); will-change:transform,opacity;
  animation-name: essMote; animation-timing-function: ease-in-out; animation-iteration-count: infinite;
}
@keyframes essMote{
  0%{ opacity:0; transform: translate(0,0); }
  20%{ opacity:.9; } 55%{ opacity:.55; } 80%{ opacity:.8; }
  100%{ opacity:0; transform: translate(var(--sway,10px), -70px); }
}
.ess-grain{
  position:absolute; inset:0; opacity:.06; mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
.ess-vignette{
  position:absolute; inset:0;
  background: radial-gradient(120% 100% at 50% 45%, transparent 52%, rgba(11,7,5,0.55) 82%, rgba(11,7,5,0.82) 100%);
}

/* ===== מותג — SCENTLY ===== */
.ess-brand{ position:absolute; z-index:3; top: clamp(1.4rem, 5vh, 3.4rem); left:0; right:0; text-align:center; }
.ess-mark{
  display:block; margin: 0 auto -1.15em; width: clamp(250px, 42vw, 470px); height:auto;
  color: var(--amber-gold); opacity:.9;
  filter: drop-shadow(0 0 18px rgba(200,149,43,.2));
}
.ess-name{
  margin:0; font-family: var(--font-bodoni), "Bodoni Moda", Didot, "Playfair Display", serif; font-weight:500;
  font-size: clamp(2.5rem, 7.5vw, 4.6rem); letter-spacing:.08em; line-height:1.05;
  color: var(--amber-gold);
  text-shadow: 0 0 30px rgba(200,149,43,.28);
}
.ess-tagline{
  margin:.85rem 0 0; font-family: var(--font-body), system-ui, sans-serif; font-weight:400;
  font-size: clamp(.6rem, 1.5vw, .8rem); letter-spacing:.4em; text-indent:.4em;
  color: var(--muted-ivory); opacity:.72; text-transform:uppercase;
}

/* ===== פלקון ===== */
.ess-flacon-wrap{ position:absolute; inset:0; z-index:1; display:grid; place-items:center; pointer-events:none; padding: clamp(6.5rem,18vh,10rem) 1rem clamp(6.5rem,15vh,9rem); }
.ess-flacon{ position:relative; height: clamp(300px, 50vh, 470px); aspect-ratio: 460 / 652; }
.ess-flacon-img{
  width:100%; height:100%; object-fit:contain; display:block;
  filter: drop-shadow(0 34px 58px rgba(0,0,0,.6)) drop-shadow(0 4px 26px rgba(200,149,43,.20));
  animation: essFloat 8s ease-in-out infinite;
}
@keyframes essFloat{ 0%,100%{ transform: translateY(0) rotate(-0.5deg); } 50%{ transform: translateY(-8px) rotate(0.5deg); } }
.ess-nozzle{ position:absolute; top:7%; left:50%; width:6px; height:6px; transform:translate(-50%,-50%); }
.ess-notes{
  position:absolute; left:50%; bottom: clamp(4.5rem, 15vh, 9rem); transform:translateX(-50%);
  margin:0; font-family: var(--font-mono), monospace; font-size:.62rem; letter-spacing:.4em;
  color: var(--amber-bright); opacity:.5; white-space:nowrap;
}

/* ===== שלוש האפשרויות ===== */
.ess-nav{
  position:absolute; z-index:4; bottom: clamp(2.2rem, 8vh, 5rem); left:0; right:0;
  display:flex; gap: clamp(1.4rem, 6vw, 4rem); align-items:center; justify-content:center; flex-wrap:wrap;
}
.ess-opt{
  position:relative; background:none; border:0; cursor:pointer; padding:.7rem .4rem; min-height:48px;
  font-family: var(--font-body), sans-serif; font-weight:500; font-size: clamp(1rem, 2.2vw, 1.22rem);
  letter-spacing:.14em; color: var(--warm-ivory); opacity:.82;
  transition: opacity .4s var(--ease-lux), transform .4s var(--ease-lux), color .4s ease, text-shadow .4s ease;
}
.ess-opt::before{
  content:""; position:absolute; inset:-30% -18%; border-radius:50%; z-index:-1;
  background: radial-gradient(closest-side, rgba(231,180,80,.22), transparent 72%);
  opacity:0; transform:scale(.7); transition: opacity .45s ease, transform .45s var(--ease-lux); pointer-events:none;
}
.ess-opt-underline{ position:absolute; bottom:.55rem; inset-inline:50%; height:1px; width:0; background: var(--amber-bright); transition: width .4s var(--ease-lux), inset-inline .4s var(--ease-lux); }
.ess-opt:hover, .ess-opt:focus-visible{ opacity:1; color:#fff7ea; text-shadow:0 0 20px rgba(231,180,80,.4); transform:scale(1.03); outline:none; }
.ess-opt:hover::before, .ess-opt:focus-visible::before{ opacity:1; transform:scale(1); }
.ess-opt:hover .ess-opt-underline, .ess-opt:focus-visible .ess-opt-underline{ width:80%; inset-inline:10%; }
.ess-opt:focus-visible{ box-shadow:0 0 0 2px rgba(11,7,5,1), 0 0 0 4px var(--amber-bright); border-radius:10px; }
.ess-opt.is-chosen{ opacity:1; color:#fff7ea; text-shadow:0 0 26px rgba(231,180,80,.7); transform:translateY(-4px) scale(1.05); }
.ess-opt.is-chosen::before{ opacity:1; transform:scale(1.2); }
.ess-opt.is-dimmed{ opacity:.12; transition: opacity .45s ease; }

.sr-only{ position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }

/* ===== reduced motion ===== */
.ess-reduce .ess-ember, .ess-reduce .ess-haze, .ess-reduce .ess-flacon-img{ animation:none !important; }
.ess-reduce .ess-ember{ opacity:.95; }

@media (max-width: 640px){
  .ess-flacon{ height: clamp(280px, 48vh, 430px); }
  .ess-nav{ gap: 1.3rem; }
  .ess-notes{ bottom: 7rem; }
}
`;e.s(["default",0,function(){let e=function(){r.current||function(){if(r.current=!0,t)if(window.matchMedia){let e=window.matchMedia("(prefers-reduced-motion)"),a=()=>i.current=e.matches;e.addListener(a),a()}else i.current=!1}();let[e]=(0,s.useState)(i.current);return e}(),d=(0,s.useRef)(null),[m,p]=(0,s.useState)(null);return(0,s.useEffect)(()=>{let e=()=>p(null);return window.addEventListener("essence:spray-end",e),()=>window.removeEventListener("essence:spray-end",e)},[]),(0,a.jsxs)("section",{dir:"rtl","aria-label":"SCENTLY — מסך פתיחה",className:`ess-land${e?" ess-reduce":""}`,children:[(0,a.jsx)("style",{children:c}),(0,a.jsxs)("div",{"aria-hidden":!0,className:"ess-atmos",children:[(0,a.jsx)("div",{className:"ess-ember"}),(0,a.jsx)("div",{className:"ess-haze"}),!e&&(0,a.jsx)("div",{className:"ess-smoke",children:l.map((e,s)=>(0,a.jsx)("span",{style:{left:`${e.left}%`,width:`${e.w}px`,animationDelay:`${e.delay}ms`,animationDuration:`${e.dur}ms`}},s))}),!e&&(0,a.jsx)("div",{className:"ess-motes",children:n.map((e,s)=>(0,a.jsx)("span",{style:{left:`${e.left}%`,top:`${e.top}%`,width:`${e.size}px`,height:`${e.size}px`,"--sway":`${e.sway}px`,animationDelay:`${e.delay}ms`,animationDuration:`${e.dur}ms`}},s))}),(0,a.jsx)("div",{className:"ess-grain"}),(0,a.jsx)("div",{className:"ess-vignette"})]}),(0,a.jsxs)("header",{className:"ess-brand",dir:"ltr",children:[(0,a.jsxs)("svg",{className:"ess-mark",viewBox:"0 0 560 96","aria-hidden":"true",focusable:"false",children:[(0,a.jsx)("path",{d:"M8 92 C8 62 30 56 86 56 L474 56 C530 56 552 62 552 92",fill:"none",stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round"}),(0,a.jsx)("rect",{x:"252",y:"46",width:"56",height:"12",rx:"3",fill:"currentColor"}),(0,a.jsx)("path",{d:"M246 8 L314 8 L306 44 L254 44 Z",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"268",cy:"20",r:"6",fill:"rgb(20 13 8)"})]}),(0,a.jsx)("h1",{className:"ess-name",children:"SCENTLY"}),(0,a.jsx)("p",{className:"ess-tagline",dir:"ltr",children:"WHERE SCENT MEETS BEAUTY"})]}),(0,a.jsxs)("div",{className:"ess-flacon-wrap","aria-hidden":!0,children:[(0,a.jsxs)("div",{className:"ess-flacon",children:[(0,a.jsx)("img",{src:"/generated/hero-flacon-cut.png",alt:"",className:"ess-flacon-img",decoding:"async"}),(0,a.jsx)("span",{ref:d,className:"ess-nozzle"})]}),(0,a.jsx)("p",{className:"ess-notes","aria-hidden":!0,children:"וניל · עשן · אמבר"})]}),(0,a.jsx)("nav",{className:"ess-nav","aria-label":"ניווט ראשי",children:o.map(e=>(0,a.jsxs)("button",{type:"button","data-target":e.key,"aria-label":e.aria,"aria-disabled":!!m||void 0,className:`ess-opt${m===e.key?" is-chosen":""}${m&&m!==e.key?" is-dimmed":""}`,onClick:a=>(function(e,a){if(m)return;p(e.key);let s=d.current?.getBoundingClientRect(),t=a.getBoundingClientRect(),i=s?{x:s.left+s.width/2,y:s.top+s.height/2}:{x:window.innerWidth/2,y:.32*window.innerHeight},r={target:e.key,href:e.href,external:!!e.external,origin:i,rect:{x:t.left+t.width/2,y:t.top+t.height/2,w:t.width,h:t.height}};window.dispatchEvent(new CustomEvent("essence:spray",{detail:r}))})(e,a.currentTarget),children:[(0,a.jsx)("span",{className:"ess-opt-label",children:e.label}),(0,a.jsx)("span",{className:"ess-opt-underline","aria-hidden":!0})]},e.key))}),(0,a.jsx)("p",{className:"sr-only",role:"status","aria-live":"polite",children:m?`טוען ${o.find(e=>e.key===m)?.label}…`:""})]})}],85544)}]);