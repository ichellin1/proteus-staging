(async () => {
  var _a2, _b2;
  (function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
    new MutationObserver((n) => {
      for (const a of n) if (a.type === "childList") for (const o of a.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function t(n) {
      const a = {};
      return n.integrity && (a.integrity = n.integrity), n.referrerPolicy && (a.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? a.credentials = "include" : n.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
    }
    function r(n) {
      if (n.ep) return;
      n.ep = true;
      const a = t(n);
      fetch(n.href, a);
    }
  })();
  const cr = "" + new URL("proteus_sdk_web_bg-D4O_DjCW.wasm", import.meta.url).href, G_ = async (_ = {}, e) => {
    let t;
    if (e.startsWith("data:")) {
      const r = e.replace(/^data:.*?base64,/, "");
      let n;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") n = Buffer.from(r, "base64");
      else if (typeof atob == "function") {
        const a = atob(r);
        n = new Uint8Array(a.length);
        for (let o = 0; o < a.length; o++) n[o] = a.charCodeAt(o);
      } else throw new Error("Cannot decode base64-encoded data URL");
      t = await WebAssembly.instantiate(n, _);
    } else {
      const r = await fetch(e), n = r.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && n.startsWith("application/wasm")) t = await WebAssembly.instantiateStreaming(r, _);
      else {
        const a = await r.arrayBuffer();
        t = await WebAssembly.instantiate(a, _);
      }
    }
    return t.instance.exports;
  };
  let h = class I_ {
    static __wrap(e) {
      const t = Object.create(I_.prototype);
      return t.__wbg_ptr = e, it.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, it.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      f.__wbg_handle_free(e, 0);
    }
    static fromId(e) {
      const t = f.handle_fromId(e);
      return I_.__wrap(t);
    }
    id() {
      return f.handle_id(this.__wbg_ptr);
    }
  };
  Symbol.dispose && (h.prototype[Symbol.dispose] = h.prototype.free);
  let F_ = class {
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ft.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      f.__wbg_proteusapp_free(e, 0);
    }
    addChild(e, t) {
      g(e, h), g(t, h);
      const r = f.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw I(r[0]);
    }
    animateTo(e, t, r) {
      g(e, h);
      const n = f.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw I(n[0]);
    }
    bakeTexture(e, t, r, n) {
      const a = Le(r, f.__wbindgen_malloc), o = V, b = f.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, o, n);
      return Q.__wrap(b);
    }
    bakedImageSize(e) {
      return g(e, h), f.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return g(e, h), f.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bindKey(e, t) {
      const r = j(t, f.__wbindgen_malloc, f.__wbindgen_realloc), n = V, a = f.proteusapp_bindKey(this.__wbg_ptr, e, r, n);
      if (a[1]) throw I(a[0]);
    }
    channelDestroy(e) {
      g(e, ue);
      var t = e.__destroy_into_raw();
      f.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      g(e, ue), g(t, h), g(r, h);
      const o = f.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (o[1]) throw I(o[0]);
    }
    clearFocus() {
      f.proteusapp_clearFocus(this.__wbg_ptr);
    }
    clearGlyphCache() {
      f.proteusapp_clearGlyphCache(this.__wbg_ptr);
    }
    component(e) {
      const t = f.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw I(t[1]);
      return h.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      g(e, h), g(t, h);
      const r = f.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw I(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = f.proteusapp_createVideo(this.__wbg_ptr);
      return de.__wrap(e);
    }
    cropImage(e, t) {
      g(e, h);
      const r = f.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw I(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      g(e, h);
      const r = f.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    declaredGeometry(e) {
      return g(e, h), f.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      g(e, h);
      var t = e.__destroy_into_raw();
      const r = f.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    devices(e) {
      return g(e, h), f.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    expectFont(e, t) {
      const r = j(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = V, a = j(t, f.__wbindgen_malloc, f.__wbindgen_realloc), o = V, b = f.proteusapp_expectFont(this.__wbg_ptr, r, n, a, o);
      if (b[1]) throw I(b[0]);
    }
    focus(e) {
      g(e, h);
      const t = f.proteusapp_focus(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw I(t[0]);
    }
    focused() {
      const e = f.proteusapp_focused(this.__wbg_ptr);
      return e === 0 ? void 0 : h.__wrap(e);
    }
    fontFailed(e) {
      const t = j(e, f.__wbindgen_malloc, f.__wbindgen_realloc), r = V;
      f.proteusapp_fontFailed(this.__wbg_ptr, t, r);
    }
    freeResources(e) {
      g(e, h);
      const t = f.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw I(t[0]);
    }
    get(e) {
      return g(e, h), f.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      g(e, h);
      const t = f.proteusapp_hideVideo(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw I(t[0]);
    }
    inputDevices() {
      return f.proteusapp_inputDevices(this.__wbg_ptr);
    }
    inputMode() {
      let e, t;
      try {
        const r = f.proteusapp_inputMode(this.__wbg_ptr);
        return e = r[0], t = r[1], U(r[0], r[1]);
      } finally {
        f.__wbindgen_free(e, t, 1);
      }
    }
    isFocused(e) {
      return g(e, h), f.proteusapp_isFocused(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    loadFont(e) {
      let t, r;
      try {
        const o = Le(e, f.__wbindgen_malloc), b = V, c = f.proteusapp_loadFont(this.__wbg_ptr, o, b);
        var n = c[0], a = c[1];
        if (c[3]) throw n = 0, a = 0, I(c[2]);
        return t = n, r = a, U(n, a);
      } finally {
        f.__wbindgen_free(t, r, 1);
      }
    }
    loadTexture(e, t) {
      const r = Le(e, f.__wbindgen_malloc), n = V, a = f.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : Q.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      g(e, h);
      const a = Ee(t, f.__wbindgen_malloc), o = V, b = f.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (b[1]) throw I(b[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      g(e, h);
      const o = Ee(t, f.__wbindgen_malloc), b = V, c = f.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, b, r, n, a);
      if (c[1]) throw I(c[0]);
    }
    constructor() {
      const e = f.proteusapp_new();
      return this.__wbg_ptr = e, ft.register(this, this.__wbg_ptr, this), this;
    }
    onAppKey(e) {
      f.proteusapp_onAppKey(this.__wbg_ptr, e);
    }
    onBlur(e, t) {
      g(e, h), f.proteusapp_onBlur(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onClick(e, t) {
      g(e, h), f.proteusapp_onClick(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDrag(e, t) {
      g(e, h), f.proteusapp_onDrag(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDropped(e, t) {
      g(e, ue), f.proteusapp_onDropped(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocus(e, t) {
      g(e, h), f.proteusapp_onFocus(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocusLost(e) {
      f.proteusapp_onFocusLost(this.__wbg_ptr, e);
    }
    onHoverEnter(e, t) {
      g(e, h), f.proteusapp_onHoverEnter(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverExit(e, t) {
      g(e, h), f.proteusapp_onHoverExit(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onKey(e, t) {
      g(e, h), f.proteusapp_onKey(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onPress(e, t) {
      g(e, h), f.proteusapp_onPress(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onRelease(e, t) {
      g(e, h), f.proteusapp_onRelease(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onTransitionComplete(e, t) {
      g(e, h), f.proteusapp_onTransitionComplete(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    pointerLeft() {
      f.proteusapp_pointerLeft(this.__wbg_ptr);
    }
    pointerMoved(e, t) {
      f.proteusapp_pointerMoved(this.__wbg_ptr, e, t);
    }
    pointerPressed() {
      f.proteusapp_pointerPressed(this.__wbg_ptr);
    }
    pointerReleased() {
      f.proteusapp_pointerReleased(this.__wbg_ptr);
    }
    releaseVideo(e) {
      g(e, de), f.proteusapp_releaseVideo(this.__wbg_ptr, e.__wbg_ptr);
    }
    removeChild(e, t) {
      g(e, h), g(t, h);
      const r = f.proteusapp_removeChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw I(r[0]);
    }
    resetKeyMap() {
      f.proteusapp_resetKeyMap(this.__wbg_ptr);
    }
    setDeclaredGeometry(e, t) {
      g(e, h);
      const r = f.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setDefaultFocus(e, t) {
      g(e, h);
      const r = f.proteusapp_setDefaultFocus(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setDevices(e, t) {
      g(e, h);
      const r = f.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setDisabled(e, t) {
      g(e, h);
      const r = f.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setFallbackFonts(e) {
      const t = wt(e, f.__wbindgen_malloc), r = V;
      f.proteusapp_setFallbackFonts(this.__wbg_ptr, t, r);
    }
    setFocusGroup(e, t) {
      g(e, h);
      const r = f.proteusapp_setFocusGroup(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setImage(e, t) {
      g(e, h);
      const r = f.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setInputDevices(e) {
      const t = f.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw I(t[0]);
    }
    setInteractive(e, t) {
      g(e, h);
      const r = f.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setKeyRepeat(e) {
      const t = f.proteusapp_setKeyRepeat(this.__wbg_ptr, e);
      if (t[1]) throw I(t[0]);
    }
    setLongPressMs(e) {
      f.proteusapp_setLongPressMs(this.__wbg_ptr, e);
    }
    setNavigatingActions(e) {
      const t = wt(e, f.__wbindgen_malloc), r = V;
      f.proteusapp_setNavigatingActions(this.__wbg_ptr, t, r);
    }
    setNeighbour(e, t, r) {
      g(e, h);
      const n = j(t, f.__wbindgen_malloc, f.__wbindgen_realloc), a = V, o = f.proteusapp_setNeighbour(this.__wbg_ptr, e.__wbg_ptr, n, a, !z(r), z(r) ? 0 : r);
      if (o[1]) throw I(o[0]);
    }
    setOpacity(e, t) {
      g(e, h);
      const r = f.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setReadingDirection(e) {
      const t = j(e, f.__wbindgen_malloc, f.__wbindgen_realloc), r = V, n = f.proteusapp_setReadingDirection(this.__wbg_ptr, t, r);
      if (n[1]) throw I(n[0]);
    }
    setStyle(e, t, r) {
      g(e, h);
      const n = j(t, f.__wbindgen_malloc, f.__wbindgen_realloc), a = V, o = f.proteusapp_setStyle(this.__wbg_ptr, e.__wbg_ptr, n, a, r);
      if (o[1]) throw I(o[0]);
    }
    setStyleTransition(e, t) {
      g(e, h);
      const r = f.proteusapp_setStyleTransition(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setText(e, t) {
      g(e, h);
      const r = f.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setTexture(e, t) {
      g(e, h), g(t, Q);
      const r = f.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw I(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      g(e, h);
      const r = f.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setVideoCrossfade(e, t) {
      g(e, h);
      const r = f.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw I(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      g(e, h);
      const r = f.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    showVideo(e, t) {
      g(e, h), g(t, de);
      const r = f.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw I(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      g(e, h);
      const a = Ee(t, f.__wbindgen_malloc), o = V, b = f.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (b[1]) throw I(b[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      g(e, h);
      const o = Ee(t, f.__wbindgen_malloc), b = V, c = f.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, b, r, n, a);
      if (c[1]) throw I(c[0]);
    }
    splitToWithStates(e, t, r, n) {
      g(e, h);
      const a = f.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw I(a[0]);
    }
    texture(e) {
      const t = f.proteusapp_texture(this.__wbg_ptr, e);
      return Q.__wrap(t);
    }
    textureState(e) {
      return g(e, Q), f.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
    }
    tick(e) {
      f.proteusapp_tick(this.__wbg_ptr, e);
    }
    transitionChannel(e) {
      const t = f.proteusapp_transitionChannel(this.__wbg_ptr, !z(e), z(e) ? 0 : e);
      return ue.__wrap(t);
    }
    unbindKey(e) {
      const t = f.proteusapp_unbindKey(this.__wbg_ptr, e);
      if (t[3]) throw I(t[2]);
      let r;
      return t[0] !== 0 && (r = U(t[0], t[1]).slice(), f.__wbindgen_free(t[0], t[1] * 1, 1)), r;
    }
    uploadVideoFrame(e, t, r, n) {
      g(e, de);
      const a = Le(n, f.__wbindgen_malloc), o = V;
      return f.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, o) !== 0;
    }
  };
  Symbol.dispose && (F_.prototype[Symbol.dispose] = F_.prototype.free);
  let Q = class D_ {
    static __wrap(e) {
      const t = Object.create(D_.prototype);
      return t.__wbg_ptr = e, ut.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ut.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      f.__wbg_texturehandle_free(e, 0);
    }
    static fromId(e) {
      const t = f.texturehandle_fromId(e);
      return D_.__wrap(t);
    }
    id() {
      return f.texturehandle_id(this.__wbg_ptr);
    }
  };
  Symbol.dispose && (Q.prototype[Symbol.dispose] = Q.prototype.free);
  let ue = class kt {
    static __wrap(e) {
      const t = Object.create(kt.prototype);
      return t.__wbg_ptr = e, dt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, dt.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      f.__wbg_transitionchannel_free(e, 0);
    }
  };
  Symbol.dispose && (ue.prototype[Symbol.dispose] = ue.prototype.free);
  let de = class Mt {
    static __wrap(e) {
      const t = Object.create(Mt.prototype);
      return t.__wbg_ptr = e, gt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, gt.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      f.__wbg_videohandle_free(e, 0);
    }
  };
  Symbol.dispose && (de.prototype[Symbol.dispose] = de.prototype.free);
  function sr(_, e) {
    return Error(U(_, e));
  }
  function ir(_) {
    return Number(_);
  }
  function fr(_, e) {
    const t = String(e), r = j(t, f.__wbindgen_malloc, f.__wbindgen_realloc), n = V;
    H().setInt32(_ + 4, n, true), H().setInt32(_ + 0, r, true);
  }
  function ur(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    H().setBigInt64(_ + 8, z(r) ? BigInt(0) : r, true), H().setInt32(_ + 0, !z(r), true);
  }
  function dr(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return z(t) ? 16777215 : t ? 1 : 0;
  }
  function gr(_, e) {
    const t = T_(e), r = j(t, f.__wbindgen_malloc, f.__wbindgen_realloc), n = V;
    H().setInt32(_ + 4, n, true), H().setInt32(_ + 0, r, true);
  }
  function pr(_, e) {
    return _ in e;
  }
  function wr(_) {
    return typeof _ == "bigint";
  }
  function lr(_) {
    return typeof _ == "function";
  }
  function mr(_) {
    return _ === null;
  }
  function hr(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function yr(_) {
    return typeof _ == "string";
  }
  function xr(_) {
    return _ === void 0;
  }
  function $r(_, e) {
    return _ === e;
  }
  function vr(_, e) {
    return _ == e;
  }
  function Sr(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    H().setFloat64(_ + 8, z(r) ? 0 : r, true), H().setInt32(_ + 0, !z(r), true);
  }
  function Ar(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = z(r) ? 0 : j(r, f.__wbindgen_malloc, f.__wbindgen_realloc), a = V;
    H().setInt32(_ + 4, a, true), H().setInt32(_ + 0, n, true);
  }
  function Ir(_, e) {
    throw new Error(U(_, e));
  }
  function Fr(_) {
    _._wbg_cb_unref();
  }
  function Dr() {
    return q(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Tr() {
    return q(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function Br() {
    return q(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Pr() {
    return q(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function kr() {
    return q(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function Mr(_, e) {
    return _.createBindGroup(e);
  }
  function Rr(_, e) {
    return _.createCommandEncoder(e);
  }
  function Cr() {
    return q(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function Vr() {
    return q(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function Lr(_) {
    _.destroy();
  }
  function Er(_) {
    return _.done;
  }
  function Gr(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function Or(_) {
    _.end();
  }
  function Wr(_) {
    return Object.entries(_);
  }
  function zr(_) {
    return _.finish();
  }
  function Ur(_, e) {
    return _.finish(e);
  }
  function Hr() {
    return q(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function qr(_, e) {
    return _[e >>> 0];
  }
  function jr() {
    return q(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function Kr(_, e) {
    return _[e >>> 0];
  }
  function Nr(_, e) {
    return _[e];
  }
  function Jr(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function Qr(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function Xr(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function Yr(_) {
    return Array.isArray(_);
  }
  function Zr(_) {
    return Number.isSafeInteger(_);
  }
  function en() {
    return Symbol.iterator;
  }
  function _n(_, e) {
    const t = e.label, r = j(t, f.__wbindgen_malloc, f.__wbindgen_realloc), n = V;
    H().setInt32(_ + 4, n, true), H().setInt32(_ + 0, r, true);
  }
  function tn(_) {
    return _.length;
  }
  function rn(_) {
    return _.length;
  }
  function nn(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function an() {
    return new Object();
  }
  function on() {
    return new Array();
  }
  function bn(_) {
    return new Uint8Array(_);
  }
  function cn(_, e) {
    return new Error(U(_, e));
  }
  function sn(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function fn() {
    return q(function(_) {
      return _.next();
    }, arguments);
  }
  function un(_) {
    return _.next;
  }
  function dn(_) {
    return _.onSubmittedWorkDone();
  }
  function gn(_, e, t) {
    Uint8Array.prototype.set.call(z_(_, e), t);
  }
  function pn(_, e) {
    return _.push(e);
  }
  function wn(_) {
    return _.queueMicrotask;
  }
  function ln(_) {
    queueMicrotask(_);
  }
  function mn(_) {
    return Promise.resolve(_);
  }
  function hn() {
    return q(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, so(r, n), a, o >>> 0);
    }, arguments);
  }
  function yn(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function xn(_, e, t, r, n) {
    _.setIndexBuffer(e, Rt[t], r, n);
  }
  function $n(_, e, t, r) {
    _.setIndexBuffer(e, Rt[t], r);
  }
  function vn(_, e) {
    _.setPipeline(e);
  }
  function Sn(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function An(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function In(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
  }
  function Fn(_, e, t) {
    _[e] = t;
  }
  function Dn(_, e) {
    _.a = e;
  }
  function Tn(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function Bn(_, e) {
    _.aspect = Ct[e];
  }
  function Pn(_, e) {
    _.aspect = Ct[e];
  }
  function kn(_, e) {
    _.b = e;
  }
  function Mn(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function Rn(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function Cn(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function Vn(_, e) {
    _.binding = e >>> 0;
  }
  function Ln(_, e) {
    _.buffer = e;
  }
  function En(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function Gn(_, e) {
    _.clearValue = e;
  }
  function On(_, e) {
    _.colorAttachments = e;
  }
  function Wn(_, e, t) {
    _[e >>> 0] = t;
  }
  function zn(_, e) {
    _.depthClearValue = e;
  }
  function Un(_, e) {
    _.depthLoadOp = O_[e];
  }
  function Hn(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function qn(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function jn(_, e) {
    _.depthStencilAttachment = e;
  }
  function Kn(_, e) {
    _.depthStoreOp = W_[e];
  }
  function Nn(_, e) {
    _.dimension = co[e];
  }
  function Jn(_, e) {
    _.dimension = bo[e];
  }
  function Qn(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function Xn(_, e) {
    _.entries = e;
  }
  function Yn(_, e) {
    _.format = Vt[e];
  }
  function Zn(_, e) {
    _.format = Vt[e];
  }
  function ea(_, e) {
    _.g = e;
  }
  function _a(_, e) {
    _.height = e >>> 0;
  }
  function ta(_, e, t) {
    _.label = U(e, t);
  }
  function ra(_, e, t) {
    _.label = U(e, t);
  }
  function na(_, e, t) {
    _.label = U(e, t);
  }
  function aa(_, e, t) {
    _.label = U(e, t);
  }
  function oa(_, e, t) {
    _.label = U(e, t);
  }
  function ba(_, e, t) {
    _.label = U(e, t);
  }
  function ca(_, e) {
    _.layout = e;
  }
  function sa(_, e) {
    _.loadOp = O_[e];
  }
  function ia(_, e) {
    _.mipLevel = e >>> 0;
  }
  function fa(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function ua(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function da(_, e) {
    _.offset = e;
  }
  function ga(_, e) {
    _.offset = e;
  }
  function pa(_, e) {
    _.origin = e;
  }
  function wa(_, e) {
    _.querySet = e;
  }
  function la(_, e) {
    _.r = e;
  }
  function ma(_, e) {
    _.resolveTarget = e;
  }
  function ha(_, e) {
    _.resource = e;
  }
  function ya(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function xa(_, e) {
    _.sampleCount = e >>> 0;
  }
  function $a(_, e) {
    _.size = e;
  }
  function va(_, e) {
    _.size = e;
  }
  function Sa(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function Aa(_, e) {
    _.stencilLoadOp = O_[e];
  }
  function Ia(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function Fa(_, e) {
    _.stencilStoreOp = W_[e];
  }
  function Da(_, e) {
    _.storeOp = W_[e];
  }
  function Ta(_, e) {
    _.texture = e;
  }
  function Ba(_, e) {
    _.timestampWrites = e;
  }
  function Pa(_, e) {
    _.usage = e >>> 0;
  }
  function ka(_, e) {
    _.usage = e >>> 0;
  }
  function Ma(_, e) {
    _.view = e;
  }
  function Ra(_, e) {
    _.view = e;
  }
  function Ca(_, e) {
    _.viewFormats = e;
  }
  function Va(_, e) {
    _.width = e >>> 0;
  }
  function La(_, e) {
    _.x = e >>> 0;
  }
  function Ea(_, e) {
    _.y = e >>> 0;
  }
  function Ga(_, e) {
    _.z = e >>> 0;
  }
  function Oa() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return z(_) ? 0 : $e(_);
  }
  function Wa() {
    const _ = typeof global > "u" ? null : global;
    return z(_) ? 0 : $e(_);
  }
  function za() {
    const _ = typeof self > "u" ? null : self;
    return z(_) ? 0 : $e(_);
  }
  function Ua() {
    const _ = typeof window > "u" ? null : window;
    return z(_) ? 0 : $e(_);
  }
  function Ha(_, e) {
    _.submit(e);
  }
  function qa(_, e, t) {
    return _.then(e, t);
  }
  function ja(_, e, t) {
    return _.then(e, t);
  }
  function Ka(_, e) {
    return _.then(e);
  }
  function Na(_) {
    _.unmap();
  }
  function Ja(_) {
    return _.value;
  }
  function Qa() {
    return q(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, z_(r, n), a, o);
    }, arguments);
  }
  function Xa() {
    return q(function(_, e, t, r, n, a) {
      _.writeTexture(e, z_(t, r), n, a);
    }, arguments);
  }
  function Ya(_, e) {
    return Lt(_, e, ao);
  }
  function Za(_, e) {
    return Lt(_, e, oo);
  }
  function eo(_) {
    return _;
  }
  function _o(_) {
    return _;
  }
  function to(_, e) {
    return U(_, e);
  }
  function ro(_) {
    return BigInt.asUintN(64, _);
  }
  function no() {
    const _ = f.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function ao(_, e, t) {
    f.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_(_, e, t);
  }
  function oo(_, e, t) {
    const r = f.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_(_, e, t);
    if (r[1]) throw I(r[0]);
  }
  const Rt = [
    "uint16",
    "uint32"
  ], O_ = [
    "load",
    "clear"
  ], W_ = [
    "store",
    "discard"
  ], Ct = [
    "all",
    "stencil-only",
    "depth-only"
  ], bo = [
    "1d",
    "2d",
    "3d"
  ], Vt = [
    "r8unorm",
    "r8snorm",
    "r8uint",
    "r8sint",
    "r16uint",
    "r16sint",
    "r16float",
    "rg8unorm",
    "rg8snorm",
    "rg8uint",
    "rg8sint",
    "r32uint",
    "r32sint",
    "r32float",
    "rg16uint",
    "rg16sint",
    "rg16float",
    "rgba8unorm",
    "rgba8unorm-srgb",
    "rgba8snorm",
    "rgba8uint",
    "rgba8sint",
    "bgra8unorm",
    "bgra8unorm-srgb",
    "rgb9e5ufloat",
    "rgb10a2uint",
    "rgb10a2unorm",
    "rg11b10ufloat",
    "rg32uint",
    "rg32sint",
    "rg32float",
    "rgba16uint",
    "rgba16sint",
    "rgba16float",
    "rgba32uint",
    "rgba32sint",
    "rgba32float",
    "stencil8",
    "depth16unorm",
    "depth24plus",
    "depth24plus-stencil8",
    "depth32float",
    "depth32float-stencil8",
    "bc1-rgba-unorm",
    "bc1-rgba-unorm-srgb",
    "bc2-rgba-unorm",
    "bc2-rgba-unorm-srgb",
    "bc3-rgba-unorm",
    "bc3-rgba-unorm-srgb",
    "bc4-r-unorm",
    "bc4-r-snorm",
    "bc5-rg-unorm",
    "bc5-rg-snorm",
    "bc6h-rgb-ufloat",
    "bc6h-rgb-float",
    "bc7-rgba-unorm",
    "bc7-rgba-unorm-srgb",
    "etc2-rgb8unorm",
    "etc2-rgb8unorm-srgb",
    "etc2-rgb8a1unorm",
    "etc2-rgb8a1unorm-srgb",
    "etc2-rgba8unorm",
    "etc2-rgba8unorm-srgb",
    "eac-r11unorm",
    "eac-r11snorm",
    "eac-rg11unorm",
    "eac-rg11snorm",
    "astc-4x4-unorm",
    "astc-4x4-unorm-srgb",
    "astc-5x4-unorm",
    "astc-5x4-unorm-srgb",
    "astc-5x5-unorm",
    "astc-5x5-unorm-srgb",
    "astc-6x5-unorm",
    "astc-6x5-unorm-srgb",
    "astc-6x6-unorm",
    "astc-6x6-unorm-srgb",
    "astc-8x5-unorm",
    "astc-8x5-unorm-srgb",
    "astc-8x6-unorm",
    "astc-8x6-unorm-srgb",
    "astc-8x8-unorm",
    "astc-8x8-unorm-srgb",
    "astc-10x5-unorm",
    "astc-10x5-unorm-srgb",
    "astc-10x6-unorm",
    "astc-10x6-unorm-srgb",
    "astc-10x8-unorm",
    "astc-10x8-unorm-srgb",
    "astc-10x10-unorm",
    "astc-10x10-unorm-srgb",
    "astc-12x10-unorm",
    "astc-12x10-unorm-srgb",
    "astc-12x12-unorm",
    "astc-12x12-unorm-srgb"
  ], co = [
    "1d",
    "2d",
    "2d-array",
    "cube",
    "cube-array",
    "3d"
  ], it = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => f.__wbg_handle_free(_, 1)), ft = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => f.__wbg_proteusapp_free(_, 1)), ut = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => f.__wbg_texturehandle_free(_, 1)), dt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => f.__wbg_transitionchannel_free(_, 1)), gt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => f.__wbg_videohandle_free(_, 1));
  function $e(_) {
    const e = f.__externref_table_alloc();
    return f.__wbindgen_externrefs.set(e, _), e;
  }
  function g(_, e) {
    if (!(_ instanceof e)) throw new Error(`expected instance of ${e.name}`);
  }
  const pt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => f.__wbindgen_destroy_closure(_.a, _.b));
  function T_(_) {
    const e = typeof _;
    if (e == "number" || e == "boolean" || _ == null) return `${_}`;
    if (e == "string") return `"${_}"`;
    if (e == "symbol") {
      const n = _.description;
      return n == null ? "Symbol" : `Symbol(${n})`;
    }
    if (e == "function") {
      const n = _.name;
      return typeof n == "string" && n.length > 0 ? `Function(${n})` : "Function";
    }
    if (Array.isArray(_)) {
      const n = _.length;
      let a = "[";
      n > 0 && (a += T_(_[0]));
      for (let o = 1; o < n; o++) a += ", " + T_(_[o]);
      return a += "]", a;
    }
    const t = /\[object ([^\]]+)\]/.exec(toString.call(_));
    let r;
    if (t && t.length > 1) r = t[1];
    else return toString.call(_);
    if (r == "Object") try {
      return "Object(" + JSON.stringify(_) + ")";
    } catch {
      return "Object";
    }
    return _ instanceof Error ? `${_.name}: ${_.message}
${_.stack}` : r;
  }
  function so(_, e) {
    return _ = _ >>> 0, fo().subarray(_ / 4, _ / 4 + e);
  }
  function z_(_, e) {
    return _ = _ >>> 0, le().subarray(_ / 1, _ / 1 + e);
  }
  let se = null;
  function H() {
    return (se === null || se.buffer.detached === true || se.buffer.detached === void 0 && se.buffer !== f.memory.buffer) && (se = new DataView(f.memory.buffer)), se;
  }
  let Re = null;
  function io() {
    return (Re === null || Re.byteLength === 0) && (Re = new Float64Array(f.memory.buffer)), Re;
  }
  function U(_, e) {
    return go(_ >>> 0, e);
  }
  let Ce = null;
  function fo() {
    return (Ce === null || Ce.byteLength === 0) && (Ce = new Uint32Array(f.memory.buffer)), Ce;
  }
  let Ve = null;
  function le() {
    return (Ve === null || Ve.byteLength === 0) && (Ve = new Uint8Array(f.memory.buffer)), Ve;
  }
  function q(_, e) {
    try {
      return _.apply(this, e);
    } catch (t) {
      const r = $e(t);
      f.__wbindgen_exn_store(r);
    }
  }
  function z(_) {
    return _ == null;
  }
  function Lt(_, e, t) {
    const r = {
      a: _,
      b: e,
      cnt: 1
    }, n = (...a) => {
      r.cnt++;
      const o = r.a;
      r.a = 0;
      try {
        return t(o, r.b, ...a);
      } finally {
        r.a = o, n._wbg_cb_unref();
      }
    };
    return n._wbg_cb_unref = () => {
      --r.cnt === 0 && (f.__wbindgen_destroy_closure(r.a, r.b), r.a = 0, pt.unregister(r));
    }, pt.register(n, r, r), n;
  }
  function Le(_, e) {
    const t = e(_.length * 1, 1) >>> 0;
    return le().set(_, t / 1), V = _.length, t;
  }
  function Ee(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return io().set(_, t / 8), V = _.length, t;
  }
  function wt(_, e) {
    const t = e(_.length * 4, 4) >>> 0;
    for (let r = 0; r < _.length; r++) {
      const n = $e(_[r]);
      H().setUint32(t + 4 * r, n, true);
    }
    return V = _.length, t;
  }
  function j(_, e, t) {
    if (t === void 0) {
      const b = Ae.encode(_), c = e(b.length, 1) >>> 0;
      return le().subarray(c, c + b.length).set(b), V = b.length, c;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = le();
    let o = 0;
    for (; o < r; o++) {
      const b = _.charCodeAt(o);
      if (b > 127) break;
      a[n + o] = b;
    }
    if (o !== r) {
      o !== 0 && (_ = _.slice(o)), n = t(n, r, r = o + _.length * 3, 1) >>> 0;
      const b = le().subarray(n + o, n + r), c = Ae.encodeInto(_, b);
      o += c.written, n = t(n, r, o, 1) >>> 0;
    }
    return V = o, n;
  }
  function I(_) {
    const e = f.__wbindgen_externrefs.get(_);
    return f.__externref_table_dealloc(_), e;
  }
  let o_ = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  o_.decode();
  const uo = 2146435072;
  let p_ = 0;
  function go(_, e) {
    return p_ += e, p_ >= uo && (o_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), o_.decode(), p_ = e), o_.decode(le().subarray(_, _ + e));
  }
  const Ae = new TextEncoder();
  "encodeInto" in Ae || (Ae.encodeInto = function(_, e) {
    const t = Ae.encode(_);
    return e.set(t), {
      read: _.length,
      written: t.length
    };
  });
  let V = 0, f;
  function po(_) {
    f = _;
  }
  URL = globalThis.URL;
  const wo = await G_({
    "./proteus_sdk_web_bg.js": {
      __wbg_next_0c4066e251d2eff9: fn,
      __wbg_done_b62d4a7d2286852a: Er,
      __wbg_value_49f783bb59765962: Ja,
      __wbg_length_c6054974c0a6cdb9: rn,
      __wbg_instanceof_Map_afa18d5840c04c15: Qr,
      __wbg_get_197a3fe98f169e38: qr,
      __wbg_get_unchecked_54a4374c38e08460: Kr,
      __wbg_call_5575218572ead796: Br,
      __wbg_push_f724b5db8acf89d2: pn,
      __wbg_call_8e98ed2f3c86c4b5: Pr,
      __wbg_call_0e855b388e315e17: Tr,
      __wbg_set_dc601f4a69da0bc2: Wn,
      __wbg_get_with_ref_key_6412cf3094599694: Nr,
      __wbg_set_6be42768c690e380: Fn,
      __wbg_String_8564e559799eccda: fr,
      __wbg_set_texture_16d2be474ce6ad0c: Ta,
      __wbg_set_mip_level_246db61be15bdd69: ia,
      __wbg_set_x_56f0c2c08a62725c: La,
      __wbg_set_y_04fb8ce84735b4e1: Ea,
      __wbg_set_z_a51316db27a4941e: Ga,
      __wbg_set_origin_9b3b0fbe0a5dc469: pa,
      __wbg_set_aspect_77332ac136ee94eb: Bn,
      __wbg_set_a_5f6e488475272136: Dn,
      __wbg_set_b_688365d692bba214: kn,
      __wbg_set_g_d4d1d77cf8fdd362: ea,
      __wbg_set_r_527e5a41c4b1a846: la,
      __wbg_set_width_1a5e2e86fa5bdcd8: Va,
      __wbg_set_height_e8b5483b8c117d5e: _a,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: Hn,
      __wbg_set_format_e9d4b1475bb3bd3b: Zn,
      __wbg_set_size_a61ff22205255d61: va,
      __wbg_set_usage_7fa9cd18d1104aca: ka,
      __wbg_set_label_0c1bd0e976cf0a9a: ra,
      __wbg_set_dimension_36e13ccecae5af4b: Jn,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: ua,
      __wbg_set_sample_count_865e1d19b84e27e6: xa,
      __wbg_set_view_formats_bab284fc81b40e70: Ca,
      __wbg_createTexture_9e76b80a2dc0d12e: Cr,
      __wbg_set_entries_fc76ca4d7da6a709: Xn,
      __wbg_set_layout_eeef59714f5bf48b: ca,
      __wbg_set_label_f92ae11c77d74198: ba,
      __wbg_createBindGroup_2320df4db188406c: Mr,
      __wbg_set_label_d1c24b5a7a3ac31d: oa,
      __wbg_createCommandEncoder_cd88faca35d9ed68: Rr,
      __wbg_set_color_attachments_abe67f6631926e28: On,
      __wbg_set_label_8fd860a36d2c7b74: aa,
      __wbg_set_view_dbd0294573f64d05: Ra,
      __wbg_set_depth_clear_value_442bf492734f63b6: zn,
      __wbg_set_depth_load_op_34d430b74bb36d91: Un,
      __wbg_set_depth_store_op_0ea0a215313dbda7: Kn,
      __wbg_set_depth_read_only_138a11b10c731094: qn,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: Sa,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: Aa,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: Fa,
      __wbg_set_stencil_read_only_fb489d191b6d969b: Ia,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: jn,
      __wbg_set_query_set_18679a8580267d5a: wa,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: Cn,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: Qn,
      __wbg_set_timestamp_writes_c552d52fbb417005: Ba,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: Dr,
      __wbg_copyTextureToTexture_1be188df1e535c0a: kr,
      __wbg_label_47480289cc2bce71: _n,
      __wbg_set_label_2d2227f4d5991e50: na,
      __wbg_finish_cfaeede3baf55be1: Ur,
      __wbg_finish_087cb89c65c06eb1: zr,
      __wbg_drawIndexed_68637ebab6dd8d6e: Gr,
      __wbg_setPipeline_bab24dbce96903b9: vn,
      __wbg_setViewport_f9d423db4f4b4b58: In,
      __wbg_setBindGroup_4ba56e1e0d26f244: hn,
      __wbg_setBindGroup_6124849cc8547086: yn,
      __wbg_setIndexBuffer_17431786d06c1b7c: xn,
      __wbg_setIndexBuffer_a16ed5b869c87507: $n,
      __wbg_setVertexBuffer_b508baf8d0ffe331: An,
      __wbg_setVertexBuffer_91c4b602d0289943: Sn,
      __wbg_end_414453a89205612c: Or,
      __wbg_writeBuffer_b4bdd36178348ca5: Qa,
      __wbg_set_bytes_per_row_91681ca78d744888: En,
      __wbg_set_rows_per_image_d198b7e73a38978b: ya,
      __wbg_set_offset_a097a8050a3a9a33: ga,
      __wbg_writeTexture_b45b69132e46a227: Xa,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: dn,
      __wbg_submit_1290d44bb76ecef4: Ha,
      __wbg_getMappedRange_5ed22727c9679168: Hr,
      __wbg_unmap_8f06698a75b8331a: Na,
      __wbg_destroy_b5b39f25f0799295: Lr,
      __wbg_mapAsync_bb0029907dd91181: nn,
      __wbg_set_dimension_174ad7e2fb67fb4e: Nn,
      __wbg_set_format_90860b0321868db4: Yn,
      __wbg_set_aspect_a823a14d00d42d37: Pn,
      __wbg_set_base_array_layer_cc6c68d233489c4b: Mn,
      __wbg_set_array_layer_count_daec613068108a9d: Tn,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: Rn,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: fa,
      __wbg_set_label_03d2396d4655a3e1: ta,
      __wbg_set_usage_7f0dda8309469b1c: Pa,
      __wbg_createView_cc96b5bdd3d5bf5e: Vr,
      __wbg_then_05edfc8a4fea5106: qa,
      __wbg_set_load_op_56844f51434037bf: sa,
      __wbg_set_store_op_caeede4654b3d847: Da,
      __wbg_set_view_bdeab150b5f0768c: Ma,
      __wbg_set_clear_value_642701f928a5ccb3: Gn,
      __wbg_set_resolve_target_fe76b3f99cf72078: ma,
      __wbg_set_buffer_55f096330c8912b4: Ln,
      __wbg_set_offset_73156b0e0b41d79a: da,
      __wbg_set_size_1e6281b07cd39177: $a,
      __wbg_set_binding_f3c188a8cd21455b: Vn,
      __wbg_set_resource_fe385d2e3dadaf63: ha,
      __wbg_resolve_d82363d90af6928a: mn,
      __wbg_then_591b6b3a75ee817a: Ka,
      __wbg_iterator_cc47ba25a2be735a: en,
      __wbg_get_9a29be2cb383ed9a: jr,
      __wbg_next_402fa10b59ab20c3: un,
      __wbg_new_2e117a478906f062: an,
      __wbg_new_36e147a8ced3c6e0: on,
      __wbg_isArray_145a34fd0a38d37b: Yr,
      __wbg_new_e66a4b7758dd2e5c: cn,
      __wbg_isSafeInteger_a3389a198582f5f6: Zr,
      __wbg_entries_c261c3fa1f281256: Wr,
      __wbg_then_2a84678a50976959: ja,
      __wbg_length_589238bdcf171f0e: tn,
      __wbg_prototypesetcall_d721637c7ca66eb8: gn,
      __wbg_new_81880fb5002cb255: bn,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: sn,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: Oa,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: za,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Wa,
      __wbg_static_accessor_WINDOW_168f178805d978fe: Ua,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: Jr,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: Xr,
      __wbg_queueMicrotask_311744e534a929a3: ln,
      __wbg_queueMicrotask_1c9b3800e321a967: wn,
      __wbg___wbindgen_number_get_1cc01dd708740256: Sr,
      __wbg___wbindgen_in_4990f46af709e33c: pr,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: Ir,
      __wbg___wbindgen_is_null_6d937fbfb6478470: mr,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: $r,
      __wbg_Number_c4bdf66bb78f7977: ir,
      __wbg_Error_fdd633d4bb5dd76a: sr,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: wr,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: hr,
      __wbg___wbindgen_is_string_1fca8072260dd261: yr,
      __wbg___wbindgen_string_get_71bb4348194e31f0: Ar,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: dr,
      __wbg___wbindgen_is_function_acc5528be2b923f2: lr,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: xr,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: vr,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: ur,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: Fr,
      __wbg___wbindgen_debug_string_8a447059637473e2: gr,
      __wbindgen_init_externref_table: no,
      __wbindgen_cast_0000000000000001: Ya,
      __wbindgen_cast_0000000000000002: Za,
      __wbindgen_cast_0000000000000003: eo,
      __wbindgen_cast_0000000000000004: _o,
      __wbindgen_cast_0000000000000005: to,
      __wbindgen_cast_0000000000000006: ro
    }
  }, cr), { memory: lo, __wbg_proteusapp_free: mo, proteusapp_addChild: ho, proteusapp_animateTo: yo, proteusapp_bakeTexture: xo, proteusapp_bakedImageSize: $o, proteusapp_bakedTextSize: vo, proteusapp_bindKey: So, proteusapp_channelDestroy: Ao, proteusapp_channelSet: Io, proteusapp_clearFocus: Fo, proteusapp_clearGlyphCache: Do, proteusapp_component: To, proteusapp_copyBakedImageFrom: Bo, proteusapp_createVideo: Po, proteusapp_cropImage: ko, proteusapp_declareGeometry: Mo, proteusapp_declaredGeometry: Ro, proteusapp_destroy: Co, proteusapp_devices: Vo, proteusapp_expectFont: Lo, proteusapp_focus: Eo, proteusapp_focused: Go, proteusapp_fontFailed: Oo, proteusapp_freeResources: Wo, proteusapp_get: zo, proteusapp_hideVideo: Uo, proteusapp_inputDevices: Ho, proteusapp_inputMode: qo, proteusapp_isFocused: jo, proteusapp_loadFont: Ko, proteusapp_loadTexture: No, proteusapp_mergeFrom: Jo, proteusapp_mergeFromWithBehavior: Qo, proteusapp_new: Xo, proteusapp_onAppKey: Yo, proteusapp_onBlur: Zo, proteusapp_onClick: eb, proteusapp_onDrag: _b, proteusapp_onDropped: tb, proteusapp_onFocus: rb, proteusapp_onFocusLost: nb, proteusapp_onHoverEnter: ab, proteusapp_onHoverExit: ob, proteusapp_onKey: bb, proteusapp_onPress: cb, proteusapp_onRelease: sb, proteusapp_onTransitionComplete: ib, proteusapp_pointerLeft: fb, proteusapp_pointerMoved: ub, proteusapp_pointerPressed: db, proteusapp_pointerReleased: gb, proteusapp_releaseVideo: pb, proteusapp_removeChild: wb, proteusapp_resetKeyMap: lb, proteusapp_setDeclaredGeometry: mb, proteusapp_setDefaultFocus: hb, proteusapp_setDevices: yb, proteusapp_setDisabled: xb, proteusapp_setFallbackFonts: $b, proteusapp_setFocusGroup: vb, proteusapp_setImage: Sb, proteusapp_setInputDevices: Ab, proteusapp_setInteractive: Ib, proteusapp_setKeyRepeat: Fb, proteusapp_setLongPressMs: Db, proteusapp_setNavigatingActions: Tb, proteusapp_setNeighbour: Bb, proteusapp_setOpacity: Pb, proteusapp_setReadingDirection: kb, proteusapp_setStyle: Mb, proteusapp_setStyleTransition: Rb, proteusapp_setText: Cb, proteusapp_setTexture: Vb, proteusapp_setTransitionInteraction: Lb, proteusapp_setVideoCrossfade: Eb, proteusapp_setVisible: Gb, proteusapp_showVideo: Ob, proteusapp_splitTo: Wb, proteusapp_splitToWithBehavior: zb, proteusapp_splitToWithStates: Ub, proteusapp_texture: Hb, proteusapp_textureState: qb, proteusapp_tick: jb, proteusapp_transitionChannel: Kb, proteusapp_unbindKey: Nb, proteusapp_uploadVideoFrame: Jb, __wbg_handle_free: Qb, __wbg_texturehandle_free: Xb, __wbg_transitionchannel_free: Yb, __wbg_videohandle_free: Zb, handle_fromId: ec, handle_id: _c, texturehandle_fromId: tc, texturehandle_id: rc, __abort_handler: nc, __instance_terminated: ac, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_: oc, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_: bc, __wbindgen_malloc: cc, __wbindgen_realloc: sc, __wbindgen_exn_store: ic, __externref_table_alloc: fc, __wbindgen_externrefs: uc, __wbindgen_destroy_closure: dc, __externref_table_dealloc: gc, __wbindgen_free: pc, __wbindgen_start: Et } = wo, wc = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: nc,
    __externref_table_alloc: fc,
    __externref_table_dealloc: gc,
    __instance_terminated: ac,
    __wbg_handle_free: Qb,
    __wbg_proteusapp_free: mo,
    __wbg_texturehandle_free: Xb,
    __wbg_transitionchannel_free: Yb,
    __wbg_videohandle_free: Zb,
    __wbindgen_destroy_closure: dc,
    __wbindgen_exn_store: ic,
    __wbindgen_externrefs: uc,
    __wbindgen_free: pc,
    __wbindgen_malloc: cc,
    __wbindgen_realloc: sc,
    __wbindgen_start: Et,
    handle_fromId: ec,
    handle_id: _c,
    memory: lo,
    proteusapp_addChild: ho,
    proteusapp_animateTo: yo,
    proteusapp_bakeTexture: xo,
    proteusapp_bakedImageSize: $o,
    proteusapp_bakedTextSize: vo,
    proteusapp_bindKey: So,
    proteusapp_channelDestroy: Ao,
    proteusapp_channelSet: Io,
    proteusapp_clearFocus: Fo,
    proteusapp_clearGlyphCache: Do,
    proteusapp_component: To,
    proteusapp_copyBakedImageFrom: Bo,
    proteusapp_createVideo: Po,
    proteusapp_cropImage: ko,
    proteusapp_declareGeometry: Mo,
    proteusapp_declaredGeometry: Ro,
    proteusapp_destroy: Co,
    proteusapp_devices: Vo,
    proteusapp_expectFont: Lo,
    proteusapp_focus: Eo,
    proteusapp_focused: Go,
    proteusapp_fontFailed: Oo,
    proteusapp_freeResources: Wo,
    proteusapp_get: zo,
    proteusapp_hideVideo: Uo,
    proteusapp_inputDevices: Ho,
    proteusapp_inputMode: qo,
    proteusapp_isFocused: jo,
    proteusapp_loadFont: Ko,
    proteusapp_loadTexture: No,
    proteusapp_mergeFrom: Jo,
    proteusapp_mergeFromWithBehavior: Qo,
    proteusapp_new: Xo,
    proteusapp_onAppKey: Yo,
    proteusapp_onBlur: Zo,
    proteusapp_onClick: eb,
    proteusapp_onDrag: _b,
    proteusapp_onDropped: tb,
    proteusapp_onFocus: rb,
    proteusapp_onFocusLost: nb,
    proteusapp_onHoverEnter: ab,
    proteusapp_onHoverExit: ob,
    proteusapp_onKey: bb,
    proteusapp_onPress: cb,
    proteusapp_onRelease: sb,
    proteusapp_onTransitionComplete: ib,
    proteusapp_pointerLeft: fb,
    proteusapp_pointerMoved: ub,
    proteusapp_pointerPressed: db,
    proteusapp_pointerReleased: gb,
    proteusapp_releaseVideo: pb,
    proteusapp_removeChild: wb,
    proteusapp_resetKeyMap: lb,
    proteusapp_setDeclaredGeometry: mb,
    proteusapp_setDefaultFocus: hb,
    proteusapp_setDevices: yb,
    proteusapp_setDisabled: xb,
    proteusapp_setFallbackFonts: $b,
    proteusapp_setFocusGroup: vb,
    proteusapp_setImage: Sb,
    proteusapp_setInputDevices: Ab,
    proteusapp_setInteractive: Ib,
    proteusapp_setKeyRepeat: Fb,
    proteusapp_setLongPressMs: Db,
    proteusapp_setNavigatingActions: Tb,
    proteusapp_setNeighbour: Bb,
    proteusapp_setOpacity: Pb,
    proteusapp_setReadingDirection: kb,
    proteusapp_setStyle: Mb,
    proteusapp_setStyleTransition: Rb,
    proteusapp_setText: Cb,
    proteusapp_setTexture: Vb,
    proteusapp_setTransitionInteraction: Lb,
    proteusapp_setVideoCrossfade: Eb,
    proteusapp_setVisible: Gb,
    proteusapp_showVideo: Ob,
    proteusapp_splitTo: Wb,
    proteusapp_splitToWithBehavior: zb,
    proteusapp_splitToWithStates: Ub,
    proteusapp_texture: Hb,
    proteusapp_textureState: qb,
    proteusapp_tick: jb,
    proteusapp_transitionChannel: Kb,
    proteusapp_unbindKey: Nb,
    proteusapp_uploadVideoFrame: Jb,
    texturehandle_fromId: tc,
    texturehandle_id: rc,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_: bc,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_: oc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  po(wc);
  Et();
  const lc = "" + new URL("proteus_host_web_bg-CjGoZOYu.wasm", import.meta.url).href;
  let x = class B_ {
    static __wrap(e) {
      const t = Object.create(B_.prototype);
      return t.__wbg_ptr = e, lt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, lt.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      i.__wbg_handle_free(e, 0);
    }
    static fromId(e) {
      const t = i.handle_fromId(e);
      return B_.__wrap(t);
    }
    id() {
      return i.handle_id(this.__wbg_ptr);
    }
  };
  Symbol.dispose && (x.prototype[Symbol.dispose] = x.prototype.free);
  let P_ = class Gt {
    static __wrap(e) {
      const t = Object.create(Gt.prototype);
      return t.__wbg_ptr = e, w_.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, w_.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      i.__wbg_proteusapp_free(e, 0);
    }
    addChild(e, t) {
      p(e, x), p(t, x);
      const r = i.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw F(r[0]);
    }
    animateTo(e, t, r) {
      p(e, x);
      const n = i.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw F(n[0]);
    }
    bakeTexture(e, t, r, n) {
      const a = Ke(r, i.__wbindgen_malloc), o = M, b = i.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, o, n);
      return oe.__wrap(b);
    }
    bakedImageSize(e) {
      return p(e, x), i.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return p(e, x), i.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bindKey(e, t) {
      const r = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M, a = i.proteusapp_bindKey(this.__wbg_ptr, e, r, n);
      if (a[1]) throw F(a[0]);
    }
    channelDestroy(e) {
      p(e, ge);
      var t = e.__destroy_into_raw();
      i.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      p(e, ge), p(t, x), p(r, x);
      const o = i.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (o[1]) throw F(o[0]);
    }
    clearFocus() {
      i.proteusapp_clearFocus(this.__wbg_ptr);
    }
    clearGlyphCache() {
      i.proteusapp_clearGlyphCache(this.__wbg_ptr);
    }
    component(e) {
      const t = i.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw F(t[1]);
      return x.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      p(e, x), p(t, x);
      const r = i.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = i.proteusapp_createVideo(this.__wbg_ptr);
      return pe.__wrap(e);
    }
    cropImage(e, t) {
      p(e, x);
      const r = i.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      p(e, x);
      const r = i.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    declaredGeometry(e) {
      return p(e, x), i.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      p(e, x);
      var t = e.__destroy_into_raw();
      const r = i.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    devices(e) {
      return p(e, x), i.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    expectFont(e, t) {
      const r = G(e, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M, a = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), o = M, b = i.proteusapp_expectFont(this.__wbg_ptr, r, n, a, o);
      if (b[1]) throw F(b[0]);
    }
    focus(e) {
      p(e, x);
      const t = i.proteusapp_focus(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
    }
    focused() {
      const e = i.proteusapp_focused(this.__wbg_ptr);
      return e === 0 ? void 0 : x.__wrap(e);
    }
    fontFailed(e) {
      const t = G(e, i.__wbindgen_malloc, i.__wbindgen_realloc), r = M;
      i.proteusapp_fontFailed(this.__wbg_ptr, t, r);
    }
    freeResources(e) {
      p(e, x);
      const t = i.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
    }
    get(e) {
      return p(e, x), i.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      p(e, x);
      const t = i.proteusapp_hideVideo(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
    }
    inputDevices() {
      return i.proteusapp_inputDevices(this.__wbg_ptr);
    }
    inputMode() {
      let e, t;
      try {
        const r = i.proteusapp_inputMode(this.__wbg_ptr);
        return e = r[0], t = r[1], A(r[0], r[1]);
      } finally {
        i.__wbindgen_free(e, t, 1);
      }
    }
    isFocused(e) {
      return p(e, x), i.proteusapp_isFocused(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    loadFont(e) {
      let t, r;
      try {
        const o = Ke(e, i.__wbindgen_malloc), b = M, c = i.proteusapp_loadFont(this.__wbg_ptr, o, b);
        var n = c[0], a = c[1];
        if (c[3]) throw n = 0, a = 0, F(c[2]);
        return t = n, r = a, A(n, a);
      } finally {
        i.__wbindgen_free(t, r, 1);
      }
    }
    loadTexture(e, t) {
      const r = Ke(e, i.__wbindgen_malloc), n = M, a = i.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : oe.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      p(e, x);
      const a = Ne(t, i.__wbindgen_malloc), o = M, b = i.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (b[1]) throw F(b[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      p(e, x);
      const o = Ne(t, i.__wbindgen_malloc), b = M, c = i.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, b, r, n, a);
      if (c[1]) throw F(c[0]);
    }
    constructor() {
      const e = i.proteusapp_new();
      return this.__wbg_ptr = e, w_.register(this, this.__wbg_ptr, this), this;
    }
    onAppKey(e) {
      i.proteusapp_onAppKey(this.__wbg_ptr, e);
    }
    onBlur(e, t) {
      p(e, x), i.proteusapp_onBlur(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onClick(e, t) {
      p(e, x), i.proteusapp_onClick(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDrag(e, t) {
      p(e, x), i.proteusapp_onDrag(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDropped(e, t) {
      p(e, ge), i.proteusapp_onDropped(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocus(e, t) {
      p(e, x), i.proteusapp_onFocus(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocusLost(e) {
      i.proteusapp_onFocusLost(this.__wbg_ptr, e);
    }
    onHoverEnter(e, t) {
      p(e, x), i.proteusapp_onHoverEnter(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverExit(e, t) {
      p(e, x), i.proteusapp_onHoverExit(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onKey(e, t) {
      p(e, x), i.proteusapp_onKey(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onPress(e, t) {
      p(e, x), i.proteusapp_onPress(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onRelease(e, t) {
      p(e, x), i.proteusapp_onRelease(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onTransitionComplete(e, t) {
      p(e, x), i.proteusapp_onTransitionComplete(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    pointerLeft() {
      i.proteusapp_pointerLeft(this.__wbg_ptr);
    }
    pointerMoved(e, t) {
      i.proteusapp_pointerMoved(this.__wbg_ptr, e, t);
    }
    pointerPressed() {
      i.proteusapp_pointerPressed(this.__wbg_ptr);
    }
    pointerReleased() {
      i.proteusapp_pointerReleased(this.__wbg_ptr);
    }
    releaseVideo(e) {
      p(e, pe), i.proteusapp_releaseVideo(this.__wbg_ptr, e.__wbg_ptr);
    }
    removeChild(e, t) {
      p(e, x), p(t, x);
      const r = i.proteusapp_removeChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw F(r[0]);
    }
    resetKeyMap() {
      i.proteusapp_resetKeyMap(this.__wbg_ptr);
    }
    setDeclaredGeometry(e, t) {
      p(e, x);
      const r = i.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDefaultFocus(e, t) {
      p(e, x);
      const r = i.proteusapp_setDefaultFocus(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDevices(e, t) {
      p(e, x);
      const r = i.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDisabled(e, t) {
      p(e, x);
      const r = i.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setFallbackFonts(e) {
      const t = $t(e, i.__wbindgen_malloc), r = M;
      i.proteusapp_setFallbackFonts(this.__wbg_ptr, t, r);
    }
    setFocusGroup(e, t) {
      p(e, x);
      const r = i.proteusapp_setFocusGroup(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setImage(e, t) {
      p(e, x);
      const r = i.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setInputDevices(e) {
      const t = i.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw F(t[0]);
    }
    setInteractive(e, t) {
      p(e, x);
      const r = i.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setKeyRepeat(e) {
      const t = i.proteusapp_setKeyRepeat(this.__wbg_ptr, e);
      if (t[1]) throw F(t[0]);
    }
    setLongPressMs(e) {
      i.proteusapp_setLongPressMs(this.__wbg_ptr, e);
    }
    setNavigatingActions(e) {
      const t = $t(e, i.__wbindgen_malloc), r = M;
      i.proteusapp_setNavigatingActions(this.__wbg_ptr, t, r);
    }
    setNeighbour(e, t, r) {
      p(e, x);
      const n = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M, o = i.proteusapp_setNeighbour(this.__wbg_ptr, e.__wbg_ptr, n, a, !$(r), $(r) ? 0 : r);
      if (o[1]) throw F(o[0]);
    }
    setOpacity(e, t) {
      p(e, x);
      const r = i.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setReadingDirection(e) {
      const t = G(e, i.__wbindgen_malloc, i.__wbindgen_realloc), r = M, n = i.proteusapp_setReadingDirection(this.__wbg_ptr, t, r);
      if (n[1]) throw F(n[0]);
    }
    setStyle(e, t, r) {
      p(e, x);
      const n = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M, o = i.proteusapp_setStyle(this.__wbg_ptr, e.__wbg_ptr, n, a, r);
      if (o[1]) throw F(o[0]);
    }
    setStyleTransition(e, t) {
      p(e, x);
      const r = i.proteusapp_setStyleTransition(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setText(e, t) {
      p(e, x);
      const r = i.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setTexture(e, t) {
      p(e, x), p(t, oe);
      const r = i.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      p(e, x);
      const r = i.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setVideoCrossfade(e, t) {
      p(e, x);
      const r = i.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      p(e, x);
      const r = i.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    showVideo(e, t) {
      p(e, x), p(t, pe);
      const r = i.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      p(e, x);
      const a = Ne(t, i.__wbindgen_malloc), o = M, b = i.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (b[1]) throw F(b[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      p(e, x);
      const o = Ne(t, i.__wbindgen_malloc), b = M, c = i.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, b, r, n, a);
      if (c[1]) throw F(c[0]);
    }
    splitToWithStates(e, t, r, n) {
      p(e, x);
      const a = i.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw F(a[0]);
    }
    texture(e) {
      const t = i.proteusapp_texture(this.__wbg_ptr, e);
      return oe.__wrap(t);
    }
    textureState(e) {
      return p(e, oe), i.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
    }
    tick(e) {
      i.proteusapp_tick(this.__wbg_ptr, e);
    }
    transitionChannel(e) {
      const t = i.proteusapp_transitionChannel(this.__wbg_ptr, !$(e), $(e) ? 0 : e);
      return ge.__wrap(t);
    }
    unbindKey(e) {
      const t = i.proteusapp_unbindKey(this.__wbg_ptr, e);
      if (t[3]) throw F(t[2]);
      let r;
      return t[0] !== 0 && (r = A(t[0], t[1]).slice(), i.__wbindgen_free(t[0], t[1] * 1, 1)), r;
    }
    uploadVideoFrame(e, t, r, n) {
      p(e, pe);
      const a = Ke(n, i.__wbindgen_malloc), o = M;
      return i.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, o) !== 0;
    }
  };
  Symbol.dispose && (P_.prototype[Symbol.dispose] = P_.prototype.free);
  let oe = class k_ {
    static __wrap(e) {
      const t = Object.create(k_.prototype);
      return t.__wbg_ptr = e, mt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, mt.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      i.__wbg_texturehandle_free(e, 0);
    }
    static fromId(e) {
      const t = i.texturehandle_fromId(e);
      return k_.__wrap(t);
    }
    id() {
      return i.texturehandle_id(this.__wbg_ptr);
    }
  };
  Symbol.dispose && (oe.prototype[Symbol.dispose] = oe.prototype.free);
  let ge = class Ot {
    static __wrap(e) {
      const t = Object.create(Ot.prototype);
      return t.__wbg_ptr = e, ht.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ht.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      i.__wbg_transitionchannel_free(e, 0);
    }
  };
  Symbol.dispose && (ge.prototype[Symbol.dispose] = ge.prototype.free);
  let pe = class Wt {
    static __wrap(e) {
      const t = Object.create(Wt.prototype);
      return t.__wbg_ptr = e, yt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, yt.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      i.__wbg_videohandle_free(e, 0);
    }
  };
  Symbol.dispose && (pe.prototype[Symbol.dispose] = pe.prototype.free);
  function mc(_, e, t, r) {
    const n = G(_, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M;
    return i.mount(n, a, e, $(t) ? 0 : P(t), r);
  }
  function hc(_, e) {
    return Error(A(_, e));
  }
  function yc(_) {
    return Number(_);
  }
  function xc(_, e) {
    const t = String(e), r = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function $c(_) {
    return _.Window;
  }
  function vc(_) {
    return _.WorkerGlobalScope;
  }
  function Sc(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    C().setBigInt64(_ + 8, $(r) ? BigInt(0) : r, true), C().setInt32(_ + 0, !$(r), true);
  }
  function Ac(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return $(t) ? 16777215 : t ? 1 : 0;
  }
  function Ic(_, e) {
    const t = M_(e), r = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Fc(_, e) {
    return _ in e;
  }
  function Dc(_) {
    return typeof _ == "bigint";
  }
  function Tc(_) {
    return typeof _ == "function";
  }
  function Bc(_) {
    return _ === null;
  }
  function Pc(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function kc(_) {
    return typeof _ == "string";
  }
  function Mc(_) {
    return _ === void 0;
  }
  function Rc(_, e) {
    return _ === e;
  }
  function Cc(_, e) {
    return _ == e;
  }
  function Vc(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    C().setFloat64(_ + 8, $(r) ? 0 : r, true), C().setInt32(_ + 0, !$(r), true);
  }
  function Lc(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = $(r) ? 0 : G(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Ec(_, e) {
    throw new Error(A(_, e));
  }
  function Gc(_) {
    _._wbg_cb_unref();
  }
  function Oc(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Wc(_, e) {
    _.activeTexture(e >>> 0);
  }
  function zc() {
    return y(function(_, e, t, r) {
      _.addEventListener(A(e, t), r);
    }, arguments);
  }
  function Uc(_) {
    return _.altKey;
  }
  function Hc(_, e, t) {
    _.attachShader(e, t);
  }
  function qc(_, e, t) {
    _.attachShader(e, t);
  }
  function jc(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function Kc() {
    return y(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Nc(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, A(r, n));
  }
  function Jc(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, A(r, n));
  }
  function Qc(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function Xc(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function Yc(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function Zc(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function es(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function _s(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function ts(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function rs(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function ns(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function as(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function os(_, e) {
    _.bindVertexArrayOES(e);
  }
  function bs(_, e) {
    _.bindVertexArray(e);
  }
  function cs(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function ss(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function is(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function fs(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function us(_, e) {
    _.blendEquation(e >>> 0);
  }
  function ds(_, e) {
    _.blendEquation(e >>> 0);
  }
  function gs(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function ps(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function ws(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function ls(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function ms(_, e, t, r, n, a, o, b, c, u, d) {
    _.blitFramebuffer(e, t, r, n, a, o, b, c, u >>> 0, d >>> 0);
  }
  function hs(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function ys(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function xs(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function $s(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function vs(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function Ss(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function As(_) {
    return _.button;
  }
  function Is() {
    return y(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function Fs() {
    return y(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Ds() {
    return y(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function Ts(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, O(r, n));
  }
  function Bs(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, Z(r, n));
  }
  function Ps(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, ve(r, n));
  }
  function ks(_, e) {
    _.clearDepth(e);
  }
  function Ms(_, e) {
    _.clearDepth(e);
  }
  function Rs(_, e) {
    _.clearStencil(e);
  }
  function Cs(_, e) {
    _.clearStencil(e);
  }
  function Vs(_, e) {
    _.clear(e >>> 0);
  }
  function Ls(_, e) {
    _.clear(e >>> 0);
  }
  function Es(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function Gs(_, e) {
    const t = e.code, r = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Os(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Ws(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function zs(_, e) {
    _.compileShader(e);
  }
  function Us(_, e) {
    _.compileShader(e);
  }
  function Hs(_, e, t, r, n, a, o, b, c) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c);
  }
  function qs(_, e, t, r, n, a, o, b, c) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c);
  }
  function js(_, e, t, r, n, a, o, b, c, u) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c, u);
  }
  function Ks(_, e, t, r, n, a, o, b, c, u, d, T) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d, T);
  }
  function Ns(_, e, t, r, n, a, o, b, c, u, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d);
  }
  function Js() {
    return y(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function Qs(_) {
    return _.contentRect;
  }
  function Xs(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function Ys(_, e, t, r, n, a, o, b, c) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, b, c);
  }
  function Zs(_, e, t, r, n, a, o, b, c) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, b, c);
  }
  function ei(_, e, t, r, n, a, o, b, c, u) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, o, b, c, u);
  }
  function _i() {
    return y(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function ti() {
    return y(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function ri(_, e) {
    return _.createBindGroup(e);
  }
  function ni(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : P(e);
  }
  function ai() {
    return y(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function oi(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : P(e);
  }
  function bi(_, e) {
    return _.createCommandEncoder(e);
  }
  function ci(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : P(e);
  }
  function si(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : P(e);
  }
  function ii(_, e) {
    return _.createPipelineLayout(e);
  }
  function fi(_) {
    const e = _.createProgram();
    return $(e) ? 0 : P(e);
  }
  function ui(_) {
    const e = _.createProgram();
    return $(e) ? 0 : P(e);
  }
  function di(_) {
    const e = _.createQuery();
    return $(e) ? 0 : P(e);
  }
  function gi() {
    return y(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function pi(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : P(e);
  }
  function wi(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : P(e);
  }
  function li(_, e) {
    return _.createSampler(e);
  }
  function mi(_) {
    const e = _.createSampler();
    return $(e) ? 0 : P(e);
  }
  function hi(_, e) {
    return _.createShaderModule(e);
  }
  function yi(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : P(t);
  }
  function xi(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : P(t);
  }
  function $i(_) {
    const e = _.createTexture();
    return $(e) ? 0 : P(e);
  }
  function vi(_) {
    const e = _.createTexture();
    return $(e) ? 0 : P(e);
  }
  function Si() {
    return y(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function Ai(_) {
    const e = _.createVertexArrayOES();
    return $(e) ? 0 : P(e);
  }
  function Ii(_) {
    const e = _.createVertexArray();
    return $(e) ? 0 : P(e);
  }
  function Fi() {
    return y(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function Di(_) {
    return _.ctrlKey;
  }
  function Ti(_, e) {
    _.cullFace(e >>> 0);
  }
  function Bi(_, e) {
    _.cullFace(e >>> 0);
  }
  function Pi(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function ki(_, e) {
    _.deleteBuffer(e);
  }
  function Mi(_, e) {
    _.deleteBuffer(e);
  }
  function Ri(_, e) {
    _.deleteFramebuffer(e);
  }
  function Ci(_, e) {
    _.deleteFramebuffer(e);
  }
  function Vi(_, e) {
    _.deleteProgram(e);
  }
  function Li(_, e) {
    _.deleteProgram(e);
  }
  function Ei(_, e) {
    _.deleteQuery(e);
  }
  function Gi(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Oi(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Wi(_, e) {
    _.deleteSampler(e);
  }
  function zi(_, e) {
    _.deleteShader(e);
  }
  function Ui(_, e) {
    _.deleteShader(e);
  }
  function Hi(_, e) {
    _.deleteSync(e);
  }
  function qi(_, e) {
    _.deleteTexture(e);
  }
  function ji(_, e) {
    _.deleteTexture(e);
  }
  function Ki(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function Ni(_, e) {
    _.deleteVertexArray(e);
  }
  function Ji(_, e) {
    _.depthFunc(e >>> 0);
  }
  function Qi(_, e) {
    _.depthFunc(e >>> 0);
  }
  function Xi(_, e) {
    _.depthMask(e !== 0);
  }
  function Yi(_, e) {
    _.depthMask(e !== 0);
  }
  function Zi(_, e, t) {
    _.depthRange(e, t);
  }
  function ef(_, e, t) {
    _.depthRange(e, t);
  }
  function _f(_, e) {
    const t = e.description, r = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function tf(_) {
    _.destroy();
  }
  function rf(_) {
    return _.devicePixelRatio;
  }
  function nf(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function af(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function of(_, e) {
    _.disable(e >>> 0);
  }
  function bf(_, e) {
    _.disable(e >>> 0);
  }
  function cf(_) {
    const e = _.document;
    return $(e) ? 0 : P(e);
  }
  function sf(_) {
    return _.done;
  }
  function ff(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function uf(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function df(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function gf(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function pf(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function wf(_, e) {
    _.drawBuffers(e);
  }
  function lf(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function mf(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function hf(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function yf(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function xf(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function $f(_, e) {
    _.enable(e >>> 0);
  }
  function vf(_, e) {
    _.enable(e >>> 0);
  }
  function Sf(_, e) {
    _.endQuery(e >>> 0);
  }
  function Af(_) {
    _.end();
  }
  function If(_) {
    return Object.entries(_);
  }
  function Ff(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function Df(_) {
    console.error(_);
  }
  function Tf(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(A(_, e));
    } finally {
      i.__wbindgen_free(t, r, 1);
    }
  }
  function Bf(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return $(r) ? 0 : P(r);
  }
  function Pf(_) {
    return _.finish();
  }
  function kf(_, e) {
    return _.finish(e);
  }
  function Mf(_) {
    _.flush();
  }
  function Rf(_) {
    _.flush();
  }
  function Cf() {
    return y(function(_) {
      _.focus();
    }, arguments);
  }
  function Vf(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function Lf(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function Ef(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function Gf(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function Of(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function Wf(_, e, t, r, n, a, o) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, o);
  }
  function zf(_, e) {
    _.frontFace(e >>> 0);
  }
  function Uf(_, e) {
    _.frontFace(e >>> 0);
  }
  function Hf(_) {
    return _.getBoundingClientRect();
  }
  function qf(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function jf() {
    return y(function(_, e, t, r) {
      const n = _.getContext(A(e, t), r);
      return $(n) ? 0 : P(n);
    }, arguments);
  }
  function Kf() {
    return y(function(_, e, t) {
      const r = _.getContext(A(e, t));
      return $(r) ? 0 : P(r);
    }, arguments);
  }
  function Nf() {
    return y(function(_, e, t) {
      const r = _.getContext(A(e, t));
      return $(r) ? 0 : P(r);
    }, arguments);
  }
  function Jf() {
    return y(function(_, e, t, r) {
      const n = _.getContext(A(e, t), r);
      return $(n) ? 0 : P(n);
    }, arguments);
  }
  function Qf() {
    return y(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function Xf(_, e, t) {
    const r = _.getElementById(A(e, t));
    return $(r) ? 0 : P(r);
  }
  function Yf() {
    return y(function(_, e, t) {
      const r = _.getExtension(A(e, t));
      return $(r) ? 0 : P(r);
    }, arguments);
  }
  function Zf() {
    return y(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function eu() {
    return y(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function _u(_, e, t) {
    return _.getModifierState(A(e, t));
  }
  function tu() {
    return y(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function ru() {
    return y(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function nu(_) {
    const e = _.getPreferredCanvasFormat();
    return (be.indexOf(e) + 1 || 96) - 1;
  }
  function au(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : G(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function ou(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : G(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function bu(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function cu(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function su(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function iu(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : G(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function fu(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : G(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function uu(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function du(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function gu(_) {
    const e = _.getSupportedExtensions();
    return $(e) ? 0 : P(e);
  }
  function pu(_) {
    const e = _.getSupportedProfiles();
    return $(e) ? 0 : P(e);
  }
  function wu(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function lu(_, e, t, r) {
    return _.getUniformBlockIndex(e, A(t, r));
  }
  function mu(_, e, t, r) {
    const n = _.getUniformLocation(e, A(t, r));
    return $(n) ? 0 : P(n);
  }
  function hu(_, e, t, r) {
    const n = _.getUniformLocation(e, A(t, r));
    return $(n) ? 0 : P(n);
  }
  function yu(_, e) {
    return _[e >>> 0];
  }
  function xu(_, e) {
    const t = _[e >>> 0];
    return $(t) ? 0 : P(t);
  }
  function $u() {
    return y(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function vu(_, e) {
    return _[e >>> 0];
  }
  function Su(_, e) {
    return _[e];
  }
  function Au(_) {
    return _.gpu;
  }
  function Iu(_, e, t) {
    return _.hasAttribute(A(e, t));
  }
  function Fu(_) {
    return _.height;
  }
  function Du(_) {
    return _.height;
  }
  function Tu(_) {
    return _.hidden;
  }
  function Bu(_, e, t) {
    return _.includes(e, t);
  }
  function Pu(_) {
    return _.info;
  }
  function ku(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function Mu(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function Ru(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function Cu(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Vu(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function Lu(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function Eu(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function Gu(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function Ou(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Wu(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function zu() {
    return y(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function Uu(_) {
    return Array.isArray(_);
  }
  function Hu(_) {
    return _.isComposing;
  }
  function qu(_) {
    return Number.isSafeInteger(_);
  }
  function ju(_, e) {
    return Object.is(_, e);
  }
  function Ku() {
    return Symbol.iterator;
  }
  function Nu(_, e) {
    const t = e.key, r = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Ju(_, e) {
    const t = e.label, r = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Qu(_) {
    return _.length;
  }
  function Xu(_) {
    return _.length;
  }
  function Yu(_) {
    return _.limits;
  }
  function Zu(_) {
    return _.limits;
  }
  function ed(_, e) {
    _.linkProgram(e);
  }
  function _d(_, e) {
    _.linkProgram(e);
  }
  function td(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function rd(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function nd(_) {
    return _.maxBindGroups;
  }
  function ad(_) {
    return _.maxBindingsPerBindGroup;
  }
  function od(_) {
    return _.maxBufferSize;
  }
  function bd(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function cd(_) {
    return _.maxColorAttachments;
  }
  function sd(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function id(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function fd(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function ud(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function dd(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function gd(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function pd(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function wd(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function ld(_) {
    return _.maxInterStageShaderVariables;
  }
  function md(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function hd(_) {
    return _.maxSamplersPerShaderStage;
  }
  function yd(_) {
    return _.maxStorageBufferBindingSize;
  }
  function xd(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function $d(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function vd(_) {
    return _.maxTextureArrayLayers;
  }
  function Sd(_) {
    return _.maxTextureDimension1D;
  }
  function Ad(_) {
    return _.maxTextureDimension2D;
  }
  function Id(_) {
    return _.maxTextureDimension3D;
  }
  function Fd(_) {
    return _.maxUniformBufferBindingSize;
  }
  function Dd(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function Td(_) {
    return _.maxVertexAttributes;
  }
  function Bd(_) {
    return _.maxVertexBufferArrayStride;
  }
  function Pd(_) {
    return _.maxVertexBuffers;
  }
  function kd(_) {
    return _.metaKey;
  }
  function Md(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function Rd(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function Cd(_) {
    return _.navigator;
  }
  function Vd(_) {
    return _.navigator;
  }
  function Ld() {
    return y(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function Ed() {
    return new Error();
  }
  function Gd() {
    return new Object();
  }
  function Od() {
    return new Array();
  }
  function Wd(_) {
    return new Uint8Array(_);
  }
  function zd(_, e) {
    return new Error(A(_, e));
  }
  function Ud(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, o) => {
        const b = t.a;
        t.a = 0;
        try {
          return a2(b, t.b, a, o);
        } finally {
          t.a = b;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function Hd(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function qd() {
    return y(function(_) {
      return _.next();
    }, arguments);
  }
  function jd(_) {
    return _.next;
  }
  function Kd(_, e) {
    _.observe(e);
  }
  function Nd(_) {
    return Array.of(_);
  }
  function Jd(_) {
    return _.offsetX;
  }
  function Qd(_) {
    return _.offsetY;
  }
  function Xd(_) {
    return _.onSubmittedWorkDone();
  }
  function Yd(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function Zd(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function e0(_, e, t) {
    _.polygonOffset(e, t);
  }
  function _0(_, e, t) {
    _.polygonOffset(e, t);
  }
  function t0(_) {
    _.preventDefault();
  }
  function r0(_) {
    return P_.__wrap(_);
  }
  function n0(_, e, t) {
    Uint8Array.prototype.set.call(u_(_, e), t);
  }
  function a0(_, e) {
    return _.push(e);
  }
  function o0(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function b0() {
    return y(function(_, e, t) {
      return _.querySelectorAll(A(e, t));
    }, arguments);
  }
  function c0() {
    return y(function(_, e, t) {
      const r = _.querySelector(A(e, t));
      return $(r) ? 0 : P(r);
    }, arguments);
  }
  function s0(_) {
    return _.queueMicrotask;
  }
  function i0(_) {
    queueMicrotask(_);
  }
  function f0(_) {
    return _.queue;
  }
  function u0(_, e) {
    _.readBuffer(e >>> 0);
  }
  function d0() {
    return y(function(_, e, t, r, n, a, o, b) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, b);
    }, arguments);
  }
  function g0() {
    return y(function(_, e, t, r, n, a, o, b) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, b);
    }, arguments);
  }
  function p0() {
    return y(function(_, e, t, r, n, a, o, b) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, b);
    }, arguments);
  }
  function w0(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function l0(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function m0(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function h0(_) {
    return _.repeat;
  }
  function y0(_, e) {
    return _.requestAdapter(e);
  }
  function x0(_) {
    return _.requestAdapter();
  }
  function $0() {
    return y(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function v0(_, e) {
    return _.requestDevice(e);
  }
  function S0(_) {
    return Promise.resolve(_);
  }
  function A0(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function I0(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function F0(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function D0(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function T0() {
    return y(function(_, e, t, r, n) {
      _.setAttribute(A(e, t), A(r, n));
    }, arguments);
  }
  function B0() {
    return y(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, ve(r, n), a, o >>> 0);
    }, arguments);
  }
  function P0(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function k0(_, e, t, r, n) {
    _.setIndexBuffer(e, q_[t], r, n);
  }
  function M0(_, e, t, r) {
    _.setIndexBuffer(e, q_[t], r);
  }
  function R0(_, e) {
    _.setPipeline(e);
  }
  function C0(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function V0(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function L0(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
  }
  function E0(_, e, t) {
    _.set(e, t >>> 0);
  }
  function G0() {
    return y(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function O0(_, e, t) {
    _[e] = t;
  }
  function W0(_, e) {
    _.a = e;
  }
  function z0(_, e) {
    _.access = w2[e];
  }
  function U0(_, e) {
    _.addressModeU = U_[e];
  }
  function H0(_, e) {
    _.addressModeV = U_[e];
  }
  function q0(_, e) {
    _.addressModeW = U_[e];
  }
  function j0(_, e) {
    _.alpha = e;
  }
  function K0(_, e) {
    _.alphaMode = s2[e];
  }
  function N0(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function J0(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function Q0(_, e) {
    _.arrayStride = e;
  }
  function X0(_, e) {
    _.aspect = Ht[e];
  }
  function Y0(_, e) {
    _.aspect = Ht[e];
  }
  function Z0(_, e) {
    _.attributes = e;
  }
  function eg(_, e) {
    _.b = e;
  }
  function _g(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function tg(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function rg(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function ng(_, e) {
    _.bindGroupLayouts = e;
  }
  function ag(_, e) {
    _.binding = e >>> 0;
  }
  function og(_, e) {
    _.binding = e >>> 0;
  }
  function bg(_, e) {
    _.blend = e;
  }
  function cg(_, e) {
    _.buffer = e;
  }
  function sg(_, e) {
    _.buffer = e;
  }
  function ig(_, e) {
    _.buffers = e;
  }
  function fg(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function ug(_, e) {
    _.clearValue = e;
  }
  function dg(_, e, t) {
    _.code = A(e, t);
  }
  function gg(_, e) {
    _.colorAttachments = e;
  }
  function pg(_, e) {
    _.color = e;
  }
  function wg(_, e) {
    _.compare = H_[e];
  }
  function lg(_, e) {
    _.compare = H_[e];
  }
  function mg(_, e) {
    _.count = e >>> 0;
  }
  function hg(_, e) {
    _.cullMode = i2[e];
  }
  function yg(_, e, t) {
    _[e >>> 0] = t;
  }
  function xg(_, e) {
    _.depthBias = e;
  }
  function $g(_, e) {
    _.depthBiasClamp = e;
  }
  function vg(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function Sg(_, e) {
    _.depthClearValue = e;
  }
  function Ag(_, e) {
    _.depthCompare = H_[e];
  }
  function Ig(_, e) {
    _.depthFailOp = K_[e];
  }
  function Fg(_, e) {
    _.depthLoadOp = j_[e];
  }
  function Dg(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function Tg(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function Bg(_, e) {
    _.depthStencil = e;
  }
  function Pg(_, e) {
    _.depthStencilAttachment = e;
  }
  function kg(_, e) {
    _.depthStoreOp = N_[e];
  }
  function Mg(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function Rg(_, e) {
    _.device = e;
  }
  function Cg(_, e) {
    _.dimension = J_[e];
  }
  function Vg(_, e) {
    _.dimension = l2[e];
  }
  function Lg(_, e) {
    _.dstFactor = zt[e];
  }
  function Eg(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function Gg(_, e) {
    _.entries = e;
  }
  function Og(_, e) {
    _.entries = e;
  }
  function Wg(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function zg(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function Ug(_, e) {
    _.externalTexture = e;
  }
  function Hg(_, e) {
    _.failOp = K_[e];
  }
  function qg(_, e) {
    _.format = be[e];
  }
  function jg(_, e) {
    _.format = h2[e];
  }
  function Kg(_, e) {
    _.format = be[e];
  }
  function Ng(_, e) {
    _.format = be[e];
  }
  function Jg(_, e) {
    _.format = be[e];
  }
  function Qg(_, e) {
    _.format = be[e];
  }
  function Xg(_, e) {
    _.format = be[e];
  }
  function Yg(_, e) {
    _.fragment = e;
  }
  function Zg(_, e) {
    _.frontFace = f2[e];
  }
  function ep(_, e) {
    _.g = e;
  }
  function _p(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function tp(_, e) {
    _.height = e >>> 0;
  }
  function rp(_, e) {
    _.height = e >>> 0;
  }
  function np(_, e) {
    _.height = e >>> 0;
  }
  function ap(_, e, t) {
    _.label = A(e, t);
  }
  function op(_, e, t) {
    _.label = A(e, t);
  }
  function bp(_, e, t) {
    _.label = A(e, t);
  }
  function cp(_, e, t) {
    _.label = A(e, t);
  }
  function sp(_, e, t) {
    _.label = A(e, t);
  }
  function ip(_, e, t) {
    _.label = A(e, t);
  }
  function fp(_, e, t) {
    _.label = A(e, t);
  }
  function up(_, e, t) {
    _.label = A(e, t);
  }
  function dp(_, e, t) {
    _.label = A(e, t);
  }
  function gp(_, e, t) {
    _.label = A(e, t);
  }
  function pp(_, e, t) {
    _.label = A(e, t);
  }
  function wp(_, e, t) {
    _.label = A(e, t);
  }
  function lp(_, e, t) {
    _.label = A(e, t);
  }
  function mp(_, e) {
    _.layout = e;
  }
  function hp(_, e) {
    _.layout = e;
  }
  function yp(_, e) {
    _.loadOp = j_[e];
  }
  function xp(_, e) {
    _.lodMaxClamp = e;
  }
  function $p(_, e) {
    _.lodMinClamp = e;
  }
  function vp(_, e) {
    _.magFilter = Ut[e];
  }
  function Sp(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function Ap(_, e) {
    _.mask = e >>> 0;
  }
  function Ip(_, e) {
    _.maxAnisotropy = e;
  }
  function Fp(_, e) {
    _.minBindingSize = e;
  }
  function Dp(_, e) {
    _.minFilter = Ut[e];
  }
  function Tp(_, e) {
    _.mipLevel = e >>> 0;
  }
  function Bp(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Pp(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function kp(_, e) {
    _.mipmapFilter = u2[e];
  }
  function Mp(_, e) {
    _.module = e;
  }
  function Rp(_, e) {
    _.module = e;
  }
  function Cp(_, e) {
    _.multisample = e;
  }
  function Vp(_, e) {
    _.multisampled = e !== 0;
  }
  function Lp(_, e) {
    _.offset = e;
  }
  function Ep(_, e) {
    _.offset = e;
  }
  function Gp(_, e) {
    _.offset = e;
  }
  function Op(_, e) {
    _.operation = b2[e];
  }
  function Wp(_, e) {
    _.origin = e;
  }
  function zp(_, e) {
    _.passOp = K_[e];
  }
  function Up(_, e) {
    _.powerPreference = d2[e];
  }
  function Hp(_, e) {
    _.primitive = e;
  }
  function qp(_, e) {
    _.querySet = e;
  }
  function jp(_, e) {
    _.r = e;
  }
  function Kp(_, e) {
    _.requiredFeatures = e;
  }
  function Np(_, e) {
    _.requiredLimits = e;
  }
  function Jp(_, e) {
    _.resolveTarget = e;
  }
  function Qp(_, e) {
    _.resource = e;
  }
  function Xp(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function Yp(_, e) {
    _.sampleCount = e >>> 0;
  }
  function Zp(_, e) {
    _.sampleType = m2[e];
  }
  function ew(_, e) {
    _.sampler = e;
  }
  function _w(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function tw(_, e) {
    _.size = e;
  }
  function rw(_, e) {
    _.size = e;
  }
  function nw(_, e) {
    _.size = e;
  }
  function aw(_, e) {
    _.srcFactor = zt[e];
  }
  function ow(_, e) {
    _.stencilBack = e;
  }
  function bw(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function cw(_, e) {
    _.stencilFront = e;
  }
  function sw(_, e) {
    _.stencilLoadOp = j_[e];
  }
  function iw(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function fw(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function uw(_, e) {
    _.stencilStoreOp = N_[e];
  }
  function dw(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function gw(_, e) {
    _.stepMode = y2[e];
  }
  function pw(_, e) {
    _.storageTexture = e;
  }
  function ww(_, e) {
    _.storeOp = N_[e];
  }
  function lw(_, e) {
    _.stripIndexFormat = q_[e];
  }
  function mw(_, e) {
    _.targets = e;
  }
  function hw(_, e) {
    _.texture = e;
  }
  function yw(_, e) {
    _.texture = e;
  }
  function xw(_, e) {
    _.timestampWrites = e;
  }
  function $w(_, e) {
    _.topology = g2[e];
  }
  function vw(_, e) {
    _.type = c2[e];
  }
  function Sw(_, e) {
    _.type = p2[e];
  }
  function Aw(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function Iw(_, e) {
    _.usage = e >>> 0;
  }
  function Fw(_, e) {
    _.usage = e >>> 0;
  }
  function Dw(_, e) {
    _.usage = e >>> 0;
  }
  function Tw(_, e) {
    _.usage = e >>> 0;
  }
  function Bw(_, e) {
    _.vertex = e;
  }
  function Pw(_, e) {
    _.view = e;
  }
  function kw(_, e) {
    _.view = e;
  }
  function Mw(_, e) {
    _.viewDimension = J_[e];
  }
  function Rw(_, e) {
    _.viewDimension = J_[e];
  }
  function Cw(_, e) {
    _.viewFormats = e;
  }
  function Vw(_, e) {
    _.viewFormats = e;
  }
  function Lw(_, e) {
    _.visibility = e >>> 0;
  }
  function Ew(_, e) {
    _.width = e >>> 0;
  }
  function Gw(_, e) {
    _.width = e >>> 0;
  }
  function Ow(_, e) {
    _.width = e >>> 0;
  }
  function Ww(_, e) {
    _.writeMask = e >>> 0;
  }
  function zw(_, e) {
    _.x = e >>> 0;
  }
  function Uw(_, e) {
    _.y = e >>> 0;
  }
  function Hw(_, e) {
    _.z = e >>> 0;
  }
  function qw(_, e, t, r) {
    _.shaderSource(e, A(t, r));
  }
  function jw(_, e, t, r) {
    _.shaderSource(e, A(t, r));
  }
  function Kw(_) {
    return _.shiftKey;
  }
  function Nw(_, e) {
    const t = e.stack, r = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Jw() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return $(_) ? 0 : P(_);
  }
  function Qw() {
    const _ = typeof global > "u" ? null : global;
    return $(_) ? 0 : P(_);
  }
  function Xw() {
    const _ = typeof self > "u" ? null : self;
    return $(_) ? 0 : P(_);
  }
  function Yw() {
    const _ = typeof window > "u" ? null : window;
    return $(_) ? 0 : P(_);
  }
  function Zw(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function e1(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function _1(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function t1(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function r1(_, e) {
    _.stencilMask(e >>> 0);
  }
  function n1(_, e) {
    _.stencilMask(e >>> 0);
  }
  function a1(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function o1(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function b1(_, e) {
    _.submit(e);
  }
  function c1() {
    return y(function(_, e, t, r, n, a, o, b, c, u) {
      _.texImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function s1() {
    return y(function(_, e, t, r, n, a, o, b, c, u) {
      _.texImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function i1() {
    return y(function(_, e, t, r, n, a, o, b, c, u) {
      _.texImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function f1() {
    return y(function(_, e, t, r, n, a, o, b, c, u, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, b, c >>> 0, u >>> 0, d);
    }, arguments);
  }
  function u1() {
    return y(function(_, e, t, r, n, a, o, b, c, u, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, b, c >>> 0, u >>> 0, d);
    }, arguments);
  }
  function d1(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function g1(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function p1(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function w1(_, e, t, r, n, a, o) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, o);
  }
  function l1() {
    return y(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function m1() {
    return y(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function h1() {
    return y(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function y1() {
    return y(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function x1() {
    return y(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function $1() {
    return y(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function v1() {
    return y(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function S1() {
    return y(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function A1() {
    return y(function(_, e, t, r, n, a, o, b, c, u, d, T) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, T);
    }, arguments);
  }
  function I1() {
    return y(function(_, e, t, r, n, a, o, b, c, u, d, T) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, T);
    }, arguments);
  }
  function F1() {
    return y(function(_, e, t, r, n, a, o, b, c, u, d, T) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, T);
    }, arguments);
  }
  function D1() {
    return y(function(_, e, t, r, n, a, o, b, c, u, d, T) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, T);
    }, arguments);
  }
  function T1() {
    return y(function(_, e, t, r, n, a, o, b, c, u, d, T) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, T);
    }, arguments);
  }
  function B1() {
    return y(function(_, e, t, r, n, a, o, b, c, u, d, T) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, T);
    }, arguments);
  }
  function P1() {
    return y(function(_, e, t, r, n, a, o, b, c, u, d, T) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, T);
    }, arguments);
  }
  function k1(_, e, t) {
    return _.then(e, t);
  }
  function M1(_, e, t) {
    return _.then(e, t);
  }
  function R1(_, e) {
    return _.then(e);
  }
  function C1(_, e, t) {
    _.uniform1f(e, t);
  }
  function V1(_, e, t) {
    _.uniform1f(e, t);
  }
  function L1(_, e, t) {
    _.uniform1i(e, t);
  }
  function E1(_, e, t) {
    _.uniform1i(e, t);
  }
  function G1(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function O1(_, e, t, r) {
    _.uniform2fv(e, O(t, r));
  }
  function W1(_, e, t, r) {
    _.uniform2fv(e, O(t, r));
  }
  function z1(_, e, t, r) {
    _.uniform2iv(e, Z(t, r));
  }
  function U1(_, e, t, r) {
    _.uniform2iv(e, Z(t, r));
  }
  function H1(_, e, t, r) {
    _.uniform2uiv(e, ve(t, r));
  }
  function q1(_, e, t, r) {
    _.uniform3fv(e, O(t, r));
  }
  function j1(_, e, t, r) {
    _.uniform3fv(e, O(t, r));
  }
  function K1(_, e, t, r) {
    _.uniform3iv(e, Z(t, r));
  }
  function N1(_, e, t, r) {
    _.uniform3iv(e, Z(t, r));
  }
  function J1(_, e, t, r) {
    _.uniform3uiv(e, ve(t, r));
  }
  function Q1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function X1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function Y1(_, e, t, r) {
    _.uniform4fv(e, O(t, r));
  }
  function Z1(_, e, t, r) {
    _.uniform4fv(e, O(t, r));
  }
  function el(_, e, t, r) {
    _.uniform4iv(e, Z(t, r));
  }
  function _l(_, e, t, r) {
    _.uniform4iv(e, Z(t, r));
  }
  function tl(_, e, t, r) {
    _.uniform4uiv(e, ve(t, r));
  }
  function rl(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function nl(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, O(r, n));
  }
  function al(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, O(r, n));
  }
  function ol(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, O(r, n));
  }
  function bl(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, O(r, n));
  }
  function cl(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, O(r, n));
  }
  function sl(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, O(r, n));
  }
  function il(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, O(r, n));
  }
  function fl(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, O(r, n));
  }
  function ul(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, O(r, n));
  }
  function dl(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, O(r, n));
  }
  function gl(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, O(r, n));
  }
  function pl(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, O(r, n));
  }
  function wl(_) {
    _.unmap();
  }
  function ll(_, e) {
    _.useProgram(e);
  }
  function ml(_, e) {
    _.useProgram(e);
  }
  function hl(_) {
    return _.value;
  }
  function yl(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function xl(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function $l(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function vl(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function Sl(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function Al(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function Il(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function Fl(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function Dl(_) {
    return _.width;
  }
  function Tl(_) {
    return _.width;
  }
  function Bl() {
    return y(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, u_(r, n), a, o);
    }, arguments);
  }
  function Pl() {
    return y(function(_, e, t, r, n, a) {
      _.writeTexture(e, u_(t, r), n, a);
    }, arguments);
  }
  function kl(_, e) {
    return ee(_, e, Zl);
  }
  function Ml(_, e) {
    return ee(_, e, n2);
  }
  function Rl(_, e) {
    return ee(_, e, o2);
  }
  function Cl(_, e) {
    return ee(_, e, e2);
  }
  function Vl(_, e) {
    return ee(_, e, _2);
  }
  function Ll(_, e) {
    return ee(_, e, t2);
  }
  function El(_, e) {
    return ee(_, e, r2);
  }
  function Gl(_, e) {
    return ee(_, e, Yl);
  }
  function Ol(_) {
    return _;
  }
  function Wl(_) {
    return _;
  }
  function zl(_, e) {
    return O(_, e);
  }
  function Ul(_, e) {
    return x2(_, e);
  }
  function Hl(_, e) {
    return Z(_, e);
  }
  function ql(_, e) {
    return $2(_, e);
  }
  function jl(_, e) {
    return v2(_, e);
  }
  function Kl(_, e) {
    return ve(_, e);
  }
  function Nl(_, e) {
    return u_(_, e);
  }
  function Jl(_, e) {
    return A(_, e);
  }
  function Ql(_) {
    return BigInt.asUintN(64, _);
  }
  function Xl() {
    const _ = i.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function Yl(_, e) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke_______true_(_, e);
  }
  function Zl(_, e, t) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_(_, e, t);
  }
  function e2(_, e, t) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true_(_, e, t);
  }
  function _2(_, e, t) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__4(_, e, t);
  }
  function t2(_, e, t) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__5(_, e, t);
  }
  function r2(_, e, t) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__6(_, e, t);
  }
  function n2(_, e, t) {
    const r = i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_(_, e, t);
    if (r[1]) throw F(r[0]);
  }
  function a2(_, e, t, r) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined_______true_(_, e, t, r);
  }
  function o2(_, e, t) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___f64______true_(_, e, t);
  }
  const U_ = [
    "clamp-to-edge",
    "repeat",
    "mirror-repeat"
  ], zt = [
    "zero",
    "one",
    "src",
    "one-minus-src",
    "src-alpha",
    "one-minus-src-alpha",
    "dst",
    "one-minus-dst",
    "dst-alpha",
    "one-minus-dst-alpha",
    "src-alpha-saturated",
    "constant",
    "one-minus-constant",
    "src1",
    "one-minus-src1",
    "src1-alpha",
    "one-minus-src1-alpha"
  ], b2 = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], c2 = [
    "uniform",
    "storage",
    "read-only-storage"
  ], s2 = [
    "opaque",
    "premultiplied"
  ], H_ = [
    "never",
    "less",
    "equal",
    "less-equal",
    "greater",
    "not-equal",
    "greater-equal",
    "always"
  ], i2 = [
    "none",
    "front",
    "back"
  ], Ut = [
    "nearest",
    "linear"
  ], f2 = [
    "ccw",
    "cw"
  ], q_ = [
    "uint16",
    "uint32"
  ], j_ = [
    "load",
    "clear"
  ], u2 = [
    "nearest",
    "linear"
  ], d2 = [
    "low-power",
    "high-performance"
  ], g2 = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], p2 = [
    "filtering",
    "non-filtering",
    "comparison"
  ], K_ = [
    "keep",
    "zero",
    "replace",
    "invert",
    "increment-clamp",
    "decrement-clamp",
    "increment-wrap",
    "decrement-wrap"
  ], w2 = [
    "write-only",
    "read-only",
    "read-write"
  ], N_ = [
    "store",
    "discard"
  ], Ht = [
    "all",
    "stencil-only",
    "depth-only"
  ], l2 = [
    "1d",
    "2d",
    "3d"
  ], be = [
    "r8unorm",
    "r8snorm",
    "r8uint",
    "r8sint",
    "r16uint",
    "r16sint",
    "r16float",
    "rg8unorm",
    "rg8snorm",
    "rg8uint",
    "rg8sint",
    "r32uint",
    "r32sint",
    "r32float",
    "rg16uint",
    "rg16sint",
    "rg16float",
    "rgba8unorm",
    "rgba8unorm-srgb",
    "rgba8snorm",
    "rgba8uint",
    "rgba8sint",
    "bgra8unorm",
    "bgra8unorm-srgb",
    "rgb9e5ufloat",
    "rgb10a2uint",
    "rgb10a2unorm",
    "rg11b10ufloat",
    "rg32uint",
    "rg32sint",
    "rg32float",
    "rgba16uint",
    "rgba16sint",
    "rgba16float",
    "rgba32uint",
    "rgba32sint",
    "rgba32float",
    "stencil8",
    "depth16unorm",
    "depth24plus",
    "depth24plus-stencil8",
    "depth32float",
    "depth32float-stencil8",
    "bc1-rgba-unorm",
    "bc1-rgba-unorm-srgb",
    "bc2-rgba-unorm",
    "bc2-rgba-unorm-srgb",
    "bc3-rgba-unorm",
    "bc3-rgba-unorm-srgb",
    "bc4-r-unorm",
    "bc4-r-snorm",
    "bc5-rg-unorm",
    "bc5-rg-snorm",
    "bc6h-rgb-ufloat",
    "bc6h-rgb-float",
    "bc7-rgba-unorm",
    "bc7-rgba-unorm-srgb",
    "etc2-rgb8unorm",
    "etc2-rgb8unorm-srgb",
    "etc2-rgb8a1unorm",
    "etc2-rgb8a1unorm-srgb",
    "etc2-rgba8unorm",
    "etc2-rgba8unorm-srgb",
    "eac-r11unorm",
    "eac-r11snorm",
    "eac-rg11unorm",
    "eac-rg11snorm",
    "astc-4x4-unorm",
    "astc-4x4-unorm-srgb",
    "astc-5x4-unorm",
    "astc-5x4-unorm-srgb",
    "astc-5x5-unorm",
    "astc-5x5-unorm-srgb",
    "astc-6x5-unorm",
    "astc-6x5-unorm-srgb",
    "astc-6x6-unorm",
    "astc-6x6-unorm-srgb",
    "astc-8x5-unorm",
    "astc-8x5-unorm-srgb",
    "astc-8x6-unorm",
    "astc-8x6-unorm-srgb",
    "astc-8x8-unorm",
    "astc-8x8-unorm-srgb",
    "astc-10x5-unorm",
    "astc-10x5-unorm-srgb",
    "astc-10x6-unorm",
    "astc-10x6-unorm-srgb",
    "astc-10x8-unorm",
    "astc-10x8-unorm-srgb",
    "astc-10x10-unorm",
    "astc-10x10-unorm-srgb",
    "astc-12x10-unorm",
    "astc-12x10-unorm-srgb",
    "astc-12x12-unorm",
    "astc-12x12-unorm-srgb"
  ], m2 = [
    "float",
    "unfilterable-float",
    "depth",
    "sint",
    "uint"
  ], J_ = [
    "1d",
    "2d",
    "2d-array",
    "cube",
    "cube-array",
    "3d"
  ], h2 = [
    "uint8",
    "uint8x2",
    "uint8x4",
    "sint8",
    "sint8x2",
    "sint8x4",
    "unorm8",
    "unorm8x2",
    "unorm8x4",
    "snorm8",
    "snorm8x2",
    "snorm8x4",
    "uint16",
    "uint16x2",
    "uint16x4",
    "sint16",
    "sint16x2",
    "sint16x4",
    "unorm16",
    "unorm16x2",
    "unorm16x4",
    "snorm16",
    "snorm16x2",
    "snorm16x4",
    "float16",
    "float16x2",
    "float16x4",
    "float32",
    "float32x2",
    "float32x3",
    "float32x4",
    "uint32",
    "uint32x2",
    "uint32x3",
    "uint32x4",
    "sint32",
    "sint32x2",
    "sint32x3",
    "sint32x4",
    "unorm10-10-10-2",
    "unorm8x4-bgra"
  ], y2 = [
    "vertex",
    "instance"
  ], lt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbg_handle_free(_, 1)), w_ = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbg_proteusapp_free(_, 1)), mt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbg_texturehandle_free(_, 1)), ht = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbg_transitionchannel_free(_, 1)), yt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbg_videohandle_free(_, 1));
  function P(_) {
    const e = i.__externref_table_alloc();
    return i.__wbindgen_externrefs.set(e, _), e;
  }
  function p(_, e) {
    if (!(_ instanceof e)) throw new Error(`expected instance of ${e.name}`);
  }
  const xt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbindgen_destroy_closure(_.a, _.b));
  function M_(_) {
    const e = typeof _;
    if (e == "number" || e == "boolean" || _ == null) return `${_}`;
    if (e == "string") return `"${_}"`;
    if (e == "symbol") {
      const n = _.description;
      return n == null ? "Symbol" : `Symbol(${n})`;
    }
    if (e == "function") {
      const n = _.name;
      return typeof n == "string" && n.length > 0 ? `Function(${n})` : "Function";
    }
    if (Array.isArray(_)) {
      const n = _.length;
      let a = "[";
      n > 0 && (a += M_(_[0]));
      for (let o = 1; o < n; o++) a += ", " + M_(_[o]);
      return a += "]", a;
    }
    const t = /\[object ([^\]]+)\]/.exec(toString.call(_));
    let r;
    if (t && t.length > 1) r = t[1];
    else return toString.call(_);
    if (r == "Object") try {
      return "Object(" + JSON.stringify(_) + ")";
    } catch {
      return "Object";
    }
    return _ instanceof Error ? `${_.name}: ${_.message}
${_.stack}` : r;
  }
  function O(_, e) {
    return _ = _ >>> 0, S2().subarray(_ / 4, _ / 4 + e);
  }
  function x2(_, e) {
    return _ = _ >>> 0, I2().subarray(_ / 2, _ / 2 + e);
  }
  function Z(_, e) {
    return _ = _ >>> 0, F2().subarray(_ / 4, _ / 4 + e);
  }
  function $2(_, e) {
    return _ = _ >>> 0, D2().subarray(_ / 1, _ / 1 + e);
  }
  function v2(_, e) {
    return _ = _ >>> 0, T2().subarray(_ / 2, _ / 2 + e);
  }
  function ve(_, e) {
    return _ = _ >>> 0, B2().subarray(_ / 4, _ / 4 + e);
  }
  function u_(_, e) {
    return _ = _ >>> 0, me().subarray(_ / 1, _ / 1 + e);
  }
  let ie = null;
  function C() {
    return (ie === null || ie.buffer.detached === true || ie.buffer.detached === void 0 && ie.buffer !== i.memory.buffer) && (ie = new DataView(i.memory.buffer)), ie;
  }
  let Ge = null;
  function S2() {
    return (Ge === null || Ge.byteLength === 0) && (Ge = new Float32Array(i.memory.buffer)), Ge;
  }
  let Oe = null;
  function A2() {
    return (Oe === null || Oe.byteLength === 0) && (Oe = new Float64Array(i.memory.buffer)), Oe;
  }
  let We = null;
  function I2() {
    return (We === null || We.byteLength === 0) && (We = new Int16Array(i.memory.buffer)), We;
  }
  let ze = null;
  function F2() {
    return (ze === null || ze.byteLength === 0) && (ze = new Int32Array(i.memory.buffer)), ze;
  }
  let Ue = null;
  function D2() {
    return (Ue === null || Ue.byteLength === 0) && (Ue = new Int8Array(i.memory.buffer)), Ue;
  }
  function A(_, e) {
    return k2(_ >>> 0, e);
  }
  let He = null;
  function T2() {
    return (He === null || He.byteLength === 0) && (He = new Uint16Array(i.memory.buffer)), He;
  }
  let qe = null;
  function B2() {
    return (qe === null || qe.byteLength === 0) && (qe = new Uint32Array(i.memory.buffer)), qe;
  }
  let je = null;
  function me() {
    return (je === null || je.byteLength === 0) && (je = new Uint8Array(i.memory.buffer)), je;
  }
  function y(_, e) {
    try {
      return _.apply(this, e);
    } catch (t) {
      const r = P(t);
      i.__wbindgen_exn_store(r);
    }
  }
  function $(_) {
    return _ == null;
  }
  function ee(_, e, t) {
    const r = {
      a: _,
      b: e,
      cnt: 1
    }, n = (...a) => {
      r.cnt++;
      const o = r.a;
      r.a = 0;
      try {
        return t(o, r.b, ...a);
      } finally {
        r.a = o, n._wbg_cb_unref();
      }
    };
    return n._wbg_cb_unref = () => {
      --r.cnt === 0 && (i.__wbindgen_destroy_closure(r.a, r.b), r.a = 0, xt.unregister(r));
    }, xt.register(n, r, r), n;
  }
  function Ke(_, e) {
    const t = e(_.length * 1, 1) >>> 0;
    return me().set(_, t / 1), M = _.length, t;
  }
  function Ne(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return A2().set(_, t / 8), M = _.length, t;
  }
  function $t(_, e) {
    const t = e(_.length * 4, 4) >>> 0;
    for (let r = 0; r < _.length; r++) {
      const n = P(_[r]);
      C().setUint32(t + 4 * r, n, true);
    }
    return M = _.length, t;
  }
  function G(_, e, t) {
    if (t === void 0) {
      const b = Ie.encode(_), c = e(b.length, 1) >>> 0;
      return me().subarray(c, c + b.length).set(b), M = b.length, c;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = me();
    let o = 0;
    for (; o < r; o++) {
      const b = _.charCodeAt(o);
      if (b > 127) break;
      a[n + o] = b;
    }
    if (o !== r) {
      o !== 0 && (_ = _.slice(o)), n = t(n, r, r = o + _.length * 3, 1) >>> 0;
      const b = me().subarray(n + o, n + r), c = Ie.encodeInto(_, b);
      o += c.written, n = t(n, r, o, 1) >>> 0;
    }
    return M = o, n;
  }
  function F(_) {
    const e = i.__wbindgen_externrefs.get(_);
    return i.__externref_table_dealloc(_), e;
  }
  let b_ = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  b_.decode();
  const P2 = 2146435072;
  let l_ = 0;
  function k2(_, e) {
    return l_ += e, l_ >= P2 && (b_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), b_.decode(), l_ = e), b_.decode(me().subarray(_, _ + e));
  }
  const Ie = new TextEncoder();
  "encodeInto" in Ie || (Ie.encodeInto = function(_, e) {
    const t = Ie.encode(_);
    return e.set(t), {
      read: _.length,
      written: t.length
    };
  });
  let M = 0, i;
  function M2(_) {
    i = _;
  }
  URL = globalThis.URL;
  const R2 = await G_({
    "./proteus_host_web_bg.js": {
      __wbg_call_5575218572ead796: Fs,
      __wbg_next_0c4066e251d2eff9: qd,
      __wbg_done_b62d4a7d2286852a: sf,
      __wbg_value_49f783bb59765962: hl,
      __wbg_length_c6054974c0a6cdb9: Xu,
      __wbg_get_unchecked_54a4374c38e08460: vu,
      __wbg_instanceof_Map_afa18d5840c04c15: Lu,
      __wbg_new_typed_00a409eb4ec4f2d9: Ud,
      __wbg_then_05edfc8a4fea5106: k1,
      __wbg_get_197a3fe98f169e38: yu,
      __wbg_new_227d7c05414eb861: Ed,
      __wbg_stack_3b0d974bbf31e44f: Nw,
      __wbg_error_a6fa202b58aa1cd3: Tf,
      __wbg_push_f724b5db8acf89d2: a0,
      __wbg_call_8e98ed2f3c86c4b5: Ds,
      __wbg_call_0e855b388e315e17: Is,
      __wbg_set_dc601f4a69da0bc2: yg,
      __wbg_proteusapp_new: r0,
      __wbg_get_with_ref_key_6412cf3094599694: Su,
      __wbg_set_6be42768c690e380: O0,
      __wbg_String_8564e559799eccda: xc,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: Cu,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: Sd,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: Ad,
      __wbg_maxTextureDimension3D_06ee54121b37d431: Id,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: vd,
      __wbg_maxBindGroups_14611ac9ed1c6b56: nd,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: ad,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: wd,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: pd,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: md,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: hd,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: xd,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: $d,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: Dd,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: Fd,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: yd,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: Pd,
      __wbg_maxBufferSize_f7ce3e1856349d2f: od,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: Td,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: Bd,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: ld,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: Rd,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: Md,
      __wbg_maxColorAttachments_fd9187f9f786da18: cd,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: bd,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: dd,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: sd,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: id,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: fd,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: ud,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: gd,
      __wbg_description_18d0a6d4077fec8e: _f,
      __wbg_set_dst_factor_1ed75271a89a711e: Lg,
      __wbg_set_operation_b5862f5a1a143b30: Op,
      __wbg_set_src_factor_1c4f755f8676df1b: aw,
      __wbg_set_texture_16d2be474ce6ad0c: hw,
      __wbg_set_mip_level_246db61be15bdd69: Tp,
      __wbg_set_x_56f0c2c08a62725c: zw,
      __wbg_set_y_04fb8ce84735b4e1: Uw,
      __wbg_set_z_a51316db27a4941e: Hw,
      __wbg_set_origin_9b3b0fbe0a5dc469: Wp,
      __wbg_set_aspect_77332ac136ee94eb: X0,
      __wbg_Window_a07901001eb4269f: $c,
      __wbg_gpu_a7c12045c25d009a: Au,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: vc,
      __wbg_set_a_5f6e488475272136: W0,
      __wbg_set_b_688365d692bba214: eg,
      __wbg_set_g_d4d1d77cf8fdd362: ep,
      __wbg_set_r_527e5a41c4b1a846: jp,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: Ru,
      __wbg_queue_65d985f3e6d786a6: f0,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: Up,
      __wbg_requestAdapter_9ff5c9d1ff271165: y0,
      __wbg_set_required_limits_3b031f66f838f4e3: Np,
      __wbg_set_required_features_54918de8185c5fab: Kp,
      __wbg_set_label_bae57fb9f24fde5c: fp,
      __wbg_requestDevice_c1c34f88a477e509: v0,
      __wbg_limits_50a8c5e629dbfe40: Zu,
      __wbg_info_22dcf1fd1b12bc7d: Pu,
      __wbg_set_size_41cd9255ca1e4242: rw,
      __wbg_set_usage_908213a4d4bb8bde: Dw,
      __wbg_set_mapped_at_creation_48de4735fab51e78: Sp,
      __wbg_set_label_cd567b7b35838e4c: gp,
      __wbg_createBuffer_2f08c0205e04efca: ai,
      __wbg_set_address_mode_u_a37cf1035585c638: U0,
      __wbg_set_address_mode_v_8ac049e029caef76: H0,
      __wbg_set_address_mode_w_eb9260ee11729e92: q0,
      __wbg_set_compare_42211fbf15e3b850: lg,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: xp,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: $p,
      __wbg_set_mag_filter_69d846b974d4bcc0: vp,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: Dp,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: kp,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: Ip,
      __wbg_set_label_dcd98efbb9370da8: wp,
      __wbg_createSampler_248bd67c920af37d: li,
      __wbg_set_width_1a5e2e86fa5bdcd8: Gw,
      __wbg_set_height_e8b5483b8c117d5e: rp,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: Dg,
      __wbg_set_format_e9d4b1475bb3bd3b: Qg,
      __wbg_set_size_a61ff22205255d61: nw,
      __wbg_set_usage_7fa9cd18d1104aca: Fw,
      __wbg_set_label_0c1bd0e976cf0a9a: op,
      __wbg_set_dimension_36e13ccecae5af4b: Vg,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: Pp,
      __wbg_set_sample_count_865e1d19b84e27e6: Yp,
      __wbg_set_view_formats_bab284fc81b40e70: Cw,
      __wbg_createTexture_9e76b80a2dc0d12e: Si,
      __wbg_set_entries_fc76ca4d7da6a709: Og,
      __wbg_set_layout_eeef59714f5bf48b: hp,
      __wbg_set_label_f92ae11c77d74198: lp,
      __wbg_createBindGroup_2320df4db188406c: ri,
      __wbg_set_code_56e2d45ec1ff6c2d: dg,
      __wbg_set_label_be45aed56e4b9fee: up,
      __wbg_createShaderModule_53701de4fb271c90: hi,
      __wbg_set_label_d1c24b5a7a3ac31d: pp,
      __wbg_createCommandEncoder_cd88faca35d9ed68: bi,
      __wbg_set_bind_group_layouts_5325d038771af328: ng,
      __wbg_set_label_2f592bd1be3db6b3: sp,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: ii,
      __wbg_set_module_14e471fdd94c582d: Rp,
      __wbg_set_entry_point_8db3b6d103e3b865: zg,
      __wbg_set_buffers_85a7238f4ef28ab4: ig,
      __wbg_set_layout_7c5ba5bdcde8a0f0: mp,
      __wbg_set_vertex_a4951dd9a7a4ed54: Bw,
      __wbg_set_label_c47c451211e2f6d2: dp,
      __wbg_set_format_f9341112e43ea182: Xg,
      __wbg_set_depth_compare_30e9ea552da12fe2: Ag,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: Mg,
      __wbg_set_depth_bias_428c9340b0fd937b: xg,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: $g,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: vg,
      __wbg_set_compare_1509dc1a5420943f: wg,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: Ig,
      __wbg_set_fail_op_77ab26c98f847b65: Hg,
      __wbg_set_pass_op_e9470d1262fb8a8b: zp,
      __wbg_set_stencil_back_6ef4683123b19b25: ow,
      __wbg_set_stencil_front_aeb8580a97e5424b: cw,
      __wbg_set_stencil_read_mask_2954f260d47349ea: iw,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: dw,
      __wbg_set_depth_stencil_1bd50dbc450c8650: Bg,
      __wbg_set_module_08ad08e736d8edbf: Mp,
      __wbg_set_targets_6b0b3bdd87f35668: mw,
      __wbg_set_entry_point_6fec5723cc790927: Wg,
      __wbg_set_fragment_1a595620425637e1: Yg,
      __wbg_set_count_26a934d1cd07d080: mg,
      __wbg_set_mask_0c49a66362fc0079: Ap,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: N0,
      __wbg_set_multisample_85f073947b782d07: Cp,
      __wbg_set_cull_mode_9d466c1ab414cac8: hg,
      __wbg_set_front_face_50cdf4eb61504a46: Zg,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: lw,
      __wbg_set_topology_beefb3aca0612b00: $w,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: Aw,
      __wbg_set_primitive_369241acd17871f1: Hp,
      __wbg_createRenderPipeline_f48187ba9f7701e8: gi,
      __wbg_set_entries_3017e6132f938c6e: Gg,
      __wbg_set_label_1175a3329a06e52b: bp,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: ti,
      __wbg_limits_1c25cb4f379a4418: Yu,
      __wbg_set_color_attachments_abe67f6631926e28: gg,
      __wbg_set_label_8fd860a36d2c7b74: ip,
      __wbg_set_view_dbd0294573f64d05: kw,
      __wbg_set_depth_clear_value_442bf492734f63b6: Sg,
      __wbg_set_depth_load_op_34d430b74bb36d91: Fg,
      __wbg_set_depth_store_op_0ea0a215313dbda7: kg,
      __wbg_set_depth_read_only_138a11b10c731094: Tg,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: bw,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: sw,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: uw,
      __wbg_set_stencil_read_only_fb489d191b6d969b: fw,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: Pg,
      __wbg_set_query_set_18679a8580267d5a: qp,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: rg,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: Eg,
      __wbg_set_timestamp_writes_c552d52fbb417005: xw,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: Kc,
      __wbg_copyTextureToTexture_1be188df1e535c0a: _i,
      __wbg_label_47480289cc2bce71: Ju,
      __wbg_set_label_2d2227f4d5991e50: cp,
      __wbg_finish_cfaeede3baf55be1: kf,
      __wbg_finish_087cb89c65c06eb1: Pf,
      __wbg_drawIndexed_68637ebab6dd8d6e: hf,
      __wbg_setPipeline_bab24dbce96903b9: R0,
      __wbg_setViewport_f9d423db4f4b4b58: L0,
      __wbg_setBindGroup_4ba56e1e0d26f244: B0,
      __wbg_setBindGroup_6124849cc8547086: P0,
      __wbg_setIndexBuffer_17431786d06c1b7c: k0,
      __wbg_setIndexBuffer_a16ed5b869c87507: M0,
      __wbg_setVertexBuffer_b508baf8d0ffe331: V0,
      __wbg_setVertexBuffer_91c4b602d0289943: C0,
      __wbg_end_414453a89205612c: Af,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: nu,
      __wbg_getCurrentTexture_51975ae7185fd15f: Qf,
      __wbg_set_device_0d774b66e7288f72: Rg,
      __wbg_set_format_d347899cd860709c: Jg,
      __wbg_set_usage_ae014e77ff77ce06: Tw,
      __wbg_set_alpha_mode_92402195b3ae1ee7: K0,
      __wbg_set_view_formats_fe531a043efb71fa: Vw,
      __wbg_configure_3d64c677c7d68a15: Js,
      __wbg_writeBuffer_b4bdd36178348ca5: Bl,
      __wbg_set_bytes_per_row_91681ca78d744888: fg,
      __wbg_set_rows_per_image_d198b7e73a38978b: Xp,
      __wbg_set_offset_a097a8050a3a9a33: Gp,
      __wbg_writeTexture_b45b69132e46a227: Pl,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: Xd,
      __wbg_submit_1290d44bb76ecef4: b1,
      __wbg_getMappedRange_5ed22727c9679168: eu,
      __wbg_unmap_8f06698a75b8331a: wl,
      __wbg_destroy_b5b39f25f0799295: tf,
      __wbg_mapAsync_bb0029907dd91181: rd,
      __wbg_set_dimension_174ad7e2fb67fb4e: Cg,
      __wbg_set_format_90860b0321868db4: Kg,
      __wbg_set_aspect_a823a14d00d42d37: Y0,
      __wbg_set_base_array_layer_cc6c68d233489c4b: _g,
      __wbg_set_array_layer_count_daec613068108a9d: J0,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: tg,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: Bp,
      __wbg_set_label_03d2396d4655a3e1: ap,
      __wbg_set_usage_7f0dda8309469b1c: Iw,
      __wbg_createView_cc96b5bdd3d5bf5e: Fi,
      __wbg_set_format_abf7a1bc5425c56a: Ng,
      __wbg_set_alpha_aa2e606e9e647b21: j0,
      __wbg_set_color_bc393d7efc3c8594: pg,
      __wbg_set_blend_8d6e9c08b5702a09: bg,
      __wbg_set_write_mask_144b25e2bd909124: Ww,
      __wbg_set_load_op_56844f51434037bf: yp,
      __wbg_set_store_op_caeede4654b3d847: ww,
      __wbg_set_view_bdeab150b5f0768c: Pw,
      __wbg_set_clear_value_642701f928a5ccb3: ug,
      __wbg_set_resolve_target_fe76b3f99cf72078: Jp,
      __wbg_set_buffer_55f096330c8912b4: cg,
      __wbg_set_offset_73156b0e0b41d79a: Lp,
      __wbg_set_size_1e6281b07cd39177: tw,
      __wbg_set_binding_f3c188a8cd21455b: og,
      __wbg_set_resource_fe385d2e3dadaf63: Qp,
      __wbg_set_format_6606f5c1fba6f459: jg,
      __wbg_set_offset_8d9d9afffa18b591: Ep,
      __wbg_set_shader_location_0ff30a733291a396: _w,
      __wbg_set_array_stride_c2c009eabc18b5f6: Q0,
      __wbg_set_attributes_05f9117fd32ca606: Z0,
      __wbg_set_step_mode_a35aef328761c452: gw,
      __wbg_set_binding_b6b0fe5c281b8c69: ag,
      __wbg_set_visibility_1bca121a89accba5: Lw,
      __wbg_set_type_c1eebc19f8a6aeb9: Sw,
      __wbg_set_sampler_8c5d7fb1b02058c6: ew,
      __wbg_set_multisampled_40505c1381e1c32c: Vp,
      __wbg_set_external_texture_825fe2bc7a0c0603: Ug,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: _p,
      __wbg_set_min_binding_size_689661b9ed25e083: Fp,
      __wbg_set_type_38961e08504ca674: vw,
      __wbg_set_buffer_e89095a9f0cafad3: sg,
      __wbg_set_sample_type_7088b1efddce6a69: Zp,
      __wbg_set_view_dimension_3ed01b237e85826f: Rw,
      __wbg_set_texture_e25a73da75cf5808: yw,
      __wbg_set_format_1786adb7bc74c7c9: qg,
      __wbg_set_access_091f317905cd76a5: z0,
      __wbg_set_view_dimension_263387976511ebc9: Mw,
      __wbg_set_storage_texture_ab9eed9786337ef0: pw,
      __wbg_requestAdapter_c46930b8bc33722d: x0,
      __wbg_includes_83dff8d05da243c5: Bu,
      __wbg_clearBufferuiv_1d2d93401c0904a3: Ps,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: qs,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: Ks,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: Ns,
      __wbg_copyBufferSubData_a944f33b601b822d: Xs,
      __wbg_clientWaitSync_7580165bd2eff461: Es,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: js,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: ei,
      __wbg_createQuery_f013132b870a71ef: di,
      __wbg_createSampler_9fe50152a2524319: mi,
      __wbg_createVertexArray_8685feb21901c932: Ii,
      __wbg_deleteQuery_ef51ea0a52420103: Ei,
      __wbg_deleteSampler_5c045e0cc55813d4: Wi,
      __wbg_getIndexedParameter_2b18df6fca85f751: Zf,
      __wbg_getQueryParameter_0599e85ddb81220b: su,
      __wbg_getSyncParameter_9a2bda340ebe166f: wu,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: lu,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: zu,
      __wbg_deleteSync_37ca83c429c43d8a: Hi,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: Ni,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: uf,
      __wbg_drawBuffers_558d96e52e754731: wf,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: mf,
      __wbg_endQuery_161170c5280a8293: Sf,
      __wbg_fenceSync_56efc7cc79111e54: Bf,
      __wbg_framebufferTextureLayer_2312acdc74f97676: Of,
      __wbg_getBufferSubData_92680d3a2f7be029: qf,
      __wbg_readBuffer_361ec5474f3aae49: u0,
      __wbg_readPixels_5840000f3e22f3ce: g0,
      __wbg_readPixels_5bf204799ed2272f: p0,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: w0,
      __wbg_texImage3D_8647ef58aef5b912: u1,
      __wbg_texStorage2D_ed5df596c5f1e3af: p1,
      __wbg_texStorage3D_160b0197bc190f04: w1,
      __wbg_texSubImage2D_f03448e182b0820d: S1,
      __wbg_texSubImage2D_d14d9c0a1f627c31: v1,
      __wbg_texSubImage2D_89866a04ecd0a76b: y1,
      __wbg_texSubImage2D_5c630043f1c56716: h1,
      __wbg_samplerParameterf_3157ba41c0f4d97a: A0,
      __wbg_samplerParameteri_f85a29156e790189: I0,
      __wbg_texImage2D_0e0f37b9fb297d01: c1,
      __wbg_texImage2D_0e537dc331652de3: s1,
      __wbg_texImage3D_30dbf7234481b8f5: f1,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: m1,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: x1,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: $1,
      __wbg_texSubImage3D_933e4cd41cc5376d: T1,
      __wbg_texSubImage3D_c3538b28040daac9: P1,
      __wbg_uniform1ui_36c94692177ebf76: G1,
      __wbg_uniform2fv_17592f4dad9798fb: O1,
      __wbg_uniform2iv_d5d29ebbc466977d: U1,
      __wbg_texSubImage3D_0fdbd843482bb916: I1,
      __wbg_texSubImage3D_09a97a968b93253d: A1,
      __wbg_texSubImage3D_355efde0dc047913: F1,
      __wbg_texSubImage3D_bd32c8e29e470904: B1,
      __wbg_texSubImage3D_5a238709d114b609: D1,
      __wbg_uniform2uiv_418ba3bf6a230dd5: H1,
      __wbg_uniform4fv_9e670a001c77dca0: Z1,
      __wbg_uniform4iv_1d57c6b8e5c0e447: el,
      __wbg_uniform3fv_dbe44b778e6b89e8: j1,
      __wbg_uniform3iv_d75d3a5f86d54be4: N1,
      __wbg_uniform3uiv_71c1efc24a662de9: J1,
      __wbg_uniform4uiv_c5d45f5dbdae727a: tl,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: cl,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: il,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: fl,
      __wbg_uniformBlockBinding_829a71912ad79a04: rl,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: nl,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: ol,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: bl,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: ul,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: $l,
      __wbg_activeTexture_525ee3068cb9e8d5: Wc,
      __wbg_attachShader_3477e67517b09b6b: Hc,
      __wbg_bindAttribLocation_79b5d26727094518: Nc,
      __wbg_bindBuffer_d3111de6861cb875: Xc,
      __wbg_bindFramebuffer_63e837a5dc0accfb: es,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: _s,
      __wbg_bindTexture_7ab28ff4ff3dc506: ns,
      __wbg_blendColor_15f26633b646e542: cs,
      __wbg_blendEquation_7dadb4db540a42da: us,
      __wbg_blendEquationSeparate_8240ddfa32266109: is,
      __wbg_blendFunc_b15af02643e188f1: ls,
      __wbg_blendFuncSeparate_456410f9919bed39: ps,
      __wbg_clear_dadcb3e2929388b0: Vs,
      __wbg_clearDepth_05c17028494ee4dd: ks,
      __wbg_clearStencil_917833d1e2ac56e4: Cs,
      __wbg_colorMask_f111e3e5796458f4: Ws,
      __wbg_compileShader_f5625b583b2c9fd6: zs,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: gl,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: pl,
      __wbg_vertexAttribDivisor_f17a8585267be92f: xl,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: Ys,
      __wbg_createBuffer_9f602b2dbcbf409c: oi,
      __wbg_createFramebuffer_4a250944a4542bbc: ci,
      __wbg_createProgram_4c8164d471c10346: fi,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: wi,
      __wbg_createShader_9c5cd42709d915ff: xi,
      __wbg_createTexture_3eed23cb87dd35fc: $i,
      __wbg_cullFace_94f24b4fd5e9038b: Bi,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: ki,
      __wbg_getExtension_11824edd67a143d8: Yf,
      __wbg_getParameter_7f7f23cae98f2c81: tu,
      __wbg_getProgramInfoLog_cd84be80942f345b: ou,
      __wbg_getProgramParameter_039391d5ba319f50: bu,
      __wbg_getShaderInfoLog_495bddda98172699: iu,
      __wbg_getShaderParameter_4eb65cfb174ceb22: uu,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: gu,
      __wbg_getUniformLocation_ab63f569a4e41744: hu,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: Ri,
      __wbg_deleteProgram_eff668280dcb01ca: Li,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: Oi,
      __wbg_deleteShader_3339454254c7147c: zi,
      __wbg_deleteTexture_c1c58550dc55af5c: ji,
      __wbg_depthFunc_31b183b5b8ee478e: Ji,
      __wbg_depthMask_cab7f2ae7f0e559c: Yi,
      __wbg_depthRange_797a71ba3b79267a: Zi,
      __wbg_disable_cb1b3e6c1cee5202: bf,
      __wbg_disableVertexAttribArray_b395358ec5084c39: af,
      __wbg_drawArrays_42dbb4b0349c8f34: gf,
      __wbg_enable_d1f42f78be33a553: vf,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: yf,
      __wbg_flush_7ae42f071230db6b: Mf,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: Lf,
      __wbg_framebufferTexture2D_367ab597a005e8d9: Ef,
      __wbg_frontFace_9bdcf2a758e989e5: zf,
      __wbg_linkProgram_e23a348b0f6e0c4f: _d,
      __wbg_pixelStorei_a78a504be58d1d0a: Zd,
      __wbg_polygonOffset_a4f07d97b9b0dced: _0,
      __wbg_renderbufferStorage_3049e13db5c4e60e: m0,
      __wbg_scissor_6c024669fbf4fe72: F0,
      __wbg_vertexAttribPointer_4e5d289c5d224210: Sl,
      __wbg_viewport_a0ca330f9b85397e: Al,
      __wbg_shaderSource_66dce75b25a1a407: jw,
      __wbg_stencilFuncSeparate_ec603976be9569a4: e1,
      __wbg_stencilMask_485dcb5965c79a71: r1,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: t1,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: a1,
      __wbg_texParameteri_c6efffcecb474d2f: d1,
      __wbg_uniform1f_3acd3f3eb50b5e11: C1,
      __wbg_uniform1i_e4f13604354c28ae: E1,
      __wbg_uniform4f_a5008773cfb47d1a: X1,
      __wbg_useProgram_ab2ee2a13a1fd909: ml,
      __wbg_bufferSubData_2270f1b9db71e642: vs,
      __wbg_clearBufferfv_6b77b9402254a2bf: Ts,
      __wbg_clearBufferiv_0f056544010eef3e: Bs,
      __wbg_beginQuery_dad334d972fed3cc: jc,
      __wbg_bindBufferRange_16a9d90becc2a7d7: Qc,
      __wbg_bindSampler_3c7002cb6d56ae8f: rs,
      __wbg_bindVertexArray_c391bd47303d75cd: bs,
      __wbg_blitFramebuffer_ea96ada8bba07582: ms,
      __wbg_bufferData_64e9905f2b3d3a6f: xs,
      __wbg_bufferData_99bbbc63f02251c4: $s,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: Ou,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: $0,
      __wbg_navigator_935098efd1dc7fe5: Vd,
      __wbg_devicePixelRatio_8e5ca44720abafec: rf,
      __wbg_document_2634180a4c694068: cf,
      __wbg_instanceof_Window_0d356b88a2f77c42: Wu,
      __wbg_hidden_cb32701ca3785fea: Tu,
      __wbg_getElementById_c7aba6b93b34bf01: Xf,
      __wbg_querySelector_1f3658f4b48e268b: c0,
      __wbg_querySelectorAll_ffda3c891a9eb29a: b0,
      __wbg_hasAttribute_73e1230c9c107e79: Iu,
      __wbg_setAttribute_8bccfbabf2a83682: T0,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: Hf,
      __wbg_focus_c80921c19b28520b: Cf,
      __wbg_uniform2iv_c5e863975dd780d8: z1,
      __wbg_uniform3fv_7723e142be50856f: q1,
      __wbg_uniform3iv_bea3976522e15d48: K1,
      __wbg_uniform4fv_85ad5d23234895d2: Y1,
      __wbg_clear_ff8cfdf420f7dde6: Ls,
      __wbg_clearDepth_ac6b54f112feeaf7: Ms,
      __wbg_clearStencil_56d6a6308294a749: Rs,
      __wbg_colorMask_b0ab9d429a1efa0a: Os,
      __wbg_compileShader_fcf3f3d2891f73f9: Us,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: Zs,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: ni,
      __wbg_createFramebuffer_ab73f30b5dc97415: si,
      __wbg_createProgram_f11c63f59f41b82a: ui,
      __wbg_createRenderbuffer_556000dbb01f5026: pi,
      __wbg_createShader_27d9388313f3b14e: yi,
      __wbg_createTexture_8455c703424c567b: vi,
      __wbg_cullFace_774780fb4177aab8: Ti,
      __wbg_deleteBuffer_d758283bea6e0ccf: Mi,
      __wbg_deleteFramebuffer_8953b325144192fe: Ci,
      __wbg_deleteProgram_0135c6926e75af75: Vi,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: Gi,
      __wbg_deleteShader_79dbaaed69b7ca3b: Ui,
      __wbg_deleteTexture_3acb672a45f9998a: qi,
      __wbg_depthFunc_eaca1bc79f7bf216: Qi,
      __wbg_depthMask_3a9074b08d1f68e5: Xi,
      __wbg_depthRange_c24a808b3496e0a9: ef,
      __wbg_uniform4iv_a9aaa92f2f458ec2: _l,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: al,
      __wbg_uniformMatrix3fv_da8c388748c5739b: sl,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: dl,
      __wbg_activeTexture_1d5359b20df41710: Oc,
      __wbg_attachShader_683d1070365e7066: qc,
      __wbg_bindAttribLocation_d56d3c40331af7ed: Jc,
      __wbg_bindBuffer_e95efaf0d4851845: Yc,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: Zc,
      __wbg_bindRenderbuffer_d608b211c51ed147: ts,
      __wbg_bindTexture_ffc56f1e5c5526c6: as,
      __wbg_blendColor_a0ba1cdcecc3a34c: ss,
      __wbg_blendEquation_8bfa69f639ae92da: ds,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: fs,
      __wbg_blendFunc_713c504adab14f98: ws,
      __wbg_blendFuncSeparate_3eef699c291dbc87: gs,
      __wbg_disable_4dca6ee0ccc91e4a: of,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: nf,
      __wbg_drawArrays_10e1254aa4524ae9: df,
      __wbg_enable_c6e523307311617a: $f,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: xf,
      __wbg_flush_eb3fb8da2ec00d57: Rf,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: Vf,
      __wbg_linkProgram_6a2eee02a03b9b00: ed,
      __wbg_pixelStorei_55ad4c67b699537c: Yd,
      __wbg_polygonOffset_06dc6468c12a57e1: e0,
      __wbg_renderbufferStorage_2918fb696fd45663: l0,
      __wbg_scissor_f9696c630e464977: D0,
      __wbg_shaderSource_628c37a476ae65f9: qw,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: Zw,
      __wbg_stencilMask_f9fe198f7fd6fc9c: n1,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: _1,
      __wbg_stencilOpSeparate_6cf50803475d2640: o1,
      __wbg_texParameteri_fe6210a493d48a16: g1,
      __wbg_framebufferTexture2D_3a558e14f56720d2: Gf,
      __wbg_frontFace_c9bb1fa659ffd276: Uf,
      __wbg_getParameter_91a344e1a84a4669: ru,
      __wbg_getProgramInfoLog_35410850de9ccefe: au,
      __wbg_getProgramParameter_bbc667347ac2e882: cu,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: fu,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: du,
      __wbg_getUniformLocation_340155dc706d3fea: mu,
      __wbg_uniform1f_d34e4b454f7c8e73: V1,
      __wbg_uniform1i_cd9a7f990128ea48: L1,
      __wbg_uniform4f_4410d2faaa7e5dda: Q1,
      __wbg_useProgram_0e1cd86765304939: ll,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: vl,
      __wbg_viewport_b5bd46a0d111c83c: Il,
      __wbg_texSubImage2D_1b2ff28f994c325e: l1,
      __wbg_uniform2fv_39277cf2d3cb83c7: W1,
      __wbg_bufferData_5df9bdb32e189eee: ys,
      __wbg_bufferData_26132561617ce8fb: hs,
      __wbg_bufferSubData_44db8a3b4a70b57d: Ss,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: Hs,
      __wbg_readPixels_05377f8b6fa1d8eb: d0,
      __wbg_texImage2D_7bc3001cb8602ed2: i1,
      __wbg_navigator_017bc45e84c473cc: Cd,
      __wbg_log_d282446d03691e72: td,
      __wbg_info_a392cd5b7536cfb5: ku,
      __wbg_warn_88c4a5bd9a322000: Fl,
      __wbg_debug_7271beced8b71cd4: Pi,
      __wbg_error_933f449d72fef598: Df,
      __wbg_error_50f60c611a3dcf64: Ff,
      __wbg_contentRect_0fb8c8900d689a0c: Qs,
      __wbg_width_08e66520b99071f4: Dl,
      __wbg_height_e9afb506f31052a9: Du,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: Eu,
      __wbg_set_width_f9e631f4ee129e5c: Ow,
      __wbg_set_height_ef298446b359b0c5: np,
      __wbg_getContext_70c2d1bed75d4122: Nf,
      __wbg_getContext_422b32d0ee4b8076: jf,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: Wf,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: ff,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: lf,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: yl,
      __wbg_set_width_031bdecd763c5855: Ew,
      __wbg_set_height_ad5056ea051acd78: tp,
      __wbg_getContext_486aab500e1c34c9: Kf,
      __wbg_getContext_9fd4db9b1cf155db: Jf,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: Vu,
      __wbg_addEventListener_ea90bc131475777e: zc,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: os,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: Ai,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: Ki,
      __wbg_new_1e52e3c919312525: Ld,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: pf,
      __wbg_observe_592b94857eed8e27: Kd,
      __wbg_altKey_7412dd64f8c921c7: Uc,
      __wbg_ctrlKey_00097886a21597a7: Di,
      __wbg_shiftKey_273ee8c901267b55: Kw,
      __wbg_metaKey_1c2847b62ad062c1: kd,
      __wbg_repeat_46a5c90df9f6ef0b: h0,
      __wbg_isComposing_e3709163a95a2477: Hu,
      __wbg_key_d6b3d2cce3d41872: Nu,
      __wbg_code_87bb99fdec02d313: Gs,
      __wbg_getModifierState_dae4d71262ea4ecb: _u,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: pu,
      __wbg_width_a86bcd32bd998060: Tl,
      __wbg_height_cd732bbdc7b66e49: Fu,
      __wbg_queryCounterEXT_ebb00bcc96221671: o0,
      __wbg_offsetX_0214819d43aaf6d5: Jd,
      __wbg_offsetY_f18f571e33b385ab: Qd,
      __wbg_button_bb3285fcdf965178: As,
      __wbg_get_37b48b8fa52d1f2c: xu,
      __wbg_preventDefault_c047d3e292b08cc4: t0,
      __wbg_resolve_d82363d90af6928a: S0,
      __wbg_then_591b6b3a75ee817a: R1,
      __wbg_iterator_cc47ba25a2be735a: Ku,
      __wbg_get_9a29be2cb383ed9a: $u,
      __wbg_next_402fa10b59ab20c3: jd,
      __wbg_new_2e117a478906f062: Gd,
      __wbg_new_36e147a8ced3c6e0: Od,
      __wbg_of_62183ea089c00bfa: Nd,
      __wbg_isArray_145a34fd0a38d37b: Uu,
      __wbg_new_e66a4b7758dd2e5c: zd,
      __wbg_isSafeInteger_a3389a198582f5f6: qu,
      __wbg_is_de5b366c746e004c: ju,
      __wbg_entries_c261c3fa1f281256: If,
      __wbg_then_2a84678a50976959: M1,
      __wbg_length_589238bdcf171f0e: Qu,
      __wbg_prototypesetcall_d721637c7ca66eb8: n0,
      __wbg_set_272b80acaf9a75e8: E0,
      __wbg_new_81880fb5002cb255: Wd,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: Hd,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: Jw,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: Xw,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Qw,
      __wbg_static_accessor_WINDOW_168f178805d978fe: Yw,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: Mu,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: Gu,
      __wbg_queueMicrotask_311744e534a929a3: i0,
      __wbg_queueMicrotask_1c9b3800e321a967: s0,
      __wbg_set_4564f7dc44fcb0c9: G0,
      __wbg___wbindgen_number_get_1cc01dd708740256: Vc,
      __wbg___wbindgen_in_4990f46af709e33c: Fc,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: Ec,
      __wbg___wbindgen_is_null_6d937fbfb6478470: Bc,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: Rc,
      __wbg_Number_c4bdf66bb78f7977: yc,
      __wbg_Error_fdd633d4bb5dd76a: hc,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: Dc,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: Pc,
      __wbg___wbindgen_is_string_1fca8072260dd261: kc,
      __wbg___wbindgen_string_get_71bb4348194e31f0: Lc,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: Ac,
      __wbg___wbindgen_is_function_acc5528be2b923f2: Tc,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: Mc,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: Cc,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: Sc,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: Gc,
      __wbg___wbindgen_debug_string_8a447059637473e2: Ic,
      __wbindgen_init_externref_table: Xl,
      __wbindgen_cast_0000000000000001: kl,
      __wbindgen_cast_0000000000000002: Ml,
      __wbindgen_cast_0000000000000003: Rl,
      __wbindgen_cast_0000000000000004: Cl,
      __wbindgen_cast_0000000000000005: Vl,
      __wbindgen_cast_0000000000000006: Ll,
      __wbindgen_cast_0000000000000007: El,
      __wbindgen_cast_0000000000000008: Gl,
      __wbindgen_cast_0000000000000009: Ol,
      __wbindgen_cast_000000000000000a: Wl,
      __wbindgen_cast_000000000000000b: zl,
      __wbindgen_cast_000000000000000c: Ul,
      __wbindgen_cast_000000000000000d: Hl,
      __wbindgen_cast_000000000000000e: ql,
      __wbindgen_cast_000000000000000f: jl,
      __wbindgen_cast_0000000000000010: Kl,
      __wbindgen_cast_0000000000000011: Nl,
      __wbindgen_cast_0000000000000012: Jl,
      __wbindgen_cast_0000000000000013: Ql
    }
  }, lc), { memory: C2, mount: V2, __wbg_proteusapp_free: L2, proteusapp_addChild: E2, proteusapp_animateTo: G2, proteusapp_bakeTexture: O2, proteusapp_bakedImageSize: W2, proteusapp_bakedTextSize: z2, proteusapp_bindKey: U2, proteusapp_channelDestroy: H2, proteusapp_channelSet: q2, proteusapp_clearFocus: j2, proteusapp_clearGlyphCache: K2, proteusapp_component: N2, proteusapp_copyBakedImageFrom: J2, proteusapp_createVideo: Q2, proteusapp_cropImage: X2, proteusapp_declareGeometry: Y2, proteusapp_declaredGeometry: Z2, proteusapp_destroy: e4, proteusapp_devices: _4, proteusapp_expectFont: t4, proteusapp_focus: r4, proteusapp_focused: n4, proteusapp_fontFailed: a4, proteusapp_freeResources: o4, proteusapp_get: b4, proteusapp_hideVideo: c4, proteusapp_inputDevices: s4, proteusapp_inputMode: i4, proteusapp_isFocused: f4, proteusapp_loadFont: u4, proteusapp_loadTexture: d4, proteusapp_mergeFrom: g4, proteusapp_mergeFromWithBehavior: p4, proteusapp_new: w4, proteusapp_onAppKey: l4, proteusapp_onBlur: m4, proteusapp_onClick: h4, proteusapp_onDrag: y4, proteusapp_onDropped: x4, proteusapp_onFocus: $4, proteusapp_onFocusLost: v4, proteusapp_onHoverEnter: S4, proteusapp_onHoverExit: A4, proteusapp_onKey: I4, proteusapp_onPress: F4, proteusapp_onRelease: D4, proteusapp_onTransitionComplete: T4, proteusapp_pointerLeft: B4, proteusapp_pointerMoved: P4, proteusapp_pointerPressed: k4, proteusapp_pointerReleased: M4, proteusapp_releaseVideo: R4, proteusapp_removeChild: C4, proteusapp_resetKeyMap: V4, proteusapp_setDeclaredGeometry: L4, proteusapp_setDefaultFocus: E4, proteusapp_setDevices: G4, proteusapp_setDisabled: O4, proteusapp_setFallbackFonts: W4, proteusapp_setFocusGroup: z4, proteusapp_setImage: U4, proteusapp_setInputDevices: H4, proteusapp_setInteractive: q4, proteusapp_setKeyRepeat: j4, proteusapp_setLongPressMs: K4, proteusapp_setNavigatingActions: N4, proteusapp_setNeighbour: J4, proteusapp_setOpacity: Q4, proteusapp_setReadingDirection: X4, proteusapp_setStyle: Y4, proteusapp_setStyleTransition: Z4, proteusapp_setText: e6, proteusapp_setTexture: _6, proteusapp_setTransitionInteraction: t6, proteusapp_setVideoCrossfade: r6, proteusapp_setVisible: n6, proteusapp_showVideo: a6, proteusapp_splitTo: o6, proteusapp_splitToWithBehavior: b6, proteusapp_splitToWithStates: c6, proteusapp_texture: s6, proteusapp_textureState: i6, proteusapp_tick: f6, proteusapp_transitionChannel: u6, proteusapp_unbindKey: d6, proteusapp_uploadVideoFrame: g6, __wbg_handle_free: p6, __wbg_texturehandle_free: w6, __wbg_transitionchannel_free: l6, __wbg_videohandle_free: m6, handle_fromId: h6, handle_id: y6, texturehandle_fromId: x6, texturehandle_id: $6, __abort_handler: v6, __instance_terminated: S6, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___f64______true_: A6, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_: I6, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined_______true_: F6, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_: D6, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true_: T6, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__4: B6, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__5: P6, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__6: k6, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke_______true_: M6, __wbindgen_malloc: R6, __wbindgen_realloc: C6, __wbindgen_exn_store: V6, __externref_table_alloc: L6, __wbindgen_externrefs: E6, __wbindgen_free: G6, __wbindgen_destroy_closure: O6, __externref_table_dealloc: W6, __wbindgen_start: qt } = R2, z6 = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: v6,
    __externref_table_alloc: L6,
    __externref_table_dealloc: W6,
    __instance_terminated: S6,
    __wbg_handle_free: p6,
    __wbg_proteusapp_free: L2,
    __wbg_texturehandle_free: w6,
    __wbg_transitionchannel_free: l6,
    __wbg_videohandle_free: m6,
    __wbindgen_destroy_closure: O6,
    __wbindgen_exn_store: V6,
    __wbindgen_externrefs: E6,
    __wbindgen_free: G6,
    __wbindgen_malloc: R6,
    __wbindgen_realloc: C6,
    __wbindgen_start: qt,
    handle_fromId: h6,
    handle_id: y6,
    memory: C2,
    mount: V2,
    proteusapp_addChild: E2,
    proteusapp_animateTo: G2,
    proteusapp_bakeTexture: O2,
    proteusapp_bakedImageSize: W2,
    proteusapp_bakedTextSize: z2,
    proteusapp_bindKey: U2,
    proteusapp_channelDestroy: H2,
    proteusapp_channelSet: q2,
    proteusapp_clearFocus: j2,
    proteusapp_clearGlyphCache: K2,
    proteusapp_component: N2,
    proteusapp_copyBakedImageFrom: J2,
    proteusapp_createVideo: Q2,
    proteusapp_cropImage: X2,
    proteusapp_declareGeometry: Y2,
    proteusapp_declaredGeometry: Z2,
    proteusapp_destroy: e4,
    proteusapp_devices: _4,
    proteusapp_expectFont: t4,
    proteusapp_focus: r4,
    proteusapp_focused: n4,
    proteusapp_fontFailed: a4,
    proteusapp_freeResources: o4,
    proteusapp_get: b4,
    proteusapp_hideVideo: c4,
    proteusapp_inputDevices: s4,
    proteusapp_inputMode: i4,
    proteusapp_isFocused: f4,
    proteusapp_loadFont: u4,
    proteusapp_loadTexture: d4,
    proteusapp_mergeFrom: g4,
    proteusapp_mergeFromWithBehavior: p4,
    proteusapp_new: w4,
    proteusapp_onAppKey: l4,
    proteusapp_onBlur: m4,
    proteusapp_onClick: h4,
    proteusapp_onDrag: y4,
    proteusapp_onDropped: x4,
    proteusapp_onFocus: $4,
    proteusapp_onFocusLost: v4,
    proteusapp_onHoverEnter: S4,
    proteusapp_onHoverExit: A4,
    proteusapp_onKey: I4,
    proteusapp_onPress: F4,
    proteusapp_onRelease: D4,
    proteusapp_onTransitionComplete: T4,
    proteusapp_pointerLeft: B4,
    proteusapp_pointerMoved: P4,
    proteusapp_pointerPressed: k4,
    proteusapp_pointerReleased: M4,
    proteusapp_releaseVideo: R4,
    proteusapp_removeChild: C4,
    proteusapp_resetKeyMap: V4,
    proteusapp_setDeclaredGeometry: L4,
    proteusapp_setDefaultFocus: E4,
    proteusapp_setDevices: G4,
    proteusapp_setDisabled: O4,
    proteusapp_setFallbackFonts: W4,
    proteusapp_setFocusGroup: z4,
    proteusapp_setImage: U4,
    proteusapp_setInputDevices: H4,
    proteusapp_setInteractive: q4,
    proteusapp_setKeyRepeat: j4,
    proteusapp_setLongPressMs: K4,
    proteusapp_setNavigatingActions: N4,
    proteusapp_setNeighbour: J4,
    proteusapp_setOpacity: Q4,
    proteusapp_setReadingDirection: X4,
    proteusapp_setStyle: Y4,
    proteusapp_setStyleTransition: Z4,
    proteusapp_setText: e6,
    proteusapp_setTexture: _6,
    proteusapp_setTransitionInteraction: t6,
    proteusapp_setVideoCrossfade: r6,
    proteusapp_setVisible: n6,
    proteusapp_showVideo: a6,
    proteusapp_splitTo: o6,
    proteusapp_splitToWithBehavior: b6,
    proteusapp_splitToWithStates: c6,
    proteusapp_texture: s6,
    proteusapp_textureState: i6,
    proteusapp_tick: f6,
    proteusapp_transitionChannel: u6,
    proteusapp_unbindKey: d6,
    proteusapp_uploadVideoFrame: g6,
    texturehandle_fromId: x6,
    texturehandle_id: $6,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke_______true_: M6,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___f64______true_: A6,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true_: T6,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__4: B6,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__5: P6,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__6: k6,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined_______true_: F6,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_: D6,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_: I6
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  M2(z6);
  qt();
  async function U6(_, e) {
    var _a3;
    const t = e.config ?? {}, r = ((_a3 = t.text) == null ? void 0 : _a3.font) ?? await H6();
    await mc(_, (n) => e.setup(new K6(n)), e.update ? (n) => {
      var _a4;
      return (_a4 = e.update) == null ? void 0 : _a4.call(e, n);
    } : void 0, {
      ...t,
      text: {
        ...t.text,
        font: r
      }
    });
  }
  async function H6() {
    const _ = new URL("" + new URL("Inter-Variable-VF2RPR_K.ttf", import.meta.url).href, import.meta.url), e = await fetch(_);
    if (!e.ok) throw new Error(`proteus-sdk: the built-in font couldn't be fetched from ${_} (${e.status}). Serve the package's fonts/ folder with the app, or set config.text.font.`);
    return new Uint8Array(await e.arrayBuffer());
  }
  let m_ = class {
    constructor(e, t) {
      this.app = e, this.wasmHandle = t;
    }
    id() {
      return this.wasmHandle.id();
    }
    get() {
      return this.app.get(this);
    }
    onClick(e) {
      this.app.wasmApp.onClick(this.wasmHandle, e);
    }
    onTransitionComplete(e) {
      this.app.wasmApp.onTransitionComplete(this.wasmHandle, e);
    }
    onHoverEnter(e) {
      this.app.wasmApp.onHoverEnter(this.wasmHandle, e);
    }
    onHoverExit(e) {
      this.app.wasmApp.onHoverExit(this.wasmHandle, e);
    }
    onPress(e) {
      this.app.wasmApp.onPress(this.wasmHandle, e);
    }
    onRelease(e) {
      this.app.wasmApp.onRelease(this.wasmHandle, e);
    }
    onKey(e) {
      this.app.wasmApp.onKey(this.wasmHandle, e);
    }
    onFocus(e) {
      this.app.wasmApp.onFocus(this.wasmHandle, e);
    }
    onBlur(e) {
      this.app.wasmApp.onBlur(this.wasmHandle, e);
    }
    onDrag(e) {
      this.app.wasmApp.onDrag(this.wasmHandle, (t, r) => e({
        x: t,
        y: r
      }));
    }
    addChild(e) {
      this.app.wasmApp.addChild(this.wasmHandle, e.wasmHandle);
    }
    removeChild(e) {
      this.app.wasmApp.removeChild(this.wasmHandle, e.wasmHandle);
    }
    splitTo(e, t, r, n) {
      const a = new Float64Array(e.map((o) => o.id()));
      n ? this.app.wasmApp.splitToWithBehavior(this.wasmHandle, a, t, r, n) : this.app.wasmApp.splitTo(this.wasmHandle, a, t, r);
    }
    mergeFrom(e, t, r, n) {
      const a = new Float64Array(e.map((o) => o.id()));
      n ? this.app.wasmApp.mergeFromWithBehavior(this.wasmHandle, a, t, r, n) : this.app.wasmApp.mergeFrom(this.wasmHandle, a, t, r);
    }
    destroy() {
      this.app.wasmApp.destroy(this.wasmHandle);
    }
    freeResources() {
      this.app.wasmApp.freeResources(this.wasmHandle);
    }
    setText(e) {
      this.app.wasmApp.setText(this.wasmHandle, e);
    }
    setImage(e) {
      this.app.wasmApp.setImage(this.wasmHandle, e);
    }
    splitToWithStates(e, t, r) {
      this.app.wasmApp.splitToWithStates(this.wasmHandle, e.map((n) => ({
        id: n.handle.id(),
        state: n.state
      })), t, r);
    }
    setDeclaredGeometry(e) {
      this.app.wasmApp.setDeclaredGeometry(this.wasmHandle, e);
    }
    declareGeometry(e) {
      this.app.wasmApp.declareGeometry(this.wasmHandle, e);
    }
    declaredGeometry() {
      return this.app.wasmApp.declaredGeometry(this.wasmHandle);
    }
    animateTo(e, t) {
      this.app.wasmApp.animateTo(this.wasmHandle, e, t);
    }
    bakedTextSize() {
      return this.app.wasmApp.bakedTextSize(this.wasmHandle);
    }
    bakedImageSize() {
      return this.app.wasmApp.bakedImageSize(this.wasmHandle);
    }
    copyBakedImageFrom(e) {
      return this.app.wasmApp.copyBakedImageFrom(this.wasmHandle, e.wasmHandle);
    }
    cropImage(e) {
      return this.app.wasmApp.cropImage(this.wasmHandle, e);
    }
    setInteractive(e) {
      this.app.wasmApp.setInteractive(this.wasmHandle, e);
    }
    focus() {
      this.app.wasmApp.focus(this.wasmHandle);
    }
    isFocused() {
      return this.app.wasmApp.isFocused(this.wasmHandle);
    }
    setStyleTransition(e) {
      this.app.wasmApp.setStyleTransition(this.wasmHandle, e);
    }
    setFocusGroup(e) {
      this.app.wasmApp.setFocusGroup(this.wasmHandle, e);
    }
    setNeighbour(e, t) {
      this.app.wasmApp.setNeighbour(this.wasmHandle, e, t == null ? void 0 : t.id());
    }
    setDefaultFocus(e) {
      this.app.wasmApp.setDefaultFocus(this.wasmHandle, e);
    }
    setDevices(e) {
      this.app.wasmApp.setDevices(this.wasmHandle, e);
    }
    devices() {
      return this.app.wasmApp.devices(this.wasmHandle);
    }
    setVisible(e) {
      this.app.wasmApp.setVisible(this.wasmHandle, e);
    }
    setOpacity(e) {
      this.app.wasmApp.setOpacity(this.wasmHandle, e);
    }
    setDisabled(e) {
      this.app.wasmApp.setDisabled(this.wasmHandle, e);
    }
    setStyle(e, t) {
      this.app.wasmApp.setStyle(this.wasmHandle, e, t);
    }
    setTransitionInteraction(e) {
      this.app.wasmApp.setTransitionInteraction(this.wasmHandle, e ?? null);
    }
    setTexture(e) {
      return this.app.wasmApp.setTexture(this.wasmHandle, e.wasmHandle);
    }
    showVideo(e) {
      return this.app.wasmApp.showVideo(this.wasmHandle, e.wasmHandle);
    }
    hideVideo() {
      this.app.wasmApp.hideVideo(this.wasmHandle);
    }
    setVideoCrossfade(e) {
      return this.app.wasmApp.setVideoCrossfade(this.wasmHandle, e);
    }
  }, q6 = class {
    constructor(e, t) {
      this.app = e, this.wasmHandle = t;
    }
    set(e, t, r, n = false) {
      this.app.wasmApp.channelSet(this.wasmHandle, e.wasmHandle, t.wasmHandle, r, n);
    }
    onDropped(e) {
      this.app.wasmApp.onDropped(this.wasmHandle, e);
    }
    destroy() {
      this.app.wasmApp.channelDestroy(this.wasmHandle);
    }
  }, Je = class {
    constructor(e, t) {
      this.app = e, this.wasmHandle = t;
    }
    id() {
      return this.wasmHandle.id();
    }
    state() {
      return this.app.wasmApp.textureState(this.wasmHandle);
    }
  }, j6 = class {
    constructor(e, t) {
      this.app = e, this.wasmHandle = t;
    }
    uploadFrame(e, t, r) {
      const n = r instanceof Uint8Array ? r : new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
      return this.app.wasmApp.uploadVideoFrame(this.wasmHandle, e, t, n);
    }
    uploadFrom(e) {
      const t = e.videoWidth, r = e.videoHeight;
      if (t === 0 || r === 0) return false;
      if (!this.canvas || !this.context) {
        this.canvas = document.createElement("canvas");
        const a = this.canvas.getContext("2d", {
          willReadFrequently: true
        });
        if (!a) return false;
        this.context = a;
      }
      (this.canvas.width !== t || this.canvas.height !== r) && (this.canvas.width = t, this.canvas.height = r), this.context.drawImage(e, 0, 0, t, r);
      const n = this.context.getImageData(0, 0, t, r).data;
      return this.uploadFrame(t, r, n);
    }
    release() {
      this.app.wasmApp.releaseVideo(this.wasmHandle);
    }
  }, K6 = class {
    constructor(e) {
      this.wasmApp = e ?? new F_();
    }
    component(e) {
      return new m_(this, this.wasmApp.component(e));
    }
    handleFromId(e) {
      return new m_(this, h.fromId(e));
    }
    transitionChannel(e) {
      return new q6(this, this.wasmApp.transitionChannel(e == null ? void 0 : e.id()));
    }
    texture(e) {
      return new Je(this, this.wasmApp.texture(e));
    }
    loadTexture(e, t) {
      const r = this.wasmApp.loadTexture(e, t ?? null);
      return r ? new Je(this, r) : void 0;
    }
    bakeTexture(e, t, r, n) {
      return new Je(this, this.wasmApp.bakeTexture(e, t, r, n ?? null));
    }
    createVideo() {
      return new j6(this, this.wasmApp.createVideo());
    }
    textureFromId(e) {
      return new Je(this, Q.fromId(e));
    }
    get(e) {
      return this.wasmApp.get(e.wasmHandle);
    }
    tick(e) {
      this.wasmApp.tick(e);
    }
    pointerMoved(e, t) {
      this.wasmApp.pointerMoved(e, t);
    }
    pointerLeft() {
      this.wasmApp.pointerLeft();
    }
    pointerPressed() {
      this.wasmApp.pointerPressed();
    }
    pointerReleased() {
      this.wasmApp.pointerReleased();
    }
    setInputDevices(e) {
      this.wasmApp.setInputDevices(e);
    }
    inputDevices() {
      return this.wasmApp.inputDevices();
    }
    onKey(e) {
      this.wasmApp.onAppKey(e);
    }
    bindKey(e, t) {
      this.wasmApp.bindKey(e, t);
    }
    unbindKey(e) {
      return this.wasmApp.unbindKey(e);
    }
    setReadingDirection(e) {
      this.wasmApp.setReadingDirection(e);
    }
    inputMode() {
      return this.wasmApp.inputMode();
    }
    setNavigatingActions(e) {
      this.wasmApp.setNavigatingActions(e);
    }
    setKeyRepeat(e) {
      this.wasmApp.setKeyRepeat(e);
    }
    clearGlyphCache() {
      this.wasmApp.clearGlyphCache();
    }
    loadFont(e, t) {
      if (e instanceof Uint8Array) return this.wasmApp.loadFont(e);
      if (!t) throw new Error("loadFont: a promise of a font needs its family, in options.family");
      const { family: r, whileLoading: n = "hide" } = t;
      return this.wasmApp.expectFont(r, n), e.then((a) => {
        const o = this.wasmApp.loadFont(a instanceof Uint8Array ? a : new Uint8Array(a));
        if (o !== r) throw this.wasmApp.fontFailed(r), new Error(`loadFont: expected the family "${r}", but the font is "${o}"`);
        return o;
      }, (a) => {
        throw this.wasmApp.fontFailed(r), a;
      });
    }
    setFallbackFonts(e) {
      this.wasmApp.setFallbackFonts(e);
    }
    setLongPressMs(e) {
      this.wasmApp.setLongPressMs(e);
    }
    resetKeyMap() {
      this.wasmApp.resetKeyMap();
    }
    focused() {
      const e = this.wasmApp.focused();
      return e ? new m_(this, e) : void 0;
    }
    clearFocus() {
      this.wasmApp.clearFocus();
    }
    onFocusLost(e) {
      this.wasmApp.onFocusLost((t, r) => e({
        component: this.handleFromId(t),
        reason: r
      }));
    }
    startAnimationLoop() {
      let e = null, t = false;
      const r = (n) => {
        t || (e !== null && this.tick((n - e) / 1e3), e = n, requestAnimationFrame(r));
      };
      return requestAnimationFrame(r), () => {
        t = true;
      };
    }
  };
  const N6 = "" + new URL("proteus_bench_web_bg-CwvS37Vy.wasm", import.meta.url).href;
  class l {
    static __wrap(e) {
      const t = Object.create(l.prototype);
      return t.__wbg_ptr = e, vt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, vt.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_handle_free(e, 0);
    }
    static fromId(e) {
      const t = s.handle_fromId(e);
      return l.__wrap(t);
    }
    id() {
      return s.handle_id(this.__wbg_ptr);
    }
  }
  Symbol.dispose && (l.prototype[Symbol.dispose] = l.prototype.free);
  class Te {
    static __wrap(e) {
      const t = Object.create(Te.prototype);
      return t.__wbg_ptr = e, h_.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, h_.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_proteusapp_free(e, 0);
    }
    addChild(e, t) {
      w(e, l), w(t, l);
      const r = s.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw D(r[0]);
    }
    animateTo(e, t, r) {
      w(e, l);
      const n = s.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw D(n[0]);
    }
    bakeTexture(e, t, r, n) {
      const a = n_(r, s.__wbindgen_malloc), o = B, b = s.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, o, n);
      return N.__wrap(b);
    }
    bakedImageSize(e) {
      return w(e, l), s.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return w(e, l), s.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bindKey(e, t) {
      const r = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B, a = s.proteusapp_bindKey(this.__wbg_ptr, e, r, n);
      if (a[1]) throw D(a[0]);
    }
    channelDestroy(e) {
      w(e, X);
      var t = e.__destroy_into_raw();
      s.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      w(e, X), w(t, l), w(r, l);
      const o = s.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (o[1]) throw D(o[0]);
    }
    clearFocus() {
      s.proteusapp_clearFocus(this.__wbg_ptr);
    }
    clearGlyphCache() {
      s.proteusapp_clearGlyphCache(this.__wbg_ptr);
    }
    component(e) {
      const t = s.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw D(t[1]);
      return l.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      w(e, l), w(t, l);
      const r = s.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw D(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = s.proteusapp_createVideo(this.__wbg_ptr);
      return Y.__wrap(e);
    }
    cropImage(e, t) {
      w(e, l);
      const r = s.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw D(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      w(e, l);
      const r = s.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    declaredGeometry(e) {
      return w(e, l), s.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      w(e, l);
      var t = e.__destroy_into_raw();
      const r = s.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    devices(e) {
      return w(e, l), s.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    expectFont(e, t) {
      const r = E(e, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B, a = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), o = B, b = s.proteusapp_expectFont(this.__wbg_ptr, r, n, a, o);
      if (b[1]) throw D(b[0]);
    }
    focus(e) {
      w(e, l);
      const t = s.proteusapp_focus(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw D(t[0]);
    }
    focused() {
      const e = s.proteusapp_focused(this.__wbg_ptr);
      return e === 0 ? void 0 : l.__wrap(e);
    }
    fontFailed(e) {
      const t = E(e, s.__wbindgen_malloc, s.__wbindgen_realloc), r = B;
      s.proteusapp_fontFailed(this.__wbg_ptr, t, r);
    }
    freeResources(e) {
      w(e, l);
      const t = s.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw D(t[0]);
    }
    get(e) {
      return w(e, l), s.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      w(e, l);
      const t = s.proteusapp_hideVideo(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw D(t[0]);
    }
    inputDevices() {
      return s.proteusapp_inputDevices(this.__wbg_ptr);
    }
    inputMode() {
      let e, t;
      try {
        const r = s.proteusapp_inputMode(this.__wbg_ptr);
        return e = r[0], t = r[1], S(r[0], r[1]);
      } finally {
        s.__wbindgen_free(e, t, 1);
      }
    }
    isFocused(e) {
      return w(e, l), s.proteusapp_isFocused(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    loadFont(e) {
      let t, r;
      try {
        const o = n_(e, s.__wbindgen_malloc), b = B, c = s.proteusapp_loadFont(this.__wbg_ptr, o, b);
        var n = c[0], a = c[1];
        if (c[3]) throw n = 0, a = 0, D(c[2]);
        return t = n, r = a, S(n, a);
      } finally {
        s.__wbindgen_free(t, r, 1);
      }
    }
    loadTexture(e, t) {
      const r = n_(e, s.__wbindgen_malloc), n = B, a = s.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : N.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      w(e, l);
      const a = a_(t, s.__wbindgen_malloc), o = B, b = s.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (b[1]) throw D(b[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      w(e, l);
      const o = a_(t, s.__wbindgen_malloc), b = B, c = s.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, b, r, n, a);
      if (c[1]) throw D(c[0]);
    }
    constructor() {
      const e = s.proteusapp_new();
      return this.__wbg_ptr = e, h_.register(this, this.__wbg_ptr, this), this;
    }
    onAppKey(e) {
      s.proteusapp_onAppKey(this.__wbg_ptr, e);
    }
    onBlur(e, t) {
      w(e, l), s.proteusapp_onBlur(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onClick(e, t) {
      w(e, l), s.proteusapp_onClick(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDrag(e, t) {
      w(e, l), s.proteusapp_onDrag(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDropped(e, t) {
      w(e, X), s.proteusapp_onDropped(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocus(e, t) {
      w(e, l), s.proteusapp_onFocus(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocusLost(e) {
      s.proteusapp_onFocusLost(this.__wbg_ptr, e);
    }
    onHoverEnter(e, t) {
      w(e, l), s.proteusapp_onHoverEnter(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverExit(e, t) {
      w(e, l), s.proteusapp_onHoverExit(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onKey(e, t) {
      w(e, l), s.proteusapp_onKey(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onPress(e, t) {
      w(e, l), s.proteusapp_onPress(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onRelease(e, t) {
      w(e, l), s.proteusapp_onRelease(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onTransitionComplete(e, t) {
      w(e, l), s.proteusapp_onTransitionComplete(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    pointerLeft() {
      s.proteusapp_pointerLeft(this.__wbg_ptr);
    }
    pointerMoved(e, t) {
      s.proteusapp_pointerMoved(this.__wbg_ptr, e, t);
    }
    pointerPressed() {
      s.proteusapp_pointerPressed(this.__wbg_ptr);
    }
    pointerReleased() {
      s.proteusapp_pointerReleased(this.__wbg_ptr);
    }
    releaseVideo(e) {
      w(e, Y), s.proteusapp_releaseVideo(this.__wbg_ptr, e.__wbg_ptr);
    }
    removeChild(e, t) {
      w(e, l), w(t, l);
      const r = s.proteusapp_removeChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw D(r[0]);
    }
    resetKeyMap() {
      s.proteusapp_resetKeyMap(this.__wbg_ptr);
    }
    setDeclaredGeometry(e, t) {
      w(e, l);
      const r = s.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setDefaultFocus(e, t) {
      w(e, l);
      const r = s.proteusapp_setDefaultFocus(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setDevices(e, t) {
      w(e, l);
      const r = s.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setDisabled(e, t) {
      w(e, l);
      const r = s.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setFallbackFonts(e) {
      const t = Dt(e, s.__wbindgen_malloc), r = B;
      s.proteusapp_setFallbackFonts(this.__wbg_ptr, t, r);
    }
    setFocusGroup(e, t) {
      w(e, l);
      const r = s.proteusapp_setFocusGroup(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setImage(e, t) {
      w(e, l);
      const r = s.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setInputDevices(e) {
      const t = s.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw D(t[0]);
    }
    setInteractive(e, t) {
      w(e, l);
      const r = s.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setKeyRepeat(e) {
      const t = s.proteusapp_setKeyRepeat(this.__wbg_ptr, e);
      if (t[1]) throw D(t[0]);
    }
    setLongPressMs(e) {
      s.proteusapp_setLongPressMs(this.__wbg_ptr, e);
    }
    setNavigatingActions(e) {
      const t = Dt(e, s.__wbindgen_malloc), r = B;
      s.proteusapp_setNavigatingActions(this.__wbg_ptr, t, r);
    }
    setNeighbour(e, t, r) {
      w(e, l);
      const n = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), a = B, o = s.proteusapp_setNeighbour(this.__wbg_ptr, e.__wbg_ptr, n, a, !v(r), v(r) ? 0 : r);
      if (o[1]) throw D(o[0]);
    }
    setOpacity(e, t) {
      w(e, l);
      const r = s.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setReadingDirection(e) {
      const t = E(e, s.__wbindgen_malloc, s.__wbindgen_realloc), r = B, n = s.proteusapp_setReadingDirection(this.__wbg_ptr, t, r);
      if (n[1]) throw D(n[0]);
    }
    setStyle(e, t, r) {
      w(e, l);
      const n = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), a = B, o = s.proteusapp_setStyle(this.__wbg_ptr, e.__wbg_ptr, n, a, r);
      if (o[1]) throw D(o[0]);
    }
    setStyleTransition(e, t) {
      w(e, l);
      const r = s.proteusapp_setStyleTransition(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setText(e, t) {
      w(e, l);
      const r = s.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setTexture(e, t) {
      w(e, l), w(t, N);
      const r = s.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw D(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      w(e, l);
      const r = s.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setVideoCrossfade(e, t) {
      w(e, l);
      const r = s.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw D(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      w(e, l);
      const r = s.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    showVideo(e, t) {
      w(e, l), w(t, Y);
      const r = s.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw D(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      w(e, l);
      const a = a_(t, s.__wbindgen_malloc), o = B, b = s.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (b[1]) throw D(b[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      w(e, l);
      const o = a_(t, s.__wbindgen_malloc), b = B, c = s.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, b, r, n, a);
      if (c[1]) throw D(c[0]);
    }
    splitToWithStates(e, t, r, n) {
      w(e, l);
      const a = s.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw D(a[0]);
    }
    texture(e) {
      const t = s.proteusapp_texture(this.__wbg_ptr, e);
      return N.__wrap(t);
    }
    textureState(e) {
      return w(e, N), s.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
    }
    tick(e) {
      s.proteusapp_tick(this.__wbg_ptr, e);
    }
    transitionChannel(e) {
      const t = s.proteusapp_transitionChannel(this.__wbg_ptr, !v(e), v(e) ? 0 : e);
      return X.__wrap(t);
    }
    unbindKey(e) {
      const t = s.proteusapp_unbindKey(this.__wbg_ptr, e);
      if (t[3]) throw D(t[2]);
      let r;
      return t[0] !== 0 && (r = S(t[0], t[1]).slice(), s.__wbindgen_free(t[0], t[1] * 1, 1)), r;
    }
    uploadVideoFrame(e, t, r, n) {
      w(e, Y);
      const a = n_(n, s.__wbindgen_malloc), o = B;
      return s.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, o) !== 0;
    }
  }
  Symbol.dispose && (Te.prototype[Symbol.dispose] = Te.prototype.free);
  class N {
    static __wrap(e) {
      const t = Object.create(N.prototype);
      return t.__wbg_ptr = e, St.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, St.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_texturehandle_free(e, 0);
    }
    static fromId(e) {
      const t = s.texturehandle_fromId(e);
      return N.__wrap(t);
    }
    id() {
      return s.texturehandle_id(this.__wbg_ptr);
    }
  }
  Symbol.dispose && (N.prototype[Symbol.dispose] = N.prototype.free);
  class X {
    static __wrap(e) {
      const t = Object.create(X.prototype);
      return t.__wbg_ptr = e, At.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, At.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_transitionchannel_free(e, 0);
    }
  }
  Symbol.dispose && (X.prototype[Symbol.dispose] = X.prototype.free);
  class Y {
    static __wrap(e) {
      const t = Object.create(Y.prototype);
      return t.__wbg_ptr = e, It.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, It.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_videohandle_free(e, 0);
    }
  }
  Symbol.dispose && (Y.prototype[Symbol.dispose] = Y.prototype.free);
  function J6() {
    s.clear();
  }
  function Q6(_) {
    s.on_frame(_);
  }
  function X6(_, e) {
    const t = E(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = B;
    s.show(t, r, e);
  }
  function Y6(_, e) {
    const t = E(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = B;
    return s.start(t, r, e);
  }
  function Z6() {
    s.stop_frames();
  }
  function em(_, e) {
    return Error(S(_, e));
  }
  function _m(_) {
    return Number(_);
  }
  function tm(_, e) {
    const t = String(e), r = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function rm(_) {
    return _.Window;
  }
  function nm(_) {
    return _.WorkerGlobalScope;
  }
  function am(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    R().setBigInt64(_ + 8, v(r) ? BigInt(0) : r, true), R().setInt32(_ + 0, !v(r), true);
  }
  function om(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return v(t) ? 16777215 : t ? 1 : 0;
  }
  function bm(_, e) {
    const t = R_(e), r = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function cm(_, e) {
    return _ in e;
  }
  function sm(_) {
    return typeof _ == "bigint";
  }
  function im(_) {
    return typeof _ == "function";
  }
  function fm(_) {
    return _ === null;
  }
  function um(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function dm(_) {
    return typeof _ == "string";
  }
  function gm(_) {
    return _ === void 0;
  }
  function pm(_, e) {
    return _ === e;
  }
  function wm(_, e) {
    return _ == e;
  }
  function lm(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    R().setFloat64(_ + 8, v(r) ? 0 : r, true), R().setInt32(_ + 0, !v(r), true);
  }
  function mm(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = v(r) ? 0 : E(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = B;
    R().setInt32(_ + 4, a, true), R().setInt32(_ + 0, n, true);
  }
  function hm(_, e) {
    throw new Error(S(_, e));
  }
  function ym(_) {
    _._wbg_cb_unref();
  }
  function xm(_) {
    _.abort();
  }
  function $m(_) {
    return _.aborted;
  }
  function vm(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Sm(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Am() {
    return m(function(_, e, t, r) {
      _.addEventListener(S(e, t), r);
    }, arguments);
  }
  function Im(_) {
    return _.altKey;
  }
  function Fm() {
    return m(function(_) {
      return _.arrayBuffer();
    }, arguments);
  }
  function Dm(_, e, t) {
    _.attachShader(e, t);
  }
  function Tm(_, e, t) {
    _.attachShader(e, t);
  }
  function Bm(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function Pm() {
    return m(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function km(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function Mm(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function Rm(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function Cm(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function Vm(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function Lm(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function Em(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function Gm(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Om(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Wm(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function zm(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Um(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Hm(_, e) {
    _.bindVertexArrayOES(e);
  }
  function qm(_, e) {
    _.bindVertexArray(e);
  }
  function jm(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Km(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Nm(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Jm(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Qm(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Xm(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Ym(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Zm(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function e3(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function _3(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function t3(_, e, t, r, n, a, o, b, c, u, d) {
    _.blitFramebuffer(e, t, r, n, a, o, b, c, u >>> 0, d >>> 0);
  }
  function r3(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function n3(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function a3(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function o3(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function b3(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function c3(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function s3(_) {
    return _.button;
  }
  function i3() {
    return m(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function f3() {
    return m(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function u3() {
    return m(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function d3(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, W(r, n));
  }
  function g3(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, _e(r, n));
  }
  function p3(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, Se(r, n));
  }
  function w3(_, e) {
    _.clearDepth(e);
  }
  function l3(_, e) {
    _.clearDepth(e);
  }
  function m3(_, e) {
    _.clearStencil(e);
  }
  function h3(_, e) {
    _.clearStencil(e);
  }
  function y3(_, e) {
    _.clear(e >>> 0);
  }
  function x3(_, e) {
    _.clear(e >>> 0);
  }
  function $3(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function v3(_, e) {
    const t = e.code, r = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function S3(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function A3(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function I3(_, e) {
    _.compileShader(e);
  }
  function F3(_, e) {
    _.compileShader(e);
  }
  function D3(_, e, t, r, n, a, o, b, c) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c);
  }
  function T3(_, e, t, r, n, a, o, b, c) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c);
  }
  function B3(_, e, t, r, n, a, o, b, c, u) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c, u);
  }
  function P3(_, e, t, r, n, a, o, b, c, u, d, T) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d, T);
  }
  function k3(_, e, t, r, n, a, o, b, c, u, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d);
  }
  function M3() {
    return m(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function R3(_) {
    return _.contentRect;
  }
  function C3(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function V3(_, e, t, r, n, a, o, b, c) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, b, c);
  }
  function L3(_, e, t, r, n, a, o, b, c) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, b, c);
  }
  function E3(_, e, t, r, n, a, o, b, c, u) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, o, b, c, u);
  }
  function G3() {
    return m(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function O3() {
    return m(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function W3(_, e) {
    return _.createBindGroup(e);
  }
  function z3(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : k(e);
  }
  function U3() {
    return m(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function H3(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : k(e);
  }
  function q3(_, e) {
    return _.createCommandEncoder(e);
  }
  function j3(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : k(e);
  }
  function K3(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : k(e);
  }
  function N3(_, e) {
    return _.createPipelineLayout(e);
  }
  function J3(_) {
    const e = _.createProgram();
    return v(e) ? 0 : k(e);
  }
  function Q3(_) {
    const e = _.createProgram();
    return v(e) ? 0 : k(e);
  }
  function X3(_) {
    const e = _.createQuery();
    return v(e) ? 0 : k(e);
  }
  function Y3() {
    return m(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function Z3(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : k(e);
  }
  function e5(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : k(e);
  }
  function _5(_, e) {
    return _.createSampler(e);
  }
  function t5(_) {
    const e = _.createSampler();
    return v(e) ? 0 : k(e);
  }
  function r5(_, e) {
    return _.createShaderModule(e);
  }
  function n5(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : k(t);
  }
  function a5(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : k(t);
  }
  function o5(_) {
    const e = _.createTexture();
    return v(e) ? 0 : k(e);
  }
  function b5(_) {
    const e = _.createTexture();
    return v(e) ? 0 : k(e);
  }
  function c5() {
    return m(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function s5(_) {
    const e = _.createVertexArrayOES();
    return v(e) ? 0 : k(e);
  }
  function i5(_) {
    const e = _.createVertexArray();
    return v(e) ? 0 : k(e);
  }
  function f5() {
    return m(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function u5(_) {
    return _.ctrlKey;
  }
  function d5(_, e) {
    _.cullFace(e >>> 0);
  }
  function g5(_, e) {
    _.cullFace(e >>> 0);
  }
  function p5(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function w5(_, e) {
    _.deleteBuffer(e);
  }
  function l5(_, e) {
    _.deleteBuffer(e);
  }
  function m5(_, e) {
    _.deleteFramebuffer(e);
  }
  function h5(_, e) {
    _.deleteFramebuffer(e);
  }
  function y5(_, e) {
    _.deleteProgram(e);
  }
  function x5(_, e) {
    _.deleteProgram(e);
  }
  function $5(_, e) {
    _.deleteQuery(e);
  }
  function v5(_, e) {
    _.deleteRenderbuffer(e);
  }
  function S5(_, e) {
    _.deleteRenderbuffer(e);
  }
  function A5(_, e) {
    _.deleteSampler(e);
  }
  function I5(_, e) {
    _.deleteShader(e);
  }
  function F5(_, e) {
    _.deleteShader(e);
  }
  function D5(_, e) {
    _.deleteSync(e);
  }
  function T5(_, e) {
    _.deleteTexture(e);
  }
  function B5(_, e) {
    _.deleteTexture(e);
  }
  function P5(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function k5(_, e) {
    _.deleteVertexArray(e);
  }
  function M5(_, e) {
    _.depthFunc(e >>> 0);
  }
  function R5(_, e) {
    _.depthFunc(e >>> 0);
  }
  function C5(_, e) {
    _.depthMask(e !== 0);
  }
  function V5(_, e) {
    _.depthMask(e !== 0);
  }
  function L5(_, e, t) {
    _.depthRange(e, t);
  }
  function E5(_, e, t) {
    _.depthRange(e, t);
  }
  function G5(_, e) {
    const t = e.description, r = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function O5(_) {
    _.destroy();
  }
  function W5(_) {
    return _.devicePixelRatio;
  }
  function z5(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function U5(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function H5(_, e) {
    _.disable(e >>> 0);
  }
  function q5(_, e) {
    _.disable(e >>> 0);
  }
  function j5(_) {
    const e = _.document;
    return v(e) ? 0 : k(e);
  }
  function K5(_) {
    return _.done;
  }
  function N5(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function J5(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function Q5(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function X5(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function Y5(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function Z5(_, e) {
    _.drawBuffers(e);
  }
  function e8(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function _8(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function t8(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function r8(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function n8(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function a8(_, e) {
    _.enable(e >>> 0);
  }
  function o8(_, e) {
    _.enable(e >>> 0);
  }
  function b8(_, e) {
    _.endQuery(e >>> 0);
  }
  function c8(_) {
    _.end();
  }
  function s8(_) {
    return Object.entries(_);
  }
  function i8(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function f8(_) {
    console.error(_);
  }
  function u8(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(S(_, e));
    } finally {
      s.__wbindgen_free(t, r, 1);
    }
  }
  function d8(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return v(r) ? 0 : k(r);
  }
  function g8(_, e, t) {
    return _.fetch(S(e, t));
  }
  function p8(_, e, t, r) {
    return _.fetch(S(e, t), r);
  }
  function w8(_) {
    return _.finish();
  }
  function l8(_, e) {
    return _.finish(e);
  }
  function m8(_) {
    _.flush();
  }
  function h8(_) {
    _.flush();
  }
  function y8() {
    return m(function(_) {
      _.focus();
    }, arguments);
  }
  function x8(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function $8(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function v8(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function S8(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function A8(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function I8(_, e, t, r, n, a, o) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, o);
  }
  function F8(_, e) {
    _.frontFace(e >>> 0);
  }
  function D8(_, e) {
    _.frontFace(e >>> 0);
  }
  function T8(_) {
    return _.getBoundingClientRect();
  }
  function B8(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function P8() {
    return m(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : k(n);
    }, arguments);
  }
  function k8() {
    return m(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : k(r);
    }, arguments);
  }
  function M8() {
    return m(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : k(r);
    }, arguments);
  }
  function R8() {
    return m(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : k(n);
    }, arguments);
  }
  function C8() {
    return m(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function V8(_, e, t) {
    const r = _.getElementById(S(e, t));
    return v(r) ? 0 : k(r);
  }
  function L8() {
    return m(function(_, e, t) {
      const r = _.getExtension(S(e, t));
      return v(r) ? 0 : k(r);
    }, arguments);
  }
  function E8() {
    return m(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function G8() {
    return m(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function O8(_, e, t) {
    return _.getModifierState(S(e, t));
  }
  function W8() {
    return m(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function z8() {
    return m(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function U8(_) {
    const e = _.getPreferredCanvasFormat();
    return (ce.indexOf(e) + 1 || 96) - 1;
  }
  function H8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : E(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = B;
    R().setInt32(_ + 4, a, true), R().setInt32(_ + 0, n, true);
  }
  function q8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : E(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = B;
    R().setInt32(_ + 4, a, true), R().setInt32(_ + 0, n, true);
  }
  function j8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function K8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function N8(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function J8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : E(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = B;
    R().setInt32(_ + 4, a, true), R().setInt32(_ + 0, n, true);
  }
  function Q8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : E(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = B;
    R().setInt32(_ + 4, a, true), R().setInt32(_ + 0, n, true);
  }
  function X8(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function Y8(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function Z8(_) {
    const e = _.getSupportedExtensions();
    return v(e) ? 0 : k(e);
  }
  function e9(_) {
    const e = _.getSupportedProfiles();
    return v(e) ? 0 : k(e);
  }
  function _9(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function t9(_, e, t, r) {
    return _.getUniformBlockIndex(e, S(t, r));
  }
  function r9(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : k(n);
  }
  function n9(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : k(n);
  }
  function a9(_, e) {
    return _[e >>> 0];
  }
  function o9(_, e) {
    const t = _[e >>> 0];
    return v(t) ? 0 : k(t);
  }
  function b9() {
    return m(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function c9(_, e) {
    return _[e >>> 0];
  }
  function s9(_, e) {
    return _[e];
  }
  function i9(_) {
    return _.gpu;
  }
  function f9(_, e, t) {
    return _.hasAttribute(S(e, t));
  }
  function u9(_) {
    return _.height;
  }
  function d9(_) {
    return _.height;
  }
  function g9(_) {
    return _.hidden;
  }
  function p9(_, e, t) {
    return _.includes(e, t);
  }
  function w9(_) {
    return _.info;
  }
  function l9(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function m9(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function h9(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function y9(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function x9(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function $9(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function v9(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function S9(_) {
    let e;
    try {
      e = _ instanceof Response;
    } catch {
      e = false;
    }
    return e;
  }
  function A9(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function I9(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function F9(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function D9() {
    return m(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function T9(_) {
    return Array.isArray(_);
  }
  function B9(_) {
    return _.isComposing;
  }
  function P9(_) {
    return Number.isSafeInteger(_);
  }
  function k9(_, e) {
    return Object.is(_, e);
  }
  function M9() {
    return Symbol.iterator;
  }
  function R9(_, e) {
    const t = e.key, r = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function C9(_, e) {
    const t = e.label, r = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function V9(_) {
    return _.length;
  }
  function L9(_) {
    return _.length;
  }
  function E9(_) {
    return _.limits;
  }
  function G9(_) {
    return _.limits;
  }
  function O9(_, e) {
    _.linkProgram(e);
  }
  function W9(_, e) {
    _.linkProgram(e);
  }
  function z9(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function U9(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function H9(_) {
    return _.maxBindGroups;
  }
  function q9(_) {
    return _.maxBindingsPerBindGroup;
  }
  function j9(_) {
    return _.maxBufferSize;
  }
  function K9(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function N9(_) {
    return _.maxColorAttachments;
  }
  function J9(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function Q9(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function X9(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function Y9(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function Z9(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function e7(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function _7(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function t7(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function r7(_) {
    return _.maxInterStageShaderVariables;
  }
  function n7(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function a7(_) {
    return _.maxSamplersPerShaderStage;
  }
  function o7(_) {
    return _.maxStorageBufferBindingSize;
  }
  function b7(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function c7(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function s7(_) {
    return _.maxTextureArrayLayers;
  }
  function i7(_) {
    return _.maxTextureDimension1D;
  }
  function f7(_) {
    return _.maxTextureDimension2D;
  }
  function u7(_) {
    return _.maxTextureDimension3D;
  }
  function d7(_) {
    return _.maxUniformBufferBindingSize;
  }
  function g7(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function p7(_) {
    return _.maxVertexAttributes;
  }
  function w7(_) {
    return _.maxVertexBufferArrayStride;
  }
  function l7(_) {
    return _.maxVertexBuffers;
  }
  function m7(_) {
    return _.metaKey;
  }
  function h7(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function y7(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function x7(_) {
    return _.navigator;
  }
  function $7(_) {
    return _.navigator;
  }
  function v7() {
    return m(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function S7() {
    return new Error();
  }
  function A7() {
    return new Object();
  }
  function I7() {
    return new Array();
  }
  function F7() {
    return m(function() {
      return new AbortController();
    }, arguments);
  }
  function D7(_) {
    return new Uint8Array(_);
  }
  function T7(_, e) {
    return new Error(S(_, e));
  }
  function B7(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, o) => {
        const b = t.a;
        t.a = 0;
        try {
          return ZS(b, t.b, a, o);
        } finally {
          t.a = b;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function P7(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function k7() {
    return m(function(_) {
      return _.next();
    }, arguments);
  }
  function M7(_) {
    return _.next;
  }
  function R7(_) {
    return _.now();
  }
  function C7(_, e) {
    _.observe(e);
  }
  function V7(_) {
    return Array.of(_);
  }
  function L7(_) {
    return _.offsetX;
  }
  function E7(_) {
    return _.offsetY;
  }
  function G7(_) {
    return _.ok;
  }
  function O7(_) {
    return _.onSubmittedWorkDone();
  }
  function W7(_) {
    const e = _.performance;
    return v(e) ? 0 : k(e);
  }
  function z7(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function U7(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function H7(_, e, t) {
    _.polygonOffset(e, t);
  }
  function q7(_, e, t) {
    _.polygonOffset(e, t);
  }
  function j7(_) {
    _.preventDefault();
  }
  function K7(_) {
    return Te.__wrap(_);
  }
  function N7(_, e, t) {
    Uint8Array.prototype.set.call(d_(_, e), t);
  }
  function J7(_, e) {
    return _.push(e);
  }
  function Q7(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function X7() {
    return m(function(_, e, t) {
      return _.querySelectorAll(S(e, t));
    }, arguments);
  }
  function Y7() {
    return m(function(_, e, t) {
      const r = _.querySelector(S(e, t));
      return v(r) ? 0 : k(r);
    }, arguments);
  }
  function Z7(_) {
    return _.queueMicrotask;
  }
  function eh(_) {
    queueMicrotask(_);
  }
  function _h(_) {
    return _.queue;
  }
  function th(_, e) {
    _.readBuffer(e >>> 0);
  }
  function rh() {
    return m(function(_, e, t, r, n, a, o, b) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, b);
    }, arguments);
  }
  function nh() {
    return m(function(_, e, t, r, n, a, o, b) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, b);
    }, arguments);
  }
  function ah() {
    return m(function(_, e, t, r, n, a, o, b) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, b);
    }, arguments);
  }
  function oh(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function bh(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function ch(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function sh(_) {
    return _.repeat;
  }
  function ih(_, e) {
    return _.requestAdapter(e);
  }
  function fh(_) {
    return _.requestAdapter();
  }
  function uh() {
    return m(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function dh(_, e) {
    return _.requestDevice(e);
  }
  function gh(_) {
    return Promise.resolve(_);
  }
  function ph(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function wh(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function lh(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function mh(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function hh() {
    return m(function(_, e, t, r, n) {
      _.setAttribute(S(e, t), S(r, n));
    }, arguments);
  }
  function yh() {
    return m(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, Se(r, n), a, o >>> 0);
    }, arguments);
  }
  function xh(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function $h(_, e, t, r, n) {
    _.setIndexBuffer(e, Y_[t], r, n);
  }
  function vh(_, e, t, r) {
    _.setIndexBuffer(e, Y_[t], r);
  }
  function Sh(_, e) {
    _.setPipeline(e);
  }
  function Ah(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function Ih(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function Fh(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
  }
  function Dh(_, e, t) {
    _.set(e, t >>> 0);
  }
  function Th() {
    return m(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function Bh(_, e, t) {
    _[e] = t;
  }
  function Ph(_, e) {
    _.a = e;
  }
  function kh(_, e) {
    _.access = iA[e];
  }
  function Mh(_, e) {
    _.addressModeU = Q_[e];
  }
  function Rh(_, e) {
    _.addressModeV = Q_[e];
  }
  function Ch(_, e) {
    _.addressModeW = Q_[e];
  }
  function Vh(_, e) {
    _.alpha = e;
  }
  function Lh(_, e) {
    _.alphaMode = rA[e];
  }
  function Eh(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function Gh(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function Oh(_, e) {
    _.arrayStride = e;
  }
  function Wh(_, e) {
    _.aspect = Nt[e];
  }
  function zh(_, e) {
    _.aspect = Nt[e];
  }
  function Uh(_, e) {
    _.attributes = e;
  }
  function Hh(_, e) {
    _.b = e;
  }
  function qh(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function jh(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function Kh(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function Nh(_, e) {
    _.bindGroupLayouts = e;
  }
  function Jh(_, e) {
    _.binding = e >>> 0;
  }
  function Qh(_, e) {
    _.binding = e >>> 0;
  }
  function Xh(_, e) {
    _.blend = e;
  }
  function Yh(_, e) {
    _.buffer = e;
  }
  function Zh(_, e) {
    _.buffer = e;
  }
  function ey(_, e) {
    _.buffers = e;
  }
  function _y(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function ty(_, e) {
    _.clearValue = e;
  }
  function ry(_, e, t) {
    _.code = S(e, t);
  }
  function ny(_, e) {
    _.colorAttachments = e;
  }
  function ay(_, e) {
    _.color = e;
  }
  function oy(_, e) {
    _.compare = X_[e];
  }
  function by(_, e) {
    _.compare = X_[e];
  }
  function cy(_, e) {
    _.count = e >>> 0;
  }
  function sy(_, e) {
    _.cullMode = nA[e];
  }
  function iy(_, e, t) {
    _[e >>> 0] = t;
  }
  function fy(_, e) {
    _.depthBias = e;
  }
  function uy(_, e) {
    _.depthBiasClamp = e;
  }
  function dy(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function gy(_, e) {
    _.depthClearValue = e;
  }
  function py(_, e) {
    _.depthCompare = X_[e];
  }
  function wy(_, e) {
    _.depthFailOp = et[e];
  }
  function ly(_, e) {
    _.depthLoadOp = Z_[e];
  }
  function my(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function hy(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function yy(_, e) {
    _.depthStencil = e;
  }
  function xy(_, e) {
    _.depthStencilAttachment = e;
  }
  function $y(_, e) {
    _.depthStoreOp = _t[e];
  }
  function vy(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function Sy(_, e) {
    _.device = e;
  }
  function Ay(_, e) {
    _.dimension = tt[e];
  }
  function Iy(_, e) {
    _.dimension = fA[e];
  }
  function Fy(_, e) {
    _.dstFactor = jt[e];
  }
  function Dy(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function Ty(_, e) {
    _.entries = e;
  }
  function By(_, e) {
    _.entries = e;
  }
  function Py(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function ky(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function My(_, e) {
    _.externalTexture = e;
  }
  function Ry(_, e) {
    _.failOp = et[e];
  }
  function Cy(_, e) {
    _.format = ce[e];
  }
  function Vy(_, e) {
    _.format = dA[e];
  }
  function Ly(_, e) {
    _.format = ce[e];
  }
  function Ey(_, e) {
    _.format = ce[e];
  }
  function Gy(_, e) {
    _.format = ce[e];
  }
  function Oy(_, e) {
    _.format = ce[e];
  }
  function Wy(_, e) {
    _.format = ce[e];
  }
  function zy(_, e) {
    _.fragment = e;
  }
  function Uy(_, e) {
    _.frontFace = aA[e];
  }
  function Hy(_, e) {
    _.g = e;
  }
  function qy(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function jy(_, e) {
    _.height = e >>> 0;
  }
  function Ky(_, e) {
    _.height = e >>> 0;
  }
  function Ny(_, e) {
    _.height = e >>> 0;
  }
  function Jy(_, e, t) {
    _.label = S(e, t);
  }
  function Qy(_, e, t) {
    _.label = S(e, t);
  }
  function Xy(_, e, t) {
    _.label = S(e, t);
  }
  function Yy(_, e, t) {
    _.label = S(e, t);
  }
  function Zy(_, e, t) {
    _.label = S(e, t);
  }
  function ex(_, e, t) {
    _.label = S(e, t);
  }
  function _x(_, e, t) {
    _.label = S(e, t);
  }
  function tx(_, e, t) {
    _.label = S(e, t);
  }
  function rx(_, e, t) {
    _.label = S(e, t);
  }
  function nx(_, e, t) {
    _.label = S(e, t);
  }
  function ax(_, e, t) {
    _.label = S(e, t);
  }
  function ox(_, e, t) {
    _.label = S(e, t);
  }
  function bx(_, e, t) {
    _.label = S(e, t);
  }
  function cx(_, e) {
    _.layout = e;
  }
  function sx(_, e) {
    _.layout = e;
  }
  function ix(_, e) {
    _.loadOp = Z_[e];
  }
  function fx(_, e) {
    _.lodMaxClamp = e;
  }
  function ux(_, e) {
    _.lodMinClamp = e;
  }
  function dx(_, e) {
    _.magFilter = Kt[e];
  }
  function gx(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function px(_, e) {
    _.mask = e >>> 0;
  }
  function wx(_, e) {
    _.maxAnisotropy = e;
  }
  function lx(_, e) {
    _.minBindingSize = e;
  }
  function mx(_, e) {
    _.minFilter = Kt[e];
  }
  function hx(_, e) {
    _.mipLevel = e >>> 0;
  }
  function yx(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function xx(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function $x(_, e) {
    _.mipmapFilter = oA[e];
  }
  function vx(_, e) {
    _.module = e;
  }
  function Sx(_, e) {
    _.module = e;
  }
  function Ax(_, e) {
    _.multisample = e;
  }
  function Ix(_, e) {
    _.multisampled = e !== 0;
  }
  function Fx(_, e) {
    _.offset = e;
  }
  function Dx(_, e) {
    _.offset = e;
  }
  function Tx(_, e) {
    _.offset = e;
  }
  function Bx(_, e) {
    _.operation = _A[e];
  }
  function Px(_, e) {
    _.origin = e;
  }
  function kx(_, e) {
    _.passOp = et[e];
  }
  function Mx(_, e) {
    _.powerPreference = bA[e];
  }
  function Rx(_, e) {
    _.primitive = e;
  }
  function Cx(_, e) {
    _.querySet = e;
  }
  function Vx(_, e) {
    _.r = e;
  }
  function Lx(_, e) {
    _.requiredFeatures = e;
  }
  function Ex(_, e) {
    _.requiredLimits = e;
  }
  function Gx(_, e) {
    _.resolveTarget = e;
  }
  function Ox(_, e) {
    _.resource = e;
  }
  function Wx(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function zx(_, e) {
    _.sampleCount = e >>> 0;
  }
  function Ux(_, e) {
    _.sampleType = uA[e];
  }
  function Hx(_, e) {
    _.sampler = e;
  }
  function qx(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function jx(_, e) {
    _.signal = e;
  }
  function Kx(_, e) {
    _.size = e;
  }
  function Nx(_, e) {
    _.size = e;
  }
  function Jx(_, e) {
    _.size = e;
  }
  function Qx(_, e) {
    _.srcFactor = jt[e];
  }
  function Xx(_, e) {
    _.stencilBack = e;
  }
  function Yx(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function Zx(_, e) {
    _.stencilFront = e;
  }
  function e$(_, e) {
    _.stencilLoadOp = Z_[e];
  }
  function _$(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function t$(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function r$(_, e) {
    _.stencilStoreOp = _t[e];
  }
  function n$(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function a$(_, e) {
    _.stepMode = gA[e];
  }
  function o$(_, e) {
    _.storageTexture = e;
  }
  function b$(_, e) {
    _.storeOp = _t[e];
  }
  function c$(_, e) {
    _.stripIndexFormat = Y_[e];
  }
  function s$(_, e) {
    _.targets = e;
  }
  function i$(_, e) {
    _.texture = e;
  }
  function f$(_, e) {
    _.texture = e;
  }
  function u$(_, e) {
    _.timestampWrites = e;
  }
  function d$(_, e) {
    _.topology = cA[e];
  }
  function g$(_, e) {
    _.type = tA[e];
  }
  function p$(_, e) {
    _.type = sA[e];
  }
  function w$(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function l$(_, e) {
    _.usage = e >>> 0;
  }
  function m$(_, e) {
    _.usage = e >>> 0;
  }
  function h$(_, e) {
    _.usage = e >>> 0;
  }
  function y$(_, e) {
    _.usage = e >>> 0;
  }
  function x$(_, e) {
    _.vertex = e;
  }
  function $$(_, e) {
    _.view = e;
  }
  function v$(_, e) {
    _.view = e;
  }
  function S$(_, e) {
    _.viewDimension = tt[e];
  }
  function A$(_, e) {
    _.viewDimension = tt[e];
  }
  function I$(_, e) {
    _.viewFormats = e;
  }
  function F$(_, e) {
    _.viewFormats = e;
  }
  function D$(_, e) {
    _.visibility = e >>> 0;
  }
  function T$(_, e) {
    _.width = e >>> 0;
  }
  function B$(_, e) {
    _.width = e >>> 0;
  }
  function P$(_, e) {
    _.width = e >>> 0;
  }
  function k$(_, e) {
    _.writeMask = e >>> 0;
  }
  function M$(_, e) {
    _.x = e >>> 0;
  }
  function R$(_, e) {
    _.y = e >>> 0;
  }
  function C$(_, e) {
    _.z = e >>> 0;
  }
  function V$(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function L$(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function E$(_) {
    return _.shiftKey;
  }
  function G$(_) {
    return _.signal;
  }
  function O$(_, e) {
    const t = e.stack, r = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function W$() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return v(_) ? 0 : k(_);
  }
  function z$() {
    const _ = typeof global > "u" ? null : global;
    return v(_) ? 0 : k(_);
  }
  function U$() {
    const _ = typeof self > "u" ? null : self;
    return v(_) ? 0 : k(_);
  }
  function H$() {
    const _ = typeof window > "u" ? null : window;
    return v(_) ? 0 : k(_);
  }
  function q$(_, e) {
    const t = e.statusText, r = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function j$(_) {
    return _.status;
  }
  function K$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function N$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function J$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function Q$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function X$(_, e) {
    _.stencilMask(e >>> 0);
  }
  function Y$(_, e) {
    _.stencilMask(e >>> 0);
  }
  function Z$(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function ev(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function _v(_, e) {
    _.submit(e);
  }
  function tv() {
    return m(function(_, e, t, r, n, a, o, b, c, u) {
      _.texImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function rv() {
    return m(function(_, e, t, r, n, a, o, b, c, u) {
      _.texImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function nv() {
    return m(function(_, e, t, r, n, a, o, b, c, u) {
      _.texImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function av() {
    return m(function(_, e, t, r, n, a, o, b, c, u, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, b, c >>> 0, u >>> 0, d);
    }, arguments);
  }
  function ov() {
    return m(function(_, e, t, r, n, a, o, b, c, u, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, b, c >>> 0, u >>> 0, d);
    }, arguments);
  }
  function bv(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function cv(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function sv(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function iv(_, e, t, r, n, a, o) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, o);
  }
  function fv() {
    return m(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function uv() {
    return m(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function dv() {
    return m(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function gv() {
    return m(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function pv() {
    return m(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function wv() {
    return m(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function lv() {
    return m(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function mv() {
    return m(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function hv() {
    return m(function(_, e, t, r, n, a, o, b, c, u, d, T) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, T);
    }, arguments);
  }
  function yv() {
    return m(function(_, e, t, r, n, a, o, b, c, u, d, T) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, T);
    }, arguments);
  }
  function xv() {
    return m(function(_, e, t, r, n, a, o, b, c, u, d, T) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, T);
    }, arguments);
  }
  function $v() {
    return m(function(_, e, t, r, n, a, o, b, c, u, d, T) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, T);
    }, arguments);
  }
  function vv() {
    return m(function(_, e, t, r, n, a, o, b, c, u, d, T) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, T);
    }, arguments);
  }
  function Sv() {
    return m(function(_, e, t, r, n, a, o, b, c, u, d, T) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, T);
    }, arguments);
  }
  function Av() {
    return m(function(_, e, t, r, n, a, o, b, c, u, d, T) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, T);
    }, arguments);
  }
  function Iv(_, e, t) {
    return _.then(e, t);
  }
  function Fv(_, e, t) {
    return _.then(e, t);
  }
  function Dv(_, e) {
    return _.then(e);
  }
  function Tv(_, e, t) {
    _.uniform1f(e, t);
  }
  function Bv(_, e, t) {
    _.uniform1f(e, t);
  }
  function Pv(_, e, t) {
    _.uniform1i(e, t);
  }
  function kv(_, e, t) {
    _.uniform1i(e, t);
  }
  function Mv(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function Rv(_, e, t, r) {
    _.uniform2fv(e, W(t, r));
  }
  function Cv(_, e, t, r) {
    _.uniform2fv(e, W(t, r));
  }
  function Vv(_, e, t, r) {
    _.uniform2iv(e, _e(t, r));
  }
  function Lv(_, e, t, r) {
    _.uniform2iv(e, _e(t, r));
  }
  function Ev(_, e, t, r) {
    _.uniform2uiv(e, Se(t, r));
  }
  function Gv(_, e, t, r) {
    _.uniform3fv(e, W(t, r));
  }
  function Ov(_, e, t, r) {
    _.uniform3fv(e, W(t, r));
  }
  function Wv(_, e, t, r) {
    _.uniform3iv(e, _e(t, r));
  }
  function zv(_, e, t, r) {
    _.uniform3iv(e, _e(t, r));
  }
  function Uv(_, e, t, r) {
    _.uniform3uiv(e, Se(t, r));
  }
  function Hv(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function qv(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function jv(_, e, t, r) {
    _.uniform4fv(e, W(t, r));
  }
  function Kv(_, e, t, r) {
    _.uniform4fv(e, W(t, r));
  }
  function Nv(_, e, t, r) {
    _.uniform4iv(e, _e(t, r));
  }
  function Jv(_, e, t, r) {
    _.uniform4iv(e, _e(t, r));
  }
  function Qv(_, e, t, r) {
    _.uniform4uiv(e, Se(t, r));
  }
  function Xv(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function Yv(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, W(r, n));
  }
  function Zv(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, W(r, n));
  }
  function eS(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, W(r, n));
  }
  function _S(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, W(r, n));
  }
  function tS(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, W(r, n));
  }
  function rS(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, W(r, n));
  }
  function nS(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, W(r, n));
  }
  function aS(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, W(r, n));
  }
  function oS(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, W(r, n));
  }
  function bS(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, W(r, n));
  }
  function cS(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, W(r, n));
  }
  function sS(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, W(r, n));
  }
  function iS(_) {
    _.unmap();
  }
  function fS(_, e) {
    _.useProgram(e);
  }
  function uS(_, e) {
    _.useProgram(e);
  }
  function dS(_) {
    return _.value;
  }
  function gS(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function pS(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function wS(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function lS(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function mS(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function hS(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function yS(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function xS(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function $S(_) {
    return _.width;
  }
  function vS(_) {
    return _.width;
  }
  function SS() {
    return m(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, d_(r, n), a, o);
    }, arguments);
  }
  function AS() {
    return m(function(_, e, t, r, n, a) {
      _.writeTexture(e, d_(t, r), n, a);
    }, arguments);
  }
  function IS(_, e) {
    return te(_, e, KS);
  }
  function FS(_, e) {
    return te(_, e, YS);
  }
  function DS(_, e) {
    return te(_, e, eA);
  }
  function TS(_, e) {
    return te(_, e, NS);
  }
  function BS(_, e) {
    return te(_, e, JS);
  }
  function PS(_, e) {
    return te(_, e, QS);
  }
  function kS(_, e) {
    return te(_, e, XS);
  }
  function MS(_, e) {
    return te(_, e, jS);
  }
  function RS(_) {
    return _;
  }
  function CS(_) {
    return _;
  }
  function VS(_, e) {
    return W(_, e);
  }
  function LS(_, e) {
    return pA(_, e);
  }
  function ES(_, e) {
    return _e(_, e);
  }
  function GS(_, e) {
    return wA(_, e);
  }
  function OS(_, e) {
    return lA(_, e);
  }
  function WS(_, e) {
    return Se(_, e);
  }
  function zS(_, e) {
    return d_(_, e);
  }
  function US(_, e) {
    return S(_, e);
  }
  function HS(_) {
    return BigInt.asUintN(64, _);
  }
  function qS() {
    const _ = s.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function jS(_, e) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke_______true_(_, e);
  }
  function KS(_, e, t) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_(_, e, t);
  }
  function NS(_, e, t) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true_(_, e, t);
  }
  function JS(_, e, t) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__4(_, e, t);
  }
  function QS(_, e, t) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__5(_, e, t);
  }
  function XS(_, e, t) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__6(_, e, t);
  }
  function YS(_, e, t) {
    const r = s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_(_, e, t);
    if (r[1]) throw D(r[0]);
  }
  function ZS(_, e, t, r) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined_______true_(_, e, t, r);
  }
  function eA(_, e, t) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___f64______true_(_, e, t);
  }
  const Q_ = [
    "clamp-to-edge",
    "repeat",
    "mirror-repeat"
  ], jt = [
    "zero",
    "one",
    "src",
    "one-minus-src",
    "src-alpha",
    "one-minus-src-alpha",
    "dst",
    "one-minus-dst",
    "dst-alpha",
    "one-minus-dst-alpha",
    "src-alpha-saturated",
    "constant",
    "one-minus-constant",
    "src1",
    "one-minus-src1",
    "src1-alpha",
    "one-minus-src1-alpha"
  ], _A = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], tA = [
    "uniform",
    "storage",
    "read-only-storage"
  ], rA = [
    "opaque",
    "premultiplied"
  ], X_ = [
    "never",
    "less",
    "equal",
    "less-equal",
    "greater",
    "not-equal",
    "greater-equal",
    "always"
  ], nA = [
    "none",
    "front",
    "back"
  ], Kt = [
    "nearest",
    "linear"
  ], aA = [
    "ccw",
    "cw"
  ], Y_ = [
    "uint16",
    "uint32"
  ], Z_ = [
    "load",
    "clear"
  ], oA = [
    "nearest",
    "linear"
  ], bA = [
    "low-power",
    "high-performance"
  ], cA = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], sA = [
    "filtering",
    "non-filtering",
    "comparison"
  ], et = [
    "keep",
    "zero",
    "replace",
    "invert",
    "increment-clamp",
    "decrement-clamp",
    "increment-wrap",
    "decrement-wrap"
  ], iA = [
    "write-only",
    "read-only",
    "read-write"
  ], _t = [
    "store",
    "discard"
  ], Nt = [
    "all",
    "stencil-only",
    "depth-only"
  ], fA = [
    "1d",
    "2d",
    "3d"
  ], ce = [
    "r8unorm",
    "r8snorm",
    "r8uint",
    "r8sint",
    "r16uint",
    "r16sint",
    "r16float",
    "rg8unorm",
    "rg8snorm",
    "rg8uint",
    "rg8sint",
    "r32uint",
    "r32sint",
    "r32float",
    "rg16uint",
    "rg16sint",
    "rg16float",
    "rgba8unorm",
    "rgba8unorm-srgb",
    "rgba8snorm",
    "rgba8uint",
    "rgba8sint",
    "bgra8unorm",
    "bgra8unorm-srgb",
    "rgb9e5ufloat",
    "rgb10a2uint",
    "rgb10a2unorm",
    "rg11b10ufloat",
    "rg32uint",
    "rg32sint",
    "rg32float",
    "rgba16uint",
    "rgba16sint",
    "rgba16float",
    "rgba32uint",
    "rgba32sint",
    "rgba32float",
    "stencil8",
    "depth16unorm",
    "depth24plus",
    "depth24plus-stencil8",
    "depth32float",
    "depth32float-stencil8",
    "bc1-rgba-unorm",
    "bc1-rgba-unorm-srgb",
    "bc2-rgba-unorm",
    "bc2-rgba-unorm-srgb",
    "bc3-rgba-unorm",
    "bc3-rgba-unorm-srgb",
    "bc4-r-unorm",
    "bc4-r-snorm",
    "bc5-rg-unorm",
    "bc5-rg-snorm",
    "bc6h-rgb-ufloat",
    "bc6h-rgb-float",
    "bc7-rgba-unorm",
    "bc7-rgba-unorm-srgb",
    "etc2-rgb8unorm",
    "etc2-rgb8unorm-srgb",
    "etc2-rgb8a1unorm",
    "etc2-rgb8a1unorm-srgb",
    "etc2-rgba8unorm",
    "etc2-rgba8unorm-srgb",
    "eac-r11unorm",
    "eac-r11snorm",
    "eac-rg11unorm",
    "eac-rg11snorm",
    "astc-4x4-unorm",
    "astc-4x4-unorm-srgb",
    "astc-5x4-unorm",
    "astc-5x4-unorm-srgb",
    "astc-5x5-unorm",
    "astc-5x5-unorm-srgb",
    "astc-6x5-unorm",
    "astc-6x5-unorm-srgb",
    "astc-6x6-unorm",
    "astc-6x6-unorm-srgb",
    "astc-8x5-unorm",
    "astc-8x5-unorm-srgb",
    "astc-8x6-unorm",
    "astc-8x6-unorm-srgb",
    "astc-8x8-unorm",
    "astc-8x8-unorm-srgb",
    "astc-10x5-unorm",
    "astc-10x5-unorm-srgb",
    "astc-10x6-unorm",
    "astc-10x6-unorm-srgb",
    "astc-10x8-unorm",
    "astc-10x8-unorm-srgb",
    "astc-10x10-unorm",
    "astc-10x10-unorm-srgb",
    "astc-12x10-unorm",
    "astc-12x10-unorm-srgb",
    "astc-12x12-unorm",
    "astc-12x12-unorm-srgb"
  ], uA = [
    "float",
    "unfilterable-float",
    "depth",
    "sint",
    "uint"
  ], tt = [
    "1d",
    "2d",
    "2d-array",
    "cube",
    "cube-array",
    "3d"
  ], dA = [
    "uint8",
    "uint8x2",
    "uint8x4",
    "sint8",
    "sint8x2",
    "sint8x4",
    "unorm8",
    "unorm8x2",
    "unorm8x4",
    "snorm8",
    "snorm8x2",
    "snorm8x4",
    "uint16",
    "uint16x2",
    "uint16x4",
    "sint16",
    "sint16x2",
    "sint16x4",
    "unorm16",
    "unorm16x2",
    "unorm16x4",
    "snorm16",
    "snorm16x2",
    "snorm16x4",
    "float16",
    "float16x2",
    "float16x4",
    "float32",
    "float32x2",
    "float32x3",
    "float32x4",
    "uint32",
    "uint32x2",
    "uint32x3",
    "uint32x4",
    "sint32",
    "sint32x2",
    "sint32x3",
    "sint32x4",
    "unorm10-10-10-2",
    "unorm8x4-bgra"
  ], gA = [
    "vertex",
    "instance"
  ], vt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => s.__wbg_handle_free(_, 1)), h_ = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => s.__wbg_proteusapp_free(_, 1)), St = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => s.__wbg_texturehandle_free(_, 1)), At = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => s.__wbg_transitionchannel_free(_, 1)), It = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => s.__wbg_videohandle_free(_, 1));
  function k(_) {
    const e = s.__externref_table_alloc();
    return s.__wbindgen_externrefs.set(e, _), e;
  }
  function w(_, e) {
    if (!(_ instanceof e)) throw new Error(`expected instance of ${e.name}`);
  }
  const Ft = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => s.__wbindgen_destroy_closure(_.a, _.b));
  function R_(_) {
    const e = typeof _;
    if (e == "number" || e == "boolean" || _ == null) return `${_}`;
    if (e == "string") return `"${_}"`;
    if (e == "symbol") {
      const n = _.description;
      return n == null ? "Symbol" : `Symbol(${n})`;
    }
    if (e == "function") {
      const n = _.name;
      return typeof n == "string" && n.length > 0 ? `Function(${n})` : "Function";
    }
    if (Array.isArray(_)) {
      const n = _.length;
      let a = "[";
      n > 0 && (a += R_(_[0]));
      for (let o = 1; o < n; o++) a += ", " + R_(_[o]);
      return a += "]", a;
    }
    const t = /\[object ([^\]]+)\]/.exec(toString.call(_));
    let r;
    if (t && t.length > 1) r = t[1];
    else return toString.call(_);
    if (r == "Object") try {
      return "Object(" + JSON.stringify(_) + ")";
    } catch {
      return "Object";
    }
    return _ instanceof Error ? `${_.name}: ${_.message}
${_.stack}` : r;
  }
  function W(_, e) {
    return _ = _ >>> 0, mA().subarray(_ / 4, _ / 4 + e);
  }
  function pA(_, e) {
    return _ = _ >>> 0, yA().subarray(_ / 2, _ / 2 + e);
  }
  function _e(_, e) {
    return _ = _ >>> 0, xA().subarray(_ / 4, _ / 4 + e);
  }
  function wA(_, e) {
    return _ = _ >>> 0, $A().subarray(_ / 1, _ / 1 + e);
  }
  function lA(_, e) {
    return _ = _ >>> 0, vA().subarray(_ / 2, _ / 2 + e);
  }
  function Se(_, e) {
    return _ = _ >>> 0, SA().subarray(_ / 4, _ / 4 + e);
  }
  function d_(_, e) {
    return _ = _ >>> 0, he().subarray(_ / 1, _ / 1 + e);
  }
  let fe = null;
  function R() {
    return (fe === null || fe.buffer.detached === true || fe.buffer.detached === void 0 && fe.buffer !== s.memory.buffer) && (fe = new DataView(s.memory.buffer)), fe;
  }
  let Qe = null;
  function mA() {
    return (Qe === null || Qe.byteLength === 0) && (Qe = new Float32Array(s.memory.buffer)), Qe;
  }
  let Xe = null;
  function hA() {
    return (Xe === null || Xe.byteLength === 0) && (Xe = new Float64Array(s.memory.buffer)), Xe;
  }
  let Ye = null;
  function yA() {
    return (Ye === null || Ye.byteLength === 0) && (Ye = new Int16Array(s.memory.buffer)), Ye;
  }
  let Ze = null;
  function xA() {
    return (Ze === null || Ze.byteLength === 0) && (Ze = new Int32Array(s.memory.buffer)), Ze;
  }
  let e_ = null;
  function $A() {
    return (e_ === null || e_.byteLength === 0) && (e_ = new Int8Array(s.memory.buffer)), e_;
  }
  function S(_, e) {
    return IA(_ >>> 0, e);
  }
  let __ = null;
  function vA() {
    return (__ === null || __.byteLength === 0) && (__ = new Uint16Array(s.memory.buffer)), __;
  }
  let t_ = null;
  function SA() {
    return (t_ === null || t_.byteLength === 0) && (t_ = new Uint32Array(s.memory.buffer)), t_;
  }
  let r_ = null;
  function he() {
    return (r_ === null || r_.byteLength === 0) && (r_ = new Uint8Array(s.memory.buffer)), r_;
  }
  function m(_, e) {
    try {
      return _.apply(this, e);
    } catch (t) {
      const r = k(t);
      s.__wbindgen_exn_store(r);
    }
  }
  function v(_) {
    return _ == null;
  }
  function te(_, e, t) {
    const r = {
      a: _,
      b: e,
      cnt: 1
    }, n = (...a) => {
      r.cnt++;
      const o = r.a;
      r.a = 0;
      try {
        return t(o, r.b, ...a);
      } finally {
        r.a = o, n._wbg_cb_unref();
      }
    };
    return n._wbg_cb_unref = () => {
      --r.cnt === 0 && (s.__wbindgen_destroy_closure(r.a, r.b), r.a = 0, Ft.unregister(r));
    }, Ft.register(n, r, r), n;
  }
  function n_(_, e) {
    const t = e(_.length * 1, 1) >>> 0;
    return he().set(_, t / 1), B = _.length, t;
  }
  function a_(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return hA().set(_, t / 8), B = _.length, t;
  }
  function Dt(_, e) {
    const t = e(_.length * 4, 4) >>> 0;
    for (let r = 0; r < _.length; r++) {
      const n = k(_[r]);
      R().setUint32(t + 4 * r, n, true);
    }
    return B = _.length, t;
  }
  function E(_, e, t) {
    if (t === void 0) {
      const b = Fe.encode(_), c = e(b.length, 1) >>> 0;
      return he().subarray(c, c + b.length).set(b), B = b.length, c;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = he();
    let o = 0;
    for (; o < r; o++) {
      const b = _.charCodeAt(o);
      if (b > 127) break;
      a[n + o] = b;
    }
    if (o !== r) {
      o !== 0 && (_ = _.slice(o)), n = t(n, r, r = o + _.length * 3, 1) >>> 0;
      const b = he().subarray(n + o, n + r), c = Fe.encodeInto(_, b);
      o += c.written, n = t(n, r, o, 1) >>> 0;
    }
    return B = o, n;
  }
  function D(_) {
    const e = s.__wbindgen_externrefs.get(_);
    return s.__externref_table_dealloc(_), e;
  }
  let c_ = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  c_.decode();
  const AA = 2146435072;
  let y_ = 0;
  function IA(_, e) {
    return y_ += e, y_ >= AA && (c_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), c_.decode(), y_ = e), c_.decode(he().subarray(_, _ + e));
  }
  const Fe = new TextEncoder();
  "encodeInto" in Fe || (Fe.encodeInto = function(_, e) {
    const t = Fe.encode(_);
    return e.set(t), {
      read: _.length,
      written: t.length
    };
  });
  let B = 0, s;
  function FA(_) {
    s = _;
  }
  URL = globalThis.URL;
  const DA = await G_({
    "./proteus_bench_web_bg.js": {
      __wbg_call_5575218572ead796: f3,
      __wbg_then_05edfc8a4fea5106: Iv,
      __wbg_new_typed_00a409eb4ec4f2d9: B7,
      __wbg_next_0c4066e251d2eff9: k7,
      __wbg_done_b62d4a7d2286852a: K5,
      __wbg_value_49f783bb59765962: dS,
      __wbg_length_c6054974c0a6cdb9: L9,
      __wbg_get_unchecked_54a4374c38e08460: c9,
      __wbg_instanceof_Map_afa18d5840c04c15: $9,
      __wbg_get_197a3fe98f169e38: a9,
      __wbg_new_227d7c05414eb861: S7,
      __wbg_stack_3b0d974bbf31e44f: O$,
      __wbg_error_a6fa202b58aa1cd3: u8,
      __wbg_push_f724b5db8acf89d2: J7,
      __wbg_call_8e98ed2f3c86c4b5: u3,
      __wbg_call_0e855b388e315e17: i3,
      __wbg_set_dc601f4a69da0bc2: iy,
      __wbg_proteusapp_new: K7,
      __wbg_get_with_ref_key_6412cf3094599694: s9,
      __wbg_set_6be42768c690e380: Bh,
      __wbg_String_8564e559799eccda: tm,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: y9,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: i7,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: f7,
      __wbg_maxTextureDimension3D_06ee54121b37d431: u7,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: s7,
      __wbg_maxBindGroups_14611ac9ed1c6b56: H9,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: q9,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: t7,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: _7,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: n7,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: a7,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: b7,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: c7,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: g7,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: d7,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: o7,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: l7,
      __wbg_maxBufferSize_f7ce3e1856349d2f: j9,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: p7,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: w7,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: r7,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: y7,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: h7,
      __wbg_maxColorAttachments_fd9187f9f786da18: N9,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: K9,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: Z9,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: J9,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: Q9,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: X9,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: Y9,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: e7,
      __wbg_description_18d0a6d4077fec8e: G5,
      __wbg_set_dst_factor_1ed75271a89a711e: Fy,
      __wbg_set_operation_b5862f5a1a143b30: Bx,
      __wbg_set_src_factor_1c4f755f8676df1b: Qx,
      __wbg_set_texture_16d2be474ce6ad0c: i$,
      __wbg_set_mip_level_246db61be15bdd69: hx,
      __wbg_set_x_56f0c2c08a62725c: M$,
      __wbg_set_y_04fb8ce84735b4e1: R$,
      __wbg_set_z_a51316db27a4941e: C$,
      __wbg_set_origin_9b3b0fbe0a5dc469: Px,
      __wbg_set_aspect_77332ac136ee94eb: Wh,
      __wbg_Window_a07901001eb4269f: rm,
      __wbg_gpu_a7c12045c25d009a: i9,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: nm,
      __wbg_set_a_5f6e488475272136: Ph,
      __wbg_set_b_688365d692bba214: Hh,
      __wbg_set_g_d4d1d77cf8fdd362: Hy,
      __wbg_set_r_527e5a41c4b1a846: Vx,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: h9,
      __wbg_queue_65d985f3e6d786a6: _h,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: Mx,
      __wbg_requestAdapter_9ff5c9d1ff271165: ih,
      __wbg_set_required_limits_3b031f66f838f4e3: Ex,
      __wbg_set_required_features_54918de8185c5fab: Lx,
      __wbg_set_label_bae57fb9f24fde5c: _x,
      __wbg_requestDevice_c1c34f88a477e509: dh,
      __wbg_limits_50a8c5e629dbfe40: G9,
      __wbg_info_22dcf1fd1b12bc7d: w9,
      __wbg_set_size_41cd9255ca1e4242: Nx,
      __wbg_set_usage_908213a4d4bb8bde: h$,
      __wbg_set_mapped_at_creation_48de4735fab51e78: gx,
      __wbg_set_label_cd567b7b35838e4c: nx,
      __wbg_createBuffer_2f08c0205e04efca: U3,
      __wbg_set_address_mode_u_a37cf1035585c638: Mh,
      __wbg_set_address_mode_v_8ac049e029caef76: Rh,
      __wbg_set_address_mode_w_eb9260ee11729e92: Ch,
      __wbg_set_compare_42211fbf15e3b850: by,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: fx,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: ux,
      __wbg_set_mag_filter_69d846b974d4bcc0: dx,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: mx,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: $x,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: wx,
      __wbg_set_label_dcd98efbb9370da8: ox,
      __wbg_createSampler_248bd67c920af37d: _5,
      __wbg_set_width_1a5e2e86fa5bdcd8: B$,
      __wbg_set_height_e8b5483b8c117d5e: Ky,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: my,
      __wbg_set_format_e9d4b1475bb3bd3b: Oy,
      __wbg_set_size_a61ff22205255d61: Jx,
      __wbg_set_usage_7fa9cd18d1104aca: m$,
      __wbg_set_label_0c1bd0e976cf0a9a: Qy,
      __wbg_set_dimension_36e13ccecae5af4b: Iy,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: xx,
      __wbg_set_sample_count_865e1d19b84e27e6: zx,
      __wbg_set_view_formats_bab284fc81b40e70: I$,
      __wbg_createTexture_9e76b80a2dc0d12e: c5,
      __wbg_set_entries_fc76ca4d7da6a709: By,
      __wbg_set_layout_eeef59714f5bf48b: sx,
      __wbg_set_label_f92ae11c77d74198: bx,
      __wbg_createBindGroup_2320df4db188406c: W3,
      __wbg_set_code_56e2d45ec1ff6c2d: ry,
      __wbg_set_label_be45aed56e4b9fee: tx,
      __wbg_createShaderModule_53701de4fb271c90: r5,
      __wbg_set_label_d1c24b5a7a3ac31d: ax,
      __wbg_createCommandEncoder_cd88faca35d9ed68: q3,
      __wbg_set_bind_group_layouts_5325d038771af328: Nh,
      __wbg_set_label_2f592bd1be3db6b3: Zy,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: N3,
      __wbg_set_module_14e471fdd94c582d: Sx,
      __wbg_set_entry_point_8db3b6d103e3b865: ky,
      __wbg_set_buffers_85a7238f4ef28ab4: ey,
      __wbg_set_layout_7c5ba5bdcde8a0f0: cx,
      __wbg_set_vertex_a4951dd9a7a4ed54: x$,
      __wbg_set_label_c47c451211e2f6d2: rx,
      __wbg_set_format_f9341112e43ea182: Wy,
      __wbg_set_depth_compare_30e9ea552da12fe2: py,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: vy,
      __wbg_set_depth_bias_428c9340b0fd937b: fy,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: uy,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: dy,
      __wbg_set_compare_1509dc1a5420943f: oy,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: wy,
      __wbg_set_fail_op_77ab26c98f847b65: Ry,
      __wbg_set_pass_op_e9470d1262fb8a8b: kx,
      __wbg_set_stencil_back_6ef4683123b19b25: Xx,
      __wbg_set_stencil_front_aeb8580a97e5424b: Zx,
      __wbg_set_stencil_read_mask_2954f260d47349ea: _$,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: n$,
      __wbg_set_depth_stencil_1bd50dbc450c8650: yy,
      __wbg_set_module_08ad08e736d8edbf: vx,
      __wbg_set_targets_6b0b3bdd87f35668: s$,
      __wbg_set_entry_point_6fec5723cc790927: Py,
      __wbg_set_fragment_1a595620425637e1: zy,
      __wbg_set_count_26a934d1cd07d080: cy,
      __wbg_set_mask_0c49a66362fc0079: px,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: Eh,
      __wbg_set_multisample_85f073947b782d07: Ax,
      __wbg_set_cull_mode_9d466c1ab414cac8: sy,
      __wbg_set_front_face_50cdf4eb61504a46: Uy,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: c$,
      __wbg_set_topology_beefb3aca0612b00: d$,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: w$,
      __wbg_set_primitive_369241acd17871f1: Rx,
      __wbg_createRenderPipeline_f48187ba9f7701e8: Y3,
      __wbg_set_entries_3017e6132f938c6e: Ty,
      __wbg_set_label_1175a3329a06e52b: Xy,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: O3,
      __wbg_limits_1c25cb4f379a4418: E9,
      __wbg_set_color_attachments_abe67f6631926e28: ny,
      __wbg_set_label_8fd860a36d2c7b74: ex,
      __wbg_set_view_dbd0294573f64d05: v$,
      __wbg_set_depth_clear_value_442bf492734f63b6: gy,
      __wbg_set_depth_load_op_34d430b74bb36d91: ly,
      __wbg_set_depth_store_op_0ea0a215313dbda7: $y,
      __wbg_set_depth_read_only_138a11b10c731094: hy,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: Yx,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: e$,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: r$,
      __wbg_set_stencil_read_only_fb489d191b6d969b: t$,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: xy,
      __wbg_set_query_set_18679a8580267d5a: Cx,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: Kh,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: Dy,
      __wbg_set_timestamp_writes_c552d52fbb417005: u$,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: Pm,
      __wbg_copyTextureToTexture_1be188df1e535c0a: G3,
      __wbg_label_47480289cc2bce71: C9,
      __wbg_set_label_2d2227f4d5991e50: Yy,
      __wbg_finish_cfaeede3baf55be1: l8,
      __wbg_finish_087cb89c65c06eb1: w8,
      __wbg_drawIndexed_68637ebab6dd8d6e: t8,
      __wbg_setPipeline_bab24dbce96903b9: Sh,
      __wbg_setViewport_f9d423db4f4b4b58: Fh,
      __wbg_setBindGroup_4ba56e1e0d26f244: yh,
      __wbg_setBindGroup_6124849cc8547086: xh,
      __wbg_setIndexBuffer_17431786d06c1b7c: $h,
      __wbg_setIndexBuffer_a16ed5b869c87507: vh,
      __wbg_setVertexBuffer_b508baf8d0ffe331: Ih,
      __wbg_setVertexBuffer_91c4b602d0289943: Ah,
      __wbg_end_414453a89205612c: c8,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: U8,
      __wbg_getCurrentTexture_51975ae7185fd15f: C8,
      __wbg_set_device_0d774b66e7288f72: Sy,
      __wbg_set_format_d347899cd860709c: Gy,
      __wbg_set_usage_ae014e77ff77ce06: y$,
      __wbg_set_alpha_mode_92402195b3ae1ee7: Lh,
      __wbg_set_view_formats_fe531a043efb71fa: F$,
      __wbg_configure_3d64c677c7d68a15: M3,
      __wbg_writeBuffer_b4bdd36178348ca5: SS,
      __wbg_set_bytes_per_row_91681ca78d744888: _y,
      __wbg_set_rows_per_image_d198b7e73a38978b: Wx,
      __wbg_set_offset_a097a8050a3a9a33: Tx,
      __wbg_writeTexture_b45b69132e46a227: AS,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: O7,
      __wbg_submit_1290d44bb76ecef4: _v,
      __wbg_getMappedRange_5ed22727c9679168: G8,
      __wbg_unmap_8f06698a75b8331a: iS,
      __wbg_destroy_b5b39f25f0799295: O5,
      __wbg_mapAsync_bb0029907dd91181: U9,
      __wbg_set_dimension_174ad7e2fb67fb4e: Ay,
      __wbg_set_format_90860b0321868db4: Ly,
      __wbg_set_aspect_a823a14d00d42d37: zh,
      __wbg_set_base_array_layer_cc6c68d233489c4b: qh,
      __wbg_set_array_layer_count_daec613068108a9d: Gh,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: jh,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: yx,
      __wbg_set_label_03d2396d4655a3e1: Jy,
      __wbg_set_usage_7f0dda8309469b1c: l$,
      __wbg_createView_cc96b5bdd3d5bf5e: f5,
      __wbg_set_format_abf7a1bc5425c56a: Ey,
      __wbg_set_alpha_aa2e606e9e647b21: Vh,
      __wbg_set_color_bc393d7efc3c8594: ay,
      __wbg_set_blend_8d6e9c08b5702a09: Xh,
      __wbg_set_write_mask_144b25e2bd909124: k$,
      __wbg_set_load_op_56844f51434037bf: ix,
      __wbg_set_store_op_caeede4654b3d847: b$,
      __wbg_set_view_bdeab150b5f0768c: $$,
      __wbg_set_clear_value_642701f928a5ccb3: ty,
      __wbg_set_resolve_target_fe76b3f99cf72078: Gx,
      __wbg_set_buffer_55f096330c8912b4: Yh,
      __wbg_set_offset_73156b0e0b41d79a: Fx,
      __wbg_set_size_1e6281b07cd39177: Kx,
      __wbg_set_binding_f3c188a8cd21455b: Qh,
      __wbg_set_resource_fe385d2e3dadaf63: Ox,
      __wbg_set_format_6606f5c1fba6f459: Vy,
      __wbg_set_offset_8d9d9afffa18b591: Dx,
      __wbg_set_shader_location_0ff30a733291a396: qx,
      __wbg_set_array_stride_c2c009eabc18b5f6: Oh,
      __wbg_set_attributes_05f9117fd32ca606: Uh,
      __wbg_set_step_mode_a35aef328761c452: a$,
      __wbg_set_binding_b6b0fe5c281b8c69: Jh,
      __wbg_set_visibility_1bca121a89accba5: D$,
      __wbg_set_type_c1eebc19f8a6aeb9: p$,
      __wbg_set_sampler_8c5d7fb1b02058c6: Hx,
      __wbg_set_multisampled_40505c1381e1c32c: Ix,
      __wbg_set_external_texture_825fe2bc7a0c0603: My,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: qy,
      __wbg_set_min_binding_size_689661b9ed25e083: lx,
      __wbg_set_type_38961e08504ca674: g$,
      __wbg_set_buffer_e89095a9f0cafad3: Zh,
      __wbg_set_sample_type_7088b1efddce6a69: Ux,
      __wbg_set_view_dimension_3ed01b237e85826f: A$,
      __wbg_set_texture_e25a73da75cf5808: f$,
      __wbg_set_format_1786adb7bc74c7c9: Cy,
      __wbg_set_access_091f317905cd76a5: kh,
      __wbg_set_view_dimension_263387976511ebc9: S$,
      __wbg_set_storage_texture_ab9eed9786337ef0: o$,
      __wbg_requestAdapter_c46930b8bc33722d: fh,
      __wbg_includes_83dff8d05da243c5: p9,
      __wbg_clearBufferuiv_1d2d93401c0904a3: p3,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: T3,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: P3,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: k3,
      __wbg_copyBufferSubData_a944f33b601b822d: C3,
      __wbg_clientWaitSync_7580165bd2eff461: $3,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: B3,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: E3,
      __wbg_createQuery_f013132b870a71ef: X3,
      __wbg_createSampler_9fe50152a2524319: t5,
      __wbg_createVertexArray_8685feb21901c932: i5,
      __wbg_deleteQuery_ef51ea0a52420103: $5,
      __wbg_deleteSampler_5c045e0cc55813d4: A5,
      __wbg_getIndexedParameter_2b18df6fca85f751: E8,
      __wbg_getQueryParameter_0599e85ddb81220b: N8,
      __wbg_getSyncParameter_9a2bda340ebe166f: _9,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: t9,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: D9,
      __wbg_deleteSync_37ca83c429c43d8a: D5,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: k5,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: J5,
      __wbg_drawBuffers_558d96e52e754731: Z5,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: _8,
      __wbg_endQuery_161170c5280a8293: b8,
      __wbg_fenceSync_56efc7cc79111e54: d8,
      __wbg_framebufferTextureLayer_2312acdc74f97676: A8,
      __wbg_getBufferSubData_92680d3a2f7be029: B8,
      __wbg_readBuffer_361ec5474f3aae49: th,
      __wbg_readPixels_5840000f3e22f3ce: nh,
      __wbg_readPixels_5bf204799ed2272f: ah,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: oh,
      __wbg_texImage3D_8647ef58aef5b912: ov,
      __wbg_texStorage2D_ed5df596c5f1e3af: sv,
      __wbg_texStorage3D_160b0197bc190f04: iv,
      __wbg_texSubImage2D_f03448e182b0820d: mv,
      __wbg_texSubImage2D_d14d9c0a1f627c31: lv,
      __wbg_texSubImage2D_89866a04ecd0a76b: gv,
      __wbg_texSubImage2D_5c630043f1c56716: dv,
      __wbg_samplerParameterf_3157ba41c0f4d97a: ph,
      __wbg_samplerParameteri_f85a29156e790189: wh,
      __wbg_texImage2D_0e0f37b9fb297d01: tv,
      __wbg_texImage2D_0e537dc331652de3: rv,
      __wbg_texImage3D_30dbf7234481b8f5: av,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: uv,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: pv,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: wv,
      __wbg_texSubImage3D_933e4cd41cc5376d: vv,
      __wbg_texSubImage3D_c3538b28040daac9: Av,
      __wbg_uniform1ui_36c94692177ebf76: Mv,
      __wbg_uniform2fv_17592f4dad9798fb: Rv,
      __wbg_uniform2iv_d5d29ebbc466977d: Lv,
      __wbg_texSubImage3D_0fdbd843482bb916: yv,
      __wbg_texSubImage3D_09a97a968b93253d: hv,
      __wbg_texSubImage3D_355efde0dc047913: xv,
      __wbg_texSubImage3D_bd32c8e29e470904: Sv,
      __wbg_texSubImage3D_5a238709d114b609: $v,
      __wbg_uniform2uiv_418ba3bf6a230dd5: Ev,
      __wbg_uniform4fv_9e670a001c77dca0: Kv,
      __wbg_uniform4iv_1d57c6b8e5c0e447: Nv,
      __wbg_uniform3fv_dbe44b778e6b89e8: Ov,
      __wbg_uniform3iv_d75d3a5f86d54be4: zv,
      __wbg_uniform3uiv_71c1efc24a662de9: Uv,
      __wbg_uniform4uiv_c5d45f5dbdae727a: Qv,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: tS,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: nS,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: aS,
      __wbg_uniformBlockBinding_829a71912ad79a04: Xv,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: Yv,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: eS,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: _S,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: oS,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: wS,
      __wbg_activeTexture_525ee3068cb9e8d5: Sm,
      __wbg_attachShader_3477e67517b09b6b: Dm,
      __wbg_bindAttribLocation_79b5d26727094518: km,
      __wbg_bindBuffer_d3111de6861cb875: Cm,
      __wbg_bindFramebuffer_63e837a5dc0accfb: Em,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: Gm,
      __wbg_bindTexture_7ab28ff4ff3dc506: zm,
      __wbg_blendColor_15f26633b646e542: jm,
      __wbg_blendEquation_7dadb4db540a42da: Qm,
      __wbg_blendEquationSeparate_8240ddfa32266109: Nm,
      __wbg_blendFunc_b15af02643e188f1: _3,
      __wbg_blendFuncSeparate_456410f9919bed39: Zm,
      __wbg_clear_dadcb3e2929388b0: y3,
      __wbg_clearDepth_05c17028494ee4dd: w3,
      __wbg_clearStencil_917833d1e2ac56e4: h3,
      __wbg_colorMask_f111e3e5796458f4: A3,
      __wbg_compileShader_f5625b583b2c9fd6: I3,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: cS,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: sS,
      __wbg_vertexAttribDivisor_f17a8585267be92f: pS,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: V3,
      __wbg_createBuffer_9f602b2dbcbf409c: H3,
      __wbg_createFramebuffer_4a250944a4542bbc: j3,
      __wbg_createProgram_4c8164d471c10346: J3,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: e5,
      __wbg_createShader_9c5cd42709d915ff: a5,
      __wbg_createTexture_3eed23cb87dd35fc: o5,
      __wbg_cullFace_94f24b4fd5e9038b: g5,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: w5,
      __wbg_getExtension_11824edd67a143d8: L8,
      __wbg_getParameter_7f7f23cae98f2c81: W8,
      __wbg_getProgramInfoLog_cd84be80942f345b: q8,
      __wbg_getProgramParameter_039391d5ba319f50: j8,
      __wbg_getShaderInfoLog_495bddda98172699: J8,
      __wbg_getShaderParameter_4eb65cfb174ceb22: X8,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: Z8,
      __wbg_getUniformLocation_ab63f569a4e41744: n9,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: m5,
      __wbg_deleteProgram_eff668280dcb01ca: x5,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: S5,
      __wbg_deleteShader_3339454254c7147c: I5,
      __wbg_deleteTexture_c1c58550dc55af5c: B5,
      __wbg_depthFunc_31b183b5b8ee478e: M5,
      __wbg_depthMask_cab7f2ae7f0e559c: V5,
      __wbg_depthRange_797a71ba3b79267a: L5,
      __wbg_disable_cb1b3e6c1cee5202: q5,
      __wbg_disableVertexAttribArray_b395358ec5084c39: U5,
      __wbg_drawArrays_42dbb4b0349c8f34: X5,
      __wbg_enable_d1f42f78be33a553: o8,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: r8,
      __wbg_flush_7ae42f071230db6b: m8,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: $8,
      __wbg_framebufferTexture2D_367ab597a005e8d9: v8,
      __wbg_frontFace_9bdcf2a758e989e5: F8,
      __wbg_linkProgram_e23a348b0f6e0c4f: W9,
      __wbg_pixelStorei_a78a504be58d1d0a: U7,
      __wbg_polygonOffset_a4f07d97b9b0dced: q7,
      __wbg_renderbufferStorage_3049e13db5c4e60e: ch,
      __wbg_scissor_6c024669fbf4fe72: lh,
      __wbg_vertexAttribPointer_4e5d289c5d224210: mS,
      __wbg_viewport_a0ca330f9b85397e: hS,
      __wbg_shaderSource_66dce75b25a1a407: L$,
      __wbg_stencilFuncSeparate_ec603976be9569a4: N$,
      __wbg_stencilMask_485dcb5965c79a71: X$,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: Q$,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: Z$,
      __wbg_texParameteri_c6efffcecb474d2f: bv,
      __wbg_uniform1f_3acd3f3eb50b5e11: Tv,
      __wbg_uniform1i_e4f13604354c28ae: kv,
      __wbg_uniform4f_a5008773cfb47d1a: qv,
      __wbg_useProgram_ab2ee2a13a1fd909: uS,
      __wbg_bufferSubData_2270f1b9db71e642: b3,
      __wbg_clearBufferfv_6b77b9402254a2bf: d3,
      __wbg_clearBufferiv_0f056544010eef3e: g3,
      __wbg_beginQuery_dad334d972fed3cc: Bm,
      __wbg_bindBufferRange_16a9d90becc2a7d7: Rm,
      __wbg_bindSampler_3c7002cb6d56ae8f: Wm,
      __wbg_bindVertexArray_c391bd47303d75cd: qm,
      __wbg_blitFramebuffer_ea96ada8bba07582: t3,
      __wbg_bufferData_64e9905f2b3d3a6f: a3,
      __wbg_bufferData_99bbbc63f02251c4: o3,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: I9,
      __wbg_performance_4c23a97261596fec: W7,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: uh,
      __wbg_fetch_2d913f7108d17a24: g8,
      __wbg_fetch_d8c50740ea23b248: p8,
      __wbg_navigator_935098efd1dc7fe5: $7,
      __wbg_devicePixelRatio_8e5ca44720abafec: W5,
      __wbg_document_2634180a4c694068: j5,
      __wbg_instanceof_Window_0d356b88a2f77c42: F9,
      __wbg_hidden_cb32701ca3785fea: g9,
      __wbg_getElementById_c7aba6b93b34bf01: V8,
      __wbg_querySelector_1f3658f4b48e268b: Y7,
      __wbg_querySelectorAll_ffda3c891a9eb29a: X7,
      __wbg_hasAttribute_73e1230c9c107e79: f9,
      __wbg_setAttribute_8bccfbabf2a83682: hh,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: T8,
      __wbg_focus_c80921c19b28520b: y8,
      __wbg_uniform2iv_c5e863975dd780d8: Vv,
      __wbg_uniform3fv_7723e142be50856f: Gv,
      __wbg_uniform3iv_bea3976522e15d48: Wv,
      __wbg_uniform4fv_85ad5d23234895d2: jv,
      __wbg_clear_ff8cfdf420f7dde6: x3,
      __wbg_clearDepth_ac6b54f112feeaf7: l3,
      __wbg_clearStencil_56d6a6308294a749: m3,
      __wbg_colorMask_b0ab9d429a1efa0a: S3,
      __wbg_compileShader_fcf3f3d2891f73f9: F3,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: L3,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: z3,
      __wbg_createFramebuffer_ab73f30b5dc97415: K3,
      __wbg_createProgram_f11c63f59f41b82a: Q3,
      __wbg_createRenderbuffer_556000dbb01f5026: Z3,
      __wbg_createShader_27d9388313f3b14e: n5,
      __wbg_createTexture_8455c703424c567b: b5,
      __wbg_cullFace_774780fb4177aab8: d5,
      __wbg_deleteBuffer_d758283bea6e0ccf: l5,
      __wbg_deleteFramebuffer_8953b325144192fe: h5,
      __wbg_deleteProgram_0135c6926e75af75: y5,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: v5,
      __wbg_deleteShader_79dbaaed69b7ca3b: F5,
      __wbg_deleteTexture_3acb672a45f9998a: T5,
      __wbg_depthFunc_eaca1bc79f7bf216: R5,
      __wbg_depthMask_3a9074b08d1f68e5: C5,
      __wbg_depthRange_c24a808b3496e0a9: E5,
      __wbg_uniform4iv_a9aaa92f2f458ec2: Jv,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: Zv,
      __wbg_uniformMatrix3fv_da8c388748c5739b: rS,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: bS,
      __wbg_activeTexture_1d5359b20df41710: vm,
      __wbg_attachShader_683d1070365e7066: Tm,
      __wbg_bindAttribLocation_d56d3c40331af7ed: Mm,
      __wbg_bindBuffer_e95efaf0d4851845: Vm,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: Lm,
      __wbg_bindRenderbuffer_d608b211c51ed147: Om,
      __wbg_bindTexture_ffc56f1e5c5526c6: Um,
      __wbg_blendColor_a0ba1cdcecc3a34c: Km,
      __wbg_blendEquation_8bfa69f639ae92da: Xm,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: Jm,
      __wbg_blendFunc_713c504adab14f98: e3,
      __wbg_blendFuncSeparate_3eef699c291dbc87: Ym,
      __wbg_disable_4dca6ee0ccc91e4a: H5,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: z5,
      __wbg_drawArrays_10e1254aa4524ae9: Q5,
      __wbg_enable_c6e523307311617a: a8,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: n8,
      __wbg_flush_eb3fb8da2ec00d57: h8,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: x8,
      __wbg_linkProgram_6a2eee02a03b9b00: O9,
      __wbg_pixelStorei_55ad4c67b699537c: z7,
      __wbg_polygonOffset_06dc6468c12a57e1: H7,
      __wbg_renderbufferStorage_2918fb696fd45663: bh,
      __wbg_scissor_f9696c630e464977: mh,
      __wbg_shaderSource_628c37a476ae65f9: V$,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: K$,
      __wbg_stencilMask_f9fe198f7fd6fc9c: Y$,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: J$,
      __wbg_stencilOpSeparate_6cf50803475d2640: ev,
      __wbg_texParameteri_fe6210a493d48a16: cv,
      __wbg_framebufferTexture2D_3a558e14f56720d2: S8,
      __wbg_frontFace_c9bb1fa659ffd276: D8,
      __wbg_getParameter_91a344e1a84a4669: z8,
      __wbg_getProgramInfoLog_35410850de9ccefe: H8,
      __wbg_getProgramParameter_bbc667347ac2e882: K8,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: Q8,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: Y8,
      __wbg_getUniformLocation_340155dc706d3fea: r9,
      __wbg_uniform1f_d34e4b454f7c8e73: Bv,
      __wbg_uniform1i_cd9a7f990128ea48: Pv,
      __wbg_uniform4f_4410d2faaa7e5dda: Hv,
      __wbg_useProgram_0e1cd86765304939: fS,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: lS,
      __wbg_viewport_b5bd46a0d111c83c: yS,
      __wbg_texSubImage2D_1b2ff28f994c325e: fv,
      __wbg_uniform2fv_39277cf2d3cb83c7: Cv,
      __wbg_bufferData_5df9bdb32e189eee: n3,
      __wbg_bufferData_26132561617ce8fb: r3,
      __wbg_bufferSubData_44db8a3b4a70b57d: c3,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: D3,
      __wbg_readPixels_05377f8b6fa1d8eb: rh,
      __wbg_texImage2D_7bc3001cb8602ed2: nv,
      __wbg_navigator_017bc45e84c473cc: x7,
      __wbg_log_d282446d03691e72: z9,
      __wbg_info_a392cd5b7536cfb5: l9,
      __wbg_warn_88c4a5bd9a322000: xS,
      __wbg_debug_7271beced8b71cd4: p5,
      __wbg_error_933f449d72fef598: f8,
      __wbg_error_50f60c611a3dcf64: i8,
      __wbg_addEventListener_ea90bc131475777e: Am,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: I8,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: e9,
      __wbg_set_width_f9e631f4ee129e5c: P$,
      __wbg_set_height_ef298446b359b0c5: Ny,
      __wbg_getContext_70c2d1bed75d4122: M8,
      __wbg_getContext_422b32d0ee4b8076: P8,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: Hm,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: s5,
      __wbg_now_0f628e0e435c541b: R7,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: P5,
      __wbg_offsetX_0214819d43aaf6d5: L7,
      __wbg_offsetY_f18f571e33b385ab: E7,
      __wbg_button_bb3285fcdf965178: s3,
      __wbg_set_signal_4a69430cb12800f3: jx,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: N5,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: e8,
      __wbg_get_37b48b8fa52d1f2c: o9,
      __wbg_aborted_4d4114700dc4c251: $m,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: gS,
      __wbg_altKey_7412dd64f8c921c7: Im,
      __wbg_ctrlKey_00097886a21597a7: u5,
      __wbg_shiftKey_273ee8c901267b55: E$,
      __wbg_metaKey_1c2847b62ad062c1: m7,
      __wbg_repeat_46a5c90df9f6ef0b: sh,
      __wbg_isComposing_e3709163a95a2477: B9,
      __wbg_key_d6b3d2cce3d41872: R9,
      __wbg_code_87bb99fdec02d313: v3,
      __wbg_getModifierState_dae4d71262ea4ecb: O8,
      __wbg_signal_4d9d567be73ea52c: G$,
      __wbg_new_51233fa2a760b272: F7,
      __wbg_abort_6e6ea7d259504afc: xm,
      __wbg_preventDefault_c047d3e292b08cc4: j7,
      __wbg_new_1e52e3c919312525: v7,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: Y5,
      __wbg_observe_592b94857eed8e27: C7,
      __wbg_width_08e66520b99071f4: $S,
      __wbg_height_e9afb506f31052a9: d9,
      __wbg_queryCounterEXT_ebb00bcc96221671: Q7,
      __wbg_contentRect_0fb8c8900d689a0c: R3,
      __wbg_width_a86bcd32bd998060: vS,
      __wbg_height_cd732bbdc7b66e49: u9,
      __wbg_set_width_031bdecd763c5855: T$,
      __wbg_set_height_ad5056ea051acd78: jy,
      __wbg_getContext_486aab500e1c34c9: k8,
      __wbg_getContext_9fd4db9b1cf155db: R8,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: x9,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: v9,
      __wbg_arrayBuffer_ff96d08b7b6be32e: Fm,
      __wbg_status_0053aa6239760447: j$,
      __wbg_ok_c962da6f1a034d81: G7,
      __wbg_statusText_0f412961834ccfe9: q$,
      __wbg_instanceof_Response_79948c98d1d2ba75: S9,
      __wbg_resolve_d82363d90af6928a: gh,
      __wbg_then_591b6b3a75ee817a: Dv,
      __wbg_iterator_cc47ba25a2be735a: M9,
      __wbg_get_9a29be2cb383ed9a: b9,
      __wbg_next_402fa10b59ab20c3: M7,
      __wbg_new_2e117a478906f062: A7,
      __wbg_new_36e147a8ced3c6e0: I7,
      __wbg_of_62183ea089c00bfa: V7,
      __wbg_isArray_145a34fd0a38d37b: T9,
      __wbg_new_e66a4b7758dd2e5c: T7,
      __wbg_isSafeInteger_a3389a198582f5f6: P9,
      __wbg_is_de5b366c746e004c: k9,
      __wbg_entries_c261c3fa1f281256: s8,
      __wbg_then_2a84678a50976959: Fv,
      __wbg_length_589238bdcf171f0e: V9,
      __wbg_prototypesetcall_d721637c7ca66eb8: N7,
      __wbg_set_272b80acaf9a75e8: Dh,
      __wbg_new_81880fb5002cb255: D7,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: P7,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: W$,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: U$,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: z$,
      __wbg_static_accessor_WINDOW_168f178805d978fe: H$,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: m9,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: A9,
      __wbg_queueMicrotask_311744e534a929a3: eh,
      __wbg_queueMicrotask_1c9b3800e321a967: Z7,
      __wbg_set_4564f7dc44fcb0c9: Th,
      __wbg___wbindgen_number_get_1cc01dd708740256: lm,
      __wbg___wbindgen_in_4990f46af709e33c: cm,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: hm,
      __wbg___wbindgen_is_null_6d937fbfb6478470: fm,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: pm,
      __wbg_Number_c4bdf66bb78f7977: _m,
      __wbg_Error_fdd633d4bb5dd76a: em,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: sm,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: um,
      __wbg___wbindgen_is_string_1fca8072260dd261: dm,
      __wbg___wbindgen_string_get_71bb4348194e31f0: mm,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: om,
      __wbg___wbindgen_is_function_acc5528be2b923f2: im,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: gm,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: wm,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: am,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: ym,
      __wbg___wbindgen_debug_string_8a447059637473e2: bm,
      __wbindgen_init_externref_table: qS,
      __wbindgen_cast_0000000000000001: IS,
      __wbindgen_cast_0000000000000002: FS,
      __wbindgen_cast_0000000000000003: DS,
      __wbindgen_cast_0000000000000004: TS,
      __wbindgen_cast_0000000000000005: BS,
      __wbindgen_cast_0000000000000006: PS,
      __wbindgen_cast_0000000000000007: kS,
      __wbindgen_cast_0000000000000008: MS,
      __wbindgen_cast_0000000000000009: RS,
      __wbindgen_cast_000000000000000a: CS,
      __wbindgen_cast_000000000000000b: VS,
      __wbindgen_cast_000000000000000c: LS,
      __wbindgen_cast_000000000000000d: ES,
      __wbindgen_cast_000000000000000e: GS,
      __wbindgen_cast_000000000000000f: OS,
      __wbindgen_cast_0000000000000010: WS,
      __wbindgen_cast_0000000000000011: zS,
      __wbindgen_cast_0000000000000012: US,
      __wbindgen_cast_0000000000000013: HS
    }
  }, N6), { memory: TA, clear: BA, on_frame: PA, show: kA, start: MA, stop_frames: RA, mount: CA, __wbg_proteusapp_free: VA, proteusapp_addChild: LA, proteusapp_animateTo: EA, proteusapp_bakeTexture: GA, proteusapp_bakedImageSize: OA, proteusapp_bakedTextSize: WA, proteusapp_bindKey: zA, proteusapp_channelDestroy: UA, proteusapp_channelSet: HA, proteusapp_clearFocus: qA, proteusapp_clearGlyphCache: jA, proteusapp_component: KA, proteusapp_copyBakedImageFrom: NA, proteusapp_createVideo: JA, proteusapp_cropImage: QA, proteusapp_declareGeometry: XA, proteusapp_declaredGeometry: YA, proteusapp_destroy: ZA, proteusapp_devices: eI, proteusapp_expectFont: _I, proteusapp_focus: tI, proteusapp_focused: rI, proteusapp_fontFailed: nI, proteusapp_freeResources: aI, proteusapp_get: oI, proteusapp_hideVideo: bI, proteusapp_inputDevices: cI, proteusapp_inputMode: sI, proteusapp_isFocused: iI, proteusapp_loadFont: fI, proteusapp_loadTexture: uI, proteusapp_mergeFrom: dI, proteusapp_mergeFromWithBehavior: gI, proteusapp_new: pI, proteusapp_onAppKey: wI, proteusapp_onBlur: lI, proteusapp_onClick: mI, proteusapp_onDrag: hI, proteusapp_onDropped: yI, proteusapp_onFocus: xI, proteusapp_onFocusLost: $I, proteusapp_onHoverEnter: vI, proteusapp_onHoverExit: SI, proteusapp_onKey: AI, proteusapp_onPress: II, proteusapp_onRelease: FI, proteusapp_onTransitionComplete: DI, proteusapp_pointerLeft: TI, proteusapp_pointerMoved: BI, proteusapp_pointerPressed: PI, proteusapp_pointerReleased: kI, proteusapp_releaseVideo: MI, proteusapp_removeChild: RI, proteusapp_resetKeyMap: CI, proteusapp_setDeclaredGeometry: VI, proteusapp_setDefaultFocus: LI, proteusapp_setDevices: EI, proteusapp_setDisabled: GI, proteusapp_setFallbackFonts: OI, proteusapp_setFocusGroup: WI, proteusapp_setImage: zI, proteusapp_setInputDevices: UI, proteusapp_setInteractive: HI, proteusapp_setKeyRepeat: qI, proteusapp_setLongPressMs: jI, proteusapp_setNavigatingActions: KI, proteusapp_setNeighbour: NI, proteusapp_setOpacity: JI, proteusapp_setReadingDirection: QI, proteusapp_setStyle: XI, proteusapp_setStyleTransition: YI, proteusapp_setText: ZI, proteusapp_setTexture: eF, proteusapp_setTransitionInteraction: _F, proteusapp_setVideoCrossfade: tF, proteusapp_setVisible: rF, proteusapp_showVideo: nF, proteusapp_splitTo: aF, proteusapp_splitToWithBehavior: oF, proteusapp_splitToWithStates: bF, proteusapp_texture: cF, proteusapp_textureState: sF, proteusapp_tick: iF, proteusapp_transitionChannel: fF, proteusapp_unbindKey: uF, proteusapp_uploadVideoFrame: dF, __wbg_handle_free: gF, __wbg_texturehandle_free: pF, __wbg_transitionchannel_free: wF, __wbg_videohandle_free: lF, handle_fromId: mF, handle_id: hF, texturehandle_fromId: yF, texturehandle_id: xF, __abort_handler: $F, __instance_terminated: vF, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___f64______true_: SF, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_: AF, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined_______true_: IF, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_: FF, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true_: DF, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__4: TF, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__5: BF, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__6: PF, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke_______true_: kF, __wbindgen_malloc: MF, __wbindgen_realloc: RF, __wbindgen_exn_store: CF, __externref_table_alloc: VF, __wbindgen_externrefs: LF, __wbindgen_free: EF, __wbindgen_destroy_closure: GF, __externref_table_dealloc: OF, __wbindgen_start: Jt } = DA, WF = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: $F,
    __externref_table_alloc: VF,
    __externref_table_dealloc: OF,
    __instance_terminated: vF,
    __wbg_handle_free: gF,
    __wbg_proteusapp_free: VA,
    __wbg_texturehandle_free: pF,
    __wbg_transitionchannel_free: wF,
    __wbg_videohandle_free: lF,
    __wbindgen_destroy_closure: GF,
    __wbindgen_exn_store: CF,
    __wbindgen_externrefs: LF,
    __wbindgen_free: EF,
    __wbindgen_malloc: MF,
    __wbindgen_realloc: RF,
    __wbindgen_start: Jt,
    clear: BA,
    handle_fromId: mF,
    handle_id: hF,
    memory: TA,
    mount: CA,
    on_frame: PA,
    proteusapp_addChild: LA,
    proteusapp_animateTo: EA,
    proteusapp_bakeTexture: GA,
    proteusapp_bakedImageSize: OA,
    proteusapp_bakedTextSize: WA,
    proteusapp_bindKey: zA,
    proteusapp_channelDestroy: UA,
    proteusapp_channelSet: HA,
    proteusapp_clearFocus: qA,
    proteusapp_clearGlyphCache: jA,
    proteusapp_component: KA,
    proteusapp_copyBakedImageFrom: NA,
    proteusapp_createVideo: JA,
    proteusapp_cropImage: QA,
    proteusapp_declareGeometry: XA,
    proteusapp_declaredGeometry: YA,
    proteusapp_destroy: ZA,
    proteusapp_devices: eI,
    proteusapp_expectFont: _I,
    proteusapp_focus: tI,
    proteusapp_focused: rI,
    proteusapp_fontFailed: nI,
    proteusapp_freeResources: aI,
    proteusapp_get: oI,
    proteusapp_hideVideo: bI,
    proteusapp_inputDevices: cI,
    proteusapp_inputMode: sI,
    proteusapp_isFocused: iI,
    proteusapp_loadFont: fI,
    proteusapp_loadTexture: uI,
    proteusapp_mergeFrom: dI,
    proteusapp_mergeFromWithBehavior: gI,
    proteusapp_new: pI,
    proteusapp_onAppKey: wI,
    proteusapp_onBlur: lI,
    proteusapp_onClick: mI,
    proteusapp_onDrag: hI,
    proteusapp_onDropped: yI,
    proteusapp_onFocus: xI,
    proteusapp_onFocusLost: $I,
    proteusapp_onHoverEnter: vI,
    proteusapp_onHoverExit: SI,
    proteusapp_onKey: AI,
    proteusapp_onPress: II,
    proteusapp_onRelease: FI,
    proteusapp_onTransitionComplete: DI,
    proteusapp_pointerLeft: TI,
    proteusapp_pointerMoved: BI,
    proteusapp_pointerPressed: PI,
    proteusapp_pointerReleased: kI,
    proteusapp_releaseVideo: MI,
    proteusapp_removeChild: RI,
    proteusapp_resetKeyMap: CI,
    proteusapp_setDeclaredGeometry: VI,
    proteusapp_setDefaultFocus: LI,
    proteusapp_setDevices: EI,
    proteusapp_setDisabled: GI,
    proteusapp_setFallbackFonts: OI,
    proteusapp_setFocusGroup: WI,
    proteusapp_setImage: zI,
    proteusapp_setInputDevices: UI,
    proteusapp_setInteractive: HI,
    proteusapp_setKeyRepeat: qI,
    proteusapp_setLongPressMs: jI,
    proteusapp_setNavigatingActions: KI,
    proteusapp_setNeighbour: NI,
    proteusapp_setOpacity: JI,
    proteusapp_setReadingDirection: QI,
    proteusapp_setStyle: XI,
    proteusapp_setStyleTransition: YI,
    proteusapp_setText: ZI,
    proteusapp_setTexture: eF,
    proteusapp_setTransitionInteraction: _F,
    proteusapp_setVideoCrossfade: tF,
    proteusapp_setVisible: rF,
    proteusapp_showVideo: nF,
    proteusapp_splitTo: aF,
    proteusapp_splitToWithBehavior: oF,
    proteusapp_splitToWithStates: bF,
    proteusapp_texture: cF,
    proteusapp_textureState: sF,
    proteusapp_tick: iF,
    proteusapp_transitionChannel: fF,
    proteusapp_unbindKey: uF,
    proteusapp_uploadVideoFrame: dF,
    show: kA,
    start: MA,
    stop_frames: RA,
    texturehandle_fromId: yF,
    texturehandle_id: xF,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke_______true_: kF,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___f64______true_: SF,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true_: DF,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__4: TF,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__5: BF,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__6: PF,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined_______true_: IF,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_: FF,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_: AF
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  FA(WF);
  Jt();
  const re = 1280, ne = 800, K = {
    large: {
      min: 20,
      max: 200,
      radius: 8
    },
    small: {
      min: 4,
      max: 8,
      radius: 2
    },
    moving: {
      min: 10,
      max: 40,
      radius: 4
    }
  };
  const _Be = class _Be {
    constructor() {
      this.state = 0x9e3779b97f4a7c15n;
    }
    next() {
      let e = this.state;
      return e ^= e << 13n & _Be.MASK, e ^= e >> 7n, e ^= e << 17n & _Be.MASK, this.state = e, Number(e >> 40n) / 2 ** 24;
    }
    between(e, t) {
      return e + (t - e) * this.next();
    }
  };
  _Be.MASK = (1n << 64n) - 1n;
  let Be = _Be;
  function rt(_, e) {
    const { min: t, max: r } = K[_], n = new Be();
    return Array.from({
      length: e
    }, () => {
      const a = n.between(t, r), o = n.between(t, r);
      return {
        x: n.between(0, re),
        y: n.between(0, ne),
        width: a,
        height: o,
        r: n.next(),
        g: n.next(),
        b: n.next()
      };
    });
  }
  const zF = `#version 300 es
precision highp float;
in vec2 v_local;
in vec2 v_half;
in vec3 v_color;
uniform float u_radius;
out vec4 out_color;
void main() {
  // Signed distance to a rounded rectangle, smoothed over one pixel.
  vec2 q = abs(v_local) - v_half + u_radius;
  float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - u_radius;
  float alpha = clamp(0.5 - d, 0.0, 1.0);
  out_color = vec4(v_color * alpha, alpha);
}`, UF = `#version 300 es
in vec2 a_corner;
uniform vec4 u_rect;   // center x, center y, width, height, in CSS pixels
uniform vec3 u_color;
uniform vec2 u_viewport;
out vec2 v_local;
out vec2 v_half;
out vec3 v_color;
void main() {
  v_half = u_rect.zw * 0.5;
  v_local = a_corner * v_half;
  v_color = u_color;
  vec2 pixel = u_rect.xy + v_local;
  gl_Position = vec4(pixel / u_viewport * vec2(2.0, -2.0) + vec2(-1.0, 1.0), 0.0, 1.0);
}`, HF = `#version 300 es
in vec2 a_corner;
in vec4 a_rect;
in vec3 a_color;
uniform vec2 u_viewport;
out vec2 v_local;
out vec2 v_half;
out vec3 v_color;
void main() {
  v_half = a_rect.zw * 0.5;
  v_local = a_corner * v_half;
  v_color = a_color;
  vec2 pixel = a_rect.xy + v_local;
  gl_Position = vec4(pixel / u_viewport * vec2(2.0, -2.0) + vec2(-1.0, 1.0), 0.0, 1.0);
}`;
  function Qt(_, e) {
    const t = (n, a) => {
      const o = _.createShader(n);
      if (_.shaderSource(o, a), _.compileShader(o), !_.getShaderParameter(o, _.COMPILE_STATUS)) throw new Error(_.getShaderInfoLog(o) ?? "shader failed to compile");
      return o;
    }, r = _.createProgram();
    if (_.attachShader(r, t(_.VERTEX_SHADER, e)), _.attachShader(r, t(_.FRAGMENT_SHADER, zF)), _.linkProgram(r), !_.getProgramParameter(r, _.LINK_STATUS)) throw new Error(_.getProgramInfoLog(r) ?? "program failed to link");
    return r;
  }
  function Xt(_) {
    const e = _.createBuffer();
    return _.bindBuffer(_.ARRAY_BUFFER, e), _.bufferData(_.ARRAY_BUFFER, new Float32Array([
      -1,
      -1,
      1,
      -1,
      -1,
      1,
      1,
      1
    ]), _.STATIC_DRAW), e;
  }
  function Yt(_) {
    _.viewport(0, 0, _.drawingBufferWidth, _.drawingBufferHeight), _.clearColor(0, 0, 0, 1), _.clear(_.COLOR_BUFFER_BIT), _.enable(_.BLEND), _.blendFunc(_.ONE, _.ONE_MINUS_SRC_ALPHA);
  }
  function qF(_) {
    return (e, t, r) => {
      const n = Qt(_, UF), a = Xt(_), o = _.createVertexArray();
      _.bindVertexArray(o);
      const b = _.getAttribLocation(n, "a_corner");
      _.enableVertexAttribArray(b), _.vertexAttribPointer(b, 2, _.FLOAT, false, 0, 0);
      const c = _.getUniformLocation(n, "u_rect"), u = _.getUniformLocation(n, "u_color");
      return {
        draw() {
          Yt(_), _.useProgram(n), _.bindVertexArray(o), _.uniform2f(_.getUniformLocation(n, "u_viewport"), re, ne), _.uniform1f(_.getUniformLocation(n, "u_radius"), r), e.forEach((d, T) => {
            _.uniform4f(c, t[T * 2], t[T * 2 + 1], d.width, d.height), _.uniform3f(u, d.r, d.g, d.b), _.drawArrays(_.TRIANGLE_STRIP, 0, 4);
          });
        },
        dispose() {
          _.deleteProgram(n), _.deleteBuffer(a), _.deleteVertexArray(o);
        }
      };
    };
  }
  function jF(_) {
    return (e, t, r) => {
      const n = Qt(_, HF), a = Xt(_), o = _.createVertexArray();
      _.bindVertexArray(o);
      const b = _.getAttribLocation(n, "a_corner");
      _.enableVertexAttribArray(b), _.vertexAttribPointer(b, 2, _.FLOAT, false, 0, 0);
      const c = new Float32Array(e.length * 7), u = _.createBuffer();
      _.bindBuffer(_.ARRAY_BUFFER, u), _.bufferData(_.ARRAY_BUFFER, c.byteLength, _.DYNAMIC_DRAW);
      const d = _.getAttribLocation(n, "a_rect"), T = _.getAttribLocation(n, "a_color");
      return _.enableVertexAttribArray(d), _.vertexAttribPointer(d, 4, _.FLOAT, false, 28, 0), _.vertexAttribDivisor(d, 1), _.enableVertexAttribArray(T), _.vertexAttribPointer(T, 3, _.FLOAT, false, 28, 16), _.vertexAttribDivisor(T, 1), {
        draw() {
          e.forEach((J, g_) => {
            const ae = g_ * 7;
            c[ae] = t[g_ * 2], c[ae + 1] = t[g_ * 2 + 1], c[ae + 2] = J.width, c[ae + 3] = J.height, c[ae + 4] = J.r, c[ae + 5] = J.g, c[ae + 6] = J.b;
          }), Yt(_), _.useProgram(n), _.bindVertexArray(o), _.bindBuffer(_.ARRAY_BUFFER, u), _.bufferSubData(_.ARRAY_BUFFER, 0, c), _.uniform2f(_.getUniformLocation(n, "u_viewport"), re, ne), _.uniform1f(_.getUniformLocation(n, "u_radius"), r), _.drawArraysInstanced(_.TRIANGLE_STRIP, 0, 4, e.length);
        },
        dispose() {
          _.deleteProgram(n), _.deleteBuffer(a), _.deleteBuffer(u), _.deleteVertexArray(o);
        }
      };
    };
  }
  function KF(_) {
    return (e, t, r) => {
      const n = e.map((a) => `rgb(${Math.round(a.r * 255)} ${Math.round(a.g * 255)} ${Math.round(a.b * 255)})`);
      return {
        draw() {
          _.fillStyle = "black", _.fillRect(0, 0, re, ne), e.forEach((a, o) => {
            _.fillStyle = n[o], _.beginPath(), _.roundRect(t[o * 2] - a.width / 2, t[o * 2 + 1] - a.height / 2, a.width, a.height, r), _.fill();
          });
        },
        dispose() {
        }
      };
    };
  }
  const C_ = 500;
  function NF(_) {
    return _ < 0.5 ? 2 * _ * _ : 1 - (-2 * _ + 2) ** 2 / 2;
  }
  const JF = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
  class nt {
    constructor(e) {
      this.random = new Be(), this.movedAt = -1 / 0, this.current = new Float32Array(e.flatMap((t) => [
        t.x,
        t.y
      ])), this.from = this.current.slice(), this.to = this.current.slice();
    }
    retarget(e) {
      if (!(e - this.movedAt < C_)) {
        this.movedAt = e, this.from.set(this.current);
        for (let t = 0; t < this.to.length; t += 2) this.to[t] = this.random.between(0, re), this.to[t + 1] = this.random.between(0, ne);
        return this.to;
      }
    }
    advance(e) {
      const t = NF(Math.min(1, (e - this.movedAt) / C_));
      for (let r = 0; r < this.current.length; r++) this.current[r] = this.from[r] + (this.to[r] - this.from[r]) * t;
    }
  }
  function QF(_, e, t) {
    const r = new nt(e), n = document.createDocumentFragment(), a = e.map((o, b) => {
      const c = document.createElement("div"), u = c.style;
      return u.position = "absolute", u.left = "0", u.top = "0", u.width = `${o.width}px`, u.height = `${o.height}px`, u.borderRadius = `${t}px`, u.background = `rgb(${Math.round(o.r * 255)} ${Math.round(o.g * 255)} ${Math.round(o.b * 255)})`, u.transform = Tt(r.current[b * 2], r.current[b * 2 + 1], o), u.transition = `transform ${C_}ms ${JF}`, n.append(c), c;
    });
    return _.append(n), {
      frame(o) {
        const b = r.retarget(o);
        b && a.forEach((c, u) => {
          c.style.transform = Tt(b[u * 2], b[u * 2 + 1], e[u]);
        });
      },
      dispose() {
        _.replaceChildren();
      }
    };
  }
  function Tt(_, e, t) {
    return `translate(${_ - t.width / 2}px, ${e - t.height / 2}px)`;
  }
  const XF = [
    100,
    1e3,
    5e3,
    1e4,
    25e3,
    5e4,
    1e5
  ], YF = 60, ZF = 2e3, V_ = 1e5, Bt = 100, at = `proteus-bench:${location.pathname}`, eD = 300, _D = 15e3, s_ = document.getElementById("status"), Zt = document.getElementById("results"), ye = document.getElementById("run"), f_ = document.getElementById("reset"), xe = {
    proteus: document.getElementById("proteus"),
    proteusRust: document.getElementById("proteus-rust"),
    webgl: document.getElementById("webgl"),
    canvas2d: document.getElementById("canvas2d"),
    css: document.getElementById("css")
  }, er = new URLSearchParams(location.search), De = ((_a2 = er.get("counts")) == null ? void 0 : _a2.split(",").map(Number).filter((_) => _ > 0)) ?? XF, ot = (((_b2 = er.get("scenes")) == null ? void 0 : _b2.split(",")) ?? [
    "small",
    "large",
    "moving"
  ]).filter((_) => _ in K);
  let _r = "unknown";
  for (const _ of [
    "log",
    "info"
  ]) {
    const e = console[_].bind(console);
    console[_] = (...t) => {
      var _a3;
      const n = String(t[0] ?? "").replace(/%c/g, "").match(/proteus-host-web: adapter (.*)/);
      if (n) {
        const a = ((_a3 = n[1].match(/\((\w+)\)\s*$/)) == null ? void 0 : _a3[1]) ?? "", o = n[1].replace(/\(\w+\)\s*$/, "").trim();
        _r = `${/WebGpu/i.test(a) ? "WebGPU" : /Gl/i.test(a) ? "WebGL2" : a}${o ? `, ${o}` : " (the browser doesn't name the GPU)"}`;
      }
      e(...t);
    };
  }
  function tD(_) {
    const e = [
      ..._
    ].sort((r, n) => r - n), t = (r) => e[Math.round((e.length - 1) * r)];
    return {
      median: t(0.5),
      p99: t(0.99),
      frames: e.length
    };
  }
  function ke(_) {
    return new Promise((e) => {
      const t = [];
      let r = 0, n = 0, a = 0, o = 0, b = false;
      const c = _((u) => {
        if (r += 1, r === 1 && (o = u), !b && (r >= YF || u - o > ZF)) {
          b = true, a = u, n = u;
          return;
        }
        b && t.push(u - n), n = u, b && (t.length >= eD || u - a > _D) && (c(), e(tD(t)));
      });
    });
  }
  function bt(_) {
    return (e) => {
      let t = true;
      const r = (n) => {
        t && (_(n), e(n), requestAnimationFrame(r));
      };
      return requestAnimationFrame(r), () => {
        t = false;
      };
    };
  }
  const tr = Math.max(4096, 2 ** Math.ceil(Math.log2(Math.max(...De))));
  let rr, L_;
  await U6("proteus", {
    setup(_) {
      rr = _;
    },
    update() {
      L_ == null ? void 0 : L_(performance.now());
    },
    config: {
      render: {
        clearColor: [
          0,
          0,
          0,
          1
        ]
      },
      memory: {
        maxInstances: tr
      },
      frame: {
        skipIdleFrames: false
      }
    }
  });
  await Y6("proteus-rust", tr);
  async function rD(_, e) {
    X6(_, e);
    const t = await ke((r) => (Q6(r), () => Z6()));
    return J6(), t;
  }
  async function nD(_, e) {
    const t = rr, r = rt(_, e), n = (c, u, d) => ({
      position: {
        x: c - re / 2,
        y: ne / 2 - u,
        z: 0
      },
      size: {
        width: r[d].width,
        height: r[d].height
      },
      rotation: 0,
      scale: 1,
      anchor: {
        x: 0.5,
        y: 0.5
      },
      color: {
        r: r[d].r,
        g: r[d].g,
        b: r[d].b,
        a: 1
      },
      cornerRadius: K[_].radius
    }), a = r.map((c, u) => t.component({
      geometry: n(c.x, c.y, u)
    })), o = _ === "moving" ? new nt(r) : void 0, b = await ke((c) => (L_ = (u) => {
      const d = o == null ? void 0 : o.retarget(u);
      d && a.forEach((T, J) => T.animateTo(n(d[J * 2], d[J * 2 + 1], J), {
        duration: 0.5,
        easing: "easeInOutQuad"
      })), c(u);
    }, () => {
      L_ = void 0;
    }));
    for (const c of a) c.destroy();
    return b;
  }
  const Pe = window.devicePixelRatio;
  for (const _ of [
    xe.webgl,
    xe.canvas2d
  ]) _.width = re * Pe, _.height = ne * Pe;
  const we = xe.webgl.getContext("webgl2", {
    antialias: false
  }), nr = xe.canvas2d.getContext("2d");
  nr.scale(Pe, Pe);
  async function ct(_, e, t) {
    const r = rt(e, t), n = new nt(r), a = _(r, n.current, K[e].radius), o = await ke(bt((b) => {
      e === "moving" && (n.retarget(b), n.advance(b)), a.draw();
    }));
    return a.dispose(), o;
  }
  async function aD(_) {
    const e = QF(xe.css, rt("moving", _), K.moving.radius), t = await ke(bt((r) => e.frame(r)));
    return e.dispose(), t;
  }
  function Pt(_) {
    for (const [e, t] of Object.entries(xe)) t.style.visibility = e === _ ? "visible" : "hidden";
  }
  const x_ = {
    title: "Proteus (TypeScript)",
    surface: "proteus",
    time: nD
  }, $_ = {
    title: "Proteus (Rust)",
    surface: "proteusRust",
    time: rD
  }, oD = {
    title: "CSS",
    surface: "css",
    time: (_, e) => aD(e)
  }, v_ = {
    title: "Canvas 2D",
    surface: "canvas2d",
    time: (_, e) => ct(KF(nr), _, e)
  }, S_ = {
    title: "Naive WebGL2",
    surface: "webgl",
    time: (_, e) => ct(qF(we), _, e)
  }, A_ = {
    title: "Batched WebGL2",
    surface: "webgl",
    time: (_, e) => ct(jF(we), _, e)
  }, ar = {
    small: [
      x_,
      $_,
      v_,
      S_,
      A_
    ],
    large: [
      x_,
      $_,
      v_,
      S_,
      A_
    ],
    moving: [
      x_,
      $_,
      oD,
      v_,
      S_,
      A_
    ]
  }, E_ = {
    small: 1 / 0,
    large: V_,
    moving: 1 / 0
  }, bD = {
    small: `Small components (${K.small.min}\u2013${K.small.max} px), still: the cost per component`,
    large: `Large components (${K.large.min}\u2013${K.large.max} px), still: filling pixels dominates`,
    moving: `Moving components (${K.moving.min}\u2013${K.moving.max} px): every one always moving`
  };
  function cD(_) {
    const e = we.getExtension("WEBGL_debug_renderer_info"), t = e ? we.getParameter(e.UNMASKED_RENDERER_WEBGL) : we.getParameter(we.RENDERER);
    return [
      `- Browser: ${navigator.userAgent}`,
      `- GPU: ${t}`,
      `- Proteus's adapter: ${_r}`,
      `- Device pixel ratio: ${Pe}; canvas ${re} \xD7 ${ne} CSS pixels`,
      `- Refresh rate: about ${(1e3 / _).toFixed(0)} Hz (a frame every ${_.toFixed(2)} ms)`
    ].join(`
`);
  }
  function sD() {
    const _ = {
      settings: location.search,
      cells: {},
      dropped: {}
    };
    try {
      const e = JSON.parse(localStorage.getItem(at) ?? "null");
      return e && e.settings === location.search ? e : _;
    } catch {
      return _;
    }
  }
  function i_() {
    try {
      localStorage.setItem(at, JSON.stringify(L));
    } catch {
    }
  }
  const L = sD();
  if (L.running) {
    const [_, e, t] = L.running.split("|");
    L.cells[L.running] = "crashed | \u2014", L.dropped[`${_}|${t}`] = `crashed at ${e}`, L.running = void 0, i_();
  }
  const iD = (_) => `${_.median.toFixed(2)} | ${_.p99.toFixed(2)}`;
  function or(_) {
    return De.filter((e) => e <= E_[_]).flatMap((e) => ar[_].map((t) => [
      e,
      t
    ])).filter(([e, t]) => L.cells[`${_}|${e}|${t.title}`] === void 0);
  }
  async function fD() {
    ye.disabled = true, f_.disabled = true, L.refresh === void 0 && (Pt("webgl"), s_.textContent = "Measuring the refresh rate\u2026", L.refresh = (await ke(bt(() => {
    }))).median, i_());
    for (const _ of ot) for (const [e, t] of or(_)) {
      const r = `${_}|${e}|${t.title}`;
      if (L.dropped[`${_}|${t.title}`]) {
        L.cells[r] = "skipped | \u2014";
        continue;
      }
      Pt(t.surface), s_.textContent = `${_} scene, ${e} components: ${t.title}\u2026`, L.running = r, i_();
      try {
        const a = await t.time(_, e);
        L.cells[r] = iD(a), a.median >= Bt && (L.dropped[`${_}|${t.title}`] = `slower than ${Bt} ms a frame at ${e}`);
      } catch (a) {
        console.error(a), L.cells[r] = "failed | \u2014", L.dropped[`${_}|${t.title}`] = `failed at ${e}: ${String(a)}`;
      }
      L.running = void 0, i_(), Zt.textContent = br();
    }
    s_.textContent = "Done. Copy the results below.", ye.textContent = "Run", ye.disabled = false, f_.disabled = false;
  }
  function br() {
    const _ = [
      cD(L.refresh ?? 0)
    ];
    for (const e of ot) {
      const t = ar[e].map((a) => a.title), r = De.filter((a) => a <= E_[e]).map((a) => t.map((o) => L.cells[`${e}|${a}|${o}`])).map((a, o) => ({
        count: De.filter((b) => b <= E_[e])[o],
        cells: a
      })).filter(({ cells: a }) => a.some((o) => o !== void 0));
      if (r.length === 0) continue;
      _.push("", `### ${bD[e]}`, "", "Frame interval, median and p99, in milliseconds:", "", `| Components | ${t.map((a) => `${a} | p99`).join(" | ")} |`, `|---:|${t.map(() => "---:|---:").join("|")}|`, ...r.map(({ count: a, cells: o }) => `| ${a} | ${o.map((b) => b ?? "\u2026 | \u2026").join(" | ")} |`));
      const n = t.map((a) => [
        a,
        L.dropped[`${e}|${a}`]
      ]).filter(([, a]) => a).map(([a, o]) => `- ${a}: ${o}; skipped after that.`);
      n.length > 0 && _.push("", ...n), e === "large" && De.some((a) => a > V_) && _.push("", `The large scene stops at ${V_}: past it, Safari's tab crashes.`);
    }
    return _.join(`
`);
  }
  ye.addEventListener("click", () => void fD());
  f_.addEventListener("click", () => {
    try {
      localStorage.removeItem(at);
    } catch {
    }
    location.reload();
  });
  const Me = Object.keys(L.cells).length > 0, st = ot.some((_) => or(_).length > 0);
  Me && (Zt.textContent = br());
  ye.textContent = Me && st ? "Resume" : "Run";
  s_.textContent = Me ? st ? "A run was under way, and is saved: Resume carries on from where it stopped." : "The last run is complete; its results are below. Start over to run again." : "Ready. Keep this tab in front while it runs: a hidden tab stops drawing.";
  ye.disabled = Me && !st;
  f_.disabled = !Me;
})();
