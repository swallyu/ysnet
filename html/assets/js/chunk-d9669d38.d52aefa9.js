(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9669d38"],{"49aa":function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"company_info"},[i("div",{staticClass:"search_part"},[i("el-input",{attrs:{placeholder:"请输入企业名"},model:{value:t.filter.name,callback:function(e){t.$set(t.filter,"name",e)},expression:"filter.name"}}),i("el-input",{attrs:{placeholder:"请输入地区"},model:{value:t.filter.area,callback:function(e){t.$set(t.filter,"area",e)},expression:"filter.area"}}),i("el-button",{attrs:{type:"primary",size:"small"}},[t._v("搜索")])],1),i("div",{staticClass:"table_part"},[i("div",{staticClass:"handle_wrap"},[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.addClick}},[t._v("增加")])],1),i("data-table",{ref:"listTable",attrs:{fetch:t.fetch,heightBool:!0}},[i("data-table-column",{attrs:{column:"comName",title:"企业名",optional:"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.comName))])]}}])}),i("data-table-column",{attrs:{column:"area",title:"地区"}}),i("data-table-column",{attrs:{column:"areaDetails",title:"详细地址"}}),i("data-table-column",{attrs:{column:"person",title:"联系人"}}),i("data-table-column",{attrs:{column:"phone",title:"手机号码"}}),i("data-table-column",{attrs:{column:"job",title:"行业"}}),i("data-table-column",{attrs:{optional:"true",title:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{staticClass:"view-btn",attrs:{type:"text"},on:{click:function(i){return t.viewClick(e)}}},[t._v("查看设备")]),i("el-button",{staticClass:"edit-btn",attrs:{type:"text"},on:{click:function(i){return t.editClick(e)}}},[t._v("修改")]),i("el-button",{staticClass:"del-btn",attrs:{type:"text"},on:{click:function(i){return t.delClick(e)}}},[t._v("删除")])]}}])})],1)],1),i("el-dialog",{attrs:{title:t.handleDialog.title,visible:t.handleDialog.dialogVisible,width:t.handleDialog.modalWidth,top:t.handleDialog.top},on:{"update:visible":function(e){return t.$set(t.handleDialog,"dialogVisible",e)}}},[i("handleDialog",{attrs:{id:t.handleDialog.handleId,devices:t.handleDialog.devices,startTime:t.handleDialog.startTime,endTime:t.handleDialog.endTime},on:{close:t.closeHandle}})],1),i("el-dialog",{attrs:{title:t.viewDialog.title,visible:t.viewDialog.dialogVisible,width:t.viewDialog.modalWidth,top:t.viewDialog.top},on:{"update:visible":function(e){return t.$set(t.viewDialog,"dialogVisible",e)}}},[i("viewDialog",{attrs:{id:t.viewDialog.handleId,devices:t.viewDialog.devices,startTime:t.viewDialog.startTime,endTime:t.viewDialog.endTime},on:{close:t.closeHandle}})],1)],1)},a=[],n=i("b66b"),o={data:function(){return{filter:{name:"",area:""},fetch:n["b"],handleDialog:{title:"",dialogVisible:!1,modalWidth:"800px",top:"15vh",handleId:""},viewDialog:{title:"",dialogVisible:!1,modalWidth:"800px",top:"10vh",handleId:""}}},methods:{dialog:function(t,e,i,l){t.dialogVisible=e,t.title=i,t.handleId=l},addClick:function(){this.dialog(this.handleDialog,!0,"新增","")},viewClick:function(t){this.dialog(this.viewDialog,!0,"查看设备",t.row.id)},editClick:function(t){this.dialog(this.handleDialog,!0,"编辑",t.row.id)},delHandle:function(t){var e=this;this.$confirm("此操作将删除ID ".concat(this.delId," 设备，是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message.success("删除成功"),e.delId=""}).catch(function(){return e.delId="",!1})},delClick:function(t){this.delId=t.row.id,this.delHandle()},closeHandle:function(){this.handleDialog.dialogVisible=!1,this.viewDialog.dialogVisible=!1,this.$refs.listTable.reload()}},components:{handleDialog:function(){return i.e("chunk-0ea7004a").then(i.bind(null,"58ae"))},viewDialog:function(){return i.e("chunk-27018789").then(i.bind(null,"2c08"))}}},d=o,s=i("6691"),c=Object(s["a"])(d,l,a,!1,null,null,null);e["default"]=c.exports},b66b:function(t,e,i){"use strict";function l(t){return $http({url:"/company_info/list",method:"get",params:t}).then(function(t){return t.data})}function a(t){return $http({url:"/company_info/info?id="+t,method:"get"}).then(function(t){return t.data})}function n(t){return $http({url:"/company_dev/list",method:"get",params:t}).then(function(t){return t.data})}i.d(e,"b",function(){return l}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return n})}}]);