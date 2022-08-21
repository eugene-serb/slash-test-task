/* tslint:disable */

/* -------------------------------------------------- */

/*      Start of Webpack Hot Extension Middleware     */

/* ================================================== */

/*  This will be converted into a lodash templ., any  */

/*  external argument must be provided using it       */

/* -------------------------------------------------- */
(function (window) {
  var injectionContext = {
    browser: null
  };
  (function () {
    ""||(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("webextension-polyfill", ["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.browser = mod.exports;
  }
})(this, function (module) {
  /* webextension-polyfill - v0.5.0 - Thu Sep 26 2019 22:22:26 */
  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */
  /* vim: set sts=2 sw=2 et tw=80: */
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)";

    // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.
    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }

      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */
      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }
      }

      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */
      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };

      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function}
       *        The generated callback function.
       */
      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(extensionAPIs.runtime.lastError);
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";

      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */
      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({ resolve, reject }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);

                target[name](...args);

                // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.
                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;

                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({ resolve, reject }, metadata));
            }
          });
        };
      };

      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */
      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }
        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);

      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */
      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.

              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,
                get() {
                  return target[prop];
                },
                set(value) {
                  target[prop] = value;
                }
              });

              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }
            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }
        };

        // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.
        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };

      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */
      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }
      });

      // Keep track if the deprecation warning has been logged at least once.
      let loggedSendResponseDeprecationWarning = false;

      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }

        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */
        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;

          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }
              didCallSendResponse = true;
              resolve(response);
            };
          });

          let result;
          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result);

          // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.
          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          }

          // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).
          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;
              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          };

          // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.
          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          }

          // Let Chrome know that the listener is replying.
          return true;
        };
      });

      const wrappedSendMessageCallback = ({ reject, resolve }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(extensionAPIs.runtime.lastError);
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, { resolve, reject });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 })
        }
      };
      const settingMetadata = {
        clear: { minArgs: 1, maxArgs: 1 },
        get: { minArgs: 1, maxArgs: 1 },
        set: { minArgs: 1, maxArgs: 1 }
      };
      apiMetadata.privacy = {
        network: {
          networkPredictionEnabled: settingMetadata,
          webRTCIPHandlingPolicy: settingMetadata
        },
        services: {
          passwordSavingEnabled: settingMetadata
        },
        websites: {
          hyperlinkAuditingEnabled: settingMetadata,
          referrersEnabled: settingMetadata
        }
      };

      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    }

    // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.
    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map
