(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bd86aa5"],{"121a":function(e,t,a){"use strict";var n=a("b775");t["a"]={getDataPage:function(e){return Object(n["a"])({url:"/SqlTools/GetPage",method:"post",data:e})},DataInsert:function(e){return Object(n["a"])({url:"/SqlTools/insertData",method:"post",data:e})},DataUpdate:function(e){return Object(n["a"])({url:"/SqlTools/updateData",method:"post",data:e})},DelDataByid:function(e,t){return Object(n["a"])({url:"/SqlTools/DelDataByid",method:"get",params:{id:e,notes:t}})},getDataById:function(e){return Object(n["a"])({url:"/SqlTools/getDataById",method:"get",params:{id:e}})},GetSqlPage:function(e){return Object(n["a"])({url:"/SqlTools/GetSqlPage",method:"post",data:e})}}},"25f0":function(e,t,a){"use strict";var n=a("6eeb"),i=a("825a"),r=a("d039"),l=a("ad6d"),o="toString",s=RegExp.prototype,c=s[o],u=r((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),d=c.name!=o;(u||d)&&n(RegExp.prototype,o,(function(){var e=i(this),t=String(e.source),a=e.flags,n=String(void 0===a&&e instanceof RegExp&&!("flags"in s)?l.call(e):a);return"/"+t+"/"+n}),{unsafe:!0})},"8d81":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"plan"},[a("el-row",{staticClass:"page-tools"},[a("el-col",{attrs:{span:18}},[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:e.addDialogOpen}},[e._v("添加记录")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.dataDetailClick(0)}}},[e._v("测试SQL")])],1),a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[a("el-button-group",[a("el-button",{attrs:{size:"mini"},on:{click:e.exportCsvEvent}},[e._v("Excel")]),a("el-button",{attrs:{size:"mini"},on:{click:e.fetchData}},[a("i",{staticClass:"el-icon-refresh"})]),a("el-checkbox",{attrs:{label:"换行",size:"mini",border:""},model:{value:e.isLineWarp,callback:function(t){e.isLineWarp=t},expression:"isLineWarp"}})],1)],1)],1),a("elx-editable",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"elxTable",staticStyle:{width:"100%"},attrs:{config:{render:"scroll"},data:e.tableData.data,height:e.tableHeight,"tooltip-effect":"dark",border:"","highlight-current-row":""},on:{"update:data":function(t){return e.$set(e.tableData,"data",t)},"selection-change":e.mainSelectionChange}},[a("elx-editable-column",{attrs:{type:"selection",width:"35"}}),a("elx-editable-column",{attrs:{fixed:"left",label:"操作",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.editClick(t.row)}}},[a("i",{staticClass:"el-icon-edit"})]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.delClick(t.row,t.$index)}}},[a("i",{staticClass:"el-icon-delete"})])]}}])}),e._l(e.listQuery.ColumnHeader,(function(t,n){return a("elx-editable-column",{key:t.field,attrs:{prop:t.field,"min-width":t.width,sortable:"","show-overflow-tooltip":!e.isLineWarp},scopedSlots:e._u([{key:"default",fn:function(n){return"title"==t.field?[a("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.dataDetailClick(n.row["id"])}}},[e._v(e._s(n.row[t.field]))])]:void 0}}],null,!0)},[a("template",{slot:"header"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"col.search"}],attrs:{size:"mini",placeholder:t.title},domProps:{value:t.search},on:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.changeSearch(t,n)},click:function(e){e.stopPropagation()},input:function(a){a.target.composing||e.$set(t,"search",a.target.value)}}}),a("i",{directives:[{name:"show",rawName:"v-show",value:t.search,expression:"col.search"}],staticClass:"el-icon-error closeicon",staticStyle:{"margin-left":"-16px"},on:{click:function(a){t.search="",e.changeSearch(t,n),a.stopPropagation()}}})])],2)}))],2),a("el-row",{staticClass:"table-footer"},[a("el-pagination",{attrs:{background:"","current-page":e.listQuery.currentPage,"page-size":e.listQuery.pageSize,"page-sizes":[100,200,500,1e3,3e4],layout:"sizes,prev, pager, next,total",total:e.tableData.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange,"update:currentPage":function(t){return e.$set(e.listQuery,"currentPage",t)},"update:current-page":function(t){return e.$set(e.listQuery,"currentPage",t)}}})],1),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:e.dialogVisible,title:e.dialogTitle,"append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.ruleFormLoading,expression:"ruleFormLoading"}],ref:"ruleForm",attrs:{size:"small",model:e.col,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{model:{value:e.col.title,callback:function(t){e.$set(e.col,"title",t)},expression:"col.title"}})],1),a("el-form-item",{attrs:{label:"说明"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.col.notes,callback:function(t){e.$set(e.col,"notes",t)},expression:"col.notes"}})],1),a("el-form-item",{attrs:{label:"sql语句"}},[a("el-input",{attrs:{type:"textarea",rows:"10"},model:{value:e.col.sql,callback:function(t){e.$set(e.col,"sql",t)},expression:"col.sql"}})],1),a("el-form-item",{attrs:{label:"数据库"}},[a("el-select",{attrs:{placeholder:"请选择数据库"},model:{value:e.col.database,callback:function(t){e.$set(e.col,"database",t)},expression:"col.database"}},[a("el-option",{attrs:{label:"mes数据库",value:"mes"}}),a("el-option",{attrs:{label:"postgre数据库",value:"postgre"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.btnSavaLoading},on:{click:function(t){return e.AddSubmit("ruleForm")}}},[e._v("保存")]),a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")])],1)],1)],1)],1)},i=[],r=(a("99af"),a("4160"),a("c975"),a("baa5"),a("a434"),a("dca8"),a("b64b"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("159b"),a("96cf"),a("1da1")),l=a("121a"),o={components:{},data:function(){return{tableHeight:window.innerHeight-150,mainSelection:[],tableData:{data:null,total:0},isLineWarp:!1,listLoading:!1,listQuery:{pageSize:100,currentPage:1,ext:"",ColumnHeader:[]},dialogVisible:!1,dialogTitle:"添加数据",isAdd:!1,ruleFormLoading:!1,btnSavaLoading:!1,col:{id:0,title:"",notes:"",sql:"",levelshow:"",createtime:null,createuid:"",updatetime:null,updateuid:"",isdelete:!1,database:""}}},created:function(){document.title="自定义sql语句列表",this.fetchData()},mounted:function(){var e=this;window.onresize=function(){e.tableHeight=window.innerHeight-150}},methods:{changeSearch:function(e,t){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.fetchData();case 2:case"end":return e.stop()}}),e)})))()},dataDetailClick:function(e){var t=this.$router.resolve({path:"/tools/sqlExc/"+e});window.open(t.href,"_blank")},addDialogOpen:function(){this.isAdd=!0,this.col={id:0,title:"",notes:"",sql:"",levelshow:"",createtime:null,createuid:"",updatetime:null,updateuid:"",isdelete:!1,database:""},this.dialogVisible=!0},AddSubmit:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.btnSavaLoading=!0,!e.isAdd){t.next=7;break}return t.next=4,l["a"].DataInsert(e.col);case 4:a=t.sent,t.next=10;break;case 7:return t.next=9,l["a"].DataUpdate(e.col);case 9:a=t.sent;case 10:e.$message.success(a.msg),e.fetchData(),e.btnSavaLoading=!1,e.dialogVisible=!1;case 14:case"end":return t.stop()}}),t)})))()},fetchData:function(){var e=this;this.listLoading=!0,l["a"].getDataPage(this.listQuery).then((function(t){e.tableData.data=Object.freeze(t.data),e.tableData.total=t.total,0==Object.keys(e.listQuery.ColumnHeader).length&&(e.listQuery.ColumnHeader=t.columns),e.listLoading=!1})).catch((function(){e.listLoading=!1}))},handleSizeChange:function(e){this.listQuery.pageSize=e,this.fetchData()},handleCurrentChange:function(e){this.listQuery.currentPage=e,this.fetchData()},editClick:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.dialogVisible=!0,t.btnSavaLoading=!1,t.isAdd=!1,t.ruleFormLoading=!0,t.dialogTitle="修改数据",a.next=7,l["a"].getDataById(e.id);case 7:n=a.sent,t.col=n.data,t.ruleFormLoading=!1;case 10:case"end":return a.stop()}}),a)})))()},delClick:function(e,t){var a=this;this.tableData.istableedit?this.$prompt("请输入删除的原因","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"内容不能为空"}).then((function(e){var n=e.value;l["a"].DelDataByid(a.col.id,n).then((function(e){a.tableData.data.splice(t,1),a.$message.success(e.msg)})).catch((function(e){a.$message.error("删除失败"+e.msg)}))})):this.$message("您没有删除整行数据的权限。")},mainSelectionChange:function(e){this.mainSelection=e},exportCsvEvent:function(){var e="[{";this.listQuery.ColumnHeader.forEach((function(t){e+='"'+t.field+'":"'+t.title+'",'})),e=e.substring(0,e.lastIndexOf(",")),e+="}]";for(var t=JSON.parse(e),a=t.concat(this.tableData.data),n=0,i=a.length;n<i;n++)for(var r in a[n]){var l=a[n][r];null!=l&&-1!=l.toString().indexOf(",")&&(a[n][r]=a[n][r].replace(/,/g,"，")),null!=l&&-1!=l.toString().indexOf("\r\n")&&(a[n][r]=a[n][r].replace(/[\r\n]/g,""))}this.$refs.elxTable.exportCsv({filename:"Table",data:a,original:!0})},handleFilterChange:function(){}}},s=o,c=a("2877"),u=Object(c["a"])(s,n,i,!1,null,"7f63127f",null);t["default"]=u.exports},b64b:function(e,t,a){var n=a("23e7"),i=a("7b0b"),r=a("df75"),l=a("d039"),o=l((function(){r(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(e){return r(i(e))}})},baa5:function(e,t,a){var n=a("23e7"),i=a("e58c");n({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},bb2f:function(e,t,a){var n=a("d039");e.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},dca8:function(e,t,a){var n=a("23e7"),i=a("bb2f"),r=a("d039"),l=a("861d"),o=a("f183").onFreeze,s=Object.freeze,c=r((function(){s(1)}));n({target:"Object",stat:!0,forced:c,sham:!i},{freeze:function(e){return s&&l(e)?s(o(e)):e}})},e58c:function(e,t,a){"use strict";var n=a("fc6a"),i=a("a691"),r=a("50c4"),l=a("a640"),o=a("ae40"),s=Math.min,c=[].lastIndexOf,u=!!c&&1/[1].lastIndexOf(1,-0)<0,d=l("lastIndexOf"),f=o("indexOf",{ACCESSORS:!0,1:0}),g=u||!d||!f;e.exports=g?function(e){if(u)return c.apply(this,arguments)||0;var t=n(this),a=r(t.length),l=a-1;for(arguments.length>1&&(l=s(l,i(arguments[1]))),l<0&&(l=a+l);l>=0;l--)if(l in t&&t[l]===e)return l||0;return-1}:c},f183:function(e,t,a){var n=a("d012"),i=a("861d"),r=a("5135"),l=a("9bf2").f,o=a("90e3"),s=a("bb2f"),c=o("meta"),u=0,d=Object.isExtensible||function(){return!0},f=function(e){l(e,c,{value:{objectID:"O"+ ++u,weakData:{}}})},g=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!r(e,c)){if(!d(e))return"F";if(!t)return"E";f(e)}return e[c].objectID},p=function(e,t){if(!r(e,c)){if(!d(e))return!0;if(!t)return!1;f(e)}return e[c].weakData},b=function(e){return s&&h.REQUIRED&&d(e)&&!r(e,c)&&f(e),e},h=e.exports={REQUIRED:!1,fastKey:g,getWeakData:p,onFreeze:b};n[c]=!0}}]);