sap.ui.define([
	"ovly/extensible/controller/BaseController",
	"ovly/extensible/model/formatter"
], function (BaseController, Formatador) {
	"use strict";

	return BaseController.extend("ovly.extensible.controller.S0", {
		
		meuFormatador: Formatador,

		onInit: function () {

		},

		onItemPress: function (oEvent) {
			var oParameter = oEvent.getParameters();
			var oListItem = oParameter.listItem;
			var oContext = oListItem.getBindingContext();
			var sProductId = oContext.getProperty("Id");
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail", {
				id: sProductId
			});
		}

	});

});