"";
  }).bind(injectionContext)();
  var browser = injectionContext.browser;
  var signals = JSON.parse('{"SIGN_CHANGE":"SIGN_CHANGE","SIGN_RELOAD":"SIGN_RELOAD","SIGN_RELOADED":"SIGN_RELOADED","SIGN_LOG":"SIGN_LOG","SIGN_CONNECT":"SIGN_CONNECT"}');
  var config = JSON.parse('{"RECONNECT_INTERVAL":2000,"SOCKET_ERR_CODE_REF":"https://tools.ietf.org/html/rfc6455#section-7.4.1"}');
  var reloadPage = "true" === "true";
  var wsHost = "ws://localhost:9090";
  var SIGN_CHANGE = signals.SIGN_CHANGE,
      SIGN_RELOAD = signals.SIGN_RELOAD,
      SIGN_RELOADED = signals.SIGN_RELOADED,
      SIGN_LOG = signals.SIGN_LOG,
      SIGN_CONNECT = signals.SIGN_CONNECT;
  var RECONNECT_INTERVAL = config.RECONNECT_INTERVAL,
      SOCKET_ERR_CODE_REF = config.SOCKET_ERR_CODE_REF;
  var extension = browser.extension,
      runtime = browser.runtime,
      tabs = browser.tabs;
  var manifest = runtime.getManifest(); // =============================== Helper functions ======================================= //

  var formatter = function formatter(msg) {
    return "[ WER: ".concat(msg, " ]");
  };

  var logger = function logger(msg) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "info";
    return console[level](formatter(msg));
  };

  var timeFormatter = function timeFormatter(date) {
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  }; // ========================== Called only on content scripts ============================== //


  function contentScriptWorker() {
    runtime.sendMessage({
      type: SIGN_CONNECT
    }).then(function (msg) {
      return console.info(msg);
    });
    runtime.onMessage.addListener(function (_ref) {
      var type = _ref.type,
          payload = _ref.payload;

      switch (type) {
        case SIGN_RELOAD:
          logger("Detected Changes. Reloading ...");
          reloadPage && window.location.reload();
          break;

        case SIGN_LOG:
          console.info(payload);
          break;
      }
    });
  } // ======================== Called only on background scripts ============================= //


  function backgroundWorker(socket) {
    runtime.onMessage.addListener(function (action, sender) {
      if (action.type === SIGN_CONNECT) {
        return Promise.resolve(formatter("Connected to Extension Hot Reloader"));
      }

      return true;
    });
    socket.addEventListener("message", function (_ref2) {
      var data = _ref2.data;

      var _JSON$parse = JSON.parse(data),
          type = _JSON$parse.type,
          payload = _JSON$parse.payload;

      if (type === SIGN_CHANGE && (!payload || !payload.onlyPageChanged)) {
        tabs.query({
          status: "complete"
        }).then(function (loadedTabs) {
          loadedTabs.forEach(function (tab) {
            return tab.id && tabs.sendMessage(tab.id, {
              type: SIGN_RELOAD
            });
          });
          socket.send(JSON.stringify({
            type: SIGN_RELOADED,
            payload: formatter("".concat(timeFormatter(new Date()), " - ").concat(manifest.name, " successfully reloaded"))
          }));
          runtime.reload();
        });
      } else {
        runtime.sendMessage({
          type: type,
          payload: payload
        });
      }
    });
    socket.addEventListener("close", function (_ref3) {
      var code = _ref3.code;
      logger("Socket connection closed. Code ".concat(code, ". See more in ").concat(SOCKET_ERR_CODE_REF), "warn");
      var intId = setInterval(function () {
        logger("Attempting to reconnect (tip: Check if Webpack is running)");
        var ws = new WebSocket(wsHost);

        ws.onerror = function () {
          return logger("Error trying to re-connect. Reattempting in ".concat(RECONNECT_INTERVAL / 1000, "s"), "warn");
        };

        ws.addEventListener("open", function () {
          clearInterval(intId);
          logger("Reconnected. Reloading plugin");
          runtime.reload();
        });
      }, RECONNECT_INTERVAL);
    });
  } // ======================== Called only on extension pages that are not the background ============================= //


  function extensionPageWorker() {
    runtime.sendMessage({
      type: SIGN_CONNECT
    }).then(function (msg) {
      return console.info(msg);
    });
    runtime.onMessage.addListener(function (_ref4) {
      var type = _ref4.type,
          payload = _ref4.payload;

      switch (type) {
        case SIGN_CHANGE:
          logger("Detected Changes. Reloading ...");
          reloadPage && window.location.reload();
          break;

        case SIGN_LOG:
          console.info(payload);
          break;
      }
    });
  } // ======================= Bootstraps the middleware =========================== //


  runtime.reload ? extension.getBackgroundPage() === window ? backgroundWorker(new WebSocket(wsHost)) : extensionPageWorker() : contentScriptWorker();
})(window);
/* ----------------------------------------------- */

/* End of Webpack Hot Extension Middleware  */

/* ----------------------------------------------- *//******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/merchants.js":
/*!*********************************!*\
  !*** ./src/assets/merchants.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_merchants_custom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/merchants/custom.js */ \"./src/assets/merchants/custom.js\");\n/* harmony import */ var _assets_merchants_newlook_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/merchants/newlook.js */ \"./src/assets/merchants/newlook.js\");\n/* harmony import */ var _assets_merchants_converse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/merchants/converse.js */ \"./src/assets/merchants/converse.js\");\n\n\n\n\n\nconst merchants = [_assets_merchants_custom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _assets_merchants_newlook_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _assets_merchants_converse_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (merchants);\n\n//# sourceURL=webpack:///./src/assets/merchants.js?");

/***/ }),

/***/ "./src/assets/merchants/converse.js":
/*!******************************************!*\
  !*** ./src/assets/merchants/converse.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nconst converse = {\n  merchantId: 'converse',\n  domain: 'https://www.converse.com/uk',\n  rules: {\n    parserMode: 'html',\n    url: 'https://www.converse.com/uk/en/cart',\n    list: {\n      value: '.cart__items',\n      mods: []\n    },\n    totalSum: {\n      value: '.order-totals__highlight > .value--highlight',\n      mods: ['sliceFirstChar']\n    },\n    self: {\n      value: '.cart__item',\n      mods: []\n    },\n    sku: {\n      value: '.product-mini__sku > span.value',\n      mods: []\n    },\n    name: {\n      value: '.product-mini__name > a',\n      mods: []\n    },\n    price: {\n      value: '.product-price--sales',\n      mods: ['sliceFirstChar']\n    },\n    totalPrice: {\n      value: '.product-price--sales',\n      mods: ['sliceFirstChar']\n    },\n    quantity: {\n      value: '.cart__item-qty > select > option[selected]',\n      mods: ['toInteger']\n    },\n    photo: {\n      value: '.product-mini__image-url > img',\n      mods: []\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (converse);\n\n//# sourceURL=webpack:///./src/assets/merchants/converse.js?");

/***/ }),

