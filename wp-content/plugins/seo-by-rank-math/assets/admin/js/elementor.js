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
    r((r.s = 77));
})({
  0: function (t, e) {
    t.exports = wp.i18n;
  },
  1: function (t, e) {
    t.exports = lodash;
  },
  13: function (t, e) {
    t.exports = wp.apiFetch;
  },
  15: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return Tr;
    });
    var n = {};
    r.r(n),
      r.d(n, "updateKeywords", function () {
        return l;
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
        return k;
      }),
      r.d(n, "updateFacebookTitle", function () {
        return w;
      }),
      r.d(n, "updateFacebookDescription", function () {
        return v;
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
        return D;
      }),
      r.d(n, "updateAppData", function () {
        return p;
      }),
      r.d(n, "updateAppUi", function () {
        return s;
      }),
      r.d(n, "updatePostID", function () {
        return T;
      }),
      r.d(n, "updatePermalink", function () {
        return I;
      }),
      r.d(n, "updateTitle", function () {
        return S;
      }),
      r.d(n, "updateDescription", function () {
        return P;
      }),
      r.d(n, "updateFeaturedImage", function () {
        return A;
      }),
      r.d(n, "updatePrimaryTermID", function () {
        return M;
      }),
      r.d(n, "updateRedirection", function () {
        return E;
      }),
      r.d(n, "updateRedirectionItem", function () {
        return U;
      }),
      r.d(n, "resetRedirection", function () {
        return C;
      }),
      r.d(n, "updateHasRedirect", function () {
        return R;
      }),
      r.d(n, "updateSerpTitle", function () {
        return z;
      }),
      r.d(n, "updateSerpSlug", function () {
        return L;
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
        return $;
      }),
      r.d(n, "updateTwitterUseFacebook", function () {
        return q;
      }),
      r.d(n, "updateTwitterCardType", function () {
        return W;
      }),
      r.d(n, "updateTwitterTitle", function () {
        return Q;
      }),
      r.d(n, "updateTwitterDescription", function () {
        return J;
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
        return pt;
      }),
      r.d(n, "updateTwitterAppIpadID", function () {
        return st;
      }),
      r.d(n, "updateTwitterAppIpadName", function () {
        return lt;
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
        return kt;
      }),
      r.d(n, "setVersion", function () {
        return wt;
      }),
      r.d(n, "toggleIsDiviPageSettingsBarActive", function () {
        return vt;
      }),
      r.d(n, "toggleIsDiviRankMathModalActive", function () {
        return _t;
      }),
      r.d(n, "toggleSchemaEditor", function () {
        return Pt;
      }),
      r.d(n, "toggleSchemaTemplates", function () {
        return At;
      }),
      r.d(n, "schemaUpdated", function () {
        return Mt;
      }),
      r.d(n, "setEditingSchemaId", function () {
        return Et;
      }),
      r.d(n, "setEditorTab", function () {
        return Ut;
      }),
      r.d(n, "setTemplateTab", function () {
        return Ct;
      }),
      r.d(n, "updateEditSchemas", function () {
        return Rt;
      }),
      r.d(n, "updateSchemas", function () {
        return Ft;
      }),
      r.d(n, "updateEditSchema", function () {
        return xt;
      }),
      r.d(n, "saveSchema", function () {
        return Kt;
      }),
      r.d(n, "deleteSchema", function () {
        return Ht;
      }),
      r.d(n, "saveTemplate", function () {
        return Nt;
      }),
      r.d(n, "updateKeywordsData", function () {
        return zt;
      }),
      r.d(n, "updateAIScore", function () {
        return Lt;
      });
    var a = {};
    r.r(a),
      r.d(a, "appData", function () {
        return Qt;
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
        return pe;
      }),
      r.d(i, "getRichSnippets", function () {
        return se;
      }),
      r.d(i, "getShowScoreFrontend", function () {
        return le;
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
        return ke;
      }),
      r.d(i, "getFacebookAuthor", function () {
        return we;
      }),
      r.d(i, "getFacebookImageID", function () {
        return ve;
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
        return De;
      }),
      r.d(i, "getTitle", function () {
        return Te;
      }),
      r.d(i, "getPermalink", function () {
        return Ie;
      }),
      r.d(i, "getDescription", function () {
        return Se;
      }),
      r.d(i, "getFeaturedImage", function () {
        return Pe;
      }),
      r.d(i, "getFeaturedImageHtml", function () {
        return Ae;
      }),
      r.d(i, "getPrimaryTermID", function () {
        return Me;
      }),
      r.d(i, "getRedirectionID", function () {
        return Ee;
      }),
      r.d(i, "getRedirectionType", function () {
        return Ue;
      }),
      r.d(i, "getRedirectionUrl", function () {
        return Ce;
      }),
      r.d(i, "getRedirectionItem", function () {
        return Re;
      }),
      r.d(i, "hasRedirect", function () {
        return Fe;
      }),
      r.d(i, "getSerpTitle", function () {
        return Ke;
      }),
      r.d(i, "getSerpSlug", function () {
        return He;
      }),
      r.d(i, "getSerpDescription", function () {
        return Ne;
      }),
      r.d(i, "isSnippetEditorOpen", function () {
        return ze;
      }),
      r.d(i, "getSnippetPreviewType", function () {
        return Le;
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
        return $e;
      }),
      r.d(i, "getSchemas", function () {
        return qe;
      }),
      r.d(i, "getEditSchemas", function () {
        return We;
      }),
      r.d(i, "getEditingSchema", function () {
        return Qe;
      }),
      r.d(i, "getPreviewSchema", function () {
        return Je;
      }),
      r.d(i, "getEditorTab", function () {
        return Xe;
      }),
      r.d(i, "getTemplateTab", function () {
        return Ye;
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
        return pr;
      }),
      r.d(i, "getTwitterAppIphoneName", function () {
        return sr;
      }),
      r.d(i, "getTwitterAppIphoneUrl", function () {
        return lr;
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
        return kr;
      }),
      r.d(i, "getTwitterPlayerSize", function () {
        return wr;
      }),
      r.d(i, "getTwitterPlayerStream", function () {
        return vr;
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
    function p(t, e) {
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
    function s(t, e) {
      return (
        Object(u.doAction)("rank_math_update_app_ui", t, e),
        { type: "RANK_MATH_APP_UI", key: t, value: e }
      );
    }
    function l(t) {
      return (
        c.a.setVariable("focuskw", t.split(",")[0]),
        rankMathEditor.refresh("keyword"),
        p("keywords", t, "rank_math_focus_keyword")
      );
    }
    function d(t) {
      return p(
        "pillarContent",
        t,
        "rank_math_pillar_content",
        !0 === t ? "on" : "off"
      );
    }
    function f(t) {
      return p(
        "showScoreFrontend",
        t,
        "rank_math_dont_show_seo_score",
        !0 === t ? "off" : "on"
      );
    }
    function h(t) {
      return p("score", t, "rank_math_seo_score");
    }
    function m(t) {
      return p("canonicalUrl", t, "rank_math_canonical_url");
    }
    function g(t) {
      return p("advancedRobots", t, "rank_math_advanced_robots");
    }
    function y(t) {
      return p("robots", t, "rank_math_robots", Object.keys(t));
    }
    function b(t) {
      return p("breadcrumbTitle", t, "rank_math_breadcrumb_title");
    }
    function k() {
      return p("dirtyMetadata", {});
    }
    function w(t) {
      return p("facebookTitle", t, "rank_math_facebook_title");
    }
    function v(t) {
      return p("facebookDescription", t, "rank_math_facebook_description");
    }
    function _(t) {
      return p("facebookImage", t, "rank_math_facebook_image");
    }
    function O(t) {
      return p("facebookImageID", t, "rank_math_facebook_image_id");
    }
    function j(t) {
      return p(
        "facebookHasOverlay",
        t,
        "rank_math_facebook_enable_image_overlay",
        !0 === t ? "on" : "off"
      );
    }
    function D(t) {
      return p("facebookImageOverlay", t, "rank_math_facebook_image_overlay");
    }
    function T(t) {
      return (rankMath.objectID = t), p("postID", t);
    }
    function I(t) {
      return p("permalink", t, "permalink");
    }
    function S(t) {
      return p("title", t, "rank_math_title");
    }
    function P(t) {
      return p("description", t, "rank_math_description");
    }
    function A(t) {
      return p("featuredImage", t);
    }
    function M(t, e) {
      return p("primaryTerm", parseInt(t), "rank_math_primary_" + e);
    }
    function E(t, e) {
      return p(t, e);
    }
    function U(t) {
      return s("redirectionItem", t);
    }
    function C() {
      return s("redirectionItem", {});
    }
    function R(t) {
      return s("hasRedirect", t);
    }
    var F = r(7),
      x = r(1),
      K = r(16),
      H = function (t, e) {
        return (
          (t = (t = F.Helpers.cleanText(t)).replace(/\r?\n|\r/g, " ")),
          e ? Object(x.truncate)(t, { length: e, separator: " " }) : t
        );
      },
      N = function (t) {
        var e = rankMathEditor.assessor.dataCollector.getData(),
          r = e.excerpt,
          n = (function (t) {
            if (Object(x.isEmpty)(t)) return "";
            (t = F.Helpers.stripScript(t)),
              (t = F.Helpers.stripStyle(t)),
              (t = Object(x.unescape)(t).replace(
                /\[caption[^\]]*\](.*)\[\/caption\]/g,
                ""
              ));
            var e = Object(x.filter)(
              F.Helpers.matchParagraphs(t, !0, !0),
              function (t) {
                return "" !== t.trim();
              }
            );
            if (!e.length) return "";
            var r = rankMathEditor.getPrimaryKeyword();
            if ("" !== r) {
              var n = Object(x.filter)(e, function (t) {
                return Object(x.includes)(t.toLowerCase(), r.toLowerCase());
              });
              if (0 < n.length) return H(n[0], 160);
            }
            return H(e[0], 160);
          })(e.content),
          a =
            Object(x.isUndefined)(r) || Object(x.isEmpty)(r)
              ? n
              : Object(x.unescape)(r);
        if (
          (c.a.setVariable("excerpt", a),
          c.a.setVariable("seo_description", a),
          "" !==
            (t = Object(K.a)(
              Object(u.applyFilters)("rankMath/description", t)
            )))
        )
          return F.Helpers.cleanText(t);
        if (!Object(x.isUndefined)(r) && !Object(x.isEmpty)(r))
          return F.Helpers.cleanText(r);
        var i = Object(x.unescape)(
          rankMath.assessor.serpData.descriptionTemplate
        );
        return Object(x.isUndefined)(i) || "" === i
          ? n
          : F.Helpers.cleanText(i);
      };
    function z(t) {
      return (
        (t = c.a.swap("" !== t ? t : rankMath.assessor.serpData.titleTemplate)),
        rankMathEditor.refresh("title"),
        s("serpTitle", t)
      );
    }
    function L(t) {
      return (
        (t = "" !== t ? t : rankMathEditor.assessor.dataCollector.getSlug()),
        rankMathEditor.refresh("permalink"),
        s("serpSlug", t)
      );
    }
    function G(t) {
      return (
        (t = c.a.swap(N(t))),
        rankMathEditor.refresh("description"),
        s("serpDescription", t)
      );
    }
    function B(t) {
      return s("isSnippetEditorOpen", t);
    }
    function V(t) {
      return s("snippetPreviewType", t);
    }
    function $(t) {
      return s("isTrendsCtaOpen", t);
    }
    function q(t) {
      return p(
        "twitterUseFacebook",
        t,
        "rank_math_twitter_use_facebook",
        !0 === t ? "on" : "off"
      );
    }
    function W(t) {
      return p("twitterCardType", t, "rank_math_twitter_card_type");
    }
    function Q(t) {
      return p("twitterTitle", t, "rank_math_twitter_title");
    }
    function J(t) {
      return p("twitterDescription", t, "rank_math_twitter_description");
    }
    function X(t) {
      return p("twitterAuthor", t, "rank_math_twitter_author");
    }
    function Y(t) {
      return p("twitterImageID", t, "rank_math_twitter_image_id");
    }
    function Z(t) {
      return p("twitterImage", t, "rank_math_twitter_image");
    }
    function tt(t) {
      return p(
        "twitterHasOverlay",
        t,
        "rank_math_twitter_enable_image_overlay",
        !0 === t ? "on" : "off"
      );
    }
    function et(t) {
      return p("twitterImageOverlay", t, "rank_math_twitter_image_overlay");
    }
    function rt(t) {
      return p("twitterPlayerUrl", t, "rank_math_twitter_player_url");
    }
    function nt(t) {
      return p("twitterPlayerSize", t, "rank_math_twitter_player_size");
    }
    function at(t) {
      return p("twitterPlayerStream", t, "rank_math_twitter_player_stream");
    }
    function it(t) {
      return p(
        "twitterPlayerStreamCtype",
        t,
        "rank_math_twitter_player_stream_ctype"
      );
    }
    function ot(t) {
      return p("twitterAppDescription", t, "rank_math_twitter_app_description");
    }
    function ct(t) {
      return p("twitterAppIphoneID", t, "rank_math_twitter_app_iphone_id");
    }
    function ut(t) {
      return p("twitterAppIphoneName", t, "rank_math_twitter_app_iphone_name");
    }
    function pt(t) {
      return p("twitterAppIphoneUrl", t, "rank_math_twitter_app_iphone_url");
    }
    function st(t) {
      return p("twitterAppIpadID", t, "rank_math_twitter_app_ipad_id");
    }
    function lt(t) {
      return p("twitterAppIpadName", t, "rank_math_twitter_app_ipad_name");
    }
    function dt(t) {
      return p("twitterAppIpadUrl", t, "rank_math_twitter_app_ipad_url");
    }
    function ft(t) {
      return p(
        "twitterAppGoogleplayID",
        t,
        "rank_math_twitter_app_googleplay_id"
      );
    }
    function ht(t) {
      return p(
        "twitterAppGoogleplayName",
        t,
        "rank_math_twitter_app_googleplay_name"
      );
    }
    function mt(t) {
      return p(
        "twitterAppGoogleplayUrl",
        t,
        "rank_math_twitter_app_googleplay_url"
      );
    }
    function gt(t) {
      return p("twitterAppCountry", t, "rank_math_twitter_app_country");
    }
    function yt(t) {
      return s("isLoaded", t);
    }
    function bt(t) {
      return s("selectedKeyword", t);
    }
    function kt() {
      return s("refreshResults", Date.now());
    }
    function wt() {
      return s("isPro", !0);
    }
    function vt(t) {
      return s("isDiviPageSettingsBarActive", t);
    }
    function _t(t) {
      return s("isDiviRankMathModalActive", t);
    }
    var Ot = r(0),
      jt = r(13),
      Dt = r.n(jt);
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
    function It(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Tt(Object(r), !0).forEach(function (e) {
              St(t, e, r[e]);
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
    function St(t, e, r) {
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
      return s("isSchemaEditorOpen", t);
    }
    function At(t) {
      return s("isSchemaTemplatesOpen", t);
    }
    function Mt(t) {
      return s("schemaUpdated", t);
    }
    function Et(t) {
      return s("editingSchemaId", t);
    }
    function Ut(t) {
      return s("editorTab", t);
    }
    function Ct(t) {
      return s("templateTab", t);
    }
    function Rt(t) {
      return s("editSchemas", t);
    }
    function Ft(t) {
      return p("schemas", t);
    }
    function xt(t, e) {
      var r = It({}, Object(o.select)("rank-math").getEditSchemas());
      return (r[t] = e), s("editSchemas", r);
    }
    function Kt(t, e) {
      var r = It({}, Object(o.select)("rank-math").getSchemas());
      return (r[t] = e), p("schemas", r);
    }
    function Ht(t) {
      var e = It({}, Object(o.select)("rank-math").getSchemas());
      return (
        delete e[t],
        Object(u.doAction)("rank_math_schema_trash", t),
        p("schemas", e, "rank_math_delete_" + t, "")
      );
    }
    function Nt(t, e, r) {
      return (
        Dt()({
          method: "POST",
          path: "rankmath/v1/saveTemplate",
          data: { schema: t, postId: r },
        }).then(function (r) {
          e({ loading: !1, showNotice: !0, postId: r.id }),
            setTimeout(function () {
              e({ showNotice: !1 }),
                Object(x.get)(rankMath, "isTemplateScreen", !1) &&
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
    function zt(t) {
      return s("keywordsData", t);
    }
    function Lt(t) {
      return p("contentAIScore", t, "rank_math_contentai_score");
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
    var $t = rankMath.assessor.serpData,
      qt = rankMath.assessor.hasRedirection,
      Wt = {
        postID: null,
        title: $t.title ? $t.title : $t.titleTemplate,
        description: $t.description,
        keywords: $t.focusKeywords,
        pillarContent: $t.pillarContent,
        featuredImage: "",
        permalink: !1,
        primaryTerm: $t.primaryTerm,
        robots: $t.robots,
        advancedRobots: $t.advancedRobots,
        canonicalUrl: $t.canonicalUrl,
        breadcrumbTitle: $t.breadcrumbTitle,
        showScoreFrontend: $t.showScoreFrontend,
        redirectionID: qt
          ? Object(x.get)(rankMath.assessor, "redirection.id", "")
          : "",
        redirectionType: qt
          ? Object(x.get)(rankMath.assessor, "redirection.header_code", "")
          : "",
        redirectionUrl: qt
          ? Object(x.get)(rankMath.assessor, "redirection.url_to", "")
          : "",
        facebookTitle: $t.facebookTitle,
        facebookImage: $t.facebookImage,
        facebookImageID: $t.facebookImageID,
        facebookAuthor: $t.facebookAuthor,
        facebookDescription: $t.facebookDescription,
        facebookHasOverlay: $t.facebookHasOverlay,
        facebookImageOverlay: $t.facebookImageOverlay,
        twitterTitle: $t.twitterTitle,
        twitterImage: $t.twitterImage,
        twitterAuthor: $t.twitterAuthor,
        twitterImageID: $t.twitterImageID,
        twitterCardType: $t.twitterCardType,
        twitterUseFacebook: $t.twitterUseFacebook,
        twitterDescription: $t.twitterDescription,
        twitterHasOverlay: $t.twitterHasOverlay,
        twitterImageOverlay: $t.twitterImageOverlay,
        twitterPlayerUrl: $t.twitterPlayerUrl,
        twitterPlayerSize: $t.twitterPlayerSize,
        twitterPlayerStream: $t.twitterPlayerStream,
        twitterPlayerStreamCtype: $t.twitterPlayerStreamCtype,
        twitterAppDescription: $t.twitterAppDescription,
        twitterAppIphoneName: $t.twitterAppIphoneName,
        twitterAppIphoneID: $t.twitterAppIphoneID,
        twitterAppIphoneUrl: $t.twitterAppIphoneUrl,
        twitterAppIpadName: $t.twitterAppIpadName,
        twitterAppIpadID: $t.twitterAppIpadID,
        twitterAppIpadUrl: $t.twitterAppIpadUrl,
        twitterAppGoogleplayName: $t.twitterAppGoogleplayName,
        twitterAppGoogleplayID: $t.twitterAppGoogleplayID,
        twitterAppGoogleplayUrl: $t.twitterAppGoogleplayUrl,
        twitterAppCountry: $t.twitterAppCountry,
        schemas: Object(x.get)(rankMath, "schemas", {}),
        score: 0,
        contentAIScore: {},
        dirtyMetadata: {},
      };
    function Qt() {
      var t,
        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wt,
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
    function Jt(t, e) {
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
    function Xt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Jt(Object(r), !0).forEach(function (e) {
              Yt(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Jt(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function Yt(t, e, r) {
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
        !Object(x.isEmpty)(
          Object(x.get)(rankMath.assessor, "redirection.id", "")
        ) &&
        !Object(x.isEmpty)(
          Object(x.get)(rankMath.assessor, "redirection.url_to", "")
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
      keywordsData: Object(x.get)(rankMath, "ca_data", []),
    };
    function te() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zt,
        e = arguments.length > 1 ? arguments[1] : void 0;
      return "RANK_MATH_APP_UI" === e.type
        ? Xt(Xt({}, t), {}, Yt({}, e.key, e.value))
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
    function pe(t) {
      return t.appData.breadcrumbTitle;
    }
    function se(t) {
      return "todo";
    }
    function le(t) {
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
    function ke(t) {
      return t.appData.facebookDescription;
    }
    function we(t) {
      return t.appData.facebookAuthor;
    }
    function ve(t) {
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
    function De(t) {
      return t.appData.postID;
    }
    function Te(t) {
      return t.appData.title;
    }
    function Ie(t) {
      return t.appData.permalink;
    }
    function Se(t) {
      return t.appData.description;
    }
    function Pe(t) {
      return t.appData.featuredImage;
    }
    function Ae(t) {
      var e = t.appData.featuredImage;
      return '<img src="'
        .concat(e.source_url, '" alt="')
        .concat(e.alt_text, '" >');
    }
    function Me(t) {
      return t.appData.primaryTerm;
    }
    function Ee(t) {
      return t.appData.redirectionID;
    }
    function Ue(t) {
      return t.appData.redirectionType;
    }
    function Ce(t) {
      return t.appData.redirectionUrl;
    }
    function Re(t) {
      return t.appUi.redirectionItem;
    }
    function Fe(t) {
      return t.appUi.hasRedirect;
    }
    var xe = r(9);
    function Ke(t) {
      return Object(K.a)(t.appUi.serpTitle);
    }
    function He(t) {
      return Object(xe.safeDecodeURIComponent)(t.appUi.serpSlug);
    }
    function Ne(t) {
      return t.appUi.serpDescription;
    }
    function ze(t) {
      return t.appUi.isSnippetEditorOpen;
    }
    function Le(t) {
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
    function $e(t) {
      return t.appUi.schemaUpdated;
    }
    function qe(t) {
      return t.appData.schemas;
    }
    function We(t) {
      return t.appUi.editSchemas;
    }
    function Qe(t) {
      return {
        id: t.appUi.editingSchemaId,
        data: t.appUi.editSchemas[t.appUi.editingSchemaId],
      };
    }
    function Je(t) {
      return t.appData.schemas[t.appUi.editingSchemaId];
    }
    function Xe(t) {
      return t.appUi.editorTab;
    }
    function Ye(t) {
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
    function pr(t) {
      return t.appData.twitterAppIphoneID;
    }
    function sr(t) {
      return t.appData.twitterAppIphoneName;
    }
    function lr(t) {
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
    function kr(t) {
      return t.appData.twitterPlayerUrl;
    }
    function wr(t) {
      return t.appData.twitterPlayerSize;
    }
    function vr(t) {
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
    var Dr = Object(o.registerStore)("rank-math", {
      reducer: Object(o.combineReducers)(a),
      selectors: i,
      actions: n,
    });
    function Tr() {
      return Dr;
    }
  },
  16: function (t, e, r) {
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
  2: function (t, e) {
    t.exports = wp.data;
  },
  21: function (t, e, r) {
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
  22: function (t, e, r) {
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
  23: function (t, e, r) {
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
  25: function (t, e, r) {
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
  26: function (t, e, r) {
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
  3: function (t, e) {
    t.exports = jQuery;
  },
  31: function (t, e) {
    t.exports = wp.mediaUtils;
  },
  34: function (t, e, r) {
    "use strict";
    var n = r(7),
      a = r(6),
      i = r(15),
      o = r(1),
      c = r(0),
      u = r(2),
      p = r(25);
    function s(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var l = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.analyzer = new n.Analyzer({
              i18n: c,
              analyses: rankMath.assessor.researchesTests,
            })),
            (this.dataCollector = e),
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
        var e, r, l;
        return (
          (e = t),
          (r = [
            {
              key: "updateKeywordResult",
              value: function (t, e) {
                rankMathEditor.resultManager.update(t, { keywordNotUsed: e }),
                  t === this.getSelectedKeyword().toLowerCase() &&
                    Object(u.dispatch)("rank-math").refreshResults();
              },
            },
            {
              key: "sanitizeData",
              value: function (t, e) {
                return "schemas" === e ||
                  Object(o.isObject)(t) ||
                  Object(o.isEmpty)(t)
                  ? t
                  : n.Helpers.sanitizeAppData(t);
              },
            },
            {
              key: "getPaper",
              value: function (t, e) {
                var r = Object(i.a)().getState(),
                  c = this.dataCollector.getData(),
                  u = new n.Paper("", { locale: rankMath.localeFull });
                return (
                  u.setTitle(r.appUi.serpTitle),
                  u.setPermalink(c.slug),
                  u.setDescription(r.appUi.serpDescription),
                  u.setUrl(c.permalink),
                  u.setText(
                    Object(p.a)(
                      Object(a.applyFilters)("rank_math_content", c.content)
                    )
                  ),
                  u.setKeyword(t),
                  u.setKeywords(e),
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
                var t = this;
                this.refresh = Object(o.debounce)(function (e) {
                  var r = Object(i.a)().getState();
                  if (!1 !== r.appUi.isLoaded) {
                    var o = r.appData.keywords.split(","),
                      c = [];
                    Object(a.doAction)("rank_math_" + e + "_refresh"),
                      o.map(function (e, r) {
                        var a = t.getPaper(n.Helpers.removeDiacritics(e), o),
                          i =
                            0 === r
                              ? rankMath.assessor.researchesTests
                              : t.filterTests(t.getSecondaryKeywordTests());
                        c.push(
                          t.analyzer.analyzeSome(i, a).then(function (t) {
                            rankMathEditor.resultManager.update(
                              a.getKeyword(),
                              t,
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
                var t = Object(i.a)().getState().appData.keywords;
                return n.Helpers.removeDiacritics(t.split(",")[0]);
              },
            },
            {
              key: "getSelectedKeyword",
              value: function () {
                var t = Object(i.a)().getState(),
                  e =
                    "" !== t.appUi.selectedKeyword.data.value
                      ? t.appUi.selectedKeyword.data.value
                      : t.appData.keywords.split(",")[0];
                return n.Helpers.removeDiacritics(e);
              },
            },
            {
              key: "getResearch",
              value: function (t) {
                return this.analyzer.researcher.getResearch(t);
              },
            },
            {
              key: "filterTests",
              value: function (t) {
                return Object(o.intersection)(
                  t,
                  rankMath.assessor.researchesTests
                );
              },
            },
          ]) && s(e.prototype, r),
          l && s(e, l),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })(),
      d = r(26);
    function f(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var h = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
      }
      var e, r, o;
      return (
        (e = t),
        (r = [
          {
            key: "setup",
            value: function (t) {
              Object(i.a)(),
                (this.resultManager = new n.ResultManager()),
                (this.assessor = new l(t)),
                new d.a(),
                Object(a.doAction)("rank_math_loaded");
            },
          },
          {
            key: "refresh",
            value: function (t) {
              this.assessor.refresh(t);
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
            value: function (t) {
              throw "Implement the function";
            },
          },
          {
            key: "updatePermalinkSanitize",
            value: function (t) {
              throw "Implement the function";
            },
          },
        ]) && f(e.prototype, r),
        o && f(e, o),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    e.a = h;
  },
  4: function (t, e) {
    t.exports = wp.components;
  },
  43: function (t, e) {
    t.exports = Marionette;
  },
  5: function (t, e) {
    t.exports = wp.element;
  },
  6: function (t, e) {
    t.exports = wp.hooks;
  },
  7: function (t, e) {
    t.exports = rankMathAnalyzer;
  },
  77: function (t, e, r) {
    "use strict";
    r.r(e);
    var n = r(3),
      a = r.n(n),
      i = r(2),
      o = r(31),
      c = r(6),
      u = r(34),
      p = r(1),
      s = r(13),
      l = r.n(s),
      d = r(9),
      f = r(8);
    function h(t, e) {
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
    function m(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? h(Object(r), !0).forEach(function (e) {
              g(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : h(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function g(t, e, r) {
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
    function y(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var b = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.initialize = !1),
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
            (this.savePost = this.savePost.bind(this)),
            (this.saveRedirection = this.saveRedirection.bind(this)),
            (this.saveSchemas = this.saveSchemas.bind(this)),
            this.subscribeToElementor(),
            setTimeout(this.elementorPreviewLoaded.bind(this), 5e3);
        }
        var e, r, n;
        return (
          (e = t),
          (r = [
            {
              key: "elementorPreviewLoaded",
              value: function () {
                var t = this;
                Object(c.addAction)(
                  "rank_math_data_changed",
                  "rank-math",
                  function () {
                    t.activateSaveButton();
                  }
                ),
                  Object(c.addAction)(
                    "rank_math_update_app_ui",
                    "rank-math",
                    function (e) {
                      "hasRedirect" === e && t.activateSaveButton();
                    }
                  );
              },
            },
            {
              key: "activateSaveButton",
              value: function () {
                var t = Object(p.get)(elementor, "saver.footerSaver", !1);
                !1 === t
                  ? elementor.channels.editor.trigger("status:change", !0)
                  : t.activateSaveButtons(document, !0);
              },
            },
            {
              key: "collectGutenbergData",
              value: function () {
                return {
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
                return elementor.config.document.id;
              },
            },
            {
              key: "getTitle",
              value: function () {
                return elementor.settings.page.model.get("post_title");
              },
            },
            {
              key: "getContent",
              value: function () {
                var t = this,
                  e = [];
                return (
                  this.getContentArea()
                    .find(".elementor-widget-container")
                    .each(function (r, n) {
                      e.push(t.decodeEntities(a()(n).html()));
                    }),
                  e.join("")
                );
              },
            },
            {
              key: "decodeEntities",
              value: function (t) {
                return t ? (t = t.replace("–", "-")) : "";
              },
            },
            {
              key: "getContentArea",
              value: function () {
                if (this._contentArea) return this._contentArea;
                var t = elementor.$preview
                  .contents()
                  .find(
                    '[data-elementor-type="' +
                      ElementorConfig.document.type +
                      '"]'
                  );
                return t.length < 1
                  ? a()("<div />")
                  : ((this._contentArea = t), t);
              },
            },
            {
              key: "getExcerpt",
              value: function () {
                return elementor.settings.page.model.get("post_excerpt");
              },
            },
            {
              key: "getPermalink",
              value: function () {
                return rankMath.is_front_page
                  ? rankMath.homeUrl + "/"
                  : this.getSlug()
                  ? rankMath.permalinkFormat
                      .replace(/%(postname|pagename)%/, this.getSlug())
                      .trimRight("/")
                  : "";
              },
            },
            {
              key: "getSlug",
              value: function () {
                return Object(d.safeDecodeURIComponent)(
                  Object(i.select)("rank-math").getPermalink()
                );
              },
            },
            {
              key: "getFeaturedImage",
              value: function () {
                var t = elementor.settings.page.model.get(
                  "post_featured_image"
                );
                if (
                  !Object(p.isUndefined)(t) &&
                  ((t = "" === t.id ? 0 : parseInt(t.id)),
                  this.isValidMediaId(t))
                ) {
                  var e = Object(i.select)("core").getMedia(t);
                  if (!Object(p.isUndefined)(e)) return e;
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
              key: "subscribeToElementor",
              value: function () {
                Object(i.dispatch)("rank-math").updatePermalink(
                  rankMath.postName
                ),
                  (this.subscriber = Object(p.debounce)(this.refresh, 500)),
                  Object(i.subscribe)(this.subscriber),
                  elementor.saver.on("before:save", this.savePost),
                  elementor.saver.on("before:save", this.saveRedirection),
                  elementor.saver.on("before:save", this.saveSchemas),
                  elementor.settings.page.model.on("change", this.subscriber);
              },
            },
            {
              key: "refresh",
              value: function () {
                var t = m({}, this._data);
                (this._data = this.collectGutenbergData()),
                  this.handleEditorChange(t),
                  !Object(p.isEqual)(t, this._data) &&
                    t.id &&
                    elementor.channels.editor.trigger("status:change", !0);
              },
            },
            {
              key: "savePost",
              value: function () {
                var t = Object(i.select)("rank-math").getDirtyMetadata();
                Object(p.isEmpty)(t) ||
                  (l()({
                    method: "POST",
                    path: "rankmath/v1/updateMeta",
                    data: {
                      objectID: rankMath.objectID,
                      objectType: rankMath.objectType,
                      meta: t,
                      content: this.getContent(),
                    },
                  }).then(function (t) {
                    Object(p.isString)(t.slug) &&
                      Object(i.dispatch)("rank-math").updatePermalink(t.slug),
                      Object(c.doAction)("rank_math_metadata_updated", t);
                  }),
                  Object(i.dispatch)("rank-math").resetDirtyMetadata());
              },
            },
            {
              key: "saveRedirection",
              value: function () {
                var t = Object(i.select)("rank-math").getRedirectionItem();
                Object(p.isEmpty)(t) ||
                  ((t.objectID = this.getPostID()),
                  (t.redirectionSources = this.getPermalink()),
                  l()({
                    method: "POST",
                    path: "rankmath/v1/updateRedirection",
                    data: t,
                  }).then(function (t) {
                    "delete" === t.action
                      ? Object(i.dispatch)("rank-math").updateRedirection(
                          "redirectionID",
                          0
                        )
                      : "new" === t.action &&
                        Object(i.dispatch)("rank-math").updateRedirection(
                          "redirectionID",
                          t.id
                        );
                  }),
                  Object(i.dispatch)("rank-math").resetRedirection());
              },
            },
            {
              key: "saveSchemas",
              value: function () {
                var t = Object(i.select)("rank-math").getSchemas();
                if (
                  !Object(p.isEmpty)(t) &&
                  Object(i.select)("rank-math").hasSchemaUpdated()
                ) {
                  var e = Object(i.select)("rank-math").getEditSchemas();
                  l()({
                    method: "POST",
                    path: "rankmath/v1/updateSchemas",
                    data: {
                      objectID: rankMath.objectID,
                      objectType: rankMath.objectType,
                      schemas: t,
                    },
                  }).then(function (r) {
                    if (Object(p.isEmpty)(r))
                      Object(i.dispatch)("rank-math").updateSchemas(t);
                    else {
                      var n = m({}, t),
                        a = m({}, e);
                      Object(p.map)(r, function (t, e) {
                        (n["schema-" + t] = m({}, n[e])),
                          (a["schema-" + t] = m({}, a[e])),
                          delete n[e],
                          delete a[e];
                      }),
                        Object(i.dispatch)("rank-math").schemaUpdated(!1),
                        Object(i.dispatch)("rank-math").updateSchemas(n),
                        Object(i.dispatch)("rank-math").updateEditSchemas(a);
                    }
                  });
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
                if (Object(p.isInteger)(t.id))
                  return this.initialize
                    ? void Object(p.forEach)(r, function (r, n) {
                        e._data[n] !== t[n] && e[r](e._data[n]);
                      })
                    : ((this.initialize = !0),
                      Object(p.forEach)(r, function (t, r) {
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
                rankMathEditor.refresh("permalink");
              },
            },
            {
              key: "handleTitleChange",
              value: function (t) {
                f.a.setVariable("title", t),
                  Object(i.dispatch)("rank-math").updateSerpTitle(
                    Object(i.select)("rank-math").getTitle()
                  ),
                  rankMathEditor.refresh("title");
              },
            },
            {
              key: "handleExcerptChange",
              value: function (t) {
                f.a.setVariable("excerpt", t),
                  f.a.setVariable("excerpt_only", t),
                  f.a.setVariable("wc_shortdesc", t),
                  f.a.setVariable("seo_description", t),
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
          ]) && y(e.prototype, r),
          n && y(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })(),
      k = r(43),
      w = r.n(k),
      v = r(5),
      _ = w.a.ItemView.extend({
        template: !1,
        id: "elementor-panel-rank-math",
        className: "rank-math-elementor rank-math-sidebar-panel",
        initialize: function () {
          a()("#elementor-panel-elements-search-area").hide();
        },
        onShow: function () {
          Object(v.render)(
            Object(v.createElement)(
              Object(c.applyFilters)("rank_math_app", {})
            ),
            document.getElementById("elementor-panel-rank-math")
          );
        },
        onDestroy: function () {
          a()("#elementor-panel-elements-search-area").show();
        },
      }),
      O = function (t) {
        return (
          (t["rank-math"] = { region: t.global.region, view: _, options: {} }),
          t
        );
      };
    function j(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var D = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.links = {}),
            (this.onThemeChange = this.onThemeChange.bind(this)),
            elementor.settings.editorPreferences.model.on(
              "change",
              this.onThemeChange
            );
        }
        var e, r, n;
        return (
          (e = t),
          (r = [
            {
              key: "onThemeChange",
              value: function (t) {
                var e = this,
                  r = Object(p.get)(t, "changed.ui_theme", !1);
                !1 !== r &&
                  Object(p.forEach)(
                    rankMath.elementorDarkMode,
                    function (t, n) {
                      var a = e.getLink(n + "-css", t);
                      "light" !== r
                        ? a
                            .attr(
                              "media",
                              "auto" === r ? "(prefers-color-scheme: dark)" : ""
                            )
                            .appendTo(elementorCommon.elements.$body)
                        : a.remove();
                    }
                  );
              },
            },
            {
              key: "getLink",
              value: function (t, e) {
                return this.links[t] || this.createLink(t, e), this.links[t];
              },
            },
            {
              key: "createLink",
              value: function (t, e) {
                (this.links[t] = a()("#" + t).length ? a()("#" + t) : null),
                  this.links[t] ||
                    (this.links[t] = a()("<link>", {
                      id: t,
                      rel: "stylesheet",
                      href: e,
                    }));
              },
            },
          ]) && j(e.prototype, r),
          n && j(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })(),
      T = r(21),
      I = r(22),
      S = r(23);
    function P(t) {
      return (
        (P =
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
        P(t)
      );
    }
    function A(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function M(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function E() {
      return (
        (E =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, r) {
                var n = U(t, e);
                if (n) {
                  var a = Object.getOwnPropertyDescriptor(n, e);
                  return a.get
                    ? a.get.call(arguments.length < 3 ? t : r)
                    : a.value;
                }
              }),
        E.apply(this, arguments)
      );
    }
    function U(t, e) {
      for (
        ;
        !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = x(t));

      );
      return t;
    }
    function C(t, e) {
      return (
        (C = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        C(t, e)
      );
    }
    function R(t) {
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
          n = x(t);
        if (e) {
          var a = x(this).constructor;
          r = Reflect.construct(n, arguments, a);
        } else r = n.apply(this, arguments);
        return F(this, r);
      };
    }
    function F(t, e) {
      if (e && ("object" === P(e) || "function" == typeof e)) return e;
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
    function x(t) {
      return (
        (x = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        x(t)
      );
    }
    var K = function () {
        return o.MediaUpload;
      },
      H = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && C(t, e);
        })(o, t);
        var e,
          r,
          n,
          a = R(o);
        function o() {
          return A(this, o), a.apply(this, arguments);
        }
        return (
          (e = o),
          (r = [
            {
              key: "setup",
              value: function (t) {
                (this.registerSlots = this.registerSlots.bind(this)),
                  Object(c.addAction)(
                    "rank_math_loaded",
                    "rank-math",
                    this.registerSlots,
                    0
                  ),
                  Object(c.addFilter)(
                    "editor.MediaUpload",
                    "rank-math/replace-media-upload",
                    K
                  ),
                  E(x(o.prototype), "setup", this).call(this, t);
              },
            },
            {
              key: "registerSlots",
              value: function () {
                (this.RankMathAfterEditor = T.a),
                  (this.RankMathAfterFocusKeyword = S.a),
                  (this.RankMathAdvancedTab = I.a),
                  (this.slots = {
                    AfterEditor: T.a,
                    AfterFocusKeyword: S.a,
                    AdvancedTab: I.a,
                  });
              },
            },
            {
              key: "updatePermalink",
              value: function (t) {
                Object(i.dispatch)("rank-math").updatePermalink(t);
              },
            },
            {
              key: "updatePermalinkSanitize",
              value: function (t) {
                (t = this.assessor.getResearch("slugify")(t)),
                  Object(i.dispatch)("rank-math").updatePermalink(t);
              },
            },
          ]) && M(e.prototype, r),
          n && M(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          o
        );
      })(u.a);
    a()(function () {
      (window.rankMathEditor = new H()),
        (window.rankMathGutenberg = window.rankMathEditor),
        new D(),
        elementor.once("preview:loaded", function () {
          $e.components
            .get("panel/elements")
            .addTab("rank-math", { title: "SEO" }),
            window.rankMathEditor.setup(new b()),
            Object(i.dispatch)("rank-math").refreshResults();
        });
    }),
      a()(window).on("elementor:init", function () {
        elementor.hooks.addFilter("panel/elements/regionViews", O);
      });
  },
  8: function (t, e, r) {
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
  9: function (t, e) {
    t.exports = wp.url;
  },
});
