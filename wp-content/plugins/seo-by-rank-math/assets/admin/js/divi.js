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
    r((r.s = 66));
})({
  0: function (t, e) {
    t.exports = lodash;
  },
  1: function (t, e) {
    t.exports = wp.data;
  },
  13: function (t, e) {
    t.exports = wp.url;
  },
  2: function (t, e) {
    t.exports = jQuery;
  },
  21: function (t, e) {
    t.exports = wp.mediaUtils;
  },
  3: function (t, e) {
    t.exports = wp.hooks;
  },
  4: function (t, e) {
    t.exports = rankMathAnalyzer;
  },
  5: function (t, e) {
    t.exports = wp.i18n;
  },
  6: function (t, e) {
    t.exports = wp.apiFetch;
  },
  66: function (t, e, r) {
    "use strict";
    r.r(e);
    var n = {};
    r.r(n),
      r.d(n, "updateKeywords", function () {
        return R;
      }),
      r.d(n, "updatePillarContent", function () {
        return B;
      }),
      r.d(n, "toggleFrontendScore", function () {
        return U;
      }),
      r.d(n, "updateAnalysisScore", function () {
        return F;
      }),
      r.d(n, "updateCanonicalUrl", function () {
        return L;
      }),
      r.d(n, "updateAdvancedRobots", function () {
        return N;
      }),
      r.d(n, "updateRobots", function () {
        return $;
      }),
      r.d(n, "updateBreadcrumbTitle", function () {
        return H;
      }),
      r.d(n, "resetDirtyMetadata", function () {
        return K;
      }),
      r.d(n, "updateFacebookTitle", function () {
        return G;
      }),
      r.d(n, "updateFacebookDescription", function () {
        return z;
      }),
      r.d(n, "updateFacebookImage", function () {
        return V;
      }),
      r.d(n, "updateFacebookImageID", function () {
        return q;
      }),
      r.d(n, "updateFacebookHasOverlay", function () {
        return Q;
      }),
      r.d(n, "updateFacebookImageOverlay", function () {
        return W;
      }),
      r.d(n, "updateAppData", function () {
        return M;
      }),
      r.d(n, "updateAppUi", function () {
        return C;
      }),
      r.d(n, "updatePostID", function () {
        return Y;
      }),
      r.d(n, "updatePermalink", function () {
        return J;
      }),
      r.d(n, "updateTitle", function () {
        return X;
      }),
      r.d(n, "updateDescription", function () {
        return Z;
      }),
      r.d(n, "updateFeaturedImage", function () {
        return tt;
      }),
      r.d(n, "updatePrimaryTermID", function () {
        return et;
      }),
      r.d(n, "updateRedirection", function () {
        return rt;
      }),
      r.d(n, "updateRedirectionItem", function () {
        return nt;
      }),
      r.d(n, "resetRedirection", function () {
        return at;
      }),
      r.d(n, "updateHasRedirect", function () {
        return it;
      }),
      r.d(n, "updateSerpTitle", function () {
        return pt;
      }),
      r.d(n, "updateSerpSlug", function () {
        return dt;
      }),
      r.d(n, "updateSerpDescription", function () {
        return ft;
      }),
      r.d(n, "toggleSnippetEditor", function () {
        return ht;
      }),
      r.d(n, "updateSnippetPreviewType", function () {
        return mt;
      }),
      r.d(n, "toggleTrendsCta", function () {
        return gt;
      }),
      r.d(n, "updateTwitterUseFacebook", function () {
        return yt;
      }),
      r.d(n, "updateTwitterCardType", function () {
        return bt;
      }),
      r.d(n, "updateTwitterTitle", function () {
        return vt;
      }),
      r.d(n, "updateTwitterDescription", function () {
        return wt;
      }),
      r.d(n, "updateTwitterAuthor", function () {
        return kt;
      }),
      r.d(n, "updateTwitterImageID", function () {
        return _t;
      }),
      r.d(n, "updateTwitterImage", function () {
        return Ot;
      }),
      r.d(n, "updateTwitterHasOverlay", function () {
        return St;
      }),
      r.d(n, "updateTwitterImageOverlay", function () {
        return jt;
      }),
      r.d(n, "updateTwitterPlayerUrl", function () {
        return Tt;
      }),
      r.d(n, "updateTwitterPlayerSize", function () {
        return Dt;
      }),
      r.d(n, "updateTwitterPlayerStreamUrl", function () {
        return It;
      }),
      r.d(n, "updateTwitterPlayerStreamCtype", function () {
        return Pt;
      }),
      r.d(n, "updateTwitterAppDescription", function () {
        return Et;
      }),
      r.d(n, "updateTwitterAppIphoneID", function () {
        return At;
      }),
      r.d(n, "updateTwitterAppIphoneName", function () {
        return xt;
      }),
      r.d(n, "updateTwitterAppIphoneUrl", function () {
        return Mt;
      }),
      r.d(n, "updateTwitterAppIpadID", function () {
        return Ct;
      }),
      r.d(n, "updateTwitterAppIpadName", function () {
        return Rt;
      }),
      r.d(n, "updateTwitterAppIpadUrl", function () {
        return Bt;
      }),
      r.d(n, "updateTwitterAppGoogleplayID", function () {
        return Ut;
      }),
      r.d(n, "updateTwitterAppGoogleplayName", function () {
        return Ft;
      }),
      r.d(n, "updateTwitterAppGoogleplayUrl", function () {
        return Lt;
      }),
      r.d(n, "updateTwitterAppCountry", function () {
        return Nt;
      }),
      r.d(n, "toggleLoaded", function () {
        return $t;
      }),
      r.d(n, "updateSelectedKeyword", function () {
        return Ht;
      }),
      r.d(n, "refreshResults", function () {
        return Kt;
      }),
      r.d(n, "setVersion", function () {
        return Gt;
      }),
      r.d(n, "toggleIsDiviPageSettingsBarActive", function () {
        return zt;
      }),
      r.d(n, "toggleIsDiviRankMathModalActive", function () {
        return Vt;
      }),
      r.d(n, "toggleSchemaEditor", function () {
        return Jt;
      }),
      r.d(n, "toggleSchemaTemplates", function () {
        return Xt;
      }),
      r.d(n, "schemaUpdated", function () {
        return Zt;
      }),
      r.d(n, "setEditingSchemaId", function () {
        return te;
      }),
      r.d(n, "setEditorTab", function () {
        return ee;
      }),
      r.d(n, "setTemplateTab", function () {
        return re;
      }),
      r.d(n, "updateEditSchemas", function () {
        return ne;
      }),
      r.d(n, "updateSchemas", function () {
        return ae;
      }),
      r.d(n, "updateEditSchema", function () {
        return ie;
      }),
      r.d(n, "saveSchema", function () {
        return oe;
      }),
      r.d(n, "deleteSchema", function () {
        return ce;
      }),
      r.d(n, "saveTemplate", function () {
        return ue;
      }),
      r.d(n, "updateKeywordsData", function () {
        return se;
      }),
      r.d(n, "updateAIScore", function () {
        return le;
      });
    var a = {};
    r.r(a),
      r.d(a, "appData", function () {
        return ye;
      }),
      r.d(a, "appUi", function () {
        return _e;
      });
    var i = {};
    r.r(i),
      r.d(i, "getAppData", function () {
        return Oe;
      }),
      r.d(i, "getDirtyMetadata", function () {
        return Se;
      }),
      r.d(i, "getAnalysisScore", function () {
        return je;
      }),
      r.d(i, "getKeywords", function () {
        return Te;
      }),
      r.d(i, "getPillarContent", function () {
        return De;
      }),
      r.d(i, "getRobots", function () {
        return Ie;
      }),
      r.d(i, "getAdvancedRobots", function () {
        return Pe;
      }),
      r.d(i, "getCanonicalUrl", function () {
        return Ee;
      }),
      r.d(i, "getBreadcrumbTitle", function () {
        return Ae;
      }),
      r.d(i, "getRichSnippets", function () {
        return xe;
      }),
      r.d(i, "getShowScoreFrontend", function () {
        return Me;
      }),
      r.d(i, "isLoaded", function () {
        return Ce;
      }),
      r.d(i, "getSelectedKeyword", function () {
        return Re;
      }),
      r.d(i, "isRefreshing", function () {
        return Be;
      }),
      r.d(i, "isPro", function () {
        return Ue;
      }),
      r.d(i, "isDiviPageSettingsBarActive", function () {
        return Fe;
      }),
      r.d(i, "isDiviRankMathModalActive", function () {
        return Le;
      }),
      r.d(i, "getFacebookTitle", function () {
        return Ne;
      }),
      r.d(i, "getFacebookDescription", function () {
        return $e;
      }),
      r.d(i, "getFacebookAuthor", function () {
        return He;
      }),
      r.d(i, "getFacebookImageID", function () {
        return Ke;
      }),
      r.d(i, "getFacebookImage", function () {
        return Ge;
      }),
      r.d(i, "getFacebookHasOverlay", function () {
        return ze;
      }),
      r.d(i, "getFacebookImageOverlay", function () {
        return Ve;
      }),
      r.d(i, "getPostID", function () {
        return qe;
      }),
      r.d(i, "getTitle", function () {
        return Qe;
      }),
      r.d(i, "getPermalink", function () {
        return We;
      }),
      r.d(i, "getDescription", function () {
        return Ye;
      }),
      r.d(i, "getFeaturedImage", function () {
        return Je;
      }),
      r.d(i, "getFeaturedImageHtml", function () {
        return Xe;
      }),
      r.d(i, "getPrimaryTermID", function () {
        return Ze;
      }),
      r.d(i, "getRedirectionID", function () {
        return tr;
      }),
      r.d(i, "getRedirectionType", function () {
        return er;
      }),
      r.d(i, "getRedirectionUrl", function () {
        return rr;
      }),
      r.d(i, "getRedirectionItem", function () {
        return nr;
      }),
      r.d(i, "hasRedirect", function () {
        return ar;
      }),
      r.d(i, "getSerpTitle", function () {
        return or;
      }),
      r.d(i, "getSerpSlug", function () {
        return cr;
      }),
      r.d(i, "getSerpDescription", function () {
        return ur;
      }),
      r.d(i, "isSnippetEditorOpen", function () {
        return sr;
      }),
      r.d(i, "getSnippetPreviewType", function () {
        return lr;
      }),
      r.d(i, "isTrendsCtaOpen", function () {
        return pr;
      }),
      r.d(i, "isSchemaEditorOpen", function () {
        return dr;
      }),
      r.d(i, "isSchemaTemplatesOpen", function () {
        return fr;
      }),
      r.d(i, "hasSchemaUpdated", function () {
        return hr;
      }),
      r.d(i, "getSchemas", function () {
        return mr;
      }),
      r.d(i, "getEditSchemas", function () {
        return gr;
      }),
      r.d(i, "getEditingSchema", function () {
        return yr;
      }),
      r.d(i, "getPreviewSchema", function () {
        return br;
      }),
      r.d(i, "getEditorTab", function () {
        return vr;
      }),
      r.d(i, "getTemplateTab", function () {
        return wr;
      }),
      r.d(i, "getTwitterUseFacebook", function () {
        return kr;
      }),
      r.d(i, "getTwitterCardType", function () {
        return _r;
      }),
      r.d(i, "getTwitterTitle", function () {
        return Or;
      }),
      r.d(i, "getTwitterDescription", function () {
        return Sr;
      }),
      r.d(i, "getTwitterAuthor", function () {
        return jr;
      }),
      r.d(i, "getTwitterImageID", function () {
        return Tr;
      }),
      r.d(i, "getTwitterImage", function () {
        return Dr;
      }),
      r.d(i, "getTwitterHasOverlay", function () {
        return Ir;
      }),
      r.d(i, "getTwitterImageOverlay", function () {
        return Pr;
      }),
      r.d(i, "getTwitterAppDescription", function () {
        return Er;
      }),
      r.d(i, "getTwitterAppIphoneID", function () {
        return Ar;
      }),
      r.d(i, "getTwitterAppIphoneName", function () {
        return xr;
      }),
      r.d(i, "getTwitterAppIphoneUrl", function () {
        return Mr;
      }),
      r.d(i, "getTwitterAppIpadID", function () {
        return Cr;
      }),
      r.d(i, "getTwitterAppIpadName", function () {
        return Rr;
      }),
      r.d(i, "getTwitterAppIpadUrl", function () {
        return Br;
      }),
      r.d(i, "getTwitterAppGoogleplayID", function () {
        return Ur;
      }),
      r.d(i, "getTwitterAppGoogleplayName", function () {
        return Fr;
      }),
      r.d(i, "getTwitterAppGoogleplayUrl", function () {
        return Lr;
      }),
      r.d(i, "getTwitterAppCountry", function () {
        return Nr;
      }),
      r.d(i, "getTwitterPlayerUrl", function () {
        return $r;
      }),
      r.d(i, "getTwitterPlayerSize", function () {
        return Hr;
      }),
      r.d(i, "getTwitterPlayerStream", function () {
        return Kr;
      }),
      r.d(i, "getTwitterPlayerStreamCtype", function () {
        return Gr;
      }),
      r.d(i, "getKeywordsData", function () {
        return zr;
      }),
      r.d(i, "getContentAIScore", function () {
        return Vr;
      });
    var o = r(6),
      c = r.n(o),
      u = r(1),
      s = r(21),
      l = r(7),
      p = r(3),
      d = r(8),
      f = Object(d.createSlotFill)("RankMathAfterEditor"),
      h = f.Fill,
      m = f.Slot,
      g = function (t) {
        var e = t.children,
          r = t.className;
        return wp.element.createElement(
          h,
          null,
          wp.element.createElement(d.PanelRow, { className: r }, e)
        );
      };
    g.Slot = m;
    var y = g,
      b = Object(d.createSlotFill)("RankMathAdvancedTab"),
      v = b.Fill,
      w = b.Slot,
      k = function (t) {
        var e = t.children,
          r = t.className;
        return wp.element.createElement(
          v,
          null,
          wp.element.createElement(d.PanelRow, { className: r }, e)
        );
      };
    k.Slot = w;
    var _ = k,
      O = Object(d.createSlotFill)("RankMathAfterFocusKeyword"),
      S = O.Fill,
      j = O.Slot,
      T = function (t) {
        var e = t.children,
          r = t.className;
        return wp.element.createElement(
          S,
          null,
          wp.element.createElement("div", { className: r }, e)
        );
      };
    T.Slot = j;
    var D = T,
      I = r(4),
      P = r(2),
      E = r.n(P);
    function A(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var x = new ((function () {
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
                  : E()("#description").val()
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
                  E.a.each(rankMath.variables, function (e, r) {
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
        ]) && A(e.prototype, r),
        n && A(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })())();
    function M(t, e) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      return (
        (e = Object(p.applyFilters)("rank_math_sanitize_data", e, t, r)),
        null !== n &&
          (n = Object(p.applyFilters)(
            "rank_math_sanitize_meta_value",
            n,
            t,
            r
          )),
        (n = null === n ? e : n),
        Object(p.doAction)("rank_math_data_changed", t, e, r),
        {
          type: "RANK_MATH_APP_DATA",
          key: t,
          value: e,
          metaKey: r,
          metaValue: n,
        }
      );
    }
    function C(t, e) {
      return (
        Object(p.doAction)("rank_math_update_app_ui", t, e),
        { type: "RANK_MATH_APP_UI", key: t, value: e }
      );
    }
    function R(t) {
      return (
        x.setVariable("focuskw", t.split(",")[0]),
        rankMathEditor.refresh("keyword"),
        M("keywords", t, "rank_math_focus_keyword")
      );
    }
    function B(t) {
      return M(
        "pillarContent",
        t,
        "rank_math_pillar_content",
        !0 === t ? "on" : "off"
      );
    }
    function U(t) {
      return M(
        "showScoreFrontend",
        t,
        "rank_math_dont_show_seo_score",
        !0 === t ? "off" : "on"
      );
    }
    function F(t) {
      return M("score", t, "rank_math_seo_score");
    }
    function L(t) {
      return M("canonicalUrl", t, "rank_math_canonical_url");
    }
    function N(t) {
      return M("advancedRobots", t, "rank_math_advanced_robots");
    }
    function $(t) {
      return M("robots", t, "rank_math_robots", Object.keys(t));
    }
    function H(t) {
      return M("breadcrumbTitle", t, "rank_math_breadcrumb_title");
    }
    function K() {
      return M("dirtyMetadata", {});
    }
    function G(t) {
      return M("facebookTitle", t, "rank_math_facebook_title");
    }
    function z(t) {
      return M("facebookDescription", t, "rank_math_facebook_description");
    }
    function V(t) {
      return M("facebookImage", t, "rank_math_facebook_image");
    }
    function q(t) {
      return M("facebookImageID", t, "rank_math_facebook_image_id");
    }
    function Q(t) {
      return M(
        "facebookHasOverlay",
        t,
        "rank_math_facebook_enable_image_overlay",
        !0 === t ? "on" : "off"
      );
    }
    function W(t) {
      return M("facebookImageOverlay", t, "rank_math_facebook_image_overlay");
    }
    function Y(t) {
      return (rankMath.objectID = t), M("postID", t);
    }
    function J(t) {
      return M("permalink", t, "permalink");
    }
    function X(t) {
      return M("title", t, "rank_math_title");
    }
    function Z(t) {
      return M("description", t, "rank_math_description");
    }
    function tt(t) {
      return M("featuredImage", t);
    }
    function et(t, e) {
      return M("primaryTerm", parseInt(t), "rank_math_primary_" + e);
    }
    function rt(t, e) {
      return M(t, e);
    }
    function nt(t) {
      return C("redirectionItem", t);
    }
    function at() {
      return C("redirectionItem", {});
    }
    function it(t) {
      return C("hasRedirect", t);
    }
    var ot = r(0),
      ct = document.createElement("div"),
      ut = function (t) {
        return (
          t &&
            "string" == typeof t &&
            ((t = t
              .replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "")
              .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "")),
            (ct.innerHTML = t),
            (t = ct.textContent),
            (ct.textContent = "")),
          t
        );
      },
      st = function (t, e) {
        return (
          (t = (t = I.Helpers.cleanText(t)).replace(/\r?\n|\r/g, " ")),
          e ? Object(ot.truncate)(t, { length: e, separator: " " }) : t
        );
      },
      lt = function (t) {
        var e = rankMathEditor.assessor.dataCollector.getData(),
          r = e.excerpt,
          n = (function (t) {
            if (Object(ot.isEmpty)(t)) return "";
            (t = I.Helpers.stripScript(t)),
              (t = I.Helpers.stripStyle(t)),
              (t = Object(ot.unescape)(t).replace(
                /\[caption[^\]]*\](.*)\[\/caption\]/g,
                ""
              ));
            var e = Object(ot.filter)(
              I.Helpers.matchParagraphs(t, !0, !0),
              function (t) {
                return "" !== t.trim();
              }
            );
            if (!e.length) return "";
            var r = rankMathEditor.getPrimaryKeyword();
            if ("" !== r) {
              var n = Object(ot.filter)(e, function (t) {
                return Object(ot.includes)(t.toLowerCase(), r.toLowerCase());
              });
              if (0 < n.length) return st(n[0], 160);
            }
            return st(e[0], 160);
          })(e.content),
          a =
            Object(ot.isUndefined)(r) || Object(ot.isEmpty)(r)
              ? n
              : Object(ot.unescape)(r);
        if (
          (x.setVariable("excerpt", a),
          x.setVariable("seo_description", a),
          "" !== (t = ut(Object(p.applyFilters)("rankMath/description", t))))
        )
          return I.Helpers.cleanText(t);
        if (!Object(ot.isUndefined)(r) && !Object(ot.isEmpty)(r))
          return I.Helpers.cleanText(r);
        var i = Object(ot.unescape)(
          rankMath.assessor.serpData.descriptionTemplate
        );
        return Object(ot.isUndefined)(i) || "" === i
          ? n
          : I.Helpers.cleanText(i);
      };
    function pt(t) {
      return (
        (t = x.swap("" !== t ? t : rankMath.assessor.serpData.titleTemplate)),
        rankMathEditor.refresh("title"),
        C("serpTitle", t)
      );
    }
    function dt(t) {
      return (
        (t = "" !== t ? t : rankMathEditor.assessor.dataCollector.getSlug()),
        rankMathEditor.refresh("permalink"),
        C("serpSlug", t)
      );
    }
    function ft(t) {
      return (
        (t = x.swap(lt(t))),
        rankMathEditor.refresh("description"),
        C("serpDescription", t)
      );
    }
    function ht(t) {
      return C("isSnippetEditorOpen", t);
    }
    function mt(t) {
      return C("snippetPreviewType", t);
    }
    function gt(t) {
      return C("isTrendsCtaOpen", t);
    }
    function yt(t) {
      return M(
        "twitterUseFacebook",
        t,
        "rank_math_twitter_use_facebook",
        !0 === t ? "on" : "off"
      );
    }
    function bt(t) {
      return M("twitterCardType", t, "rank_math_twitter_card_type");
    }
    function vt(t) {
      return M("twitterTitle", t, "rank_math_twitter_title");
    }
    function wt(t) {
      return M("twitterDescription", t, "rank_math_twitter_description");
    }
    function kt(t) {
      return M("twitterAuthor", t, "rank_math_twitter_author");
    }
    function _t(t) {
      return M("twitterImageID", t, "rank_math_twitter_image_id");
    }
    function Ot(t) {
      return M("twitterImage", t, "rank_math_twitter_image");
    }
    function St(t) {
      return M(
        "twitterHasOverlay",
        t,
        "rank_math_twitter_enable_image_overlay",
        !0 === t ? "on" : "off"
      );
    }
    function jt(t) {
      return M("twitterImageOverlay", t, "rank_math_twitter_image_overlay");
    }
    function Tt(t) {
      return M("twitterPlayerUrl", t, "rank_math_twitter_player_url");
    }
    function Dt(t) {
      return M("twitterPlayerSize", t, "rank_math_twitter_player_size");
    }
    function It(t) {
      return M("twitterPlayerStream", t, "rank_math_twitter_player_stream");
    }
    function Pt(t) {
      return M(
        "twitterPlayerStreamCtype",
        t,
        "rank_math_twitter_player_stream_ctype"
      );
    }
    function Et(t) {
      return M("twitterAppDescription", t, "rank_math_twitter_app_description");
    }
    function At(t) {
      return M("twitterAppIphoneID", t, "rank_math_twitter_app_iphone_id");
    }
    function xt(t) {
      return M("twitterAppIphoneName", t, "rank_math_twitter_app_iphone_name");
    }
    function Mt(t) {
      return M("twitterAppIphoneUrl", t, "rank_math_twitter_app_iphone_url");
    }
    function Ct(t) {
      return M("twitterAppIpadID", t, "rank_math_twitter_app_ipad_id");
    }
    function Rt(t) {
      return M("twitterAppIpadName", t, "rank_math_twitter_app_ipad_name");
    }
    function Bt(t) {
      return M("twitterAppIpadUrl", t, "rank_math_twitter_app_ipad_url");
    }
    function Ut(t) {
      return M(
        "twitterAppGoogleplayID",
        t,
        "rank_math_twitter_app_googleplay_id"
      );
    }
    function Ft(t) {
      return M(
        "twitterAppGoogleplayName",
        t,
        "rank_math_twitter_app_googleplay_name"
      );
    }
    function Lt(t) {
      return M(
        "twitterAppGoogleplayUrl",
        t,
        "rank_math_twitter_app_googleplay_url"
      );
    }
    function Nt(t) {
      return M("twitterAppCountry", t, "rank_math_twitter_app_country");
    }
    function $t(t) {
      return C("isLoaded", t);
    }
    function Ht(t) {
      return C("selectedKeyword", t);
    }
    function Kt() {
      return C("refreshResults", Date.now());
    }
    function Gt() {
      return C("isPro", !0);
    }
    function zt(t) {
      return C("isDiviPageSettingsBarActive", t);
    }
    function Vt(t) {
      return C("isDiviRankMathModalActive", t);
    }
    var qt = r(5);
    function Qt(t, e) {
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
    function Wt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Qt(Object(r), !0).forEach(function (e) {
              Yt(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Qt(Object(r)).forEach(function (e) {
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
    function Jt(t) {
      return C("isSchemaEditorOpen", t);
    }
    function Xt(t) {
      return C("isSchemaTemplatesOpen", t);
    }
    function Zt(t) {
      return C("schemaUpdated", t);
    }
    function te(t) {
      return C("editingSchemaId", t);
    }
    function ee(t) {
      return C("editorTab", t);
    }
    function re(t) {
      return C("templateTab", t);
    }
    function ne(t) {
      return C("editSchemas", t);
    }
    function ae(t) {
      return M("schemas", t);
    }
    function ie(t, e) {
      var r = Wt({}, Object(u.select)("rank-math").getEditSchemas());
      return (r[t] = e), C("editSchemas", r);
    }
    function oe(t, e) {
      var r = Wt({}, Object(u.select)("rank-math").getSchemas());
      return (r[t] = e), M("schemas", r);
    }
    function ce(t) {
      var e = Wt({}, Object(u.select)("rank-math").getSchemas());
      return (
        delete e[t],
        Object(p.doAction)("rank_math_schema_trash", t),
        M("schemas", e, "rank_math_delete_" + t, "")
      );
    }
    function ue(t, e, r) {
      return (
        c()({
          method: "POST",
          path: "rankmath/v1/saveTemplate",
          data: { schema: t, postId: r },
        }).then(function (r) {
          e({ loading: !1, showNotice: !0, postId: r.id }),
            setTimeout(function () {
              e({ showNotice: !1 }),
                Object(ot.get)(rankMath, "isTemplateScreen", !1) &&
                  ((document.title = Object(qt.__)("Edit Schema", "rank-math")),
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
    function se(t) {
      return C("keywordsData", t);
    }
    function le(t) {
      return M("contentAIScore", t, "rank_math_contentai_score");
    }
    function pe(t, e) {
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
    function de(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? pe(Object(r), !0).forEach(function (e) {
              fe(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : pe(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function fe(t, e, r) {
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
    var he = rankMath.assessor.serpData,
      me = rankMath.assessor.hasRedirection,
      ge = {
        postID: null,
        title: he.title ? he.title : he.titleTemplate,
        description: he.description,
        keywords: he.focusKeywords,
        pillarContent: he.pillarContent,
        featuredImage: "",
        permalink: !1,
        primaryTerm: he.primaryTerm,
        robots: he.robots,
        advancedRobots: he.advancedRobots,
        canonicalUrl: he.canonicalUrl,
        breadcrumbTitle: he.breadcrumbTitle,
        showScoreFrontend: he.showScoreFrontend,
        redirectionID: me
          ? Object(ot.get)(rankMath.assessor, "redirection.id", "")
          : "",
        redirectionType: me
          ? Object(ot.get)(rankMath.assessor, "redirection.header_code", "")
          : "",
        redirectionUrl: me
          ? Object(ot.get)(rankMath.assessor, "redirection.url_to", "")
          : "",
        facebookTitle: he.facebookTitle,
        facebookImage: he.facebookImage,
        facebookImageID: he.facebookImageID,
        facebookAuthor: he.facebookAuthor,
        facebookDescription: he.facebookDescription,
        facebookHasOverlay: he.facebookHasOverlay,
        facebookImageOverlay: he.facebookImageOverlay,
        twitterTitle: he.twitterTitle,
        twitterImage: he.twitterImage,
        twitterAuthor: he.twitterAuthor,
        twitterImageID: he.twitterImageID,
        twitterCardType: he.twitterCardType,
        twitterUseFacebook: he.twitterUseFacebook,
        twitterDescription: he.twitterDescription,
        twitterHasOverlay: he.twitterHasOverlay,
        twitterImageOverlay: he.twitterImageOverlay,
        twitterPlayerUrl: he.twitterPlayerUrl,
        twitterPlayerSize: he.twitterPlayerSize,
        twitterPlayerStream: he.twitterPlayerStream,
        twitterPlayerStreamCtype: he.twitterPlayerStreamCtype,
        twitterAppDescription: he.twitterAppDescription,
        twitterAppIphoneName: he.twitterAppIphoneName,
        twitterAppIphoneID: he.twitterAppIphoneID,
        twitterAppIphoneUrl: he.twitterAppIphoneUrl,
        twitterAppIpadName: he.twitterAppIpadName,
        twitterAppIpadID: he.twitterAppIpadID,
        twitterAppIpadUrl: he.twitterAppIpadUrl,
        twitterAppGoogleplayName: he.twitterAppGoogleplayName,
        twitterAppGoogleplayID: he.twitterAppGoogleplayID,
        twitterAppGoogleplayUrl: he.twitterAppGoogleplayUrl,
        twitterAppCountry: he.twitterAppCountry,
        schemas: Object(ot.get)(rankMath, "schemas", {}),
        score: 0,
        contentAIScore: {},
        dirtyMetadata: {},
      };
    function ye() {
      var t,
        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
        r = arguments.length > 1 ? arguments[1] : void 0,
        n = de({}, e.dirtyMetadata);
      return (
        !1 !== r.metaKey && (n[r.metaKey] = r.metaValue),
        "RANK_MATH_APP_DATA" === r.type
          ? "dirtyMetadata" === r.key
            ? de(de({}, e), {}, { dirtyMetadata: r.value })
            : de(
                de({}, e),
                {},
                (fe((t = {}), r.key, r.value), fe(t, "dirtyMetadata", n), t)
              )
          : e
      );
    }
    function be(t, e) {
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
    function ve(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? be(Object(r), !0).forEach(function (e) {
              we(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : be(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function we(t, e, r) {
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
    var ke = {
      isLoaded: !1,
      isPro: !1,
      selectedKeyword: { tag: "", index: 0, data: { value: "" } },
      hasRedirect:
        rankMath.assessor.hasRedirection &&
        !Object(ot.isEmpty)(
          Object(ot.get)(rankMath.assessor, "redirection.id", "")
        ) &&
        !Object(ot.isEmpty)(
          Object(ot.get)(rankMath.assessor, "redirection.url_to", "")
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
      keywordsData: Object(ot.get)(rankMath, "ca_data", []),
    };
    function _e() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ke,
        e = arguments.length > 1 ? arguments[1] : void 0;
      return "RANK_MATH_APP_UI" === e.type
        ? ve(ve({}, t), {}, we({}, e.key, e.value))
        : t;
    }
    function Oe(t) {
      return t.appData;
    }
    function Se(t) {
      return t.appData.dirtyMetadata;
    }
    function je(t) {
      return t.appData.score;
    }
    function Te(t) {
      return t.appData.keywords;
    }
    function De(t) {
      return t.appData.pillarContent;
    }
    function Ie(t) {
      return t.appData.robots;
    }
    function Pe(t) {
      return t.appData.advancedRobots;
    }
    function Ee(t) {
      return t.appData.canonicalUrl;
    }
    function Ae(t) {
      return t.appData.breadcrumbTitle;
    }
    function xe(t) {
      return "todo";
    }
    function Me(t) {
      return t.appData.showScoreFrontend;
    }
    function Ce(t) {
      return t.appUi.isLoaded;
    }
    function Re(t) {
      return t.appUi.selectedKeyword;
    }
    function Be(t) {
      return t.appUi.refreshResults;
    }
    function Ue(t) {
      return t.appUi.isPro;
    }
    function Fe(t) {
      return t.appUi.isDiviPageSettingsBarActive;
    }
    function Le(t) {
      return t.appUi.isDiviRankMathModalActive;
    }
    function Ne(t) {
      return t.appData.facebookTitle;
    }
    function $e(t) {
      return t.appData.facebookDescription;
    }
    function He(t) {
      return t.appData.facebookAuthor;
    }
    function Ke(t) {
      return t.appData.facebookImageID;
    }
    function Ge(t) {
      return t.appData.facebookImage;
    }
    function ze(t) {
      return t.appData.facebookHasOverlay;
    }
    function Ve(t) {
      return "" !== t.appData.facebookImageOverlay
        ? t.appData.facebookImageOverlay
        : "play";
    }
    function qe(t) {
      return t.appData.postID;
    }
    function Qe(t) {
      return t.appData.title;
    }
    function We(t) {
      return t.appData.permalink;
    }
    function Ye(t) {
      return t.appData.description;
    }
    function Je(t) {
      return t.appData.featuredImage;
    }
    function Xe(t) {
      var e = t.appData.featuredImage;
      return '<img src="'
        .concat(e.source_url, '" alt="')
        .concat(e.alt_text, '" >');
    }
    function Ze(t) {
      return t.appData.primaryTerm;
    }
    function tr(t) {
      return t.appData.redirectionID;
    }
    function er(t) {
      return t.appData.redirectionType;
    }
    function rr(t) {
      return t.appData.redirectionUrl;
    }
    function nr(t) {
      return t.appUi.redirectionItem;
    }
    function ar(t) {
      return t.appUi.hasRedirect;
    }
    var ir = r(13);
    function or(t) {
      return ut(t.appUi.serpTitle);
    }
    function cr(t) {
      return Object(ir.safeDecodeURIComponent)(t.appUi.serpSlug);
    }
    function ur(t) {
      return t.appUi.serpDescription;
    }
    function sr(t) {
      return t.appUi.isSnippetEditorOpen;
    }
    function lr(t) {
      return t.appUi.snippetPreviewType;
    }
    function pr(t) {
      return t.appUi.isTrendsCtaOpen;
    }
    function dr(t) {
      return t.appUi.isSchemaEditorOpen;
    }
    function fr(t) {
      return t.appUi.isSchemaTemplatesOpen;
    }
    function hr(t) {
      return t.appUi.schemaUpdated;
    }
    function mr(t) {
      return t.appData.schemas;
    }
    function gr(t) {
      return t.appUi.editSchemas;
    }
    function yr(t) {
      return {
        id: t.appUi.editingSchemaId,
        data: t.appUi.editSchemas[t.appUi.editingSchemaId],
      };
    }
    function br(t) {
      return t.appData.schemas[t.appUi.editingSchemaId];
    }
    function vr(t) {
      return t.appUi.editorTab;
    }
    function wr(t) {
      return t.appUi.templateTab;
    }
    function kr(t) {
      return t.appData.twitterUseFacebook;
    }
    function _r(t) {
      return t.appData.twitterCardType;
    }
    function Or(t) {
      return t.appData.twitterTitle;
    }
    function Sr(t) {
      return t.appData.twitterDescription;
    }
    function jr(t) {
      return t.appData.twitterAuthor;
    }
    function Tr(t) {
      return t.appData.twitterImageID;
    }
    function Dr(t) {
      return t.appData.twitterImage;
    }
    function Ir(t) {
      return t.appData.twitterHasOverlay;
    }
    function Pr(t) {
      return "" !== t.appData.twitterImageOverlay
        ? t.appData.twitterImageOverlay
        : "play";
    }
    function Er(t) {
      return t.appData.twitterAppDescription;
    }
    function Ar(t) {
      return t.appData.twitterAppIphoneID;
    }
    function xr(t) {
      return t.appData.twitterAppIphoneName;
    }
    function Mr(t) {
      return t.appData.twitterAppIphoneUrl;
    }
    function Cr(t) {
      return t.appData.twitterAppIpadID;
    }
    function Rr(t) {
      return t.appData.twitterAppIpadName;
    }
    function Br(t) {
      return t.appData.twitterAppIpadUrl;
    }
    function Ur(t) {
      return t.appData.twitterAppGoogleplayID;
    }
    function Fr(t) {
      return t.appData.twitterAppGoogleplayName;
    }
    function Lr(t) {
      return t.appData.twitterAppGoogleplayUrl;
    }
    function Nr(t) {
      return t.appData.twitterAppCountry;
    }
    function $r(t) {
      return t.appData.twitterPlayerUrl;
    }
    function Hr(t) {
      return t.appData.twitterPlayerSize;
    }
    function Kr(t) {
      return t.appData.twitterPlayerStream;
    }
    function Gr(t) {
      return t.appData.twitterPlayerStreamCtype;
    }
    function zr(t) {
      return t.appUi.keywordsData;
    }
    function Vr(t) {
      return t.appData.contentAIScore;
    }
    var qr = Object(u.registerStore)("rank-math", {
      reducer: Object(u.combineReducers)(a),
      selectors: i,
      actions: n,
    });
    function Qr() {
      return qr;
    }
    var Wr = { "&amp;": "&", "&quot;": '"', "&#39;": "'" },
      Yr = /&(?:amp|quot|#(0+)?39);/g,
      Jr = RegExp(Yr.source);
    var Xr = function (t) {
      return t && Jr.test(t)
        ? t.replace(Yr, function (t) {
            return Wr[t] || "'";
          })
        : t || "";
    };
    function Zr(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var tn = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.analyzer = new I.Analyzer({
            i18n: qt,
            analyses: rankMath.assessor.researchesTests,
          })),
          (this.dataCollector = e),
          this.registerRefresh(),
          (this.updateKeywordResult = this.updateKeywordResult.bind(this)),
          (this.sanitizeData = this.sanitizeData.bind(this)),
          Object(p.addAction)(
            "rankMath_analysis_keywordUsage_updated",
            "rank-math",
            this.updateKeywordResult
          ),
          Object(p.addFilter)(
            "rank_math_sanitize_meta_value",
            "rank-math",
            this.sanitizeData
          ),
          Object(p.addFilter)(
            "rank_math_sanitize_data",
            "rank-math",
            this.sanitizeData
          );
      }
      var e, r, n;
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
                Object(ot.isObject)(t) ||
                Object(ot.isEmpty)(t)
                ? t
                : I.Helpers.sanitizeAppData(t);
            },
          },
          {
            key: "getPaper",
            value: function (t, e) {
              var r = Qr().getState(),
                n = this.dataCollector.getData(),
                a = new I.Paper("", { locale: rankMath.localeFull });
              return (
                a.setTitle(r.appUi.serpTitle),
                a.setPermalink(n.slug),
                a.setDescription(r.appUi.serpDescription),
                a.setUrl(n.permalink),
                a.setText(
                  Xr(Object(p.applyFilters)("rank_math_content", n.content))
                ),
                a.setKeyword(t),
                a.setKeywords(e),
                a.setSchema(r.appData.schemas),
                Object(ot.isUndefined)(n.featuredImage) ||
                  (a.setThumbnail(n.featuredImage.source_url),
                  a.setThumbnailAltText(
                    I.Helpers.removeDiacritics(n.featuredImage.alt_text)
                  )),
                (Object(ot.isEmpty)(r.appData.contentAIScore) &&
                  Object(ot.isEmpty)(rankMath.ca_keyword)) ||
                  a.setContentAI(!0),
                a
              );
            },
          },
          {
            key: "registerRefresh",
            value: function () {
              var t = this;
              this.refresh = Object(ot.debounce)(function (e) {
                var r = Qr().getState();
                if (!1 !== r.appUi.isLoaded) {
                  var n = r.appData.keywords.split(","),
                    a = [];
                  Object(p.doAction)("rank_math_" + e + "_refresh"),
                    n.map(function (e, r) {
                      var i = t.getPaper(I.Helpers.removeDiacritics(e), n),
                        o =
                          0 === r
                            ? rankMath.assessor.researchesTests
                            : t.filterTests(t.getSecondaryKeywordTests());
                      a.push(
                        t.analyzer.analyzeSome(o, i).then(function (t) {
                          rankMathEditor.resultManager.update(
                            i.getKeyword(),
                            t,
                            0 === r
                          ),
                            0 === r &&
                              Object(u.dispatch)(
                                "rank-math"
                              ).updateAnalysisScore(
                                rankMathEditor.resultManager.getScore(
                                  i.getKeyword()
                                )
                              );
                        })
                      ),
                        Promise.all(a).then(function () {
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
              var t = Qr().getState().appData.keywords;
              return I.Helpers.removeDiacritics(t.split(",")[0]);
            },
          },
          {
            key: "getSelectedKeyword",
            value: function () {
              var t = Qr().getState(),
                e =
                  "" !== t.appUi.selectedKeyword.data.value
                    ? t.appUi.selectedKeyword.data.value
                    : t.appData.keywords.split(",")[0];
              return I.Helpers.removeDiacritics(e);
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
              return Object(ot.intersection)(
                t,
                rankMath.assessor.researchesTests
              );
            },
          },
        ]) && Zr(e.prototype, r),
        n && Zr(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    function en(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var rn = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          rankMath.is_front_page &&
            (Object(p.addFilter)(
              "rankMath_analysis_contentLength",
              "rank-math",
              this.contentLength
            ),
            Object(p.addFilter)(
              "rankMath_analysis_contentLength_boundaries",
              "rank-math",
              this.contentLengthBoundary
            ));
      }
      var e, r, n;
      return (
        (e = t),
        (r = [
          {
            key: "contentLength",
            value: function (t) {
              return {
                hasScore: t.hasScore,
                failed: Object(qt.__)(
                  "Content is %1$d words long. Consider using at least 300 words.",
                  "rank-math"
                ),
                tooltipText: Object(qt.__)(
                  "Minimum recommended content length should be 300 words.",
                  "rank-math"
                ),
                emptyContent: Object(qt.sprintf)(
                  Object(qt.__)("Content should be %1$s long.", "rank-math"),
                  '<a href="https://s.rankmath.com/100contentlength" target="_blank">' +
                    Object(qt.__)("300 words", "rank-math") +
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
        ]) && en(e.prototype, r),
        n && en(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    function nn(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var an = (function () {
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
            value: function (t) {
              Qr(),
                (this.resultManager = new I.ResultManager()),
                (this.assessor = new tn(t)),
                new rn(),
                Object(p.doAction)("rank_math_loaded");
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
        ]) && nn(e.prototype, r),
        n && nn(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    function on(t) {
      return (
        (on =
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
        on(t)
      );
    }
    function cn(t, e) {
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
    function un(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? cn(Object(r), !0).forEach(function (e) {
              sn(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : cn(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function sn(t, e, r) {
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
    function ln() {
      ln = function () {
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
          o = new O(n || []);
        return (
          (i._invoke = (function (t, e, r) {
            var n = "suspendedStart";
            return function (a, i) {
              if ("executing" === n)
                throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === a) throw i;
                return j();
              }
              for (r.method = a, r.arg = i; ; ) {
                var o = r.delegate;
                if (o) {
                  var c = w(o, r);
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
      var m = Object.getPrototypeOf,
        g = m && m(m(S([])));
      g && g !== e && r.call(g, a) && (h = g);
      var y = (f.prototype = p.prototype = Object.create(h));
      function b(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function v(t, e) {
        function n(a, i, o, c) {
          var u = s(t[a], t, i);
          if ("throw" !== u.type) {
            var l = u.arg,
              p = l.value;
            return p && "object" == on(p) && r.call(p, "__await")
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
      function w(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              w(t, e),
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
      function k(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function _(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function O(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(k, this),
          this.reset(!0);
      }
      function S(t) {
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
        return { next: j };
      }
      function j() {
        return { value: void 0, done: !0 };
      }
      return (
        (d.prototype = f),
        c(y, "constructor", f),
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
            (t.prototype = Object.create(y)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        b(v.prototype),
        c(v.prototype, i, function () {
          return this;
        }),
        (t.AsyncIterator = v),
        (t.async = function (e, r, n, a, i) {
          void 0 === i && (i = Promise);
          var o = new v(u(e, r, n, a), i);
          return t.isGeneratorFunction(r)
            ? o
            : o.next().then(function (t) {
                return t.done ? t.value : o.next();
              });
        }),
        b(y),
        c(y, o, "Generator"),
        c(y, a, function () {
          return this;
        }),
        c(y, "toString", function () {
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
        (t.values = S),
        (O.prototype = {
          constructor: O,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(_),
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
                return this.complete(r.completion, r.afterLoc), _(r), l;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var a = n.arg;
                  _(r);
                }
                return a;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: S(t), resultName: e, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          },
        }),
        t
      );
    }
    function pn(t, e, r, n, a, i, o) {
      try {
        var c = t[i](o),
          u = c.value;
      } catch (t) {
        return void r(t);
      }
      c.done ? e(u) : Promise.resolve(u).then(n, a);
    }
    function dn(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, a) {
          var i = t.apply(e, r);
          function o(t) {
            pn(i, n, a, o, c, "next", t);
          }
          function c(t) {
            pn(i, n, a, o, c, "throw", t);
          }
          o(void 0);
        });
      };
    }
    function fn(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var hn = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.initialize = !1),
            (this.etSettingsData = {
              title: "",
              excerpt: "",
              featuredImage: "",
            }),
            (this._featuredImage = null),
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
            this.subscribeToDivi();
        }
        var e, r, n, a, i, o;
        return (
          (e = t),
          (r = [
            {
              key: "collectPostData",
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
                return parseInt(
                  Object(ot.get)(ETBuilderBackendDynamic, "postId", 0)
                );
              },
            },
            {
              key: "getTitle",
              value: function () {
                return this.etSettingsData.title;
              },
            },
            {
              key: "setTitle",
              value: function (t) {
                this.etSettingsData.title = t;
              },
            },
            {
              key: "getContent",
              value: function () {
                var t = [];
                return (
                  this.getContentArea()
                    .find(".et_pb_section")
                    .each(function () {
                      t.push(E()(this).html());
                    }),
                  t.join("")
                );
              },
            },
            {
              key: "getContentArea",
              value: function () {
                if (
                  (this._etAppFrameElem ||
                    (this._etAppFrameElem = Object(ot.get)(
                      ET_Builder,
                      "Frames.app.frameElement",
                      document.querySelector("iframe#et-fb-app-frame")
                    )),
                  !this._etAppFrameElem)
                )
                  return E()("<div />");
                var t = this._etAppFrameElem.contentWindow.document,
                  e = E()(
                    Object(ot.isNull)(
                      t.querySelector("#theme-builder-area--post_content")
                    )
                      ? t.querySelector("body")
                      : t.querySelector("#theme-builder-area--post_content")
                  );
                return e.length < 1 ? E()("<div />") : e;
              },
            },
            {
              key: "getExcerpt",
              value: function () {
                return this.etSettingsData.excerpt;
              },
            },
            {
              key: "setExcerpt",
              value: function (t) {
                this.etSettingsData.excerpt = t;
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
                return Object(ir.safeDecodeURIComponent)(
                  Object(u.select)("rank-math").getPermalink()
                );
              },
            },
            {
              key: "getFeaturedImage",
              value: function () {
                if (this._featuredImage) return this._featuredImage;
                this.setFeaturedImage();
              },
            },
            {
              key: "setFeaturedImage",
              value:
                ((o = dn(
                  ln().mark(function t(e) {
                    return ln().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (void 0 !== e) {
                                t.next = 4;
                                break;
                              }
                              return (t.next = 3), this.fetchFeaturedImageId();
                            case 3:
                              e = t.sent;
                            case 4:
                              if (!this.isValidMediaId(e) || !e) {
                                t.next = 10;
                                break;
                              }
                              return (t.next = 7), this.fetchWpMedia(e);
                            case 7:
                              (this._featuredImage = t.sent), (t.next = 11);
                              break;
                            case 10:
                              this._featuredImage = !1;
                            case 11:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return o.apply(this, arguments);
                }),
            },
            {
              key: "fetchFeaturedImageId",
              value:
                ((i = dn(
                  ln().mark(function t() {
                    var e;
                    return ln().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e = null),
                              (t.next = 3),
                              c()({
                                path: "/rankmath/v1/getFeaturedImageId",
                                method: "POST",
                                data: {
                                  postId: Object(ot.get)(
                                    ETBuilderBackendDynamic,
                                    "postId",
                                    0
                                  ),
                                },
                              }).then(function (t) {
                                return (e = !!t.success && t.featImgId);
                              })
                            );
                          case 3:
                            return t.abrupt("return", e);
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )),
                function () {
                  return i.apply(this, arguments);
                }),
            },
            {
              key: "fetchWpMedia",
              value:
                ((a = dn(
                  ln().mark(function t(e) {
                    var r;
                    return ln().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (r = {}),
                              (t.next = 3),
                              c()({
                                path: "/wp/v2/media/".concat(e),
                                method: "GET",
                              }).then(function (t) {
                                return (r = t);
                              })
                            );
                          case 3:
                            return t.abrupt("return", r);
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )),
                function (t) {
                  return a.apply(this, arguments);
                }),
            },
            {
              key: "isValidMediaId",
              value: function (t) {
                return "number" == typeof t && 0 < t;
              },
            },
            {
              key: "subscribeToDivi",
              value: function () {
                var t = this;
                this.setTitle(
                  Object(ot.get)(ETBuilderBackendDynamic, "postTitle", "")
                ),
                  this.setExcerpt(
                    Object(ot.get)(
                      ETBuilderBackendDynamic,
                      "postMeta.post_excerpt",
                      ""
                    )
                  ),
                  this.setFeaturedImage(
                    Object(ot.get)(
                      ETBuilderBackendDynamic,
                      "currentPage.thumbnailId",
                      0
                    )
                  ),
                  Object(u.dispatch)("rank-math").updatePermalink(
                    rankMath.postName
                  ),
                  (this.subscriber = Object(ot.debounce)(this.refresh, 500)),
                  Object(u.subscribe)(this.subscriber),
                  E()(".et-fb-page-settings-bar")
                    .find(".et-fb-button--save-draft, .et-fb-button--publish")
                    .on("click", function () {
                      setTimeout(function () {
                        t.savePost(), t.saveRedirection(), t.saveSchemas();
                      }, 500);
                    }),
                  Object(p.addFilter)(
                    "et.builder.store.setting.update",
                    "rank-math",
                    function (e, r) {
                      if (e)
                        switch (r) {
                          case "et_pb_post_settings_title":
                            t.setTitle(e), t.subscriber();
                            break;
                          case "et_pb_post_settings_excerpt":
                            t.setExcerpt(e), t.subscriber();
                            break;
                          case "et_pb_post_settings_image":
                            t.setFeaturedImage(parseInt(e)), t.subscriber();
                        }
                      return e;
                    }
                  ),
                  window.addEventListener("message", function (e) {
                    "et_fb_section_content_change" === e.data.etBuilderEvent &&
                      t.subscriber();
                  });
              },
            },
            {
              key: "refresh",
              value: function () {
                var t = un({}, this._data);
                (this._data = this.collectPostData()),
                  this.handleEditorChange(t),
                  !Object(ot.isEqual)(t, this._data) &&
                    t.id &&
                    Object(u.dispatch)("rank-math").refreshResults();
              },
            },
            {
              key: "savePost",
              value: function () {
                var t = Object(u.select)("rank-math").getDirtyMetadata();
                Object(ot.isEmpty)(t) ||
                  (c()({
                    method: "POST",
                    path: "/rankmath/v1/updateMeta",
                    data: {
                      objectID: rankMath.objectID,
                      objectType: rankMath.objectType,
                      meta: t,
                    },
                  }).then(function (t) {
                    Object(ot.isString)(t.slug) &&
                      Object(u.dispatch)("rank-math").updatePermalink(t.slug),
                      Object(p.doAction)("rank_math_metadata_updated", t);
                  }),
                  Object(u.dispatch)("rank-math").resetDirtyMetadata());
              },
            },
            {
              key: "saveRedirection",
              value: function () {
                var t = Object(u.select)("rank-math").getRedirectionItem();
                Object(ot.isEmpty)(t) ||
                  ((t.objectID = this.getPostID()),
                  (t.redirectionSources = this.getPermalink()),
                  c()({
                    method: "POST",
                    path: "/rankmath/v1/updateRedirection",
                    data: t,
                  }).then(function (t) {
                    "delete" === t.action
                      ? Object(u.dispatch)("rank-math").updateRedirection(
                          "redirectionID",
                          0
                        )
                      : "new" === t.action &&
                        Object(u.dispatch)("rank-math").updateRedirection(
                          "redirectionID",
                          t.id
                        );
                  }),
                  Object(u.dispatch)("rank-math").resetRedirection());
              },
            },
            {
              key: "saveSchemas",
              value: function () {
                var t = Object(u.select)("rank-math").getSchemas();
                if (
                  !Object(ot.isEmpty)(t) &&
                  !Object(ot.isEqual)(
                    t,
                    Object(ot.get)(rankMath, "schemas", {})
                  )
                ) {
                  var e = Object(u.select)("rank-math").getEditSchemas();
                  c()({
                    method: "POST",
                    path: "/rankmath/v1/updateSchemas",
                    data: {
                      objectID: rankMath.objectID,
                      objectType: rankMath.objectType,
                      schemas: t,
                    },
                  }).then(function (r) {
                    if (Object(ot.isEmpty)(r))
                      Object(u.dispatch)("rank-math").updateSchemas(t);
                    else {
                      var n = un({}, t),
                        a = un({}, e);
                      Object(ot.map)(r, function (t, e) {
                        (n["schema-" + t] = un({}, n[e])),
                          (a["schema-" + t] = un({}, a[e])),
                          delete n[e],
                          delete a[e];
                      }),
                        Object(u.dispatch)("rank-math").updateSchemas(n),
                        Object(u.dispatch)("rank-math").updateEditSchemas(a);
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
                if (Object(ot.isInteger)(t.id))
                  return this.initialize
                    ? void Object(ot.forEach)(r, function (r, n) {
                        e._data[n] !== t[n] && e[r](e._data[n]);
                      })
                    : ((this.initialize = !0),
                      Object(ot.forEach)(r, function (t, r) {
                        e[t](e._data[r]);
                      }),
                      void rankMathEditor.refresh("init"));
                Object(u.dispatch)("rank-math").refreshResults();
              },
            },
            {
              key: "handleIDChange",
              value: function (t) {
                Object(u.dispatch)("rank-math").updatePostID(t),
                  Object(u.dispatch)("rank-math").toggleLoaded(!0);
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
                x.setVariable("title", t),
                  Object(u.dispatch)("rank-math").updateSerpTitle(
                    Object(u.select)("rank-math").getTitle()
                  ),
                  rankMathEditor.refresh("title");
              },
            },
            {
              key: "handleExcerptChange",
              value: function (t) {
                x.setVariable("excerpt", t),
                  x.setVariable("excerpt_only", t),
                  x.setVariable("wc_shortdesc", t),
                  x.setVariable("seo_description", t),
                  Object(u.dispatch)("rank-math").updateSerpDescription(
                    Object(u.select)("rank-math").getDescription()
                  );
              },
            },
            {
              key: "handleFeaturedImageChange",
              value: function (t) {
                Object(u.dispatch)("rank-math").updateFeaturedImage(t),
                  rankMathEditor.refresh("featuredImage");
              },
            },
            {
              key: "handleContentChange",
              value: function () {
                Object(u.dispatch)("rank-math").updateSerpDescription(
                  Object(u.select)("rank-math").getDescription()
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
          ]),
          r && fn(e.prototype, r),
          n && fn(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })(),
      mn = hn,
      gn = r(9),
      yn = r.n(gn),
      bn = function () {
        return wp.element.createElement(
          "span",
          {
            className: "rank-math-rm-modal-toggle-button-icon",
            style: {
              display: "block",
              fill: "rgb(255, 255, 255)",
              width: "0px",
              height: "0px",
              marginTop: "-10px",
              marginLeft: "-1px",
            },
          },
          wp.element.createElement(
            "svg",
            {
              viewBox: "0 0 462.03 462.03",
              xmlns: "http://www.w3.org/2000/svg",
              width: "20",
            },
            wp.element.createElement(
              "g",
              null,
              wp.element.createElement("path", {
                d: "m462 234.84-76.17 3.43 13.43 21-127 81.18-126-52.93-146.26 60.97 10.14 24.34 136.1-56.71 128.57 54 138.69-88.61 13.43 21z",
              }),
              wp.element.createElement("path", {
                d: "m54.1 312.78 92.18-38.41 4.49 1.89v-54.58h-96.67zm210.9-223.57v235.05l7.26 3 89.43-57.05v-181zm-105.44 190.79 96.67 40.62v-165.19h-96.67z",
              })
            )
          )
        );
      },
      vn = function () {
        return wp.element.createElement(
          "button",
          {
            type: "button",
            "data-tip": "Rank Math SEO",
            onClick: function () {
              Object(u.dispatch)("rank-math").toggleIsDiviRankMathModalActive(
                !Object(u.select)("rank-math").isDiviRankMathModalActive()
              );
            },
            className: yn()(
              "rank-math-rm-modal-toggle-button",
              "et_fb_ignore_iframe",
              "et-fb-button",
              "et-fb-button--elevate",
              "et-fb-button--primary",
              "et-fb-button--round",
              "et-fb-button--Tooltip"
            ),
            style: { width: "40px", height: "40px" },
          },
          wp.element.createElement(bn, null)
        );
      },
      wn = function () {
        return wp.element.createElement(
          "div",
          { className: "rank-math-rm-settings-bar" },
          wp.element.createElement(vn, null)
        );
      };
    function kn(t, e) {
      var r =
        ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
      if (!r) {
        if (
          Array.isArray(t) ||
          (r = (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return _n(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return _n(t, e);
          })(t)) ||
          (e && t && "number" == typeof t.length)
        ) {
          r && (t = r);
          var n = 0,
            a = function () {};
          return {
            s: a,
            n: function () {
              return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
            },
            e: function (t) {
              throw t;
            },
            f: a,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var i,
        o = !0,
        c = !1;
      return {
        s: function () {
          r = r.call(t);
        },
        n: function () {
          var t = r.next();
          return (o = t.done), t;
        },
        e: function (t) {
          (c = !0), (i = t);
        },
        f: function () {
          try {
            o || null == r.return || r.return();
          } finally {
            if (c) throw i;
          }
        },
      };
    }
    function _n(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    var On = {
        init: function () {
          this.cacheProps(),
            this.toggleBodyClasses(),
            this.initSettingsBar(),
            this.addEventListeners();
        },
        cacheProps: function () {
          (this.$document = E()(document)),
            (this.$body = E()("body")),
            (this.rmModalHiddingTimer = null),
            (this.rmPrevModalActiveState = !1),
            (this.rmSettingsBarMediaQuery =
              window.matchMedia("(min-width: 768px)")),
            (this.rmSettingsBarRootSelector =
              "#rank-math-rm-settings-bar-root"),
            (this.$rmSettingsBarRoot = E()(
              this.rmSettingsBarRootSelector
            ).detach()),
            (this.$etPageSettingsBar = E()(".et-fb-page-settings-bar")),
            (this.$etPageSettingsBarToggleButton = this.$etPageSettingsBar.find(
              ".et-fb-page-settings-bar__toggle-button"
            )),
            (this.$etPageSettingsBarColumn = this.$etPageSettingsBar.find(
              ".et-fb-page-settings-bar__column"
            )),
            (this.etSettingsBarObserver = new MutationObserver(
              this.onEtSettingsBarClassAttrChange.bind(this)
            ));
        },
        toggleBodyClasses: function () {
          var t = this.isEtSettingsBarActive();
          this.$body.toggleClass("rank-math-et-settings-bar-is-active", t),
            this.$body.toggleClass("rank-math-et-settings-bar-is-inactive", !t);
        },
        initSettingsBar: function () {
          var t = this.getEtSettingsBarPosition();
          this.onRmSettingsBarMediaQueryChange(),
            Object(l.render)(
              Object(l.createElement)(wn),
              this.$rmSettingsBarRoot[0]
            ),
            this.removePositionalClassNames(
              this.$body,
              "rank-math-et-settings-bar-is"
            ),
            this.$body.addClass("rank-math-et-settings-bar-is-".concat(t)),
            this.attachRmSettingsBar(t);
        },
        addEventListeners: function () {
          this.$document.on("click", this.onDocumentClick.bind(this)),
            this.rmSettingsBarMediaQuery.addListener(
              this.onRmSettingsBarMediaQueryChange.bind(this)
            ),
            this.etSettingsBarObserver.observe(this.$etPageSettingsBar[0], {
              attributeFilter: ["class"],
            });
        },
        onDocumentClick: function (t) {
          this.hideModalOnOutsideClick(t.target);
        },
        onRmSettingsBarMediaQueryChange: function () {
          this.detachRmSettingsBar(),
            this.attachRmSettingsBar(this.getEtSettingsBarPosition());
        },
        onEtSettingsBarClassAttrChange: function () {
          var t = this.isEtSettingsBarActive(),
            e = this.getEtSettingsBarPosition();
          this.removePositionalClassNames(
            this.$body,
            "rank-math-et-settings-bar-is"
          ),
            this.$body.addClass("rank-math-et-settings-bar-is-".concat(e)),
            Object(u.dispatch)("rank-math").toggleIsDiviPageSettingsBarActive(
              t
            ),
            this.toggleBodyClasses(),
            this.detachRmSettingsBar(),
            this.isEtSettingsBarDragged()
              ? ((this.rmPrevModalActiveState = Object(u.select)(
                  "rank-math"
                ).isDiviRankMathModalActive()),
                this.rmPrevModalActiveState &&
                  (this.rmModalHiddingTimer = setTimeout(function () {
                    Object(u.dispatch)(
                      "rank-math"
                    ).toggleIsDiviRankMathModalActive(!1);
                  }, 200)))
              : (clearTimeout(this.rmModalHiddingTimer),
                this.attachRmSettingsBar(e),
                Object(u.dispatch)("rank-math").toggleIsDiviRankMathModalActive(
                  this.rmPrevModalActiveState ||
                    Object(u.select)("rank-math").isDiviRankMathModalActive()
                ),
                (this.rmPrevModalActiveState = !1));
        },
        attachRmSettingsBar: function (t) {
          this.isRmSettingsBarAttached() ||
            (this.toggleRmSettingsBarClassNames(t),
            this.isEtSettingsBarActive()
              ? this.rmSettingsBarMediaQuery.matches
                ? this.$etPageSettingsBarColumn
                    .filter(".et-fb-page-settings-bar__column--main")
                    .append(this.$rmSettingsBarRoot)
                : this.$etPageSettingsBarColumn
                    .filter(".et-fb-page-settings-bar__column--left")
                    .prepend(this.$rmSettingsBarRoot)
              : this.$etPageSettingsBarToggleButton.after(
                  this.$rmSettingsBarRoot
                ));
        },
        detachRmSettingsBar: function () {
          this.isRmSettingsBarAttached() &&
            (this.$rmSettingsBarRoot = this.$etPageSettingsBar
              .find(this.rmSettingsBarRootSelector)
              .detach());
        },
        toggleRmSettingsBarClassNames: function (t) {
          this.removePositionalClassNames(this.$rmSettingsBarRoot),
            this.$rmSettingsBarRoot.addClass(
              "rank-math-rm-settings-bar-root-".concat(t)
            ),
            this.$rmSettingsBarRoot.toggleClass(
              [
                "rank-math-rm-settings-bar-root-is-mobile",
                "rank-math-rm-settings-bar-root-is-mobile-".concat(t),
              ].join(" "),
              !this.rmSettingsBarMediaQuery.matches
            ),
            this.$rmSettingsBarRoot.toggleClass(
              [
                "rank-math-rm-settings-bar-root-is-desktop",
                "rank-math-rm-settings-bar-root-is-desktop-".concat(t),
              ].join(" "),
              this.rmSettingsBarMediaQuery.matches
            );
        },
        isRmSettingsBarAttached: function () {
          return E.a.contains(
            document.documentElement,
            this.$rmSettingsBarRoot[0]
          );
        },
        isEtSettingsBarActive: function () {
          return this.$etPageSettingsBar.hasClass(
            "et-fb-page-settings-bar--active"
          );
        },
        isEtSettingsBarDragged: function () {
          return (
            this.$etPageSettingsBar.hasClass(
              "et-fb-page-settings-bar--dragged"
            ) && !this.isEtSettingsBarActive()
          );
        },
        removePositionalClassNames: function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            r = [
              "".concat(e, "-left"),
              "".concat(e, "-right"),
              "".concat(e, "-top"),
              "".concat(e, "-top-left"),
              "".concat(e, "-top-right"),
              "".concat(e, "-bottom"),
              "".concat(e, "-bottom-left"),
              "".concat(e, "-bottom-right"),
            ].join("|"),
            n = new RegExp("(".concat(r, ")$"), "gim");
          t.removeClass(function (t, e) {
            var r,
              a = [],
              i = kn(e.split(" "));
            try {
              for (i.s(); !(r = i.n()).done; ) {
                var o = r.value;
                n.test(o) && a.push(o);
              }
            } catch (t) {
              i.e(t);
            } finally {
              i.f();
            }
            return a;
          });
        },
        getEtSettingsBarPosition: function () {
          var t = this.$etPageSettingsBar;
          return t.hasClass("et-fb-page-settings-bar--horizontal") &&
            !t.hasClass("et-fb-page-settings-bar--top")
            ? "bottom"
            : t.hasClass("et-fb-page-settings-bar--top") &&
              !t.hasClass("et-fb-page-settings-bar--corner")
            ? "top"
            : t.hasClass("et-fb-page-settings-bar--bottom-corner")
            ? t.hasClass("et-fb-page-settings-bar--left-corner")
              ? "bottom-left"
              : "bottom-right"
            : t.hasClass("et-fb-page-settings-bar--top-corner")
            ? t.hasClass("et-fb-page-settings-bar--left-corner")
              ? "top-left"
              : "top-right"
            : t.hasClass("et-fb-page-settings-bar--vertical--right")
            ? "right"
            : t.hasClass("et-fb-page-settings-bar--vertical--left")
            ? "left"
            : "";
        },
        hideModalOnOutsideClick: function (t) {
          if (Object(u.select)("rank-math").isDiviRankMathModalActive()) {
            var e = ".rank-math-rm-modal";
            E()(t).parents(e) ||
              t.closest(
                ".components-modal__screen-overlay.rank-math-modal-overlay"
              ) ||
              t.closest(".rank-math-rm-modal-toggle-button") ||
              t.contains(document.querySelector(e)) ||
              Object(u.dispatch)("rank-math").toggleIsDiviRankMathModalActive(
                !1
              );
          }
        },
      },
      Sn = Object(u.withSelect)(function (t) {
        return { primaryTermId: t("rank-math").getPrimaryTermID() };
      })(function (t) {
        var e = t.taxonomySlug,
          r = t.primaryTermId,
          n = t.options;
        if (n.length < 2 || !e) return null;
        return wp.element.createElement(d.SelectControl, {
          className: "rank-math-primary-term-select",
          label: Object(qt.__)("Select Primary Term", "rank-math"),
          value: r,
          options: n,
          onChange: function (t) {
            Object(u.dispatch)("rank-math").updatePrimaryTermID(parseInt(t), e);
          },
        });
      });
    function jn(t) {
      return (
        (jn =
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
        jn(t)
      );
    }
    function Tn() {
      Tn = function () {
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
          o = new O(n || []);
        return (
          (i._invoke = (function (t, e, r) {
            var n = "suspendedStart";
            return function (a, i) {
              if ("executing" === n)
                throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === a) throw i;
                return j();
              }
              for (r.method = a, r.arg = i; ; ) {
                var o = r.delegate;
                if (o) {
                  var c = w(o, r);
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
      var m = Object.getPrototypeOf,
        g = m && m(m(S([])));
      g && g !== e && r.call(g, a) && (h = g);
      var y = (f.prototype = p.prototype = Object.create(h));
      function b(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function v(t, e) {
        function n(a, i, o, c) {
          var u = s(t[a], t, i);
          if ("throw" !== u.type) {
            var l = u.arg,
              p = l.value;
            return p && "object" == jn(p) && r.call(p, "__await")
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
      function w(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              w(t, e),
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
      function k(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function _(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function O(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(k, this),
          this.reset(!0);
      }
      function S(t) {
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
        return { next: j };
      }
      function j() {
        return { value: void 0, done: !0 };
      }
      return (
        (d.prototype = f),
        c(y, "constructor", f),
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
            (t.prototype = Object.create(y)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        b(v.prototype),
        c(v.prototype, i, function () {
          return this;
        }),
        (t.AsyncIterator = v),
        (t.async = function (e, r, n, a, i) {
          void 0 === i && (i = Promise);
          var o = new v(u(e, r, n, a), i);
          return t.isGeneratorFunction(r)
            ? o
            : o.next().then(function (t) {
                return t.done ? t.value : o.next();
              });
        }),
        b(y),
        c(y, o, "Generator"),
        c(y, a, function () {
          return this;
        }),
        c(y, "toString", function () {
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
        (t.values = S),
        (O.prototype = {
          constructor: O,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(_),
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
                return this.complete(r.completion, r.afterLoc), _(r), l;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var a = n.arg;
                  _(r);
                }
                return a;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: S(t), resultName: e, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          },
        }),
        t
      );
    }
    function Dn(t, e, r, n, a, i, o) {
      try {
        var c = t[i](o),
          u = c.value;
      } catch (t) {
        return void r(t);
      }
      c.done ? e(u) : Promise.resolve(u).then(n, a);
    }
    function In(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, a) {
          var i = t.apply(e, r);
          function o(t) {
            Dn(i, n, a, o, c, "next", t);
          }
          function c(t) {
            Dn(i, n, a, o, c, "throw", t);
          }
          o(void 0);
        });
      };
    }
    function Pn(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var En = (function () {
      function t() {
        var e = this;
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          E()(document).on(
            "click",
            ".et-fb-button--toggle-setting",
            function () {
              clearTimeout(e.initRecursionTimer),
                (e.attemptsRun = 0),
                e.init.call(e);
            }
          );
      }
      var e, r, n, a, i;
      return (
        (e = t),
        (r = [
          {
            key: "init",
            value:
              ((i = In(
                Tn().mark(function t() {
                  return Tn().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (void 0 !== this.hasPostPrimaryTaxonomySupport) {
                              t.next = 3;
                              break;
                            }
                            return (t.next = 3), this.cacheTaxonomyData();
                          case 3:
                            if (this.hasPostPrimaryTaxonomySupport) {
                              t.next = 5;
                              break;
                            }
                            return t.abrupt("return");
                          case 5:
                            if (
                              (this.attemptsRun++,
                              !(this.attemptsRun > this.maxAttempts))
                            ) {
                              t.next = 8;
                              break;
                            }
                            return t.abrupt("return");
                          case 8:
                            this.cacheDom()
                              ? (this.renderContainer(),
                                this.renderComponent(),
                                this.bindEvents())
                              : (this.initRecursionTimer = setTimeout(
                                  this.init.bind(this),
                                  this.attemptInterval
                                ));
                          case 10:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              )),
              function () {
                return i.apply(this, arguments);
              }),
          },
          {
            key: "cacheTaxonomyData",
            value:
              ((a = In(
                Tn().mark(function t() {
                  var e,
                    r,
                    n = this;
                  return Tn().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e =
                                Object(ot.get)(
                                  rankMath,
                                  "assessor.primaryTaxonomy.name"
                                ) || ""),
                              (r = Object(ot.get)(
                                ETBuilderBackendDynamic,
                                "getTaxonomies",
                                {}
                              )),
                              (this.primaryTaxonomyTerms = r[e] || []),
                              (t.next = 4),
                              c()({ path: "/wp/v2/taxonomies" }).then(function (
                                t
                              ) {
                                n.primaryTaxonomy =
                                  Object.keys(r).includes(e) && t[e]
                                    ? t[e]
                                    : {};
                              })
                            );
                          case 4:
                            (this.hasPostPrimaryTaxonomySupport =
                              !E.a.isEmptyObject(this.primaryTaxonomy)),
                              (this.primaryTaxonomyValue = Object(ot.get)(
                                ETBuilderBackendDynamic,
                                "pageSettingsValues.et_pb_post_settings_".concat(
                                  this.primaryTaxonomy.rest_base
                                ),
                                ""
                              ));
                          case 6:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              )),
              function () {
                return a.apply(this, arguments);
              }),
          },
          {
            key: "cacheDom",
            value: function () {
              return (
                (this.$diviSettingsModal = E()(document).find(
                  ".et-fb-modal__page-settings"
                )),
                !!this.$diviSettingsModal.length &&
                  ((this.$diviTermSettingInputs = this.$diviSettingsModal.find(
                    ".et-fb-option--".concat(this.primaryTaxonomy.rest_base)
                  )),
                  (this.$diviTermSettingArea =
                    this.$diviTermSettingInputs.parents(".et-fb-form__group")),
                  this.$diviTermSettingArea.length ||
                    (this.$diviTermSettingArea =
                      this.workaroundForFalseDiviTaxonomySelector()),
                  (this.$PrimaryTermSelectContainer = E()(
                    '<div id="rank-math-primary-term-input" />'
                  )),
                  !0)
              );
            },
          },
          {
            key: "workaroundForFalseDiviTaxonomySelector",
            value: function () {
              var t = this.primaryTaxonomy.name.toLowerCase();
              return this.$diviSettingsModal
                .find(".et-fb-form__label-text")
                .filter(function (e, r) {
                  return E()(r).text().toLowerCase() === t;
                })
                .parents(".et-fb-form__group");
            },
          },
          {
            key: "renderContainer",
            value: function () {
              this.$diviTermSettingArea.after(this.$PrimaryTermSelectContainer);
            },
          },
          {
            key: "renderComponent",
            value: function (t) {
              var e = {
                taxonomySlug: this.primaryTaxonomy.slug,
                options: this.formatActiveTerms(t),
              };
              Object(l.render)(
                Object(l.createElement)(Sn, e),
                this.$PrimaryTermSelectContainer[0]
              );
            },
          },
          {
            key: "bindEvents",
            value: function () {
              var t = this;
              Object(p.addFilter)(
                "et.builder.store.setting.update",
                "rank-math",
                function (e, r) {
                  return (
                    "et_pb_post_settings_".concat(
                      t.primaryTaxonomy.rest_base
                    ) === r && t.renderComponent(e),
                    e
                  );
                }
              );
            },
          },
          {
            key: "formatActiveTerms",
            value: function () {
              var t = this,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.primaryTaxonomyValue;
              return this.primaryTaxonomyTerms.length && e.trim()
                ? e.split(",").map(function (e) {
                    var r =
                      Object(ot.find)(t.primaryTaxonomyTerms, [
                        "term_id",
                        parseInt(e),
                      ]) || {};
                    return { label: r.name, value: r.term_id };
                  })
                : [];
            },
          },
        ]),
        r && Pn(e.prototype, r),
        n && Pn(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    (En.initRecursionTimer = void 0),
      (En.attemptsRun = 0),
      (En.maxAttempts = 10),
      (En.attemptInterval = 1e3);
    var An = ["className", "children"];
    function xn() {
      return (
        (xn = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }),
        xn.apply(this, arguments)
      );
    }
    function Mn(t, e) {
      if (null == t) return {};
      var r,
        n,
        a = (function (t, e) {
          if (null == t) return {};
          var r,
            n,
            a = {},
            i = Object.keys(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]), e.indexOf(r) >= 0 || (a[r] = t[r]);
          return a;
        })(t, e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++)
          (r = i[n]),
            e.indexOf(r) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(t, r) &&
                (a[r] = t[r]));
      }
      return a;
    }
    var Cn = function (t) {
        var e = t.className,
          r = t.children,
          n = Mn(t, An),
          a = yn()("rank-math-rm-modal-button", e);
        return wp.element.createElement(
          "button",
          xn({ type: "button", className: a }, n),
          r
        );
      },
      Rn = function () {
        return wp.element.createElement(
          "div",
          {
            className: "et-fb-icon et-fb-icon--close",
            style: {
              fill: "rgb(255, 255, 255)",
              width: "28px",
              minWidth: "28px",
              height: "28px",
              margin: "-6px",
            },
          },
          wp.element.createElement(
            "svg",
            {
              viewBox: "0 0 28 28",
              preserveAspectRatio: "xMidYMid meet",
              shapeRendering: "geometricPrecision",
            },
            wp.element.createElement(
              "g",
              null,
              wp.element.createElement("path", {
                d: "M15.59 14l4.08-4.082a1.124 1.124 0 0 0-1.587-1.588L14 12.411 9.918 8.329A1.124 1.124 0 0 0 8.33 9.92L12.411 14l-4.082 4.082a1.124 1.124 0 0 0 1.59 1.589L14 15.589l4.082 4.082a1.124 1.124 0 0 0 1.589-1.59L15.589 14h.001z",
                fillRule: "evenodd",
              })
            )
          )
        );
      },
      Bn = function () {
        var t = yn()("rank-math-rm-modal-header-discard-button");
        return wp.element.createElement(
          Cn,
          {
            className: t,
            onClick: function () {
              Object(u.dispatch)("rank-math").toggleIsDiviRankMathModalActive(
                !1
              );
            },
          },
          wp.element.createElement(Rn, null)
        );
      },
      Un = function () {
        var t = yn()("rank-math-rm-modal-header");
        return wp.element.createElement(
          "header",
          { className: t },
          wp.element.createElement(
            "div",
            { className: "rank-math-rm-modal-header" },
            wp.element.createElement(
              "div",
              { className: "rank-math-rm-modal-header-title" },
              "Rank Math SEO"
            ),
            wp.element.createElement(
              "ul",
              { className: "rank-math-rm-modal-header-options" },
              wp.element.createElement(
                "li",
                { className: "rank-math-rm-modal-header-option" },
                wp.element.createElement(Bn, null)
              )
            )
          )
        );
      },
      Fn = function (t) {
        var e = t.children,
          r = yn()("rank-math-rm-modal-content", "rank-math-sidebar-panel");
        return wp.element.createElement("div", { className: r }, e);
      },
      Ln = Object(u.withSelect)(function (t) {
        return { rmUiActive: (0, t("rank-math").isDiviRankMathModalActive)() };
      })(function (t) {
        var e = t.rmUiActive,
          r = yn()("rank-math-rm-modal", {
            "rank-math-rm-modal-is-hidden": !e,
          }),
          n = yn()("rank-math-rm-modal-inner");
        return wp.element.createElement(
          "div",
          { className: r },
          wp.element.createElement(
            "div",
            { className: n },
            wp.element.createElement(Un, null),
            wp.element.createElement(
              Fn,
              null,
              Object(p.applyFilters)("rank_math_app", {})()
            )
          )
        );
      }),
      Nn = Object(d.withFilters)("rankMath.diviAppModal")(Ln),
      $n = function () {
        return wp.element.createElement(
          d.SlotFillProvider,
          null,
          wp.element.createElement(
            "div",
            { className: "rank-math-rm-app" },
            wp.element.createElement(Nn, null)
          )
        );
      };
    function Hn(t) {
      return (
        (Hn =
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
        Hn(t)
      );
    }
    function Kn(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function Gn(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function zn() {
      return (
        (zn =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, r) {
                var n = Vn(t, e);
                if (n) {
                  var a = Object.getOwnPropertyDescriptor(n, e);
                  return a.get
                    ? a.get.call(arguments.length < 3 ? t : r)
                    : a.value;
                }
              }),
        zn.apply(this, arguments)
      );
    }
    function Vn(t, e) {
      for (
        ;
        !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Yn(t));

      );
      return t;
    }
    function qn(t, e) {
      return (
        (qn = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        qn(t, e)
      );
    }
    function Qn(t) {
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
          n = Yn(t);
        if (e) {
          var a = Yn(this).constructor;
          r = Reflect.construct(n, arguments, a);
        } else r = n.apply(this, arguments);
        return Wn(this, r);
      };
    }
    function Wn(t, e) {
      if (e && ("object" === Hn(e) || "function" == typeof e)) return e;
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
    function Yn(t) {
      return (
        (Yn = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        Yn(t)
      );
    }
    var Jn = function () {
        return s.MediaUpload;
      },
      Xn = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && qn(t, e);
        })(i, t);
        var e,
          r,
          n,
          a = Qn(i);
        function i() {
          return Kn(this, i), a.apply(this, arguments);
        }
        return (
          (e = i),
          (r = [
            {
              key: "setup",
              value: function (t) {
                c.a.use(c.a.createRootURLMiddleware(rankMath.api.root)),
                  c.a.use(c.a.createNonceMiddleware(rankMath.restNonce)),
                  (this.registerSlots = this.registerSlots.bind(this)),
                  Object(p.addAction)(
                    "rank_math_loaded",
                    "rank-math",
                    this.registerSlots,
                    0
                  ),
                  Object(p.addFilter)(
                    "editor.MediaUpload",
                    "rank-math/replace-media-upload",
                    Jn
                  ),
                  zn(Yn(i.prototype), "setup", this).call(this, t);
              },
            },
            {
              key: "registerSlots",
              value: function () {
                (this.RankMathAfterEditor = y),
                  (this.RankMathAfterFocusKeyword = D),
                  (this.RankMathAdvancedTab = _),
                  (this.slots = {
                    AfterEditor: y,
                    AfterFocusKeyword: D,
                    AdvancedTab: _,
                  });
              },
            },
            {
              key: "updatePermalink",
              value: function (t) {
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
          ]) && Gn(e.prototype, r),
          n && Gn(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          i
        );
      })(an);
    window.addEventListener("message", function (t) {
      "et_builder_api_ready" === t.data.etBuilderEvent &&
        ((window.rankMathEditor = new Xn()),
        (window.rankMathGutenberg = window.rankMathEditor),
        window.rankMathEditor.setup(new mn()),
        On.init(),
        new En(),
        Object(l.render)(
          Object(l.createElement)($n),
          document.getElementById("rank-math-rm-app-root")
        ),
        Object(u.dispatch)("rank-math").refreshResults());
    });
  },
  7: function (t, e) {
    t.exports = wp.element;
  },
  8: function (t, e) {
    t.exports = wp.components;
  },
  9: function (t, e, r) {
    var n;
    !(function () {
      "use strict";
      var r = {}.hasOwnProperty;
      function a() {
        for (var t = [], e = 0; e < arguments.length; e++) {
          var n = arguments[e];
          if (n) {
            var i = typeof n;
            if ("string" === i || "number" === i) t.push(n);
            else if (Array.isArray(n)) {
              if (n.length) {
                var o = a.apply(null, n);
                o && t.push(o);
              }
            } else if ("object" === i)
              if (n.toString === Object.prototype.toString)
                for (var c in n) r.call(n, c) && n[c] && t.push(c);
              else t.push(n.toString());
          }
        }
        return t.join(" ");
      }
      t.exports
        ? ((a.default = a), (t.exports = a))
        : void 0 ===
            (n = function () {
              return a;
            }.apply(e, [])) || (t.exports = n);
    })();
  },
});
