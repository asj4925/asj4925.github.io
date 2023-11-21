!function () {
    var e,
      t = {
        3512: function (e, t, i) {
          "use strict";
  
          i.r(t);
        },
        6294: function (e, t, i) {
          "use strict";
  
          i.r(t);
        },
        8110: function (e, t, i) {
          "use strict";
  
          i.r(t);
        },
        2507: function (e, t, i) {
          "use strict";
  
          i.r(t);
        },
        6498: function (e, t, i) {
          "use strict";
  
          i.r(t);
        },
        1158: function (e, t, i) {
          "use strict";
  
          i.r(t);
        },
        2766: function (e, t, i) {
          "use strict";
  
          i.r(t);
        },
        5112: function (e, t, i) {
          "use strict";
  
          i.r(t);
        },
        7602: function (e, t, i) {
          var n = {
            "./ko": 3730,
            "./ko.js": 3730
          };
          function o(e) {
            var t = s(e);
            return i(t);
          }
          function s(e) {
            if (!i.o(n, e)) {
              var t = new Error("Cannot find module '" + e + "'");
              throw t.code = "MODULE_NOT_FOUND", t;
            }
            return n[e];
          }
          o.keys = function () {
            return Object.keys(n);
          }, o.resolve = s, e.exports = o, o.id = 7602;
        },
        6844: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), console.log("**ToolKit-teaching-22_0711_1**"), i(5666);
          const o = n(i(7363)),
            s = n(i(1533)),
            a = i(4185),
            r = n(i(5311));
          let l;
          i(3512), (0, r.default)(document).ready(() => {}), l = window.launcher_teaching, new class {
            constructor() {
              this._appName = "EliF Menu", this._appType = "student", this.render();
            }
            render() {
              document.getElementById("student-app") ? this._appType = "student" : this._appType = "teacher", s.default.render(o.default.createElement(a.TeachingToolStudentController, {}), document.querySelectorAll(".launcher-teaching")[0]);
            }
            get appName() {
              return this._appName;
            }
            get appType() {
              return this._appType;
            }
          }();
        },
        313: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const a = i(4667),
            r = s(i(7363)),
            l = i(4934),
            c = s(i(9861)),
            u = s(i(2084)),
            d = s(i(1247));
          t.default = e => ({
            dispatch: e,
            showSpinner: () => {
              e(d.showSpinner());
            },
            hideSpinner: () => {
              e(d.hideSpinner());
            },
            showLoadingSpinner: () => {
              e(d.showLoadingSpinner());
            },
            hideLoadingSpinner: () => {
              e(d.hideLoadingSpinner());
            },
            showDialog: (t, i) => {
              const n = Math.random(),
                o = r.cloneElement(t, {
                  key: n
                });
              e(c.showDialog(o, i));
            },
            hideDialog: t => {
              e(c.hideDiaog(t));
            },
            hideAllDialog: () => {
              e(c.hideAllDialog());
            },
            showContentTool: () => {
              e(u.showContentTool());
            },
            hideContentTool: () => {
              e(u.hideContentTool());
            },
            showContentToolMenu: () => {
              e(u.showContentToolMenu());
            },
            hideContentToolMenu: () => {
              e(u.hideContentToolMenu());
            },
            startContent: (e, t, i, n, o, s, a) => {},
            startExtraContent: (e, t, i) => {},
            stopCropDrawing: () => {
              window.curBridge.broadcastMsgToInClassStudent({
                to: l.UserMessage.Target.LAUNCHER,
                type: l.UserMessage.Type.FINISH_CROP_DRAWING
              });
            },
            resetSketchDrawing: () => {
              (0, a.resetSketchDrawing)(e);
            }
          });
        },
        8895: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const o = i(8685),
            s = n(i(1298));
          t.default = (0, o.connect)(e => ({
            dialogData: e.dialog
          }), {})(s.default);
        },
        6664: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const r = s(i(7363)),
            l = a(i(5638));
          class c extends r.Component {
            componentDidMount() {
              l.default.setAudioElement(this.eff1Audio, this.eff2Audio);
            }
            render() {
              return r.createElement("div", null, r.createElement("audio", {
                "data-audio": "audio01",
                ref: e => {
                  e && (this.bgmAudio = e);
                }
              }), r.createElement("audio", {
                "data-audio": "audio02",
                ref: e => {
                  e && (this.eff1Audio = e);
                }
              }), r.createElement("audio", {
                "data-audio": "audio03",
                ref: e => {
                  e && (this.eff2Audio = e);
                }
              }));
            }
          }
          t.default = c;
        },
        4185: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.TeachingToolStudentController = t.G_TO_APP = void 0;
          const o = n(i(7363)),
            s = n(i(9907)),
            a = i(7853),
            r = n(i(1691));
          i(6498);
          class l extends o.default.Component {
            constructor(e) {
              if (super(e), !window.curBridge) {
                this.storeitem = (0, s.default)({}, () => {
                  let e = this.storeitem.getState();
                  const t = {
                    type: "internalMsg",
                    from: "content",
                    srcFrame: "teaching",
                    msg: {
                      to: "menu",
                      info: {
                        type: "teachingToolState",
                        data: Object.assign({}, e)
                      }
                    }
                  };
                  window.launcher_teaching.sendMessage(t, "*");
                });
                const e = new r.default();
                window.curBridge = e, e.init(), t.G_TO_APP.postMessage = (i, n) => {
                  e.network.receiveMessage(i, n), t.G_TO_APP.onmessage && t.G_TO_APP.onmessage(i, n);
                };
              }
            }
            render() {
              return o.default.createElement(a.WrapperAppStudent, {
                storeitem: this.storeitem
              });
            }
          }
          if (t.TeachingToolStudentController = l, t.G_TO_APP = window.launcher_teaching, !t.G_TO_APP) {
            let e = null,
              i = null;
            t.G_TO_APP = {
              init: (t, n) => {
                e = t, i = n;
              },
              network: null,
              postMessage: (e, i) => {
                t.G_TO_APP.onmessage && t.G_TO_APP.onmessage(e, i);
              },
              sendMessage: (t, i) => {
                e && e(t, i);
              }
            }, window.launcher_teaching = t.G_TO_APP;
          }
        },
        8039: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.StudyResultActionType = t.BookshelfActionType = t.StampActionType = t.SystemActionType = t.ContentToolActionType = t.SpinnerActionType = t.DialogActionType = t.CurriculumActionType = t.ClassActionType = t.LMSDataSyncActionType = t.UserActionType = t.ActionTypes = void 0, function (e) {
            e.INCREMENT_COUNTER = "INCREMENT_COUNTER", e.DECREMENT_COUNTER = "DECREMENT_COUNTER";
          }(t.ActionTypes || (t.ActionTypes = {})), function (e) {
            e.REQUEST_LOGIN = "user.REQUEST_LOGIN", e.REQUEST_LOGOUT = "user.REQUEST_LOGOUT", e.STATE_CHANGE_NOTIFY = "user.STATE_CHANGE_NOTIFY";
          }(t.UserActionType || (t.UserActionType = {})), function (e) {
            e.FETCH_LMS_DATA_SYNC = "sync.FETCH_LMS_DATA_SYNC";
          }(t.LMSDataSyncActionType || (t.LMSDataSyncActionType = {})), function (e) {
            e.REQUEST_FETCH_CLASSES = "class.REQUEST_FETCH_CLASSES", e.SUCCESS_FETCH_CLASSES = "class.SUCCESS_FETCH_CLASSES", e.REQUEST_CLASS_SELECT = "class.REQUEST_CLASS_SELECT", e.SUCCESS_CLASS_SELECT = "class.SUCCESS_CLASS_SELECT", e.REQUEST_CLASS_STUDENT = "class.REQUEST_CLASS_STUDENT", e.SUCCESS_CLASS_STUDENT = "class.SUCCESS_CLASS_STUDENT", e.REQUEST_CLASS_RELOAD = "class.REQUEST_CLASS_RELOAD", e.SUCCESS_CLASS_RELOAD = "class.SUCCESS_CLASS_RELOAD", e.SET_VISIBILITY_STUDENT_LIST = "class.SET_VISIBILITY_STUDENT_LIST", e.SET_VISIBILITY_CLASS_SETTING_POPUP = "class.SET_VISIBILITY_CLASS_SETTING_POPUP", e.SET_VISIBILITY_CLASS_EXTERNAL_SETTING_POPUP = "class.SET_VISIBILITY_CLASS_EXTERNAL_SETTING_POPUP", e.UPDATE_CLASS_SKIN = "class.UPDATE_CLASS_SKIN", e.UPDATE_CLASS_VIEW_MODE = "class.UPDATE_CLASS_VIEW_MODE", e.UPDATE_CLASS_MEM_VIEW_MODE = "class.UPDATE_CLASS_MEM_VIEW_MODE", e.SUCCESS_UPDATE_CLASS_SETTING = "class.SUCCESS_UPDATE_CLASS_SETTING", e.SET_VISIBILITY_UNIT_FOCUS_POPUP = "class.SET_VISIBILITY_UNIT_FOCUS_POPUP", e.SUCCESS_FETCH_EXTRA_ACTIVITIES = "class.SUCCESS_FETCH_EXTRA_ACTIVITIES", e.SUCCESS_FETCH_CONTENT_TRANSMISSION_MODE = "class.SUCCESS_FETCH_CONTENT_TRANSMISSION_MODE", e.UPDATE_CONTENT_TRANSMISSION_MODE = "class.UPDATE_CONTENT_TRANSMISSION_MODE";
          }(t.ClassActionType || (t.ClassActionType = {})), function (e) {
            e.START_CONTENT = "curr.START_CONTENT", e.FINISH_CONTENT = "curr.FINISH_CONTENT", e.REQUEST_FETCH_CURRICULUM = "curr.REQUEST_FETCH_CURRICULUM", e.SUCCESS_FETCH_CURRICULUM = "curr.SUCCESS_FETCH_CURRICULUM", e.REQUEST_CURRICULUM_SELECT = "curr.REQUEST_CURRICULUM_SELECT", e.SUCCESS_CURRICULUM_SELECT = "curr.SUCCESS_CURRICULUM_SELECT", e.REQUEST_UNIT_SELECT = "curr.REQUEST_UNIT_SELECT", e.SUCCESS_UNIT_SELECT = "curr.SUCCESS_UNIT_SELECT", e.CHANGE_UNIT_SELECT = "curr.CHANGE_UNIT_SELECT", e.START_STUDENT_SUBMIT = "curr.START_STUDENT_SUBMIT", e.SUBMIT_STUDENT_RESULT = "curr.SUBMIT_STUDENT_RESULT", e.RESET_STUDENT_SUBMIT_TYPE = "curr.RESET_STUDENT_SUBMIT_TYPE", e.FETCH_PREVIEW_RESULT = "curr.FETCH_PREVIEW_RESULT", e.SUCCESS_FETCH_PREVIEW_RESULT = "curr.SUCCESS_FETCH_PREVIEW_RESULT", e.UPDATE_MEMBER_PREVIEW_RESULT = "curr.UPDATE_MEMBER_PREVIEW_RESULT", e.SET_VISIBILITY_THREE_MIN_ACTIVITY_POPUP = "curr.SET_VISIBILITY_THREE_MIN_ACTIVITY_POPUP", e.SET_VISIBILITY_BOOKSHELF_POPUP = "curr.SET_VISIBILITY_BOOKSHELF_POPUP", e.UPDATE_STUDY_RESULT_CLASS = "curr.UPDATE_STUDY_RESULT_CLASS", e.UPDATE_PARTICIPATE_LESSON_QUESTION = "curr.UPDATE_PART_LESSON_QUESTION", e.UPDATE_PARTICIPATE_LESSON_ANSWER = "curr.UPDATE_PARTICIPATE_LESSON_ANSWER", e.MOVE_TO_UNIT_LIST_PAGE = "curr.MOVE_TO_UNIT_LIST_PAGE", e.MOVE_TO_CLASS_LIST_PAGE = "curr.MOVE_TO_CLASS_LIST_PAGE";
          }(t.CurriculumActionType || (t.CurriculumActionType = {})), function (e) {
            e.SHOW_DIALOG = "dialog.SHOW_DIALOG", e.HIDE_DIALOG = "dialog.HIDE_DIALOG", e.HIDE_ALL_DIALOG = "dialog.HIDE_ALL_DIALOG", e.UPDATE_DIALOG = "dialog.UPDATE_DIALOG", e.CHANGE_PROGRESS = "dialog.CHANGE_PROGRESS";
          }(t.DialogActionType || (t.DialogActionType = {})), function (e) {
            e.SHOW_SPINNER = "spinner.SHOW_SPINNER", e.HIDE_SPINNER = "spinner.HIDE_SPINNER", e.SHOW_LOADING_SPINNER = "spinner.SHOW_LOADING_SPINNER", e.HIDE_LOADING_SPINNER = "spinner.HIDE_LOADING_SPINNER", e.SHOW_LOADING_PROGRESS_SPINNER = "SHOW_LOADING_PROGRESS_SPINNER", e.HIDE_LOADING_PROGRESS_SPINNER = "HIDE_LOADING_PROGRESS_SPINNER", e.SHOW_AP_SEARCH_SPINNER = "spinner.SHOW_AP_SEARCH_SPINNER", e.HIDE_AP_SEARCH_SPINNER = "spinner.HIDE_AP_SEARCH_SPINNER";
          }(t.SpinnerActionType || (t.SpinnerActionType = {})), function (e) {
            e.SET_SERVICE_NAME = "tool.SET_SERVICE_NAME", e.SET_PROFILE_MODE = "tool.SET_PROFILE_MODE", e.SET_REPORT_STUDENT_TOTAL_COUNT = "tool.SET_REPORT_STUDENT_TOTAL_COUNT", e.SET_REPORT_STUDENT_SUBMIT_COUNT = "tool.SET_REPORT_STUDENT_SUBMIT_COUNT", e.SET_BG_IMAGE = "tool.SET_BG_IMAGE", e.SETUP_FOR_LAUNCHER = "tool.SETUP_FOR_LAUNCHER", e.SHOW_CONTENT_TOOL = "tool.SHOW_CONTENT_TOOL", e.HIDE_CONTENT_TOOL = "tool.HIDE_CONTENT_TOOL", e.SHOW_TOOL_MENU = "tool.SHOW_TOOL_MENU", e.HIDE_TOOL_MENU = "tool.HIDE_TOOL_MENU", e.MOVE_LESSON_MAP = "tool.MOVE_LESSON_MAP", e.ACTIVATE_PEN = "tool.ACTIVIATE_PEN", e.DEACTIVATE_PEN = "tool.DEACTIVATE_PEN", e.ACTIVATE_LOCK = "tool.ACTIVIATE_LOCK", e.DEACTIVATE_LOCK = "tool.DEACTIVATE_LOCK", e.VISIBILITY_TITLE_BAR = "tool.VISIBILITY_TITLE_BAR", e.VISIBILITY_STUDENT_REPORT_UI = "tool.VISIBILITY_STUDENT_REPORT_UI", e.VISIBILITY_STUDENT_REPORT_LIST_PAGE = "tool.VISIBILITY_STUDENT_REPORT_LIST_PAGE", e.VISIBILITY_STUDENT_SUBMIT_LIST = "tool.VISIBILITY_STUDENT_SUBMIT_LIST", e.SET_CROP_DRAWING_DATA = "tool.SET_CROP_DRAWING_DATA", e.VISIBILITY_CROP_DRAWING_TOOL = "tool.VISIBILITY_CROP_DRAWING_TOOL", e.VISIBILITY_STUDENT_DRAWING_TOOL = "tool.VISIBLITY_STUDENT_DRAWING_TOOL", e.REQUEST_UPLOAD_STUDENT_CROP_RESULT = "tool.REQUEST_UPLOAD_STUDENT_CROP_RESULT", e.INIT_STUDENT_CROP_RESULT = "tool.INIT_STUDENT_CROP_RESULT", e.ADD_STUDENT_CROP_RESULT = "tool.ADD_STUDENT_CROP_RESULT", e.REPORT_STUDENT_CROP_RESULT = "tool.REPORT_STUDENT_CROP_RESULT", e.INIT_DRAWING_TOOL_SELECTION = "tool.INIT_DRAWING_TOOL_SELECTION", e.SET_DRAWING_TOOL_SELECTION = "tool.SET_DRAWING_TOOL_SELECTION", e.SET_DRAWING_TOOL_LOADED_IMAGE_URL = "tool.SET_DRAWING_TOOL_LOADED_IMAGE_URL", e.SHOW_LESSON_COMPLETE_POPUP = "tool.SHOW_LESSON_COMPLETE_POPUP", e.HIDE_LESSON_COMPLETE_POPUP = "tool.HIDE_LESSON_COMPLETE_POPUP", e.ACTIVATE_CONTENT_TOOL = "tool.ACTIVATE_CONTENT_TOOL", e.DEACTIVATE_CONTENT_TOOL = "tool.DEACTIVATE_CONTENT_TOOL", e.ACTIVATE_CONTENT_TOOL_TIMER = "tool.ACTIVATE_CONTENT_TOOL_TIMER", e.VISIBILITY_STUDENT_PART_LESSON = "tool.VISIBILITY_STUDENT_PART_LESSON", e.VISIBILITY_STUDENT_GROUP = "tool.VISIBILITY_STUDENT_GROUP", e.VISIBILITY_STUDENT_PRESENTER = "tool.VISIBILITY_STUDENT_PRESENTER", e.OPEN_LIBRARY_IMAGE_DIALOG = "tool.OPEN_LIBRARY_IMAGE_DIALOG", e.SUCCESS_LIBRARY_LOAD_IMAGE = "tool.SUCCESS_LIBRARY_LOAD_IMAGE", e.REMOVE_LIBRARY_LOADED_IMAGE = "tool.REMOVE_LIBRARY_LOADED_IMAGE", e.ADD_LIBRARY_BOARD_IMAGE = "tool.ADD_LIBRARY_BOARD_IMAGE", e.REMOVE_LIBRARY_BOARD_IMAGE = "tool.REMOVE_LIBRARY_BOARD_IMAGE", e.START_STUDENT_CAMERA = "tool.START_STUDENT_CAMERA", e.STOP_STUDENT_CAMERA = "tool.STOP_STUDENT_CAMERA", e.CHANGE_DRAWING_TOOL_MODE = "tool.CHANGE_DRAWING_TOOL_MODE", e.UPDATE_LAST_FLOATING_PEN_TOOL_POS = "tool.UPDATE_LAST_FLOATING_PEN_TOOL_POS", e.UPDATE_PICKING_RESULT = "tool.UPDATE_PICKING_RESULT", e.UPDATE_GROUP_RESULT = "tool.UPDATE_GROUP_RESULT", e.RESET_PICKING_GROUP_RESULT = "tool.RESET_PICKING_GROUP_RESULT", e.ACTIVATE_PEN_REMOTE = "tool.ACTIVATE_PEN_REMOTE", e.DEACTIVATE_PEN_REMOTE = "tool.DEACTIVATE_PEN_REMOTE", e.ACTIVATE_BASIC_PEN = "tool.ACTIVATE_BASIC_PEN", e.DEACTIVATE_BASIC_PEN = "tool.DEACTIVATE_BASIC_PEN";
          }(t.ContentToolActionType || (t.ContentToolActionType = {})), function (e) {
            e.NETWORK_DISCONNECTED = "system.NETWORK_DISCONNECTED", e.NETWORK_IS_WAITING_RECONNECT = "system.NETWORK_IS_WAITING_RECONNECT", e.NETWORK_IS_READY = "system.NETWORK_IS_READY", e.NOTIFY_NATIVE_VERSION = "system.NOTIFY_NATIVE_VERSION";
          }(t.SystemActionType || (t.SystemActionType = {})), function (e) {
            e.REQUEST_FETCH_STAMP_INFO = "stamp.FETCH_STAMP_INFO", e.SUCCESS_FETCH_STAMP_INFO = "stamp.SUCCESS_FETCH_STAMP_INFO", e.REQUEST_FETCH_MEMBER_STAMP = "stamp.REQUEST_FETCH_MEMBER_STAMP", e.SUCCESS_FETCH_MEMBER_STAMP = "stamp.SUCCESS_FETCH_MEMBER_STAMP", e.UPDATE_MEMBER_STAMP = "stamp.UPDATE_MEMBER_STAMP", e.SUCCESS_UPDATE_MEMBER_STAMP = "stamp.SUCCESS_UPDATE_MEMBER_STAMP", e.VISIBILITY_STAMP_EFFECT = "stamp.VISIBILITY_STAMP_EFFECT";
          }(t.StampActionType || (t.StampActionType = {})), function (e) {
            e.REQUEST_FETCH_BOOKSHELF = "bookshelf.REQUEST_FETCH_BOOKSHELF", e.SUCCESS_FETCH_BOOKSHELF = "bookshe.SUCCESS_FETCH_BOOKSHELF", e.SUCCESS_FETCH_LOCAL_BOOK_VERSION = "bookshe.SUCCESS_FETCH_LOCAL_BOOK_VERSION", e.REQUEST_FETCH_N_SHOW_BOOKSHELF = "bookshelf.REQUEST_FETCH_N_SHOW_BOOKSHELF";
          }(t.BookshelfActionType || (t.BookshelfActionType = {})), function (e) {
            e.REQUEST_FETCH_STUDY_RESULT_MEMBERS = "stduyResult.REQUEST_FETCH_STUDY_RESULT_MEMBERS", e.SUCCESS_FETCH_STUDY_RESULT_MEMBERS = "stduyResult.SUCCESS_FETCH_STUDY_RESULT_MEMBERS", e.REQUEST_FETCH_STUDY_RESULT_COUNT_CLASS = "stduyResult.REQUEST_FETCH_STUDY_RESULT_COUNT_CLASS", e.SUCCESS_FETCH_STUDY_RESULT_COUNT_CLASS = "stduyResult.SUCCESS_FETCH_STUDY_RESULT_COUNT_CLASS", e.REQUEST_FETCH_ALL_CLASS_UPLOAD_STUDY_RESULT_COUNT = "studyResult.REQUEST_FETCH_ALL_CLASS_UPLOAD_STUDY_RESULT_COUNT", e.SUCCESS_FETCH_ALL_CLASS_UPLOAD_STUDY_RESULT_COUNT = "studyResult.SUCCESS_FETCH_ALL_CLASS_UPLOAD_STUDY_RESULT_COUNT", e.ZERO_COUNT_STUDY_RESULT = "studyResult.ZERO_COUNT_STUDY_RESULT", e.PUSH_STUDY_RESULT_CLASS_INDICES = "studyResult.PUSH_STUDY_RESULT_CLASS_INDICES", e.REQUEST_SAVE_STUDY_RESULT_MEMBERS = "studyResult.REQUEST_SAVE_STUDY_RESULT_MEMBERS", e.SUCCESS_SAVE_STUDY_RESULT_MEMBERS = "studyResult.SUCCESS_SAVE_STUDY_RESULT_MEMBERS", e.REQUEST_SAVE_ALL_STUDY_RESULT_MEMBERS = "studyResult.REQUEST_SAVE_ALL_STUDY_RESULT_MEMBERS", e.SUCCESS_SAVE_ALL_STUDY_RESULT_MEMBERS = "studyResult.SUCCESS_SAVE_ALL_STUDY_RESULT_MEMBERS", e.FAILED_SAVE_STUDY_RESULT_MEMBERS = "studyResult.FAILED_SAVE_STUDY_RESULT_MEMBERS", e.REQUEST_SAVE_STUDY_RESULT_PROGRESS = "studyResult.REQUEST_SAVE_STUDY_RESULT_PROGRESS", e.SUCCESS_SAVE_STUDY_RESULT_PROGRESS = "studyResult.SUCCESS_SAVE_STUDY_RESULT_PROGRESS", e.SET_VISIBILITY_SAVE_STUDY_RESULT_PROGRESS_DIALOG = "studyResult.SET_VISIBILITY_SAVE_STUDY_RESULT_PROGRESS_DIALOG", e.REQUEST_STOP_SAVE_STUDY_RESULT = "studyResult.REQUEST_STOP_SAVE_STUDY_RESULT", e.SUCCESS_STOP_SAVE_STUDY_RESULT = "studyResult.SUCCESS_STOP_SAVE_STUDY_RESULT", e.REQUEST_FETCH_STUDY_RESULT_CLASS_INDICES = "studyResult.REQUEST_COLLECT_STUDY_RESULT_CLASS_INDICES", e.SUCCESS_FETCH_STUDY_RESULT_CLASS_INDICES = "studyResult.SUCCESS_COLLECT_STUDY_RESULT_CLASS_INDICES";
          }(t.StudyResultActionType || (t.StudyResultActionType = {}));
        },
        1606: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.ActionCreators = void 0;
          const n = i(8039),
            o = i(9582);
          t.ActionCreators = {
            inc: (0, o.createActionCreator)(n.ActionTypes.INCREMENT_COUNTER),
            dec: (0, o.createActionCreator)(n.ActionTypes.DECREMENT_COUNTER),
            login: (0, o.createActionCreator)(n.UserActionType.REQUEST_LOGIN),
            logout: (0, o.createActionCreator)(n.UserActionType.REQUEST_LOGOUT),
            stateChnageNotify: (0, o.createActionCreator)(n.UserActionType.STATE_CHANGE_NOTIFY),
            showDialog: (0, o.createActionCreator)(n.DialogActionType.SHOW_DIALOG),
            hideDialog: (0, o.createActionCreator)(n.DialogActionType.HIDE_DIALOG),
            hideAllDialog: (0, o.createActionCreator)(n.DialogActionType.HIDE_ALL_DIALOG),
            showSpinner: (0, o.createActionCreator)(n.SpinnerActionType.SHOW_SPINNER),
            hideSpinner: (0, o.createActionCreator)(n.SpinnerActionType.HIDE_SPINNER),
            showLoadingSpinner: (0, o.createActionCreator)(n.SpinnerActionType.SHOW_LOADING_SPINNER),
            hideLoadingSpinner: (0, o.createActionCreator)(n.SpinnerActionType.HIDE_LOADING_SPINNER),
            showLoadingProgressSpinner: (0, o.createActionCreator)(n.SpinnerActionType.SHOW_LOADING_PROGRESS_SPINNER),
            hideLoadingProgressSpinner: (0, o.createActionCreator)(n.SpinnerActionType.HIDE_LOADING_PROGRESS_SPINNER),
            showAPSearchSpinner: (0, o.createActionCreator)(n.SpinnerActionType.SHOW_AP_SEARCH_SPINNER),
            hideAPSearchSpinner: (0, o.createActionCreator)(n.SpinnerActionType.HIDE_AP_SEARCH_SPINNER),
            requestFetchClasses: (0, o.createActionCreator)(n.ClassActionType.REQUEST_FETCH_CLASSES),
            successFetchClasses: (0, o.createActionCreator)(n.ClassActionType.SUCCESS_FETCH_CLASSES),
            requestClassSelect: (0, o.createActionCreator)(n.ClassActionType.REQUEST_CLASS_SELECT),
            successClassSelect: (0, o.createActionCreator)(n.ClassActionType.SUCCESS_CLASS_SELECT),
            requestClassStudent: (0, o.createActionCreator)(n.ClassActionType.REQUEST_CLASS_STUDENT),
            successClassStudent: (0, o.createActionCreator)(n.ClassActionType.SUCCESS_CLASS_STUDENT),
            requestClassReload: (0, o.createActionCreator)(n.ClassActionType.REQUEST_CLASS_RELOAD),
            successClassReload: (0, o.createActionCreator)(n.ClassActionType.SUCCESS_CLASS_RELOAD),
            setVisibilityStudentList: (0, o.createActionCreator)(n.ClassActionType.SET_VISIBILITY_STUDENT_LIST),
            setVisibilityClassSettingPopup: (0, o.createActionCreator)(n.ClassActionType.SET_VISIBILITY_CLASS_SETTING_POPUP),
            setVisibilityClassExternalSettingPopup: (0, o.createActionCreator)(n.ClassActionType.SET_VISIBILITY_CLASS_EXTERNAL_SETTING_POPUP),
            updateClassSkin: (0, o.createActionCreator)(n.ClassActionType.UPDATE_CLASS_SKIN),
            updateClassViewMode: (0, o.createActionCreator)(n.ClassActionType.UPDATE_CLASS_VIEW_MODE),
            updateClassMemViewMode: (0, o.createActionCreator)(n.ClassActionType.UPDATE_CLASS_MEM_VIEW_MODE),
            successUpdateClassSetting: (0, o.createActionCreator)(n.ClassActionType.SUCCESS_UPDATE_CLASS_SETTING),
            setVisibilityUnitFocusPopup: (0, o.createActionCreator)(n.ClassActionType.SET_VISIBILITY_UNIT_FOCUS_POPUP),
            successFetchExtraActivities: (0, o.createActionCreator)(n.ClassActionType.SUCCESS_FETCH_EXTRA_ACTIVITIES),
            updateContentTransmisisonMode: (0, o.createActionCreator)(n.ClassActionType.UPDATE_CONTENT_TRANSMISSION_MODE),
            successFetchContentTransmissionMode: (0, o.createActionCreator)(n.ClassActionType.SUCCESS_FETCH_CONTENT_TRANSMISSION_MODE),
            showContentTool: (0, o.createActionCreator)(n.ContentToolActionType.SHOW_CONTENT_TOOL),
            hideContentTool: (0, o.createActionCreator)(n.ContentToolActionType.HIDE_CONTENT_TOOL),
            moveLessonMap: (0, o.createActionCreator)(n.ContentToolActionType.MOVE_LESSON_MAP),
            activatePen: (0, o.createActionCreator)(n.ContentToolActionType.ACTIVATE_PEN),
            deactivatePen: (0, o.createActionCreator)(n.ContentToolActionType.DEACTIVATE_PEN),
            activateBasicPen: (0, o.createActionCreator)(n.ContentToolActionType.ACTIVATE_BASIC_PEN),
            deactivateBasicPen: (0, o.createActionCreator)(n.ContentToolActionType.DEACTIVATE_BASIC_PEN),
            activatePenRemote: (0, o.createActionCreator)(n.ContentToolActionType.ACTIVATE_PEN_REMOTE),
            deactivatePenRemote: (0, o.createActionCreator)(n.ContentToolActionType.DEACTIVATE_PEN_REMOTE),
            setProfileMode: (0, o.createActionCreator)(n.ContentToolActionType.SET_PROFILE_MODE),
            setBGImage: (0, o.createActionCreator)(n.ContentToolActionType.SET_BG_IMAGE),
            setReportStudentTotalCount: (0, o.createActionCreator)(n.ContentToolActionType.SET_REPORT_STUDENT_TOTAL_COUNT),
            setReportStudentSubmitCount: (0, o.createActionCreator)(n.ContentToolActionType.SET_REPORT_STUDENT_SUBMIT_COUNT),
            activateLock: (0, o.createActionCreator)(n.ContentToolActionType.ACTIVATE_LOCK),
            deactivateLock: (0, o.createActionCreator)(n.ContentToolActionType.DEACTIVATE_LOCK),
            showContentToolMenu: (0, o.createActionCreator)(n.ContentToolActionType.SHOW_TOOL_MENU),
            hideContentToolMenu: (0, o.createActionCreator)(n.ContentToolActionType.HIDE_TOOL_MENU),
            setupContentToolForLauncherAction: (0, o.createActionCreator)(n.ContentToolActionType.SETUP_FOR_LAUNCHER),
            setVisibilityContentToolTitleBar: (0, o.createActionCreator)(n.ContentToolActionType.VISIBILITY_TITLE_BAR),
            setVisibilityStudentReportUi: (0, o.createActionCreator)(n.ContentToolActionType.VISIBILITY_STUDENT_REPORT_UI),
            setVisibilityStudentReportListPage: (0, o.createActionCreator)(n.ContentToolActionType.VISIBILITY_STUDENT_REPORT_LIST_PAGE),
            setServiceNameAction: (0, o.createActionCreator)(n.ContentToolActionType.SET_SERVICE_NAME),
            setVisibilityStudentSubmitList: (0, o.createActionCreator)(n.ContentToolActionType.VISIBILITY_STUDENT_SUBMIT_LIST),
            setVisibilityCropDrawingTool: (0, o.createActionCreator)(n.ContentToolActionType.VISIBILITY_CROP_DRAWING_TOOL),
            setVisibilityStudentDrawingTool: (0, o.createActionCreator)(n.ContentToolActionType.VISIBILITY_STUDENT_DRAWING_TOOL),
            setCropDrawingDataAction: (0, o.createActionCreator)(n.ContentToolActionType.SET_CROP_DRAWING_DATA),
            requestUploadCropResult: (0, o.createActionCreator)(n.ContentToolActionType.REQUEST_UPLOAD_STUDENT_CROP_RESULT),
            initDrawingToolSelection: (0, o.createActionCreator)(n.ContentToolActionType.INIT_DRAWING_TOOL_SELECTION),
            setDrawingToolSelection: (0, o.createActionCreator)(n.ContentToolActionType.SET_DRAWING_TOOL_SELECTION),
            setDrawingToolLoadedImageURL: (0, o.createActionCreator)(n.ContentToolActionType.SET_DRAWING_TOOL_LOADED_IMAGE_URL),
            showLessonCompletePopup: (0, o.createActionCreator)(n.ContentToolActionType.SHOW_LESSON_COMPLETE_POPUP),
            hideLessonCompletePopup: (0, o.createActionCreator)(n.ContentToolActionType.HIDE_LESSON_COMPLETE_POPUP),
            activateContentTool: (0, o.createActionCreator)(n.ContentToolActionType.ACTIVATE_CONTENT_TOOL),
            deactivateContentTool: (0, o.createActionCreator)(n.ContentToolActionType.DEACTIVATE_CONTENT_TOOL),
            activateContentToolTimer: (0, o.createActionCreator)(n.ContentToolActionType.ACTIVATE_CONTENT_TOOL_TIMER),
            setVisibilityStudentPartLesson: (0, o.createActionCreator)(n.ContentToolActionType.VISIBILITY_STUDENT_PART_LESSON),
            setVisibilityStudentGroup: (0, o.createActionCreator)(n.ContentToolActionType.VISIBILITY_STUDENT_GROUP),
            setVisibilityStudentPresenter: (0, o.createActionCreator)(n.ContentToolActionType.VISIBILITY_STUDENT_PRESENTER),
            openLibraryImageDialog: (0, o.createActionCreator)(n.ContentToolActionType.OPEN_LIBRARY_IMAGE_DIALOG),
            successLibraryLoadImage: (0, o.createActionCreator)(n.ContentToolActionType.SUCCESS_LIBRARY_LOAD_IMAGE),
            removeLibraryLoadedImage: (0, o.createActionCreator)(n.ContentToolActionType.REMOVE_LIBRARY_LOADED_IMAGE),
            addLibraryBoardImage: (0, o.createActionCreator)(n.ContentToolActionType.ADD_LIBRARY_BOARD_IMAGE),
            removeLibraryBoardImage: (0, o.createActionCreator)(n.ContentToolActionType.REMOVE_LIBRARY_BOARD_IMAGE),
            initStudentCropResult: (0, o.createActionCreator)(n.ContentToolActionType.INIT_STUDENT_CROP_RESULT),
            addStudentCropResult: (0, o.createActionCreator)(n.ContentToolActionType.ADD_STUDENT_CROP_RESULT),
            reportStudentCropResult: (0, o.createActionCreator)(n.ContentToolActionType.REPORT_STUDENT_CROP_RESULT),
            startStudentCamera: (0, o.createActionCreator)(n.ContentToolActionType.START_STUDENT_CAMERA),
            stopStudentCamera: (0, o.createActionCreator)(n.ContentToolActionType.STOP_STUDENT_CAMERA),
            changeDrawingToolMode: (0, o.createActionCreator)(n.ContentToolActionType.CHANGE_DRAWING_TOOL_MODE),
            updateLastFloatingPenToolPos: (0, o.createActionCreator)(n.ContentToolActionType.UPDATE_LAST_FLOATING_PEN_TOOL_POS),
            updatePickingResult: (0, o.createActionCreator)(n.ContentToolActionType.UPDATE_PICKING_RESULT),
            updateGroupResult: (0, o.createActionCreator)(n.ContentToolActionType.UPDATE_GROUP_RESULT),
            resetPickingGroupResult: (0, o.createActionCreator)(n.ContentToolActionType.RESET_PICKING_GROUP_RESULT),
            startContent: (0, o.createActionCreator)(n.CurriculumActionType.START_CONTENT),
            finishContent: (0, o.createActionCreator)(n.CurriculumActionType.FINISH_CONTENT),
            moveToUnitListPage: (0, o.createActionCreator)(n.CurriculumActionType.MOVE_TO_UNIT_LIST_PAGE),
            moveToClassListPage: (0, o.createActionCreator)(n.CurriculumActionType.MOVE_TO_CLASS_LIST_PAGE),
            requestUnitSelect: (0, o.createActionCreator)(n.CurriculumActionType.REQUEST_UNIT_SELECT),
            successUnitSelect: (0, o.createActionCreator)(n.CurriculumActionType.SUCCESS_UNIT_SELECT),
            requestCurriculumSelect: (0, o.createActionCreator)(n.CurriculumActionType.REQUEST_CURRICULUM_SELECT),
            successCurriculumSelect: (0, o.createActionCreator)(n.CurriculumActionType.SUCCESS_CURRICULUM_SELECT),
            changeUnitSelect: (0, o.createActionCreator)(n.CurriculumActionType.CHANGE_UNIT_SELECT),
            startStudentSubmit: (0, o.createActionCreator)(n.CurriculumActionType.START_STUDENT_SUBMIT),
            submitStudentResult: (0, o.createActionCreator)(n.CurriculumActionType.SUBMIT_STUDENT_RESULT),
            resetStudentSubmitType: (0, o.createActionCreator)(n.CurriculumActionType.RESET_STUDENT_SUBMIT_TYPE),
            fetchPreviewResult: (0, o.createActionCreator)(n.CurriculumActionType.FETCH_PREVIEW_RESULT),
            successFetchPreviewResult: (0, o.createActionCreator)(n.CurriculumActionType.SUCCESS_FETCH_PREVIEW_RESULT),
            setVisibilityThreeMinActivityPopup: (0, o.createActionCreator)(n.CurriculumActionType.SET_VISIBILITY_THREE_MIN_ACTIVITY_POPUP),
            setVisibilityBookshelfPopup: (0, o.createActionCreator)(n.CurriculumActionType.SET_VISIBILITY_BOOKSHELF_POPUP),
            requestFetchCurriculum: (0, o.createActionCreator)(n.CurriculumActionType.REQUEST_FETCH_CURRICULUM),
            successFetchCurriculum: (0, o.createActionCreator)(n.CurriculumActionType.SUCCESS_FETCH_CURRICULUM),
            updateStudyResultClass: (0, o.createActionCreator)(n.CurriculumActionType.UPDATE_STUDY_RESULT_CLASS),
            updateParticipateLessonQuestion: (0, o.createActionCreator)(n.CurriculumActionType.UPDATE_PARTICIPATE_LESSON_QUESTION),
            updateParticipateLessonAnswer: (0, o.createActionCreator)(n.CurriculumActionType.UPDATE_PARTICIPATE_LESSON_ANSWER),
            notifyNetworkDisconnected: (0, o.createActionCreator)(n.SystemActionType.NETWORK_DISCONNECTED),
            notifyNetworkIsWaitingReconnect: (0, o.createActionCreator)(n.SystemActionType.NETWORK_IS_WAITING_RECONNECT),
            networkIsReady: (0, o.createActionCreator)(n.SystemActionType.NETWORK_IS_READY),
            notifyNativeVersion: (0, o.createActionCreator)(n.SystemActionType.NOTIFY_NATIVE_VERSION),
            requestFetchStampInfo: (0, o.createActionCreator)(n.StampActionType.REQUEST_FETCH_STAMP_INFO),
            successFetchStampInfo: (0, o.createActionCreator)(n.StampActionType.SUCCESS_FETCH_STAMP_INFO),
            requestFetchMemberStamp: (0, o.createActionCreator)(n.StampActionType.REQUEST_FETCH_MEMBER_STAMP),
            successFetchMemberStamp: (0, o.createActionCreator)(n.StampActionType.SUCCESS_FETCH_MEMBER_STAMP),
            updateMemberStamp: (0, o.createActionCreator)(n.StampActionType.UPDATE_MEMBER_STAMP),
            successUpdateMemberStamp: (0, o.createActionCreator)(n.StampActionType.SUCCESS_UPDATE_MEMBER_STAMP),
            setVisibilityStampEffect: (0, o.createActionCreator)(n.StampActionType.VISIBILITY_STAMP_EFFECT),
            requestFetchBookshelf: (0, o.createActionCreator)(n.BookshelfActionType.REQUEST_FETCH_BOOKSHELF),
            successFetchBookshelf: (0, o.createActionCreator)(n.BookshelfActionType.SUCCESS_FETCH_BOOKSHELF),
            requestFetchNShowBookshelf: (0, o.createActionCreator)(n.BookshelfActionType.REQUEST_FETCH_N_SHOW_BOOKSHELF),
            fetchLMSDataSync: (0, o.createActionCreator)(n.LMSDataSyncActionType.FETCH_LMS_DATA_SYNC),
            requestFetchStudyResultMembers: (0, o.createActionCreator)(n.StudyResultActionType.REQUEST_FETCH_STUDY_RESULT_MEMBERS),
            successFetchStudyResultMembers: (0, o.createActionCreator)(n.StudyResultActionType.SUCCESS_FETCH_STUDY_RESULT_MEMBERS),
            requestFetchStudyResultCountInClassAction: (0, o.createActionCreator)(n.StudyResultActionType.REQUEST_FETCH_STUDY_RESULT_COUNT_CLASS),
            successFetchStudyResultCountInClassAction: (0, o.createActionCreator)(n.StudyResultActionType.SUCCESS_FETCH_STUDY_RESULT_COUNT_CLASS),
            requestFetchAllClassUploadStudyResultCount: (0, o.createActionCreator)(n.StudyResultActionType.REQUEST_FETCH_ALL_CLASS_UPLOAD_STUDY_RESULT_COUNT),
            successFetchAllClassUploadStudyResultCount: (0, o.createActionCreator)(n.StudyResultActionType.SUCCESS_FETCH_ALL_CLASS_UPLOAD_STUDY_RESULT_COUNT),
            zeroCountStudyResult: (0, o.createActionCreator)(n.StudyResultActionType.ZERO_COUNT_STUDY_RESULT),
            pushStudyResultClassIndices: (0, o.createActionCreator)(n.StudyResultActionType.PUSH_STUDY_RESULT_CLASS_INDICES),
            requestSaveStudyResultMembers: (0, o.createActionCreator)(n.StudyResultActionType.REQUEST_SAVE_STUDY_RESULT_MEMBERS),
            successSaveStudyResultMembers: (0, o.createActionCreator)(n.StudyResultActionType.SUCCESS_SAVE_STUDY_RESULT_MEMBERS),
            requestSaveAllStudyResultMembers: (0, o.createActionCreator)(n.StudyResultActionType.REQUEST_SAVE_ALL_STUDY_RESULT_MEMBERS),
            successSaveAllStudyResultMembers: (0, o.createActionCreator)(n.StudyResultActionType.SUCCESS_SAVE_ALL_STUDY_RESULT_MEMBERS),
            failedSaveStudyResultMembers: (0, o.createActionCreator)(n.StudyResultActionType.FAILED_SAVE_STUDY_RESULT_MEMBERS),
            requestSaveStudyResultProgress: (0, o.createActionCreator)(n.StudyResultActionType.REQUEST_SAVE_STUDY_RESULT_PROGRESS),
            successSaveStudyResultProgress: (0, o.createActionCreator)(n.StudyResultActionType.SUCCESS_SAVE_STUDY_RESULT_PROGRESS),
            setVisiblitySaveStudyProgress: (0, o.createActionCreator)(n.StudyResultActionType.SET_VISIBILITY_SAVE_STUDY_RESULT_PROGRESS_DIALOG),
            requestStopSaveStudyResult: (0, o.createActionCreator)(n.StudyResultActionType.REQUEST_STOP_SAVE_STUDY_RESULT),
            successStopSaveStudyResult: (0, o.createActionCreator)(n.StudyResultActionType.SUCCESS_STOP_SAVE_STUDY_RESULT),
            requestFetchStudyResultClassIndices: (0, o.createActionCreator)(n.StudyResultActionType.REQUEST_FETCH_STUDY_RESULT_CLASS_INDICES),
            successFetchStudyResultClassIndices: (0, o.createActionCreator)(n.StudyResultActionType.SUCCESS_FETCH_STUDY_RESULT_CLASS_INDICES)
          };
        },
        2084: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.updateLastFloatingPenToolPos = t.changeDrawingToolMode = t.stopStudentCamera = t.startStudentCamera = t.reportStudentCropResult = t.addStudentCropResult = t.initStudentCropResult = t.removeLibraryBoardImage = t.addLibraryBoardImage = t.removeLibraryLoadedImage = t.successLibraryLoadImage = t.openLibraryImageDialog = t.setVisibilityStudentPresenter = t.setVisibilityStudentGroup = t.setVisibilityStudentPartLesson = t.activateContentToolTimer = t.deactivateContentTool = t.activateContentTool = t.hideLessonCompletePopup = t.showLessonCompletePopup = t.setDrawingToolLoadedImageURL = t.setDrawingToolSelection = t.initDrawingToolSelection = t.requestUploadCropResult = t.setCropDrawingData = t.setVisibilityStudentDrawingTool = t.setVisibilityCropDrawingTool = t.setVisibilityStudentSubmitList = t.setVisibilityStudentReportListPage = t.setVisibilityStudentReportUi = t.setVisibilityContentToolTitleBar = t.deactivateLock = t.activateLock = t.deactivatePenRemote = t.setReportStudentTotalCount = t.setReportStudentSubmitCount = t.setBGImage = t.setProfileMode = t.setServiceName = t.activatePenRemote = t.deactivateBasicPen = t.activateBasicPen = t.deactivatePen = t.activatePen = t.moveLessonMap = t.setupContentToolForLauncherAction = t.hideContentToolMenu = t.showContentToolMenu = t.hideContentTool = t.showContentTool = void 0, t.resetPickingGroupResult = t.updateGroupResult = t.updatePickingResult = void 0;
          const n = i(1606);
          t.showContentTool = () => n.ActionCreators.showContentTool(), t.hideContentTool = () => n.ActionCreators.hideContentTool(), t.showContentToolMenu = () => n.ActionCreators.showContentToolMenu(), t.hideContentToolMenu = () => n.ActionCreators.hideContentToolMenu(), t.setupContentToolForLauncherAction = () => n.ActionCreators.setupContentToolForLauncherAction(), t.moveLessonMap = () => n.ActionCreators.moveLessonMap(), t.activatePen = () => n.ActionCreators.activatePen(), t.deactivatePen = () => n.ActionCreators.deactivatePen(), t.activateBasicPen = () => n.ActionCreators.activateBasicPen(), t.deactivateBasicPen = () => n.ActionCreators.deactivateBasicPen(), t.activatePenRemote = () => n.ActionCreators.activatePenRemote(), t.setServiceName = e => n.ActionCreators.setServiceNameAction({
            serviceName: e
          }), t.setProfileMode = e => n.ActionCreators.setProfileMode({
            profileMode: e
          }), t.setBGImage = e => n.ActionCreators.setBGImage({
            bgImg: e
          }), t.setReportStudentSubmitCount = e => n.ActionCreators.setReportStudentSubmitCount({
            submitCount: e
          }), t.setReportStudentTotalCount = e => n.ActionCreators.setReportStudentTotalCount({
            totalCount: e
          }), t.deactivatePenRemote = () => n.ActionCreators.deactivatePenRemote(), t.activateLock = () => n.ActionCreators.activateLock(), t.deactivateLock = () => n.ActionCreators.deactivateLock(), t.setVisibilityContentToolTitleBar = e => n.ActionCreators.setVisibilityContentToolTitleBar({
            isVisible: e
          }), t.setVisibilityStudentReportUi = e => n.ActionCreators.setVisibilityStudentReportUi({
            isVisible: e
          }), t.setVisibilityStudentReportListPage = e => n.ActionCreators.setVisibilityStudentReportListPage({
            isVisible: e
          }), t.setVisibilityStudentSubmitList = e => n.ActionCreators.setVisibilityStudentSubmitList({
            isVisible: e
          }), t.setVisibilityCropDrawingTool = e => n.ActionCreators.setVisibilityCropDrawingTool({
            isVisible: e
          }), t.setVisibilityStudentDrawingTool = (e, t, i) => n.ActionCreators.setVisibilityStudentDrawingTool({
            isVisible: e,
            drawingToolType: t,
            customRect: i
          }), t.setCropDrawingData = (e, t, i, o) => n.ActionCreators.setCropDrawingDataAction({
            base64: e,
            width: t,
            height: i,
            resizeRatio: o
          }), t.requestUploadCropResult = e => n.ActionCreators.requestUploadCropResult({
            base64: e
          }), t.initDrawingToolSelection = () => n.ActionCreators.initDrawingToolSelection(), t.setDrawingToolSelection = e => n.ActionCreators.setDrawingToolSelection({
            selection: e
          }), t.setDrawingToolLoadedImageURL = e => n.ActionCreators.setDrawingToolLoadedImageURL({
            url: e
          }), t.showLessonCompletePopup = () => n.ActionCreators.showLessonCompletePopup(), t.hideLessonCompletePopup = () => n.ActionCreators.hideLessonCompletePopup(), t.activateContentTool = e => n.ActionCreators.activateContentTool({
            toolType: e
          }), t.deactivateContentTool = e => n.ActionCreators.deactivateContentTool({
            toolType: e
          }), t.activateContentToolTimer = (e, t, i, o, s, a) => n.ActionCreators.activateContentToolTimer({
            toolType: e,
            subPageType: t,
            remainSec: i,
            settingSec: o,
            step: s,
            isPlaying: a
          }), t.setVisibilityStudentPartLesson = (e, t) => n.ActionCreators.setVisibilityStudentPartLesson({
            isVisible: e,
            partLessonData: t
          }), t.setVisibilityStudentGroup = (e, t, i) => n.ActionCreators.setVisibilityStudentGroup({
            isVisible: e,
            groupIndex: t,
            groupLeader: i
          }), t.setVisibilityStudentPresenter = e => n.ActionCreators.setVisibilityStudentPresenter({
            isVisible: e
          }), t.openLibraryImageDialog = () => n.ActionCreators.openLibraryImageDialog(), t.successLibraryLoadImage = e => n.ActionCreators.successLibraryLoadImage({
            imageList: e
          }), t.removeLibraryLoadedImage = e => n.ActionCreators.removeLibraryLoadedImage({
            selectedIdList: e
          }), t.addLibraryBoardImage = e => n.ActionCreators.addLibraryBoardImage({
            selectedIdList: e
          }), t.removeLibraryBoardImage = e => n.ActionCreators.removeLibraryBoardImage({
            id: e
          }), t.initStudentCropResult = () => n.ActionCreators.initStudentCropResult(), t.addStudentCropResult = (e, t) => n.ActionCreators.addStudentCropResult({
            studentId: e,
            url: t
          }), t.reportStudentCropResult = (e, t) => n.ActionCreators.reportStudentCropResult({
            studentId: e,
            url: t
          }), t.startStudentCamera = () => n.ActionCreators.startStudentCamera(), t.stopStudentCamera = () => n.ActionCreators.stopStudentCamera(), t.changeDrawingToolMode = e => n.ActionCreators.changeDrawingToolMode({
            mode: e
          }), t.updateLastFloatingPenToolPos = (e, t) => n.ActionCreators.updateLastFloatingPenToolPos({
            x: e,
            y: t
          }), t.updatePickingResult = e => n.ActionCreators.updatePickingResult({
            result: e
          }), t.updateGroupResult = (e, t) => n.ActionCreators.updateGroupResult({
            result: e,
            teacherGroupIdx: t
          }), t.resetPickingGroupResult = () => n.ActionCreators.resetPickingGroupResult();
        },
        9861: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.hideAllDialog = t.hideDiaog = t.showDialog = void 0;
          const n = i(1606);
          t.showDialog = (e, t) => n.ActionCreators.showDialog({
            id: t,
            component: e
          }), t.hideDiaog = e => n.ActionCreators.hideDialog({
            id: e
          }), t.hideAllDialog = () => n.ActionCreators.hideAllDialog();
        },
        8265: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.fetchLMSDataSync = void 0;
          const n = i(1606);
          t.fetchLMSDataSync = () => n.ActionCreators.fetchLMSDataSync();
        },
        1247: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.hideAPSearchSpinner = t.showAPSearchSpinner = t.hideLoadingProgressSpinner = t.showLoadingProgressSpinner = t.hideLoadingSpinner = t.showLoadingSpinner = t.hideSpinner = t.showSpinner = void 0;
          const n = i(1606);
          t.showSpinner = () => n.ActionCreators.showSpinner(), t.hideSpinner = () => n.ActionCreators.hideSpinner(), t.showLoadingSpinner = () => n.ActionCreators.showLoadingSpinner(), t.hideLoadingSpinner = () => n.ActionCreators.hideLoadingSpinner(), t.showLoadingProgressSpinner = () => n.ActionCreators.showLoadingProgressSpinner(), t.hideLoadingProgressSpinner = () => n.ActionCreators.hideLoadingProgressSpinner(), t.showAPSearchSpinner = () => n.ActionCreators.showAPSearchSpinner(), t.hideAPSearchSpinner = () => n.ActionCreators.hideAPSearchSpinner();
        },
        8091: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.setVisibilityStampEffect = t.successUpdateMemberStamp = t.updateMemberStamp = t.successFetchMemberStamp = t.requestFetchMemberStamp = t.successFetchStampInfo = t.requestFetchStampInfo = void 0;
          const n = i(1606);
          t.requestFetchStampInfo = () => n.ActionCreators.requestFetchStampInfo(), t.successFetchStampInfo = e => n.ActionCreators.successFetchStampInfo({
            stampInfosList: e
          }), t.requestFetchMemberStamp = e => n.ActionCreators.requestFetchMemberStamp({
            unitCurrIdList: e
          }), t.successFetchMemberStamp = e => n.ActionCreators.successFetchMemberStamp({
            unitMemberStampList: e
          }), t.updateMemberStamp = (e, t, i, o) => n.ActionCreators.updateMemberStamp({
            stampId: t,
            objectKind: i,
            memberObjIdList: o,
            unitCuriId: e
          }), t.successUpdateMemberStamp = (e, t, i, o) => n.ActionCreators.successUpdateMemberStamp({
            stampId: t,
            objectKind: i,
            memberObjIdList: o,
            unitCuriId: e
          }), t.setVisibilityStampEffect = (e, t, i, o) => n.ActionCreators.setVisibilityStampEffect({
            isVisible: e,
            stampThumbnail: t,
            canShowSelectStamp: i,
            mvpStampNameList: o
          });
        },
        4645: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.userStateChangeNotify = t.requestLogout = t.requestLogin = void 0;
          const n = i(1606);
          t.requestLogin = (e = "", t = "") => n.ActionCreators.login({
            id: e,
            pwd: t
          }), t.requestLogout = () => n.ActionCreators.logout(), t.userStateChangeNotify = (e, t) => n.ActionCreators.stateChnageNotify({
            type: e,
            data: t
          });
        },
        9582: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.createActionCreator = void 0, t.createActionCreator = function (e) {
            return t => null == t ? {
              type: e
            } : {
              type: e,
              payload: t
            };
          };
        },
        1691: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__awaiter || function (e, t, i, n) {
              return new (i || (i = Promise))(function (o, s) {
                function a(e) {
                  try {
                    l(n.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function r(e) {
                  try {
                    l(n.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function (e) {
                    e(t);
                  })).then(a, r);
                }
                l((n = n.apply(e, t || [])).next());
              });
            },
            r = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const l = r(i(278)),
            c = i(4934),
            u = r(i(1331)),
            d = r(i(805)),
            _ = r(i(7299)),
            T = i(590),
            S = s(i(9729)),
            p = i(8028);
          let E;
          t.default = class {
            constructor() {
              this.callbacks = {}, this.network = new u.default(), window.padSideNetwork = this.network;
            }
            init() {
              d.default.setMyRole(c.UserRole.STUDENT), window.launcher_teaching.network = this.network, E = window.launcher_teaching, this.network.init(E);
            }
            handleStreamReady() {
              null === felPadSideBridge || void 0 === felPadSideBridge || felPadSideBridge.getServerHost(), this.network.initNetwork();
            }
            uploadStudentReport(e, t, i) {
              this.network.uploadStudentReport(e, t, i);
            }
            sendRemotePenData(e) {
              this.network.sendRemotePenMsg(e);
            }
            sendRemotePenUndo(e) {
              this.network.sendRemotePenMsg(e);
            }
            sendRemotePenClear(e) {
              this.network.sendRemotePenMsg(e);
            }
            handleStreamError(e) {
              this.network.handleStreamError(e);
            }
            handleOnStream(e) {
              this.network.handleOnStream(e);
            }
            writeLog(e) {}
            requestLogin(e, t) {
              return this.network.requestLogin(e, t);
            }
            requestLogout() {
              return this.network.requestLogout();
            }
            sendMsgToTeacher(e) {
              return this.network.sendMsgToTeacher(e);
            }
            requestTransitionToInClass() {
              return this.network.requestTransitionToInClass();
            }
            requestTransitionToOutClass() {
              return this.network.requestTransitionToOutClass();
            }
            invokeAndroidOperateCb(e, t, i = !0) {
              const n = this.callbacks[e];
              i && (this.callbacks[e] = () => {}), n && n(t);
            }
            invokeNetworkCallback(e, t, i = !0) {
              this.network.invokeCallback(e, t, i);
            }
            handleUploadToServerResult(e) {
              this.network.handleUploadToServerResult(e);
            }
            startCamera(e) {
              this.network.startCamera(e);
            }
            startCustomCamera(e, t, i, n, o) {
              null === felPadSideBridge || void 0 === felPadSideBridge || felPadSideBridge.startCustomCamera(t, e, i, n), this.callbacks.startCustomCamera = o;
            }
            stopCamera(e) {
              this.network.stopCamera(e);
            }
            switchCamera(e) {
              null === felPadSideBridge || void 0 === felPadSideBridge || felPadSideBridge.switchCamera(), this.callbacks.switchCamera = e;
            }
            takePicture(e, t, i, n, o) {
              null === felPadSideBridge || void 0 === felPadSideBridge || felPadSideBridge.takePicture(t, e, i, n), this.callbacks.takePicture = o;
            }
            startVideoRecord(e, t) {
              this.network.startVideoRecord(t);
            }
            stopVideoRecord(e) {
              this.network.stopVideoRecord(e);
            }
            uploadFileToServer(e, t) {
              this.network.uploadFileToServer(e, t);
            }
            uploadImageToServer(e, t) {
              this.network.uploadImageToServer(e, t);
            }
            startScreenToVideoRecord(e) {
              null === felPadSideBridge || void 0 === felPadSideBridge || felPadSideBridge.startScreenToVideoRecord(), this.callbacks.startScreenToVideoRecord = e;
            }
            stopScreenToVideoRecord(e) {
              null === felPadSideBridge || void 0 === felPadSideBridge || felPadSideBridge.stopScreenToVideoRecord(), this.callbacks.stopScreenToVideoRecord = e;
            }
            startVoiceRecord(e) {
              this.network.startVoiceRecord(e);
            }
            stopVoiceRecord(e) {
              this.network.stopVoiceRecord(e);
            }
            startDecibelCheck(e, t) {
              this.callbacks.notifyDecibel = e, this.callbacks.startDecibel = t, null === felPadSideBridge || void 0 === felPadSideBridge || felPadSideBridge.startDecibelCheck(300);
            }
            stopDecibelCheck(e) {
              e({
                result: (null === felPadSideBridge || void 0 === felPadSideBridge ? void 0 : felPadSideBridge.stopDecibelCheck()) ? "success" : "fail"
              });
            }
            saveContentProgress(e) {}
            loadContentProgress(e) {
              e(l.default.getContentProgress());
            }
            captureScreen(e, t, i, n, o) {
              null === felPadSideBridge || void 0 === felPadSideBridge || felPadSideBridge.captureScreen(t, e, i, n), this.callbacks.captureScreen = o;
            }
            captureFullScreen(e) {
              this.network.requestCapture(e);
            }
            getDeviceOrientation() {
              return null === felPadSideBridge || void 0 === felPadSideBridge ? void 0 : felPadSideBridge.getDeviceOrientation();
            }
            quitApp() {
              null === felPadSideBridge || void 0 === felPadSideBridge || felPadSideBridge.quit();
            }
            enableSoftwareKeyboard(e) {
              const t = e || (() => {});
              this.callbacks.enableSoftwareKeyboard = t;
            }
            disableSoftwareKeyboard(e) {
              const t = e || (() => {});
              this.callbacks.disableSoftwareKeyboard = t;
            }
            clearCache() {
              null === felPadSideBridge || void 0 === felPadSideBridge || felPadSideBridge.clearWebViewCache();
            }
            getAPName() {
              return null === felPadSideBridge || void 0 === felPadSideBridge ? void 0 : felPadSideBridge.getAPName();
            }
            notifyLocationPermissionAllowed() {
              S.default.dispatch(S.EventType.NOTIFY_CHANGE_LOCATION_PERMISSION);
            }
            getApkVersionFromLauncher() {
              return null === felPadSideBridge || void 0 === felPadSideBridge ? void 0 : felPadSideBridge.getApkVersionFromLauncher();
            }
            updateApk() {
              null === felPadSideBridge || void 0 === felPadSideBridge || felPadSideBridge.updateApk();
            }
            fetchLocalBookVersion() {
              return new Promise((e, t) => {});
            }
            fetchExtraActivities() {
              return this.network.fetchExtraActivities();
            }
            fetchBookshelfCurriculums() {
              return this.network.fetchBookshelfCurriculums();
            }
            saveBookVersionJson(e) {
              JSON.parse(null === felPadSideBridge || void 0 === felPadSideBridge ? void 0 : felPadSideBridge.setBookVersionJson(JSON.stringify({
                content: e
              }))).success || console.error("failed write local book version json file.");
            }
            loadBookVersionJson() {
              const e = JSON.parse(null === felPadSideBridge || void 0 === felPadSideBridge ? void 0 : felPadSideBridge.getBookVersionJson());
              return e.success ? JSON.parse(e.content) : (console.info("not exist book version json file."), []);
            }
            getContentBaseURL() {
              const e = JSON.parse(null === felPadSideBridge || void 0 === felPadSideBridge ? void 0 : felPadSideBridge.getContentBaseURL());
              return e.success ? e.baseURL.replace("/content/", "") : (console.error("not found content base url"), "");
            }
            cancelContentUpdate() {
              null === felPadSideBridge || void 0 === felPadSideBridge || felPadSideBridge.cancelContentUpdate();
            }
            isExistContentFile(e) {
              if (0 === e.length) return console.error("content path is empty"), !1;
              const t = e.split("/")[2];
              if (void 0 === t) return console.error("invalid content path:", e), !1;
              const i = `${t}/${p.STUDENT_FOLDER_NAME}/index.html`,
                n = JSON.parse(null === felPadSideBridge || void 0 === felPadSideBridge ? void 0 : felPadSideBridge.isContentFileExist(JSON.stringify({
                  path: i
                })));
              return n.success && n.isExist;
            }
            removeContent(e) {
              return new Promise((t, i) => {
                t(JSON.parse(null === felPadSideBridge || void 0 === felPadSideBridge ? void 0 : felPadSideBridge.deleteContent(JSON.stringify({
                  paths: e.map(e => e.toString())
                }))).success);
              });
            }
            getServerBookSeqFileList(e) {
              return new Promise((e, t) => a(this, void 0, void 0, function* () {
                e("");
              }));
            }
            healthCheckAPIServer() {
              return new Promise((e, t) => {
                e(c.HealthCheckResultType.SUCCESS);
              });
            }
            tryContentDownload(e, t) {
              const i = _.default.getServerBookVersionData();
              return this.tryContentDownloadInner(e, i.bookVersion, t);
            }
            tryForceContentDownload(e, t, i) {
              return this.tryDownload(e, t, i);
            }
            prepareContentDownload(e, t, i) {
              return new Promise((i, n) => {
                const o = _.default.getLocalBookVersionDataList(),
                  s = e.filter(e => t.find(t => t.bkSeq === e));
                if (0 === s.length && s.length !== e.length) return void i({
                  result: c.ContentDownloadResultType.FAIL_BY_SERVER_NOT_EXIST_CONTENT
                });
                const a = (0, T.getDownloadRequestBookSeq)(s, t, o);
                console.info("download candidate list:", a), 0 !== a.length ? (S.default.dispatch(S.EventType.DOWNLOAD_DIALOG_SHOW), i({
                  result: c.ContentDownloadResultType.SUCCESS
                })) : i({
                  result: c.ContentDownloadResultType.FAIL_BY_NOTHING_UPDATE
                });
              });
            }
            tryDownload(e, t, i) {
              return new Promise((i, n) => {
                let o = 0,
                  s = 0;
                const a = [];
                this.callbacks.contentUpdateInfo = e => {
                  o = e.downloadTotalCount, s = e.fileTotalCount - e.downloadTotalCount;
                  const t = e.info.filter(e => !e.success);
                  t.length > 0 && (console.error("download error:", t), t.forEach(e => a.push(e.errorMessage))), a.filter(e => -1 !== e.indexOf("UNAVAILABLE")).length > 0 ? S.default.dispatch(S.EventType.DOWNLOAD_NETWORK_ERROR) : S.default.dispatch(S.EventType.DOWNLOAD_START, {
                    downloadedFileCount: s,
                    fileTotalCount: e.fileTotalCount
                  });
                }, this.callbacks.contentUpdateStatus = e => {
                  S.default.dispatch(S.EventType.DOWNLOAD_PROGRESS, {
                    progress: s + e.progress
                  }), void 0 !== e.errorMessage && (console.error("download error:", e), a.push(e.errorMessage), -1 !== e.errorMessage.indexOf("UNAVAILABLE") && S.default.dispatch(S.EventType.DOWNLOAD_NETWORK_ERROR));
                }, this.callbacks.contentUpdateResult = e => {
                  const t = e.results.filter(e => e.success && !isNaN(parseInt(e.id, 10))).map(e => Number(e.id)),
                    n = 0 === e.results.filter(e => !e.success).length;
                  n && S.default.dispatch(S.EventType.DOWNLOAD_FINISH), S.default.dispatch(S.EventType.DOWNLOAD_DIALOG_HIDE);
                  let s = c.ContentDownloadResultType.SUCCESS;
                  if (n) s = 0 === o ? c.ContentDownloadResultType.FAIL_BY_NOTHING_UPDATE : c.ContentDownloadResultType.SUCCESS;else {
                    console.error("errorMsgs:", a);
                    const e = a.filter(e => -1 !== e.indexOf("ENOSPC")).length > 0,
                      t = a.filter(e => -1 !== e.indexOf("NOT_FOUND")).length > 0;
                    s = e ? c.ContentDownloadResultType.FAIL_BY_NOT_ENOUGH_SPACE : t ? c.ContentDownloadResultType.FAIL_BY_SERVER_NOT_EXIST_CONTENT : c.ContentDownloadResultType.FAIL_BY_STUDENT;
                  }
                  i({
                    result: s,
                    successList: t
                  });
                };
                const r = _.default.getLocalBookVersionDataList(),
                  l = e.filter(e => t.find(t => t.bkSeq === e)),
                  u = (0, T.getDownloadRequestBookSeq)(l, t, r);
                JSON.parse(null === felPadSideBridge || void 0 === felPadSideBridge ? void 0 : felPadSideBridge.requestContentUpdate(JSON.stringify({
                  ids: u
                }))).success || (console.error("failed content update:", u), S.default.dispatch(S.EventType.DOWNLOAD_DIALOG_HIDE), i({
                  result: c.ContentDownloadResultType.FAIL_BY_ANDROID,
                  successList: []
                }));
              });
            }
            tryContentDownloadInner(e, t, i) {
              return a(this, void 0, void 0, function* () {
                const n = yield this.prepareContentDownload(e, t, i);
                return n.result !== c.ContentDownloadResultType.SUCCESS ? n : yield this.tryDownload(e, t, i);
              });
            }
          };
        },
        1331: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.ViewDivType = void 0;
          const r = i(3195),
            l = i(4934),
            c = a(i(9306)),
            u = a(i(8957)),
            d = a(i(3107)),
            _ = a(i(805)),
            T = s(i(9729)),
            S = s(i(2084)),
            p = s(i(8091)),
            E = i(8028),
            h = i(226);
          var m, C;
          !function (e) {
            e.EXTRA = "extra", e.REPORT = "report", e.TEACHING = "teaching", e.PEN = "pen", e.MENU = "menu";
          }(m || (m = {})), function (e) {
            e.CONTENT = "content", e.EYEON = "eyeon";
          }(C = t.ViewDivType || (t.ViewDivType = {})), t.default = class {
            constructor() {
              this.isStreamReady = !1, this.lastSentPacketSeq = 0, this.lastRecvSeqFromServer = 0, this.callbacks = {}, this.isTeachingRunning = !1, this.showUploadRetryPopup = e => {
                (0, h.showRetryCancelDialog)(E.DIALOG_MSG.UPLOAD_RETRY_ASK, () => {
                  "failByNetwork" === e.result ? !1 === this.isStreamReady && (this.uploadRetryTimer = window.setTimeout(() => {
                    this.showUploadRetryPopup(e);
                  }, 1e3)) : this.uploadRequest.sendLosingUpload();
                }, () => {
                  this.uploadRequest.invokeCallback(e.requestNo, {
                    result: "fail",
                    requestNo: e.requestNo
                  });
                });
              }, this.clearUploadRetryTimer = () => {
                this.uploadRetryTimer && window.clearTimeout(this.uploadRetryTimer), this.uploadRetryTimer = null;
              }, this.streamCallbacks = new u.default(), this.uploadRequest = new d.default(this.uploadFileToServerRaw, this.uploadImageToServerRaw);
            }
            init(e) {
              this.webMessage = e, (0, r.getGlobalStore)();
            }
            receiveMessage(e, t) {
              var i, n, o, s, a, u, d, T, p, E, h, m, C, I, O, A, f;
              switch (null == e ? void 0 : e.type) {
                case "internalMsg":
                  const t = null === (i = e.msg) || void 0 === i ? void 0 : i.info;
                  if (!t) return;
                  switch (t.type) {
                    case "capturePen":
                      if (document.querySelector("#sketchFieldRoot")) c.default.toPng(document.querySelector("#sketchFieldRoot")).then(e => {
                        const t = {
                          type: "notify-pen-capture",
                          from: "content",
                          srcFrame: "pen",
                          msg: e
                        };
                        this.webMessage.sendMessage(t, "*");
                      }).catch(function (e) {
                        console.error("oops, something went wrong!", e);
                      });else {
                        const e = {
                          type: "notify-pen-capture",
                          from: "content",
                          srcFrame: "pen",
                          msg: null
                        };
                        this.webMessage.sendMessage(e, "*");
                      }
                      break;
                    case "startBasicPenTool":
                      (0, r.getGlobalStore)().dispatch(S.setVisibilityStudentDrawingTool(!0, l.StudentDrawingToolType.BASIC_PEN));
                      break;
                    case "stopBasicPenTool":
                      (0, r.getGlobalStore)().dispatch(S.setVisibilityStudentDrawingTool(!1, l.StudentDrawingToolType.BASIC_PEN));
                      break;
                    case "pen-clear":
                      const e = window.remoteSketchTool;
                      e && e.resetAll();
                      break;
                    case "toggleBasicPenTool":
                      (0, r.getGlobalStore)().dispatch(S.setVisibilityStudentDrawingTool(!(null === (n = (0, r.getGlobalStore)().getState()) || void 0 === n ? void 0 : n.contentTool.isVisibleStudentDrawingTool), l.StudentDrawingToolType.BASIC_PEN));
                  }
                  break;
                case "notifyUploadToServerResult":
                  const g = null == e ? void 0 : e.msg;
                  this.notiCallback && (this.notiCallback(g), this.notiCallback = void 0);
                  break;
                case "notifyPresenter":
                  null === (o = null == e ? void 0 : e.msg) || void 0 === o || o.login;
                  break;
                case "notifySetPentool":
                  null === (s = null == e ? void 0 : e.msg) || void 0 === s || s.remote, (null === (a = null == e ? void 0 : e.msg) || void 0 === a ? void 0 : a.view) ? ((0, r.getGlobalStore)().dispatch(S.setVisibilityStudentDrawingTool(!0, l.StudentDrawingToolType.REMOTE_PEN)), (0, r.getGlobalStore)().dispatch(S.activatePenRemote())) : ((0, r.getGlobalStore)().dispatch(S.setVisibilityStudentDrawingTool(!1, l.StudentDrawingToolType.REMOTE_PEN)), (0, r.getGlobalStore)().dispatch(S.deactivatePenRemote()));
                  break;
                case "notifyAppState":
                  const N = null === (u = null == e ? void 0 : e.msg) || void 0 === u ? void 0 : u.login,
                    y = null === (d = null == e ? void 0 : e.msg) || void 0 === d ? void 0 : d.displayMode,
                    D = null === (T = null == e ? void 0 : e.msg) || void 0 === T ? void 0 : T.service;
                  this.isTeachingRunning || (this.beforeViewDiv = null === (p = null == e ? void 0 : e.msg) || void 0 === p ? void 0 : p.viewDiv), (0, r.getGlobalStore)().dispatch(S.setProfileMode("1" == y ? l.DisplayMode.DEFAULT_THUMB_N_NAME : l.DisplayMode.PROFILE_THUMB_N_NICKNAME));
                  const R = null === (E = null == e ? void 0 : e.msg) || void 0 === E ? void 0 : E.addOnHost;
                  if (_.default.setServiceName(D), _.default.setAddOnHost(R), 90 == N || 100 == N) {
                    const t = null === (h = null == e ? void 0 : e.msg) || void 0 === h ? void 0 : h.myInfo,
                      i = {
                        id: t.id,
                        name: t.name,
                        nickName: t.nickName,
                        gender: t.gender,
                        birthday: t.birthday,
                        thumbnail: t.thumbnail,
                        profileThumbnail: t.profileThumbnail,
                        loggedInTime: 1318
                      };
                    _.default.setMyInfo(i);
                  }
                  break;
                case "notifyScreenCaptureResult":
                  const L = null === (m = null == e ? void 0 : e.msg) || void 0 === m ? void 0 : m.url;
                  this.captureCallBack(L);
                  break;
                case "notifyStartVoice":
                  null == e || e.msg;
                  break;
                case "notifyVoiceRecordResult":
                  const b = null === (C = null == e ? void 0 : e.msg) || void 0 === C ? void 0 : C.url;
                  this.uploadFileToServer(b, this.notiCallback);
                  break;
                case "notifyStartVideoRecord":
                  const P = null == e ? void 0 : e.msg;
                  (null === (I = this.cameraVideoElement) || void 0 === I ? void 0 : I.style) && (this.cameraVideoElement.style.display = "block"), this.notiCallback && this.notiCallback(P);
                  break;
                case "notifyVideoRecordResult":
                  const v = null == e ? void 0 : e.msg;
                  (null === (O = this.cameraVideoElement) || void 0 === O ? void 0 : O.style) && (this.cameraVideoElement.style.display = "none"), this.uploadFileToServer(v.url, this.notiCallback);
                  break;
                case "notifyStartCamera":
                  const M = null == e ? void 0 : e.msg,
                    U = document.querySelector(".video_wrap"),
                    w = document.getElementById(null == M ? void 0 : M.videoId);
                  this.cameraVideoElement = w, (null === (A = this.cameraVideoElement) || void 0 === A ? void 0 : A.style) && (this.cameraVideoElement.style.display = "block"), w && (null == U || U.prepend(w)), this.notiCallback && this.notiCallback(M);
                  break;
                default:
                  this.handleUserMessageNotify(null === (f = null == e ? void 0 : e.msg) || void 0 === f ? void 0 : f.data);
              }
            }
            sendRemotePenMsg(e) {
              this.webMessage.sendMessage(e, "*");
            }
            uploadStudentReport(e, t, i) {
              this.webMessage.sendMessage({
                type: "uploadStudentReport",
                from: "content",
                srcFrame: "teaching",
                tgtFrame: "teaching",
                to: "app=>server",
                msg: {
                  type: e,
                  data: {
                    value: t,
                    option: ""
                  }
                }
              }, "*");
            }
            uploadFileToServer(e, t) {
              this.notiCallback = t, this.webMessage.sendMessage({
                type: "uploadFileToServer",
                from: "content",
                srcFrame: "teaching",
                tgtFrame: "teaching",
                to: "app",
                msg: {
                  url: e
                }
              }, "*");
            }
            requestCapture(e) {
              this.captureCallBack = e, c.default.toPng(document.querySelector(".launcher-teaching")).then(e => {
                this.captureCallBack(e);
              }).catch(function (e) {
                console.error("oops, something went wrong!", e);
              });
            }
            requestLogin(e, t) {}
            requestLogout() {}
            initNetwork() {}
            handleStreamError(e) {}
            handleOnStream(e) {}
            handleUploadToServerResult(e) {
              "success" === e.result ? this.uploadRequest.invokeCallback(e.requestNo, e) : this.showUploadRetryPopup(e);
            }
            invokeCallback(e, t, i = !0) {
              const n = this.callbacks[e];
              i && (this.callbacks[e] = () => {}), n && n(t);
            }
            uploadImageToServer(e, t) {
              const i = this.uploadRequest.getNextRequestNo();
              this.uploadRequest.pushRequest({
                requestNo: i,
                type: "image",
                base64: e,
                cb: t
              }), this.isStreamReady && this.uploadImageToServerRaw(i, e);
            }
            sendMsgToTeacher(e) {
              this.webMessage.sendMessage({
                type: "sendMsgToTeacher",
                from: "content",
                srcFrame: "teaching",
                tgtFrame: "teaching",
                to: "app=>server",
                msg: {
                  data: e
                }
              }, "*");
            }
            startVoiceRecord(e) {
              this.webMessage.sendMessage({
                type: "startVoiceRecord",
                tgtFrame: "teaching",
                from: "content",
                to: "app"
              }, "*");
            }
            stopVoiceRecord(e) {
              this.notiCallback = e, this.webMessage.sendMessage({
                type: "stopVoiceRecord",
                tgtFrame: "teaching",
                from: "content",
                to: "app"
              }, "*");
            }
            startCamera(e) {
              this.notiCallback = e, this.webMessage.sendMessage({
                type: "startCamera",
                tgtFrame: "teaching",
                from: "content",
                to: "app"
              }, "*");
            }
            stopCamera(e) {
              this.webMessage.sendMessage({
                type: "stopCamera",
                tgtFrame: "teaching",
                from: "content",
                to: "app"
              }, "*");
            }
            startVideoRecord(e) {
              this.notiCallback = e, this.webMessage.sendMessage({
                type: "startVideoRecord",
                tgtFrame: "teaching",
                from: "content",
                to: "app"
              }, "*");
            }
            stopVideoRecord(e) {
              this.notiCallback = e, this.webMessage.sendMessage({
                type: "stopVideoRecord",
                tgtFrame: "teaching",
                from: "content",
                to: "app"
              }, "*");
            }
            requestTransitionToInClass() {}
            requestTransitionToOutClass() {}
            fetchLocalBookVersion() {}
            fetchExtraActivities() {}
            fetchBookshelfCurriculums() {}
            invokeStreamCallback(e, t) {}
            sendStream(e, t) {
              this.lastNetworkRequestType = e, this.sendStreamToAndroid(t);
            }
            sendSequencedStream(e, t) {
              this.streamCallbacks.enqueue({
                requestSeq: e.getRequestSeq(),
                cb: t
              }), this.packetQueue.enqueue(e), this.sendStreamToAndroid(e);
            }
            sendStreamToAndroid(e) {
              const t = function (e) {
                const t = Array.prototype.map.call(e, e => String.fromCharCode(e)).join("");
                return btoa(t);
              }(e.serializeBinary());
              felPadSideBridge.sendStream(t);
            }
            uploadFileToServerRaw(e, t) {}
            uploadImageToServerRaw(e, t) {
              let i = t;
              i.includes(",") && (i = i.split(",")[1]), felPadSideBridge.uploadImageToServer(e, i);
            }
            quitApp() {
              felPadSideBridge.quit();
            }
            requestReady() {}
            requestTransition(e) {}
            sendHeartbeat() {}
            viewDiv(e) {
              e == C.CONTENT ? this.isTeachingRunning = !0 : this.isTeachingRunning = !1;
              const t = {
                type: "viewDiv",
                from: "content",
                srcFrame: "teaching",
                msg: e == C.CONTENT ? e : this.beforeViewDiv
              };
              this.webMessage.sendMessage(t, "*");
            }
            setFrameDisplay(e, t) {
              t || (0, r.getGlobalStore)().dispatch(S.setVisibilityStudentDrawingTool(!1, l.StudentDrawingToolType.BASIC_PEN));
              const i = {
                type: "internalDisplay",
                from: "content",
                srcFrame: "menu",
                msg: {
                  to: e,
                  display: t
                }
              };
              window.launcher_teaching.sendMessage(i, "*");
            }
            handleUserMessageNotify(e) {
              const t = e,
                i = (0, r.getGlobalStore)();
              if (void 0 !== t && void 0 !== t.to) if (t.to === l.UserMessage.Target.CONTENT) T.default.dispatch(T.EventType.CONTENT_TO_CONTENT, t.data);else if (t.to === l.UserMessage.Target.LAUNCHER) if (t.type === l.UserMessage.Type.SERVER_TERMINATED) this.quitApp();else if (t.type === l.UserMessage.Type.FORCE_LOGOUT) T.default.dispatch(T.EventType.FINISH_CONTENT);else if (t.type === l.UserMessage.Type.START_CROP_DRAWING) {
                this.setFrameDisplay(m.MENU, !1), this.viewDiv(C.CONTENT);
                const e = t.data,
                  {
                    base64: n,
                    width: o,
                    height: s,
                    resizeRatio: a
                  } = e;
                i.dispatch(S.setCropDrawingData(n, o, s, a)), i.dispatch(S.setVisibilityCropDrawingTool(!0));
              } else if (t.type === l.UserMessage.Type.FINISH_CROP_DRAWING) this.setFrameDisplay(m.MENU, !0), this.viewDiv(C.EYEON), i.dispatch(S.setVisibilityCropDrawingTool(!1));else if (t.type === l.UserMessage.Type.START_LOCK) this.setFrameDisplay(m.MENU, !1), i.dispatch(S.activateLock()), i.dispatch(S.showContentTool());else if (t.type === l.UserMessage.Type.FINISH_LOCK) this.setFrameDisplay(m.MENU, !0), i.dispatch(S.deactivateLock()), i.dispatch(S.hideContentTool());else if (t.type === l.UserMessage.Type.PRESENTER_PICKED_STUDENT) this.viewDiv(C.CONTENT), i.dispatch(S.setVisibilityStudentGroup(!1)), i.dispatch(S.setVisibilityStudentPresenter(!0)), i.dispatch(S.showContentTool());else if (t.type === l.UserMessage.Type.GROUP_RESULT_STUDENT) {
                this.viewDiv(C.CONTENT);
                const e = t.data;
                i.dispatch(S.setVisibilityStudentPresenter(!1)), i.dispatch(S.setVisibilityStudentGroup(!0, e.groupIndex, e.groupLeader)), i.dispatch(S.showContentTool());
              } else if (t.type === l.UserMessage.Type.START_PART_LESSON) {
                this.setFrameDisplay(m.MENU, !1), this.viewDiv(C.CONTENT);
                const e = t.data;
                i.dispatch(S.setVisibilityStudentPartLesson(!0, e)), i.dispatch(S.showContentTool());
              } else if (t.type === l.UserMessage.Type.FINISH_PART_LESSON) this.setFrameDisplay(m.MENU, !0), this.viewDiv(C.EYEON), i.dispatch(S.setVisibilityStudentPartLesson(!1)), i.dispatch(S.hideContentTool());else if (t.type === l.UserMessage.Type.APPLY_STAMP) {
                this.viewDiv(C.CONTENT);
                const {
                  stampThumbnail: e,
                  canShowSelectStamp: n,
                  mvpStampNameList: o
                } = t.data;
                i.dispatch(p.setVisibilityStampEffect(!0, e, n, o)), i.dispatch(S.showContentTool());
              } else if (t.type === l.UserMessage.Type.RESPONSE_DOWNLOAD_BOOK_VERSION) {
                if (this.callbacks.successFetchDownloadBookVersion) {
                  const {
                    bookVersion: e
                  } = t.data;
                  this.callbacks.successFetchDownloadBookVersion(e);
                }
              } else {
                const e = this.convertEventType(t.type);
                e && T.default.dispatch(e, t.data);
              }
            }
            convertEventType(e) {
              return e === l.UserMessage.Type.START_CONTENT ? T.EventType.START_CONTENT : e === l.UserMessage.Type.FINISH_CONTENT ? T.EventType.FINISH_CONTENT : e === l.UserMessage.Type.START_LOCK ? T.EventType.START_LOCK : e === l.UserMessage.Type.FINISH_LOCK ? T.EventType.FINISH_LOCK : e === l.UserMessage.Type.START_TAKE_PHOTO ? T.EventType.START_TAKE_PHOTO : e === l.UserMessage.Type.FINISH_TAKE_PHOTO ? T.EventType.FINISH_TAKE_PHOTO : e === l.UserMessage.Type.PREPARE_FORCE_CONTENT_DOWNLOAD ? T.EventType.DOWNLOAD_FORCE_PREPARE : e === l.UserMessage.Type.START_FORCE_CONTENT_DOWNLOAD ? T.EventType.DOWNLOAD_FORCE_START : e === l.UserMessage.Type.STOP_FORCE_CONTENT_DOWNLOAD ? T.EventType.DOWNLOAD_FORCE_STOP : void 0;
            }
            getNextRequestSeq() {
              return this.lastSentPacketSeq += 1, this.lastSentPacketSeq;
            }
            resetNetworkSequence() {
              this.lastSentPacketSeq = 0, this.lastRecvSeqFromServer = 0, this.packetQueue.reset(), this.streamCallbacks.clear();
            }
            clearCallbacks() {
              this.callbacks.failFetchDownloadBookVersion && this.callbacks.failFetchDownloadBookVersion("");
            }
          };
        },
        3107: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = class {
            constructor(e, t) {
              this.lastUploadRequestNo = 0, this.uploadRequestList = [], this.uploadFileFunc = e, this.uploadImageFunc = t;
            }
            getNextRequestNo() {
              return this.lastUploadRequestNo += 1, this.lastUploadRequestNo;
            }
            reset() {
              this.lastUploadRequestNo = 0, this.uploadRequestList = [];
            }
            pushRequest(e) {
              this.uploadRequestList.push(e);
            }
            invokeCallback(e, t) {
              const i = this.uploadRequestList.find(t => t.requestNo === e);
              i && i.cb(t), this.removeRequest(e);
            }
            removeRequest(e) {
              const t = this.uploadRequestList.findIndex(t => t.requestNo === e);
              t >= 0 && this.uploadRequestList.splice(t, 1);
            }
            sendLosingUpload() {
              this.uploadRequestList.forEach(e => {
                "image" === e.type && this.uploadImageFunc(e.requestNo, e.base64), "file" === e.type && this.uploadFileFunc(e.requestNo, e.deviceUrl);
              });
            }
          };
        },
        6953: function (e, t) {
          "use strict";
  
          function i() {
            return window.curBridge;
          }
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.setBridge = t.getBridge = void 0, t.getBridge = i, t.setBridge = function (e) {
            window.curBridge = e;
          };
          const n = i();
          t.default = n;
        },
        6884: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.state = t.setCallback = t.setInputs = void 0;
          const r = s(i(7363)),
            l = i(3493),
            c = s(i(263)),
            u = a(i(6895));
          i(6294);
          const d = a(i(2104)),
            _ = i(3129);
          let T = -1,
            S = 0,
            p = null,
            E = null,
            h = null,
            m = -1,
            C = -1,
            I = null,
            O = null,
            A = null,
            f = null,
            g = null;
          const N = new class {
            constructor() {
              this.state = "hide", this.capslock = !1, this.disableDone = !1;
            }
          }();
          t.state = N;
          const y = l(() => {
              if (!(m < 0)) if (h) {
                if (0 === m) h.done();else {
                  const e = R(m, N.capslock);
                  h.keyDown(m, e);
                }
              } else if (p) {
                if (document.activeElement !== p && p.focus(), 0 === m) return void (f ? f() : "on" === N.state && (N.state = "off", d.default.dispatch(_.EventType.CHANGE_KEYBORAD_STATE, "")));
                if (13 === m && g) return void g();
                const e = c.nteInt(p.selectionStart, -1),
                  t = c.nteInt(p.selectionEnd, -1);
                if (e < 0 || t < 0) return;
                const i = R(m, N.capslock),
                  n = p.value;
                let o = n.substring(0, e),
                  s = n.substring(t);
                8 === m && e > 0 && (o = o.substring(0, o.length - 1));
                const a = o + i + s;
                p.value = a;
                const r = (o + i).length;
                p.setSelectionRange(r, r), I && I(a);
              } else if (E) {
                document.activeElement !== E && E.focus();
                const e = c.nteInt(E.selectionStart, -1),
                  t = c.nteInt(E.selectionEnd, -1);
                if (e < 0 || t < 0 || m < 0) return;
                const i = E.value,
                  n = i.length,
                  o = R(m, N.capslock);
                if (0 === m) return void (f && f());
                if (13 === m) return void (g && g());
                if (9 === m) return void (O && O());
                if (8 === m) {
                  if (0 === e && 0 === t) return void (A && A());
                } else if (C > 0) {
                  if (n > C) return E.value = i.substring(0, C), E.selectionStart = C, void (E.selectionEnd = C);
                  if (n === C && e === C && t === C) return void (O && O());
                }
                let s,
                  a = i.substring(0, e),
                  r = i.substring(t),
                  l = (a + o).length;
                if (8 === m) e > 0 && e === t && (a = a.substring(0, a.length - 1)), s = a + r, l = a.length, E.value = s, E.selectionStart = l, E.selectionEnd = l, I && I(s);else {
                  s = a + o + r;
                  let e = s.length;
                  C > 0 && e > C && (s = s.substring(0, C)), e = s.length, l = (a + o).length, l > e && (l = e), E.value = s, E.selectionStart = l, E.selectionEnd = l, I && I(s), C > 0 && l >= e && O && O();
                }
              }
            }, 60),
            D = e => {
              m < 0 ? y.cancel() : (S > 30 && y(), S++, T = window.requestAnimationFrame(D));
            };
          function R(e, t) {
            let i;
            return 32 === e ? " " : 9 === e ? "\t" : 13 === e ? "\n" : 8 === e ? "" : 188 === e ? t ? "-" : "," : 222 === e ? t ? '"' : "'" : 190 === e ? t ? "?" : "." : e >= 65 && e <= 90 ? (i = String.fromCharCode(e), t ? i : i.toLowerCase()) : t ? 48 === e ? ")" : 49 === e ? "!" : 50 === e ? "@" : 51 === e ? "#" : 52 === e ? "$" : 53 === e ? "%" : 54 === e ? "^" : 55 === e ? "&" : 56 === e ? "*" : 57 === e ? "(" : "" : String.fromCharCode(e);
          }
          t.setCallback = function (e = null, t = null, i = null, n = null, o = null) {
            I = e, A = t, O = i, f = n, g = o;
          }, t.setInputs = function (e, t = 0) {
            var i;
            e && "keyDown" in (i = e) && "done" in i ? (h = e, E = null, p = null) : e instanceof HTMLTextAreaElement ? (p = e, E = null, h = null) : e instanceof HTMLInputElement ? (E = e, p = null, h = null) : (E = null, p = null, h = null, m = -1), C = t;
          };
          class L extends r.Component {
            constructor(e) {
              super(e), this._keyDown = () => {
                if (20 === this.props.keyCode) return N.capslock = !N.capslock, void d.default.dispatch(_.EventType.CHANGE_KEYBORAD_STATE, "");
                T >= 0 && (window.cancelAnimationFrame(T), T = -1), y.cancel(), m = this.props.keyCode, y(), S = 0, T = window.requestAnimationFrame(D);
              }, this._keyUp = () => {
                S = 0, T >= 0 && (window.cancelAnimationFrame(T), T = -1), y.cancel(), m = -1;
              }, this._leave = () => {
                S = 0, T >= 0 && (window.cancelAnimationFrame(T), T = -1), y.cancel(), m = -1;
              };
            }
            render() {
              return r.createElement(u.default, {
                className: this.props.className,
                onMouseDown: this._keyDown,
                onMouseUp: this._keyUp,
                onMouseLeave: this._leave,
                disableCapture: !0,
                on: this.props.on
              }, this.props.children);
            }
          }
          class b extends r.Component {
            constructor(e) {
              super(e), this.changeState = e => {
                N.state = e, this.setState({
                  state: e
                });
              }, this._on = () => {
                "off" === N.state && (N.state = "on", this.setState({
                  state: "on"
                }));
              }, this._off = () => {
                "on" === N.state && (N.state = "off", this.setState({
                  state: "off"
                }));
              }, this.state = {
                state: "hide",
                capslock: !1,
                disableDone: !1
              };
            }
            componentWillUnmount() {
              this.obserableEvent && this.obserableEvent.unsubscribe();
            }
            componentDidMount() {
              this.obserableEvent = d.default.getObserable().subscribe(e => {
                e.type === _.EventType.CHANGE_KEYBORAD_STATE && this.setState(Object.assign({}, N));
              });
            }
            render() {
              const {
                state: e,
                capslock: t,
                disableDone: i
              } = this.state;
              return r.createElement("div", {
                className: "keyboard-box " + e + (t ? " uppercase" : "")
              }, r.createElement("div", null, r.createElement(L, {
                className: "s",
                keyCode: 49
              }, R(49, t)), r.createElement(L, {
                className: "s",
                keyCode: 50
              }, R(50, t)), r.createElement(L, {
                className: "s",
                keyCode: 51
              }, R(51, t)), r.createElement(L, {
                className: "s",
                keyCode: 52
              }, R(52, t)), r.createElement(L, {
                className: "s",
                keyCode: 53
              }, R(53, t)), r.createElement(L, {
                className: "s",
                keyCode: 54
              }, R(54, t)), r.createElement(L, {
                className: "s",
                keyCode: 55
              }, R(55, t)), r.createElement(L, {
                className: "s",
                keyCode: 56
              }, R(56, t)), r.createElement(L, {
                className: "s",
                keyCode: 57
              }, R(57, t)), r.createElement(L, {
                className: "s",
                keyCode: 48
              }, R(48, t)), r.createElement(L, {
                className: "s",
                keyCode: 188
              }, R(188, t)), r.createElement(L, {
                className: "s",
                keyCode: 222
              }, R(222, t)), r.createElement(L, {
                className: "s",
                keyCode: 190
              }, R(190, t)), r.createElement(L, {
                className: "s key_back",
                keyCode: 8
              })), r.createElement("div", null, r.createElement(L, {
                className: "m alpha",
                keyCode: 81
              }, R(81, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 87
              }, R(87, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 69
              }, R(69, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 82
              }, R(82, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 84
              }, R(84, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 89
              }, R(89, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 85
              }, R(85, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 73
              }, R(73, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 79
              }, R(79, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 80
              }, R(80, t)), r.createElement(L, {
                className: "b key_shift",
                on: N.capslock,
                keyCode: 20
              })), r.createElement("div", null, r.createElement(L, {
                className: "m alpha",
                keyCode: 65
              }, R(65, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 83
              }, R(83, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 68
              }, R(68, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 70
              }, R(70, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 71
              }, R(71, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 72
              }, R(72, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 74
              }, R(74, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 75
              }, R(75, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 76
              }, R(76, t)), r.createElement(L, {
                className: "b key_enter",
                keyCode: 13
              })), r.createElement("div", null, r.createElement(L, {
                className: "m alpha",
                keyCode: 90
              }, R(90, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 88
              }, R(88, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 67
              }, R(67, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 86
              }, R(86, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 66
              }, R(66, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 78
              }, R(78, t)), r.createElement(L, {
                className: "m alpha",
                keyCode: 77
              }, R(77, t)), r.createElement(L, {
                className: "b key_space",
                keyCode: 32
              }), r.createElement(L, {
                className: "b done" + (i ? " dis" : ""),
                keyCode: 0
              })), r.createElement(u.default, {
                className: "key_hide",
                onClick: this._off
              }), r.createElement(u.default, {
                className: "key_view",
                onClick: this._on
              }));
            }
          }
          t.default = b;
        },
        6895: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const a = s(i(7363));
          class r extends a.Component {
            constructor(e) {
              super(e), this.state = {
                m_on: !1,
                m_pID: -1
              }, this._inited = this._inited.bind(this), this._onClick = this._onClick.bind(this);
            }
            _inited(e) {
              !this.m_el && e && (this.m_el = e, this.props.onRef && this.props.onRef(e), e.setAttribute("touch-action", "none"), e.addEventListener("pointerdown", t => {
                if (!(this.state.m_pID >= 0)) {
                  if (this.setState({
                    m_pID: t.pointerId
                  }), !this.props.disableCapture) try {
                    e.setPointerCapture(this.state.m_pID);
                  } catch (e) {}
                  this.props.onMouseDown && this.props.onMouseDown(t);
                }
              }), e.addEventListener("pointerup", t => {
                if (this.state.m_pID === t.pointerId) {
                  try {
                    e.releasePointerCapture(this.state.m_pID);
                  } catch (e) {}
                  this.setState({
                    m_pID: -1
                  }), this.props.onMouseUp && this.props.onMouseUp(t);
                }
              }), e.addEventListener("pointerleave", t => {
                if (this.props.disableCapture) {
                  if (this.state.m_pID !== t.pointerId) return;
                  try {
                    e.releasePointerCapture(this.state.m_pID);
                  } catch (e) {}
                  this.setState({
                    m_pID: -1
                  });
                }
                this.props.onMouseLeave && this.props.onMouseLeave(t);
              }), e.addEventListener("pointercancel", t => {
                if (this.state.m_pID === t.pointerId) {
                  try {
                    e.releasePointerCapture(this.state.m_pID);
                  } catch (e) {}
                  this.setState({
                    m_pID: -1
                  }), this.props.onMouseLeave && this.props.onMouseLeave(t);
                }
              }));
            }
            _onClick(e) {
              this.props.onClick && this.props.onClick(e), this.props.preventEvent && (e.preventDefault(), e.stopPropagation());
            }
            componentDidUpdate(e) {
              if ((this.props.disabled && !e.disabled || !this.props.view && e.view) && this.state.m_pID >= 0) {
                try {
                  this.m_el && this.m_el.releasePointerCapture(this.state.m_pID);
                } catch (e) {}
                this.setState({
                  m_pID: -1
                });
              }
            }
          }
          t.default = class extends r {
            constructor(e) {
              super(e), this.setState({
                m_on: !0 === e.on
              });
            }
            componentWillReceiveProps(e) {
              this.props.on !== e.on && super.setState({
                m_on: !0 === e.on
              });
            }
            render() {
              const e = [];
              this.props.className && e.push(this.props.className), this.state.m_on && e.push("on"), this.state.m_pID > 0 && e.push("down");
              const t = e.join(" ");
              let i = this.props.style;
              return !1 === this.props.view && (i.display = "none"), a.createElement("button", {
                id: this.props.id,
                className: t,
                onClick: this._onClick,
                ref: this._inited,
                disabled: !0 === this.props.disabled,
                draggable: !1,
                onTransitionEnd: this.props.onTransitionEnd,
                style: i
              }, this.props.children);
            }
          };
        },
        3256: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.CAPTION = t.CAPTION_KOR = void 0, t.CAPTION_KOR = {
            ID: "아이디",
            PASSWORD: " 비밀번호",
            KEEP_ME_SIGNED: "아이디/비밀번호 저장",
            UPDATE: "업데이트",
            LOADING: "로딩중...",
            MY_CLASS: "반 수",
            MY_CLASS_TOTAL: ":",
            STUDENTS: "학생 수",
            HOME: "홈",
            LOGOUT: "로그아웃",
            EXIT: "나가기",
            DATE_FORMAT: "MM.DD (ddd) HH:mm",
            MON: "월",
            TUE: "화",
            WED: "수",
            THU: "목",
            FRI: "금",
            SAT: "토",
            SUN: "일",
            BOOK_SHELF: "교재 자료",
            SPECIAL_ACTIVITY: "특별 활동",
            LESSON_MAP: "강의 구성",
            LOCK: "잠금",
            UNLOCK: "해제",
            PEN_TOOL: "쓰기 도구",
            LIBRARY: "학습 자료",
            TIMER: "타이머",
            PRESENTER_GROUP: "발표자 & 그룹",
            IDEAS_OPINIONS: "아이디어 & 의견",
            PORTFOLIO: "포트폴리오",
            STAMP: "스탬프",
            RESET: "초기화",
            TIMER_STOPWATCH: "타이머 & 스톱워치",
            STOPWATCH: "스톱워치",
            START: "시작",
            STOP: "정지",
            HOUR: "시",
            MINUTE: "분",
            SECOND: "초",
            TIME_OVER: "시간 초과",
            LAP: "랩 타임",
            CHOOSE_PRESENTERS: "발표자 선정",
            CREATE_GROUPS: "그룹 만들기",
            SELECT: "선정",
            RESELECT: "재선정",
            TEACHER: "선생님",
            INCLUDE: "포함",
            GROUP: "그룹",
            LEADER: "리더",
            TOPIC: "주제",
            TOPIC_SENTENCE: "여기를 눌러 주제를 선택하신 후 하단의 녹음하기, 녹화하기를 터치하세요.",
            OK: "확인",
            CANCEL: "취소",
            MVP: "최우수 학생",
            LOGIN: "로그인",
            PARTICIPATE: "참여자",
            ALL: "전체",
            ALL2: "모두",
            DISPLAY_MODE: "이름/별명 선택",
            DISPLAY_MODE_SENTENCE: "이름 또는 별명을 선택하세요.",
            STUDENT_ATTEND: "출석부",
            NAME: "이름",
            NICKNAME: "별명",
            BRAINSTORMING: "브레인스토밍",
            DISCUSSION: "논의",
            DEBATE: "토론",
            POLL: "투표",
            CHATTING: "채팅",
            CHAT: "채팅",
            CHOOSE_TOPIC: "주제 선택",
            STEP1: "1단계",
            STEP2: "2단계",
            STEP3: "3단계",
            WRITE_TOPIC: "주제를 입력하세요.",
            UPLOAD_TIME: "작성 시간",
            AGREE: "동의함",
            DISAGREE: "동의하지 않음",
            READY: "준비중",
            SOON: "수업이 곧 시작됩니다.",
            CHOSEN: "발표자로 선택되었습니다.",
            GROUPS: "당신의 그룹은",
            PLEASE_IDEA: "내용을 입력하세요.",
            RESEND: "재전송",
            CLASS_SETTING: "수업 환경 설정",
            CLASS: "반명",
            LEVEL: "레벨",
            TOTAL: "총 ",
            LESSON_MODE: "수업 모드",
            BACKGROUND: "배경화면",
            ONLY_TEACH: "선생님만",
            STUDENT_ENGAGEMENT: "선생님+학생",
            UNIT_FOCUS: "학습 개요"
          }, t.CAPTION = {
            ID: "ID",
            PASSWORD: " Password",
            KEEP_ME_SIGNED: "Keep me Signed in",
            UPDATE: "UPDATE",
            LOADING: "LOADING...",
            MY_CLASS: "MY CLASSES",
            MY_CLASS_TOTAL: "Total",
            STUDENTS: "Students",
            HOME: "HOME",
            LOGOUT: "LOGOUT",
            EXIT: "EXIT",
            DATE_FORMAT: "ddd MM.DD HH:mm",
            MON: "Mon",
            TUE: "Thu",
            WED: "Wed",
            THU: "Thu",
            FRI: "Fri",
            SAT: "Sat",
            SUN: "Sun",
            BOOK_SHELF: "Bookshelf",
            SPECIAL_ACTIVITY: "3-Minute Activity",
            LESSON_MAP: "Lesson Map",
            LOCK: "Lock",
            UNLOCK: "UnLock",
            PEN_TOOL: "Pen Tool",
            LIBRARY: "Library",
            TIMER: "Timer",
            PRESENTER_GROUP: "Presenters & Groups",
            IDEAS_OPINIONS: "Ideas & Opinions",
            PORTFOLIO: "Portfolio",
            STAMP: "Stamp",
            RESET: "RESET",
            TIMER_STOPWATCH: "Timer & Stopwatch",
            STOPWATCH: "Stopwatch",
            START: "Start",
            STOP: "Stop",
            HOUR: "Hour",
            MINUTE: "min",
            SECOND: "sec",
            TIME_OVER: "Time Over",
            LAP: "Lap",
            CHOOSE_PRESENTERS: "Choose Presenters",
            CREATE_GROUPS: "Create Groups",
            SELECT: "Select",
            RESELECT: "Reselect",
            TEACHER: "Teacher",
            INCLUDE: "",
            GROUP: "Group",
            LEADER: "Leader",
            TOPIC: "Topic",
            TOPIC_SENTENCE: "Touch the Topic icon above and choose a topic.",
            OK: "OK",
            CANCEL: "CANCEL",
            MVP: "MVP",
            LOGIN: "LOGIN",
            PARTICIPATE: "LOGIN",
            ALL: "ALL",
            ALL2: "All",
            DISPLAY_MODE: "Display mode",
            DISPLAY_MODE_SENTENCE: "Choose a display mode.",
            STUDENT_ATTEND: "Student attendance",
            NAME: "Name",
            NICKNAME: "NickName",
            BRAINSTORMING: "Brainstorming",
            DISCUSSION: "Discussion",
            DEBATE: "Debate",
            POLL: "Poll",
            CHATTING: "Chatting",
            CHAT: "Chat",
            CHOOSE_TOPIC: "Choose a topic",
            STEP1: "Step 1",
            STEP2: "Step 2",
            STEP3: "Step 3",
            WRITE_TOPIC: "Write your own topic.",
            UPLOAD_TIME: "Upload Time",
            AGREE: "Agree",
            DISAGREE: "Disagree",
            READY: "Ready",
            SOON: "Class will start soon.",
            CHOSEN: "You're chosen.",
            GROUPS: "You're group",
            PLEASE_IDEA: "Please type your idea here",
            RESEND: "RESEND",
            CLASS_SETTING: "Class Setting",
            CLASS: "Class",
            LEVEL: "Level",
            TOTAL: "Total ",
            LESSON_MODE: "Lesson Mode",
            BACKGROUND: "Background",
            ONLY_TEACH: "Only Teaching",
            STUDENT_ENGAGEMENT: "Student Engagement",
            UNIT_FOCUS: "Unit Focus"
          };
        },
        1869: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.DIALOG_MSG = void 0, t.DIALOG_MSG = {
            EMPTY_URL: "Please enter a URL",
            EMPTY_ID: "Please enter your ID",
            EMPTY_PWD: "Please enter a password",
            INVALID_ID: "No ID exists",
            INVALID_ID_PWD: "The ID or Password you entered is incorrect.\nPlease type again",
            ALREADY_EXIST_SESSION: "You are already logged in. Please try again later.",
            NETWORK_NOT_READY: "Network Disconnection",
            SYSTEM_INTERNAL_ERROR: "unknown system error({0})",
            UNDER_CONSTRUCTION: "Coming Soon",
            LOGOUT: "Do you really want to Logout?",
            EXIT_APP: "Do you really want to Exit?",
            TEACHER_NOT_SELECTED_CLASS: "The instructor has not chosen a class.",
            TEACHER_NOT_LOGINED: "The teacher has not logged in yet.",
            STUDENT_NOT_BELONG_TO_CLASS: "You have no access authority. Please ask a teacher for help.",
            DRAWING_TOOL_LOAD_IMAGE_FAIL_BY_INVALID: "The image file is corrupted. It cannot be opened or restored.",
            DRAWING_TOOL_LOAD_IMAGE_FAIL_BY_SIZE: "The image file is too big. The maximum image file size is 10MB.",
            DRAWING_TOOL_LOAD_IMAGE_FAIL_BY_NOT_SELECTED: "You have not chosen an image.",
            DRAWING_TOOL_LOAD_IMAGE_FAIL_BY_UNDEFINED: "An error occurred. Please try again.",
            TEACHING_TOOL_PRESENTER_NOT_ENOUGH_STUDENT: "There are not enough students logged into the class",
            NOT_SELECTED_PART_LESSON_TOPIC: "Please select a topic.",
            NOT_ALLOW_ALL_REMOVE_SELECT_ITEM: "You must choose one answer.",
            YOU_MUST_CHOOSE_TWO_AT_LEAST: "Please choose at least two answers.",
            EMPTY_TEXT_ITEM: "Enter the contents.",
            NOT_SELECTED_REMOVE_ITEM: "The item to be not chosen.",
            LIB_REMOVE_ITEM: "Do you really want to delete?",
            LIB_REMOVE_ITEM_ALL: "Do you really want to delete ALL?",
            NOT_DOWNLOADED_YET: "Not downloaded. Download and try again?",
            NOT_INPUTED_MSG: "There is no text or drawing available for upload.",
            NEED_SETUP_TIMER: "Please set the timer.",
            LIB_OPEN_INTERNET: "Would you like to minimize program and open internet browser?",
            LIB_OPEN_FILES: "Would you like to minimize program and open files?",
            FAILED_LMS_DATA_SYNC: "Not Synchronized. Try again.",
            NETWORK_CONNECTION_FAILED: "Not connected to the network.  ",
            LAUNCHER_NEWEST: "This launcher version is newest.",
            CONTENTS_NEWEST: "This contents version is newest.",
            NOT_EXIST_CONTENT_FILES_IN_LOCAL_SERVER: "There is content that is not downloaded by teacher. Please check it.",
            NOT_EXIST_CONTENT_FILES_IN_API_SERVER: "다운받으려는 컨텐츠가 정보가 서버에 없습니다.",
            APP_NEWEST: "This app version is newest.",
            CONTENTS_EMPTY: "This contents is empty.",
            WORK_COMPLETE: "Completed.",
            NOT_EXIST_CONTENT_INFO: "Contents info not found.",
            NOT_EXIST_ITEM_INFO: "The item not found.",
            NOT_EXIST_STUDY: "The class curriculum not chosen.",
            UPLOAD_RETRY_ASK: "The study results not uploaded. Try again?",
            EMPTY_STUDY_RESULT_CLASS: "No study results found to be synchronized.",
            SAVE_STUDY_RESULT_CLASS: "Would you like to sync {0} study results?",
            SAVE_STUDY_RESULT_ALL_CLASS: "Would you like to sync {0} class study results? ",
            SAVE_STUDY_RESULT_IN_PROGRESS_WITH_CLASS_NUMBER: "{0} study results being synchronized.",
            SAVE_STUDY_RESULT_IN_PROGRESS: "The class study results being synchronized.",
            SAVE_STUDY_RESULT_FINISH: "Synchronization is complete.",
            CANCELLED_SAVE_STUDY_RESULT: "The synchronization stopped.",
            FAILD_STUDY_RESULT_SYNC: "Synchronization is Failed.",
            RECORDING_TIME_LIMIT: "The recording time exceeded. The recording stopped.(The time limit is {0} seconds.)",
            BTN_YES: "Yes",
            BTN_NO: "No",
            FAILED_FETCH_BOOKSHELF: "Bookshelf 정보를 가져오는데 실패했습니다.",
            CHANGE_CONTENT_TRANSMISSION_MODE: "Change the set transmission method.\nPlease re-login to launcher and student application\nto apply changed settings",
            NOT_AVAILABLE_DOWNLOAD_CONTENT: "No downloaded content available.\nRedirecting you to login page.",
            NOT_ENOUGH_SPACE_TO_DOWNLOAD: "There is not enough storage available.\nTo download new content, please delete old\nlearning content or apps that you no longer need.",
            DOWNLOAD_ERROR_N_RETRY: "Download error.\nWould you like to download again?",
            DOWNLOAD_FAILED_BY_ANDROID: "학생 패드 문제로 컨텐츠 다운로드를 실패했습니다.\n확인 후 다시 시도해주세요.",
            DOWNLOAD_ERROR_BY_SERVER: "Download failed due to server issues.\n Please try again.",
            TO_PAD_FAIL_N_RETRY: "Out of total {0}, {1} download complete, {2} download failed\nWould you like to send again?",
            DOWNLOAD_COMPLETE: "Download completed.",
            DELETE_COMPLETE: "Deletion completed.",
            FAILED_UPDATE_APP_BY_OFFLINE: "Please check your internet connection.",
            NOT_EXIST_CONNECTED_STUDENT: "Please check your student pad connection.",
            PORTFOLIO_SELECT_VIDEO_N_AUDIO: "You can only select one (Audio or Video)"
          };
        },
        137: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.ResponseCode = void 0, function (e) {
            e[e.SUCCESS = 200] = "SUCCESS";
          }(t.ResponseCode || (t.ResponseCode = {}));
        },
        5258: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.SKETCH_HISTORY_TEACHER_DRAWING_FOURLINEBOARD = t.SKETCH_HISTORY_TEACHER_DRAWING_SQUAREBOARD = t.SKETCH_HISTORY_TEACHER_DRAWING_IMAGEBOARD = t.SKETCH_HISTORY_TEACHER_DRAWING_WHITEBOARD = t.SKETCH_HISTORY_TEACHER_DRAWING_LINEBOARD = t.SKETCH_HISTORY_TEACHER_DRAWING_BASIC = t.Z_INDEX_LESSON_COMPLETE_POPUP = t.Z_INDEX_TEACHING_TOOL_MEMU_BAR = t.Z_INDEX_TEACHING_TOOL_MENU_ITEM_POPUP_STAMP = t.Z_INDEX_TEACHING_TOOL_MENU_ITEM_POPUP_PLUS1 = t.Z_INDEX_TEACHING_TOOL_MENU_ITEM_POPUP = t.Z_INDEX_TEACHING_TOOL_MENU_ITEM_SMALL = t.Z_INDEX_TEACHING_TOOL_MENU_ITEM = t.Z_INDEX_TEACHING_TOOL_COMMON_RESULT_LIST_DETAIL = t.Z_INDEX_TEACHING_TOOL_TITLE_BAR = t.Z_INDEX_TEACHING_TOOL_COMMON_RESILT_STAMP = t.Z_INDEX_TEACHING_TOOL_COMMON_RESULT_STAMP_LIST = t.Z_INDEX_TEACHING_TOOL_COMMON_RESULT_DETAIL = t.Z_INDEX_TEACHING_TOOL_COMMON_RESULT_LIST = t.Z_INDEX_TEACHING_TOOL_COMMON_RESULT_BAR = t.Z_INDEX_TEACHING_TOOL_COMMON_RESULT_CNT_TYPE = t.ClassSkinDataList = t.EMPTY_STRING = t.INVALID_CURRICULUM_ID = t.DEFAULT_DISPLAY_MODE = t.ONE_SEC_BY_MILLISEC = t.MAX_STAMP_APPLY_CNT = t.CLASS_VIEW_MODE_2_VIEW = t.CLASS_VIEW_MODE_1_VIEW = t.STUDENT_FOLDER_NAME = t.TEACHER_FOLDER_NAME = t.BUTTON_SELECT_DISPLAY_MIL_SEC = t.STUDENT_RESULT_LIST_BAR_VIDEO_DISPLAY_CNT_PER_PAGE = t.STUDENT_RESULT_LIST_BAR_AUDIO_DISPLAY_CNT_PER_PAGE = t.STUDENT_RESULT_LIST_BAR_IMAGE_DISPLAY_CNT_PER_PAGE = t.STUDENT_RESULT_LIST_BAR_TEXT_DISPLAY_CNT_PER_PAGE = t.STUDENT_RESULT_LIST_VIDEO_DISPLAY_CNT_PER_PAGE = t.STUDENT_RESULT_LIST_AUDIO_DISPLAY_CNT_PER_PAGE = t.STUDENT_RESULT_LIST_IMAGE_DISPLAY_CNT_PER_PAGE = t.STUDENT_RESULT_LIST_TEXT_DISPLAY_CNT_PER_PAGE = t.STUDENT_RESULT_LIST_CNT_DISPLAY_CNT_PER_PAGE = t.THREE_MIN_ACTIVITY_LIST_DISPLAY_CNT_PER_PAGE = t.BACKGROUND_IMAGE_DISPLAY_CNT_PER_PAGE = t.STUDENT_LIST_DISPALY_CNT_PER_PAGE = t.CLASS_LIST_DISPLAY_CNT_PER_PAGE = t.LAZY_LOGIN_STUDENT_START_CONTENT_DEALY_SEC = t.CONTENT_START_NORMAL_TYPE_LIMIT_MINUTE = t.NETWORK_DISCONNECT_WAITING_SEC = t.DEFAULT_SCREEN_HEIGHT = t.DEFAULT_SCREEN_WIDTH = void 0, t.CUSTOM_PART_LESSON_SRC_IDX_PORTFOLIO = t.CUSTOM_PART_LESSON_SRC_IDX_CHATTING = t.CUSTOM_PART_LESSON_SRC_IDX_POLL = t.CUSTOM_PART_LESSON_SRC_IDX_DEBATE = t.CUSTOM_PART_LESSON_SRC_IDX_DISCUSSION = t.CUSTOM_PART_LESSON_SRC_IDX_BRAINSTORMING = t.INVALID_PART_LESSON_TOPIC_ID = t.INIT_FLOATING_PEN_TOOL_POS = t.PAD_VIDEO_MINE_TYPE = t.STUDENT_PORTFOLUI_MAX_STANDBY_SEC = t.RESOURCE_RELOAD_MAX_STANDBY_SEC = t.BOOK_VERSION_JSON_FILE_NAME = t.ExtraBookType = t.DEFAULT_S3_BUCKET_DOMAIN = t.DEFAULT_API_DOMAIN = t.DEFAULT_CLASS_IMAGE = t.DEFAULT_TEACHER_IMAGE = t.DEFAULT_WOMAN_IMAGE = t.DEFAULT_MAN_IMAGE = t.IO_TOPIC_MAX_LENGTH = t.CROP_MINIMUM_HEIGHT = t.CROP_MINIMUM_WIDTH = t.SKETCH_HISTORY_TEACHER_DRAWING_LIBRARY = t.SKETCH_HISTORY_TEACHER_DRAWING_CROP_RESULT = t.SKETCH_HISTORY_TEACHER_DRAWING_FOURLINETRACEBOARD = void 0;
          const n = i(4934);
          t.DEFAULT_SCREEN_WIDTH = 1280, t.DEFAULT_SCREEN_HEIGHT = 800, t.NETWORK_DISCONNECT_WAITING_SEC = 20, t.CONTENT_START_NORMAL_TYPE_LIMIT_MINUTE = 1, t.LAZY_LOGIN_STUDENT_START_CONTENT_DEALY_SEC = 3, t.CLASS_LIST_DISPLAY_CNT_PER_PAGE = 4, t.STUDENT_LIST_DISPALY_CNT_PER_PAGE = 18, t.BACKGROUND_IMAGE_DISPLAY_CNT_PER_PAGE = 9, t.THREE_MIN_ACTIVITY_LIST_DISPLAY_CNT_PER_PAGE = 10, t.STUDENT_RESULT_LIST_CNT_DISPLAY_CNT_PER_PAGE = 28, t.STUDENT_RESULT_LIST_TEXT_DISPLAY_CNT_PER_PAGE = 28, t.STUDENT_RESULT_LIST_IMAGE_DISPLAY_CNT_PER_PAGE = 15, t.STUDENT_RESULT_LIST_AUDIO_DISPLAY_CNT_PER_PAGE = 15, t.STUDENT_RESULT_LIST_VIDEO_DISPLAY_CNT_PER_PAGE = 15, t.STUDENT_RESULT_LIST_BAR_TEXT_DISPLAY_CNT_PER_PAGE = 10, t.STUDENT_RESULT_LIST_BAR_IMAGE_DISPLAY_CNT_PER_PAGE = 8, t.STUDENT_RESULT_LIST_BAR_AUDIO_DISPLAY_CNT_PER_PAGE = 10, t.STUDENT_RESULT_LIST_BAR_VIDEO_DISPLAY_CNT_PER_PAGE = 10, t.BUTTON_SELECT_DISPLAY_MIL_SEC = 150, t.TEACHER_FOLDER_NAME = "teacher", t.STUDENT_FOLDER_NAME = "student", t.CLASS_VIEW_MODE_1_VIEW = 1, t.CLASS_VIEW_MODE_2_VIEW = 2, t.MAX_STAMP_APPLY_CNT = 12, t.ONE_SEC_BY_MILLISEC = 1e3, t.DEFAULT_DISPLAY_MODE = n.DisplayMode.DEFAULT_THUMB_N_NAME, t.INVALID_CURRICULUM_ID = 0, t.EMPTY_STRING = "", t.ClassSkinDataList = [{
            id: 1,
            thumbnail: window.TEACHING_PATH + "/static/images/bg_class.jpg"
          }, {
            id: 2,
            thumbnail: window.TEACHING_PATH + "/static/images/bg/1.jpg"
          }, {
            id: 3,
            thumbnail: window.TEACHING_PATH + "/static/images/bg/3.jpg"
          }, {
            id: 4,
            thumbnail: window.TEACHING_PATH + "/static/images/bg/4.jpg"
          }, {
            id: 5,
            thumbnail: window.TEACHING_PATH + "/static/images/bg/5.jpg"
          }, {
            id: 6,
            thumbnail: window.TEACHING_PATH + "/static/images/bg/6.jpg"
          }, {
            id: 7,
            thumbnail: window.TEACHING_PATH + "/static/images/bg/7.jpg"
          }, {
            id: 8,
            thumbnail: window.TEACHING_PATH + "/static/images/bg/8.jpg"
          }, {
            id: 9,
            thumbnail: window.TEACHING_PATH + "/static/images/bg/9.jpg"
          }], t.Z_INDEX_TEACHING_TOOL_COMMON_RESULT_CNT_TYPE = 10, t.Z_INDEX_TEACHING_TOOL_COMMON_RESULT_BAR = 10, t.Z_INDEX_TEACHING_TOOL_COMMON_RESULT_LIST = 15, t.Z_INDEX_TEACHING_TOOL_COMMON_RESULT_DETAIL = 16, t.Z_INDEX_TEACHING_TOOL_COMMON_RESULT_STAMP_LIST = 17, t.Z_INDEX_TEACHING_TOOL_COMMON_RESILT_STAMP = 18, t.Z_INDEX_TEACHING_TOOL_TITLE_BAR = 20, t.Z_INDEX_TEACHING_TOOL_COMMON_RESULT_LIST_DETAIL = 25, t.Z_INDEX_TEACHING_TOOL_MENU_ITEM = 100, t.Z_INDEX_TEACHING_TOOL_MENU_ITEM_SMALL = 100, t.Z_INDEX_TEACHING_TOOL_MENU_ITEM_POPUP = 200, t.Z_INDEX_TEACHING_TOOL_MENU_ITEM_POPUP_PLUS1 = 99999, t.Z_INDEX_TEACHING_TOOL_MENU_ITEM_POPUP_STAMP = 1e5, t.Z_INDEX_TEACHING_TOOL_MEMU_BAR = 150, t.Z_INDEX_LESSON_COMPLETE_POPUP = 200, t.SKETCH_HISTORY_TEACHER_DRAWING_BASIC = "teacher-sketch1", t.SKETCH_HISTORY_TEACHER_DRAWING_LINEBOARD = "teacher-sketch2", t.SKETCH_HISTORY_TEACHER_DRAWING_WHITEBOARD = "teacher-sketch3", t.SKETCH_HISTORY_TEACHER_DRAWING_IMAGEBOARD = "teacher-sketch4", t.SKETCH_HISTORY_TEACHER_DRAWING_SQUAREBOARD = "teacher-sketch5", t.SKETCH_HISTORY_TEACHER_DRAWING_FOURLINEBOARD = "teacher-sketch6", t.SKETCH_HISTORY_TEACHER_DRAWING_FOURLINETRACEBOARD = "teacher-sketch7", t.SKETCH_HISTORY_TEACHER_DRAWING_CROP_RESULT = "teacher-sketch8", t.SKETCH_HISTORY_TEACHER_DRAWING_LIBRARY = "teacher-sketch9", t.CROP_MINIMUM_WIDTH = 193, t.CROP_MINIMUM_HEIGHT = 193, t.IO_TOPIC_MAX_LENGTH = 70, t.DEFAULT_MAN_IMAGE = "../toolkit_static/images/default_member_m.jpg", t.DEFAULT_WOMAN_IMAGE = "../toolkit_static/images/default_member_w.jpg", t.DEFAULT_TEACHER_IMAGE = "../toolkit_static/images/myProfile/deault_thumb_t.png", t.DEFAULT_CLASS_IMAGE = "../toolkit_static/images/default_course.jpg", t.DEFAULT_API_DOMAIN = "http://api.fel40.com", t.DEFAULT_S3_BUCKET_DOMAIN = "https://s3.ap-northeast-2.amazonaws.com/primaryenglisheyecontents", function (e) {
            e.LOWER = "B61001", e.UPPER = "B61002", e.WINGS = "B61003";
          }(t.ExtraBookType || (t.ExtraBookType = {})), t.BOOK_VERSION_JSON_FILE_NAME = "BookVersion.json", t.RESOURCE_RELOAD_MAX_STANDBY_SEC = 15, t.STUDENT_PORTFOLUI_MAX_STANDBY_SEC = 10, t.PAD_VIDEO_MINE_TYPE = "video/mp4", t.INIT_FLOATING_PEN_TOOL_POS = {
            x: 100,
            y: 100
          }, t.INVALID_PART_LESSON_TOPIC_ID = 0, t.CUSTOM_PART_LESSON_SRC_IDX_BRAINSTORMING = 9991, t.CUSTOM_PART_LESSON_SRC_IDX_DISCUSSION = 9992, t.CUSTOM_PART_LESSON_SRC_IDX_DEBATE = 9993, t.CUSTOM_PART_LESSON_SRC_IDX_POLL = 9994, t.CUSTOM_PART_LESSON_SRC_IDX_CHATTING = 9995, t.CUSTOM_PART_LESSON_SRC_IDX_PORTFOLIO = 9996;
        },
        8028: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__exportStar || function (e, t) {
              for (var i in e) "default" === i || Object.prototype.hasOwnProperty.call(t, i) || n(t, e, i);
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), o(i(5258), t), o(i(1869), t), o(i(137), t);
        },
        5646: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const r = i(8685),
            l = a(i(4881)),
            c = a(i(313)),
            u = s(i(2084)),
            d = i(1331);
          t.default = (0, r.connect)(e => ({
            groupData: e.contentTool.studentGroupData
          }), (e, t, i) => Object.assign({}, i, t, e, Object.assign(Object.assign({}, (0, c.default)(e)), {
            hideGroup: () => {
              window.padSideNetwork.viewDiv(d.ViewDivType.EYEON), e(u.setVisibilityStudentGroup(!1)), e(u.hideContentTool());
            }
          })))(l.default);
        },
        71: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const o = i(8685),
            s = n(i(6785)),
            a = n(i(313));
          t.default = (0, o.connect)(e => ({
            studentPartLessonSrc: e.contentTool.studentPartLessonSrc
          }), (e, t, i) => Object.assign({}, i, t, e, Object.assign({}, (0, a.default)(e))))(s.default);
        },
        3642: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const r = i(8685),
            l = a(i(3287)),
            c = a(i(313)),
            u = s(i(2084)),
            d = i(4223);
          t.default = (0, r.connect)(e => ({}), (e, t, i) => Object.assign({}, i, t, e, Object.assign(Object.assign({}, (0, c.default)(e)), {
            startStudentCamera: () => {
              d.BgController.setBgToTransparent(), e(u.startStudentCamera());
            },
            stopStudentCamera: () => {
              d.BgController.setBgToNormal(), e(u.stopStudentCamera());
            }
          })))(l.default);
        },
        4423: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const r = i(8685),
            l = a(i(3277)),
            c = a(i(313)),
            u = s(i(2084));
          t.default = (0, r.connect)(e => ({
            drawingToolSelection: e.contentTool.drawingToolSelection,
            studentDrawingToolType: e.contentTool.studentDrawingToolType
          }), (e, t, i) => Object.assign({}, i, t, e, Object.assign(Object.assign({}, (0, c.default)(e)), {
            setDrawingToolSelection: t => {
              e(u.setDrawingToolSelection(t));
            },
            initDrawingToolSelection: () => {
              e(u.initDrawingToolSelection());
            }
          })))(l.default);
        },
        4089: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const r = i(8685),
            l = a(i(6012)),
            c = a(i(313)),
            u = s(i(2084)),
            d = i(1331);
          t.default = (0, r.connect)(e => ({}), (e, t, i) => Object.assign({}, i, t, e, Object.assign(Object.assign({}, (0, c.default)(e)), {
            hidePresenter: () => {
              window.padSideNetwork.viewDiv(d.ViewDivType.EYEON), e(u.setVisibilityStudentPresenter(!1)), e(u.hideContentTool());
            }
          })))(l.default);
        },
        7315: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const r = i(8685),
            l = a(i(6246)),
            c = a(i(313)),
            u = s(i(8091)),
            d = i(1331);
          t.default = (0, r.connect)(e => ({
            stampThumbnail: e.stamp.applyStampThumbnail,
            canShowSelectStamp: e.stamp.canShowSelectStamp,
            mvpStampNameList: e.stamp.mvpStampNameList
          }), (e, t, i) => Object.assign({}, i, t, e, Object.assign(Object.assign({}, (0, c.default)(e)), {
            hideStamp: () => {
              window.padSideNetwork.viewDiv(d.ViewDivType.EYEON), e(u.setVisibilityStampEffect(!1));
            }
          })))(l.default);
        },
        5175: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const r = i(8685),
            l = a(i(1773)),
            c = a(i(313)),
            u = s(i(2084));
          i(1158), t.default = (0, r.connect)(e => ({
            isVisibleStudentDrawingTool: e.contentTool.isVisibleStudentDrawingTool,
            isVisibleStudentCropDrawingTool: e.contentTool.isVisibleStudentCropDrawingTool,
            isVisibleStudentPartLesson: e.contentTool.isVisibleStudentPartLesson,
            isVisibleLock: e.contentTool.isVisibleLock,
            isVisibleStudentGroup: e.contentTool.isVisibleStudentGroup,
            isVisibleStudentPresenter: e.contentTool.isVisibleStudentPresenter,
            isPlayingContent: e.contentTool.isPlayingContent,
            cropDrawingData: e.contentTool.cropDrawingData,
            studentDrawingToolType: e.contentTool.studentDrawingToolType,
            studentDrawingCustomRect: e.contentTool.studentDrawingCustomRect,
            drawingToolSelection: e.contentTool.drawingToolSelection,
            isVisibleStampEffect: e.stamp.isVisibleStampEffect
          }), (e, t, i) => Object.assign({}, i, t, e, Object.assign(Object.assign({}, (0, c.default)(e)), {
            saveStudentDrawingData: e => {},
            uploadStudentCropResult: t => {
              e(u.requestUploadCropResult(t));
            },
            closeStudentCropDrawingTool: () => {
              e(u.setVisibilityCropDrawingTool(!1));
            },
            closeStudentDrawingTool: () => {},
            setDrawingToolSelection: t => {
              e(u.setDrawingToolSelection(t));
            },
            initDrawingToolSelection: () => {
              e(u.initDrawingToolSelection());
            }
          })))(l.default);
        },
        1773: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const r = a(i(1251)),
            l = i(8028),
            c = s(i(7363)),
            u = a(i(5797)),
            d = a(i(71)),
            _ = a(i(5646)),
            T = a(i(4089)),
            S = a(i(7315));
          class p extends c.Component {
            constructor(e) {
              super(e), this.componentDidUpdate = (e, t) => {
                if (e.isVisibleStudentDrawingTool !== this.props.isVisibleStudentDrawingTool) {
                  const e = {
                    type: "internalMsg",
                    from: "content",
                    srcFrame: "teaching",
                    msg: {
                      to: "book",
                      info: {
                        type: "notifyPenToolState",
                        data: {
                          isVisible: this.props.isVisibleStudentDrawingTool,
                          height: 82
                        }
                      }
                    }
                  };
                  window.launcher_teaching.sendMessage(e, "*");
                  const t = {
                    type: "internalMsg",
                    from: "content",
                    srcFrame: "teaching",
                    msg: {
                      to: "menu",
                      info: {
                        type: "notifyPenToolState",
                        data: {
                          isVisible: this.props.isVisibleStudentDrawingTool,
                          height: 82
                        }
                      }
                    }
                  };
                  window.launcher_teaching.sendMessage(t, "*");
                }
              };
            }
            render() {
              const {
                  isVisibleStudentDrawingTool: e,
                  isVisibleStudentCropDrawingTool: t,
                  isVisibleStudentPartLesson: i,
                  isVisibleLock: n,
                  isVisibleStudentGroup: o,
                  isVisibleStudentPresenter: s,
                  isPlayingContent: a,
                  isVisibleStampEffect: p,
                  cropDrawingData: E,
                  saveStudentDrawingData: h,
                  uploadStudentCropResult: m,
                  closeStudentDrawingTool: C,
                  closeStudentCropDrawingTool: I,
                  drawingToolSelection: O,
                  initDrawingToolSelection: A,
                  setDrawingToolSelection: f,
                  studentDrawingCustomRect: g,
                  studentDrawingToolType: N
                } = this.props,
                y = a ? "" : "contentToolContainer",
                D = a ? "commonwrap" : "";
              return c.createElement("div", {
                id: D,
                className: y,
                style: {
                  pointerEvents: "none"
                }
              }, c.createElement("div", {
                style: {
                  zIndex: l.Z_INDEX_TEACHING_TOOL_MENU_ITEM,
                  pointerEvents: "auto"
                }
              }, t && E && O && A && f && c.createElement(u.default, {
                bgImgData: E,
                canResetOnLoad: !0,
                drawingToolSelection: O,
                setDrawingToolSelection: f,
                initDrawingToolSelection: A,
                drawingToolType: N,
                doSave: m,
                doExit: I
              }), i && c.createElement(d.default, null), e && O && A && f && c.createElement(u.default, {
                drawingToolSelection: O,
                canResetOnLoad: !0,
                studentDrawingCustomRect: g,
                setDrawingToolSelection: f,
                initDrawingToolSelection: A,
                drawingToolType: N,
                doSave: h,
                doExit: C
              }), n && c.createElement(r.default, null), o && c.createElement(_.default, null), s && c.createElement(T.default, null), p && c.createElement(S.default, null)));
            }
          }
          t.default = p;
        },
        1251: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const a = i(8028),
            r = s(i(7363));
          i(2507);
          class l extends r.Component {
            render() {
              return r.createElement("div", {
                id: "contentToolContainer"
              }, r.createElement("div", {
                id: "pageMask",
                style: {
                  zIndex: a.Z_INDEX_TEACHING_TOOL_MENU_ITEM
                }
              }, r.createElement("div", {
                className: "student_screen lock"
              }, r.createElement("strong", null))));
            }
          }
          t.default = l;
        },
        4737: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const a = s(i(7363)),
            r = i(4934),
            l = i(8028),
            c = i(3256);
          class u extends a.Component {
            constructor(e) {
              super(e), this.captureCallBack = e => {
                e && window.curBridge.uploadFileToServer(e, e => {
                  const t = e.url,
                    {
                      submit: i
                    } = this.props;
                  i && i("", t);
                });
              }, this.onClickInputArea = () => {
                this.state.isSubmitted || this.setState({
                  isTextInputMode: !0
                }, () => {
                  this.msgElem.focus();
                });
              }, this.onClickKeyboard = () => {
                new Date().getTime() - this.dateBlur.getTime() < 100 ? this.msgElem.blur() : this.onClickInputArea();
              }, this.state = {
                isVisibleSubmitBtn: !1,
                isTextInputMode: !1,
                isSubmitted: !1,
                isMindmapInputMode: !1,
                focusedNodeName: "",
                onOff_n1_1: !1,
                onOff_n1_2: !1,
                onOff_n1_3: !1,
                onOff_n1_1_1: !1,
                onOff_n1_1_2: !1,
                onOff_n1_2_1: !1,
                onOff_n1_2_2: !1,
                onOff_n1_3_1: !1,
                onOff_n1_3_2: !1
              }, this.dateBlur = new Date(), this.submitMindmap = this.submitMindmap.bind(this), this.onClickSubmitMindmap = this.onClickSubmitMindmap.bind(this), this.checkVisibleSubmitBtn = this.checkVisibleSubmitBtn.bind(this), this.onClickScaleUp_n1_1 = this.onClickScaleUp_n1_1.bind(this), this.onClickScaleUp_n1_2 = this.onClickScaleUp_n1_2.bind(this), this.onClickScaleUp_n1_3 = this.onClickScaleUp_n1_3.bind(this), this.onClickScaleDown_n1_1 = this.onClickScaleDown_n1_1.bind(this), this.onClickScaleDown_n1_2 = this.onClickScaleDown_n1_2.bind(this), this.onClickScaleDown_n1_3 = this.onClickScaleDown_n1_3.bind(this), this.onClickScaleUp_n1_1_1 = this.onClickScaleUp_n1_1_1.bind(this), this.onClickScaleUp_n1_1_2 = this.onClickScaleUp_n1_1_2.bind(this), this.onClickScaleUp_n1_2_1 = this.onClickScaleUp_n1_2_1.bind(this), this.onClickScaleUp_n1_2_2 = this.onClickScaleUp_n1_2_2.bind(this), this.onClickScaleUp_n1_3_1 = this.onClickScaleUp_n1_3_1.bind(this), this.onClickScaleUp_n1_3_2 = this.onClickScaleUp_n1_3_2.bind(this), this.onClickScaleDown_n1_1_1 = this.onClickScaleDown_n1_1_1.bind(this), this.onClickScaleDown_n1_1_2 = this.onClickScaleDown_n1_1_2.bind(this), this.onClickScaleDown_n1_2_1 = this.onClickScaleDown_n1_2_1.bind(this), this.onClickScaleDown_n1_2_2 = this.onClickScaleDown_n1_2_2.bind(this), this.onClickScaleDown_n1_3_1 = this.onClickScaleDown_n1_3_1.bind(this), this.onClickScaleDown_n1_3_2 = this.onClickScaleDown_n1_3_2.bind(this), this.onClickMindmapNode = this.onClickMindmapNode.bind(this), this.onBlurMindmapInput = this.onBlurMindmapInput.bind(this), this.onKeyDownMindmapInput = this.onKeyDownMindmapInput.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.onKeyboardDetect = this.onKeyboardDetect.bind(this);
            }
            componentDidMount() {
              window.addEventListener("resize", this.onKeyboardDetect);
            }
            componentWillReceiveProps(e) {
              this.props.studentPartLessonSrc && e.studentPartLessonSrc && this.props.studentPartLessonSrc.no !== e.studentPartLessonSrc.no && (this.msgElem.textContent = "", this.setState({
                isVisibleSubmitBtn: !1,
                isSubmitted: !1
              }));
            }
            onClickSubmit() {
              const {
                  submit: e
                } = this.props,
                t = this.msgElem.innerText.trim();
              0 !== t.length && (e && e(t, ""), this.setState({
                isSubmitted: !0,
                isVisibleSubmitBtn: !1
              }));
            }
            onClickSubmitMindmap() {
              this.setState({
                isVisibleSubmitBtn: !1,
                isSubmitted: !0
              }, () => {
                this.submitMindmap();
              });
            }
            submitMindmap() {
              window.curBridge.captureFullScreen(this.captureCallBack);
            }
            getCoverImageUri(e) {}
            onInput() {
              this.msgElem.innerText.trim().length > 0 && this.setState({
                isVisibleSubmitBtn: !0
              }), this.msgElem.innerText.length > 50 && (this.msgElem.innerText = this.msgElem.innerText.slice(0, 50));
            }
            onKeyDown(e) {
              e.charCode === r.KeyboardKeyCode.ENTER && e.preventDefault(), this.msgElem.innerText.length > 50 && e.preventDefault(), this.msgElem.innerText.length > 50 && (this.msgElem.innerText = this.msgElem.innerText.slice(0, 50));
            }
            onTextAreaBlur() {
              this.setState({
                isTextInputMode: !1
              }), this.dateBlur = new Date();
            }
            onKeyboardDetect() {
              this.msgElem && (800 === innerHeight ? (this.msgElem.blur(), this.setState({
                isTextInputMode: !1
              })) : this.setState({
                isTextInputMode: !0
              }));
            }
            onClickMindmapNode(e) {
              const t = document.getElementById(e);
              t && (this.inputElem.value = t.innerText), this.setState({
                focusedNodeName: e,
                isMindmapInputMode: !0,
                isVisibleSubmitBtn: !1
              }, () => {
                this.inputElem.focus();
              });
            }
            onBlurMindmapInput() {
              const e = document.getElementById(this.state.focusedNodeName);
              e && (e.innerText = this.inputElem.value, e.innerText && (e.style.backgroundImage = "none")), this.setState({
                isMindmapInputMode: !1
              }), this.dateBlur = new Date(), this.checkVisibleSubmitBtn();
            }
            onKeyDownMindmapInput(e) {
              e.charCode === r.KeyboardKeyCode.ENTER && this.onBlurMindmapInput, this.inputElem.value.length >= 20 && e.charCode !== r.KeyboardKeyCode.BACK_SPACE && (e.preventDefault(), this.inputElem.value = this.inputElem.value.slice(0, 20));
            }
            checkVisibleSubmitBtn() {
              let e,
                t = "";
              (e = document.getElementById("n1_1")) && (t += e.innerText), (e = document.getElementById("n1_2")) && (t += e.innerText), (e = document.getElementById("n1_3")) && (t += e.innerText), (e = document.getElementById("n1_1_1")) && (t += e.innerText), (e = document.getElementById("n1_1_2")) && (t += e.innerText), (e = document.getElementById("n1_2_1")) && (t += e.innerText), (e = document.getElementById("n1_2_2")) && (t += e.innerText), (e = document.getElementById("n1_3_1")) && (t += e.innerText), (e = document.getElementById("n1_3_2")) && (t += e.innerText), t ? this.setState({
                isVisibleSubmitBtn: !0
              }) : this.setState({
                isVisibleSubmitBtn: !1
              });
            }
            onClickScaleUp_n1_1() {
              this.setState({
                onOff_n1_1: !0
              });
            }
            onClickScaleUp_n1_2() {
              this.setState({
                onOff_n1_2: !0
              });
            }
            onClickScaleUp_n1_3() {
              this.setState({
                onOff_n1_3: !0
              });
            }
            onClickScaleDown_n1_1() {
              let e;
              this.setState({
                onOff_n1_1: !1
              }), (e = document.getElementById("n1_1")) && (e.innerText = ""), (e = document.getElementById("n1_1_1")) && (e.innerText = ""), (e = document.getElementById("n1_1_2")) && (e.innerText = ""), this.checkVisibleSubmitBtn();
            }
            onClickScaleDown_n1_2() {
              let e;
              this.setState({
                onOff_n1_2: !1
              }), (e = document.getElementById("n1_2")) && (e.innerText = ""), (e = document.getElementById("n1_2_1")) && (e.innerText = ""), (e = document.getElementById("n1_2_2")) && (e.innerText = ""), this.checkVisibleSubmitBtn();
            }
            onClickScaleDown_n1_3() {
              let e;
              this.setState({
                onOff_n1_3: !1
              }), (e = document.getElementById("n1_3")) && (e.innerText = ""), (e = document.getElementById("n1_3_1")) && (e.innerText = ""), (e = document.getElementById("n1_3_2")) && (e.innerText = ""), this.checkVisibleSubmitBtn();
            }
            onClickScaleUp_n1_1_1() {
              this.setState({
                onOff_n1_1_1: !0
              });
            }
            onClickScaleUp_n1_1_2() {
              this.setState({
                onOff_n1_1_2: !0
              });
            }
            onClickScaleUp_n1_2_1() {
              this.setState({
                onOff_n1_2_1: !0
              });
            }
            onClickScaleUp_n1_2_2() {
              this.setState({
                onOff_n1_2_2: !0
              });
            }
            onClickScaleUp_n1_3_1() {
              this.setState({
                onOff_n1_3_1: !0
              });
            }
            onClickScaleUp_n1_3_2() {
              this.setState({
                onOff_n1_3_2: !0
              });
            }
            onClickScaleDown_n1_1_1() {
              let e;
              this.setState({
                onOff_n1_1_1: !1
              }), (e = document.getElementById("n1_1_1")) && (e.innerText = ""), this.checkVisibleSubmitBtn();
            }
            onClickScaleDown_n1_1_2() {
              let e;
              this.setState({
                onOff_n1_1_2: !1
              }), (e = document.getElementById("n1_1_2")) && (e.innerText = ""), this.checkVisibleSubmitBtn();
            }
            onClickScaleDown_n1_2_1() {
              let e;
              this.setState({
                onOff_n1_2_1: !1
              }), (e = document.getElementById("n1_2_1")) && (e.innerText = ""), this.checkVisibleSubmitBtn();
            }
            onClickScaleDown_n1_2_2() {
              let e;
              this.setState({
                onOff_n1_2_2: !1
              }), (e = document.getElementById("n1_2_2")) && (e.innerText = ""), this.checkVisibleSubmitBtn();
            }
            onClickScaleDown_n1_3_1() {
              let e;
              this.setState({
                onOff_n1_3_1: !1
              }), (e = document.getElementById("n1_3_1")) && (e.innerText = ""), this.checkVisibleSubmitBtn();
            }
            onClickScaleDown_n1_3_2() {
              let e;
              this.setState({
                onOff_n1_3_2: !1
              }), (e = document.getElementById("n1_3_2")) && (e.innerText = ""), this.checkVisibleSubmitBtn();
            }
            render() {
              const {
                  studentPartLessonSrc: e
                } = this.props,
                {
                  isVisibleSubmitBtn: t,
                  isTextInputMode: i,
                  isMindmapInputMode: n,
                  isSubmitted: o,
                  onOff_n1_1: s,
                  onOff_n1_2: u,
                  onOff_n1_3: d,
                  onOff_n1_1_1: _,
                  onOff_n1_1_2: T,
                  onOff_n1_2_1: S,
                  onOff_n1_2_2: p,
                  onOff_n1_3_1: E,
                  onOff_n1_3_2: h
                } = this.state,
                m = e ? e.topic : "TEST TOPIC",
                C = e ? e.brainstormingType : 0,
                I = i ? "focus" : t || o ? "finish" : "";
              return a.createElement("div", {
                id: "contentToolContainer"
              }, a.createElement("div", {
                id: "pageMask",
                style: {
                  zIndex: l.Z_INDEX_TEACHING_TOOL_MENU_ITEM
                }
              }, a.createElement("div", {
                className: C === r.BrainstormingType.TYPE_INDIVIDUAL ? "wrapcont_white_bg" : "wrapcont parti_student"
              }, a.createElement("div", {
                className: "debate_student brainstorming_student " + (r.BrainstormingType.TYPE_GROUP, "")
              }, C === r.BrainstormingType.TYPE_INDIVIDUAL && a.createElement("div", {
                className: "brainstormin_stu_wrap_individual"
              }, s && a.createElement("div", {
                className: "mindmap_horizontal_line n1_1"
              }), s && _ && a.createElement("div", {
                className: "mindmap_vertical_line n1_1_1"
              }), s && T && a.createElement("div", {
                className: "mindmap_vertical_line n1_1_2"
              }), u && a.createElement("div", {
                className: "mindmap_horizontal_line n1_2"
              }), u && S && a.createElement("div", {
                className: "mindmap_vertical_line n1_2_1"
              }), u && p && a.createElement("div", {
                className: "mindmap_vertical_line n1_2_2"
              }), d && a.createElement("div", {
                className: "mindmap_vertical_line n1_3"
              }), d && E && a.createElement("div", {
                className: "mindmap_horizontal_line n1_3_1"
              }), d && h && a.createElement("div", {
                className: "mindmap_horizontal_line n1_3_2"
              }), a.createElement("div", {
                className: "mindmap_root " + (o ? "isSubmittedLock" : "")
              }, a.createElement("p", {
                className: "mindmap_topic"
              }, m), !o && a.createElement("p", {
                className: "mindmap_scaleUp_btn n1_1",
                onClick: this.onClickScaleUp_n1_1
              }, "+"), !o && a.createElement("p", {
                className: "mindmap_scaleUp_btn n1_2",
                onClick: this.onClickScaleUp_n1_2
              }, "+"), !o && a.createElement("p", {
                className: "mindmap_scaleUp_btn n1_3",
                onClick: this.onClickScaleUp_n1_3
              }, "+"), a.createElement("div", {
                className: "mindmap_child n1_1 " + (s ? "" : "visihidden")
              }, a.createElement("p", {
                id: "n1_1",
                onClick: () => this.onClickMindmapNode("n1_1")
              }), !o && a.createElement("p", {
                className: "mindmap_scaleDown_btn n1_1",
                onClick: this.onClickScaleDown_n1_1
              }, "×"), !o && a.createElement("p", {
                className: "mindmap_scaleUp_btn n1_1_1",
                onClick: this.onClickScaleUp_n1_1_1
              }, "+"), !o && a.createElement("p", {
                className: "mindmap_scaleUp_btn n1_1_2",
                onClick: this.onClickScaleUp_n1_1_2
              }, "+"), a.createElement("div", {
                className: "mindmap_grandchild n1_1_1 " + (_ ? "" : "visihidden")
              }, a.createElement("p", {
                id: "n1_1_1",
                onClick: () => this.onClickMindmapNode("n1_1_1")
              }), !o && a.createElement("p", {
                className: "mindmap_scaleDown_btn n1_1_1",
                onClick: this.onClickScaleDown_n1_1_1
              }, "×")), a.createElement("div", {
                className: "mindmap_grandchild n1_1_2 " + (T ? "" : "visihidden")
              }, a.createElement("p", {
                id: "n1_1_2",
                onClick: () => this.onClickMindmapNode("n1_1_2")
              }), !o && a.createElement("p", {
                className: "mindmap_scaleDown_btn n1_1_2",
                onClick: this.onClickScaleDown_n1_1_2
              }, "×"))), a.createElement("div", {
                className: "mindmap_child n1_2 " + (u ? "" : "visihidden")
              }, a.createElement("p", {
                id: "n1_2",
                onClick: () => this.onClickMindmapNode("n1_2")
              }), !o && a.createElement("p", {
                className: "mindmap_scaleDown_btn n1_2",
                onClick: this.onClickScaleDown_n1_2
              }, "×"), !o && a.createElement("p", {
                className: "mindmap_scaleUp_btn n1_2_1",
                onClick: this.onClickScaleUp_n1_2_1
              }, "+"), !o && a.createElement("p", {
                className: "mindmap_scaleUp_btn n1_2_2",
                onClick: this.onClickScaleUp_n1_2_2
              }, "+"), a.createElement("div", {
                className: "mindmap_grandchild n1_2_1 " + (S ? "" : "visihidden")
              }, a.createElement("p", {
                id: "n1_2_1",
                onClick: () => this.onClickMindmapNode("n1_2_1")
              }), !o && a.createElement("p", {
                className: "mindmap_scaleDown_btn n1_2_1",
                onClick: this.onClickScaleDown_n1_2_1
              }, "×")), a.createElement("div", {
                className: "mindmap_grandchild n1_2_2 " + (p ? "" : "visihidden")
              }, a.createElement("p", {
                id: "n1_2_2",
                onClick: () => this.onClickMindmapNode("n1_2_2")
              }), !o && a.createElement("p", {
                className: "mindmap_scaleDown_btn n1_2_2",
                onClick: this.onClickScaleDown_n1_2_2
              }, "×"))), a.createElement("div", {
                className: "mindmap_child n1_3 " + (d ? "" : "visihidden")
              }, a.createElement("p", {
                id: "n1_3",
                onClick: () => this.onClickMindmapNode("n1_3")
              }), !o && a.createElement("p", {
                className: "mindmap_scaleDown_btn n1_3",
                onClick: this.onClickScaleDown_n1_3
              }, "×"), !o && a.createElement("p", {
                className: "mindmap_scaleUp_btn n1_3_1",
                onClick: this.onClickScaleUp_n1_3_1
              }, "+"), !o && a.createElement("p", {
                className: "mindmap_scaleUp_btn n1_3_2",
                onClick: this.onClickScaleUp_n1_3_2
              }, "+"), a.createElement("div", {
                className: "mindmap_grandchild n1_3_1 " + (E ? "" : "visihidden")
              }, a.createElement("p", {
                id: "n1_3_1",
                onClick: () => this.onClickMindmapNode("n1_3_1")
              }), !o && a.createElement("p", {
                className: "mindmap_scaleDown_btn n1_3_1",
                onClick: this.onClickScaleDown_n1_3_1
              }, "×")), a.createElement("div", {
                className: "mindmap_grandchild n1_3_2 " + (h ? "" : "visihidden")
              }, a.createElement("p", {
                id: "n1_3_2",
                onClick: () => this.onClickMindmapNode("n1_3_2")
              }), !o && a.createElement("p", {
                className: "mindmap_scaleDown_btn n1_3_2",
                onClick: this.onClickScaleDown_n1_3_2
              }, "×"))))), C === r.BrainstormingType.TYPE_INDIVIDUAL && a.createElement("div", {
                className: "mindmap_input_panel " + (n ? "" : "dpnone")
              }, a.createElement("p", {
                className: "mindmap_topic"
              }, m), a.createElement("input", {
                maxLength: 20,
                placeholder: c.CAPTION.PLEASE_IDEA,
                ref: e => {
                  e && (this.inputElem = e);
                },
                onBlur: () => this.onBlurMindmapInput(),
                onKeyDown: e => this.onKeyDownMindmapInput(e)
              }), a.createElement("div", {
                className: "mindmap_input_confirm_btn"
              }, a.createElement("button", {
                className: "cbtn",
                onClick: this.onBlurMindmapInput
              }, a.createElement("span", null, c.CAPTION.OK)))), C === r.BrainstormingType.TYPE_GROUP && a.createElement("div", {
                className: "brainstormin_stu_wrap"
              }, a.createElement("div", {
                className: "title"
              }, a.createElement("em", null, c.CAPTION.TOPIC), m), a.createElement("div", {
                className: "brainstormin_stu"
              }, a.createElement("div", {
                className: `intext ${I}`,
                onClick: this.onClickInputArea
              }, a.createElement("div", {
                className: "textarea",
                tabIndex: 0,
                contentEditable: !o,
                suppressContentEditableWarning: !0,
                ref: e => {
                  e && (this.msgElem = e);
                },
                onInput: () => this.onInput(),
                onKeyDown: e => this.onKeyDown(e),
                onBlur: () => this.onTextAreaBlur()
              }))), a.createElement("div", {
                className: "focus_key " + (o ? "dpnone" : ""),
                onClick: this.onClickKeyboard
              }))), t && C === r.BrainstormingType.TYPE_INDIVIDUAL && a.createElement("div", {
                className: "fallup",
                onClick: () => this.onClickSubmitMindmap()
              }), t && C === r.BrainstormingType.TYPE_GROUP && a.createElement("div", {
                className: "fallup",
                onClick: () => this.onClickSubmit()
              }))));
            }
          }
          t.default = u;
        },
        8408: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const a = s(i(7363)),
            r = i(8028),
            l = i(3256);
          class c extends a.Component {
            constructor(e) {
              super(e), this.onClickSubmit = () => {
                const {
                  submitChatting: e
                } = this.props;
                0 !== this.textarea.value.trim().length && (e && e(this.textarea.value), this.textarea.value = "", this.setState({
                  isVisibleSubmitBtn: !1
                }));
              }, this.handleChange = () => {
                this.textarea.value.trim().length > 0 ? this.setState({
                  isVisibleSubmitBtn: !0
                }) : this.setState({
                  isVisibleSubmitBtn: !1
                });
              }, this.onClickInputArea = () => {
                this.textarea.focus();
              }, this.onClickKeyboard = () => {
                new Date().getTime() - this.dateBlur.getTime() < 100 ? this.textarea.blur() : this.onClickInputArea();
              }, this.onKeyboardDetect = this.onKeyboardDetect.bind(this), this.state = {
                isVisibleSubmitBtn: !1,
                isTextInputMode: !1
              }, this.dateBlur = new Date();
            }
            componentDidMount() {
              window.addEventListener("resize", this.onKeyboardDetect);
            }
            componentWillReceiveProps(e) {
              this.props.studentPartLessonSrc && e.studentPartLessonSrc && this.props.studentPartLessonSrc.no !== e.studentPartLessonSrc.no && (this.textarea.value = "", this.setState({
                isVisibleSubmitBtn: !1
              }));
            }
            onTextAreaBlur() {
              this.dateBlur = new Date();
            }
            onKeyboardDetect() {
              800 === innerHeight ? (this.textarea.blur(), this.setState({
                isTextInputMode: !1
              })) : this.setState({
                isTextInputMode: !0
              });
            }
            render() {
              const {
                  studentPartLessonSrc: e
                } = this.props,
                {
                  isVisibleSubmitBtn: t,
                  isTextInputMode: i
                } = this.state,
                n = e ? e.topic : "TEST TOPIC",
                o = i ? "focus" : "";
              return a.createElement("div", {
                id: "contentToolContainer"
              }, a.createElement("div", {
                id: "pageMask",
                style: {
                  zIndex: r.Z_INDEX_TEACHING_TOOL_MENU_ITEM
                }
              }, a.createElement("div", {
                className: "wrapcont parti_student"
              }, a.createElement("div", {
                className: "chatting_student " + (i ? "text_input_mode" : "")
              }, a.createElement("div", {
                className: "chat_stu_wrap"
              }, a.createElement("div", {
                className: "title"
              }, a.createElement("em", null, "Topic"), n), a.createElement("div", {
                className: "student_input"
              }, a.createElement("div", {
                className: `out ${o}`,
                onClick: this.onClickInputArea
              }, a.createElement("textarea", {
                onChange: () => this.handleChange(),
                ref: e => {
                  e && (this.textarea = e);
                },
                onBlur: () => this.onTextAreaBlur(),
                placeholder: l.CAPTION.PLEASE_IDEA
              }))), a.createElement("div", {
                className: "focus_key",
                onClick: this.onClickKeyboard
              }))), t && a.createElement("div", {
                className: "fallup",
                onClick: this.onClickSubmit
              }))));
            }
          }
          t.default = c;
        },
        2152: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const a = s(i(7363)),
            r = i(4934),
            l = i(8028),
            c = i(3256);
          class u extends a.Component {
            constructor(e) {
              super(e), this.onClickSubmit = () => {
                const {
                  submitDebate: e
                } = this.props;
                if (0 !== this.textarea.value.trim().length) {
                  const {
                    opinionType: t
                  } = this.state;
                  e && e(t, this.textarea.value), this.setState({
                    isSubmitted: !0,
                    isVisibleSubmitBtn: !1
                  });
                }
              }, this.handleChange = () => {
                this.textarea.value.trim().length > 0 ? this.setState({
                  isVisibleSubmitBtn: !0
                }) : this.setState({
                  isVisibleSubmitBtn: !1
                });
              }, this.onClickKeyboard = () => {
                new Date().getTime() - this.dateBlur.getTime() < 100 ? this.textarea.blur() : this.textarea.focus();
              }, this.onClickOpinionToggleBtn = this.onClickOpinionToggleBtn.bind(this), this.onKeyboardDetect = this.onKeyboardDetect.bind(this), this.state = {
                isVisibleSubmitBtn: !1,
                isSubmitted: !1,
                opinionType: r.DebateOpinionType.INVALID,
                isTextInputMode: !1
              }, this.dateBlur = new Date();
            }
            componentDidMount() {
              window.addEventListener("resize", this.onKeyboardDetect);
            }
            componentWillReceiveProps(e) {
              this.props.studentPartLessonSrc && e.studentPartLessonSrc && this.props.studentPartLessonSrc.no !== e.studentPartLessonSrc.no && this.setState({
                isVisibleSubmitBtn: !1,
                isSubmitted: !1
              });
            }
            onClickOpinion(e) {
              const {
                isSubmitted: t
              } = this.state;
              t || this.setState({
                opinionType: e
              }, () => {
                this.textarea.focus();
              });
            }
            onClickOpinionToggleBtn() {
              if (this.state.isSubmitted) return;
              const {
                opinionType: e
              } = this.state;
              e === r.DebateOpinionType.AGREE ? this.setState({
                opinionType: r.DebateOpinionType.DISAGREE
              }) : this.setState({
                opinionType: r.DebateOpinionType.AGREE
              });
            }
            onTextAreaBlur() {
              this.dateBlur = new Date();
            }
            onTextAreaFocus() {
              this.state.isSubmitted;
            }
            onKeyboardDetect() {
              800 === innerHeight ? (this.textarea.blur(), this.setState({
                isTextInputMode: !1
              })) : this.setState({
                isTextInputMode: !0
              });
            }
            render() {
              const {
                  studentPartLessonSrc: e
                } = this.props,
                {
                  isVisibleSubmitBtn: t,
                  isSubmitted: i,
                  opinionType: n,
                  isTextInputMode: o
                } = this.state,
                s = e ? e.topic : "TEST TOPIC",
                u = n === r.DebateOpinionType.AGREE ? "select" : "",
                d = n === r.DebateOpinionType.DISAGREE ? "select" : "",
                _ = n === r.DebateOpinionType.AGREE ? "agree" : "disagree",
                T = n === r.DebateOpinionType.INVALID ? "" : "focus",
                S = i ? "" : "on";
              return a.createElement("div", {
                id: "contentToolContainer"
              }, a.createElement("div", {
                id: "pageMask",
                style: {
                  zIndex: l.Z_INDEX_TEACHING_TOOL_MENU_ITEM
                }
              }, a.createElement("div", {
                className: "wrapcont parti_student"
              }, a.createElement("div", {
                className: "debate_student " + (o ? "text_input_mode" : "")
              }, a.createElement("div", {
                className: "debate_stu_wrap"
              }, a.createElement("div", {
                className: "title"
              }, a.createElement("em", null, c.CAPTION.TOPIC), s), a.createElement("div", {
                className: "student_input " + (n === r.DebateOpinionType.INVALID ? "type_select" : "")
              }, a.createElement("div", {
                className: "debate_flag " + (n === r.DebateOpinionType.INVALID ? "" : "dpnone")
              }, a.createElement("strong", {
                className: `agree_custom ${S} ${u}`,
                onClick: () => this.onClickOpinion(r.DebateOpinionType.AGREE)
              }, a.createElement("span", null, c.CAPTION.AGREE)), a.createElement("strong", {
                className: `disagree_custom ${S} ${d}`,
                onClick: () => this.onClickOpinion(r.DebateOpinionType.DISAGREE)
              }, a.createElement("span", null, c.CAPTION.DISAGREE))), a.createElement("div", {
                className: `out ${T} ${_}`
              }, a.createElement("div", {
                className: "opinionToggleBtn",
                onClick: this.onClickOpinionToggleBtn
              }, n === r.DebateOpinionType.INVALID ? "" : n === r.DebateOpinionType.AGREE ? c.CAPTION.AGREE : c.CAPTION.DISAGREE), a.createElement("textarea", {
                readOnly: i,
                onChange: () => this.handleChange(),
                ref: e => {
                  e && (this.textarea = e);
                },
                onBlur: () => this.onTextAreaBlur(),
                onFocus: () => this.onTextAreaFocus(),
                placeholder: c.CAPTION.PLEASE_IDEA
              }))), a.createElement("div", {
                className: "focus_key " + (i ? "dpnone" : ""),
                onClick: this.onClickKeyboard
              }))), t && a.createElement("div", {
                className: "fallup",
                onClick: this.onClickSubmit
              }))));
            }
          }
          t.default = u;
        },
        2136: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const a = s(i(7363)),
            r = i(8028),
            l = i(3256);
          class c extends a.Component {
            constructor(e) {
              super(e), this.onClickSubmit = () => {
                const {
                  submitDiscussion: e
                } = this.props;
                0 !== this.textarea.value.trim().length && (e && e(this.textarea.value), this.setState({
                  isSubmitted: !0,
                  isVisibleSubmitBtn: !1
                }));
              }, this.handleChange = () => {
                this.textarea.value.trim().length > 0 ? this.setState({
                  isVisibleSubmitBtn: !0
                }) : this.setState({
                  isVisibleSubmitBtn: !1
                });
              }, this.onClickInputArea = () => {
                this.state.isSubmitted || this.textarea.focus();
              }, this.onClickKeyboard = () => {
                new Date().getTime() - this.dateBlur.getTime() < 100 ? this.textarea.blur() : this.onClickInputArea();
              }, this.onKeyboardDetect = this.onKeyboardDetect.bind(this), this.state = {
                isVisibleSubmitBtn: !1,
                isTextInputMode: !1,
                isSubmitted: !1
              }, this.dateBlur = new Date();
            }
            componentDidMount() {
              window.addEventListener("resize", this.onKeyboardDetect);
            }
            componentWillReceiveProps(e) {
              this.props.studentPartLessonSrc && e.studentPartLessonSrc && this.props.studentPartLessonSrc.no !== e.studentPartLessonSrc.no && this.setState({
                isVisibleSubmitBtn: !1,
                isSubmitted: !1
              });
            }
            onTextAreaBlur() {
              this.dateBlur = new Date();
            }
            onKeyboardDetect() {
              800 === innerHeight ? (this.textarea.blur(), this.setState({
                isTextInputMode: !1
              })) : this.setState({
                isTextInputMode: !0
              });
            }
            render() {
              const {
                  studentPartLessonSrc: e
                } = this.props,
                {
                  isVisibleSubmitBtn: t,
                  isTextInputMode: i,
                  isSubmitted: n
                } = this.state,
                o = e ? e.topic : "TEST TOPIC",
                s = i ? "focus" : "";
              return a.createElement("div", {
                id: "contentToolContainer"
              }, a.createElement("div", {
                id: "pageMask",
                style: {
                  zIndex: r.Z_INDEX_TEACHING_TOOL_MENU_ITEM
                }
              }, a.createElement("div", {
                className: "wrapcont parti_student"
              }, a.createElement("div", {
                className: "chatting_student " + (i ? "text_input_mode" : "")
              }, a.createElement("div", {
                className: "discuss_stu_wrap"
              }, a.createElement("div", {
                className: "title"
              }, a.createElement("em", null, "Topic"), o), a.createElement("div", {
                className: "student_input"
              }, a.createElement("div", {
                className: `out ${s}`,
                onClick: this.onClickInputArea
              }, a.createElement("textarea", {
                readOnly: n,
                onChange: () => this.handleChange(),
                ref: e => {
                  e && (this.textarea = e);
                },
                onBlur: () => this.onTextAreaBlur(),
                placeholder: l.CAPTION.PLEASE_IDEA
              }))), a.createElement("div", {
                className: "focus_key " + (n ? "dpnone" : ""),
                onClick: this.onClickKeyboard
              }))), t && a.createElement("div", {
                className: "fallup",
                onClick: this.onClickSubmit
              }))));
            }
          }
          t.default = c;
        },
        6785: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const r = s(i(7363)),
            l = i(4934),
            c = a(i(2136)),
            u = a(i(2152)),
            d = a(i(8408)),
            _ = a(i(3538)),
            T = a(i(805)),
            S = s(i(5638)),
            p = a(i(4737)),
            E = a(i(3642));
          class h extends r.Component {
            constructor() {
              super(...arguments), this.submitDiscussion = e => {
                this.playSound(), window.curBridge.sendMsgToTeacher({
                  to: l.UserMessage.Target.LAUNCHER,
                  type: l.UserMessage.Type.SUBMIT_PART_LESSON,
                  data: {
                    type: l.PartLessonType.DISCUSSION,
                    data: {
                      studentId: T.default.myAccount.id,
                      msg: e
                    }
                  }
                });
              }, this.submitDebate = (e, t) => {
                this.playSound(), window.curBridge.sendMsgToTeacher({
                  to: l.UserMessage.Target.LAUNCHER,
                  type: l.UserMessage.Type.SUBMIT_PART_LESSON,
                  data: {
                    type: l.PartLessonType.DEBATE,
                    data: {
                      studentId: T.default.myAccount.id,
                      opinionType: e,
                      msg: t
                    }
                  }
                });
              }, this.submitChatting = e => {
                this.playSound(), window.curBridge.sendMsgToTeacher({
                  to: l.UserMessage.Target.LAUNCHER,
                  type: l.UserMessage.Type.SUBMIT_PART_LESSON,
                  data: {
                    type: l.PartLessonType.CHATTING,
                    data: {
                      studentId: T.default.myAccount.id,
                      msg: e
                    }
                  }
                });
              }, this.submitPoll = e => {
                this.playSound(), window.curBridge.sendMsgToTeacher({
                  to: l.UserMessage.Target.LAUNCHER,
                  type: l.UserMessage.Type.SUBMIT_PART_LESSON,
                  data: {
                    type: l.PartLessonType.POLL,
                    data: {
                      studentId: T.default.myAccount.id,
                      selectNo: e
                    }
                  }
                });
              }, this.submitBrainstorming = (e, t) => {
                this.playSound(), window.curBridge.sendMsgToTeacher({
                  to: l.UserMessage.Target.LAUNCHER,
                  type: l.UserMessage.Type.SUBMIT_PART_LESSON,
                  data: {
                    type: l.PartLessonType.BRAINSTORMING,
                    data: {
                      studentId: T.default.myAccount.id,
                      msg: e,
                      studentName: T.default.myAccount.name,
                      fileUri: t
                    }
                  }
                });
              }, this.handleSubmitPortfolio = (e, t) => {
                this.playSound(), t = t.sort((e, t) => e.date - t.date), window.cfg_debug && console.log("sort 결과 확인", t), window.curBridge.sendMsgToTeacher({
                  to: l.UserMessage.Target.LAUNCHER,
                  type: l.UserMessage.Type.SUBMIT_PART_LESSON,
                  data: {
                    type: l.PartLessonType.PORTFOLIO,
                    data: {
                      studentId: T.default.myAccount.id,
                      studentName: T.default.myAccount.name,
                      coverUrl: e,
                      results: t
                    }
                  }
                });
              };
            }
            componentDidMount() {
              window.curBridge.enableSoftwareKeyboard();
            }
            componentWillUnmount() {
              window.curBridge.disableSoftwareKeyboard();
            }
            playSound() {
              S.default.playEffect(S.EffectSoundType.COMMON_ARROW_UP);
            }
            render() {
              const {
                studentPartLessonSrc: e
              } = this.props;
              if (!e) return null;
              const t = e.type;
              return t === l.PartLessonType.DISCUSSION ? r.createElement(c.default, {
                studentPartLessonSrc: e,
                submitDiscussion: this.submitDiscussion
              }) : t === l.PartLessonType.DEBATE ? r.createElement(u.default, {
                studentPartLessonSrc: e,
                submitDebate: this.submitDebate
              }) : t === l.PartLessonType.CHATTING ? r.createElement(d.default, {
                studentPartLessonSrc: e,
                submitChatting: this.submitChatting
              }) : t === l.PartLessonType.POLL ? r.createElement(_.default, {
                studentPartLessonSrc: e,
                submitPoll: this.submitPoll
              }) : t === l.PartLessonType.BRAINSTORMING ? r.createElement(p.default, {
                studentPartLessonSrc: e,
                submit: this.submitBrainstorming
              }) : t === l.PartLessonType.PORTFOLIO ? r.createElement(E.default, {
                studentPartLessonSrc: e,
                onSubmit: this.handleSubmitPortfolio
              }) : null;
            }
          }
          t.default = h;
        },
        3538: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const a = s(i(7363)),
            r = i(4184),
            l = i(4934),
            c = i(8028);
          class u extends a.Component {
            constructor(e) {
              super(e), this.onClickSubmit = () => {
                const {
                    submitPoll: e
                  } = this.props,
                  {
                    selectedNo: t
                  } = this.state;
                t > 0 && (e && e(t), this.setState({
                  isVisibleSubmitBtn: !1,
                  isSubmitted: !0
                }));
              }, this.onSelectPoll = e => {
                const {
                  isSubmitted: t
                } = this.state;
                t || this.setState({
                  selectedNo: e,
                  isVisibleSubmitBtn: !0
                });
              }, this.state = {
                isVisibleSubmitBtn: !1,
                selectedNo: 0,
                isSubmitted: !1
              };
            }
            componentWillReceiveProps(e) {
              this.props.studentPartLessonSrc && e.studentPartLessonSrc && this.props.studentPartLessonSrc.no !== e.studentPartLessonSrc.no && (this.textarea.value = "", this.setState({
                isVisibleSubmitBtn: !1
              }));
            }
            render() {
              const {
                  studentPartLessonSrc: e
                } = this.props,
                {
                  isVisibleSubmitBtn: t,
                  selectedNo: i
                } = this.state,
                n = e ? e.topic : "TEST TOPIC";
              let o = l.PollType.INVALID,
                s = [];
              return e && e.pollType && e.pollSelect && (o = e.pollType, s = e.pollSelect), a.createElement("div", {
                id: "contentToolContainer"
              }, a.createElement("div", {
                id: "pageMask",
                style: {
                  zIndex: c.Z_INDEX_TEACHING_TOOL_MENU_ITEM
                }
              }, a.createElement("div", {
                className: "wrapcont parti_student"
              }, a.createElement("div", {
                className: "debate_student"
              }, a.createElement("div", {
                className: "poll_stu_wrap"
              }, a.createElement("div", {
                className: "title"
              }, a.createElement("em", null, "Topic"), n), a.createElement("div", {
                className: "student_input"
              }, a.createElement("div", {
                className: "stu_poll_type"
              }, a.createElement("div", {
                className: "stu_poll_item finish"
              }, a.createElement("div", {
                className: r({
                  cnt4: s.length >= 4,
                  type_text: o === l.PollType.TYPE_TEXT,
                  type_picture: o === l.PollType.TYPE_PICTURE
                })
              }, s.map(e => {
                const t = i === e.no ? "select" : "";
                return a.createElement("p", {
                  key: e.no,
                  className: t,
                  style: {
                    backgroundImage: o === l.PollType.TYPE_PICTURE ? `url(${e.img_url}` : "inherit",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  },
                  onClick: () => this.onSelectPoll(e.no)
                }, a.createElement("span", null, e.msg));
              }))))))), t && a.createElement("div", {
                className: "fallup",
                onClick: this.onClickSubmit
              }))));
            }
          }
          t.default = u;
        },
        4881: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const a = s(i(7363)),
            r = i(8028),
            l = s(i(5638)),
            c = i(3256),
            u = i(1756);
          class d extends a.Component {
            constructor(e) {
              super(e);
            }
            componentDidMount() {
              this.startGroupVisible();
            }
            componentWillReceiveProps(e) {
              this.props.groupData !== e.groupData && e.groupData && (l.default.stopAllEffect(), this.startGroupVisible());
            }
            componentWillUnmount() {
              const {
                hideGroup: e
              } = this.props;
              e && e(), this.timer && window.clearTimeout(this.timer);
            }
            startGroupVisible() {
              this.timer && window.clearTimeout(this.timer), this.timer = window.setTimeout(() => {
                const {
                  hideGroup: e
                } = this.props;
                e && e(), this.timer = void 0;
              }, 1e4), l.default.playEffect(l.EffectSoundType.GROUP_STUDENT_PICKED);
            }
            render() {
              const {
                groupData: e
              } = this.props;
              let t = "",
                i = "";
              if (void 0 !== e) {
                const n = u.GroupSettings[e.index];
                t = n.korName, i = n.studentClassName;
              }
              return a.createElement("div", {
                id: "contentToolContainer"
              }, a.createElement("div", {
                id: "pageMask_group_student",
                style: {
                  zIndex: r.Z_INDEX_TEACHING_TOOL_MENU_ITEM
                }
              }, a.createElement("div", {
                className: "group_student"
              }, a.createElement("p", {
                className: "youreChosenAndyoureGroup"
              }, c.CAPTION.GROUPS), a.createElement("div", {
                className: "group"
              }, a.createElement("div", {
                className: "groupcode"
              }, a.createElement("em", null), a.createElement("b", {
                className: i
              }, t))))));
            }
          }
          t.default = d;
        },
        6012: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const r = s(i(7363)),
            l = i(8028),
            c = a(i(805)),
            u = s(i(5638)),
            d = i(3256),
            _ = i(3003),
            T = i(4934);
          class S extends r.Component {
            constructor(e) {
              super(e);
            }
            componentDidMount() {
              this.timer = window.setTimeout(() => {
                const {
                  hidePresenter: e
                } = this.props;
                e && e();
              }, 1e4), u.default.playEffect(u.EffectSoundType.PRESENTER_STUDENT_PICKED);
            }
            componentWillUnmount() {
              const {
                hidePresenter: e
              } = this.props;
              e && e(), this.timer && window.clearTimeout(this.timer);
            }
            render() {
              let e = (0, _.getMemberDisplayMode)() == T.DisplayMode.DEFAULT_THUMB_N_NAME ? c.default.myAccount.name : c.default.myAccount.nickName;
              return "" == e && (e = c.default.myAccount.name), r.createElement("div", {
                id: "contentToolContainer"
              }, r.createElement("div", {
                id: "pageMask",
                style: {
                  zIndex: l.Z_INDEX_TEACHING_TOOL_MENU_ITEM
                }
              }, r.createElement("div", {
                className: "pick_student"
              }, r.createElement("strong", null, `${e}!`), r.createElement("div", {
                className: "youreChosenAndyoureGroup"
              }, d.CAPTION.CHOSEN))));
            }
          }
          t.default = S;
        },
        1756: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.GroupSettings = void 0, t.GroupSettings = [{
            name: "A",
            className: "ga",
            color: "#fff",
            studentClassName: "ga",
            korName: "A"
          }, {
            name: "B",
            className: "ga",
            color: "#fff",
            studentClassName: "gb",
            korName: "B"
          }, {
            name: "C",
            className: "ga",
            color: "#fff",
            studentClassName: "gc",
            korName: "C"
          }, {
            name: "D",
            className: "ga",
            color: "#fff",
            studentClassName: "gd",
            korName: "D"
          }, {
            name: "E",
            className: "ga",
            color: "#fff",
            studentClassName: "ge",
            korName: "E"
          }, {
            name: "F",
            className: "ga",
            color: "#fff",
            studentClassName: "gf",
            korName: "F"
          }, {
            name: "G",
            className: "ga",
            color: "#fff",
            studentClassName: "gg",
            korName: "G"
          }, {
            name: "H",
            className: "ga",
            color: "#fff",
            studentClassName: "gh",
            korName: "H"
          }, {
            name: "I",
            className: "ga",
            color: "#fff",
            studentClassName: "gi",
            korName: "I"
          }, {
            name: "J",
            className: "ga",
            color: "#fff",
            studentClassName: "gj",
            korName: "J"
          }, {
            name: "K",
            className: "ga",
            color: "#fff",
            studentClassName: "gj",
            korName: "K"
          }, {
            name: "L",
            className: "ga",
            color: "#fff",
            studentClassName: "gj",
            korName: "L"
          }];
        },
        3287: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__awaiter || function (e, t, i, n) {
              return new (i || (i = Promise))(function (o, s) {
                function a(e) {
                  try {
                    l(n.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function r(e) {
                  try {
                    l(n.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function (e) {
                    e(t);
                  })).then(a, r);
                }
                l((n = n.apply(e, t || [])).next());
              });
            },
            r = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const l = s(i(7363)),
            c = i(4184),
            u = i(4934),
            d = i(8028),
            _ = r(i(4577)),
            T = r(i(7835)),
            S = r(i(6136)),
            p = r(i(4423)),
            E = r(i(9306)),
            h = s(i(9729)),
            m = i(8667).Z;
          class C extends l.Component {
            constructor(e) {
              super(e), this.finishActionTypes = [], this.canTryUpload = !0, this.reset = () => {
                this.setState(Object.assign({}, this.getInitialState())), this.handleStopCamera(), this.finishActionTypes = [], this.canTryUpload = !0, window.curBridge.stopVideoRecord(() => {}), window.curBridge.stopVoiceRecord(() => {}), window.curBridge.stopCamera(() => {});
              }, this.getInitialState = () => ({
                isCameraOn: !1,
                canVisibleUploadBtn: !1,
                isUploadComplete: !1,
                isActiveWriting: !1,
                canVisibleNextBtn: !1,
                canVisiblePrevBtn: !1,
                canBlockInput: !1,
                activeSlideIndex: 0,
                isUploadedImageStep: 0,
                canMoveNextForce: !1
              }), this.handleStartCamera = () => {
                this.setState({
                  isCameraOn: !0
                });
                const {
                  startStudentCamera: e
                } = this.props;
                e();
              }, this.handleStopCamera = () => {
                this.setState({
                  isCameraOn: !1
                });
                const {
                  stopStudentCamera: e
                } = this.props;
                e();
              }, this.onSlideChange = () => {
                this.updateWritingState(), this.setState({
                  activeSlideIndex: this.swiper.current.swiper.activeIndex,
                  canVisiblePrevBtn: 0 !== this.swiper.current.swiper.activeIndex
                }, () => {
                  this.updateNextStepBtnState(), this.updateInputBlockState();
                });
              }, this.handleStartAction = (e, t) => {
                const {
                  isUploadComplete: i
                } = this.state;
                if (i) return;
                const n = this.finishActionTypes.findIndex(e => e.type === t);
                n >= 0 && this.finishActionTypes.splice(n, 1), this.updateNextStepBtnState();
              }, this.handleFinishAction = (e, t, i) => {
                const n = this.finishActionTypes.findIndex(t => t.index === e);
                n >= 0 && this.finishActionTypes.splice(n, 1), this.finishActionTypes.push({
                  index: e,
                  type: t,
                  value: i,
                  date: t
                }), this.updateNextStepBtnState(), 1 === e && this.setState({
                  isUploadedImageStep: 1
                });
              }, this.updateWritingState = () => {
                const e = this.getStudentPartLessonSrc().portfolioActions.findIndex(e => e === u.PortfolioActionType.WRITING) === this.swiper.current.swiper.activeIndex;
                this.setState({
                  isActiveWriting: e
                });
              }, this.updateNextStepBtnState = () => {
                this.setState({
                  canVisibleUploadBtn: !1,
                  canVisibleNextBtn: !1
                });
                const {
                    isUploadComplete: e,
                    activeSlideIndex: t
                  } = this.state,
                  i = this.getStudentPartLessonSrc(),
                  n = t + 1 === i.portfolioActions.length;
                this.finishActionTypes.length === i.portfolioActions.length ? n ? e || this.setState({
                  canVisibleUploadBtn: !0
                }) : this.setState({
                  canVisibleNextBtn: !0
                }) : this.finishActionTypes.length === t + 1 && (2 == this.state.activeSlideIndex || 3 == this.state.activeSlideIndex ? this.setState({
                  canVisibleNextBtn: !1
                }) : this.setState({
                  canVisibleNextBtn: !0
                }));
                const o = this.finishActionTypes.find(e => 0 === e.index);
                if (this.swiper && this.swiper.slide) {
                  const i = !e && 0 === t && o && "" !== o.value && this.swiper.slide.length > 1,
                    n = !e && 1 === t && this.swiper.slide.length > 1,
                    s = t < this.swiper.slide.length - 1;
                  (i || n || s) && this.setState({
                    canVisibleNextBtn: !0
                  });
                }
              }, this.updateInputBlockState = () => {
                const {
                  isUploadComplete: e
                } = this.state;
                if (!e) return;
                const {
                    activeSlideIndex: t
                  } = this.state,
                  i = this.getStudentPartLessonSrc().portfolioActions[t];
                this.setState({
                  canBlockInput: i === u.PortfolioActionType.DRAWING || i === u.PortfolioActionType.WRITING
                });
              }, this.getStudentPartLessonSrc = () => {
                const {
                  studentPartLessonSrc: e
                } = this.props;
                return e;
              }, this.handleClickUpload = () => a(this, void 0, void 0, function* () {
                if (!this.canTryUpload) return;
                this.canTryUpload = !1;
                const {
                  showSpinner: e,
                  hideSpinner: t
                } = this.props;
                e && e();
                const i = this.getStudentPartLessonSrc();
                try {
                  let e = "";
                  const n = [];
                  let o = !1,
                    s = !1,
                    r = -1;
                  for (let e = 0; e < i.portfolioActions.length; e += 1) if (i.portfolioActions[e] === u.PortfolioActionType.DRAWING) {
                    o = !0, r = e;
                    break;
                  }
                  for (let t = 0; t < i.portfolioActions.length; t += 1) {
                    const o = i.portfolioActions[t],
                      a = this.finishActionTypes.find(e => e.index === t);
                    if (!a) continue;
                    let r = "";
                    o === u.PortfolioActionType.AUDIO || o === u.PortfolioActionType.VIDEO ? (r = yield a.value, e = o === u.PortfolioActionType.AUDIO ? "../toolkit_static/images/rec_sound.PNG" : "../toolkit_static/images/rec_video.PNG", n.unshift({
                      type: o,
                      value: r,
                      date: o
                    })) : o === u.PortfolioActionType.WRITING && (s = !0, r = a.value, n.unshift({
                      type: o,
                      value: r,
                      date: o
                    }));
                  }
                  if (s) {
                    const i = yield this.getWriteCoverUrl();
                    window.curBridge.uploadFileToServer(i, i => a(this, void 0, void 0, function* () {
                      if (e = i.url, o) {
                        const i = window.portfolioDrawingTool,
                          o = yield i.getDrawingDataUrl();
                        window.curBridge.uploadFileToServer(o, i => {
                          if (n.unshift({
                            type: u.PortfolioActionType.DRAWING,
                            value: i.url,
                            date: u.PortfolioActionType.DRAWING
                          }), n.length > 0) {
                            const {
                              onSubmit: t
                            } = this.props;
                            t(e, n);
                          }
                          this.setState({
                            isUploadComplete: !0,
                            canVisibleUploadBtn: !1
                          }, () => {
                            t && t();
                          });
                        });
                      } else {
                        if (n.length > 0) {
                          const {
                            onSubmit: t
                          } = this.props;
                          t(e, n);
                        }
                        this.setState({
                          isUploadComplete: !0,
                          canVisibleUploadBtn: !1
                        }, () => {
                          t && t();
                        });
                      }
                    }));
                  } else if (o) {
                    const i = window.portfolioDrawingTool,
                      o = yield i.getDrawingDataUrl();
                    window.curBridge.uploadFileToServer(o, i => {
                      if (e = i.url, n.unshift({
                        type: u.PortfolioActionType.DRAWING,
                        value: i.url,
                        date: u.PortfolioActionType.DRAWING
                      }), n.length > 0) {
                        const {
                          onSubmit: t
                        } = this.props;
                        t(e, n);
                      }
                      this.setState({
                        isUploadComplete: !0,
                        canVisibleUploadBtn: !1
                      }, () => {
                        t && t();
                      });
                    });
                  } else {
                    if (n.length > 0) {
                      const {
                        onSubmit: t
                      } = this.props;
                      t(e, n);
                    }
                    this.setState({
                      isUploadComplete: !0,
                      canVisibleUploadBtn: !1
                    }, () => {
                      t && t();
                    });
                  }
                } catch (e) {
                  this.setState({
                    isUploadComplete: !0,
                    canVisibleUploadBtn: !1
                  }, () => {
                    t && t();
                  });
                }
              }), this.getWriteCoverUrl = (e = "jpeg") => a(this, void 0, void 0, function* () {
                let e = document.querySelector(".text_wrap");
                return e ? yield E.default.toPng(e, {
                  style: {
                    top: "0px",
                    left: "0px"
                  }
                }) : "";
              }), this.handleClickNextBtn = () => a(this, void 0, void 0, function* () {
                this.finishActionTypes.find(e => 1 === e.index), 1 === this.state.activeSlideIndex && 0 === this.state.isUploadedImageStep ? this.setState({
                  canMoveNextForce: !0
                }, () => {
                  this.props.showSpinner && this.props.showSpinner();
                }) : this.swiper.current.swiper.slideNext();
              }), this.handleClickPrevBtn = () => {
                this.swiper.current.swiper.slidePrev();
              }, this.renderScreenBlock = () => {
                const {
                  canBlockInput: e
                } = this.state;
                return e ? l.createElement("div", {
                  className: "sutdnet_portfolio_block"
                }) : null;
              }, this.renderPagingBlock = () => {
                const {
                  isUploadComplete: e
                } = this.state;
                return e ? null : l.createElement("div", {
                  className: "sutdnet_portfolio_paging_block"
                });
              }, this.renderNavigation = () => {
                const {
                  canVisibleNextBtn: e,
                  canVisiblePrevBtn: t
                } = this.state;
                return l.createElement(l.Fragment, null, e && l.createElement("div", {
                  className: "student-next"
                }), e && l.createElement("div", {
                  className: "student-port-next-clickarea",
                  onClick: this.handleClickNextBtn
                }), t && l.createElement("div", {
                  className: "student-prev",
                  onClick: this.handleClickPrevBtn
                }), t && l.createElement("div", {
                  className: "student-port-prev-clickarea",
                  onClick: this.handleClickPrevBtn
                }));
              }, this.swiper = l.createRef(), this.state = Object.assign({}, this.getInitialState());
            }
            componentDidMount() {
              window.setTimeout(() => {
                this.updateWritingState(), this.swiper.current.swiper.allowTouchMove = !1;
              }, 0), this.canTryUpload = !0, this.obserableEvent = h.default.getObserable().subscribe(e => a(this, void 0, void 0, function* () {
                if (e.type === h.EventType.DRAW_TOUCH_END) {
                  const e = this.getStudentPartLessonSrc().portfolioActions;
                  (e && e.length > 1 && e[0] == u.PortfolioActionType.DRAWING && 0 == this.state.activeSlideIndex || e && e.length > 1 && e[1] == u.PortfolioActionType.DRAWING && 1 == this.state.activeSlideIndex) && this.setState({
                    canVisibleNextBtn: !0
                  });
                }
              })), 2 != this.state.activeSlideIndex && 3 != this.state.activeSlideIndex || this.setState({
                canVisibleNextBtn: !1
              });
            }
            componentWillUnmount() {
              this.obserableEvent && this.obserableEvent.unsubscribe();
            }
            componentWillReceiveProps(e) {
              this.props.studentPartLessonSrc && this.props.studentPartLessonSrc.no !== e.studentPartLessonSrc.no && this.reset();
            }
            componentDidUpdate(e, t) {
              0 === t.isUploadedImageStep && 1 === this.state.isUploadedImageStep && this.state.canMoveNextForce && (this.setState({
                isUploadedImageStep: 0
              }), this.props.hideSpinner && this.props.hideSpinner(), this.swiper.current.swiper.slideNext());
            }
            get swipeParams() {
              const e = this.getStudentPartLessonSrc().portfolioActions.length > 1 ? "multiple" : "";
              return {
                className: `student_subject ${e}`,
                containerClass: `student_subject ${e}`,
                slidesPerView: 1,
                pagination: {
                  el: ".student-pagination",
                  clickable: !0
                },
                on: {
                  slideChange: () => this.onSlideChange()
                }
              };
            }
            render() {
              const e = this.getStudentPartLessonSrc(),
                t = e.topic,
                {
                  isCameraOn: i,
                  canVisibleUploadBtn: n,
                  isUploadComplete: o,
                  isActiveWriting: s,
                  activeSlideIndex: a
                } = this.state,
                r = e.portfolioActions;
              return l.createElement("div", {
                id: "contentToolContainer",
                key: e.no
              }, l.createElement("div", {
                id: "pageMask",
                className: c({
                  "camera-on": i
                }),
                style: {
                  zIndex: d.Z_INDEX_TEACHING_TOOL_MENU_ITEM
                }
              }, l.createElement("div", {
                className: c("wrapcont bgport", {
                  "camera-on": i
                })
              }, l.createElement("div", {
                className: "subject_title"
              }, l.createElement("strong", null, t)), l.createElement(m, Object.assign({}, this.swipeParams, {
                ref: this.swiper
              }), r.map((e, t) => e === u.PortfolioActionType.WRITING ? l.createElement(S.default, {
                key: t,
                index: t,
                activeSlideIndex: a,
                onFinishAction: this.handleFinishAction
              }) : e === u.PortfolioActionType.DRAWING ? l.createElement(p.default, {
                key: t,
                index: t,
                isUploadComplete: o,
                activeSlideIndex: a,
                onFinishAction: (e, t, i) => {
                  this.setState({
                    isUploadedImageStep: 0
                  }, () => {
                    this.handleFinishAction(e, t, i);
                  });
                }
              }) : e === u.PortfolioActionType.AUDIO ? l.createElement(_.default, {
                key: t,
                index: t,
                activeSlideIndex: a,
                isUploadComplete: o,
                onStartAction: this.handleStartAction,
                onFinishAction: this.handleFinishAction
              }) : e === u.PortfolioActionType.VIDEO ? l.createElement(T.default, {
                index: t,
                activeSlideIndex: a,
                key: t,
                isUploadComplete: o,
                onStartCamera: this.handleStartCamera,
                onStopCamera: this.handleStopCamera,
                onStartAction: this.handleStartAction,
                onFinishAction: this.handleFinishAction
              }) : null)), this.renderScreenBlock(), this.renderPagingBlock(), this.renderNavigation(), n && l.createElement("div", {
                className: "port_up",
                onClick: this.handleClickUpload
              }))));
            }
          }
          t.default = C;
        },
        7624: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const a = s(i(7363)),
            r = i(590),
            l = e => {
              const t = (0, r.convertSecToTime)(e);
              return `${(0, r.pad)(t.min, 2)}:${(0, r.pad)(t.second, 2)}`;
            };
          class c extends a.Component {
            render() {
              const {
                curElapsedSec: e,
                curTotalSec: t
              } = this.props;
              return a.createElement("div", {
                className: "rec_timer"
              }, a.createElement("div", null, a.createElement("span", null, l(Math.round(e))), " / ", a.createElement("span", null, l(Math.round(t)))));
            }
          }
          t.default = c;
        },
        3254: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const a = s(i(7363)),
            r = i(4184),
            l = i(590),
            c = i(163),
            u = e => {
              const t = (0, l.convertSecToTime)(e);
              return `${(0, l.pad)(t.min, 2)}:${(0, l.pad)(t.second, 2)}`;
            };
          class d extends a.Component {
            constructor(e) {
              super(e), this.state = {
                curElapsedSec: 0
              };
            }
            componentDidMount() {
              this.props.isRecording && this.startRecordTimeInterval();
            }
            componentWillReceiveProps(e) {
              this.props.isRecording !== e.isRecording && (e.isRecording ? (this.setState({
                curElapsedSec: 0
              }), this.startRecordTimeInterval()) : this.stopRecordTimeInterval());
            }
            componentWillUnmount() {
              this.stopRecordTimeInterval();
            }
            startRecordTimeInterval() {
              this.stopRecordTimeInterval(), this.interval = window.setInterval(() => {
                const {
                    curElapsedSec: e
                  } = this.state,
                  t = e + .1;
                t > c.MAX_RECORD_SEC ? (this.stopRecordTimeInterval(), this.props.onExceedRecordTime()) : this.setState({
                  curElapsedSec: t
                });
              }, 100);
            }
            stopRecordTimeInterval() {
              this.interval && clearInterval(this.interval);
            }
            render() {
              const {
                  isRecording: e
                } = this.props,
                {
                  curElapsedSec: t
                } = this.state;
              return a.createElement("div", {
                className: r("rec_timer", {
                  record: e
                })
              }, a.createElement("div", null, a.createElement("span", null, u(Math.floor(t))), " / ", a.createElement("span", null, u(c.MAX_RECORD_SEC))));
            }
          }
          t.default = d;
        },
        4577: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__awaiter || function (e, t, i, n) {
              return new (i || (i = Promise))(function (o, s) {
                function a(e) {
                  try {
                    l(n.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function r(e) {
                  try {
                    l(n.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function (e) {
                    e(t);
                  })).then(a, r);
                }
                l((n = n.apply(e, t || [])).next());
              });
            },
            r = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const l = s(i(7363)),
            c = i(4184),
            u = r(i(3254)),
            d = r(i(2629)),
            _ = i(4934),
            T = r(i(7624)),
            S = i(163),
            p = [];
          for (let e = 0; e < 3; e += 1) p.push(`../toolkit_static/images/equalizer/equal${e}.png`);
          class E extends l.Component {
            constructor(e) {
              super(e), this.onTimeUpdate = () => {
                this.audio && this.audio.src.indexOf(".mp3") >= 0 && this.isMountedComp && this.setState({
                  curMediaElapsedSec: this.audio.currentTime
                });
              }, this.onEnded = () => {
                this.setState({
                  isPlayingMedia: !1
                });
              }, this.handleClickRecordBtn = () => {
                const {
                  isRecording: e,
                  canRecord: t
                } = this.state;
                t && (e ? this.stopVoiceRecord() : this.startVoiceRecord(), this.setState({
                  isRecording: !e,
                  isPlayingMedia: !1
                }));
              }, this.handleClickPlayBtn = () => a(this, void 0, void 0, function* () {
                const {
                  canPlay: e
                } = this.state;
                if (!e) return;
                if (!this.lastAudioFileUri) return void console.error("invalid audio file");
                const {
                  isPlayingMedia: t
                } = this.state;
                t ? (this.lastPlayTime = this.audio.currentTime, this.audio.pause(), this.audio.src = "") : this.audio.src === this.lastAudioFileUri && (this.audio.currentTime === this.audio.duration && (this.audio.currentTime = 0), yield this.audio.play()), this.setState({
                  isPlayingMedia: !t
                });
              }), this.handleExceedRecordTime = () => {
                this.stopVoiceRecord(), this.setState({
                  isRecording: !1
                });
              }, this.onLoadedData = () => a(this, void 0, void 0, function* () {
                for (; this.audio.duration === 1 / 0;) yield new Promise(e => setTimeout(e, 1e3)), this.audio.currentTime = 1e7 * Math.random();
                this.setState({
                  curMediaElapsedSec: this.lastPlayTime || this.audio.duration,
                  isRecording: !1
                });
              }), this.startVoiceRecord = () => {
                const {
                  index: e,
                  onStartAction: t
                } = this.props;
                t(e, _.PortfolioActionType.AUDIO), this.lastAudioFileUri && this.audio.pause(), this.lastAudioFileUri = void 0, this.setState({
                  canPlay: !1,
                  canRecord: !1
                }, () => {
                  window.curBridge.startVoiceRecord(() => {}), this.clearTimer(), this.timer = window.setTimeout(() => {
                    this.setState({
                      canRecord: !0
                    });
                  }, 3e3);
                });
              }, this.stopVoiceRecord = () => {
                const {
                  showSpinner: e,
                  hideSpinner: t
                } = this.props;
                e && e(), window.curBridge.stopVoiceRecord(e => {
                  if (null == e ? void 0 : e.url) {
                    this.lastAudioFileUri = null == e ? void 0 : e.url, this.audio.src = this.lastAudioFileUri + "", this.audio.load(), this.lastPlayTime = 0, this.setState({
                      canPlay: !0
                    });
                    const {
                      index: t,
                      onFinishAction: i
                    } = this.props;
                    i(t, _.PortfolioActionType.AUDIO, this.lastAudioFileUri);
                  }
                  t && t();
                });
              }, this.clearTimer = () => {
                this.timer && clearTimeout(this.timer);
              }, this.state = {
                isRecording: !1,
                canPlay: !1,
                canRecord: !0,
                isPlayingMedia: !1,
                curMediaElapsedSec: 0,
                curMediaTotalSec: S.MAX_RECORD_SEC
              };
            }
            componentDidMount() {
              this.isMountedComp = !0, this.audio && (this.audio.addEventListener("timeupdate", this.onTimeUpdate), this.audio.addEventListener("loadeddata", this.onLoadedData), this.audio.addEventListener("ended", this.onEnded));
            }
            componentWillReceiveProps(e) {
              this.props.isUploadComplete !== e.isUploadComplete && e.isUploadComplete && this.setState({
                canRecord: !1
              });
            }
            componentWillUnmount() {
              this.clearTimer(), this.isMountedComp = !1, this.audio && (this.audio.removeEventListener("timeupdate", this.onTimeUpdate), this.audio.removeEventListener("loadeddata", this.onLoadedData), this.audio.removeEventListener("ended", this.onEnded));
            }
            render() {
              const {
                isRecording: e,
                canPlay: t,
                canRecord: i,
                isPlayingMedia: n,
                curMediaTotalSec: o,
                curMediaElapsedSec: s
              } = this.state;
              return l.createElement("div", {
                className: "swiper-slide subj_audio"
              }, l.createElement("div", {
                className: "audio_wrap"
              }, l.createElement("div", {
                className: "equalizer"
              }, !e && l.createElement("img", {
                src: p[0]
              }), e && l.createElement(d.default, {
                imageUrls: p,
                durationSec: 1
              })), l.createElement("div", {
                className: "rec_control_wrap"
              }, l.createElement("div", {
                className: "rec_control"
              }, l.createElement("button", {
                className: c("voc_rec", {
                  pause: e,
                  disabled: !i
                }),
                onClick: this.handleClickRecordBtn
              }), l.createElement("button", {
                className: c("rec_play", {
                  pause: n,
                  disabled: !t
                }),
                onClick: this.handleClickPlayBtn
              }), e && l.createElement(u.default, {
                isRecording: e,
                onExceedRecordTime: this.handleExceedRecordTime
              }), (() => !e && this.lastAudioFileUri ? l.createElement(T.default, {
                curElapsedSec: s,
                curTotalSec: o
              }) : l.createElement(l.Fragment, null))()))), l.createElement("audio", {
                preload: "true",
                src: this.lastAudioFileUri,
                ref: e => {
                  e && (this.audio = e), this.lastAudioFileUri;
                }
              }));
            }
          }
          t.default = E;
        },
        3277: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const r = s(i(7363)),
            l = s(i(9729)),
            c = i(4934),
            u = a(i(8046)),
            d = {
              x: 235,
              y: 190,
              width: 800,
              height: 500
            };
          class _ extends r.Component {
            constructor(e) {
              super(e), this.handleUpdateDrawingResult = e => {
                const {
                  index: t,
                  onFinishAction: i
                } = this.props;
                i(t, c.PortfolioActionType.DRAWING, e);
              }, this.state = {
                isStartDrawing: !1,
                isVisibleDrawingToolBar: !0
              };
            }
            componentDidMount() {
              this.registerEvt();
            }
            componentWillReceiveProps(e) {
              e.isUploadComplete && this.props.isUploadComplete !== e.isUploadComplete && this.setState({
                isVisibleDrawingToolBar: !1
              });
            }
            componentWillUnmount() {
              this.obserableEvent && this.obserableEvent.unsubscribe();
            }
            registerEvt() {
              this.obserableEvent = l.default.getObserable().subscribe(e => {
                e.type === l.EventType.START_DRAWING_STEP && this.setState({
                  isStartDrawing: !0
                });
              });
            }
            render() {
              const {
                  drawingToolSelection: e,
                  setDrawingToolSelection: t,
                  initDrawingToolSelection: i
                } = this.props,
                {
                  isStartDrawing: n,
                  isVisibleDrawingToolBar: o
                } = this.state;
              return r.createElement("div", {
                className: "swiper-slide subj_drawing"
              }, r.createElement("div", {
                className: "drawing_wrap"
              }, !n && r.createElement("div", {
                className: "drawing_area ready",
                "data-ready-value": "Draw your answer"
              }), r.createElement(u.default, {
                drawingToolSelection: e,
                studentDrawingCustomRect: d,
                isVisibleToolbar: o,
                setDrawingToolSelection: t,
                initDrawingToolSelection: i,
                updateDrawingResult: this.handleUpdateDrawingResult
              })));
            }
          }
          t.default = _;
        },
        6136: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const r = s(i(7363)),
            l = i(4934),
            c = s(i(6884)),
            u = a(i(6884));
          class d extends r.Component {
            constructor(e) {
              super(e), this.onChange = e => {
                const t = this.textarea.value;
                this.setState({
                  inputText: t
                });
              }, this.onDone = () => {
                this.keyboard.current.changeState("hide"), this.dateBlur = new Date(), this.setState({
                  isFocusedTextArea: !1
                });
                const {
                    index: e,
                    onFinishAction: t
                  } = this.props,
                  {
                    inputText: i
                  } = this.state;
                t(e, l.PortfolioActionType.WRITING, i);
              }, this.onClickKeyboard = () => {
                new Date().getTime() - this.dateBlur.getTime() < 100 ? this.textarea.blur() : this.onClickInputArea();
              }, this.handleChange = () => {
                const e = this.textarea.value;
                this.setState({
                  inputText: e
                });
              }, this.onClickInputArea = () => {
                this.textarea && this.textarea.focus(), this.setState({
                  isFocusedTextArea: !0
                }), this.keyboard.current.changeState("on");
              }, this.onTextAreaBlur = () => {}, this.keyboard = r.createRef(), this.state = {
                inputText: "",
                isFocusedTextArea: !1,
                isActiveAction: this.props.index === this.props.activeSlideIndex
              }, this.dateBlur = new Date();
            }
            componentDidMount() {
              c.setInputs(this.textarea), c.setCallback(this.onChange, null, null, this.onDone, null);
            }
            componentWillReceiveProps(e) {
              this.props.activeSlideIndex !== e.activeSlideIndex && this.setState({
                isActiveAction: this.props.index === e.activeSlideIndex
              });
            }
            render() {
              const {
                inputText: e,
                isFocusedTextArea: t
              } = this.state;
              return r.createElement("div", {
                className: "swiper-slide subj_text"
              }, r.createElement("div", {
                className: "text_wrap"
              }, 0 === e.length && !t && r.createElement("div", {
                className: "placeholder pointer-none"
              }, "Write your answer"), r.createElement("textarea", {
                inputMode: "none",
                onChange: this.handleChange,
                onClick: e => {
                  this.onClickInputArea(), e.preventDefault();
                },
                ref: e => {
                  e && (this.textarea = e);
                },
                onBlur: this.onTextAreaBlur
              })), r.createElement(u.default, {
                ref: this.keyboard
              }));
            }
          }
          t.default = d;
        },
        7835: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const r = s(i(7363)),
            l = i(4184),
            c = a(i(3254)),
            u = i(4934),
            d = a(i(7624)),
            _ = i(163);
          class T extends r.Component {
            constructor(e) {
              super(e), this.onTimeUpdate = () => {
                this.video && this.isMountedComp && this.setState({
                  curMediaElapsedSec: this.video.currentTime
                });
              }, this.onEnded = () => {
                this.setState({
                  isPlayingMedia: !1
                });
              }, this.onLoadedData = (e, t) => {
                void 0 === t && (t = this.video.duration), t !== 1 / 0 && setTimeout(() => {
                  this.setState({
                    curMediaElapsedSec: 0,
                    curMediaTotalSec: t,
                    canRecord: !0,
                    isRecording: !1,
                    loadEnd: !0
                  }, () => {
                    this.video.style.opacity = "1", this.props.hideSpinner && this.props.hideSpinner();
                  });
                }, 500);
              }, this.handleClickRecordBtn = () => {
                const {
                  isUploadComplete: e
                } = this.props;
                if (e) return;
                const {
                  isRecording: t,
                  canRecord: i
                } = this.state;
                i && (t ? this.stopRecord() : (this.startCamera(), setTimeout(() => {
                  this.startRecord();
                }, 300)), this.setState({
                  isRecording: !t,
                  isPlayingMedia: !1
                }));
              }, this.handleClickPlayBtn = () => {
                if (!this.video) return;
                const {
                  canPlay: e
                } = this.state;
                if (!e || !this.video) return;
                if (!this.lastMediaFileUri) return void console.error("invalid media file");
                const {
                  isPlayingMedia: t
                } = this.state;
                t ? (this.video.pause(), console.error("handleClickPlayBtn pause")) : (this.video.currentTime === this.video.duration && (this.video.currentTime = 0), this.video.play(), console.error("handleClickPlayBtn play", this.video)), this.setState({
                  isPlayingMedia: !t
                });
              }, this.handleExceedRecordTime = () => {
                this.stopRecord(), this.setState({
                  isRecording: !1
                });
              }, this.startRecord = () => {
                const {
                  index: e,
                  onStartAction: t
                } = this.props;
                t && t(e, u.PortfolioActionType.VIDEO), this.lastMediaFileUri = void 0, this.video && (this.video.pause(), this.video.style.opacity = "0", this.video.src = ""), window.curBridge.startVideoRecord(() => {}, () => {}), this.setState({
                  canPlay: !1,
                  canRecord: !1
                }), this.clearTimer(), this.timer = window.setTimeout(() => {
                  this.setState({
                    canRecord: !0
                  });
                }, 3e3);
              }, this.stopRecord = () => {
                const {
                  showSpinner: e,
                  hideSpinner: t
                } = this.props;
                e && e(), window.curBridge.stopVideoRecord(e => {
                  "success" === e.result && "" !== e.url && this.setState({
                    canPlay: !0,
                    canRecord: !1,
                    loadEnd: !1
                  }, () => {
                    var t, i, n;
                    this.video.style.opacity = "0", this.lastMediaFileUri = e.url, this.video.src = e.url, this.video.currentTime = .1, this.video.pause(), t = e.url, i = e => {
                      this.onLoadedData("force", e);
                    }, (n = new Audio(t)).addEventListener("durationchange", function (e) {
                      if (this.duration != 1 / 0) {
                        var t = this.duration;
                        n.remove(), i(t);
                      }
                    }, !1), n.load(), n.currentTime = 86400, n.volume = 0, n.play();
                    const {
                      index: o,
                      onFinishAction: s
                    } = this.props;
                    s && s(o, u.PortfolioActionType.VIDEO, this.lastMediaFileUri);
                  });
                });
              }, this.clearTimer = () => {
                this.timer && clearTimeout(this.timer);
              }, this.state = {
                isRecording: !1,
                canPlay: !1,
                canRecord: !0,
                loadEnd: !1,
                isPlayingMedia: !1,
                curMediaElapsedSec: 0,
                curMediaTotalSec: _.MAX_RECORD_SEC
              };
            }
            componentDidMount() {
              this.isMountedComp = !0, this.props.index === this.props.activeSlideIndex && this.startCamera(), this.video && (this.video.addEventListener("canplay", () => this.onLoadedData("canplay")), this.video.removeEventListener("loadedmetadata", () => this.onLoadedData("loadedmetadata")), this.video.addEventListener("timeupdate", this.onTimeUpdate), this.video.addEventListener("ended", this.onEnded));
            }
            componentWillReceiveProps(e) {
              this.props.isUploadComplete !== e.isUploadComplete && e.isUploadComplete ? this.setState({
                canRecord: !1
              }) : this.props.activeSlideIndex !== e.activeSlideIndex && (this.props.index === e.activeSlideIndex && this.video && this.video.src && this.setState({
                canPlay: !0,
                loadEnd: !0
              }), this.props.index !== e.activeSlideIndex || this.video.src || this.startCamera());
            }
            componentWillUnmount() {
              this.forceStopCamera(), this.clearTimer(), this.isMountedComp = !1, this.lastMediaFileUri = void 0, this.video && (this.video.removeEventListener("canplay", () => {}), this.video.removeEventListener("loadedmetadata", () => {}), this.video.removeEventListener("timeupdate", () => {}), this.video.removeEventListener("ended", () => {}));
            }
            startCamera() {
              this.props.onStartCamera(), window.curBridge.startCamera(() => {});
            }
            forceStopCamera() {
              this.props.onStopCamera(), window.curBridge.stopVideoRecord(() => {}), window.curBridge.stopCamera(() => {});
            }
            render() {
              const {
                  isRecording: e,
                  canPlay: t,
                  loadEnd: i,
                  canRecord: n,
                  isPlayingMedia: o,
                  curMediaElapsedSec: s,
                  curMediaTotalSec: a
                } = this.state,
                {
                  activeSlideIndex: u,
                  index: _
                } = this.props;
              return r.createElement("div", {
                className: "swiper-slide subj_video"
              }, r.createElement("div", {
                className: "video_wrap"
              }, r.createElement("p", {
                style: {
                  opacity: t && i ? .999 : 0
                }
              }, r.createElement("video", {
                id: "student-video-portfolio",
                preload: "metadata",
                style: {
                  objectFit: "initial"
                },
                className: "video-h-flip",
                ref: e => {
                  e && (this.video = e);
                }
              })), r.createElement("div", {
                className: "rec_control_wrap"
              }, r.createElement("div", {
                className: "rec_control"
              }, r.createElement("button", {
                className: l("mov_rec", {
                  pause: e,
                  disabled: !n
                }),
                onClick: this.handleClickRecordBtn
              }), r.createElement("button", {
                className: l("rec_play", {
                  pause: o,
                  disabled: !t
                }),
                onClick: this.handleClickPlayBtn
              }), e && r.createElement(c.default, {
                isRecording: e,
                onExceedRecordTime: this.handleExceedRecordTime
              }), e ? r.createElement(r.Fragment, null) : r.createElement(d.default, {
                curElapsedSec: s,
                curTotalSec: a
              })))));
            }
          }
          t.default = T;
        },
        163: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.MAX_RECORD_SEC = t.MAX_SELECT_ACTION_CNT = t.INVALID_TOPIC_ID = t.CUSTOM_TOPIC_ID = t.PortfolioStep = void 0, function (e) {
            e[e.INVALID = 0] = "INVALID", e[e.STEP1 = 1] = "STEP1", e[e.STEP2 = 2] = "STEP2", e[e.STEP3 = 3] = "STEP3", e[e.STEP4 = 4] = "STEP4";
          }(t.PortfolioStep || (t.PortfolioStep = {})), t.CUSTOM_TOPIC_ID = -999, t.INVALID_TOPIC_ID = 0, t.MAX_SELECT_ACTION_CNT = 3, t.MAX_RECORD_SEC = 120;
        },
        6246: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const r = s(i(7363)),
            l = i(8028),
            c = a(i(2790)),
            u = s(i(5638));
          var d;
          !function (e) {
            e[e.SELECT_STAMP = 0] = "SELECT_STAMP", e[e.MVP_STAMP = 1] = "MVP_STAMP";
          }(d || (d = {}));
          class _ extends r.Component {
            constructor(e) {
              super(e), this.state = {
                visibleState: d.MVP_STAMP,
                thumbnail: "",
                isMvp: !1
              };
            }
            componentDidMount() {
              let e = 3;
              const {
                  stampThumbnail: t,
                  canShowSelectStamp: i,
                  mvpStampNameList: n
                } = this.props,
                o = n && n.length > 0;
              i ? (u.default.playEffect(u.EffectSoundType.STAMP_STUDENT), this.setState({
                thumbnail: c.default.makeUrl(t || "")
              }, () => {
                o && (u.default.stopAllEffect(), u.default.playEffect(u.EffectSoundType.STAMP_STUDENT), this.timer = window.setTimeout(() => this.setMVPStamp(), 3e3));
              }), o && (e += 3)) : (this.setMVPStamp(), u.default.playEffect(u.EffectSoundType.STAMP_STUDENT)), this.timer = window.setTimeout(() => {
                this.hideStamp();
              }, 1e3 * e);
            }
            componentWillUnmount() {
              this.hideStamp(), this.timer && window.clearTimeout(this.timer);
            }
            setMVPStamp() {
              this.setState({
                isMvp: !0,
                thumbnail: "../toolkit_static/images/stamp/ic_trophy_2_screen.png"
              });
            }
            hideStamp() {
              const {
                hideStamp: e
              } = this.props;
              e && e();
            }
            render() {
              const {
                thumbnail: e
              } = this.state;
              return r.createElement("div", {
                id: "contentToolContainer"
              }, r.createElement("div", {
                id: "pageMask",
                style: {
                  zIndex: l.Z_INDEX_TEACHING_TOOL_MENU_ITEM
                }
              }, r.createElement("div", {
                className: "stamp_result_student " + (this.state.isMvp ? "mvp" : "")
              }, r.createElement("img", {
                src: e
              }), r.createElement("p", null, " "))));
            }
          }
          t.default = _;
        },
        4223: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.BgController = void 0, function (e) {
            e.setBgToTransparent = () => {
              document.body.style.background = "transparent";
              const e = document.getElementById("root");
              e && (e.style.background = "transparent"), document.body.style.opacity = String(1), setTimeout(() => {
                document.body.style.opacity = String(.99);
              }, 1e3);
            }, e.setBgToNormal = () => {
              document.body.style.background = "#FFFFFF";
              const e = document.getElementById("root");
              e && (e.style.background = "#FFFFFF");
            };
          }(t.BgController || (t.BgController = {}));
        },
        278: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const o = i(4934),
            s = n(i(381)),
            a = new class {
              constructor() {
                this.contentStartType = o.ContentStartType.NORMAL;
              }
              setContentProgress(e) {
                this.progressData = e;
              }
              getContentProgress() {
                return this.progressData;
              }
              resetContentProgress() {
                this.progressData = null;
              }
              setContentStartType(e) {
                this.contentStartType = e ? o.ContentStartType.ABNORMAL : o.ContentStartType.NORMAL;
              }
              getContentStartType() {
                return this.contentStartType;
              }
              calcContentStartTime() {
                this.startTime = Number((0, s.default)().format("X"));
              }
              calcContentEndTime() {
                this.endTime = Number((0, s.default)().format("X"));
              }
              getContentStartTime() {
                return this.startTime;
              }
              getContentEndTime() {
                return this.endTime;
              }
            }();
          t.default = a;
        },
        226: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.showSyncMenuDialog = t.showProgressDialog = t.showRetryCancelDialog = t.showDefaultOkCancelDialog = t.showOkCancelDialog = t.showExitPopup = t.showNotiDialog = t.showInfoDialog = t.showAlertDialog = void 0;
          const r = s(i(7363)),
            l = i(9861),
            c = i(3195),
            u = s(i(1750)),
            d = i(8028),
            _ = a(i(8101)),
            T = i(3256),
            S = s(i(8687));
          t.showAlertDialog = (e, t, i) => {
            const n = void 0 === i ? u.DialogType.ALERT : i,
              o = (0, c.getGlobalStore)(),
              s = [{
                seq: 0,
                title: T.CAPTION.OK,
                class: "confirm",
                enabled: !0,
                onClick: () => {
                  o.dispatch((0, l.hideDiaog)()), t && t();
                }
              }],
              a = r.createElement(u.default, {
                type: n,
                message: e,
                buttons: s
              }),
              d = Math.random(),
              _ = r.cloneElement(a, {
                key: d
              });
            o.dispatch((0, l.showDialog)(_));
          }, t.showInfoDialog = (e, i) => {
            (0, t.showAlertDialog)(e, i, u.DialogType.INFO);
          }, t.showNotiDialog = (e, i) => {
            (0, t.showAlertDialog)(e, i, u.DialogType.NOTI);
          }, t.showExitPopup = () => {
            const e = (0, c.getGlobalStore)(),
              t = [{
                seq: 0,
                title: T.CAPTION.OK,
                class: "confirm",
                enabled: !0,
                onClick: () => {
                  e.dispatch((0, l.hideDiaog)());
                }
              }, {
                seq: 1,
                title: T.CAPTION.CANCEL,
                class: "confirm",
                enabled: !0,
                onClick: () => {
                  e.dispatch((0, l.hideDiaog)());
                }
              }],
              i = r.createElement(u.default, {
                type: u.DialogType.INFO,
                message: d.DIALOG_MSG.EXIT_APP,
                buttons: t
              }),
              n = Math.random(),
              o = r.cloneElement(i, {
                key: n
              });
            e.dispatch((0, l.showDialog)(o));
          }, t.showOkCancelDialog = (e, t, i, n, o, s) => {
            const a = void 0 === n ? u.DialogType.INFO : n,
              d = (0, c.getGlobalStore)(),
              _ = [{
                seq: 0,
                title: null === t || t && t.length > 0 ? t : T.CAPTION.OK,
                class: "confirm",
                enabled: !0,
                onClick: () => {
                  d.dispatch((0, l.hideDiaog)()), i && i();
                }
              }, {
                seq: 1,
                title: null === o || o && o.length > 0 ? o : T.CAPTION.CANCEL,
                class: "confirm",
                enabled: !0,
                onClick: () => {
                  d.dispatch((0, l.hideDiaog)()), s && s();
                }
              }],
              S = r.createElement(u.default, {
                type: a,
                message: e,
                buttons: _
              }),
              p = Math.random(),
              E = r.cloneElement(S, {
                key: p
              });
            d.dispatch((0, l.showDialog)(E));
          }, t.showDefaultOkCancelDialog = (e, i, n, o) => {
            (0, t.showOkCancelDialog)(e, T.CAPTION.OK, n, i, T.CAPTION.CANCEL, o);
          }, t.showRetryCancelDialog = (e, t, i) => {
            const n = (0, c.getGlobalStore)(),
              o = [{
                seq: 0,
                title: T.CAPTION.RESEND,
                class: "confirm",
                enabled: !0,
                onClick: () => {
                  n.dispatch((0, l.hideDiaog)()), t && t();
                }
              }, {
                seq: 1,
                title: T.CAPTION.CANCEL,
                class: "confirm",
                enabled: !0,
                onClick: () => {
                  n.dispatch((0, l.hideDiaog)()), i && i();
                }
              }],
              s = r.createElement(u.default, {
                type: u.DialogType.INFO,
                message: e,
                buttons: o
              }),
              a = Math.random(),
              d = r.cloneElement(s, {
                key: a
              });
            n.dispatch((0, l.showDialog)(d));
          }, t.showProgressDialog = (e, t, i) => {
            const n = (0, c.getGlobalStore)(),
              o = r.createElement(_.default, {
                message: e,
                value: t,
                status: i,
                visible: !0,
                handleClick: () => {
                  n.dispatch((0, l.hideDiaog)());
                }
              }),
              s = Math.random(),
              a = r.cloneElement(o, {
                key: s
              });
            return n.dispatch((0, l.showDialog)(a)), a;
          }, t.showSyncMenuDialog = (e, t) => {
            const i = (0, c.getGlobalStore)(),
              n = r.createElement(S.default, {
                selected: S.SelectedMenu.NONE,
                fetchPreviewResult: e,
                requestSaveStudyResult: t
              }),
              o = Math.random(),
              s = r.cloneElement(n, {
                key: o
              });
            return i.dispatch((0, l.showDialog)(s)), s;
          };
        },
        1750: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.DialogType = void 0;
          const r = s(i(7363)),
            l = a(i(4184)),
            c = a(i(6234));
          var u;
          !function (e) {
            e[e.INFO = 0] = "INFO", e[e.ALERT = 1] = "ALERT", e[e.NOTI = 2] = "NOTI", e[e.SYNC_MENU = 100] = "SYNC_MENU";
          }(u = t.DialogType || (t.DialogType = {})), t.default = e => {
            const {
                buttons: t,
                message: i,
                type: n,
                isFlexPopup: o
              } = e,
              s = (e => e === u.NOTI ? "noti" : "")(n);
            return r.createElement("div", {
              className: "CustomWrapper"
            }, r.createElement("div", {
              id: "pageMask"
            }), r.createElement("div", {
              className: "popupwrap"
            }, r.createElement("div", {
              className: (0, l.default)("popup", {
                flex: o
              })
            }, r.createElement("div", {
              className: (0, l.default)("pop_msg", s)
            }, " ", i.split("\n").map((e, t) => r.createElement("div", {
              key: Math.random()
            }, e)), " "), r.createElement("div", {
              className: "confirm_btn"
            }, " ", t.map(e => r.createElement(c.default, {
              key: e.seq,
              title: e.title,
              onClick: t => {
                e.enabled && e.onClick(t);
              }
            })), " "))));
          };
        },
        6234: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const a = i(8028),
            r = s(i(7363));
          class l extends r.Component {
            constructor(e) {
              super(e), this.selectTimer = 0, this.state = {
                selected: !1
              }, this.onClickButton = this.onClickButton.bind(this);
            }
            componentWillUnmount() {
              this.selectTimer && window.clearTimeout(this.selectTimer);
            }
            onClickButton(e) {
              this.setState({
                selected: !0
              }), this.selectTimer = window.setTimeout(() => {
                this.setState({
                  selected: !1
                }), this.props.onClick(e);
              }, a.BUTTON_SELECT_DISPLAY_MIL_SEC);
            }
            render() {
              const {
                  title: e
                } = this.props,
                {
                  selected: t
                } = this.state,
                i = t ? "select" : "";
              return r.createElement("button", {
                onClick: this.onClickButton,
                className: `cbtn ${i}`
              }, e);
            }
          }
          t.default = l;
        },
        1298: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const a = s(i(7363));
          t.default = e => {
            if (!e.dialogData) return null;
            const {
              dialogList: t
            } = e.dialogData;
            return t && 0 !== t.length ? a.createElement("div", {
              className: "dialogWrapper",
              style: {
                pointerEvents: "auto"
              }
            }, t.map((e, i) => a.createElement("div", {
              key: e.id,
              "data-id": e.id
            }, e.element, i >= t.length - 1))) : null;
          };
        },
        7677: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          let i = 0;
          t.default = () => (i += 1, i);
        },
        8101: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const a = s(i(7363)),
            r = i(3256);
          class l extends a.Component {
            constructor(e) {
              super(e), this.state = {
                value: this.props.value,
                status: this.props.status,
                visible: this.props.visible
              };
            }
            componentWillReceiveProps(e) {
              this.props.value !== e.value && this.setState({
                value: e.value
              }), this.props.status !== e.status && this.setState({
                status: e.status
              }), this.props.visible !== e.visible && this.setState({
                visible: e.visible
              });
            }
            render() {
              const {
                  handleClick: e,
                  message: t
                } = this.props,
                {
                  value: i,
                  status: n,
                  visible: o
                } = this.state,
                s = 0 === n ? r.CAPTION.CANCEL : r.CAPTION.OK,
                l = {
                  width: i + "%"
                },
                c = {
                  display: o ? "block" : "none"
                };
              return a.createElement("div", {
                className: "customWrapper",
                style: c
              }, a.createElement("div", {
                className: "progressMask"
              }), a.createElement("div", {
                className: "progressWrap"
              }, a.createElement("div", {
                className: "progressDialog"
              }, a.createElement("div", {
                className: "barMessage"
              }, t), a.createElement("div", {
                className: "barBackground"
              }, a.createElement("div", {
                className: "barGauge",
                style: l
              }, a.createElement("span", {
                className: "gaugeValue"
              }, i, "%"))), a.createElement("div", {
                id: "progressButton"
              }, a.createElement("button", {
                className: "handleButton",
                draggable: !1,
                onClick: e
              }, s)))));
            }
          }
          t.default = l;
        },
        8687: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.SelectedMenu = void 0;
          const a = s(i(7363)),
            r = i(3195),
            l = i(9861);
          var c;
          !function (e) {
            e[e.NONE = 0] = "NONE", e[e.PREVIEW_RESULT = 1] = "PREVIEW_RESULT", e[e.STUDY_RESULT = 2] = "STUDY_RESULT";
          }(c = t.SelectedMenu || (t.SelectedMenu = {}));
          class u extends a.Component {
            constructor(e) {
              super(e), this.state = {
                selected: e.selected
              }, this.selectPreviewResult = this.selectPreviewResult.bind(this), this.selectSendInclassResult = this.selectSendInclassResult.bind(this), this.getPreviewResult = this.getPreviewResult.bind(this), this.requestSaveStudyResult = this.requestSaveStudyResult.bind(this), this.justHideDialog = this.justHideDialog.bind(this);
            }
            componentWillReceiveProps(e) {
              this.props.selected !== e.selected && this.setState({
                selected: e.selected
              });
            }
            selectPreviewResult() {
              this.setState({
                selected: c.PREVIEW_RESULT
              });
            }
            selectSendInclassResult() {
              this.setState({
                selected: c.STUDY_RESULT
              });
            }
            getPreviewResult() {
              const e = (0, r.getGlobalStore)();
              this.props.fetchPreviewResult(), e.dispatch((0, l.hideDiaog)());
            }
            requestSaveStudyResult() {
              const e = (0, r.getGlobalStore)();
              this.props.requestSaveStudyResult(), e.dispatch((0, l.hideDiaog)());
            }
            justHideDialog() {
              (0, r.getGlobalStore)().dispatch((0, l.hideDiaog)());
            }
            render() {
              const {
                selected: e
              } = this.state;
              let t = e === c.NONE ? this.justHideDialog : e === c.STUDY_RESULT ? this.getPreviewResult : this.requestSaveStudyResult,
                i = this.justHideDialog;
              return a.createElement("div", {
                className: "customWrapper"
              }, a.createElement("div", {
                id: "pageMask"
              }), a.createElement("div", {
                className: "popupwrap"
              }, a.createElement("div", {
                className: "popup"
              }, a.createElement("div", {
                className: "pop_head"
              }, " Synchronizing the Data.. "), a.createElement("div", {
                className: "pop_msg"
              }, a.createElement("div", {
                className: "pop_btn"
              }, a.createElement("button", {
                className: "inclass",
                onClick: this.selectPreviewResult
              }), a.createElement("button", {
                className: "preclass",
                onClick: this.selectSendInclassResult
              }))), a.createElement("div", {
                className: "confirm_btn"
              }, a.createElement("button", {
                className: "cbtn",
                onClick: t
              }, "OK"), a.createElement("button", {
                className: "cbtn",
                onClick: i
              }, "Cancel")))));
            }
          }
          t.default = u;
        },
        4667: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.resetSketchDrawing = t.clearBoardSelection = t.clearBrushSelection = t.clearColorSelection = t.getBrushType = t.getBrushColor = void 0;
          const r = i(1957),
            l = i(822),
            c = i(8028),
            u = a(i(7592)),
            d = s(i(2084));
          t.getBrushColor = e => {
            let t;
            return e === l.PenItemType.RED && (t = "#fe0000"), e === l.PenItemType.ORANGE && (t = "#ff9e05"), e === l.PenItemType.YELLOW && (t = "#fddc01"), e === l.PenItemType.GREEN && (t = "#30aa01"), e === l.PenItemType.SKY && (t = "#53acff"), e === l.PenItemType.BLUE && (t = "#1347e9"), e === l.PenItemType.PINK && (t = "#ea6bb2"), e === l.PenItemType.PURPLE && (t = "#9c00b9"), e === l.PenItemType.BLACK && (t = "#000000"), t;
          }, t.getBrushType = e => {
            let t;
            return e === l.PenItemType.ERASER && (t = r.BrushType.ERASER), e === l.PenItemType.THIN && (t = r.BrushType.THIN_PEN), e === l.PenItemType.THICK && (t = r.BrushType.TICK_PEN), e === l.PenItemType.HIGHLIGHT && (t = r.BrushType.CINE_PEN), t;
          }, t.clearColorSelection = e => {
            e[l.PenItemType.RED] = !1, e[l.PenItemType.ORANGE] = !1, e[l.PenItemType.YELLOW] = !1, e[l.PenItemType.GREEN] = !1, e[l.PenItemType.SKY] = !1, e[l.PenItemType.BLUE] = !1, e[l.PenItemType.PINK] = !1, e[l.PenItemType.PURPLE] = !1, e[l.PenItemType.BLACK] = !1;
          }, t.clearBrushSelection = e => {
            e[l.PenItemType.ERASER] = !1, e[l.PenItemType.THIN] = !1, e[l.PenItemType.THICK] = !1, e[l.PenItemType.HIGHLIGHT] = !1;
          }, t.clearBoardSelection = e => {
            e[l.PenItemType.WHITEBOARD] = !1, e[l.PenItemType.LINEBOARD] = !1, e[l.PenItemType.IMAGE] = !1, e[l.PenItemType.SQUAREBOARD] = !1, e[l.PenItemType.FOURLINEBOARD] = !1, e[l.PenItemType.FOURLINETRACEBOARD] = !1;
          }, t.resetSketchDrawing = e => {
            e(d.initDrawingToolSelection()), e(d.setDrawingToolLoadedImageURL(void 0)), u.default.clearHistory(c.SKETCH_HISTORY_TEACHER_DRAWING_BASIC), u.default.clearHistory(c.SKETCH_HISTORY_TEACHER_DRAWING_LINEBOARD), u.default.clearHistory(c.SKETCH_HISTORY_TEACHER_DRAWING_WHITEBOARD), u.default.clearHistory(c.SKETCH_HISTORY_TEACHER_DRAWING_IMAGEBOARD), u.default.clearHistory(c.SKETCH_HISTORY_TEACHER_DRAWING_SQUAREBOARD), u.default.clearHistory(c.SKETCH_HISTORY_TEACHER_DRAWING_FOURLINEBOARD), u.default.clearHistory(c.SKETCH_HISTORY_TEACHER_DRAWING_FOURLINETRACEBOARD);
          };
        },
        822: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.PenItemType = t.PenItemGroup = void 0;
          const a = s(i(7363)),
            r = i(4184);
          !function (e) {
            e[e.BUTTON = 0] = "BUTTON", e[e.BRUSH = 1] = "BRUSH", e[e.COLOR = 2] = "COLOR", e[e.BOARD = 3] = "BOARD", e[e.TOGGLE = 4] = "TOGGLE", e[e.BOARD2 = 5] = "BOARD2", e[e.STICKER = 6] = "STICKER";
          }(t.PenItemGroup || (t.PenItemGroup = {})), function (e) {
            e[e.RESET = 0] = "RESET", e[e.ERASER = 1] = "ERASER", e[e.UNDO = 2] = "UNDO", e[e.CLEAR = 3] = "CLEAR", e[e.THIN = 4] = "THIN", e[e.THICK = 5] = "THICK", e[e.HIGHLIGHT = 6] = "HIGHLIGHT", e[e.RED = 7] = "RED", e[e.ORANGE = 8] = "ORANGE", e[e.YELLOW = 9] = "YELLOW", e[e.GREEN = 10] = "GREEN", e[e.SKY = 11] = "SKY", e[e.BLUE = 12] = "BLUE", e[e.PINK = 13] = "PINK", e[e.PURPLE = 14] = "PURPLE", e[e.BLACK = 15] = "BLACK", e[e.WHITEBOARD = 16] = "WHITEBOARD", e[e.LINEBOARD = 17] = "LINEBOARD", e[e.IMAGE = 18] = "IMAGE", e[e.SHARE = 19] = "SHARE", e[e.CROP_RESULT = 20] = "CROP_RESULT", e[e.SAVE = 21] = "SAVE", e[e.EXIT = 22] = "EXIT", e[e.BOARDPOPUP = 23] = "BOARDPOPUP", e[e.SQUAREBOARD = 24] = "SQUAREBOARD", e[e.FOURLINEBOARD = 25] = "FOURLINEBOARD", e[e.FOURLINETRACEBOARD = 26] = "FOURLINETRACEBOARD", e[e.FLOATING = 27] = "FLOATING", e[e.STICKER = 28] = "STICKER";
          }(t.PenItemType || (t.PenItemType = {}));
          class l extends a.Component {
            constructor(e) {
              super(e), this.onClickItem = this.onClickItem.bind(this);
            }
            componentWillUnmount() {
              this.selectTimer && window.clearTimeout(this.selectTimer);
            }
            onClickItem() {
              const {
                type: e,
                group: t,
                isDiabled: i,
                onClickItem: n
              } = this.props;
              i || n(e, t);
            }
            render() {
              const {
                className: e,
                name: t,
                isSelected: i,
                isDiabled: n
              } = this.props;
              return a.createElement("li", {
                className: r({
                  select: i,
                  disabled: n
                }),
                onClick: this.onClickItem
              }, a.createElement("span", {
                className: `${e}`
              }, t));
            }
          }
          t.default = l;
        },
        5797: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__awaiter || function (e, t, i, n) {
              return new (i || (i = Promise))(function (o, s) {
                function a(e) {
                  try {
                    l(n.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function r(e) {
                  try {
                    l(n.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function (e) {
                    e(t);
                  })).then(a, r);
                }
                l((n = n.apply(e, t || [])).next());
              });
            },
            r = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const l = i(4934),
            c = i(4667),
            u = r(i(2072)),
            d = r(i(6948)),
            _ = s(i(7363)),
            T = s(i(822)),
            S = s(i(9729)),
            p = i(1957),
            E = s(i(5638)),
            h = i(3195),
            m = i(1247),
            C = s(i(2084));
          class I extends _.Component {
            constructor(e) {
              super(e), this.onClickPenToolClose = () => {
                this.sketchTools.forEach(e => e.resetAll()), (0, h.getGlobalStore)().dispatch(C.setVisibilityStudentDrawingTool(!1, l.StudentDrawingToolType.BASIC_PEN)), (0, h.getGlobalStore)().dispatch(C.deactivateBasicPen());
              }, this.selectionState = [...e.drawingToolSelection];
              const {
                drawingToolType: t
              } = e;
              let i = !0;
              t !== l.StudentDrawingToolType.BASIC_PEN && t !== l.StudentDrawingToolType.REMOTE_PEN && t !== l.StudentDrawingToolType.CROP_DRAWING && t !== l.StudentDrawingToolType.PORTFOLIO || (i = !1), this.state = {
                curBgImgData: this.props.bgImgData,
                isVisibleToolbar: !0,
                isVisibleSketchArea: !0,
                isVisibleUploadBtn: i
              }, this.sketchTools = [], this.sketchTools.push(new u.default()), this.onClickPenItem = this.onClickPenItem.bind(this), this.curSelectedBoardType = l.DrawingBoardType.BASIC, this.isSaved = !1;
            }
            componentDidMount() {
              this.obserableEvent = S.default.getObserable().subscribe(e => a(this, void 0, void 0, function* () {
                if (e.type === S.EventType.STUDENT_DRAWING_VISIBLE_TOOL_BAR) this.setState({
                  isVisibleToolbar: e.params.isVisible
                }), e.params.isVisible && this.setState({
                  isVisibleSketchArea: !0
                });else if (e.type === S.EventType.STUDENT_DRAWING_VISIBLE_SKETCH_AREA) this.setState({
                  isVisibleSketchArea: e.params.isVisible
                });else if (e.type === S.EventType.STUDENT_DRAWING_FETCH_DATA) {
                  const e = this.sketchTools[l.DrawingBoardType.BASIC],
                    t = yield e.getDrawingDataUrl("png");
                  S.default.dispatch(S.EventType.STUDENT_DRAWING_FETCH_DATA_RESULT, {
                    drawingResult: t
                  });
                } else if (e.type === S.EventType.STUDENT_DRAWING_CLEAR_DRAWING) window.setTimeout(() => {
                  this.sketchTools[l.DrawingBoardType.BASIC].resetAll();
                }, 100), this.props.initDrawingToolSelection();else if (e.type === S.EventType.STUDENT_DRAWING_VISIBLE_UPLOAD_BTN) this.setState({
                  isVisibleUploadBtn: e.params.isVisible
                });else if (e.type === S.EventType.FINISH_DRAWING_STEP) {
                  const {
                    drawingToolType: e
                  } = this.props;
                  e === l.StudentDrawingToolType.CROP_DRAWING && (this.isSaved || this.setState({
                    isVisibleUploadBtn: !0
                  }));
                }
              }));
              const {
                canResetOnLoad: e
              } = this.props;
              e && window.setTimeout(() => {
                this.sketchTools[l.DrawingBoardType.BASIC].resetAll();
              }, 100), this.props.initDrawingToolSelection();
            }
            componentWillReceiveProps(e) {
              this.props.bgImgData !== e.bgImgData ? (this.setState({
                curBgImgData: e.bgImgData,
                isVisibleUploadBtn: !1
              }), this.isSaved = !1, this.sketchTools[l.DrawingBoardType.BASIC].resetAll(), window.setTimeout(() => {
                this.selectionState.forEach((e, t) => {
                  e && (this.onClickColor(t), this.onClickBrush(t));
                });
              }, 100)) : this.props.drawingToolSelection !== e.drawingToolSelection && (this.selectionState = [...e.drawingToolSelection]);
            }
            componentWillUnmount() {
              this.obserableEvent && this.obserableEvent.unsubscribe();
              const {
                canResetOnLoad: e
              } = this.props;
              e && this.sketchTools[l.DrawingBoardType.BASIC].resetAll();
            }
            onClickPenItem(e, t) {
              t === T.PenItemGroup.BUTTON ? this.onClickButton(e) : (t === T.PenItemGroup.COLOR ? ((0, c.clearColorSelection)(this.selectionState), this.onClickColor(e)) : t === T.PenItemGroup.BRUSH && ((0, c.clearBrushSelection)(this.selectionState), this.onClickBrush(e)), this.selectionState[e] = !0), this.props.setDrawingToolSelection(this.selectionState);
            }
            onClickColor(e) {
              const t = (0, c.getBrushColor)(e);
              t && this.sketchTools.forEach(e => e.setBrushColor(t));
            }
            onClickBrush(e) {
              const t = (0, c.getBrushType)(e);
              t !== p.BrushType.ERASER && t !== p.BrushType.THIN_PEN && t !== p.BrushType.TICK_PEN && t !== p.BrushType.CINE_PEN || this.sketchTools.forEach(e => e.setBrushType(t));
            }
            onClickButton(e) {
              var t,
                i,
                n,
                o,
                s,
                a,
                r = this.sketchTools[l.DrawingBoardType.BASIC];
              if (e === T.PenItemType.UNDO && (r.undo(), document.getElementById("student-app") && (null === (i = null === (t = (0, h.getGlobalStore)().getState()) || void 0 === t ? void 0 : t.contentTool) || void 0 === i ? void 0 : i.remotePen))) {
                const e = {
                  type: "remotepen-undo",
                  from: "pentool",
                  to: "app=>server"
                };
                window.curBridge.sendRemotePenData(e);
              }
              if (e === T.PenItemType.RESET && (r.resetAll(), document.getElementById("student-app") && (null === (o = null === (n = (0, h.getGlobalStore)().getState()) || void 0 === n ? void 0 : n.contentTool) || void 0 === o ? void 0 : o.remotePen))) {
                const e = {
                  type: "remotepen-clear",
                  from: "pentool",
                  to: "app=>server"
                };
                window.curBridge.sendRemotePenData(e);
              }
              if (e === T.PenItemType.CLEAR && (r.reset(), document.getElementById("student-app") && (null === (a = null === (s = (0, h.getGlobalStore)().getState()) || void 0 === s ? void 0 : s.contentTool) || void 0 === a ? void 0 : a.remotePen))) {
                const e = {
                  type: "remotepen-clear",
                  from: "pentool",
                  to: "app=>server"
                };
                window.curBridge.sendRemotePenData(e);
              }
              e === T.PenItemType.SAVE && this.onClickSaveBt(), e === T.PenItemType.EXIT && this.onClickExitBt();
            }
            onClickSaveBt() {
              return a(this, void 0, void 0, function* () {
                this.setState({
                  isVisibleUploadBtn: !1
                });
                const e = (0, h.getGlobalStore)();
                e.dispatch((0, m.showSpinner)());
                var t = this.sketchTools[l.DrawingBoardType.BASIC];
                const i = yield t.getDrawingDataUrl();
                i && E.default.playEffect(E.EffectSoundType.COMMON_ARROW_UP), window.curBridge.uploadFileToServer(i, t => {
                  const i = t.url;
                  window.curBridge.uploadStudentReport(l.ReportType.IMAGE, i), window.curBridge.sendMsgToTeacher({
                    to: l.UserMessage.Target.LAUNCHER,
                    type: l.UserMessage.Type.SUBMIT_CROP_RESULT
                  }), this.isSaved = !0, window.setTimeout(() => {
                    e.dispatch((0, m.hideSpinner)());
                  }, 150);
                });
              });
            }
            onClickExitBt() {
              const {
                doExit: e,
                drawingToolType: t
              } = this.props;
              t === l.StudentDrawingToolType.PORTFOLIO ? S.default.dispatch(S.EventType.STUDENT_DRAWING_CLICK_EXIT_BTN) : e && e();
            }
            render() {
              const {
                  drawingToolSelection: e,
                  studentDrawingCustomRect: t,
                  drawingToolType: i
                } = this.props,
                {
                  curBgImgData: n,
                  isVisibleToolbar: o,
                  isVisibleSketchArea: s,
                  isVisibleUploadBtn: a
                } = this.state,
                r = {
                  opacity: s ? 1 : 0,
                  pointerEvents: o ? "auto" : "none"
                },
                c = {
                  opacity: o ? 1 : 0,
                  pointerEvents: o ? "auto" : "none",
                  zIndex: 99999999999999
                },
                u = i === l.StudentDrawingToolType.PORTFOLIO || i === l.StudentDrawingToolType.CROP_DRAWING;
              return _.createElement("div", {
                id: "contentToolWrapper"
              }, _.createElement("div", {
                className: "contentToolWrapper",
                style: {
                  pointerEvents: "none"
                }
              }, _.createElement("div", {
                style: r
              }, _.createElement(d.default, {
                historyId: "student-sketch1",
                sketchTool: this.sketchTools[l.DrawingBoardType.BASIC],
                customRect: t,
                bgImgData: n,
                boardType: l.DrawingBoardType.BASIC,
                canSendDrawingFinishEvt: u,
                isVisible: !0
              })), _.createElement("div", {
                className: "board-menu new",
                style: c
              }, _.createElement("div", {
                className: "board-tool student"
              }, _.createElement("ul", null, _.createElement(T.default, {
                type: T.PenItemType.RESET,
                group: T.PenItemGroup.BUTTON,
                className: "reset",
                name: "RESET",
                isSelected: e[T.PenItemType.RESET],
                onClickItem: this.onClickPenItem
              })), _.createElement("ul", null, _.createElement(T.default, {
                type: T.PenItemType.ERASER,
                group: T.PenItemGroup.BRUSH,
                className: "ear",
                name: "지우개",
                isSelected: e[T.PenItemType.ERASER],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.CLEAR,
                group: T.PenItemGroup.BUTTON,
                className: "back",
                name: "전체지움",
                isSelected: !1,
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.UNDO,
                group: T.PenItemGroup.BUTTON,
                className: "backall",
                name: "이전지움",
                isSelected: !1,
                onClickItem: this.onClickPenItem
              })), _.createElement("ul", null, _.createElement(T.default, {
                type: T.PenItemType.THIN,
                group: T.PenItemGroup.BRUSH,
                className: "thin",
                name: "얇은",
                isSelected: e[T.PenItemType.THIN],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.THICK,
                group: T.PenItemGroup.BRUSH,
                className: "thick",
                name: "얇은",
                isSelected: e[T.PenItemType.THICK],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.HIGHLIGHT,
                group: T.PenItemGroup.BRUSH,
                className: "high",
                name: "얇은",
                isSelected: e[T.PenItemType.HIGHLIGHT],
                onClickItem: this.onClickPenItem
              })), _.createElement("ul", null, _.createElement(T.default, {
                type: T.PenItemType.RED,
                group: T.PenItemGroup.COLOR,
                className: "red",
                name: "빨강",
                isSelected: e[T.PenItemType.RED],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.ORANGE,
                group: T.PenItemGroup.COLOR,
                className: "orange",
                name: "빨강",
                isSelected: e[T.PenItemType.ORANGE],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.YELLOW,
                group: T.PenItemGroup.COLOR,
                className: "yellow",
                name: "노랑",
                isSelected: e[T.PenItemType.YELLOW],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.GREEN,
                group: T.PenItemGroup.COLOR,
                className: "green",
                name: "녹색",
                isSelected: e[T.PenItemType.GREEN],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.SKY,
                group: T.PenItemGroup.COLOR,
                className: "sky",
                name: "하늘",
                isSelected: e[T.PenItemType.SKY],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.BLUE,
                group: T.PenItemGroup.COLOR,
                className: "blue",
                name: "파랑",
                isSelected: e[T.PenItemType.BLUE],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.PINK,
                group: T.PenItemGroup.COLOR,
                className: "pink",
                name: "분홍",
                isSelected: e[T.PenItemType.PINK],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.PURPLE,
                group: T.PenItemGroup.COLOR,
                className: "purple",
                name: "보라",
                isSelected: e[T.PenItemType.PURPLE],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.BLACK,
                group: T.PenItemGroup.COLOR,
                className: "black",
                name: "검정",
                isSelected: e[T.PenItemType.BLACK],
                onClickItem: this.onClickPenItem
              })), a && _.createElement("b", {
                className: "up",
                onClick: () => this.onClickPenItem(T.PenItemType.SAVE, T.PenItemGroup.BUTTON)
              }, "올리기")), i === l.StudentDrawingToolType.BASIC_PEN && _.createElement("div", {
                className: "ic_pentool_close",
                onClick: this.onClickPenToolClose
              }))));
            }
          }
          t.default = I;
        },
        8046: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__awaiter || function (e, t, i, n) {
              return new (i || (i = Promise))(function (o, s) {
                function a(e) {
                  try {
                    l(n.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function r(e) {
                  try {
                    l(n.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function (e) {
                    e(t);
                  })).then(a, r);
                }
                l((n = n.apply(e, t || [])).next());
              });
            },
            r = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const l = i(4934),
            c = i(4667),
            u = r(i(2072)),
            d = r(i(6948)),
            _ = s(i(7363)),
            T = s(i(822)),
            S = s(i(9729)),
            p = i(1957);
          class E extends _.Component {
            constructor(e) {
              super(e), this.selectionState = [...e.drawingToolSelection], this.state = {
                isVisibleUploadBtn: !1
              }, this.sketchTools = [], this.sketchTools.push(new u.default()), this.onClickPenItem = this.onClickPenItem.bind(this), this.curSelectedBoardType = l.DrawingBoardType.BASIC, this.isSaved = !1;
            }
            componentDidMount() {
              this.obserableEvent = S.default.getObserable().subscribe(e => a(this, void 0, void 0, function* () {
                if (e.type === S.EventType.FINISH_DRAWING_STEP) {
                  const {
                    updateDrawingResult: e
                  } = this.props;
                  if (e) {
                    const t = this.sketchTools[l.DrawingBoardType.BASIC];
                    window.portfolioDrawingTool = t, e("");
                  }
                }
              })), window.setTimeout(() => {
                this.sketchTools[l.DrawingBoardType.BASIC].resetAll();
              }, 100), this.props.initDrawingToolSelection();
            }
            componentWillReceiveProps(e) {
              this.props.drawingToolSelection !== e.drawingToolSelection && (this.selectionState = [...e.drawingToolSelection]);
            }
            componentWillUnmount() {
              this.obserableEvent && this.obserableEvent.unsubscribe(), this.sketchTools[l.DrawingBoardType.BASIC].resetAll();
            }
            onClickPenItem(e, t) {
              t === T.PenItemGroup.BUTTON ? this.onClickButton(e) : (t === T.PenItemGroup.COLOR ? ((0, c.clearColorSelection)(this.selectionState), this.onClickColor(e)) : t === T.PenItemGroup.BRUSH && ((0, c.clearBrushSelection)(this.selectionState), this.onClickBrush(e)), this.selectionState[e] = !0), this.props.setDrawingToolSelection(this.selectionState);
            }
            onClickColor(e) {
              const t = (0, c.getBrushColor)(e);
              t && this.sketchTools.forEach(e => e.setBrushColor(t));
            }
            onClickBrush(e) {
              const t = (0, c.getBrushType)(e);
              t !== p.BrushType.ERASER && t !== p.BrushType.THIN_PEN && t !== p.BrushType.TICK_PEN && t !== p.BrushType.CINE_PEN || this.sketchTools.forEach(e => e.setBrushType(t));
            }
            onClickButton(e) {
              var t = this.sketchTools[l.DrawingBoardType.BASIC];
              e === T.PenItemType.UNDO && t.undo(), e === T.PenItemType.RESET && t.resetAll(), e === T.PenItemType.CLEAR && t.reset(), e === T.PenItemType.SAVE && this.onClickSaveBt(), e === T.PenItemType.EXIT && this.onClickExitBt();
            }
            onClickSaveBt() {
              this.isSaved = !0, this.setState({
                isVisibleUploadBtn: !1
              });
            }
            onClickExitBt() {
              S.default.dispatch(S.EventType.STUDENT_DRAWING_CLICK_EXIT_BTN);
            }
            render() {
              const {
                  isVisibleToolbar: e,
                  drawingToolSelection: t,
                  studentDrawingCustomRect: i
                } = this.props,
                {
                  isVisibleUploadBtn: n
                } = this.state,
                o = {
                  opacity: e ? 1 : 0,
                  pointerEvents: e ? "auto" : "none"
                };
              return _.createElement("div", {
                id: "contentToolWrapper"
              }, _.createElement("div", {
                className: "contentToolWrapper",
                style: {
                  pointerEvents: "none"
                }
              }, _.createElement("div", {
                style: {
                  opacity: 1,
                  pointerEvents: "auto",
                  position: "absolute",
                  width: "1280px",
                  height: "800px",
                  top: "0px"
                }
              }, _.createElement(d.default, {
                historyId: "student-sketch1",
                sketchTool: this.sketchTools[l.DrawingBoardType.BASIC],
                customRect: i,
                canSendDrawingStartEvt: !0,
                canSendDrawingFinishEvt: !0,
                isVisible: !0
              })), _.createElement("div", {
                className: "board-menu",
                style: o
              }, _.createElement("div", {
                className: "board-tool"
              }, _.createElement("ul", null, _.createElement(T.default, {
                type: T.PenItemType.ERASER,
                group: T.PenItemGroup.BRUSH,
                className: "ear",
                name: "지우개",
                isSelected: t[T.PenItemType.ERASER],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.CLEAR,
                group: T.PenItemGroup.BUTTON,
                className: "back",
                name: "전체지움",
                isSelected: !1,
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.UNDO,
                group: T.PenItemGroup.BUTTON,
                className: "backall",
                name: "이전지움",
                isSelected: !1,
                onClickItem: this.onClickPenItem
              })), _.createElement("ul", {
                style: {
                  marginLeft: "22px"
                }
              }, _.createElement(T.default, {
                type: T.PenItemType.THIN,
                group: T.PenItemGroup.BRUSH,
                className: "thin",
                name: "얇은",
                isSelected: t[T.PenItemType.THIN],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.THICK,
                group: T.PenItemGroup.BRUSH,
                className: "thick",
                name: "얇은",
                isSelected: t[T.PenItemType.THICK],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.HIGHLIGHT,
                group: T.PenItemGroup.BRUSH,
                className: "high",
                name: "얇은",
                isSelected: t[T.PenItemType.HIGHLIGHT],
                onClickItem: this.onClickPenItem
              })), _.createElement("ul", {
                style: {
                  marginLeft: "22px"
                }
              }, _.createElement(T.default, {
                type: T.PenItemType.RED,
                group: T.PenItemGroup.COLOR,
                className: "red",
                name: "빨강",
                isSelected: t[T.PenItemType.RED],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.ORANGE,
                group: T.PenItemGroup.COLOR,
                className: "orange",
                name: "빨강",
                isSelected: t[T.PenItemType.ORANGE],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.YELLOW,
                group: T.PenItemGroup.COLOR,
                className: "yellow",
                name: "노랑",
                isSelected: t[T.PenItemType.YELLOW],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.GREEN,
                group: T.PenItemGroup.COLOR,
                className: "green",
                name: "녹색",
                isSelected: t[T.PenItemType.GREEN],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.SKY,
                group: T.PenItemGroup.COLOR,
                className: "sky",
                name: "하늘",
                isSelected: t[T.PenItemType.SKY],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.BLUE,
                group: T.PenItemGroup.COLOR,
                className: "blue",
                name: "파랑",
                isSelected: t[T.PenItemType.BLUE],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.PINK,
                group: T.PenItemGroup.COLOR,
                className: "pink",
                name: "분홍",
                isSelected: t[T.PenItemType.PINK],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.PURPLE,
                group: T.PenItemGroup.COLOR,
                className: "purple",
                name: "보라",
                isSelected: t[T.PenItemType.PURPLE],
                onClickItem: this.onClickPenItem
              }), _.createElement(T.default, {
                type: T.PenItemType.BLACK,
                group: T.PenItemGroup.COLOR,
                className: "black",
                name: "검정",
                isSelected: t[T.PenItemType.BLACK],
                onClickItem: this.onClickPenItem
              })), n && _.createElement("b", {
                className: "up",
                onClick: () => this.onClickPenItem(T.PenItemType.SAVE, T.PenItemGroup.BUTTON)
              }, "올리기")))));
            }
          }
          t.default = E;
        },
        1957: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.BrushType = void 0;
          const o = i(3493),
            s = (n(i(5311)), i(3195));
          var a;
          !function (e) {
            e[e.ERASER = 0] = "ERASER", e[e.THIN_PEN = 1] = "THIN_PEN", e[e.TICK_PEN = 2] = "TICK_PEN", e[e.CINE_PEN = 3] = "CINE_PEN";
          }(a = t.BrushType || (t.BrushType = {})), t.default = class {
            constructor() {
              this._arrx = [], this._arry = [], this.selectedColor = "black", this.lastPos = {
                x: 0,
                y: 0
              }, this.isDown = !1, this.brushType = a.THIN_PEN, this._worker = null, this.scale = {
                scaleX: 1,
                scaleY: 1
              };
            }
            changeCanvas(e, t, i, n, s) {
              this._worker = e, this.canvas = t, this.subCanvas = i, this.offCanvas = n, this.offSubCanvas = s, this.changeBrush(this.brushType), this._delayDraw = o(this.draw, 0);
            }
            changeCanvasOfNoWorker(e, t) {
              this.canvas = e, this.subCanvas = t, this.context = e.getContext("2d"), this.subContext = t.getContext("2d"), this.changeBrush(this.brushType);
            }
            onTouchStart(e) {
              this.isDown = !0, this.scale = this.getScale();
              const t = this.subCanvas.getBoundingClientRect();
              // 2023-03-02 pageX,Y => clientX,Y
              this.lastPos.x = e.targetTouches[0].clientX / this.scale.scaleX - t.left / this.scale.scaleX, this.lastPos.y = e.targetTouches[0].clientY / this.scale.scaleY - t.top / this.scale.scaleY, this._arrx = [], this._arry = [], this._arrx.push(this.lastPos.x), this._arry.push(this.lastPos.y);
            }
            onTouchMove(e) {
              if (!this.isDown) return !1;
              const t = this.subCanvas.getBoundingClientRect(),
                i = this.lastPos.x,
                n = this.lastPos.y;
              // 2023-03-02 pageX,Y => clientX,Y
              return this.lastPos.x = e.targetTouches[0].clientX / this.scale.scaleX - t.left / this.scale.scaleX, this.lastPos.y = e.targetTouches[0].clientY / this.scale.scaleY - t.top / this.scale.scaleY, this._arrx.push(this.lastPos.x), this._arry.push(this.lastPos.y), this.canvas.transferControlToOffscreen ? this._delayDraw(i, n, this.lastPos.x, this.lastPos.y) : this.draw(i, n, this.lastPos.x, this.lastPos.y), !0;
            }
            onTouchEnd(e) {
              this.isDown = !1;
              const t = this.subCanvas.getBoundingClientRect(),
                i = this.lastPos.x,
                n = this.lastPos.y;
              // 2023-03-02 pageX,Y => clientX,Y
              this.lastPos.x = e.changedTouches[0].clientX / this.scale.scaleX - t.left / this.scale.scaleY, this.lastPos.y = e.changedTouches[0].clientY / this.scale.scaleY - t.top / this.scale.scaleY, this.canvas.transferControlToOffscreen ? i === this.lastPos.x && n === this.lastPos.y ? (this._delayDraw(i, n, this.lastPos.x + 1, this.lastPos.y + 1), this._arrx.push(this.lastPos.x + 1), this._arry.push(this.lastPos.y + 1)) : (this._delayDraw(i, n, this.lastPos.x, this.lastPos.y), this._arrx.push(this.lastPos.x), this._arry.push(this.lastPos.y)) : i === this.lastPos.x && n === this.lastPos.y ? (this.draw(i, n, this.lastPos.x + 1, this.lastPos.y + 1), this._arrx.push(this.lastPos.x + 1), this._arry.push(this.lastPos.y + 1)) : (this.draw(i, n, this.lastPos.x, this.lastPos.y), this._arrx.push(this.lastPos.x), this._arry.push(this.lastPos.y)), this.sendRemotePenData(), this._swapDrawing();
            }
            onMouseDown(e) {
              this.isDown = !0, this.scale = this.getScale();
              const t = this.subCanvas.getBoundingClientRect();
              this.lastPos.x = e.clientX / this.scale.scaleX - t.left / this.scale.scaleX, this.lastPos.y = e.clientY / this.scale.scaleY - t.top / this.scale.scaleY, this._arrx = [], this._arry = [], this._arrx.push(this.lastPos.x), this._arry.push(this.lastPos.y);
            }
            onMouseMove(e) {
              if (!this.isDown) return !1;
              const t = this.subCanvas.getBoundingClientRect(),
                i = this.lastPos.x,
                n = this.lastPos.y;
              return this.lastPos.x = e.clientX / this.scale.scaleX - t.left / this.scale.scaleX, this.lastPos.y = e.clientY / this.scale.scaleY - t.top / this.scale.scaleY, this._arrx.push(this.lastPos.x), this._arry.push(this.lastPos.y), this.canvas.transferControlToOffscreen ? this._delayDraw(i, n, this.lastPos.x, this.lastPos.y) : this.draw(i, n, this.lastPos.x, this.lastPos.y), !0;
            }
            onMouseUp(e) {
              if (this.isDown) {
                const t = this.subCanvas.getBoundingClientRect(),
                  i = this.lastPos.x,
                  n = this.lastPos.y;
                this.lastPos.x = e.clientX / this.scale.scaleX - t.left / this.scale.scaleX, this.lastPos.y = e.clientY / this.scale.scaleY - t.top / this.scale.scaleY, this.canvas.transferControlToOffscreen ? i === this.lastPos.x && n === this.lastPos.y ? (this._delayDraw(i, n, this.lastPos.x + 1, this.lastPos.y + 1), this._arrx.push(this.lastPos.x + 1), this._arry.push(this.lastPos.y + 1)) : (this._delayDraw(i, n, this.lastPos.x, this.lastPos.y), this._arrx.push(this.lastPos.x), this._arry.push(this.lastPos.y)) : i === this.lastPos.x && n === this.lastPos.y ? (this.draw(i, n, this.lastPos.x + 1, this.lastPos.y + 1), this._arrx.push(this.lastPos.x + 1), this._arry.push(this.lastPos.y + 1)) : (this.draw(i, n, this.lastPos.x, this.lastPos.y), this._arrx.push(this.lastPos.x), this._arry.push(this.lastPos.y)), this.sendRemotePenData(), this._swapDrawing();
              }
              this.isDown = !1;
            }
            onMouseOut(e) {
              this.isDown && this._swapDrawing(), this.isDown = !1;
            }
            sendRemotePenData() {
              var e, t;
              if (document.getElementById("student-app") && (null === (t = null === (e = (0, s.getGlobalStore)().getState()) || void 0 === e ? void 0 : e.contentTool) || void 0 === t ? void 0 : t.remotePen)) {
                const e = {
                  type: "remotepen-data",
                  from: "pentool",
                  to: "app=>server",
                  msg: {
                    info: {
                      mode: this.brushType,
                      color: this.selectedColor,
                      scale: this.scale
                    },
                    arrx: this._arrx,
                    arry: this._arry
                  }
                };
                window.curBridge.sendRemotePenData(e);
              }
            }
            changeBrush(e) {
              this.brushType = e, e === a.ERASER && this.setupBrushEraser(), e === a.THIN_PEN && this.setupBrushThin(), e === a.TICK_PEN && this._setupBrushTick(), e === a.CINE_PEN && this.setupBrushCinePen();
            }
            changeColor(e) {
              this.selectedColor = e, window.Worker && this.canvas.transferControlToOffscreen ? null !== this._worker && this._toWorker({
                type: "changeColor",
                selectedColor: e
              }) : this.curDrawingContext.strokeStyle = this.selectedColor;
            }
            _swapDrawing() {
              this.canvas.transferControlToOffscreen ? this.brushType !== a.ERASER && null !== this._worker && this._toWorker({
                type: "swapDrawing"
              }) : this.brushType !== a.ERASER && (this.context.drawImage(this.curDrawingCanvas, 0, 0), this.curDrawingContext.clearRect(0, 0, this.curDrawingCanvas.width, this.curDrawingCanvas.height));
            }
            draw(e, t, i, n) {
              this.canvas.transferControlToOffscreen ? this._worker && this._toWorker({
                type: "draw",
                info: {
                  srcX: e,
                  srcY: t,
                  destX: i,
                  destY: n
                }
              }) : (this.curDrawingContext.beginPath(), this.curDrawingContext.moveTo(e, t), this.curDrawingContext.lineTo(i, n), this.curDrawingContext.stroke(), this.curDrawingContext.closePath());
            }
            _toWorker(e, t) {
              this._worker && (t ? this._worker.postMessage(e, t) : this._worker.postMessage(e));
            }
            setupBrushThin() {
              this.setupPenBrush(2, this.selectedColor);
            }
            _setupBrushTick() {
              this.setupPenBrush(7, this.selectedColor);
            }
            setupPenBrush(e, t) {
              window.Worker && this.canvas.transferControlToOffscreen ? (this.subCanvas.style.opacity = String(1), null !== this._worker && this._toWorker({
                type: "setupPenBrush",
                width: e,
                selectedColor: t
              })) : (this.context.globalAlpha = 1, this.subCanvas.style.opacity = String(1), this.curDrawingCanvas = this.subCanvas, this.curDrawingContext = this.subContext, this.curDrawingContext.lineCap = "round", this.curDrawingContext.lineJoin = "round", this.curDrawingContext.lineWidth = e, this.curDrawingContext.strokeStyle = t, this.curDrawingContext.globalCompositeOperation = "source-over", this.context.globalCompositeOperation = "source-over");
            }
            setupBrushEraser() {
              window.Worker && this.canvas.transferControlToOffscreen ? (this.subCanvas.style.opacity = String(1), null !== this._worker && this._toWorker({
                type: "setupBrushEraser"
              })) : (this.context.globalAlpha = 1, this.subCanvas.style.opacity = String(1), this.curDrawingCanvas = this.canvas, this.curDrawingContext = this.context, this.curDrawingContext.lineCap = "round", this.curDrawingContext.lineJoin = "round", this.curDrawingContext.lineWidth = 30, this.curDrawingContext.globalCompositeOperation = "destination-out");
            }
            setupBrushCinePen() {
              window.Worker && this.canvas.transferControlToOffscreen ? (this.subCanvas.style.opacity = String(.2), null !== this._worker && this._toWorker({
                type: "setupBrushCinePen"
              })) : (this.context.globalAlpha = .2, this.subCanvas.style.opacity = String(.2), this.curDrawingCanvas = this.subCanvas, this.curDrawingContext = this.subContext, this.curDrawingContext.lineCap = "round", this.curDrawingContext.lineJoin = "round", this.curDrawingContext.lineWidth = 15, this.curDrawingContext.strokeStyle = this.selectedColor, this.curDrawingContext.globalCompositeOperation = "source-over", this.context.globalCompositeOperation = "source-over");
            }
            getScale() {
              var e = "";
              // 2023-03-02
              if($("#student > div:nth-child(1)").css("transform") === "none") {
                  e = $("#student_m > div:nth-child(1)").css("transform"), console.log("getScale mmm", e);
              } else {
                e = $("#student > div:nth-child(1)").css("transform"), console.log("getScale", e);
              }
              const t = e.substring(e.indexOf("(") + 1, e.indexOf(")")).split(",");
              return {
                scaleX: parseFloat(t[0]),
                scaleY: parseFloat(t[3])
              };
            }
          };
        },
        139: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = class {
            constructor(e = 10, t = [], i = !1) {
              this.current = null, this.undoLimitCnt = e, this.undoList = t, this.redoList = [], this.current = null, this.isDebugMode = i;
            }
            getCurrent() {
              return this.current;
            }
            keep(e) {
              try {
                this.redoList = [], this.undoList.length >= this.undoLimitCnt && this.undoList.shift(), this.undoList.push(e), this.current = e;
              } finally {
                this.print();
              }
            }
            undo() {
              try {
                return this.undoList.length > 0 ? (this.redoList.length >= this.undoLimitCnt && this.redoList.shift(), this.current = this.undoList.pop(), this.redoList.push(this.current), this.current) : null;
              } finally {
                this.print();
              }
            }
            redo() {
              try {
                return this.redoList.length > 0 && this.current ? (this.undoList.push(this.current), this.current = this.redoList.pop(), this.current) : null;
              } finally {
                this.print();
              }
            }
            canRedo() {
              return this.redoList.length > 0;
            }
            canUndo() {
              return this.undoList.length > 0 || null != this.current;
            }
            clear() {
              this.undoList = [], this.redoList = [], this.current = null, this.print();
            }
            getLast() {
              return this.undoList.length > 0 ? this.undoList[this.undoList.length - 1] : null;
            }
            print() {
              this.isDebugMode && window.cfg_debug && console.log(`${this.undoList}, -> ${this.current} <- , ${this.redoList.slice(0).reverse()}`);
            }
          };
        },
        6948: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const r = a(i(7592)),
            l = s(i(7363)),
            c = s(i(8028)),
            u = s(i(9729));
          class d extends l.Component {
            constructor(e) {
              super(e);
              const {
                  historyId: t
                } = this.props,
                i = this.getCanvasArea(this.props.bgImgData);
              this.state = {
                left: i.x,
                top: i.y,
                width: i.width,
                height: i.height,
                bgImgWidth: i.width,
                bgImgHeight: i.height
              }, this.history = r.default.getHistory(t);
            }
            componentDidMount() {
              this.addCanvasListener(this.canvas), this.addCanvasListener(this.subCanvas);
              const {
                sketchTool: e,
                boardType: t
              } = this.props;
              e.changeCanvas(this.canvas, this.subCanvas, this.history, this.bgCanvas, t), this.setBackgroundImage(this.props.bgImgData);
            }
            componentWillUnmount() {
              this.removeCanvasListener(this.canvas), this.removeCanvasListener(this.subCanvas);
            }
            componentWillReceiveProps(e) {
              if (e.bgImgData && this.props.bgImgData !== e.bgImgData) {
                const t = this.getCanvasArea(e.bgImgData);
                this.setBackgroundImage(e.bgImgData), this.setState({
                  left: t.x,
                  top: t.y,
                  width: t.width,
                  height: t.height,
                  bgImgWidth: e.bgImgData.width,
                  bgImgHeight: e.bgImgData.height
                });
              }
            }
            getCanvasArea(e) {
              const {
                customRect: t
              } = this.props;
              let i, n, o, s;
              return t ? (n = t.x, i = t.y, o = t.width, s = t.height) : (i = 0, n = 0, o = c.DEFAULT_SCREEN_WIDTH, s = c.DEFAULT_SCREEN_HEIGHT), {
                x: n,
                y: i,
                width: o,
                height: s
              };
            }
            render() {
              const {
                  left: e,
                  top: t,
                  width: i,
                  height: n
                } = this.state,
                o = {
                  position: "absolute",
                  left: e,
                  top: t,
                  userSelect: "none"
                },
                s = {
                  position: "absolute",
                  backgroundColor: "white",
                  top: 0,
                  left: 0,
                  width: c.DEFAULT_SCREEN_WIDTH,
                  height: c.DEFAULT_SCREEN_HEIGHT
                },
                {
                  bgImgData: a
                } = this.props,
                r = Object.assign({}, o),
                u = Object.assign({}, o);
              let d = {
                width: "1280px",
                height: "100%",
                position: "relative"
              };
              return null !== this.props.isVisible && (d = this.props.isVisible ? {
                width: "1280px",
                height: "100%",
                position: "relative",
                display: "block"
              } : {
                width: "1280px",
                height: "100%",
                position: "relative",
                display: "none"
              }), l.createElement("div", {
                id: "sketchFieldRoot",
                style: d
              }, l.createElement("div", null, a && l.createElement("div", {
                style: s
              }, l.createElement("canvas", {
                id: "bgCanvas",
                style: o,
                width: c.DEFAULT_SCREEN_WIDTH,
                height: c.DEFAULT_SCREEN_HEIGHT,
                ref: e => {
                  e && (this.bgCanvas = e);
                }
              })), l.createElement("canvas", {
                style: r,
                className: "unselectable",
                width: i,
                height: n,
                ref: e => {
                  e && (this.canvas = e);
                }
              }), l.createElement("canvas", {
                id: "subCanvas",
                style: u,
                className: "unselectable",
                width: i,
                height: n,
                ref: e => {
                  e && (this.subCanvas = e);
                }
              })));
            }
            addCanvasListener(e) {
              e.addEventListener("mousedown", this.handleMouseDown.bind(this)), e.addEventListener("mousemove", this.handleMouseMove.bind(this)), e.addEventListener("mouseup", this.handleMouseUp.bind(this)), e.addEventListener("mouseout", this.handleMouseOut.bind(this)), e.addEventListener("touchstart", this.handleTouchStart.bind(this)), e.addEventListener("touchmove", this.handleTouchMove.bind(this)), e.addEventListener("touchend", this.handleTouchEnd.bind(this));
            }
            removeCanvasListener(e) {
              e.removeEventListener("mousedown", this.handleMouseDown.bind(this)), e.removeEventListener("mousemove", this.handleMouseMove.bind(this)), e.removeEventListener("mouseup", this.handleMouseUp.bind(this)), e.removeEventListener("mouseout", this.handleMouseOut.bind(this)), e.removeEventListener("touchstart", this.handleTouchStart.bind(this)), e.removeEventListener("touchmove", this.handleTouchMove.bind(this)), e.removeEventListener("touchend", this.handleTouchEnd.bind(this));
            }
            handleMouseDown(e) {
              this.props.sketchTool.onMouseDown(e);
              const {
                canSendDrawingStartEvt: t
              } = this.props;
              t && u.default.dispatch(u.EventType.START_DRAWING_STEP);
            }
            handleMouseMove(e) {
              return this.props.sketchTool.onMouseMove(e);
            }
            handleMouseUp(e) {
              u.default.dispatch(u.EventType.DRAW_TOUCH_END), this.props.sketchTool.onMouseUp(e);
              const {
                canSendDrawingFinishEvt: t
              } = this.props;
              t && u.default.dispatch(u.EventType.FINISH_DRAWING_STEP);
            }
            handleMouseOut(e) {
              this.props.sketchTool.onMouseOut(e);
            }
            handleTouchStart(e) {
              this.props.sketchTool.onTouchStart(e);
              const {
                canSendDrawingStartEvt: t
              } = this.props;
              t && u.default.dispatch(u.EventType.START_DRAWING_STEP);
            }
            handleTouchMove(e) {
              return this.props.sketchTool.onTouchMove(e);
            }
            handleTouchEnd(e) {
              u.default.dispatch(u.EventType.DRAW_TOUCH_END), this.props.sketchTool.onTouchEnd(e);
              const {
                canSendDrawingFinishEvt: t
              } = this.props;
              t && u.default.dispatch(u.EventType.FINISH_DRAWING_STEP);
            }
            setBackgroundImage(e) {
              const {
                sketchTool: t
              } = this.props;
              e && t.setBackgroundImage(e.base64, e.width, e.height, e.resizeRatio);
            }
          }
          t.default = d;
        },
        7592: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const o = n(i(139)),
            s = new class {
              constructor() {
                this.historyList = [];
              }
              getHistory(e) {
                const t = this.historyList.find(t => t.id === e);
                if (t) return t.history;
                const i = new o.default();
                return this.historyList.push({
                  id: e,
                  history: i
                }), i;
              }
              clearAllHistory() {
                this.historyList.forEach(e => e.history.clear());
              }
              clearHistory(e) {
                const t = this.historyList.find(t => t.id === e);
                t && t.history.clear();
              }
            }();
          t.default = s;
        },
        2072: function (e, t, i) {
          "use strict";
  
          var n = this && this.__awaiter || function (e, t, i, n) {
              return new (i || (i = Promise))(function (o, s) {
                function a(e) {
                  try {
                    l(n.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function r(e) {
                  try {
                    l(n.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function (e) {
                    e(t);
                  })).then(a, r);
                }
                l((n = n.apply(e, t || [])).next());
              });
            },
            o = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.CanvasExportType = void 0;
          const s = o(i(1957)),
            a = i(8028),
            r = o(i(9306)),
            l = i(3195),
            c = o(i(5311));
          var u;
          !function (e) {
            e[e.JPG = 0] = "JPG", e[e.PNG = 1] = "PNG";
          }(u = t.CanvasExportType || (t.CanvasExportType = {}));
          const d = 600;
          t.default = class {
            constructor() {
              this._worker = null, this.getDrawingDataUrl = (e = "jpeg") => n(this, void 0, void 0, function* () {
                if (this.canvas.transferControlToOffscreen) {
                  let e = document.querySelector("#sketchFieldRoot");
                  return null === e && (e = document.querySelector(".launcher-teaching")), this.getScale(), yield r.default.toPng(e, {
                    style: {
                      top: "0px",
                      left: "0px"
                    }
                  });
                }
                if (this.bgCanvas) {
                  const t = this.bgCanvas.getContext("2d");
                  if (t) return t.drawImage(this.canvas, 0, 0), "png" === e ? this.bgCanvas.toDataURL() : this.bgCanvas.toDataURL("image/jpeg", 90);
                }
                return "png" === e ? this.canvas.toDataURL() : this.makeJpegDataURL();
              }), this.brush = new s.default();
            }
            changeCanvas(e, t, i, n, o) {
              if (this.canvas = e, this.bgCanvas = n, this.history = i, e.transferControlToOffscreen) {
                const i = e.transferControlToOffscreen(),
                  n = t.transferControlToOffscreen();
                this.offCanvas = i, this.offSubCanvas = n, window.cfg_debug && console.log("can not get draw worker"), this._worker = new Worker("./mathalive/draw.worker.js"), this._worker.onmessage = e => {
                  if ("remotePenDraw_complete" === e.data) {
                    const e = document.getElementById("subCanvas"),
                      t = this.toDataUrl();
                    this.history.keep({
                      target: e,
                      prevState: this.prevDrawingData,
                      curState: t
                    });
                  } else "remotePenDraw_start" === e.data && (this.prevDrawingData = this.toDataUrl());
                }, null !== this._worker && this._toWorker({
                  type: "init",
                  canvas: this.offCanvas,
                  subCanvas: this.offSubCanvas
                }, [this.offCanvas, this.offSubCanvas]), this.brush.changeCanvas(this._worker, e, t, this.offCanvas, this.offSubCanvas);
              } else this.context = e.getContext("2d"), this.subContext = t.getContext("2d"), this.brush.changeCanvasOfNoWorker(e, t);
              this.history.canUndo() && this.initCanvasFromHistory();
            }
            _toWorker(e, t) {
              this._worker && (t ? this._worker.postMessage(e, t) : this._worker.postMessage(e));
            }
            getWorker() {
              return this._worker;
            }
            setBackgroundImage(e, t, i, n) {
              if (!this.bgCanvas) return;
              const o = this.bgCanvas.getContext("2d");
              if (!o) return;
              o.globalAlpha = 1;
              const s = new Image();
              s.src = e, s.onload = () => {
                let e = s.height / n,
                  t = s.width / n;
                if (t < d && e < d) {
                  let i = 1;
                  i = t > e ? d / t : d / e, t *= i, e *= i;
                }
                o.fillStyle = "white", o.fillRect(0, 0, a.DEFAULT_SCREEN_WIDTH, a.DEFAULT_SCREEN_HEIGHT);
                const i = a.DEFAULT_SCREEN_WIDTH / 2 - t / 2,
                  r = a.DEFAULT_SCREEN_HEIGHT / 2 - e / 2;
                o.drawImage(s, i, r, t, e);
              };
            }
            setBrushType(e) {
              this.brush.changeBrush(e);
            }
            setBrushColor(e) {
              this.brush.changeColor(e);
            }
            undo() {
              if (this.history.canUndo()) {
                const e = this.history.undo();
                e && this.reRender(e.prevState);
              }
            }
            redo() {
              if (this.history.canRedo()) {
                const e = this.history.redo();
                e && this.reRender(e.curState);
              }
            }
            reset() {
              null !== this._worker ? this._toWorker({
                type: "clearScreen"
              }) : (this.clearScreen(this.context), this.clearScreen(this.subContext));
              const e = this.history.getLast();
              if (e) {
                const t = e.target;
                this.history.keep({
                  target: t,
                  prevState: e.curState,
                  curState: e.curState
                });
              }
            }
            resetAll() {
              null !== this._worker ? this._toWorker({
                type: "clearScreen"
              }) : (this.clearScreen(this.context), this.clearScreen(this.subContext)), this.history.clear();
            }
            makeJpegDataURL() {
              const e = this.canvas.width,
                t = this.canvas.height,
                i = this.canvas.getContext("2d"),
                n = i.getImageData(0, 0, e, t),
                o = i.globalCompositeOperation;
              i.globalCompositeOperation = "destination-over", i.fillStyle = "white", i.fillRect(0, 0, this.canvas.width, this.canvas.height);
              const s = this.canvas.toDataURL("image/jpeg", 90);
              return i.clearRect(0, 0, e, t), i.putImageData(n, 0, 0), i.globalCompositeOperation = o, s;
            }
            onTouchStart(e) {
              this.prevDrawingData = this.toDataUrl(), this.brush.onTouchStart(e);
            }
            onTouchMove(e) {
              return this.brush.onTouchMove(e);
            }
            onTouchEnd(e) {
              var t, i;
              this.brush.onTouchEnd(e), this.saveDrawingHistory(e), document.getElementById("student-app") && (null === (i = null === (t = (0, l.getGlobalStore)().getState()) || void 0 === t ? void 0 : t.contentTool) || void 0 === i ? void 0 : i.remotePen) && window.setTimeout(() => {
                this.resetAll();
              }, 1e3);
            }
            onMouseDown(e) {
              this.prevDrawingData = this.toDataUrl(), this.brush.onMouseDown(e);
            }
            onMouseMove(e) {
              return this.brush.onMouseMove(e);
            }
            onMouseUp(e) {
              var t, i;
              this.brush.onMouseUp(e), this.saveDrawingHistory(e), document.getElementById("student-app") && (null === (i = null === (t = (0, l.getGlobalStore)().getState()) || void 0 === t ? void 0 : t.contentTool) || void 0 === i ? void 0 : i.remotePen) && window.setTimeout(() => {
                this.resetAll();
              }, 1e3);
            }
            onMouseOut(e) {
              this.brush.onMouseOut(e);
            }
            reRender(e) {
              if (null !== this._worker) this._toWorker({
                type: "reRender",
                base64: e
              });else {
                const t = new Image();
                t.src = e, t.onload = () => {
                  this.clearScreen(this.context), this.context.save(), this.context.globalCompositeOperation = "source-over", this.context.globalAlpha = 1, this.context.drawImage(t, 0, 0), this.context.restore();
                };
              }
            }
            saveDrawingHistory(e) {
              const t = e.target,
                i = this.toDataUrl();
              this.history.keep({
                target: t,
                prevState: this.prevDrawingData,
                curState: i
              });
            }
            toDataUrl(e) {
              return null !== e && e === u.JPG ? this.canvas.toDataURL("image/jpeg", 90) : this.canvas.toDataURL();
            }
            clearScreen(e) {
              e.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
            initCanvasFromHistory() {
              const e = this.history.getCurrent();
              e && this.reRender(e.curState);
            }
            getScale() {
              var e = "";
              (0, c.default)("#teacher-app > div:nth-child(1)").css("transform") ? (e = (0, c.default)("#teacher-app > div:nth-child(1)").css("transform"), (0, c.default)("#teacher-app > div:nth-child(1)").css("top"), (0, c.default)("#teacher-app > div:nth-child(1)").css("left")) : (e = (0, c.default)("#student-app > div:nth-child(1)").css("transform"), (0, c.default)("#student-app > div:nth-child(1)").css("top"), (0, c.default)("#student-app > div:nth-child(1)").css("left"));
              const t = e.substring(e.indexOf("(") + 1, e.indexOf(")")).split(",");
              return {
                scaleX: parseFloat(t[0]),
                scaleY: parseFloat(t[3])
              };
            }
          };
        },
        2104: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.EventSubject = void 0;
          const n = i(9993);
          class o {
            constructor() {
              this.subject = new n.Subject();
            }
            dispatch(e, t) {
              this.subject.next({
                type: e,
                params: t
              });
            }
            getObserable() {
              return this.subject;
            }
          }
          t.EventSubject = o;
          const s = new o();
          t.default = s;
        },
        3129: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.EventType = void 0, function (e) {
            e.CHANGE_KEYBORAD_STATE = "CHANGE_KEYBORAD_STATE", e.START_CONTENT = "START_CONTENT", e.FINISH_CONTENT = "FINISH_CONTENT", e.MOVE_CONTENT = "MOVE_CONTENT", e.DRAW_TOUCH_END = "draw_touch_end", e.CONTENT_TO_CONTENT = "CONTENT_TO_CONTENT", e.START_TAKE_PHOTO = "START_TAKE_PHOTO", e.FINISH_TAKE_PHOTO = "FINISH_TAKE_PHOTO", e.START_LOCK = "START_LOCK", e.FINISH_LOCK = "FINISH_LOCK", e.START_CROP_DRAWING = "START_CROP_DRAWING", e.FINISH_CROP_DRAWING = "FINISH_CROP_DRAWING", e.STREAM_IS_READY = "STREAM_IS_READY", e.NETWORK_IS_READY = "NETWORK_IS_READY", e.DRAWING_LOAD_LOAD_FINISH = "DRAWING_LOAD_LOAD_FINISH", e.LESSON_COMPLETE_APPLY = "LESSON_COMPLETE_APPLY", e.LESSON_COMPLETE_CANCEL = "LESSON_COMPLETE_CANCEL", e.NOTIFY_SHOW_TEACHING_TOOL_BAR = "NOTIFY_SHOW_TEACHING_TOOL_BAR", e.HIDE_TEACHING_TOOL_BAR = "HIDE_TEACHING_TOOL_BAR", e.CLOSE_TEACHING_TOOL_ITEM = "CLOSE_TEACHING_TOOL_ITEM", e.DEACTIVATE_TEACHING_TOOL_ITEM = "DEACTIVATE_TEACHING_TOOL_ITEM", e.SUBMIT_PART_LESSON = "SUBMIT_PART_LESSON", e.SUBMIT_PART_LESSON_NAME = "SUBMIT_PART_LESSON_NAME", e.STAMP_CANDIDATE_ALL_STUDENT = "STAMP_CANDIDATE_ALL_STUDENT", e.APPLY_STAMP_TO_STUDENT = "APPLY_STAMP_TO_STUDENT", e.CHANGED_LOGIN_STUDENT_PROFILE = "CHANGED_LOGIN_STUDENT_PROFILE", e.STUDENT_DRAWING_VISIBLE_TOOL_BAR = "STUDENT_DRAWING_VISIBLE_TOOL_BAR", e.STUDENT_DRAWING_FETCH_DATA = "STUDENT_DRAWING_FETCH_DATA", e.STUDENT_DRAWING_FETCH_DATA_RESULT = "STUDENT_DRAWING_FETCH_DATA_RESULT", e.STUDENT_DRAWING_VISIBLE_SKETCH_AREA = "STUDENT_DRAWING_VISIBLE_SKETCH_AREA", e.STUDENT_DRAWING_CLEAR_DRAWING = "STUDENT_DRAWING_CLEAR_DRAWING", e.STUDENT_DRAWING_VISIBLE_UPLOAD_BTN = "STUDENT_DRAWING_VISIBLE_UPLOAD_BTN", e.STUDENT_DRAWING_CLICK_EXIT_BTN = "STUDENT_DRAWING_CLICK_EXIT_BTN", e.STUDENT_DRAWING_START_DRAWING = "STUDENT_DRAWING_START_DRAWING", e.STUDENT_DRAWING_FINISH_DRAWING = "STUDENT_DRAWING_FINISH_DRAWING", e.START_DRAWING_STEP = "START_DRAWING_STEP", e.FINISH_DRAWING_STEP = "FINISH_DRAWING_STEP", e.START_TEACHING_TOOL_ITEM = "START_TEACHING_TOOL_ITEM", e.FINISH_TEACHING_TOOL_ITEM = "FINISH_TEACHING_TOOL_ITEM", e.NOTIFY_STUDENT_RESULT_LIST_SWIPE = "NOTIFY_STUDENT_RESULT_LIST_SWIPE", e.DOWNLOAD_NOT_AVAILABLE = "DOWNLOAD_NOT_AVAILABLE", e.DOWNLOAD_FAIL_N_RETRY = "DOWNLOAD_FAIL_N_RETRY", e.DOWNLOAD_DIALOG_SHOW = "DOWNLOAD_DIALOG_SHOW", e.DOWNLOAD_START = "DOWNLOAD_START", e.DOWNLOAD_PROGRESS = "DOWNLOAD_PROGRESS", e.DOWNLOAD_FINISH = "DOWNLOAD_FINISH", e.DOWNLOAD_UNHANDLED_EXCEPTION = "DOWNLOAD_UNHANDLED_EXCEPTION", e.DOWNLOAD_DIALOG_HIDE = "DOWNLOAD_DIALOG_HIDE", e.DOWNLOAD_FORCE_PREPARE = "DOWNLOAD_FORCE_PREPARE", e.DOWNLOAD_FORCE_START = "DOWNLOAD_FORCE_START", e.DOWNLOAD_FORCE_STOP = "DOWNLOAD_FORCE_STOP", e.DOWNLOAD_REPORT_FORCE_RESULT = "DOWNLOAD_REPORT_FORCE_RESULT", e.DOWNLOAD_NETWORK_ERROR = "DOWNLOAD_NETWORK_ERROR", e.NOTIFY_COMPLETE_UNIT_DOWNLOAD = "NOTIFY_COMPLETE_UNIT_DOWNLOAD", e.NOTIFY_COMPLETE_FORCE_DOWNLOAD = "NOTIFY_COMPLETE_FORCE_DOWNLOAD", e.NOTIFY_COMPLETE_UNIT_DELETE = "NOTIFY_COMPLETE_UNIT_DELETE", e.NOTIFY_STUDENT_DISCONNECTED = "NOTIFY_STUDENT_DISCONNECTED", e.NOTIFY_ON_STREAM_ERROR = "NOTIFY_ON_STREAM_ERROR", e.NOTIFY_CHANGE_LOCATION_PERMISSION = "NOTIFY_CHANGE_LOCATION_PERMISSION", e.NOTIFY_OSK_TERMINATED = "NOTIFY_OSK_TERMINATED", e.NOTIFY_PART_LESSON = "NOTIFY_PART_LESSON";
          }(t.EventType || (t.EventType = {}));
        },
        9729: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__exportStar || function (e, t) {
              for (var i in e) "default" === i || Object.prototype.hasOwnProperty.call(t, i) || n(t, e, i);
            },
            s = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const a = s(i(2104));
          t.default = a.default, o(i(3129), t);
        },
        3195: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.getGlobalStore = t.saveStore = void 0;
          const o = n(i(738));
          var s;
          t.saveStore = function (e) {
            s = e;
          }, t.getGlobalStore = function () {
            return s;
          }, window.log = o.default;
        },
        738: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const n = i(7179).Z,
            o = new class {
              info(e) {
                console.info(e), window.curBridge.writeLog({
                  type: "info",
                  message: e
                });
              }
              debug(e) {
                console.debug(e), window.curBridge.writeLog({
                  type: "debug",
                  message: e
                });
              }
              error(e, t) {
                console.error(e, t), t || void 0 !== t ? window.curBridge.writeLog({
                  type: "error",
                  message: n(t, e)
                }) : window.curBridge.writeLog({
                  type: "error",
                  message: e
                });
              }
            }();
          t.default = o;
        },
        8328: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const o = n(i(2790)),
            s = i(4934);
          t.default = class {
            resetMemberData() {
              this.id = 0, this.name = "", this.nickName = "", this.birthday = "", this.thumbnail = "", this.profileThumbnail = "", this.loggedInTime = 0;
            }
            setMemberData(e) {
              this.id = e.id, this.name = e.name, this.nickName = e.nickName, this.gender = "M" === e.gender ? s.Gender.MALE : s.Gender.FEMALE, this.birthday = e.birthday, this.thumbnail = e.thumbnail, this.profileThumbnail = e.profileThumbnail, this.loggedInTime = e.loggedInTime;
            }
            get role() {
              return this._role;
            }
            set role(e) {
              this._role = e;
            }
            get sessionId() {
              return this._sessionId;
            }
            set sessionId(e) {
              this._sessionId = e;
            }
            get sessionState() {
              return this._sessionState;
            }
            set sessionState(e) {
              this._prevSessionState = this._sessionState, this._sessionState = e;
            }
            get prevSessionState() {
              return this._prevSessionState;
            }
            get id() {
              return this._id;
            }
            set id(e) {
              this._id = e;
            }
            get name() {
              return this._name;
            }
            set name(e) {
              this._name = e;
            }
            get nickName() {
              return this._nickName;
            }
            set nickName(e) {
              this._nickName = e;
            }
            get gender() {
              return this._gender;
            }
            get genderStr() {
              return this._gender === s.Gender.MALE ? "M" : "F";
            }
            set gender(e) {
              this._gender = e;
            }
            get birthday() {
              return this._birthday;
            }
            set birthday(e) {
              this._birthday = e;
            }
            get thumbnail() {
              return this._thumbnail ? o.default.makeUrl(this._thumbnail) : "";
            }
            get thumbnailUri() {
              return this._thumbnail;
            }
            set thumbnail(e) {
              this._thumbnail = e;
            }
            get profileThumbnail() {
              return o.default.makeUrl(this._profileThumbnail);
            }
            get profileThumbnailUri() {
              return this._profileThumbnail;
            }
            set profileThumbnail(e) {
              this._profileThumbnail = e;
            }
            get loggedInTime() {
              return this._loggedInTime;
            }
            set loggedInTime(e) {
              this._loggedInTime = e;
            }
          };
        },
        805: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.AccountManager = t.getProfileUsingDisplayMode = t.getThumbnailAndNameByDisplayMode = void 0;
          const o = i(4645),
            s = i(3195),
            a = i(3003),
            r = i(4934),
            l = n(i(8328)),
            c = i(5258);
          t.getThumbnailAndNameByDisplayMode = e => {
            let t = d.othersAccount.find(t => e == t.id);
            if (!t) return;
            let i = (0, a.getMemberDisplayMode)(),
              n = i === r.DisplayMode.DEFAULT_THUMB_N_NAME ? t.name : t.nickName;
            "" === n && d.getServiceName() !== r.ServiceType.MATHALIVE && (n = t.nickName), "" === n && (n = t.name), "" === n && (n = t.nickName);
            let o = "unknown";
            if (i === r.DisplayMode.PROFILE_THUMB_N_NICKNAME) o = "" == t.profileThumbnail ? t.gender == r.Gender.FEMALE ? "../toolkit_static/images/myProfile/Default_Candy.png" : "../toolkit_static/images/myProfile/Default_Cheese.png" : t.profileThumbnail;else if (o = t.thumbnail, "" == o || -1 !== o.indexOf("default_member_w.jpg") || -1 !== o.indexOf("default_member_m.jpg")) {
              let e = document.createElement("canvas"),
                i = e.getContext("2d");
              i && (t.gender == r.Gender.FEMALE ? i.fillStyle = "#ffa1a7" : i.fillStyle = "#2cd1c3", i.fillRect(0, 0, 300, 150), i.font = "40px Maplestory-Bold", i.fillStyle = "white", i.textAlign = "center", i.fillText(t.name.substring(0, 2).toUpperCase(), 150, 90), o = e.toDataURL());
            }
            return {
              thumbnail: o,
              displayName: n
            };
          }, t.getProfileUsingDisplayMode = (e, t, i, n = !1) => {
            let o = e.find(e => e.id === t);
            if (!o) return;
            let s = i;
            n && (s = i === r.DisplayMode.DEFAULT_THUMB_N_NAME ? r.DisplayMode.PROFILE_THUMB_N_NICKNAME : r.DisplayMode.DEFAULT_THUMB_N_NAME);
            let a = s === r.DisplayMode.DEFAULT_THUMB_N_NAME ? o.name : o.nickName;
            "" === a && d.getServiceName() !== r.ServiceType.MATHALIVE && (a = o.nickName), "" !== a && a || (a = o.name);
            let l = "unknown";
            if (s === r.DisplayMode.PROFILE_THUMB_N_NICKNAME) l = "" == o.profileThumbnail ? "F" == o.gender ? "../toolkit_static/images/myProfile/Default_Candy.png" : "../toolkit_static/images/myProfile/Default_Cheese.png" : o.profileThumbnail;else if (l = o.thumbnail, "" == l || -1 !== l.indexOf("default_member_w.jpg") || -1 !== l.indexOf("default_member_m.jpg")) {
              let e = document.createElement("canvas"),
                t = e.getContext("2d");
              t && ("F" == o.gender ? t.fillStyle = "#ffa1a7" : t.fillStyle = "#2cd1c3", t.fillRect(0, 0, 300, 150), t.font = "40px Maplestory-Bold", t.fillStyle = "white", t.textAlign = "center", t.fillText(o.name.substring(0, 2).toUpperCase(), 150, 90), l = e.toDataURL());
            }
            return {
              id: o.id,
              role: r.UserRole.STUDENT,
              displayName: a,
              thumbnail: l,
              birthday: o.birthday,
              gender: o.gender
            };
          };
          class u {
            constructor() {
              this._myAccount = new l.default(), this._othersAccount = [];
            }
            get myAccount() {
              return this._myAccount;
            }
            get othersAccount() {
              return this._othersAccount;
            }
            setMyRole(e) {
              this._myAccount.role = e;
            }
            setMySessionState(e) {
              this._myAccount.sessionState = e;
            }
            setMyAccount(e) {
              this._myAccount.sessionId = e.id, this._myAccount.sessionState = e.state;
            }
            setMyInfo(e) {
              this._myAccount.setMemberData(e);
            }
            setOthersAccount(e, t) {
              t && (this._othersAccount = []), e.forEach(e => {
                this.addNewAccount(e.session, e.member);
              });
            }
            setLoginedOthersAccount(e) {
              this._othersAccount = e;
            }
            addNewAccount(e, t) {
              const i = new l.default();
              i.role = e.role, i.sessionState = e.state, i.sessionId = e.id, i.sessionId = e.id, t && i.setMemberData(t), this._othersAccount.push(i);
            }
            updateSessionState(e) {
              const t = this._othersAccount.find(t => t.sessionId === e.sessionId);
              if (!t) return;
              const i = e.state,
                n = t.sessionState;
              if (e.member && t.setMemberData(e.member), t.sessionState = i, n === r.SessionState.OUT_CLASS ? i === r.SessionState.READY ? (0 !== t.id && this.dispatchStateChangeNotify(r.AccountState.LOGOUT, t), t.resetMemberData()) : i === r.SessionState.IN_CLASS && this.dispatchStateChangeNotify(r.AccountState.IN_CLASS, t) : n === r.SessionState.IN_CLASS && (i === r.SessionState.READY ? (0 !== t.id && this.dispatchStateChangeNotify(r.AccountState.LOGOUT, t), t.resetMemberData()) : i === r.SessionState.OUT_CLASS && this.dispatchStateChangeNotify(r.AccountState.OUT_CLASS, t)), i === r.SessionState.REMOVED) {
                t.id || 0 !== t.id ? this.dispatchStateChangeNotify(r.AccountState.LOGOUT, t) : this.dispatchStateChangeNotify(r.AccountState.DISCONNECT, t);
                const i = this._othersAccount.findIndex(t => t.sessionId === e.sessionId);
                i >= 0 && this._othersAccount.splice(i, 1);
              }
            }
            getTeacherSessionId() {
              const e = this._othersAccount.find(e => e.role === r.UserRole.TEACHER);
              if (e) return e.sessionId;
            }
            getTeacherSessionState() {
              const e = this._othersAccount.find(e => e.role === r.UserRole.TEACHER);
              if (e) return e.sessionState;
            }
            getAccount(e) {
              return this._othersAccount.find(t => t.id === e);
            }
            getLoginStudentsProfile() {
              return this._othersAccount.filter(e => e.role === r.UserRole.STUDENT && (e.sessionState === r.SessionState.IN_CLASS || e.sessionState === r.SessionState.OUT_CLASS)).map(e => ({
                id: e.id,
                name: e.name,
                nickName: e.nickName,
                thumbnail: "" === e.thumbnail || "http://127.0.0.1:8081" === e.thumbnail ? e.gender === r.Gender.FEMALE ? c.DEFAULT_WOMAN_IMAGE : c.DEFAULT_MAN_IMAGE : e.thumbnail,
                profileThumbnail: e.profileThumbnail,
                birthday: e.birthday,
                gender: e.genderStr,
                loggedInTime: e.loggedInTime
              }));
            }
            getInclassAbnormalStudentsCnt() {
              return this._othersAccount.filter(e => e.role === r.UserRole.STUDENT && e.sessionState === r.SessionState.ABNORMAL && e.prevSessionState === r.SessionState.IN_CLASS).length;
            }
            getStudyStudentsProfile() {
              return this._othersAccount.filter(e => e.role === r.UserRole.STUDENT && e.sessionState === r.SessionState.IN_CLASS).map(e => ({
                id: e.id,
                name: e.name,
                nickName: e.nickName,
                thumbnail: "" === e.thumbnail || "http://127.0.0.1:8081" === e.thumbnail ? e.gender === r.Gender.FEMALE ? c.DEFAULT_WOMAN_IMAGE : c.DEFAULT_MAN_IMAGE : e.thumbnail,
                profileThumbnail: e.profileThumbnail,
                birthday: e.birthday,
                gender: e.genderStr,
                loggedInTime: e.loggedInTime
              }));
            }
            getAllStudentsProfile() {
              return this._othersAccount.filter(e => e.role === r.UserRole.STUDENT).map(e => ({
                id: e.id,
                name: e.name,
                nickName: e.nickName,
                thumbnail: "" === e.thumbnail || "http://127.0.0.1:8081" === e.thumbnail ? e.gender === r.Gender.FEMALE ? c.DEFAULT_WOMAN_IMAGE : c.DEFAULT_MAN_IMAGE : e.thumbnail,
                profileThumbnail: e.profileThumbnail,
                birthday: e.birthday,
                gender: e.genderStr,
                isLogin: e.sessionState === r.SessionState.IN_CLASS,
                loggedInTime: e.loggedInTime
              }));
            }
            getConnectedStudentCnt() {
              return this._othersAccount.filter(e => e.role === r.UserRole.STUDENT && (e.sessionState === r.SessionState.IN_CLASS || e.sessionState === r.SessionState.OUT_CLASS || e.sessionState === r.SessionState.READY)).length;
            }
            getConnectedStudentSessionId() {
              return this._othersAccount.filter(e => e.role === r.UserRole.STUDENT && (e.sessionState === r.SessionState.IN_CLASS || e.sessionState === r.SessionState.OUT_CLASS || e.sessionState === r.SessionState.READY)).map(e => e.sessionId);
            }
            dispatchStateChangeNotify(e, t) {
              (0, s.getGlobalStore)().dispatch((0, o.userStateChangeNotify)(e, {
                id: t.id,
                role: t.role,
                name: t.name,
                nickName: t.nickName,
                thumbnail: t.thumbnail,
                profileThumbnail: t.profileThumbnail,
                birthday: t.birthday,
                gender: t.genderStr,
                sessionId: t.sessionId
              }));
            }
            setAddOnHost(e) {
              this._addOnHost = e;
            }
            getAddOnHost() {
              return this._addOnHost;
            }
            setClassId(e) {
              this._classId = e;
            }
            getClassId() {
              return this._classId;
            }
            setCurrentCurriCd(e) {
              this._currentCurriCd = e;
            }
            getCurrentCurriCd() {
              return this._currentCurriCd;
            }
            getTeacherHomeInfo() {
              return this._teacherHomeInfo;
            }
            setTeacherHomeInfo(e) {
              this._teacherHomeInfo = e;
            }
            getServiceName() {
              return this._serviceName;
            }
            setServiceName(e) {
              this._serviceName = e;
            }
          }
          t.AccountManager = u;
          const d = new u();
          t.default = d;
        },
        7299: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.SaveBookVersionResult = void 0;
          const a = i(4057),
            r = s(i(7744)),
            l = i(590);
          var c;
          !function (e) {
            e.INVALID = "INVALID", e.SUCCESS = "SUCCESS", e.FAIL_BY_PATH = "FAIL_BY_PATH", e.FAIL_BY_SERVER_DATA = "FAIL_BY_SERVER_DATA";
          }(c = t.SaveBookVersionResult || (t.SaveBookVersionResult = {})), t.default = new class {
            constructor() {
              this._localBookVersionList = [];
            }
            getServerBookVersionData() {
              return (0, l.isOnline)() && this.serverBookVersionData ? this.serverBookVersionData : this.readServerBookVersionFromStorage();
            }
            loadLocalBookVersionJson() {
              this._localBookVersionList = (0, a.convertLocalBookVersion)(this.loadLocalJson());
            }
            get localBookVersionList() {
              return this._localBookVersionList || (this._localBookVersionList = []), this._localBookVersionList;
            }
            getLocalBookVersionDataList() {
              return this.localBookVersionList;
            }
            isDownloadedContent(e) {
              return this.localBookVersionList.filter(t => t.bkSeq === e).length > 0;
            }
            saveServerBookVersion(e) {
              this.serverBookVersionData = (0, a.convertServerBookVersion)(e), this.writeServerBookVersionToStorage();
            }
            setServerBookVersion(e) {
              this.serverBookVersionData = {
                bookVersion: e,
                bookSeq: []
              }, this.writeServerBookVersionToStorage();
            }
            saveBookVersionForce(e, t) {
              return this.saveBookVersionInner(e, t);
            }
            saveBookVersion(e) {
              return this.saveBookVersionInner(e, this.serverBookVersionData.bookVersion);
            }
            removeContent(e) {
              let t = this.localBookVersionList.length - 1;
              for (; t >= 0;) {
                const i = this.localBookVersionList[t];
                e.find(e => e === i.bkSeq) && this.localBookVersionList.splice(t, 1), t -= 1;
              }
              this.saveLocalJson();
            }
            filterLocalBookVersion(e) {
              return this.localBookVersionList.filter(t => -1 !== e.findIndex(e => e === t.bkSeq));
            }
            writeServerBookVersionToStorage() {
              r.default.setItem(r.LocalStorageKey.SERVER_BOOK_VERSION, JSON.stringify(this.serverBookVersionData));
            }
            readServerBookVersionFromStorage() {
              return JSON.parse(r.default.getItem(r.LocalStorageKey.SERVER_BOOK_VERSION));
            }
            saveBookVersionInner(e, t) {
              if (void 0 === t) return;
              this.localBookVersionList || (this._localBookVersionList = []);
              const i = e.split("|");
              if (0 === i.length) return console.error("invalid path cn:", e), c.FAIL_BY_PATH;
              let n = c.SUCCESS;
              for (let e = 0; e < i.length; e++) {
                const o = t.filter(t => t.bkSeq === Number(i[e]));
                if (0 === o.length) {
                  n = c.FAIL_BY_SERVER_DATA;
                  continue;
                }
                const s = o[0];
                0 === (this.localBookVersionList.length > 0 ? this.localBookVersionList.filter(t => t.bkSeq === Number(i[e])) : []).length ? (this._localBookVersionList.push(s), this._localBookVersionList = this.localBookVersionList.map(e => {
                  let t = e.templateVersion;
                  return e.templatePath === s.templatePath && e.templateVersion !== s.templateVersion && (t = s.templateVersion), Object.assign(Object.assign({}, e), {
                    commonVersion: s.commonVersion,
                    templateVersion: t
                  });
                })) : this._localBookVersionList = this.localBookVersionList.map(e => {
                  let t = e.templateVersion;
                  e.templatePath === s.templatePath && e.templateVersion !== s.templateVersion && (t = s.templateVersion);
                  let i = e.dataVersion;
                  return e.bkSeq === s.bkSeq && e.dataVersion !== s.dataVersion && (i = s.dataVersion), Object.assign(Object.assign({}, e), {
                    commonVersion: s.commonVersion,
                    templateVersion: t,
                    dataVersion: i
                  });
                });
              }
              return this.saveLocalJson(), n;
            }
            saveLocalJson() {
              const e = this.localBookVersionList.map(e => ({
                template_version: e.templateVersion,
                common_version: e.commonVersion,
                bk_seq: e.bkSeq,
                data_version: e.dataVersion,
                template_path: e.templatePath
              }));
              window.curBridge.saveBookVersionJson(JSON.stringify(e));
            }
            loadLocalJson() {
              return window.curBridge.loadBookVersionJson();
            }
          }();
        },
        5638: function (e, t) {
          "use strict";
  
          var i;
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.EffectSoundType = void 0, function (e) {
            e[e.INVALID = 0] = "INVALID", e[e.COMMON_ARROW_DOWN = 1] = "COMMON_ARROW_DOWN", e[e.COMMON_ARROW_UP = 2] = "COMMON_ARROW_UP", e[e.COMMON_ROULETTE = 3] = "COMMON_ROULETTE", e[e.PRESENTER_STUDENT_PICKED = 4] = "PRESENTER_STUDENT_PICKED", e[e.GROUP_STUDENT_PICKED = 5] = "GROUP_STUDENT_PICKED", e[e.TIMER_LITTLE_REMAIN = 6] = "TIMER_LITTLE_REMAIN", e[e.TIMER_FINISH = 7] = "TIMER_FINISH", e[e.STAMP_TEACHER = 8] = "STAMP_TEACHER", e[e.STAMP_STUDENT = 9] = "STAMP_STUDENT", e[e.STAMP_TROPHY = 10] = "STAMP_TROPHY", e[e.COMMON_ARROW_CLASSUNIT_SELECT = 11] = "COMMON_ARROW_CLASSUNIT_SELECT", e[e.COMMON_TEACHINGTOOL_CLICK = 12] = "COMMON_TEACHINGTOOL_CLICK", e[e.COMMON_SUBMIT_RESULT_MOVE = 13] = "COMMON_SUBMIT_RESULT_MOVE", e[e.COMMON_BUTTON_BACK_CLICK = 14] = "COMMON_BUTTON_BACK_CLICK";
          }(i = t.EffectSoundType || (t.EffectSoundType = {}));
          const n = [{
              type: i.COMMON_ARROW_DOWN,
              res: "../toolkit_static/sounds/common_arrow_down.mp3"
            }, {
              type: i.COMMON_ARROW_UP,
              res: "../toolkit_static/sounds/common_arrow_up.mp3"
            }, {
              type: i.COMMON_ROULETTE,
              res: "../toolkit_static/sounds/common_roulette.mp3"
            }, {
              type: i.PRESENTER_STUDENT_PICKED,
              res: "../toolkit_static/sounds/common_roulette.mp3"
            }, {
              type: i.GROUP_STUDENT_PICKED,
              res: "../toolkit_static/sounds/group_student_picked.mp3"
            }, {
              type: i.TIMER_LITTLE_REMAIN,
              res: "../toolkit_static/sounds/timer_little_remain.mp3"
            }, {
              type: i.TIMER_FINISH,
              res: "../toolkit_static/sounds/timer_FINISH.mp3"
            }, {
              type: i.STAMP_TEACHER,
              res: "../toolkit_static/sounds/stamp/stamp_teacher.mp3"
            }, {
              type: i.STAMP_STUDENT,
              res: "../toolkit_static/sounds/stamp/stamp_student.mp3"
            }, {
              type: i.STAMP_TROPHY,
              res: "../toolkit_static/sounds/stamp/stamp_trophy.mp3"
            }, {
              type: i.COMMON_ARROW_CLASSUNIT_SELECT,
              res: "../toolkit_static/sounds/common_arrow_classunit_select.mp3"
            }, {
              type: i.COMMON_TEACHINGTOOL_CLICK,
              res: "../toolkit_static/sounds/common_teachingtool_click.mp3"
            }, {
              type: i.COMMON_SUBMIT_RESULT_MOVE,
              res: "../toolkit_static/sounds/common_page_move.mp3"
            }, {
              type: i.COMMON_BUTTON_BACK_CLICK,
              res: "../toolkit_static/sounds/btn_back.mp3"
            }],
            o = new class {
              constructor() {
                this.preloadResource(), this.effAudioList = [], this.effAudioEventList = [], this.isMutedEffect = !1;
              }
              setAudioElement(e, t) {
                this.effAudioList[0] = e, this.effAudioList[1] = t, this.eff1Audio = e;
              }
              stopAllEffect() {
                this.effAudioList.forEach((e, t) => {
                  this.stopEffect(t);
                });
              }
              pauseEffect(e) {
                const t = this.effAudioList[e];
                t && !t.paused && t.pause();
              }
              resumeEffect(e) {
                const t = this.effAudioList[e];
                t && t.paused && t.play();
              }
              playEffect(e, t) {
                const i = n.find(t => t.type === e);
                if (!i) return void (window.cfg_debug && console.log("not exist sound. type:", e));
                const o = t ? t.audioIndex : 0;
                let s = this.effAudioList[o];
                s || (s = this.effAudioList[0], window.cfg_debug && console.error(`mismatch use AudioList audioIndex: ${o}`)), s.paused || s.pause(), this.stopEffect(o), s.src = i.res, s.loop = !1, s.muted = this.isMutedEffect;
                const a = () => {
                  t && t.playEndedCallback && t.playEndedCallback(), s.removeEventListener("ended", a);
                };
                t && t.loop && (s.loop = t.loop);
                const r = {
                    index: o,
                    ended: a
                  },
                  l = this.effAudioEventList.findIndex(e => e.index === o);
                -1 !== l ? this.effAudioEventList[l] = r : this.effAudioEventList.push(r), s.addEventListener("ended", a), s.oncanplaythrough = () => {
                  s.play();
                };
              }
              setEffectMuted(e) {
                this.isMutedEffect = e, this.eff1Audio.muted = e;
              }
              stopEffect(e = 0) {
                const t = this.effAudioList[e];
                t && !t.paused && t.pause();
                const i = this.effAudioEventList.findIndex(t => t.index === e);
                -1 !== i && (t.removeEventListener("ended", this.effAudioEventList[i].ended), this.effAudioEventList.splice(i, 1));
              }
              preloadResource() {}
            }();
          t.default = o;
        },
        4057: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.convertLocalBookVersion = t.convertServerBookVersion = void 0;
          const n = i(1083),
            o = e => {
              if (void 0 !== e) return e.map(e => (0, n.makeLowerKey)(e)).map(e => ({
                templateVersion: e.template_version,
                commonVersion: e.common_version,
                bkSeq: e.bk_seq,
                dataVersion: e.data_version,
                templatePath: e.template_path
              }));
            },
            s = e => {
              if (void 0 !== e) return e.map(e => (0, n.makeLowerKey)(e)).map(e => ({
                bookSeqs: e.book_seqs.split(","),
                classIdx: e.class_idx
              }));
            };
          t.convertServerBookVersion = e => {
            const t = (0, n.makeLowerKey)(e);
            return {
              bookVersion: o(t.book_version),
              bookSeq: s(t.book_seq)
            };
          }, t.convertLocalBookVersion = e => o(e);
        },
        4919: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const n = i(8039),
            o = {
              bookshelfCurriculumList: []
            };
          t.default = function (e = o, t) {
            return t.type === n.BookshelfActionType.SUCCESS_FETCH_BOOKSHELF ? Object.assign(Object.assign({}, e), {
              bookshelfCurriculumList: t.payload.curriculumList
            }) : e;
          };
        },
        7730: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const n = i(4934),
            o = i(8039),
            s = {
              classesList: [],
              classSettingSelectedClassId: 0,
              extraActivityList: void 0,
              contentTransmissionMode: n.ContentTransmissionType.STREAMING
            };
          t.default = function (e = s, t) {
            switch (t.type) {
              case o.ClassActionType.SUCCESS_FETCH_CLASSES:
                return Object.assign(Object.assign({}, e), {
                  classesList: t.payload.classesList
                });
              case o.ClassActionType.SET_VISIBILITY_CLASS_SETTING_POPUP:
              case o.ClassActionType.SET_VISIBILITY_CLASS_EXTERNAL_SETTING_POPUP:
                return Object.assign(Object.assign({}, e), {
                  classSettingSelectedClassId: t.payload.classId
                });
              case o.ClassActionType.SUCCESS_UPDATE_CLASS_SETTING:
                {
                  const {
                      classesList: i
                    } = e,
                    n = t.payload.classId,
                    o = i.findIndex(e => e.id === n);
                  if (o >= 0) {
                    const n = Object.assign({}, i[o]),
                      {
                        skinId: s,
                        viewMode: a,
                        memViewMode: r
                      } = t.payload;
                    return s >= 0 && (n.skin = s), a > 0 && (n.viewMode = a), r.length > 0 && (n.memberViewMode = r), Object.assign(Object.assign({}, e), {
                      classesList: [...i.slice(0, o), n, ...i.slice(o + 1)]
                    });
                  }
                  return e;
                }
              case o.ClassActionType.SUCCESS_FETCH_EXTRA_ACTIVITIES:
                return Object.assign(Object.assign({}, e), {
                  extraActivityList: t.payload.extraActivityList
                });
              case o.ClassActionType.SUCCESS_FETCH_CONTENT_TRANSMISSION_MODE:
                return Object.assign(Object.assign({}, e), {
                  contentTransmissionMode: t.payload.mode
                });
              default:
                return e;
            }
          };
        },
        2026: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const n = i(2262),
            o = i(822),
            s = i(8039),
            a = i(4934),
            r = i(8028),
            l = {
              toolVisibleState: Array(a.TeachingToolType.MAX_CNT).fill(!1),
              isVisibleTeachingToolMenu: !1,
              isVisibleTitleBar: !1,
              isVisibleStudentCommonResult: !1,
              isVisibleStudentReportListPage: !1,
              isVisibleStudentSubmitList: !1,
              isVisibleStudentDrawingTool: !1,
              isVisibleStudentCropDrawingTool: !1,
              isVisibleStudentPartLesson: !1,
              isVisibleLock: !1,
              isVisibleStudentGroup: !1,
              isVisibleStudentPresenter: !1,
              isPlayingContent: !1,
              cropDrawingData: void 0,
              drawingToolSelection: Array(23).fill(!1),
              drawingToolLoadedImageUrl: void 0,
              studentPartLessonSrc: void 0,
              studentGroupData: void 0,
              studentDrawingCustomRect: void 0,
              studentDrawingToolType: void 0,
              libradyLoadedImageList: [],
              libraryBoardImageList: [],
              studentCropResultList: [],
              timerSubPageTypeState: 1,
              timerRemainSecState: 0,
              timerSettingSecState: 0,
              timerStepState: 0,
              timerIsPlayingState: !0,
              isStartStudentCamera: !1,
              drawingToolMode: a.DrawingToolMode.BAR,
              lastFloatingPenToolPos: Object.assign(Object.assign({}, r.INIT_FLOATING_PEN_TOOL_POS), {
                width: 0,
                height: 0
              }),
              lastDrawingBrushType: o.PenItemType.THIN,
              lastPickingResultList: [],
              lastGroupResultList: [],
              lastGroupTeacherGroupIdx: -1,
              remotePen: !1,
              basicPen: !1,
              profileMode: 1,
              bgImg: "",
              reportStudentTotalCount: 0,
              reportStudentSubmitCount: 0,
              serviceName: ""
            };
          t.default = function (e = l, t) {
            switch (t.type) {
              case s.ContentToolActionType.SET_REPORT_STUDENT_SUBMIT_COUNT:
                return Object.assign(Object.assign({}, e), {
                  reportStudentSubmitCount: t.payload.submitCount
                });
              case s.ContentToolActionType.SET_REPORT_STUDENT_TOTAL_COUNT:
                return Object.assign(Object.assign({}, e), {
                  reportStudentTotalCount: t.payload.totalCount
                });
              case s.ContentToolActionType.SET_SERVICE_NAME:
                return Object.assign(Object.assign({}, e), {
                  serviceName: t.payload.serviceName
                });
              case s.ContentToolActionType.ACTIVATE_PEN_REMOTE:
                return Object.assign(Object.assign({}, e), {
                  remotePen: !0
                });
              case s.ContentToolActionType.DEACTIVATE_PEN_REMOTE:
                return Object.assign(Object.assign({}, e), {
                  remotePen: !1
                });
              case s.ContentToolActionType.ACTIVATE_BASIC_PEN:
                return Object.assign(Object.assign({}, e), {
                  basicPen: !0
                });
              case s.ContentToolActionType.DEACTIVATE_BASIC_PEN:
                return Object.assign(Object.assign({}, e), {
                  basicPen: !1
                });
              case s.ContentToolActionType.SET_PROFILE_MODE:
                return Object.assign(Object.assign({}, e), {
                  profileMode: t.payload.profileMode
                });
              case s.ContentToolActionType.SET_BG_IMAGE:
                return Object.assign(Object.assign({}, e), {
                  bgImg: t.payload.bgImg
                });
              case s.CurriculumActionType.FINISH_CONTENT:
              case s.ContentToolActionType.MOVE_LESSON_MAP:
              case s.ContentToolActionType.SETUP_FOR_LAUNCHER:
                return Object.assign(Object.assign({}, e), {
                  toolVisibleState: Array(a.TeachingToolType.MAX_CNT).fill(!1),
                  isVisibleTeachingToolMenu: !0,
                  isVisibleTitleBar: !1,
                  isVisibleStudentCommonResult: !1,
                  isVisibleStudentReportListPage: !1,
                  isPlayingContent: !1
                });
              case s.ContentToolActionType.SHOW_TOOL_MENU:
                return Object.assign(Object.assign({}, e), {
                  isVisibleTeachingToolMenu: !0
                });
              case s.ContentToolActionType.HIDE_TOOL_MENU:
                return Object.assign(Object.assign({}, e), {
                  isVisibleTeachingToolMenu: !1
                });
              case s.CurriculumActionType.START_CONTENT:
                return Object.assign(Object.assign({}, e), {
                  isVisibleTitleBar: !0,
                  isVisibleStudentCommonResult: !1,
                  isVisibleStudentReportListPage: !1,
                  isPlayingContent: !0
                });
              case s.ContentToolActionType.ACTIVATE_PEN:
                {
                  const t = [...e.toolVisibleState];
                  return t[a.TeachingToolType.PEN] = !0, Object.assign(Object.assign({}, e), {
                    toolVisibleState: t
                  });
                }
              case s.ContentToolActionType.DEACTIVATE_PEN:
                {
                  const t = [...e.toolVisibleState];
                  return t[a.TeachingToolType.PEN] = !1, Object.assign(Object.assign({}, e), {
                    toolVisibleState: t
                  });
                }
              case s.ContentToolActionType.ACTIVATE_CONTENT_TOOL:
                {
                  const i = [...e.toolVisibleState];
                  return i[t.payload.toolType] = !0, Object.assign(Object.assign({}, e), {
                    toolVisibleState: i
                  });
                }
              case s.ContentToolActionType.DEACTIVATE_CONTENT_TOOL:
                {
                  const i = [...e.toolVisibleState];
                  return i[t.payload.toolType] = !1, Object.assign(Object.assign({}, e), {
                    toolVisibleState: i
                  });
                }
              case s.ContentToolActionType.ACTIVATE_CONTENT_TOOL_TIMER:
                {
                  const i = [...e.toolVisibleState];
                  return i[t.payload.toolType] = !0, Object.assign(Object.assign({}, e), {
                    toolVisibleState: i,
                    timerSubPageTypeState: t.payload.subPageType,
                    timerRemainSecState: t.payload.remainSec,
                    timerSettingSecState: t.payload.settingSec,
                    timerStepState: t.payload.step,
                    timerIsPlayingState: t.payload.isPlaying
                  });
                }
              case s.ContentToolActionType.VISIBILITY_TITLE_BAR:
                return Object.assign(Object.assign({}, e), {
                  isVisibleTitleBar: t.payload.isVisible
                });
              case s.ContentToolActionType.VISIBILITY_STUDENT_REPORT_UI:
                return Object.assign(Object.assign({}, e), {
                  isVisibleStudentCommonResult: t.payload.isVisible
                });
              case s.ContentToolActionType.VISIBILITY_STUDENT_REPORT_LIST_PAGE:
                return Object.assign(Object.assign({}, e), {
                  isVisibleStudentReportListPage: t.payload.isVisible
                });
              case s.ContentToolActionType.VISIBILITY_STUDENT_SUBMIT_LIST:
                return Object.assign(Object.assign({}, e), {
                  isVisibleStudentSubmitList: t.payload.isVisible
                });
              case s.ContentToolActionType.VISIBILITY_CROP_DRAWING_TOOL:
                return Object.assign(Object.assign({}, e), {
                  isVisibleStudentCropDrawingTool: t.payload.isVisible,
                  studentDrawingToolType: a.StudentDrawingToolType.CROP_DRAWING
                });
              case s.ContentToolActionType.VISIBILITY_STUDENT_DRAWING_TOOL:
                return Object.assign(Object.assign({}, e), {
                  isVisibleStudentDrawingTool: t.payload.isVisible,
                  studentDrawingToolType: t.payload.drawingToolType,
                  studentDrawingCustomRect: t.payload.customRect
                });
              case s.ContentToolActionType.VISIBILITY_STUDENT_PART_LESSON:
                const {
                  isVisible: i,
                  partLessonData: r
                } = t.payload;
                return Object.assign(Object.assign({}, e), {
                  isVisibleStudentPartLesson: i,
                  studentPartLessonSrc: r
                });
              case s.ContentToolActionType.SET_CROP_DRAWING_DATA:
                const l = {
                  base64: t.payload.base64,
                  width: t.payload.width,
                  height: t.payload.height,
                  resizeRatio: t.payload.resizeRatio,
                  no: (0, n.getNextCropDrawingDataIndex)()
                };
                return Object.assign(Object.assign({}, e), {
                  cropDrawingData: l
                });
              case s.ContentToolActionType.INIT_DRAWING_TOOL_SELECTION:
                const c = Array(23).fill(!1);
                return c[o.PenItemType.THIN] = !0, c[o.PenItemType.BLACK] = !0, Object.assign(Object.assign({}, e), {
                  drawingToolSelection: c
                });
              case s.ContentToolActionType.SET_DRAWING_TOOL_SELECTION:
                const u = t.payload.selection;
                let d = e.lastDrawingBrushType;
                e.drawingToolSelection[o.PenItemType.THIN] && (d = o.PenItemType.THIN), e.drawingToolSelection[o.PenItemType.THICK] && (d = o.PenItemType.THICK), e.drawingToolSelection[o.PenItemType.HIGHLIGHT] && (d = o.PenItemType.HIGHLIGHT);
                const _ = [...u];
                return Object.assign(Object.assign({}, e), {
                  drawingToolSelection: _,
                  lastDrawingBrushType: d
                });
              case s.ContentToolActionType.ACTIVATE_LOCK:
                return Object.assign(Object.assign({}, e), {
                  isVisibleLock: !0
                });
              case s.ContentToolActionType.DEACTIVATE_LOCK:
                return Object.assign(Object.assign({}, e), {
                  isVisibleLock: !1
                });
              case s.ContentToolActionType.SET_DRAWING_TOOL_LOADED_IMAGE_URL:
                return Object.assign(Object.assign({}, e), {
                  drawingToolLoadedImageUrl: t.payload.url
                });
              case s.ContentToolActionType.VISIBILITY_STUDENT_GROUP:
                return Object.assign(Object.assign({}, e), {
                  isVisibleStudentGroup: t.payload.isVisible,
                  studentGroupData: {
                    no: (0, n.getNextGroupDataIndex)(),
                    index: t.payload.groupIndex,
                    groupleader: t.payload.groupLeader
                  }
                });
              case s.ContentToolActionType.VISIBILITY_STUDENT_PRESENTER:
                return Object.assign(Object.assign({}, e), {
                  isVisibleStudentPresenter: t.payload.isVisible
                });
              case s.ContentToolActionType.SUCCESS_LIBRARY_LOAD_IMAGE:
                {
                  const {
                    libradyLoadedImageList: i
                  } = e;
                  return t.payload.imageList.forEach(e => {
                    i.push(e);
                  }), Object.assign(Object.assign({}, e), {
                    libradyLoadedImageList: [...i]
                  });
                }
              case s.ContentToolActionType.REMOVE_LIBRARY_LOADED_IMAGE:
                {
                  const {
                    libradyLoadedImageList: i
                  } = e;
                  return t.payload.selectedIdList.forEach(e => {
                    const t = i.findIndex(t => t.id === e);
                    t >= 0 && i.splice(t, 1);
                  }), Object.assign(Object.assign({}, e), {
                    libradyLoadedImageList: [...i]
                  });
                }
              case s.ContentToolActionType.ADD_LIBRARY_BOARD_IMAGE:
                {
                  const {
                      libraryBoardImageList: i,
                      libradyLoadedImageList: n
                    } = e,
                    o = [];
                  return t.payload.selectedIdList.forEach(e => {
                    const t = n.find(t => t.id === e),
                      s = i.find(t => t.id === e);
                    t && !s && o.push(Object.assign({}, t));
                  }), Object.assign(Object.assign({}, e), {
                    libraryBoardImageList: [...i, ...o]
                  });
                }
              case s.ContentToolActionType.INIT_STUDENT_CROP_RESULT:
                return Object.assign(Object.assign({}, e), {
                  studentCropResultList: []
                });
              case s.ContentToolActionType.ADD_STUDENT_CROP_RESULT:
                {
                  const {
                      studentCropResultList: i
                    } = e,
                    {
                      studentId: n,
                      url: o
                    } = t.payload;
                  return Object.assign(Object.assign({}, e), {
                    studentCropResultList: [...i, {
                      studentId: n,
                      url: o
                    }]
                  });
                }
              case s.ContentToolActionType.START_STUDENT_CAMERA:
                return Object.assign(Object.assign({}, e), {
                  isStartStudentCamera: !0
                });
              case s.ContentToolActionType.STOP_STUDENT_CAMERA:
                return Object.assign(Object.assign({}, e), {
                  isStartStudentCamera: !1
                });
              case s.ContentToolActionType.CHANGE_DRAWING_TOOL_MODE:
                return Object.assign(Object.assign({}, e), {
                  drawingToolMode: t.payload.mode
                });
              case s.ContentToolActionType.UPDATE_LAST_FLOATING_PEN_TOOL_POS:
                {
                  const {
                    lastFloatingPenToolPos: i
                  } = e;
                  return Object.assign(Object.assign({}, e), {
                    lastFloatingPenToolPos: Object.assign(Object.assign({}, i), t.payload)
                  });
                }
              case s.ContentToolActionType.UPDATE_PICKING_RESULT:
                return Object.assign(Object.assign({}, e), {
                  lastPickingResultList: [...t.payload.result]
                });
              case s.ContentToolActionType.UPDATE_GROUP_RESULT:
                return Object.assign(Object.assign({}, e), {
                  lastGroupResultList: [...t.payload.result],
                  lastGroupTeacherGroupIdx: t.payload.teacherGroupIdx
                });
              case s.ContentToolActionType.RESET_PICKING_GROUP_RESULT:
                return Object.assign(Object.assign({}, e), {
                  lastGroupResultList: [],
                  lastPickingResultList: [],
                  lastGroupTeacherGroupIdx: -1
                });
              default:
                return e;
            }
          };
        },
        3260: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const n = i(4934),
            o = i(8039),
            s = i(8028),
            a = {
              selectedClassId: s.INVALID_CURRICULUM_ID,
              selectedUnitId: s.INVALID_CURRICULUM_ID,
              selectedLessonId: s.INVALID_CURRICULUM_ID,
              selectedStepId: s.INVALID_CURRICULUM_ID,
              selectedBookKey: 0,
              selectedLessonName: s.EMPTY_STRING,
              selectedStepName: s.EMPTY_STRING,
              unitDataList: void 0,
              curriculum: void 0,
              isVisibleContent: !1,
              contentType: n.ContentType.INVALID,
              contentPath: s.EMPTY_STRING,
              contentTitle: s.EMPTY_STRING,
              studentSubmitType: n.StudentCommonResultType.TYPE_INVALID,
              studentSubmitViewType: void 0,
              studentSubmittedList: [],
              previewResultList: void 0
            };
          t.default = function (e = a, t) {
            switch (t.type) {
              case o.CurriculumActionType.START_CONTENT:
                return Object.assign(Object.assign({}, e), {
                  isVisibleContent: !0,
                  contentType: t.payload.contentType,
                  contentPath: t.payload.path,
                  selectedUnitId: t.payload.unitId,
                  selectedLessonId: t.payload.lessonId,
                  selectedStepId: t.payload.stepId,
                  selectedBookKey: t.payload.bookKey,
                  selectedLessonName: t.payload.lessonName,
                  selectedStepName: t.payload.stepName
                });
              case o.CurriculumActionType.FINISH_CONTENT:
                return Object.assign(Object.assign({}, e), {
                  isVisibleContent: !1,
                  studentSubmitType: n.StudentCommonResultType.TYPE_INVALID,
                  studentSubmittedList: []
                });
              case o.CurriculumActionType.MOVE_TO_UNIT_LIST_PAGE:
                return Object.assign(Object.assign({}, e), {
                  selectedUnitId: s.INVALID_CURRICULUM_ID,
                  selectedLessonId: s.INVALID_CURRICULUM_ID,
                  selectedStepId: s.INVALID_CURRICULUM_ID,
                  selectedLessonName: s.EMPTY_STRING,
                  selectedStepName: s.EMPTY_STRING,
                  selectedBookKey: 0
                });
              case o.ClassActionType.SUCCESS_CLASS_SELECT:
                return Object.assign(Object.assign({}, e), {
                  selectedClassId: t.payload.classId
                });
              case o.CurriculumActionType.MOVE_TO_CLASS_LIST_PAGE:
                return Object.assign(Object.assign({}, e), {
                  selectedClassId: s.INVALID_CURRICULUM_ID,
                  selectedUnitId: s.INVALID_CURRICULUM_ID,
                  selectedLessonId: s.INVALID_CURRICULUM_ID,
                  selectedStepId: s.INVALID_CURRICULUM_ID,
                  selectedBookKey: 0,
                  selectedLessonName: s.EMPTY_STRING,
                  selectedStepName: s.EMPTY_STRING,
                  previewResultList: void 0
                });
              case o.ClassActionType.SUCCESS_CLASS_STUDENT:
                return Object.assign(Object.assign({}, e), {
                  classStudentList: t.payload.membersList
                });
              case o.CurriculumActionType.SUCCESS_UNIT_SELECT:
                return Object.assign(Object.assign({}, e), {
                  selectedUnitId: t.payload.selectedUnitId,
                  unitDataList: t.payload.data
                });
              case o.CurriculumActionType.CHANGE_UNIT_SELECT:
                return Object.assign(Object.assign({}, e), {
                  selectedUnitId: t.payload.selectedUnitId
                });
              case o.CurriculumActionType.START_STUDENT_SUBMIT:
                {
                  const i = [];
                  return t.payload.idList.forEach(e => {
                    const t = {
                      studentId: e,
                      type: n.StudentCommonResultType.TYPE_COUNTER_CUSTOM,
                      value: [""],
                      option: [""]
                    };
                    i.push(t);
                  }), Object.assign(Object.assign({}, e), {
                    studentSubmittedList: i,
                    studentSubmitViewType: t.payload.viewType,
                    studentSubmitType: t.payload.type
                  });
                }
              case o.CurriculumActionType.SUBMIT_STUDENT_RESULT:
                return Object.assign(Object.assign({}, e), {
                  studentSubmittedList: [...e.studentSubmittedList, {
                    studentId: t.payload.studentId,
                    type: t.payload.type,
                    value: Array.isArray(t.payload.value) ? t.payload.value : [t.payload.value],
                    option: Array.isArray(t.payload.option) ? t.payload.option : [t.payload.option]
                  }]
                });
              case o.CurriculumActionType.RESET_STUDENT_SUBMIT_TYPE:
                return Object.assign(Object.assign({}, e), {
                  studentSubmitType: n.StudentCommonResultType.TYPE_INVALID,
                  studentSubmitViewType: void 0
                });
              case o.CurriculumActionType.SUCCESS_FETCH_PREVIEW_RESULT:
                var i;
                return t.payload.result ? (console.debug(`SUCCESS_FETCH_PREVIEW_RESULT\n ${JSON.stringify(t.payload.result)}`), i = {
                  data: {
                    classesList: t.payload.result.classesList,
                    membersList: t.payload.result.membersList
                  }
                }) : console.error("SUCCESS_FETCH_PREVIEW_RESULT\n action.paylod.result is null"), Object.assign(Object.assign({}, e), {
                  previewResultList: i
                });
              case o.ClassActionType.SET_VISIBILITY_UNIT_FOCUS_POPUP:
                return Object.assign(Object.assign({}, e), {
                  selectedFocusUnitId: t.payload.unitId
                });
              case o.CurriculumActionType.SUCCESS_FETCH_CURRICULUM:
                return Object.assign(Object.assign({}, e), {
                  curriculum: t.payload.curriculum
                });
              case o.CurriculumActionType.UPDATE_STUDY_RESULT_CLASS:
                {
                  const {
                      curriculum: i,
                      selectedUnitId: o,
                      selectedLessonId: s,
                      selectedClassId: a
                    } = e,
                    {
                      curriculumId: r,
                      startTime: l,
                      endTime: c,
                      isCompleted: u
                    } = t.payload;
                  if (!i) return Object.assign({}, e);
                  const d = Object.assign({}, i);
                  for (let e = 0; e <= d.childrenList.length; e += 1) {
                    const t = d.childrenList[e],
                      i = t.childrenList.find(e => e.id === o);
                    if (!i) continue;
                    const _ = i.childrenList.find(e => e.id === s);
                    if (!_) continue;
                    const T = _.childrenList.find(e => e.id === r);
                    if (T && T.book) {
                      T.book.studyResultClass ? (l && (T.book.studyResultClass.startTime = l), c && (T.book.studyResultClass.endTime = c), u && (T.book.studyResultClass.completed = u ? n.Completed.COMPLETED : n.Completed.NOT_COMPLETED)) : T.book.studyResultClass = {
                        clsStdIdx: a,
                        curiBkIdx: T.book.key,
                        startTime: l,
                        endTime: c,
                        completed: u ? n.Completed.COMPLETED : n.Completed.NOT_COMPLETED
                      }, t.childrenList = t.childrenList.slice();
                      break;
                    }
                  }
                  return Object.assign(Object.assign({}, e), {
                    curriculum: d
                  });
                }
              default:
                return e;
            }
          };
        },
        3623: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const o = i(8039),
            s = n(i(7677)),
            a = {
              dialogList: []
            };
          t.default = function (e = a, t) {
            switch (t.type) {
              case o.DialogActionType.SHOW_DIALOG:
                {
                  const {
                      dialogList: i
                    } = e,
                    n = t.payload.component,
                    o = t.payload.id || (0, s.default)();
                  return i.push({
                    id: o,
                    element: n
                  }), Object.assign(Object.assign({}, e), {
                    dialogList: i
                  });
                }
              case o.DialogActionType.HIDE_DIALOG:
                {
                  const {
                      dialogList: i
                    } = e,
                    {
                      id: n
                    } = t.payload;
                  if (n) {
                    const t = i.findIndex(e => e.id === n);
                    return -1 === t ? e : (i.splice(t, 1), Object.assign(Object.assign({}, e), {
                      dialogList: [...i]
                    }));
                  }
                  return i.length > 0 ? (i.pop(), Object.assign(Object.assign({}, e), {
                    dialogList: i
                  })) : e;
                }
              case o.DialogActionType.HIDE_ALL_DIALOG:
                return Object.assign(Object.assign({}, e), {
                  dialogList: []
                });
              default:
                return e;
            }
          };
        },
        4413: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const n = i(8039),
            o = {
              isVisibleContent: !1,
              isVisibleSpinner: !1,
              isVisibleLoadingSpinner: !1,
              isVisibleLoadingProgSpinner: !1,
              isVisibleAPSearchSpinner: !1,
              isVisibleContentTool: !1,
              isVisibleStudentList: !1,
              isVisibleLessonCompletePopup: !1,
              isVisibleClassSettingPopup: !1,
              isVisibleThreeMinActivityPopup: !1,
              isVisibleClassExternalSettingPopup: !1,
              isVisibleUnitFocusPopup: !1,
              isVisibleBookshelfPopup: !1
            };
          t.default = function (e = o, t) {
            switch (t.type) {
              case n.CurriculumActionType.START_CONTENT:
                return Object.assign(Object.assign({}, e), {
                  isVisibleContent: !0,
                  isVisibleLessonCompletePopup: !1
                });
              case n.CurriculumActionType.FINISH_CONTENT:
                return Object.assign(Object.assign({}, e), {
                  isVisibleContent: !1,
                  isVisibleLessonCompletePopup: !1
                });
              case n.SpinnerActionType.SHOW_SPINNER:
                return Object.assign(Object.assign({}, e), {
                  isVisibleSpinner: !0
                });
              case n.SpinnerActionType.HIDE_SPINNER:
                return Object.assign(Object.assign({}, e), {
                  isVisibleSpinner: !1,
                  isVisibleLoadingSpinner: !1
                });
              case n.SpinnerActionType.SHOW_LOADING_SPINNER:
                return Object.assign(Object.assign({}, e), {
                  isVisibleLoadingSpinner: !0
                });
              case n.SpinnerActionType.HIDE_LOADING_SPINNER:
                return Object.assign(Object.assign({}, e), {
                  isVisibleLoadingSpinner: !1,
                  isVisibleSpinner: !1
                });
              case n.SpinnerActionType.SHOW_LOADING_PROGRESS_SPINNER:
                return Object.assign(Object.assign({}, e), {
                  isVisibleLoadingProgSpinner: !0
                });
              case n.SpinnerActionType.HIDE_LOADING_PROGRESS_SPINNER:
                return Object.assign(Object.assign({}, e), {
                  isVisibleLoadingProgSpinner: !1,
                  isVisibleSpinner: !1
                });
              case n.SpinnerActionType.SHOW_AP_SEARCH_SPINNER:
                return Object.assign(Object.assign({}, e), {
                  isVisibleAPSearchSpinner: !0
                });
              case n.SpinnerActionType.HIDE_AP_SEARCH_SPINNER:
                return Object.assign(Object.assign({}, e), {
                  isVisibleAPSearchSpinner: !1
                });
              case n.ContentToolActionType.SHOW_CONTENT_TOOL:
                return Object.assign(Object.assign({}, e), {
                  isVisibleContentTool: !0
                });
              case n.ContentToolActionType.HIDE_CONTENT_TOOL:
                return Object.assign(Object.assign({}, e), {
                  isVisibleContentTool: !1
                });
              case n.ContentToolActionType.VISIBILITY_CROP_DRAWING_TOOL:
                return Object.assign(Object.assign({}, e), {
                  isVisibleContentTool: t.payload.isVisible
                });
              case n.ClassActionType.SET_VISIBILITY_STUDENT_LIST:
                return Object.assign(Object.assign({}, e), {
                  isVisibleStudentList: t.payload.isVisible
                });
              case n.ClassActionType.SET_VISIBILITY_CLASS_SETTING_POPUP:
                return Object.assign(Object.assign({}, e), {
                  isVisibleClassSettingPopup: t.payload.isVisible
                });
              case n.ClassActionType.SET_VISIBILITY_CLASS_EXTERNAL_SETTING_POPUP:
                return Object.assign(Object.assign({}, e), {
                  isVisibleClassExternalSettingPopup: t.payload.isVisible
                });
              case n.CurriculumActionType.SET_VISIBILITY_THREE_MIN_ACTIVITY_POPUP:
                return Object.assign(Object.assign({}, e), {
                  isVisibleThreeMinActivityPopup: t.payload.isVisible
                });
              case n.ContentToolActionType.SHOW_LESSON_COMPLETE_POPUP:
                return Object.assign(Object.assign({}, e), {
                  isVisibleLessonCompletePopup: !0
                });
              case n.ContentToolActionType.HIDE_LESSON_COMPLETE_POPUP:
                return Object.assign(Object.assign({}, e), {
                  isVisibleLessonCompletePopup: !1
                });
              case n.ClassActionType.SET_VISIBILITY_UNIT_FOCUS_POPUP:
                return Object.assign(Object.assign({}, e), {
                  isVisibleUnitFocusPopup: t.payload.isVisible
                });
              case n.CurriculumActionType.SET_VISIBILITY_BOOKSHELF_POPUP:
                return Object.assign(Object.assign({}, e), {
                  isVisibleBookshelfPopup: t.payload.isVisible
                });
              default:
                return e;
            }
          };
        },
        5716: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const o = n(i(381)),
            s = i(8039),
            a = {
              stampList: [],
              unitMemberStampList: [],
              applyCandidateIdList: [],
              isVisibleStampEffect: !1,
              applyStampThumbnail: "",
              mvpStampNameList: [],
              canShowSelectStamp: !1
            };
          t.default = function (e = a, t) {
            switch (t.type) {
              case s.StampActionType.SUCCESS_FETCH_STAMP_INFO:
                return Object.assign(Object.assign({}, e), {
                  stampList: t.payload.stampInfosList
                });
              case s.StampActionType.SUCCESS_FETCH_MEMBER_STAMP:
                return Object.assign(Object.assign({}, e), {
                  unitMemberStampList: t.payload.unitMemberStampList
                });
              case s.StampActionType.VISIBILITY_STAMP_EFFECT:
                return Object.assign(Object.assign({}, e), {
                  isVisibleStampEffect: t.payload.isVisible,
                  applyStampThumbnail: t.payload.stampThumbnail || "",
                  canShowSelectStamp: t.payload.canShowSelectStamp,
                  mvpStampNameList: t.payload.mvpStampNameList || []
                });
              case s.StampActionType.SUCCESS_UPDATE_MEMBER_STAMP:
                {
                  const {
                      unitMemberStampList: i
                    } = e,
                    n = [...i],
                    {
                      unitCuriId: s,
                      stampId: a,
                      objectKind: r,
                      memberObjIdList: l
                    } = t.payload,
                    c = n.find(e => e.unitCuriIdx === s);
                  return c ? l.forEach(e => {
                    const t = e.objectId,
                      i = e.memberId,
                      n = Number((0, o.default)().format("X"));
                    c.memberStampsList.push({
                      stampId: a,
                      objectKind: r,
                      objectId: t,
                      memberId: i,
                      regTime: n
                    });
                  }) : window.log.error("not exist unit in updateMemberStampList. unitCuriId:", s), Object.assign(Object.assign({}, e), {
                    unitMemberStampList: n
                  });
                }
              default:
                return e;
            }
          };
        },
        9543: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const n = i(8039),
            o = {
              isVisibleSyncProgressDialog: !1,
              isStoppedSync: !1,
              isSucceedSync: !0,
              isFinishedSync: !0,
              isTotalSync: !1,
              isZeroCurrentCountCheck: !1,
              currentClassSyncProgress: 0,
              currentClassSyncFinished: !0,
              currentClassSyncCount: 1,
              syncClassIndices: [],
              hasStudyResultClassIndices: [],
              refreshHasStudyResultClassIndices: !1,
              uploadClassStudyResultCountList: []
            };
          t.default = function (e = o, t) {
            var i = [];
            switch (t.type) {
              case n.StudyResultActionType.SUCCESS_SAVE_STUDY_RESULT_PROGRESS:
                return Object.assign(Object.assign({}, e), {
                  currentClassSyncProgress: t.payload.progressratio
                });
              case n.StudyResultActionType.PUSH_STUDY_RESULT_CLASS_INDICES:
                console.debug("PUSH_STUDY_RESULT_CLASS_INDICES : " + t.payload.classindicesList.length);
                for (let e of t.payload.classindicesList) i.push(e);
                return Object.assign(Object.assign({}, e), {
                  currentClassSyncCount: 1,
                  syncClassIndices: i
                });
              case n.StudyResultActionType.REQUEST_SAVE_STUDY_RESULT_MEMBERS:
                return e.syncClassIndices.length <= 0 ? i.push(t.payload.classId) : i = e.syncClassIndices, window.log.info(`reducer requestSaveStudyResultMembers indices:${JSON.stringify(e.syncClassIndices)} isFinishedSync false`), Object.assign(Object.assign({}, e), {
                  currentClassSyncProgress: 0,
                  currentClassSyncFinished: !1,
                  syncClassIndices: i,
                  hasStudyResultClassIndices: e.hasStudyResultClassIndices,
                  isVisibleSyncProgressDialog: !0,
                  isFinishedSync: !1
                });
              case n.StudyResultActionType.ZERO_COUNT_STUDY_RESULT:
                return console.debug("isZeroCurrentCountCheck = true"), Object.assign(Object.assign({}, e), {
                  isZeroCurrentCountCheck: !0
                });
              case n.StudyResultActionType.SUCCESS_FETCH_STUDY_RESULT_COUNT_CLASS:
                return console.debug("isZeroCurrentCountCheck = false"), Object.assign(Object.assign({}, e), {
                  isZeroCurrentCountCheck: !1
                });
              case n.StudyResultActionType.SUCCESS_FETCH_ALL_CLASS_UPLOAD_STUDY_RESULT_COUNT:
                return Object.assign(Object.assign({}, e), {
                  uploadClassStudyResultCountList: t.payload.uploadItemCntList
                });
              case n.StudyResultActionType.SUCCESS_SAVE_STUDY_RESULT_MEMBERS:
                let o = e.currentClassSyncCount + 1,
                  s = !1,
                  a = !0;
                return i = e.syncClassIndices, console.debug("count : " + o), console.debug("indices.length : " + i.length), window.log.info(`reducer successSaveStudyResultMembers classSyncCount:${o} indicesCnt:${i.length}`), o > i.length && (window.log.info("- successSaveStudyResultMembers save study result finished!"), o = 1, s = !0, a = !0, i = []), console.debug("state.syncClassIndices.length : " + e.syncClassIndices.length + " / state.currentClassSyncCount : " + e.currentClassSyncCount + " / isFinished : " + s), Object.assign(Object.assign({}, e), {
                  currentClassSyncFinished: !0,
                  syncClassIndices: i,
                  currentClassSyncCount: o,
                  isSucceed: a,
                  isFinishedSync: s
                });
              case n.StudyResultActionType.FAILED_SAVE_STUDY_RESULT_MEMBERS:
                return window.log.info("reducer failedSaveStudyResultMember. set isFinishSync true"), Object.assign(Object.assign({}, e), {
                  isSucceedSync: !1,
                  isFinishedSync: !0
                });
              case n.StudyResultActionType.SET_VISIBILITY_SAVE_STUDY_RESULT_PROGRESS_DIALOG:
                return Object.assign(Object.assign({}, e), {
                  refreshHasStudyResultClassIndices: !e.isTotalSync,
                  isTotalSync: !1,
                  isVisibleSyncProgressDialog: !1,
                  currentClassSyncProgress: 0,
                  currentClassSyncFinished: !0,
                  currentClassSyncCount: 1,
                  isFinishedSync: !0,
                  syncClassIndices: []
                });
              case n.StudyResultActionType.REQUEST_FETCH_STUDY_RESULT_CLASS_INDICES:
                return Object.assign(Object.assign({}, e), {
                  refreshHasStudyResultClassIndices: !1
                });
              case n.StudyResultActionType.SUCCESS_FETCH_STUDY_RESULT_CLASS_INDICES:
                return Object.assign(Object.assign({}, e), {
                  hasStudyResultClassIndices: t.payload.classindicesList
                });
              case n.StudyResultActionType.REQUEST_SAVE_ALL_STUDY_RESULT_MEMBERS:
                return window.log.info("reducer saveAllStudyResultMembers. set isFinishSync false"), Object.assign(Object.assign({}, e), {
                  isTotalSync: !0,
                  isFinishedSync: !1,
                  currentClassSyncFinished: !0,
                  currentClassSyncCount: 1,
                  syncClassIndices: e.hasStudyResultClassIndices
                });
              default:
                return e;
            }
          };
        },
        5246: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const n = i(8039),
            o = {
              networkIsReady: !1,
              networkIsWaitingReconnect: !1,
              nativeVersion: ""
            };
          t.default = function (e = o, t) {
            switch (t.type) {
              case n.SystemActionType.NETWORK_IS_READY:
                return Object.assign(Object.assign({}, e), {
                  networkIsReady: !0,
                  networkIsWaitingReconnect: !1
                });
              case n.SystemActionType.NETWORK_DISCONNECTED:
                return Object.assign(Object.assign({}, e), {
                  networkIsReady: !1,
                  networkIsWaitingReconnect: !1
                });
              case n.SystemActionType.NETWORK_IS_WAITING_RECONNECT:
                return Object.assign(Object.assign({}, e), {
                  networkIsWaitingReconnect: !0
                });
              case n.SystemActionType.NOTIFY_NATIVE_VERSION:
                return Object.assign(Object.assign({}, e), {
                  nativeVersion: t.payload.version
                });
              default:
                return e;
            }
          };
        },
        4117: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.initialState = void 0;
          const n = i(4934),
            o = i(8039);
          t.initialState = {
            stateChanged: {
              type: n.AccountState.INVALID,
              data: {
                sessionId: "",
                id: n.AccountIdDefaultVal,
                role: n.UserRole.INVALID,
                name: "",
                nickName: "",
                thumbnail: "",
                profileThumbnail: "",
                birthday: "",
                gender: ""
              }
            }
          }, t.default = function (e = t.initialState, i) {
            return i.type === o.UserActionType.STATE_CHANGE_NOTIFY ? Object.assign(Object.assign({}, e), {
              stateChanged: {
                type: i.payload.type,
                data: i.payload.data
              }
            }) : e;
          };
        },
        4238: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const o = i(1438),
            s = n(i(4413)),
            a = n(i(4117)),
            r = n(i(3623)),
            l = n(i(7730)),
            c = n(i(3260)),
            u = n(i(2026)),
            d = n(i(5246)),
            _ = n(i(5716)),
            T = n(i(4919)),
            S = n(i(9543)),
            p = (0, o.combineReducers)({
              layout: s.default,
              user: a.default,
              dialog: r.default,
              classes: l.default,
              studyResult: S.default,
              curriculum: c.default,
              contentTool: u.default,
              system: d.default,
              stamp: _.default,
              bookshelf: T.default
            });
          t.default = p;
        },
        5819: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.watchReportStudentCropResult = t.watchOpenLibraryImageDialog = t.watchRequestUploadStudentCropResult = void 0;
          const o = i(2242),
            s = i(3195),
            a = i(8039),
            r = n(i(6953)),
            l = i(4934),
            c = i(226),
            u = i(8028),
            d = i(2084),
            _ = n(i(805));
          function T(e) {
            try {
              const t = _.default.myAccount.id;
              window.curBridge.sendMsgToTeacher({
                to: l.UserMessage.Target.LAUNCHER,
                type: l.UserMessage.Type.SUBMIT_CROP_RESULT,
                data: {
                  studentId: t,
                  url: e.payload.base64
                }
              });
            } catch (e) {
              console.error("err", e);
            }
          }
          function* S() {
            const e = (0, s.getGlobalStore)();
            try {
              const t = yield (0, o.call)(window.curBridge.openLibraryImageDialog.bind(r.default));
              if (t.result === l.ImageFileLoadResultType.FAIL_BY_NOT_SELECTED) (0, c.showAlertDialog)(u.DIALOG_MSG.DRAWING_TOOL_LOAD_IMAGE_FAIL_BY_NOT_SELECTED);else {
                const i = t.filter(e => e.resultType === l.ImageFileLoadResultType.SUCCESS),
                  n = t.filter(e => e.resultType !== l.ImageFileLoadResultType.SUCCESS),
                  o = i.map(e => ({
                    id: e.no,
                    srcPath: e.srcPath,
                    url: e.url
                  }));
                if (i.length === t.length) e.dispatch((0, d.successLibraryLoadImage)(o));else {
                  let t;
                  t = n[0].resultType === l.ImageFileLoadResultType.FAIL_BY_INVALID ? u.DIALOG_MSG.DRAWING_TOOL_LOAD_IMAGE_FAIL_BY_INVALID : n[0].resultType === l.ImageFileLoadResultType.FAIL_BY_SIZE ? u.DIALOG_MSG.DRAWING_TOOL_LOAD_IMAGE_FAIL_BY_SIZE : u.DIALOG_MSG.DRAWING_TOOL_LOAD_IMAGE_FAIL_BY_UNDEFINED, (0, c.showAlertDialog)(t), 0 !== o.length && e.dispatch((0, d.successLibraryLoadImage)(o));
                }
              }
            } catch (e) {
              window.cfg_debug && console.log("err", e);
            }
          }
          function* p(e) {
            try {
              (0, s.getGlobalStore)(), [].push({
                memberId: e.payload.studentId,
                fileUrlList: [e.payload.url]
              });
            } catch (e) {
              console.error(e);
            }
          }
          t.watchRequestUploadStudentCropResult = T, t.watchOpenLibraryImageDialog = S, t.watchReportStudentCropResult = p, t.default = function* () {
            yield (0, o.all)([(0, o.takeLatest)(a.ContentToolActionType.REQUEST_UPLOAD_STUDENT_CROP_RESULT, T), (0, o.takeLatest)(a.ContentToolActionType.OPEN_LIBRARY_IMAGE_DIALOG, S), (0, o.takeLatest)(a.ContentToolActionType.REPORT_STUDENT_CROP_RESULT, p)]);
          };
        },
        1408: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.watchUpdateMemberStamp = t.watchRequestFetchMemberStamp = t.watchRequestFetchStampInfo = void 0;
          const o = i(2242),
            s = i(8039),
            a = n(i(6953)),
            r = i(8091),
            l = i(3195),
            c = i(1247);
          function* u() {
            try {
              const e = yield (0, o.call)(window.curBridge.fetchStampInfo.bind(a.default));
              if ("success" === e.result) {
                const t = (e.data.stampInfosList || []).filter(e => 1 === e.launcherType);
                yield (0, o.put)((0, r.successFetchStampInfo)(t));
              } else window.log.info(`fail fetch stamp info:${JSON.stringify(e)}`);
            } catch (e) {
              window.cfg_debug && console.log("err", e);
            }
          }
          function* d(e) {
            try {
              const t = yield (0, o.call)(window.curBridge.fetchMemberStamp.bind(a.default), e.payload.unitCurrIdList);
              "success" === t.result ? yield (0, o.put)((0, r.successFetchMemberStamp)(t.data.unitMemberStampsList)) : window.log.info(`fail fetch member stamp:${JSON.stringify(t)}`);
            } catch (e) {
              window.cfg_debug && console.log("err", e);
            } finally {
              (0, l.getGlobalStore)().dispatch((0, c.hideSpinner)());
            }
          }
          function* _(e) {
            try {
              const {
                  stampId: t,
                  objectKind: i,
                  unitCuriId: n,
                  memberObjIdList: s
                } = e.payload,
                l = yield (0, o.call)(window.curBridge.updateMemberStamp.bind(a.default), n, t, i, s);
              "success" === l.result || window.log.info(`fail update member stamp:${JSON.stringify(l)}`), yield (0, o.put)((0, r.successUpdateMemberStamp)(n, t, i, s));
            } catch (e) {}
          }
          t.watchRequestFetchStampInfo = u, t.watchRequestFetchMemberStamp = d, t.watchUpdateMemberStamp = _, t.default = function* () {
            yield (0, o.all)([(0, o.takeLatest)(s.StampActionType.REQUEST_FETCH_STAMP_INFO, u), (0, o.takeLatest)(s.StampActionType.REQUEST_FETCH_MEMBER_STAMP, d), (0, o.takeLatest)(s.StampActionType.UPDATE_MEMBER_STAMP, _)]);
          };
        },
        1682: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.watchRequestLogout = t.watchRequestLogin = void 0;
          const r = a(i(7592)),
            l = i(1247),
            c = i(2242),
            u = i(3195),
            d = i(4934),
            _ = a(i(805)),
            T = i(8039),
            S = a(i(6953)),
            p = i(8028),
            E = i(590),
            h = s(i(2084)),
            m = i(8265),
            C = i(226);
          function* I(e) {
            const t = (0, u.getGlobalStore)();
            t.dispatch((0, l.showSpinner)());
            try {
              const {
                  id: i,
                  pwd: n
                } = e.payload,
                o = yield (0, c.call)(window.curBridge.requestLogin.bind(S.default), i, n);
              if (window.log.debug(`loginResult:${JSON.stringify(o)}`), "success" === o.result) {
                if (_.default.setMyInfo(o.login.member), t.dispatch(h.initDrawingToolSelection()), r.default.clearAllHistory(), _.default.myAccount.role === d.UserRole.TEACHER) yield (0, c.put)((0, m.fetchLMSDataSync)());else {
                  const e = yield (0, c.call)(window.curBridge.requestTransitionToInClass.bind(S.default));
                  window.log.debug(`transitionResult:${JSON.stringify(e)}`), t.dispatch((0, l.hideSpinner)());
                }
              } else {
                const e = o.error.code;
                if (e === d.NetworkErrorCode.NOT_FOUND) yield (0, c.call)(C.showInfoDialog, p.DIALOG_MSG.INVALID_ID_PWD);else if (e === d.NetworkErrorCode.ALREADY_EXISTS) yield (0, c.call)(C.showInfoDialog, p.DIALOG_MSG.ALREADY_EXIST_SESSION);else if (e === d.NetworkErrorCode.STREAM_NOT_READY) yield (0, c.call)(C.showInfoDialog, p.DIALOG_MSG.NETWORK_NOT_READY);else if (e === d.NetworkErrorCode.FAILED_PRECONDITION) {
                  if (_.default.myAccount.role === d.UserRole.STUDENT) {
                    const e = _.default.getTeacherSessionState();
                    e === d.SessionState.OUT_CLASS ? yield (0, c.call)(C.showInfoDialog, p.DIALOG_MSG.TEACHER_NOT_SELECTED_CLASS) : e === d.SessionState.IN_CLASS ? yield (0, c.call)(C.showInfoDialog, p.DIALOG_MSG.STUDENT_NOT_BELONG_TO_CLASS) : yield (0, c.call)(C.showInfoDialog, p.DIALOG_MSG.TEACHER_NOT_LOGINED);
                  }
                } else if (e === d.NetworkErrorCode.UNAVAILABLE) _.default.myAccount.role === d.UserRole.TEACHER && (yield (0, c.call)(C.showInfoDialog, p.DIALOG_MSG.NETWORK_CONNECTION_FAILED));else if (e === d.NetworkErrorCode.API_ERROR) {
                  let e;
                  o.error.message.length > 0 ? e = o.error.message : (window.log.error(`login api server error:${JSON.stringify(o)}`), e = (0, E.formattedString)(p.DIALOG_MSG.SYSTEM_INTERNAL_ERROR, o.error.code)), yield (0, c.call)(C.showInfoDialog, e);
                } else {
                  const t = (0, E.formattedString)(p.DIALOG_MSG.SYSTEM_INTERNAL_ERROR, e);
                  yield (0, c.call)(C.showInfoDialog, t);
                }
                t.dispatch((0, l.hideSpinner)());
              }
            } catch (e) {
              window.log.error("fail login:", e), t.dispatch((0, l.hideSpinner)());
            }
          }
          function* O() {
            try {
              (0, u.getGlobalStore)();
              const e = yield (0, c.call)(window.curBridge.requestLogout.bind(S.default));
              if ("success" === e.result) ;else {
                const t = e.error.code;
                if (t === d.NetworkErrorCode.UNAUTHENTICATED) ;else {
                  const e = (0, E.formattedString)(p.DIALOG_MSG.SYSTEM_INTERNAL_ERROR, t);
                  yield (0, c.call)(C.showInfoDialog, e);
                }
              }
            } catch (e) {
              window.log.error("err", e);
            }
          }
          t.watchRequestLogin = I, t.watchRequestLogout = O, t.default = function* () {
            yield (0, c.all)([(0, c.takeLatest)(T.UserActionType.REQUEST_LOGIN, I), (0, c.takeLatest)(T.UserActionType.REQUEST_LOGOUT, O)]);
          };
        },
        6583: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const o = i(2242),
            s = n(i(1682)),
            a = n(i(5819)),
            r = n(i(1408));
          t.default = function* () {
            yield (0, o.all)([(0, o.fork)(s.default), (0, o.fork)(a.default), (0, o.fork)(r.default)]);
          };
        },
        9625: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const r = s(i(7363)),
            l = a(i(2629)),
            c = [];
          for (let e = 0; e < 114; e += 1) c.push(`../toolkit_static/images/ap_search/ap_search_${e + 1}.png`);
          t.default = () => r.createElement("div", {
            id: "pageMask"
          }, r.createElement("div", {
            className: "ap_dim_loading"
          }, r.createElement("div", {
            className: "ap_dim_new"
          }, r.createElement(l.default, {
            imageUrls: c,
            durationSec: 10
          })), "Locating Access Points", r.createElement("br", null), "to Access the Teacher's Monitor"));
        },
        434: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const r = s(i(7363)),
            l = a(i(2629)),
            c = [];
          for (let e = 0; e < 111; e += 1) c.push(`../toolkit_static/images/loading/loading_bar_${e + 1}.png`);
          t.default = () => r.createElement("div", {
            id: "pageMask"
          }, r.createElement("div", {
            className: "loading_progress_wrapper"
          }, r.createElement("div", {
            className: "loading_progress_new"
          }, r.createElement("div", {
            className: "loading-progress-spinner"
          }, r.createElement(l.default, {
            imageUrls: c,
            durationSec: 4
          })), "LOADING")));
        },
        3546: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const a = s(i(7363)),
            r = i(3256);
          t.default = e => a.createElement("div", {
            id: "pageMask"
          }, a.createElement("div", {
            className: "student_screen"
          }, a.createElement("strong", {
            className: "img_loading"
          }), a.createElement("strong", {
            className: "text_loading",
            style: {
              fontSize: "30px"
            }
          }, r.CAPTION.LOADING)));
        },
        2591: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const a = s(i(7363)),
            r = i(3256);
          t.default = e => a.createElement("div", {
            id: "pageMask"
          }, a.createElement("div", {
            className: "student_screen"
          }, a.createElement("strong", {
            style: {
              fontSize: "30px",
              background: "none"
            }
          }, r.CAPTION.LOADING)));
        },
        80: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const r = s(i(7363)),
            l = a(i(2591)),
            c = a(i(3546)),
            u = a(i(9625)),
            d = a(i(434));
          t.default = ({
            layoutState: e
          }) => {
            const {
              isVisibleSpinner: t,
              isVisibleLoadingSpinner: i,
              isVisibleLoadingProgSpinner: n,
              isVisibleAPSearchSpinner: o
            } = e;
            return r.createElement(r.Fragment, null, t && r.createElement(l.default, null), i && r.createElement(c.default, null), n && r.createElement(d.default, null), o && r.createElement(u.default, null));
          };
        },
        2229: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const o = i(1438),
            s = n(i(2166)),
            a = n(i(4238)),
            r = n(i(6583)),
            l = (0, s.default)(),
            c = (0, o.applyMiddleware)(l);
          t.default = {
            history,
            configureStore(e, t) {
              const i = (0, o.createStore)(a.default, e, c);
              return i.subscribe(() => {
                t();
              }), l.run(r.default), i;
            }
          };
        },
        9907: function (e, t, i) {
          "use strict";
  
          let n;
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), n = i(2229), t.default = function (e, t) {
            return n.default.configureStore(e, t);
          };
        },
        4934: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.DrawingToolMode = t.PortfolioActionType = t.SortType = t.ButtonDisplayState = t.DownloadProgPopupType = t.TeacherPreferenceType = t.ContentTransmissionType = t.HealthCheckResultType = t.ContentDownloadResultType = t.LoginAPIErrorCode = t.BrainstormingType = t.StudentDrawingToolType = t.KeyboardKeyCode = t.StampObjectKind = t.StampListBarVisibleType = t.ContentType = t.ImageFileLoadResultType = t.ContentStartType = t.PollType = t.DebateOpinionType = t.PartLessonType = t.UserMessage = t.DrawingBoardType = t.DisplayMode = t.StudentCommonViewType = t.StudentCommonResultType = t.TeachingToolType = t.NetworkErrorCode = t.Completed = t.AccountState = t.SessionState = t.Gender = t.UserRole = t.ReportViewType = t.ReportType = t.ServiceType = t.AccountIdDefaultVal = void 0, t.AccountIdDefaultVal = -1, function (e) {
            e.MATHALIVE = "mathalive", e.ELIF = "elif", e.WINGS = "wings", e.CHALLENGE = "challenge";
          }(t.ServiceType || (t.ServiceType = {})), function (e) {
            e[e.NONE = 0] = "NONE", e[e.ENTERANT = 1] = "ENTERANT", e[e.TEXT = 2] = "TEXT", e[e.IMAGE = 3] = "IMAGE", e[e.AUDIO = 4] = "AUDIO", e[e.VIDEO = 5] = "VIDEO", e[e.ETC = 6] = "ETC";
          }(t.ReportType || (t.ReportType = {})), function (e) {
            e.NUMBER = "A", e.LIST = "B", e.HIDE = "C";
          }(t.ReportViewType || (t.ReportViewType = {})), function (e) {
            e[e.INVALID = 0] = "INVALID", e[e.TEACHER = 1] = "TEACHER", e[e.STUDENT = 2] = "STUDENT";
          }(t.UserRole || (t.UserRole = {})), function (e) {
            e[e.MALE = 0] = "MALE", e[e.FEMALE = 1] = "FEMALE";
          }(t.Gender || (t.Gender = {})), function (e) {
            e[e.JOINING = 0] = "JOINING", e[e.READY = 1] = "READY", e[e.OUT_CLASS = 2] = "OUT_CLASS", e[e.IN_CLASS = 3] = "IN_CLASS", e[e.ABNORMAL = 4] = "ABNORMAL", e[e.LEAVING = 5] = "LEAVING", e[e.REMOVED = 6] = "REMOVED";
          }(t.SessionState || (t.SessionState = {})), function (e) {
            e[e.INVALID = 0] = "INVALID", e[e.IN_CLASS = 1] = "IN_CLASS", e[e.OUT_CLASS = 2] = "OUT_CLASS", e[e.LOGOUT = 3] = "LOGOUT", e[e.DISCONNECT = 4] = "DISCONNECT";
          }(t.AccountState || (t.AccountState = {})), function (e) {
            e[e.INVALID = 0] = "INVALID", e[e.COMPLETED = 1] = "COMPLETED", e[e.NOT_COMPLETED = 2] = "NOT_COMPLETED";
          }(t.Completed || (t.Completed = {})), function (e) {
            e[e.OK = 0] = "OK", e[e.CANCELED = 1] = "CANCELED", e[e.UNKNOWN = 2] = "UNKNOWN", e[e.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", e[e.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", e[e.NOT_FOUND = 5] = "NOT_FOUND", e[e.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", e[e.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", e[e.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", e[e.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", e[e.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", e[e.ABORTED = 10] = "ABORTED", e[e.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", e[e.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", e[e.INTERNAL = 13] = "INTERNAL", e[e.UNAVAILABLE = 14] = "UNAVAILABLE", e[e.DATA_LOSS = 15] = "DATA_LOSS", e[e.API_ERROR = 101] = "API_ERROR", e[e.STREAM_NOT_READY = 1001] = "STREAM_NOT_READY";
          }(t.NetworkErrorCode || (t.NetworkErrorCode = {})), function (e) {
            e[e.LESSON_MAP = 0] = "LESSON_MAP", e[e.LOCK = 1] = "LOCK", e[e.PEN = 2] = "PEN", e[e.LIBRARY = 3] = "LIBRARY", e[e.TIMER = 4] = "TIMER", e[e.PRESENTER = 5] = "PRESENTER", e[e.PARTICIPATE_LESSON = 6] = "PARTICIPATE_LESSON", e[e.STAMP = 7] = "STAMP", e[e.CELEBRATION = 8] = "CELEBRATION", e[e.DIRECTION_LEFT = 9] = "DIRECTION_LEFT", e[e.DIRECTION_RIGHT = 10] = "DIRECTION_RIGHT", e[e.MAX_CNT = 11] = "MAX_CNT", e[e.PORTFOLIO = 12] = "PORTFOLIO";
          }(t.TeachingToolType || (t.TeachingToolType = {})), function (e) {
            e[e.TYPE_INVALID = 0] = "TYPE_INVALID", e[e.TYPE_COUNTER = 1] = "TYPE_COUNTER", e[e.TYPE_TEXT = 2] = "TYPE_TEXT", e[e.TYPE_IMAGE = 3] = "TYPE_IMAGE", e[e.TYPE_AUDIO = 4] = "TYPE_AUDIO", e[e.TYPE_VIDEO = 5] = "TYPE_VIDEO", e[e.TYPE_COUNTER_CUSTOM = 6] = "TYPE_COUNTER_CUSTOM", e[e.TYPE_AUDIO_IMAGE = 7] = "TYPE_AUDIO_IMAGE";
          }(t.StudentCommonResultType || (t.StudentCommonResultType = {})), function (e) {
            e.TYPE_A = "A", e.TYPE_B = "B", e.TYPE_C = "C";
          }(t.StudentCommonViewType || (t.StudentCommonViewType = {})), function (e) {
            e[e.DEFAULT_THUMB_N_NAME = 0] = "DEFAULT_THUMB_N_NAME", e[e.PROFILE_THUMB_N_NICKNAME = 1] = "PROFILE_THUMB_N_NICKNAME";
          }(t.DisplayMode || (t.DisplayMode = {})), function (e) {
            e[e.BASIC = 0] = "BASIC", e[e.CROP_RESULT = 1] = "CROP_RESULT", e[e.WHITEBOARD = 2] = "WHITEBOARD", e[e.LINEBOARD = 3] = "LINEBOARD", e[e.IMAGE = 4] = "IMAGE", e[e.SQUAREBOARD = 5] = "SQUAREBOARD", e[e.FOURLINEBOARD = 6] = "FOURLINEBOARD", e[e.FOURLINETRACEBOARD = 7] = "FOURLINETRACEBOARD";
          }(t.DrawingBoardType || (t.DrawingBoardType = {})), function (e) {
            let t, i;
            !function (e) {
              e.START_CONTENT = "START_CONTENT", e.FINISH_CONTENT = "FINISH_CONTENT", e.START_LOCK = "START_LOCK", e.FINISH_LOCK = "FINISH_LOCK", e.START_CROP_DRAWING = "START_CROP_DRAWING", e.FINISH_CROP_DRAWING = "FINISH_CROP_DRAWING", e.SUBMIT_CROP_RESULT = "SUBMIT_CROP_RESULT", e.START_TAKE_PHOTO = "START_TAKE_PHOTO", e.FINISH_TAKE_PHOTO = "FINISH_TAKE_PHOTO", e.FORCE_LOGOUT = "FORCE_LOGOUT", e.SERVER_TERMINATED = "SERVER_TERMINATED", e.SUBMIT_CONTENT_REPORT = "SUBMIT_CONTENT_REPORT", e.PRESENTER_PICKED_STUDENT = "PRESENTER_PICKED_STUDENT", e.GROUP_RESULT_STUDENT = "GROUP_RESULT_STUDENT", e.START_PART_LESSON = "START_PART_LESSON", e.FINISH_PART_LESSON = "FINISH_PART_LESSON", e.SUBMIT_PART_LESSON = "SUBMIT_PART_LESSON", e.APPLY_STAMP = "APPLY_STAMP", e.FETCH_DOWNLOAD_BOOK_VERSION = "FETCH_DOWNLOAD_BOOK_VERSION", e.RESPONSE_DOWNLOAD_BOOK_VERSION = "RESPONSE_DOWNLOAD_BOOK_VERSION", e.PREPARE_FORCE_CONTENT_DOWNLOAD = "PREPARE_FORCE_CONTENT_DOWNLOAD", e.START_FORCE_CONTENT_DOWNLOAD = "START_FORCE_CONTENT_DOWNLOAD", e.STOP_FORCE_CONTENT_DOWNLOAD = "STOP_FORCE_CONTENT_DOWNLOAD", e.REPORT_FORCE_CONTENT_DOWNLOAD_STATUS = "REPORT_FORCE_CONTENT_DOWNLOAD_STATUS";
            }(t = e.Type || (e.Type = {})), function (e) {
              e.LAUNCHER = "LAUNCHER", e.CONTENT = "CONTENT";
            }(i = e.Target || (e.Target = {}));
          }(t.UserMessage || (t.UserMessage = {})), function (e) {
            e[e.INVALID = 0] = "INVALID", e[e.BRAINSTORMING = 1] = "BRAINSTORMING", e[e.DISCUSSION = 2] = "DISCUSSION", e[e.DEBATE = 3] = "DEBATE", e[e.POLL = 4] = "POLL", e[e.CHATTING = 5] = "CHATTING", e[e.PORTFOLIO = 6] = "PORTFOLIO";
          }(t.PartLessonType || (t.PartLessonType = {})), function (e) {
            e[e.INVALID = 0] = "INVALID", e[e.AGREE = 1] = "AGREE", e[e.DISAGREE = 2] = "DISAGREE";
          }(t.DebateOpinionType || (t.DebateOpinionType = {})), function (e) {
            e[e.INVALID = 0] = "INVALID", e[e.TYPE_TEXT = 1] = "TYPE_TEXT", e[e.TYPE_PICTURE = 2] = "TYPE_PICTURE";
          }(t.PollType || (t.PollType = {})), function (e) {
            e.NORMAL = "normal", e.ABNORMAL = "abnormal";
          }(t.ContentStartType || (t.ContentStartType = {})), function (e) {
            e.SUCCESS = "SUCCESS", e.FAIL_BY_INVALID = "FAIL_BY_INVALID", e.FAIL_BY_SIZE = "FAIL_BY_SIZE", e.FAIL_BY_NOT_SELECTED = "FAIL_BY_NOT_SELECTED";
          }(t.ImageFileLoadResultType || (t.ImageFileLoadResultType = {})), function (e) {
            e[e.INVALID = 0] = "INVALID", e[e.CURRICULUM_CONTENT = 1] = "CURRICULUM_CONTENT", e[e.EXTRA_ACTIVITY_CONTENT = 2] = "EXTRA_ACTIVITY_CONTENT";
          }(t.ContentType || (t.ContentType = {})), function (e) {
            e[e.STAMP = 1] = "STAMP", e[e.PARTICIPATE = 2] = "PARTICIPATE", e[e.SUBMIT_DETAIL = 3] = "SUBMIT_DETAIL";
          }(t.StampListBarVisibleType || (t.StampListBarVisibleType = {})), function (e) {
            e.PARTICIPATE = "P", e.STUDY = "S";
          }(t.StampObjectKind || (t.StampObjectKind = {})), function (e) {
            e[e.ENTER = 13] = "ENTER", e[e.BACK_SPACE = 8] = "BACK_SPACE";
          }(t.KeyboardKeyCode || (t.KeyboardKeyCode = {})), function (e) {
            e[e.INVALID = 0] = "INVALID", e[e.PORTFOLIO = 1] = "PORTFOLIO", e[e.CROP_DRAWING = 2] = "CROP_DRAWING", e[e.REMOTE_PEN = 3] = "REMOTE_PEN", e[e.BASIC_PEN = 4] = "BASIC_PEN";
          }(t.StudentDrawingToolType || (t.StudentDrawingToolType = {})), function (e) {
            e[e.TYPE_INVALID = 0] = "TYPE_INVALID", e[e.TYPE_INDIVIDUAL = 1] = "TYPE_INDIVIDUAL", e[e.TYPE_GROUP = 2] = "TYPE_GROUP";
          }(t.BrainstormingType || (t.BrainstormingType = {})), function (e) {
            e[e.ID_NOT_EXIST = 101] = "ID_NOT_EXIST", e[e.PASSWORD_NOT_MATCH = 102] = "PASSWORD_NOT_MATCH";
          }(t.LoginAPIErrorCode || (t.LoginAPIErrorCode = {})), function (e) {
            e[e.INVALID = 0] = "INVALID", e[e.SUCCESS = 1] = "SUCCESS", e[e.FAIL_BY_EMPTY = 2] = "FAIL_BY_EMPTY", e[e.FAIL_BY_STUDENT = 3] = "FAIL_BY_STUDENT", e[e.FAIL_BY_ANDROID = 4] = "FAIL_BY_ANDROID", e[e.FAIL_BY_EXCEPTION = 5] = "FAIL_BY_EXCEPTION", e[e.FAIL_BY_NOTHING_UPDATE = 6] = "FAIL_BY_NOTHING_UPDATE", e[e.FAIL_BY_SERVER_NOT_EXIST_CONTENT = 7] = "FAIL_BY_SERVER_NOT_EXIST_CONTENT", e[e.FAIL_BY_NOT_ENOUGH_SPACE = 8] = "FAIL_BY_NOT_ENOUGH_SPACE", e[e.FAIL_BY_NETWORK = 9] = "FAIL_BY_NETWORK";
          }(t.ContentDownloadResultType || (t.ContentDownloadResultType = {})), function (e) {
            e[e.SUCCESS = 0] = "SUCCESS", e[e.FAIL_BY_NETWORK = 1] = "FAIL_BY_NETWORK";
          }(t.HealthCheckResultType || (t.HealthCheckResultType = {})), function (e) {
            e[e.INVALID = 0] = "INVALID", e[e.DOWNLOAD = 1] = "DOWNLOAD", e[e.STREAMING = 2] = "STREAMING";
          }(t.ContentTransmissionType || (t.ContentTransmissionType = {})), function (e) {
            e.CONTENT_TRANSMISSION_MODE = "CONTENT_TRANSMISSION_MODE";
          }(t.TeacherPreferenceType || (t.TeacherPreferenceType = {})), function (e) {
            e[e.DOWNLOAD = 0] = "DOWNLOAD", e[e.TO_PAD = 1] = "TO_PAD", e[e.APK_DOWNLOAD = 2] = "APK_DOWNLOAD";
          }(t.DownloadProgPopupType || (t.DownloadProgPopupType = {})), function (e) {
            e[e.ENABLE = 0] = "ENABLE", e[e.DISABLE = 1] = "DISABLE", e[e.DISAPPER = 2] = "DISAPPER";
          }(t.ButtonDisplayState || (t.ButtonDisplayState = {})), function (e) {
            e[e.INVALID = 0] = "INVALID", e[e.NAME = 1] = "NAME", e[e.UPLOAD_TIME = 2] = "UPLOAD_TIME";
          }(t.SortType || (t.SortType = {})), function (e) {
            e[e.INVALID = 0] = "INVALID", e[e.WRITING = 1] = "WRITING", e[e.DRAWING = 2] = "DRAWING", e[e.AUDIO = 3] = "AUDIO", e[e.VIDEO = 4] = "VIDEO";
          }(t.PortfolioActionType || (t.PortfolioActionType = {})), function (e) {
            e[e.BAR = 0] = "BAR", e[e.FLOATING = 1] = "FLOATING";
          }(t.DrawingToolMode || (t.DrawingToolMode = {}));
        },
        7853: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.WrapperAppStudent = void 0;
          const r = s(i(7363)),
            l = i(8685),
            c = a(i(5175)),
            u = i(3195);
          i(2766), i(5112), i(8110);
          const d = a(i(6664)),
            _ = a(i(8895)),
            T = a(i(80)),
            S = e => e;
          class p extends r.Component {
            constructor(e) {
              super(e), this.WrapperAppStudentInner = (0, l.connect)(S)(e => r.createElement(r.Fragment, null, r.createElement(c.default, null), r.createElement(d.default, null), r.createElement(_.default, null), r.createElement(T.default, {
                layoutState: e.layout
              }))), window.addEventListener("dragover", e => {
                (e = e || event).preventDefault();
              }, !1), window.addEventListener("drop", e => {
                (e = e || event).preventDefault();
              }, !1), (0, u.saveStore)(this.props.storeitem);
            }
            render() {
              return r.createElement(l.Provider, {
                store: this.props.storeitem
              }, r.createElement(this.WrapperAppStudentInner, null));
            }
          }
          t.WrapperAppStudent = p;
        },
        2637: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.convertBookPathToBookSeq = void 0, t.convertBookPathToBookSeq = e => Number(e.replace("/content/", ""));
        },
        9076: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.isElectron = t.isAndroid = void 0, t.isAndroid = () => /android/i.test(navigator.userAgent.toLowerCase()), t.isElectron = () => /electron/i.test(navigator.userAgent.toLowerCase());
        },
        2614: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.isExistNotDownloadedContent = t.getDownloadRequestBookSeq = t.getTemplateRootPath = t.convertByteFormat = t.canDownloadExtraActivityListForStudent = t.canDownloadExtraActivityListForTeacher = t.canDownloadExtraActivityForStudent = t.canDownloadExtraActivityForTeacher = t.canDownloadCurriculumForTeacher = t.getUpdateableBookSeqList = t.canDownloadClassBook = t.canDownloadCurriculumForStudent = t.getRemoveTargetBookSeqListFromExtraActivity = t.getRemoveTargetBookSeqList = t.getDownloadableBookSeqListFromExtraActivity = t.getTotalUnitSize = t.getTotalBookSize = t.getDownloadableBookSeqListFromBook = t.getDownloadableBookSeqListFromUnit = t.getFileListDomain = t.DownloadCheckType = void 0;
          const o = n(i(7398)),
            s = i(8028),
            a = i(2637),
            r = i(9123),
            l = n(i(7299));
          var c;
          !function (e) {
            e[e.INVALID = 0] = "INVALID", e[e.BOOK = 1] = "BOOK", e[e.UNIT = 2] = "UNIT";
          }(c = t.DownloadCheckType || (t.DownloadCheckType = {})), t.getFileListDomain = (e = !0) => {
            let t = s.DEFAULT_API_DOMAIN;
            const i = o.default.getItem("ss_settings");
            return void 0 !== i && (t = i.domain), t + "/Launcher/Contents/getFileList.json?" + (e ? "cn=" : "");
          }, t.getDownloadableBookSeqListFromUnit = e => {
            const t = [];
            for (let i = 0; i <= e.childrenList.length; i += 1) {
              const n = e.childrenList[i];
              if (n) for (let e = 0; e <= n.childrenList.length; e += 1) {
                const i = n.childrenList[e];
                i && i.book && i.book.path && t.push((0, a.convertBookPathToBookSeq)(i.book.path));
              }
            }
            return (0, r.unique)(t);
          }, t.getDownloadableBookSeqListFromBook = e => (0, r.unique)((0, r.flatten)(e.childrenList.filter(e => e.childrenList).map(e => e.childrenList.filter(e => e.childrenList).map(e => e.childrenList.filter(e => e && e.book && e.book.path).map(e => (0, a.convertBookPathToBookSeq)(e.book.path)))))), t.getTotalBookSize = e => (0, r.flatten)(e.childrenList.filter(e => e.childrenList).map(e => e.childrenList.filter(e => e.childrenList).map(e => e.childrenList.filter(e => e && e.book && e.book.path).map(e => e.book.size)))).reduce((e, t) => e + t, 0), t.getTotalUnitSize = e => (0, r.flatten)(e.childrenList.filter(e => e.childrenList).map(e => e.childrenList.filter(e => e && e.book && e.book.path).map(e => e.book.size))).reduce((e, t) => e + t, 0), t.getDownloadableBookSeqListFromExtraActivity = e => Array.from(new Set(e.filter(e => e && e.book && e.book.path).map(e => (0, a.convertBookPathToBookSeq)(e.book.path)))), t.getRemoveTargetBookSeqList = e => {
            const t = [];
            for (let i = 0; i < e.childrenList.length; i += 1) {
              const n = e.childrenList[i];
              if (n) for (let e = 0; e < n.childrenList.length; e += 1) {
                const i = n.childrenList[e];
                if (i && i.book && i.book.path) {
                  const e = (0, a.convertBookPathToBookSeq)(i.book.path);
                  l.default.isDownloadedContent(e) && t.push(e);
                }
              }
            }
            return (0, r.unique)(t);
          }, t.getRemoveTargetBookSeqListFromExtraActivity = e => {
            const t = (0, a.convertBookPathToBookSeq)(e.book.path);
            return l.default.isDownloadedContent(t) ? [t] : [];
          };
          const u = e => {
              const t = [];
              for (let i = 0; i < e.childrenList.length; i += 1) {
                const n = e.childrenList[i];
                if (n) for (let e = 0; e < n.childrenList.length; e += 1) {
                  const i = n.childrenList[e];
                  i && i.book && i.book.path && t.push((0, a.convertBookPathToBookSeq)(i.book.path));
                }
              }
              return (0, r.unique)(t);
            },
            d = e => {
              const t = [];
              for (let i = 0; i <= e.childrenList.length; i += 1) {
                const n = e.childrenList[i];
                if (n) for (let e = 0; e < n.childrenList.length; e += 1) {
                  const i = n.childrenList[e];
                  if (i) for (let e = 0; e < i.childrenList.length; e += 1) {
                    const n = i.childrenList[e];
                    n && n.book && n.book.path && t.push((0, a.convertBookPathToBookSeq)(n.book.path));
                  }
                }
              }
              return (0, r.unique)(t);
            };
          t.canDownloadCurriculumForStudent = (e, i, n) => {
            const o = l.default.getServerBookVersionData();
            if (void 0 === o) return !1;
            let s;
            return s = e === c.UNIT ? u(i) : e === c.BOOK ? d(i) : [], !(0 === s.length || (0, t.isExistNotDownloadedContent)(s, o.bookVersion) || void 0 !== n && !(s.map(e => _(o, n, e)).filter(e => e).length > 0));
          }, t.canDownloadClassBook = e => (0, t.getUpdateableBookSeqList)(e).length > 0, t.getUpdateableBookSeqList = e => {
            const t = l.default.getServerBookVersionData();
            if (void 0 === t) return [];
            if (void 0 === t.bookSeq) return [];
            const i = l.default.getLocalBookVersionDataList();
            if (void 0 === i) return [];
            var n = t.bookSeq.filter(t => t.classIdx === e);
            if (0 === n.length) return [];
            var o = n[0].bookSeqs;
            return (0, r.unique)(o.map(e => _(t, i, Number(e)) ? Number(e) : void 0).filter(e => void 0 !== e));
          }, t.canDownloadCurriculumForTeacher = (e, t, i) => {
            const n = l.default.getServerBookVersionData();
            if (void 0 === n) return !1;
            let o;
            return o = e === c.UNIT ? u(t) : e === c.BOOK ? d(t) : [], 0 !== o.length && ((void 0 === i || 0 === i.length) && o.length > 0 || !!(o.map(e => _(n, i, e)).filter(e => e).length > 0));
          }, t.canDownloadExtraActivityForTeacher = (e, t) => {
            const i = l.default.getServerBookVersionData();
            if (void 0 === i) return !1;
            if (void 0 === t) return !!(e.book && e.book.path.length > 0);
            const n = (0, a.convertBookPathToBookSeq)(e.book.path);
            return _(i, t, n);
          }, t.canDownloadExtraActivityForStudent = (e, t) => {
            const i = l.default.getServerBookVersionData();
            if (void 0 === i) return !1;
            const n = (0, a.convertBookPathToBookSeq)(e.book.path);
            return -1 !== i.bookVersion.findIndex(e => e.bkSeq === n) && (void 0 === t ? e.book && e.book.path.length > 0 : _(i, t, n));
          }, t.canDownloadExtraActivityListForTeacher = (e, t) => {
            const i = l.default.getServerBookVersionData();
            if (void 0 === i) return !1;
            const n = e.filter(e => e.book && e.book.path).map(e => (0, a.convertBookPathToBookSeq)(e.book.path));
            return 0 !== n.length && ((void 0 === t || 0 === t.length) && n.length > 0 || !!(n.map(e => _(i, t, e)).filter(e => e).length > 0));
          }, t.canDownloadExtraActivityListForStudent = (e, i, n) => {
            const o = l.default.getServerBookVersionData();
            if (void 0 === o) return !1;
            const s = i.filter(e => e.book && e.book.path).map(e => (0, a.convertBookPathToBookSeq)(e.book.path));
            return !(0 === s.length || (0, t.isExistNotDownloadedContent)(s, o.bookVersion) || void 0 !== n && 0 !== n.length && !(s.map(e => _(o, n, e)).filter(e => e).length > 0));
          };
          const _ = (e, t, i) => {
            const n = e.bookVersion.filter(e => e.bkSeq === i),
              o = t.filter(e => e.bkSeq === i);
            return 0 !== n.length && (0 === o.length || n[0].commonVersion !== o[0].commonVersion || n[0].templateVersion !== o[0].templateVersion || n[0].dataVersion !== o[0].dataVersion);
          };
          t.convertByteFormat = e => {
            let t = 0,
              i = "string" == typeof e ? parseInt(e, 10) || 0 : e;
            for (; i >= 1024;) i /= 1024, t += 1;
            return `${i.toFixed(i >= 10 || t < 1 ? 0 : 1)} ${["bytes", "KB", "M", "G", "TB", "PB", "EB", "ZB", "YB"][t]}`;
          }, t.getTemplateRootPath = e => e.split("\\")[0], t.getDownloadRequestBookSeq = (e, i, n) => {
            const o = [];
            return e.forEach(e => {
              const s = i.find(t => t.bkSeq === e),
                a = n.find(t => t.bkSeq === e);
              s && !a && (o.push(e.toString()), o.push((0, t.getTemplateRootPath)(s.templatePath))), s && a && (s.commonVersion === a.commonVersion && s.templateVersion === a.templateVersion || o.push((0, t.getTemplateRootPath)(s.templatePath)), s.dataVersion !== a.dataVersion && o.push(e.toString()));
            }), (0, r.unique)(o).filter(e => e.length > 0);
          }, t.isExistNotDownloadedContent = (e, t) => {
            if (e.map(e => -1 !== t.findIndex(t => t.bkSeq === e)).filter(e => !e).length > 0) {
              const i = e.map(e => -1 === t.findIndex(t => t.bkSeq === e) ? e : void 0).filter(e => void 0 !== e);
              return console.error("server notDownloadBookSeqList:", i), !0;
            }
            return !1;
          };
        },
        9123: function (e, t, i) {
          "use strict";
  
          var n = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.unique = t.delay = t.flatten = t.currentTimeStamp = t.getRandomFloat = t.convertDateTimeToUnixTime = t.checkEmptyString = t.convertUnixTime = t.getRandomInt = t.shuffleArray = t.pad = t.convertMilSecToTime = t.convertSecToTime = t.convertCodeToSeq = t.formattedString = void 0;
          const o = n(i(381));
          t.formattedString = (...e) => {
            let t = e[0];
            for (let i = 1; i < e.length; i += 1) {
              const n = new RegExp(`\\{${i - 1}\\}`, "gm");
              t = t.replace(n, e[i]);
            }
            return t;
          }, t.convertCodeToSeq = e => Number(e.slice(e.length - 4, e.length)), t.convertSecToTime = e => {
            const t = Math.floor(e / 3600),
              i = e - 3600 * t,
              n = Math.floor(i / 60);
            return {
              hour: t,
              min: n,
              second: i - 60 * n
            };
          }, t.convertMilSecToTime = e => {
            const t = e / 1e3,
              i = Math.floor(t / 3600),
              n = t - 3600 * i,
              o = Math.floor(n / 60);
            return {
              hour: i,
              min: o,
              second: Math.floor(n - 60 * o),
              milSec: Math.floor(100 * t - 100 * Math.floor(t))
            };
          }, t.pad = (e, t) => {
            const i = e + "";
            return i.length >= t ? i : new Array(t - i.length + 1).join("0") + i;
          }, t.shuffleArray = e => e.map(e => [Math.random(), e]).sort((e, t) => e[0] - t[0]).map(e => e[1]), t.getRandomInt = (e, t) => Math.floor(Math.random() * (t - e + 1) + e), t.convertUnixTime = (e, t = "YYYY/MM/DD") => (0, o.default)(e, "X", !1).format(t), t.checkEmptyString = e => {
            if (0 === e.length) return !0;
            for (let t = 0; t < e.length; ++t) if (" " !== e.charAt(t)) return !1;
            return !0;
          }, t.convertDateTimeToUnixTime = e => {
            const t = (0, o.default)(e, "YYYY-MM-DD HH:mm:ss");
            return t.isValid() ? Number(t.format("X")) : (console.error("invalid date format. use current time"), Number((0, o.default)().format("X")));
          }, t.getRandomFloat = (e, t) => Math.random() * (t - e + 1) + e, t.currentTimeStamp = () => Number((0, o.default)().format("x")), t.flatten = e => {
            const i = [];
            return e.forEach(e => {
              Array.isArray(e) ? i.push(...(0, t.flatten)(e)) : i.push(e);
            }), i;
          }, t.delay = e => new Promise((t, i) => setTimeout(() => t(), e)), t.unique = e => Array.from(new Set(e));
        },
        2629: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const a = s(i(7363));
          class r extends a.Component {
            constructor(e) {
              super(e), this.curImageIdx = 0, this.curImageIdx = 0, this.state = {
                imageUrl: e.imageUrls[this.curImageIdx]
              };
            }
            componentDidMount() {
              this.startInterval();
            }
            componentWillUnmount() {
              this.clearInterval();
            }
            startInterval() {
              const {
                  imageUrls: e,
                  durationSec: t
                } = this.props,
                i = 1e3 * t / e.length;
              this.clearInterval(), this.interval = window.setInterval(() => {
                this.curImageIdx += 1, this.curImageIdx >= e.length && (this.curImageIdx = 0);
                const t = e[this.curImageIdx];
                this.setState({
                  imageUrl: t
                });
              }, i);
            }
            clearInterval() {
              this.interval && window.clearInterval(this.interval);
            }
            render() {
              const {
                imageUrl: e
              } = this.state;
              return a.createElement("img", {
                src: e
              });
            }
          }
          t.default = r;
        },
        2262: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.getNextGroupDataIndex = t.getNextCropDrawingDataIndex = void 0;
          let i = 0,
            n = 0;
          t.getNextCropDrawingDataIndex = () => (i += 1, i), t.getNextGroupDataIndex = () => (n += 1, n);
        },
        3955: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.getContentRootPath = t.getContentLocalFilePath = t.getLocalFilePath = void 0, t.getLocalFilePath = (e, t) => process.cwd() + ("" === e ? "" : "\\") + e + "\\" + t, t.getContentLocalFilePath = e => (0, t.getLocalFilePath)("resources\\app\\public\\content", e.replace("/content/", "")), t.getContentRootPath = () => "resources\\app\\public\\content\\";
        },
        2790: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const i = new class {
            constructor() {
              this.serverHost = "127.0.0.1", this.serverPort = "8081", this.androidHost = "", this.URLtoURI = e => {
                if (e) {
                  const t = e.split(this.serverPort);
                  return t.length > 1 ? t[1] : t[0];
                }
                return e;
              };
            }
            getServerHost() {
              return "/mathalive";
            }
            setServerHost(e) {
              this.serverHost = e;
            }
            setAndroidHost(e) {
              this.androidHost = e;
            }
            getAndroidHost() {
              return this.androidHost;
            }
            makeAndroidServerUrl(e) {
              return `${this.getAndroidHost()}${e || ""}`;
            }
            makeUrl(e) {
              return e;
            }
          }();
          t.default = i;
        },
        7744: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.LocalStorageKey = void 0, function (e) {
            e.SERVER_BOOK_VERSION = "SERVER_BOOK_VERSION";
          }(t.LocalStorageKey || (t.LocalStorageKey = {}));
          const i = new class {
            constructor() {
              this.localStorage = window.localStorage;
            }
            setItem(e, t) {
              this.localStorage[e] = JSON.stringify(t);
            }
            getItem(e) {
              const t = this.localStorage[e];
              if (t) return JSON.parse(t);
            }
            removeItem(e) {
              this.localStorage.removeItem(e);
            }
            clear() {
              this.localStorage.clear();
            }
          }();
          t.default = i;
        },
        3782: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.convertErrorEvtToMessage = void 0;
          const i = e => 0 === e ? "NETWORK_EMPTY" : 1 === e ? "NETWORK_IDLE" : 2 === e ? "NETWORK_LOADING" : 3 === e ? "NETWORK_NO_SOURCE" : "INVALID_NETWORK_STATE";
          t.convertErrorEvtToMessage = e => {
            const t = e.target.parentNode.error,
              n = e.target.parentNode.networkState;
            return {
              error: t,
              networkState: i(n)
            };
          };
        },
        3003: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.getMemberDisplayMode = void 0;
          const n = i(8028),
            o = i(3195);
          t.getMemberDisplayMode = e => {
            var t, i, s, a;
            return (null === (i = null === (t = (0, o.getGlobalStore)().getState()) || void 0 === t ? void 0 : t.contentTool) || void 0 === i ? void 0 : i.profileMode) ? null === (a = null === (s = (0, o.getGlobalStore)().getState()) || void 0 === s ? void 0 : s.contentTool) || void 0 === a ? void 0 : a.profileMode : n.DEFAULT_DISPLAY_MODE;
          };
        },
        1083: function (e, t, i) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.filterExtraActivityList = t.convertErrorCode = t.isContentTransModeType = t.convertContentTransModeToStr = t.convertContentTransMode = t.makeLowerKey = t.convertDisplayModeToMemViewMode = t.convertMemViewModeToDisplayMode = void 0;
          const n = i(4934),
            o = i(8028);
          t.convertMemViewModeToDisplayMode = e => "1" === e ? n.DisplayMode.DEFAULT_THUMB_N_NAME : n.DisplayMode.PROFILE_THUMB_N_NICKNAME, t.convertDisplayModeToMemViewMode = e => e === n.DisplayMode.DEFAULT_THUMB_N_NAME ? "1" : e === n.DisplayMode.PROFILE_THUMB_N_NICKNAME ? "2" : "", t.makeLowerKey = e => {
            const t = Object.assign({}, e);
            return Object.keys(e).forEach(e => {
              t[e.toLowerCase()] = t[e];
            }), t;
          }, t.convertContentTransMode = e => "DOWNLOAD" === e ? n.ContentTransmissionType.DOWNLOAD : "STREAMING" === e ? n.ContentTransmissionType.STREAMING : n.ContentTransmissionType.INVALID, t.convertContentTransModeToStr = e => e === n.ContentTransmissionType.DOWNLOAD ? "DOWNLOAD" : e === n.ContentTransmissionType.STREAMING ? "STREAMING" : "INVALID", t.isContentTransModeType = e => "CONTENT_TRANSMISSION_MODE" === e, t.convertErrorCode = e => "NOT_FOUND" === e ? n.NetworkErrorCode.NOT_FOUND : "FAILED_PRECONDITION" === e ? n.NetworkErrorCode.FAILED_PRECONDITION : "INTERNAL" === e ? n.NetworkErrorCode.INTERNAL : n.NetworkErrorCode.UNKNOWN, t.filterExtraActivityList = e => (e || []).filter(e => e.type !== o.ExtraBookType.WINGS);
        },
        7398: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          const i = new class {
            constructor() {
              this.sessionStorage = window.sessionStorage;
            }
            setItem(e, t) {
              this.sessionStorage[e] = JSON.stringify(t);
            }
            getItem(e) {
              const t = this.sessionStorage[e];
              if (t) return JSON.parse(t);
            }
            removeItem(e) {
              this.sessionStorage.removeItem(e);
            }
            clear() {
              this.sessionStorage.clear();
            }
          }();
          t.default = i;
        },
        263: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
              });
            } : function (e, t) {
              e.default = t;
            }),
            s = this && this.__importStar || function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
              return o(t, e), t;
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t._toStringTimestamp = t.getDateStr = t.nteArray = t.intToHTMLcolor = t.nteBool = t.nteString = t.nteFloat = t.nteInt = t.nteUInt = t.getUnicUrl = t.getUnicNum = t.getUnic = void 0;
          const a = s(i(9539));
          Date.now || (Date.now = function () {
            return new Date().getTime();
          });
          let r = 0;
          function l() {
            return c().toString(36);
          }
          function c() {
            const e = Date.now();
            return e > r ? r = e : r += 1, r;
          }
          t.getUnic = l, t.getUnicNum = c, t.getUnicUrl = function (e) {
            if (!e) return "";
            let t = e = e.trim();
            return 0 !== t.indexOf("http://") && 0 !== t.indexOf("https://") || (t = t.indexOf("?") > 0 ? t + "&t=" + l() : t + "?t=" + l()), t;
          }, t.nteUInt = function (e, t) {
            if (a.isNullOrUndefined(e)) return t;
            if (a.isNumber(e)) return isNaN(e) || e < 0 ? t : Math.round(e);
            {
              const i = parseInt(String(e), 10);
              return isNaN(i) || i < 0 ? t : i;
            }
          }, t.nteInt = function (e, t) {
            if (a.isNullOrUndefined(e)) return t;
            if (a.isNumber(e)) return Math.round(e);
            {
              const i = parseInt(String(e), 10);
              return isNaN(i) ? t : i;
            }
          }, t.nteFloat = function (e, t) {
            if (a.isNullOrUndefined(e)) return t;
            if (a.isNumber(e)) return e;
            {
              const i = parseFloat(String(e));
              return isNaN(i) ? t : i;
            }
          }, t.nteString = function (e, t) {
            return a.isNullOrUndefined(e) ? t : String(e);
          }, t.nteBool = function (e, t) {
            if (a.isNullOrUndefined(e)) return t;
            if (a.isBoolean(e)) return e;
            const i = String(e);
            return "true" === i || "false" !== i && t;
          }, t.intToHTMLcolor = function (e) {
            let t,
              i,
              n,
              o = e - 0;
            t = (255 & o) << 16, i = 65280 & o, n = (16711680 & o) >>> 16, o = t | i | n;
            let s = o.toString(16);
            return s = "#000000".substring(0, 7 - s.length) + s, s;
          }, t.nteArray = function (e) {
            if (e) {
              if (Array.isArray(e)) return e;
              if ("string" == typeof e) {
                const t = e;
                if (t.indexOf("[") >= 0 && t.indexOf("]") > 0) try {
                  return JSON.parse(t);
                } catch (e) {}
              }
              const t = [];
              return t.push(e), t;
            }
            return [];
          }, t.getDateStr = function (e = ".") {
            const t = new Date(),
              i = t.getFullYear(),
              n = t.getMonth() + 1,
              o = t.getDate();
            return i + e + (n < 10 ? "0" + n : "" + n) + e + (o < 10 ? "0" + o : "" + o);
          }, t._toStringTimestamp = function (e) {
            let t;
            const i = e.getFullYear();
            let n = e.getMonth() + 1 + "";
            parseInt(n, 10) < 10 && (n = "0" + n);
            let o = e.getDate() + "";
            return parseInt(o, 10) < 10 && (o = "0" + o), t = i + "-" + n + "-" + o + " " + e.toTimeString().substr(0, 8), t;
          };
        },
        590: function (e, t, i) {
          "use strict";
  
          var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
              void 0 === n && (n = i);
              var o = Object.getOwnPropertyDescriptor(t, i);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function () {
                  return t[i];
                }
              }), Object.defineProperty(e, n, o);
            } : function (e, t, i, n) {
              void 0 === n && (n = i), e[n] = t[i];
            }),
            o = this && this.__exportStar || function (e, t) {
              for (var i in e) "default" === i || Object.prototype.hasOwnProperty.call(t, i) || n(t, e, i);
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.easeOutSine = t.adjustRange = t.canUpdateVersion = t.isOnline = void 0, o(i(9076), t), o(i(9123), t), o(i(2790), t), o(i(3955), t), o(i(2637), t), o(i(2614), t), o(i(3782), t), t.isOnline = () => navigator.onLine;
          const s = e => {
            const t = e.split(".");
            return t.length < 3 ? {
              major: 0,
              minor: 0,
              patch: 0
            } : {
              major: parseInt(t[0], 10) || 0,
              minor: parseInt(t[1], 10) || 0,
              patch: parseInt(t[2], 10) || 0
            };
          };
          t.canUpdateVersion = (e, t) => {
            const i = s(e),
              n = s(t);
            if (i.major > n.major) return !0;
            if (i.major === n.major) {
              if (i.minor > n.minor) return !0;
              if (i.minor === n.minor && i.patch > n.patch) return !0;
            }
            return !1;
          }, t.adjustRange = (e, t, i) => Math.max(t, Math.min(i, e)), t.easeOutSine = (e, t, i, n) => i * Math.sin(e / n * (Math.PI / 2)) + t;
        },
        8957: function (e, t) {
          "use strict";
  
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = class {
            constructor(e = 0) {
              this.data = [], this.maxSize = e;
            }
            enqueue(e) {
              this.data.push(e), this.resizeQueue();
            }
            dequeue() {
              return this.data.shift();
            }
            peek(e = 0) {
              return this.data[e];
            }
            clear() {
              this.data = [];
            }
            size() {
              return this.data.length;
            }
            resizeQueue() {
              this.maxSize > 0 && this.size() > this.maxSize && (this.dequeue(), this.resizeQueue());
            }
          };
        },
        7179: function (e, t, i) {
          "use strict";
  
          function n(e, t) {
            return e.stack ? t ? `${t}\n${e.stack}` : e.stack.trim() : t ? `${t}\n${e.name}: ${e.message}` : `${e.name}: ${e.message}`;
          }
          i.d(t, {
            Z: function () {
              return n;
            }
          });
        },
        7363: function (e) {
          "use strict";
  
          e.exports = React;
        },
        1533: function (e) {
          "use strict";
  
          e.exports = ReactDOM;
        },
        5311: function (e) {
          "use strict";
  
          e.exports = jQuery;
        }
      },
      i = {};
    function n(e) {
      var o = i[e];
      if (void 0 !== o) return o.exports;
      var s = i[e] = {
        id: e,
        loaded: !1,
        exports: {}
      };
      return t[e].call(s.exports, s, s.exports, n), s.loaded = !0, s.exports;
    }
    n.m = t, e = [], n.O = function (t, i, o, s) {
      if (!i) {
        var a = 1 / 0;
        for (u = 0; u < e.length; u++) {
          i = e[u][0], o = e[u][1], s = e[u][2];
          for (var r = !0, l = 0; l < i.length; l++) (!1 & s || a >= s) && Object.keys(n.O).every(function (e) {
            return n.O[e](i[l]);
          }) ? i.splice(l--, 1) : (r = !1, s < a && (a = s));
          if (r) {
            e.splice(u--, 1);
            var c = o();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      s = s || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > s; u--) e[u] = e[u - 1];
      e[u] = [i, o, s];
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, {
        a: t
      }), t;
    }, n.d = function (e, t) {
      for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
        enumerable: !0,
        get: t[i]
      });
    }, n.g = function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    }(), n.hmd = function (e) {
      return (e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: function () {
          throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id);
        }
      }), e;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.nmd = function (e) {
      return e.paths = [], e.children || (e.children = []), e;
    }, function () {
      var e = {
        179: 0
      };
      n.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, i) {
          var o,
            s,
            a = i[0],
            r = i[1],
            l = i[2],
            c = 0;
          if (a.some(function (t) {
            return 0 !== e[t];
          })) {
            for (o in r) n.o(r, o) && (n.m[o] = r[o]);
            if (l) var u = l(n);
          }
          for (t && t(i); c < a.length; c++) s = a[c], n.o(e, s) && e[s] && e[s][0](), e[s] = 0;
          return n.O(u);
        },
        i = self.webpackChunkallvia_teaching_tool = self.webpackChunkallvia_teaching_tool || [];
      i.forEach(t.bind(null, 0)), i.push = t.bind(null, i.push.bind(i));
    }();
    var o = n.O(void 0, [801], function () {
      return n(6844);
    });
    o = n.O(o);
  }();