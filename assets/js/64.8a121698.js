(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{414:function(e,t,s){},440:function(e,t,s){"use strict";s(414)},448:function(e,t,s){"use strict";s.r(t);var i=s(14),l={computed:{headers(){return(this.$page.headers||[]).filter(e=>2===e.level)}},methods:{isLinkActive(e){const t=Object(i.f)(this.$route,this.$page.path+"#"+e.slug);return t&&setTimeout(()=>{console.log(document.querySelector("."+e.slug)),document.querySelector("."+e.slug).scrollIntoView()},300),t}},render(e){return e("ul",{class:{"sub-sidebar-wrapper":!0},style:{width:(this.$page.headers||[]).length>0?"12rem":"0"}},[...(this.$page.headers||[]).map(t=>e("li",{class:{active:this.isLinkActive(t),["level-"+t.level]:!0},attr:{key:t.title}},[e("router-link",{class:{"sidebar-link":!0,[""+t.slug]:!0},props:{to:`${this.$page.path}#${t.slug}`}},t.title)]))])}},r=(s(440),s(0)),o=Object(r.a)(l,void 0,void 0,!1,null,"fe1755c8",null);t.default=o.exports}}]);