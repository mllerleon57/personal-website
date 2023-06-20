sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("leon.cv.personalcv.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "leon.cv.personalcv",
                    async: true,
                    manifest: true,
                },
            });
        },
    });
});
