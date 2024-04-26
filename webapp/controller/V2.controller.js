sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("routing.routing.controller.V2", {
		
		onInit: function() {
			this.getOwnerComponent().getRouter().attachRoutePatternMatched(this.matchV2,this);
		  },
		  
		  matchV2:function(evt){
	  
		  var val=evt.getParameter('arguments').val;
		  this.byId("inp2").setValue(val);
		  },
		  
		  onBack:function(){
			  var Router = sap.ui.core.UIComponent.getRouterFor(this);
			  Router.navTo("V1");
		  },

  

  });

});