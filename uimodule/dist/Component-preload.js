//@ui5-bundle leon/cv/personalcv/Component-preload.js
sap.ui.require.preload({
	"leon/cv/personalcv/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","leon/cv/personalcv/model/models"],function(e,t,i){"use strict";return e.extend("leon.cv.personalcv.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"leon/cv/personalcv/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("leon.cv.personalcv.controller.App",{onInit(){}})});
},
	"leon/cv/personalcv/controller/BaseController.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/UIComponent","leon/cv/personalcv/model/formatter"],function(e,t,o,n){"use strict";return e.extend("leon.cv.personalcv.controller.BaseController",{formatter:n,getModel:function(e){return this.getView().getModel(e)},setModel:function(e,t){return this.getView().setModel(e,t)},getResourceBundle:function(){return this.getOwnerComponent().getModel("i18n").getResourceBundle()},navTo:function(e,t,o){this.getRouter().navTo(e,t,o)},getRouter:function(){return o.getRouterFor(this)},onNavBack:function(){const e=t.getInstance().getPreviousHash();if(e!==undefined){window.history.back()}else{this.getRouter().navTo("appHome",{},true)}}})});
},
	"leon/cv/personalcv/controller/MainView.controller.js":function(){
sap.ui.define(["./BaseController","sap/m/library"],function(e,n){"use strict";return e.extend("leon.cv.personalcv.controller.MainView",{openUrl:function(e,r){const o=e;const{URLHelper:t}=n;t.redirect(o,r)}})});
},
	"leon/cv/personalcv/i18n/i18n.properties":'# This is the resource bundle for leon.cv.personalcv\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Leon M\\u00f6ller\n\n#YDES: Application description\nappDescription=Description of leon.cv.personalcv\n#XTIT: Main view title\ntitle=Leon M\\u00f6ller',
	"leon/cv/personalcv/manifest.json":'{"_version":"1.42.0","sap.app":{"id":"leon.cv.personalcv","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap-ux/fiori-freestyle-writer:basic","version":"0.14.9"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"dependencies":{"minUI5Version":"1.102.0","libs":{"sap.m":{},"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"leon.cv.personalcv.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"leon.cv.personalcv.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteMainView","pattern":":?query:","target":["TargetMainView"]}],"targets":{"TargetMainView":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"MainView","viewName":"MainView"}}},"rootView":{"viewName":"leon.cv.personalcv.view.App","type":"XML","async":true,"id":"App"}}}',
	"leon/cv/personalcv/model/formatter.js":function(){
sap.ui.define([],function(){"use strict";return{}});
},
	"leon/cv/personalcv/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){const i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"leon/cv/personalcv/view/App.view.xml":'<mvc:View controllerName="leon.cv.personalcv.controller.App" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:mvc="sap.ui.core.mvc" displayBlock="true" xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"leon/cv/personalcv/view/MainView.view.xml":'<mvc:View\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns:core="sap.ui.core"\n    xmlns="sap.uxap"\n    xmlns:layout="sap.ui.layout"\n    xmlns:m="sap.m"\n    xmlns:f="sap.ui.layout.form"\n    controllerName="leon.cv.personalcv.controller.MainView"\n    height="100%"\n><ObjectPageLayout\n        id="ObjectPageLayout"\n        enableLazyLoading="true"\n        upperCaseAnchorBar="false"\n    ><headerTitle><ObjectPageDynamicHeaderTitle><expandedHeading><m:Title\n                        text="Leon Möller"\n                        wrapping="true"\n                    /></expandedHeading><snappedHeading><m:FlexBox\n                        fitContainer="true"\n                        alignItems="Center"\n                    ><m:Avatar\n                            src="./assets/me.png"\n                            class="sapUiTinyMarginEnd"\n                        /><m:Title\n                            text="Leon Möller"\n                            wrapping="true"\n                        /></m:FlexBox></snappedHeading><expandedContent><m:Text text="SAP UI5, Fiori &amp; ABAP Expert" /></expandedContent><snappedContent><m:Text text="SAP UI5, Fiori &amp; ABAP Expert" /></snappedContent><snappedTitleOnMobile><m:Title text="SAP UI5, Fiori &amp; ABAP Expert" /></snappedTitleOnMobile></ObjectPageDynamicHeaderTitle></headerTitle><headerContent><m:FlexBox\n                wrap="Wrap"\n                fitContainer="true"\n            ><m:Avatar\n                    class="sapUiSmallMarginEnd"\n                    src="./assets/me.png"\n                    displaySize="XL"\n                /><layout:VerticalLayout class="sapUiSmallMarginBeginEnd"><m:Label text="Inwerken AG" /><m:Label text="Hannover, Germany" /><m:ProgressIndicator\n                        width="170px"\n                        percentValue="100"\n                        state="Error"\n                        displayValue="Current capacity: 100%"\n                    /></layout:VerticalLayout><layout:VerticalLayout class="sapUiSmallMarginBeginEnd"><m:Label\n                        width="300px"\n                        wrapping="true"\n                        text="SAP Fiori, UI5, and ABAP specialist since 2018, delivering successful consulting and development projects."\n                    /></layout:VerticalLayout><layout:VerticalLayout class="sapUiSmallMarginBeginEnd"><m:Label text="Contact" /><layout:HorizontalLayout><m:Image\n                            height="30px"\n                            press=".openUrl(\'https://www.linkedin.com/in/leon-m%C3%B6ller-70479927b/\', true)"\n                            src="./assets/linkedin.svg"\n                        /><m:Image\n                            height="30px"\n                            press=".openUrl(\'https://www.xing.com/profile/Leon_Moeller17/cv\', true)"\n                            src="./assets/xing.svg"\n                            class="sapUiSmallMarginBegin"\n                        /></layout:HorizontalLayout></layout:VerticalLayout></m:FlexBox></headerContent><sections><ObjectPageSection\n                titleUppercase="false"\n                title="Introduction"\n            ><subSections><ObjectPageSubSection titleUppercase="false"><blocks><m:VBox class="sapUiSmallMargin"><f:SimpleForm\n                                    minWidth="1024"\n                                    maxContainerCols="2"\n                                    editable="false"\n                                    layout="ResponsiveGridLayout"\n                                    labelSpanL="3"\n                                    labelSpanM="3"\n                                    emptySpanL="4"\n                                    emptySpanM="4"\n                                    columnsL="1"\n                                    columnsM="1"\n                                    width="auto"\n                                    class="sapUxAPObjectPageSubSectionAlignContent"\n                                ><f:content><m:Label text="About me" /><m:FormattedText\n                                            htmlText="&lt;ul&gt;&lt;li&gt;SAP Fiori, UI5, and ABAP experience since 2018&lt;/li&gt;\n\t\t\t\t\t\t\t\t\t\t\t\t&lt;li&gt;Delivering successful projects, gaining valuable experience&lt;/li&gt;\n\t\t\t\t\t\t\t\t\t\t\t\t&lt;li&gt;Eager learner, open communicator, and knowledge sharer&lt;/li&gt;\n\t\t\t\t\t\t\t\t\t\t\t\t&lt;li&gt;Keeping up with the latest SAP advancements&lt;/li&gt;\n\t\t\t\t\t\t\t\t\t\t\t\t&lt;li&gt;Willing to expand skills in cloud, analytics, and integration&lt;/li&gt;\n\t\t\t\t\t\t\t\t\t\t\t\t&lt;li&gt;Excited to connect and collaborate with fellow professionals&lt;/li&gt;\n\t\t\t\t\t\t\t\t\t\t\t\t&lt;/ul&gt;"\n                                        /></f:content></f:SimpleForm></m:VBox></blocks></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection\n                titleUppercase="false"\n                title="Areas of expertise"\n            ><subSections><ObjectPageSubSection titleUppercase="false"><blocks><m:VBox class="sapUiSmallMargin"><f:SimpleForm\n                                    minWidth="1024"\n                                    maxContainerCols="2"\n                                    editable="false"\n                                    layout="ResponsiveGridLayout"\n                                    labelSpanL="3"\n                                    labelSpanM="3"\n                                    emptySpanL="4"\n                                    emptySpanM="4"\n                                    columnsL="1"\n                                    columnsM="1"\n                                    width="auto"\n                                    class="sapUxAPObjectPageSubSectionAlignContent"\n                                ><f:content><m:Label text="Technical" /><m:Text\n                                            text="UI5, Fiori, ABAP, CDS, Git SCM, Node.js, JavaScript, TypeScript"\n                                        /><m:Label text="SAP Modules" /><m:Text\n                                            text="Project System, Production Planning, Plant Maintenance, Human Resources"\n                                        /></f:content></f:SimpleForm></m:VBox></blocks></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection\n                titleUppercase="false"\n                title="Work experience"\n            ><subSections><ObjectPageSubSection titleUppercase="false"><blocks><m:VBox class="sapUiSmallMargin"><f:SimpleForm\n                                    minWidth="1024"\n                                    maxContainerCols="2"\n                                    editable="false"\n                                    layout="ResponsiveGridLayout"\n                                    labelSpanL="3"\n                                    labelSpanM="3"\n                                    emptySpanL="4"\n                                    emptySpanM="4"\n                                    columnsL="1"\n                                    columnsM="1"\n                                    width="auto"\n                                    class="sapUxAPObjectPageSubSectionAlignContent"\n                                ><f:content><m:Label text="09/2018 - present" /><m:VBox><m:FormattedText\n                                                htmlText="&lt;strong&gt;SAP Developer&lt;strong&gt;"\n                                            /><m:Text\n                                                text="Inwerken AG, Isernhagen, Germany"\n                                            /><m:Text\n                                                class="sapUiTinyMarginTop"\n                                                text="Consulting, conceptual design, development and maintenance of complex custom UI5 applications and integration of oData services using Test-Driven-Development."\n                                            /><m:Text\n                                                class="sapUiTinyMarginTop"\n                                                text="Development in VS code and ABAP for Eclipse."\n                                            /></m:VBox></f:content></f:SimpleForm></m:VBox></blocks></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection\n                titleUppercase="false"\n                title="Education"\n            ><subSections><ObjectPageSubSection titleUppercase="false"><blocks><m:VBox class="sapUiSmallMargin"><f:SimpleForm\n                                    minWidth="1024"\n                                    maxContainerCols="2"\n                                    editable="false"\n                                    layout="ResponsiveGridLayout"\n                                    labelSpanL="3"\n                                    labelSpanM="3"\n                                    emptySpanL="4"\n                                    emptySpanM="4"\n                                    columnsL="1"\n                                    columnsM="1"\n                                    width="auto"\n                                    class="sapUxAPObjectPageSubSectionAlignContent"\n                                ><f:content><m:Label text="08/2022 - present" /><m:VBox><m:FormattedText\n                                                htmlText="&lt;strong&gt;Business Administration and Business Psychology&lt;/strong&gt;&lt;br&gt;Bachelor of Science"\n                                            /><m:Text\n                                                class="sapUiTinyMarginTop"\n                                                text="FOM – Hochschule für Oekonomie und Management, Hannover"\n                                            /></m:VBox><m:Label text="09/2018 - 01/2021" /><m:VBox><m:FormattedText\n                                                htmlText="&lt;strong&gt;IT specialist in application development&lt;/strong&gt;&lt;br&gt;Apprenticeship"\n                                            /><m:Text\n                                                class="sapUiTinyMarginTop"\n                                                text="Inwerken AG, Isernhagen"\n                                            /></m:VBox></f:content></f:SimpleForm></m:VBox></blocks></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection\n                titleUppercase="false"\n                title="Additional skills"\n            ><subSections><ObjectPageSubSection titleUppercase="false"><blocks><m:VBox class="sapUiSmallMargin"><f:SimpleForm\n                                    minWidth="1024"\n                                    maxContainerCols="2"\n                                    editable="false"\n                                    layout="ResponsiveGridLayout"\n                                    labelSpanL="3"\n                                    labelSpanM="3"\n                                    emptySpanL="4"\n                                    emptySpanM="4"\n                                    columnsL="1"\n                                    columnsM="1"\n                                    width="auto"\n                                    class="sapUxAPObjectPageSubSectionAlignContent"\n                                ><f:content><m:Label text="Languages" /><m:VBox><m:Text\n                                                text="German (Native speaker), English (Fluent in writing, speaking)"\n                                            /></m:VBox></f:content></f:SimpleForm></m:VBox></blocks></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection\n                titleUppercase="false"\n                title="Private interests"\n            ><subSections><ObjectPageSubSection titleUppercase="false"><blocks><m:VBox class="sapUiSmallMargin"><f:SimpleForm\n                                    minWidth="1024"\n                                    maxContainerCols="2"\n                                    editable="false"\n                                    layout="ResponsiveGridLayout"\n                                    labelSpanL="3"\n                                    labelSpanM="3"\n                                    emptySpanL="4"\n                                    emptySpanM="4"\n                                    columnsL="1"\n                                    columnsM="1"\n                                    width="auto"\n                                    class="sapUxAPObjectPageSubSectionAlignContent"\n                                ><f:content><m:Label text="Travel" /><m:Text\n                                            text="Travel to foreign countries and cultures"\n                                        /><m:Label text="Sports" /><m:Text\n                                            text="Skiing, mountain biking, road biking, running, hiking"\n                                        /></f:content></f:SimpleForm></m:VBox></blocks></ObjectPageSubSection></subSections></ObjectPageSection></sections></ObjectPageLayout></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
