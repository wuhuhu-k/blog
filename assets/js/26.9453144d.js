(window.webpackJsonp=window.webpackJsonp||[]).push([[26,31],{442:function(e,a,n){},460:function(e,a,n){"use strict";n(442)},507:function(e,a,n){"use strict";n.r(a);var s={name:"era",props:{genealogyData:{type:Array,default:()=>[{name:"夏",sex:"man",son:"子四",daughter:"无",person:[{name:"中一",sex:"man",son:"子二",daughter:"无",children:[{name:"华二",sex:"man",children:[]},{name:"华一",sex:"woman",children:[]}]},{name:"二哥",sex:"man",son:"子二",daughter:"无",children:[{name:"华二",sex:"man",children:[]},{name:"华一",sex:"woman",children:[]}]},{name:"三",sex:"man",children:[]},{name:"龙发",sex:"man",son:"无",daughter:"无",children:[]}]}]},eraData:{type:Array,default:()=>["一代","二代","三代","四代","五代","六代","七代","八代","九代","十代","十一代","十二代"]}},data:()=>({}),methods:{}},t=(n(460),n(0)),r=Object(t.a)(s,(function(){var e=this,a=e._self._c;return a("main",{staticClass:"era"},e._l(e.eraData,(function(n,s){return a("div",{key:s,staticClass:"eraItem"},[a("div",{staticClass:"eraHeader"},[e._v("\n            "+e._s(n)+"\n        ")]),e._v(" "),e._m(0,!0)])})),0)}),[function(){var e=this._self._c;return e("div",{staticClass:"eraDetail"},[e("span",{staticClass:"line"})])}],!1,null,"415c27d3",null);a.default=r.exports},569:function(e,a,n){"use strict";n.r(a);var s={name:"genealogy",data:()=>({genealogyData:[{name:"夏",sex:"man",son:"子四",daughter:"无",person:[{name:"中一",sex:"man",son:"子二",daughter:"无",children:[{name:"华二",sex:"man",children:[]},{name:"华一",sex:"woman",children:[]}]},{name:"二哥",sex:"man",son:"子二",daughter:"无",children:[{name:"华二",sex:"man",children:[]},{name:"华一",sex:"woman",children:[]}]},{name:"三",sex:"man",children:[]},{name:"龙发",sex:"man",son:"无",daughter:"无",children:[]}]}],eraData:["一代","二代","三代","四代","五代","六代","七代","八代","九代","十代","十一代","十二代"]}),components:{Era:n(507).default},methods:{}},t=n(0),r=Object(t.a)(s,(function(){var e=this._self._c;return e("div",{staticClass:"genealogy"},[e("Era",{attrs:{genealogyData:this.genealogyData}})],1)}),[],!1,null,"4f8d262a",null);a.default=r.exports}}]);