!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 51));
})([
  function (e, t) {
    e.exports = lodash;
  },
  function (e, t) {
    e.exports = wp.hooks;
  },
  function (e, t, n) {
    "use strict";
    var i = n(29);
    e.exports = function (e) {
      return (function (e) {
        return function (t) {
          var n = t && t.children;
          if (n) return i(n, e, t);
          throw Error("Missing children in `parent` for `modifier`");
        };
      })(
        (function (e) {
          return function (t, n) {
            return e(t, n, this);
          };
        })(e)
      );
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function e(t, n) {
      var i,
        r,
        s,
        o = n || "";
      if (!t || (!("length" in t) && !t.type))
        throw Error("Expected node, not `" + t + "`");
      if ("string" == typeof t.value) return t.value;
      if (
        1 === (r = (s = "length" in t ? t : t.children).length) &&
        "value" in s[0]
      )
        return s[0].value;
      for (i = []; r--; ) i[r] = e(s[r], o);
      return i.join(o);
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = {
      affixSymbol:
        /^([\)\]\}\u0F3B\u0F3D\u169C\u2046\u207E\u208E\u2309\u230B\u232A\u2769\u276B\u276D\u276F\u2771\u2773\u2775\u27C6\u27E7\u27E9\u27EB\u27ED\u27EF\u2984\u2986\u2988\u298A\u298C\u298E\u2990\u2992\u2994\u2996\u2998\u29D9\u29DB\u29FD\u2E23\u2E25\u2E27\u2E29\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301E\u301F\uFD3E\uFE18\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE44\uFE48\uFE5A\uFE5C\uFE5E\uFF09\uFF3D\uFF5D\uFF60\uFF63]|["'\xBB\u2019\u201D\u203A\u2E03\u2E05\u2E0A\u2E0D\u2E1D\u2E21]|[!\.\?\u2026\u203D])\1*$/,
      newLine: /^[ \t]*((\r?\n|\r)[\t ]*)+$/,
      newLineMulti: /^[ \t]*((\r?\n|\r)[\t ]*){2,}$/,
      terminalMarker: /^((?:[!\.\?\u2026\u203D])+)$/,
      wordSymbolInner:
        /^((?:[&'\x2D\.:=\?@\xAD\xB7\u2010\u2011\u2019\u2027])|(?:_)+)$/,
      numerical:
        /^(?:[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C])+$/,
      digitStart: /^\d/,
      lowerInitial:
        /^(?:[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C3\uA7FA\uAB30-\uAB5A\uAB60-\uAB67\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]|\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43])/,
      surrogates: /[\uD800-\uDFFF]/,
      punctuation:
        /[!"'-\),-\/:;\?\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u201F\u2022-\u2027\u2032-\u203A\u203C-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,
      word: /[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D63\u0D66-\u0D78\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u17F0-\u17F9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABE\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u20D0-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BA\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA827\uA830-\uA835\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE6\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDF00-\uDF27\uDF30-\uDF54\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC52-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD46\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E\uDC5F\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF3B]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCF2\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
      whiteSpace:
        /[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        var n = -1,
          i = t && t.children;
        if (!i) throw Error("Missing children in `parent` for `visitor`");
        for (; ++n in i; ) e(i[n], n, t);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(17),
      r = n(20);
    function s() {
      (this.protocol = null),
        (this.slashes = null),
        (this.auth = null),
        (this.host = null),
        (this.port = null),
        (this.hostname = null),
        (this.hash = null),
        (this.search = null),
        (this.query = null),
        (this.pathname = null),
        (this.path = null),
        (this.href = null);
    }
    (t.parse = v),
      (t.resolve = function (e, t) {
        return v(e, !1, !0).resolve(t);
      }),
      (t.resolveObject = function (e, t) {
        return e ? v(e, !1, !0).resolveObject(t) : t;
      }),
      (t.format = function (e) {
        return (
          r.isString(e) && (e = v(e)),
          e instanceof s ? e.format() : s.prototype.format.call(e)
        );
      }),
      (t.Url = s);
    var o = /^([a-z0-9.+-]+:)/i,
      u = /:[0-9]*$/,
      a = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
      l = ["{", "}", "|", "\\", "^", "`"].concat([
        "<",
        ">",
        '"',
        "`",
        " ",
        "\r",
        "\n",
        "\t",
      ]),
      c = ["'"].concat(l),
      d = ["%", "/", "?", ";", "#"].concat(c),
      f = ["/", "?", "#"],
      p = /^[+a-z0-9A-Z_-]{0,63}$/,
      h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
      y = { javascript: !0, "javascript:": !0 },
      g = { javascript: !0, "javascript:": !0 },
      m = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0,
      },
      b = n(21);
    function v(e, t, n) {
      if (e && r.isObject(e) && e instanceof s) return e;
      var i = new s();
      return i.parse(e, t, n), i;
    }
    (s.prototype.parse = function (e, t, n) {
      if (!r.isString(e))
        throw new TypeError(
          "Parameter 'url' must be a string, not " + typeof e
        );
      var s = e.indexOf("?"),
        u = -1 != s && s < e.indexOf("#") ? "?" : "#",
        l = e.split(u);
      l[0] = l[0].replace(/\\/g, "/");
      var v = (e = l.join(u));
      if (((v = v.trim()), !n && 1 === e.split("#").length)) {
        var D = a.exec(v);
        if (D)
          return (
            (this.path = v),
            (this.href = v),
            (this.pathname = D[1]),
            D[2]
              ? ((this.search = D[2]),
                (this.query = t
                  ? b.parse(this.search.substr(1))
                  : this.search.substr(1)))
              : t && ((this.search = ""), (this.query = {})),
            this
          );
      }
      var w = o.exec(v);
      if (w) {
        var k = (w = w[0]).toLowerCase();
        (this.protocol = k), (v = v.substr(w.length));
      }
      if (n || w || v.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var F = "//" == v.substr(0, 2);
        !F || (w && g[w]) || ((v = v.substr(2)), (this.slashes = !0));
      }
      if (!g[w] && (F || (w && !m[w]))) {
        for (var E, C, A = -1, x = 0; x < f.length; x++)
          -1 === (S = v.indexOf(f[x])) || (-1 !== A && A <= S) || (A = S);
        for (
          -1 !== (C = -1 === A ? v.lastIndexOf("@") : v.lastIndexOf("@", A)) &&
            ((E = v.slice(0, C)),
            (v = v.slice(C + 1)),
            (this.auth = decodeURIComponent(E))),
            A = -1,
            x = 0;
          x < d.length;
          x++
        ) {
          var S;
          -1 === (S = v.indexOf(d[x])) || (-1 !== A && A <= S) || (A = S);
        }
        -1 === A && (A = v.length),
          (this.host = v.slice(0, A)),
          (v = v.slice(A)),
          this.parseHost(),
          (this.hostname = this.hostname || "");
        var j =
          "[" === this.hostname[0] &&
          "]" === this.hostname[this.hostname.length - 1];
        if (!j)
          for (
            var _ = this.hostname.split(/\./), B = ((x = 0), _.length);
            x < B;
            x++
          ) {
            var O = _[x];
            if (O && !O.match(p)) {
              for (var R = "", z = 0, P = O.length; z < P; z++)
                127 < O.charCodeAt(z) ? (R += "x") : (R += O[z]);
              if (!R.match(p)) {
                var T = _.slice(0, x),
                  q = _.slice(x + 1),
                  M = O.match(h);
                M && (T.push(M[1]), q.unshift(M[2])),
                  q.length && (v = "/" + q.join(".") + v),
                  (this.hostname = T.join("."));
                break;
              }
            }
          }
        (this.hostname =
          255 < this.hostname.length ? "" : this.hostname.toLowerCase()),
          j || (this.hostname = i.toASCII(this.hostname)),
          (this.host =
            (this.hostname || "") + (this.port ? ":" + this.port : "")),
          (this.href += this.host),
          j &&
            ((this.hostname = this.hostname.substr(
              1,
              this.hostname.length - 2
            )),
            "/" !== v[0] && (v = "/" + v));
      }
      if (!y[k])
        for (x = 0, B = c.length; x < B; x++) {
          var L = c[x];
          if (~v.indexOf(L)) {
            var $ = encodeURIComponent(L);
            $ === L && ($ = escape(L)), (v = v.split(L).join($));
          }
        }
      var N = v.indexOf("#");
      -1 != N && ((this.hash = v.substr(N)), (v = v.slice(0, N)));
      var I = v.indexOf("?");
      return (
        -1 != I
          ? ((this.search = v.substr(I)),
            (this.query = v.substr(1 + I)),
            t && (this.query = b.parse(this.query)),
            (v = v.slice(0, I)))
          : t && ((this.search = ""), (this.query = {})),
        v && (this.pathname = v),
        m[k] && this.hostname && !this.pathname && (this.pathname = "/"),
        (this.pathname || this.search) &&
          (this.path = (this.pathname || "") + (this.search || "")),
        (this.href = this.format()),
        this
      );
    }),
      (s.prototype.format = function () {
        var e = this.auth || "";
        e &&
          ((e = (e = encodeURIComponent(e)).replace(/%3A/i, ":")), (e += "@"));
        var t = this.protocol || "",
          n = this.pathname || "",
          i = this.hash || "",
          s = !1,
          o = "";
        this.host
          ? (s = e + this.host)
          : this.hostname &&
            ((s =
              e +
              (~this.hostname.indexOf(":")
                ? "[" + this.hostname + "]"
                : this.hostname)),
            this.port && (s += ":" + this.port)),
          this.query &&
            r.isObject(this.query) &&
            Object.keys(this.query).length &&
            (o = b.stringify(this.query));
        var u = this.search || (o && "?" + o) || "";
        return (
          t && ":" != t.substr(-1) && (t += ":"),
          this.slashes || ((!t || m[t]) && !1 !== s)
            ? ((s = "//" + (s || "")), n && "/" != n[0] && (n = "/" + n))
            : (s = s || ""),
          i && "#" != i[0] && (i = "#" + i),
          u && "?" != u[0] && (u = "?" + u),
          t +
            s +
            (n = n.replace(/[?#]/g, function (e) {
              return encodeURIComponent(e);
            })) +
            (u = u.replace("#", "%23")) +
            i
        );
      }),
      (s.prototype.resolve = function (e) {
        return this.resolveObject(v(e, !1, !0)).format();
      }),
      (s.prototype.resolveObject = function (e) {
        if (r.isString(e)) {
          var t = new s();
          t.parse(e, !1, !0), (e = t);
        }
        for (var n = new s(), i = Object.keys(this), o = 0; o < i.length; o++) {
          var u = i[o];
          n[u] = this[u];
        }
        if (((n.hash = e.hash), "" === e.href)) return (n.href = n.format()), n;
        if (e.slashes && !e.protocol) {
          for (var a = Object.keys(e), l = 0; l < a.length; l++) {
            var c = a[l];
            "protocol" !== c && (n[c] = e[c]);
          }
          return (
            m[n.protocol] &&
              n.hostname &&
              !n.pathname &&
              (n.path = n.pathname = "/"),
            (n.href = n.format()),
            n
          );
        }
        if (e.protocol && e.protocol !== n.protocol) {
          if (!m[e.protocol]) {
            for (var d = Object.keys(e), f = 0; f < d.length; f++) {
              var p = d[f];
              n[p] = e[p];
            }
            return (n.href = n.format()), n;
          }
          if (((n.protocol = e.protocol), e.host || g[e.protocol]))
            n.pathname = e.pathname;
          else {
            for (
              var h = (e.pathname || "").split("/");
              h.length && !(e.host = h.shift());

            );
            e.host || (e.host = ""),
              e.hostname || (e.hostname = ""),
              "" !== h[0] && h.unshift(""),
              h.length < 2 && h.unshift(""),
              (n.pathname = h.join("/"));
          }
          return (
            (n.search = e.search),
            (n.query = e.query),
            (n.host = e.host || ""),
            (n.auth = e.auth),
            (n.hostname = e.hostname || e.host),
            (n.port = e.port),
            (n.pathname || n.search) &&
              (n.path = (n.pathname || "") + (n.search || "")),
            (n.slashes = n.slashes || e.slashes),
            (n.href = n.format()),
            n
          );
        }
        var y = e.host || (e.pathname && "/" == e.pathname[0]),
          b =
            y || (n.pathname && "/" == n.pathname[0]) || (n.host && e.pathname),
          v = b,
          D = (n.pathname && n.pathname.split("/")) || [],
          w =
            ((h = (e.pathname && e.pathname.split("/")) || []),
            n.protocol && !m[n.protocol]);
        if (
          (w &&
            ((n.hostname = ""),
            (n.port = null),
            n.host && ("" === D[0] ? (D[0] = n.host) : D.unshift(n.host)),
            (n.host = ""),
            e.protocol &&
              ((e.hostname = null),
              (e.port = null),
              e.host && ("" === h[0] ? (h[0] = e.host) : h.unshift(e.host)),
              (e.host = null)),
            (b = b && ("" === h[0] || "" === D[0]))),
          y)
        )
          (n.host = e.host || "" === e.host ? e.host : n.host),
            (n.hostname =
              e.hostname || "" === e.hostname ? e.hostname : n.hostname),
            (n.search = e.search),
            (n.query = e.query),
            (D = h);
        else if (h.length)
          (D = D || []).pop(),
            (D = D.concat(h)),
            (n.search = e.search),
            (n.query = e.query);
        else if (!r.isNullOrUndefined(e.search))
          return (
            w &&
              ((n.hostname = n.host = D.shift()),
              (A =
                !(!n.host || n.host.indexOf("@") <= 0) && n.host.split("@")) &&
                ((n.auth = A.shift()), (n.host = n.hostname = A.shift()))),
            (n.search = e.search),
            (n.query = e.query),
            (r.isNull(n.pathname) && r.isNull(n.search)) ||
              (n.path =
                (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
            (n.href = n.format()),
            n
          );
        if (!D.length)
          return (
            (n.pathname = null),
            (n.path = n.search ? "/" + n.search : null),
            (n.href = n.format()),
            n
          );
        for (
          var k = D.slice(-1)[0],
            F =
              ((n.host || e.host || 1 < D.length) &&
                ("." === k || ".." === k)) ||
              "" === k,
            E = 0,
            C = D.length;
          0 <= C;
          C--
        )
          "." === (k = D[C])
            ? D.splice(C, 1)
            : ".." === k
            ? (D.splice(C, 1), E++)
            : E && (D.splice(C, 1), E--);
        if (!b && !v) for (; E--; ) D.unshift("..");
        !b || "" === D[0] || (D[0] && "/" == D[0][0]) || D.unshift(""),
          F && "/" != D.join("/").substr(-1) && D.push("");
        var A,
          x = "" === D[0] || (D[0] && "/" == D[0][0]);
        return (
          w &&
            ((n.hostname = n.host = x ? "" : D.length ? D.shift() : ""),
            (A = !(!n.host || n.host.indexOf("@") <= 0) && n.host.split("@")) &&
              ((n.auth = A.shift()), (n.host = n.hostname = A.shift()))),
          (b = b || (n.host && D.length)) && !x && D.unshift(""),
          D.length
            ? (n.pathname = D.join("/"))
            : ((n.pathname = null), (n.path = null)),
          (r.isNull(n.pathname) && r.isNull(n.search)) ||
            (n.path =
              (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
          (n.auth = e.auth || n.auth),
          (n.slashes = n.slashes || e.slashes),
          (n.href = n.format()),
          n
        );
      }),
      (s.prototype.parseHost = function () {
        var e = this.host,
          t = u.exec(e);
        t &&
          (":" !== (t = t[0]) && (this.port = t.substr(1)),
          (e = e.substr(0, e.length - t.length))),
          e && (this.hostname = e);
      });
  },
  function (e, t, n) {
    "use strict";
    var i = n(5);
    function r(e) {
      e.position || (e.position = {});
    }
    e.exports = i(function (e, t, n) {
      var i = n.children;
      e.position &&
        (0 !== t ||
          (n.position && n.position.start) ||
          (r(n), (n.position.start = e.position.start)),
        t !== i.length - 1 ||
          (n.position && n.position.end) ||
          (r(n), (n.position.end = e.position.end)));
    });
  },
  function (e, t, n) {
    "use strict";
    var i = n(5);
    e.exports = i(function (e, t, n) {
      var i,
        r = e.children;
      r &&
        0 !== r.length &&
        "WhiteSpaceNode" === r[0].type &&
        (n.children.splice(t, 0, r.shift()),
        (i = r[0]) &&
          i.position &&
          e.position &&
          (e.position.start = i.position.start));
    });
  },
  function (e, t, n) {
    "use strict";
    var i = n(2);
    e.exports = i(function (e, t, n) {
      var i,
        r = e.children;
      if (r && 0 !== r.length && "WhiteSpaceNode" === r[r.length - 1].type)
        return (
          n.children.splice(t + 1, 0, e.children.pop()),
          (i = r[r.length - 1]) &&
            i.position &&
            e.position &&
            (e.position.end = i.position.end),
          t
        );
    });
  },
  function (e, t, n) {
    "use strict";
    var i = n(2);
    e.exports = i(function (e, t, n) {
      if ("children" in e && 0 === e.children.length)
        return n.children.splice(t, 1), t;
    });
  },
  function (e, t, n) {
    e.exports = { labels: n(47), scoringStrategy: n(48) };
  },
  function (e, t) {
    e.exports = wp.wordcount;
  },
  function (e, t, n) {
    "use strict";
    var i = n(24),
      r = n(3),
      s = n(5),
      o = n(2);
    (e.exports = a), (l.prototype = i.prototype);
    var u = new l();
    function a(e, t) {
      if (!(this instanceof a)) return new a(e, t);
      i.apply(this, arguments);
    }
    function l() {}
    ((a.prototype = u).tokenizeSentencePlugins = [
      s(function (e, t, n) {
        var i, s, o, u, a;
        if ("PunctuationNode" === e.type || "SymbolNode" === e.type)
          if (((u = (i = n.children).length), "/" === (a = r(e))))
            (s = i[t - 1]) &&
              "w" === y(r(s)) &&
              (i.splice(t, 1),
              s.children.push(e),
              s.position && e.position && (s.position.end = e.position.end));
          else if (h.test(a)) {
            if (
              ((s = i[t - 1]),
              2 < t &&
                t < u - 1 &&
                "WordNode" === s.type &&
                "WhiteSpaceNode" === i[t - 2].type &&
                "WhiteSpaceNode" === i[t + 1].type &&
                f.test(y(r(s))))
            )
              return (
                i.splice(t, 1),
                s.children.push(e),
                void (
                  s.position &&
                  e.position &&
                  (s.position.end = e.position.end)
                )
              );
            t === u - 1 ||
              "WordNode" !== i[t + 1].type ||
              (0 !== t && "WordNode" === i[t - 1].type) ||
              ((a = y(r((s = i[t + 1])))),
              p.test(a)
                ? (i.splice(t, 1),
                  (s.children = [e].concat(s.children)),
                  s.position &&
                    e.position &&
                    (s.position.start = e.position.start))
                : "n" === a &&
                  t < u - 2 &&
                  h.test(r(i[t + 2])) &&
                  ((o = i[t + 2]),
                  i.splice(t, 1),
                  i.splice(t + 1, 1),
                  (s.children = [e].concat(s.children, o)),
                  s.position &&
                    (e.position && (s.position.start = e.position.start),
                    o.position && (s.position.end = o.position.end))));
          }
      }),
    ].concat(u.tokenizeSentencePlugins)),
      (u.tokenizeParagraphPlugins = [
        o(function (e, t, n) {
          var i,
            s,
            o = e.children,
            u = o[o.length - 1],
            a = o[o.length - 2];
          if (
            u &&
            "." === r(u) &&
            a &&
            "WordNode" === a.type &&
            ((i = r(a)),
            (c.test(y(i)) || d.test(i)) &&
              (a.children.push(u),
              o.pop(),
              u.position && a.position && (a.position.end = u.position.end),
              (s = n.children[t + 1])))
          )
            return (
              (e.children = o.concat(s.children)),
              n.children.splice(t + 1, 1),
              s.position && e.position && (e.position.end = s.position.end),
              t - 1
            );
        }),
      ].concat(u.tokenizeParagraphPlugins));
    var c =
        /^(inc|ltd|bbls?|cu|doz|fl|ft|gal|gr|gro|in|kt|lbs?|mi|oz|pt|qt|sq|tbsp|tsp|yds?|sec|min|hr|mon|tue|tues|wed|thu|thurs|fri|sat|sun|jan|feb|mar|apr|jun|jul|aug|sep|sept|oct|nov|dec)$/,
      d =
        /^(Mr|Mrs|Miss|Ms|Mss|Mses|Mlle|Mme|M|Messrs|Mmes|Jr|Sr|Snr|Dr|Mgr|Atty|Prof|Hon|Rev|Fr|Msgr|Sr|Br|St|Pres|Supt|Rep|Sen|Gov|Amb|Treas|Sec|Amd|Brig|Gen|Cdr|Col|Capt|Lt|Maj|Sgt|Po|Wo|Ph|Ave|Blvd|Mt|Rd|Bldgs?|Nat|Natl|Rt|Rte|Co|Pk|Sq|Dr|Pt|St|Ft|Pen|Terr|Hwy|Fwy|Pkwy|Ala|Ariz|Ark|Cal|Calif|Col|Colo|Conn|Del|Fla|Ga|Ida|Id|Ill|Ind|Ia|Kan|Kans|Ken|Ky|La|Me|Md|Mass|Mich|Minn|Miss|Mo|Mont|Neb|Nebr|Nev|Mex|Dak|Okla|Ok|Ore|Penna|Penn|Pa|Tenn|Tex|Ut|Vt|Va|Wash|Wis|Wisc|Wyo|Alta|Man|Ont|Qué|Que|Sask|Yuk|Beds|Berks|Bucks|Cambs|Ches|Corn|Cumb|Derbys|Derbs|Dev|Dor|Dur|Glos|Hants|Here|Heref|Herts|Hunts|Lancs|Leics|Lincs|Mx|Middx|Mddx|Norf|Northants|Northumb|Northd|Notts|Oxon|Rut|Shrops|Salop|Som|Staffs|Staf|Suff|Sy|Sx|Ssx|Warks|War|Warw|Westm|Wilts|Worcs|Yorks)$/,
      f = /^(o|ol)$/,
      p = /^(im|er|em|cause|twas|tis|twere|\d\ds?)$/,
      h = /^['\u2019]$/;
    function y(e) {
      return e.toLowerCase();
    }
  },
  function (e, t) {
    e.exports = wp.autop;
  },
  function (e, t) {
    e.exports = jQuery;
  },
  function (e, t, n) {
    function i(e) {
      this.options = e;
    }
    var r, s, o;
    (r = n(43)),
      (s = n(44)),
      (o = n(45)),
      (i.prototype.registerLanguage = function (e, t) {
        o.addLanguage(e, t);
      }),
      (i.prototype.analyze = function (e, t, n) {
        void 0 === e && (e = ""), "function" == typeof t && ((n = t), (t = {}));
        var i = (t = t || {}).language || "en",
          u = o.getLabels(i);
        "object" == typeof t.extras && (u = Object.assign(u, t.extras));
        for (
          var a = s(e), l = 0, c = [], d = [], f = [], p = [], h = a.length;
          h--;

        ) {
          var y = a[h];
          if (u.hasOwnProperty(y)) {
            c.push(y);
            var g = u[y];
            0 < (g = o.applyScoringStrategy(i, a, h, g)) && d.push(y),
              g < 0 && f.push(y),
              (l += g);
            var m = {};
            (m[y] = g), p.push(m);
          }
        }
        var b = {
          score: l,
          comparative: 0 < a.length ? l / a.length : 0,
          calculation: p,
          tokens: a,
          words: c,
          positive: d,
          negative: f,
        };
        if ("function" != typeof n) return b;
        r.nextTick(function () {
          n(null, b);
        });
      }),
      (e.exports = i);
  },
  function (e, t, n) {
    function i(e) {
      throw new RangeError(C[e]);
    }
    function r(e, t) {
      for (var n = e.length, i = []; n--; ) i[n] = t(e[n]);
      return i;
    }
    function s(e, t) {
      var n = e.split("@"),
        i = "";
      return (
        1 < n.length && ((i = n[0] + "@"), (e = n[1])),
        i + r((e = e.replace(E, ".")).split("."), t).join(".")
      );
    }
    function o(e) {
      for (var t, n, i = [], r = 0, s = e.length; r < s; )
        (t = e.charCodeAt(r++)) < 55296 || 56319 < t || s <= r
          ? i.push(t)
          : 56320 == (64512 & (n = e.charCodeAt(r++)))
          ? i.push(((1023 & t) << 10) + (1023 & n) + 65536)
          : (i.push(t), r--);
      return i;
    }
    function u(e) {
      return r(e, function (e) {
        var t = "";
        return (
          65535 < e &&
            ((t += S((((e -= 65536) >>> 10) & 1023) | 55296)),
            (e = 56320 | (1023 & e))),
          t + S(e)
        );
      }).join("");
    }
    function a(e, t) {
      return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
    }
    function l(e, t, n) {
      var i = 0;
      for (e = n ? x(e / b) : e >> 1, e += x(e / t); (A * g) >> 1 < e; i += h)
        e = x(e / A);
      return x(i + ((A + 1) * e) / (e + m));
    }
    function c(e) {
      var t,
        n,
        r,
        s,
        o,
        a,
        c,
        d,
        f,
        m,
        b,
        k = [],
        F = e.length,
        E = 0,
        C = D,
        A = v;
      for ((n = e.lastIndexOf(w)) < 0 && (n = 0), r = 0; r < n; ++r)
        e.charCodeAt(r) < 128 || i("not-basic"), k.push(e.charCodeAt(r));
      for (s = 0 < n ? n + 1 : 0; s < F; ) {
        for (
          o = E, a = 1, c = h;
          s < F || i("invalid-input"),
            ((d =
              (b = e.charCodeAt(s++)) - 48 < 10
                ? b - 22
                : b - 65 < 26
                ? b - 65
                : b - 97 < 26
                ? b - 97
                : h) < h &&
              d <= x((p - E) / a)) ||
              i("overflow"),
            (E += d * a),
            d >= (f = A < c ? (c < A + g ? c - A : g) : y);
          c += h
        )
          a > x(p / (m = h - f)) && i("overflow"), (a *= m);
        (A = l(E - o, (t = k.length + 1), 0 == o)),
          x(E / t) > p - C && i("overflow"),
          (C += x(E / t)),
          (E %= t),
          k.splice(E++, 0, C);
      }
      return u(k);
    }
    function d(e) {
      var t,
        n,
        r,
        s,
        u,
        c,
        d,
        f,
        m,
        b,
        k,
        F,
        E,
        C,
        A,
        j = [];
      for (F = (e = o(e)).length, t = D, u = v, c = n = 0; c < F; ++c)
        (k = e[c]) < 128 && j.push(S(k));
      for (r = s = j.length, s && j.push(w); r < F; ) {
        for (d = p, c = 0; c < F; ++c) t <= (k = e[c]) && k < d && (d = k);
        for (
          d - t > x((p - n) / (E = r + 1)) && i("overflow"),
            n += (d - t) * E,
            t = d,
            c = 0;
          c < F;
          ++c
        )
          if (((k = e[c]) < t && ++n > p && i("overflow"), k == t)) {
            for (
              f = n, m = h;
              f >= (b = u < m ? (m < u + g ? m - u : g) : y);
              m += h
            )
              j.push(S(a(b + ((A = f - b) % (C = h - b)), 0))), (f = x(A / C));
            j.push(S(a(f, 0))), (u = l(n, E, r == s)), (n = 0), ++r;
          }
        ++n, ++t;
      }
      return j.join("");
    }
    var f, p, h, y, g, m, b, v, D, w, k, F, E, C, A, x, S;
    (f = n(18)(e)),
      n(19),
      (p = 2147483647),
      (g = 26),
      (m = 38),
      (b = 700),
      (v = 72),
      (D = 128),
      (w = "-"),
      (k = /^xn--/),
      (F = /[^\x20-\x7E]/),
      (E = /[\x2E\u3002\uFF0E\uFF61]/g),
      (C = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input",
      }),
      (A = (h = 36) - (y = 1)),
      (x = Math.floor),
      (S = String.fromCharCode),
      (f.exports = {
        version: "1.4.1",
        ucs2: { decode: o, encode: u },
        decode: c,
        encode: d,
        toASCII: function (e) {
          return s(e, function (e) {
            return F.test(e) ? "xn--" + d(e) : e;
          });
        },
        toUnicode: function (e) {
          return s(e, function (e) {
            return k.test(e) ? c(e.slice(4).toLowerCase()) : e;
          });
        },
      });
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    e.exports = {
      isString: function (e) {
        return "string" == typeof e;
      },
      isObject: function (e) {
        return "object" == typeof e && null !== e;
      },
      isNull: function (e) {
        return null === e;
      },
      isNullOrUndefined: function (e) {
        return null == e;
      },
    };
  },
  function (e, t, n) {
    "use strict";
    (t.decode = t.parse = n(22)), (t.encode = t.stringify = n(23));
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r) {
      n = n || "=";
      var s = {};
      if ("string" != typeof e || 0 === e.length) return s;
      var o = /\+/g;
      e = e.split((t = t || "&"));
      var u = 1e3;
      r && "number" == typeof r.maxKeys && (u = r.maxKeys);
      var a = e.length;
      0 < u && u < a && (a = u);
      for (var l = 0; l < a; ++l) {
        var c,
          d,
          f,
          p,
          h = e[l].replace(o, "%20"),
          y = h.indexOf(n);
        (d = y < 0 ? ((c = h), "") : ((c = h.substr(0, y)), h.substr(1 + y))),
          (f = decodeURIComponent(c)),
          (p = decodeURIComponent(d)),
          Object.prototype.hasOwnProperty.call(s, f)
            ? i(s[f])
              ? s[f].push(p)
              : (s[f] = [s[f], p])
            : (s[f] = p);
      }
      return s;
    };
    var i =
      Array.isArray ||
      function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      };
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      switch (typeof e) {
        case "string":
          return e;
        case "boolean":
          return e ? "true" : "false";
        case "number":
          return isFinite(e) ? e : "";
        default:
          return "";
      }
    }
    e.exports = function (e, t, n, u) {
      return (
        (t = t || "&"),
        (n = n || "="),
        null === e && (e = void 0),
        "object" == typeof e
          ? s(o(e), function (o) {
              var u = encodeURIComponent(i(o)) + n;
              return r(e[o])
                ? s(e[o], function (e) {
                    return u + encodeURIComponent(i(e));
                  }).join(t)
                : u + encodeURIComponent(i(e[o]));
            }).join(t)
          : u
          ? encodeURIComponent(i(u)) + n + encodeURIComponent(i(e))
          : ""
      );
    };
    var r =
      Array.isArray ||
      function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      };
    function s(e, t) {
      if (e.map) return e.map(t);
      for (var n = [], i = 0; i < e.length; i++) n.push(t(e[i], i));
      return n;
    }
    var o =
      Object.keys ||
      function (e) {
        var t = [];
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        return t;
      };
  },
  function (e, t, n) {
    "use strict";
    e.exports = n(25);
  },
  function (e, t, n) {
    "use strict";
    var i = n(26),
      r = n(4);
    function s(e, t) {
      var n = t || e;
      if (!(this instanceof s)) return new s(e, t);
      this.doc = n ? n + "" : null;
    }
    var o = (e.exports = s).prototype;
    function u(e) {
      return (
        (e += "Node"),
        function (t, n, i) {
          return (
            null == t && (t = ""), (n || y)(t)({ type: e, value: t + "" }, i)
          );
        }
      );
    }
    function a(e, t, n) {
      e.prototype[t] = function () {
        return this.run(t, n.apply(this, arguments));
      };
    }
    function l(e) {
      return function (t, n) {
        var i;
        if (!(t in this))
          throw Error(
            "Illegal Invocation: Unsupported `key` for `use(key, plugins)`. Make sure `key` is a supported function"
          );
        n &&
          ((i = t + "Plugins"),
          (n = "function" == typeof n ? [n] : n.concat()),
          this[i] || (this[i] = []),
          e(this, i, n));
      };
    }
    (o.position = !0),
      (o.tokenizeSymbol = u("Symbol")),
      (o.tokenizeWhiteSpace = u("WhiteSpace")),
      (o.tokenizePunctuation = u("Punctuation")),
      (o.tokenizeSource = u("Source")),
      (o.tokenizeText = u("Text")),
      (o.run = function (e, t) {
        var n = this[e + "Plugins"],
          i = -1;
        if (n) for (; n[++i]; ) n[i](t);
        return t;
      }),
      (o.use = l(function (e, t, n) {
        e[t] = e[t].concat(n);
      })),
      (o.useFirst = l(function (e, t, n) {
        e[t] = n.concat(e[t]);
      })),
      (o.parse = function (e) {
        return this.tokenizeRoot(e || this.doc);
      }),
      (o.tokenize = function (e) {
        return (function (e, t) {
          var n, i, r, s, o, u, a, l, h, y, g, m;
          if (
            (null == t ? (t = "") : t instanceof String && (t = "" + t),
            "string" != typeof t)
          ) {
            if ("length" in t && (!t[0] || t[0].type)) return t;
            throw Error(
              "Illegal invocation: '" +
                t +
                "' is not a valid argument for 'ParseLatin'"
            );
          }
          if (((n = []), !t)) return n;
          for (
            i = o = 0,
              s = r = 1,
              m = e.position
                ? function (e) {
                    var t = (function () {
                      var e = w();
                      return function (t) {
                        return (t.position = new D(e)), t;
                      };
                    })();
                    return (
                      (function (e) {
                        var t = e.length,
                          n = -1,
                          o = -1;
                        for (i += t; ++n < t; )
                          "\n" == e[0 | n] && ((o = n), r++);
                        -1 === o ? (s += t) : (s = t - o);
                      })(e),
                      function () {
                        return t(v.apply(null, arguments));
                      }
                    );
                  }
                : function () {
                    return function () {
                      return v.apply(null, arguments);
                    };
                  },
              u = t.length,
              l = h = "";
            o < u;

          )
            (g = p.test((a = t[0 | o]))
              ? "WhiteSpace"
              : f.test(a)
              ? "Punctuation"
              : c.test(a)
              ? "Word"
              : "Symbol"),
              b(),
              (h = a),
              (a = ""),
              (y = g),
              (g = null),
              o++;
          return b(), n;
          function b() {
            y !== g ||
            ("Word" !== y && "WhiteSpace" !== y && a !== h && !d.test(a))
              ? (l && e["tokenize" + y](l, m), (l = a))
              : (l += a);
          }
          function v(e, t) {
            return t ? t.children.push(e) : n.push(e), e;
          }
          function D(e) {
            (this.start = e), (this.end = w());
          }
          function w() {
            return { line: r, column: s, offset: i };
          }
        })(this, e);
      }),
      a(s, "tokenizeWord", function (e, t) {
        var n = (t || y)(""),
          i = { type: "WordNode", children: [] };
        return this.tokenizeText(e, t, i), n(i);
      }),
      a(
        s,
        "tokenizeSentence",
        i({ type: "SentenceNode", tokenizer: "tokenize" })
      ),
      a(
        s,
        "tokenizeParagraph",
        i({
          type: "ParagraphNode",
          delimiter: r.terminalMarker,
          delimiterType: "PunctuationNode",
          tokenizer: "tokenizeSentence",
        })
      ),
      a(
        s,
        "tokenizeRoot",
        i({
          type: "RootNode",
          delimiter: r.newLine,
          delimiterType: "WhiteSpaceNode",
          tokenizer: "tokenizeParagraph",
        })
      ),
      o.use("tokenizeSentence", [
        n(28),
        n(30),
        n(31),
        n(32),
        n(33),
        n(34),
        n(7),
      ]),
      o.use("tokenizeParagraph", [
        n(35),
        n(36),
        n(37),
        n(38),
        n(39),
        n(40),
        n(41),
        n(8),
        n(9),
        n(42),
        n(10),
        n(7),
      ]),
      o.use("tokenizeRoot", [n(8), n(9), n(10), n(7)]);
    var c = r.word,
      d = r.surrogates,
      f = r.punctuation,
      p = r.whiteSpace;
    function h(e, t) {
      return t && t.children.push(e), e;
    }
    function y() {
      return h;
    }
  },
  function (e, t, n) {
    "use strict";
    var i = n(27);
    e.exports = function (e) {
      var t = e.type,
        n = e.tokenizer,
        r = e.delimiter,
        s = r && i(e.delimiterType, r);
      return function (e) {
        var i = this[n](e);
        return { type: t, children: s ? s(i) : i };
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(3);
    e.exports = function (e, t) {
      return function (n) {
        for (
          var r,
            s,
            o,
            u = [],
            a = n.children,
            l = n.type,
            c = a.length,
            d = -1,
            f = c - 1,
            p = 0;
          ++d < c;

        )
          (d === f || (a[d].type === e && t.test(i(a[d])))) &&
            ((r = a[p]),
            (s = a[d]),
            (o = { type: l, children: a.slice(p, d + 1) }),
            r.position &&
              s.position &&
              (o.position = { start: r.position.start, end: s.position.end }),
            u.push(o),
            (p = d + 1));
        return u;
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(3),
      r = n(2);
    e.exports = r(function (e, t, n) {
      var r, s;
      if (
        ("SymbolNode" === e.type || "PunctuationNode" === e.type) &&
        "&" === i(e) &&
        ((s = (r = n.children)[t + 1]),
        (0 === t || "WordNode" !== r[t - 1].type) && s && "WordNode" === s.type)
      )
        return (
          r.splice(t, 1),
          s.children.unshift(e),
          s.position && e.position && (s.position.start = e.position.start),
          t - 1
        );
    });
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n) {
      var r,
        s = -1;
      if (!e) throw Error("Iterate requires that |this| not be " + e);
      if (!i.call(e, "length"))
        throw Error("Iterate requires that |this| has a `length`");
      if ("function" != typeof t) throw Error("`callback` must be a function");
      for (; ++s < e.length; )
        s in e &&
          "number" == typeof (r = t.call(n, e[s], s, e)) &&
          (r < 0 && (s = 0), (s = r - 1));
    };
    var i = {}.hasOwnProperty;
  },
  function (e, t, n) {
    "use strict";
    var i = n(3),
      r = n(2);
    e.exports = r(function (e, t, n) {
      var r, s, o;
      if (
        0 !== t &&
        ("SymbolNode" === e.type || "PunctuationNode" === e.type) &&
        "-" === i(e) &&
        ((s = (r = n.children)[t - 1]),
        (!(o = r[t + 1]) || "WordNode" !== o.type) &&
          s &&
          "WordNode" === s.type)
      )
        return (
          r.splice(t, 1),
          s.children.push(e),
          s.position && e.position && (s.position.end = e.position.end),
          t
        );
    });
  },
  function (e, t, n) {
    "use strict";
    var i = n(3),
      r = n(2),
      s = n(4);
    e.exports = r(function (e, t, n) {
      var r, s, u, a, l, c, d;
      if (
        0 !== t &&
        ("SymbolNode" === e.type || "PunctuationNode" === e.type) &&
        (u = (r = n.children)[t - 1]) &&
        "WordNode" === u.type
      ) {
        for (l = t - 1, c = [], d = []; r[++l]; )
          if ("WordNode" === (s = r[l]).type)
            (c = c.concat(d, s.children)), (d = []);
          else {
            if (
              ("SymbolNode" !== s.type && "PunctuationNode" !== s.type) ||
              !o.test(i(s))
            )
              break;
            d.push(s);
          }
        if (0 !== c.length)
          return (
            0 !== d.length && (l -= d.length),
            r.splice(t, l - t),
            (u.children = u.children.concat(c)),
            (a = c[c.length - 1]),
            u.position && a.position && (u.position.end = a.position.end),
            t
          );
      }
    });
    var o = s.wordSymbolInner;
  },
  function (e, t, n) {
    "use strict";
    var i = n(3),
      r = n(2);
    e.exports = r(function (e, t, n) {
      var r,
        o,
        u,
        a,
        l,
        c,
        d,
        f = n.children;
      if (
        ((o = f[t + 1]),
        (r = f[t - 1]) &&
          "WordNode" === r.type &&
          ("SymbolNode" === e.type || "PunctuationNode" === e.type) &&
          i(e) === s &&
          ((u = i(r)),
          (l = [(c = e)]),
          (d = 1),
          o &&
            "WordNode" === o.type &&
            ((a = i(o)), (l = l.concat((c = o).children)), d++),
          u.length < 3 && (!a || a.length < 3)))
      )
        return (
          (r.children = r.children.concat(l)),
          f.splice(t, d),
          r.position && c.position && (r.position.end = c.position.end),
          t
        );
    });
    var s = "/";
  },
  function (e, t, n) {
    "use strict";
    var i = n(3),
      r = n(2),
      s = n(4);
    e.exports = r(function (e, t, n) {
      var r, s, u, a, l, c, d;
      if (
        0 !== t &&
        "." === i(e) &&
        ((a = (u = (s = (r = n.children)[t - 1]).children) && u.length),
        "WordNode" === s.type && 1 !== a && a % 2 != 0)
      ) {
        for (l = a, c = !0; u[--l]; )
          if (((d = i(u[l])), l % 2 == 0)) {
            if (1 < d.length) return;
            o.test(d) || (c = !1);
          } else if ("." !== d) {
            if (l < a - 2) break;
            return;
          }
        if (!c)
          return (
            r.splice(t, 1),
            u.push(e),
            s.position && e.position && (s.position.end = e.position.end),
            t
          );
      }
    });
    var o = s.numerical;
  },
  function (e, t, n) {
    "use strict";
    var i = n(2);
    e.exports = i(function (e, t, n) {
      var i,
        r = n.children;
      if ("WordNode" === e.type && (i = r[t + 1]) && "WordNode" === i.type)
        return (
          r.splice(t + 1, 1),
          (e.children = e.children.concat(i.children)),
          i.position && e.position && (e.position.end = i.position.end),
          t
        );
    });
  },
  function (e, t, n) {
    "use strict";
    var i = n(2);
    e.exports = i(function (e, t, n) {
      for (var i, r, s = e.children, o = -1; s[++o]; )
        if ("WordNode" === s[o].type) return;
      if ((i = n.children[t - 1]))
        return (
          (i.children = i.children.concat(s)),
          n.children.splice(t, 1),
          i.position && e.position && (i.position.end = e.position.end),
          t
        );
      (r = n.children[t + 1]) &&
        ((r.children = s.concat(r.children)),
        r.position && e.position && (r.position.start = e.position.start),
        n.children.splice(t, 1));
    });
  },
  function (e, t, n) {
    "use strict";
    var i = n(3),
      r = n(2),
      s = n(4);
    e.exports = r(function (e, t, n) {
      var r,
        s,
        u,
        a = e.children;
      if (
        a &&
        0 !== a.length &&
        0 !== t &&
        ((s = a[1]),
        (u = n.children[t - 1]),
        ("SymbolNode" === (r = a[0]).type || "PunctuationNode" === r.type) &&
          o.test(i(r)))
      )
        return (
          u.children.push(a.shift()),
          r.position && u.position && (u.position.end = r.position.end),
          s &&
            s.position &&
            e.position &&
            (e.position.start = s.position.start),
          t - 1
        );
    });
    var o = s.affixSymbol;
  },
  function (e, t, n) {
    "use strict";
    var i = n(3),
      r = n(2),
      s = n(4);
    e.exports = r(function (e, t, n) {
      var r,
        s,
        u,
        a,
        l = e.children;
      if (l && 0 !== l.length && 0 !== t)
        for (r = -1; l[++r]; ) {
          if ("WordNode" === (s = l[r]).type) {
            if (!o.test(i(s))) return;
            return (
              ((a = (u = n.children)[t - 1]).children = a.children.concat(l)),
              u.splice(t, 1),
              a.position && e.position && (a.position.end = e.position.end),
              t
            );
          }
          if ("SymbolNode" === s.type || "PunctuationNode" === s.type) return;
        }
    });
    var o = s.lowerInitial;
  },
  function (e, t, n) {
    "use strict";
    var i = n(3),
      r = n(2),
      s = n(4);
    e.exports = r(function (e, t, n) {
      var r = e.children,
        s = n.children,
        u = s[t - 1],
        a = r[0];
      if (u && a && "WordNode" === a.type && o.test(i(a)))
        return (
          (u.children = u.children.concat(r)),
          s.splice(t, 1),
          u.position && e.position && (u.position.end = e.position.end),
          t
        );
    });
    var o = s.digitStart;
  },
  function (e, t, n) {
    "use strict";
    var i = n(3),
      r = n(2);
    e.exports = r(function (e, t, n) {
      var r,
        o,
        u,
        a = e.children;
      if (
        a &&
        1 < a.length &&
        (r = a[a.length - 1]) &&
        "." === i(r) &&
        (o = a[a.length - 2]) &&
        "WordNode" === o.type &&
        s.test(i(o).toLowerCase()) &&
        (o.children.push(r),
        a.pop(),
        r.position && o.position && (o.position.end = r.position.end),
        (u = n.children[t + 1]))
      )
        return (
          (e.children = a.concat(u.children)),
          n.children.splice(t + 1, 1),
          u.position && e.position && (e.position.end = u.position.end),
          t - 1
        );
    });
    var s =
      /^([0-9]{1,3}|[a-z]|al|ca|cap|cca|cent|cf|cit|con|cp|cwt|ead|etc|ff|fl|ibid|id|nem|op|pro|seq|sic|stat|tem|viz)$/;
  },
  function (e, t, n) {
    "use strict";
    var i = n(3),
      r = n(2);
    e.exports = r(function (e, t, n) {
      var r,
        s,
        o,
        u,
        a = e.children;
      if (a && 0 !== a.length && 0 !== t)
        for (s = -1; a[++s]; ) {
          if ("WordNode" === (r = a[s]).type) return;
          if ("SymbolNode" === r.type || "PunctuationNode" === r.type) {
            if ("," !== (o = i(r)) && ";" !== o) return;
            return (
              ((u = n.children[t - 1]).children = u.children.concat(a)),
              u.position && e.position && (u.position.end = e.position.end),
              n.children.splice(t, 1),
              t
            );
          }
        }
    });
  },
  function (e, t, n) {
    "use strict";
    var i = n(3),
      r = n(5),
      s = n(4);
    e.exports = r(function (e) {
      for (var t, n, r, s, u = e.children, a = u.length, l = !1; u[--a]; )
        if ("SymbolNode" === (t = u[a]).type || "PunctuationNode" === t.type) {
          if (o.test(i(t)))
            if (l) {
              if ("." === i(t))
                if (((r = u[a + 1]), (n = u[a - 1]) && "WordNode" === n.type)) {
                  if (
                    ((s = u[a + 2]),
                    r && s && "WhiteSpaceNode" === r.type && "." === i(s))
                  )
                    continue;
                  u.splice(a, 1),
                    n.children.push(t),
                    t.position &&
                      n.position &&
                      (n.position.end = t.position.end),
                    a--;
                } else
                  r &&
                    "WordNode" === r.type &&
                    (u.splice(a, 1),
                    r.children.unshift(t),
                    t.position &&
                      r.position &&
                      (r.position.start = t.position.start));
            } else l = !0;
        } else "WordNode" === t.type && (l = !0);
    });
    var o = s.terminalMarker;
  },
  function (e, t, n) {
    "use strict";
    var i = n(3),
      r = n(2),
      s = n(4);
    e.exports = r(function (e, t, n) {
      var r, s, u, a, l, c, d, f;
      if ("SentenceNode" === e.type)
        for (u = (r = e.children).length - 1, s = 0; ++s < u; )
          if ("WhiteSpaceNode" === (f = r[s]).type && o.test(i(f)))
            return (
              (e.children = r.slice(0, s)),
              (d = { type: "SentenceNode", children: r.slice(s + 1) }),
              (a = r[s - 1]),
              (l = r[s + 1]),
              n.children.splice(t + 1, 0, f, d),
              e.position &&
                a.position &&
                l.position &&
                ((c = e.position.end),
                (e.position.end = a.position.end),
                (d.position = { start: l.position.start, end: c })),
              t + 1
            );
    });
    var o = s.newLineMulti;
  },
  function (e, t) {
    var n,
      i,
      r = (e.exports = {});
    function s() {
      throw Error("setTimeout has not been defined");
    }
    function o() {
      throw Error("clearTimeout has not been defined");
    }
    function u(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === s || !n) && setTimeout) return (n = setTimeout)(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : s;
      } catch (e) {
        n = s;
      }
      try {
        i = "function" == typeof clearTimeout ? clearTimeout : o;
      } catch (e) {
        i = o;
      }
    })();
    var a,
      l = [],
      c = !1,
      d = -1;
    function f() {
      c &&
        a &&
        ((c = !1), a.length ? (l = a.concat(l)) : (d = -1), l.length && p());
    }
    function p() {
      if (!c) {
        var e = u(f);
        c = !0;
        for (var t = l.length; t; ) {
          for (a = l, l = []; ++d < t; ) a && a[d].run();
          (d = -1), (t = l.length);
        }
        (a = null),
          (c = !1),
          (function (e) {
            if (i === clearTimeout) return clearTimeout(e);
            if ((i === o || !i) && clearTimeout) return (i = clearTimeout)(e);
            try {
              i(e);
            } catch (t) {
              try {
                return i.call(null, e);
              } catch (t) {
                return i.call(this, e);
              }
            }
          })(e);
      }
    }
    function h(e, t) {
      (this.fun = e), (this.array = t);
    }
    function y() {}
    (r.nextTick = function (e) {
      var t = Array(arguments.length - 1);
      if (1 < arguments.length)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      l.push(new h(e, t)), 1 !== l.length || c || u(p);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (r.title = "browser"),
      (r.browser = !0),
      (r.env = {}),
      (r.argv = []),
      (r.version = ""),
      (r.versions = {}),
      (r.on = y),
      (r.addListener = y),
      (r.once = y),
      (r.off = y),
      (r.removeListener = y),
      (r.removeAllListeners = y),
      (r.emit = y),
      (r.prependListener = y),
      (r.prependOnceListener = y),
      (r.listeners = function (e) {
        return [];
      }),
      (r.binding = function (e) {
        throw Error("process.binding is not supported");
      }),
      (r.cwd = function () {
        return "/";
      }),
      (r.chdir = function (e) {
        throw Error("process.chdir is not supported");
      }),
      (r.umask = function () {
        return 0;
      });
  },
  function (e, t) {
    e.exports = function (e) {
      return e
        .toLowerCase()
        .replace(/\n/g, " ")
        .replace(/[.,\/#!?$%\^&\*;:{}=_`\"~()]/g, " ")
        .replace(/\s\s+/g, " ")
        .trim()
        .split(" ");
    };
  },
  function (e, t, n) {
    var i = n(46),
      r = n(11);
    Object.assign(r.labels, i);
    var s = { en: r };
    e.exports = {
      addLanguage: function (e, t) {
        if (!t.labels) throw Error("language.labels must be defined!");
        Object.assign(t.labels, i), (s[e] = t);
      },
      getLanguage: function (e) {
        if (!e) return s.en;
        if (!s[e])
          try {
            var t = n(50)("./" + e + "/index");
            this.addLanguage(e, t);
          } catch (t) {
            throw Error("No language found: " + e);
          }
        return s[e];
      },
      getLabels: function (e) {
        return this.getLanguage(e).labels;
      },
      applyScoringStrategy: function (e, t, n, i) {
        return (this.getLanguage(e).scoringStrategy || o).apply(t, n, i);
      },
    };
    var o = {
      apply: function (e, t, n) {
        return n;
      },
    };
  },
  function (e) {
    e.exports = JSON.parse(
      '{"😂":1,"❤":3,"♥":3,"😍":3,"😭":-1,"😘":3,"😊":3,"👌":2,"💕":3,"👏":2,"😁":2,"☺":3,"♡":3,"👍":2,"😩":-2,"🙏":2,"✌":2,"😏":1,"😉":2,"🙌":2,"🙈":2,"💪":2,"😄":2,"😒":-2,"💃":3,"💖":3,"😃":2,"😔":-1,"🎉":3,"😜":2,"🌸":3,"💜":3,"💙":3,"✨":1,"💗":3,"★":1,"█":-1,"☀":2,"😡":-1,"😎":2,"💋":3,"😋":3,"🙊":2,"😴":-1,"🎶":2,"💞":3,"😌":2,"🔫":-1,"💛":3,"💁":1,"💚":3,"♫":1,"😞":-1,"😆":2,"😝":2,"😪":-1,"😫":-1,"👊":1,"💀":-2,"😀":2,"😚":3,"😻":3,"💘":3,"☕":1,"👋":2,"🎊":3,"🍕":2,"❄":2,"😕":-2,"💔":-1,"😤":-2,"😈":1,"✈":2,"🔝":2,"😰":-1,"⚽":3,"😑":-2,"👑":3,"👉":1,"🍃":1,"🎁":3,"😠":-2,"🐧":2,"☆":2,"🍀":1,"🎈":3,"🎅":1,"😓":-1,"😣":-2,"😐":-2,"✊":2,"😨":-1,"😖":-1,"💤":1,"💓":3,"👎":-1,"💦":2,"✔":1,"😷":-1,"🙋":2,"🎄":2,"💩":-1,"🎵":2,"😛":3,"👯":2,"💎":2,"🌿":1,"🎂":3,"🌟":1,"🔮":1,"👫":1,"🏆":3,"✖":1,"☝":1,"😙":3,"⛄":2,"👅":2,"♪":2,"🍂":2,"💏":1,"🌴":2,"👈":2,"🌹":3,"🙆":2,"👻":1,"💰":1,"🍻":2,"🙅":-2,"🌞":2,"🍁":2,"⭐":2,"▪":1,"🎀":3,"🐷":1,"🙉":1,"🌺":2,"💅":1,"🐶":2,"🌚":2,"👽":1,"🎤":2,"👭":2,"🎧":2,"👆":1,"🍸":2,"🍷":2,"®":1,"🍉":3,"😇":3,"🏃":2,"😿":-2,"│":1,"🍺":2,"▶":1,"😲":-1,"🎸":2,"🍹":3,"💫":2,"📚":1,"😶":-1,"🌷":2,"💝":3,"💨":1,"🏈":2,"💍":2,"☔":1,"👸":3,"🇪":3,"░":-1,"🍩":1,"👾":1,"☁":1,"🌻":2,"↿":3,"🐯":2,"👼":1,"🍔":1,"😸":2,"👶":2,"↾":3,"💐":3,"🌊":2,"🍦":2,"🍓":3,"👇":1,"💆":1,"🍴":2,"😧":-1,"🇸":2,"😮":1,"🚫":-3,"😽":2,"🌈":2,"🙀":1,"⚠":-1,"🎮":2,"╯":-1,"🍆":2,"🍰":2,"✓":1,"👐":-1,"🍟":1,"🍌":2,"💑":3,"👬":-1,"🐣":2,"🎃":3,"▬":2,"￼":-3,"🐾":3,"🎓":2,"🏊":2,"📷":2,"👄":2,"🌼":4,"🚶":-1,"🐱":2,"🐸":-1,"🇺":2,"👿":-3,"🚬":2,"✿":1,"🐒":2,"🌍":3,"┊":5,"🐥":3,"🐼":1,"🎥":1,"💄":2,"⛔":2,"🏀":1,"💉":1,"💟":3,"🚗":1,"📝":1,"♦":2,"💭":1,"🌙":3,"🐟":3,"👣":1,"✂":-3,"🗿":2,"👪":-1,"🍭":1,"🌃":2,"❌":1,"🐰":3,"💊":2,"🚨":3,"😦":-2,"🍪":1,"🍣":-2,"✧":1,"🎆":3,"🎎":4,"🇩":3,"✅":2,"📱":1,"🙍":-2,"🍑":1,"🎼":1,"🔊":2,"🌌":2,"🍎":1,"🐻":2,"╰":-1,"💇":1,"♬":1,"🔴":2,"🍱":-2,"🍊":2,"🍒":1,"🐭":3,"👟":2,"🌎":1,"🍍":2,"🐮":3,"📲":1,"☼":1,"🌅":1,"🇷":3,"👠":1,"🌽":2,"💧":-1,"🍬":1,"😺":2,"🚀":2,"¦":3,"💢":1,"🎬":1,"🍧":1,"🍜":2,"🐏":3,"🏄":2,"➤":1,"⬆":1,"🍋":1,"🆗":2,"⚪":2,"📺":2,"🍅":1,"⛅":2,"🐢":1,"👙":2,"🏡":2,"🌾":2,"◉":1,"✏":1,"🐬":2,"🇹":3,"♣":1,"🐝":1,"🌝":1,"🇮":3,"🔋":-3,"🐍":1,"♔":2,"🔵":1,"😾":-2,"🌕":3,"🐨":2,"🔐":1,"💿":3,"🌳":2,"👰":2,"❀":2,"⚓":3,"🚴":3,"▀":-1,"👗":1,"➕":2,"💬":2,"▒":-1,"🔜":1,"🍨":1,"💲":1,"🍙":1,"🍥":-4,"▸":1,"♛":1,"😼":1,"🐙":2,"👨":2,"🍚":2,"♨":4,"🎹":1,"♕":2,"▃":5,"🇬":1,"🇧":1,"☠":-1,"🐠":2,"🚹":3,"💵":2,"✰":4,"╠":1,"👛":2,"🌱":3,"💻":1,"🌏":1,"▄":-1,"👓":1,"◄":1,"⚾":-1,"🌲":2,"👴":1,"🏠":2,"🍇":1,"🍘":2,"🐇":1,"🔞":-1,"👵":2,"◀":1,"🔙":1,"🌵":1,"🍮":-1,"🎇":3,"🐎":2,"➔":-1,"🐤":2,"╩":1,"🌑":2,"🚲":2,"🐑":-1,"🏁":2,"🎾":3,"╚":1,"🈹":1,"👮":-2,"☹":-3,"🐵":2,"✪":1,"◕":2,"🗼":3,"▐":-1,"♠":1,"┳":-2,"👺":-2,"🐚":1,"👂":-1,"🗽":1,"🍵":2,"🆒":2,"🐺":1,"⇨":2,"🌓":3,"🔒":1,"╬":-1,"👳":3,"🌂":1,"🚌":1,"♩":3,"🍡":-1,"❥":1,"🎡":1,"💌":2,"🐩":2,"🌜":2,"⌚":1,"🚿":3,"🔆":3,"🌛":3,"💂":-1,"🐔":1,"🙎":-1,"🏩":2,"🇫":2,"🔨":-1,"📢":2,"🐦":2,"🐲":-1,"♻":2,"🌘":3,"🌔":3,"👖":2,"😗":3,"🐄":1,"◟":-1,"🍢":-1,"🎨":1,"⬇":2,"🚼":3,"🇴":2,"🌗":3,"🌖":3,"🔅":5,"👜":1,"🐌":3,"💼":3,"🐹":1,"🌠":3,"🐈":1,"🌁":1,"⚫":1,"♧":2,"🏰":1,"🚵":2,"🎢":2,"🎷":3,"🎐":1,"┈":-4,"╗":2,"🌇":3,"⏰":2,"🚂":1,"◠":2,"🎿":2,"🆔":4,"🌒":3,"🐪":3,"╔":1,"╝":2,"👔":2,"🆓":1,"🐋":1,"▽":2,"🐛":1,"👕":2,"💳":2,"🏧":5,"💡":3,"⬅":2,"🐫":2,"🇱":2,"📹":2,"👞":2,"👚":3,"□":-2,"🚣":3,"🏉":3,"🗻":3,"╦":2,"⛺":3,"🐕":1,"🏂":2,"👡":2,"📻":2,"✒":1,"🌰":3,"🏢":1,"🎒":3,"⌒":3,"🏫":-2,"📴":4,"🚢":1,"🚚":-1,"🐉":1,"❒":1,"🔔":5,"◢":4,"🏥":1,"🚖":-1,"▌":-2,"☛":2,"💒":3,"🚤":2,"🐐":2,"■":-2,"🔚":2,"🎻":2,"🔷":1,"🎽":2,"📅":1,"🎺":3,"🍈":-3,"✉":1,"◤":5,"○":3,"🍼":3,"🚛":-2,"📓":1,"☉":1,"💴":-2,"➰":-1,"🔌":-1,"📕":1,"📣":2,"🚓":1,"🐗":3,"⛳":4,"┻":-3,"┛":3,"┃":2,"💺":1,"🏇":-1,"☻":1,"📞":2,"Ⓐ":-1,"🌉":3,"🚩":-2,"✎":3,"📃":2,"🏨":1,"📌":-3,"♎":-1,"💷":2,"🚄":3,"▲":3,"⛵":3,"🔸":1,"🚜":5,"🐆":2,"👒":1,"❕":1,"🔛":2,"♢":2,"🇲":2,"❅":4,"👝":2,"✞":2,"◡":1,"🎋":3,"👥":1,"🐡":1,"◆":4,"🔭":2,"🎪":1,"🐜":3,"♌":4,"☐":-5,"👷":1,"🔈":1,"📄":5,"🚐":4,"🌋":3,"📡":1,"🚳":5,"✘":4,"🅰":1,"🇼":2,"┓":3,"┣":3,"Ⓛ":2,"Ⓔ":2,"👤":4,"🚁":1,"🎠":3,"🐁":-2,"📗":1,"┐":-1,"♂":1,"📯":-1,"🔩":1,"👢":4,"◂":2,"📰":1,"📶":2,"🌄":1,"🗾":2,"🔶":2,"🏤":2,"🎩":2,"Ⓜ":1,"🔧":-4,"🐅":1,"♮":1,"🅾":-1,"📦":1,"🚊":1,"🔲":3,"△":1,"📆":5,"❛":2,"📉":2,"▵":2,"🔎":3,"☜":1,"🇯":2,"🇵":2,"📘":1,"ⓔ":3,"🔑":1,"⭕":2,"🔘":1,"🚭":5,"🚉":3,"🚪":3,"➳":2,"🚃":3,"┯":-3,"🆙":2,"🆖":1,"┗":5,"Ⓞ":2,"❇":3,"✴":3,"☊":5,"🔕":-2,"⬛":-2,"🚞":3,"🍶":3,"🌐":3,"♀":1,"🚅":3,"🚒":-2,"♋":1,"♍":3,"🕝":-2,"ⓐ":5,"📙":1,"Ⓢ":1,"📋":3,"🎱":1,"🐞":1,"🔺":1,"ⓡ":5,"♤":3,"🎯":3,"🔉":3,"↩":5,"🚾":1,"🎣":-4,"🔣":1,"❎":-5,"➥":1,"🎌":5,"◣":1,"⏬":5,"♭":1,"ⓞ":5,"🔳":2,"🏭":2,"🎳":-3,"☚":5,"➽":2,"➫":2,"➖":-5,"꒰":2,"꒱":2,"◝":-3,"📑":5,"ⓧ":5,"🔟":5,"〓":5,"ⓜ":2,"➠":5,"🚆":2,"℅":-5,"☃":2,"🚽":5,"ⓝ":5,"⇦":5,"👲":2,"🚡":-3,"🔬":5,"➗":-3,"📈":2,"⏪":2,"◎":5,"꒦":-5,"📎":5,"⑅":5,"✭":5,"♓":2,"┏":5,"☇":5,"࿎":-5,"👘":5,"↙":5,"Ⓕ":2,"Ⓦ":2,"Ⓟ":2,"🕑":2,"🕛":5,"♈":-5,"↬":5,"✍":5,"🏦":5,"🔻":5,"ⓟ":5,"ⓕ":5,"ⓘ":5,"♿":5,"⇗":5,"⇘":5,"ⓨ":5,"ⓙ":5,"▫":5,"🔇":5,"⌃":-5,"🔖":5,"📜":5,"🚝":5,"┘":-5,"✝":-5,"⍣":-5,"📮":-5,"🕕":-5,"🔯":5,"➸":5,"꒵":5,"🕥":-5,"✽":5,"📼":5,"🕐":-5,"🀄":5,"✬":5,"✫":5,"🕔":-5,"❣":5,"📫":5,"🉐":5,"🈂":-5,"🎰":-5,"҂":-5,"╤":-5,"📔":5}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"abandon":-2,"abandoned":-2,"abandons":-2,"abducted":-2,"abduction":-2,"abductions":-2,"abhor":-3,"abhorred":-3,"abhorrent":-3,"abhors":-3,"abilities":2,"ability":2,"aboard":1,"aborted":-1,"aborts":-1,"absentee":-1,"absentees":-1,"absolve":2,"absolved":2,"absolves":2,"absolving":2,"absorbed":1,"abuse":-3,"abused":-3,"abuses":-3,"abusing":-3,"abusive":-3,"accept":1,"acceptable":1,"acceptance":1,"accepted":1,"accepting":1,"accepts":1,"accessible":1,"accident":-2,"accidental":-2,"accidentally":-2,"accidents":-2,"acclaim":2,"acclaimed":2,"accolade":2,"accomplish":2,"accomplished":2,"accomplishes":2,"accomplishment":2,"accomplishments":2,"accusation":-2,"accusations":-2,"accuse":-2,"accused":-2,"accuses":-2,"accusing":-2,"ache":-2,"achievable":1,"aching":-2,"acquit":2,"acquits":2,"acquitted":2,"acquitting":2,"acrimonious":-3,"active":1,"adequate":1,"admire":3,"admired":3,"admires":3,"admiring":3,"admit":-1,"admits":-1,"admitted":-1,"admonish":-2,"admonished":-2,"adopt":1,"adopts":1,"adorable":3,"adoration":3,"adore":3,"adored":3,"adores":3,"adoring":3,"adoringly":3,"advanced":1,"advantage":2,"advantageous":2,"advantageously":2,"advantages":2,"adventure":2,"adventures":2,"adventurous":2,"adversary":-1,"advisable":1,"affected":-1,"affection":3,"affectionate":3,"affectionateness":3,"afflicted":-1,"affordable":2,"affronted":-1,"aficionados":2,"afraid":-2,"aggravate":-2,"aggravated":-2,"aggravates":-2,"aggravating":-2,"aggression":-2,"aggressions":-2,"aggressive":-2,"aggressiveness":-2,"aghast":-2,"agog":2,"agonise":-3,"agonised":-3,"agonises":-3,"agonising":-3,"agonize":-3,"agonized":-3,"agonizes":-3,"agonizing":-3,"agree":1,"agreeable":2,"agreed":1,"agreement":1,"agrees":1,"alarm":-2,"alarmed":-2,"alarmist":-2,"alarmists":-2,"alas":-1,"alert":-1,"alienation":-2,"alive":1,"allegation":-2,"allegations":-2,"allergic":-2,"allow":1,"ally":2,"alone":-2,"altruistic":2,"amaze":2,"amazed":2,"amazes":2,"amazing":4,"ambitious":2,"ambivalent":-1,"amicable":2,"amuse":3,"amused":3,"amusement":3,"amusements":3,"anger":-3,"angered":-3,"angers":-3,"angry":-3,"anguish":-3,"anguished":-3,"animosity":-2,"annoy":-2,"annoyance":-2,"annoyed":-2,"annoying":-2,"annoys":-2,"antagonistic":-2,"anti":-1,"anticipation":1,"anxiety":-2,"anxious":-2,"apathetic":-3,"apathy":-3,"apeshit":-3,"apocalyptic":-2,"apologise":-1,"apologised":-1,"apologises":-1,"apologising":-1,"apologize":-1,"apologized":-1,"apologizes":-1,"apologizing":-1,"apology":-1,"appalled":-2,"appalling":-2,"appealing":2,"appease":2,"appeased":2,"appeases":2,"appeasing":2,"applaud":2,"applauded":2,"applauding":2,"applauds":2,"applause":2,"appreciate":2,"appreciated":2,"appreciates":2,"appreciating":2,"appreciation":2,"apprehensive":-2,"appropriate":2,"appropriately":2,"approval":2,"approved":2,"approves":2,"ardent":1,"arrest":-2,"arrested":-3,"arrests":-2,"arrogant":-2,"arsehole":-4,"ashame":-2,"ashamed":-2,"ass":-4,"assassination":-3,"assassinations":-3,"assault":-2,"assaults":-2,"asset":2,"assets":2,"assfucking":-4,"asshole":-4,"astonished":2,"astound":3,"astounded":3,"astounding":3,"astoundingly":3,"astounds":3,"atrocious":-3,"atrocity":-3,"attack":-1,"attacked":-1,"attacking":-1,"attacks":-1,"attract":1,"attracted":1,"attracting":2,"attraction":2,"attractions":2,"attractive":2,"attractively":2,"attractiveness":2,"attracts":1,"audacious":3,"aura":1,"authority":1,"avenge":-2,"avenged":-2,"avenger":-2,"avengers":-2,"avenges":-2,"avenging":-2,"avert":-1,"averted":-1,"averts":-1,"avid":2,"avoid":-1,"avoided":-1,"avoids":-1,"await":-1,"awaited":-1,"awaits":-1,"award":3,"awarded":3,"awards":3,"awesome":4,"awful":-3,"awkward":-2,"axe":-1,"axed":-1,"backed":1,"backing":2,"backs":1,"bad":-3,"bad luck":-2,"badass":-3,"badly":-3,"badness":-3,"bailout":-2,"balanced":1,"bamboozle":-2,"bamboozled":-2,"bamboozles":-2,"ban":-2,"banish":-1,"bankrupt":-3,"bankruptcy":-3,"bankster":-3,"banned":-2,"barbarian":-2,"barbaric":-2,"barbarous":-2,"bargain":2,"barrier":-2,"bastard":-5,"bastards":-5,"battle":-1,"battled":-1,"battles":-1,"battling":-2,"beaten":-2,"beatific":3,"beating":-1,"beauties":3,"beautiful":3,"beautifully":3,"beautify":3,"beauty":3,"befit":2,"befitting":2,"belittle":-2,"belittled":-2,"beloved":3,"benefactor":2,"benefactors":2,"benefit":2,"benefits":2,"benefitted":2,"benefitting":2,"benevolent":3,"bereave":-2,"bereaved":-2,"bereaves":-2,"bereaving":-2,"best":3,"best damn":4,"betray":-3,"betrayal":-3,"betrayed":-3,"betraying":-3,"betrays":-3,"better":2,"bias":-1,"biased":-2,"big":1,"bitch":-5,"bitches":-5,"bitter":-2,"bitterest":-2,"bitterly":-2,"bizarre":-2,"blackmail":-3,"blackmailed":-3,"blackmailing":-3,"blackmails":-3,"blah":-2,"blame":-2,"blamed":-2,"blames":-2,"blaming":-2,"bless":2,"blesses":2,"blessing":3,"blessings":3,"blind":-1,"bliss":3,"blissful":3,"blithe":2,"bloated":-1,"block":-1,"blockade":-2,"blockbuster":3,"blocked":-1,"blocking":-1,"blocks":-1,"bloody":-3,"blurry":-2,"boastful":-2,"bold":2,"boldly":2,"bomb":-1,"boost":1,"boosted":1,"boosting":1,"boosts":1,"bore":-2,"bored":-2,"boring":-3,"bother":-2,"bothered":-2,"bothers":-2,"bothersome":-2,"boycott":-2,"boycotted":-2,"boycotting":-2,"boycotts":-2,"brainwashing":-3,"brave":2,"braveness":2,"bravery":2,"bravura":3,"breach":-2,"breached":-2,"breaches":-2,"breaching":-2,"breakthrough":3,"breathtaking":5,"bribe":-3,"bribed":-3,"bribes":-3,"bribing":-3,"bright":1,"brightest":2,"brightness":1,"brilliant":4,"brilliance":3,"brilliances":3,"brisk":2,"broke":-1,"broken":-1,"brooding":-2,"brutal":-3,"brutally":-3,"bullied":-2,"bullshit":-4,"bully":-2,"bullying":-2,"bummer":-2,"buoyant":2,"burden":-2,"burdened":-2,"burdening":-2,"burdens":-2,"burglar":-2,"burglary":-2,"calm":2,"calmed":2,"calming":2,"calms":2,"can\'t stand":-3,"cancel":-1,"cancelled":-1,"cancelling":-1,"cancels":-1,"cancer":-1,"capabilities":1,"capability":1,"capable":1,"captivated":3,"care":2,"carefree":1,"careful":2,"carefully":2,"carefulness":2,"careless":-2,"cares":2,"caring":2,"cashing in":-2,"casualty":-2,"catastrophe":-3,"catastrophic":-4,"cautious":-1,"celebrate":3,"celebrated":3,"celebrates":3,"celebrating":3,"celebration":3,"celebrations":3,"censor":-2,"censored":-2,"censors":-2,"certain":1,"chagrin":-2,"chagrined":-2,"challenge":-1,"champion":2,"championed":2,"champions":2,"chance":2,"chances":2,"chaos":-2,"chaotic":-2,"charged":-3,"charges":-2,"charisma":2,"charitable":2,"charm":3,"charming":3,"charmingly":3,"charmless":-3,"chastise":-3,"chastised":-3,"chastises":-3,"chastising":-3,"cheat":-3,"cheated":-3,"cheater":-3,"cheaters":-3,"cheating":-3,"cheats":-3,"cheer":2,"cheered":2,"cheerful":2,"cheerfully":2,"cheering":2,"cheerless":-2,"cheers":2,"cheery":3,"cherish":2,"cherished":2,"cherishes":2,"cherishing":2,"chic":2,"chide":-3,"chided":-3,"chides":-3,"chiding":-3,"childish":-2,"chilling":-1,"choke":-2,"choked":-2,"chokes":-2,"choking":-2,"clarifies":2,"clarity":2,"clash":-2,"classy":3,"clean":2,"cleaner":2,"clear":1,"cleared":1,"clearly":1,"clears":1,"clever":2,"clouded":-1,"clueless":-2,"cock":-5,"cocksucker":-5,"cocksuckers":-5,"cocky":-2,"coerced":-2,"coercion":-2,"collapse":-2,"collapsed":-2,"collapses":-2,"collapsing":-2,"collide":-1,"collides":-1,"colliding":-1,"collision":-2,"collisions":-2,"colluding":-3,"combat":-1,"combats":-1,"comedy":1,"comfort":2,"comfortable":2,"comfortably":2,"comforting":2,"comforts":2,"comic":1,"commend":2,"commended":2,"commit":1,"commitment":2,"commits":1,"committed":1,"committing":1,"compassion":2,"compassionate":2,"compelled":1,"competencies":1,"competent":2,"competitive":2,"complacent":-2,"complain":-2,"complained":-2,"complaining":-2,"complains":-2,"complaint":-2,"complaints":-2,"complicating":-2,"compliment":2,"complimented":2,"compliments":2,"comprehensive":2,"concerned":-2,"conciliate":2,"conciliated":2,"conciliates":2,"conciliating":2,"condemn":-2,"condemnation":-2,"condemned":-2,"condemns":-2,"confidence":2,"confident":2,"confidently":2,"conflict":-2,"conflicting":-2,"conflictive":-2,"conflicts":-2,"confuse":-2,"confused":-2,"confusing":-2,"congrats":2,"congratulate":2,"congratulation":2,"congratulations":2,"consent":2,"consents":2,"consolable":2,"conspiracy":-3,"constipation":-2,"constrained":-2,"contagion":-2,"contagions":-2,"contagious":-1,"contaminant":-2,"contaminants":-2,"contaminate":-2,"contaminated":-2,"contaminates":-2,"contaminating":-2,"contamination":-2,"contaminations":-2,"contempt":-2,"contemptible":-2,"contemptuous":-2,"contemptuously":-2,"contend":-1,"contender":-1,"contending":-1,"contentious":-2,"contestable":-2,"controversial":-2,"controversially":-2,"controversies":-2,"controversy":-2,"convicted":-2,"convince":1,"convinced":1,"convinces":1,"convivial":2,"cool":1,"cool stuff":3,"cornered":-2,"corpse":-1,"corrupt":-3,"corrupted":-3,"corrupting":-3,"corruption":-3,"corrupts":-3,"costly":-2,"courage":2,"courageous":2,"courageously":2,"courageousness":2,"courteous":2,"courtesy":2,"cover-up":-3,"coward":-2,"cowardly":-2,"coziness":2,"cramp":-1,"crap":-3,"crappy":-3,"crash":-2,"crazier":-2,"craziest":-2,"crazy":-2,"creative":2,"crestfallen":-2,"cried":-2,"cries":-2,"crime":-3,"crimes":-3,"criminal":-3,"criminals":-3,"criminate":-3,"criminated":-3,"criminates":-3,"crisis":-3,"critic":-2,"criticise":-2,"criticised":-2,"criticises":-2,"criticising":-2,"criticism":-2,"criticize":-2,"criticized":-2,"criticizes":-2,"criticizing":-2,"critics":-2,"critique":-2,"crowding":-1,"crude":-1,"cruel":-3,"cruelty":-3,"crush":-1,"crushed":-2,"crushes":-1,"crushing":-1,"cry":-1,"crying":-2,"cunning":2,"cunt":-5,"curious":1,"curse":-1,"cut":-1,"cutback":-2,"cutbacks":-2,"cute":2,"cuts":-1,"cutting":-1,"cynic":-2,"cynical":-2,"cynicism":-2,"damage":-3,"damaged":-3,"damages":-3,"damaging":-3,"damn":-2,"damn cute":3,"damn good":4,"damned":-4,"damnit":-4,"danger":-2,"dangerous":-2,"dangerously":-2,"daredevil":2,"daring":2,"darkest":-2,"darkness":-1,"dauntless":2,"dazzling":3,"dead":-3,"deadening":-2,"deadlock":-2,"deadly":-3,"deafening":-1,"dear":2,"dearly":3,"death":-2,"deaths":-2,"debonair":2,"debt":-2,"deceit":-3,"deceitful":-3,"deceive":-3,"deceived":-3,"deceives":-3,"deceiving":-3,"deception":-3,"deceptive":-3,"decisive":1,"dedicated":2,"dedication":2,"defeat":-2,"defeated":-2,"defect":-3,"defective":-3,"defects":-3,"defender":2,"defenders":2,"defenseless":-2,"defer":-1,"deferring":-1,"defiant":-1,"deficient":-2,"deficiency":-2,"deficiencies":-2,"deficit":-2,"deformed":-2,"deformities":-2,"deformity":-2,"defraud":-3,"defrauds":-3,"deft":2,"defunct":-2,"degrade":-2,"degraded":-2,"degrades":-2,"dehumanize":-2,"dehumanized":-2,"dehumanizes":-2,"dehumanizing":-2,"deject":-2,"dejected":-2,"dejecting":-2,"dejects":-2,"delay":-1,"delayed":-1,"delectable":3,"delicious":3,"delight":3,"delighted":3,"delightful":3,"delightfully":3,"delighting":3,"delights":3,"demand":-1,"demanded":-1,"demanding":-1,"demands":-1,"demonstration":-1,"demoralize":-2,"demoralized":-2,"demoralizes":-2,"demoralizing":-2,"denial":-2,"denials":-2,"denied":-2,"denier":-2,"deniers":-2,"denies":-2,"denounce":-2,"denounces":-2,"dent":-2,"deny":-2,"denying":-2,"deplore":-3,"deplored":-3,"deplores":-3,"deploring":-3,"deport":-2,"deported":-2,"deporting":-2,"deports":-2,"deportation":-2,"deportations":-2,"depressed":-2,"depressing":-2,"deprivation":-3,"derail":-2,"derailed":-2,"derails":-2,"derelict":-2,"deride":-2,"derided":-2,"derides":-2,"deriding":-2,"derision":-2,"desirable":2,"desire":1,"desired":2,"desirous":2,"despair":-3,"despairing":-3,"despairs":-3,"desperate":-3,"desperately":-3,"despondent":-3,"destroy":-3,"destroyed":-3,"destroying":-3,"destroys":-3,"destruction":-3,"destructive":-3,"detached":-1,"detain":-2,"detained":-2,"detention":-2,"deteriorate":-2,"deteriorated":-2,"deteriorates":-2,"deteriorating":-2,"determined":2,"deterrent":-2,"detract":-1,"detracted":-1,"detracts":-1,"devastate":-2,"devastated":-2,"devastating":-2,"devastation":-2,"devastations":-2,"devoted":3,"devotion":2,"devotional":2,"diamond":1,"dick":-4,"dickhead":-4,"die":-3,"died":-3,"difficult":-1,"diffident":-2,"dignity":2,"dilemma":-1,"dilligence":2,"dipshit":-3,"dire":-3,"direful":-3,"dirt":-2,"dirtier":-2,"dirtiest":-2,"dirty":-2,"disabilities":-2,"disability":-2,"disabling":-1,"disadvantage":-2,"disadvantaged":-2,"disagree":-2,"disagreeable":-2,"disagreement":-2,"disappear":-1,"disappeared":-1,"disappears":-1,"disappoint":-2,"disappointed":-2,"disappointing":-2,"disappointment":-2,"disappointments":-2,"disappoints":-2,"disapproval":-2,"disapprovals":-2,"disapprove":-2,"disapproved":-2,"disapproves":-2,"disapproving":-2,"disaster":-2,"disasters":-2,"disastrous":-3,"disbelieve":-2,"discard":-1,"discarded":-1,"discarding":-1,"discards":-1,"discernment":2,"discomfort":-2,"disconsolate":-2,"disconsolation":-2,"discontented":-2,"discord":-2,"discounted":-1,"discouraged":-2,"discredited":-2,"discriminate":-2,"discriminated":-2,"discriminates":-2,"discriminating":-2,"discriminatory":-2,"disdain":-2,"disease":-1,"diseases":-1,"disgrace":-2,"disgraced":-2,"disguise":-1,"disguised":-1,"disguises":-1,"disguising":-1,"disgust":-3,"disgusted":-3,"disgustful":-3,"disgusting":-3,"disheartened":-2,"dishonest":-2,"disillusioned":-2,"disinclined":-2,"disjointed":-2,"dislike":-2,"disliked":-2,"dislikes":-2,"dismal":-2,"dismayed":-2,"dismissed":-2,"disorder":-2,"disorders":-2,"disorganized":-2,"disoriented":-2,"disparage":-2,"disparaged":-2,"disparages":-2,"disparaging":-2,"displeased":-2,"displeasure":-2,"disproportionate":-2,"dispute":-2,"disputed":-2,"disputes":-2,"disputing":-2,"disqualified":-2,"disquiet":-2,"disregard":-2,"disregarded":-2,"disregarding":-2,"disregards":-2,"disrespect":-2,"disrespected":-2,"disrupt":-2,"disrupted":-2,"disrupting":-2,"disruption":-2,"disruptions":-2,"disruptive":-2,"disrupts":-2,"dissatisfied":-2,"distasteful":-2,"distinguished":2,"distort":-2,"distorted":-2,"distorting":-2,"distorts":-2,"distract":-2,"distracted":-2,"distraction":-2,"distracts":-2,"distress":-2,"distressed":-2,"distresses":-2,"distressing":-2,"distrust":-3,"distrustful":-3,"disturb":-2,"disturbed":-2,"disturbing":-2,"disturbs":-2,"dithering":-2,"diverting":-1,"dizzy":-1,"dodging":-2,"dodgy":-2,"does not work":-3,"dolorous":-2,"donate":2,"donated":2,"donates":2,"donating":2,"donation":2,"dont like":-2,"doom":-2,"doomed":-2,"doubt":-1,"doubted":-1,"doubtful":-1,"doubting":-1,"doubts":-1,"douche":-3,"douchebag":-3,"dour":-2,"downcast":-2,"downer":-2,"downhearted":-2,"downside":-2,"drag":-1,"dragged":-1,"drags":-1,"drained":-2,"dread":-2,"dreaded":-2,"dreadful":-3,"dreading":-2,"dream":1,"dreams":1,"dreary":-2,"droopy":-2,"drop":-1,"dropped":-1,"drown":-2,"drowned":-2,"drowns":-2,"drudgery":-2,"drunk":-2,"dubious":-2,"dud":-2,"dull":-2,"dumb":-3,"dumbass":-3,"dump":-1,"dumped":-2,"dumps":-1,"dupe":-2,"duped":-2,"dupery":-2,"durable":2,"dying":-3,"dysfunction":-2,"eager":2,"earnest":2,"ease":2,"easy":1,"ecstatic":4,"eerie":-2,"eery":-2,"effective":2,"effectively":2,"effectiveness":2,"effortlessly":2,"elated":3,"elation":3,"elegant":2,"elegantly":2,"embarrass":-2,"embarrassed":-2,"embarrasses":-2,"embarrassing":-2,"embarrassment":-2,"embezzlement":-3,"embittered":-2,"embrace":1,"emergency":-2,"empathetic":2,"empower":2,"empowerment":2,"emptiness":-1,"empty":-1,"enchanted":2,"encourage":2,"encouraged":2,"encouragement":2,"encourages":2,"encouraging":2,"endorse":2,"endorsed":2,"endorsement":2,"endorses":2,"enemies":-2,"enemy":-2,"energetic":2,"engage":1,"engages":1,"engrossed":1,"engrossing":3,"enjoy":2,"enjoyable":2,"enjoyed":2,"enjoying":2,"enjoys":2,"enlighten":2,"enlightened":2,"enlightening":2,"enlightens":2,"ennui":-2,"enrage":-2,"enraged":-2,"enrages":-2,"enraging":-2,"enrapture":3,"enslave":-2,"enslaved":-2,"enslaves":-2,"ensure":1,"ensuring":1,"enterprising":1,"entertaining":2,"enthral":3,"enthusiastic":3,"entitled":1,"entrusted":2,"envies":-1,"envious":-2,"environment-friendly":2,"envy":-1,"envying":-1,"erroneous":-2,"error":-2,"errors":-2,"escape":-1,"escapes":-1,"escaping":-1,"esteem":2,"esteemed":2,"ethical":2,"euphoria":3,"euphoric":4,"evacuate":-1,"evacuated":-1,"evacuates":-1,"evacuating":-1,"evacuation":-1,"evergreen":2,"evergreens":2,"evergreening":-3,"eviction":-1,"evil":-3,"exacerbate":-2,"exacerbated":-2,"exacerbates":-2,"exacerbating":-2,"exaggerate":-2,"exaggerated":-2,"exaggerates":-2,"exaggerating":-2,"exasparate":-2,"exasperated":-2,"exasperates":-2,"exasperating":-2,"excellence":3,"excellent":3,"excite":3,"excited":3,"excitement":3,"exciting":3,"exclude":-1,"excluded":-2,"exclusion":-1,"exclusive":2,"excruciatingly":-1,"excuse":-1,"exempt":-1,"exhausted":-2,"exhilarated":3,"exhilarates":3,"exhilarating":3,"exonerate":2,"exonerated":2,"exonerates":2,"exonerating":2,"expand":1,"expands":1,"expel":-2,"expelled":-2,"expelling":-2,"expels":-2,"expertly":2,"exploit":-2,"exploited":-2,"exploiting":-2,"exploits":-2,"exploration":1,"explorations":1,"expose":-1,"exposed":-1,"exposes":-1,"exposing":-1,"exquisite":3,"extend":1,"extends":1,"extremist":-2,"extremists":-2,"exuberant":4,"exultant":3,"exultantly":3,"fabulous":4,"fabulously":4,"fad":-2,"fag":-3,"faggot":-3,"faggots":-3,"fail":-2,"failed":-2,"failing":-2,"fails":-2,"failure":-2,"failures":-2,"fainthearted":-2,"fair":2,"fairness":2,"faith":1,"faithful":3,"fake":-3,"faker":-3,"fakes":-3,"faking":-3,"fallen":-2,"falling":-1,"false":-1,"falsely":-2,"falsified":-3,"falsify":-3,"fame":1,"famine":-2,"famous":2,"fan":3,"fantastic":4,"farce":-1,"fascinate":3,"fascinated":3,"fascinates":3,"fascinating":3,"fascination":3,"fascist":-2,"fascists":-2,"fatal":-3,"fatalities":-3,"fatality":-3,"fatigue":-2,"fatigued":-2,"fatigues":-2,"fatiguing":-2,"favor":2,"favorable":2,"favorably":2,"favored":2,"favorite":2,"favorited":2,"favorites":2,"favors":2,"favour":2,"favourable":2,"favourably":2,"favoured":2,"favourite":2,"favourited":2,"favourites":2,"favours":2,"fear":-2,"fearful":-2,"fearfully":-2,"fearing":-2,"fearless":2,"fearlessness":2,"fearsome":-2,"fed up":-3,"feeble":-2,"feeling":1,"felonies":-3,"felony":-3,"fertile":2,"fervent":2,"fervid":2,"festive":2,"fever":-2,"fiasco":-3,"fidgety":-2,"fight":-1,"fighting":-2,"fine":2,"fines":-2,"finest":3,"fire":-2,"fired":-2,"firing":-2,"fit":1,"fitness":1,"filth":-2,"filthy":-2,"flagship":2,"flaw":-2,"flawed":-3,"flawless":2,"flawlessly":2,"flaws":-2,"flees":-1,"flop":-2,"flops":-2,"flu":-2,"flustered":-2,"focused":2,"fond":2,"fondness":2,"fool":-2,"foolish":-2,"fools":-2,"forbid":-1,"forbidden":-2,"forbidding":-2,"forced":-1,"foreclosure":-2,"foreclosures":-2,"forefront":1,"forget":-1,"forgetful":-2,"forgettable":-1,"forgive":1,"forgiving":1,"forgot":-1,"forgotten":-1,"fortune":2,"fortunate":2,"fortunately":2,"foul":-3,"frantic":-1,"fraud":-4,"frauds":-4,"fraudster":-4,"fraudsters":-4,"fraudulence":-4,"fraudulent":-4,"freak":-2,"free":1,"freedom":2,"freedoms":2,"frenzy":-3,"fresh":1,"friend":1,"friendliness":2,"friendly":2,"friendship":2,"fright":-2,"frightened":-2,"frightening":-3,"frikin":-2,"frisky":2,"frowning":-1,"fruitless":-2,"frustrate":-2,"frustrated":-2,"frustrates":-2,"frustrating":-2,"frustration":-2,"ftw":3,"fuck":-4,"fucked":-4,"fucker":-4,"fuckers":-4,"fuckface":-4,"fuckhead":-4,"fuckin":-4,"fucking":-4,"fucking amazing":4,"fucking beautiful":4,"fucking cute":4,"fucking fantastic":4,"fucking good":4,"fucking great":4,"fucking hot":2,"fucking love":4,"fucking loves":4,"fucking perfect":4,"fucktard":-4,"fud":-3,"fuked":-4,"fuking":-4,"fulfill":2,"fulfilled":2,"fulfillment":2,"fulfills":2,"fuming":-2,"fun":4,"funeral":-1,"funerals":-1,"funky":2,"funnier":4,"funny":4,"furious":-3,"futile":-2,"gag":-2,"gagged":-2,"gain":2,"gained":2,"gaining":2,"gains":2,"gallant":3,"gallantly":3,"gallantry":3,"game-changing":3,"garbage":-1,"gem":3,"generous":2,"generously":2,"genial":3,"ghastly":-2,"ghost":-1,"giddy":-2,"gift":2,"glad":3,"glamorous":3,"glamourous":3,"glee":3,"gleeful":3,"gloom":-1,"gloomy":-2,"glorious":2,"glory":2,"glum":-2,"god":1,"goddamn":-3,"godsend":4,"gold":2,"good":3,"goodlooking":3,"goodmorning":1,"goodness":3,"goodwill":3,"goofiness":-2,"goofy":-2,"grace":1,"graceful":2,"gracious":3,"grand":3,"grant":1,"granted":1,"granting":1,"grants":1,"grateful":3,"gratification":2,"grave":-2,"gray":-1,"grisly":-2,"gr8":3,"great":3,"greater":3,"greatest":3,"greed":-3,"greedy":-2,"green wash":-3,"green washing":-3,"greenwash":-3,"greenwasher":-3,"greenwashers":-3,"greenwashing":-3,"greet":1,"greeted":1,"greeting":1,"greetings":2,"greets":1,"grey":-1,"grief":-2,"grieved":-2,"grim":-2,"gripping":2,"groan":-2,"groaned":-2,"groaning":-2,"groans":-2,"gross":-2,"growing":1,"growth":2,"growths":2,"gruesome":-3,"guarantee":1,"guilt":-3,"guilty":-3,"gullibility":-2,"gullible":-2,"gun":-1,"ha":2,"hacked":-1,"haha":3,"hahaha":3,"hahahah":3,"hail":2,"hailed":2,"hallelujah":3,"handpicked":1,"handsome":3,"hapless":-2,"haplessness":-2,"happiest":3,"happiness":3,"happy":3,"harass":-3,"harassed":-3,"harasses":-3,"harassing":-3,"harassment":-3,"hard":-1,"hardier":2,"hardship":-2,"hardy":2,"harm":-2,"harmed":-2,"harmful":-2,"harming":-2,"harmony":2,"harmonious":2,"harmoniously":2,"harms":-2,"harried":-2,"harsh":-2,"harsher":-2,"harshest":-2,"harshly":-2,"hate":-3,"hated":-3,"hater":-3,"haters":-3,"hates":-3,"hating":-3,"hatred":-3,"haunt":-1,"haunted":-2,"haunting":1,"haunts":-1,"havoc":-2,"hazardous":-3,"headache":-2,"healthy":2,"heartbreaking":-3,"heartbroken":-3,"heartfelt":3,"heartless":-2,"heartwarming":3,"heaven":2,"heavenly":4,"heavyhearted":-2,"hehe":2,"hell":-4,"hellish":-2,"help":2,"helpful":2,"helping":2,"helpless":-2,"helps":2,"hero":2,"heroes":2,"heroic":3,"hesitant":-2,"hesitate":-2,"hid":-1,"hide":-1,"hideous":-3,"hides":-1,"hiding":-1,"highlight":2,"hilarious":2,"hinder":-2,"hindrance":-2,"hoax":-2,"hollow":-1,"homeless":-2,"homesick":-2,"homicide":-2,"homicides":-2,"honest":2,"honor":2,"honored":2,"honoring":2,"honour":2,"honoured":2,"honouring":2,"hooligan":-2,"hooliganism":-2,"hooligans":-2,"hope":2,"hopeful":2,"hopefully":2,"hopeless":-2,"hopelessness":-2,"hopes":2,"hoping":2,"horrendous":-3,"horrid":-3,"horrible":-3,"horrific":-3,"horrified":-3,"hospitalized":-2,"hostile":-2,"huckster":-2,"hug":2,"huge":1,"hugs":2,"humane":2,"humble":1,"humbug":-2,"humerous":3,"humiliated":-3,"humiliation":-3,"humor":2,"humorous":2,"humour":2,"humourous":2,"hunger":-2,"hurrah":5,"hurt":-2,"hurting":-2,"hurts":-2,"hypocritical":-2,"hysteria":-3,"hysterical":-3,"hysterics":-3,"icky":-3,"idiocy":-3,"idiot":-3,"idiotic":-3,"ignorance":-2,"ignorant":-2,"ignore":-1,"ignored":-2,"ignores":-1,"ill":-2,"ill-fated":-2,"illegal":-3,"illegally":-3,"illegitimate":-3,"illiteracy":-2,"illness":-2,"illnesses":-2,"illogical":-2,"imaginative":2,"imbecile":-3,"immobilized":-1,"immortal":2,"immune":1,"impair":-2,"impaired":-2,"impairing":-2,"impairment":-2,"impairs":-2,"impatient":-2,"impeachment":-3,"impeachments":-3,"impede":-2,"impeded":-2,"impedes":-2,"impeding":-2,"impedingly":-2,"imperfect":-2,"importance":2,"important":2,"impose":-1,"imposed":-1,"imposes":-1,"imposing":-1,"imposter":-2,"impotent":-2,"impress":3,"impressed":3,"impresses":3,"impressive":3,"imprisoned":-2,"imprisonment":-2,"improper":-2,"improperly":-2,"improve":2,"improved":2,"improvement":2,"improves":2,"improving":2,"inability":-2,"inaction":-2,"inadequate":-2,"inadvertently":-2,"inappropriate":-2,"incapable":-2,"incapacitated":-2,"incapacitates":-2,"incapacitating":-2,"incense":-2,"incensed":-2,"incenses":-2,"incensing":-2,"incoherent":-2,"incompetence":-2,"incompetent":-2,"incomplete":-1,"incomprehensible":-2,"inconsiderate":-2,"inconvenience":-2,"inconvenient":-2,"increase":1,"increased":1,"indecisive":-2,"indestructible":2,"indicted":-2,"indifference":-2,"indifferent":-2,"indignant":-2,"indignation":-2,"indoctrinate":-2,"indoctrinated":-2,"indoctrinates":-2,"indoctrinating":-2,"inediable":-2,"inexorable":-3,"inexcusable":-3,"ineffective":-2,"ineffectively":-2,"ineffectual":-2,"inefficiency":-2,"inefficient":-2,"inefficiently":-2,"inept":-2,"ineptitude":-2,"infantile":-2,"infantilized":-2,"infatuated":2,"infatuation":2,"infect":-2,"infected":-2,"infecting":-2,"infection":-2,"infections":-2,"infectious":-2,"infects":-2,"inferior":-2,"infest":-2,"infested":-2,"infesting":-2,"infests":-2,"inflamed":-2,"inflict":-2,"inflicted":-2,"inflicting":-2,"inflicts":-2,"influential":2,"infract":-2,"infracted":-2,"infracting":-2,"infracts":-2,"infringement":-2,"infuriate":-2,"infuriated":-2,"infuriates":-2,"infuriating":-2,"inhibit":-1,"inhuman":-2,"injured":-2,"injuries":-2,"injury":-2,"injustice":-2,"innovate":1,"innovates":1,"innovation":1,"innovative":2,"inoperative":-2,"inquisition":-2,"inquisitive":2,"insane":-2,"insanity":-2,"insecure":-2,"insensitive":-2,"insensitivity":-2,"insignificant":-2,"insipid":-2,"insolvent":-2,"insomnia":-2,"inspiration":2,"inspirational":2,"inspire":2,"inspired":2,"inspires":2,"inspiring":3,"insufficiency":-2,"insufficient":-2,"insufficiently":-2,"insult":-2,"insulted":-2,"insulting":-2,"insults":-2,"intact":2,"integrity":2,"intelligent":2,"intense":1,"interest":1,"interested":2,"interesting":2,"interests":1,"interrogated":-2,"interrupt":-2,"interrupted":-2,"interrupting":-2,"interruption":-2,"interrupts":-2,"intimacy":2,"intimidate":-2,"intimidated":-2,"intimidates":-2,"intimidating":-2,"intimidation":-2,"intransigence":-2,"intransigency":-2,"intricate":2,"intrigues":1,"invasion":-1,"invincible":2,"invite":1,"inviting":1,"invulnerable":2,"irate":-3,"ironic":-1,"irony":-1,"irrational":-1,"irreparable":-2,"irreproducible":-2,"irresistible":2,"irresistibly":2,"irresolute":-2,"irresponsible":-2,"irresponsibly":-2,"irreversible":-1,"irreversibly":-1,"irritate":-3,"irritated":-3,"irritates":-3,"irritating":-3,"isolated":-1,"itchy":-2,"jackass":-4,"jackasses":-4,"jailed":-2,"jaunty":2,"jealous":-2,"jealousy":-2,"jeopardy":-2,"jerk":-3,"jesus":1,"jewel":1,"jewels":1,"jocular":2,"join":1,"joke":2,"jokes":2,"jolly":2,"jovial":2,"joy":3,"joyful":3,"joyfully":3,"joyless":-2,"joyous":3,"jubilant":3,"jumpy":-1,"justice":2,"justifiably":2,"justified":2,"keen":1,"kickback":-3,"kickbacks":-3,"kidnap":-2,"kidnapped":-2,"kidnapping":-2,"kidnappings":-2,"kidnaps":-2,"kill":-3,"killed":-3,"killing":-3,"kills":-3,"kind":2,"kind of":0,"kinder":2,"kindness":2,"kiss":2,"kudos":3,"lack":-2,"lackadaisical":-2,"lag":-1,"lagged":-2,"lagging":-2,"lags":-2,"lame":-2,"landmark":2,"lapse":-1,"lapsed":-1,"laugh":1,"laughed":1,"laughing":1,"laughs":1,"laughting":1,"launched":1,"lawl":3,"lawsuit":-2,"lawsuits":-2,"lazy":-1,"leadership":1,"leading":2,"leak":-1,"leaked":-1,"leave":-1,"legal":1,"legally":1,"lenient":1,"lethal":-2,"lethality":-2,"lethargic":-2,"lethargy":-2,"liar":-3,"liars":-3,"libelous":-2,"lied":-2,"lifeless":-1,"lifesaver":4,"lighthearted":1,"likable":2,"like":2,"likeable":2,"liked":2,"likers":2,"likes":2,"liking":2,"limitation":-1,"limited":-1,"limits":-1,"litigation":-1,"litigious":-2,"lively":2,"livid":-2,"lmao":4,"lmfao":4,"loathe":-3,"loathed":-3,"loathes":-3,"loathing":-3,"loathsome":-3,"lobbied":-2,"lobby":-2,"lobbying":-2,"lobbyist":-2,"lobbyists":-2,"lol":3,"lolol":4,"lololol":4,"lolololol":4,"lonely":-2,"lonesome":-2,"longing":-1,"lool":3,"loom":-1,"loomed":-1,"looming":-1,"looms":-1,"loool":3,"looool":3,"loose":-3,"looses":-3,"loser":-3,"losing":-3,"loss":-3,"losses":-3,"lost":-3,"lousy":-2,"lovable":3,"love":3,"loved":3,"lovelies":3,"lovely":3,"loves":3,"loving":2,"loving-kindness":3,"lowest":-1,"loyal":3,"loyalty":3,"luck":3,"luckily":3,"lucky":3,"lucrative":3,"ludicrous":-3,"lugubrious":-2,"lunatic":-3,"lunatics":-3,"lurk":-1,"lurking":-1,"lurks":-1,"luxury":2,"macabre":-2,"mad":-3,"maddening":-3,"made-up":-1,"madly":-3,"madness":-3,"magnificent":3,"maladaption":-2,"maldevelopment":-2,"maltreatment":-2,"mandatory":-1,"manipulated":-1,"manipulating":-1,"manipulation":-1,"manslaughter":-3,"marvel":3,"marvelous":3,"marvels":3,"masterpiece":4,"masterpieces":4,"matter":1,"matters":1,"mature":2,"meaningful":2,"meaningless":-2,"medal":3,"mediocrity":-3,"meditative":1,"melancholy":-2,"memorable":1,"memoriam":-2,"menace":-2,"menaced":-2,"menaces":-2,"mercy":2,"merry":3,"mesmerizing":3,"mess":-2,"messed":-2,"messing up":-2,"methodical":2,"methodically":2,"mindless":-2,"miracle":4,"mirth":3,"mirthful":3,"mirthfully":3,"misbehave":-2,"misbehaved":-2,"misbehaves":-2,"misbehaving":-2,"misbranding":-3,"miscast":-2,"mischief":-1,"mischiefs":-1,"misclassified":-2,"misclassifies":-2,"misclassify":-2,"misconduct":-2,"misconducted":-2,"misconducting":-2,"misconducts":-2,"miserable":-3,"miserably":-3,"misery":-2,"misfire":-2,"misfortune":-2,"misgiving":-2,"misinformation":-2,"misinformed":-2,"misinterpreted":-2,"mislead":-3,"misleaded":-3,"misleading":-3,"misleads":-3,"misplace":-2,"misplaced":-2,"misplaces":-2,"misplacing":-2,"mispricing":-3,"misread":-1,"misreport":-2,"misreported":-2,"misreporting":-2,"misreports":-2,"misrepresent":-2,"misrepresentation":-2,"misrepresentations":-2,"misrepresented":-2,"misrepresenting":-2,"misrepresents":-2,"miss":-2,"missed":-2,"missing":-2,"mistake":-2,"mistaken":-2,"mistakes":-2,"mistaking":-2,"misunderstand":-2,"misunderstanding":-2,"misunderstands":-2,"misunderstood":-2,"misuse":-2,"misused":-2,"misuses":-2,"misusing":-2,"moan":-2,"moaned":-2,"moaning":-2,"moans":-2,"mock":-2,"mocked":-2,"mocking":-2,"mocks":-2,"modernize":2,"modernized":2,"modernizes":2,"modernizing":2,"mongering":-2,"monopolize":-2,"monopolized":-2,"monopolizes":-2,"monopolizing":-2,"monotone":-1,"moody":-1,"mope":-1,"moping":-1,"moron":-3,"motherfucker":-5,"motherfucking":-5,"motivate":1,"motivated":2,"motivating":2,"motivation":1,"mourn":-2,"mourned":-2,"mournful":-2,"mourning":-2,"mourns":-2,"muddy":-2,"mumpish":-2,"murder":-2,"murderer":-2,"murdering":-3,"murderous":-3,"murders":-2,"murky":-2,"myth":-1,"n00b":-2,"naive":-2,"narcissism":-2,"nasty":-3,"natural":1,"naïve":-2,"needy":-2,"negative":-2,"negativity":-2,"neglect":-2,"neglected":-2,"neglecting":-2,"neglects":-2,"nerves":-1,"nervous":-2,"nervously":-2,"nice":3,"nifty":2,"niggas":-5,"nigger":-5,"no":-1,"no fun":-3,"noble":2,"noblest":2,"noisy":-1,"non-approved":-2,"nonsense":-2,"noob":-2,"nosey":-2,"not good":-2,"not working":-3,"notable":2,"noticeable":2,"notorious":-2,"novel":2,"numb":-1,"nurturing":2,"nuts":-3,"obliterate":-2,"obliterated":-2,"obnoxious":-3,"obscene":-2,"obscenity":-2,"obsessed":2,"obsolete":-2,"obstacle":-2,"obstacles":-2,"obstinate":-2,"obstruct":-2,"obstructed":-2,"obstructing":-2,"obstruction":-2,"obstructs":-2,"odd":-2,"offence":-2,"offences":-2,"offend":-2,"offended":-2,"offender":-2,"offending":-2,"offends":-2,"offense":-2,"offenses":-2,"offensive":-2,"offensively":-2,"offline":-1,"oks":2,"ominous":3,"once-in-a-lifetime":3,"oops":-2,"opportunities":2,"opportunity":2,"oppressed":-2,"oppression":-2,"oppressions":-2,"oppressive":-2,"optimism":2,"optimistic":2,"optionless":-2,"ostracize":-2,"ostracized":-2,"ostracizes":-2,"ouch":-2,"outage":-2,"outages":-2,"outbreak":-2,"outbreaks":-2,"outcry":-2,"outmaneuvered":-2,"outnumbered":-2,"outrage":-3,"outraged":-3,"outrageous":-3,"outreach":2,"outstanding":5,"overjoyed":4,"overload":-1,"overlooked":-1,"overprotective":-2,"overran":-2,"overreact":-2,"overreacted":-2,"overreacting":-2,"overreaction":-2,"overreacts":-2,"oversell":-2,"overselling":-2,"oversells":-2,"oversight":-1,"oversimplification":-2,"oversimplified":-2,"oversimplifies":-2,"oversimplify":-2,"oversold":-2,"overstatement":-2,"overstatements":-2,"overweight":-1,"overwrought":-3,"oxymoron":-1,"pain":-2,"pained":-2,"painful":-2,"panic":-3,"panicked":-3,"panics":-3,"paradise":3,"paradox":-1,"pardon":2,"pardoned":2,"pardoning":2,"pardons":2,"parley":-1,"passion":1,"passionate":2,"passive":-1,"passively":-1,"pathetic":-2,"pay":-1,"peace":2,"peaceful":2,"peacefully":2,"penalize":-2,"penalized":-2,"penalizes":-2,"penalizing":-2,"penalty":-2,"pensive":-1,"perfect":3,"perfected":2,"perfection":3,"perfectly":3,"perfects":2,"peril":-2,"perjury":-3,"perpetrated":-2,"perpetrator":-2,"perpetrators":-2,"perplexed":-2,"persecute":-2,"persecuted":-2,"persecutes":-2,"persecuting":-2,"perturbed":-2,"pervert":-3,"pesky":-2,"pessimism":-2,"pessimistic":-2,"petrified":-2,"philanthropy":2,"phobic":-2,"picturesque":2,"pileup":-1,"pillage":-2,"pique":-2,"piqued":-2,"piss":-4,"pissed":-4,"pissing":-3,"piteous":-2,"pitied":-1,"pity":-2,"plague":-3,"plagued":-3,"plagues":-3,"plaguing":-3,"playful":2,"pleasant":3,"please":1,"pleased":3,"pleasurable":3,"pleasure":3,"plodding":-2,"poignant":2,"pointless":-2,"poised":-2,"poison":-2,"poisoned":-2,"poisons":-2,"polished":2,"polite":2,"politeness":2,"pollutant":-2,"pollute":-2,"polluted":-2,"polluter":-2,"polluters":-2,"pollutes":-2,"pollution":-2,"poor":-2,"poorer":-2,"poorest":-2,"poorly":-2,"popular":3,"popularity":3,"positive":2,"positively":2,"possessive":-2,"post-traumatic":-2,"postpone":-1,"postponed":-1,"postpones":-1,"postponing":-1,"poverty":-1,"powerful":2,"powerless":-2,"praise":3,"praised":3,"praises":3,"praising":3,"pray":1,"praying":1,"prays":1,"prblm":-2,"prblms":-2,"predatory":-2,"prepared":1,"pressure":-1,"pressured":-2,"pretend":-1,"pretending":-1,"pretends":-1,"pretty":1,"prevent":-1,"prevented":-1,"preventing":-1,"prevents":-1,"prick":-5,"prison":-2,"prisoner":-2,"prisoners":-2,"privileged":2,"proactive":2,"problem":-2,"problems":-2,"profit":2,"profitable":2,"profiteer":-2,"profits":2,"progress":2,"prohibit":-1,"prohibits":-1,"prominent":2,"promise":1,"promised":1,"promises":1,"promote":1,"promoted":1,"promotes":1,"promoting":1,"promptly":1,"propaganda":-2,"prosecute":-1,"prosecuted":-2,"prosecutes":-1,"prosecution":-1,"prospect":1,"prospects":1,"prosperity":3,"prosperous":3,"protect":1,"protected":1,"protects":1,"protest":-2,"protesters":-2,"protesting":-2,"protests":-2,"proud":2,"proudly":2,"provoke":-1,"provoked":-1,"provokes":-1,"provoking":-1,"prudence":2,"pseudoscience":-3,"psychopathic":-2,"punish":-2,"punished":-2,"punishes":-2,"punishing":-2,"punitive":-2,"pure":1,"purest":1,"purposeful":2,"pushy":-1,"puzzled":-2,"quaking":-2,"qualities":2,"quality":2,"questionable":-2,"questioned":-1,"questioning":-1,"racism":-3,"racist":-3,"racists":-3,"rage":-2,"rageful":-2,"rainy":-1,"rant":-3,"ranter":-3,"ranters":-3,"rants":-3,"rape":-4,"raped":-4,"rapist":-4,"rapture":2,"raptured":2,"raptures":2,"rapturous":4,"rash":-2,"ratified":2,"reach":1,"reached":1,"reaches":1,"reaching":1,"reassure":1,"reassured":1,"reassures":1,"reassuring":2,"rebel":-2,"rebellion":-2,"rebels":-2,"recession":-2,"reckless":-2,"recognition":2,"recommend":2,"recommended":2,"recommends":2,"redeemed":2,"refine":1,"refined":1,"refines":1,"refreshingly":2,"refuse":-2,"refused":-2,"refuses":-2,"refusing":-2,"regret":-2,"regretful":-2,"regrets":-2,"regretted":-2,"regretting":-2,"reigning":1,"reject":-1,"rejected":-1,"rejecting":-1,"rejection":-2,"rejects":-1,"rejoice":4,"rejoiced":4,"rejoices":4,"rejoicing":4,"relaxed":2,"relentless":-1,"reliability":2,"reliable":2,"reliably":2,"reliant":2,"relieve":1,"relieved":2,"relieves":1,"relieving":2,"relishing":2,"remarkable":2,"remorse":-2,"repellent":-2,"repercussion":-2,"repercussions":-2,"reprimand":-2,"reprimanded":-2,"reprimanding":-2,"reprimands":-2,"repulse":-1,"repulsed":-2,"repulsive":-2,"rescue":2,"rescued":2,"rescues":2,"resentful":-2,"resign":-1,"resigned":-1,"resigning":-1,"resigns":-1,"resolute":2,"resolution":2,"resolve":2,"resolved":2,"resolves":2,"resolving":2,"respect":2,"respected":2,"respects":2,"responsibility":1,"responsible":2,"responsive":2,"restful":2,"restless":-2,"restore":1,"restored":1,"restores":1,"restoring":1,"restrict":-2,"restricted":-2,"restricting":-2,"restriction":-2,"restrictive":-1,"restricts":-2,"retained":-1,"retard":-2,"retarded":-2,"retreat":-1,"revenge":-2,"revengeful":-2,"revered":2,"revive":2,"revives":2,"revolting":-2,"reward":2,"rewarded":2,"rewarding":2,"rewards":2,"rich":2,"richly":2,"ridiculous":-3,"rig":-1,"rigged":-1,"right direction":3,"righteousness":2,"rightful":2,"rightfully":2,"rigorous":3,"rigorously":3,"riot":-2,"riots":-2,"rise":1,"rises":1,"risk":-2,"risks":-2,"risky":-2,"riveting":3,"rob":-2,"robber":-2,"robed":-2,"robing":-2,"robs":-2,"robust":2,"rofl":4,"roflcopter":4,"roflmao":4,"romance":2,"romantical":2,"romantically":2,"rose":1,"rotfl":4,"rotflmfao":4,"rotflol":4,"rotten":-3,"rude":-2,"ruin":-2,"ruined":-2,"ruining":-2,"ruins":-2,"sabotage":-2,"sad":-2,"sadden":-2,"saddened":-2,"sadly":-2,"safe":1,"safely":1,"safer":2,"safety":1,"salient":1,"salute":2,"saluted":2,"salutes":2,"saluting":2,"salvation":2,"sappy":-1,"sarcastic":-2,"satisfied":2,"savange":-2,"savanges":-2,"save":2,"saved":2,"savings":1,"scam":-2,"scams":-2,"scandal":-3,"scandalous":-3,"scandals":-3,"scapegoat":-2,"scapegoats":-2,"scare":-2,"scared":-2,"scar":-2,"scars":-2,"scary":-2,"sceptical":-2,"scold":-2,"scoop":3,"scorn":-2,"scornful":-2,"scream":-2,"screamed":-2,"screaming":-2,"screams":-2,"screwed":-2,"screwed up":-3,"scum":-3,"scumbag":-4,"seamless":2,"seamlessly":2,"secure":2,"secured":2,"secures":2,"sedition":-2,"seditious":-2,"seduced":-1,"self-abuse":-2,"self-confident":2,"self-contradictory":-2,"self-deluded":-2,"selfish":-3,"selfishness":-3,"sentence":-2,"sentenced":-2,"sentences":-2,"sentencing":-2,"serene":2,"settlement":1,"settlements":1,"severe":-2,"severely":-2,"sexist":-2,"sexistic":-2,"sexy":3,"shaky":-2,"shame":-2,"shamed":-2,"shameful":-2,"share":1,"shared":1,"shares":1,"shattered":-2,"shit":-4,"shithead":-4,"shitty":-3,"shock":-2,"shocked":-2,"shocking":-2,"shocks":-2,"shoody":-2,"shoot":-1,"short-sighted":-2,"short-sightedness":-2,"shortage":-2,"shortages":-2,"shrew":-4,"shy":-1,"sick":-2,"sickness":-2,"side-effect":-2,"side-effects":-2,"sigh":-2,"significance":1,"significant":1,"silencing":-1,"silly":-1,"simplicity":1,"sin":-2,"sincere":2,"sincerely":2,"sincerest":2,"sincerity":2,"sinful":-3,"singleminded":-2,"sinister":-2,"sins":-2,"skeptic":-2,"skeptical":-2,"skepticism":-2,"skeptics":-2,"slam":-2,"slash":-2,"slashed":-2,"slashes":-2,"slashing":-2,"slave":-3,"slavery":-3,"slaves":-3,"sleeplessness":-2,"slick":2,"slicker":2,"slickest":2,"slip":-1,"sloppy":-2,"sluggish":-2,"slumping":-1,"slut":-5,"smart":1,"smarter":2,"smartest":2,"smear":-2,"smile":2,"smiled":2,"smiles":2,"smiling":2,"smog":-2,"smuggle":-2,"smuggled":-2,"smuggling":-2,"smuggles":-2,"sneaky":-1,"sneeze":-2,"sneezed":-2,"sneezes":-2,"sneezing":-2,"snub":-2,"snubbed":-2,"snubbing":-2,"snubs":-2,"sobering":1,"solemn":-1,"solid":2,"solidarity":2,"solidified":2,"solidifies":2,"solidify":2,"solidifying":2,"solution":1,"solutions":1,"solve":1,"solved":1,"solves":1,"solving":1,"somber":-2,"some kind":0,"son-of-a-bitch":-5,"soothe":3,"soothed":3,"soothing":3,"sophisticated":2,"sore":-1,"sorrow":-2,"sorrowful":-2,"sorry":-1,"spacious":1,"spam":-2,"spammer":-3,"spammers":-3,"spamming":-2,"spark":1,"sparkle":3,"sparkles":3,"sparkling":3,"spearhead":2,"speculative":-2,"spirit":1,"spirited":2,"spiritless":-2,"spiteful":-2,"splendid":3,"spoiled":-2,"spoilt":-2,"spotless":2,"sprightly":2,"squander":-2,"squandered":-2,"squandering":-2,"squanders":-2,"squelched":-1,"stab":-2,"stabbed":-2,"stable":2,"stabs":-2,"stall":-2,"stalled":-2,"stalling":-2,"stamina":2,"stampede":-2,"stank":-2,"startled":-2,"startling":3,"starve":-2,"starved":-2,"starves":-2,"starving":-2,"steadfast":2,"steal":-2,"stealing":-2,"steals":-2,"stereotype":-2,"stereotyped":-2,"stifled":-1,"stimulate":1,"stimulated":1,"stimulates":1,"stimulating":2,"stingy":-2,"stink":-2,"stinked":-2,"stinker":-2,"stinking":-2,"stinks":-2,"stinky":-2,"stole":-2,"stolen":-2,"stop":-1,"stopped":-1,"stopping":-1,"stops":-1,"stout":2,"straight":1,"strange":-1,"strangely":-1,"strangled":-2,"strength":2,"strengthen":2,"strengthened":2,"strengthening":2,"strengthens":2,"strengths":2,"stress":-1,"stressed":-2,"stressor":-2,"stressors":-2,"stricken":-2,"strike":-1,"strikers":-2,"strikes":-1,"strong":2,"stronger":2,"strongest":2,"struck":-1,"struggle":-2,"struggled":-2,"struggles":-2,"struggling":-2,"stubborn":-2,"stuck":-2,"stunned":-2,"stunning":4,"stupid":-2,"stupidity":-3,"stupidly":-2,"suave":2,"subpoena":-2,"substantial":1,"substantially":1,"subversive":-2,"succeed":3,"succeeded":3,"succeeding":3,"succeeds":3,"success":2,"successful":3,"successfully":3,"suck":-3,"sucks":-3,"sue":-2,"sued":-2,"sueing":-2,"sues":-2,"suffer":-2,"suffered":-2,"sufferer":-2,"sufferers":-2,"suffering":-2,"suffers":-2,"suicidal":-2,"suicide":-2,"suicides":-2,"suing":-2,"suitable":2,"suited":2,"sulking":-2,"sulky":-2,"sullen":-2,"sunshine":2,"super":3,"superb":5,"superior":2,"support":2,"supported":2,"supporter":1,"supporters":1,"supporting":1,"supportive":2,"supports":2,"supreme":4,"survived":2,"surviving":2,"survivor":2,"suspect":-1,"suspected":-1,"suspecting":-1,"suspects":-1,"suspend":-1,"suspended":-1,"suspicious":-2,"sustainability":1,"sustainable":2,"sustainably":2,"swear":-2,"swearing":-2,"swears":-2,"sweet":2,"sweeter":3,"sweetest":3,"swift":2,"swiftly":2,"swindle":-3,"swindles":-3,"swindling":-3,"sympathetic":2,"sympathy":2,"taint":-2,"tainted":-2,"talent":2,"tard":-2,"tarnish":-2,"tarnished":-2,"tarnishes":-2,"tears":-2,"tender":2,"tenderness":2,"tense":-2,"tension":-1,"terrible":-3,"terribly":-3,"terrific":4,"terrifically":4,"terrified":-3,"terror":-3,"terrorist":-2,"terrorists":-2,"terrorize":-3,"terrorized":-3,"terrorizes":-3,"thank":2,"thankful":2,"thanks":2,"thorny":-2,"thoughtful":2,"thoughtless":-2,"threat":-2,"threaten":-2,"threatened":-2,"threatening":-2,"threatens":-2,"threats":-2,"thrilled":5,"thwart":-2,"thwarted":-2,"thwarting":-2,"thwarts":-2,"timid":-2,"timorous":-2,"tired":-2,"tits":-2,"tolerance":2,"tolerant":2,"toothless":-2,"top":2,"tops":2,"torn":-2,"torture":-4,"tortured":-4,"tortures":-4,"torturing":-4,"totalitarian":-2,"totalitarianism":-2,"tout":-2,"touted":-2,"touting":-2,"touts":-2,"toxic":-3,"tragedies":-2,"tragedy":-2,"tragic":-2,"tranquil":2,"transgress":-2,"transgressed":-2,"transgresses":-2,"transgressing":-2,"trap":-1,"trapped":-2,"traps":-1,"trauma":-3,"traumatic":-3,"travesty":-2,"treason":-3,"treasonous":-3,"treasure":2,"treasures":2,"trembling":-2,"tremor":-2,"tremors":-2,"tremulous":-2,"tribulation":-2,"tribute":2,"tricked":-2,"trickery":-2,"triumph":4,"triumphant":4,"troll":-2,"trouble":-2,"troubled":-2,"troubles":-2,"troubling":-2,"true":2,"trust":1,"trusted":2,"trusts":1,"tumor":-2,"twat":-5,"tyran":-3,"tyrannic":-3,"tyrannical":-3,"tyrannically":-3,"tyrans":-3,"ubiquitous":2,"ugh":-2,"ugliness":-3,"ugly":-3,"unable":-2,"unacceptable":-2,"unappeasable":-2,"unappreciated":-2,"unapproved":-2,"unattractive":-2,"unavailable":-1,"unavailing":-2,"unaware":-2,"unbearable":-2,"unbelievable":-1,"unbelieving":-1,"unbiased":2,"uncertain":-1,"unclear":-1,"uncomfortable":-2,"unconcerned":-2,"unconfirmed":-1,"unconvinced":-1,"uncredited":-1,"undecided":-1,"undercooked":-2,"underestimate":-1,"underestimated":-1,"underestimates":-1,"underestimating":-1,"undermine":-2,"undermined":-2,"undermines":-2,"undermining":-2,"underperform":-2,"underperformed":-2,"underperforming":-2,"underperforms":-2,"undeserving":-2,"undesirable":-2,"uneasy":-2,"unemployed":-1,"unemployment":-2,"unequal":-1,"unequaled":2,"unethical":-2,"uneventful":-2,"unfair":-2,"unfavorable":-2,"unfit":-2,"unfitted":-2,"unfocused":-2,"unforgivable":-3,"unforgiving":-2,"unfulfilled":-2,"unfunny":-2,"ungenerous":-2,"ungrateful":-3,"unhappy":-2,"unhappiness":-2,"unhealthy":-2,"unhygienic":-2,"unified":1,"unimaginative":-2,"unimpressed":-2,"uninspired":-2,"unintelligent":-2,"unintentional":-2,"uninvolving":-2,"united":1,"unjust":-2,"unlikely":-1,"unlovable":-2,"unloved":-2,"unmatched":1,"unmotivated":-2,"unoriginal":-2,"unparliamentary":-2,"unpleasant":-2,"unpleasantness":-2,"unprofessional":-2,"unravel":1,"unreleting":-2,"unresearched":-2,"unsafe":-2,"unsatisfied":-2,"unscientific":-2,"unsecured":-2,"unselfish":2,"unsettled":-1,"unsold":-1,"unsophisticated":-2,"unsound":-2,"unstable":-2,"unstoppable":2,"unsuccessful":-2,"unsuccessfully":-2,"unsupported":-2,"unsure":-1,"untarnished":2,"untrue":-2,"unwanted":-2,"unworthy":-2,"uplifting":2,"uproar":-3,"upset":-2,"upsets":-2,"upsetting":-2,"uptight":-2,"urgent":-1,"useful":2,"usefulness":2,"useless":-2,"uselessness":-2,"vague":-2,"validate":1,"validated":1,"validates":1,"validating":1,"vapid":-2,"verdict":-1,"verdicts":-1,"vested":1,"vexation":-2,"vexing":-2,"vibrant":3,"vicious":-2,"victim":-3,"victimization":-3,"victimize":-3,"victimized":-3,"victimizes":-3,"victimizing":-3,"victims":-3,"victor":3,"victors":3,"victory":3,"victories":3,"vigilant":3,"vigor":3,"vile":-3,"vindicate":2,"vindicated":2,"vindicates":2,"vindicating":2,"violate":-2,"violated":-2,"violates":-2,"violating":-2,"violation":-2,"violations":-2,"violence":-3,"violence-related":-3,"violent":-3,"violently":-3,"virtuous":2,"virulent":-2,"vision":1,"visionary":3,"visioning":1,"visions":1,"vitality":3,"vitamin":1,"vitriolic":-3,"vivacious":3,"vividly":2,"vociferous":-1,"vomit":-3,"vomited":-3,"vomiting":-3,"vomits":-3,"vulnerability":-2,"vulnerable":-2,"walkout":-2,"walkouts":-2,"wanker":-3,"want":1,"war":-2,"warfare":-2,"warm":1,"warmhearted":2,"warmness":2,"warmth":2,"warn":-2,"warned":-2,"warning":-3,"warnings":-3,"warns":-2,"waste":-1,"wasted":-2,"wasting":-2,"wavering":-1,"weak":-2,"weakened":-2,"weakness":-2,"weaknesses":-2,"wealth":3,"wealthier":2,"wealthy":2,"weary":-2,"weep":-2,"weeping":-2,"weird":-2,"welcome":2,"welcomed":2,"welcomes":2,"well-being":2,"well-championed":3,"well-developed":2,"well-established":2,"well-focused":2,"well-groomed":2,"well-proportioned":2,"whimsical":1,"whitewash":-3,"whore":-4,"wicked":-2,"widowed":-1,"willingness":2,"win":4,"winner":4,"winning":4,"wins":4,"winwin":3,"wisdom":1,"wish":1,"wishes":1,"wishing":1,"withdrawal":-3,"wits":2,"woebegone":-2,"woeful":-3,"won":3,"wonderful":4,"wonderfully":4,"woo":3,"woohoo":3,"wooo":4,"woow":4,"worn":-1,"worried":-3,"worries":-3,"worry":-3,"worrying":-3,"worse":-3,"worsen":-3,"worsened":-3,"worsening":-3,"worsens":-3,"worshiped":3,"worst":-3,"worth":2,"worthless":-2,"worthy":2,"wow":4,"wowow":4,"wowww":4,"wrathful":-3,"wreck":-2,"wrenching":-2,"wrong":-2,"wrongdoing":-2,"wrongdoings":-2,"wronged":-2,"wrongful":-2,"wrongfully":-2,"wrongly":-2,"wtf":-4,"wtff":-4,"wtfff":-4,"xo":3,"xoxo":3,"xoxoxo":4,"xoxoxoxo":4,"yeah":1,"yearning":1,"yeees":2,"yes":1,"youthful":2,"yucky":-2,"yummy":3,"zealot":-2,"zealots":-2,"zealous":2}'
    );
  },
  function (e, t, n) {
    var i = n(49);
    e.exports = {
      apply: function (e, t, n) {
        return 0 < t && i[e[t - 1]] && (n = -n), n;
      },
    };
  },
  function (e) {
    e.exports = JSON.parse(
      '{"cant":1,"can\'t":1,"dont":1,"don\'t":1,"doesnt":1,"doesn\'t":1,"not":1,"non":1,"wont":1,"won\'t":1,"isnt":1,"isn\'t":1}'
    );
  },
  function (e, t, n) {
    var i = { "./en/index": 11 };
    function r(e) {
      var t = s(e);
      return n(t);
    }
    function s(e) {
      if (n.o(i, e)) return i[e];
      var t = Error("Cannot find module '" + e + "'");
      throw ((t.code = "MODULE_NOT_FOUND"), t);
    }
    (r.keys = function () {
      return Object.keys(i);
    }),
      (r.resolve = s),
      ((e.exports = r).id = 50);
  },
  function (e, t, n) {
    "use strict";
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    n.r(t);
    var r = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        return (
          (function (e, t, n) {
            t && i(e.prototype, t);
          })(e, [
            {
              key: "getResult",
              value: function (e, t, n) {
                throw Error("The method getResult is not implemented");
              },
            },
            {
              key: "getScore",
              value: function () {
                return 0;
              },
            },
            {
              key: "isApplicable",
              value: function (e) {
                return !0;
              },
            },
          ]),
          e
        );
      })(),
      s = n(0);
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function u(e) {
      return e
        ? Object(s.toLower)(
            Object(s.deburr)(Object(s.trim)(e.replace(/[\s\./_]+/g, "-"), "-"))
          )
        : "";
    }
    function a(e) {
      return e.replace(/<\/?[a-z][^>]*?>/gi, "\n");
    }
    function l(e) {
      return e
        .replace(/&nbsp;|&#160;/gi, " ")
        .replace(/\s{2,}/g, " ")
        .replace(/\s\./g, ".")
        .replace(/^\s+|\s+$/g, "");
    }
    function c(e) {
      return e.replace(b, "").replace(v, "");
    }
    function d(e) {
      return e.replace(/--|\u2014/g, " ");
    }
    function f(e) {
      return e.replace(D, "");
    }
    function p(e) {
      return e.replace(/<!--[\s\S]*?-->/g, "");
    }
    function h(e) {
      return e.replace(/&\S+?;/g, "");
    }
    function y(e) {
      return e.replace(k, "").replace(F, "");
    }
    function g(e, t) {
      var n = (function (e) {
        if ("" === (e = Object(s.flow)([a, p, c, l, h, d, f])(e))) return [];
        var t = e.split(/\s/g);
        return (
          (t = Object(s.map)(t, function (e) {
            return y(e);
          })),
          Object(s.filter)(t, function (e) {
            return "" != e.trim();
          })
        );
      })(e);
      return (t = t || !1), 0 !== n.length && (!1 === t ? n : n.slice(0, t));
    }
    var m = (function () {
        function e() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            (this.has = !1),
            (this.score = 0),
            (this.maxScore = 0),
            (this.text = ""),
            (this.empty = ""),
            (this.tooltip = ""),
            this
          );
        }
        return (
          (function (e, t, n) {
            t && o(e.prototype, t);
          })(e, [
            {
              key: "hasScore",
              value: function () {
                return this.has;
              },
            },
            {
              key: "getScore",
              value: function () {
                return this.score;
              },
            },
            {
              key: "setScore",
              value: function (e) {
                return (
                  Object(s.isNumber)(e) &&
                    ((this.score = e), (this.has = 0 < e)),
                  this
                );
              },
            },
            {
              key: "setMaxScore",
              value: function (e) {
                return Object(s.isNumber)(e) && (this.maxScore = e), this;
              },
            },
            {
              key: "getMaxScore",
              value: function () {
                return this.maxScore;
              },
            },
            {
              key: "hasText",
              value: function () {
                return "" !== this.text;
              },
            },
            {
              key: "getText",
              value: function () {
                return this.hasText() ? this.text : this.empty;
              },
            },
            {
              key: "setText",
              value: function (e) {
                return (this.text = Object(s.isUndefined)(e) ? "" : e), this;
              },
            },
            {
              key: "setEmpty",
              value: function (e) {
                return (this.empty = Object(s.isUndefined)(e) ? "" : e), this;
              },
            },
            {
              key: "hasTooltip",
              value: function () {
                return "" !== this.tooltip;
              },
            },
            {
              key: "getTooltip",
              value: function () {
                return this.tooltip;
              },
            },
            {
              key: "setTooltip",
              value: function (e) {
                return (this.tooltip = Object(s.isUndefined)(e) ? "" : e), this;
              },
            },
          ]),
          e
        );
      })(),
      b = /\[[^<>&/\[\] - =]+?( [^\]]+?)?\]/g,
      v = /\[\/[^<>&/\[\] - =]+?\]/g,
      D = /[-¿×÷ -⯿⸀-⹿]/g,
      w = "[\\–\\-\\(\\)_\\[\\]’“”\"'.?!:;,¿¡«»‹›—×+&<>]+",
      k = RegExp("^" + w),
      F = RegExp(w + "$"),
      E = {
        adulthood: !0,
        advice: !0,
        agenda: !0,
        aid: !0,
        alcohol: !0,
        ammo: !0,
        anime: !0,
        athletics: !0,
        audio: !0,
        bison: !0,
        blood: !0,
        bream: !0,
        buffalo: !0,
        butter: !0,
        carp: !0,
        cash: !0,
        chassis: !0,
        chess: !0,
        clothing: !0,
        cod: !0,
        commerce: !0,
        cooperation: !0,
        corps: !0,
        debris: !0,
        diabetes: !0,
        digestion: !0,
        elk: !0,
        energy: !0,
        equipment: !0,
        excretion: !0,
        expertise: !0,
        flounder: !0,
        fun: !0,
        gallows: !0,
        garbage: !0,
        graffiti: !0,
        headquarters: !0,
        health: !0,
        herpes: !0,
        highjinks: !0,
        homework: !0,
        housework: !0,
        information: !0,
        jeans: !0,
        justice: !0,
        kudos: !0,
        labour: !0,
        literature: !0,
        machinery: !0,
        mackerel: !0,
        mail: !0,
        media: !0,
        mews: !0,
        moose: !0,
        music: !0,
        mud: !0,
        manga: !0,
        news: !0,
        pike: !0,
        plankton: !0,
        pliers: !0,
        police: !0,
        pollution: !0,
        premises: !0,
        rain: !0,
        research: !0,
        rice: !0,
        salmon: !0,
        scissors: !0,
        seo: !0,
        series: !0,
        sewage: !0,
        shambles: !0,
        shrimp: !0,
        species: !0,
        staff: !0,
        swine: !0,
        tennis: !0,
        traffic: !0,
        transportation: !0,
        trout: !0,
        tuna: !0,
        wealth: !0,
        welfare: !0,
        whiting: !0,
        wildebeest: !0,
        wildlife: !0,
        wordpress: !0,
        you: !0,
      },
      C = [
        ["I", "we"],
        ["me", "us"],
        ["he", "they"],
        ["she", "they"],
        ["them", "them"],
        ["myself", "ourselves"],
        ["yourself", "yourselves"],
        ["itself", "themselves"],
        ["herself", "themselves"],
        ["himself", "themselves"],
        ["themself", "themselves"],
        ["is", "are"],
        ["was", "were"],
        ["has", "have"],
        ["this", "these"],
        ["that", "those"],
        ["echo", "echoes"],
        ["dingo", "dingoes"],
        ["volcano", "volcanoes"],
        ["tornado", "tornadoes"],
        ["torpedo", "torpedoes"],
        ["genus", "genera"],
        ["viscus", "viscera"],
        ["stigma", "stigmata"],
        ["stoma", "stomata"],
        ["dogma", "dogmata"],
        ["lemma", "lemmata"],
        ["schema", "schemata"],
        ["anathema", "anathemata"],
        ["ox", "oxen"],
        ["axe", "axes"],
        ["die", "dice"],
        ["yes", "yeses"],
        ["foot", "feet"],
        ["eave", "eaves"],
        ["goose", "geese"],
        ["tooth", "teeth"],
        ["quiz", "quizzes"],
        ["human", "humans"],
        ["proof", "proofs"],
        ["carve", "carves"],
        ["valve", "valves"],
        ["looey", "looies"],
        ["thief", "thieves"],
        ["groove", "grooves"],
        ["pickaxe", "pickaxes"],
        ["whiskey", "whiskies"],
        ["thou", "you"],
      ],
      A = [
        [/[^aeiou]ese$/i, "$0"],
        [/deer$/i, "$0"],
        [/fish$/i, "$0"],
        [/measles$/i, "$0"],
        [/o[iu]s$/i, "$0"],
        [/pox$/i, "$0"],
        [/sheep$/i, "$0"],
        [/s?$/i, "s"],
        [/[^\u0000-\u007F]$/i, "$0"],
        [/([^aeiou]ese)$/i, "$1"],
        [/(ax|test)is$/i, "$1es"],
        [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
        [/(e[mn]u)s?$/i, "$1s"],
        [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
        [
          /(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
          "$1i",
        ],
        [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
        [/(seraph|cherub)(?:im)?$/i, "$1im"],
        [/(her|at|gr)o$/i, "$1oes"],
        [
          /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
          "$1a",
        ],
        [
          /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
          "$1a",
        ],
        [/sis$/i, "ses"],
        [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
        [/([^aeiouy]|qu)y$/i, "$1ies"],
        [/([^ch][ieo][ln])ey$/i, "$1ies"],
        [/(x|ch|ss|sh|zz)$/i, "$1es"],
        [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
        [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
        [/(pe)(?:rson|ople)$/i, "$1ople"],
        [/(child)(?:ren)?$/i, "$1ren"],
        [/eaux$/i, "$0"],
        [/m[ae]n$/i, "men"],
      ];
    function x(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function S(e) {
      return Object(B.count)(e, "words");
    }
    function j(e) {
      var t = [],
        n = [];
      e.forEach(function (e) {
        t.push(e.word), n.push(e.plural);
      });
      var i = t.length,
        r = [];
      function o(t) {
        e.forEach(function (e) {
          e.plural === e.word ||
            Object(s.includes)(t, e.plural) ||
            r.push(t.join(" ").replace(e.word, e.plural));
        });
      }
      r.push(t.join(" "));
      for (var u = 0; u < i * i; u++)
        Object(s.isUndefined)(r[u]) || o(r[u].split(" "));
      return r.push(n.join(" ")), Object(s.uniq)(r);
    }
    var _ = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.irregularSingles = {}),
            (this.irregularPlurals = {}),
            (this.uncountables = E),
            (this.pluralizationRules = A),
            C.forEach(function (e) {
              var t = e[0],
                n = e[1];
              (this.irregularSingles[t] = n), (this.irregularPlurals[n] = t);
            }, this);
        }
        return (
          (function (e, t, n) {
            t && x(e.prototype, t);
          })(e, [
            {
              key: "get",
              value: function (e) {
                if (!e.length) return e;
                var t = e.toLowerCase();
                if (
                  (this.irregularPlurals.hasOwnProperty(t) &&
                    this.restoreCase(e, t),
                  this.irregularSingles.hasOwnProperty(t) &&
                    this.restoreCase(e, this.irregularSingles[t]),
                  this.uncountables.hasOwnProperty(t))
                )
                  return e;
                for (var n = this.pluralizationRules.length; n--; ) {
                  var i = this.pluralizationRules[n];
                  if (i[0].test(e)) return this.replace(e, i);
                }
                return e;
              },
            },
            {
              key: "restoreCase",
              value: function (e, t) {
                return e === t
                  ? t
                  : e === e.toUpperCase()
                  ? t.toUpperCase()
                  : e[0] === e[0].toUpperCase()
                  ? t[0].toUpperCase() + t.substr(1).toLowerCase()
                  : t.toLowerCase();
              },
            },
            {
              key: "replace",
              value: function (e, t) {
                var n = arguments,
                  i = this;
                return e.replace(t[0], function (r, s) {
                  var o = i.interpolate(t[1], n);
                  return i.restoreCase("" === r ? e[s - 1] : r, o);
                });
              },
            },
            {
              key: "interpolate",
              value: function (e, t) {
                return e.replace(/\$(\d{1,2})/g, function (e, n) {
                  return t[n] || "";
                });
              },
            },
          ]),
          e
        );
      })(),
      B = n(12),
      O = n(6),
      R = n.n(O),
      z = n(1),
      P = /href=(["'])([^"']+)\1/i;
    function T(e) {
      return "#" === e[0];
    }
    function q(e) {
      var t = P.exec(e);
      return null === t ? "" : t[2];
    }
    function M(e) {
      var t = (function (e) {
          return e.match(/<a [^>]*href=([\"'])[a-z/]([^\"']+)[^>]*>/gi) || [];
        })(e),
        n = {
          total: 0,
          internalTotal: 0,
          internalDofollow: 0,
          internalNofollow: 0,
          externalTotal: 0,
          externalDofollow: 0,
          externalNofollow: 0,
          otherTotal: 0,
          otherDofollow: 0,
          otherNofollow: 0,
          anchors: t,
        };
      return (
        null === t ||
          ((n.total = t.length),
          t.forEach(function (e) {
            var t = (function (e, t) {
                var n = q(e);
                return !(function (e) {
                  return !e || "http:" === e || "https:" === e;
                })(
                  (function (e) {
                    return R.a.parse(e).protocol;
                  })(n)
                ) || T(n)
                  ? "other"
                  : (function (e, t) {
                      var n = Object(z.applyFilters)(
                        "rankMath_analysis_isInternalLink",
                        null,
                        e,
                        t
                      );
                      if (null !== n) return n;
                      if (!Object(s.includes)(e, "//") && "/" === e[0])
                        return !0;
                      if (T(e)) return !1;
                      var i = R.a.parse(e, !1, !0);
                      return !i.host || Object(s.includes)(i.host, t);
                    })(n, t)
                  ? "internal"
                  : "external";
              })(e, rankMath.parentDomain),
              i = (function (e, t) {
                return (
                  (e = e.toLowerCase()),
                  Object(s.includes)(e, "dofollow")
                    ? "Dofollow"
                    : "internal" !== t &&
                      rankMath.noFollowExternalLinks &&
                      !Object(s.includes)(e, "nofollow")
                    ? (function (e) {
                        var t = !0,
                          n = R.a.parse(e, !1, !0);
                        return rankMath.noFollowDomains.length
                          ? (rankMath.noFollowDomains.forEach(function (e) {
                              Object(s.includes)(n.host, e) && (t = !1);
                            }),
                            t)
                          : !!rankMath.noFollowExcludeDomains.length &&
                              ((t = !1),
                              rankMath.noFollowExcludeDomains.forEach(function (
                                e
                              ) {
                                Object(s.includes)(n.host, e) && (t = !0);
                              }),
                              t);
                      })(q(e))
                      ? "Dofollow"
                      : "Nofollow"
                    : Object(s.includes)(e, "<a") &&
                      Object(s.includes)(e, "rel=") &&
                      Object(s.includes)(e, "nofollow")
                    ? "Nofollow"
                    : "Dofollow"
                );
              })(e, t);
            n[t + "Total"]++, n[t + i]++;
          })),
        n
      );
    }
    var L = n(13),
      $ = n.n(L);
    function N(e) {
      if ("" === e) return !1;
      var t = g(
          (e = (function (e) {
            return "." === (e = e.replace(/\b[0-9]+\b/g, "")) ? "" : e;
          })(e))
        ),
        n = (function (e) {
          if ("" === (e = Object(s.flow)([a, p, c, l, h, d])(e))) return 0;
          var t = new $.a().tokenizeParagraph(e).children;
          return Object(s.filter)(t, { type: "SentenceNode" }).length;
        })(e),
        i = t.length;
      return (
        0 !== n &&
        0 !== i &&
        (function (e, t, n) {
          return 206.835 - (t / e) * 1.015 - (n / t) * 84.6;
        })(
          n,
          i,
          (function (e) {
            var t = Object(s.map)(e, function (e) {
              return (function (e) {
                return 3 < (e = e.toLowerCase()).length
                  ? null ===
                    (e = e
                      .replace(/(?:[^laeiouy]es|ed|lle|[^laeiouy]e)$/, "")
                      .replace(/^y/, "")
                      .match(/[aeiouy]{1,2}/g))
                    ? 0
                    : e.length
                  : 1;
              })(e);
            });
            return Object(s.sum)(t);
          })(t)
        ).toFixed(2)
      );
    }
    function I(e) {
      return e.replace(/<style[^>]*>([\S\s]*?)<\/style>/gim, "");
    }
    function W(e) {
      return e.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
    }
    function U(e) {
      return e.replace(/[‘’‛`]/g, "'").replace(/[“”〝〞〟‟„]/g, '"');
    }
    var K = n(14);
    function H(e) {
      return Object(s.isUndefined)(e)
        ? ""
        : Object(s.flow)([I, W, p, h, l, U])(e);
    }
    function Y(e) {
      return Object(s.isUndefined)(e)
        ? ""
        : Object(s.flow)([I, W, a, p, h, l, U])(e);
    }
    function V(e) {
      return Object(s.isUndefined)(e) ? "" : Object(s.flow)([a, l])(e);
    }
    function G(e) {
      return e
        .replace(/&nbsp;|&#160;/gi, " ")
        .replace(/\s{2,}/g, " ")
        .replace(/\s\./g, ".")
        .replace(/(\r\n|\n|\r)/gm, "");
    }
    function J(e, t) {
      var n = (function (e, t) {
        for (
          var n, i = /<p(?:[^>]+)?>(.*?)<\/p>/gi, r = [];
          null !== (n = i.exec(e));

        )
          r.push(n);
        return Object(s.map)(r, function (e) {
          return t ? Y(e[1]) : e[1];
        });
      })((e = Object(s.flow)([c, p, K.autop])(e)), (t = t || !1));
      return 0 < n.length ? n : [t ? Y(e) : e];
    }
    function Z(e) {
      var t = [];
      return (
        J(e).map(function (e) {
          return t.push({ wordCount: S(e), text: e });
        }),
        Object(s.filter)(t, function (e) {
          return 0 < e.wordCount;
        })
      );
    }
    function Q(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var X = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          this.setPaper(t),
          (this.researches = {
            combinations: j,
            fleschReading: N,
            getLinkStats: M,
            getParagraphs: Z,
            getWords: g,
            pluralize: new _(),
            removePunctuation: y,
            slugify: u,
            stripTags: a,
            wordCount: S,
          });
      }
      return (
        (function (e, t, n) {
          t && Q(e.prototype, t);
        })(e, [
          {
            key: "setPaper",
            value: function (e) {
              this.paper = e;
            },
          },
          {
            key: "getResearches",
            value: function () {
              return this.researches;
            },
          },
          {
            key: "getResearch",
            value: function (e) {
              return (
                !Object(s.isUndefined)(e) &&
                !Object(s.isEmpty)(e) &&
                !!this.hasResearch(e) &&
                this.getResearches()[e]
              );
            },
          },
          {
            key: "hasResearch",
            value: function (e) {
              return Object(s.has)(this.getResearches(), e);
            },
          },
        ]),
        e
      );
    })();
    function ee(e) {
      return (ee =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function te(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function ne(e, t) {
      return (ne =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function ie(e) {
      return (ie = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var re = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && ne(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = ie(e);
          if (t) {
            var r = ie(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== ee(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && te(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(
                  e.__(
                    "Add a few images and/or videos to make your content appealing.",
                    "rank-math"
                  )
                )
                .setTooltip(
                  e.__(
                    "Content with images and/or video feels more inviting to users. It also helps supplement your textual content.",
                    "rank-math"
                  )
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n);
              return (
                e.hasText()
                  ? i
                      .setScore(this.calculateScore(e))
                      .setText(this.translateScore(i, n))
                  : e.hasThumbnail() &&
                    i.setScore(1).setText(this.translateScore(i, n)),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return e.hasText() || e.hasThumbnail();
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              var t = 0;
              return (
                (t += this.calculateImagesScore(this.getImages(e))),
                (t += this.calculateVideosScore(this.getVideos(e.getText()))),
                Math.min(this.getScore(), t)
              );
            },
          },
          {
            key: "getScore",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_contentHasAssets_score",
                6
              );
            },
          },
          {
            key: "calculateImagesScore",
            value: function (e) {
              var t = { 0: 0, 1: 1, 2: 2, 3: 4 };
              return Object(s.has)(t, e) ? t[e] : 6;
            },
          },
          {
            key: "calculateVideosScore",
            value: function (e) {
              var t = { 0: 0, 1: 1 };
              return Object(s.has)(t, e) ? t[e] : 2;
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return e.hasScore()
                ? t.__(
                    "Your content contains images and/or video(s).",
                    "rank-math"
                  )
                : t.__(
                    "You are not using rich media like images or videos.",
                    "rank-math"
                  );
            },
          },
          {
            key: "getImages",
            value: function (e, t) {
              var n = 1 < arguments.length && void 0 !== t ? t : null;
              n = Object(s.isNull)(n) ? e.getText() : n;
              var i = [].concat(
                this.match(n, "<img(?:[^>]+)?>"),
                this.match(n, "\\[gallery( [^\\]]+?)?\\]")
              );
              return e.hasThumbnail() && i.push(e.getThumbnail()), i.length;
            },
          },
          {
            key: "hasVideoUrl",
            value: function (e) {
              return this.match(
                e,
                /(http:\/\/|https:\/\/|)(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
              );
            },
          },
          {
            key: "getVideosFromIframe",
            value: function (e) {
              var t = this;
              return {
                count: this.match(e, "<iframe(?:[^>]+)?>").filter(function (n) {
                  return !!t.hasVideoUrl(n) && ((e = e.replace(n, "")), !0);
                }).length,
                text: e,
              };
            },
          },
          {
            key: "getVideosFromVideoTag",
            value: function (e) {
              var t = this;
              return {
                count: this.match(e, "<video(?:[^>]+)?>").filter(function (n) {
                  return !!t.hasVideoUrl(n) && ((e = e.replace(n, "")), !0);
                }).length,
                text: e,
              };
            },
          },
          {
            key: "getVideosFromShortcodes",
            value: function (e) {
              var t = this;
              return {
                count: this.match(e, "\\[video( [^\\]]+?)?\\]").filter(
                  function (n) {
                    return !!t.hasVideoUrl(n) && ((e = e.replace(n, "")), !0);
                  }
                ).length,
                text: e,
              };
            },
          },
          {
            key: "getVideosByURL",
            value: function (e) {
              return { count: this.hasVideoUrl(e).length, text: e };
            },
          },
          {
            key: "getVideos",
            value: function (e) {
              var t = 0,
                n = this.getVideosFromIframe(e);
              t += parseInt(n.count);
              var i = this.getVideosFromVideoTag((e = n.text));
              t += parseInt(i.count);
              var r = this.getVideosFromShortcodes((e = i.text));
              t += parseInt(r.count);
              var s = this.getVideosByURL((e = r.text));
              return (e = s.text), t + parseInt(s.count);
            },
          },
          {
            key: "match",
            value: function (e, t) {
              var n = RegExp(t, "ig"),
                i = e.match(n);
              return null === i ? [] : i;
            },
          },
        ]),
        t
      );
    })();
    function se(e) {
      return (se =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function oe(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function ue(e, t) {
      return (ue =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function ae(e) {
      return (ae = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var le = (function () {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && ue(e, t);
        })(t, r);
        var e = (function (e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              i = ae(e);
            if (t) {
              var r = ae(this).constructor;
              n = Reflect.construct(i, arguments, r);
            } else n = i.apply(this, arguments);
            return (function (e, t) {
              return !t || ("object" !== se(t) && "function" != typeof t)
                ? (function (e) {
                    if (void 0 !== e) return e;
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  })(e)
                : t;
            })(this, n);
          };
        })(t);
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            e.apply(this, arguments)
          );
        }
        return (
          (function (e, t, n) {
            t && oe(e.prototype, t);
          })(t, [
            {
              key: "newResult",
              value: function (e) {
                return new m()
                  .setMaxScore(this.getScore())
                  .setEmpty(
                    e.__(
                      "Add short and concise paragraphs for better readability and UX.",
                      "rank-math"
                    )
                  )
                  .setTooltip(
                    e.__(
                      "Short paragraphs are easier to read and more pleasing to the eye. Long paragraphs scare the visitor, and they might result to SERPs looking for better readable content.",
                      "rank-math"
                    )
                  );
              },
            },
            {
              key: "getResult",
              value: function (e, t, n) {
                var i = this.newResult(n),
                  r = t
                    .getResearch("getParagraphs")(e.getText())
                    .some(function (e) {
                      return 120 < e.wordCount;
                    });
                return (
                  i
                    .setScore(this.calculateScore(r))
                    .setText(this.translateScore(i, n)),
                  i
                );
              },
            },
            {
              key: "isApplicable",
              value: function (e) {
                return e.hasText();
              },
            },
            {
              key: "calculateScore",
              value: function (e) {
                return e ? null : this.getScore();
              },
            },
            {
              key: "getScore",
              value: function () {
                return Object(z.applyFilters)(
                  "rankMath_analysis_contentHasShortParagraphs_score",
                  3
                );
              },
            },
            {
              key: "translateScore",
              value: function (e, t) {
                return e.hasScore()
                  ? t.__("You are using short paragraphs.", "rank-math")
                  : t.__(
                      "At least one paragraph is long. Consider using short paragraphs.",
                      "rank-math"
                    );
              },
            },
          ]),
          t
        );
      })(),
      ce = "https://s.rankmath.com/tockb",
      de = "https://rankmath.com/kb/how-to-use-content-ai/";
    function fe(e) {
      return (fe =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function pe(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function he(e, t) {
      return (he =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function ye(e) {
      return (ye = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ge(e) {
      return e.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    var me = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && he(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = ye(e);
          if (t) {
            var r = ye(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== fe(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && pe(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(
                  e.__(
                    "Use Table of Content to break-down your text.",
                    "rank-math"
                  )
                )
                .setTooltip(
                  e.__(
                    "Table of Contents help break down content into smaller, digestible chunks. It makes reading easier which in turn results in better rankings.",
                    "rank-math"
                  )
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n),
                r = rankMath.assessor.hasTOCPlugin;
              return (
                i
                  .setScore(this.calculateScore(r))
                  .setText(this.translateScore(i, n)),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function () {
              return rankMath.assessor.hasTOCPlugin;
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              return e ? this.getScore() : null;
            },
          },
          {
            key: "getScore",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_contentHasTOC_score",
                2
              );
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return e.hasScore()
                ? t.sprintf(
                    t.__(
                      "You seem to be using a %1$s to break-down your text.",
                      "rank-math"
                    ),
                    '<a href="' +
                      ce +
                      '" target="_blank">Table of Contents plugin</a>'
                  )
                : t.sprintf(
                    t.__("You don't seem to be using a %1$s.", "rank-math"),
                    '<a href="' +
                      ce +
                      '" target="_blank">Table of Contents plugin</a>'
                  );
            },
          },
        ]),
        t
      );
    })();
    function be(e) {
      return (be =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ve(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function De(e, t) {
      return (De =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function we(e) {
      return (we = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var ke = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && De(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = we(e);
          if (t) {
            var r = we(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== be(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && ve(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(
                  e.__(
                    "Keyword Density is 0. Aim for around 1% Keyword Density.",
                    "rank-math"
                  )
                )
                .setTooltip(
                  e.__(
                    "There is no ideal keyword density percentage, but it should not be too high. The most important thing is to keep the copy natural.",
                    "rank-math"
                  )
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n),
                r = t.getResearch("wordCount")(e.getTextLower()),
                o = e.get("keywords");
              if (!1 === r || 0 === r || Object(s.isEmpty)(o)) return i;
              var u = RegExp(Object(s.map)(o, ge).join("|"), "gi"),
                a = (V(e.getText()).match(u) || []).length,
                l = Object(z.applyFilters)(
                  "rankMath_analysis_keywordDensity",
                  ((a / r) * 100).toFixed(2),
                  a
                ),
                c = this.calculateScore(l);
              return (
                i
                  .setScore(c.score)
                  .setText(n.sprintf(this.translateScore(c.type, n), l, a)),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return e.hasText();
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return t.__(
                "low" === e
                  ? "Keyword Density is %1$s which is low, the Focus Keyword and combination appears %2$s times."
                  : "high" === e
                  ? "Keyword Density is %1$s which is high, the Focus Keyword and combination appears %2$s times."
                  : "Keyword Density is %1$s, the Focus Keyword and combination appears %2$s times.",
                "rank-math"
              );
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              var t = this.getBoundaries();
              return e < 0.5
                ? { type: "low", score: t.fail }
                : 2.5 < e
                ? { type: "high", score: t.fail }
                : Object(s.inRange)(e, 0.5, 0.75)
                ? { type: "fair", score: t.fair }
                : Object(s.inRange)(e, 0.76, 1)
                ? { type: "good", score: t.good }
                : { type: "best", score: t.best };
            },
          },
          {
            key: "getScore",
            value: function () {
              return this.getBoundaries().best;
            },
          },
          {
            key: "getBoundaries",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_keywordDensity_score",
                { fail: 0, fair: 2, good: 3, best: 6 }
              );
            },
          },
        ]),
        t
      );
    })();
    function Fe(e) {
      return (Fe =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Ee(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function Ce(e, t) {
      return (Ce =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function Ae(e) {
      return (Ae = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var xe = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Ce(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = Ae(e);
          if (t) {
            var r = Ae(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== Fe(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && Ee(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(
                  e.__(
                    "Use Focus Keyword at the beginning of your content.",
                    "rank-math"
                  )
                )
                .setTooltip(
                  e.__(
                    "The first 10% of the content should contain the Focus Keyword preferably at the beginning.",
                    "rank-math"
                  )
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n),
                r = t.getResearch("getWords"),
                o = r(e.getTextLower());
              if (!1 === o) return i;
              400 < o.length && (o = o.slice(0, Math.floor(0.1 * o.length))),
                (o = o.join(" "));
              var u = r(e.getLower("keyword")).join(" "),
                a = Object(s.includes)(o, u);
              return (
                i
                  .setScore(this.calculateScore(a))
                  .setText(this.translateScore(i, n)),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return e.hasKeyword() && e.hasText();
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              return e ? this.getScore() : null;
            },
          },
          {
            key: "getScore",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_keywordIn10Percent_score",
                3
              );
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return e.hasScore()
                ? t.__(
                    "Focus Keyword appears in the first 10% of the content.",
                    "rank-math"
                  )
                : t.__(
                    "Focus Keyword doesn't appear at the beginning of your content.",
                    "rank-math"
                  );
            },
          },
        ]),
        t
      );
    })();
    function Se(e) {
      return (Se =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function je(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function _e(e, t) {
      return (_e =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function Be(e) {
      return (Be = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var Oe = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && _e(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = Be(e);
          if (t) {
            var r = Be(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== Se(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && je(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(
                  e.__("Use Focus Keyword in the content.", "rank-math")
                )
                .setTooltip(
                  e.__(
                    "It is recommended to make the focus keyword appear in the post content too.",
                    "rank-math"
                  )
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n),
                r = V(e.getTextLower()),
                o = Object(s.includes)(r, e.getLower("keyword"));
              return (
                i
                  .setScore(this.calculateScore(o))
                  .setText(this.translateScore(i, n)),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return e.hasKeyword() && e.hasText();
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              return e ? this.getScore() : null;
            },
          },
          {
            key: "getScore",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_keywordInContent_score",
                3
              );
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return e.hasScore()
                ? t.__("Focus Keyword found in the content.", "rank-math")
                : t.__(
                    "Focus Keyword doesn't appear in the content.",
                    "rank-math"
                  );
            },
          },
        ]),
        t
      );
    })();
    function Re(e) {
      return (Re =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ze(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function Pe(e, t) {
      return (Pe =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function Te(e) {
      return (Te = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var qe = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Pe(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = Te(e);
          if (t) {
            var r = Te(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== Re(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && ze(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(
                  e.__(
                    "Add an image with your Focus Keyword as alt text.",
                    "rank-math"
                  )
                )
                .setTooltip(
                  e.__(
                    "It is recommended to add the focus keyword in the alt attribute of one or more images.",
                    "rank-math"
                  )
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n),
                r = e.getLower("thumbnailAlt"),
                o = e.getLower("keyword");
              if (o === r)
                return (
                  i
                    .setScore(this.calculateScore(!0))
                    .setText(this.translateScore(i, n)),
                  i
                );
              var u = (o = Object(s.uniq)(o.split(" ")).join(" "))
                  .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                  .replace(/ /g, ".*"),
                a = RegExp(
                  "<img[^>]*alt=['\"][^'\"]*" + u + "[^'\"]*['\"]",
                  "gi"
                );
              return (
                null !== e.getTextLower().match(a) ||
                Object(s.includes)(e.getLower("thumbnailAlt"), o)
                  ? i
                      .setScore(this.calculateScore(!0))
                      .setText(this.translateScore(i, n))
                  : ((a = /\[gallery( [^\]]+?)?\]/gi),
                    null !== e.getTextLower().match(a) &&
                      i
                        .setScore(this.calculateScore(!0))
                        .setText(
                          n.__(
                            "We detected a gallery in your content & assuming that you added Focus Keyword in alt in at least one of the gallery images.",
                            "rank-math"
                          )
                        )),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return e.hasKeyword() && (e.hasText() || e.hasThumbnailAltText());
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              return e ? this.getScore() : null;
            },
          },
          {
            key: "getScore",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_keywordInImageAlt_score",
                2
              );
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return e.hasScore()
                ? t.__(
                    "Focus Keyword found in image alt attribute(s).",
                    "rank-math"
                  )
                : t.__(
                    "Focus Keyword not found in image alt attribute(s).",
                    "rank-math"
                  );
            },
          },
        ]),
        t
      );
    })();
    function Me(e) {
      return (Me =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Le(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function $e(e, t) {
      return ($e =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function Ne(e) {
      return (Ne = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var Ie = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && $e(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = Ne(e);
          if (t) {
            var r = Ne(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== Me(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && Le(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(
                  e.__(
                    "Add Focus Keyword to your SEO Meta Description.",
                    "rank-math"
                  )
                )
                .setTooltip(
                  e.__(
                    "Make sure the focus keyword appears in the SEO description too.",
                    "rank-math"
                  )
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n),
                r = Object(s.includes)(
                  e.getLower("description"),
                  e.getLower("keyword")
                );
              return (
                i
                  .setScore(this.calculateScore(r))
                  .setText(this.translateScore(i, n)),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return e.hasKeyword() && e.hasDescription();
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              return e ? this.getScore() : null;
            },
          },
          {
            key: "getScore",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_keywordInMetaDescription_score",
                2
              );
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return e.hasScore()
                ? t.__(
                    "Focus Keyword used inside SEO Meta Description.",
                    "rank-math"
                  )
                : t.__(
                    "Focus Keyword not found in your SEO Meta Description.",
                    "rank-math"
                  );
            },
          },
        ]),
        t
      );
    })();
    function We(e) {
      return (We =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Ue(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function Ke(e, t) {
      return (Ke =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function He(e) {
      return (He = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var Ye = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Ke(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = He(e);
          if (t) {
            var r = He(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== We(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && Ue(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(e.__("Use Focus Keyword in the URL.", "rank-math"))
                .setTooltip(
                  e.__(
                    "Include the focus keyword in the slug (permalink) of this post.",
                    "rank-math"
                  )
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n),
                r = e.getUrl().replace(/[-_]/gi, "-"),
                o =
                  Object(s.includes)(r, e.getKeywordPermalink(t)) ||
                  Object(s.includes)(r, e.getPermalinkWithStopwords(t));
              return (
                i
                  .setScore(this.calculateScore(o))
                  .setText(this.translateScore(i, n)),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return e.hasKeyword() && e.hasPermalink();
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              return e ? this.getScore() : null;
            },
          },
          {
            key: "getScore",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_keywordInPermalink_score",
                5
              );
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return e.hasScore()
                ? t.__("Focus Keyword used in the URL.", "rank-math")
                : t.__("Focus Keyword not found in the URL.", "rank-math");
            },
          },
        ]),
        t
      );
    })();
    function Ve(e) {
      return (Ve =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Ge(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function Je(e, t) {
      return (Je =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function Ze(e) {
      return (Ze = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var Qe = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Je(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = Ze(e);
          if (t) {
            var r = Ze(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== Ve(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && Ge(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(
                  e.__(
                    "Use Focus Keyword in subheading(s) like H2, H3, H4, etc..",
                    "rank-math"
                  )
                )
                .setTooltip(
                  e.__(
                    "It is recommended to add the focus keyword as part of one or more subheadings in the content.",
                    "rank-math"
                  )
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n),
                r = RegExp(
                  "<h[2-6][^>]*>.*" + ge(e.getLower("keyword")) + ".*</h[2-6]>",
                  "gi"
                ),
                s = null !== e.getTextLower().match(r);
              return (
                i
                  .setScore(this.calculateScore(s))
                  .setText(this.translateScore(i, n)),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return e.hasKeyword() && e.hasText();
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              return e ? this.getScore() : null;
            },
          },
          {
            key: "getScore",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_keywordInSubheadings_score",
                3
              );
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return e.hasScore()
                ? t.__("Focus Keyword found in the subheading(s).", "rank-math")
                : t.__(
                    "Focus Keyword not found in subheading(s) like H2, H3, H4, etc..",
                    "rank-math"
                  );
            },
          },
        ]),
        t
      );
    })();
    function Xe(e) {
      return (Xe =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function et(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function tt(e, t) {
      return (tt =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function nt(e) {
      return (nt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var it = (function () {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && tt(e, t);
        })(t, r);
        var e = (function (e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              i = nt(e);
            if (t) {
              var r = nt(this).constructor;
              n = Reflect.construct(i, arguments, r);
            } else n = i.apply(this, arguments);
            return (function (e, t) {
              return !t || ("object" !== Xe(t) && "function" != typeof t)
                ? (function (e) {
                    if (void 0 !== e) return e;
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  })(e)
                : t;
            })(this, n);
          };
        })(t);
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            e.apply(this, arguments)
          );
        }
        return (
          (function (e, t, n) {
            t && et(e.prototype, t);
          })(t, [
            {
              key: "newResult",
              value: function (e, t) {
                return new m()
                  .setMaxScore(this.getScore(t.getShortLocale()))
                  .setEmpty(
                    e.__("Add Focus Keyword to the SEO title.", "rank-math")
                  )
                  .setTooltip(
                    e.__(
                      "Make sure the focus keyword appears in the SEO post title too.",
                      "rank-math"
                    )
                  );
              },
            },
            {
              key: "getResult",
              value: function (e, t, n) {
                var i = this.newResult(n, e),
                  r = Object(s.includes)(
                    e.getLower("title"),
                    e.getLower("keyword")
                  );
                return (
                  i
                    .setScore(this.calculateScore(r, e))
                    .setText(this.translateScore(i, n)),
                  i
                );
              },
            },
            {
              key: "isApplicable",
              value: function (e) {
                return e.hasKeyword() && e.hasTitle();
              },
            },
            {
              key: "calculateScore",
              value: function (e, t) {
                return e ? this.getScore(t.getShortLocale()) : null;
              },
            },
            {
              key: "getScore",
              value: function (e) {
                var t = "en" === e ? 36 : 38;
                return Object(z.applyFilters)(
                  "rankMath_analysis_keywordInTitle_score",
                  t
                );
              },
            },
            {
              key: "translateScore",
              value: function (e, t) {
                return e.hasScore()
                  ? t.__(
                      "Hurray! You're using Focus Keyword in the SEO Title.",
                      "rank-math"
                    )
                  : t.__(
                      "Focus Keyword does not appear in the SEO title.",
                      "rank-math"
                    );
              },
            },
          ]),
          t
        );
      })(),
      rt = n(15),
      st = n.n(rt);
    function ot(e) {
      return (ot =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ut(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function at(e, t) {
      return (at =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function lt(e) {
      return (lt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var ct = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && at(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = lt(e);
          if (t) {
            var r = lt(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== ot(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        var n;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
        for (var i = arguments.length, r = Array(i), s = 0; s < i; s++)
          r[s] = arguments[s];
        return (
          ((n = e.call.apply(e, [this].concat(r))).keywordsChecked = {}), n
        );
      }
      return (
        (function (e, t, n) {
          t && ut(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(
                  e.__("Set a Focus Keyword for this content.", "rank-math")
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this,
                r = this.newResult(n),
                o = e.getLower("keyword").trim();
              return (
                Object(s.isUndefined)(this.keywordsChecked[o])
                  ? ((this.keywordsChecked[o] = !0),
                    st.a
                      .ajax({
                        url: rankMath.ajaxurl,
                        type: "GET",
                        data: {
                          keyword: o,
                          action: "rank_math_is_keyword_new",
                          security: rankMath.security,
                          objectID: rankMath.objectID,
                          objectType: rankMath.objectType,
                        },
                      })
                      .done(function (e) {
                        (i.keywordsChecked[o] = e.isNew),
                          r.setText(i.translateScore(o, e.isNew, n)),
                          (r.has = e.isNew),
                          Object(z.doAction)(
                            "rankMath_analysis_keywordUsage_updated",
                            o,
                            r
                          );
                      }),
                    r.setText(
                      n.__("We are searching in database.", "rank-math")
                    ))
                  : ((r.has = this.keywordsChecked[o]),
                    r.setText(
                      this.translateScore(o, this.keywordsChecked[o], n)
                    ),
                    Object(z.doAction)(
                      "rankMath_analysis_keywordUsage_updated",
                      o,
                      r
                    )),
                r
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return e.hasKeyword();
            },
          },
          {
            key: "translateScore",
            value: function (e, t, n) {
              return t
                ? n.__(
                    "You haven't used this Focus Keyword before.",
                    "rank-math"
                  )
                : n.sprintf(
                    n.__("You have %1$s this Focus Keyword.", "rank-math"),
                    '<a target="_blank" href="' +
                      this.changeKeywordInLink(e) +
                      '">' +
                      n.__("already used", "rank-math") +
                      "</a>"
                  );
            },
          },
          {
            key: "changeKeywordInLink",
            value: function (e) {
              return rankMath.assessor.focusKeywordLink
                .replace("%focus_keyword%", e)
                .replace("%post_type%", rankMath.objectType)
                .replace("%yaxonomy%", rankMath.objectType);
            },
          },
        ]),
        t
      );
    })();
    function dt(e) {
      return (dt =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ft(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function pt(e, t) {
      return (pt =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function ht(e) {
      return (ht = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var yt = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && pt(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = ht(e);
          if (t) {
            var r = ht(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== dt(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && ft(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(this.getFilteredText("emptyContent", e))
                .setTooltip(this.getFilteredText("tooltipText", e));
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n),
                r = t.getResearch("wordCount")(e.getTextLower());
              return (
                !1 === r ||
                  0 === r ||
                  i
                    .setScore(this.calculateScore(r))
                    .setText(n.sprintf(this.translateScore(i, n), r)),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return e.hasText();
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              var t = this.getBoundaries(),
                n = 1e5,
                i = !1;
              return (
                Object(s.forEach)(t, function (t) {
                  Object(s.inRange)(e, t.boundary, n) && (i = t),
                    (n = t.boundary + 1);
                }),
                !1 !== i ? i.score : 0
              );
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return e.hasScore()
                ? this.getFilteredText("hasScore", t)
                : this.getFilteredText("failed", t);
            },
          },
          {
            key: "getScore",
            value: function () {
              return this.getBoundaries().recommended.score;
            },
          },
          {
            key: "getBoundaries",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_contentLength_boundaries",
                {
                  recommended: { boundary: 2500, score: 8 },
                  belowRecommended: { boundary: 2e3, score: 5 },
                  medium: { boundary: 1500, score: 4 },
                  belowMedium: { boundary: 1e3, score: 3 },
                  low: { boundary: 600, score: 2 },
                }
              );
            },
          },
          {
            key: "getFilteredText",
            value: function (e, t) {
              return Object(z.applyFilters)("rankMath_analysis_contentLength", {
                hasScore: t.__(
                  "Content is %1$d words long. Good job!",
                  "rank-math"
                ),
                failed: t.__(
                  "Content is %1$d words long. Consider using at least 600 words.",
                  "rank-math"
                ),
                emptyContent: t.sprintf(
                  t.__("Content should be %1$s long.", "rank-math"),
                  '<a href="https://s.rankmath.com/100contentlength" target="_blank">600-2500 words</a>'
                ),
                tooltipText: t.__(
                  "Minimum recommended content length should be 600 words.",
                  "rank-math"
                ),
              })[e];
            },
          },
        ]),
        t
      );
    })();
    function gt(e) {
      return (gt =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function mt(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function bt(e, t) {
      return (bt =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function vt(e) {
      return (vt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var Dt = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && bt(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = vt(e);
          if (t) {
            var r = vt(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== gt(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && mt(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(
                  e.__("URL unavailable. Add a short URL.", "rank-math")
                )
                .setTooltip(
                  e.__(
                    "Permalink should be at most 75 characters long.",
                    "rank-math"
                  )
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n),
                r = e.getUrl().length;
              return (
                i
                  .setScore(this.calculateScore(r))
                  .setText(n.sprintf(this.translateScore(i, n), r)),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return e.hasUrl();
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              return 75 < e ? null : this.getScore();
            },
          },
          {
            key: "getScore",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_permalinkLength_score",
                4
              );
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return e.hasScore()
                ? t.__("URL is %1$d characters long. Kudos!", "rank-math")
                : t.__(
                    "URL is %1$d characters long. Consider shortening it.",
                    "rank-math"
                  );
            },
          },
        ]),
        t
      );
    })();
    function wt(e) {
      return (wt =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function kt(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function Ft(e, t) {
      return (Ft =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function Et(e) {
      return (Et = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var Ct = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Ft(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = Et(e);
          if (t) {
            var r = Et(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== wt(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && kt(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(e.__("Link out to external resources.", "rank-math"))
                .setTooltip(
                  e.__(
                    "It helps visitors read more about a topic and prevents pogosticking.",
                    "rank-math"
                  )
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n),
                r = t.getResearch("getLinkStats")(e.getText());
              return (
                0 === r.total ||
                  i
                    .setScore(this.calculateScore(0 < r.externalTotal))
                    .setText(
                      n.sprintf(this.translateScore(i, n), r.externalTotal)
                    ),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return e.hasText();
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              return e ? this.getScore() : null;
            },
          },
          {
            key: "getScore",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_linksHasExternals_score",
                4
              );
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return e.hasScore()
                ? t.__(
                    "Great! You are linking to external resources.",
                    "rank-math"
                  )
                : t.__(
                    "No outbound links were found. Link out to external resources.",
                    "rank-math"
                  );
            },
          },
        ]),
        t
      );
    })();
    function At(e) {
      return (At =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function xt(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function St(e, t) {
      return (St =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function jt(e) {
      return (jt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var _t = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && St(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = jt(e);
          if (t) {
            var r = jt(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== At(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && xt(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(
                  e.__("Add internal links in your content.", "rank-math")
                )
                .setTooltip(
                  e.__(
                    "Internal links decrease your bounce rate and improve SEO.",
                    "rank-math"
                  )
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n),
                r = t.getResearch("getLinkStats")(e.getText());
              return (
                0 === r.total ||
                  i
                    .setScore(this.calculateScore(0 < r.internalTotal))
                    .setText(
                      n.sprintf(this.translateScore(i, n), r.internalTotal)
                    ),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return e.hasText();
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              return e ? this.getScore() : null;
            },
          },
          {
            key: "getScore",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_linksHasInternal_score",
                5
              );
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return e.hasScore()
                ? t.__(
                    "You are linking to other resources on your website which is great.",
                    "rank-math"
                  )
                : t.__(
                    "We couldn't find any internal links in your content.",
                    "rank-math"
                  );
            },
          },
        ]),
        t
      );
    })();
    function Bt(e) {
      return (Bt =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Ot(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function Rt(e, t) {
      return (Rt =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function zt(e) {
      return (zt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var Pt = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Rt(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = zt(e);
          if (t) {
            var r = zt(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== Bt(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && Ot(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(
                  e.__(
                    "Add DoFollow links pointing to external resources.",
                    "rank-math"
                  )
                )
                .setTooltip(
                  e.__(
                    "PageRank Sculpting no longer works. Your posts should have a mix of nofollow and DoFollow links.",
                    "rank-math"
                  )
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n),
                r = t.getResearch("getLinkStats")(e.getText());
              return (
                0 === r.total
                  ? i.setText(
                      n.__(
                        "Add DoFollow links pointing to external resources.",
                        "rank-math"
                      )
                    )
                  : i
                      .setScore(this.calculateScore(0 < r.externalDofollow))
                      .setText(
                        n.sprintf(this.translateScore(i, n), r.externalTotal)
                      ),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return e.hasText();
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              return e ? this.getScore() : null;
            },
          },
          {
            key: "getScore",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_linksNotAllExternals_score",
                2
              );
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return e.hasScore()
                ? t.__(
                    "At least one external link with DoFollow found in your content.",
                    "rank-math"
                  )
                : t.__(
                    "We found %1$d outbound links in your content and all of them are nofollow.",
                    "rank-math"
                  );
            },
          },
        ]),
        t
      );
    })();
    function Tt(e) {
      return (Tt =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function qt(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function Mt(e, t) {
      return (Mt =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function Lt(e) {
      return (Lt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var $t = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Mt(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = Lt(e);
          if (t) {
            var r = Lt(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== Tt(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && qt(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(
                  e.__(
                    "Add a number to your title to improve CTR.",
                    "rank-math"
                  )
                )
                .setTooltip(
                  e.__(
                    "Headlines with numbers are 36% more likely to generate clicks, according to research by Conductor.",
                    "rank-math"
                  )
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n),
                r = /\d+/.test(e.getTitle());
              return (
                i
                  .setScore(this.calculateScore(r))
                  .setText(this.translateScore(i, n)),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return e.hasTitle();
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              return e ? this.getScore() : null;
            },
          },
          {
            key: "getScore",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_titleHasNumber_score",
                1
              );
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return e.hasScore()
                ? t.__("You are using a number in your SEO title.", "rank-math")
                : t.__("Your SEO title doesn't contain a number.", "rank-math");
            },
          },
        ]),
        t
      );
    })();
    function Nt(e) {
      return (Nt =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function It(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function Wt(e, t) {
      return (Wt =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function Ut(e) {
      return (Ut = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var Kt,
      Ht = (function () {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && Wt(e, t);
        })(t, r);
        var e = (function (e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              i = Ut(e);
            if (t) {
              var r = Ut(this).constructor;
              n = Reflect.construct(i, arguments, r);
            } else n = i.apply(this, arguments);
            return (function (e, t) {
              return !t || ("object" !== Nt(t) && "function" != typeof t)
                ? (function (e) {
                    if (void 0 !== e) return e;
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  })(e)
                : t;
            })(this, n);
          };
        })(t);
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            e.apply(this, arguments)
          );
        }
        return (
          (function (e, t, n) {
            t && It(e.prototype, t);
          })(t, [
            {
              key: "newResult",
              value: function (e) {
                return this.hasPowerWords()
                  ? new m()
                      .setMaxScore(this.getScore())
                      .setEmpty(
                        e.sprintf(
                          e.__(
                            "Add %s to your title to increase CTR.",
                            "rank-math"
                          ),
                          '<a href="https://rankmath.com/blog/power-words/" target="_blank">power words</a>'
                        )
                      )
                      .setTooltip(
                        e.__(
                          "Power Words are tried-and-true words that copywriters use to attract more clicks.",
                          "rank-math"
                        )
                      )
                  : null;
              },
            },
            {
              key: "getResult",
              value: function (e, t, n) {
                var i = this.newResult(n),
                  r = e.getLower("title").split(" "),
                  o = rankMath.assessor.powerWords.filter(function (e) {
                    return 0 <= Object(s.indexOf)(r, e);
                  });
                return (
                  i
                    .setScore(this.calculateScore(0 < o.length))
                    .setText(n.sprintf(this.translateScore(i, n), o.length)),
                  i
                );
              },
            },
            {
              key: "isApplicable",
              value: function (e) {
                return this.hasPowerWords() && e.hasTitle();
              },
            },
            {
              key: "hasPowerWords",
              value: function () {
                return !Object(s.isEmpty)(rankMath.assessor.powerWords);
              },
            },
            {
              key: "calculateScore",
              value: function (e) {
                return e ? this.getScore() : null;
              },
            },
            {
              key: "getScore",
              value: function () {
                return Object(z.applyFilters)(
                  "rankMath_analysis_titleHasPowerWords_score",
                  1
                );
              },
            },
            {
              key: "translateScore",
              value: function (e, t) {
                return e.hasScore()
                  ? t.__(
                      "Your title contains %1$d power word(s). Booyah!",
                      "rank-math"
                    )
                  : t.sprintf(
                      t.__(
                        "Your title doesn't contain a %1$s. Add at least one.",
                        "rank-math"
                      ),
                      '<a href="https://rankmath.com/blog/power-words/" target="_blank">power word</a>'
                    );
              },
            },
          ]),
          t
        );
      })(),
      Yt = n(16),
      Vt = n.n(Yt);
    function Gt(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var Jt = {
      extras:
        ((Kt = {
          "a+": 5,
          abound: 2,
          abounds: 2,
          abundance: 4,
          abundant: 4,
          accessable: 3,
          accessible: 3,
          acclaim: 2,
          acclaimed: 2,
          acclamation: 2,
          accolade: 3,
          accolades: 3,
          accommodative: 2,
          accomodative: 2,
          accomplish: 5,
          accomplished: 5,
          accomplishment: 5,
          accomplishments: 5,
          accurate: 3,
          accurately: 3,
          achievable: 3,
          achievement: 3,
          achievements: 3,
          achievible: 3,
          acumen: 1,
          adaptable: 1,
          adaptive: 1,
          adequate: 1,
          adjustable: 2,
          admirable: 2,
          admirably: 2,
          admiration: 2,
          admire: 2,
          admirer: 2,
          admiring: 2,
          admiringly: 2,
          adorable: 3,
          adore: 3,
          adored: 3,
          adorer: 3,
          adoring: 3,
          adoringly: 3,
          adroit: 2,
          adroitly: 2,
          adulate: 2,
          adulation: 1,
          adulatory: 1,
          advanced: 3,
          advantage: 3,
          advantageous: 2,
          advantageously: 2,
          advantages: 2,
          adventuresome: 2,
          adventurous: 2,
          advocate: 2,
          advocated: 2,
          advocates: 2,
          affability: 2,
          affable: 2,
          affably: 2,
          affectation: 3,
          affection: 3,
          affectionate: 3,
          affinity: 3,
          affirm: 2,
          affirmation: 2,
          affirmative: 2,
          affluence: 2,
          affluent: 3,
          afford: 2,
          affordable: 2,
          affordably: 2,
          afordable: 2,
          agile: 3,
          agilely: 2,
          agility: 2,
          agreeable: 3,
          agreeableness: 3,
          agreeably: 2,
          "all-around": 2,
          alluring: 3,
          alluringly: 3,
          altruistic: 3,
          altruistically: 3,
          amaze: 4,
          amazed: 4,
          amazement: 4,
          amazes: 4,
          amazing: 4,
          amazingly: 4,
          ambitious: 4,
          ambitiously: 4,
          ameliorate: 4,
          amenable: 3,
          amenity: 3,
          amiability: 3,
          amiabily: 3,
          amiable: 3,
          amicability: 3,
          amicable: 3,
          amicably: 3,
          amity: 2,
          ample: 2,
          amply: 2,
          amuse: 2,
          amusing: 2,
          amusingly: 2,
          angel: 5,
          angelic: 5,
          apotheosis: 1,
          appeal: 4,
          appealing: 4,
          applaud: 4,
          appreciable: 4,
          appreciate: 4,
          appreciated: 4,
          appreciates: 4,
          appreciative: 4,
          appreciatively: 4,
          appropriate: 4,
          approval: 4,
          approve: 4,
          ardent: 1,
          ardently: 1,
          ardor: 1,
          articulate: 1,
          aspiration: 3,
          aspirations: 3,
          aspire: 3,
          assurance: 3,
          assurances: 3,
          assure: 3,
          assuredly: 3,
          assuring: 3,
          astonish: 4,
          astonished: 4,
          astonishing: 4,
          astonishingly: 4,
          astonishment: 4,
          astound: 4,
          astounded: 4,
          astounding: 4,
          astoundingly: 4,
          astutely: 1,
          attentive: 1,
          attraction: 1,
          attractive: 1,
          attractively: 1,
          attune: 1,
          audible: 1,
          audibly: 1,
          auspicious: 1,
          authentic: 1,
          authoritative: 1,
          autonomous: 1,
          available: 1,
          aver: 1,
          avid: 1,
          avidly: 1,
          award: 1,
          awarded: 1,
          awards: 1,
          awe: 5,
          awed: 1,
          awesome: 5,
          awesomely: 4,
          awesomeness: 4,
          awestruck: 4,
          awsome: 4,
          backbone: 3,
          balanced: 3,
          bargain: 3,
          beauteous: 3,
          beautiful: 3,
          beautifullly: 3,
          beautifully: 3,
          beautify: 3,
          beauty: 3,
          beckon: 2,
          beckoned: 1,
          beckoning: 1,
          beckons: 1,
          believable: 3,
          believeable: 3,
          beloved: 3,
          benefactor: 2,
          beneficent: 2,
          beneficial: 2,
          beneficially: 2,
          beneficiary: 2,
          benefit: 3,
          benefits: 3,
          benevolence: 1,
          benevolent: 1,
          benifits: 2,
          best: 5,
          "best-known": 5,
          "best-performing": 5,
          "best-selling": 5,
          better: 5,
          "better-known": 5,
          "better-than-expected": 4,
          beutifully: 5,
          blameless: 4,
          bless: 3,
          blessing: 3,
          bliss: 4,
          blissful: 4,
          blissfully: 4,
          blithe: 1,
          blockbuster: 5,
          bloom: 3,
          blossom: 4,
          bolster: 1,
          bonny: 1,
          bonus: 4,
          bonuses: 4,
          boom: 2,
          booming: 3,
          boost: 4,
          boundless: 4,
          bountiful: 3,
          brainiest: 3,
          brainy: 3,
          "brand-new": 5,
          brave: 3,
          bravery: 3,
          bravo: 2,
          breakthrough: 5,
          breakthroughs: 5,
          breathlessness: 5,
          breathtaking: 5,
          breathtakingly: 5,
          breeze: 4,
          bright: 4,
          brighten: 4,
          brighter: 4,
          brightest: 4,
          brilliance: 4,
          brilliances: 4,
          brilliant: 4,
          brilliantly: 4,
          brisk: 3,
          brotherly: 4,
          bullish: 1,
          buoyant: 1,
          cajole: 1,
          calm: 3,
          calming: 3,
          calmness: 3,
          capability: 4,
          capable: 4,
          capably: 4,
          captivate: 4,
          captivating: 4,
          carefree: 1,
          cashback: 1,
          cashbacks: 1,
          catchy: 1,
          celebrate: 4,
          celebrated: 4,
          celebration: 4,
          celebratory: 4,
          champ: 3,
          champion: 3,
          charisma: 4,
          charismatic: 4,
          charitable: 3,
          charm: 5,
          charming: 5,
          charmingly: 5,
          chaste: 1,
          cheaper: 1,
          cheapest: 1,
          cheer: 4,
          cheerful: 4,
          cheery: 4,
          cherish: 4,
          cherished: 4,
          cherub: 1,
          chic: 1,
          chivalrous: 2,
          chivalry: 2,
          civility: 2,
          civilize: 2,
          clarity: 4,
          classic: 1,
          classy: 1,
          clean: 3,
          cleaner: 3,
          cleanest: 3,
          cleanliness: 3,
          cleanly: 3,
          clear: 3,
          "clear-cut": 3,
          cleared: 3,
          clearer: 3,
          clearly: 3,
          clears: 3,
          clever: 3,
          cleverly: 2,
          cohere: 2,
          coherence: 2,
          coherent: 2,
          cohesive: 2,
          colorful: 3,
          comely: 1,
          comfort: 4,
          comfortable: 4,
          comfortably: 4,
          comforting: 4,
          comfy: 4,
          commend: 1,
          commendable: 1,
          commendably: 1,
          commitment: 3,
          commodious: 1,
          compact: 3,
          compactly: 2,
          compassion: 3,
          compassionate: 4,
          compatible: 3,
          competitive: 3,
          complement: 3,
          complementary: 3,
          complemented: 3,
          complements: 3,
          compliant: 2,
          compliment: 5,
          complimentary: 5,
          comprehensive: 5,
          conciliate: 1,
          conciliatory: 1,
          concise: 2,
          confidence: 3,
          confident: 4,
          congenial: 1,
          congratulate: 5,
          congratulation: 5,
          congratulations: 5,
          congratulatory: 5,
          conscientious: 2,
          considerate: 4,
          consistent: 4,
          consistently: 4,
          constructive: 4,
          consummate: 1,
          contentment: 1,
          continuity: 4,
          contrasty: 1,
          contribution: 2,
          convenience: 3,
          convenient: 3,
          conveniently: 3,
          convience: 3,
          convienient: 3,
          convient: 3,
          convincing: 3,
          convincingly: 3,
          cool: 5,
          coolest: 5,
          cooperative: 3,
          cooperatively: 3,
          cornerstone: 3,
          correct: 5,
          correctly: 5,
          "cost-effective": 3,
          "cost-saving": 3,
          "counter-attack": 2,
          "counter-attacks": 2,
          courage: 3,
          courageous: 3,
          courageously: 3,
          courageousness: 3,
          courteous: 3,
          courtly: 2,
          covenant: 2,
          cozy: 2,
          creative: 2,
          credence: 2,
          credible: 2,
          crisp: 1,
          crisper: 1,
          cure: 4,
          "cure-all": 1,
          cushy: 1,
          cute: 5,
          cuteness: 5,
          danke: 1,
          danken: 1,
          daring: 5,
          daringly: 5,
          darling: 5,
          dashing: 5,
          dauntless: 1,
          dawn: 1,
          dazzle: 5,
          dazzled: 5,
          dazzling: 5,
          "dead-cheap": 1,
          "dead-on": 1,
          decency: 5,
          decent: 5,
          decisive: 5,
          decisiveness: 5,
          dedicated: 5,
          defeat: 1,
          defeated: 1,
          defeating: 1,
          defeats: 1,
          defender: 1,
          deference: 1,
          deft: 1,
          deginified: 1,
          delectable: 1,
          delicacy: 4,
          delicate: 4,
          delicious: 4,
          delight: 4,
          delighted: 4,
          delightful: 4,
          delightfully: 4,
          delightfulness: 4,
          dependable: 2,
          dependably: 2,
          deservedly: 5,
          deserving: 5,
          desirable: 5,
          desiring: 5,
          desirous: 5,
          destiny: 5,
          detachable: 5,
          devout: 5,
          dexterous: 5,
          dexterously: 5,
          dextrous: 5,
          dignified: 5,
          dignify: 5,
          dignity: 5,
          diligence: 3,
          diligent: 3,
          diligently: 3,
          diplomatic: 3,
          "dirt-cheap": 3,
          distinction: 3,
          distinctive: 3,
          distinguished: 3,
          diversified: 3,
          divine: 5,
          divinely: 5,
          dominate: 5,
          dominated: 5,
          dominates: 5,
          dote: 1,
          dotingly: 1,
          doubtless: 1,
          dreamland: 1,
          dumbfounded: 1,
          dumbfounding: 1,
          "dummy-proof": 1,
          durable: 3,
          dynamic: 3,
          eager: 5,
          eagerly: 5,
          eagerness: 5,
          earnest: 5,
          earnestly: 5,
          earnestness: 5,
          ease: 4,
          eased: 4,
          eases: 4,
          easier: 4,
          easiest: 4,
          easiness: 4,
          easing: 4,
          easy: 4,
          "easy-to-use": 5,
          easygoing: 5,
          ebullience: 1,
          ebullient: 1,
          ebulliently: 1,
          ecenomical: 1,
          economical: 5,
          ecstasies: 5,
          ecstasy: 5,
          ecstatic: 5,
          ecstatically: 5,
          edify: 1,
          educated: 5,
          effective: 5,
          effectively: 5,
          effectiveness: 5,
          effectual: 5,
          efficacious: 5,
          efficient: 5,
          efficiently: 5,
          effortless: 5,
          effortlessly: 5,
          effusion: 5,
          effusive: 5,
          effusively: 5,
          effusiveness: 5,
          elan: 2,
          elate: 2,
          elated: 2,
          elatedly: 2,
          elation: 3,
          electrify: 5,
          elegance: 5,
          elegant: 5,
          elegantly: 5,
          elevate: 5,
          elite: 5,
          eloquence: 3,
          eloquent: 3,
          eloquently: 3,
          embolden: 3,
          eminence: 3,
          eminent: 3,
          empathize: 5,
          empathy: 5,
          empower: 5,
          empowerment: 5,
          enchant: 5,
          enchanted: 5,
          enchanting: 5,
          enchantingly: 5,
          encourage: 5,
          encouragement: 5,
          encouraging: 5,
          encouragingly: 5,
          endear: 3,
          endearing: 3,
          endorse: 3,
          endorsed: 3,
          endorsement: 3,
          endorses: 3,
          endorsing: 2,
          energetic: 5,
          energize: 5,
          "energy-efficient": 5,
          "energy-saving": 5,
          engaging: 2,
          engrossing: 2,
          enhance: 5,
          enhanced: 5,
          enhancement: 5,
          enhances: 5,
          enjoy: 5,
          enjoyable: 5,
          enjoyably: 5,
          enjoyed: 5,
          enjoying: 5,
          enjoyment: 5,
          enjoys: 5,
          enlighten: 5,
          enlightenment: 5,
          enliven: 1,
          ennoble: 2,
          enough: 3,
          enrapt: 2,
          enrapture: 1,
          enraptured: 1,
          enrich: 5,
          enrichment: 3,
          enterprising: 3,
          entertain: 3,
          entertaining: 5,
          entertains: 5,
          enthral: 2,
          enthrall: 1,
          enthralled: 1,
          enthuse: 1,
          enthusiasm: 4,
          enthusiast: 4,
          enthusiastic: 4,
          enthusiastically: 3,
          entice: 3,
          enticed: 4,
          enticing: 3,
          enticingly: 4,
          entranced: 3,
          entrancing: 3,
          entrust: 4,
          enviable: 3,
          enviably: 3,
          envious: 3,
          enviously: 3,
          enviousness: 1,
          envy: 1,
          equitable: 1,
          ergonomical: 5,
          "err-free": 1,
          erudite: 1,
          ethical: 4,
          eulogize: 2,
          euphoria: 3,
          euphoric: 3,
          euphorically: 3,
          evaluative: 4,
          evenly: 5,
          eventful: 4,
          everlasting: 5,
          evocative: 2,
          exalt: 1,
          exaltation: 2,
          exalted: 3,
          exaltedly: 3,
          exalting: 3,
          exaltingly: 3,
          examplar: 1,
          examplary: 1,
          excallent: 1,
          exceed: 5,
          exceeded: 5,
          exceeding: 5,
          exceedingly: 5,
          exceeds: 5,
          excel: 5,
          exceled: 5,
          excelent: 5,
          excellant: 5,
          excelled: 5,
          excellence: 5,
          excellency: 5,
          excellent: 5,
          excellently: 5,
          excels: 5,
          exceptional: 5,
          exceptionally: 5,
          excite: 5,
          excited: 5,
          excitedly: 5,
          excitedness: 5,
          excitement: 5,
          excites: 5,
          exciting: 5,
          excitingly: 5,
          exellent: 5,
          exemplar: 3,
          exemplary: 3,
          exhilarate: 3,
          exhilarating: 3,
          exhilaratingly: 3,
          exhilaration: 3,
          exonerate: 3,
          expansive: 3,
          expeditiously: 3,
          expertly: 4,
          exquisite: 1,
          exquisitely: 1,
          extol: 1,
          extoll: 1,
          extraordinarily: 5,
          extraordinary: 5,
          exuberance: 3,
          exuberant: 3,
          exuberantly: 3,
          exult: 1,
          exultant: 1,
          exultation: 1,
          exultingly: 1,
          "eye-catch": 5,
          "eye-catching": 5,
          eyecatch: 5,
          eyecatching: 5,
          fabulous: 1,
          fabulously: 4,
          facilitate: 4,
          fair: 5,
          fairly: 5,
          fairness: 5,
          faith: 4,
          faithful: 4,
          faithfully: 4,
          faithfulness: 4,
          fame: 4,
          famed: 4,
          famous: 4,
          famously: 4,
          fancier: 5,
          fancinating: 5,
          fancy: 5,
          fanfare: 3,
          fans: 3,
          fantastic: 3,
          fantastically: 3,
          fascinate: 5,
          fascinating: 5,
          fascinatingly: 5,
          fascination: 5,
          fashionable: 5,
          fashionably: 5,
          fast: 2,
          "fast-growing": 2,
          "fast-paced": 2,
          faster: 5,
          fastest: 5,
          "fastest-growing": 5,
          faultless: 3,
          fav: 4,
          fave: 4,
          favor: 4,
          favorable: 4,
          favored: 4,
          favorite: 4,
          favorited: 4,
          favour: 4,
          fearless: 5,
          fearlessly: 5,
          feasible: 3,
          feasibly: 3,
          feat: 2,
          "feature-rich": 2,
          fecilitous: 2,
          feisty: 2,
          felicitate: 2,
          felicitous: 2,
          felicity: 3,
          fertile: 3,
          fervent: 3,
          fervently: 3,
          fervid: 3,
          fervidly: 3,
          fervor: 3,
          festive: 3,
          fidelity: 1,
          fiery: 1,
          fine: 5,
          "fine-looking": 5,
          finely: 5,
          finer: 5,
          finest: 5,
          firmer: 4,
          "first-class": 4,
          "first-in-class": 4,
          "first-rate": 5,
          flashy: 5,
          flatter: 4,
          flattering: 4,
          flatteringly: 4,
          flawless: 5,
          flawlessly: 5,
          flexibility: 3,
          flexible: 3,
          flourish: 1,
          flourishing: 1,
          fluent: 2,
          flutter: 2,
          fond: 4,
          fondly: 4,
          fondness: 4,
          foolproof: 4,
          foremost: 3,
          foresight: 5,
          formidable: 4,
          fortitude: 5,
          fortuitous: 5,
          fortuitously: 3,
          fortunate: 5,
          fortunately: 5,
          fortune: 5,
          fragrant: 4,
          free: 5,
          freed: 5,
          freedom: 5,
          freedoms: 5,
          fresh: 5,
          fresher: 5,
          freshest: 5,
          friendliness: 4,
          friendly: 4,
          frolic: 3,
          frugal: 3,
          fruitful: 4,
          ftw: 4,
          fulfillment: 4,
          fun: 5,
          futurestic: 4,
          futuristic: 4,
          gaiety: 1,
          gaily: 1,
          gain: 4,
          gained: 4,
          gainful: 4,
          gainfully: 4,
          gaining: 4,
          gains: 4,
          gallant: 2,
          gallantly: 2,
          galore: 4,
          geekier: 4,
          geeky: 3,
          gem: 4,
          gems: 4,
          generosity: 4,
          generous: 5,
          generously: 5,
          genial: 1,
          genius: 4,
          gentle: 4,
          gentlest: 4,
          genuine: 5,
          gifted: 5,
          glad: 4,
          gladden: 1,
          gladly: 4,
          gladness: 4,
          glamorous: 5,
          glee: 1,
          gleeful: 1,
          gleefully: 1,
          glimmer: 1,
          glimmering: 1,
          glisten: 1,
          glistening: 1,
          glitter: 1,
          glitz: 1,
          glorify: 5,
          glorious: 5,
          gloriously: 5,
          glory: 5,
          glow: 4,
          glowing: 4,
          glowingly: 4,
          "god-given": 3,
          "god-send": 3,
          godlike: 4,
          godsend: 4,
          gold: 3,
          golden: 3,
          good: 5,
          goodly: 5,
          goodness: 4,
          goodwill: 3,
          goood: 5,
          gooood: 5,
          gorgeous: 4,
          gorgeously: 4,
          grace: 4,
          graceful: 4,
          gracefully: 4,
          gracious: 4,
          graciously: 4,
          graciousness: 4,
          grand: 5,
          grandeur: 3,
          grateful: 3,
          gratefully: 3,
          gratification: 3,
          gratified: 3,
          gratifies: 3,
          gratify: 3,
          gratifying: 3,
          gratifyingly: 3,
          gratitude: 5,
          great: 5,
          greatest: 5,
          greatness: 5,
          grin: 3,
          groundbreaking: 3,
          guarantee: 3,
          guidance: 3,
          guiltless: 3,
          gumption: 1,
          gush: 1,
          gusto: 1,
          gutsy: 1,
          hail: 1,
          halcyon: 1,
          hale: 1,
          hallmark: 1,
          hallmarks: 1,
          hallowed: 1,
          handier: 1,
          handily: 1,
          "hands-down": 4,
          handsome: 5,
          handsomely: 5,
          handy: 5,
          happier: 5,
          happily: 5,
          happiness: 5,
          happy: 5,
          "hard-working": 4,
          hardier: 4,
          hardy: 4,
          harmless: 3,
          harmonious: 1,
          harmoniously: 1,
          harmonize: 1,
          harmony: 4,
          headway: 1,
          heal: 5,
          healthful: 5,
          healthy: 4,
          hearten: 2,
          heartening: 2,
          heartfelt: 3,
          heartily: 3,
          heartwarming: 4,
          heaven: 5,
          heavenly: 5,
          helped: 4,
          helpful: 4,
          helping: 4,
          hero: 4,
          heroic: 4,
          heroically: 4,
          heroine: 2,
          heroize: 2,
          heros: 4,
          "high-quality": 5,
          "high-spirited": 3,
          hilarious: 3,
          holy: 3,
          homage: 2,
          honest: 3,
          honesty: 4,
          honor: 3,
          honorable: 3,
          honored: 3,
          honoring: 3,
          hooray: 4,
          hopeful: 4,
          hospitable: 4,
          hot: 2,
          hotcake: 2,
          hotcakes: 3,
          hottest: 4,
          hug: 3,
          humane: 4,
          humble: 3,
          humility: 4,
          humor: 3,
          humorous: 3,
          humorously: 3,
          humour: 3,
          humourous: 3,
          ideal: 4,
          idealize: 3,
          ideally: 3,
          idol: 2,
          idolize: 2,
          idolized: 2,
          idyllic: 1,
          illuminate: 5,
          illuminati: 1,
          illuminating: 4,
          illumine: 2,
          illustrious: 3,
          ilu: 1,
          imaculate: 5,
          imaginative: 5,
          immaculate: 5,
          immaculately: 5,
          immense: 3,
          impartial: 3,
          impartiality: 3,
          impartially: 3,
          impassioned: 3,
          impeccable: 3,
          impeccably: 3,
          important: 4,
          impress: 4,
          impressed: 4,
          impresses: 4,
          impressive: 4,
          impressively: 4,
          impressiveness: 4,
          improve: 4,
          improved: 3,
          improvement: 4,
          improvements: 5,
          improves: 5,
          improving: 3,
          incredible: 4,
          incredibly: 5,
          indebted: 4,
          individualized: 1,
          indulgence: 1,
          indulgent: 1,
          industrious: 1,
          inestimable: 1,
          inestimably: 1,
          inexpensive: 4,
          infallibility: 1,
          infallible: 1,
          infallibly: 1,
          influential: 1,
          ingenious: 2,
          ingeniously: 3,
          ingenuity: 3,
          ingenuous: 3,
          ingenuously: 2,
          innocuous: 3,
          innovation: 4,
          innovative: 4,
          inpressed: 2,
          insightful: 4,
          insightfully: 3,
          inspiration: 4,
          inspirational: 5,
          inspire: 5,
          inspiring: 5,
          instantly: 3,
          instructive: 3,
          instrumental: 3,
          integral: 3,
          integrated: 3,
          intelligence: 3,
          intelligent: 3,
          intelligible: 2,
          interesting: 4,
          interests: 3,
          intimacy: 2,
          intimate: 2,
          intricate: 3,
          intrigue: 2,
          intriguing: 2,
          intriguingly: 2,
          intuitive: 3,
          invaluable: 5,
          invaluablely: 5,
          inventive: 3,
          invigorate: 3,
          invigorating: 2,
          invincibility: 3,
          invincible: 5,
          inviolable: 3,
          inviolate: 3,
          invulnerable: 4,
          irreplaceable: 3,
          irreproachable: 3,
          irresistible: 3,
          irresistibly: 3,
          "issue-free": 3,
          "jaw-droping": 5,
          "jaw-dropping": 5,
          jollify: 3,
          jolly: 3,
          jovial: 2,
          joy: 4,
          joyful: 5,
          joyfully: 5,
          joyous: 4,
          joyously: 4,
          jubilant: 4,
          jubilantly: 3,
          jubilate: 3,
          jubilation: 3,
          jubiliant: 3,
          judicious: 3,
          justly: 3,
          keen: 3,
          keenly: 4,
          keenness: 4,
          "kid-friendly": 3,
          kindliness: 5,
          kindly: 5,
          kindness: 5,
          knowledgeable: 4,
          kudos: 3,
          "large-capacity": 3,
          laud: 3,
          laudable: 4,
          laudably: 4,
          lavish: 5,
          lavishly: 5,
          "law-abiding": 4,
          lawful: 4,
          lawfully: 4,
          lead: 3,
          leading: 3,
          leads: 1,
          lean: 1,
          led: 1,
          legendary: 5,
          leverage: 3,
          levity: 2,
          liberate: 4,
          liberation: 4,
          liberty: 4,
          lifesaver: 5,
          "light-hearted": 3,
          lighter: 3,
          likable: 4,
          like: 5,
          liked: 4,
          likes: 4,
          liking: 5,
          lionhearted: 4,
          lively: 5,
          logical: 4,
          "long-lasting": 5,
          lovable: 4,
          lovably: 5,
          love: 5,
          loved: 5,
          loveliness: 4,
          lovely: 5,
          lover: 4,
          loves: 4,
          loving: 5,
          "low-cost": 2,
          "low-price": 2,
          "low-priced": 2,
          "low-risk": 3,
          "lower-priced": 3,
          loyal: 4,
          loyalty: 4,
          lucid: 2,
          lucidly: 2,
          luck: 4,
          luckier: 4,
          luckiest: 4,
          luckiness: 4,
          lucky: 5,
          lucrative: 3,
          luminous: 3,
          lush: 2,
          luster: 2,
          lustrous: 3,
          luxuriant: 3,
          luxuriate: 3,
          luxurious: 3,
          luxuriously: 4,
          luxury: 5,
          lyrical: 2,
          magic: 3,
          magical: 4,
          magnanimous: 3,
          magnanimously: 3,
          magnificence: 2,
          magnificent: 3,
          magnificently: 3,
          majestic: 3,
          majesty: 3,
          manageable: 2,
          maneuverable: 2,
          marvel: 4,
          marveled: 4,
          marvelled: 4,
          marvellous: 4,
          marvelous: 4,
          marvelously: 5,
          marvelousness: 3,
          marvels: 3,
          master: 5,
          masterful: 5,
          masterfully: 5,
          masterpiece: 5,
          masterpieces: 5,
          masters: 5,
          mastery: 4,
          matchless: 4,
          mature: 3,
          maturely: 2,
          maturity: 3,
          meaningful: 4,
          memorable: 5,
          merciful: 5,
          mercifully: 5,
          mercy: 5,
          merit: 4,
          meritorious: 4,
          merrily: 3,
          merriment: 2,
          merriness: 2,
          merry: 4,
          mesmerize: 3,
          mesmerized: 3,
          mesmerizes: 3,
          mesmerizing: 3,
          mesmerizingly: 3,
          meticulous: 3,
          meticulously: 3,
          mightily: 4,
          mighty: 2,
          "mind-blowing": 5,
          miracle: 5,
          miracles: 5,
          miraculous: 5,
          miraculously: 5,
          miraculousness: 1,
          modern: 3,
          modest: 3,
          modesty: 3,
          momentous: 3,
          monumental: 3,
          monumentally: 3,
          morality: 3,
          motivated: 3,
          "multi-purpose": 3,
          navigable: 3,
          neat: 5,
          neatest: 5,
          neatly: 5,
          nice: 5,
          nicely: 5,
          nicer: 5,
          nicest: 5,
          nifty: 4,
          nimble: 4,
          noble: 4,
          nobly: 4,
          noiseless: 4,
          "non-violence": 2,
          "non-violent": 2,
          notably: 4,
          noteworthy: 4,
          nourish: 4,
          nourishing: 4,
          nourishment: 4,
          novelty: 3,
          nurturing: 3,
          oasis: 3,
          obsession: 3,
          obsessions: 3,
          obtainable: 3,
          openly: 1,
          openness: 1,
          optimal: 3,
          optimism: 3,
          optimistic: 3,
          opulent: 1,
          orderly: 4,
          originality: 4,
          outdo: 4,
          outdone: 4,
          outperform: 4,
          outperformed: 4,
          outperforming: 4,
          outperforms: 4,
          outshine: 5,
          outshone: 5,
          outsmart: 5,
          outstanding: 3,
          outstandingly: 3,
          outstrip: 4,
          outwit: 4,
          ovation: 2,
          overjoyed: 2,
          overtake: 3,
          overtaken: 3,
          overtakes: 4,
          overtaking: 4,
          overtook: 3,
          overture: 3,
          "pain-free": 4,
          painless: 4,
          painlessly: 5,
          palatial: 2,
          pamper: 3,
          pampered: 3,
          pamperedly: 3,
          pamperedness: 2,
          pampers: 2,
          panoramic: 3,
          paradise: 4,
          paramount: 2,
          pardon: 2,
          passion: 2,
          passionate: 2,
          passionately: 2,
          patience: 3,
          patient: 3,
          patiently: 2,
          patriot: 2,
          patriotic: 2,
          peace: 5,
          peaceable: 5,
          peaceful: 5,
          peacefully: 5,
          peacekeepers: 5,
          peach: 3,
          peerless: 3,
          pep: 2,
          pepped: 2,
          pepping: 2,
          peppy: 2,
          peps: 2,
          perfect: 5,
          perfection: 5,
          perfectly: 5,
          permissible: 2,
          perseverance: 2,
          persevere: 1,
          personages: 1,
          personalized: 3,
          phenomenal: 4,
          phenomenally: 4,
          picturesque: 4,
          piety: 3,
          pinnacle: 4,
          playful: 4,
          playfully: 4,
          pleasant: 4,
          pleasantly: 3,
          pleased: 4,
          pleases: 4,
          pleasing: 3,
          pleasingly: 4,
          pleasurable: 4,
          pleasurably: 3,
          pleasure: 3,
          plentiful: 4,
          pluses: 2,
          plush: 1,
          plusses: 1,
          poetic: 1,
          poeticize: 1,
          poignant: 1,
          poise: 1,
          poised: 2,
          polished: 2,
          polite: 4,
          politeness: 4,
          popular: 5,
          portable: 4,
          posh: 3,
          positive: 4,
          positively: 5,
          positives: 5,
          powerful: 5,
          powerfully: 5,
          praise: 5,
          praiseworthy: 5,
          praising: 4,
          "pre-eminent": 2,
          precious: 2,
          precise: 2,
          precisely: 2,
          preeminent: 2,
          prefer: 2,
          preferable: 2,
          preferably: 2,
          prefered: 2,
          preferes: 2,
          preferring: 2,
          prefers: 2,
          premier: 2,
          prestige: 4,
          prestigious: 2,
          prettily: 2,
          pretty: 5,
          priceless: 5,
          pride: 4,
          principled: 2,
          privilege: 2,
          privileged: 2,
          prize: 2,
          proactive: 2,
          "problem-free": 2,
          "problem-solver": 2,
          prodigious: 2,
          prodigiously: 2,
          prodigy: 2,
          productive: 2,
          productively: 2,
          proficient: 2,
          proficiently: 2,
          profound: 3,
          profoundly: 3,
          profuse: 2,
          profusion: 2,
          progress: 2,
          progressive: 2,
          prolific: 2,
          prominence: 2,
          prominent: 2,
          promise: 2,
          promised: 2,
          promises: 2,
          promising: 2,
          promoter: 2,
          prompt: 2,
          promptly: 2,
          proper: 2,
          properly: 2,
          propitious: 2,
          propitiously: 2,
          pros: 2,
          prosper: 2,
          prosperity: 3,
          prosperous: 3,
          prospros: 3,
          protect: 3,
          protection: 4,
          protective: 4,
          proud: 2,
          proven: 2,
          proves: 2,
          providence: 2,
          proving: 2,
          prowess: 2,
          prudence: 2,
          prudent: 2,
          prudently: 2,
          punctual: 2,
          pure: 5,
          purify: 5,
          purposeful: 2,
          quaint: 2,
          qualified: 2,
          qualify: 4,
          quicker: 5,
          quiet: 5,
          quieter: 2,
          radiance: 2,
          radiant: 2,
          rapid: 2,
          rapport: 2,
          rapt: 1,
          rapture: 1,
          raptureous: 1,
          raptureously: 1,
          rapturous: 1,
          rapturously: 1,
          rational: 1,
          "razor-sharp": 2,
          reachable: 1,
          readable: 2,
          readily: 2,
          ready: 5,
          reaffirm: 1,
          reaffirmation: 2,
          realistic: 2,
          realizable: 2,
          reasonable: 2,
          reasonably: 2,
          reasoned: 2,
          reassurance: 2,
          reassure: 2,
          receptive: 2,
          reclaim: 2,
          recomend: 4,
          recommend: 4,
          recommendation: 4,
          recommendations: 4,
          recommended: 5,
          reconcile: 3,
          reconciliation: 3,
          "record-setting": 4,
          recover: 4,
          recovery: 4,
          rectification: 4,
          rectify: 3,
          rectifying: 3,
          redeem: 3,
          redeeming: 3,
          redemption: 1,
          refine: 1,
          refined: 3,
          refinement: 3,
          reform: 4,
          reformed: 4,
          reforming: 3,
          reforms: 3,
          refresh: 3,
          refreshed: 3,
          refreshing: 3,
          refund: 3,
          refunded: 2,
          regal: 2,
          regally: 2,
          regard: 2,
          rejoice: 2,
          rejoicing: 3,
          rejoicingly: 3,
          rejuvenate: 3,
          rejuvenated: 3,
          rejuvenating: 3,
          relaxed: 4,
          relent: 4,
          reliable: 4,
          reliably: 4,
          relief: 4,
          relish: 4,
          remarkable: 3,
          remarkably: 3,
          remedy: 3,
          remission: 3,
          remunerate: 3,
          renaissance: 3,
          renewed: 2,
          renown: 2,
          renowned: 2,
          replaceable: 3,
          reputable: 3,
          reputation: 4,
          resilient: 4,
          resolute: 4,
          resound: 4,
          resounding: 2,
          resourceful: 2,
          resourcefulness: 3,
          respect: 3,
          respectable: 3,
          respectful: 2,
          respectfully: 2,
          respite: 2,
          resplendent: 2,
          responsibly: 2,
          responsive: 4,
          restful: 4,
          restored: 2,
          restructure: 2,
          restructured: 2,
          restructuring: 2,
          retractable: 2,
          revel: 2,
          revelation: 2,
          revere: 2,
          reverence: 2,
          reverent: 2,
          reverently: 2,
          revitalize: 2,
          revival: 2,
          revive: 4,
          revives: 2,
          revolutionary: 2,
          revolutionize: 2,
          revolutionized: 2,
          revolutionizes: 2,
          reward: 5,
          rewarding: 5,
          rewardingly: 5,
          rich: 4,
          richer: 4,
          richly: 4,
          richness: 4,
          right: 4,
          righten: 3,
          righteous: 3,
          righteously: 2,
          righteousness: 2,
          rightful: 2,
          rightfully: 2,
          rightly: 2,
          rightness: 2,
          "risk-free": 2,
          robust: 2,
          "rock-star": 4,
          "rock-stars": 4,
          rockstar: 2,
          rockstars: 2,
          romantic: 2,
          romantically: 2,
          romanticize: 2,
          roomier: 2,
          roomy: 2,
          rosy: 2,
          safe: 4,
          safely: 4,
          sagacity: 2,
          sagely: 2,
          saint: 2,
          saintliness: 2,
          saintly: 2,
          salutary: 2,
          salute: 2,
          sane: 3,
          satisfactorily: 3,
          satisfactory: 3,
          satisfied: 3,
          satisfies: 3,
          satisfy: 3,
          satisfying: 3,
          satisified: 3,
          saver: 4,
          savings: 4,
          savior: 4,
          savvy: 4,
          scenic: 4,
          seamless: 4,
          seasoned: 2,
          secure: 5,
          securely: 2,
          selective: 3,
          "self-determination": 3,
          "self-respect": 5,
          "self-satisfaction": 5,
          "self-sufficiency": 5,
          "self-sufficient": 5,
          sensation: 5,
          sensational: 4,
          sensationally: 4,
          sensations: 4,
          sensible: 4,
          sensibly: 4,
          sensitive: 2,
          serene: 2,
          serenity: 2,
          sexy: 4,
          sharp: 2,
          sharper: 2,
          sharpest: 2,
          shimmering: 2,
          shimmeringly: 2,
          shine: 2,
          shiny: 2,
          significant: 2,
          silent: 3,
          simpler: 3,
          simplest: 2,
          simplified: 2,
          simplifies: 2,
          simplify: 2,
          simplifying: 2,
          sincere: 5,
          sincerely: 2,
          sincerity: 2,
          skill: 4,
          skilled: 2,
          skillful: 2,
          skillfully: 2,
          slammin: 2,
          sleek: 2,
          slick: 2,
          smart: 3,
          smarter: 3,
          smartest: 2,
          smartly: 2,
          smile: 2,
          smiles: 2,
          smiling: 2,
          smilingly: 2,
          smitten: 2,
          smooth: 2,
          smoother: 2,
          smoothes: 2,
          smoothest: 2,
          smoothly: 2,
          snappy: 2,
          snazzy: 2,
          sociable: 2,
          soft: 4,
          softer: 4,
          solace: 2,
          solicitous: 2,
          solicitously: 2,
          solid: 2,
          solidarity: 2,
          soothe: 2,
          soothingly: 2,
          sophisticated: 2,
          soulful: 3,
          soundly: 3,
          soundness: 2,
          spacious: 2,
          sparkle: 2,
          sparkling: 2,
          spectacular: 5,
          spectacularly: 5,
          speedily: 2,
          speedy: 2,
          spellbind: 2,
          spellbinding: 2,
          spellbindingly: 2,
          spellbound: 2,
          spirited: 2,
          spiritual: 2,
          splendid: 2,
          splendidly: 2,
          splendor: 2,
          spontaneous: 2,
          sporty: 1,
          spotless: 2,
          sprightly: 1,
          stability: 2,
          stabilize: 2,
          stable: 4,
          stainless: 2,
          standout: 2,
          "state-of-the-art": 2,
          stately: 2,
          statuesque: 2,
          staunch: 2,
          staunchly: 2,
          staunchness: 2,
          steadfast: 2,
          steadfastly: 2,
          steadfastness: 2,
          steadiest: 3,
          steadiness: 3,
          steady: 5,
          stellar: 5,
          stellarly: 2,
          stimulate: 2,
          stimulates: 2,
          stimulating: 2,
          stimulative: 2,
          stirringly: 1,
          straighten: 1,
          straightforward: 3,
          streamlined: 3,
          striking: 2,
          strikingly: 2,
          striving: 2,
          strong: 4,
          stronger: 4,
          strongest: 4,
          stunned: 4,
          stunning: 5,
          stunningly: 5,
          stupendous: 1,
          stupendously: 1,
          sturdier: 1,
          sturdy: 1,
          stylish: 4,
          stylishly: 4,
          stylized: 4,
          suave: 2,
          suavely: 1,
          sublime: 2,
          subsidize: 1,
          subsidized: 1,
          subsidizes: 1,
          subsidizing: 1,
          substantive: 1,
          succeed: 3,
          succeeded: 4,
          succeeding: 3,
          succeeds: 3,
          succes: 1,
          success: 4,
          successes: 2,
          successful: 2,
          successfully: 4,
          suffice: 2,
          sufficed: 3,
          suffices: 2,
          sufficient: 3,
          sufficiently: 3,
          suitable: 4,
          sumptuous: 1,
          sumptuously: 1,
          sumptuousness: 1,
          super: 5,
          superb: 5,
          superbly: 5,
          superior: 2,
          superiority: 4,
          supple: 2,
          support: 3,
          supported: 3,
          supporter: 3,
          supporting: 3,
          supportive: 3,
          supports: 3,
          supremacy: 4,
          supreme: 4,
          supremely: 4,
          supurb: 4,
          supurbly: 3,
          surmount: 2,
          surpass: 3,
          surreal: 4,
          survival: 2,
          survivor: 2,
          sustainability: 2,
          sustainable: 2,
          swank: 1,
          swankier: 1,
          swankiest: 1,
          swanky: 1,
          sweeping: 2,
          sweet: 4,
          sweeten: 3,
          sweetheart: 5,
          sweetly: 4,
          sweetness: 5,
          swift: 3,
          swiftness: 3,
          talent: 2,
          talented: 2,
          talents: 2,
          tantalize: 1,
          tantalizing: 1,
          tantalizingly: 1,
          tempt: 1,
          tempting: 3,
          temptingly: 3,
          tenacious: 2,
          tenaciously: 2,
          tenacity: 2,
          tender: 4,
          tenderly: 4,
          terrific: 4,
          terrifically: 4,
          thank: 4,
          thankful: 4,
          thinner: 3,
          thoughtful: 2,
          thoughtfully: 2,
          thoughtfulness: 2,
          thrift: 2,
          thrifty: 2,
          thrill: 2,
          thrilled: 2,
          thrilling: 2,
          thrillingly: 2,
          thrills: 2,
          thrive: 2,
          thriving: 2,
          "thumb-up": 2,
          "thumbs-up": 2,
          tickle: 2,
          tidy: 2,
          "time-honored": 1,
          timely: 2,
          tingle: 2,
          titillate: 1,
          titillating: 1,
          titillatingly: 1,
          togetherness: 2,
          tolerable: 3,
          "toll-free": 1,
          top: 4,
          "top-notch": 5,
          "top-quality": 5,
          topnotch: 5,
          tops: 5,
          tough: 2,
          tougher: 3,
          toughest: 4,
          traction: 1,
          tranquil: 1,
          tranquility: 1,
          transparent: 2,
          treasure: 4,
          tremendously: 5,
          trendy: 5,
          triumph: 5,
          triumphal: 5,
          triumphant: 1,
          triumphantly: 1,
          trivially: 1,
          trophy: 1,
          "trouble-free": 2,
          trump: 5,
          trumpet: 1,
          trust: 5,
          trusted: 2,
          trusting: 3,
          trustingly: 2,
          trustworthiness: 2,
          trustworthy: 2,
          trusty: 4,
          truthful: 2,
          truthfully: 2,
          truthfulness: 2,
          twinkly: 2,
          "ultra-crisp": 5,
          unabashed: 2,
          unabashedly: 2,
          unaffected: 1,
          unassailable: 2,
          unbeatable: 2,
          unbiased: 2,
          unbound: 2,
          uncomplicated: 3,
          unconditional: 2,
          undamaged: 3,
          undaunted: 2,
          understandable: 2,
          undisputable: 2,
          undisputably: 2,
          undisputed: 3,
          unencumbered: 1,
          unequivocal: 1,
          unequivocally: 1,
          unfazed: 2,
          unfettered: 1,
          unforgettable: 3,
          unity: 2,
          unlimited: 3,
          unmatched: 2,
          unparalleled: 1,
          unquestionable: 1,
          unquestionably: 1,
          unreal: 3,
          unrestricted: 2,
          unrivaled: 2,
          unselfish: 2,
          unwavering: 3,
          upbeat: 2,
          upgradable: 2,
          upgradeable: 2,
          upgraded: 2,
          upheld: 2,
          uphold: 2,
          uplift: 2,
          uplifting: 2,
          upliftingly: 2,
          upliftment: 2,
          upscale: 2,
          usable: 4,
          useable: 2,
          useful: 5,
          "user-friendly": 2,
          "user-replaceable": 2,
          valiant: 1,
          valiantly: 2,
          valor: 2,
          valuable: 5,
          variety: 2,
          venerate: 2,
          verifiable: 1,
          veritable: 1,
          versatile: 2,
          versatility: 1,
          vibrant: 4,
          vibrantly: 4,
          victorious: 5,
          victory: 5,
          viewable: 2,
          vigilance: 2,
          vigilant: 3,
          virtue: 2,
          virtuous: 2,
          virtuously: 2,
          visionary: 2,
          vivacious: 2,
          vivid: 2,
          vouch: 3,
          vouchsafe: 2,
          warm: 4,
          warmer: 2,
          warmhearted: 2,
          warmly: 4,
          warmth: 5,
          wealthy: 5,
          welcome: 2,
          well: 5,
          "well-backlit": 2,
          "well-balanced": 2,
          "well-behaved": 5,
          "well-being": 2,
          "well-bred": 2,
          "well-connected": 2,
          "well-educated": 2,
          "well-established": 1,
          "well-informed": 1,
          "well-intentioned": 2,
          "well-known": 3,
          "well-made": 5,
          "well-managed": 2,
          "well-mannered": 2,
          "well-positioned": 2,
          "well-received": 2,
          "well-regarded": 2,
          "well-rounded": 2,
          "well-run": 2,
          "well-wishers": 2,
          wellbeing: 2,
          whoa: 2,
          wholeheartedly: 2,
          wholesome: 2,
          whooa: 2,
          whoooa: 2,
          wieldy: 1,
          willing: 2,
          willingly: 2,
          willingness: 3,
          win: 5,
          windfall: 2,
          winnable: 2,
          winner: 2,
          winners: 2,
          winning: 2,
          wins: 2,
          wisdom: 2,
          wise: 2,
          wisely: 2,
          witty: 4,
          won: 5,
          wonder: 2,
          wonderful: 2,
          wonderfully: 2,
          wonderous: 2,
          wonderously: 2,
          wonders: 2,
          wondrous: 2,
          woo: 3,
          work: 2,
          workable: 2,
          worked: 3,
          works: 4,
          "world-famous": 2,
          worth: 2,
          "worth-while": 2,
          worthiness: 2,
          worthwhile: 2,
          worthy: 4,
          wow: 5,
          wowed: 2,
          wowing: 2,
          wows: 2,
          yay: 4,
          youthful: 5,
          zeal: 2,
          zenith: 2,
          zest: 4,
          zippy: 2,
          "2-faced": -1,
          "2-faces": -1,
          abnormal: -5,
          abolish: -4,
          abominable: -3,
          abominably: -3,
          abominate: -2,
          abomination: -3,
          abort: -2,
          aborted: -3,
          aborts: -3,
          abrade: -2,
          abrasive: -4,
          abrupt: -2,
          abruptly: -2,
          abscond: -4,
        }),
        Gt(Kt, "aborted", -5),
        Gt(Kt, "absence", -5),
        Gt(Kt, "absent-minded", -5),
        Gt(Kt, "absentee", -5),
        Gt(Kt, "absurd", -4),
        Gt(Kt, "absurdity", -3),
        Gt(Kt, "absurdly", -3),
        Gt(Kt, "absurdness", -3),
        Gt(Kt, "abuse", -4),
        Gt(Kt, "abused", -4),
        Gt(Kt, "abuses", -4),
        Gt(Kt, "abusive", -3),
        Gt(Kt, "abysmal", -2),
        Gt(Kt, "abysmally", -1),
        Gt(Kt, "abyss", -1),
        Gt(Kt, "accidental", -3),
        Gt(Kt, "accost", -1),
        Gt(Kt, "accursed", -1),
        Gt(Kt, "accusation", -5),
        Gt(Kt, "accusations", -1),
        Gt(Kt, "accuse", -3),
        Gt(Kt, "accuses", -3),
        Gt(Kt, "accusing", -2),
        Gt(Kt, "accusingly", -4),
        Gt(Kt, "acerbate", -1),
        Gt(Kt, "acerbic", -1),
        Gt(Kt, "acerbically", -1),
        Gt(Kt, "ache", -5),
        Gt(Kt, "ached", -1),
        Gt(Kt, "aches", -2),
        Gt(Kt, "achey", -1),
        Gt(Kt, "aching", -5),
        Gt(Kt, "acrid", -1),
        Gt(Kt, "acridly", -1),
        Gt(Kt, "acridness", -1),
        Gt(Kt, "acrimonious", -1),
        Gt(Kt, "acrimoniously", -1),
        Gt(Kt, "acrimony", -1),
        Gt(Kt, "adamant", -4),
        Gt(Kt, "adamantly", -4),
        Gt(Kt, "addict", -5),
        Gt(Kt, "addicted", -2),
        Gt(Kt, "addicting", -2),
        Gt(Kt, "addicts", -3),
        Gt(Kt, "admonish", -4),
        Gt(Kt, "admonisher", -2),
        Gt(Kt, "admonishingly", -3),
        Gt(Kt, "admonishment", -4),
        Gt(Kt, "admonition", -3),
        Gt(Kt, "adulterate", -1),
        Gt(Kt, "adulterated", -3),
        Gt(Kt, "adulteration", -5),
        Gt(Kt, "adulterier", -2),
        Gt(Kt, "adversarial", -1),
        Gt(Kt, "adversary", -1),
        Gt(Kt, "adverse", -4),
        Gt(Kt, "adversity", -5),
        Gt(Kt, "afflict", -1),
        Gt(Kt, "affliction", -1),
        Gt(Kt, "afflictive", -1),
        Gt(Kt, "affront", -1),
        Gt(Kt, "afraid", -5),
        Gt(Kt, "aggravate", -4),
        Gt(Kt, "aggravating", -4),
        Gt(Kt, "aggravation", -5),
        Gt(Kt, "aggression", -5),
        Gt(Kt, "aggressive", -5),
        Gt(Kt, "aggressiveness", -4),
        Gt(Kt, "aggressor", -4),
        Gt(Kt, "aggrieve", -3),
        Gt(Kt, "aggrieved", -4),
        Gt(Kt, "aggrivation", -5),
        Gt(Kt, "aghast", -2),
        Gt(Kt, "agonies", -4),
        Gt(Kt, "agonize", -5),
        Gt(Kt, "agonizing", -5),
        Gt(Kt, "agonizingly", -4),
        Gt(Kt, "agony", -5),
        Gt(Kt, "aground", -2),
        Gt(Kt, "ail", -1),
        Gt(Kt, "ailing", -1),
        Gt(Kt, "ailment", -2),
        Gt(Kt, "aimless", -2),
        Gt(Kt, "alarm", -1),
        Gt(Kt, "alarmed", -1),
        Gt(Kt, "alarming", -1),
        Gt(Kt, "alarmingly", -1),
        Gt(Kt, "alienate", -2),
        Gt(Kt, "alienated", -1),
        Gt(Kt, "alienation", -1),
        Gt(Kt, "allegation", -2),
        Gt(Kt, "allegations", -3),
        Gt(Kt, "allege", -1),
        Gt(Kt, "allergic", -1),
        Gt(Kt, "allergies", -1),
        Gt(Kt, "allergy", -1),
        Gt(Kt, "aloof", -1),
        Gt(Kt, "altercation", -1),
        Gt(Kt, "ambiguity", -2),
        Gt(Kt, "ambiguous", -2),
        Gt(Kt, "ambivalence", -1),
        Gt(Kt, "ambivalent", -1),
        Gt(Kt, "ambush", -1),
        Gt(Kt, "amiss", -1),
        Gt(Kt, "amputate", -3),
        Gt(Kt, "anarchism", -1),
        Gt(Kt, "anarchist", -4),
        Gt(Kt, "anarchistic", -1),
        Gt(Kt, "anarchy", -1),
        Gt(Kt, "anemic", -1),
        Gt(Kt, "anger", -4),
        Gt(Kt, "angrily", -5),
        Gt(Kt, "angriness", -5),
        Gt(Kt, "angry", -5),
        Gt(Kt, "anguish", -3),
        Gt(Kt, "animosity", -1),
        Gt(Kt, "annihilate", -1),
        Gt(Kt, "annihilation", -1),
        Gt(Kt, "annoy", -3),
        Gt(Kt, "annoyance", -4),
        Gt(Kt, "annoyances", -4),
        Gt(Kt, "annoyed", -2),
        Gt(Kt, "annoying", -2),
        Gt(Kt, "annoyingly", -3),
        Gt(Kt, "annoys", -1),
        Gt(Kt, "anomalous", -1),
        Gt(Kt, "anomaly", -3),
        Gt(Kt, "antagonism", -1),
        Gt(Kt, "antagonist", -1),
        Gt(Kt, "antagonistic", -1),
        Gt(Kt, "antagonize", -1),
        Gt(Kt, "anti-", -1),
        Gt(Kt, "anti-american", -1),
        Gt(Kt, "anti-israeli", -1),
        Gt(Kt, "anti-occupation", -1),
        Gt(Kt, "anti-proliferation", -1),
        Gt(Kt, "anti-semites", -1),
        Gt(Kt, "anti-social", -1),
        Gt(Kt, "anti-us", -1),
        Gt(Kt, "anti-white", -1),
        Gt(Kt, "antipathy", -1),
        Gt(Kt, "antiquated", -1),
        Gt(Kt, "antithetical", -1),
        Gt(Kt, "anxieties", -1),
        Gt(Kt, "anxiety", -2),
        Gt(Kt, "anxious", -3),
        Gt(Kt, "anxiously", -3),
        Gt(Kt, "anxiousness", -1),
        Gt(Kt, "apathetic", -4),
        Gt(Kt, "apathetically", -1),
        Gt(Kt, "apathy", -5),
        Gt(Kt, "apocalypse", -5),
        Gt(Kt, "apocalyptic", -4),
        Gt(Kt, "apologist", -3),
        Gt(Kt, "apologists", -2),
        Gt(Kt, "appal", -1),
        Gt(Kt, "appall", -1),
        Gt(Kt, "appalled", -1),
        Gt(Kt, "appalling", -1),
        Gt(Kt, "appallingly", -1),
        Gt(Kt, "apprehension", -1),
        Gt(Kt, "apprehensions", -1),
        Gt(Kt, "apprehensive", -1),
        Gt(Kt, "apprehensively", -1),
        Gt(Kt, "arbitrary", -1),
        Gt(Kt, "arcane", -1),
        Gt(Kt, "archaic", -1),
        Gt(Kt, "arduous", -1),
        Gt(Kt, "arduously", -1),
        Gt(Kt, "argumentative", -1),
        Gt(Kt, "arrogance", -3),
        Gt(Kt, "arrogant", -4),
        Gt(Kt, "arrogantly", -5),
        Gt(Kt, "ashamed", -4),
        Gt(Kt, "asinine", -1),
        Gt(Kt, "asininely", -1),
        Gt(Kt, "asinininity", -1),
        Gt(Kt, "askance", -1),
        Gt(Kt, "asperse", -1),
        Gt(Kt, "aspersion", -1),
        Gt(Kt, "aspersions", -1),
        Gt(Kt, "assail", -1),
        Gt(Kt, "assassin", -2),
        Gt(Kt, "assassinate", -2),
        Gt(Kt, "assault", -1),
        Gt(Kt, "assult", -1),
        Gt(Kt, "astray", -1),
        Gt(Kt, "asunder", -1),
        Gt(Kt, "atrocious", -1),
        Gt(Kt, "atrocities", -1),
        Gt(Kt, "atrocity", -1),
        Gt(Kt, "atrophy", -1),
        Gt(Kt, "attack", -3),
        Gt(Kt, "attacks", -3),
        Gt(Kt, "audacious", -3),
        Gt(Kt, "audaciously", -2),
        Gt(Kt, "audaciousness", -2),
        Gt(Kt, "audacity", -2),
        Gt(Kt, "audiciously", -1),
        Gt(Kt, "austere", -1),
        Gt(Kt, "authoritarian", -1),
        Gt(Kt, "autocrat", -1),
        Gt(Kt, "autocratic", -1),
        Gt(Kt, "avalanche", -2),
        Gt(Kt, "avarice", -1),
        Gt(Kt, "avaricious", -1),
        Gt(Kt, "avariciously", -1),
        Gt(Kt, "avenge", -4),
        Gt(Kt, "averse", -1),
        Gt(Kt, "aversion", -1),
        Gt(Kt, "aweful", -4),
        Gt(Kt, "awful", -5),
        Gt(Kt, "awfully", -1),
        Gt(Kt, "awfulness", -1),
        Gt(Kt, "awkward", -3),
        Gt(Kt, "awkwardness", -2),
        Gt(Kt, "ax", -1),
        Gt(Kt, "babble", -1),
        Gt(Kt, "back-logged", -1),
        Gt(Kt, "back-wood", -1),
        Gt(Kt, "back-woods", -1),
        Gt(Kt, "backache", -1),
        Gt(Kt, "backaches", -1),
        Gt(Kt, "backaching", -1),
        Gt(Kt, "backbite", -1),
        Gt(Kt, "backbiting", -1),
        Gt(Kt, "backward", -1),
        Gt(Kt, "backwardness", -1),
        Gt(Kt, "backwood", -1),
        Gt(Kt, "backwoods", -1),
        Gt(Kt, "bad", -4),
        Gt(Kt, "badly", -2),
        Gt(Kt, "baffle", -5),
        Gt(Kt, "baffled", -4),
        Gt(Kt, "bafflement", -1),
        Gt(Kt, "baffling", -1),
        Gt(Kt, "bait", -1),
        Gt(Kt, "balk", -1),
        Gt(Kt, "banal", -1),
        Gt(Kt, "banalize", -1),
        Gt(Kt, "bane", -1),
        Gt(Kt, "banish", -5),
        Gt(Kt, "banishment", -4),
        Gt(Kt, "bankrupt", -2),
        Gt(Kt, "barbarian", -5),
        Gt(Kt, "barbaric", -4),
        Gt(Kt, "barbarically", -3),
        Gt(Kt, "barbarity", -2),
        Gt(Kt, "barbarous", -3),
        Gt(Kt, "barbarously", -1),
        Gt(Kt, "barren", -3),
        Gt(Kt, "baseless", -2),
        Gt(Kt, "bash", -1),
        Gt(Kt, "bashed", -1),
        Gt(Kt, "bashful", -1),
        Gt(Kt, "bashing", -1),
        Gt(Kt, "bastard", -2),
        Gt(Kt, "bastards", -2),
        Gt(Kt, "battered", -1),
        Gt(Kt, "battering", -1),
        Gt(Kt, "batty", -1),
        Gt(Kt, "bearish", -1),
        Gt(Kt, "beastly", -1),
        Gt(Kt, "bedlam", -1),
        Gt(Kt, "bedlamite", -1),
        Gt(Kt, "befoul", -1),
        Gt(Kt, "beg", -1),
        Gt(Kt, "beggar", -1),
        Gt(Kt, "beggarly", -1),
        Gt(Kt, "begging", -1),
        Gt(Kt, "beguile", -1),
        Gt(Kt, "belabor", -1),
        Gt(Kt, "belated", -1),
        Gt(Kt, "beleaguer", -1),
        Gt(Kt, "belie", -2),
        Gt(Kt, "belittle", -2),
        Gt(Kt, "belittled", -2),
        Gt(Kt, "belittling", -2),
        Gt(Kt, "bellicose", -2),
        Gt(Kt, "belligerence", -2),
        Gt(Kt, "belligerent", -2),
        Gt(Kt, "belligerently", -2),
        Gt(Kt, "bemoan", -2),
        Gt(Kt, "bemoaning", -2),
        Gt(Kt, "bemused", -2),
        Gt(Kt, "bent", -2),
        Gt(Kt, "berate", -2),
        Gt(Kt, "bereave", -2),
        Gt(Kt, "bereavement", -2),
        Gt(Kt, "bereft", -2),
        Gt(Kt, "berserk", -2),
        Gt(Kt, "beseech", -1),
        Gt(Kt, "beset", -1),
        Gt(Kt, "besiege", -1),
        Gt(Kt, "besmirch", -1),
        Gt(Kt, "bestial", -1),
        Gt(Kt, "betray", -1),
        Gt(Kt, "betrayal", -1),
        Gt(Kt, "betrayals", -1),
        Gt(Kt, "betrayer", -1),
        Gt(Kt, "betraying", -1),
        Gt(Kt, "betrays", -1),
        Gt(Kt, "bewail", -1),
        Gt(Kt, "beware", -2),
        Gt(Kt, "bewilder", -1),
        Gt(Kt, "bewildered", -1),
        Gt(Kt, "bewildering", -1),
        Gt(Kt, "bewilderingly", -1),
        Gt(Kt, "bewilderment", -1),
        Gt(Kt, "bewitch", -1),
        Gt(Kt, "bias", -3),
        Gt(Kt, "biased", -1),
        Gt(Kt, "biases", -1),
        Gt(Kt, "bicker", -1),
        Gt(Kt, "bickering", -1),
        Gt(Kt, "bid-rigging", -1),
        Gt(Kt, "bigotries", -1),
        Gt(Kt, "bigotry", -4),
        Gt(Kt, "bitch", -5),
        Gt(Kt, "bitchy", -5),
        Gt(Kt, "biting", -5),
        Gt(Kt, "bitingly", -5),
        Gt(Kt, "bitter", -5),
        Gt(Kt, "bitterly", -5),
        Gt(Kt, "bitterness", -5),
        Gt(Kt, "bizarre", -1),
        Gt(Kt, "blab", -1),
        Gt(Kt, "blabber", -1),
        Gt(Kt, "blackmail", -1),
        Gt(Kt, "blah", -1),
        Gt(Kt, "blame", -3),
        Gt(Kt, "blameworthy", -1),
        Gt(Kt, "bland", -1),
        Gt(Kt, "blandish", -1),
        Gt(Kt, "blaspheme", -1),
        Gt(Kt, "blasphemous", -1),
        Gt(Kt, "blasphemy", -1),
        Gt(Kt, "blasted", -1),
        Gt(Kt, "blatant", -1),
        Gt(Kt, "blatantly", -1),
        Gt(Kt, "blather", -1),
        Gt(Kt, "bleak", -1),
        Gt(Kt, "bleakly", -1),
        Gt(Kt, "bleakness", -1),
        Gt(Kt, "bleed", -2),
        Gt(Kt, "bleeding", -3),
        Gt(Kt, "bleeds", -3),
        Gt(Kt, "blemish", -1),
        Gt(Kt, "blind", -2),
        Gt(Kt, "blinding", -1),
        Gt(Kt, "blindingly", -1),
        Gt(Kt, "blindside", -1),
        Gt(Kt, "blister", -1),
        Gt(Kt, "blistering", -1),
        Gt(Kt, "bloated", -1),
        Gt(Kt, "blockage", -1),
        Gt(Kt, "blockhead", -1),
        Gt(Kt, "bloodshed", -1),
        Gt(Kt, "bloodthirsty", -1),
        Gt(Kt, "bloody", -1),
        Gt(Kt, "blotchy", -1),
        Gt(Kt, "blow", -3),
        Gt(Kt, "blunder", -1),
        Gt(Kt, "blundering", -1),
        Gt(Kt, "blunders", -1),
        Gt(Kt, "blunt", -1),
        Gt(Kt, "blur", -1),
        Gt(Kt, "bluring", -1),
        Gt(Kt, "blurred", -1),
        Gt(Kt, "blurring", -1),
        Gt(Kt, "blurry", -1),
        Gt(Kt, "blurs", -1),
        Gt(Kt, "blurt", -1),
        Gt(Kt, "boastful", -1),
        Gt(Kt, "boggle", -3),
        Gt(Kt, "bogus", -2),
        Gt(Kt, "boil", -2),
        Gt(Kt, "boiling", -3),
        Gt(Kt, "boisterous", -2),
        Gt(Kt, "bomb", -4),
        Gt(Kt, "bombard", -2),
        Gt(Kt, "bombardment", -1),
        Gt(Kt, "bombastic", -1),
        Gt(Kt, "bondage", -1),
        Gt(Kt, "bonkers", -4),
        Gt(Kt, "bore", -1),
        Gt(Kt, "bored", -1),
        Gt(Kt, "boredom", -2),
        Gt(Kt, "bores", -2),
        Gt(Kt, "boring", -1),
        Gt(Kt, "botch", -1),
        Gt(Kt, "bother", -1),
        Gt(Kt, "bothered", -1),
        Gt(Kt, "bothering", -1),
        Gt(Kt, "bothers", -1),
        Gt(Kt, "bothersome", -1),
        Gt(Kt, "bowdlerize", -1),
        Gt(Kt, "boycott", -3),
        Gt(Kt, "braggart", -3),
        Gt(Kt, "bragger", -2),
        Gt(Kt, "brainless", -3),
        Gt(Kt, "brainwash", -1),
        Gt(Kt, "brash", -1),
        Gt(Kt, "brashly", -1),
        Gt(Kt, "brashness", -1),
        Gt(Kt, "brat", -1),
        Gt(Kt, "bravado", -1),
        Gt(Kt, "brazen", -1),
        Gt(Kt, "brazenly", -2),
        Gt(Kt, "brazenness", -2),
        Gt(Kt, "breach", -3),
        Gt(Kt, "break", -2),
        Gt(Kt, "break-up", -2),
        Gt(Kt, "break-ups", -1),
        Gt(Kt, "breakdown", -4),
        Gt(Kt, "breaking", -1),
        Gt(Kt, "breaks", -2),
        Gt(Kt, "breakup", -2),
        Gt(Kt, "breakups", -2),
        Gt(Kt, "bribery", -2),
        Gt(Kt, "brimstone", -2),
        Gt(Kt, "bristle", -2),
        Gt(Kt, "brittle", -3),
        Gt(Kt, "broke", -3),
        Gt(Kt, "broken", -3),
        Gt(Kt, "broken-hearted", -3),
        Gt(Kt, "brood", -3),
        Gt(Kt, "browbeat", -3),
        Gt(Kt, "bruise", -3),
        Gt(Kt, "bruised", -2),
        Gt(Kt, "bruises", -2),
        Gt(Kt, "bruising", -2),
        Gt(Kt, "brusque", -3),
        Gt(Kt, "brutal", -3),
        Gt(Kt, "brutalising", -3),
        Gt(Kt, "brutalities", -2),
        Gt(Kt, "brutality", -2),
        Gt(Kt, "brutalize", -2),
        Gt(Kt, "brutalizing", -2),
        Gt(Kt, "brutally", -2),
        Gt(Kt, "brute", -2),
        Gt(Kt, "brutish", -1),
        Gt(Kt, "bs", -3),
        Gt(Kt, "buckle", -1),
        Gt(Kt, "bug", -2),
        Gt(Kt, "bugging", -5),
        Gt(Kt, "buggy", -3),
        Gt(Kt, "bugs", -2),
        Gt(Kt, "bulkier", -2),
        Gt(Kt, "bulkiness", -1),
        Gt(Kt, "bulky", -3),
        Gt(Kt, "bulkyness", -1),
        Gt(Kt, "bull****", -3),
        Gt(Kt, "bull----", -3),
        Gt(Kt, "bullies", -2),
        Gt(Kt, "bullshit", -5),
        Gt(Kt, "bullshyt", -1),
        Gt(Kt, "bully", -2),
        Gt(Kt, "bullying", -1),
        Gt(Kt, "bullyingly", -1),
        Gt(Kt, "bum", -1),
        Gt(Kt, "bump", -1),
        Gt(Kt, "bumped", -3),
        Gt(Kt, "bumping", -1),
        Gt(Kt, "bumpping", -1),
        Gt(Kt, "bumps", -1),
        Gt(Kt, "bumpy", -1),
        Gt(Kt, "bungle", -1),
        Gt(Kt, "bungler", -1),
        Gt(Kt, "bungling", -1),
        Gt(Kt, "bunk", -1),
        Gt(Kt, "burden", -4),
        Gt(Kt, "burdensome", -1),
        Gt(Kt, "burdensomely", -1),
        Gt(Kt, "burn", -5),
        Gt(Kt, "burned", -4),
        Gt(Kt, "burning", -1),
        Gt(Kt, "burns", -1),
        Gt(Kt, "bust", -1),
        Gt(Kt, "busts", -1),
        Gt(Kt, "busybody", -1),
        Gt(Kt, "butcher", -1),
        Gt(Kt, "butchery", -1),
        Gt(Kt, "buzzing", -1),
        Gt(Kt, "byzantine", -1),
        Gt(Kt, "cackle", -1),
        Gt(Kt, "calamities", -3),
        Gt(Kt, "calamitous", -3),
        Gt(Kt, "calamitously", -3),
        Gt(Kt, "calamity", -4),
        Gt(Kt, "callous", -2),
        Gt(Kt, "calumniate", -1),
        Gt(Kt, "calumniation", -1),
        Gt(Kt, "calumnies", -1),
        Gt(Kt, "calumnious", -1),
        Gt(Kt, "calumniously", -1),
        Gt(Kt, "calumny", -1),
        Gt(Kt, "cancer", -5),
        Gt(Kt, "cancerous", -1),
        Gt(Kt, "cannibal", -1),
        Gt(Kt, "cannibalize", -5),
        Gt(Kt, "capitulate", -1),
        Gt(Kt, "capricious", -1),
        Gt(Kt, "capriciously", -1),
        Gt(Kt, "capriciousness", -1),
        Gt(Kt, "capsize", -1),
        Gt(Kt, "careless", -4),
        Gt(Kt, "carelessness", -5),
        Gt(Kt, "caricature", -1),
        Gt(Kt, "carnage", -1),
        Gt(Kt, "carp", -1),
        Gt(Kt, "cartoonish", -1),
        Gt(Kt, "cash-strapped", -1),
        Gt(Kt, "castigate", -1),
        Gt(Kt, "castrated", -1),
        Gt(Kt, "casualty", -3),
        Gt(Kt, "cataclysm", -2),
        Gt(Kt, "cataclysmal", -2),
        Gt(Kt, "cataclysmic", -2),
        Gt(Kt, "cataclysmically", -1),
        Gt(Kt, "catastrophe", -4),
        Gt(Kt, "catastrophes", -4),
        Gt(Kt, "catastrophic", -4),
        Gt(Kt, "catastrophically", -1),
        Gt(Kt, "catastrophies", -1),
        Gt(Kt, "caustic", -1),
        Gt(Kt, "caustically", -1),
        Gt(Kt, "cautionary", -3),
        Gt(Kt, "cave", -1),
        Gt(Kt, "censure", -1),
        Gt(Kt, "chafe", -1),
        Gt(Kt, "chaff", -1),
        Gt(Kt, "chagrin", -1),
        Gt(Kt, "challenging", -3),
        Gt(Kt, "chaos", -5),
        Gt(Kt, "chaotic", -1),
        Gt(Kt, "chasten", -1),
        Gt(Kt, "chastise", -1),
        Gt(Kt, "chastisement", -1),
        Gt(Kt, "chatter", -1),
        Gt(Kt, "chatterbox", -1),
        Gt(Kt, "cheap", -3),
        Gt(Kt, "cheapen", -1),
        Gt(Kt, "cheaply", -1),
        Gt(Kt, "cheat", -2),
        Gt(Kt, "cheated", -3),
        Gt(Kt, "cheater", -2),
        Gt(Kt, "cheating", -1),
        Gt(Kt, "cheats", -1),
        Gt(Kt, "checkered", -1),
        Gt(Kt, "cheerless", -1),
        Gt(Kt, "cheesy", -1),
        Gt(Kt, "chide", -1),
        Gt(Kt, "childish", -1),
        Gt(Kt, "chill", -1),
        Gt(Kt, "chilly", -1),
        Gt(Kt, "chintzy", -1),
        Gt(Kt, "choke", -1),
        Gt(Kt, "choleric", -1),
        Gt(Kt, "choppy", -1),
        Gt(Kt, "chore", -1),
        Gt(Kt, "chronic", -1),
        Gt(Kt, "chunky", -1),
        Gt(Kt, "clamor", -1),
        Gt(Kt, "clamorous", -1),
        Gt(Kt, "clash", -1),
        Gt(Kt, "cliche", -1),
        Gt(Kt, "cliched", -1),
        Gt(Kt, "clique", -1),
        Gt(Kt, "clog", -1),
        Gt(Kt, "clogged", -1),
        Gt(Kt, "clogs", -1),
        Gt(Kt, "cloud", -1),
        Gt(Kt, "clouding", -1),
        Gt(Kt, "cloudy", -1),
        Gt(Kt, "clueless", -1),
        Gt(Kt, "clumsy", -3),
        Gt(Kt, "clunky", -3),
        Gt(Kt, "coarse", -3),
        Gt(Kt, "cocky", -1),
        Gt(Kt, "coerce", -2),
        Gt(Kt, "coercion", -2),
        Gt(Kt, "coercive", -2),
        Gt(Kt, "cold", -3),
        Gt(Kt, "coldly", -1),
        Gt(Kt, "collapse", -1),
        Gt(Kt, "collude", -1),
        Gt(Kt, "collusion", -1),
        Gt(Kt, "combative", -1),
        Gt(Kt, "combust", -2),
        Gt(Kt, "comical", -2),
        Gt(Kt, "commiserate", -2),
        Gt(Kt, "commonplace", -2),
        Gt(Kt, "commotion", -3),
        Gt(Kt, "commotions", -3),
        Gt(Kt, "complacent", -3),
        Gt(Kt, "complain", -3),
        Gt(Kt, "complained", -4),
        Gt(Kt, "complaining", -4),
        Gt(Kt, "complains", -4),
        Gt(Kt, "complaint", -4),
        Gt(Kt, "complaints", -2),
        Gt(Kt, "complex", -2),
        Gt(Kt, "complicated", -4),
        Gt(Kt, "complication", -4),
        Gt(Kt, "complicit", -4),
        Gt(Kt, "compulsion", -4),
        Gt(Kt, "compulsive", -1),
        Gt(Kt, "concede", -1),
        Gt(Kt, "conceded", -1),
        Gt(Kt, "conceit", -1),
        Gt(Kt, "conceited", -1),
        Gt(Kt, "concen", -1),
        Gt(Kt, "concens", -2),
        Gt(Kt, "concern", -1),
        Gt(Kt, "concerned", -1),
        Gt(Kt, "concerns", -1),
        Gt(Kt, "concession", -1),
        Gt(Kt, "concessions", -1),
        Gt(Kt, "condemn", -1),
        Gt(Kt, "condemnable", -1),
        Gt(Kt, "condemnation", -1),
        Gt(Kt, "condemned", -1),
        Gt(Kt, "condemns", -1),
        Gt(Kt, "condescend", -1),
        Gt(Kt, "condescending", -1),
        Gt(Kt, "condescendingly", -1),
        Gt(Kt, "condescension", -1),
        Gt(Kt, "confess", -1),
        Gt(Kt, "confession", -4),
        Gt(Kt, "confessions", -2),
        Gt(Kt, "confined", -2),
        Gt(Kt, "conflict", -2),
        Gt(Kt, "conflicted", -2),
        Gt(Kt, "conflicting", -2),
        Gt(Kt, "conflicts", -2),
        Gt(Kt, "confound", -2),
        Gt(Kt, "confounded", -2),
        Gt(Kt, "confounding", -2),
        Gt(Kt, "confront", -3),
        Gt(Kt, "confrontation", -3),
        Gt(Kt, "confrontational", -3),
        Gt(Kt, "confuse", -5),
        Gt(Kt, "confused", -4),
        Gt(Kt, "confuses", -4),
        Gt(Kt, "confusing", -4),
        Gt(Kt, "confusion", -4),
        Gt(Kt, "confusions", -4),
        Gt(Kt, "congested", -4),
        Gt(Kt, "congestion", -4),
        Gt(Kt, "cons", -5),
        Gt(Kt, "conscons", -2),
        Gt(Kt, "conservative", -1),
        Gt(Kt, "conspicuous", -1),
        Gt(Kt, "conspicuously", -1),
        Gt(Kt, "conspiracies", -1),
        Gt(Kt, "conspiracy", -4),
        Gt(Kt, "conspirator", -1),
        Gt(Kt, "conspiratorial", -1),
        Gt(Kt, "conspire", -5),
        Gt(Kt, "consternation", -1),
        Gt(Kt, "contagious", -3),
        Gt(Kt, "contaminate", -3),
        Gt(Kt, "contaminated", -3),
        Gt(Kt, "contaminates", -2),
        Gt(Kt, "contaminating", -2),
        Gt(Kt, "contamination", -1),
        Gt(Kt, "contempt", -1),
        Gt(Kt, "contemptible", -1),
        Gt(Kt, "contemptuous", -2),
        Gt(Kt, "contemptuously", -2),
        Gt(Kt, "contend", -2),
        Gt(Kt, "contention", -2),
        Gt(Kt, "contentious", -2),
        Gt(Kt, "contort", -3),
        Gt(Kt, "contortions", -3),
        Gt(Kt, "contradict", -3),
        Gt(Kt, "contradiction", -3),
        Gt(Kt, "contradictory", -3),
        Gt(Kt, "contrariness", -3),
        Gt(Kt, "contravene", -3),
        Gt(Kt, "contrive", -3),
        Gt(Kt, "contrived", -3),
        Gt(Kt, "controversial", -3),
        Gt(Kt, "controversy", -2),
        Gt(Kt, "convoluted", -2),
        Gt(Kt, "corrode", -2),
        Gt(Kt, "corrosion", -3),
        Gt(Kt, "corrosions", -3),
        Gt(Kt, "corrosive", -3),
        Gt(Kt, "corrupt", -4),
        Gt(Kt, "corrupted", -4),
        Gt(Kt, "corrupting", -4),
        Gt(Kt, "corruption", -4),
        Gt(Kt, "corrupts", -4),
        Gt(Kt, "corruptted", -4),
        Gt(Kt, "costlier", -3),
        Gt(Kt, "costly", -3),
        Gt(Kt, "counter-productive", -3),
        Gt(Kt, "counterproductive", -3),
        Gt(Kt, "coupists", -1),
        Gt(Kt, "covetous", -2),
        Gt(Kt, "coward", -4),
        Gt(Kt, "cowardly", -5),
        Gt(Kt, "crabby", -2),
        Gt(Kt, "crack", -2),
        Gt(Kt, "cracked", -2),
        Gt(Kt, "cracks", -1),
        Gt(Kt, "craftily", -1),
        Gt(Kt, "craftly", -1),
        Gt(Kt, "crafty", -1),
        Gt(Kt, "cramp", -1),
        Gt(Kt, "cramped", -1),
        Gt(Kt, "cramping", -1),
        Gt(Kt, "cranky", -1),
        Gt(Kt, "crap", -4),
        Gt(Kt, "crappy", -5),
        Gt(Kt, "craps", -3),
        Gt(Kt, "crash", -3),
        Gt(Kt, "crashed", -2),
        Gt(Kt, "crashes", -2),
        Gt(Kt, "crashing", -1),
        Gt(Kt, "crass", -1),
        Gt(Kt, "craven", -1),
        Gt(Kt, "cravenly", -1),
        Gt(Kt, "craze", -1),
        Gt(Kt, "crazily", -1),
        Gt(Kt, "craziness", -1),
        Gt(Kt, "crazy", -2),
        Gt(Kt, "creak", -3),
        Gt(Kt, "creaking", -3),
        Gt(Kt, "creaks", -1),
        Gt(Kt, "credulous", -1),
        Gt(Kt, "creep", -1),
        Gt(Kt, "creeping", -1),
        Gt(Kt, "creeps", -1),
        Gt(Kt, "creepy", -1),
        Gt(Kt, "crept", -1),
        Gt(Kt, "crime", -4),
        Gt(Kt, "criminal", -4),
        Gt(Kt, "cringe", -2),
        Gt(Kt, "cringed", -2),
        Gt(Kt, "cringes", -2),
        Gt(Kt, "cripple", -2),
        Gt(Kt, "crippled", -3),
        Gt(Kt, "cripples", -3),
        Gt(Kt, "crippling", -4),
        Gt(Kt, "crisis", -4),
        Gt(Kt, "critic", -4),
        Gt(Kt, "critical", -1),
        Gt(Kt, "criticism", -1),
        Gt(Kt, "criticisms", -1),
        Gt(Kt, "criticize", -1),
        Gt(Kt, "criticized", -1),
        Gt(Kt, "criticizing", -1),
        Gt(Kt, "critics", -3),
        Gt(Kt, "cronyism", -3),
        Gt(Kt, "crook", -3),
        Gt(Kt, "crooked", -3),
        Gt(Kt, "crooks", -1),
        Gt(Kt, "crowded", -1),
        Gt(Kt, "crowdedness", -1),
        Gt(Kt, "crude", -1),
        Gt(Kt, "cruel", -5),
        Gt(Kt, "crueler", -5),
        Gt(Kt, "cruelest", -5),
        Gt(Kt, "cruelly", -5),
        Gt(Kt, "cruelness", -4),
        Gt(Kt, "cruelties", -4),
        Gt(Kt, "cruelty", -4),
        Gt(Kt, "crumble", -3),
        Gt(Kt, "crumbling", -3),
        Gt(Kt, "crummy", -2),
        Gt(Kt, "crumple", -2),
        Gt(Kt, "crumpled", -2),
        Gt(Kt, "crumples", -1),
        Gt(Kt, "crush", -3),
        Gt(Kt, "crushed", -1),
        Gt(Kt, "crushing", -1),
        Gt(Kt, "cry", -3),
        Gt(Kt, "culpable", -1),
        Gt(Kt, "culprit", -3),
        Gt(Kt, "cumbersome", -1),
        Gt(Kt, "cunt", -5),
        Gt(Kt, "cunts", -5),
        Gt(Kt, "cuplrit", -1),
        Gt(Kt, "curse", -3),
        Gt(Kt, "cursed", -3),
        Gt(Kt, "curses", -4),
        Gt(Kt, "curt", -1),
        Gt(Kt, "cuss", -3),
        Gt(Kt, "cussed", -3),
        Gt(Kt, "cutthroat", -2),
        Gt(Kt, "cynical", -3),
        Gt(Kt, "cynicism", -3),
        Gt(Kt, "d*mn", -3),
        Gt(Kt, "damage", -3),
        Gt(Kt, "damaged", -3),
        Gt(Kt, "damages", -3),
        Gt(Kt, "damaging", -3),
        Gt(Kt, "damn", -4),
        Gt(Kt, "damnable", -5),
        Gt(Kt, "damnably", -5),
        Gt(Kt, "damnation", -5),
        Gt(Kt, "damned", -5),
        Gt(Kt, "damning", -5),
        Gt(Kt, "damper", -2),
        Gt(Kt, "danger", -2),
        Gt(Kt, "dangerous", -2),
        Gt(Kt, "dangerousness", -3),
        Gt(Kt, "dark", -3),
        Gt(Kt, "darken", -2),
        Gt(Kt, "darkened", -2),
        Gt(Kt, "darker", -2),
        Gt(Kt, "darkness", -2),
        Gt(Kt, "dastard", -1),
        Gt(Kt, "dastardly", -1),
        Gt(Kt, "daunt", -1),
        Gt(Kt, "daunting", -2),
        Gt(Kt, "dauntingly", -2),
        Gt(Kt, "dawdle", -1),
        Gt(Kt, "daze", -1),
        Gt(Kt, "dazed", -1),
        Gt(Kt, "dead", -5),
        Gt(Kt, "deadbeat", -5),
        Gt(Kt, "deadlock", -3),
        Gt(Kt, "deadly", -4),
        Gt(Kt, "deadweight", -3),
        Gt(Kt, "deaf", -3),
        Gt(Kt, "dearth", -1),
        Gt(Kt, "death", -4),
        Gt(Kt, "debacle", -1),
        Gt(Kt, "debase", -1),
        Gt(Kt, "debasement", -1),
        Gt(Kt, "debaser", -1),
        Gt(Kt, "debatable", -1),
        Gt(Kt, "debauch", -1),
        Gt(Kt, "debaucher", -1),
        Gt(Kt, "debauchery", -1),
        Gt(Kt, "debilitate", -1),
        Gt(Kt, "debilitating", -1),
        Gt(Kt, "debility", -1),
        Gt(Kt, "debt", -2),
        Gt(Kt, "debts", -2),
        Gt(Kt, "decadence", -1),
        Gt(Kt, "decadent", -1),
        Gt(Kt, "decay", -4),
        Gt(Kt, "decayed", -4),
        Gt(Kt, "deceit", -3),
        Gt(Kt, "deceitful", -3),
        Gt(Kt, "deceitfully", -3),
        Gt(Kt, "deceitfulness", -3),
        Gt(Kt, "deceive", -3),
        Gt(Kt, "deceiver", -3),
        Gt(Kt, "deceivers", -3),
        Gt(Kt, "deceiving", -3),
        Gt(Kt, "deception", -4),
        Gt(Kt, "deceptive", -4),
        Gt(Kt, "deceptively", -5),
        Gt(Kt, "declaim", -3),
        Gt(Kt, "decline", -2),
        Gt(Kt, "declines", -2),
        Gt(Kt, "declining", -2),
        Gt(Kt, "decrement", -2),
        Gt(Kt, "decrepit", -2),
        Gt(Kt, "decrepitude", -1),
        Gt(Kt, "decry", -1),
        Gt(Kt, "defamation", -3),
        Gt(Kt, "defamations", -3),
        Gt(Kt, "defamatory", -3),
        Gt(Kt, "defame", -3),
        Gt(Kt, "defect", -4),
        Gt(Kt, "defective", -4),
        Gt(Kt, "defects", -4),
        Gt(Kt, "defensive", -3),
        Gt(Kt, "defiance", -3),
        Gt(Kt, "defiant", -3),
        Gt(Kt, "defiantly", -3),
        Gt(Kt, "deficiencies", -3),
        Gt(Kt, "deficiency", -3),
        Gt(Kt, "deficient", -3),
        Gt(Kt, "defile", -3),
        Gt(Kt, "defiler", -3),
        Gt(Kt, "deform", -3),
        Gt(Kt, "deformed", -3),
        Gt(Kt, "defrauding", -4),
        Gt(Kt, "defunct", -2),
        Gt(Kt, "defy", -1),
        Gt(Kt, "degenerate", -2),
        Gt(Kt, "degenerately", -2),
        Gt(Kt, "degeneration", -2),
        Gt(Kt, "degradation", -3),
        Gt(Kt, "degrade", -3),
        Gt(Kt, "degrading", -3),
        Gt(Kt, "degradingly", -3),
        Gt(Kt, "dehumanization", -2),
        Gt(Kt, "dehumanize", -2),
        Gt(Kt, "deign", -1),
        Gt(Kt, "deject", -1),
        Gt(Kt, "dejected", -1),
        Gt(Kt, "dejectedly", -1),
        Gt(Kt, "dejection", -1),
        Gt(Kt, "delay", -1),
        Gt(Kt, "delayed", -1),
        Gt(Kt, "delaying", -1),
        Gt(Kt, "delays", -1),
        Gt(Kt, "delinquency", -1),
        Gt(Kt, "delinquent", -1),
        Gt(Kt, "delirious", -1),
        Gt(Kt, "delirium", -1),
        Gt(Kt, "delude", -1),
        Gt(Kt, "deluded", -1),
        Gt(Kt, "deluge", -1),
        Gt(Kt, "delusion", -1),
        Gt(Kt, "delusional", -1),
        Gt(Kt, "delusions", -1),
        Gt(Kt, "demean", -2),
        Gt(Kt, "demeaning", -1),
        Gt(Kt, "demise", -3),
        Gt(Kt, "demolish", -3),
        Gt(Kt, "demolisher", -3),
        Gt(Kt, "demon", -4),
        Gt(Kt, "demonic", -4),
        Gt(Kt, "demonize", -4),
        Gt(Kt, "demonized", -4),
        Gt(Kt, "demonizes", -4),
        Gt(Kt, "demonizing", -4),
        Gt(Kt, "demoralize", -1),
        Gt(Kt, "demoralizing", -1),
        Gt(Kt, "demoralizingly", -1),
        Gt(Kt, "denial", -2),
        Gt(Kt, "denied", -2),
        Gt(Kt, "denies", -1),
        Gt(Kt, "denigrate", -1),
        Gt(Kt, "denounce", -1),
        Gt(Kt, "dense", -1),
        Gt(Kt, "dent", -1),
        Gt(Kt, "dented", -1),
        Gt(Kt, "dents", -1),
        Gt(Kt, "denunciate", -1),
        Gt(Kt, "denunciation", -1),
        Gt(Kt, "denunciations", -1),
        Gt(Kt, "deny", -2),
        Gt(Kt, "denying", -2),
        Gt(Kt, "deplete", -1),
        Gt(Kt, "deplorable", -1),
        Gt(Kt, "deplorably", -1),
        Gt(Kt, "deplore", -1),
        Gt(Kt, "deploring", -1),
        Gt(Kt, "deploringly", -1),
        Gt(Kt, "deprave", -1),
        Gt(Kt, "depraved", -1),
        Gt(Kt, "depravedly", -1),
        Gt(Kt, "deprecate", -1),
        Gt(Kt, "depress", -4),
        Gt(Kt, "depressed", -3),
        Gt(Kt, "depressing", -4),
        Gt(Kt, "depressingly", -3),
        Gt(Kt, "depression", -4),
        Gt(Kt, "depressions", -4),
        Gt(Kt, "deprive", -3),
        Gt(Kt, "deprived", -3),
        Gt(Kt, "deride", -1),
        Gt(Kt, "derision", -1),
        Gt(Kt, "derisive", -1),
        Gt(Kt, "derisively", -1),
        Gt(Kt, "derisiveness", -1),
        Gt(Kt, "derogatory", -3),
        Gt(Kt, "desecrate", -1),
        Gt(Kt, "desert", -2),
        Gt(Kt, "desertion", -1),
        Gt(Kt, "desiccate", -1),
        Gt(Kt, "desiccated", -1),
        Gt(Kt, "desititute", -1),
        Gt(Kt, "desolate", -1),
        Gt(Kt, "desolately", -1),
        Gt(Kt, "desolation", -1),
        Gt(Kt, "despair", -1),
        Gt(Kt, "despairing", -1),
        Gt(Kt, "despairingly", -1),
        Gt(Kt, "desperate", -2),
        Gt(Kt, "desperately", -2),
        Gt(Kt, "desperation", -1),
        Gt(Kt, "despicable", -2),
        Gt(Kt, "despicably", -1),
        Gt(Kt, "despise", -1),
        Gt(Kt, "despised", -1),
        Gt(Kt, "despoil", -1),
        Gt(Kt, "despoiler", -1),
        Gt(Kt, "despondence", -1),
        Gt(Kt, "despondency", -1),
        Gt(Kt, "despondent", -1),
        Gt(Kt, "despondently", -1),
        Gt(Kt, "despot", -1),
        Gt(Kt, "despotic", -1),
        Gt(Kt, "despotism", -1),
        Gt(Kt, "destabilisation", -1),
        Gt(Kt, "destains", -1),
        Gt(Kt, "destitute", -1),
        Gt(Kt, "destitution", -1),
        Gt(Kt, "destroy", -5),
        Gt(Kt, "destroyer", -5),
        Gt(Kt, "destruction", -5),
        Gt(Kt, "destructive", -5),
        Gt(Kt, "desultory", -1),
        Gt(Kt, "deter", -2),
        Gt(Kt, "deteriorate", -5),
        Gt(Kt, "deteriorating", -5),
        Gt(Kt, "deterioration", -5),
        Gt(Kt, "deterrent", -5),
        Gt(Kt, "detest", -3),
        Gt(Kt, "detestable", -3),
        Gt(Kt, "detestably", -3),
        Gt(Kt, "detested", -3),
        Gt(Kt, "detesting", -3),
        Gt(Kt, "detests", -3),
        Gt(Kt, "detract", -3),
        Gt(Kt, "detracted", -2),
        Gt(Kt, "detracting", -2),
        Gt(Kt, "detraction", -2),
        Gt(Kt, "detracts", -2),
        Gt(Kt, "detriment", -2),
        Gt(Kt, "detrimental", -2),
        Gt(Kt, "devastate", -5),
        Gt(Kt, "devastated", -5),
        Gt(Kt, "devastates", -5),
        Gt(Kt, "devastating", -5),
        Gt(Kt, "devastatingly", -5),
        Gt(Kt, "devastation", -5),
        Gt(Kt, "deviate", -2),
        Gt(Kt, "deviation", -2),
        Gt(Kt, "devil", -2),
        Gt(Kt, "devilish", -2),
        Gt(Kt, "devilishly", -2),
        Gt(Kt, "devilment", -2),
        Gt(Kt, "devilry", -2),
        Gt(Kt, "devious", -3),
        Gt(Kt, "deviously", -3),
        Gt(Kt, "deviousness", -3),
        Gt(Kt, "devoid", -2),
        Gt(Kt, "diabolic", -2),
        Gt(Kt, "diabolical", -2),
        Gt(Kt, "diabolically", -2),
        Gt(Kt, "diametrically", -1),
        Gt(Kt, "diappointed", -5),
        Gt(Kt, "diatribe", -1),
        Gt(Kt, "diatribes", -1),
        Gt(Kt, "dick", -5),
        Gt(Kt, "dictator", -4),
        Gt(Kt, "dictatorial", -3),
        Gt(Kt, "die", -5),
        Gt(Kt, "die-hard", -2),
        Gt(Kt, "died", -4),
        Gt(Kt, "dies", -3),
        Gt(Kt, "difficult", -2),
        Gt(Kt, "difficulties", -2),
        Gt(Kt, "difficulty", -2),
        Gt(Kt, "diffidence", -1),
        Gt(Kt, "dilapidated", -1),
        Gt(Kt, "dilemma", -1),
        Gt(Kt, "dilly-dally", -1),
        Gt(Kt, "dim", -1),
        Gt(Kt, "dimmer", -1),
        Gt(Kt, "din", -1),
        Gt(Kt, "ding", -1),
        Gt(Kt, "dings", -1),
        Gt(Kt, "dinky", -1),
        Gt(Kt, "dire", -1),
        Gt(Kt, "direly", -1),
        Gt(Kt, "direness", -1),
        Gt(Kt, "dirt", -2),
        Gt(Kt, "dirtbag", -1),
        Gt(Kt, "dirtbags", -1),
        Gt(Kt, "dirts", -2),
        Gt(Kt, "dirty", -2),
        Gt(Kt, "disable", -1),
        Gt(Kt, "disabled", -1),
        Gt(Kt, "disaccord", -1),
        Gt(Kt, "disadvantage", -1),
        Gt(Kt, "disadvantaged", -1),
        Gt(Kt, "disadvantageous", -1),
        Gt(Kt, "disadvantages", -1),
        Gt(Kt, "disaffect", -1),
        Gt(Kt, "disaffected", -1),
        Gt(Kt, "disaffirm", -1),
        Gt(Kt, "disagree", -2),
        Gt(Kt, "disagreeable", -1),
        Gt(Kt, "disagreeably", -1),
        Gt(Kt, "disagreed", -2),
        Gt(Kt, "disagreeing", -1),
        Gt(Kt, "disagreement", -1),
        Gt(Kt, "disagrees", -1),
        Gt(Kt, "disallow", -4),
        Gt(Kt, "disapointed", -5),
        Gt(Kt, "disapointing", -5),
        Gt(Kt, "disapointment", -5),
        Gt(Kt, "disappoint", -5),
        Gt(Kt, "disappointed", -4),
        Gt(Kt, "disappointing", -4),
        Gt(Kt, "disappointingly", -4),
        Gt(Kt, "disappointment", -4),
        Gt(Kt, "disappointments", -4),
        Gt(Kt, "disappoints", -3),
        Gt(Kt, "disapprobation", -1),
        Gt(Kt, "disapproval", -2),
        Gt(Kt, "disapprove", -2),
        Gt(Kt, "disapproving", -2),
        Gt(Kt, "disarm", -2),
        Gt(Kt, "disarray", -1),
        Gt(Kt, "disaster", -1),
        Gt(Kt, "disasterous", -2),
        Gt(Kt, "disastrous", -2),
        Gt(Kt, "disastrously", -1),
        Gt(Kt, "disavow", -3),
        Gt(Kt, "disavowal", -3),
        Gt(Kt, "disbelief", -2),
        Gt(Kt, "disbelieve", -2),
        Gt(Kt, "disbeliever", -2),
        Gt(Kt, "disclaim", -1),
        Gt(Kt, "discombobulate", -1),
        Gt(Kt, "discomfit", -3),
        Gt(Kt, "discomfititure", -1),
        Gt(Kt, "discomfort", -1),
        Gt(Kt, "discompose", -1),
        Gt(Kt, "disconcert", -1),
        Gt(Kt, "disconcerted", -1),
        Gt(Kt, "disconcerting", -1),
        Gt(Kt, "disconcertingly", -1),
        Gt(Kt, "disconsolate", -1),
        Gt(Kt, "disconsolately", -1),
        Gt(Kt, "disconsolation", -1),
        Gt(Kt, "discontent", -2),
        Gt(Kt, "discontented", -2),
        Gt(Kt, "discontentedly", -2),
        Gt(Kt, "discontinued", -2),
        Gt(Kt, "discontinuity", -1),
        Gt(Kt, "discontinuous", -1),
        Gt(Kt, "discord", -1),
        Gt(Kt, "discordance", -1),
        Gt(Kt, "discordant", -1),
        Gt(Kt, "discountenance", -1),
        Gt(Kt, "discourage", -1),
        Gt(Kt, "discouragement", -1),
        Gt(Kt, "discouraging", -1),
        Gt(Kt, "discouragingly", -1),
        Gt(Kt, "discourteous", -1),
        Gt(Kt, "discourteously", -1),
        Gt(Kt, "discoutinous", -1),
        Gt(Kt, "discredit", -1),
        Gt(Kt, "discrepant", -1),
        Gt(Kt, "discriminate", -2),
        Gt(Kt, "discrimination", -2),
        Gt(Kt, "discriminatory", -2),
        Gt(Kt, "disdain", -1),
        Gt(Kt, "disdained", -1),
        Gt(Kt, "disdainful", -1),
        Gt(Kt, "disdainfully", -1),
        Gt(Kt, "disfavor", -1),
        Gt(Kt, "disgrace", -5),
        Gt(Kt, "disgraced", -5),
        Gt(Kt, "disgraceful", -5),
        Gt(Kt, "disgracefully", -5),
        Gt(Kt, "disgruntle", -3),
        Gt(Kt, "disgruntled", -3),
        Gt(Kt, "disgust", -5),
        Gt(Kt, "disgusted", -5),
        Gt(Kt, "disgustedly", -5),
        Gt(Kt, "disgustful", -5),
        Gt(Kt, "disgustfully", -5),
        Gt(Kt, "disgusting", -5),
        Gt(Kt, "disgustingly", -5),
        Gt(Kt, "dishearten", -4),
        Gt(Kt, "disheartening", -4),
        Gt(Kt, "dishearteningly", -4),
        Gt(Kt, "dishonest", -3),
        Gt(Kt, "dishonestly", -3),
        Gt(Kt, "dishonesty", -3),
        Gt(Kt, "dishonor", -3),
        Gt(Kt, "dishonorable", -3),
        Gt(Kt, "dishonorablely", -3),
        Gt(Kt, "disillusion", -2),
        Gt(Kt, "disillusioned", -2),
        Gt(Kt, "disillusionment", -2),
        Gt(Kt, "disillusions", -2),
        Gt(Kt, "disinclination", -2),
        Gt(Kt, "disinclined", -2),
        Gt(Kt, "disingenuous", -2),
        Gt(Kt, "disingenuously", -2),
        Gt(Kt, "disintegrate", -2),
        Gt(Kt, "disintegrated", -2),
        Gt(Kt, "disintegrates", -2),
        Gt(Kt, "disintegration", -2),
        Gt(Kt, "disinterest", -2),
        Gt(Kt, "disinterested", -2),
        Gt(Kt, "dislike", -3),
        Gt(Kt, "disliked", -3),
        Gt(Kt, "dislikes", -3),
        Gt(Kt, "disliking", -3),
        Gt(Kt, "dislocated", -3),
        Gt(Kt, "disloyal", -3),
        Gt(Kt, "disloyalty", -3),
        Gt(Kt, "dismal", -1),
        Gt(Kt, "dismally", -1),
        Gt(Kt, "dismalness", -1),
        Gt(Kt, "dismay", -3),
        Gt(Kt, "dismayed", -3),
        Gt(Kt, "dismaying", -3),
        Gt(Kt, "dismayingly", -3),
        Gt(Kt, "dismissive", -2),
        Gt(Kt, "dismissively", -2),
        Gt(Kt, "disobedience", -2),
        Gt(Kt, "disobedient", -2),
        Gt(Kt, "disobey", -1),
        Gt(Kt, "disoobedient", -1),
        Gt(Kt, "disorder", -1),
        Gt(Kt, "disordered", -1),
        Gt(Kt, "disorderly", -1),
        Gt(Kt, "disorganized", -1),
        Gt(Kt, "disorient", -1),
        Gt(Kt, "disoriented", -1),
        Gt(Kt, "disown", -1),
        Gt(Kt, "disparage", -1),
        Gt(Kt, "disparaging", -1),
        Gt(Kt, "disparagingly", -1),
        Gt(Kt, "dispensable", -1),
        Gt(Kt, "dispirit", -1),
        Gt(Kt, "dispirited", -1),
        Gt(Kt, "dispiritedly", -1),
        Gt(Kt, "dispiriting", -1),
        Gt(Kt, "displace", -1),
        Gt(Kt, "displaced", -1),
        Gt(Kt, "displease", -1),
        Gt(Kt, "displeased", -1),
        Gt(Kt, "displeasing", -1),
        Gt(Kt, "displeasure", -1),
        Gt(Kt, "disproportionate", -1),
        Gt(Kt, "disprove", -2),
        Gt(Kt, "disputable", -1),
        Gt(Kt, "dispute", -3),
        Gt(Kt, "disputed", -3),
        Gt(Kt, "disquiet", -1),
        Gt(Kt, "disquieting", -1),
        Gt(Kt, "disquietingly", -1),
        Gt(Kt, "disquietude", -1),
        Gt(Kt, "disregard", -3),
        Gt(Kt, "disregardful", -1),
        Gt(Kt, "disreputable", -1),
        Gt(Kt, "disrepute", -2),
        Gt(Kt, "disrespect", -1),
        Gt(Kt, "disrespectable", -1),
        Gt(Kt, "disrespectablity", -1),
        Gt(Kt, "disrespectful", -1),
        Gt(Kt, "disrespectfully", -1),
        Gt(Kt, "disrespectfulness", -1),
        Gt(Kt, "disrespecting", -1),
        Gt(Kt, "disrupt", -4),
        Gt(Kt, "disruption", -4),
        Gt(Kt, "disruptive", -4),
        Gt(Kt, "diss", -1),
        Gt(Kt, "dissapointed", -5),
        Gt(Kt, "dissappointed", -5),
        Gt(Kt, "dissappointing", -5),
        Gt(Kt, "dissatisfaction", -4),
        Gt(Kt, "dissatisfactory", -4),
        Gt(Kt, "dissatisfied", -4),
        Gt(Kt, "dissatisfies", -4),
        Gt(Kt, "dissatisfy", -4),
        Gt(Kt, "dissatisfying", -4),
        Gt(Kt, "dissed", -1),
        Gt(Kt, "dissemble", -1),
        Gt(Kt, "dissembler", -1),
        Gt(Kt, "dissension", -1),
        Gt(Kt, "dissent", -1),
        Gt(Kt, "dissenter", -1),
        Gt(Kt, "dissention", -1),
        Gt(Kt, "disservice", -1),
        Gt(Kt, "disses", -1),
        Gt(Kt, "dissidence", -1),
        Gt(Kt, "dissident", -1),
        Gt(Kt, "dissidents", -1),
        Gt(Kt, "dissing", -1),
        Gt(Kt, "dissocial", -1),
        Gt(Kt, "dissolute", -1),
        Gt(Kt, "dissolution", -1),
        Gt(Kt, "dissonance", -1),
        Gt(Kt, "dissonant", -1),
        Gt(Kt, "dissonantly", -1),
        Gt(Kt, "dissuade", -1),
        Gt(Kt, "dissuasive", -1),
        Gt(Kt, "distains", -1),
        Gt(Kt, "distaste", -1),
        Gt(Kt, "distasteful", -1),
        Gt(Kt, "distastefully", -1),
        Gt(Kt, "distort", -1),
        Gt(Kt, "distorted", -1),
        Gt(Kt, "distortion", -1),
        Gt(Kt, "distorts", -1),
        Gt(Kt, "distract", -1),
        Gt(Kt, "distracting", -1),
        Gt(Kt, "distraction", -1),
        Gt(Kt, "distraught", -1),
        Gt(Kt, "distraughtly", -1),
        Gt(Kt, "distraughtness", -1),
        Gt(Kt, "distress", -2),
        Gt(Kt, "distressed", -2),
        Gt(Kt, "distressing", -2),
        Gt(Kt, "distressingly", -1),
        Gt(Kt, "distrust", -3),
        Gt(Kt, "distrustful", -3),
        Gt(Kt, "distrusting", -3),
        Gt(Kt, "disturb", -3),
        Gt(Kt, "disturbance", -3),
        Gt(Kt, "disturbed", -3),
        Gt(Kt, "disturbing", -3),
        Gt(Kt, "disturbingly", -3),
        Gt(Kt, "disunity", -2),
        Gt(Kt, "disvalue", -2),
        Gt(Kt, "divergent", -2),
        Gt(Kt, "divisive", -2),
        Gt(Kt, "divisively", -2),
        Gt(Kt, "divisiveness", -2),
        Gt(Kt, "dizzing", -2),
        Gt(Kt, "dizzingly", -2),
        Gt(Kt, "dizzy", -2),
        Gt(Kt, "doddering", -2),
        Gt(Kt, "dodgey", -2),
        Gt(Kt, "dogged", -2),
        Gt(Kt, "doggedly", -2),
        Gt(Kt, "dogmatic", -2),
        Gt(Kt, "doldrums", -2),
        Gt(Kt, "domineer", -2),
        Gt(Kt, "domineering", -2),
        Gt(Kt, "donside", -2),
        Gt(Kt, "doom", -4),
        Gt(Kt, "doomed", -4),
        Gt(Kt, "doomsday", -3),
        Gt(Kt, "dope", -1),
        Gt(Kt, "doubt", -2),
        Gt(Kt, "doubtful", -1),
        Gt(Kt, "doubtfully", -1),
        Gt(Kt, "doubts", -2),
        Gt(Kt, "douchbag", -5),
        Gt(Kt, "douchebag", -5),
        Gt(Kt, "douchebags", -5),
        Gt(Kt, "downbeat", -3),
        Gt(Kt, "downcast", -1),
        Gt(Kt, "downer", -1),
        Gt(Kt, "downfall", -1),
        Gt(Kt, "downfallen", -1),
        Gt(Kt, "downgrade", -1),
        Gt(Kt, "downhearted", -1),
        Gt(Kt, "downheartedly", -1),
        Gt(Kt, "downhill", -1),
        Gt(Kt, "downside", -3),
        Gt(Kt, "downsides", -1),
        Gt(Kt, "downturn", -1),
        Gt(Kt, "downturns", -1),
        Gt(Kt, "drab", -1),
        Gt(Kt, "draconian", -1),
        Gt(Kt, "draconic", -1),
        Gt(Kt, "drag", -2),
        Gt(Kt, "dragged", -1),
        Gt(Kt, "dragging", -1),
        Gt(Kt, "dragoon", -1),
        Gt(Kt, "drags", -1),
        Gt(Kt, "drain", -3),
        Gt(Kt, "drained", -3),
        Gt(Kt, "draining", -3),
        Gt(Kt, "drains", -1),
        Gt(Kt, "drastic", -1),
        Gt(Kt, "drastically", -1),
        Gt(Kt, "drawback", -1),
        Gt(Kt, "drawbacks", -1),
        Gt(Kt, "dread", -4),
        Gt(Kt, "dreadful", -4),
        Gt(Kt, "dreadfully", -4),
        Gt(Kt, "dreadfulness", -4),
        Gt(Kt, "dreary", -2),
        Gt(Kt, "dripped", -2),
        Gt(Kt, "dripping", -2),
        Gt(Kt, "drippy", -2),
        Gt(Kt, "drips", -2),
        Gt(Kt, "drones", -2),
        Gt(Kt, "droop", -2),
        Gt(Kt, "droops", -2),
        Gt(Kt, "drop-out", -3),
        Gt(Kt, "drop-outs", -3),
        Gt(Kt, "dropout", -3),
        Gt(Kt, "dropouts", -2),
        Gt(Kt, "drought", -2),
        Gt(Kt, "drowning", -3),
        Gt(Kt, "drunk", -3),
        Gt(Kt, "drunkard", -1),
        Gt(Kt, "drunken", -1),
        Gt(Kt, "dubious", -1),
        Gt(Kt, "dubiously", -1),
        Gt(Kt, "dubitable", -1),
        Gt(Kt, "dud", -1),
        Gt(Kt, "dull", -1),
        Gt(Kt, "dullard", -1),
        Gt(Kt, "dumb", -2),
        Gt(Kt, "dumbfound", -2),
        Gt(Kt, "dump", -2),
        Gt(Kt, "dumped", -3),
        Gt(Kt, "dumping", -3),
        Gt(Kt, "dumps", -3),
        Gt(Kt, "dunce", -1),
        Gt(Kt, "dungeon", -1),
        Gt(Kt, "dungeons", -1),
        Gt(Kt, "dupe", -2),
        Gt(Kt, "dust", -2),
        Gt(Kt, "dusty", -2),
        Gt(Kt, "dwindling", -1),
        Gt(Kt, "dying", -1),
        Gt(Kt, "earsplitting", -1),
        Gt(Kt, "eccentric", -1),
        Gt(Kt, "eccentricity", -1),
        Gt(Kt, "effigy", -1),
        Gt(Kt, "effrontery", -1),
        Gt(Kt, "egocentric", -2),
        Gt(Kt, "egomania", -3),
        Gt(Kt, "egotism", -1),
        Gt(Kt, "egotistical", -1),
        Gt(Kt, "egotistically", -1),
        Gt(Kt, "egregious", -1),
        Gt(Kt, "egregiously", -1),
        Gt(Kt, "election-rigger", -1),
        Gt(Kt, "elimination", -1),
        Gt(Kt, "emaciated", -1),
        Gt(Kt, "emasculate", -1),
        Gt(Kt, "embarrass", -1),
        Gt(Kt, "embarrassing", -1),
        Gt(Kt, "embarrassingly", -1),
        Gt(Kt, "embarrassment", -1),
        Gt(Kt, "embattled", -1),
        Gt(Kt, "embroil", -1),
        Gt(Kt, "embroiled", -1),
        Gt(Kt, "embroilment", -1),
        Gt(Kt, "emergency", -1),
        Gt(Kt, "emphatic", -1),
        Gt(Kt, "emphatically", -1),
        Gt(Kt, "emptiness", -1),
        Gt(Kt, "encroach", -1),
        Gt(Kt, "encroachment", -1),
        Gt(Kt, "endanger", -3),
        Gt(Kt, "enemies", -2),
        Gt(Kt, "enemy", -2),
        Gt(Kt, "enervate", -1),
        Gt(Kt, "enfeeble", -1),
        Gt(Kt, "enflame", -1),
        Gt(Kt, "engulf", -1),
        Gt(Kt, "enjoin", -1),
        Gt(Kt, "enmity", -1),
        Gt(Kt, "enrage", -1),
        Gt(Kt, "enraged", -1),
        Gt(Kt, "enraging", -1),
        Gt(Kt, "enslave", -3),
        Gt(Kt, "entangle", -1),
        Gt(Kt, "entanglement", -1),
        Gt(Kt, "entrap", -1),
        Gt(Kt, "entrapment", -1),
        Gt(Kt, "envious", -1),
        Gt(Kt, "enviously", -1),
        Gt(Kt, "enviousness", -1),
        Gt(Kt, "epidemic", -4),
        Gt(Kt, "equivocal", -1),
        Gt(Kt, "erase", -3),
        Gt(Kt, "erode", -5),
        Gt(Kt, "erodes", -5),
        Gt(Kt, "erosion", -5),
        Gt(Kt, "err", -1),
        Gt(Kt, "errant", -1),
        Gt(Kt, "erratic", -1),
        Gt(Kt, "erratically", -1),
        Gt(Kt, "erroneous", -1),
        Gt(Kt, "erroneously", -1),
        Gt(Kt, "error", -3),
        Gt(Kt, "errors", -3),
        Gt(Kt, "eruptions", -1),
        Gt(Kt, "escapade", -1),
        Gt(Kt, "eschew", -1),
        Gt(Kt, "estranged", -1),
        Gt(Kt, "evade", -1),
        Gt(Kt, "evasion", -1),
        Gt(Kt, "evasive", -1),
        Gt(Kt, "evil", -1),
        Gt(Kt, "evildoer", -1),
        Gt(Kt, "evils", -1),
        Gt(Kt, "eviscerate", -1),
        Gt(Kt, "exacerbate", -1),
        Gt(Kt, "exagerate", -3),
        Gt(Kt, "exagerated", -3),
        Gt(Kt, "exagerates", -3),
        Gt(Kt, "exaggerate", -3),
        Gt(Kt, "exaggeration", -3),
        Gt(Kt, "exasperate", -3),
        Gt(Kt, "exasperated", -3),
        Gt(Kt, "exasperating", -3),
        Gt(Kt, "exasperatingly", -3),
        Gt(Kt, "exasperation", -3),
        Gt(Kt, "excessive", -3),
        Gt(Kt, "excessively", -2),
        Gt(Kt, "exclusion", -2),
        Gt(Kt, "excoriate", -2),
        Gt(Kt, "excruciating", -2),
        Gt(Kt, "excruciatingly", -1),
        Gt(Kt, "excuse", -2),
        Gt(Kt, "excuses", -2),
        Gt(Kt, "execrate", -3),
        Gt(Kt, "exhaust", -3),
        Gt(Kt, "exhausted", -3),
        Gt(Kt, "exhaustion", -3),
        Gt(Kt, "exhausts", -3),
        Gt(Kt, "exhorbitant", -2),
        Gt(Kt, "exhort", -2),
        Gt(Kt, "exile", -2),
        Gt(Kt, "exorbitant", -2),
        Gt(Kt, "exorbitantance", -2),
        Gt(Kt, "exorbitantly", -2),
        Gt(Kt, "expel", -4),
        Gt(Kt, "expensive", -4),
        Gt(Kt, "expire", -4),
        Gt(Kt, "expired", -4),
        Gt(Kt, "explode", -4),
        Gt(Kt, "exploit", -4),
        Gt(Kt, "exploitation", -3),
        Gt(Kt, "explosive", -3),
        Gt(Kt, "expropriate", -3),
        Gt(Kt, "expropriation", -3),
        Gt(Kt, "expulse", -1),
        Gt(Kt, "expunge", -1),
        Gt(Kt, "exterminate", -3),
        Gt(Kt, "extermination", -3),
        Gt(Kt, "extinguish", -1),
        Gt(Kt, "extort", -5),
        Gt(Kt, "extortion", -5),
        Gt(Kt, "extraneous", -1),
        Gt(Kt, "extravagance", -2),
        Gt(Kt, "extravagant", -1),
        Gt(Kt, "extravagantly", -1),
        Gt(Kt, "extremism", -3),
        Gt(Kt, "extremist", -5),
        Gt(Kt, "extremists", -5),
        Gt(Kt, "eyesore", -3),
        Gt(Kt, "f**k", -5),
        Gt(Kt, "fabricate", -3),
        Gt(Kt, "fabrication", -1),
        Gt(Kt, "facetious", -1),
        Gt(Kt, "facetiously", -1),
        Gt(Kt, "fail", -5),
        Gt(Kt, "failed", -4),
        Gt(Kt, "failing", -4),
        Gt(Kt, "fails", -4),
        Gt(Kt, "failure", -4),
        Gt(Kt, "failures", -4),
        Gt(Kt, "faint", -2),
        Gt(Kt, "fainthearted", -2),
        Gt(Kt, "faithless", -2),
        Gt(Kt, "fake", -2),
        Gt(Kt, "fall", -2),
        Gt(Kt, "fallacies", -2),
        Gt(Kt, "fallacious", -1),
        Gt(Kt, "fallaciously", -1),
        Gt(Kt, "fallaciousness", -1),
        Gt(Kt, "fallacy", -3),
        Gt(Kt, "fallen", -3),
        Gt(Kt, "falling", -3),
        Gt(Kt, "fallout", -4),
        Gt(Kt, "falls", -3),
        Gt(Kt, "false", -1),
        Gt(Kt, "falsehood", -5),
        Gt(Kt, "falsely", -4),
        Gt(Kt, "falsify", -4),
        Gt(Kt, "falter", -1),
        Gt(Kt, "faltered", -1),
        Gt(Kt, "famine", -5),
        Gt(Kt, "famished", -1),
        Gt(Kt, "fanatic", -3),
        Gt(Kt, "fanatical", -3),
        Gt(Kt, "fanatically", -4),
        Gt(Kt, "fanaticism", -2),
        Gt(Kt, "fanatics", -2),
        Gt(Kt, "fanciful", -2),
        Gt(Kt, "far-fetched", -1),
        Gt(Kt, "farce", -1),
        Gt(Kt, "farcical", -1),
        Gt(Kt, "farcical-yet-provocative", -1),
        Gt(Kt, "farcically", -1),
        Gt(Kt, "farfetched", -1),
        Gt(Kt, "fascism", -5),
        Gt(Kt, "fascist", -5),
        Gt(Kt, "fastidious", -1),
        Gt(Kt, "fastidiously", -1),
        Gt(Kt, "fastuous", -1),
        Gt(Kt, "fat", -1),
        Gt(Kt, "fat-cat", -1),
        Gt(Kt, "fat-cats", -1),
        Gt(Kt, "fatal", -4),
        Gt(Kt, "fatalistic", -4),
        Gt(Kt, "fatalistically", -4),
        Gt(Kt, "fatally", -4),
        Gt(Kt, "fatcat", -1),
        Gt(Kt, "fatcats", -1),
        Gt(Kt, "fateful", -3),
        Gt(Kt, "fatefully", -3),
        Gt(Kt, "fathomless", -1),
        Gt(Kt, "fatigue", -4),
        Gt(Kt, "fatigued", -4),
        Gt(Kt, "fatique", -4),
        Gt(Kt, "fatty", -4),
        Gt(Kt, "fatuity", -2),
        Gt(Kt, "fatuous", -2),
        Gt(Kt, "fatuously", -2),
        Gt(Kt, "fault", -4),
        Gt(Kt, "faults", -4),
        Gt(Kt, "faulty", -4),
        Gt(Kt, "fawningly", -1),
        Gt(Kt, "faze", -1),
        Gt(Kt, "fear", -5),
        Gt(Kt, "fearful", -5),
        Gt(Kt, "fearfully", -5),
        Gt(Kt, "fears", -5),
        Gt(Kt, "fearsome", -5),
        Gt(Kt, "feckless", -1),
        Gt(Kt, "feeble", -1),
        Gt(Kt, "feeblely", -1),
        Gt(Kt, "feebleminded", -1),
        Gt(Kt, "feign", -1),
        Gt(Kt, "feint", -1),
        Gt(Kt, "fell", -1),
        Gt(Kt, "felon", -1),
        Gt(Kt, "felonious", -1),
        Gt(Kt, "ferociously", -1),
        Gt(Kt, "ferocity", -1),
        Gt(Kt, "fetid", -1),
        Gt(Kt, "fever", -3),
        Gt(Kt, "feverish", -1),
        Gt(Kt, "fevers", -1),
        Gt(Kt, "fiasco", -1),
        Gt(Kt, "fib", -1),
        Gt(Kt, "fibber", -1),
        Gt(Kt, "fickle", -1),
        Gt(Kt, "fiction", -3),
        Gt(Kt, "fictional", -3),
        Gt(Kt, "fictitious", -3),
        Gt(Kt, "fidget", -1),
        Gt(Kt, "fidgety", -1),
        Gt(Kt, "fiend", -1),
        Gt(Kt, "fiendish", -1),
        Gt(Kt, "fierce", -1),
        Gt(Kt, "figurehead", -1),
        Gt(Kt, "filth", -2),
        Gt(Kt, "filthy", -2),
        Gt(Kt, "finagle", -2),
        Gt(Kt, "finicky", -2),
        Gt(Kt, "fissures", -2),
        Gt(Kt, "fist", -1),
        Gt(Kt, "flabbergast", -1),
        Gt(Kt, "flabbergasted", -1),
        Gt(Kt, "flagging", -1),
        Gt(Kt, "flagrant", -1),
        Gt(Kt, "flagrantly", -1),
        Gt(Kt, "flair", -1),
        Gt(Kt, "flairs", -1),
        Gt(Kt, "flak", -1),
        Gt(Kt, "flake", -1),
        Gt(Kt, "flakey", -1),
        Gt(Kt, "flakieness", -1),
        Gt(Kt, "flaking", -1),
        Gt(Kt, "flaky", -1),
        Gt(Kt, "flare", -1),
        Gt(Kt, "flares", -1),
        Gt(Kt, "flareup", -1),
        Gt(Kt, "flareups", -1),
        Gt(Kt, "flat-out", -1),
        Gt(Kt, "flaunt", -1),
        Gt(Kt, "flaw", -5),
        Gt(Kt, "flawed", -5),
        Gt(Kt, "flaws", -5),
        Gt(Kt, "flee", -2),
        Gt(Kt, "fleed", -2),
        Gt(Kt, "fleeing", -2),
        Gt(Kt, "fleer", -2),
        Gt(Kt, "flees", -2),
        Gt(Kt, "fleeting", -3),
        Gt(Kt, "flicering", -3),
        Gt(Kt, "flicker", -3),
        Gt(Kt, "flickering", -3),
        Gt(Kt, "flickers", -2),
        Gt(Kt, "flighty", -2),
        Gt(Kt, "flimflam", -2),
        Gt(Kt, "flimsy", -3),
        Gt(Kt, "flirt", -3),
        Gt(Kt, "flirty", -3),
        Gt(Kt, "floored", -3),
        Gt(Kt, "flounder", -3),
        Gt(Kt, "floundering", -3),
        Gt(Kt, "flout", -3),
        Gt(Kt, "fluster", -2),
        Gt(Kt, "foe", -4),
        Gt(Kt, "fool", -3),
        Gt(Kt, "fooled", -3),
        Gt(Kt, "foolhardy", -3),
        Gt(Kt, "foolish", -3),
        Gt(Kt, "foolishly", -3),
        Gt(Kt, "foolishness", -3),
        Gt(Kt, "forbid", -3),
        Gt(Kt, "forbidden", -2),
        Gt(Kt, "forbidding", -2),
        Gt(Kt, "forceful", -2),
        Gt(Kt, "foreboding", -1),
        Gt(Kt, "forebodingly", -1),
        Gt(Kt, "forfeit", -1),
        Gt(Kt, "forged", -1),
        Gt(Kt, "forgetful", -1),
        Gt(Kt, "forgetfully", -1),
        Gt(Kt, "forgetfulness", -1),
        Gt(Kt, "forlorn", -1),
        Gt(Kt, "forlornly", -1),
        Gt(Kt, "forsake", -2),
        Gt(Kt, "forsaken", -2),
        Gt(Kt, "forswear", -2),
        Gt(Kt, "foul", -5),
        Gt(Kt, "foully", -5),
        Gt(Kt, "foulness", -5),
        Gt(Kt, "fractious", -3),
        Gt(Kt, "fractiously", -3),
        Gt(Kt, "fracture", -3),
        Gt(Kt, "fragile", -3),
        Gt(Kt, "fragmented", -3),
        Gt(Kt, "frail", -3),
        Gt(Kt, "frantic", -3),
        Gt(Kt, "frantically", -3),
        Gt(Kt, "franticly", -3),
        Gt(Kt, "fraud", -3),
        Gt(Kt, "fraudulent", -3),
        Gt(Kt, "fraught", -3),
        Gt(Kt, "frazzle", -2),
        Gt(Kt, "frazzled", -2),
        Gt(Kt, "freak", -2),
        Gt(Kt, "freaking", -3),
        Gt(Kt, "freakish", -3),
        Gt(Kt, "freakishly", -3),
        Gt(Kt, "freaks", -2),
        Gt(Kt, "freeze", -2),
        Gt(Kt, "freezes", -2),
        Gt(Kt, "freezing", -2),
        Gt(Kt, "frenetic", -2),
        Gt(Kt, "frenetically", -3),
        Gt(Kt, "frenzied", -3),
        Gt(Kt, "frenzy", -3),
        Gt(Kt, "fret", -3),
        Gt(Kt, "fretful", -3),
        Gt(Kt, "frets", -3),
        Gt(Kt, "friction", -3),
        Gt(Kt, "frictions", -3),
        Gt(Kt, "fried", -3),
        Gt(Kt, "friggin", -3),
        Gt(Kt, "frigging", -3),
        Gt(Kt, "fright", -3),
        Gt(Kt, "frighten", -2),
        Gt(Kt, "frightening", -2),
        Gt(Kt, "frighteningly", -2),
        Gt(Kt, "frightful", -2),
        Gt(Kt, "frightfully", -2),
        Gt(Kt, "frigid", -3),
        Gt(Kt, "frost", -3),
        Gt(Kt, "frown", -3),
        Gt(Kt, "froze", -3),
        Gt(Kt, "frozen", -2),
        Gt(Kt, "fruitless", -2),
        Gt(Kt, "fruitlessly", -2),
        Gt(Kt, "frustrate", -2),
        Gt(Kt, "frustrated", -5),
        Gt(Kt, "frustrates", -5),
        Gt(Kt, "frustrating", -5),
        Gt(Kt, "frustratingly", -5),
        Gt(Kt, "frustration", -5),
        Gt(Kt, "frustrations", -5),
        Gt(Kt, "fuck", -5),
        Gt(Kt, "fucking", -5),
        Gt(Kt, "fudge", -2),
        Gt(Kt, "fugitive", -2),
        Gt(Kt, "full-blown", -3),
        Gt(Kt, "fulminate", -3),
        Gt(Kt, "fumble", -3),
        Gt(Kt, "fume", -3),
        Gt(Kt, "fumes", -3),
        Gt(Kt, "fundamentalism", -2),
        Gt(Kt, "funky", -2),
        Gt(Kt, "funnily", -2),
        Gt(Kt, "funny", -1),
        Gt(Kt, "furious", -2),
        Gt(Kt, "furiously", -2),
        Gt(Kt, "furor", -2),
        Gt(Kt, "fury", -3),
        Gt(Kt, "fuss", -3),
        Gt(Kt, "fussy", -3),
        Gt(Kt, "fustigate", -3),
        Gt(Kt, "fusty", -3),
        Gt(Kt, "futile", -3),
        Gt(Kt, "futilely", -3),
        Gt(Kt, "futility", -3),
        Gt(Kt, "fuzzy", -3),
        Gt(Kt, "gabble", -2),
        Gt(Kt, "gaff", -2),
        Gt(Kt, "gaffe", -2),
        Gt(Kt, "gainsay", -2),
        Gt(Kt, "gainsayer", -2),
        Gt(Kt, "gall", -2),
        Gt(Kt, "galling", -2),
        Gt(Kt, "gallingly", -2),
        Gt(Kt, "galls", -2),
        Gt(Kt, "gangster", -5),
        Gt(Kt, "gape", -5),
        Gt(Kt, "garbage", -5),
        Gt(Kt, "garish", -1),
        Gt(Kt, "gasp", -1),
        Gt(Kt, "gauche", -1),
        Gt(Kt, "gaudy", -1),
        Gt(Kt, "gawk", -1),
        Gt(Kt, "gawky", -3),
        Gt(Kt, "geezer", -1),
        Gt(Kt, "genocide", -3),
        Gt(Kt, "get-rich", -1),
        Gt(Kt, "ghastly", -1),
        Gt(Kt, "ghetto", -1),
        Gt(Kt, "ghosting", -1),
        Gt(Kt, "gibber", -1),
        Gt(Kt, "gibberish", -1),
        Gt(Kt, "gibe", -1),
        Gt(Kt, "giddy", -1),
        Gt(Kt, "gimmick", -3),
        Gt(Kt, "gimmicked", -3),
        Gt(Kt, "gimmicking", -3),
        Gt(Kt, "gimmicks", -3),
        Gt(Kt, "gimmicky", -3),
        Gt(Kt, "glare", -1),
        Gt(Kt, "glaringly", -1),
        Gt(Kt, "glib", -1),
        Gt(Kt, "glibly", -1),
        Gt(Kt, "glitch", -1),
        Gt(Kt, "glitches", -1),
        Gt(Kt, "gloatingly", -1),
        Gt(Kt, "gloom", -1),
        Gt(Kt, "gloomy", -1),
        Gt(Kt, "glower", -1),
        Gt(Kt, "glum", -1),
        Gt(Kt, "glut", -1),
        Gt(Kt, "gnawing", -1),
        Gt(Kt, "goad", -1),
        Gt(Kt, "goading", -1),
        Gt(Kt, "god-awful", -1),
        Gt(Kt, "goof", -1),
        Gt(Kt, "goofy", -1),
        Gt(Kt, "goon", -1),
        Gt(Kt, "gossip", -1),
        Gt(Kt, "graceless", -1),
        Gt(Kt, "gracelessly", -1),
        Gt(Kt, "graft", -1),
        Gt(Kt, "grainy", -1),
        Gt(Kt, "grapple", -1),
        Gt(Kt, "grate", -1),
        Gt(Kt, "grating", -1),
        Gt(Kt, "gravely", -1),
        Gt(Kt, "greasy", -1),
        Gt(Kt, "greed", -4),
        Gt(Kt, "greedy", -4),
        Gt(Kt, "grief", -5),
        Gt(Kt, "grievance", -5),
        Gt(Kt, "grievances", -5),
        Gt(Kt, "grieve", -5),
        Gt(Kt, "grieving", -5),
        Gt(Kt, "grievous", -5),
        Gt(Kt, "grievously", -5),
        Gt(Kt, "grim", -2),
        Gt(Kt, "grimace", -2),
        Gt(Kt, "grind", -1),
        Gt(Kt, "gripe", -1),
        Gt(Kt, "gripes", -1),
        Gt(Kt, "grisly", -1),
        Gt(Kt, "gritty", -1),
        Gt(Kt, "gross", -2),
        Gt(Kt, "grossly", -2),
        Gt(Kt, "grotesque", -1),
        Gt(Kt, "grouch", -1),
        Gt(Kt, "grouchy", -1),
        Gt(Kt, "groundless", -1),
        Gt(Kt, "grouse", -1),
        Gt(Kt, "growl", -3),
        Gt(Kt, "grudge", -4),
        Gt(Kt, "grudges", -4),
        Gt(Kt, "grudging", -4),
        Gt(Kt, "grudgingly", -4),
        Gt(Kt, "gruesome", -5),
        Gt(Kt, "gruesomely", -5),
        Gt(Kt, "gruff", -1),
        Gt(Kt, "grumble", -1),
        Gt(Kt, "grumpier", -1),
        Gt(Kt, "grumpiest", -1),
        Gt(Kt, "grumpily", -1),
        Gt(Kt, "grumpish", -1),
        Gt(Kt, "grumpy", -1),
        Gt(Kt, "guile", -1),
        Gt(Kt, "guilt", -3),
        Gt(Kt, "guiltily", -3),
        Gt(Kt, "guilty", -3),
        Gt(Kt, "gullible", -3),
        Gt(Kt, "gutless", -1),
        Gt(Kt, "gutter", -1),
        Gt(Kt, "hack", -2),
        Gt(Kt, "hacks", -2),
        Gt(Kt, "haggard", -2),
        Gt(Kt, "haggle", -2),
        Gt(Kt, "hairloss", -1),
        Gt(Kt, "halfhearted", -1),
        Gt(Kt, "halfheartedly", -1),
        Gt(Kt, "hallucinate", -1),
        Gt(Kt, "hallucination", -1),
        Gt(Kt, "hamper", -1),
        Gt(Kt, "hampered", -1),
        Gt(Kt, "handicapped", -1),
        Gt(Kt, "hang", -1),
        Gt(Kt, "hangs", -1),
        Gt(Kt, "haphazard", -1),
        Gt(Kt, "hapless", -1),
        Gt(Kt, "harangue", -1),
        Gt(Kt, "harass", -3),
        Gt(Kt, "harassed", -3),
        Gt(Kt, "harasses", -3),
        Gt(Kt, "harassment", -3),
        Gt(Kt, "harboring", -1),
        Gt(Kt, "harbors", -1),
        Gt(Kt, "hard", -4),
        Gt(Kt, "hard-hit", -3),
        Gt(Kt, "hard-line", -3),
        Gt(Kt, "hard-liner", -3),
        Gt(Kt, "hardball", -3),
        Gt(Kt, "harden", -3),
        Gt(Kt, "hardened", -3),
        Gt(Kt, "hardheaded", -3),
        Gt(Kt, "hardhearted", -3),
        Gt(Kt, "hardliner", -3),
        Gt(Kt, "hardliners", -3),
        Gt(Kt, "hardship", -5),
        Gt(Kt, "hardships", -5),
        Gt(Kt, "harm", -5),
        Gt(Kt, "harmed", -5),
        Gt(Kt, "harmful", -5),
        Gt(Kt, "harms", -5),
        Gt(Kt, "harpy", -1),
        Gt(Kt, "harridan", -1),
        Gt(Kt, "harried", -1),
        Gt(Kt, "harrow", -1),
        Gt(Kt, "harsh", -1),
        Gt(Kt, "harshly", -1),
        Gt(Kt, "hasseling", -1),
        Gt(Kt, "hassle", -3),
        Gt(Kt, "hassled", -3),
        Gt(Kt, "hassles", -3),
        Gt(Kt, "haste", -5),
        Gt(Kt, "hastily", -1),
        Gt(Kt, "hasty", -1),
        Gt(Kt, "hate", -5),
        Gt(Kt, "hated", -5),
        Gt(Kt, "hateful", -5),
        Gt(Kt, "hatefully", -5),
        Gt(Kt, "hatefulness", -5),
        Gt(Kt, "hater", -5),
        Gt(Kt, "haters", -5),
        Gt(Kt, "hates", -5),
        Gt(Kt, "hating", -5),
        Gt(Kt, "hatred", -5),
        Gt(Kt, "haughtily", -1),
        Gt(Kt, "haughty", -1),
        Gt(Kt, "haunt", -3),
        Gt(Kt, "haunting", -3),
        Gt(Kt, "havoc", -1),
        Gt(Kt, "hawkish", -1),
        Gt(Kt, "haywire", -1),
        Gt(Kt, "hazard", -3),
        Gt(Kt, "hazardous", -3),
        Gt(Kt, "haze", -1),
        Gt(Kt, "hazy", -1),
        Gt(Kt, "head-aches", -1),
        Gt(Kt, "headache", -2),
        Gt(Kt, "headaches", -2),
        Gt(Kt, "heartbreaker", -4),
        Gt(Kt, "heartbreaking", -4),
        Gt(Kt, "heartbreakingly", -4),
        Gt(Kt, "heartless", -4),
        Gt(Kt, "heathen", -1),
        Gt(Kt, "heavy-handed", -2),
        Gt(Kt, "heavyhearted", -2),
        Gt(Kt, "heck", -1),
        Gt(Kt, "heckle", -1),
        Gt(Kt, "heckled", -1),
        Gt(Kt, "heckles", -1),
        Gt(Kt, "hectic", -1),
        Gt(Kt, "hedge", -1),
        Gt(Kt, "hedonistic", -1),
        Gt(Kt, "heedless", -1),
        Gt(Kt, "hefty", -1),
        Gt(Kt, "hegemonism", -1),
        Gt(Kt, "hegemonistic", -1),
        Gt(Kt, "hegemony", -1),
        Gt(Kt, "heinous", -1),
        Gt(Kt, "hell", -2),
        Gt(Kt, "hell-bent", -2),
        Gt(Kt, "hellion", -1),
        Gt(Kt, "hells", -1),
        Gt(Kt, "helpless", -3),
        Gt(Kt, "helplessly", -3),
        Gt(Kt, "helplessness", -1),
        Gt(Kt, "heresy", -1),
        Gt(Kt, "heretic", -1),
        Gt(Kt, "heretical", -1),
        Gt(Kt, "hesitant", -1),
        Gt(Kt, "hestitant", -1),
        Gt(Kt, "hideous", -1),
        Gt(Kt, "hideously", -1),
        Gt(Kt, "hideousness", -1),
        Gt(Kt, "high-priced", -1),
        Gt(Kt, "hiliarious", -1),
        Gt(Kt, "hinder", -1),
        Gt(Kt, "hindrance", -1),
        Gt(Kt, "hiss", -1),
        Gt(Kt, "hissed", -1),
        Gt(Kt, "hissing", -1),
        Gt(Kt, "ho-hum", -1),
        Gt(Kt, "hoard", -1),
        Gt(Kt, "hoax", -5),
        Gt(Kt, "hobble", -5),
        Gt(Kt, "hogs", -1),
        Gt(Kt, "hollow", -1),
        Gt(Kt, "hoodium", -1),
        Gt(Kt, "hoodwink", -1),
        Gt(Kt, "hooligan", -1),
        Gt(Kt, "hopeless", -2),
        Gt(Kt, "hopelessly", -2),
        Gt(Kt, "hopelessness", -2),
        Gt(Kt, "horde", -2),
        Gt(Kt, "horrendous", -1),
        Gt(Kt, "horrendously", -1),
        Gt(Kt, "horrible", -1),
        Gt(Kt, "horrid", -1),
        Gt(Kt, "horrific", -1),
        Gt(Kt, "horrified", -1),
        Gt(Kt, "horrifies", -1),
        Gt(Kt, "horrify", -1),
        Gt(Kt, "horrifying", -1),
        Gt(Kt, "horrifys", -1),
        Gt(Kt, "hostage", -1),
        Gt(Kt, "hostile", -1),
        Gt(Kt, "hostilities", -1),
        Gt(Kt, "hostility", -1),
        Gt(Kt, "hotbeds", -1),
        Gt(Kt, "hothead", -1),
        Gt(Kt, "hotheaded", -1),
        Gt(Kt, "hothouse", -1),
        Gt(Kt, "hubris", -1),
        Gt(Kt, "huckster", -1),
        Gt(Kt, "hum", -1),
        Gt(Kt, "humid", -1),
        Gt(Kt, "humiliate", -3),
        Gt(Kt, "humiliating", -3),
        Gt(Kt, "humiliation", -3),
        Gt(Kt, "humming", -1),
        Gt(Kt, "hung", -3),
        Gt(Kt, "hurt", -5),
        Gt(Kt, "hurted", -5),
        Gt(Kt, "hurtful", -5),
        Gt(Kt, "hurting", -5),
        Gt(Kt, "hurts", -4),
        Gt(Kt, "hustler", -1),
        Gt(Kt, "hype", -1),
        Gt(Kt, "hypocricy", -3),
        Gt(Kt, "hypocrisy", -3),
        Gt(Kt, "hypocrite", -3),
        Gt(Kt, "hypocrites", -3),
        Gt(Kt, "hypocritical", -3),
        Gt(Kt, "hypocritically", -3),
        Gt(Kt, "hysteria", -2),
        Gt(Kt, "hysteric", -2),
        Gt(Kt, "hysterical", -2),
        Gt(Kt, "hysterically", -2),
        Gt(Kt, "hysterics", -2),
        Gt(Kt, "idiocies", -1),
        Gt(Kt, "idiocy", -1),
        Gt(Kt, "idiot", -3),
        Gt(Kt, "idiotic", -3),
        Gt(Kt, "idiotically", -3),
        Gt(Kt, "idiots", -3),
        Gt(Kt, "idle", -1),
        Gt(Kt, "ignoble", -1),
        Gt(Kt, "ignominious", -3),
        Gt(Kt, "ignominiously", -3),
        Gt(Kt, "ignominy", -3),
        Gt(Kt, "ignorance", -5),
        Gt(Kt, "ignorant", -5),
        Gt(Kt, "ignore", -5),
        Gt(Kt, "ill-advised", -2),
        Gt(Kt, "ill-conceived", -2),
        Gt(Kt, "ill-defined", -2),
        Gt(Kt, "ill-designed", -2),
        Gt(Kt, "ill-fated", -2),
        Gt(Kt, "ill-favored", -2),
        Gt(Kt, "ill-formed", -2),
        Gt(Kt, "ill-mannered", -2),
        Gt(Kt, "ill-natured", -2),
        Gt(Kt, "ill-sorted", -2),
        Gt(Kt, "ill-tempered", -2),
        Gt(Kt, "ill-treated", -2),
        Gt(Kt, "ill-treatment", -2),
        Gt(Kt, "ill-usage", -2),
        Gt(Kt, "ill-used", -2),
        Gt(Kt, "illegal", -4),
        Gt(Kt, "illegally", -4),
        Gt(Kt, "illegitimate", -1),
        Gt(Kt, "illicit", -1),
        Gt(Kt, "illiterate", -1),
        Gt(Kt, "illness", -1),
        Gt(Kt, "illogic", -1),
        Gt(Kt, "illogical", -1),
        Gt(Kt, "illogically", -1),
        Gt(Kt, "illusion", -1),
        Gt(Kt, "illusions", -1),
        Gt(Kt, "illusory", -1),
        Gt(Kt, "imaginary", -1),
        Gt(Kt, "imbalance", -1),
        Gt(Kt, "imbecile", -1),
        Gt(Kt, "imbroglio", -1),
        Gt(Kt, "immaterial", -1),
        Gt(Kt, "immature", -1),
        Gt(Kt, "imminence", -1),
        Gt(Kt, "imminently", -1),
        Gt(Kt, "immobilized", -1),
        Gt(Kt, "immoderate", -1),
        Gt(Kt, "immoderately", -1),
        Gt(Kt, "immodest", -1),
        Gt(Kt, "immoral", -1),
        Gt(Kt, "immorality", -1),
        Gt(Kt, "immorally", -1),
        Gt(Kt, "immovable", -1),
        Gt(Kt, "impair", -3),
        Gt(Kt, "impaired", -1),
        Gt(Kt, "impasse", -1),
        Gt(Kt, "impatience", -2),
        Gt(Kt, "impatient", -1),
        Gt(Kt, "impatiently", -1),
        Gt(Kt, "impeach", -1),
        Gt(Kt, "impedance", -1),
        Gt(Kt, "impede", -1),
        Gt(Kt, "impediment", -1),
        Gt(Kt, "impending", -1),
        Gt(Kt, "impenitent", -1),
        Gt(Kt, "imperfect", -1),
        Gt(Kt, "imperfection", -1),
        Gt(Kt, "imperfections", -1),
        Gt(Kt, "imperfectly", -3),
        Gt(Kt, "imperialist", -2),
        Gt(Kt, "imperil", -2),
        Gt(Kt, "imperious", -1),
        Gt(Kt, "imperiously", -1),
        Gt(Kt, "impermissible", -1),
        Gt(Kt, "impersonal", -1),
        Gt(Kt, "impertinent", -1),
        Gt(Kt, "impetuous", -1),
        Gt(Kt, "impetuously", -1),
        Gt(Kt, "impiety", -1),
        Gt(Kt, "impinge", -1),
        Gt(Kt, "impious", -1),
        Gt(Kt, "implacable", -1),
        Gt(Kt, "implausible", -1),
        Gt(Kt, "implausibly", -1),
        Gt(Kt, "implicate", -1),
        Gt(Kt, "implication", -1),
        Gt(Kt, "implode", -2),
        Gt(Kt, "impolite", -1),
        Gt(Kt, "impolitely", -1),
        Gt(Kt, "impolitic", -1),
        Gt(Kt, "importunate", -1),
        Gt(Kt, "importune", -1),
        Gt(Kt, "impose", -1),
        Gt(Kt, "imposers", -1),
        Gt(Kt, "imposing", -1),
        Gt(Kt, "imposition", -1),
        Gt(Kt, "impossible", -3),
        Gt(Kt, "impossiblity", -3),
        Gt(Kt, "impossibly", -1),
        Gt(Kt, "impotent", -2),
        Gt(Kt, "impoverish", -1),
        Gt(Kt, "impoverished", -1),
        Gt(Kt, "impractical", -1),
        Gt(Kt, "imprecate", -1),
        Gt(Kt, "imprecise", -2),
        Gt(Kt, "imprecisely", -1),
        Gt(Kt, "imprecision", -1),
        Gt(Kt, "imprison", -1),
        Gt(Kt, "imprisonment", -1),
        Gt(Kt, "improbability", -1),
        Gt(Kt, "improbable", -1),
        Gt(Kt, "improbably", -1),
        Gt(Kt, "improper", -1),
        Gt(Kt, "improperly", -1),
        Gt(Kt, "impropriety", -1),
        Gt(Kt, "imprudence", -1),
        Gt(Kt, "imprudent", -1),
        Gt(Kt, "impudence", -1),
        Gt(Kt, "impudent", -1),
        Gt(Kt, "impudently", -1),
        Gt(Kt, "impugn", -1),
        Gt(Kt, "impulsive", -3),
        Gt(Kt, "impulsively", -3),
        Gt(Kt, "impunity", -1),
        Gt(Kt, "impure", -1),
        Gt(Kt, "impurity", -1),
        Gt(Kt, "inability", -1),
        Gt(Kt, "inaccuracies", -1),
        Gt(Kt, "inaccuracy", -1),
        Gt(Kt, "inaccurate", -1),
        Gt(Kt, "inaccurately", -1),
        Gt(Kt, "inaction", -1),
        Gt(Kt, "inactive", -1),
        Gt(Kt, "inadequacy", -1),
        Gt(Kt, "inadequate", -1),
        Gt(Kt, "inadequately", -1),
        Gt(Kt, "inadverent", -1),
        Gt(Kt, "inadverently", -1),
        Gt(Kt, "inadvisable", -1),
        Gt(Kt, "inadvisably", -1),
        Gt(Kt, "inane", -1),
        Gt(Kt, "inanely", -1),
        Gt(Kt, "inappropriate", -1),
        Gt(Kt, "inappropriately", -1),
        Gt(Kt, "inapt", -1),
        Gt(Kt, "inaptitude", -1),
        Gt(Kt, "inarticulate", -1),
        Gt(Kt, "inattentive", -1),
        Gt(Kt, "inaudible", -1),
        Gt(Kt, "incapable", -1),
        Gt(Kt, "incapably", -1),
        Gt(Kt, "incautious", -1),
        Gt(Kt, "incendiary", -1),
        Gt(Kt, "incense", -2),
        Gt(Kt, "incessant", -1),
        Gt(Kt, "incessantly", -1),
        Gt(Kt, "incite", -1),
        Gt(Kt, "incitement", -1),
        Gt(Kt, "incivility", -1),
        Gt(Kt, "inclement", -1),
        Gt(Kt, "incognizant", -1),
        Gt(Kt, "incoherence", -1),
        Gt(Kt, "incoherent", -1),
        Gt(Kt, "incoherently", -1),
        Gt(Kt, "incommensurate", -1),
        Gt(Kt, "incomparable", -1),
        Gt(Kt, "incomparably", -1),
        Gt(Kt, "incompatability", -2),
        Gt(Kt, "incompatibility", -2),
        Gt(Kt, "incompatible", -2),
        Gt(Kt, "incompetence", -2),
        Gt(Kt, "incompetent", -2),
        Gt(Kt, "incompetently", -2),
        Gt(Kt, "incomplete", -3),
        Gt(Kt, "incompliant", -3),
        Gt(Kt, "incomprehensible", -3),
        Gt(Kt, "incomprehension", -3),
        Gt(Kt, "inconceivable", -3),
        Gt(Kt, "inconceivably", -3),
        Gt(Kt, "incongruous", -3),
        Gt(Kt, "incongruously", -3),
        Gt(Kt, "inconsequent", -3),
        Gt(Kt, "inconsequential", -1),
        Gt(Kt, "inconsequentially", -1),
        Gt(Kt, "inconsequently", -1),
        Gt(Kt, "inconsiderate", -1),
        Gt(Kt, "inconsiderately", -1),
        Gt(Kt, "inconsistence", -4),
        Gt(Kt, "inconsistencies", -1),
        Gt(Kt, "inconsistency", -1),
        Gt(Kt, "inconsistent", -4),
        Gt(Kt, "inconsolable", -1),
        Gt(Kt, "inconsolably", -1),
        Gt(Kt, "inconstant", -1),
        Gt(Kt, "inconvenience", -1),
        Gt(Kt, "inconveniently", -1),
        Gt(Kt, "incorrect", -5),
        Gt(Kt, "incorrectly", -1),
        Gt(Kt, "incorrigible", -1),
        Gt(Kt, "incorrigibly", -1),
        Gt(Kt, "incredulous", -1),
        Gt(Kt, "incredulously", -1),
        Gt(Kt, "inculcate", -1),
        Gt(Kt, "indecency", -5),
        Gt(Kt, "indecent", -5),
        Gt(Kt, "indecently", -5),
        Gt(Kt, "indecision", -2),
        Gt(Kt, "indecisive", -2),
        Gt(Kt, "indecisively", -1),
        Gt(Kt, "indecorum", -1),
        Gt(Kt, "indefensible", -1),
        Gt(Kt, "indelicate", -1),
        Gt(Kt, "indeterminable", -1),
        Gt(Kt, "indeterminably", -1),
        Gt(Kt, "indeterminate", -1),
        Gt(Kt, "indifference", -1),
        Gt(Kt, "indifferent", -1),
        Gt(Kt, "indigent", -1),
        Gt(Kt, "indignant", -1),
        Gt(Kt, "indignantly", -1),
        Gt(Kt, "indignation", -1),
        Gt(Kt, "indignity", -1),
        Gt(Kt, "indiscernible", -1),
        Gt(Kt, "indiscreet", -1),
        Gt(Kt, "indiscreetly", -1),
        Gt(Kt, "indiscretion", -1),
        Gt(Kt, "indiscriminate", -2),
        Gt(Kt, "indiscriminately", -2),
        Gt(Kt, "indiscriminating", -2),
        Gt(Kt, "indistinguishable", -2),
        Gt(Kt, "indoctrinate", -1),
        Gt(Kt, "indoctrination", -1),
        Gt(Kt, "indolent", -1),
        Gt(Kt, "indulge", -1),
        Gt(Kt, "ineffective", -1),
        Gt(Kt, "ineffectively", -1),
        Gt(Kt, "ineffectiveness", -1),
        Gt(Kt, "ineffectual", -1),
        Gt(Kt, "ineffectually", -1),
        Gt(Kt, "ineffectualness", -1),
        Gt(Kt, "inefficacious", -1),
        Gt(Kt, "inefficacy", -1),
        Gt(Kt, "inefficiency", -1),
        Gt(Kt, "inefficient", -1),
        Gt(Kt, "inefficiently", -1),
        Gt(Kt, "inelegance", -1),
        Gt(Kt, "inelegant", -1),
        Gt(Kt, "ineligible", -1),
        Gt(Kt, "ineloquent", -1),
        Gt(Kt, "ineloquently", -1),
        Gt(Kt, "inept", -1),
        Gt(Kt, "ineptitude", -1),
        Gt(Kt, "ineptly", -1),
        Gt(Kt, "inequalities", -1),
        Gt(Kt, "inequality", -1),
        Gt(Kt, "inequitable", -1),
        Gt(Kt, "inequitably", -1),
        Gt(Kt, "inequities", -1),
        Gt(Kt, "inescapable", -1),
        Gt(Kt, "inescapably", -1),
        Gt(Kt, "inessential", -1),
        Gt(Kt, "inevitable", -1),
        Gt(Kt, "inevitably", -1),
        Gt(Kt, "inexcusable", -1),
        Gt(Kt, "inexcusably", -1),
        Gt(Kt, "inexorable", -1),
        Gt(Kt, "inexorably", -1),
        Gt(Kt, "inexperience", -1),
        Gt(Kt, "inexperienced", -1),
        Gt(Kt, "inexpert", -1),
        Gt(Kt, "inexpertly", -1),
        Gt(Kt, "inexpiable", -1),
        Gt(Kt, "inexplainable", -1),
        Gt(Kt, "inextricable", -1),
        Gt(Kt, "inextricably", -1),
        Gt(Kt, "infamous", -1),
        Gt(Kt, "infamously", -1),
        Gt(Kt, "infamy", -1),
        Gt(Kt, "infected", -4),
        Gt(Kt, "infection", -1),
        Gt(Kt, "infections", -1),
        Gt(Kt, "inferior", -1),
        Gt(Kt, "inferiority", -1),
        Gt(Kt, "infernal", -1),
        Gt(Kt, "infest", -1),
        Gt(Kt, "infested", -1),
        Gt(Kt, "infidel", -1),
        Gt(Kt, "infidels", -1),
        Gt(Kt, "infiltrator", -1),
        Gt(Kt, "infiltrators", -1),
        Gt(Kt, "infirm", -1),
        Gt(Kt, "inflame", -1),
        Gt(Kt, "inflammation", -1),
        Gt(Kt, "inflammatory", -1),
        Gt(Kt, "inflammed", -1),
        Gt(Kt, "inflated", -1),
        Gt(Kt, "inflationary", -1),
        Gt(Kt, "inflexible", -1),
        Gt(Kt, "inflict", -1),
        Gt(Kt, "infraction", -1),
        Gt(Kt, "infringe", -1),
        Gt(Kt, "infringement", -1),
        Gt(Kt, "infringements", -1),
        Gt(Kt, "infuriate", -2),
        Gt(Kt, "infuriated", -2),
        Gt(Kt, "infuriating", -2),
        Gt(Kt, "infuriatingly", -2),
        Gt(Kt, "inglorious", -2),
        Gt(Kt, "ingrate", -2),
        Gt(Kt, "ingratitude", -2),
        Gt(Kt, "inhibit", -2),
        Gt(Kt, "inhibition", -2),
        Gt(Kt, "inhospitable", -2),
        Gt(Kt, "inhospitality", -2),
        Gt(Kt, "inhuman", -1),
        Gt(Kt, "inhumane", -3),
        Gt(Kt, "inhumanity", -3),
        Gt(Kt, "inimical", -1),
        Gt(Kt, "inimically", -1),
        Gt(Kt, "iniquitous", -1),
        Gt(Kt, "iniquity", -1),
        Gt(Kt, "injudicious", -1),
        Gt(Kt, "injure", -3),
        Gt(Kt, "injurious", -3),
        Gt(Kt, "injury", -3),
        Gt(Kt, "injustice", -3),
        Gt(Kt, "injustices", -1),
        Gt(Kt, "innuendo", -1),
        Gt(Kt, "inoperable", -1),
        Gt(Kt, "inopportune", -1),
        Gt(Kt, "inordinate", -1),
        Gt(Kt, "inordinately", -1),
        Gt(Kt, "insane", -3),
        Gt(Kt, "insanely", -3),
        Gt(Kt, "insanity", -3),
        Gt(Kt, "insatiable", -1),
        Gt(Kt, "insecure", -1),
        Gt(Kt, "insecurity", -1),
        Gt(Kt, "insensible", -2),
        Gt(Kt, "insensitive", -2),
        Gt(Kt, "insensitively", -3),
        Gt(Kt, "insensitivity", -3),
        Gt(Kt, "insidious", -3),
        Gt(Kt, "insidiously", -2),
        Gt(Kt, "insignificance", -3),
        Gt(Kt, "insignificant", -3),
        Gt(Kt, "insignificantly", -3),
        Gt(Kt, "insincere", -4),
        Gt(Kt, "insincerely", -4),
        Gt(Kt, "insincerity", -4),
        Gt(Kt, "insinuate", -2),
        Gt(Kt, "insinuating", -1),
        Gt(Kt, "insinuation", -1),
        Gt(Kt, "insociable", -1),
        Gt(Kt, "insolence", -1),
        Gt(Kt, "insolent", -1),
        Gt(Kt, "insolently", -1),
        Gt(Kt, "insolvent", -1),
        Gt(Kt, "insouciance", -1),
        Gt(Kt, "instability", -1),
        Gt(Kt, "instable", -2),
        Gt(Kt, "instigate", -2),
        Gt(Kt, "instigator", -2),
        Gt(Kt, "instigators", -2),
        Gt(Kt, "insubordinate", -4),
        Gt(Kt, "insubstantial", -4),
        Gt(Kt, "insubstantially", -4),
        Gt(Kt, "insufferable", -2),
        Gt(Kt, "insufferably", -2),
        Gt(Kt, "insufficiency", -2),
        Gt(Kt, "insufficient", -2),
        Gt(Kt, "insufficiently", -2),
        Gt(Kt, "insular", -1),
        Gt(Kt, "insult", -5),
        Gt(Kt, "insulted", -1),
        Gt(Kt, "insulting", -1),
        Gt(Kt, "insultingly", -1),
        Gt(Kt, "insults", -1),
        Gt(Kt, "insupportable", -1),
        Gt(Kt, "insupportably", -1),
        Gt(Kt, "insurmountable", -1),
        Gt(Kt, "insurmountably", -1),
        Gt(Kt, "insurrection", -1),
        Gt(Kt, "intefere", -1),
        Gt(Kt, "inteferes", -1),
        Gt(Kt, "intense", -1),
        Gt(Kt, "interfere", -1),
        Gt(Kt, "interference", -1),
        Gt(Kt, "interferes", -1),
        Gt(Kt, "intermittent", -1),
        Gt(Kt, "interrupt", -1),
        Gt(Kt, "interruption", -1),
        Gt(Kt, "interruptions", -1),
        Gt(Kt, "intimidate", -1),
        Gt(Kt, "intimidating", -1),
        Gt(Kt, "intimidatingly", -1),
        Gt(Kt, "intimidation", -1),
        Gt(Kt, "intolerable", -1),
        Gt(Kt, "intolerablely", -1),
        Gt(Kt, "intolerance", -1),
        Gt(Kt, "intoxicate", -1),
        Gt(Kt, "intractable", -1),
        Gt(Kt, "intransigence", -1),
        Gt(Kt, "intransigent", -1),
        Gt(Kt, "intrude", -4),
        Gt(Kt, "intrusion", -4),
        Gt(Kt, "intrusive", -1),
        Gt(Kt, "inundate", -1),
        Gt(Kt, "inundated", -1),
        Gt(Kt, "invader", -1),
        Gt(Kt, "invalid", -5),
        Gt(Kt, "invalidate", -1),
        Gt(Kt, "invalidity", -1),
        Gt(Kt, "invasive", -1),
        Gt(Kt, "invective", -1),
        Gt(Kt, "inveigle", -1),
        Gt(Kt, "invidious", -1),
        Gt(Kt, "invidiously", -1),
        Gt(Kt, "invidiousness", -1),
        Gt(Kt, "invisible", -4),
        Gt(Kt, "involuntarily", -1),
        Gt(Kt, "involuntary", -1),
        Gt(Kt, "irascible", -1),
        Gt(Kt, "irate", -1),
        Gt(Kt, "irately", -1),
        Gt(Kt, "ire", -1),
        Gt(Kt, "irk", -1),
        Gt(Kt, "irked", -1),
        Gt(Kt, "irking", -1),
        Gt(Kt, "irks", -1),
        Gt(Kt, "irksome", -1),
        Gt(Kt, "irksomely", -1),
        Gt(Kt, "irksomeness", -1),
        Gt(Kt, "irksomenesses", -1),
        Gt(Kt, "ironic", -3),
        Gt(Kt, "ironical", -3),
        Gt(Kt, "ironically", -3),
        Gt(Kt, "ironies", -3),
        Gt(Kt, "irony", -3),
        Gt(Kt, "irragularity", -1),
        Gt(Kt, "irrational", -1),
        Gt(Kt, "irrationalities", -1),
        Gt(Kt, "irrationality", -1),
        Gt(Kt, "irrationally", -1),
        Gt(Kt, "irrationals", -1),
        Gt(Kt, "irreconcilable", -1),
        Gt(Kt, "irrecoverable", -1),
        Gt(Kt, "irrecoverableness", -1),
        Gt(Kt, "irrecoverablenesses", -1),
        Gt(Kt, "irrecoverably", -1),
        Gt(Kt, "irredeemable", -1),
        Gt(Kt, "irredeemably", -1),
        Gt(Kt, "irreformable", -1),
        Gt(Kt, "irregular", -2),
        Gt(Kt, "irregularity", -2),
        Gt(Kt, "irrelevance", -2),
        Gt(Kt, "irrelevant", -2),
        Gt(Kt, "irreparable", -2),
        Gt(Kt, "irreplacible", -2),
        Gt(Kt, "irrepressible", -2),
        Gt(Kt, "irresolute", -2),
        Gt(Kt, "irresolvable", -2),
        Gt(Kt, "irresponsible", -2),
        Gt(Kt, "irresponsibly", -1),
        Gt(Kt, "irretating", -1),
        Gt(Kt, "irretrievable", -1),
        Gt(Kt, "irreversible", -1),
        Gt(Kt, "irritable", -1),
        Gt(Kt, "irritably", -1),
        Gt(Kt, "irritant", -1),
        Gt(Kt, "irritate", -1),
        Gt(Kt, "irritated", -1),
        Gt(Kt, "irritating", -1),
        Gt(Kt, "irritation", -1),
        Gt(Kt, "irritations", -1),
        Gt(Kt, "isolate", -2),
        Gt(Kt, "isolated", -2),
        Gt(Kt, "isolation", -2),
        Gt(Kt, "issue", -2),
        Gt(Kt, "issues", -1),
        Gt(Kt, "itch", -1),
        Gt(Kt, "itching", -3),
        Gt(Kt, "itchy", -1),
        Gt(Kt, "jabber", -1),
        Gt(Kt, "jaded", -1),
        Gt(Kt, "jagged", -1),
        Gt(Kt, "jam", -1),
        Gt(Kt, "jarring", -1),
        Gt(Kt, "jaundiced", -1),
        Gt(Kt, "jealous", -2),
        Gt(Kt, "jealously", -2),
        Gt(Kt, "jealousness", -2),
        Gt(Kt, "jealousy", -2),
        Gt(Kt, "jeer", -1),
        Gt(Kt, "jeering", -1),
        Gt(Kt, "jeeringly", -1),
        Gt(Kt, "jeers", -1),
        Gt(Kt, "jeopardize", -1),
        Gt(Kt, "jeopardy", -1),
        Gt(Kt, "jerk", -1),
        Gt(Kt, "jerky", -1),
        Gt(Kt, "jitter", -1),
        Gt(Kt, "jitters", -1),
        Gt(Kt, "jittery", -1),
        Gt(Kt, "job-killing", -1),
        Gt(Kt, "jobless", -3),
        Gt(Kt, "joke", -1),
        Gt(Kt, "joker", -1),
        Gt(Kt, "jolt", -3),
        Gt(Kt, "judder", -1),
        Gt(Kt, "juddering", -1),
        Gt(Kt, "judders", -1),
        Gt(Kt, "jumpy", -1),
        Gt(Kt, "junk", -3),
        Gt(Kt, "junky", -1),
        Gt(Kt, "junkyard", -1),
        Gt(Kt, "jutter", -1),
        Gt(Kt, "jutters", -1),
        Gt(Kt, "kaput", -1),
        Gt(Kt, "kill", -5),
        Gt(Kt, "killed", -5),
        Gt(Kt, "killer", -4),
        Gt(Kt, "killing", -4),
        Gt(Kt, "killjoy", -4),
        Gt(Kt, "kills", -4),
        Gt(Kt, "knave", -1),
        Gt(Kt, "knife", -1),
        Gt(Kt, "knock", -2),
        Gt(Kt, "knotted", -1),
        Gt(Kt, "kook", -1),
        Gt(Kt, "kooky", -1),
        Gt(Kt, "lack", -3),
        Gt(Kt, "lackadaisical", -1),
        Gt(Kt, "lacked", -1),
        Gt(Kt, "lackey", -1),
        Gt(Kt, "lackeys", -1),
        Gt(Kt, "lacking", -1),
        Gt(Kt, "lackluster", -1),
        Gt(Kt, "lacks", -1),
        Gt(Kt, "laconic", -1),
        Gt(Kt, "lag", -1),
        Gt(Kt, "lagged", -1),
        Gt(Kt, "lagging", -1),
        Gt(Kt, "laggy", -1),
        Gt(Kt, "lags", -1),
        Gt(Kt, "laid-off", -1),
        Gt(Kt, "lambast", -1),
        Gt(Kt, "lambaste", -1),
        Gt(Kt, "lame", -1),
        Gt(Kt, "lame-duck", -1),
        Gt(Kt, "lament", -1),
        Gt(Kt, "lamentable", -1),
        Gt(Kt, "lamentably", -1),
        Gt(Kt, "languid", -1),
        Gt(Kt, "languish", -1),
        Gt(Kt, "languor", -1),
        Gt(Kt, "languorous", -1),
        Gt(Kt, "languorously", -1),
        Gt(Kt, "lanky", -1),
        Gt(Kt, "lapse", -1),
        Gt(Kt, "lapsed", -1),
        Gt(Kt, "lapses", -1),
        Gt(Kt, "lascivious", -1),
        Gt(Kt, "last-ditch", -1),
        Gt(Kt, "latency", -1),
        Gt(Kt, "laughable", -1),
        Gt(Kt, "laughably", -1),
        Gt(Kt, "laughingstock", -1),
        Gt(Kt, "lawbreaker", -1),
        Gt(Kt, "lawbreaking", -1),
        Gt(Kt, "lawless", -1),
        Gt(Kt, "lawlessness", -1),
        Gt(Kt, "layoff", -1),
        Gt(Kt, "layoff-happy", -1),
        Gt(Kt, "lazy", -3),
        Gt(Kt, "leak", -1),
        Gt(Kt, "leakage", -1),
        Gt(Kt, "leakages", -1),
        Gt(Kt, "leaking", -1),
        Gt(Kt, "leaks", -1),
        Gt(Kt, "leaky", -1),
        Gt(Kt, "lech", -1),
        Gt(Kt, "lecher", -1),
        Gt(Kt, "lecherous", -1),
        Gt(Kt, "lechery", -1),
        Gt(Kt, "leech", -1),
        Gt(Kt, "leer", -1),
        Gt(Kt, "leery", -1),
        Gt(Kt, "left-leaning", -1),
        Gt(Kt, "lemon", -1),
        Gt(Kt, "lengthy", -1),
        Gt(Kt, "less-developed", -1),
        Gt(Kt, "lesser-known", -1),
        Gt(Kt, "letch", -1),
        Gt(Kt, "lethal", -1),
        Gt(Kt, "lethargic", -1),
        Gt(Kt, "lethargy", -1),
        Gt(Kt, "lewd", -1),
        Gt(Kt, "lewdly", -1),
        Gt(Kt, "lewdness", -1),
        Gt(Kt, "liability", -1),
        Gt(Kt, "liable", -2),
        Gt(Kt, "liar", -3),
        Gt(Kt, "liars", -4),
        Gt(Kt, "licentious", -1),
        Gt(Kt, "licentiously", -1),
        Gt(Kt, "licentiousness", -1),
        Gt(Kt, "lie", -3),
        Gt(Kt, "lied", -3),
        Gt(Kt, "lier", -3),
        Gt(Kt, "lies", -3),
        Gt(Kt, "life-threatening", -4),
        Gt(Kt, "lifeless", -4),
        Gt(Kt, "limit", -3),
        Gt(Kt, "limitation", -3),
        Gt(Kt, "limitations", -3),
        Gt(Kt, "limited", -3),
        Gt(Kt, "limits", -3),
        Gt(Kt, "limp", -1),
        Gt(Kt, "listless", -1),
        Gt(Kt, "litigious", -1),
        Gt(Kt, "little-known", -1),
        Gt(Kt, "livid", -1),
        Gt(Kt, "lividly", -1),
        Gt(Kt, "loath", -1),
        Gt(Kt, "loathe", -1),
        Gt(Kt, "loathing", -4),
        Gt(Kt, "loathly", -4),
        Gt(Kt, "loathsome", -1),
        Gt(Kt, "loathsomely", -1),
        Gt(Kt, "lone", -1),
        Gt(Kt, "loneliness", -1),
        Gt(Kt, "lonely", -1),
        Gt(Kt, "loner", -1),
        Gt(Kt, "lonesome", -1),
        Gt(Kt, "long-time", -1),
        Gt(Kt, "long-winded", -1),
        Gt(Kt, "longing", -3),
        Gt(Kt, "longingly", -3),
        Gt(Kt, "loophole", -2),
        Gt(Kt, "loopholes", -2),
        Gt(Kt, "loose", -3),
        Gt(Kt, "loot", -1),
        Gt(Kt, "lorn", -1),
        Gt(Kt, "lose", -5),
        Gt(Kt, "loser", -5),
        Gt(Kt, "losers", -5),
        Gt(Kt, "loses", -5),
        Gt(Kt, "losing", -5),
        Gt(Kt, "loss", -5),
        Gt(Kt, "losses", -5),
        Gt(Kt, "lost", -5),
        Gt(Kt, "loud", -2),
        Gt(Kt, "louder", -2),
        Gt(Kt, "lousy", -2),
        Gt(Kt, "loveless", -2),
        Gt(Kt, "lovelorn", -2),
        Gt(Kt, "low-rated", -2),
        Gt(Kt, "lowly", -2),
        Gt(Kt, "ludicrous", -2),
        Gt(Kt, "ludicrously", -2),
        Gt(Kt, "lugubrious", -2),
        Gt(Kt, "lukewarm", -2),
        Gt(Kt, "lull", -2),
        Gt(Kt, "lumpy", -2),
        Gt(Kt, "lunatic", -2),
        Gt(Kt, "lunaticism", -2),
        Gt(Kt, "lurch", -2),
        Gt(Kt, "lure", -1),
        Gt(Kt, "lurid", -1),
        Gt(Kt, "lurk", -1),
        Gt(Kt, "lurking", -1),
        Gt(Kt, "lying", -1),
        Gt(Kt, "macabre", -1),
        Gt(Kt, "mad", -1),
        Gt(Kt, "madden", -1),
        Gt(Kt, "maddening", -1),
        Gt(Kt, "maddeningly", -1),
        Gt(Kt, "madder", -1),
        Gt(Kt, "madly", -3),
        Gt(Kt, "madman", -3),
        Gt(Kt, "madness", -3),
        Gt(Kt, "maladjusted", -3),
        Gt(Kt, "maladjustment", -3),
        Gt(Kt, "malady", -3),
        Gt(Kt, "malaise", -3),
        Gt(Kt, "malcontent", -3),
        Gt(Kt, "malcontented", -1),
        Gt(Kt, "maledict", -1),
        Gt(Kt, "malevolence", -1),
        Gt(Kt, "malevolent", -1),
        Gt(Kt, "malevolently", -1),
        Gt(Kt, "malice", -1),
        Gt(Kt, "malicious", -1),
        Gt(Kt, "maliciously", -1),
        Gt(Kt, "maliciousness", -1),
        Gt(Kt, "malign", -2),
        Gt(Kt, "malignant", -2),
        Gt(Kt, "malodorous", -2),
        Gt(Kt, "maltreatment", -2),
        Gt(Kt, "mangle", -2),
        Gt(Kt, "mangled", -2),
        Gt(Kt, "mangles", -2),
        Gt(Kt, "mangling", -2),
        Gt(Kt, "mania", -3),
        Gt(Kt, "maniac", -3),
        Gt(Kt, "maniacal", -3),
        Gt(Kt, "manic", -3),
        Gt(Kt, "manipulate", -3),
        Gt(Kt, "manipulation", -3),
        Gt(Kt, "manipulative", -3),
        Gt(Kt, "manipulators", -3),
        Gt(Kt, "mar", -1),
        Gt(Kt, "marginal", -1),
        Gt(Kt, "marginally", -1),
        Gt(Kt, "martyrdom", -1),
        Gt(Kt, "martyrdom-seeking", -1),
        Gt(Kt, "mashed", -1),
        Gt(Kt, "massacre", -1),
        Gt(Kt, "massacres", -1),
        Gt(Kt, "matte", -1),
        Gt(Kt, "mawkish", -1),
        Gt(Kt, "mawkishly", -1),
        Gt(Kt, "mawkishness", -1),
        Gt(Kt, "meager", -1),
        Gt(Kt, "meaningless", -4),
        Gt(Kt, "meanness", -2),
        Gt(Kt, "measly", -2),
        Gt(Kt, "meddle", -2),
        Gt(Kt, "meddlesome", -2),
        Gt(Kt, "mediocre", -2),
        Gt(Kt, "mediocrity", -2),
        Gt(Kt, "melancholy", -2),
        Gt(Kt, "melodramatic", -2),
        Gt(Kt, "melodramatically", -1),
        Gt(Kt, "meltdown", -2),
        Gt(Kt, "menace", -2),
        Gt(Kt, "menacing", -2),
        Gt(Kt, "menacingly", -2),
        Gt(Kt, "mendacious", -2),
        Gt(Kt, "mendacity", -2),
        Gt(Kt, "menial", -2),
        Gt(Kt, "merciless", -2),
        Gt(Kt, "mercilessly", -1),
        Gt(Kt, "mess", -1),
        Gt(Kt, "messed", -1),
        Gt(Kt, "messes", -1),
        Gt(Kt, "messing", -1),
        Gt(Kt, "messy", -1),
        Gt(Kt, "midget", -1),
        Gt(Kt, "miff", -1),
        Gt(Kt, "militancy", -1),
        Gt(Kt, "mindless", -1),
        Gt(Kt, "mindlessly", -1),
        Gt(Kt, "mirage", -1),
        Gt(Kt, "mire", -1),
        Gt(Kt, "misalign", -1),
        Gt(Kt, "misaligned", -1),
        Gt(Kt, "misaligns", -1),
        Gt(Kt, "misapprehend", -1),
        Gt(Kt, "misbecome", -1),
        Gt(Kt, "misbecoming", -1),
        Gt(Kt, "misbegotten", -1),
        Gt(Kt, "misbehave", -1),
        Gt(Kt, "misbehavior", -1),
        Gt(Kt, "miscalculate", -1),
        Gt(Kt, "miscalculation", -1),
        Gt(Kt, "miscellaneous", -1),
        Gt(Kt, "mischief", -1),
        Gt(Kt, "mischievous", -1),
        Gt(Kt, "mischievously", -1),
        Gt(Kt, "misconception", -1),
        Gt(Kt, "misconceptions", -3),
        Gt(Kt, "miscreant", -3),
        Gt(Kt, "miscreants", -3),
        Gt(Kt, "misdirection", -3),
        Gt(Kt, "miser", -3),
        Gt(Kt, "miserable", -3),
        Gt(Kt, "miserableness", -3),
        Gt(Kt, "miserably", -3),
        Gt(Kt, "miseries", -2),
        Gt(Kt, "miserly", -2),
        Gt(Kt, "misery", -2),
        Gt(Kt, "misfit", -1),
        Gt(Kt, "misfortune", -5),
        Gt(Kt, "misgiving", -3),
        Gt(Kt, "misgivings", -3),
        Gt(Kt, "misguidance", -3),
        Gt(Kt, "misguide", -3),
        Gt(Kt, "misguided", -3),
        Gt(Kt, "mishandle", -3),
        Gt(Kt, "mishap", -4),
        Gt(Kt, "misinform", -2),
        Gt(Kt, "misinformed", -2),
        Gt(Kt, "misinterpret", -2),
        Gt(Kt, "misjudge", -2),
        Gt(Kt, "misjudgment", -3),
        Gt(Kt, "mislead", -3),
        Gt(Kt, "misleading", -3),
        Gt(Kt, "misleadingly", -3),
        Gt(Kt, "mislike", -4),
        Gt(Kt, "mismanage", -2),
        Gt(Kt, "mispronounce", -2),
        Gt(Kt, "mispronounced", -2),
        Gt(Kt, "mispronounces", -2),
        Gt(Kt, "misread", -3),
        Gt(Kt, "misreading", -3),
        Gt(Kt, "misrepresent", -2),
        Gt(Kt, "misrepresentation", -2),
        Gt(Kt, "miss", -1),
        Gt(Kt, "missed", -1),
        Gt(Kt, "misses", -1),
        Gt(Kt, "misstatement", -1),
        Gt(Kt, "mist", -1),
        Gt(Kt, "mistake", -3),
        Gt(Kt, "mistaken", -3),
        Gt(Kt, "mistakenly", -3),
        Gt(Kt, "mistakes", -3),
        Gt(Kt, "mistified", -1),
        Gt(Kt, "mistress", -1),
        Gt(Kt, "mistrust", -1),
        Gt(Kt, "mistrustful", -1),
        Gt(Kt, "mistrustfully", -1),
        Gt(Kt, "mists", -1),
        Gt(Kt, "misunderstand", -2),
        Gt(Kt, "misunderstanding", -2),
        Gt(Kt, "misunderstandings", -2),
        Gt(Kt, "misunderstood", -2),
        Gt(Kt, "misuse", -3),
        Gt(Kt, "moan", -1),
        Gt(Kt, "mobster", -1),
        Gt(Kt, "mock", -3),
        Gt(Kt, "mocked", -3),
        Gt(Kt, "mockeries", -1),
        Gt(Kt, "mockery", -1),
        Gt(Kt, "mocking", -1),
        Gt(Kt, "mockingly", -1),
        Gt(Kt, "mocks", -1),
        Gt(Kt, "molest", -5),
        Gt(Kt, "molestation", -5),
        Gt(Kt, "monotonous", -2),
        Gt(Kt, "monotony", -2),
        Gt(Kt, "monster", -5),
        Gt(Kt, "monstrosities", -2),
        Gt(Kt, "monstrosity", -2),
        Gt(Kt, "monstrous", -3),
        Gt(Kt, "monstrously", -3),
        Gt(Kt, "moody", -4),
        Gt(Kt, "moot", -1),
        Gt(Kt, "mope", -1),
        Gt(Kt, "morbid", -3),
        Gt(Kt, "morbidly", -3),
        Gt(Kt, "mordant", -2),
        Gt(Kt, "mordantly", -1),
        Gt(Kt, "moribund", -1),
        Gt(Kt, "moron", -4),
        Gt(Kt, "moronic", -4),
        Gt(Kt, "morons", -4),
        Gt(Kt, "mortification", -1),
        Gt(Kt, "mortified", -1),
        Gt(Kt, "mortify", -3),
        Gt(Kt, "mortifying", -1),
        Gt(Kt, "motionless", -1),
        Gt(Kt, "motley", -1),
        Gt(Kt, "mourn", -4),
        Gt(Kt, "mourner", -3),
        Gt(Kt, "mournful", -3),
        Gt(Kt, "mournfully", -3),
        Gt(Kt, "muddle", -1),
        Gt(Kt, "muddy", -1),
        Gt(Kt, "mudslinger", -1),
        Gt(Kt, "mudslinging", -1),
        Gt(Kt, "mulish", -1),
        Gt(Kt, "multi-polarization", -1),
        Gt(Kt, "mundane", -1),
        Gt(Kt, "murder", -3),
        Gt(Kt, "murderer", -1),
        Gt(Kt, "murderous", -1),
        Gt(Kt, "murderously", -1),
        Gt(Kt, "murky", -1),
        Gt(Kt, "muscle-flexing", -1),
        Gt(Kt, "mushy", -1),
        Gt(Kt, "musty", -1),
        Gt(Kt, "mysterious", -3),
        Gt(Kt, "mysteriously", -3),
        Gt(Kt, "mystery", -3),
        Gt(Kt, "mystify", -3),
        Gt(Kt, "myth", -2),
        Gt(Kt, "nag", -1),
        Gt(Kt, "nagging", -2),
        Gt(Kt, "naive", -5),
        Gt(Kt, "naively", -5),
        Gt(Kt, "narrower", -1),
        Gt(Kt, "nastily", -1),
        Gt(Kt, "nastiness", -1),
        Gt(Kt, "nasty", -3),
        Gt(Kt, "naughty", -4),
        Gt(Kt, "nauseate", -1),
        Gt(Kt, "nauseates", -1),
        Gt(Kt, "nauseating", -1),
        Gt(Kt, "nauseatingly", -1),
        Gt(Kt, "naïve", -3),
        Gt(Kt, "nebulous", -1),
        Gt(Kt, "nebulously", -1),
        Gt(Kt, "needless", -1),
        Gt(Kt, "needlessly", -1),
        Gt(Kt, "needy", -3),
        Gt(Kt, "nefarious", -1),
        Gt(Kt, "nefariously", -1),
        Gt(Kt, "negate", -1),
        Gt(Kt, "negation", -1),
        Gt(Kt, "negative", -5),
        Gt(Kt, "negatives", -4),
        Gt(Kt, "negativity", -4),
        Gt(Kt, "neglect", -4),
        Gt(Kt, "neglected", -3),
        Gt(Kt, "negligence", -3),
        Gt(Kt, "negligent", -3),
        Gt(Kt, "nemesis", -2),
        Gt(Kt, "nepotism", -1),
        Gt(Kt, "nervous", -4),
        Gt(Kt, "nervously", -4),
        Gt(Kt, "nervousness", -4),
        Gt(Kt, "nettle", -1),
        Gt(Kt, "nettlesome", -1),
        Gt(Kt, "neurotic", -1),
        Gt(Kt, "neurotically", -1),
        Gt(Kt, "niggle", -1),
        Gt(Kt, "niggles", -1),
        Gt(Kt, "nightmare", -4),
        Gt(Kt, "nightmarish", -4),
        Gt(Kt, "nightmarishly", -3),
        Gt(Kt, "nitpick", -1),
        Gt(Kt, "nitpicking", -1),
        Gt(Kt, "noise", -3),
        Gt(Kt, "noises", -3),
        Gt(Kt, "noisier", -1),
        Gt(Kt, "noisy", -2),
        Gt(Kt, "non-confidence", -1),
        Gt(Kt, "nonexistent", -1),
        Gt(Kt, "nonresponsive", -1),
        Gt(Kt, "nonsense", -4),
        Gt(Kt, "nosey", -3),
        Gt(Kt, "notoriety", -1),
        Gt(Kt, "notorious", -1),
        Gt(Kt, "notoriously", -1),
        Gt(Kt, "noxious", -1),
        Gt(Kt, "nuisance", -1),
        Gt(Kt, "numb", -3),
        Gt(Kt, "obese", -1),
        Gt(Kt, "object", -1),
        Gt(Kt, "objection", -1),
        Gt(Kt, "objectionable", -1),
        Gt(Kt, "objections", -1),
        Gt(Kt, "oblique", -1),
        Gt(Kt, "obliterate", -1),
        Gt(Kt, "obliterated", -1),
        Gt(Kt, "oblivious", -1),
        Gt(Kt, "obnoxious", -1),
        Gt(Kt, "obnoxiously", -1),
        Gt(Kt, "obscene", -5),
        Gt(Kt, "obscenely", -5),
        Gt(Kt, "obscenity", -5),
        Gt(Kt, "obscure", -1),
        Gt(Kt, "obscured", -1),
        Gt(Kt, "obscures", -1),
        Gt(Kt, "obscurity", -1),
        Gt(Kt, "obsess", -4),
        Gt(Kt, "obsessive", -1),
        Gt(Kt, "obsessively", -1),
        Gt(Kt, "obsessiveness", -1),
        Gt(Kt, "obsolete", -1),
        Gt(Kt, "obstacle", -1),
        Gt(Kt, "obstinate", -1),
        Gt(Kt, "obstinately", -1),
        Gt(Kt, "obstruct", -1),
        Gt(Kt, "obstructed", -1),
        Gt(Kt, "obstructing", -1),
        Gt(Kt, "obstruction", -1),
        Gt(Kt, "obstructs", -1),
        Gt(Kt, "obtrusive", -1),
        Gt(Kt, "obtuse", -1),
        Gt(Kt, "occlude", -1),
        Gt(Kt, "occluded", -1),
        Gt(Kt, "occludes", -1),
        Gt(Kt, "occluding", -1),
        Gt(Kt, "odd", -3),
        Gt(Kt, "odder", -3),
        Gt(Kt, "oddest", -1),
        Gt(Kt, "oddities", -1),
        Gt(Kt, "oddity", -1),
        Gt(Kt, "oddly", -2),
        Gt(Kt, "odor", -1),
        Gt(Kt, "offence", -3),
        Gt(Kt, "offend", -3),
        Gt(Kt, "offender", -3),
        Gt(Kt, "offending", -3),
        Gt(Kt, "offenses", -3),
        Gt(Kt, "offensive", -3),
        Gt(Kt, "offensively", -3),
        Gt(Kt, "offensiveness", -1),
        Gt(Kt, "officious", -1),
        Gt(Kt, "ominous", -1),
        Gt(Kt, "ominously", -1),
        Gt(Kt, "omission", -1),
        Gt(Kt, "omit", -1),
        Gt(Kt, "one-sided", -1),
        Gt(Kt, "onerous", -1),
        Gt(Kt, "onerously", -1),
        Gt(Kt, "onslaught", -1),
        Gt(Kt, "opinionated", -1),
        Gt(Kt, "opponent", -1),
        Gt(Kt, "opportunistic", -1),
        Gt(Kt, "oppose", -1),
        Gt(Kt, "opposition", -1),
        Gt(Kt, "oppositions", -1),
        Gt(Kt, "oppress", -1),
        Gt(Kt, "oppression", -5),
        Gt(Kt, "oppressive", -5),
        Gt(Kt, "oppressively", -5),
        Gt(Kt, "oppressiveness", -5),
        Gt(Kt, "oppressors", -5),
        Gt(Kt, "ordeal", -3),
        Gt(Kt, "orphan", -2),
        Gt(Kt, "ostracize", -1),
        Gt(Kt, "outbreak", -1),
        Gt(Kt, "outburst", -3),
        Gt(Kt, "outbursts", -3),
        Gt(Kt, "outcast", -2),
        Gt(Kt, "outcry", -3),
        Gt(Kt, "outlaw", -4),
        Gt(Kt, "outmoded", -2),
        Gt(Kt, "outrage", -5),
        Gt(Kt, "outraged", -5),
        Gt(Kt, "outrageous", -5),
        Gt(Kt, "outrageously", -5),
        Gt(Kt, "outrageousness", -5),
        Gt(Kt, "outrages", -1),
        Gt(Kt, "outsider", -1),
        Gt(Kt, "over-acted", -1),
        Gt(Kt, "over-awe", -1),
        Gt(Kt, "over-balanced", -1),
        Gt(Kt, "over-hyped", -1),
        Gt(Kt, "over-priced", -1),
        Gt(Kt, "over-valuation", -1),
        Gt(Kt, "overact", -2),
        Gt(Kt, "overacted", -2),
        Gt(Kt, "overawe", -1),
        Gt(Kt, "overbalance", -1),
        Gt(Kt, "overbalanced", -1),
        Gt(Kt, "overbearing", -1),
        Gt(Kt, "overbearingly", -1),
        Gt(Kt, "overblown", -1),
        Gt(Kt, "overdo", -1),
        Gt(Kt, "overdone", -1),
        Gt(Kt, "overdue", -1),
        Gt(Kt, "overemphasize", -1),
        Gt(Kt, "overheat", -1),
        Gt(Kt, "overkill", -1),
        Gt(Kt, "overloaded", -1),
        Gt(Kt, "overlook", -1),
        Gt(Kt, "overpaid", -1),
        Gt(Kt, "overpayed", -1),
        Gt(Kt, "overplay", -1),
        Gt(Kt, "overpower", -1),
        Gt(Kt, "overpriced", -1),
        Gt(Kt, "overrated", -1),
        Gt(Kt, "overreach", -1),
        Gt(Kt, "overrun", -3),
        Gt(Kt, "overshadow", -3),
        Gt(Kt, "oversight", -1),
        Gt(Kt, "oversights", -1),
        Gt(Kt, "oversimplification", -1),
        Gt(Kt, "oversimplified", -1),
        Gt(Kt, "oversimplify", -1),
        Gt(Kt, "oversize", -3),
        Gt(Kt, "overstate", -1),
        Gt(Kt, "overstated", -1),
        Gt(Kt, "overstatement", -1),
        Gt(Kt, "overstatements", -1),
        Gt(Kt, "overstates", -1),
        Gt(Kt, "overtaxed", -1),
        Gt(Kt, "overthrow", -1),
        Gt(Kt, "overthrows", -1),
        Gt(Kt, "overturn", -2),
        Gt(Kt, "overweight", -1),
        Gt(Kt, "overwhelm", -1),
        Gt(Kt, "overwhelmed", -1),
        Gt(Kt, "overwhelming", -1),
        Gt(Kt, "overwhelmingly", -1),
        Gt(Kt, "overwhelms", -1),
        Gt(Kt, "overzealous", -1),
        Gt(Kt, "overzealously", -1),
        Gt(Kt, "overzelous", -1),
        Gt(Kt, "pain", -4),
        Gt(Kt, "painful", -4),
        Gt(Kt, "painfull", -4),
        Gt(Kt, "painfully", -4),
        Gt(Kt, "pains", -4),
        Gt(Kt, "pale", -2),
        Gt(Kt, "pales", -2),
        Gt(Kt, "paltry", -1),
        Gt(Kt, "pan", -1),
        Gt(Kt, "pandemonium", -1),
        Gt(Kt, "pander", -1),
        Gt(Kt, "pandering", -1),
        Gt(Kt, "panders", -1),
        Gt(Kt, "panic", -1),
        Gt(Kt, "panick", -3),
        Gt(Kt, "panicked", -3),
        Gt(Kt, "panicking", -3),
        Gt(Kt, "panicky", -1),
        Gt(Kt, "paradoxical", -1),
        Gt(Kt, "paradoxically", -1),
        Gt(Kt, "paralize", -2),
        Gt(Kt, "paralyzed", -2),
        Gt(Kt, "paranoia", -3),
        Gt(Kt, "paranoid", -3),
        Gt(Kt, "parasite", -3),
        Gt(Kt, "pariah", -1),
        Gt(Kt, "parody", -4),
        Gt(Kt, "partiality", -1),
        Gt(Kt, "partisan", -1),
        Gt(Kt, "partisans", -1),
        Gt(Kt, "passe", -1),
        Gt(Kt, "passive", -1),
        Gt(Kt, "passiveness", -1),
        Gt(Kt, "pathetic", -1),
        Gt(Kt, "pathetically", -1),
        Gt(Kt, "patronize", -1),
        Gt(Kt, "paucity", -1),
        Gt(Kt, "pauper", -1),
        Gt(Kt, "paupers", -1),
        Gt(Kt, "payback", -1),
        Gt(Kt, "peculiar", -1),
        Gt(Kt, "peculiarly", -1),
        Gt(Kt, "pedantic", -1),
        Gt(Kt, "peeled", -1),
        Gt(Kt, "peeve", -1),
        Gt(Kt, "peeved", -1),
        Gt(Kt, "peevish", -1),
        Gt(Kt, "peevishly", -1),
        Gt(Kt, "penalize", -3),
        Gt(Kt, "penalty", -3),
        Gt(Kt, "perfidious", -1),
        Gt(Kt, "perfidity", -1),
        Gt(Kt, "perfunctory", -1),
        Gt(Kt, "peril", -1),
        Gt(Kt, "perilous", -1),
        Gt(Kt, "perilously", -1),
        Gt(Kt, "perish", -1),
        Gt(Kt, "pernicious", -1),
        Gt(Kt, "perplex", -1),
        Gt(Kt, "perplexed", -1),
        Gt(Kt, "perplexing", -1),
        Gt(Kt, "perplexity", -1),
        Gt(Kt, "persecute", -1),
        Gt(Kt, "persecution", -1),
        Gt(Kt, "pertinacious", -1),
        Gt(Kt, "pertinaciously", -1),
        Gt(Kt, "pertinacity", -1),
        Gt(Kt, "perturb", -1),
        Gt(Kt, "perturbed", -1),
        Gt(Kt, "pervasive", -2),
        Gt(Kt, "perverse", -2),
        Gt(Kt, "perversely", -1),
        Gt(Kt, "perversion", -1),
        Gt(Kt, "perversity", -1),
        Gt(Kt, "pervert", -1),
        Gt(Kt, "perverted", -1),
        Gt(Kt, "perverts", -1),
        Gt(Kt, "pessimism", -3),
        Gt(Kt, "pessimistic", -3),
        Gt(Kt, "pessimistically", -3),
        Gt(Kt, "pest", -1),
        Gt(Kt, "pestilent", -1),
        Gt(Kt, "petrified", -1),
        Gt(Kt, "petrify", -1),
        Gt(Kt, "pettifog", -1),
        Gt(Kt, "petty", -1),
        Gt(Kt, "phobia", -2),
        Gt(Kt, "phobic", -1),
        Gt(Kt, "phony", -1),
        Gt(Kt, "picket", -1),
        Gt(Kt, "picketed", -1),
        Gt(Kt, "picketing", -1),
        Gt(Kt, "pickets", -1),
        Gt(Kt, "picky", -1),
        Gt(Kt, "pig", -3),
        Gt(Kt, "pigs", -3),
        Gt(Kt, "pillage", -1),
        Gt(Kt, "pillory", -1),
        Gt(Kt, "pimple", -2),
        Gt(Kt, "pinch", -1),
        Gt(Kt, "pique", -1),
        Gt(Kt, "pitiable", -1),
        Gt(Kt, "pitiful", -1),
        Gt(Kt, "pitifully", -1),
        Gt(Kt, "pitiless", -1),
        Gt(Kt, "pitilessly", -1),
        Gt(Kt, "pittance", -1),
        Gt(Kt, "pity", -3),
        Gt(Kt, "plagiarize", -1),
        Gt(Kt, "plague", -1),
        Gt(Kt, "plasticky", -1),
        Gt(Kt, "plaything", -1),
        Gt(Kt, "plea", -1),
        Gt(Kt, "pleas", -1),
        Gt(Kt, "plebeian", -1),
        Gt(Kt, "plight", -1),
        Gt(Kt, "plot", -1),
        Gt(Kt, "plotters", -1),
        Gt(Kt, "ploy", -1),
        Gt(Kt, "plunder", -1),
        Gt(Kt, "plunderer", -1),
        Gt(Kt, "pointless", -1),
        Gt(Kt, "pointlessly", -1),
        Gt(Kt, "poison", -2),
        Gt(Kt, "poisonous", -2),
        Gt(Kt, "poisonously", -2),
        Gt(Kt, "pokey", -1),
        Gt(Kt, "poky", -1),
        Gt(Kt, "polarisation", -3),
        Gt(Kt, "polemize", -1),
        Gt(Kt, "pollute", -2),
        Gt(Kt, "polluter", -2),
        Gt(Kt, "polluters", -2),
        Gt(Kt, "polution", -2),
        Gt(Kt, "pompous", -1),
        Gt(Kt, "poor", -2),
        Gt(Kt, "poorer", -2),
        Gt(Kt, "poorest", -2),
        Gt(Kt, "poorly", -2),
        Gt(Kt, "posturing", -1),
        Gt(Kt, "pout", -1),
        Gt(Kt, "poverty", -4),
        Gt(Kt, "powerless", -4),
        Gt(Kt, "prate", -1),
        Gt(Kt, "pratfall", -1),
        Gt(Kt, "prattle", -1),
        Gt(Kt, "precarious", -1),
        Gt(Kt, "precariously", -1),
        Gt(Kt, "precipitate", -1),
        Gt(Kt, "precipitous", -1),
        Gt(Kt, "predatory", -1),
        Gt(Kt, "predicament", -1),
        Gt(Kt, "prejudge", -2),
        Gt(Kt, "prejudice", -2),
        Gt(Kt, "prejudices", -2),
        Gt(Kt, "prejudicial", -2),
        Gt(Kt, "premeditated", -1),
        Gt(Kt, "preoccupy", -1),
        Gt(Kt, "preposterous", -1),
        Gt(Kt, "preposterously", -1),
        Gt(Kt, "presumptuous", -1),
        Gt(Kt, "presumptuously", -1),
        Gt(Kt, "pretence", -1),
        Gt(Kt, "pretend", -1),
        Gt(Kt, "pretense", -1),
        Gt(Kt, "pretentious", -1),
        Gt(Kt, "pretentiously", -1),
        Gt(Kt, "prevaricate", -1),
        Gt(Kt, "pricey", -1),
        Gt(Kt, "pricier", -1),
        Gt(Kt, "prick", -1),
        Gt(Kt, "prickle", -1),
        Gt(Kt, "prickles", -1),
        Gt(Kt, "prideful", -1),
        Gt(Kt, "prik", -1),
        Gt(Kt, "primitive", -1),
        Gt(Kt, "prison", -1),
        Gt(Kt, "prisoner", -1),
        Gt(Kt, "problem", -3),
        Gt(Kt, "problematic", -3),
        Gt(Kt, "problems", -3),
        Gt(Kt, "procrastinate", -2),
        Gt(Kt, "procrastinates", -2),
        Gt(Kt, "procrastination", -2),
        Gt(Kt, "profane", -1),
        Gt(Kt, "profanity", -1),
        Gt(Kt, "prohibit", -3),
        Gt(Kt, "prohibitive", -3),
        Gt(Kt, "prohibitively", -3),
        Gt(Kt, "propaganda", -1),
        Gt(Kt, "propagandize", -1),
        Gt(Kt, "proprietary", -1),
        Gt(Kt, "prosecute", -1),
        Gt(Kt, "protest", -3),
        Gt(Kt, "protested", -3),
        Gt(Kt, "protesting", -1),
        Gt(Kt, "protests", -1),
        Gt(Kt, "protracted", -1),
        Gt(Kt, "provocation", -1),
        Gt(Kt, "provocative", -1),
        Gt(Kt, "provoke", -1),
        Gt(Kt, "pry", -1),
        Gt(Kt, "pugnacious", -1),
        Gt(Kt, "pugnaciously", -1),
        Gt(Kt, "pugnacity", -1),
        Gt(Kt, "punch", -1),
        Gt(Kt, "punish", -3),
        Gt(Kt, "punishable", -3),
        Gt(Kt, "punitive", -3),
        Gt(Kt, "punk", -2),
        Gt(Kt, "puny", -2),
        Gt(Kt, "puppet", -1),
        Gt(Kt, "puppets", -1),
        Gt(Kt, "puzzled", -1),
        Gt(Kt, "puzzlement", -1),
        Gt(Kt, "puzzling", -1),
        Gt(Kt, "quack", -1),
        Gt(Kt, "qualm", -1),
        Gt(Kt, "qualms", -1),
        Gt(Kt, "quandary", -1),
        Gt(Kt, "quarrel", -3),
        Gt(Kt, "quarrellous", -1),
        Gt(Kt, "quarrellously", -1),
        Gt(Kt, "quarrels", -1),
        Gt(Kt, "quarrelsome", -1),
        Gt(Kt, "quash", -1),
        Gt(Kt, "queer", -1),
        Gt(Kt, "questionable", -1),
        Gt(Kt, "quibble", -1),
        Gt(Kt, "quibbles", -1),
        Gt(Kt, "quitter", -1),
        Gt(Kt, "rabid", -1),
        Gt(Kt, "racism", -1),
        Gt(Kt, "racist", -5),
        Gt(Kt, "racists", -5),
        Gt(Kt, "racy", -2),
        Gt(Kt, "radical", -4),
        Gt(Kt, "radicalization", -5),
        Gt(Kt, "radically", -5),
        Gt(Kt, "radicals", -5),
        Gt(Kt, "rage", -4),
        Gt(Kt, "ragged", -3),
        Gt(Kt, "raging", -3),
        Gt(Kt, "rail", -1),
        Gt(Kt, "raked", -1),
        Gt(Kt, "rampage", -3),
        Gt(Kt, "rampant", -3),
        Gt(Kt, "ramshackle", -1),
        Gt(Kt, "rancor", -1),
        Gt(Kt, "randomly", -2),
        Gt(Kt, "rankle", -1),
        Gt(Kt, "rant", -1),
        Gt(Kt, "ranted", -1),
        Gt(Kt, "ranting", -1),
        Gt(Kt, "rantingly", -1),
        Gt(Kt, "rants", -1),
        Gt(Kt, "rape", -5),
        Gt(Kt, "raped", -5),
        Gt(Kt, "raping", -5),
        Gt(Kt, "rascal", -4),
        Gt(Kt, "rascals", -4),
        Gt(Kt, "rash", -3),
        Gt(Kt, "rattle", -2),
        Gt(Kt, "rattled", -2),
        Gt(Kt, "rattles", -2),
        Gt(Kt, "ravage", -3),
        Gt(Kt, "raving", -2),
        Gt(Kt, "reactionary", -1),
        Gt(Kt, "rebellious", -3),
        Gt(Kt, "rebuff", -1),
        Gt(Kt, "rebuke", -1),
        Gt(Kt, "recalcitrant", -1),
        Gt(Kt, "recant", -1),
        Gt(Kt, "recession", -1),
        Gt(Kt, "recessionary", -1),
        Gt(Kt, "reckless", -4),
        Gt(Kt, "recklessly", -4),
        Gt(Kt, "recklessness", -4),
        Gt(Kt, "recoil", -1),
        Gt(Kt, "recourses", -1),
        Gt(Kt, "redundancy", -1),
        Gt(Kt, "redundant", -1),
        Gt(Kt, "refusal", -1),
        Gt(Kt, "refuse", -4),
        Gt(Kt, "refused", -2),
        Gt(Kt, "refuses", -2),
        Gt(Kt, "refusing", -2),
        Gt(Kt, "refutation", -1),
        Gt(Kt, "refute", -1),
        Gt(Kt, "refuted", -1),
        Gt(Kt, "refutes", -1),
        Gt(Kt, "refuting", -1),
        Gt(Kt, "regress", -1),
        Gt(Kt, "regression", -1),
        Gt(Kt, "regressive", -1),
        Gt(Kt, "regret", -4),
        Gt(Kt, "regreted", -4),
        Gt(Kt, "regretful", -4),
        Gt(Kt, "regretfully", -4),
        Gt(Kt, "regrets", -4),
        Gt(Kt, "regrettable", -4),
        Gt(Kt, "regrettably", -4),
        Gt(Kt, "regretted", -4),
        Gt(Kt, "reject", -5),
        Gt(Kt, "rejected", -5),
        Gt(Kt, "rejecting", -5),
        Gt(Kt, "rejection", -5),
        Gt(Kt, "rejects", -5),
        Gt(Kt, "relapse", -5),
        Gt(Kt, "relentless", -3),
        Gt(Kt, "relentlessly", -3),
        Gt(Kt, "relentlessness", -3),
        Gt(Kt, "reluctance", -2),
        Gt(Kt, "reluctant", -2),
        Gt(Kt, "reluctantly", -2),
        Gt(Kt, "remorse", -4),
        Gt(Kt, "remorseful", -4),
        Gt(Kt, "remorsefully", -4),
        Gt(Kt, "remorseless", -4),
        Gt(Kt, "remorselessly", -4),
        Gt(Kt, "remorselessness", -4),
        Gt(Kt, "renounce", -1),
        Gt(Kt, "renunciation", -1),
        Gt(Kt, "repel", -1),
        Gt(Kt, "repetitive", -3),
        Gt(Kt, "reprehensible", -1),
        Gt(Kt, "reprehensibly", -1),
        Gt(Kt, "reprehension", -1),
        Gt(Kt, "reprehensive", -1),
        Gt(Kt, "repress", -1),
        Gt(Kt, "repression", -1),
        Gt(Kt, "repressive", -1),
        Gt(Kt, "reprimand", -1),
        Gt(Kt, "reproach", -1),
        Gt(Kt, "reproachful", -1),
        Gt(Kt, "reprove", -1),
        Gt(Kt, "reprovingly", -1),
        Gt(Kt, "repudiate", -1),
        Gt(Kt, "repudiation", -1),
        Gt(Kt, "repugn", -1),
        Gt(Kt, "repugnance", -1),
        Gt(Kt, "repugnant", -1),
        Gt(Kt, "repugnantly", -1),
        Gt(Kt, "repulse", -3),
        Gt(Kt, "repulsed", -2),
        Gt(Kt, "repulsing", -2),
        Gt(Kt, "repulsive", -3),
        Gt(Kt, "repulsively", -1),
        Gt(Kt, "repulsiveness", -1),
        Gt(Kt, "resent", -1),
        Gt(Kt, "resentful", -1),
        Gt(Kt, "resentment", -1),
        Gt(Kt, "resignation", -1),
        Gt(Kt, "resigned", -1),
        Gt(Kt, "resistance", -1),
        Gt(Kt, "restless", -3),
        Gt(Kt, "restlessness", -3),
        Gt(Kt, "restrict", -3),
        Gt(Kt, "restricted", -3),
        Gt(Kt, "restriction", -3),
        Gt(Kt, "restrictive", -3),
        Gt(Kt, "resurgent", -1),
        Gt(Kt, "retaliate", -2),
        Gt(Kt, "retaliatory", -2),
        Gt(Kt, "retard", -3),
        Gt(Kt, "retarded", -3),
        Gt(Kt, "retardedness", -3),
        Gt(Kt, "retards", -3),
        Gt(Kt, "reticent", -2),
        Gt(Kt, "retract", -2),
        Gt(Kt, "retreat", -2),
        Gt(Kt, "retreated", -2),
        Gt(Kt, "revenge", -5),
        Gt(Kt, "revengeful", -5),
        Gt(Kt, "revengefully", -5),
        Gt(Kt, "revert", -4),
        Gt(Kt, "revile", -3),
        Gt(Kt, "reviled", -3),
        Gt(Kt, "revoke", -3),
        Gt(Kt, "revolt", -4),
        Gt(Kt, "revolting", -4),
        Gt(Kt, "revoltingly", -4),
        Gt(Kt, "revulsion", -3),
        Gt(Kt, "revulsive", -3),
        Gt(Kt, "rhapsodize", -1),
        Gt(Kt, "rhetoric", -3),
        Gt(Kt, "rhetorical", -3),
        Gt(Kt, "ricer", -2),
        Gt(Kt, "ridicule", -2),
        Gt(Kt, "ridicules", -2),
        Gt(Kt, "ridiculous", -3),
        Gt(Kt, "ridiculously", -2),
        Gt(Kt, "rife", -1),
        Gt(Kt, "rift", -5),
        Gt(Kt, "rifts", -5),
        Gt(Kt, "rigid", -3),
        Gt(Kt, "rigidity", -2),
        Gt(Kt, "rigidness", -2),
        Gt(Kt, "rile", -1),
        Gt(Kt, "riled", -1),
        Gt(Kt, "rip", -4),
        Gt(Kt, "rip-off", -3),
        Gt(Kt, "ripoff", -3),
        Gt(Kt, "ripped", -3),
        Gt(Kt, "risk", -4),
        Gt(Kt, "risks", -4),
        Gt(Kt, "risky", -4),
        Gt(Kt, "rival", -5),
        Gt(Kt, "rivalry", -5),
        Gt(Kt, "roadblocks", -3),
        Gt(Kt, "rocky", -1),
        Gt(Kt, "rogue", -3),
        Gt(Kt, "rollercoaster", -2),
        Gt(Kt, "rot", -2),
        Gt(Kt, "rotten", -2),
        Gt(Kt, "rough", -2),
        Gt(Kt, "rremediable", -1),
        Gt(Kt, "rubbish", -2),
        Gt(Kt, "rude", -4),
        Gt(Kt, "rue", -1),
        Gt(Kt, "ruffian", -1),
        Gt(Kt, "ruffle", -1),
        Gt(Kt, "ruin", -3),
        Gt(Kt, "ruined", -3),
        Gt(Kt, "ruining", -3),
        Gt(Kt, "ruinous", -3),
        Gt(Kt, "ruins", -3),
        Gt(Kt, "rumbling", -2),
        Gt(Kt, "rumor", -2),
        Gt(Kt, "rumors", -2),
        Gt(Kt, "rumours", -2),
        Gt(Kt, "rumple", -1),
        Gt(Kt, "run-down", -2),
        Gt(Kt, "runaway", -2),
        Gt(Kt, "rupture", -4),
        Gt(Kt, "rust", -3),
        Gt(Kt, "rusts", -3),
        Gt(Kt, "rusty", -3),
        Gt(Kt, "rut", -2),
        Gt(Kt, "ruthless", -2),
        Gt(Kt, "ruthlessly", -1),
        Gt(Kt, "ruthlessness", -1),
        Gt(Kt, "ruts", -1),
        Gt(Kt, "sabotage", -3),
        Gt(Kt, "sack", -1),
        Gt(Kt, "sacrificed", -3),
        Gt(Kt, "sad", -4),
        Gt(Kt, "sadden", -4),
        Gt(Kt, "sadly", -4),
        Gt(Kt, "sadness", -4),
        Gt(Kt, "sag", -1),
        Gt(Kt, "sagged", -1),
        Gt(Kt, "sagging", -1),
        Gt(Kt, "saggy", -1),
        Gt(Kt, "sags", -1),
        Gt(Kt, "salacious", -1),
        Gt(Kt, "sanctimonious", -1),
        Gt(Kt, "sap", -1),
        Gt(Kt, "sarcasm", -2),
        Gt(Kt, "sarcastic", -2),
        Gt(Kt, "sarcastically", -2),
        Gt(Kt, "sardonic", -4),
        Gt(Kt, "sardonically", -4),
        Gt(Kt, "sass", -1),
        Gt(Kt, "satirical", -1),
        Gt(Kt, "satirize", -1),
        Gt(Kt, "savage", -3),
        Gt(Kt, "savaged", -3),
        Gt(Kt, "savagery", -4),
        Gt(Kt, "savages", -4),
        Gt(Kt, "scaly", -1),
        Gt(Kt, "scam", -5),
        Gt(Kt, "scams", -5),
        Gt(Kt, "scandal", -5),
        Gt(Kt, "scandalize", -5),
        Gt(Kt, "scandalized", -5),
        Gt(Kt, "scandalous", -5),
        Gt(Kt, "scandalously", -5),
        Gt(Kt, "scandals", -5),
        Gt(Kt, "scandel", -1),
        Gt(Kt, "scandels", -1),
        Gt(Kt, "scant", -1),
        Gt(Kt, "scapegoat", -1),
        Gt(Kt, "scar", -1),
        Gt(Kt, "scarce", -1),
        Gt(Kt, "scarcely", -4),
        Gt(Kt, "scarcity", -4),
        Gt(Kt, "scare", -5),
        Gt(Kt, "scared", -5),
        Gt(Kt, "scarier", -4),
        Gt(Kt, "scariest", -5),
        Gt(Kt, "scarily", -4),
        Gt(Kt, "scarred", -1),
        Gt(Kt, "scars", -1),
        Gt(Kt, "scary", -4),
        Gt(Kt, "scathing", -1),
        Gt(Kt, "scathingly", -1),
        Gt(Kt, "sceptical", -1),
        Gt(Kt, "scoff", -1),
        Gt(Kt, "scoffingly", -1),
        Gt(Kt, "scold", -2),
        Gt(Kt, "scolded", -1),
        Gt(Kt, "scolding", -1),
        Gt(Kt, "scoldingly", -1),
        Gt(Kt, "scorching", -1),
        Gt(Kt, "scorchingly", -1),
        Gt(Kt, "scorn", -1),
        Gt(Kt, "scornful", -1),
        Gt(Kt, "scornfully", -1),
        Gt(Kt, "scoundrel", -1),
        Gt(Kt, "scourge", -1),
        Gt(Kt, "scowl", -1),
        Gt(Kt, "scramble", -1),
        Gt(Kt, "scrambled", -1),
        Gt(Kt, "scrambles", -1),
        Gt(Kt, "scrambling", -1),
        Gt(Kt, "scrap", -3),
        Gt(Kt, "scratch", -3),
        Gt(Kt, "scratched", -1),
        Gt(Kt, "scratches", -1),
        Gt(Kt, "scratchy", -1),
        Gt(Kt, "scream", -1),
        Gt(Kt, "screech", -1),
        Gt(Kt, "screw-up", -1),
        Gt(Kt, "screwed", -1),
        Gt(Kt, "screwed-up", -1),
        Gt(Kt, "screwy", -1),
        Gt(Kt, "scuff", -1),
        Gt(Kt, "scuffs", -1),
        Gt(Kt, "scum", -2),
        Gt(Kt, "scummy", -1),
        Gt(Kt, "second-class", -1),
        Gt(Kt, "second-tier", -1),
        Gt(Kt, "secretive", -1),
        Gt(Kt, "sedentary", -3),
        Gt(Kt, "seedy", -1),
        Gt(Kt, "seethe", -1),
        Gt(Kt, "seething", -1),
        Gt(Kt, "self-coup", -1),
        Gt(Kt, "self-criticism", -1),
        Gt(Kt, "self-defeating", -1),
        Gt(Kt, "self-destructive", -1),
        Gt(Kt, "self-humiliation", -1),
        Gt(Kt, "self-interest", -1),
        Gt(Kt, "self-interested", -1),
        Gt(Kt, "self-serving", -1),
        Gt(Kt, "selfinterested", -1),
        Gt(Kt, "selfish", -4),
        Gt(Kt, "selfishly", -4),
        Gt(Kt, "selfishness", -4),
        Gt(Kt, "semi-retarded", -1),
        Gt(Kt, "senile", -5),
        Gt(Kt, "sensationalize", -1),
        Gt(Kt, "senseless", -3),
        Gt(Kt, "senselessly", -3),
        Gt(Kt, "seriousness", -1),
        Gt(Kt, "sermonize", -1),
        Gt(Kt, "servitude", -1),
        Gt(Kt, "set-up", -1),
        Gt(Kt, "setback", -3),
        Gt(Kt, "setbacks", -3),
        Gt(Kt, "sever", -2),
        Gt(Kt, "severe", -2),
        Gt(Kt, "severity", -2),
        Gt(Kt, "sh*t", -5),
        Gt(Kt, "shabby", -1),
        Gt(Kt, "shadowy", -1),
        Gt(Kt, "shady", -2),
        Gt(Kt, "shake", -2),
        Gt(Kt, "shaky", -2),
        Gt(Kt, "shallow", -2),
        Gt(Kt, "sham", -3),
        Gt(Kt, "shambles", -3),
        Gt(Kt, "shame", -3),
        Gt(Kt, "shameful", -2),
        Gt(Kt, "shamefully", -1),
        Gt(Kt, "shamefulness", -1),
        Gt(Kt, "shameless", -3),
        Gt(Kt, "shamelessly", -3),
        Gt(Kt, "shamelessness", -3),
        Gt(Kt, "shark", -2),
        Gt(Kt, "sharply", -2),
        Gt(Kt, "shatter", -1),
        Gt(Kt, "shemale", -1),
        Gt(Kt, "shimmer", -1),
        Gt(Kt, "shimmy", -1),
        Gt(Kt, "shipwreck", -2),
        Gt(Kt, "shirk", -2),
        Gt(Kt, "shirker", -1),
        Gt(Kt, "shit", -5),
        Gt(Kt, "shiver", -1),
        Gt(Kt, "shock", -3),
        Gt(Kt, "shocked", -3),
        Gt(Kt, "shocking", -3),
        Gt(Kt, "shockingly", -3),
        Gt(Kt, "shoddy", -1),
        Gt(Kt, "short-lived", -1),
        Gt(Kt, "shortage", -3),
        Gt(Kt, "shortchange", -1),
        Gt(Kt, "shortcoming", -1),
        Gt(Kt, "shortcomings", -1),
        Gt(Kt, "shortness", -2),
        Gt(Kt, "shortsighted", -4),
        Gt(Kt, "shortsightedness", -2),
        Gt(Kt, "showdown", -2),
        Gt(Kt, "shrew", -1),
        Gt(Kt, "shriek", -1),
        Gt(Kt, "shrill", -1),
        Gt(Kt, "shrilly", -1),
        Gt(Kt, "shrivel", -1),
        Gt(Kt, "shroud", -1),
        Gt(Kt, "shrouded", -1),
        Gt(Kt, "shrug", -1),
        Gt(Kt, "shun", -1),
        Gt(Kt, "shunned", -1),
        Gt(Kt, "sick", -3),
        Gt(Kt, "sicken", -3),
        Gt(Kt, "sickening", -3),
        Gt(Kt, "sickeningly", -1),
        Gt(Kt, "sickly", -1),
        Gt(Kt, "sickness", -1),
        Gt(Kt, "sidetrack", -1),
        Gt(Kt, "sidetracked", -1),
        Gt(Kt, "siege", -1),
        Gt(Kt, "sillily", -1),
        Gt(Kt, "silly", -1),
        Gt(Kt, "simplistic", -3),
        Gt(Kt, "simplistically", -1),
        Gt(Kt, "sin", -3),
        Gt(Kt, "sinful", -3),
        Gt(Kt, "sinfully", -3),
        Gt(Kt, "sinister", -3),
        Gt(Kt, "sinisterly", -1),
        Gt(Kt, "sink", -2),
        Gt(Kt, "sinking", -1),
        Gt(Kt, "skeletons", -2),
        Gt(Kt, "skeptic", -3),
        Gt(Kt, "skeptical", -3),
        Gt(Kt, "skeptically", -3),
        Gt(Kt, "skepticism", -3),
        Gt(Kt, "sketchy", -4),
        Gt(Kt, "skimpy", -2),
        Gt(Kt, "skinny", -2),
        Gt(Kt, "skittish", -1),
        Gt(Kt, "skittishly", -1),
        Gt(Kt, "skulk", -1),
        Gt(Kt, "slack", -1),
        Gt(Kt, "slander", -3),
        Gt(Kt, "slanderer", -3),
        Gt(Kt, "slanderous", -3),
        Gt(Kt, "slanderously", -3),
        Gt(Kt, "slanders", -1),
        Gt(Kt, "slap", -2),
        Gt(Kt, "slashing", -1),
        Gt(Kt, "slaughter", -5),
        Gt(Kt, "slaughtered", -5),
        Gt(Kt, "slave", -4),
        Gt(Kt, "slaves", -4),
        Gt(Kt, "sleazy", -3),
        Gt(Kt, "slime", -1),
        Gt(Kt, "slog", -1),
        Gt(Kt, "slogged", -1),
        Gt(Kt, "slogging", -1),
        Gt(Kt, "slogs", -1),
        Gt(Kt, "sloooooooooooooow", -1),
        Gt(Kt, "sloooow", -1),
        Gt(Kt, "slooow", -1),
        Gt(Kt, "sloow", -1),
        Gt(Kt, "sloppily", -1),
        Gt(Kt, "sloppy", -1),
        Gt(Kt, "sloth", -1),
        Gt(Kt, "slothful", -1),
        Gt(Kt, "slow", -1),
        Gt(Kt, "slow-moving", -1),
        Gt(Kt, "slowed", -1),
        Gt(Kt, "slower", -1),
        Gt(Kt, "slowest", -1),
        Gt(Kt, "slowly", -1),
        Gt(Kt, "sloww", -1),
        Gt(Kt, "slowww", -1),
        Gt(Kt, "slowwww", -1),
        Gt(Kt, "slug", -1),
        Gt(Kt, "sluggish", -1),
        Gt(Kt, "slump", -1),
        Gt(Kt, "slumping", -1),
        Gt(Kt, "slumpping", -1),
        Gt(Kt, "slur", -1),
        Gt(Kt, "slut", -5),
        Gt(Kt, "sluts", -5),
        Gt(Kt, "sly", -1),
        Gt(Kt, "smack", -2),
        Gt(Kt, "smallish", -2),
        Gt(Kt, "smash", -2),
        Gt(Kt, "smear", -1),
        Gt(Kt, "smell", -1),
        Gt(Kt, "smelled", -1),
        Gt(Kt, "smelling", -1),
        Gt(Kt, "smells", -1),
        Gt(Kt, "smelly", -1),
        Gt(Kt, "smelt", -1),
        Gt(Kt, "smoke", -2),
        Gt(Kt, "smokescreen", -1),
        Gt(Kt, "smolder", -1),
        Gt(Kt, "smoldering", -1),
        Gt(Kt, "smother", -1),
        Gt(Kt, "smoulder", -1),
        Gt(Kt, "smouldering", -1),
        Gt(Kt, "smudge", -1),
        Gt(Kt, "smudged", -1),
        Gt(Kt, "smudges", -1),
        Gt(Kt, "smudging", -1),
        Gt(Kt, "smug", -1),
        Gt(Kt, "smugly", -1),
        Gt(Kt, "smut", -1),
        Gt(Kt, "smuttier", -1),
        Gt(Kt, "smuttiest", -1),
        Gt(Kt, "smutty", -1),
        Gt(Kt, "snag", -1),
        Gt(Kt, "snagged", -1),
        Gt(Kt, "snagging", -1),
        Gt(Kt, "snags", -1),
        Gt(Kt, "snappish", -1),
        Gt(Kt, "snappishly", -1),
        Gt(Kt, "snare", -1),
        Gt(Kt, "snarky", -1),
        Gt(Kt, "snarl", -1),
        Gt(Kt, "sneak", -2),
        Gt(Kt, "sneakily", -2),
        Gt(Kt, "sneaky", -2),
        Gt(Kt, "sneer", -1),
        Gt(Kt, "sneering", -1),
        Gt(Kt, "sneeringly", -1),
        Gt(Kt, "snob", -1),
        Gt(Kt, "snobbish", -1),
        Gt(Kt, "snobby", -1),
        Gt(Kt, "snobish", -1),
        Gt(Kt, "snobs", -1),
        Gt(Kt, "snub", -1),
        Gt(Kt, "so-cal", -1),
        Gt(Kt, "soapy", -1),
        Gt(Kt, "sob", -1),
        Gt(Kt, "sober", -1),
        Gt(Kt, "sobering", -1),
        Gt(Kt, "solemn", -1),
        Gt(Kt, "solicitude", -1),
        Gt(Kt, "somber", -1),
        Gt(Kt, "sore", -1),
        Gt(Kt, "sorely", -1),
        Gt(Kt, "soreness", -1),
        Gt(Kt, "sorrow", -1),
        Gt(Kt, "sorrowful", -1),
        Gt(Kt, "sorrowfully", -1),
        Gt(Kt, "sorry", -1),
        Gt(Kt, "sour", -2),
        Gt(Kt, "sourly", -1),
        Gt(Kt, "spade", -1),
        Gt(Kt, "spank", -3),
        Gt(Kt, "spendy", -1),
        Gt(Kt, "spew", -1),
        Gt(Kt, "spewed", -1),
        Gt(Kt, "spewing", -1),
        Gt(Kt, "spews", -1),
        Gt(Kt, "spilling", -1),
        Gt(Kt, "spinster", -1),
        Gt(Kt, "spiritless", -3),
        Gt(Kt, "spite", -1),
        Gt(Kt, "spiteful", -1),
        Gt(Kt, "spitefully", -1),
        Gt(Kt, "spitefulness", -1),
        Gt(Kt, "splatter", -1),
        Gt(Kt, "split", -2),
        Gt(Kt, "splitting", -1),
        Gt(Kt, "spoil", -2),
        Gt(Kt, "spoilage", -1),
        Gt(Kt, "spoilages", -1),
        Gt(Kt, "spoiled", -1),
        Gt(Kt, "spoilled", -1),
        Gt(Kt, "spoils", -2),
        Gt(Kt, "spook", -1),
        Gt(Kt, "spookier", -1),
        Gt(Kt, "spookiest", -1),
        Gt(Kt, "spookily", -1),
        Gt(Kt, "spooky", -1),
        Gt(Kt, "spoon-fed", -1),
        Gt(Kt, "spoon-feed", -1),
        Gt(Kt, "spoonfed", -2),
        Gt(Kt, "sporadic", -1),
        Gt(Kt, "spotty", -1),
        Gt(Kt, "spurious", -1),
        Gt(Kt, "spurn", -1),
        Gt(Kt, "sputter", -1),
        Gt(Kt, "squabble", -1),
        Gt(Kt, "squabbling", -1),
        Gt(Kt, "squander", -1),
        Gt(Kt, "squash", -1),
        Gt(Kt, "squeak", -1),
        Gt(Kt, "squeaks", -1),
        Gt(Kt, "squeaky", -1),
        Gt(Kt, "squeal", -1),
        Gt(Kt, "squealing", -1),
        Gt(Kt, "squeals", -1),
        Gt(Kt, "squirm", -1),
        Gt(Kt, "stab", -2),
        Gt(Kt, "stagnant", -1),
        Gt(Kt, "stagnate", -1),
        Gt(Kt, "stagnation", -1),
        Gt(Kt, "staid", -1),
        Gt(Kt, "stain", -1),
        Gt(Kt, "stains", -1),
        Gt(Kt, "stale", -1),
        Gt(Kt, "stalemate", -1),
        Gt(Kt, "stall", -1),
        Gt(Kt, "stalls", -1),
        Gt(Kt, "stammer", -1),
        Gt(Kt, "stampede", -1),
        Gt(Kt, "standstill", -1),
        Gt(Kt, "stark", -2),
        Gt(Kt, "starkly", -2),
        Gt(Kt, "startle", -1),
        Gt(Kt, "startling", -1),
        Gt(Kt, "startlingly", -1),
        Gt(Kt, "starvation", -1),
        Gt(Kt, "starve", -2),
        Gt(Kt, "static", -1),
        Gt(Kt, "steal", -3),
        Gt(Kt, "stealing", -3),
        Gt(Kt, "steals", -3),
        Gt(Kt, "steep", -1),
        Gt(Kt, "steeply", -1),
        Gt(Kt, "stench", -1),
        Gt(Kt, "stereotype", -1),
        Gt(Kt, "stereotypical", -1),
        Gt(Kt, "stereotypically", -1),
        Gt(Kt, "stern", -1),
        Gt(Kt, "stew", -1),
        Gt(Kt, "sticky", -2),
        Gt(Kt, "stiff", -1),
        Gt(Kt, "stiffness", -1),
        Gt(Kt, "stifle", -1),
        Gt(Kt, "stifling", -1),
        Gt(Kt, "stiflingly", -1),
        Gt(Kt, "stigma", -1),
        Gt(Kt, "stigmatize", -1),
        Gt(Kt, "sting", -1),
        Gt(Kt, "stinging", -1),
        Gt(Kt, "stingingly", -1),
        Gt(Kt, "stingy", -1),
        Gt(Kt, "stink", -2),
        Gt(Kt, "stinks", -2),
        Gt(Kt, "stodgy", -2),
        Gt(Kt, "stole", -2),
        Gt(Kt, "stolen", -2),
        Gt(Kt, "stooge", -2),
        Gt(Kt, "stooges", -2),
        Gt(Kt, "stormy", -2),
        Gt(Kt, "straggle", -2),
        Gt(Kt, "straggler", -2),
        Gt(Kt, "strain", -2),
        Gt(Kt, "strained", -1),
        Gt(Kt, "straining", -1),
        Gt(Kt, "strange", -3),
        Gt(Kt, "strangely", -3),
        Gt(Kt, "stranger", -1),
        Gt(Kt, "strangest", -1),
        Gt(Kt, "strangle", -1),
        Gt(Kt, "streaky", -1),
        Gt(Kt, "strenuous", -1),
        Gt(Kt, "stress", -3),
        Gt(Kt, "stresses", -1),
        Gt(Kt, "stressful", -1),
        Gt(Kt, "stressfully", -1),
        Gt(Kt, "stricken", -1),
        Gt(Kt, "strict", -3),
        Gt(Kt, "strictly", -3),
        Gt(Kt, "strident", -1),
        Gt(Kt, "stridently", -1),
        Gt(Kt, "strife", -1),
        Gt(Kt, "strike", -1),
        Gt(Kt, "stringent", -1),
        Gt(Kt, "stringently", -1),
        Gt(Kt, "struck", -3),
        Gt(Kt, "struggle", -1),
        Gt(Kt, "struggled", -1),
        Gt(Kt, "struggles", -1),
        Gt(Kt, "struggling", -1),
        Gt(Kt, "strut", -1),
        Gt(Kt, "stubborn", -4),
        Gt(Kt, "stubbornly", -4),
        Gt(Kt, "stubbornness", -4),
        Gt(Kt, "stuck", -3),
        Gt(Kt, "stuffy", -1),
        Gt(Kt, "stumble", -1),
        Gt(Kt, "stumbled", -1),
        Gt(Kt, "stumbles", -1),
        Gt(Kt, "stump", -1),
        Gt(Kt, "stumped", -1),
        Gt(Kt, "stumps", -1),
        Gt(Kt, "stun", -2),
        Gt(Kt, "stunt", -3),
        Gt(Kt, "stunted", -3),
        Gt(Kt, "stupid", -1),
        Gt(Kt, "stupidest", -1),
        Gt(Kt, "stupidity", -1),
        Gt(Kt, "stupidly", -1),
        Gt(Kt, "stupified", -1),
        Gt(Kt, "stupify", -1),
        Gt(Kt, "stupor", -1),
        Gt(Kt, "stutter", -1),
        Gt(Kt, "stuttered", -1),
        Gt(Kt, "stuttering", -1),
        Gt(Kt, "stutters", -1),
        Gt(Kt, "sty", -1),
        Gt(Kt, "stymied", -1),
        Gt(Kt, "sub-par", -3),
        Gt(Kt, "subdued", -1),
        Gt(Kt, "subjected", -1),
        Gt(Kt, "subjection", -1),
        Gt(Kt, "subjugate", -1),
        Gt(Kt, "subjugation", -1),
        Gt(Kt, "submissive", -3),
        Gt(Kt, "subordinate", -1),
        Gt(Kt, "subpoena", -1),
        Gt(Kt, "subpoenas", -1),
        Gt(Kt, "subservience", -1),
        Gt(Kt, "subservient", -1),
        Gt(Kt, "substandard", -1),
        Gt(Kt, "subtract", -3),
        Gt(Kt, "subversion", -1),
        Gt(Kt, "subversive", -1),
        Gt(Kt, "subversively", -1),
        Gt(Kt, "subvert", -1),
        Gt(Kt, "succumb", -2),
        Gt(Kt, "suck", -4),
        Gt(Kt, "sucked", -3),
        Gt(Kt, "sucker", -3),
        Gt(Kt, "sucks", -3),
        Gt(Kt, "sucky", -2),
        Gt(Kt, "sue", -3),
        Gt(Kt, "sued", -3),
        Gt(Kt, "sueing", -3),
        Gt(Kt, "sues", -1),
        Gt(Kt, "suffer", -1),
        Gt(Kt, "suffered", -1),
        Gt(Kt, "sufferer", -1),
        Gt(Kt, "sufferers", -1),
        Gt(Kt, "suffering", -1),
        Gt(Kt, "suffers", -1),
        Gt(Kt, "suffocate", -1),
        Gt(Kt, "sugar-coat", -1),
        Gt(Kt, "sugar-coated", -1),
        Gt(Kt, "sugarcoated", -1),
        Gt(Kt, "suicidal", -5),
        Gt(Kt, "suicide", -5),
        Gt(Kt, "sulk", -4),
        Gt(Kt, "sullen", -1),
        Gt(Kt, "sully", -1),
        Gt(Kt, "sunder", -1),
        Gt(Kt, "sunk", -3),
        Gt(Kt, "sunken", -3),
        Gt(Kt, "superficial", -1),
        Gt(Kt, "superficiality", -1),
        Gt(Kt, "superficially", -1),
        Gt(Kt, "superfluous", -1),
        Gt(Kt, "superstition", -3),
        Gt(Kt, "superstitious", -3),
        Gt(Kt, "suppress", -1),
        Gt(Kt, "suppression", -1),
        Gt(Kt, "surrender", -1),
        Gt(Kt, "susceptible", -1),
        Gt(Kt, "suspect", -2),
        Gt(Kt, "suspicion", -2),
        Gt(Kt, "suspicions", -2),
        Gt(Kt, "suspicious", -1),
        Gt(Kt, "suspiciously", -1),
        Gt(Kt, "swagger", -1),
        Gt(Kt, "swamped", -1),
        Gt(Kt, "sweaty", -2),
        Gt(Kt, "swelled", -1),
        Gt(Kt, "swelling", -1),
        Gt(Kt, "swindle", -1),
        Gt(Kt, "swipe", -3),
        Gt(Kt, "swollen", -1),
        Gt(Kt, "symptom", -1),
        Gt(Kt, "symptoms", -1),
        Gt(Kt, "syndrome", -1),
        Gt(Kt, "taboo", -1),
        Gt(Kt, "tacky", -1),
        Gt(Kt, "taint", -1),
        Gt(Kt, "tainted", -1),
        Gt(Kt, "tamper", -1),
        Gt(Kt, "tangle", -1),
        Gt(Kt, "tangled", -1),
        Gt(Kt, "tangles", -1),
        Gt(Kt, "tank", -1),
        Gt(Kt, "tanked", -1),
        Gt(Kt, "tanks", -1),
        Gt(Kt, "tantrum", -1),
        Gt(Kt, "tardy", -1),
        Gt(Kt, "tarnish", -2),
        Gt(Kt, "tarnished", -1),
        Gt(Kt, "tarnishes", -1),
        Gt(Kt, "tarnishing", -1),
        Gt(Kt, "tattered", -1),
        Gt(Kt, "taunt", -1),
        Gt(Kt, "taunting", -1),
        Gt(Kt, "tauntingly", -1),
        Gt(Kt, "taunts", -3),
        Gt(Kt, "taut", -1),
        Gt(Kt, "tawdry", -1),
        Gt(Kt, "taxing", -1),
        Gt(Kt, "tease", -1),
        Gt(Kt, "teasingly", -1),
        Gt(Kt, "tedious", -1),
        Gt(Kt, "tediously", -1),
        Gt(Kt, "temerity", -1),
        Gt(Kt, "temper", -3),
        Gt(Kt, "tempest", -2),
        Gt(Kt, "temptation", -1),
        Gt(Kt, "tenderness", -1),
        Gt(Kt, "tense", -1),
        Gt(Kt, "tension", -1),
        Gt(Kt, "tentative", -1),
        Gt(Kt, "tentatively", -1),
        Gt(Kt, "tenuous", -1),
        Gt(Kt, "tenuously", -1),
        Gt(Kt, "tepid", -1),
        Gt(Kt, "terrible", -5),
        Gt(Kt, "terribleness", -5),
        Gt(Kt, "terribly", -4),
        Gt(Kt, "terror", -4),
        Gt(Kt, "terror-genic", -1),
        Gt(Kt, "terrorism", -5),
        Gt(Kt, "terrorize", -5),
        Gt(Kt, "testily", -1),
        Gt(Kt, "testy", -1),
        Gt(Kt, "tetchily", -1),
        Gt(Kt, "tetchy", -1),
        Gt(Kt, "thankless", -2),
        Gt(Kt, "thicker", -1),
        Gt(Kt, "thirst", -1),
        Gt(Kt, "thorny", -4),
        Gt(Kt, "thoughtless", -3),
        Gt(Kt, "thoughtlessly", -3),
        Gt(Kt, "thoughtlessness", -3),
        Gt(Kt, "thrash", -4),
        Gt(Kt, "threat", -4),
        Gt(Kt, "threaten", -4),
        Gt(Kt, "threatening", -4),
        Gt(Kt, "threats", -4),
        Gt(Kt, "threesome", -3),
        Gt(Kt, "throb", -2),
        Gt(Kt, "throbbed", -2),
        Gt(Kt, "throbbing", -2),
        Gt(Kt, "throbs", -2),
        Gt(Kt, "throttle", -1),
        Gt(Kt, "thug", -4),
        Gt(Kt, "thumb-down", -3),
        Gt(Kt, "thumbs-down", -3),
        Gt(Kt, "thwart", -2),
        Gt(Kt, "time-consuming", -1),
        Gt(Kt, "timid", -3),
        Gt(Kt, "timidity", -3),
        Gt(Kt, "timidly", -3),
        Gt(Kt, "timidness", -3),
        Gt(Kt, "tin-y", -1),
        Gt(Kt, "tingled", -1),
        Gt(Kt, "tingling", -1),
        Gt(Kt, "tired", -2),
        Gt(Kt, "tiresome", -2),
        Gt(Kt, "tiring", -1),
        Gt(Kt, "tiringly", -1),
        Gt(Kt, "toil", -1),
        Gt(Kt, "toll", -1),
        Gt(Kt, "top-heavy", -2),
        Gt(Kt, "topple", -1),
        Gt(Kt, "torment", -5),
        Gt(Kt, "tormented", -5),
        Gt(Kt, "torrent", -2),
        Gt(Kt, "tortuous", -1),
        Gt(Kt, "torture", -4),
        Gt(Kt, "tortured", -4),
        Gt(Kt, "tortures", -4),
        Gt(Kt, "torturing", -4),
        Gt(Kt, "torturous", -4),
        Gt(Kt, "torturously", -4),
        Gt(Kt, "totalitarian", -2),
        Gt(Kt, "touchy", -1),
        Gt(Kt, "toughness", -1),
        Gt(Kt, "tout", -1),
        Gt(Kt, "touted", -1),
        Gt(Kt, "touts", -1),
        Gt(Kt, "toxic", -4),
        Gt(Kt, "traduce", -1),
        Gt(Kt, "tragedy", -5),
        Gt(Kt, "tragic", -5),
        Gt(Kt, "tragically", -5),
        Gt(Kt, "traitor", -4),
        Gt(Kt, "traitorous", -1),
        Gt(Kt, "traitorously", -1),
        Gt(Kt, "tramp", -1),
        Gt(Kt, "trample", -1),
        Gt(Kt, "transgress", -2),
        Gt(Kt, "transgression", -2),
        Gt(Kt, "trap", -4),
        Gt(Kt, "traped", -4),
        Gt(Kt, "trapped", -4),
        Gt(Kt, "trash", -1),
        Gt(Kt, "trashed", -1),
        Gt(Kt, "trashy", -1),
        Gt(Kt, "trauma", -2),
        Gt(Kt, "traumatic", -2),
        Gt(Kt, "traumatically", -1),
        Gt(Kt, "traumatize", -1),
        Gt(Kt, "traumatized", -1),
        Gt(Kt, "travesties", -1),
        Gt(Kt, "travesty", -1),
        Gt(Kt, "treacherous", -1),
        Gt(Kt, "treacherously", -1),
        Gt(Kt, "treachery", -1),
        Gt(Kt, "treason", -1),
        Gt(Kt, "treasonous", -1),
        Gt(Kt, "trick", -1),
        Gt(Kt, "tricked", -1),
        Gt(Kt, "trickery", -1),
        Gt(Kt, "tricky", -1),
        Gt(Kt, "trivial", -1),
        Gt(Kt, "trivialize", -1),
        Gt(Kt, "trouble", -2),
        Gt(Kt, "troubled", -2),
        Gt(Kt, "troublemaker", -1),
        Gt(Kt, "troubles", -1),
        Gt(Kt, "troublesome", -1),
        Gt(Kt, "troublesomely", -1),
        Gt(Kt, "troubling", -1),
        Gt(Kt, "troublingly", -1),
        Gt(Kt, "truant", -1),
        Gt(Kt, "tumble", -1),
        Gt(Kt, "tumbled", -1),
        Gt(Kt, "tumbles", -1),
        Gt(Kt, "tumultuous", -1),
        Gt(Kt, "turbulent", -1),
        Gt(Kt, "turmoil", -1),
        Gt(Kt, "twist", -1),
        Gt(Kt, "twisted", -1),
        Gt(Kt, "twists", -1),
        Gt(Kt, "two-faced", -1),
        Gt(Kt, "two-faces", -1),
        Gt(Kt, "tyrannical", -4),
        Gt(Kt, "tyrannically", -4),
        Gt(Kt, "tyranny", -4),
        Gt(Kt, "tyrant", -4),
        Gt(Kt, "ugh", -1),
        Gt(Kt, "uglier", -4),
        Gt(Kt, "ugliest", -5),
        Gt(Kt, "ugliness", -4),
        Gt(Kt, "ugly", -3),
        Gt(Kt, "ulterior", -3),
        Gt(Kt, "ultimatum", -3),
        Gt(Kt, "ultimatums", -3),
        Gt(Kt, "ultra-hardline", -1),
        Gt(Kt, "un-viewable", -1),
        Gt(Kt, "unable", -1),
        Gt(Kt, "unacceptable", -2),
        Gt(Kt, "unacceptablely", -2),
        Gt(Kt, "unacceptably", -2),
        Gt(Kt, "unaccessible", -2),
        Gt(Kt, "unaccustomed", -2),
        Gt(Kt, "unachievable", -2),
        Gt(Kt, "unaffordable", -2),
        Gt(Kt, "unappealing", -4),
        Gt(Kt, "unattractive", -3),
        Gt(Kt, "unauthentic", -3),
        Gt(Kt, "unavailable", -3),
        Gt(Kt, "unavoidably", -3),
        Gt(Kt, "unbearable", -3),
        Gt(Kt, "unbearablely", -3),
        Gt(Kt, "unbelievable", -3),
        Gt(Kt, "unbelievably", -3),
        Gt(Kt, "uncaring", -3),
        Gt(Kt, "uncertain", -1),
        Gt(Kt, "uncivil", -1),
        Gt(Kt, "uncivilized", -1),
        Gt(Kt, "unclean", -2),
        Gt(Kt, "unclear", -2),
        Gt(Kt, "uncollectible", -2),
        Gt(Kt, "uncomfortable", -2),
        Gt(Kt, "uncomfortably", -2),
        Gt(Kt, "uncomfy", -2),
        Gt(Kt, "uncompetitive", -2),
        Gt(Kt, "uncompromising", -1),
        Gt(Kt, "uncompromisingly", -1),
        Gt(Kt, "unconfirmed", -1),
        Gt(Kt, "unconstitutional", -1),
        Gt(Kt, "uncontrolled", -2),
        Gt(Kt, "unconvincing", -2),
        Gt(Kt, "unconvincingly", -2),
        Gt(Kt, "uncooperative", -2),
        Gt(Kt, "uncouth", -1),
        Gt(Kt, "uncreative", -1),
        Gt(Kt, "undecided", -1),
        Gt(Kt, "undefined", -3),
        Gt(Kt, "undependability", -1),
        Gt(Kt, "undependable", -1),
        Gt(Kt, "undercut", -2),
        Gt(Kt, "undercuts", -1),
        Gt(Kt, "undercutting", -1),
        Gt(Kt, "underdog", -1),
        Gt(Kt, "underestimate", -1),
        Gt(Kt, "underlings", -1),
        Gt(Kt, "undermine", -3),
        Gt(Kt, "undermined", -3),
        Gt(Kt, "undermines", -3),
        Gt(Kt, "undermining", -3),
        Gt(Kt, "underpaid", -3),
        Gt(Kt, "underpowered", -2),
        Gt(Kt, "undersized", -2),
        Gt(Kt, "undesirable", -3),
        Gt(Kt, "undetermined", -1),
        Gt(Kt, "undid", -1),
        Gt(Kt, "undignified", -1),
        Gt(Kt, "undissolved", -1),
        Gt(Kt, "undocumented", -1),
        Gt(Kt, "undone", -1),
        Gt(Kt, "undue", -1),
        Gt(Kt, "unease", -1),
        Gt(Kt, "uneasily", -1),
        Gt(Kt, "uneasiness", -1),
        Gt(Kt, "uneasy", -1),
        Gt(Kt, "uneconomical", -2),
        Gt(Kt, "unemployed", -3),
        Gt(Kt, "unequal", -1),
        Gt(Kt, "unethical", -3),
        Gt(Kt, "uneven", -1),
        Gt(Kt, "uneventful", -1),
        Gt(Kt, "unexpected", -1),
        Gt(Kt, "unexpectedly", -1),
        Gt(Kt, "unexplained", -1),
        Gt(Kt, "unfairly", -1),
        Gt(Kt, "unfaithful", -1),
        Gt(Kt, "unfaithfully", -1),
        Gt(Kt, "unfamiliar", -1),
        Gt(Kt, "unfavorable", -1),
        Gt(Kt, "unfeeling", -1),
        Gt(Kt, "unfinished", -1),
        Gt(Kt, "unfit", -2),
        Gt(Kt, "unforeseen", -3),
        Gt(Kt, "unforgiving", -1),
        Gt(Kt, "unfortunate", -5),
        Gt(Kt, "unfortunately", -5),
        Gt(Kt, "unfounded", -1),
        Gt(Kt, "unfriendly", -2),
        Gt(Kt, "unfulfilled", -1),
        Gt(Kt, "unfunded", -1),
        Gt(Kt, "ungovernable", -1),
        Gt(Kt, "ungrateful", -1),
        Gt(Kt, "unhappily", -4),
        Gt(Kt, "unhappiness", -4),
        Gt(Kt, "unhappy", -4),
        Gt(Kt, "unhealthy", -4),
        Gt(Kt, "unhelpful", -3),
        Gt(Kt, "unilateralism", -1),
        Gt(Kt, "unimaginable", -1),
        Gt(Kt, "unimaginably", -1),
        Gt(Kt, "unimportant", -1),
        Gt(Kt, "uninformed", -1),
        Gt(Kt, "uninsured", -1),
        Gt(Kt, "unintelligible", -1),
        Gt(Kt, "unintelligile", -1),
        Gt(Kt, "unipolar", -1),
        Gt(Kt, "unjust", -1),
        Gt(Kt, "unjustifiable", -1),
        Gt(Kt, "unjustifiably", -1),
        Gt(Kt, "unjustified", -1),
        Gt(Kt, "unjustly", -1),
        Gt(Kt, "unkind", -1),
        Gt(Kt, "unkindly", -1),
        Gt(Kt, "unknown", -1),
        Gt(Kt, "unlamentable", -1),
        Gt(Kt, "unlamentably", -1),
        Gt(Kt, "unlawful", -2),
        Gt(Kt, "unlawfully", -2),
        Gt(Kt, "unlawfulness", -2),
        Gt(Kt, "unleash", -1),
        Gt(Kt, "unlicensed", -1),
        Gt(Kt, "unlikely", -1),
        Gt(Kt, "unlucky", -1),
        Gt(Kt, "unmoved", -3),
        Gt(Kt, "unnatural", -2),
        Gt(Kt, "unnaturally", -2),
        Gt(Kt, "unnecessary", -4),
        Gt(Kt, "unneeded", -1),
        Gt(Kt, "unnerve", -1),
        Gt(Kt, "unnerved", -1),
        Gt(Kt, "unnerving", -1),
        Gt(Kt, "unnervingly", -1),
        Gt(Kt, "unnoticed", -2),
        Gt(Kt, "unobserved", -3),
        Gt(Kt, "unorthodox", -3),
        Gt(Kt, "unorthodoxy", -3),
        Gt(Kt, "unpleasant", -1),
        Gt(Kt, "unpleasantries", -2),
        Gt(Kt, "unpopular", -2),
        Gt(Kt, "unpredictable", -1),
        Gt(Kt, "unprepared", -1),
        Gt(Kt, "unproductive", -1),
        Gt(Kt, "unprofitable", -1),
        Gt(Kt, "unprove", -1),
        Gt(Kt, "unproved", -1),
        Gt(Kt, "unproven", -1),
        Gt(Kt, "unproves", -1),
        Gt(Kt, "unproving", -1),
        Gt(Kt, "unqualified", -1),
        Gt(Kt, "unravel", -1),
        Gt(Kt, "unraveled", -1),
        Gt(Kt, "unreachable", -1),
        Gt(Kt, "unreadable", -1),
        Gt(Kt, "unrealistic", -1),
        Gt(Kt, "unreasonable", -1),
        Gt(Kt, "unreasonably", -1),
        Gt(Kt, "unrelenting", -2),
        Gt(Kt, "unrelentingly", -2),
        Gt(Kt, "unreliability", -2),
        Gt(Kt, "unreliable", -2),
        Gt(Kt, "unresolved", -2),
        Gt(Kt, "unresponsive", -3),
        Gt(Kt, "unrest", -3),
        Gt(Kt, "unruly", -1),
        Gt(Kt, "unsafe", -1),
        Gt(Kt, "unsatisfactory", -1),
        Gt(Kt, "unsavory", -1),
        Gt(Kt, "unscrupulous", -1),
        Gt(Kt, "unscrupulously", -1),
        Gt(Kt, "unsecure", -2),
        Gt(Kt, "unseemly", -1),
        Gt(Kt, "unsettle", -3),
        Gt(Kt, "unsettled", -3),
        Gt(Kt, "unsettling", -3),
        Gt(Kt, "unsettlingly", -1),
        Gt(Kt, "unskilled", -4),
        Gt(Kt, "unsophisticated", -1),
        Gt(Kt, "unsound", -1),
        Gt(Kt, "unspeakable", -1),
        Gt(Kt, "unspeakablely", -1),
        Gt(Kt, "unspecified", -1),
        Gt(Kt, "unstable", -1),
        Gt(Kt, "unsteadily", -1),
        Gt(Kt, "unsteadiness", -1),
        Gt(Kt, "unsteady", -1),
        Gt(Kt, "unsuccessful", -1),
        Gt(Kt, "unsuccessfully", -1),
        Gt(Kt, "unsupported", -1),
        Gt(Kt, "unsupportive", -1),
        Gt(Kt, "unsure", -1),
        Gt(Kt, "unsuspecting", -1),
        Gt(Kt, "unsustainable", -1),
        Gt(Kt, "untenable", -1),
        Gt(Kt, "untested", -1),
        Gt(Kt, "unthinkable", -1),
        Gt(Kt, "unthinkably", -1),
        Gt(Kt, "untimely", -1),
        Gt(Kt, "untouched", -1),
        Gt(Kt, "untrue", -1),
        Gt(Kt, "untrustworthy", -1),
        Gt(Kt, "untruthful", -1),
        Gt(Kt, "unusable", -1),
        Gt(Kt, "unusably", -1),
        Gt(Kt, "unuseable", -1),
        Gt(Kt, "unuseably", -1),
        Gt(Kt, "unusual", -1),
        Gt(Kt, "unusually", -1),
        Gt(Kt, "unviewable", -1),
        Gt(Kt, "unwanted", -1),
        Gt(Kt, "unwarranted", -1),
        Gt(Kt, "unwatchable", -1),
        Gt(Kt, "unwelcome", -1),
        Gt(Kt, "unwell", -1),
        Gt(Kt, "unwieldy", -1),
        Gt(Kt, "unwilling", -1),
        Gt(Kt, "unwillingly", -1),
        Gt(Kt, "unwillingness", -1),
        Gt(Kt, "unwise", -1),
        Gt(Kt, "unwisely", -1),
        Gt(Kt, "unworkable", -1),
        Gt(Kt, "unworthy", -1),
        Gt(Kt, "unyielding", -1),
        Gt(Kt, "upbraid", -1),
        Gt(Kt, "upheaval", -1),
        Gt(Kt, "uprising", -1),
        Gt(Kt, "uproar", -3),
        Gt(Kt, "uproarious", -1),
        Gt(Kt, "uproariously", -1),
        Gt(Kt, "uproarous", -1),
        Gt(Kt, "uproarously", -1),
        Gt(Kt, "uproot", -2),
        Gt(Kt, "upset", -1),
        Gt(Kt, "upseting", -1),
        Gt(Kt, "upsets", -1),
        Gt(Kt, "upsetting", -1),
        Gt(Kt, "upsettingly", -1),
        Gt(Kt, "urgent", -1),
        Gt(Kt, "useless", -2),
        Gt(Kt, "usurp", -1),
        Gt(Kt, "usurper", -1),
        Gt(Kt, "utterly", -1),
        Gt(Kt, "vagrant", -1),
        Gt(Kt, "vague", -2),
        Gt(Kt, "vagueness", -1),
        Gt(Kt, "vain", -1),
        Gt(Kt, "vainly", -1),
        Gt(Kt, "vanity", -1),
        Gt(Kt, "vehement", -1),
        Gt(Kt, "vehemently", -1),
        Gt(Kt, "vengeance", -4),
        Gt(Kt, "vengeful", -4),
        Gt(Kt, "vengefully", -4),
        Gt(Kt, "vengefulness", -4),
        Gt(Kt, "venom", -3),
        Gt(Kt, "venomous", -3),
        Gt(Kt, "venomously", -3),
        Gt(Kt, "vent", -3),
        Gt(Kt, "vestiges", -1),
        Gt(Kt, "vex", -1),
        Gt(Kt, "vexation", -1),
        Gt(Kt, "vexing", -1),
        Gt(Kt, "vexingly", -1),
        Gt(Kt, "vibrate", -1),
        Gt(Kt, "vibrated", -1),
        Gt(Kt, "vibrates", -1),
        Gt(Kt, "vibrating", -1),
        Gt(Kt, "vibration", -1),
        Gt(Kt, "vice", -1),
        Gt(Kt, "vicious", -1),
        Gt(Kt, "viciously", -1),
        Gt(Kt, "viciousness", -1),
        Gt(Kt, "victimize", -1),
        Gt(Kt, "vile", -1),
        Gt(Kt, "vileness", -1),
        Gt(Kt, "vilify", -1),
        Gt(Kt, "villainous", -1),
        Gt(Kt, "villainously", -1),
        Gt(Kt, "villains", -1),
        Gt(Kt, "villian", -1),
        Gt(Kt, "villianous", -1),
        Gt(Kt, "villianously", -1),
        Gt(Kt, "villify", -1),
        Gt(Kt, "vindictive", -1),
        Gt(Kt, "vindictively", -1),
        Gt(Kt, "vindictiveness", -1),
        Gt(Kt, "violate", -1),
        Gt(Kt, "violation", -1),
        Gt(Kt, "violator", -1),
        Gt(Kt, "violators", -1),
        Gt(Kt, "violent", -1),
        Gt(Kt, "violently", -1),
        Gt(Kt, "viper", -1),
        Gt(Kt, "virulence", -1),
        Gt(Kt, "virulent", -1),
        Gt(Kt, "virulently", -1),
        Gt(Kt, "virus", -3),
        Gt(Kt, "vociferous", -1),
        Gt(Kt, "vociferously", -1),
        Gt(Kt, "volatile", -1),
        Gt(Kt, "volatility", -1),
        Gt(Kt, "vomit", -1),
        Gt(Kt, "vomited", -1),
        Gt(Kt, "vomiting", -1),
        Gt(Kt, "vomits", -1),
        Gt(Kt, "vulgar", -1),
        Gt(Kt, "vulnerable", -1),
        Gt(Kt, "wack", -1),
        Gt(Kt, "wail", -1),
        Gt(Kt, "wallow", -1),
        Gt(Kt, "wane", -1),
        Gt(Kt, "waning", -1),
        Gt(Kt, "wanton", -1),
        Gt(Kt, "war-like", -3),
        Gt(Kt, "warily", -3),
        Gt(Kt, "wariness", -3),
        Gt(Kt, "warlike", -3),
        Gt(Kt, "warned", -2),
        Gt(Kt, "warning", -2),
        Gt(Kt, "warp", -1),
        Gt(Kt, "warped", -1),
        Gt(Kt, "wary", -1),
        Gt(Kt, "washed-out", -1),
        Gt(Kt, "waste", -1),
        Gt(Kt, "wasted", -1),
        Gt(Kt, "wasteful", -1),
        Gt(Kt, "wastefulness", -1),
        Gt(Kt, "wasting", -1),
        Gt(Kt, "water-down", -1),
        Gt(Kt, "watered-down", -1),
        Gt(Kt, "wayward", -1),
        Gt(Kt, "weak", -4),
        Gt(Kt, "weaken", -4),
        Gt(Kt, "weakening", -3),
        Gt(Kt, "weaker", -3),
        Gt(Kt, "weakness", -3),
        Gt(Kt, "weaknesses", -3),
        Gt(Kt, "weariness", -1),
        Gt(Kt, "wearisome", -1),
        Gt(Kt, "weary", -1),
        Gt(Kt, "wedge", -1),
        Gt(Kt, "weed", -1),
        Gt(Kt, "weep", -1),
        Gt(Kt, "weird", -1),
        Gt(Kt, "weirdly", -1),
        Gt(Kt, "wheedle", -1),
        Gt(Kt, "whimper", -1),
        Gt(Kt, "whine", -3),
        Gt(Kt, "whining", -1),
        Gt(Kt, "whiny", -1),
        Gt(Kt, "whips", -1),
        Gt(Kt, "whore", -1),
        Gt(Kt, "whores", -1),
        Gt(Kt, "wicked", -1),
        Gt(Kt, "wickedly", -1),
        Gt(Kt, "wickedness", -1),
        Gt(Kt, "wild", -1),
        Gt(Kt, "wildly", -1),
        Gt(Kt, "wiles", -1),
        Gt(Kt, "wilt", -1),
        Gt(Kt, "wily", -1),
        Gt(Kt, "wimpy", -1),
        Gt(Kt, "wince", -1),
        Gt(Kt, "wobble", -1),
        Gt(Kt, "wobbled", -1),
        Gt(Kt, "wobbles", -1),
        Gt(Kt, "woe", -1),
        Gt(Kt, "woebegone", -1),
        Gt(Kt, "woeful", -1),
        Gt(Kt, "woefully", -1),
        Gt(Kt, "womanizer", -1),
        Gt(Kt, "womanizing", -1),
        Gt(Kt, "worn", -1),
        Gt(Kt, "worried", -1),
        Gt(Kt, "worriedly", -1),
        Gt(Kt, "worrier", -1),
        Gt(Kt, "worries", -1),
        Gt(Kt, "worrisome", -1),
        Gt(Kt, "worry", -1),
        Gt(Kt, "worrying", -1),
        Gt(Kt, "worryingly", -1),
        Gt(Kt, "worse", -5),
        Gt(Kt, "worsen", -5),
        Gt(Kt, "worsening", -5),
        Gt(Kt, "worst", -5),
        Gt(Kt, "worthless", -3),
        Gt(Kt, "worthlessly", -3),
        Gt(Kt, "worthlessness", -3),
        Gt(Kt, "wound", -3),
        Gt(Kt, "wounds", -3),
        Gt(Kt, "wrangle", -2),
        Gt(Kt, "wrath", -3),
        Gt(Kt, "wreak", -3),
        Gt(Kt, "wreaked", -3),
        Gt(Kt, "wreaks", -3),
        Gt(Kt, "wreck", -3),
        Gt(Kt, "wrest", -2),
        Gt(Kt, "wrestle", -2),
        Gt(Kt, "wretch", -3),
        Gt(Kt, "wretched", -3),
        Gt(Kt, "wretchedly", -2),
        Gt(Kt, "wretchedness", -2),
        Gt(Kt, "wrinkle", -3),
        Gt(Kt, "wrinkled", -3),
        Gt(Kt, "wrinkles", -3),
        Gt(Kt, "wrip", -1),
        Gt(Kt, "wripped", -1),
        Gt(Kt, "wripping", -1),
        Gt(Kt, "writhe", -1),
        Gt(Kt, "wrong", -3),
        Gt(Kt, "wrongful", -3),
        Gt(Kt, "wrongly", -3),
        Gt(Kt, "wrought", -3),
        Gt(Kt, "yawn", -2),
        Gt(Kt, "zap", -2),
        Gt(Kt, "zapped", -2),
        Gt(Kt, "zaps", -1),
        Gt(Kt, "zealot", -3),
        Gt(Kt, "zealous", -3),
        Gt(Kt, "zealously", -3),
        Gt(Kt, "zombie", -4),
        Kt),
    };
    function Zt(e) {
      return (Zt =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Qt(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function Xt(e, t) {
      return (Xt =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function en(e) {
      return (en = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var tn = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Xt(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = en(e);
          if (t) {
            var r = en(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== Zt(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && Qt(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e, t) {
              return "en" !== t.getShortLocale()
                ? null
                : new m()
                    .setMaxScore(this.getScore())
                    .setEmpty(
                      e.__(
                        "Titles with positive or negative sentiment work best for higher CTR.",
                        "rank-math"
                      )
                    )
                    .setTooltip(
                      e.__(
                        "Headlines with a strong emotional sentiment (positive or negative) tend to receive more clicks.",
                        "rank-math"
                      )
                    );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n, e),
                r = new Vt.a().analyze(e.getLower("title"), Jt).score;
              return (
                i
                  .setScore(this.calculateScore(r))
                  .setText(this.translateScore(i, n)),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return "en" === e.getShortLocale() && e.hasTitle();
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              return 0 !== e ? this.getScore() : null;
            },
          },
          {
            key: "getScore",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_titleSentiment_score",
                1
              );
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return e.hasScore()
                ? t.__(
                    "Your title has a positive or a negative sentiment.",
                    "rank-math"
                  )
                : t.sprintf(
                    t.__(
                      "Your title doesn't contain a %1$s word.",
                      "rank-math"
                    ),
                    '<a href="https://rankmath.com/kb/score-100-in-tests/#sentiment-in-a-title" target="_blank">positive or a negative sentiment</a>'
                  );
            },
          },
        ]),
        t
      );
    })();
    function nn(e) {
      return (nn =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function rn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function sn(e, t) {
      return (sn =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function on(e) {
      return (on = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var un = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && sn(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = on(e);
          if (t) {
            var r = on(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== nn(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && rn(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(
                  e.__(
                    "Use the Focus Keyword near the beginning of SEO title.",
                    "rank-math"
                  )
                )
                .setTooltip(
                  e.__(
                    "The SEO page title should contain the Focus Keyword preferably at the beginning.",
                    "rank-math"
                  )
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n),
                r = e.getLower("title"),
                s = r.indexOf(e.getLower("keyword"));
              return (
                i
                  .setScore(
                    this.calculateScore(0 <= s && s < Math.floor(r.length / 2))
                  )
                  .setText(this.translateScore(i, n)),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return e.hasKeyword() && e.hasTitle();
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              return e ? this.getScore() : null;
            },
          },
          {
            key: "getScore",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_titleStartWithKeyword_score",
                3
              );
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return e.hasScore()
                ? t.__(
                    "Focus Keyword used at the beginning of SEO title.",
                    "rank-math"
                  )
                : t.__(
                    "Focus Keyword doesn't appear at the beginning of SEO title.",
                    "rank-math"
                  );
            },
          },
        ]),
        t
      );
    })();
    function an(e) {
      return (an =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ln(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function cn(e, t) {
      return (cn =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function dn(e) {
      return (dn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var fn = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && cn(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = dn(e);
          if (t) {
            var r = dn(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== an(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && ln(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              var t = Object(s.isUndefined)(rankMath.postType)
                ? "Post"
                : Object(s.startCase)(rankMath.postType);
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(
                  e.sprintf(
                    e.__("Use %1$s to optimise the  %2$s.", "rank-math"),
                    '<a class="rank-math-open-contentai" href="' +
                      de +
                      '" target="_blank">Content AI</a>',
                    t
                  )
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n),
                r = !1 !== e.get("contentAI");
              return (
                i
                  .setScore(this.calculateScore(r))
                  .setText(this.translateScore(i, n)),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return !1 !== e.get("contentAI");
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              return e ? this.getScore() : null;
            },
          },
          {
            key: "getScore",
            value: function () {
              return Object(z.applyFilters)("rankMath_analysis_contentAI", 5);
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              var n = Object(s.isUndefined)(rankMath.postType)
                ? "Post"
                : Object(s.startCase)(rankMath.postType);
              return e.hasScore()
                ? t.sprintf(
                    t.__(
                      "You are using %1$s to optimise this %2$s.",
                      "rank-math"
                    ),
                    '<a href="' + de + '" target="_blank">Content AI</a>',
                    n
                  )
                : t.sprintf(
                    t.__(
                      "You are not using %1$s to optimise this %2$s.",
                      "rank-math"
                    ),
                    '<a class="rank-math-open-contentai" href="' +
                      de +
                      '" target="_blank">Content AI</a>',
                    n
                  );
            },
          },
        ]),
        t
      );
    })();
    function pn(e) {
      return (pn =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function hn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function yn(e, t) {
      return (yn =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function gn(e) {
      return (gn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var mn = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && yn(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = gn(e);
          if (t) {
            var r = gn(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== pn(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && hn(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(
                  e.__("Reviews are disabled on this Product.", "rank-math")
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = this.newResult(n),
                r = rankMath.assessor.isReviewEnabled;
              return (
                i
                  .setScore(this.calculateScore(r))
                  .setText(this.translateScore(i, n)),
                i
              );
            },
          },
          {
            key: "isApplicable",
            value: function () {
              return rankMath.assessor.isReviewEnabled;
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              return e ? this.getScore() : null;
            },
          },
          {
            key: "getScore",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_isReviewEnabled_score",
                2
              );
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return e.hasScore()
                ? t.__(
                    "Reviews are enabled for this Product. Good Job!",
                    "rank-math"
                  )
                : t.__("Reviews are disabled on this Product.", "rank-math");
            },
          },
        ]),
        t
      );
    })();
    function bn(e) {
      return (bn =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function vn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function Dn(e, t) {
      return (Dn =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function wn(e) {
      return (wn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var kn = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Dn(e, t);
      })(t, r);
      var e = (function (e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = wn(e);
          if (t) {
            var r = wn(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            return !t || ("object" !== bn(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(e)
              : t;
          })(this, n);
        };
      })(t);
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          e.apply(this, arguments)
        );
      }
      return (
        (function (e, t, n) {
          t && vn(e.prototype, t);
        })(t, [
          {
            key: "newResult",
            value: function (e) {
              return new m()
                .setMaxScore(this.getScore())
                .setEmpty(
                  e.__(
                    "You are not using the Product Schema for this Product.",
                    "rank-math"
                  )
                );
            },
          },
          {
            key: "getResult",
            value: function (e, t, n) {
              var i = e.get("schemas"),
                r = !1;
              Object(s.isEmpty)(i) ||
                Object(s.forEach)(i, function (e) {
                  Object(s.includes)(
                    ["WooCommerceProduct", "EDDProduct", "Product"],
                    e["@type"]
                  ) && (r = !0);
                });
              var o = this.newResult(n);
              return (
                o
                  .setScore(this.calculateScore(r))
                  .setText(this.translateScore(o, n)),
                o
              );
            },
          },
          {
            key: "isApplicable",
            value: function (e) {
              return !Object(s.isEmpty)(e.get("schemas"));
            },
          },
          {
            key: "calculateScore",
            value: function (e) {
              return e ? this.getScore() : null;
            },
          },
          {
            key: "getScore",
            value: function () {
              return Object(z.applyFilters)(
                "rankMath_analysis_hasProductSchema_score",
                2
              );
            },
          },
          {
            key: "translateScore",
            value: function (e, t) {
              return e.hasScore()
                ? t.__(
                    "You are using the Product Schema for this Product",
                    "rank-math"
                  )
                : t.__(
                    "You are not using the Product Schema for this Product.",
                    "rank-math"
                  );
            },
          },
        ]),
        t
      );
    })();
    function Fn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var En = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.options = t),
            (this.researcher = Object(s.has)(t, "researcher")
              ? t.researcher
              : new X()),
            this.setI18n(Object(s.has)(t, "i18n") ? t.i18n : void 0),
            this.setAnalyses();
        }
        return (
          (function (e, t, n) {
            t && Fn(e.prototype, t);
          })(e, [
            {
              key: "analyze",
              value: function (e) {
                return this.generateResults(this.analyses, e);
              },
            },
            {
              key: "analyzeSome",
              value: function (e, t) {
                return this.generateResults(
                  Object(s.pick)(this.defaultAnalyses, e),
                  t
                );
              },
            },
            {
              key: "generateResults",
              value: function (e, t) {
                var n = this;
                return new Promise(function (i) {
                  (n.results = {}),
                    n.researcher.setPaper(t),
                    Object(s.forEach)(e, function (e, i) {
                      var r = e.isApplicable(t, n.researcher)
                        ? e.getResult(t, n.researcher, n.i18n)
                        : e.newResult(n.i18n, t);
                      null !== r && (n.results[i] = r);
                    }),
                    i(n.results);
                });
              },
            },
            {
              key: "setI18n",
              value: function (e) {
                if (Object(s.isUndefined)(e))
                  throw Error("The assessor requires an i18n object.");
                this.i18n = e;
              },
            },
            {
              key: "setAnalyses",
              value: function () {
                (this.defaultAnalyses = {
                  contentHasAssets: new re(),
                  contentHasShortParagraphs: new le(),
                  contentHasTOC: new me(),
                  keywordDensity: new ke(),
                  keywordIn10Percent: new xe(),
                  keywordInContent: new Oe(),
                  keywordInImageAlt: new qe(),
                  keywordInMetaDescription: new Ie(),
                  keywordInPermalink: new Ye(),
                  keywordInSubheadings: new Qe(),
                  keywordInTitle: new it(),
                  keywordNotUsed: new ct(),
                  lengthContent: new yt(),
                  lengthPermalink: new Dt(),
                  linksHasExternals: new Ct(),
                  linksHasInternal: new _t(),
                  linksNotAllExternals: new Pt(),
                  titleHasNumber: new $t(),
                  titleHasPowerWords: new Ht(),
                  titleSentiment: new tn(),
                  titleStartWithKeyword: new un(),
                  hasContentAI: new fn(),
                  isReviewEnabled: new mn(),
                  hasProductSchema: new kn(),
                }),
                  (this.analyses = this.defaultAnalyses),
                  Object(s.has)(this.options, "analyses") &&
                    !Object(s.isUndefined)(this.options.analyses) &&
                    (this.analyses = Object(s.pick)(
                      this.defaultAnalyses,
                      this.options.analyses
                    ));
              },
            },
          ]),
          e
        );
      })(),
      Cn = {};
    function An(e) {
      if (Object(s.isUndefined)(e)) return e;
      for (var t in Cn) e = e.replace(Cn[t], t);
      return e;
    }
    function xn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    Object(s.forEach)(rankMath.assessor.diacritics, function (e, t) {
      return (Cn[t] = RegExp(e, "g"));
    });
    var Sn = (function () {
      function e(t, n) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.args = {}),
          (n = n || {}),
          (this.args = Object(s.defaults)(n, {
            title: "",
            keyword: "",
            keywords: [],
            titleWidth: 0,
            url: "",
            permalink: "",
            description: "",
            thumbnail: "",
            thumbnailAlt: "",
            locale: "en_US",
            contentAI: !1,
            schemas: {},
          })),
          this.setText(Object(s.isUndefined)(t) ? "" : t),
          (this.args.shortLocale = this.args.locale.split("_")[0]);
      }
      return (
        (function (e, t, n) {
          t && xn(e.prototype, t);
        })(e, [
          {
            key: "get",
            value: function (e) {
              return Object(s.has)(this.args, e) ? this.args[e] : "";
            },
          },
          {
            key: "getLower",
            value: function (e) {
              return this.get(e + "Lower");
            },
          },
          {
            key: "hasKeyword",
            value: function () {
              return "" !== this.args.keyword;
            },
          },
          {
            key: "getKeyword",
            value: function () {
              return this.args.keyword;
            },
          },
          {
            key: "setKeyword",
            value: function (e) {
              (this.args.keyword = An(e)),
                (this.args.keywordLower = e.toLowerCase()),
                (this.keywordPlurals = !1),
                (this.keywordPermalink = !1),
                (this.keywordPermalinkRaw = !1),
                (this.keywordCombinations = !1);
            },
          },
          {
            key: "setKeywords",
            value: function (e) {
              this.args.keywords = Object(s.filter)(
                Object(s.map)(e, function (e) {
                  return An(e).toLowerCase();
                })
              );
            },
          },
          {
            key: "hasTitle",
            value: function () {
              return "" !== this.args.title;
            },
          },
          {
            key: "getTitle",
            value: function () {
              return this.args.title;
            },
          },
          {
            key: "setTitle",
            value: function (e) {
              (this.args.title = An(U(e))),
                (this.args.titleLower = this.args.title.toLowerCase());
            },
          },
          {
            key: "hasTitleWidth",
            value: function () {
              return 0 !== this.args.titleWidth;
            },
          },
          {
            key: "getTitleWidth",
            value: function () {
              return this.args.titleWidth;
            },
          },
          {
            key: "hasPermalink",
            value: function () {
              return "" !== this.args.permalink;
            },
          },
          {
            key: "getPermalink",
            value: function () {
              return this.args.permalink;
            },
          },
          {
            key: "setPermalink",
            value: function (e) {
              (this.args.permalink = e),
                (this.args.permalinkLower = e.toLowerCase());
            },
          },
          {
            key: "hasDescription",
            value: function () {
              return "" !== this.args.description;
            },
          },
          {
            key: "getDescription",
            value: function () {
              return this.args.description;
            },
          },
          {
            key: "setDescription",
            value: function (e) {
              (this.args.description = An(Y(e))),
                (this.args.descriptionLower =
                  this.args.description.toLowerCase());
            },
          },
          {
            key: "hasText",
            value: function () {
              return "" !== this.text;
            },
          },
          {
            key: "getText",
            value: function () {
              return this.text;
            },
          },
          {
            key: "getTextLower",
            value: function () {
              return this.textLower;
            },
          },
          {
            key: "setText",
            value: function (e) {
              (this.text = e || ""),
                (this.textLower = "") !== e &&
                  ((this.text = An(H(e))),
                  (this.textLower = this.text.toLowerCase()));
            },
          },
          {
            key: "hasUrl",
            value: function () {
              return "" !== this.args.url;
            },
          },
          {
            key: "getUrl",
            value: function () {
              return this.args.url;
            },
          },
          {
            key: "setUrl",
            value: function (e) {
              this.args.url = e;
            },
          },
          {
            key: "hasLocale",
            value: function () {
              return "" !== this.args.locale;
            },
          },
          {
            key: "getLocale",
            value: function () {
              return this.args.locale;
            },
          },
          {
            key: "getShortLocale",
            value: function () {
              return this.args.shortLocale;
            },
          },
          {
            key: "hasThumbnail",
            value: function () {
              return "" !== this.args.thumbnail;
            },
          },
          {
            key: "getThumbnail",
            value: function () {
              return this.args.thumbnail;
            },
          },
          {
            key: "setThumbnail",
            value: function (e) {
              this.args.thumbnail = e;
            },
          },
          {
            key: "hasThumbnailAltText",
            value: function () {
              return "" !== this.args.thumbnailAlt;
            },
          },
          {
            key: "getThumbnailAltText",
            value: function () {
              return this.args.thumbnailAlt;
            },
          },
          {
            key: "setThumbnailAltText",
            value: function (e) {
              (this.args.thumbnailAlt = An(e)),
                (this.args.thumbnailAltLower = e.toLowerCase());
            },
          },
          {
            key: "getKeywordPermalink",
            value: function (e) {
              if (!1 === this.keywordPermalink) {
                var t = e.getResearch("slugify"),
                  n = e.getResearch("removePunctuation"),
                  i = this.getLower("keyword")
                    .split(".")
                    .join("")
                    .replace("'", "")
                    .replace(/[-_]/gi, "-");
                (this.keywordPermalink = t(n(i))),
                  (this.keywordPermalinkRaw = this.keywordPermalink);
              }
              return this.keywordPermalink;
            },
          },
          {
            key: "getPermalinkWithStopwords",
            value: function (e) {
              return (
                !1 === this.keywordPermalink && this.getKeywordPermalink(e),
                this.keywordPermalinkRaw
              );
            },
          },
          {
            key: "getKeywordCombination",
            value: function (e) {
              return this.hasKeyword()
                ? (!1 === this.keywordCombinations &&
                    this.generateCombinations(e),
                  this.keywordCombinations)
                : [];
            },
          },
          {
            key: "generateCombinations",
            value: function (e) {
              var t = this.getLower("keyword"),
                n = e.getResearch("getWords"),
                i = e.getResearch("pluralize"),
                r = e.getResearch("combinations");
              (this.keywordPlurals = new Map()),
                n(t).forEach(function (e, t) {
                  this.keywordPlurals.set(t, { word: e, plural: i.get(e) });
                }, this),
                (this.keywordPermalink = this.getKeywordPermalink(e)),
                (this.keywordCombinations = r(this.keywordPlurals));
            },
          },
          {
            key: "setContentAI",
            value: function (e) {
              this.args.contentAI = e;
            },
          },
          {
            key: "setSchema",
            value: function (e) {
              this.args.schemas = e;
            },
          },
        ]),
        e
      );
    })();
    function jn(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function _n(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? jn(Object(n), !0).forEach(function (t) {
              Bn(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : jn(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Bn(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function On(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    window.rankMathAnalyzer = {
      Analysis: r,
      AnalysisResult: m,
      Analyzer: En,
      Helpers: {
        cleanHTML: H,
        cleanText: Y,
        cleanTagsOnly: V,
        matchParagraphs: J,
        removeDiacritics: An,
        sanitizeText: function (e) {
          return Object(s.isUndefined)(e)
            ? ""
            : Object(s.flow)([I, W, a, p, G])(e);
        },
        sanitizeAppData: function (e) {
          return Object(s.isUndefined)(e)
            ? ""
            : Object(s.flow)([I, W, a, p])(e);
        },
        wordCount: S,
        stripStyle: I,
        stripScript: W,
      },
      Paper: Sn,
      Researcher: X,
      ResultManager: (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.results = new Map());
        }
        return (
          (function (e, t, n) {
            t && On(e.prototype, t);
          })(e, [
            {
              key: "getResults",
              value: function () {
                return Object.fromEntries(this.results);
              },
            },
            {
              key: "getResult",
              value: function (e) {
                return this.results.get(e);
              },
            },
            {
              key: "getScore",
              value: function (e) {
                return this.results.has(e) ? this.results.get(e).score : 0;
              },
            },
            {
              key: "update",
              value: function (e, t, n) {
                var i = 2 < arguments.length && void 0 !== n && n;
                if (this.results.has(e)) {
                  var r = this.results.get(e);
                  (t = _n(_n({}, r.results), t)), (i = r.isPrimary);
                }
                this.results.set(e, {
                  results: t,
                  isPrimary: i,
                  score: this.refreshScore(t),
                });
              },
            },
            {
              key: "refreshScore",
              value: function (e) {
                var t = 0,
                  n = 0,
                  i = rankMath.localeFull.split("_")[0];
                return (
                  Object(s.forEach)(e, function (e) {
                    (t += e.getScore()), (n += e.getMaxScore(i));
                  }),
                  Object(s.round)((t / n) * 100)
                );
              },
            },
            {
              key: "deleteResult",
              value: function (e) {
                this.results.delete(e);
              },
            },
            {
              key: "isPrimary",
              value: function (e) {
                return !!this.results.has(e) && this.results.get(e).isPrimary;
              },
            },
          ]),
          e
        );
      })(),
    };
  },
]);
