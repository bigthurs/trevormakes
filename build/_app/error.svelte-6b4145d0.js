import{S as s,i as r,s as a,e as t,t as e,c as o,a as c,g as n,d as u,f as p,D as f,h as l,k as d,l as i,n as m,E as h}from"./chunks/vendor-c2f05bd7.js";function k(s){let r,a,d=s[1].stack+"";return{c(){r=t("pre"),a=e(d)},l(s){r=o(s,"PRE",{});var t=c(r);a=n(t,d),t.forEach(u)},m(s,t){p(s,r,t),f(r,a)},p(s,r){2&r&&d!==(d=s[1].stack+"")&&l(a,d)},d(s){s&&u(r)}}}function E(s){let r,a,E,v,g,x,P,$=s[1].message+"",b=s[1].stack&&k(s);return{c(){r=t("h1"),a=e(s[0]),E=d(),v=t("p"),g=e($),x=d(),b&&b.c(),P=i()},l(t){r=o(t,"H1",{});var e=c(r);a=n(e,s[0]),e.forEach(u),E=m(t),v=o(t,"P",{});var p=c(v);g=n(p,$),p.forEach(u),x=m(t),b&&b.l(t),P=i()},m(s,t){p(s,r,t),f(r,a),p(s,E,t),p(s,v,t),f(v,g),p(s,x,t),b&&b.m(s,t),p(s,P,t)},p(s,[r]){1&r&&l(a,s[0]),2&r&&$!==($=s[1].message+"")&&l(g,$),s[1].stack?b?b.p(s,r):(b=k(s),b.c(),b.m(P.parentNode,P)):b&&(b.d(1),b=null)},i:h,o:h,d(s){s&&u(r),s&&u(E),s&&u(v),s&&u(x),b&&b.d(s),s&&u(P)}}}function v({error:s,status:r}){return{props:{error:s,status:r}}}function g(s,r,a){let{status:t}=r,{error:e}=r;return s.$$set=s=>{"status"in s&&a(0,t=s.status),"error"in s&&a(1,e=s.error)},[t,e]}export default class extends s{constructor(s){super(),r(this,s,g,E,a,{status:0,error:1})}}export{v as load};