/***/ "./src/assets/merchants/custom.js":
/*!****************************************!*\
  !*** ./src/assets/merchants/custom.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nconst custom = {\n  merchantId: 'eugene.serb',\n  domain: 'https://eugene-serb.github.io/',\n  rules: {\n    parserMode: 'custom',\n    url: 'https://eugene-serb.github.io/'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (custom);\n\n//# sourceURL=webpack:///./src/assets/merchants/custom.js?");

/***/ }),

/***/ "./src/assets/merchants/newlook.js":
/*!*****************************************!*\
  !*** ./src/assets/merchants/newlook.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nconst newlook = {\n  merchantId: 'newlook',\n  domain: 'https://www.newlook.com/uk/',\n  rules: {\n    parserMode: 'json',\n    url: 'https://www.newlook.com/uk/json/cart/currentCart.json',\n    list: {\n      value: ['data', 'entries'],\n      mods: []\n    },\n    totalSum: {\n      value: ['data', 'totalPrice', 'value'],\n      mods: []\n    },\n    sku: {\n      value: ['product', 'sku'],\n      mods: []\n    },\n    name: {\n      value: ['product', 'name'],\n      mods: []\n    },\n    price: {\n      value: ['basePrice', 'value'],\n      mods: []\n    },\n    totalPrice: {\n      value: ['totalPrice', 'value'],\n      mods: []\n    },\n    quantity: {\n      value: ['quantity'],\n      mods: []\n    },\n    photo: {\n      value: ['product', 'imageUrl'],\n      mods: ['addPrefixHttp']\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (newlook);\n\n//# sourceURL=webpack:///./src/assets/merchants/newlook.js?");

/***/ }),

/***/ "./src/assets/modificators.js":
/*!************************************!*\
  !*** ./src/assets/modificators.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_mods_addPrefixHttp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/mods/addPrefixHttp.js */ \"./src/assets/mods/addPrefixHttp.js\");\n/* harmony import */ var _assets_mods_deletePrefixChrome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/mods/deletePrefixChrome.js */ \"./src/assets/mods/deletePrefixChrome.js\");\n/* harmony import */ var _assets_mods_addPrefixDomain_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/mods/addPrefixDomain.js */ \"./src/assets/mods/addPrefixDomain.js\");\n/* harmony import */ var _assets_mods_sliceFirstChar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/mods/sliceFirstChar.js */ \"./src/assets/mods/sliceFirstChar.js\");\n/* harmony import */ var _assets_mods_toInteger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/mods/toInteger.js */ \"./src/assets/mods/toInteger.js\");\n\n\n\n\n\n\n\nconst modificators = {\n  addPrefixHttp: _assets_mods_addPrefixHttp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  deletePrefixChrome: _assets_mods_deletePrefixChrome_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  sliceFirstChar: _assets_mods_sliceFirstChar_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  toInteger: _assets_mods_toInteger_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  addPrefixDomain: _assets_mods_addPrefixDomain_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (modificators);\n\n//# sourceURL=webpack:///./src/assets/modificators.js?");

/***/ }),

/***/ "./src/assets/mods/addPrefixDomain.js":
/*!********************************************!*\
  !*** ./src/assets/mods/addPrefixDomain.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction addPrefixHttp(value, merchant) {\n  return merchant.domain + value;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addPrefixHttp);\n\n//# sourceURL=webpack:///./src/assets/mods/addPrefixDomain.js?");

/***/ }),

/***/ "./src/assets/mods/addPrefixHttp.js":
/*!******************************************!*\
  !*** ./src/assets/mods/addPrefixHttp.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction addPrefixHttp(value) {\n  return 'https://' + value;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addPrefixHttp);\n\n//# sourceURL=webpack:///./src/assets/mods/addPrefixHttp.js?");

/***/ }),

