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
  const ar = "" + new URL("proteus_sdk_web_bg-CQ2QDVt-.wasm", import.meta.url).href, G_ = async (_ = {}, e) => {
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
      const a = u_(r, u.__wbindgen_malloc), o = L, c = u.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, o, n);
      return J.__wrap(c);
    }
    bakedImageSize(e) {
      return g(e, y), u.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return g(e, y), u.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bindKey(e, t) {
      const r = oe(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = L, a = u.proteusapp_bindKey(this.__wbg_ptr, e, r, n);
      if (a[1]) throw D(a[0]);
    }
    channelDestroy(e) {
      g(e, ue);
      var t = e.__destroy_into_raw();
      u.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      g(e, ue), g(t, y), g(r, y);
      const o = u.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (o[1]) throw D(o[0]);
    }
    clearFocus() {
      u.proteusapp_clearFocus(this.__wbg_ptr);
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
      const a = Le(t, u.__wbindgen_malloc), o = L, c = u.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw D(c[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      g(e, y);
      const o = Le(t, u.__wbindgen_malloc), c = L, b = u.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
      if (b[1]) throw D(b[0]);
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
      const t = so(e, u.__wbindgen_malloc), r = L;
      u.proteusapp_setNavigatingActions(this.__wbg_ptr, t, r);
    }
    setNeighbour(e, t, r) {
      g(e, y);
      const n = oe(t, u.__wbindgen_malloc, u.__wbindgen_realloc), a = L, o = u.proteusapp_setNeighbour(this.__wbg_ptr, e.__wbg_ptr, n, a, !z(r), z(r) ? 0 : r);
      if (o[1]) throw D(o[0]);
    }
    setOpacity(e, t) {
      g(e, y);
      const r = u.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setReadingDirection(e) {
      const t = oe(e, u.__wbindgen_malloc, u.__wbindgen_realloc), r = L, n = u.proteusapp_setReadingDirection(this.__wbg_ptr, t, r);
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
      const a = Le(t, u.__wbindgen_malloc), o = L, c = u.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw D(c[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      g(e, y);
      const o = Le(t, u.__wbindgen_malloc), c = L, b = u.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
      if (b[1]) throw D(b[0]);
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
      const a = u_(n, u.__wbindgen_malloc), o = L;
      return u.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, o) !== 0;
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
  function or(_, e) {
    return Error(q(_, e));
  }
  function cr(_) {
    return Number(_);
  }
  function br(_, e) {
    const t = String(e), r = oe(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = L;
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
    const t = F_(e), r = oe(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = L;
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
    var n = z(r) ? 0 : oe(r, u.__wbindgen_malloc, u.__wbindgen_realloc), a = L;
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
    const t = e.label, r = oe(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = L;
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
  function on(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function cn() {
    return H(function(_) {
      return _.next();
    }, arguments);
  }
  function bn(_) {
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
    return H(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, oo(r, n), a, o >>> 0);
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
  function vn(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
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
    _.dimension = ao[e];
  }
  function jn(_, e) {
    _.dimension = no[e];
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
  function oa(_, e) {
    _.loadOp = O_[e];
  }
  function ca(_, e) {
    _.mipLevel = e >>> 0;
  }
  function ba(_, e) {
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
    return H(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, z_(r, n), a, o);
    }, arguments);
  }
  function Na() {
    return H(function(_, e, t, r, n, a) {
      _.writeTexture(e, z_(t, r), n, a);
    }, arguments);
  }
  function Ja(_, e) {
    return Rt(_, e, to);
  }
  function Qa(_, e) {
    return Rt(_, e, ro);
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
  function eo(_) {
    return BigInt.asUintN(64, _);
  }
  function _o() {
    const _ = u.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function to(_, e, t) {
    u.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function ro(_, e, t) {
    const r = u.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
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
  ], no = [
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
  ], ao = [
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
      for (let o = 1; o < n; o++) a += ", " + F_(_[o]);
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
  function oo(_, e) {
    return _ = _ >>> 0, bo().subarray(_ / 4, _ / 4 + e);
  }
  function z_(_, e) {
    return _ = _ >>> 0, le().subarray(_ / 1, _ / 1 + e);
  }
  let se = null;
  function U() {
    return (se === null || se.buffer.detached === true || se.buffer.detached === void 0 && se.buffer !== u.memory.buffer) && (se = new DataView(u.memory.buffer)), se;
  }
  let Re = null;
  function co() {
    return (Re === null || Re.byteLength === 0) && (Re = new Float64Array(u.memory.buffer)), Re;
  }
  function q(_, e) {
    return fo(_ >>> 0, e);
  }
  let Ce = null;
  function bo() {
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
      const o = r.a;
      r.a = 0;
      try {
        return t(o, r.b, ...a);
      } finally {
        r.a = o, n._wbg_cb_unref();
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
    return co().set(_, t / 8), L = _.length, t;
  }
  function so(_, e) {
    const t = e(_.length * 4, 4) >>> 0;
    for (let r = 0; r < _.length; r++) {
      const n = $e(_[r]);
      U().setUint32(t + 4 * r, n, true);
    }
    return L = _.length, t;
  }
  function oe(_, e, t) {
    if (t === void 0) {
      const c = Ae.encode(_), b = e(c.length, 1) >>> 0;
      return le().subarray(b, b + c.length).set(c), L = c.length, b;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = le();
    let o = 0;
    for (; o < r; o++) {
      const c = _.charCodeAt(o);
      if (c > 127) break;
      a[n + o] = c;
    }
    if (o !== r) {
      o !== 0 && (_ = _.slice(o)), n = t(n, r, r = o + _.length * 3, 1) >>> 0;
      const c = le().subarray(n + o, n + r), b = Ae.encodeInto(_, c);
      o += b.written, n = t(n, r, o, 1) >>> 0;
    }
    return L = o, n;
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
  const io = 2146435072;
  let d_ = 0;
  function fo(_, e) {
    return d_ += e, d_ >= io && (r_ = new TextDecoder("utf-8", {
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
  function uo(_) {
    u = _;
  }
  URL = globalThis.URL;
  const go = await G_({
    "./proteus_sdk_web_bg.js": {
      __wbg_next_0c4066e251d2eff9: cn,
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
      __wbg_String_8564e559799eccda: br,
      __wbg_set_texture_16d2be474ce6ad0c: Ia,
      __wbg_set_mip_level_246db61be15bdd69: ca,
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
      __wbg_set_mip_level_count_72f8bc1f80f7539b: ba,
      __wbg_set_label_03d2396d4655a3e1: Zn,
      __wbg_set_usage_7f0dda8309469b1c: Ta,
      __wbg_createView_cc96b5bdd3d5bf5e: Mr,
      __wbg_then_05edfc8a4fea5106: za,
      __wbg_set_load_op_56844f51434037bf: oa,
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
      __wbg_next_402fa10b59ab20c3: bn,
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
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: on,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: La,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: Ga,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Ea,
      __wbg_static_accessor_WINDOW_168f178805d978fe: Oa,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: jr,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: Nr,
      __wbg_queueMicrotask_1c9b3800e321a967: dn,
      __wbg_queueMicrotask_311744e534a929a3: gn,
      __wbg___wbindgen_number_get_1cc01dd708740256: xr,
      __wbg___wbindgen_in_4990f46af709e33c: ur,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: vr,
      __wbg___wbindgen_is_null_6d937fbfb6478470: pr,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: hr,
      __wbg_Number_c4bdf66bb78f7977: cr,
      __wbg_Error_fdd633d4bb5dd76a: or,
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
      __wbindgen_init_externref_table: _o,
      __wbindgen_cast_0000000000000001: Ja,
      __wbindgen_cast_0000000000000002: Qa,
      __wbindgen_cast_0000000000000003: Xa,
      __wbindgen_cast_0000000000000004: Ya,
      __wbindgen_cast_0000000000000005: Za,
      __wbindgen_cast_0000000000000006: eo
    }
  }, ar), { memory: po, __wbg_proteusapp_free: wo, proteusapp_addChild: lo, proteusapp_animateTo: mo, proteusapp_bakeTexture: ho, proteusapp_bakedImageSize: yo, proteusapp_bakedTextSize: xo, proteusapp_bindKey: $o, proteusapp_channelDestroy: vo, proteusapp_channelSet: So, proteusapp_clearFocus: Ao, proteusapp_component: Io, proteusapp_copyBakedImageFrom: Do, proteusapp_createVideo: To, proteusapp_cropImage: Fo, proteusapp_declareGeometry: Bo, proteusapp_declaredGeometry: Po, proteusapp_destroy: ko, proteusapp_devices: Mo, proteusapp_focus: Ro, proteusapp_focused: Co, proteusapp_freeResources: Vo, proteusapp_get: Lo, proteusapp_hideVideo: Eo, proteusapp_inputDevices: Go, proteusapp_inputMode: Oo, proteusapp_isFocused: Wo, proteusapp_loadTexture: zo, proteusapp_mergeFrom: Uo, proteusapp_mergeFromWithBehavior: Ho, proteusapp_new: qo, proteusapp_onAppKey: jo, proteusapp_onBlur: Ko, proteusapp_onClick: No, proteusapp_onDrag: Jo, proteusapp_onDropped: Qo, proteusapp_onFocus: Xo, proteusapp_onFocusLost: Yo, proteusapp_onHoverEnter: Zo, proteusapp_onHoverExit: ec, proteusapp_onKey: _c, proteusapp_onPress: tc, proteusapp_onRelease: rc, proteusapp_onTransitionComplete: nc, proteusapp_pointerLeft: ac, proteusapp_pointerMoved: oc, proteusapp_pointerPressed: cc, proteusapp_pointerReleased: bc, proteusapp_releaseVideo: sc, proteusapp_removeChild: ic, proteusapp_resetKeyMap: fc, proteusapp_setDeclaredGeometry: uc, proteusapp_setDefaultFocus: dc, proteusapp_setDevices: gc, proteusapp_setDisabled: pc, proteusapp_setFocusGroup: wc, proteusapp_setImage: lc, proteusapp_setInputDevices: mc, proteusapp_setInteractive: hc, proteusapp_setKeyRepeat: yc, proteusapp_setLongPressMs: xc, proteusapp_setNavigatingActions: $c, proteusapp_setNeighbour: vc, proteusapp_setOpacity: Sc, proteusapp_setReadingDirection: Ac, proteusapp_setStyleTransition: Ic, proteusapp_setText: Dc, proteusapp_setTexture: Tc, proteusapp_setTransitionInteraction: Fc, proteusapp_setVideoCrossfade: Bc, proteusapp_setVisible: Pc, proteusapp_showVideo: kc, proteusapp_splitTo: Mc, proteusapp_splitToWithBehavior: Rc, proteusapp_splitToWithStates: Cc, proteusapp_texture: Vc, proteusapp_textureState: Lc, proteusapp_tick: Ec, proteusapp_transitionChannel: Gc, proteusapp_unbindKey: Oc, proteusapp_uploadVideoFrame: Wc, __wbg_handle_free: zc, __wbg_texturehandle_free: Uc, __wbg_transitionchannel_free: Hc, __wbg_videohandle_free: qc, handle_fromId: jc, handle_id: Kc, texturehandle_fromId: Nc, texturehandle_id: Jc, __abort_handler: Qc, __instance_terminated: Xc, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Yc, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Zc, __wbindgen_malloc: eb, __wbindgen_realloc: _b, __wbindgen_exn_store: tb, __externref_table_alloc: rb, __wbindgen_externrefs: nb, __wbindgen_destroy_closure: ab, __externref_table_dealloc: ob, __wbindgen_free: cb, __wbindgen_start: Ct } = go, bb = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: Qc,
    __externref_table_alloc: rb,
    __externref_table_dealloc: ob,
    __instance_terminated: Xc,
    __wbg_handle_free: zc,
    __wbg_proteusapp_free: wo,
    __wbg_texturehandle_free: Uc,
    __wbg_transitionchannel_free: Hc,
    __wbg_videohandle_free: qc,
    __wbindgen_destroy_closure: ab,
    __wbindgen_exn_store: tb,
    __wbindgen_externrefs: nb,
    __wbindgen_free: cb,
    __wbindgen_malloc: eb,
    __wbindgen_realloc: _b,
    __wbindgen_start: Ct,
    handle_fromId: jc,
    handle_id: Kc,
    memory: po,
    proteusapp_addChild: lo,
    proteusapp_animateTo: mo,
    proteusapp_bakeTexture: ho,
    proteusapp_bakedImageSize: yo,
    proteusapp_bakedTextSize: xo,
    proteusapp_bindKey: $o,
    proteusapp_channelDestroy: vo,
    proteusapp_channelSet: So,
    proteusapp_clearFocus: Ao,
    proteusapp_component: Io,
    proteusapp_copyBakedImageFrom: Do,
    proteusapp_createVideo: To,
    proteusapp_cropImage: Fo,
    proteusapp_declareGeometry: Bo,
    proteusapp_declaredGeometry: Po,
    proteusapp_destroy: ko,
    proteusapp_devices: Mo,
    proteusapp_focus: Ro,
    proteusapp_focused: Co,
    proteusapp_freeResources: Vo,
    proteusapp_get: Lo,
    proteusapp_hideVideo: Eo,
    proteusapp_inputDevices: Go,
    proteusapp_inputMode: Oo,
    proteusapp_isFocused: Wo,
    proteusapp_loadTexture: zo,
    proteusapp_mergeFrom: Uo,
    proteusapp_mergeFromWithBehavior: Ho,
    proteusapp_new: qo,
    proteusapp_onAppKey: jo,
    proteusapp_onBlur: Ko,
    proteusapp_onClick: No,
    proteusapp_onDrag: Jo,
    proteusapp_onDropped: Qo,
    proteusapp_onFocus: Xo,
    proteusapp_onFocusLost: Yo,
    proteusapp_onHoverEnter: Zo,
    proteusapp_onHoverExit: ec,
    proteusapp_onKey: _c,
    proteusapp_onPress: tc,
    proteusapp_onRelease: rc,
    proteusapp_onTransitionComplete: nc,
    proteusapp_pointerLeft: ac,
    proteusapp_pointerMoved: oc,
    proteusapp_pointerPressed: cc,
    proteusapp_pointerReleased: bc,
    proteusapp_releaseVideo: sc,
    proteusapp_removeChild: ic,
    proteusapp_resetKeyMap: fc,
    proteusapp_setDeclaredGeometry: uc,
    proteusapp_setDefaultFocus: dc,
    proteusapp_setDevices: gc,
    proteusapp_setDisabled: pc,
    proteusapp_setFocusGroup: wc,
    proteusapp_setImage: lc,
    proteusapp_setInputDevices: mc,
    proteusapp_setInteractive: hc,
    proteusapp_setKeyRepeat: yc,
    proteusapp_setLongPressMs: xc,
    proteusapp_setNavigatingActions: $c,
    proteusapp_setNeighbour: vc,
    proteusapp_setOpacity: Sc,
    proteusapp_setReadingDirection: Ac,
    proteusapp_setStyleTransition: Ic,
    proteusapp_setText: Dc,
    proteusapp_setTexture: Tc,
    proteusapp_setTransitionInteraction: Fc,
    proteusapp_setVideoCrossfade: Bc,
    proteusapp_setVisible: Pc,
    proteusapp_showVideo: kc,
    proteusapp_splitTo: Mc,
    proteusapp_splitToWithBehavior: Rc,
    proteusapp_splitToWithStates: Cc,
    proteusapp_texture: Vc,
    proteusapp_textureState: Lc,
    proteusapp_tick: Ec,
    proteusapp_transitionChannel: Gc,
    proteusapp_unbindKey: Oc,
    proteusapp_uploadVideoFrame: Wc,
    texturehandle_fromId: Nc,
    texturehandle_id: Jc,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Zc,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Yc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  uo(bb);
  Ct();
  const sb = "" + new URL("proteus_host_web_bg-DydyeWxU.wasm", import.meta.url).href;
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
      const a = p_(r, i.__wbindgen_malloc), o = R, c = i.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, o, n);
      return ae.__wrap(c);
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
      const o = i.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (o[1]) throw T(o[0]);
    }
    clearFocus() {
      i.proteusapp_clearFocus(this.__wbg_ptr);
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
      const a = je(t, i.__wbindgen_malloc), o = R, c = i.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw T(c[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      p(e, x);
      const o = je(t, i.__wbindgen_malloc), c = R, b = i.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
      if (b[1]) throw T(b[0]);
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
      const t = $l(e, i.__wbindgen_malloc), r = R;
      i.proteusapp_setNavigatingActions(this.__wbg_ptr, t, r);
    }
    setNeighbour(e, t, r) {
      p(e, x);
      const n = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R, o = i.proteusapp_setNeighbour(this.__wbg_ptr, e.__wbg_ptr, n, a, !$(r), $(r) ? 0 : r);
      if (o[1]) throw T(o[0]);
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
      const a = je(t, i.__wbindgen_malloc), o = R, c = i.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw T(c[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      p(e, x);
      const o = je(t, i.__wbindgen_malloc), c = R, b = i.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
      if (b[1]) throw T(b[0]);
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
      const a = p_(n, i.__wbindgen_malloc), o = R;
      return i.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, o) !== 0;
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
  function ib(_, e, t, r) {
    const n = W(_, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    return i.mount(n, a, e, $(t) ? 0 : B(t), r);
  }
  function fb(_, e) {
    return Error(A(_, e));
  }
  function ub(_) {
    return Number(_);
  }
  function db(_, e) {
    const t = String(e), r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function gb(_) {
    return _.Window;
  }
  function pb(_) {
    return _.WorkerGlobalScope;
  }
  function wb(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    C().setBigInt64(_ + 8, $(r) ? BigInt(0) : r, true), C().setInt32(_ + 0, !$(r), true);
  }
  function lb(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return $(t) ? 16777215 : t ? 1 : 0;
  }
  function mb(_, e) {
    const t = M_(e), r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function hb(_, e) {
    return _ in e;
  }
  function yb(_) {
    return typeof _ == "bigint";
  }
  function xb(_) {
    return typeof _ == "function";
  }
  function $b(_) {
    return _ === null;
  }
  function vb(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function Sb(_) {
    return typeof _ == "string";
  }
  function Ab(_) {
    return _ === void 0;
  }
  function Ib(_, e) {
    return _ === e;
  }
  function Db(_, e) {
    return _ == e;
  }
  function Tb(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    C().setFloat64(_ + 8, $(r) ? 0 : r, true), C().setInt32(_ + 0, !$(r), true);
  }
  function Fb(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Bb(_, e) {
    throw new Error(A(_, e));
  }
  function Pb(_) {
    _._wbg_cb_unref();
  }
  function kb(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Mb(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Rb() {
    return h(function(_, e, t, r) {
      _.addEventListener(A(e, t), r);
    }, arguments);
  }
  function Cb(_) {
    return _.altKey;
  }
  function Vb(_, e, t) {
    _.attachShader(e, t);
  }
  function Lb(_, e, t) {
    _.attachShader(e, t);
  }
  function Eb(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function Gb() {
    return h(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Ob(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, A(r, n));
  }
  function Wb(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, A(r, n));
  }
  function zb(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function Ub(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function Hb(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function qb(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function jb(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function Kb(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Nb(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Jb(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function Qb(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Xb(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Yb(_, e) {
    _.bindVertexArrayOES(e);
  }
  function Zb(_, e) {
    _.bindVertexArray(e);
  }
  function es(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function _s(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function ts(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function rs(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function ns(_, e) {
    _.blendEquation(e >>> 0);
  }
  function as(_, e) {
    _.blendEquation(e >>> 0);
  }
  function os(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function cs(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function bs(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function ss(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function is(_, e, t, r, n, a, o, c, b, f, d) {
    _.blitFramebuffer(e, t, r, n, a, o, c, b, f >>> 0, d >>> 0);
  }
  function fs(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
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
    _.bufferSubData(e >>> 0, t, r);
  }
  function ws(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function ls(_) {
    return _.button;
  }
  function ms() {
    return h(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function hs() {
    return h(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function ys() {
    return h(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function xs(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, E(r, n));
  }
  function $s(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, Y(r, n));
  }
  function vs(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, ve(r, n));
  }
  function Ss(_, e) {
    _.clearDepth(e);
  }
  function As(_, e) {
    _.clearDepth(e);
  }
  function Is(_, e) {
    _.clearStencil(e);
  }
  function Ds(_, e) {
    _.clearStencil(e);
  }
  function Ts(_, e) {
    _.clear(e >>> 0);
  }
  function Fs(_, e) {
    _.clear(e >>> 0);
  }
  function Bs(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function Ps(_, e) {
    const t = e.code, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function ks(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Ms(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Rs(_, e) {
    _.compileShader(e);
  }
  function Cs(_, e) {
    _.compileShader(e);
  }
  function Vs(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function Ls(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function Es(_, e, t, r, n, a, o, c, b, f) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b, f);
  }
  function Gs(_, e, t, r, n, a, o, c, b, f, d, I) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d, I);
  }
  function Os(_, e, t, r, n, a, o, c, b, f, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d);
  }
  function Ws() {
    return h(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function zs(_) {
    return _.contentRect;
  }
  function Us(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function Hs(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function qs(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function js(_, e, t, r, n, a, o, c, b, f) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f);
  }
  function Ks() {
    return h(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function Ns() {
    return h(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function Js(_, e) {
    return _.createBindGroup(e);
  }
  function Qs(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : B(e);
  }
  function Xs() {
    return h(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function Ys(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : B(e);
  }
  function Zs(_, e) {
    return _.createCommandEncoder(e);
  }
  function ei(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : B(e);
  }
  function _i(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : B(e);
  }
  function ti(_, e) {
    return _.createPipelineLayout(e);
  }
  function ri(_) {
    const e = _.createProgram();
    return $(e) ? 0 : B(e);
  }
  function ni(_) {
    const e = _.createProgram();
    return $(e) ? 0 : B(e);
  }
  function ai(_) {
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
  function bi(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : B(e);
  }
  function si(_, e) {
    return _.createSampler(e);
  }
  function ii(_) {
    const e = _.createSampler();
    return $(e) ? 0 : B(e);
  }
  function fi(_, e) {
    return _.createShaderModule(e);
  }
  function ui(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : B(t);
  }
  function di(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : B(t);
  }
  function gi(_) {
    const e = _.createTexture();
    return $(e) ? 0 : B(e);
  }
  function pi(_) {
    const e = _.createTexture();
    return $(e) ? 0 : B(e);
  }
  function wi() {
    return h(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function li(_) {
    const e = _.createVertexArrayOES();
    return $(e) ? 0 : B(e);
  }
  function mi(_) {
    const e = _.createVertexArray();
    return $(e) ? 0 : B(e);
  }
  function hi() {
    return h(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function yi(_) {
    return _.ctrlKey;
  }
  function xi(_, e) {
    _.cullFace(e >>> 0);
  }
  function $i(_, e) {
    _.cullFace(e >>> 0);
  }
  function vi(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function Si(_, e) {
    _.deleteBuffer(e);
  }
  function Ai(_, e) {
    _.deleteBuffer(e);
  }
  function Ii(_, e) {
    _.deleteFramebuffer(e);
  }
  function Di(_, e) {
    _.deleteFramebuffer(e);
  }
  function Ti(_, e) {
    _.deleteProgram(e);
  }
  function Fi(_, e) {
    _.deleteProgram(e);
  }
  function Bi(_, e) {
    _.deleteQuery(e);
  }
  function Pi(_, e) {
    _.deleteRenderbuffer(e);
  }
  function ki(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Mi(_, e) {
    _.deleteSampler(e);
  }
  function Ri(_, e) {
    _.deleteShader(e);
  }
  function Ci(_, e) {
    _.deleteShader(e);
  }
  function Vi(_, e) {
    _.deleteSync(e);
  }
  function Li(_, e) {
    _.deleteTexture(e);
  }
  function Ei(_, e) {
    _.deleteTexture(e);
  }
  function Gi(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function Oi(_, e) {
    _.deleteVertexArray(e);
  }
  function Wi(_, e) {
    _.depthFunc(e >>> 0);
  }
  function zi(_, e) {
    _.depthFunc(e >>> 0);
  }
  function Ui(_, e) {
    _.depthMask(e !== 0);
  }
  function Hi(_, e) {
    _.depthMask(e !== 0);
  }
  function qi(_, e, t) {
    _.depthRange(e, t);
  }
  function ji(_, e, t) {
    _.depthRange(e, t);
  }
  function Ki(_, e) {
    const t = e.description, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Ni(_) {
    _.destroy();
  }
  function Ji(_) {
    return _.devicePixelRatio;
  }
  function Qi(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function Xi(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function Yi(_, e) {
    _.disable(e >>> 0);
  }
  function Zi(_, e) {
    _.disable(e >>> 0);
  }
  function ef(_) {
    const e = _.document;
    return $(e) ? 0 : B(e);
  }
  function _f(_) {
    return _.done;
  }
  function tf(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function rf(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function nf(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function af(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function of(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function cf(_, e) {
    _.drawBuffers(e);
  }
  function bf(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function sf(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function ff(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function uf(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function df(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function gf(_, e) {
    _.enable(e >>> 0);
  }
  function pf(_, e) {
    _.enable(e >>> 0);
  }
  function wf(_, e) {
    _.endQuery(e >>> 0);
  }
  function lf(_) {
    _.end();
  }
  function mf(_) {
    return Object.entries(_);
  }
  function hf(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function yf(_) {
    console.error(_);
  }
  function xf(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(A(_, e));
    } finally {
      i.__wbindgen_free(t, r, 1);
    }
  }
  function $f(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return $(r) ? 0 : B(r);
  }
  function vf(_) {
    return _.finish();
  }
  function Sf(_, e) {
    return _.finish(e);
  }
  function Af(_) {
    _.flush();
  }
  function If(_) {
    _.flush();
  }
  function Df() {
    return h(function(_) {
      _.focus();
    }, arguments);
  }
  function Tf(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function Ff(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function Bf(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function Pf(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function kf(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function Mf(_, e, t, r, n, a, o) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, o);
  }
  function Rf(_, e) {
    _.frontFace(e >>> 0);
  }
  function Cf(_, e) {
    _.frontFace(e >>> 0);
  }
  function Vf(_) {
    return _.getBoundingClientRect();
  }
  function Lf(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function Ef() {
    return h(function(_, e, t, r) {
      const n = _.getContext(A(e, t), r);
      return $(n) ? 0 : B(n);
    }, arguments);
  }
  function Gf() {
    return h(function(_, e, t) {
      const r = _.getContext(A(e, t));
      return $(r) ? 0 : B(r);
    }, arguments);
  }
  function Of() {
    return h(function(_, e, t) {
      const r = _.getContext(A(e, t));
      return $(r) ? 0 : B(r);
    }, arguments);
  }
  function Wf() {
    return h(function(_, e, t, r) {
      const n = _.getContext(A(e, t), r);
      return $(n) ? 0 : B(n);
    }, arguments);
  }
  function zf() {
    return h(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function Uf(_, e, t) {
    const r = _.getElementById(A(e, t));
    return $(r) ? 0 : B(r);
  }
  function Hf() {
    return h(function(_, e, t) {
      const r = _.getExtension(A(e, t));
      return $(r) ? 0 : B(r);
    }, arguments);
  }
  function qf() {
    return h(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function jf() {
    return h(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function Kf() {
    return h(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function Nf() {
    return h(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function Jf(_) {
    const e = _.getPreferredCanvasFormat();
    return (ce.indexOf(e) + 1 || 96) - 1;
  }
  function Qf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Xf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Yf(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function Zf(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function eu(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function _u(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function tu(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function ru(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function nu(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function au(_) {
    const e = _.getSupportedExtensions();
    return $(e) ? 0 : B(e);
  }
  function ou(_) {
    const e = _.getSupportedProfiles();
    return $(e) ? 0 : B(e);
  }
  function cu(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function bu(_, e, t, r) {
    return _.getUniformBlockIndex(e, A(t, r));
  }
  function su(_, e, t, r) {
    const n = _.getUniformLocation(e, A(t, r));
    return $(n) ? 0 : B(n);
  }
  function iu(_, e, t, r) {
    const n = _.getUniformLocation(e, A(t, r));
    return $(n) ? 0 : B(n);
  }
  function fu(_, e) {
    return _[e >>> 0];
  }
  function uu(_, e) {
    const t = _[e >>> 0];
    return $(t) ? 0 : B(t);
  }
  function du() {
    return h(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function gu(_, e) {
    return _[e >>> 0];
  }
  function pu(_, e) {
    return _[e];
  }
  function wu(_) {
    return _.gpu;
  }
  function lu(_, e, t) {
    return _.hasAttribute(A(e, t));
  }
  function mu(_) {
    return _.height;
  }
  function hu(_) {
    return _.height;
  }
  function yu(_) {
    return _.hidden;
  }
  function xu(_, e, t) {
    return _.includes(e, t);
  }
  function $u(_) {
    return _.info;
  }
  function vu(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function Su(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function Au(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function Iu(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Du(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function Tu(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function Fu(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function Bu(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function Pu(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function ku(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function Mu() {
    return h(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function Ru(_) {
    return Array.isArray(_);
  }
  function Cu(_) {
    return _.isComposing;
  }
  function Vu(_) {
    return Number.isSafeInteger(_);
  }
  function Lu(_, e) {
    return Object.is(_, e);
  }
  function Eu() {
    return Symbol.iterator;
  }
  function Gu(_, e) {
    const t = e.key, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Ou(_, e) {
    const t = e.label, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Wu(_) {
    return _.length;
  }
  function zu(_) {
    return _.length;
  }
  function Uu(_) {
    return _.limits;
  }
  function Hu(_) {
    return _.limits;
  }
  function qu(_, e) {
    _.linkProgram(e);
  }
  function ju(_, e) {
    _.linkProgram(e);
  }
  function Ku(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function Nu(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function Ju(_) {
    return _.maxBindGroups;
  }
  function Qu(_) {
    return _.maxBindingsPerBindGroup;
  }
  function Xu(_) {
    return _.maxBufferSize;
  }
  function Yu(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function Zu(_) {
    return _.maxColorAttachments;
  }
  function ed(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function _d(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function td(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function rd(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function nd(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function ad(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function od(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function cd(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function bd(_) {
    return _.maxInterStageShaderVariables;
  }
  function sd(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function id(_) {
    return _.maxSamplersPerShaderStage;
  }
  function fd(_) {
    return _.maxStorageBufferBindingSize;
  }
  function ud(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function dd(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function gd(_) {
    return _.maxTextureArrayLayers;
  }
  function pd(_) {
    return _.maxTextureDimension1D;
  }
  function wd(_) {
    return _.maxTextureDimension2D;
  }
  function ld(_) {
    return _.maxTextureDimension3D;
  }
  function md(_) {
    return _.maxUniformBufferBindingSize;
  }
  function hd(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function yd(_) {
    return _.maxVertexAttributes;
  }
  function xd(_) {
    return _.maxVertexBufferArrayStride;
  }
  function $d(_) {
    return _.maxVertexBuffers;
  }
  function vd(_) {
    return _.metaKey;
  }
  function Sd(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function Ad(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function Id(_) {
    return _.navigator;
  }
  function Dd(_) {
    return _.navigator;
  }
  function Td() {
    return h(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function Fd() {
    return new Error();
  }
  function Bd() {
    return new Object();
  }
  function Pd() {
    return new Array();
  }
  function kd(_) {
    return new Uint8Array(_);
  }
  function Md(_, e) {
    return new Error(A(_, e));
  }
  function Rd(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, o) => {
        const c = t.a;
        t.a = 0;
        try {
          return Q2(c, t.b, a, o);
        } finally {
          t.a = c;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function Cd(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function Vd() {
    return h(function(_) {
      return _.next();
    }, arguments);
  }
  function Ld(_) {
    return _.next;
  }
  function Ed(_, e) {
    _.observe(e);
  }
  function Gd(_) {
    return Array.of(_);
  }
  function Od(_) {
    return _.offsetX;
  }
  function Wd(_) {
    return _.offsetY;
  }
  function zd(_) {
    return _.onSubmittedWorkDone();
  }
  function Ud(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function Hd(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function qd(_, e, t) {
    _.polygonOffset(e, t);
  }
  function jd(_, e, t) {
    _.polygonOffset(e, t);
  }
  function Kd(_) {
    _.preventDefault();
  }
  function Nd(_) {
    return P_.__wrap(_);
  }
  function Jd(_, e, t) {
    Uint8Array.prototype.set.call(s_(_, e), t);
  }
  function Qd(_, e) {
    return _.push(e);
  }
  function Xd(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function Yd() {
    return h(function(_, e, t) {
      return _.querySelectorAll(A(e, t));
    }, arguments);
  }
  function Zd() {
    return h(function(_, e, t) {
      const r = _.querySelector(A(e, t));
      return $(r) ? 0 : B(r);
    }, arguments);
  }
  function eg(_) {
    return _.queueMicrotask;
  }
  function _g(_) {
    queueMicrotask(_);
  }
  function tg(_) {
    return _.queue;
  }
  function rg(_, e) {
    _.readBuffer(e >>> 0);
  }
  function ng() {
    return h(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function ag() {
    return h(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function og() {
    return h(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function cg(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function bg(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function sg(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function ig(_) {
    return _.repeat;
  }
  function fg(_, e) {
    return _.requestAdapter(e);
  }
  function ug(_) {
    return _.requestAdapter();
  }
  function dg() {
    return h(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function gg(_, e) {
    return _.requestDevice(e);
  }
  function pg(_) {
    return Promise.resolve(_);
  }
  function wg(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function lg(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function mg(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function hg(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function yg() {
    return h(function(_, e, t, r, n) {
      _.setAttribute(A(e, t), A(r, n));
    }, arguments);
  }
  function xg() {
    return h(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, ve(r, n), a, o >>> 0);
    }, arguments);
  }
  function $g(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function vg(_, e, t, r, n) {
    _.setIndexBuffer(e, q_[t], r, n);
  }
  function Sg(_, e, t, r) {
    _.setIndexBuffer(e, q_[t], r);
  }
  function Ag(_, e) {
    _.setPipeline(e);
  }
  function Ig(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function Dg(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function Tg(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
  }
  function Fg(_, e, t) {
    _.set(e, t >>> 0);
  }
  function Bg() {
    return h(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function Pg(_, e, t) {
    _[e] = t;
  }
  function kg(_, e) {
    _.a = e;
  }
  function Mg(_, e) {
    _.access = cl[e];
  }
  function Rg(_, e) {
    _.addressModeU = U_[e];
  }
  function Cg(_, e) {
    _.addressModeV = U_[e];
  }
  function Vg(_, e) {
    _.addressModeW = U_[e];
  }
  function Lg(_, e) {
    _.alpha = e;
  }
  function Eg(_, e) {
    _.alphaMode = el[e];
  }
  function Gg(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function Og(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function Wg(_, e) {
    _.arrayStride = e;
  }
  function zg(_, e) {
    _.aspect = Wt[e];
  }
  function Ug(_, e) {
    _.aspect = Wt[e];
  }
  function Hg(_, e) {
    _.attributes = e;
  }
  function qg(_, e) {
    _.b = e;
  }
  function jg(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function Kg(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function Ng(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function Jg(_, e) {
    _.bindGroupLayouts = e;
  }
  function Qg(_, e) {
    _.binding = e >>> 0;
  }
  function Xg(_, e) {
    _.binding = e >>> 0;
  }
  function Yg(_, e) {
    _.blend = e;
  }
  function Zg(_, e) {
    _.buffer = e;
  }
  function e0(_, e) {
    _.buffer = e;
  }
  function _0(_, e) {
    _.buffers = e;
  }
  function t0(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function r0(_, e) {
    _.clearValue = e;
  }
  function n0(_, e, t) {
    _.code = A(e, t);
  }
  function a0(_, e) {
    _.colorAttachments = e;
  }
  function o0(_, e) {
    _.color = e;
  }
  function c0(_, e) {
    _.compare = H_[e];
  }
  function b0(_, e) {
    _.compare = H_[e];
  }
  function s0(_, e) {
    _.count = e >>> 0;
  }
  function i0(_, e) {
    _.cullMode = _l[e];
  }
  function f0(_, e, t) {
    _[e >>> 0] = t;
  }
  function u0(_, e) {
    _.depthBias = e;
  }
  function d0(_, e) {
    _.depthBiasClamp = e;
  }
  function g0(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function p0(_, e) {
    _.depthClearValue = e;
  }
  function w0(_, e) {
    _.depthCompare = H_[e];
  }
  function l0(_, e) {
    _.depthFailOp = K_[e];
  }
  function m0(_, e) {
    _.depthLoadOp = j_[e];
  }
  function h0(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function y0(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function x0(_, e) {
    _.depthStencil = e;
  }
  function $0(_, e) {
    _.depthStencilAttachment = e;
  }
  function v0(_, e) {
    _.depthStoreOp = N_[e];
  }
  function S0(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function A0(_, e) {
    _.device = e;
  }
  function I0(_, e) {
    _.dimension = J_[e];
  }
  function D0(_, e) {
    _.dimension = bl[e];
  }
  function T0(_, e) {
    _.dstFactor = Gt[e];
  }
  function F0(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function B0(_, e) {
    _.entries = e;
  }
  function P0(_, e) {
    _.entries = e;
  }
  function k0(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function M0(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function R0(_, e) {
    _.externalTexture = e;
  }
  function C0(_, e) {
    _.failOp = K_[e];
  }
  function V0(_, e) {
    _.format = ce[e];
  }
  function L0(_, e) {
    _.format = il[e];
  }
  function E0(_, e) {
    _.format = ce[e];
  }
  function G0(_, e) {
    _.format = ce[e];
  }
  function O0(_, e) {
    _.format = ce[e];
  }
  function W0(_, e) {
    _.format = ce[e];
  }
  function z0(_, e) {
    _.format = ce[e];
  }
  function U0(_, e) {
    _.fragment = e;
  }
  function H0(_, e) {
    _.frontFace = tl[e];
  }
  function q0(_, e) {
    _.g = e;
  }
  function j0(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function K0(_, e) {
    _.height = e >>> 0;
  }
  function N0(_, e) {
    _.height = e >>> 0;
  }
  function J0(_, e) {
    _.height = e >>> 0;
  }
  function Q0(_, e, t) {
    _.label = A(e, t);
  }
  function X0(_, e, t) {
    _.label = A(e, t);
  }
  function Y0(_, e, t) {
    _.label = A(e, t);
  }
  function Z0(_, e, t) {
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
  function op(_, e, t) {
    _.label = A(e, t);
  }
  function cp(_, e, t) {
    _.label = A(e, t);
  }
  function bp(_, e, t) {
    _.label = A(e, t);
  }
  function sp(_, e) {
    _.layout = e;
  }
  function ip(_, e) {
    _.layout = e;
  }
  function fp(_, e) {
    _.loadOp = j_[e];
  }
  function up(_, e) {
    _.lodMaxClamp = e;
  }
  function dp(_, e) {
    _.lodMinClamp = e;
  }
  function gp(_, e) {
    _.magFilter = Ot[e];
  }
  function pp(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function wp(_, e) {
    _.mask = e >>> 0;
  }
  function lp(_, e) {
    _.maxAnisotropy = e;
  }
  function mp(_, e) {
    _.minBindingSize = e;
  }
  function hp(_, e) {
    _.minFilter = Ot[e];
  }
  function yp(_, e) {
    _.mipLevel = e >>> 0;
  }
  function xp(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function $p(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function vp(_, e) {
    _.mipmapFilter = rl[e];
  }
  function Sp(_, e) {
    _.module = e;
  }
  function Ap(_, e) {
    _.module = e;
  }
  function Ip(_, e) {
    _.multisample = e;
  }
  function Dp(_, e) {
    _.multisampled = e !== 0;
  }
  function Tp(_, e) {
    _.offset = e;
  }
  function Fp(_, e) {
    _.offset = e;
  }
  function Bp(_, e) {
    _.offset = e;
  }
  function Pp(_, e) {
    _.operation = Y2[e];
  }
  function kp(_, e) {
    _.origin = e;
  }
  function Mp(_, e) {
    _.passOp = K_[e];
  }
  function Rp(_, e) {
    _.powerPreference = nl[e];
  }
  function Cp(_, e) {
    _.primitive = e;
  }
  function Vp(_, e) {
    _.querySet = e;
  }
  function Lp(_, e) {
    _.r = e;
  }
  function Ep(_, e) {
    _.requiredFeatures = e;
  }
  function Gp(_, e) {
    _.requiredLimits = e;
  }
  function Op(_, e) {
    _.resolveTarget = e;
  }
  function Wp(_, e) {
    _.resource = e;
  }
  function zp(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function Up(_, e) {
    _.sampleCount = e >>> 0;
  }
  function Hp(_, e) {
    _.sampleType = sl[e];
  }
  function qp(_, e) {
    _.sampler = e;
  }
  function jp(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function Kp(_, e) {
    _.size = e;
  }
  function Np(_, e) {
    _.size = e;
  }
  function Jp(_, e) {
    _.size = e;
  }
  function Qp(_, e) {
    _.srcFactor = Gt[e];
  }
  function Xp(_, e) {
    _.stencilBack = e;
  }
  function Yp(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function Zp(_, e) {
    _.stencilFront = e;
  }
  function ew(_, e) {
    _.stencilLoadOp = j_[e];
  }
  function _w(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function tw(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function rw(_, e) {
    _.stencilStoreOp = N_[e];
  }
  function nw(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function aw(_, e) {
    _.stepMode = fl[e];
  }
  function ow(_, e) {
    _.storageTexture = e;
  }
  function cw(_, e) {
    _.storeOp = N_[e];
  }
  function bw(_, e) {
    _.stripIndexFormat = q_[e];
  }
  function sw(_, e) {
    _.targets = e;
  }
  function iw(_, e) {
    _.texture = e;
  }
  function fw(_, e) {
    _.texture = e;
  }
  function uw(_, e) {
    _.timestampWrites = e;
  }
  function dw(_, e) {
    _.topology = al[e];
  }
  function gw(_, e) {
    _.type = Z2[e];
  }
  function pw(_, e) {
    _.type = ol[e];
  }
  function ww(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function lw(_, e) {
    _.usage = e >>> 0;
  }
  function mw(_, e) {
    _.usage = e >>> 0;
  }
  function hw(_, e) {
    _.usage = e >>> 0;
  }
  function yw(_, e) {
    _.usage = e >>> 0;
  }
  function xw(_, e) {
    _.vertex = e;
  }
  function $w(_, e) {
    _.view = e;
  }
  function vw(_, e) {
    _.view = e;
  }
  function Sw(_, e) {
    _.viewDimension = J_[e];
  }
  function Aw(_, e) {
    _.viewDimension = J_[e];
  }
  function Iw(_, e) {
    _.viewFormats = e;
  }
  function Dw(_, e) {
    _.viewFormats = e;
  }
  function Tw(_, e) {
    _.visibility = e >>> 0;
  }
  function Fw(_, e) {
    _.width = e >>> 0;
  }
  function Bw(_, e) {
    _.width = e >>> 0;
  }
  function Pw(_, e) {
    _.width = e >>> 0;
  }
  function kw(_, e) {
    _.writeMask = e >>> 0;
  }
  function Mw(_, e) {
    _.x = e >>> 0;
  }
  function Rw(_, e) {
    _.y = e >>> 0;
  }
  function Cw(_, e) {
    _.z = e >>> 0;
  }
  function Vw(_, e, t, r) {
    _.shaderSource(e, A(t, r));
  }
  function Lw(_, e, t, r) {
    _.shaderSource(e, A(t, r));
  }
  function Ew(_) {
    return _.shiftKey;
  }
  function Gw(_, e) {
    const t = e.stack, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Ow() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return $(_) ? 0 : B(_);
  }
  function Ww() {
    const _ = typeof global > "u" ? null : global;
    return $(_) ? 0 : B(_);
  }
  function zw() {
    const _ = typeof self > "u" ? null : self;
    return $(_) ? 0 : B(_);
  }
  function Uw() {
    const _ = typeof window > "u" ? null : window;
    return $(_) ? 0 : B(_);
  }
  function Hw(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function qw(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function jw(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function Kw(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function Nw(_, e) {
    _.stencilMask(e >>> 0);
  }
  function Jw(_, e) {
    _.stencilMask(e >>> 0);
  }
  function Qw(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Xw(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Yw(_, e) {
    _.submit(e);
  }
  function Zw() {
    return h(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function e1() {
    return h(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function _1() {
    return h(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function t1() {
    return h(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function r1() {
    return h(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function n1(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function a1(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function o1(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function c1(_, e, t, r, n, a, o) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, o);
  }
  function b1() {
    return h(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function s1() {
    return h(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function i1() {
    return h(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function f1() {
    return h(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function u1() {
    return h(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function d1() {
    return h(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function g1() {
    return h(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function p1() {
    return h(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function w1() {
    return h(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function l1() {
    return h(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function m1() {
    return h(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function h1() {
    return h(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function y1() {
    return h(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function x1() {
    return h(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function $1() {
    return h(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function v1(_, e, t) {
    return _.then(e, t);
  }
  function S1(_, e, t) {
    return _.then(e, t);
  }
  function A1(_, e) {
    return _.then(e);
  }
  function I1(_, e, t) {
    _.uniform1f(e, t);
  }
  function D1(_, e, t) {
    _.uniform1f(e, t);
  }
  function T1(_, e, t) {
    _.uniform1i(e, t);
  }
  function F1(_, e, t) {
    _.uniform1i(e, t);
  }
  function B1(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function P1(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function k1(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function M1(_, e, t, r) {
    _.uniform2iv(e, Y(t, r));
  }
  function R1(_, e, t, r) {
    _.uniform2iv(e, Y(t, r));
  }
  function C1(_, e, t, r) {
    _.uniform2uiv(e, ve(t, r));
  }
  function V1(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function L1(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function E1(_, e, t, r) {
    _.uniform3iv(e, Y(t, r));
  }
  function G1(_, e, t, r) {
    _.uniform3iv(e, Y(t, r));
  }
  function O1(_, e, t, r) {
    _.uniform3uiv(e, ve(t, r));
  }
  function W1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function z1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function U1(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function H1(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function q1(_, e, t, r) {
    _.uniform4iv(e, Y(t, r));
  }
  function j1(_, e, t, r) {
    _.uniform4iv(e, Y(t, r));
  }
  function K1(_, e, t, r) {
    _.uniform4uiv(e, ve(t, r));
  }
  function N1(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function J1(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function Q1(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function X1(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, E(r, n));
  }
  function Y1(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, E(r, n));
  }
  function Z1(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function e2(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function _2(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, E(r, n));
  }
  function t2(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, E(r, n));
  }
  function r2(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function n2(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function a2(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, E(r, n));
  }
  function o2(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, E(r, n));
  }
  function c2(_) {
    _.unmap();
  }
  function b2(_, e) {
    _.useProgram(e);
  }
  function s2(_, e) {
    _.useProgram(e);
  }
  function i2(_) {
    return _.value;
  }
  function f2(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function u2(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function d2(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function g2(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function p2(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function w2(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function l2(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function m2(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function h2(_) {
    return _.width;
  }
  function y2(_) {
    return _.width;
  }
  function x2() {
    return h(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, s_(r, n), a, o);
    }, arguments);
  }
  function $2() {
    return h(function(_, e, t, r, n, a) {
      _.writeTexture(e, s_(t, r), n, a);
    }, arguments);
  }
  function v2(_, e) {
    return Z(_, e, H2);
  }
  function S2(_, e) {
    return Z(_, e, J2);
  }
  function A2(_, e) {
    return Z(_, e, X2);
  }
  function I2(_, e) {
    return Z(_, e, q2);
  }
  function D2(_, e) {
    return Z(_, e, j2);
  }
  function T2(_, e) {
    return Z(_, e, K2);
  }
  function F2(_, e) {
    return Z(_, e, N2);
  }
  function B2(_, e) {
    return Z(_, e, U2);
  }
  function P2(_) {
    return _;
  }
  function k2(_) {
    return _;
  }
  function M2(_, e) {
    return E(_, e);
  }
  function R2(_, e) {
    return ul(_, e);
  }
  function C2(_, e) {
    return Y(_, e);
  }
  function V2(_, e) {
    return dl(_, e);
  }
  function L2(_, e) {
    return gl(_, e);
  }
  function E2(_, e) {
    return ve(_, e);
  }
  function G2(_, e) {
    return s_(_, e);
  }
  function O2(_, e) {
    return A(_, e);
  }
  function W2(_) {
    return BigInt.asUintN(64, _);
  }
  function z2() {
    const _ = i.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function U2(_, e) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function H2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function q2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function j2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function K2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function N2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6(_, e, t);
  }
  function J2(_, e, t) {
    const r = i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (r[1]) throw T(r[0]);
  }
  function Q2(_, e, t, r) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, r);
  }
  function X2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_(_, e, t);
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
  ], Y2 = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], Z2 = [
    "uniform",
    "storage",
    "read-only-storage"
  ], el = [
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
  ], _l = [
    "none",
    "front",
    "back"
  ], Ot = [
    "nearest",
    "linear"
  ], tl = [
    "ccw",
    "cw"
  ], q_ = [
    "uint16",
    "uint32"
  ], j_ = [
    "load",
    "clear"
  ], rl = [
    "nearest",
    "linear"
  ], nl = [
    "low-power",
    "high-performance"
  ], al = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], ol = [
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
  ], cl = [
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
  ], bl = [
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
  ], sl = [
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
  ], il = [
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
  ], fl = [
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
  function E(_, e) {
    return _ = _ >>> 0, pl().subarray(_ / 4, _ / 4 + e);
  }
  function ul(_, e) {
    return _ = _ >>> 0, ll().subarray(_ / 2, _ / 2 + e);
  }
  function Y(_, e) {
    return _ = _ >>> 0, ml().subarray(_ / 4, _ / 4 + e);
  }
  function dl(_, e) {
    return _ = _ >>> 0, hl().subarray(_ / 1, _ / 1 + e);
  }
  function gl(_, e) {
    return _ = _ >>> 0, yl().subarray(_ / 2, _ / 2 + e);
  }
  function ve(_, e) {
    return _ = _ >>> 0, xl().subarray(_ / 4, _ / 4 + e);
  }
  function s_(_, e) {
    return _ = _ >>> 0, me().subarray(_ / 1, _ / 1 + e);
  }
  let ie = null;
  function C() {
    return (ie === null || ie.buffer.detached === true || ie.buffer.detached === void 0 && ie.buffer !== i.memory.buffer) && (ie = new DataView(i.memory.buffer)), ie;
  }
  let Ee = null;
  function pl() {
    return (Ee === null || Ee.byteLength === 0) && (Ee = new Float32Array(i.memory.buffer)), Ee;
  }
  let Ge = null;
  function wl() {
    return (Ge === null || Ge.byteLength === 0) && (Ge = new Float64Array(i.memory.buffer)), Ge;
  }
  let Oe = null;
  function ll() {
    return (Oe === null || Oe.byteLength === 0) && (Oe = new Int16Array(i.memory.buffer)), Oe;
  }
  let We = null;
  function ml() {
    return (We === null || We.byteLength === 0) && (We = new Int32Array(i.memory.buffer)), We;
  }
  let ze = null;
  function hl() {
    return (ze === null || ze.byteLength === 0) && (ze = new Int8Array(i.memory.buffer)), ze;
  }
  function A(_, e) {
    return Sl(_ >>> 0, e);
  }
  let Ue = null;
  function yl() {
    return (Ue === null || Ue.byteLength === 0) && (Ue = new Uint16Array(i.memory.buffer)), Ue;
  }
  let He = null;
  function xl() {
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
      const o = r.a;
      r.a = 0;
      try {
        return t(o, r.b, ...a);
      } finally {
        r.a = o, n._wbg_cb_unref();
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
    return wl().set(_, t / 8), R = _.length, t;
  }
  function $l(_, e) {
    const t = e(_.length * 4, 4) >>> 0;
    for (let r = 0; r < _.length; r++) {
      const n = B(_[r]);
      C().setUint32(t + 4 * r, n, true);
    }
    return R = _.length, t;
  }
  function W(_, e, t) {
    if (t === void 0) {
      const c = Ie.encode(_), b = e(c.length, 1) >>> 0;
      return me().subarray(b, b + c.length).set(c), R = c.length, b;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = me();
    let o = 0;
    for (; o < r; o++) {
      const c = _.charCodeAt(o);
      if (c > 127) break;
      a[n + o] = c;
    }
    if (o !== r) {
      o !== 0 && (_ = _.slice(o)), n = t(n, r, r = o + _.length * 3, 1) >>> 0;
      const c = me().subarray(n + o, n + r), b = Ie.encodeInto(_, c);
      o += b.written, n = t(n, r, o, 1) >>> 0;
    }
    return R = o, n;
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
  const vl = 2146435072;
  let w_ = 0;
  function Sl(_, e) {
    return w_ += e, w_ >= vl && (n_ = new TextDecoder("utf-8", {
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
  function Al(_) {
    i = _;
  }
  URL = globalThis.URL;
  const Il = await G_({
    "./proteus_host_web_bg.js": {
      __wbg_call_5575218572ead796: hs,
      __wbg_next_0c4066e251d2eff9: Vd,
      __wbg_done_b62d4a7d2286852a: _f,
      __wbg_value_49f783bb59765962: i2,
      __wbg_length_c6054974c0a6cdb9: zu,
      __wbg_get_unchecked_54a4374c38e08460: gu,
      __wbg_instanceof_Map_afa18d5840c04c15: Tu,
      __wbg_get_197a3fe98f169e38: fu,
      __wbg_new_typed_00a409eb4ec4f2d9: Rd,
      __wbg_then_05edfc8a4fea5106: v1,
      __wbg_new_227d7c05414eb861: Fd,
      __wbg_stack_3b0d974bbf31e44f: Gw,
      __wbg_error_a6fa202b58aa1cd3: xf,
      __wbg_push_f724b5db8acf89d2: Qd,
      __wbg_proteusapp_new: Nd,
      __wbg_set_dc601f4a69da0bc2: f0,
      __wbg_call_8e98ed2f3c86c4b5: ys,
      __wbg_call_0e855b388e315e17: ms,
      __wbg_get_with_ref_key_6412cf3094599694: pu,
      __wbg_set_6be42768c690e380: Pg,
      __wbg_String_8564e559799eccda: db,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: Iu,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: pd,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: wd,
      __wbg_maxTextureDimension3D_06ee54121b37d431: ld,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: gd,
      __wbg_maxBindGroups_14611ac9ed1c6b56: Ju,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: Qu,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: cd,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: od,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: sd,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: id,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: ud,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: dd,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: hd,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: md,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: fd,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: $d,
      __wbg_maxBufferSize_f7ce3e1856349d2f: Xu,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: yd,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: xd,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: bd,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: Ad,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: Sd,
      __wbg_maxColorAttachments_fd9187f9f786da18: Zu,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: Yu,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: nd,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: ed,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: _d,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: td,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: rd,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: ad,
      __wbg_description_18d0a6d4077fec8e: Ki,
      __wbg_set_dst_factor_1ed75271a89a711e: T0,
      __wbg_set_operation_b5862f5a1a143b30: Pp,
      __wbg_set_src_factor_1c4f755f8676df1b: Qp,
      __wbg_set_texture_16d2be474ce6ad0c: iw,
      __wbg_set_mip_level_246db61be15bdd69: yp,
      __wbg_set_x_56f0c2c08a62725c: Mw,
      __wbg_set_y_04fb8ce84735b4e1: Rw,
      __wbg_set_z_a51316db27a4941e: Cw,
      __wbg_set_origin_9b3b0fbe0a5dc469: kp,
      __wbg_set_aspect_77332ac136ee94eb: zg,
      __wbg_Window_a07901001eb4269f: gb,
      __wbg_gpu_a7c12045c25d009a: wu,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: pb,
      __wbg_set_a_5f6e488475272136: kg,
      __wbg_set_b_688365d692bba214: qg,
      __wbg_set_g_d4d1d77cf8fdd362: q0,
      __wbg_set_r_527e5a41c4b1a846: Lp,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: Au,
      __wbg_queue_65d985f3e6d786a6: tg,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: Rp,
      __wbg_requestAdapter_9ff5c9d1ff271165: fg,
      __wbg_set_required_limits_3b031f66f838f4e3: Gp,
      __wbg_set_required_features_54918de8185c5fab: Ep,
      __wbg_set_label_bae57fb9f24fde5c: tp,
      __wbg_requestDevice_c1c34f88a477e509: gg,
      __wbg_limits_50a8c5e629dbfe40: Hu,
      __wbg_info_22dcf1fd1b12bc7d: $u,
      __wbg_set_size_41cd9255ca1e4242: Np,
      __wbg_set_usage_908213a4d4bb8bde: hw,
      __wbg_set_mapped_at_creation_48de4735fab51e78: pp,
      __wbg_set_label_cd567b7b35838e4c: ap,
      __wbg_createBuffer_2f08c0205e04efca: Xs,
      __wbg_set_address_mode_u_a37cf1035585c638: Rg,
      __wbg_set_address_mode_v_8ac049e029caef76: Cg,
      __wbg_set_address_mode_w_eb9260ee11729e92: Vg,
      __wbg_set_compare_42211fbf15e3b850: b0,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: up,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: dp,
      __wbg_set_mag_filter_69d846b974d4bcc0: gp,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: hp,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: vp,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: lp,
      __wbg_set_label_dcd98efbb9370da8: cp,
      __wbg_createSampler_248bd67c920af37d: si,
      __wbg_set_width_1a5e2e86fa5bdcd8: Bw,
      __wbg_set_height_e8b5483b8c117d5e: N0,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: h0,
      __wbg_set_format_e9d4b1475bb3bd3b: W0,
      __wbg_set_size_a61ff22205255d61: Jp,
      __wbg_set_usage_7fa9cd18d1104aca: mw,
      __wbg_set_label_0c1bd0e976cf0a9a: X0,
      __wbg_set_dimension_36e13ccecae5af4b: D0,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: $p,
      __wbg_set_sample_count_865e1d19b84e27e6: Up,
      __wbg_set_view_formats_bab284fc81b40e70: Iw,
      __wbg_createTexture_9e76b80a2dc0d12e: wi,
      __wbg_set_entries_fc76ca4d7da6a709: P0,
      __wbg_set_layout_eeef59714f5bf48b: ip,
      __wbg_set_label_f92ae11c77d74198: bp,
      __wbg_createBindGroup_2320df4db188406c: Js,
      __wbg_set_code_56e2d45ec1ff6c2d: n0,
      __wbg_set_label_be45aed56e4b9fee: rp,
      __wbg_createShaderModule_53701de4fb271c90: fi,
      __wbg_set_label_d1c24b5a7a3ac31d: op,
      __wbg_createCommandEncoder_cd88faca35d9ed68: Zs,
      __wbg_set_bind_group_layouts_5325d038771af328: Jg,
      __wbg_set_label_2f592bd1be3db6b3: ep,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: ti,
      __wbg_set_module_14e471fdd94c582d: Ap,
      __wbg_set_entry_point_8db3b6d103e3b865: M0,
      __wbg_set_buffers_85a7238f4ef28ab4: _0,
      __wbg_set_layout_7c5ba5bdcde8a0f0: sp,
      __wbg_set_vertex_a4951dd9a7a4ed54: xw,
      __wbg_set_label_c47c451211e2f6d2: np,
      __wbg_set_format_f9341112e43ea182: z0,
      __wbg_set_depth_compare_30e9ea552da12fe2: w0,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: S0,
      __wbg_set_depth_bias_428c9340b0fd937b: u0,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: d0,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: g0,
      __wbg_set_compare_1509dc1a5420943f: c0,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: l0,
      __wbg_set_fail_op_77ab26c98f847b65: C0,
      __wbg_set_pass_op_e9470d1262fb8a8b: Mp,
      __wbg_set_stencil_back_6ef4683123b19b25: Xp,
      __wbg_set_stencil_front_aeb8580a97e5424b: Zp,
      __wbg_set_stencil_read_mask_2954f260d47349ea: _w,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: nw,
      __wbg_set_depth_stencil_1bd50dbc450c8650: x0,
      __wbg_set_module_08ad08e736d8edbf: Sp,
      __wbg_set_targets_6b0b3bdd87f35668: sw,
      __wbg_set_entry_point_6fec5723cc790927: k0,
      __wbg_set_fragment_1a595620425637e1: U0,
      __wbg_set_count_26a934d1cd07d080: s0,
      __wbg_set_mask_0c49a66362fc0079: wp,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: Gg,
      __wbg_set_multisample_85f073947b782d07: Ip,
      __wbg_set_cull_mode_9d466c1ab414cac8: i0,
      __wbg_set_front_face_50cdf4eb61504a46: H0,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: bw,
      __wbg_set_topology_beefb3aca0612b00: dw,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: ww,
      __wbg_set_primitive_369241acd17871f1: Cp,
      __wbg_createRenderPipeline_f48187ba9f7701e8: oi,
      __wbg_set_entries_3017e6132f938c6e: B0,
      __wbg_set_label_1175a3329a06e52b: Y0,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: Ns,
      __wbg_limits_1c25cb4f379a4418: Uu,
      __wbg_set_color_attachments_abe67f6631926e28: a0,
      __wbg_set_label_8fd860a36d2c7b74: _p,
      __wbg_set_view_dbd0294573f64d05: vw,
      __wbg_set_depth_clear_value_442bf492734f63b6: p0,
      __wbg_set_depth_load_op_34d430b74bb36d91: m0,
      __wbg_set_depth_store_op_0ea0a215313dbda7: v0,
      __wbg_set_depth_read_only_138a11b10c731094: y0,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: Yp,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: ew,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: rw,
      __wbg_set_stencil_read_only_fb489d191b6d969b: tw,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: $0,
      __wbg_set_query_set_18679a8580267d5a: Vp,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: Ng,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: F0,
      __wbg_set_timestamp_writes_c552d52fbb417005: uw,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: Gb,
      __wbg_copyTextureToTexture_1be188df1e535c0a: Ks,
      __wbg_label_47480289cc2bce71: Ou,
      __wbg_set_label_2d2227f4d5991e50: Z0,
      __wbg_finish_cfaeede3baf55be1: Sf,
      __wbg_finish_087cb89c65c06eb1: vf,
      __wbg_drawIndexed_68637ebab6dd8d6e: ff,
      __wbg_setPipeline_bab24dbce96903b9: Ag,
      __wbg_setViewport_f9d423db4f4b4b58: Tg,
      __wbg_setBindGroup_4ba56e1e0d26f244: xg,
      __wbg_setBindGroup_6124849cc8547086: $g,
      __wbg_setIndexBuffer_17431786d06c1b7c: vg,
      __wbg_setIndexBuffer_a16ed5b869c87507: Sg,
      __wbg_setVertexBuffer_b508baf8d0ffe331: Dg,
      __wbg_setVertexBuffer_91c4b602d0289943: Ig,
      __wbg_end_414453a89205612c: lf,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: Jf,
      __wbg_getCurrentTexture_51975ae7185fd15f: zf,
      __wbg_set_device_0d774b66e7288f72: A0,
      __wbg_set_format_d347899cd860709c: O0,
      __wbg_set_usage_ae014e77ff77ce06: yw,
      __wbg_set_alpha_mode_92402195b3ae1ee7: Eg,
      __wbg_set_view_formats_fe531a043efb71fa: Dw,
      __wbg_configure_3d64c677c7d68a15: Ws,
      __wbg_writeBuffer_b4bdd36178348ca5: x2,
      __wbg_set_bytes_per_row_91681ca78d744888: t0,
      __wbg_set_rows_per_image_d198b7e73a38978b: zp,
      __wbg_set_offset_a097a8050a3a9a33: Bp,
      __wbg_writeTexture_b45b69132e46a227: $2,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: zd,
      __wbg_submit_1290d44bb76ecef4: Yw,
      __wbg_getMappedRange_5ed22727c9679168: jf,
      __wbg_unmap_8f06698a75b8331a: c2,
      __wbg_destroy_b5b39f25f0799295: Ni,
      __wbg_mapAsync_bb0029907dd91181: Nu,
      __wbg_set_dimension_174ad7e2fb67fb4e: I0,
      __wbg_set_format_90860b0321868db4: E0,
      __wbg_set_aspect_a823a14d00d42d37: Ug,
      __wbg_set_base_array_layer_cc6c68d233489c4b: jg,
      __wbg_set_array_layer_count_daec613068108a9d: Og,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: Kg,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: xp,
      __wbg_set_label_03d2396d4655a3e1: Q0,
      __wbg_set_usage_7f0dda8309469b1c: lw,
      __wbg_createView_cc96b5bdd3d5bf5e: hi,
      __wbg_set_min_binding_size_689661b9ed25e083: mp,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: j0,
      __wbg_set_type_38961e08504ca674: gw,
      __wbg_requestAdapter_c46930b8bc33722d: ug,
      __wbg_set_alpha_aa2e606e9e647b21: Lg,
      __wbg_set_color_bc393d7efc3c8594: o0,
      __wbg_set_visibility_1bca121a89accba5: Tw,
      __wbg_set_storage_texture_ab9eed9786337ef0: ow,
      __wbg_set_external_texture_825fe2bc7a0c0603: R0,
      __wbg_set_binding_b6b0fe5c281b8c69: Qg,
      __wbg_set_buffer_e89095a9f0cafad3: e0,
      __wbg_set_sampler_8c5d7fb1b02058c6: qp,
      __wbg_set_texture_e25a73da75cf5808: fw,
      __wbg_set_view_dimension_263387976511ebc9: Sw,
      __wbg_set_format_1786adb7bc74c7c9: V0,
      __wbg_set_access_091f317905cd76a5: Mg,
      __wbg_set_format_abf7a1bc5425c56a: G0,
      __wbg_set_blend_8d6e9c08b5702a09: Yg,
      __wbg_set_write_mask_144b25e2bd909124: kw,
      __wbg_set_load_op_56844f51434037bf: fp,
      __wbg_set_store_op_caeede4654b3d847: cw,
      __wbg_set_view_bdeab150b5f0768c: $w,
      __wbg_set_clear_value_642701f928a5ccb3: r0,
      __wbg_set_resolve_target_fe76b3f99cf72078: Op,
      __wbg_set_buffer_55f096330c8912b4: Zg,
      __wbg_set_offset_73156b0e0b41d79a: Tp,
      __wbg_set_size_1e6281b07cd39177: Kp,
      __wbg_set_binding_f3c188a8cd21455b: Xg,
      __wbg_set_resource_fe385d2e3dadaf63: Wp,
      __wbg_set_format_6606f5c1fba6f459: L0,
      __wbg_set_offset_8d9d9afffa18b591: Fp,
      __wbg_set_shader_location_0ff30a733291a396: jp,
      __wbg_set_array_stride_c2c009eabc18b5f6: Wg,
      __wbg_set_attributes_05f9117fd32ca606: Hg,
      __wbg_set_step_mode_a35aef328761c452: aw,
      __wbg_set_type_c1eebc19f8a6aeb9: pw,
      __wbg_set_multisampled_40505c1381e1c32c: Dp,
      __wbg_set_sample_type_7088b1efddce6a69: Hp,
      __wbg_set_view_dimension_3ed01b237e85826f: Aw,
      __wbg_includes_83dff8d05da243c5: xu,
      __wbg_clearBufferuiv_1d2d93401c0904a3: vs,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: Ls,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: Gs,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: Os,
      __wbg_copyBufferSubData_a944f33b601b822d: Us,
      __wbg_clientWaitSync_7580165bd2eff461: Bs,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: Es,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: js,
      __wbg_createQuery_f013132b870a71ef: ai,
      __wbg_createSampler_9fe50152a2524319: ii,
      __wbg_createVertexArray_8685feb21901c932: mi,
      __wbg_deleteQuery_ef51ea0a52420103: Bi,
      __wbg_deleteSampler_5c045e0cc55813d4: Mi,
      __wbg_getIndexedParameter_2b18df6fca85f751: qf,
      __wbg_getQueryParameter_0599e85ddb81220b: eu,
      __wbg_getSyncParameter_9a2bda340ebe166f: cu,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: bu,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: Mu,
      __wbg_deleteSync_37ca83c429c43d8a: Vi,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: Oi,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: rf,
      __wbg_drawBuffers_558d96e52e754731: cf,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: sf,
      __wbg_endQuery_161170c5280a8293: wf,
      __wbg_fenceSync_56efc7cc79111e54: $f,
      __wbg_framebufferTextureLayer_2312acdc74f97676: kf,
      __wbg_getBufferSubData_92680d3a2f7be029: Lf,
      __wbg_readBuffer_361ec5474f3aae49: rg,
      __wbg_readPixels_5840000f3e22f3ce: ag,
      __wbg_readPixels_5bf204799ed2272f: og,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: cg,
      __wbg_texImage3D_8647ef58aef5b912: r1,
      __wbg_texStorage2D_ed5df596c5f1e3af: o1,
      __wbg_texStorage3D_160b0197bc190f04: c1,
      __wbg_texSubImage2D_f03448e182b0820d: p1,
      __wbg_texSubImage2D_d14d9c0a1f627c31: g1,
      __wbg_texSubImage2D_89866a04ecd0a76b: f1,
      __wbg_texSubImage2D_5c630043f1c56716: i1,
      __wbg_samplerParameterf_3157ba41c0f4d97a: wg,
      __wbg_samplerParameteri_f85a29156e790189: lg,
      __wbg_texImage2D_0e0f37b9fb297d01: Zw,
      __wbg_texImage2D_0e537dc331652de3: e1,
      __wbg_texImage3D_30dbf7234481b8f5: t1,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: s1,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: u1,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: d1,
      __wbg_texSubImage3D_933e4cd41cc5376d: y1,
      __wbg_texSubImage3D_c3538b28040daac9: $1,
      __wbg_uniform1ui_36c94692177ebf76: B1,
      __wbg_uniform2fv_17592f4dad9798fb: P1,
      __wbg_uniform2iv_d5d29ebbc466977d: R1,
      __wbg_texSubImage3D_0fdbd843482bb916: l1,
      __wbg_texSubImage3D_09a97a968b93253d: w1,
      __wbg_texSubImage3D_355efde0dc047913: m1,
      __wbg_texSubImage3D_bd32c8e29e470904: x1,
      __wbg_texSubImage3D_5a238709d114b609: h1,
      __wbg_uniform2uiv_418ba3bf6a230dd5: C1,
      __wbg_uniform4fv_9e670a001c77dca0: H1,
      __wbg_uniform4iv_1d57c6b8e5c0e447: q1,
      __wbg_uniform3fv_dbe44b778e6b89e8: L1,
      __wbg_uniform3iv_d75d3a5f86d54be4: G1,
      __wbg_uniform3uiv_71c1efc24a662de9: O1,
      __wbg_uniform4uiv_c5d45f5dbdae727a: K1,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: Z1,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: _2,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: t2,
      __wbg_uniformBlockBinding_829a71912ad79a04: N1,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: J1,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: X1,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: Y1,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: r2,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: d2,
      __wbg_activeTexture_525ee3068cb9e8d5: Mb,
      __wbg_attachShader_3477e67517b09b6b: Vb,
      __wbg_bindAttribLocation_79b5d26727094518: Ob,
      __wbg_bindBuffer_d3111de6861cb875: Ub,
      __wbg_bindFramebuffer_63e837a5dc0accfb: jb,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: Kb,
      __wbg_bindTexture_7ab28ff4ff3dc506: Qb,
      __wbg_blendColor_15f26633b646e542: es,
      __wbg_blendEquation_7dadb4db540a42da: ns,
      __wbg_blendEquationSeparate_8240ddfa32266109: ts,
      __wbg_blendFunc_b15af02643e188f1: ss,
      __wbg_blendFuncSeparate_456410f9919bed39: cs,
      __wbg_clear_dadcb3e2929388b0: Ts,
      __wbg_clearDepth_05c17028494ee4dd: Ss,
      __wbg_clearStencil_917833d1e2ac56e4: Ds,
      __wbg_colorMask_f111e3e5796458f4: Ms,
      __wbg_compileShader_f5625b583b2c9fd6: Rs,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: a2,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: o2,
      __wbg_vertexAttribDivisor_f17a8585267be92f: u2,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: Hs,
      __wbg_createBuffer_9f602b2dbcbf409c: Ys,
      __wbg_createFramebuffer_4a250944a4542bbc: ei,
      __wbg_createProgram_4c8164d471c10346: ri,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: bi,
      __wbg_createShader_9c5cd42709d915ff: di,
      __wbg_createTexture_3eed23cb87dd35fc: gi,
      __wbg_cullFace_94f24b4fd5e9038b: $i,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: Si,
      __wbg_getExtension_11824edd67a143d8: Hf,
      __wbg_getParameter_7f7f23cae98f2c81: Kf,
      __wbg_getProgramInfoLog_cd84be80942f345b: Xf,
      __wbg_getProgramParameter_039391d5ba319f50: Yf,
      __wbg_getShaderInfoLog_495bddda98172699: _u,
      __wbg_getShaderParameter_4eb65cfb174ceb22: ru,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: au,
      __wbg_getUniformLocation_ab63f569a4e41744: iu,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: Ii,
      __wbg_deleteProgram_eff668280dcb01ca: Fi,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: ki,
      __wbg_deleteShader_3339454254c7147c: Ri,
      __wbg_deleteTexture_c1c58550dc55af5c: Ei,
      __wbg_depthFunc_31b183b5b8ee478e: Wi,
      __wbg_depthMask_cab7f2ae7f0e559c: Hi,
      __wbg_depthRange_797a71ba3b79267a: qi,
      __wbg_disable_cb1b3e6c1cee5202: Zi,
      __wbg_disableVertexAttribArray_b395358ec5084c39: Xi,
      __wbg_drawArrays_42dbb4b0349c8f34: af,
      __wbg_enable_d1f42f78be33a553: pf,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: uf,
      __wbg_flush_7ae42f071230db6b: Af,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: Ff,
      __wbg_framebufferTexture2D_367ab597a005e8d9: Bf,
      __wbg_frontFace_9bdcf2a758e989e5: Rf,
      __wbg_linkProgram_e23a348b0f6e0c4f: ju,
      __wbg_pixelStorei_a78a504be58d1d0a: Hd,
      __wbg_polygonOffset_a4f07d97b9b0dced: jd,
      __wbg_renderbufferStorage_3049e13db5c4e60e: sg,
      __wbg_scissor_6c024669fbf4fe72: mg,
      __wbg_vertexAttribPointer_4e5d289c5d224210: p2,
      __wbg_viewport_a0ca330f9b85397e: w2,
      __wbg_shaderSource_66dce75b25a1a407: Lw,
      __wbg_stencilFuncSeparate_ec603976be9569a4: qw,
      __wbg_stencilMask_485dcb5965c79a71: Nw,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: Kw,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: Qw,
      __wbg_texParameteri_c6efffcecb474d2f: n1,
      __wbg_uniform1f_3acd3f3eb50b5e11: I1,
      __wbg_uniform1i_e4f13604354c28ae: F1,
      __wbg_uniform4f_a5008773cfb47d1a: z1,
      __wbg_useProgram_ab2ee2a13a1fd909: s2,
      __wbg_bufferSubData_2270f1b9db71e642: ps,
      __wbg_clearBufferfv_6b77b9402254a2bf: xs,
      __wbg_clearBufferiv_0f056544010eef3e: $s,
      __wbg_beginQuery_dad334d972fed3cc: Eb,
      __wbg_bindBufferRange_16a9d90becc2a7d7: zb,
      __wbg_bindSampler_3c7002cb6d56ae8f: Jb,
      __wbg_bindVertexArray_c391bd47303d75cd: Zb,
      __wbg_blitFramebuffer_ea96ada8bba07582: is,
      __wbg_bufferData_64e9905f2b3d3a6f: ds,
      __wbg_bufferData_99bbbc63f02251c4: gs,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: Pu,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: dg,
      __wbg_navigator_935098efd1dc7fe5: Dd,
      __wbg_devicePixelRatio_8e5ca44720abafec: Ji,
      __wbg_document_2634180a4c694068: ef,
      __wbg_instanceof_Window_0d356b88a2f77c42: ku,
      __wbg_hidden_cb32701ca3785fea: yu,
      __wbg_getElementById_c7aba6b93b34bf01: Uf,
      __wbg_querySelector_1f3658f4b48e268b: Zd,
      __wbg_querySelectorAll_ffda3c891a9eb29a: Yd,
      __wbg_hasAttribute_73e1230c9c107e79: lu,
      __wbg_setAttribute_8bccfbabf2a83682: yg,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: Vf,
      __wbg_focus_c80921c19b28520b: Df,
      __wbg_uniform2iv_c5e863975dd780d8: M1,
      __wbg_uniform3fv_7723e142be50856f: V1,
      __wbg_uniform3iv_bea3976522e15d48: E1,
      __wbg_uniform4fv_85ad5d23234895d2: U1,
      __wbg_clear_ff8cfdf420f7dde6: Fs,
      __wbg_clearDepth_ac6b54f112feeaf7: As,
      __wbg_clearStencil_56d6a6308294a749: Is,
      __wbg_colorMask_b0ab9d429a1efa0a: ks,
      __wbg_compileShader_fcf3f3d2891f73f9: Cs,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: qs,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: Qs,
      __wbg_createFramebuffer_ab73f30b5dc97415: _i,
      __wbg_createProgram_f11c63f59f41b82a: ni,
      __wbg_createRenderbuffer_556000dbb01f5026: ci,
      __wbg_createShader_27d9388313f3b14e: ui,
      __wbg_createTexture_8455c703424c567b: pi,
      __wbg_cullFace_774780fb4177aab8: xi,
      __wbg_deleteBuffer_d758283bea6e0ccf: Ai,
      __wbg_deleteFramebuffer_8953b325144192fe: Di,
      __wbg_deleteProgram_0135c6926e75af75: Ti,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: Pi,
      __wbg_deleteShader_79dbaaed69b7ca3b: Ci,
      __wbg_deleteTexture_3acb672a45f9998a: Li,
      __wbg_depthFunc_eaca1bc79f7bf216: zi,
      __wbg_depthMask_3a9074b08d1f68e5: Ui,
      __wbg_depthRange_c24a808b3496e0a9: ji,
      __wbg_uniform4iv_a9aaa92f2f458ec2: j1,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: Q1,
      __wbg_uniformMatrix3fv_da8c388748c5739b: e2,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: n2,
      __wbg_activeTexture_1d5359b20df41710: kb,
      __wbg_attachShader_683d1070365e7066: Lb,
      __wbg_bindAttribLocation_d56d3c40331af7ed: Wb,
      __wbg_bindBuffer_e95efaf0d4851845: Hb,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: qb,
      __wbg_bindRenderbuffer_d608b211c51ed147: Nb,
      __wbg_bindTexture_ffc56f1e5c5526c6: Xb,
      __wbg_blendColor_a0ba1cdcecc3a34c: _s,
      __wbg_blendEquation_8bfa69f639ae92da: as,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: rs,
      __wbg_blendFunc_713c504adab14f98: bs,
      __wbg_blendFuncSeparate_3eef699c291dbc87: os,
      __wbg_disable_4dca6ee0ccc91e4a: Yi,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: Qi,
      __wbg_drawArrays_10e1254aa4524ae9: nf,
      __wbg_enable_c6e523307311617a: gf,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: df,
      __wbg_flush_eb3fb8da2ec00d57: If,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: Tf,
      __wbg_linkProgram_6a2eee02a03b9b00: qu,
      __wbg_pixelStorei_55ad4c67b699537c: Ud,
      __wbg_polygonOffset_06dc6468c12a57e1: qd,
      __wbg_renderbufferStorage_2918fb696fd45663: bg,
      __wbg_scissor_f9696c630e464977: hg,
      __wbg_shaderSource_628c37a476ae65f9: Vw,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: Hw,
      __wbg_stencilMask_f9fe198f7fd6fc9c: Jw,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: jw,
      __wbg_stencilOpSeparate_6cf50803475d2640: Xw,
      __wbg_texParameteri_fe6210a493d48a16: a1,
      __wbg_framebufferTexture2D_3a558e14f56720d2: Pf,
      __wbg_frontFace_c9bb1fa659ffd276: Cf,
      __wbg_getParameter_91a344e1a84a4669: Nf,
      __wbg_getProgramInfoLog_35410850de9ccefe: Qf,
      __wbg_getProgramParameter_bbc667347ac2e882: Zf,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: tu,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: nu,
      __wbg_getUniformLocation_340155dc706d3fea: su,
      __wbg_uniform1f_d34e4b454f7c8e73: D1,
      __wbg_uniform1i_cd9a7f990128ea48: T1,
      __wbg_uniform4f_4410d2faaa7e5dda: W1,
      __wbg_useProgram_0e1cd86765304939: b2,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: g2,
      __wbg_viewport_b5bd46a0d111c83c: l2,
      __wbg_texSubImage2D_1b2ff28f994c325e: b1,
      __wbg_uniform2fv_39277cf2d3cb83c7: k1,
      __wbg_bufferData_5df9bdb32e189eee: us,
      __wbg_bufferData_26132561617ce8fb: fs,
      __wbg_bufferSubData_44db8a3b4a70b57d: ws,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: Vs,
      __wbg_readPixels_05377f8b6fa1d8eb: ng,
      __wbg_texImage2D_7bc3001cb8602ed2: _1,
      __wbg_navigator_017bc45e84c473cc: Id,
      __wbg_log_d282446d03691e72: Ku,
      __wbg_info_a392cd5b7536cfb5: vu,
      __wbg_warn_88c4a5bd9a322000: m2,
      __wbg_debug_7271beced8b71cd4: vi,
      __wbg_error_933f449d72fef598: yf,
      __wbg_error_50f60c611a3dcf64: hf,
      __wbg_set_width_031bdecd763c5855: Fw,
      __wbg_set_height_ad5056ea051acd78: K0,
      __wbg_getContext_486aab500e1c34c9: Gf,
      __wbg_getContext_9fd4db9b1cf155db: Wf,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: Du,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: of,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: ou,
      __wbg_width_a86bcd32bd998060: y2,
      __wbg_height_cd732bbdc7b66e49: mu,
      __wbg_queryCounterEXT_ebb00bcc96221671: Xd,
      __wbg_offsetX_0214819d43aaf6d5: Od,
      __wbg_offsetY_f18f571e33b385ab: Wd,
      __wbg_button_bb3285fcdf965178: ls,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: tf,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: bf,
      __wbg_get_37b48b8fa52d1f2c: uu,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: f2,
      __wbg_preventDefault_c047d3e292b08cc4: Kd,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: Mf,
      __wbg_width_08e66520b99071f4: h2,
      __wbg_height_e9afb506f31052a9: hu,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: Yb,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: li,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: Gi,
      __wbg_set_width_f9e631f4ee129e5c: Pw,
      __wbg_set_height_ef298446b359b0c5: J0,
      __wbg_getContext_70c2d1bed75d4122: Of,
      __wbg_getContext_422b32d0ee4b8076: Ef,
      __wbg_addEventListener_ea90bc131475777e: Rb,
      __wbg_contentRect_0fb8c8900d689a0c: zs,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: Fu,
      __wbg_new_1e52e3c919312525: Td,
      __wbg_observe_592b94857eed8e27: Ed,
      __wbg_altKey_7412dd64f8c921c7: Cb,
      __wbg_ctrlKey_00097886a21597a7: yi,
      __wbg_shiftKey_273ee8c901267b55: Ew,
      __wbg_metaKey_1c2847b62ad062c1: vd,
      __wbg_repeat_46a5c90df9f6ef0b: ig,
      __wbg_isComposing_e3709163a95a2477: Cu,
      __wbg_key_d6b3d2cce3d41872: Gu,
      __wbg_code_87bb99fdec02d313: Ps,
      __wbg_resolve_d82363d90af6928a: pg,
      __wbg_then_591b6b3a75ee817a: A1,
      __wbg_iterator_cc47ba25a2be735a: Eu,
      __wbg_get_9a29be2cb383ed9a: du,
      __wbg_next_402fa10b59ab20c3: Ld,
      __wbg_new_2e117a478906f062: Bd,
      __wbg_new_36e147a8ced3c6e0: Pd,
      __wbg_of_62183ea089c00bfa: Gd,
      __wbg_isArray_145a34fd0a38d37b: Ru,
      __wbg_new_e66a4b7758dd2e5c: Md,
      __wbg_isSafeInteger_a3389a198582f5f6: Vu,
      __wbg_is_de5b366c746e004c: Lu,
      __wbg_entries_c261c3fa1f281256: mf,
      __wbg_then_2a84678a50976959: S1,
      __wbg_length_589238bdcf171f0e: Wu,
      __wbg_prototypesetcall_d721637c7ca66eb8: Jd,
      __wbg_set_272b80acaf9a75e8: Fg,
      __wbg_new_81880fb5002cb255: kd,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: Cd,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: Ow,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: zw,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Ww,
      __wbg_static_accessor_WINDOW_168f178805d978fe: Uw,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: Su,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: Bu,
      __wbg_queueMicrotask_1c9b3800e321a967: eg,
      __wbg_queueMicrotask_311744e534a929a3: _g,
      __wbg_set_4564f7dc44fcb0c9: Bg,
      __wbg___wbindgen_number_get_1cc01dd708740256: Tb,
      __wbg___wbindgen_in_4990f46af709e33c: hb,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: Bb,
      __wbg___wbindgen_is_null_6d937fbfb6478470: $b,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: Ib,
      __wbg_Number_c4bdf66bb78f7977: ub,
      __wbg_Error_fdd633d4bb5dd76a: fb,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: yb,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: vb,
      __wbg___wbindgen_is_string_1fca8072260dd261: Sb,
      __wbg___wbindgen_string_get_71bb4348194e31f0: Fb,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: lb,
      __wbg___wbindgen_is_function_acc5528be2b923f2: xb,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: Ab,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: Db,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: wb,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: Pb,
      __wbg___wbindgen_debug_string_8a447059637473e2: mb,
      __wbindgen_init_externref_table: z2,
      __wbindgen_cast_0000000000000001: v2,
      __wbindgen_cast_0000000000000002: S2,
      __wbindgen_cast_0000000000000003: A2,
      __wbindgen_cast_0000000000000004: I2,
      __wbindgen_cast_0000000000000005: D2,
      __wbindgen_cast_0000000000000006: T2,
      __wbindgen_cast_0000000000000007: F2,
      __wbindgen_cast_0000000000000008: B2,
      __wbindgen_cast_0000000000000009: P2,
      __wbindgen_cast_000000000000000a: k2,
      __wbindgen_cast_000000000000000b: M2,
      __wbindgen_cast_000000000000000c: R2,
      __wbindgen_cast_000000000000000d: C2,
      __wbindgen_cast_000000000000000e: V2,
      __wbindgen_cast_000000000000000f: L2,
      __wbindgen_cast_0000000000000010: E2,
      __wbindgen_cast_0000000000000011: G2,
      __wbindgen_cast_0000000000000012: O2,
      __wbindgen_cast_0000000000000013: W2
    }
  }, sb), { memory: Dl, mount: Tl, __wbg_proteusapp_free: Fl, proteusapp_addChild: Bl, proteusapp_animateTo: Pl, proteusapp_bakeTexture: kl, proteusapp_bakedImageSize: Ml, proteusapp_bakedTextSize: Rl, proteusapp_bindKey: Cl, proteusapp_channelDestroy: Vl, proteusapp_channelSet: Ll, proteusapp_clearFocus: El, proteusapp_component: Gl, proteusapp_copyBakedImageFrom: Ol, proteusapp_createVideo: Wl, proteusapp_cropImage: zl, proteusapp_declareGeometry: Ul, proteusapp_declaredGeometry: Hl, proteusapp_destroy: ql, proteusapp_devices: jl, proteusapp_focus: Kl, proteusapp_focused: Nl, proteusapp_freeResources: Jl, proteusapp_get: Ql, proteusapp_hideVideo: Xl, proteusapp_inputDevices: Yl, proteusapp_inputMode: Zl, proteusapp_isFocused: e3, proteusapp_loadTexture: _3, proteusapp_mergeFrom: t3, proteusapp_mergeFromWithBehavior: r3, proteusapp_new: n3, proteusapp_onAppKey: a3, proteusapp_onBlur: o3, proteusapp_onClick: c3, proteusapp_onDrag: b3, proteusapp_onDropped: s3, proteusapp_onFocus: i3, proteusapp_onFocusLost: f3, proteusapp_onHoverEnter: u3, proteusapp_onHoverExit: d3, proteusapp_onKey: g3, proteusapp_onPress: p3, proteusapp_onRelease: w3, proteusapp_onTransitionComplete: l3, proteusapp_pointerLeft: m3, proteusapp_pointerMoved: h3, proteusapp_pointerPressed: y3, proteusapp_pointerReleased: x3, proteusapp_releaseVideo: $3, proteusapp_removeChild: v3, proteusapp_resetKeyMap: S3, proteusapp_setDeclaredGeometry: A3, proteusapp_setDefaultFocus: I3, proteusapp_setDevices: D3, proteusapp_setDisabled: T3, proteusapp_setFocusGroup: F3, proteusapp_setImage: B3, proteusapp_setInputDevices: P3, proteusapp_setInteractive: k3, proteusapp_setKeyRepeat: M3, proteusapp_setLongPressMs: R3, proteusapp_setNavigatingActions: C3, proteusapp_setNeighbour: V3, proteusapp_setOpacity: L3, proteusapp_setReadingDirection: E3, proteusapp_setStyleTransition: G3, proteusapp_setText: O3, proteusapp_setTexture: W3, proteusapp_setTransitionInteraction: z3, proteusapp_setVideoCrossfade: U3, proteusapp_setVisible: H3, proteusapp_showVideo: q3, proteusapp_splitTo: j3, proteusapp_splitToWithBehavior: K3, proteusapp_splitToWithStates: N3, proteusapp_texture: J3, proteusapp_textureState: Q3, proteusapp_tick: X3, proteusapp_transitionChannel: Y3, proteusapp_unbindKey: Z3, proteusapp_uploadVideoFrame: e4, __wbg_handle_free: _4, __wbg_texturehandle_free: t4, __wbg_transitionchannel_free: r4, __wbg_videohandle_free: n4, handle_fromId: a4, handle_id: o4, texturehandle_fromId: c4, texturehandle_id: b4, __abort_handler: s4, __instance_terminated: i4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: f4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: u4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: d4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: g4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: p4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: w4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: l4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: m4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: h4, __wbindgen_malloc: y4, __wbindgen_realloc: x4, __wbindgen_exn_store: $4, __externref_table_alloc: v4, __wbindgen_externrefs: S4, __wbindgen_free: A4, __wbindgen_destroy_closure: I4, __externref_table_dealloc: D4, __wbindgen_start: zt } = Il, T4 = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: s4,
    __externref_table_alloc: v4,
    __externref_table_dealloc: D4,
    __instance_terminated: i4,
    __wbg_handle_free: _4,
    __wbg_proteusapp_free: Fl,
    __wbg_texturehandle_free: t4,
    __wbg_transitionchannel_free: r4,
    __wbg_videohandle_free: n4,
    __wbindgen_destroy_closure: I4,
    __wbindgen_exn_store: $4,
    __wbindgen_externrefs: S4,
    __wbindgen_free: A4,
    __wbindgen_malloc: y4,
    __wbindgen_realloc: x4,
    __wbindgen_start: zt,
    handle_fromId: a4,
    handle_id: o4,
    memory: Dl,
    mount: Tl,
    proteusapp_addChild: Bl,
    proteusapp_animateTo: Pl,
    proteusapp_bakeTexture: kl,
    proteusapp_bakedImageSize: Ml,
    proteusapp_bakedTextSize: Rl,
    proteusapp_bindKey: Cl,
    proteusapp_channelDestroy: Vl,
    proteusapp_channelSet: Ll,
    proteusapp_clearFocus: El,
    proteusapp_component: Gl,
    proteusapp_copyBakedImageFrom: Ol,
    proteusapp_createVideo: Wl,
    proteusapp_cropImage: zl,
    proteusapp_declareGeometry: Ul,
    proteusapp_declaredGeometry: Hl,
    proteusapp_destroy: ql,
    proteusapp_devices: jl,
    proteusapp_focus: Kl,
    proteusapp_focused: Nl,
    proteusapp_freeResources: Jl,
    proteusapp_get: Ql,
    proteusapp_hideVideo: Xl,
    proteusapp_inputDevices: Yl,
    proteusapp_inputMode: Zl,
    proteusapp_isFocused: e3,
    proteusapp_loadTexture: _3,
    proteusapp_mergeFrom: t3,
    proteusapp_mergeFromWithBehavior: r3,
    proteusapp_new: n3,
    proteusapp_onAppKey: a3,
    proteusapp_onBlur: o3,
    proteusapp_onClick: c3,
    proteusapp_onDrag: b3,
    proteusapp_onDropped: s3,
    proteusapp_onFocus: i3,
    proteusapp_onFocusLost: f3,
    proteusapp_onHoverEnter: u3,
    proteusapp_onHoverExit: d3,
    proteusapp_onKey: g3,
    proteusapp_onPress: p3,
    proteusapp_onRelease: w3,
    proteusapp_onTransitionComplete: l3,
    proteusapp_pointerLeft: m3,
    proteusapp_pointerMoved: h3,
    proteusapp_pointerPressed: y3,
    proteusapp_pointerReleased: x3,
    proteusapp_releaseVideo: $3,
    proteusapp_removeChild: v3,
    proteusapp_resetKeyMap: S3,
    proteusapp_setDeclaredGeometry: A3,
    proteusapp_setDefaultFocus: I3,
    proteusapp_setDevices: D3,
    proteusapp_setDisabled: T3,
    proteusapp_setFocusGroup: F3,
    proteusapp_setImage: B3,
    proteusapp_setInputDevices: P3,
    proteusapp_setInteractive: k3,
    proteusapp_setKeyRepeat: M3,
    proteusapp_setLongPressMs: R3,
    proteusapp_setNavigatingActions: C3,
    proteusapp_setNeighbour: V3,
    proteusapp_setOpacity: L3,
    proteusapp_setReadingDirection: E3,
    proteusapp_setStyleTransition: G3,
    proteusapp_setText: O3,
    proteusapp_setTexture: W3,
    proteusapp_setTransitionInteraction: z3,
    proteusapp_setVideoCrossfade: U3,
    proteusapp_setVisible: H3,
    proteusapp_showVideo: q3,
    proteusapp_splitTo: j3,
    proteusapp_splitToWithBehavior: K3,
    proteusapp_splitToWithStates: N3,
    proteusapp_texture: J3,
    proteusapp_textureState: Q3,
    proteusapp_tick: X3,
    proteusapp_transitionChannel: Y3,
    proteusapp_unbindKey: Z3,
    proteusapp_uploadVideoFrame: e4,
    texturehandle_fromId: c4,
    texturehandle_id: b4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: h4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: f4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: p4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: w4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: l4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: m4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: d4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: g4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: u4
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Al(T4);
  zt();
  async function F4(_, e) {
    await ib(_, (t) => e.setup(new k4(t)), e.update ? (t) => {
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
  }, B4 = class {
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
  }, P4 = class {
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
  }, k4 = class {
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
      return new B4(this, this.wasmApp.transitionChannel(e == null ? void 0 : e.id()));
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
      return new P4(this, this.wasmApp.createVideo());
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
  const M4 = "" + new URL("proteus_bench_web_bg-CC__natp.wasm", import.meta.url).href;
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
      const a = h_(r, s.__wbindgen_malloc), o = k, c = s.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, o, n);
      return K.__wrap(c);
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
      const o = s.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (o[1]) throw F(o[0]);
    }
    clearFocus() {
      s.proteusapp_clearFocus(this.__wbg_ptr);
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
      const a = t_(t, s.__wbindgen_malloc), o = k, c = s.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw F(c[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      w(e, m);
      const o = t_(t, s.__wbindgen_malloc), c = k, b = s.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
      if (b[1]) throw F(b[0]);
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
      const t = sA(e, s.__wbindgen_malloc), r = k;
      s.proteusapp_setNavigatingActions(this.__wbg_ptr, t, r);
    }
    setNeighbour(e, t, r) {
      w(e, m);
      const n = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k, o = s.proteusapp_setNeighbour(this.__wbg_ptr, e.__wbg_ptr, n, a, !v(r), v(r) ? 0 : r);
      if (o[1]) throw F(o[0]);
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
      const a = t_(t, s.__wbindgen_malloc), o = k, c = s.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw F(c[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      w(e, m);
      const o = t_(t, s.__wbindgen_malloc), c = k, b = s.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
      if (b[1]) throw F(b[0]);
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
      const a = h_(n, s.__wbindgen_malloc), o = k;
      return s.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, o) !== 0;
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
  function R4() {
    s.clear();
  }
  function C4(_) {
    s.on_frame(_);
  }
  function V4(_, e) {
    const t = O(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = k;
    s.show(t, r, e);
  }
  function L4(_, e) {
    const t = O(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = k;
    return s.start(t, r, e);
  }
  function E4() {
    s.stop_frames();
  }
  function G4(_, e) {
    return Error(S(_, e));
  }
  function O4(_) {
    return Number(_);
  }
  function W4(_, e) {
    const t = String(e), r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function z4(_) {
    return _.Window;
  }
  function U4(_) {
    return _.WorkerGlobalScope;
  }
  function H4(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    M().setBigInt64(_ + 8, v(r) ? BigInt(0) : r, true), M().setInt32(_ + 0, !v(r), true);
  }
  function q4(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return v(t) ? 16777215 : t ? 1 : 0;
  }
  function j4(_, e) {
    const t = R_(e), r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function K4(_, e) {
    return _ in e;
  }
  function N4(_) {
    return typeof _ == "bigint";
  }
  function J4(_) {
    return typeof _ == "function";
  }
  function Q4(_) {
    return _ === null;
  }
  function X4(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function Y4(_) {
    return typeof _ == "string";
  }
  function Z4(_) {
    return _ === void 0;
  }
  function em(_, e) {
    return _ === e;
  }
  function _m(_, e) {
    return _ == e;
  }
  function tm(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    M().setFloat64(_ + 8, v(r) ? 0 : r, true), M().setInt32(_ + 0, !v(r), true);
  }
  function rm(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = v(r) ? 0 : O(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function nm(_, e) {
    throw new Error(S(_, e));
  }
  function am(_) {
    _._wbg_cb_unref();
  }
  function om(_) {
    _.abort();
  }
  function cm(_) {
    return _.aborted;
  }
  function bm(_, e) {
    _.activeTexture(e >>> 0);
  }
  function sm(_, e) {
    _.activeTexture(e >>> 0);
  }
  function im() {
    return l(function(_, e, t, r) {
      _.addEventListener(S(e, t), r);
    }, arguments);
  }
  function fm(_) {
    return _.altKey;
  }
  function um() {
    return l(function(_) {
      return _.arrayBuffer();
    }, arguments);
  }
  function dm(_, e, t) {
    _.attachShader(e, t);
  }
  function gm(_, e, t) {
    _.attachShader(e, t);
  }
  function pm(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function wm() {
    return l(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function lm(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function mm(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function hm(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function ym(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function xm(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function $m(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function vm(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function Sm(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Am(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Im(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function Dm(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Tm(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Fm(_, e) {
    _.bindVertexArrayOES(e);
  }
  function Bm(_, e) {
    _.bindVertexArray(e);
  }
  function Pm(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function km(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Mm(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Rm(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Cm(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Vm(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Lm(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Em(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Gm(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function Om(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function Wm(_, e, t, r, n, a, o, c, b, f, d) {
    _.blitFramebuffer(e, t, r, n, a, o, c, b, f >>> 0, d >>> 0);
  }
  function zm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Um(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Hm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function qm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function jm(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function Km(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function Nm(_) {
    return _.button;
  }
  function Jm() {
    return l(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function Qm() {
    return l(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Xm() {
    return l(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function Ym(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, G(r, n));
  }
  function Zm(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, ee(r, n));
  }
  function e7(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, Se(r, n));
  }
  function _7(_, e) {
    _.clearDepth(e);
  }
  function t7(_, e) {
    _.clearDepth(e);
  }
  function r7(_, e) {
    _.clearStencil(e);
  }
  function n7(_, e) {
    _.clearStencil(e);
  }
  function a7(_, e) {
    _.clear(e >>> 0);
  }
  function o7(_, e) {
    _.clear(e >>> 0);
  }
  function c7(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function b7(_, e) {
    const t = e.code, r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function s7(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function i7(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function f7(_, e) {
    _.compileShader(e);
  }
  function u7(_, e) {
    _.compileShader(e);
  }
  function d7(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function g7(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function p7(_, e, t, r, n, a, o, c, b, f) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b, f);
  }
  function w7(_, e, t, r, n, a, o, c, b, f, d, I) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d, I);
  }
  function l7(_, e, t, r, n, a, o, c, b, f, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d);
  }
  function m7() {
    return l(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function h7(_) {
    return _.contentRect;
  }
  function y7(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function x7(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function $7(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function v7(_, e, t, r, n, a, o, c, b, f) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f);
  }
  function S7() {
    return l(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function A7() {
    return l(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function I7(_, e) {
    return _.createBindGroup(e);
  }
  function D7(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : P(e);
  }
  function T7() {
    return l(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function F7(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : P(e);
  }
  function B7(_, e) {
    return _.createCommandEncoder(e);
  }
  function P7(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : P(e);
  }
  function k7(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : P(e);
  }
  function M7(_, e) {
    return _.createPipelineLayout(e);
  }
  function R7(_) {
    const e = _.createProgram();
    return v(e) ? 0 : P(e);
  }
  function C7(_) {
    const e = _.createProgram();
    return v(e) ? 0 : P(e);
  }
  function V7(_) {
    const e = _.createQuery();
    return v(e) ? 0 : P(e);
  }
  function L7() {
    return l(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function E7(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : P(e);
  }
  function G7(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : P(e);
  }
  function O7(_, e) {
    return _.createSampler(e);
  }
  function W7(_) {
    const e = _.createSampler();
    return v(e) ? 0 : P(e);
  }
  function z7(_, e) {
    return _.createShaderModule(e);
  }
  function U7(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : P(t);
  }
  function H7(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : P(t);
  }
  function q7(_) {
    const e = _.createTexture();
    return v(e) ? 0 : P(e);
  }
  function j7(_) {
    const e = _.createTexture();
    return v(e) ? 0 : P(e);
  }
  function K7() {
    return l(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function N7(_) {
    const e = _.createVertexArrayOES();
    return v(e) ? 0 : P(e);
  }
  function J7(_) {
    const e = _.createVertexArray();
    return v(e) ? 0 : P(e);
  }
  function Q7() {
    return l(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function X7(_) {
    return _.ctrlKey;
  }
  function Y7(_, e) {
    _.cullFace(e >>> 0);
  }
  function Z7(_, e) {
    _.cullFace(e >>> 0);
  }
  function e6(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function _6(_, e) {
    _.deleteBuffer(e);
  }
  function t6(_, e) {
    _.deleteBuffer(e);
  }
  function r6(_, e) {
    _.deleteFramebuffer(e);
  }
  function n6(_, e) {
    _.deleteFramebuffer(e);
  }
  function a6(_, e) {
    _.deleteProgram(e);
  }
  function o6(_, e) {
    _.deleteProgram(e);
  }
  function c6(_, e) {
    _.deleteQuery(e);
  }
  function b6(_, e) {
    _.deleteRenderbuffer(e);
  }
  function s6(_, e) {
    _.deleteRenderbuffer(e);
  }
  function i6(_, e) {
    _.deleteSampler(e);
  }
  function f6(_, e) {
    _.deleteShader(e);
  }
  function u6(_, e) {
    _.deleteShader(e);
  }
  function d6(_, e) {
    _.deleteSync(e);
  }
  function g6(_, e) {
    _.deleteTexture(e);
  }
  function p6(_, e) {
    _.deleteTexture(e);
  }
  function w6(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function l6(_, e) {
    _.deleteVertexArray(e);
  }
  function m6(_, e) {
    _.depthFunc(e >>> 0);
  }
  function h6(_, e) {
    _.depthFunc(e >>> 0);
  }
  function y6(_, e) {
    _.depthMask(e !== 0);
  }
  function x6(_, e) {
    _.depthMask(e !== 0);
  }
  function $6(_, e, t) {
    _.depthRange(e, t);
  }
  function v6(_, e, t) {
    _.depthRange(e, t);
  }
  function S6(_, e) {
    const t = e.description, r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function A6(_) {
    _.destroy();
  }
  function I6(_) {
    return _.devicePixelRatio;
  }
  function D6(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function T6(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function F6(_, e) {
    _.disable(e >>> 0);
  }
  function B6(_, e) {
    _.disable(e >>> 0);
  }
  function P6(_) {
    const e = _.document;
    return v(e) ? 0 : P(e);
  }
  function k6(_) {
    return _.done;
  }
  function M6(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function R6(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function C6(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function V6(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function L6(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function E6(_, e) {
    _.drawBuffers(e);
  }
  function G6(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function O6(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function W6(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function z6(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function U6(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function H6(_, e) {
    _.enable(e >>> 0);
  }
  function q6(_, e) {
    _.enable(e >>> 0);
  }
  function j6(_, e) {
    _.endQuery(e >>> 0);
  }
  function K6(_) {
    _.end();
  }
  function N6(_) {
    return Object.entries(_);
  }
  function J6(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function Q6(_) {
    console.error(_);
  }
  function X6(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(S(_, e));
    } finally {
      s.__wbindgen_free(t, r, 1);
    }
  }
  function Y6(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return v(r) ? 0 : P(r);
  }
  function Z6(_, e, t) {
    return _.fetch(S(e, t));
  }
  function e8(_, e, t, r) {
    return _.fetch(S(e, t), r);
  }
  function _8(_) {
    return _.finish();
  }
  function t8(_, e) {
    return _.finish(e);
  }
  function r8(_) {
    _.flush();
  }
  function n8(_) {
    _.flush();
  }
  function a8() {
    return l(function(_) {
      _.focus();
    }, arguments);
  }
  function o8(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function c8(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function b8(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function s8(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function i8(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function f8(_, e, t, r, n, a, o) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, o);
  }
  function u8(_, e) {
    _.frontFace(e >>> 0);
  }
  function d8(_, e) {
    _.frontFace(e >>> 0);
  }
  function g8(_) {
    return _.getBoundingClientRect();
  }
  function p8(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function w8() {
    return l(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : P(n);
    }, arguments);
  }
  function l8() {
    return l(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : P(r);
    }, arguments);
  }
  function m8() {
    return l(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : P(r);
    }, arguments);
  }
  function h8() {
    return l(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : P(n);
    }, arguments);
  }
  function y8() {
    return l(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function x8(_, e, t) {
    const r = _.getElementById(S(e, t));
    return v(r) ? 0 : P(r);
  }
  function $8() {
    return l(function(_, e, t) {
      const r = _.getExtension(S(e, t));
      return v(r) ? 0 : P(r);
    }, arguments);
  }
  function v8() {
    return l(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function S8() {
    return l(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function A8() {
    return l(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function I8() {
    return l(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function D8(_) {
    const e = _.getPreferredCanvasFormat();
    return (be.indexOf(e) + 1 || 96) - 1;
  }
  function T8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : O(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function F8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : O(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function B8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function P8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function k8(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function M8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : O(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function R8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : O(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function C8(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function V8(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function L8(_) {
    const e = _.getSupportedExtensions();
    return v(e) ? 0 : P(e);
  }
  function E8(_) {
    const e = _.getSupportedProfiles();
    return v(e) ? 0 : P(e);
  }
  function G8(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function O8(_, e, t, r) {
    return _.getUniformBlockIndex(e, S(t, r));
  }
  function W8(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : P(n);
  }
  function z8(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : P(n);
  }
  function U8(_, e) {
    return _[e >>> 0];
  }
  function H8(_, e) {
    const t = _[e >>> 0];
    return v(t) ? 0 : P(t);
  }
  function q8() {
    return l(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function j8(_, e) {
    return _[e >>> 0];
  }
  function K8(_, e) {
    return _[e];
  }
  function N8(_) {
    return _.gpu;
  }
  function J8(_, e, t) {
    return _.hasAttribute(S(e, t));
  }
  function Q8(_) {
    return _.height;
  }
  function X8(_) {
    return _.height;
  }
  function Y8(_) {
    return _.hidden;
  }
  function Z8(_, e, t) {
    return _.includes(e, t);
  }
  function e5(_) {
    return _.info;
  }
  function _5(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function t5(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function r5(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function n5(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function a5(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function o5(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function c5(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function b5(_) {
    let e;
    try {
      e = _ instanceof Response;
    } catch {
      e = false;
    }
    return e;
  }
  function s5(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function i5(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function f5(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function u5() {
    return l(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function d5(_) {
    return Array.isArray(_);
  }
  function g5(_) {
    return _.isComposing;
  }
  function p5(_) {
    return Number.isSafeInteger(_);
  }
  function w5(_, e) {
    return Object.is(_, e);
  }
  function l5() {
    return Symbol.iterator;
  }
  function m5(_, e) {
    const t = e.key, r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function h5(_, e) {
    const t = e.label, r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function y5(_) {
    return _.length;
  }
  function x5(_) {
    return _.length;
  }
  function $5(_) {
    return _.limits;
  }
  function v5(_) {
    return _.limits;
  }
  function S5(_, e) {
    _.linkProgram(e);
  }
  function A5(_, e) {
    _.linkProgram(e);
  }
  function I5(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function D5(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function T5(_) {
    return _.maxBindGroups;
  }
  function F5(_) {
    return _.maxBindingsPerBindGroup;
  }
  function B5(_) {
    return _.maxBufferSize;
  }
  function P5(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function k5(_) {
    return _.maxColorAttachments;
  }
  function M5(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function R5(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function C5(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function V5(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function L5(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function E5(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function G5(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function O5(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function W5(_) {
    return _.maxInterStageShaderVariables;
  }
  function z5(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function U5(_) {
    return _.maxSamplersPerShaderStage;
  }
  function H5(_) {
    return _.maxStorageBufferBindingSize;
  }
  function q5(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function j5(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function K5(_) {
    return _.maxTextureArrayLayers;
  }
  function N5(_) {
    return _.maxTextureDimension1D;
  }
  function J5(_) {
    return _.maxTextureDimension2D;
  }
  function Q5(_) {
    return _.maxTextureDimension3D;
  }
  function X5(_) {
    return _.maxUniformBufferBindingSize;
  }
  function Y5(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function Z5(_) {
    return _.maxVertexAttributes;
  }
  function e9(_) {
    return _.maxVertexBufferArrayStride;
  }
  function _9(_) {
    return _.maxVertexBuffers;
  }
  function t9(_) {
    return _.metaKey;
  }
  function r9(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function n9(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function a9(_) {
    return _.navigator;
  }
  function o9(_) {
    return _.navigator;
  }
  function c9() {
    return l(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function b9() {
    return new Error();
  }
  function s9() {
    return new Object();
  }
  function i9() {
    return new Array();
  }
  function f9() {
    return l(function() {
      return new AbortController();
    }, arguments);
  }
  function u9(_) {
    return new Uint8Array(_);
  }
  function d9(_, e) {
    return new Error(S(_, e));
  }
  function g9(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, o) => {
        const c = t.a;
        t.a = 0;
        try {
          return LS(c, t.b, a, o);
        } finally {
          t.a = c;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function p9(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function w9() {
    return l(function(_) {
      return _.next();
    }, arguments);
  }
  function l9(_) {
    return _.next;
  }
  function m9(_) {
    return _.now();
  }
  function h9(_, e) {
    _.observe(e);
  }
  function y9(_) {
    return Array.of(_);
  }
  function x9(_) {
    return _.offsetX;
  }
  function $9(_) {
    return _.offsetY;
  }
  function v9(_) {
    return _.ok;
  }
  function S9(_) {
    return _.onSubmittedWorkDone();
  }
  function A9(_) {
    const e = _.performance;
    return v(e) ? 0 : P(e);
  }
  function I9(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function D9(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function T9(_, e, t) {
    _.polygonOffset(e, t);
  }
  function F9(_, e, t) {
    _.polygonOffset(e, t);
  }
  function B9(_) {
    _.preventDefault();
  }
  function P9(_) {
    return Fe.__wrap(_);
  }
  function k9(_, e, t) {
    Uint8Array.prototype.set.call(i_(_, e), t);
  }
  function M9(_, e) {
    return _.push(e);
  }
  function R9(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function C9() {
    return l(function(_, e, t) {
      return _.querySelectorAll(S(e, t));
    }, arguments);
  }
  function V9() {
    return l(function(_, e, t) {
      const r = _.querySelector(S(e, t));
      return v(r) ? 0 : P(r);
    }, arguments);
  }
  function L9(_) {
    return _.queueMicrotask;
  }
  function E9(_) {
    queueMicrotask(_);
  }
  function G9(_) {
    return _.queue;
  }
  function O9(_, e) {
    _.readBuffer(e >>> 0);
  }
  function W9() {
    return l(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function z9() {
    return l(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function U9() {
    return l(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function H9(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function q9(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function j9(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function K9(_) {
    return _.repeat;
  }
  function N9(_, e) {
    return _.requestAdapter(e);
  }
  function J9(_) {
    return _.requestAdapter();
  }
  function Q9() {
    return l(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function X9(_, e) {
    return _.requestDevice(e);
  }
  function Y9(_) {
    return Promise.resolve(_);
  }
  function Z9(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function eh(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function _h(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function th(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function rh() {
    return l(function(_, e, t, r, n) {
      _.setAttribute(S(e, t), S(r, n));
    }, arguments);
  }
  function nh() {
    return l(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, Se(r, n), a, o >>> 0);
    }, arguments);
  }
  function ah(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function oh(_, e, t, r, n) {
    _.setIndexBuffer(e, Y_[t], r, n);
  }
  function ch(_, e, t, r) {
    _.setIndexBuffer(e, Y_[t], r);
  }
  function bh(_, e) {
    _.setPipeline(e);
  }
  function sh(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function ih(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function fh(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
  }
  function uh(_, e, t) {
    _.set(e, t >>> 0);
  }
  function dh() {
    return l(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function gh(_, e, t) {
    _[e] = t;
  }
  function ph(_, e) {
    _.a = e;
  }
  function wh(_, e) {
    _.access = NS[e];
  }
  function lh(_, e) {
    _.addressModeU = Q_[e];
  }
  function mh(_, e) {
    _.addressModeV = Q_[e];
  }
  function hh(_, e) {
    _.addressModeW = Q_[e];
  }
  function yh(_, e) {
    _.alpha = e;
  }
  function xh(_, e) {
    _.alphaMode = WS[e];
  }
  function $h(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function vh(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function Sh(_, e) {
    _.arrayStride = e;
  }
  function Ah(_, e) {
    _.aspect = qt[e];
  }
  function Ih(_, e) {
    _.aspect = qt[e];
  }
  function Dh(_, e) {
    _.attributes = e;
  }
  function Th(_, e) {
    _.b = e;
  }
  function Fh(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function Bh(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function Ph(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function kh(_, e) {
    _.bindGroupLayouts = e;
  }
  function Mh(_, e) {
    _.binding = e >>> 0;
  }
  function Rh(_, e) {
    _.binding = e >>> 0;
  }
  function Ch(_, e) {
    _.blend = e;
  }
  function Vh(_, e) {
    _.buffer = e;
  }
  function Lh(_, e) {
    _.buffer = e;
  }
  function Eh(_, e) {
    _.buffers = e;
  }
  function Gh(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function Oh(_, e) {
    _.clearValue = e;
  }
  function Wh(_, e, t) {
    _.code = S(e, t);
  }
  function zh(_, e) {
    _.colorAttachments = e;
  }
  function Uh(_, e) {
    _.color = e;
  }
  function Hh(_, e) {
    _.compare = X_[e];
  }
  function qh(_, e) {
    _.compare = X_[e];
  }
  function jh(_, e) {
    _.count = e >>> 0;
  }
  function Kh(_, e) {
    _.cullMode = zS[e];
  }
  function Nh(_, e, t) {
    _[e >>> 0] = t;
  }
  function Jh(_, e) {
    _.depthBias = e;
  }
  function Qh(_, e) {
    _.depthBiasClamp = e;
  }
  function Xh(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function Yh(_, e) {
    _.depthClearValue = e;
  }
  function Zh(_, e) {
    _.depthCompare = X_[e];
  }
  function ey(_, e) {
    _.depthFailOp = et[e];
  }
  function _y(_, e) {
    _.depthLoadOp = Z_[e];
  }
  function ty(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function ry(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function ny(_, e) {
    _.depthStencil = e;
  }
  function ay(_, e) {
    _.depthStencilAttachment = e;
  }
  function oy(_, e) {
    _.depthStoreOp = _t[e];
  }
  function cy(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function by(_, e) {
    _.device = e;
  }
  function sy(_, e) {
    _.dimension = tt[e];
  }
  function iy(_, e) {
    _.dimension = JS[e];
  }
  function fy(_, e) {
    _.dstFactor = Ut[e];
  }
  function uy(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function dy(_, e) {
    _.entries = e;
  }
  function gy(_, e) {
    _.entries = e;
  }
  function py(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function wy(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function ly(_, e) {
    _.externalTexture = e;
  }
  function my(_, e) {
    _.failOp = et[e];
  }
  function hy(_, e) {
    _.format = be[e];
  }
  function yy(_, e) {
    _.format = XS[e];
  }
  function xy(_, e) {
    _.format = be[e];
  }
  function $y(_, e) {
    _.format = be[e];
  }
  function vy(_, e) {
    _.format = be[e];
  }
  function Sy(_, e) {
    _.format = be[e];
  }
  function Ay(_, e) {
    _.format = be[e];
  }
  function Iy(_, e) {
    _.fragment = e;
  }
  function Dy(_, e) {
    _.frontFace = US[e];
  }
  function Ty(_, e) {
    _.g = e;
  }
  function Fy(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function By(_, e) {
    _.height = e >>> 0;
  }
  function Py(_, e) {
    _.height = e >>> 0;
  }
  function ky(_, e) {
    _.height = e >>> 0;
  }
  function My(_, e, t) {
    _.label = S(e, t);
  }
  function Ry(_, e, t) {
    _.label = S(e, t);
  }
  function Cy(_, e, t) {
    _.label = S(e, t);
  }
  function Vy(_, e, t) {
    _.label = S(e, t);
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
  function jy(_, e) {
    _.layout = e;
  }
  function Ky(_, e) {
    _.layout = e;
  }
  function Ny(_, e) {
    _.loadOp = Z_[e];
  }
  function Jy(_, e) {
    _.lodMaxClamp = e;
  }
  function Qy(_, e) {
    _.lodMinClamp = e;
  }
  function Xy(_, e) {
    _.magFilter = Ht[e];
  }
  function Yy(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function Zy(_, e) {
    _.mask = e >>> 0;
  }
  function ex(_, e) {
    _.maxAnisotropy = e;
  }
  function _x(_, e) {
    _.minBindingSize = e;
  }
  function tx(_, e) {
    _.minFilter = Ht[e];
  }
  function rx(_, e) {
    _.mipLevel = e >>> 0;
  }
  function nx(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function ax(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function ox(_, e) {
    _.mipmapFilter = HS[e];
  }
  function cx(_, e) {
    _.module = e;
  }
  function bx(_, e) {
    _.module = e;
  }
  function sx(_, e) {
    _.multisample = e;
  }
  function ix(_, e) {
    _.multisampled = e !== 0;
  }
  function fx(_, e) {
    _.offset = e;
  }
  function ux(_, e) {
    _.offset = e;
  }
  function dx(_, e) {
    _.offset = e;
  }
  function gx(_, e) {
    _.operation = GS[e];
  }
  function px(_, e) {
    _.origin = e;
  }
  function wx(_, e) {
    _.passOp = et[e];
  }
  function lx(_, e) {
    _.powerPreference = qS[e];
  }
  function mx(_, e) {
    _.primitive = e;
  }
  function hx(_, e) {
    _.querySet = e;
  }
  function yx(_, e) {
    _.r = e;
  }
  function xx(_, e) {
    _.requiredFeatures = e;
  }
  function $x(_, e) {
    _.requiredLimits = e;
  }
  function vx(_, e) {
    _.resolveTarget = e;
  }
  function Sx(_, e) {
    _.resource = e;
  }
  function Ax(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function Ix(_, e) {
    _.sampleCount = e >>> 0;
  }
  function Dx(_, e) {
    _.sampleType = QS[e];
  }
  function Tx(_, e) {
    _.sampler = e;
  }
  function Fx(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function Bx(_, e) {
    _.signal = e;
  }
  function Px(_, e) {
    _.size = e;
  }
  function kx(_, e) {
    _.size = e;
  }
  function Mx(_, e) {
    _.size = e;
  }
  function Rx(_, e) {
    _.srcFactor = Ut[e];
  }
  function Cx(_, e) {
    _.stencilBack = e;
  }
  function Vx(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function Lx(_, e) {
    _.stencilFront = e;
  }
  function Ex(_, e) {
    _.stencilLoadOp = Z_[e];
  }
  function Gx(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function Ox(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function Wx(_, e) {
    _.stencilStoreOp = _t[e];
  }
  function zx(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function Ux(_, e) {
    _.stepMode = YS[e];
  }
  function Hx(_, e) {
    _.storageTexture = e;
  }
  function qx(_, e) {
    _.storeOp = _t[e];
  }
  function jx(_, e) {
    _.stripIndexFormat = Y_[e];
  }
  function Kx(_, e) {
    _.targets = e;
  }
  function Nx(_, e) {
    _.texture = e;
  }
  function Jx(_, e) {
    _.texture = e;
  }
  function Qx(_, e) {
    _.timestampWrites = e;
  }
  function Xx(_, e) {
    _.topology = jS[e];
  }
  function Yx(_, e) {
    _.type = OS[e];
  }
  function Zx(_, e) {
    _.type = KS[e];
  }
  function e$(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function _$(_, e) {
    _.usage = e >>> 0;
  }
  function t$(_, e) {
    _.usage = e >>> 0;
  }
  function r$(_, e) {
    _.usage = e >>> 0;
  }
  function n$(_, e) {
    _.usage = e >>> 0;
  }
  function a$(_, e) {
    _.vertex = e;
  }
  function o$(_, e) {
    _.view = e;
  }
  function c$(_, e) {
    _.view = e;
  }
  function b$(_, e) {
    _.viewDimension = tt[e];
  }
  function s$(_, e) {
    _.viewDimension = tt[e];
  }
  function i$(_, e) {
    _.viewFormats = e;
  }
  function f$(_, e) {
    _.viewFormats = e;
  }
  function u$(_, e) {
    _.visibility = e >>> 0;
  }
  function d$(_, e) {
    _.width = e >>> 0;
  }
  function g$(_, e) {
    _.width = e >>> 0;
  }
  function p$(_, e) {
    _.width = e >>> 0;
  }
  function w$(_, e) {
    _.writeMask = e >>> 0;
  }
  function l$(_, e) {
    _.x = e >>> 0;
  }
  function m$(_, e) {
    _.y = e >>> 0;
  }
  function h$(_, e) {
    _.z = e >>> 0;
  }
  function y$(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function x$(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function $$(_) {
    return _.shiftKey;
  }
  function v$(_) {
    return _.signal;
  }
  function S$(_, e) {
    const t = e.stack, r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function A$() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return v(_) ? 0 : P(_);
  }
  function I$() {
    const _ = typeof global > "u" ? null : global;
    return v(_) ? 0 : P(_);
  }
  function D$() {
    const _ = typeof self > "u" ? null : self;
    return v(_) ? 0 : P(_);
  }
  function T$() {
    const _ = typeof window > "u" ? null : window;
    return v(_) ? 0 : P(_);
  }
  function F$(_, e) {
    const t = e.statusText, r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function B$(_) {
    return _.status;
  }
  function P$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function k$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function M$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function R$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function C$(_, e) {
    _.stencilMask(e >>> 0);
  }
  function V$(_, e) {
    _.stencilMask(e >>> 0);
  }
  function L$(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function E$(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function G$(_, e) {
    _.submit(e);
  }
  function O$() {
    return l(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function W$() {
    return l(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function z$() {
    return l(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function U$() {
    return l(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function H$() {
    return l(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function q$(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function j$(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function K$(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function N$(_, e, t, r, n, a, o) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, o);
  }
  function J$() {
    return l(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Q$() {
    return l(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function X$() {
    return l(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Y$() {
    return l(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Z$() {
    return l(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function ev() {
    return l(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function _v() {
    return l(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function tv() {
    return l(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function rv() {
    return l(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function nv() {
    return l(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function av() {
    return l(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function ov() {
    return l(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function cv() {
    return l(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function bv() {
    return l(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function sv() {
    return l(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function iv(_, e, t) {
    return _.then(e, t);
  }
  function fv(_, e, t) {
    return _.then(e, t);
  }
  function uv(_, e) {
    return _.then(e);
  }
  function dv(_, e, t) {
    _.uniform1f(e, t);
  }
  function gv(_, e, t) {
    _.uniform1f(e, t);
  }
  function pv(_, e, t) {
    _.uniform1i(e, t);
  }
  function wv(_, e, t) {
    _.uniform1i(e, t);
  }
  function lv(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function mv(_, e, t, r) {
    _.uniform2fv(e, G(t, r));
  }
  function hv(_, e, t, r) {
    _.uniform2fv(e, G(t, r));
  }
  function yv(_, e, t, r) {
    _.uniform2iv(e, ee(t, r));
  }
  function xv(_, e, t, r) {
    _.uniform2iv(e, ee(t, r));
  }
  function $v(_, e, t, r) {
    _.uniform2uiv(e, Se(t, r));
  }
  function vv(_, e, t, r) {
    _.uniform3fv(e, G(t, r));
  }
  function Sv(_, e, t, r) {
    _.uniform3fv(e, G(t, r));
  }
  function Av(_, e, t, r) {
    _.uniform3iv(e, ee(t, r));
  }
  function Iv(_, e, t, r) {
    _.uniform3iv(e, ee(t, r));
  }
  function Dv(_, e, t, r) {
    _.uniform3uiv(e, Se(t, r));
  }
  function Tv(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function Fv(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function Bv(_, e, t, r) {
    _.uniform4fv(e, G(t, r));
  }
  function Pv(_, e, t, r) {
    _.uniform4fv(e, G(t, r));
  }
  function kv(_, e, t, r) {
    _.uniform4iv(e, ee(t, r));
  }
  function Mv(_, e, t, r) {
    _.uniform4iv(e, ee(t, r));
  }
  function Rv(_, e, t, r) {
    _.uniform4uiv(e, Se(t, r));
  }
  function Cv(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function Vv(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, G(r, n));
  }
  function Lv(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, G(r, n));
  }
  function Ev(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, G(r, n));
  }
  function Gv(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, G(r, n));
  }
  function Ov(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, G(r, n));
  }
  function Wv(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, G(r, n));
  }
  function zv(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, G(r, n));
  }
  function Uv(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, G(r, n));
  }
  function Hv(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, G(r, n));
  }
  function qv(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, G(r, n));
  }
  function jv(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, G(r, n));
  }
  function Kv(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, G(r, n));
  }
  function Nv(_) {
    _.unmap();
  }
  function Jv(_, e) {
    _.useProgram(e);
  }
  function Qv(_, e) {
    _.useProgram(e);
  }
  function Xv(_) {
    return _.value;
  }
  function Yv(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function Zv(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function eS(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function _S(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function tS(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function rS(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function nS(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function aS(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function oS(_) {
    return _.width;
  }
  function cS(_) {
    return _.width;
  }
  function bS() {
    return l(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, i_(r, n), a, o);
    }, arguments);
  }
  function sS() {
    return l(function(_, e, t, r, n, a) {
      _.writeTexture(e, i_(t, r), n, a);
    }, arguments);
  }
  function iS(_, e) {
    return _e(_, e, PS);
  }
  function fS(_, e) {
    return _e(_, e, VS);
  }
  function uS(_, e) {
    return _e(_, e, ES);
  }
  function dS(_, e) {
    return _e(_, e, kS);
  }
  function gS(_, e) {
    return _e(_, e, MS);
  }
  function pS(_, e) {
    return _e(_, e, RS);
  }
  function wS(_, e) {
    return _e(_, e, CS);
  }
  function lS(_, e) {
    return _e(_, e, BS);
  }
  function mS(_) {
    return _;
  }
  function hS(_) {
    return _;
  }
  function yS(_, e) {
    return G(_, e);
  }
  function xS(_, e) {
    return ZS(_, e);
  }
  function $S(_, e) {
    return ee(_, e);
  }
  function vS(_, e) {
    return eA(_, e);
  }
  function SS(_, e) {
    return _A(_, e);
  }
  function AS(_, e) {
    return Se(_, e);
  }
  function IS(_, e) {
    return i_(_, e);
  }
  function DS(_, e) {
    return S(_, e);
  }
  function TS(_) {
    return BigInt.asUintN(64, _);
  }
  function FS() {
    const _ = s.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function BS(_, e) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function PS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function kS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function MS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function RS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function CS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6(_, e, t);
  }
  function VS(_, e, t) {
    const r = s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (r[1]) throw F(r[0]);
  }
  function LS(_, e, t, r) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, r);
  }
  function ES(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_(_, e, t);
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
  ], GS = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], OS = [
    "uniform",
    "storage",
    "read-only-storage"
  ], WS = [
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
  ], zS = [
    "none",
    "front",
    "back"
  ], Ht = [
    "nearest",
    "linear"
  ], US = [
    "ccw",
    "cw"
  ], Y_ = [
    "uint16",
    "uint32"
  ], Z_ = [
    "load",
    "clear"
  ], HS = [
    "nearest",
    "linear"
  ], qS = [
    "low-power",
    "high-performance"
  ], jS = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], KS = [
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
  ], NS = [
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
  ], JS = [
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
  ], QS = [
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
  ], XS = [
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
  ], YS = [
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
  function G(_, e) {
    return _ = _ >>> 0, tA().subarray(_ / 4, _ / 4 + e);
  }
  function ZS(_, e) {
    return _ = _ >>> 0, nA().subarray(_ / 2, _ / 2 + e);
  }
  function ee(_, e) {
    return _ = _ >>> 0, aA().subarray(_ / 4, _ / 4 + e);
  }
  function eA(_, e) {
    return _ = _ >>> 0, oA().subarray(_ / 1, _ / 1 + e);
  }
  function _A(_, e) {
    return _ = _ >>> 0, cA().subarray(_ / 2, _ / 2 + e);
  }
  function Se(_, e) {
    return _ = _ >>> 0, bA().subarray(_ / 4, _ / 4 + e);
  }
  function i_(_, e) {
    return _ = _ >>> 0, he().subarray(_ / 1, _ / 1 + e);
  }
  let fe = null;
  function M() {
    return (fe === null || fe.buffer.detached === true || fe.buffer.detached === void 0 && fe.buffer !== s.memory.buffer) && (fe = new DataView(s.memory.buffer)), fe;
  }
  let Ne = null;
  function tA() {
    return (Ne === null || Ne.byteLength === 0) && (Ne = new Float32Array(s.memory.buffer)), Ne;
  }
  let Je = null;
  function rA() {
    return (Je === null || Je.byteLength === 0) && (Je = new Float64Array(s.memory.buffer)), Je;
  }
  let Qe = null;
  function nA() {
    return (Qe === null || Qe.byteLength === 0) && (Qe = new Int16Array(s.memory.buffer)), Qe;
  }
  let Xe = null;
  function aA() {
    return (Xe === null || Xe.byteLength === 0) && (Xe = new Int32Array(s.memory.buffer)), Xe;
  }
  let Ye = null;
  function oA() {
    return (Ye === null || Ye.byteLength === 0) && (Ye = new Int8Array(s.memory.buffer)), Ye;
  }
  function S(_, e) {
    return fA(_ >>> 0, e);
  }
  let Ze = null;
  function cA() {
    return (Ze === null || Ze.byteLength === 0) && (Ze = new Uint16Array(s.memory.buffer)), Ze;
  }
  let e_ = null;
  function bA() {
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
      const o = r.a;
      r.a = 0;
      try {
        return t(o, r.b, ...a);
      } finally {
        r.a = o, n._wbg_cb_unref();
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
    return rA().set(_, t / 8), k = _.length, t;
  }
  function sA(_, e) {
    const t = e(_.length * 4, 4) >>> 0;
    for (let r = 0; r < _.length; r++) {
      const n = P(_[r]);
      M().setUint32(t + 4 * r, n, true);
    }
    return k = _.length, t;
  }
  function O(_, e, t) {
    if (t === void 0) {
      const c = De.encode(_), b = e(c.length, 1) >>> 0;
      return he().subarray(b, b + c.length).set(c), k = c.length, b;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = he();
    let o = 0;
    for (; o < r; o++) {
      const c = _.charCodeAt(o);
      if (c > 127) break;
      a[n + o] = c;
    }
    if (o !== r) {
      o !== 0 && (_ = _.slice(o)), n = t(n, r, r = o + _.length * 3, 1) >>> 0;
      const c = he().subarray(n + o, n + r), b = De.encodeInto(_, c);
      o += b.written, n = t(n, r, o, 1) >>> 0;
    }
    return k = o, n;
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
  const iA = 2146435072;
  let y_ = 0;
  function fA(_, e) {
    return y_ += e, y_ >= iA && (a_ = new TextDecoder("utf-8", {
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
  function uA(_) {
    s = _;
  }
  URL = globalThis.URL;
  const dA = await G_({
    "./proteus_bench_web_bg.js": {
      __wbg_call_5575218572ead796: Qm,
      __wbg_new_typed_00a409eb4ec4f2d9: g9,
      __wbg_then_05edfc8a4fea5106: iv,
      __wbg_next_0c4066e251d2eff9: w9,
      __wbg_done_b62d4a7d2286852a: k6,
      __wbg_value_49f783bb59765962: Xv,
      __wbg_length_c6054974c0a6cdb9: x5,
      __wbg_get_unchecked_54a4374c38e08460: j8,
      __wbg_instanceof_Map_afa18d5840c04c15: o5,
      __wbg_get_197a3fe98f169e38: U8,
      __wbg_new_227d7c05414eb861: b9,
      __wbg_stack_3b0d974bbf31e44f: S$,
      __wbg_error_a6fa202b58aa1cd3: X6,
      __wbg_push_f724b5db8acf89d2: M9,
      __wbg_proteusapp_new: P9,
      __wbg_set_dc601f4a69da0bc2: Nh,
      __wbg_call_8e98ed2f3c86c4b5: Xm,
      __wbg_call_0e855b388e315e17: Jm,
      __wbg_get_with_ref_key_6412cf3094599694: K8,
      __wbg_set_6be42768c690e380: gh,
      __wbg_String_8564e559799eccda: W4,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: n5,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: N5,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: J5,
      __wbg_maxTextureDimension3D_06ee54121b37d431: Q5,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: K5,
      __wbg_maxBindGroups_14611ac9ed1c6b56: T5,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: F5,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: O5,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: G5,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: z5,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: U5,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: q5,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: j5,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: Y5,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: X5,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: H5,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: _9,
      __wbg_maxBufferSize_f7ce3e1856349d2f: B5,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: Z5,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: e9,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: W5,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: n9,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: r9,
      __wbg_maxColorAttachments_fd9187f9f786da18: k5,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: P5,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: L5,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: M5,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: R5,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: C5,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: V5,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: E5,
      __wbg_description_18d0a6d4077fec8e: S6,
      __wbg_set_dst_factor_1ed75271a89a711e: fy,
      __wbg_set_operation_b5862f5a1a143b30: gx,
      __wbg_set_src_factor_1c4f755f8676df1b: Rx,
      __wbg_set_texture_16d2be474ce6ad0c: Nx,
      __wbg_set_mip_level_246db61be15bdd69: rx,
      __wbg_set_x_56f0c2c08a62725c: l$,
      __wbg_set_y_04fb8ce84735b4e1: m$,
      __wbg_set_z_a51316db27a4941e: h$,
      __wbg_set_origin_9b3b0fbe0a5dc469: px,
      __wbg_set_aspect_77332ac136ee94eb: Ah,
      __wbg_Window_a07901001eb4269f: z4,
      __wbg_gpu_a7c12045c25d009a: N8,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: U4,
      __wbg_set_a_5f6e488475272136: ph,
      __wbg_set_b_688365d692bba214: Th,
      __wbg_set_g_d4d1d77cf8fdd362: Ty,
      __wbg_set_r_527e5a41c4b1a846: yx,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: r5,
      __wbg_queue_65d985f3e6d786a6: G9,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: lx,
      __wbg_requestAdapter_9ff5c9d1ff271165: N9,
      __wbg_set_required_limits_3b031f66f838f4e3: $x,
      __wbg_set_required_features_54918de8185c5fab: xx,
      __wbg_set_label_bae57fb9f24fde5c: Gy,
      __wbg_requestDevice_c1c34f88a477e509: X9,
      __wbg_limits_50a8c5e629dbfe40: v5,
      __wbg_info_22dcf1fd1b12bc7d: e5,
      __wbg_set_size_41cd9255ca1e4242: kx,
      __wbg_set_usage_908213a4d4bb8bde: r$,
      __wbg_set_mapped_at_creation_48de4735fab51e78: Yy,
      __wbg_set_label_cd567b7b35838e4c: zy,
      __wbg_createBuffer_2f08c0205e04efca: T7,
      __wbg_set_address_mode_u_a37cf1035585c638: lh,
      __wbg_set_address_mode_v_8ac049e029caef76: mh,
      __wbg_set_address_mode_w_eb9260ee11729e92: hh,
      __wbg_set_compare_42211fbf15e3b850: qh,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: Jy,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: Qy,
      __wbg_set_mag_filter_69d846b974d4bcc0: Xy,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: tx,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: ox,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: ex,
      __wbg_set_label_dcd98efbb9370da8: Hy,
      __wbg_createSampler_248bd67c920af37d: O7,
      __wbg_set_width_1a5e2e86fa5bdcd8: g$,
      __wbg_set_height_e8b5483b8c117d5e: Py,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: ty,
      __wbg_set_format_e9d4b1475bb3bd3b: Sy,
      __wbg_set_size_a61ff22205255d61: Mx,
      __wbg_set_usage_7fa9cd18d1104aca: t$,
      __wbg_set_label_0c1bd0e976cf0a9a: Ry,
      __wbg_set_dimension_36e13ccecae5af4b: iy,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: ax,
      __wbg_set_sample_count_865e1d19b84e27e6: Ix,
      __wbg_set_view_formats_bab284fc81b40e70: i$,
      __wbg_createTexture_9e76b80a2dc0d12e: K7,
      __wbg_set_entries_fc76ca4d7da6a709: gy,
      __wbg_set_layout_eeef59714f5bf48b: Ky,
      __wbg_set_label_f92ae11c77d74198: qy,
      __wbg_createBindGroup_2320df4db188406c: I7,
      __wbg_set_code_56e2d45ec1ff6c2d: Wh,
      __wbg_set_label_be45aed56e4b9fee: Oy,
      __wbg_createShaderModule_53701de4fb271c90: z7,
      __wbg_set_label_d1c24b5a7a3ac31d: Uy,
      __wbg_createCommandEncoder_cd88faca35d9ed68: B7,
      __wbg_set_bind_group_layouts_5325d038771af328: kh,
      __wbg_set_label_2f592bd1be3db6b3: Ly,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: M7,
      __wbg_set_module_14e471fdd94c582d: bx,
      __wbg_set_entry_point_8db3b6d103e3b865: wy,
      __wbg_set_buffers_85a7238f4ef28ab4: Eh,
      __wbg_set_layout_7c5ba5bdcde8a0f0: jy,
      __wbg_set_vertex_a4951dd9a7a4ed54: a$,
      __wbg_set_label_c47c451211e2f6d2: Wy,
      __wbg_set_format_f9341112e43ea182: Ay,
      __wbg_set_depth_compare_30e9ea552da12fe2: Zh,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: cy,
      __wbg_set_depth_bias_428c9340b0fd937b: Jh,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: Qh,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: Xh,
      __wbg_set_compare_1509dc1a5420943f: Hh,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: ey,
      __wbg_set_fail_op_77ab26c98f847b65: my,
      __wbg_set_pass_op_e9470d1262fb8a8b: wx,
      __wbg_set_stencil_back_6ef4683123b19b25: Cx,
      __wbg_set_stencil_front_aeb8580a97e5424b: Lx,
      __wbg_set_stencil_read_mask_2954f260d47349ea: Gx,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: zx,
      __wbg_set_depth_stencil_1bd50dbc450c8650: ny,
      __wbg_set_module_08ad08e736d8edbf: cx,
      __wbg_set_targets_6b0b3bdd87f35668: Kx,
      __wbg_set_entry_point_6fec5723cc790927: py,
      __wbg_set_fragment_1a595620425637e1: Iy,
      __wbg_set_count_26a934d1cd07d080: jh,
      __wbg_set_mask_0c49a66362fc0079: Zy,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: $h,
      __wbg_set_multisample_85f073947b782d07: sx,
      __wbg_set_cull_mode_9d466c1ab414cac8: Kh,
      __wbg_set_front_face_50cdf4eb61504a46: Dy,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: jx,
      __wbg_set_topology_beefb3aca0612b00: Xx,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: e$,
      __wbg_set_primitive_369241acd17871f1: mx,
      __wbg_createRenderPipeline_f48187ba9f7701e8: L7,
      __wbg_set_entries_3017e6132f938c6e: dy,
      __wbg_set_label_1175a3329a06e52b: Cy,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: A7,
      __wbg_limits_1c25cb4f379a4418: $5,
      __wbg_set_color_attachments_abe67f6631926e28: zh,
      __wbg_set_label_8fd860a36d2c7b74: Ey,
      __wbg_set_view_dbd0294573f64d05: c$,
      __wbg_set_depth_clear_value_442bf492734f63b6: Yh,
      __wbg_set_depth_load_op_34d430b74bb36d91: _y,
      __wbg_set_depth_store_op_0ea0a215313dbda7: oy,
      __wbg_set_depth_read_only_138a11b10c731094: ry,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: Vx,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: Ex,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: Wx,
      __wbg_set_stencil_read_only_fb489d191b6d969b: Ox,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: ay,
      __wbg_set_query_set_18679a8580267d5a: hx,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: Ph,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: uy,
      __wbg_set_timestamp_writes_c552d52fbb417005: Qx,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: wm,
      __wbg_copyTextureToTexture_1be188df1e535c0a: S7,
      __wbg_label_47480289cc2bce71: h5,
      __wbg_set_label_2d2227f4d5991e50: Vy,
      __wbg_finish_cfaeede3baf55be1: t8,
      __wbg_finish_087cb89c65c06eb1: _8,
      __wbg_drawIndexed_68637ebab6dd8d6e: W6,
      __wbg_setPipeline_bab24dbce96903b9: bh,
      __wbg_setViewport_f9d423db4f4b4b58: fh,
      __wbg_setBindGroup_4ba56e1e0d26f244: nh,
      __wbg_setBindGroup_6124849cc8547086: ah,
      __wbg_setIndexBuffer_17431786d06c1b7c: oh,
      __wbg_setIndexBuffer_a16ed5b869c87507: ch,
      __wbg_setVertexBuffer_b508baf8d0ffe331: ih,
      __wbg_setVertexBuffer_91c4b602d0289943: sh,
      __wbg_end_414453a89205612c: K6,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: D8,
      __wbg_getCurrentTexture_51975ae7185fd15f: y8,
      __wbg_set_device_0d774b66e7288f72: by,
      __wbg_set_format_d347899cd860709c: vy,
      __wbg_set_usage_ae014e77ff77ce06: n$,
      __wbg_set_alpha_mode_92402195b3ae1ee7: xh,
      __wbg_set_view_formats_fe531a043efb71fa: f$,
      __wbg_configure_3d64c677c7d68a15: m7,
      __wbg_writeBuffer_b4bdd36178348ca5: bS,
      __wbg_set_bytes_per_row_91681ca78d744888: Gh,
      __wbg_set_rows_per_image_d198b7e73a38978b: Ax,
      __wbg_set_offset_a097a8050a3a9a33: dx,
      __wbg_writeTexture_b45b69132e46a227: sS,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: S9,
      __wbg_submit_1290d44bb76ecef4: G$,
      __wbg_getMappedRange_5ed22727c9679168: S8,
      __wbg_unmap_8f06698a75b8331a: Nv,
      __wbg_destroy_b5b39f25f0799295: A6,
      __wbg_mapAsync_bb0029907dd91181: D5,
      __wbg_set_dimension_174ad7e2fb67fb4e: sy,
      __wbg_set_format_90860b0321868db4: xy,
      __wbg_set_aspect_a823a14d00d42d37: Ih,
      __wbg_set_base_array_layer_cc6c68d233489c4b: Fh,
      __wbg_set_array_layer_count_daec613068108a9d: vh,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: Bh,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: nx,
      __wbg_set_label_03d2396d4655a3e1: My,
      __wbg_set_usage_7f0dda8309469b1c: _$,
      __wbg_createView_cc96b5bdd3d5bf5e: Q7,
      __wbg_set_min_binding_size_689661b9ed25e083: _x,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: Fy,
      __wbg_set_type_38961e08504ca674: Yx,
      __wbg_requestAdapter_c46930b8bc33722d: J9,
      __wbg_set_alpha_aa2e606e9e647b21: yh,
      __wbg_set_color_bc393d7efc3c8594: Uh,
      __wbg_set_visibility_1bca121a89accba5: u$,
      __wbg_set_storage_texture_ab9eed9786337ef0: Hx,
      __wbg_set_external_texture_825fe2bc7a0c0603: ly,
      __wbg_set_binding_b6b0fe5c281b8c69: Mh,
      __wbg_set_buffer_e89095a9f0cafad3: Lh,
      __wbg_set_sampler_8c5d7fb1b02058c6: Tx,
      __wbg_set_texture_e25a73da75cf5808: Jx,
      __wbg_set_format_abf7a1bc5425c56a: $y,
      __wbg_set_blend_8d6e9c08b5702a09: Ch,
      __wbg_set_write_mask_144b25e2bd909124: w$,
      __wbg_set_load_op_56844f51434037bf: Ny,
      __wbg_set_store_op_caeede4654b3d847: qx,
      __wbg_set_view_bdeab150b5f0768c: o$,
      __wbg_set_clear_value_642701f928a5ccb3: Oh,
      __wbg_set_resolve_target_fe76b3f99cf72078: vx,
      __wbg_set_buffer_55f096330c8912b4: Vh,
      __wbg_set_offset_73156b0e0b41d79a: fx,
      __wbg_set_size_1e6281b07cd39177: Px,
      __wbg_set_binding_f3c188a8cd21455b: Rh,
      __wbg_set_resource_fe385d2e3dadaf63: Sx,
      __wbg_set_format_6606f5c1fba6f459: yy,
      __wbg_set_offset_8d9d9afffa18b591: ux,
      __wbg_set_shader_location_0ff30a733291a396: Fx,
      __wbg_set_array_stride_c2c009eabc18b5f6: Sh,
      __wbg_set_attributes_05f9117fd32ca606: Dh,
      __wbg_set_step_mode_a35aef328761c452: Ux,
      __wbg_set_type_c1eebc19f8a6aeb9: Zx,
      __wbg_set_multisampled_40505c1381e1c32c: ix,
      __wbg_set_sample_type_7088b1efddce6a69: Dx,
      __wbg_set_view_dimension_3ed01b237e85826f: s$,
      __wbg_set_format_1786adb7bc74c7c9: hy,
      __wbg_set_access_091f317905cd76a5: wh,
      __wbg_set_view_dimension_263387976511ebc9: b$,
      __wbg_includes_83dff8d05da243c5: Z8,
      __wbg_clearBufferuiv_1d2d93401c0904a3: e7,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: g7,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: w7,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: l7,
      __wbg_copyBufferSubData_a944f33b601b822d: y7,
      __wbg_clientWaitSync_7580165bd2eff461: c7,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: p7,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: v7,
      __wbg_createQuery_f013132b870a71ef: V7,
      __wbg_createSampler_9fe50152a2524319: W7,
      __wbg_createVertexArray_8685feb21901c932: J7,
      __wbg_deleteQuery_ef51ea0a52420103: c6,
      __wbg_deleteSampler_5c045e0cc55813d4: i6,
      __wbg_getIndexedParameter_2b18df6fca85f751: v8,
      __wbg_getQueryParameter_0599e85ddb81220b: k8,
      __wbg_getSyncParameter_9a2bda340ebe166f: G8,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: O8,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: u5,
      __wbg_deleteSync_37ca83c429c43d8a: d6,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: l6,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: R6,
      __wbg_drawBuffers_558d96e52e754731: E6,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: O6,
      __wbg_endQuery_161170c5280a8293: j6,
      __wbg_fenceSync_56efc7cc79111e54: Y6,
      __wbg_framebufferTextureLayer_2312acdc74f97676: i8,
      __wbg_getBufferSubData_92680d3a2f7be029: p8,
      __wbg_readBuffer_361ec5474f3aae49: O9,
      __wbg_readPixels_5840000f3e22f3ce: z9,
      __wbg_readPixels_5bf204799ed2272f: U9,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: H9,
      __wbg_texImage3D_8647ef58aef5b912: H$,
      __wbg_texStorage2D_ed5df596c5f1e3af: K$,
      __wbg_texStorage3D_160b0197bc190f04: N$,
      __wbg_texSubImage2D_f03448e182b0820d: tv,
      __wbg_texSubImage2D_d14d9c0a1f627c31: _v,
      __wbg_texSubImage2D_89866a04ecd0a76b: Y$,
      __wbg_texSubImage2D_5c630043f1c56716: X$,
      __wbg_samplerParameterf_3157ba41c0f4d97a: Z9,
      __wbg_samplerParameteri_f85a29156e790189: eh,
      __wbg_texImage2D_0e0f37b9fb297d01: O$,
      __wbg_texImage2D_0e537dc331652de3: W$,
      __wbg_texImage3D_30dbf7234481b8f5: U$,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: Q$,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: Z$,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: ev,
      __wbg_texSubImage3D_933e4cd41cc5376d: cv,
      __wbg_texSubImage3D_c3538b28040daac9: sv,
      __wbg_uniform1ui_36c94692177ebf76: lv,
      __wbg_uniform2fv_17592f4dad9798fb: mv,
      __wbg_uniform2iv_d5d29ebbc466977d: xv,
      __wbg_texSubImage3D_0fdbd843482bb916: nv,
      __wbg_texSubImage3D_09a97a968b93253d: rv,
      __wbg_texSubImage3D_355efde0dc047913: av,
      __wbg_texSubImage3D_bd32c8e29e470904: bv,
      __wbg_texSubImage3D_5a238709d114b609: ov,
      __wbg_uniform2uiv_418ba3bf6a230dd5: $v,
      __wbg_uniform4fv_9e670a001c77dca0: Pv,
      __wbg_uniform4iv_1d57c6b8e5c0e447: kv,
      __wbg_uniform3fv_dbe44b778e6b89e8: Sv,
      __wbg_uniform3iv_d75d3a5f86d54be4: Iv,
      __wbg_uniform3uiv_71c1efc24a662de9: Dv,
      __wbg_uniform4uiv_c5d45f5dbdae727a: Rv,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: Ov,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: zv,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: Uv,
      __wbg_uniformBlockBinding_829a71912ad79a04: Cv,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: Vv,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: Ev,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: Gv,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: Hv,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: eS,
      __wbg_activeTexture_525ee3068cb9e8d5: sm,
      __wbg_attachShader_3477e67517b09b6b: dm,
      __wbg_bindAttribLocation_79b5d26727094518: lm,
      __wbg_bindBuffer_d3111de6861cb875: ym,
      __wbg_bindFramebuffer_63e837a5dc0accfb: vm,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: Sm,
      __wbg_bindTexture_7ab28ff4ff3dc506: Dm,
      __wbg_blendColor_15f26633b646e542: Pm,
      __wbg_blendEquation_7dadb4db540a42da: Cm,
      __wbg_blendEquationSeparate_8240ddfa32266109: Mm,
      __wbg_blendFunc_b15af02643e188f1: Om,
      __wbg_blendFuncSeparate_456410f9919bed39: Em,
      __wbg_clear_dadcb3e2929388b0: a7,
      __wbg_clearDepth_05c17028494ee4dd: _7,
      __wbg_clearStencil_917833d1e2ac56e4: n7,
      __wbg_colorMask_f111e3e5796458f4: i7,
      __wbg_compileShader_f5625b583b2c9fd6: f7,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: jv,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: Kv,
      __wbg_vertexAttribDivisor_f17a8585267be92f: Zv,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: x7,
      __wbg_createBuffer_9f602b2dbcbf409c: F7,
      __wbg_createFramebuffer_4a250944a4542bbc: P7,
      __wbg_createProgram_4c8164d471c10346: R7,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: G7,
      __wbg_createShader_9c5cd42709d915ff: H7,
      __wbg_createTexture_3eed23cb87dd35fc: q7,
      __wbg_cullFace_94f24b4fd5e9038b: Z7,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: _6,
      __wbg_getExtension_11824edd67a143d8: $8,
      __wbg_getParameter_7f7f23cae98f2c81: A8,
      __wbg_getProgramInfoLog_cd84be80942f345b: F8,
      __wbg_getProgramParameter_039391d5ba319f50: B8,
      __wbg_getShaderInfoLog_495bddda98172699: M8,
      __wbg_getShaderParameter_4eb65cfb174ceb22: C8,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: L8,
      __wbg_getUniformLocation_ab63f569a4e41744: z8,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: r6,
      __wbg_deleteProgram_eff668280dcb01ca: o6,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: s6,
      __wbg_deleteShader_3339454254c7147c: f6,
      __wbg_deleteTexture_c1c58550dc55af5c: p6,
      __wbg_depthFunc_31b183b5b8ee478e: m6,
      __wbg_depthMask_cab7f2ae7f0e559c: x6,
      __wbg_depthRange_797a71ba3b79267a: $6,
      __wbg_disable_cb1b3e6c1cee5202: B6,
      __wbg_disableVertexAttribArray_b395358ec5084c39: T6,
      __wbg_drawArrays_42dbb4b0349c8f34: V6,
      __wbg_enable_d1f42f78be33a553: q6,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: z6,
      __wbg_flush_7ae42f071230db6b: r8,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: c8,
      __wbg_framebufferTexture2D_367ab597a005e8d9: b8,
      __wbg_frontFace_9bdcf2a758e989e5: u8,
      __wbg_linkProgram_e23a348b0f6e0c4f: A5,
      __wbg_pixelStorei_a78a504be58d1d0a: D9,
      __wbg_polygonOffset_a4f07d97b9b0dced: F9,
      __wbg_renderbufferStorage_3049e13db5c4e60e: j9,
      __wbg_scissor_6c024669fbf4fe72: _h,
      __wbg_vertexAttribPointer_4e5d289c5d224210: tS,
      __wbg_viewport_a0ca330f9b85397e: rS,
      __wbg_shaderSource_66dce75b25a1a407: x$,
      __wbg_stencilFuncSeparate_ec603976be9569a4: k$,
      __wbg_stencilMask_485dcb5965c79a71: C$,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: R$,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: L$,
      __wbg_texParameteri_c6efffcecb474d2f: q$,
      __wbg_uniform1f_3acd3f3eb50b5e11: dv,
      __wbg_uniform1i_e4f13604354c28ae: wv,
      __wbg_uniform4f_a5008773cfb47d1a: Fv,
      __wbg_useProgram_ab2ee2a13a1fd909: Qv,
      __wbg_bufferSubData_2270f1b9db71e642: jm,
      __wbg_clearBufferfv_6b77b9402254a2bf: Ym,
      __wbg_clearBufferiv_0f056544010eef3e: Zm,
      __wbg_beginQuery_dad334d972fed3cc: pm,
      __wbg_bindBufferRange_16a9d90becc2a7d7: hm,
      __wbg_bindSampler_3c7002cb6d56ae8f: Im,
      __wbg_bindVertexArray_c391bd47303d75cd: Bm,
      __wbg_blitFramebuffer_ea96ada8bba07582: Wm,
      __wbg_bufferData_64e9905f2b3d3a6f: Hm,
      __wbg_bufferData_99bbbc63f02251c4: qm,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: i5,
      __wbg_performance_4c23a97261596fec: A9,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: Q9,
      __wbg_fetch_2d913f7108d17a24: Z6,
      __wbg_fetch_d8c50740ea23b248: e8,
      __wbg_navigator_935098efd1dc7fe5: o9,
      __wbg_devicePixelRatio_8e5ca44720abafec: I6,
      __wbg_document_2634180a4c694068: P6,
      __wbg_instanceof_Window_0d356b88a2f77c42: f5,
      __wbg_hidden_cb32701ca3785fea: Y8,
      __wbg_getElementById_c7aba6b93b34bf01: x8,
      __wbg_querySelector_1f3658f4b48e268b: V9,
      __wbg_querySelectorAll_ffda3c891a9eb29a: C9,
      __wbg_hasAttribute_73e1230c9c107e79: J8,
      __wbg_setAttribute_8bccfbabf2a83682: rh,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: g8,
      __wbg_focus_c80921c19b28520b: a8,
      __wbg_uniform2iv_c5e863975dd780d8: yv,
      __wbg_uniform3fv_7723e142be50856f: vv,
      __wbg_uniform3iv_bea3976522e15d48: Av,
      __wbg_uniform4fv_85ad5d23234895d2: Bv,
      __wbg_clear_ff8cfdf420f7dde6: o7,
      __wbg_clearDepth_ac6b54f112feeaf7: t7,
      __wbg_clearStencil_56d6a6308294a749: r7,
      __wbg_colorMask_b0ab9d429a1efa0a: s7,
      __wbg_compileShader_fcf3f3d2891f73f9: u7,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: $7,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: D7,
      __wbg_createFramebuffer_ab73f30b5dc97415: k7,
      __wbg_createProgram_f11c63f59f41b82a: C7,
      __wbg_createRenderbuffer_556000dbb01f5026: E7,
      __wbg_createShader_27d9388313f3b14e: U7,
      __wbg_createTexture_8455c703424c567b: j7,
      __wbg_cullFace_774780fb4177aab8: Y7,
      __wbg_deleteBuffer_d758283bea6e0ccf: t6,
      __wbg_deleteFramebuffer_8953b325144192fe: n6,
      __wbg_deleteProgram_0135c6926e75af75: a6,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: b6,
      __wbg_deleteShader_79dbaaed69b7ca3b: u6,
      __wbg_deleteTexture_3acb672a45f9998a: g6,
      __wbg_depthFunc_eaca1bc79f7bf216: h6,
      __wbg_depthMask_3a9074b08d1f68e5: y6,
      __wbg_depthRange_c24a808b3496e0a9: v6,
      __wbg_uniform4iv_a9aaa92f2f458ec2: Mv,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: Lv,
      __wbg_uniformMatrix3fv_da8c388748c5739b: Wv,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: qv,
      __wbg_activeTexture_1d5359b20df41710: bm,
      __wbg_attachShader_683d1070365e7066: gm,
      __wbg_bindAttribLocation_d56d3c40331af7ed: mm,
      __wbg_bindBuffer_e95efaf0d4851845: xm,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: $m,
      __wbg_bindRenderbuffer_d608b211c51ed147: Am,
      __wbg_bindTexture_ffc56f1e5c5526c6: Tm,
      __wbg_blendColor_a0ba1cdcecc3a34c: km,
      __wbg_blendEquation_8bfa69f639ae92da: Vm,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: Rm,
      __wbg_blendFunc_713c504adab14f98: Gm,
      __wbg_blendFuncSeparate_3eef699c291dbc87: Lm,
      __wbg_disable_4dca6ee0ccc91e4a: F6,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: D6,
      __wbg_drawArrays_10e1254aa4524ae9: C6,
      __wbg_enable_c6e523307311617a: H6,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: U6,
      __wbg_flush_eb3fb8da2ec00d57: n8,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: o8,
      __wbg_linkProgram_6a2eee02a03b9b00: S5,
      __wbg_pixelStorei_55ad4c67b699537c: I9,
      __wbg_polygonOffset_06dc6468c12a57e1: T9,
      __wbg_renderbufferStorage_2918fb696fd45663: q9,
      __wbg_scissor_f9696c630e464977: th,
      __wbg_shaderSource_628c37a476ae65f9: y$,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: P$,
      __wbg_stencilMask_f9fe198f7fd6fc9c: V$,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: M$,
      __wbg_stencilOpSeparate_6cf50803475d2640: E$,
      __wbg_texParameteri_fe6210a493d48a16: j$,
      __wbg_framebufferTexture2D_3a558e14f56720d2: s8,
      __wbg_frontFace_c9bb1fa659ffd276: d8,
      __wbg_getParameter_91a344e1a84a4669: I8,
      __wbg_getProgramInfoLog_35410850de9ccefe: T8,
      __wbg_getProgramParameter_bbc667347ac2e882: P8,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: R8,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: V8,
      __wbg_getUniformLocation_340155dc706d3fea: W8,
      __wbg_uniform1f_d34e4b454f7c8e73: gv,
      __wbg_uniform1i_cd9a7f990128ea48: pv,
      __wbg_uniform4f_4410d2faaa7e5dda: Tv,
      __wbg_useProgram_0e1cd86765304939: Jv,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: _S,
      __wbg_viewport_b5bd46a0d111c83c: nS,
      __wbg_texSubImage2D_1b2ff28f994c325e: J$,
      __wbg_uniform2fv_39277cf2d3cb83c7: hv,
      __wbg_bufferData_5df9bdb32e189eee: Um,
      __wbg_bufferData_26132561617ce8fb: zm,
      __wbg_bufferSubData_44db8a3b4a70b57d: Km,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: d7,
      __wbg_readPixels_05377f8b6fa1d8eb: W9,
      __wbg_texImage2D_7bc3001cb8602ed2: z$,
      __wbg_navigator_017bc45e84c473cc: a9,
      __wbg_log_d282446d03691e72: I5,
      __wbg_info_a392cd5b7536cfb5: _5,
      __wbg_warn_88c4a5bd9a322000: aS,
      __wbg_debug_7271beced8b71cd4: e6,
      __wbg_error_933f449d72fef598: Q6,
      __wbg_error_50f60c611a3dcf64: J6,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: Fm,
      __wbg_width_08e66520b99071f4: oS,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: N7,
      __wbg_height_e9afb506f31052a9: X8,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: w6,
      __wbg_queryCounterEXT_ebb00bcc96221671: R9,
      __wbg_aborted_4d4114700dc4c251: cm,
      __wbg_addEventListener_ea90bc131475777e: im,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: f8,
      __wbg_set_width_f9e631f4ee129e5c: p$,
      __wbg_set_height_ef298446b359b0c5: ky,
      __wbg_getContext_70c2d1bed75d4122: m8,
      __wbg_getContext_422b32d0ee4b8076: w8,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: M6,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: G6,
      __wbg_arrayBuffer_ff96d08b7b6be32e: um,
      __wbg_get_37b48b8fa52d1f2c: H8,
      __wbg_status_0053aa6239760447: B$,
      __wbg_ok_c962da6f1a034d81: v9,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: Yv,
      __wbg_statusText_0f412961834ccfe9: F$,
      __wbg_instanceof_Response_79948c98d1d2ba75: b5,
      __wbg_set_signal_4a69430cb12800f3: Bx,
      __wbg_new_1e52e3c919312525: c9,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: L6,
      __wbg_observe_592b94857eed8e27: h9,
      __wbg_altKey_7412dd64f8c921c7: fm,
      __wbg_ctrlKey_00097886a21597a7: X7,
      __wbg_shiftKey_273ee8c901267b55: $$,
      __wbg_metaKey_1c2847b62ad062c1: t9,
      __wbg_repeat_46a5c90df9f6ef0b: K9,
      __wbg_isComposing_e3709163a95a2477: g5,
      __wbg_key_d6b3d2cce3d41872: m5,
      __wbg_code_87bb99fdec02d313: b7,
      __wbg_now_0f628e0e435c541b: m9,
      __wbg_offsetX_0214819d43aaf6d5: x9,
      __wbg_offsetY_f18f571e33b385ab: $9,
      __wbg_button_bb3285fcdf965178: Nm,
      __wbg_signal_4d9d567be73ea52c: v$,
      __wbg_new_51233fa2a760b272: f9,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: E8,
      __wbg_abort_6e6ea7d259504afc: om,
      __wbg_preventDefault_c047d3e292b08cc4: B9,
      __wbg_contentRect_0fb8c8900d689a0c: h7,
      __wbg_width_a86bcd32bd998060: cS,
      __wbg_height_cd732bbdc7b66e49: Q8,
      __wbg_set_width_031bdecd763c5855: d$,
      __wbg_set_height_ad5056ea051acd78: By,
      __wbg_getContext_486aab500e1c34c9: l8,
      __wbg_getContext_9fd4db9b1cf155db: h8,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: a5,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: c5,
      __wbg_resolve_d82363d90af6928a: Y9,
      __wbg_then_591b6b3a75ee817a: uv,
      __wbg_iterator_cc47ba25a2be735a: l5,
      __wbg_get_9a29be2cb383ed9a: q8,
      __wbg_next_402fa10b59ab20c3: l9,
      __wbg_new_2e117a478906f062: s9,
      __wbg_new_36e147a8ced3c6e0: i9,
      __wbg_of_62183ea089c00bfa: y9,
      __wbg_isArray_145a34fd0a38d37b: d5,
      __wbg_new_e66a4b7758dd2e5c: d9,
      __wbg_isSafeInteger_a3389a198582f5f6: p5,
      __wbg_is_de5b366c746e004c: w5,
      __wbg_entries_c261c3fa1f281256: N6,
      __wbg_then_2a84678a50976959: fv,
      __wbg_length_589238bdcf171f0e: y5,
      __wbg_prototypesetcall_d721637c7ca66eb8: k9,
      __wbg_set_272b80acaf9a75e8: uh,
      __wbg_new_81880fb5002cb255: u9,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: p9,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: A$,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: D$,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: I$,
      __wbg_static_accessor_WINDOW_168f178805d978fe: T$,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: t5,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: s5,
      __wbg_queueMicrotask_1c9b3800e321a967: L9,
      __wbg_queueMicrotask_311744e534a929a3: E9,
      __wbg_set_4564f7dc44fcb0c9: dh,
      __wbg___wbindgen_number_get_1cc01dd708740256: tm,
      __wbg___wbindgen_in_4990f46af709e33c: K4,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: nm,
      __wbg___wbindgen_is_null_6d937fbfb6478470: Q4,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: em,
      __wbg_Number_c4bdf66bb78f7977: O4,
      __wbg_Error_fdd633d4bb5dd76a: G4,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: N4,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: X4,
      __wbg___wbindgen_is_string_1fca8072260dd261: Y4,
      __wbg___wbindgen_string_get_71bb4348194e31f0: rm,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: q4,
      __wbg___wbindgen_is_function_acc5528be2b923f2: J4,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: Z4,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: _m,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: H4,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: am,
      __wbg___wbindgen_debug_string_8a447059637473e2: j4,
      __wbindgen_init_externref_table: FS,
      __wbindgen_cast_0000000000000001: iS,
      __wbindgen_cast_0000000000000002: fS,
      __wbindgen_cast_0000000000000003: uS,
      __wbindgen_cast_0000000000000004: dS,
      __wbindgen_cast_0000000000000005: gS,
      __wbindgen_cast_0000000000000006: pS,
      __wbindgen_cast_0000000000000007: wS,
      __wbindgen_cast_0000000000000008: lS,
      __wbindgen_cast_0000000000000009: mS,
      __wbindgen_cast_000000000000000a: hS,
      __wbindgen_cast_000000000000000b: yS,
      __wbindgen_cast_000000000000000c: xS,
      __wbindgen_cast_000000000000000d: $S,
      __wbindgen_cast_000000000000000e: vS,
      __wbindgen_cast_000000000000000f: SS,
      __wbindgen_cast_0000000000000010: AS,
      __wbindgen_cast_0000000000000011: IS,
      __wbindgen_cast_0000000000000012: DS,
      __wbindgen_cast_0000000000000013: TS
    }
  }, M4), { memory: gA, clear: pA, on_frame: wA, show: lA, start: mA, stop_frames: hA, mount: yA, __wbg_proteusapp_free: xA, proteusapp_addChild: $A, proteusapp_animateTo: vA, proteusapp_bakeTexture: SA, proteusapp_bakedImageSize: AA, proteusapp_bakedTextSize: IA, proteusapp_bindKey: DA, proteusapp_channelDestroy: TA, proteusapp_channelSet: FA, proteusapp_clearFocus: BA, proteusapp_component: PA, proteusapp_copyBakedImageFrom: kA, proteusapp_createVideo: MA, proteusapp_cropImage: RA, proteusapp_declareGeometry: CA, proteusapp_declaredGeometry: VA, proteusapp_destroy: LA, proteusapp_devices: EA, proteusapp_focus: GA, proteusapp_focused: OA, proteusapp_freeResources: WA, proteusapp_get: zA, proteusapp_hideVideo: UA, proteusapp_inputDevices: HA, proteusapp_inputMode: qA, proteusapp_isFocused: jA, proteusapp_loadTexture: KA, proteusapp_mergeFrom: NA, proteusapp_mergeFromWithBehavior: JA, proteusapp_new: QA, proteusapp_onAppKey: XA, proteusapp_onBlur: YA, proteusapp_onClick: ZA, proteusapp_onDrag: eI, proteusapp_onDropped: _I, proteusapp_onFocus: tI, proteusapp_onFocusLost: rI, proteusapp_onHoverEnter: nI, proteusapp_onHoverExit: aI, proteusapp_onKey: oI, proteusapp_onPress: cI, proteusapp_onRelease: bI, proteusapp_onTransitionComplete: sI, proteusapp_pointerLeft: iI, proteusapp_pointerMoved: fI, proteusapp_pointerPressed: uI, proteusapp_pointerReleased: dI, proteusapp_releaseVideo: gI, proteusapp_removeChild: pI, proteusapp_resetKeyMap: wI, proteusapp_setDeclaredGeometry: lI, proteusapp_setDefaultFocus: mI, proteusapp_setDevices: hI, proteusapp_setDisabled: yI, proteusapp_setFocusGroup: xI, proteusapp_setImage: $I, proteusapp_setInputDevices: vI, proteusapp_setInteractive: SI, proteusapp_setKeyRepeat: AI, proteusapp_setLongPressMs: II, proteusapp_setNavigatingActions: DI, proteusapp_setNeighbour: TI, proteusapp_setOpacity: FI, proteusapp_setReadingDirection: BI, proteusapp_setStyleTransition: PI, proteusapp_setText: kI, proteusapp_setTexture: MI, proteusapp_setTransitionInteraction: RI, proteusapp_setVideoCrossfade: CI, proteusapp_setVisible: VI, proteusapp_showVideo: LI, proteusapp_splitTo: EI, proteusapp_splitToWithBehavior: GI, proteusapp_splitToWithStates: OI, proteusapp_texture: WI, proteusapp_textureState: zI, proteusapp_tick: UI, proteusapp_transitionChannel: HI, proteusapp_unbindKey: qI, proteusapp_uploadVideoFrame: jI, __wbg_handle_free: KI, __wbg_texturehandle_free: NI, __wbg_transitionchannel_free: JI, __wbg_videohandle_free: QI, handle_fromId: XI, handle_id: YI, texturehandle_fromId: ZI, texturehandle_id: eD, __abort_handler: _D, __instance_terminated: tD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: rD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: nD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: aD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: oD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: cD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: bD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: sD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: iD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: fD, __wbindgen_malloc: uD, __wbindgen_realloc: dD, __wbindgen_exn_store: gD, __externref_table_alloc: pD, __wbindgen_externrefs: wD, __wbindgen_free: lD, __wbindgen_destroy_closure: mD, __externref_table_dealloc: hD, __wbindgen_start: jt } = dA, yD = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: _D,
    __externref_table_alloc: pD,
    __externref_table_dealloc: hD,
    __instance_terminated: tD,
    __wbg_handle_free: KI,
    __wbg_proteusapp_free: xA,
    __wbg_texturehandle_free: NI,
    __wbg_transitionchannel_free: JI,
    __wbg_videohandle_free: QI,
    __wbindgen_destroy_closure: mD,
    __wbindgen_exn_store: gD,
    __wbindgen_externrefs: wD,
    __wbindgen_free: lD,
    __wbindgen_malloc: uD,
    __wbindgen_realloc: dD,
    __wbindgen_start: jt,
    clear: pA,
    handle_fromId: XI,
    handle_id: YI,
    memory: gA,
    mount: yA,
    on_frame: wA,
    proteusapp_addChild: $A,
    proteusapp_animateTo: vA,
    proteusapp_bakeTexture: SA,
    proteusapp_bakedImageSize: AA,
    proteusapp_bakedTextSize: IA,
    proteusapp_bindKey: DA,
    proteusapp_channelDestroy: TA,
    proteusapp_channelSet: FA,
    proteusapp_clearFocus: BA,
    proteusapp_component: PA,
    proteusapp_copyBakedImageFrom: kA,
    proteusapp_createVideo: MA,
    proteusapp_cropImage: RA,
    proteusapp_declareGeometry: CA,
    proteusapp_declaredGeometry: VA,
    proteusapp_destroy: LA,
    proteusapp_devices: EA,
    proteusapp_focus: GA,
    proteusapp_focused: OA,
    proteusapp_freeResources: WA,
    proteusapp_get: zA,
    proteusapp_hideVideo: UA,
    proteusapp_inputDevices: HA,
    proteusapp_inputMode: qA,
    proteusapp_isFocused: jA,
    proteusapp_loadTexture: KA,
    proteusapp_mergeFrom: NA,
    proteusapp_mergeFromWithBehavior: JA,
    proteusapp_new: QA,
    proteusapp_onAppKey: XA,
    proteusapp_onBlur: YA,
    proteusapp_onClick: ZA,
    proteusapp_onDrag: eI,
    proteusapp_onDropped: _I,
    proteusapp_onFocus: tI,
    proteusapp_onFocusLost: rI,
    proteusapp_onHoverEnter: nI,
    proteusapp_onHoverExit: aI,
    proteusapp_onKey: oI,
    proteusapp_onPress: cI,
    proteusapp_onRelease: bI,
    proteusapp_onTransitionComplete: sI,
    proteusapp_pointerLeft: iI,
    proteusapp_pointerMoved: fI,
    proteusapp_pointerPressed: uI,
    proteusapp_pointerReleased: dI,
    proteusapp_releaseVideo: gI,
    proteusapp_removeChild: pI,
    proteusapp_resetKeyMap: wI,
    proteusapp_setDeclaredGeometry: lI,
    proteusapp_setDefaultFocus: mI,
    proteusapp_setDevices: hI,
    proteusapp_setDisabled: yI,
    proteusapp_setFocusGroup: xI,
    proteusapp_setImage: $I,
    proteusapp_setInputDevices: vI,
    proteusapp_setInteractive: SI,
    proteusapp_setKeyRepeat: AI,
    proteusapp_setLongPressMs: II,
    proteusapp_setNavigatingActions: DI,
    proteusapp_setNeighbour: TI,
    proteusapp_setOpacity: FI,
    proteusapp_setReadingDirection: BI,
    proteusapp_setStyleTransition: PI,
    proteusapp_setText: kI,
    proteusapp_setTexture: MI,
    proteusapp_setTransitionInteraction: RI,
    proteusapp_setVideoCrossfade: CI,
    proteusapp_setVisible: VI,
    proteusapp_showVideo: LI,
    proteusapp_splitTo: EI,
    proteusapp_splitToWithBehavior: GI,
    proteusapp_splitToWithStates: OI,
    proteusapp_texture: WI,
    proteusapp_textureState: zI,
    proteusapp_tick: UI,
    proteusapp_transitionChannel: HI,
    proteusapp_unbindKey: qI,
    proteusapp_uploadVideoFrame: jI,
    show: lA,
    start: mA,
    stop_frames: hA,
    texturehandle_fromId: ZI,
    texturehandle_id: eD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: fD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: rD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: cD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: bD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: sD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: iD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: aD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: oD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: nD
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  uA(yD);
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
      const a = n.between(t, r), o = n.between(t, r);
      return {
        x: n.between(0, te),
        y: n.between(0, re),
        width: a,
        height: o,
        r: n.next(),
        g: n.next(),
        b: n.next()
      };
    });
  }
  const xD = `#version 300 es
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
}`, $D = `#version 300 es
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
}`, vD = `#version 300 es
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
      const o = _.createShader(n);
      if (_.shaderSource(o, a), _.compileShader(o), !_.getShaderParameter(o, _.COMPILE_STATUS)) throw new Error(_.getShaderInfoLog(o) ?? "shader failed to compile");
      return o;
    }, r = _.createProgram();
    if (_.attachShader(r, t(_.VERTEX_SHADER, e)), _.attachShader(r, t(_.FRAGMENT_SHADER, xD)), _.linkProgram(r), !_.getProgramParameter(r, _.LINK_STATUS)) throw new Error(_.getProgramInfoLog(r) ?? "program failed to link");
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
  function SD(_) {
    return (e, t, r) => {
      const n = Kt(_, $D), a = Nt(_), o = _.createVertexArray();
      _.bindVertexArray(o);
      const c = _.getAttribLocation(n, "a_corner");
      _.enableVertexAttribArray(c), _.vertexAttribPointer(c, 2, _.FLOAT, false, 0, 0);
      const b = _.getUniformLocation(n, "u_rect"), f = _.getUniformLocation(n, "u_color");
      return {
        draw() {
          Jt(_), _.useProgram(n), _.bindVertexArray(o), _.uniform2f(_.getUniformLocation(n, "u_viewport"), te, re), _.uniform1f(_.getUniformLocation(n, "u_radius"), r), e.forEach((d, I) => {
            _.uniform4f(b, t[I * 2], t[I * 2 + 1], d.width, d.height), _.uniform3f(f, d.r, d.g, d.b), _.drawArrays(_.TRIANGLE_STRIP, 0, 4);
          });
        },
        dispose() {
          _.deleteProgram(n), _.deleteBuffer(a), _.deleteVertexArray(o);
        }
      };
    };
  }
  function AD(_) {
    return (e, t, r) => {
      const n = Kt(_, vD), a = Nt(_), o = _.createVertexArray();
      _.bindVertexArray(o);
      const c = _.getAttribLocation(n, "a_corner");
      _.enableVertexAttribArray(c), _.vertexAttribPointer(c, 2, _.FLOAT, false, 0, 0);
      const b = new Float32Array(e.length * 7), f = _.createBuffer();
      _.bindBuffer(_.ARRAY_BUFFER, f), _.bufferData(_.ARRAY_BUFFER, b.byteLength, _.DYNAMIC_DRAW);
      const d = _.getAttribLocation(n, "a_rect"), I = _.getAttribLocation(n, "a_color");
      return _.enableVertexAttribArray(d), _.vertexAttribPointer(d, 4, _.FLOAT, false, 28, 0), _.vertexAttribDivisor(d, 1), _.enableVertexAttribArray(I), _.vertexAttribPointer(I, 3, _.FLOAT, false, 28, 16), _.vertexAttribDivisor(I, 1), {
        draw() {
          e.forEach((N, f_) => {
            const ne = f_ * 7;
            b[ne] = t[f_ * 2], b[ne + 1] = t[f_ * 2 + 1], b[ne + 2] = N.width, b[ne + 3] = N.height, b[ne + 4] = N.r, b[ne + 5] = N.g, b[ne + 6] = N.b;
          }), Jt(_), _.useProgram(n), _.bindVertexArray(o), _.bindBuffer(_.ARRAY_BUFFER, f), _.bufferSubData(_.ARRAY_BUFFER, 0, b), _.uniform2f(_.getUniformLocation(n, "u_viewport"), te, re), _.uniform1f(_.getUniformLocation(n, "u_radius"), r), _.drawArraysInstanced(_.TRIANGLE_STRIP, 0, 4, e.length);
        },
        dispose() {
          _.deleteProgram(n), _.deleteBuffer(a), _.deleteBuffer(f), _.deleteVertexArray(o);
        }
      };
    };
  }
  function ID(_) {
    return (e, t, r) => {
      const n = e.map((a) => `rgb(${Math.round(a.r * 255)} ${Math.round(a.g * 255)} ${Math.round(a.b * 255)})`);
      return {
        draw() {
          _.fillStyle = "black", _.fillRect(0, 0, te, re), e.forEach((a, o) => {
            _.fillStyle = n[o], _.beginPath(), _.roundRect(t[o * 2] - a.width / 2, t[o * 2 + 1] - a.height / 2, a.width, a.height, r), _.fill();
          });
        },
        dispose() {
        }
      };
    };
  }
  const C_ = 500;
  function DD(_) {
    return _ < 0.5 ? 2 * _ * _ : 1 - (-2 * _ + 2) ** 2 / 2;
  }
  const TD = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
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
      const t = DD(Math.min(1, (e - this.movedAt) / C_));
      for (let r = 0; r < this.current.length; r++) this.current[r] = this.from[r] + (this.to[r] - this.from[r]) * t;
    }
  }
  function FD(_, e, t) {
    const r = new nt(e), n = document.createDocumentFragment(), a = e.map((o, c) => {
      const b = document.createElement("div"), f = b.style;
      return f.position = "absolute", f.left = "0", f.top = "0", f.width = `${o.width}px`, f.height = `${o.height}px`, f.borderRadius = `${t}px`, f.background = `rgb(${Math.round(o.r * 255)} ${Math.round(o.g * 255)} ${Math.round(o.b * 255)})`, f.transform = It(r.current[c * 2], r.current[c * 2 + 1], o), f.transition = `transform ${C_}ms ${TD}`, n.append(b), b;
    });
    return _.append(n), {
      frame(o) {
        const c = r.retarget(o);
        c && a.forEach((b, f) => {
          b.style.transform = It(c[f * 2], c[f * 2 + 1], e[f]);
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
  const BD = [
    100,
    1e3,
    5e3,
    1e4,
    25e3,
    5e4,
    1e5
  ], PD = 60, kD = 2e3, V_ = 1e5, Dt = 100, at = `proteus-bench:${location.pathname}`, MD = 300, RD = 15e3, o_ = document.getElementById("status"), Qt = document.getElementById("results"), ye = document.getElementById("run"), b_ = document.getElementById("reset"), xe = {
    proteus: document.getElementById("proteus"),
    proteusRust: document.getElementById("proteus-rust"),
    webgl: document.getElementById("webgl"),
    canvas2d: document.getElementById("canvas2d"),
    css: document.getElementById("css")
  }, Xt = new URLSearchParams(location.search), Te = ((_a2 = Xt.get("counts")) == null ? void 0 : _a2.split(",").map(Number).filter((_) => _ > 0)) ?? BD, ot = (((_b2 = Xt.get("scenes")) == null ? void 0 : _b2.split(",")) ?? [
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
        const a = ((_a3 = n[1].match(/\((\w+)\)\s*$/)) == null ? void 0 : _a3[1]) ?? "", o = n[1].replace(/\(\w+\)\s*$/, "").trim();
        Yt = `${/WebGpu/i.test(a) ? "WebGPU" : /Gl/i.test(a) ? "WebGL2" : a}${o ? `, ${o}` : " (the browser doesn't name the GPU)"}`;
      }
      e(...t);
    };
  }
  function CD(_) {
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
      let r = 0, n = 0, a = 0, o = 0, c = false;
      const b = _((f) => {
        if (r += 1, r === 1 && (o = f), !c && (r >= PD || f - o > kD)) {
          c = true, a = f, n = f;
          return;
        }
        c && t.push(f - n), n = f, c && (t.length >= MD || f - a > RD) && (b(), e(CD(t)));
      });
    });
  }
  function ct(_) {
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
  await F4("proteus", {
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
  await L4("proteus-rust", Zt);
  async function VD(_, e) {
    V4(_, e);
    const t = await ke((r) => (C4(r), () => E4()));
    return R4(), t;
  }
  async function LD(_, e) {
    const t = er, r = rt(_, e), n = (b, f, d) => ({
      position: {
        x: b - te / 2,
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
    }), a = r.map((b, f) => t.component({
      geometry: n(b.x, b.y, f)
    })), o = _ === "moving" ? new nt(r) : void 0, c = await ke((b) => (L_ = (f) => {
      const d = o == null ? void 0 : o.retarget(f);
      d && a.forEach((I, N) => I.animateTo(n(d[N * 2], d[N * 2 + 1], N), {
        duration: 0.5,
        easing: "easeInOutQuad"
      })), b(f);
    }, () => {
      L_ = void 0;
    }));
    for (const b of a) b.destroy();
    return c;
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
  async function bt(_, e, t) {
    const r = rt(e, t), n = new nt(r), a = _(r, n.current, j[e].radius), o = await ke(ct((c) => {
      e === "moving" && (n.retarget(c), n.advance(c)), a.draw();
    }));
    return a.dispose(), o;
  }
  async function ED(_) {
    const e = FD(xe.css, rt("moving", _), j.moving.radius), t = await ke(ct((r) => e.frame(r)));
    return e.dispose(), t;
  }
  function Tt(_) {
    for (const [e, t] of Object.entries(xe)) t.style.visibility = e === _ ? "visible" : "hidden";
  }
  const x_ = {
    title: "Proteus (TypeScript)",
    surface: "proteus",
    time: LD
  }, $_ = {
    title: "Proteus (Rust)",
    surface: "proteusRust",
    time: VD
  }, GD = {
    title: "CSS",
    surface: "css",
    time: (_, e) => ED(e)
  }, v_ = {
    title: "Canvas 2D",
    surface: "canvas2d",
    time: (_, e) => bt(ID(_r), _, e)
  }, S_ = {
    title: "Naive WebGL2",
    surface: "webgl",
    time: (_, e) => bt(SD(we), _, e)
  }, A_ = {
    title: "Batched WebGL2",
    surface: "webgl",
    time: (_, e) => bt(AD(we), _, e)
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
      GD,
      v_,
      S_,
      A_
    ]
  }, E_ = {
    small: 1 / 0,
    large: V_,
    moving: 1 / 0
  }, OD = {
    small: `Small components (${j.small.min}\u2013${j.small.max} px), still: the cost per component`,
    large: `Large components (${j.large.min}\u2013${j.large.max} px), still: filling pixels dominates`,
    moving: `Moving components (${j.moving.min}\u2013${j.moving.max} px): every one always moving`
  };
  function WD(_) {
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
  function zD() {
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
  function c_() {
    try {
      localStorage.setItem(at, JSON.stringify(V));
    } catch {
    }
  }
  const V = zD();
  if (V.running) {
    const [_, e, t] = V.running.split("|");
    V.cells[V.running] = "crashed | \u2014", V.dropped[`${_}|${t}`] = `crashed at ${e}`, V.running = void 0, c_();
  }
  const UD = (_) => `${_.median.toFixed(2)} | ${_.p99.toFixed(2)}`;
  function rr(_) {
    return Te.filter((e) => e <= E_[_]).flatMap((e) => tr[_].map((t) => [
      e,
      t
    ])).filter(([e, t]) => V.cells[`${_}|${e}|${t.title}`] === void 0);
  }
  async function HD() {
    ye.disabled = true, b_.disabled = true, V.refresh === void 0 && (Tt("webgl"), o_.textContent = "Measuring the refresh rate\u2026", V.refresh = (await ke(ct(() => {
    }))).median, c_());
    for (const _ of ot) for (const [e, t] of rr(_)) {
      const r = `${_}|${e}|${t.title}`;
      if (V.dropped[`${_}|${t.title}`]) {
        V.cells[r] = "skipped | \u2014";
        continue;
      }
      Tt(t.surface), o_.textContent = `${_} scene, ${e} components: ${t.title}\u2026`, V.running = r, c_();
      try {
        const a = await t.time(_, e);
        V.cells[r] = UD(a), a.median >= Dt && (V.dropped[`${_}|${t.title}`] = `slower than ${Dt} ms a frame at ${e}`);
      } catch (a) {
        console.error(a), V.cells[r] = "failed | \u2014", V.dropped[`${_}|${t.title}`] = `failed at ${e}: ${String(a)}`;
      }
      V.running = void 0, c_(), Qt.textContent = nr();
    }
    o_.textContent = "Done. Copy the results below.", ye.textContent = "Run", ye.disabled = false, b_.disabled = false;
  }
  function nr() {
    const _ = [
      WD(V.refresh ?? 0)
    ];
    for (const e of ot) {
      const t = tr[e].map((a) => a.title), r = Te.filter((a) => a <= E_[e]).map((a) => t.map((o) => V.cells[`${e}|${a}|${o}`])).map((a, o) => ({
        count: Te.filter((c) => c <= E_[e])[o],
        cells: a
      })).filter(({ cells: a }) => a.some((o) => o !== void 0));
      if (r.length === 0) continue;
      _.push("", `### ${OD[e]}`, "", "Frame interval, median and p99, in milliseconds:", "", `| Components | ${t.map((a) => `${a} | p99`).join(" | ")} |`, `|---:|${t.map(() => "---:|---:").join("|")}|`, ...r.map(({ count: a, cells: o }) => `| ${a} | ${o.map((c) => c ?? "\u2026 | \u2026").join(" | ")} |`));
      const n = t.map((a) => [
        a,
        V.dropped[`${e}|${a}`]
      ]).filter(([, a]) => a).map(([a, o]) => `- ${a}: ${o}; skipped after that.`);
      n.length > 0 && _.push("", ...n), e === "large" && Te.some((a) => a > V_) && _.push("", `The large scene stops at ${V_}: past it, Safari's tab crashes.`);
    }
    return _.join(`
`);
  }
  ye.addEventListener("click", () => void HD());
  b_.addEventListener("click", () => {
    try {
      localStorage.removeItem(at);
    } catch {
    }
    location.reload();
  });
  const Me = Object.keys(V.cells).length > 0, st = ot.some((_) => rr(_).length > 0);
  Me && (Qt.textContent = nr());
  ye.textContent = Me && st ? "Resume" : "Run";
  o_.textContent = Me ? st ? "A run was under way, and is saved: Resume carries on from where it stopped." : "The last run is complete; its results are below. Start over to run again." : "Ready. Keep this tab in front while it runs: a hidden tab stops drawing.";
  ye.disabled = Me && !st;
  b_.disabled = !Me;
})();
