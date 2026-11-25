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
  const ir = "" + new URL("proteus_sdk_web_bg-BuXJ2gN0.wasm", import.meta.url).href, G_ = async (_ = {}, e) => {
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
      if (r[1]) throw A(r[0]);
    }
    animateTo(e, t, r) {
      g(e, h);
      const n = f.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw A(n[0]);
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
      if (a[1]) throw A(a[0]);
    }
    channelDestroy(e) {
      g(e, ue);
      var t = e.__destroy_into_raw();
      f.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      g(e, ue), g(t, h), g(r, h);
      const o = f.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (o[1]) throw A(o[0]);
    }
    clearFocus() {
      f.proteusapp_clearFocus(this.__wbg_ptr);
    }
    clearGlyphCache() {
      f.proteusapp_clearGlyphCache(this.__wbg_ptr);
    }
    component(e) {
      const t = f.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw A(t[1]);
      return h.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      g(e, h), g(t, h);
      const r = f.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw A(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = f.proteusapp_createVideo(this.__wbg_ptr);
      return de.__wrap(e);
    }
    cropImage(e, t) {
      g(e, h);
      const r = f.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw A(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      g(e, h);
      const r = f.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw A(r[0]);
    }
    declaredGeometry(e) {
      return g(e, h), f.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      g(e, h);
      var t = e.__destroy_into_raw();
      const r = f.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw A(r[0]);
    }
    devices(e) {
      return g(e, h), f.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    expectFont(e, t) {
      const r = j(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = V, a = j(t, f.__wbindgen_malloc, f.__wbindgen_realloc), o = V, b = f.proteusapp_expectFont(this.__wbg_ptr, r, n, a, o);
      if (b[1]) throw A(b[0]);
    }
    focus(e) {
      g(e, h);
      const t = f.proteusapp_focus(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw A(t[0]);
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
      if (t[1]) throw A(t[0]);
    }
    get(e) {
      return g(e, h), f.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      g(e, h);
      const t = f.proteusapp_hideVideo(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw A(t[0]);
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
        if (c[3]) throw n = 0, a = 0, A(c[2]);
        return t = n, r = a, U(n, a);
      } finally {
        f.__wbindgen_free(t, r, 1);
      }
    }
    loadTexture(e, t) {
      const r = Le(e, f.__wbindgen_malloc), n = V, a = f.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : Q.__wrap(a);
    }
    measureText(e) {
      const t = f.proteusapp_measureText(this.__wbg_ptr, e);
      if (t[2]) throw A(t[1]);
      return A(t[0]);
    }
    mergeFrom(e, t, r, n) {
      g(e, h);
      const a = Ee(t, f.__wbindgen_malloc), o = V, b = f.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (b[1]) throw A(b[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      g(e, h);
      const o = Ee(t, f.__wbindgen_malloc), b = V, c = f.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, b, r, n, a);
      if (c[1]) throw A(c[0]);
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
      if (r[1]) throw A(r[0]);
    }
    resetKeyMap() {
      f.proteusapp_resetKeyMap(this.__wbg_ptr);
    }
    setDeclaredGeometry(e, t) {
      g(e, h);
      const r = f.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw A(r[0]);
    }
    setDefaultFocus(e, t) {
      g(e, h);
      const r = f.proteusapp_setDefaultFocus(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw A(r[0]);
    }
    setDevices(e, t) {
      g(e, h);
      const r = f.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw A(r[0]);
    }
    setDisabled(e, t) {
      g(e, h);
      const r = f.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw A(r[0]);
    }
    setFallbackFonts(e) {
      const t = wt(e, f.__wbindgen_malloc), r = V;
      f.proteusapp_setFallbackFonts(this.__wbg_ptr, t, r);
    }
    setFocusGroup(e, t) {
      g(e, h);
      const r = f.proteusapp_setFocusGroup(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw A(r[0]);
    }
    setImage(e, t) {
      g(e, h);
      const r = f.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw A(r[0]);
    }
    setInputDevices(e) {
      const t = f.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw A(t[0]);
    }
    setInteractive(e, t) {
      g(e, h);
      const r = f.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw A(r[0]);
    }
    setKeyRepeat(e) {
      const t = f.proteusapp_setKeyRepeat(this.__wbg_ptr, e);
      if (t[1]) throw A(t[0]);
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
      if (o[1]) throw A(o[0]);
    }
    setOpacity(e, t) {
      g(e, h);
      const r = f.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw A(r[0]);
    }
    setReadingDirection(e) {
      const t = j(e, f.__wbindgen_malloc, f.__wbindgen_realloc), r = V, n = f.proteusapp_setReadingDirection(this.__wbg_ptr, t, r);
      if (n[1]) throw A(n[0]);
    }
    setStyle(e, t, r) {
      g(e, h);
      const n = j(t, f.__wbindgen_malloc, f.__wbindgen_realloc), a = V, o = f.proteusapp_setStyle(this.__wbg_ptr, e.__wbg_ptr, n, a, r);
      if (o[1]) throw A(o[0]);
    }
    setStyleTransition(e, t) {
      g(e, h);
      const r = f.proteusapp_setStyleTransition(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw A(r[0]);
    }
    setText(e, t) {
      g(e, h);
      const r = f.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw A(r[0]);
    }
    setTexture(e, t) {
      g(e, h), g(t, Q);
      const r = f.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw A(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      g(e, h);
      const r = f.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw A(r[0]);
    }
    setVideoCrossfade(e, t) {
      g(e, h);
      const r = f.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw A(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      g(e, h);
      const r = f.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw A(r[0]);
    }
    showVideo(e, t) {
      g(e, h), g(t, de);
      const r = f.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw A(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      g(e, h);
      const a = Ee(t, f.__wbindgen_malloc), o = V, b = f.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (b[1]) throw A(b[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      g(e, h);
      const o = Ee(t, f.__wbindgen_malloc), b = V, c = f.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, b, r, n, a);
      if (c[1]) throw A(c[0]);
    }
    splitToWithStates(e, t, r, n) {
      g(e, h);
      const a = f.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw A(a[0]);
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
      if (t[3]) throw A(t[2]);
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
  let Q = class T_ {
    static __wrap(e) {
      const t = Object.create(T_.prototype);
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
      return T_.__wrap(t);
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
  function fr(_, e) {
    return Error(U(_, e));
  }
  function ur(_) {
    return Number(_);
  }
  function dr(_, e) {
    const t = String(e), r = j(t, f.__wbindgen_malloc, f.__wbindgen_realloc), n = V;
    H().setInt32(_ + 4, n, true), H().setInt32(_ + 0, r, true);
  }
  function gr(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    H().setBigInt64(_ + 8, z(r) ? BigInt(0) : r, true), H().setInt32(_ + 0, !z(r), true);
  }
  function pr(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return z(t) ? 16777215 : t ? 1 : 0;
  }
  function wr(_, e) {
    const t = D_(e), r = j(t, f.__wbindgen_malloc, f.__wbindgen_realloc), n = V;
    H().setInt32(_ + 4, n, true), H().setInt32(_ + 0, r, true);
  }
  function lr(_, e) {
    return _ in e;
  }
  function mr(_) {
    return typeof _ == "bigint";
  }
  function hr(_) {
    return typeof _ == "function";
  }
  function yr(_) {
    return _ === null;
  }
  function xr(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function $r(_) {
    return typeof _ == "string";
  }
  function vr(_) {
    return _ === void 0;
  }
  function Sr(_, e) {
    return _ === e;
  }
  function Ar(_, e) {
    return _ == e;
  }
  function Ir(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    H().setFloat64(_ + 8, z(r) ? 0 : r, true), H().setInt32(_ + 0, !z(r), true);
  }
  function Fr(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = z(r) ? 0 : j(r, f.__wbindgen_malloc, f.__wbindgen_realloc), a = V;
    H().setInt32(_ + 4, a, true), H().setInt32(_ + 0, n, true);
  }
  function Tr(_, e) {
    throw new Error(U(_, e));
  }
  function Dr(_) {
    _._wbg_cb_unref();
  }
  function Br() {
    return q(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Pr() {
    return q(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function kr() {
    return q(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Mr() {
    return q(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function Rr() {
    return q(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function Cr(_, e) {
    return _.createBindGroup(e);
  }
  function Vr(_, e) {
    return _.createCommandEncoder(e);
  }
  function Lr() {
    return q(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function Er() {
    return q(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function Gr(_) {
    _.destroy();
  }
  function Or(_) {
    return _.done;
  }
  function Wr(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function zr(_) {
    _.end();
  }
  function Ur(_) {
    return Object.entries(_);
  }
  function Hr(_) {
    return _.finish();
  }
  function qr(_, e) {
    return _.finish(e);
  }
  function jr() {
    return q(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function Kr(_, e) {
    return _[e >>> 0];
  }
  function Nr() {
    return q(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function Jr(_, e) {
    return _[e >>> 0];
  }
  function Qr(_, e) {
    return _[e];
  }
  function Xr(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function Yr(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function Zr(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function en(_) {
    return Array.isArray(_);
  }
  function _n(_) {
    return Number.isSafeInteger(_);
  }
  function tn() {
    return Symbol.iterator;
  }
  function rn(_, e) {
    const t = e.label, r = j(t, f.__wbindgen_malloc, f.__wbindgen_realloc), n = V;
    H().setInt32(_ + 4, n, true), H().setInt32(_ + 0, r, true);
  }
  function nn(_) {
    return _.length;
  }
  function an(_) {
    return _.length;
  }
  function on(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function bn() {
    return new Object();
  }
  function cn() {
    return new Array();
  }
  function sn(_) {
    return new Uint8Array(_);
  }
  function fn(_, e) {
    return new Error(U(_, e));
  }
  function un(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function dn() {
    return q(function(_) {
      return _.next();
    }, arguments);
  }
  function gn(_) {
    return _.next;
  }
  function pn(_) {
    return _.onSubmittedWorkDone();
  }
  function wn(_, e, t) {
    Uint8Array.prototype.set.call(z_(_, e), t);
  }
  function ln(_, e) {
    return _.push(e);
  }
  function mn(_) {
    return _.queueMicrotask;
  }
  function hn(_) {
    queueMicrotask(_);
  }
  function yn(_) {
    return Promise.resolve(_);
  }
  function xn() {
    return q(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, fo(r, n), a, o >>> 0);
    }, arguments);
  }
  function $n(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function vn(_, e, t, r, n) {
    _.setIndexBuffer(e, Rt[t], r, n);
  }
  function Sn(_, e, t, r) {
    _.setIndexBuffer(e, Rt[t], r);
  }
  function An(_, e) {
    _.setPipeline(e);
  }
  function In(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function Fn(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function Tn(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
  }
  function Dn(_, e, t) {
    _[e] = t;
  }
  function Bn(_, e) {
    _.a = e;
  }
  function Pn(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function kn(_, e) {
    _.aspect = Ct[e];
  }
  function Mn(_, e) {
    _.aspect = Ct[e];
  }
  function Rn(_, e) {
    _.b = e;
  }
  function Cn(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function Vn(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function Ln(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function En(_, e) {
    _.binding = e >>> 0;
  }
  function Gn(_, e) {
    _.buffer = e;
  }
  function On(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function Wn(_, e) {
    _.clearValue = e;
  }
  function zn(_, e) {
    _.colorAttachments = e;
  }
  function Un(_, e, t) {
    _[e >>> 0] = t;
  }
  function Hn(_, e) {
    _.depthClearValue = e;
  }
  function qn(_, e) {
    _.depthLoadOp = O_[e];
  }
  function jn(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function Kn(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function Nn(_, e) {
    _.depthStencilAttachment = e;
  }
  function Jn(_, e) {
    _.depthStoreOp = W_[e];
  }
  function Qn(_, e) {
    _.dimension = io[e];
  }
  function Xn(_, e) {
    _.dimension = so[e];
  }
  function Yn(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function Zn(_, e) {
    _.entries = e;
  }
  function ea(_, e) {
    _.format = Vt[e];
  }
  function _a(_, e) {
    _.format = Vt[e];
  }
  function ta(_, e) {
    _.g = e;
  }
  function ra(_, e) {
    _.height = e >>> 0;
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
  function ca(_, e, t) {
    _.label = U(e, t);
  }
  function sa(_, e, t) {
    _.label = U(e, t);
  }
  function ia(_, e) {
    _.layout = e;
  }
  function fa(_, e) {
    _.loadOp = O_[e];
  }
  function ua(_, e) {
    _.mipLevel = e >>> 0;
  }
  function da(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function ga(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function pa(_, e) {
    _.offset = e;
  }
  function wa(_, e) {
    _.offset = e;
  }
  function la(_, e) {
    _.origin = e;
  }
  function ma(_, e) {
    _.querySet = e;
  }
  function ha(_, e) {
    _.r = e;
  }
  function ya(_, e) {
    _.resolveTarget = e;
  }
  function xa(_, e) {
    _.resource = e;
  }
  function $a(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function va(_, e) {
    _.sampleCount = e >>> 0;
  }
  function Sa(_, e) {
    _.size = e;
  }
  function Aa(_, e) {
    _.size = e;
  }
  function Ia(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function Fa(_, e) {
    _.stencilLoadOp = O_[e];
  }
  function Ta(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function Da(_, e) {
    _.stencilStoreOp = W_[e];
  }
  function Ba(_, e) {
    _.storeOp = W_[e];
  }
  function Pa(_, e) {
    _.texture = e;
  }
  function ka(_, e) {
    _.timestampWrites = e;
  }
  function Ma(_, e) {
    _.usage = e >>> 0;
  }
  function Ra(_, e) {
    _.usage = e >>> 0;
  }
  function Ca(_, e) {
    _.view = e;
  }
  function Va(_, e) {
    _.view = e;
  }
  function La(_, e) {
    _.viewFormats = e;
  }
  function Ea(_, e) {
    _.width = e >>> 0;
  }
  function Ga(_, e) {
    _.x = e >>> 0;
  }
  function Oa(_, e) {
    _.y = e >>> 0;
  }
  function Wa(_, e) {
    _.z = e >>> 0;
  }
  function za() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return z(_) ? 0 : $e(_);
  }
  function Ua() {
    const _ = typeof global > "u" ? null : global;
    return z(_) ? 0 : $e(_);
  }
  function Ha() {
    const _ = typeof self > "u" ? null : self;
    return z(_) ? 0 : $e(_);
  }
  function qa() {
    const _ = typeof window > "u" ? null : window;
    return z(_) ? 0 : $e(_);
  }
  function ja(_, e) {
    _.submit(e);
  }
  function Ka(_, e, t) {
    return _.then(e, t);
  }
  function Na(_, e, t) {
    return _.then(e, t);
  }
  function Ja(_, e) {
    return _.then(e);
  }
  function Qa(_) {
    _.unmap();
  }
  function Xa(_) {
    return _.value;
  }
  function Ya() {
    return q(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, z_(r, n), a, o);
    }, arguments);
  }
  function Za() {
    return q(function(_, e, t, r, n, a) {
      _.writeTexture(e, z_(t, r), n, a);
    }, arguments);
  }
  function eo(_, e) {
    return Lt(_, e, bo);
  }
  function _o(_, e) {
    return Lt(_, e, co);
  }
  function to(_) {
    return _;
  }
  function ro(_) {
    return _;
  }
  function no(_, e) {
    return U(_, e);
  }
  function ao(_) {
    return BigInt.asUintN(64, _);
  }
  function oo() {
    const _ = f.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function bo(_, e, t) {
    f.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_(_, e, t);
  }
  function co(_, e, t) {
    const r = f.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_(_, e, t);
    if (r[1]) throw A(r[0]);
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
  ], so = [
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
  ], io = [
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
  function D_(_) {
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
      n > 0 && (a += D_(_[0]));
      for (let o = 1; o < n; o++) a += ", " + D_(_[o]);
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
  function fo(_, e) {
    return _ = _ >>> 0, go().subarray(_ / 4, _ / 4 + e);
  }
  function z_(_, e) {
    return _ = _ >>> 0, le().subarray(_ / 1, _ / 1 + e);
  }
  let se = null;
  function H() {
    return (se === null || se.buffer.detached === true || se.buffer.detached === void 0 && se.buffer !== f.memory.buffer) && (se = new DataView(f.memory.buffer)), se;
  }
  let Re = null;
  function uo() {
    return (Re === null || Re.byteLength === 0) && (Re = new Float64Array(f.memory.buffer)), Re;
  }
  function U(_, e) {
    return wo(_ >>> 0, e);
  }
  let Ce = null;
  function go() {
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
    return uo().set(_, t / 8), V = _.length, t;
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
  function A(_) {
    const e = f.__wbindgen_externrefs.get(_);
    return f.__externref_table_dealloc(_), e;
  }
  let o_ = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  o_.decode();
  const po = 2146435072;
  let p_ = 0;
  function wo(_, e) {
    return p_ += e, p_ >= po && (o_ = new TextDecoder("utf-8", {
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
  function lo(_) {
    f = _;
  }
  URL = globalThis.URL;
  const mo = await G_({
    "./proteus_sdk_web_bg.js": {
      __wbg_next_0c4066e251d2eff9: dn,
      __wbg_done_b62d4a7d2286852a: Or,
      __wbg_value_49f783bb59765962: Xa,
      __wbg_length_c6054974c0a6cdb9: an,
      __wbg_instanceof_Map_afa18d5840c04c15: Yr,
      __wbg_get_197a3fe98f169e38: Kr,
      __wbg_get_unchecked_54a4374c38e08460: Jr,
      __wbg_call_5575218572ead796: kr,
      __wbg_push_f724b5db8acf89d2: ln,
      __wbg_call_0e855b388e315e17: Pr,
      __wbg_set_dc601f4a69da0bc2: Un,
      __wbg_call_8e98ed2f3c86c4b5: Mr,
      __wbg_get_with_ref_key_6412cf3094599694: Qr,
      __wbg_set_6be42768c690e380: Dn,
      __wbg_String_8564e559799eccda: dr,
      __wbg_set_texture_16d2be474ce6ad0c: Pa,
      __wbg_set_mip_level_246db61be15bdd69: ua,
      __wbg_set_x_56f0c2c08a62725c: Ga,
      __wbg_set_y_04fb8ce84735b4e1: Oa,
      __wbg_set_z_a51316db27a4941e: Wa,
      __wbg_set_origin_9b3b0fbe0a5dc469: la,
      __wbg_set_aspect_77332ac136ee94eb: kn,
      __wbg_set_a_5f6e488475272136: Bn,
      __wbg_set_b_688365d692bba214: Rn,
      __wbg_set_g_d4d1d77cf8fdd362: ta,
      __wbg_set_r_527e5a41c4b1a846: ha,
      __wbg_set_width_1a5e2e86fa5bdcd8: Ea,
      __wbg_set_height_e8b5483b8c117d5e: ra,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: jn,
      __wbg_set_format_e9d4b1475bb3bd3b: _a,
      __wbg_set_size_a61ff22205255d61: Aa,
      __wbg_set_usage_7fa9cd18d1104aca: Ra,
      __wbg_set_label_0c1bd0e976cf0a9a: aa,
      __wbg_set_dimension_36e13ccecae5af4b: Xn,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: ga,
      __wbg_set_sample_count_865e1d19b84e27e6: va,
      __wbg_set_view_formats_bab284fc81b40e70: La,
      __wbg_createTexture_9e76b80a2dc0d12e: Lr,
      __wbg_set_entries_fc76ca4d7da6a709: Zn,
      __wbg_set_layout_eeef59714f5bf48b: ia,
      __wbg_set_label_f92ae11c77d74198: sa,
      __wbg_createBindGroup_2320df4db188406c: Cr,
      __wbg_set_label_d1c24b5a7a3ac31d: ca,
      __wbg_createCommandEncoder_cd88faca35d9ed68: Vr,
      __wbg_set_color_attachments_abe67f6631926e28: zn,
      __wbg_set_label_8fd860a36d2c7b74: ba,
      __wbg_set_view_dbd0294573f64d05: Va,
      __wbg_set_depth_clear_value_442bf492734f63b6: Hn,
      __wbg_set_depth_load_op_34d430b74bb36d91: qn,
      __wbg_set_depth_store_op_0ea0a215313dbda7: Jn,
      __wbg_set_depth_read_only_138a11b10c731094: Kn,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: Ia,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: Fa,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: Da,
      __wbg_set_stencil_read_only_fb489d191b6d969b: Ta,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: Nn,
      __wbg_set_query_set_18679a8580267d5a: ma,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: Ln,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: Yn,
      __wbg_set_timestamp_writes_c552d52fbb417005: ka,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: Br,
      __wbg_copyTextureToTexture_1be188df1e535c0a: Rr,
      __wbg_label_47480289cc2bce71: rn,
      __wbg_set_label_2d2227f4d5991e50: oa,
      __wbg_finish_cfaeede3baf55be1: qr,
      __wbg_finish_087cb89c65c06eb1: Hr,
      __wbg_drawIndexed_68637ebab6dd8d6e: Wr,
      __wbg_setPipeline_bab24dbce96903b9: An,
      __wbg_setViewport_f9d423db4f4b4b58: Tn,
      __wbg_setBindGroup_4ba56e1e0d26f244: xn,
      __wbg_setBindGroup_6124849cc8547086: $n,
      __wbg_setIndexBuffer_17431786d06c1b7c: vn,
      __wbg_setIndexBuffer_a16ed5b869c87507: Sn,
      __wbg_setVertexBuffer_b508baf8d0ffe331: Fn,
      __wbg_setVertexBuffer_91c4b602d0289943: In,
      __wbg_end_414453a89205612c: zr,
      __wbg_writeBuffer_b4bdd36178348ca5: Ya,
      __wbg_set_bytes_per_row_91681ca78d744888: On,
      __wbg_set_rows_per_image_d198b7e73a38978b: $a,
      __wbg_set_offset_a097a8050a3a9a33: wa,
      __wbg_writeTexture_b45b69132e46a227: Za,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: pn,
      __wbg_submit_1290d44bb76ecef4: ja,
      __wbg_getMappedRange_5ed22727c9679168: jr,
      __wbg_unmap_8f06698a75b8331a: Qa,
      __wbg_destroy_b5b39f25f0799295: Gr,
      __wbg_mapAsync_bb0029907dd91181: on,
      __wbg_set_dimension_174ad7e2fb67fb4e: Qn,
      __wbg_set_format_90860b0321868db4: ea,
      __wbg_set_aspect_a823a14d00d42d37: Mn,
      __wbg_set_base_array_layer_cc6c68d233489c4b: Cn,
      __wbg_set_array_layer_count_daec613068108a9d: Pn,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: Vn,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: da,
      __wbg_set_label_03d2396d4655a3e1: na,
      __wbg_set_usage_7f0dda8309469b1c: Ma,
      __wbg_createView_cc96b5bdd3d5bf5e: Er,
      __wbg_then_05edfc8a4fea5106: Ka,
      __wbg_set_load_op_56844f51434037bf: fa,
      __wbg_set_store_op_caeede4654b3d847: Ba,
      __wbg_set_view_bdeab150b5f0768c: Ca,
      __wbg_set_clear_value_642701f928a5ccb3: Wn,
      __wbg_set_resolve_target_fe76b3f99cf72078: ya,
      __wbg_set_buffer_55f096330c8912b4: Gn,
      __wbg_set_offset_73156b0e0b41d79a: pa,
      __wbg_set_size_1e6281b07cd39177: Sa,
      __wbg_set_binding_f3c188a8cd21455b: En,
      __wbg_set_resource_fe385d2e3dadaf63: xa,
      __wbg_resolve_d82363d90af6928a: yn,
      __wbg_then_591b6b3a75ee817a: Ja,
      __wbg_iterator_cc47ba25a2be735a: tn,
      __wbg_get_9a29be2cb383ed9a: Nr,
      __wbg_next_402fa10b59ab20c3: gn,
      __wbg_new_2e117a478906f062: bn,
      __wbg_new_36e147a8ced3c6e0: cn,
      __wbg_isArray_145a34fd0a38d37b: en,
      __wbg_new_e66a4b7758dd2e5c: fn,
      __wbg_isSafeInteger_a3389a198582f5f6: _n,
      __wbg_entries_c261c3fa1f281256: Ur,
      __wbg_then_2a84678a50976959: Na,
      __wbg_length_589238bdcf171f0e: nn,
      __wbg_prototypesetcall_d721637c7ca66eb8: wn,
      __wbg_new_81880fb5002cb255: sn,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: un,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: za,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: Ha,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Ua,
      __wbg_static_accessor_WINDOW_168f178805d978fe: qa,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: Xr,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: Zr,
      __wbg_queueMicrotask_311744e534a929a3: hn,
      __wbg_queueMicrotask_1c9b3800e321a967: mn,
      __wbg___wbindgen_number_get_1cc01dd708740256: Ir,
      __wbg___wbindgen_in_4990f46af709e33c: lr,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: Tr,
      __wbg___wbindgen_is_null_6d937fbfb6478470: yr,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: Sr,
      __wbg_Number_c4bdf66bb78f7977: ur,
      __wbg_Error_fdd633d4bb5dd76a: fr,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: mr,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: xr,
      __wbg___wbindgen_is_string_1fca8072260dd261: $r,
      __wbg___wbindgen_string_get_71bb4348194e31f0: Fr,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: pr,
      __wbg___wbindgen_is_function_acc5528be2b923f2: hr,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: vr,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: Ar,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: gr,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: Dr,
      __wbg___wbindgen_debug_string_8a447059637473e2: wr,
      __wbindgen_init_externref_table: oo,
      __wbindgen_cast_0000000000000001: eo,
      __wbindgen_cast_0000000000000002: _o,
      __wbindgen_cast_0000000000000003: to,
      __wbindgen_cast_0000000000000004: ro,
      __wbindgen_cast_0000000000000005: no,
      __wbindgen_cast_0000000000000006: ao
    }
  }, ir), { memory: ho, __wbg_proteusapp_free: yo, proteusapp_addChild: xo, proteusapp_animateTo: $o, proteusapp_bakeTexture: vo, proteusapp_bakedImageSize: So, proteusapp_bakedTextSize: Ao, proteusapp_bindKey: Io, proteusapp_channelDestroy: Fo, proteusapp_channelSet: To, proteusapp_clearFocus: Do, proteusapp_clearGlyphCache: Bo, proteusapp_component: Po, proteusapp_copyBakedImageFrom: ko, proteusapp_createVideo: Mo, proteusapp_cropImage: Ro, proteusapp_declareGeometry: Co, proteusapp_declaredGeometry: Vo, proteusapp_destroy: Lo, proteusapp_devices: Eo, proteusapp_expectFont: Go, proteusapp_focus: Oo, proteusapp_focused: Wo, proteusapp_fontFailed: zo, proteusapp_freeResources: Uo, proteusapp_get: Ho, proteusapp_hideVideo: qo, proteusapp_inputDevices: jo, proteusapp_inputMode: Ko, proteusapp_isFocused: No, proteusapp_loadFont: Jo, proteusapp_loadTexture: Qo, proteusapp_measureText: Xo, proteusapp_mergeFrom: Yo, proteusapp_mergeFromWithBehavior: Zo, proteusapp_new: eb, proteusapp_onAppKey: _b, proteusapp_onBlur: tb, proteusapp_onClick: rb, proteusapp_onDrag: nb, proteusapp_onDropped: ab, proteusapp_onFocus: ob, proteusapp_onFocusLost: bb, proteusapp_onHoverEnter: cb, proteusapp_onHoverExit: sb, proteusapp_onKey: ib, proteusapp_onPress: fb, proteusapp_onRelease: ub, proteusapp_onTransitionComplete: db, proteusapp_pointerLeft: gb, proteusapp_pointerMoved: pb, proteusapp_pointerPressed: wb, proteusapp_pointerReleased: lb, proteusapp_releaseVideo: mb, proteusapp_removeChild: hb, proteusapp_resetKeyMap: yb, proteusapp_setDeclaredGeometry: xb, proteusapp_setDefaultFocus: $b, proteusapp_setDevices: vb, proteusapp_setDisabled: Sb, proteusapp_setFallbackFonts: Ab, proteusapp_setFocusGroup: Ib, proteusapp_setImage: Fb, proteusapp_setInputDevices: Tb, proteusapp_setInteractive: Db, proteusapp_setKeyRepeat: Bb, proteusapp_setLongPressMs: Pb, proteusapp_setNavigatingActions: kb, proteusapp_setNeighbour: Mb, proteusapp_setOpacity: Rb, proteusapp_setReadingDirection: Cb, proteusapp_setStyle: Vb, proteusapp_setStyleTransition: Lb, proteusapp_setText: Eb, proteusapp_setTexture: Gb, proteusapp_setTransitionInteraction: Ob, proteusapp_setVideoCrossfade: Wb, proteusapp_setVisible: zb, proteusapp_showVideo: Ub, proteusapp_splitTo: Hb, proteusapp_splitToWithBehavior: qb, proteusapp_splitToWithStates: jb, proteusapp_texture: Kb, proteusapp_textureState: Nb, proteusapp_tick: Jb, proteusapp_transitionChannel: Qb, proteusapp_unbindKey: Xb, proteusapp_uploadVideoFrame: Yb, __wbg_handle_free: Zb, __wbg_texturehandle_free: ec, __wbg_transitionchannel_free: _c, __wbg_videohandle_free: tc, handle_fromId: rc, handle_id: nc, texturehandle_fromId: ac, texturehandle_id: oc, __abort_handler: bc, __instance_terminated: cc, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_: sc, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_: ic, __wbindgen_malloc: fc, __wbindgen_realloc: uc, __wbindgen_exn_store: dc, __externref_table_alloc: gc, __wbindgen_externrefs: pc, __wbindgen_destroy_closure: wc, __externref_table_dealloc: lc, __wbindgen_free: mc, __wbindgen_start: Et } = mo, hc = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: bc,
    __externref_table_alloc: gc,
    __externref_table_dealloc: lc,
    __instance_terminated: cc,
    __wbg_handle_free: Zb,
    __wbg_proteusapp_free: yo,
    __wbg_texturehandle_free: ec,
    __wbg_transitionchannel_free: _c,
    __wbg_videohandle_free: tc,
    __wbindgen_destroy_closure: wc,
    __wbindgen_exn_store: dc,
    __wbindgen_externrefs: pc,
    __wbindgen_free: mc,
    __wbindgen_malloc: fc,
    __wbindgen_realloc: uc,
    __wbindgen_start: Et,
    handle_fromId: rc,
    handle_id: nc,
    memory: ho,
    proteusapp_addChild: xo,
    proteusapp_animateTo: $o,
    proteusapp_bakeTexture: vo,
    proteusapp_bakedImageSize: So,
    proteusapp_bakedTextSize: Ao,
    proteusapp_bindKey: Io,
    proteusapp_channelDestroy: Fo,
    proteusapp_channelSet: To,
    proteusapp_clearFocus: Do,
    proteusapp_clearGlyphCache: Bo,
    proteusapp_component: Po,
    proteusapp_copyBakedImageFrom: ko,
    proteusapp_createVideo: Mo,
    proteusapp_cropImage: Ro,
    proteusapp_declareGeometry: Co,
    proteusapp_declaredGeometry: Vo,
    proteusapp_destroy: Lo,
    proteusapp_devices: Eo,
    proteusapp_expectFont: Go,
    proteusapp_focus: Oo,
    proteusapp_focused: Wo,
    proteusapp_fontFailed: zo,
    proteusapp_freeResources: Uo,
    proteusapp_get: Ho,
    proteusapp_hideVideo: qo,
    proteusapp_inputDevices: jo,
    proteusapp_inputMode: Ko,
    proteusapp_isFocused: No,
    proteusapp_loadFont: Jo,
    proteusapp_loadTexture: Qo,
    proteusapp_measureText: Xo,
    proteusapp_mergeFrom: Yo,
    proteusapp_mergeFromWithBehavior: Zo,
    proteusapp_new: eb,
    proteusapp_onAppKey: _b,
    proteusapp_onBlur: tb,
    proteusapp_onClick: rb,
    proteusapp_onDrag: nb,
    proteusapp_onDropped: ab,
    proteusapp_onFocus: ob,
    proteusapp_onFocusLost: bb,
    proteusapp_onHoverEnter: cb,
    proteusapp_onHoverExit: sb,
    proteusapp_onKey: ib,
    proteusapp_onPress: fb,
    proteusapp_onRelease: ub,
    proteusapp_onTransitionComplete: db,
    proteusapp_pointerLeft: gb,
    proteusapp_pointerMoved: pb,
    proteusapp_pointerPressed: wb,
    proteusapp_pointerReleased: lb,
    proteusapp_releaseVideo: mb,
    proteusapp_removeChild: hb,
    proteusapp_resetKeyMap: yb,
    proteusapp_setDeclaredGeometry: xb,
    proteusapp_setDefaultFocus: $b,
    proteusapp_setDevices: vb,
    proteusapp_setDisabled: Sb,
    proteusapp_setFallbackFonts: Ab,
    proteusapp_setFocusGroup: Ib,
    proteusapp_setImage: Fb,
    proteusapp_setInputDevices: Tb,
    proteusapp_setInteractive: Db,
    proteusapp_setKeyRepeat: Bb,
    proteusapp_setLongPressMs: Pb,
    proteusapp_setNavigatingActions: kb,
    proteusapp_setNeighbour: Mb,
    proteusapp_setOpacity: Rb,
    proteusapp_setReadingDirection: Cb,
    proteusapp_setStyle: Vb,
    proteusapp_setStyleTransition: Lb,
    proteusapp_setText: Eb,
    proteusapp_setTexture: Gb,
    proteusapp_setTransitionInteraction: Ob,
    proteusapp_setVideoCrossfade: Wb,
    proteusapp_setVisible: zb,
    proteusapp_showVideo: Ub,
    proteusapp_splitTo: Hb,
    proteusapp_splitToWithBehavior: qb,
    proteusapp_splitToWithStates: jb,
    proteusapp_texture: Kb,
    proteusapp_textureState: Nb,
    proteusapp_tick: Jb,
    proteusapp_transitionChannel: Qb,
    proteusapp_unbindKey: Xb,
    proteusapp_uploadVideoFrame: Yb,
    texturehandle_fromId: ac,
    texturehandle_id: oc,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_: ic,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_: sc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  lo(hc);
  Et();
  const yc = "" + new URL("proteus_host_web_bg-B1HGIchX.wasm", import.meta.url).href;
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
      if (r[1]) throw I(r[0]);
    }
    animateTo(e, t, r) {
      p(e, x);
      const n = i.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw I(n[0]);
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
      if (a[1]) throw I(a[0]);
    }
    channelDestroy(e) {
      p(e, ge);
      var t = e.__destroy_into_raw();
      i.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      p(e, ge), p(t, x), p(r, x);
      const o = i.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (o[1]) throw I(o[0]);
    }
    clearFocus() {
      i.proteusapp_clearFocus(this.__wbg_ptr);
    }
    clearGlyphCache() {
      i.proteusapp_clearGlyphCache(this.__wbg_ptr);
    }
    component(e) {
      const t = i.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw I(t[1]);
      return x.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      p(e, x), p(t, x);
      const r = i.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw I(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = i.proteusapp_createVideo(this.__wbg_ptr);
      return pe.__wrap(e);
    }
    cropImage(e, t) {
      p(e, x);
      const r = i.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw I(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      p(e, x);
      const r = i.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    declaredGeometry(e) {
      return p(e, x), i.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      p(e, x);
      var t = e.__destroy_into_raw();
      const r = i.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    devices(e) {
      return p(e, x), i.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    expectFont(e, t) {
      const r = G(e, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M, a = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), o = M, b = i.proteusapp_expectFont(this.__wbg_ptr, r, n, a, o);
      if (b[1]) throw I(b[0]);
    }
    focus(e) {
      p(e, x);
      const t = i.proteusapp_focus(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw I(t[0]);
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
      if (t[1]) throw I(t[0]);
    }
    get(e) {
      return p(e, x), i.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      p(e, x);
      const t = i.proteusapp_hideVideo(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw I(t[0]);
    }
    inputDevices() {
      return i.proteusapp_inputDevices(this.__wbg_ptr);
    }
    inputMode() {
      let e, t;
      try {
        const r = i.proteusapp_inputMode(this.__wbg_ptr);
        return e = r[0], t = r[1], T(r[0], r[1]);
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
        if (c[3]) throw n = 0, a = 0, I(c[2]);
        return t = n, r = a, T(n, a);
      } finally {
        i.__wbindgen_free(t, r, 1);
      }
    }
    loadTexture(e, t) {
      const r = Ke(e, i.__wbindgen_malloc), n = M, a = i.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : oe.__wrap(a);
    }
    measureText(e) {
      const t = i.proteusapp_measureText(this.__wbg_ptr, e);
      if (t[2]) throw I(t[1]);
      return I(t[0]);
    }
    mergeFrom(e, t, r, n) {
      p(e, x);
      const a = Ne(t, i.__wbindgen_malloc), o = M, b = i.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (b[1]) throw I(b[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      p(e, x);
      const o = Ne(t, i.__wbindgen_malloc), b = M, c = i.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, b, r, n, a);
      if (c[1]) throw I(c[0]);
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
      if (r[1]) throw I(r[0]);
    }
    resetKeyMap() {
      i.proteusapp_resetKeyMap(this.__wbg_ptr);
    }
    setDeclaredGeometry(e, t) {
      p(e, x);
      const r = i.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setDefaultFocus(e, t) {
      p(e, x);
      const r = i.proteusapp_setDefaultFocus(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setDevices(e, t) {
      p(e, x);
      const r = i.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setDisabled(e, t) {
      p(e, x);
      const r = i.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setFallbackFonts(e) {
      const t = $t(e, i.__wbindgen_malloc), r = M;
      i.proteusapp_setFallbackFonts(this.__wbg_ptr, t, r);
    }
    setFocusGroup(e, t) {
      p(e, x);
      const r = i.proteusapp_setFocusGroup(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setImage(e, t) {
      p(e, x);
      const r = i.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setInputDevices(e) {
      const t = i.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw I(t[0]);
    }
    setInteractive(e, t) {
      p(e, x);
      const r = i.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setKeyRepeat(e) {
      const t = i.proteusapp_setKeyRepeat(this.__wbg_ptr, e);
      if (t[1]) throw I(t[0]);
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
      if (o[1]) throw I(o[0]);
    }
    setOpacity(e, t) {
      p(e, x);
      const r = i.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setReadingDirection(e) {
      const t = G(e, i.__wbindgen_malloc, i.__wbindgen_realloc), r = M, n = i.proteusapp_setReadingDirection(this.__wbg_ptr, t, r);
      if (n[1]) throw I(n[0]);
    }
    setStyle(e, t, r) {
      p(e, x);
      const n = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M, o = i.proteusapp_setStyle(this.__wbg_ptr, e.__wbg_ptr, n, a, r);
      if (o[1]) throw I(o[0]);
    }
    setStyleTransition(e, t) {
      p(e, x);
      const r = i.proteusapp_setStyleTransition(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setText(e, t) {
      p(e, x);
      const r = i.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setTexture(e, t) {
      p(e, x), p(t, oe);
      const r = i.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw I(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      p(e, x);
      const r = i.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    setVideoCrossfade(e, t) {
      p(e, x);
      const r = i.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw I(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      p(e, x);
      const r = i.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw I(r[0]);
    }
    showVideo(e, t) {
      p(e, x), p(t, pe);
      const r = i.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw I(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      p(e, x);
      const a = Ne(t, i.__wbindgen_malloc), o = M, b = i.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (b[1]) throw I(b[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      p(e, x);
      const o = Ne(t, i.__wbindgen_malloc), b = M, c = i.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, b, r, n, a);
      if (c[1]) throw I(c[0]);
    }
    splitToWithStates(e, t, r, n) {
      p(e, x);
      const a = i.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw I(a[0]);
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
      if (t[3]) throw I(t[2]);
      let r;
      return t[0] !== 0 && (r = T(t[0], t[1]).slice(), i.__wbindgen_free(t[0], t[1] * 1, 1)), r;
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
  function xc(_, e, t, r) {
    const n = G(_, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M;
    return i.mount(n, a, e, $(t) ? 0 : P(t), r);
  }
  function $c(_, e) {
    return Error(T(_, e));
  }
  function vc(_) {
    return Number(_);
  }
  function Sc(_, e) {
    const t = String(e), r = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Ac(_) {
    return _.Window;
  }
  function Ic(_) {
    return _.WorkerGlobalScope;
  }
  function Fc(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    C().setBigInt64(_ + 8, $(r) ? BigInt(0) : r, true), C().setInt32(_ + 0, !$(r), true);
  }
  function Tc(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return $(t) ? 16777215 : t ? 1 : 0;
  }
  function Dc(_, e) {
    const t = M_(e), r = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Bc(_, e) {
    return _ in e;
  }
  function Pc(_) {
    return typeof _ == "bigint";
  }
  function kc(_) {
    return typeof _ == "function";
  }
  function Mc(_) {
    return _ === null;
  }
  function Rc(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function Cc(_) {
    return typeof _ == "string";
  }
  function Vc(_) {
    return _ === void 0;
  }
  function Lc(_, e) {
    return _ === e;
  }
  function Ec(_, e) {
    return _ == e;
  }
  function Gc(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    C().setFloat64(_ + 8, $(r) ? 0 : r, true), C().setInt32(_ + 0, !$(r), true);
  }
  function Oc(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = $(r) ? 0 : G(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Wc(_, e) {
    throw new Error(T(_, e));
  }
  function zc(_) {
    _._wbg_cb_unref();
  }
  function Uc(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Hc(_, e) {
    _.activeTexture(e >>> 0);
  }
  function qc() {
    return y(function(_, e, t, r) {
      _.addEventListener(T(e, t), r);
    }, arguments);
  }
  function jc(_) {
    return _.altKey;
  }
  function Kc(_, e, t) {
    _.attachShader(e, t);
  }
  function Nc(_, e, t) {
    _.attachShader(e, t);
  }
  function Jc(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function Qc() {
    return y(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Xc(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, T(r, n));
  }
  function Yc(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, T(r, n));
  }
  function Zc(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function es(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function _s(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function ts(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function rs(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function ns(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function as(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function os(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function bs(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function cs(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function ss(_, e) {
    _.bindVertexArrayOES(e);
  }
  function is(_, e) {
    _.bindVertexArray(e);
  }
  function fs(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function us(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function ds(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function gs(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function ps(_, e) {
    _.blendEquation(e >>> 0);
  }
  function ws(_, e) {
    _.blendEquation(e >>> 0);
  }
  function ls(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function ms(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function hs(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function ys(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function xs(_, e, t, r, n, a, o, b, c, u, d) {
    _.blitFramebuffer(e, t, r, n, a, o, b, c, u >>> 0, d >>> 0);
  }
  function $s(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function vs(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Ss(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function As(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Is(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function Fs(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function Ts(_) {
    return _.button;
  }
  function Ds() {
    return y(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function Bs() {
    return y(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Ps() {
    return y(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function ks(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, O(r, n));
  }
  function Ms(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, Z(r, n));
  }
  function Rs(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, ve(r, n));
  }
  function Cs(_, e) {
    _.clearDepth(e);
  }
  function Vs(_, e) {
    _.clearDepth(e);
  }
  function Ls(_, e) {
    _.clearStencil(e);
  }
  function Es(_, e) {
    _.clearStencil(e);
  }
  function Gs(_, e) {
    _.clear(e >>> 0);
  }
  function Os(_, e) {
    _.clear(e >>> 0);
  }
  function Ws(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function zs(_, e) {
    const t = e.code, r = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Us(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Hs(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function qs(_, e) {
    _.compileShader(e);
  }
  function js(_, e) {
    _.compileShader(e);
  }
  function Ks(_, e, t, r, n, a, o, b, c) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c);
  }
  function Ns(_, e, t, r, n, a, o, b, c) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c);
  }
  function Js(_, e, t, r, n, a, o, b, c, u) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c, u);
  }
  function Qs(_, e, t, r, n, a, o, b, c, u, d, D) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d, D);
  }
  function Xs(_, e, t, r, n, a, o, b, c, u, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d);
  }
  function Ys() {
    return y(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function Zs(_) {
    return _.contentRect;
  }
  function ei(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function _i(_, e, t, r, n, a, o, b, c) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, b, c);
  }
  function ti(_, e, t, r, n, a, o, b, c) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, b, c);
  }
  function ri(_, e, t, r, n, a, o, b, c, u) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, o, b, c, u);
  }
  function ni() {
    return y(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function ai() {
    return y(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function oi(_, e) {
    return _.createBindGroup(e);
  }
  function bi(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : P(e);
  }
  function ci() {
    return y(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function si(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : P(e);
  }
  function ii(_, e) {
    return _.createCommandEncoder(e);
  }
  function fi(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : P(e);
  }
  function ui(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : P(e);
  }
  function di(_, e) {
    return _.createPipelineLayout(e);
  }
  function gi(_) {
    const e = _.createProgram();
    return $(e) ? 0 : P(e);
  }
  function pi(_) {
    const e = _.createProgram();
    return $(e) ? 0 : P(e);
  }
  function wi(_) {
    const e = _.createQuery();
    return $(e) ? 0 : P(e);
  }
  function li() {
    return y(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function mi(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : P(e);
  }
  function hi(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : P(e);
  }
  function yi(_, e) {
    return _.createSampler(e);
  }
  function xi(_) {
    const e = _.createSampler();
    return $(e) ? 0 : P(e);
  }
  function $i(_, e) {
    return _.createShaderModule(e);
  }
  function vi(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : P(t);
  }
  function Si(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : P(t);
  }
  function Ai(_) {
    const e = _.createTexture();
    return $(e) ? 0 : P(e);
  }
  function Ii(_) {
    const e = _.createTexture();
    return $(e) ? 0 : P(e);
  }
  function Fi() {
    return y(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function Ti(_) {
    const e = _.createVertexArrayOES();
    return $(e) ? 0 : P(e);
  }
  function Di(_) {
    const e = _.createVertexArray();
    return $(e) ? 0 : P(e);
  }
  function Bi() {
    return y(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function Pi(_) {
    return _.ctrlKey;
  }
  function ki(_, e) {
    _.cullFace(e >>> 0);
  }
  function Mi(_, e) {
    _.cullFace(e >>> 0);
  }
  function Ri(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function Ci(_, e) {
    _.deleteBuffer(e);
  }
  function Vi(_, e) {
    _.deleteBuffer(e);
  }
  function Li(_, e) {
    _.deleteFramebuffer(e);
  }
  function Ei(_, e) {
    _.deleteFramebuffer(e);
  }
  function Gi(_, e) {
    _.deleteProgram(e);
  }
  function Oi(_, e) {
    _.deleteProgram(e);
  }
  function Wi(_, e) {
    _.deleteQuery(e);
  }
  function zi(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Ui(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Hi(_, e) {
    _.deleteSampler(e);
  }
  function qi(_, e) {
    _.deleteShader(e);
  }
  function ji(_, e) {
    _.deleteShader(e);
  }
  function Ki(_, e) {
    _.deleteSync(e);
  }
  function Ni(_, e) {
    _.deleteTexture(e);
  }
  function Ji(_, e) {
    _.deleteTexture(e);
  }
  function Qi(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function Xi(_, e) {
    _.deleteVertexArray(e);
  }
  function Yi(_, e) {
    _.depthFunc(e >>> 0);
  }
  function Zi(_, e) {
    _.depthFunc(e >>> 0);
  }
  function ef(_, e) {
    _.depthMask(e !== 0);
  }
  function _f(_, e) {
    _.depthMask(e !== 0);
  }
  function tf(_, e, t) {
    _.depthRange(e, t);
  }
  function rf(_, e, t) {
    _.depthRange(e, t);
  }
  function nf(_, e) {
    const t = e.description, r = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function af(_) {
    _.destroy();
  }
  function of(_) {
    return _.devicePixelRatio;
  }
  function bf(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function cf(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function sf(_, e) {
    _.disable(e >>> 0);
  }
  function ff(_, e) {
    _.disable(e >>> 0);
  }
  function uf(_) {
    const e = _.document;
    return $(e) ? 0 : P(e);
  }
  function df(_) {
    return _.done;
  }
  function gf(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function pf(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function wf(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function lf(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function mf(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function hf(_, e) {
    _.drawBuffers(e);
  }
  function yf(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function xf(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function $f(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function vf(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function Sf(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function Af(_, e) {
    _.enable(e >>> 0);
  }
  function If(_, e) {
    _.enable(e >>> 0);
  }
  function Ff(_, e) {
    _.endQuery(e >>> 0);
  }
  function Tf(_) {
    _.end();
  }
  function Df(_) {
    return Object.entries(_);
  }
  function Bf(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function Pf(_) {
    console.error(_);
  }
  function kf(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(T(_, e));
    } finally {
      i.__wbindgen_free(t, r, 1);
    }
  }
  function Mf(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return $(r) ? 0 : P(r);
  }
  function Rf(_) {
    return _.finish();
  }
  function Cf(_, e) {
    return _.finish(e);
  }
  function Vf(_) {
    _.flush();
  }
  function Lf(_) {
    _.flush();
  }
  function Ef() {
    return y(function(_) {
      _.focus();
    }, arguments);
  }
  function Gf(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function Of(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function Wf(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function zf(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function Uf(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function Hf(_, e, t, r, n, a, o) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, o);
  }
  function qf(_, e) {
    _.frontFace(e >>> 0);
  }
  function jf(_, e) {
    _.frontFace(e >>> 0);
  }
  function Kf(_) {
    return _.getBoundingClientRect();
  }
  function Nf(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function Jf() {
    return y(function(_, e, t, r) {
      const n = _.getContext(T(e, t), r);
      return $(n) ? 0 : P(n);
    }, arguments);
  }
  function Qf() {
    return y(function(_, e, t) {
      const r = _.getContext(T(e, t));
      return $(r) ? 0 : P(r);
    }, arguments);
  }
  function Xf() {
    return y(function(_, e, t) {
      const r = _.getContext(T(e, t));
      return $(r) ? 0 : P(r);
    }, arguments);
  }
  function Yf() {
    return y(function(_, e, t, r) {
      const n = _.getContext(T(e, t), r);
      return $(n) ? 0 : P(n);
    }, arguments);
  }
  function Zf() {
    return y(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function eu(_, e, t) {
    const r = _.getElementById(T(e, t));
    return $(r) ? 0 : P(r);
  }
  function _u() {
    return y(function(_, e, t) {
      const r = _.getExtension(T(e, t));
      return $(r) ? 0 : P(r);
    }, arguments);
  }
  function tu() {
    return y(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function ru() {
    return y(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function nu(_, e, t) {
    return _.getModifierState(T(e, t));
  }
  function au() {
    return y(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function ou() {
    return y(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function bu(_) {
    const e = _.getPreferredCanvasFormat();
    return (be.indexOf(e) + 1 || 96) - 1;
  }
  function cu(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : G(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function su(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : G(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function iu(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function fu(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function uu(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function du(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : G(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function gu(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : G(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function pu(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function wu(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function lu(_) {
    const e = _.getSupportedExtensions();
    return $(e) ? 0 : P(e);
  }
  function mu(_) {
    const e = _.getSupportedProfiles();
    return $(e) ? 0 : P(e);
  }
  function hu(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function yu(_, e, t, r) {
    return _.getUniformBlockIndex(e, T(t, r));
  }
  function xu(_, e, t, r) {
    const n = _.getUniformLocation(e, T(t, r));
    return $(n) ? 0 : P(n);
  }
  function $u(_, e, t, r) {
    const n = _.getUniformLocation(e, T(t, r));
    return $(n) ? 0 : P(n);
  }
  function vu(_, e) {
    return _[e >>> 0];
  }
  function Su(_, e) {
    const t = _[e >>> 0];
    return $(t) ? 0 : P(t);
  }
  function Au() {
    return y(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function Iu(_, e) {
    return _[e >>> 0];
  }
  function Fu(_, e) {
    return _[e];
  }
  function Tu(_) {
    return _.gpu;
  }
  function Du(_, e, t) {
    return _.hasAttribute(T(e, t));
  }
  function Bu(_) {
    return _.height;
  }
  function Pu(_) {
    return _.height;
  }
  function ku(_) {
    return _.hidden;
  }
  function Mu(_, e, t) {
    return _.includes(e, t);
  }
  function Ru(_) {
    return _.info;
  }
  function Cu(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function Vu(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function Lu(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function Eu(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Gu(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function Ou(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function Wu(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function zu(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function Uu(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Hu(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function qu() {
    return y(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function ju(_) {
    return Array.isArray(_);
  }
  function Ku(_) {
    return _.isComposing;
  }
  function Nu(_) {
    return Number.isSafeInteger(_);
  }
  function Ju(_, e) {
    return Object.is(_, e);
  }
  function Qu() {
    return Symbol.iterator;
  }
  function Xu(_, e) {
    const t = e.key, r = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Yu(_, e) {
    const t = e.label, r = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Zu(_) {
    return _.length;
  }
  function ed(_) {
    return _.length;
  }
  function _d(_) {
    return _.limits;
  }
  function td(_) {
    return _.limits;
  }
  function rd(_, e) {
    _.linkProgram(e);
  }
  function nd(_, e) {
    _.linkProgram(e);
  }
  function ad(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function od(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function bd(_) {
    return _.maxBindGroups;
  }
  function cd(_) {
    return _.maxBindingsPerBindGroup;
  }
  function sd(_) {
    return _.maxBufferSize;
  }
  function id(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function fd(_) {
    return _.maxColorAttachments;
  }
  function ud(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function dd(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function gd(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function pd(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function wd(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function ld(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function md(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function hd(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function yd(_) {
    return _.maxInterStageShaderVariables;
  }
  function xd(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function $d(_) {
    return _.maxSamplersPerShaderStage;
  }
  function vd(_) {
    return _.maxStorageBufferBindingSize;
  }
  function Sd(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function Ad(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function Id(_) {
    return _.maxTextureArrayLayers;
  }
  function Fd(_) {
    return _.maxTextureDimension1D;
  }
  function Td(_) {
    return _.maxTextureDimension2D;
  }
  function Dd(_) {
    return _.maxTextureDimension3D;
  }
  function Bd(_) {
    return _.maxUniformBufferBindingSize;
  }
  function Pd(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function kd(_) {
    return _.maxVertexAttributes;
  }
  function Md(_) {
    return _.maxVertexBufferArrayStride;
  }
  function Rd(_) {
    return _.maxVertexBuffers;
  }
  function Cd(_) {
    return _.metaKey;
  }
  function Vd(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function Ld(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function Ed(_) {
    return _.navigator;
  }
  function Gd(_) {
    return _.navigator;
  }
  function Od() {
    return y(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function Wd() {
    return new Error();
  }
  function zd() {
    return new Object();
  }
  function Ud() {
    return new Array();
  }
  function Hd(_) {
    return new Uint8Array(_);
  }
  function qd(_, e) {
    return new Error(T(_, e));
  }
  function jd(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, o) => {
        const b = t.a;
        t.a = 0;
        try {
          return c2(b, t.b, a, o);
        } finally {
          t.a = b;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function Kd(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function Nd() {
    return y(function(_) {
      return _.next();
    }, arguments);
  }
  function Jd(_) {
    return _.next;
  }
  function Qd(_, e) {
    _.observe(e);
  }
  function Xd(_) {
    return Array.of(_);
  }
  function Yd(_) {
    return _.offsetX;
  }
  function Zd(_) {
    return _.offsetY;
  }
  function e0(_) {
    return _.onSubmittedWorkDone();
  }
  function _0(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function t0(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function r0(_, e, t) {
    _.polygonOffset(e, t);
  }
  function n0(_, e, t) {
    _.polygonOffset(e, t);
  }
  function a0(_) {
    _.preventDefault();
  }
  function o0(_) {
    return P_.__wrap(_);
  }
  function b0(_, e, t) {
    Uint8Array.prototype.set.call(u_(_, e), t);
  }
  function c0(_, e) {
    return _.push(e);
  }
  function s0(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function i0() {
    return y(function(_, e, t) {
      return _.querySelectorAll(T(e, t));
    }, arguments);
  }
  function f0() {
    return y(function(_, e, t) {
      const r = _.querySelector(T(e, t));
      return $(r) ? 0 : P(r);
    }, arguments);
  }
  function u0(_) {
    return _.queueMicrotask;
  }
  function d0(_) {
    queueMicrotask(_);
  }
  function g0(_) {
    return _.queue;
  }
  function p0(_, e) {
    _.readBuffer(e >>> 0);
  }
  function w0() {
    return y(function(_, e, t, r, n, a, o, b) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, b);
    }, arguments);
  }
  function l0() {
    return y(function(_, e, t, r, n, a, o, b) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, b);
    }, arguments);
  }
  function m0() {
    return y(function(_, e, t, r, n, a, o, b) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, b);
    }, arguments);
  }
  function h0(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function y0(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function x0(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function $0(_) {
    return _.repeat;
  }
  function v0(_, e) {
    return _.requestAdapter(e);
  }
  function S0(_) {
    return _.requestAdapter();
  }
  function A0() {
    return y(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function I0(_, e) {
    return _.requestDevice(e);
  }
  function F0(_) {
    return Promise.resolve(_);
  }
  function T0(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function D0(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function B0(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function P0(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function k0() {
    return y(function(_, e, t, r, n) {
      _.setAttribute(T(e, t), T(r, n));
    }, arguments);
  }
  function M0() {
    return y(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, ve(r, n), a, o >>> 0);
    }, arguments);
  }
  function R0(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function C0(_, e, t, r, n) {
    _.setIndexBuffer(e, q_[t], r, n);
  }
  function V0(_, e, t, r) {
    _.setIndexBuffer(e, q_[t], r);
  }
  function L0(_, e) {
    _.setPipeline(e);
  }
  function E0(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function G0(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function O0(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
  }
  function W0(_, e, t) {
    _.set(e, t >>> 0);
  }
  function z0() {
    return y(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function U0(_, e, t) {
    _[e] = t;
  }
  function H0(_, e) {
    _.a = e;
  }
  function q0(_, e) {
    _.access = h2[e];
  }
  function j0(_, e) {
    _.addressModeU = U_[e];
  }
  function K0(_, e) {
    _.addressModeV = U_[e];
  }
  function N0(_, e) {
    _.addressModeW = U_[e];
  }
  function J0(_, e) {
    _.alpha = e;
  }
  function Q0(_, e) {
    _.alphaMode = u2[e];
  }
  function X0(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function Y0(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function Z0(_, e) {
    _.arrayStride = e;
  }
  function eg(_, e) {
    _.aspect = Ht[e];
  }
  function _g(_, e) {
    _.aspect = Ht[e];
  }
  function tg(_, e) {
    _.attributes = e;
  }
  function rg(_, e) {
    _.b = e;
  }
  function ng(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function ag(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function og(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function bg(_, e) {
    _.bindGroupLayouts = e;
  }
  function cg(_, e) {
    _.binding = e >>> 0;
  }
  function sg(_, e) {
    _.binding = e >>> 0;
  }
  function ig(_, e) {
    _.blend = e;
  }
  function fg(_, e) {
    _.buffer = e;
  }
  function ug(_, e) {
    _.buffer = e;
  }
  function dg(_, e) {
    _.buffers = e;
  }
  function gg(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function pg(_, e) {
    _.clearValue = e;
  }
  function wg(_, e, t) {
    _.code = T(e, t);
  }
  function lg(_, e) {
    _.colorAttachments = e;
  }
  function mg(_, e) {
    _.color = e;
  }
  function hg(_, e) {
    _.compare = H_[e];
  }
  function yg(_, e) {
    _.compare = H_[e];
  }
  function xg(_, e) {
    _.count = e >>> 0;
  }
  function $g(_, e) {
    _.cullMode = d2[e];
  }
  function vg(_, e, t) {
    _[e >>> 0] = t;
  }
  function Sg(_, e) {
    _.depthBias = e;
  }
  function Ag(_, e) {
    _.depthBiasClamp = e;
  }
  function Ig(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function Fg(_, e) {
    _.depthClearValue = e;
  }
  function Tg(_, e) {
    _.depthCompare = H_[e];
  }
  function Dg(_, e) {
    _.depthFailOp = K_[e];
  }
  function Bg(_, e) {
    _.depthLoadOp = j_[e];
  }
  function Pg(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function kg(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function Mg(_, e) {
    _.depthStencil = e;
  }
  function Rg(_, e) {
    _.depthStencilAttachment = e;
  }
  function Cg(_, e) {
    _.depthStoreOp = N_[e];
  }
  function Vg(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function Lg(_, e) {
    _.device = e;
  }
  function Eg(_, e) {
    _.dimension = J_[e];
  }
  function Gg(_, e) {
    _.dimension = y2[e];
  }
  function Og(_, e) {
    _.dstFactor = zt[e];
  }
  function Wg(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function zg(_, e) {
    _.entries = e;
  }
  function Ug(_, e) {
    _.entries = e;
  }
  function Hg(_, e, t) {
    _.entryPoint = T(e, t);
  }
  function qg(_, e, t) {
    _.entryPoint = T(e, t);
  }
  function jg(_, e) {
    _.externalTexture = e;
  }
  function Kg(_, e) {
    _.failOp = K_[e];
  }
  function Ng(_, e) {
    _.format = be[e];
  }
  function Jg(_, e) {
    _.format = $2[e];
  }
  function Qg(_, e) {
    _.format = be[e];
  }
  function Xg(_, e) {
    _.format = be[e];
  }
  function Yg(_, e) {
    _.format = be[e];
  }
  function Zg(_, e) {
    _.format = be[e];
  }
  function ep(_, e) {
    _.format = be[e];
  }
  function _p(_, e) {
    _.fragment = e;
  }
  function tp(_, e) {
    _.frontFace = g2[e];
  }
  function rp(_, e) {
    _.g = e;
  }
  function np(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function ap(_, e) {
    _.height = e >>> 0;
  }
  function op(_, e) {
    _.height = e >>> 0;
  }
  function bp(_, e) {
    _.height = e >>> 0;
  }
  function cp(_, e, t) {
    _.label = T(e, t);
  }
  function sp(_, e, t) {
    _.label = T(e, t);
  }
  function ip(_, e, t) {
    _.label = T(e, t);
  }
  function fp(_, e, t) {
    _.label = T(e, t);
  }
  function up(_, e, t) {
    _.label = T(e, t);
  }
  function dp(_, e, t) {
    _.label = T(e, t);
  }
  function gp(_, e, t) {
    _.label = T(e, t);
  }
  function pp(_, e, t) {
    _.label = T(e, t);
  }
  function wp(_, e, t) {
    _.label = T(e, t);
  }
  function lp(_, e, t) {
    _.label = T(e, t);
  }
  function mp(_, e, t) {
    _.label = T(e, t);
  }
  function hp(_, e, t) {
    _.label = T(e, t);
  }
  function yp(_, e, t) {
    _.label = T(e, t);
  }
  function xp(_, e) {
    _.layout = e;
  }
  function $p(_, e) {
    _.layout = e;
  }
  function vp(_, e) {
    _.loadOp = j_[e];
  }
  function Sp(_, e) {
    _.lodMaxClamp = e;
  }
  function Ap(_, e) {
    _.lodMinClamp = e;
  }
  function Ip(_, e) {
    _.magFilter = Ut[e];
  }
  function Fp(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function Tp(_, e) {
    _.mask = e >>> 0;
  }
  function Dp(_, e) {
    _.maxAnisotropy = e;
  }
  function Bp(_, e) {
    _.minBindingSize = e;
  }
  function Pp(_, e) {
    _.minFilter = Ut[e];
  }
  function kp(_, e) {
    _.mipLevel = e >>> 0;
  }
  function Mp(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Rp(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Cp(_, e) {
    _.mipmapFilter = p2[e];
  }
  function Vp(_, e) {
    _.module = e;
  }
  function Lp(_, e) {
    _.module = e;
  }
  function Ep(_, e) {
    _.multisample = e;
  }
  function Gp(_, e) {
    _.multisampled = e !== 0;
  }
  function Op(_, e) {
    _.offset = e;
  }
  function Wp(_, e) {
    _.offset = e;
  }
  function zp(_, e) {
    _.offset = e;
  }
  function Up(_, e) {
    _.operation = i2[e];
  }
  function Hp(_, e) {
    _.origin = e;
  }
  function qp(_, e) {
    _.passOp = K_[e];
  }
  function jp(_, e) {
    _.powerPreference = w2[e];
  }
  function Kp(_, e) {
    _.primitive = e;
  }
  function Np(_, e) {
    _.querySet = e;
  }
  function Jp(_, e) {
    _.r = e;
  }
  function Qp(_, e) {
    _.requiredFeatures = e;
  }
  function Xp(_, e) {
    _.requiredLimits = e;
  }
  function Yp(_, e) {
    _.resolveTarget = e;
  }
  function Zp(_, e) {
    _.resource = e;
  }
  function ew(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function _w(_, e) {
    _.sampleCount = e >>> 0;
  }
  function tw(_, e) {
    _.sampleType = x2[e];
  }
  function rw(_, e) {
    _.sampler = e;
  }
  function nw(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function aw(_, e) {
    _.size = e;
  }
  function ow(_, e) {
    _.size = e;
  }
  function bw(_, e) {
    _.size = e;
  }
  function cw(_, e) {
    _.srcFactor = zt[e];
  }
  function sw(_, e) {
    _.stencilBack = e;
  }
  function iw(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function fw(_, e) {
    _.stencilFront = e;
  }
  function uw(_, e) {
    _.stencilLoadOp = j_[e];
  }
  function dw(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function gw(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function pw(_, e) {
    _.stencilStoreOp = N_[e];
  }
  function ww(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function lw(_, e) {
    _.stepMode = v2[e];
  }
  function mw(_, e) {
    _.storageTexture = e;
  }
  function hw(_, e) {
    _.storeOp = N_[e];
  }
  function yw(_, e) {
    _.stripIndexFormat = q_[e];
  }
  function xw(_, e) {
    _.targets = e;
  }
  function $w(_, e) {
    _.texture = e;
  }
  function vw(_, e) {
    _.texture = e;
  }
  function Sw(_, e) {
    _.timestampWrites = e;
  }
  function Aw(_, e) {
    _.topology = l2[e];
  }
  function Iw(_, e) {
    _.type = f2[e];
  }
  function Fw(_, e) {
    _.type = m2[e];
  }
  function Tw(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function Dw(_, e) {
    _.usage = e >>> 0;
  }
  function Bw(_, e) {
    _.usage = e >>> 0;
  }
  function Pw(_, e) {
    _.usage = e >>> 0;
  }
  function kw(_, e) {
    _.usage = e >>> 0;
  }
  function Mw(_, e) {
    _.vertex = e;
  }
  function Rw(_, e) {
    _.view = e;
  }
  function Cw(_, e) {
    _.view = e;
  }
  function Vw(_, e) {
    _.viewDimension = J_[e];
  }
  function Lw(_, e) {
    _.viewDimension = J_[e];
  }
  function Ew(_, e) {
    _.viewFormats = e;
  }
  function Gw(_, e) {
    _.viewFormats = e;
  }
  function Ow(_, e) {
    _.visibility = e >>> 0;
  }
  function Ww(_, e) {
    _.width = e >>> 0;
  }
  function zw(_, e) {
    _.width = e >>> 0;
  }
  function Uw(_, e) {
    _.width = e >>> 0;
  }
  function Hw(_, e) {
    _.writeMask = e >>> 0;
  }
  function qw(_, e) {
    _.x = e >>> 0;
  }
  function jw(_, e) {
    _.y = e >>> 0;
  }
  function Kw(_, e) {
    _.z = e >>> 0;
  }
  function Nw(_, e, t, r) {
    _.shaderSource(e, T(t, r));
  }
  function Jw(_, e, t, r) {
    _.shaderSource(e, T(t, r));
  }
  function Qw(_) {
    return _.shiftKey;
  }
  function Xw(_, e) {
    const t = e.stack, r = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Yw() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return $(_) ? 0 : P(_);
  }
  function Zw() {
    const _ = typeof global > "u" ? null : global;
    return $(_) ? 0 : P(_);
  }
  function e1() {
    const _ = typeof self > "u" ? null : self;
    return $(_) ? 0 : P(_);
  }
  function _1() {
    const _ = typeof window > "u" ? null : window;
    return $(_) ? 0 : P(_);
  }
  function t1(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function r1(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function n1(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function a1(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function o1(_, e) {
    _.stencilMask(e >>> 0);
  }
  function b1(_, e) {
    _.stencilMask(e >>> 0);
  }
  function c1(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function s1(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function i1(_, e) {
    _.submit(e);
  }
  function f1() {
    return y(function(_, e, t, r, n, a, o, b, c, u) {
      _.texImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function u1() {
    return y(function(_, e, t, r, n, a, o, b, c, u) {
      _.texImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function d1() {
    return y(function(_, e, t, r, n, a, o, b, c, u) {
      _.texImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function g1() {
    return y(function(_, e, t, r, n, a, o, b, c, u, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, b, c >>> 0, u >>> 0, d);
    }, arguments);
  }
  function p1() {
    return y(function(_, e, t, r, n, a, o, b, c, u, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, b, c >>> 0, u >>> 0, d);
    }, arguments);
  }
  function w1(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function l1(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function m1(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function h1(_, e, t, r, n, a, o) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, o);
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
    return y(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function I1() {
    return y(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function F1() {
    return y(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function T1() {
    return y(function(_, e, t, r, n, a, o, b, c, u, d, D) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, D);
    }, arguments);
  }
  function D1() {
    return y(function(_, e, t, r, n, a, o, b, c, u, d, D) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, D);
    }, arguments);
  }
  function B1() {
    return y(function(_, e, t, r, n, a, o, b, c, u, d, D) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, D);
    }, arguments);
  }
  function P1() {
    return y(function(_, e, t, r, n, a, o, b, c, u, d, D) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, D);
    }, arguments);
  }
  function k1() {
    return y(function(_, e, t, r, n, a, o, b, c, u, d, D) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, D);
    }, arguments);
  }
  function M1() {
    return y(function(_, e, t, r, n, a, o, b, c, u, d, D) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, D);
    }, arguments);
  }
  function R1() {
    return y(function(_, e, t, r, n, a, o, b, c, u, d, D) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, D);
    }, arguments);
  }
  function C1(_, e, t) {
    return _.then(e, t);
  }
  function V1(_, e, t) {
    return _.then(e, t);
  }
  function L1(_, e) {
    return _.then(e);
  }
  function E1(_, e, t) {
    _.uniform1f(e, t);
  }
  function G1(_, e, t) {
    _.uniform1f(e, t);
  }
  function O1(_, e, t) {
    _.uniform1i(e, t);
  }
  function W1(_, e, t) {
    _.uniform1i(e, t);
  }
  function z1(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function U1(_, e, t, r) {
    _.uniform2fv(e, O(t, r));
  }
  function H1(_, e, t, r) {
    _.uniform2fv(e, O(t, r));
  }
  function q1(_, e, t, r) {
    _.uniform2iv(e, Z(t, r));
  }
  function j1(_, e, t, r) {
    _.uniform2iv(e, Z(t, r));
  }
  function K1(_, e, t, r) {
    _.uniform2uiv(e, ve(t, r));
  }
  function N1(_, e, t, r) {
    _.uniform3fv(e, O(t, r));
  }
  function J1(_, e, t, r) {
    _.uniform3fv(e, O(t, r));
  }
  function Q1(_, e, t, r) {
    _.uniform3iv(e, Z(t, r));
  }
  function X1(_, e, t, r) {
    _.uniform3iv(e, Z(t, r));
  }
  function Y1(_, e, t, r) {
    _.uniform3uiv(e, ve(t, r));
  }
  function Z1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function el(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function _l(_, e, t, r) {
    _.uniform4fv(e, O(t, r));
  }
  function tl(_, e, t, r) {
    _.uniform4fv(e, O(t, r));
  }
  function rl(_, e, t, r) {
    _.uniform4iv(e, Z(t, r));
  }
  function nl(_, e, t, r) {
    _.uniform4iv(e, Z(t, r));
  }
  function al(_, e, t, r) {
    _.uniform4uiv(e, ve(t, r));
  }
  function ol(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function bl(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, O(r, n));
  }
  function cl(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, O(r, n));
  }
  function sl(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, O(r, n));
  }
  function il(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, O(r, n));
  }
  function fl(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, O(r, n));
  }
  function ul(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, O(r, n));
  }
  function dl(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, O(r, n));
  }
  function gl(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, O(r, n));
  }
  function pl(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, O(r, n));
  }
  function wl(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, O(r, n));
  }
  function ll(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, O(r, n));
  }
  function ml(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, O(r, n));
  }
  function hl(_) {
    _.unmap();
  }
  function yl(_, e) {
    _.useProgram(e);
  }
  function xl(_, e) {
    _.useProgram(e);
  }
  function $l(_) {
    return _.value;
  }
  function vl(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function Sl(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function Al(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function Il(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function Fl(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function Tl(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function Dl(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function Bl(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function Pl(_) {
    return _.width;
  }
  function kl(_) {
    return _.width;
  }
  function Ml() {
    return y(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, u_(r, n), a, o);
    }, arguments);
  }
  function Rl() {
    return y(function(_, e, t, r, n, a) {
      _.writeTexture(e, u_(t, r), n, a);
    }, arguments);
  }
  function Cl(_, e) {
    return ee(_, e, t2);
  }
  function Vl(_, e) {
    return ee(_, e, b2);
  }
  function Ll(_, e) {
    return ee(_, e, s2);
  }
  function El(_, e) {
    return ee(_, e, r2);
  }
  function Gl(_, e) {
    return ee(_, e, n2);
  }
  function Ol(_, e) {
    return ee(_, e, a2);
  }
  function Wl(_, e) {
    return ee(_, e, o2);
  }
  function zl(_, e) {
    return ee(_, e, _2);
  }
  function Ul(_) {
    return _;
  }
  function Hl(_) {
    return _;
  }
  function ql(_, e) {
    return O(_, e);
  }
  function jl(_, e) {
    return S2(_, e);
  }
  function Kl(_, e) {
    return Z(_, e);
  }
  function Nl(_, e) {
    return A2(_, e);
  }
  function Jl(_, e) {
    return I2(_, e);
  }
  function Ql(_, e) {
    return ve(_, e);
  }
  function Xl(_, e) {
    return u_(_, e);
  }
  function Yl(_, e) {
    return T(_, e);
  }
  function Zl(_) {
    return BigInt.asUintN(64, _);
  }
  function e2() {
    const _ = i.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function _2(_, e) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke_______true_(_, e);
  }
  function t2(_, e, t) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_(_, e, t);
  }
  function r2(_, e, t) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true_(_, e, t);
  }
  function n2(_, e, t) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__4(_, e, t);
  }
  function a2(_, e, t) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__5(_, e, t);
  }
  function o2(_, e, t) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__6(_, e, t);
  }
  function b2(_, e, t) {
    const r = i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_(_, e, t);
    if (r[1]) throw I(r[0]);
  }
  function c2(_, e, t, r) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined_______true_(_, e, t, r);
  }
  function s2(_, e, t) {
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
  ], i2 = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], f2 = [
    "uniform",
    "storage",
    "read-only-storage"
  ], u2 = [
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
  ], d2 = [
    "none",
    "front",
    "back"
  ], Ut = [
    "nearest",
    "linear"
  ], g2 = [
    "ccw",
    "cw"
  ], q_ = [
    "uint16",
    "uint32"
  ], j_ = [
    "load",
    "clear"
  ], p2 = [
    "nearest",
    "linear"
  ], w2 = [
    "low-power",
    "high-performance"
  ], l2 = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], m2 = [
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
  ], h2 = [
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
  ], y2 = [
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
  ], x2 = [
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
  ], $2 = [
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
  ], v2 = [
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
    return _ = _ >>> 0, F2().subarray(_ / 4, _ / 4 + e);
  }
  function S2(_, e) {
    return _ = _ >>> 0, D2().subarray(_ / 2, _ / 2 + e);
  }
  function Z(_, e) {
    return _ = _ >>> 0, B2().subarray(_ / 4, _ / 4 + e);
  }
  function A2(_, e) {
    return _ = _ >>> 0, P2().subarray(_ / 1, _ / 1 + e);
  }
  function I2(_, e) {
    return _ = _ >>> 0, k2().subarray(_ / 2, _ / 2 + e);
  }
  function ve(_, e) {
    return _ = _ >>> 0, M2().subarray(_ / 4, _ / 4 + e);
  }
  function u_(_, e) {
    return _ = _ >>> 0, me().subarray(_ / 1, _ / 1 + e);
  }
  let ie = null;
  function C() {
    return (ie === null || ie.buffer.detached === true || ie.buffer.detached === void 0 && ie.buffer !== i.memory.buffer) && (ie = new DataView(i.memory.buffer)), ie;
  }
  let Ge = null;
  function F2() {
    return (Ge === null || Ge.byteLength === 0) && (Ge = new Float32Array(i.memory.buffer)), Ge;
  }
  let Oe = null;
  function T2() {
    return (Oe === null || Oe.byteLength === 0) && (Oe = new Float64Array(i.memory.buffer)), Oe;
  }
  let We = null;
  function D2() {
    return (We === null || We.byteLength === 0) && (We = new Int16Array(i.memory.buffer)), We;
  }
  let ze = null;
  function B2() {
    return (ze === null || ze.byteLength === 0) && (ze = new Int32Array(i.memory.buffer)), ze;
  }
  let Ue = null;
  function P2() {
    return (Ue === null || Ue.byteLength === 0) && (Ue = new Int8Array(i.memory.buffer)), Ue;
  }
  function T(_, e) {
    return C2(_ >>> 0, e);
  }
  let He = null;
  function k2() {
    return (He === null || He.byteLength === 0) && (He = new Uint16Array(i.memory.buffer)), He;
  }
  let qe = null;
  function M2() {
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
    return T2().set(_, t / 8), M = _.length, t;
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
  function I(_) {
    const e = i.__wbindgen_externrefs.get(_);
    return i.__externref_table_dealloc(_), e;
  }
  let b_ = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  b_.decode();
  const R2 = 2146435072;
  let l_ = 0;
  function C2(_, e) {
    return l_ += e, l_ >= R2 && (b_ = new TextDecoder("utf-8", {
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
  function V2(_) {
    i = _;
  }
  URL = globalThis.URL;
  const L2 = await G_({
    "./proteus_host_web_bg.js": {
      __wbg_call_5575218572ead796: Bs,
      __wbg_next_0c4066e251d2eff9: Nd,
      __wbg_done_b62d4a7d2286852a: df,
      __wbg_value_49f783bb59765962: $l,
      __wbg_length_c6054974c0a6cdb9: ed,
      __wbg_get_unchecked_54a4374c38e08460: Iu,
      __wbg_instanceof_Map_afa18d5840c04c15: Ou,
      __wbg_new_typed_00a409eb4ec4f2d9: jd,
      __wbg_then_05edfc8a4fea5106: C1,
      __wbg_get_197a3fe98f169e38: vu,
      __wbg_new_227d7c05414eb861: Wd,
      __wbg_stack_3b0d974bbf31e44f: Xw,
      __wbg_error_a6fa202b58aa1cd3: kf,
      __wbg_push_f724b5db8acf89d2: c0,
      __wbg_call_0e855b388e315e17: Ds,
      __wbg_proteusapp_new: o0,
      __wbg_set_dc601f4a69da0bc2: vg,
      __wbg_call_8e98ed2f3c86c4b5: Ps,
      __wbg_get_with_ref_key_6412cf3094599694: Fu,
      __wbg_set_6be42768c690e380: U0,
      __wbg_String_8564e559799eccda: Sc,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: Eu,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: Fd,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: Td,
      __wbg_maxTextureDimension3D_06ee54121b37d431: Dd,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: Id,
      __wbg_maxBindGroups_14611ac9ed1c6b56: bd,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: cd,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: hd,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: md,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: xd,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: $d,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: Sd,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: Ad,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: Pd,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: Bd,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: vd,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: Rd,
      __wbg_maxBufferSize_f7ce3e1856349d2f: sd,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: kd,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: Md,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: yd,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: Ld,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: Vd,
      __wbg_maxColorAttachments_fd9187f9f786da18: fd,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: id,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: wd,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: ud,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: dd,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: gd,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: pd,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: ld,
      __wbg_description_18d0a6d4077fec8e: nf,
      __wbg_set_dst_factor_1ed75271a89a711e: Og,
      __wbg_set_operation_b5862f5a1a143b30: Up,
      __wbg_set_src_factor_1c4f755f8676df1b: cw,
      __wbg_set_texture_16d2be474ce6ad0c: $w,
      __wbg_set_mip_level_246db61be15bdd69: kp,
      __wbg_set_x_56f0c2c08a62725c: qw,
      __wbg_set_y_04fb8ce84735b4e1: jw,
      __wbg_set_z_a51316db27a4941e: Kw,
      __wbg_set_origin_9b3b0fbe0a5dc469: Hp,
      __wbg_set_aspect_77332ac136ee94eb: eg,
      __wbg_Window_a07901001eb4269f: Ac,
      __wbg_gpu_a7c12045c25d009a: Tu,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: Ic,
      __wbg_set_a_5f6e488475272136: H0,
      __wbg_set_b_688365d692bba214: rg,
      __wbg_set_g_d4d1d77cf8fdd362: rp,
      __wbg_set_r_527e5a41c4b1a846: Jp,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: Lu,
      __wbg_queue_65d985f3e6d786a6: g0,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: jp,
      __wbg_requestAdapter_9ff5c9d1ff271165: v0,
      __wbg_set_required_limits_3b031f66f838f4e3: Xp,
      __wbg_set_required_features_54918de8185c5fab: Qp,
      __wbg_set_label_bae57fb9f24fde5c: gp,
      __wbg_requestDevice_c1c34f88a477e509: I0,
      __wbg_limits_50a8c5e629dbfe40: td,
      __wbg_info_22dcf1fd1b12bc7d: Ru,
      __wbg_set_size_41cd9255ca1e4242: ow,
      __wbg_set_usage_908213a4d4bb8bde: Pw,
      __wbg_set_mapped_at_creation_48de4735fab51e78: Fp,
      __wbg_set_label_cd567b7b35838e4c: lp,
      __wbg_createBuffer_2f08c0205e04efca: ci,
      __wbg_set_address_mode_u_a37cf1035585c638: j0,
      __wbg_set_address_mode_v_8ac049e029caef76: K0,
      __wbg_set_address_mode_w_eb9260ee11729e92: N0,
      __wbg_set_compare_42211fbf15e3b850: yg,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: Sp,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: Ap,
      __wbg_set_mag_filter_69d846b974d4bcc0: Ip,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: Pp,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: Cp,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: Dp,
      __wbg_set_label_dcd98efbb9370da8: hp,
      __wbg_createSampler_248bd67c920af37d: yi,
      __wbg_set_width_1a5e2e86fa5bdcd8: zw,
      __wbg_set_height_e8b5483b8c117d5e: op,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: Pg,
      __wbg_set_format_e9d4b1475bb3bd3b: Zg,
      __wbg_set_size_a61ff22205255d61: bw,
      __wbg_set_usage_7fa9cd18d1104aca: Bw,
      __wbg_set_label_0c1bd0e976cf0a9a: sp,
      __wbg_set_dimension_36e13ccecae5af4b: Gg,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: Rp,
      __wbg_set_sample_count_865e1d19b84e27e6: _w,
      __wbg_set_view_formats_bab284fc81b40e70: Ew,
      __wbg_createTexture_9e76b80a2dc0d12e: Fi,
      __wbg_set_entries_fc76ca4d7da6a709: Ug,
      __wbg_set_layout_eeef59714f5bf48b: $p,
      __wbg_set_label_f92ae11c77d74198: yp,
      __wbg_createBindGroup_2320df4db188406c: oi,
      __wbg_set_code_56e2d45ec1ff6c2d: wg,
      __wbg_set_label_be45aed56e4b9fee: pp,
      __wbg_createShaderModule_53701de4fb271c90: $i,
      __wbg_set_label_d1c24b5a7a3ac31d: mp,
      __wbg_createCommandEncoder_cd88faca35d9ed68: ii,
      __wbg_set_bind_group_layouts_5325d038771af328: bg,
      __wbg_set_label_2f592bd1be3db6b3: up,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: di,
      __wbg_set_module_14e471fdd94c582d: Lp,
      __wbg_set_entry_point_8db3b6d103e3b865: qg,
      __wbg_set_buffers_85a7238f4ef28ab4: dg,
      __wbg_set_layout_7c5ba5bdcde8a0f0: xp,
      __wbg_set_vertex_a4951dd9a7a4ed54: Mw,
      __wbg_set_label_c47c451211e2f6d2: wp,
      __wbg_set_format_f9341112e43ea182: ep,
      __wbg_set_depth_compare_30e9ea552da12fe2: Tg,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: Vg,
      __wbg_set_depth_bias_428c9340b0fd937b: Sg,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: Ag,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: Ig,
      __wbg_set_compare_1509dc1a5420943f: hg,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: Dg,
      __wbg_set_fail_op_77ab26c98f847b65: Kg,
      __wbg_set_pass_op_e9470d1262fb8a8b: qp,
      __wbg_set_stencil_back_6ef4683123b19b25: sw,
      __wbg_set_stencil_front_aeb8580a97e5424b: fw,
      __wbg_set_stencil_read_mask_2954f260d47349ea: dw,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: ww,
      __wbg_set_depth_stencil_1bd50dbc450c8650: Mg,
      __wbg_set_module_08ad08e736d8edbf: Vp,
      __wbg_set_targets_6b0b3bdd87f35668: xw,
      __wbg_set_entry_point_6fec5723cc790927: Hg,
      __wbg_set_fragment_1a595620425637e1: _p,
      __wbg_set_count_26a934d1cd07d080: xg,
      __wbg_set_mask_0c49a66362fc0079: Tp,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: X0,
      __wbg_set_multisample_85f073947b782d07: Ep,
      __wbg_set_cull_mode_9d466c1ab414cac8: $g,
      __wbg_set_front_face_50cdf4eb61504a46: tp,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: yw,
      __wbg_set_topology_beefb3aca0612b00: Aw,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: Tw,
      __wbg_set_primitive_369241acd17871f1: Kp,
      __wbg_createRenderPipeline_f48187ba9f7701e8: li,
      __wbg_set_entries_3017e6132f938c6e: zg,
      __wbg_set_label_1175a3329a06e52b: ip,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: ai,
      __wbg_limits_1c25cb4f379a4418: _d,
      __wbg_set_color_attachments_abe67f6631926e28: lg,
      __wbg_set_label_8fd860a36d2c7b74: dp,
      __wbg_set_view_dbd0294573f64d05: Cw,
      __wbg_set_depth_clear_value_442bf492734f63b6: Fg,
      __wbg_set_depth_load_op_34d430b74bb36d91: Bg,
      __wbg_set_depth_store_op_0ea0a215313dbda7: Cg,
      __wbg_set_depth_read_only_138a11b10c731094: kg,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: iw,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: uw,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: pw,
      __wbg_set_stencil_read_only_fb489d191b6d969b: gw,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: Rg,
      __wbg_set_query_set_18679a8580267d5a: Np,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: og,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: Wg,
      __wbg_set_timestamp_writes_c552d52fbb417005: Sw,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: Qc,
      __wbg_copyTextureToTexture_1be188df1e535c0a: ni,
      __wbg_label_47480289cc2bce71: Yu,
      __wbg_set_label_2d2227f4d5991e50: fp,
      __wbg_finish_cfaeede3baf55be1: Cf,
      __wbg_finish_087cb89c65c06eb1: Rf,
      __wbg_drawIndexed_68637ebab6dd8d6e: $f,
      __wbg_setPipeline_bab24dbce96903b9: L0,
      __wbg_setViewport_f9d423db4f4b4b58: O0,
      __wbg_setBindGroup_4ba56e1e0d26f244: M0,
      __wbg_setBindGroup_6124849cc8547086: R0,
      __wbg_setIndexBuffer_17431786d06c1b7c: C0,
      __wbg_setIndexBuffer_a16ed5b869c87507: V0,
      __wbg_setVertexBuffer_b508baf8d0ffe331: G0,
      __wbg_setVertexBuffer_91c4b602d0289943: E0,
      __wbg_end_414453a89205612c: Tf,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: bu,
      __wbg_getCurrentTexture_51975ae7185fd15f: Zf,
      __wbg_set_device_0d774b66e7288f72: Lg,
      __wbg_set_format_d347899cd860709c: Yg,
      __wbg_set_usage_ae014e77ff77ce06: kw,
      __wbg_set_alpha_mode_92402195b3ae1ee7: Q0,
      __wbg_set_view_formats_fe531a043efb71fa: Gw,
      __wbg_configure_3d64c677c7d68a15: Ys,
      __wbg_writeBuffer_b4bdd36178348ca5: Ml,
      __wbg_set_bytes_per_row_91681ca78d744888: gg,
      __wbg_set_rows_per_image_d198b7e73a38978b: ew,
      __wbg_set_offset_a097a8050a3a9a33: zp,
      __wbg_writeTexture_b45b69132e46a227: Rl,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: e0,
      __wbg_submit_1290d44bb76ecef4: i1,
      __wbg_getMappedRange_5ed22727c9679168: ru,
      __wbg_unmap_8f06698a75b8331a: hl,
      __wbg_destroy_b5b39f25f0799295: af,
      __wbg_mapAsync_bb0029907dd91181: od,
      __wbg_set_dimension_174ad7e2fb67fb4e: Eg,
      __wbg_set_format_90860b0321868db4: Qg,
      __wbg_set_aspect_a823a14d00d42d37: _g,
      __wbg_set_base_array_layer_cc6c68d233489c4b: ng,
      __wbg_set_array_layer_count_daec613068108a9d: Y0,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: ag,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: Mp,
      __wbg_set_label_03d2396d4655a3e1: cp,
      __wbg_set_usage_7f0dda8309469b1c: Dw,
      __wbg_createView_cc96b5bdd3d5bf5e: Bi,
      __wbg_set_format_abf7a1bc5425c56a: Xg,
      __wbg_set_alpha_aa2e606e9e647b21: J0,
      __wbg_set_color_bc393d7efc3c8594: mg,
      __wbg_set_blend_8d6e9c08b5702a09: ig,
      __wbg_set_write_mask_144b25e2bd909124: Hw,
      __wbg_set_load_op_56844f51434037bf: vp,
      __wbg_set_store_op_caeede4654b3d847: hw,
      __wbg_set_view_bdeab150b5f0768c: Rw,
      __wbg_set_clear_value_642701f928a5ccb3: pg,
      __wbg_set_resolve_target_fe76b3f99cf72078: Yp,
      __wbg_set_buffer_55f096330c8912b4: fg,
      __wbg_set_offset_73156b0e0b41d79a: Op,
      __wbg_set_size_1e6281b07cd39177: aw,
      __wbg_set_binding_f3c188a8cd21455b: sg,
      __wbg_set_resource_fe385d2e3dadaf63: Zp,
      __wbg_set_format_6606f5c1fba6f459: Jg,
      __wbg_set_offset_8d9d9afffa18b591: Wp,
      __wbg_set_shader_location_0ff30a733291a396: nw,
      __wbg_set_array_stride_c2c009eabc18b5f6: Z0,
      __wbg_set_attributes_05f9117fd32ca606: tg,
      __wbg_set_step_mode_a35aef328761c452: lw,
      __wbg_set_binding_b6b0fe5c281b8c69: cg,
      __wbg_set_visibility_1bca121a89accba5: Ow,
      __wbg_set_type_c1eebc19f8a6aeb9: Fw,
      __wbg_set_sampler_8c5d7fb1b02058c6: rw,
      __wbg_set_multisampled_40505c1381e1c32c: Gp,
      __wbg_set_external_texture_825fe2bc7a0c0603: jg,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: np,
      __wbg_set_min_binding_size_689661b9ed25e083: Bp,
      __wbg_set_type_38961e08504ca674: Iw,
      __wbg_set_buffer_e89095a9f0cafad3: ug,
      __wbg_set_sample_type_7088b1efddce6a69: tw,
      __wbg_set_view_dimension_3ed01b237e85826f: Lw,
      __wbg_set_texture_e25a73da75cf5808: vw,
      __wbg_set_format_1786adb7bc74c7c9: Ng,
      __wbg_set_access_091f317905cd76a5: q0,
      __wbg_set_view_dimension_263387976511ebc9: Vw,
      __wbg_set_storage_texture_ab9eed9786337ef0: mw,
      __wbg_requestAdapter_c46930b8bc33722d: S0,
      __wbg_includes_83dff8d05da243c5: Mu,
      __wbg_clearBufferuiv_1d2d93401c0904a3: Rs,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: Ns,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: Qs,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: Xs,
      __wbg_copyBufferSubData_a944f33b601b822d: ei,
      __wbg_clientWaitSync_7580165bd2eff461: Ws,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: Js,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: ri,
      __wbg_createQuery_f013132b870a71ef: wi,
      __wbg_createSampler_9fe50152a2524319: xi,
      __wbg_createVertexArray_8685feb21901c932: Di,
      __wbg_deleteQuery_ef51ea0a52420103: Wi,
      __wbg_deleteSampler_5c045e0cc55813d4: Hi,
      __wbg_getIndexedParameter_2b18df6fca85f751: tu,
      __wbg_getQueryParameter_0599e85ddb81220b: uu,
      __wbg_getSyncParameter_9a2bda340ebe166f: hu,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: yu,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: qu,
      __wbg_deleteSync_37ca83c429c43d8a: Ki,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: Xi,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: pf,
      __wbg_drawBuffers_558d96e52e754731: hf,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: xf,
      __wbg_endQuery_161170c5280a8293: Ff,
      __wbg_fenceSync_56efc7cc79111e54: Mf,
      __wbg_framebufferTextureLayer_2312acdc74f97676: Uf,
      __wbg_getBufferSubData_92680d3a2f7be029: Nf,
      __wbg_readBuffer_361ec5474f3aae49: p0,
      __wbg_readPixels_5840000f3e22f3ce: l0,
      __wbg_readPixels_5bf204799ed2272f: m0,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: h0,
      __wbg_texImage3D_8647ef58aef5b912: p1,
      __wbg_texStorage2D_ed5df596c5f1e3af: m1,
      __wbg_texStorage3D_160b0197bc190f04: h1,
      __wbg_texSubImage2D_f03448e182b0820d: F1,
      __wbg_texSubImage2D_d14d9c0a1f627c31: I1,
      __wbg_texSubImage2D_89866a04ecd0a76b: v1,
      __wbg_texSubImage2D_5c630043f1c56716: $1,
      __wbg_samplerParameterf_3157ba41c0f4d97a: T0,
      __wbg_samplerParameteri_f85a29156e790189: D0,
      __wbg_texImage2D_0e0f37b9fb297d01: f1,
      __wbg_texImage2D_0e537dc331652de3: u1,
      __wbg_texImage3D_30dbf7234481b8f5: g1,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: x1,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: S1,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: A1,
      __wbg_texSubImage3D_933e4cd41cc5376d: k1,
      __wbg_texSubImage3D_c3538b28040daac9: R1,
      __wbg_uniform1ui_36c94692177ebf76: z1,
      __wbg_uniform2fv_17592f4dad9798fb: U1,
      __wbg_uniform2iv_d5d29ebbc466977d: j1,
      __wbg_texSubImage3D_0fdbd843482bb916: D1,
      __wbg_texSubImage3D_09a97a968b93253d: T1,
      __wbg_texSubImage3D_355efde0dc047913: B1,
      __wbg_texSubImage3D_bd32c8e29e470904: M1,
      __wbg_texSubImage3D_5a238709d114b609: P1,
      __wbg_uniform2uiv_418ba3bf6a230dd5: K1,
      __wbg_uniform4fv_9e670a001c77dca0: tl,
      __wbg_uniform4iv_1d57c6b8e5c0e447: rl,
      __wbg_uniform3fv_dbe44b778e6b89e8: J1,
      __wbg_uniform3iv_d75d3a5f86d54be4: X1,
      __wbg_uniform3uiv_71c1efc24a662de9: Y1,
      __wbg_uniform4uiv_c5d45f5dbdae727a: al,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: fl,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: dl,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: gl,
      __wbg_uniformBlockBinding_829a71912ad79a04: ol,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: bl,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: sl,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: il,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: pl,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: Al,
      __wbg_activeTexture_525ee3068cb9e8d5: Hc,
      __wbg_attachShader_3477e67517b09b6b: Kc,
      __wbg_bindAttribLocation_79b5d26727094518: Xc,
      __wbg_bindBuffer_d3111de6861cb875: es,
      __wbg_bindFramebuffer_63e837a5dc0accfb: rs,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: ns,
      __wbg_bindTexture_7ab28ff4ff3dc506: bs,
      __wbg_blendColor_15f26633b646e542: fs,
      __wbg_blendEquation_7dadb4db540a42da: ps,
      __wbg_blendEquationSeparate_8240ddfa32266109: ds,
      __wbg_blendFunc_b15af02643e188f1: ys,
      __wbg_blendFuncSeparate_456410f9919bed39: ms,
      __wbg_clear_dadcb3e2929388b0: Gs,
      __wbg_clearDepth_05c17028494ee4dd: Cs,
      __wbg_clearStencil_917833d1e2ac56e4: Es,
      __wbg_colorMask_f111e3e5796458f4: Hs,
      __wbg_compileShader_f5625b583b2c9fd6: qs,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: ll,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: ml,
      __wbg_vertexAttribDivisor_f17a8585267be92f: Sl,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: _i,
      __wbg_createBuffer_9f602b2dbcbf409c: si,
      __wbg_createFramebuffer_4a250944a4542bbc: fi,
      __wbg_createProgram_4c8164d471c10346: gi,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: hi,
      __wbg_createShader_9c5cd42709d915ff: Si,
      __wbg_createTexture_3eed23cb87dd35fc: Ai,
      __wbg_cullFace_94f24b4fd5e9038b: Mi,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: Ci,
      __wbg_getExtension_11824edd67a143d8: _u,
      __wbg_getParameter_7f7f23cae98f2c81: au,
      __wbg_getProgramInfoLog_cd84be80942f345b: su,
      __wbg_getProgramParameter_039391d5ba319f50: iu,
      __wbg_getShaderInfoLog_495bddda98172699: du,
      __wbg_getShaderParameter_4eb65cfb174ceb22: pu,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: lu,
      __wbg_getUniformLocation_ab63f569a4e41744: $u,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: Li,
      __wbg_deleteProgram_eff668280dcb01ca: Oi,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: Ui,
      __wbg_deleteShader_3339454254c7147c: qi,
      __wbg_deleteTexture_c1c58550dc55af5c: Ji,
      __wbg_depthFunc_31b183b5b8ee478e: Yi,
      __wbg_depthMask_cab7f2ae7f0e559c: _f,
      __wbg_depthRange_797a71ba3b79267a: tf,
      __wbg_disable_cb1b3e6c1cee5202: ff,
      __wbg_disableVertexAttribArray_b395358ec5084c39: cf,
      __wbg_drawArrays_42dbb4b0349c8f34: lf,
      __wbg_enable_d1f42f78be33a553: If,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: vf,
      __wbg_flush_7ae42f071230db6b: Vf,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: Of,
      __wbg_framebufferTexture2D_367ab597a005e8d9: Wf,
      __wbg_frontFace_9bdcf2a758e989e5: qf,
      __wbg_linkProgram_e23a348b0f6e0c4f: nd,
      __wbg_pixelStorei_a78a504be58d1d0a: t0,
      __wbg_polygonOffset_a4f07d97b9b0dced: n0,
      __wbg_renderbufferStorage_3049e13db5c4e60e: x0,
      __wbg_scissor_6c024669fbf4fe72: B0,
      __wbg_vertexAttribPointer_4e5d289c5d224210: Fl,
      __wbg_viewport_a0ca330f9b85397e: Tl,
      __wbg_shaderSource_66dce75b25a1a407: Jw,
      __wbg_stencilFuncSeparate_ec603976be9569a4: r1,
      __wbg_stencilMask_485dcb5965c79a71: o1,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: a1,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: c1,
      __wbg_texParameteri_c6efffcecb474d2f: w1,
      __wbg_uniform1f_3acd3f3eb50b5e11: E1,
      __wbg_uniform1i_e4f13604354c28ae: W1,
      __wbg_uniform4f_a5008773cfb47d1a: el,
      __wbg_useProgram_ab2ee2a13a1fd909: xl,
      __wbg_bufferSubData_2270f1b9db71e642: Is,
      __wbg_clearBufferfv_6b77b9402254a2bf: ks,
      __wbg_clearBufferiv_0f056544010eef3e: Ms,
      __wbg_beginQuery_dad334d972fed3cc: Jc,
      __wbg_bindBufferRange_16a9d90becc2a7d7: Zc,
      __wbg_bindSampler_3c7002cb6d56ae8f: os,
      __wbg_bindVertexArray_c391bd47303d75cd: is,
      __wbg_blitFramebuffer_ea96ada8bba07582: xs,
      __wbg_bufferData_64e9905f2b3d3a6f: Ss,
      __wbg_bufferData_99bbbc63f02251c4: As,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: Uu,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: A0,
      __wbg_navigator_935098efd1dc7fe5: Gd,
      __wbg_devicePixelRatio_8e5ca44720abafec: of,
      __wbg_document_2634180a4c694068: uf,
      __wbg_instanceof_Window_0d356b88a2f77c42: Hu,
      __wbg_hidden_cb32701ca3785fea: ku,
      __wbg_getElementById_c7aba6b93b34bf01: eu,
      __wbg_querySelector_1f3658f4b48e268b: f0,
      __wbg_querySelectorAll_ffda3c891a9eb29a: i0,
      __wbg_hasAttribute_73e1230c9c107e79: Du,
      __wbg_setAttribute_8bccfbabf2a83682: k0,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: Kf,
      __wbg_focus_c80921c19b28520b: Ef,
      __wbg_uniform2iv_c5e863975dd780d8: q1,
      __wbg_uniform3fv_7723e142be50856f: N1,
      __wbg_uniform3iv_bea3976522e15d48: Q1,
      __wbg_uniform4fv_85ad5d23234895d2: _l,
      __wbg_clear_ff8cfdf420f7dde6: Os,
      __wbg_clearDepth_ac6b54f112feeaf7: Vs,
      __wbg_clearStencil_56d6a6308294a749: Ls,
      __wbg_colorMask_b0ab9d429a1efa0a: Us,
      __wbg_compileShader_fcf3f3d2891f73f9: js,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: ti,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: bi,
      __wbg_createFramebuffer_ab73f30b5dc97415: ui,
      __wbg_createProgram_f11c63f59f41b82a: pi,
      __wbg_createRenderbuffer_556000dbb01f5026: mi,
      __wbg_createShader_27d9388313f3b14e: vi,
      __wbg_createTexture_8455c703424c567b: Ii,
      __wbg_cullFace_774780fb4177aab8: ki,
      __wbg_deleteBuffer_d758283bea6e0ccf: Vi,
      __wbg_deleteFramebuffer_8953b325144192fe: Ei,
      __wbg_deleteProgram_0135c6926e75af75: Gi,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: zi,
      __wbg_deleteShader_79dbaaed69b7ca3b: ji,
      __wbg_deleteTexture_3acb672a45f9998a: Ni,
      __wbg_depthFunc_eaca1bc79f7bf216: Zi,
      __wbg_depthMask_3a9074b08d1f68e5: ef,
      __wbg_depthRange_c24a808b3496e0a9: rf,
      __wbg_uniform4iv_a9aaa92f2f458ec2: nl,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: cl,
      __wbg_uniformMatrix3fv_da8c388748c5739b: ul,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: wl,
      __wbg_activeTexture_1d5359b20df41710: Uc,
      __wbg_attachShader_683d1070365e7066: Nc,
      __wbg_bindAttribLocation_d56d3c40331af7ed: Yc,
      __wbg_bindBuffer_e95efaf0d4851845: _s,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: ts,
      __wbg_bindRenderbuffer_d608b211c51ed147: as,
      __wbg_bindTexture_ffc56f1e5c5526c6: cs,
      __wbg_blendColor_a0ba1cdcecc3a34c: us,
      __wbg_blendEquation_8bfa69f639ae92da: ws,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: gs,
      __wbg_blendFunc_713c504adab14f98: hs,
      __wbg_blendFuncSeparate_3eef699c291dbc87: ls,
      __wbg_disable_4dca6ee0ccc91e4a: sf,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: bf,
      __wbg_drawArrays_10e1254aa4524ae9: wf,
      __wbg_enable_c6e523307311617a: Af,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: Sf,
      __wbg_flush_eb3fb8da2ec00d57: Lf,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: Gf,
      __wbg_linkProgram_6a2eee02a03b9b00: rd,
      __wbg_pixelStorei_55ad4c67b699537c: _0,
      __wbg_polygonOffset_06dc6468c12a57e1: r0,
      __wbg_renderbufferStorage_2918fb696fd45663: y0,
      __wbg_scissor_f9696c630e464977: P0,
      __wbg_shaderSource_628c37a476ae65f9: Nw,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: t1,
      __wbg_stencilMask_f9fe198f7fd6fc9c: b1,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: n1,
      __wbg_stencilOpSeparate_6cf50803475d2640: s1,
      __wbg_texParameteri_fe6210a493d48a16: l1,
      __wbg_framebufferTexture2D_3a558e14f56720d2: zf,
      __wbg_frontFace_c9bb1fa659ffd276: jf,
      __wbg_getParameter_91a344e1a84a4669: ou,
      __wbg_getProgramInfoLog_35410850de9ccefe: cu,
      __wbg_getProgramParameter_bbc667347ac2e882: fu,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: gu,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: wu,
      __wbg_getUniformLocation_340155dc706d3fea: xu,
      __wbg_uniform1f_d34e4b454f7c8e73: G1,
      __wbg_uniform1i_cd9a7f990128ea48: O1,
      __wbg_uniform4f_4410d2faaa7e5dda: Z1,
      __wbg_useProgram_0e1cd86765304939: yl,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: Il,
      __wbg_viewport_b5bd46a0d111c83c: Dl,
      __wbg_texSubImage2D_1b2ff28f994c325e: y1,
      __wbg_uniform2fv_39277cf2d3cb83c7: H1,
      __wbg_bufferData_5df9bdb32e189eee: vs,
      __wbg_bufferData_26132561617ce8fb: $s,
      __wbg_bufferSubData_44db8a3b4a70b57d: Fs,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: Ks,
      __wbg_readPixels_05377f8b6fa1d8eb: w0,
      __wbg_texImage2D_7bc3001cb8602ed2: d1,
      __wbg_navigator_017bc45e84c473cc: Ed,
      __wbg_log_d282446d03691e72: ad,
      __wbg_info_a392cd5b7536cfb5: Cu,
      __wbg_warn_88c4a5bd9a322000: Bl,
      __wbg_debug_7271beced8b71cd4: Ri,
      __wbg_error_933f449d72fef598: Pf,
      __wbg_error_50f60c611a3dcf64: Bf,
      __wbg_contentRect_0fb8c8900d689a0c: Zs,
      __wbg_width_08e66520b99071f4: Pl,
      __wbg_height_e9afb506f31052a9: Pu,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: Wu,
      __wbg_set_width_f9e631f4ee129e5c: Uw,
      __wbg_set_height_ef298446b359b0c5: bp,
      __wbg_getContext_70c2d1bed75d4122: Xf,
      __wbg_getContext_422b32d0ee4b8076: Jf,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: Hf,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: gf,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: yf,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: vl,
      __wbg_set_width_031bdecd763c5855: Ww,
      __wbg_set_height_ad5056ea051acd78: ap,
      __wbg_getContext_486aab500e1c34c9: Qf,
      __wbg_getContext_9fd4db9b1cf155db: Yf,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: Gu,
      __wbg_addEventListener_ea90bc131475777e: qc,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: ss,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: Ti,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: Qi,
      __wbg_new_1e52e3c919312525: Od,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: mf,
      __wbg_observe_592b94857eed8e27: Qd,
      __wbg_altKey_7412dd64f8c921c7: jc,
      __wbg_ctrlKey_00097886a21597a7: Pi,
      __wbg_shiftKey_273ee8c901267b55: Qw,
      __wbg_metaKey_1c2847b62ad062c1: Cd,
      __wbg_repeat_46a5c90df9f6ef0b: $0,
      __wbg_isComposing_e3709163a95a2477: Ku,
      __wbg_key_d6b3d2cce3d41872: Xu,
      __wbg_code_87bb99fdec02d313: zs,
      __wbg_getModifierState_dae4d71262ea4ecb: nu,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: mu,
      __wbg_width_a86bcd32bd998060: kl,
      __wbg_height_cd732bbdc7b66e49: Bu,
      __wbg_queryCounterEXT_ebb00bcc96221671: s0,
      __wbg_offsetX_0214819d43aaf6d5: Yd,
      __wbg_offsetY_f18f571e33b385ab: Zd,
      __wbg_button_bb3285fcdf965178: Ts,
      __wbg_get_37b48b8fa52d1f2c: Su,
      __wbg_preventDefault_c047d3e292b08cc4: a0,
      __wbg_resolve_d82363d90af6928a: F0,
      __wbg_then_591b6b3a75ee817a: L1,
      __wbg_iterator_cc47ba25a2be735a: Qu,
      __wbg_get_9a29be2cb383ed9a: Au,
      __wbg_next_402fa10b59ab20c3: Jd,
      __wbg_new_2e117a478906f062: zd,
      __wbg_new_36e147a8ced3c6e0: Ud,
      __wbg_of_62183ea089c00bfa: Xd,
      __wbg_isArray_145a34fd0a38d37b: ju,
      __wbg_new_e66a4b7758dd2e5c: qd,
      __wbg_isSafeInteger_a3389a198582f5f6: Nu,
      __wbg_is_de5b366c746e004c: Ju,
      __wbg_entries_c261c3fa1f281256: Df,
      __wbg_then_2a84678a50976959: V1,
      __wbg_length_589238bdcf171f0e: Zu,
      __wbg_prototypesetcall_d721637c7ca66eb8: b0,
      __wbg_set_272b80acaf9a75e8: W0,
      __wbg_new_81880fb5002cb255: Hd,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: Kd,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: Yw,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: e1,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Zw,
      __wbg_static_accessor_WINDOW_168f178805d978fe: _1,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: Vu,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: zu,
      __wbg_queueMicrotask_311744e534a929a3: d0,
      __wbg_queueMicrotask_1c9b3800e321a967: u0,
      __wbg_set_4564f7dc44fcb0c9: z0,
      __wbg___wbindgen_number_get_1cc01dd708740256: Gc,
      __wbg___wbindgen_in_4990f46af709e33c: Bc,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: Wc,
      __wbg___wbindgen_is_null_6d937fbfb6478470: Mc,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: Lc,
      __wbg_Number_c4bdf66bb78f7977: vc,
      __wbg_Error_fdd633d4bb5dd76a: $c,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: Pc,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: Rc,
      __wbg___wbindgen_is_string_1fca8072260dd261: Cc,
      __wbg___wbindgen_string_get_71bb4348194e31f0: Oc,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: Tc,
      __wbg___wbindgen_is_function_acc5528be2b923f2: kc,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: Vc,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: Ec,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: Fc,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: zc,
      __wbg___wbindgen_debug_string_8a447059637473e2: Dc,
      __wbindgen_init_externref_table: e2,
      __wbindgen_cast_0000000000000001: Cl,
      __wbindgen_cast_0000000000000002: Vl,
      __wbindgen_cast_0000000000000003: Ll,
      __wbindgen_cast_0000000000000004: El,
      __wbindgen_cast_0000000000000005: Gl,
      __wbindgen_cast_0000000000000006: Ol,
      __wbindgen_cast_0000000000000007: Wl,
      __wbindgen_cast_0000000000000008: zl,
      __wbindgen_cast_0000000000000009: Ul,
      __wbindgen_cast_000000000000000a: Hl,
      __wbindgen_cast_000000000000000b: ql,
      __wbindgen_cast_000000000000000c: jl,
      __wbindgen_cast_000000000000000d: Kl,
      __wbindgen_cast_000000000000000e: Nl,
      __wbindgen_cast_000000000000000f: Jl,
      __wbindgen_cast_0000000000000010: Ql,
      __wbindgen_cast_0000000000000011: Xl,
      __wbindgen_cast_0000000000000012: Yl,
      __wbindgen_cast_0000000000000013: Zl
    }
  }, yc), { memory: E2, mount: G2, __wbg_proteusapp_free: O2, proteusapp_addChild: W2, proteusapp_animateTo: z2, proteusapp_bakeTexture: U2, proteusapp_bakedImageSize: H2, proteusapp_bakedTextSize: q2, proteusapp_bindKey: j2, proteusapp_channelDestroy: K2, proteusapp_channelSet: N2, proteusapp_clearFocus: J2, proteusapp_clearGlyphCache: Q2, proteusapp_component: X2, proteusapp_copyBakedImageFrom: Y2, proteusapp_createVideo: Z2, proteusapp_cropImage: e4, proteusapp_declareGeometry: _4, proteusapp_declaredGeometry: t4, proteusapp_destroy: r4, proteusapp_devices: n4, proteusapp_expectFont: a4, proteusapp_focus: o4, proteusapp_focused: b4, proteusapp_fontFailed: c4, proteusapp_freeResources: s4, proteusapp_get: i4, proteusapp_hideVideo: f4, proteusapp_inputDevices: u4, proteusapp_inputMode: d4, proteusapp_isFocused: g4, proteusapp_loadFont: p4, proteusapp_loadTexture: w4, proteusapp_measureText: l4, proteusapp_mergeFrom: m4, proteusapp_mergeFromWithBehavior: h4, proteusapp_new: y4, proteusapp_onAppKey: x4, proteusapp_onBlur: $4, proteusapp_onClick: v4, proteusapp_onDrag: S4, proteusapp_onDropped: A4, proteusapp_onFocus: I4, proteusapp_onFocusLost: F4, proteusapp_onHoverEnter: T4, proteusapp_onHoverExit: D4, proteusapp_onKey: B4, proteusapp_onPress: P4, proteusapp_onRelease: k4, proteusapp_onTransitionComplete: M4, proteusapp_pointerLeft: R4, proteusapp_pointerMoved: C4, proteusapp_pointerPressed: V4, proteusapp_pointerReleased: L4, proteusapp_releaseVideo: E4, proteusapp_removeChild: G4, proteusapp_resetKeyMap: O4, proteusapp_setDeclaredGeometry: W4, proteusapp_setDefaultFocus: z4, proteusapp_setDevices: U4, proteusapp_setDisabled: H4, proteusapp_setFallbackFonts: q4, proteusapp_setFocusGroup: j4, proteusapp_setImage: K4, proteusapp_setInputDevices: N4, proteusapp_setInteractive: J4, proteusapp_setKeyRepeat: Q4, proteusapp_setLongPressMs: X4, proteusapp_setNavigatingActions: Y4, proteusapp_setNeighbour: Z4, proteusapp_setOpacity: em, proteusapp_setReadingDirection: _m, proteusapp_setStyle: tm, proteusapp_setStyleTransition: rm, proteusapp_setText: nm, proteusapp_setTexture: am, proteusapp_setTransitionInteraction: om, proteusapp_setVideoCrossfade: bm, proteusapp_setVisible: cm, proteusapp_showVideo: sm, proteusapp_splitTo: im, proteusapp_splitToWithBehavior: fm, proteusapp_splitToWithStates: um, proteusapp_texture: dm, proteusapp_textureState: gm, proteusapp_tick: pm, proteusapp_transitionChannel: wm, proteusapp_unbindKey: lm, proteusapp_uploadVideoFrame: mm, __wbg_handle_free: hm, __wbg_texturehandle_free: ym, __wbg_transitionchannel_free: xm, __wbg_videohandle_free: $m, handle_fromId: vm, handle_id: Sm, texturehandle_fromId: Am, texturehandle_id: Im, __abort_handler: Fm, __instance_terminated: Tm, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___f64______true_: Dm, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_: Bm, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined_______true_: Pm, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_: km, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true_: Mm, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__4: Rm, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__5: Cm, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__6: Vm, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke_______true_: Lm, __wbindgen_malloc: Em, __wbindgen_realloc: Gm, __wbindgen_exn_store: Om, __externref_table_alloc: Wm, __wbindgen_externrefs: zm, __wbindgen_free: Um, __wbindgen_destroy_closure: Hm, __externref_table_dealloc: qm, __wbindgen_start: qt } = L2, jm = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: Fm,
    __externref_table_alloc: Wm,
    __externref_table_dealloc: qm,
    __instance_terminated: Tm,
    __wbg_handle_free: hm,
    __wbg_proteusapp_free: O2,
    __wbg_texturehandle_free: ym,
    __wbg_transitionchannel_free: xm,
    __wbg_videohandle_free: $m,
    __wbindgen_destroy_closure: Hm,
    __wbindgen_exn_store: Om,
    __wbindgen_externrefs: zm,
    __wbindgen_free: Um,
    __wbindgen_malloc: Em,
    __wbindgen_realloc: Gm,
    __wbindgen_start: qt,
    handle_fromId: vm,
    handle_id: Sm,
    memory: E2,
    mount: G2,
    proteusapp_addChild: W2,
    proteusapp_animateTo: z2,
    proteusapp_bakeTexture: U2,
    proteusapp_bakedImageSize: H2,
    proteusapp_bakedTextSize: q2,
    proteusapp_bindKey: j2,
    proteusapp_channelDestroy: K2,
    proteusapp_channelSet: N2,
    proteusapp_clearFocus: J2,
    proteusapp_clearGlyphCache: Q2,
    proteusapp_component: X2,
    proteusapp_copyBakedImageFrom: Y2,
    proteusapp_createVideo: Z2,
    proteusapp_cropImage: e4,
    proteusapp_declareGeometry: _4,
    proteusapp_declaredGeometry: t4,
    proteusapp_destroy: r4,
    proteusapp_devices: n4,
    proteusapp_expectFont: a4,
    proteusapp_focus: o4,
    proteusapp_focused: b4,
    proteusapp_fontFailed: c4,
    proteusapp_freeResources: s4,
    proteusapp_get: i4,
    proteusapp_hideVideo: f4,
    proteusapp_inputDevices: u4,
    proteusapp_inputMode: d4,
    proteusapp_isFocused: g4,
    proteusapp_loadFont: p4,
    proteusapp_loadTexture: w4,
    proteusapp_measureText: l4,
    proteusapp_mergeFrom: m4,
    proteusapp_mergeFromWithBehavior: h4,
    proteusapp_new: y4,
    proteusapp_onAppKey: x4,
    proteusapp_onBlur: $4,
    proteusapp_onClick: v4,
    proteusapp_onDrag: S4,
    proteusapp_onDropped: A4,
    proteusapp_onFocus: I4,
    proteusapp_onFocusLost: F4,
    proteusapp_onHoverEnter: T4,
    proteusapp_onHoverExit: D4,
    proteusapp_onKey: B4,
    proteusapp_onPress: P4,
    proteusapp_onRelease: k4,
    proteusapp_onTransitionComplete: M4,
    proteusapp_pointerLeft: R4,
    proteusapp_pointerMoved: C4,
    proteusapp_pointerPressed: V4,
    proteusapp_pointerReleased: L4,
    proteusapp_releaseVideo: E4,
    proteusapp_removeChild: G4,
    proteusapp_resetKeyMap: O4,
    proteusapp_setDeclaredGeometry: W4,
    proteusapp_setDefaultFocus: z4,
    proteusapp_setDevices: U4,
    proteusapp_setDisabled: H4,
    proteusapp_setFallbackFonts: q4,
    proteusapp_setFocusGroup: j4,
    proteusapp_setImage: K4,
    proteusapp_setInputDevices: N4,
    proteusapp_setInteractive: J4,
    proteusapp_setKeyRepeat: Q4,
    proteusapp_setLongPressMs: X4,
    proteusapp_setNavigatingActions: Y4,
    proteusapp_setNeighbour: Z4,
    proteusapp_setOpacity: em,
    proteusapp_setReadingDirection: _m,
    proteusapp_setStyle: tm,
    proteusapp_setStyleTransition: rm,
    proteusapp_setText: nm,
    proteusapp_setTexture: am,
    proteusapp_setTransitionInteraction: om,
    proteusapp_setVideoCrossfade: bm,
    proteusapp_setVisible: cm,
    proteusapp_showVideo: sm,
    proteusapp_splitTo: im,
    proteusapp_splitToWithBehavior: fm,
    proteusapp_splitToWithStates: um,
    proteusapp_texture: dm,
    proteusapp_textureState: gm,
    proteusapp_tick: pm,
    proteusapp_transitionChannel: wm,
    proteusapp_unbindKey: lm,
    proteusapp_uploadVideoFrame: mm,
    texturehandle_fromId: Am,
    texturehandle_id: Im,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke_______true_: Lm,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___f64______true_: Dm,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true_: Mm,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__4: Rm,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__5: Cm,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__6: Vm,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined_______true_: Pm,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_: km,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_: Bm
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  V2(jm);
  qt();
  async function Km(_, e) {
    var _a3;
    const t = e.config ?? {}, r = ((_a3 = t.text) == null ? void 0 : _a3.font) ?? await Nm();
    await xc(_, (n) => e.setup(new Xm(n)), e.update ? (n) => {
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
  async function Nm() {
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
      this.app.wasmApp.setImage(this.wasmHandle, Kt(e));
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
  }, Jm = class {
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
  }, Qm = class {
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
  }, Xm = class {
    constructor(e) {
      this.wasmApp = e ?? new F_();
    }
    component(e) {
      const t = e.image && Kt(e.image);
      return new m_(this, this.wasmApp.component(t ? {
        ...e,
        image: t
      } : e));
    }
    handleFromId(e) {
      return new m_(this, h.fromId(e));
    }
    transitionChannel(e) {
      return new Jm(this, this.wasmApp.transitionChannel(e == null ? void 0 : e.id()));
    }
    texture(e) {
      return new Je(this, this.wasmApp.texture(e));
    }
    loadTexture(e, t) {
      const r = this.wasmApp.loadTexture(e, t ?? null);
      return r ? new Je(this, r) : void 0;
    }
    bakeTexture(e, t, r, n) {
      return new Je(this, this.wasmApp.bakeTexture(e, t, jt(r), n ?? null));
    }
    createVideo() {
      return new Qm(this, this.wasmApp.createVideo());
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
    measureText(e) {
      return this.wasmApp.measureText(e);
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
  function jt(_) {
    return _ instanceof Uint8Array ? _ : new Uint8Array(_.buffer, _.byteOffset, _.byteLength);
  }
  function Kt(_) {
    return _.pixels ? {
      ..._,
      pixels: jt(_.pixels)
    } : _;
  }
  const Ym = "" + new URL("proteus_bench_web_bg-DzFpYYX7.wasm", import.meta.url).href;
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
  class De {
    static __wrap(e) {
      const t = Object.create(De.prototype);
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
      if (r[1]) throw F(r[0]);
    }
    animateTo(e, t, r) {
      w(e, l);
      const n = s.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw F(n[0]);
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
      if (a[1]) throw F(a[0]);
    }
    channelDestroy(e) {
      w(e, X);
      var t = e.__destroy_into_raw();
      s.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      w(e, X), w(t, l), w(r, l);
      const o = s.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (o[1]) throw F(o[0]);
    }
    clearFocus() {
      s.proteusapp_clearFocus(this.__wbg_ptr);
    }
    clearGlyphCache() {
      s.proteusapp_clearGlyphCache(this.__wbg_ptr);
    }
    component(e) {
      const t = s.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw F(t[1]);
      return l.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      w(e, l), w(t, l);
      const r = s.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = s.proteusapp_createVideo(this.__wbg_ptr);
      return Y.__wrap(e);
    }
    cropImage(e, t) {
      w(e, l);
      const r = s.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      w(e, l);
      const r = s.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    declaredGeometry(e) {
      return w(e, l), s.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      w(e, l);
      var t = e.__destroy_into_raw();
      const r = s.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    devices(e) {
      return w(e, l), s.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    expectFont(e, t) {
      const r = E(e, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B, a = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), o = B, b = s.proteusapp_expectFont(this.__wbg_ptr, r, n, a, o);
      if (b[1]) throw F(b[0]);
    }
    focus(e) {
      w(e, l);
      const t = s.proteusapp_focus(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
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
      if (t[1]) throw F(t[0]);
    }
    get(e) {
      return w(e, l), s.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      w(e, l);
      const t = s.proteusapp_hideVideo(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
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
        if (c[3]) throw n = 0, a = 0, F(c[2]);
        return t = n, r = a, S(n, a);
      } finally {
        s.__wbindgen_free(t, r, 1);
      }
    }
    loadTexture(e, t) {
      const r = n_(e, s.__wbindgen_malloc), n = B, a = s.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : N.__wrap(a);
    }
    measureText(e) {
      const t = s.proteusapp_measureText(this.__wbg_ptr, e);
      if (t[2]) throw F(t[1]);
      return F(t[0]);
    }
    mergeFrom(e, t, r, n) {
      w(e, l);
      const a = a_(t, s.__wbindgen_malloc), o = B, b = s.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (b[1]) throw F(b[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      w(e, l);
      const o = a_(t, s.__wbindgen_malloc), b = B, c = s.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, b, r, n, a);
      if (c[1]) throw F(c[0]);
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
      if (r[1]) throw F(r[0]);
    }
    resetKeyMap() {
      s.proteusapp_resetKeyMap(this.__wbg_ptr);
    }
    setDeclaredGeometry(e, t) {
      w(e, l);
      const r = s.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDefaultFocus(e, t) {
      w(e, l);
      const r = s.proteusapp_setDefaultFocus(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDevices(e, t) {
      w(e, l);
      const r = s.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDisabled(e, t) {
      w(e, l);
      const r = s.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setFallbackFonts(e) {
      const t = Tt(e, s.__wbindgen_malloc), r = B;
      s.proteusapp_setFallbackFonts(this.__wbg_ptr, t, r);
    }
    setFocusGroup(e, t) {
      w(e, l);
      const r = s.proteusapp_setFocusGroup(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setImage(e, t) {
      w(e, l);
      const r = s.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setInputDevices(e) {
      const t = s.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw F(t[0]);
    }
    setInteractive(e, t) {
      w(e, l);
      const r = s.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setKeyRepeat(e) {
      const t = s.proteusapp_setKeyRepeat(this.__wbg_ptr, e);
      if (t[1]) throw F(t[0]);
    }
    setLongPressMs(e) {
      s.proteusapp_setLongPressMs(this.__wbg_ptr, e);
    }
    setNavigatingActions(e) {
      const t = Tt(e, s.__wbindgen_malloc), r = B;
      s.proteusapp_setNavigatingActions(this.__wbg_ptr, t, r);
    }
    setNeighbour(e, t, r) {
      w(e, l);
      const n = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), a = B, o = s.proteusapp_setNeighbour(this.__wbg_ptr, e.__wbg_ptr, n, a, !v(r), v(r) ? 0 : r);
      if (o[1]) throw F(o[0]);
    }
    setOpacity(e, t) {
      w(e, l);
      const r = s.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setReadingDirection(e) {
      const t = E(e, s.__wbindgen_malloc, s.__wbindgen_realloc), r = B, n = s.proteusapp_setReadingDirection(this.__wbg_ptr, t, r);
      if (n[1]) throw F(n[0]);
    }
    setStyle(e, t, r) {
      w(e, l);
      const n = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), a = B, o = s.proteusapp_setStyle(this.__wbg_ptr, e.__wbg_ptr, n, a, r);
      if (o[1]) throw F(o[0]);
    }
    setStyleTransition(e, t) {
      w(e, l);
      const r = s.proteusapp_setStyleTransition(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setText(e, t) {
      w(e, l);
      const r = s.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setTexture(e, t) {
      w(e, l), w(t, N);
      const r = s.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      w(e, l);
      const r = s.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setVideoCrossfade(e, t) {
      w(e, l);
      const r = s.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      w(e, l);
      const r = s.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    showVideo(e, t) {
      w(e, l), w(t, Y);
      const r = s.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      w(e, l);
      const a = a_(t, s.__wbindgen_malloc), o = B, b = s.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (b[1]) throw F(b[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      w(e, l);
      const o = a_(t, s.__wbindgen_malloc), b = B, c = s.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, b, r, n, a);
      if (c[1]) throw F(c[0]);
    }
    splitToWithStates(e, t, r, n) {
      w(e, l);
      const a = s.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw F(a[0]);
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
      if (t[3]) throw F(t[2]);
      let r;
      return t[0] !== 0 && (r = S(t[0], t[1]).slice(), s.__wbindgen_free(t[0], t[1] * 1, 1)), r;
    }
    uploadVideoFrame(e, t, r, n) {
      w(e, Y);
      const a = n_(n, s.__wbindgen_malloc), o = B;
      return s.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, o) !== 0;
    }
  }
  Symbol.dispose && (De.prototype[Symbol.dispose] = De.prototype.free);
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
  function Zm() {
    s.clear();
  }
  function e6(_) {
    s.on_frame(_);
  }
  function _6(_, e) {
    const t = E(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = B;
    s.show(t, r, e);
  }
  function t6(_, e) {
    const t = E(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = B;
    return s.start(t, r, e);
  }
  function r6() {
    s.stop_frames();
  }
  function n6(_, e) {
    return Error(S(_, e));
  }
  function a6(_) {
    return Number(_);
  }
  function o6(_, e) {
    const t = String(e), r = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function b6(_) {
    return _.Window;
  }
  function c6(_) {
    return _.WorkerGlobalScope;
  }
  function s6(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    R().setBigInt64(_ + 8, v(r) ? BigInt(0) : r, true), R().setInt32(_ + 0, !v(r), true);
  }
  function i6(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return v(t) ? 16777215 : t ? 1 : 0;
  }
  function f6(_, e) {
    const t = R_(e), r = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function u6(_, e) {
    return _ in e;
  }
  function d6(_) {
    return typeof _ == "bigint";
  }
  function g6(_) {
    return typeof _ == "function";
  }
  function p6(_) {
    return _ === null;
  }
  function w6(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function l6(_) {
    return typeof _ == "string";
  }
  function m6(_) {
    return _ === void 0;
  }
  function h6(_, e) {
    return _ === e;
  }
  function y6(_, e) {
    return _ == e;
  }
  function x6(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    R().setFloat64(_ + 8, v(r) ? 0 : r, true), R().setInt32(_ + 0, !v(r), true);
  }
  function $6(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = v(r) ? 0 : E(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = B;
    R().setInt32(_ + 4, a, true), R().setInt32(_ + 0, n, true);
  }
  function v6(_, e) {
    throw new Error(S(_, e));
  }
  function S6(_) {
    _._wbg_cb_unref();
  }
  function A6(_) {
    _.abort();
  }
  function I6(_) {
    return _.aborted;
  }
  function F6(_, e) {
    _.activeTexture(e >>> 0);
  }
  function T6(_, e) {
    _.activeTexture(e >>> 0);
  }
  function D6() {
    return m(function(_, e, t, r) {
      _.addEventListener(S(e, t), r);
    }, arguments);
  }
  function B6(_) {
    return _.altKey;
  }
  function P6() {
    return m(function(_) {
      return _.arrayBuffer();
    }, arguments);
  }
  function k6(_, e, t) {
    _.attachShader(e, t);
  }
  function M6(_, e, t) {
    _.attachShader(e, t);
  }
  function R6(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function C6() {
    return m(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function V6(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function L6(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function E6(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function G6(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function O6(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function W6(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function z6(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function U6(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function H6(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function q6(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function j6(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function K6(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function N6(_, e) {
    _.bindVertexArrayOES(e);
  }
  function J6(_, e) {
    _.bindVertexArray(e);
  }
  function Q6(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function X6(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Y6(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Z6(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function e3(_, e) {
    _.blendEquation(e >>> 0);
  }
  function _3(_, e) {
    _.blendEquation(e >>> 0);
  }
  function t3(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function r3(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function n3(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function a3(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function o3(_, e, t, r, n, a, o, b, c, u, d) {
    _.blitFramebuffer(e, t, r, n, a, o, b, c, u >>> 0, d >>> 0);
  }
  function b3(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function c3(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function s3(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function i3(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function f3(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function u3(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function d3(_) {
    return _.button;
  }
  function g3() {
    return m(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function p3() {
    return m(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function w3() {
    return m(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function l3(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, W(r, n));
  }
  function m3(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, _e(r, n));
  }
  function h3(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, Se(r, n));
  }
  function y3(_, e) {
    _.clearDepth(e);
  }
  function x3(_, e) {
    _.clearDepth(e);
  }
  function $3(_, e) {
    _.clearStencil(e);
  }
  function v3(_, e) {
    _.clearStencil(e);
  }
  function S3(_, e) {
    _.clear(e >>> 0);
  }
  function A3(_, e) {
    _.clear(e >>> 0);
  }
  function I3(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function F3(_, e) {
    const t = e.code, r = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function T3(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function D3(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function B3(_, e) {
    _.compileShader(e);
  }
  function P3(_, e) {
    _.compileShader(e);
  }
  function k3(_, e, t, r, n, a, o, b, c) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c);
  }
  function M3(_, e, t, r, n, a, o, b, c) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c);
  }
  function R3(_, e, t, r, n, a, o, b, c, u) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c, u);
  }
  function C3(_, e, t, r, n, a, o, b, c, u, d, D) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d, D);
  }
  function V3(_, e, t, r, n, a, o, b, c, u, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d);
  }
  function L3() {
    return m(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function E3(_) {
    return _.contentRect;
  }
  function G3(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function O3(_, e, t, r, n, a, o, b, c) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, b, c);
  }
  function W3(_, e, t, r, n, a, o, b, c) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, b, c);
  }
  function z3(_, e, t, r, n, a, o, b, c, u) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, o, b, c, u);
  }
  function U3() {
    return m(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function H3() {
    return m(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function q3(_, e) {
    return _.createBindGroup(e);
  }
  function j3(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : k(e);
  }
  function K3() {
    return m(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function N3(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : k(e);
  }
  function J3(_, e) {
    return _.createCommandEncoder(e);
  }
  function Q3(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : k(e);
  }
  function X3(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : k(e);
  }
  function Y3(_, e) {
    return _.createPipelineLayout(e);
  }
  function Z3(_) {
    const e = _.createProgram();
    return v(e) ? 0 : k(e);
  }
  function e5(_) {
    const e = _.createProgram();
    return v(e) ? 0 : k(e);
  }
  function _5(_) {
    const e = _.createQuery();
    return v(e) ? 0 : k(e);
  }
  function t5() {
    return m(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function r5(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : k(e);
  }
  function n5(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : k(e);
  }
  function a5(_, e) {
    return _.createSampler(e);
  }
  function o5(_) {
    const e = _.createSampler();
    return v(e) ? 0 : k(e);
  }
  function b5(_, e) {
    return _.createShaderModule(e);
  }
  function c5(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : k(t);
  }
  function s5(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : k(t);
  }
  function i5(_) {
    const e = _.createTexture();
    return v(e) ? 0 : k(e);
  }
  function f5(_) {
    const e = _.createTexture();
    return v(e) ? 0 : k(e);
  }
  function u5() {
    return m(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function d5(_) {
    const e = _.createVertexArrayOES();
    return v(e) ? 0 : k(e);
  }
  function g5(_) {
    const e = _.createVertexArray();
    return v(e) ? 0 : k(e);
  }
  function p5() {
    return m(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function w5(_) {
    return _.ctrlKey;
  }
  function l5(_, e) {
    _.cullFace(e >>> 0);
  }
  function m5(_, e) {
    _.cullFace(e >>> 0);
  }
  function h5(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function y5(_, e) {
    _.deleteBuffer(e);
  }
  function x5(_, e) {
    _.deleteBuffer(e);
  }
  function $5(_, e) {
    _.deleteFramebuffer(e);
  }
  function v5(_, e) {
    _.deleteFramebuffer(e);
  }
  function S5(_, e) {
    _.deleteProgram(e);
  }
  function A5(_, e) {
    _.deleteProgram(e);
  }
  function I5(_, e) {
    _.deleteQuery(e);
  }
  function F5(_, e) {
    _.deleteRenderbuffer(e);
  }
  function T5(_, e) {
    _.deleteRenderbuffer(e);
  }
  function D5(_, e) {
    _.deleteSampler(e);
  }
  function B5(_, e) {
    _.deleteShader(e);
  }
  function P5(_, e) {
    _.deleteShader(e);
  }
  function k5(_, e) {
    _.deleteSync(e);
  }
  function M5(_, e) {
    _.deleteTexture(e);
  }
  function R5(_, e) {
    _.deleteTexture(e);
  }
  function C5(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function V5(_, e) {
    _.deleteVertexArray(e);
  }
  function L5(_, e) {
    _.depthFunc(e >>> 0);
  }
  function E5(_, e) {
    _.depthFunc(e >>> 0);
  }
  function G5(_, e) {
    _.depthMask(e !== 0);
  }
  function O5(_, e) {
    _.depthMask(e !== 0);
  }
  function W5(_, e, t) {
    _.depthRange(e, t);
  }
  function z5(_, e, t) {
    _.depthRange(e, t);
  }
  function U5(_, e) {
    const t = e.description, r = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function H5(_) {
    _.destroy();
  }
  function q5(_) {
    return _.devicePixelRatio;
  }
  function j5(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function K5(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function N5(_, e) {
    _.disable(e >>> 0);
  }
  function J5(_, e) {
    _.disable(e >>> 0);
  }
  function Q5(_) {
    const e = _.document;
    return v(e) ? 0 : k(e);
  }
  function X5(_) {
    return _.done;
  }
  function Y5(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function Z5(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function e8(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function _8(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function t8(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function r8(_, e) {
    _.drawBuffers(e);
  }
  function n8(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function a8(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function o8(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function b8(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function c8(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function s8(_, e) {
    _.enable(e >>> 0);
  }
  function i8(_, e) {
    _.enable(e >>> 0);
  }
  function f8(_, e) {
    _.endQuery(e >>> 0);
  }
  function u8(_) {
    _.end();
  }
  function d8(_) {
    return Object.entries(_);
  }
  function g8(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function p8(_) {
    console.error(_);
  }
  function w8(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(S(_, e));
    } finally {
      s.__wbindgen_free(t, r, 1);
    }
  }
  function l8(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return v(r) ? 0 : k(r);
  }
  function m8(_, e, t) {
    return _.fetch(S(e, t));
  }
  function h8(_, e, t, r) {
    return _.fetch(S(e, t), r);
  }
  function y8(_) {
    return _.finish();
  }
  function x8(_, e) {
    return _.finish(e);
  }
  function $8(_) {
    _.flush();
  }
  function v8(_) {
    _.flush();
  }
  function S8() {
    return m(function(_) {
      _.focus();
    }, arguments);
  }
  function A8(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function I8(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function F8(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function T8(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function D8(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function B8(_, e, t, r, n, a, o) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, o);
  }
  function P8(_, e) {
    _.frontFace(e >>> 0);
  }
  function k8(_, e) {
    _.frontFace(e >>> 0);
  }
  function M8(_) {
    return _.getBoundingClientRect();
  }
  function R8(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function C8() {
    return m(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : k(n);
    }, arguments);
  }
  function V8() {
    return m(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : k(r);
    }, arguments);
  }
  function L8() {
    return m(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : k(r);
    }, arguments);
  }
  function E8() {
    return m(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : k(n);
    }, arguments);
  }
  function G8() {
    return m(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function O8(_, e, t) {
    const r = _.getElementById(S(e, t));
    return v(r) ? 0 : k(r);
  }
  function W8() {
    return m(function(_, e, t) {
      const r = _.getExtension(S(e, t));
      return v(r) ? 0 : k(r);
    }, arguments);
  }
  function z8() {
    return m(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function U8() {
    return m(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function H8(_, e, t) {
    return _.getModifierState(S(e, t));
  }
  function q8() {
    return m(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function j8() {
    return m(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function K8(_) {
    const e = _.getPreferredCanvasFormat();
    return (ce.indexOf(e) + 1 || 96) - 1;
  }
  function N8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : E(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = B;
    R().setInt32(_ + 4, a, true), R().setInt32(_ + 0, n, true);
  }
  function J8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : E(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = B;
    R().setInt32(_ + 4, a, true), R().setInt32(_ + 0, n, true);
  }
  function Q8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function X8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function Y8(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function Z8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : E(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = B;
    R().setInt32(_ + 4, a, true), R().setInt32(_ + 0, n, true);
  }
  function e9(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : E(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = B;
    R().setInt32(_ + 4, a, true), R().setInt32(_ + 0, n, true);
  }
  function _9(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function t9(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function r9(_) {
    const e = _.getSupportedExtensions();
    return v(e) ? 0 : k(e);
  }
  function n9(_) {
    const e = _.getSupportedProfiles();
    return v(e) ? 0 : k(e);
  }
  function a9(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function o9(_, e, t, r) {
    return _.getUniformBlockIndex(e, S(t, r));
  }
  function b9(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : k(n);
  }
  function c9(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : k(n);
  }
  function s9(_, e) {
    return _[e >>> 0];
  }
  function i9(_, e) {
    const t = _[e >>> 0];
    return v(t) ? 0 : k(t);
  }
  function f9() {
    return m(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function u9(_, e) {
    return _[e >>> 0];
  }
  function d9(_, e) {
    return _[e];
  }
  function g9(_) {
    return _.gpu;
  }
  function p9(_, e, t) {
    return _.hasAttribute(S(e, t));
  }
  function w9(_) {
    return _.height;
  }
  function l9(_) {
    return _.height;
  }
  function m9(_) {
    return _.hidden;
  }
  function h9(_, e, t) {
    return _.includes(e, t);
  }
  function y9(_) {
    return _.info;
  }
  function x9(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function $9(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function v9(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function S9(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function A9(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function I9(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function F9(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function T9(_) {
    let e;
    try {
      e = _ instanceof Response;
    } catch {
      e = false;
    }
    return e;
  }
  function D9(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function B9(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function P9(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function k9() {
    return m(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function M9(_) {
    return Array.isArray(_);
  }
  function R9(_) {
    return _.isComposing;
  }
  function C9(_) {
    return Number.isSafeInteger(_);
  }
  function V9(_, e) {
    return Object.is(_, e);
  }
  function L9() {
    return Symbol.iterator;
  }
  function E9(_, e) {
    const t = e.key, r = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function G9(_, e) {
    const t = e.label, r = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function O9(_) {
    return _.length;
  }
  function W9(_) {
    return _.length;
  }
  function z9(_) {
    return _.limits;
  }
  function U9(_) {
    return _.limits;
  }
  function H9(_, e) {
    _.linkProgram(e);
  }
  function q9(_, e) {
    _.linkProgram(e);
  }
  function j9(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function K9(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function N9(_) {
    return _.maxBindGroups;
  }
  function J9(_) {
    return _.maxBindingsPerBindGroup;
  }
  function Q9(_) {
    return _.maxBufferSize;
  }
  function X9(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function Y9(_) {
    return _.maxColorAttachments;
  }
  function Z9(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function e7(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function _7(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function t7(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function r7(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function n7(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function a7(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function o7(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function b7(_) {
    return _.maxInterStageShaderVariables;
  }
  function c7(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function s7(_) {
    return _.maxSamplersPerShaderStage;
  }
  function i7(_) {
    return _.maxStorageBufferBindingSize;
  }
  function f7(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function u7(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function d7(_) {
    return _.maxTextureArrayLayers;
  }
  function g7(_) {
    return _.maxTextureDimension1D;
  }
  function p7(_) {
    return _.maxTextureDimension2D;
  }
  function w7(_) {
    return _.maxTextureDimension3D;
  }
  function l7(_) {
    return _.maxUniformBufferBindingSize;
  }
  function m7(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function h7(_) {
    return _.maxVertexAttributes;
  }
  function y7(_) {
    return _.maxVertexBufferArrayStride;
  }
  function x7(_) {
    return _.maxVertexBuffers;
  }
  function $7(_) {
    return _.metaKey;
  }
  function v7(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function S7(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function A7(_) {
    return _.navigator;
  }
  function I7(_) {
    return _.navigator;
  }
  function F7() {
    return m(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function T7() {
    return new Error();
  }
  function D7() {
    return new Object();
  }
  function B7() {
    return new Array();
  }
  function P7() {
    return m(function() {
      return new AbortController();
    }, arguments);
  }
  function k7(_) {
    return new Uint8Array(_);
  }
  function M7(_, e) {
    return new Error(S(_, e));
  }
  function R7(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, o) => {
        const b = t.a;
        t.a = 0;
        try {
          return rA(b, t.b, a, o);
        } finally {
          t.a = b;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function C7(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function V7() {
    return m(function(_) {
      return _.next();
    }, arguments);
  }
  function L7(_) {
    return _.next;
  }
  function E7(_) {
    return _.now();
  }
  function G7(_, e) {
    _.observe(e);
  }
  function O7(_) {
    return Array.of(_);
  }
  function W7(_) {
    return _.offsetX;
  }
  function z7(_) {
    return _.offsetY;
  }
  function U7(_) {
    return _.ok;
  }
  function H7(_) {
    return _.onSubmittedWorkDone();
  }
  function q7(_) {
    const e = _.performance;
    return v(e) ? 0 : k(e);
  }
  function j7(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function K7(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function N7(_, e, t) {
    _.polygonOffset(e, t);
  }
  function J7(_, e, t) {
    _.polygonOffset(e, t);
  }
  function Q7(_) {
    _.preventDefault();
  }
  function X7(_) {
    return De.__wrap(_);
  }
  function Y7(_, e, t) {
    Uint8Array.prototype.set.call(d_(_, e), t);
  }
  function Z7(_, e) {
    return _.push(e);
  }
  function eh(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function _h() {
    return m(function(_, e, t) {
      return _.querySelectorAll(S(e, t));
    }, arguments);
  }
  function th() {
    return m(function(_, e, t) {
      const r = _.querySelector(S(e, t));
      return v(r) ? 0 : k(r);
    }, arguments);
  }
  function rh(_) {
    return _.queueMicrotask;
  }
  function nh(_) {
    queueMicrotask(_);
  }
  function ah(_) {
    return _.queue;
  }
  function oh(_, e) {
    _.readBuffer(e >>> 0);
  }
  function bh() {
    return m(function(_, e, t, r, n, a, o, b) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, b);
    }, arguments);
  }
  function ch() {
    return m(function(_, e, t, r, n, a, o, b) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, b);
    }, arguments);
  }
  function sh() {
    return m(function(_, e, t, r, n, a, o, b) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, b);
    }, arguments);
  }
  function ih(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function fh(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function uh(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function dh(_) {
    return _.repeat;
  }
  function gh(_, e) {
    return _.requestAdapter(e);
  }
  function ph(_) {
    return _.requestAdapter();
  }
  function wh() {
    return m(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function lh(_, e) {
    return _.requestDevice(e);
  }
  function mh(_) {
    return Promise.resolve(_);
  }
  function hh(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function yh(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function xh(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function $h(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function vh() {
    return m(function(_, e, t, r, n) {
      _.setAttribute(S(e, t), S(r, n));
    }, arguments);
  }
  function Sh() {
    return m(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, Se(r, n), a, o >>> 0);
    }, arguments);
  }
  function Ah(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function Ih(_, e, t, r, n) {
    _.setIndexBuffer(e, Y_[t], r, n);
  }
  function Fh(_, e, t, r) {
    _.setIndexBuffer(e, Y_[t], r);
  }
  function Th(_, e) {
    _.setPipeline(e);
  }
  function Dh(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function Bh(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function Ph(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
  }
  function kh(_, e, t) {
    _.set(e, t >>> 0);
  }
  function Mh() {
    return m(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function Rh(_, e, t) {
    _[e] = t;
  }
  function Ch(_, e) {
    _.a = e;
  }
  function Vh(_, e) {
    _.access = gA[e];
  }
  function Lh(_, e) {
    _.addressModeU = Q_[e];
  }
  function Eh(_, e) {
    _.addressModeV = Q_[e];
  }
  function Gh(_, e) {
    _.addressModeW = Q_[e];
  }
  function Oh(_, e) {
    _.alpha = e;
  }
  function Wh(_, e) {
    _.alphaMode = bA[e];
  }
  function zh(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function Uh(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function Hh(_, e) {
    _.arrayStride = e;
  }
  function qh(_, e) {
    _.aspect = Qt[e];
  }
  function jh(_, e) {
    _.aspect = Qt[e];
  }
  function Kh(_, e) {
    _.attributes = e;
  }
  function Nh(_, e) {
    _.b = e;
  }
  function Jh(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function Qh(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function Xh(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function Yh(_, e) {
    _.bindGroupLayouts = e;
  }
  function Zh(_, e) {
    _.binding = e >>> 0;
  }
  function ey(_, e) {
    _.binding = e >>> 0;
  }
  function _y(_, e) {
    _.blend = e;
  }
  function ty(_, e) {
    _.buffer = e;
  }
  function ry(_, e) {
    _.buffer = e;
  }
  function ny(_, e) {
    _.buffers = e;
  }
  function ay(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function oy(_, e) {
    _.clearValue = e;
  }
  function by(_, e, t) {
    _.code = S(e, t);
  }
  function cy(_, e) {
    _.colorAttachments = e;
  }
  function sy(_, e) {
    _.color = e;
  }
  function iy(_, e) {
    _.compare = X_[e];
  }
  function fy(_, e) {
    _.compare = X_[e];
  }
  function uy(_, e) {
    _.count = e >>> 0;
  }
  function dy(_, e) {
    _.cullMode = cA[e];
  }
  function gy(_, e, t) {
    _[e >>> 0] = t;
  }
  function py(_, e) {
    _.depthBias = e;
  }
  function wy(_, e) {
    _.depthBiasClamp = e;
  }
  function ly(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function my(_, e) {
    _.depthClearValue = e;
  }
  function hy(_, e) {
    _.depthCompare = X_[e];
  }
  function yy(_, e) {
    _.depthFailOp = et[e];
  }
  function xy(_, e) {
    _.depthLoadOp = Z_[e];
  }
  function $y(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function vy(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function Sy(_, e) {
    _.depthStencil = e;
  }
  function Ay(_, e) {
    _.depthStencilAttachment = e;
  }
  function Iy(_, e) {
    _.depthStoreOp = _t[e];
  }
  function Fy(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function Ty(_, e) {
    _.device = e;
  }
  function Dy(_, e) {
    _.dimension = tt[e];
  }
  function By(_, e) {
    _.dimension = pA[e];
  }
  function Py(_, e) {
    _.dstFactor = Nt[e];
  }
  function ky(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function My(_, e) {
    _.entries = e;
  }
  function Ry(_, e) {
    _.entries = e;
  }
  function Cy(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function Vy(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function Ly(_, e) {
    _.externalTexture = e;
  }
  function Ey(_, e) {
    _.failOp = et[e];
  }
  function Gy(_, e) {
    _.format = ce[e];
  }
  function Oy(_, e) {
    _.format = lA[e];
  }
  function Wy(_, e) {
    _.format = ce[e];
  }
  function zy(_, e) {
    _.format = ce[e];
  }
  function Uy(_, e) {
    _.format = ce[e];
  }
  function Hy(_, e) {
    _.format = ce[e];
  }
  function qy(_, e) {
    _.format = ce[e];
  }
  function jy(_, e) {
    _.fragment = e;
  }
  function Ky(_, e) {
    _.frontFace = sA[e];
  }
  function Ny(_, e) {
    _.g = e;
  }
  function Jy(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function Qy(_, e) {
    _.height = e >>> 0;
  }
  function Xy(_, e) {
    _.height = e >>> 0;
  }
  function Yy(_, e) {
    _.height = e >>> 0;
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
  function cx(_, e, t) {
    _.label = S(e, t);
  }
  function sx(_, e, t) {
    _.label = S(e, t);
  }
  function ix(_, e, t) {
    _.label = S(e, t);
  }
  function fx(_, e, t) {
    _.label = S(e, t);
  }
  function ux(_, e) {
    _.layout = e;
  }
  function dx(_, e) {
    _.layout = e;
  }
  function gx(_, e) {
    _.loadOp = Z_[e];
  }
  function px(_, e) {
    _.lodMaxClamp = e;
  }
  function wx(_, e) {
    _.lodMinClamp = e;
  }
  function lx(_, e) {
    _.magFilter = Jt[e];
  }
  function mx(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function hx(_, e) {
    _.mask = e >>> 0;
  }
  function yx(_, e) {
    _.maxAnisotropy = e;
  }
  function xx(_, e) {
    _.minBindingSize = e;
  }
  function $x(_, e) {
    _.minFilter = Jt[e];
  }
  function vx(_, e) {
    _.mipLevel = e >>> 0;
  }
  function Sx(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Ax(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Ix(_, e) {
    _.mipmapFilter = iA[e];
  }
  function Fx(_, e) {
    _.module = e;
  }
  function Tx(_, e) {
    _.module = e;
  }
  function Dx(_, e) {
    _.multisample = e;
  }
  function Bx(_, e) {
    _.multisampled = e !== 0;
  }
  function Px(_, e) {
    _.offset = e;
  }
  function kx(_, e) {
    _.offset = e;
  }
  function Mx(_, e) {
    _.offset = e;
  }
  function Rx(_, e) {
    _.operation = aA[e];
  }
  function Cx(_, e) {
    _.origin = e;
  }
  function Vx(_, e) {
    _.passOp = et[e];
  }
  function Lx(_, e) {
    _.powerPreference = fA[e];
  }
  function Ex(_, e) {
    _.primitive = e;
  }
  function Gx(_, e) {
    _.querySet = e;
  }
  function Ox(_, e) {
    _.r = e;
  }
  function Wx(_, e) {
    _.requiredFeatures = e;
  }
  function zx(_, e) {
    _.requiredLimits = e;
  }
  function Ux(_, e) {
    _.resolveTarget = e;
  }
  function Hx(_, e) {
    _.resource = e;
  }
  function qx(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function jx(_, e) {
    _.sampleCount = e >>> 0;
  }
  function Kx(_, e) {
    _.sampleType = wA[e];
  }
  function Nx(_, e) {
    _.sampler = e;
  }
  function Jx(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function Qx(_, e) {
    _.signal = e;
  }
  function Xx(_, e) {
    _.size = e;
  }
  function Yx(_, e) {
    _.size = e;
  }
  function Zx(_, e) {
    _.size = e;
  }
  function e$(_, e) {
    _.srcFactor = Nt[e];
  }
  function _$(_, e) {
    _.stencilBack = e;
  }
  function t$(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function r$(_, e) {
    _.stencilFront = e;
  }
  function n$(_, e) {
    _.stencilLoadOp = Z_[e];
  }
  function a$(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function o$(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function b$(_, e) {
    _.stencilStoreOp = _t[e];
  }
  function c$(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function s$(_, e) {
    _.stepMode = mA[e];
  }
  function i$(_, e) {
    _.storageTexture = e;
  }
  function f$(_, e) {
    _.storeOp = _t[e];
  }
  function u$(_, e) {
    _.stripIndexFormat = Y_[e];
  }
  function d$(_, e) {
    _.targets = e;
  }
  function g$(_, e) {
    _.texture = e;
  }
  function p$(_, e) {
    _.texture = e;
  }
  function w$(_, e) {
    _.timestampWrites = e;
  }
  function l$(_, e) {
    _.topology = uA[e];
  }
  function m$(_, e) {
    _.type = oA[e];
  }
  function h$(_, e) {
    _.type = dA[e];
  }
  function y$(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function x$(_, e) {
    _.usage = e >>> 0;
  }
  function $$(_, e) {
    _.usage = e >>> 0;
  }
  function v$(_, e) {
    _.usage = e >>> 0;
  }
  function S$(_, e) {
    _.usage = e >>> 0;
  }
  function A$(_, e) {
    _.vertex = e;
  }
  function I$(_, e) {
    _.view = e;
  }
  function F$(_, e) {
    _.view = e;
  }
  function T$(_, e) {
    _.viewDimension = tt[e];
  }
  function D$(_, e) {
    _.viewDimension = tt[e];
  }
  function B$(_, e) {
    _.viewFormats = e;
  }
  function P$(_, e) {
    _.viewFormats = e;
  }
  function k$(_, e) {
    _.visibility = e >>> 0;
  }
  function M$(_, e) {
    _.width = e >>> 0;
  }
  function R$(_, e) {
    _.width = e >>> 0;
  }
  function C$(_, e) {
    _.width = e >>> 0;
  }
  function V$(_, e) {
    _.writeMask = e >>> 0;
  }
  function L$(_, e) {
    _.x = e >>> 0;
  }
  function E$(_, e) {
    _.y = e >>> 0;
  }
  function G$(_, e) {
    _.z = e >>> 0;
  }
  function O$(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function W$(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function z$(_) {
    return _.shiftKey;
  }
  function U$(_) {
    return _.signal;
  }
  function H$(_, e) {
    const t = e.stack, r = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function q$() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return v(_) ? 0 : k(_);
  }
  function j$() {
    const _ = typeof global > "u" ? null : global;
    return v(_) ? 0 : k(_);
  }
  function K$() {
    const _ = typeof self > "u" ? null : self;
    return v(_) ? 0 : k(_);
  }
  function N$() {
    const _ = typeof window > "u" ? null : window;
    return v(_) ? 0 : k(_);
  }
  function J$(_, e) {
    const t = e.statusText, r = E(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = B;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function Q$(_) {
    return _.status;
  }
  function X$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function Y$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function Z$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function ev(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function _v(_, e) {
    _.stencilMask(e >>> 0);
  }
  function tv(_, e) {
    _.stencilMask(e >>> 0);
  }
  function rv(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function nv(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function av(_, e) {
    _.submit(e);
  }
  function ov() {
    return m(function(_, e, t, r, n, a, o, b, c, u) {
      _.texImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function bv() {
    return m(function(_, e, t, r, n, a, o, b, c, u) {
      _.texImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function cv() {
    return m(function(_, e, t, r, n, a, o, b, c, u) {
      _.texImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function sv() {
    return m(function(_, e, t, r, n, a, o, b, c, u, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, b, c >>> 0, u >>> 0, d);
    }, arguments);
  }
  function iv() {
    return m(function(_, e, t, r, n, a, o, b, c, u, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, b, c >>> 0, u >>> 0, d);
    }, arguments);
  }
  function fv(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function uv(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function dv(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function gv(_, e, t, r, n, a, o) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, o);
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
    return m(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function yv() {
    return m(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function xv() {
    return m(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function $v() {
    return m(function(_, e, t, r, n, a, o, b, c, u) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, b >>> 0, c >>> 0, u);
    }, arguments);
  }
  function vv() {
    return m(function(_, e, t, r, n, a, o, b, c, u, d, D) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, D);
    }, arguments);
  }
  function Sv() {
    return m(function(_, e, t, r, n, a, o, b, c, u, d, D) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, D);
    }, arguments);
  }
  function Av() {
    return m(function(_, e, t, r, n, a, o, b, c, u, d, D) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, D);
    }, arguments);
  }
  function Iv() {
    return m(function(_, e, t, r, n, a, o, b, c, u, d, D) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, D);
    }, arguments);
  }
  function Fv() {
    return m(function(_, e, t, r, n, a, o, b, c, u, d, D) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, D);
    }, arguments);
  }
  function Tv() {
    return m(function(_, e, t, r, n, a, o, b, c, u, d, D) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, D);
    }, arguments);
  }
  function Dv() {
    return m(function(_, e, t, r, n, a, o, b, c, u, d, D) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, b, c, u >>> 0, d >>> 0, D);
    }, arguments);
  }
  function Bv(_, e, t) {
    return _.then(e, t);
  }
  function Pv(_, e, t) {
    return _.then(e, t);
  }
  function kv(_, e) {
    return _.then(e);
  }
  function Mv(_, e, t) {
    _.uniform1f(e, t);
  }
  function Rv(_, e, t) {
    _.uniform1f(e, t);
  }
  function Cv(_, e, t) {
    _.uniform1i(e, t);
  }
  function Vv(_, e, t) {
    _.uniform1i(e, t);
  }
  function Lv(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function Ev(_, e, t, r) {
    _.uniform2fv(e, W(t, r));
  }
  function Gv(_, e, t, r) {
    _.uniform2fv(e, W(t, r));
  }
  function Ov(_, e, t, r) {
    _.uniform2iv(e, _e(t, r));
  }
  function Wv(_, e, t, r) {
    _.uniform2iv(e, _e(t, r));
  }
  function zv(_, e, t, r) {
    _.uniform2uiv(e, Se(t, r));
  }
  function Uv(_, e, t, r) {
    _.uniform3fv(e, W(t, r));
  }
  function Hv(_, e, t, r) {
    _.uniform3fv(e, W(t, r));
  }
  function qv(_, e, t, r) {
    _.uniform3iv(e, _e(t, r));
  }
  function jv(_, e, t, r) {
    _.uniform3iv(e, _e(t, r));
  }
  function Kv(_, e, t, r) {
    _.uniform3uiv(e, Se(t, r));
  }
  function Nv(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function Jv(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function Qv(_, e, t, r) {
    _.uniform4fv(e, W(t, r));
  }
  function Xv(_, e, t, r) {
    _.uniform4fv(e, W(t, r));
  }
  function Yv(_, e, t, r) {
    _.uniform4iv(e, _e(t, r));
  }
  function Zv(_, e, t, r) {
    _.uniform4iv(e, _e(t, r));
  }
  function eS(_, e, t, r) {
    _.uniform4uiv(e, Se(t, r));
  }
  function _S(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function tS(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, W(r, n));
  }
  function rS(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, W(r, n));
  }
  function nS(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, W(r, n));
  }
  function aS(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, W(r, n));
  }
  function oS(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, W(r, n));
  }
  function bS(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, W(r, n));
  }
  function cS(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, W(r, n));
  }
  function sS(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, W(r, n));
  }
  function iS(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, W(r, n));
  }
  function fS(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, W(r, n));
  }
  function uS(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, W(r, n));
  }
  function dS(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, W(r, n));
  }
  function gS(_) {
    _.unmap();
  }
  function pS(_, e) {
    _.useProgram(e);
  }
  function wS(_, e) {
    _.useProgram(e);
  }
  function lS(_) {
    return _.value;
  }
  function mS(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function hS(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function yS(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function xS(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function $S(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function vS(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function SS(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function AS(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function IS(_) {
    return _.width;
  }
  function FS(_) {
    return _.width;
  }
  function TS() {
    return m(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, d_(r, n), a, o);
    }, arguments);
  }
  function DS() {
    return m(function(_, e, t, r, n, a) {
      _.writeTexture(e, d_(t, r), n, a);
    }, arguments);
  }
  function BS(_, e) {
    return te(_, e, XS);
  }
  function PS(_, e) {
    return te(_, e, tA);
  }
  function kS(_, e) {
    return te(_, e, nA);
  }
  function MS(_, e) {
    return te(_, e, YS);
  }
  function RS(_, e) {
    return te(_, e, ZS);
  }
  function CS(_, e) {
    return te(_, e, eA);
  }
  function VS(_, e) {
    return te(_, e, _A);
  }
  function LS(_, e) {
    return te(_, e, QS);
  }
  function ES(_) {
    return _;
  }
  function GS(_) {
    return _;
  }
  function OS(_, e) {
    return W(_, e);
  }
  function WS(_, e) {
    return hA(_, e);
  }
  function zS(_, e) {
    return _e(_, e);
  }
  function US(_, e) {
    return yA(_, e);
  }
  function HS(_, e) {
    return xA(_, e);
  }
  function qS(_, e) {
    return Se(_, e);
  }
  function jS(_, e) {
    return d_(_, e);
  }
  function KS(_, e) {
    return S(_, e);
  }
  function NS(_) {
    return BigInt.asUintN(64, _);
  }
  function JS() {
    const _ = s.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function QS(_, e) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke_______true_(_, e);
  }
  function XS(_, e, t) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_(_, e, t);
  }
  function YS(_, e, t) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true_(_, e, t);
  }
  function ZS(_, e, t) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__4(_, e, t);
  }
  function eA(_, e, t) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__5(_, e, t);
  }
  function _A(_, e, t) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__6(_, e, t);
  }
  function tA(_, e, t) {
    const r = s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_(_, e, t);
    if (r[1]) throw F(r[0]);
  }
  function rA(_, e, t, r) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined_______true_(_, e, t, r);
  }
  function nA(_, e, t) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___f64______true_(_, e, t);
  }
  const Q_ = [
    "clamp-to-edge",
    "repeat",
    "mirror-repeat"
  ], Nt = [
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
  ], aA = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], oA = [
    "uniform",
    "storage",
    "read-only-storage"
  ], bA = [
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
  ], cA = [
    "none",
    "front",
    "back"
  ], Jt = [
    "nearest",
    "linear"
  ], sA = [
    "ccw",
    "cw"
  ], Y_ = [
    "uint16",
    "uint32"
  ], Z_ = [
    "load",
    "clear"
  ], iA = [
    "nearest",
    "linear"
  ], fA = [
    "low-power",
    "high-performance"
  ], uA = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], dA = [
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
  ], gA = [
    "write-only",
    "read-only",
    "read-write"
  ], _t = [
    "store",
    "discard"
  ], Qt = [
    "all",
    "stencil-only",
    "depth-only"
  ], pA = [
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
  ], wA = [
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
  ], lA = [
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
  ], mA = [
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
    return _ = _ >>> 0, $A().subarray(_ / 4, _ / 4 + e);
  }
  function hA(_, e) {
    return _ = _ >>> 0, SA().subarray(_ / 2, _ / 2 + e);
  }
  function _e(_, e) {
    return _ = _ >>> 0, AA().subarray(_ / 4, _ / 4 + e);
  }
  function yA(_, e) {
    return _ = _ >>> 0, IA().subarray(_ / 1, _ / 1 + e);
  }
  function xA(_, e) {
    return _ = _ >>> 0, FA().subarray(_ / 2, _ / 2 + e);
  }
  function Se(_, e) {
    return _ = _ >>> 0, TA().subarray(_ / 4, _ / 4 + e);
  }
  function d_(_, e) {
    return _ = _ >>> 0, he().subarray(_ / 1, _ / 1 + e);
  }
  let fe = null;
  function R() {
    return (fe === null || fe.buffer.detached === true || fe.buffer.detached === void 0 && fe.buffer !== s.memory.buffer) && (fe = new DataView(s.memory.buffer)), fe;
  }
  let Qe = null;
  function $A() {
    return (Qe === null || Qe.byteLength === 0) && (Qe = new Float32Array(s.memory.buffer)), Qe;
  }
  let Xe = null;
  function vA() {
    return (Xe === null || Xe.byteLength === 0) && (Xe = new Float64Array(s.memory.buffer)), Xe;
  }
  let Ye = null;
  function SA() {
    return (Ye === null || Ye.byteLength === 0) && (Ye = new Int16Array(s.memory.buffer)), Ye;
  }
  let Ze = null;
  function AA() {
    return (Ze === null || Ze.byteLength === 0) && (Ze = new Int32Array(s.memory.buffer)), Ze;
  }
  let e_ = null;
  function IA() {
    return (e_ === null || e_.byteLength === 0) && (e_ = new Int8Array(s.memory.buffer)), e_;
  }
  function S(_, e) {
    return BA(_ >>> 0, e);
  }
  let __ = null;
  function FA() {
    return (__ === null || __.byteLength === 0) && (__ = new Uint16Array(s.memory.buffer)), __;
  }
  let t_ = null;
  function TA() {
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
    return vA().set(_, t / 8), B = _.length, t;
  }
  function Tt(_, e) {
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
  function F(_) {
    const e = s.__wbindgen_externrefs.get(_);
    return s.__externref_table_dealloc(_), e;
  }
  let c_ = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  c_.decode();
  const DA = 2146435072;
  let y_ = 0;
  function BA(_, e) {
    return y_ += e, y_ >= DA && (c_ = new TextDecoder("utf-8", {
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
  function PA(_) {
    s = _;
  }
  URL = globalThis.URL;
  const kA = await G_({
    "./proteus_bench_web_bg.js": {
      __wbg_new_typed_00a409eb4ec4f2d9: R7,
      __wbg_then_05edfc8a4fea5106: Bv,
      __wbg_call_5575218572ead796: p3,
      __wbg_next_0c4066e251d2eff9: V7,
      __wbg_done_b62d4a7d2286852a: X5,
      __wbg_value_49f783bb59765962: lS,
      __wbg_length_c6054974c0a6cdb9: W9,
      __wbg_get_unchecked_54a4374c38e08460: u9,
      __wbg_instanceof_Map_afa18d5840c04c15: I9,
      __wbg_get_197a3fe98f169e38: s9,
      __wbg_new_227d7c05414eb861: T7,
      __wbg_stack_3b0d974bbf31e44f: H$,
      __wbg_error_a6fa202b58aa1cd3: w8,
      __wbg_push_f724b5db8acf89d2: Z7,
      __wbg_call_0e855b388e315e17: g3,
      __wbg_proteusapp_new: X7,
      __wbg_set_dc601f4a69da0bc2: gy,
      __wbg_call_8e98ed2f3c86c4b5: w3,
      __wbg_get_with_ref_key_6412cf3094599694: d9,
      __wbg_set_6be42768c690e380: Rh,
      __wbg_String_8564e559799eccda: o6,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: S9,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: g7,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: p7,
      __wbg_maxTextureDimension3D_06ee54121b37d431: w7,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: d7,
      __wbg_maxBindGroups_14611ac9ed1c6b56: N9,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: J9,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: o7,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: a7,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: c7,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: s7,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: f7,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: u7,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: m7,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: l7,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: i7,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: x7,
      __wbg_maxBufferSize_f7ce3e1856349d2f: Q9,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: h7,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: y7,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: b7,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: S7,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: v7,
      __wbg_maxColorAttachments_fd9187f9f786da18: Y9,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: X9,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: r7,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: Z9,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: e7,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: _7,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: t7,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: n7,
      __wbg_description_18d0a6d4077fec8e: U5,
      __wbg_set_dst_factor_1ed75271a89a711e: Py,
      __wbg_set_operation_b5862f5a1a143b30: Rx,
      __wbg_set_src_factor_1c4f755f8676df1b: e$,
      __wbg_set_texture_16d2be474ce6ad0c: g$,
      __wbg_set_mip_level_246db61be15bdd69: vx,
      __wbg_set_x_56f0c2c08a62725c: L$,
      __wbg_set_y_04fb8ce84735b4e1: E$,
      __wbg_set_z_a51316db27a4941e: G$,
      __wbg_set_origin_9b3b0fbe0a5dc469: Cx,
      __wbg_set_aspect_77332ac136ee94eb: qh,
      __wbg_Window_a07901001eb4269f: b6,
      __wbg_gpu_a7c12045c25d009a: g9,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: c6,
      __wbg_set_a_5f6e488475272136: Ch,
      __wbg_set_b_688365d692bba214: Nh,
      __wbg_set_g_d4d1d77cf8fdd362: Ny,
      __wbg_set_r_527e5a41c4b1a846: Ox,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: v9,
      __wbg_queue_65d985f3e6d786a6: ah,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: Lx,
      __wbg_requestAdapter_9ff5c9d1ff271165: gh,
      __wbg_set_required_limits_3b031f66f838f4e3: zx,
      __wbg_set_required_features_54918de8185c5fab: Wx,
      __wbg_set_label_bae57fb9f24fde5c: ax,
      __wbg_requestDevice_c1c34f88a477e509: lh,
      __wbg_limits_50a8c5e629dbfe40: U9,
      __wbg_info_22dcf1fd1b12bc7d: y9,
      __wbg_set_size_41cd9255ca1e4242: Yx,
      __wbg_set_usage_908213a4d4bb8bde: v$,
      __wbg_set_mapped_at_creation_48de4735fab51e78: mx,
      __wbg_set_label_cd567b7b35838e4c: cx,
      __wbg_createBuffer_2f08c0205e04efca: K3,
      __wbg_set_address_mode_u_a37cf1035585c638: Lh,
      __wbg_set_address_mode_v_8ac049e029caef76: Eh,
      __wbg_set_address_mode_w_eb9260ee11729e92: Gh,
      __wbg_set_compare_42211fbf15e3b850: fy,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: px,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: wx,
      __wbg_set_mag_filter_69d846b974d4bcc0: lx,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: $x,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: Ix,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: yx,
      __wbg_set_label_dcd98efbb9370da8: ix,
      __wbg_createSampler_248bd67c920af37d: a5,
      __wbg_set_width_1a5e2e86fa5bdcd8: R$,
      __wbg_set_height_e8b5483b8c117d5e: Xy,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: $y,
      __wbg_set_format_e9d4b1475bb3bd3b: Hy,
      __wbg_set_size_a61ff22205255d61: Zx,
      __wbg_set_usage_7fa9cd18d1104aca: $$,
      __wbg_set_label_0c1bd0e976cf0a9a: ex,
      __wbg_set_dimension_36e13ccecae5af4b: By,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: Ax,
      __wbg_set_sample_count_865e1d19b84e27e6: jx,
      __wbg_set_view_formats_bab284fc81b40e70: B$,
      __wbg_createTexture_9e76b80a2dc0d12e: u5,
      __wbg_set_entries_fc76ca4d7da6a709: Ry,
      __wbg_set_layout_eeef59714f5bf48b: dx,
      __wbg_set_label_f92ae11c77d74198: fx,
      __wbg_createBindGroup_2320df4db188406c: q3,
      __wbg_set_code_56e2d45ec1ff6c2d: by,
      __wbg_set_label_be45aed56e4b9fee: ox,
      __wbg_createShaderModule_53701de4fb271c90: b5,
      __wbg_set_label_d1c24b5a7a3ac31d: sx,
      __wbg_createCommandEncoder_cd88faca35d9ed68: J3,
      __wbg_set_bind_group_layouts_5325d038771af328: Yh,
      __wbg_set_label_2f592bd1be3db6b3: rx,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: Y3,
      __wbg_set_module_14e471fdd94c582d: Tx,
      __wbg_set_entry_point_8db3b6d103e3b865: Vy,
      __wbg_set_buffers_85a7238f4ef28ab4: ny,
      __wbg_set_layout_7c5ba5bdcde8a0f0: ux,
      __wbg_set_vertex_a4951dd9a7a4ed54: A$,
      __wbg_set_label_c47c451211e2f6d2: bx,
      __wbg_set_format_f9341112e43ea182: qy,
      __wbg_set_depth_compare_30e9ea552da12fe2: hy,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: Fy,
      __wbg_set_depth_bias_428c9340b0fd937b: py,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: wy,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: ly,
      __wbg_set_compare_1509dc1a5420943f: iy,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: yy,
      __wbg_set_fail_op_77ab26c98f847b65: Ey,
      __wbg_set_pass_op_e9470d1262fb8a8b: Vx,
      __wbg_set_stencil_back_6ef4683123b19b25: _$,
      __wbg_set_stencil_front_aeb8580a97e5424b: r$,
      __wbg_set_stencil_read_mask_2954f260d47349ea: a$,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: c$,
      __wbg_set_depth_stencil_1bd50dbc450c8650: Sy,
      __wbg_set_module_08ad08e736d8edbf: Fx,
      __wbg_set_targets_6b0b3bdd87f35668: d$,
      __wbg_set_entry_point_6fec5723cc790927: Cy,
      __wbg_set_fragment_1a595620425637e1: jy,
      __wbg_set_count_26a934d1cd07d080: uy,
      __wbg_set_mask_0c49a66362fc0079: hx,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: zh,
      __wbg_set_multisample_85f073947b782d07: Dx,
      __wbg_set_cull_mode_9d466c1ab414cac8: dy,
      __wbg_set_front_face_50cdf4eb61504a46: Ky,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: u$,
      __wbg_set_topology_beefb3aca0612b00: l$,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: y$,
      __wbg_set_primitive_369241acd17871f1: Ex,
      __wbg_createRenderPipeline_f48187ba9f7701e8: t5,
      __wbg_set_entries_3017e6132f938c6e: My,
      __wbg_set_label_1175a3329a06e52b: _x,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: H3,
      __wbg_limits_1c25cb4f379a4418: z9,
      __wbg_set_color_attachments_abe67f6631926e28: cy,
      __wbg_set_label_8fd860a36d2c7b74: nx,
      __wbg_set_view_dbd0294573f64d05: F$,
      __wbg_set_depth_clear_value_442bf492734f63b6: my,
      __wbg_set_depth_load_op_34d430b74bb36d91: xy,
      __wbg_set_depth_store_op_0ea0a215313dbda7: Iy,
      __wbg_set_depth_read_only_138a11b10c731094: vy,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: t$,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: n$,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: b$,
      __wbg_set_stencil_read_only_fb489d191b6d969b: o$,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: Ay,
      __wbg_set_query_set_18679a8580267d5a: Gx,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: Xh,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: ky,
      __wbg_set_timestamp_writes_c552d52fbb417005: w$,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: C6,
      __wbg_copyTextureToTexture_1be188df1e535c0a: U3,
      __wbg_label_47480289cc2bce71: G9,
      __wbg_set_label_2d2227f4d5991e50: tx,
      __wbg_finish_cfaeede3baf55be1: x8,
      __wbg_finish_087cb89c65c06eb1: y8,
      __wbg_drawIndexed_68637ebab6dd8d6e: o8,
      __wbg_setPipeline_bab24dbce96903b9: Th,
      __wbg_setViewport_f9d423db4f4b4b58: Ph,
      __wbg_setBindGroup_4ba56e1e0d26f244: Sh,
      __wbg_setBindGroup_6124849cc8547086: Ah,
      __wbg_setIndexBuffer_17431786d06c1b7c: Ih,
      __wbg_setIndexBuffer_a16ed5b869c87507: Fh,
      __wbg_setVertexBuffer_b508baf8d0ffe331: Bh,
      __wbg_setVertexBuffer_91c4b602d0289943: Dh,
      __wbg_end_414453a89205612c: u8,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: K8,
      __wbg_getCurrentTexture_51975ae7185fd15f: G8,
      __wbg_set_device_0d774b66e7288f72: Ty,
      __wbg_set_format_d347899cd860709c: Uy,
      __wbg_set_usage_ae014e77ff77ce06: S$,
      __wbg_set_alpha_mode_92402195b3ae1ee7: Wh,
      __wbg_set_view_formats_fe531a043efb71fa: P$,
      __wbg_configure_3d64c677c7d68a15: L3,
      __wbg_writeBuffer_b4bdd36178348ca5: TS,
      __wbg_set_bytes_per_row_91681ca78d744888: ay,
      __wbg_set_rows_per_image_d198b7e73a38978b: qx,
      __wbg_set_offset_a097a8050a3a9a33: Mx,
      __wbg_writeTexture_b45b69132e46a227: DS,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: H7,
      __wbg_submit_1290d44bb76ecef4: av,
      __wbg_getMappedRange_5ed22727c9679168: U8,
      __wbg_unmap_8f06698a75b8331a: gS,
      __wbg_destroy_b5b39f25f0799295: H5,
      __wbg_mapAsync_bb0029907dd91181: K9,
      __wbg_set_dimension_174ad7e2fb67fb4e: Dy,
      __wbg_set_format_90860b0321868db4: Wy,
      __wbg_set_aspect_a823a14d00d42d37: jh,
      __wbg_set_base_array_layer_cc6c68d233489c4b: Jh,
      __wbg_set_array_layer_count_daec613068108a9d: Uh,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: Qh,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: Sx,
      __wbg_set_label_03d2396d4655a3e1: Zy,
      __wbg_set_usage_7f0dda8309469b1c: x$,
      __wbg_createView_cc96b5bdd3d5bf5e: p5,
      __wbg_set_format_abf7a1bc5425c56a: zy,
      __wbg_set_alpha_aa2e606e9e647b21: Oh,
      __wbg_set_color_bc393d7efc3c8594: sy,
      __wbg_set_blend_8d6e9c08b5702a09: _y,
      __wbg_set_write_mask_144b25e2bd909124: V$,
      __wbg_set_load_op_56844f51434037bf: gx,
      __wbg_set_store_op_caeede4654b3d847: f$,
      __wbg_set_view_bdeab150b5f0768c: I$,
      __wbg_set_clear_value_642701f928a5ccb3: oy,
      __wbg_set_resolve_target_fe76b3f99cf72078: Ux,
      __wbg_set_buffer_55f096330c8912b4: ty,
      __wbg_set_offset_73156b0e0b41d79a: Px,
      __wbg_set_size_1e6281b07cd39177: Xx,
      __wbg_set_binding_f3c188a8cd21455b: ey,
      __wbg_set_resource_fe385d2e3dadaf63: Hx,
      __wbg_set_format_6606f5c1fba6f459: Oy,
      __wbg_set_offset_8d9d9afffa18b591: kx,
      __wbg_set_shader_location_0ff30a733291a396: Jx,
      __wbg_set_array_stride_c2c009eabc18b5f6: Hh,
      __wbg_set_attributes_05f9117fd32ca606: Kh,
      __wbg_set_step_mode_a35aef328761c452: s$,
      __wbg_set_binding_b6b0fe5c281b8c69: Zh,
      __wbg_set_visibility_1bca121a89accba5: k$,
      __wbg_set_type_c1eebc19f8a6aeb9: h$,
      __wbg_set_sampler_8c5d7fb1b02058c6: Nx,
      __wbg_set_multisampled_40505c1381e1c32c: Bx,
      __wbg_set_external_texture_825fe2bc7a0c0603: Ly,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: Jy,
      __wbg_set_min_binding_size_689661b9ed25e083: xx,
      __wbg_set_type_38961e08504ca674: m$,
      __wbg_set_buffer_e89095a9f0cafad3: ry,
      __wbg_set_sample_type_7088b1efddce6a69: Kx,
      __wbg_set_view_dimension_3ed01b237e85826f: D$,
      __wbg_set_texture_e25a73da75cf5808: p$,
      __wbg_set_format_1786adb7bc74c7c9: Gy,
      __wbg_set_access_091f317905cd76a5: Vh,
      __wbg_set_view_dimension_263387976511ebc9: T$,
      __wbg_set_storage_texture_ab9eed9786337ef0: i$,
      __wbg_requestAdapter_c46930b8bc33722d: ph,
      __wbg_includes_83dff8d05da243c5: h9,
      __wbg_clearBufferuiv_1d2d93401c0904a3: h3,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: M3,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: C3,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: V3,
      __wbg_copyBufferSubData_a944f33b601b822d: G3,
      __wbg_clientWaitSync_7580165bd2eff461: I3,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: R3,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: z3,
      __wbg_createQuery_f013132b870a71ef: _5,
      __wbg_createSampler_9fe50152a2524319: o5,
      __wbg_createVertexArray_8685feb21901c932: g5,
      __wbg_deleteQuery_ef51ea0a52420103: I5,
      __wbg_deleteSampler_5c045e0cc55813d4: D5,
      __wbg_getIndexedParameter_2b18df6fca85f751: z8,
      __wbg_getQueryParameter_0599e85ddb81220b: Y8,
      __wbg_getSyncParameter_9a2bda340ebe166f: a9,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: o9,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: k9,
      __wbg_deleteSync_37ca83c429c43d8a: k5,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: V5,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: Z5,
      __wbg_drawBuffers_558d96e52e754731: r8,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: a8,
      __wbg_endQuery_161170c5280a8293: f8,
      __wbg_fenceSync_56efc7cc79111e54: l8,
      __wbg_framebufferTextureLayer_2312acdc74f97676: D8,
      __wbg_getBufferSubData_92680d3a2f7be029: R8,
      __wbg_readBuffer_361ec5474f3aae49: oh,
      __wbg_readPixels_5840000f3e22f3ce: ch,
      __wbg_readPixels_5bf204799ed2272f: sh,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: ih,
      __wbg_texImage3D_8647ef58aef5b912: iv,
      __wbg_texStorage2D_ed5df596c5f1e3af: dv,
      __wbg_texStorage3D_160b0197bc190f04: gv,
      __wbg_texSubImage2D_f03448e182b0820d: $v,
      __wbg_texSubImage2D_d14d9c0a1f627c31: xv,
      __wbg_texSubImage2D_89866a04ecd0a76b: mv,
      __wbg_texSubImage2D_5c630043f1c56716: lv,
      __wbg_samplerParameterf_3157ba41c0f4d97a: hh,
      __wbg_samplerParameteri_f85a29156e790189: yh,
      __wbg_texImage2D_0e0f37b9fb297d01: ov,
      __wbg_texImage2D_0e537dc331652de3: bv,
      __wbg_texImage3D_30dbf7234481b8f5: sv,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: wv,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: hv,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: yv,
      __wbg_texSubImage3D_933e4cd41cc5376d: Fv,
      __wbg_texSubImage3D_c3538b28040daac9: Dv,
      __wbg_uniform1ui_36c94692177ebf76: Lv,
      __wbg_uniform2fv_17592f4dad9798fb: Ev,
      __wbg_uniform2iv_d5d29ebbc466977d: Wv,
      __wbg_texSubImage3D_0fdbd843482bb916: Sv,
      __wbg_texSubImage3D_09a97a968b93253d: vv,
      __wbg_texSubImage3D_355efde0dc047913: Av,
      __wbg_texSubImage3D_bd32c8e29e470904: Tv,
      __wbg_texSubImage3D_5a238709d114b609: Iv,
      __wbg_uniform2uiv_418ba3bf6a230dd5: zv,
      __wbg_uniform4fv_9e670a001c77dca0: Xv,
      __wbg_uniform4iv_1d57c6b8e5c0e447: Yv,
      __wbg_uniform3fv_dbe44b778e6b89e8: Hv,
      __wbg_uniform3iv_d75d3a5f86d54be4: jv,
      __wbg_uniform3uiv_71c1efc24a662de9: Kv,
      __wbg_uniform4uiv_c5d45f5dbdae727a: eS,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: oS,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: cS,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: sS,
      __wbg_uniformBlockBinding_829a71912ad79a04: _S,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: tS,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: nS,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: aS,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: iS,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: yS,
      __wbg_activeTexture_525ee3068cb9e8d5: T6,
      __wbg_attachShader_3477e67517b09b6b: k6,
      __wbg_bindAttribLocation_79b5d26727094518: V6,
      __wbg_bindBuffer_d3111de6861cb875: G6,
      __wbg_bindFramebuffer_63e837a5dc0accfb: z6,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: U6,
      __wbg_bindTexture_7ab28ff4ff3dc506: j6,
      __wbg_blendColor_15f26633b646e542: Q6,
      __wbg_blendEquation_7dadb4db540a42da: e3,
      __wbg_blendEquationSeparate_8240ddfa32266109: Y6,
      __wbg_blendFunc_b15af02643e188f1: a3,
      __wbg_blendFuncSeparate_456410f9919bed39: r3,
      __wbg_clear_dadcb3e2929388b0: S3,
      __wbg_clearDepth_05c17028494ee4dd: y3,
      __wbg_clearStencil_917833d1e2ac56e4: v3,
      __wbg_colorMask_f111e3e5796458f4: D3,
      __wbg_compileShader_f5625b583b2c9fd6: B3,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: uS,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: dS,
      __wbg_vertexAttribDivisor_f17a8585267be92f: hS,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: O3,
      __wbg_createBuffer_9f602b2dbcbf409c: N3,
      __wbg_createFramebuffer_4a250944a4542bbc: Q3,
      __wbg_createProgram_4c8164d471c10346: Z3,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: n5,
      __wbg_createShader_9c5cd42709d915ff: s5,
      __wbg_createTexture_3eed23cb87dd35fc: i5,
      __wbg_cullFace_94f24b4fd5e9038b: m5,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: y5,
      __wbg_getExtension_11824edd67a143d8: W8,
      __wbg_getParameter_7f7f23cae98f2c81: q8,
      __wbg_getProgramInfoLog_cd84be80942f345b: J8,
      __wbg_getProgramParameter_039391d5ba319f50: Q8,
      __wbg_getShaderInfoLog_495bddda98172699: Z8,
      __wbg_getShaderParameter_4eb65cfb174ceb22: _9,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: r9,
      __wbg_getUniformLocation_ab63f569a4e41744: c9,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: $5,
      __wbg_deleteProgram_eff668280dcb01ca: A5,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: T5,
      __wbg_deleteShader_3339454254c7147c: B5,
      __wbg_deleteTexture_c1c58550dc55af5c: R5,
      __wbg_depthFunc_31b183b5b8ee478e: L5,
      __wbg_depthMask_cab7f2ae7f0e559c: O5,
      __wbg_depthRange_797a71ba3b79267a: W5,
      __wbg_disable_cb1b3e6c1cee5202: J5,
      __wbg_disableVertexAttribArray_b395358ec5084c39: K5,
      __wbg_drawArrays_42dbb4b0349c8f34: _8,
      __wbg_enable_d1f42f78be33a553: i8,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: b8,
      __wbg_flush_7ae42f071230db6b: $8,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: I8,
      __wbg_framebufferTexture2D_367ab597a005e8d9: F8,
      __wbg_frontFace_9bdcf2a758e989e5: P8,
      __wbg_linkProgram_e23a348b0f6e0c4f: q9,
      __wbg_pixelStorei_a78a504be58d1d0a: K7,
      __wbg_polygonOffset_a4f07d97b9b0dced: J7,
      __wbg_renderbufferStorage_3049e13db5c4e60e: uh,
      __wbg_scissor_6c024669fbf4fe72: xh,
      __wbg_vertexAttribPointer_4e5d289c5d224210: $S,
      __wbg_viewport_a0ca330f9b85397e: vS,
      __wbg_shaderSource_66dce75b25a1a407: W$,
      __wbg_stencilFuncSeparate_ec603976be9569a4: Y$,
      __wbg_stencilMask_485dcb5965c79a71: _v,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: ev,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: rv,
      __wbg_texParameteri_c6efffcecb474d2f: fv,
      __wbg_uniform1f_3acd3f3eb50b5e11: Mv,
      __wbg_uniform1i_e4f13604354c28ae: Vv,
      __wbg_uniform4f_a5008773cfb47d1a: Jv,
      __wbg_useProgram_ab2ee2a13a1fd909: wS,
      __wbg_bufferSubData_2270f1b9db71e642: f3,
      __wbg_clearBufferfv_6b77b9402254a2bf: l3,
      __wbg_clearBufferiv_0f056544010eef3e: m3,
      __wbg_beginQuery_dad334d972fed3cc: R6,
      __wbg_bindBufferRange_16a9d90becc2a7d7: E6,
      __wbg_bindSampler_3c7002cb6d56ae8f: q6,
      __wbg_bindVertexArray_c391bd47303d75cd: J6,
      __wbg_blitFramebuffer_ea96ada8bba07582: o3,
      __wbg_bufferData_64e9905f2b3d3a6f: s3,
      __wbg_bufferData_99bbbc63f02251c4: i3,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: B9,
      __wbg_performance_4c23a97261596fec: q7,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: wh,
      __wbg_fetch_2d913f7108d17a24: m8,
      __wbg_fetch_d8c50740ea23b248: h8,
      __wbg_navigator_935098efd1dc7fe5: I7,
      __wbg_devicePixelRatio_8e5ca44720abafec: q5,
      __wbg_document_2634180a4c694068: Q5,
      __wbg_instanceof_Window_0d356b88a2f77c42: P9,
      __wbg_hidden_cb32701ca3785fea: m9,
      __wbg_getElementById_c7aba6b93b34bf01: O8,
      __wbg_querySelector_1f3658f4b48e268b: th,
      __wbg_querySelectorAll_ffda3c891a9eb29a: _h,
      __wbg_hasAttribute_73e1230c9c107e79: p9,
      __wbg_setAttribute_8bccfbabf2a83682: vh,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: M8,
      __wbg_focus_c80921c19b28520b: S8,
      __wbg_uniform2iv_c5e863975dd780d8: Ov,
      __wbg_uniform3fv_7723e142be50856f: Uv,
      __wbg_uniform3iv_bea3976522e15d48: qv,
      __wbg_uniform4fv_85ad5d23234895d2: Qv,
      __wbg_clear_ff8cfdf420f7dde6: A3,
      __wbg_clearDepth_ac6b54f112feeaf7: x3,
      __wbg_clearStencil_56d6a6308294a749: $3,
      __wbg_colorMask_b0ab9d429a1efa0a: T3,
      __wbg_compileShader_fcf3f3d2891f73f9: P3,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: W3,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: j3,
      __wbg_createFramebuffer_ab73f30b5dc97415: X3,
      __wbg_createProgram_f11c63f59f41b82a: e5,
      __wbg_createRenderbuffer_556000dbb01f5026: r5,
      __wbg_createShader_27d9388313f3b14e: c5,
      __wbg_createTexture_8455c703424c567b: f5,
      __wbg_cullFace_774780fb4177aab8: l5,
      __wbg_deleteBuffer_d758283bea6e0ccf: x5,
      __wbg_deleteFramebuffer_8953b325144192fe: v5,
      __wbg_deleteProgram_0135c6926e75af75: S5,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: F5,
      __wbg_deleteShader_79dbaaed69b7ca3b: P5,
      __wbg_deleteTexture_3acb672a45f9998a: M5,
      __wbg_depthFunc_eaca1bc79f7bf216: E5,
      __wbg_depthMask_3a9074b08d1f68e5: G5,
      __wbg_depthRange_c24a808b3496e0a9: z5,
      __wbg_uniform4iv_a9aaa92f2f458ec2: Zv,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: rS,
      __wbg_uniformMatrix3fv_da8c388748c5739b: bS,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: fS,
      __wbg_activeTexture_1d5359b20df41710: F6,
      __wbg_attachShader_683d1070365e7066: M6,
      __wbg_bindAttribLocation_d56d3c40331af7ed: L6,
      __wbg_bindBuffer_e95efaf0d4851845: O6,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: W6,
      __wbg_bindRenderbuffer_d608b211c51ed147: H6,
      __wbg_bindTexture_ffc56f1e5c5526c6: K6,
      __wbg_blendColor_a0ba1cdcecc3a34c: X6,
      __wbg_blendEquation_8bfa69f639ae92da: _3,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: Z6,
      __wbg_blendFunc_713c504adab14f98: n3,
      __wbg_blendFuncSeparate_3eef699c291dbc87: t3,
      __wbg_disable_4dca6ee0ccc91e4a: N5,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: j5,
      __wbg_drawArrays_10e1254aa4524ae9: e8,
      __wbg_enable_c6e523307311617a: s8,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: c8,
      __wbg_flush_eb3fb8da2ec00d57: v8,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: A8,
      __wbg_linkProgram_6a2eee02a03b9b00: H9,
      __wbg_pixelStorei_55ad4c67b699537c: j7,
      __wbg_polygonOffset_06dc6468c12a57e1: N7,
      __wbg_renderbufferStorage_2918fb696fd45663: fh,
      __wbg_scissor_f9696c630e464977: $h,
      __wbg_shaderSource_628c37a476ae65f9: O$,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: X$,
      __wbg_stencilMask_f9fe198f7fd6fc9c: tv,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: Z$,
      __wbg_stencilOpSeparate_6cf50803475d2640: nv,
      __wbg_texParameteri_fe6210a493d48a16: uv,
      __wbg_framebufferTexture2D_3a558e14f56720d2: T8,
      __wbg_frontFace_c9bb1fa659ffd276: k8,
      __wbg_getParameter_91a344e1a84a4669: j8,
      __wbg_getProgramInfoLog_35410850de9ccefe: N8,
      __wbg_getProgramParameter_bbc667347ac2e882: X8,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: e9,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: t9,
      __wbg_getUniformLocation_340155dc706d3fea: b9,
      __wbg_uniform1f_d34e4b454f7c8e73: Rv,
      __wbg_uniform1i_cd9a7f990128ea48: Cv,
      __wbg_uniform4f_4410d2faaa7e5dda: Nv,
      __wbg_useProgram_0e1cd86765304939: pS,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: xS,
      __wbg_viewport_b5bd46a0d111c83c: SS,
      __wbg_texSubImage2D_1b2ff28f994c325e: pv,
      __wbg_uniform2fv_39277cf2d3cb83c7: Gv,
      __wbg_bufferData_5df9bdb32e189eee: c3,
      __wbg_bufferData_26132561617ce8fb: b3,
      __wbg_bufferSubData_44db8a3b4a70b57d: u3,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: k3,
      __wbg_readPixels_05377f8b6fa1d8eb: bh,
      __wbg_texImage2D_7bc3001cb8602ed2: cv,
      __wbg_navigator_017bc45e84c473cc: A7,
      __wbg_log_d282446d03691e72: j9,
      __wbg_info_a392cd5b7536cfb5: x9,
      __wbg_warn_88c4a5bd9a322000: AS,
      __wbg_debug_7271beced8b71cd4: h5,
      __wbg_error_933f449d72fef598: p8,
      __wbg_error_50f60c611a3dcf64: g8,
      __wbg_addEventListener_ea90bc131475777e: D6,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: B8,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: n9,
      __wbg_set_width_f9e631f4ee129e5c: C$,
      __wbg_set_height_ef298446b359b0c5: Yy,
      __wbg_getContext_70c2d1bed75d4122: L8,
      __wbg_getContext_422b32d0ee4b8076: C8,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: N6,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: d5,
      __wbg_now_0f628e0e435c541b: E7,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: C5,
      __wbg_offsetX_0214819d43aaf6d5: W7,
      __wbg_offsetY_f18f571e33b385ab: z7,
      __wbg_button_bb3285fcdf965178: d3,
      __wbg_set_signal_4a69430cb12800f3: Qx,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: Y5,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: n8,
      __wbg_get_37b48b8fa52d1f2c: i9,
      __wbg_aborted_4d4114700dc4c251: I6,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: mS,
      __wbg_altKey_7412dd64f8c921c7: B6,
      __wbg_ctrlKey_00097886a21597a7: w5,
      __wbg_shiftKey_273ee8c901267b55: z$,
      __wbg_metaKey_1c2847b62ad062c1: $7,
      __wbg_repeat_46a5c90df9f6ef0b: dh,
      __wbg_isComposing_e3709163a95a2477: R9,
      __wbg_key_d6b3d2cce3d41872: E9,
      __wbg_code_87bb99fdec02d313: F3,
      __wbg_getModifierState_dae4d71262ea4ecb: H8,
      __wbg_signal_4d9d567be73ea52c: U$,
      __wbg_new_51233fa2a760b272: P7,
      __wbg_abort_6e6ea7d259504afc: A6,
      __wbg_preventDefault_c047d3e292b08cc4: Q7,
      __wbg_new_1e52e3c919312525: F7,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: t8,
      __wbg_observe_592b94857eed8e27: G7,
      __wbg_width_08e66520b99071f4: IS,
      __wbg_height_e9afb506f31052a9: l9,
      __wbg_queryCounterEXT_ebb00bcc96221671: eh,
      __wbg_contentRect_0fb8c8900d689a0c: E3,
      __wbg_width_a86bcd32bd998060: FS,
      __wbg_height_cd732bbdc7b66e49: w9,
      __wbg_set_width_031bdecd763c5855: M$,
      __wbg_set_height_ad5056ea051acd78: Qy,
      __wbg_getContext_486aab500e1c34c9: V8,
      __wbg_getContext_9fd4db9b1cf155db: E8,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: A9,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: F9,
      __wbg_arrayBuffer_ff96d08b7b6be32e: P6,
      __wbg_status_0053aa6239760447: Q$,
      __wbg_ok_c962da6f1a034d81: U7,
      __wbg_statusText_0f412961834ccfe9: J$,
      __wbg_instanceof_Response_79948c98d1d2ba75: T9,
      __wbg_resolve_d82363d90af6928a: mh,
      __wbg_then_591b6b3a75ee817a: kv,
      __wbg_iterator_cc47ba25a2be735a: L9,
      __wbg_get_9a29be2cb383ed9a: f9,
      __wbg_next_402fa10b59ab20c3: L7,
      __wbg_new_2e117a478906f062: D7,
      __wbg_new_36e147a8ced3c6e0: B7,
      __wbg_of_62183ea089c00bfa: O7,
      __wbg_isArray_145a34fd0a38d37b: M9,
      __wbg_new_e66a4b7758dd2e5c: M7,
      __wbg_isSafeInteger_a3389a198582f5f6: C9,
      __wbg_is_de5b366c746e004c: V9,
      __wbg_entries_c261c3fa1f281256: d8,
      __wbg_then_2a84678a50976959: Pv,
      __wbg_length_589238bdcf171f0e: O9,
      __wbg_prototypesetcall_d721637c7ca66eb8: Y7,
      __wbg_set_272b80acaf9a75e8: kh,
      __wbg_new_81880fb5002cb255: k7,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: C7,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: q$,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: K$,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: j$,
      __wbg_static_accessor_WINDOW_168f178805d978fe: N$,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: $9,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: D9,
      __wbg_queueMicrotask_311744e534a929a3: nh,
      __wbg_queueMicrotask_1c9b3800e321a967: rh,
      __wbg_set_4564f7dc44fcb0c9: Mh,
      __wbg___wbindgen_number_get_1cc01dd708740256: x6,
      __wbg___wbindgen_in_4990f46af709e33c: u6,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: v6,
      __wbg___wbindgen_is_null_6d937fbfb6478470: p6,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: h6,
      __wbg_Number_c4bdf66bb78f7977: a6,
      __wbg_Error_fdd633d4bb5dd76a: n6,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: d6,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: w6,
      __wbg___wbindgen_is_string_1fca8072260dd261: l6,
      __wbg___wbindgen_string_get_71bb4348194e31f0: $6,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: i6,
      __wbg___wbindgen_is_function_acc5528be2b923f2: g6,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: m6,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: y6,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: s6,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: S6,
      __wbg___wbindgen_debug_string_8a447059637473e2: f6,
      __wbindgen_init_externref_table: JS,
      __wbindgen_cast_0000000000000001: BS,
      __wbindgen_cast_0000000000000002: PS,
      __wbindgen_cast_0000000000000003: kS,
      __wbindgen_cast_0000000000000004: MS,
      __wbindgen_cast_0000000000000005: RS,
      __wbindgen_cast_0000000000000006: CS,
      __wbindgen_cast_0000000000000007: VS,
      __wbindgen_cast_0000000000000008: LS,
      __wbindgen_cast_0000000000000009: ES,
      __wbindgen_cast_000000000000000a: GS,
      __wbindgen_cast_000000000000000b: OS,
      __wbindgen_cast_000000000000000c: WS,
      __wbindgen_cast_000000000000000d: zS,
      __wbindgen_cast_000000000000000e: US,
      __wbindgen_cast_000000000000000f: HS,
      __wbindgen_cast_0000000000000010: qS,
      __wbindgen_cast_0000000000000011: jS,
      __wbindgen_cast_0000000000000012: KS,
      __wbindgen_cast_0000000000000013: NS
    }
  }, Ym), { memory: MA, clear: RA, on_frame: CA, show: VA, start: LA, stop_frames: EA, mount: GA, __wbg_proteusapp_free: OA, proteusapp_addChild: WA, proteusapp_animateTo: zA, proteusapp_bakeTexture: UA, proteusapp_bakedImageSize: HA, proteusapp_bakedTextSize: qA, proteusapp_bindKey: jA, proteusapp_channelDestroy: KA, proteusapp_channelSet: NA, proteusapp_clearFocus: JA, proteusapp_clearGlyphCache: QA, proteusapp_component: XA, proteusapp_copyBakedImageFrom: YA, proteusapp_createVideo: ZA, proteusapp_cropImage: eI, proteusapp_declareGeometry: _I, proteusapp_declaredGeometry: tI, proteusapp_destroy: rI, proteusapp_devices: nI, proteusapp_expectFont: aI, proteusapp_focus: oI, proteusapp_focused: bI, proteusapp_fontFailed: cI, proteusapp_freeResources: sI, proteusapp_get: iI, proteusapp_hideVideo: fI, proteusapp_inputDevices: uI, proteusapp_inputMode: dI, proteusapp_isFocused: gI, proteusapp_loadFont: pI, proteusapp_loadTexture: wI, proteusapp_measureText: lI, proteusapp_mergeFrom: mI, proteusapp_mergeFromWithBehavior: hI, proteusapp_new: yI, proteusapp_onAppKey: xI, proteusapp_onBlur: $I, proteusapp_onClick: vI, proteusapp_onDrag: SI, proteusapp_onDropped: AI, proteusapp_onFocus: II, proteusapp_onFocusLost: FI, proteusapp_onHoverEnter: TI, proteusapp_onHoverExit: DI, proteusapp_onKey: BI, proteusapp_onPress: PI, proteusapp_onRelease: kI, proteusapp_onTransitionComplete: MI, proteusapp_pointerLeft: RI, proteusapp_pointerMoved: CI, proteusapp_pointerPressed: VI, proteusapp_pointerReleased: LI, proteusapp_releaseVideo: EI, proteusapp_removeChild: GI, proteusapp_resetKeyMap: OI, proteusapp_setDeclaredGeometry: WI, proteusapp_setDefaultFocus: zI, proteusapp_setDevices: UI, proteusapp_setDisabled: HI, proteusapp_setFallbackFonts: qI, proteusapp_setFocusGroup: jI, proteusapp_setImage: KI, proteusapp_setInputDevices: NI, proteusapp_setInteractive: JI, proteusapp_setKeyRepeat: QI, proteusapp_setLongPressMs: XI, proteusapp_setNavigatingActions: YI, proteusapp_setNeighbour: ZI, proteusapp_setOpacity: eF, proteusapp_setReadingDirection: _F, proteusapp_setStyle: tF, proteusapp_setStyleTransition: rF, proteusapp_setText: nF, proteusapp_setTexture: aF, proteusapp_setTransitionInteraction: oF, proteusapp_setVideoCrossfade: bF, proteusapp_setVisible: cF, proteusapp_showVideo: sF, proteusapp_splitTo: iF, proteusapp_splitToWithBehavior: fF, proteusapp_splitToWithStates: uF, proteusapp_texture: dF, proteusapp_textureState: gF, proteusapp_tick: pF, proteusapp_transitionChannel: wF, proteusapp_unbindKey: lF, proteusapp_uploadVideoFrame: mF, __wbg_handle_free: hF, __wbg_texturehandle_free: yF, __wbg_transitionchannel_free: xF, __wbg_videohandle_free: $F, handle_fromId: vF, handle_id: SF, texturehandle_fromId: AF, texturehandle_id: IF, __abort_handler: FF, __instance_terminated: TF, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___f64______true_: DF, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_: BF, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined_______true_: PF, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_: kF, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true_: MF, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__4: RF, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__5: CF, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__6: VF, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke_______true_: LF, __wbindgen_malloc: EF, __wbindgen_realloc: GF, __wbindgen_exn_store: OF, __externref_table_alloc: WF, __wbindgen_externrefs: zF, __wbindgen_free: UF, __wbindgen_destroy_closure: HF, __externref_table_dealloc: qF, __wbindgen_start: Xt } = kA, jF = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: FF,
    __externref_table_alloc: WF,
    __externref_table_dealloc: qF,
    __instance_terminated: TF,
    __wbg_handle_free: hF,
    __wbg_proteusapp_free: OA,
    __wbg_texturehandle_free: yF,
    __wbg_transitionchannel_free: xF,
    __wbg_videohandle_free: $F,
    __wbindgen_destroy_closure: HF,
    __wbindgen_exn_store: OF,
    __wbindgen_externrefs: zF,
    __wbindgen_free: UF,
    __wbindgen_malloc: EF,
    __wbindgen_realloc: GF,
    __wbindgen_start: Xt,
    clear: RA,
    handle_fromId: vF,
    handle_id: SF,
    memory: MA,
    mount: GA,
    on_frame: CA,
    proteusapp_addChild: WA,
    proteusapp_animateTo: zA,
    proteusapp_bakeTexture: UA,
    proteusapp_bakedImageSize: HA,
    proteusapp_bakedTextSize: qA,
    proteusapp_bindKey: jA,
    proteusapp_channelDestroy: KA,
    proteusapp_channelSet: NA,
    proteusapp_clearFocus: JA,
    proteusapp_clearGlyphCache: QA,
    proteusapp_component: XA,
    proteusapp_copyBakedImageFrom: YA,
    proteusapp_createVideo: ZA,
    proteusapp_cropImage: eI,
    proteusapp_declareGeometry: _I,
    proteusapp_declaredGeometry: tI,
    proteusapp_destroy: rI,
    proteusapp_devices: nI,
    proteusapp_expectFont: aI,
    proteusapp_focus: oI,
    proteusapp_focused: bI,
    proteusapp_fontFailed: cI,
    proteusapp_freeResources: sI,
    proteusapp_get: iI,
    proteusapp_hideVideo: fI,
    proteusapp_inputDevices: uI,
    proteusapp_inputMode: dI,
    proteusapp_isFocused: gI,
    proteusapp_loadFont: pI,
    proteusapp_loadTexture: wI,
    proteusapp_measureText: lI,
    proteusapp_mergeFrom: mI,
    proteusapp_mergeFromWithBehavior: hI,
    proteusapp_new: yI,
    proteusapp_onAppKey: xI,
    proteusapp_onBlur: $I,
    proteusapp_onClick: vI,
    proteusapp_onDrag: SI,
    proteusapp_onDropped: AI,
    proteusapp_onFocus: II,
    proteusapp_onFocusLost: FI,
    proteusapp_onHoverEnter: TI,
    proteusapp_onHoverExit: DI,
    proteusapp_onKey: BI,
    proteusapp_onPress: PI,
    proteusapp_onRelease: kI,
    proteusapp_onTransitionComplete: MI,
    proteusapp_pointerLeft: RI,
    proteusapp_pointerMoved: CI,
    proteusapp_pointerPressed: VI,
    proteusapp_pointerReleased: LI,
    proteusapp_releaseVideo: EI,
    proteusapp_removeChild: GI,
    proteusapp_resetKeyMap: OI,
    proteusapp_setDeclaredGeometry: WI,
    proteusapp_setDefaultFocus: zI,
    proteusapp_setDevices: UI,
    proteusapp_setDisabled: HI,
    proteusapp_setFallbackFonts: qI,
    proteusapp_setFocusGroup: jI,
    proteusapp_setImage: KI,
    proteusapp_setInputDevices: NI,
    proteusapp_setInteractive: JI,
    proteusapp_setKeyRepeat: QI,
    proteusapp_setLongPressMs: XI,
    proteusapp_setNavigatingActions: YI,
    proteusapp_setNeighbour: ZI,
    proteusapp_setOpacity: eF,
    proteusapp_setReadingDirection: _F,
    proteusapp_setStyle: tF,
    proteusapp_setStyleTransition: rF,
    proteusapp_setText: nF,
    proteusapp_setTexture: aF,
    proteusapp_setTransitionInteraction: oF,
    proteusapp_setVideoCrossfade: bF,
    proteusapp_setVisible: cF,
    proteusapp_showVideo: sF,
    proteusapp_splitTo: iF,
    proteusapp_splitToWithBehavior: fF,
    proteusapp_splitToWithStates: uF,
    proteusapp_texture: dF,
    proteusapp_textureState: gF,
    proteusapp_tick: pF,
    proteusapp_transitionChannel: wF,
    proteusapp_unbindKey: lF,
    proteusapp_uploadVideoFrame: mF,
    show: VA,
    start: LA,
    stop_frames: EA,
    texturehandle_fromId: AF,
    texturehandle_id: IF,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke_______true_: LF,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___f64______true_: DF,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true_: MF,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__4: RF,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__5: CF,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__6: VF,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined_______true_: PF,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_: kF,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_: BF
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  PA(jF);
  Xt();
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
  const KF = `#version 300 es
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
}`, NF = `#version 300 es
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
}`, JF = `#version 300 es
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
  function Yt(_, e) {
    const t = (n, a) => {
      const o = _.createShader(n);
      if (_.shaderSource(o, a), _.compileShader(o), !_.getShaderParameter(o, _.COMPILE_STATUS)) throw new Error(_.getShaderInfoLog(o) ?? "shader failed to compile");
      return o;
    }, r = _.createProgram();
    if (_.attachShader(r, t(_.VERTEX_SHADER, e)), _.attachShader(r, t(_.FRAGMENT_SHADER, KF)), _.linkProgram(r), !_.getProgramParameter(r, _.LINK_STATUS)) throw new Error(_.getProgramInfoLog(r) ?? "program failed to link");
    return r;
  }
  function Zt(_) {
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
  function er(_) {
    _.viewport(0, 0, _.drawingBufferWidth, _.drawingBufferHeight), _.clearColor(0, 0, 0, 1), _.clear(_.COLOR_BUFFER_BIT), _.enable(_.BLEND), _.blendFunc(_.ONE, _.ONE_MINUS_SRC_ALPHA);
  }
  function QF(_) {
    return (e, t, r) => {
      const n = Yt(_, NF), a = Zt(_), o = _.createVertexArray();
      _.bindVertexArray(o);
      const b = _.getAttribLocation(n, "a_corner");
      _.enableVertexAttribArray(b), _.vertexAttribPointer(b, 2, _.FLOAT, false, 0, 0);
      const c = _.getUniformLocation(n, "u_rect"), u = _.getUniformLocation(n, "u_color");
      return {
        draw() {
          er(_), _.useProgram(n), _.bindVertexArray(o), _.uniform2f(_.getUniformLocation(n, "u_viewport"), re, ne), _.uniform1f(_.getUniformLocation(n, "u_radius"), r), e.forEach((d, D) => {
            _.uniform4f(c, t[D * 2], t[D * 2 + 1], d.width, d.height), _.uniform3f(u, d.r, d.g, d.b), _.drawArrays(_.TRIANGLE_STRIP, 0, 4);
          });
        },
        dispose() {
          _.deleteProgram(n), _.deleteBuffer(a), _.deleteVertexArray(o);
        }
      };
    };
  }
  function XF(_) {
    return (e, t, r) => {
      const n = Yt(_, JF), a = Zt(_), o = _.createVertexArray();
      _.bindVertexArray(o);
      const b = _.getAttribLocation(n, "a_corner");
      _.enableVertexAttribArray(b), _.vertexAttribPointer(b, 2, _.FLOAT, false, 0, 0);
      const c = new Float32Array(e.length * 7), u = _.createBuffer();
      _.bindBuffer(_.ARRAY_BUFFER, u), _.bufferData(_.ARRAY_BUFFER, c.byteLength, _.DYNAMIC_DRAW);
      const d = _.getAttribLocation(n, "a_rect"), D = _.getAttribLocation(n, "a_color");
      return _.enableVertexAttribArray(d), _.vertexAttribPointer(d, 4, _.FLOAT, false, 28, 0), _.vertexAttribDivisor(d, 1), _.enableVertexAttribArray(D), _.vertexAttribPointer(D, 3, _.FLOAT, false, 28, 16), _.vertexAttribDivisor(D, 1), {
        draw() {
          e.forEach((J, g_) => {
            const ae = g_ * 7;
            c[ae] = t[g_ * 2], c[ae + 1] = t[g_ * 2 + 1], c[ae + 2] = J.width, c[ae + 3] = J.height, c[ae + 4] = J.r, c[ae + 5] = J.g, c[ae + 6] = J.b;
          }), er(_), _.useProgram(n), _.bindVertexArray(o), _.bindBuffer(_.ARRAY_BUFFER, u), _.bufferSubData(_.ARRAY_BUFFER, 0, c), _.uniform2f(_.getUniformLocation(n, "u_viewport"), re, ne), _.uniform1f(_.getUniformLocation(n, "u_radius"), r), _.drawArraysInstanced(_.TRIANGLE_STRIP, 0, 4, e.length);
        },
        dispose() {
          _.deleteProgram(n), _.deleteBuffer(a), _.deleteBuffer(u), _.deleteVertexArray(o);
        }
      };
    };
  }
  function YF(_) {
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
  function ZF(_) {
    return _ < 0.5 ? 2 * _ * _ : 1 - (-2 * _ + 2) ** 2 / 2;
  }
  const eT = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
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
      const t = ZF(Math.min(1, (e - this.movedAt) / C_));
      for (let r = 0; r < this.current.length; r++) this.current[r] = this.from[r] + (this.to[r] - this.from[r]) * t;
    }
  }
  function _T(_, e, t) {
    const r = new nt(e), n = document.createDocumentFragment(), a = e.map((o, b) => {
      const c = document.createElement("div"), u = c.style;
      return u.position = "absolute", u.left = "0", u.top = "0", u.width = `${o.width}px`, u.height = `${o.height}px`, u.borderRadius = `${t}px`, u.background = `rgb(${Math.round(o.r * 255)} ${Math.round(o.g * 255)} ${Math.round(o.b * 255)})`, u.transform = Dt(r.current[b * 2], r.current[b * 2 + 1], o), u.transition = `transform ${C_}ms ${eT}`, n.append(c), c;
    });
    return _.append(n), {
      frame(o) {
        const b = r.retarget(o);
        b && a.forEach((c, u) => {
          c.style.transform = Dt(b[u * 2], b[u * 2 + 1], e[u]);
        });
      },
      dispose() {
        _.replaceChildren();
      }
    };
  }
  function Dt(_, e, t) {
    return `translate(${_ - t.width / 2}px, ${e - t.height / 2}px)`;
  }
  const tT = [
    100,
    1e3,
    5e3,
    1e4,
    25e3,
    5e4,
    1e5
  ], rT = 60, nT = 2e3, V_ = 1e5, Bt = 100, at = `proteus-bench:${location.pathname}`, aT = 300, oT = 15e3, s_ = document.getElementById("status"), _r = document.getElementById("results"), ye = document.getElementById("run"), f_ = document.getElementById("reset"), xe = {
    proteus: document.getElementById("proteus"),
    proteusRust: document.getElementById("proteus-rust"),
    webgl: document.getElementById("webgl"),
    canvas2d: document.getElementById("canvas2d"),
    css: document.getElementById("css")
  }, tr = new URLSearchParams(location.search), Te = ((_a2 = tr.get("counts")) == null ? void 0 : _a2.split(",").map(Number).filter((_) => _ > 0)) ?? tT, ot = (((_b2 = tr.get("scenes")) == null ? void 0 : _b2.split(",")) ?? [
    "small",
    "large",
    "moving"
  ]).filter((_) => _ in K);
  let rr = "unknown";
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
        rr = `${/WebGpu/i.test(a) ? "WebGPU" : /Gl/i.test(a) ? "WebGL2" : a}${o ? `, ${o}` : " (the browser doesn't name the GPU)"}`;
      }
      e(...t);
    };
  }
  function bT(_) {
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
        if (r += 1, r === 1 && (o = u), !b && (r >= rT || u - o > nT)) {
          b = true, a = u, n = u;
          return;
        }
        b && t.push(u - n), n = u, b && (t.length >= aT || u - a > oT) && (c(), e(bT(t)));
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
  const nr = Math.max(4096, 2 ** Math.ceil(Math.log2(Math.max(...Te))));
  let ar, L_;
  await Km("proteus", {
    setup(_) {
      ar = _;
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
        maxInstances: nr
      },
      frame: {
        skipIdleFrames: false
      }
    }
  });
  await t6("proteus-rust", nr);
  async function cT(_, e) {
    _6(_, e);
    const t = await ke((r) => (e6(r), () => r6()));
    return Zm(), t;
  }
  async function sT(_, e) {
    const t = ar, r = rt(_, e), n = (c, u, d) => ({
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
      d && a.forEach((D, J) => D.animateTo(n(d[J * 2], d[J * 2 + 1], J), {
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
  }), or = xe.canvas2d.getContext("2d");
  or.scale(Pe, Pe);
  async function ct(_, e, t) {
    const r = rt(e, t), n = new nt(r), a = _(r, n.current, K[e].radius), o = await ke(bt((b) => {
      e === "moving" && (n.retarget(b), n.advance(b)), a.draw();
    }));
    return a.dispose(), o;
  }
  async function iT(_) {
    const e = _T(xe.css, rt("moving", _), K.moving.radius), t = await ke(bt((r) => e.frame(r)));
    return e.dispose(), t;
  }
  function Pt(_) {
    for (const [e, t] of Object.entries(xe)) t.style.visibility = e === _ ? "visible" : "hidden";
  }
  const x_ = {
    title: "Proteus (TypeScript)",
    surface: "proteus",
    time: sT
  }, $_ = {
    title: "Proteus (Rust)",
    surface: "proteusRust",
    time: cT
  }, fT = {
    title: "CSS",
    surface: "css",
    time: (_, e) => iT(e)
  }, v_ = {
    title: "Canvas 2D",
    surface: "canvas2d",
    time: (_, e) => ct(YF(or), _, e)
  }, S_ = {
    title: "Naive WebGL2",
    surface: "webgl",
    time: (_, e) => ct(QF(we), _, e)
  }, A_ = {
    title: "Batched WebGL2",
    surface: "webgl",
    time: (_, e) => ct(XF(we), _, e)
  }, br = {
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
      fT,
      v_,
      S_,
      A_
    ]
  }, E_ = {
    small: 1 / 0,
    large: V_,
    moving: 1 / 0
  }, uT = {
    small: `Small components (${K.small.min}\u2013${K.small.max} px), still: the cost per component`,
    large: `Large components (${K.large.min}\u2013${K.large.max} px), still: filling pixels dominates`,
    moving: `Moving components (${K.moving.min}\u2013${K.moving.max} px): every one always moving`
  };
  function dT(_) {
    const e = we.getExtension("WEBGL_debug_renderer_info"), t = e ? we.getParameter(e.UNMASKED_RENDERER_WEBGL) : we.getParameter(we.RENDERER);
    return [
      `- Browser: ${navigator.userAgent}`,
      `- GPU: ${t}`,
      `- Proteus's adapter: ${rr}`,
      `- Device pixel ratio: ${Pe}; canvas ${re} \xD7 ${ne} CSS pixels`,
      `- Refresh rate: about ${(1e3 / _).toFixed(0)} Hz (a frame every ${_.toFixed(2)} ms)`
    ].join(`
`);
  }
  function gT() {
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
  const L = gT();
  if (L.running) {
    const [_, e, t] = L.running.split("|");
    L.cells[L.running] = "crashed | \u2014", L.dropped[`${_}|${t}`] = `crashed at ${e}`, L.running = void 0, i_();
  }
  const pT = (_) => `${_.median.toFixed(2)} | ${_.p99.toFixed(2)}`;
  function cr(_) {
    return Te.filter((e) => e <= E_[_]).flatMap((e) => br[_].map((t) => [
      e,
      t
    ])).filter(([e, t]) => L.cells[`${_}|${e}|${t.title}`] === void 0);
  }
  async function wT() {
    ye.disabled = true, f_.disabled = true, L.refresh === void 0 && (Pt("webgl"), s_.textContent = "Measuring the refresh rate\u2026", L.refresh = (await ke(bt(() => {
    }))).median, i_());
    for (const _ of ot) for (const [e, t] of cr(_)) {
      const r = `${_}|${e}|${t.title}`;
      if (L.dropped[`${_}|${t.title}`]) {
        L.cells[r] = "skipped | \u2014";
        continue;
      }
      Pt(t.surface), s_.textContent = `${_} scene, ${e} components: ${t.title}\u2026`, L.running = r, i_();
      try {
        const a = await t.time(_, e);
        L.cells[r] = pT(a), a.median >= Bt && (L.dropped[`${_}|${t.title}`] = `slower than ${Bt} ms a frame at ${e}`);
      } catch (a) {
        console.error(a), L.cells[r] = "failed | \u2014", L.dropped[`${_}|${t.title}`] = `failed at ${e}: ${String(a)}`;
      }
      L.running = void 0, i_(), _r.textContent = sr();
    }
    s_.textContent = "Done. Copy the results below.", ye.textContent = "Run", ye.disabled = false, f_.disabled = false;
  }
  function sr() {
    const _ = [
      dT(L.refresh ?? 0)
    ];
    for (const e of ot) {
      const t = br[e].map((a) => a.title), r = Te.filter((a) => a <= E_[e]).map((a) => t.map((o) => L.cells[`${e}|${a}|${o}`])).map((a, o) => ({
        count: Te.filter((b) => b <= E_[e])[o],
        cells: a
      })).filter(({ cells: a }) => a.some((o) => o !== void 0));
      if (r.length === 0) continue;
      _.push("", `### ${uT[e]}`, "", "Frame interval, median and p99, in milliseconds:", "", `| Components | ${t.map((a) => `${a} | p99`).join(" | ")} |`, `|---:|${t.map(() => "---:|---:").join("|")}|`, ...r.map(({ count: a, cells: o }) => `| ${a} | ${o.map((b) => b ?? "\u2026 | \u2026").join(" | ")} |`));
      const n = t.map((a) => [
        a,
        L.dropped[`${e}|${a}`]
      ]).filter(([, a]) => a).map(([a, o]) => `- ${a}: ${o}; skipped after that.`);
      n.length > 0 && _.push("", ...n), e === "large" && Te.some((a) => a > V_) && _.push("", `The large scene stops at ${V_}: past it, Safari's tab crashes.`);
    }
    return _.join(`
`);
  }
  ye.addEventListener("click", () => void wT());
  f_.addEventListener("click", () => {
    try {
      localStorage.removeItem(at);
    } catch {
    }
    location.reload();
  });
  const Me = Object.keys(L.cells).length > 0, st = ot.some((_) => cr(_).length > 0);
  Me && (_r.textContent = sr());
  ye.textContent = Me && st ? "Resume" : "Run";
  s_.textContent = Me ? st ? "A run was under way, and is saved: Resume carries on from where it stopped." : "The last run is complete; its results are below. Start over to run again." : "Ready. Keep this tab in front while it runs: a hidden tab stops drawing.";
  ye.disabled = Me && !st;
  f_.disabled = !Me;
})();
