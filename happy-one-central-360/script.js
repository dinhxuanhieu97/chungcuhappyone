if (!Object["hasOwnProperty"]("values")) {
  Object["values"] = function (a) {
    return Object["keys"](a)["map"](function (b) {
      return a[b];
    });
  };
}
if (!String["prototype"]["startsWith"]) {
  String["prototype"]["startsWith"] = function (a, b) {
    b = b || 0x0;
    return this["indexOf"](a, b) === b;
  };
}
TDV["EventDispatcher"] = function () {
  this["_handlers"] = {};
};
TDV["EventDispatcher"]["prototype"]["bind"] = function (a, b) {
  if (!(a in this["_handlers"])) this["_handlers"][a] = [];
  this["_handlers"][a]["push"](b);
};
TDV["EventDispatcher"]["prototype"]["unbind"] = function (a, b) {
  if (a in this["_handlers"]) {
    var c = this["_handlers"][a]["indexOf"](b);
    if (c != -0x1) this["_handlers"][a]["splice"](c, 0x1);
  }
};
TDV["EventDispatcher"]["prototype"]["createNewEvent"] = function (a) {
  if (typeof Event === "function") return new Event(a);
  var b = document["createEvent"]("Event");
  b["initEvent"](a, !![], !![]);
  return b;
};
TDV["EventDispatcher"]["prototype"]["dispatchEvent"] = function (a) {
  if (a["type"] in this["_handlers"]) {
    var b = this["_handlers"][a["type"]];
    for (var c = 0x0; c < b["length"]; ++c) {
      b[c]["call"](window, a);
      if (a["defaultPrevented"]) break;
    }
  }
};
TDV["Tour"] = function (a, b) {
  TDV["EventDispatcher"]["call"](this);
  this["player"] = undefined;
  this["_settings"] = a;
  this["_devicesUrl"] = b;
  this["_playersPlayingTmp"] = [];
  this["_isInitialized"] = ![];
  this["_isPaused"] = ![];
  this["_isRemoteSession"] = ![];
  this["_orientation"] = undefined;
  this["_lockedOrientation"] = undefined;
  this["_device"] = undefined;
  this["_setupRemote"]();
};
TDV["Tour"]["DEVICE_GENERAL"] = "general";
TDV["Tour"]["DEVICE_MOBILE"] = "mobile";
TDV["Tour"]["DEVICE_IPAD"] = "ipad";
TDV["Tour"]["DEVICE_VR"] = "vr";
TDV["Tour"]["EVENT_TOUR_INITIALIZED"] = "tourInitialized";
TDV["Tour"]["EVENT_TOUR_LOADED"] = "tourLoaded";
TDV["Tour"]["EVENT_TOUR_ENDED"] = "tourEnded";
TDV["Tour"]["prototype"] = new TDV["EventDispatcher"]();
TDV["Tour"]["prototype"]["dispose"] = function () {
  if (!this["player"]) return;
  if (this["_onHashChange"]) {
    window["removeEventListener"]("hashchange", this["_onHashChange"]);
    this["_onHashChange"] = undefined;
  }
  if (this["_onKeyUp"]) {
    document["removeEventListener"]("keyup", this["_onKeyUp"]);
    this["_onKeyUp"] = undefined;
  }
  if (this["_onBeforeUnload"]) {
    window["removeEventListener"]("beforeunload", this["_onBeforeUnload"]);
    this["_onBeforeUnload"] = undefined;
  }
  var a = this["_getRootPlayer"]();
  if (a !== undefined) {
    a["stopTextToSpeech"]();
  }
  this["player"]["delete"]();
  this["player"] = undefined;
  this["_isInitialized"] = ![];
  window["currentGlobalAudios"] = undefined;
  window["pauseGlobalAudiosState"] = undefined;
  window["currentPanoramasWithCameraChanged"] = undefined;
  window["overlaysDispatched"] = undefined;
};
TDV["Tour"]["prototype"]["load"] = function () {
  if (this["player"]) return;
  var a = function (c) {
    if (c["name"] == "begin") {
      var d = c["data"]["source"]["get"]("camera");
      if (
        d &&
        d["get"]("initialSequence") &&
        d["get"]("initialSequence")["get"]("movements")["length"] > 0x0
      )
        return;
    }
    if (c["sourceClassName"] == "MediaAudio" || this["_isInitialized"]) return;
    this["_isInitialized"] = !![];
    b["unbind"]("preloadMediaShow", a, this, !![]);
    b["unbindOnObjectsOf"]("PlayListItem", "begin", a, this, !![]);
    b["unbind"]("stateChange", a, this, !![]);
    if (this["_isPaused"]) this["pause"]();
    window["parent"]["postMessage"](TDV["Tour"]["EVENT_TOUR_LOADED"], "*");
    this["dispatchEvent"](
      this["createNewEvent"](TDV["Tour"]["EVENT_TOUR_LOADED"])
    );
  };
  this["_setup"]();
  this["_settings"]["set"](
    TDV["PlayerSettings"]["SCRIPT_URL"],
    this["_currentScriptUrl"]
  );
  var b = (this["player"] = TDV["PlayerAPI"]["create"](this["_settings"]));
  b["bind"]("preloadMediaShow", a, this, !![]);
  b["bind"]("stateChange", a, this, !![]);
  b["bindOnObjectsOf"]("PlayListItem", "begin", a, this, !![]);
  b["bindOnObject"](
    "rootPlayer",
    "start",
    function (c) {
      var d = c["data"]["source"];
      d["get"]("data")["tour"] = this;
      var f =
        window["navigator"]["language"] ||
        window["navigator"]["userLanguage"] ||
        "en";
      var g = d["get"]("data")["locales"] || {};
      var h = d["get"]("data")["defaultLocale"] || f;
      var j = (this["locManager"] = new TDV["Tour"]["LocaleManager"](
        d,
        g,
        h,
        this["_settings"]["get"](
          TDV["PlayerSettings"]["QUERY_STRING_PARAMETERS"]
        )
      ));
      d["get"]("data")["localeManager"] = j;
      var k = function () {
        var q = d["get"]("data");
        if (!("updateText" in q)) {
          q["updateText"] = function (u) {
            var v = u[0x0]["split"](".");
            if (v["length"] == 0x2) {
              var w = j["trans"]["apply"](j, u);
              var x = u[0x1] || d;
              if (typeof x == "string") {
                var y = x["split"](".");
                x = d[y["shift"]()];
                for (var A = 0x0; A < y["length"] - 0x1; ++A) {
                  if (x != undefined) x = "get" in x ? x["get"](y[A]) : x[y[A]];
                }
                if (x != undefined) {
                  var B = y[y["length"] - 0x1];
                  if (Array["isArray"](x)) {
                    for (var C = 0x0; C < x["length"]; ++C) {
                      this["setValue"](x[C], B, w);
                    }
                  } else this["setValue"](x, B, w);
                }
              } else {
                x = x[v[0x0]];
                this["setValue"](x, v[0x1], w);
              }
            }
          }["bind"](d);
        }
        var r = q["translateObjs"];
        var s = q["updateText"];
        var t = function () {
          for (var u in r) {
            s(r[u]);
          }
        };
        t();
        t();
      };
      this["locManager"]["bind"](
        TDV["Tour"]["LocaleManager"]["EVENT_LOCALE_CHANGED"],
        k["bind"](this)
      );
      var l = this["_getParams"](location["search"]["substr"](0x1));
      l = d["mixObject"](
        l,
        this["_getParams"](location["hash"]["substr"](0x1))
      );
      var m = l["language"];
      if (!m || !this["locManager"]["hasLocale"](l["language"])) {
        if (d["get"]("data")["forceDefaultLocale"]) m = h;
        else m = f;
      }
      this["setLocale"](m);
      this["_setMediaFromURL"](l);
      this["_updateParams"](l, ![]);
      if (
        this["isMobile"]() &&
        typeof this["_devicesUrl"][this["_device"]] == "object"
      ) {
        var n = function () {
          if (
            !d["isCardboardViewMode"]() &&
            this["_getOrientation"]() != this["_orientation"]
          ) {
            this["reload"]();
            return !![];
          }
          return ![];
        };
        if (n["call"](this)) return;
        var o = d["getByClassName"]("PanoramaPlayer");
        for (var p = 0x0; p < o["length"]; ++p) {
          o[p]["bind"]("viewModeChange", n, this);
        }
        d["bind"]("orientationChange", n, this);
      }
      this["_onHashChange"] = function () {
        var q = this["_getParams"](location["hash"]["substr"](0x1));
        this["_setMediaFromURL"](q, ![]);
        this["_updateParams"](q, !![]);
      }["bind"](this);
      this["_onKeyUp"] = function (q) {
        if (q["ctrlKey"] && q["shiftKey"] && q["key"]["toLowerCase"]() == "u") {
          this["updateDeepLink"]();
          d["copyToClipboard"](location["href"]);
        }
      }["bind"](this);
      this["_onBeforeUnload"] = function (q) {
        d["stopTextToSpeech"]();
      };
      window["addEventListener"]("hashchange", this["_onHashChange"]);
      window["addEventListener"]("beforeunload", this["_onBeforeUnload"]);
      document["addEventListener"]("keyup", this["_onKeyUp"]);
      d["bind"](
        "tourEnded",
        function () {
          this["dispatchEvent"](
            this["createNewEvent"](TDV["Tour"]["EVENT_TOUR_ENDED"])
          );
        },
        this,
        !![]
      );
      d["bind"](
        "mute_changed",
        function () {
          if (this["get"]("mute")) this["stopTextToSpeech"]();
        },
        d,
        !![]
      );
      this["dispatchEvent"](
        this["createNewEvent"](TDV["Tour"]["EVENT_TOUR_INITIALIZED"])
      );
    },
    this,
    !![]
  );
  window["addEventListener"](
    "message",
    function (c) {
      var d = c["data"];
      if (d == "pauseTour") d = "pause";
      else if (d == "resumeTour") d = "resume";
      else return;
      this[d]["apply"](this);
    }["bind"](this)
  );
};
TDV["Tour"]["prototype"]["pause"] = function () {
  this["_isPaused"] = !![];
  if (!this["_isInitialized"]) return;
  var a = function (l) {
    var m = l["source"];
    if (!this["_isPaused"]) m["unbind"]("stateChange", a, this);
    else if (m["get"]("state") == "playing") {
      m["pause"]();
    }
  };
  var b = this["player"]["getByClassName"]("PlayList");
  for (var c = 0x0, d = b["length"]; c < d; c++) {
    var e = b[c];
    var f = e["get"]("selectedIndex");
    if (f != -0x1) {
      var g = e["get"]("items")[f];
      var h = g["get"]("player");
      if (h && h["pause"]) {
        if (h["get"]("state") != "playing") h["bind"]("stateChange", a, this);
        else h["pause"]();
        this["_playersPlayingTmp"]["push"](h);
      }
    }
  }
  var j = this["_getRootPlayer"]();
  j["pauseGlobalAudios"]();
  var k = j["get"]("data");
  if (k && "quiz" in k) {
    k["quiz"]["pauseTimer"]();
  }
};
TDV["Tour"]["prototype"]["resume"] = function () {
  this["_isPaused"] = ![];
  if (!this["_isInitialized"]) return;
  while (this["_playersPlayingTmp"]["length"]) {
    var a = this["_playersPlayingTmp"]["pop"]();
    a["play"]();
  }
  var b = this["_getRootPlayer"]();
  b["resumeGlobalAudios"]();
  var c = b["get"]("data");
  if (c && "quiz" in c) {
    c["quiz"]["continueTimer"]();
  }
};
TDV["Tour"]["prototype"]["reload"] = function () {
  this["_orientation"] = this["_getOrientation"]();
  this["updateDeepLink"]();
  this["dispose"]();
  this["load"]();
};
TDV["Tour"]["prototype"]["setMediaByIndex"] = function (a) {
  var b = this["_getRootPlayer"]();
  if (b !== undefined) {
    return b["setMainMediaByIndex"](a);
  }
};
TDV["Tour"]["prototype"]["setMediaByName"] = function (a) {
  var b = this["_getRootPlayer"]();
  if (b !== undefined) {
    return b["setMainMediaByName"](a);
  }
};
TDV["Tour"]["prototype"]["triggerOverlayByName"] = function (a, b, c) {
  var d = this["_getRootPlayer"]();
  if (d !== undefined && c) {
    var e = d["getPanoramaOverlayByName"](a["get"]("media"), b);
    if (e) {
      d["triggerOverlay"](e, c);
    }
  }
};
TDV["Tour"]["prototype"]["focusOverlayByName"] = function (a, b) {
  var c = this["_getRootPlayer"]();
  if (c !== undefined) {
    var d = c["getPanoramaOverlayByName"](a["get"]("media"), b);
    if (d) {
      var e = d["get"]("class");
      var f = e == "VideoPanoramaOverlay" ? d : d["get"]("items")[0x0];
      var g = f["get"]("yaw");
      var h = f["get"]("pitch");
      var i = c["getPlayListWithItem"](a);
      if (i) {
        var j = function () {
          c["setPanoramaCameraWithSpot"](i, a, g, h);
        };
        if (!this["_isInitialized"]) {
          var k = function () {
            a["unbind"]("begin", k, this);
            j();
          };
          a["bind"]("begin", k, this);
        } else {
          j();
        }
      }
    }
  }
};
TDV["Tour"]["prototype"]["setComponentsVisibilityByTags"] = function (a, b, c) {
  var d = this["_getRootPlayer"]();
  if (d !== undefined) {
    var e = d["getComponentsByTags"](a, c);
    for (var f = 0x0, g = e["length"]; f < g; ++f) {
      e[f]["set"]("visible", b);
    }
  }
};
TDV["Tour"]["prototype"]["setOverlaysVisibilityByTags"] = function (a, b, c) {
  var d = this["_getRootPlayer"]();
  if (d !== undefined) {
    var e = d["getOverlaysByTags"](a, c);
    for (var f = 0x0, g = e["length"]; f < g; ++f) {
      e[f]["set"]("enabled", b);
    }
  }
};
TDV["Tour"]["prototype"]["updateDeepLink"] = function () {
  var a = this["_getRootPlayer"]();
  if (a !== undefined) {
    a["updateDeepLink"]();
  }
};
TDV["Tour"]["prototype"]["setLocale"] = function (a) {
  var b = this["_getRootPlayer"]();
  if (b !== undefined && this["locManager"] !== undefined) {
    this["locManager"]["setLocale"](a);
  }
};
TDV["Tour"]["prototype"]["getLocale"] = function () {
  var a = this["_getRootPlayer"]();
  return a !== undefined && this["locManager"] !== undefined
    ? this["locManager"]["currentLocaleID"]
    : undefined;
};
TDV["Tour"]["prototype"]["isMobile"] = function () {
  return TDV["PlayerAPI"]["mobile"];
};
TDV["Tour"]["prototype"]["isIPad"] = function () {
  return TDV["PlayerAPI"]["device"] == TDV["PlayerAPI"]["DEVICE_IPAD"];
};
TDV["Tour"]["prototype"]["getNotchValue"] = function () {
  var a = document["documentElement"];
  a["style"]["setProperty"]("--notch-top", "env(safe-area-inset-top)");
  a["style"]["setProperty"]("--notch-right", "env(safe-area-inset-right)");
  a["style"]["setProperty"]("--notch-bottom", "env(safe-area-inset-bottom)");
  a["style"]["setProperty"]("--notch-left", "env(safe-area-inset-left)");
  var b = window["getComputedStyle"](a);
  return (
    parseInt(b["getPropertyValue"]("--notch-top") || "0", 0xa) ||
    parseInt(b["getPropertyValue"]("--notch-right") || "0", 0xa) ||
    parseInt(b["getPropertyValue"]("--notch-bottom") || "0", 0xa) ||
    parseInt(b["getPropertyValue"]("--notch-left") || "0", 0xa)
  );
};
TDV["Tour"]["prototype"]["hasNotch"] = function () {
  return this["getNotchValue"]() > 0x0;
};
TDV["Tour"]["prototype"]["_getOrientation"] = function () {
  var a = this["_getRootPlayer"]();
  if (a) {
    return a["get"]("orientation");
  } else if (this["_lockedOrientation"]) {
    return this["_lockedOrientation"];
  } else {
    return TDV["PlayerAPI"]["getOrientation"]();
  }
};
TDV["Tour"]["prototype"]["_getParams"] = function (a) {
  var b = {};
  a["split"]("&")["forEach"](function (c) {
    var d = c["split"]("=")[0x0],
      e = decodeURIComponent(c["split"]("=")[0x1]);
    b[d["toLowerCase"]()] = e;
  });
  return b;
};
TDV["Tour"]["prototype"]["_getRootPlayer"] = function () {
  return this["player"] !== undefined
    ? this["player"]["getById"]("rootPlayer")
    : undefined;
};
TDV["Tour"]["prototype"]["_setup"] = function () {
  if (!this["_orientation"]) this["_orientation"] = this["_getOrientation"]();
  this["_device"] = this["_getDevice"]();
  this["_currentScriptUrl"] = this["_getScriptUrl"]();
  if (this["isMobile"]()) {
    var a = document["getElementById"]("metaViewport");
    if (a) {
      var b = this["_devicesUrl"][this["_device"]];
      var c = 0x1;
      if (
        (typeof b == "object" &&
          this["_orientation"] in b &&
          this["_orientation"] == TDV["PlayerAPI"]["ORIENTATION_LANDSCAPE"]) ||
        this["_device"] == TDV["Tour"]["DEVICE_GENERAL"]
      ) {
        c = a["getAttribute"]("data-tdv-general-scale") || 0.5;
      }
      var d = a["getAttribute"]("content");
      d = d["replace"](/initial-scale=(\d+(\.\d+)?)/, function (e, f) {
        return "initial-scale=" + c;
      });
      a["setAttribute"]("content", d);
    }
  }
};
TDV["Tour"]["prototype"]["_getScriptUrl"] = function () {
  var a = this["_devicesUrl"][this["_device"]];
  if (typeof a == "object") {
    if (this["_orientation"] in a) {
      a = a[this["_orientation"]];
    }
  }
  return a;
};
TDV["Tour"]["prototype"]["_getDevice"] = function () {
  var a = TDV["Tour"]["DEVICE_GENERAL"];
  if (!this["_isRemoteSession"] && this["isMobile"]()) {
    if (this["isIPad"]() && TDV["Tour"]["DEVICE_IPAD"] in this["_devicesUrl"])
      a = TDV["Tour"]["DEVICE_IPAD"];
    else if (TDV["Tour"]["DEVICE_MOBILE"] in this["_devicesUrl"])
      a = TDV["Tour"]["DEVICE_MOBILE"];
  }
  return a;
};
TDV["Tour"]["prototype"]["_setMediaFromURL"] = function (a) {
  var b = this["_getRootPlayer"]();
  var c = b["getActivePlayerWithViewer"](b["getMainViewer"]());
  var d = c ? b["getMediaFromPlayer"](c) : undefined;
  var e = undefined;
  if ("media" in a) {
    var f = a["media"];
    var g = Number(f);
    e = isNaN(g) ? this["setMediaByName"](f) : this["setMediaByIndex"](g - 0x1);
  } else if ("media-index" in a) {
    e = this["setMediaByIndex"](parseInt(a["media-index"]) - 0x1);
  } else if ("media-name" in a) {
    e = this["setMediaByName"](a["media-name"]);
  }
  if (e == undefined) {
    e = this["setMediaByIndex"](0x0);
  }
  if (e != undefined) {
    var h = e["get"]("player");
    var i = function () {
      if ("trigger-overlay-name" in a) {
        this["triggerOverlayByName"](
          e,
          a["trigger-overlay-name"],
          "trigger-overlay-event" in a ? a["trigger-overlay-event"] : "click"
        );
      }
      if ("focus-overlay-name" in a) {
        this["focusOverlayByName"](e, a["focus-overlay-name"]);
      } else if ("yaw" in a || "pitch" in a) {
        var m = parseFloat(a["yaw"]) || undefined;
        var n = parseFloat(a["pitch"]) || undefined;
        var o = b["getPlayListWithItem"](e);
        if (o) b["setPanoramaCameraWithSpot"](o, e, m, n);
      }
    }["bind"](this);
    if (h) {
      var j = h["get"]("viewerArea") == b["getMainViewer"]();
      var k = b["getMediaFromPlayer"](h);
      if ((j && d == e["get"]("media")) || (!j && k == e["get"]("media"))) {
        i();
        return e != undefined;
      }
    }
    var l = function () {
      e["unbind"]("begin", l, this);
      i();
    };
    e["bind"]("begin", l, b);
  }
  return e != undefined;
};
TDV["Tour"]["prototype"]["_setupRemote"] = function () {
  if (this["isMobile"]() && TDV["Remote"] != undefined) {
    var a = function () {
      var b = undefined;
      var c = function () {
        var f = this["_getRootPlayer"]();
        b = f["get"]("lockedOrientation");
        f["set"]("lockedOrientation", this["_lockedOrientation"]);
      }["bind"](this);
      this["_isRemoteSession"] = !![];
      this["_lockedOrientation"] = TDV["PlayerAPI"]["ORIENTATION_LANDSCAPE"];
      if (this["_device"] != TDV["Tour"]["DEVICE_GENERAL"]) {
        var d = function () {
          c();
          this["unbind"](TDV["Tour"]["EVENT_TOUR_INITIALIZED"], d);
        }["bind"](this);
        this["bind"](TDV["Tour"]["EVENT_TOUR_INITIALIZED"], d);
        this["reload"]();
      } else {
        c();
      }
      var e = function () {
        this["_isRemoteSession"] = ![];
        this["_getRootPlayer"]()["set"]("lockedOrientation", b);
        TDV["Remote"]["unbind"](TDV["Remote"]["EVENT_CALL_END"], e);
        var f = this["_getScriptUrl"]();
        if (this["_currentScriptUrl"] != f) this["reload"]();
      }["bind"](this);
      TDV["Remote"]["bind"](TDV["Remote"]["EVENT_CALL_END"], e);
    }["bind"](this);
    TDV["Remote"]["bind"](TDV["Remote"]["EVENT_CALL_BEGIN"], a);
  }
};
TDV["Tour"]["prototype"]["_updateParams"] = function (a, b) {
  if (b && "language" in a) {
    var c = a["language"];
    if (this["locManager"]["hasLocale"](c)) {
      this["setLocale"](c);
    }
  }
  var d = function (e, f, g) {
    var h = f["split"](",");
    for (var j = 0x0, k = h["length"]; j < k; ++j) {
      e["call"](this, h[j]["split"]("+"), g, "and");
    }
  };
  if ("hide-components-tags" in a || "hct" in a)
    d["call"](
      this,
      this["setComponentsVisibilityByTags"],
      a["hide-components-tags"] || a["hct"],
      ![]
    );
  if ("show-components-tags" in a || "sct" in a)
    d["call"](
      this,
      this["setComponentsVisibilityByTags"],
      a["show-components-tags"] || a["sct"],
      !![]
    );
  if ("hide-overlays-tags" in a || "hot" in a)
    d["call"](
      this,
      this["setOverlaysVisibilityByTags"],
      a["hide-overlays-tags"] || a["hot"],
      ![]
    );
  if ("show-overlays-tags" in a || "sot" in a)
    d["call"](
      this,
      this["setOverlaysVisibilityByTags"],
      a["show-overlays-tags"] || a["sot"],
      !![]
    );
};
TDV["Tour"]["LocaleManager"] = function (a, b, c, d) {
  TDV["EventDispatcher"]["call"](this);
  this["rootPlayer"] = a;
  this["locales"] = {};
  this["defaultLocale"] = c;
  this["queryParam"] = d;
  this["currentLocaleMap"] = {};
  this["currentLocaleID"] = undefined;
  for (var e in b) {
    this["registerLocale"](e, b[e]);
  }
};
TDV["Tour"]["LocaleManager"]["EVENT_LOCALE_CHANGED"] = "localeChanged";
TDV["Tour"]["LocaleManager"]["prototype"] = new TDV["EventDispatcher"]();
TDV["Tour"]["LocaleManager"]["prototype"]["registerLocale"] = function (a, b) {
  var c = [a, a["split"]("-")[0x0]];
  for (var d = 0x0; d < c["length"]; ++d) {
    a = c[d];
    if (!(a in this["locales"])) {
      this["locales"][a] = b;
    }
  }
};
TDV["Tour"]["LocaleManager"]["prototype"]["unregisterLocale"] = function (a) {
  delete this["locales"][a];
  if (a == this["currentLocaleID"]) {
    this["setLocale"](this["defaultLocale"]);
  }
};
TDV["Tour"]["LocaleManager"]["prototype"]["hasLocale"] = function (a) {
  return a in this["locales"];
};
TDV["Tour"]["LocaleManager"]["prototype"]["setLocale"] = function (a) {
  var b = undefined;
  var c = a["split"]("-")[0x0];
  var d = [a, c];
  for (var e = 0x0; e < d["length"]; ++e) {
    var g = d[e];
    if (g in this["locales"]) {
      b = g;
      break;
    }
  }
  if (b === undefined) {
    for (var g in this["locales"]) {
      if (g["indexOf"](c) == 0x0) {
        b = g;
        break;
      }
    }
  }
  if (b === undefined) {
    b = this["defaultLocale"];
  }
  var h = this["locales"][b];
  if (h !== undefined && this["currentLocaleID"] != b) {
    this["currentLocaleID"] = b;
    var j = this;
    if (typeof h == "string") {
      var k = new XMLHttpRequest();
      k["onreadystatechange"] = function () {
        if (k["readyState"] == 0x4) {
          if (k["status"] == 0xc8) {
            j["locales"][b] = j["currentLocaleMap"] = j[
              "_parsePropertiesContent"
            ](k["responseText"]);
            j["dispatchEvent"](
              j["createNewEvent"](
                TDV["Tour"]["LocaleManager"]["EVENT_LOCALE_CHANGED"]
              )
            );
          } else {
            throw h + "\x20can\x27t\x20be\x20loaded";
          }
        }
      };
      var l = h;
      if (this["queryParam"])
        l += (l["indexOf"]("?") == -0x1 ? "?" : "&") + this["queryParam"];
      k["open"]("GET", l);
      k["send"]();
    } else {
      this["currentLocaleMap"] = h;
      this["dispatchEvent"](
        this["createNewEvent"](
          TDV["Tour"]["LocaleManager"]["EVENT_LOCALE_CHANGED"]
        )
      );
    }
  }
};
TDV["Tour"]["LocaleManager"]["prototype"]["trans"] = function (a) {
  var b = this["currentLocaleMap"][a];
  if (b && arguments["length"] > 0x2) {
    var c = typeof arguments[0x2] == "object" ? arguments[0x2] : undefined;
    var d = arguments;
    function e(f) {
      return /^\d+$/["test"](f);
    }
    b = b["replace"](
      /\{\{([\w\.]+)\}\}/g,
      function (f, g) {
        if (e(g)) g = d[parseInt(g) + 0x1];
        else if (c !== undefined) g = c[g];
        if (typeof g == "string") g = this["currentLocaleMap"][g] || g;
        else if (typeof g == "function") g = g["call"](this["rootPlayer"]);
        return g !== undefined ? g : "";
      }["bind"](this)
    );
  }
  return b;
};
TDV["Tour"]["LocaleManager"]["prototype"]["_parsePropertiesContent"] =
  function (a) {
    a = a["replace"](/(^|\n)#[^\n]*/g, "");
    var b = {};
    var c = a["split"]("\x0a");
    for (var d = 0x0, e = c["length"]; d < e; ++d) {
      var f = c[d]["trim"]();
      if (f["length"] == 0x0) {
        continue;
      }
      var g = f["indexOf"]("=");
      if (g == -0x1) {
        console["error"]("Locale\x20parser:\x20Invalid\x20line\x20" + d);
        continue;
      }
      var h = f["substr"](0x0, g)["trim"]();
      var j = f["substr"](g + 0x1)["trim"]();
      var k;
      while (
        (k = j["lastIndexOf"]("\x5c")) != -0x1 &&
        k == j["length"] - 0x1 &&
        ++d < e
      ) {
        j = j["substr"](0x0, j["length"] - 0x2);
        f = c[d];
        if (f["length"] == 0x0) break;
        j += "\x0a" + f;
        j = j["trim"]();
      }
      b[h] = j;
    }
    return b;
  };
TDV["Tour"]["HistoryData"] = function (a) {
  this["playList"] = a;
  this["list"] = [];
  this["pointer"] = -0x1;
};
TDV["Tour"]["HistoryData"]["prototype"]["add"] = function (a) {
  if (
    this["pointer"] < this["list"]["length"] &&
    this["list"][this["pointer"]] == a
  ) {
    return;
  }
  ++this["pointer"];
  this["list"]["splice"](
    this["pointer"],
    this["list"]["length"] - this["pointer"],
    a
  );
};
TDV["Tour"]["HistoryData"]["prototype"]["back"] = function () {
  if (!this["canBack"]()) return;
  this["playList"]["set"]("selectedIndex", this["list"][--this["pointer"]]);
};
TDV["Tour"]["HistoryData"]["prototype"]["forward"] = function () {
  if (!this["canForward"]()) return;
  this["playList"]["set"]("selectedIndex", this["list"][++this["pointer"]]);
};
TDV["Tour"]["HistoryData"]["prototype"]["canBack"] = function () {
  return this["pointer"] > 0x0;
};
TDV["Tour"]["HistoryData"]["prototype"]["canForward"] = function () {
  return (
    this["pointer"] >= 0x0 && this["pointer"] < this["list"]["length"] - 0x1
  );
};
TDV["Tour"]["Script"] = function () {};
TDV["Tour"]["Script"]["assignObjRecursively"] = function (a, b) {
  for (var c in a) {
    var d = a[c];
    if (typeof d == "object" && d !== null)
      this["assignObjRecursively"](a[c], b[c] || (b[c] = {}));
    else b[c] = d;
  }
  return b;
};
TDV["Tour"]["Script"]["autotriggerAtStart"] = function (a, b, c) {
  var d = function (e) {
    b();
    if (c == !![]) a["unbind"]("change", d, this);
  };
  a["bind"]("change", d, this);
};
TDV["Tour"]["Script"]["changeBackgroundWhilePlay"] = function (a, b, c) {
  var d = function () {
    e["unbind"]("stop", d, this);
    if (
      c == g["get"]("backgroundColor") &&
      j == g["get"]("backgroundColorRatios")
    ) {
      g["set"]("backgroundColor", h);
      g["set"]("backgroundColorRatios", i);
    }
  };
  var e = a["get"]("items")[b];
  var f = e["get"]("player");
  var g = f["get"]("viewerArea");
  var h = g["get"]("backgroundColor");
  var i = g["get"]("backgroundColorRatios");
  var j = [0x0];
  if (c != h || j != i) {
    g["set"]("backgroundColor", c);
    g["set"]("backgroundColorRatios", j);
    e["bind"]("stop", d, this);
  }
};
TDV["Tour"]["Script"]["changeOpacityWhilePlay"] = function (a, b, c) {
  var d = function () {
    e["unbind"]("stop", d, this);
    if (h == g["get"]("backgroundOpacity")) {
      g["set"]("opacity", h);
    }
  };
  var e = a["get"]("items")[b];
  var f = e["get"]("player");
  var g = f["get"]("viewerArea");
  var h = g["get"]("backgroundOpacity");
  if (c != h) {
    g["set"]("backgroundOpacity", c);
    e["bind"]("stop", d, this);
  }
};
TDV["Tour"]["Script"]["changePlayListWithSameSpot"] = function (a, b) {
  var c = a["get"]("selectedIndex");
  if (c >= 0x0 && b >= 0x0 && c != b) {
    var d = a["get"]("items")[c];
    var e = a["get"]("items")[b];
    var f = d["get"]("player");
    var g = e["get"]("player");
    if (
      (f["get"]("class") == "PanoramaPlayer" ||
        f["get"]("class") == "Video360Player") &&
      (g["get"]("class") == "PanoramaPlayer" ||
        g["get"]("class") == "Video360Player")
    ) {
      var h = this["cloneCamera"](e["get"]("camera"));
      this["setCameraSameSpotAsMedia"](h, d["get"]("media"));
      this["startPanoramaWithCamera"](e["get"]("media"), h);
    }
  }
};
TDV["Tour"]["Script"]["clone"] = function (a, b) {
  var c = this["rootPlayer"]["createInstance"](a["get"]("class"));
  var d = a["get"]("id");
  if (d) {
    var e = d + "_" + Math["random"]()["toString"](0x24)["substring"](0x2, 0xf);
    c["set"]("id", e);
    this[e] = c;
  }
  for (var f = 0x0; f < b["length"]; ++f) {
    var g = b[f];
    var h = a["get"](g);
    if (h) c["set"](g, h);
  }
  return c;
};
TDV["Tour"]["Script"]["cloneCamera"] = function (a) {
  var b = this["clone"](a, [
    "manualRotationSpeed",
    "manualZoomSpeed",
    "automaticRotationSpeed",
    "automaticZoomSpeed",
    "timeToIdle",
    "sequences",
    "draggingFactor",
    "hoverFactor",
  ]);
  var c = ["initialSequence", "idleSequence"];
  for (var d = 0x0; d < c["length"]; ++d) {
    var e = c[d];
    var g = a["get"](e);
    if (g) {
      var h = this["clone"](g, [
        "mandatory",
        "repeat",
        "restartMovementOnUserInteraction",
        "restartMovementDelay",
      ]);
      b["set"](e, h);
      var k = g["get"]("movements");
      var l = [];
      var m = [
        "easing",
        "duration",
        "hfovSpeed",
        "pitchSpeed",
        "yawSpeed",
        "path",
        "stereographicFactorSpeed",
        "targetYaw",
        "targetPitch",
        "targetHfov",
        "targetStereographicFactor",
        "hfovDelta",
        "pitchDelta",
        "yawDelta",
      ];
      for (var n = 0x0; n < k["length"]; ++n) {
        var o = k[n];
        var p = this["clone"](o, m);
        var q = o["getBindings"]("end");
        if (q["length"] > 0x0) {
          for (var r = 0x0; r < q["length"]; ++r) {
            var s = q[r];
            if (typeof s == "string") {
              s = s["replace"](a["get"]("id"), b["get"]("id"));
              s = new Function("event", s);
              p["bind"]("end", s, this);
            }
          }
        }
        l["push"](p);
      }
      h["set"]("movements", l);
    }
  }
  return b;
};
TDV["Tour"]["Script"]["copyObjRecursively"] = function (a) {
  var b = {};
  for (var c in a) {
    var d = a[c];
    if (typeof d == "object" && d !== null)
      b[c] = this["copyObjRecursively"](a[c]);
    else b[c] = d;
  }
  return b;
};
TDV["Tour"]["Script"]["copyToClipboard"] = function (a) {
  if (navigator["clipboard"]) {
    navigator["clipboard"]["writeText"](a);
  } else {
    var b = document["createElement"]("textarea");
    b["value"] = a;
    b["style"]["position"] = "fixed";
    document["body"]["appendChild"](b);
    b["focus"]();
    b["select"]();
    try {
      document["execCommand"]("copy");
    } catch (c) {}
    document["body"]["removeChild"](b);
  }
};
TDV["Tour"]["Script"]["executeFunctionWhenChange"] = function (a, b, c, d) {
  var e = undefined;
  var f = function (i) {
    if (i["data"]["previousSelectedIndex"] == b) {
      if (d) d["call"](this);
      if (c && e) e["unbind"]("end", c, this);
      a["unbind"]("change", f, this);
    }
  };
  if (c) {
    var g = a["get"]("items")[b];
    if (g["get"]("class") == "PanoramaPlayListItem") {
      var h = g["get"]("camera");
      if (h != undefined) e = h["get"]("initialSequence");
      if (e == undefined) e = h["get"]("idleSequence");
    } else {
      e = g["get"]("media");
    }
    if (e) {
      e["bind"]("end", c, this);
    }
  }
  a["bind"]("change", f, this);
};
TDV["Tour"]["Script"]["fixTogglePlayPauseButton"] = function (a) {
  var b = a["get"]("buttonPlayPause");
  if (typeof b !== "undefined" && a["get"]("state") == "playing") {
    if (!Array["isArray"](b)) b = [b];
    for (var c = 0x0; c < b["length"]; ++c) b[c]["set"]("pressed", !![]);
  }
};
TDV["Tour"]["Script"]["getActiveMediaWithViewer"] = function (a) {
  var b = this["getActivePlayerWithViewer"](a);
  if (b == undefined) {
    return undefined;
  }
  return this["getMediaFromPlayer"](b);
};
TDV["Tour"]["Script"]["getActivePlayerWithViewer"] = function (a) {
  var b = this["getCurrentPlayers"]();
  var c = b["length"];
  while (c-- > 0x0) {
    var d = b[c];
    if (d["get"]("viewerArea") == a) {
      var e = d["get"]("class");
      if (
        e == "PanoramaPlayer" &&
        (d["get"]("panorama") != undefined || d["get"]("video") != undefined)
      )
        return d;
      else if (
        (e == "VideoPlayer" || e == "Video360Player") &&
        d["get"]("video") != undefined
      )
        return d;
      else if (e == "PhotoAlbumPlayer" && d["get"]("photoAlbum") != undefined)
        return d;
      else if (e == "MapPlayer" && d["get"]("map") != undefined) return d;
    }
  }
  return undefined;
};
TDV["Tour"]["Script"]["getCurrentPlayerWithMedia"] = function (a) {
  var b = undefined;
  var c = undefined;
  switch (a["get"]("class")) {
    case "Panorama":
    case "LivePanorama":
    case "HDRPanorama":
      b = "PanoramaPlayer";
      c = "panorama";
      break;
    case "Video360":
      b = "PanoramaPlayer";
      c = "video";
      break;
    case "PhotoAlbum":
      b = "PhotoAlbumPlayer";
      c = "photoAlbum";
      break;
    case "Map":
      b = "MapPlayer";
      c = "map";
      break;
    case "Video":
      b = "VideoPlayer";
      c = "video";
      break;
  }
  if (b != undefined) {
    var d = this["getByClassName"](b);
    for (var e = 0x0; e < d["length"]; ++e) {
      var f = d[e];
      if (f["get"](c) == a) {
        return f;
      }
    }
  } else {
    return undefined;
  }
};
TDV["Tour"]["Script"]["getCurrentPlayers"] = function () {
  var a = this["getByClassName"]("PanoramaPlayer");
  a = a["concat"](this["getByClassName"]("VideoPlayer"));
  a = a["concat"](this["getByClassName"]("Video360Player"));
  a = a["concat"](this["getByClassName"]("PhotoAlbumPlayer"));
  a = a["concat"](this["getByClassName"]("MapPlayer"));
  return a;
};
TDV["Tour"]["Script"]["getGlobalAudio"] = function (a) {
  var b = window["currentGlobalAudios"];
  if (b != undefined && a["get"]("id") in b) {
    a = b[a["get"]("id")]["audio"];
  }
  return a;
};
TDV["Tour"]["Script"]["getMediaByName"] = function (a) {
  var b = this["getByClassName"]("Media");
  for (var c = 0x0, d = b["length"]; c < d; ++c) {
    var e = b[c];
    var f = e["get"]("data");
    if (f && f["label"] == a) {
      return e;
    }
  }
  return undefined;
};
TDV["Tour"]["Script"]["getMediaByTags"] = function (a, b) {
  return this["_getObjectsByTags"](a, ["Media"], "tags2Media", b);
};
TDV["Tour"]["Script"]["getOverlaysByTags"] = function (a, b) {
  return this["_getObjectsByTags"](
    a,
    ["HotspotPanoramaOverlay", "HotspotMapOverlay", "VideoPanoramaOverlay"],
    "tags2Overlays",
    b
  );
};
TDV["Tour"]["Script"]["getComponentsByTags"] = function (a, b) {
  return this["_getObjectsByTags"](a, ["UIComponent"], "tags2Components", b);
};
TDV["Tour"]["Script"]["_getObjectsByTags"] = function (a, b, c, d) {
  var e = this["get"]("data");
  var f = e[c];
  if (!f) {
    e[c] = f = {};
    for (var g = 0x0; g < b["length"]; ++g) {
      var h = b[g];
      var k = this["getByClassName"](h);
      for (var m = 0x0, o = k["length"]; m < o; ++m) {
        var q = k[m];
        var r = q["get"]("data");
        if (r && r["tags"]) {
          var s = r["tags"];
          for (var v = 0x0, w = s["length"]; v < w; ++v) {
            var x = s[v];
            if (x in f) f[x]["push"](q);
            else f[x] = [q];
          }
        }
      }
    }
  }
  var y = undefined;
  d = d || "and";
  for (var m = 0x0, o = a["length"]; m < o; ++m) {
    var A = f[a[m]];
    if (!A) continue;
    if (!y) y = A["concat"]();
    else {
      if (d == "and") {
        for (var v = y["length"] - 0x1; v >= 0x0; --v) {
          if (A["indexOf"](y[v]) == -0x1) y["splice"](v, 0x1);
        }
      } else if (d == "or") {
        for (var v = A["length"] - 0x1; v >= 0x0; --v) {
          var q = A[v];
          if (y["indexOf"](q) == -0x1) y["push"](q);
        }
      }
    }
  }
  return y || [];
};
TDV["Tour"]["Script"]["getComponentByName"] = function (a) {
  var b = this["getByClassName"]("UIComponent");
  for (var c = 0x0, d = b["length"]; c < d; ++c) {
    var e = b[c];
    var f = e["get"]("data");
    if (f != undefined && f["name"] == a) {
      return e;
    }
  }
  return undefined;
};
TDV["Tour"]["Script"]["getMainViewer"] = function () {
  var a = "MainViewer";
  return this[a] || this[a + "_mobile"];
};
TDV["Tour"]["Script"]["getMediaFromPlayer"] = function (a) {
  switch (a["get"]("class")) {
    case "PanoramaPlayer":
      return a["get"]("panorama") || a["get"]("video");
    case "VideoPlayer":
    case "Video360Player":
      return a["get"]("video");
    case "PhotoAlbumPlayer":
      return a["get"]("photoAlbum");
    case "MapPlayer":
      return a["get"]("map");
  }
};
TDV["Tour"]["Script"]["getMediaWidth"] = function (a) {
  switch (a["get"]("class")) {
    case "Video360":
      var b = a["get"]("video");
      if (b instanceof Array) {
        var c = 0x0;
        for (var d = 0x0; d < b["length"]; d++) {
          var e = b[d];
          if (e["get"]("width") > c) c = e["get"]("width");
        }
        return c;
      } else {
        return e["get"]("width");
      }
    default:
      return a["get"]("width");
  }
};
TDV["Tour"]["Script"]["getMediaHeight"] = function (a) {
  switch (a["get"]("class")) {
    case "Video360":
      var b = a["get"]("video");
      if (b instanceof Array) {
        var c = 0x0;
        for (var d = 0x0; d < b["length"]; d++) {
          var e = b[d];
          if (e["get"]("height") > c) c = e["get"]("height");
        }
        return c;
      } else {
        return e["get"]("height");
      }
    default:
      return a["get"]("height");
  }
};
TDV["Tour"]["Script"]["getOverlays"] = function (a) {
  switch (a["get"]("class")) {
    case "LivePanorama":
    case "HDRPanorama":
    case "Panorama":
      var b = a["get"]("overlays")["concat"]() || [];
      var c = a["get"]("frames");
      for (var d = 0x0; d < c["length"]; ++d) {
        b = b["concat"](c[d]["get"]("overlays") || []);
      }
      return b;
    case "Video360":
    case "Map":
      return a["get"]("overlays") || [];
    default:
      return [];
  }
};
TDV["Tour"]["Script"]["getPanoramaOverlayByName"] = function (a, b) {
  var c = this["getOverlays"](a);
  for (var d = 0x0, e = c["length"]; d < e; ++d) {
    var f = c[d];
    var g = f["get"]("data");
    if (g != undefined && g["label"] == b) {
      return f;
    }
  }
  return undefined;
};
TDV["Tour"]["Script"]["getPanoramaOverlaysByTags"] = function (a, b, c) {
  var d = [];
  var e = this["getOverlays"](a);
  var f = this["getOverlaysByTags"](b, c);
  for (var g = 0x0, h = e["length"]; g < h; ++g) {
    var j = e[g];
    if (f["indexOf"](j) != -0x1) d["push"](j);
  }
  return d;
};
TDV["Tour"]["Script"]["getPixels"] = function (a) {
  var b = /((\+|-)?d+(.d*)?)(px|vw|vh|vmin|vmax)?/i["exec"](a);
  if (b == undefined) {
    return 0x0;
  }
  var c = parseFloat(b[0x1]);
  var d = b[0x4];
  var e = this["rootPlayer"]["get"]("actualWidth") / 0x64;
  var f = this["rootPlayer"]["get"]("actualHeight") / 0x64;
  switch (d) {
    case "vw":
      return c * e;
    case "vh":
      return c * f;
    case "vmin":
      return c * Math["min"](e, f);
    case "vmax":
      return c * Math["max"](e, f);
    default:
      return c;
  }
};
TDV["Tour"]["Script"]["getPlayListsWithMedia"] = function (a, b) {
  var c = [];
  var d = this["getByClassName"]("PlayList");
  for (var e = 0x0, f = d["length"]; e < f; ++e) {
    var g = d[e];
    if (b && g["get"]("selectedIndex") == -0x1) continue;
    var h = this["getPlayListItemByMedia"](g, a);
    if (h != undefined && h["get"]("player") != undefined) c["push"](g);
  }
  return c;
};
TDV["Tour"]["Script"]["_getPlayListsWithViewer"] = function (a) {
  var b = this["getByClassName"]("PlayList");
  var c = function (e) {
    var f = e["get"]("items");
    for (var g = f["length"] - 0x1; g >= 0x0; --g) {
      var h = f[g];
      var k = h["get"]("player");
      if (k !== undefined && k["get"]("viewerArea") == a) return !![];
    }
    return ![];
  };
  for (var d = b["length"] - 0x1; d >= 0x0; --d) {
    if (!c(b[d])) b["splice"](d, 0x1);
  }
  return b;
};
TDV["Tour"]["Script"]["getPlayListWithItem"] = function (a) {
  var b = this["getByClassName"]("PlayList");
  for (var c = b["length"] - 0x1; c >= 0x0; --c) {
    var d = b[c];
    var e = d["get"]("items");
    for (var f = e["length"] - 0x1; f >= 0x0; --f) {
      var g = e[f];
      if (g == a) return d;
    }
  }
  return undefined;
};
TDV["Tour"]["Script"]["getFirstPlayListWithMedia"] = function (a, b) {
  var c = this["getPlayListsWithMedia"](a, b);
  return c["length"] > 0x0 ? c[0x0] : undefined;
};
TDV["Tour"]["Script"]["getPlayListItemByMedia"] = function (a, b) {
  var c = a["get"]("items");
  for (var d = 0x0, e = c["length"]; d < e; ++d) {
    var f = c[d];
    if (f["get"]("media") == b) return f;
  }
  return undefined;
};
TDV["Tour"]["Script"]["getPlayListItems"] = function (a, b) {
  var c = (function () {
    switch (a["get"]("class")) {
      case "Panorama":
      case "LivePanorama":
      case "HDRPanorama":
        return "PanoramaPlayListItem";
      case "Video360":
        return "Video360PlayListItem";
      case "PhotoAlbum":
        return "PhotoAlbumPlayListItem";
      case "Map":
        return "MapPlayListItem";
      case "Video":
        return "VideoPlayListItem";
    }
  })();
  if (c != undefined) {
    var d = this["getByClassName"](c);
    for (var e = d["length"] - 0x1; e >= 0x0; --e) {
      var f = d[e];
      if (
        f["get"]("media") != a ||
        (b != undefined && f["get"]("player") != b)
      ) {
        d["splice"](e, 0x1);
      }
    }
    return d;
  } else {
    return [];
  }
};
TDV["Tour"]["Script"]["historyGoBack"] = function (a) {
  var b = this["get"]("data")["history"][a["get"]("id")];
  if (b != undefined) {
    b["back"]();
  }
};
TDV["Tour"]["Script"]["historyGoForward"] = function (a) {
  var b = this["get"]("data")["history"][a["get"]("id")];
  if (b != undefined) {
    b["forward"]();
  }
};
TDV["Tour"]["Script"]["init"] = function () {
  var a = this["get"]("data")["history"];
  var b = function (l) {
    var m = l["source"];
    var n = m["get"]("selectedIndex");
    if (n < 0x0) return;
    var o = m["get"]("id");
    if (!a["hasOwnProperty"](o)) a[o] = new TDV["Tour"]["HistoryData"](m);
    a[o]["add"](n);
  };
  var c = this["getByClassName"]("PlayList");
  for (var e = 0x0, f = c["length"]; e < f; ++e) {
    var g = c[e];
    g["bind"]("change", b, this);
  }
  if (this["getMainViewer"]()["get"]("translationTransitionEnabled")) {
    var h = this["getByClassName"]("ThumbnailList");
    h = h["concat"](this["getByClassName"]("ThumbnailGrid"));
    h = h["concat"](this["getByClassName"]("DropDown"));
    function l(m) {
      var n = m["source"]["get"]("playList");
      var o = n["get"]("selectedIndex");
      if (o >= 0x0) {
        this["skip3DTransitionOnce"](n["get"]("items")[o]["get"]("player"));
      }
    }
    for (var e = 0x0, j = h["length"]; e < j; ++e) {
      var k = h[e];
      k["bind"]("change", l, this);
    }
  }
};
TDV["Tour"]["Script"]["sendAnalyticsData"] = function (a, b, c) {
  if (window["dataLayer"]) {
    window["dataLayer"]["push"]({ event: b, label: c, category: a });
  }
  if (!this["get"]("data")["tour"]["player"]["cookiesEnabled"]) return;
  if (window["ga"]) {
    window["ga"]("send", "event", a, b, c);
  }
  if (window["gtag"]) {
    window["gtag"]("event", b, { category: a, label: c });
  }
};
TDV["Tour"]["Script"]["initAnalytics"] = function () {
  var b = this["getByClassName"]("Panorama");
  b = b["concat"](this["getByClassName"]("Video360"));
  b = b["concat"](this["getByClassName"]("Map"));
  for (var f = 0x0, k = b["length"]; f < k; ++f) {
    var l = b[f];
    var o = l["get"]("data");
    var p = o ? o["label"] : undefined;
    var q = this["getOverlays"](l);
    for (var r = 0x0, s = q["length"]; r < s; ++r) {
      var t = q[r];
      var u =
        t["get"]("data") != undefined
          ? p + "\x20-\x20" + t["get"]("data")["label"]
          : p;
      switch (t["get"]("class")) {
        case "FlatHotspotPanoramaOverlay":
        case "HotspotPanoramaOverlay":
        case "HotspotMapOverlay":
        case "AreaHotspotMapOverlay":
          var v = t["get"]("areas");
          for (var w = 0x0; w < v["length"]; ++w) {
            v[w]["bind"](
              "click",
              this["sendAnalyticsData"]["bind"](this, "Hotspot", "click", u),
              this,
              ![]
            );
          }
          break;
        case "CeilingCapPanoramaOverlay":
        case "TripodCapPanoramaOverlay":
          t["bind"](
            "click",
            this["sendAnalyticsData"]["bind"](this, "Cap", "click", u),
            this,
            ![]
          );
          break;
        case "VideoPanoramaOverlay":
          t["bind"](
            "click",
            this["sendAnalyticsData"]["bind"](this, "Hotspot", "click", u),
            this,
            ![]
          );
          t["bind"](
            "start",
            this["sendAnalyticsData"]["bind"](this, "Hotspot", "start", u),
            this,
            ![]
          );
          break;
      }
    }
  }
  var x = this["getByClassName"]("UIComponent");
  for (var f = 0x0, k = x["length"]; f < k; ++f) {
    var y = x[f];
    var A = y["getBindings"]("click");
    if (A["length"] > 0x0) {
      var B = y["get"]("data")["name"];
      y["bind"](
        "click",
        this["sendAnalyticsData"]["bind"](this, "Skin", "click", B),
        this,
        ![]
      );
    }
  }
  var C = this["getByClassName"]("PlayListItem");
  var D = {};
  for (var f = 0x0, k = C["length"]; f < k; ++f) {
    var E = C[f];
    var b = E["get"]("media");
    if (!(b["get"]("id") in D)) {
      var o = b["get"]("data");
      E["bind"](
        "begin",
        this["sendAnalyticsData"]["bind"](
          this,
          "Media",
          "play",
          o ? o["label"] : undefined
        ),
        this,
        ![]
      );
      D[b["get"]("id")] = E;
    }
  }
  if (TDV["Remote"] != undefined) {
    var F = undefined;
    TDV["Remote"]["bind"](
      TDV["Remote"]["EVENT_CALL_BEGIN"],
      function (G) {
        F = Date["now"]();
        this["sendAnalyticsData"](
          "Live\x20Guided\x20Tour",
          "Start\x20Call",
          "Guest:\x20" + G
        );
      }["bind"](this)
    );
    TDV["Remote"]["bind"](
      TDV["Remote"]["EVENT_CALL_END"],
      function (G) {
        var H = new Date();
        H["setTime"](Date["now"]() - F);
        this["sendAnalyticsData"](
          "Live\x20Guided\x20Tour",
          "End\x20Call",
          "Guest:\x20" +
            G +
            "\x20Duration:\x20" +
            H["toUTCString"]()["split"]("\x20")[0x4]
        );
      }["bind"](this)
    );
  }
};
TDV["Tour"]["Script"]["initQuiz"] = function (a, b, c) {
  var d = {
    question: {
      veil: { backgroundColor: "#000000", backgroundOpacity: 0.2 },
      window: {
        width: "60%",
        height: "60%",
        backgroundColor: "#ffffff",
        backgroundOpacity: 0.9,
        borderRadius: 0x5,
        horizontalAlign: "center",
        minWidth: 0x1f4,
        paddingBottom: 0x14,
        paddingLeft: 0x14,
        paddingRight: 0x14,
        paddingTop: 0x14,
        shadowBlurRadius: 0x4,
        shadow: !![],
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowHorizontalLength: 0x0,
        shadowVerticalLength: 0x0,
        shadowSpread: 0x4,
        title: {
          fontColor: "#000000",
          fontFamily: "Arial",
          fontSize: 0x14,
          fontWeight: "600",
          paddingLeft: 0x32,
          paddingRight: 0x32,
          paddingBottom: 0x28,
          paddingTop: 0x19,
          textAlign: "center",
        },
        buttonsContainer: {
          horizontalAlign: "right",
          verticalAlign: "bottom",
          button: {
            backgroundColor: "#000000",
            backgroundOpacity: 0.7,
            borderRadius: 0x3,
            fontColor: "#ffffff",
            fontFamily: "Arial",
            fontSize: 0x12,
            fontWeight: "600",
            horizontalAlign: "center",
            paddingLeft: 0x19,
            paddingRight: 0x19,
            paddingTop: 0xa,
            paddingBottom: 0xa,
            verticalAlign: "middle",
          },
        },
        bodyContainer: {
          width: "100%",
          height: "100%",
          gap: 0x23,
          layout: "horizontal",
          paddingLeft: 0x1e,
          paddingRight: 0x1e,
          paddingBottom: 0x1e,
        },
        mediaContainer: {
          width: "70%",
          height: "100%",
          buttonNext: {
            iconURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAlCAMAAACAj7KHAAAAA3NCSVQICAjb4U/gAAAAS1BMVEX///8AAAAAAAAAAAAAAACVlZWLi4uDg4MAAAC8vLx8fHx5eXl2dnZ0dHRxcXHDw8PAwMBra2tjY2PY2NiLi4v7+/v5+fn////7+/sWSBTRAAAAGXRSTlMAESIzRFVVVVVmZmZmZmZ3d3d3mZnu7v//nfgMagAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDYvMjkvMTUTtAt+AAAAjElEQVQokbXTyRaAIAgFUJHmeTL7/y9Naie+Toti2T0R4suYH4qI0HNKGpGV0iYwuoLFlEzeu0YT2dqH2jtFZHN3UR9T6FamKQi3O6Q+STL2O4r6WR4QcTZfdIQjR6NzttxUaKk2Eb/qdql34HfgbPA8eAdwb3jXD/eD7xTnAGcH5g1n9CHXBv8Ln9UJhXMPrAhUbYMAAAAASUVORK5CYII=",
            width: 0x19,
            height: 0x25,
          },
          buttonPrevious: {
            iconURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAlCAMAAACAj7KHAAAAA3NCSVQICAjb4U/gAAAAS1BMVEX///8AAAAAAAAAAAAAAACVlZWLi4uDg4MAAAC8vLx8fHx5eXl2dnZ0dHRxcXHDw8PAwMBra2tjY2PY2NiLi4v7+/v5+fn////7+/sWSBTRAAAAGXRSTlMAESIzRFVVVVVmZmZmZmZ3d3d3mZnu7v//nfgMagAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDYvMjkvMTUTtAt+AAAAkElEQVQokbXSyRaDIAwFUALOQ7W2iP//pQK6CGheF55mmXuYwlPqn0VEUp/uzPd0qAuFvqnsdKEInXVuziTCsDpfraYcxgi25MKh5rsxWHvDhMMIIJWf8EpAeei2CO/CJK8kXR2w5ED6E8B9m0zkNegc8W7ye8AM5LmBWYP/AX8KcgCyA/IGMqrkXJ92239aO3W4D6yL2ECSAAAAAElFTkSuQmCC",
            width: 0x19,
            height: 0x25,
          },
          viewerArea: {
            playbackBarBackgroundColor: "#000000",
            playbackBarBackgroundOpacity: 0.5,
            playbackBarBorderRadius: 0x0,
            playbackBarBorderSize: 0x0,
            playbackBarBottom: 0x5,
            playbackBarHeight: 0x6,
            playbackBarLeft: 0x0,
            playbackBarRight: 0x0,
            playbackBarProgressBackgroundColor: "#3399ff",
            playbackBarProgressOpacity: 0.5,
            playbackBarHeadBackgroundColor: "#cccccc",
            playbackBarHeadBorderColor: "#ffffff",
            playbackBarHeadBorderRadius: 0x7,
            playbackBarHeadBorderSize: 0x3,
            playbackBarHeadOpacity: 0x1,
            playbackBarHeadWidth: 0xe,
            playbackBarHeadHeight: 0xe,
            playbackBarHeadShadow: !![],
            playbackBarHeadShadowBlurRadius: 0x2,
            playbackBarHeadShadowColor: "#000000",
            playbackBarHeadShadowHorizontalLength: 0x0,
            playbackBarHeadShadowOpacity: 0.3,
            playbackBarHeadShadowSpread: 0x2,
            playbackBarHeadShadowVerticalLength: 0x0,
            backgroundColor: "#e6e6e6",
            backgroundOpacity: 0x1,
          },
        },
        optionsContainer: {
          gap: 0xa,
          width: "30%",
          height: "100%",
          overflow: "scroll",
          contentOpaque: !![],
        },
        option: {
          gap: 0xa,
          text: {
            fontColor: "#404040",
            fontFamily: "Arial",
            fontSize: 0x12,
            paddingTop: 0x9,
            textAlign: "left",
            verticalAlign: "middle",
            selected: {
              fontColor: "#000000",
              fontFamily: "Arial",
              fontSize: 0x12,
              paddingTop: 0x9,
              textAlign: "left",
            },
          },
          label: {
            borderRadius: 0x13,
            backgroundColor: "#000000",
            backgroundOpacity: 0.2,
            fontColor: "#ffffff",
            fontFamily: "Arial",
            fontSize: 0x12,
            fontWeight: "bold",
            height: 0x26,
            horizontalAlign: "center",
            pressedBackgroundOpacity: 0x1,
            verticalAlign: "middle",
            width: 0x26,
            correct: {
              borderRadius: 0x13,
              backgroundColor: "#39b54a",
              backgroundOpacity: 0x1,
              fontColor: "#ffffff",
              fontFamily: "Arial",
              fontSize: 0x12,
              fontWeight: "bold",
              height: 0x26,
              horizontalAlign: "center",
              pressedBackgroundOpacity: 0x1,
              verticalAlign: "middle",
              width: 0x26,
            },
            incorrect: {
              borderRadius: 0x13,
              backgroundColor: "#ed1c24",
              backgroundOpacity: 0x1,
              fontColor: "#ffffff",
              fontFamily: "Arial",
              fontSize: 0x12,
              fontWeight: "bold",
              height: 0x26,
              horizontalAlign: "center",
              pressedBackgroundOpacity: 0x1,
              verticalAlign: "middle",
              width: 0x26,
            },
          },
        },
        closeButton: {
          backgroundColor: "#009FE3",
          height: 0x2d,
          iconColor: "#FFFFFF",
          iconLineWidth: 0x2,
          iconHeight: 0x12,
          iconWidth: 0x12,
          width: 0x2d,
        },
      },
    },
    score: {
      veil: { backgroundColor: "#000000", backgroundOpacity: 0.5 },
      window: {
        backgroundColor: "#ffffff",
        horizontalAlign: "center",
        minWidth: 0x1f4,
        maxWidth: 0x5dc,
        paddingBottom: 0x14,
        paddingLeft: 0x14,
        paddingRight: 0x14,
        paddingTop: 0x14,
        content: { width: "100%", horizontalAlign: "center" },
        closeButton: {
          backgroundColor: "#009fe3",
          height: 0x2d,
          iconColor: "#ffffff",
          iconLineWidth: 0x2,
          iconHeight: 0x12,
          iconWidth: 0x12,
          width: 0x2d,
        },
        title: {
          fontColor: "#000000",
          fontFamily: "Arial",
          fontSize: 0x32,
          fontWeight: "800",
          paddingBottom: 0xf,
          paddingTop: 0x32,
          textAlign: "center",
        },
        description: {
          fontColor: "#000000",
          fontFamily: "Arial",
          fontSize: 0x10,
          fontWeight: "400",
          paddingLeft: 0x64,
          paddingRight: 0x64,
          paddingBottom: 0xf,
          paddingTop: 0xf,
          textAlign: "center",
        },
        statsContainer: {
          gap: 0x14,
          horizontalAlign: "center",
          paddingLeft: 0x64,
          paddingRight: 0x64,
          paddingBottom: 0xf,
          paddingTop: 0xf,
          verticalAlign: "middle",
          overflow: "scroll",
          contentOpaque: !![],
        },
        stats: {
          borderColor: "#009fe3",
          borderSize: 0x1,
          borderRadius: 0x4b,
          gap: 0x0,
          height: 0x96,
          horizontalAlign: "center",
          layout: "vertical",
          verticalAlign: "middle",
          minWidth: 0x96,
          title: {
            fontColor: "#000000",
            fontFamily: "Arial",
            fontSize: 0x14,
            fontWeight: "400",
            paddingTop: 0xa,
            paddingLeft: 0x5,
            paddingRight: 0x5,
          },
          mainValue: {
            fontColor: "#000000",
            fontFamily: "Arial",
            fontSize: 0x28,
            fontWeight: "700",
          },
          secondaryValue: {
            fontColor: "#000000",
            fontFamily: "Arial",
            fontSize: 0x14,
            fontWeight: "700",
          },
          label: {
            fontColor: "#000000",
            fontFamily: "Arial",
            fontSize: 0xf,
            fontWeight: "400",
          },
        },
        calification: {
          fontColor: "#009fe3",
          fontFamily: "Arial",
          fontSize: 0x1e,
          fontWeight: "700",
          textAlign: "center",
          paddingLeft: 0x64,
          paddingRight: 0x64,
          paddingBottom: 0xa,
          paddingTop: 0xf,
          verticalAlign: "middle",
          width: "100%",
        },
        timeContainer: {
          gap: 0x5,
          horizontalAlign: "center",
          paddingLeft: 0x64,
          paddingRight: 0x64,
          paddingBottom: 0xf,
          paddingTop: 0xa,
          verticalAlign: "middle",
          width: "100%",
        },
        buttonsContainer: {
          gap: 0x8,
          paddingLeft: 0x64,
          paddingRight: 0x64,
          paddingBottom: 0x32,
          paddingTop: 0x23,
          horizontalAlign: "center",
          verticalAlign: "middle",
          width: "100%",
          button: {
            backgroundColor: "#009fe3",
            fontColor: "#ffffff",
            fontFamily: "Arial",
            fontSize: 0xf,
            fontWeight: "600",
            horizontalAlign: "center",
            paddingLeft: 0x19,
            paddingRight: 0x19,
            paddingTop: 0xc,
            paddingBottom: 0xc,
            verticalAlign: "middle",
          },
        },
      },
    },
    timeout: {
      veil: { backgroundColor: "#000000", backgroundOpacity: 0.5 },
      window: {
        backgroundColor: "#ffffff",
        horizontalAlign: "center",
        gap: 0xf,
        paddingBottom: 0x37,
        paddingLeft: 0x50,
        paddingRight: 0x50,
        paddingTop: 0x2d,
        icon: {
          height: 0x48,
          url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAUAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQAAgICAgICAgICAgMCAgIDBAMCAgMEBQQEBAQEBQYFBQUFBQUGBgcHCAcHBgkJCgoJCQwMDAwMDAwMDAwMDAwMDAEDAwMFBAUJBgYJDQsJCw0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgASAA+AwERAAIRAQMRAf/EAHQAAAICAwEBAAAAAAAAAAAAAAUGAAQCAwcBCQEBAAAAAAAAAAAAAAAAAAAAABAAAQMDAgMHAwMBCQAAAAAAAQIDBAARBSExQRITUWFxkbEiBoGhFFJiIzLB0UJygqJDYyQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APv5QSglBydzJZHqOf8AvkD3HQOqA37AaAjhZ85zJxG3Jjzja1EKQtxSgfaeBNB0eglBKANl8w1jGwkAOylj+NnsH6ld1BliMqjKMrVydN9mweQNtb2IPfagkzOY6EShb3VdTu017j9TsPOgQspNiTHELiQxFCebnItdZPEgCgu4fKwcekfkQuo8FEplJCSoAi1he3rQO8PKQZ+kd8Fe5aV7VeR3+lAMzGeGOdTHZbDz+inea4SlJ2GnE0FtOaiLxzmRTdSWQOqyP6kqJACT4k70CtmMLkPzJEhtKpTTpU51Li6Rvym54DagAMy5Mdt1pl5TSHwA6lJte1AQx+Em5ABxCQywf+degP8AlG5oGRr4lEAHWlPLVxKAlI+4VQYP/EmSD+NLWlXAOgKHmLelArTMfNxjiesko1u0+gnlJHYrTWg0uOyp8hBcUqRIc5W0Xtc8AKAyxgskmHNWptSFrSltuMCLrPUSSTrawtQHfk88x4yIjSrOSr9Qjg2N/M0ADAYkT3i++LxY5F0/rVvy+HbQPU5yRHhuKgsB15AAaatpa4GgFthwoKj7M/IYxpIc/AmL5VOBJI23FxqL70Hs5zJRIcZMNsTZCeRD61AkmwsVWuNzQEHWW5TBZkthSXUjqNnWx7j3dtBzDJwHMZMU1clH9cd3YlPD6igcUZhxeAdnJsZLIDTncskJ5v8AcDQLPyN0u5V8HZlKG0+HKCfuTQO+GYEbGRE2sVoDiz3r92vhe1B5jse5DclurmKlJlK5kg8N+8660HuQy8THKQh7nW64LpabAKrdupAoFub8pdc/jx7Jb5tA64AVa9iRcetBcw+PmtyBkslIUhxwFCGVq9yub9V9u4UGz5VHDkJqRb3sOWv+1eh+4FArQ3iMXmI99FJZcA7CHUg+ooJnkFGWmA8VJUP9SQaB9jtonYdhrnKUPxkIKk7j2gH70GzGx2IcYQ2ZAfMckOG4JCiSbEDbwoBmShz28i1lMe0iQtLfTWys2tuLi5Hb20GWHxKo6nps1pH5r6ytKRYhsHU2toCSeFBZyUGFknWGHpPTfYJWllC0hZSbX9pueG9BW+TrCMWtJ3dcQlP0PN/ZQJURJMLLK4BlsE95eRb0oDvyuIUvMTUj2OJ6Th7FDUeY9KC38XyCVsqx7irONErY70nUj6HWgJmNDwjc7IoS64XLKcRcHdWydBxPGguNZGM5BbnuK/HYcF/5NCNbW86DVkMozAitS+QyG3lJCCg6WUL3v4CgyRAiuy2sryrTIU2OUE2Aum2o7bG1An/JsgmTJTFaVzNRb86hsVnfy2oNkeEtr41PfKTzyihYH/WhabH1NA6zIrU2O7GeF0OC1+IPAjwoOYSosvEywlRLbrZ5mXk7KHAigbcf8ljPoDOQAZdtYu2u2rx7PSgPOtQslH6JKH45sQG1aC21ik0HqnYMFlDTjrbDTSQlCFqGw20OpoFTK/JeolUfHXSFaLkkWNv2jh4mgD4fEuZJ8FQKYrZ/nc7f2jvNB0zpt9Po8g6XLydO2nLa1reFBnQVZkKNOaLMlsLT/hVspJ7QeFAlTPi0tolUNYkt8EKISseeh86AKvFZJB5TAfJ/a2pQ8wDQZtYjJunlTBeB7VpKB5qtQMEH4qolLk90BO/QbNye4q/uoHJplphtLTKA22gWShOgFBsoP//Z",
          width: 0x3e,
        },
        title: {
          fontColor: "#000000",
          fontFamily: "Arial",
          fontSize: 0x28,
          fontWeight: "800",
          textAlign: "center",
          paddingBottom: 0x14,
        },
        button: {
          backgroundColor: "#009fe3",
          fontColor: "#ffffff",
          fontFamily: "Arial",
          fontSize: 0xf,
          fontWeight: "600",
          horizontalAlign: "center",
          paddingLeft: 0x19,
          paddingRight: 0x19,
          paddingTop: 0xc,
          paddingBottom: 0xc,
          verticalAlign: "middle",
        },
        buttonsContainer: {
          horizontalAlign: "center",
          width: "100%",
          gap: 0xa,
        },
      },
    },
  };
  a["theme"] = "theme" in a ? this["mixObject"](d, a["theme"]) : d;
  if (a["player"]["get"]("isMobile")) {
    var e = this["mixObject"](a["theme"], {
      question: {
        window: {
          width: "100%",
          height: "100%",
          minWidth: undefined,
          backgroundOpacity: 0x1,
          borderRadius: 0x0,
          paddingLeft: 0x0,
          paddingRight: 0x0,
          paddingBottom: 0x0,
          paddingTop: 0x0,
          verticalAlign: "middle",
          title: { paddingBottom: 0x19, paddingTop: 0x19 },
          bodyContainer: {
            layout: "vertical",
            horizontalAlign: "center",
            paddingLeft: 0x0,
            paddingRight: 0x0,
            gap: 0x14,
          },
          mediaContainer: { width: "100%", height: "45%" },
          optionsContainer: {
            width: "100%",
            height: "55%",
            paddingLeft: 0x14,
            paddingRight: 0x14,
          },
        },
      },
      score: {
        window: {
          description: { paddingLeft: 0xa, paddingRight: 0xa },
          calification: { fontSize: 0x14, paddingLeft: 0xa, paddingRight: 0xa },
        },
      },
    });
    a["theme"] = e;
  }
  var f = this["get"]("data");
  var g = document["getElementById"]("metaViewport");
  var h = g
    ? /initial-scale=(\d+(\.\d+)?)/["exec"](g["getAttribute"]("content"))
    : undefined;
  var i = h ? h[0x1] : 0x1;
  f["scorePortraitConfig"] = {
    theme: {
      window: {
        minWidth: 0xfa / i,
        maxHeight: 0x258 / i,
        content: { height: "100%" },
        statsContainer: {
          layout: "vertical",
          horizontalAlign: "center",
          maxHeight: 0x258,
          paddingLeft: 0x0,
          paddingRight: 0x0,
          width: "100%",
          height: "100%",
        },
        buttonsContainer: {
          paddingLeft: 0xa,
          paddingRight: 0xa,
          button: { paddingLeft: 0xf, paddingRight: 0xf },
        },
      },
    },
  };
  f["scoreLandscapeConfig"] = {
    theme: {
      window: {
        title: { fontSize: 0x1e, paddingTop: 0xa },
        stats: { height: 0x64 },
        buttonsContainer: { paddingBottom: 0x14, paddingTop: 0xa },
        description: { paddingBottom: 0x5, paddingTop: 0x5 },
      },
    },
  };
  var j = new TDV["Quiz"](a);
  j["setMaxListeners"](0x32);
  if (c === !![]) {
    j["bind"](
      TDV["Quiz"]["EVENT_PROPERTIES_CHANGE"],
      function () {
        if (
          (j["get"](TDV["Quiz"]["PROPERTY"]["QUESTIONS_ANSWERED"]) +
            j["get"](TDV["Quiz"]["PROPERTY"]["ITEMS_FOUND"])) /
            (j["get"](TDV["Quiz"]["PROPERTY"]["QUESTION_COUNT"]) +
              j["get"](TDV["Quiz"]["PROPERTY"]["ITEM_COUNT"])) ==
          0x1
        )
          j["finish"]();
      }["bind"](this)
    );
  }
  if (b === !![]) {
    j["start"]();
    if (this["get"]("data")["tour"]["_isPaused"]) j["pauseTimer"]();
  }
  f["quiz"] = j;
  f["quizConfig"] = a;
};
TDV["Tour"]["Script"]["_initSplitViewer"] = function (a) {
  function b() {
    var t = a["get"]("actualWidth");
    l["get"]("children")[0x0]["set"]("width", t);
    m["get"]("children")[0x0]["set"]("width", t);
    var u = p["get"]("left");
    var v = typeof u == "string" ? c(u) : u;
    v += p["get"]("actualWidth") * 0.5;
    l["set"]("width", d(v));
    m["set"]("width", d(t - v));
  }
  function c(t) {
    return (parseFloat(t["replace"]("%", "")) / 0x64) * a["get"]("actualWidth");
  }
  function d(t) {
    return (t / a["get"]("actualWidth")) * 0x64 + "%";
  }
  function e(t) {
    f(t["source"]);
  }
  function f(t) {
    var u = t == r ? q : r;
    if ((s && t != s) || !t || !u) return;
    var v =
      u["get"]("camera")["get"]("initialPosition")["get"]("yaw") -
      t["get"]("camera")["get"]("initialPosition")["get"]("yaw");
    u["setPosition"](
      t["get"]("yaw") + v,
      t["get"]("pitch"),
      t["get"]("roll"),
      t["get"]("hfov")
    );
  }
  function g(t) {
    s = t["source"];
  }
  function h(t) {
    i(t["source"]);
  }
  function i(t) {
    var u = t["get"]("viewerArea");
    if (u == n) {
      q = t;
      s = q;
    } else if (u == o) {
      r = t;
      s = q;
    }
    f(t);
  }
  function j(t) {
    var u = this["getCurrentPlayers"]();
    var v = u["length"];
    while (v-- > 0x0) {
      var x = u[v];
      if (x["get"]("viewerArea") != t) {
        u["splice"](v, 0x1);
      }
    }
    for (v = 0x0; v < u["length"]; ++v) {
      var x = u[v];
      x["bind"]("preloadMediaShow", h, this);
      x["bind"]("cameraPositionChange", e, this);
      x["bind"]("userInteractionStart", g, this);
      if (x["get"]("panorama")) i(x);
    }
    return u;
  }
  var k = a["get"]("children");
  var l = k[0x0];
  var m = k[0x1];
  var n = l["get"]("children")[0x0];
  var o = m["get"]("children")[0x0];
  var p = k[0x2];
  var q, r, s;
  j["call"](this, n);
  j["call"](this, o);
  a["bind"](
    "resize",
    function () {
      p["set"](
        "left",
        (a["get"]("actualWidth") - p["get"]("actualWidth")) * 0.5
      );
      b();
    },
    this
  );
  p["bind"](
    "mouseDown",
    function (t) {
      var u = t["pageX"];
      var v = function (w) {
        var x = w["pageX"];
        var y = u - x;
        var z = a["get"]("actualWidth");
        var A = p["get"]("left");
        var B = (typeof A == "string" ? c(A) : A) - y;
        if (B < 0x0) {
          x -= B;
          B = 0x0;
        } else if (B + p["get"]("actualWidth") >= z) {
          x -= B - (z - p["get"]("actualWidth"));
          B = z - p["get"]("actualWidth");
        }
        p["set"]("left", B);
        b();
        u = x;
      };
      this["bind"]("mouseMove", v, this);
      this["bind"](
        "mouseUp",
        function () {
          this["unbind"]("mouseMove", v, this);
        },
        this
      );
    },
    this
  );
  b();
};
TDV["Tour"]["Script"]["_initTwinsViewer"] = function (a) {
  function b() {
    var t = a["get"]("actualWidth");
    l["get"]("children")[0x0]["set"]("width", t);
    m["get"]("children")[0x0]["set"]("width", t);
    var u = p["get"]("left");
    var v = typeof u == "string" ? c(u) : u;
    v += p["get"]("actualWidth") * 0.5;
    l["set"]("width", d(v));
    m["set"]("width", d(t - v));
  }
  function c(t) {
    return (parseFloat(t["replace"]("%", "")) / 0x64) * a["get"]("actualWidth");
  }
  function d(t) {
    return (t / a["get"]("actualWidth")) * 0x64 + "%";
  }
  function e(t) {
    f(t["source"]);
  }
  function f(t) {
    var u = t == r ? q : r;
    if ((s && t != s) || !t || !u) return;
    var v =
      u["get"]("camera")["get"]("initialPosition")["get"]("yaw") -
      t["get"]("camera")["get"]("initialPosition")["get"]("yaw");
    u["setPosition"](
      t["get"]("yaw") + v,
      t["get"]("pitch"),
      t["get"]("roll"),
      t["get"]("hfov")
    );
  }
  function g(t) {
    s = t["source"];
  }
  function h(t) {
    i(t["source"]);
  }
  function i(t) {
    var u = t["get"]("viewerArea");
    if (u == n) {
      q = t;
      s = q;
    } else if (u == o) {
      r = t;
      s = q;
    }
    f(t);
  }
  function j(t) {
    var u = this["getCurrentPlayers"]();
    var v = u["length"];
    while (v-- > 0x0) {
      var x = u[v];
      if (x["get"]("viewerArea") != t) {
        u["splice"](v, 0x1);
      }
    }
    for (v = 0x0; v < u["length"]; ++v) {
      var x = u[v];
      x["bind"]("preloadMediaShow", h, this);
      x["bind"]("cameraPositionChange", e, this);
      x["bind"]("userInteractionStart", g, this);
      if (x["get"]("panorama")) i(x);
    }
    return u;
  }
  var k = a["get"]("children");
  var l = k[0x0];
  var m = k[0x1];
  var n = l["get"]("children")[0x0];
  var o = m["get"]("children")[0x0];
  var p = k[0x2];
  var q, r, s;
  j["call"](this, n);
  j["call"](this, o);
  a["bind"](
    "resize",
    function () {
      p["set"](
        "left",
        (a["get"]("actualWidth") - p["get"]("actualWidth")) * 0.5
      );
      b();
    },
    this
  );
  b();
};
TDV["Tour"]["Script"]["isCardboardViewMode"] = function () {
  var a = this["getByClassName"]("PanoramaPlayer");
  return a["length"] > 0x0 && a[0x0]["get"]("viewMode") == "cardboard";
};
TDV["Tour"]["Script"]["isPanorama"] = function (a) {
  return (
    ["Panorama", "HDRPanorama", "LivePanorama", "Video360", "VideoPanorama"][
      "indexOf"
    ](a["get"]("class")) != -0x1
  );
};
TDV["Tour"]["Script"]["keepCompVisible"] = function (a, b) {
  var c = "keepVisibility_" + a["get"]("id");
  var d = this["getKey"](c);
  if (d == undefined && b) {
    this["registerKey"](c, b);
  } else if (d != undefined && !b) {
    this["unregisterKey"](c);
  }
};
TDV["Tour"]["Script"]["_initItemWithComps"] = function (
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h
) {
  var j = a["get"]("items")[b];
  var k = j["get"]("media");
  var l = k["get"]("loop") == undefined || k["get"]("loop");
  var m = h > 0x0;
  var n = this["rootPlayer"];
  var o = function (w) {
    var x = f ? f["get"]("class") : undefined;
    var y = undefined;
    switch (x) {
      case "FadeInEffect":
      case "FadeOutEffect":
        y = n["createInstance"](w ? "FadeInEffect" : "FadeOutEffect");
        break;
      case "SlideInEffect":
      case "SlideOutEffect":
        y = n["createInstance"](w ? "SlideInEffect" : "SlideOutEffect");
        break;
    }
    if (y) {
      y["set"]("duration", f["get"]("duration"));
      y["set"]("easing", f["get"]("easing"));
      if (x["indexOf"]("Slide") != -0x1)
        y["set"](
          w ? "from" : "to",
          f["get"](f["get"]("class") == "SlideInEffect" ? "from" : "to")
        );
    }
    return y;
  };
  var p = function () {
    for (var w = 0x0, x = c["length"]; w < x; ++w) {
      var y = c[w];
      if (h > 0x0) {
        this["setComponentVisibility"](y, !e, 0x0, o(!e));
      } else {
        var z = "visibility_" + y["get"]("id");
        if (this["existsKey"](z)) {
          if (this["getKey"](z))
            this["setComponentVisibility"](y, !![], 0x0, o(!![]));
          else this["setComponentVisibility"](y, ![], 0x0, o(![]));
          this["unregisterKey"](z);
        }
      }
    }
    j["unbind"]("end", p, this);
    if (!l) k["unbind"]("end", p, this);
  };
  var q = function () {
    j["unbind"]("stop", q, this, !![]);
    j["unbind"]("stop", q, this);
    j["unbind"]("begin", q, this, !![]);
    j["unbind"]("begin", q, this);
    for (var w = 0x0, x = c["length"]; w < x; ++w) {
      this["keepCompVisible"](c[w], ![]);
    }
  };
  var r = function (w, x, y) {
    var z = function () {
      var A = function (E, F, G) {
        n["setComponentVisibility"](
          E,
          F,
          x,
          G,
          F ? "showEffect" : "hideEffect",
          ![]
        );
        if (y > 0x0) {
          var H = x + y + (G != undefined ? G["get"]("duration") : 0x0);
          n["setComponentVisibility"](
            E,
            !F,
            H,
            o(!F),
            F ? "hideEffect" : "showEffect",
            !![]
          );
        }
      };
      for (var B = 0x0, C = c["length"]; B < C; ++B) {
        var D = c[B];
        if (e == "toggle") {
          if (!D["get"]("visible")) A(D, !![], o(!![]));
          else A(D, ![], o(![]));
        } else {
          A(D, e, o(e));
        }
      }
      j["unbind"](w, z, this);
      if (w == "end" && !l) k["unbind"](w, z, this);
    };
    j["bind"](w, z, this);
    if (w == "end" && !l) k["bind"](w, z, this);
  };
  if (d == "begin") {
    for (var s = 0x0, t = c["length"]; s < t; ++s) {
      var u = c[s];
      this["keepCompVisible"](u, !![]);
      if (m) {
        var v = "visibility_" + u["get"]("id");
        this["registerKey"](v, u["get"]("visible"));
      }
    }
    j["bind"]("stop", q, this, !![]);
    j["bind"]("stop", q, this);
    j["bind"]("begin", q, this, !![]);
    j["bind"]("begin", q, this);
    if (m) {
      j["bind"]("end", p, this);
      if (!l) k["bind"]("end", p, this);
    }
  } else if (d == "end" && h > 0x0) {
    r("begin", h, 0x0);
    h = 0x0;
  }
  if (d != undefined) r(d, g, h);
};
TDV["Tour"]["Script"]["loadFromCurrentMediaPlayList"] = function (a, b, c) {
  var d = a["get"]("selectedIndex");
  var e = a["get"]("items")["length"];
  var f = (d + b) % e;
  while (f < 0x0) {
    f = e + f;
  }
  if (d != f) {
    if (c) {
      var g = a["get"]("items")[f];
      this["skip3DTransitionOnce"](g["get"]("player"));
    }
    a["set"]("selectedIndex", f);
  }
};
TDV["Tour"]["Script"]["mixObject"] = function (a, b) {
  return this["assignObjRecursively"](b, this["copyObjRecursively"](a));
};
TDV["Tour"]["Script"]["openLink"] = function (a, b) {
  if (!a || a == location["href"]) {
    return;
  }
  if (b == "_top" || b == "_self") {
    this["updateDeepLink"]();
  }
  var c =
    (window &&
      window["process"] &&
      window["process"]["versions"] &&
      window["process"]["versions"]["electron"]) ||
    (navigator &&
      navigator["userAgent"] &&
      navigator["userAgent"]["indexOf"]("Electron") >= 0x0);
  if (c && b == "_blank") {
    if (a["startsWith"]("/")) {
      var d = window["location"]["href"]["split"]("/");
      d["pop"]();
      a = d["join"]("/") + a;
    }
    var e = a["split"](".")["pop"]()["toLowerCase"]();
    if (
      ["pdf", "zip", "xls", "xlsx"]["indexOf"](e) == -0x1 ||
      a["startsWith"]("file://")
    ) {
      var f = window["require"]("electron")["shell"];
      f["openExternal"](a);
    } else {
      window["open"](a, b);
    }
  } else if (c && (b == "_top" || b == "_self")) {
    window["location"] = a;
  } else {
    var g = window["open"](a, b);
    g["focus"]();
  }
};
TDV["Tour"]["Script"]["pauseCurrentPlayers"] = function (a) {
  var b = this["getCurrentPlayers"]();
  var c = b["length"];
  while (c-- > 0x0) {
    var d = b[c];
    if (
      d["get"]("state") == "playing" ||
      (d["get"]("viewerArea") &&
        d["get"]("viewerArea")["get"]("id") == this["getMainViewer"]()) ||
      (d["get"]("camera") &&
        d["get"]("camera")["get"]("idleSequence") &&
        d["get"]("camera")["get"]("timeToIdle") > 0x0)
    ) {
      var e = this["getMediaFromPlayer"](d);
      if (a && e && e["get"]("class") != "Video360" && "pauseCamera" in d) {
        d["pauseCamera"]();
      } else {
        d["pause"]();
      }
    } else {
      b["splice"](c, 0x1);
    }
  }
  return b;
};
TDV["Tour"]["Script"]["pauseGlobalAudiosWhilePlayItem"] = function (a, b, c) {
  var d = function () {
    if (a["get"]("selectedIndex") != b) {
      this["resumeGlobalAudios"]();
    }
  };
  this["pauseGlobalAudios"](c, !![]);
  this["executeFunctionWhenChange"](a, b, d, d);
};
TDV["Tour"]["Script"]["pauseGlobalAudios"] = function (b, c) {
  this["stopTextToSpeech"]();
  if (window["pausedAudiosLIFO"] == undefined) window["pausedAudiosLIFO"] = [];
  var d = this["getByClassName"]("VideoPanoramaOverlay");
  for (var f = d["length"] - 0x1; f >= 0x0; --f) {
    var g = d[f];
    var h = g["get"]("data");
    if (h && h["hasAudio"] == ![]) d["splice"](f, 0x1);
  }
  var j = this["getByClassName"]("Audio")["concat"](d);
  var k = {};
  if (window["currentGlobalAudios"] != undefined)
    j = j["concat"](
      Object["values"](window["currentGlobalAudios"])["map"](function (o) {
        if (!o["allowResume"]) k[o["audio"]["get"]("id")] = o["audio"];
        return o["audio"];
      })
    );
  var l = [];
  for (var f = 0x0, m = j["length"]; f < m; ++f) {
    var n = j[f];
    if (
      n &&
      n["get"]("state") == "playing" &&
      (b == undefined || b["indexOf"](n) == -0x1)
    ) {
      if (n["get"]("id") in k) {
        n["stop"]();
      } else {
        n["pause"]();
        l["push"](n);
      }
    }
  }
  if (c || l["length"] > 0x0) window["pausedAudiosLIFO"]["push"](l);
  return l;
};
TDV["Tour"]["Script"]["resumeGlobalAudios"] = function () {
  if (window["pausedAudiosLIFO"] == undefined) return;
  if (window["resumeAudiosBlocked"]) {
    if (window["pausedAudiosLIFO"]["length"] > 0x1) {
      window["pausedAudiosLIFO"][window["pausedAudiosLIFO"]["length"] - 0x2] =
        window["pausedAudiosLIFO"][window["pausedAudiosLIFO"]["length"] - 0x2][
          "concat"
        ](
          window["pausedAudiosLIFO"][window["pausedAudiosLIFO"]["length"] - 0x1]
        );
      window["pausedAudiosLIFO"]["splice"](
        window["pausedAudiosLIFO"]["length"] - 0x1,
        0x1
      );
    }
    return;
  }
  var b = window["pausedAudiosLIFO"]["pop"]();
  if (!b) return;
  for (var c = 0x0, d = b["length"]; c < d; ++c) {
    var e = b[c];
    if (e["get"]("state") == "paused") e["play"]();
  }
};
TDV["Tour"]["Script"]["pauseGlobalAudio"] = function (a) {
  var b = window["currentGlobalAudios"];
  if (b) {
    var c = b[a["get"]("id")];
    if (c) a = c["audio"];
  }
  if (a["get"]("state") == "playing") a["pause"]();
};
TDV["Tour"]["Script"]["playAudioList"] = function (a, b) {
  if (a["length"] == 0x0) return;
  var c = -0x1;
  var d;
  var e = this["playGlobalAudio"];
  var f = function () {
    if (++c >= a["length"]) {
      if (!b) return;
      c = 0x0;
    }
    d = a[c];
    e(d, !![], f, !![]);
  };
  f();
};
TDV["Tour"]["Script"]["playGlobalAudioWhilePlay"] = function (
  a,
  b,
  c,
  d,
  e,
  g
) {
  var h = function (u) {
    if (u["data"]["previousSelectedIndex"] == b) {
      this["stopGlobalAudio"](c);
      if (m) {
        var v = l["get"]("media");
        var w = v["get"]("audios");
        w["splice"](w["indexOf"](c), 0x1);
        v["set"]("audios", w);
      }
      a["unbind"]("change", h, this);
      if (e) e();
    }
  };
  var k = window["currentGlobalAudios"];
  if (k && c["get"]("id") in k) {
    c = k[c["get"]("id")]["audio"];
    if (c["get"]("state") != "playing") {
      c["play"]();
    }
    return c;
  }
  a["bind"]("change", h, this);
  var l = a["get"]("items")[b];
  var m = l["get"]("class") == "PanoramaPlayListItem";
  if (m) {
    var n = l["get"]("media");
    var k = (n["get"]("audios") || [])["slice"]();
    if (c["get"]("class") == "MediaAudio") {
      var o = this["rootPlayer"]["createInstance"]("PanoramaAudio");
      o["set"]("autoplay", ![]);
      o["set"]("audio", c["get"]("audio"));
      o["set"]("loop", c["get"]("loop"));
      o["set"]("id", c["get"]("id"));
      var p = c["getBindings"]("stateChange");
      for (var q = 0x0; q < p["length"]; ++q) {
        var r = p[q];
        if (typeof r == "string") r = new Function("event", r);
        o["bind"]("stateChange", r, this);
      }
      c = o;
    }
    k["push"](c);
    n["set"]("audios", k);
  }
  var s = this["playGlobalAudio"](c, d, function () {
    a["unbind"]("change", h, this);
    if (e) e["call"](this);
  });
  if (g === !![]) {
    var t = function () {
      if (s["get"]("state") == "playing") {
        this["pauseGlobalAudios"]([s], !![]);
      } else if (s["get"]("state") == "stopped") {
        this["resumeGlobalAudios"]();
        s["unbind"]("stateChange", t, this);
      }
    };
    s["bind"]("stateChange", t, this);
  }
  return s;
};
TDV["Tour"]["Script"]["playGlobalAudio"] = function (a, b, c, d) {
  var e = function () {
    a["unbind"]("end", e, this);
    this["stopGlobalAudio"](a);
    if (c) c["call"](this);
  };
  a = this["getGlobalAudio"](a);
  var f = window["currentGlobalAudios"];
  if (!f) {
    f = window["currentGlobalAudios"] = {};
  }
  f[a["get"]("id")] = { audio: a, asBackground: d || ![], allowResume: b };
  if (a["get"]("state") == "playing") {
    return a;
  }
  if (!a["get"]("loop")) {
    a["bind"]("end", e, this);
  }
  a["play"]();
  return a;
};
TDV["Tour"]["Script"]["resumePlayers"] = function (a, b) {
  for (var c = 0x0; c < a["length"]; ++c) {
    var d = a[c];
    var e = this["getMediaFromPlayer"](d);
    if (!e) continue;
    if (b && e["get"]("class") != "Video360" && "pauseCamera" in d) {
      d["resumeCamera"]();
    } else {
      d["play"]();
    }
  }
};
TDV["Tour"]["Script"]["stopGlobalAudios"] = function (a) {
  var b = window["currentGlobalAudios"];
  var c = this;
  if (b) {
    Object["keys"](b)["forEach"](function (d) {
      var e = b[d];
      if (!a || (a && !e["asBackground"])) {
        c["stopGlobalAudio"](e["audio"]);
      }
    });
  }
};
TDV["Tour"]["Script"]["stopGlobalAudio"] = function (a) {
  var b = window["currentGlobalAudios"];
  if (b) {
    var c = b[a["get"]("id")];
    if (c) {
      a = c["audio"];
      delete b[a["get"]("id")];
      if (Object["keys"](b)["length"] == 0x0) {
        window["currentGlobalAudios"] = undefined;
      }
    }
  }
  if (a) a["stop"]();
};
TDV["Tour"]["Script"]["setCameraSameSpotAsMedia"] = function (a, b) {
  var c = this["getCurrentPlayerWithMedia"](b);
  if (c != undefined) {
    var d = a["get"]("initialPosition");
    d["set"]("yaw", c["get"]("yaw"));
    d["set"]("pitch", c["get"]("pitch"));
    d["set"]("hfov", c["get"]("hfov"));
  }
};
TDV["Tour"]["Script"]["setComponentVisibility"] = function (a, b, c, d, e, f) {
  var g = this["getKey"]("keepVisibility_" + a["get"]("id"));
  if (g) return;
  this["unregisterKey"]("visibility_" + a["get"]("id"));
  var h = function () {
    if (d && e) {
      a["set"](e, d);
    }
    a["set"]("visible", b);
    if (a["get"]("class") == "ViewerArea") {
      try {
        if (b) a["restart"]();
        else if (a["get"]("playbackState") == "playing") a["pause"]();
      } catch (n) {}
    }
  };
  var j = "effectTimeout_" + a["get"]("id");
  if (!f && window["hasOwnProperty"](j)) {
    var l = window[j];
    if (l instanceof Array) {
      for (var m = 0x0; m < l["length"]; m++) {
        clearTimeout(l[m]);
      }
    } else {
      clearTimeout(l);
    }
    delete window[j];
  } else if (b == a["get"]("visible") && !f) return;
  if (c && c > 0x0) {
    var l = setTimeout(function () {
      if (window[j] instanceof Array) {
        var n = window[j];
        var o = n["indexOf"](l);
        n["splice"](o, 0x1);
        if (n["length"] == 0x0) {
          delete window[j];
        }
      } else {
        delete window[j];
      }
      h();
    }, c);
    if (window["hasOwnProperty"](j)) {
      window[j] = [window[j], l];
    } else {
      window[j] = l;
    }
  } else {
    h();
  }
};
TDV["Tour"]["Script"]["setLocale"] = function (a) {
  this["stopTextToSpeech"]();
  var b = this["get"]("data")["localeManager"];
  if (b) this["get"]("data")["localeManager"]["setLocale"](a);
  else {
    this["get"]("data")["defaultLocale"] = a;
    this["get"]("data")["forceDefaultLocale"] = !![];
  }
};
TDV["Tour"]["Script"]["setEndToItemIndex"] = function (a, b, c) {
  var d = function () {
    if (a["get"]("selectedIndex") == b) {
      var e = a["get"]("items")[c];
      this["skip3DTransitionOnce"](e["get"]("player"));
      a["set"]("selectedIndex", c);
    }
  };
  this["executeFunctionWhenChange"](a, b, d);
};
TDV["Tour"]["Script"]["setMapLocation"] = function (a, b) {
  var c = function () {
    a["unbind"]("stop", c, this);
    d["set"]("mapPlayer", null);
  };
  a["bind"]("stop", c, this);
  var d = a["get"]("player");
  d["set"]("mapPlayer", b);
};
TDV["Tour"]["Script"]["setMainMediaByIndex"] = function (a) {
  var b = undefined;
  if (a >= 0x0 && a < this["mainPlayList"]["get"]("items")["length"]) {
    this["mainPlayList"]["set"]("selectedIndex", a);
    b = this["mainPlayList"]["get"]("items")[a];
  }
  return b;
};
TDV["Tour"]["Script"]["setMainMediaByName"] = function (a) {
  var b = this["getMainViewer"]();
  var c = this["_getPlayListsWithViewer"](b);
  for (var d = 0x0, e = c["length"]; d < e; ++d) {
    var f = c[d];
    var g = f["get"]("items");
    for (var h = 0x0, k = g["length"]; h < k; ++h) {
      var l = g[h];
      var m = l["get"]("media")["get"]("data");
      if (
        m !== undefined &&
        m["label"] == a &&
        l["get"]("player")["get"]("viewerArea") == b
      ) {
        f["set"]("selectedIndex", h);
        return l;
      }
    }
  }
};
TDV["Tour"]["Script"]["setMediaBehaviour"] = function (a, b, c, d) {
  var e = this;
  var f = function (D) {
    if (D["data"]["state"] == "stopped" && d) {
      k["call"](this, !![]);
    }
  };
  var g = function () {
    q["unbind"]("begin", g, e);
    var D = q["get"]("media");
    if (
      D["get"]("class") != "Panorama" ||
      (D["get"]("camera") != undefined &&
        D["get"]("camera")["get"]("initialSequence") != undefined)
    ) {
      r["bind"]("stateChange", f, e);
    }
  };
  var h = function () {
    var D = n["get"]("selectedIndex");
    if (D != -0x1) {
      p = D;
      k["call"](this, ![]);
    }
  };
  var j = function () {
    k["call"](this, ![]);
  };
  var k = function (D) {
    if (!n) return;
    var E = q["get"]("media");
    if (
      (E["get"]("class") == "Video360" || E["get"]("class") == "Video") &&
      E["get"]("loop") == !![] &&
      !D
    )
      return;
    a["set"]("selectedIndex", -0x1);
    if (y && x != -0x1) {
      if (y) {
        if (
          x > 0x0 &&
          y["get"]("movements")[x - 0x1]["get"]("class") ==
            "TargetPanoramaCameraMovement"
        ) {
          var F = z["get"]("initialPosition");
          var G = F["get"]("yaw");
          var H = F["get"]("pitch");
          var I = F["get"]("hfov");
          var J = y["get"]("movements")[x - 0x1];
          F["set"]("yaw", J["get"]("targetYaw"));
          F["set"]("pitch", J["get"]("targetPitch"));
          F["set"]("hfov", J["get"]("targetHfov"));
          var K = function (N) {
            F["set"]("yaw", G);
            F["set"]("pitch", H);
            F["set"]("hfov", I);
            t["unbind"]("end", K, this);
          };
          t["bind"]("end", K, this);
        }
        y["set"]("movementIndex", x);
      }
    }
    if (r) {
      q["unbind"]("begin", g, this);
      r["unbind"]("stateChange", f, this);
      for (var L = 0x0; L < A["length"]; ++L) {
        A[L]["unbind"]("click", j, this);
      }
    }
    if (w) {
      var M = this["getMediaFromPlayer"](r);
      if (
        n["get"]("items")["length"] > 0x1 &&
        (M == undefined || M == q["get"]("media"))
      ) {
        n["set"]("selectedIndex", p);
      }
      if (a != n) n["unbind"]("change", h, this);
    } else {
      u["set"]("visible", v);
    }
    n = undefined;
  };
  if (!c) {
    var l = a["get"]("selectedIndex");
    var m =
      l != -0x1
        ? a["get"]("items")[a["get"]("selectedIndex")]["get"]("player")
        : this["getActivePlayerWithViewer"](this["getMainViewer"]());
    if (m) {
      c = this["getMediaFromPlayer"](m);
    }
  }
  var n = undefined;
  if (c) {
    var o = this["getPlayListsWithMedia"](c, !![]);
    n = o["indexOf"](a) != -0x1 ? a : o["length"] > 0x0 ? o[0x0] : undefined;
  }
  if (!n) {
    a["set"]("selectedIndex", b);
    return;
  }
  var p = n["get"]("selectedIndex");
  var q = a["get"]("items")[b];
  var r = q["get"]("player");
  var s = this["getMediaFromPlayer"](r);
  if ((a["get"]("selectedIndex") == b && s == q["get"]("media")) || p == -0x1) {
    return;
  }
  if (a["get"]("selectedIndex") == b && s != q["get"]("media"))
    a["set"]("selectedIndex", -0x1);
  var t = n["get"]("items")[p];
  var u = r["get"]("viewerArea");
  var v = u["get"]("visible");
  var w = u == t["get"]("player")["get"]("viewerArea");
  if (w) {
    if (a != n) {
      n["set"]("selectedIndex", -0x1);
      n["bind"]("change", h, this);
    }
  } else {
    u["set"]("visible", !![]);
  }
  var x = -0x1;
  var y = undefined;
  var z = t["get"]("camera");
  if (z) {
    y = z["get"]("initialSequence");
    if (y) {
      x = y["get"]("movementIndex");
    }
  }
  a["set"]("selectedIndex", b);
  var A = [];
  var B = function (D) {
    var E = r["get"](D);
    if (E == undefined) return;
    if (Array["isArray"](E)) A = A["concat"](E);
    else A["push"](E);
  };
  B("buttonStop");
  for (var C = 0x0; C < A["length"]; ++C) {
    A[C]["bind"]("click", j, this);
  }
  q["bind"]("begin", g, e);
  this["executeFunctionWhenChange"](a, b, d ? j : undefined);
};
TDV["Tour"]["Script"]["setOverlayBehaviour"] = function (a, b, c, d) {
  var e = function () {
    switch (c) {
      case "triggerClick":
        this["triggerOverlay"](a, "click");
        break;
      case "stop":
      case "play":
      case "pause":
        a[c]();
        break;
      case "togglePlayPause":
      case "togglePlayStop":
        if (a["get"]("state") == "playing")
          a[c == "togglePlayPause" ? "pause" : "stop"]();
        else a["play"]();
        break;
    }
    if (d) {
      if (window["overlaysDispatched"] == undefined)
        window["overlaysDispatched"] = {};
      var j = a["get"]("id");
      window["overlaysDispatched"][j] = !![];
      setTimeout(function () {
        delete window["overlaysDispatched"][j];
      }, 0x3e8);
    }
  };
  if (
    d &&
    window["overlaysDispatched"] != undefined &&
    a["get"]("id") in window["overlaysDispatched"]
  )
    return;
  var f = this["getFirstPlayListWithMedia"](b, !![]);
  if (f != undefined) {
    var g = this["getPlayListItemByMedia"](f, b);
    var h = g["get"]("player");
    if (
      f["get"]("items")["indexOf"](g) != f["get"]("selectedIndex") ||
      (this["isPanorama"](g["get"]("media")) &&
        h["get"]("rendererPanorama") != g["get"]("media"))
    ) {
      var i = function (j) {
        g["unbind"]("begin", i, this);
        e["call"](this);
      };
      g["bind"]("begin", i, this);
      return;
    }
  }
  e["call"](this);
};
TDV["Tour"]["Script"]["setOverlaysVisibility"] = function (a, b) {
  for (var d = 0x0, f = a["length"]; d < f; ++d) {
    var h = a[d];
    h["set"]("enabled", b == "toggle" ? !h["get"]("enabled") : b);
  }
  var j = this["getByClassName"]("AdjacentPanorama");
  for (var d = 0x0, f = j["length"]; d < f; ++d) {
    var k = j[d];
    var l = k["get"]("data");
    if (!l) continue;
    var h = this[l["overlayID"]];
    if (h && a["indexOf"](h) != -0x1) {
      k["set"]("enabledInSurfaceSelection", h["get"]("enabled"));
    }
  }
};
TDV["Tour"]["Script"]["setOverlaysVisibilityByTags"] = function (a, b, c, d) {
  var e = c
    ? this["getPanoramaOverlaysByTags"](c, a, d)
    : this["getOverlaysByTags"](a, d);
  this["setOverlaysVisibility"](e, b);
};
TDV["Tour"]["Script"]["setComponentsVisibilityByTags"] = function (
  a,
  b,
  c,
  d,
  e
) {
  var f = this["getComponentsByTags"](a, e);
  for (var g = 0x0, h = f["length"]; g < h; ++g) {
    var j = f[g];
    if (b == "toggle") j["get"]("visible") ? d(j) : c(j);
    else b ? c(j) : d(j);
  }
};
TDV["Tour"]["Script"]["setPanoramaCameraWithCurrentSpot"] = function (a) {
  var b = this["getActiveMediaWithViewer"](this["getMainViewer"]());
  if (
    b != undefined &&
    (b["get"]("class")["indexOf"]("Panorama") != -0x1 ||
      b["get"]("class") == "Video360")
  ) {
    var c = a["get"]("media");
    var d = this["cloneCamera"](a["get"]("camera"));
    this["setCameraSameSpotAsMedia"](d, b);
    this["startPanoramaWithCamera"](c, d);
  }
};
TDV["Tour"]["Script"]["setPanoramaCameraWithSpot"] = function (a, b, c, d, e) {
  var f = a["get"]("selectedIndex");
  var g = a["get"]("items");
  var h = b["get"]("player");
  if (g[f] == b || h["get"]("rendererPanorama") == b["get"]("media")) {
    if (c === undefined) c = h["get"]("yaw");
    if (d === undefined) d = h["get"]("pitch");
    if (e === undefined) e = h["get"]("hfov");
    h["moveTo"](c, d, h["get"]("roll"), e);
  } else {
    var i = b["get"]("media");
    var j = this["cloneCamera"](b["get"]("camera"));
    var k = j["get"]("initialPosition");
    if (c !== undefined) k["set"]("yaw", c);
    if (d !== undefined) k["set"]("pitch", d);
    if (e !== undefined) k["set"]("hfov", e);
    this["startPanoramaWithCamera"](i, j);
  }
};
TDV["Tour"]["Script"]["setSurfaceSelectionHotspotMode"] = function (a) {
  var b = this["getByClassName"]("HotspotPanoramaOverlay");
  var c = this["getByClassName"]("PanoramaPlayer");
  var d = a == "hotspotEnabled";
  var e = a == "circleEnabled";
  var f = !!a;
  b["forEach"](function (g) {
    var h = g["get"]("data");
    if (h && h["hasPanoramaAction"] == !![])
      g["set"]("enabledInSurfaceSelection", d);
  });
  c["forEach"](function (g) {
    g["set"]("adjacentPanoramaPositionsEnabled", e);
    g["set"]("surfaceSelectionEnabled", f);
  });
  this["get"]("data")["surfaceSelectionHotspotMode"] = a;
};
TDV["Tour"]["Script"]["setValue"] = function (a, b, c) {
  try {
    if ("set" in a) a["set"](b, c);
    else a[b] = c;
  } catch (d) {}
};
TDV["Tour"]["Script"]["setStartTimeVideo"] = function (a, b) {
  var c = this["getPlayListItems"](a);
  var d = [];
  var e = function () {
    for (var j = 0x0; j < c["length"]; ++j) {
      var k = c[j];
      k["set"]("startTime", d[j]);
      k["unbind"]("stop", e, this);
    }
  };
  for (var f = 0x0; f < c["length"]; ++f) {
    var g = c[f];
    var h = g["get"]("player");
    if (h["get"]("video") == a && h["get"]("state") == "playing") {
      h["seek"](b);
    } else {
      d["push"](g["get"]("startTime"));
      g["set"]("startTime", b);
      g["bind"]("stop", e, this);
    }
  }
};
TDV["Tour"]["Script"]["setStartTimeVideoSync"] = function (a, b) {
  if (a && b) this["setStartTimeVideo"](a, b["get"]("currentTime"));
};
TDV["Tour"]["Script"]["skip3DTransitionOnce"] = function (a) {
  if (a) {
    var b = a["get"]("viewerArea");
    if (b && b["get"]("translationTransitionEnabled") == !![]) {
      var c = function () {
        a["unbind"]("preloadMediaShow", c, this);
        b["set"]("translationTransitionEnabled", !![]);
      };
      b["set"]("translationTransitionEnabled", ![]);
      a["bind"]("preloadMediaShow", c, this);
    }
  }
};
TDV["Tour"]["Script"]["shareSocial"] = function (a, b, c, d) {
  if (c) {
    this["updateDeepLink"]();
  }
  if (b == undefined) {
    b = c
      ? location["href"]
      : location["href"]["split"](
          location["search"] || location["hash"] || /[?#]/
        )[0x0];
  } else if (c) {
    b += location["hash"];
  }
  b = (function (f) {
    switch (f) {
      case "email":
        return "mailto:?body=" + b;
      case "facebook":
        var g = b["indexOf"]("?") != -0x1;
        b = b["replace"]("#", "?");
        if (g) {
          var h = b["lastIndexOf"]("?");
          b = b["substring"](0x0, h) + "&" + b["substring"](h + 0x1);
        }
        return (
          "https://www.facebook.com/sharer/sharer.php?u=" +
          encodeURIComponent(b)
        );
      case "linkedin":
        return (
          "https://www.linkedin.com/shareArticle?mini=true&url=" +
          encodeURIComponent(b)
        );
      case "pinterest":
        return "https://pinterest.com/pin/create/button/?url=" + b;
      case "telegram":
        return "https://t.me/share/url?url=" + b;
      case "twitter":
        return "https://twitter.com/intent/tweet?source=webclient&url=" + b;
      case "whatsapp":
        return "https://api.whatsapp.com/send/?text=" + encodeURIComponent(b);
      default:
        return b;
    }
  })(a);
  if (d) {
    for (var e in d) {
      b += "&" + e + "=" + d[e];
    }
  }
  if (a == "clipboard") this["copyToClipboard"](b);
  else this["openLink"](b, "_blank");
};
TDV["Tour"]["Script"]["showComponentsWhileMouseOver"] = function (a, b, c) {
  var d = function (h) {
    for (var j = 0x0, k = b["length"]; j < k; j++) {
      b[j]["set"]("visible", h);
    }
  };
  if (this["get"]("isMobile")) {
    d["call"](this, !![]);
  } else {
    var e = -0x1;
    var f = function () {
      d["call"](this, !![]);
      if (e >= 0x0) clearTimeout(e);
      a["bind"]("rollOut", g, this);
    };
    var g = function () {
      var h = function () {
        d["call"](this, ![]);
      };
      a["unbind"]("rollOut", g, this);
      e = setTimeout(h["bind"](this), c);
    };
    a["bind"]("rollOver", f, this);
  }
};
TDV["Tour"]["Script"]["showPopupMedia"] = function (a, b, c, d, e, f) {
  var g = this;
  var h = function () {
    window["resumeAudiosBlocked"] = ![];
    c["set"]("selectedIndex", -0x1);
    g["getMainViewer"]()["set"]("toolTipEnabled", !![]);
    this["resumePlayers"](m, !![]);
    if (l) {
      this["unbind"]("resize", j, this);
    }
    a["unbind"]("close", h, this);
  };
  var i = function () {
    a["hide"]();
  };
  var j = function () {
    var n = function (F) {
      return a["get"](F) || 0x0;
    };
    var o = g["get"]("actualWidth");
    var p = g["get"]("actualHeight");
    var q = g["getMediaWidth"](b);
    var r = g["getMediaHeight"](b);
    var s = parseFloat(d) / 0x64;
    var t = parseFloat(e) / 0x64;
    var u = s * o;
    var v = t * p;
    var x = n("footerHeight");
    var y = n("headerHeight");
    if (!y) {
      var z =
        n("closeButtonIconHeight") +
        n("closeButtonPaddingTop") +
        n("closeButtonPaddingBottom");
      var A =
        g["getPixels"](n("titleFontSize")) +
        n("titlePaddingTop") +
        n("titlePaddingBottom");
      y = z > A ? z : A;
      y += n("headerPaddingTop") + n("headerPaddingBottom");
    }
    var B =
      u -
      n("bodyPaddingLeft") -
      n("bodyPaddingRight") -
      n("paddingLeft") -
      n("paddingRight");
    var C =
      v -
      y -
      x -
      n("bodyPaddingTop") -
      n("bodyPaddingBottom") -
      n("paddingTop") -
      n("paddingBottom");
    var D = B / C;
    var E = q / r;
    if (D > E) {
      u =
        C * E +
        n("bodyPaddingLeft") +
        n("bodyPaddingRight") +
        n("paddingLeft") +
        n("paddingRight");
    } else {
      v =
        B / E +
        y +
        x +
        n("bodyPaddingTop") +
        n("bodyPaddingBottom") +
        n("paddingTop") +
        n("paddingBottom");
    }
    if (u > o * s) {
      u = o * s;
    }
    if (v > p * t) {
      v = p * t;
    }
    a["set"]("width", u);
    a["set"]("height", v);
    a["set"]("x", (o - n("actualWidth")) * 0.5);
    a["set"]("y", (p - n("actualHeight")) * 0.5);
  };
  if (f) {
    this["executeFunctionWhenChange"](c, 0x0, i);
  }
  var k = b["get"]("class");
  var l = k == "Video" || k == "Video360";
  c["set"]("selectedIndex", 0x0);
  if (l) {
    this["bind"]("resize", j, this);
    j();
    c["get"]("items")[0x0]["get"]("player")["play"]();
  } else {
    a["set"]("width", d);
    a["set"]("height", e);
  }
  window["resumeAudiosBlocked"] = !![];
  this["getMainViewer"]()["set"]("toolTipEnabled", ![]);
  var m = this["pauseCurrentPlayers"](!![]);
  a["bind"]("close", h, this);
  a["show"](this, !![]);
};
TDV["Tour"]["Script"]["showPopupImage"] = function (
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l
) {
  var m = ![];
  var n = function () {
    E["unbind"]("loaded", q, this);
    u["call"](this);
  };
  var o = function () {
    E["unbind"]("click", o, this);
    if (I != undefined) {
      clearTimeout(I);
    }
  };
  var p = function () {
    setTimeout(y, 0x0);
  };
  var q = function () {
    this["unbind"]("click", n, this);
    D["set"]("visible", !![]);
    y();
    F["set"]("visible", !![]);
    E["unbind"]("loaded", q, this);
    E["bind"]("resize", p, this);
    I = setTimeout(r["bind"](this), 0xc8);
  };
  var r = function () {
    I = undefined;
    if (h) {
      E["bind"]("click", o, this);
      t["call"](this);
    }
    E["bind"]("userInteractionStart", z, this);
    E["bind"]("userInteractionEnd", A, this);
    E["bind"]("backgroundClick", u, this);
    if (b) {
      E["bind"]("click", w, this);
      E["set"]("imageCursor", "hand");
    }
    F["bind"]("click", u, this);
    if (k) k["call"](this);
  };
  var s = function () {
    if (h && I) {
      clearTimeout(I);
      I = undefined;
    }
  };
  var t = function () {
    if (h) {
      s();
      I = setTimeout(u["bind"](this), h);
    }
  };
  var u = function () {
    this["getMainViewer"]()["set"]("toolTipEnabled", !![]);
    m = !![];
    if (I) clearTimeout(I);
    if (J) clearTimeout(J);
    if (h) o();
    if (l) l["call"](this);
    E["set"]("visible", ![]);
    if (f && f["get"]("duration") > 0x0) {
      f["bind"]("end", v, this);
    } else {
      E["set"]("image", null);
    }
    F["set"]("visible", ![]);
    D["set"]("visible", ![]);
    this["unbind"]("click", n, this);
    E["unbind"]("backgroundClick", u, this);
    E["unbind"]("userInteractionStart", z, this);
    E["unbind"]("userInteractionEnd", A, this, !![]);
    E["unbind"]("resize", p, this);
    if (b) {
      E["unbind"]("click", w, this);
      E["set"]("cursor", "default");
    }
    F["unbind"]("click", u, this);
    this["resumePlayers"](H, i == null || j);
    if (j) {
      this["resumeGlobalAudios"]();
    }
    if (i) {
      this["stopGlobalAudio"](i);
    }
  };
  var v = function () {
    E["set"]("image", null);
    f["unbind"]("end", v, this);
  };
  var w = function () {
    E["set"]("image", x() ? a : b);
  };
  var x = function () {
    return E["get"]("image") == b;
  };
  var y = function () {
    var K =
      E["get"]("actualWidth") -
      E["get"]("imageLeft") -
      E["get"]("imageWidth") +
      0xa;
    var L = E["get"]("imageTop") + 0xa;
    if (K < 0xa) K = 0xa;
    if (L < 0xa) L = 0xa;
    F["set"]("right", K);
    F["set"]("top", L);
  };
  var z = function () {
    s();
    if (J) {
      clearTimeout(J);
      J = undefined;
    } else {
      F["set"]("visible", ![]);
    }
  };
  var A = function () {
    t["call"](this);
    if (!m) {
      J = setTimeout(B, 0x12c);
    }
  };
  var B = function () {
    J = undefined;
    F["set"]("visible", !![]);
    y();
  };
  var C = function (K) {
    var L = K["get"]("data");
    if (L && "extraLevels" in L) {
      var M = this["rootPlayer"]["createInstance"](K["get"]("class"));
      var N = L["extraLevels"];
      M["set"]("levels", K["get"]("levels")["concat"](N));
      K = M;
    }
    return K;
  };
  this["getMainViewer"]()["set"]("toolTipEnabled", ![]);
  var D = this["veilPopupPanorama"];
  var E = this["zoomImagePopupPanorama"];
  var F = this["closeButtonPopupPanorama"];
  if (g) {
    for (var G in g) {
      F["set"](G, g[G]);
    }
  }
  var H = this["pauseCurrentPlayers"](i == null || !j);
  if (j) {
    this["pauseGlobalAudios"](null, !![]);
  }
  if (i) {
    this["playGlobalAudio"](i, !![]);
  }
  var I = undefined;
  var J = undefined;
  a = C["call"](this, a);
  if (b) b = C["call"](this, b);
  E["bind"]("loaded", q, this);
  setTimeout(
    function () {
      this["bind"]("click", n, this, ![]);
    }["bind"](this),
    0x0
  );
  E["set"]("image", a);
  E["set"]("customWidth", c);
  E["set"]("customHeight", d);
  E["set"]("showEffect", e);
  E["set"]("hideEffect", f);
  E["set"]("visible", !![]);
  return E;
};
TDV["Tour"]["Script"]["showPopupPanoramaOverlay"] = function (
  a,
  b,
  c,
  d,
  e,
  f,
  g
) {
  var h = this["isCardboardViewMode"]();
  if (
    a["get"]("visible") ||
    (!h && this["zoomImagePopupPanorama"]["get"]("visible"))
  )
    return;
  this["getMainViewer"]()["set"]("toolTipEnabled", ![]);
  if (!h) {
    var i = this["zoomImagePopupPanorama"];
    var j = a["get"]("showDuration");
    var k = a["get"]("hideDuration");
    var m = this["pauseCurrentPlayers"](f == null || !g);
    var n = a["get"]("popupMaxWidth");
    var o = a["get"]("popupMaxHeight");
    var p = function () {
      var s = function () {
        if (!this["isCardboardViewMode"]()) a["set"]("visible", ![]);
      };
      a["unbind"]("showEnd", p, this);
      a["set"]("showDuration", 0x1);
      a["set"]("hideDuration", 0x1);
      this["showPopupImage"](
        c,
        d,
        a["get"]("popupMaxWidth"),
        a["get"]("popupMaxHeight"),
        null,
        null,
        b,
        e,
        f,
        g,
        s,
        q
      );
    };
    var q = function () {
      var s = function () {
        a["unbind"]("showEnd", s, this);
        a["set"]("visible", ![]);
        a["set"]("showDuration", j);
        a["set"]("popupMaxWidth", n);
        a["set"]("popupMaxHeight", o);
      };
      this["resumePlayers"](m, f == null || !g);
      var t = i["get"]("imageWidth");
      var u = i["get"]("imageHeight");
      a["bind"]("showEnd", s, this, !![]);
      a["set"]("showDuration", 0x1);
      a["set"]("hideDuration", k);
      a["set"]("popupMaxWidth", t);
      a["set"]("popupMaxHeight", u);
      if (a["get"]("visible")) s();
      else a["set"]("visible", !![]);
      this["getMainViewer"]()["set"]("toolTipEnabled", !![]);
    };
    a["bind"]("showEnd", p, this, !![]);
  } else {
    var r = function () {
      this["resumePlayers"](m, f == null || g);
      if (g) {
        this["resumeGlobalAudios"]();
      }
      if (f) {
        this["stopGlobalAudio"](f);
      }
      a["unbind"]("hideEnd", r, this);
      this["getMainViewer"]()["set"]("toolTipEnabled", !![]);
    };
    var m = this["pauseCurrentPlayers"](f == null || !g);
    if (g) {
      this["pauseGlobalAudios"](null, !![]);
    }
    if (f) {
      this["playGlobalAudio"](f, !![]);
    }
    a["bind"]("hideEnd", r, this, !![]);
  }
  a["set"]("visible", !![]);
};
TDV["Tour"]["Script"]["showPopupPanoramaVideoOverlay"] = function (a, b, c) {
  var d = this;
  var e = function () {
    a["unbind"]("showEnd", e);
    i["bind"]("click", g, this);
    h();
    i["set"]("visible", !![]);
  };
  var f = function () {
    if (!a["get"]("loop")) g();
  };
  var g = function () {
    window["resumeAudiosBlocked"] = ![];
    d["getMainViewer"]()["set"]("toolTipEnabled", !![]);
    a["set"]("visible", ![]);
    i["set"]("visible", ![]);
    i["unbind"]("click", g, d);
    a["unbind"]("end", f, d);
    a["unbind"]("hideEnd", g, d, !![]);
    d["resumePlayers"](k, !![]);
    if (c) {
      d["resumeGlobalAudios"]();
    }
  };
  var h = function () {
    var l = 0xa;
    var m = 0xa;
    i["set"]("right", l);
    i["set"]("top", m);
  };
  this["getMainViewer"]()["set"]("toolTipEnabled", ![]);
  var i = this["closeButtonPopupPanorama"];
  if (b) {
    for (var j in b) {
      i["set"](j, b[j]);
    }
  }
  window["resumeAudiosBlocked"] = !![];
  var k = this["pauseCurrentPlayers"](!![]);
  if (c) {
    this["pauseGlobalAudios"]();
  }
  a["bind"]("end", f, this, !![]);
  a["bind"]("showEnd", e, this, !![]);
  a["bind"]("hideEnd", g, this, !![]);
  a["set"]("visible", !![]);
};
TDV["Tour"]["Script"]["showWindow"] = function (a, b, c) {
  if (a["get"]("visible") == !![]) {
    return;
  }
  var d = function () {
    this["getMainViewer"]()["set"]("toolTipEnabled", !![]);
    if (c) {
      this["resumeGlobalAudios"]();
    }
    e();
    this["resumePlayers"](h, !c);
    a["unbind"]("close", d, this);
  };
  var e = function () {
    a["unbind"]("click", e, this);
    if (f != undefined) {
      clearTimeout(f);
    }
  };
  var f = undefined;
  if (b) {
    var g = function () {
      a["hide"]();
    };
    a["bind"]("click", e, this);
    f = setTimeout(g, b);
  }
  this["getMainViewer"]()["set"]("toolTipEnabled", ![]);
  if (c) {
    this["pauseGlobalAudios"](null, !![]);
  }
  var h = this["pauseCurrentPlayers"](!c);
  a["bind"]("close", d, this);
  a["show"](this, !![]);
};
TDV["Tour"]["Script"]["startPanoramaWithCamera"] = function (a, b) {
  var c = this["getByClassName"]("PlayList");
  if (c["length"] == 0x0) return;
  var d =
    window["currentPanoramasWithCameraChanged"] == undefined ||
    !(a["get"]("id") in window["currentPanoramasWithCameraChanged"]);
  var e = [];
  for (var g = 0x0, h = c["length"]; g < h; ++g) {
    var k = c[g];
    var l = k["get"]("items");
    for (var m = 0x0, n = l["length"]; m < n; ++m) {
      var p = l[m];
      if (
        p["get"]("media") == a &&
        (p["get"]("class") == "PanoramaPlayListItem" ||
          p["get"]("class") == "Video360PlayListItem")
      ) {
        if (d) {
          e["push"]({ camera: p["get"]("camera"), item: p });
        }
        p["set"]("camera", b);
      }
    }
  }
  if (e["length"] > 0x0) {
    if (window["currentPanoramasWithCameraChanged"] == undefined) {
      window["currentPanoramasWithCameraChanged"] = {};
    }
    var q = a["get"]("id");
    window["currentPanoramasWithCameraChanged"][q] = e;
    var r = function () {
      if (q in window["currentPanoramasWithCameraChanged"]) {
        delete window["currentPanoramasWithCameraChanged"][q];
      }
      for (var t = 0x0; t < e["length"]; t++) {
        e[t]["item"]["set"]("camera", e[t]["camera"]);
        e[t]["item"]["unbind"]("end", r, this);
      }
    };
    for (var g = 0x0; g < e["length"]; g++) {
      var s = e[g];
      var p = s["item"];
      this["skip3DTransitionOnce"](p["get"]("player"));
      p["bind"]("end", r, this);
    }
  }
};
TDV["Tour"]["Script"]["stopAndGoCamera"] = function (a, b) {
  var c = a["get"]("initialSequence");
  c["pause"]();
  var d = function () {
    c["play"]();
  };
  setTimeout(d, b);
};
TDV["Tour"]["Script"]["syncPlaylists"] = function (a) {
  var b = function (k, l) {
    for (var m = 0x0, n = a["length"]; m < n; ++m) {
      var o = a[m];
      if (o != l) {
        var p = o["get"]("items");
        for (var q = 0x0, r = p["length"]; q < r; ++q) {
          if (p[q]["get"]("media") == k) {
            if (o["get"]("selectedIndex") != q) {
              o["set"]("selectedIndex", q);
            }
            break;
          }
        }
      }
    }
  };
  var c = function (k) {
    var l = k["source"];
    var m = l["get"]("selectedIndex");
    if (m < 0x0) return;
    var n = l["get"]("items")[m]["get"]("media");
    b(n, l);
  };
  var d = function (k) {
    var l = k["source"]["get"]("panoramaMapLocation");
    if (l) {
      var m = l["get"]("map");
      b(m);
    }
  };
  for (var f = 0x0, h = a["length"]; f < h; ++f) {
    a[f]["bind"]("change", c, this);
  }
  var j = this["getByClassName"]("MapPlayer");
  for (var f = 0x0, h = j["length"]; f < h; ++f) {
    j[f]["bind"]("panoramaMapLocation_change", d, this);
  }
};
TDV["Tour"]["Script"]["translate"] = function (a) {
  return this["get"]("data")["localeManager"]["trans"](a);
};
TDV["Tour"]["Script"]["triggerOverlay"] = function (a, b) {
  if (a["get"]("areas") != undefined) {
    var c = a["get"]("areas");
    for (var d = 0x0; d < c["length"]; ++d) {
      c[d]["trigger"](b);
    }
  } else {
    a["trigger"](b);
  }
};
TDV["Tour"]["Script"]["updateDeepLink"] = function () {
  var a = this["mainPlayList"]["get"]("selectedIndex");
  if (a >= 0x0) {
    location["hash"] = "#media=" + (a + 0x1);
  } else {
    var b = this["getActiveMediaWithViewer"](this["getMainViewer"]());
    if (b != undefined) {
      var c = b["get"]("data");
      if (c) {
        location["hash"] = "#media-name=" + c["label"];
      }
    }
  }
};
TDV["Tour"]["Script"]["updateMediaLabelFromPlayList"] = function (a, b, c) {
  var d = function () {
    var f = a["get"]("selectedIndex");
    if (f >= 0x0) {
      var g = function () {
        j["unbind"]("begin", g);
        h(f);
      };
      var h = function (k) {
        var l = j["get"]("media");
        var m = l["get"]("data");
        var n = m !== undefined ? m["description"] : undefined;
        i(n);
      };
      var i = function (k) {
        if (k !== undefined) {
          b["set"](
            "html",
            "<div\x20style=\x22text-align:left\x22><SPAN\x20STYLE=\x22color:#FFFFFF;font-size:12px;font-family:Verdana\x22><span\x20color=\x22white\x22\x20font-family=\x22Verdana\x22\x20font-size=\x2212px\x22>" +
              k +
              "</SPAN></div>"
          );
        } else {
          b["set"]("html", "");
        }
      };
      var j = a["get"]("items")[f];
      if (b["get"]("html")) {
        i("Loading...");
        j["bind"]("begin", g);
      } else {
        h(f);
      }
    }
  };
  var e = function () {
    b["set"]("html", undefined);
    a["unbind"]("change", d, this);
    c["unbind"]("stop", e, this);
  };
  if (c) {
    c["bind"]("stop", e, this);
  }
  a["bind"]("change", d, this);
  d();
};
TDV["Tour"]["Script"]["updateVideoCues"] = function (a, b) {
  var c = a["get"]("items")[b];
  var d = c["get"]("media");
  if (d["get"]("cues")["length"] == 0x0) return;
  var e = c["get"]("player");
  var f = [];
  var g = function () {
    if (a["get"]("selectedIndex") != b) {
      d["unbind"]("cueChange", h, this);
      a["unbind"]("change", g, this);
    }
  };
  var h = function (j) {
    var k = j["data"]["activeCues"];
    for (var l = 0x0, m = f["length"]; l < m; ++l) {
      var n = f[l];
      if (
        k["indexOf"](n) == -0x1 &&
        (n["get"]("startTime") > e["get"]("currentTime") ||
          n["get"]("endTime") < e["get"]("currentTime") + 0.5)
      ) {
        n["trigger"]("end");
      }
    }
    f = k;
  };
  d["bind"]("cueChange", h, this);
  a["bind"]("change", g, this);
};
TDV["Tour"]["Script"]["visibleComponentsIfPlayerFlagEnabled"] = function (
  a,
  b
) {
  var c = this["get"](b);
  for (var d in a) {
    a[d]["set"]("visible", c);
  }
};
TDV["Tour"]["Script"]["quizStart"] = function () {
  var a = this["get"]("data")["quiz"];
  return a ? a["start"]() : undefined;
};
TDV["Tour"]["Script"]["quizFinish"] = function () {
  var a = this["get"]("data")["quiz"];
  return a ? a["finish"]() : undefined;
};
TDV["Tour"]["Script"]["quizSetItemFound"] = function (a) {
  var b = this["get"]("data")["quiz"];
  if (b) b["setItemFound"](a);
};
TDV["Tour"]["Script"]["quizShowQuestion"] = function (a) {
  var b = this["get"]("data");
  var c = b["quiz"];
  var d;
  if (c) {
    var e = this["pauseCurrentPlayers"](!![]);
    var f = this[a];
    var g;
    if (!f["media"]) {
      g = this["get"]("isMobile")
        ? {
            theme: {
              window: {
                height: undefined,
                maxHeight: this["get"]("actualHeight"),
                optionsContainer: { height: "100%" },
              },
            },
          }
        : {
            theme: {
              window: {
                width: "40%",
                height: undefined,
                maxHeight: 0x2bc,
                optionsContainer: { width: "100%" },
              },
            },
          };
    } else if (
      this["get"]("isMobile") &&
      this["get"]("orientation") == "landscape"
    ) {
      g = {
        theme: {
          window: {
            bodyContainer: {
              layout: "horizontal",
              paddingLeft: 0x1e,
              paddingRight: 0x1e,
            },
            mediaContainer: { width: "60%", height: "100%" },
            buttonsContainer: { paddingLeft: 0x14, paddingRight: 0x14 },
            optionsContainer: {
              width: "40%",
              height: "100%",
              paddingLeft: 0x0,
              paddingRight: 0x0,
            },
          },
        },
      };
    }
    if (!f["canClose"]) {
      g = this["mixObject"](g || {}, {
        theme: {
          window: {
            closeButton: {
              width: 0x0,
              height: 0x0,
              paddingTop: 0x0,
              paddingBottom: 0x0,
              paddingLeft: 0x0,
              paddingRight: 0x0,
            },
          },
        },
      });
    }
    if (this["get"]("isMobile") && this["get"]("orientation") == "landscape") {
      var h = this["get"]("data")["tour"]["getNotchValue"]();
      if (h > 0x0) {
        g = this["mixObject"](g || {}, {
          theme: { window: { width: undefined, left: h, right: h } },
        });
      }
    }
    var i =
      this["get"]("data")["textToSpeechConfig"]["speechOnQuizQuestion"] &&
      !!f["title"];
    if (i) this["textToSpeech"](f["title"], a);
    d = c["showQuestion"](a, g);
    d["then"](
      function (j) {
        if (i) this["stopTextToSpeech"]();
        this["resumePlayers"](e, !![]);
      }["bind"](this)
    );
  }
  return d;
};
TDV["Tour"]["Script"]["quizShowScore"] = function (a) {
  var b = this["get"]("data");
  var c = b["quiz"];
  if (c) {
    if (this["get"]("isMobile")) {
      a = a || {};
      a = this["mixObject"](
        a,
        b[
          this["get"]("orientation") == "portrait"
            ? "scorePortraitConfig"
            : "scoreLandscapeConfig"
        ]
      );
    }
    return c["showScore"](a);
  }
};
TDV["Tour"]["Script"]["quizShowTimeout"] = function (a, b) {
  var c = this["get"]("data");
  var d = c["quiz"];
  if (d) {
    if (this["get"]("isMobile")) {
      b = b || {};
      b = this["mixObject"](
        b,
        c[
          this["get"]("orientation") == "portrait"
            ? "scorePortraitConfig"
            : "scoreLandscapeConfig"
        ]
      );
    }
    d["showTimeout"](a, b);
  }
};
TDV["Tour"]["Script"]["stopTextToSpeech"] = function (a) {
  if (window["speechSynthesis"] && (a == undefined || this["t2sLastID"] == a)) {
    var b = window["speechSynthesis"];
    if (b["speaking"]) {
      b["cancel"]();
    }
    this["t2sLastID"] = undefined;
  }
};
TDV["Tour"]["Script"]["textToSpeech"] = function (a, b, c) {
  if (this["get"]("mute")) {
    return;
  }
  if (window["speechSynthesis"]) {
    var d = this["get"]("data");
    var e = d["disableTTS"] || ![];
    if (e) return;
    var f = window["speechSynthesis"];
    if ((b != undefined && this["t2sLastID"] != b) || b == undefined) {
      c = c || 0x0;
      if (this["t2sLastID"] && c > this["t2sLastPriority"]) {
        return;
      }
      if (f["speaking"]) {
        f["cancel"]();
      }
      this["t2sLastPriority"] = c;
      this["t2sLastID"] = b;
      var g = new SpeechSynthesisUtterance(a);
      var h = d["localeManager"]["currentLocaleID"];
      if (h) g["lang"] = h;
      var i = d["textToSpeechConfig"];
      var j;
      if (i) {
        g["volume"] = i["volume"];
        g["pitch"] = i["pitch"];
        g["rate"] = i["rate"];
        if (i["stopBackgroundAudio"]) this["pauseGlobalAudios"](null, !![]);
      }
      g["onend"] = function () {
        this["t2sLastID"] = null;
        if (j) clearInterval(j);
        if (i["stopBackgroundAudio"]) this["resumeGlobalAudios"]();
      }["bind"](this);
      if (
        navigator["userAgent"]["indexOf"]("Chrome") != -0x1 &&
        !this["get"]("isMobile")
      ) {
        j = setInterval(function () {
          f["pause"]();
          f["resume"]();
        }, 0xbb8);
      }
      f["speak"](g);
    }
  } else {
    console["error"](
      "Text\x20to\x20Speech\x20isn\x27t\x20supported\x20on\x20this\x20browser"
    );
  }
};
TDV["Tour"]["Script"]["textToSpeechComponent"] = function (a) {
  var b = a["get"]("class");
  var c;
  if (b == "HTMLText") {
    c = this["htmlToPlainText"](a["get"]("html"), {
      linkProcess: function (d, e) {
        return e;
      },
    });
  } else if (b == "BaseButton") {
    c = a["get"]("label");
  } else if (b == "Label") {
    c = a["get"]("text");
  }
  if (c) {
    this["textToSpeech"](c, a["get"]("id"));
  }
};
TDV["Tour"]["Script"]["_initTTSTooltips"] = function () {
  function a(c) {
    var d = c["source"];
    this["textToSpeech"](d["get"]("toolTip"), d["get"]("id"), 0x1);
  }
  function b(c) {
    var d = c["source"];
    this["stopTextToSpeech"](d["get"]("id"));
  }
  setTimeout(
    function () {
      var c = this["getByClassName"]("UIComponent");
      for (var d = 0x0, e = c["length"]; d < e; ++d) {
        var f = c[d];
        var g = f["get"]("toolTip");
        if (!!g || f["get"]("class") == "ViewerArea") {
          f["bind"]("toolTipShow", a, this);
          f["bind"]("toolTipHide", b, this);
        }
      }
    }["bind"](this),
    0x0
  );
};
TDV["Tour"]["Script"]["htmlToPlainText"] = function htmlToPlainText(a, b) {
  var c = function (q, r) {
    var s = "";
    for (var t = 0x0; t < r; t += 0x1) {
      s += q;
    }
    return s;
  };
  var d = null;
  var e = null;
  var f = "underline";
  var g = "indention";
  var h = "-";
  var i = 0x3;
  var j = "-";
  var k = ![];
  if (!!b) {
    if (typeof b["linkProcess"] === "function") {
      d = b["linkProcess"];
    }
    if (typeof b["imgProcess"] === "function") {
      e = b["imgProcess"];
    }
    if (!!b["headingStyle"]) {
      f = b["headingStyle"];
    }
    if (!!b["listStyle"]) {
      g = b["listStyle"];
    }
    if (!!b["uIndentionChar"]) {
      h = b["uIndentionChar"];
    }
    if (!!b["listIndentionTabs"]) {
      i = b["listIndentionTabs"];
    }
    if (!!b["oIndentionChar"]) {
      j = b["oIndentionChar"];
    }
    if (!!b["keepNbsps"]) {
      k = b["keepNbsps"];
    }
  }
  var l = c(h, i);
  var m = String(a)["replace"](/\n|\r/g, "\x20");
  const n = m["match"](/<\/body>/i);
  if (n) {
    m = m["substring"](0x0, n["index"]);
  }
  const o = m["match"](/<body[^>]*>/i);
  if (o) {
    m = m["substring"](o["index"] + o[0x0]["length"], m["length"]);
  }
  m = m["replace"](
    /<(script|style)( [^>]*)*>((?!<\/\1( [^>]*)*>).)*<\/\1>/gi,
    ""
  );
  m = m["replace"](
    /<(\/)?((?!h[1-6]( [^>]*)*>)(?!img( [^>]*)*>)(?!a( [^>]*)*>)(?!ul( [^>]*)*>)(?!ol( [^>]*)*>)(?!li( [^>]*)*>)(?!p( [^>]*)*>)(?!div( [^>]*)*>)(?!td( [^>]*)*>)(?!br( [^>]*)*>)[^>\/])[^<>]*>/gi,
    ""
  );
  m = m["replace"](/<img([^>]*)>/gi, function (q, r) {
    var s = "";
    var t = "";
    var u = /src="([^"]*)"/i["exec"](r);
    var v = /alt="([^"]*)"/i["exec"](r);
    if (u !== null) {
      s = u[0x1];
    }
    if (v !== null) {
      t = v[0x1];
    }
    if (typeof e === "function") {
      return e(s, t);
    }
    if (t === "") {
      return "![image]\x20(" + s + ")";
    }
    return "![" + t + "]\x20(" + s + ")";
  });
  function p() {
    return function (q, r, s, t) {
      var u = 0x0;
      if (s && /start="([0-9]+)"/i["test"](s)) {
        u = /start="([0-9]+)"/i["exec"](s)[0x1] - 0x1;
      }
      var v =
        "<p>" +
        t["replace"](
          /<li[^>]*>(((?!<li[^>]*>)(?!<\/li>).)*)<\/li>/gi,
          function (w, x) {
            var y = 0x0;
            var z = x["replace"](/(^|(<br \/>))(?!<p>)/gi, function () {
              if (r === "o" && y === 0x0) {
                u += 0x1;
                y += 0x1;
                return "<br\x20/>" + u + c(j, i - String(u)["length"]);
              }
              return "<br\x20/>" + l;
            });
            return z;
          }
        ) +
        "</p>";
      return v;
    };
  }
  if (g === "linebreak") {
    m = m["replace"](/<\/?ul[^>]*>|<\/?ol[^>]*>|<\/?li[^>]*>/gi, "\x0a");
  } else if (g === "indention") {
    while (/<(o|u)l[^>]*>(.*)<\/\1l>/gi["test"](m)) {
      m = m["replace"](
        /<(o|u)l([^>]*)>(((?!<(o|u)l[^>]*>)(?!<\/(o|u)l>).)*)<\/\1l>/gi,
        p()
      );
    }
  }
  if (f === "linebreak") {
    m = m["replace"](/<h([1-6])[^>]*>([^<]*)<\/h\1>/gi, "\x0a$2\x0a");
  } else if (f === "underline") {
    m = m["replace"](/<h1[^>]*>(((?!<\/h1>).)*)<\/h1>/gi, function (q, r) {
      return (
        "\x0a&nbsp;\x0a" + r + "\x0a" + c("=", r["length"]) + "\x0a&nbsp;\x0a"
      );
    });
    m = m["replace"](/<h2[^>]*>(((?!<\/h2>).)*)<\/h2>/gi, function (q, r) {
      return (
        "\x0a&nbsp;\x0a" + r + "\x0a" + c("-", r["length"]) + "\x0a&nbsp;\x0a"
      );
    });
    m = m["replace"](
      /<h([3-6])[^>]*>(((?!<\/h\1>).)*)<\/h\1>/gi,
      function (q, r, s) {
        return "\x0a&nbsp;\x0a" + s + "\x0a&nbsp;\x0a";
      }
    );
  } else if (f === "hashify") {
    m = m["replace"](/<h([1-6])[^>]*>([^<]*)<\/h\1>/gi, function (q, r, s) {
      return "\x0a&nbsp;\x0a" + c("#", r) + "\x20" + s + "\x0a&nbsp;\x0a";
    });
  }
  m = m["replace"](
    /<br( [^>]*)*>|<p( [^>]*)*>|<\/p( [^>]*)*>|<div( [^>]*)*>|<\/div( [^>]*)*>|<td( [^>]*)*>|<\/td( [^>]*)*>/gi,
    "\x0a"
  );
  m = m["replace"](
    /<a[^>]*href="([^"]*)"[^>]*>([^<]+)<\/a[^>]*>/gi,
    function (q, r, s) {
      if (typeof d === "function") {
        return d(r, s);
      }
      return "\x20[" + s + "]\x20(" + r + ")\x20";
    }
  );
  m = m["replace"](/\n[ \t\f]*/gi, "\x0a");
  m = m["replace"](/\n\n+/gi, "\x0a");
  if (k) {
    m = m["replace"](/( |\t)+/gi, "\x20");
    m = m["replace"](/&nbsp;/gi, "\x20");
  } else {
    m = m["replace"](/( |&nbsp;|\t)+/gi, "\x20");
  }
  m = m["replace"](/\n +/gi, "\x0a");
  m = m["replace"](/^ +/gi, "");
  while (m["indexOf"]("\x0a") === 0x0) {
    m = m["substring"](0x1);
  }
  if (m["length"] === 0x0 || m["lastIndexOf"]("\x0a") !== m["length"] - 0x1) {
    m += "\x0a";
  }
  return m;
};
TDV["Tour"]["Script"]["openEmbeddedPDF"] = function (a, b) {
  var c = !!window["MSInputMethodContext"] && !!document["documentMode"];
  if (c) {
    this["openLink"](b, "_blank");
    return;
  }
  var d = a["get"]("class");
  var e = !new RegExp("^(?:[a-z]+:)?//", "i")["test"](b);
  if (e && d == "WebFrame") {
    a["set"](
      "url",
      "lib/pdfjs/web/viewer.html?file=" +
        encodeURIComponent(
          location["href"]["substring"](
            0x0,
            location["href"]["lastIndexOf"]("/")
          ) +
            "/" +
            b
        )
    );
  } else {
    var f = location["origin"] == new URL(b)["origin"];
    var g =
      "<iframe\x20\x20id=\x27googleViewer\x27\x20src=\x27https://docs.google.com/viewer?url=[url]&embedded=true\x27\x20width=\x27100%\x27\x20height=\x27100%\x27\x20frameborder=\x270\x27>" +
      "<p>This\x20browser\x20does\x20not\x20support\x20inline\x20PDFs.\x20Please\x20download\x20the\x20PDF\x20to\x20view\x20it:\x20<a\x20href=\x27[url]\x27>Download\x20PDF</a></p>" +
      "</iframe>";
    var h = /^((?!chrome|android|crios|ipad|iphone).)*safari/i["test"](
      navigator["userAgent"]
    );
    var i =
      "<div\x20id=\x22content\x22\x20style=\x22width:100%;height:100%;position:absolute;left:0;top:0;\x22></div>" +
      "<script\x20type=\x22text/javascript\x22>" +
      "!function(root,factory){\x22function\x22==typeof\x20define&&define.amd?define([],factory):\x22object\x22==typeof\x20module&&module.exports?module.exports=factory():root.PDFObject=factory()}(this,function(){\x22use\x20strict\x22;if(void\x200===window||void\x200===window.navigator||void\x200===window.navigator.userAgent||void\x200===window.navigator.mimeTypes)return!1;let\x20nav=window.navigator,ua=window.navigator.userAgent,isIE=\x22ActiveXObject\x22in\x20window,isModernBrowser=void\x200!==window.Promise,supportsPdfMimeType=void\x200!==nav.mimeTypes[\x22application/pdf\x22],isMobileDevice=void\x200!==nav.platform&&\x22MacIntel\x22===nav.platform&&void\x200!==nav.maxTouchPoints&&nav.maxTouchPoints>1||/Mobi|Tablet|Android|iPad|iPhone/.test(ua),isSafariDesktop=!isMobileDevice&&void\x200!==nav.vendor&&/Apple/.test(nav.vendor)&&/Safari/.test(ua),isFirefoxWithPDFJS=!(isMobileDevice||!/irefox/.test(ua))&&parseInt(ua.split(\x22rv:\x22)[1].split(\x22.\x22)[0],10)>18,createAXO=function(type){var\x20ax;try{ax=new\x20ActiveXObject(type)}catch(e){ax=null}return\x20ax},supportsPDFs=!isMobileDevice&&(isFirefoxWithPDFJS||supportsPdfMimeType||isIE&&!(!createAXO(\x22AcroPDF.PDF\x22)&&!createAXO(\x22PDF.PdfCtrl\x22))),embedError=function(msg,suppressConsole){return\x20suppressConsole||console.log(\x22[PDFObject]\x20\x22+msg),!1},emptyNodeContents=function(node){for(;node.firstChild;)node.removeChild(node.firstChild)},generatePDFJSMarkup=function(targetNode,url,pdfOpenFragment,PDFJS_URL,id,omitInlineStyles){emptyNodeContents(targetNode);let\x20fullURL=PDFJS_URL+\x22?file=\x22+encodeURIComponent(url)+pdfOpenFragment,div=document.createElement(\x22div\x22),iframe=document.createElement(\x22iframe\x22);return\x20iframe.src=fullURL,iframe.className=\x22pdfobject\x22,iframe.type=\x22application/pdf\x22,iframe.frameborder=\x220\x22,id&&(iframe.id=id),omitInlineStyles||(div.style.cssText=\x22position:\x20absolute;\x20top:\x200;\x20right:\x200;\x20bottom:\x200;\x20left:\x200;\x22,iframe.style.cssText=\x22border:\x20none;\x20width:\x20100%;\x20height:\x20100%;\x22,/*targetNode.style.position=\x22relative\x22,*/targetNode.style.overflow=\x22auto\x22),div.appendChild(iframe),targetNode.appendChild(div),targetNode.classList.add(\x22pdfobject-container\x22),targetNode.getElementsByTagName(\x22iframe\x22)[0]},embed=function(url,targetSelector,options){let\x20selector=targetSelector||!1,opt=options||{},id=\x22string\x22==typeof\x20opt.id?opt.id:\x22\x22,page=opt.page||!1,pdfOpenParams=opt.pdfOpenParams||{},fallbackLink=opt.fallbackLink||!0,width=opt.width||\x22100%\x22,height=opt.height||\x22100%\x22,assumptionMode=\x22boolean\x22!=typeof\x20opt.assumptionMode||opt.assumptionMode,forcePDFJS=\x22boolean\x22==typeof\x20opt.forcePDFJS&&opt.forcePDFJS,supportRedirect=\x22boolean\x22==typeof\x20opt.supportRedirect&&opt.supportRedirect,omitInlineStyles=\x22boolean\x22==typeof\x20opt.omitInlineStyles&&opt.omitInlineStyles,suppressConsole=\x22boolean\x22==typeof\x20opt.suppressConsole&&opt.suppressConsole,forceIframe=\x22boolean\x22==typeof\x20opt.forceIframe&&opt.forceIframe,PDFJS_URL=opt.PDFJS_URL||!1,targetNode=function(targetSelector){let\x20targetNode=document.body;return\x22string\x22==typeof\x20targetSelector?targetNode=document.querySelector(targetSelector):void\x200!==window.jQuery&&targetSelector\x20instanceof\x20jQuery&&targetSelector.length?targetNode=targetSelector.get(0):void\x200!==targetSelector.nodeType&&1===targetSelector.nodeType&&(targetNode=targetSelector),targetNode}(selector),fallbackHTML=\x22\x22,pdfOpenFragment=\x22\x22;if(\x22string\x22!=typeof\x20url)return\x20embedError(\x22URL\x20is\x20not\x20valid\x22,suppressConsole);if(!targetNode)return\x20embedError(\x22Target\x20element\x20cannot\x20be\x20determined\x22,suppressConsole);if(page&&(pdfOpenParams.page=page),pdfOpenFragment=function(pdfParams){let\x20prop,string=\x22\x22;if(pdfParams){for(prop\x20in\x20pdfParams)pdfParams.hasOwnProperty(prop)&&(string+=encodeURIComponent(prop)+\x22=\x22+encodeURIComponent(pdfParams[prop])+\x22&\x22);string&&(string=(string=\x22#\x22+string).slice(0,string.length-1))}return\x20string}(pdfOpenParams),forcePDFJS&&PDFJS_URL)return\x20generatePDFJSMarkup(targetNode,url,pdfOpenFragment,PDFJS_URL,id,omitInlineStyles);if(supportsPDFs||assumptionMode&&isModernBrowser&&!isMobileDevice){return\x20function(embedType,targetNode,targetSelector,url,pdfOpenFragment,width,height,id,omitInlineStyles){emptyNodeContents(targetNode);let\x20embed=document.createElement(embedType);if(embed.src=url+pdfOpenFragment,embed.className=\x22pdfobject\x22,embed.type=\x22application/pdf\x22,id&&(embed.id=id),!omitInlineStyles){let\x20style=\x22embed\x22===embedType?\x22overflow:\x20auto;\x22:\x22border:\x20none;\x22;targetSelector&&targetSelector!==document.body?style+=\x22width:\x20\x22+width+\x22;\x20height:\x20\x22+height+\x22;\x22:style+=\x22position:\x20absolute;\x20top:\x200;\x20right:\x200;\x20bottom:\x200;\x20left:\x200;\x20width:\x20100%;\x20height:\x20100%;\x22,embed.style.cssText=style}return\x20targetNode.classList.add(\x22pdfobject-container\x22),targetNode.appendChild(embed),targetNode.getElementsByTagName(embedType)[0]}(forceIframe||supportRedirect&&isSafariDesktop?\x22iframe\x22:\x22embed\x22,targetNode,targetSelector,url,pdfOpenFragment,width,height,id,omitInlineStyles)}return\x20PDFJS_URL?generatePDFJSMarkup(targetNode,url,pdfOpenFragment,PDFJS_URL,id,omitInlineStyles):(fallbackLink&&(fallbackHTML=\x22string\x22==typeof\x20fallbackLink?fallbackLink:\x22<p>This\x20browser\x20does\x20not\x20support\x20inline\x20PDFs.\x20Please\x20download\x20the\x20PDF\x20to\x20view\x20it:\x20<a\x20href=\x27[url]\x27>Download\x20PDF</a></p>\x22,targetNode.innerHTML=fallbackHTML.replace(/\x5c[url\x5c]/g,url)),embedError(\x22This\x20browser\x20does\x20not\x20support\x20embedded\x20PDFs\x22,suppressConsole))};return{embed:function(a,b,c){return\x20embed(a,b,c)},pdfobjectversion:\x222.2.3\x22,supportsPDFs:supportsPDFs}});" +
      "if\x20(typeof\x20module\x20===\x20\x22object\x22\x20&&\x20module.exports)\x20{" +
      "this.PDFObject\x20=\x20module.exports;" +
      "}" +
      "PDFObject.embed(\x22" +
      b +
      "\x22,\x20\x22#content\x22,\x20{" +
      (f
        ? "\x22PDFJS_URL\x22:\x20\x22" +
          new URL("lib/pdfjs/web/viewer.html", document["baseURI"])["href"] +
          "\x22,\x20"
        : "") +
      "\x22fallbackLink\x22:\x20\x22" +
      g +
      "\x22," +
      "\x22forcePDFJS\x22:\x20" +
      h +
      "});" +
      "if(!PDFObject.supportsPDFs\x20&&\x20!" +
      f +
      "){" +
      "\x20var\x20iframeTimerId;" +
      "\x20function\x20startTimer(){" +
      "\x20\x20\x20\x20iframeTimerId\x20=\x20window.setTimeout(checkIframeLoaded,\x202000);" +
      "\x20}" +
      "\x20function\x20checkIframeLoaded(){\x20\x20" +
      "\x20\x20\x20\x20var\x20iframe\x20=\x20document.getElementById(\x22googleViewer\x22);" +
      "\x20\x20\x20\x20iframe.src\x20=\x20iframe.src;" +
      "\x20\x20\x20\x20iframeTimerId\x20=\x20window.setTimeout(checkIframeLoaded,\x202000);" +
      "\x20}" +
      "\x20document.getElementById(\x22googleViewer\x22).addEventListener(\x22load\x22,\x20function(){" +
      "\x20\x20\x20clearInterval(iframeTimerId);\x20" +
      "\x20});" +
      "\x20startTimer();" +
      "}" +
      "</script>";
    if (d == "WebFrame") {
      a["set"](
        "url",
        "data:text/html;charset=utf-8," +
          encodeURIComponent(
            "<!DOCTYPE\x20html>" +
              "<html>" +
              "<head></head>" +
              "<body\x20style=\x22height:100%;width:100%;overflow:hidden;margin:0px;background-color:rgb(82,\x2086,\x2089);\x22>" +
              i +
              "</body>" +
              "</html>"
          )
      );
    } else if (d == "HTML") {
      a["set"](
        "content",
        "data:text/html;charset=utf-8," + encodeURIComponent(i)
      );
    }
  }
};
TDV["Tour"]["Script"]["getKey"] = function (a) {
  return window[a];
};
TDV["Tour"]["Script"]["registerKey"] = function (a, b) {
  window[a] = b;
};
TDV["Tour"]["Script"]["unregisterKey"] = function (a) {
  delete window[a];
};
TDV["Tour"]["Script"]["existsKey"] = function (a) {
  return a in window;
};
//# sourceMappingURL=http://localhost:9000/script_v2021.1.2.js.map
//Generated with v2021.1.2, Tue Jun 29 2021