/***/ "./src/assets/mods/deletePrefixChrome.js":
/*!***********************************************!*\
  !*** ./src/assets/mods/deletePrefixChrome.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction deletePrefixChrome(value) {\n  let result = value.slice(19);\n\n  while (result[0].match(/[a-zA-Z]/)) {\n    result = result.slice(1);\n  }\n\n  return result;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (deletePrefixChrome);\n\n//# sourceURL=webpack:///./src/assets/mods/deletePrefixChrome.js?");

/***/ }),

/***/ "./src/assets/mods/sliceFirstChar.js":
/*!*******************************************!*\
  !*** ./src/assets/mods/sliceFirstChar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction sliceFirstChar(value) {\n  return value.slice(1);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sliceFirstChar);\n\n//# sourceURL=webpack:///./src/assets/mods/sliceFirstChar.js?");

/***/ }),

/***/ "./src/assets/mods/toInteger.js":
/*!**************************************!*\
  !*** ./src/assets/mods/toInteger.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction toInteger(value) {\n  return +value;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (toInteger);\n\n//# sourceURL=webpack:///./src/assets/mods/toInteger.js?");

/***/ }),

/***/ "./src/assets/parsers.js":
/*!*******************************!*\
  !*** ./src/assets/parsers.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_parsers_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/parsers/html.js */ \"./src/assets/parsers/html.js\");\n/* harmony import */ var _assets_parsers_json_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/parsers/json.js */ \"./src/assets/parsers/json.js\");\n/* harmony import */ var _assets_parsers_custom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/parsers/custom.js */ \"./src/assets/parsers/custom.js\");\n/* harmony import */ var _assets_parsers_default_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/parsers/default.js */ \"./src/assets/parsers/default.js\");\n\n\n\n\n\n\nconst parsers = {\n  html: _assets_parsers_html_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  json: _assets_parsers_json_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  custom: _assets_parsers_custom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  stub: _assets_parsers_default_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (parsers);\n\n//# sourceURL=webpack:///./src/assets/parsers.js?");

/***/ }),

/***/ "./src/assets/parsers/custom.js":
/*!**************************************!*\
  !*** ./src/assets/parsers/custom.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Basket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Basket.js */ \"./src/models/Basket.js\");\n/* harmony import */ var _models_Entry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Entry.js */ \"./src/models/Entry.js\");\n\n\n\n\n\nasync function parseCustom(merchant) {\n  let totalSum = 1337;\n  const entries = [];\n  entries.push(new _models_Entry_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1, `Custom Good at ${merchant.merchantId}`, 1337, 1337, 1, 'https://eugene-serb.github.io/img/apple-touch-icon.png'));\n  return new _models_Basket_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](entries, totalSum);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseCustom);\n\n//# sourceURL=webpack:///./src/assets/parsers/custom.js?");

/***/ }),

/***/ "./src/assets/parsers/default.js":
/*!***************************************!*\
  !*** ./src/assets/parsers/default.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Basket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Basket.js */ \"./src/models/Basket.js\");\n\n\n\n\nasync function parseDefault() {\n  let totalSum = 0;\n  const entries = [];\n  return new _models_Basket_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](entries, totalSum);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseDefault);\n\n//# sourceURL=webpack:///./src/assets/parsers/default.js?");

/***/ }),

/***/ "./src/assets/parsers/html.js":
/*!************************************!*\
  !*** ./src/assets/parsers/html.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Basket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Basket.js */ \"./src/models/Basket.js\");\n/* harmony import */ var _models_Entry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Entry.js */ \"./src/models/Entry.js\");\n/* harmony import */ var _modules_applyMods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/modules/applyMods.js */ \"./src/modules/applyMods.js\");\n\n\n\n\n\n\nasync function parseHtml(merchant) {\n  let totalSum = 0;\n  const entries = [];\n  await fetch(merchant.rules.url).then(response => {\n    return response.text();\n  }).then(html => {\n    const parser = new DOMParser();\n    const doc = parser.parseFromString(html, 'text/html');\n    return doc;\n  }).then(doc => {\n    const list = doc.querySelector(merchant.rules.list.value);\n    totalSum = Object(_modules_applyMods_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(doc.querySelector(merchant.rules.totalSum.value).innerText, merchant.rules.totalSum.mods);\n    return list;\n  }).then(list => {\n    const goods = list.querySelectorAll(merchant.rules.self.value);\n    return goods;\n  }).then(goods => {\n    goods.forEach(good => {\n      const sku = Object(_modules_applyMods_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(good.querySelector(merchant.rules.sku.value).innerText, merchant.rules.sku.mods);\n      const name = Object(_modules_applyMods_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(good.querySelector(merchant.rules.name.value).innerText, merchant.rules.name.mods);\n      const price = Object(_modules_applyMods_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(good.querySelector(merchant.rules.price.value).innerText, merchant.rules.price.mods);\n      const totalPrice = Object(_modules_applyMods_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(good.querySelector(merchant.rules.totalPrice.value).innerText, merchant.rules.totalPrice.mods);\n      const quantity = Object(_modules_applyMods_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(good.querySelector(merchant.rules.quantity.value).innerText, merchant.rules.quantity.mods);\n      const photo = Object(_modules_applyMods_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(good.querySelector(merchant.rules.photo.value).src, merchant.rules.photo.mods);\n      entries.push(new _models_Entry_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](sku, name, price, totalPrice, quantity, photo));\n    });\n  }).catch(error => {\n    // eslint-disable-next-line\n    console.error(error);\n  });\n  return new _models_Basket_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](entries, totalSum);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseHtml);\n\n//# sourceURL=webpack:///./src/assets/parsers/html.js?");

