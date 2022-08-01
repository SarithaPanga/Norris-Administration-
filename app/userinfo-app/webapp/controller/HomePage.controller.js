sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/m/ColumnListItem",
    "sap/m/Input",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/unified/FileUploader",
    "sap/m/Popover",
    "sap/m/Button",
    "sap/m/library",
   
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, MessageToast, ColumnListItem, Input, Filter, FilterOperator, FileUploader,Popover,Button,library) {
        "use strict";
        var that = this;
        var ButtonType = library.ButtonType,
        PlacementType = library.PlacementType;
        return Controller.extend("com.sap.userinfoapp.controller.HomePage", {
            onInit: function () {

                //global functions for save functionality on edit mode
                this._createReadOnlyTemplates();
                this._createReadOnlyTemplates1();
                this._createReadOnlyTemplates2();
                this._createReadOnlyTemplates3();
                this._createReadOnlyTemplates4();
                this._createReadOnlyTemplates5();
                this._createReadOnlyTemplates6();
                this._createReadOnlyTemplates7();
                this._createReadOnlyTemplates8();
                this._createReadOnlyTemplates9();
                this._createReadOnlyTemplates10();
                this._createReadOnlyTemplates11();
                this._createReadOnlyTemplates12();
                
            

                //This will convert text fields of the table to Input Fields

                // making text to input fields - UserInfo Table
                this.oEditableTemplate = new ColumnListItem({
                    cells: [
                        new Input({
                            value: "{mainModel>UserIsMandatoryforCRC}",
                            change: [this.onInputChange, this]
                        }), new Input({
                            value: "{mainModel>SAPUserID}",
                            change: [this.onInputChange, this]
                        }), new Input({
                            value: "{mainModel>UserName}",
                            change: [this.onInputChange, this]
                        }), new Input({
                            value: "{mainModel>EmailID}",
                            change: [this.onInputChange, this]
                        }),  new Input({
                            value: "{mainModel>CompanyName}",
                            change: [this.onInputChange, this]
                        }),  new Input({
                            value: "{mainModel>ManagerName}",
                            change: [this.onInputChange, this]
                        }),  new Input({
                            value: "{mainModel>Admin}",
                            change: [this.onInputChange, this]
                        }),

                    ]
                });
                // making columns to input fields - UserAccess Table
                this.oEditableTemplate1 = new ColumnListItem({
                    cells: [
                        new Input({
                            value: "{mainModel>SAPUserID}",
                            change: [this.onInputChange, this]
                        }), new Input({
                            value: "{mainModel>SystemDev}",
                            change: [this.onInputChange, this]
                        }), new Input({
                            value: "{mainModel>DeveloperAccess}",
                            change: [this.onInputChange, this]
                        }),  new Input({
                            value: "{mainModel>L1ReviewerAccess}",
                            change: [this.onInputChange, this]
                        }),  new Input({
                            value: "{mainModel>L2ReviewerAccess}",
                            change: [this.onInputChange, this]
                        }),
                    ]
                });
                // making columns to input fields - Section Table
                this.oEditableTemplate2 = new ColumnListItem({
                    cells: [
                        new Input({
                            value: "{mainModel>SectionNo}",
                            change: [this.onInputChange, this]
                        }), new Input({
                            value: "{mainModel>SectionName}",
                            change: [this.onInputChange, this]
                        }), new Input({
                            value: "{mainModel>SectionPriority}",
                            change: [this.onInputChange, this]
                        }),  new Input({
                            value: "{mainModel>Type}",
                            change: [this.onInputChange, this]
                        }),  new Input({
                            value: "{mainModel>ObjectType}",
                            change: [this.onInputChange, this]
                        }),

                    ]
                });
                // making columns to input fields - StatusCode Table
                this.oEditableTemplate3 = new ColumnListItem({
                    cells: [
                        new Input({
                            value: "{mainModel>statuscode}",
                            change: [this.onInputChange, this]
                        }), new Input({
                            value: "{mainModel>statustext}",
                            change: [this.onInputChange, this]
                        }), new Input({
                            value: "{mainModel>statustype}",
                            change: [this.onInputChange, this]
                        }),  new Input({
                            value: "{mainModel>state}",
                            change: [this.onInputChange, this]
                        }),

                    ]
                });
                // making columns to input fields - Systems Table
                this.oEditableTemplate4 = new ColumnListItem({
                    cells: [
                        new Input({
                            value: "{mainModel>SystemID}",
                            change: [this.onInputChange, this]
                        }),
                    ]
                });
                // making columns to input fields - Phases Table
                this.oEditableTemplate5 = new ColumnListItem({
                    cells: [
                        new Input({
                            value: "{mainModel>Phase}",
                            change: [this.onInputChange, this]
                        }),
                        new Input({
                            value: "{mainModel>Description}",
                            change: [this.onInputChange, this]
                        }),
                    ]
                });
                // making columns to input fields - Company Table
                this.oEditableTemplate6 = new ColumnListItem({
                    cells: [
                        new Input({
                            value: "{mainModel>CompanyName}",
                            change: [this.onInputChange, this]
                        }),
                        new Input({
                            value: "{mainModel>Description}",
                            change: [this.onInputChange, this]
                        }),
                    ]
                });
                // making columns to input fields - Issue Table
                this.oEditableTemplate7 = new ColumnListItem({
                    cells: [
                        new Input({
                            value: "{mainModel>IssueType}",
                            change: [this.onInputChange, this]
                        }),
                        new Input({
                            value: "{mainModel>Description}",
                            change: [this.onInputChange, this]
                        }),
                    ]
                });
                // making columns to input fields - Category Table
                this.oEditableTemplate8 = new ColumnListItem({
                    cells: [
                        new Input({
                            value: "{mainModel>IssueCategory}",
                            change: [this.onInputChange, this]
                        }),
                        new Input({
                            value: "{mainModel>Description}",
                            change: [this.onInputChange, this]
                        }),
                    ]
                });
                // making columns to input fields - Admin Table
                this.oEditableTemplate9 = new ColumnListItem({
                    cells: [
                        new Input({
                            value: "{mainModel>AdminUserId}",
                            change: [this.onInputChange, this]
                        }),
                        new Input({
                            value: "{mainModel>AdminName}",
                            change: [this.onInputChange, this]
                        }),
                        new Input({
                            value: "{mainModel>CompanyName}",
                            change: [this.onInputChange, this]
                        }),
                    ]
                });
                // making columns to input fields - Qus_Head Table
                this.oEditableTemplate10 = new ColumnListItem({
                    cells: [
                        new Input({
                            value: "{mainModel>QuestionNo}",
                            change: [this.onInputChange, this]
                        }),
                        new Input({
                            value: "{mainModel>Question}",
                            change: [this.onInputChange, this]
                        }),
                        new Input({
                            value: "{mainModel>QuestionPriority}",
                            change: [this.onInputChange, this]
                        }),
                    ]
                });
                // making columns to input fields - Qus_Map Table
                this.oEditableTemplate11 = new ColumnListItem({
                    cells: [
                        new Input({
                            value: "{mainModel>QuestionNo}",
                            change: [this.onInputChange, this]
                        }),
                        new Input({
                            value: "{mainModel>SectionNn}",
                            change: [this.onInputChange, this]
                        }),
                    ]
                });
                // making columns to input fields - QnType_Priority Table
                this.oEditableTemplate12 = new ColumnListItem({
                    cells: [
                        new Input({
                            value: "{mainModel>Type}",
                            change: [this.onInputChange, this]
                        }),
                        new Input({
                            value: "{mainModel>Priority}",
                            change: [this.onInputChange, this]
                        }),
                        new Input({
                            value: "{mainModel>Sectionno}",
                            change: [this.onInputChange, this]
                        }),
                    ]
                });
            },
           
            
        //RebindTable function to apply the Template.

        rebindTable: function(oTemplate, sKeyboardMode) {

        if( that.selectedkey === "UserInfo" || that.selectedkey === undefined)
        {  
            this.byId("table0").bindItems({
                path: "mainModel>/UserInfo",
                template: oTemplate,
                templateShareable: true
            }).setKeyboardMode(sKeyboardMode);
        }
        if( that.selectedkey === "UserAccess")
        {
            this.byId("table1").bindItems({
                path: "mainModel>/UserAccess",
                template: oTemplate,
                templateShareable: true
            }).setKeyboardMode(sKeyboardMode);
        }
        if( that.selectedkey === "Section")
        {
            this.byId("table2").bindItems({
                path: "mainModel>/Section",
                template: oTemplate,
                templateShareable: true
            }).setKeyboardMode(sKeyboardMode);
        }
        if( that.selectedkey === "StatusCode")
        {   
            this.byId("table3").bindItems({
                path: "mainModel>/StatusCode",
                template: oTemplate,
                templateShareable: true
            }).setKeyboardMode(sKeyboardMode);
        }
        if( that.selectedkey === "Systems")
        {   
            this.byId("table4").bindItems({
                path: "mainModel>/Systems",
                template: oTemplate,
                templateShareable: true
            }).setKeyboardMode(sKeyboardMode);
        }
        if( that.selectedkey === "Phases")
        {   
            this.byId("table5").bindItems({
                path: "mainModel>/Phases",
                template: oTemplate,
                templateShareable: true
            }).setKeyboardMode(sKeyboardMode);
        }
        if( that.selectedkey === "Company")
        {   
            this.byId("table6").bindItems({
                path: "mainModel>/Company",
                template: oTemplate,
                templateShareable: true
            }).setKeyboardMode(sKeyboardMode);
        }
        if( that.selectedkey === "Issue")
        {   
            this.byId("table7").bindItems({
                path: "mainModel>/Issue",
                template: oTemplate,
                templateShareable: true
            }).setKeyboardMode(sKeyboardMode);
        }
        if( that.selectedkey === "Category")
        {   
            this.byId("table8").bindItems({
                path: "mainModel>/Category",
                template: oTemplate,
                templateShareable: true
            }).setKeyboardMode(sKeyboardMode);
        }
        if( that.selectedkey === "Admin")
        {   
            this.byId("table9").bindItems({
                path: "mainModel>/Admin",
                template: oTemplate,
                templateShareable: true
            }).setKeyboardMode(sKeyboardMode);
        }
        if( that.selectedkey === "Qus_Head")
        {   
            this.byId("table10").bindItems({
                path: "mainModel>/Qus_Head",
                template: oTemplate,
                templateShareable: true
            }).setKeyboardMode(sKeyboardMode);
        }
        if( that.selectedkey === "Qus_Map")
        {   
            this.byId("table11").bindItems({
                path: "mainModel>/Qus_Map",
                template: oTemplate,
                templateShareable: true
            }).setKeyboardMode(sKeyboardMode);
        }
        if( that.selectedkey === "QnType_Priority")
        {   
            this.byId("table12").bindItems({
                path: "mainModel>/QnType_Priority",
                template: oTemplate,
                templateShareable: true
            }).setKeyboardMode(sKeyboardMode);
        }
        },

        //Searching the table based on selected items in dropdown
        onSelectChange: function( oEvent ) {
        if( (that.selectedkey === "UserInfo" || that.selectedkey === undefined) && (that.selectedkey !== "UserAccess"))
        {
            var aFilters = [];
            var sQuery = oEvent.getSource().getSelectedKey();
            if (sQuery && sQuery.length > 0) {
                var filter = new Filter("CompanyName", FilterOperator.Contains, sQuery);
                aFilters.push(filter);
            }z

            // update list binding
            var oList = this.byId("table0");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilters);
        }
        if(that.selectedkey === "UserAccess")
        {
            var aFilters1 = [];
            var sQuery1 = oEvent.getSource().getSelectedKey();
            if (sQuery1 && sQuery1.length > 0) {
                var filter1 = new Filter("SystemDev", FilterOperator.Contains, sQuery1);
                aFilters1.push(filter1);
            }

            // update list binding
            var oList1 = this.byId("table1");
            var oBinding1 = oList1.getBinding("items");
            oBinding1.filter(aFilters1);
        }
        if(that.selectedkey === "Section")
        {
            var aFilters2 = [];
            var sQuery2 = oEvent.getSource().getSelectedKey();
            if (sQuery2 && sQuery2.length > 0) {
                var filter2 = new Filter("SectionNo", FilterOperator.Contains, sQuery2);
                aFilters2.push(filter2);
            }

            // update list binding
            var oList2 = this.byId("table2");
            var oBinding2 = oList2.getBinding("items");
            oBinding2.filter(aFilters2);
        }
        if(that.selectedkey === "StatusCode")
        {
            var aFilters3 = [];
            var sQuery3 = oEvent.getSource().getSelectedKey();
            if (sQuery3 && sQuery3.length > 0) {
                var filter3 = new Filter("statuscode", FilterOperator.Contains, sQuery3);
                aFilters3.push(filter3);
            }

            // update list binding
            var oList3 = this.byId("table3");
            var oBinding3 = oList3.getBinding("items");
            oBinding3.filter(aFilters3);
        }
        if(that.selectedkey === "Systems")
        {
            var aFilters4 = [];
            var sQuery4 = oEvent.getSource().getSelectedKey();
            if (sQuery4 && sQuery4.length > 0) {
                var filter4 = new Filter("SystemID", FilterOperator.Contains, sQuery4);
                aFilters4.push(filter4);
            }

            // update list binding
            var oList4 = this.byId("table4");
            var oBinding4 = oList4.getBinding("items");
            oBinding4.filter(aFilters4);
        }
        if(that.selectedkey === "Phases")
        {
            var aFilters5 = [];
            var sQuery5 = oEvent.getSource().getSelectedKey();
            if (sQuery5 && sQuery5.length > 0) {
                var filter5 = new Filter("Phase", FilterOperator.Contains, sQuery5);
                aFilters5.push(filter5);
            }

            // update list binding
            var oList5 = this.byId("table5");
            var oBinding5 = oList5.getBinding("items");
            oBinding5.filter(aFilters5);
        }
        if(that.selectedkey === "Company")
        {
            var aFilters6 = [];
            var sQuery6 = oEvent.getSource().getSelectedKey();
            if (sQuery6 && sQuery6.length > 0) {
                var filter6 = new Filter("CompanyName", FilterOperator.Contains, sQuery6);
                aFilters6.push(filter6);
            }

            // update list binding
            var oList6 = this.byId("table6");
            var oBinding6 = oList6.getBinding("items");
            oBinding6.filter(aFilters6);
        }
        if(that.selectedkey === "Company")
        {
            var aFilters6 = [];
            var sQuery6 = oEvent.getSource().getSelectedKey();
            if (sQuery6 && sQuery6.length > 0) {
                var filter6 = new Filter("CompanyName", FilterOperator.Contains, sQuery6);
                aFilters6.push(filter6);
            }

            // update list binding
            var oList6 = this.byId("table6");
            var oBinding6 = oList6.getBinding("items");
            oBinding6.filter(aFilters6);
        }
        if(that.selectedkey === "Issue")
        {
            var aFilters7 = [];
            var sQuery7 = oEvent.getSource().getSelectedKey();
            if (sQuery7 && sQuery7.length > 0) {
                var filter7 = new Filter("IssueType", FilterOperator.Contains, sQuery7);
                aFilters7.push(filter7);
            }

            // update list binding
            var oList7 = this.byId("table7");
            var oBinding7 = oList7.getBinding("items");
            oBinding7.filter(aFilters7);
        }
        if(that.selectedkey === "Category")
        {
            var aFilters8 = [];
            var sQuery8 = oEvent.getSource().getSelectedKey();
            if (sQuery8 && sQuery8.length > 0) {
                var filter8 = new Filter("IssueCategory", FilterOperator.Contains, sQuery8);
                aFilters8.push(filter8);
            }

            // update list binding
            var oList8 = this.byId("table8");
            var oBinding8 = oList8.getBinding("items");
            oBinding8.filter(aFilters8);
        }
        if(that.selectedkey === "Admin")
        {
            var aFilters9 = [];
            var sQuery9 = oEvent.getSource().getSelectedKey();
            if (sQuery9 && sQuery9.length > 0) {
                var filter9 = new Filter("AdminName", FilterOperator.Contains, sQuery9);
                aFilters9.push(filter9);
            }
            // update list binding
            var oList9 = this.byId("table9");
            var oBinding9 = oList9.getBinding("items");
            oBinding9.filter(aFilters9);
        }
        if(that.selectedkey === "Qus_Head")
        {
            var aFilters10 = [];
            var sQuery10 = oEvent.getSource().getSelectedKey();
            if (sQuery10 && sQuery10.length > 0) {
                var filter10 = new Filter("QuestionNo", FilterOperator.Contains, sQuery10);
                aFilters10.push(filter10);
            }
            // update list binding
            var oList10 = this.byId("table10");
            var oBinding10 = oList10.getBinding("items");
            oBinding10.filter(aFilters10);
        }
        if(that.selectedkey === "Qus_Map")
        {
            var aFilters11 = [];
            var sQuery11 = oEvent.getSource().getSelectedKey();
            if (sQuery11 && sQuery11.length > 0) {
                var filter11 = new Filter("SectionNn", FilterOperator.Contains, sQuery11);
                aFilters11.push(filter11);
            }
            // update list binding
            var oList11 = this.byId("table11");
            var oBinding11 = oList11.getBinding("items");
            oBinding11.filter(aFilters11);
        }
        if(that.selectedkey === "QnType_Priority")
        {
            var aFilters12 = [];
            var sQuery12 = oEvent.getSource().getSelectedKey();
            if (sQuery12 && sQuery12.length > 0) {
                var filter12 = new Filter("Priority", FilterOperator.Contains, sQuery12);
                aFilters12.push(filter12);
            }
            // update list binding
            var oList12 = this.byId("table12");
            var oBinding12 = oList12.getBinding("items");
            oBinding12.filter(aFilters12);
        }
        },
        onOpenAddDialog: function () {

            // this.getView().byId(that.selectedkey).open();
            // var c = that.selectedkey;
            if( that.selectedkey === undefined)
            {
                this.getView().byId("UserInfo").open();
            }
            else
            {
                var c = that.selectedkey;
                this.getView().byId(c).open();
            }
        },

        //Cancel Dialog 
        onCancelDialog: function (oEvent) {   
            oEvent.getSource().getParent().close();
        },

        resetForm: function() {
            if (that.selectedkey === undefined || that.selectedkey === "UserInfo")
            {
                this.byId("idUserCRC").setValue("");
                this.byId("idSAP").setValue("");
                this.byId("idUser").setValue("");
                this.byId("idEmail").setValue(""),
                this.byId("idCompany").setValue("");
                this.byId("idManager").setValue(""); 
                this.byId("idAdminName").setValue(""); 
            }
            if (that.selectedkey === "UserAccess")
            {
                this.byId("idSAPUser").setValue("");
                this.byId("idDev").setValue("");
                this.byId("idDevAccess").setSelectedKey("");
                this.byId("idL1Access").setSelectedKey("");
                this.byId("idL2Access").setSelectedKey("");
            }
            if (that.selectedkey === "Section")
            {
                this.byId("idSectionNo").setValue("");
                this.byId("idSectionName").setValue("");
                this.byId("idDSectionPriority").setValue("");
                this.byId("idType").setValue("");
                this.byId("idObjectType").setValue("");
            }
            if (that.selectedkey === "Qus_Head")
            {
                this.byId("idHeadQuestionNo").setValue("");
                this.byId("idHeadQuestion").setValue("");
                this.byId("idHeadQuestionPriority").setValue("");
            }
            if (that.selectedkey === "Qus_Map")
            {
                this.byId("idQuestionNo1").setValue("");
                this.byId("idSectionNn1").setValue("");
            }
            if (that.selectedkey === "QnType_Priority")
            {
                this.byId("idType1").setValue("");
                this.byId("idPriority1").setValue("");
                this.byId("idSectionno1").setValue("");
            }
            if (that.selectedkey === "StatusCode")
            {
                this.byId("idStatusCode").setValue("");
                this.byId("idStatustext").setValue("");
                this.byId("idStatusType").setValue("");
                this.byId("idState").setValue("");
            }
            if (that.selectedkey === "Systems")
            {
                this.byId("idSystemID").setValue("");
            }
            if (that.selectedkey === "Phases")
            {
                this.byId("idPhase").setValue("");
                this.byId("idPhaseDescription").setValue("");
            }
            if (that.selectedkey === "Company")
            {
                this.byId("idCompanyName").setValue("");
                this.byId("idCompanyDescription").setValue("");
            }
            if (that.selectedkey === "Issue")
            {
                this.byId("idIssueType").setValue("");
                this.byId("idIssueTypeDescription").setValue("");
            }
            if (that.selectedkey === "Category")
            {
                this.byId("idIssueCategory").setValue("");
                this.byId("idIssueCategoryDescription").setValue("");
            }
            if (that.selectedkey === "Admin")
            {
                this.byId("idAdminUserId").setValue("");
                this.byId("idAdminNames").setValue("");
                this.byId("idCompanyNameAdmin").setValue("");
            }

        },
        //Create 

        onCreate: function () {   

            if (that.selectedkey === undefined || that.selectedkey === "UserInfo")
            {     
                // var c = "UserInfo";
                    // if (true) 
                    // {
                        const oList = this.byId("table0");
                        const oBinding = oList.getBinding("items");
                        if ( this.byId("idUserCRC").getValue() == "" && this.byId("idUser").getValue() == "" && this.byId("idEmail").getValue() == "" && this.byId("idCompany").getValue() == "" && this.byId("idManager").getValue() == "" && this.byId("idAdminName").getValue() == "" )
                        {
                            MessageToast.show("Cannot be blank");
                        }
                        else
                        {
                            const oContext = oBinding.create({
                                "UserIsMandatoryforCRC": this.byId("idUserCRC").getValue(),
                                "SAPUserID": this.byId("idSAP").getValue(),
                                "UserName": this.byId("idUser").getValue(),
                                "EmailID": this.byId("idEmail").getValue(),
                                "CompanyName": this.byId("idCompany").getValue(),
                                "ManagerName": this.byId("idManager").getValue(), 
                                "Admin": this.byId("idAdminName").getValue(),
                                });
                        
                                oContext.created()
                                .then(()=>{
                                    var oCheck = this.getView().byId("checkbox").getSelected()
                                    if(oCheck)
                                    {
                                        var a = "Record created,Create another";
                                    }
                                    else
                                    {
                                        a = "Record created";
                                        this.getView().byId("UserInfo").close();
                                    }
                                    // MessageToast.show(a);
                                    MessageBox.success(a);
                                    this.resetForm();
                                });
                                }
                        // }
            }
            if (that.selectedkey === "UserAccess")
            {
                    var oDevAccess = this.byId("idDevAccess").getSelectedKey();
                    //need to look for alternative to this code (to convert string to boolean)
                    if(oDevAccess == "Yes")
                    {
                        oDevAccess = true;
                    }
                    if(oDevAccess == "No")
                    {
                        oDevAccess = false;
                    }
                    var oL1ReviewerAccess = this.byId("idL1Access").getSelectedKey();
                    if(oL1ReviewerAccess == "Yes")
                    {
                        oL1ReviewerAccess = true;
                    }
                    if(oL1ReviewerAccess == "No")
                    {
                        oL1ReviewerAccess = false;
                    }
                    var oL2ReviewerAccess = this.byId("idL2Access").getSelectedKey();
                    if(oL2ReviewerAccess == "Yes")
                    {
                        oL2ReviewerAccess = true;
                    }
                    if(oL2ReviewerAccess == "No")
                    {
                        oL2ReviewerAccess = false;
                    }
                    const oList = this.byId("table1");
                    const oBinding = oList.getBinding("items");
                    if ( this.byId("idSAPUser").getValue() == "" && this.byId("idDev").getValue() == "" && this.byId("idDevAccess").getValue() == "" && this.byId("idL1Access").getValue() == "" && this.byId("idL2Access").getValue() == "")
                    {
                        MessageToast.show("Cannot be blank");
                    }
                    else
                    {
                        const oContext = oBinding.create({
                        "SAPUserID": this.byId("idSAPUser").getValue(),
                        "SystemDev": this.byId("idDev").getValue(),
                        "DeveloperAccess": oDevAccess,
                        "L1ReviewerAccess": oL1ReviewerAccess,
                        "L2ReviewerAccess": oL2ReviewerAccess,   
                    });
                    oContext.created()
                    .then(()=>{
                        var oCheck = this.getView().byId("checkbox1").getSelected()
                        if(oCheck)
                        {
                            var b = "Record created, Create another";
                        }
                        else
                        {
                            b = "Record created";
                            this.getView().byId("UserAccess").close();
                        }
                        MessageToast.show(b);
                        this.resetForm();
                    })
                }
            }

            if (that.selectedkey === "Section")
            {
                const oList = this.byId("table2");
                const oBinding = oList.getBinding("items");
                if ( this.byId("idSectionNo").getValue() == "" && this.byId("idSectionName").getValue() == "" && this.byId("idDSectionPriority").getValue() == "" && this.byId("idType").getValue() == "" && this.byId("idObjectType").getValue() == "")
                {
                    MessageToast.show("Cannot be blank");
                }
                else {
                    const oContext = oBinding.create({
                    "SectionNo": this.byId("idSectionNo").getValue(),
                    "SectionName": this.byId("idSectionName").getValue(),
                    "SectionPriority": this.byId("idDSectionPriority").getValue(),
                    "Type": this.byId("idType").getValue(),
                    "ObjectType": this.byId("idObjectType").getValue(),   
                });
                oContext.created()
                .then(()=>{
                        var oCheck = this.getView().byId("checkbox2").getSelected()
                        if(oCheck)
                        {
                            var b = "Record created,Create another";
                        }
                        else
                        {
                            b = "Record created";
                            this.getView().byId("Section").close();
                        }
                        MessageToast.show(b);
                        this.resetForm()
                    })
                }
            }
            if (that.selectedkey === "Qus_Head")
            {
                const oList = this.byId("table10");
                const oBinding = oList.getBinding("items");
                if ( this.byId("idHeadQuestionNo").getValue() == "" && this.byId("idHeadQuestion").getValue() == "" && this.byId("idHeadQuestionPriority").getValue() == "")
                {
                    MessageToast.show("Cannot be blank");
                }
                else {   
                    const oContext = oBinding.create({
                    "QuestionNo": this.byId("idHeadQuestionNo").getValue(),
                    "Question": this.byId("idHeadQuestion").getValue(),
                    "QuestionPriority": this.byId("idHeadQuestionPriority").getValue(),
                    
                });
                oContext.created()
                .then(()=>{
                        var oCheck2 = this.getView().byId("checkbox10").getSelected()
                        if(oCheck2)
                        {
                            var b = "Record created, Create another";
                        }
                        else
                        {
                            b = "Record created";
                            this.getView().byId("Qus_Head").close();
                        }
                        MessageToast.show(b);
                        this.resetForm();
                    })
                }
            }
            
            if (that.selectedkey === "Qus_Map")
            {
                const oList = this.byId("table11");
                const oBinding = oList.getBinding("items");
                if ( this.byId("idQuestionNo1").getValue() == "" && this.byId("idSectionNn1").getValue() == "")
                {
                    MessageToast.show("Cannot be blank");
                }
                else   
                {
                    const oContext = oBinding.create({
                    "QuestionNo": this.byId("idQuestionNo1").getValue(),
                    "SectionNn": this.byId("idSectionNn1").getValue(),
                    
                });
                oContext.created()
                .then(()=>{
                        var oCheck1 = this.getView().byId("checkbox11").getSelected()
                        if(oCheck1)
                        {
                            var b = "Record created,Create another";
                        }
                        else
                        {
                            b = "Record created";
                            this.getView().byId("Qus_Map").close();
                        }
                        MessageToast.show(b);
                        this.resetForm();
                    })
                }
            }
            if (that.selectedkey === "QnType_Priority")
            {
                
                const oList = this.byId("table12");
                const oBinding = oList.getBinding("items");
                if ( this.byId("idType1").getValue() == "" && this.byId("idPriority1").getValue() == "" && this.byId("idSectionno1").getValue() == "")
                {
                    MessageToast.show("Cannot be blank");
                }
                else   
                {
                    const oContext = oBinding.create({
                    "Type": this.byId("idType1").getValue(),
                    "Priority": this.byId("idPriority1").getValue(),
                    "Sectionno": this.byId("idSectionno1").getValue(),
                });
                oContext.created()
                .then(()=>{
                        var oCheck1 = this.getView().byId("checkbox12").getSelected()
                        if(oCheck1)
                        {
                            var b = "Record created,Create another";
                        }
                        else
                        {
                            b = "Record created";
                            this.getView().byId("QnType_Priority").close();
                        }
                        MessageToast.show(b);
                        this.resetForm();
                    })
                }
            }
            if (that.selectedkey === "StatusCode")
            {
                const oList = this.byId("table3");
                const oBinding = oList.getBinding("items");
                if ( this.byId("idStatusCode").getValue() == "" && this.byId("idStatustext").getValue() == "" && this.byId("idStatusType").getValue() == "" && this.byId("idState").getValue() == "")
                {
                    MessageToast.show("Cannot be blank");
                }
                else {
                    const oContext = oBinding.create({
                    "statuscode": parseInt(this.byId("idStatusCode").getValue()),
                    "statustext": this.byId("idStatustext").getValue(),
                    "statustype": this.byId("idStatusType").getValue(),
                    "state": this.byId("idState").getValue(),
                });
                oContext.created()
                .then(()=>{
                        var oCheck1 = this.getView().byId("checkbox3").getSelected()
                        if(oCheck1)
                        {
                            var b = "Record created,Create another";
                        }
                        else
                        {
                            b = "Record created";
                            this.getView().byId("StatusCode").close();
                        }
                        MessageToast.show(b);
                        this.resetForm();
                    })
                }
            }

            if (that.selectedkey === "Systems")
            {
                
                    const oList = this.byId("table4");
                    const oBinding = oList.getBinding("items");
                    if ( this.byId("idSystemID").getValue() == "")
                {
                    MessageToast.show("Cannot be blank");
                }
                else {
                    const oContext = oBinding.create({
                    "SystemID": this.byId("idSystemID").getValue(),
                });
                oContext.created()
                .then(()=>{
                        var oCheck1 = this.getView().byId("checkbox4").getSelected()
                        if(oCheck1)
                        {
                            var b = "Record created,Create another";
                        }
                        else
                        {
                            b = "Record created";
                            this.getView().byId("Systems").close();
                        }
                        MessageToast.show(b);
                        this.byId("idSystemID").setValue("");
                    })
                }
            }

            if (that.selectedkey === "Phases")
            {
                
                    const oList = this.byId("table5");
                    const oBinding = oList.getBinding("items");
                    if ( this.byId("idPhase").getValue() == "" && this.byId("idPhaseDescription").getValue() == "")
                {
                    MessageToast.show("Cannot be blank");
                }
                else {
                    const oContext = oBinding.create({
                    "Phase": this.byId("idPhase").getValue(),
                    "Description": this.byId("idPhaseDescription").getValue(),
                });
                oContext.created()
                .then(()=>{
                        var oCheck1 = this.getView().byId("checkbox5").getSelected()
                        if(oCheck1)
                        {
                            var b = "Record created,Create another";
                        }
                        else
                        {
                            b = "Record created";
                            this.getView().byId("Phases").close();
                        }
                        MessageToast.show(b);
                        this.byId("idPhase").setValue("");
                        this.byId("idPhaseDescription").setValue("");
                    })
                }
            }
            if (that.selectedkey === "Company")
            {
                
                    const oList = this.byId("table6");
                    const oBinding = oList.getBinding("items");
                    if ( this.byId("idCompanyName").getValue() == "" && this.byId("idCompanyDescription").getValue() == "")
                {
                    MessageToast.show("Cannot be blank");
                }
                else {
                    const oContext = oBinding.create({
                    "CompanyName": this.byId("idCompanyName").getValue(),
                    "Description": this.byId("idCompanyDescription").getValue(),
                });
                oContext.created()
                .then(()=>{
                        var oCheck1 = this.getView().byId("checkbox6").getSelected()
                        if(oCheck1)
                        {
                            var b = "Record created,Create another";
                        }
                        else
                        {
                            b = "Record created";
                            this.getView().byId("Company").close();
                        }
                        MessageToast.show(b);
                        this.byId("idCompanyName").setValue("");
                        this.byId("idCompanyDescription").setValue("");
                    })
                }
            }
            if (that.selectedkey === "Issue")
            {
                
                    const oList = this.byId("table7");
                    const oBinding = oList.getBinding("items");
                    if ( this.byId("idIssueType").getValue() == "" && this.byId("idIssueTypeDescription").getValue() == "")
                {
                    MessageToast.show("Cannot be blank");
                }
                else {
                    const oContext = oBinding.create({
                    "IssueType": this.byId("idIssueType").getValue(),
                    "Description": this.byId("idIssueTypeDescription").getValue(),
                });
                oContext.created()
                .then(()=>{
                        var oCheck1 = this.getView().byId("checkbox7").getSelected()
                        if(oCheck1)
                        {
                            var b = "Record created,Create another";
                        }
                        else
                        {
                            b = "Record created";
                            this.getView().byId("Issue").close();
                        }
                        MessageToast.show(b);
                        this.byId("idIssueType").setValue("");
                        this.byId("idIssueTypeDescription").setValue("");
                    })
                }
            }
            if (that.selectedkey === "Category")
            {
                const oList = this.byId("table8");
                    const oBinding = oList.getBinding("items");
                if ( this.byId("idIssueCategory").getValue() == "" && this.byId("idIssueCategoryDescription").getValue() == "")
                {
                    MessageToast.show("Cannot be blank");
                }
                else {
                    
                    const oContext = oBinding.create({
                    "IssueCategory": this.byId("idIssueCategory").getValue(),
                    "Description": this.byId("idIssueCategoryDescription").getValue(),
                });
                oContext.created()
                .then(()=>{
                        var oCheck1 = this.getView().byId("checkbox8").getSelected()
                        if(oCheck1)
                        {
                            var b = "Record created,Create another";
                        }
                        else
                        {
                            b = "Record created";
                            this.getView().byId("Category").close();
                        }
                        MessageToast.show(b);
                        this.byId("idIssueCategory").setValue("");
                        this.byId("idIssueCategoryDescription").setValue("");
                    })
                }
            }
            if (that.selectedkey === "Admin")
            {
                const oList = this.byId("table9");
                const oBinding = oList.getBinding("items");
                if ( this.byId("idIssueCategory").getValue() == "" && this.byId("idIssueCategoryDescription").getValue() == "")
                {
                    MessageToast.show("Cannot be blank");
                }
                else {
                    const oContext = oBinding.create({
                    "AdminUserId": this.byId("idAdminUserId").getValue(),
                    "AdminName": this.byId("idAdminNames").getValue(),
                    "CompanyName": this.byId("idCompanyNameAdmin").getValue(),
                });
                oContext.created()
                .then(()=>{
                        var oCheck1 = this.getView().byId("checkbox9").getSelected()
                        if(oCheck1)
                        {
                            var b = "Record created,Create another";
                        }
                        else
                        {
                            b = "Record created";
                            this.getView().byId("Admin").close();
                        }
                        MessageToast.show(b);
                        this.byId("idAdminUserId").setValue("");
                        this.byId("idAdminNames").setValue("");
                        this.byId("idCompanyNameAdmin").setValue("");
                    })
                }
            }
        },

            //onEditMode - calling the rebind fuction function to make them editable by pressing Edit Button.


            onEditMode: function(){
                this.byId("editModeButton").setVisible(false);
                this.byId("saveButton").setVisible(true);
                this.byId("createButton").setVisible(false);
                this.byId("deleteButton").setVisible(false);
                this.byId("importButton").setVisible(false);
                this.byId("CancelButton").setVisible(true);
                if(that.selectedkey === undefined || that.selectedkey === "UserInfo")
                {
                    this.rebindTable(this.oEditableTemplate, "Edit");
                }
                if(that.selectedkey === "UserAccess")
                {
                    this.rebindTable(this.oEditableTemplate1, "Edit");
                }
                if(that.selectedkey === "Section")
                {
                    this.rebindTable(this.oEditableTemplate2, "Edit");
                }
                if(that.selectedkey === "StatusCode")
                {
                    this.rebindTable(this.oEditableTemplate3, "Edit");
                }
                if(that.selectedkey === "Systems")
                {
                    this.rebindTable(this.oEditableTemplate4, "Edit");
                }
                if(that.selectedkey === "Phases")
                {
                    this.rebindTable(this.oEditableTemplate5, "Edit");
                }
                if(that.selectedkey === "Company")
                {
                    this.rebindTable(this.oEditableTemplate6, "Edit");
                }
                if(that.selectedkey === "Issue")
                {
                    this.rebindTable(this.oEditableTemplate7, "Edit");
                }
                if(that.selectedkey === "Category")
                {
                    this.rebindTable(this.oEditableTemplate8, "Edit");
                }
                if(that.selectedkey === "Admin")
                {
                    this.rebindTable(this.oEditableTemplate9, "Edit");
                }
                if(that.selectedkey === "Qus_Head")
                {
                    this.rebindTable(this.oEditableTemplate10, "Edit");
                }
                if(that.selectedkey === "Qus_Map")
                {
                    this.rebindTable(this.oEditableTemplate11, "Edit");
                }
                if(that.selectedkey === "QnType_Priority")
                {
                    this.rebindTable(this.oEditableTemplate12, "Edit");
                }
           },  

           //Cancel
            onCancel: function() {
                this.getView().byId("CancelButton").setVisible(false);
                this.getView().byId("editModeButton").setVisible(true);
                this.getView().byId("deleteButton").setVisible(true);
                this.getView().byId("saveButton").setVisible(false);
                this.getView().byId("createButton").setVisible(true);
                this.getView().byId("importButton").setVisible(true);
                if(that.selectedkey === undefined || that.selectedkey === "UserInfo")
                {
                    this.rebindTable(this.oReadOnlyTemplate, "Navigation");
                }
                if(that.selectedkey === "UserAccess")
                {
                    this.rebindTable(this.oReadOnlyTemplate1, "Navigation");
                }
                if(that.selectedkey === "Section")
                {
                    this.rebindTable(this.oReadOnlyTemplate2, "Navigation");
                }
                if(that.selectedkey === "StatusCode")
                {
                    this.rebindTable(this.oReadOnlyTemplate3, "Navigation");
                }
                if(that.selectedkey === "Systems")
                {
                    this.rebindTable(this.oReadOnlyTemplate4, "Navigation");
                }
                if(that.selectedkey === "Phases")
                {
                    this.rebindTable(this.oReadOnlyTemplate5, "Navigation");
                }
                if(that.selectedkey === "Company")
                {
                    this.rebindTable(this.oReadOnlyTemplate6, "Navigation");
                }
                if(that.selectedkey === "Issue")
                {
                    this.rebindTable(this.oReadOnlyTemplate7, "Navigation");
                }
                if(that.selectedkey === "Category")
                {
                    this.rebindTable(this.oReadOnlyTemplate8, "Navigation");
                }
                if(that.selectedkey === "Admin")
                {
                    this.rebindTable(this.oReadOnlyTemplate9, "Navigation");
                }
                if(that.selectedkey === "Qus_Head")
                {
                    this.rebindTable(this.oReadOnlyTemplate10, "Navigation");
                }
                if(that.selectedkey === "Qus_Map")
                {
                    this.rebindTable(this.oReadOnlyTemplate11, "Navigation");
                }
                if(that.selectedkey === "QnType_Priority")
                {
                    this.rebindTable(this.oReadOnlyTemplate12, "Navigation");
                }

            }, 
            
            //Delete
           onDelete: function(){
            var oSelected;
            if(that.selectedkey === undefined || that.selectedkey === "UserInfo")
            {
                oSelected = this.byId("table0").getSelectedItem();
            }
            if(that.selectedkey === "UserAccess")
            {
                oSelected = this.byId("table1").getSelectedItem();
            }
            if(that.selectedkey === "Section")
            {
                oSelected = this.byId("table2").getSelectedItem();
            }
            if(that.selectedkey === "Qus_Head")
            {
                oSelected = this.byId("table10").getSelectedItem();
            }
            if(that.selectedkey === "Qus_Map")
            {
                oSelected = this.byId("table11").getSelectedItem();
            }
            if(that.selectedkey === "QnType_Priority")
            {
                oSelected = this.byId("table12").getSelectedItem();
            }
            if(that.selectedkey === "StatusCode")
            {
                oSelected = this.byId("table3").getSelectedItem();
            }
            if(that.selectedkey === "Systems")
            {
                oSelected = this.byId("table4").getSelectedItem();
            }
            if(that.selectedkey === "Phases")
            {
                oSelected = this.byId("table5").getSelectedItem();
            }
            if(that.selectedkey === "Company")
            {
                oSelected = this.byId("table6").getSelectedItem();
            }
            if(that.selectedkey === "Issue")
            {
                oSelected = this.byId("table7").getSelectedItem();
            }
            if(that.selectedkey === "Category")
            {
                oSelected = this.byId("table8").getSelectedItem();
            }
            if(oSelected){
                oSelected.getBindingContext("mainModel").delete("$auto").then(function () {
                    // MessageToast.show("Record has been deleted");
                    MessageBox.success("Record has been deleted")
                }.bind(this), function (oError) {
                    MessageToast.show("Deletion Error: ",oError);
                });
            } else {
                MessageToast.show("Please Select a Row to Delete");
            }
        },

        // onInputChange & refreshModel functions - These will handle the input changes.


        onInputChange: function(){
            this.refreshModel("mainModel");
        },
        refreshModel: function (sModelName, sGroup){
            return new Promise((resolve,reject)=>{
                this.makeChangesAndSubmit.call(this,resolve,reject,
                sModelName,sGroup);
            });  
        },

        // method makeChangesAndSubmit to Save i.e., the Update Operation
        makeChangesAndSubmit: function (resolve, reject, sModelName,sGroup){
            const that = this;
            sModelName = "mainModel";
            sGroup = "$auto";
            if (that.getView().getModel(sModelName).hasPendingChanges(sGroup)) {
                that.getView().getModel(sModelName).submitBatch(sGroup).then(oSuccess =>{
                    that.makeChangesAndSubmit(resolve,reject, sModelName,sGroup);
                    MessageToast.show("Record updated");
                },reject)
                .catch(function errorHandler(err) {
                    MessageToast.show("Something Went Wrong ",err.message); // 'Oops!'
                  });
            } else {
                that.getView().getModel(sModelName).refresh(sGroup);
                resolve();
            }
        },

        //onSave Function to Switch from edit mode to Display Mode 
        onSave: function(){
            this.getView().byId("CancelButton").setVisible(false);
            this.getView().byId("editModeButton").setVisible(true);
            this.getView().byId("deleteButton").setVisible(true);
            this.getView().byId("saveButton").setVisible(false);
            this.getView().byId("createButton").setVisible(true);
            this.getView().byId("importButton").setVisible(true);
            if(that.selectedkey === undefined || that.selectedkey === "UserInfo")
            {
                this.rebindTable(this.oReadOnlyTemplate, "Navigation");
            }
            if(that.selectedkey === "UserAccess")
            {
                this.rebindTable(this.oReadOnlyTemplate1, "Navigation");
            }
                if(that.selectedkey === "Section")
                {
                    this.rebindTable(this.oReadOnlyTemplate2, "Navigation");
                }
                if(that.selectedkey === "StatusCode")
                {
                    this.rebindTable(this.oReadOnlyTemplate3, "Navigation");
                }
                if(that.selectedkey === "Systems")
                {
                    this.rebindTable(this.oReadOnlyTemplate4, "Navigation");
                }
                if(that.selectedkey === "Phases")
                {
                    this.rebindTable(this.oReadOnlyTemplate5, "Navigation");
                }
                if(that.selectedkey === "Company")
                {
                    this.rebindTable(this.oReadOnlyTemplate6, "Navigation");
                }
                if(that.selectedkey === "Issue")
                {
                    this.rebindTable(this.oReadOnlyTemplate7, "Navigation");
                }
                if(that.selectedkey === "Category")
                {
                    this.rebindTable(this.oReadOnlyTemplate8, "Navigation");
                }
                if(that.selectedkey === "Admin")
                {
                    this.rebindTable(this.oReadOnlyTemplate9, "Navigation");
                }
                if(that.selectedkey === "Qus_Head")
                {
                    this.rebindTable(this.oReadOnlyTemplate10, "Navigation");
                }
                if(that.selectedkey === "Qus_Map")
                {
                    this.rebindTable(this.oReadOnlyTemplate11, "Navigation");
                }
                if(that.selectedkey === "QnType_Priority")
                {
                    this.rebindTable(this.oReadOnlyTemplate12, "Navigation");
                }

            // this.rebindTable(this.oReadOnlyTemplate, "Navigation");   

        },
        _createReadOnlyTemplates: function () {
            this.oReadOnlyTemplate = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Text({
                        text: "{mainModel>UserIsMandatoryforCRC}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>SAPUserID}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>UserName}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>EmailID}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>CompanyName}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>ManagerName}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>Admin}"
                    })
                ]
            });
        },
        _createReadOnlyTemplates1: function () {
            this.oReadOnlyTemplate1 = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Text({
                        text: "{mainModel>SAPUserID}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>SystemDev}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>DeveloperAccess}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>L1ReviewerAccess}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>L2ReviewerAccess}"
                    })
                ]
            });
        },
        _createReadOnlyTemplates2: function () {
            this.oReadOnlyTemplate2 = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Text({
                        text: "{mainModel>SectionNo}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>SectionName}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>SectionPriority}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>Type}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>ObjectType}"
                    })
                ]
            });
        },
        _createReadOnlyTemplates3: function () {
            this.oReadOnlyTemplate3 = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Text({
                        text: "{mainModel>statuscode}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>statustext}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>statustype}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>state}"
                    })
                ]
            });
        },
        _createReadOnlyTemplates4: function () {
            this.oReadOnlyTemplate4 = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Text({
                        text: "{mainModel>SystemID}"
                    })
                ]
            });
        },
        _createReadOnlyTemplates5: function () {
            this.oReadOnlyTemplate5 = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Text({
                        text: "{mainModel>Phase}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>Description}"
                    })
                ]
            });
        },
        _createReadOnlyTemplates6: function () {
            this.oReadOnlyTemplate6 = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Text({
                        text: "{mainModel>CompanyName}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>Description}"
                    })
                ]
            });
        },
        _createReadOnlyTemplates7: function () {
            this.oReadOnlyTemplate7 = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Text({
                        text: "{mainModel>IssueType}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>Description}"
                    })
                ]
            });
        },
        _createReadOnlyTemplates8: function () {
            this.oReadOnlyTemplate8 = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Text({
                        text: "{mainModel>IssueCategory}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>Description}"
                    })
                ]
            });
        },
        _createReadOnlyTemplates9: function () {
            this.oReadOnlyTemplate9 = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Text({
                        text: "{mainModel>AdminUserId}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>AdminName}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>CompanyName}"
                    })
                ]
            });
        },
        _createReadOnlyTemplates10: function () {
            this.oReadOnlyTemplate10 = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Text({
                        text: "{mainModel>QuestionNo}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>Question}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>QuestionPriority}"
                    })
                ]
            });
        },
        _createReadOnlyTemplates11: function () {
            this.oReadOnlyTemplate11 = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Text({
                        text: "{mainModel>QuestionNo}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>SectionNn}"
                    })
                ]
            });
        },
        _createReadOnlyTemplates12: function () {
            this.oReadOnlyTemplate12 = new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Text({
                        text: "{mainModel>Type}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>Priority}"
                    }),
                    new sap.m.Text({
                        text: "{mainModel>Sectionno}"
                    })
                ]
            });
        },

        

        //Search UserID
        onSearchUserID: function (oEvent) {

            if(that.selectedkey === "UserInfo" || that.selectedkey === undefined )
            // add filter for search
            { var aFilters = [];
            var sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                var filter = new Filter("SAPUserID", FilterOperator.Contains, sQuery);
                aFilters.push(filter);
            }

            // update list binding
            var oList = this.byId("table0");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilters);
        }
        if(that.selectedkey === "UserAccess")
        {
        var aFilters = [];
        var sQuery = oEvent.getSource().getValue();
        if (sQuery && sQuery.length > 0) {
            var filter = new Filter("SAPUserID", FilterOperator.Contains, sQuery);
            aFilters.push(filter);
        }

        // update list binding
        var oList = this.byId("table1");
        var oBinding = oList.getBinding("items");
        oBinding.filter(aFilters);
    }
    if(that.selectedkey === "Section")
        {
        var aFilters = [];
        var sQuery = oEvent.getSource().getValue();
        if (sQuery && sQuery.length > 0) {
            var filter = new Filter("SAPUserID", FilterOperator.Contains, sQuery);
            aFilters.push(filter);
        }

        // update list binding
        var oList = this.byId("table2");
        var oBinding = oList.getBinding("items");
        oBinding.filter(aFilters);
    }
        },

        //Search UserName
        onSearchUser: function (oEvent) {
            // add filter for search
            var aFilters = [];
            var sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                var filter = new Filter("UserName", FilterOperator.Contains, sQuery);
                aFilters.push(filter);
            }

            // update list binding
            var oList = this.byId("table0");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilters);
        },

        //Search Manager Name
        onSearchManager: function (oEvent) {
            // add filter for search
            var aFilters = [];
            var sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                var filter = new Filter("ManagerName", FilterOperator.Contains, sQuery);
                aFilters.push(filter);
            }

            // update list binding
            var oList = this.byId("table0");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilters);
        },

        //Import 
        onImport: function () {
            that = this;
            if (this.fixedDialog === undefined) {
                this.fixedDialog = new sap.m.Dialog({

                    title: "Choose CSV File For Upload",
                    beginButton: new sap.m.Button({


                        text: "Upload",
                        icon: "sap-icon://upload",
                        press: function (oEvent) {
                            that.fixedDialog.close();
                        }
                    }),
                    content: [
                        new FileUploader("excelUploader")
                    ],
                    endButton: new sap.m.Button({
                        text: "Cancel",
                        press: function () {
                            that.fixedDialog.close();
                        }
                    })
                });
                this.getView().addDependent(this.fixedDialog);
                this.fixedDialog.attachBeforeClose(this.setDataToJsonFromExcel, this);
            }
            this.fixedDialog.open();
        },

        //Setting data to JSON from the Excel
        setDataToJsonFromExcel: function (oEvent) {
            
            var oUploader = oEvent.getSource().getContent()[0];
            var domRef = oUploader.getFocusDomRef();
            if (domRef.files.length === 0) {
                MessageBox.alert("Please Upload a File");
                return;
            }
            var file = domRef.files[0];
            // that = this
            this.fileName = file.name;
            this.fileType = file.type;

            // Create a File Reader object
            var reader = new FileReader();
            var tableCol;
            //reading the file data
            reader.onload = function (e) {
                var arrCSV = e.currentTarget.result.match(/[\w .^@]+(?=,?)/g);
                if(that.selectedkey === "UserInfo" || that.selectedkey === undefined)
                {
                    tableCol = that.getView().byId("table0").getColumns();
                }
                if(that.selectedkey === "UserAccess")
                {
                    tableCol = that.getView().byId("table1").getColumns();
                }
                if(that.selectedkey === "Section")
                {
                    tableCol = that.getView().byId("table2").getColumns();
                }
                if(that.selectedkey === "StatusCode")
                {
                    tableCol = that.getView().byId("table3").getColumns();
                }
                if(that.selectedkey === "Systems")
                {
                    tableCol = that.getView().byId("table4").getColumns();
                }
                if(that.selectedkey === "Phases")
                {
                    tableCol = that.getView().byId("table5").getColumns();
                }
                if(that.selectedkey === "Company")
                {
                    tableCol = that.getView().byId("table6").getColumns();
                }
                if(that.selectedkey === "Issue")
                {
                    tableCol = that.getView().byId("table7").getColumns();
                }
                if(that.selectedkey === "Category")
                {
                    tableCol = that.getView().byId("table8").getColumns();
                }
                if(that.selectedkey === "Admin")
                {
                    tableCol = that.getView().byId("table9").getColumns();
                }
                if(that.selectedkey === "Qus_Head")
                {
                    tableCol = that.getView().byId("table10").getColumns();
                }
                if(that.selectedkey === "Qus_Map")
                {
                    tableCol = that.getView().byId("table11").getColumns();
                }
                var noOfCol = tableCol.length;
                // To ignore the first row which is header
                var headerRow = arrCSV.splice(0, noOfCol);
                var data = [];
                while (arrCSV.length > 0) {
                    var record = {};
                    // extract remaining rows one by one
                    var excelData = arrCSV.splice(0, noOfCol);
                    for (var i = 0; i < excelData.length; i++) {
                        record[headerRow[i]] = excelData[i].trim();
                    }
                    // push row to an array
                    data.push(record);
                }
                // Bind the data to the Table
                for (var i = 0; i < data.length; i++) {
                    if(that.selectedkey === "UserInfo" || that.selectedkey === undefined) {
                        var oContext = that.getView().byId("table0").getBinding("items")
                            .create({
                                "UserIsMandatoryforCRC": data[i].UserIsMandatoryforCRC,
                                "SAPUserID": data[i].SAPUserID,
                                "UserName": data[i].UserName,
                                "EmailID": data[i].EmailID,
                                "CompanyName": data[i].CompanyName,
                                "ManagerName": data[i].ManagerName,
                                "Admin": data[i].Admin,
                        });
                    }
                    if(that.selectedkey === "UserAccess") {
                        var oContext = that.getView().byId("table1").getBinding("items")
                            .create({
                                
                                "SAPUserID": data[i].SAPUserID,
                                "SystemDev": data[i].SystemDev,
                                "DeveloperAccess": data[i].DeveloperAccess,
                                "L1ReviewerAccess": data[i].L1ReviewerAccess,
                                "L2ReviewerAccess": data[i].L2ReviewerAccess,
                            });
                        }
                        if(that.selectedkey === "Section") {
                            var oContext = that.getView().byId("table2").getBinding("items")
                                .create({   
                                    "SectionNo": data[i].SectionNo,
                                    "SectionName": data[i].SectionName,
                                    "SectionPriority": data[i].SectionPriority,
                                    "Type": data[i].Type,
                                    "ObjectType": data[i].ObjectType,
                                });
                            }
                        if(that.selectedkey === "StatusCode") {
                            var oContext = that.getView().byId("table3").getBinding("items")
                                .create({
                                    "statuscode": data[i].statuscode,
                                    "statustext": data[i].statustext,
                                    "statustype": data[i].statustype,
                                    "state": data[i].state,
                                });
                            }
                        if(that.selectedkey === "Systems") {
                            var oContext = that.getView().byId("table4").getBinding("items")
                                .create({
                                    "SystemID": data[i].SystemID,
                                });
                            }
                        if(that.selectedkey === "Phases") {
                            var oContext = that.getView().byId("table5").getBinding("items")
                                .create({   
                                    "Phase": data[i].Phase,
                                    "Description": data[i].Description,
                                });
                            }
                        if(that.selectedkey === "Company") {
                            var oContext = that.getView().byId("table6").getBinding("items")
                                .create({   
                                    "CompanyName": data[i].CompanyName,
                                    "Description": data[i].Description,
                                });
                            }
                            if(that.selectedkey === "Issue") {
                                var oContext = that.getView().byId("table7").getBinding("items")
                                    .create({   
                                        "IssueType": data[i].IssueType,
                                        "Description": data[i].Description,
                                    });
                                }
                            if(that.selectedkey === "Category") {
                                var oContext = that.getView().byId("table8").getBinding("items")
                                    .create({   
                                        "IssueCategory": data[i].IssueCategory,
                                        "Description": data[i].Description,
                                    });
                                }
                            if(that.selectedkey === "Admin") {
                                var oContext = that.getView().byId("table9").getBinding("items")
                                    .create({   
                                        "AdminUserId": data[i].AdminUserId,
                                        "AdminName": data[i].AdminName,
                                        "CompanyName": data[i].CompanyName,
                                    });
                                }
                            if(that.selectedkey === "Qus_Head") {
                                var oContext = that.getView().byId("table10").getBinding("items")
                                    .create({   
                                        "QuestionNo": data[i].QuestionNo,
                                        "Question": data[i].Question,
                                        "QuestionPriority": data[i].QuestionPriority,
                                    });
                                } 
                            if(that.selectedkey === "Qus_Map") {
                                var oContext = that.getView().byId("table11").getBinding("items")
                                    .create({   
                                        "QuestionNo": data[i].QuestionNo,
                                        "SectionNn": data[i].SectionNn,
                                    });
                                } 
                            if(that.selectedkey === "QnType_Priority") {
                                var oContext = that.getView().byId("table12").getBinding("items")
                                    .create({   
                                        "Type": data[i].Type,
                                        "Priority": data[i].Priority,
                                        "Sectionno": data[i].Sectionno,
                                    });
                                } 
                }
                MessageBox.information("File uploaded Successfully");
            };
            reader.readAsText(file);
            oUploader.clear();
        },

        //Side Navigation Item Select
        onItemSelect: function (oEvent) {
            var data = this.getView().getModel("VisibleModel").getData();
            that.selectedkey = oEvent.getSource().getSelectedKey();
            Object.keys(data).forEach(key => {
                if (key === that.selectedkey)
                {
                    data[key] = true;
                }
                else
                {
                    data[key] = false;
                }
            });
            this.getView().getModel("VisibleModel").setData(data);
        },

        //Side Navigation menu icon press to expand to side
        onSideNavButtonPress: function () {
            var oToolPage = this.byId("app");
            var bSideExpanded = oToolPage.getSideExpanded();
            this._setToggleButtonTooltip(bSideExpanded);
            oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
        },
        _setToggleButtonTooltip: function (bLarge) {
            var oToggleButton = this.byId('sideNavigationToggleButton');
            if (bLarge) {
                oToggleButton.setTooltip('Large Size Navigation');
            } else {
                oToggleButton.setTooltip('Small Size Navigation');
            }
        },
        handleUserNamePress: function (event) {
            var oPopover = new Popover({
                showHeader: false,
                placement: PlacementType.Bottom,
                content: [
                    new Button({
                        text: 'Feedback',
                        type: ButtonType.Transparent
                    }),
                    new Button({
                        text: 'Help',
                        type: ButtonType.Transparent
                    }),
                    new Button({
                        text: 'Logout',
                        type: ButtonType.Transparent
                    })
                ]
            }).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');
            oPopover.openBy(event.getSource());
        },        
    });
});

