/*global QUnit*/

sap.ui.define([
	"routing/routing/controller/Routing.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Routing Controller");

	QUnit.test("I should test the Routing controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
