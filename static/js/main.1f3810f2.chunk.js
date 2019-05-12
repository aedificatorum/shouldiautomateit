(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),r=a.n(o),m=(a(15),a(4)),c=a(5),i=a(6),u=a(8),s=a(7),d=a(9),h=(a(16),function(e){var t=e.count,a=e.addition,n=void 0===a?"s":a,o=e.children;return l.a.createElement(l.a.Fragment,null,1!==t?o+n:o)});var E=function(e,t,a){for(var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:36,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:3,r=[],m=0;m<n;m++){var c=m+1,i=e*a*c,u=i-t*o,s=i-t,d=i-t*l,h="No";u>0?h="Definitely":s>0?h="Probably":d>0&&(h="Maybe"),r.push({month:c,timeSaved:i,roiSlow:u,roiMed:s,roiFast:d,shouldIAutomate:h})}return r},p=function(e){var t=e.table;return l.a.createElement("div",{className:"row"},l.a.createElement("table",{className:"striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Month"),l.a.createElement("th",null,"Time Saved"),l.a.createElement("th",null,"ROI Slow"),l.a.createElement("th",null,"ROI"),l.a.createElement("th",null,"ROI Fast"),l.a.createElement("th",null,"Should I Automate It?"))),l.a.createElement("tbody",null,t.map(function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.month),l.a.createElement("td",null,e.timeSaved),l.a.createElement("td",null,e.roiSlow),l.a.createElement("td",null,e.roiMed),l.a.createElement("td",null,e.roiFast),l.a.createElement("td",{className:e.shouldIAutomate.toLowerCase()},e.shouldIAutomate))}))))},b=function(){return l.a.createElement("footer",{className:"page-footer blue-grey lighten-2"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col l6 s12"},l.a.createElement("h4",{className:"white-text",id:"about"},"About"),l.a.createElement("p",{className:"grey-text text-lighten-4"},"Should I automate it? is designed for anyone interested to see when a manual process would benefit from being automated.")),l.a.createElement("div",{className:"col l4 offset-l2 s12"},l.a.createElement("h4",{className:"white-text"},"Links"),l.a.createElement("ul",null,l.a.createElement("a",{className:"grey-text text-lighten-3",href:"https://github.com/aedificatorum/shouldiautomateit",target:"blank"},l.a.createElement("i",{className:"fab fa-github small"})),l.a.createElement("a",{className:"grey-text text-lighten-3",href:"https://twitter.com/aedificatorum",target:"blank"},l.a.createElement("i",{className:"fab fa-twitter small"})),l.a.createElement("a",{className:"grey-text text-lighten-3",href:"#"},l.a.createElement("i",{className:"fas fa-envelope small"})))))),l.a.createElement("div",{className:"footer-copyright black"},l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:"aedificatorum-logo.png",className:"logo",alt:"logo"}),l.a.createElement("span",{className:"footer-built-by"},"Built by ",l.a.createElement("a",{href:"https://github.com/aedificatorum"},"Aedificatorum")))))},f=function(){return l.a.createElement("header",null,l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper black"},l.a.createElement("a",{href:"#!",className:"navbar-title"},"Should I automate it?"),l.a.createElement("a",{href:"/","data-target":"mobile-nav",className:"sidenav-trigger"},l.a.createElement("i",{className:"fas fa-bars"})),l.a.createElement("ul",{className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement("a",{href:"#about"},"About"))))),l.a.createElement("ul",{className:"sidenav",id:"mobile-nav"},l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#about"},"About"))))},v=(a(17),a(18),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).handleChangeNumber=function(t){e.setState(Object(m.a)({},t.target.id,Number(t.target.value)))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.unit,l=a.frequency,o=a.duration,r=a.automationTime,m=a.maxSlowDown,c=a.maxSpeedUp,i=a.numberOfMonths,u=E(o,r,l*n,i,c,m);e.setState({calculationsTable:u})},e.canBeSubmitted=function(){var t=e.state,a=t.duration,n=t.automationTime,l=t.frequency,o=t.unit;return l>0&&""!==o&&a>0&&n>0},e.state={frequency:1,unit:20,duration:20,automationTime:2400,calculationsTable:[],maxSpeedUp:.75,maxSlowDown:2,numberOfMonths:36},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.calculationsTable,a=e.duration,n=e.automationTime,o=e.frequency,r=e.unit,m=e.maxSpeedUp,c=e.maxSlowDown,i=e.numberOfMonths,u=t.length>1?l.a.createElement(p,{table:t}):"",s=!this.canBeSubmitted();return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement("main",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"col m6 s12"},l.a.createElement("div",{className:"row blue-grey lighten-5 basic-form"},l.a.createElement("h5",null,"Basic options"),l.a.createElement("input",{type:"number",id:"frequency",placeholder:"1, 2, 3...",value:o,className:"tooltipped","data-tooltip":"How often you do it",onChange:this.handleChangeNumber}),l.a.createElement("span",null," ",l.a.createElement(h,{count:o},"time")," every"," "),l.a.createElement("select",{type:"text",id:"unit",className:"browser-default",onChange:this.handleChangeNumber,value:r},l.a.createElement("option",{value:"30"},"day"),l.a.createElement("option",{value:"20"},"week day"),l.a.createElement("option",{value:"4"},"Week"),l.a.createElement("option",{value:"2"},"Other Week"),l.a.createElement("option",{value:"1"},"Month")),l.a.createElement("span",null," I could save "),l.a.createElement("input",{type:"number",id:"duration",className:"tooltipped","data-tooltip":"Time saved",placeholder:"10, 15, 20...",value:a,onChange:this.handleChangeNumber}),l.a.createElement("span",null," ",l.a.createElement(h,{count:a},"minute")," through automation. That automation would take..."),l.a.createElement("input",{type:"number",id:"automationTime",className:"tooltipped","data-tooltip":"How long to automate",placeholder:"30, 60, 90...",value:n,onChange:this.handleChangeNumber}),l.a.createElement("span",null," ",l.a.createElement(h,{count:n},"minute")),l.a.createElement("div",{className:"button"},l.a.createElement("button",{className:"waves-effect waves-light btn",disabled:s,onClick:this.handleSubmit},"Should I automate it?")))),l.a.createElement("form",{className:"col m5 offset-m1"},l.a.createElement("div",{className:"row blue-grey lighten-5 advanced-form"},l.a.createElement("h5",null,"Advanced options"),l.a.createElement("input",{type:"number",id:"numberOfMonths",value:i,placeholder:"1, 2, 3...",onChange:this.handleChangeNumber,className:"tooltipped","data-tooltip":"How many months to forecast"}),l.a.createElement("label",null,"Number Of Months"),l.a.createElement("input",{type:"number",value:m,step:"0.1",id:"maxSpeedUp",placeholder:"0.3, 0.5, 0.7...",onChange:this.handleChangeNumber,className:"tooltipped","data-tooltip":"How much faster the automation could be"}),l.a.createElement("label",null,"Max Speed Up"),l.a.createElement("input",{type:"number",id:"maxSlowDown",value:c,placeholder:"1, 2, 3...",onChange:this.handleChangeNumber,className:"tooltipped","data-tooltip":"How much slower the automation could be"}),l.a.createElement("label",null,"Max Slow Down"))),u))),l.a.createElement(b,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.1f3810f2.chunk.js.map