/*global QUnit*/

sap.ui.define([
	"opensap.com./opensap/controller/Supplier.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Supplier Controller");

	QUnit.test("I should test the Supplier controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
