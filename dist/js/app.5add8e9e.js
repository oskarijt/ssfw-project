(function(t){function e(e){for(var n,o,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)o=i[p],s[o]&&d.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),s=r.n(n);s.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),s=r("ce5b"),a=r.n(s),o=r("31bd"),i=r("8c4f"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$store.state.isUserLoggedIn?r("div",{staticClass:"container"},[r("h1",[t._v("Latest Posts")]),r("div",{staticClass:"create-post"},[r("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.createPost(e)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"title"}},[t._v("\n          Title\n        ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",attrs:{type:"text",name:"title"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"category"}},[t._v("\n          Category\n        ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.category,expression:"form.category"}],staticClass:"form-control",attrs:{type:"text",name:"category"},domProps:{value:t.form.category},on:{input:function(e){e.target.composing||t.$set(t.form,"category",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[t._v("\n          Description\n        ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],staticClass:"form-control",attrs:{type:"text",name:"description"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("star-rating",{model:{value:t.form.rating,callback:function(e){t.$set(t.form,"rating",e)},expression:"form.rating"}})],1),r("input",{ref:"file",attrs:{type:"file",name:"photo"},on:{change:t.selectFile}}),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n        Upload Photo\n      ")])])]),r("hr"),t.error?r("p",{staticClass:"error"},[t._v(t._s(t.error)+" ")]):t._e(),r("div",{staticClass:"posts-container"},t._l(t.posts,function(e,n){return r("div",{key:e._id,staticClass:"post",attrs:{item:e,index:n},on:{dblclick:function(r){return t.deletePost(e._id)}}},[r("p",{staticClass:"text"},[t._v(t._s(e.category))]),r("img",{staticClass:"img-responsive",attrs:{src:e.thumbnailPath}}),r("br"),t._v("\n      "+t._s(""+e.title)+"\n      "),r("br"),t._v("\n      "+t._s(""+e.description)+"\n\n    ")])}),0)]):t._e()},u=[],l=(r("96cf"),r("3b8d")),p=r("cebc"),d=r("795b"),m=r.n(d),f=r("d225"),v=r("b0b4"),g=r("bc3a"),h="";h="https://localhost:3000/api/posts/";var b=function(){function t(){Object(f["a"])(this,t)}return Object(v["a"])(t,null,[{key:"getPosts",value:function(){return new m.a(function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e,r){var n,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.get(h);case 3:n=t.sent,s=n.data,e(s.map(function(t){return Object(p["a"])({},t)})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),r(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e,r){return t.apply(this,arguments)}}())}},{key:"insertPost",value:function(t){return g.post(h+"/upload",{form:t})}},{key:"deletePost",value:function(t){return g.delete("".concat(h).concat(t))}}]),t}(),w=b,y=r("bc3a"),_=r.n(y),x="";x="https://localhost:3000/api/posts/";var k={name:"PostComponent",data:function(){return{posts:[],error:"",form:{category:"",title:"",description:"",rating:0,photo:""}}},created:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.getPosts();case 3:this.posts=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.error=t.t0.message;case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function e(){return t.apply(this,arguments)}return e}(),methods:{selectFile:function(){this.file=this.$refs.file.files[0],this.form.photo=this.file},createPost:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,r,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e="".concat(x,"/upload"),r=new FormData,r.append("category",this.form.category),r.append("title",this.form.title),r.append("description",this.form.description),r.append("rating",this.form.rating),r.append("photo",this.file),_.a.post(e,r).then(function(t){console.log(t),n.posts=w.getPosts()}).catch(function(t){alert(t)});case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),deletePost:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.deletePost(e);case 2:return t.prev=2,t.next=5,w.getPosts();case 5:this.posts=t.sent,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),this.error=t.t0.message;case 11:case"end":return t.stop()}},t,this,[[2,8]])}));function e(e){return t.apply(this,arguments)}return e}()}},P=k,C=(r("8999"),r("2877")),O=Object(C["a"])(P,c,u,!1,null,"776c1422",null),j=O.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",[t._v("Register")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",name:"username",placeholder:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],staticClass:"form-control",attrs:{type:"password",name:"password2",placeholder:"password again"},domProps:{value:t.password2},on:{input:function(e){e.target.composing||(t.password2=e.target.value)}}}),r("br"),r("button",{staticClass:"btn btn-primary",on:{click:t.register}},[t._v("\n      Register\n      ")])])},U=[],R=r("bc3a"),T="";T="https://localhost:3000/api/auth/";var L=function(){return R.create({baseURL:T})},N={register:function(t){return L().post("register",t)},login:function(t){return L().post("login",t)}},S={data:function(){return{username:"",password:"",password2:""}},watch:{username:function(t){console.log("Username changed value")}},methods:{register:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.register({username:this.username,password:this.password,password2:this.password2});case 3:e=t.sent,this.$store.dispatch("setToken",e.data.token),this.$store.dispatch("setUser",e.data.user),this.$router.push({name:"posts"}),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(this.error);case 12:case"end":return t.stop()}},t,this,[[0,9]])}));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){setTimeout(function(){})}},I=S,E=Object(C["a"])(I,$,U,!1,null,"71772780",null),M=E.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",[t._v("Login")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",name:"username",placeholder:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),r("br"),r("button",{staticClass:"btn btn-primary",on:{click:t.login}},[t._v("\n      Login\n      ")])])},F=[],J={data:function(){return{username:"",password:""}},watch:{username:function(t){console.log("Username changed value")}},methods:{login:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.login({username:this.username,password:this.password});case 3:e=t.sent,this.$store.dispatch("setToken",e.data.token),this.$store.dispatch("setUser",e.data.user),this.$router.push({name:"posts"}),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),this.error=t.t0.response.data.error,console.log(this.error);case 13:case"end":return t.stop()}},t,this,[[0,9]])}));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){setTimeout(function(){})}},H=J,q=Object(C["a"])(H,D,F,!1,null,"361fe686",null),z=q.exports;n["default"].use(i["a"]);var A=new i["a"]({routes:[{path:"/posts",name:"posts",component:j},{path:"/register",name:"register",component:M},{path:"/login",name:"login",component:z}]}),B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("v-app",[r("page-header"),r("main",[r("v-container",{attrs:{fluid:""}},[r("router-view")],1)],1)],1)],1)},G=[],K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-toolbar",{staticClass:"cyan",attrs:{fixed:"",dark:""}},[r("v-toolbar-title",{staticClass:"mr-4"},[t._v("\n        Toolbar\n    ")]),r("v-toolbar-items",[r("v-btn",{attrs:{to:"posts",flat:"",dark:""}},[t._v("\n      Posts\n    ")])],1),r("v-spacer"),r("v-toolbar-items",[t.$store.state.isUserLoggedIn?t._e():r("v-btn",{attrs:{to:"login",flat:"",dark:""}},[t._v("\n        Login\n      ")])],1),r("v-toolbar-items",[t.$store.state.isUserLoggedIn?t._e():r("v-btn",{attrs:{to:"register",flat:"",dark:""}},[t._v("\n        Sign Up\n      ")])],1),r("v-toolbar-items",[t.$store.state.isUserLoggedIn?r("v-btn",{attrs:{to:"logout",flat:"",dark:""},on:{click:t.logout}},[t._v("\n        Logout\n      ")]):t._e()],1)],1)},Q=[],V={methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null)}}},W=V,X=Object(C["a"])(W,K,Q,!1,null,"2def3a8e",null),Y=X.exports,Z={name:"app",components:{PageHeader:Y}},tt=Z,et=(r("034f"),Object(C["a"])(tt,B,G,!1,null,null,null)),rt=et.exports,nt=(r("4989"),r("ab8b"),r("bf40"),r("2f62")),st=r("0e44");n["default"].use(nt["a"]);var at=new nt["a"].Store({strict:!0,plugins:[Object(st["a"])()],state:{token:null,user:null,isUserLoggedIn:!1},mutations:{setToken:function(t,e){t.token=e,t.isUserLoggedIn=!!e},setUser:function(t,e){t.user=e}},actions:{setToken:function(t,e){var r=t.commit;r("setToken",e)},setUser:function(t,e){var r=t.commit;r("setUser",e)}}}),ot=r("c1da"),it=r.n(ot);n["default"].component("star-rating",it.a),n["default"].config.productionTip=!1,n["default"].use(a.a),Object(o["sync"])(at,A),new n["default"]({router:A,store:at,render:function(t){return t(rt)}}).$mount("#app")},"64a9":function(t,e,r){},8999:function(t,e,r){"use strict";var n=r("e3d1"),s=r.n(n);s.a},e3d1:function(t,e,r){}});
//# sourceMappingURL=app.5add8e9e.js.map