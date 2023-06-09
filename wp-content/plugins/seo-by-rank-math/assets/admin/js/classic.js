!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var a = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          r.d(
            n,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 75));
})([
  function (t, e) {
    t.exports = wp.i18n;
  },
  function (t, e) {
    t.exports = lodash;
  },
  function (t, e) {
    t.exports = wp.data;
  },
  function (t, e) {
    t.exports = jQuery;
  },
  function (t, e) {
    t.exports = wp.components;
  },
  function (t, e) {
    t.exports = wp.element;
  },
  function (t, e) {
    t.exports = wp.hooks;
  },
  function (t, e) {
    t.exports = rankMathAnalyzer;
  },
  function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return o;
    });
    var n = r(3),
      a = r.n(n);
    function i(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var o = new ((function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.map = null);
      }
      var e, r, n;
      return (
        (e = t),
        (r = [
          {
            key: "swap",
            value: function (t, e) {
              var r = this;
              if (!(t = t || "")) return "";
              var n = new RegExp(/%(([a-z0-9_-]+)\(([^)]*)\)|[^\s]+)%/, "giu");
              return t
                .replace(" %page%", "")
                .replace("%sep% %sep%", "%sep%")
                .replace(n, function (t) {
                  return r.replace(e, t);
                })
                .trim();
            },
          },
          {
            key: "replace",
            value: function (t, e) {
              var r = e.toLowerCase().slice(1, -1);
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
                : ((t = t || this.getMap()),
                  (r =
                    "seo_description" ===
                    (r =
                      "seo_title" ===
                      (r = r.includes("(") ? r.split("(")[0] : r)
                        ? "title"
                        : r)
                      ? "excerpt"
                      : r) in t
                    ? t[r]
                    : "");
            },
          },
          {
            key: "getMap",
            value: function () {
              var t = this;
              return (
                null !== this.map ||
                  ((this.map = {}),
                  a.a.each(rankMath.variables, function (e, r) {
                    (e = e.toLowerCase().replace(/%+/g, "").split("(")[0]),
                      (t.map[e] = r.example);
                  })),
                this.map
              );
            },
          },
          {
            key: "setVariable",
            value: function (t, e) {
              null !== this.map
                ? (this.map[t] = e)
                : void 0 !== rankMath.variables[t] &&
                  (rankMath.variables[t].example = e);
            },
          },
        ]) && i(e.prototype, r),
        n && i(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })())();
  },
  function (t, e) {
    t.exports = wp.url;
  },
  ,
  ,
  ,
  function (t, e) {
    t.exports = wp.apiFetch;
  },
  ,
  function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
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
        return g;
      }),
      r.d(n, "updateRobots", function () {
        return y;
      }),
      r.d(n, "updateBreadcrumbTitle", function () {
        return b;
      }),
      r.d(n, "resetDirtyMetadata", function () {
        return v;
      }),
      r.d(n, "updateFacebookTitle", function () {
        return k;
      }),
      r.d(n, "updateFacebookDescription", function () {
        return w;
      }),
      r.d(n, "updateFacebookImage", function () {
        return _;
      }),
      r.d(n, "updateFacebookImageID", function () {
        return O;
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
        return I;
      }),
      r.d(n, "updateDescription", function () {
        return P;
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
        return x;
      }),
      r.d(n, "updateHasRedirect", function () {
        return R;
      }),
      r.d(n, "updateSerpTitle", function () {
        return H;
      }),
      r.d(n, "updateSerpSlug", function () {
        return z;
      }),
      r.d(n, "updateSerpDescription", function () {
        return G;
      }),
      r.d(n, "toggleSnippetEditor", function () {
        return B;
      }),
      r.d(n, "updateSnippetPreviewType", function () {
        return V;
      }),
      r.d(n, "toggleTrendsCta", function () {
        return W;
      }),
      r.d(n, "updateTwitterUseFacebook", function () {
        return J;
      }),
      r.d(n, "updateTwitterCardType", function () {
        return $;
      }),
      r.d(n, "updateTwitterTitle", function () {
        return q;
      }),
      r.d(n, "updateTwitterDescription", function () {
        return Y;
      }),
      r.d(n, "updateTwitterAuthor", function () {
        return Q;
      }),
      r.d(n, "updateTwitterImageID", function () {
        return X;
      }),
      r.d(n, "updateTwitterImage", function () {
        return Z;
      }),
      r.d(n, "updateTwitterHasOverlay", function () {
        return tt;
      }),
      r.d(n, "updateTwitterImageOverlay", function () {
        return et;
      }),
      r.d(n, "updateTwitterPlayerUrl", function () {
        return rt;
      }),
      r.d(n, "updateTwitterPlayerSize", function () {
        return nt;
      }),
      r.d(n, "updateTwitterPlayerStreamUrl", function () {
        return at;
      }),
      r.d(n, "updateTwitterPlayerStreamCtype", function () {
        return it;
      }),
      r.d(n, "updateTwitterAppDescription", function () {
        return ot;
      }),
      r.d(n, "updateTwitterAppIphoneID", function () {
        return ct;
      }),
      r.d(n, "updateTwitterAppIphoneName", function () {
        return ut;
      }),
      r.d(n, "updateTwitterAppIphoneUrl", function () {
        return st;
      }),
      r.d(n, "updateTwitterAppIpadID", function () {
        return lt;
      }),
      r.d(n, "updateTwitterAppIpadName", function () {
        return pt;
      }),
      r.d(n, "updateTwitterAppIpadUrl", function () {
        return dt;
      }),
      r.d(n, "updateTwitterAppGoogleplayID", function () {
        return ft;
      }),
      r.d(n, "updateTwitterAppGoogleplayName", function () {
        return ht;
      }),
      r.d(n, "updateTwitterAppGoogleplayUrl", function () {
        return mt;
      }),
      r.d(n, "updateTwitterAppCountry", function () {
        return gt;
      }),
      r.d(n, "toggleLoaded", function () {
        return yt;
      }),
      r.d(n, "updateSelectedKeyword", function () {
        return bt;
      }),
      r.d(n, "refreshResults", function () {
        return vt;
      }),
      r.d(n, "setVersion", function () {
        return kt;
      }),
      r.d(n, "toggleIsDiviPageSettingsBarActive", function () {
        return wt;
      }),
      r.d(n, "toggleIsDiviRankMathModalActive", function () {
        return _t;
      }),
      r.d(n, "toggleSchemaEditor", function () {
        return Pt;
      }),
      r.d(n, "toggleSchemaTemplates", function () {
        return Et;
      }),
      r.d(n, "schemaUpdated", function () {
        return At;
      }),
      r.d(n, "setEditingSchemaId", function () {
        return Ct;
      }),
      r.d(n, "setEditorTab", function () {
        return Mt;
      }),
      r.d(n, "setTemplateTab", function () {
        return xt;
      }),
      r.d(n, "updateEditSchemas", function () {
        return Rt;
      }),
      r.d(n, "updateSchemas", function () {
        return Ut;
      }),
      r.d(n, "updateEditSchema", function () {
        return Ft;
      }),
      r.d(n, "saveSchema", function () {
        return Nt;
      }),
      r.d(n, "deleteSchema", function () {
        return Lt;
      }),
      r.d(n, "saveTemplate", function () {
        return Kt;
      }),
      r.d(n, "updateKeywordsData", function () {
        return Ht;
      }),
      r.d(n, "updateAIScore", function () {
        return zt;
      });
    var a = {};
    r.r(a),
      r.d(a, "appData", function () {
        return qt;
      }),
      r.d(a, "appUi", function () {
        return te;
      });
    var i = {};
    r.r(i),
      r.d(i, "getAppData", function () {
        return ee;
      }),
      r.d(i, "getDirtyMetadata", function () {
        return re;
      }),
      r.d(i, "getAnalysisScore", function () {
        return ne;
      }),
      r.d(i, "getKeywords", function () {
        return ae;
      }),
      r.d(i, "getPillarContent", function () {
        return ie;
      }),
      r.d(i, "getRobots", function () {
        return oe;
      }),
      r.d(i, "getAdvancedRobots", function () {
        return ce;
      }),
      r.d(i, "getCanonicalUrl", function () {
        return ue;
      }),
      r.d(i, "getBreadcrumbTitle", function () {
        return se;
      }),
      r.d(i, "getRichSnippets", function () {
        return le;
      }),
      r.d(i, "getShowScoreFrontend", function () {
        return pe;
      }),
      r.d(i, "isLoaded", function () {
        return de;
      }),
      r.d(i, "getSelectedKeyword", function () {
        return fe;
      }),
      r.d(i, "isRefreshing", function () {
        return he;
      }),
      r.d(i, "isPro", function () {
        return me;
      }),
      r.d(i, "isDiviPageSettingsBarActive", function () {
        return ge;
      }),
      r.d(i, "isDiviRankMathModalActive", function () {
        return ye;
      }),
      r.d(i, "getFacebookTitle", function () {
        return be;
      }),
      r.d(i, "getFacebookDescription", function () {
        return ve;
      }),
      r.d(i, "getFacebookAuthor", function () {
        return ke;
      }),
      r.d(i, "getFacebookImageID", function () {
        return we;
      }),
      r.d(i, "getFacebookImage", function () {
        return _e;
      }),
      r.d(i, "getFacebookHasOverlay", function () {
        return Oe;
      }),
      r.d(i, "getFacebookImageOverlay", function () {
        return je;
      }),
      r.d(i, "getPostID", function () {
        return Se;
      }),
      r.d(i, "getTitle", function () {
        return Te;
      }),
      r.d(i, "getPermalink", function () {
        return De;
      }),
      r.d(i, "getDescription", function () {
        return Ie;
      }),
      r.d(i, "getFeaturedImage", function () {
        return Pe;
      }),
      r.d(i, "getFeaturedImageHtml", function () {
        return Ee;
      }),
      r.d(i, "getPrimaryTermID", function () {
        return Ae;
      }),
      r.d(i, "getRedirectionID", function () {
        return Ce;
      }),
      r.d(i, "getRedirectionType", function () {
        return Me;
      }),
      r.d(i, "getRedirectionUrl", function () {
        return xe;
      }),
      r.d(i, "getRedirectionItem", function () {
        return Re;
      }),
      r.d(i, "hasRedirect", function () {
        return Ue;
      }),
      r.d(i, "getSerpTitle", function () {
        return Ne;
      }),
      r.d(i, "getSerpSlug", function () {
        return Le;
      }),
      r.d(i, "getSerpDescription", function () {
        return Ke;
      }),
      r.d(i, "isSnippetEditorOpen", function () {
        return He;
      }),
      r.d(i, "getSnippetPreviewType", function () {
        return ze;
      }),
      r.d(i, "isTrendsCtaOpen", function () {
        return Ge;
      }),
      r.d(i, "isSchemaEditorOpen", function () {
        return Be;
      }),
      r.d(i, "isSchemaTemplatesOpen", function () {
        return Ve;
      }),
      r.d(i, "hasSchemaUpdated", function () {
        return We;
      }),
      r.d(i, "getSchemas", function () {
        return Je;
      }),
      r.d(i, "getEditSchemas", function () {
        return $e;
      }),
      r.d(i, "getEditingSchema", function () {
        return qe;
      }),
      r.d(i, "getPreviewSchema", function () {
        return Ye;
      }),
      r.d(i, "getEditorTab", function () {
        return Qe;
      }),
      r.d(i, "getTemplateTab", function () {
        return Xe;
      }),
      r.d(i, "getTwitterUseFacebook", function () {
        return Ze;
      }),
      r.d(i, "getTwitterCardType", function () {
        return tr;
      }),
      r.d(i, "getTwitterTitle", function () {
        return er;
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
        return gr;
      }),
      r.d(i, "getTwitterAppGoogleplayUrl", function () {
        return yr;
      }),
      r.d(i, "getTwitterAppCountry", function () {
        return br;
      }),
      r.d(i, "getTwitterPlayerUrl", function () {
        return vr;
      }),
      r.d(i, "getTwitterPlayerSize", function () {
        return kr;
      }),
      r.d(i, "getTwitterPlayerStream", function () {
        return wr;
      }),
      r.d(i, "getTwitterPlayerStreamCtype", function () {
        return _r;
      }),
      r.d(i, "getKeywordsData", function () {
        return Or;
      }),
      r.d(i, "getContentAIScore", function () {
        return jr;
      });
    var o = r(2),
      c = r(8),
      u = r(6);
    function s(t, e) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      return (
        (e = Object(u.applyFilters)("rank_math_sanitize_data", e, t, r)),
        null !== n &&
          (n = Object(u.applyFilters)(
            "rank_math_sanitize_meta_value",
            n,
            t,
            r
          )),
        (n = null === n ? e : n),
        Object(u.doAction)("rank_math_data_changed", t, e, r),
        {
          type: "RANK_MATH_APP_DATA",
          key: t,
          value: e,
          metaKey: r,
          metaValue: n,
        }
      );
    }
    function l(t, e) {
      return (
        Object(u.doAction)("rank_math_update_app_ui", t, e),
        { type: "RANK_MATH_APP_UI", key: t, value: e }
      );
    }
    function p(t) {
      return (
        c.a.setVariable("focuskw", t.split(",")[0]),
        rankMathEditor.refresh("keyword"),
        s("keywords", t, "rank_math_focus_keyword")
      );
    }
    function d(t) {
      return s(
        "pillarContent",
        t,
        "rank_math_pillar_content",
        !0 === t ? "on" : "off"
      );
    }
    function f(t) {
      return s(
        "showScoreFrontend",
        t,
        "rank_math_dont_show_seo_score",
        !0 === t ? "off" : "on"
      );
    }
    function h(t) {
      return s("score", t, "rank_math_seo_score");
    }
    function m(t) {
      return s("canonicalUrl", t, "rank_math_canonical_url");
    }
    function g(t) {
      return s("advancedRobots", t, "rank_math_advanced_robots");
    }
    function y(t) {
      return s("robots", t, "rank_math_robots", Object.keys(t));
    }
    function b(t) {
      return s("breadcrumbTitle", t, "rank_math_breadcrumb_title");
    }
    function v() {
      return s("dirtyMetadata", {});
    }
    function k(t) {
      return s("facebookTitle", t, "rank_math_facebook_title");
    }
    function w(t) {
      return s("facebookDescription", t, "rank_math_facebook_description");
    }
    function _(t) {
      return s("facebookImage", t, "rank_math_facebook_image");
    }
    function O(t) {
      return s("facebookImageID", t, "rank_math_facebook_image_id");
    }
    function j(t) {
      return s(
        "facebookHasOverlay",
        t,
        "rank_math_facebook_enable_image_overlay",
        !0 === t ? "on" : "off"
      );
    }
    function S(t) {
      return s("facebookImageOverlay", t, "rank_math_facebook_image_overlay");
    }
    function T(t) {
      return (rankMath.objectID = t), s("postID", t);
    }
    function D(t) {
      return s("permalink", t, "permalink");
    }
    function I(t) {
      return s("title", t, "rank_math_title");
    }
    function P(t) {
      return s("description", t, "rank_math_description");
    }
    function E(t) {
      return s("featuredImage", t);
    }
    function A(t, e) {
      return s("primaryTerm", parseInt(t), "rank_math_primary_" + e);
    }
    function C(t, e) {
      return s(t, e);
    }
    function M(t) {
      return l("redirectionItem", t);
    }
    function x() {
      return l("redirectionItem", {});
    }
    function R(t) {
      return l("hasRedirect", t);
    }
    var U = r(7),
      F = r(1),
      N = r(16),
      L = function (t, e) {
        return (
          (t = (t = U.Helpers.cleanText(t)).replace(/\r?\n|\r/g, " ")),
          e ? Object(F.truncate)(t, { length: e, separator: " " }) : t
        );
      },
      K = function (t) {
        var e = rankMathEditor.assessor.dataCollector.getData(),
          r = e.excerpt,
          n = (function (t) {
            if (Object(F.isEmpty)(t)) return "";
            (t = U.Helpers.stripScript(t)),
              (t = U.Helpers.stripStyle(t)),
              (t = Object(F.unescape)(t).replace(
                /\[caption[^\]]*\](.*)\[\/caption\]/g,
                ""
              ));
            var e = Object(F.filter)(
              U.Helpers.matchParagraphs(t, !0, !0),
              function (t) {
                return "" !== t.trim();
              }
            );
            if (!e.length) return "";
            var r = rankMathEditor.getPrimaryKeyword();
            if ("" !== r) {
              var n = Object(F.filter)(e, function (t) {
                return Object(F.includes)(t.toLowerCase(), r.toLowerCase());
              });
              if (0 < n.length) return L(n[0], 160);
            }
            return L(e[0], 160);
          })(e.content),
          a =
            Object(F.isUndefined)(r) || Object(F.isEmpty)(r)
              ? n
              : Object(F.unescape)(r);
        if (
          (c.a.setVariable("excerpt", a),
          c.a.setVariable("seo_description", a),
          "" !==
            (t = Object(N.a)(
              Object(u.applyFilters)("rankMath/description", t)
            )))
        )
          return U.Helpers.cleanText(t);
        if (!Object(F.isUndefined)(r) && !Object(F.isEmpty)(r))
          return U.Helpers.cleanText(r);
        var i = Object(F.unescape)(
          rankMath.assessor.serpData.descriptionTemplate
        );
        return Object(F.isUndefined)(i) || "" === i
          ? n
          : U.Helpers.cleanText(i);
      };
    function H(t) {
      return (
        (t = c.a.swap("" !== t ? t : rankMath.assessor.serpData.titleTemplate)),
        rankMathEditor.refresh("title"),
        l("serpTitle", t)
      );
    }
    function z(t) {
      return (
        (t = "" !== t ? t : rankMathEditor.assessor.dataCollector.getSlug()),
        rankMathEditor.refresh("permalink"),
        l("serpSlug", t)
      );
    }
    function G(t) {
      return (
        (t = c.a.swap(K(t))),
        rankMathEditor.refresh("description"),
        l("serpDescription", t)
      );
    }
    function B(t) {
      return l("isSnippetEditorOpen", t);
    }
    function V(t) {
      return l("snippetPreviewType", t);
    }
    function W(t) {
      return l("isTrendsCtaOpen", t);
    }
    function J(t) {
      return s(
        "twitterUseFacebook",
        t,
        "rank_math_twitter_use_facebook",
        !0 === t ? "on" : "off"
      );
    }
    function $(t) {
      return s("twitterCardType", t, "rank_math_twitter_card_type");
    }
    function q(t) {
      return s("twitterTitle", t, "rank_math_twitter_title");
    }
    function Y(t) {
      return s("twitterDescription", t, "rank_math_twitter_description");
    }
    function Q(t) {
      return s("twitterAuthor", t, "rank_math_twitter_author");
    }
    function X(t) {
      return s("twitterImageID", t, "rank_math_twitter_image_id");
    }
    function Z(t) {
      return s("twitterImage", t, "rank_math_twitter_image");
    }
    function tt(t) {
      return s(
        "twitterHasOverlay",
        t,
        "rank_math_twitter_enable_image_overlay",
        !0 === t ? "on" : "off"
      );
    }
    function et(t) {
      return s("twitterImageOverlay", t, "rank_math_twitter_image_overlay");
    }
    function rt(t) {
      return s("twitterPlayerUrl", t, "rank_math_twitter_player_url");
    }
    function nt(t) {
      return s("twitterPlayerSize", t, "rank_math_twitter_player_size");
    }
    function at(t) {
      return s("twitterPlayerStream", t, "rank_math_twitter_player_stream");
    }
    function it(t) {
      return s(
        "twitterPlayerStreamCtype",
        t,
        "rank_math_twitter_player_stream_ctype"
      );
    }
    function ot(t) {
      return s("twitterAppDescription", t, "rank_math_twitter_app_description");
    }
    function ct(t) {
      return s("twitterAppIphoneID", t, "rank_math_twitter_app_iphone_id");
    }
    function ut(t) {
      return s("twitterAppIphoneName", t, "rank_math_twitter_app_iphone_name");
    }
    function st(t) {
      return s("twitterAppIphoneUrl", t, "rank_math_twitter_app_iphone_url");
    }
    function lt(t) {
      return s("twitterAppIpadID", t, "rank_math_twitter_app_ipad_id");
    }
    function pt(t) {
      return s("twitterAppIpadName", t, "rank_math_twitter_app_ipad_name");
    }
    function dt(t) {
      return s("twitterAppIpadUrl", t, "rank_math_twitter_app_ipad_url");
    }
    function ft(t) {
      return s(
        "twitterAppGoogleplayID",
        t,
        "rank_math_twitter_app_googleplay_id"
      );
    }
    function ht(t) {
      return s(
        "twitterAppGoogleplayName",
        t,
        "rank_math_twitter_app_googleplay_name"
      );
    }
    function mt(t) {
      return s(
        "twitterAppGoogleplayUrl",
        t,
        "rank_math_twitter_app_googleplay_url"
      );
    }
    function gt(t) {
      return s("twitterAppCountry", t, "rank_math_twitter_app_country");
    }
    function yt(t) {
      return l("isLoaded", t);
    }
    function bt(t) {
      return l("selectedKeyword", t);
    }
    function vt() {
      return l("refreshResults", Date.now());
    }
    function kt() {
      return l("isPro", !0);
    }
    function wt(t) {
      return l("isDiviPageSettingsBarActive", t);
    }
    function _t(t) {
      return l("isDiviRankMathModalActive", t);
    }
    var Ot = r(0),
      jt = r(13),
      St = r.n(jt);
    function Tt(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function Dt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Tt(Object(r), !0).forEach(function (e) {
              It(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Tt(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function It(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function Pt(t) {
      return l("isSchemaEditorOpen", t);
    }
    function Et(t) {
      return l("isSchemaTemplatesOpen", t);
    }
    function At(t) {
      return l("schemaUpdated", t);
    }
    function Ct(t) {
      return l("editingSchemaId", t);
    }
    function Mt(t) {
      return l("editorTab", t);
    }
    function xt(t) {
      return l("templateTab", t);
    }
    function Rt(t) {
      return l("editSchemas", t);
    }
    function Ut(t) {
      return s("schemas", t);
    }
    function Ft(t, e) {
      var r = Dt({}, Object(o.select)("rank-math").getEditSchemas());
      return (r[t] = e), l("editSchemas", r);
    }
    function Nt(t, e) {
      var r = Dt({}, Object(o.select)("rank-math").getSchemas());
      return (r[t] = e), s("schemas", r);
    }
    function Lt(t) {
      var e = Dt({}, Object(o.select)("rank-math").getSchemas());
      return (
        delete e[t],
        Object(u.doAction)("rank_math_schema_trash", t),
        s("schemas", e, "rank_math_delete_" + t, "")
      );
    }
    function Kt(t, e, r) {
      return (
        St()({
          method: "POST",
          path: "rankmath/v1/saveTemplate",
          data: { schema: t, postId: r },
        }).then(function (r) {
          e({ loading: !1, showNotice: !0, postId: r.id }),
            setTimeout(function () {
              e({ showNotice: !1 }),
                Object(F.get)(rankMath, "isTemplateScreen", !1) &&
                  ((document.title = Object(Ot.__)("Edit Schema", "rank-math")),
                  window.history.pushState(
                    null,
                    "",
                    r.link.replace(/&amp;/g, "&")
                  ));
            }, 2e3),
            rankMath.schemaTemplates.push({
              schema: t,
              title: t.metadata.title,
              type: t["@type"],
            });
        }),
        e({ loading: !0 }),
        { type: "DONT_WANT_TO_DO_SOMETHING" }
      );
    }
    function Ht(t) {
      return l("keywordsData", t);
    }
    function zt(t) {
      return s("contentAIScore", t, "rank_math_contentai_score");
    }
    function Gt(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function Bt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Gt(Object(r), !0).forEach(function (e) {
              Vt(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Gt(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function Vt(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var Wt = rankMath.assessor.serpData,
      Jt = rankMath.assessor.hasRedirection,
      $t = {
        postID: null,
        title: Wt.title ? Wt.title : Wt.titleTemplate,
        description: Wt.description,
        keywords: Wt.focusKeywords,
        pillarContent: Wt.pillarContent,
        featuredImage: "",
        permalink: !1,
        primaryTerm: Wt.primaryTerm,
        robots: Wt.robots,
        advancedRobots: Wt.advancedRobots,
        canonicalUrl: Wt.canonicalUrl,
        breadcrumbTitle: Wt.breadcrumbTitle,
        showScoreFrontend: Wt.showScoreFrontend,
        redirectionID: Jt
          ? Object(F.get)(rankMath.assessor, "redirection.id", "")
          : "",
        redirectionType: Jt
          ? Object(F.get)(rankMath.assessor, "redirection.header_code", "")
          : "",
        redirectionUrl: Jt
          ? Object(F.get)(rankMath.assessor, "redirection.url_to", "")
          : "",
        facebookTitle: Wt.facebookTitle,
        facebookImage: Wt.facebookImage,
        facebookImageID: Wt.facebookImageID,
        facebookAuthor: Wt.facebookAuthor,
        facebookDescription: Wt.facebookDescription,
        facebookHasOverlay: Wt.facebookHasOverlay,
        facebookImageOverlay: Wt.facebookImageOverlay,
        twitterTitle: Wt.twitterTitle,
        twitterImage: Wt.twitterImage,
        twitterAuthor: Wt.twitterAuthor,
        twitterImageID: Wt.twitterImageID,
        twitterCardType: Wt.twitterCardType,
        twitterUseFacebook: Wt.twitterUseFacebook,
        twitterDescription: Wt.twitterDescription,
        twitterHasOverlay: Wt.twitterHasOverlay,
        twitterImageOverlay: Wt.twitterImageOverlay,
        twitterPlayerUrl: Wt.twitterPlayerUrl,
        twitterPlayerSize: Wt.twitterPlayerSize,
        twitterPlayerStream: Wt.twitterPlayerStream,
        twitterPlayerStreamCtype: Wt.twitterPlayerStreamCtype,
        twitterAppDescription: Wt.twitterAppDescription,
        twitterAppIphoneName: Wt.twitterAppIphoneName,
        twitterAppIphoneID: Wt.twitterAppIphoneID,
        twitterAppIphoneUrl: Wt.twitterAppIphoneUrl,
        twitterAppIpadName: Wt.twitterAppIpadName,
        twitterAppIpadID: Wt.twitterAppIpadID,
        twitterAppIpadUrl: Wt.twitterAppIpadUrl,
        twitterAppGoogleplayName: Wt.twitterAppGoogleplayName,
        twitterAppGoogleplayID: Wt.twitterAppGoogleplayID,
        twitterAppGoogleplayUrl: Wt.twitterAppGoogleplayUrl,
        twitterAppCountry: Wt.twitterAppCountry,
        schemas: Object(F.get)(rankMath, "schemas", {}),
        score: 0,
        contentAIScore: {},
        dirtyMetadata: {},
      };
    function qt() {
      var t,
        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $t,
        r = arguments.length > 1 ? arguments[1] : void 0,
        n = Bt({}, e.dirtyMetadata);
      return (
        !1 !== r.metaKey && (n[r.metaKey] = r.metaValue),
        "RANK_MATH_APP_DATA" === r.type
          ? "dirtyMetadata" === r.key
            ? Bt(Bt({}, e), {}, { dirtyMetadata: r.value })
            : Bt(
                Bt({}, e),
                {},
                (Vt((t = {}), r.key, r.value), Vt(t, "dirtyMetadata", n), t)
              )
          : e
      );
    }
    function Yt(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function Qt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Yt(Object(r), !0).forEach(function (e) {
              Xt(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Yt(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function Xt(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var Zt = {
      isLoaded: !1,
      isPro: !1,
      selectedKeyword: { tag: "", index: 0, data: { value: "" } },
      hasRedirect:
        rankMath.assessor.hasRedirection &&
        !Object(F.isEmpty)(
          Object(F.get)(rankMath.assessor, "redirection.id", "")
        ) &&
        !Object(F.isEmpty)(
          Object(F.get)(rankMath.assessor, "redirection.url_to", "")
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
      keywordsData: Object(F.get)(rankMath, "ca_data", []),
    };
    function te() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zt,
        e = arguments.length > 1 ? arguments[1] : void 0;
      return "RANK_MATH_APP_UI" === e.type
        ? Qt(Qt({}, t), {}, Xt({}, e.key, e.value))
        : t;
    }
    function ee(t) {
      return t.appData;
    }
    function re(t) {
      return t.appData.dirtyMetadata;
    }
    function ne(t) {
      return t.appData.score;
    }
    function ae(t) {
      return t.appData.keywords;
    }
    function ie(t) {
      return t.appData.pillarContent;
    }
    function oe(t) {
      return t.appData.robots;
    }
    function ce(t) {
      return t.appData.advancedRobots;
    }
    function ue(t) {
      return t.appData.canonicalUrl;
    }
    function se(t) {
      return t.appData.breadcrumbTitle;
    }
    function le(t) {
      return "todo";
    }
    function pe(t) {
      return t.appData.showScoreFrontend;
    }
    function de(t) {
      return t.appUi.isLoaded;
    }
    function fe(t) {
      return t.appUi.selectedKeyword;
    }
    function he(t) {
      return t.appUi.refreshResults;
    }
    function me(t) {
      return t.appUi.isPro;
    }
    function ge(t) {
      return t.appUi.isDiviPageSettingsBarActive;
    }
    function ye(t) {
      return t.appUi.isDiviRankMathModalActive;
    }
    function be(t) {
      return t.appData.facebookTitle;
    }
    function ve(t) {
      return t.appData.facebookDescription;
    }
    function ke(t) {
      return t.appData.facebookAuthor;
    }
    function we(t) {
      return t.appData.facebookImageID;
    }
    function _e(t) {
      return t.appData.facebookImage;
    }
    function Oe(t) {
      return t.appData.facebookHasOverlay;
    }
    function je(t) {
      return "" !== t.appData.facebookImageOverlay
        ? t.appData.facebookImageOverlay
        : "play";
    }
    function Se(t) {
      return t.appData.postID;
    }
    function Te(t) {
      return t.appData.title;
    }
    function De(t) {
      return t.appData.permalink;
    }
    function Ie(t) {
      return t.appData.description;
    }
    function Pe(t) {
      return t.appData.featuredImage;
    }
    function Ee(t) {
      var e = t.appData.featuredImage;
      return '<img src="'
        .concat(e.source_url, '" alt="')
        .concat(e.alt_text, '" >');
    }
    function Ae(t) {
      return t.appData.primaryTerm;
    }
    function Ce(t) {
      return t.appData.redirectionID;
    }
    function Me(t) {
      return t.appData.redirectionType;
    }
    function xe(t) {
      return t.appData.redirectionUrl;
    }
    function Re(t) {
      return t.appUi.redirectionItem;
    }
    function Ue(t) {
      return t.appUi.hasRedirect;
    }
    var Fe = r(9);
    function Ne(t) {
      return Object(N.a)(t.appUi.serpTitle);
    }
    function Le(t) {
      return Object(Fe.safeDecodeURIComponent)(t.appUi.serpSlug);
    }
    function Ke(t) {
      return t.appUi.serpDescription;
    }
    function He(t) {
      return t.appUi.isSnippetEditorOpen;
    }
    function ze(t) {
      return t.appUi.snippetPreviewType;
    }
    function Ge(t) {
      return t.appUi.isTrendsCtaOpen;
    }
    function Be(t) {
      return t.appUi.isSchemaEditorOpen;
    }
    function Ve(t) {
      return t.appUi.isSchemaTemplatesOpen;
    }
    function We(t) {
      return t.appUi.schemaUpdated;
    }
    function Je(t) {
      return t.appData.schemas;
    }
    function $e(t) {
      return t.appUi.editSchemas;
    }
    function qe(t) {
      return {
        id: t.appUi.editingSchemaId,
        data: t.appUi.editSchemas[t.appUi.editingSchemaId],
      };
    }
    function Ye(t) {
      return t.appData.schemas[t.appUi.editingSchemaId];
    }
    function Qe(t) {
      return t.appUi.editorTab;
    }
    function Xe(t) {
      return t.appUi.templateTab;
    }
    function Ze(t) {
      return t.appData.twitterUseFacebook;
    }
    function tr(t) {
      return t.appData.twitterCardType;
    }
    function er(t) {
      return t.appData.twitterTitle;
    }
    function rr(t) {
      return t.appData.twitterDescription;
    }
    function nr(t) {
      return t.appData.twitterAuthor;
    }
    function ar(t) {
      return t.appData.twitterImageID;
    }
    function ir(t) {
      return t.appData.twitterImage;
    }
    function or(t) {
      return t.appData.twitterHasOverlay;
    }
    function cr(t) {
      return "" !== t.appData.twitterImageOverlay
        ? t.appData.twitterImageOverlay
        : "play";
    }
    function ur(t) {
      return t.appData.twitterAppDescription;
    }
    function sr(t) {
      return t.appData.twitterAppIphoneID;
    }
    function lr(t) {
      return t.appData.twitterAppIphoneName;
    }
    function pr(t) {
      return t.appData.twitterAppIphoneUrl;
    }
    function dr(t) {
      return t.appData.twitterAppIpadID;
    }
    function fr(t) {
      return t.appData.twitterAppIpadName;
    }
    function hr(t) {
      return t.appData.twitterAppIpadUrl;
    }
    function mr(t) {
      return t.appData.twitterAppGoogleplayID;
    }
    function gr(t) {
      return t.appData.twitterAppGoogleplayName;
    }
    function yr(t) {
      return t.appData.twitterAppGoogleplayUrl;
    }
    function br(t) {
      return t.appData.twitterAppCountry;
    }
    function vr(t) {
      return t.appData.twitterPlayerUrl;
    }
    function kr(t) {
      return t.appData.twitterPlayerSize;
    }
    function wr(t) {
      return t.appData.twitterPlayerStream;
    }
    function _r(t) {
      return t.appData.twitterPlayerStreamCtype;
    }
    function Or(t) {
      return t.appUi.keywordsData;
    }
    function jr(t) {
      return t.appData.contentAIScore;
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
  function (t, e, r) {
    "use strict";
    var n = document.createElement("div");
    e.a = function (t) {
      return (
        t &&
          "string" == typeof t &&
          ((t = t
            .replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "")
            .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "")),
          (n.innerHTML = t),
          (t = n.textContent),
          (n.textContent = "")),
        t
      );
    };
  },
  ,
  ,
  ,
  function (t, e, r) {
    "use strict";
    var n = r(1);
    e.a = function () {
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
  function (t, e, r) {
    "use strict";
    var n = r(4),
      a = Object(n.createSlotFill)("RankMathAfterEditor"),
      i = a.Fill,
      o = a.Slot,
      c = function (t) {
        var e = t.children,
          r = t.className;
        return wp.element.createElement(
          i,
          null,
          wp.element.createElement(n.PanelRow, { className: r }, e)
        );
      };
    (c.Slot = o), (e.a = c);
  },
  function (t, e, r) {
    "use strict";
    var n = r(4),
      a = Object(n.createSlotFill)("RankMathAdvancedTab"),
      i = a.Fill,
      o = a.Slot,
      c = function (t) {
        var e = t.children,
          r = t.className;
        return wp.element.createElement(
          i,
          null,
          wp.element.createElement(n.PanelRow, { className: r }, e)
        );
      };
    (c.Slot = o), (e.a = c);
  },
  function (t, e, r) {
    "use strict";
    var n = r(4),
      a = Object(n.createSlotFill)("RankMathAfterFocusKeyword"),
      i = a.Fill,
      o = a.Slot,
      c = function (t) {
        var e = t.children,
          r = t.className;
        return wp.element.createElement(
          i,
          null,
          wp.element.createElement("div", { className: r }, e)
        );
      };
    (c.Slot = o), (e.a = c);
  },
  function (t, e, r) {
    "use strict";
    e.a = function (t) {
      return 100 < t
        ? "bad-fk dark"
        : 80 < t
        ? "good-fk"
        : 50 < t
        ? "ok-fk"
        : "bad-fk";
    };
  },
  function (t, e, r) {
    "use strict";
    var n = { "&amp;": "&", "&quot;": '"', "&#39;": "'" },
      a = /&(?:amp|quot|#(0+)?39);/g,
      i = RegExp(a.source);
    e.a = function (t) {
      return t && i.test(t)
        ? t.replace(a, function (t) {
            return n[t] || "'";
          })
        : t || "";
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      a = r(6);
    function i(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var o = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
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
      var e, r, o;
      return (
        (e = t),
        (r = [
          {
            key: "contentLength",
            value: function (t) {
              return {
                hasScore: t.hasScore,
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
        ]) && i(e.prototype, r),
        o && i(e, o),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    e.a = o;
  },
  function (t, e, r) {
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
    function d(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function f(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? d(Object(r), !0).forEach(function (e) {
              h(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : d(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function h(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function m(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var g = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
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
      var e, r, o;
      return (
        (e = t),
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
              var t = this.getPostAttribute("generated_slug");
              return (
                ("auto-draft" !== t && "en" === rankMath.locale) || (t = ""),
                Object(u.safeDecodeURIComponent)(
                  this._coreEditorSelect.getPermalink()
                )
              );
            },
          },
          {
            key: "getSlug",
            value: function () {
              var t = this.getPostAttribute("generated_slug");
              return (
                ("auto-draft" !== t && "en" === rankMath.locale) || (t = ""),
                Object(u.safeDecodeURIComponent)(
                  this.getPostAttribute("slug") || t
                )
              );
            },
          },
          {
            key: "getFeaturedImage",
            value: function () {
              var t = this.getPostAttribute("featured_media");
              if (this.isValidMediaId(t)) {
                var e = Object(i.select)("core").getMedia(t);
                if (!Object(n.isUndefined)(e)) return e;
              }
            },
          },
          {
            key: "isValidMediaId",
            value: function (t) {
              return "number" == typeof t && 0 < t;
            },
          },
          {
            key: "getPostAttribute",
            value: function (t) {
              return Object(p.a)()
                ? (this._coreEditorSelect ||
                    (this._coreEditorSelect = Object(i.select)("core/editor")),
                  this._coreEditorSelect.getEditedPostAttribute(t))
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
              var t = f({}, this._data);
              (this._data = this.collectGutenbergData()),
                this.handleEditorChange(t);
            },
          },
          {
            key: "isSavingPost",
            value: function () {
              var t = Object(i.select)("core/editor");
              if (!t.isAutosavingPost() && t.isSavingPost()) {
                var e = Object(i.select)("rank-math").getDirtyMetadata();
                Object(n.isEmpty)(e) ||
                  (c()({
                    method: "POST",
                    path: "rankmath/v1/updateMeta",
                    data: {
                      objectID: rankMath.objectID,
                      objectType: rankMath.objectType,
                      meta: e,
                      content: this.getPostAttribute("content"),
                    },
                  }).then(function (t) {
                    Object(s.doAction)("rank_math_metadata_updated", t);
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
              var t = this;
              if (!this.isSavingSchemas) {
                var e = Object(i.select)("rank-math").getSchemas();
                if (
                  !Object(n.isEmpty)(e) &&
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
                      schemas: e,
                    },
                  }).then(function (a) {
                    var o = f({}, e),
                      c = f({}, r);
                    Object(n.isEmpty)(a) ||
                      Object(n.map)(a, function (t, e) {
                        (o["schema-" + t] = f({}, o[e])),
                          (c["schema-" + t] = f({}, c[e])),
                          delete o[e],
                          delete c[e];
                      }),
                      Object(i.dispatch)("rank-math").updateSchemas(o),
                      Object(i.dispatch)("rank-math").updateEditSchemas(c),
                      setTimeout(function () {
                        Object(i.dispatch)("rank-math").schemaUpdated(!1),
                          Object(s.doAction)("rank_math_schema_changed"),
                          (t.isSavingSchemas = !1);
                      }, 2e3);
                  });
                }
              }
            },
          },
          {
            key: "saveRedirection",
            value: function () {
              var t = this;
              if (!this.isSavingRedirection) {
                var e = Object(i.select)("rank-math").getRedirectionItem();
                if (!Object(n.isEmpty)(e)) {
                  (this.isSavingRedirection = !0),
                    (e.objectID = this.getPostID()),
                    (e.redirectionSources = this.getPermalink());
                  var r = Object(i.dispatch)("rank-math"),
                    a = Object(i.dispatch)("core/notices");
                  r.resetRedirection(),
                    c()({
                      method: "POST",
                      path: "rankmath/v1/updateRedirection",
                      data: e,
                    }).then(function (e) {
                      "delete" === e.action
                        ? (a.createInfoNotice(e.message, {
                            id: "redirectionNotice",
                          }),
                          r.updateRedirection("redirectionID", 0))
                        : "update" === e.action
                        ? a.createInfoNotice(e.message, {
                            id: "redirectionNotice",
                          })
                        : "new" === e.action &&
                          (r.updateRedirection("redirectionID", e.id),
                          a.createSuccessNotice(e.message, {
                            id: "redirectionNotice",
                          })),
                        setTimeout(function () {
                          (t.isSavingRedirection = !1),
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
                var t = this.getSlug();
                if (this.oldSlug !== t) {
                  var e = Object(i.dispatch)("core/notices");
                  (this.oldSlug = t),
                    e.createSuccessNotice(
                      Object(a.__)("Auto redirection created.", "rank-math"),
                      { id: "redirectionAutoCreationNotice" }
                    ),
                    setTimeout(function () {
                      e.removeNotice("redirectionAutoCreationNotice");
                    }, 2e3);
                }
              }
            },
          },
          {
            key: "handleEditorChange",
            value: function (t) {
              var e = this,
                r = {
                  id: "handleIDChange",
                  slug: "handleSlugChange",
                  title: "handleTitleChange",
                  excerpt: "handleExcerptChange",
                  content: "handleContentChange",
                  featuredImage: "handleFeaturedImageChange",
                };
              if (Object(n.isInteger)(t.id))
                return this.initialize
                  ? void Object(n.forEach)(r, function (r, n) {
                      e._data[n] !== t[n] && e[r](e._data[n]);
                    })
                  : ((this.initialize = !0),
                    Object(n.forEach)(r, function (t, r) {
                      e[t](e._data[r]);
                    }),
                    void rankMathEditor.refresh("init"));
              Object(i.dispatch)("rank-math").refreshResults();
            },
          },
          {
            key: "handleIDChange",
            value: function (t) {
              Object(i.dispatch)("rank-math").updatePostID(t),
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
            value: function (t) {
              l.a.setVariable("title", t),
                l.a.setVariable("term", t),
                l.a.setVariable("author", t),
                Object(i.dispatch)("rank-math").updateSerpTitle(
                  Object(i.select)("rank-math").getTitle()
                ),
                rankMathEditor.refresh("title");
            },
          },
          {
            key: "handleExcerptChange",
            value: function (t) {
              l.a.setVariable("excerpt", t),
                l.a.setVariable("excerpt_only", t),
                l.a.setVariable("wc_shortdesc", t),
                l.a.setVariable("seo_description", t),
                Object(i.dispatch)("rank-math").updateSerpDescription(
                  Object(i.select)("rank-math").getDescription()
                );
            },
          },
          {
            key: "handleFeaturedImageChange",
            value: function (t) {
              Object(i.dispatch)("rank-math").updateFeaturedImage(t),
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
        ]) && m(e.prototype, r),
        o && m(e, o),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    e.a = g;
  },
  function (t, e, r) {
    "use strict";
    var n = r(3),
      a = r.n(n),
      i = r(20),
      o = r(2);
    function c(t) {
      return (
        (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        c(t)
      );
    }
    function u(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function s(t, e, r) {
      return (
        e && u(t.prototype, e),
        r && u(t, r),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
    }
    var l = s(function t() {
      if (
        ((function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
        "post" === rankMath.objectType && rankMath.postSettings.linkSuggestions)
      ) {
        a.a.fn.extend({
          insertLink: function (t, e) {
            var r = this[0],
              n = "";
            if (r.selectionStart || "0" === r.selectionStart) {
              var a = r.selectionStart,
                i = r.selectionEnd,
                o = r.scrollTop;
              (n = '<a href="' + t + '">' + r.value.substring(a, i) + "</a>"),
                a === i && (n = '<a href="' + t + '">' + e + "</a>"),
                (r.value =
                  r.value.substring(0, a) +
                  n +
                  r.value.substring(i, r.value.length)),
                r.focus(),
                (r.selectionStart = a + n.length),
                (r.selectionEnd = a + n.length),
                (r.scrollTop = o);
            } else
              (n = '<a href="' + t + '">' + e + "</a>"),
                (r.value += n),
                r.focus();
          },
        });
        if (
          ("function" == typeof ClipboardJS &&
            a()(".suggestion-copy").on("click", function (t) {
              t.preventDefault(), new ClipboardJS(".suggestion-copy");
              var e = a()(this).parent().next(".suggestion-title"),
                r = e.html();
              e.text("Link Copied"),
                setTimeout(function () {
                  e.html(r);
                }, 1500);
            }),
          "object" !==
            ("undefined" == typeof tinymce ? "undefined" : c(tinymce)))
        )
          return !0;
        var e = null,
          r = null;
        a()(".suggestion-insert").on("click", function (t) {
          t.preventDefault();
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
            (e = tinymce.activeEditor), (r = a()(e.getBody()));
            var p = e.selection.getContent() || "";
            if (r.find("a[data-mce-selected]").length) {
              var d =
                ((n = ""),
                (c = ""),
                (u = e.selection.getStart()),
                (s = e.dom.getParent(u, "a[href]")) ||
                  ((c = e.selection.getContent({ format: "raw" })) &&
                    -1 !== c.indexOf("</a>") &&
                    ((n = c.match(/href="([^">]+)"/)) &&
                      n[1] &&
                      (s = e.$('a[href="' + n[1] + '"]', u)[0]),
                    s && e.selection.select(s))),
                s);
              e.dom.setAttribs(d, { href: l.data("url") }),
                a()(d).text() !== p && e.insertContent(p);
            } else
              p.length
                ? e.insertContent(
                    '<a href="' + l.data("url") + '">' + p + "</a>"
                  )
                : e.insertContent(
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
              var g = document.getSelection();
              if (g.rangeCount) {
                var y = g.getRangeAt(0),
                  b = a()("#block-" + f)
                    .text()
                    .substring(h, m),
                  v = document.createElement("a");
                (v.href = l.data("url")),
                  (v.innerText = "" !== b ? b : l.data("text")),
                  y.deleteContents(),
                  y.insertNode(v);
                var k = g.focusNode.innerHTML;
                Object(o.dispatch)("core/block-editor").updateBlock(f, {
                  attributes: { content: k },
                });
              }
            }
          }
          var w = l.closest(".suggestion-item").find(".suggestion-title"),
            _ = w.html();
          w.text("Link Inserted"),
            l.addClass("clicked"),
            setTimeout(function () {
              var t, e, r, n;
              w.html(_),
                l.removeClass("clicked"),
                !0 === rankMath.postSettings.useFocusKeyword &&
                  ((e = l),
                  (r = (t = w).data("fkcount") || 0),
                  (n = t.data("fk")),
                  (r += 1) === n.length && (r = 0),
                  t.find(">a").text(n[r]),
                  t.data("fkcount", r),
                  e.data("text", n[r]));
            }, 1500);
        }),
          a()("#rank_math_metabox_link_suggestions")
            .find("h2")
            .append(a()("#rank-math-link-suggestions-tooltip").html());
      }
    });
    e.a = l;
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
  function (t, e, r) {
    "use strict";
    r.r(e);
    var n = r(3),
      a = r.n(n),
      i = r(1),
      o = r(7),
      c = r(6),
      u = r(2),
      s = r(5),
      l = r(0),
      p = r(24),
      d = r(13),
      f = r.n(d),
      h = r(25);
    function m(t) {
      return (
        (m =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        m(t)
      );
    }
    function g() {
      g = function () {
        return t;
      };
      var t = {},
        e = Object.prototype,
        r = e.hasOwnProperty,
        n = "function" == typeof Symbol ? Symbol : {},
        a = n.iterator || "@@iterator",
        i = n.asyncIterator || "@@asyncIterator",
        o = n.toStringTag || "@@toStringTag";
      function c(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        c({}, "");
      } catch (t) {
        c = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function u(t, e, r, n) {
        var a = e && e.prototype instanceof p ? e : p,
          i = Object.create(a.prototype),
          o = new S(n || []);
        return (
          (i._invoke = (function (t, e, r) {
            var n = "suspendedStart";
            return function (a, i) {
              if ("executing" === n)
                throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === a) throw i;
                return D();
              }
              for (r.method = a, r.arg = i; ; ) {
                var o = r.delegate;
                if (o) {
                  var c = _(o, r);
                  if (c) {
                    if (c === l) continue;
                    return c;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = "executing";
                var u = s(t, e, r);
                if ("normal" === u.type) {
                  if (
                    ((n = r.done ? "completed" : "suspendedYield"), u.arg === l)
                  )
                    continue;
                  return { value: u.arg, done: r.done };
                }
                "throw" === u.type &&
                  ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
              }
            };
          })(t, r, o)),
          i
        );
      }
      function s(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = u;
      var l = {};
      function p() {}
      function d() {}
      function f() {}
      var h = {};
      c(h, a, function () {
        return this;
      });
      var y = Object.getPrototypeOf,
        b = y && y(y(T([])));
      b && b !== e && r.call(b, a) && (h = b);
      var v = (f.prototype = p.prototype = Object.create(h));
      function k(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function w(t, e) {
        function n(a, i, o, c) {
          var u = s(t[a], t, i);
          if ("throw" !== u.type) {
            var l = u.arg,
              p = l.value;
            return p && "object" == m(p) && r.call(p, "__await")
              ? e.resolve(p.__await).then(
                  function (t) {
                    n("next", t, o, c);
                  },
                  function (t) {
                    n("throw", t, o, c);
                  }
                )
              : e.resolve(p).then(
                  function (t) {
                    (l.value = t), o(l);
                  },
                  function (t) {
                    return n("throw", t, o, c);
                  }
                );
          }
          c(u.arg);
        }
        var a;
        this._invoke = function (t, r) {
          function i() {
            return new e(function (e, a) {
              n(t, r, e, a);
            });
          }
          return (a = a ? a.then(i, i) : i());
        };
      }
      function _(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              _(t, e),
              "throw" === e.method)
            )
              return l;
            (e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return l;
        }
        var n = s(r, t.iterator, e.arg);
        if ("throw" === n.type)
          return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l;
        var a = n.arg;
        return a
          ? a.done
            ? ((e[t.resultName] = a.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              l)
            : a
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            l);
      }
      function O(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function j(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function S(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(O, this),
          this.reset(!0);
      }
      function T(t) {
        if (t) {
          var e = t[a];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              i = function e() {
                for (; ++n < t.length; )
                  if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (i.next = i);
          }
        }
        return { next: D };
      }
      function D() {
        return { value: void 0, done: !0 };
      }
      return (
        (d.prototype = f),
        c(v, "constructor", f),
        c(f, "constructor", d),
        (d.displayName = c(f, o, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === d || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, f)
              : ((t.__proto__ = f), c(t, o, "GeneratorFunction")),
            (t.prototype = Object.create(v)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        k(w.prototype),
        c(w.prototype, i, function () {
          return this;
        }),
        (t.AsyncIterator = w),
        (t.async = function (e, r, n, a, i) {
          void 0 === i && (i = Promise);
          var o = new w(u(e, r, n, a), i);
          return t.isGeneratorFunction(r)
            ? o
            : o.next().then(function (t) {
                return t.done ? t.value : o.next();
              });
        }),
        k(v),
        c(v, o, "Generator"),
        c(v, a, function () {
          return this;
        }),
        c(v, "toString", function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = [];
          for (var r in t) e.push(r);
          return (
            e.reverse(),
            function r() {
              for (; e.length; ) {
                var n = e.pop();
                if (n in t) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (t.values = T),
        (S.prototype = {
          constructor: S,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(j),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  r.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function n(r, n) {
              return (
                (o.type = "throw"),
                (o.arg = t),
                (e.next = r),
                n && ((e.method = "next"), (e.arg = void 0)),
                !!n
              );
            }
            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
              var i = this.tryEntries[a],
                o = i.completion;
              if ("root" === i.tryLoc) return n("end");
              if (i.tryLoc <= this.prev) {
                var c = r.call(i, "catchLoc"),
                  u = r.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var a = this.tryEntries[n];
              if (
                a.tryLoc <= this.prev &&
                r.call(a, "finallyLoc") &&
                this.prev < a.finallyLoc
              ) {
                var i = a;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var o = i ? i.completion : {};
            return (
              (o.type = t),
              (o.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                : this.complete(o)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              l
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), j(r), l;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var a = n.arg;
                  j(r);
                }
                return a;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: T(t), resultName: e, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          },
        }),
        t
      );
    }
    function y(t, e, r, n, a, i, o) {
      try {
        var c = t[i](o),
          u = c.value;
      } catch (t) {
        return void r(t);
      }
      c.done ? e(u) : Promise.resolve(u).then(n, a);
    }
    function b(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, a) {
          var i = t.apply(e, r);
          function o(t) {
            y(i, n, a, o, c, "next", t);
          }
          function c(t) {
            y(i, n, a, o, c, "throw", t);
          }
          o(void 0);
        });
      };
    }
    function v(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var k = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.analyzer = new o.Analyzer({
              i18n: l,
              analyses: rankMath.assessor.researchesTests,
            })),
            (this.dataCollector = e),
            (this.promises = []),
            this.hooks(),
            this.registerRefresh(),
            this.saveEvent();
        }
        var e, r, n;
        return (
          (e = t),
          (r = [
            {
              key: "hooks",
              value: function () {
                (this.updateKeywordResult =
                  this.updateKeywordResult.bind(this)),
                  (this.sanitizeData = this.sanitizeData.bind(this)),
                  (this.addScoreElem = this.addScoreElem.bind(this)),
                  Object(c.addAction)(
                    "rankMath_analysis_keywordUsage_updated",
                    "rank-math",
                    this.updateKeywordResult
                  ),
                  Object(c.addFilter)(
                    "rank_math_sanitize_meta_value",
                    "rank-math",
                    this.sanitizeData
                  ),
                  Object(c.addFilter)(
                    "rank_math_sanitize_data",
                    "rank-math",
                    this.sanitizeData
                  ),
                  Object(c.addAction)(
                    "rank_math_loaded",
                    "rank-math",
                    this.addScoreElem,
                    11
                  );
              },
            },
            {
              key: "addScoreElem",
              value: function () {
                var t = this;
                rankMath.showScore &&
                  setTimeout(function () {
                    (t.scoreText =
                      '<span class="score-text"><span class="score-icon"><svg viewBox="0 0 460 460" xmlns="http://www.w3.org/2000/svg" width="20"><g><path d="m462 234.84-76.17 3.43 13.43 21-127 81.18-126-52.93-146.26 60.97 10.14 24.34 136.1-56.71 128.57 54 138.69-88.61 13.43 21z"/><path d="m54.1 312.78 92.18-38.41 4.49 1.89v-54.58h-96.67zm210.9-223.57v235.05l7.26 3 89.43-57.05v-181zm-105.44 190.79 96.67 40.62v-165.19h-96.67z"/></g></svg></span> SEO: <strong>Not available</strong></span>'),
                      (t.scoreElem = a()(
                        '<div class="misc-pub-section rank-math-seo-score">' +
                          t.scoreText +
                          "</div>"
                      )),
                      (t.scoreText = t.scoreElem.find("strong")),
                      a()("#misc-publishing-actions").append(t.scoreElem),
                      (t.fkScoreText =
                        '<span class="score-text">Not available</span>'),
                      (t.fkScoreElem = a()(
                        '<div class="rank-math-seo-score below-focus-keyword">' +
                          t.fkScoreText +
                          "</div>"
                      )),
                      (t.fkScoreText = t.fkScoreElem.find("span")),
                      a()("#rank-math-metabox-wrapper .rank-math-focus-keyword")
                        .find("tags")
                        .parent("div")
                        .append(t.fkScoreElem),
                      (t.updateScore = t.updateScore.bind(t)),
                      t.updateScore(),
                      Object(c.addAction)(
                        "rank_math_refresh_results",
                        "rank-math",
                        t.updateScore
                      );
                  }, 1500);
              },
            },
            {
              key: "updateScore",
              value: function () {
                var t = rankMathEditor.resultManager.getScore(
                    rankMathEditor.getPrimaryKeyword()
                  ),
                  e = Object(p.a)(t);
                this.scoreElem.removeClass("loading bad-fk ok-fk good-fk"),
                  this.fkScoreElem.removeClass("loading bad-fk ok-fk good-fk"),
                  this.scoreElem.addClass(e),
                  this.fkScoreElem.addClass(e),
                  this.scoreText.html(t + " / 100"),
                  this.fkScoreText.html(t + " / 100");
              },
            },
            {
              key: "sanitizeData",
              value: function (t, e) {
                return "schemas" === e ||
                  Object(i.isObject)(t) ||
                  Object(i.isEmpty)(t)
                  ? t
                  : o.Helpers.sanitizeAppData(t);
              },
            },
            {
              key: "getPaper",
              value: function (t, e) {
                var r = this.dataCollector.getData(),
                  n = new o.Paper("", { locale: rankMath.localeFull });
                return (
                  n.setTitle(Object(u.select)("rank-math").getSerpTitle()),
                  n.setPermalink(r.slug),
                  n.setDescription(
                    Object(u.select)("rank-math").getSerpDescription()
                  ),
                  n.setUrl(r.permalink),
                  n.setText(
                    Object(h.a)(
                      Object(c.applyFilters)("rank_math_content", r.content)
                    )
                  ),
                  n.setKeyword(t),
                  n.setKeywords(e),
                  n.setSchema(Object(u.select)("rank-math").getSchemas()),
                  Object(i.isUndefined)(r.featuredImage) ||
                    (n.setThumbnail(r.featuredImage.source_url),
                    n.setThumbnailAltText(
                      o.Helpers.removeDiacritics(r.featuredImage.alt_text)
                    )),
                  (Object(i.isEmpty)(
                    Object(u.select)("rank-math").getContentAIScore()
                  ) &&
                    Object(i.isEmpty)(rankMath.ca_keyword)) ||
                    n.setContentAI(!0),
                  n
                );
              },
            },
            {
              key: "registerRefresh",
              value: function () {
                var t = this;
                this.refresh = Object(i.debounce)(function (e) {
                  if (!1 !== Object(u.select)("rank-math").isLoaded()) {
                    var r = Object(u.select)("rank-math")
                        .getKeywords()
                        .split(","),
                      n = [];
                    Object(c.doAction)("rank_math_" + e + "_refresh"),
                      r.map(function (e, a) {
                        var i = t.getPaper(o.Helpers.removeDiacritics(e), r),
                          c =
                            0 === a
                              ? rankMath.assessor.researchesTests
                              : t.filterTests(t.getSecondaryKeywordTests());
                        n.push(
                          t.analyzer.analyzeSome(c, i).then(function (t) {
                            rankMathEditor.resultManager.update(
                              i.getKeyword(),
                              t,
                              0 === a
                            ),
                              0 === a &&
                                Object(u.dispatch)(
                                  "rank-math"
                                ).updateAnalysisScore(
                                  rankMathEditor.resultManager.getScore(
                                    i.getKeyword()
                                  )
                                );
                          })
                        ),
                          Promise.all(n).then(function () {
                            Object(u.dispatch)("rank-math").refreshResults(),
                              t.refreshResults();
                          });
                      });
                  }
                }, 500);
              },
            },
            {
              key: "updateKeywordResult",
              value: function (t, e) {
                rankMathEditor.resultManager.update(t, { keywordNotUsed: e }),
                  t === rankMathEditor.getSelectedKeyword().toLowerCase() &&
                    Object(u.dispatch)("rank-math").refreshResults();
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
                var t = Object(u.select)("rank-math").getKeywords();
                return o.Helpers.removeDiacritics(t.split(",")[0]);
              },
            },
            {
              key: "getSelectedKeyword",
              value: function () {
                var t = Object(u.select)("rank-math").getKeywords(),
                  e = Object(u.select)("rank-math").getSelectedKeyword(),
                  r = "" !== e.data.value ? e.data.value : t.split(",")[0];
                return o.Helpers.removeDiacritics(r);
              },
            },
            {
              key: "getResearch",
              value: function (t) {
                return this.analyzer.researcher.getResearch(t);
              },
            },
            {
              key: "refreshResults",
              value: function () {
                Object(c.doAction)("rank_math_refresh_results");
              },
            },
            {
              key: "filterTests",
              value: function (t) {
                return Object(i.intersection)(
                  t,
                  rankMath.assessor.researchesTests
                );
              },
            },
            {
              key: "saveEvent",
              value: function () {
                var t = this;
                if (
                  !Object(i.isUndefined)(this.dataCollector.form) &&
                  !Object(i.isUndefined)(this.dataCollector.updateBtn)
                ) {
                  var e = !0;
                  this.dataCollector.form.on("submit", function (r) {
                    if (e && !Object(i.isUndefined)(r.originalEvent)) {
                      r.preventDefault();
                      var n =
                        t.dataCollector.updateBtn.data("disable") &&
                        t.dataCollector.saveDraft.length
                          ? t.dataCollector.saveDraft
                          : t.dataCollector.updateBtn;
                      n
                        .addClass("disabled")
                        .parent()
                        .find(".spinner")
                        .addClass("is-active"),
                        (e = !1);
                      var a = t.saveMeta(),
                        o = t.saveSchemas(a),
                        c = t.saveRedirection(o);
                      return (
                        Promise.all([a, o, c])
                          .then(function () {
                            n.removeClass("disabled").trigger("click");
                          })
                          .catch(function () {
                            n.removeClass("disabled").trigger("click");
                          }),
                        !1
                      );
                    }
                  });
                }
              },
            },
            {
              key: "saveMeta",
              value: function () {
                return new Promise(function (t) {
                  var e = Object(u.select)("rank-math").getDirtyMetadata();
                  Object(i.isEmpty)(e)
                    ? t(!0)
                    : (f()({
                        method: "POST",
                        path: "rankmath/v1/updateMeta",
                        data: {
                          objectID: rankMath.objectID,
                          objectType: rankMath.objectType,
                          meta: e,
                          content:
                            rankMathEditor.assessor.dataCollector.getContent(),
                        },
                      })
                        .then(function () {
                          t(!0);
                        })
                        .catch(function () {
                          t(!0);
                        }),
                      Object(u.dispatch)("rank-math").resetDirtyMetadata());
                });
              },
            },
            {
              key: "saveRedirection",
              value: function (t) {
                return new Promise(
                  (function () {
                    var e = b(
                      g().mark(function e(r) {
                        var n, a, o;
                        return g().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), t;
                              case 2:
                                if (
                                  ((n = Object(u.select)(
                                    "rank-math"
                                  ).getRedirectionItem()),
                                  !Object(i.isEmpty)(n))
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                return r(!0), e.abrupt("return");
                              case 6:
                                (n.objectID = window.rankMath.objectID),
                                  (n.objectType = window.rankMath.objectType),
                                  (n.redirectionSources =
                                    rankMathEditor.assessor.dataCollector.getData(
                                      "permalink"
                                    )),
                                  (a = Object(u.dispatch)("rank-math")),
                                  (o = Object(u.dispatch)("core/notices")),
                                  a.resetRedirection(),
                                  f()({
                                    method: "POST",
                                    path: "rankmath/v1/updateRedirection",
                                    data: n,
                                  })
                                    .then(function (t) {
                                      "delete" === t.action
                                        ? (o.createInfoNotice(t.message, {
                                            id: "redirectionNotice",
                                          }),
                                          a.updateRedirection(
                                            "redirectionID",
                                            0
                                          ))
                                        : "update" === t.action
                                        ? o.createInfoNotice(t.message, {
                                            id: "redirectionNotice",
                                          })
                                        : "new" === t.action &&
                                          (a.updateRedirection(
                                            "redirectionID",
                                            t.id
                                          ),
                                          o.createSuccessNotice(t.message, {
                                            id: "redirectionNotice",
                                          })),
                                        setTimeout(function () {
                                          o.removeNotice("redirectionNotice");
                                        }, 2e3),
                                        r(!0);
                                    })
                                    .catch(function () {
                                      r(!0);
                                    });
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
              },
            },
            {
              key: "saveSchemas",
              value: function (t) {
                return new Promise(
                  (function () {
                    var e = b(
                      g().mark(function e(r) {
                        var n;
                        return g().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), t;
                              case 2:
                                if (
                                  ((n = Object(u.select)(
                                    "rank-math"
                                  ).getSchemas()),
                                  !Object(i.isEmpty)(n) &&
                                    Object(u.select)(
                                      "rank-math"
                                    ).hasSchemaUpdated())
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                return r(!0), e.abrupt("return");
                              case 6:
                                f()({
                                  method: "POST",
                                  path: "rankmath/v1/updateSchemas",
                                  data: {
                                    objectID: rankMath.objectID,
                                    objectType: rankMath.objectType,
                                    schemas: n,
                                  },
                                })
                                  .then(function () {
                                    r(!0);
                                  })
                                  .catch(function () {
                                    r(!0);
                                  });
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
              },
            },
          ]),
          r && v(e.prototype, r),
          n && v(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })(),
      w = k,
      _ = r(20),
      O = r(26);
    function j(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var S = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.methods = []),
            (this.init = this.init.bind(this)),
            (this.refresh = this.refresh.bind(this)),
            Object(c.addAction)("rank_math_loaded", "rank-math", this.init);
        }
        var e, r, n;
        return (
          (e = t),
          (r = [
            {
              key: "init",
              value: function () {
                this.methods.length && rankMathEditor.refresh("content");
              },
            },
            {
              key: "registerPlugin",
              value: function () {
                console.warn("RankMathApp.registerPlugin is deprecated.");
              },
            },
            {
              key: "refresh",
              value: function (t) {
                console.warn(
                  "RankMathApp.refresh is deprecated, use rankMathEditor.refresh()"
                ),
                  this.methods.push(t);
              },
            },
            {
              key: "reloadPlugin",
              value: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "content";
                console.warn(
                  "RankMathApp.reloadPlugin is deprecated, use rankMathEditor.refresh()"
                ),
                  this.refresh(e);
              },
            },
          ]),
          r && j(e.prototype, r),
          n && j(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })(),
      T = S,
      D = r(15),
      I = r(8);
    function P(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var E = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.updateBtn = a()("#publish")),
            (this.form = a()("#post")),
            (this._data = {
              id: !1,
              slug: !1,
              permalink: !1,
              content: !1,
              title: !1,
              excerpt: !1,
              featuredImage: !1,
              description: "",
            }),
            (this.refresh = this.refresh.bind(this)),
            Object(c.addAction)("rank_math_loaded", "rank-math", this.refresh),
            this.setup(),
            this.init();
        }
        var e, r, n;
        return (
          (e = t),
          (r = [
            {
              key: "init",
              value: function () {
                var t = this;
                this.elemTitle
                  .on(
                    "input",
                    Object(i.debounce)(function () {
                      t.handleTitleChange(t.elemTitle.val());
                    }, 500)
                  )
                  .trigger("input"),
                  this.elemDescription
                    .on(
                      "input",
                      Object(i.debounce)(function () {
                        t.handleExcerptChange(t.elemDescription.val());
                      }, 500)
                    )
                    .trigger("input"),
                  this.elemSlug.on(
                    "input",
                    Object(i.debounce)(function () {
                      rankMathEditor.updatePermalink(t.elemSlug.val());
                    }, 500)
                  );
              },
            },
            {
              key: "collectData",
              value: function () {
                this._data = {
                  id: this.getPostID(),
                  slug: this.getSlug(),
                  permalink: this.getPermalink(),
                  content: this.getContent(),
                  title: this.getTitle(),
                  excerpt: this.getExcerpt(),
                  featuredImage: this.getFeaturedImage(),
                };
              },
            },
            {
              key: "getPostID",
              value: function () {
                return rankMath.objectID;
              },
            },
            {
              key: "getTitle",
              value: function () {
                return this.elemTitle.val();
              },
            },
            {
              key: "getExcerpt",
              value: function () {
                var t = this.elemDescription.val();
                return (
                  I.a.setVariable("excerpt", t),
                  I.a.setVariable("excerpt_only", t),
                  I.a.setVariable("wc_shortdesc", t),
                  I.a.setVariable("seo_description", t),
                  t
                );
              },
            },
            {
              key: "getPermalink",
              value: function () {
                return this.getSlug()
                  ? rankMath.permalinkFormat.replace(
                      /%(postname|pagename|term|author)%/,
                      this.getSlug()
                    )
                  : "";
              },
            },
            {
              key: "getSlug",
              value: function () {
                return this.elemSlug.val();
              },
            },
            {
              key: "getFeaturedImage",
              value: function () {
                return this.featuredImage;
              },
            },
            {
              key: "refresh",
              value: function () {
                this.collectData(),
                  Object(u.dispatch)("rank-math").toggleLoaded(!0),
                  rankMathEditor.refresh("init");
              },
            },
            {
              key: "handleSlugChange",
              value: function (t) {
                var e =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                ("auto-draft" !== this.getStatus() || e) &&
                  this.elemSlug.val(t),
                  a()("#editable-post-name").text(t),
                  a()("#editable-post-name-full").text(t),
                  (this._data.slug = this.getSlug()),
                  (this._data.permalink = this.getPermalink()),
                  Object(u.dispatch)("rank-math").updateSerpSlug(t),
                  rankMathEditor.refresh("permalink");
              },
            },
            {
              key: "handleTitleChange",
              value: function (t) {
                I.a.setVariable("title", t),
                  I.a.setVariable("term", t),
                  I.a.setVariable("author", t),
                  Object(u.dispatch)("rank-math").updateSerpTitle(
                    Object(u.select)("rank-math").getTitle()
                  ),
                  rankMathEditor.refresh("title");
              },
            },
            {
              key: "handleExcerptChange",
              value: function () {
                (this._data.excerpt = this.getExcerpt()),
                  Object(u.dispatch)("rank-math").updateSerpDescription(
                    Object(u.select)("rank-math").getDescription()
                  ),
                  rankMathEditor.refresh("content");
              },
            },
            {
              key: "handleFeaturedImageChange",
              value: function () {
                (this._data.featuredImage = this.getFeaturedImage()),
                  Object(u.dispatch)("rank-math").updateFeaturedImage(
                    this.getFeaturedImage()
                  ),
                  rankMathEditor.refresh("featuredImage");
              },
            },
            {
              key: "handleContentChange",
              value: function () {
                (this._data.excerpt = this.getExcerpt()),
                  (this._data.content = this.getContent()),
                  Object(u.dispatch)("rank-math").updateSerpDescription(
                    Object(u.select)("rank-math").getDescription()
                  ),
                  rankMathEditor.refresh("content");
              },
            },
            {
              key: "getData",
              value: function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "";
                return t ? this._data[t] : this._data;
              },
            },
            {
              key: "updateData",
              value: function (t, e) {
                this._data[t] = e;
              },
            },
            {
              key: "isTinymce",
              value: function () {
                return "undefined" != typeof tinymce;
              },
            },
            {
              key: "getStatus",
              value: function () {
                var t =
                  !Object(i.isUndefined)(this.postStatus) &&
                  this.postStatus.length
                    ? this.postStatus.val()
                    : "";
                return Object(i.isUndefined)(t) ? "" : t;
              },
            },
          ]),
          r && P(e.prototype, r),
          n && P(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })(),
      A = E;
    function C(t) {
      return (
        (C =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        C(t)
      );
    }
    function M(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function x(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function R(t, e) {
      return (
        (R = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        R(t, e)
      );
    }
    function U(t) {
      var e = (function () {
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
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var r,
          n = N(t);
        if (e) {
          var a = N(this).constructor;
          r = Reflect.construct(n, arguments, a);
        } else r = n.apply(this, arguments);
        return F(this, r);
      };
    }
    function F(t, e) {
      if (e && ("object" === C(e) || "function" == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      })(t);
    }
    function N(t) {
      return (
        (N = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        N(t)
      );
    }
    var L = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && R(t, e);
        })(u, t);
        var e,
          r,
          n,
          o = U(u);
        function u() {
          return M(this, u), o.apply(this, arguments);
        }
        return (
          (e = u),
          (r = [
            {
              key: "setup",
              value: function () {
                (this.elemSlug = a()("#post_name")),
                  (this.elemTitle = a()("#title")),
                  (this.elemDescription = a()("#excerpt")),
                  (this.elemContent = a()("#content")),
                  (this.saveDraft = a()("#save-post")),
                  (this.postStatus = a()("#original_post_status")),
                  (this.assessThumbnail = this.assessThumbnail.bind(this)),
                  Object(c.addAction)(
                    "rank_math_updated_featured_image",
                    "rank-math",
                    this.assessThumbnail
                  ),
                  this.events();
              },
            },
            {
              key: "getContent",
              value: function () {
                if (null !== this.elemContent && 0 !== this.elemContent.length)
                  return this.isTinymce() &&
                    tinymce.activeEditor &&
                    "content" === tinymce.activeEditor.id
                    ? tinymce.activeEditor.getContent()
                    : this.elemContent.val();
              },
            },
            {
              key: "getSlug",
              value: function () {
                var t =
                  "" === this.elemSlug.val() &&
                  a()("#editable-post-name-full").length
                    ? a()("#editable-post-name-full").text()
                    : this.elemSlug.val();
                return Object(i.isUndefined)(t) ? "" : t;
              },
            },
            {
              key: "events",
              value: function () {
                var t = this;
                this.elemContent
                  .on(
                    "input change",
                    Object(i.debounce)(function () {
                      t.handleContentChange();
                    }, 500)
                  )
                  .trigger("change"),
                  a()(window).on("load", function () {
                    t.isTinymce() &&
                      (tinymce.activeEditor &&
                        !Object(i.isUndefined)(tinymce.editors.content) &&
                        tinymce.editors.content.on(
                          "keyup change",
                          Object(i.debounce)(function () {
                            t.handleContentChange();
                          }, 500)
                        ),
                      tinymce.editors &&
                        !Object(i.isUndefined)(tinymce.editors.excerpt) &&
                        tinymce.editors.excerpt.on(
                          "keyup change",
                          Object(i.debounce)(function () {
                            tinymce.editors.excerpt.save(),
                              t.handleExcerptChange();
                          }, 500)
                        ));
                  }),
                  a()(document).on("ajaxComplete", function (e, r, n) {
                    var i = "/admin-ajax.php";
                    if (i === n.url.substr(0 - i.length)) {
                      var o = "";
                      "string" == typeof n.data &&
                        -1 !== n.data.indexOf("action=sample-permalink") &&
                        ((o =
                          "" === r.responseText
                            ? t.elemTitle.val()
                            : a()("<div>" + r.responseText + "</div>")
                                .find("#editable-post-name-full")
                                .text()),
                        rankMathEditor.updatePermalink(o));
                    }
                  }),
                  this.saveDraft.on("click", function () {
                    t.updateBtn.attr("data-disable", "true");
                  });
              },
            },
            {
              key: "assessThumbnail",
              value: function (t) {
                (this.featuredImage = { source_url: t.src, alt_text: t.alt }),
                  this.handleFeaturedImageChange(t);
              },
            },
          ]) && x(e.prototype, r),
          n && x(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          u
        );
      })(A),
      K = L;
    function H(t) {
      return (
        (H =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        H(t)
      );
    }
    function z(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function G(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function B(t, e) {
      return (
        (B = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        B(t, e)
      );
    }
    function V(t) {
      var e = (function () {
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
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var r,
          n = J(t);
        if (e) {
          var a = J(this).constructor;
          r = Reflect.construct(n, arguments, a);
        } else r = n.apply(this, arguments);
        return W(this, r);
      };
    }
    function W(t, e) {
      if (e && ("object" === H(e) || "function" == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      })(t);
    }
    function J(t) {
      return (
        (J = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        J(t)
      );
    }
    var $ = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && B(t, e);
        })(c, t);
        var e,
          r,
          n,
          o = V(c);
        function c() {
          return z(this, c), o.apply(this, arguments);
        }
        return (
          (e = c),
          (r = [
            {
              key: "setup",
              value: function () {
                (this.updateBtn = a()(
                  '.edit-tag-actions input[type="submit"]'
                )),
                  (this.form = a()("#edittag")),
                  (this.elemSlug = a()("#slug")),
                  (this.elemTitle = a()("#name")),
                  (this.elemDescription = a()("#rank_math_description_editor")),
                  this.events();
              },
            },
            {
              key: "getContent",
              value: function () {
                return null === this.elemDescription ||
                  0 === this.elemDescription.length
                  ? ""
                  : this.isTinymce() &&
                    tinymce.activeEditor &&
                    "rank_math_description_editor" === tinymce.activeEditor.id
                  ? tinymce.activeEditor.getContent()
                  : this.elemDescription.val();
              },
            },
            {
              key: "events",
              value: function () {
                var t = this;
                a()(window).on("load", function () {
                  t.isTinymce() &&
                    tinymce.activeEditor &&
                    !Object(i.isUndefined)(
                      tinymce.editors.rank_math_description_editor
                    ) &&
                    tinymce.editors.rank_math_description_editor.on(
                      "keyup change",
                      Object(i.debounce)(function () {
                        t.handleContentChange();
                      }, 500)
                    );
                });
              },
            },
          ]) && G(e.prototype, r),
          n && G(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          c
        );
      })(A),
      q = $;
    function Y(t) {
      return (
        (Y =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        Y(t)
      );
    }
    function Q(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function X(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function Z(t, e) {
      return (
        (Z = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        Z(t, e)
      );
    }
    function tt(t) {
      var e = (function () {
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
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var r,
          n = rt(t);
        if (e) {
          var a = rt(this).constructor;
          r = Reflect.construct(n, arguments, a);
        } else r = n.apply(this, arguments);
        return et(this, r);
      };
    }
    function et(t, e) {
      if (e && ("object" === Y(e) || "function" == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      })(t);
    }
    function rt(t) {
      return (
        (rt = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        rt(t)
      );
    }
    var nt = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && Z(t, e);
        })(o, t);
        var e,
          r,
          n,
          i = tt(o);
        function o() {
          return Q(this, o), i.apply(this, arguments);
        }
        return (
          (e = o),
          (r = [
            {
              key: "setup",
              value: function () {
                (this.updateBtn = a()("#submit")),
                  (this.form = a()("#your-profile")),
                  (this.elemSlug = a()("#user_login")),
                  (this.elemTitle = a()("#display_name")),
                  (this.elemDescription = a()("#description"));
              },
            },
            {
              key: "getContent",
              value: function () {
                return this.elemDescription.val();
              },
            },
          ]) && X(e.prototype, r),
          n && X(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          o
        );
      })(A),
      at = nt,
      it = r(27),
      ot = r(28);
    function ct(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function ut(t, e, r) {
      return (
        e && ct(t.prototype, e),
        r && ct(t, r),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
    }
    var st = ut(function t() {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        "post" === rankMath.objectType &&
          !1 !== rankMath.assessor.primaryTaxonomy &&
          a()("[data-primary-term]").each(function () {
            var t = a()(this),
              e = t.val(),
              r = t.data("primary-term"),
              n = a()("#" + r + "div"),
              i = a()("#" + r + "checklist"),
              o = i.find("li"),
              c = i.find('input[type="checkbox"]:checked');
            o.addClass("rank-math-primary-term-li"),
              o.find("input").each(function () {
                var t = a()(this);
                t.parent().append(
                  '<span class="rank-math-tooltip"><input class="rank-math-make-primary" value="' +
                    t.val() +
                    '" type="radio" name="rank_math_primary_' +
                    r +
                    '"><span>Make Term Primary</span></span>'
                );
              }),
              c.each(function () {
                var t = a()(this).closest("li");
                t.addClass("term-checked"),
                  r + "-" + e === t.attr("id") &&
                    (t.addClass("term-marked-primary"),
                    t
                      .find(">label .rank-math-make-primary")
                      .prop("checked", !0));
              }),
              n.on("click", 'input[type="checkbox"]', function () {
                var e = a()(this).closest("li");
                if (
                  (e.toggleClass("term-checked"),
                  1 === i.find("li.term-checked").length ||
                    (e.hasClass("term-marked-primary") &&
                      !e.hasClass("term-checked")))
                ) {
                  var r = i.find(
                    "li.term-checked:first > label .rank-math-make-primary"
                  );
                  0 < r.length
                    ? r.trigger("click")
                    : (o.removeClass("term-marked-primary"),
                      o.find('input[type="radio"]').prop("checked", !1),
                      t.val(""));
                }
              }),
              n.on("click", ".rank-math-make-primary", function () {
                var e = a()(this),
                  r = e.closest("li");
                o.removeClass("term-marked-primary"),
                  r.addClass("term-marked-primary"),
                  t.val(e.val());
              }),
              i.on("wpListAddEnd", function () {
                i.find("li:not(.rank-math-primary-term-li)")
                  .addClass("rank-math-primary-term-li term-checked")
                  .find("input")
                  .each(function () {
                    var t = a()(this);
                    t.parent().append(
                      '<span class="rank-math-tooltip"><input class="rank-math-make-primary" value="' +
                        t.val() +
                        '" type="radio" name="rank_math_primary_' +
                        r +
                        '"><span>Make Term Primary</span></span>'
                    );
                  });
              });
          });
    });
    function lt(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var pt = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.image_src = ""),
            (this.image_alt = ""),
            this.getFeaturedImage(),
            this.setImage(),
            this.removeImage(),
            Object(_.a)() && this.gutenbergImage();
        }
        var e, r, n;
        return (
          (e = t),
          (r = [
            {
              key: "setImage",
              value: function () {
                var t = this;
                if (!Object(i.isUndefined)(wp.media)) {
                  var e = wp.media.featuredImage.frame();
                  e.on("select", function () {
                    var r = a()("#rank_math_post_thumbnail"),
                      n = e.state().get("selection").first().toJSON();
                    t.sizeWarning(n),
                      1 > r.length &&
                        ((r = a()('<img id="rank_math_post_thumbnail" />')),
                        a()(
                          ".facebook-thumbnail",
                          ".rank-math-social-preview-image"
                        ).before(r)),
                      "large" in n.sizes
                        ? r.attr("src", n.sizes.large.url)
                        : r.attr("src", n.sizes.full.url),
                      t.setFeaturedImage(n);
                  });
                }
              },
            },
            {
              key: "removeImage",
              value: function () {
                var t = this;
                a()("#postimagediv").on(
                  "click",
                  "#remove-post-thumbnail",
                  function () {
                    a()("#rank_math_image_warning").remove(),
                      a()("#rank_math_post_thumbnail").remove(),
                      t.setFeaturedImage("");
                  }
                );
              },
            },
            {
              key: "gutenbergImage",
              value: function () {
                var t,
                  e,
                  r = this;
                wp.data.subscribe(function () {
                  var n = wp.data
                    .select("core/editor")
                    .getEditedPostAttribute("featured_media");
                  r.isValidMediaId(n) &&
                    ((t = wp.data.select("core").getMedia(n)),
                    Object(i.isUndefined)(t) ||
                      (t !== e &&
                        ((e = t),
                        r.setFeaturedImage({
                          url: t.guid.rendered,
                          alt: t.alt_text,
                        }))));
                });
              },
            },
            {
              key: "setFeaturedImage",
              value: function (t) {
                var e = {
                  src: Object(i.get)(t, "url", ""),
                  alt: Object(i.get)(t, "alt", ""),
                };
                Object(c.doAction)("rank_math_updated_featured_image", e);
              },
            },
            {
              key: "sizeWarning",
              value: function (t) {
                if (
                  (a()("#rank_math_image_warning").remove(),
                  !(200 < t.width && 200 < t.height))
                ) {
                  var e = a()("#postimagediv").find(".hndle");
                  a()(
                    '<div id="rank_math_image_warning" class="notice notice-error notice-alt"><p>' +
                      rankMath.featuredImageNotice +
                      "</p></div>"
                  ).insertAfter(e);
                }
              },
            },
            {
              key: "getFeaturedImage",
              value: function () {
                var t = a()("#postimagediv img");
                if (!t || t.length) {
                  var e = { url: t[0].src, alt: t[0].alt };
                  this.setFeaturedImage(e);
                }
              },
            },
            {
              key: "isValidMediaId",
              value: function (t) {
                return "number" == typeof t && 0 < t;
              },
            },
          ]) && lt(e.prototype, r),
          n && lt(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })(),
      dt = r(21),
      ft = r(22),
      ht = r(23);
    function mt(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var gt = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
      }
      var e, r, n;
      return (
        (e = t),
        (r = [
          {
            key: "setup",
            value: function () {
              Object(D.a)(),
                (this.registerSlots = this.registerSlots.bind(this)),
                Object(c.addAction)(
                  "rank_math_loaded",
                  "rank-math",
                  this.registerSlots,
                  0
                ),
                (this.resultManager = new o.ResultManager()),
                (this.assessor = new w(this.getCollector())),
                new O.a(),
                (this.registerComponents = this.registerComponents.bind(this)),
                Object(c.addAction)(
                  "rank_math_loaded",
                  "rank-math",
                  this.registerComponents,
                  11
                );
            },
          },
          {
            key: "registerSlots",
            value: function () {
              (this.RankMathAfterEditor = dt.a),
                (this.RankMathAfterFocusKeyword = ht.a),
                (this.RankMathAdvancedTab = ft.a),
                (this.slots = {
                  AfterEditor: dt.a,
                  AfterFocusKeyword: ht.a,
                  AdvancedTab: ft.a,
                });
            },
          },
          {
            key: "registerComponents",
            value: function () {
              (this.components = {}),
                (this.components.linkSuggestions = new ot.a()),
                (this.components.primaryTerm = new st()),
                (this.components.featuredImage = new pt()),
                rankMathAdmin.variableInserter(!1),
                setTimeout(function () {
                  Object(s.render)(
                    Object(s.createElement)(
                      Object(c.applyFilters)("rank_math_app", {})
                    ),
                    document.getElementById("rank-math-metabox-wrapper")
                  );
                }, 1e3);
            },
          },
          {
            key: "refresh",
            value: function (t) {
              this.assessor.refresh(t);
            },
          },
          {
            key: "updatePermalink",
            value: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              this.assessor.dataCollector.handleSlugChange(t, e),
                Object(u.dispatch)("rank-math").updatePermalink(t);
            },
          },
          {
            key: "updatePermalinkSanitize",
            value: function (t) {
              (t = this.assessor.getResearch("slugify")(t)),
                Object(u.dispatch)("rank-math").updatePermalink(t);
            },
          },
          {
            key: "getPrimaryKeyword",
            value: function () {
              return o.Helpers.removeDiacritics(
                this.assessor.getPrimaryKeyword()
              );
            },
          },
          {
            key: "getSelectedKeyword",
            value: function () {
              var t = this.assessor.getSelectedKeyword();
              return Object(i.isUndefined)(t)
                ? ""
                : o.Helpers.removeDiacritics(t);
            },
          },
          {
            key: "getCollector",
            value: function () {
              return "post" === rankMath.objectType
                ? Object(_.a)()
                  ? new it.a()
                  : new K(this)
                : "term" === rankMath.objectType
                ? new q()
                : "user" === rankMath.objectType
                ? new at()
                : void 0;
            },
          },
        ]),
        r && mt(e.prototype, r),
        n && mt(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    a()(function () {
      (window.rankMathEditor = new gt()),
        window.rankMathEditor.setup(),
        (window.RankMathApp = new T());
    }),
      a()(window).on("load", function () {
        a.a.when(a.a.ready).then(function () {
          Object(c.doAction)("rank_math_loaded");
        });
      });
  },
]);
