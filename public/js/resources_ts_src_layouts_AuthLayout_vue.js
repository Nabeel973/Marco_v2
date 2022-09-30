"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_src_layouts_AuthLayout_vue"],{

/***/ "./resources/ts/src/core/services/LayoutService.ts":
/*!*********************************************************!*\
  !*** ./resources/ts/src/core/services/LayoutService.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/enums/StoreEnums */ "./resources/ts/src/store/enums/StoreEnums.ts");
/* harmony import */ var _store___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/ */ "./resources/ts/src/store/index.ts");
/* harmony import */ var _core_helpers_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/helpers/config */ "./resources/ts/src/core/helpers/config.ts");





var LayoutService =
/** @class */
function () {
  function LayoutService() {}
  /**
   * @description initialize default layout
   */


  LayoutService.init = function () {
    //empty body element classes and attributes
    LayoutService.emptyElementClassesAndAttributes(document.body); //setup layout

    LayoutService.initLayoutSettings();
    LayoutService.initToolbarSettings();
    LayoutService.initWidthSettings(); // init layout components

    LayoutService.initDefaultLayout();
    LayoutService.initToolbar();
    LayoutService.initSidebar();
    LayoutService.initSidebarPanel();
    LayoutService.initHeader();
    LayoutService.initFooter();
  }; // Init Layout settings


  LayoutService.initLayoutSettings = function () {
    var pageWidth = object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "general.pageWidth");
    var layout = object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "general.layout");
    _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
      qualifiedName: "id",
      value: "kt_app_body"
    });
    _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_CLASSNAME, "app-" + layout);
    _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
      qualifiedName: "data-kt-app-layout",
      value: layout
    }); // Light sidebar

    if (layout === "light-sidebar") {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_LAYOUT_CONFIG_PROPERTY, {
        property: "header.default.fixed.desktop",
        value: false
      });
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_LAYOUT_CONFIG_PROPERTY, {
        property: "header.default.fixed.mobile",
        value: false
      });
    }

    if (layout === "light-sidebar" || layout === "dark-sidebar") {
      if (pageWidth === "default") {
        _store___WEBPACK_IMPORTED_MODULE_2__["default"].commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_LAYOUT_CONFIG_PROPERTY, {
          property: "header.default.container",
          value: "fluid"
        });
        _store___WEBPACK_IMPORTED_MODULE_2__["default"].commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_LAYOUT_CONFIG_PROPERTY, {
          property: "toolbar.container",
          value: "fluid"
        });
        _store___WEBPACK_IMPORTED_MODULE_2__["default"].commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_LAYOUT_CONFIG_PROPERTY, {
          property: "content.container",
          value: "fluid"
        });
        _store___WEBPACK_IMPORTED_MODULE_2__["default"].commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_LAYOUT_CONFIG_PROPERTY, {
          property: "footer.container",
          value: "fluid"
        });
      }
    }

    if (layout === "light-sidebar" || layout === "dark-sidebar") {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_LAYOUT_CONFIG_PROPERTY, {
        property: "sidebar.display",
        value: true
      });
    }

    if (layout === "light-header" || layout === "dark-header") {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_LAYOUT_CONFIG_PROPERTY, {
        property: "sidebar.display",
        value: false
      });

      if (pageWidth === "default") {
        _store___WEBPACK_IMPORTED_MODULE_2__["default"].commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_LAYOUT_CONFIG_PROPERTY, {
          property: "header.default.container",
          value: "fixed"
        });
        _store___WEBPACK_IMPORTED_MODULE_2__["default"].commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_LAYOUT_CONFIG_PROPERTY, {
          property: "toolbar.container",
          value: "fixed"
        });
        _store___WEBPACK_IMPORTED_MODULE_2__["default"].commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_LAYOUT_CONFIG_PROPERTY, {
          property: "content.container",
          value: "fixed"
        });
        _store___WEBPACK_IMPORTED_MODULE_2__["default"].commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_LAYOUT_CONFIG_PROPERTY, {
          property: "footer.container",
          value: "fixed"
        });
      }
    }
  }; // Init toolbar settings


  LayoutService.initToolbarSettings = function () {
    var defaultContent = object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "header.default.content");

    if (defaultContent === "pageTitle") {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_LAYOUT_CONFIG_PROPERTY, {
        property: "footer.container",
        value: "fixed"
      });
    }
  }; // Init page width settings


  LayoutService.initWidthSettings = function () {
    var pageWidth = object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "general.pageWidth");

    if (pageWidth !== "default") {
      var container = pageWidth === "fluid" ? "fluid" : "fixed"; // Set page width

      _store___WEBPACK_IMPORTED_MODULE_2__["default"].commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_LAYOUT_CONFIG_PROPERTY, {
        property: "header.default.container",
        value: container
      });
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_LAYOUT_CONFIG_PROPERTY, {
        property: "toolbar.container",
        value: container
      });
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_LAYOUT_CONFIG_PROPERTY, {
        property: "content.container",
        value: container
      });
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_LAYOUT_CONFIG_PROPERTY, {
        property: "footer.container",
        value: container
      });
    }
  };

  LayoutService.initDefaultLayout = function () {
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "page.class")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_CLASSNAME, {
        position: "page",
        className: object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "page.class")
      });
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "page.container") === "fixed") {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_CLASSNAME, {
        position: "page-container",
        className: "container-xxl"
      });
    } else if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "page.container") === "fluid") {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_CLASSNAME, {
        position: "page-container",
        className: "container-fluid"
      });
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "page.containerClass")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_CLASSNAME, {
        position: "page-container",
        className: object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "page.containerClass")
      });
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "wrapper.class")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_CLASSNAME, {
        position: "wrapper",
        className: object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "wrapper.class")
      });
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "wrapper.container") === "fixed") {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_CLASSNAME, {
        position: "wrapper-container",
        className: "container-xxl"
      });
    } else if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "wrapper.container") === "fluid") {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_CLASSNAME, {
        position: "wrapper-container",
        className: "container-fluid"
      });
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "wrapper.containerClass")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_CLASSNAME, {
        position: "wrapper-container",
        className: object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "wrapper.containerClass")
      });
    }
  };

  LayoutService.initToolbar = function () {
    _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
      qualifiedName: "data-kt-app-toolbar-enabled",
      value: "true"
    });

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "toolbar.class")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_CLASSNAME, {
        position: "toolbar",
        className: object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "toolbar.class")
      });
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "toolbar.container") === "fixed") {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_CLASSNAME, {
        position: "toolbar-container",
        className: "container-xxl"
      });
    } else if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "toolbar.container") === "fluid") {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_CLASSNAME, {
        position: "toolbar-container",
        className: "container-fluid"
      });
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "toolbar.containerClass")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_CLASSNAME, {
        position: "toolbar-container",
        className: object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "toolbar.containerClass")
      });
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "toolbar.fixed.desktop")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
        qualifiedName: "data-kt-app-toolbar-fixed",
        value: "true"
      });
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "toolbar.fixed.mobile")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
        qualifiedName: "data-kt-app-toolbar-fixed-mobile",
        value: "true"
      });
    }
  };

  LayoutService.initSidebar = function () {
    if (!object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebar.display")) {
      return;
    }

    _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
      qualifiedName: "data-kt-app-sidebar-enabled",
      value: "true"
    });
    _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
      qualifiedName: "data-kt-app-sidebar-fixed",
      value: "true"
    });

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebar.default.minimize.desktop.default")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
        qualifiedName: "data-kt-app-sidebar-minimize",
        value: "on"
      });
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebar.default.minimize.desktop.hoverable")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
        qualifiedName: "data-kt-app-sidebar-hoverable",
        value: "true"
      });
    }

    _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
      qualifiedName: "data-kt-app-sidebar-push-header",
      value: "true"
    });
    _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
      qualifiedName: "data-kt-app-sidebar-push-toolbar",
      value: "true"
    });
    _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
      qualifiedName: "data-kt-app-sidebar-push-footer",
      value: "true"
    });

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebar.primary.minimize.desktop.enabled")) {
      if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebar.primary.minimize.desktop.default")) {
        _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
          qualifiedName: "data-kt-app-sidebar-primary-minimize",
          value: "on"
        });
      }

      if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebar.primary.minimize.desktop.hoverable")) {
        _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
          qualifiedName: "data-kt-app-sidebar-primary-hoverable",
          value: "on"
        });
      }

      if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebar.primary.minimize.mobile.enabled")) {
        if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebar.primary.minimize.desktop.default")) {
          _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
            qualifiedName: "data-kt-app-sidebar-primary-minimize-mobile",
            value: "on"
          });
        }

        if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebar.primary.minimize.mobile.hoverable")) {
          _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
            qualifiedName: "data-kt-app-sidebar-primary-hoverable-mobile",
            value: "on"
          });
        }
      }

      if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebar.primary.collapse.desktop.enabled")) {
        if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebar.primary.collapse.desktop.default")) {
          _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
            qualifiedName: "data-kt-app-sidebar-primary-collapse",
            value: "on"
          });
        }
      }

      if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebar.primary.collapse.mobile.enabled")) {
        if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebar.primary.collapse.mobile.default")) {
          _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
            qualifiedName: "data-kt-app-sidebar-primary-collapse-mobile",
            value: "on"
          });
        }
      }
    }
  };

  LayoutService.initSidebarPanel = function () {
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebarPanel.class")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_CLASSNAME, {
        position: "sidebar-panel",
        className: object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebarPanel.class")
      });
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebarPanel.fixed.desktop")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
        qualifiedName: "data-kt-app-sidebar-panel-fixed",
        value: "true"
      });
    } else {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
        qualifiedName: "data-kt-app-sidebar-panel-fixed",
        value: "false"
      });
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebarPanel.minimize.desktop.enabled")) {
      if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebarPanel.minimize.desktop.default")) {
        _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
          qualifiedName: "data-kt-app-sidebar-panel-minimize",
          value: "on"
        });
      }

      if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebarPanel.minimize.desktop.hoverable")) {
        _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
          qualifiedName: "data-kt-app-sidebar-panel-hoverable",
          value: "on"
        });
      }

      if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebarPanel.minimize.mobile.enabled")) {
        if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "sidebarPanel.minimize.desktop.hoverable")) {
          _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
            qualifiedName: "data-kt-app-sidebar-panel-hoverable",
            value: "on"
          });
        }
      }
    }
  };

  LayoutService.initHeader = function () {
    if (!object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "header.display")) {
      return;
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "header.default.fixed.desktop")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
        qualifiedName: "data-kt-app-header-fixed",
        value: "true"
      });
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "header.default.fixed.mobile")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
        qualifiedName: "data-kt-app-header-fixed-mobile",
        value: "true"
      });
    }
  };

  LayoutService.initFooter = function () {
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "footer.fixed.desktop")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
        qualifiedName: "data-kt-app-footer-fixed",
        value: "true"
      });
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "footer.fixed.mobile")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
        qualifiedName: "data-kt-app-footer-fixed-mobile",
        value: "true"
      });
    }
  };

  LayoutService.emptyElementClassesAndAttributes = function (element) {
    element.className = "";

    for (var i = element.attributes.length; i-- > 0;) {
      element.removeAttributeNode(element.attributes[i]);
    }
  };

  return LayoutService;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutService);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layouts/AuthLayout.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layouts/AuthLayout.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _core_services_LayoutService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/LayoutService */ "./resources/ts/src/core/services/LayoutService.ts");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/enums/StoreEnums */ "./resources/ts/src/store/enums/StoreEnums.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "auth-layout",
  components: {},
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_3__.useStore)();
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      _core_services_LayoutService__WEBPACK_IMPORTED_MODULE_1__["default"].emptyElementClassesAndAttributes(document.body);
      store.dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_2__.Actions.ADD_BODY_CLASSNAME, "app-blank");
      store.dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_2__.Actions.ADD_BODY_CLASSNAME, "bg-body");
    });
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layouts/AuthLayout.vue?vue&type=template&id=66a9402a":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layouts/AuthLayout.vue?vue&type=template&id=66a9402a ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "d-flex flex-column flex-lg-row flex-column-fluid"
};
var _hoisted_2 = {
  "class": "d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1"
};
var _hoisted_3 = {
  "class": "d-flex flex-center flex-column flex-lg-row-fluid"
};
var _hoisted_4 = {
  "class": "<?php echo $params['wrapperClass']?> p-10"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex flex-center flex-wrap px-5\"><!--begin::Links--><div class=\"d-flex fw-semibold text-primary fs-base\"><a href=\"#\" class=\"px-5\" target=\"_blank\">Terms</a><a href=\"#\" class=\"px-5\" target=\"_blank\">Plans</a><a href=\"#\" class=\"px-5\" target=\"_blank\">Contact Us</a></div><!--end::Links--></div>", 1);

