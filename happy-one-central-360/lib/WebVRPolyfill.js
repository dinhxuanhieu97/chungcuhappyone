!(function (f) {
  if (false) module.exports = f();
  else if (false) define([], f);
  else {
    ("undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : this
    ).WebVRPolyfill = f();
  }
})(function () {
  return (function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = false;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            return o(e[i][1][r] || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (var u = false, i = 0; i < t.length; i++) o(t[i]);
    return o;
  })(
    {
      1: [
        function (_dereq_, module, exports) {
          "use strict";
          var has = Object.prototype.hasOwnProperty,
            prefix = "~";
          function Events() {}
          function EE(fn, context, once) {
            (this.fn = fn), (this.context = context), (this.once = once || !1);
          }
          function EventEmitter() {
            (this._events = new Events()), (this._eventsCount = 0);
          }
          Object.create &&
            ((Events.prototype = Object.create(null)),
            new Events().__proto__ || (prefix = !1)),
            (EventEmitter.prototype.eventNames = function () {
              var events,
                name,
                names = [];
              if (0 === this._eventsCount) return names;
              for (name in (events = this._events))
                has.call(events, name) &&
                  names.push(prefix ? name.slice(1) : name);
              return Object.getOwnPropertySymbols
                ? names.concat(Object.getOwnPropertySymbols(events))
                : names;
            }),
            (EventEmitter.prototype.listeners = function (event, exists) {
              var evt = prefix ? prefix + event : event,
                available = this._events[evt];
              if (exists) return !!available;
              if (!available) return [];
              if (available.fn) return [available.fn];
              for (
                var i = 0, l = available.length, ee = new Array(l);
                i < l;
                i++
              )
                ee[i] = available[i].fn;
              return ee;
            }),
            (EventEmitter.prototype.emit = function (
              event,
              a1,
              a2,
              a3,
              a4,
              a5
            ) {
              var evt = prefix ? prefix + event : event;
              if (!this._events[evt]) return !1;
              var args,
                i,
                listeners = this._events[evt],
                len = arguments.length;
              if (listeners.fn) {
                switch (
                  (listeners.once &&
                    this.removeListener(event, listeners.fn, void 0, !0),
                  len)
                ) {
                  case 1:
                    return listeners.fn.call(listeners.context), !0;
                  case 2:
                    return listeners.fn.call(listeners.context, a1), !0;
                  case 3:
                    return listeners.fn.call(listeners.context, a1, a2), !0;
                  case 4:
                    return listeners.fn.call(listeners.context, a1, a2, a3), !0;
                  case 5:
                    return (
                      listeners.fn.call(listeners.context, a1, a2, a3, a4), !0
                    );
                  case 6:
                    return (
                      listeners.fn.call(listeners.context, a1, a2, a3, a4, a5),
                      !0
                    );
                }
                for (i = 1, args = new Array(len - 1); i < len; i++)
                  args[i - 1] = arguments[i];
                listeners.fn.apply(listeners.context, args);
              } else {
                var j,
                  length = listeners.length;
                for (i = 0; i < length; i++)
                  switch (
                    (listeners[i].once &&
                      this.removeListener(event, listeners[i].fn, void 0, !0),
                    len)
                  ) {
                    case 1:
                      listeners[i].fn.call(listeners[i].context);
                      break;
                    case 2:
                      listeners[i].fn.call(listeners[i].context, a1);
                      break;
                    case 3:
                      listeners[i].fn.call(listeners[i].context, a1, a2);
                      break;
                    case 4:
                      listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                      break;
                    default:
                      if (!args)
                        for (j = 1, args = new Array(len - 1); j < len; j++)
                          args[j - 1] = arguments[j];
                      listeners[i].fn.apply(listeners[i].context, args);
                  }
              }
              return !0;
            }),
            (EventEmitter.prototype.on = function (event, fn, context) {
              var listener = new EE(fn, context || this),
                evt = prefix ? prefix + event : event;
              return (
                this._events[evt]
                  ? this._events[evt].fn
                    ? (this._events[evt] = [this._events[evt], listener])
                    : this._events[evt].push(listener)
                  : ((this._events[evt] = listener), this._eventsCount++),
                this
              );
            }),
            (EventEmitter.prototype.once = function (event, fn, context) {
              var listener = new EE(fn, context || this, !0),
                evt = prefix ? prefix + event : event;
              return (
                this._events[evt]
                  ? this._events[evt].fn
                    ? (this._events[evt] = [this._events[evt], listener])
                    : this._events[evt].push(listener)
                  : ((this._events[evt] = listener), this._eventsCount++),
                this
              );
            }),
            (EventEmitter.prototype.removeListener = function (
              event,
              fn,
              context,
              once
            ) {
              var evt = prefix ? prefix + event : event;
              if (!this._events[evt]) return this;
              if (!fn)
                return (
                  0 == --this._eventsCount
                    ? (this._events = new Events())
                    : delete this._events[evt],
                  this
                );
              var listeners = this._events[evt];
              if (listeners.fn)
                listeners.fn !== fn ||
                  (once && !listeners.once) ||
                  (context && listeners.context !== context) ||
                  (0 == --this._eventsCount
                    ? (this._events = new Events())
                    : delete this._events[evt]);
              else {
                for (
                  var i = 0, events = [], length = listeners.length;
                  i < length;
                  i++
                )
                  (listeners[i].fn !== fn ||
                    (once && !listeners[i].once) ||
                    (context && listeners[i].context !== context)) &&
                    events.push(listeners[i]);
                events.length
                  ? (this._events[evt] =
                      1 === events.length ? events[0] : events)
                  : 0 == --this._eventsCount
                  ? (this._events = new Events())
                  : delete this._events[evt];
              }
              return this;
            }),
            (EventEmitter.prototype.removeAllListeners = function (event) {
              var evt;
              return (
                event
                  ? ((evt = prefix ? prefix + event : event),
                    this._events[evt] &&
                      (0 == --this._eventsCount
                        ? (this._events = new Events())
                        : delete this._events[evt]))
                  : ((this._events = new Events()), (this._eventsCount = 0)),
                this
              );
            }),
            (EventEmitter.prototype.off =
              EventEmitter.prototype.removeListener),
            (EventEmitter.prototype.addListener = EventEmitter.prototype.on),
            (EventEmitter.prototype.setMaxListeners = function () {
              return this;
            }),
            (EventEmitter.prefixed = prefix),
            (EventEmitter.EventEmitter = EventEmitter),
            void 0 !== module && (module.exports = EventEmitter);
        },
        {},
      ],
      2: [
        function (_dereq_, module, exports) {
          "use strict";
          var getOwnPropertySymbols = Object.getOwnPropertySymbols,
            hasOwnProperty = Object.prototype.hasOwnProperty,
            propIsEnumerable = Object.prototype.propertyIsEnumerable;
          module.exports = (function () {
            try {
              if (!Object.assign) return !1;
              var test1 = new String("abc");
              if (
                ((test1[5] = "de"),
                "5" === Object.getOwnPropertyNames(test1)[0])
              )
                return !1;
              for (var test2 = {}, i = 0; i < 10; i++)
                test2["_" + String.fromCharCode(i)] = i;
              if (
                "0123456789" !==
                Object.getOwnPropertyNames(test2)
                  .map(function (n) {
                    return test2[n];
                  })
                  .join("")
              )
                return !1;
              var test3 = {};
              return (
                "abcdefghijklmnopqrst".split("").forEach(function (letter) {
                  test3[letter] = letter;
                }),
                "abcdefghijklmnopqrst" ===
                  Object.keys(Object.assign({}, test3)).join("")
              );
            } catch (err) {
              return !1;
            }
          })()
            ? Object.assign
            : function (target, source) {
                for (
                  var from,
                    symbols,
                    to = (function (val) {
                      if (null == val)
                        throw new TypeError(
                          "Object.assign cannot be called with null or undefined"
                        );
                      return Object(val);
                    })(target),
                    s = 1;
                  s < arguments.length;
                  s++
                ) {
                  for (var key in (from = Object(arguments[s])))
                    hasOwnProperty.call(from, key) && (to[key] = from[key]);
                  if (getOwnPropertySymbols) {
                    symbols = getOwnPropertySymbols(from);
                    for (var i = 0; i < symbols.length; i++)
                      propIsEnumerable.call(from, symbols[i]) &&
                        (to[symbols[i]] = from[symbols[i]]);
                  }
                }
                return to;
              };
        },
        {},
      ],
      3: [
        function (_dereq_, module, exports) {
          var Util = _dereq_("./util.js"),
            nextDisplayId = 1e3,
            hasShowDeprecationWarning = !1,
            defaultLeftBounds = [0, 0, 0.5, 1],
            defaultRightBounds = [0.5, 0, 0.5, 1];
          function VRDisplay() {
            (this.isPolyfilled = !0),
              (this.displayId = nextDisplayId++),
              (this.displayName = "webvr-polyfill displayName"),
              (this.depthNear = 0.01),
              (this.depthFar = 1e4),
              (this.isConnected = !0),
              (this.isPresenting = !1),
              (this.capabilities = {
                hasPosition: !1,
                hasOrientation: !1,
                hasExternalDisplay: !1,
                canPresent: !1,
                maxLayers: 1,
              }),
              (this.stageParameters = null),
              (this.waitingForPresent_ = !1),
              (this.layer_ = null),
              (this.fullscreenElement_ = null),
              (this.fullscreenWrapper_ = null),
              (this.fullscreenElementCachedStyle_ = null),
              (this.fullscreenEventTarget_ = null),
              (this.fullscreenChangeHandler_ = null),
              (this.fullscreenErrorHandler_ = null);
          }
          function VRDevice() {
            (this.isPolyfilled = !0),
              (this.hardwareUnitId = "webvr-polyfill hardwareUnitId"),
              (this.deviceId = "webvr-polyfill deviceId"),
              (this.deviceName = "webvr-polyfill deviceName");
          }
          function HMDVRDevice() {}
          function PositionSensorVRDevice() {}
          (VRDisplay.prototype.getFrameData = function (frameData) {
            return Util.frameDataFromPose(frameData, this.getPose(), this);
          }),
            (VRDisplay.prototype.getPose = function () {
              return this.getImmediatePose();
            }),
            (VRDisplay.prototype.requestAnimationFrame = function (callback) {
              return window.requestAnimationFrame(callback);
            }),
            (VRDisplay.prototype.cancelAnimationFrame = function (id) {
              return window.cancelAnimationFrame(id);
            }),
            (VRDisplay.prototype.wrapForFullscreen = function (element) {
              if (Util.isIOS()) return element;
              if (!this.fullscreenWrapper_) {
                this.fullscreenWrapper_ = document.createElement("div");
                var cssProperties = [
                  "height: " +
                    Math.min(screen.height, screen.width) +
                    "px !important",
                  "top: 0 !important",
                  "left: 0 !important",
                  "right: 0 !important",
                  "border: 0",
                  "margin: 0",
                  "padding: 0",
                  "z-index: 999999 !important",
                  "position: fixed",
                ];
                this.fullscreenWrapper_.setAttribute(
                  "style",
                  cssProperties.join("; ") + ";"
                ),
                  this.fullscreenWrapper_.classList.add(
                    "webvr-polyfill-fullscreen-wrapper"
                  );
              }
              if (this.fullscreenElement_ == element)
                return this.fullscreenWrapper_;
              this.removeFullscreenWrapper(),
                (this.fullscreenElement_ = element);
              var parent = this.fullscreenElement_.parentElement;
              parent.insertBefore(
                this.fullscreenWrapper_,
                this.fullscreenElement_
              ),
                parent.removeChild(this.fullscreenElement_),
                this.fullscreenWrapper_.insertBefore(
                  this.fullscreenElement_,
                  this.fullscreenWrapper_.firstChild
                ),
                (this.fullscreenElementCachedStyle_ =
                  this.fullscreenElement_.getAttribute("style"));
              var self = this;
              return (
                (function () {
                  if (self.fullscreenElement_) {
                    var cssProperties = [
                      "position: absolute",
                      "top: 0",
                      "left: 0",
                      "width: " + Math.max(screen.width, screen.height) + "px",
                      "height: " + Math.min(screen.height, screen.width) + "px",
                      "border: 0",
                      "margin: 0",
                      "padding: 0",
                    ];
                    self.fullscreenElement_.setAttribute(
                      "style",
                      cssProperties.join("; ") + ";"
                    );
                  }
                })(),
                this.fullscreenWrapper_
              );
            }),
            (VRDisplay.prototype.removeFullscreenWrapper = function () {
              if (this.fullscreenElement_) {
                var element = this.fullscreenElement_;
                this.fullscreenElementCachedStyle_
                  ? element.setAttribute(
                      "style",
                      this.fullscreenElementCachedStyle_
                    )
                  : element.removeAttribute("style"),
                  (this.fullscreenElement_ = null),
                  (this.fullscreenElementCachedStyle_ = null);
                var parent = this.fullscreenWrapper_.parentElement;
                return (
                  this.fullscreenWrapper_.removeChild(element),
                  parent.insertBefore(element, this.fullscreenWrapper_),
                  parent.removeChild(this.fullscreenWrapper_),
                  element
                );
              }
            }),
            (VRDisplay.prototype.requestPresent = function (layers) {
              var wasPresenting = this.isPresenting,
                self = this;
              return (
                layers instanceof Array ||
                  (hasShowDeprecationWarning ||
                    (console.warn(
                      "Using a deprecated form of requestPresent. Should pass in an array of VRLayers."
                    ),
                    (hasShowDeprecationWarning = !0)),
                  (layers = [layers])),
                new Promise(function (resolve, reject) {
                  if (self.capabilities.canPresent)
                    if (
                      0 == layers.length ||
                      layers.length > self.capabilities.maxLayers
                    )
                      reject(new Error("Invalid number of layers."));
                    else {
                      var incomingLayer = layers[0];
                      if (incomingLayer.source) {
                        var leftBounds =
                            incomingLayer.leftBounds || defaultLeftBounds,
                          rightBounds =
                            incomingLayer.rightBounds || defaultRightBounds;
                        if (wasPresenting) {
                          var layer = self.layer_;
                          layer.source !== incomingLayer.source &&
                            (layer.source = incomingLayer.source);
                          for (var i = 0; i < 4; i++)
                            layer.leftBounds[i] !== leftBounds[i] &&
                              (layer.leftBounds[i] = leftBounds[i]),
                              layer.rightBounds[i] !== rightBounds[i] &&
                                (layer.rightBounds[i] = rightBounds[i]);
                          resolve();
                        } else {
                          if (
                            ((self.layer_ = {
                              predistorted: incomingLayer.predistorted,
                              source: incomingLayer.source,
                              leftBounds: leftBounds.slice(0),
                              rightBounds: rightBounds.slice(0),
                            }),
                            (self.waitingForPresent_ = !1),
                            self.layer_ && self.layer_.source)
                          ) {
                            var fullscreenElement = self.wrapForFullscreen(
                              self.layer_.source
                            );
                            self.addFullscreenListeners_(
                              fullscreenElement,
                              function () {
                                var actualFullscreenElement =
                                  Util.getFullscreenElement();
                                (self.isPresenting =
                                  fullscreenElement ===
                                  actualFullscreenElement),
                                  self.isPresenting
                                    ? (!1 !== WebVRConfig.LOCK_ORIENTATION &&
                                        screen.orientation &&
                                        screen.orientation.lock &&
                                        screen.orientation
                                          .lock("landscape-primary")
                                          .catch(function (error) {
                                            console.error(
                                              "screen.orientation.lock() failed due to",
                                              error.message
                                            );
                                          }),
                                      (self.waitingForPresent_ = !1),
                                      self.beginPresent_(),
                                      resolve())
                                    : (!1 !== WebVRConfig.LOCK_ORIENTATION &&
                                        screen.orientation &&
                                        screen.orientation.unlock &&
                                        screen.orientation.unlock(),
                                      self.removeFullscreenWrapper(),
                                      self.endPresent_(),
                                      self.removeFullscreenListeners_()),
                                  self.fireVRDisplayPresentChange_();
                              },
                              function () {
                                self.waitingForPresent_ &&
                                  (self.removeFullscreenWrapper(),
                                  self.removeFullscreenListeners_(),
                                  (self.waitingForPresent_ = !1),
                                  (self.isPresenting = !1),
                                  reject(new Error("Unable to present.")));
                              }
                            ),
                              Util.requestFullscreen(fullscreenElement)
                                ? (self.waitingForPresent_ = !0)
                                : Util.isIOS() &&
                                  ((self.isPresenting = !0),
                                  self.beginPresent_(),
                                  self.fireVRDisplayPresentChange_(),
                                  resolve());
                          }
                          self.waitingForPresent_ ||
                            Util.isIOS() ||
                            (Util.exitFullscreen(),
                            reject(new Error("Unable to present.")));
                        }
                      } else resolve();
                    }
                  else
                    reject(
                      new Error("VRDisplay is not capable of presenting.")
                    );
                })
              );
            }),
            (VRDisplay.prototype.exitPresent = function () {
              var wasPresenting = this.isPresenting,
                self = this;
              return (
                (this.isPresenting = !1),
                (this.layer_ = null),
                new Promise(function (resolve, reject) {
                  wasPresenting
                    ? (!Util.exitFullscreen() &&
                        Util.isIOS() &&
                        (self.endPresent_(),
                        self.fireVRDisplayPresentChange_()),
                      resolve())
                    : reject(new Error("Was not presenting to VRDisplay."));
                })
              );
            }),
            (VRDisplay.prototype.getLayers = function () {
              return this.layer_ ? [this.layer_] : [];
            }),
            (VRDisplay.prototype.fireVRDisplayPresentChange_ = function () {
              var event = new CustomEvent("vrdisplaypresentchange", {
                detail: { display: this },
              });
              window.dispatchEvent(event);
            }),
            (VRDisplay.prototype.addFullscreenListeners_ = function (
              element,
              changeHandler,
              errorHandler
            ) {
              this.removeFullscreenListeners_(),
                (this.fullscreenEventTarget_ = element),
                (this.fullscreenChangeHandler_ = changeHandler),
                (this.fullscreenErrorHandler_ = errorHandler),
                changeHandler &&
                  (document.fullscreenEnabled
                    ? element.addEventListener(
                        "fullscreenchange",
                        changeHandler,
                        !1
                      )
                    : document.webkitFullscreenEnabled
                    ? element.addEventListener(
                        "webkitfullscreenchange",
                        changeHandler,
                        !1
                      )
                    : document.mozFullScreenEnabled
                    ? document.addEventListener(
                        "mozfullscreenchange",
                        changeHandler,
                        !1
                      )
                    : document.msFullscreenEnabled &&
                      element.addEventListener(
                        "msfullscreenchange",
                        changeHandler,
                        !1
                      )),
                errorHandler &&
                  (document.fullscreenEnabled
                    ? element.addEventListener(
                        "fullscreenerror",
                        errorHandler,
                        !1
                      )
                    : document.webkitFullscreenEnabled
                    ? element.addEventListener(
                        "webkitfullscreenerror",
                        errorHandler,
                        !1
                      )
                    : document.mozFullScreenEnabled
                    ? document.addEventListener(
                        "mozfullscreenerror",
                        errorHandler,
                        !1
                      )
                    : document.msFullscreenEnabled &&
                      element.addEventListener(
                        "msfullscreenerror",
                        errorHandler,
                        !1
                      ));
            }),
            (VRDisplay.prototype.removeFullscreenListeners_ = function () {
              if (this.fullscreenEventTarget_) {
                var element = this.fullscreenEventTarget_;
                if (this.fullscreenChangeHandler_) {
                  var changeHandler = this.fullscreenChangeHandler_;
                  element.removeEventListener(
                    "fullscreenchange",
                    changeHandler,
                    !1
                  ),
                    element.removeEventListener(
                      "webkitfullscreenchange",
                      changeHandler,
                      !1
                    ),
                    document.removeEventListener(
                      "mozfullscreenchange",
                      changeHandler,
                      !1
                    ),
                    element.removeEventListener(
                      "msfullscreenchange",
                      changeHandler,
                      !1
                    );
                }
                if (this.fullscreenErrorHandler_) {
                  var errorHandler = this.fullscreenErrorHandler_;
                  element.removeEventListener(
                    "fullscreenerror",
                    errorHandler,
                    !1
                  ),
                    element.removeEventListener(
                      "webkitfullscreenerror",
                      errorHandler,
                      !1
                    ),
                    document.removeEventListener(
                      "mozfullscreenerror",
                      errorHandler,
                      !1
                    ),
                    element.removeEventListener(
                      "msfullscreenerror",
                      errorHandler,
                      !1
                    );
                }
                (this.fullscreenEventTarget_ = null),
                  (this.fullscreenChangeHandler_ = null),
                  (this.fullscreenErrorHandler_ = null);
              }
            }),
            (VRDisplay.prototype.beginPresent_ = function () {}),
            (VRDisplay.prototype.endPresent_ = function () {}),
            (VRDisplay.prototype.submitFrame = function (pose) {}),
            (VRDisplay.prototype.getEyeParameters = function (whichEye) {
              return null;
            }),
            (HMDVRDevice.prototype = new VRDevice()),
            (PositionSensorVRDevice.prototype = new VRDevice()),
            (module.exports.VRFrameData = function () {
              (this.leftProjectionMatrix = new Float32Array(16)),
                (this.leftViewMatrix = new Float32Array(16)),
                (this.rightProjectionMatrix = new Float32Array(16)),
                (this.rightViewMatrix = new Float32Array(16)),
                (this.pose = null);
            }),
            (module.exports.VRDisplay = VRDisplay),
            (module.exports.VRDevice = VRDevice),
            (module.exports.HMDVRDevice = HMDVRDevice),
            (module.exports.PositionSensorVRDevice = PositionSensorVRDevice);
        },
        { "./util.js": 21 },
      ],
      4: [
        function (_dereq_, module, exports) {
          var CardboardUI = _dereq_("./cardboard-ui.js"),
            Util = _dereq_("./util.js"),
            WGLUPreserveGLState = _dereq_("./deps/wglu-preserve-state.js"),
            distortionVS = [
              "attribute vec2 position;",
              "attribute vec3 texCoord;",
              "varying vec2 vTexCoord;",
              "uniform vec4 viewportOffsetScale[2];",
              "void main() {",
              "  vec4 viewport = viewportOffsetScale[int(texCoord.z)];",
              "  vTexCoord = (texCoord.xy * viewport.zw) + viewport.xy;",
              "  gl_Position = vec4( position, 1.0, 1.0 );",
              "}",
            ].join("\n"),
            distortionFS = [
              "precision mediump float;",
              "uniform sampler2D diffuse;",
              "varying vec2 vTexCoord;",
              "void main() {",
              "  gl_FragColor = texture2D(diffuse, vTexCoord);",
              "}",
            ].join("\n");
          function CardboardDistorter(gl) {
            (this.gl = gl),
              (this.ctxAttribs = gl.getContextAttributes()),
              (this.meshWidth = 20),
              (this.meshHeight = 20),
              (this.bufferScale = WebVRConfig.BUFFER_SCALE),
              (this.bufferWidth = gl.drawingBufferWidth),
              (this.bufferHeight = gl.drawingBufferHeight),
              (this.realBindFramebuffer = gl.bindFramebuffer),
              (this.realEnable = gl.enable),
              (this.realDisable = gl.disable),
              (this.realColorMask = gl.colorMask),
              (this.realClearColor = gl.clearColor),
              (this.realViewport = gl.viewport),
              Util.isIOS() ||
                ((this.realCanvasWidth = Object.getOwnPropertyDescriptor(
                  gl.canvas.__proto__,
                  "width"
                )),
                (this.realCanvasHeight = Object.getOwnPropertyDescriptor(
                  gl.canvas.__proto__,
                  "height"
                ))),
              (this.isPatched = !1),
              (this.lastBoundFramebuffer = null),
              (this.cullFace = !1),
              (this.depthTest = !1),
              (this.blend = !1),
              (this.scissorTest = !1),
              (this.stencilTest = !1),
              (this.viewport = [0, 0, 0, 0]),
              (this.colorMask = [!0, !0, !0, !0]),
              (this.clearColor = [0, 0, 0, 0]),
              (this.attribs = { position: 0, texCoord: 1 }),
              (this.program = Util.linkProgram(
                gl,
                distortionVS,
                distortionFS,
                this.attribs
              )),
              (this.uniforms = Util.getProgramUniforms(gl, this.program)),
              (this.viewportOffsetScale = new Float32Array(8)),
              this.setTextureBounds(),
              (this.vertexBuffer = gl.createBuffer()),
              (this.indexBuffer = gl.createBuffer()),
              (this.indexCount = 0),
              (this.renderTarget = gl.createTexture()),
              (this.framebuffer = gl.createFramebuffer()),
              (this.depthStencilBuffer = null),
              (this.depthBuffer = null),
              (this.stencilBuffer = null),
              this.ctxAttribs.depth && this.ctxAttribs.stencil
                ? (this.depthStencilBuffer = gl.createRenderbuffer())
                : this.ctxAttribs.depth
                ? (this.depthBuffer = gl.createRenderbuffer())
                : this.ctxAttribs.stencil &&
                  (this.stencilBuffer = gl.createRenderbuffer()),
              this.patch(),
              this.onResize(),
              WebVRConfig.CARDBOARD_UI_DISABLED ||
                (this.cardboardUI = new CardboardUI(gl));
          }
          (CardboardDistorter.prototype.destroy = function () {
            var gl = this.gl;
            this.unpatch(),
              gl.deleteProgram(this.program),
              gl.deleteBuffer(this.vertexBuffer),
              gl.deleteBuffer(this.indexBuffer),
              gl.deleteTexture(this.renderTarget),
              gl.deleteFramebuffer(this.framebuffer),
              this.depthStencilBuffer &&
                gl.deleteRenderbuffer(this.depthStencilBuffer),
              this.depthBuffer && gl.deleteRenderbuffer(this.depthBuffer),
              this.stencilBuffer && gl.deleteRenderbuffer(this.stencilBuffer),
              this.cardboardUI && this.cardboardUI.destroy();
          }),
            (CardboardDistorter.prototype.onResize = function () {
              var gl = this.gl,
                self = this,
                glState = [
                  gl.RENDERBUFFER_BINDING,
                  gl.TEXTURE_BINDING_2D,
                  gl.TEXTURE0,
                ];
              WGLUPreserveGLState(gl, glState, function (gl) {
                self.realBindFramebuffer.call(gl, gl.FRAMEBUFFER, null),
                  self.scissorTest &&
                    self.realDisable.call(gl, gl.SCISSOR_TEST),
                  self.realColorMask.call(gl, !0, !0, !0, !0),
                  self.realViewport.call(
                    gl,
                    0,
                    0,
                    gl.drawingBufferWidth,
                    gl.drawingBufferHeight
                  ),
                  self.realClearColor.call(gl, 0, 0, 0, 1),
                  gl.clear(gl.COLOR_BUFFER_BIT),
                  self.realBindFramebuffer.call(
                    gl,
                    gl.FRAMEBUFFER,
                    self.framebuffer
                  ),
                  gl.bindTexture(gl.TEXTURE_2D, self.renderTarget),
                  gl.texImage2D(
                    gl.TEXTURE_2D,
                    0,
                    self.ctxAttribs.alpha ? gl.RGBA : gl.RGB,
                    self.bufferWidth,
                    self.bufferHeight,
                    0,
                    self.ctxAttribs.alpha ? gl.RGBA : gl.RGB,
                    gl.UNSIGNED_BYTE,
                    null
                  ),
                  gl.texParameteri(
                    gl.TEXTURE_2D,
                    gl.TEXTURE_MAG_FILTER,
                    gl.LINEAR
                  ),
                  gl.texParameteri(
                    gl.TEXTURE_2D,
                    gl.TEXTURE_MIN_FILTER,
                    gl.LINEAR
                  ),
                  gl.texParameteri(
                    gl.TEXTURE_2D,
                    gl.TEXTURE_WRAP_S,
                    gl.CLAMP_TO_EDGE
                  ),
                  gl.texParameteri(
                    gl.TEXTURE_2D,
                    gl.TEXTURE_WRAP_T,
                    gl.CLAMP_TO_EDGE
                  ),
                  gl.framebufferTexture2D(
                    gl.FRAMEBUFFER,
                    gl.COLOR_ATTACHMENT0,
                    gl.TEXTURE_2D,
                    self.renderTarget,
                    0
                  ),
                  self.ctxAttribs.depth && self.ctxAttribs.stencil
                    ? (gl.bindRenderbuffer(
                        gl.RENDERBUFFER,
                        self.depthStencilBuffer
                      ),
                      gl.renderbufferStorage(
                        gl.RENDERBUFFER,
                        gl.DEPTH_STENCIL,
                        self.bufferWidth,
                        self.bufferHeight
                      ),
                      gl.framebufferRenderbuffer(
                        gl.FRAMEBUFFER,
                        gl.DEPTH_STENCIL_ATTACHMENT,
                        gl.RENDERBUFFER,
                        self.depthStencilBuffer
                      ))
                    : self.ctxAttribs.depth
                    ? (gl.bindRenderbuffer(gl.RENDERBUFFER, self.depthBuffer),
                      gl.renderbufferStorage(
                        gl.RENDERBUFFER,
                        gl.DEPTH_COMPONENT16,
                        self.bufferWidth,
                        self.bufferHeight
                      ),
                      gl.framebufferRenderbuffer(
                        gl.FRAMEBUFFER,
                        gl.DEPTH_ATTACHMENT,
                        gl.RENDERBUFFER,
                        self.depthBuffer
                      ))
                    : self.ctxAttribs.stencil &&
                      (gl.bindRenderbuffer(gl.RENDERBUFFER, self.stencilBuffer),
                      gl.renderbufferStorage(
                        gl.RENDERBUFFER,
                        gl.STENCIL_INDEX8,
                        self.bufferWidth,
                        self.bufferHeight
                      ),
                      gl.framebufferRenderbuffer(
                        gl.FRAMEBUFFER,
                        gl.STENCIL_ATTACHMENT,
                        gl.RENDERBUFFER,
                        self.stencilBuffer
                      )),
                  !gl.checkFramebufferStatus(gl.FRAMEBUFFER) ===
                    gl.FRAMEBUFFER_COMPLETE &&
                    console.error("Framebuffer incomplete!"),
                  self.realBindFramebuffer.call(
                    gl,
                    gl.FRAMEBUFFER,
                    self.lastBoundFramebuffer
                  ),
                  self.scissorTest && self.realEnable.call(gl, gl.SCISSOR_TEST),
                  self.realColorMask.apply(gl, self.colorMask),
                  self.realViewport.apply(gl, self.viewport),
                  self.realClearColor.apply(gl, self.clearColor);
              }),
                this.cardboardUI && this.cardboardUI.onResize();
            }),
            (CardboardDistorter.prototype.patch = function () {
              if (!this.isPatched) {
                var self = this,
                  canvas = this.gl.canvas,
                  gl = this.gl;
                Util.isIOS() ||
                  ((canvas.width = Util.getScreenWidth() * this.bufferScale),
                  (canvas.height = Util.getScreenHeight() * this.bufferScale),
                  Object.defineProperty(canvas, "width", {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return self.bufferWidth;
                    },
                    set: function (value) {
                      (self.bufferWidth = value),
                        self.realCanvasWidth.set.call(canvas, value),
                        self.onResize();
                    },
                  }),
                  Object.defineProperty(canvas, "height", {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return self.bufferHeight;
                    },
                    set: function (value) {
                      (self.bufferHeight = value),
                        self.realCanvasHeight.set.call(canvas, value),
                        self.onResize();
                    },
                  })),
                  (this.lastBoundFramebuffer = gl.getParameter(
                    gl.FRAMEBUFFER_BINDING
                  )),
                  null == this.lastBoundFramebuffer &&
                    ((this.lastBoundFramebuffer = this.framebuffer),
                    this.gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer)),
                  (this.gl.bindFramebuffer = function (target, framebuffer) {
                    (self.lastBoundFramebuffer =
                      framebuffer || self.framebuffer),
                      self.realBindFramebuffer.call(
                        gl,
                        target,
                        self.lastBoundFramebuffer
                      );
                  }),
                  (this.cullFace = gl.getParameter(gl.CULL_FACE)),
                  (this.depthTest = gl.getParameter(gl.DEPTH_TEST)),
                  (this.blend = gl.getParameter(gl.BLEND)),
                  (this.scissorTest = gl.getParameter(gl.SCISSOR_TEST)),
                  (this.stencilTest = gl.getParameter(gl.STENCIL_TEST)),
                  (gl.enable = function (pname) {
                    switch (pname) {
                      case gl.CULL_FACE:
                        self.cullFace = !0;
                        break;
                      case gl.DEPTH_TEST:
                        self.depthTest = !0;
                        break;
                      case gl.BLEND:
                        self.blend = !0;
                        break;
                      case gl.SCISSOR_TEST:
                        self.scissorTest = !0;
                        break;
                      case gl.STENCIL_TEST:
                        self.stencilTest = !0;
                    }
                    self.realEnable.call(gl, pname);
                  }),
                  (gl.disable = function (pname) {
                    switch (pname) {
                      case gl.CULL_FACE:
                        self.cullFace = !1;
                        break;
                      case gl.DEPTH_TEST:
                        self.depthTest = !1;
                        break;
                      case gl.BLEND:
                        self.blend = !1;
                        break;
                      case gl.SCISSOR_TEST:
                        self.scissorTest = !1;
                        break;
                      case gl.STENCIL_TEST:
                        self.stencilTest = !1;
                    }
                    self.realDisable.call(gl, pname);
                  }),
                  (this.colorMask = gl.getParameter(gl.COLOR_WRITEMASK)),
                  (gl.colorMask = function (r, g, b, a) {
                    (self.colorMask[0] = r),
                      (self.colorMask[1] = g),
                      (self.colorMask[2] = b),
                      (self.colorMask[3] = a),
                      self.realColorMask.call(gl, r, g, b, a);
                  }),
                  (this.clearColor = gl.getParameter(gl.COLOR_CLEAR_VALUE)),
                  (gl.clearColor = function (r, g, b, a) {
                    (self.clearColor[0] = r),
                      (self.clearColor[1] = g),
                      (self.clearColor[2] = b),
                      (self.clearColor[3] = a),
                      self.realClearColor.call(gl, r, g, b, a);
                  }),
                  (this.viewport = gl.getParameter(gl.VIEWPORT)),
                  (gl.viewport = function (x, y, w, h) {
                    (self.viewport[0] = x),
                      (self.viewport[1] = y),
                      (self.viewport[2] = w),
                      (self.viewport[3] = h),
                      self.realViewport.call(gl, x, y, w, h);
                  }),
                  (this.isPatched = !0),
                  Util.safariCssSizeWorkaround(canvas);
              }
            }),
            (CardboardDistorter.prototype.unpatch = function () {
              if (this.isPatched) {
                var gl = this.gl,
                  canvas = this.gl.canvas;
                Util.isIOS() ||
                  (Object.defineProperty(canvas, "width", this.realCanvasWidth),
                  Object.defineProperty(
                    canvas,
                    "height",
                    this.realCanvasHeight
                  )),
                  (canvas.width = this.bufferWidth),
                  (canvas.height = this.bufferHeight),
                  (gl.bindFramebuffer = this.realBindFramebuffer),
                  (gl.enable = this.realEnable),
                  (gl.disable = this.realDisable),
                  (gl.colorMask = this.realColorMask),
                  (gl.clearColor = this.realClearColor),
                  (gl.viewport = this.realViewport),
                  this.lastBoundFramebuffer == this.framebuffer &&
                    gl.bindFramebuffer(gl.FRAMEBUFFER, null),
                  (this.isPatched = !1),
                  setTimeout(function () {
                    Util.safariCssSizeWorkaround(canvas);
                  }, 1);
              }
            }),
            (CardboardDistorter.prototype.setTextureBounds = function (
              leftBounds,
              rightBounds
            ) {
              (leftBounds = leftBounds || [0, 0, 0.5, 1]),
                (rightBounds = rightBounds || [0.5, 0, 0.5, 1]),
                (this.viewportOffsetScale[0] = leftBounds[0]),
                (this.viewportOffsetScale[1] = leftBounds[1]),
                (this.viewportOffsetScale[2] = leftBounds[2]),
                (this.viewportOffsetScale[3] = leftBounds[3]),
                (this.viewportOffsetScale[4] = rightBounds[0]),
                (this.viewportOffsetScale[5] = rightBounds[1]),
                (this.viewportOffsetScale[6] = rightBounds[2]),
                (this.viewportOffsetScale[7] = rightBounds[3]);
            }),
            (CardboardDistorter.prototype.submitFrame = function () {
              var gl = this.gl,
                self = this,
                glState = [];
              if (
                (WebVRConfig.DIRTY_SUBMIT_FRAME_BINDINGS ||
                  glState.push(
                    gl.CURRENT_PROGRAM,
                    gl.ARRAY_BUFFER_BINDING,
                    gl.ELEMENT_ARRAY_BUFFER_BINDING,
                    gl.TEXTURE_BINDING_2D,
                    gl.TEXTURE0
                  ),
                WGLUPreserveGLState(gl, glState, function (gl) {
                  self.realBindFramebuffer.call(gl, gl.FRAMEBUFFER, null),
                    self.cullFace && self.realDisable.call(gl, gl.CULL_FACE),
                    self.depthTest && self.realDisable.call(gl, gl.DEPTH_TEST),
                    self.blend && self.realDisable.call(gl, gl.BLEND),
                    self.scissorTest &&
                      self.realDisable.call(gl, gl.SCISSOR_TEST),
                    self.stencilTest &&
                      self.realDisable.call(gl, gl.STENCIL_TEST),
                    self.realColorMask.call(gl, !0, !0, !0, !0),
                    self.realViewport.call(
                      gl,
                      0,
                      0,
                      gl.drawingBufferWidth,
                      gl.drawingBufferHeight
                    ),
                    (self.ctxAttribs.alpha || Util.isIOS()) &&
                      (self.realClearColor.call(gl, 0, 0, 0, 1),
                      gl.clear(gl.COLOR_BUFFER_BIT)),
                    gl.useProgram(self.program),
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, self.indexBuffer),
                    gl.bindBuffer(gl.ARRAY_BUFFER, self.vertexBuffer),
                    gl.enableVertexAttribArray(self.attribs.position),
                    gl.enableVertexAttribArray(self.attribs.texCoord),
                    gl.vertexAttribPointer(
                      self.attribs.position,
                      2,
                      gl.FLOAT,
                      !1,
                      20,
                      0
                    ),
                    gl.vertexAttribPointer(
                      self.attribs.texCoord,
                      3,
                      gl.FLOAT,
                      !1,
                      20,
                      8
                    ),
                    gl.activeTexture(gl.TEXTURE0),
                    gl.uniform1i(self.uniforms.diffuse, 0),
                    gl.bindTexture(gl.TEXTURE_2D, self.renderTarget),
                    gl.uniform4fv(
                      self.uniforms.viewportOffsetScale,
                      self.viewportOffsetScale
                    ),
                    gl.drawElements(
                      gl.TRIANGLES,
                      self.indexCount,
                      gl.UNSIGNED_SHORT,
                      0
                    ),
                    self.cardboardUI && self.cardboardUI.renderNoState(),
                    self.realBindFramebuffer.call(
                      self.gl,
                      gl.FRAMEBUFFER,
                      self.framebuffer
                    ),
                    self.ctxAttribs.preserveDrawingBuffer ||
                      (self.realClearColor.call(gl, 0, 0, 0, 0),
                      gl.clear(gl.COLOR_BUFFER_BIT)),
                    WebVRConfig.DIRTY_SUBMIT_FRAME_BINDINGS ||
                      self.realBindFramebuffer.call(
                        gl,
                        gl.FRAMEBUFFER,
                        self.lastBoundFramebuffer
                      ),
                    self.cullFace && self.realEnable.call(gl, gl.CULL_FACE),
                    self.depthTest && self.realEnable.call(gl, gl.DEPTH_TEST),
                    self.blend && self.realEnable.call(gl, gl.BLEND),
                    self.scissorTest &&
                      self.realEnable.call(gl, gl.SCISSOR_TEST),
                    self.stencilTest &&
                      self.realEnable.call(gl, gl.STENCIL_TEST),
                    self.realColorMask.apply(gl, self.colorMask),
                    self.realViewport.apply(gl, self.viewport),
                    (!self.ctxAttribs.alpha &&
                      self.ctxAttribs.preserveDrawingBuffer) ||
                      self.realClearColor.apply(gl, self.clearColor);
                }),
                Util.isIOS())
              ) {
                var canvas = gl.canvas;
                (canvas.width == self.bufferWidth &&
                  canvas.height == self.bufferHeight) ||
                  ((self.bufferWidth = canvas.width),
                  (self.bufferHeight = canvas.height),
                  self.onResize());
              }
            }),
            (CardboardDistorter.prototype.updateDeviceInfo = function (
              deviceInfo
            ) {
              var gl = this.gl,
                self = this,
                glState = [
                  gl.ARRAY_BUFFER_BINDING,
                  gl.ELEMENT_ARRAY_BUFFER_BINDING,
                ];
              WGLUPreserveGLState(gl, glState, function (gl) {
                var vertices = self.computeMeshVertices_(
                  self.meshWidth,
                  self.meshHeight,
                  deviceInfo
                );
                if (
                  (gl.bindBuffer(gl.ARRAY_BUFFER, self.vertexBuffer),
                  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW),
                  !self.indexCount)
                ) {
                  var indices = self.computeMeshIndices_(
                    self.meshWidth,
                    self.meshHeight
                  );
                  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, self.indexBuffer),
                    gl.bufferData(
                      gl.ELEMENT_ARRAY_BUFFER,
                      indices,
                      gl.STATIC_DRAW
                    ),
                    (self.indexCount = indices.length);
                }
              });
            }),
            (CardboardDistorter.prototype.computeMeshVertices_ = function (
              width,
              height,
              deviceInfo
            ) {
              for (
                var vertices = new Float32Array(2 * width * height * 5),
                  lensFrustum = deviceInfo.getLeftEyeVisibleTanAngles(),
                  noLensFrustum = deviceInfo.getLeftEyeNoLensTanAngles(),
                  viewport =
                    deviceInfo.getLeftEyeVisibleScreenRect(noLensFrustum),
                  vidx = 0,
                  e = 0;
                e < 2;
                e++
              ) {
                for (var j = 0; j < height; j++)
                  for (var i = 0; i < width; i++, vidx++) {
                    var u = i / (width - 1),
                      v = j / (height - 1),
                      s = u,
                      t = v,
                      x = Util.lerp(lensFrustum[0], lensFrustum[2], u),
                      y = Util.lerp(lensFrustum[3], lensFrustum[1], v),
                      d = Math.sqrt(x * x + y * y),
                      r = deviceInfo.distortion.distortInverse(d),
                      q = (y * r) / d;
                    (u =
                      ((x * r) / d - noLensFrustum[0]) /
                      (noLensFrustum[2] - noLensFrustum[0])),
                      (v =
                        (q - noLensFrustum[3]) /
                        (noLensFrustum[1] - noLensFrustum[3]));
                    deviceInfo.device.widthMeters,
                      deviceInfo.device.heightMeters;
                    (u = 2 * (viewport.x + u * viewport.width - 0.5)),
                      (v = 2 * (viewport.y + v * viewport.height - 0.5)),
                      (vertices[5 * vidx + 0] = u),
                      (vertices[5 * vidx + 1] = v),
                      (vertices[5 * vidx + 2] = s),
                      (vertices[5 * vidx + 3] = t),
                      (vertices[5 * vidx + 4] = e);
                  }
                var w = lensFrustum[2] - lensFrustum[0];
                (lensFrustum[0] = -(w + lensFrustum[0])),
                  (lensFrustum[2] = w - lensFrustum[2]),
                  (w = noLensFrustum[2] - noLensFrustum[0]),
                  (noLensFrustum[0] = -(w + noLensFrustum[0])),
                  (noLensFrustum[2] = w - noLensFrustum[2]),
                  (viewport.x = 1 - (viewport.x + viewport.width));
              }
              return vertices;
            }),
            (CardboardDistorter.prototype.computeMeshIndices_ = function (
              width,
              height
            ) {
              for (
                var indices = new Uint16Array(
                    2 * (width - 1) * (height - 1) * 6
                  ),
                  halfwidth = width / 2,
                  halfheight = height / 2,
                  vidx = 0,
                  iidx = 0,
                  e = 0;
                e < 2;
                e++
              )
                for (var j = 0; j < height; j++)
                  for (var i = 0; i < width; i++, vidx++)
                    0 != i &&
                      0 != j &&
                      (i <= halfwidth == j <= halfheight
                        ? ((indices[iidx++] = vidx),
                          (indices[iidx++] = vidx - width - 1),
                          (indices[iidx++] = vidx - width),
                          (indices[iidx++] = vidx - width - 1),
                          (indices[iidx++] = vidx),
                          (indices[iidx++] = vidx - 1))
                        : ((indices[iidx++] = vidx - 1),
                          (indices[iidx++] = vidx - width),
                          (indices[iidx++] = vidx),
                          (indices[iidx++] = vidx - width),
                          (indices[iidx++] = vidx - 1),
                          (indices[iidx++] = vidx - width - 1)));
              return indices;
            }),
            (CardboardDistorter.prototype.getOwnPropertyDescriptor_ = function (
              proto,
              attrName
            ) {
              var descriptor = Object.getOwnPropertyDescriptor(proto, attrName);
              return (
                (void 0 !== descriptor.get && void 0 !== descriptor.set) ||
                  ((descriptor.configurable = !0),
                  (descriptor.enumerable = !0),
                  (descriptor.get = function () {
                    return this.getAttribute(attrName);
                  }),
                  (descriptor.set = function (val) {
                    this.setAttribute(attrName, val);
                  })),
                descriptor
              );
            }),
            (module.exports = CardboardDistorter);
        },
        {
          "./cardboard-ui.js": 5,
          "./deps/wglu-preserve-state.js": 7,
          "./util.js": 21,
        },
      ],
      5: [
        function (_dereq_, module, exports) {
          var Util = _dereq_("./util.js"),
            WGLUPreserveGLState = _dereq_("./deps/wglu-preserve-state.js"),
            uiVS = [
              "attribute vec2 position;",
              "uniform mat4 projectionMat;",
              "void main() {",
              "  gl_Position = projectionMat * vec4( position, -1.0, 1.0 );",
              "}",
            ].join("\n"),
            uiFS = [
              "precision mediump float;",
              "uniform vec4 color;",
              "void main() {",
              "  gl_FragColor = color;",
              "}",
            ].join("\n"),
            DEG2RAD = Math.PI / 180;
          function CardboardUI(gl) {
            (this.gl = gl),
              (this.attribs = { position: 0 }),
              (this.program = Util.linkProgram(gl, uiVS, uiFS, this.attribs)),
              (this.uniforms = Util.getProgramUniforms(gl, this.program)),
              (this.vertexBuffer = gl.createBuffer()),
              (this.gearOffset = 0),
              (this.gearVertexCount = 0),
              (this.arrowOffset = 0),
              (this.arrowVertexCount = 0),
              (this.projMat = new Float32Array(16)),
              (this.listener = null),
              this.onResize();
          }
          (CardboardUI.prototype.destroy = function () {
            var gl = this.gl;
            this.listener &&
              gl.canvas.removeEventListener("click", this.listener, !1),
              gl.deleteProgram(this.program),
              gl.deleteBuffer(this.vertexBuffer);
          }),
            (CardboardUI.prototype.listen = function (
              optionsCallback,
              backCallback
            ) {
              var canvas = this.gl.canvas;
              (this.listener = function (event) {
                var midline = canvas.clientWidth / 2;
                event.clientX > midline - 42 &&
                event.clientX < 42 + midline &&
                event.clientY > canvas.clientHeight - 42
                  ? optionsCallback(event)
                  : event.clientX < 42 &&
                    event.clientY < 42 &&
                    backCallback(event);
              }),
                canvas.addEventListener("click", this.listener, !1);
            }),
            (CardboardUI.prototype.onResize = function () {
              var gl = this.gl,
                self = this,
                glState = [gl.ARRAY_BUFFER_BINDING];
              WGLUPreserveGLState(gl, glState, function (gl) {
                var vertices = [],
                  midline = gl.drawingBufferWidth / 2,
                  dps =
                    gl.drawingBufferWidth /
                    (screen.width * window.devicePixelRatio);
                Util.isIOS() || (dps *= window.devicePixelRatio);
                var lineWidth = (4 * dps) / 2,
                  buttonSize = 42 * dps,
                  buttonScale = (28 * dps) / 2,
                  buttonBorder = 14 * dps;
                function addGearSegment(theta, r) {
                  var angle = (90 - theta) * DEG2RAD,
                    x = Math.cos(angle),
                    y = Math.sin(angle);
                  vertices.push(
                    0.3125 * x * buttonScale + midline,
                    0.3125 * y * buttonScale + buttonScale
                  ),
                    vertices.push(
                      r * x * buttonScale + midline,
                      r * y * buttonScale + buttonScale
                    );
                }
                vertices.push(midline - lineWidth, buttonSize),
                  vertices.push(midline - lineWidth, gl.drawingBufferHeight),
                  vertices.push(midline + lineWidth, buttonSize),
                  vertices.push(midline + lineWidth, gl.drawingBufferHeight),
                  (self.gearOffset = vertices.length / 2);
                for (var i = 0; i <= 6; i++) {
                  var segmentTheta = 60 * i;
                  addGearSegment(segmentTheta, 1),
                    addGearSegment(12 + segmentTheta, 1),
                    addGearSegment(20 + segmentTheta, 0.75),
                    addGearSegment(40 + segmentTheta, 0.75),
                    addGearSegment(48 + segmentTheta, 1);
                }
                function addArrowVertex(x, y) {
                  vertices.push(
                    buttonBorder + x,
                    gl.drawingBufferHeight - buttonBorder - y
                  );
                }
                (self.gearVertexCount = vertices.length / 2 - self.gearOffset),
                  (self.arrowOffset = vertices.length / 2);
                var angledLineWidth = lineWidth / Math.sin(45 * DEG2RAD);
                addArrowVertex(0, buttonScale),
                  addArrowVertex(buttonScale, 0),
                  addArrowVertex(
                    buttonScale + angledLineWidth,
                    angledLineWidth
                  ),
                  addArrowVertex(
                    angledLineWidth,
                    buttonScale + angledLineWidth
                  ),
                  addArrowVertex(
                    angledLineWidth,
                    buttonScale - angledLineWidth
                  ),
                  addArrowVertex(0, buttonScale),
                  addArrowVertex(buttonScale, 2 * buttonScale),
                  addArrowVertex(
                    buttonScale + angledLineWidth,
                    2 * buttonScale - angledLineWidth
                  ),
                  addArrowVertex(
                    angledLineWidth,
                    buttonScale - angledLineWidth
                  ),
                  addArrowVertex(0, buttonScale),
                  addArrowVertex(angledLineWidth, buttonScale - lineWidth),
                  addArrowVertex(28 * dps, buttonScale - lineWidth),
                  addArrowVertex(angledLineWidth, buttonScale + lineWidth),
                  addArrowVertex(28 * dps, buttonScale + lineWidth),
                  (self.arrowVertexCount =
                    vertices.length / 2 - self.arrowOffset),
                  gl.bindBuffer(gl.ARRAY_BUFFER, self.vertexBuffer),
                  gl.bufferData(
                    gl.ARRAY_BUFFER,
                    new Float32Array(vertices),
                    gl.STATIC_DRAW
                  );
              });
            }),
            (CardboardUI.prototype.render = function () {
              var gl = this.gl,
                self = this,
                glState = [
                  gl.CULL_FACE,
                  gl.DEPTH_TEST,
                  gl.BLEND,
                  gl.SCISSOR_TEST,
                  gl.STENCIL_TEST,
                  gl.COLOR_WRITEMASK,
                  gl.VIEWPORT,
                  gl.CURRENT_PROGRAM,
                  gl.ARRAY_BUFFER_BINDING,
                ];
              WGLUPreserveGLState(gl, glState, function (gl) {
                gl.disable(gl.CULL_FACE),
                  gl.disable(gl.DEPTH_TEST),
                  gl.disable(gl.BLEND),
                  gl.disable(gl.SCISSOR_TEST),
                  gl.disable(gl.STENCIL_TEST),
                  gl.colorMask(!0, !0, !0, !0),
                  gl.viewport(
                    0,
                    0,
                    gl.drawingBufferWidth,
                    gl.drawingBufferHeight
                  ),
                  self.renderNoState();
              });
            }),
            (CardboardUI.prototype.renderNoState = function () {
              var gl = this.gl;
              gl.useProgram(this.program),
                gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer),
                gl.enableVertexAttribArray(this.attribs.position),
                gl.vertexAttribPointer(
                  this.attribs.position,
                  2,
                  gl.FLOAT,
                  !1,
                  8,
                  0
                ),
                gl.uniform4f(this.uniforms.color, 1, 1, 1, 1),
                Util.orthoMatrix(
                  this.projMat,
                  0,
                  gl.drawingBufferWidth,
                  0,
                  gl.drawingBufferHeight,
                  0.1,
                  1024
                ),
                gl.uniformMatrix4fv(
                  this.uniforms.projectionMat,
                  !1,
                  this.projMat
                ),
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4),
                gl.drawArrays(
                  gl.TRIANGLE_STRIP,
                  this.gearOffset,
                  this.gearVertexCount
                ),
                gl.drawArrays(
                  gl.TRIANGLE_STRIP,
                  this.arrowOffset,
                  this.arrowVertexCount
                );
            }),
            (module.exports = CardboardUI);
        },
        { "./deps/wglu-preserve-state.js": 7, "./util.js": 21 },
      ],
      6: [
        function (_dereq_, module, exports) {
          var CardboardDistorter = _dereq_("./cardboard-distorter.js"),
            CardboardUI = _dereq_("./cardboard-ui.js"),
            DeviceInfo = _dereq_("./device-info.js"),
            Dpdb = _dereq_("./dpdb/dpdb.js"),
            FusionPoseSensor = _dereq_("./sensor-fusion/fusion-pose-sensor.js"),
            ViewerSelector = _dereq_("./viewer-selector.js"),
            VRDisplay = _dereq_("./base.js").VRDisplay,
            Util = _dereq_("./util.js"),
            Eye_LEFT = "left",
            Eye_RIGHT = "right";
          function CardboardVRDisplay() {
            (this.displayName = "Cardboard VRDisplay (webvr-polyfill)"),
              (this.capabilities.hasOrientation = !0),
              (this.capabilities.canPresent = !0),
              (this.bufferScale_ = WebVRConfig.BUFFER_SCALE),
              (this.poseSensor_ = new FusionPoseSensor()),
              (this.distorter_ = null),
              (this.cardboardUI_ = null),
              (this.dpdb_ = new Dpdb(
                !1,
                this.onDeviceParamsUpdated_.bind(this)
              )),
              (this.deviceInfo_ = new DeviceInfo(this.dpdb_.getDeviceParams())),
              (this.viewerSelector_ = new ViewerSelector()),
              this.viewerSelector_.on(
                "change",
                this.onViewerChanged_.bind(this)
              ),
              this.deviceInfo_.setViewer(
                this.viewerSelector_.getCurrentViewer()
              ),
              window.addEventListener("resize", this.onResize_.bind(this));
          }
          ((CardboardVRDisplay.prototype = new VRDisplay()).getImmediatePose =
            function () {
              return {
                position: this.poseSensor_.getPosition(),
                orientation: this.poseSensor_.getOrientation(),
                linearVelocity: null,
                linearAcceleration: null,
                angularVelocity: null,
                angularAcceleration: null,
              };
            }),
            (CardboardVRDisplay.prototype.resetPose = function () {
              this.poseSensor_.resetPose();
            }),
            (CardboardVRDisplay.prototype.getEyeParameters = function (
              whichEye
            ) {
              var fieldOfView,
                offset = [
                  0.5 * this.deviceInfo_.viewer.interLensDistance,
                  0,
                  0,
                ];
              if (whichEye == Eye_LEFT)
                (offset[0] *= -1),
                  (fieldOfView = this.deviceInfo_.getFieldOfViewLeftEye());
              else {
                if (whichEye != Eye_RIGHT)
                  return (
                    console.error("Invalid eye provided: %s", whichEye), null
                  );
                fieldOfView = this.deviceInfo_.getFieldOfViewRightEye();
              }
              return {
                fieldOfView: fieldOfView,
                offset: offset,
                renderWidth:
                  0.5 * this.deviceInfo_.device.width * this.bufferScale_,
                renderHeight:
                  this.deviceInfo_.device.height * this.bufferScale_,
              };
            }),
            (CardboardVRDisplay.prototype.onDeviceParamsUpdated_ = function (
              newParams
            ) {
              Util.isDebug() &&
                console.log("DPDB reported that device params were updated."),
                this.deviceInfo_.updateDeviceParams(newParams),
                this.distorter_ &&
                  this.distorter_.updateDeviceInfo(this.deviceInfo_);
            }),
            (CardboardVRDisplay.prototype.updateBounds_ = function () {
              this.layer_ &&
                this.distorter_ &&
                (this.layer_.leftBounds || this.layer_.rightBounds) &&
                this.distorter_.setTextureBounds(
                  this.layer_.leftBounds,
                  this.layer_.rightBounds
                );
            }),
            (CardboardVRDisplay.prototype.beginPresent_ = function () {
              var gl = this.layer_.source.getContext("webgl");
              (gl =
                (gl =
                  gl || this.layer_.source.getContext("experimental-webgl")) ||
                this.layer_.source.getContext("webgl2")) &&
                (this.layer_.predistorted
                  ? WebVRConfig.CARDBOARD_UI_DISABLED ||
                    ((gl.canvas.width =
                      Util.getScreenWidth() * this.bufferScale_),
                    (gl.canvas.height =
                      Util.getScreenHeight() * this.bufferScale_),
                    (this.cardboardUI_ = new CardboardUI(gl)))
                  : ((this.distorter_ = new CardboardDistorter(gl)),
                    this.distorter_.updateDeviceInfo(this.deviceInfo_),
                    (this.cardboardUI_ = this.distorter_.cardboardUI)),
                this.cardboardUI_ &&
                  this.cardboardUI_.listen(
                    function (e) {
                      this.viewerSelector_.show(
                        this.layer_.source.parentElement
                      ),
                        e.stopPropagation(),
                        e.preventDefault();
                    }.bind(this),
                    function (e) {
                      this.exitPresent(),
                        e.stopPropagation(),
                        e.preventDefault();
                    }.bind(this)
                  ),
                (this.orientationHandler =
                  this.onOrientationChange_.bind(this)),
                window.addEventListener(
                  "orientationchange",
                  this.orientationHandler
                ),
                (this.vrdisplaypresentchangeHandler =
                  this.updateBounds_.bind(this)),
                window.addEventListener(
                  "vrdisplaypresentchange",
                  this.vrdisplaypresentchangeHandler
                ),
                this.fireVRDisplayDeviceParamsChange_(),
                this.onResize_());
            }),
            (CardboardVRDisplay.prototype.endPresent_ = function () {
              this.distorter_ &&
                (this.distorter_.destroy(), (this.distorter_ = null)),
                this.cardboardUI_ &&
                  (this.cardboardUI_.destroy(), (this.cardboardUI_ = null)),
                this.viewerSelector_.hide(),
                window.removeEventListener(
                  "orientationchange",
                  this.orientationHandler
                ),
                window.removeEventListener(
                  "vrdisplaypresentchange",
                  this.vrdisplaypresentchangeHandler
                );
            }),
            (CardboardVRDisplay.prototype.submitFrame = function (pose) {
              if (this.distorter_) this.distorter_.submitFrame();
              else if (this.cardboardUI_ && this.layer_) {
                var canvas = this.layer_.source.getContext("webgl").canvas;
                (canvas.width == this.lastWidth &&
                  canvas.height == this.lastHeight) ||
                  this.cardboardUI_.onResize(),
                  (this.lastWidth = canvas.width),
                  (this.lastHeight = canvas.height),
                  this.cardboardUI_.render();
              }
            }),
            (CardboardVRDisplay.prototype.onOrientationChange_ = function (e) {
              this.viewerSelector_.hide(), this.onResize_();
            }),
            (CardboardVRDisplay.prototype.onResize_ = function (e) {
              var width,
                height,
                updateSize = function (delay) {
                  if (0 < delay) setTimeout(updateSize, delay);
                  else if (this.layer_) {
                    var gl = this.layer_.source.getContext("webgl");
                    if (!(gl && gl.canvas && gl.canvas.parentElement)) return;
                    var curWidth = gl.canvas.parentElement.clientWidth,
                      curHeight = gl.canvas.parentElement.clientHeight;
                    if (curWidth == width && curHeight == height) return;
                    var cssProperties = [
                      "position: absolute",
                      "top: 0",
                      "left: 0",
                      "width: " + (width = curWidth) + "px",
                      "height: " + (height = curHeight) + "px",
                      "border: 0",
                      "margin: 0",
                      "padding: 0 10px 10px 0",
                    ];
                    gl.canvas.setAttribute(
                      "style",
                      cssProperties.join("; ") + ";"
                    ),
                      Util.safariCssSizeWorkaround(gl.canvas);
                  }
                }.bind(this);
              updateSize(0),
                updateSize(300),
                updateSize(1e3),
                updateSize(3300),
                updateSize(4e3),
                this.distorter_ && this.distorter_.onResize();
            }),
            (CardboardVRDisplay.prototype.onViewerChanged_ = function (viewer) {
              this.deviceInfo_.setViewer(viewer),
                this.distorter_ &&
                  this.distorter_.updateDeviceInfo(this.deviceInfo_),
                this.fireVRDisplayDeviceParamsChange_();
            }),
            (CardboardVRDisplay.prototype.fireVRDisplayDeviceParamsChange_ =
              function () {
                var event = new CustomEvent("vrdisplaydeviceparamschange", {
                  detail: { vrdisplay: this, deviceInfo: this.deviceInfo_ },
                });
                window.dispatchEvent(event);
              }),
            (module.exports = CardboardVRDisplay);
        },
        {
          "./base.js": 3,
          "./cardboard-distorter.js": 4,
          "./cardboard-ui.js": 5,
          "./device-info.js": 8,
          "./dpdb/dpdb.js": 12,
          "./sensor-fusion/fusion-pose-sensor.js": 17,
          "./util.js": 21,
          "./viewer-selector.js": 22,
        },
      ],
      7: [
        function (_dereq_, module, exports) {
          module.exports = function (gl, bindings, callback) {
            if (bindings) {
              for (
                var boundValues = [], activeTexture = null, i = 0;
                i < bindings.length;
                ++i
              ) {
                switch ((binding = bindings[i])) {
                  case gl.TEXTURE_BINDING_2D:
                  case gl.TEXTURE_BINDING_CUBE_MAP:
                    if (
                      (textureUnit = bindings[++i]) < gl.TEXTURE0 ||
                      textureUnit > gl.TEXTURE31
                    ) {
                      console.error(
                        "TEXTURE_BINDING_2D or TEXTURE_BINDING_CUBE_MAP must be followed by a valid texture unit"
                      ),
                        boundValues.push(null, null);
                      break;
                    }
                    (activeTexture =
                      activeTexture || gl.getParameter(gl.ACTIVE_TEXTURE)),
                      gl.activeTexture(textureUnit),
                      boundValues.push(gl.getParameter(binding), null);
                    break;
                  case gl.ACTIVE_TEXTURE:
                    (activeTexture = gl.getParameter(gl.ACTIVE_TEXTURE)),
                      boundValues.push(null);
                    break;
                  default:
                    boundValues.push(gl.getParameter(binding));
                }
              }
              callback(gl);
              for (i = 0; i < bindings.length; ++i) {
                var binding = bindings[i],
                  boundValue = boundValues[i];
                switch (binding) {
                  case gl.ACTIVE_TEXTURE:
                    break;
                  case gl.ARRAY_BUFFER_BINDING:
                    gl.bindBuffer(gl.ARRAY_BUFFER, boundValue);
                    break;
                  case gl.COLOR_CLEAR_VALUE:
                    gl.clearColor(
                      boundValue[0],
                      boundValue[1],
                      boundValue[2],
                      boundValue[3]
                    );
                    break;
                  case gl.COLOR_WRITEMASK:
                    gl.colorMask(
                      boundValue[0],
                      boundValue[1],
                      boundValue[2],
                      boundValue[3]
                    );
                    break;
                  case gl.CURRENT_PROGRAM:
                    gl.useProgram(boundValue);
                    break;
                  case gl.ELEMENT_ARRAY_BUFFER_BINDING:
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, boundValue);
                    break;
                  case gl.FRAMEBUFFER_BINDING:
                    gl.bindFramebuffer(gl.FRAMEBUFFER, boundValue);
                    break;
                  case gl.RENDERBUFFER_BINDING:
                    gl.bindRenderbuffer(gl.RENDERBUFFER, boundValue);
                    break;
                  case gl.TEXTURE_BINDING_2D:
                    if (
                      (textureUnit = bindings[++i]) < gl.TEXTURE0 ||
                      textureUnit > gl.TEXTURE31
                    )
                      break;
                    gl.activeTexture(textureUnit),
                      gl.bindTexture(gl.TEXTURE_2D, boundValue);
                    break;
                  case gl.TEXTURE_BINDING_CUBE_MAP:
                    var textureUnit;
                    if (
                      (textureUnit = bindings[++i]) < gl.TEXTURE0 ||
                      textureUnit > gl.TEXTURE31
                    )
                      break;
                    gl.activeTexture(textureUnit),
                      gl.bindTexture(gl.TEXTURE_CUBE_MAP, boundValue);
                    break;
                  case gl.VIEWPORT:
                    gl.viewport(
                      boundValue[0],
                      boundValue[1],
                      boundValue[2],
                      boundValue[3]
                    );
                    break;
                  case gl.BLEND:
                  case gl.CULL_FACE:
                  case gl.DEPTH_TEST:
                  case gl.SCISSOR_TEST:
                  case gl.STENCIL_TEST:
                    boundValue ? gl.enable(binding) : gl.disable(binding);
                    break;
                  default:
                    console.log(
                      "No GL restore behavior for 0x" + binding.toString(16)
                    );
                }
                activeTexture && gl.activeTexture(activeTexture);
              }
            } else callback(gl);
          };
        },
        {},
      ],
      8: [
        function (_dereq_, module, exports) {
          var Distortion = _dereq_("./distortion/distortion.js"),
            MathUtil = _dereq_("./math-util.js"),
            Util = _dereq_("./util.js");
          function Device(params) {
            (this.width = params.width || Util.getScreenWidth()),
              (this.height = params.height || Util.getScreenHeight()),
              (this.widthMeters = params.widthMeters),
              (this.heightMeters = params.heightMeters),
              (this.bevelMeters = params.bevelMeters);
          }
          var DEFAULT_ANDROID = new Device({
              widthMeters: 0.11,
              heightMeters: 0.062,
              bevelMeters: 0.004,
            }),
            DEFAULT_IOS = new Device({
              widthMeters: 0.1038,
              heightMeters: 0.0584,
              bevelMeters: 0.004,
            }),
            Viewers = {
              CardboardV1Alt: new CardboardViewer({
                id: "CardboardV1Alt",
                label: "Cardboard v1",
                fov: 40,
                interLensDistance: 0.055,
                baselineLensDistance: 0.035,
                screenLensDistance: 0.042,
                distortionCoefficients: [0.441, 0.156],
                inverseCoefficients: [
                  -0.4410035, 0.42756155, -0.4804439, 0.5460139, -0.58821183,
                  0.5733938, -0.48303202, 0.33299083, -0.17573841, 0.0651772,
                  -0.01488963, 0.001559834,
                ],
              }),
              CardboardV2Alt: new CardboardViewer({
                id: "CardboardV2Alt",
                label: "Cardboard v2",
                fov: 60,
                interLensDistance: 0.055,
                baselineLensDistance: 0.035,
                screenLensDistance: 0.039,
                distortionCoefficients: [0.34, 0.55],
                inverseCoefficients: [
                  -0.33836704, -0.18162185, 0.862655, -1.2462051, 1.0560602,
                  -0.58208317, 0.21609078, -0.05444823, 0.009177956,
                  -0.0009904169, 6183535e-11, -16981803e-13,
                ],
              }),
              NoLensCorrection: new CardboardViewer({
                id: "NoLensCorrection",
                label: "No lens correction",
                fov: 45,
                interLensDistance: 0.055,
                baselineLensDistance: 0.035,
                screenLensDistance: 0.042,
                distortionCoefficients: [0, 0],
                inverseCoefficients: [
                  -0.4410035, 0.42756155, -0.4804439, 0.5460139, -0.58821183,
                  0.5733938, -0.48303202, 0.33299083, -0.17573841, 0.0651772,
                  -0.01488963, 0.001559834,
                ],
              }),
              CardboardV1: new CardboardViewer({
                id: "CardboardV1",
                label: "Cardboard v1 (alternative)",
                fov: 40,
                interLensDistance: 0.06,
                baselineLensDistance: 0.035,
                screenLensDistance: 0.042,
                distortionCoefficients: [0.441, 0.156],
                inverseCoefficients: [
                  -0.4410035, 0.42756155, -0.4804439, 0.5460139, -0.58821183,
                  0.5733938, -0.48303202, 0.33299083, -0.17573841, 0.0651772,
                  -0.01488963, 0.001559834,
                ],
              }),
              CardboardV2: new CardboardViewer({
                id: "CardboardV2",
                label: "Cardboard v2 (alternative)",
                fov: 60,
                interLensDistance: 0.064,
                baselineLensDistance: 0.035,
                screenLensDistance: 0.039,
                distortionCoefficients: [0.34, 0.55],
                inverseCoefficients: [
                  -0.33836704, -0.18162185, 0.862655, -1.2462051, 1.0560602,
                  -0.58208317, 0.21609078, -0.05444823, 0.009177956,
                  -0.0009904169, 6183535e-11, -16981803e-13,
                ],
              }),
            };
          function DeviceInfo(deviceParams) {
            (this.viewer = Viewers.CardboardV1Alt),
              this.updateDeviceParams(deviceParams),
              (this.distortion = new Distortion(
                this.viewer.distortionCoefficients
              ));
          }
          function CardboardViewer(params) {
            (this.id = params.id),
              (this.label = params.label),
              (this.fov = params.fov),
              (this.interLensDistance = params.interLensDistance),
              (this.baselineLensDistance = params.baselineLensDistance),
              (this.screenLensDistance = params.screenLensDistance),
              (this.distortionCoefficients = params.distortionCoefficients),
              (this.inverseCoefficients = params.inverseCoefficients);
          }
          (DeviceInfo.prototype.updateDeviceParams = function (deviceParams) {
            this.device = this.determineDevice_(deviceParams) || this.device;
          }),
            (DeviceInfo.prototype.getDevice = function () {
              return this.device;
            }),
            (DeviceInfo.prototype.setViewer = function (viewer) {
              (this.viewer = viewer),
                (this.distortion = new Distortion(
                  this.viewer.distortionCoefficients
                ));
            }),
            (DeviceInfo.prototype.determineDevice_ = function (deviceParams) {
              if (!deviceParams)
                return Util.isIOS()
                  ? (console.warn("Using fallback iOS device measurements."),
                    DEFAULT_IOS)
                  : (console.warn(
                      "Using fallback Android device measurements."
                    ),
                    DEFAULT_ANDROID);
              var metersPerPixelX = 0.0254 / deviceParams.xdpi,
                metersPerPixelY = 0.0254 / deviceParams.ydpi;
              return new Device({
                widthMeters: metersPerPixelX * Util.getScreenWidth(),
                heightMeters: metersPerPixelY * Util.getScreenHeight(),
                bevelMeters: 0.001 * deviceParams.bevelMm,
              });
            }),
            (DeviceInfo.prototype.getDistortedFieldOfViewLeftEye = function () {
              var viewer = this.viewer,
                device = this.device,
                distortion = this.distortion,
                eyeToScreenDistance = viewer.screenLensDistance,
                outerDist = (device.widthMeters - viewer.interLensDistance) / 2,
                innerDist = viewer.interLensDistance / 2,
                bottomDist = viewer.baselineLensDistance - device.bevelMeters,
                topDist = device.heightMeters - bottomDist,
                outerAngle =
                  MathUtil.radToDeg *
                  Math.atan(
                    distortion.distort(outerDist / eyeToScreenDistance)
                  ),
                innerAngle =
                  MathUtil.radToDeg *
                  Math.atan(
                    distortion.distort(innerDist / eyeToScreenDistance)
                  ),
                bottomAngle =
                  MathUtil.radToDeg *
                  Math.atan(
                    distortion.distort(bottomDist / eyeToScreenDistance)
                  ),
                topAngle =
                  MathUtil.radToDeg *
                  Math.atan(distortion.distort(topDist / eyeToScreenDistance));
              return {
                leftDegrees: Math.min(outerAngle, viewer.fov),
                rightDegrees: Math.min(innerAngle, viewer.fov),
                downDegrees: Math.min(bottomAngle, viewer.fov),
                upDegrees: Math.min(topAngle, viewer.fov),
              };
            }),
            (DeviceInfo.prototype.getLeftEyeVisibleTanAngles = function () {
              var viewer = this.viewer,
                device = this.device,
                distortion = this.distortion,
                fovLeft = Math.tan(-MathUtil.degToRad * viewer.fov),
                fovTop = Math.tan(MathUtil.degToRad * viewer.fov),
                fovRight = Math.tan(MathUtil.degToRad * viewer.fov),
                fovBottom = Math.tan(-MathUtil.degToRad * viewer.fov),
                halfWidth = device.widthMeters / 4,
                halfHeight = device.heightMeters / 2,
                verticalLensOffset =
                  viewer.baselineLensDistance - device.bevelMeters - halfHeight,
                centerX = viewer.interLensDistance / 2 - halfWidth,
                centerY = -verticalLensOffset,
                centerZ = viewer.screenLensDistance,
                screenLeft = distortion.distort(
                  (centerX - halfWidth) / centerZ
                ),
                screenTop = distortion.distort(
                  (centerY + halfHeight) / centerZ
                ),
                screenRight = distortion.distort(
                  (centerX + halfWidth) / centerZ
                ),
                screenBottom = distortion.distort(
                  (centerY - halfHeight) / centerZ
                ),
                result = new Float32Array(4);
              return (
                (result[0] = Math.max(fovLeft, screenLeft)),
                (result[1] = Math.min(fovTop, screenTop)),
                (result[2] = Math.min(fovRight, screenRight)),
                (result[3] = Math.max(fovBottom, screenBottom)),
                result
              );
            }),
            (DeviceInfo.prototype.getLeftEyeNoLensTanAngles = function () {
              var viewer = this.viewer,
                device = this.device,
                distortion = this.distortion,
                result = new Float32Array(4),
                fovLeft = distortion.distortInverse(
                  Math.tan(-MathUtil.degToRad * viewer.fov)
                ),
                fovTop = distortion.distortInverse(
                  Math.tan(MathUtil.degToRad * viewer.fov)
                ),
                fovRight = distortion.distortInverse(
                  Math.tan(MathUtil.degToRad * viewer.fov)
                ),
                fovBottom = distortion.distortInverse(
                  Math.tan(-MathUtil.degToRad * viewer.fov)
                ),
                halfWidth = device.widthMeters / 4,
                halfHeight = device.heightMeters / 2,
                verticalLensOffset =
                  viewer.baselineLensDistance - device.bevelMeters - halfHeight,
                centerX = viewer.interLensDistance / 2 - halfWidth,
                centerY = -verticalLensOffset,
                centerZ = viewer.screenLensDistance,
                screenLeft = (centerX - halfWidth) / centerZ,
                screenTop = (centerY + halfHeight) / centerZ,
                screenRight = (centerX + halfWidth) / centerZ,
                screenBottom = (centerY - halfHeight) / centerZ;
              return (
                (result[0] = Math.max(fovLeft, screenLeft)),
                (result[1] = Math.min(fovTop, screenTop)),
                (result[2] = Math.min(fovRight, screenRight)),
                (result[3] = Math.max(fovBottom, screenBottom)),
                result
              );
            }),
            (DeviceInfo.prototype.getLeftEyeVisibleScreenRect = function (
              undistortedFrustum
            ) {
              var viewer = this.viewer,
                device = this.device,
                dist = viewer.screenLensDistance,
                eyeX = (device.widthMeters - viewer.interLensDistance) / 2,
                eyeY = viewer.baselineLensDistance - device.bevelMeters,
                left =
                  (undistortedFrustum[0] * dist + eyeX) / device.widthMeters,
                top =
                  (undistortedFrustum[1] * dist + eyeY) / device.heightMeters,
                right =
                  (undistortedFrustum[2] * dist + eyeX) / device.widthMeters,
                bottom =
                  (undistortedFrustum[3] * dist + eyeY) / device.heightMeters;
              return {
                x: left,
                y: bottom,
                width: right - left,
                height: top - bottom,
              };
            }),
            (DeviceInfo.prototype.getFieldOfViewLeftEye = function (
              opt_isUndistorted
            ) {
              return opt_isUndistorted
                ? this.getUndistortedFieldOfViewLeftEye()
                : this.getDistortedFieldOfViewLeftEye();
            }),
            (DeviceInfo.prototype.getFieldOfViewRightEye = function (
              opt_isUndistorted
            ) {
              var fov = this.getFieldOfViewLeftEye(opt_isUndistorted);
              return {
                leftDegrees: fov.rightDegrees,
                rightDegrees: fov.leftDegrees,
                upDegrees: fov.upDegrees,
                downDegrees: fov.downDegrees,
              };
            }),
            (DeviceInfo.prototype.getUndistortedFieldOfViewLeftEye =
              function () {
                var p = this.getUndistortedParams_();
                return {
                  leftDegrees: MathUtil.radToDeg * Math.atan(p.outerDist),
                  rightDegrees: MathUtil.radToDeg * Math.atan(p.innerDist),
                  downDegrees: MathUtil.radToDeg * Math.atan(p.bottomDist),
                  upDegrees: MathUtil.radToDeg * Math.atan(p.topDist),
                };
              }),
            (DeviceInfo.prototype.getUndistortedViewportLeftEye = function () {
              var p = this.getUndistortedParams_(),
                viewer = this.viewer,
                device = this.device,
                eyeToScreenDistance = viewer.screenLensDistance,
                screenWidth = device.widthMeters / eyeToScreenDistance,
                screenHeight = device.heightMeters / eyeToScreenDistance,
                xPxPerTanAngle = device.width / screenWidth,
                yPxPerTanAngle = device.height / screenHeight,
                x = Math.round((p.eyePosX - p.outerDist) * xPxPerTanAngle),
                y = Math.round((p.eyePosY - p.bottomDist) * yPxPerTanAngle);
              return {
                x: x,
                y: y,
                width:
                  Math.round((p.eyePosX + p.innerDist) * xPxPerTanAngle) - x,
                height:
                  Math.round((p.eyePosY + p.topDist) * yPxPerTanAngle) - y,
              };
            }),
            (DeviceInfo.prototype.getUndistortedParams_ = function () {
              var viewer = this.viewer,
                device = this.device,
                distortion = this.distortion,
                eyeToScreenDistance = viewer.screenLensDistance,
                halfLensDistance =
                  viewer.interLensDistance / 2 / eyeToScreenDistance,
                screenWidth = device.widthMeters / eyeToScreenDistance,
                screenHeight = device.heightMeters / eyeToScreenDistance,
                eyePosX = screenWidth / 2 - halfLensDistance,
                eyePosY =
                  (viewer.baselineLensDistance - device.bevelMeters) /
                  eyeToScreenDistance,
                maxFov = viewer.fov,
                viewerMax = distortion.distortInverse(
                  Math.tan(MathUtil.degToRad * maxFov)
                ),
                outerDist = Math.min(eyePosX, viewerMax),
                innerDist = Math.min(halfLensDistance, viewerMax),
                bottomDist = Math.min(eyePosY, viewerMax);
              return {
                outerDist: outerDist,
                innerDist: innerDist,
                topDist: Math.min(screenHeight - eyePosY, viewerMax),
                bottomDist: bottomDist,
                eyePosX: eyePosX,
                eyePosY: eyePosY,
              };
            }),
            (DeviceInfo.Viewers = Viewers),
            (module.exports = DeviceInfo);
        },
        {
          "./distortion/distortion.js": 10,
          "./math-util.js": 14,
          "./util.js": 21,
        },
      ],
      9: [
        function (_dereq_, module, exports) {
          _dereq_("./base.js").VRDisplay;
          var HMDVRDevice = _dereq_("./base.js").HMDVRDevice,
            PositionSensorVRDevice =
              _dereq_("./base.js").PositionSensorVRDevice;
          function VRDisplayHMDDevice(display) {
            (this.display = display),
              (this.hardwareUnitId = display.displayId),
              (this.deviceId = "webvr-polyfill:HMD:" + display.displayId),
              (this.deviceName = display.displayName + " (HMD)");
          }
          function VRDisplayPositionSensorDevice(display) {
            (this.display = display),
              (this.hardwareUnitId = display.displayId),
              (this.deviceId =
                "webvr-polyfill:PositionSensor: " + display.displayId),
              (this.deviceName = display.displayName + " (PositionSensor)");
          }
          ((VRDisplayHMDDevice.prototype = new HMDVRDevice()).getEyeParameters =
            function (whichEye) {
              var eyeParameters = this.display.getEyeParameters(whichEye);
              return {
                currentFieldOfView: eyeParameters.fieldOfView,
                maximumFieldOfView: eyeParameters.fieldOfView,
                minimumFieldOfView: eyeParameters.fieldOfView,
                recommendedFieldOfView: eyeParameters.fieldOfView,
                eyeTranslation: {
                  x: eyeParameters.offset[0],
                  y: eyeParameters.offset[1],
                  z: eyeParameters.offset[2],
                },
                renderRect: {
                  x: "right" == whichEye ? eyeParameters.renderWidth : 0,
                  y: 0,
                  width: eyeParameters.renderWidth,
                  height: eyeParameters.renderHeight,
                },
              };
            }),
            (VRDisplayHMDDevice.prototype.setFieldOfView = function (
              opt_fovLeft,
              opt_fovRight,
              opt_zNear,
              opt_zFar
            ) {}),
            ((VRDisplayPositionSensorDevice.prototype =
              new PositionSensorVRDevice()).getState = function () {
              var pose = this.display.getPose();
              return {
                position: pose.position
                  ? {
                      x: pose.position[0],
                      y: pose.position[1],
                      z: pose.position[2],
                    }
                  : null,
                orientation: pose.orientation
                  ? {
                      x: pose.orientation[0],
                      y: pose.orientation[1],
                      z: pose.orientation[2],
                      w: pose.orientation[3],
                    }
                  : null,
                linearVelocity: null,
                linearAcceleration: null,
                angularVelocity: null,
                angularAcceleration: null,
              };
            }),
            (VRDisplayPositionSensorDevice.prototype.resetState = function () {
              return this.positionDevice.resetPose();
            }),
            (module.exports.VRDisplayHMDDevice = VRDisplayHMDDevice),
            (module.exports.VRDisplayPositionSensorDevice =
              VRDisplayPositionSensorDevice);
        },
        { "./base.js": 3 },
      ],
      10: [
        function (_dereq_, module, exports) {
          function Distortion(coefficients) {
            this.coefficients = coefficients;
          }
          (Distortion.prototype.distortInverse = function (radius) {
            for (
              var r0 = 0, r1 = 1, dr0 = radius - this.distort(r0);
              1e-4 < Math.abs(r1 - r0);

            ) {
              var dr1 = radius - this.distort(r1),
                r2 = r1 - ((r1 - r0) / (dr1 - dr0)) * dr1;
              (r0 = r1), (r1 = r2), (dr0 = dr1);
            }
            return r1;
          }),
            (Distortion.prototype.distort = function (radius) {
              for (
                var r2 = radius * radius, ret = 0, i = 0;
                i < this.coefficients.length;
                i++
              )
                ret = r2 * (ret + this.coefficients[i]);
              return (ret + 1) * radius;
            }),
            (Distortion.prototype.solveLinear_ = function (a, y) {
              for (var n = a.length, j = 0; j < n - 1; ++j)
                for (var k = j + 1; k < n; ++k) {
                  for (var p = a[j][k] / a[j][j], i = j + 1; i < n; ++i)
                    a[i][k] -= p * a[i][j];
                  y[k] -= p * y[j];
                }
              var x = new Array(n);
              for (j = n - 1; 0 <= j; --j) {
                var v = y[j];
                for (i = j + 1; i < n; ++i) v -= a[i][j] * x[i];
                x[j] = v / a[j][j];
              }
              return x;
            }),
            (Distortion.prototype.solveLeastSquares_ = function (matA, vecY) {
              var i,
                j,
                k,
                sum,
                numSamples = matA.length,
                numCoefficients = matA[0].length;
              if (numSamples != vecY.Length)
                throw new Error("Matrix / vector dimension mismatch");
              var matATA = new Array(numCoefficients);
              for (k = 0; k < numCoefficients; ++k)
                for (
                  matATA[k] = new Array(numCoefficients), j = 0;
                  j < numCoefficients;
                  ++j
                ) {
                  for (i = sum = 0; i < numSamples; ++i)
                    sum += matA[j][i] * matA[k][i];
                  matATA[k][j] = sum;
                }
              var vecATY = new Array(numCoefficients);
              for (j = 0; j < numCoefficients; ++j) {
                for (i = sum = 0; i < numSamples; ++i)
                  sum += matA[j][i] * vecY[i];
                vecATY[j] = sum;
              }
              return this.solveLinear_(matATA, vecATY);
            }),
            (Distortion.prototype.approximateInverse = function (
              maxRadius,
              numSamples
            ) {
              (maxRadius = maxRadius || 1), (numSamples = numSamples || 100);
              var i,
                j,
                matA = new Array(6);
              for (j = 0; j < 6; ++j) matA[j] = new Array(numSamples);
              var vecY = new Array(numSamples);
              for (i = 0; i < numSamples; ++i) {
                var r = (maxRadius * (i + 1)) / numSamples,
                  rp = this.distort(r),
                  v = rp;
                for (j = 0; j < 6; ++j) (v *= rp * rp), (matA[j][i] = v);
                vecY[i] = r - rp;
              }
              return new Distortion(this.solveLeastSquares_(matA, vecY));
            }),
            (module.exports = Distortion);
        },
        {},
      ],
      11: [
        function (_dereq_, module, exports) {
          module.exports = {
            format: 1,
            last_updated: "2019-03-11T12:00:00Z",
            devices: [
              {
                type: "android",
                rules: [{ ua: "SM-G970", res: [2280, 1080] }],
                dpi: 438,
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G970", res: [1520, 720] }],
                dpi: 292,
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G973", res: [3040, 1440] }],
                dpi: 550,
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G973", res: [2280, 1080] }],
                dpi: 412.15,
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G973", res: [1520, 720] }],
                dpi: 275,
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G975", res: [3040, 1440] }],
                dpi: 550,
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G975", res: [2280, 1080] }],
                dpi: 412.15,
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G975", res: [1520, 720] }],
                dpi: 275,
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G977", res: [3040, 1440] }],
                dpi: 550,
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G977", res: [2280, 1080] }],
                dpi: 412.15,
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G977", res: [1520, 720] }],
                dpi: 275,
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-N960", res: [2960, 1440] }],
                dpi: 516,
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-N960", res: [2220, 1080] }],
                dpi: 387,
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-N960", res: [1480, 720] }],
                dpi: 258,
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G960", res: [2960, 1440] }],
                dpi: [562.707, 565.293],
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G960", res: [2220, 1080] }],
                dpi: [422.03, 423.969],
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G960", res: [1480, 720] }],
                dpi: [281.353, 282.646],
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G965", res: [2960, 1440] }],
                dpi: [522.514, 525.762],
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G965", res: [2220, 1080] }],
                dpi: [391.885, 394.321],
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G965", res: [1480, 720] }],
                dpi: [261.257, 262.881],
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G950", res: [2960, 1440] }],
                dpi: [562.707, 565.293],
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G950", res: [2220, 1080] }],
                dpi: [422.03, 423.969],
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G950", res: [1480, 720] }],
                dpi: [281.353, 282.646],
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G955", res: [2960, 1440] }],
                dpi: [522.514, 525.762],
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G955", res: [2220, 1080] }],
                dpi: [391.885, 394.321],
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-G955", res: [1480, 720] }],
                dpi: [261.257, 262.881],
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-N950", res: [2960, 1440] }],
                dpi: [522.49, 522.49],
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-N950", res: [2220, 1080] }],
                dpi: [391.867, 391.867],
                bw: 3,
                ac: 500,
              },
              {
                type: "android",
                rules: [{ ua: "SM-N950", res: [1480, 720] }],
                dpi: [261.245, 261.245],
                bw: 3,
                ac: 500,
              },
              {
                type: "ios",
                rules: [{ res: [640, 960] }],
                dpi: [325.1, 328.4],
                bw: 4,
                ac: 1e3,
              },
              {
                type: "ios",
                rules: [{ res: [640, 1136] }],
                dpi: [317.1, 320.2],
                bw: 3,
                ac: 1e3,
              },
              {
                type: "ios",
                rules: [{ res: [750, 1334] }],
                dpi: 326.4,
                bw: 4,
                ac: 1e3,
              },
              {
                type: "ios",
                rules: [{ res: [828, 1792] }],
                dpi: 326,
                bw: 4,
                ac: 1e3,
              },
              {
                type: "ios",
                rules: [{ res: [1242, 2208] }],
                dpi: [453.6, 458.4],
                bw: 4,
                ac: 1e3,
              },
              {
                type: "ios",
                rules: [{ res: [1125, 2001] }],
                dpi: [410.9, 415.4],
                bw: 4,
                ac: 1e3,
              },
              {
                type: "ios",
                rules: [{ res: [1125, 2436] }],
                dpi: 458,
                bw: 4,
                ac: 1e3,
              },
              {
                type: "ios",
                rules: [{ res: [1242, 2688] }],
                dpi: 458,
                bw: 4,
                ac: 1e3,
              },
              {
                type: "ios",
                rules: [{ res: [1125, 2436] }],
                dpi: 498,
                bw: 4,
                ac: 1e3,
              },
              {
                type: "ios",
                rules: [{ res: [1080, 2340] }],
                dpi: 476,
                bw: 4,
                ac: 1e3,
              },
              {
                type: "ios",
                rules: [{ res: [1170, 2532] }],
                dpi: 458,
                bw: 4,
                ac: 1e3,
              },
              {
                type: "ios",
                rules: [{ res: [1284, 2778] }],
                dpi: 458,
                bw: 4,
                ac: 1e3,
              },
            ],
          };
        },
        {},
      ],
      12: [
        function (_dereq_, module, exports) {
          var DPDB_CACHE = _dereq_("./dpdb-cache.js"),
            Util = _dereq_("../util.js");
          function Dpdb(fetchOnline, onDeviceParamsUpdated) {
            if (
              ((this.dpdb = DPDB_CACHE),
              this.recalculateDeviceParams_(),
              fetchOnline)
            ) {
              this.onDeviceParamsUpdated = onDeviceParamsUpdated;
              var xhr = new XMLHttpRequest(),
                obj = this;
              xhr.open("GET", "https://dpdb.webvr.rocks/dpdb.json", !0),
                xhr.addEventListener("load", function () {
                  (obj.loading = !1),
                    200 <= xhr.status && xhr.status <= 299
                      ? ((obj.dpdb = JSON.parse(xhr.response)),
                        obj.recalculateDeviceParams_())
                      : console.error("Error loading online DPDB!");
                }),
                xhr.send();
            }
          }
          function DeviceParams(params) {
            (this.xdpi = params.xdpi),
              (this.ydpi = params.ydpi),
              (this.bevelMm = params.bevelMm);
          }
          (Dpdb.prototype.getDeviceParams = function () {
            return this.deviceParams;
          }),
            (Dpdb.prototype.recalculateDeviceParams_ = function () {
              var newDeviceParams = this.calcDeviceParams_();
              newDeviceParams
                ? ((this.deviceParams = newDeviceParams),
                  this.onDeviceParamsUpdated &&
                    this.onDeviceParamsUpdated(this.deviceParams))
                : console.error("Failed to recalculate device parameters.");
            }),
            (Dpdb.prototype.calcDeviceParams_ = function () {
              var db = this.dpdb;
              if (!db) return console.error("DPDB not available."), null;
              if (1 != db.format)
                return (
                  console.error("DPDB has unexpected format version."), null
                );
              if (!db.devices || !db.devices.length)
                return (
                  console.error("DPDB does not have a devices section."), null
                );
              var userAgent =
                  navigator.userAgent || navigator.vendor || window.opera,
                scaleFactor = Util.isSafariWebView() ? 0.90625 : 1,
                width = Math.round(Util.getScreenWidth() / scaleFactor),
                height = Math.round(Util.getScreenHeight() / scaleFactor);
              if (!db.devices)
                return console.error("DPDB has no devices section."), null;
              for (var i = 0; i < db.devices.length; i++) {
                var device = db.devices[i];
                if (device.rules)
                  if ("ios" == device.type || "android" == device.type) {
                    if (Util.isIOS() == ("ios" == device.type)) {
                      for (
                        var matched = !1, j = 0;
                        j < device.rules.length;
                        j++
                      ) {
                        var rule = device.rules[j];
                        if (this.matchRule_(rule, userAgent, width, height)) {
                          matched = !0;
                          break;
                        }
                      }
                      if (matched)
                        return new DeviceParams({
                          xdpi: (device.dpi[0] || device.dpi) * scaleFactor,
                          ydpi: (device.dpi[1] || device.dpi) * scaleFactor,
                          bevelMm: device.bw,
                        });
                    }
                  } else console.warn("Device[" + i + "] has invalid type.");
                else console.warn("Device[" + i + "] has no rules section.");
              }
              return console.warn("No DPDB device match."), null;
            }),
            (Dpdb.prototype.matchRule_ = function (
              rule,
              ua,
              screenWidth,
              screenHeight
            ) {
              if (!rule.ua && !rule.res) return !1;
              if (rule.ua && ua.indexOf(rule.ua) < 0) return !1;
              if (rule.res) {
                if (!rule.res[0] || !rule.res[1]) return !1;
                var resX = rule.res[0],
                  resY = rule.res[1];
                if (
                  Math.abs(
                    Math.min(screenWidth, screenHeight) - Math.min(resX, resY)
                  ) > window.devicePixelRatio
                )
                  return !1;
                if (
                  Math.abs(
                    Math.max(screenWidth, screenHeight) - Math.max(resX, resY)
                  ) > window.devicePixelRatio
                )
                  return !1;
              }
              return !0;
            }),
            (module.exports = Dpdb);
        },
        { "../util.js": 21, "./dpdb-cache.js": 11 },
      ],
      13: [
        function (_dereq_, module, exports) {
          var Util = _dereq_("./util.js"),
            WebVRPolyfill = _dereq_("./webvr-polyfill.js").WebVRPolyfill;
          (window.WebVRConfig = Util.extend(
            {
              FORCE_ENABLE_VR: !1,
              K_FILTER: 0.98,
              PREDICTION_TIME_S: 0.04,
              TOUCH_PANNER_DISABLED: !0,
              CARDBOARD_UI_DISABLED: !1,
              ROTATE_INSTRUCTIONS_DISABLED: !1,
              YAW_ONLY: !1,
              MOUSE_KEYBOARD_CONTROLS_DISABLED: !1,
              DEFER_INITIALIZATION: !1,
              ENABLE_DEPRECATED_API: !1,
              BUFFER_SCALE: 0.5,
              DIRTY_SUBMIT_FRAME_BINDINGS: !1,
              ALWAYS_APPEND_POLYFILL_DISPLAY: !1,
            },
            window.WebVRConfig
          )),
            window.WebVRConfig.DEFER_INITIALIZATION
              ? (window.InitializeWebVRPolyfill = function () {
                  new WebVRPolyfill();
                })
              : new WebVRPolyfill();
        },
        { "./util.js": 21, "./webvr-polyfill.js": 23 },
      ],
      14: [
        function (_dereq_, module, exports) {
          var v1,
            r,
            MathUtil = window.MathUtil || {};
          (MathUtil.degToRad = Math.PI / 180),
            (MathUtil.radToDeg = 180 / Math.PI),
            (MathUtil.Vector2 = function (x, y) {
              (this.x = x || 0), (this.y = y || 0);
            }),
            (MathUtil.Vector2.prototype = {
              constructor: MathUtil.Vector2,
              set: function (x, y) {
                return (this.x = x), (this.y = y), this;
              },
              copy: function (v) {
                return (this.x = v.x), (this.y = v.y), this;
              },
              subVectors: function (a, b) {
                return (this.x = a.x - b.x), (this.y = a.y - b.y), this;
              },
            }),
            (MathUtil.Vector3 = function (x, y, z) {
              (this.x = x || 0), (this.y = y || 0), (this.z = z || 0);
            }),
            (MathUtil.Vector3.prototype = {
              constructor: MathUtil.Vector3,
              set: function (x, y, z) {
                return (this.x = x), (this.y = y), (this.z = z), this;
              },
              copy: function (v) {
                return (this.x = v.x), (this.y = v.y), (this.z = v.z), this;
              },
              length: function () {
                return Math.sqrt(
                  this.x * this.x + this.y * this.y + this.z * this.z
                );
              },
              normalize: function () {
                var scalar = this.length();
                if (0 !== scalar) {
                  var invScalar = 1 / scalar;
                  this.multiplyScalar(invScalar);
                } else (this.x = 0), (this.y = 0), (this.z = 0);
                return this;
              },
              multiplyScalar: function (scalar) {
                (this.x *= scalar), (this.y *= scalar), (this.z *= scalar);
              },
              applyQuaternion: function (q) {
                var x = this.x,
                  y = this.y,
                  z = this.z,
                  qx = q.x,
                  qy = q.y,
                  qz = q.z,
                  qw = q.w,
                  ix = qw * x + qy * z - qz * y,
                  iy = qw * y + qz * x - qx * z,
                  iz = qw * z + qx * y - qy * x,
                  iw = -qx * x - qy * y - qz * z;
                return (
                  (this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy),
                  (this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz),
                  (this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx),
                  this
                );
              },
              dot: function (v) {
                return this.x * v.x + this.y * v.y + this.z * v.z;
              },
              crossVectors: function (a, b) {
                var ax = a.x,
                  ay = a.y,
                  az = a.z,
                  bx = b.x,
                  by = b.y,
                  bz = b.z;
                return (
                  (this.x = ay * bz - az * by),
                  (this.y = az * bx - ax * bz),
                  (this.z = ax * by - ay * bx),
                  this
                );
              },
            }),
            (MathUtil.Quaternion = function (x, y, z, w) {
              (this.x = x || 0),
                (this.y = y || 0),
                (this.z = z || 0),
                (this.w = void 0 !== w ? w : 1);
            }),
            (MathUtil.Quaternion.prototype = {
              constructor: MathUtil.Quaternion,
              set: function (x, y, z, w) {
                return (
                  (this.x = x), (this.y = y), (this.z = z), (this.w = w), this
                );
              },
              copy: function (quaternion) {
                return (
                  (this.x = quaternion.x),
                  (this.y = quaternion.y),
                  (this.z = quaternion.z),
                  (this.w = quaternion.w),
                  this
                );
              },
              setFromEulerXYZ: function (x, y, z) {
                var c1 = Math.cos(x / 2),
                  c2 = Math.cos(y / 2),
                  c3 = Math.cos(z / 2),
                  s1 = Math.sin(x / 2),
                  s2 = Math.sin(y / 2),
                  s3 = Math.sin(z / 2);
                return (
                  (this.x = s1 * c2 * c3 + c1 * s2 * s3),
                  (this.y = c1 * s2 * c3 - s1 * c2 * s3),
                  (this.z = c1 * c2 * s3 + s1 * s2 * c3),
                  (this.w = c1 * c2 * c3 - s1 * s2 * s3),
                  this
                );
              },
              setFromEulerYXZ: function (x, y, z) {
                var c1 = Math.cos(x / 2),
                  c2 = Math.cos(y / 2),
                  c3 = Math.cos(z / 2),
                  s1 = Math.sin(x / 2),
                  s2 = Math.sin(y / 2),
                  s3 = Math.sin(z / 2);
                return (
                  (this.x = s1 * c2 * c3 + c1 * s2 * s3),
                  (this.y = c1 * s2 * c3 - s1 * c2 * s3),
                  (this.z = c1 * c2 * s3 - s1 * s2 * c3),
                  (this.w = c1 * c2 * c3 + s1 * s2 * s3),
                  this
                );
              },
              setFromAxisAngle: function (axis, angle) {
                var halfAngle = angle / 2,
                  s = Math.sin(halfAngle);
                return (
                  (this.x = axis.x * s),
                  (this.y = axis.y * s),
                  (this.z = axis.z * s),
                  (this.w = Math.cos(halfAngle)),
                  this
                );
              },
              multiply: function (q) {
                return this.multiplyQuaternions(this, q);
              },
              multiplyQuaternions: function (a, b) {
                var qax = a.x,
                  qay = a.y,
                  qaz = a.z,
                  qaw = a.w,
                  qbx = b.x,
                  qby = b.y,
                  qbz = b.z,
                  qbw = b.w;
                return (
                  (this.x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby),
                  (this.y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz),
                  (this.z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx),
                  (this.w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz),
                  this
                );
              },
              inverse: function () {
                return (
                  (this.x *= -1),
                  (this.y *= -1),
                  (this.z *= -1),
                  this.normalize(),
                  this
                );
              },
              normalize: function () {
                var l = Math.sqrt(
                  this.x * this.x +
                    this.y * this.y +
                    this.z * this.z +
                    this.w * this.w
                );
                return (
                  0 === l
                    ? ((this.x = 0), (this.y = 0), (this.z = 0), (this.w = 1))
                    : ((l = 1 / l),
                      (this.x = this.x * l),
                      (this.y = this.y * l),
                      (this.z = this.z * l),
                      (this.w = this.w * l)),
                  this
                );
              },
              slerp: function (qb, t) {
                if (0 === t) return this;
                if (1 === t) return this.copy(qb);
                var x = this.x,
                  y = this.y,
                  z = this.z,
                  w = this.w,
                  cosHalfTheta = w * qb.w + x * qb.x + y * qb.y + z * qb.z;
                if (
                  (cosHalfTheta < 0
                    ? ((this.w = -qb.w),
                      (this.x = -qb.x),
                      (this.y = -qb.y),
                      (this.z = -qb.z),
                      (cosHalfTheta = -cosHalfTheta))
                    : this.copy(qb),
                  1 <= cosHalfTheta)
                )
                  return (
                    (this.w = w), (this.x = x), (this.y = y), (this.z = z), this
                  );
                var halfTheta = Math.acos(cosHalfTheta),
                  sinHalfTheta = Math.sqrt(1 - cosHalfTheta * cosHalfTheta);
                if (Math.abs(sinHalfTheta) < 0.001)
                  return (
                    (this.w = 0.5 * (w + this.w)),
                    (this.x = 0.5 * (x + this.x)),
                    (this.y = 0.5 * (y + this.y)),
                    (this.z = 0.5 * (z + this.z)),
                    this
                  );
                var ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta,
                  ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
                return (
                  (this.w = w * ratioA + this.w * ratioB),
                  (this.x = x * ratioA + this.x * ratioB),
                  (this.y = y * ratioA + this.y * ratioB),
                  (this.z = z * ratioA + this.z * ratioB),
                  this
                );
              },
              setFromUnitVectors: function (vFrom, vTo) {
                return (
                  void 0 === v1 && (v1 = new MathUtil.Vector3()),
                  (r = vFrom.dot(vTo) + 1) < 1e-6
                    ? ((r = 0),
                      Math.abs(vFrom.x) > Math.abs(vFrom.z)
                        ? v1.set(-vFrom.y, vFrom.x, 0)
                        : v1.set(0, -vFrom.z, vFrom.y))
                    : v1.crossVectors(vFrom, vTo),
                  (this.x = v1.x),
                  (this.y = v1.y),
                  (this.z = v1.z),
                  (this.w = r),
                  this.normalize(),
                  this
                );
              },
            }),
            (module.exports = MathUtil);
        },
        {},
      ],
      15: [
        function (_dereq_, module, exports) {
          var VRDisplay = _dereq_("./base.js").VRDisplay,
            MathUtil = _dereq_("./math-util.js"),
            Util = _dereq_("./util.js");
          function MouseKeyboardVRDisplay() {
            (this.displayName =
              "Mouse and Keyboard VRDisplay (webvr-polyfill)"),
              (this.capabilities.hasOrientation = !0),
              window.addEventListener("keydown", this.onKeyDown_.bind(this)),
              window.addEventListener(
                "mousemove",
                this.onMouseMove_.bind(this)
              ),
              window.addEventListener(
                "mousedown",
                this.onMouseDown_.bind(this)
              ),
              window.addEventListener("mouseup", this.onMouseUp_.bind(this)),
              (this.phi_ = 0),
              (this.theta_ = 0),
              (this.targetAngle_ = null),
              (this.angleAnimation_ = null),
              (this.orientation_ = new MathUtil.Quaternion()),
              (this.rotateStart_ = new MathUtil.Vector2()),
              (this.rotateEnd_ = new MathUtil.Vector2()),
              (this.rotateDelta_ = new MathUtil.Vector2()),
              (this.isDragging_ = !1),
              (this.orientationOut_ = new Float32Array(4));
          }
          ((MouseKeyboardVRDisplay.prototype =
            new VRDisplay()).getImmediatePose = function () {
            return (
              this.orientation_.setFromEulerYXZ(this.phi_, this.theta_, 0),
              (this.orientationOut_[0] = this.orientation_.x),
              (this.orientationOut_[1] = this.orientation_.y),
              (this.orientationOut_[2] = this.orientation_.z),
              (this.orientationOut_[3] = this.orientation_.w),
              {
                position: null,
                orientation: this.orientationOut_,
                linearVelocity: null,
                linearAcceleration: null,
                angularVelocity: null,
                angularAcceleration: null,
              }
            );
          }),
            (MouseKeyboardVRDisplay.prototype.onKeyDown_ = function (e) {
              38 == e.keyCode
                ? this.animatePhi_(this.phi_ + 0.15)
                : 39 == e.keyCode
                ? this.animateTheta_(this.theta_ - 0.15)
                : 40 == e.keyCode
                ? this.animatePhi_(this.phi_ - 0.15)
                : 37 == e.keyCode && this.animateTheta_(this.theta_ + 0.15);
            }),
            (MouseKeyboardVRDisplay.prototype.animateTheta_ = function (
              targetAngle
            ) {
              this.animateKeyTransitions_("theta_", targetAngle);
            }),
            (MouseKeyboardVRDisplay.prototype.animatePhi_ = function (
              targetAngle
            ) {
              (targetAngle = Util.clamp(
                targetAngle,
                -Math.PI / 2,
                Math.PI / 2
              )),
                this.animateKeyTransitions_("phi_", targetAngle);
            }),
            (MouseKeyboardVRDisplay.prototype.animateKeyTransitions_ =
              function (angleName, targetAngle) {
                this.angleAnimation_ &&
                  cancelAnimationFrame(this.angleAnimation_);
                var startAngle = this[angleName],
                  startTime = new Date();
                this.angleAnimation_ = requestAnimationFrame(
                  function animate() {
                    var elapsed = new Date() - startTime;
                    if (80 <= elapsed)
                      return (
                        (this[angleName] = targetAngle),
                        void cancelAnimationFrame(this.angleAnimation_)
                      );
                    this.angleAnimation_ = requestAnimationFrame(
                      animate.bind(this)
                    );
                    var percent = elapsed / 80;
                    this[angleName] =
                      startAngle + (targetAngle - startAngle) * percent;
                  }.bind(this)
                );
              }),
            (MouseKeyboardVRDisplay.prototype.onMouseDown_ = function (e) {
              this.rotateStart_.set(e.clientX, e.clientY),
                (this.isDragging_ = !0);
            }),
            (MouseKeyboardVRDisplay.prototype.onMouseMove_ = function (e) {
              if (this.isDragging_ || this.isPointerLocked_()) {
                if (this.isPointerLocked_()) {
                  var movementX = e.movementX || e.mozMovementX || 0,
                    movementY = e.movementY || e.mozMovementY || 0;
                  this.rotateEnd_.set(
                    this.rotateStart_.x - movementX,
                    this.rotateStart_.y - movementY
                  );
                } else this.rotateEnd_.set(e.clientX, e.clientY);
                this.rotateDelta_.subVectors(
                  this.rotateEnd_,
                  this.rotateStart_
                ),
                  this.rotateStart_.copy(this.rotateEnd_),
                  (this.phi_ +=
                    ((2 * Math.PI * this.rotateDelta_.y) / screen.height) *
                    0.3),
                  (this.theta_ +=
                    ((2 * Math.PI * this.rotateDelta_.x) / screen.width) * 0.5),
                  (this.phi_ = Util.clamp(
                    this.phi_,
                    -Math.PI / 2,
                    Math.PI / 2
                  ));
              }
            }),
            (MouseKeyboardVRDisplay.prototype.onMouseUp_ = function (e) {
              this.isDragging_ = !1;
            }),
            (MouseKeyboardVRDisplay.prototype.isPointerLocked_ = function () {
              return (
                void 0 !==
                (document.pointerLockElement ||
                  document.mozPointerLockElement ||
                  document.webkitPointerLockElement)
              );
            }),
            (MouseKeyboardVRDisplay.prototype.resetPose = function () {
              (this.phi_ = 0), (this.theta_ = 0);
            }),
            (module.exports = MouseKeyboardVRDisplay);
        },
        { "./base.js": 3, "./math-util.js": 14, "./util.js": 21 },
      ],
      16: [
        function (_dereq_, module, exports) {
          var SensorSample = _dereq_("./sensor-sample.js"),
            MathUtil = _dereq_("../math-util.js"),
            Util = _dereq_("../util.js");
          function ComplementaryFilter(kFilter) {
            (this.kFilter = kFilter),
              (this.currentAccelMeasurement = new SensorSample()),
              (this.currentGyroMeasurement = new SensorSample()),
              (this.previousGyroMeasurement = new SensorSample()),
              Util.isIOS()
                ? (this.filterQ = new MathUtil.Quaternion(-1, 0, 0, 1))
                : (this.filterQ = new MathUtil.Quaternion(1, 0, 0, 1)),
              (this.previousFilterQ = new MathUtil.Quaternion()),
              this.previousFilterQ.copy(this.filterQ),
              (this.accelQ = new MathUtil.Quaternion()),
              (this.isOrientationInitialized = !1),
              (this.estimatedGravity = new MathUtil.Vector3()),
              (this.measuredGravity = new MathUtil.Vector3()),
              (this.gyroIntegralQ = new MathUtil.Quaternion());
          }
          (ComplementaryFilter.prototype.addAccelMeasurement = function (
            vector,
            timestampS
          ) {
            this.currentAccelMeasurement.set(vector, timestampS);
          }),
            (ComplementaryFilter.prototype.addGyroMeasurement = function (
              vector,
              timestampS
            ) {
              this.currentGyroMeasurement.set(vector, timestampS);
              var deltaT = timestampS - this.previousGyroMeasurement.timestampS;
              Util.isTimestampDeltaValid(deltaT) && this.run_(),
                this.previousGyroMeasurement.copy(this.currentGyroMeasurement);
            }),
            (ComplementaryFilter.prototype.run_ = function () {
              if (!this.isOrientationInitialized)
                return (
                  (this.accelQ = this.accelToQuaternion_(
                    this.currentAccelMeasurement.sample
                  )),
                  this.previousFilterQ.copy(this.accelQ),
                  void (this.isOrientationInitialized = !0)
                );
              var deltaT =
                  this.currentGyroMeasurement.timestampS -
                  this.previousGyroMeasurement.timestampS,
                gyroDeltaQ = this.gyroToQuaternionDelta_(
                  this.currentGyroMeasurement.sample,
                  deltaT
                );
              this.gyroIntegralQ.multiply(gyroDeltaQ),
                this.filterQ.copy(this.previousFilterQ),
                this.filterQ.multiply(gyroDeltaQ);
              var invFilterQ = new MathUtil.Quaternion();
              invFilterQ.copy(this.filterQ),
                invFilterQ.inverse(),
                this.estimatedGravity.set(0, 0, -1),
                this.estimatedGravity.applyQuaternion(invFilterQ),
                this.estimatedGravity.normalize(),
                this.measuredGravity.copy(this.currentAccelMeasurement.sample),
                this.measuredGravity.normalize();
              var deltaQ = new MathUtil.Quaternion();
              deltaQ.setFromUnitVectors(
                this.estimatedGravity,
                this.measuredGravity
              ),
                deltaQ.inverse();
              var targetQ = new MathUtil.Quaternion();
              targetQ.copy(this.filterQ),
                targetQ.multiply(deltaQ),
                this.filterQ.slerp(targetQ, 1 - this.kFilter),
                this.previousFilterQ.copy(this.filterQ);
            }),
            (ComplementaryFilter.prototype.getOrientation = function () {
              return this.filterQ;
            }),
            (ComplementaryFilter.prototype.accelToQuaternion_ = function (
              accel
            ) {
              var normAccel = new MathUtil.Vector3();
              normAccel.copy(accel), normAccel.normalize();
              var quat = new MathUtil.Quaternion();
              return (
                quat.setFromUnitVectors(
                  new MathUtil.Vector3(0, 0, -1),
                  normAccel
                ),
                quat.inverse(),
                quat
              );
            }),
            (ComplementaryFilter.prototype.gyroToQuaternionDelta_ = function (
              gyro,
              dt
            ) {
              var quat = new MathUtil.Quaternion(),
                axis = new MathUtil.Vector3();
              return (
                axis.copy(gyro),
                axis.normalize(),
                quat.setFromAxisAngle(axis, gyro.length() * dt),
                quat
              );
            }),
            (module.exports = ComplementaryFilter);
        },
        { "../math-util.js": 14, "../util.js": 21, "./sensor-sample.js": 19 },
      ],
      17: [
        function (_dereq_, module, exports) {
          var ComplementaryFilter = _dereq_("./complementary-filter.js"),
            PosePredictor = _dereq_("./pose-predictor.js"),
            TouchPanner = _dereq_("../touch-panner.js"),
            MathUtil = _dereq_("../math-util.js"),
            Util = _dereq_("../util.js");
          function FusionPoseSensor() {
            (this.deviceId = "webvr-polyfill:fused"),
              (this.deviceName = "VR Position Device (webvr-polyfill:fused)"),
              (this.accelerometer = new MathUtil.Vector3()),
              (this.gyroscope = new MathUtil.Vector3()),
              (this.filter = new ComplementaryFilter(WebVRConfig.K_FILTER)),
              (this.posePredictor = new PosePredictor(
                WebVRConfig.PREDICTION_TIME_S
              )),
              (this.touchPanner = new TouchPanner()),
              (this.isFirefoxAndroid = Util.isFirefoxAndroid()),
              (this.isIOS = Util.isIOS());
            var chromeVersion = Util.getChromeVersion();
            (this.isDeviceMotionInRadians =
              !this.isIOS && chromeVersion && chromeVersion < 66),
              (this.isWithoutDeviceMotion = Util.isChromeWithoutDeviceMotion()),
              (this.filterToWorldQ = new MathUtil.Quaternion()),
              Util.isIOS()
                ? this.filterToWorldQ.setFromAxisAngle(
                    new MathUtil.Vector3(1, 0, 0),
                    Math.PI / 2
                  )
                : this.filterToWorldQ.setFromAxisAngle(
                    new MathUtil.Vector3(1, 0, 0),
                    -Math.PI / 2
                  ),
              (this.inverseWorldToScreenQ = new MathUtil.Quaternion()),
              (this.worldToScreenQ = new MathUtil.Quaternion()),
              (this.originalPoseAdjustQ = new MathUtil.Quaternion()),
              this.originalPoseAdjustQ.setFromAxisAngle(
                new MathUtil.Vector3(0, 0, 1),
                (-window.orientation * Math.PI) / 180
              ),
              this.setScreenTransform_(),
              Util.isLandscapeMode() &&
                this.filterToWorldQ.multiply(this.inverseWorldToScreenQ),
              (this.resetQ = new MathUtil.Quaternion()),
              (this.orientationOut_ = new Float32Array(4)),
              this.start();
          }
          (FusionPoseSensor.prototype.getPosition = function () {
            return null;
          }),
            (FusionPoseSensor.prototype.getOrientation = function () {
              var orientation = void 0;
              if (this.isWithoutDeviceMotion && this._deviceOrientationQ)
                return (
                  (this.deviceOrientationFixQ =
                    this.deviceOrientationFixQ ||
                    ((z = new MathUtil.Quaternion().setFromAxisAngle(
                      new MathUtil.Vector3(0, 0, -1),
                      0
                    )),
                    (y = new MathUtil.Quaternion()),
                    -90 === window.orientation
                      ? y.setFromAxisAngle(
                          new MathUtil.Vector3(0, 1, 0),
                          Math.PI / -2
                        )
                      : y.setFromAxisAngle(
                          new MathUtil.Vector3(0, 1, 0),
                          Math.PI / 2
                        ),
                    z.multiply(y))),
                  (this.deviceOrientationFilterToWorldQ =
                    this.deviceOrientationFilterToWorldQ ||
                    ((q = new MathUtil.Quaternion()).setFromAxisAngle(
                      new MathUtil.Vector3(1, 0, 0),
                      -Math.PI / 2
                    ),
                    q)),
                  (orientation = this._deviceOrientationQ),
                  (out = new MathUtil.Quaternion()).copy(orientation),
                  out.multiply(this.deviceOrientationFilterToWorldQ),
                  out.multiply(this.resetQ),
                  out.multiply(this.worldToScreenQ),
                  out.multiplyQuaternions(this.deviceOrientationFixQ, out),
                  this.yawOnly && ((out.x = 0), (out.z = 0), out.normalize()),
                  (this.orientationOut_[0] = out.x),
                  (this.orientationOut_[1] = out.y),
                  (this.orientationOut_[2] = out.z),
                  (this.orientationOut_[3] = out.w),
                  this.orientationOut_
                );
              var q,
                z,
                y,
                out,
                filterOrientation = this.filter.getOrientation();
              return (
                (orientation = this.posePredictor.getPrediction(
                  filterOrientation,
                  this.gyroscope,
                  this.previousTimestampS
                )),
                (out = new MathUtil.Quaternion()).copy(this.filterToWorldQ),
                out.multiply(this.resetQ),
                WebVRConfig.TOUCH_PANNER_DISABLED ||
                  out.multiply(this.touchPanner.getOrientation()),
                out.multiply(orientation),
                out.multiply(this.worldToScreenQ),
                WebVRConfig.YAW_ONLY &&
                  ((out.x = 0), (out.z = 0), out.normalize()),
                (this.orientationOut_[0] = out.x),
                (this.orientationOut_[1] = out.y),
                (this.orientationOut_[2] = out.z),
                (this.orientationOut_[3] = out.w),
                this.orientationOut_
              );
            }),
            (FusionPoseSensor.prototype.resetPose = function () {
              this.resetQ.copy(this.filter.getOrientation()),
                (this.resetQ.x = 0),
                (this.resetQ.y = 0),
                (this.resetQ.z *= -1),
                this.resetQ.normalize(),
                Util.isLandscapeMode() &&
                  this.resetQ.multiply(this.inverseWorldToScreenQ),
                this.resetQ.multiply(this.originalPoseAdjustQ),
                WebVRConfig.TOUCH_PANNER_DISABLED ||
                  this.touchPanner.resetSensor();
            }),
            (FusionPoseSensor.prototype.onDeviceOrientation_ = function (e) {
              this._deviceOrientationQ =
                this._deviceOrientationQ || new MathUtil.Quaternion();
              var alpha = e.alpha,
                beta = e.beta,
                gamma = e.gamma;
              (alpha = ((alpha || 0) * Math.PI) / 180),
                (beta = ((beta || 0) * Math.PI) / 180),
                (gamma = ((gamma || 0) * Math.PI) / 180),
                this._deviceOrientationQ.setFromEulerYXZ(beta, alpha, -gamma);
            }),
            (FusionPoseSensor.prototype.onDeviceMotion_ = function (
              deviceMotion
            ) {
              this.updateDeviceMotion_(deviceMotion);
            }),
            (FusionPoseSensor.prototype.updateDeviceMotion_ = function (
              deviceMotion
            ) {
              if (!deviceMotion.rotationRate)
                return (
                  (this.isWithoutDeviceMotion = !0),
                  window.addEventListener(
                    "deviceorientation",
                    this.onDeviceOrientationCallback_
                  ),
                  void window.removeEventListener(
                    "devicemotion",
                    this.onDeviceMotionCallback_
                  )
                );
              var accGravity = deviceMotion.accelerationIncludingGravity,
                rotRate = deviceMotion.rotationRate,
                timestampS = deviceMotion.timeStamp / 1e3;
              this.isFirefoxAndroid && (timestampS /= 1e3);
              var deltaS = timestampS - this.previousTimestampS;
              deltaS <= Util.MIN_TIMESTEP ||
                deltaS > Util.MAX_TIMESTEP ||
                (this.accelerometer.set(
                  -accGravity.x,
                  -accGravity.y,
                  -accGravity.z
                ),
                this.gyroscope.set(rotRate.alpha, rotRate.beta, rotRate.gamma),
                this.isDeviceMotionInRadians ||
                  this.gyroscope.multiplyScalar(Math.PI / 180),
                this.filter.addAccelMeasurement(this.accelerometer, timestampS),
                this.filter.addGyroMeasurement(this.gyroscope, timestampS)),
                (this.previousTimestampS = timestampS);
            }),
            (FusionPoseSensor.prototype.onOrientationChange_ = function (
              screenOrientation
            ) {
              this.setScreenTransform_();
            }),
            (FusionPoseSensor.prototype.onMessage_ = function (event) {
              var message = event.data;
              message &&
                message.type &&
                "devicemotion" === message.type.toLowerCase() &&
                this.updateDeviceMotion_(message.deviceMotionEvent);
            }),
            (FusionPoseSensor.prototype.setScreenTransform_ = function () {
              switch (
                (this.worldToScreenQ.set(0, 0, 0, 1), window.orientation)
              ) {
                case 0:
                  break;
                case 90:
                  this.worldToScreenQ.setFromAxisAngle(
                    new MathUtil.Vector3(0, 0, 1),
                    -Math.PI / 2
                  );
                  break;
                case -90:
                  this.worldToScreenQ.setFromAxisAngle(
                    new MathUtil.Vector3(0, 0, 1),
                    Math.PI / 2
                  );
              }
              this.inverseWorldToScreenQ.copy(this.worldToScreenQ),
                this.inverseWorldToScreenQ.inverse();
            }),
            (FusionPoseSensor.prototype.start = function () {
              (this.onDeviceMotionCallback_ = this.onDeviceMotion_.bind(this)),
                (this.onOrientationChangeCallback_ =
                  this.onOrientationChange_.bind(this)),
                (this.onMessageCallback_ = this.onMessage_.bind(this)),
                (this.onDeviceOrientationCallback_ =
                  this.onDeviceOrientation_.bind(this)),
                Util.isIOS() &&
                  Util.isInsideCrossDomainIFrame() &&
                  window.addEventListener("message", this.onMessageCallback_),
                window.addEventListener(
                  "orientationchange",
                  this.onOrientationChangeCallback_
                ),
                this.isWithoutDeviceMotion
                  ? window.addEventListener(
                      "deviceorientation",
                      this.onDeviceOrientationCallback_
                    )
                  : window.addEventListener(
                      "devicemotion",
                      this.onDeviceMotionCallback_
                    );
            }),
            (FusionPoseSensor.prototype.stop = function () {
              window.removeEventListener(
                "devicemotion",
                this.onDeviceMotionCallback_
              ),
                window.removeEventListener(
                  "deviceorientation",
                  this.onDeviceOrientationCallback_
                ),
                window.removeEventListener(
                  "orientationchange",
                  this.onOrientationChangeCallback_
                ),
                window.removeEventListener("message", this.onMessageCallback_);
            }),
            (module.exports = FusionPoseSensor);
        },
        {
          "../math-util.js": 14,
          "../touch-panner.js": 20,
          "../util.js": 21,
          "./complementary-filter.js": 16,
          "./pose-predictor.js": 18,
        },
      ],
      18: [
        function (_dereq_, module, exports) {
          var MathUtil = _dereq_("../math-util"),
            Util = _dereq_("../util");
          function PosePredictor(predictionTimeS) {
            (this.predictionTimeS = predictionTimeS),
              (this.previousQ = new MathUtil.Quaternion()),
              (this.previousTimestampS = null),
              (this.deltaQ = new MathUtil.Quaternion()),
              (this.outQ = new MathUtil.Quaternion());
          }
          (PosePredictor.prototype.getPrediction = function (
            currentQ,
            gyro,
            timestampS
          ) {
            if (!this.previousTimestampS)
              return (
                this.previousQ.copy(currentQ),
                (this.previousTimestampS = timestampS),
                currentQ
              );
            var axis = new MathUtil.Vector3();
            axis.copy(gyro), axis.normalize();
            var angularSpeed = gyro.length();
            if (angularSpeed < 20 * MathUtil.degToRad)
              return (
                Util.isDebug() &&
                  console.log(
                    "Moving slowly, at %s deg/s: no prediction",
                    (MathUtil.radToDeg * angularSpeed).toFixed(1)
                  ),
                this.outQ.copy(currentQ),
                this.previousQ.copy(currentQ),
                this.outQ
              );
            this.previousTimestampS;
            var predictAngle = angularSpeed * this.predictionTimeS;
            return (
              this.deltaQ.setFromAxisAngle(axis, predictAngle),
              this.outQ.copy(this.previousQ),
              this.outQ.multiply(this.deltaQ),
              this.previousQ.copy(currentQ),
              (this.previousTimestampS = timestampS),
              this.outQ
            );
          }),
            (module.exports = PosePredictor);
        },
        { "../math-util": 14, "../util": 21 },
      ],
      19: [
        function (_dereq_, module, exports) {
          function SensorSample(sample, timestampS) {
            this.set(sample, timestampS);
          }
          (SensorSample.prototype.set = function (sample, timestampS) {
            (this.sample = sample), (this.timestampS = timestampS);
          }),
            (SensorSample.prototype.copy = function (sensorSample) {
              this.set(sensorSample.sample, sensorSample.timestampS);
            }),
            (module.exports = SensorSample);
        },
        {},
      ],
      20: [
        function (_dereq_, module, exports) {
          var MathUtil = _dereq_("./math-util.js"),
            Util = _dereq_("./util.js");
          function TouchPanner() {
            window.addEventListener(
              "touchstart",
              this.onTouchStart_.bind(this)
            ),
              window.addEventListener(
                "touchmove",
                this.onTouchMove_.bind(this)
              ),
              window.addEventListener("touchend", this.onTouchEnd_.bind(this)),
              (this.isTouching = !1),
              (this.rotateStart = new MathUtil.Vector2()),
              (this.rotateEnd = new MathUtil.Vector2()),
              (this.rotateDelta = new MathUtil.Vector2()),
              (this.theta = 0),
              (this.orientation = new MathUtil.Quaternion());
          }
          (TouchPanner.prototype.getOrientation = function () {
            return (
              this.orientation.setFromEulerXYZ(0, 0, this.theta),
              this.orientation
            );
          }),
            (TouchPanner.prototype.resetSensor = function () {
              this.theta = 0;
            }),
            (TouchPanner.prototype.onTouchStart_ = function (e) {
              1 == e.touches.length &&
                (this.rotateStart.set(e.touches[0].pageX, e.touches[0].pageY),
                (this.isTouching = !0));
            }),
            (TouchPanner.prototype.onTouchMove_ = function (e) {
              if (this.isTouching) {
                this.rotateEnd.set(e.touches[0].pageX, e.touches[0].pageY),
                  this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart),
                  this.rotateStart.copy(this.rotateEnd),
                  Util.isIOS() && (this.rotateDelta.x *= -1);
                var element = document.body;
                this.theta +=
                  ((2 * Math.PI * this.rotateDelta.x) / element.clientWidth) *
                  0.5;
              }
            }),
            (TouchPanner.prototype.onTouchEnd_ = function (e) {
              this.isTouching = !1;
            }),
            (module.exports = TouchPanner);
        },
        { "./math-util.js": 14, "./util.js": 21 },
      ],
      21: [
        function (_dereq_, module, exports) {
          var isIOS,
            isSafari,
            isSafariWebView,
            isFirefoxAndroid,
            match,
            value,
            piOver180,
            rad45,
            defaultOrientation,
            defaultPosition,
            objectAssign = _dereq_("object-assign"),
            Util = window.Util || {};
          function inUA(text) {
            return 0 <= navigator.userAgent.toLowerCase().indexOf(text);
          }
          function updateEyeMatrices(
            projection,
            view,
            pose,
            parameters,
            vrDisplay
          ) {
            !(function (out, fov, near, far) {
              var upTan = Math.tan(fov ? fov.upDegrees * piOver180 : rad45),
                downTan = Math.tan(fov ? fov.downDegrees * piOver180 : rad45),
                leftTan = Math.tan(fov ? fov.leftDegrees * piOver180 : rad45),
                rightTan = Math.tan(fov ? fov.rightDegrees * piOver180 : rad45),
                xScale = 2 / (leftTan + rightTan),
                yScale = 2 / (upTan + downTan);
              (out[0] = xScale),
                (out[1] = 0),
                (out[2] = 0),
                (out[3] = 0),
                (out[4] = 0),
                (out[5] = yScale),
                (out[6] = 0),
                (out[7] = 0),
                (out[8] = -(leftTan - rightTan) * xScale * 0.5),
                (out[9] = (upTan - downTan) * yScale * 0.5),
                (out[10] = far / (near - far)),
                (out[11] = -1),
                (out[12] = 0),
                (out[13] = 0),
                (out[14] = (far * near) / (near - far)),
                (out[15] = 0);
            })(
              projection,
              parameters ? parameters.fieldOfView : null,
              vrDisplay.depthNear,
              vrDisplay.depthFar
            ),
              (function (out, q, v) {
                var x = q[0],
                  y = q[1],
                  z = q[2],
                  w = q[3],
                  x2 = x + x,
                  y2 = y + y,
                  z2 = z + z,
                  xx = x * x2,
                  xy = x * y2,
                  xz = x * z2,
                  yy = y * y2,
                  yz = y * z2,
                  zz = z * z2,
                  wx = w * x2,
                  wy = w * y2,
                  wz = w * z2;
                (out[0] = 1 - (yy + zz)),
                  (out[1] = xy + wz),
                  (out[2] = xz - wy),
                  (out[3] = 0),
                  (out[4] = xy - wz),
                  (out[5] = 1 - (xx + zz)),
                  (out[6] = yz + wx),
                  (out[7] = 0),
                  (out[8] = xz + wy),
                  (out[9] = yz - wx),
                  (out[10] = 1 - (xx + yy)),
                  (out[11] = 0),
                  (out[12] = v[0]),
                  (out[13] = v[1]),
                  (out[14] = v[2]),
                  (out[15] = 1);
              })(
                view,
                pose.orientation || defaultOrientation,
                pose.position || defaultPosition
              ),
              parameters &&
                (function (out, a, v) {
                  var a00,
                    a01,
                    a02,
                    a03,
                    a10,
                    a11,
                    a12,
                    a13,
                    a20,
                    a21,
                    a22,
                    a23,
                    x = v[0],
                    y = v[1],
                    z = v[2];
                  a === out
                    ? ((out[12] = a[0] * x + a[4] * y + a[8] * z + a[12]),
                      (out[13] = a[1] * x + a[5] * y + a[9] * z + a[13]),
                      (out[14] = a[2] * x + a[6] * y + a[10] * z + a[14]),
                      (out[15] = a[3] * x + a[7] * y + a[11] * z + a[15]))
                    : ((a00 = a[0]),
                      (a01 = a[1]),
                      (a02 = a[2]),
                      (a03 = a[3]),
                      (a10 = a[4]),
                      (a11 = a[5]),
                      (a12 = a[6]),
                      (a13 = a[7]),
                      (a20 = a[8]),
                      (a21 = a[9]),
                      (a22 = a[10]),
                      (a23 = a[11]),
                      (out[0] = a00),
                      (out[1] = a01),
                      (out[2] = a02),
                      (out[3] = a03),
                      (out[4] = a10),
                      (out[5] = a11),
                      (out[6] = a12),
                      (out[7] = a13),
                      (out[8] = a20),
                      (out[9] = a21),
                      (out[10] = a22),
                      (out[11] = a23),
                      (out[12] = a00 * x + a10 * y + a20 * z + a[12]),
                      (out[13] = a01 * x + a11 * y + a21 * z + a[13]),
                      (out[14] = a02 * x + a12 * y + a22 * z + a[14]),
                      (out[15] = a03 * x + a13 * y + a23 * z + a[15]));
                })(view, view, parameters.offset),
              (function (out, a) {
                var a00 = a[0],
                  a01 = a[1],
                  a02 = a[2],
                  a03 = a[3],
                  a10 = a[4],
                  a11 = a[5],
                  a12 = a[6],
                  a13 = a[7],
                  a20 = a[8],
                  a21 = a[9],
                  a22 = a[10],
                  a23 = a[11],
                  a30 = a[12],
                  a31 = a[13],
                  a32 = a[14],
                  a33 = a[15],
                  b00 = a00 * a11 - a01 * a10,
                  b01 = a00 * a12 - a02 * a10,
                  b02 = a00 * a13 - a03 * a10,
                  b03 = a01 * a12 - a02 * a11,
                  b04 = a01 * a13 - a03 * a11,
                  b05 = a02 * a13 - a03 * a12,
                  b06 = a20 * a31 - a21 * a30,
                  b07 = a20 * a32 - a22 * a30,
                  b08 = a20 * a33 - a23 * a30,
                  b09 = a21 * a32 - a22 * a31,
                  b10 = a21 * a33 - a23 * a31,
                  b11 = a22 * a33 - a23 * a32,
                  det =
                    b00 * b11 -
                    b01 * b10 +
                    b02 * b09 +
                    b03 * b08 -
                    b04 * b07 +
                    b05 * b06;
                det &&
                  ((det = 1 / det),
                  (out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det),
                  (out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det),
                  (out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det),
                  (out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det),
                  (out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det),
                  (out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det),
                  (out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det),
                  (out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det),
                  (out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det),
                  (out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det),
                  (out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det),
                  (out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det),
                  (out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det),
                  (out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det),
                  (out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det),
                  (out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det));
              })(view, view);
          }
          (Util.MIN_TIMESTEP = 0.001),
            (Util.MAX_TIMESTEP = 1),
            (Util.base64 = function (mimeType, base64) {
              return "data:" + mimeType + ";base64," + base64;
            }),
            (Util.clamp = function (value, min, max) {
              return Math.min(Math.max(min, value), max);
            }),
            (Util.lerp = function (a, b, t) {
              return a + (b - a) * t;
            }),
            (Util.isIOS =
              ((isIOS = /iPad|iPhone|iPod/.test(navigator.platform)),
              function () {
                return isIOS;
              })),
            (Util.isSafari =
              ((isSafari = /^((?!chrome|android).)*safari/i.test(
                navigator.userAgent
              )),
              function () {
                return isSafari;
              })),
            (Util.isSafariWebView =
              ((isSafariWebView =
                (inUA("ipad") || inUA("iphone") || inUA("ipod")) &&
                !inUA("crios") &&
                (!inUA("safari") || !inUA("version") || navigator.standalone)),
              function () {
                return isSafariWebView;
              })),
            (Util.isFirefoxAndroid =
              ((isFirefoxAndroid =
                -1 !== navigator.userAgent.indexOf("Firefox") &&
                -1 !== navigator.userAgent.indexOf("Android")),
              function () {
                return isFirefoxAndroid;
              })),
            (Util.getChromeVersion =
              ((match = navigator.userAgent.match(/.*Chrome\/([0-9]+)/)),
              (value = match ? parseInt(match[1], 10) : null),
              function () {
                return value;
              })),
            (Util.isChromeWithoutDeviceMotion = (function () {
              var value = !1;
              if (65 === Util.getChromeVersion()) {
                var match = navigator.userAgent.match(/.*Chrome\/([0-9\.]*)/);
                if (match) {
                  var _match$1$split = match[1].split(".");
                  (major = _match$1$split[0]),
                    (minor = _match$1$split[1]),
                    (branch = _match$1$split[2]),
                    (build = _match$1$split[3]),
                    (value =
                      3325 === parseInt(branch, 10) &&
                      parseInt(build, 10) < 148);
                }
              }
              return function () {
                return value;
              };
            })()),
            (Util.isLandscapeMode = function () {
              return 90 == window.orientation || -90 == window.orientation;
            }),
            (Util.isTimestampDeltaValid = function (timestampDeltaS) {
              return (
                !isNaN(timestampDeltaS) &&
                !(timestampDeltaS <= Util.MIN_TIMESTEP) &&
                !(timestampDeltaS > Util.MAX_TIMESTEP)
              );
            }),
            (Util.getScreenWidth = function () {
              return (
                Math.max(window.screen.width, window.screen.height) *
                window.devicePixelRatio
              );
            }),
            (Util.getScreenHeight = function () {
              return (
                Math.min(window.screen.width, window.screen.height) *
                window.devicePixelRatio
              );
            }),
            (Util.requestFullscreen = function (element) {
              if (element.requestFullscreen) element.requestFullscreen();
              else if (element.webkitRequestFullscreen)
                element.webkitRequestFullscreen();
              else if (element.mozRequestFullScreen)
                element.mozRequestFullScreen();
              else {
                if (!element.msRequestFullscreen) return !1;
                element.msRequestFullscreen();
              }
              return !0;
            }),
            (Util.exitFullscreen = function () {
              if (document.exitFullscreen) document.exitFullscreen();
              else if (document.webkitExitFullscreen)
                document.webkitExitFullscreen();
              else if (document.mozCancelFullScreen)
                document.mozCancelFullScreen();
              else {
                if (!document.msExitFullscreen) return !1;
                document.msExitFullscreen();
              }
              return !0;
            }),
            (Util.getFullscreenElement = function () {
              return (
                document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement
              );
            }),
            (Util.linkProgram = function (
              gl,
              vertexSource,
              fragmentSource,
              attribLocationMap
            ) {
              var vertexShader = gl.createShader(gl.VERTEX_SHADER);
              gl.shaderSource(vertexShader, vertexSource),
                gl.compileShader(vertexShader);
              var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
              gl.shaderSource(fragmentShader, fragmentSource),
                gl.compileShader(fragmentShader);
              var program = gl.createProgram();
              for (var attribName in (gl.attachShader(program, vertexShader),
              gl.attachShader(program, fragmentShader),
              attribLocationMap))
                gl.bindAttribLocation(
                  program,
                  attribLocationMap[attribName],
                  attribName
                );
              return (
                gl.linkProgram(program),
                gl.deleteShader(vertexShader),
                gl.deleteShader(fragmentShader),
                program
              );
            }),
            (Util.getProgramUniforms = function (gl, program) {
              for (
                var uniforms = {},
                  uniformCount = gl.getProgramParameter(
                    program,
                    gl.ACTIVE_UNIFORMS
                  ),
                  uniformName = "",
                  i = 0;
                i < uniformCount;
                i++
              ) {
                uniforms[
                  (uniformName = gl
                    .getActiveUniform(program, i)
                    .name.replace("[0]", ""))
                ] = gl.getUniformLocation(program, uniformName);
              }
              return uniforms;
            }),
            (Util.orthoMatrix = function (
              out,
              left,
              right,
              bottom,
              top,
              near,
              far
            ) {
              var lr = 1 / (left - right),
                bt = 1 / (bottom - top),
                nf = 1 / (near - far);
              return (
                (out[0] = -2 * lr),
                (out[1] = 0),
                (out[2] = 0),
                (out[3] = 0),
                (out[4] = 0),
                (out[5] = -2 * bt),
                (out[6] = 0),
                (out[7] = 0),
                (out[8] = 0),
                (out[9] = 0),
                (out[10] = 2 * nf),
                (out[11] = 0),
                (out[12] = (left + right) * lr),
                (out[13] = (top + bottom) * bt),
                (out[14] = (far + near) * nf),
                (out[15] = 1),
                out
              );
            }),
            (Util.isMobile = function () {
              var a,
                check = !1;
              return (
                (a = navigator.userAgent || navigator.vendor || window.opera),
                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                  a
                ) ||
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                    a.substr(0, 4)
                  )) &&
                  (check = !0),
                check
              );
            }),
            (Util.extend = objectAssign),
            (Util.safariCssSizeWorkaround = function (canvas) {
              if (Util.isIOS()) {
                var width = canvas.style.width,
                  height = canvas.style.height;
                (canvas.style.width = parseInt(width) + 1 + "px"),
                  (canvas.style.height = parseInt(height) + "px"),
                  setTimeout(function () {
                    (canvas.style.width = width),
                      (canvas.style.height = height);
                  }, 100);
              }
              (window.Util = Util), (window.canvas = canvas);
            }),
            (Util.isDebug = function () {
              return Util.getQueryParameter("debug");
            }),
            (Util.getQueryParameter = function (name) {
              name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
              var results = new RegExp("[\\?&]" + name + "=([^&#]*)").exec(
                location.search
              );
              return null === results
                ? ""
                : decodeURIComponent(results[1].replace(/\+/g, " "));
            }),
            (Util.frameDataFromPose =
              ((piOver180 = Math.PI / 180),
              (rad45 = 0.25 * Math.PI),
              (defaultOrientation = new Float32Array([0, 0, 0, 1])),
              (defaultPosition = new Float32Array([0, 0, 0])),
              function (frameData, pose, vrDisplay) {
                return !(
                  !frameData ||
                  !pose ||
                  ((frameData.pose = pose),
                  (frameData.timestamp = pose.timestamp),
                  updateEyeMatrices(
                    frameData.leftProjectionMatrix,
                    frameData.leftViewMatrix,
                    pose,
                    vrDisplay.getEyeParameters("left"),
                    vrDisplay
                  ),
                  updateEyeMatrices(
                    frameData.rightProjectionMatrix,
                    frameData.rightViewMatrix,
                    pose,
                    vrDisplay.getEyeParameters("right"),
                    vrDisplay
                  ),
                  0)
                );
              })),
            (Util.isInsideCrossDomainIFrame = function () {
              var isFramed = window.self !== window.top,
                refDomain = Util.getDomainFromUrl(document.referrer),
                thisDomain = Util.getDomainFromUrl(window.location.href);
              return isFramed && refDomain !== thisDomain;
            }),
            (Util.getDomainFromUrl = function (url) {
              return (
                -1 < url.indexOf("://") ? url.split("/")[2] : url.split("/")[0]
              ).split(":")[0];
            }),
            (module.exports = Util);
        },
        { "object-assign": 2 },
      ],
      22: [
        function (_dereq_, module, exports) {
          var DeviceInfo = _dereq_("./device-info.js"),
            EventEmitter3 = _dereq_("eventemitter3");
          _dereq_("./util.js");
          function ViewerSelector() {
            try {
              this.selectedKey = localStorage.getItem("WEBVR_CARDBOARD_VIEWER");
            } catch (error) {}
            (this.selectedKey && DeviceInfo.Viewers[this.selectedKey]) ||
              (this.selectedKey = "CardboardV1Alt"),
              (this.dialog = this.createDialog_(DeviceInfo.Viewers)),
              (this.root = null);
          }
          ((ViewerSelector.prototype = new EventEmitter3()).show = function (
            root
          ) {
            (this.root = root).appendChild(this.dialog),
              (this.dialog.querySelector("#" + this.selectedKey).checked = !0),
              (this.dialog.style.display = "block");
          }),
            (ViewerSelector.prototype.hide = function () {
              this.root &&
                this.root.contains(this.dialog) &&
                this.root.removeChild(this.dialog),
                (this.dialog.style.display = "none");
            }),
            (ViewerSelector.prototype.getCurrentViewer = function () {
              return DeviceInfo.Viewers[this.selectedKey];
            }),
            (ViewerSelector.prototype.getSelectedKey_ = function () {
              var input = this.dialog.querySelector(
                "input[name=field]:checked"
              );
              return input ? input.id : null;
            }),
            (ViewerSelector.prototype.onSave_ = function () {
              if (
                ((this.selectedKey = this.getSelectedKey_()),
                this.selectedKey && DeviceInfo.Viewers[this.selectedKey])
              ) {
                this.emit("change", DeviceInfo.Viewers[this.selectedKey]);
                try {
                  localStorage.setItem(
                    "WEBVR_CARDBOARD_VIEWER",
                    this.selectedKey
                  );
                } catch (error) {}
                this.hide();
              } else
                console.error(
                  "ViewerSelector.onSave_: this should never happen!"
                );
            }),
            (ViewerSelector.prototype.createDialog_ = function (options) {
              var container = document.createElement("div");
              container.classList.add("webvr-polyfill-viewer-selector"),
                (container.style.display = "none");
              var overlay = document.createElement("div");
              ((s = overlay.style).position = "fixed"),
                (s.left = 0),
                (s.top = 0),
                (s.width = "100%"),
                (s.height = "100%"),
                (s.background = "rgba(0, 0, 0, 0.3)"),
                overlay.addEventListener("click", this.hide.bind(this));
              var dialog = document.createElement("div"),
                s = dialog.style;
              for (var id in ((s.boxSizing = "border-box"),
              (s.position = "fixed"),
              (s.top = "24px"),
              (s.left = "50%"),
              (s.marginLeft = "-140px"),
              (s.width = "280px"),
              (s.padding = "24px"),
              (s.overflow = "hidden"),
              (s.background = "#fafafa"),
              (s.fontFamily = "'Roboto', sans-serif"),
              (s.boxShadow = "0px 5px 20px #666"),
              dialog.appendChild(this.createH1_("Select your viewer")),
              options))
                dialog.appendChild(this.createChoice_(id, options[id].label));
              return (
                dialog.appendChild(
                  this.createButton_("Save", this.onSave_.bind(this))
                ),
                container.appendChild(overlay),
                container.appendChild(dialog),
                container
              );
            }),
            (ViewerSelector.prototype.createH1_ = function (name) {
              var h1 = document.createElement("h1"),
                s = h1.style;
              return (
                (s.color = "black"),
                (s.fontSize = "20px"),
                (s.fontWeight = "bold"),
                (s.marginTop = 0),
                (s.marginBottom = "24px"),
                (h1.innerHTML = name),
                h1
              );
            }),
            (ViewerSelector.prototype.createChoice_ = function (id, name) {
              var div = document.createElement("div");
              (div.style.marginTop = "8px"), (div.style.color = "black");
              var input = document.createElement("input");
              (input.style.fontSize = "30px"),
                input.setAttribute("id", id),
                input.setAttribute("type", "radio"),
                input.setAttribute("value", id),
                input.setAttribute("name", "field");
              var label = document.createElement("label");
              return (
                (label.style.marginLeft = "4px"),
                label.setAttribute("for", id),
                (label.innerHTML = name),
                div.appendChild(input),
                div.appendChild(label),
                div
              );
            }),
            (ViewerSelector.prototype.createButton_ = function (
              label,
              onclick
            ) {
              var button = document.createElement("button");
              button.innerHTML = label;
              var s = button.style;
              return (
                (s.float = "right"),
                (s.textTransform = "uppercase"),
                (s.color = "#1094f7"),
                (s.fontSize = "14px"),
                (s.letterSpacing = 0),
                (s.border = 0),
                (s.background = "none"),
                (s.marginTop = "16px"),
                button.addEventListener("click", onclick),
                button
              );
            }),
            (module.exports = ViewerSelector);
        },
        { "./device-info.js": 8, "./util.js": 21, eventemitter3: 1 },
      ],
      23: [
        function (_dereq_, module, exports) {
          var Util = _dereq_("./util.js"),
            CardboardVRDisplay = _dereq_("./cardboard-vr-display.js"),
            MouseKeyboardVRDisplay = _dereq_("./mouse-keyboard-vr-display.js"),
            VRDisplay = _dereq_("./base.js").VRDisplay,
            VRFrameData = _dereq_("./base.js").VRFrameData,
            HMDVRDevice = _dereq_("./base.js").HMDVRDevice,
            PositionSensorVRDevice =
              _dereq_("./base.js").PositionSensorVRDevice,
            VRDisplayHMDDevice = _dereq_(
              "./display-wrappers.js"
            ).VRDisplayHMDDevice,
            VRDisplayPositionSensorDevice = _dereq_(
              "./display-wrappers.js"
            ).VRDisplayPositionSensorDevice;
          function WebVRPolyfill() {
            (this.displays = []),
              (this.devices = []),
              (this.devicesPopulated = !1),
              (this.nativeWebVRAvailable = this.isWebVRAvailable()),
              (this.nativeLegacyWebVRAvailable =
                this.isDeprecatedWebVRAvailable()),
              (this.nativeGetVRDisplaysFunc = this.nativeWebVRAvailable
                ? navigator.getVRDisplays
                : null),
              this.nativeLegacyWebVRAvailable ||
                (this.enablePolyfill(),
                WebVRConfig.ENABLE_DEPRECATED_API &&
                  this.enableDeprecatedPolyfill()),
              "VRDisplay" in window &&
                !("VRFrameData" in window) &&
                ((window.VRFrameData = VRFrameData),
                "depthNear" in window.VRDisplay.prototype ||
                  (window.VRDisplay.prototype.depthNear = 0.01),
                "depthFar" in window.VRDisplay.prototype ||
                  (window.VRDisplay.prototype.depthFar = 1e4),
                (window.VRDisplay.prototype.getFrameData = function (
                  frameData
                ) {
                  return Util.frameDataFromPose(
                    frameData,
                    this.getPose(),
                    this
                  );
                }));
          }
          (WebVRPolyfill.prototype.isWebVRAvailable = function () {
            return "getVRDisplays" in navigator;
          }),
            (WebVRPolyfill.prototype.isDeprecatedWebVRAvailable = function () {
              return (
                "getVRDevices" in navigator || "mozGetVRDevices" in navigator
              );
            }),
            (WebVRPolyfill.prototype.populateDevices = function () {
              if (!this.devicesPopulated) {
                var vrDisplay = null;
                this.isCardboardCompatible() &&
                  ((vrDisplay = new CardboardVRDisplay()),
                  this.displays.push(vrDisplay),
                  WebVRConfig.ENABLE_DEPRECATED_API &&
                    (this.devices.push(new VRDisplayHMDDevice(vrDisplay)),
                    this.devices.push(
                      new VRDisplayPositionSensorDevice(vrDisplay)
                    ))),
                  this.isMobile() ||
                    WebVRConfig.MOUSE_KEYBOARD_CONTROLS_DISABLED ||
                    ((vrDisplay = new MouseKeyboardVRDisplay()),
                    this.displays.push(vrDisplay),
                    WebVRConfig.ENABLE_DEPRECATED_API &&
                      (this.devices.push(new VRDisplayHMDDevice(vrDisplay)),
                      this.devices.push(
                        new VRDisplayPositionSensorDevice(vrDisplay)
                      ))),
                  (this.devicesPopulated = !0);
              }
            }),
            (WebVRPolyfill.prototype.enablePolyfill = function () {
              (navigator.getVRDisplays = this.getVRDisplays.bind(this)),
                (window.VRDisplay = VRDisplay);
              var self = this;
              Object.defineProperty(navigator, "vrEnabled", {
                get: function () {
                  return (
                    self.isCardboardCompatible() &&
                    (self.isFullScreenAvailable() || Util.isIOS())
                  );
                },
              }),
                !1 in window && (window.VRFrameData = VRFrameData);
            }),
            (WebVRPolyfill.prototype.enableDeprecatedPolyfill = function () {
              (navigator.getVRDevices = this.getVRDevices.bind(this)),
                (window.HMDVRDevice = HMDVRDevice),
                (window.PositionSensorVRDevice = PositionSensorVRDevice);
            }),
            (WebVRPolyfill.prototype.getVRDisplays = function () {
              this.populateDevices();
              var polyfillDisplays = this.displays;
              return this.nativeWebVRAvailable
                ? this.nativeGetVRDisplaysFunc
                    .call(navigator)
                    .then(function (nativeDisplays) {
                      return WebVRConfig.ALWAYS_APPEND_POLYFILL_DISPLAY
                        ? nativeDisplays.concat(polyfillDisplays)
                        : 0 < nativeDisplays.length
                        ? nativeDisplays
                        : polyfillDisplays;
                    })
                : new Promise(function (resolve, reject) {
                    try {
                      resolve(polyfillDisplays);
                    } catch (e) {
                      reject(e);
                    }
                  });
            }),
            (WebVRPolyfill.prototype.getVRDevices = function () {
              console.warn(
                "getVRDevices is deprecated. Please update your code to use getVRDisplays instead."
              );
              var self = this;
              return new Promise(function (resolve, reject) {
                try {
                  if (!self.devicesPopulated) {
                    if (self.nativeWebVRAvailable)
                      return navigator.getVRDisplays(function (displays) {
                        for (var i = 0; i < displays.length; ++i)
                          self.devices.push(
                            new VRDisplayHMDDevice(displays[i])
                          ),
                            self.devices.push(
                              new VRDisplayPositionSensorDevice(displays[i])
                            );
                        (self.devicesPopulated = !0), resolve(self.devices);
                      }, reject);
                    if (self.nativeLegacyWebVRAvailable)
                      return (
                        navigator.getVRDDevices || navigator.mozGetVRDevices
                      )(function (devices) {
                        for (var i = 0; i < devices.length; ++i)
                          devices[i] instanceof HMDVRDevice &&
                            self.devices.push(devices[i]),
                            devices[i] instanceof PositionSensorVRDevice &&
                              self.devices.push(devices[i]);
                        (self.devicesPopulated = !0), resolve(self.devices);
                      }, reject);
                  }
                  self.populateDevices(), resolve(self.devices);
                } catch (e) {
                  reject(e);
                }
              });
            }),
            (WebVRPolyfill.prototype.isMobile = function () {
              return (
                /Android/i.test(navigator.userAgent) ||
                /iPhone|iPad|iPod/i.test(navigator.userAgent)
              );
            }),
            (WebVRPolyfill.prototype.isCardboardCompatible = function () {
              return this.isMobile() || WebVRConfig.FORCE_ENABLE_VR;
            }),
            (WebVRPolyfill.prototype.isFullScreenAvailable = function () {
              return (
                document.fullscreenEnabled ||
                document.mozFullScreenEnabled ||
                document.webkitFullscreenEnabled ||
                !1
              );
            }),
            (module.exports.WebVRPolyfill = WebVRPolyfill);
        },
        {
          "./base.js": 3,
          "./cardboard-vr-display.js": 6,
          "./display-wrappers.js": 9,
          "./mouse-keyboard-vr-display.js": 15,
          "./util.js": 21,
        },
      ],
    },
    {},
    [13]
  )(13);
});
