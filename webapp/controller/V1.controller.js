sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("routing.routing.controller.V1", {
		
		onInit: function() {
			this.oDataModel= new sap.ui.model.odata.ODataModel("/sap/opu/odata/iwbep/GWSAMPLE_BASIC/");
			 this.getOwnerComponent().getRouter().attachRoutePatternMatched(this.matchV1,this);
			 this.oDataModel.read("/SalesOrderSet('0500000000')",{
			 urlParameters:{
				 "$expand":['ToLineItems','ToBusinessPartner']
			 },
			 success:function(odata){
				 debugger;
			 },error:function(oErr){
				 
			 }});
			 
	   
		   
	   },
	   matchV1:function(){
		   
	   },
	   onGo:function(){
		   var value=this.byId("inp1").getValue();
		   this.Router = sap.ui.core.UIComponent.getRouterFor(this);
		   this.Router.navTo("V2",{val:value});
	   },



});

});