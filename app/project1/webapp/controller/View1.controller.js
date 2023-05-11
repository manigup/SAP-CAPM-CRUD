sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.project1.controller.View1", {

            onInit: function () {
                this.getView().setModel(new sap.ui.model.json.JSONModel({}), "Create");
            },

            onBtnPress: function () {
                const data = this.getView().getModel("Create").getData();

                this.getView().getModel().create("/Books", data, {
                    success: () => {
                        sap.m.MessageBox.success("Record Created", {
                            onClose: () => {
                                this.getView().getModel("Create").setData({});
                            }
                        });
                    },
                    error: (err) => {
                        sap.m.MessageBox.error(err.responseText)
                    }
                });
            }
        });
    });
