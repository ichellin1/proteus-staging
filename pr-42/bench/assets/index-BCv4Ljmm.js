(async () => {
  var _a2, _b2;
  (function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
    new MutationObserver((n) => {
      for (const a of n) if (a.type === "childList") for (const b of a.addedNodes) b.tagName === "LINK" && b.rel === "modulepreload" && r(b);
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
  const ar = "" + new URL("proteus_sdk_web_bg-1lxeBMQ4.wasm", import.meta.url).href, G_ = async (_ = {}, e) => {
    let t;
    if (e.startsWith("data:")) {
      const r = e.replace(/^data:.*?base64,/, "");
      let n;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") n = Buffer.from(r, "base64");
      else if (typeof atob == "function") {
        const a = atob(r);
        n = new Uint8Array(a.length);
        for (let b = 0; b < a.length; b++) n[b] = a.charCodeAt(b);
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
  let y = class I_ {
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
      u.__wbg_handle_free(e, 0);
    }
    static fromId(e) {
      const t = u.handle_fromId(e);
      return I_.__wrap(t);
    }
    id() {
      return u.handle_id(this.__wbg_ptr);
    }
  };
  Symbol.dispose && (y.prototype[Symbol.dispose] = y.prototype.free);
  let D_ = class {
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ft.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      u.__wbg_proteusapp_free(e, 0);
    }
    addChild(e, t) {
      g(e, y), g(t, y);
      const r = u.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw D(r[0]);
    }
    animateTo(e, t, r) {
      g(e, y);
      const n = u.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw D(n[0]);
    }
    bakeTexture(e, t, r, n) {
      const a = u_(r, u.__wbindgen_malloc), b = L, o = u.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, b, n);
      return J.__wrap(o);
    }
    bakedImageSize(e) {
      return g(e, y), u.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return g(e, y), u.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bindKey(e, t) {
      const r = be(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = L, a = u.proteusapp_bindKey(this.__wbg_ptr, e, r, n);
      if (a[1]) throw D(a[0]);
    }
    channelDestroy(e) {
      g(e, ue);
      var t = e.__destroy_into_raw();
      u.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      g(e, ue), g(t, y), g(r, y);
      const b = u.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (b[1]) throw D(b[0]);
    }
    clearFocus() {
      u.proteusapp_clearFocus(this.__wbg_ptr);
    }
    clearGlyphCache() {
      u.proteusapp_clearGlyphCache(this.__wbg_ptr);
    }
    component(e) {
      const t = u.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw D(t[1]);
      return y.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      g(e, y), g(t, y);
      const r = u.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw D(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = u.proteusapp_createVideo(this.__wbg_ptr);
      return de.__wrap(e);
    }
    cropImage(e, t) {
      g(e, y);
      const r = u.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw D(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      g(e, y);
      const r = u.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    declaredGeometry(e) {
      return g(e, y), u.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      g(e, y);
      var t = e.__destroy_into_raw();
      const r = u.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    devices(e) {
      return g(e, y), u.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    focus(e) {
      g(e, y);
      const t = u.proteusapp_focus(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw D(t[0]);
    }
    focused() {
      const e = u.proteusapp_focused(this.__wbg_ptr);
      return e === 0 ? void 0 : y.__wrap(e);
    }
    freeResources(e) {
      g(e, y);
      const t = u.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw D(t[0]);
    }
    get(e) {
      return g(e, y), u.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      g(e, y);
      const t = u.proteusapp_hideVideo(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw D(t[0]);
    }
    inputDevices() {
      return u.proteusapp_inputDevices(this.__wbg_ptr);
    }
    inputMode() {
      let e, t;
      try {
        const r = u.proteusapp_inputMode(this.__wbg_ptr);
        return e = r[0], t = r[1], q(r[0], r[1]);
      } finally {
        u.__wbindgen_free(e, t, 1);
      }
    }
    isFocused(e) {
      return g(e, y), u.proteusapp_isFocused(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    loadTexture(e, t) {
      const r = u_(e, u.__wbindgen_malloc), n = L, a = u.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : J.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      g(e, y);
      const a = Le(t, u.__wbindgen_malloc), b = L, o = u.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, b, r, n);
      if (o[1]) throw D(o[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      g(e, y);
      const b = Le(t, u.__wbindgen_malloc), o = L, c = u.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, b, o, r, n, a);
      if (c[1]) throw D(c[0]);
    }
    constructor() {
      const e = u.proteusapp_new();
      return this.__wbg_ptr = e, ft.register(this, this.__wbg_ptr, this), this;
    }
    onAppKey(e) {
      u.proteusapp_onAppKey(this.__wbg_ptr, e);
    }
    onBlur(e, t) {
      g(e, y), u.proteusapp_onBlur(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onClick(e, t) {
      g(e, y), u.proteusapp_onClick(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDrag(e, t) {
      g(e, y), u.proteusapp_onDrag(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDropped(e, t) {
      g(e, ue), u.proteusapp_onDropped(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocus(e, t) {
      g(e, y), u.proteusapp_onFocus(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocusLost(e) {
      u.proteusapp_onFocusLost(this.__wbg_ptr, e);
    }
    onHoverEnter(e, t) {
      g(e, y), u.proteusapp_onHoverEnter(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverExit(e, t) {
      g(e, y), u.proteusapp_onHoverExit(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onKey(e, t) {
      g(e, y), u.proteusapp_onKey(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onPress(e, t) {
      g(e, y), u.proteusapp_onPress(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onRelease(e, t) {
      g(e, y), u.proteusapp_onRelease(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onTransitionComplete(e, t) {
      g(e, y), u.proteusapp_onTransitionComplete(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    pointerLeft() {
      u.proteusapp_pointerLeft(this.__wbg_ptr);
    }
    pointerMoved(e, t) {
      u.proteusapp_pointerMoved(this.__wbg_ptr, e, t);
    }
    pointerPressed() {
      u.proteusapp_pointerPressed(this.__wbg_ptr);
    }
    pointerReleased() {
      u.proteusapp_pointerReleased(this.__wbg_ptr);
    }
    releaseVideo(e) {
      g(e, de), u.proteusapp_releaseVideo(this.__wbg_ptr, e.__wbg_ptr);
    }
    removeChild(e, t) {
      g(e, y), g(t, y);
      const r = u.proteusapp_removeChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw D(r[0]);
    }
    resetKeyMap() {
      u.proteusapp_resetKeyMap(this.__wbg_ptr);
    }
    setDeclaredGeometry(e, t) {
      g(e, y);
      const r = u.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setDefaultFocus(e, t) {
      g(e, y);
      const r = u.proteusapp_setDefaultFocus(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setDevices(e, t) {
      g(e, y);
      const r = u.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setDisabled(e, t) {
      g(e, y);
      const r = u.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setFocusGroup(e, t) {
      g(e, y);
      const r = u.proteusapp_setFocusGroup(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setImage(e, t) {
      g(e, y);
      const r = u.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setInputDevices(e) {
      const t = u.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw D(t[0]);
    }
    setInteractive(e, t) {
      g(e, y);
      const r = u.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setKeyRepeat(e) {
      const t = u.proteusapp_setKeyRepeat(this.__wbg_ptr, e);
      if (t[1]) throw D(t[0]);
    }
    setLongPressMs(e) {
      u.proteusapp_setLongPressMs(this.__wbg_ptr, e);
    }
    setNavigatingActions(e) {
      const t = sb(e, u.__wbindgen_malloc), r = L;
      u.proteusapp_setNavigatingActions(this.__wbg_ptr, t, r);
    }
    setNeighbour(e, t, r) {
      g(e, y);
      const n = be(t, u.__wbindgen_malloc, u.__wbindgen_realloc), a = L, b = u.proteusapp_setNeighbour(this.__wbg_ptr, e.__wbg_ptr, n, a, !z(r), z(r) ? 0 : r);
      if (b[1]) throw D(b[0]);
    }
    setOpacity(e, t) {
      g(e, y);
      const r = u.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setReadingDirection(e) {
      const t = be(e, u.__wbindgen_malloc, u.__wbindgen_realloc), r = L, n = u.proteusapp_setReadingDirection(this.__wbg_ptr, t, r);
      if (n[1]) throw D(n[0]);
    }
    setStyleTransition(e, t) {
      g(e, y);
      const r = u.proteusapp_setStyleTransition(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setText(e, t) {
      g(e, y);
      const r = u.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setTexture(e, t) {
      g(e, y), g(t, J);
      const r = u.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw D(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      g(e, y);
      const r = u.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setVideoCrossfade(e, t) {
      g(e, y);
      const r = u.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw D(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      g(e, y);
      const r = u.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    showVideo(e, t) {
      g(e, y), g(t, de);
      const r = u.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw D(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      g(e, y);
      const a = Le(t, u.__wbindgen_malloc), b = L, o = u.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, b, r, n);
      if (o[1]) throw D(o[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      g(e, y);
      const b = Le(t, u.__wbindgen_malloc), o = L, c = u.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, b, o, r, n, a);
      if (c[1]) throw D(c[0]);
    }
    splitToWithStates(e, t, r, n) {
      g(e, y);
      const a = u.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw D(a[0]);
    }
    texture(e) {
      const t = u.proteusapp_texture(this.__wbg_ptr, e);
      return J.__wrap(t);
    }
    textureState(e) {
      return g(e, J), u.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
    }
    tick(e) {
      u.proteusapp_tick(this.__wbg_ptr, e);
    }
    transitionChannel(e) {
      const t = u.proteusapp_transitionChannel(this.__wbg_ptr, !z(e), z(e) ? 0 : e);
      return ue.__wrap(t);
    }
    unbindKey(e) {
      const t = u.proteusapp_unbindKey(this.__wbg_ptr, e);
      if (t[3]) throw D(t[2]);
      let r;
      return t[0] !== 0 && (r = q(t[0], t[1]).slice(), u.__wbindgen_free(t[0], t[1] * 1, 1)), r;
    }
    uploadVideoFrame(e, t, r, n) {
      g(e, de);
      const a = u_(n, u.__wbindgen_malloc), b = L;
      return u.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, b) !== 0;
    }
  };
  Symbol.dispose && (D_.prototype[Symbol.dispose] = D_.prototype.free);
  let J = class T_ {
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
      u.__wbg_texturehandle_free(e, 0);
    }
    static fromId(e) {
      const t = u.texturehandle_fromId(e);
      return T_.__wrap(t);
    }
    id() {
      return u.texturehandle_id(this.__wbg_ptr);
    }
  };
  Symbol.dispose && (J.prototype[Symbol.dispose] = J.prototype.free);
  let ue = class Ft {
    static __wrap(e) {
      const t = Object.create(Ft.prototype);
      return t.__wbg_ptr = e, dt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, dt.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      u.__wbg_transitionchannel_free(e, 0);
    }
  };
  Symbol.dispose && (ue.prototype[Symbol.dispose] = ue.prototype.free);
  let de = class Bt {
    static __wrap(e) {
      const t = Object.create(Bt.prototype);
      return t.__wbg_ptr = e, gt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, gt.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      u.__wbg_videohandle_free(e, 0);
    }
  };
  Symbol.dispose && (de.prototype[Symbol.dispose] = de.prototype.free);
  function br(_, e) {
    return Error(q(_, e));
  }
  function or(_) {
    return Number(_);
  }
  function cr(_, e) {
    const t = String(e), r = be(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = L;
    U().setInt32(_ + 4, n, true), U().setInt32(_ + 0, r, true);
  }
  function sr(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    U().setBigInt64(_ + 8, z(r) ? BigInt(0) : r, true), U().setInt32(_ + 0, !z(r), true);
  }
  function ir(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return z(t) ? 16777215 : t ? 1 : 0;
  }
  function fr(_, e) {
    const t = F_(e), r = be(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = L;
    U().setInt32(_ + 4, n, true), U().setInt32(_ + 0, r, true);
  }
  function ur(_, e) {
    return _ in e;
  }
  function dr(_) {
    return typeof _ == "bigint";
  }
  function gr(_) {
    return typeof _ == "function";
  }
  function pr(_) {
    return _ === null;
  }
  function wr(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function lr(_) {
    return typeof _ == "string";
  }
  function mr(_) {
    return _ === void 0;
  }
  function hr(_, e) {
    return _ === e;
  }
  function yr(_, e) {
    return _ == e;
  }
  function xr(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    U().setFloat64(_ + 8, z(r) ? 0 : r, true), U().setInt32(_ + 0, !z(r), true);
  }
  function $r(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = z(r) ? 0 : be(r, u.__wbindgen_malloc, u.__wbindgen_realloc), a = L;
    U().setInt32(_ + 4, a, true), U().setInt32(_ + 0, n, true);
  }
  function vr(_, e) {
    throw new Error(q(_, e));
  }
  function Sr(_) {
    _._wbg_cb_unref();
  }
  function Ar() {
    return H(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Ir() {
    return H(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function Dr() {
    return H(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Tr() {
    return H(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function Fr() {
    return H(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function Br(_, e) {
    return _.createBindGroup(e);
  }
  function Pr(_, e) {
    return _.createCommandEncoder(e);
  }
  function kr() {
    return H(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function Mr() {
    return H(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function Rr(_) {
    _.destroy();
  }
  function Cr(_) {
    return _.done;
  }
  function Vr(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function Lr(_) {
    _.end();
  }
  function Er(_) {
    return Object.entries(_);
  }
  function Gr(_) {
    return _.finish();
  }
  function Or(_, e) {
    return _.finish(e);
  }
  function Wr() {
    return H(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function zr(_, e) {
    return _[e >>> 0];
  }
  function Ur() {
    return H(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function Hr(_, e) {
    return _[e >>> 0];
  }
  function qr(_, e) {
    return _[e];
  }
  function jr(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function Kr(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function Nr(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function Jr(_) {
    return Array.isArray(_);
  }
  function Qr(_) {
    return Number.isSafeInteger(_);
  }
  function Xr() {
    return Symbol.iterator;
  }
  function Yr(_, e) {
    const t = e.label, r = be(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = L;
    U().setInt32(_ + 4, n, true), U().setInt32(_ + 0, r, true);
  }
  function Zr(_) {
    return _.length;
  }
  function en(_) {
    return _.length;
  }
  function _n(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function tn() {
    return new Object();
  }
  function rn() {
    return new Array();
  }
  function nn(_) {
    return new Uint8Array(_);
  }
  function an(_, e) {
    return new Error(q(_, e));
  }
  function bn(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function on() {
    return H(function(_) {
      return _.next();
    }, arguments);
  }
  function cn(_) {
    return _.next;
  }
  function sn(_) {
    return _.onSubmittedWorkDone();
  }
  function fn(_, e, t) {
    Uint8Array.prototype.set.call(z_(_, e), t);
  }
  function un(_, e) {
    return _.push(e);
  }
  function dn(_) {
    return _.queueMicrotask;
  }
  function gn(_) {
    queueMicrotask(_);
  }
  function pn(_) {
    return Promise.resolve(_);
  }
  function wn() {
    return H(function(_, e, t, r, n, a, b) {
      _.setBindGroup(e >>> 0, t, bb(r, n), a, b >>> 0);
    }, arguments);
  }
  function ln(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function mn(_, e, t, r, n) {
    _.setIndexBuffer(e, Pt[t], r, n);
  }
  function hn(_, e, t, r) {
    _.setIndexBuffer(e, Pt[t], r);
  }
  function yn(_, e) {
    _.setPipeline(e);
  }
  function xn(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function $n(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function vn(_, e, t, r, n, a, b) {
    _.setViewport(e, t, r, n, a, b);
  }
  function Sn(_, e, t) {
    _[e] = t;
  }
  function An(_, e) {
    _.a = e;
  }
  function In(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function Dn(_, e) {
    _.aspect = kt[e];
  }
  function Tn(_, e) {
    _.aspect = kt[e];
  }
  function Fn(_, e) {
    _.b = e;
  }
  function Bn(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function Pn(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function kn(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function Mn(_, e) {
    _.binding = e >>> 0;
  }
  function Rn(_, e) {
    _.buffer = e;
  }
  function Cn(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function Vn(_, e) {
    _.clearValue = e;
  }
  function Ln(_, e) {
    _.colorAttachments = e;
  }
  function En(_, e, t) {
    _[e >>> 0] = t;
  }
  function Gn(_, e) {
    _.depthClearValue = e;
  }
  function On(_, e) {
    _.depthLoadOp = O_[e];
  }
  function Wn(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function zn(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function Un(_, e) {
    _.depthStencilAttachment = e;
  }
  function Hn(_, e) {
    _.depthStoreOp = W_[e];
  }
  function qn(_, e) {
    _.dimension = ab[e];
  }
  function jn(_, e) {
    _.dimension = nb[e];
  }
  function Kn(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function Nn(_, e) {
    _.entries = e;
  }
  function Jn(_, e) {
    _.format = Mt[e];
  }
  function Qn(_, e) {
    _.format = Mt[e];
  }
  function Xn(_, e) {
    _.g = e;
  }
  function Yn(_, e) {
    _.height = e >>> 0;
  }
  function Zn(_, e, t) {
    _.label = q(e, t);
  }
  function ea(_, e, t) {
    _.label = q(e, t);
  }
  function _a(_, e, t) {
    _.label = q(e, t);
  }
  function ta(_, e, t) {
    _.label = q(e, t);
  }
  function ra(_, e, t) {
    _.label = q(e, t);
  }
  function na(_, e, t) {
    _.label = q(e, t);
  }
  function aa(_, e) {
    _.layout = e;
  }
  function ba(_, e) {
    _.loadOp = O_[e];
  }
  function oa(_, e) {
    _.mipLevel = e >>> 0;
  }
  function ca(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function sa(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function ia(_, e) {
    _.offset = e;
  }
  function fa(_, e) {
    _.offset = e;
  }
  function ua(_, e) {
    _.origin = e;
  }
  function da(_, e) {
    _.querySet = e;
  }
  function ga(_, e) {
    _.r = e;
  }
  function pa(_, e) {
    _.resolveTarget = e;
  }
  function wa(_, e) {
    _.resource = e;
  }
  function la(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function ma(_, e) {
    _.sampleCount = e >>> 0;
  }
  function ha(_, e) {
    _.size = e;
  }
  function ya(_, e) {
    _.size = e;
  }
  function xa(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function $a(_, e) {
    _.stencilLoadOp = O_[e];
  }
  function va(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function Sa(_, e) {
    _.stencilStoreOp = W_[e];
  }
  function Aa(_, e) {
    _.storeOp = W_[e];
  }
  function Ia(_, e) {
    _.texture = e;
  }
  function Da(_, e) {
    _.timestampWrites = e;
  }
  function Ta(_, e) {
    _.usage = e >>> 0;
  }
  function Fa(_, e) {
    _.usage = e >>> 0;
  }
  function Ba(_, e) {
    _.view = e;
  }
  function Pa(_, e) {
    _.view = e;
  }
  function ka(_, e) {
    _.viewFormats = e;
  }
  function Ma(_, e) {
    _.width = e >>> 0;
  }
  function Ra(_, e) {
    _.x = e >>> 0;
  }
  function Ca(_, e) {
    _.y = e >>> 0;
  }
  function Va(_, e) {
    _.z = e >>> 0;
  }
  function La() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return z(_) ? 0 : $e(_);
  }
  function Ea() {
    const _ = typeof global > "u" ? null : global;
    return z(_) ? 0 : $e(_);
  }
  function Ga() {
    const _ = typeof self > "u" ? null : self;
    return z(_) ? 0 : $e(_);
  }
  function Oa() {
    const _ = typeof window > "u" ? null : window;
    return z(_) ? 0 : $e(_);
  }
  function Wa(_, e) {
    _.submit(e);
  }
  function za(_, e, t) {
    return _.then(e, t);
  }
  function Ua(_, e, t) {
    return _.then(e, t);
  }
  function Ha(_, e) {
    return _.then(e);
  }
  function qa(_) {
    _.unmap();
  }
  function ja(_) {
    return _.value;
  }
  function Ka() {
    return H(function(_, e, t, r, n, a, b) {
      _.writeBuffer(e, t, z_(r, n), a, b);
    }, arguments);
  }
  function Na() {
    return H(function(_, e, t, r, n, a) {
      _.writeTexture(e, z_(t, r), n, a);
    }, arguments);
  }
  function Ja(_, e) {
    return Rt(_, e, tb);
  }
  function Qa(_, e) {
    return Rt(_, e, rb);
  }
  function Xa(_) {
    return _;
  }
  function Ya(_) {
    return _;
  }
  function Za(_, e) {
    return q(_, e);
  }
  function eb(_) {
    return BigInt.asUintN(64, _);
  }
  function _b() {
    const _ = u.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function tb(_, e, t) {
    u.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_(_, e, t);
  }
  function rb(_, e, t) {
    const r = u.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_(_, e, t);
    if (r[1]) throw D(r[0]);
  }
  const Pt = [
    "uint16",
    "uint32"
  ], O_ = [
    "load",
    "clear"
  ], W_ = [
    "store",
    "discard"
  ], kt = [
    "all",
    "stencil-only",
    "depth-only"
  ], nb = [
    "1d",
    "2d",
    "3d"
  ], Mt = [
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
  ], ab = [
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
  } : new FinalizationRegistry((_) => u.__wbg_handle_free(_, 1)), ft = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => u.__wbg_proteusapp_free(_, 1)), ut = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => u.__wbg_texturehandle_free(_, 1)), dt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => u.__wbg_transitionchannel_free(_, 1)), gt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => u.__wbg_videohandle_free(_, 1));
  function $e(_) {
    const e = u.__externref_table_alloc();
    return u.__wbindgen_externrefs.set(e, _), e;
  }
  function g(_, e) {
    if (!(_ instanceof e)) throw new Error(`expected instance of ${e.name}`);
  }
  const pt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => u.__wbindgen_destroy_closure(_.a, _.b));
  function F_(_) {
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
      n > 0 && (a += F_(_[0]));
      for (let b = 1; b < n; b++) a += ", " + F_(_[b]);
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
  function bb(_, e) {
    return _ = _ >>> 0, cb().subarray(_ / 4, _ / 4 + e);
  }
  function z_(_, e) {
    return _ = _ >>> 0, le().subarray(_ / 1, _ / 1 + e);
  }
  let se = null;
  function U() {
    return (se === null || se.buffer.detached === true || se.buffer.detached === void 0 && se.buffer !== u.memory.buffer) && (se = new DataView(u.memory.buffer)), se;
  }
  let Re = null;
  function ob() {
    return (Re === null || Re.byteLength === 0) && (Re = new Float64Array(u.memory.buffer)), Re;
  }
  function q(_, e) {
    return fb(_ >>> 0, e);
  }
  let Ce = null;
  function cb() {
    return (Ce === null || Ce.byteLength === 0) && (Ce = new Uint32Array(u.memory.buffer)), Ce;
  }
  let Ve = null;
  function le() {
    return (Ve === null || Ve.byteLength === 0) && (Ve = new Uint8Array(u.memory.buffer)), Ve;
  }
  function H(_, e) {
    try {
      return _.apply(this, e);
    } catch (t) {
      const r = $e(t);
      u.__wbindgen_exn_store(r);
    }
  }
  function z(_) {
    return _ == null;
  }
  function Rt(_, e, t) {
    const r = {
      a: _,
      b: e,
      cnt: 1
    }, n = (...a) => {
      r.cnt++;
      const b = r.a;
      r.a = 0;
      try {
        return t(b, r.b, ...a);
      } finally {
        r.a = b, n._wbg_cb_unref();
      }
    };
    return n._wbg_cb_unref = () => {
      --r.cnt === 0 && (u.__wbindgen_destroy_closure(r.a, r.b), r.a = 0, pt.unregister(r));
    }, pt.register(n, r, r), n;
  }
  function u_(_, e) {
    const t = e(_.length * 1, 1) >>> 0;
    return le().set(_, t / 1), L = _.length, t;
  }
  function Le(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return ob().set(_, t / 8), L = _.length, t;
  }
  function sb(_, e) {
    const t = e(_.length * 4, 4) >>> 0;
    for (let r = 0; r < _.length; r++) {
      const n = $e(_[r]);
      U().setUint32(t + 4 * r, n, true);
    }
    return L = _.length, t;
  }
  function be(_, e, t) {
    if (t === void 0) {
      const o = Ae.encode(_), c = e(o.length, 1) >>> 0;
      return le().subarray(c, c + o.length).set(o), L = o.length, c;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = le();
    let b = 0;
    for (; b < r; b++) {
      const o = _.charCodeAt(b);
      if (o > 127) break;
      a[n + b] = o;
    }
    if (b !== r) {
      b !== 0 && (_ = _.slice(b)), n = t(n, r, r = b + _.length * 3, 1) >>> 0;
      const o = le().subarray(n + b, n + r), c = Ae.encodeInto(_, o);
      b += c.written, n = t(n, r, b, 1) >>> 0;
    }
    return L = b, n;
  }
  function D(_) {
    const e = u.__wbindgen_externrefs.get(_);
    return u.__externref_table_dealloc(_), e;
  }
  let r_ = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  r_.decode();
  const ib = 2146435072;
  let d_ = 0;
  function fb(_, e) {
    return d_ += e, d_ >= ib && (r_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), r_.decode(), d_ = e), r_.decode(le().subarray(_, _ + e));
  }
  const Ae = new TextEncoder();
  "encodeInto" in Ae || (Ae.encodeInto = function(_, e) {
    const t = Ae.encode(_);
    return e.set(t), {
      read: _.length,
      written: t.length
    };
  });
  let L = 0, u;
  function ub(_) {
    u = _;
  }
  URL = globalThis.URL;
  const db = await G_({
    "./proteus_sdk_web_bg.js": {
      __wbg_next_0c4066e251d2eff9: on,
      __wbg_done_b62d4a7d2286852a: Cr,
      __wbg_value_49f783bb59765962: ja,
      __wbg_length_c6054974c0a6cdb9: en,
      __wbg_instanceof_Map_afa18d5840c04c15: Kr,
      __wbg_get_197a3fe98f169e38: zr,
      __wbg_get_unchecked_54a4374c38e08460: Hr,
      __wbg_call_5575218572ead796: Dr,
      __wbg_push_f724b5db8acf89d2: un,
      __wbg_set_dc601f4a69da0bc2: En,
      __wbg_call_8e98ed2f3c86c4b5: Tr,
      __wbg_call_0e855b388e315e17: Ir,
      __wbg_get_with_ref_key_6412cf3094599694: qr,
      __wbg_set_6be42768c690e380: Sn,
      __wbg_String_8564e559799eccda: cr,
      __wbg_set_texture_16d2be474ce6ad0c: Ia,
      __wbg_set_mip_level_246db61be15bdd69: oa,
      __wbg_set_x_56f0c2c08a62725c: Ra,
      __wbg_set_y_04fb8ce84735b4e1: Ca,
      __wbg_set_z_a51316db27a4941e: Va,
      __wbg_set_origin_9b3b0fbe0a5dc469: ua,
      __wbg_set_aspect_77332ac136ee94eb: Dn,
      __wbg_set_a_5f6e488475272136: An,
      __wbg_set_b_688365d692bba214: Fn,
      __wbg_set_g_d4d1d77cf8fdd362: Xn,
      __wbg_set_r_527e5a41c4b1a846: ga,
      __wbg_set_width_1a5e2e86fa5bdcd8: Ma,
      __wbg_set_height_e8b5483b8c117d5e: Yn,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: Wn,
      __wbg_set_format_e9d4b1475bb3bd3b: Qn,
      __wbg_set_size_a61ff22205255d61: ya,
      __wbg_set_usage_7fa9cd18d1104aca: Fa,
      __wbg_set_label_0c1bd0e976cf0a9a: ea,
      __wbg_set_dimension_36e13ccecae5af4b: jn,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: sa,
      __wbg_set_sample_count_865e1d19b84e27e6: ma,
      __wbg_set_view_formats_bab284fc81b40e70: ka,
      __wbg_createTexture_9e76b80a2dc0d12e: kr,
      __wbg_set_entries_fc76ca4d7da6a709: Nn,
      __wbg_set_layout_eeef59714f5bf48b: aa,
      __wbg_set_label_f92ae11c77d74198: na,
      __wbg_createBindGroup_2320df4db188406c: Br,
      __wbg_set_label_d1c24b5a7a3ac31d: ra,
      __wbg_createCommandEncoder_cd88faca35d9ed68: Pr,
      __wbg_set_color_attachments_abe67f6631926e28: Ln,
      __wbg_set_label_8fd860a36d2c7b74: ta,
      __wbg_set_view_dbd0294573f64d05: Pa,
      __wbg_set_depth_clear_value_442bf492734f63b6: Gn,
      __wbg_set_depth_load_op_34d430b74bb36d91: On,
      __wbg_set_depth_store_op_0ea0a215313dbda7: Hn,
      __wbg_set_depth_read_only_138a11b10c731094: zn,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: xa,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: $a,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: Sa,
      __wbg_set_stencil_read_only_fb489d191b6d969b: va,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: Un,
      __wbg_set_query_set_18679a8580267d5a: da,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: kn,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: Kn,
      __wbg_set_timestamp_writes_c552d52fbb417005: Da,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: Ar,
      __wbg_copyTextureToTexture_1be188df1e535c0a: Fr,
      __wbg_label_47480289cc2bce71: Yr,
      __wbg_set_label_2d2227f4d5991e50: _a,
      __wbg_finish_cfaeede3baf55be1: Or,
      __wbg_finish_087cb89c65c06eb1: Gr,
      __wbg_drawIndexed_68637ebab6dd8d6e: Vr,
      __wbg_setPipeline_bab24dbce96903b9: yn,
      __wbg_setViewport_f9d423db4f4b4b58: vn,
      __wbg_setBindGroup_4ba56e1e0d26f244: wn,
      __wbg_setBindGroup_6124849cc8547086: ln,
      __wbg_setIndexBuffer_17431786d06c1b7c: mn,
      __wbg_setIndexBuffer_a16ed5b869c87507: hn,
      __wbg_setVertexBuffer_b508baf8d0ffe331: $n,
      __wbg_setVertexBuffer_91c4b602d0289943: xn,
      __wbg_end_414453a89205612c: Lr,
      __wbg_writeBuffer_b4bdd36178348ca5: Ka,
      __wbg_set_bytes_per_row_91681ca78d744888: Cn,
      __wbg_set_rows_per_image_d198b7e73a38978b: la,
      __wbg_set_offset_a097a8050a3a9a33: fa,
      __wbg_writeTexture_b45b69132e46a227: Na,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: sn,
      __wbg_submit_1290d44bb76ecef4: Wa,
      __wbg_getMappedRange_5ed22727c9679168: Wr,
      __wbg_unmap_8f06698a75b8331a: qa,
      __wbg_destroy_b5b39f25f0799295: Rr,
      __wbg_mapAsync_bb0029907dd91181: _n,
      __wbg_set_dimension_174ad7e2fb67fb4e: qn,
      __wbg_set_format_90860b0321868db4: Jn,
      __wbg_set_aspect_a823a14d00d42d37: Tn,
      __wbg_set_base_array_layer_cc6c68d233489c4b: Bn,
      __wbg_set_array_layer_count_daec613068108a9d: In,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: Pn,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: ca,
      __wbg_set_label_03d2396d4655a3e1: Zn,
      __wbg_set_usage_7f0dda8309469b1c: Ta,
      __wbg_createView_cc96b5bdd3d5bf5e: Mr,
      __wbg_then_05edfc8a4fea5106: za,
      __wbg_set_load_op_56844f51434037bf: ba,
      __wbg_set_store_op_caeede4654b3d847: Aa,
      __wbg_set_view_bdeab150b5f0768c: Ba,
      __wbg_set_clear_value_642701f928a5ccb3: Vn,
      __wbg_set_resolve_target_fe76b3f99cf72078: pa,
      __wbg_set_buffer_55f096330c8912b4: Rn,
      __wbg_set_offset_73156b0e0b41d79a: ia,
      __wbg_set_size_1e6281b07cd39177: ha,
      __wbg_set_binding_f3c188a8cd21455b: Mn,
      __wbg_set_resource_fe385d2e3dadaf63: wa,
      __wbg_resolve_d82363d90af6928a: pn,
      __wbg_then_591b6b3a75ee817a: Ha,
      __wbg_iterator_cc47ba25a2be735a: Xr,
      __wbg_get_9a29be2cb383ed9a: Ur,
      __wbg_next_402fa10b59ab20c3: cn,
      __wbg_new_2e117a478906f062: tn,
      __wbg_new_36e147a8ced3c6e0: rn,
      __wbg_isArray_145a34fd0a38d37b: Jr,
      __wbg_new_e66a4b7758dd2e5c: an,
      __wbg_isSafeInteger_a3389a198582f5f6: Qr,
      __wbg_entries_c261c3fa1f281256: Er,
      __wbg_then_2a84678a50976959: Ua,
      __wbg_length_589238bdcf171f0e: Zr,
      __wbg_prototypesetcall_d721637c7ca66eb8: fn,
      __wbg_new_81880fb5002cb255: nn,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: bn,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: La,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: Ga,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Ea,
      __wbg_static_accessor_WINDOW_168f178805d978fe: Oa,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: jr,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: Nr,
      __wbg_queueMicrotask_311744e534a929a3: gn,
      __wbg_queueMicrotask_1c9b3800e321a967: dn,
      __wbg___wbindgen_number_get_1cc01dd708740256: xr,
      __wbg___wbindgen_in_4990f46af709e33c: ur,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: vr,
      __wbg___wbindgen_is_null_6d937fbfb6478470: pr,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: hr,
      __wbg_Number_c4bdf66bb78f7977: or,
      __wbg_Error_fdd633d4bb5dd76a: br,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: dr,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: wr,
      __wbg___wbindgen_is_string_1fca8072260dd261: lr,
      __wbg___wbindgen_string_get_71bb4348194e31f0: $r,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: ir,
      __wbg___wbindgen_is_function_acc5528be2b923f2: gr,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: mr,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: yr,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: sr,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: Sr,
      __wbg___wbindgen_debug_string_8a447059637473e2: fr,
      __wbindgen_init_externref_table: _b,
      __wbindgen_cast_0000000000000001: Ja,
      __wbindgen_cast_0000000000000002: Qa,
      __wbindgen_cast_0000000000000003: Xa,
      __wbindgen_cast_0000000000000004: Ya,
      __wbindgen_cast_0000000000000005: Za,
      __wbindgen_cast_0000000000000006: eb
    }
  }, ar), { memory: gb, __wbg_proteusapp_free: pb, proteusapp_addChild: wb, proteusapp_animateTo: lb, proteusapp_bakeTexture: mb, proteusapp_bakedImageSize: hb, proteusapp_bakedTextSize: yb, proteusapp_bindKey: xb, proteusapp_channelDestroy: $b, proteusapp_channelSet: vb, proteusapp_clearFocus: Sb, proteusapp_clearGlyphCache: Ab, proteusapp_component: Ib, proteusapp_copyBakedImageFrom: Db, proteusapp_createVideo: Tb, proteusapp_cropImage: Fb, proteusapp_declareGeometry: Bb, proteusapp_declaredGeometry: Pb, proteusapp_destroy: kb, proteusapp_devices: Mb, proteusapp_focus: Rb, proteusapp_focused: Cb, proteusapp_freeResources: Vb, proteusapp_get: Lb, proteusapp_hideVideo: Eb, proteusapp_inputDevices: Gb, proteusapp_inputMode: Ob, proteusapp_isFocused: Wb, proteusapp_loadTexture: zb, proteusapp_mergeFrom: Ub, proteusapp_mergeFromWithBehavior: Hb, proteusapp_new: qb, proteusapp_onAppKey: jb, proteusapp_onBlur: Kb, proteusapp_onClick: Nb, proteusapp_onDrag: Jb, proteusapp_onDropped: Qb, proteusapp_onFocus: Xb, proteusapp_onFocusLost: Yb, proteusapp_onHoverEnter: Zb, proteusapp_onHoverExit: eo, proteusapp_onKey: _o, proteusapp_onPress: to, proteusapp_onRelease: ro, proteusapp_onTransitionComplete: no, proteusapp_pointerLeft: ao, proteusapp_pointerMoved: bo, proteusapp_pointerPressed: oo, proteusapp_pointerReleased: co, proteusapp_releaseVideo: so, proteusapp_removeChild: io, proteusapp_resetKeyMap: fo, proteusapp_setDeclaredGeometry: uo, proteusapp_setDefaultFocus: go, proteusapp_setDevices: po, proteusapp_setDisabled: wo, proteusapp_setFocusGroup: lo, proteusapp_setImage: mo, proteusapp_setInputDevices: ho, proteusapp_setInteractive: yo, proteusapp_setKeyRepeat: xo, proteusapp_setLongPressMs: $o, proteusapp_setNavigatingActions: vo, proteusapp_setNeighbour: So, proteusapp_setOpacity: Ao, proteusapp_setReadingDirection: Io, proteusapp_setStyleTransition: Do, proteusapp_setText: To, proteusapp_setTexture: Fo, proteusapp_setTransitionInteraction: Bo, proteusapp_setVideoCrossfade: Po, proteusapp_setVisible: ko, proteusapp_showVideo: Mo, proteusapp_splitTo: Ro, proteusapp_splitToWithBehavior: Co, proteusapp_splitToWithStates: Vo, proteusapp_texture: Lo, proteusapp_textureState: Eo, proteusapp_tick: Go, proteusapp_transitionChannel: Oo, proteusapp_unbindKey: Wo, proteusapp_uploadVideoFrame: zo, __wbg_handle_free: Uo, __wbg_texturehandle_free: Ho, __wbg_transitionchannel_free: qo, __wbg_videohandle_free: jo, handle_fromId: Ko, handle_id: No, texturehandle_fromId: Jo, texturehandle_id: Qo, __abort_handler: Xo, __instance_terminated: Yo, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_: Zo, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_: ec, __wbindgen_malloc: _c, __wbindgen_realloc: tc, __wbindgen_exn_store: rc, __externref_table_alloc: nc, __wbindgen_externrefs: ac, __wbindgen_destroy_closure: bc, __externref_table_dealloc: oc, __wbindgen_free: cc, __wbindgen_start: Ct } = db, sc = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: Xo,
    __externref_table_alloc: nc,
    __externref_table_dealloc: oc,
    __instance_terminated: Yo,
    __wbg_handle_free: Uo,
    __wbg_proteusapp_free: pb,
    __wbg_texturehandle_free: Ho,
    __wbg_transitionchannel_free: qo,
    __wbg_videohandle_free: jo,
    __wbindgen_destroy_closure: bc,
    __wbindgen_exn_store: rc,
    __wbindgen_externrefs: ac,
    __wbindgen_free: cc,
    __wbindgen_malloc: _c,
    __wbindgen_realloc: tc,
    __wbindgen_start: Ct,
    handle_fromId: Ko,
    handle_id: No,
    memory: gb,
    proteusapp_addChild: wb,
    proteusapp_animateTo: lb,
    proteusapp_bakeTexture: mb,
    proteusapp_bakedImageSize: hb,
    proteusapp_bakedTextSize: yb,
    proteusapp_bindKey: xb,
    proteusapp_channelDestroy: $b,
    proteusapp_channelSet: vb,
    proteusapp_clearFocus: Sb,
    proteusapp_clearGlyphCache: Ab,
    proteusapp_component: Ib,
    proteusapp_copyBakedImageFrom: Db,
    proteusapp_createVideo: Tb,
    proteusapp_cropImage: Fb,
    proteusapp_declareGeometry: Bb,
    proteusapp_declaredGeometry: Pb,
    proteusapp_destroy: kb,
    proteusapp_devices: Mb,
    proteusapp_focus: Rb,
    proteusapp_focused: Cb,
    proteusapp_freeResources: Vb,
    proteusapp_get: Lb,
    proteusapp_hideVideo: Eb,
    proteusapp_inputDevices: Gb,
    proteusapp_inputMode: Ob,
    proteusapp_isFocused: Wb,
    proteusapp_loadTexture: zb,
    proteusapp_mergeFrom: Ub,
    proteusapp_mergeFromWithBehavior: Hb,
    proteusapp_new: qb,
    proteusapp_onAppKey: jb,
    proteusapp_onBlur: Kb,
    proteusapp_onClick: Nb,
    proteusapp_onDrag: Jb,
    proteusapp_onDropped: Qb,
    proteusapp_onFocus: Xb,
    proteusapp_onFocusLost: Yb,
    proteusapp_onHoverEnter: Zb,
    proteusapp_onHoverExit: eo,
    proteusapp_onKey: _o,
    proteusapp_onPress: to,
    proteusapp_onRelease: ro,
    proteusapp_onTransitionComplete: no,
    proteusapp_pointerLeft: ao,
    proteusapp_pointerMoved: bo,
    proteusapp_pointerPressed: oo,
    proteusapp_pointerReleased: co,
    proteusapp_releaseVideo: so,
    proteusapp_removeChild: io,
    proteusapp_resetKeyMap: fo,
    proteusapp_setDeclaredGeometry: uo,
    proteusapp_setDefaultFocus: go,
    proteusapp_setDevices: po,
    proteusapp_setDisabled: wo,
    proteusapp_setFocusGroup: lo,
    proteusapp_setImage: mo,
    proteusapp_setInputDevices: ho,
    proteusapp_setInteractive: yo,
    proteusapp_setKeyRepeat: xo,
    proteusapp_setLongPressMs: $o,
    proteusapp_setNavigatingActions: vo,
    proteusapp_setNeighbour: So,
    proteusapp_setOpacity: Ao,
    proteusapp_setReadingDirection: Io,
    proteusapp_setStyleTransition: Do,
    proteusapp_setText: To,
    proteusapp_setTexture: Fo,
    proteusapp_setTransitionInteraction: Bo,
    proteusapp_setVideoCrossfade: Po,
    proteusapp_setVisible: ko,
    proteusapp_showVideo: Mo,
    proteusapp_splitTo: Ro,
    proteusapp_splitToWithBehavior: Co,
    proteusapp_splitToWithStates: Vo,
    proteusapp_texture: Lo,
    proteusapp_textureState: Eo,
    proteusapp_tick: Go,
    proteusapp_transitionChannel: Oo,
    proteusapp_unbindKey: Wo,
    proteusapp_uploadVideoFrame: zo,
    texturehandle_fromId: Jo,
    texturehandle_id: Qo,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_: ec,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_: Zo
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ub(sc);
  Ct();
  const ic = "" + new URL("proteus_host_web_bg-f0fxsohg.wasm", import.meta.url).href;
  let x = class B_ {
    static __wrap(e) {
      const t = Object.create(B_.prototype);
      return t.__wbg_ptr = e, wt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, wt.unregister(this), e;
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
  let P_ = class Vt {
    static __wrap(e) {
      const t = Object.create(Vt.prototype);
      return t.__wbg_ptr = e, g_.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, g_.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      i.__wbg_proteusapp_free(e, 0);
    }
    addChild(e, t) {
      p(e, x), p(t, x);
      const r = i.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw T(r[0]);
    }
    animateTo(e, t, r) {
      p(e, x);
      const n = i.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw T(n[0]);
    }
    bakeTexture(e, t, r, n) {
      const a = p_(r, i.__wbindgen_malloc), b = R, o = i.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, b, n);
      return ae.__wrap(o);
    }
    bakedImageSize(e) {
      return p(e, x), i.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return p(e, x), i.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bindKey(e, t) {
      const r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R, a = i.proteusapp_bindKey(this.__wbg_ptr, e, r, n);
      if (a[1]) throw T(a[0]);
    }
    channelDestroy(e) {
      p(e, ge);
      var t = e.__destroy_into_raw();
      i.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      p(e, ge), p(t, x), p(r, x);
      const b = i.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (b[1]) throw T(b[0]);
    }
    clearFocus() {
      i.proteusapp_clearFocus(this.__wbg_ptr);
    }
    clearGlyphCache() {
      i.proteusapp_clearGlyphCache(this.__wbg_ptr);
    }
    component(e) {
      const t = i.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw T(t[1]);
      return x.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      p(e, x), p(t, x);
      const r = i.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw T(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = i.proteusapp_createVideo(this.__wbg_ptr);
      return pe.__wrap(e);
    }
    cropImage(e, t) {
      p(e, x);
      const r = i.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw T(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      p(e, x);
      const r = i.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    declaredGeometry(e) {
      return p(e, x), i.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      p(e, x);
      var t = e.__destroy_into_raw();
      const r = i.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    devices(e) {
      return p(e, x), i.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    focus(e) {
      p(e, x);
      const t = i.proteusapp_focus(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw T(t[0]);
    }
    focused() {
      const e = i.proteusapp_focused(this.__wbg_ptr);
      return e === 0 ? void 0 : x.__wrap(e);
    }
    freeResources(e) {
      p(e, x);
      const t = i.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw T(t[0]);
    }
    get(e) {
      return p(e, x), i.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      p(e, x);
      const t = i.proteusapp_hideVideo(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw T(t[0]);
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
    loadTexture(e, t) {
      const r = p_(e, i.__wbindgen_malloc), n = R, a = i.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : ae.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      p(e, x);
      const a = je(t, i.__wbindgen_malloc), b = R, o = i.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, b, r, n);
      if (o[1]) throw T(o[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      p(e, x);
      const b = je(t, i.__wbindgen_malloc), o = R, c = i.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, b, o, r, n, a);
      if (c[1]) throw T(c[0]);
    }
    constructor() {
      const e = i.proteusapp_new();
      return this.__wbg_ptr = e, g_.register(this, this.__wbg_ptr, this), this;
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
      if (r[1]) throw T(r[0]);
    }
    resetKeyMap() {
      i.proteusapp_resetKeyMap(this.__wbg_ptr);
    }
    setDeclaredGeometry(e, t) {
      p(e, x);
      const r = i.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setDefaultFocus(e, t) {
      p(e, x);
      const r = i.proteusapp_setDefaultFocus(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setDevices(e, t) {
      p(e, x);
      const r = i.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setDisabled(e, t) {
      p(e, x);
      const r = i.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setFocusGroup(e, t) {
      p(e, x);
      const r = i.proteusapp_setFocusGroup(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setImage(e, t) {
      p(e, x);
      const r = i.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setInputDevices(e) {
      const t = i.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw T(t[0]);
    }
    setInteractive(e, t) {
      p(e, x);
      const r = i.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setKeyRepeat(e) {
      const t = i.proteusapp_setKeyRepeat(this.__wbg_ptr, e);
      if (t[1]) throw T(t[0]);
    }
    setLongPressMs(e) {
      i.proteusapp_setLongPressMs(this.__wbg_ptr, e);
    }
    setNavigatingActions(e) {
      const t = Sl(e, i.__wbindgen_malloc), r = R;
      i.proteusapp_setNavigatingActions(this.__wbg_ptr, t, r);
    }
    setNeighbour(e, t, r) {
      p(e, x);
      const n = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R, b = i.proteusapp_setNeighbour(this.__wbg_ptr, e.__wbg_ptr, n, a, !$(r), $(r) ? 0 : r);
      if (b[1]) throw T(b[0]);
    }
    setOpacity(e, t) {
      p(e, x);
      const r = i.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setReadingDirection(e) {
      const t = W(e, i.__wbindgen_malloc, i.__wbindgen_realloc), r = R, n = i.proteusapp_setReadingDirection(this.__wbg_ptr, t, r);
      if (n[1]) throw T(n[0]);
    }
    setStyleTransition(e, t) {
      p(e, x);
      const r = i.proteusapp_setStyleTransition(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setText(e, t) {
      p(e, x);
      const r = i.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setTexture(e, t) {
      p(e, x), p(t, ae);
      const r = i.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw T(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      p(e, x);
      const r = i.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setVideoCrossfade(e, t) {
      p(e, x);
      const r = i.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw T(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      p(e, x);
      const r = i.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    showVideo(e, t) {
      p(e, x), p(t, pe);
      const r = i.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw T(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      p(e, x);
      const a = je(t, i.__wbindgen_malloc), b = R, o = i.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, b, r, n);
      if (o[1]) throw T(o[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      p(e, x);
      const b = je(t, i.__wbindgen_malloc), o = R, c = i.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, b, o, r, n, a);
      if (c[1]) throw T(c[0]);
    }
    splitToWithStates(e, t, r, n) {
      p(e, x);
      const a = i.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw T(a[0]);
    }
    texture(e) {
      const t = i.proteusapp_texture(this.__wbg_ptr, e);
      return ae.__wrap(t);
    }
    textureState(e) {
      return p(e, ae), i.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
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
      if (t[3]) throw T(t[2]);
      let r;
      return t[0] !== 0 && (r = A(t[0], t[1]).slice(), i.__wbindgen_free(t[0], t[1] * 1, 1)), r;
    }
    uploadVideoFrame(e, t, r, n) {
      p(e, pe);
      const a = p_(n, i.__wbindgen_malloc), b = R;
      return i.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, b) !== 0;
    }
  };
  Symbol.dispose && (P_.prototype[Symbol.dispose] = P_.prototype.free);
  let ae = class k_ {
    static __wrap(e) {
      const t = Object.create(k_.prototype);
      return t.__wbg_ptr = e, lt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, lt.unregister(this), e;
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
  Symbol.dispose && (ae.prototype[Symbol.dispose] = ae.prototype.free);
  let ge = class Lt {
    static __wrap(e) {
      const t = Object.create(Lt.prototype);
      return t.__wbg_ptr = e, mt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, mt.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      i.__wbg_transitionchannel_free(e, 0);
    }
  };
  Symbol.dispose && (ge.prototype[Symbol.dispose] = ge.prototype.free);
  let pe = class Et {
    static __wrap(e) {
      const t = Object.create(Et.prototype);
      return t.__wbg_ptr = e, ht.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ht.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      i.__wbg_videohandle_free(e, 0);
    }
  };
  Symbol.dispose && (pe.prototype[Symbol.dispose] = pe.prototype.free);
  function fc(_, e, t, r) {
    const n = W(_, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    return i.mount(n, a, e, $(t) ? 0 : B(t), r);
  }
  function uc(_, e) {
    return Error(A(_, e));
  }
  function dc(_) {
    return Number(_);
  }
  function gc(_, e) {
    const t = String(e), r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function pc(_) {
    return _.Window;
  }
  function wc(_) {
    return _.WorkerGlobalScope;
  }
  function lc(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    C().setBigInt64(_ + 8, $(r) ? BigInt(0) : r, true), C().setInt32(_ + 0, !$(r), true);
  }
  function mc(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return $(t) ? 16777215 : t ? 1 : 0;
  }
  function hc(_, e) {
    const t = M_(e), r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function yc(_, e) {
    return _ in e;
  }
  function xc(_) {
    return typeof _ == "bigint";
  }
  function $c(_) {
    return typeof _ == "function";
  }
  function vc(_) {
    return _ === null;
  }
  function Sc(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function Ac(_) {
    return typeof _ == "string";
  }
  function Ic(_) {
    return _ === void 0;
  }
  function Dc(_, e) {
    return _ === e;
  }
  function Tc(_, e) {
    return _ == e;
  }
  function Fc(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    C().setFloat64(_ + 8, $(r) ? 0 : r, true), C().setInt32(_ + 0, !$(r), true);
  }
  function Bc(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Pc(_, e) {
    throw new Error(A(_, e));
  }
  function kc(_) {
    _._wbg_cb_unref();
  }
  function Mc(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Rc(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Cc() {
    return h(function(_, e, t, r) {
      _.addEventListener(A(e, t), r);
    }, arguments);
  }
  function Vc(_) {
    return _.altKey;
  }
  function Lc(_, e, t) {
    _.attachShader(e, t);
  }
  function Ec(_, e, t) {
    _.attachShader(e, t);
  }
  function Gc(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function Oc() {
    return h(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Wc(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, A(r, n));
  }
  function zc(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, A(r, n));
  }
  function Uc(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function Hc(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function qc(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function jc(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function Kc(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function Nc(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Jc(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Qc(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function Xc(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Yc(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Zc(_, e) {
    _.bindVertexArrayOES(e);
  }
  function es(_, e) {
    _.bindVertexArray(e);
  }
  function _s(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function ts(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function rs(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function ns(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function as(_, e) {
    _.blendEquation(e >>> 0);
  }
  function bs(_, e) {
    _.blendEquation(e >>> 0);
  }
  function os(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function cs(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function ss(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function is(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function fs(_, e, t, r, n, a, b, o, c, f, d) {
    _.blitFramebuffer(e, t, r, n, a, b, o, c, f >>> 0, d >>> 0);
  }
  function us(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function ds(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function gs(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function ps(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function ws(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function ls(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function ms(_) {
    return _.button;
  }
  function hs() {
    return h(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function ys() {
    return h(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function xs() {
    return h(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function $s(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, E(r, n));
  }
  function vs(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, Y(r, n));
  }
  function Ss(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, ve(r, n));
  }
  function As(_, e) {
    _.clearDepth(e);
  }
  function Is(_, e) {
    _.clearDepth(e);
  }
  function Ds(_, e) {
    _.clearStencil(e);
  }
  function Ts(_, e) {
    _.clearStencil(e);
  }
  function Fs(_, e) {
    _.clear(e >>> 0);
  }
  function Bs(_, e) {
    _.clear(e >>> 0);
  }
  function Ps(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function ks(_, e) {
    const t = e.code, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Ms(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Rs(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Cs(_, e) {
    _.compileShader(e);
  }
  function Vs(_, e) {
    _.compileShader(e);
  }
  function Ls(_, e, t, r, n, a, b, o, c) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c);
  }
  function Es(_, e, t, r, n, a, b, o, c) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c);
  }
  function Gs(_, e, t, r, n, a, b, o, c, f) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c, f);
  }
  function Os(_, e, t, r, n, a, b, o, c, f, d, I) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, b, o, c, f >>> 0, d, I);
  }
  function Ws(_, e, t, r, n, a, b, o, c, f, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, b, o, c, f >>> 0, d);
  }
  function zs() {
    return h(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function Us(_) {
    return _.contentRect;
  }
  function Hs(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function qs(_, e, t, r, n, a, b, o, c) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, b, o, c);
  }
  function js(_, e, t, r, n, a, b, o, c) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, b, o, c);
  }
  function Ks(_, e, t, r, n, a, b, o, c, f) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, b, o, c, f);
  }
  function Ns() {
    return h(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function Js() {
    return h(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function Qs(_, e) {
    return _.createBindGroup(e);
  }
  function Xs(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : B(e);
  }
  function Ys() {
    return h(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function Zs(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : B(e);
  }
  function ei(_, e) {
    return _.createCommandEncoder(e);
  }
  function _i(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : B(e);
  }
  function ti(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : B(e);
  }
  function ri(_, e) {
    return _.createPipelineLayout(e);
  }
  function ni(_) {
    const e = _.createProgram();
    return $(e) ? 0 : B(e);
  }
  function ai(_) {
    const e = _.createProgram();
    return $(e) ? 0 : B(e);
  }
  function bi(_) {
    const e = _.createQuery();
    return $(e) ? 0 : B(e);
  }
  function oi() {
    return h(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function ci(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : B(e);
  }
  function si(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : B(e);
  }
  function ii(_, e) {
    return _.createSampler(e);
  }
  function fi(_) {
    const e = _.createSampler();
    return $(e) ? 0 : B(e);
  }
  function ui(_, e) {
    return _.createShaderModule(e);
  }
  function di(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : B(t);
  }
  function gi(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : B(t);
  }
  function pi(_) {
    const e = _.createTexture();
    return $(e) ? 0 : B(e);
  }
  function wi(_) {
    const e = _.createTexture();
    return $(e) ? 0 : B(e);
  }
  function li() {
    return h(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function mi(_) {
    const e = _.createVertexArrayOES();
    return $(e) ? 0 : B(e);
  }
  function hi(_) {
    const e = _.createVertexArray();
    return $(e) ? 0 : B(e);
  }
  function yi() {
    return h(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function xi(_) {
    return _.ctrlKey;
  }
  function $i(_, e) {
    _.cullFace(e >>> 0);
  }
  function vi(_, e) {
    _.cullFace(e >>> 0);
  }
  function Si(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function Ai(_, e) {
    _.deleteBuffer(e);
  }
  function Ii(_, e) {
    _.deleteBuffer(e);
  }
  function Di(_, e) {
    _.deleteFramebuffer(e);
  }
  function Ti(_, e) {
    _.deleteFramebuffer(e);
  }
  function Fi(_, e) {
    _.deleteProgram(e);
  }
  function Bi(_, e) {
    _.deleteProgram(e);
  }
  function Pi(_, e) {
    _.deleteQuery(e);
  }
  function ki(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Mi(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Ri(_, e) {
    _.deleteSampler(e);
  }
  function Ci(_, e) {
    _.deleteShader(e);
  }
  function Vi(_, e) {
    _.deleteShader(e);
  }
  function Li(_, e) {
    _.deleteSync(e);
  }
  function Ei(_, e) {
    _.deleteTexture(e);
  }
  function Gi(_, e) {
    _.deleteTexture(e);
  }
  function Oi(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function Wi(_, e) {
    _.deleteVertexArray(e);
  }
  function zi(_, e) {
    _.depthFunc(e >>> 0);
  }
  function Ui(_, e) {
    _.depthFunc(e >>> 0);
  }
  function Hi(_, e) {
    _.depthMask(e !== 0);
  }
  function qi(_, e) {
    _.depthMask(e !== 0);
  }
  function ji(_, e, t) {
    _.depthRange(e, t);
  }
  function Ki(_, e, t) {
    _.depthRange(e, t);
  }
  function Ni(_, e) {
    const t = e.description, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Ji(_) {
    _.destroy();
  }
  function Qi(_) {
    return _.devicePixelRatio;
  }
  function Xi(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function Yi(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function Zi(_, e) {
    _.disable(e >>> 0);
  }
  function ef(_, e) {
    _.disable(e >>> 0);
  }
  function _f(_) {
    const e = _.document;
    return $(e) ? 0 : B(e);
  }
  function tf(_) {
    return _.done;
  }
  function rf(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function nf(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function af(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function bf(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function of(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function cf(_, e) {
    _.drawBuffers(e);
  }
  function sf(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function ff(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function uf(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function df(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function gf(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function pf(_, e) {
    _.enable(e >>> 0);
  }
  function wf(_, e) {
    _.enable(e >>> 0);
  }
  function lf(_, e) {
    _.endQuery(e >>> 0);
  }
  function mf(_) {
    _.end();
  }
  function hf(_) {
    return Object.entries(_);
  }
  function yf(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function xf(_) {
    console.error(_);
  }
  function $f(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(A(_, e));
    } finally {
      i.__wbindgen_free(t, r, 1);
    }
  }
  function vf(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return $(r) ? 0 : B(r);
  }
  function Sf(_) {
    return _.finish();
  }
  function Af(_, e) {
    return _.finish(e);
  }
  function If(_) {
    _.flush();
  }
  function Df(_) {
    _.flush();
  }
  function Tf() {
    return h(function(_) {
      _.focus();
    }, arguments);
  }
  function Ff(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function Bf(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function Pf(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function kf(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function Mf(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function Rf(_, e, t, r, n, a, b) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, b);
  }
  function Cf(_, e) {
    _.frontFace(e >>> 0);
  }
  function Vf(_, e) {
    _.frontFace(e >>> 0);
  }
  function Lf(_) {
    return _.getBoundingClientRect();
  }
  function Ef(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function Gf() {
    return h(function(_, e, t, r) {
      const n = _.getContext(A(e, t), r);
      return $(n) ? 0 : B(n);
    }, arguments);
  }
  function Of() {
    return h(function(_, e, t) {
      const r = _.getContext(A(e, t));
      return $(r) ? 0 : B(r);
    }, arguments);
  }
  function Wf() {
    return h(function(_, e, t) {
      const r = _.getContext(A(e, t));
      return $(r) ? 0 : B(r);
    }, arguments);
  }
  function zf() {
    return h(function(_, e, t, r) {
      const n = _.getContext(A(e, t), r);
      return $(n) ? 0 : B(n);
    }, arguments);
  }
  function Uf() {
    return h(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function Hf(_, e, t) {
    const r = _.getElementById(A(e, t));
    return $(r) ? 0 : B(r);
  }
  function qf() {
    return h(function(_, e, t) {
      const r = _.getExtension(A(e, t));
      return $(r) ? 0 : B(r);
    }, arguments);
  }
  function jf() {
    return h(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function Kf() {
    return h(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function Nf(_, e, t) {
    return _.getModifierState(A(e, t));
  }
  function Jf() {
    return h(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function Qf() {
    return h(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function Xf(_) {
    const e = _.getPreferredCanvasFormat();
    return (oe.indexOf(e) + 1 || 96) - 1;
  }
  function Yf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Zf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function eu(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function _u(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function tu(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function ru(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function nu(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function au(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function bu(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function ou(_) {
    const e = _.getSupportedExtensions();
    return $(e) ? 0 : B(e);
  }
  function cu(_) {
    const e = _.getSupportedProfiles();
    return $(e) ? 0 : B(e);
  }
  function su(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function iu(_, e, t, r) {
    return _.getUniformBlockIndex(e, A(t, r));
  }
  function fu(_, e, t, r) {
    const n = _.getUniformLocation(e, A(t, r));
    return $(n) ? 0 : B(n);
  }
  function uu(_, e, t, r) {
    const n = _.getUniformLocation(e, A(t, r));
    return $(n) ? 0 : B(n);
  }
  function du(_, e) {
    return _[e >>> 0];
  }
  function gu(_, e) {
    const t = _[e >>> 0];
    return $(t) ? 0 : B(t);
  }
  function pu() {
    return h(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function wu(_, e) {
    return _[e >>> 0];
  }
  function lu(_, e) {
    return _[e];
  }
  function mu(_) {
    return _.gpu;
  }
  function hu(_, e, t) {
    return _.hasAttribute(A(e, t));
  }
  function yu(_) {
    return _.height;
  }
  function xu(_) {
    return _.height;
  }
  function $u(_) {
    return _.hidden;
  }
  function vu(_, e, t) {
    return _.includes(e, t);
  }
  function Su(_) {
    return _.info;
  }
  function Au(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function Iu(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function Du(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function Tu(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Fu(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function Bu(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function Pu(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function ku(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function Mu(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Ru(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function Cu() {
    return h(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function Vu(_) {
    return Array.isArray(_);
  }
  function Lu(_) {
    return _.isComposing;
  }
  function Eu(_) {
    return Number.isSafeInteger(_);
  }
  function Gu(_, e) {
    return Object.is(_, e);
  }
  function Ou() {
    return Symbol.iterator;
  }
  function Wu(_, e) {
    const t = e.key, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function zu(_, e) {
    const t = e.label, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Uu(_) {
    return _.length;
  }
  function Hu(_) {
    return _.length;
  }
  function qu(_) {
    return _.limits;
  }
  function ju(_) {
    return _.limits;
  }
  function Ku(_, e) {
    _.linkProgram(e);
  }
  function Nu(_, e) {
    _.linkProgram(e);
  }
  function Ju(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function Qu(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function Xu(_) {
    return _.maxBindGroups;
  }
  function Yu(_) {
    return _.maxBindingsPerBindGroup;
  }
  function Zu(_) {
    return _.maxBufferSize;
  }
  function ed(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function _d(_) {
    return _.maxColorAttachments;
  }
  function td(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function rd(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function nd(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function ad(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function bd(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function od(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function cd(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function sd(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function id(_) {
    return _.maxInterStageShaderVariables;
  }
  function fd(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function ud(_) {
    return _.maxSamplersPerShaderStage;
  }
  function dd(_) {
    return _.maxStorageBufferBindingSize;
  }
  function gd(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function pd(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function wd(_) {
    return _.maxTextureArrayLayers;
  }
  function ld(_) {
    return _.maxTextureDimension1D;
  }
  function md(_) {
    return _.maxTextureDimension2D;
  }
  function hd(_) {
    return _.maxTextureDimension3D;
  }
  function yd(_) {
    return _.maxUniformBufferBindingSize;
  }
  function xd(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function $d(_) {
    return _.maxVertexAttributes;
  }
  function vd(_) {
    return _.maxVertexBufferArrayStride;
  }
  function Sd(_) {
    return _.maxVertexBuffers;
  }
  function Ad(_) {
    return _.metaKey;
  }
  function Id(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function Dd(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function Td(_) {
    return _.navigator;
  }
  function Fd(_) {
    return _.navigator;
  }
  function Bd() {
    return h(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function Pd() {
    return new Error();
  }
  function kd() {
    return new Object();
  }
  function Md() {
    return new Array();
  }
  function Rd(_) {
    return new Uint8Array(_);
  }
  function Cd(_, e) {
    return new Error(A(_, e));
  }
  function Vd(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, b) => {
        const o = t.a;
        t.a = 0;
        try {
          return Y2(o, t.b, a, b);
        } finally {
          t.a = o;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function Ld(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function Ed() {
    return h(function(_) {
      return _.next();
    }, arguments);
  }
  function Gd(_) {
    return _.next;
  }
  function Od(_, e) {
    _.observe(e);
  }
  function Wd(_) {
    return Array.of(_);
  }
  function zd(_) {
    return _.offsetX;
  }
  function Ud(_) {
    return _.offsetY;
  }
  function Hd(_) {
    return _.onSubmittedWorkDone();
  }
  function qd(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function jd(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function Kd(_, e, t) {
    _.polygonOffset(e, t);
  }
  function Nd(_, e, t) {
    _.polygonOffset(e, t);
  }
  function Jd(_) {
    _.preventDefault();
  }
  function Qd(_) {
    return P_.__wrap(_);
  }
  function Xd(_, e, t) {
    Uint8Array.prototype.set.call(s_(_, e), t);
  }
  function Yd(_, e) {
    return _.push(e);
  }
  function Zd(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function e0() {
    return h(function(_, e, t) {
      return _.querySelectorAll(A(e, t));
    }, arguments);
  }
  function _0() {
    return h(function(_, e, t) {
      const r = _.querySelector(A(e, t));
      return $(r) ? 0 : B(r);
    }, arguments);
  }
  function t0(_) {
    return _.queueMicrotask;
  }
  function r0(_) {
    queueMicrotask(_);
  }
  function n0(_) {
    return _.queue;
  }
  function a0(_, e) {
    _.readBuffer(e >>> 0);
  }
  function b0() {
    return h(function(_, e, t, r, n, a, b, o) {
      _.readPixels(e, t, r, n, a >>> 0, b >>> 0, o);
    }, arguments);
  }
  function o0() {
    return h(function(_, e, t, r, n, a, b, o) {
      _.readPixels(e, t, r, n, a >>> 0, b >>> 0, o);
    }, arguments);
  }
  function c0() {
    return h(function(_, e, t, r, n, a, b, o) {
      _.readPixels(e, t, r, n, a >>> 0, b >>> 0, o);
    }, arguments);
  }
  function s0(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function i0(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function f0(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function u0(_) {
    return _.repeat;
  }
  function d0(_, e) {
    return _.requestAdapter(e);
  }
  function g0(_) {
    return _.requestAdapter();
  }
  function p0() {
    return h(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function w0(_, e) {
    return _.requestDevice(e);
  }
  function l0(_) {
    return Promise.resolve(_);
  }
  function m0(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function h0(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function y0(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function x0(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function $0() {
    return h(function(_, e, t, r, n) {
      _.setAttribute(A(e, t), A(r, n));
    }, arguments);
  }
  function v0() {
    return h(function(_, e, t, r, n, a, b) {
      _.setBindGroup(e >>> 0, t, ve(r, n), a, b >>> 0);
    }, arguments);
  }
  function S0(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function A0(_, e, t, r, n) {
    _.setIndexBuffer(e, q_[t], r, n);
  }
  function I0(_, e, t, r) {
    _.setIndexBuffer(e, q_[t], r);
  }
  function D0(_, e) {
    _.setPipeline(e);
  }
  function T0(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function F0(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function B0(_, e, t, r, n, a, b) {
    _.setViewport(e, t, r, n, a, b);
  }
  function P0(_, e, t) {
    _.set(e, t >>> 0);
  }
  function k0() {
    return h(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function M0(_, e, t) {
    _[e] = t;
  }
  function R0(_, e) {
    _.a = e;
  }
  function C0(_, e) {
    _.access = sl[e];
  }
  function V0(_, e) {
    _.addressModeU = U_[e];
  }
  function L0(_, e) {
    _.addressModeV = U_[e];
  }
  function E0(_, e) {
    _.addressModeW = U_[e];
  }
  function G0(_, e) {
    _.alpha = e;
  }
  function O0(_, e) {
    _.alphaMode = tl[e];
  }
  function W0(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function z0(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function U0(_, e) {
    _.arrayStride = e;
  }
  function H0(_, e) {
    _.aspect = Wt[e];
  }
  function q0(_, e) {
    _.aspect = Wt[e];
  }
  function j0(_, e) {
    _.attributes = e;
  }
  function K0(_, e) {
    _.b = e;
  }
  function N0(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function J0(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function Q0(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function X0(_, e) {
    _.bindGroupLayouts = e;
  }
  function Y0(_, e) {
    _.binding = e >>> 0;
  }
  function Z0(_, e) {
    _.binding = e >>> 0;
  }
  function eg(_, e) {
    _.blend = e;
  }
  function _g(_, e) {
    _.buffer = e;
  }
  function tg(_, e) {
    _.buffer = e;
  }
  function rg(_, e) {
    _.buffers = e;
  }
  function ng(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function ag(_, e) {
    _.clearValue = e;
  }
  function bg(_, e, t) {
    _.code = A(e, t);
  }
  function og(_, e) {
    _.colorAttachments = e;
  }
  function cg(_, e) {
    _.color = e;
  }
  function sg(_, e) {
    _.compare = H_[e];
  }
  function ig(_, e) {
    _.compare = H_[e];
  }
  function fg(_, e) {
    _.count = e >>> 0;
  }
  function ug(_, e) {
    _.cullMode = rl[e];
  }
  function dg(_, e, t) {
    _[e >>> 0] = t;
  }
  function gg(_, e) {
    _.depthBias = e;
  }
  function pg(_, e) {
    _.depthBiasClamp = e;
  }
  function wg(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function lg(_, e) {
    _.depthClearValue = e;
  }
  function mg(_, e) {
    _.depthCompare = H_[e];
  }
  function hg(_, e) {
    _.depthFailOp = K_[e];
  }
  function yg(_, e) {
    _.depthLoadOp = j_[e];
  }
  function xg(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function $g(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function vg(_, e) {
    _.depthStencil = e;
  }
  function Sg(_, e) {
    _.depthStencilAttachment = e;
  }
  function Ag(_, e) {
    _.depthStoreOp = N_[e];
  }
  function Ig(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function Dg(_, e) {
    _.device = e;
  }
  function Tg(_, e) {
    _.dimension = J_[e];
  }
  function Fg(_, e) {
    _.dimension = il[e];
  }
  function Bg(_, e) {
    _.dstFactor = Gt[e];
  }
  function Pg(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function kg(_, e) {
    _.entries = e;
  }
  function Mg(_, e) {
    _.entries = e;
  }
  function Rg(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function Cg(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function Vg(_, e) {
    _.externalTexture = e;
  }
  function Lg(_, e) {
    _.failOp = K_[e];
  }
  function Eg(_, e) {
    _.format = oe[e];
  }
  function Gg(_, e) {
    _.format = ul[e];
  }
  function Og(_, e) {
    _.format = oe[e];
  }
  function Wg(_, e) {
    _.format = oe[e];
  }
  function zg(_, e) {
    _.format = oe[e];
  }
  function Ug(_, e) {
    _.format = oe[e];
  }
  function Hg(_, e) {
    _.format = oe[e];
  }
  function qg(_, e) {
    _.fragment = e;
  }
  function jg(_, e) {
    _.frontFace = nl[e];
  }
  function Kg(_, e) {
    _.g = e;
  }
  function Ng(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function Jg(_, e) {
    _.height = e >>> 0;
  }
  function Qg(_, e) {
    _.height = e >>> 0;
  }
  function Xg(_, e) {
    _.height = e >>> 0;
  }
  function Yg(_, e, t) {
    _.label = A(e, t);
  }
  function Zg(_, e, t) {
    _.label = A(e, t);
  }
  function ep(_, e, t) {
    _.label = A(e, t);
  }
  function _p(_, e, t) {
    _.label = A(e, t);
  }
  function tp(_, e, t) {
    _.label = A(e, t);
  }
  function rp(_, e, t) {
    _.label = A(e, t);
  }
  function np(_, e, t) {
    _.label = A(e, t);
  }
  function ap(_, e, t) {
    _.label = A(e, t);
  }
  function bp(_, e, t) {
    _.label = A(e, t);
  }
  function op(_, e, t) {
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
  function fp(_, e) {
    _.layout = e;
  }
  function up(_, e) {
    _.layout = e;
  }
  function dp(_, e) {
    _.loadOp = j_[e];
  }
  function gp(_, e) {
    _.lodMaxClamp = e;
  }
  function pp(_, e) {
    _.lodMinClamp = e;
  }
  function wp(_, e) {
    _.magFilter = Ot[e];
  }
  function lp(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function mp(_, e) {
    _.mask = e >>> 0;
  }
  function hp(_, e) {
    _.maxAnisotropy = e;
  }
  function yp(_, e) {
    _.minBindingSize = e;
  }
  function xp(_, e) {
    _.minFilter = Ot[e];
  }
  function $p(_, e) {
    _.mipLevel = e >>> 0;
  }
  function vp(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Sp(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Ap(_, e) {
    _.mipmapFilter = al[e];
  }
  function Ip(_, e) {
    _.module = e;
  }
  function Dp(_, e) {
    _.module = e;
  }
  function Tp(_, e) {
    _.multisample = e;
  }
  function Fp(_, e) {
    _.multisampled = e !== 0;
  }
  function Bp(_, e) {
    _.offset = e;
  }
  function Pp(_, e) {
    _.offset = e;
  }
  function kp(_, e) {
    _.offset = e;
  }
  function Mp(_, e) {
    _.operation = el[e];
  }
  function Rp(_, e) {
    _.origin = e;
  }
  function Cp(_, e) {
    _.passOp = K_[e];
  }
  function Vp(_, e) {
    _.powerPreference = bl[e];
  }
  function Lp(_, e) {
    _.primitive = e;
  }
  function Ep(_, e) {
    _.querySet = e;
  }
  function Gp(_, e) {
    _.r = e;
  }
  function Op(_, e) {
    _.requiredFeatures = e;
  }
  function Wp(_, e) {
    _.requiredLimits = e;
  }
  function zp(_, e) {
    _.resolveTarget = e;
  }
  function Up(_, e) {
    _.resource = e;
  }
  function Hp(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function qp(_, e) {
    _.sampleCount = e >>> 0;
  }
  function jp(_, e) {
    _.sampleType = fl[e];
  }
  function Kp(_, e) {
    _.sampler = e;
  }
  function Np(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function Jp(_, e) {
    _.size = e;
  }
  function Qp(_, e) {
    _.size = e;
  }
  function Xp(_, e) {
    _.size = e;
  }
  function Yp(_, e) {
    _.srcFactor = Gt[e];
  }
  function Zp(_, e) {
    _.stencilBack = e;
  }
  function ew(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function _w(_, e) {
    _.stencilFront = e;
  }
  function tw(_, e) {
    _.stencilLoadOp = j_[e];
  }
  function rw(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function nw(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function aw(_, e) {
    _.stencilStoreOp = N_[e];
  }
  function bw(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function ow(_, e) {
    _.stepMode = dl[e];
  }
  function cw(_, e) {
    _.storageTexture = e;
  }
  function sw(_, e) {
    _.storeOp = N_[e];
  }
  function iw(_, e) {
    _.stripIndexFormat = q_[e];
  }
  function fw(_, e) {
    _.targets = e;
  }
  function uw(_, e) {
    _.texture = e;
  }
  function dw(_, e) {
    _.texture = e;
  }
  function gw(_, e) {
    _.timestampWrites = e;
  }
  function pw(_, e) {
    _.topology = ol[e];
  }
  function ww(_, e) {
    _.type = _l[e];
  }
  function lw(_, e) {
    _.type = cl[e];
  }
  function mw(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function hw(_, e) {
    _.usage = e >>> 0;
  }
  function yw(_, e) {
    _.usage = e >>> 0;
  }
  function xw(_, e) {
    _.usage = e >>> 0;
  }
  function $w(_, e) {
    _.usage = e >>> 0;
  }
  function vw(_, e) {
    _.vertex = e;
  }
  function Sw(_, e) {
    _.view = e;
  }
  function Aw(_, e) {
    _.view = e;
  }
  function Iw(_, e) {
    _.viewDimension = J_[e];
  }
  function Dw(_, e) {
    _.viewDimension = J_[e];
  }
  function Tw(_, e) {
    _.viewFormats = e;
  }
  function Fw(_, e) {
    _.viewFormats = e;
  }
  function Bw(_, e) {
    _.visibility = e >>> 0;
  }
  function Pw(_, e) {
    _.width = e >>> 0;
  }
  function kw(_, e) {
    _.width = e >>> 0;
  }
  function Mw(_, e) {
    _.width = e >>> 0;
  }
  function Rw(_, e) {
    _.writeMask = e >>> 0;
  }
  function Cw(_, e) {
    _.x = e >>> 0;
  }
  function Vw(_, e) {
    _.y = e >>> 0;
  }
  function Lw(_, e) {
    _.z = e >>> 0;
  }
  function Ew(_, e, t, r) {
    _.shaderSource(e, A(t, r));
  }
  function Gw(_, e, t, r) {
    _.shaderSource(e, A(t, r));
  }
  function Ow(_) {
    return _.shiftKey;
  }
  function Ww(_, e) {
    const t = e.stack, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function zw() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return $(_) ? 0 : B(_);
  }
  function Uw() {
    const _ = typeof global > "u" ? null : global;
    return $(_) ? 0 : B(_);
  }
  function Hw() {
    const _ = typeof self > "u" ? null : self;
    return $(_) ? 0 : B(_);
  }
  function qw() {
    const _ = typeof window > "u" ? null : window;
    return $(_) ? 0 : B(_);
  }
  function jw(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function Kw(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function Nw(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function Jw(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function Qw(_, e) {
    _.stencilMask(e >>> 0);
  }
  function Xw(_, e) {
    _.stencilMask(e >>> 0);
  }
  function Yw(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Zw(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function e1(_, e) {
    _.submit(e);
  }
  function _1() {
    return h(function(_, e, t, r, n, a, b, o, c, f) {
      _.texImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function t1() {
    return h(function(_, e, t, r, n, a, b, o, c, f) {
      _.texImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function r1() {
    return h(function(_, e, t, r, n, a, b, o, c, f) {
      _.texImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function n1() {
    return h(function(_, e, t, r, n, a, b, o, c, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, b, o, c >>> 0, f >>> 0, d);
    }, arguments);
  }
  function a1() {
    return h(function(_, e, t, r, n, a, b, o, c, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, b, o, c >>> 0, f >>> 0, d);
    }, arguments);
  }
  function b1(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function o1(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function c1(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function s1(_, e, t, r, n, a, b) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, b);
  }
  function i1() {
    return h(function(_, e, t, r, n, a, b, o, c, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function f1() {
    return h(function(_, e, t, r, n, a, b, o, c, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function u1() {
    return h(function(_, e, t, r, n, a, b, o, c, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function d1() {
    return h(function(_, e, t, r, n, a, b, o, c, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function g1() {
    return h(function(_, e, t, r, n, a, b, o, c, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function p1() {
    return h(function(_, e, t, r, n, a, b, o, c, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function w1() {
    return h(function(_, e, t, r, n, a, b, o, c, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function l1() {
    return h(function(_, e, t, r, n, a, b, o, c, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function m1() {
    return h(function(_, e, t, r, n, a, b, o, c, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, o, c, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function h1() {
    return h(function(_, e, t, r, n, a, b, o, c, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, o, c, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function y1() {
    return h(function(_, e, t, r, n, a, b, o, c, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, o, c, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function x1() {
    return h(function(_, e, t, r, n, a, b, o, c, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, o, c, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function $1() {
    return h(function(_, e, t, r, n, a, b, o, c, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, o, c, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function v1() {
    return h(function(_, e, t, r, n, a, b, o, c, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, o, c, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function S1() {
    return h(function(_, e, t, r, n, a, b, o, c, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, o, c, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function A1(_, e, t) {
    return _.then(e, t);
  }
  function I1(_, e, t) {
    return _.then(e, t);
  }
  function D1(_, e) {
    return _.then(e);
  }
  function T1(_, e, t) {
    _.uniform1f(e, t);
  }
  function F1(_, e, t) {
    _.uniform1f(e, t);
  }
  function B1(_, e, t) {
    _.uniform1i(e, t);
  }
  function P1(_, e, t) {
    _.uniform1i(e, t);
  }
  function k1(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function M1(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function R1(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function C1(_, e, t, r) {
    _.uniform2iv(e, Y(t, r));
  }
  function V1(_, e, t, r) {
    _.uniform2iv(e, Y(t, r));
  }
  function L1(_, e, t, r) {
    _.uniform2uiv(e, ve(t, r));
  }
  function E1(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function G1(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function O1(_, e, t, r) {
    _.uniform3iv(e, Y(t, r));
  }
  function W1(_, e, t, r) {
    _.uniform3iv(e, Y(t, r));
  }
  function z1(_, e, t, r) {
    _.uniform3uiv(e, ve(t, r));
  }
  function U1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function H1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function q1(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function j1(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function K1(_, e, t, r) {
    _.uniform4iv(e, Y(t, r));
  }
  function N1(_, e, t, r) {
    _.uniform4iv(e, Y(t, r));
  }
  function J1(_, e, t, r) {
    _.uniform4uiv(e, ve(t, r));
  }
  function Q1(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function X1(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function Y1(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function Z1(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, E(r, n));
  }
  function e2(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, E(r, n));
  }
  function _2(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function t2(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function r2(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, E(r, n));
  }
  function n2(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, E(r, n));
  }
  function a2(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function b2(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function o2(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, E(r, n));
  }
  function c2(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, E(r, n));
  }
  function s2(_) {
    _.unmap();
  }
  function i2(_, e) {
    _.useProgram(e);
  }
  function f2(_, e) {
    _.useProgram(e);
  }
  function u2(_) {
    return _.value;
  }
  function d2(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function g2(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function p2(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function w2(_, e, t, r, n, a, b) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, b);
  }
  function l2(_, e, t, r, n, a, b) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, b);
  }
  function m2(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function h2(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function y2(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function x2(_) {
    return _.width;
  }
  function $2(_) {
    return _.width;
  }
  function v2() {
    return h(function(_, e, t, r, n, a, b) {
      _.writeBuffer(e, t, s_(r, n), a, b);
    }, arguments);
  }
  function S2() {
    return h(function(_, e, t, r, n, a) {
      _.writeTexture(e, s_(t, r), n, a);
    }, arguments);
  }
  function A2(_, e) {
    return Z(_, e, j2);
  }
  function I2(_, e) {
    return Z(_, e, X2);
  }
  function D2(_, e) {
    return Z(_, e, Z2);
  }
  function T2(_, e) {
    return Z(_, e, K2);
  }
  function F2(_, e) {
    return Z(_, e, N2);
  }
  function B2(_, e) {
    return Z(_, e, J2);
  }
  function P2(_, e) {
    return Z(_, e, Q2);
  }
  function k2(_, e) {
    return Z(_, e, q2);
  }
  function M2(_) {
    return _;
  }
  function R2(_) {
    return _;
  }
  function C2(_, e) {
    return E(_, e);
  }
  function V2(_, e) {
    return gl(_, e);
  }
  function L2(_, e) {
    return Y(_, e);
  }
  function E2(_, e) {
    return pl(_, e);
  }
  function G2(_, e) {
    return wl(_, e);
  }
  function O2(_, e) {
    return ve(_, e);
  }
  function W2(_, e) {
    return s_(_, e);
  }
  function z2(_, e) {
    return A(_, e);
  }
  function U2(_) {
    return BigInt.asUintN(64, _);
  }
  function H2() {
    const _ = i.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function q2(_, e) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke_______true_(_, e);
  }
  function j2(_, e, t) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_(_, e, t);
  }
  function K2(_, e, t) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true_(_, e, t);
  }
  function N2(_, e, t) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__4(_, e, t);
  }
  function J2(_, e, t) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__5(_, e, t);
  }
  function Q2(_, e, t) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__6(_, e, t);
  }
  function X2(_, e, t) {
    const r = i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_(_, e, t);
    if (r[1]) throw T(r[0]);
  }
  function Y2(_, e, t, r) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined_______true_(_, e, t, r);
  }
  function Z2(_, e, t) {
    i.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___f64______true_(_, e, t);
  }
  const U_ = [
    "clamp-to-edge",
    "repeat",
    "mirror-repeat"
  ], Gt = [
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
  ], el = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], _l = [
    "uniform",
    "storage",
    "read-only-storage"
  ], tl = [
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
  ], rl = [
    "none",
    "front",
    "back"
  ], Ot = [
    "nearest",
    "linear"
  ], nl = [
    "ccw",
    "cw"
  ], q_ = [
    "uint16",
    "uint32"
  ], j_ = [
    "load",
    "clear"
  ], al = [
    "nearest",
    "linear"
  ], bl = [
    "low-power",
    "high-performance"
  ], ol = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], cl = [
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
  ], sl = [
    "write-only",
    "read-only",
    "read-write"
  ], N_ = [
    "store",
    "discard"
  ], Wt = [
    "all",
    "stencil-only",
    "depth-only"
  ], il = [
    "1d",
    "2d",
    "3d"
  ], oe = [
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
  ], fl = [
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
  ], ul = [
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
  ], dl = [
    "vertex",
    "instance"
  ], wt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbg_handle_free(_, 1)), g_ = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbg_proteusapp_free(_, 1)), lt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbg_texturehandle_free(_, 1)), mt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbg_transitionchannel_free(_, 1)), ht = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbg_videohandle_free(_, 1));
  function B(_) {
    const e = i.__externref_table_alloc();
    return i.__wbindgen_externrefs.set(e, _), e;
  }
  function p(_, e) {
    if (!(_ instanceof e)) throw new Error(`expected instance of ${e.name}`);
  }
  const yt = typeof FinalizationRegistry > "u" ? {
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
      for (let b = 1; b < n; b++) a += ", " + M_(_[b]);
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
  function E(_, e) {
    return _ = _ >>> 0, ll().subarray(_ / 4, _ / 4 + e);
  }
  function gl(_, e) {
    return _ = _ >>> 0, hl().subarray(_ / 2, _ / 2 + e);
  }
  function Y(_, e) {
    return _ = _ >>> 0, yl().subarray(_ / 4, _ / 4 + e);
  }
  function pl(_, e) {
    return _ = _ >>> 0, xl().subarray(_ / 1, _ / 1 + e);
  }
  function wl(_, e) {
    return _ = _ >>> 0, $l().subarray(_ / 2, _ / 2 + e);
  }
  function ve(_, e) {
    return _ = _ >>> 0, vl().subarray(_ / 4, _ / 4 + e);
  }
  function s_(_, e) {
    return _ = _ >>> 0, me().subarray(_ / 1, _ / 1 + e);
  }
  let ie = null;
  function C() {
    return (ie === null || ie.buffer.detached === true || ie.buffer.detached === void 0 && ie.buffer !== i.memory.buffer) && (ie = new DataView(i.memory.buffer)), ie;
  }
  let Ee = null;
  function ll() {
    return (Ee === null || Ee.byteLength === 0) && (Ee = new Float32Array(i.memory.buffer)), Ee;
  }
  let Ge = null;
  function ml() {
    return (Ge === null || Ge.byteLength === 0) && (Ge = new Float64Array(i.memory.buffer)), Ge;
  }
  let Oe = null;
  function hl() {
    return (Oe === null || Oe.byteLength === 0) && (Oe = new Int16Array(i.memory.buffer)), Oe;
  }
  let We = null;
  function yl() {
    return (We === null || We.byteLength === 0) && (We = new Int32Array(i.memory.buffer)), We;
  }
  let ze = null;
  function xl() {
    return (ze === null || ze.byteLength === 0) && (ze = new Int8Array(i.memory.buffer)), ze;
  }
  function A(_, e) {
    return Il(_ >>> 0, e);
  }
  let Ue = null;
  function $l() {
    return (Ue === null || Ue.byteLength === 0) && (Ue = new Uint16Array(i.memory.buffer)), Ue;
  }
  let He = null;
  function vl() {
    return (He === null || He.byteLength === 0) && (He = new Uint32Array(i.memory.buffer)), He;
  }
  let qe = null;
  function me() {
    return (qe === null || qe.byteLength === 0) && (qe = new Uint8Array(i.memory.buffer)), qe;
  }
  function h(_, e) {
    try {
      return _.apply(this, e);
    } catch (t) {
      const r = B(t);
      i.__wbindgen_exn_store(r);
    }
  }
  function $(_) {
    return _ == null;
  }
  function Z(_, e, t) {
    const r = {
      a: _,
      b: e,
      cnt: 1
    }, n = (...a) => {
      r.cnt++;
      const b = r.a;
      r.a = 0;
      try {
        return t(b, r.b, ...a);
      } finally {
        r.a = b, n._wbg_cb_unref();
      }
    };
    return n._wbg_cb_unref = () => {
      --r.cnt === 0 && (i.__wbindgen_destroy_closure(r.a, r.b), r.a = 0, yt.unregister(r));
    }, yt.register(n, r, r), n;
  }
  function p_(_, e) {
    const t = e(_.length * 1, 1) >>> 0;
    return me().set(_, t / 1), R = _.length, t;
  }
  function je(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return ml().set(_, t / 8), R = _.length, t;
  }
  function Sl(_, e) {
    const t = e(_.length * 4, 4) >>> 0;
    for (let r = 0; r < _.length; r++) {
      const n = B(_[r]);
      C().setUint32(t + 4 * r, n, true);
    }
    return R = _.length, t;
  }
  function W(_, e, t) {
    if (t === void 0) {
      const o = Ie.encode(_), c = e(o.length, 1) >>> 0;
      return me().subarray(c, c + o.length).set(o), R = o.length, c;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = me();
    let b = 0;
    for (; b < r; b++) {
      const o = _.charCodeAt(b);
      if (o > 127) break;
      a[n + b] = o;
    }
    if (b !== r) {
      b !== 0 && (_ = _.slice(b)), n = t(n, r, r = b + _.length * 3, 1) >>> 0;
      const o = me().subarray(n + b, n + r), c = Ie.encodeInto(_, o);
      b += c.written, n = t(n, r, b, 1) >>> 0;
    }
    return R = b, n;
  }
  function T(_) {
    const e = i.__wbindgen_externrefs.get(_);
    return i.__externref_table_dealloc(_), e;
  }
  let n_ = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  n_.decode();
  const Al = 2146435072;
  let w_ = 0;
  function Il(_, e) {
    return w_ += e, w_ >= Al && (n_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), n_.decode(), w_ = e), n_.decode(me().subarray(_, _ + e));
  }
  const Ie = new TextEncoder();
  "encodeInto" in Ie || (Ie.encodeInto = function(_, e) {
    const t = Ie.encode(_);
    return e.set(t), {
      read: _.length,
      written: t.length
    };
  });
  let R = 0, i;
  function Dl(_) {
    i = _;
  }
  URL = globalThis.URL;
  const Tl = await G_({
    "./proteus_host_web_bg.js": {
      __wbg_call_5575218572ead796: ys,
      __wbg_next_0c4066e251d2eff9: Ed,
      __wbg_done_b62d4a7d2286852a: tf,
      __wbg_value_49f783bb59765962: u2,
      __wbg_length_c6054974c0a6cdb9: Hu,
      __wbg_get_unchecked_54a4374c38e08460: wu,
      __wbg_instanceof_Map_afa18d5840c04c15: Bu,
      __wbg_new_typed_00a409eb4ec4f2d9: Vd,
      __wbg_then_05edfc8a4fea5106: A1,
      __wbg_get_197a3fe98f169e38: du,
      __wbg_new_227d7c05414eb861: Pd,
      __wbg_stack_3b0d974bbf31e44f: Ww,
      __wbg_error_a6fa202b58aa1cd3: $f,
      __wbg_push_f724b5db8acf89d2: Yd,
      __wbg_proteusapp_new: Qd,
      __wbg_set_dc601f4a69da0bc2: dg,
      __wbg_call_8e98ed2f3c86c4b5: xs,
      __wbg_call_0e855b388e315e17: hs,
      __wbg_get_with_ref_key_6412cf3094599694: lu,
      __wbg_set_6be42768c690e380: M0,
      __wbg_String_8564e559799eccda: gc,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: Tu,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: ld,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: md,
      __wbg_maxTextureDimension3D_06ee54121b37d431: hd,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: wd,
      __wbg_maxBindGroups_14611ac9ed1c6b56: Xu,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: Yu,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: sd,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: cd,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: fd,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: ud,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: gd,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: pd,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: xd,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: yd,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: dd,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: Sd,
      __wbg_maxBufferSize_f7ce3e1856349d2f: Zu,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: $d,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: vd,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: id,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: Dd,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: Id,
      __wbg_maxColorAttachments_fd9187f9f786da18: _d,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: ed,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: bd,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: td,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: rd,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: nd,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: ad,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: od,
      __wbg_description_18d0a6d4077fec8e: Ni,
      __wbg_set_dst_factor_1ed75271a89a711e: Bg,
      __wbg_set_operation_b5862f5a1a143b30: Mp,
      __wbg_set_src_factor_1c4f755f8676df1b: Yp,
      __wbg_set_texture_16d2be474ce6ad0c: uw,
      __wbg_set_mip_level_246db61be15bdd69: $p,
      __wbg_set_x_56f0c2c08a62725c: Cw,
      __wbg_set_y_04fb8ce84735b4e1: Vw,
      __wbg_set_z_a51316db27a4941e: Lw,
      __wbg_set_origin_9b3b0fbe0a5dc469: Rp,
      __wbg_set_aspect_77332ac136ee94eb: H0,
      __wbg_Window_a07901001eb4269f: pc,
      __wbg_gpu_a7c12045c25d009a: mu,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: wc,
      __wbg_set_a_5f6e488475272136: R0,
      __wbg_set_b_688365d692bba214: K0,
      __wbg_set_g_d4d1d77cf8fdd362: Kg,
      __wbg_set_r_527e5a41c4b1a846: Gp,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: Du,
      __wbg_queue_65d985f3e6d786a6: n0,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: Vp,
      __wbg_requestAdapter_9ff5c9d1ff271165: d0,
      __wbg_set_required_limits_3b031f66f838f4e3: Wp,
      __wbg_set_required_features_54918de8185c5fab: Op,
      __wbg_set_label_bae57fb9f24fde5c: np,
      __wbg_requestDevice_c1c34f88a477e509: w0,
      __wbg_limits_50a8c5e629dbfe40: ju,
      __wbg_info_22dcf1fd1b12bc7d: Su,
      __wbg_set_size_41cd9255ca1e4242: Qp,
      __wbg_set_usage_908213a4d4bb8bde: xw,
      __wbg_set_mapped_at_creation_48de4735fab51e78: lp,
      __wbg_set_label_cd567b7b35838e4c: op,
      __wbg_createBuffer_2f08c0205e04efca: Ys,
      __wbg_set_address_mode_u_a37cf1035585c638: V0,
      __wbg_set_address_mode_v_8ac049e029caef76: L0,
      __wbg_set_address_mode_w_eb9260ee11729e92: E0,
      __wbg_set_compare_42211fbf15e3b850: ig,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: gp,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: pp,
      __wbg_set_mag_filter_69d846b974d4bcc0: wp,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: xp,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: Ap,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: hp,
      __wbg_set_label_dcd98efbb9370da8: sp,
      __wbg_createSampler_248bd67c920af37d: ii,
      __wbg_set_width_1a5e2e86fa5bdcd8: kw,
      __wbg_set_height_e8b5483b8c117d5e: Qg,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: xg,
      __wbg_set_format_e9d4b1475bb3bd3b: Ug,
      __wbg_set_size_a61ff22205255d61: Xp,
      __wbg_set_usage_7fa9cd18d1104aca: yw,
      __wbg_set_label_0c1bd0e976cf0a9a: Zg,
      __wbg_set_dimension_36e13ccecae5af4b: Fg,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: Sp,
      __wbg_set_sample_count_865e1d19b84e27e6: qp,
      __wbg_set_view_formats_bab284fc81b40e70: Tw,
      __wbg_createTexture_9e76b80a2dc0d12e: li,
      __wbg_set_entries_fc76ca4d7da6a709: Mg,
      __wbg_set_layout_eeef59714f5bf48b: up,
      __wbg_set_label_f92ae11c77d74198: ip,
      __wbg_createBindGroup_2320df4db188406c: Qs,
      __wbg_set_code_56e2d45ec1ff6c2d: bg,
      __wbg_set_label_be45aed56e4b9fee: ap,
      __wbg_createShaderModule_53701de4fb271c90: ui,
      __wbg_set_label_d1c24b5a7a3ac31d: cp,
      __wbg_createCommandEncoder_cd88faca35d9ed68: ei,
      __wbg_set_bind_group_layouts_5325d038771af328: X0,
      __wbg_set_label_2f592bd1be3db6b3: tp,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: ri,
      __wbg_set_module_14e471fdd94c582d: Dp,
      __wbg_set_entry_point_8db3b6d103e3b865: Cg,
      __wbg_set_buffers_85a7238f4ef28ab4: rg,
      __wbg_set_layout_7c5ba5bdcde8a0f0: fp,
      __wbg_set_vertex_a4951dd9a7a4ed54: vw,
      __wbg_set_label_c47c451211e2f6d2: bp,
      __wbg_set_format_f9341112e43ea182: Hg,
      __wbg_set_depth_compare_30e9ea552da12fe2: mg,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: Ig,
      __wbg_set_depth_bias_428c9340b0fd937b: gg,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: pg,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: wg,
      __wbg_set_compare_1509dc1a5420943f: sg,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: hg,
      __wbg_set_fail_op_77ab26c98f847b65: Lg,
      __wbg_set_pass_op_e9470d1262fb8a8b: Cp,
      __wbg_set_stencil_back_6ef4683123b19b25: Zp,
      __wbg_set_stencil_front_aeb8580a97e5424b: _w,
      __wbg_set_stencil_read_mask_2954f260d47349ea: rw,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: bw,
      __wbg_set_depth_stencil_1bd50dbc450c8650: vg,
      __wbg_set_module_08ad08e736d8edbf: Ip,
      __wbg_set_targets_6b0b3bdd87f35668: fw,
      __wbg_set_entry_point_6fec5723cc790927: Rg,
      __wbg_set_fragment_1a595620425637e1: qg,
      __wbg_set_count_26a934d1cd07d080: fg,
      __wbg_set_mask_0c49a66362fc0079: mp,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: W0,
      __wbg_set_multisample_85f073947b782d07: Tp,
      __wbg_set_cull_mode_9d466c1ab414cac8: ug,
      __wbg_set_front_face_50cdf4eb61504a46: jg,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: iw,
      __wbg_set_topology_beefb3aca0612b00: pw,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: mw,
      __wbg_set_primitive_369241acd17871f1: Lp,
      __wbg_createRenderPipeline_f48187ba9f7701e8: oi,
      __wbg_set_entries_3017e6132f938c6e: kg,
      __wbg_set_label_1175a3329a06e52b: ep,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: Js,
      __wbg_limits_1c25cb4f379a4418: qu,
      __wbg_set_color_attachments_abe67f6631926e28: og,
      __wbg_set_label_8fd860a36d2c7b74: rp,
      __wbg_set_view_dbd0294573f64d05: Aw,
      __wbg_set_depth_clear_value_442bf492734f63b6: lg,
      __wbg_set_depth_load_op_34d430b74bb36d91: yg,
      __wbg_set_depth_store_op_0ea0a215313dbda7: Ag,
      __wbg_set_depth_read_only_138a11b10c731094: $g,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: ew,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: tw,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: aw,
      __wbg_set_stencil_read_only_fb489d191b6d969b: nw,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: Sg,
      __wbg_set_query_set_18679a8580267d5a: Ep,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: Q0,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: Pg,
      __wbg_set_timestamp_writes_c552d52fbb417005: gw,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: Oc,
      __wbg_copyTextureToTexture_1be188df1e535c0a: Ns,
      __wbg_label_47480289cc2bce71: zu,
      __wbg_set_label_2d2227f4d5991e50: _p,
      __wbg_finish_cfaeede3baf55be1: Af,
      __wbg_finish_087cb89c65c06eb1: Sf,
      __wbg_drawIndexed_68637ebab6dd8d6e: uf,
      __wbg_setPipeline_bab24dbce96903b9: D0,
      __wbg_setViewport_f9d423db4f4b4b58: B0,
      __wbg_setBindGroup_4ba56e1e0d26f244: v0,
      __wbg_setBindGroup_6124849cc8547086: S0,
      __wbg_setIndexBuffer_17431786d06c1b7c: A0,
      __wbg_setIndexBuffer_a16ed5b869c87507: I0,
      __wbg_setVertexBuffer_b508baf8d0ffe331: F0,
      __wbg_setVertexBuffer_91c4b602d0289943: T0,
      __wbg_end_414453a89205612c: mf,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: Xf,
      __wbg_getCurrentTexture_51975ae7185fd15f: Uf,
      __wbg_set_device_0d774b66e7288f72: Dg,
      __wbg_set_format_d347899cd860709c: zg,
      __wbg_set_usage_ae014e77ff77ce06: $w,
      __wbg_set_alpha_mode_92402195b3ae1ee7: O0,
      __wbg_set_view_formats_fe531a043efb71fa: Fw,
      __wbg_configure_3d64c677c7d68a15: zs,
      __wbg_writeBuffer_b4bdd36178348ca5: v2,
      __wbg_set_bytes_per_row_91681ca78d744888: ng,
      __wbg_set_rows_per_image_d198b7e73a38978b: Hp,
      __wbg_set_offset_a097a8050a3a9a33: kp,
      __wbg_writeTexture_b45b69132e46a227: S2,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: Hd,
      __wbg_submit_1290d44bb76ecef4: e1,
      __wbg_getMappedRange_5ed22727c9679168: Kf,
      __wbg_unmap_8f06698a75b8331a: s2,
      __wbg_destroy_b5b39f25f0799295: Ji,
      __wbg_mapAsync_bb0029907dd91181: Qu,
      __wbg_set_dimension_174ad7e2fb67fb4e: Tg,
      __wbg_set_format_90860b0321868db4: Og,
      __wbg_set_aspect_a823a14d00d42d37: q0,
      __wbg_set_base_array_layer_cc6c68d233489c4b: N0,
      __wbg_set_array_layer_count_daec613068108a9d: z0,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: J0,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: vp,
      __wbg_set_label_03d2396d4655a3e1: Yg,
      __wbg_set_usage_7f0dda8309469b1c: hw,
      __wbg_createView_cc96b5bdd3d5bf5e: yi,
      __wbg_set_format_abf7a1bc5425c56a: Wg,
      __wbg_set_alpha_aa2e606e9e647b21: G0,
      __wbg_set_color_bc393d7efc3c8594: cg,
      __wbg_set_blend_8d6e9c08b5702a09: eg,
      __wbg_set_write_mask_144b25e2bd909124: Rw,
      __wbg_set_load_op_56844f51434037bf: dp,
      __wbg_set_store_op_caeede4654b3d847: sw,
      __wbg_set_view_bdeab150b5f0768c: Sw,
      __wbg_set_clear_value_642701f928a5ccb3: ag,
      __wbg_set_resolve_target_fe76b3f99cf72078: zp,
      __wbg_set_buffer_55f096330c8912b4: _g,
      __wbg_set_offset_73156b0e0b41d79a: Bp,
      __wbg_set_size_1e6281b07cd39177: Jp,
      __wbg_set_binding_f3c188a8cd21455b: Z0,
      __wbg_set_resource_fe385d2e3dadaf63: Up,
      __wbg_set_format_6606f5c1fba6f459: Gg,
      __wbg_set_offset_8d9d9afffa18b591: Pp,
      __wbg_set_shader_location_0ff30a733291a396: Np,
      __wbg_set_array_stride_c2c009eabc18b5f6: U0,
      __wbg_set_attributes_05f9117fd32ca606: j0,
      __wbg_set_step_mode_a35aef328761c452: ow,
      __wbg_set_binding_b6b0fe5c281b8c69: Y0,
      __wbg_set_visibility_1bca121a89accba5: Bw,
      __wbg_set_type_c1eebc19f8a6aeb9: lw,
      __wbg_set_sampler_8c5d7fb1b02058c6: Kp,
      __wbg_set_multisampled_40505c1381e1c32c: Fp,
      __wbg_set_external_texture_825fe2bc7a0c0603: Vg,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: Ng,
      __wbg_set_min_binding_size_689661b9ed25e083: yp,
      __wbg_set_type_38961e08504ca674: ww,
      __wbg_set_buffer_e89095a9f0cafad3: tg,
      __wbg_set_sample_type_7088b1efddce6a69: jp,
      __wbg_set_view_dimension_3ed01b237e85826f: Dw,
      __wbg_set_texture_e25a73da75cf5808: dw,
      __wbg_set_format_1786adb7bc74c7c9: Eg,
      __wbg_set_access_091f317905cd76a5: C0,
      __wbg_set_view_dimension_263387976511ebc9: Iw,
      __wbg_set_storage_texture_ab9eed9786337ef0: cw,
      __wbg_requestAdapter_c46930b8bc33722d: g0,
      __wbg_includes_83dff8d05da243c5: vu,
      __wbg_clearBufferuiv_1d2d93401c0904a3: Ss,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: Es,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: Os,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: Ws,
      __wbg_copyBufferSubData_a944f33b601b822d: Hs,
      __wbg_clientWaitSync_7580165bd2eff461: Ps,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: Gs,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: Ks,
      __wbg_createQuery_f013132b870a71ef: bi,
      __wbg_createSampler_9fe50152a2524319: fi,
      __wbg_createVertexArray_8685feb21901c932: hi,
      __wbg_deleteQuery_ef51ea0a52420103: Pi,
      __wbg_deleteSampler_5c045e0cc55813d4: Ri,
      __wbg_getIndexedParameter_2b18df6fca85f751: jf,
      __wbg_getQueryParameter_0599e85ddb81220b: tu,
      __wbg_getSyncParameter_9a2bda340ebe166f: su,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: iu,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: Cu,
      __wbg_deleteSync_37ca83c429c43d8a: Li,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: Wi,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: nf,
      __wbg_drawBuffers_558d96e52e754731: cf,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: ff,
      __wbg_endQuery_161170c5280a8293: lf,
      __wbg_fenceSync_56efc7cc79111e54: vf,
      __wbg_framebufferTextureLayer_2312acdc74f97676: Mf,
      __wbg_getBufferSubData_92680d3a2f7be029: Ef,
      __wbg_readBuffer_361ec5474f3aae49: a0,
      __wbg_readPixels_5840000f3e22f3ce: o0,
      __wbg_readPixels_5bf204799ed2272f: c0,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: s0,
      __wbg_texImage3D_8647ef58aef5b912: a1,
      __wbg_texStorage2D_ed5df596c5f1e3af: c1,
      __wbg_texStorage3D_160b0197bc190f04: s1,
      __wbg_texSubImage2D_f03448e182b0820d: l1,
      __wbg_texSubImage2D_d14d9c0a1f627c31: w1,
      __wbg_texSubImage2D_89866a04ecd0a76b: d1,
      __wbg_texSubImage2D_5c630043f1c56716: u1,
      __wbg_samplerParameterf_3157ba41c0f4d97a: m0,
      __wbg_samplerParameteri_f85a29156e790189: h0,
      __wbg_texImage2D_0e0f37b9fb297d01: _1,
      __wbg_texImage2D_0e537dc331652de3: t1,
      __wbg_texImage3D_30dbf7234481b8f5: n1,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: f1,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: g1,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: p1,
      __wbg_texSubImage3D_933e4cd41cc5376d: $1,
      __wbg_texSubImage3D_c3538b28040daac9: S1,
      __wbg_uniform1ui_36c94692177ebf76: k1,
      __wbg_uniform2fv_17592f4dad9798fb: M1,
      __wbg_uniform2iv_d5d29ebbc466977d: V1,
      __wbg_texSubImage3D_0fdbd843482bb916: h1,
      __wbg_texSubImage3D_09a97a968b93253d: m1,
      __wbg_texSubImage3D_355efde0dc047913: y1,
      __wbg_texSubImage3D_bd32c8e29e470904: v1,
      __wbg_texSubImage3D_5a238709d114b609: x1,
      __wbg_uniform2uiv_418ba3bf6a230dd5: L1,
      __wbg_uniform4fv_9e670a001c77dca0: j1,
      __wbg_uniform4iv_1d57c6b8e5c0e447: K1,
      __wbg_uniform3fv_dbe44b778e6b89e8: G1,
      __wbg_uniform3iv_d75d3a5f86d54be4: W1,
      __wbg_uniform3uiv_71c1efc24a662de9: z1,
      __wbg_uniform4uiv_c5d45f5dbdae727a: J1,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: _2,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: r2,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: n2,
      __wbg_uniformBlockBinding_829a71912ad79a04: Q1,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: X1,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: Z1,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: e2,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: a2,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: p2,
      __wbg_activeTexture_525ee3068cb9e8d5: Rc,
      __wbg_attachShader_3477e67517b09b6b: Lc,
      __wbg_bindAttribLocation_79b5d26727094518: Wc,
      __wbg_bindBuffer_d3111de6861cb875: Hc,
      __wbg_bindFramebuffer_63e837a5dc0accfb: Kc,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: Nc,
      __wbg_bindTexture_7ab28ff4ff3dc506: Xc,
      __wbg_blendColor_15f26633b646e542: _s,
      __wbg_blendEquation_7dadb4db540a42da: as,
      __wbg_blendEquationSeparate_8240ddfa32266109: rs,
      __wbg_blendFunc_b15af02643e188f1: is,
      __wbg_blendFuncSeparate_456410f9919bed39: cs,
      __wbg_clear_dadcb3e2929388b0: Fs,
      __wbg_clearDepth_05c17028494ee4dd: As,
      __wbg_clearStencil_917833d1e2ac56e4: Ts,
      __wbg_colorMask_f111e3e5796458f4: Rs,
      __wbg_compileShader_f5625b583b2c9fd6: Cs,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: o2,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: c2,
      __wbg_vertexAttribDivisor_f17a8585267be92f: g2,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: qs,
      __wbg_createBuffer_9f602b2dbcbf409c: Zs,
      __wbg_createFramebuffer_4a250944a4542bbc: _i,
      __wbg_createProgram_4c8164d471c10346: ni,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: si,
      __wbg_createShader_9c5cd42709d915ff: gi,
      __wbg_createTexture_3eed23cb87dd35fc: pi,
      __wbg_cullFace_94f24b4fd5e9038b: vi,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: Ai,
      __wbg_getExtension_11824edd67a143d8: qf,
      __wbg_getParameter_7f7f23cae98f2c81: Jf,
      __wbg_getProgramInfoLog_cd84be80942f345b: Zf,
      __wbg_getProgramParameter_039391d5ba319f50: eu,
      __wbg_getShaderInfoLog_495bddda98172699: ru,
      __wbg_getShaderParameter_4eb65cfb174ceb22: au,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: ou,
      __wbg_getUniformLocation_ab63f569a4e41744: uu,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: Di,
      __wbg_deleteProgram_eff668280dcb01ca: Bi,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: Mi,
      __wbg_deleteShader_3339454254c7147c: Ci,
      __wbg_deleteTexture_c1c58550dc55af5c: Gi,
      __wbg_depthFunc_31b183b5b8ee478e: zi,
      __wbg_depthMask_cab7f2ae7f0e559c: qi,
      __wbg_depthRange_797a71ba3b79267a: ji,
      __wbg_disable_cb1b3e6c1cee5202: ef,
      __wbg_disableVertexAttribArray_b395358ec5084c39: Yi,
      __wbg_drawArrays_42dbb4b0349c8f34: bf,
      __wbg_enable_d1f42f78be33a553: wf,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: df,
      __wbg_flush_7ae42f071230db6b: If,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: Bf,
      __wbg_framebufferTexture2D_367ab597a005e8d9: Pf,
      __wbg_frontFace_9bdcf2a758e989e5: Cf,
      __wbg_linkProgram_e23a348b0f6e0c4f: Nu,
      __wbg_pixelStorei_a78a504be58d1d0a: jd,
      __wbg_polygonOffset_a4f07d97b9b0dced: Nd,
      __wbg_renderbufferStorage_3049e13db5c4e60e: f0,
      __wbg_scissor_6c024669fbf4fe72: y0,
      __wbg_vertexAttribPointer_4e5d289c5d224210: l2,
      __wbg_viewport_a0ca330f9b85397e: m2,
      __wbg_shaderSource_66dce75b25a1a407: Gw,
      __wbg_stencilFuncSeparate_ec603976be9569a4: Kw,
      __wbg_stencilMask_485dcb5965c79a71: Qw,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: Jw,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: Yw,
      __wbg_texParameteri_c6efffcecb474d2f: b1,
      __wbg_uniform1f_3acd3f3eb50b5e11: T1,
      __wbg_uniform1i_e4f13604354c28ae: P1,
      __wbg_uniform4f_a5008773cfb47d1a: H1,
      __wbg_useProgram_ab2ee2a13a1fd909: f2,
      __wbg_bufferSubData_2270f1b9db71e642: ws,
      __wbg_clearBufferfv_6b77b9402254a2bf: $s,
      __wbg_clearBufferiv_0f056544010eef3e: vs,
      __wbg_beginQuery_dad334d972fed3cc: Gc,
      __wbg_bindBufferRange_16a9d90becc2a7d7: Uc,
      __wbg_bindSampler_3c7002cb6d56ae8f: Qc,
      __wbg_bindVertexArray_c391bd47303d75cd: es,
      __wbg_blitFramebuffer_ea96ada8bba07582: fs,
      __wbg_bufferData_64e9905f2b3d3a6f: gs,
      __wbg_bufferData_99bbbc63f02251c4: ps,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: Mu,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: p0,
      __wbg_navigator_935098efd1dc7fe5: Fd,
      __wbg_devicePixelRatio_8e5ca44720abafec: Qi,
      __wbg_document_2634180a4c694068: _f,
      __wbg_instanceof_Window_0d356b88a2f77c42: Ru,
      __wbg_hidden_cb32701ca3785fea: $u,
      __wbg_getElementById_c7aba6b93b34bf01: Hf,
      __wbg_querySelector_1f3658f4b48e268b: _0,
      __wbg_querySelectorAll_ffda3c891a9eb29a: e0,
      __wbg_hasAttribute_73e1230c9c107e79: hu,
      __wbg_setAttribute_8bccfbabf2a83682: $0,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: Lf,
      __wbg_focus_c80921c19b28520b: Tf,
      __wbg_uniform2iv_c5e863975dd780d8: C1,
      __wbg_uniform3fv_7723e142be50856f: E1,
      __wbg_uniform3iv_bea3976522e15d48: O1,
      __wbg_uniform4fv_85ad5d23234895d2: q1,
      __wbg_clear_ff8cfdf420f7dde6: Bs,
      __wbg_clearDepth_ac6b54f112feeaf7: Is,
      __wbg_clearStencil_56d6a6308294a749: Ds,
      __wbg_colorMask_b0ab9d429a1efa0a: Ms,
      __wbg_compileShader_fcf3f3d2891f73f9: Vs,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: js,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: Xs,
      __wbg_createFramebuffer_ab73f30b5dc97415: ti,
      __wbg_createProgram_f11c63f59f41b82a: ai,
      __wbg_createRenderbuffer_556000dbb01f5026: ci,
      __wbg_createShader_27d9388313f3b14e: di,
      __wbg_createTexture_8455c703424c567b: wi,
      __wbg_cullFace_774780fb4177aab8: $i,
      __wbg_deleteBuffer_d758283bea6e0ccf: Ii,
      __wbg_deleteFramebuffer_8953b325144192fe: Ti,
      __wbg_deleteProgram_0135c6926e75af75: Fi,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: ki,
      __wbg_deleteShader_79dbaaed69b7ca3b: Vi,
      __wbg_deleteTexture_3acb672a45f9998a: Ei,
      __wbg_depthFunc_eaca1bc79f7bf216: Ui,
      __wbg_depthMask_3a9074b08d1f68e5: Hi,
      __wbg_depthRange_c24a808b3496e0a9: Ki,
      __wbg_uniform4iv_a9aaa92f2f458ec2: N1,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: Y1,
      __wbg_uniformMatrix3fv_da8c388748c5739b: t2,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: b2,
      __wbg_activeTexture_1d5359b20df41710: Mc,
      __wbg_attachShader_683d1070365e7066: Ec,
      __wbg_bindAttribLocation_d56d3c40331af7ed: zc,
      __wbg_bindBuffer_e95efaf0d4851845: qc,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: jc,
      __wbg_bindRenderbuffer_d608b211c51ed147: Jc,
      __wbg_bindTexture_ffc56f1e5c5526c6: Yc,
      __wbg_blendColor_a0ba1cdcecc3a34c: ts,
      __wbg_blendEquation_8bfa69f639ae92da: bs,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: ns,
      __wbg_blendFunc_713c504adab14f98: ss,
      __wbg_blendFuncSeparate_3eef699c291dbc87: os,
      __wbg_disable_4dca6ee0ccc91e4a: Zi,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: Xi,
      __wbg_drawArrays_10e1254aa4524ae9: af,
      __wbg_enable_c6e523307311617a: pf,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: gf,
      __wbg_flush_eb3fb8da2ec00d57: Df,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: Ff,
      __wbg_linkProgram_6a2eee02a03b9b00: Ku,
      __wbg_pixelStorei_55ad4c67b699537c: qd,
      __wbg_polygonOffset_06dc6468c12a57e1: Kd,
      __wbg_renderbufferStorage_2918fb696fd45663: i0,
      __wbg_scissor_f9696c630e464977: x0,
      __wbg_shaderSource_628c37a476ae65f9: Ew,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: jw,
      __wbg_stencilMask_f9fe198f7fd6fc9c: Xw,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: Nw,
      __wbg_stencilOpSeparate_6cf50803475d2640: Zw,
      __wbg_texParameteri_fe6210a493d48a16: o1,
      __wbg_framebufferTexture2D_3a558e14f56720d2: kf,
      __wbg_frontFace_c9bb1fa659ffd276: Vf,
      __wbg_getParameter_91a344e1a84a4669: Qf,
      __wbg_getProgramInfoLog_35410850de9ccefe: Yf,
      __wbg_getProgramParameter_bbc667347ac2e882: _u,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: nu,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: bu,
      __wbg_getUniformLocation_340155dc706d3fea: fu,
      __wbg_uniform1f_d34e4b454f7c8e73: F1,
      __wbg_uniform1i_cd9a7f990128ea48: B1,
      __wbg_uniform4f_4410d2faaa7e5dda: U1,
      __wbg_useProgram_0e1cd86765304939: i2,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: w2,
      __wbg_viewport_b5bd46a0d111c83c: h2,
      __wbg_texSubImage2D_1b2ff28f994c325e: i1,
      __wbg_uniform2fv_39277cf2d3cb83c7: R1,
      __wbg_bufferData_5df9bdb32e189eee: ds,
      __wbg_bufferData_26132561617ce8fb: us,
      __wbg_bufferSubData_44db8a3b4a70b57d: ls,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: Ls,
      __wbg_readPixels_05377f8b6fa1d8eb: b0,
      __wbg_texImage2D_7bc3001cb8602ed2: r1,
      __wbg_navigator_017bc45e84c473cc: Td,
      __wbg_log_d282446d03691e72: Ju,
      __wbg_info_a392cd5b7536cfb5: Au,
      __wbg_warn_88c4a5bd9a322000: y2,
      __wbg_debug_7271beced8b71cd4: Si,
      __wbg_error_933f449d72fef598: xf,
      __wbg_error_50f60c611a3dcf64: yf,
      __wbg_contentRect_0fb8c8900d689a0c: Us,
      __wbg_width_08e66520b99071f4: x2,
      __wbg_height_e9afb506f31052a9: xu,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: Pu,
      __wbg_set_width_f9e631f4ee129e5c: Mw,
      __wbg_set_height_ef298446b359b0c5: Xg,
      __wbg_getContext_70c2d1bed75d4122: Wf,
      __wbg_getContext_422b32d0ee4b8076: Gf,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: Rf,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: rf,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: sf,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: d2,
      __wbg_set_width_031bdecd763c5855: Pw,
      __wbg_set_height_ad5056ea051acd78: Jg,
      __wbg_getContext_486aab500e1c34c9: Of,
      __wbg_getContext_9fd4db9b1cf155db: zf,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: Fu,
      __wbg_addEventListener_ea90bc131475777e: Cc,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: Zc,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: mi,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: Oi,
      __wbg_new_1e52e3c919312525: Bd,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: of,
      __wbg_observe_592b94857eed8e27: Od,
      __wbg_altKey_7412dd64f8c921c7: Vc,
      __wbg_ctrlKey_00097886a21597a7: xi,
      __wbg_shiftKey_273ee8c901267b55: Ow,
      __wbg_metaKey_1c2847b62ad062c1: Ad,
      __wbg_repeat_46a5c90df9f6ef0b: u0,
      __wbg_isComposing_e3709163a95a2477: Lu,
      __wbg_key_d6b3d2cce3d41872: Wu,
      __wbg_code_87bb99fdec02d313: ks,
      __wbg_getModifierState_dae4d71262ea4ecb: Nf,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: cu,
      __wbg_width_a86bcd32bd998060: $2,
      __wbg_height_cd732bbdc7b66e49: yu,
      __wbg_queryCounterEXT_ebb00bcc96221671: Zd,
      __wbg_offsetX_0214819d43aaf6d5: zd,
      __wbg_offsetY_f18f571e33b385ab: Ud,
      __wbg_button_bb3285fcdf965178: ms,
      __wbg_get_37b48b8fa52d1f2c: gu,
      __wbg_preventDefault_c047d3e292b08cc4: Jd,
      __wbg_resolve_d82363d90af6928a: l0,
      __wbg_then_591b6b3a75ee817a: D1,
      __wbg_iterator_cc47ba25a2be735a: Ou,
      __wbg_get_9a29be2cb383ed9a: pu,
      __wbg_next_402fa10b59ab20c3: Gd,
      __wbg_new_2e117a478906f062: kd,
      __wbg_new_36e147a8ced3c6e0: Md,
      __wbg_of_62183ea089c00bfa: Wd,
      __wbg_isArray_145a34fd0a38d37b: Vu,
      __wbg_new_e66a4b7758dd2e5c: Cd,
      __wbg_isSafeInteger_a3389a198582f5f6: Eu,
      __wbg_is_de5b366c746e004c: Gu,
      __wbg_entries_c261c3fa1f281256: hf,
      __wbg_then_2a84678a50976959: I1,
      __wbg_length_589238bdcf171f0e: Uu,
      __wbg_prototypesetcall_d721637c7ca66eb8: Xd,
      __wbg_set_272b80acaf9a75e8: P0,
      __wbg_new_81880fb5002cb255: Rd,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: Ld,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: zw,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: Hw,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Uw,
      __wbg_static_accessor_WINDOW_168f178805d978fe: qw,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: Iu,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: ku,
      __wbg_queueMicrotask_311744e534a929a3: r0,
      __wbg_queueMicrotask_1c9b3800e321a967: t0,
      __wbg_set_4564f7dc44fcb0c9: k0,
      __wbg___wbindgen_number_get_1cc01dd708740256: Fc,
      __wbg___wbindgen_in_4990f46af709e33c: yc,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: Pc,
      __wbg___wbindgen_is_null_6d937fbfb6478470: vc,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: Dc,
      __wbg_Number_c4bdf66bb78f7977: dc,
      __wbg_Error_fdd633d4bb5dd76a: uc,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: xc,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: Sc,
      __wbg___wbindgen_is_string_1fca8072260dd261: Ac,
      __wbg___wbindgen_string_get_71bb4348194e31f0: Bc,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: mc,
      __wbg___wbindgen_is_function_acc5528be2b923f2: $c,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: Ic,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: Tc,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: lc,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: kc,
      __wbg___wbindgen_debug_string_8a447059637473e2: hc,
      __wbindgen_init_externref_table: H2,
      __wbindgen_cast_0000000000000001: A2,
      __wbindgen_cast_0000000000000002: I2,
      __wbindgen_cast_0000000000000003: D2,
      __wbindgen_cast_0000000000000004: T2,
      __wbindgen_cast_0000000000000005: F2,
      __wbindgen_cast_0000000000000006: B2,
      __wbindgen_cast_0000000000000007: P2,
      __wbindgen_cast_0000000000000008: k2,
      __wbindgen_cast_0000000000000009: M2,
      __wbindgen_cast_000000000000000a: R2,
      __wbindgen_cast_000000000000000b: C2,
      __wbindgen_cast_000000000000000c: V2,
      __wbindgen_cast_000000000000000d: L2,
      __wbindgen_cast_000000000000000e: E2,
      __wbindgen_cast_000000000000000f: G2,
      __wbindgen_cast_0000000000000010: O2,
      __wbindgen_cast_0000000000000011: W2,
      __wbindgen_cast_0000000000000012: z2,
      __wbindgen_cast_0000000000000013: U2
    }
  }, ic), { memory: Fl, mount: Bl, __wbg_proteusapp_free: Pl, proteusapp_addChild: kl, proteusapp_animateTo: Ml, proteusapp_bakeTexture: Rl, proteusapp_bakedImageSize: Cl, proteusapp_bakedTextSize: Vl, proteusapp_bindKey: Ll, proteusapp_channelDestroy: El, proteusapp_channelSet: Gl, proteusapp_clearFocus: Ol, proteusapp_clearGlyphCache: Wl, proteusapp_component: zl, proteusapp_copyBakedImageFrom: Ul, proteusapp_createVideo: Hl, proteusapp_cropImage: ql, proteusapp_declareGeometry: jl, proteusapp_declaredGeometry: Kl, proteusapp_destroy: Nl, proteusapp_devices: Jl, proteusapp_focus: Ql, proteusapp_focused: Xl, proteusapp_freeResources: Yl, proteusapp_get: Zl, proteusapp_hideVideo: e4, proteusapp_inputDevices: _4, proteusapp_inputMode: t4, proteusapp_isFocused: r4, proteusapp_loadTexture: n4, proteusapp_mergeFrom: a4, proteusapp_mergeFromWithBehavior: b4, proteusapp_new: o4, proteusapp_onAppKey: c4, proteusapp_onBlur: s4, proteusapp_onClick: i4, proteusapp_onDrag: f4, proteusapp_onDropped: u4, proteusapp_onFocus: d4, proteusapp_onFocusLost: g4, proteusapp_onHoverEnter: p4, proteusapp_onHoverExit: w4, proteusapp_onKey: l4, proteusapp_onPress: m4, proteusapp_onRelease: h4, proteusapp_onTransitionComplete: y4, proteusapp_pointerLeft: x4, proteusapp_pointerMoved: $4, proteusapp_pointerPressed: v4, proteusapp_pointerReleased: S4, proteusapp_releaseVideo: A4, proteusapp_removeChild: I4, proteusapp_resetKeyMap: D4, proteusapp_setDeclaredGeometry: T4, proteusapp_setDefaultFocus: F4, proteusapp_setDevices: B4, proteusapp_setDisabled: P4, proteusapp_setFocusGroup: k4, proteusapp_setImage: M4, proteusapp_setInputDevices: R4, proteusapp_setInteractive: C4, proteusapp_setKeyRepeat: V4, proteusapp_setLongPressMs: L4, proteusapp_setNavigatingActions: E4, proteusapp_setNeighbour: G4, proteusapp_setOpacity: O4, proteusapp_setReadingDirection: W4, proteusapp_setStyleTransition: z4, proteusapp_setText: U4, proteusapp_setTexture: H4, proteusapp_setTransitionInteraction: q4, proteusapp_setVideoCrossfade: j4, proteusapp_setVisible: K4, proteusapp_showVideo: N4, proteusapp_splitTo: J4, proteusapp_splitToWithBehavior: Q4, proteusapp_splitToWithStates: X4, proteusapp_texture: Y4, proteusapp_textureState: Z4, proteusapp_tick: e6, proteusapp_transitionChannel: _6, proteusapp_unbindKey: t6, proteusapp_uploadVideoFrame: r6, __wbg_handle_free: n6, __wbg_texturehandle_free: a6, __wbg_transitionchannel_free: b6, __wbg_videohandle_free: o6, handle_fromId: c6, handle_id: s6, texturehandle_fromId: i6, texturehandle_id: f6, __abort_handler: u6, __instance_terminated: d6, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___f64______true_: g6, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_: p6, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined_______true_: w6, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_: l6, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true_: m6, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__4: h6, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__5: y6, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__6: x6, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke_______true_: $6, __wbindgen_malloc: v6, __wbindgen_realloc: S6, __wbindgen_exn_store: A6, __externref_table_alloc: I6, __wbindgen_externrefs: D6, __wbindgen_free: T6, __wbindgen_destroy_closure: F6, __externref_table_dealloc: B6, __wbindgen_start: zt } = Tl, P6 = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: u6,
    __externref_table_alloc: I6,
    __externref_table_dealloc: B6,
    __instance_terminated: d6,
    __wbg_handle_free: n6,
    __wbg_proteusapp_free: Pl,
    __wbg_texturehandle_free: a6,
    __wbg_transitionchannel_free: b6,
    __wbg_videohandle_free: o6,
    __wbindgen_destroy_closure: F6,
    __wbindgen_exn_store: A6,
    __wbindgen_externrefs: D6,
    __wbindgen_free: T6,
    __wbindgen_malloc: v6,
    __wbindgen_realloc: S6,
    __wbindgen_start: zt,
    handle_fromId: c6,
    handle_id: s6,
    memory: Fl,
    mount: Bl,
    proteusapp_addChild: kl,
    proteusapp_animateTo: Ml,
    proteusapp_bakeTexture: Rl,
    proteusapp_bakedImageSize: Cl,
    proteusapp_bakedTextSize: Vl,
    proteusapp_bindKey: Ll,
    proteusapp_channelDestroy: El,
    proteusapp_channelSet: Gl,
    proteusapp_clearFocus: Ol,
    proteusapp_clearGlyphCache: Wl,
    proteusapp_component: zl,
    proteusapp_copyBakedImageFrom: Ul,
    proteusapp_createVideo: Hl,
    proteusapp_cropImage: ql,
    proteusapp_declareGeometry: jl,
    proteusapp_declaredGeometry: Kl,
    proteusapp_destroy: Nl,
    proteusapp_devices: Jl,
    proteusapp_focus: Ql,
    proteusapp_focused: Xl,
    proteusapp_freeResources: Yl,
    proteusapp_get: Zl,
    proteusapp_hideVideo: e4,
    proteusapp_inputDevices: _4,
    proteusapp_inputMode: t4,
    proteusapp_isFocused: r4,
    proteusapp_loadTexture: n4,
    proteusapp_mergeFrom: a4,
    proteusapp_mergeFromWithBehavior: b4,
    proteusapp_new: o4,
    proteusapp_onAppKey: c4,
    proteusapp_onBlur: s4,
    proteusapp_onClick: i4,
    proteusapp_onDrag: f4,
    proteusapp_onDropped: u4,
    proteusapp_onFocus: d4,
    proteusapp_onFocusLost: g4,
    proteusapp_onHoverEnter: p4,
    proteusapp_onHoverExit: w4,
    proteusapp_onKey: l4,
    proteusapp_onPress: m4,
    proteusapp_onRelease: h4,
    proteusapp_onTransitionComplete: y4,
    proteusapp_pointerLeft: x4,
    proteusapp_pointerMoved: $4,
    proteusapp_pointerPressed: v4,
    proteusapp_pointerReleased: S4,
    proteusapp_releaseVideo: A4,
    proteusapp_removeChild: I4,
    proteusapp_resetKeyMap: D4,
    proteusapp_setDeclaredGeometry: T4,
    proteusapp_setDefaultFocus: F4,
    proteusapp_setDevices: B4,
    proteusapp_setDisabled: P4,
    proteusapp_setFocusGroup: k4,
    proteusapp_setImage: M4,
    proteusapp_setInputDevices: R4,
    proteusapp_setInteractive: C4,
    proteusapp_setKeyRepeat: V4,
    proteusapp_setLongPressMs: L4,
    proteusapp_setNavigatingActions: E4,
    proteusapp_setNeighbour: G4,
    proteusapp_setOpacity: O4,
    proteusapp_setReadingDirection: W4,
    proteusapp_setStyleTransition: z4,
    proteusapp_setText: U4,
    proteusapp_setTexture: H4,
    proteusapp_setTransitionInteraction: q4,
    proteusapp_setVideoCrossfade: j4,
    proteusapp_setVisible: K4,
    proteusapp_showVideo: N4,
    proteusapp_splitTo: J4,
    proteusapp_splitToWithBehavior: Q4,
    proteusapp_splitToWithStates: X4,
    proteusapp_texture: Y4,
    proteusapp_textureState: Z4,
    proteusapp_tick: e6,
    proteusapp_transitionChannel: _6,
    proteusapp_unbindKey: t6,
    proteusapp_uploadVideoFrame: r6,
    texturehandle_fromId: i6,
    texturehandle_id: f6,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke_______true_: $6,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___f64______true_: g6,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true_: m6,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__4: h6,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__5: y6,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__6: x6,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined_______true_: w6,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_: l6,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_: p6
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Dl(P6);
  zt();
  async function k6(_, e) {
    await fc(_, (t) => e.setup(new C6(t)), e.update ? (t) => {
      var _a3;
      return (_a3 = e.update) == null ? void 0 : _a3.call(e, t);
    } : void 0, e.config ?? null);
  }
  let l_ = class {
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
      const a = new Float64Array(e.map((b) => b.id()));
      n ? this.app.wasmApp.splitToWithBehavior(this.wasmHandle, a, t, r, n) : this.app.wasmApp.splitTo(this.wasmHandle, a, t, r);
    }
    mergeFrom(e, t, r, n) {
      const a = new Float64Array(e.map((b) => b.id()));
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
  }, M6 = class {
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
  }, Ke = class {
    constructor(e, t) {
      this.app = e, this.wasmHandle = t;
    }
    id() {
      return this.wasmHandle.id();
    }
    state() {
      return this.app.wasmApp.textureState(this.wasmHandle);
    }
  }, R6 = class {
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
  }, C6 = class {
    constructor(e) {
      this.wasmApp = e ?? new D_();
    }
    component(e) {
      return new l_(this, this.wasmApp.component(e));
    }
    handleFromId(e) {
      return new l_(this, y.fromId(e));
    }
    transitionChannel(e) {
      return new M6(this, this.wasmApp.transitionChannel(e == null ? void 0 : e.id()));
    }
    texture(e) {
      return new Ke(this, this.wasmApp.texture(e));
    }
    loadTexture(e, t) {
      const r = this.wasmApp.loadTexture(e, t ?? null);
      return r ? new Ke(this, r) : void 0;
    }
    bakeTexture(e, t, r, n) {
      return new Ke(this, this.wasmApp.bakeTexture(e, t, r, n ?? null));
    }
    createVideo() {
      return new R6(this, this.wasmApp.createVideo());
    }
    textureFromId(e) {
      return new Ke(this, J.fromId(e));
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
    setLongPressMs(e) {
      this.wasmApp.setLongPressMs(e);
    }
    resetKeyMap() {
      this.wasmApp.resetKeyMap();
    }
    focused() {
      const e = this.wasmApp.focused();
      return e ? new l_(this, e) : void 0;
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
  const V6 = "" + new URL("proteus_bench_web_bg-D85SM7Jm.wasm", import.meta.url).href;
  class m {
    static __wrap(e) {
      const t = Object.create(m.prototype);
      return t.__wbg_ptr = e, xt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, xt.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_handle_free(e, 0);
    }
    static fromId(e) {
      const t = s.handle_fromId(e);
      return m.__wrap(t);
    }
    id() {
      return s.handle_id(this.__wbg_ptr);
    }
  }
  Symbol.dispose && (m.prototype[Symbol.dispose] = m.prototype.free);
  class Fe {
    static __wrap(e) {
      const t = Object.create(Fe.prototype);
      return t.__wbg_ptr = e, m_.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, m_.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_proteusapp_free(e, 0);
    }
    addChild(e, t) {
      w(e, m), w(t, m);
      const r = s.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw F(r[0]);
    }
    animateTo(e, t, r) {
      w(e, m);
      const n = s.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw F(n[0]);
    }
    bakeTexture(e, t, r, n) {
      const a = h_(r, s.__wbindgen_malloc), b = k, o = s.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, b, n);
      return K.__wrap(o);
    }
    bakedImageSize(e) {
      return w(e, m), s.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return w(e, m), s.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bindKey(e, t) {
      const r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k, a = s.proteusapp_bindKey(this.__wbg_ptr, e, r, n);
      if (a[1]) throw F(a[0]);
    }
    channelDestroy(e) {
      w(e, Q);
      var t = e.__destroy_into_raw();
      s.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      w(e, Q), w(t, m), w(r, m);
      const b = s.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (b[1]) throw F(b[0]);
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
      return m.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      w(e, m), w(t, m);
      const r = s.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = s.proteusapp_createVideo(this.__wbg_ptr);
      return X.__wrap(e);
    }
    cropImage(e, t) {
      w(e, m);
      const r = s.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      w(e, m);
      const r = s.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    declaredGeometry(e) {
      return w(e, m), s.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      w(e, m);
      var t = e.__destroy_into_raw();
      const r = s.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    devices(e) {
      return w(e, m), s.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    focus(e) {
      w(e, m);
      const t = s.proteusapp_focus(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
    }
    focused() {
      const e = s.proteusapp_focused(this.__wbg_ptr);
      return e === 0 ? void 0 : m.__wrap(e);
    }
    freeResources(e) {
      w(e, m);
      const t = s.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
    }
    get(e) {
      return w(e, m), s.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      w(e, m);
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
      return w(e, m), s.proteusapp_isFocused(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    loadTexture(e, t) {
      const r = h_(e, s.__wbindgen_malloc), n = k, a = s.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : K.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      w(e, m);
      const a = t_(t, s.__wbindgen_malloc), b = k, o = s.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, b, r, n);
      if (o[1]) throw F(o[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      w(e, m);
      const b = t_(t, s.__wbindgen_malloc), o = k, c = s.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, b, o, r, n, a);
      if (c[1]) throw F(c[0]);
    }
    constructor() {
      const e = s.proteusapp_new();
      return this.__wbg_ptr = e, m_.register(this, this.__wbg_ptr, this), this;
    }
    onAppKey(e) {
      s.proteusapp_onAppKey(this.__wbg_ptr, e);
    }
    onBlur(e, t) {
      w(e, m), s.proteusapp_onBlur(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onClick(e, t) {
      w(e, m), s.proteusapp_onClick(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDrag(e, t) {
      w(e, m), s.proteusapp_onDrag(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDropped(e, t) {
      w(e, Q), s.proteusapp_onDropped(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocus(e, t) {
      w(e, m), s.proteusapp_onFocus(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocusLost(e) {
      s.proteusapp_onFocusLost(this.__wbg_ptr, e);
    }
    onHoverEnter(e, t) {
      w(e, m), s.proteusapp_onHoverEnter(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverExit(e, t) {
      w(e, m), s.proteusapp_onHoverExit(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onKey(e, t) {
      w(e, m), s.proteusapp_onKey(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onPress(e, t) {
      w(e, m), s.proteusapp_onPress(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onRelease(e, t) {
      w(e, m), s.proteusapp_onRelease(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onTransitionComplete(e, t) {
      w(e, m), s.proteusapp_onTransitionComplete(this.__wbg_ptr, e.__wbg_ptr, t);
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
      w(e, X), s.proteusapp_releaseVideo(this.__wbg_ptr, e.__wbg_ptr);
    }
    removeChild(e, t) {
      w(e, m), w(t, m);
      const r = s.proteusapp_removeChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw F(r[0]);
    }
    resetKeyMap() {
      s.proteusapp_resetKeyMap(this.__wbg_ptr);
    }
    setDeclaredGeometry(e, t) {
      w(e, m);
      const r = s.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDefaultFocus(e, t) {
      w(e, m);
      const r = s.proteusapp_setDefaultFocus(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDevices(e, t) {
      w(e, m);
      const r = s.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDisabled(e, t) {
      w(e, m);
      const r = s.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setFocusGroup(e, t) {
      w(e, m);
      const r = s.proteusapp_setFocusGroup(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setImage(e, t) {
      w(e, m);
      const r = s.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setInputDevices(e) {
      const t = s.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw F(t[0]);
    }
    setInteractive(e, t) {
      w(e, m);
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
      const t = dA(e, s.__wbindgen_malloc), r = k;
      s.proteusapp_setNavigatingActions(this.__wbg_ptr, t, r);
    }
    setNeighbour(e, t, r) {
      w(e, m);
      const n = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k, b = s.proteusapp_setNeighbour(this.__wbg_ptr, e.__wbg_ptr, n, a, !v(r), v(r) ? 0 : r);
      if (b[1]) throw F(b[0]);
    }
    setOpacity(e, t) {
      w(e, m);
      const r = s.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setReadingDirection(e) {
      const t = O(e, s.__wbindgen_malloc, s.__wbindgen_realloc), r = k, n = s.proteusapp_setReadingDirection(this.__wbg_ptr, t, r);
      if (n[1]) throw F(n[0]);
    }
    setStyleTransition(e, t) {
      w(e, m);
      const r = s.proteusapp_setStyleTransition(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setText(e, t) {
      w(e, m);
      const r = s.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setTexture(e, t) {
      w(e, m), w(t, K);
      const r = s.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      w(e, m);
      const r = s.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setVideoCrossfade(e, t) {
      w(e, m);
      const r = s.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      w(e, m);
      const r = s.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    showVideo(e, t) {
      w(e, m), w(t, X);
      const r = s.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      w(e, m);
      const a = t_(t, s.__wbindgen_malloc), b = k, o = s.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, b, r, n);
      if (o[1]) throw F(o[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      w(e, m);
      const b = t_(t, s.__wbindgen_malloc), o = k, c = s.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, b, o, r, n, a);
      if (c[1]) throw F(c[0]);
    }
    splitToWithStates(e, t, r, n) {
      w(e, m);
      const a = s.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw F(a[0]);
    }
    texture(e) {
      const t = s.proteusapp_texture(this.__wbg_ptr, e);
      return K.__wrap(t);
    }
    textureState(e) {
      return w(e, K), s.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
    }
    tick(e) {
      s.proteusapp_tick(this.__wbg_ptr, e);
    }
    transitionChannel(e) {
      const t = s.proteusapp_transitionChannel(this.__wbg_ptr, !v(e), v(e) ? 0 : e);
      return Q.__wrap(t);
    }
    unbindKey(e) {
      const t = s.proteusapp_unbindKey(this.__wbg_ptr, e);
      if (t[3]) throw F(t[2]);
      let r;
      return t[0] !== 0 && (r = S(t[0], t[1]).slice(), s.__wbindgen_free(t[0], t[1] * 1, 1)), r;
    }
    uploadVideoFrame(e, t, r, n) {
      w(e, X);
      const a = h_(n, s.__wbindgen_malloc), b = k;
      return s.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, b) !== 0;
    }
  }
  Symbol.dispose && (Fe.prototype[Symbol.dispose] = Fe.prototype.free);
  class K {
    static __wrap(e) {
      const t = Object.create(K.prototype);
      return t.__wbg_ptr = e, $t.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, $t.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_texturehandle_free(e, 0);
    }
    static fromId(e) {
      const t = s.texturehandle_fromId(e);
      return K.__wrap(t);
    }
    id() {
      return s.texturehandle_id(this.__wbg_ptr);
    }
  }
  Symbol.dispose && (K.prototype[Symbol.dispose] = K.prototype.free);
  class Q {
    static __wrap(e) {
      const t = Object.create(Q.prototype);
      return t.__wbg_ptr = e, vt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, vt.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_transitionchannel_free(e, 0);
    }
  }
  Symbol.dispose && (Q.prototype[Symbol.dispose] = Q.prototype.free);
  class X {
    static __wrap(e) {
      const t = Object.create(X.prototype);
      return t.__wbg_ptr = e, St.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, St.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_videohandle_free(e, 0);
    }
  }
  Symbol.dispose && (X.prototype[Symbol.dispose] = X.prototype.free);
  function L6() {
    s.clear();
  }
  function E6(_) {
    s.on_frame(_);
  }
  function G6(_, e) {
    const t = O(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = k;
    s.show(t, r, e);
  }
  function O6(_, e) {
    const t = O(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = k;
    return s.start(t, r, e);
  }
  function W6() {
    s.stop_frames();
  }
  function z6(_, e) {
    return Error(S(_, e));
  }
  function U6(_) {
    return Number(_);
  }
  function H6(_, e) {
    const t = String(e), r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function q6(_) {
    return _.Window;
  }
  function j6(_) {
    return _.WorkerGlobalScope;
  }
  function K6(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    M().setBigInt64(_ + 8, v(r) ? BigInt(0) : r, true), M().setInt32(_ + 0, !v(r), true);
  }
  function N6(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return v(t) ? 16777215 : t ? 1 : 0;
  }
  function J6(_, e) {
    const t = R_(e), r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function Q6(_, e) {
    return _ in e;
  }
  function X6(_) {
    return typeof _ == "bigint";
  }
  function Y6(_) {
    return typeof _ == "function";
  }
  function Z6(_) {
    return _ === null;
  }
  function e3(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function _3(_) {
    return typeof _ == "string";
  }
  function t3(_) {
    return _ === void 0;
  }
  function r3(_, e) {
    return _ === e;
  }
  function n3(_, e) {
    return _ == e;
  }
  function a3(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    M().setFloat64(_ + 8, v(r) ? 0 : r, true), M().setInt32(_ + 0, !v(r), true);
  }
  function b3(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = v(r) ? 0 : O(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function o3(_, e) {
    throw new Error(S(_, e));
  }
  function c3(_) {
    _._wbg_cb_unref();
  }
  function s3(_) {
    _.abort();
  }
  function i3(_) {
    return _.aborted;
  }
  function f3(_, e) {
    _.activeTexture(e >>> 0);
  }
  function u3(_, e) {
    _.activeTexture(e >>> 0);
  }
  function d3() {
    return l(function(_, e, t, r) {
      _.addEventListener(S(e, t), r);
    }, arguments);
  }
  function g3(_) {
    return _.altKey;
  }
  function p3() {
    return l(function(_) {
      return _.arrayBuffer();
    }, arguments);
  }
  function w3(_, e, t) {
    _.attachShader(e, t);
  }
  function l3(_, e, t) {
    _.attachShader(e, t);
  }
  function m3(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function h3() {
    return l(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function y3(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function x3(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function $3(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function v3(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function S3(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function A3(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function I3(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function D3(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function T3(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function F3(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function B3(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function P3(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function k3(_, e) {
    _.bindVertexArrayOES(e);
  }
  function M3(_, e) {
    _.bindVertexArray(e);
  }
  function R3(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function C3(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function V3(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function L3(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function E3(_, e) {
    _.blendEquation(e >>> 0);
  }
  function G3(_, e) {
    _.blendEquation(e >>> 0);
  }
  function O3(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function W3(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function z3(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function U3(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function H3(_, e, t, r, n, a, b, o, c, f, d) {
    _.blitFramebuffer(e, t, r, n, a, b, o, c, f >>> 0, d >>> 0);
  }
  function q3(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function j3(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function K3(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function N3(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function J3(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function Q3(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function X3(_) {
    return _.button;
  }
  function Y3() {
    return l(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function Z3() {
    return l(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function em() {
    return l(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function _m(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, G(r, n));
  }
  function tm(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, ee(r, n));
  }
  function rm(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, Se(r, n));
  }
  function nm(_, e) {
    _.clearDepth(e);
  }
  function am(_, e) {
    _.clearDepth(e);
  }
  function bm(_, e) {
    _.clearStencil(e);
  }
  function om(_, e) {
    _.clearStencil(e);
  }
  function cm(_, e) {
    _.clear(e >>> 0);
  }
  function sm(_, e) {
    _.clear(e >>> 0);
  }
  function im(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function fm(_, e) {
    const t = e.code, r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function um(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function dm(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function gm(_, e) {
    _.compileShader(e);
  }
  function pm(_, e) {
    _.compileShader(e);
  }
  function wm(_, e, t, r, n, a, b, o, c) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c);
  }
  function lm(_, e, t, r, n, a, b, o, c) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c);
  }
  function mm(_, e, t, r, n, a, b, o, c, f) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c, f);
  }
  function hm(_, e, t, r, n, a, b, o, c, f, d, I) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, b, o, c, f >>> 0, d, I);
  }
  function ym(_, e, t, r, n, a, b, o, c, f, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, b, o, c, f >>> 0, d);
  }
  function xm() {
    return l(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function $m(_) {
    return _.contentRect;
  }
  function vm(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function Sm(_, e, t, r, n, a, b, o, c) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, b, o, c);
  }
  function Am(_, e, t, r, n, a, b, o, c) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, b, o, c);
  }
  function Im(_, e, t, r, n, a, b, o, c, f) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, b, o, c, f);
  }
  function Dm() {
    return l(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function Tm() {
    return l(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function Fm(_, e) {
    return _.createBindGroup(e);
  }
  function Bm(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : P(e);
  }
  function Pm() {
    return l(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function km(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : P(e);
  }
  function Mm(_, e) {
    return _.createCommandEncoder(e);
  }
  function Rm(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : P(e);
  }
  function Cm(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : P(e);
  }
  function Vm(_, e) {
    return _.createPipelineLayout(e);
  }
  function Lm(_) {
    const e = _.createProgram();
    return v(e) ? 0 : P(e);
  }
  function Em(_) {
    const e = _.createProgram();
    return v(e) ? 0 : P(e);
  }
  function Gm(_) {
    const e = _.createQuery();
    return v(e) ? 0 : P(e);
  }
  function Om() {
    return l(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function Wm(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : P(e);
  }
  function zm(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : P(e);
  }
  function Um(_, e) {
    return _.createSampler(e);
  }
  function Hm(_) {
    const e = _.createSampler();
    return v(e) ? 0 : P(e);
  }
  function qm(_, e) {
    return _.createShaderModule(e);
  }
  function jm(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : P(t);
  }
  function Km(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : P(t);
  }
  function Nm(_) {
    const e = _.createTexture();
    return v(e) ? 0 : P(e);
  }
  function Jm(_) {
    const e = _.createTexture();
    return v(e) ? 0 : P(e);
  }
  function Qm() {
    return l(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function Xm(_) {
    const e = _.createVertexArrayOES();
    return v(e) ? 0 : P(e);
  }
  function Ym(_) {
    const e = _.createVertexArray();
    return v(e) ? 0 : P(e);
  }
  function Zm() {
    return l(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function e5(_) {
    return _.ctrlKey;
  }
  function _5(_, e) {
    _.cullFace(e >>> 0);
  }
  function t5(_, e) {
    _.cullFace(e >>> 0);
  }
  function r5(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function n5(_, e) {
    _.deleteBuffer(e);
  }
  function a5(_, e) {
    _.deleteBuffer(e);
  }
  function b5(_, e) {
    _.deleteFramebuffer(e);
  }
  function o5(_, e) {
    _.deleteFramebuffer(e);
  }
  function c5(_, e) {
    _.deleteProgram(e);
  }
  function s5(_, e) {
    _.deleteProgram(e);
  }
  function i5(_, e) {
    _.deleteQuery(e);
  }
  function f5(_, e) {
    _.deleteRenderbuffer(e);
  }
  function u5(_, e) {
    _.deleteRenderbuffer(e);
  }
  function d5(_, e) {
    _.deleteSampler(e);
  }
  function g5(_, e) {
    _.deleteShader(e);
  }
  function p5(_, e) {
    _.deleteShader(e);
  }
  function w5(_, e) {
    _.deleteSync(e);
  }
  function l5(_, e) {
    _.deleteTexture(e);
  }
  function m5(_, e) {
    _.deleteTexture(e);
  }
  function h5(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function y5(_, e) {
    _.deleteVertexArray(e);
  }
  function x5(_, e) {
    _.depthFunc(e >>> 0);
  }
  function $5(_, e) {
    _.depthFunc(e >>> 0);
  }
  function v5(_, e) {
    _.depthMask(e !== 0);
  }
  function S5(_, e) {
    _.depthMask(e !== 0);
  }
  function A5(_, e, t) {
    _.depthRange(e, t);
  }
  function I5(_, e, t) {
    _.depthRange(e, t);
  }
  function D5(_, e) {
    const t = e.description, r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function T5(_) {
    _.destroy();
  }
  function F5(_) {
    return _.devicePixelRatio;
  }
  function B5(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function P5(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function k5(_, e) {
    _.disable(e >>> 0);
  }
  function M5(_, e) {
    _.disable(e >>> 0);
  }
  function R5(_) {
    const e = _.document;
    return v(e) ? 0 : P(e);
  }
  function C5(_) {
    return _.done;
  }
  function V5(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function L5(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function E5(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function G5(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function O5(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function W5(_, e) {
    _.drawBuffers(e);
  }
  function z5(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function U5(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function H5(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function q5(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function j5(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function K5(_, e) {
    _.enable(e >>> 0);
  }
  function N5(_, e) {
    _.enable(e >>> 0);
  }
  function J5(_, e) {
    _.endQuery(e >>> 0);
  }
  function Q5(_) {
    _.end();
  }
  function X5(_) {
    return Object.entries(_);
  }
  function Y5(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function Z5(_) {
    console.error(_);
  }
  function e8(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(S(_, e));
    } finally {
      s.__wbindgen_free(t, r, 1);
    }
  }
  function _8(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return v(r) ? 0 : P(r);
  }
  function t8(_, e, t) {
    return _.fetch(S(e, t));
  }
  function r8(_, e, t, r) {
    return _.fetch(S(e, t), r);
  }
  function n8(_) {
    return _.finish();
  }
  function a8(_, e) {
    return _.finish(e);
  }
  function b8(_) {
    _.flush();
  }
  function o8(_) {
    _.flush();
  }
  function c8() {
    return l(function(_) {
      _.focus();
    }, arguments);
  }
  function s8(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function i8(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function f8(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function u8(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function d8(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function g8(_, e, t, r, n, a, b) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, b);
  }
  function p8(_, e) {
    _.frontFace(e >>> 0);
  }
  function w8(_, e) {
    _.frontFace(e >>> 0);
  }
  function l8(_) {
    return _.getBoundingClientRect();
  }
  function m8(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function h8() {
    return l(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : P(n);
    }, arguments);
  }
  function y8() {
    return l(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : P(r);
    }, arguments);
  }
  function x8() {
    return l(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : P(r);
    }, arguments);
  }
  function $8() {
    return l(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : P(n);
    }, arguments);
  }
  function v8() {
    return l(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function S8(_, e, t) {
    const r = _.getElementById(S(e, t));
    return v(r) ? 0 : P(r);
  }
  function A8() {
    return l(function(_, e, t) {
      const r = _.getExtension(S(e, t));
      return v(r) ? 0 : P(r);
    }, arguments);
  }
  function I8() {
    return l(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function D8() {
    return l(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function T8(_, e, t) {
    return _.getModifierState(S(e, t));
  }
  function F8() {
    return l(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function B8() {
    return l(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function P8(_) {
    const e = _.getPreferredCanvasFormat();
    return (ce.indexOf(e) + 1 || 96) - 1;
  }
  function k8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : O(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function M8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : O(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function R8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function C8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function V8(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function L8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : O(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function E8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : O(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function G8(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function O8(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function W8(_) {
    const e = _.getSupportedExtensions();
    return v(e) ? 0 : P(e);
  }
  function z8(_) {
    const e = _.getSupportedProfiles();
    return v(e) ? 0 : P(e);
  }
  function U8(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function H8(_, e, t, r) {
    return _.getUniformBlockIndex(e, S(t, r));
  }
  function q8(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : P(n);
  }
  function j8(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : P(n);
  }
  function K8(_, e) {
    return _[e >>> 0];
  }
  function N8(_, e) {
    const t = _[e >>> 0];
    return v(t) ? 0 : P(t);
  }
  function J8() {
    return l(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function Q8(_, e) {
    return _[e >>> 0];
  }
  function X8(_, e) {
    return _[e];
  }
  function Y8(_) {
    return _.gpu;
  }
  function Z8(_, e, t) {
    return _.hasAttribute(S(e, t));
  }
  function e9(_) {
    return _.height;
  }
  function _9(_) {
    return _.height;
  }
  function t9(_) {
    return _.hidden;
  }
  function r9(_, e, t) {
    return _.includes(e, t);
  }
  function n9(_) {
    return _.info;
  }
  function a9(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function b9(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function o9(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function c9(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function s9(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function i9(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function f9(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function u9(_) {
    let e;
    try {
      e = _ instanceof Response;
    } catch {
      e = false;
    }
    return e;
  }
  function d9(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function g9(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function p9(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function w9() {
    return l(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function l9(_) {
    return Array.isArray(_);
  }
  function m9(_) {
    return _.isComposing;
  }
  function h9(_) {
    return Number.isSafeInteger(_);
  }
  function y9(_, e) {
    return Object.is(_, e);
  }
  function x9() {
    return Symbol.iterator;
  }
  function $9(_, e) {
    const t = e.key, r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function v9(_, e) {
    const t = e.label, r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function S9(_) {
    return _.length;
  }
  function A9(_) {
    return _.length;
  }
  function I9(_) {
    return _.limits;
  }
  function D9(_) {
    return _.limits;
  }
  function T9(_, e) {
    _.linkProgram(e);
  }
  function F9(_, e) {
    _.linkProgram(e);
  }
  function B9(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function P9(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function k9(_) {
    return _.maxBindGroups;
  }
  function M9(_) {
    return _.maxBindingsPerBindGroup;
  }
  function R9(_) {
    return _.maxBufferSize;
  }
  function C9(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function V9(_) {
    return _.maxColorAttachments;
  }
  function L9(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function E9(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function G9(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function O9(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function W9(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function z9(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function U9(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function H9(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function q9(_) {
    return _.maxInterStageShaderVariables;
  }
  function j9(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function K9(_) {
    return _.maxSamplersPerShaderStage;
  }
  function N9(_) {
    return _.maxStorageBufferBindingSize;
  }
  function J9(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function Q9(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function X9(_) {
    return _.maxTextureArrayLayers;
  }
  function Y9(_) {
    return _.maxTextureDimension1D;
  }
  function Z9(_) {
    return _.maxTextureDimension2D;
  }
  function e7(_) {
    return _.maxTextureDimension3D;
  }
  function _7(_) {
    return _.maxUniformBufferBindingSize;
  }
  function t7(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function r7(_) {
    return _.maxVertexAttributes;
  }
  function n7(_) {
    return _.maxVertexBufferArrayStride;
  }
  function a7(_) {
    return _.maxVertexBuffers;
  }
  function b7(_) {
    return _.metaKey;
  }
  function o7(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function c7(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function s7(_) {
    return _.navigator;
  }
  function i7(_) {
    return _.navigator;
  }
  function f7() {
    return l(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function u7() {
    return new Error();
  }
  function d7() {
    return new Object();
  }
  function g7() {
    return new Array();
  }
  function p7() {
    return l(function() {
      return new AbortController();
    }, arguments);
  }
  function w7(_) {
    return new Uint8Array(_);
  }
  function l7(_, e) {
    return new Error(S(_, e));
  }
  function m7(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, b) => {
        const o = t.a;
        t.a = 0;
        try {
          return WS(o, t.b, a, b);
        } finally {
          t.a = o;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function h7(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function y7() {
    return l(function(_) {
      return _.next();
    }, arguments);
  }
  function x7(_) {
    return _.next;
  }
  function $7(_) {
    return _.now();
  }
  function v7(_, e) {
    _.observe(e);
  }
  function S7(_) {
    return Array.of(_);
  }
  function A7(_) {
    return _.offsetX;
  }
  function I7(_) {
    return _.offsetY;
  }
  function D7(_) {
    return _.ok;
  }
  function T7(_) {
    return _.onSubmittedWorkDone();
  }
  function F7(_) {
    const e = _.performance;
    return v(e) ? 0 : P(e);
  }
  function B7(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function P7(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function k7(_, e, t) {
    _.polygonOffset(e, t);
  }
  function M7(_, e, t) {
    _.polygonOffset(e, t);
  }
  function R7(_) {
    _.preventDefault();
  }
  function C7(_) {
    return Fe.__wrap(_);
  }
  function V7(_, e, t) {
    Uint8Array.prototype.set.call(i_(_, e), t);
  }
  function L7(_, e) {
    return _.push(e);
  }
  function E7(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function G7() {
    return l(function(_, e, t) {
      return _.querySelectorAll(S(e, t));
    }, arguments);
  }
  function O7() {
    return l(function(_, e, t) {
      const r = _.querySelector(S(e, t));
      return v(r) ? 0 : P(r);
    }, arguments);
  }
  function W7(_) {
    return _.queueMicrotask;
  }
  function z7(_) {
    queueMicrotask(_);
  }
  function U7(_) {
    return _.queue;
  }
  function H7(_, e) {
    _.readBuffer(e >>> 0);
  }
  function q7() {
    return l(function(_, e, t, r, n, a, b, o) {
      _.readPixels(e, t, r, n, a >>> 0, b >>> 0, o);
    }, arguments);
  }
  function j7() {
    return l(function(_, e, t, r, n, a, b, o) {
      _.readPixels(e, t, r, n, a >>> 0, b >>> 0, o);
    }, arguments);
  }
  function K7() {
    return l(function(_, e, t, r, n, a, b, o) {
      _.readPixels(e, t, r, n, a >>> 0, b >>> 0, o);
    }, arguments);
  }
  function N7(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function J7(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function Q7(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function X7(_) {
    return _.repeat;
  }
  function Y7(_, e) {
    return _.requestAdapter(e);
  }
  function Z7(_) {
    return _.requestAdapter();
  }
  function eh() {
    return l(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function _h(_, e) {
    return _.requestDevice(e);
  }
  function th(_) {
    return Promise.resolve(_);
  }
  function rh(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function nh(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function ah(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function bh(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function oh() {
    return l(function(_, e, t, r, n) {
      _.setAttribute(S(e, t), S(r, n));
    }, arguments);
  }
  function ch() {
    return l(function(_, e, t, r, n, a, b) {
      _.setBindGroup(e >>> 0, t, Se(r, n), a, b >>> 0);
    }, arguments);
  }
  function sh(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function ih(_, e, t, r, n) {
    _.setIndexBuffer(e, Y_[t], r, n);
  }
  function fh(_, e, t, r) {
    _.setIndexBuffer(e, Y_[t], r);
  }
  function uh(_, e) {
    _.setPipeline(e);
  }
  function dh(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function gh(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function ph(_, e, t, r, n, a, b) {
    _.setViewport(e, t, r, n, a, b);
  }
  function wh(_, e, t) {
    _.set(e, t >>> 0);
  }
  function lh() {
    return l(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function mh(_, e, t) {
    _[e] = t;
  }
  function hh(_, e) {
    _.a = e;
  }
  function yh(_, e) {
    _.access = YS[e];
  }
  function xh(_, e) {
    _.addressModeU = Q_[e];
  }
  function $h(_, e) {
    _.addressModeV = Q_[e];
  }
  function vh(_, e) {
    _.addressModeW = Q_[e];
  }
  function Sh(_, e) {
    _.alpha = e;
  }
  function Ah(_, e) {
    _.alphaMode = qS[e];
  }
  function Ih(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function Dh(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function Th(_, e) {
    _.arrayStride = e;
  }
  function Fh(_, e) {
    _.aspect = qt[e];
  }
  function Bh(_, e) {
    _.aspect = qt[e];
  }
  function Ph(_, e) {
    _.attributes = e;
  }
  function kh(_, e) {
    _.b = e;
  }
  function Mh(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function Rh(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function Ch(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function Vh(_, e) {
    _.bindGroupLayouts = e;
  }
  function Lh(_, e) {
    _.binding = e >>> 0;
  }
  function Eh(_, e) {
    _.binding = e >>> 0;
  }
  function Gh(_, e) {
    _.blend = e;
  }
  function Oh(_, e) {
    _.buffer = e;
  }
  function Wh(_, e) {
    _.buffer = e;
  }
  function zh(_, e) {
    _.buffers = e;
  }
  function Uh(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function Hh(_, e) {
    _.clearValue = e;
  }
  function qh(_, e, t) {
    _.code = S(e, t);
  }
  function jh(_, e) {
    _.colorAttachments = e;
  }
  function Kh(_, e) {
    _.color = e;
  }
  function Nh(_, e) {
    _.compare = X_[e];
  }
  function Jh(_, e) {
    _.compare = X_[e];
  }
  function Qh(_, e) {
    _.count = e >>> 0;
  }
  function Xh(_, e) {
    _.cullMode = jS[e];
  }
  function Yh(_, e, t) {
    _[e >>> 0] = t;
  }
  function Zh(_, e) {
    _.depthBias = e;
  }
  function ey(_, e) {
    _.depthBiasClamp = e;
  }
  function _y(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function ty(_, e) {
    _.depthClearValue = e;
  }
  function ry(_, e) {
    _.depthCompare = X_[e];
  }
  function ny(_, e) {
    _.depthFailOp = et[e];
  }
  function ay(_, e) {
    _.depthLoadOp = Z_[e];
  }
  function by(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function oy(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function cy(_, e) {
    _.depthStencil = e;
  }
  function sy(_, e) {
    _.depthStencilAttachment = e;
  }
  function iy(_, e) {
    _.depthStoreOp = _t[e];
  }
  function fy(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function uy(_, e) {
    _.device = e;
  }
  function dy(_, e) {
    _.dimension = tt[e];
  }
  function gy(_, e) {
    _.dimension = ZS[e];
  }
  function py(_, e) {
    _.dstFactor = Ut[e];
  }
  function wy(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function ly(_, e) {
    _.entries = e;
  }
  function my(_, e) {
    _.entries = e;
  }
  function hy(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function yy(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function xy(_, e) {
    _.externalTexture = e;
  }
  function $y(_, e) {
    _.failOp = et[e];
  }
  function vy(_, e) {
    _.format = ce[e];
  }
  function Sy(_, e) {
    _.format = _A[e];
  }
  function Ay(_, e) {
    _.format = ce[e];
  }
  function Iy(_, e) {
    _.format = ce[e];
  }
  function Dy(_, e) {
    _.format = ce[e];
  }
  function Ty(_, e) {
    _.format = ce[e];
  }
  function Fy(_, e) {
    _.format = ce[e];
  }
  function By(_, e) {
    _.fragment = e;
  }
  function Py(_, e) {
    _.frontFace = KS[e];
  }
  function ky(_, e) {
    _.g = e;
  }
  function My(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function Ry(_, e) {
    _.height = e >>> 0;
  }
  function Cy(_, e) {
    _.height = e >>> 0;
  }
  function Vy(_, e) {
    _.height = e >>> 0;
  }
  function Ly(_, e, t) {
    _.label = S(e, t);
  }
  function Ey(_, e, t) {
    _.label = S(e, t);
  }
  function Gy(_, e, t) {
    _.label = S(e, t);
  }
  function Oy(_, e, t) {
    _.label = S(e, t);
  }
  function Wy(_, e, t) {
    _.label = S(e, t);
  }
  function zy(_, e, t) {
    _.label = S(e, t);
  }
  function Uy(_, e, t) {
    _.label = S(e, t);
  }
  function Hy(_, e, t) {
    _.label = S(e, t);
  }
  function qy(_, e, t) {
    _.label = S(e, t);
  }
  function jy(_, e, t) {
    _.label = S(e, t);
  }
  function Ky(_, e, t) {
    _.label = S(e, t);
  }
  function Ny(_, e, t) {
    _.label = S(e, t);
  }
  function Jy(_, e, t) {
    _.label = S(e, t);
  }
  function Qy(_, e) {
    _.layout = e;
  }
  function Xy(_, e) {
    _.layout = e;
  }
  function Yy(_, e) {
    _.loadOp = Z_[e];
  }
  function Zy(_, e) {
    _.lodMaxClamp = e;
  }
  function ex(_, e) {
    _.lodMinClamp = e;
  }
  function _x(_, e) {
    _.magFilter = Ht[e];
  }
  function tx(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function rx(_, e) {
    _.mask = e >>> 0;
  }
  function nx(_, e) {
    _.maxAnisotropy = e;
  }
  function ax(_, e) {
    _.minBindingSize = e;
  }
  function bx(_, e) {
    _.minFilter = Ht[e];
  }
  function ox(_, e) {
    _.mipLevel = e >>> 0;
  }
  function cx(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function sx(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function ix(_, e) {
    _.mipmapFilter = NS[e];
  }
  function fx(_, e) {
    _.module = e;
  }
  function ux(_, e) {
    _.module = e;
  }
  function dx(_, e) {
    _.multisample = e;
  }
  function gx(_, e) {
    _.multisampled = e !== 0;
  }
  function px(_, e) {
    _.offset = e;
  }
  function wx(_, e) {
    _.offset = e;
  }
  function lx(_, e) {
    _.offset = e;
  }
  function mx(_, e) {
    _.operation = US[e];
  }
  function hx(_, e) {
    _.origin = e;
  }
  function yx(_, e) {
    _.passOp = et[e];
  }
  function xx(_, e) {
    _.powerPreference = JS[e];
  }
  function $x(_, e) {
    _.primitive = e;
  }
  function vx(_, e) {
    _.querySet = e;
  }
  function Sx(_, e) {
    _.r = e;
  }
  function Ax(_, e) {
    _.requiredFeatures = e;
  }
  function Ix(_, e) {
    _.requiredLimits = e;
  }
  function Dx(_, e) {
    _.resolveTarget = e;
  }
  function Tx(_, e) {
    _.resource = e;
  }
  function Fx(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function Bx(_, e) {
    _.sampleCount = e >>> 0;
  }
  function Px(_, e) {
    _.sampleType = eA[e];
  }
  function kx(_, e) {
    _.sampler = e;
  }
  function Mx(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function Rx(_, e) {
    _.signal = e;
  }
  function Cx(_, e) {
    _.size = e;
  }
  function Vx(_, e) {
    _.size = e;
  }
  function Lx(_, e) {
    _.size = e;
  }
  function Ex(_, e) {
    _.srcFactor = Ut[e];
  }
  function Gx(_, e) {
    _.stencilBack = e;
  }
  function Ox(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function Wx(_, e) {
    _.stencilFront = e;
  }
  function zx(_, e) {
    _.stencilLoadOp = Z_[e];
  }
  function Ux(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function Hx(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function qx(_, e) {
    _.stencilStoreOp = _t[e];
  }
  function jx(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function Kx(_, e) {
    _.stepMode = tA[e];
  }
  function Nx(_, e) {
    _.storageTexture = e;
  }
  function Jx(_, e) {
    _.storeOp = _t[e];
  }
  function Qx(_, e) {
    _.stripIndexFormat = Y_[e];
  }
  function Xx(_, e) {
    _.targets = e;
  }
  function Yx(_, e) {
    _.texture = e;
  }
  function Zx(_, e) {
    _.texture = e;
  }
  function e$(_, e) {
    _.timestampWrites = e;
  }
  function _$(_, e) {
    _.topology = QS[e];
  }
  function t$(_, e) {
    _.type = HS[e];
  }
  function r$(_, e) {
    _.type = XS[e];
  }
  function n$(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function a$(_, e) {
    _.usage = e >>> 0;
  }
  function b$(_, e) {
    _.usage = e >>> 0;
  }
  function o$(_, e) {
    _.usage = e >>> 0;
  }
  function c$(_, e) {
    _.usage = e >>> 0;
  }
  function s$(_, e) {
    _.vertex = e;
  }
  function i$(_, e) {
    _.view = e;
  }
  function f$(_, e) {
    _.view = e;
  }
  function u$(_, e) {
    _.viewDimension = tt[e];
  }
  function d$(_, e) {
    _.viewDimension = tt[e];
  }
  function g$(_, e) {
    _.viewFormats = e;
  }
  function p$(_, e) {
    _.viewFormats = e;
  }
  function w$(_, e) {
    _.visibility = e >>> 0;
  }
  function l$(_, e) {
    _.width = e >>> 0;
  }
  function m$(_, e) {
    _.width = e >>> 0;
  }
  function h$(_, e) {
    _.width = e >>> 0;
  }
  function y$(_, e) {
    _.writeMask = e >>> 0;
  }
  function x$(_, e) {
    _.x = e >>> 0;
  }
  function $$(_, e) {
    _.y = e >>> 0;
  }
  function v$(_, e) {
    _.z = e >>> 0;
  }
  function S$(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function A$(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function I$(_) {
    return _.shiftKey;
  }
  function D$(_) {
    return _.signal;
  }
  function T$(_, e) {
    const t = e.stack, r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function F$() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return v(_) ? 0 : P(_);
  }
  function B$() {
    const _ = typeof global > "u" ? null : global;
    return v(_) ? 0 : P(_);
  }
  function P$() {
    const _ = typeof self > "u" ? null : self;
    return v(_) ? 0 : P(_);
  }
  function k$() {
    const _ = typeof window > "u" ? null : window;
    return v(_) ? 0 : P(_);
  }
  function M$(_, e) {
    const t = e.statusText, r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function R$(_) {
    return _.status;
  }
  function C$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function V$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function L$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function E$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function G$(_, e) {
    _.stencilMask(e >>> 0);
  }
  function O$(_, e) {
    _.stencilMask(e >>> 0);
  }
  function W$(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function z$(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function U$(_, e) {
    _.submit(e);
  }
  function H$() {
    return l(function(_, e, t, r, n, a, b, o, c, f) {
      _.texImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function q$() {
    return l(function(_, e, t, r, n, a, b, o, c, f) {
      _.texImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function j$() {
    return l(function(_, e, t, r, n, a, b, o, c, f) {
      _.texImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function K$() {
    return l(function(_, e, t, r, n, a, b, o, c, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, b, o, c >>> 0, f >>> 0, d);
    }, arguments);
  }
  function N$() {
    return l(function(_, e, t, r, n, a, b, o, c, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, b, o, c >>> 0, f >>> 0, d);
    }, arguments);
  }
  function J$(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function Q$(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function X$(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function Y$(_, e, t, r, n, a, b) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, b);
  }
  function Z$() {
    return l(function(_, e, t, r, n, a, b, o, c, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function ev() {
    return l(function(_, e, t, r, n, a, b, o, c, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function _v() {
    return l(function(_, e, t, r, n, a, b, o, c, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function tv() {
    return l(function(_, e, t, r, n, a, b, o, c, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function rv() {
    return l(function(_, e, t, r, n, a, b, o, c, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function nv() {
    return l(function(_, e, t, r, n, a, b, o, c, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function av() {
    return l(function(_, e, t, r, n, a, b, o, c, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function bv() {
    return l(function(_, e, t, r, n, a, b, o, c, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, o >>> 0, c >>> 0, f);
    }, arguments);
  }
  function ov() {
    return l(function(_, e, t, r, n, a, b, o, c, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, o, c, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function cv() {
    return l(function(_, e, t, r, n, a, b, o, c, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, o, c, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function sv() {
    return l(function(_, e, t, r, n, a, b, o, c, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, o, c, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function iv() {
    return l(function(_, e, t, r, n, a, b, o, c, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, o, c, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function fv() {
    return l(function(_, e, t, r, n, a, b, o, c, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, o, c, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function uv() {
    return l(function(_, e, t, r, n, a, b, o, c, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, o, c, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function dv() {
    return l(function(_, e, t, r, n, a, b, o, c, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, o, c, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function gv(_, e, t) {
    return _.then(e, t);
  }
  function pv(_, e, t) {
    return _.then(e, t);
  }
  function wv(_, e) {
    return _.then(e);
  }
  function lv(_, e, t) {
    _.uniform1f(e, t);
  }
  function mv(_, e, t) {
    _.uniform1f(e, t);
  }
  function hv(_, e, t) {
    _.uniform1i(e, t);
  }
  function yv(_, e, t) {
    _.uniform1i(e, t);
  }
  function xv(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function $v(_, e, t, r) {
    _.uniform2fv(e, G(t, r));
  }
  function vv(_, e, t, r) {
    _.uniform2fv(e, G(t, r));
  }
  function Sv(_, e, t, r) {
    _.uniform2iv(e, ee(t, r));
  }
  function Av(_, e, t, r) {
    _.uniform2iv(e, ee(t, r));
  }
  function Iv(_, e, t, r) {
    _.uniform2uiv(e, Se(t, r));
  }
  function Dv(_, e, t, r) {
    _.uniform3fv(e, G(t, r));
  }
  function Tv(_, e, t, r) {
    _.uniform3fv(e, G(t, r));
  }
  function Fv(_, e, t, r) {
    _.uniform3iv(e, ee(t, r));
  }
  function Bv(_, e, t, r) {
    _.uniform3iv(e, ee(t, r));
  }
  function Pv(_, e, t, r) {
    _.uniform3uiv(e, Se(t, r));
  }
  function kv(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function Mv(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function Rv(_, e, t, r) {
    _.uniform4fv(e, G(t, r));
  }
  function Cv(_, e, t, r) {
    _.uniform4fv(e, G(t, r));
  }
  function Vv(_, e, t, r) {
    _.uniform4iv(e, ee(t, r));
  }
  function Lv(_, e, t, r) {
    _.uniform4iv(e, ee(t, r));
  }
  function Ev(_, e, t, r) {
    _.uniform4uiv(e, Se(t, r));
  }
  function Gv(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function Ov(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, G(r, n));
  }
  function Wv(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, G(r, n));
  }
  function zv(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, G(r, n));
  }
  function Uv(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, G(r, n));
  }
  function Hv(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, G(r, n));
  }
  function qv(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, G(r, n));
  }
  function jv(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, G(r, n));
  }
  function Kv(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, G(r, n));
  }
  function Nv(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, G(r, n));
  }
  function Jv(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, G(r, n));
  }
  function Qv(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, G(r, n));
  }
  function Xv(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, G(r, n));
  }
  function Yv(_) {
    _.unmap();
  }
  function Zv(_, e) {
    _.useProgram(e);
  }
  function eS(_, e) {
    _.useProgram(e);
  }
  function _S(_) {
    return _.value;
  }
  function tS(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function rS(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function nS(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function aS(_, e, t, r, n, a, b) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, b);
  }
  function bS(_, e, t, r, n, a, b) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, b);
  }
  function oS(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function cS(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function sS(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function iS(_) {
    return _.width;
  }
  function fS(_) {
    return _.width;
  }
  function uS() {
    return l(function(_, e, t, r, n, a, b) {
      _.writeBuffer(e, t, i_(r, n), a, b);
    }, arguments);
  }
  function dS() {
    return l(function(_, e, t, r, n, a) {
      _.writeTexture(e, i_(t, r), n, a);
    }, arguments);
  }
  function gS(_, e) {
    return _e(_, e, CS);
  }
  function pS(_, e) {
    return _e(_, e, OS);
  }
  function wS(_, e) {
    return _e(_, e, zS);
  }
  function lS(_, e) {
    return _e(_, e, VS);
  }
  function mS(_, e) {
    return _e(_, e, LS);
  }
  function hS(_, e) {
    return _e(_, e, ES);
  }
  function yS(_, e) {
    return _e(_, e, GS);
  }
  function xS(_, e) {
    return _e(_, e, RS);
  }
  function $S(_) {
    return _;
  }
  function vS(_) {
    return _;
  }
  function SS(_, e) {
    return G(_, e);
  }
  function AS(_, e) {
    return rA(_, e);
  }
  function IS(_, e) {
    return ee(_, e);
  }
  function DS(_, e) {
    return nA(_, e);
  }
  function TS(_, e) {
    return aA(_, e);
  }
  function FS(_, e) {
    return Se(_, e);
  }
  function BS(_, e) {
    return i_(_, e);
  }
  function PS(_, e) {
    return S(_, e);
  }
  function kS(_) {
    return BigInt.asUintN(64, _);
  }
  function MS() {
    const _ = s.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function RS(_, e) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke_______true_(_, e);
  }
  function CS(_, e, t) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_(_, e, t);
  }
  function VS(_, e, t) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true_(_, e, t);
  }
  function LS(_, e, t) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__4(_, e, t);
  }
  function ES(_, e, t) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__5(_, e, t);
  }
  function GS(_, e, t) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__6(_, e, t);
  }
  function OS(_, e, t) {
    const r = s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_(_, e, t);
    if (r[1]) throw F(r[0]);
  }
  function WS(_, e, t, r) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined_______true_(_, e, t, r);
  }
  function zS(_, e, t) {
    s.wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___f64______true_(_, e, t);
  }
  const Q_ = [
    "clamp-to-edge",
    "repeat",
    "mirror-repeat"
  ], Ut = [
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
  ], US = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], HS = [
    "uniform",
    "storage",
    "read-only-storage"
  ], qS = [
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
  ], jS = [
    "none",
    "front",
    "back"
  ], Ht = [
    "nearest",
    "linear"
  ], KS = [
    "ccw",
    "cw"
  ], Y_ = [
    "uint16",
    "uint32"
  ], Z_ = [
    "load",
    "clear"
  ], NS = [
    "nearest",
    "linear"
  ], JS = [
    "low-power",
    "high-performance"
  ], QS = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], XS = [
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
  ], YS = [
    "write-only",
    "read-only",
    "read-write"
  ], _t = [
    "store",
    "discard"
  ], qt = [
    "all",
    "stencil-only",
    "depth-only"
  ], ZS = [
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
  ], eA = [
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
  ], _A = [
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
  ], tA = [
    "vertex",
    "instance"
  ], xt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => s.__wbg_handle_free(_, 1)), m_ = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => s.__wbg_proteusapp_free(_, 1)), $t = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => s.__wbg_texturehandle_free(_, 1)), vt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => s.__wbg_transitionchannel_free(_, 1)), St = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => s.__wbg_videohandle_free(_, 1));
  function P(_) {
    const e = s.__externref_table_alloc();
    return s.__wbindgen_externrefs.set(e, _), e;
  }
  function w(_, e) {
    if (!(_ instanceof e)) throw new Error(`expected instance of ${e.name}`);
  }
  const At = typeof FinalizationRegistry > "u" ? {
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
      for (let b = 1; b < n; b++) a += ", " + R_(_[b]);
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
  function G(_, e) {
    return _ = _ >>> 0, bA().subarray(_ / 4, _ / 4 + e);
  }
  function rA(_, e) {
    return _ = _ >>> 0, cA().subarray(_ / 2, _ / 2 + e);
  }
  function ee(_, e) {
    return _ = _ >>> 0, sA().subarray(_ / 4, _ / 4 + e);
  }
  function nA(_, e) {
    return _ = _ >>> 0, iA().subarray(_ / 1, _ / 1 + e);
  }
  function aA(_, e) {
    return _ = _ >>> 0, fA().subarray(_ / 2, _ / 2 + e);
  }
  function Se(_, e) {
    return _ = _ >>> 0, uA().subarray(_ / 4, _ / 4 + e);
  }
  function i_(_, e) {
    return _ = _ >>> 0, he().subarray(_ / 1, _ / 1 + e);
  }
  let fe = null;
  function M() {
    return (fe === null || fe.buffer.detached === true || fe.buffer.detached === void 0 && fe.buffer !== s.memory.buffer) && (fe = new DataView(s.memory.buffer)), fe;
  }
  let Ne = null;
  function bA() {
    return (Ne === null || Ne.byteLength === 0) && (Ne = new Float32Array(s.memory.buffer)), Ne;
  }
  let Je = null;
  function oA() {
    return (Je === null || Je.byteLength === 0) && (Je = new Float64Array(s.memory.buffer)), Je;
  }
  let Qe = null;
  function cA() {
    return (Qe === null || Qe.byteLength === 0) && (Qe = new Int16Array(s.memory.buffer)), Qe;
  }
  let Xe = null;
  function sA() {
    return (Xe === null || Xe.byteLength === 0) && (Xe = new Int32Array(s.memory.buffer)), Xe;
  }
  let Ye = null;
  function iA() {
    return (Ye === null || Ye.byteLength === 0) && (Ye = new Int8Array(s.memory.buffer)), Ye;
  }
  function S(_, e) {
    return pA(_ >>> 0, e);
  }
  let Ze = null;
  function fA() {
    return (Ze === null || Ze.byteLength === 0) && (Ze = new Uint16Array(s.memory.buffer)), Ze;
  }
  let e_ = null;
  function uA() {
    return (e_ === null || e_.byteLength === 0) && (e_ = new Uint32Array(s.memory.buffer)), e_;
  }
  let __ = null;
  function he() {
    return (__ === null || __.byteLength === 0) && (__ = new Uint8Array(s.memory.buffer)), __;
  }
  function l(_, e) {
    try {
      return _.apply(this, e);
    } catch (t) {
      const r = P(t);
      s.__wbindgen_exn_store(r);
    }
  }
  function v(_) {
    return _ == null;
  }
  function _e(_, e, t) {
    const r = {
      a: _,
      b: e,
      cnt: 1
    }, n = (...a) => {
      r.cnt++;
      const b = r.a;
      r.a = 0;
      try {
        return t(b, r.b, ...a);
      } finally {
        r.a = b, n._wbg_cb_unref();
      }
    };
    return n._wbg_cb_unref = () => {
      --r.cnt === 0 && (s.__wbindgen_destroy_closure(r.a, r.b), r.a = 0, At.unregister(r));
    }, At.register(n, r, r), n;
  }
  function h_(_, e) {
    const t = e(_.length * 1, 1) >>> 0;
    return he().set(_, t / 1), k = _.length, t;
  }
  function t_(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return oA().set(_, t / 8), k = _.length, t;
  }
  function dA(_, e) {
    const t = e(_.length * 4, 4) >>> 0;
    for (let r = 0; r < _.length; r++) {
      const n = P(_[r]);
      M().setUint32(t + 4 * r, n, true);
    }
    return k = _.length, t;
  }
  function O(_, e, t) {
    if (t === void 0) {
      const o = De.encode(_), c = e(o.length, 1) >>> 0;
      return he().subarray(c, c + o.length).set(o), k = o.length, c;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = he();
    let b = 0;
    for (; b < r; b++) {
      const o = _.charCodeAt(b);
      if (o > 127) break;
      a[n + b] = o;
    }
    if (b !== r) {
      b !== 0 && (_ = _.slice(b)), n = t(n, r, r = b + _.length * 3, 1) >>> 0;
      const o = he().subarray(n + b, n + r), c = De.encodeInto(_, o);
      b += c.written, n = t(n, r, b, 1) >>> 0;
    }
    return k = b, n;
  }
  function F(_) {
    const e = s.__wbindgen_externrefs.get(_);
    return s.__externref_table_dealloc(_), e;
  }
  let a_ = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  a_.decode();
  const gA = 2146435072;
  let y_ = 0;
  function pA(_, e) {
    return y_ += e, y_ >= gA && (a_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), a_.decode(), y_ = e), a_.decode(he().subarray(_, _ + e));
  }
  const De = new TextEncoder();
  "encodeInto" in De || (De.encodeInto = function(_, e) {
    const t = De.encode(_);
    return e.set(t), {
      read: _.length,
      written: t.length
    };
  });
  let k = 0, s;
  function wA(_) {
    s = _;
  }
  URL = globalThis.URL;
  const lA = await G_({
    "./proteus_bench_web_bg.js": {
      __wbg_call_5575218572ead796: Z3,
      __wbg_then_05edfc8a4fea5106: gv,
      __wbg_new_typed_00a409eb4ec4f2d9: m7,
      __wbg_next_0c4066e251d2eff9: y7,
      __wbg_done_b62d4a7d2286852a: C5,
      __wbg_value_49f783bb59765962: _S,
      __wbg_length_c6054974c0a6cdb9: A9,
      __wbg_get_unchecked_54a4374c38e08460: Q8,
      __wbg_instanceof_Map_afa18d5840c04c15: i9,
      __wbg_get_197a3fe98f169e38: K8,
      __wbg_new_227d7c05414eb861: u7,
      __wbg_stack_3b0d974bbf31e44f: T$,
      __wbg_error_a6fa202b58aa1cd3: e8,
      __wbg_push_f724b5db8acf89d2: L7,
      __wbg_proteusapp_new: C7,
      __wbg_set_dc601f4a69da0bc2: Yh,
      __wbg_call_8e98ed2f3c86c4b5: em,
      __wbg_call_0e855b388e315e17: Y3,
      __wbg_get_with_ref_key_6412cf3094599694: X8,
      __wbg_set_6be42768c690e380: mh,
      __wbg_String_8564e559799eccda: H6,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: c9,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: Y9,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: Z9,
      __wbg_maxTextureDimension3D_06ee54121b37d431: e7,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: X9,
      __wbg_maxBindGroups_14611ac9ed1c6b56: k9,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: M9,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: H9,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: U9,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: j9,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: K9,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: J9,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: Q9,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: t7,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: _7,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: N9,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: a7,
      __wbg_maxBufferSize_f7ce3e1856349d2f: R9,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: r7,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: n7,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: q9,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: c7,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: o7,
      __wbg_maxColorAttachments_fd9187f9f786da18: V9,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: C9,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: W9,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: L9,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: E9,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: G9,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: O9,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: z9,
      __wbg_description_18d0a6d4077fec8e: D5,
      __wbg_set_dst_factor_1ed75271a89a711e: py,
      __wbg_set_operation_b5862f5a1a143b30: mx,
      __wbg_set_src_factor_1c4f755f8676df1b: Ex,
      __wbg_set_texture_16d2be474ce6ad0c: Yx,
      __wbg_set_mip_level_246db61be15bdd69: ox,
      __wbg_set_x_56f0c2c08a62725c: x$,
      __wbg_set_y_04fb8ce84735b4e1: $$,
      __wbg_set_z_a51316db27a4941e: v$,
      __wbg_set_origin_9b3b0fbe0a5dc469: hx,
      __wbg_set_aspect_77332ac136ee94eb: Fh,
      __wbg_Window_a07901001eb4269f: q6,
      __wbg_gpu_a7c12045c25d009a: Y8,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: j6,
      __wbg_set_a_5f6e488475272136: hh,
      __wbg_set_b_688365d692bba214: kh,
      __wbg_set_g_d4d1d77cf8fdd362: ky,
      __wbg_set_r_527e5a41c4b1a846: Sx,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: o9,
      __wbg_queue_65d985f3e6d786a6: U7,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: xx,
      __wbg_requestAdapter_9ff5c9d1ff271165: Y7,
      __wbg_set_required_limits_3b031f66f838f4e3: Ix,
      __wbg_set_required_features_54918de8185c5fab: Ax,
      __wbg_set_label_bae57fb9f24fde5c: Uy,
      __wbg_requestDevice_c1c34f88a477e509: _h,
      __wbg_limits_50a8c5e629dbfe40: D9,
      __wbg_info_22dcf1fd1b12bc7d: n9,
      __wbg_set_size_41cd9255ca1e4242: Vx,
      __wbg_set_usage_908213a4d4bb8bde: o$,
      __wbg_set_mapped_at_creation_48de4735fab51e78: tx,
      __wbg_set_label_cd567b7b35838e4c: jy,
      __wbg_createBuffer_2f08c0205e04efca: Pm,
      __wbg_set_address_mode_u_a37cf1035585c638: xh,
      __wbg_set_address_mode_v_8ac049e029caef76: $h,
      __wbg_set_address_mode_w_eb9260ee11729e92: vh,
      __wbg_set_compare_42211fbf15e3b850: Jh,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: Zy,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: ex,
      __wbg_set_mag_filter_69d846b974d4bcc0: _x,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: bx,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: ix,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: nx,
      __wbg_set_label_dcd98efbb9370da8: Ny,
      __wbg_createSampler_248bd67c920af37d: Um,
      __wbg_set_width_1a5e2e86fa5bdcd8: m$,
      __wbg_set_height_e8b5483b8c117d5e: Cy,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: by,
      __wbg_set_format_e9d4b1475bb3bd3b: Ty,
      __wbg_set_size_a61ff22205255d61: Lx,
      __wbg_set_usage_7fa9cd18d1104aca: b$,
      __wbg_set_label_0c1bd0e976cf0a9a: Ey,
      __wbg_set_dimension_36e13ccecae5af4b: gy,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: sx,
      __wbg_set_sample_count_865e1d19b84e27e6: Bx,
      __wbg_set_view_formats_bab284fc81b40e70: g$,
      __wbg_createTexture_9e76b80a2dc0d12e: Qm,
      __wbg_set_entries_fc76ca4d7da6a709: my,
      __wbg_set_layout_eeef59714f5bf48b: Xy,
      __wbg_set_label_f92ae11c77d74198: Jy,
      __wbg_createBindGroup_2320df4db188406c: Fm,
      __wbg_set_code_56e2d45ec1ff6c2d: qh,
      __wbg_set_label_be45aed56e4b9fee: Hy,
      __wbg_createShaderModule_53701de4fb271c90: qm,
      __wbg_set_label_d1c24b5a7a3ac31d: Ky,
      __wbg_createCommandEncoder_cd88faca35d9ed68: Mm,
      __wbg_set_bind_group_layouts_5325d038771af328: Vh,
      __wbg_set_label_2f592bd1be3db6b3: Wy,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: Vm,
      __wbg_set_module_14e471fdd94c582d: ux,
      __wbg_set_entry_point_8db3b6d103e3b865: yy,
      __wbg_set_buffers_85a7238f4ef28ab4: zh,
      __wbg_set_layout_7c5ba5bdcde8a0f0: Qy,
      __wbg_set_vertex_a4951dd9a7a4ed54: s$,
      __wbg_set_label_c47c451211e2f6d2: qy,
      __wbg_set_format_f9341112e43ea182: Fy,
      __wbg_set_depth_compare_30e9ea552da12fe2: ry,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: fy,
      __wbg_set_depth_bias_428c9340b0fd937b: Zh,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: ey,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: _y,
      __wbg_set_compare_1509dc1a5420943f: Nh,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: ny,
      __wbg_set_fail_op_77ab26c98f847b65: $y,
      __wbg_set_pass_op_e9470d1262fb8a8b: yx,
      __wbg_set_stencil_back_6ef4683123b19b25: Gx,
      __wbg_set_stencil_front_aeb8580a97e5424b: Wx,
      __wbg_set_stencil_read_mask_2954f260d47349ea: Ux,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: jx,
      __wbg_set_depth_stencil_1bd50dbc450c8650: cy,
      __wbg_set_module_08ad08e736d8edbf: fx,
      __wbg_set_targets_6b0b3bdd87f35668: Xx,
      __wbg_set_entry_point_6fec5723cc790927: hy,
      __wbg_set_fragment_1a595620425637e1: By,
      __wbg_set_count_26a934d1cd07d080: Qh,
      __wbg_set_mask_0c49a66362fc0079: rx,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: Ih,
      __wbg_set_multisample_85f073947b782d07: dx,
      __wbg_set_cull_mode_9d466c1ab414cac8: Xh,
      __wbg_set_front_face_50cdf4eb61504a46: Py,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: Qx,
      __wbg_set_topology_beefb3aca0612b00: _$,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: n$,
      __wbg_set_primitive_369241acd17871f1: $x,
      __wbg_createRenderPipeline_f48187ba9f7701e8: Om,
      __wbg_set_entries_3017e6132f938c6e: ly,
      __wbg_set_label_1175a3329a06e52b: Gy,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: Tm,
      __wbg_limits_1c25cb4f379a4418: I9,
      __wbg_set_color_attachments_abe67f6631926e28: jh,
      __wbg_set_label_8fd860a36d2c7b74: zy,
      __wbg_set_view_dbd0294573f64d05: f$,
      __wbg_set_depth_clear_value_442bf492734f63b6: ty,
      __wbg_set_depth_load_op_34d430b74bb36d91: ay,
      __wbg_set_depth_store_op_0ea0a215313dbda7: iy,
      __wbg_set_depth_read_only_138a11b10c731094: oy,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: Ox,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: zx,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: qx,
      __wbg_set_stencil_read_only_fb489d191b6d969b: Hx,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: sy,
      __wbg_set_query_set_18679a8580267d5a: vx,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: Ch,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: wy,
      __wbg_set_timestamp_writes_c552d52fbb417005: e$,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: h3,
      __wbg_copyTextureToTexture_1be188df1e535c0a: Dm,
      __wbg_label_47480289cc2bce71: v9,
      __wbg_set_label_2d2227f4d5991e50: Oy,
      __wbg_finish_cfaeede3baf55be1: a8,
      __wbg_finish_087cb89c65c06eb1: n8,
      __wbg_drawIndexed_68637ebab6dd8d6e: H5,
      __wbg_setPipeline_bab24dbce96903b9: uh,
      __wbg_setViewport_f9d423db4f4b4b58: ph,
      __wbg_setBindGroup_4ba56e1e0d26f244: ch,
      __wbg_setBindGroup_6124849cc8547086: sh,
      __wbg_setIndexBuffer_17431786d06c1b7c: ih,
      __wbg_setIndexBuffer_a16ed5b869c87507: fh,
      __wbg_setVertexBuffer_b508baf8d0ffe331: gh,
      __wbg_setVertexBuffer_91c4b602d0289943: dh,
      __wbg_end_414453a89205612c: Q5,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: P8,
      __wbg_getCurrentTexture_51975ae7185fd15f: v8,
      __wbg_set_device_0d774b66e7288f72: uy,
      __wbg_set_format_d347899cd860709c: Dy,
      __wbg_set_usage_ae014e77ff77ce06: c$,
      __wbg_set_alpha_mode_92402195b3ae1ee7: Ah,
      __wbg_set_view_formats_fe531a043efb71fa: p$,
      __wbg_configure_3d64c677c7d68a15: xm,
      __wbg_writeBuffer_b4bdd36178348ca5: uS,
      __wbg_set_bytes_per_row_91681ca78d744888: Uh,
      __wbg_set_rows_per_image_d198b7e73a38978b: Fx,
      __wbg_set_offset_a097a8050a3a9a33: lx,
      __wbg_writeTexture_b45b69132e46a227: dS,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: T7,
      __wbg_submit_1290d44bb76ecef4: U$,
      __wbg_getMappedRange_5ed22727c9679168: D8,
      __wbg_unmap_8f06698a75b8331a: Yv,
      __wbg_destroy_b5b39f25f0799295: T5,
      __wbg_mapAsync_bb0029907dd91181: P9,
      __wbg_set_dimension_174ad7e2fb67fb4e: dy,
      __wbg_set_format_90860b0321868db4: Ay,
      __wbg_set_aspect_a823a14d00d42d37: Bh,
      __wbg_set_base_array_layer_cc6c68d233489c4b: Mh,
      __wbg_set_array_layer_count_daec613068108a9d: Dh,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: Rh,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: cx,
      __wbg_set_label_03d2396d4655a3e1: Ly,
      __wbg_set_usage_7f0dda8309469b1c: a$,
      __wbg_createView_cc96b5bdd3d5bf5e: Zm,
      __wbg_set_format_abf7a1bc5425c56a: Iy,
      __wbg_set_alpha_aa2e606e9e647b21: Sh,
      __wbg_set_color_bc393d7efc3c8594: Kh,
      __wbg_set_blend_8d6e9c08b5702a09: Gh,
      __wbg_set_write_mask_144b25e2bd909124: y$,
      __wbg_set_load_op_56844f51434037bf: Yy,
      __wbg_set_store_op_caeede4654b3d847: Jx,
      __wbg_set_view_bdeab150b5f0768c: i$,
      __wbg_set_clear_value_642701f928a5ccb3: Hh,
      __wbg_set_resolve_target_fe76b3f99cf72078: Dx,
      __wbg_set_buffer_55f096330c8912b4: Oh,
      __wbg_set_offset_73156b0e0b41d79a: px,
      __wbg_set_size_1e6281b07cd39177: Cx,
      __wbg_set_binding_f3c188a8cd21455b: Eh,
      __wbg_set_resource_fe385d2e3dadaf63: Tx,
      __wbg_set_format_6606f5c1fba6f459: Sy,
      __wbg_set_offset_8d9d9afffa18b591: wx,
      __wbg_set_shader_location_0ff30a733291a396: Mx,
      __wbg_set_array_stride_c2c009eabc18b5f6: Th,
      __wbg_set_attributes_05f9117fd32ca606: Ph,
      __wbg_set_step_mode_a35aef328761c452: Kx,
      __wbg_set_binding_b6b0fe5c281b8c69: Lh,
      __wbg_set_visibility_1bca121a89accba5: w$,
      __wbg_set_type_c1eebc19f8a6aeb9: r$,
      __wbg_set_sampler_8c5d7fb1b02058c6: kx,
      __wbg_set_multisampled_40505c1381e1c32c: gx,
      __wbg_set_external_texture_825fe2bc7a0c0603: xy,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: My,
      __wbg_set_min_binding_size_689661b9ed25e083: ax,
      __wbg_set_type_38961e08504ca674: t$,
      __wbg_set_buffer_e89095a9f0cafad3: Wh,
      __wbg_set_sample_type_7088b1efddce6a69: Px,
      __wbg_set_view_dimension_3ed01b237e85826f: d$,
      __wbg_set_texture_e25a73da75cf5808: Zx,
      __wbg_set_format_1786adb7bc74c7c9: vy,
      __wbg_set_access_091f317905cd76a5: yh,
      __wbg_set_view_dimension_263387976511ebc9: u$,
      __wbg_set_storage_texture_ab9eed9786337ef0: Nx,
      __wbg_requestAdapter_c46930b8bc33722d: Z7,
      __wbg_includes_83dff8d05da243c5: r9,
      __wbg_clearBufferuiv_1d2d93401c0904a3: rm,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: lm,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: hm,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: ym,
      __wbg_copyBufferSubData_a944f33b601b822d: vm,
      __wbg_clientWaitSync_7580165bd2eff461: im,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: mm,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: Im,
      __wbg_createQuery_f013132b870a71ef: Gm,
      __wbg_createSampler_9fe50152a2524319: Hm,
      __wbg_createVertexArray_8685feb21901c932: Ym,
      __wbg_deleteQuery_ef51ea0a52420103: i5,
      __wbg_deleteSampler_5c045e0cc55813d4: d5,
      __wbg_getIndexedParameter_2b18df6fca85f751: I8,
      __wbg_getQueryParameter_0599e85ddb81220b: V8,
      __wbg_getSyncParameter_9a2bda340ebe166f: U8,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: H8,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: w9,
      __wbg_deleteSync_37ca83c429c43d8a: w5,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: y5,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: L5,
      __wbg_drawBuffers_558d96e52e754731: W5,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: U5,
      __wbg_endQuery_161170c5280a8293: J5,
      __wbg_fenceSync_56efc7cc79111e54: _8,
      __wbg_framebufferTextureLayer_2312acdc74f97676: d8,
      __wbg_getBufferSubData_92680d3a2f7be029: m8,
      __wbg_readBuffer_361ec5474f3aae49: H7,
      __wbg_readPixels_5840000f3e22f3ce: j7,
      __wbg_readPixels_5bf204799ed2272f: K7,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: N7,
      __wbg_texImage3D_8647ef58aef5b912: N$,
      __wbg_texStorage2D_ed5df596c5f1e3af: X$,
      __wbg_texStorage3D_160b0197bc190f04: Y$,
      __wbg_texSubImage2D_f03448e182b0820d: bv,
      __wbg_texSubImage2D_d14d9c0a1f627c31: av,
      __wbg_texSubImage2D_89866a04ecd0a76b: tv,
      __wbg_texSubImage2D_5c630043f1c56716: _v,
      __wbg_samplerParameterf_3157ba41c0f4d97a: rh,
      __wbg_samplerParameteri_f85a29156e790189: nh,
      __wbg_texImage2D_0e0f37b9fb297d01: H$,
      __wbg_texImage2D_0e537dc331652de3: q$,
      __wbg_texImage3D_30dbf7234481b8f5: K$,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: ev,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: rv,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: nv,
      __wbg_texSubImage3D_933e4cd41cc5376d: fv,
      __wbg_texSubImage3D_c3538b28040daac9: dv,
      __wbg_uniform1ui_36c94692177ebf76: xv,
      __wbg_uniform2fv_17592f4dad9798fb: $v,
      __wbg_uniform2iv_d5d29ebbc466977d: Av,
      __wbg_texSubImage3D_0fdbd843482bb916: cv,
      __wbg_texSubImage3D_09a97a968b93253d: ov,
      __wbg_texSubImage3D_355efde0dc047913: sv,
      __wbg_texSubImage3D_bd32c8e29e470904: uv,
      __wbg_texSubImage3D_5a238709d114b609: iv,
      __wbg_uniform2uiv_418ba3bf6a230dd5: Iv,
      __wbg_uniform4fv_9e670a001c77dca0: Cv,
      __wbg_uniform4iv_1d57c6b8e5c0e447: Vv,
      __wbg_uniform3fv_dbe44b778e6b89e8: Tv,
      __wbg_uniform3iv_d75d3a5f86d54be4: Bv,
      __wbg_uniform3uiv_71c1efc24a662de9: Pv,
      __wbg_uniform4uiv_c5d45f5dbdae727a: Ev,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: Hv,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: jv,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: Kv,
      __wbg_uniformBlockBinding_829a71912ad79a04: Gv,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: Ov,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: zv,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: Uv,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: Nv,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: nS,
      __wbg_activeTexture_525ee3068cb9e8d5: u3,
      __wbg_attachShader_3477e67517b09b6b: w3,
      __wbg_bindAttribLocation_79b5d26727094518: y3,
      __wbg_bindBuffer_d3111de6861cb875: v3,
      __wbg_bindFramebuffer_63e837a5dc0accfb: I3,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: D3,
      __wbg_bindTexture_7ab28ff4ff3dc506: B3,
      __wbg_blendColor_15f26633b646e542: R3,
      __wbg_blendEquation_7dadb4db540a42da: E3,
      __wbg_blendEquationSeparate_8240ddfa32266109: V3,
      __wbg_blendFunc_b15af02643e188f1: U3,
      __wbg_blendFuncSeparate_456410f9919bed39: W3,
      __wbg_clear_dadcb3e2929388b0: cm,
      __wbg_clearDepth_05c17028494ee4dd: nm,
      __wbg_clearStencil_917833d1e2ac56e4: om,
      __wbg_colorMask_f111e3e5796458f4: dm,
      __wbg_compileShader_f5625b583b2c9fd6: gm,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: Qv,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: Xv,
      __wbg_vertexAttribDivisor_f17a8585267be92f: rS,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: Sm,
      __wbg_createBuffer_9f602b2dbcbf409c: km,
      __wbg_createFramebuffer_4a250944a4542bbc: Rm,
      __wbg_createProgram_4c8164d471c10346: Lm,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: zm,
      __wbg_createShader_9c5cd42709d915ff: Km,
      __wbg_createTexture_3eed23cb87dd35fc: Nm,
      __wbg_cullFace_94f24b4fd5e9038b: t5,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: n5,
      __wbg_getExtension_11824edd67a143d8: A8,
      __wbg_getParameter_7f7f23cae98f2c81: F8,
      __wbg_getProgramInfoLog_cd84be80942f345b: M8,
      __wbg_getProgramParameter_039391d5ba319f50: R8,
      __wbg_getShaderInfoLog_495bddda98172699: L8,
      __wbg_getShaderParameter_4eb65cfb174ceb22: G8,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: W8,
      __wbg_getUniformLocation_ab63f569a4e41744: j8,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: b5,
      __wbg_deleteProgram_eff668280dcb01ca: s5,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: u5,
      __wbg_deleteShader_3339454254c7147c: g5,
      __wbg_deleteTexture_c1c58550dc55af5c: m5,
      __wbg_depthFunc_31b183b5b8ee478e: x5,
      __wbg_depthMask_cab7f2ae7f0e559c: S5,
      __wbg_depthRange_797a71ba3b79267a: A5,
      __wbg_disable_cb1b3e6c1cee5202: M5,
      __wbg_disableVertexAttribArray_b395358ec5084c39: P5,
      __wbg_drawArrays_42dbb4b0349c8f34: G5,
      __wbg_enable_d1f42f78be33a553: N5,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: q5,
      __wbg_flush_7ae42f071230db6b: b8,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: i8,
      __wbg_framebufferTexture2D_367ab597a005e8d9: f8,
      __wbg_frontFace_9bdcf2a758e989e5: p8,
      __wbg_linkProgram_e23a348b0f6e0c4f: F9,
      __wbg_pixelStorei_a78a504be58d1d0a: P7,
      __wbg_polygonOffset_a4f07d97b9b0dced: M7,
      __wbg_renderbufferStorage_3049e13db5c4e60e: Q7,
      __wbg_scissor_6c024669fbf4fe72: ah,
      __wbg_vertexAttribPointer_4e5d289c5d224210: bS,
      __wbg_viewport_a0ca330f9b85397e: oS,
      __wbg_shaderSource_66dce75b25a1a407: A$,
      __wbg_stencilFuncSeparate_ec603976be9569a4: V$,
      __wbg_stencilMask_485dcb5965c79a71: G$,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: E$,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: W$,
      __wbg_texParameteri_c6efffcecb474d2f: J$,
      __wbg_uniform1f_3acd3f3eb50b5e11: lv,
      __wbg_uniform1i_e4f13604354c28ae: yv,
      __wbg_uniform4f_a5008773cfb47d1a: Mv,
      __wbg_useProgram_ab2ee2a13a1fd909: eS,
      __wbg_bufferSubData_2270f1b9db71e642: J3,
      __wbg_clearBufferfv_6b77b9402254a2bf: _m,
      __wbg_clearBufferiv_0f056544010eef3e: tm,
      __wbg_beginQuery_dad334d972fed3cc: m3,
      __wbg_bindBufferRange_16a9d90becc2a7d7: $3,
      __wbg_bindSampler_3c7002cb6d56ae8f: F3,
      __wbg_bindVertexArray_c391bd47303d75cd: M3,
      __wbg_blitFramebuffer_ea96ada8bba07582: H3,
      __wbg_bufferData_64e9905f2b3d3a6f: K3,
      __wbg_bufferData_99bbbc63f02251c4: N3,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: g9,
      __wbg_performance_4c23a97261596fec: F7,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: eh,
      __wbg_fetch_2d913f7108d17a24: t8,
      __wbg_fetch_d8c50740ea23b248: r8,
      __wbg_navigator_935098efd1dc7fe5: i7,
      __wbg_devicePixelRatio_8e5ca44720abafec: F5,
      __wbg_document_2634180a4c694068: R5,
      __wbg_instanceof_Window_0d356b88a2f77c42: p9,
      __wbg_hidden_cb32701ca3785fea: t9,
      __wbg_getElementById_c7aba6b93b34bf01: S8,
      __wbg_querySelector_1f3658f4b48e268b: O7,
      __wbg_querySelectorAll_ffda3c891a9eb29a: G7,
      __wbg_hasAttribute_73e1230c9c107e79: Z8,
      __wbg_setAttribute_8bccfbabf2a83682: oh,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: l8,
      __wbg_focus_c80921c19b28520b: c8,
      __wbg_uniform2iv_c5e863975dd780d8: Sv,
      __wbg_uniform3fv_7723e142be50856f: Dv,
      __wbg_uniform3iv_bea3976522e15d48: Fv,
      __wbg_uniform4fv_85ad5d23234895d2: Rv,
      __wbg_clear_ff8cfdf420f7dde6: sm,
      __wbg_clearDepth_ac6b54f112feeaf7: am,
      __wbg_clearStencil_56d6a6308294a749: bm,
      __wbg_colorMask_b0ab9d429a1efa0a: um,
      __wbg_compileShader_fcf3f3d2891f73f9: pm,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: Am,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: Bm,
      __wbg_createFramebuffer_ab73f30b5dc97415: Cm,
      __wbg_createProgram_f11c63f59f41b82a: Em,
      __wbg_createRenderbuffer_556000dbb01f5026: Wm,
      __wbg_createShader_27d9388313f3b14e: jm,
      __wbg_createTexture_8455c703424c567b: Jm,
      __wbg_cullFace_774780fb4177aab8: _5,
      __wbg_deleteBuffer_d758283bea6e0ccf: a5,
      __wbg_deleteFramebuffer_8953b325144192fe: o5,
      __wbg_deleteProgram_0135c6926e75af75: c5,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: f5,
      __wbg_deleteShader_79dbaaed69b7ca3b: p5,
      __wbg_deleteTexture_3acb672a45f9998a: l5,
      __wbg_depthFunc_eaca1bc79f7bf216: $5,
      __wbg_depthMask_3a9074b08d1f68e5: v5,
      __wbg_depthRange_c24a808b3496e0a9: I5,
      __wbg_uniform4iv_a9aaa92f2f458ec2: Lv,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: Wv,
      __wbg_uniformMatrix3fv_da8c388748c5739b: qv,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: Jv,
      __wbg_activeTexture_1d5359b20df41710: f3,
      __wbg_attachShader_683d1070365e7066: l3,
      __wbg_bindAttribLocation_d56d3c40331af7ed: x3,
      __wbg_bindBuffer_e95efaf0d4851845: S3,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: A3,
      __wbg_bindRenderbuffer_d608b211c51ed147: T3,
      __wbg_bindTexture_ffc56f1e5c5526c6: P3,
      __wbg_blendColor_a0ba1cdcecc3a34c: C3,
      __wbg_blendEquation_8bfa69f639ae92da: G3,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: L3,
      __wbg_blendFunc_713c504adab14f98: z3,
      __wbg_blendFuncSeparate_3eef699c291dbc87: O3,
      __wbg_disable_4dca6ee0ccc91e4a: k5,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: B5,
      __wbg_drawArrays_10e1254aa4524ae9: E5,
      __wbg_enable_c6e523307311617a: K5,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: j5,
      __wbg_flush_eb3fb8da2ec00d57: o8,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: s8,
      __wbg_linkProgram_6a2eee02a03b9b00: T9,
      __wbg_pixelStorei_55ad4c67b699537c: B7,
      __wbg_polygonOffset_06dc6468c12a57e1: k7,
      __wbg_renderbufferStorage_2918fb696fd45663: J7,
      __wbg_scissor_f9696c630e464977: bh,
      __wbg_shaderSource_628c37a476ae65f9: S$,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: C$,
      __wbg_stencilMask_f9fe198f7fd6fc9c: O$,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: L$,
      __wbg_stencilOpSeparate_6cf50803475d2640: z$,
      __wbg_texParameteri_fe6210a493d48a16: Q$,
      __wbg_framebufferTexture2D_3a558e14f56720d2: u8,
      __wbg_frontFace_c9bb1fa659ffd276: w8,
      __wbg_getParameter_91a344e1a84a4669: B8,
      __wbg_getProgramInfoLog_35410850de9ccefe: k8,
      __wbg_getProgramParameter_bbc667347ac2e882: C8,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: E8,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: O8,
      __wbg_getUniformLocation_340155dc706d3fea: q8,
      __wbg_uniform1f_d34e4b454f7c8e73: mv,
      __wbg_uniform1i_cd9a7f990128ea48: hv,
      __wbg_uniform4f_4410d2faaa7e5dda: kv,
      __wbg_useProgram_0e1cd86765304939: Zv,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: aS,
      __wbg_viewport_b5bd46a0d111c83c: cS,
      __wbg_texSubImage2D_1b2ff28f994c325e: Z$,
      __wbg_uniform2fv_39277cf2d3cb83c7: vv,
      __wbg_bufferData_5df9bdb32e189eee: j3,
      __wbg_bufferData_26132561617ce8fb: q3,
      __wbg_bufferSubData_44db8a3b4a70b57d: Q3,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: wm,
      __wbg_readPixels_05377f8b6fa1d8eb: q7,
      __wbg_texImage2D_7bc3001cb8602ed2: j$,
      __wbg_navigator_017bc45e84c473cc: s7,
      __wbg_log_d282446d03691e72: B9,
      __wbg_info_a392cd5b7536cfb5: a9,
      __wbg_warn_88c4a5bd9a322000: sS,
      __wbg_debug_7271beced8b71cd4: r5,
      __wbg_error_933f449d72fef598: Z5,
      __wbg_error_50f60c611a3dcf64: Y5,
      __wbg_addEventListener_ea90bc131475777e: d3,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: g8,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: z8,
      __wbg_set_width_f9e631f4ee129e5c: h$,
      __wbg_set_height_ef298446b359b0c5: Vy,
      __wbg_getContext_70c2d1bed75d4122: x8,
      __wbg_getContext_422b32d0ee4b8076: h8,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: k3,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: Xm,
      __wbg_now_0f628e0e435c541b: $7,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: h5,
      __wbg_offsetX_0214819d43aaf6d5: A7,
      __wbg_offsetY_f18f571e33b385ab: I7,
      __wbg_button_bb3285fcdf965178: X3,
      __wbg_set_signal_4a69430cb12800f3: Rx,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: V5,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: z5,
      __wbg_get_37b48b8fa52d1f2c: N8,
      __wbg_aborted_4d4114700dc4c251: i3,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: tS,
      __wbg_altKey_7412dd64f8c921c7: g3,
      __wbg_ctrlKey_00097886a21597a7: e5,
      __wbg_shiftKey_273ee8c901267b55: I$,
      __wbg_metaKey_1c2847b62ad062c1: b7,
      __wbg_repeat_46a5c90df9f6ef0b: X7,
      __wbg_isComposing_e3709163a95a2477: m9,
      __wbg_key_d6b3d2cce3d41872: $9,
      __wbg_code_87bb99fdec02d313: fm,
      __wbg_getModifierState_dae4d71262ea4ecb: T8,
      __wbg_signal_4d9d567be73ea52c: D$,
      __wbg_new_51233fa2a760b272: p7,
      __wbg_abort_6e6ea7d259504afc: s3,
      __wbg_preventDefault_c047d3e292b08cc4: R7,
      __wbg_new_1e52e3c919312525: f7,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: O5,
      __wbg_observe_592b94857eed8e27: v7,
      __wbg_width_08e66520b99071f4: iS,
      __wbg_height_e9afb506f31052a9: _9,
      __wbg_queryCounterEXT_ebb00bcc96221671: E7,
      __wbg_contentRect_0fb8c8900d689a0c: $m,
      __wbg_width_a86bcd32bd998060: fS,
      __wbg_height_cd732bbdc7b66e49: e9,
      __wbg_set_width_031bdecd763c5855: l$,
      __wbg_set_height_ad5056ea051acd78: Ry,
      __wbg_getContext_486aab500e1c34c9: y8,
      __wbg_getContext_9fd4db9b1cf155db: $8,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: s9,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: f9,
      __wbg_arrayBuffer_ff96d08b7b6be32e: p3,
      __wbg_status_0053aa6239760447: R$,
      __wbg_ok_c962da6f1a034d81: D7,
      __wbg_statusText_0f412961834ccfe9: M$,
      __wbg_instanceof_Response_79948c98d1d2ba75: u9,
      __wbg_resolve_d82363d90af6928a: th,
      __wbg_then_591b6b3a75ee817a: wv,
      __wbg_iterator_cc47ba25a2be735a: x9,
      __wbg_get_9a29be2cb383ed9a: J8,
      __wbg_next_402fa10b59ab20c3: x7,
      __wbg_new_2e117a478906f062: d7,
      __wbg_new_36e147a8ced3c6e0: g7,
      __wbg_of_62183ea089c00bfa: S7,
      __wbg_isArray_145a34fd0a38d37b: l9,
      __wbg_new_e66a4b7758dd2e5c: l7,
      __wbg_isSafeInteger_a3389a198582f5f6: h9,
      __wbg_is_de5b366c746e004c: y9,
      __wbg_entries_c261c3fa1f281256: X5,
      __wbg_then_2a84678a50976959: pv,
      __wbg_length_589238bdcf171f0e: S9,
      __wbg_prototypesetcall_d721637c7ca66eb8: V7,
      __wbg_set_272b80acaf9a75e8: wh,
      __wbg_new_81880fb5002cb255: w7,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: h7,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: F$,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: P$,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: B$,
      __wbg_static_accessor_WINDOW_168f178805d978fe: k$,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: b9,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: d9,
      __wbg_queueMicrotask_311744e534a929a3: z7,
      __wbg_queueMicrotask_1c9b3800e321a967: W7,
      __wbg_set_4564f7dc44fcb0c9: lh,
      __wbg___wbindgen_number_get_1cc01dd708740256: a3,
      __wbg___wbindgen_in_4990f46af709e33c: Q6,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: o3,
      __wbg___wbindgen_is_null_6d937fbfb6478470: Z6,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: r3,
      __wbg_Number_c4bdf66bb78f7977: U6,
      __wbg_Error_fdd633d4bb5dd76a: z6,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: X6,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: e3,
      __wbg___wbindgen_is_string_1fca8072260dd261: _3,
      __wbg___wbindgen_string_get_71bb4348194e31f0: b3,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: N6,
      __wbg___wbindgen_is_function_acc5528be2b923f2: Y6,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: t3,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: n3,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: K6,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: c3,
      __wbg___wbindgen_debug_string_8a447059637473e2: J6,
      __wbindgen_init_externref_table: MS,
      __wbindgen_cast_0000000000000001: gS,
      __wbindgen_cast_0000000000000002: pS,
      __wbindgen_cast_0000000000000003: wS,
      __wbindgen_cast_0000000000000004: lS,
      __wbindgen_cast_0000000000000005: mS,
      __wbindgen_cast_0000000000000006: hS,
      __wbindgen_cast_0000000000000007: yS,
      __wbindgen_cast_0000000000000008: xS,
      __wbindgen_cast_0000000000000009: $S,
      __wbindgen_cast_000000000000000a: vS,
      __wbindgen_cast_000000000000000b: SS,
      __wbindgen_cast_000000000000000c: AS,
      __wbindgen_cast_000000000000000d: IS,
      __wbindgen_cast_000000000000000e: DS,
      __wbindgen_cast_000000000000000f: TS,
      __wbindgen_cast_0000000000000010: FS,
      __wbindgen_cast_0000000000000011: BS,
      __wbindgen_cast_0000000000000012: PS,
      __wbindgen_cast_0000000000000013: kS
    }
  }, V6), { memory: mA, clear: hA, on_frame: yA, show: xA, start: $A, stop_frames: vA, mount: SA, __wbg_proteusapp_free: AA, proteusapp_addChild: IA, proteusapp_animateTo: DA, proteusapp_bakeTexture: TA, proteusapp_bakedImageSize: FA, proteusapp_bakedTextSize: BA, proteusapp_bindKey: PA, proteusapp_channelDestroy: kA, proteusapp_channelSet: MA, proteusapp_clearFocus: RA, proteusapp_clearGlyphCache: CA, proteusapp_component: VA, proteusapp_copyBakedImageFrom: LA, proteusapp_createVideo: EA, proteusapp_cropImage: GA, proteusapp_declareGeometry: OA, proteusapp_declaredGeometry: WA, proteusapp_destroy: zA, proteusapp_devices: UA, proteusapp_focus: HA, proteusapp_focused: qA, proteusapp_freeResources: jA, proteusapp_get: KA, proteusapp_hideVideo: NA, proteusapp_inputDevices: JA, proteusapp_inputMode: QA, proteusapp_isFocused: XA, proteusapp_loadTexture: YA, proteusapp_mergeFrom: ZA, proteusapp_mergeFromWithBehavior: eI, proteusapp_new: _I, proteusapp_onAppKey: tI, proteusapp_onBlur: rI, proteusapp_onClick: nI, proteusapp_onDrag: aI, proteusapp_onDropped: bI, proteusapp_onFocus: oI, proteusapp_onFocusLost: cI, proteusapp_onHoverEnter: sI, proteusapp_onHoverExit: iI, proteusapp_onKey: fI, proteusapp_onPress: uI, proteusapp_onRelease: dI, proteusapp_onTransitionComplete: gI, proteusapp_pointerLeft: pI, proteusapp_pointerMoved: wI, proteusapp_pointerPressed: lI, proteusapp_pointerReleased: mI, proteusapp_releaseVideo: hI, proteusapp_removeChild: yI, proteusapp_resetKeyMap: xI, proteusapp_setDeclaredGeometry: $I, proteusapp_setDefaultFocus: vI, proteusapp_setDevices: SI, proteusapp_setDisabled: AI, proteusapp_setFocusGroup: II, proteusapp_setImage: DI, proteusapp_setInputDevices: TI, proteusapp_setInteractive: FI, proteusapp_setKeyRepeat: BI, proteusapp_setLongPressMs: PI, proteusapp_setNavigatingActions: kI, proteusapp_setNeighbour: MI, proteusapp_setOpacity: RI, proteusapp_setReadingDirection: CI, proteusapp_setStyleTransition: VI, proteusapp_setText: LI, proteusapp_setTexture: EI, proteusapp_setTransitionInteraction: GI, proteusapp_setVideoCrossfade: OI, proteusapp_setVisible: WI, proteusapp_showVideo: zI, proteusapp_splitTo: UI, proteusapp_splitToWithBehavior: HI, proteusapp_splitToWithStates: qI, proteusapp_texture: jI, proteusapp_textureState: KI, proteusapp_tick: NI, proteusapp_transitionChannel: JI, proteusapp_unbindKey: QI, proteusapp_uploadVideoFrame: XI, __wbg_handle_free: YI, __wbg_texturehandle_free: ZI, __wbg_transitionchannel_free: eD, __wbg_videohandle_free: _D, handle_fromId: tD, handle_id: rD, texturehandle_fromId: nD, texturehandle_id: aD, __abort_handler: bD, __instance_terminated: oD, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___f64______true_: cD, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_: sD, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined_______true_: iD, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_: fD, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true_: uD, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__4: dD, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__5: gD, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__6: pD, wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke_______true_: wD, __wbindgen_malloc: lD, __wbindgen_realloc: mD, __wbindgen_exn_store: hD, __externref_table_alloc: yD, __wbindgen_externrefs: xD, __wbindgen_free: $D, __wbindgen_destroy_closure: vD, __externref_table_dealloc: SD, __wbindgen_start: jt } = lA, AD = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: bD,
    __externref_table_alloc: yD,
    __externref_table_dealloc: SD,
    __instance_terminated: oD,
    __wbg_handle_free: YI,
    __wbg_proteusapp_free: AA,
    __wbg_texturehandle_free: ZI,
    __wbg_transitionchannel_free: eD,
    __wbg_videohandle_free: _D,
    __wbindgen_destroy_closure: vD,
    __wbindgen_exn_store: hD,
    __wbindgen_externrefs: xD,
    __wbindgen_free: $D,
    __wbindgen_malloc: lD,
    __wbindgen_realloc: mD,
    __wbindgen_start: jt,
    clear: hA,
    handle_fromId: tD,
    handle_id: rD,
    memory: mA,
    mount: SA,
    on_frame: yA,
    proteusapp_addChild: IA,
    proteusapp_animateTo: DA,
    proteusapp_bakeTexture: TA,
    proteusapp_bakedImageSize: FA,
    proteusapp_bakedTextSize: BA,
    proteusapp_bindKey: PA,
    proteusapp_channelDestroy: kA,
    proteusapp_channelSet: MA,
    proteusapp_clearFocus: RA,
    proteusapp_clearGlyphCache: CA,
    proteusapp_component: VA,
    proteusapp_copyBakedImageFrom: LA,
    proteusapp_createVideo: EA,
    proteusapp_cropImage: GA,
    proteusapp_declareGeometry: OA,
    proteusapp_declaredGeometry: WA,
    proteusapp_destroy: zA,
    proteusapp_devices: UA,
    proteusapp_focus: HA,
    proteusapp_focused: qA,
    proteusapp_freeResources: jA,
    proteusapp_get: KA,
    proteusapp_hideVideo: NA,
    proteusapp_inputDevices: JA,
    proteusapp_inputMode: QA,
    proteusapp_isFocused: XA,
    proteusapp_loadTexture: YA,
    proteusapp_mergeFrom: ZA,
    proteusapp_mergeFromWithBehavior: eI,
    proteusapp_new: _I,
    proteusapp_onAppKey: tI,
    proteusapp_onBlur: rI,
    proteusapp_onClick: nI,
    proteusapp_onDrag: aI,
    proteusapp_onDropped: bI,
    proteusapp_onFocus: oI,
    proteusapp_onFocusLost: cI,
    proteusapp_onHoverEnter: sI,
    proteusapp_onHoverExit: iI,
    proteusapp_onKey: fI,
    proteusapp_onPress: uI,
    proteusapp_onRelease: dI,
    proteusapp_onTransitionComplete: gI,
    proteusapp_pointerLeft: pI,
    proteusapp_pointerMoved: wI,
    proteusapp_pointerPressed: lI,
    proteusapp_pointerReleased: mI,
    proteusapp_releaseVideo: hI,
    proteusapp_removeChild: yI,
    proteusapp_resetKeyMap: xI,
    proteusapp_setDeclaredGeometry: $I,
    proteusapp_setDefaultFocus: vI,
    proteusapp_setDevices: SI,
    proteusapp_setDisabled: AI,
    proteusapp_setFocusGroup: II,
    proteusapp_setImage: DI,
    proteusapp_setInputDevices: TI,
    proteusapp_setInteractive: FI,
    proteusapp_setKeyRepeat: BI,
    proteusapp_setLongPressMs: PI,
    proteusapp_setNavigatingActions: kI,
    proteusapp_setNeighbour: MI,
    proteusapp_setOpacity: RI,
    proteusapp_setReadingDirection: CI,
    proteusapp_setStyleTransition: VI,
    proteusapp_setText: LI,
    proteusapp_setTexture: EI,
    proteusapp_setTransitionInteraction: GI,
    proteusapp_setVideoCrossfade: OI,
    proteusapp_setVisible: WI,
    proteusapp_showVideo: zI,
    proteusapp_splitTo: UI,
    proteusapp_splitToWithBehavior: HI,
    proteusapp_splitToWithStates: qI,
    proteusapp_texture: jI,
    proteusapp_textureState: KI,
    proteusapp_tick: NI,
    proteusapp_transitionChannel: JI,
    proteusapp_unbindKey: QI,
    proteusapp_uploadVideoFrame: XI,
    show: xA,
    start: $A,
    stop_frames: vA,
    texturehandle_fromId: nD,
    texturehandle_id: aD,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke_______true_: wD,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___f64______true_: cD,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true_: uD,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__4: dD,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__5: gD,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Array______true__6: pD,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined___js_sys_4ec3fbff06c80965___Function_fn_wasm_bindgen_60af5b0b3f4bd6bd___JsValue_____wasm_bindgen_60af5b0b3f4bd6bd___sys__Undefined_______true_: iD,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue______true_: fD,
    wasm_bindgen_60af5b0b3f4bd6bd___convert__closures_____invoke___wasm_bindgen_60af5b0b3f4bd6bd___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_60af5b0b3f4bd6bd___JsError___true_: sD
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  wA(AD);
  jt();
  const te = 1280, re = 800, j = {
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
    const { min: t, max: r } = j[_], n = new Be();
    return Array.from({
      length: e
    }, () => {
      const a = n.between(t, r), b = n.between(t, r);
      return {
        x: n.between(0, te),
        y: n.between(0, re),
        width: a,
        height: b,
        r: n.next(),
        g: n.next(),
        b: n.next()
      };
    });
  }
  const ID = `#version 300 es
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
}`, DD = `#version 300 es
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
}`, TD = `#version 300 es
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
  function Kt(_, e) {
    const t = (n, a) => {
      const b = _.createShader(n);
      if (_.shaderSource(b, a), _.compileShader(b), !_.getShaderParameter(b, _.COMPILE_STATUS)) throw new Error(_.getShaderInfoLog(b) ?? "shader failed to compile");
      return b;
    }, r = _.createProgram();
    if (_.attachShader(r, t(_.VERTEX_SHADER, e)), _.attachShader(r, t(_.FRAGMENT_SHADER, ID)), _.linkProgram(r), !_.getProgramParameter(r, _.LINK_STATUS)) throw new Error(_.getProgramInfoLog(r) ?? "program failed to link");
    return r;
  }
  function Nt(_) {
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
  function Jt(_) {
    _.viewport(0, 0, _.drawingBufferWidth, _.drawingBufferHeight), _.clearColor(0, 0, 0, 1), _.clear(_.COLOR_BUFFER_BIT), _.enable(_.BLEND), _.blendFunc(_.ONE, _.ONE_MINUS_SRC_ALPHA);
  }
  function FD(_) {
    return (e, t, r) => {
      const n = Kt(_, DD), a = Nt(_), b = _.createVertexArray();
      _.bindVertexArray(b);
      const o = _.getAttribLocation(n, "a_corner");
      _.enableVertexAttribArray(o), _.vertexAttribPointer(o, 2, _.FLOAT, false, 0, 0);
      const c = _.getUniformLocation(n, "u_rect"), f = _.getUniformLocation(n, "u_color");
      return {
        draw() {
          Jt(_), _.useProgram(n), _.bindVertexArray(b), _.uniform2f(_.getUniformLocation(n, "u_viewport"), te, re), _.uniform1f(_.getUniformLocation(n, "u_radius"), r), e.forEach((d, I) => {
            _.uniform4f(c, t[I * 2], t[I * 2 + 1], d.width, d.height), _.uniform3f(f, d.r, d.g, d.b), _.drawArrays(_.TRIANGLE_STRIP, 0, 4);
          });
        },
        dispose() {
          _.deleteProgram(n), _.deleteBuffer(a), _.deleteVertexArray(b);
        }
      };
    };
  }
  function BD(_) {
    return (e, t, r) => {
      const n = Kt(_, TD), a = Nt(_), b = _.createVertexArray();
      _.bindVertexArray(b);
      const o = _.getAttribLocation(n, "a_corner");
      _.enableVertexAttribArray(o), _.vertexAttribPointer(o, 2, _.FLOAT, false, 0, 0);
      const c = new Float32Array(e.length * 7), f = _.createBuffer();
      _.bindBuffer(_.ARRAY_BUFFER, f), _.bufferData(_.ARRAY_BUFFER, c.byteLength, _.DYNAMIC_DRAW);
      const d = _.getAttribLocation(n, "a_rect"), I = _.getAttribLocation(n, "a_color");
      return _.enableVertexAttribArray(d), _.vertexAttribPointer(d, 4, _.FLOAT, false, 28, 0), _.vertexAttribDivisor(d, 1), _.enableVertexAttribArray(I), _.vertexAttribPointer(I, 3, _.FLOAT, false, 28, 16), _.vertexAttribDivisor(I, 1), {
        draw() {
          e.forEach((N, f_) => {
            const ne = f_ * 7;
            c[ne] = t[f_ * 2], c[ne + 1] = t[f_ * 2 + 1], c[ne + 2] = N.width, c[ne + 3] = N.height, c[ne + 4] = N.r, c[ne + 5] = N.g, c[ne + 6] = N.b;
          }), Jt(_), _.useProgram(n), _.bindVertexArray(b), _.bindBuffer(_.ARRAY_BUFFER, f), _.bufferSubData(_.ARRAY_BUFFER, 0, c), _.uniform2f(_.getUniformLocation(n, "u_viewport"), te, re), _.uniform1f(_.getUniformLocation(n, "u_radius"), r), _.drawArraysInstanced(_.TRIANGLE_STRIP, 0, 4, e.length);
        },
        dispose() {
          _.deleteProgram(n), _.deleteBuffer(a), _.deleteBuffer(f), _.deleteVertexArray(b);
        }
      };
    };
  }
  function PD(_) {
    return (e, t, r) => {
      const n = e.map((a) => `rgb(${Math.round(a.r * 255)} ${Math.round(a.g * 255)} ${Math.round(a.b * 255)})`);
      return {
        draw() {
          _.fillStyle = "black", _.fillRect(0, 0, te, re), e.forEach((a, b) => {
            _.fillStyle = n[b], _.beginPath(), _.roundRect(t[b * 2] - a.width / 2, t[b * 2 + 1] - a.height / 2, a.width, a.height, r), _.fill();
          });
        },
        dispose() {
        }
      };
    };
  }
  const C_ = 500;
  function kD(_) {
    return _ < 0.5 ? 2 * _ * _ : 1 - (-2 * _ + 2) ** 2 / 2;
  }
  const MD = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
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
        for (let t = 0; t < this.to.length; t += 2) this.to[t] = this.random.between(0, te), this.to[t + 1] = this.random.between(0, re);
        return this.to;
      }
    }
    advance(e) {
      const t = kD(Math.min(1, (e - this.movedAt) / C_));
      for (let r = 0; r < this.current.length; r++) this.current[r] = this.from[r] + (this.to[r] - this.from[r]) * t;
    }
  }
  function RD(_, e, t) {
    const r = new nt(e), n = document.createDocumentFragment(), a = e.map((b, o) => {
      const c = document.createElement("div"), f = c.style;
      return f.position = "absolute", f.left = "0", f.top = "0", f.width = `${b.width}px`, f.height = `${b.height}px`, f.borderRadius = `${t}px`, f.background = `rgb(${Math.round(b.r * 255)} ${Math.round(b.g * 255)} ${Math.round(b.b * 255)})`, f.transform = It(r.current[o * 2], r.current[o * 2 + 1], b), f.transition = `transform ${C_}ms ${MD}`, n.append(c), c;
    });
    return _.append(n), {
      frame(b) {
        const o = r.retarget(b);
        o && a.forEach((c, f) => {
          c.style.transform = It(o[f * 2], o[f * 2 + 1], e[f]);
        });
      },
      dispose() {
        _.replaceChildren();
      }
    };
  }
  function It(_, e, t) {
    return `translate(${_ - t.width / 2}px, ${e - t.height / 2}px)`;
  }
  const CD = [
    100,
    1e3,
    5e3,
    1e4,
    25e3,
    5e4,
    1e5
  ], VD = 60, LD = 2e3, V_ = 1e5, Dt = 100, at = `proteus-bench:${location.pathname}`, ED = 300, GD = 15e3, b_ = document.getElementById("status"), Qt = document.getElementById("results"), ye = document.getElementById("run"), c_ = document.getElementById("reset"), xe = {
    proteus: document.getElementById("proteus"),
    proteusRust: document.getElementById("proteus-rust"),
    webgl: document.getElementById("webgl"),
    canvas2d: document.getElementById("canvas2d"),
    css: document.getElementById("css")
  }, Xt = new URLSearchParams(location.search), Te = ((_a2 = Xt.get("counts")) == null ? void 0 : _a2.split(",").map(Number).filter((_) => _ > 0)) ?? CD, bt = (((_b2 = Xt.get("scenes")) == null ? void 0 : _b2.split(",")) ?? [
    "small",
    "large",
    "moving"
  ]).filter((_) => _ in j);
  let Yt = "unknown";
  for (const _ of [
    "log",
    "info"
  ]) {
    const e = console[_].bind(console);
    console[_] = (...t) => {
      var _a3;
      const n = String(t[0] ?? "").replace(/%c/g, "").match(/proteus-host-web: adapter (.*)/);
      if (n) {
        const a = ((_a3 = n[1].match(/\((\w+)\)\s*$/)) == null ? void 0 : _a3[1]) ?? "", b = n[1].replace(/\(\w+\)\s*$/, "").trim();
        Yt = `${/WebGpu/i.test(a) ? "WebGPU" : /Gl/i.test(a) ? "WebGL2" : a}${b ? `, ${b}` : " (the browser doesn't name the GPU)"}`;
      }
      e(...t);
    };
  }
  function OD(_) {
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
      let r = 0, n = 0, a = 0, b = 0, o = false;
      const c = _((f) => {
        if (r += 1, r === 1 && (b = f), !o && (r >= VD || f - b > LD)) {
          o = true, a = f, n = f;
          return;
        }
        o && t.push(f - n), n = f, o && (t.length >= ED || f - a > GD) && (c(), e(OD(t)));
      });
    });
  }
  function ot(_) {
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
  const Zt = Math.max(4096, 2 ** Math.ceil(Math.log2(Math.max(...Te))));
  let er, L_;
  await k6("proteus", {
    setup(_) {
      er = _;
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
        maxInstances: Zt
      },
      frame: {
        skipIdleFrames: false
      }
    }
  });
  await O6("proteus-rust", Zt);
  async function WD(_, e) {
    G6(_, e);
    const t = await ke((r) => (E6(r), () => W6()));
    return L6(), t;
  }
  async function zD(_, e) {
    const t = er, r = rt(_, e), n = (c, f, d) => ({
      position: {
        x: c - te / 2,
        y: re / 2 - f,
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
      cornerRadius: j[_].radius
    }), a = r.map((c, f) => t.component({
      geometry: n(c.x, c.y, f)
    })), b = _ === "moving" ? new nt(r) : void 0, o = await ke((c) => (L_ = (f) => {
      const d = b == null ? void 0 : b.retarget(f);
      d && a.forEach((I, N) => I.animateTo(n(d[N * 2], d[N * 2 + 1], N), {
        duration: 0.5,
        easing: "easeInOutQuad"
      })), c(f);
    }, () => {
      L_ = void 0;
    }));
    for (const c of a) c.destroy();
    return o;
  }
  const Pe = window.devicePixelRatio;
  for (const _ of [
    xe.webgl,
    xe.canvas2d
  ]) _.width = te * Pe, _.height = re * Pe;
  const we = xe.webgl.getContext("webgl2", {
    antialias: false
  }), _r = xe.canvas2d.getContext("2d");
  _r.scale(Pe, Pe);
  async function ct(_, e, t) {
    const r = rt(e, t), n = new nt(r), a = _(r, n.current, j[e].radius), b = await ke(ot((o) => {
      e === "moving" && (n.retarget(o), n.advance(o)), a.draw();
    }));
    return a.dispose(), b;
  }
  async function UD(_) {
    const e = RD(xe.css, rt("moving", _), j.moving.radius), t = await ke(ot((r) => e.frame(r)));
    return e.dispose(), t;
  }
  function Tt(_) {
    for (const [e, t] of Object.entries(xe)) t.style.visibility = e === _ ? "visible" : "hidden";
  }
  const x_ = {
    title: "Proteus (TypeScript)",
    surface: "proteus",
    time: zD
  }, $_ = {
    title: "Proteus (Rust)",
    surface: "proteusRust",
    time: WD
  }, HD = {
    title: "CSS",
    surface: "css",
    time: (_, e) => UD(e)
  }, v_ = {
    title: "Canvas 2D",
    surface: "canvas2d",
    time: (_, e) => ct(PD(_r), _, e)
  }, S_ = {
    title: "Naive WebGL2",
    surface: "webgl",
    time: (_, e) => ct(FD(we), _, e)
  }, A_ = {
    title: "Batched WebGL2",
    surface: "webgl",
    time: (_, e) => ct(BD(we), _, e)
  }, tr = {
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
      HD,
      v_,
      S_,
      A_
    ]
  }, E_ = {
    small: 1 / 0,
    large: V_,
    moving: 1 / 0
  }, qD = {
    small: `Small components (${j.small.min}\u2013${j.small.max} px), still: the cost per component`,
    large: `Large components (${j.large.min}\u2013${j.large.max} px), still: filling pixels dominates`,
    moving: `Moving components (${j.moving.min}\u2013${j.moving.max} px): every one always moving`
  };
  function jD(_) {
    const e = we.getExtension("WEBGL_debug_renderer_info"), t = e ? we.getParameter(e.UNMASKED_RENDERER_WEBGL) : we.getParameter(we.RENDERER);
    return [
      `- Browser: ${navigator.userAgent}`,
      `- GPU: ${t}`,
      `- Proteus's adapter: ${Yt}`,
      `- Device pixel ratio: ${Pe}; canvas ${te} \xD7 ${re} CSS pixels`,
      `- Refresh rate: about ${(1e3 / _).toFixed(0)} Hz (a frame every ${_.toFixed(2)} ms)`
    ].join(`
`);
  }
  function KD() {
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
  function o_() {
    try {
      localStorage.setItem(at, JSON.stringify(V));
    } catch {
    }
  }
  const V = KD();
  if (V.running) {
    const [_, e, t] = V.running.split("|");
    V.cells[V.running] = "crashed | \u2014", V.dropped[`${_}|${t}`] = `crashed at ${e}`, V.running = void 0, o_();
  }
  const ND = (_) => `${_.median.toFixed(2)} | ${_.p99.toFixed(2)}`;
  function rr(_) {
    return Te.filter((e) => e <= E_[_]).flatMap((e) => tr[_].map((t) => [
      e,
      t
    ])).filter(([e, t]) => V.cells[`${_}|${e}|${t.title}`] === void 0);
  }
  async function JD() {
    ye.disabled = true, c_.disabled = true, V.refresh === void 0 && (Tt("webgl"), b_.textContent = "Measuring the refresh rate\u2026", V.refresh = (await ke(ot(() => {
    }))).median, o_());
    for (const _ of bt) for (const [e, t] of rr(_)) {
      const r = `${_}|${e}|${t.title}`;
      if (V.dropped[`${_}|${t.title}`]) {
        V.cells[r] = "skipped | \u2014";
        continue;
      }
      Tt(t.surface), b_.textContent = `${_} scene, ${e} components: ${t.title}\u2026`, V.running = r, o_();
      try {
        const a = await t.time(_, e);
        V.cells[r] = ND(a), a.median >= Dt && (V.dropped[`${_}|${t.title}`] = `slower than ${Dt} ms a frame at ${e}`);
      } catch (a) {
        console.error(a), V.cells[r] = "failed | \u2014", V.dropped[`${_}|${t.title}`] = `failed at ${e}: ${String(a)}`;
      }
      V.running = void 0, o_(), Qt.textContent = nr();
    }
    b_.textContent = "Done. Copy the results below.", ye.textContent = "Run", ye.disabled = false, c_.disabled = false;
  }
  function nr() {
    const _ = [
      jD(V.refresh ?? 0)
    ];
    for (const e of bt) {
      const t = tr[e].map((a) => a.title), r = Te.filter((a) => a <= E_[e]).map((a) => t.map((b) => V.cells[`${e}|${a}|${b}`])).map((a, b) => ({
        count: Te.filter((o) => o <= E_[e])[b],
        cells: a
      })).filter(({ cells: a }) => a.some((b) => b !== void 0));
      if (r.length === 0) continue;
      _.push("", `### ${qD[e]}`, "", "Frame interval, median and p99, in milliseconds:", "", `| Components | ${t.map((a) => `${a} | p99`).join(" | ")} |`, `|---:|${t.map(() => "---:|---:").join("|")}|`, ...r.map(({ count: a, cells: b }) => `| ${a} | ${b.map((o) => o ?? "\u2026 | \u2026").join(" | ")} |`));
      const n = t.map((a) => [
        a,
        V.dropped[`${e}|${a}`]
      ]).filter(([, a]) => a).map(([a, b]) => `- ${a}: ${b}; skipped after that.`);
      n.length > 0 && _.push("", ...n), e === "large" && Te.some((a) => a > V_) && _.push("", `The large scene stops at ${V_}: past it, Safari's tab crashes.`);
    }
    return _.join(`
`);
  }
  ye.addEventListener("click", () => void JD());
  c_.addEventListener("click", () => {
    try {
      localStorage.removeItem(at);
    } catch {
    }
    location.reload();
  });
  const Me = Object.keys(V.cells).length > 0, st = bt.some((_) => rr(_).length > 0);
  Me && (Qt.textContent = nr());
  ye.textContent = Me && st ? "Resume" : "Run";
  b_.textContent = Me ? st ? "A run was under way, and is saved: Resume carries on from where it stopped." : "The last run is complete; its results are below. Start over to run again." : "Ready. Keep this tab in front while it runs: a hidden tab stops drawing.";
  ye.disabled = Me && !st;
  c_.disabled = !Me;
})();
