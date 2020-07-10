(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(5),r=a.n(s),c=(a(15),a(16),a(2)),i=a(3),o=a(6),u=a(7),d=a(9),m=a(8),f=a(1),p=a.n(f),k=p.a.shape({completed:p.a.bool.isRequired,id:p.a.number.isRequired,title:p.a.string.isRequired}),h=(p.a.shape({tasks:k,completedChange:p.a.func.isRequired,deleteTask:p.a.func.isRequired,completedAll:p.a.func.isRequired}),p.a.shape({filterClass:p.a.arrayOf(p.a.string),tasks:k,deleteCompleted:p.a.func.isRequired,filterAll:p.a.func.isRequired,filters:p.a.func.isRequired}),function(e){var t=e.tasks,a=e.completedChange,l=e.deleteTask,s=e.completedAll;return n.a.createElement("section",{className:"main"},n.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onClick:function(e){return s(e)}}),n.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),n.a.createElement("ul",{className:"todo-list"},t.map((function(e){var t="";return t=e.completed?"completed":"",n.a.createElement("li",{key:e.id,className:t},n.a.createElement("div",{className:"view"},n.a.createElement("input",{type:"checkbox",className:"toggle",id:"todo-".concat(e.id),onChange:a,checked:e.completed}),n.a.createElement("label",{htmlFor:"todo-".concat(e.id)},e.title),n.a.createElement("button",{type:"button",className:"destroy",onClick:l})),n.a.createElement("input",{type:"text",className:"edit"}))}))))}),E=function(e){var t=e.filterClass,a=e.tasks,l=e.deleteCompleted,s=e.filterAll,r=e.filters,c=0;return a.forEach((function(e){!1===e.completed&&(c+=1)})),0===a.length?null:n.a.createElement("footer",{className:"footer"},n.a.createElement("span",{className:"todo-count"},c,"\xa0 items left"),n.a.createElement("ul",{className:"filters"},n.a.createElement("li",null,n.a.createElement("a",{href:"/",className:t[0],onClick:function(e){return s(e)}},"All")),n.a.createElement("li",null,n.a.createElement("a",{href:"/active",className:t[1],onClick:function(e){return r(e,!1)}},"Active")),n.a.createElement("li",null,n.a.createElement("a",{href:"/completed",className:t[2],onClick:function(e){return r(e,!0)}},"Completed"))),n.a.createElement("button",{type:"button",className:"clear-completed",onClick:l},"Clear completed"))},g=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var l=arguments.length,n=new Array(l),s=0;s<l;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={tasks:JSON.parse(localStorage.getItem("savedTasks"))||[],taskPattern:{title:"",id:0,completed:!1},filteredTasks:null,lastId:0,filterClass:["selected","",""]},e.writeTask=function(t){var a=t.target.value;e.setState((function(e){return{taskPattern:{title:"".concat(a),id:e.lastId,completed:!1},lastId:e.lastId+1}}))},e.saveTask=function(t){"Enter"===t.key&&""!==e.state.taskPattern.title&&e.setState((function(e){return{tasks:[].concat(Object(i.a)(e.tasks),[e.taskPattern]),taskPattern:{title:"",id:0}}}))},e.completedChange=function(t){var a=Number(t.target.id.split(/todo-/)[1]);e.setState((function(e){return{tasks:e.tasks.map((function(e){return e.id===a?Object(c.a)(Object(c.a)({},e),{},{completed:!e.completed}):e}))}}))},e.completedAll=function(t){var a=t.target;e.setState((function(e){return{tasks:e.tasks.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{completed:a.checked})}))}}))},e.deleteTask=function(t){var a=e.state.tasks.find((function(e){return Number(t.target.previousElementSibling.htmlFor.split(/todo-/)[1])===e.id}));e.setState((function(e){return{tasks:e.tasks.filter((function(e){return e!==a}))}}))},e.deleteCompleted=function(t){e.setState((function(e){return{tasks:e.tasks.filter((function(e){return!1===e.completed}))}})),e.filterAll(t)},e.filters=function(t,a){var l=[];l=!0===a?["","","selected"]:["","selected",""],t.preventDefault(),e.setState((function(e){return{filteredTasks:e.tasks.filter((function(e){return e.completed===a})),filterClass:l}}))},e.filterAll=function(t){t.preventDefault(),e.setState((function(){return{filteredTasks:null,filterClass:["selected","",""]}}))},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(){var e=this.state.tasks;localStorage.setItem("savedTasks",JSON.stringify(e))}},{key:"render",value:function(){var e=this.state.filteredTasks||Object(i.a)(this.state.tasks);return n.a.createElement("section",{className:"todoapp"},n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"todos"),n.a.createElement("input",{value:this.state.taskPattern.title,className:"new-todo",placeholder:"What needs to be done?",onChange:this.writeTask,onKeyUp:this.saveTask})),n.a.createElement(h,{tasks:e,completedChange:this.completedChange,completedAll:this.completedAll,deleteTask:this.deleteTask}),n.a.createElement(E,{deleteCompleted:this.deleteCompleted,filterClass:this.state.filterClass,filterAll:this.filterAll,filters:this.filters,tasks:this.state.tasks}))}}]),a}(n.a.Component);var v=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(g,null))};r.a.render(n.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.a7fab558.chunk.js.map