/***/ }),

/***/ "./src/assets/parsers/json.js":
/*!************************************!*\
  !*** ./src/assets/parsers/json.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Basket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Basket.js */ \"./src/models/Basket.js\");\n/* harmony import */ var _models_Entry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Entry.js */ \"./src/models/Entry.js\");\n/* harmony import */ var _modules_getJsonValue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/modules/getJsonValue.js */ \"./src/modules/getJsonValue.js\");\n/* harmony import */ var _modules_applyMods_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/applyMods.js */ \"./src/modules/applyMods.js\");\n\n\n\n\n\n\n\nasync function parseJson(merchant) {\n  let totalSum = 0;\n  const entries = [];\n  await fetch(merchant.rules.url).then(response => {\n    return response.json();\n  }).then(json => {\n    totalSum = Object(_modules_applyMods_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_modules_getJsonValue_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(json, merchant.rules.totalSum.value), merchant.rules.totalSum.value);\n    return Object(_modules_getJsonValue_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(json, merchant.rules.list.value);\n  }).then(goods => {\n    goods.forEach(good => {\n      const sku = Object(_modules_applyMods_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_modules_getJsonValue_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(good, merchant.rules.sku.value), merchant.rules.sku.mods);\n      const name = Object(_modules_applyMods_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_modules_getJsonValue_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(good, merchant.rules.name.value), merchant.rules.name.mods);\n      const price = Object(_modules_applyMods_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_modules_getJsonValue_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(good, merchant.rules.price.value), merchant.rules.price.mods);\n      const totalPrice = Object(_modules_applyMods_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_modules_getJsonValue_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(good, merchant.rules.totalPrice.value), merchant.rules.totalPrice.mods);\n      const quantity = Object(_modules_applyMods_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_modules_getJsonValue_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(good, merchant.rules.quantity.value), merchant.rules.quantity.mods);\n      const photo = Object(_modules_applyMods_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_modules_getJsonValue_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(good, merchant.rules.photo.value), merchant.rules.photo.mods);\n      entries.push(new _models_Entry_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](sku, name, price, totalPrice, quantity, photo));\n    });\n  }).catch(error => {\n    // eslint-disable-next-line\n    console.error(error);\n  });\n  return new _models_Basket_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](entries, totalSum);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseJson);\n\n//# sourceURL=webpack:///./src/assets/parsers/json.js?");

/***/ }),

/***/ "./src/background/index.js":
/*!*********************************!*\
  !*** ./src/background/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getBasket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/modules/getBasket.js */ \"./src/modules/getBasket.js\");\n\n\n\nchrome.extension.onMessage.addListener(async (request, sender, callback) => {\n  if (request === 'getBasket') {\n    const result = await Object(_modules_getBasket_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    callback(result);\n  }\n\n  return true;\n});\n\n//# sourceURL=webpack:///./src/background/index.js?");

/***/ }),

/***/ "./src/models/Basket.js":
/*!******************************!*\
  !*** ./src/models/Basket.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Basket {\n  constructor(entries, totalSum) {\n    this.entries = entries;\n    this.totalSum = totalSum;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Basket);\n\n//# sourceURL=webpack:///./src/models/Basket.js?");

/***/ }),

/***/ "./src/models/Entry.js":
/*!*****************************!*\
  !*** ./src/models/Entry.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Entry {\n  constructor(sku, name, price, totalPrice, quantity, photo) {\n    this.sku = sku;\n    this.name = name;\n    this.price = price;\n    this.totalPrice = totalPrice;\n    this.quantity = quantity;\n    this.photo = photo;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Entry);\n\n//# sourceURL=webpack:///./src/models/Entry.js?");

/***/ }),

