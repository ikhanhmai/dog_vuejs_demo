(function(e){function t(t){for(var n,a,s=t[0],u=t[1],c=t[2],d=0,f=[];d<s.length;d++)a=s[d],o[a]&&f.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/dog_vuejs_demo/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}}),e.isLoading?r("div",[r("div",[e._v("Loading... ")])]):e._e()],1)},i=[],a=r("cebc"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[null!==e.getBreeds?r("div",{staticClass:"selector"},[r("label",[e._v("Select any breed:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.dogBreed,expression:"dogBreed"}],attrs:{placeholder:"Select"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.dogBreed=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Select your option")]),e._l(e.getBreeds.message,function(t,n){return r("option",{domProps:{value:n}},[e._v(" "+e._s(n))])})],2)]):e._e(),r("div",[r("button",{on:{click:e.generateDog}},[e._v("CLICK to generate dog based on selected breed")]),r("div",[e._v(e._s(e.errMsg))])]),null===e.getDog||e.isLoading?e._e():r("div",{staticClass:"result"},[r("img",{attrs:{src:e.getDog.message}})])])},u=[],c=r("2f62"),l={name:"HelloWorld",props:{},data:function(){return{dogBreed:"",errMsg:""}},mounted:function(){this.$store.dispatch("GET_BREEDS")},methods:{generateDog:function(){""!==this.dogBreed?(this.errMsg="",this.$store.dispatch("SET_BREED",this.dogBreed),this.$store.dispatch("GET_DOG",this.dogBreed)):this.errMsg="Please select a dog breed"}},computed:Object(a["a"])({},Object(c["b"])(["isLoading","refCount"]),{getBreeds:function(){return this.$store.getters.BREEDS},getDogBreed:function(){return this.$store.getters.BREED},getDog:function(){return this.$store.getters.DOG}})},d=l,f=r("2877"),p=Object(f["a"])(d,s,u,!1,null,"ff30acf4",null),g=p.exports,m={name:"app",components:{HelloWorld:g},computed:Object(a["a"])({},Object(c["b"])(["isLoading","refCount"])),created:function(){var e=this;this.axios.interceptors.request.use(function(t){return e.$store.commit("LOADING",!0),t},function(t){return e.$store.commit("LOADING",!1),Promise.reject(t)}),this.axios.interceptors.response.use(function(t){return e.$store.commit("LOADING",!1),t},function(t){return e.$store.commit("LOADING",!1),Promise.reject(t)})}},v=m,h=(r("034f"),Object(f["a"])(v,o,i,!1,null,null,null)),b=h.exports,E=(r("96cf"),r("3b8d")),_=r("bc3a"),D=r.n(_);n["a"].use(c["a"]);var O=new c["a"].Store({state:{breeds:null,breed:null,dog:null,error:null,isLoading:!1},getters:{BREEDS:function(e){return e.breeds},BREED:function(e){return e.breed},DOG:function(e){return e.dog}},mutations:{SET_BREEDS:function(e,t){e.breeds=t},SET_BREED:function(e,t){e.breed=t},SET_DOG:function(e,t){e.dog=t},LOADING:function(e,t){e.isLoading=t}},actions:{GET_BREEDS:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("https://dog.ceo/api/breeds/list/all");case 2:r=e.sent,n=r.data,t.commit("SET_BREEDS",n);case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),SET_BREED:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.commit("SET_BREED",r);case 1:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),GET_DOG:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t,r){var n,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("https://dog.ceo/api/breed/"+r+"/images/random");case 2:n=e.sent,o=n.data,t.commit("SET_DOG",o);case 5:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()}}),B=r("a7fe"),S=r.n(B);n["a"].config.productionTip=!1,n["a"].use(S.a,D.a),new n["a"]({render:function(e){return e(b)},store:O}).$mount("#app")},"64a9":function(e,t,r){}});
//# sourceMappingURL=app.d5380ff2.js.map