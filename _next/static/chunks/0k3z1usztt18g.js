(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,30336,e=>{"use strict";var a=e.i(43476),n=e.i(71645),t=e.i(88689);let r=Array.from({length:24},(e,a)=>({left:37*a%96,top:53*a%90,size:2+a%4,delay:430*a%6e3,dur:2600+a%5*900})),i=`
.lx-hero{
  /* פלטת שמפניה בהירה — מקומית ל-hero בלבד */
  --champ: 233 221 196;      /* #E9DDC4 שמפניה */
  --champ-hi: 248 240 222;   /* #F8F0DE נצנוץ בהיר */
  --ink: 33 26 20;           /* #211A14 שחור-חם */
  --ink-2: 74 62 50;         /* #4A3E32 */
  --gold: 143 108 44;        /* #8F6C2C ברונזה-זהב לאקסנט */
  --lx-ease: cubic-bezier(0.16, 1, 0.3, 1);
  position:relative; isolation:isolate; overflow:hidden;
  min-height: clamp(600px, 94svh, 940px);
  display:grid; place-items:center;
  padding: clamp(7rem,14vh,11rem) 0 clamp(4rem,8vh,6rem);
  background:
    radial-gradient(90% 70% at 50% 20%, rgb(var(--champ-hi)), transparent 60%),
    linear-gradient(180deg, rgb(var(--champ)) 0%, rgb(228 214 186) 100%);
  color: rgb(var(--ink));
  box-shadow: inset 0 0 160px rgb(var(--ink) / 0.05);
}
/* סף אור נע — נצנוץ מינימלי ואיטי (כמעט לא מורגש) */
.lx-sheen{
  position:absolute; inset:-20% -40%; z-index:-2; pointer-events:none; opacity:.62;
  background: linear-gradient(115deg, transparent 40%, rgb(var(--champ-hi) / 0.68) 50%, transparent 60%);
  background-size: 230% 100%; background-position: 130% 0;
  mix-blend-mode: soft-light; animation: lxSheen 13s ease-in-out infinite;
}
@keyframes lxSheen{ 0%{ background-position:130% 0; } 100%{ background-position:-40% 0; } }
/* כוכבי-נצנוץ — ליבה בהירה + קרני-אור מצטלבות; מסתובבים ונדלקים (glitter) */
.lx-sparks{ position:absolute; inset:0; z-index:-2; pointer-events:none; }
.lx-sparks span{ position:absolute; color: rgb(255 252 244); border-radius:50%; background: radial-gradient(circle, currentColor 26%, rgb(var(--champ-hi) / .5) 58%, transparent 72%); opacity:0; will-change: opacity, transform; animation-name: lxSpark; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
.lx-sparks span::before, .lx-sparks span::after{ content:""; position:absolute; top:50%; left:50%; transform: translate(-50%,-50%); }
.lx-sparks span::before{ width:560%; height:1px; background: linear-gradient(90deg, transparent, currentColor, transparent); }
.lx-sparks span::after{ height:560%; width:1px; background: linear-gradient(180deg, transparent, currentColor, transparent); }
@keyframes lxSpark{ 0%,100%{ opacity:0; transform: scale(.3) rotate(0deg); } 50%{ opacity:.9; transform: scale(1) rotate(45deg); } }
.lx-watermark{
  position:absolute; top:50%; left:50%; transform: translate(-50%,-50%); z-index:-1;
  font-family: var(--font-display), Georgia, serif; font-weight:500;
  font-size: clamp(9rem, 30vw, 34rem); line-height:1; letter-spacing:-.02em;
  color: rgb(var(--gold) / 0.06); white-space:nowrap; pointer-events:none; user-select:none;
}
/* מרקם sandblasted — גרעין דק ומט, אחיד, מפזר אור כמו זכוכית מחוספסת */
.lx-grain{
  position:absolute; inset:0; z-index:-1; pointer-events:none; opacity:.1; mix-blend-mode: overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
.lx-inner{ position:relative; z-index:1; max-width: 52rem; text-align:center; }
.lx-eyebrow{
  display:flex; align-items:center; justify-content:center; gap: 1rem; margin:0 0 clamp(1.6rem,3.2vh,2.4rem);
  font-family: var(--font-mono), monospace; font-size:.68rem; letter-spacing:.34em; text-transform:uppercase;
  color: rgb(var(--gold)); opacity:0;
}
.lx-erule{ display:block; width: clamp(24px,6vw,56px); height:1px; background: rgb(var(--gold) / .55); }
.lx-title{ margin:0; font-family: var(--font-display), Georgia, serif; font-weight:400; line-height:1.04; letter-spacing:-.01em; color: rgb(var(--ink)); }
.lx-title span{ display:block; font-size: clamp(3rem, 9.5vw, 7.5rem); opacity:0; }
.lx-title .lx-t2{ color: rgb(var(--gold)); font-weight:500; }
.lx-rule{ width: clamp(48px,10vw,84px); height:1px; margin: clamp(1.8rem,3.6vh,2.6rem) auto 0; background: rgb(var(--gold) / .6); opacity:0; transform: scaleX(0); transform-origin:center; }
.lx-sub{ margin: clamp(1.6rem,3.2vh,2.2rem) auto 0; max-width: 34rem; font-family: var(--font-body), system-ui, sans-serif; font-weight:400; font-size: clamp(1.02rem, 1.4vw, 1.2rem); line-height:1.75; color: rgb(var(--ink-2)); opacity:0; }
.lx-actions{ display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap: clamp(1.2rem,2.4vw,1.9rem); margin-top: clamp(2rem,4vh,2.8rem); opacity:0; }
.lx-cta{
  display:inline-flex; align-items:center; gap:.7rem; min-height:48px; padding:0 2rem; border-radius:999px;
  background: rgb(var(--ink)); color: rgb(var(--champ-hi));
  font-family: var(--font-body), system-ui, sans-serif; font-weight:500; font-size:.95rem; text-decoration:none;
  transition: transform .25s var(--lx-ease), box-shadow .25s ease; box-shadow: 0 10px 30px rgb(var(--ink) / .18);
}
.lx-cta:hover{ transform: translateY(-2px); box-shadow: 0 16px 40px rgb(var(--ink) / .26); }
.lx-cta svg{ transition: transform .3s var(--lx-ease); }
.lx-cta:hover svg{ transform: translateX(4px); }
.lx-link{ position:relative; min-height:48px; display:inline-flex; align-items:center; font-family: var(--font-body), system-ui, sans-serif; font-size:.95rem; color: rgb(var(--ink-2)); text-decoration:none; transition: color .25s ease; }
.lx-link::after{ content:""; position:absolute; bottom:12px; inset-inline-end:0; width:0; height:1px; background: rgb(var(--gold)); transition: width .3s var(--lx-ease); }
.lx-link:hover{ color: rgb(var(--ink)); }
.lx-link:hover::after, .lx-link:focus-visible::after{ width:100%; inset-inline-start:0; }

.lx-hero.is-in .lx-eyebrow{ animation: lxUp .9s var(--lx-ease) .05s forwards; }
.lx-hero.is-in .lx-t1{ animation: lxUp 1s var(--lx-ease) .18s forwards; }
.lx-hero.is-in .lx-t2{ animation: lxUp 1s var(--lx-ease) .32s forwards; }
.lx-hero.is-in .lx-rule{ animation: lxRule .9s var(--lx-ease) .5s forwards; }
.lx-hero.is-in .lx-sub{ animation: lxUp .9s var(--lx-ease) .6s forwards; }
.lx-hero.is-in .lx-actions{ animation: lxUp .9s var(--lx-ease) .72s forwards; }
@keyframes lxUp{ from{ opacity:0; transform: translateY(20px); } to{ opacity:1; transform:none; } }
@keyframes lxRule{ from{ opacity:0; transform: scaleX(0); } to{ opacity:1; transform: scaleX(1); } }

@media (prefers-reduced-motion: reduce){
  .lx-sheen, .lx-sparks span{ animation:none !important; }
  .lx-sparks span{ opacity:0 !important; }
  .lx-eyebrow, .lx-title span, .lx-rule, .lx-sub, .lx-actions{ opacity:1 !important; transform:none !important; animation:none !important; }
  .lx-cta:hover{ transform:none; } .lx-cta:hover svg{ transform:none; }
}
html.a11y-no-motion .lx-sheen, html.a11y-no-motion .lx-sparks span{ animation:none !important; }
html.a11y-no-motion .lx-sparks span{ opacity:0 !important; }
html.a11y-no-motion .lx-eyebrow, html.a11y-no-motion .lx-title span, html.a11y-no-motion .lx-rule, html.a11y-no-motion .lx-sub, html.a11y-no-motion .lx-actions{ opacity:1 !important; transform:none !important; animation:none !important; }
`;e.s(["default",0,function(){let[e,o]=(0,n.useState)(!1);(0,n.useEffect)(()=>{let e=requestAnimationFrame(()=>o(!0));return()=>cancelAnimationFrame(e)},[]);let s=`https://wa.me/${t.siteConfig.contact.whatsapp}`;return(0,a.jsxs)("section",{dir:"ltr","aria-label":"SCENTLY — niche perfumery",className:`lx-hero${e?" is-in":""}`,children:[(0,a.jsx)("style",{children:i}),(0,a.jsx)("div",{"aria-hidden":!0,className:"lx-sheen"}),(0,a.jsx)("div",{"aria-hidden":!0,className:"lx-sparks",children:r.map((e,n)=>(0,a.jsx)("span",{style:{left:`${e.left}%`,top:`${e.top}%`,width:`${e.size}px`,height:`${e.size}px`,animationDelay:`${e.delay}ms`,animationDuration:`${e.dur}ms`}},n))}),(0,a.jsx)("span",{"aria-hidden":!0,className:"lx-watermark",dir:"ltr",children:"SCENTLY"}),(0,a.jsx)("div",{"aria-hidden":!0,className:"lx-grain"}),(0,a.jsxs)("div",{className:"lx-inner container-x",children:[(0,a.jsxs)("p",{className:"lx-eyebrow",dir:"ltr",children:[(0,a.jsx)("span",{className:"lx-erule"}),t.siteConfig.business.nameEn," · MAISON DE PARFUM",(0,a.jsx)("span",{className:"lx-erule"})]}),(0,a.jsxs)("h1",{className:"lx-title",children:[(0,a.jsx)("span",{className:"lx-t1",children:"The Scent,"}),(0,a.jsx)("span",{className:"lx-t2",children:"Beyond Words"})]}),(0,a.jsx)("div",{className:"lx-rule"}),(0,a.jsx)("p",{className:"lx-sub",children:"Every fragrance, described by its raw material — the notes, the concentration, the sillage. Chosen by scent, not by slogan."}),(0,a.jsxs)("div",{className:"lx-actions",children:[(0,a.jsxs)("a",{href:"/catalog",className:"lx-cta",children:[(0,a.jsx)("span",{children:"Explore the Collection"}),(0,a.jsx)("svg",{width:"20",height:"12",viewBox:"0 0 20 12","aria-hidden":"true",focusable:"false",children:(0,a.jsx)("path",{d:"M1 6h18M13 1l6 5-6 5",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,a.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"lx-link",children:"Personal Consultation"})]})]})]})}])}]);