/***/ "./src/modules/applyMods.js":
/*!**********************************!*\
  !*** ./src/modules/applyMods.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_modificators_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/modificators.js */ \"./src/assets/modificators.js\");\n\n\n\n\nfunction applyMods(value, mods, merchant) {\n  let result = value;\n  mods.forEach(mod => {\n    Object.keys(_assets_modificators_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).forEach(modificator => {\n      if (modificator == mod) {\n        result = _assets_modificators_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][modificator](result, merchant);\n      }\n    });\n  });\n  return result;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (applyMods);\n\n//# sourceURL=webpack:///./src/modules/applyMods.js?");

/***/ }),

/***/ "./src/modules/getBasket.js":
/*!**********************************!*\
  !*** ./src/modules/getBasket.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_merchants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/merchants.js */ \"./src/assets/merchants.js\");\n/* harmony import */ var _modules_getCurrentUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modules/getCurrentUrl.js */ \"./src/modules/getCurrentUrl.js\");\n/* harmony import */ var _modules_parse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/modules/parse.js */ \"./src/modules/parse.js\");\n\n\n\n\n\n\nconst getBasket = async () => {\n  const currentUrl = await Object(_modules_getCurrentUrl_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const currentMerchant = _assets_merchants_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(merchant => currentUrl.includes(merchant.domain));\n\n  if (!currentMerchant) {\n    return {\n      message: 'Этот сайт не является партнером приложения'\n    };\n  } // ToDo: необходимо спарсить все товары добавленные в корзину на сайте\n  // если корзина пуста выводить соответствующее сообщение\n\n\n  const basket = await Object(_modules_parse_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(currentMerchant);\n  const result = {};\n  basket.entries.length ? result.basket = basket : result.message = 'Корзина пуста';\n  return result;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getBasket);\n\n//# sourceURL=webpack:///./src/modules/getBasket.js?");

/***/ }),

/***/ "./src/modules/getCurrentUrl.js":
/*!**************************************!*\
  !*** ./src/modules/getCurrentUrl.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nconst getCurrentUrl = async () => {\n  return new Promise((resolve, reject) => {\n    chrome.tabs.query({\n      active: true,\n      currentWindow: true\n    }, async tab => {\n      const [currentTab] = tab;\n\n      if (!currentTab) {\n        reject(null);\n      }\n\n      resolve(currentTab.url);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getCurrentUrl);\n\n//# sourceURL=webpack:///./src/modules/getCurrentUrl.js?");

/***/ }),

/***/ "./src/modules/getJsonValue.js":
/*!*************************************!*\
  !*** ./src/modules/getJsonValue.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction getJsonValue(json, path) {\n  let result = json;\n  path.forEach(key => {\n    result = JSON.parse(JSON.stringify(result[key]));\n  });\n  return result;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getJsonValue);\n\n//# sourceURL=webpack:///./src/modules/getJsonValue.js?");

/***/ }),

/***/ "./src/modules/getParser.js":
/*!**********************************!*\
  !*** ./src/modules/getParser.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_parsers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/parsers.js */ \"./src/assets/parsers.js\");\n\n\n\n\nfunction getParser(parserMode) {\n  let result = null;\n  Object.keys(_assets_parsers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).forEach(key => {\n    if (parserMode == key) {\n      result = _assets_parsers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][key];\n    }\n  });\n\n  if (result === null) {\n    result = _assets_parsers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['stub'];\n  }\n\n  return result;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getParser);\n\n//# sourceURL=webpack:///./src/modules/getParser.js?");

/***/ }),

/***/ "./src/modules/parse.js":
/*!******************************!*\
  !*** ./src/modules/parse.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/modules/getParser.js */ \"./src/modules/getParser.js\");\n\n\n\n\nasync function parse(merchant) {\n  let basket = {};\n  const parser = Object(_modules_getParser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(merchant.rules.parserMode);\n  basket = await parser(merchant);\n  return basket;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parse);\n\n//# sourceURL=webpack:///./src/modules/parse.js?");

/***/ }),

/***/ 1:
/*!***************************************!*\
  !*** multi ./src/background/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! E:\\Sources\\Repos\\disco-slash-test-task\\src\\background\\index.js */\"./src/background/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/background/index.js?");

/***/ })

/******/ });