!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var a = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          r.d(
            n,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 76));
})([
  function (e, t) {
    e.exports = wp.i18n;
  },
  function (e, t) {
    e.exports = lodash;
  },
  function (e, t) {
    e.exports = wp.data;
  },
  function (e, t) {
    e.exports = jQuery;
  },
  function (e, t) {
    e.exports = wp.components;
  },
  function (e, t) {
    e.exports = wp.element;
  },
  function (e, t) {
    e.exports = wp.hooks;
  },
  function (e, t) {
    e.exports = rankMathAnalyzer;
  },
  function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return o;
    });
    var n = r(3),
      a = r.n(n);
    function i(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    var o = new ((function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.map = null);
      }
      var t, r, n;
      return (
        (t = e),
        (r = [
          {
            key: "swap",
            value: function (e, t) {
              var r = this;
              if (!(e = e || "")) return "";
              var n = new RegExp(/%(([a-z0-9_-]+)\(([^)]*)\)|[^\s]+)%/, "giu");
              return e
                .replace(" %page%", "")
                .replace("%sep% %sep%", "%sep%")
                .replace(n, function (e) {
                  return r.replace(t, e);
                })
                .trim();
            },
          },
          {
            key: "replace",
            value: function (e, t) {
              var r = t.toLowerCase().slice(1, -1);
              return ["term_description", "user_description"].includes(r)
                ? "undefined" != typeof tinymce &&
                  tinymce.activeEditor &&
                  "rank_math_description_editor" === tinymce.activeEditor.id
                  ? tinymce.activeEditor.getContent()
                  : a()("#description").val()
                : r.includes("customfield(")
                ? (r = r.replace("customfield(", "").replace(")", "")) in
                  rankMath.customFields
                  ? rankMath.customFields[r]
                  : ""
                : ((e = e || this.getMap()),
                  (r =
                    "seo_description" ===
                    (r =
                      "seo_title" ===
                      (r = r.includes("(") ? r.split("(")[0] : r)
                        ? "title"
                        : r)
                      ? "excerpt"
                      : r) in e
                    ? e[r]
                    : "");
            },
          },
          {
            key: "getMap",
            value: function () {
              var e = this;
              return (
                null !== this.map ||
                  ((this.map = {}),
                  a.a.each(rankMath.variables, function (t, r) {
                    (t = t.toLowerCase().replace(/%+/g, "").split("(")[0]),
                      (e.map[t] = r.example);
                  })),
                this.map
              );
            },
          },
          {
            key: "setVariable",
            value: function (e, t) {
              null !== this.map
                ? (this.map[e] = t)
                : void 0 !== rankMath.variables[e] &&
                  (rankMath.variables[e].example = t);
            },
          },
        ]) && i(t.prototype, r),
        n && i(t, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e
      );
    })())();
  },
  function (e, t) {
    e.exports = wp.url;
  },
  ,
  ,
  function (e, t, r) {
    var n;
    !(function () {
      "use strict";
      var r = {}.hasOwnProperty;
      function a() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var n = arguments[t];
          if (n) {
            var i = typeof n;
            if ("string" === i || "number" === i) e.push(n);
            else if (Array.isArray(n)) {
              if (n.length) {
                var o = a.apply(null, n);
                o && e.push(o);
              }
            } else if ("object" === i)
              if (n.toString === Object.prototype.toString)
                for (var c in n) r.call(n, c) && n[c] && e.push(c);
              else e.push(n.toString());
          }
        }
        return e.join(" ");
      }
      e.exports
        ? ((a.default = a), (e.exports = a))
        : void 0 ===
            (n = function () {
              return a;
            }.apply(t, [])) || (e.exports = n);
    })();
  },
  function (e, t) {
    e.exports = wp.apiFetch;
  },
  ,
  function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return Tr;
    });
    var n = {};
    r.r(n),
      r.d(n, "updateKeywords", function () {
        return p;
      }),
      r.d(n, "updatePillarContent", function () {
        return d;
      }),
      r.d(n, "toggleFrontendScore", function () {
        return f;
      }),
      r.d(n, "updateAnalysisScore", function () {
        return h;
      }),
      r.d(n, "updateCanonicalUrl", function () {
        return m;
      }),
      r.d(n, "updateAdvancedRobots", function () {
        return b;
      }),
      r.d(n, "updateRobots", function () {
        return y;
      }),
      r.d(n, "updateBreadcrumbTitle", function () {
        return g;
      }),
      r.d(n, "resetDirtyMetadata", function () {
        return k;
      }),
      r.d(n, "updateFacebookTitle", function () {
        return w;
      }),
      r.d(n, "updateFacebookDescription", function () {
        return v;
      }),
      r.d(n, "updateFacebookImage", function () {
        return O;
      }),
      r.d(n, "updateFacebookImageID", function () {
        return _;
      }),
      r.d(n, "updateFacebookHasOverlay", function () {
        return j;
      }),
      r.d(n, "updateFacebookImageOverlay", function () {
        return S;
      }),
      r.d(n, "updateAppData", function () {
        return s;
      }),
      r.d(n, "updateAppUi", function () {
        return l;
      }),
      r.d(n, "updatePostID", function () {
        return T;
      }),
      r.d(n, "updatePermalink", function () {
        return D;
      }),
      r.d(n, "updateTitle", function () {
        return P;
      }),
      r.d(n, "updateDescription", function () {
        return I;
      }),
      r.d(n, "updateFeaturedImage", function () {
        return E;
      }),
      r.d(n, "updatePrimaryTermID", function () {
        return A;
      }),
      r.d(n, "updateRedirection", function () {
        return C;
      }),
      r.d(n, "updateRedirectionItem", function () {
        return M;
      }),
      r.d(n, "resetRedirection", function () {
        return R;
      }),
      r.d(n, "updateHasRedirect", function () {
        return U;
      }),
      r.d(n, "updateSerpTitle", function () {
        return B;
      }),
      r.d(n, "updateSerpSlug", function () {
        return z;
      }),
      r.d(n, "updateSerpDescription", function () {
        return L;
      }),
      r.d(n, "toggleSnippetEditor", function () {
        return G;
      }),
      r.d(n, "updateSnippetPreviewType", function () {
        return V;
      }),
      r.d(n, "toggleTrendsCta", function () {
        return q;
      }),
      r.d(n, "updateTwitterUseFacebook", function () {
        return W;
      }),
      r.d(n, "updateTwitterCardType", function () {
        return $;
      }),
      r.d(n, "updateTwitterTitle", function () {
        return J;
      }),
      r.d(n, "updateTwitterDescription", function () {
        return Q;
      }),
      r.d(n, "updateTwitterAuthor", function () {
        return X;
      }),
      r.d(n, "updateTwitterImageID", function () {
        return Y;
      }),
      r.d(n, "updateTwitterImage", function () {
        return Z;
      }),
      r.d(n, "updateTwitterHasOverlay", function () {
        return ee;
      }),
      r.d(n, "updateTwitterImageOverlay", function () {
        return te;
      }),
      r.d(n, "updateTwitterPlayerUrl", function () {
        return re;
      }),
      r.d(n, "updateTwitterPlayerSize", function () {
        return ne;
      }),
      r.d(n, "updateTwitterPlayerStreamUrl", function () {
        return ae;
      }),
      r.d(n, "updateTwitterPlayerStreamCtype", function () {
        return ie;
      }),
      r.d(n, "updateTwitterAppDescription", function () {
        return oe;
      }),
      r.d(n, "updateTwitterAppIphoneID", function () {
        return ce;
      }),
      r.d(n, "updateTwitterAppIphoneName", function () {
        return ue;
      }),
      r.d(n, "updateTwitterAppIphoneUrl", function () {
        return se;
      }),
      r.d(n, "updateTwitterAppIpadID", function () {
        return le;
      }),
      r.d(n, "updateTwitterAppIpadName", function () {
        return pe;
      }),
      r.d(n, "updateTwitterAppIpadUrl", function () {
        return de;
      }),
      r.d(n, "updateTwitterAppGoogleplayID", function () {
        return fe;
      }),
      r.d(n, "updateTwitterAppGoogleplayName", function () {
        return he;
      }),
      r.d(n, "updateTwitterAppGoogleplayUrl", function () {
        return me;
      }),
      r.d(n, "updateTwitterAppCountry", function () {
        return be;
      }),
      r.d(n, "toggleLoaded", function () {
        return ye;
      }),
      r.d(n, "updateSelectedKeyword", function () {
        return ge;
      }),
      r.d(n, "refreshResults", function () {
        return ke;
      }),
      r.d(n, "setVersion", function () {
        return we;
      }),
      r.d(n, "toggleIsDiviPageSettingsBarActive", function () {
        return ve;
      }),
      r.d(n, "toggleIsDiviRankMathModalActive", function () {
        return Oe;
      }),
      r.d(n, "toggleSchemaEditor", function () {
        return Ie;
      }),
      r.d(n, "toggleSchemaTemplates", function () {
        return Ee;
      }),
      r.d(n, "schemaUpdated", function () {
        return Ae;
      }),
      r.d(n, "setEditingSchemaId", function () {
        return Ce;
      }),
      r.d(n, "setEditorTab", function () {
        return Me;
      }),
      r.d(n, "setTemplateTab", function () {
        return Re;
      }),
      r.d(n, "updateEditSchemas", function () {
        return Ue;
      }),
      r.d(n, "updateSchemas", function () {
        return xe;
      }),
      r.d(n, "updateEditSchema", function () {
        return Ne;
      }),
      r.d(n, "saveSchema", function () {
        return Fe;
      }),
      r.d(n, "deleteSchema", function () {
        return He;
      }),
      r.d(n, "saveTemplate", function () {
        return Ke;
      }),
      r.d(n, "updateKeywordsData", function () {
        return Be;
      }),
      r.d(n, "updateAIScore", function () {
        return ze;
      });
    var a = {};
    r.r(a),
      r.d(a, "appData", function () {
        return Je;
      }),
      r.d(a, "appUi", function () {
        return et;
      });
    var i = {};
    r.r(i),
      r.d(i, "getAppData", function () {
        return tt;
      }),
      r.d(i, "getDirtyMetadata", function () {
        return rt;
      }),
      r.d(i, "getAnalysisScore", function () {
        return nt;
      }),
      r.d(i, "getKeywords", function () {
        return at;
      }),
      r.d(i, "getPillarContent", function () {
        return it;
      }),
      r.d(i, "getRobots", function () {
        return ot;
      }),
      r.d(i, "getAdvancedRobots", function () {
        return ct;
      }),
      r.d(i, "getCanonicalUrl", function () {
        return ut;
      }),
      r.d(i, "getBreadcrumbTitle", function () {
        return st;
      }),
      r.d(i, "getRichSnippets", function () {
        return lt;
      }),
      r.d(i, "getShowScoreFrontend", function () {
        return pt;
      }),
      r.d(i, "isLoaded", function () {
        return dt;
      }),
      r.d(i, "getSelectedKeyword", function () {
        return ft;
      }),
      r.d(i, "isRefreshing", function () {
        return ht;
      }),
      r.d(i, "isPro", function () {
        return mt;
      }),
      r.d(i, "isDiviPageSettingsBarActive", function () {
        return bt;
      }),
      r.d(i, "isDiviRankMathModalActive", function () {
        return yt;
      }),
      r.d(i, "getFacebookTitle", function () {
        return gt;
      }),
      r.d(i, "getFacebookDescription", function () {
        return kt;
      }),
      r.d(i, "getFacebookAuthor", function () {
        return wt;
      }),
      r.d(i, "getFacebookImageID", function () {
        return vt;
      }),
      r.d(i, "getFacebookImage", function () {
        return Ot;
      }),
      r.d(i, "getFacebookHasOverlay", function () {
        return _t;
      }),
      r.d(i, "getFacebookImageOverlay", function () {
        return jt;
      }),
      r.d(i, "getPostID", function () {
        return St;
      }),
      r.d(i, "getTitle", function () {
        return Tt;
      }),
      r.d(i, "getPermalink", function () {
        return Dt;
      }),
      r.d(i, "getDescription", function () {
        return Pt;
      }),
      r.d(i, "getFeaturedImage", function () {
        return It;
      }),
      r.d(i, "getFeaturedImageHtml", function () {
        return Et;
      }),
      r.d(i, "getPrimaryTermID", function () {
        return At;
      }),
      r.d(i, "getRedirectionID", function () {
        return Ct;
      }),
      r.d(i, "getRedirectionType", function () {
        return Mt;
      }),
      r.d(i, "getRedirectionUrl", function () {
        return Rt;
      }),
      r.d(i, "getRedirectionItem", function () {
        return Ut;
      }),
      r.d(i, "hasRedirect", function () {
        return xt;
      }),
      r.d(i, "getSerpTitle", function () {
        return Ft;
      }),
      r.d(i, "getSerpSlug", function () {
        return Ht;
      }),
      r.d(i, "getSerpDescription", function () {
        return Kt;
      }),
      r.d(i, "isSnippetEditorOpen", function () {
        return Bt;
      }),
      r.d(i, "getSnippetPreviewType", function () {
        return zt;
      }),
      r.d(i, "isTrendsCtaOpen", function () {
        return Lt;
      }),
      r.d(i, "isSchemaEditorOpen", function () {
        return Gt;
      }),
      r.d(i, "isSchemaTemplatesOpen", function () {
        return Vt;
      }),
      r.d(i, "hasSchemaUpdated", function () {
        return qt;
      }),
      r.d(i, "getSchemas", function () {
        return Wt;
      }),
      r.d(i, "getEditSchemas", function () {
        return $t;
      }),
      r.d(i, "getEditingSchema", function () {
        return Jt;
      }),
      r.d(i, "getPreviewSchema", function () {
        return Qt;
      }),
      r.d(i, "getEditorTab", function () {
        return Xt;
      }),
      r.d(i, "getTemplateTab", function () {
        return Yt;
      }),
      r.d(i, "getTwitterUseFacebook", function () {
        return Zt;
      }),
      r.d(i, "getTwitterCardType", function () {
        return er;
      }),
      r.d(i, "getTwitterTitle", function () {
        return tr;
      }),
      r.d(i, "getTwitterDescription", function () {
        return rr;
      }),
      r.d(i, "getTwitterAuthor", function () {
        return nr;
      }),
      r.d(i, "getTwitterImageID", function () {
        return ar;
      }),
      r.d(i, "getTwitterImage", function () {
        return ir;
      }),
      r.d(i, "getTwitterHasOverlay", function () {
        return or;
      }),
      r.d(i, "getTwitterImageOverlay", function () {
        return cr;
      }),
      r.d(i, "getTwitterAppDescription", function () {
        return ur;
      }),
      r.d(i, "getTwitterAppIphoneID", function () {
        return sr;
      }),
      r.d(i, "getTwitterAppIphoneName", function () {
        return lr;
      }),
      r.d(i, "getTwitterAppIphoneUrl", function () {
        return pr;
      }),
      r.d(i, "getTwitterAppIpadID", function () {
        return dr;
      }),
      r.d(i, "getTwitterAppIpadName", function () {
        return fr;
      }),
      r.d(i, "getTwitterAppIpadUrl", function () {
        return hr;
      }),
      r.d(i, "getTwitterAppGoogleplayID", function () {
        return mr;
      }),
      r.d(i, "getTwitterAppGoogleplayName", function () {
        return br;
      }),
      r.d(i, "getTwitterAppGoogleplayUrl", function () {
        return yr;
      }),
      r.d(i, "getTwitterAppCountry", function () {
        return gr;
      }),
      r.d(i, "getTwitterPlayerUrl", function () {
        return kr;
      }),
      r.d(i, "getTwitterPlayerSize", function () {
        return wr;
      }),
      r.d(i, "getTwitterPlayerStream", function () {
        return vr;
      }),
      r.d(i, "getTwitterPlayerStreamCtype", function () {
        return Or;
      }),
      r.d(i, "getKeywordsData", function () {
        return _r;
      }),
      r.d(i, "getContentAIScore", function () {
        return jr;
      });
    var o = r(2),
      c = r(8),
      u = r(6);
    function s(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      return (
        (t = Object(u.applyFilters)("rank_math_sanitize_data", t, e, r)),
        null !== n &&
          (n = Object(u.applyFilters)(
            "rank_math_sanitize_meta_value",
            n,
            e,
            r
          )),
        (n = null === n ? t : n),
        Object(u.doAction)("rank_math_data_changed", e, t, r),
        {
          type: "RANK_MATH_APP_DATA",
          key: e,
          value: t,
          metaKey: r,
          metaValue: n,
        }
      );
    }
    function l(e, t) {
      return (
        Object(u.doAction)("rank_math_update_app_ui", e, t),
        { type: "RANK_MATH_APP_UI", key: e, value: t }
      );
    }
    function p(e) {
      return (
        c.a.setVariable("focuskw", e.split(",")[0]),
        rankMathEditor.refresh("keyword"),
        s("keywords", e, "rank_math_focus_keyword")
      );
    }
    function d(e) {
      return s(
        "pillarContent",
        e,
        "rank_math_pillar_content",
        !0 === e ? "on" : "off"
      );
    }
    function f(e) {
      return s(
        "showScoreFrontend",
        e,
        "rank_math_dont_show_seo_score",
        !0 === e ? "off" : "on"
      );
    }
    function h(e) {
      return s("score", e, "rank_math_seo_score");
    }
    function m(e) {
      return s("canonicalUrl", e, "rank_math_canonical_url");
    }
    function b(e) {
      return s("advancedRobots", e, "rank_math_advanced_robots");
    }
    function y(e) {
      return s("robots", e, "rank_math_robots", Object.keys(e));
    }
    function g(e) {
      return s("breadcrumbTitle", e, "rank_math_breadcrumb_title");
    }
    function k() {
      return s("dirtyMetadata", {});
    }
    function w(e) {
      return s("facebookTitle", e, "rank_math_facebook_title");
    }
    function v(e) {
      return s("facebookDescription", e, "rank_math_facebook_description");
    }
    function O(e) {
      return s("facebookImage", e, "rank_math_facebook_image");
    }
    function _(e) {
      return s("facebookImageID", e, "rank_math_facebook_image_id");
    }
    function j(e) {
      return s(
        "facebookHasOverlay",
        e,
        "rank_math_facebook_enable_image_overlay",
        !0 === e ? "on" : "off"
      );
    }
    function S(e) {
      return s("facebookImageOverlay", e, "rank_math_facebook_image_overlay");
    }
    function T(e) {
      return (rankMath.objectID = e), s("postID", e);
    }
    function D(e) {
      return s("permalink", e, "permalink");
    }
    function P(e) {
      return s("title", e, "rank_math_title");
    }
    function I(e) {
      return s("description", e, "rank_math_description");
    }
    function E(e) {
      return s("featuredImage", e);
    }
    function A(e, t) {
      return s("primaryTerm", parseInt(e), "rank_math_primary_" + t);
    }
    function C(e, t) {
      return s(e, t);
    }
    function M(e) {
      return l("redirectionItem", e);
    }
    function R() {
      return l("redirectionItem", {});
    }
    function U(e) {
      return l("hasRedirect", e);
    }
    var x = r(7),
      N = r(1),
      F = r(16),
      H = function (e, t) {
        return (
          (e = (e = x.Helpers.cleanText(e)).replace(/\r?\n|\r/g, " ")),
          t ? Object(N.truncate)(e, { length: t, separator: " " }) : e
        );
      },
      K = function (e) {
        var t = rankMathEditor.assessor.dataCollector.getData(),
          r = t.excerpt,
          n = (function (e) {
            if (Object(N.isEmpty)(e)) return "";
            (e = x.Helpers.stripScript(e)),
              (e = x.Helpers.stripStyle(e)),
              (e = Object(N.unescape)(e).replace(
                /\[caption[^\]]*\](.*)\[\/caption\]/g,
                ""
              ));
            var t = Object(N.filter)(
              x.Helpers.matchParagraphs(e, !0, !0),
              function (e) {
                return "" !== e.trim();
              }
            );
            if (!t.length) return "";
            var r = rankMathEditor.getPrimaryKeyword();
            if ("" !== r) {
              var n = Object(N.filter)(t, function (e) {
                return Object(N.includes)(e.toLowerCase(), r.toLowerCase());
              });
              if (0 < n.length) return H(n[0], 160);
            }
            return H(t[0], 160);
          })(t.content),
          a =
            Object(N.isUndefined)(r) || Object(N.isEmpty)(r)
              ? n
              : Object(N.unescape)(r);
        if (
          (c.a.setVariable("excerpt", a),
          c.a.setVariable("seo_description", a),
          "" !==
            (e = Object(F.a)(
              Object(u.applyFilters)("rankMath/description", e)
            )))
        )
          return x.Helpers.cleanText(e);
        if (!Object(N.isUndefined)(r) && !Object(N.isEmpty)(r))
          return x.Helpers.cleanText(r);
        var i = Object(N.unescape)(
          rankMath.assessor.serpData.descriptionTemplate
        );
        return Object(N.isUndefined)(i) || "" === i
          ? n
          : x.Helpers.cleanText(i);
      };
    function B(e) {
      return (
        (e = c.a.swap("" !== e ? e : rankMath.assessor.serpData.titleTemplate)),
        rankMathEditor.refresh("title"),
        l("serpTitle", e)
      );
    }
    function z(e) {
      return (
        (e = "" !== e ? e : rankMathEditor.assessor.dataCollector.getSlug()),
        rankMathEditor.refresh("permalink"),
        l("serpSlug", e)
      );
    }
    function L(e) {
      return (
        (e = c.a.swap(K(e))),
        rankMathEditor.refresh("description"),
        l("serpDescription", e)
      );
    }
    function G(e) {
      return l("isSnippetEditorOpen", e);
    }
    function V(e) {
      return l("snippetPreviewType", e);
    }
    function q(e) {
      return l("isTrendsCtaOpen", e);
    }
    function W(e) {
      return s(
        "twitterUseFacebook",
        e,
        "rank_math_twitter_use_facebook",
        !0 === e ? "on" : "off"
      );
    }
    function $(e) {
      return s("twitterCardType", e, "rank_math_twitter_card_type");
    }
    function J(e) {
      return s("twitterTitle", e, "rank_math_twitter_title");
    }
    function Q(e) {
      return s("twitterDescription", e, "rank_math_twitter_description");
    }
    function X(e) {
      return s("twitterAuthor", e, "rank_math_twitter_author");
    }
    function Y(e) {
      return s("twitterImageID", e, "rank_math_twitter_image_id");
    }
    function Z(e) {
      return s("twitterImage", e, "rank_math_twitter_image");
    }
    function ee(e) {
      return s(
        "twitterHasOverlay",
        e,
        "rank_math_twitter_enable_image_overlay",
        !0 === e ? "on" : "off"
      );
    }
    function te(e) {
      return s("twitterImageOverlay", e, "rank_math_twitter_image_overlay");
    }
    function re(e) {
      return s("twitterPlayerUrl", e, "rank_math_twitter_player_url");
    }
    function ne(e) {
      return s("twitterPlayerSize", e, "rank_math_twitter_player_size");
    }
    function ae(e) {
      return s("twitterPlayerStream", e, "rank_math_twitter_player_stream");
    }
    function ie(e) {
      return s(
        "twitterPlayerStreamCtype",
        e,
        "rank_math_twitter_player_stream_ctype"
      );
    }
    function oe(e) {
      return s("twitterAppDescription", e, "rank_math_twitter_app_description");
    }
    function ce(e) {
      return s("twitterAppIphoneID", e, "rank_math_twitter_app_iphone_id");
    }
    function ue(e) {
      return s("twitterAppIphoneName", e, "rank_math_twitter_app_iphone_name");
    }
    function se(e) {
      return s("twitterAppIphoneUrl", e, "rank_math_twitter_app_iphone_url");
    }
    function le(e) {
      return s("twitterAppIpadID", e, "rank_math_twitter_app_ipad_id");
    }
    function pe(e) {
      return s("twitterAppIpadName", e, "rank_math_twitter_app_ipad_name");
    }
    function de(e) {
      return s("twitterAppIpadUrl", e, "rank_math_twitter_app_ipad_url");
    }
    function fe(e) {
      return s(
        "twitterAppGoogleplayID",
        e,
        "rank_math_twitter_app_googleplay_id"
      );
    }
    function he(e) {
      return s(
        "twitterAppGoogleplayName",
        e,
        "rank_math_twitter_app_googleplay_name"
      );
    }
    function me(e) {
      return s(
        "twitterAppGoogleplayUrl",
        e,
        "rank_math_twitter_app_googleplay_url"
      );
    }
    function be(e) {
      return s("twitterAppCountry", e, "rank_math_twitter_app_country");
    }
    function ye(e) {
      return l("isLoaded", e);
    }
    function ge(e) {
      return l("selectedKeyword", e);
    }
    function ke() {
      return l("refreshResults", Date.now());
    }
    function we() {
      return l("isPro", !0);
    }
    function ve(e) {
      return l("isDiviPageSettingsBarActive", e);
    }
    function Oe(e) {
      return l("isDiviRankMathModalActive", e);
    }
    var _e = r(0),
      je = r(13),
      Se = r.n(je);
    function Te(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function De(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Te(Object(r), !0).forEach(function (t) {
              Pe(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : Te(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function Pe(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    function Ie(e) {
      return l("isSchemaEditorOpen", e);
    }
    function Ee(e) {
      return l("isSchemaTemplatesOpen", e);
    }
    function Ae(e) {
      return l("schemaUpdated", e);
    }
    function Ce(e) {
      return l("editingSchemaId", e);
    }
    function Me(e) {
      return l("editorTab", e);
    }
    function Re(e) {
      return l("templateTab", e);
    }
    function Ue(e) {
      return l("editSchemas", e);
    }
    function xe(e) {
      return s("schemas", e);
    }
    function Ne(e, t) {
      var r = De({}, Object(o.select)("rank-math").getEditSchemas());
      return (r[e] = t), l("editSchemas", r);
    }
    function Fe(e, t) {
      var r = De({}, Object(o.select)("rank-math").getSchemas());
      return (r[e] = t), s("schemas", r);
    }
    function He(e) {
      var t = De({}, Object(o.select)("rank-math").getSchemas());
      return (
        delete t[e],
        Object(u.doAction)("rank_math_schema_trash", e),
        s("schemas", t, "rank_math_delete_" + e, "")
      );
    }
    function Ke(e, t, r) {
      return (
        Se()({
          method: "POST",
          path: "rankmath/v1/saveTemplate",
          data: { schema: e, postId: r },
        }).then(function (r) {
          t({ loading: !1, showNotice: !0, postId: r.id }),
            setTimeout(function () {
              t({ showNotice: !1 }),
                Object(N.get)(rankMath, "isTemplateScreen", !1) &&
                  ((document.title = Object(_e.__)("Edit Schema", "rank-math")),
                  window.history.pushState(
                    null,
                    "",
                    r.link.replace(/&amp;/g, "&")
                  ));
            }, 2e3),
            rankMath.schemaTemplates.push({
              schema: e,
              title: e.metadata.title,
              type: e["@type"],
            });
        }),
        t({ loading: !0 }),
        { type: "DONT_WANT_TO_DO_SOMETHING" }
      );
    }
    function Be(e) {
      return l("keywordsData", e);
    }
    function ze(e) {
      return s("contentAIScore", e, "rank_math_contentai_score");
    }
    function Le(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function Ge(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Le(Object(r), !0).forEach(function (t) {
              Ve(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : Le(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function Ve(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    var qe = rankMath.assessor.serpData,
      We = rankMath.assessor.hasRedirection,
      $e = {
        postID: null,
        title: qe.title ? qe.title : qe.titleTemplate,
        description: qe.description,
        keywords: qe.focusKeywords,
        pillarContent: qe.pillarContent,
        featuredImage: "",
        permalink: !1,
        primaryTerm: qe.primaryTerm,
        robots: qe.robots,
        advancedRobots: qe.advancedRobots,
        canonicalUrl: qe.canonicalUrl,
        breadcrumbTitle: qe.breadcrumbTitle,
        showScoreFrontend: qe.showScoreFrontend,
        redirectionID: We
          ? Object(N.get)(rankMath.assessor, "redirection.id", "")
          : "",
        redirectionType: We
          ? Object(N.get)(rankMath.assessor, "redirection.header_code", "")
          : "",
        redirectionUrl: We
          ? Object(N.get)(rankMath.assessor, "redirection.url_to", "")
          : "",
        facebookTitle: qe.facebookTitle,
        facebookImage: qe.facebookImage,
        facebookImageID: qe.facebookImageID,
        facebookAuthor: qe.facebookAuthor,
        facebookDescription: qe.facebookDescription,
        facebookHasOverlay: qe.facebookHasOverlay,
        facebookImageOverlay: qe.facebookImageOverlay,
        twitterTitle: qe.twitterTitle,
        twitterImage: qe.twitterImage,
        twitterAuthor: qe.twitterAuthor,
        twitterImageID: qe.twitterImageID,
        twitterCardType: qe.twitterCardType,
        twitterUseFacebook: qe.twitterUseFacebook,
        twitterDescription: qe.twitterDescription,
        twitterHasOverlay: qe.twitterHasOverlay,
        twitterImageOverlay: qe.twitterImageOverlay,
        twitterPlayerUrl: qe.twitterPlayerUrl,
        twitterPlayerSize: qe.twitterPlayerSize,
        twitterPlayerStream: qe.twitterPlayerStream,
        twitterPlayerStreamCtype: qe.twitterPlayerStreamCtype,
        twitterAppDescription: qe.twitterAppDescription,
        twitterAppIphoneName: qe.twitterAppIphoneName,
        twitterAppIphoneID: qe.twitterAppIphoneID,
        twitterAppIphoneUrl: qe.twitterAppIphoneUrl,
        twitterAppIpadName: qe.twitterAppIpadName,
        twitterAppIpadID: qe.twitterAppIpadID,
        twitterAppIpadUrl: qe.twitterAppIpadUrl,
        twitterAppGoogleplayName: qe.twitterAppGoogleplayName,
        twitterAppGoogleplayID: qe.twitterAppGoogleplayID,
        twitterAppGoogleplayUrl: qe.twitterAppGoogleplayUrl,
        twitterAppCountry: qe.twitterAppCountry,
        schemas: Object(N.get)(rankMath, "schemas", {}),
        score: 0,
        contentAIScore: {},
        dirtyMetadata: {},
      };
    function Je() {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $e,
        r = arguments.length > 1 ? arguments[1] : void 0,
        n = Ge({}, t.dirtyMetadata);
      return (
        !1 !== r.metaKey && (n[r.metaKey] = r.metaValue),
        "RANK_MATH_APP_DATA" === r.type
          ? "dirtyMetadata" === r.key
            ? Ge(Ge({}, t), {}, { dirtyMetadata: r.value })
            : Ge(
                Ge({}, t),
                {},
                (Ve((e = {}), r.key, r.value), Ve(e, "dirtyMetadata", n), e)
              )
          : t
      );
    }
    function Qe(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function Xe(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Qe(Object(r), !0).forEach(function (t) {
              Ye(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : Qe(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function Ye(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    var Ze = {
      isLoaded: !1,
      isPro: !1,
      selectedKeyword: { tag: "", index: 0, data: { value: "" } },
      hasRedirect:
        rankMath.assessor.hasRedirection &&
        !Object(N.isEmpty)(
          Object(N.get)(rankMath.assessor, "redirection.id", "")
        ) &&
        !Object(N.isEmpty)(
          Object(N.get)(rankMath.assessor, "redirection.url_to", "")
        ),
      serpTitle: "",
      serpSlug: "",
      serpDescription: "",
      isSnippetEditorOpen: !1,
      snippetPreviewType: "",
      refreshResults: "",
      redirectionItem: {},
      isTrendsCtaOpen: !1,
      editorTab: "",
      templateTab: "",
      editSchemas: {},
      editingSchemaId: "",
      isSchemaEditorOpen: !1,
      isSchemaTemplatesOpen: !1,
      schemaUpdated: !1,
      isDiviRankMathModalActive: !1,
      isDiviPageSettingsBarActive: !1,
      keywordsData: Object(N.get)(rankMath, "ca_data", []),
    };
    function et() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ze,
        t = arguments.length > 1 ? arguments[1] : void 0;
      return "RANK_MATH_APP_UI" === t.type
        ? Xe(Xe({}, e), {}, Ye({}, t.key, t.value))
        : e;
    }
    function tt(e) {
      return e.appData;
    }
    function rt(e) {
      return e.appData.dirtyMetadata;
    }
    function nt(e) {
      return e.appData.score;
    }
    function at(e) {
      return e.appData.keywords;
    }
    function it(e) {
      return e.appData.pillarContent;
    }
    function ot(e) {
      return e.appData.robots;
    }
    function ct(e) {
      return e.appData.advancedRobots;
    }
    function ut(e) {
      return e.appData.canonicalUrl;
    }
    function st(e) {
      return e.appData.breadcrumbTitle;
    }
    function lt(e) {
      return "todo";
    }
    function pt(e) {
      return e.appData.showScoreFrontend;
    }
    function dt(e) {
      return e.appUi.isLoaded;
    }
    function ft(e) {
      return e.appUi.selectedKeyword;
    }
    function ht(e) {
      return e.appUi.refreshResults;
    }
    function mt(e) {
      return e.appUi.isPro;
    }
    function bt(e) {
      return e.appUi.isDiviPageSettingsBarActive;
    }
    function yt(e) {
      return e.appUi.isDiviRankMathModalActive;
    }
    function gt(e) {
      return e.appData.facebookTitle;
    }
    function kt(e) {
      return e.appData.facebookDescription;
    }
    function wt(e) {
      return e.appData.facebookAuthor;
    }
    function vt(e) {
      return e.appData.facebookImageID;
    }
    function Ot(e) {
      return e.appData.facebookImage;
    }
    function _t(e) {
      return e.appData.facebookHasOverlay;
    }
    function jt(e) {
      return "" !== e.appData.facebookImageOverlay
        ? e.appData.facebookImageOverlay
        : "play";
    }
    function St(e) {
      return e.appData.postID;
    }
    function Tt(e) {
      return e.appData.title;
    }
    function Dt(e) {
      return e.appData.permalink;
    }
    function Pt(e) {
      return e.appData.description;
    }
    function It(e) {
      return e.appData.featuredImage;
    }
    function Et(e) {
      var t = e.appData.featuredImage;
      return '<img src="'
        .concat(t.source_url, '" alt="')
        .concat(t.alt_text, '" >');
    }
    function At(e) {
      return e.appData.primaryTerm;
    }
    function Ct(e) {
      return e.appData.redirectionID;
    }
    function Mt(e) {
      return e.appData.redirectionType;
    }
    function Rt(e) {
      return e.appData.redirectionUrl;
    }
    function Ut(e) {
      return e.appUi.redirectionItem;
    }
    function xt(e) {
      return e.appUi.hasRedirect;
    }
    var Nt = r(9);
    function Ft(e) {
      return Object(F.a)(e.appUi.serpTitle);
    }
    function Ht(e) {
      return Object(Nt.safeDecodeURIComponent)(e.appUi.serpSlug);
    }
    function Kt(e) {
      return e.appUi.serpDescription;
    }
    function Bt(e) {
      return e.appUi.isSnippetEditorOpen;
    }
    function zt(e) {
      return e.appUi.snippetPreviewType;
    }
    function Lt(e) {
      return e.appUi.isTrendsCtaOpen;
    }
    function Gt(e) {
      return e.appUi.isSchemaEditorOpen;
    }
    function Vt(e) {
      return e.appUi.isSchemaTemplatesOpen;
    }
    function qt(e) {
      return e.appUi.schemaUpdated;
    }
    function Wt(e) {
      return e.appData.schemas;
    }
    function $t(e) {
      return e.appUi.editSchemas;
    }
    function Jt(e) {
      return {
        id: e.appUi.editingSchemaId,
        data: e.appUi.editSchemas[e.appUi.editingSchemaId],
      };
    }
    function Qt(e) {
      return e.appData.schemas[e.appUi.editingSchemaId];
    }
    function Xt(e) {
      return e.appUi.editorTab;
    }
    function Yt(e) {
      return e.appUi.templateTab;
    }
    function Zt(e) {
      return e.appData.twitterUseFacebook;
    }
    function er(e) {
      return e.appData.twitterCardType;
    }
    function tr(e) {
      return e.appData.twitterTitle;
    }
    function rr(e) {
      return e.appData.twitterDescription;
    }
    function nr(e) {
      return e.appData.twitterAuthor;
    }
    function ar(e) {
      return e.appData.twitterImageID;
    }
    function ir(e) {
      return e.appData.twitterImage;
    }
    function or(e) {
      return e.appData.twitterHasOverlay;
    }
    function cr(e) {
      return "" !== e.appData.twitterImageOverlay
        ? e.appData.twitterImageOverlay
        : "play";
    }
    function ur(e) {
      return e.appData.twitterAppDescription;
    }
    function sr(e) {
      return e.appData.twitterAppIphoneID;
    }
    function lr(e) {
      return e.appData.twitterAppIphoneName;
    }
    function pr(e) {
      return e.appData.twitterAppIphoneUrl;
    }
    function dr(e) {
      return e.appData.twitterAppIpadID;
    }
    function fr(e) {
      return e.appData.twitterAppIpadName;
    }
    function hr(e) {
      return e.appData.twitterAppIpadUrl;
    }
    function mr(e) {
      return e.appData.twitterAppGoogleplayID;
    }
    function br(e) {
      return e.appData.twitterAppGoogleplayName;
    }
    function yr(e) {
      return e.appData.twitterAppGoogleplayUrl;
    }
    function gr(e) {
      return e.appData.twitterAppCountry;
    }
    function kr(e) {
      return e.appData.twitterPlayerUrl;
    }
    function wr(e) {
      return e.appData.twitterPlayerSize;
    }
    function vr(e) {
      return e.appData.twitterPlayerStream;
    }
    function Or(e) {
      return e.appData.twitterPlayerStreamCtype;
    }
    function _r(e) {
      return e.appUi.keywordsData;
    }
    function jr(e) {
      return e.appData.contentAIScore;
    }
    var Sr = Object(o.registerStore)("rank-math", {
      reducer: Object(o.combineReducers)(a),
      selectors: i,
      actions: n,
    });
    function Tr() {
      return Sr;
    }
  },
  function (e, t, r) {
    "use strict";
    var n = document.createElement("div");
    t.a = function (e) {
      return (
        e &&
          "string" == typeof e &&
          ((e = e
            .replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "")
            .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "")),
          (n.innerHTML = e),
          (e = n.textContent),
          (n.textContent = "")),
        e
      );
    };
  },
  ,
  ,
  function (e, t) {
    e.exports = wp.blocks;
  },
  function (e, t, r) {
    "use strict";
    var n = r(1);
    t.a = function () {
      return !(
        Object(n.isNil)(window.wp) ||
        Object(n.isNil)(wp.data) ||
        Object(n.isNil)(wp.data.select("core/editor")) ||
        !window.document.body.classList.contains("block-editor-page") ||
        !Object(n.isFunction)(
          wp.data.select("core/editor").getEditedPostAttribute
        )
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(4),
      a = Object(n.createSlotFill)("RankMathAfterEditor"),
      i = a.Fill,
      o = a.Slot,
      c = function (e) {
        var t = e.children,
          r = e.className;
        return wp.element.createElement(
          i,
          null,
          wp.element.createElement(n.PanelRow, { className: r }, t)
        );
      };
    (c.Slot = o), (t.a = c);
  },
  function (e, t, r) {
    "use strict";
    var n = r(4),
      a = Object(n.createSlotFill)("RankMathAdvancedTab"),
      i = a.Fill,
      o = a.Slot,
      c = function (e) {
        var t = e.children,
          r = e.className;
        return wp.element.createElement(
          i,
          null,
          wp.element.createElement(n.PanelRow, { className: r }, t)
        );
      };
    (c.Slot = o), (t.a = c);
  },
  function (e, t, r) {
    "use strict";
    var n = r(4),
      a = Object(n.createSlotFill)("RankMathAfterFocusKeyword"),
      i = a.Fill,
      o = a.Slot,
      c = function (e) {
        var t = e.children,
          r = e.className;
        return wp.element.createElement(
          i,
          null,
          wp.element.createElement("div", { className: r }, t)
        );
      };
    (c.Slot = o), (t.a = c);
  },
  function (e, t, r) {
    "use strict";
    t.a = function (e) {
      return 100 < e
        ? "bad-fk dark"
        : 80 < e
        ? "good-fk"
        : 50 < e
        ? "ok-fk"
        : "bad-fk";
    };
  },
  function (e, t, r) {
    "use strict";
    var n = { "&amp;": "&", "&quot;": '"', "&#39;": "'" },
      a = /&(?:amp|quot|#(0+)?39);/g,
      i = RegExp(a.source);
    t.a = function (e) {
      return e && i.test(e)
        ? e.replace(a, function (e) {
            return n[e] || "'";
          })
        : e || "";
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      a = r(6);
    function i(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    var o = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          rankMath.is_front_page &&
            (Object(a.addFilter)(
              "rankMath_analysis_contentLength",
              "rank-math",
              this.contentLength
            ),
            Object(a.addFilter)(
              "rankMath_analysis_contentLength_boundaries",
              "rank-math",
              this.contentLengthBoundary
            ));
      }
      var t, r, o;
      return (
        (t = e),
        (r = [
          {
            key: "contentLength",
            value: function (e) {
              return {
                hasScore: e.hasScore,
                failed: Object(n.__)(
                  "Content is %1$d words long. Consider using at least 300 words.",
                  "rank-math"
                ),
                tooltipText: Object(n.__)(
                  "Minimum recommended content length should be 300 words.",
                  "rank-math"
                ),
                emptyContent: Object(n.sprintf)(
                  Object(n.__)("Content should be %1$s long.", "rank-math"),
                  '<a href="https://s.rankmath.com/100contentlength" target="_blank">' +
                    Object(n.__)("300 words", "rank-math") +
                    "</a>"
                ),
              };
            },
          },
          {
            key: "contentLengthBoundary",
            value: function () {
              return {
                recommended: { boundary: 299, score: 8 },
                belowRecommended: { boundary: 200, score: 5 },
                low: { boundary: 50, score: 2 },
              };
            },
          },
        ]) && i(t.prototype, r),
        o && i(t, o),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e
      );
    })();
    t.a = o;
  },
  function (e, t, r) {
    "use strict";
    var n = r(1),
      a = r(0),
      i = r(2),
      o = r(13),
      c = r.n(o),
      u = r(9),
      s = r(6),
      l = r(8),
      p = r(20);
    function d(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function f(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? d(Object(r), !0).forEach(function (t) {
              h(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : d(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function h(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    function m(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    var b = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.initialize = !1),
          (this.isSavingRedirection = !1),
          (this.isSavingSchemas = !1),
          (this.oldSlug = !1),
          (this._data = {
            id: !1,
            slug: !1,
            permalink: !1,
            content: !1,
            title: !1,
            excerpt: !1,
            featuredImage: !1,
          }),
          (this.refresh = this.refresh.bind(this)),
          (this.isSavingPost = this.isSavingPost.bind(this)),
          (this.getPostAttribute = this.getPostAttribute.bind(this)),
          this.subscribeToGutenberg();
      }
      var t, r, o;
      return (
        (t = e),
        (r = [
          {
            key: "collectGutenbergData",
            value: function () {
              if (Object(p.a)())
                return (
                  this._coreEditorSelect ||
                    (this._coreEditorSelect = Object(i.select)("core/editor")),
                  !1 === this.oldSlug &&
                    "" !== this.getSlug() &&
                    (this.oldSlug = this.getSlug()),
                  {
                    id: this.getPostID(),
                    slug: this.getSlug(),
                    permalink: this.getPermalink(),
                    content: this.getPostAttribute("content"),
                    title: this.getPostAttribute("title"),
                    excerpt: this.getPostAttribute("excerpt"),
                    featuredImage: this.getFeaturedImage(),
                  }
                );
            },
          },
          {
            key: "getPostID",
            value: function () {
              return this._coreEditorSelect.getCurrentPostId();
            },
          },
          {
            key: "getPermalink",
            value: function () {
              if ("auto-draft" === this.getPostAttribute("status")) return "";
              var e = this.getPostAttribute("generated_slug");
              return (
                ("auto-draft" !== e && "en" === rankMath.locale) || (e = ""),
                Object(u.safeDecodeURIComponent)(
                  this._coreEditorSelect.getPermalink()
                )
              );
            },
          },
          {
            key: "getSlug",
            value: function () {
              var e = this.getPostAttribute("generated_slug");
              return (
                ("auto-draft" !== e && "en" === rankMath.locale) || (e = ""),
                Object(u.safeDecodeURIComponent)(
                  this.getPostAttribute("slug") || e
                )
              );
            },
          },
          {
            key: "getFeaturedImage",
            value: function () {
              var e = this.getPostAttribute("featured_media");
              if (this.isValidMediaId(e)) {
                var t = Object(i.select)("core").getMedia(e);
                if (!Object(n.isUndefined)(t)) return t;
              }
            },
          },
          {
            key: "isValidMediaId",
            value: function (e) {
              return "number" == typeof e && 0 < e;
            },
          },
          {
            key: "getPostAttribute",
            value: function (e) {
              return Object(p.a)()
                ? (this._coreEditorSelect ||
                    (this._coreEditorSelect = Object(i.select)("core/editor")),
                  this._coreEditorSelect.getEditedPostAttribute(e))
                : "";
            },
          },
          {
            key: "subscribeToGutenberg",
            value: function () {
              (this.subscriber = Object(n.debounce)(this.refresh, 500)),
                Object(i.subscribe)(this.subscriber),
                Object(i.subscribe)(this.isSavingPost);
            },
          },
          {
            key: "refresh",
            value: function () {
              var e = f({}, this._data);
              (this._data = this.collectGutenbergData()),
                this.handleEditorChange(e);
            },
          },
          {
            key: "isSavingPost",
            value: function () {
              var e = Object(i.select)("core/editor");
              if (!e.isAutosavingPost() && e.isSavingPost()) {
                var t = Object(i.select)("rank-math").getDirtyMetadata();
                Object(n.isEmpty)(t) ||
                  (c()({
                    method: "POST",
                    path: "rankmath/v1/updateMeta",
                    data: {
                      objectID: rankMath.objectID,
                      objectType: rankMath.objectType,
                      meta: t,
                      content: this.getPostAttribute("content"),
                    },
                  }).then(function (e) {
                    Object(s.doAction)("rank_math_metadata_updated", e);
                  }),
                  Object(i.dispatch)("rank-math").resetDirtyMetadata()),
                  "publish" === this.getPostAttribute("status") &&
                    (this.saveRedirection(),
                    this.autoCreateRedirectionNotice()),
                  this.saveSchemas();
              }
            },
          },
          {
            key: "saveSchemas",
            value: function () {
              var e = this;
              if (!this.isSavingSchemas) {
                var t = Object(i.select)("rank-math").getSchemas();
                if (
                  !Object(n.isEmpty)(t) &&
                  Object(i.select)("rank-math").hasSchemaUpdated()
                ) {
                  this.isSavingSchemas = !0;
                  var r = Object(i.select)("rank-math").getEditSchemas();
                  c()({
                    method: "POST",
                    path: "rankmath/v1/updateSchemas",
                    data: {
                      objectID: this.getPostID(),
                      objectType: rankMath.objectType,
                      schemas: t,
                    },
                  }).then(function (a) {
                    var o = f({}, t),
                      c = f({}, r);
                    Object(n.isEmpty)(a) ||
                      Object(n.map)(a, function (e, t) {
                        (o["schema-" + e] = f({}, o[t])),
                          (c["schema-" + e] = f({}, c[t])),
                          delete o[t],
                          delete c[t];
                      }),
                      Object(i.dispatch)("rank-math").updateSchemas(o),
                      Object(i.dispatch)("rank-math").updateEditSchemas(c),
                      setTimeout(function () {
                        Object(i.dispatch)("rank-math").schemaUpdated(!1),
                          Object(s.doAction)("rank_math_schema_changed"),
                          (e.isSavingSchemas = !1);
                      }, 2e3);
                  });
                }
              }
            },
          },
          {
            key: "saveRedirection",
            value: function () {
              var e = this;
              if (!this.isSavingRedirection) {
                var t = Object(i.select)("rank-math").getRedirectionItem();
                if (!Object(n.isEmpty)(t)) {
                  (this.isSavingRedirection = !0),
                    (t.objectID = this.getPostID()),
                    (t.redirectionSources = this.getPermalink());
                  var r = Object(i.dispatch)("rank-math"),
                    a = Object(i.dispatch)("core/notices");
                  r.resetRedirection(),
                    c()({
                      method: "POST",
                      path: "rankmath/v1/updateRedirection",
                      data: t,
                    }).then(function (t) {
                      "delete" === t.action
                        ? (a.createInfoNotice(t.message, {
                            id: "redirectionNotice",
                          }),
                          r.updateRedirection("redirectionID", 0))
                        : "update" === t.action
                        ? a.createInfoNotice(t.message, {
                            id: "redirectionNotice",
                          })
                        : "new" === t.action &&
                          (r.updateRedirection("redirectionID", t.id),
                          a.createSuccessNotice(t.message, {
                            id: "redirectionNotice",
                          })),
                        setTimeout(function () {
                          (e.isSavingRedirection = !1),
                            a.removeNotice("redirectionNotice");
                        }, 2e3);
                    });
                }
              }
            },
          },
          {
            key: "autoCreateRedirectionNotice",
            value: function () {
              if (
                rankMath.assessor.hasRedirection &&
                Object(n.get)(
                  rankMath,
                  ["assessor", "autoCreateRedirection"],
                  !1
                ) &&
                !Object(i.select)("core/editor").isEditedPostNew() &&
                !1 !== this.oldSlug
              ) {
                var e = this.getSlug();
                if (this.oldSlug !== e) {
                  var t = Object(i.dispatch)("core/notices");
                  (this.oldSlug = e),
                    t.createSuccessNotice(
                      Object(a.__)("Auto redirection created.", "rank-math"),
                      { id: "redirectionAutoCreationNotice" }
                    ),
                    setTimeout(function () {
                      t.removeNotice("redirectionAutoCreationNotice");
                    }, 2e3);
                }
              }
            },
          },
          {
            key: "handleEditorChange",
            value: function (e) {
              var t = this,
                r = {
                  id: "handleIDChange",
                  slug: "handleSlugChange",
                  title: "handleTitleChange",
                  excerpt: "handleExcerptChange",
                  content: "handleContentChange",
                  featuredImage: "handleFeaturedImageChange",
                };
              if (Object(n.isInteger)(e.id))
                return this.initialize
                  ? void Object(n.forEach)(r, function (r, n) {
                      t._data[n] !== e[n] && t[r](t._data[n]);
                    })
                  : ((this.initialize = !0),
                    Object(n.forEach)(r, function (e, r) {
                      t[e](t._data[r]);
                    }),
                    void rankMathEditor.refresh("init"));
              Object(i.dispatch)("rank-math").refreshResults();
            },
          },
          {
            key: "handleIDChange",
            value: function (e) {
              Object(i.dispatch)("rank-math").updatePostID(e),
                Object(i.dispatch)("rank-math").toggleLoaded(!0);
            },
          },
          {
            key: "handleSlugChange",
            value: function () {
              "" !== this.getSlug() &&
                !1 === this.oldSlug &&
                (this.oldSlug = this.getSlug()),
                rankMathEditor.refresh("permalink");
            },
          },
          {
            key: "handleTitleChange",
            value: function (e) {
              l.a.setVariable("title", e),
                l.a.setVariable("term", e),
                l.a.setVariable("author", e),
                Object(i.dispatch)("rank-math").updateSerpTitle(
                  Object(i.select)("rank-math").getTitle()
                ),
                rankMathEditor.refresh("title");
            },
          },
          {
            key: "handleExcerptChange",
            value: function (e) {
              l.a.setVariable("excerpt", e),
                l.a.setVariable("excerpt_only", e),
                l.a.setVariable("wc_shortdesc", e),
                l.a.setVariable("seo_description", e),
                Object(i.dispatch)("rank-math").updateSerpDescription(
                  Object(i.select)("rank-math").getDescription()
                );
            },
          },
          {
            key: "handleFeaturedImageChange",
            value: function (e) {
              Object(i.dispatch)("rank-math").updateFeaturedImage(e),
                rankMathEditor.refresh("featuredImage");
            },
          },
          {
            key: "handleContentChange",
            value: function () {
              Object(i.dispatch)("rank-math").updateSerpDescription(
                Object(i.select)("rank-math").getDescription()
              ),
                rankMathEditor.refresh("content");
            },
          },
          {
            key: "getData",
            value: function () {
              return this._data;
            },
          },
        ]) && m(t.prototype, r),
        o && m(t, o),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e
      );
    })();
    t.a = b;
  },
  function (e, t, r) {
    "use strict";
    var n = r(3),
      a = r.n(n),
      i = r(20),
      o = r(2);
    function c(e) {
      return (
        (c =
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
              }),
        c(e)
      );
    }
    function u(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function s(e, t, r) {
      return (
        t && u(e.prototype, t),
        r && u(e, r),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    var l = s(function e() {
      if (
        ((function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
        "post" === rankMath.objectType && rankMath.postSettings.linkSuggestions)
      ) {
        a.a.fn.extend({
          insertLink: function (e, t) {
            var r = this[0],
              n = "";
            if (r.selectionStart || "0" === r.selectionStart) {
              var a = r.selectionStart,
                i = r.selectionEnd,
                o = r.scrollTop;
              (n = '<a href="' + e + '">' + r.value.substring(a, i) + "</a>"),
                a === i && (n = '<a href="' + e + '">' + t + "</a>"),
                (r.value =
                  r.value.substring(0, a) +
                  n +
                  r.value.substring(i, r.value.length)),
                r.focus(),
                (r.selectionStart = a + n.length),
                (r.selectionEnd = a + n.length),
                (r.scrollTop = o);
            } else
              (n = '<a href="' + e + '">' + t + "</a>"),
                (r.value += n),
                r.focus();
          },
        });
        if (
          ("function" == typeof ClipboardJS &&
            a()(".suggestion-copy").on("click", function (e) {
              e.preventDefault(), new ClipboardJS(".suggestion-copy");
              var t = a()(this).parent().next(".suggestion-title"),
                r = t.html();
              t.text("Link Copied"),
                setTimeout(function () {
                  t.html(r);
                }, 1500);
            }),
          "object" !==
            ("undefined" == typeof tinymce ? "undefined" : c(tinymce)))
        )
          return !0;
        var t = null,
          r = null;
        a()(".suggestion-insert").on("click", function (e) {
          e.preventDefault();
          var n,
            c,
            u,
            s,
            l = a()(this);
          if (l.hasClass("clicked")) return !0;
          if (
            null !== tinymce.activeEditor &&
            !0 !== tinymce.activeEditor.isHidden() &&
            "content" === tinymce.activeEditor.id
          ) {
            (t = tinymce.activeEditor), (r = a()(t.getBody()));
            var p = t.selection.getContent() || "";
            if (r.find("a[data-mce-selected]").length) {
              var d =
                ((n = ""),
                (c = ""),
                (u = t.selection.getStart()),
                (s = t.dom.getParent(u, "a[href]")) ||
                  ((c = t.selection.getContent({ format: "raw" })) &&
                    -1 !== c.indexOf("</a>") &&
                    ((n = c.match(/href="([^">]+)"/)) &&
                      n[1] &&
                      (s = t.$('a[href="' + n[1] + '"]', u)[0]),
                    s && t.selection.select(s))),
                s);
              t.dom.setAttribs(d, { href: l.data("url") }),
                a()(d).text() !== p && t.insertContent(p);
            } else
              p.length
                ? t.insertContent(
                    '<a href="' + l.data("url") + '">' + p + "</a>"
                  )
                : t.insertContent(
                    '<a href="' + l.data("url") + '">' + l.data("text") + "</a>"
                  );
          } else if (Object(i.a)()) {
            var f = Object(o.select)("core/block-editor").getSelectedBlock()
                .clientId,
              h = Object(o.select)("core/block-editor").getSelectionStart()
                .offset,
              m = Object(o.select)("core/block-editor").getSelectionEnd()
                .offset;
            if (document.getSelection) {
              var b = document.getSelection();
              if (b.rangeCount) {
                var y = b.getRangeAt(0),
                  g = a()("#block-" + f)
                    .text()
                    .substring(h, m),
                  k = document.createElement("a");
                (k.href = l.data("url")),
                  (k.innerText = "" !== g ? g : l.data("text")),
                  y.deleteContents(),
                  y.insertNode(k);
                var w = b.focusNode.innerHTML;
                Object(o.dispatch)("core/block-editor").updateBlock(f, {
                  attributes: { content: w },
                });
              }
            }
          }
          var v = l.closest(".suggestion-item").find(".suggestion-title"),
            O = v.html();
          v.text("Link Inserted"),
            l.addClass("clicked"),
            setTimeout(function () {
              var e, t, r, n;
              v.html(O),
                l.removeClass("clicked"),
                !0 === rankMath.postSettings.useFocusKeyword &&
                  ((t = l),
                  (r = (e = v).data("fkcount") || 0),
                  (n = e.data("fk")),
                  (r += 1) === n.length && (r = 0),
                  e.find(">a").text(n[r]),
                  e.data("fkcount", r),
                  t.data("text", n[r]));
            }, 1500);
        }),
          a()("#rank_math_metabox_link_suggestions")
            .find("h2")
            .append(a()("#rank-math-link-suggestions-tooltip").html());
      }
    });
    t.a = l;
  },
  function (e, t, r) {
    "use strict";
    var n = r(2),
      a = r(24);
    t.a = Object(n.withSelect)(function (e) {
      var t = e("rank-math");
      return { score: t.getAnalysisScore(), isRefreshing: t.isRefreshing() };
    })(function (e) {
      var t = e.score;
      return wp.element.createElement(
        "div",
        { className: "seo-score " + Object(a.a)(t) },
        wp.element.createElement(
          "div",
          { className: "score-text" },
          t,
          " / 100"
        )
      );
    });
  },
  function (e, t, r) {
    "use strict";
    var n = r(1),
      a = r(0),
      i = r(13),
      o = r.n(i),
      c = r(9),
      u = r(5),
      s = r(2),
      l = r(4);
    function p(e) {
      return (
        (p =
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
              }),
        p(e)
      );
    }
    function d(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function f(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function h(e, t) {
      return (
        (h = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        h(e, t)
      );
    }
    function m(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var r,
          n = g(e);
        if (t) {
          var a = g(this).constructor;
          r = Reflect.construct(n, arguments, a);
        } else r = n.apply(this, arguments);
        return b(this, r);
      };
    }
    function b(e, t) {
      if (t && ("object" === p(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return y(e);
    }
    function y(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function g(e) {
      return (
        (g = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        g(e)
      );
    }
    var k = (function (e) {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && h(e, t);
      })(p, e);
      var t,
        r,
        i,
        u = m(p);
      function p() {
        var e;
        return (
          d(this, p),
          ((e = u.apply(this, arguments)).onChange = e.onChange.bind(y(e))),
          (e.state = { loading: !0, availableTerms: [], selectedTerms: [] }),
          e
        );
      }
      return (
        (t = p),
        (r = [
          {
            key: "componentDidMount",
            value: function () {
              this.fetchTerms();
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              Object(n.invoke)(this.fetchRequest, ["abort"]);
            },
          },
          {
            key: "componentDidUpdate",
            value: function (e, t) {
              if (
                e.selectedTermIds.length < this.props.selectedTermIds.length
              ) {
                var r = Object(n.difference)(
                  this.props.selectedTermIds,
                  e.selectedTermIds
                )[0];
                if (!this.termIsAvailable(r)) return void this.fetchTerms();
              }
              e.selectedTermIds !== this.props.selectedTermIds &&
                this.updateSelectedTerms(
                  this.state.availableTerms,
                  this.props.selectedTermIds
                ),
                t.selectedTerms !== this.state.selectedTerms &&
                  this.handleSelectedTermsChange();
            },
          },
          {
            key: "termIsAvailable",
            value: function (e) {
              return !!this.state.availableTerms.find(function (t) {
                return t.id === e;
              });
            },
          },
          {
            key: "updateSelectedTerms",
            value: function (e, t) {
              this.setState({ selectedTerms: this.filterSelectedTerms(e, t) });
            },
          },
          {
            key: "handleSelectedTermsChange",
            value: function () {
              var e = this.state.selectedTerms,
                t = this.props.primaryTermID;
              e.find(function (e) {
                return e.id === t;
              }) || this.onChange(e.length ? e[0].id : "");
            },
          },
          {
            key: "fetchTerms",
            value: function () {
              var e = this,
                t = this.props.taxonomy;
              t &&
                ((this.fetchRequest = o()({
                  path: Object(c.addQueryArgs)("/wp/v2/".concat(t.rest_base), {
                    per_page: -1,
                    orderby: "count",
                    order: "desc",
                    _fields: "id,name",
                  }),
                })),
                this.fetchRequest.then(
                  function (t) {
                    (e.fetchRequest = null),
                      e.setState({
                        loading: !1,
                        availableTerms: t,
                        selectedTerms: e.filterSelectedTerms(
                          t,
                          e.props.selectedTermIds
                        ),
                      });
                  },
                  function (t) {
                    "abort" !== t.statusText &&
                      ((e.fetchRequest = null), e.setState({ loading: !1 }));
                  }
                ));
            },
          },
          {
            key: "filterSelectedTerms",
            value: function (e, t) {
              return e.filter(function (e) {
                return t.includes(e.id);
              });
            },
          },
          {
            key: "onChange",
            value: function (e) {
              Object(s.dispatch)("rank-math").updatePrimaryTermID(
                e,
                this.props.taxonomy.slug
              );
            },
          },
          {
            key: "shouldComponentUpdate",
            value: function (e, t) {
              return (
                this.props.selectedTermIds !== e.selectedTermIds ||
                this.props.primaryTermID !== e.primaryTermID ||
                this.state.selectedTerms !== t.selectedTerms
              );
            },
          },
          {
            key: "render",
            value: function () {
              return this.state.selectedTerms.length < 2
                ? null
                : this.state.loading
                ? [
                    wp.element.createElement(l.Spinner, { key: "spinner" }),
                    wp.element.createElement(
                      "p",
                      { key: "spinner-text" },
                      "Loading"
                    ),
                  ]
                : wp.element.createElement(l.SelectControl, {
                    label: Object(a.__)("Select Primary Term", "rank-math"),
                    value: this.props.primaryTermID,
                    options: this.state.selectedTerms.map(function (e) {
                      return { value: e.id, label: Object(n.unescape)(e.name) };
                    }),
                    onChange: this.onChange,
                  });
            },
          },
        ]) && f(t.prototype, r),
        i && f(t, i),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        p
      );
    })(u.Component);
    t.a = k;
  },
  ,
  ,
  ,
  function (e, t, r) {
    "use strict";
    var n = r(7),
      a = r(6),
      i = r(15),
      o = r(1),
      c = r(0),
      u = r(2),
      s = r(25);
    function l(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    var p = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.analyzer = new n.Analyzer({
              i18n: c,
              analyses: rankMath.assessor.researchesTests,
            })),
            (this.dataCollector = t),
            this.registerRefresh(),
            (this.updateKeywordResult = this.updateKeywordResult.bind(this)),
            (this.sanitizeData = this.sanitizeData.bind(this)),
            Object(a.addAction)(
              "rankMath_analysis_keywordUsage_updated",
              "rank-math",
              this.updateKeywordResult
            ),
            Object(a.addFilter)(
              "rank_math_sanitize_meta_value",
              "rank-math",
              this.sanitizeData
            ),
            Object(a.addFilter)(
              "rank_math_sanitize_data",
              "rank-math",
              this.sanitizeData
            );
        }
        var t, r, p;
        return (
          (t = e),
          (r = [
            {
              key: "updateKeywordResult",
              value: function (e, t) {
                rankMathEditor.resultManager.update(e, { keywordNotUsed: t }),
                  e === this.getSelectedKeyword().toLowerCase() &&
                    Object(u.dispatch)("rank-math").refreshResults();
              },
            },
            {
              key: "sanitizeData",
              value: function (e, t) {
                return "schemas" === t ||
                  Object(o.isObject)(e) ||
                  Object(o.isEmpty)(e)
                  ? e
                  : n.Helpers.sanitizeAppData(e);
              },
            },
            {
              key: "getPaper",
              value: function (e, t) {
                var r = Object(i.a)().getState(),
                  c = this.dataCollector.getData(),
                  u = new n.Paper("", { locale: rankMath.localeFull });
                return (
                  u.setTitle(r.appUi.serpTitle),
                  u.setPermalink(c.slug),
                  u.setDescription(r.appUi.serpDescription),
                  u.setUrl(c.permalink),
                  u.setText(
                    Object(s.a)(
                      Object(a.applyFilters)("rank_math_content", c.content)
                    )
                  ),
                  u.setKeyword(e),
                  u.setKeywords(t),
                  u.setSchema(r.appData.schemas),
                  Object(o.isUndefined)(c.featuredImage) ||
                    (u.setThumbnail(c.featuredImage.source_url),
                    u.setThumbnailAltText(
                      n.Helpers.removeDiacritics(c.featuredImage.alt_text)
                    )),
                  (Object(o.isEmpty)(r.appData.contentAIScore) &&
                    Object(o.isEmpty)(rankMath.ca_keyword)) ||
                    u.setContentAI(!0),
                  u
                );
              },
            },
            {
              key: "registerRefresh",
              value: function () {
                var e = this;
                this.refresh = Object(o.debounce)(function (t) {
                  var r = Object(i.a)().getState();
                  if (!1 !== r.appUi.isLoaded) {
                    var o = r.appData.keywords.split(","),
                      c = [];
                    Object(a.doAction)("rank_math_" + t + "_refresh"),
                      o.map(function (t, r) {
                        var a = e.getPaper(n.Helpers.removeDiacritics(t), o),
                          i =
                            0 === r
                              ? rankMath.assessor.researchesTests
                              : e.filterTests(e.getSecondaryKeywordTests());
                        c.push(
                          e.analyzer.analyzeSome(i, a).then(function (e) {
                            rankMathEditor.resultManager.update(
                              a.getKeyword(),
                              e,
                              0 === r
                            ),
                              0 === r &&
                                Object(u.dispatch)(
                                  "rank-math"
                                ).updateAnalysisScore(
                                  rankMathEditor.resultManager.getScore(
                                    a.getKeyword()
                                  )
                                );
                          })
                        ),
                          Promise.all(c).then(function () {
                            Object(u.dispatch)("rank-math").refreshResults();
                          });
                      });
                  }
                }, 500);
              },
            },
            {
              key: "getSecondaryKeywordTests",
              value: function () {
                return [
                  "keywordInContent",
                  "lengthContent",
                  "keywordInSubheadings",
                  "keywordDensity",
                  "lengthPermalink",
                  "linksHasExternals",
                  "linksNotAllExternals",
                  "linksHasInternal",
                  "titleSentiment",
                  "titleHasPowerWords",
                  "titleHasNumber",
                  "contentHasTOC",
                  "contentHasShortParagraphs",
                  "contentHasAssets",
                ];
              },
            },
            {
              key: "getPrimaryKeyword",
              value: function () {
                var e = Object(i.a)().getState().appData.keywords;
                return n.Helpers.removeDiacritics(e.split(",")[0]);
              },
            },
            {
              key: "getSelectedKeyword",
              value: function () {
                var e = Object(i.a)().getState(),
                  t =
                    "" !== e.appUi.selectedKeyword.data.value
                      ? e.appUi.selectedKeyword.data.value
                      : e.appData.keywords.split(",")[0];
                return n.Helpers.removeDiacritics(t);
              },
            },
            {
              key: "getResearch",
              value: function (e) {
                return this.analyzer.researcher.getResearch(e);
              },
            },
            {
              key: "filterTests",
              value: function (e) {
                return Object(o.intersection)(
                  e,
                  rankMath.assessor.researchesTests
                );
              },
            },
          ]) && l(t.prototype, r),
          p && l(t, p),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })(),
      d = r(26);
    function f(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    var h = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
      }
      var t, r, o;
      return (
        (t = e),
        (r = [
          {
            key: "setup",
            value: function (e) {
              Object(i.a)(),
                (this.resultManager = new n.ResultManager()),
                (this.assessor = new p(e)),
                new d.a(),
                Object(a.doAction)("rank_math_loaded");
            },
          },
          {
            key: "refresh",
            value: function (e) {
              this.assessor.refresh(e);
            },
          },
          {
            key: "getPrimaryKeyword",
            value: function () {
              return this.assessor.getPrimaryKeyword();
            },
          },
          {
            key: "getSelectedKeyword",
            value: function () {
              return this.assessor.getSelectedKeyword();
            },
          },
          {
            key: "updatePermalink",
            value: function (e) {
              throw "Implement the function";
            },
          },
          {
            key: "updatePermalinkSanitize",
            value: function (e) {
              throw "Implement the function";
            },
          },
        ]) && f(t.prototype, r),
        o && f(t, o),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e
      );
    })();
    t.a = h;
  },
  function (e, t) {
    e.exports = React;
  },
  function (e, t) {
    e.exports = wp.editPost;
  },
  function (e, t) {
    e.exports = wp.plugins;
  },
  ,
  ,
  ,
  ,
  function (e, t, r) {
    var n = r(35);
    function a(e) {
      return n.createElement(
        "svg",
        e,
        n.createElement("g", { fill: "#fff" }, [
          n.createElement("path", {
            d: "m462 234.84-76.17 3.43 13.43 21-127 81.18-126-52.93-146.26 60.97 10.14 24.34 136.1-56.71 128.57 54 138.69-88.61 13.43 21z",
            key: 0,
          }),
          n.createElement("path", {
            d: "m54.1 312.78 92.18-38.41 4.49 1.89v-54.58h-96.67zm210.9-223.57v235.05l7.26 3 89.43-57.05v-181zm-105.44 190.79 96.67 40.62v-165.19h-96.67z",
            key: 1,
          }),
        ])
      );
    }
    (a.defaultProps = {
      viewBox: "0 0 462.03 462.03",
      width: "20",
      className: "rank-math-icon",
    }),
      (e.exports = a),
      (a.default = a);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r(3),
      a = r.n(n),
      i = r(0),
      o = r(2),
      c = r(5),
      u = r(37),
      s = r(6),
      l = r(36),
      p = r(15),
      d = r(34),
      f = r(27),
      h = r(1),
      m = r(19);
    function b(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    var y = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.core = Object(o.select)("core")),
            (this.coreEditor = Object(o.select)("core/editor")),
            (this.reusableBlocks = {}),
            (this.getContent = this.getContent.bind(this)),
            (this.reusableBlockEvent = this.reusableBlockEvent.bind(this)),
            this.init();
        }
        var t, r, n;
        return (
          (t = e),
          (r = [
            {
              key: "init",
              value: function () {
                Object(s.addFilter)(
                  "rank_math_content",
                  "rank-math",
                  this.getContent,
                  11
                ),
                  Object(o.subscribe)(
                    Object(h.debounce)(this.reusableBlockEvent, 500)
                  );
              },
            },
            {
              key: "getContent",
              value: function (e) {
                return (
                  Object(h.isEmpty)(this.reusableBlocks) ||
                    Object(h.forEach)(this.reusableBlocks, function (t) {
                      Object(h.forEach)(t, function (t) {
                        e += t;
                      });
                    }),
                  e
                );
              },
            },
            {
              key: "reusableBlockEvent",
              value: function () {
                var e = this,
                  t = this.coreEditor.getPostEdits().blocks;
                if (!Object(h.isEmpty)(t)) {
                  var r = !1;
                  Object(h.forEach)(t, function (t) {
                    if (Object(m.isReusableBlock)(t)) {
                      var n = t.clientId,
                        a = e.getBlockContent(t.attributes.ref);
                      if (
                        Object(h.isUndefined)(
                          e.reusableBlocks[t.attributes.ref]
                        ) ||
                        Object(h.isUndefined)(
                          e.reusableBlocks[t.attributes.ref][n]
                        )
                      )
                        return (
                          Object(h.isUndefined)(
                            e.reusableBlocks[t.attributes.ref]
                          ) && (e.reusableBlocks[t.attributes.ref] = {}),
                          (e.reusableBlocks[t.attributes.ref][n] = a),
                          void (r = !0)
                        );
                      e.reusableBlocks[t.attributes.ref][n].content !== a &&
                        ((e.reusableBlocks[t.attributes.ref][n] = a), (r = !0));
                    }
                  }),
                    r && rankMathEditor.refresh("content");
                }
              },
            },
            {
              key: "getBlockContent",
              value: function (e) {
                var t = this.core.getEditedEntityRecord(
                  "postType",
                  "wp_block",
                  e
                );
                if (t && t.content)
                  return Object(h.isFunction)(t.content)
                    ? t.content(t)
                    : t.content;
              },
            },
          ]) && b(t.prototype, r),
          n && b(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })(),
      g = r(12),
      k = r.n(g),
      w = r(42),
      v = r.n(w),
      O = r(29),
      _ = r(24);
    function j(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    var S = Object(o.withSelect)(function (e) {
        var t = e("rank-math");
        return { isLoaded: t.isLoaded(), score: t.getAnalysisScore() };
      })(function (e) {
        var t,
          r = e.isLoaded,
          n = e.score,
          a = k()(
            "rank-math-toolbar-score",
            (j((t = {}), Object(_.a)(n), !0), j(t, "loading", !r), t)
          );
        return wp.element.createElement(
          "div",
          { className: a },
          wp.element.createElement(v.a, null),
          wp.element.createElement(O.a, null)
        );
      }),
      T = r(4),
      D = Object(o.withSelect)(function (e) {
        var t = e("rank-math"),
          r = t.getTwitterUseFacebook()
            ? t.getFacebookTitle()
            : t.getTwitterTitle();
        return (
          Object(h.isEmpty)(r) && (r = t.getSerpTitle()),
          { title: r, permalink: e("core/editor").getPermalink() }
        );
      })(function (e) {
        var t = e.title,
          r = e.permalink,
          n = encodeURI(r),
          a = encodeURI(t);
        return wp.element.createElement(
          c.Fragment,
          null,
          wp.element.createElement(
            "p",
            null,
            Object(i.__)("Notify your readers by sharing!", "rank-math")
          ),
          wp.element.createElement(
            "div",
            { className: "rank-math-social-share-buttons" },
            wp.element.createElement(
              "div",
              { className: "rank-math-share-button rm-facebook" },
              wp.element.createElement(
                "a",
                {
                  href: "https://www.facebook.com/sharer/sharer.php?u=" + n,
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                wp.element.createElement(T.Dashicon, { icon: "facebook-alt" })
              )
            ),
            wp.element.createElement(
              "div",
              { className: "rank-math-share-button rm-twitter" },
              wp.element.createElement(
                "a",
                {
                  href: "https://twitter.com/share?url=" + n + "&text=" + a,
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                wp.element.createElement(T.Dashicon, { icon: "twitter" })
              )
            ),
            wp.element.createElement(
              "div",
              { className: "rank-math-share-button rm-email" },
              wp.element.createElement(
                "a",
                {
                  href: "mailto:?subject=" + a + "&body=" + n,
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                wp.element.createElement(T.Dashicon, { icon: "email" })
              )
            )
          )
        );
      });
    function P(e) {
      return (
        (P =
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
              }),
        P(e)
      );
    }
    function I(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function E(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function A(e, t) {
      return (
        (A = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        A(e, t)
      );
    }
    function C(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var r,
          n = R(e);
        if (t) {
          var a = R(this).constructor;
          r = Reflect.construct(n, arguments, a);
        } else r = n.apply(this, arguments);
        return M(this, r);
      };
    }
    function M(e, t) {
      if (t && ("object" === P(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      })(e);
    }
    function R(e) {
      return (
        (R = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        R(e)
      );
    }
    var U = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && A(e, t);
        })(i, e);
        var t,
          r,
          n,
          a = C(i);
        function i() {
          return E(this, i), a.apply(this, arguments);
        }
        return (
          (t = i),
          r && I(t.prototype, r),
          n && I(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      })(r(30).a),
      x = Object(o.withSelect)(function (e, t) {
        var r = t.slug,
          n = e("core").getTaxonomy(r),
          a = e("core/editor").getEditedPostAttribute;
        return {
          taxonomy: n,
          selectedTermIds: n ? a(n.rest_base) : [],
          primaryTermID: e("rank-math").getPrimaryTermID(),
        };
      })(U),
      N = function (e) {
        var t = e.TermComponent;
        return (function (e) {
          return (
            !1 !== rankMath.assessor.primaryTaxonomy &&
            e.slug === rankMath.assessor.primaryTaxonomy.name
          );
        })(e)
          ? wp.element.createElement(
              c.Fragment,
              null,
              wp.element.createElement(t, e),
              wp.element.createElement(
                T.PanelRow,
                { className: "rank-math-primary-term-picker" },
                wp.element.createElement(x, e)
              )
            )
          : wp.element.createElement(t, e);
      },
      F = r(28),
      H = r(21),
      K = r(22),
      B = r(23);
    function z(e) {
      return (
        (z =
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
              }),
        z(e)
      );
    }
    function L() {
      return (
        (L = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
        L.apply(this, arguments)
      );
    }
    function G(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function V(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function q() {
      return (
        (q =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (e, t, r) {
                var n = W(e, t);
                if (n) {
                  var a = Object.getOwnPropertyDescriptor(n, t);
                  return a.get
                    ? a.get.call(arguments.length < 3 ? e : r)
                    : a.value;
                }
              }),
        q.apply(this, arguments)
      );
    }
    function W(e, t) {
      for (
        ;
        !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = X(e));

      );
      return e;
    }
    function $(e, t) {
      return (
        ($ = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        $(e, t)
      );
    }
    function J(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var r,
          n = X(e);
        if (t) {
          var a = X(this).constructor;
          r = Reflect.construct(n, arguments, a);
        } else r = n.apply(this, arguments);
        return Q(this, r);
      };
    }
    function Q(e, t) {
      if (t && ("object" === z(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      })(e);
    }
    function X(e) {
      return (
        (X = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        X(e)
      );
    }
    var Y = (function (e) {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && $(e, t);
      })(d, e);
      var t,
        r,
        n,
        a = J(d);
      function d() {
        return G(this, d), a.apply(this, arguments);
      }
      return (
        (t = d),
        (r = [
          {
            key: "setup",
            value: function (e) {
              Object(p.a)(),
                (this.registerSlots = this.registerSlots.bind(this)),
                Object(s.addAction)(
                  "rank_math_loaded",
                  "rank-math",
                  this.registerSlots,
                  0
                ),
                q(X(d.prototype), "setup", this).call(this, e),
                this.registerSidebar(),
                this.registerPostPublish(),
                this.registerPrimaryTermSelector(),
                new F.a(),
                new y();
            },
          },
          {
            key: "registerSlots",
            value: function () {
              (this.RankMathAfterEditor = H.a),
                (this.RankMathAfterFocusKeyword = B.a),
                (this.RankMathAdvancedTab = K.a),
                (this.slots = {
                  AfterEditor: H.a,
                  AfterFocusKeyword: B.a,
                  AdvancedTab: K.a,
                });
            },
          },
          {
            key: "registerSidebar",
            value: function () {
              Object(u.registerPlugin)("rank-math", {
                icon: wp.element.createElement(S, null),
                render: function () {
                  return wp.element.createElement(
                    c.Fragment,
                    null,
                    wp.element.createElement(
                      l.PluginSidebarMoreMenuItem,
                      {
                        target: "seo-by-rank-math-sidebar",
                        icon: wp.element.createElement(S, null),
                      },
                      i.__("Rank Math", "rank-math")
                    ),
                    wp.element.createElement(
                      l.PluginSidebar,
                      {
                        name: "seo-by-rank-math-sidebar",
                        title: i.__("Rank Math", "rank-math"),
                        className: "rank-math-sidebar-panel",
                      },
                      Object(s.applyFilters)("rank_math_app", {})()
                    )
                  );
                },
              });
            },
          },
          {
            key: "registerPostPublish",
            value: function () {
              Object(u.registerPlugin)("rank-math-post-publish", {
                render: function () {
                  return wp.element.createElement(
                    l.PluginPostPublishPanel,
                    {
                      initialOpen: !0,
                      title: i.__("Rank Math", "rank-math"),
                      className: "rank-math-post-publish",
                      icon: wp.element.createElement(c.Fragment, null),
                    },
                    wp.element.createElement(D, null)
                  );
                },
              });
            },
          },
          {
            key: "registerPrimaryTermSelector",
            value: function () {
              Object(s.addFilter)(
                "editor.PostTaxonomyType",
                "rank-math",
                function (e) {
                  return function (t) {
                    return wp.element.createElement(
                      N,
                      L({ TermComponent: e }, t)
                    );
                  };
                }
              );
            },
          },
          {
            key: "updatePermalink",
            value: function (e) {
              Object(o.dispatch)("core/editor").editPost({ slug: e });
            },
          },
          {
            key: "updatePermalinkSanitize",
            value: function (e) {
              (e = this.assessor.getResearch("slugify")(e)),
                Object(o.dispatch)("core/editor").editPost({ slug: e });
            },
          },
        ]) && V(t.prototype, r),
        n && V(t, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        d
      );
    })(d.a);
    a()(document).ready(function () {
      (window.rankMathEditor = new Y()),
        (window.rankMathGutenberg = window.rankMathEditor),
        window.rankMathEditor.setup(new f.a());
    });
  },
]);
