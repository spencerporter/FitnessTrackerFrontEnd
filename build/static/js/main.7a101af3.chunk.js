(this.webpackJsonpstrangers_things=this.webpackJsonpstrangers_things||[]).push([[0],{42:function(e,t,a){e.exports=a(72)},72:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),s=a(18),o=a.n(s),i=a(8),u=a(5),l=a(1),m=a.n(l),p=a(3),d="https://fitnesstrac-kr.herokuapp.com/api",f=a(20),b=a.n(f),h=b.a.create({baseURL:"".concat(d)});function v(){return E.apply(this,arguments)}function E(){return(E=Object(p.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(d,"/routines"));case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,n=a,e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(0),console.error("Error Retriving Routines",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function g(e){return y.apply(this,arguments)}function y(){return(y=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(d,"/users/").concat(t,"/routines"));case 3:return a=e.sent,n=null,e.prev=5,e.next=8,a.json();case 8:n=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),console.log("No Routines Found");case 14:if(!n){e.next=18;break}return e.abrupt("return",n);case 18:return e.abrupt("return",[]);case 19:e.next=24;break;case 21:e.prev=21,e.t1=e.catch(0),console.error("Error Retriving Routines",e.t1);case 24:case"end":return e.stop()}}),e,null,[[0,21],[5,11]])})))).apply(this,arguments)}function N(e){return k.apply(this,arguments)}function k(){return(k=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:a=e.sent,n=0;case 5:if(!(n<a.length)){e.next=11;break}if(a[n].id.toString()!==t.toString()){e.next=8;break}return e.abrupt("return",a[n]);case 8:n++,e.next=5;break;case 11:return e.abrupt("return",{});case 14:e.prev=14,e.t0=e.catch(0),console.error("Isssue Fetching Users Routines",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function j(){return(j=Object(p.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:for(n=e.sent,r=0;r<n.length;r++)n[r].id.toString()===t.toString()&&a(n[r]);e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Isssue Fetching Users Routines",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(e,t){return w.apply(this,arguments)}function w(){return(w=Object(p.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(d,"/routines/").concat(a),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error("Deleting User's Routine",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function O(){return(O=Object(p.a)(m.a.mark((function e(t,a,n,r,c){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(a);case 3:(s=e.sent)&&(n(s.name),r(s.goal),c(s.isPublic)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Isssue Fetching Users Routines",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function C(){return(C=Object(p.a)(m.a.mark((function e(t,a,n,r,c,s){var o,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o={method:"post",url:"".concat(d,"/routines/").concat(a,"/activities"),data:{activityId:n,count:r,duration:c}},t&&(o.headers={Authorization:"Bearer ".concat(t)}),e.next=5,h(o);case 5:return e.next=7,N(a);case 7:i=e.sent,s(i),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error adding Activity to Routine",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function S(){return(S=Object(p.a)(m.a.mark((function e(t,a,n,r){var c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.prev=1,c={method:"delete",url:"".concat(d,"/routine_activities/").concat(n)},t&&(c.headers={Authorization:"Bearer ".concat(t)}),e.next=6,h(c);case 6:return e.next=8,N(a);case 8:s=e.sent,r(s),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error("Error adding Activity to Routine",e.t0);case 15:e.next=20;break;case 17:e.prev=17,e.t1=e.catch(0),console.error("Error deleting Activity",e.t1);case 20:case"end":return e.stop()}}),e,null,[[0,17],[1,12]])})))).apply(this,arguments)}function I(){return A.apply(this,arguments)}function A(){return(A=Object(p.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(d,"/activities"));case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,!(n=a)){e.next=10;break}return e.abrupt("return",n);case 10:return e.abrupt("return",[]);case 13:e.prev=13,e.t0=e.catch(0),console.error("Error Retriving Activities",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function R(e){return L.apply(this,arguments)}function L(){return(L=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I();case 3:a=e.sent,n=0;case 5:if(!(n<a.length)){e.next=11;break}if(a[n].id.toString()!==t){e.next=8;break}return e.abrupt("return",a[n]);case 8:n++,e.next=5;break;case 11:return e.abrupt("return",{});case 14:e.prev=14,e.t0=e.catch(0),console.error("Isssue Fetching Users Routines",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function D(){return(D=Object(p.a)(m.a.mark((function e(t,a,n,r){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(a);case 3:(c=e.sent)&&(n(c.name),r(c.description)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Isssue Fetching Users Routines",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function P(e,t){return F.apply(this,arguments)}function F(){return(F=Object(p.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(d,"/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:a})});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error("Error retriving Posts",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function T(e,t){return U.apply(this,arguments)}function U(){return(U=Object(p.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(d,"/users/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:a})});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error("Error retriving Posts",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function z(e,t){return B.apply(this,arguments)}function B(){return(B=Object(p.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(d,"/users/me"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(e){a(e),localStorage.setItem("user",e)})).catch(console.error);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(e){var t=e.token,a=e.setToken;return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},c.a.createElement("div",{className:"d-flex justify-content-between p-3"},c.a.createElement("a",{className:"navbar-brand fs-2",href:"/"},"FitnessTrac.kr"),c.a.createElement("div",{className:"collapse navbar-collapse fs-3",id:"navbarNavAltMarkup"},c.a.createElement("div",{className:"navbar-nav"},c.a.createElement(i.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home"),c.a.createElement(i.b,{className:"nav-link active",to:"/routines"},"Routines"),c.a.createElement(i.b,{className:"nav-link active",to:"/activities"},"Activities"),c.a.createElement(i.b,{className:"nav-link active",to:"/myRoutines"},"My Routines"),t?c.a.createElement(i.b,{className:"nav-link active",to:"/login",onClick:function(e){localStorage.removeItem("token"),a("")}},"Log Out"):c.a.createElement(i.b,{className:"nav-link active",to:"/login"},"Log In")))))},G=a(74),H=a(75);function J(e,t){return Y.apply(this,arguments)}function Y(){return(Y=Object(p.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:n=e.sent,t(n),a(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return(V=Object(p.a)(m.a.mark((function e(t,a,n,r,c){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(a,t);case 2:J(a,n,r),c(!0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=function(e){var t=e.token,a=Object(r.useState)([]),s=Object(n.a)(a,2),o=s[0],l=s[1],m=Object(r.useState)([]),p=Object(n.a)(m,2),d=p[0],f=p[1],b=Object(r.useState)(!1),h=Object(n.a)(b,2),v=h[0],E=h[1],g=Object(u.e)(),y=Object(r.useState)({}),N=Object(n.a)(y,2),k=N[0],j=N[1];return Object(r.useEffect)((function(){t&&z(t,j)}),[t]),Object(r.useEffect)((function(){J(l,f)}),[]),c.a.createElement("div",{id:"routines",className:"centered w-75"},v?c.a.createElement(G.a,{className:"pos-fix p-3",position:"top-end"},c.a.createElement(H.a,{className:"d-inline-block m-1",onClose:function(){return E(!1)}},c.a.createElement(H.a.Header,null,c.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded me-2",alt:""}),c.a.createElement("strong",{className:"me-auto"},"Routine Deleted")),c.a.createElement(H.a.Body,null,"Your Routine has been deleted!"))):null,c.a.createElement("div",{className:"horizGroup"},c.a.createElement("form",{className:"d-flex w-75"},c.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search Routines","aria-label":"Search",onChange:function(e){var t=e.target.value,a=o.filter((function(e){return function(e,t){return!!e.name.toLowerCase().includes(t)||(!!e.creatorName.toLowerCase().includes(t)||!!e.goal.toLowerCase().includes(t))}(e,t.toLowerCase())})),n=t.length?a:o;f(n)}})),""!==t?c.a.createElement(i.b,{className:"btn btn-outline-primary m-3",to:"/routines/add"},"Add a Routine"):null),d.map((function(e,a){return c.a.createElement("div",{key:a,className:"card w-75 p-3 border-dark m-3 shadow bg-body rounded"},c.a.createElement("div",{className:"card-header bg-primary text-white"},e.name),c.a.createElement("ul",{className:"list-group list-group-flush"},c.a.createElement("li",{className:"list-group-item"},"Goal: ",e.goal),c.a.createElement("li",{className:"list-group-item"},"Creator: ",e.creatorName),e.activities.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("li",{className:"list-group-item"},e.name,": ",e.description," "),c.a.createElement("li",{className:"list-group-item"},"Duration: ",e.duration," "),c.a.createElement("li",{className:"list-group-item"},"Count: ",e.count," "))})),c.a.createElement("button",{type:"button",className:"btn btn-outline-primary w-25 m-3",onClick:function(){g.push("/routines/routine/".concat(e.id))}},"View Routine"),k.username&&k.username===e.creatorName?c.a.createElement("div",{className:"horizGroup"},c.a.createElement("button",{type:"button",className:"btn btn-outline-danger w-25 m-3",onClick:function(){!function(e,t,a,n,r){V.apply(this,arguments)}(e.id,t,l,f,E)}},"Delete")):null))})))};function _(){return(_=Object(p.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:n=e.sent,t(n),a(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=function(e){var t=e.token,a=e.history,s=Object(r.useState)([]),o=Object(n.a)(s,2),u=o[0],l=o[1],m=Object(r.useState)([]),p=Object(n.a)(m,2),d=p[0],f=p[1],b=Object(r.useState)(!1),h=Object(n.a)(b,2),v=h[0],E=h[1];return Object(r.useEffect)((function(){!function(e,t){_.apply(this,arguments)}(l,f)}),[t]),c.a.createElement("div",{id:"activities",className:"centered w-75"},v?c.a.createElement(G.a,{className:"pos-fix p-3",position:"top-end"},c.a.createElement(H.a,{className:"d-inline-block m-1",onClose:function(){return E(!1)}},c.a.createElement(H.a.Header,null,c.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded me-2",alt:""}),c.a.createElement("strong",{className:"me-auto"},"Activity Deleted")),c.a.createElement(H.a.Body,null,"Your Activity has been deleted!"))):null,c.a.createElement("div",{className:"horizGroup"},c.a.createElement("form",{className:"d-flex w-75"},c.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search Activities","aria-label":"Search",onChange:function(e){var t=e.target.value,a=u.filter((function(e){return function(e,t){return!!e.name.toLowerCase().includes(t)||!!e.description.toLowerCase().includes(t)}(e,t.toLowerCase())})),n=t.length?a:u;f(n)}})),""!==t?c.a.createElement(i.b,{className:"btn btn-outline-primary m-3",to:"/activities/add"},"Add an Activity"):null),d.map((function(e,t){return c.a.createElement("div",{key:t,className:"card w-75 p-3 border-dark m-3 shadow bg-body rounded"},c.a.createElement("div",{className:"card-header bg-primary text-white"},e.name),c.a.createElement("ul",{className:"list-group list-group-flush"},c.a.createElement("li",{className:"list-group-item"},"Description: ",e.description)),c.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){a.push("/activities/edit/".concat(e.id))}},"Edit Activity"))})))},K=function(e){var t=e.token,a=Object(u.e)(),s=Object(r.useState)({}),o=Object(n.a)(s,2),i=o[0],l=o[1];return Object(r.useEffect)((function(){t&&z(t,l)}),[t]),t?c.a.createElement("div",{className:"centered m-3"},c.a.createElement("h1",null," Welcome: ",i.username," "),c.a.createElement("h2",null," Logged in as ",i.username),c.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:function(e){e.preventDefault(),a.push("/myRoutines")}},"View My Routines")):c.a.createElement("div",{className:"centered m-3"},c.a.createElement("h1",null,"Welcome: Please Login to view Your Routines"),c.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:function(e){e.preventDefault(),a.push("/login")}},"Log In"))};function Q(e,t,a){return X.apply(this,arguments)}function X(){return(X=Object(p.a)(m.a.mark((function e(t,a,n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t.username);case 2:r=e.sent,a(r),n(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(){return(Z=Object(p.a)(m.a.mark((function e(t,a,n,r,c,s){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(a,t);case 2:Q(s,n,r),c(!0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $=function(e){var t=e.token,a=e.history,s=Object(r.useState)({}),o=Object(n.a)(s,2),u=o[0],l=o[1],m=Object(r.useState)([]),p=Object(n.a)(m,2),d=p[0],f=p[1],b=Object(r.useState)([]),h=Object(n.a)(b,2),v=h[0],E=h[1],g=Object(r.useState)(!1),y=Object(n.a)(g,2),N=y[0],k=y[1];return Object(r.useEffect)((function(){t&&z(t,l)}),[t]),Object(r.useEffect)((function(){u.username&&Q(u,f,E)}),[u]),u.username?c.a.createElement("div",{id:"routines",className:"centered w-75"},c.a.createElement("h1",null," Welcome: ",u.username," "),N?c.a.createElement(G.a,{className:"pos-fix p-3",position:"top-end"},c.a.createElement(H.a,{className:"d-inline-block m-1",onClose:function(){return k(!1)}},c.a.createElement(H.a.Header,null,c.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded me-2",alt:""}),c.a.createElement("strong",{className:"me-auto"},"Routine Deleted")),c.a.createElement(H.a.Body,null,"Your Routine has been deleted!"))):null,c.a.createElement("div",{className:"horizGroup"},c.a.createElement("form",{className:"d-flex w-75"},c.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search Routines","aria-label":"Search",onChange:function(e){var t=e.target.value,a=d.filter((function(e){return function(e,t){return!!e.name.toLowerCase().includes(t)||(!!e.creatorName.toLowerCase().includes(t)||!!e.goal.toLowerCase().includes(t))}(e,t.toLowerCase())})),n=t.length?a:d;E(n)}})),""!==t?c.a.createElement(i.b,{className:"btn btn-outline-primary m-3",to:"/routines/add"},"Add a Routine"):null),v.map((function(e,n){return c.a.createElement("div",{key:n,className:"card w-75 p-3 border-dark m-3 shadow bg-body rounded"},c.a.createElement("div",{className:"card-header bg-primary text-white"},e.name),c.a.createElement("ul",{className:"list-group list-group-flush"},c.a.createElement("li",{className:"list-group-item"},"Goal: ",e.goal),c.a.createElement("li",{className:"list-group-item"},"Creator: ",e.creatorName),c.a.createElement("div",{className:"horizGroup"},c.a.createElement("button",{type:"button",className:"btn btn-outline-danger w-25 m-3",onClick:function(){!function(e,t,a,n,r,c){Z.apply(this,arguments)}(e.id,t,f,E,k,u)}},"Delete"),c.a.createElement("button",{type:"button",className:"btn btn-outline-primary w-25 m-3",onClick:function(){a.push("/routines/routine/".concat(e.id))}},"View Routine")),e.activities.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("li",{className:"list-group-item"},e.name,": ",e.description," "),c.a.createElement("li",{className:"list-group-item"},"Duration: ",e.duration," "),c.a.createElement("li",{className:"list-group-item"},"Count: ",e.count," "))}))))}))):c.a.createElement("div",{className:"centered m-3"},c.a.createElement("h1",null,"Please Login to see your Routines"),c.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:function(e){e.preventDefault(),a.push("/login")}},"Log In"))};function ee(){return(ee=Object(p.a)(m.a.mark((function e(t,a,n,r){var c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P(t,a);case 3:!1===(c=e.sent).success?document.getElementById("errorMessage").innerHTML=c.error.message:(s=c.token,n(s),localStorage.setItem("token",s),r.push("/")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error Logging in Users",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function te(){return(te=Object(p.a)(m.a.mark((function e(t,a,n,r,c){var s,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n!==a){e.next=13;break}return e.prev=1,e.next=4,T(t,a);case 4:!1===(s=e.sent).success?document.getElementById("errorMessage").innerHTML=s.error.message:(o=s.token,r(o),localStorage.setItem("token",o),c.push("/")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Error Logging in Users",e.t0);case 11:e.next=14;break;case 13:document.getElementById("errorMessage").innerHTML="Passwords must match!";case 14:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var ae=function(e){var t=e.setToken,a=e.match,s=Object(r.useState)(""),o=Object(n.a)(s,2),l=o[0],m=o[1],p=Object(r.useState)(""),d=Object(n.a)(p,2),f=d[0],b=d[1],h=Object(r.useState)(""),v=Object(n.a)(h,2),E=v[0],g=v[1],y=Object(u.e)();return c.a.createElement("form",{className:"m-3 w-50 position-absolute top-50 start-50 translate-middle",onSubmit:function(e){e.preventDefault(),"/register"===a.url?function(e,t,a,n,r){te.apply(this,arguments)}(l,f,E,t,y):function(e,t,a,n){ee.apply(this,arguments)}(l,f,t,y)}},c.a.createElement("div",{className:"mb-3"},c.a.createElement("label",{htmlFor:"usernameInput",className:"form-label"},"Username (min 5 Characters)"),c.a.createElement("input",{type:"text",className:"form-control",id:"usernameInput",placeholder:"Username...",minLength:"5",onChange:function(e){var t=e.target.value;return m(t)}})),c.a.createElement("div",{className:"mb-3"},c.a.createElement("label",{htmlFor:"passwordInput",className:"form-label"},"Password (min 8 Characters)"),c.a.createElement("input",{type:"password",className:"form-control",id:"passwordInput",placeholder:"Password...",minLength:"5",onChange:function(e){var t=e.target.value;return b(t)}})),"/register"===a.url?c.a.createElement("div",{className:"mb-3"},c.a.createElement("label",{htmlFor:"confirmPasswordInput",className:"form-label"},"Confirm Password (min 8 Characters)"),c.a.createElement("div",{className:"input-group has-validation"},c.a.createElement("input",{type:"password",className:"form-control",id:"confirmPasswordInput",placeholder:"Confirm Password...",minLength:"5",onChange:function(e){var t=e.target.value;g(t)}}))):null,c.a.createElement("div",{id:"errorMessage",className:"danger m-3"}," "),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login"),c.a.createElement("div",{className:"mb-3"},"/register"===a.url?c.a.createElement(i.b,{to:"/login"},"Already a user? Login Here! "):c.a.createElement(i.b,{to:"/register"},"Not a User? Register Here! ")))},ne=b.a.create({baseURL:"".concat(d)});function re(){return(re=Object(p.a)(m.a.mark((function e(t,a,n,r){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c={method:"post",url:"".concat(d,"/routines"),data:{name:a.name,goal:a.goal,isPublic:a.isPublic}},t&&(c.headers={Authorization:"Bearer ".concat(t)}),e.next=5,ne(c);case 5:n.push("/routines/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r("A Routine with that Name Already Exists");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function ce(){return(ce=Object(p.a)(m.a.mark((function e(t,a,n,r,c){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={method:"patch",url:"".concat(d,"/routines/").concat(n),data:{name:a.name,goal:a.goal,isPublic:a.isPublic}},t&&(s.headers={Authorization:"Bearer ".concat(t)}),e.next=5,ne(s);case 5:r.push("/routines/routine/".concat(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c("Could not update your Routine");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var se=function(e){var t=e.token,a=e.isAdd,s=e.match,o=Object(r.useState)({}),i=Object(n.a)(o,2),l=i[0],m=i[1],p=Object(r.useState)(""),d=Object(n.a)(p,2),f=d[0],b=d[1],h=Object(r.useState)(""),v=Object(n.a)(h,2),E=v[0],g=v[1],y=Object(r.useState)(!1),N=Object(n.a)(y,2),k=N[0],j=N[1],x=Object(r.useState)(""),w=Object(n.a)(x,2),C=w[0],S=w[1],I=Object(u.e)();return Object(r.useEffect)((function(){t&&z(t,m)}),[t]),Object(r.useEffect)((function(){s.params.routineId&&function(e,t,a,n,r){O.apply(this,arguments)}(t,s.params.routineId,b,g,j)}),[t,s.params.routineId]),l.username?c.a.createElement("div",{id:"addRoutine",className:"centered m-3"},c.a.createElement("h1",null," ",a?"Add":"Edit"," Routine"),c.a.createElement("form",{className:"w-50",onSubmit:function(e){e.preventDefault();var n={name:f,goal:E,isPublic:k};a?function(e,t,a,n){re.apply(this,arguments)}(t,n,I,S):function(e,t,a,n,r){ce.apply(this,arguments)}(t,n,s.params.routineId,I,S)}},c.a.createElement("div",{className:"mb-3 errorMessage"},C),c.a.createElement("div",{className:"mb-3"},c.a.createElement("label",{htmlFor:"nameInput",className:"form-label"},"Title"),c.a.createElement("input",{type:"text",className:"form-control",id:"nameInput",placeholder:"Name",value:f,onChange:function(e){var t=e.target.value;return b(t)}})),c.a.createElement("div",{className:"mb-3"},c.a.createElement("label",{htmlFor:"goalInput",className:"form-label"},"Description"),c.a.createElement("input",{type:"text",className:"form-control",id:"goalInput",placeholder:"Goal",value:E,onChange:function(e){var t=e.target.value;return g(t)}})),c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"publicCheckbox",value:k,onChange:function(e){e.target.value;return j(!k)}}),c.a.createElement("label",{className:"form-check-label",htmlFor:"publicCheckbox"},"isPublic")),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},a?"Submit":"Save"))):c.a.createElement("div",{className:"centered m-3"},c.a.createElement("h1",null,"Please Login to see your Routines"),c.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:function(e){e.preventDefault(),I.push("/login")}},"Log In"))};function oe(){return(oe=Object(p.a)(m.a.mark((function e(t,a,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(a,t);case 2:n.push("/routines");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(){return(ie=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I();case 3:a=e.sent,t(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error getting activities");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var ue=function(e){var t=e.token,a=e.history,s=e.match,o=e.user,i=s.params.routineId,u=Object(r.useState)({}),l=Object(n.a)(u,2),m=l[0],p=l[1],d=Object(r.useState)({}),f=Object(n.a)(d,2),b=f[0],h=f[1],v=!1;return Object(r.useEffect)((function(){!function(e){ie.apply(this,arguments)}(h)}),[]),Object(r.useEffect)((function(){i&&function(e,t){j.apply(this,arguments)}(i,p)}),[i]),o&&(v=o.username===m.creatorName),console.log("New Page"),m.id?c.a.createElement("div",{className:"centered"},c.a.createElement("div",{className:"card w-75 p-3 border-dark m-3 shadow bg-body rounded"},c.a.createElement("div",{className:"card-header bg-primary text-white"},m.name),c.a.createElement("ul",{className:"list-group list-group-flush"},c.a.createElement("li",{className:"list-group-item"},"Goal: ",m.goal),c.a.createElement("li",{className:"list-group-item"},"Creator: ",m.creatorName),c.a.createElement("div",{className:"horizGroup"},v?c.a.createElement("button",{type:"button",className:"btn btn-outline-primary w-25 m-3",onClick:function(){a.push("/routines/edit/".concat(m.id))}},"Edit Routine"):null,v?c.a.createElement("button",{type:"button",className:"btn btn-outline-danger w-25 m-3",onClick:function(){!function(e,t,a){oe.apply(this,arguments)}(m.id,t)}},"Delete"):null,m.activities.map((function(e,a){return c.a.createElement("div",{key:a},c.a.createElement("li",{className:"list-group-item"},e.name,": ",e.description," "),c.a.createElement("li",{className:"list-group-item"},"Duration: ",e.duration," "),c.a.createElement("li",{className:"list-group-item"},"Count: ",e.count," "),v?c.a.createElement("button",{type:"button",className:"btn btn-outline-danger w-25 m-3",onClick:function(){!function(e,t,a,n){S.apply(this,arguments)}(t,m.id,e.routineActivityId,p)}},"Remove Activity"):null)}))),c.a.createElement("div",{className:"horizGroup"},c.a.createElement("select",{name:"activitySelector",form:"addActions"},b.map((function(e,t){return c.a.createElement("option",{key:t,value:e.id},e.name)}))),c.a.createElement("form",{id:"addActions",onSubmit:function(e){e.preventDefault();var a=e.target.duration.value,n=e.target.count.value,r=e.target.activitySelector.value;!function(e,t,a,n,r,c){C.apply(this,arguments)}(t,m.id,r,n,a,p)}},c.a.createElement("label",{htmlFor:"duration",className:"form-label"},"Duration:"),c.a.createElement("input",{type:"text",name:"duration",className:"form-control"}),c.a.createElement("label",{htmlFor:"count",className:"form-label"},"Count:"),c.a.createElement("input",{type:"text",name:"count",className:"form-control"}),c.a.createElement("input",{type:"submit",value:"Add Activity",className:"btn btn-primary"})))))):null},le=b.a.create({baseURL:"".concat(d)});function me(){return(me=Object(p.a)(m.a.mark((function e(t,a,n,r){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c={method:"post",url:"".concat(d,"/activities"),data:{name:a.name,description:a.description}},t&&(c.headers={Authorization:"Bearer ".concat(t)}),e.next=5,le(c);case 5:n.push("/activities/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r("An Activity with that Name Already Exists");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function pe(){return(pe=Object(p.a)(m.a.mark((function e(t,a,n,r,c){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={method:"patch",url:"".concat(d,"/activities/").concat(n),data:{name:a.name,description:a.description}},t&&(s.headers={Authorization:"Bearer ".concat(t)}),e.next=5,le(s);case 5:r.push("/activities/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c("Could not update your Activity");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var de=function(e){var t=e.token,a=e.isAdd,s=e.match,o=(e.activity,Object(r.useState)({})),i=Object(n.a)(o,2),l=i[0],m=i[1],p=Object(r.useState)(""),d=Object(n.a)(p,2),f=d[0],b=d[1],h=Object(r.useState)(""),v=Object(n.a)(h,2),E=v[0],g=v[1],y=Object(u.e)(),N=Object(r.useState)(""),k=Object(n.a)(N,2),j=k[0],x=k[1];return Object(r.useEffect)((function(){t&&z(t,m)}),[t]),Object(r.useEffect)((function(){s.params.activityId&&function(e,t,a,n){D.apply(this,arguments)}(t,s.params.activityId,b,g)}),[t,s.params.activityId]),l.username?c.a.createElement("div",{id:"addActivity",className:"centered m-3"},c.a.createElement("h1",null," ",a?"Add":"Edit"," Activity"),c.a.createElement("form",{className:"w-50",onSubmit:function(e){e.preventDefault();var n={name:f,description:E};a?function(e,t,a,n){me.apply(this,arguments)}(t,n,y,x):function(e,t,a,n,r){pe.apply(this,arguments)}(t,n,s.params.activityId,y,x)}},c.a.createElement("div",{className:"mb-3 errorMessage"},j),c.a.createElement("div",{className:"mb-3"},c.a.createElement("label",{htmlFor:"nameInput",className:"form-label"},"Name"),c.a.createElement("input",{type:"text",className:"form-control",id:"nameInput",placeholder:"Name",value:f,onChange:function(e){var t=e.target.value;return b(t)}})),c.a.createElement("div",{className:"mb-3"},c.a.createElement("label",{htmlFor:"goalInput",className:"form-label"},"Description"),c.a.createElement("input",{type:"text",className:"form-control",id:"goalInput",placeholder:"Description",value:E,onChange:function(e){var t=e.target.value;return g(t)}})),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},a?"Submit":"Save"))):c.a.createElement("div",{className:"centered m-3"},c.a.createElement("h1",null,"Please Login"),c.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:function(e){e.preventDefault(),y.push("/login")}},"Log In"))},fe=function(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),a=t[0],s=t[1],o=Object(r.useState)({username:""}),l=Object(n.a)(o,2),m=l[0],p=l[1];return Object(r.useEffect)((function(){var e=localStorage.getItem("token");e&&(s(e),z(e,p))}),[]),c.a.createElement("div",{className:"app"},c.a.createElement(i.a,null,c.a.createElement(M,{token:a,setToken:s}),c.a.createElement(u.a,{exact:!0,path:"/",render:function(){return c.a.createElement(K,{token:a,user:m})}}),c.a.createElement(u.a,{exact:!0,path:"/routines",render:function(){return c.a.createElement(W,{token:a,user:m})}}),c.a.createElement(u.a,{exact:!0,path:"/activities",render:function(e){return c.a.createElement(q,Object.assign({token:a,user:m},e))}}),c.a.createElement(u.a,{exact:!0,path:"/routines/add",render:function(e){return c.a.createElement(se,Object.assign({token:a,user:m,isAdd:!0},e))}}),c.a.createElement(u.a,{exact:!0,path:"/activities/add",render:function(e){return c.a.createElement(de,Object.assign({token:a,user:m,isAdd:!0},e))}}),c.a.createElement(u.a,{path:"/activities/activity/:activityId",render:function(e){return c.a.createElement(de,Object.assign({token:a,user:m},e))}}),c.a.createElement(u.a,{path:"/activities/edit/:activityId",render:function(e){return c.a.createElement(de,Object.assign({token:a,user:m,isAdd:!1},e))}}),c.a.createElement(u.a,{path:"/routines/routine/:routineId",render:function(e){return c.a.createElement(ue,Object.assign({token:a,user:m},e))}}),c.a.createElement(u.a,{path:"/routines/edit/:routineId",render:function(e){return c.a.createElement(se,Object.assign({token:a,user:m,isAdd:!1},e))}}),c.a.createElement(u.a,{path:"/myRoutines",render:function(e){return c.a.createElement($,Object.assign({token:a},e))}}),c.a.createElement(u.a,{path:"/login",render:function(e){return c.a.createElement(ae,Object.assign({setToken:s,setUser:p},e))}}),c.a.createElement(u.a,{path:"/register",render:function(e){return c.a.createElement(ae,Object.assign({setToken:s,setUser:p},e))}})))};o.a.render(c.a.createElement(fe,null),document.getElementById("app"))}},[[42,1,2]]]);
//# sourceMappingURL=main.7a101af3.chunk.js.map