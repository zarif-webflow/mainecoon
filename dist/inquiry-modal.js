class g extends Error{constructor(r){super(r),this.name="AssertionError"}}const E=(e,r,t)=>{if(e==null||Number.isNaN(e)||t)throw new g(r);return e},f=(e,r)=>E(document.querySelector(e),`Element: ${e} was not found!`),S=()=>{const e="[data-gallery-list=true]",r="[data-gallery-item=true]",t="[fs-cmsfilter-field=name]",s="[fs-cmsfilter-field=colors]",d="[data-inquiry=true]",l="[data-input-animal=true]",m=f(e),y=f("[data-inquiry-form=true]");m.addEventListener("click",u=>{if(!u.target)return;const c=u.target.closest(d);if(c==null)return;const n=c.closest(r);if(!n){console.error(`${r} wasn't found!`);return}const a=n.querySelector(t),i=n.querySelector(s),o=y.querySelector(l);if(!a){console.error(`${t} wasn't found!`);return}if(!i){console.error(`${s} wasn't found!`);return}if(!o){console.error(`${l} wasn't found!`);return}const w=a.textContent,q=i.textContent,$=`${w} (Color: ${q})`;o.value=$,o.scrollIntoView({behavior:"smooth",block:"center"})})};S();
