(this.webpackJsonpsportsee=this.webpackJsonpsportsee||[]).push([[0],{159:function(t,e,a){},170:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),i=a(42),s=a.n(i),c=(a(159),function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,171)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;a(t),n(t),r(t),i(t),s(t)}))}),o=a(7),l=a(3),d=a(0);var u=function(){return Object(d.jsx)("div",{className:"container-notFound",children:Object(d.jsxs)("section",{className:"content-notFound",children:[Object(d.jsx)("h1",{className:"notFound-title",children:"404"}),Object(d.jsx)("p",{className:"notFound-text",children:"Oups! La page que vous demandez n'existe pas"}),Object(d.jsx)("div",{className:"notFound-link",children:Object(d.jsx)(o.b,{className:"notFound-link__a",to:"/",children:"Retourner sur la page d'acceuil "})})]})})},p=a(4),h=function(){return Object(d.jsxs)("div",{className:"content-sidebar",children:[Object(d.jsxs)("ul",{className:"content-sidebar__icon",children:[Object(d.jsx)("li",{children:Object(d.jsx)("img",{className:"sidebar-icon__logo",src:"/AlexandreCharlier_12_06122021/iconYoga.png",alt:"logo"})}),Object(d.jsx)("li",{children:Object(d.jsx)("img",{className:"sidebar-icon__logo",src:"/AlexandreCharlier_12_06122021/iconSwPool.png",alt:"logo"})}),Object(d.jsx)("li",{children:Object(d.jsx)("img",{className:"sidebar-icon__logo",src:"/AlexandreCharlier_12_06122021/iconBiker.png",alt:"logo"})}),Object(d.jsx)("li",{children:Object(d.jsx)("img",{className:"sidebar-icon__logo",src:"/AlexandreCharlier_12_06122021/iconAlter.png",alt:"logo"})})]}),Object(d.jsx)("p",{className:"content-sidebar__text",children:"copyrigth,SportSee.2020"})]})},f=a(2),m=function(t){var e=t.propsData;return Object(n.useEffect)((function(){var t=document.getElementById("barchart").clientWidth,a=document.getElementById("barchart").clientHeight,n=e.data.sessions;n.forEach((function(t){t.day=t.day.slice(9,10)}));var r=120,i=60,s=30,c=20,o=t-c-i,l=a-r-s,d=f.m().domain(n.map((function(t){return t.day}))).range([0,o]).padding(.9),u=f.n().domain([f.k(n,(function(t){return t.kilogram}))-1,f.j(n,(function(t){return t.kilogram}))]).nice().range([l,0]),p=f.n().domain([f.k(n,(function(t){return t.calories}))-100,f.j(n,(function(t){return t.calories}))+100]).nice().range([l,0]),h=f.o("#barchart");h.selectAll("*").remove();var m=h.append("svg").attr("width",o+c+i).attr("height",l+r+s).style("border","1px solid black");m.append("text").attr("x",c).attr("y",r/4).text("Activit\xe9 quotidienne").style("font-size","1.5rem").attr("alignment-baseline","central"),m.append("circle").attr("cx",o-110).attr("cy",r/4).attr("r",6).style("fill","#E60000"),m.append("circle").attr("cx",o-210).attr("cy",r/4).attr("r",6).style("fill","#E282D30"),m.append("text").attr("x",o-100).attr("y",r/4).text("Calories br\xfbl\xe9es (kCal)").style("font-size","1.5rem").attr("alignment-baseline","central").attr("class","bar-chart__text-legend").style("text-anchor","start"),m.append("text").attr("x",o-200).attr("y",r/4).text("Poids (kg)").style("font-size","1.5rem").attr("alignment-baseline","central").attr("class","bar-chart__text-legend").style("text-anchor","start");var g=m.append("g").attr("transform","translate("+c+","+r+")"),j=f.o("#barchart").append("div").attr("class","tooltip").style("opacity",0),b=g.selectAll(null).data(n).enter();b.append("rect").attr("class","bar").style("fill","#E282D30").attr("x",(function(t){return d(t.day)-3})).attr("width",5).attr("y",(function(t){return u(t.kilogram)})).attr("height",(function(t){return l-u(t.kilogram)})),b.append("rect").attr("class","bar").style("fill","#E60000").attr("x",(function(t){return d(t.day)+8})).attr("width",5).attr("y",(function(t){return p(t.calories)})).attr("height",(function(t){return l-p(t.calories)})),b.append("rect").attr("class","barhover").attr("x",(function(t){return d(t.day)-15})).attr("width",40).attr("y",(function(t){return u(f.j(n,(function(t){return t.kilogram})))})).attr("height",(function(t){return l})).on("mouseover",(function(t,e){f.o(this).transition().duration(200).style("opacity","0.5"),j.transition().duration(200).style("opacity",.9),j.html((function(){return"<p>".concat(e.kilogram,"kg</p><p>").concat(e.calories,"kcal</p>")})).style("left",50+d(e.day)+"px").style("top",u(e.kilogram)+r+"px")})).on("mouseout",(function(t,e){f.o(this).style("opacity",0),j.style("opacity",0)})),g.append("g").call((function(t){return t.attr("class","barchart-yAxis").attr("transform","translate(".concat(o,",0)")).style("font-size","12px").call(f.d(u).tickFormat(f.g(".2")).ticks(2).tickSize(-o)).call((function(t){return t.select(".domain").remove()}))})),g.append("g").call((function(t){return t.attr("class","barchart-xAxis").attr("transform","translate(0,".concat(l+5,")")).call(f.b(d).tickSize(0)).call((function(t){return t.select(".domain").remove()}))}))}),[e]),Object(d.jsx)("div",{className:"content-barchart",id:"barchart"})},g=function(t){var e=t.propsDataAverage;Object(n.useEffect)((function(){var t=e.data.sessions;a(t)}),[e]);var a=function(t){var e=document.getElementById("linechart").clientWidth,a=document.getElementById("linechart").clientHeight,n=100,r=30,i=30,s=30,c=e-s-r,o=a-n-i,l=["Lu","Ma","Me","Je","Ve","Sa","Di"],d=100,u=f.n().domain([t[0].day,t.length]).range([0,c]),p=f.n().domain([f.k(t,(function(t){return t.sessionLength}))-10,f.j(t,(function(t){return t.sessionLength}))]).range([o,0]),h=f.i().x((function(t){return u(t.day)})).y((function(t){return p(t.sessionLength)})).curve(f.f),m=f.o("#linechart");m.selectAll("*").remove();var g=m.append("svg").attr("width",c+s+r).attr("height",o+n+i).style("border","1px solid black"),j=g.append("defs").append("linearGradient").attr("id","mainGradient");j.append("stop").attr("class","stop-left").attr("offset","0%");var b=j.append("stop").attr("class","stop-left").attr("offset","".concat(d,"%"));j.append("stop").attr("class","stop-right").attr("offset","0%"),j.append("stop").attr("class","stop-right").attr("offset","100%"),g.append("rect").classed("filled",!0).attr("x",0).attr("y",0).attr("width",c+s+r).attr("height",o+n+i),g.append("text").attr("x",s).attr("y",n/4).text("Dur\xe9e moyenne des sessions").style("font-size","1.5rem").attr("alignment-baseline","middle").style("fill","white");var y=g.append("g").attr("transform","translate("+s+","+n+")");y.append("path").data(t).attr("fill","none").attr("stroke","white").attr("stroke-width",2).attr("class","line").attr("d",h(t));var x=g.append("g").append("rect").attr("class","dotted").attr("stroke-width","1px").attr("width",".5px").attr("height",o+n+i).style("opacity","0"),v=y.append("g").append("circle").style("fill","white").attr("stroke","black").attr("r",4).style("opacity",0),O=f.o("#linechart").append("div").attr("class","focus-text").style("opacity",0);y.append("rect").style("fill","none").style("pointer-events","all").attr("width",c).attr("height",o).on("click",onclick).on("mousemove",(function(e){var a=f.e((function(t){return t.day})).left,n=f.l(e),r=u.invert(n[0]),i=a(t,r),s=t.filter((function(t){return t.day===i}));if(r>=1){var o=s[0].sessionLength;v.style("opacity","1").attr("cx",u(i)).attr("cy",p(o)),x.attr("x",u(r)+30+"px").style("opacity","1"),O.html((function(){return"<p>".concat(s[0].sessionLength,"min</p>")})).style("opacity","1").style("left",u(i)+30+"px").style("top",p(o)+60+"px").style("border-radius","2px");var l=c;d=u(r)/l*100,b.attr("offset","".concat(d,"%")),console.log(u(r)+" "+d)}})),y.append("g").call((function(t){return t.attr("class","linechart-xAxis").attr("transform","translate(0,"+o+")").style("font-size","12px").style("color","white").call(f.b(u).ticks(5).tickSize(0).tickFormat((function(t,e){return l[e]}))).call((function(t){return t.select(".domain").remove()}))}))};return Object(d.jsx)("div",{className:"line-chart",id:"linechart"})},j=a(28),b=function(t){var e=t.propsDataPerformance.data;return Object(n.useEffect)((function(){!function(t){var a=document.getElementById("radarchart").clientWidth,n=document.getElementById("radarchart").clientHeight,r={top:5,right:5,bottom:5,left:5},i=a-r.left-r.right,s=n-r.top-r.bottom,c=Object.keys(t.kind).length,o={nbLevel:5,offset:Math.PI,size:Math.min(i,s),polyangle:2*Math.PI/c,r_0:.7*Math.min(i,s)/2},l={x:o.size/2,y:o.size/2},d=f.o("#radarchart");d.selectAll("*").remove();var u=d.append("svg").attr("width",o.size+r.right+r.left).attr("height",o.size+r.top+r.bottom).append("g").attr("transform","translate( 0 ,"+2*r.top+")"),h=f.n().domain([0,f.j(e.data,(function(t){return t.value}))]).range([0,o.r_0]),m=function(t){var e=t.length,a=t.angle;return{x:l.x+e*Math.sin(o.offset-a),y:l.x+e*Math.cos(o.offset-a)}},g=function(t,e){var a=f.i().x((function(t){return t.x})).y((function(t){return t.y}));e.append("path").attr("d",a(t))},b=function(t,e){for(var a=1;a<=t;a++){for(var n=a/t*o.r_0,r=[],i=0;i<e;i++){var s=i*o.polyangle;r.push(m({length:n,angle:s}))}var c=u.append("g").attr("class","levels").attr("fill","none").attr("stroke","white").attr("stroke-width",2);g([].concat(r,[r[0]]),c)}},y=function(t){u.append("g").attr("class","indic").selectAll("circle").data(t).enter().append("circle").attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y})).attr("r",1).attr("fill","red")},x=function(t,e){var a=[];t.forEach((function(t,n){var r=h(t.value),i=n*(2*Math.PI/e);a.push(Object(j.a)(Object(j.a)({},m({length:r,angle:i})),{},{value:t.value}))}));var n=u.append("g").attr("class","shape").attr("fill","red").style("opacity",.7);g([].concat(a,[a[0]]),n),y(a)},v=function(t,e,a){a.append("text").attr("x",e.x).attr("y",e.y).html(t).attr("fill","white").style("text-anchor","middle").style("font-size","12px").style("font-family","sans-serif")},O=function(t,e){for(var a=u.append("g").attr("class","labels"),n=0;n<e;n++){var r=n*o.polyangle,i=t[n].name,s=m({length:o.size/2*.9,angle:r});v(i,s,a)}},k=function(){var t=[];return e.data.forEach((function(a){var n=a.kind;return t.push({name:Object.entries(e.kind).filter((function(t){var e=Object(p.a)(t,2),a=e[0];e[1];return a===n.toString()})).map((function(t){return t[1]})),value:a.value})})),t}();b(o.nbLevel,c),x(k,c),O(k,c)}(e)}),[e]),Object(d.jsx)("div",{className:"radar-chart",id:"radarchart"})},y=function(t){var e=t.propsDataRadial.data;return Object(n.useEffect)((function(){!function(){var t=document.getElementById("radialchart").clientWidth,a=document.getElementById("radialchart").clientHeight,n={top:10,right:10,bottom:10,left:10},r=t-n.left-n.right,i=a-n.top-n.bottom,s={PI:Math.PI,arcMinRadius:.5*Math.min(r,i)/2,arcPadding:2,size:Math.min(r,i),arcMaxRadius:.8*Math.min(r,i)/2},c={x:s.size/2,y:s.size/2+n.top},o=[{score:100*e.score},{score:100}],l=f.o("#radialchart");l.selectAll("*").remove();var d=l.append("svg").attr("width",s.size+n.right+n.left).attr("height",s.size+n.top+n.bottom).append("g").attr("transform","translate("+(c.x+n.left)+" ,"+(c.y+n.top)+")");l.append("div").attr("class","radial-text__score").style("position","absolute").style("width","100px").style("top",c.y-35+"px").style("left",c.x-35+"px").html('<p style="font-size: 2.6rem; font-weight:700">'.concat(o[0].score,'%</p><p style="font-color: #74798C;">de votre objectif</p>')),d.append("text").attr("class","radial-text__legend").attr("x",2*n.left-c.x).attr("y",2*n.top-c.y).text("Score").attr("alignment-baseline","central");var u=f.n().domain([0,f.j(o,(function(t){return t.score}))]).range([0,2*s.PI]),p=o.map((function(t,e){return t.name})).length,h=(s.arcMaxRadius-s.arcMinRadius-p*s.arcPadding)/p,m=f.a().innerRadius((function(t,e){return j(e)})).outerRadius((function(t,e){return b(e)})).startAngle(0).endAngle((function(t,e){return-u(t)})).cornerRadius(10);function g(t,e){var a=f.h(0,t.score);return function(t){return m(a(t),e)}}function j(t){return s.arcMinRadius+(p-(t+1))*(h+s.arcPadding)}function b(t){return j(t)+h}d.append("g").attr("class","r axis").selectAll("g").data(o).enter().append("g").append("circle").attr("r",(function(t,e){return b(e)+s.arcPadding})).attr("class",(function(t,e){return"radialcircle".concat(e)})),d.append("g").attr("class","data").selectAll("path").data(o).enter().append("path").attr("class",(function(t,e){return"arc".concat(e)})).transition().delay((function(t,e){return 200*e})).duration(1e3).attrTween("d",g)}()})),Object(d.jsx)("div",{className:"radial-chart",id:"radialchart"})},x=[{id:12,userInfos:{firstName:"Karl",lastName:"Dovineau",age:31},score:.12,keyData:{calorieCount:1930,proteinCount:155,carbohydrateCount:290,lipidCount:50}},{id:18,userInfos:{firstName:"Cecilia",lastName:"Ratorez",age:34},score:.3,keyData:{calorieCount:2500,proteinCount:90,carbohydrateCount:150,lipidCount:120}}],v=[{userId:12,sessions:[{day:"2020-07-01",kilogram:80,calories:240},{day:"2020-07-02",kilogram:80,calories:220},{day:"2020-07-03",kilogram:81,calories:280},{day:"2020-07-04",kilogram:81,calories:290},{day:"2020-07-05",kilogram:80,calories:160},{day:"2020-07-06",kilogram:78,calories:162},{day:"2020-07-07",kilogram:76,calories:390}]},{userId:18,sessions:[{day:"2020-07-01",kilogram:70,calories:240},{day:"2020-07-02",kilogram:69,calories:220},{day:"2020-07-03",kilogram:70,calories:280},{day:"2020-07-04",kilogram:70,calories:500},{day:"2020-07-05",kilogram:69,calories:160},{day:"2020-07-06",kilogram:69,calories:162},{day:"2020-07-07",kilogram:69,calories:390}]}],O=[{userId:12,sessions:[{day:1,sessionLength:30},{day:2,sessionLength:23},{day:3,sessionLength:45},{day:4,sessionLength:50},{day:5,sessionLength:0},{day:6,sessionLength:0},{day:7,sessionLength:60}]},{userId:18,sessions:[{day:1,sessionLength:30},{day:2,sessionLength:40},{day:3,sessionLength:50},{day:4,sessionLength:30},{day:5,sessionLength:30},{day:6,sessionLength:50},{day:7,sessionLength:50}]}],k=[{userId:12,kind:{1:"cardio",2:"energy",3:"endurance",4:"strength",5:"speed",6:"intensity"},data:[{value:80,kind:1},{value:120,kind:2},{value:140,kind:3},{value:50,kind:4},{value:200,kind:5},{value:90,kind:6}]},{userId:18,kind:{1:"cardio",2:"energy",3:"endurance",4:"strength",5:"speed",6:"intensity"},data:[{value:200,kind:1},{value:240,kind:2},{value:80,kind:3},{value:80,kind:4},{value:220,kind:5},{value:110,kind:6}]}];var _=function(){var t=Object(n.useState)(null),e=Object(p.a)(t,2),a=e[0],r=e[1],i=Object(n.useState)([]),s=Object(p.a)(i,2),c=s[0],o=s[1],u=Object(n.useState)([]),f=Object(p.a)(u,2),j=f[0],_=f[1],N=Object(n.useState)(!1),I=Object(p.a)(N,2),L=I[0],w=(I[1],Object(n.useState)(!1)),z=Object(p.a)(w,2),A=z[0],C=z[1],E=Object(l.g)().id,M=Object(n.useState)([]),P=Object(p.a)(M,2),S=P[0],D=P[1];return Object(n.useEffect)((function(){r(function(t){return{data:x.filter((function(e){return e.id===Number(t)})).shift()}}(E)),o(function(t){return{data:v.filter((function(e){return e.userId===Number(t)})).shift()}}(E)),D(function(t){return{data:O.filter((function(e){return e.userId===Number(t)})).shift()}}(E)),_(function(t){return{data:k.filter((function(e){return e.userId===Number(t)})).shift()}}(E)),C(!0)}),[E]),Object(d.jsxs)("div",{className:"container-profil",children:[Object(d.jsx)("div",{className:"container-profil__sidebar",children:Object(d.jsx)(h,{})}),A&&Object(d.jsxs)("section",{className:"container-profil__dashboard",children:[Object(d.jsxs)("div",{className:"profil__dashboard-header",children:[Object(d.jsx)("h1",{className:"profil__dashboard-title sr-only",children:"r\xe9sum\xe9 des performances"}),Object(d.jsx)("h2",{className:"profil__dashboard-user",children:"Bonjour ".concat(a.data.userInfos.firstName)},"".concat(a.data.id)),Object(d.jsx)("p",{className:"profil__dashboard-resume",children:"F\xe9licitation ! vous avez explos\xe9 vos objectifs hier"})]}),Object(d.jsxs)("div",{className:"profil__dashboard-activities",children:[Object(d.jsxs)("div",{className:"profil__activities-center",children:[Object(d.jsx)("div",{className:"profil__activity-today",children:Object(d.jsx)(m,{propsData:c})}),Object(d.jsx)("div",{className:"profil__activity-coverage",children:Object(d.jsx)(g,{propsDataAverage:S})}),Object(d.jsx)("div",{className:"profil__activity-radar",children:Object(d.jsx)(b,{propsDataPerformance:j})}),Object(d.jsx)("div",{className:"profil__activity-score",children:Object(d.jsx)(y,{propsDataRadial:a})})]}),Object(d.jsxs)("div",{className:"profil__activity-side",children:[Object(d.jsx)("p",{children:" Calories"}),Object(d.jsx)("p",{children:"Proteines"}),Object(d.jsx)("p",{children:"Glucides"}),Object(d.jsx)("p",{children:"Lipides"})]})]})]}),L&&Object(d.jsx)("h1",{className:"error",children:"Une erreure est survenue, merci de reessayer"})]})},N=function(){return[{path:"/profil/:id",component:_}]},I=function(){return Object(d.jsx)("nav",{className:"navbar",children:Object(d.jsxs)("ul",{className:"navbar__ul",children:[Object(d.jsx)("li",{children:Object(d.jsx)(o.c,{className:"navbar__link",to:"/Accueil",children:"Accueil"})}),Object(d.jsx)("li",{children:Object(d.jsx)(o.c,{className:"navbar__link",to:"/Profil",children:"Profil"})}),Object(d.jsx)("li",{children:Object(d.jsx)(o.c,{className:"navbar__link",to:"/Reglage",children:"R\xe9glage"})}),Object(d.jsx)("li",{children:Object(d.jsx)(o.c,{className:"navbar__link",to:"/Communaute",children:"Communaut\xe9"})})]})})},L=function(){return Object(d.jsx)("header",{className:"container-header",children:Object(d.jsxs)("div",{className:"content-header",children:[Object(d.jsx)("div",{className:"content-logo",children:Object(d.jsx)("img",{className:"logo",src:"/AlexandreCharlier_12_06122021/logo.png",alt:"logo"})}),Object(d.jsx)("div",{className:"content-navbar",children:Object(d.jsx)(I,{})})]})})},w=function(){return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(L,{}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.a,{exact:!0,from:"/",to:"/profil/".concat(18)}),N().map((function(t,e){return Object(d.jsx)(l.b,{path:t.path,component:t.component},e)})),Object(d.jsx)(l.b,{path:"*",component:u})]})]})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),c()}},[[170,1,2]]]);
//# sourceMappingURL=main.27424586.chunk.js.map