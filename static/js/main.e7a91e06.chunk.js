(this.webpackJsonpbasic_banking_system=this.webpackJsonpbasic_banking_system||[]).push([[0],{18:function(e,t,n){e.exports={custImg:"Customer_custImg__2m_1W",custDetails:"Customer_custDetails__1OEOc",custElement:"Customer_custElement__1reWM",btnGroup:"Customer_btnGroup__3VYbe"}},20:function(e,t,n){e.exports={outerForm:"Transfer_outerForm__1HKzL",transferForm:"Transfer_transferForm__12LHd",formRow:"Transfer_formRow__-sqz0",amountInput:"Transfer_amountInput__2Hnb4",btnGroup:"Transfer_btnGroup__2UMco"}},23:function(e,t,n){e.exports={headtext:"Home_headtext__Opa7n",headtext2:"Home_headtext2__2SeRU",fsbtn:"Home_fsbtn__2HH1H"}},40:function(e,t,n){e.exports={navbarDark:"Header_navbarDark___2ybb"}},42:function(e,t,n){e.exports={tableHeader:"Customers_tableHeader__-MQSC",custRow:"Customers_custRow__2mJGN"}},43:function(e,t,n){e.exports={custRow1:"Customer_custRow1__1OxSG"}},44:function(e,t,n){e.exports={tableHeader:"Receiver_tableHeader__2fwq7",custRow:"Receiver_custRow__27X7t"}},45:function(e,t,n){e.exports={result:"Result_result__3zfur"}},46:function(e,t,n){e.exports={custRow:"Transactions_custRow__3J7M1"}},47:function(e,t,n){e.exports={custRow1:"Transaction_custRow1__10mLT"}},53:function(e,t,n){},54:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),c=n(21),a=n.n(c),i=(n(53),n(54),n(3)),o=n(40),u=n.n(o),l=n(4),d=n(1),j=function(){return Object(d.jsx)("nav",{className:u.a.navbarDark+" navbar",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("p",{className:"navbar-brand mx-auto font-weight-bold my-0",style:{fontSize:"2em"},children:Object(d.jsx)(l.b,{to:"/",style:{textDecoration:"none",color:"floralwhite"},children:"The SPARK Banking System"})})})})},b=n(11),p=n(12),m=n(14),h=n(13),f=n(23),O=n.n(f),x=n(5),v=n(15),_=n.n(v),N="GET_ALL_USERS",g="ADD_SENDER",y="ADD_RECEIVER",w="TRANSFER_SUCCESS",R="TRANSFER_COMPLETE",T="GET_ALL_TRANSACTIONS",S=function(){return function(e){_.a.get("users.json").then((function(t){var n;e((n=t.data,{type:N,data:n}))})).catch((function(e){console.log(e)}))}},k=n(16),C=function(e,t){return function(n){_.a.put("users/"+e.id+".json",e).then((function(e){n(function(e){return function(t){_.a.put("users/"+e.id+".json",e).then((function(e){k.b.success("Transfer Succesful")})).catch((function(e){console.log(e)}))}}(t))})).catch((function(e){console.log(e)}))}},E=function(){return function(e){_.a.get("transactions.json").then((function(t){var n;e((n=t.data,{type:T,data:n}))})).catch((function(e){console.log(e)}))}},B=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(p.a)(n,[{key:"componentWillMount",value:function(){this.props.getAllTransactions()}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:O.a.spbg+" container align-items-center mt-5",children:[Object(d.jsx)("div",{className:"row justify-content-center",children:Object(d.jsx)("p",{className:O.a.headtext+" text-white font-weight-bold my-3"})}),Object(d.jsx)("div",{className:"row justify-content-center",children:Object(d.jsx)("p",{className:O.a.headtext2+" text-white font-weight-bold mb-2",children:"Taking Banking Technology to the Common Man"})}),Object(d.jsxs)("div",{className:"row justify-content-center",children:[Object(d.jsx)(l.b,{to:"/customers",style:{textDecoration:"none"},children:Object(d.jsx)("p",{className:O.a.fsbtn+" btn btn-success my-3 mx-2",children:"Make Transfer"})}),Object(d.jsx)(l.b,{to:"/transfers",style:{textDecoration:"none"},children:Object(d.jsx)("p",{className:O.a.fsbtn+" btn btn-primary my-3 mx-2",children:"View All Transfers"})})]})]})}}]),n}(r.Component),A=Object(x.b)(null,(function(e){return{getAllTransactions:function(){return e(E())}}}))(B),D=n(42),I=n.n(D),M=n(43),H=n.n(M),F=function(e){return Object(d.jsxs)(l.b,{to:e.link,onClick:e.clik,className:H.a.custRow1,children:[Object(d.jsx)("p",{children:e.index}),Object(d.jsx)("p",{children:e.user.username}),Object(d.jsx)("p",{children:e.user.email}),Object(d.jsx)("p",{children:e.user.mobileNumber}),Object(d.jsx)("p",{children:e.user.currentBalance})]})},U=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(p.a)(n,[{key:"componentWillMount",value:function(){this.props.getAllUsers(),this.props.updateTransfer()}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"container py-5",children:[Object(d.jsx)("h1",{children:"Send money from...."}),Object(d.jsxs)("div",{className:I.a.custRow,children:[Object(d.jsx)("p",{children:"Sl No"}),Object(d.jsx)("p",{children:"User Name"}),Object(d.jsx)("p",{children:"Email"}),Object(d.jsx)("p",{children:"Mobile Number"}),Object(d.jsx)("p",{children:"Current Balance"})]}),this.props.users.map((function(t,n){return Object(d.jsx)(F,{user:t,index:n+1,clik:function(){return e.props.addSender(t)},link:"/customer/"+n},"_"+Math.random().toString(36).substr(2,9))}))]})}}]),n}(r.Component),G=Object(x.b)((function(e){return{users:e.user.users}}),(function(e){return{getAllUsers:function(){return e(S())},addSender:function(t){return e(function(e){return k.b.success("Sender selected"),{type:g,data:e}}(t))},updateTransfer:function(){return e({type:R})}}}))(U),L=n(18),P=n.n(L),z=Object(x.b)((function(e){return{sender:e.transfer.sender}}))((function(e){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"row justify-content-center",children:Object(d.jsx)("img",{className:P.a.custImg,alt:"profile",src:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"})}),Object(d.jsxs)("div",{className:P.a.custDetails,children:[Object(d.jsxs)("div",{className:P.a.custElement+" row justify-content-center",children:[Object(d.jsx)("h3",{children:"UserName"}),Object(d.jsx)("p",{children:e.sender.username})]}),Object(d.jsxs)("div",{className:P.a.custElement,children:[Object(d.jsx)("h3",{children:"Email"}),Object(d.jsx)("p",{children:e.sender.email})]}),Object(d.jsxs)("div",{className:P.a.custElement+" row justify-content-center",children:[Object(d.jsx)("h3",{children:"Mobile Number"}),Object(d.jsx)("p",{children:e.sender.mobileNumber})]}),Object(d.jsxs)("div",{className:P.a.custElement+" row justify-content-center",children:[Object(d.jsx)("h3",{children:"Current Balance"}),Object(d.jsx)("p",{children:e.sender.currentBalance})]})]}),Object(d.jsxs)("div",{className:P.a.btnGroup,children:[Object(d.jsx)(l.b,{to:"/receiver",children:Object(d.jsx)("button",{className:"btn btn-primary",children:"Proceed"})}),Object(d.jsx)(l.b,{to:"/customers",children:Object(d.jsx)("button",{className:"btn btn-danger",children:"Go Back"})})]})]})})),J=n(44),V=n.n(J),W=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.props.users.filter((function(t){return t.email!==e.props.sender.email}));return Object(d.jsxs)("div",{className:"container py-5",children:[Object(d.jsx)("h1",{children:"Send money to...."}),Object(d.jsxs)("div",{className:V.a.custRow,children:[Object(d.jsx)("p",{children:"Sl No"}),Object(d.jsx)("p",{children:"User Name"}),Object(d.jsx)("p",{children:"Email"}),Object(d.jsx)("p",{children:"Mobile Number"}),Object(d.jsx)("p",{children:"Current Balance"})]}),t.map((function(t,n){return Object(d.jsx)(F,{user:t,index:n+1,clik:function(){return e.props.addReceiver(t)},link:"/transfer"},"_"+Math.random().toString(36).substr(2,9))}))]})}}]),n}(r.Component),X=Object(x.b)((function(e){return{users:e.user.users,sender:e.transfer.sender}}),(function(e){return{addReceiver:function(t){return e(function(e){return k.b.success("Receiver selected"),{type:y,data:e}}(t))}}}))(W),q=n(17),K=n(20),Q=n.n(K),Y=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={amount:""},e.onAmountChange=function(t){e.setState({amount:t.target.value})},e.balanceUpdates=function(){if(/^\d+$/.test(e.state.amount))if(e.state.amount>e.props.sender.currentBalance){k.b.error("Transfer amount larger than sender balance");var t={sender:e.props.sender.email,receiver:e.props.receiver.email,amount:parseInt(e.state.amount),state:"failure"};e.props.addTransaction(t)}else{e.props.updateTransfer();var n=Object(q.a)(Object(q.a)({},e.props.sender),{},{currentBalance:e.props.sender.currentBalance-e.state.amount}),r=Object(q.a)(Object(q.a)({},e.props.receiver),{},{currentBalance:parseInt(e.props.receiver.currentBalance)+parseInt(e.state.amount)});e.props.updateBalances(n,r);var s={sender:n.email,receiver:r.email,amount:parseInt(e.state.amount),state:"success"};e.props.addTransaction(s)}else{k.b.error("Invalid amount");var c={sender:e.props.sender.email,receiver:e.props.receiver.email,amount:parseInt(e.state.amount),state:"failure"};e.props.addTransaction(c)}},e}return Object(p.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"container mt-5",children:Object(d.jsxs)("div",{className:Q.a.outerForm+" shadow bg-white py-4",children:[Object(d.jsx)("h1",{children:"Transfer Form"}),Object(d.jsxs)("form",{className:Q.a.transferForm,children:[Object(d.jsxs)("div",{className:Q.a.formRow,children:[Object(d.jsx)("input",{type:"text",disabled:!0,name:"sender",value:"Sender :: "+this.props.sender.username}),Object(d.jsx)("input",{type:"text",disabled:!0,value:"Balance :: "+this.props.sender.currentBalance})]}),Object(d.jsxs)("div",{className:Q.a.formRow,children:[Object(d.jsx)("input",{type:"text",disabled:!0,name:"receiver",value:"Receiver :: "+this.props.receiver.username}),Object(d.jsx)("input",{type:"text",disabled:!0,value:"Balance :: "+this.props.receiver.currentBalance})]}),Object(d.jsx)("input",{type:"text",placeholder:"Transfer Amount",value:this.state.amount,onChange:this.onAmountChange,className:Q.a.amountInput}),Object(d.jsxs)("div",{className:Q.a.btnGroup,children:[Object(d.jsx)(l.b,{to:"/result",children:Object(d.jsx)("button",{onClick:this.balanceUpdates,className:"btn btn-success",children:"Transfer"})}),Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("button",{className:"btn btn-danger",children:"Cancel"})})]})]})]})})}}]),n}(r.Component),$=Object(x.b)((function(e){return{sender:e.transfer.sender,receiver:e.transfer.receiver}}),(function(e){return{updateBalances:function(t,n){return e(C(t,n))},updateTransfer:function(){return e({type:w})},addTransaction:function(t){return e(function(e){return function(t){_.a.post("transactions.json",e).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))}}(t))}}}))(Y),Z=(n(79),n(45)),ee=n.n(Z),te=Object(x.b)((function(e){return{transfer:e.transfer.transfer}}))((function(e){return Object(d.jsxs)("div",{className:ee.a.result+" container",children:[Object(d.jsx)("img",{className:"my-3",alt:"success",src:e.transfer?"/success1.jpg":"/fail.jpg"}),Object(d.jsxs)("h3",{children:["Transfer ",e.transfer?"Successful":"Failed"]}),Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("button",{className:"btn btn-danger",children:"Go back to Home"})})]})})),ne=n(46),re=n.n(ne),se=n(47),ce=n.n(se),ae=function(e){var t=null;return"success"===e.transaction.state?t={borderRight:"5px solid green"}:"failure"===e.transaction.state&&(t={borderRight:"5px solid red"}),Object(d.jsxs)("div",{className:ce.a.custRow1,style:t,children:[Object(d.jsx)("p",{children:e.index}),Object(d.jsx)("p",{children:e.transaction.sender}),Object(d.jsx)("p",{children:e.transaction.receiver}),Object(d.jsx)("p",{children:e.transaction.amount}),Object(d.jsx)("p",{children:e.transaction.state})]})},ie=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"container py-5",children:[Object(d.jsx)("h1",{children:"Transactions"}),Object(d.jsxs)("div",{className:re.a.custRow,children:[Object(d.jsx)("p",{children:"Sl No"}),Object(d.jsx)("p",{children:"Sender"}),Object(d.jsx)("p",{children:"Receiver"}),Object(d.jsx)("p",{children:"Amount"}),Object(d.jsx)("p",{children:"State"})]}),Object.keys(this.props.transactions).map((function(t,n){return Object(d.jsx)(ae,{transaction:e.props.transactions[t],index:n+1},"_"+Math.random().toString(36).substr(2,9))}))]})}}]),n}(r.Component),oe=Object(x.b)((function(e){return{transactions:e.transaction.transactions}}))(ie),ue=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/transfers",component:oe}),Object(d.jsx)(i.a,{path:"/result",component:te}),Object(d.jsx)(i.a,{path:"/transfer",component:$}),Object(d.jsx)(i.a,{path:"/receiver",component:X}),Object(d.jsx)(i.a,{path:"/customer/:id",component:z}),Object(d.jsx)(i.a,{path:"/customers",component:G}),Object(d.jsx)(i.a,{path:"/",component:A})]}),Object(d.jsx)(k.a,{})]})};var le=function(){return Object(d.jsx)(l.a,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(ue,{})})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))},je=(n(80),n(81),n(19)),be=n(48),pe=function(e,t){return Object(q.a)(Object(q.a)({},e),t)},me={users:[],loading:!1},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return pe(e,{users:t.data});default:return e}},fe={sender:{id:"",username:"",email:"",mobileNumber:"",currentBalance:""},receiver:{id:"",username:"",email:"",mobileNumber:"",currentBalance:""},transfer:!1},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return pe(e,{sender:{id:t.data.id,username:t.data.username,email:t.data.email,mobileNumber:t.data.mobileNumber,currentBalance:t.data.currentBalance}});case y:return pe(e,{receiver:{id:t.data.id,username:t.data.username,email:t.data.email,mobileNumber:t.data.mobileNumber,currentBalance:t.data.currentBalance}});case w:return pe(e,{transfer:!0});case R:return pe(e,{transfer:!1});default:return e}},xe={transactions:[]},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return pe(e,{transactions:t.data});default:return e}},_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||je.d;_.a.defaults.baseURL="https://basic-banking-app-abfa0-default-rtdb.firebaseio.com/";var Ne=Object(je.c)({user:he,transfer:Oe,transaction:ve}),ge=Object(je.e)(Ne,_e(Object(je.a)(be.a)));a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x.a,{store:ge,children:Object(d.jsx)(le,{})})}),document.getElementById("root")),de()}},[[82,1,2]]]);
//# sourceMappingURL=main.e7a91e06.chunk.js.map