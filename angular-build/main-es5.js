function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chatComponents/chatbox/chatbox.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatComponents/chatbox/chatbox.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatComponentsChatboxChatboxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card chat-card\">\n    <div class=\"chat-header\">\n        <img src=\"https://www.w3schools.com/howto/img_avatar.png\" class=\"rounded-circle\" alt=\"image\">\n        <div class=\"chat-text\">\n            <p class=\"chat-name\">{{ receiver }}</p>\n            <p class=\"chat-length\">{{ typingStatus }}</p>\n        </div>\n        <span class=\"icon-right\"><i class=\"fa fa-ellipsis-v\"></i></span>\n        <div class=\"side-menu\">\n            <ul>\n                <li><i class=\"fa fa-user-circle\"></i> View profile</li>\n                <li><i class=\"fa fa-sign-out\"></i> Sign Out</li>\n                <!-- <li onClick={()=>{this.props.logout()}}><i class=\"fa fa-sign-out\"></i>Log Out</li> -->\n            </ul>\n        </div>\n    </div>\n    <div class=\"chat-body\">\n        <div *ngFor=\"let message of roomMessages\">\n            <div class=\"chat-username\">\n                <img src=\"https://www.w3schools.com/howto/img_avatar.png\" class=\"rounded-circle\" alt=\"\">\n                <p class=\"chat-message\">{{ message.text }}</p>\n            </div>\n            <p class=\"chat-sender\">{{ message.sender }}</p>\n        </div>\n    </div>\n    <form (ngSubmit)=\"sendMessage(sendMessageForm)\" [formGroup]=\"sendMessageForm\">\n        <div class=\"chat-footer\">\n            <input\n                type=\"text\"\n                (input)=\"typingMessage()\" \n                class=\"send-chat\" \n                placeholder=\"Type your messsage....\"\n                name=\"message\"\n                [formControl]=\"message\"\n                #clearInput\n            >\n            <span class=\"send-button\" onClick=\"sendMessage()\"><i class=\"fa fa-send\"></i></span>\n        </div>\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chatComponents/userlist/userlist.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatComponents/userlist/userlist.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatComponentsUserlistUserlistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card userlist-card\">\n    <div class=\"userlist-header\">\n        <input type=\"text\" class=\"username\" placeholder=\"Enter Username...\" alt=\"\" />\n    </div>\n    <div class=\"userlist-body\">\n        <div *ngFor=\"let activeUser of activeUserList\">\n            <div class=\"show-users\" *ngIf=\"activeUser.username != username\" (click)=\"generateRoomID(activeUser.username)\">\n                <img src=\"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\"\n                    class=\"rounded-circle\" alt=\"\" />\n                <div class=\"userlist-text\">\n                    <p class=\"userlist-name\">{{ activeUser.username }}</p>\n                    <p class=\"userlist-messageCount\"> 0 new messages</p>\n                    <p class=\"userlist-status\">{{ activeUser.usersInfo[0].isActive }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<chat-navbar></chat-navbar>\n<div class=\"container-fluid mt-4\">\n    <div class=\"row\">\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\n            <userlist></userlist>\n        </div>\n        <div class=\"col-lg-8 col-md-8 col-sm-12\">\n            <chatbox *ngIf=\"showChatWindow\"></chatbox>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login-container\">\n    <div class=\"card login-card\">\n        <p class=\"login-title\">Smart Chat</p>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <form class=\"form-container\" [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser(loginForm)\">\n                    <span class=\"red-error\" *ngIf=\"loginError\">{{'*' + loginError }}</span>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Username</mat-label>\n                        <input matInput placeholder=\"Type your username\" [formControl]=\"loginusername\" name=\"loginusername\">\n                        <mat-error *ngIf=\"loginusername.hasError('required')\">Username is required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Password</mat-label>\n                        <input matInput type=\"password\" placeholder=\"Type your password\" [formControl]=\"loginpassword\" name=\"loginpassword\">\n                        <mat-error *ngIf=\"loginpassword.hasError('required')\">Password is required</mat-error>\n                    </mat-form-field>\n                    <button mat-raised-button color=\"primary\">Login</button>\n                </form>\n            </div>\n        </div>\n        <div class=\"d-flex justify-content-between form-container mb-3\">\n            <a routerLink=\"/signup\"><button mat-raised-button color=\"primary\" class=\"mr-2\">Sign Up with Email</button></a>\n            <button mat-raised-button color=\"primary\">Sign Up with Google</button>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-sm bg-info\">\n    <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#mainDiv\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"mainNav\">\n        <div class=\"navbar-nav ml-auto\">\n            <a class=\"nav-item nav-link active\" href=\"#\">Welcome {{ currentUser }}</a> \n            <a class=\"nav-item nav-link\" href=\"#\">Home</a>\n            <a class=\"nav-item nav-link\" href=\"#\">Create Group</a>\n            <a class=\"nav-item nav-link\" href=\"#\">Setting</a>\n            <p class=\"nav-item nav-link\" (click)=\"logoutUser()\">Log out</p>\n        </div>\n    </div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"signup-container\">\n    <div class=\"card signup-card\">\n        <p class=\"signup-title\">Smart Chat</p>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <form class=\"form-container\" [formGroup]=\"signupForm\" (ngSubmit)=\"submitUser(signupForm)\">\n                    <span class=\"red-error\" *ngIf=\"signupError\">{{'*' + signupError }}</span>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Email</mat-label>\n                        <input matInput placeholder=\"Type your Email\" [formControl]=\"signupemail\" name=\"signupemail\">\n                        <mat-error *ngIf=\"signupemail.hasError('required')\">Email is required</mat-error>\n                        <mat-error *ngIf=\"!signupemail.hasError('required') && signupemail.hasError('email')\">Invalid Email ID</mat-error>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Username</mat-label>\n                        <input matInput placeholder=\"Type your username\" [formControl]=\"signupusername\" name=\"signupusername\">\n                        <mat-error *ngIf=\"signupusername.hasError('required')\">Username is required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Password</mat-label>\n                        <input matInput type=\"password\" placeholder=\"Type your password\" [formControl]=\"signuppassword\" name=\"signuppassword\">\n                        <mat-error *ngIf=\"signuppassword.hasError('required')\">Password is required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Confirm Password</mat-label>\n                        <input matInput type=\"password\" placeholder=\"Type your Confirm password\" [formControl]=\"signupConfirmpassword\" name=\"signupConfirmpassword\">\n                        <mat-error *ngIf=\"signupConfirmpassword.hasError('required')\">Password is required</mat-error>\n                        <mat-error *ngIf=\"signupConfirmpassword.hasError('mustMatch')\">Password does not matched</mat-error>\n                    </mat-form-field>\n                    <button mat-raised-button color=\"primary\" class=\"mb-4\">Sign Up</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'chatApp';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-webstorage-service */
    "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _chatComponents_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./chatComponents/userlist/userlist.component */
    "./src/app/chatComponents/userlist/userlist.component.ts");
    /* harmony import */


    var _chatComponents_chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./chatComponents/chatbox/chatbox.component */
    "./src/app/chatComponents/chatbox/chatbox.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _chatComponents_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_14__["UserlistComponent"], _chatComponents_chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_15__["ChatboxComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], angular_webstorage_service__WEBPACK_IMPORTED_MODULE_8__["StorageServiceModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/chatComponents/chatbox/chatbox.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/chatComponents/chatbox/chatbox.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatComponentsChatboxChatboxComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chat-card{\r\n    border-radius: 30px; \r\n    background: rgba(73,165,191,1);   \r\n}\r\n\r\n.chat-header{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    padding: 10px 30px 10px 30px;   \r\n}\r\n\r\n.chat-header img{\r\n    height: 100px;\r\n    width: 100px;\r\n}\r\n\r\n.chat-text{\r\n    padding: 16px 10px 16px 25px;\r\n}\r\n\r\n.chat-name{\r\n    font-family: 'Roboto Mono', monospace;\r\n    font-size: 23px;\r\n    margin: 0px !important;\r\n}\r\n\r\n.chat-length{\r\n    font-family: 'Lexend Deca', sans-serif;\r\n    font-size: 14px;\r\n}\r\n\r\n.icon-right{\r\n    position: absolute;\r\n    top: 40px;\r\n    right: 35px;\r\n    font-size: 30px;\r\n    cursor: pointer;\r\n}\r\n\r\n.chat-body{\r\n    min-height: 332px;\r\n    max-height: 332px;\r\n    overflow-y: auto;\r\n    border-top: 1px solid black;\r\n}\r\n\r\n.side-menu{\r\n    z-index: 1;\r\n    position: absolute;\r\n    background-color: rgba(0,0,0,0.5);\r\n    color: white;\r\n    border-radius: 15px;\r\n    top:75px;\r\n    right: 40px;\r\n    display: none;\r\n}\r\n\r\n.side-menu ul{\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.side-menu ul li{\r\n    width: 100%;\r\n    padding: 10px 15px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.side-menu ul li i{\r\n    padding-right: 10px;\r\n}\r\n\r\n.side-menu ul li:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.chat-footer{\r\n    padding: 20px;\r\n    border-bottom-left-radius: 30px;\r\n    border-bottom-right-radius: 30px;\r\n}\r\n\r\n.send-chat{\r\n    border: none;\r\n    width: 100%;\r\n    padding: 15px 25px 15px 25px;\r\n    border-radius: 26px;\r\n    outline: none;\r\n}\r\n\r\n.send-button{\r\n    position: absolute;\r\n    bottom: 26px;\r\n    right: 40px;\r\n    font-size:26px;\r\n    cursor: pointer;\r\n}\r\n\r\n.chat-username{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    padding: 10px 0px 0px 26px;\r\n}\r\n\r\n.chat-username img{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.chat-message{\r\n    padding: 15px 18px 7px 18px;\r\n    font-size: 16px;\r\n    margin-bottom: 0px !important;\r\n    background: rgba(179,220,237,1);\r\n    border-radius: 26px;\r\n}\r\n\r\n.chat-sender{\r\n    margin: 0px 0px 0px 95px!important;\r\n    font-size: 12px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdENvbXBvbmVudHMvY2hhdGJveC9jaGF0Ym94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFHQTtJQUNJLHNDQUFzQztJQUN0QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jaGF0Q29tcG9uZW50cy9jaGF0Ym94L2NoYXRib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LWNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4OyBcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNzMsMTY1LDE5MSwxKTsgICBcclxufVxyXG5cclxuLmNoYXQtaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDMwcHg7ICAgXHJcbn1cclxuXHJcbi5jaGF0LWhlYWRlciBpbWd7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uY2hhdC10ZXh0e1xyXG4gICAgcGFkZGluZzogMTZweCAxMHB4IDE2cHggMjVweDtcclxufVxyXG5cclxuLmNoYXQtbmFtZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gIFxyXG4uY2hhdC1sZW5ndGh7XHJcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCBEZWNhJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmljb24tcmlnaHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICByaWdodDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNoYXQtYm9keXtcclxuICAgIG1pbi1oZWlnaHQ6IDMzMnB4O1xyXG4gICAgbWF4LWhlaWdodDogMzMycHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uc2lkZS1tZW51e1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB0b3A6NzVweDtcclxuICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNpZGUtbWVudSB1bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc2lkZS1tZW51IHVsIGxpe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5zaWRlLW1lbnUgdWwgbGkgaXtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zaWRlLW1lbnUgdWwgbGk6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jaGF0LWZvb3RlcntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbi5zZW5kLWNoYXR7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnNlbmQtYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyNnB4O1xyXG4gICAgcmlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6MjZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNoYXQtdXNlcm5hbWV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDI2cHg7XHJcbn1cclxuXHJcbi5jaGF0LXVzZXJuYW1lIGltZ3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5jaGF0LW1lc3NhZ2V7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE4cHggN3B4IDE4cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTc5LDIyMCwyMzcsMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xyXG59XHJcblxyXG4uY2hhdC1zZW5kZXJ7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDk1cHghaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/chatComponents/chatbox/chatbox.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/chatComponents/chatbox/chatbox.component.ts ***!
    \*************************************************************/

  /*! exports provided: ChatboxComponent */

  /***/
  function srcAppChatComponentsChatboxChatboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatboxComponent", function () {
      return ChatboxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/chat.service */
    "./src/app/service/chat.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ChatboxComponent =
    /*#__PURE__*/
    function () {
      function ChatboxComponent(chatService) {
        _classCallCheck(this, ChatboxComponent);

        this.chatService = chatService;
        this.roomMessages = [];
        this.timeout = undefined;
        this.typingStatus = '';
        this.sendMessageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          message: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
      }

      _createClass(ChatboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.chatService.receiver.subscribe(function (username) {
            _this.receiver = username;
          });
          this.chatService.message.subscribe(function (messages) {
            _this.roomMessages = messages;
          });
          this.chatService.typingStatus.subscribe(function (typingStatus) {
            if (typingStatus == true) {
              _this.typingStatus = "".concat(_this.receiver, " is typing");
            } else _this.typingStatus = '';
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(sendMessageForm) {
          this.chatService.sendMessage(this.receiver, sendMessageForm.value.message);
          this.clearInput.nativeElement.value = '';
        }
      }, {
        key: "timeoutFunction",
        value: function timeoutFunction() {
          this.typing = false;
          console.log('timeout function');
          this.chatService.emitTypingStatus(false);
        }
      }, {
        key: "typingMessage",
        value: function typingMessage() {
          if (this.typing == false) {
            this.typing = true;
            this.chatService.emitTypingStatus(true);
            this.timeout = setTimeout(this.timeoutFunction.bind(this), 5000);
          } else {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(this.timeoutFunction.bind(this), 5000);
          }
        }
      }, {
        key: "message",
        get: function get() {
          return this.sendMessageForm.get('message');
        }
      }]);

      return ChatboxComponent;
    }();

    ChatboxComponent.ctorParameters = function () {
      return [{
        type: src_app_service_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('clearInput', {
      static: false
    })], ChatboxComponent.prototype, "clearInput", void 0);
    ChatboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'chatbox',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chatbox.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chatComponents/chatbox/chatbox.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chatbox.component.css */
      "./src/app/chatComponents/chatbox/chatbox.component.css")).default]
    })], ChatboxComponent);
    /***/
  },

  /***/
  "./src/app/chatComponents/userlist/userlist.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/chatComponents/userlist/userlist.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatComponentsUserlistUserlistComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".userlist-card{\n    border-radius: 30px;\n    max-height: 650px;\n    background: rgba(73,155,234,1);\n}\n\n.userlist-header{\n    padding: 20px 30px 20px 30px;\n    background: rgba(73,155,234,1);\n    border-top-left-radius: 30px;\n    border-top-right-radius: 30px;\n}\n\n.username{\n    border: none;\n    padding: 12px 25px;\n    width: 100%;\n    border-radius: 25px;\n    outline: none;\n    font-size: 16px;\n}\n\n.userlist-body{\n    border-top: 1px solid black;\n    padding: 5px 10px;\n    overflow-y: auto;\n    min-height:460px;\n    max-height:460px;\n    border-bottom-right-radius: 30px;\n    border-bottom-left-radius: 30px;\n}\n\n.show-users{\n    display: -webkit-box;\n    display: flex;\n    margin-bottom: 10px;\n    cursor: pointer;\n}\n\n.userlist-body img{\n    height: 80px;\n    width: 80px;\n}\n\n.userlist-text{\n    padding: 10px 15px;\n    display: inline-block;\n}\n\n.userlist-name{\n    font-family: 'Roboto Mono', monospace;\n    font-size: 15px;\n    margin: 0px !important;\n}\n\n.userlist-status{\n    font-family: 'Lexend Deca', sans-serif;\n    font-size: 14px;\n    margin: 0px !important;\n}\n\n.userlist-messageCount{\n    font-family:'Lexend Deca',sans-serif;\n    font-size: 14px;\n    margin :0;\n    font-weight: bold;\n    color: #4DF5E5;\n}\n\n@media (min-width: 300px){\n    .userlist-card{\n        margin-bottom: 6px;\n    }\n}\n\n@media (min-width: 400px){\n    .userlist-body img{\n        margin-top: 3px;\n    }\n}\n\n@media (min-width: 530px){\n    .userlist-name{ font-size: 20px;}\n    .userlist-status{ font-size: 16px}\n    .userlist-body img {\n        height: 90px;\n        width: 90px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdENvbXBvbmVudHMvdXNlcmxpc3QvdXNlcmxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQixlQUFlLENBQUM7SUFDaEMsa0JBQWtCLGVBQWU7SUFDakM7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jaGF0Q29tcG9uZW50cy91c2VybGlzdC91c2VybGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJsaXN0LWNhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBtYXgtaGVpZ2h0OiA2NTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDczLDE1NSwyMzQsMSk7XG59XG5cbi51c2VybGlzdC1oZWFkZXJ7XG4gICAgcGFkZGluZzogMjBweCAzMHB4IDIwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDczLDE1NSwyMzQsMSk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbn1cblxuLnVzZXJuYW1le1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMnB4IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnVzZXJsaXN0LWJvZHl7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbWluLWhlaWdodDo0NjBweDtcbiAgICBtYXgtaGVpZ2h0OjQ2MHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwcHg7XG59XG5cbi5zaG93LXVzZXJze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51c2VybGlzdC1ib2R5IGltZ3tcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG59XG5cbi51c2VybGlzdC10ZXh0e1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi51c2VybGlzdC1uYW1le1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi51c2VybGlzdC1zdGF0dXN7XG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQgRGVjYScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi51c2VybGlzdC1tZXNzYWdlQ291bnR7XG4gICAgZm9udC1mYW1pbHk6J0xleGVuZCBEZWNhJyxzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4gOjA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM0REY1RTU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCl7XG4gICAgLnVzZXJsaXN0LWNhcmR7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCl7XG4gICAgLnVzZXJsaXN0LWJvZHkgaW1ne1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTMwcHgpe1xuICAgIC51c2VybGlzdC1uYW1leyBmb250LXNpemU6IDIwcHg7fVxuICAgIC51c2VybGlzdC1zdGF0dXN7IGZvbnQtc2l6ZTogMTZweH1cbiAgICAudXNlcmxpc3QtYm9keSBpbWcge1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/chatComponents/userlist/userlist.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/chatComponents/userlist/userlist.component.ts ***!
    \***************************************************************/

  /*! exports provided: UserlistComponent */

  /***/
  function srcAppChatComponentsUserlistUserlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserlistComponent", function () {
      return UserlistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/chat.service */
    "./src/app/service/chat.service.ts");
    /* harmony import */


    var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/user.service */
    "./src/app/service/user.service.ts");

    var UserlistComponent =
    /*#__PURE__*/
    function () {
      function UserlistComponent(chatService, userService) {
        _classCallCheck(this, UserlistComponent);

        this.chatService = chatService;
        this.userService = userService;
        this.activeUserList = [];
      }

      _createClass(UserlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.chatService.userListObservable.subscribe(function (data) {
            _this2.activeUserList = data;
          });
          this.userService.getUsername().subscribe(function (res) {
            _this2.username = res.username;
          });
        }
      }, {
        key: "createRoom",
        value: function createRoom(sender, reciever) {
          sender = sender.toLocaleLowerCase();
          reciever = reciever.toLocaleLowerCase();
          var roomArray = [];
          roomArray.push(sender, reciever);
          var roomID = roomArray.sort().toString();
          return roomID;
        }
      }, {
        key: "generateRoomID",
        value: function generateRoomID(receiver) {
          var sender = this.username; // let socket = this.chatService.socket

          var roomID = this.createRoom(sender, receiver); // socket.emit('JOIN_ROOM',roomID,sender,receiver)
          // this.chatService.setActiveChatWindow()

          this.chatService.joinRoom(roomID, sender, receiver);
        }
      }]);

      return UserlistComponent;
    }();

    UserlistComponent.ctorParameters = function () {
      return [{
        type: src_app_service_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
      }, {
        type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    UserlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'userlist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./userlist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chatComponents/userlist/userlist.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./userlist.component.css */
      "./src/app/chatComponents/userlist/userlist.component.css")).default]
    })], UserlistComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _service_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/chat.service */
    "./src/app/service/chat.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(userService, chatService) {
        _classCallCheck(this, HomeComponent);

        this.userService = userService;
        this.chatService = chatService;
        this.showChatWindow = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.userService.getUsername().subscribe(function (res) {
            _this3.currentUser = res.username;

            _this3.chatService.initiateSocket(_this3.currentUser);
          });
          this.chatService.activeChatWindow.subscribe(function (status) {
            _this3.showChatWindow = status;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _service_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-container{\r\n    padding: 6em 0em 0em 0em;\r\n}\r\n\r\n.login-card{\r\n    width: 30vw;\r\n    margin: 0 auto;\r\n    border-radius: 15px;\r\n    box-shadow: 0px 0px 11px 4px rgba(179,175,179,1);\r\n}\r\n\r\n.login-title{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    padding:5px 25px 0px;\r\n    font-family: 'Germania One', cursive;\r\n    font-size:4vw;\r\n    margin-bottom : 0px !important;\r\n}\r\n\r\n.form-container{\r\n    padding: 10px 30px;\r\n}\r\n\r\n.form-container > * {\r\n    width: 100%;\r\n}\r\n\r\n.red-error{\r\n    font-size: 14px;\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogNmVtIDBlbSAwZW0gMGVtO1xyXG59XHJcblxyXG4ubG9naW4tY2FyZHtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMXB4IDRweCByZ2JhKDE3OSwxNzUsMTc5LDEpO1xyXG59XHJcblxyXG4ubG9naW4tdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6NXB4IDI1cHggMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdHZXJtYW5pYSBPbmUnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOjR2dztcclxuICAgIG1hcmdpbi1ib3R0b20gOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucmVkLWVycm9ye1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/user.service */
    "./src/app/service/user.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(userService, router) {
        _classCallCheck(this, LoginComponent);

        this.userService = userService;
        this.router = router;
        this.loginError = null;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          loginusername: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          loginpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loginUser",
        value: function loginUser(loginForm) {
          var _this4 = this;

          if (loginForm.status === 'INVALID') return;
          this.userService.loginExistingUser(loginForm.value).subscribe(function (res) {
            if (!res.loginStatus) {
              _this4.loginError = res.loginError;
            } else {
              _this4.userService.storeJWTToken(res.token);

              _this4.router.navigate(['home']);
            }
          });
        }
      }, {
        key: "loginusername",
        get: function get() {
          return this.loginForm.get('loginusername');
        }
      }, {
        key: "loginpassword",
        get: function get() {
          return this.loginForm.get('loginpassword');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/navbar/navbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar p{\n    margin-bottom: 0!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciBwe1xuICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _service_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/chat.service */
    "./src/app/service/chat.service.ts");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(userService, router, chatService) {
        _classCallCheck(this, NavbarComponent);

        this.userService = userService;
        this.router = router;
        this.chatService = chatService;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.userService.getUsername().subscribe(function (res) {
            _this5.currentUser = res.username;
          });
        }
      }, {
        key: "logoutUser",
        value: function logoutUser() {
          // this.userService.logOutUser()
          // .subscribe((res:any) =>{
          // 	this.userService.removeJWTToken()
          // 	this.router.navigate(['/login'])
          // })
          this.chatService.logoutUser();
          this.userService.removeJWTToken();
          this.router.navigate(['/login']);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _service_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'chat-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/service/chat.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/chat.service.ts ***!
    \*****************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppServiceChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/service/user.service.ts");

    var ChatService =
    /*#__PURE__*/
    function () {
      // createUser(name,id){
      // 	return {
      // 		name: name,
      // 		socketId: id
      // 	}
      // }
      function ChatService(userService) {
        _classCallCheck(this, ChatService);

        this.userService = userService;
        this.userListObservable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.activeChatWindow = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.receiver = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](); // message = new Subject<Array<any>>()

        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.typingStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.userService.baseUrl);
        this.activeChatWindow.next(false);
      }

      _createClass(ChatService, [{
        key: "initiateSocket",
        value: function initiateSocket(currentUser) {
          var _this6 = this;

          this.socket.emit('SET_USER_SOCKET', currentUser); // this.socket.on('connect',()=>{
          // 	let createdUser = this.createUser(currentUser,this.socket.id)
          // 	this.socket.emit('CONNECT_USERS',createdUser, currentUser)
          // })

          this.socket.on('CONNECTED_USERS', function (activeUsers) {
            _this6.userListObservable.next(activeUsers);
          }); // this.socket.emit('ACTIVE_USERS',currentUser)

          this.socket.on('SHOW_USER_MESSAGES', function (messages, receiver, roomID) {
            _this6.receiver.next(receiver);

            _this6.room = roomID;

            _this6.message.next(messages); // console.log(messages)

          });
          this.socket.on('RECEIVE_MESSAGE', function (messageData) {
            // let data : any = this.message.value.push(messageData)
            // this.message.next(data)
            // let data : any = this.message.value.push(messageData)
            var oldMessages = _this6.message.value;
            var updatedMessages = [].concat(_toConsumableArray(oldMessages), [messageData]);

            _this6.message.next(updatedMessages);
          });
          this.socket.on('USER_TYPING_STATUS', function (typingStatus) {
            _this6.typingStatus.next(typingStatus);
          });
        }
      }, {
        key: "setActiveChatWindow",
        value: function setActiveChatWindow() {
          this.activeChatWindow.next(true);
        }
      }, {
        key: "logoutUser",
        value: function logoutUser() {
          this.socket.emit('LOGOUT_USER');
        }
      }, {
        key: "joinRoom",
        value: function joinRoom(roomId, sender, receiver) {
          this.activeChatWindow.next(true);
          this.socket.emit('JOIN_ROOM', roomId, sender, receiver);
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(receiver, message) {
          this.socket.emit('SEND_MESSAGE', receiver, message, this.room);
        }
      }, {
        key: "emitTypingStatus",
        value: function emitTypingStatus(typingStatus) {
          this.socket.emit('USER_TYPING_STATUS', this.room, typingStatus);
        }
      }]);

      return ChatService;
    }();

    ChatService.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ChatService);
    /***/
  },

  /***/
  "./src/app/service/user.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/user.service.ts ***!
    \*****************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServiceUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-webstorage-service */
    "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http, storage) {
        var _this7 = this;

        _classCallCheck(this, UserService);

        this.http = http;
        this.storage = storage;
        this.baseUrl = "http://localhost:3000";

        this.storeJWTToken = function (token) {
          _this7.storage.set('token', token);
        };

        this.getUsername = function () {
          var token = _this7.storage.get('token');

          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': token
            })
          };
          return _this7.http.get('/api/validateToken', httpOptions);
        };

        this.removeJWTToken = function () {
          _this7.storage.remove('token');
        };
      }

      _createClass(UserService, [{
        key: "saveNewUser",
        value: function saveNewUser(userdata) {
          return this.http.post('/api/signup', userdata);
        }
      }, {
        key: "loginExistingUser",
        value: function loginExistingUser(logindata) {
          return this.http.post('/api/login', logindata);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["WebStorageService"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"]]
        }]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"]))], UserService);
    /***/
  },

  /***/
  "./src/app/signup/signup.component.css":
  /*!*********************************************!*\
    !*** ./src/app/signup/signup.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".signup-container{\r\n    padding: 4em 0em 0em 0em;\r\n}\r\n\r\n.signup-card{\r\n    width: 30vw;\r\n    margin: 0 auto;\r\n    border-radius: 15px;\r\n    box-shadow: 0px 0px 11px 4px rgba(179,175,179,1);\r\n}\r\n\r\n.signup-title{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    padding:5px 25px 0px;\r\n    font-family: 'Germania One', cursive;\r\n    font-size:4vw;\r\n    margin-bottom : 0px !important;\r\n}\r\n\r\n.form-container{\r\n    padding: 10px 30px;\r\n}\r\n\r\n.form-container > * {\r\n    width: 100%;\r\n}\r\n\r\n.red-error{\r\n    font-size: 14px;\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cC1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiA0ZW0gMGVtIDBlbSAwZW07XHJcbn1cclxuXHJcbi5zaWdudXAtY2FyZHtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMXB4IDRweCByZ2JhKDE3OSwxNzUsMTc5LDEpO1xyXG59XHJcblxyXG4uc2lnbnVwLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOjVweCAyNXB4IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2VybWFuaWEgT25lJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTo0dnc7XHJcbiAgICBtYXJnaW4tYm90dG9tIDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlZC1lcnJvcntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _signup_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup.validators */
    "./src/app/signup/signup.validators.ts");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(userService, router) {
        _classCallCheck(this, SignupComponent);

        this.userService = userService;
        this.router = router;
        this.signupError = null;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          signupusername: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          signuppassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          signupConfirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          signupemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
        }, {
          validators: _signup_validators__WEBPACK_IMPORTED_MODULE_5__["SignUpValidators"].MustMatch
        });
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submitUser",
        value: function submitUser(signupForm) {
          var _this8 = this;

          if (signupForm.status === 'INVALID') return;
          this.userService.saveNewUser(signupForm.value).subscribe(function (res) {
            if (!res.signUpStatus) {
              _this8.signupError = res.msg;
            } else {
              console.log('hello');

              _this8.router.navigate(['login']);
            }
          });
        }
      }, {
        key: "signupusername",
        get: function get() {
          return this.signupForm.get('signupusername');
        }
      }, {
        key: "signuppassword",
        get: function get() {
          return this.signupForm.get('signuppassword');
        }
      }, {
        key: "signupConfirmpassword",
        get: function get() {
          return this.signupForm.get('signupConfirmpassword');
        }
      }, {
        key: "signupemail",
        get: function get() {
          return this.signupForm.get('signupemail');
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/signup/signup.component.css")).default]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/signup/signup.validators.ts":
  /*!*********************************************!*\
    !*** ./src/app/signup/signup.validators.ts ***!
    \*********************************************/

  /*! exports provided: SignUpValidators */

  /***/
  function srcAppSignupSignupValidatorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpValidators", function () {
      return SignUpValidators;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SignUpValidators =
    /*#__PURE__*/
    function () {
      function SignUpValidators() {
        _classCallCheck(this, SignUpValidators);
      }

      _createClass(SignUpValidators, null, [{
        key: "MustMatch",
        value: function MustMatch(control) {
          var password = control.get('signuppassword').value;
          var confirmPassword = control.get('signupConfirmpassword').value;

          if (password !== confirmPassword) {
            control.get('signupConfirmpassword').setErrors({
              mustMatch: true
            });
          } else {
            control.get('signupConfirmpassword').setErrors(null);
          }

          return null;
        }
      }]);

      return SignUpValidators;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /media/himanshuchauhan/10A255E2A255CCBA/Github/heroku-chat-app/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map