var _hoisted_6 = {
  "class": "d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2",
  style: {
    "background-image": "url('media/misc/auth-bg.png')"
  }
};
var _hoisted_7 = {
  "class": "d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "Logo",
  src: "media/logos/custom-1.png",
  "class": "h-60px h-lg-75px"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20",
  src: "media/misc/auth-screens.png",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7"
}, " Fast, Efficient and Productive ", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-none d-lg-block text-white fs-base text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" In this kind of post, "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "opacity-75-hover text-warning fw-bold me-1"
}, "the blogger"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" introduces a person they’ve interviewed "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" and provides some background information about "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "opacity-75-hover text-warning fw-bold me-1"
}, "the interviewee"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" and their "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" work following this is a transcript of the interview. ")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Authentication Layout "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Form"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Wrapper"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Wrapper")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Form"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Footer"), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Footer")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Aside"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Logo"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/",
    "class": "mb-0 mb-lg-12"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Logo"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Image"), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Image"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Title"), _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Text"), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Text")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Content")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Aside")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Authentication Layout ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/ts/src/layouts/AuthLayout.vue":
/*!*************************************************!*\
  !*** ./resources/ts/src/layouts/AuthLayout.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AuthLayout_vue_vue_type_template_id_66a9402a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthLayout.vue?vue&type=template&id=66a9402a */ "./resources/ts/src/layouts/AuthLayout.vue?vue&type=template&id=66a9402a");
/* harmony import */ var _AuthLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthLayout.vue?vue&type=script&lang=js */ "./resources/ts/src/layouts/AuthLayout.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_marco8_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_marco8_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AuthLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AuthLayout_vue_vue_type_template_id_66a9402a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/layouts/AuthLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/layouts/AuthLayout.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/ts/src/layouts/AuthLayout.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AuthLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layouts/AuthLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/src/layouts/AuthLayout.vue?vue&type=template&id=66a9402a":
/*!*******************************************************************************!*\
  !*** ./resources/ts/src/layouts/AuthLayout.vue?vue&type=template&id=66a9402a ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthLayout_vue_vue_type_template_id_66a9402a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthLayout_vue_vue_type_template_id_66a9402a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AuthLayout.vue?vue&type=template&id=66a9402a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layouts/AuthLayout.vue?vue&type=template&id=66a9402a");


/***/ })

}]);