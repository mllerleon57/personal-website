sap.ui.define(
    ["./BaseController", "sap/m/library"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, sapMLib) {
        "use strict";

        return Controller.extend("leon.cv.personalcv.controller.MainView", {
            openUrl: function (urlPart, newTab) {
                const url = urlPart
                const { URLHelper } = sapMLib; // sapMLib required from "sap/m/library"
                URLHelper.redirect(url, newTab);
            },
        });
    }
);
