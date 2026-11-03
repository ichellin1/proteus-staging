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
  const ar = "" + new URL("proteus_sdk_web_bg-D3dUTdcc.wasm", import.meta.url).href, G_ = async (_ = {}, e) => {
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
      p(e, y), p(t, y);
      const r = u.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw D(r[0]);
    }
    animateTo(e, t, r) {
      p(e, y);
      const n = u.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw D(n[0]);
    }
    bakeTexture(e, t, r, n) {
      const a = u_(r, u.__wbindgen_malloc), o = L, c = u.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, o, n);
      return J.__wrap(c);
    }
    bakedImageSize(e) {
      return p(e, y), u.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return p(e, y), u.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bindKey(e, t) {
      const r = oe(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = L, a = u.proteusapp_bindKey(this.__wbg_ptr, e, r, n);
      if (a[1]) throw D(a[0]);
    }
    channelDestroy(e) {
      p(e, ue);
      var t = e.__destroy_into_raw();
      u.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      p(e, ue), p(t, y), p(r, y);
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
      p(e, y), p(t, y);
      const r = u.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw D(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = u.proteusapp_createVideo(this.__wbg_ptr);
      return de.__wrap(e);
    }
    cropImage(e, t) {
      p(e, y);
      const r = u.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw D(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      p(e, y);
      const r = u.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    declaredGeometry(e) {
      return p(e, y), u.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      p(e, y);
      var t = e.__destroy_into_raw();
      const r = u.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    devices(e) {
      return p(e, y), u.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    focus(e) {
      p(e, y);
      const t = u.proteusapp_focus(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw D(t[0]);
    }
    focused() {
      const e = u.proteusapp_focused(this.__wbg_ptr);
      return e === 0 ? void 0 : y.__wrap(e);
    }
    freeResources(e) {
      p(e, y);
      const t = u.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw D(t[0]);
    }
    get(e) {
      return p(e, y), u.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      p(e, y);
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
        return e = r[0], t = r[1], H(r[0], r[1]);
      } finally {
        u.__wbindgen_free(e, t, 1);
      }
    }
    isFocused(e) {
      return p(e, y), u.proteusapp_isFocused(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    loadTexture(e, t) {
      const r = u_(e, u.__wbindgen_malloc), n = L, a = u.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : J.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      p(e, y);
      const a = Le(t, u.__wbindgen_malloc), o = L, c = u.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw D(c[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      p(e, y);
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
      p(e, y), u.proteusapp_onBlur(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onClick(e, t) {
      p(e, y), u.proteusapp_onClick(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDrag(e, t) {
      p(e, y), u.proteusapp_onDrag(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDropped(e, t) {
      p(e, ue), u.proteusapp_onDropped(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocus(e, t) {
      p(e, y), u.proteusapp_onFocus(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocusLost(e) {
      u.proteusapp_onFocusLost(this.__wbg_ptr, e);
    }
    onHoverEnter(e, t) {
      p(e, y), u.proteusapp_onHoverEnter(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverExit(e, t) {
      p(e, y), u.proteusapp_onHoverExit(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onKey(e, t) {
      p(e, y), u.proteusapp_onKey(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onPress(e, t) {
      p(e, y), u.proteusapp_onPress(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onRelease(e, t) {
      p(e, y), u.proteusapp_onRelease(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onTransitionComplete(e, t) {
      p(e, y), u.proteusapp_onTransitionComplete(this.__wbg_ptr, e.__wbg_ptr, t);
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
      p(e, de), u.proteusapp_releaseVideo(this.__wbg_ptr, e.__wbg_ptr);
    }
    removeChild(e, t) {
      p(e, y), p(t, y);
      const r = u.proteusapp_removeChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw D(r[0]);
    }
    resetKeyMap() {
      u.proteusapp_resetKeyMap(this.__wbg_ptr);
    }
    setDeclaredGeometry(e, t) {
      p(e, y);
      const r = u.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setDefaultFocus(e, t) {
      p(e, y);
      const r = u.proteusapp_setDefaultFocus(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setDevices(e, t) {
      p(e, y);
      const r = u.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setDisabled(e, t) {
      p(e, y);
      const r = u.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setFocusGroup(e, t) {
      p(e, y);
      const r = u.proteusapp_setFocusGroup(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setImage(e, t) {
      p(e, y);
      const r = u.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setInputDevices(e) {
      const t = u.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw D(t[0]);
    }
    setInteractive(e, t) {
      p(e, y);
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
      p(e, y);
      const n = oe(t, u.__wbindgen_malloc, u.__wbindgen_realloc), a = L, o = u.proteusapp_setNeighbour(this.__wbg_ptr, e.__wbg_ptr, n, a, !z(r), z(r) ? 0 : r);
      if (o[1]) throw D(o[0]);
    }
    setOpacity(e, t) {
      p(e, y);
      const r = u.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setReadingDirection(e) {
      const t = oe(e, u.__wbindgen_malloc, u.__wbindgen_realloc), r = L, n = u.proteusapp_setReadingDirection(this.__wbg_ptr, t, r);
      if (n[1]) throw D(n[0]);
    }
    setText(e, t) {
      p(e, y);
      const r = u.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setTexture(e, t) {
      p(e, y), p(t, J);
      const r = u.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw D(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      p(e, y);
      const r = u.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    setVideoCrossfade(e, t) {
      p(e, y);
      const r = u.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw D(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      p(e, y);
      const r = u.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw D(r[0]);
    }
    showVideo(e, t) {
      p(e, y), p(t, de);
      const r = u.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw D(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      p(e, y);
      const a = Le(t, u.__wbindgen_malloc), o = L, c = u.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw D(c[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      p(e, y);
      const o = Le(t, u.__wbindgen_malloc), c = L, b = u.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
      if (b[1]) throw D(b[0]);
    }
    splitToWithStates(e, t, r, n) {
      p(e, y);
      const a = u.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw D(a[0]);
    }
    texture(e) {
      const t = u.proteusapp_texture(this.__wbg_ptr, e);
      return J.__wrap(t);
    }
    textureState(e) {
      return p(e, J), u.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
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
      return t[0] !== 0 && (r = H(t[0], t[1]).slice(), u.__wbindgen_free(t[0], t[1] * 1, 1)), r;
    }
    uploadVideoFrame(e, t, r, n) {
      p(e, de);
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
    return Error(H(_, e));
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
    throw new Error(H(_, e));
  }
  function Sr(_) {
    _._wbg_cb_unref();
  }
  function Ar() {
    return q(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Ir() {
    return q(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function Dr() {
    return q(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Tr() {
    return q(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function Fr() {
    return q(function(_, e, t, r) {
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
    return q(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function Mr() {
    return q(function(_, e) {
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
    return q(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function zr(_, e) {
    return _[e >>> 0];
  }
  function Ur() {
    return q(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function qr(_, e) {
    return _[e >>> 0];
  }
  function Hr(_, e) {
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
    return new Error(H(_, e));
  }
  function on(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function cn() {
    return q(function(_) {
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
    return q(function(_, e, t, r, n, a, o) {
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
  function qn(_, e) {
    _.depthStoreOp = W_[e];
  }
  function Hn(_, e) {
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
    _.label = H(e, t);
  }
  function ea(_, e, t) {
    _.label = H(e, t);
  }
  function _a(_, e, t) {
    _.label = H(e, t);
  }
  function ta(_, e, t) {
    _.label = H(e, t);
  }
  function ra(_, e, t) {
    _.label = H(e, t);
  }
  function na(_, e, t) {
    _.label = H(e, t);
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
  function qa(_, e) {
    return _.then(e);
  }
  function Ha(_) {
    _.unmap();
  }
  function ja(_) {
    return _.value;
  }
  function Ka() {
    return q(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, z_(r, n), a, o);
    }, arguments);
  }
  function Na() {
    return q(function(_, e, t, r, n, a) {
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
    return H(_, e);
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
  function p(_, e) {
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
  function H(_, e) {
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
  function q(_, e) {
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
      __wbg_get_unchecked_54a4374c38e08460: qr,
      __wbg_call_5575218572ead796: Dr,
      __wbg_push_f724b5db8acf89d2: un,
      __wbg_set_dc601f4a69da0bc2: En,
      __wbg_call_8e98ed2f3c86c4b5: Tr,
      __wbg_call_0e855b388e315e17: Ir,
      __wbg_get_with_ref_key_6412cf3094599694: Hr,
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
      __wbg_set_depth_store_op_0ea0a215313dbda7: qn,
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
      __wbg_unmap_8f06698a75b8331a: Ha,
      __wbg_destroy_b5b39f25f0799295: Rr,
      __wbg_mapAsync_bb0029907dd91181: _n,
      __wbg_set_dimension_174ad7e2fb67fb4e: Hn,
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
      __wbg_then_591b6b3a75ee817a: qa,
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
  }, ar), { memory: po, __wbg_proteusapp_free: wo, proteusapp_addChild: lo, proteusapp_animateTo: mo, proteusapp_bakeTexture: ho, proteusapp_bakedImageSize: yo, proteusapp_bakedTextSize: xo, proteusapp_bindKey: $o, proteusapp_channelDestroy: vo, proteusapp_channelSet: So, proteusapp_clearFocus: Ao, proteusapp_component: Io, proteusapp_copyBakedImageFrom: Do, proteusapp_createVideo: To, proteusapp_cropImage: Fo, proteusapp_declareGeometry: Bo, proteusapp_declaredGeometry: Po, proteusapp_destroy: ko, proteusapp_devices: Mo, proteusapp_focus: Ro, proteusapp_focused: Co, proteusapp_freeResources: Vo, proteusapp_get: Lo, proteusapp_hideVideo: Eo, proteusapp_inputDevices: Go, proteusapp_inputMode: Oo, proteusapp_isFocused: Wo, proteusapp_loadTexture: zo, proteusapp_mergeFrom: Uo, proteusapp_mergeFromWithBehavior: qo, proteusapp_new: Ho, proteusapp_onAppKey: jo, proteusapp_onBlur: Ko, proteusapp_onClick: No, proteusapp_onDrag: Jo, proteusapp_onDropped: Qo, proteusapp_onFocus: Xo, proteusapp_onFocusLost: Yo, proteusapp_onHoverEnter: Zo, proteusapp_onHoverExit: ec, proteusapp_onKey: _c, proteusapp_onPress: tc, proteusapp_onRelease: rc, proteusapp_onTransitionComplete: nc, proteusapp_pointerLeft: ac, proteusapp_pointerMoved: oc, proteusapp_pointerPressed: cc, proteusapp_pointerReleased: bc, proteusapp_releaseVideo: sc, proteusapp_removeChild: ic, proteusapp_resetKeyMap: fc, proteusapp_setDeclaredGeometry: uc, proteusapp_setDefaultFocus: dc, proteusapp_setDevices: gc, proteusapp_setDisabled: pc, proteusapp_setFocusGroup: wc, proteusapp_setImage: lc, proteusapp_setInputDevices: mc, proteusapp_setInteractive: hc, proteusapp_setKeyRepeat: yc, proteusapp_setLongPressMs: xc, proteusapp_setNavigatingActions: $c, proteusapp_setNeighbour: vc, proteusapp_setOpacity: Sc, proteusapp_setReadingDirection: Ac, proteusapp_setText: Ic, proteusapp_setTexture: Dc, proteusapp_setTransitionInteraction: Tc, proteusapp_setVideoCrossfade: Fc, proteusapp_setVisible: Bc, proteusapp_showVideo: Pc, proteusapp_splitTo: kc, proteusapp_splitToWithBehavior: Mc, proteusapp_splitToWithStates: Rc, proteusapp_texture: Cc, proteusapp_textureState: Vc, proteusapp_tick: Lc, proteusapp_transitionChannel: Ec, proteusapp_unbindKey: Gc, proteusapp_uploadVideoFrame: Oc, __wbg_handle_free: Wc, __wbg_texturehandle_free: zc, __wbg_transitionchannel_free: Uc, __wbg_videohandle_free: qc, handle_fromId: Hc, handle_id: jc, texturehandle_fromId: Kc, texturehandle_id: Nc, __abort_handler: Jc, __instance_terminated: Qc, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Xc, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Yc, __wbindgen_malloc: Zc, __wbindgen_realloc: eb, __wbindgen_exn_store: _b, __externref_table_alloc: tb, __wbindgen_externrefs: rb, __wbindgen_destroy_closure: nb, __externref_table_dealloc: ab, __wbindgen_free: ob, __wbindgen_start: Ct } = go, cb = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: Jc,
    __externref_table_alloc: tb,
    __externref_table_dealloc: ab,
    __instance_terminated: Qc,
    __wbg_handle_free: Wc,
    __wbg_proteusapp_free: wo,
    __wbg_texturehandle_free: zc,
    __wbg_transitionchannel_free: Uc,
    __wbg_videohandle_free: qc,
    __wbindgen_destroy_closure: nb,
    __wbindgen_exn_store: _b,
    __wbindgen_externrefs: rb,
    __wbindgen_free: ob,
    __wbindgen_malloc: Zc,
    __wbindgen_realloc: eb,
    __wbindgen_start: Ct,
    handle_fromId: Hc,
    handle_id: jc,
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
    proteusapp_mergeFromWithBehavior: qo,
    proteusapp_new: Ho,
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
    proteusapp_setText: Ic,
    proteusapp_setTexture: Dc,
    proteusapp_setTransitionInteraction: Tc,
    proteusapp_setVideoCrossfade: Fc,
    proteusapp_setVisible: Bc,
    proteusapp_showVideo: Pc,
    proteusapp_splitTo: kc,
    proteusapp_splitToWithBehavior: Mc,
    proteusapp_splitToWithStates: Rc,
    proteusapp_texture: Cc,
    proteusapp_textureState: Vc,
    proteusapp_tick: Lc,
    proteusapp_transitionChannel: Ec,
    proteusapp_unbindKey: Gc,
    proteusapp_uploadVideoFrame: Oc,
    texturehandle_fromId: Kc,
    texturehandle_id: Nc,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Yc,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Xc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  uo(cb);
  Ct();
  const bb = "" + new URL("proteus_host_web_bg-PO0Spm-z.wasm", import.meta.url).href;
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
      w(e, x), w(t, x);
      const r = i.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw T(r[0]);
    }
    animateTo(e, t, r) {
      w(e, x);
      const n = i.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw T(n[0]);
    }
    bakeTexture(e, t, r, n) {
      const a = p_(r, i.__wbindgen_malloc), o = R, c = i.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, o, n);
      return ae.__wrap(c);
    }
    bakedImageSize(e) {
      return w(e, x), i.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return w(e, x), i.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bindKey(e, t) {
      const r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R, a = i.proteusapp_bindKey(this.__wbg_ptr, e, r, n);
      if (a[1]) throw T(a[0]);
    }
    channelDestroy(e) {
      w(e, ge);
      var t = e.__destroy_into_raw();
      i.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      w(e, ge), w(t, x), w(r, x);
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
      w(e, x), w(t, x);
      const r = i.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw T(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = i.proteusapp_createVideo(this.__wbg_ptr);
      return pe.__wrap(e);
    }
    cropImage(e, t) {
      w(e, x);
      const r = i.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw T(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      w(e, x);
      const r = i.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    declaredGeometry(e) {
      return w(e, x), i.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      w(e, x);
      var t = e.__destroy_into_raw();
      const r = i.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    devices(e) {
      return w(e, x), i.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    focus(e) {
      w(e, x);
      const t = i.proteusapp_focus(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw T(t[0]);
    }
    focused() {
      const e = i.proteusapp_focused(this.__wbg_ptr);
      return e === 0 ? void 0 : x.__wrap(e);
    }
    freeResources(e) {
      w(e, x);
      const t = i.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw T(t[0]);
    }
    get(e) {
      return w(e, x), i.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      w(e, x);
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
      return w(e, x), i.proteusapp_isFocused(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    loadTexture(e, t) {
      const r = p_(e, i.__wbindgen_malloc), n = R, a = i.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : ae.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      w(e, x);
      const a = je(t, i.__wbindgen_malloc), o = R, c = i.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw T(c[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      w(e, x);
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
      w(e, x), i.proteusapp_onBlur(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onClick(e, t) {
      w(e, x), i.proteusapp_onClick(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDrag(e, t) {
      w(e, x), i.proteusapp_onDrag(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDropped(e, t) {
      w(e, ge), i.proteusapp_onDropped(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocus(e, t) {
      w(e, x), i.proteusapp_onFocus(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocusLost(e) {
      i.proteusapp_onFocusLost(this.__wbg_ptr, e);
    }
    onHoverEnter(e, t) {
      w(e, x), i.proteusapp_onHoverEnter(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverExit(e, t) {
      w(e, x), i.proteusapp_onHoverExit(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onKey(e, t) {
      w(e, x), i.proteusapp_onKey(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onPress(e, t) {
      w(e, x), i.proteusapp_onPress(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onRelease(e, t) {
      w(e, x), i.proteusapp_onRelease(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onTransitionComplete(e, t) {
      w(e, x), i.proteusapp_onTransitionComplete(this.__wbg_ptr, e.__wbg_ptr, t);
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
      w(e, pe), i.proteusapp_releaseVideo(this.__wbg_ptr, e.__wbg_ptr);
    }
    removeChild(e, t) {
      w(e, x), w(t, x);
      const r = i.proteusapp_removeChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw T(r[0]);
    }
    resetKeyMap() {
      i.proteusapp_resetKeyMap(this.__wbg_ptr);
    }
    setDeclaredGeometry(e, t) {
      w(e, x);
      const r = i.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setDefaultFocus(e, t) {
      w(e, x);
      const r = i.proteusapp_setDefaultFocus(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setDevices(e, t) {
      w(e, x);
      const r = i.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setDisabled(e, t) {
      w(e, x);
      const r = i.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setFocusGroup(e, t) {
      w(e, x);
      const r = i.proteusapp_setFocusGroup(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setImage(e, t) {
      w(e, x);
      const r = i.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setInputDevices(e) {
      const t = i.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw T(t[0]);
    }
    setInteractive(e, t) {
      w(e, x);
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
      const t = xl(e, i.__wbindgen_malloc), r = R;
      i.proteusapp_setNavigatingActions(this.__wbg_ptr, t, r);
    }
    setNeighbour(e, t, r) {
      w(e, x);
      const n = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R, o = i.proteusapp_setNeighbour(this.__wbg_ptr, e.__wbg_ptr, n, a, !$(r), $(r) ? 0 : r);
      if (o[1]) throw T(o[0]);
    }
    setOpacity(e, t) {
      w(e, x);
      const r = i.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setReadingDirection(e) {
      const t = W(e, i.__wbindgen_malloc, i.__wbindgen_realloc), r = R, n = i.proteusapp_setReadingDirection(this.__wbg_ptr, t, r);
      if (n[1]) throw T(n[0]);
    }
    setText(e, t) {
      w(e, x);
      const r = i.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setTexture(e, t) {
      w(e, x), w(t, ae);
      const r = i.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw T(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      w(e, x);
      const r = i.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    setVideoCrossfade(e, t) {
      w(e, x);
      const r = i.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw T(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      w(e, x);
      const r = i.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw T(r[0]);
    }
    showVideo(e, t) {
      w(e, x), w(t, pe);
      const r = i.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw T(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      w(e, x);
      const a = je(t, i.__wbindgen_malloc), o = R, c = i.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw T(c[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      w(e, x);
      const o = je(t, i.__wbindgen_malloc), c = R, b = i.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
      if (b[1]) throw T(b[0]);
    }
    splitToWithStates(e, t, r, n) {
      w(e, x);
      const a = i.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw T(a[0]);
    }
    texture(e) {
      const t = i.proteusapp_texture(this.__wbg_ptr, e);
      return ae.__wrap(t);
    }
    textureState(e) {
      return w(e, ae), i.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
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
      w(e, pe);
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
  function sb(_, e, t, r) {
    const n = W(_, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    return i.mount(n, a, e, $(t) ? 0 : B(t), r);
  }
  function ib(_, e) {
    return Error(A(_, e));
  }
  function fb(_) {
    return Number(_);
  }
  function ub(_, e) {
    const t = String(e), r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function db(_) {
    return _.Window;
  }
  function gb(_) {
    return _.WorkerGlobalScope;
  }
  function pb(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    C().setBigInt64(_ + 8, $(r) ? BigInt(0) : r, true), C().setInt32(_ + 0, !$(r), true);
  }
  function wb(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return $(t) ? 16777215 : t ? 1 : 0;
  }
  function lb(_, e) {
    const t = M_(e), r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function mb(_, e) {
    return _ in e;
  }
  function hb(_) {
    return typeof _ == "bigint";
  }
  function yb(_) {
    return typeof _ == "function";
  }
  function xb(_) {
    return _ === null;
  }
  function $b(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function vb(_) {
    return typeof _ == "string";
  }
  function Sb(_) {
    return _ === void 0;
  }
  function Ab(_, e) {
    return _ === e;
  }
  function Ib(_, e) {
    return _ == e;
  }
  function Db(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    C().setFloat64(_ + 8, $(r) ? 0 : r, true), C().setInt32(_ + 0, !$(r), true);
  }
  function Tb(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Fb(_, e) {
    throw new Error(A(_, e));
  }
  function Bb(_) {
    _._wbg_cb_unref();
  }
  function Pb(_, e) {
    _.activeTexture(e >>> 0);
  }
  function kb(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Mb() {
    return h(function(_, e, t, r) {
      _.addEventListener(A(e, t), r);
    }, arguments);
  }
  function Rb(_) {
    return _.altKey;
  }
  function Cb(_, e, t) {
    _.attachShader(e, t);
  }
  function Vb(_, e, t) {
    _.attachShader(e, t);
  }
  function Lb(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function Eb() {
    return h(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Gb(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, A(r, n));
  }
  function Ob(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, A(r, n));
  }
  function Wb(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function zb(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function Ub(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function qb(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function Hb(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function jb(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Kb(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Nb(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function Jb(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Qb(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Xb(_, e) {
    _.bindVertexArrayOES(e);
  }
  function Yb(_, e) {
    _.bindVertexArray(e);
  }
  function Zb(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function es(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function _s(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function ts(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function rs(_, e) {
    _.blendEquation(e >>> 0);
  }
  function ns(_, e) {
    _.blendEquation(e >>> 0);
  }
  function as(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function os(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function cs(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function bs(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function ss(_, e, t, r, n, a, o, c, b, f, d) {
    _.blitFramebuffer(e, t, r, n, a, o, c, b, f >>> 0, d >>> 0);
  }
  function is(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
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
    _.bufferSubData(e >>> 0, t, r);
  }
  function ps(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function ws(_) {
    return _.button;
  }
  function ls() {
    return h(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function ms() {
    return h(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function hs() {
    return h(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function ys(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, E(r, n));
  }
  function xs(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, Y(r, n));
  }
  function $s(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, ve(r, n));
  }
  function vs(_, e) {
    _.clearDepth(e);
  }
  function Ss(_, e) {
    _.clearDepth(e);
  }
  function As(_, e) {
    _.clearStencil(e);
  }
  function Is(_, e) {
    _.clearStencil(e);
  }
  function Ds(_, e) {
    _.clear(e >>> 0);
  }
  function Ts(_, e) {
    _.clear(e >>> 0);
  }
  function Fs(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function Bs(_, e) {
    const t = e.code, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Ps(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function ks(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Ms(_, e) {
    _.compileShader(e);
  }
  function Rs(_, e) {
    _.compileShader(e);
  }
  function Cs(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function Vs(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function Ls(_, e, t, r, n, a, o, c, b, f) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b, f);
  }
  function Es(_, e, t, r, n, a, o, c, b, f, d, I) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d, I);
  }
  function Gs(_, e, t, r, n, a, o, c, b, f, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d);
  }
  function Os() {
    return h(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function Ws(_) {
    return _.contentRect;
  }
  function zs(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function Us(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function qs(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function Hs(_, e, t, r, n, a, o, c, b, f) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f);
  }
  function js() {
    return h(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function Ks() {
    return h(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function Ns(_, e) {
    return _.createBindGroup(e);
  }
  function Js(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : B(e);
  }
  function Qs() {
    return h(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function Xs(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : B(e);
  }
  function Ys(_, e) {
    return _.createCommandEncoder(e);
  }
  function Zs(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : B(e);
  }
  function ei(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : B(e);
  }
  function _i(_, e) {
    return _.createPipelineLayout(e);
  }
  function ti(_) {
    const e = _.createProgram();
    return $(e) ? 0 : B(e);
  }
  function ri(_) {
    const e = _.createProgram();
    return $(e) ? 0 : B(e);
  }
  function ni(_) {
    const e = _.createQuery();
    return $(e) ? 0 : B(e);
  }
  function ai() {
    return h(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function oi(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : B(e);
  }
  function ci(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : B(e);
  }
  function bi(_, e) {
    return _.createSampler(e);
  }
  function si(_) {
    const e = _.createSampler();
    return $(e) ? 0 : B(e);
  }
  function ii(_, e) {
    return _.createShaderModule(e);
  }
  function fi(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : B(t);
  }
  function ui(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : B(t);
  }
  function di(_) {
    const e = _.createTexture();
    return $(e) ? 0 : B(e);
  }
  function gi(_) {
    const e = _.createTexture();
    return $(e) ? 0 : B(e);
  }
  function pi() {
    return h(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function wi(_) {
    const e = _.createVertexArrayOES();
    return $(e) ? 0 : B(e);
  }
  function li(_) {
    const e = _.createVertexArray();
    return $(e) ? 0 : B(e);
  }
  function mi() {
    return h(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function hi(_) {
    return _.ctrlKey;
  }
  function yi(_, e) {
    _.cullFace(e >>> 0);
  }
  function xi(_, e) {
    _.cullFace(e >>> 0);
  }
  function $i(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function vi(_, e) {
    _.deleteBuffer(e);
  }
  function Si(_, e) {
    _.deleteBuffer(e);
  }
  function Ai(_, e) {
    _.deleteFramebuffer(e);
  }
  function Ii(_, e) {
    _.deleteFramebuffer(e);
  }
  function Di(_, e) {
    _.deleteProgram(e);
  }
  function Ti(_, e) {
    _.deleteProgram(e);
  }
  function Fi(_, e) {
    _.deleteQuery(e);
  }
  function Bi(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Pi(_, e) {
    _.deleteRenderbuffer(e);
  }
  function ki(_, e) {
    _.deleteSampler(e);
  }
  function Mi(_, e) {
    _.deleteShader(e);
  }
  function Ri(_, e) {
    _.deleteShader(e);
  }
  function Ci(_, e) {
    _.deleteSync(e);
  }
  function Vi(_, e) {
    _.deleteTexture(e);
  }
  function Li(_, e) {
    _.deleteTexture(e);
  }
  function Ei(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function Gi(_, e) {
    _.deleteVertexArray(e);
  }
  function Oi(_, e) {
    _.depthFunc(e >>> 0);
  }
  function Wi(_, e) {
    _.depthFunc(e >>> 0);
  }
  function zi(_, e) {
    _.depthMask(e !== 0);
  }
  function Ui(_, e) {
    _.depthMask(e !== 0);
  }
  function qi(_, e, t) {
    _.depthRange(e, t);
  }
  function Hi(_, e, t) {
    _.depthRange(e, t);
  }
  function ji(_, e) {
    const t = e.description, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Ki(_) {
    _.destroy();
  }
  function Ni(_) {
    return _.devicePixelRatio;
  }
  function Ji(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function Qi(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function Xi(_, e) {
    _.disable(e >>> 0);
  }
  function Yi(_, e) {
    _.disable(e >>> 0);
  }
  function Zi(_) {
    const e = _.document;
    return $(e) ? 0 : B(e);
  }
  function ef(_) {
    return _.done;
  }
  function _f(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function tf(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function rf(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function nf(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function af(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function of(_, e) {
    _.drawBuffers(e);
  }
  function cf(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function bf(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function sf(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function ff(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function uf(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function df(_, e) {
    _.enable(e >>> 0);
  }
  function gf(_, e) {
    _.enable(e >>> 0);
  }
  function pf(_, e) {
    _.endQuery(e >>> 0);
  }
  function wf(_) {
    _.end();
  }
  function lf(_) {
    return Object.entries(_);
  }
  function mf(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function hf(_) {
    console.error(_);
  }
  function yf(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(A(_, e));
    } finally {
      i.__wbindgen_free(t, r, 1);
    }
  }
  function xf(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return $(r) ? 0 : B(r);
  }
  function $f(_) {
    return _.finish();
  }
  function vf(_, e) {
    return _.finish(e);
  }
  function Sf(_) {
    _.flush();
  }
  function Af(_) {
    _.flush();
  }
  function If() {
    return h(function(_) {
      _.focus();
    }, arguments);
  }
  function Df(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function Tf(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function Ff(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function Bf(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function Pf(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function kf(_, e, t, r, n, a, o) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, o);
  }
  function Mf(_, e) {
    _.frontFace(e >>> 0);
  }
  function Rf(_, e) {
    _.frontFace(e >>> 0);
  }
  function Cf(_) {
    return _.getBoundingClientRect();
  }
  function Vf(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function Lf() {
    return h(function(_, e, t, r) {
      const n = _.getContext(A(e, t), r);
      return $(n) ? 0 : B(n);
    }, arguments);
  }
  function Ef() {
    return h(function(_, e, t) {
      const r = _.getContext(A(e, t));
      return $(r) ? 0 : B(r);
    }, arguments);
  }
  function Gf() {
    return h(function(_, e, t) {
      const r = _.getContext(A(e, t));
      return $(r) ? 0 : B(r);
    }, arguments);
  }
  function Of() {
    return h(function(_, e, t, r) {
      const n = _.getContext(A(e, t), r);
      return $(n) ? 0 : B(n);
    }, arguments);
  }
  function Wf() {
    return h(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function zf(_, e, t) {
    const r = _.getElementById(A(e, t));
    return $(r) ? 0 : B(r);
  }
  function Uf() {
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
  function Hf() {
    return h(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function jf() {
    return h(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function Kf() {
    return h(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function Nf(_) {
    const e = _.getPreferredCanvasFormat();
    return (ce.indexOf(e) + 1 || 96) - 1;
  }
  function Jf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Qf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Xf(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function Yf(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function Zf(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function eu(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function _u(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function tu(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function ru(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function nu(_) {
    const e = _.getSupportedExtensions();
    return $(e) ? 0 : B(e);
  }
  function au(_) {
    const e = _.getSupportedProfiles();
    return $(e) ? 0 : B(e);
  }
  function ou(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function cu(_, e, t, r) {
    return _.getUniformBlockIndex(e, A(t, r));
  }
  function bu(_, e, t, r) {
    const n = _.getUniformLocation(e, A(t, r));
    return $(n) ? 0 : B(n);
  }
  function su(_, e, t, r) {
    const n = _.getUniformLocation(e, A(t, r));
    return $(n) ? 0 : B(n);
  }
  function iu(_, e) {
    return _[e >>> 0];
  }
  function fu(_, e) {
    const t = _[e >>> 0];
    return $(t) ? 0 : B(t);
  }
  function uu() {
    return h(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function du(_, e) {
    return _[e >>> 0];
  }
  function gu(_, e) {
    return _[e];
  }
  function pu(_) {
    return _.gpu;
  }
  function wu(_, e, t) {
    return _.hasAttribute(A(e, t));
  }
  function lu(_) {
    return _.height;
  }
  function mu(_) {
    return _.height;
  }
  function hu(_) {
    return _.hidden;
  }
  function yu(_, e, t) {
    return _.includes(e, t);
  }
  function xu(_) {
    return _.info;
  }
  function $u(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function vu(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function Su(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function Au(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Iu(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function Du(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function Tu(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function Fu(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function Bu(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Pu(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function ku() {
    return h(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function Mu(_) {
    return Array.isArray(_);
  }
  function Ru(_) {
    return _.isComposing;
  }
  function Cu(_) {
    return Number.isSafeInteger(_);
  }
  function Vu(_, e) {
    return Object.is(_, e);
  }
  function Lu() {
    return Symbol.iterator;
  }
  function Eu(_, e) {
    const t = e.key, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Gu(_, e) {
    const t = e.label, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Ou(_) {
    return _.length;
  }
  function Wu(_) {
    return _.length;
  }
  function zu(_) {
    return _.limits;
  }
  function Uu(_) {
    return _.limits;
  }
  function qu(_, e) {
    _.linkProgram(e);
  }
  function Hu(_, e) {
    _.linkProgram(e);
  }
  function ju(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function Ku(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function Nu(_) {
    return _.maxBindGroups;
  }
  function Ju(_) {
    return _.maxBindingsPerBindGroup;
  }
  function Qu(_) {
    return _.maxBufferSize;
  }
  function Xu(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function Yu(_) {
    return _.maxColorAttachments;
  }
  function Zu(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function ed(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function _d(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function td(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function rd(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function nd(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function ad(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function od(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function cd(_) {
    return _.maxInterStageShaderVariables;
  }
  function bd(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function sd(_) {
    return _.maxSamplersPerShaderStage;
  }
  function id(_) {
    return _.maxStorageBufferBindingSize;
  }
  function fd(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function ud(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function dd(_) {
    return _.maxTextureArrayLayers;
  }
  function gd(_) {
    return _.maxTextureDimension1D;
  }
  function pd(_) {
    return _.maxTextureDimension2D;
  }
  function wd(_) {
    return _.maxTextureDimension3D;
  }
  function ld(_) {
    return _.maxUniformBufferBindingSize;
  }
  function md(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function hd(_) {
    return _.maxVertexAttributes;
  }
  function yd(_) {
    return _.maxVertexBufferArrayStride;
  }
  function xd(_) {
    return _.maxVertexBuffers;
  }
  function $d(_) {
    return _.metaKey;
  }
  function vd(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function Sd(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function Ad(_) {
    return _.navigator;
  }
  function Id(_) {
    return _.navigator;
  }
  function Dd() {
    return h(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function Td() {
    return new Error();
  }
  function Fd() {
    return new Object();
  }
  function Bd() {
    return new Array();
  }
  function Pd(_) {
    return new Uint8Array(_);
  }
  function kd(_, e) {
    return new Error(A(_, e));
  }
  function Md(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, o) => {
        const c = t.a;
        t.a = 0;
        try {
          return J2(c, t.b, a, o);
        } finally {
          t.a = c;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function Rd(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function Cd() {
    return h(function(_) {
      return _.next();
    }, arguments);
  }
  function Vd(_) {
    return _.next;
  }
  function Ld(_, e) {
    _.observe(e);
  }
  function Ed(_) {
    return Array.of(_);
  }
  function Gd(_) {
    return _.offsetX;
  }
  function Od(_) {
    return _.offsetY;
  }
  function Wd(_) {
    return _.onSubmittedWorkDone();
  }
  function zd(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function Ud(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function qd(_, e, t) {
    _.polygonOffset(e, t);
  }
  function Hd(_, e, t) {
    _.polygonOffset(e, t);
  }
  function jd(_) {
    _.preventDefault();
  }
  function Kd(_) {
    return P_.__wrap(_);
  }
  function Nd(_, e, t) {
    Uint8Array.prototype.set.call(s_(_, e), t);
  }
  function Jd(_, e) {
    return _.push(e);
  }
  function Qd(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function Xd() {
    return h(function(_, e, t) {
      return _.querySelectorAll(A(e, t));
    }, arguments);
  }
  function Yd() {
    return h(function(_, e, t) {
      const r = _.querySelector(A(e, t));
      return $(r) ? 0 : B(r);
    }, arguments);
  }
  function Zd(_) {
    return _.queueMicrotask;
  }
  function eg(_) {
    queueMicrotask(_);
  }
  function _g(_) {
    return _.queue;
  }
  function tg(_, e) {
    _.readBuffer(e >>> 0);
  }
  function rg() {
    return h(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
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
  function og(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function cg(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function bg(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function sg(_) {
    return _.repeat;
  }
  function ig(_, e) {
    return _.requestAdapter(e);
  }
  function fg(_) {
    return _.requestAdapter();
  }
  function ug() {
    return h(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function dg(_, e) {
    return _.requestDevice(e);
  }
  function gg(_) {
    return Promise.resolve(_);
  }
  function pg(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function wg(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function lg(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function mg(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function hg() {
    return h(function(_, e, t, r, n) {
      _.setAttribute(A(e, t), A(r, n));
    }, arguments);
  }
  function yg() {
    return h(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, ve(r, n), a, o >>> 0);
    }, arguments);
  }
  function xg(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function $g(_, e, t, r, n) {
    _.setIndexBuffer(e, H_[t], r, n);
  }
  function vg(_, e, t, r) {
    _.setIndexBuffer(e, H_[t], r);
  }
  function Sg(_, e) {
    _.setPipeline(e);
  }
  function Ag(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function Ig(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function Dg(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
  }
  function Tg(_, e, t) {
    _.set(e, t >>> 0);
  }
  function Fg() {
    return h(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function Bg(_, e, t) {
    _[e] = t;
  }
  function Pg(_, e) {
    _.a = e;
  }
  function kg(_, e) {
    _.access = ol[e];
  }
  function Mg(_, e) {
    _.addressModeU = U_[e];
  }
  function Rg(_, e) {
    _.addressModeV = U_[e];
  }
  function Cg(_, e) {
    _.addressModeW = U_[e];
  }
  function Vg(_, e) {
    _.alpha = e;
  }
  function Lg(_, e) {
    _.alphaMode = Z2[e];
  }
  function Eg(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function Gg(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function Og(_, e) {
    _.arrayStride = e;
  }
  function Wg(_, e) {
    _.aspect = Wt[e];
  }
  function zg(_, e) {
    _.aspect = Wt[e];
  }
  function Ug(_, e) {
    _.attributes = e;
  }
  function qg(_, e) {
    _.b = e;
  }
  function Hg(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function jg(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function Kg(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function Ng(_, e) {
    _.bindGroupLayouts = e;
  }
  function Jg(_, e) {
    _.binding = e >>> 0;
  }
  function Qg(_, e) {
    _.binding = e >>> 0;
  }
  function Xg(_, e) {
    _.blend = e;
  }
  function Yg(_, e) {
    _.buffer = e;
  }
  function Zg(_, e) {
    _.buffer = e;
  }
  function e0(_, e) {
    _.buffers = e;
  }
  function _0(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function t0(_, e) {
    _.clearValue = e;
  }
  function r0(_, e, t) {
    _.code = A(e, t);
  }
  function n0(_, e) {
    _.colorAttachments = e;
  }
  function a0(_, e) {
    _.color = e;
  }
  function o0(_, e) {
    _.compare = q_[e];
  }
  function c0(_, e) {
    _.compare = q_[e];
  }
  function b0(_, e) {
    _.count = e >>> 0;
  }
  function s0(_, e) {
    _.cullMode = el[e];
  }
  function i0(_, e, t) {
    _[e >>> 0] = t;
  }
  function f0(_, e) {
    _.depthBias = e;
  }
  function u0(_, e) {
    _.depthBiasClamp = e;
  }
  function d0(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function g0(_, e) {
    _.depthClearValue = e;
  }
  function p0(_, e) {
    _.depthCompare = q_[e];
  }
  function w0(_, e) {
    _.depthFailOp = K_[e];
  }
  function l0(_, e) {
    _.depthLoadOp = j_[e];
  }
  function m0(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function h0(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function y0(_, e) {
    _.depthStencil = e;
  }
  function x0(_, e) {
    _.depthStencilAttachment = e;
  }
  function $0(_, e) {
    _.depthStoreOp = N_[e];
  }
  function v0(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function S0(_, e) {
    _.device = e;
  }
  function A0(_, e) {
    _.dimension = J_[e];
  }
  function I0(_, e) {
    _.dimension = cl[e];
  }
  function D0(_, e) {
    _.dstFactor = Gt[e];
  }
  function T0(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function F0(_, e) {
    _.entries = e;
  }
  function B0(_, e) {
    _.entries = e;
  }
  function P0(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function k0(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function M0(_, e) {
    _.externalTexture = e;
  }
  function R0(_, e) {
    _.failOp = K_[e];
  }
  function C0(_, e) {
    _.format = ce[e];
  }
  function V0(_, e) {
    _.format = sl[e];
  }
  function L0(_, e) {
    _.format = ce[e];
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
    _.fragment = e;
  }
  function U0(_, e) {
    _.frontFace = _l[e];
  }
  function q0(_, e) {
    _.g = e;
  }
  function H0(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function j0(_, e) {
    _.height = e >>> 0;
  }
  function K0(_, e) {
    _.height = e >>> 0;
  }
  function N0(_, e) {
    _.height = e >>> 0;
  }
  function J0(_, e, t) {
    _.label = A(e, t);
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
  function bp(_, e) {
    _.layout = e;
  }
  function sp(_, e) {
    _.layout = e;
  }
  function ip(_, e) {
    _.loadOp = j_[e];
  }
  function fp(_, e) {
    _.lodMaxClamp = e;
  }
  function up(_, e) {
    _.lodMinClamp = e;
  }
  function dp(_, e) {
    _.magFilter = Ot[e];
  }
  function gp(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function pp(_, e) {
    _.mask = e >>> 0;
  }
  function wp(_, e) {
    _.maxAnisotropy = e;
  }
  function lp(_, e) {
    _.minBindingSize = e;
  }
  function mp(_, e) {
    _.minFilter = Ot[e];
  }
  function hp(_, e) {
    _.mipLevel = e >>> 0;
  }
  function yp(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function xp(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function $p(_, e) {
    _.mipmapFilter = tl[e];
  }
  function vp(_, e) {
    _.module = e;
  }
  function Sp(_, e) {
    _.module = e;
  }
  function Ap(_, e) {
    _.multisample = e;
  }
  function Ip(_, e) {
    _.multisampled = e !== 0;
  }
  function Dp(_, e) {
    _.offset = e;
  }
  function Tp(_, e) {
    _.offset = e;
  }
  function Fp(_, e) {
    _.offset = e;
  }
  function Bp(_, e) {
    _.operation = X2[e];
  }
  function Pp(_, e) {
    _.origin = e;
  }
  function kp(_, e) {
    _.passOp = K_[e];
  }
  function Mp(_, e) {
    _.powerPreference = rl[e];
  }
  function Rp(_, e) {
    _.primitive = e;
  }
  function Cp(_, e) {
    _.querySet = e;
  }
  function Vp(_, e) {
    _.r = e;
  }
  function Lp(_, e) {
    _.requiredFeatures = e;
  }
  function Ep(_, e) {
    _.requiredLimits = e;
  }
  function Gp(_, e) {
    _.resolveTarget = e;
  }
  function Op(_, e) {
    _.resource = e;
  }
  function Wp(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function zp(_, e) {
    _.sampleCount = e >>> 0;
  }
  function Up(_, e) {
    _.sampleType = bl[e];
  }
  function qp(_, e) {
    _.sampler = e;
  }
  function Hp(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function jp(_, e) {
    _.size = e;
  }
  function Kp(_, e) {
    _.size = e;
  }
  function Np(_, e) {
    _.size = e;
  }
  function Jp(_, e) {
    _.srcFactor = Gt[e];
  }
  function Qp(_, e) {
    _.stencilBack = e;
  }
  function Xp(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function Yp(_, e) {
    _.stencilFront = e;
  }
  function Zp(_, e) {
    _.stencilLoadOp = j_[e];
  }
  function ew(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function _w(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function tw(_, e) {
    _.stencilStoreOp = N_[e];
  }
  function rw(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function nw(_, e) {
    _.stepMode = il[e];
  }
  function aw(_, e) {
    _.storageTexture = e;
  }
  function ow(_, e) {
    _.storeOp = N_[e];
  }
  function cw(_, e) {
    _.stripIndexFormat = H_[e];
  }
  function bw(_, e) {
    _.targets = e;
  }
  function sw(_, e) {
    _.texture = e;
  }
  function iw(_, e) {
    _.texture = e;
  }
  function fw(_, e) {
    _.timestampWrites = e;
  }
  function uw(_, e) {
    _.topology = nl[e];
  }
  function dw(_, e) {
    _.type = Y2[e];
  }
  function gw(_, e) {
    _.type = al[e];
  }
  function pw(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function ww(_, e) {
    _.usage = e >>> 0;
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
    _.vertex = e;
  }
  function xw(_, e) {
    _.view = e;
  }
  function $w(_, e) {
    _.view = e;
  }
  function vw(_, e) {
    _.viewDimension = J_[e];
  }
  function Sw(_, e) {
    _.viewDimension = J_[e];
  }
  function Aw(_, e) {
    _.viewFormats = e;
  }
  function Iw(_, e) {
    _.viewFormats = e;
  }
  function Dw(_, e) {
    _.visibility = e >>> 0;
  }
  function Tw(_, e) {
    _.width = e >>> 0;
  }
  function Fw(_, e) {
    _.width = e >>> 0;
  }
  function Bw(_, e) {
    _.width = e >>> 0;
  }
  function Pw(_, e) {
    _.writeMask = e >>> 0;
  }
  function kw(_, e) {
    _.x = e >>> 0;
  }
  function Mw(_, e) {
    _.y = e >>> 0;
  }
  function Rw(_, e) {
    _.z = e >>> 0;
  }
  function Cw(_, e, t, r) {
    _.shaderSource(e, A(t, r));
  }
  function Vw(_, e, t, r) {
    _.shaderSource(e, A(t, r));
  }
  function Lw(_) {
    return _.shiftKey;
  }
  function Ew(_, e) {
    const t = e.stack, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Gw() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return $(_) ? 0 : B(_);
  }
  function Ow() {
    const _ = typeof global > "u" ? null : global;
    return $(_) ? 0 : B(_);
  }
  function Ww() {
    const _ = typeof self > "u" ? null : self;
    return $(_) ? 0 : B(_);
  }
  function zw() {
    const _ = typeof window > "u" ? null : window;
    return $(_) ? 0 : B(_);
  }
  function Uw(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function qw(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function Hw(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function jw(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function Kw(_, e) {
    _.stencilMask(e >>> 0);
  }
  function Nw(_, e) {
    _.stencilMask(e >>> 0);
  }
  function Jw(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Qw(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Xw(_, e) {
    _.submit(e);
  }
  function Yw() {
    return h(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
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
    return h(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function t1() {
    return h(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function r1(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function n1(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function a1(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function o1(_, e, t, r, n, a, o) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, o);
  }
  function c1() {
    return h(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
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
    return h(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
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
  function $1(_, e, t) {
    return _.then(e, t);
  }
  function v1(_, e, t) {
    return _.then(e, t);
  }
  function S1(_, e) {
    return _.then(e);
  }
  function A1(_, e, t) {
    _.uniform1f(e, t);
  }
  function I1(_, e, t) {
    _.uniform1f(e, t);
  }
  function D1(_, e, t) {
    _.uniform1i(e, t);
  }
  function T1(_, e, t) {
    _.uniform1i(e, t);
  }
  function F1(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function B1(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function P1(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function k1(_, e, t, r) {
    _.uniform2iv(e, Y(t, r));
  }
  function M1(_, e, t, r) {
    _.uniform2iv(e, Y(t, r));
  }
  function R1(_, e, t, r) {
    _.uniform2uiv(e, ve(t, r));
  }
  function C1(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function V1(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function L1(_, e, t, r) {
    _.uniform3iv(e, Y(t, r));
  }
  function E1(_, e, t, r) {
    _.uniform3iv(e, Y(t, r));
  }
  function G1(_, e, t, r) {
    _.uniform3uiv(e, ve(t, r));
  }
  function O1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function W1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function z1(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function U1(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function q1(_, e, t, r) {
    _.uniform4iv(e, Y(t, r));
  }
  function H1(_, e, t, r) {
    _.uniform4iv(e, Y(t, r));
  }
  function j1(_, e, t, r) {
    _.uniform4uiv(e, ve(t, r));
  }
  function K1(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function N1(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function J1(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function Q1(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, E(r, n));
  }
  function X1(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, E(r, n));
  }
  function Y1(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function Z1(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function e2(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, E(r, n));
  }
  function _2(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, E(r, n));
  }
  function t2(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function r2(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function n2(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, E(r, n));
  }
  function a2(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, E(r, n));
  }
  function o2(_) {
    _.unmap();
  }
  function c2(_, e) {
    _.useProgram(e);
  }
  function b2(_, e) {
    _.useProgram(e);
  }
  function s2(_) {
    return _.value;
  }
  function i2(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function f2(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function u2(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function d2(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function g2(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function p2(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function w2(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function l2(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function m2(_) {
    return _.width;
  }
  function h2(_) {
    return _.width;
  }
  function y2() {
    return h(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, s_(r, n), a, o);
    }, arguments);
  }
  function x2() {
    return h(function(_, e, t, r, n, a) {
      _.writeTexture(e, s_(t, r), n, a);
    }, arguments);
  }
  function $2(_, e) {
    return Z(_, e, U2);
  }
  function v2(_, e) {
    return Z(_, e, N2);
  }
  function S2(_, e) {
    return Z(_, e, Q2);
  }
  function A2(_, e) {
    return Z(_, e, q2);
  }
  function I2(_, e) {
    return Z(_, e, H2);
  }
  function D2(_, e) {
    return Z(_, e, j2);
  }
  function T2(_, e) {
    return Z(_, e, K2);
  }
  function F2(_, e) {
    return Z(_, e, z2);
  }
  function B2(_) {
    return _;
  }
  function P2(_) {
    return _;
  }
  function k2(_, e) {
    return E(_, e);
  }
  function M2(_, e) {
    return fl(_, e);
  }
  function R2(_, e) {
    return Y(_, e);
  }
  function C2(_, e) {
    return ul(_, e);
  }
  function V2(_, e) {
    return dl(_, e);
  }
  function L2(_, e) {
    return ve(_, e);
  }
  function E2(_, e) {
    return s_(_, e);
  }
  function G2(_, e) {
    return A(_, e);
  }
  function O2(_) {
    return BigInt.asUintN(64, _);
  }
  function W2() {
    const _ = i.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function z2(_, e) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function U2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function q2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function H2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function j2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function K2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6(_, e, t);
  }
  function N2(_, e, t) {
    const r = i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (r[1]) throw T(r[0]);
  }
  function J2(_, e, t, r) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, r);
  }
  function Q2(_, e, t) {
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
  ], X2 = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], Y2 = [
    "uniform",
    "storage",
    "read-only-storage"
  ], Z2 = [
    "opaque",
    "premultiplied"
  ], q_ = [
    "never",
    "less",
    "equal",
    "less-equal",
    "greater",
    "not-equal",
    "greater-equal",
    "always"
  ], el = [
    "none",
    "front",
    "back"
  ], Ot = [
    "nearest",
    "linear"
  ], _l = [
    "ccw",
    "cw"
  ], H_ = [
    "uint16",
    "uint32"
  ], j_ = [
    "load",
    "clear"
  ], tl = [
    "nearest",
    "linear"
  ], rl = [
    "low-power",
    "high-performance"
  ], nl = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], al = [
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
  ], ol = [
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
  ], cl = [
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
  ], bl = [
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
  ], sl = [
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
  ], il = [
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
  function w(_, e) {
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
    return _ = _ >>> 0, gl().subarray(_ / 4, _ / 4 + e);
  }
  function fl(_, e) {
    return _ = _ >>> 0, wl().subarray(_ / 2, _ / 2 + e);
  }
  function Y(_, e) {
    return _ = _ >>> 0, ll().subarray(_ / 4, _ / 4 + e);
  }
  function ul(_, e) {
    return _ = _ >>> 0, ml().subarray(_ / 1, _ / 1 + e);
  }
  function dl(_, e) {
    return _ = _ >>> 0, hl().subarray(_ / 2, _ / 2 + e);
  }
  function ve(_, e) {
    return _ = _ >>> 0, yl().subarray(_ / 4, _ / 4 + e);
  }
  function s_(_, e) {
    return _ = _ >>> 0, me().subarray(_ / 1, _ / 1 + e);
  }
  let ie = null;
  function C() {
    return (ie === null || ie.buffer.detached === true || ie.buffer.detached === void 0 && ie.buffer !== i.memory.buffer) && (ie = new DataView(i.memory.buffer)), ie;
  }
  let Ee = null;
  function gl() {
    return (Ee === null || Ee.byteLength === 0) && (Ee = new Float32Array(i.memory.buffer)), Ee;
  }
  let Ge = null;
  function pl() {
    return (Ge === null || Ge.byteLength === 0) && (Ge = new Float64Array(i.memory.buffer)), Ge;
  }
  let Oe = null;
  function wl() {
    return (Oe === null || Oe.byteLength === 0) && (Oe = new Int16Array(i.memory.buffer)), Oe;
  }
  let We = null;
  function ll() {
    return (We === null || We.byteLength === 0) && (We = new Int32Array(i.memory.buffer)), We;
  }
  let ze = null;
  function ml() {
    return (ze === null || ze.byteLength === 0) && (ze = new Int8Array(i.memory.buffer)), ze;
  }
  function A(_, e) {
    return vl(_ >>> 0, e);
  }
  let Ue = null;
  function hl() {
    return (Ue === null || Ue.byteLength === 0) && (Ue = new Uint16Array(i.memory.buffer)), Ue;
  }
  let qe = null;
  function yl() {
    return (qe === null || qe.byteLength === 0) && (qe = new Uint32Array(i.memory.buffer)), qe;
  }
  let He = null;
  function me() {
    return (He === null || He.byteLength === 0) && (He = new Uint8Array(i.memory.buffer)), He;
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
    return pl().set(_, t / 8), R = _.length, t;
  }
  function xl(_, e) {
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
  const $l = 2146435072;
  let w_ = 0;
  function vl(_, e) {
    return w_ += e, w_ >= $l && (n_ = new TextDecoder("utf-8", {
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
  function Sl(_) {
    i = _;
  }
  URL = globalThis.URL;
  const Al = await G_({
    "./proteus_host_web_bg.js": {
      __wbg_call_5575218572ead796: ms,
      __wbg_next_0c4066e251d2eff9: Cd,
      __wbg_done_b62d4a7d2286852a: ef,
      __wbg_value_49f783bb59765962: s2,
      __wbg_length_c6054974c0a6cdb9: Wu,
      __wbg_get_unchecked_54a4374c38e08460: du,
      __wbg_instanceof_Map_afa18d5840c04c15: Du,
      __wbg_get_197a3fe98f169e38: iu,
      __wbg_new_typed_00a409eb4ec4f2d9: Md,
      __wbg_then_05edfc8a4fea5106: $1,
      __wbg_new_227d7c05414eb861: Td,
      __wbg_stack_3b0d974bbf31e44f: Ew,
      __wbg_error_a6fa202b58aa1cd3: yf,
      __wbg_push_f724b5db8acf89d2: Jd,
      __wbg_proteusapp_new: Kd,
      __wbg_set_dc601f4a69da0bc2: i0,
      __wbg_call_8e98ed2f3c86c4b5: hs,
      __wbg_call_0e855b388e315e17: ls,
      __wbg_get_with_ref_key_6412cf3094599694: gu,
      __wbg_set_6be42768c690e380: Bg,
      __wbg_String_8564e559799eccda: ub,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: Au,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: gd,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: pd,
      __wbg_maxTextureDimension3D_06ee54121b37d431: wd,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: dd,
      __wbg_maxBindGroups_14611ac9ed1c6b56: Nu,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: Ju,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: od,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: ad,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: bd,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: sd,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: fd,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: ud,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: md,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: ld,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: id,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: xd,
      __wbg_maxBufferSize_f7ce3e1856349d2f: Qu,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: hd,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: yd,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: cd,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: Sd,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: vd,
      __wbg_maxColorAttachments_fd9187f9f786da18: Yu,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: Xu,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: rd,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: Zu,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: ed,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: _d,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: td,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: nd,
      __wbg_description_18d0a6d4077fec8e: ji,
      __wbg_set_dst_factor_1ed75271a89a711e: D0,
      __wbg_set_operation_b5862f5a1a143b30: Bp,
      __wbg_set_src_factor_1c4f755f8676df1b: Jp,
      __wbg_set_texture_16d2be474ce6ad0c: sw,
      __wbg_set_mip_level_246db61be15bdd69: hp,
      __wbg_set_x_56f0c2c08a62725c: kw,
      __wbg_set_y_04fb8ce84735b4e1: Mw,
      __wbg_set_z_a51316db27a4941e: Rw,
      __wbg_set_origin_9b3b0fbe0a5dc469: Pp,
      __wbg_set_aspect_77332ac136ee94eb: Wg,
      __wbg_Window_a07901001eb4269f: db,
      __wbg_gpu_a7c12045c25d009a: pu,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: gb,
      __wbg_set_a_5f6e488475272136: Pg,
      __wbg_set_b_688365d692bba214: qg,
      __wbg_set_g_d4d1d77cf8fdd362: q0,
      __wbg_set_r_527e5a41c4b1a846: Vp,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: Su,
      __wbg_queue_65d985f3e6d786a6: _g,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: Mp,
      __wbg_requestAdapter_9ff5c9d1ff271165: ig,
      __wbg_set_required_limits_3b031f66f838f4e3: Ep,
      __wbg_set_required_features_54918de8185c5fab: Lp,
      __wbg_set_label_bae57fb9f24fde5c: _p,
      __wbg_requestDevice_c1c34f88a477e509: dg,
      __wbg_limits_50a8c5e629dbfe40: Uu,
      __wbg_info_22dcf1fd1b12bc7d: xu,
      __wbg_set_size_41cd9255ca1e4242: Kp,
      __wbg_set_usage_908213a4d4bb8bde: mw,
      __wbg_set_mapped_at_creation_48de4735fab51e78: gp,
      __wbg_set_label_cd567b7b35838e4c: np,
      __wbg_createBuffer_2f08c0205e04efca: Qs,
      __wbg_set_address_mode_u_a37cf1035585c638: Mg,
      __wbg_set_address_mode_v_8ac049e029caef76: Rg,
      __wbg_set_address_mode_w_eb9260ee11729e92: Cg,
      __wbg_set_compare_42211fbf15e3b850: c0,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: fp,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: up,
      __wbg_set_mag_filter_69d846b974d4bcc0: dp,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: mp,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: $p,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: wp,
      __wbg_set_label_dcd98efbb9370da8: op,
      __wbg_createSampler_248bd67c920af37d: bi,
      __wbg_set_width_1a5e2e86fa5bdcd8: Fw,
      __wbg_set_height_e8b5483b8c117d5e: K0,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: m0,
      __wbg_set_format_e9d4b1475bb3bd3b: O0,
      __wbg_set_size_a61ff22205255d61: Np,
      __wbg_set_usage_7fa9cd18d1104aca: lw,
      __wbg_set_label_0c1bd0e976cf0a9a: Q0,
      __wbg_set_dimension_36e13ccecae5af4b: I0,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: xp,
      __wbg_set_sample_count_865e1d19b84e27e6: zp,
      __wbg_set_view_formats_bab284fc81b40e70: Aw,
      __wbg_createTexture_9e76b80a2dc0d12e: pi,
      __wbg_set_entries_fc76ca4d7da6a709: B0,
      __wbg_set_layout_eeef59714f5bf48b: sp,
      __wbg_set_label_f92ae11c77d74198: cp,
      __wbg_createBindGroup_2320df4db188406c: Ns,
      __wbg_set_code_56e2d45ec1ff6c2d: r0,
      __wbg_set_label_be45aed56e4b9fee: tp,
      __wbg_createShaderModule_53701de4fb271c90: ii,
      __wbg_set_label_d1c24b5a7a3ac31d: ap,
      __wbg_createCommandEncoder_cd88faca35d9ed68: Ys,
      __wbg_set_bind_group_layouts_5325d038771af328: Ng,
      __wbg_set_label_2f592bd1be3db6b3: Z0,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: _i,
      __wbg_set_module_14e471fdd94c582d: Sp,
      __wbg_set_entry_point_8db3b6d103e3b865: k0,
      __wbg_set_buffers_85a7238f4ef28ab4: e0,
      __wbg_set_layout_7c5ba5bdcde8a0f0: bp,
      __wbg_set_vertex_a4951dd9a7a4ed54: yw,
      __wbg_set_label_c47c451211e2f6d2: rp,
      __wbg_set_format_f9341112e43ea182: W0,
      __wbg_set_depth_compare_30e9ea552da12fe2: p0,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: v0,
      __wbg_set_depth_bias_428c9340b0fd937b: f0,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: u0,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: d0,
      __wbg_set_compare_1509dc1a5420943f: o0,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: w0,
      __wbg_set_fail_op_77ab26c98f847b65: R0,
      __wbg_set_pass_op_e9470d1262fb8a8b: kp,
      __wbg_set_stencil_back_6ef4683123b19b25: Qp,
      __wbg_set_stencil_front_aeb8580a97e5424b: Yp,
      __wbg_set_stencil_read_mask_2954f260d47349ea: ew,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: rw,
      __wbg_set_depth_stencil_1bd50dbc450c8650: y0,
      __wbg_set_module_08ad08e736d8edbf: vp,
      __wbg_set_targets_6b0b3bdd87f35668: bw,
      __wbg_set_entry_point_6fec5723cc790927: P0,
      __wbg_set_fragment_1a595620425637e1: z0,
      __wbg_set_count_26a934d1cd07d080: b0,
      __wbg_set_mask_0c49a66362fc0079: pp,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: Eg,
      __wbg_set_multisample_85f073947b782d07: Ap,
      __wbg_set_cull_mode_9d466c1ab414cac8: s0,
      __wbg_set_front_face_50cdf4eb61504a46: U0,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: cw,
      __wbg_set_topology_beefb3aca0612b00: uw,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: pw,
      __wbg_set_primitive_369241acd17871f1: Rp,
      __wbg_createRenderPipeline_f48187ba9f7701e8: ai,
      __wbg_set_entries_3017e6132f938c6e: F0,
      __wbg_set_label_1175a3329a06e52b: X0,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: Ks,
      __wbg_limits_1c25cb4f379a4418: zu,
      __wbg_set_color_attachments_abe67f6631926e28: n0,
      __wbg_set_label_8fd860a36d2c7b74: ep,
      __wbg_set_view_dbd0294573f64d05: $w,
      __wbg_set_depth_clear_value_442bf492734f63b6: g0,
      __wbg_set_depth_load_op_34d430b74bb36d91: l0,
      __wbg_set_depth_store_op_0ea0a215313dbda7: $0,
      __wbg_set_depth_read_only_138a11b10c731094: h0,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: Xp,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: Zp,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: tw,
      __wbg_set_stencil_read_only_fb489d191b6d969b: _w,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: x0,
      __wbg_set_query_set_18679a8580267d5a: Cp,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: Kg,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: T0,
      __wbg_set_timestamp_writes_c552d52fbb417005: fw,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: Eb,
      __wbg_copyTextureToTexture_1be188df1e535c0a: js,
      __wbg_label_47480289cc2bce71: Gu,
      __wbg_set_label_2d2227f4d5991e50: Y0,
      __wbg_finish_cfaeede3baf55be1: vf,
      __wbg_finish_087cb89c65c06eb1: $f,
      __wbg_drawIndexed_68637ebab6dd8d6e: sf,
      __wbg_setPipeline_bab24dbce96903b9: Sg,
      __wbg_setViewport_f9d423db4f4b4b58: Dg,
      __wbg_setBindGroup_4ba56e1e0d26f244: yg,
      __wbg_setBindGroup_6124849cc8547086: xg,
      __wbg_setIndexBuffer_17431786d06c1b7c: $g,
      __wbg_setIndexBuffer_a16ed5b869c87507: vg,
      __wbg_setVertexBuffer_b508baf8d0ffe331: Ig,
      __wbg_setVertexBuffer_91c4b602d0289943: Ag,
      __wbg_end_414453a89205612c: wf,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: Nf,
      __wbg_getCurrentTexture_51975ae7185fd15f: Wf,
      __wbg_set_device_0d774b66e7288f72: S0,
      __wbg_set_format_d347899cd860709c: G0,
      __wbg_set_usage_ae014e77ff77ce06: hw,
      __wbg_set_alpha_mode_92402195b3ae1ee7: Lg,
      __wbg_set_view_formats_fe531a043efb71fa: Iw,
      __wbg_configure_3d64c677c7d68a15: Os,
      __wbg_writeBuffer_b4bdd36178348ca5: y2,
      __wbg_set_bytes_per_row_91681ca78d744888: _0,
      __wbg_set_rows_per_image_d198b7e73a38978b: Wp,
      __wbg_set_offset_a097a8050a3a9a33: Fp,
      __wbg_writeTexture_b45b69132e46a227: x2,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: Wd,
      __wbg_submit_1290d44bb76ecef4: Xw,
      __wbg_getMappedRange_5ed22727c9679168: Hf,
      __wbg_unmap_8f06698a75b8331a: o2,
      __wbg_destroy_b5b39f25f0799295: Ki,
      __wbg_mapAsync_bb0029907dd91181: Ku,
      __wbg_set_dimension_174ad7e2fb67fb4e: A0,
      __wbg_set_format_90860b0321868db4: L0,
      __wbg_set_aspect_a823a14d00d42d37: zg,
      __wbg_set_base_array_layer_cc6c68d233489c4b: Hg,
      __wbg_set_array_layer_count_daec613068108a9d: Gg,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: jg,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: yp,
      __wbg_set_label_03d2396d4655a3e1: J0,
      __wbg_set_usage_7f0dda8309469b1c: ww,
      __wbg_createView_cc96b5bdd3d5bf5e: mi,
      __wbg_set_min_binding_size_689661b9ed25e083: lp,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: H0,
      __wbg_set_type_38961e08504ca674: dw,
      __wbg_requestAdapter_c46930b8bc33722d: fg,
      __wbg_set_alpha_aa2e606e9e647b21: Vg,
      __wbg_set_color_bc393d7efc3c8594: a0,
      __wbg_set_visibility_1bca121a89accba5: Dw,
      __wbg_set_storage_texture_ab9eed9786337ef0: aw,
      __wbg_set_external_texture_825fe2bc7a0c0603: M0,
      __wbg_set_binding_b6b0fe5c281b8c69: Jg,
      __wbg_set_buffer_e89095a9f0cafad3: Zg,
      __wbg_set_sampler_8c5d7fb1b02058c6: qp,
      __wbg_set_texture_e25a73da75cf5808: iw,
      __wbg_set_view_dimension_263387976511ebc9: vw,
      __wbg_set_format_1786adb7bc74c7c9: C0,
      __wbg_set_access_091f317905cd76a5: kg,
      __wbg_set_format_abf7a1bc5425c56a: E0,
      __wbg_set_blend_8d6e9c08b5702a09: Xg,
      __wbg_set_write_mask_144b25e2bd909124: Pw,
      __wbg_set_load_op_56844f51434037bf: ip,
      __wbg_set_store_op_caeede4654b3d847: ow,
      __wbg_set_view_bdeab150b5f0768c: xw,
      __wbg_set_clear_value_642701f928a5ccb3: t0,
      __wbg_set_resolve_target_fe76b3f99cf72078: Gp,
      __wbg_set_buffer_55f096330c8912b4: Yg,
      __wbg_set_offset_73156b0e0b41d79a: Dp,
      __wbg_set_size_1e6281b07cd39177: jp,
      __wbg_set_binding_f3c188a8cd21455b: Qg,
      __wbg_set_resource_fe385d2e3dadaf63: Op,
      __wbg_set_format_6606f5c1fba6f459: V0,
      __wbg_set_offset_8d9d9afffa18b591: Tp,
      __wbg_set_shader_location_0ff30a733291a396: Hp,
      __wbg_set_array_stride_c2c009eabc18b5f6: Og,
      __wbg_set_attributes_05f9117fd32ca606: Ug,
      __wbg_set_step_mode_a35aef328761c452: nw,
      __wbg_set_type_c1eebc19f8a6aeb9: gw,
      __wbg_set_multisampled_40505c1381e1c32c: Ip,
      __wbg_set_sample_type_7088b1efddce6a69: Up,
      __wbg_set_view_dimension_3ed01b237e85826f: Sw,
      __wbg_includes_83dff8d05da243c5: yu,
      __wbg_clearBufferuiv_1d2d93401c0904a3: $s,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: Vs,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: Es,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: Gs,
      __wbg_copyBufferSubData_a944f33b601b822d: zs,
      __wbg_clientWaitSync_7580165bd2eff461: Fs,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: Ls,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: Hs,
      __wbg_createQuery_f013132b870a71ef: ni,
      __wbg_createSampler_9fe50152a2524319: si,
      __wbg_createVertexArray_8685feb21901c932: li,
      __wbg_deleteQuery_ef51ea0a52420103: Fi,
      __wbg_deleteSampler_5c045e0cc55813d4: ki,
      __wbg_getIndexedParameter_2b18df6fca85f751: qf,
      __wbg_getQueryParameter_0599e85ddb81220b: Zf,
      __wbg_getSyncParameter_9a2bda340ebe166f: ou,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: cu,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: ku,
      __wbg_deleteSync_37ca83c429c43d8a: Ci,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: Gi,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: tf,
      __wbg_drawBuffers_558d96e52e754731: of,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: bf,
      __wbg_endQuery_161170c5280a8293: pf,
      __wbg_fenceSync_56efc7cc79111e54: xf,
      __wbg_framebufferTextureLayer_2312acdc74f97676: Pf,
      __wbg_getBufferSubData_92680d3a2f7be029: Vf,
      __wbg_readBuffer_361ec5474f3aae49: tg,
      __wbg_readPixels_5840000f3e22f3ce: ng,
      __wbg_readPixels_5bf204799ed2272f: ag,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: og,
      __wbg_texImage3D_8647ef58aef5b912: t1,
      __wbg_texStorage2D_ed5df596c5f1e3af: a1,
      __wbg_texStorage3D_160b0197bc190f04: o1,
      __wbg_texSubImage2D_f03448e182b0820d: g1,
      __wbg_texSubImage2D_d14d9c0a1f627c31: d1,
      __wbg_texSubImage2D_89866a04ecd0a76b: i1,
      __wbg_texSubImage2D_5c630043f1c56716: s1,
      __wbg_samplerParameterf_3157ba41c0f4d97a: pg,
      __wbg_samplerParameteri_f85a29156e790189: wg,
      __wbg_texImage2D_0e0f37b9fb297d01: Yw,
      __wbg_texImage2D_0e537dc331652de3: Zw,
      __wbg_texImage3D_30dbf7234481b8f5: _1,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: b1,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: f1,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: u1,
      __wbg_texSubImage3D_933e4cd41cc5376d: h1,
      __wbg_texSubImage3D_c3538b28040daac9: x1,
      __wbg_uniform1ui_36c94692177ebf76: F1,
      __wbg_uniform2fv_17592f4dad9798fb: B1,
      __wbg_uniform2iv_d5d29ebbc466977d: M1,
      __wbg_texSubImage3D_0fdbd843482bb916: w1,
      __wbg_texSubImage3D_09a97a968b93253d: p1,
      __wbg_texSubImage3D_355efde0dc047913: l1,
      __wbg_texSubImage3D_bd32c8e29e470904: y1,
      __wbg_texSubImage3D_5a238709d114b609: m1,
      __wbg_uniform2uiv_418ba3bf6a230dd5: R1,
      __wbg_uniform4fv_9e670a001c77dca0: U1,
      __wbg_uniform4iv_1d57c6b8e5c0e447: q1,
      __wbg_uniform3fv_dbe44b778e6b89e8: V1,
      __wbg_uniform3iv_d75d3a5f86d54be4: E1,
      __wbg_uniform3uiv_71c1efc24a662de9: G1,
      __wbg_uniform4uiv_c5d45f5dbdae727a: j1,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: Y1,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: e2,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: _2,
      __wbg_uniformBlockBinding_829a71912ad79a04: K1,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: N1,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: Q1,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: X1,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: t2,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: u2,
      __wbg_activeTexture_525ee3068cb9e8d5: kb,
      __wbg_attachShader_3477e67517b09b6b: Cb,
      __wbg_bindAttribLocation_79b5d26727094518: Gb,
      __wbg_bindBuffer_d3111de6861cb875: zb,
      __wbg_bindFramebuffer_63e837a5dc0accfb: Hb,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: jb,
      __wbg_bindTexture_7ab28ff4ff3dc506: Jb,
      __wbg_blendColor_15f26633b646e542: Zb,
      __wbg_blendEquation_7dadb4db540a42da: rs,
      __wbg_blendEquationSeparate_8240ddfa32266109: _s,
      __wbg_blendFunc_b15af02643e188f1: bs,
      __wbg_blendFuncSeparate_456410f9919bed39: os,
      __wbg_clear_dadcb3e2929388b0: Ds,
      __wbg_clearDepth_05c17028494ee4dd: vs,
      __wbg_clearStencil_917833d1e2ac56e4: Is,
      __wbg_colorMask_f111e3e5796458f4: ks,
      __wbg_compileShader_f5625b583b2c9fd6: Ms,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: n2,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: a2,
      __wbg_vertexAttribDivisor_f17a8585267be92f: f2,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: Us,
      __wbg_createBuffer_9f602b2dbcbf409c: Xs,
      __wbg_createFramebuffer_4a250944a4542bbc: Zs,
      __wbg_createProgram_4c8164d471c10346: ti,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: ci,
      __wbg_createShader_9c5cd42709d915ff: ui,
      __wbg_createTexture_3eed23cb87dd35fc: di,
      __wbg_cullFace_94f24b4fd5e9038b: xi,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: vi,
      __wbg_getExtension_11824edd67a143d8: Uf,
      __wbg_getParameter_7f7f23cae98f2c81: jf,
      __wbg_getProgramInfoLog_cd84be80942f345b: Qf,
      __wbg_getProgramParameter_039391d5ba319f50: Xf,
      __wbg_getShaderInfoLog_495bddda98172699: eu,
      __wbg_getShaderParameter_4eb65cfb174ceb22: tu,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: nu,
      __wbg_getUniformLocation_ab63f569a4e41744: su,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: Ai,
      __wbg_deleteProgram_eff668280dcb01ca: Ti,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: Pi,
      __wbg_deleteShader_3339454254c7147c: Mi,
      __wbg_deleteTexture_c1c58550dc55af5c: Li,
      __wbg_depthFunc_31b183b5b8ee478e: Oi,
      __wbg_depthMask_cab7f2ae7f0e559c: Ui,
      __wbg_depthRange_797a71ba3b79267a: qi,
      __wbg_disable_cb1b3e6c1cee5202: Yi,
      __wbg_disableVertexAttribArray_b395358ec5084c39: Qi,
      __wbg_drawArrays_42dbb4b0349c8f34: nf,
      __wbg_enable_d1f42f78be33a553: gf,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: ff,
      __wbg_flush_7ae42f071230db6b: Sf,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: Tf,
      __wbg_framebufferTexture2D_367ab597a005e8d9: Ff,
      __wbg_frontFace_9bdcf2a758e989e5: Mf,
      __wbg_linkProgram_e23a348b0f6e0c4f: Hu,
      __wbg_pixelStorei_a78a504be58d1d0a: Ud,
      __wbg_polygonOffset_a4f07d97b9b0dced: Hd,
      __wbg_renderbufferStorage_3049e13db5c4e60e: bg,
      __wbg_scissor_6c024669fbf4fe72: lg,
      __wbg_vertexAttribPointer_4e5d289c5d224210: g2,
      __wbg_viewport_a0ca330f9b85397e: p2,
      __wbg_shaderSource_66dce75b25a1a407: Vw,
      __wbg_stencilFuncSeparate_ec603976be9569a4: qw,
      __wbg_stencilMask_485dcb5965c79a71: Kw,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: jw,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: Jw,
      __wbg_texParameteri_c6efffcecb474d2f: r1,
      __wbg_uniform1f_3acd3f3eb50b5e11: A1,
      __wbg_uniform1i_e4f13604354c28ae: T1,
      __wbg_uniform4f_a5008773cfb47d1a: W1,
      __wbg_useProgram_ab2ee2a13a1fd909: b2,
      __wbg_bufferSubData_2270f1b9db71e642: gs,
      __wbg_clearBufferfv_6b77b9402254a2bf: ys,
      __wbg_clearBufferiv_0f056544010eef3e: xs,
      __wbg_beginQuery_dad334d972fed3cc: Lb,
      __wbg_bindBufferRange_16a9d90becc2a7d7: Wb,
      __wbg_bindSampler_3c7002cb6d56ae8f: Nb,
      __wbg_bindVertexArray_c391bd47303d75cd: Yb,
      __wbg_blitFramebuffer_ea96ada8bba07582: ss,
      __wbg_bufferData_64e9905f2b3d3a6f: us,
      __wbg_bufferData_99bbbc63f02251c4: ds,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: Bu,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: ug,
      __wbg_navigator_935098efd1dc7fe5: Id,
      __wbg_devicePixelRatio_8e5ca44720abafec: Ni,
      __wbg_document_2634180a4c694068: Zi,
      __wbg_instanceof_Window_0d356b88a2f77c42: Pu,
      __wbg_hidden_cb32701ca3785fea: hu,
      __wbg_getElementById_c7aba6b93b34bf01: zf,
      __wbg_querySelector_1f3658f4b48e268b: Yd,
      __wbg_querySelectorAll_ffda3c891a9eb29a: Xd,
      __wbg_hasAttribute_73e1230c9c107e79: wu,
      __wbg_setAttribute_8bccfbabf2a83682: hg,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: Cf,
      __wbg_focus_c80921c19b28520b: If,
      __wbg_uniform2iv_c5e863975dd780d8: k1,
      __wbg_uniform3fv_7723e142be50856f: C1,
      __wbg_uniform3iv_bea3976522e15d48: L1,
      __wbg_uniform4fv_85ad5d23234895d2: z1,
      __wbg_clear_ff8cfdf420f7dde6: Ts,
      __wbg_clearDepth_ac6b54f112feeaf7: Ss,
      __wbg_clearStencil_56d6a6308294a749: As,
      __wbg_colorMask_b0ab9d429a1efa0a: Ps,
      __wbg_compileShader_fcf3f3d2891f73f9: Rs,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: qs,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: Js,
      __wbg_createFramebuffer_ab73f30b5dc97415: ei,
      __wbg_createProgram_f11c63f59f41b82a: ri,
      __wbg_createRenderbuffer_556000dbb01f5026: oi,
      __wbg_createShader_27d9388313f3b14e: fi,
      __wbg_createTexture_8455c703424c567b: gi,
      __wbg_cullFace_774780fb4177aab8: yi,
      __wbg_deleteBuffer_d758283bea6e0ccf: Si,
      __wbg_deleteFramebuffer_8953b325144192fe: Ii,
      __wbg_deleteProgram_0135c6926e75af75: Di,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: Bi,
      __wbg_deleteShader_79dbaaed69b7ca3b: Ri,
      __wbg_deleteTexture_3acb672a45f9998a: Vi,
      __wbg_depthFunc_eaca1bc79f7bf216: Wi,
      __wbg_depthMask_3a9074b08d1f68e5: zi,
      __wbg_depthRange_c24a808b3496e0a9: Hi,
      __wbg_uniform4iv_a9aaa92f2f458ec2: H1,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: J1,
      __wbg_uniformMatrix3fv_da8c388748c5739b: Z1,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: r2,
      __wbg_activeTexture_1d5359b20df41710: Pb,
      __wbg_attachShader_683d1070365e7066: Vb,
      __wbg_bindAttribLocation_d56d3c40331af7ed: Ob,
      __wbg_bindBuffer_e95efaf0d4851845: Ub,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: qb,
      __wbg_bindRenderbuffer_d608b211c51ed147: Kb,
      __wbg_bindTexture_ffc56f1e5c5526c6: Qb,
      __wbg_blendColor_a0ba1cdcecc3a34c: es,
      __wbg_blendEquation_8bfa69f639ae92da: ns,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: ts,
      __wbg_blendFunc_713c504adab14f98: cs,
      __wbg_blendFuncSeparate_3eef699c291dbc87: as,
      __wbg_disable_4dca6ee0ccc91e4a: Xi,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: Ji,
      __wbg_drawArrays_10e1254aa4524ae9: rf,
      __wbg_enable_c6e523307311617a: df,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: uf,
      __wbg_flush_eb3fb8da2ec00d57: Af,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: Df,
      __wbg_linkProgram_6a2eee02a03b9b00: qu,
      __wbg_pixelStorei_55ad4c67b699537c: zd,
      __wbg_polygonOffset_06dc6468c12a57e1: qd,
      __wbg_renderbufferStorage_2918fb696fd45663: cg,
      __wbg_scissor_f9696c630e464977: mg,
      __wbg_shaderSource_628c37a476ae65f9: Cw,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: Uw,
      __wbg_stencilMask_f9fe198f7fd6fc9c: Nw,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: Hw,
      __wbg_stencilOpSeparate_6cf50803475d2640: Qw,
      __wbg_texParameteri_fe6210a493d48a16: n1,
      __wbg_framebufferTexture2D_3a558e14f56720d2: Bf,
      __wbg_frontFace_c9bb1fa659ffd276: Rf,
      __wbg_getParameter_91a344e1a84a4669: Kf,
      __wbg_getProgramInfoLog_35410850de9ccefe: Jf,
      __wbg_getProgramParameter_bbc667347ac2e882: Yf,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: _u,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: ru,
      __wbg_getUniformLocation_340155dc706d3fea: bu,
      __wbg_uniform1f_d34e4b454f7c8e73: I1,
      __wbg_uniform1i_cd9a7f990128ea48: D1,
      __wbg_uniform4f_4410d2faaa7e5dda: O1,
      __wbg_useProgram_0e1cd86765304939: c2,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: d2,
      __wbg_viewport_b5bd46a0d111c83c: w2,
      __wbg_texSubImage2D_1b2ff28f994c325e: c1,
      __wbg_uniform2fv_39277cf2d3cb83c7: P1,
      __wbg_bufferData_5df9bdb32e189eee: fs,
      __wbg_bufferData_26132561617ce8fb: is,
      __wbg_bufferSubData_44db8a3b4a70b57d: ps,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: Cs,
      __wbg_readPixels_05377f8b6fa1d8eb: rg,
      __wbg_texImage2D_7bc3001cb8602ed2: e1,
      __wbg_navigator_017bc45e84c473cc: Ad,
      __wbg_log_d282446d03691e72: ju,
      __wbg_info_a392cd5b7536cfb5: $u,
      __wbg_warn_88c4a5bd9a322000: l2,
      __wbg_debug_7271beced8b71cd4: $i,
      __wbg_error_933f449d72fef598: hf,
      __wbg_error_50f60c611a3dcf64: mf,
      __wbg_set_width_031bdecd763c5855: Tw,
      __wbg_set_height_ad5056ea051acd78: j0,
      __wbg_getContext_486aab500e1c34c9: Ef,
      __wbg_getContext_9fd4db9b1cf155db: Of,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: Iu,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: af,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: au,
      __wbg_width_a86bcd32bd998060: h2,
      __wbg_height_cd732bbdc7b66e49: lu,
      __wbg_queryCounterEXT_ebb00bcc96221671: Qd,
      __wbg_offsetX_0214819d43aaf6d5: Gd,
      __wbg_offsetY_f18f571e33b385ab: Od,
      __wbg_button_bb3285fcdf965178: ws,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: _f,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: cf,
      __wbg_get_37b48b8fa52d1f2c: fu,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: i2,
      __wbg_preventDefault_c047d3e292b08cc4: jd,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: kf,
      __wbg_width_08e66520b99071f4: m2,
      __wbg_height_e9afb506f31052a9: mu,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: Xb,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: wi,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: Ei,
      __wbg_set_width_f9e631f4ee129e5c: Bw,
      __wbg_set_height_ef298446b359b0c5: N0,
      __wbg_getContext_70c2d1bed75d4122: Gf,
      __wbg_getContext_422b32d0ee4b8076: Lf,
      __wbg_addEventListener_ea90bc131475777e: Mb,
      __wbg_contentRect_0fb8c8900d689a0c: Ws,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: Tu,
      __wbg_new_1e52e3c919312525: Dd,
      __wbg_observe_592b94857eed8e27: Ld,
      __wbg_altKey_7412dd64f8c921c7: Rb,
      __wbg_ctrlKey_00097886a21597a7: hi,
      __wbg_shiftKey_273ee8c901267b55: Lw,
      __wbg_metaKey_1c2847b62ad062c1: $d,
      __wbg_repeat_46a5c90df9f6ef0b: sg,
      __wbg_isComposing_e3709163a95a2477: Ru,
      __wbg_key_d6b3d2cce3d41872: Eu,
      __wbg_code_87bb99fdec02d313: Bs,
      __wbg_resolve_d82363d90af6928a: gg,
      __wbg_then_591b6b3a75ee817a: S1,
      __wbg_iterator_cc47ba25a2be735a: Lu,
      __wbg_get_9a29be2cb383ed9a: uu,
      __wbg_next_402fa10b59ab20c3: Vd,
      __wbg_new_2e117a478906f062: Fd,
      __wbg_new_36e147a8ced3c6e0: Bd,
      __wbg_of_62183ea089c00bfa: Ed,
      __wbg_isArray_145a34fd0a38d37b: Mu,
      __wbg_new_e66a4b7758dd2e5c: kd,
      __wbg_isSafeInteger_a3389a198582f5f6: Cu,
      __wbg_is_de5b366c746e004c: Vu,
      __wbg_entries_c261c3fa1f281256: lf,
      __wbg_then_2a84678a50976959: v1,
      __wbg_length_589238bdcf171f0e: Ou,
      __wbg_prototypesetcall_d721637c7ca66eb8: Nd,
      __wbg_set_272b80acaf9a75e8: Tg,
      __wbg_new_81880fb5002cb255: Pd,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: Rd,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: Gw,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: Ww,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Ow,
      __wbg_static_accessor_WINDOW_168f178805d978fe: zw,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: vu,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: Fu,
      __wbg_queueMicrotask_1c9b3800e321a967: Zd,
      __wbg_queueMicrotask_311744e534a929a3: eg,
      __wbg_set_4564f7dc44fcb0c9: Fg,
      __wbg___wbindgen_number_get_1cc01dd708740256: Db,
      __wbg___wbindgen_in_4990f46af709e33c: mb,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: Fb,
      __wbg___wbindgen_is_null_6d937fbfb6478470: xb,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: Ab,
      __wbg_Number_c4bdf66bb78f7977: fb,
      __wbg_Error_fdd633d4bb5dd76a: ib,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: hb,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: $b,
      __wbg___wbindgen_is_string_1fca8072260dd261: vb,
      __wbg___wbindgen_string_get_71bb4348194e31f0: Tb,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: wb,
      __wbg___wbindgen_is_function_acc5528be2b923f2: yb,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: Sb,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: Ib,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: pb,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: Bb,
      __wbg___wbindgen_debug_string_8a447059637473e2: lb,
      __wbindgen_init_externref_table: W2,
      __wbindgen_cast_0000000000000001: $2,
      __wbindgen_cast_0000000000000002: v2,
      __wbindgen_cast_0000000000000003: S2,
      __wbindgen_cast_0000000000000004: A2,
      __wbindgen_cast_0000000000000005: I2,
      __wbindgen_cast_0000000000000006: D2,
      __wbindgen_cast_0000000000000007: T2,
      __wbindgen_cast_0000000000000008: F2,
      __wbindgen_cast_0000000000000009: B2,
      __wbindgen_cast_000000000000000a: P2,
      __wbindgen_cast_000000000000000b: k2,
      __wbindgen_cast_000000000000000c: M2,
      __wbindgen_cast_000000000000000d: R2,
      __wbindgen_cast_000000000000000e: C2,
      __wbindgen_cast_000000000000000f: V2,
      __wbindgen_cast_0000000000000010: L2,
      __wbindgen_cast_0000000000000011: E2,
      __wbindgen_cast_0000000000000012: G2,
      __wbindgen_cast_0000000000000013: O2
    }
  }, bb), { memory: Il, mount: Dl, __wbg_proteusapp_free: Tl, proteusapp_addChild: Fl, proteusapp_animateTo: Bl, proteusapp_bakeTexture: Pl, proteusapp_bakedImageSize: kl, proteusapp_bakedTextSize: Ml, proteusapp_bindKey: Rl, proteusapp_channelDestroy: Cl, proteusapp_channelSet: Vl, proteusapp_clearFocus: Ll, proteusapp_component: El, proteusapp_copyBakedImageFrom: Gl, proteusapp_createVideo: Ol, proteusapp_cropImage: Wl, proteusapp_declareGeometry: zl, proteusapp_declaredGeometry: Ul, proteusapp_destroy: ql, proteusapp_devices: Hl, proteusapp_focus: jl, proteusapp_focused: Kl, proteusapp_freeResources: Nl, proteusapp_get: Jl, proteusapp_hideVideo: Ql, proteusapp_inputDevices: Xl, proteusapp_inputMode: Yl, proteusapp_isFocused: Zl, proteusapp_loadTexture: e3, proteusapp_mergeFrom: _3, proteusapp_mergeFromWithBehavior: t3, proteusapp_new: r3, proteusapp_onAppKey: n3, proteusapp_onBlur: a3, proteusapp_onClick: o3, proteusapp_onDrag: c3, proteusapp_onDropped: b3, proteusapp_onFocus: s3, proteusapp_onFocusLost: i3, proteusapp_onHoverEnter: f3, proteusapp_onHoverExit: u3, proteusapp_onKey: d3, proteusapp_onPress: g3, proteusapp_onRelease: p3, proteusapp_onTransitionComplete: w3, proteusapp_pointerLeft: l3, proteusapp_pointerMoved: m3, proteusapp_pointerPressed: h3, proteusapp_pointerReleased: y3, proteusapp_releaseVideo: x3, proteusapp_removeChild: $3, proteusapp_resetKeyMap: v3, proteusapp_setDeclaredGeometry: S3, proteusapp_setDefaultFocus: A3, proteusapp_setDevices: I3, proteusapp_setDisabled: D3, proteusapp_setFocusGroup: T3, proteusapp_setImage: F3, proteusapp_setInputDevices: B3, proteusapp_setInteractive: P3, proteusapp_setKeyRepeat: k3, proteusapp_setLongPressMs: M3, proteusapp_setNavigatingActions: R3, proteusapp_setNeighbour: C3, proteusapp_setOpacity: V3, proteusapp_setReadingDirection: L3, proteusapp_setText: E3, proteusapp_setTexture: G3, proteusapp_setTransitionInteraction: O3, proteusapp_setVideoCrossfade: W3, proteusapp_setVisible: z3, proteusapp_showVideo: U3, proteusapp_splitTo: q3, proteusapp_splitToWithBehavior: H3, proteusapp_splitToWithStates: j3, proteusapp_texture: K3, proteusapp_textureState: N3, proteusapp_tick: J3, proteusapp_transitionChannel: Q3, proteusapp_unbindKey: X3, proteusapp_uploadVideoFrame: Y3, __wbg_handle_free: Z3, __wbg_texturehandle_free: e4, __wbg_transitionchannel_free: _4, __wbg_videohandle_free: t4, handle_fromId: r4, handle_id: n4, texturehandle_fromId: a4, texturehandle_id: o4, __abort_handler: c4, __instance_terminated: b4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: s4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: i4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: f4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: u4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: d4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: g4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: p4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: w4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: l4, __wbindgen_malloc: m4, __wbindgen_realloc: h4, __wbindgen_exn_store: y4, __externref_table_alloc: x4, __wbindgen_externrefs: $4, __wbindgen_free: v4, __wbindgen_destroy_closure: S4, __externref_table_dealloc: A4, __wbindgen_start: zt } = Al, I4 = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: c4,
    __externref_table_alloc: x4,
    __externref_table_dealloc: A4,
    __instance_terminated: b4,
    __wbg_handle_free: Z3,
    __wbg_proteusapp_free: Tl,
    __wbg_texturehandle_free: e4,
    __wbg_transitionchannel_free: _4,
    __wbg_videohandle_free: t4,
    __wbindgen_destroy_closure: S4,
    __wbindgen_exn_store: y4,
    __wbindgen_externrefs: $4,
    __wbindgen_free: v4,
    __wbindgen_malloc: m4,
    __wbindgen_realloc: h4,
    __wbindgen_start: zt,
    handle_fromId: r4,
    handle_id: n4,
    memory: Il,
    mount: Dl,
    proteusapp_addChild: Fl,
    proteusapp_animateTo: Bl,
    proteusapp_bakeTexture: Pl,
    proteusapp_bakedImageSize: kl,
    proteusapp_bakedTextSize: Ml,
    proteusapp_bindKey: Rl,
    proteusapp_channelDestroy: Cl,
    proteusapp_channelSet: Vl,
    proteusapp_clearFocus: Ll,
    proteusapp_component: El,
    proteusapp_copyBakedImageFrom: Gl,
    proteusapp_createVideo: Ol,
    proteusapp_cropImage: Wl,
    proteusapp_declareGeometry: zl,
    proteusapp_declaredGeometry: Ul,
    proteusapp_destroy: ql,
    proteusapp_devices: Hl,
    proteusapp_focus: jl,
    proteusapp_focused: Kl,
    proteusapp_freeResources: Nl,
    proteusapp_get: Jl,
    proteusapp_hideVideo: Ql,
    proteusapp_inputDevices: Xl,
    proteusapp_inputMode: Yl,
    proteusapp_isFocused: Zl,
    proteusapp_loadTexture: e3,
    proteusapp_mergeFrom: _3,
    proteusapp_mergeFromWithBehavior: t3,
    proteusapp_new: r3,
    proteusapp_onAppKey: n3,
    proteusapp_onBlur: a3,
    proteusapp_onClick: o3,
    proteusapp_onDrag: c3,
    proteusapp_onDropped: b3,
    proteusapp_onFocus: s3,
    proteusapp_onFocusLost: i3,
    proteusapp_onHoverEnter: f3,
    proteusapp_onHoverExit: u3,
    proteusapp_onKey: d3,
    proteusapp_onPress: g3,
    proteusapp_onRelease: p3,
    proteusapp_onTransitionComplete: w3,
    proteusapp_pointerLeft: l3,
    proteusapp_pointerMoved: m3,
    proteusapp_pointerPressed: h3,
    proteusapp_pointerReleased: y3,
    proteusapp_releaseVideo: x3,
    proteusapp_removeChild: $3,
    proteusapp_resetKeyMap: v3,
    proteusapp_setDeclaredGeometry: S3,
    proteusapp_setDefaultFocus: A3,
    proteusapp_setDevices: I3,
    proteusapp_setDisabled: D3,
    proteusapp_setFocusGroup: T3,
    proteusapp_setImage: F3,
    proteusapp_setInputDevices: B3,
    proteusapp_setInteractive: P3,
    proteusapp_setKeyRepeat: k3,
    proteusapp_setLongPressMs: M3,
    proteusapp_setNavigatingActions: R3,
    proteusapp_setNeighbour: C3,
    proteusapp_setOpacity: V3,
    proteusapp_setReadingDirection: L3,
    proteusapp_setText: E3,
    proteusapp_setTexture: G3,
    proteusapp_setTransitionInteraction: O3,
    proteusapp_setVideoCrossfade: W3,
    proteusapp_setVisible: z3,
    proteusapp_showVideo: U3,
    proteusapp_splitTo: q3,
    proteusapp_splitToWithBehavior: H3,
    proteusapp_splitToWithStates: j3,
    proteusapp_texture: K3,
    proteusapp_textureState: N3,
    proteusapp_tick: J3,
    proteusapp_transitionChannel: Q3,
    proteusapp_unbindKey: X3,
    proteusapp_uploadVideoFrame: Y3,
    texturehandle_fromId: a4,
    texturehandle_id: o4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: l4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: s4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: d4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: g4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: p4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: w4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: f4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: u4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: i4
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Sl(I4);
  zt();
  async function D4(_, e) {
    await sb(_, (t) => e.setup(new B4(t)), e.update ? (t) => {
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
  }, T4 = class {
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
  }, F4 = class {
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
  }, B4 = class {
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
      return new T4(this, this.wasmApp.transitionChannel(e == null ? void 0 : e.id()));
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
      return new F4(this, this.wasmApp.createVideo());
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
  const P4 = "" + new URL("proteus_bench_web_bg-BhYuByLw.wasm", import.meta.url).href;
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
      l(e, m), l(t, m);
      const r = s.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw F(r[0]);
    }
    animateTo(e, t, r) {
      l(e, m);
      const n = s.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw F(n[0]);
    }
    bakeTexture(e, t, r, n) {
      const a = h_(r, s.__wbindgen_malloc), o = k, c = s.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, o, n);
      return K.__wrap(c);
    }
    bakedImageSize(e) {
      return l(e, m), s.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return l(e, m), s.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bindKey(e, t) {
      const r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k, a = s.proteusapp_bindKey(this.__wbg_ptr, e, r, n);
      if (a[1]) throw F(a[0]);
    }
    channelDestroy(e) {
      l(e, Q);
      var t = e.__destroy_into_raw();
      s.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      l(e, Q), l(t, m), l(r, m);
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
      l(e, m), l(t, m);
      const r = s.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = s.proteusapp_createVideo(this.__wbg_ptr);
      return X.__wrap(e);
    }
    cropImage(e, t) {
      l(e, m);
      const r = s.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      l(e, m);
      const r = s.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    declaredGeometry(e) {
      return l(e, m), s.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      l(e, m);
      var t = e.__destroy_into_raw();
      const r = s.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    devices(e) {
      return l(e, m), s.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    focus(e) {
      l(e, m);
      const t = s.proteusapp_focus(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
    }
    focused() {
      const e = s.proteusapp_focused(this.__wbg_ptr);
      return e === 0 ? void 0 : m.__wrap(e);
    }
    freeResources(e) {
      l(e, m);
      const t = s.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
    }
    get(e) {
      return l(e, m), s.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      l(e, m);
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
      return l(e, m), s.proteusapp_isFocused(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    loadTexture(e, t) {
      const r = h_(e, s.__wbindgen_malloc), n = k, a = s.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : K.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      l(e, m);
      const a = t_(t, s.__wbindgen_malloc), o = k, c = s.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw F(c[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      l(e, m);
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
      l(e, m), s.proteusapp_onBlur(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onClick(e, t) {
      l(e, m), s.proteusapp_onClick(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDrag(e, t) {
      l(e, m), s.proteusapp_onDrag(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDropped(e, t) {
      l(e, Q), s.proteusapp_onDropped(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocus(e, t) {
      l(e, m), s.proteusapp_onFocus(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocusLost(e) {
      s.proteusapp_onFocusLost(this.__wbg_ptr, e);
    }
    onHoverEnter(e, t) {
      l(e, m), s.proteusapp_onHoverEnter(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverExit(e, t) {
      l(e, m), s.proteusapp_onHoverExit(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onKey(e, t) {
      l(e, m), s.proteusapp_onKey(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onPress(e, t) {
      l(e, m), s.proteusapp_onPress(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onRelease(e, t) {
      l(e, m), s.proteusapp_onRelease(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onTransitionComplete(e, t) {
      l(e, m), s.proteusapp_onTransitionComplete(this.__wbg_ptr, e.__wbg_ptr, t);
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
      l(e, X), s.proteusapp_releaseVideo(this.__wbg_ptr, e.__wbg_ptr);
    }
    removeChild(e, t) {
      l(e, m), l(t, m);
      const r = s.proteusapp_removeChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw F(r[0]);
    }
    resetKeyMap() {
      s.proteusapp_resetKeyMap(this.__wbg_ptr);
    }
    setDeclaredGeometry(e, t) {
      l(e, m);
      const r = s.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDefaultFocus(e, t) {
      l(e, m);
      const r = s.proteusapp_setDefaultFocus(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDevices(e, t) {
      l(e, m);
      const r = s.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDisabled(e, t) {
      l(e, m);
      const r = s.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setFocusGroup(e, t) {
      l(e, m);
      const r = s.proteusapp_setFocusGroup(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setImage(e, t) {
      l(e, m);
      const r = s.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setInputDevices(e) {
      const t = s.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw F(t[0]);
    }
    setInteractive(e, t) {
      l(e, m);
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
      const t = cA(e, s.__wbindgen_malloc), r = k;
      s.proteusapp_setNavigatingActions(this.__wbg_ptr, t, r);
    }
    setNeighbour(e, t, r) {
      l(e, m);
      const n = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k, o = s.proteusapp_setNeighbour(this.__wbg_ptr, e.__wbg_ptr, n, a, !v(r), v(r) ? 0 : r);
      if (o[1]) throw F(o[0]);
    }
    setOpacity(e, t) {
      l(e, m);
      const r = s.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setReadingDirection(e) {
      const t = O(e, s.__wbindgen_malloc, s.__wbindgen_realloc), r = k, n = s.proteusapp_setReadingDirection(this.__wbg_ptr, t, r);
      if (n[1]) throw F(n[0]);
    }
    setText(e, t) {
      l(e, m);
      const r = s.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setTexture(e, t) {
      l(e, m), l(t, K);
      const r = s.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      l(e, m);
      const r = s.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setVideoCrossfade(e, t) {
      l(e, m);
      const r = s.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      l(e, m);
      const r = s.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    showVideo(e, t) {
      l(e, m), l(t, X);
      const r = s.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      l(e, m);
      const a = t_(t, s.__wbindgen_malloc), o = k, c = s.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw F(c[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      l(e, m);
      const o = t_(t, s.__wbindgen_malloc), c = k, b = s.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
      if (b[1]) throw F(b[0]);
    }
    splitToWithStates(e, t, r, n) {
      l(e, m);
      const a = s.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw F(a[0]);
    }
    texture(e) {
      const t = s.proteusapp_texture(this.__wbg_ptr, e);
      return K.__wrap(t);
    }
    textureState(e) {
      return l(e, K), s.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
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
      l(e, X);
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
  function k4() {
    s.clear();
  }
  function M4(_) {
    s.on_frame(_);
  }
  function R4(_, e) {
    const t = O(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = k;
    s.show(t, r, e);
  }
  function C4(_, e) {
    const t = O(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = k;
    return s.start(t, r, e);
  }
  function V4() {
    s.stop_frames();
  }
  function L4(_, e) {
    return Error(S(_, e));
  }
  function E4(_) {
    return Number(_);
  }
  function G4(_, e) {
    const t = String(e), r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function O4(_) {
    return _.Window;
  }
  function W4(_) {
    return _.WorkerGlobalScope;
  }
  function z4(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    M().setBigInt64(_ + 8, v(r) ? BigInt(0) : r, true), M().setInt32(_ + 0, !v(r), true);
  }
  function U4(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return v(t) ? 16777215 : t ? 1 : 0;
  }
  function q4(_, e) {
    const t = R_(e), r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function H4(_, e) {
    return _ in e;
  }
  function j4(_) {
    return typeof _ == "bigint";
  }
  function K4(_) {
    return typeof _ == "function";
  }
  function N4(_) {
    return _ === null;
  }
  function J4(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function Q4(_) {
    return typeof _ == "string";
  }
  function X4(_) {
    return _ === void 0;
  }
  function Y4(_, e) {
    return _ === e;
  }
  function Z4(_, e) {
    return _ == e;
  }
  function em(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    M().setFloat64(_ + 8, v(r) ? 0 : r, true), M().setInt32(_ + 0, !v(r), true);
  }
  function _m(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = v(r) ? 0 : O(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function tm(_, e) {
    throw new Error(S(_, e));
  }
  function rm(_) {
    _._wbg_cb_unref();
  }
  function nm(_) {
    _.abort();
  }
  function am(_) {
    return _.aborted;
  }
  function om(_, e) {
    _.activeTexture(e >>> 0);
  }
  function cm(_, e) {
    _.activeTexture(e >>> 0);
  }
  function bm() {
    return g(function(_, e, t, r) {
      _.addEventListener(S(e, t), r);
    }, arguments);
  }
  function sm(_) {
    return _.altKey;
  }
  function im() {
    return g(function(_) {
      return _.arrayBuffer();
    }, arguments);
  }
  function fm(_, e, t) {
    _.attachShader(e, t);
  }
  function um(_, e, t) {
    _.attachShader(e, t);
  }
  function dm(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function gm() {
    return g(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function pm(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function wm(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function lm(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function mm(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function hm(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function ym(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function xm(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function $m(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function vm(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Sm(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function Am(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Im(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Dm(_, e) {
    _.bindVertexArrayOES(e);
  }
  function Tm(_, e) {
    _.bindVertexArray(e);
  }
  function Fm(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Bm(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Pm(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function km(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Mm(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Rm(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Cm(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Vm(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Lm(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function Em(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function Gm(_, e, t, r, n, a, o, c, b, f, d) {
    _.blitFramebuffer(e, t, r, n, a, o, c, b, f >>> 0, d >>> 0);
  }
  function Om(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Wm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function zm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Um(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function qm(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function Hm(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function jm(_) {
    return _.button;
  }
  function Km() {
    return g(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function Nm() {
    return g(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Jm() {
    return g(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function Qm(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, G(r, n));
  }
  function Xm(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, ee(r, n));
  }
  function Ym(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, Se(r, n));
  }
  function Zm(_, e) {
    _.clearDepth(e);
  }
  function e7(_, e) {
    _.clearDepth(e);
  }
  function _7(_, e) {
    _.clearStencil(e);
  }
  function t7(_, e) {
    _.clearStencil(e);
  }
  function r7(_, e) {
    _.clear(e >>> 0);
  }
  function n7(_, e) {
    _.clear(e >>> 0);
  }
  function a7(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function o7(_, e) {
    const t = e.code, r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function c7(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function b7(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function s7(_, e) {
    _.compileShader(e);
  }
  function i7(_, e) {
    _.compileShader(e);
  }
  function f7(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function u7(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function d7(_, e, t, r, n, a, o, c, b, f) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b, f);
  }
  function g7(_, e, t, r, n, a, o, c, b, f, d, I) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d, I);
  }
  function p7(_, e, t, r, n, a, o, c, b, f, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d);
  }
  function w7() {
    return g(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function l7(_) {
    return _.contentRect;
  }
  function m7(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function h7(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function y7(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function x7(_, e, t, r, n, a, o, c, b, f) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f);
  }
  function $7() {
    return g(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function v7() {
    return g(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function S7(_, e) {
    return _.createBindGroup(e);
  }
  function A7(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : P(e);
  }
  function I7() {
    return g(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function D7(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : P(e);
  }
  function T7(_, e) {
    return _.createCommandEncoder(e);
  }
  function F7(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : P(e);
  }
  function B7(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : P(e);
  }
  function P7(_, e) {
    return _.createPipelineLayout(e);
  }
  function k7(_) {
    const e = _.createProgram();
    return v(e) ? 0 : P(e);
  }
  function M7(_) {
    const e = _.createProgram();
    return v(e) ? 0 : P(e);
  }
  function R7(_) {
    const e = _.createQuery();
    return v(e) ? 0 : P(e);
  }
  function C7() {
    return g(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function V7(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : P(e);
  }
  function L7(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : P(e);
  }
  function E7(_, e) {
    return _.createSampler(e);
  }
  function G7(_) {
    const e = _.createSampler();
    return v(e) ? 0 : P(e);
  }
  function O7(_, e) {
    return _.createShaderModule(e);
  }
  function W7(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : P(t);
  }
  function z7(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : P(t);
  }
  function U7(_) {
    const e = _.createTexture();
    return v(e) ? 0 : P(e);
  }
  function q7(_) {
    const e = _.createTexture();
    return v(e) ? 0 : P(e);
  }
  function H7() {
    return g(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function j7(_) {
    const e = _.createVertexArrayOES();
    return v(e) ? 0 : P(e);
  }
  function K7(_) {
    const e = _.createVertexArray();
    return v(e) ? 0 : P(e);
  }
  function N7() {
    return g(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function J7(_) {
    return _.ctrlKey;
  }
  function Q7(_, e) {
    _.cullFace(e >>> 0);
  }
  function X7(_, e) {
    _.cullFace(e >>> 0);
  }
  function Y7(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function Z7(_, e) {
    _.deleteBuffer(e);
  }
  function e6(_, e) {
    _.deleteBuffer(e);
  }
  function _6(_, e) {
    _.deleteFramebuffer(e);
  }
  function t6(_, e) {
    _.deleteFramebuffer(e);
  }
  function r6(_, e) {
    _.deleteProgram(e);
  }
  function n6(_, e) {
    _.deleteProgram(e);
  }
  function a6(_, e) {
    _.deleteQuery(e);
  }
  function o6(_, e) {
    _.deleteRenderbuffer(e);
  }
  function c6(_, e) {
    _.deleteRenderbuffer(e);
  }
  function b6(_, e) {
    _.deleteSampler(e);
  }
  function s6(_, e) {
    _.deleteShader(e);
  }
  function i6(_, e) {
    _.deleteShader(e);
  }
  function f6(_, e) {
    _.deleteSync(e);
  }
  function u6(_, e) {
    _.deleteTexture(e);
  }
  function d6(_, e) {
    _.deleteTexture(e);
  }
  function g6(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function p6(_, e) {
    _.deleteVertexArray(e);
  }
  function w6(_, e) {
    _.depthFunc(e >>> 0);
  }
  function l6(_, e) {
    _.depthFunc(e >>> 0);
  }
  function m6(_, e) {
    _.depthMask(e !== 0);
  }
  function h6(_, e) {
    _.depthMask(e !== 0);
  }
  function y6(_, e, t) {
    _.depthRange(e, t);
  }
  function x6(_, e, t) {
    _.depthRange(e, t);
  }
  function $6(_, e) {
    const t = e.description, r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function v6(_) {
    _.destroy();
  }
  function S6(_) {
    return _.devicePixelRatio;
  }
  function A6(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function I6(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function D6(_, e) {
    _.disable(e >>> 0);
  }
  function T6(_, e) {
    _.disable(e >>> 0);
  }
  function F6(_) {
    const e = _.document;
    return v(e) ? 0 : P(e);
  }
  function B6(_) {
    return _.done;
  }
  function P6(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function k6(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function M6(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function R6(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function C6(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function V6(_, e) {
    _.drawBuffers(e);
  }
  function L6(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function E6(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function G6(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function O6(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function W6(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function z6(_, e) {
    _.enable(e >>> 0);
  }
  function U6(_, e) {
    _.enable(e >>> 0);
  }
  function q6(_, e) {
    _.endQuery(e >>> 0);
  }
  function H6(_) {
    _.end();
  }
  function j6(_) {
    return Object.entries(_);
  }
  function K6(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function N6(_) {
    console.error(_);
  }
  function J6(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(S(_, e));
    } finally {
      s.__wbindgen_free(t, r, 1);
    }
  }
  function Q6(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return v(r) ? 0 : P(r);
  }
  function X6(_, e, t) {
    return _.fetch(S(e, t));
  }
  function Y6(_, e, t, r) {
    return _.fetch(S(e, t), r);
  }
  function Z6(_) {
    return _.finish();
  }
  function e8(_, e) {
    return _.finish(e);
  }
  function _8(_) {
    _.flush();
  }
  function t8(_) {
    _.flush();
  }
  function r8() {
    return g(function(_) {
      _.focus();
    }, arguments);
  }
  function n8(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function a8(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function o8(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function c8(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function b8(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function s8(_, e, t, r, n, a, o) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, o);
  }
  function i8(_, e) {
    _.frontFace(e >>> 0);
  }
  function f8(_, e) {
    _.frontFace(e >>> 0);
  }
  function u8(_) {
    return _.getBoundingClientRect();
  }
  function d8(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function g8() {
    return g(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : P(n);
    }, arguments);
  }
  function p8() {
    return g(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : P(r);
    }, arguments);
  }
  function w8() {
    return g(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : P(r);
    }, arguments);
  }
  function l8() {
    return g(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : P(n);
    }, arguments);
  }
  function m8() {
    return g(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function h8(_, e, t) {
    const r = _.getElementById(S(e, t));
    return v(r) ? 0 : P(r);
  }
  function y8() {
    return g(function(_, e, t) {
      const r = _.getExtension(S(e, t));
      return v(r) ? 0 : P(r);
    }, arguments);
  }
  function x8() {
    return g(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function $8() {
    return g(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function v8() {
    return g(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function S8() {
    return g(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function A8(_) {
    const e = _.getPreferredCanvasFormat();
    return (be.indexOf(e) + 1 || 96) - 1;
  }
  function I8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : O(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function D8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : O(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function T8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function F8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function B8(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function P8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : O(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function k8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : O(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function M8(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function R8(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function C8(_) {
    const e = _.getSupportedExtensions();
    return v(e) ? 0 : P(e);
  }
  function V8(_) {
    const e = _.getSupportedProfiles();
    return v(e) ? 0 : P(e);
  }
  function L8(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function E8(_, e, t, r) {
    return _.getUniformBlockIndex(e, S(t, r));
  }
  function G8(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : P(n);
  }
  function O8(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : P(n);
  }
  function W8(_, e) {
    return _[e >>> 0];
  }
  function z8(_, e) {
    const t = _[e >>> 0];
    return v(t) ? 0 : P(t);
  }
  function U8() {
    return g(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function q8(_, e) {
    return _[e >>> 0];
  }
  function H8(_, e) {
    return _[e];
  }
  function j8(_) {
    return _.gpu;
  }
  function K8(_, e, t) {
    return _.hasAttribute(S(e, t));
  }
  function N8(_) {
    return _.height;
  }
  function J8(_) {
    return _.height;
  }
  function Q8(_) {
    return _.hidden;
  }
  function X8(_, e, t) {
    return _.includes(e, t);
  }
  function Y8(_) {
    return _.info;
  }
  function Z8(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function e5(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function _5(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function t5(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function r5(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function n5(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function a5(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function o5(_) {
    let e;
    try {
      e = _ instanceof Response;
    } catch {
      e = false;
    }
    return e;
  }
  function c5(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function b5(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function s5(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function i5() {
    return g(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function f5(_) {
    return Array.isArray(_);
  }
  function u5(_) {
    return _.isComposing;
  }
  function d5(_) {
    return Number.isSafeInteger(_);
  }
  function g5(_, e) {
    return Object.is(_, e);
  }
  function p5() {
    return Symbol.iterator;
  }
  function w5(_, e) {
    const t = e.key, r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function l5(_, e) {
    const t = e.label, r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function m5(_) {
    return _.length;
  }
  function h5(_) {
    return _.length;
  }
  function y5(_) {
    return _.limits;
  }
  function x5(_) {
    return _.limits;
  }
  function $5(_, e) {
    _.linkProgram(e);
  }
  function v5(_, e) {
    _.linkProgram(e);
  }
  function S5(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function A5(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function I5(_) {
    return _.maxBindGroups;
  }
  function D5(_) {
    return _.maxBindingsPerBindGroup;
  }
  function T5(_) {
    return _.maxBufferSize;
  }
  function F5(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function B5(_) {
    return _.maxColorAttachments;
  }
  function P5(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function k5(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function M5(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function R5(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function C5(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function V5(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function L5(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function E5(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function G5(_) {
    return _.maxInterStageShaderVariables;
  }
  function O5(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function W5(_) {
    return _.maxSamplersPerShaderStage;
  }
  function z5(_) {
    return _.maxStorageBufferBindingSize;
  }
  function U5(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function q5(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function H5(_) {
    return _.maxTextureArrayLayers;
  }
  function j5(_) {
    return _.maxTextureDimension1D;
  }
  function K5(_) {
    return _.maxTextureDimension2D;
  }
  function N5(_) {
    return _.maxTextureDimension3D;
  }
  function J5(_) {
    return _.maxUniformBufferBindingSize;
  }
  function Q5(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function X5(_) {
    return _.maxVertexAttributes;
  }
  function Y5(_) {
    return _.maxVertexBufferArrayStride;
  }
  function Z5(_) {
    return _.maxVertexBuffers;
  }
  function e9(_) {
    return _.metaKey;
  }
  function _9(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function t9(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function r9(_) {
    return _.navigator;
  }
  function n9(_) {
    return _.navigator;
  }
  function a9() {
    return g(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function o9() {
    return new Error();
  }
  function c9() {
    return new Object();
  }
  function b9() {
    return new Array();
  }
  function s9() {
    return g(function() {
      return new AbortController();
    }, arguments);
  }
  function i9(_) {
    return new Uint8Array(_);
  }
  function f9(_, e) {
    return new Error(S(_, e));
  }
  function u9(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, o) => {
        const c = t.a;
        t.a = 0;
        try {
          return CS(c, t.b, a, o);
        } finally {
          t.a = c;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function d9(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function g9() {
    return g(function(_) {
      return _.next();
    }, arguments);
  }
  function p9(_) {
    return _.next;
  }
  function w9(_) {
    return _.now();
  }
  function l9(_, e) {
    _.observe(e);
  }
  function m9(_) {
    return Array.of(_);
  }
  function h9(_) {
    return _.offsetX;
  }
  function y9(_) {
    return _.offsetY;
  }
  function x9(_) {
    return _.ok;
  }
  function $9(_) {
    return _.onSubmittedWorkDone();
  }
  function v9(_) {
    const e = _.performance;
    return v(e) ? 0 : P(e);
  }
  function S9(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function A9(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function I9(_, e, t) {
    _.polygonOffset(e, t);
  }
  function D9(_, e, t) {
    _.polygonOffset(e, t);
  }
  function T9(_) {
    _.preventDefault();
  }
  function F9(_) {
    return Fe.__wrap(_);
  }
  function B9(_, e, t) {
    Uint8Array.prototype.set.call(i_(_, e), t);
  }
  function P9(_, e) {
    return _.push(e);
  }
  function k9(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function M9() {
    return g(function(_, e, t) {
      return _.querySelectorAll(S(e, t));
    }, arguments);
  }
  function R9() {
    return g(function(_, e, t) {
      const r = _.querySelector(S(e, t));
      return v(r) ? 0 : P(r);
    }, arguments);
  }
  function C9(_) {
    return _.queueMicrotask;
  }
  function V9(_) {
    queueMicrotask(_);
  }
  function L9(_) {
    return _.queue;
  }
  function E9(_, e) {
    _.readBuffer(e >>> 0);
  }
  function G9() {
    return g(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function O9() {
    return g(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function W9() {
    return g(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function z9(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function U9(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function q9(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function H9(_) {
    return _.repeat;
  }
  function j9(_, e) {
    return _.requestAdapter(e);
  }
  function K9(_) {
    return _.requestAdapter();
  }
  function N9() {
    return g(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function J9(_, e) {
    return _.requestDevice(e);
  }
  function Q9(_) {
    return Promise.resolve(_);
  }
  function X9(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function Y9(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function Z9(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function eh(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function _h() {
    return g(function(_, e, t, r, n) {
      _.setAttribute(S(e, t), S(r, n));
    }, arguments);
  }
  function th() {
    return g(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, Se(r, n), a, o >>> 0);
    }, arguments);
  }
  function rh(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function nh(_, e, t, r, n) {
    _.setIndexBuffer(e, Y_[t], r, n);
  }
  function ah(_, e, t, r) {
    _.setIndexBuffer(e, Y_[t], r);
  }
  function oh(_, e) {
    _.setPipeline(e);
  }
  function ch(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function bh(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function sh(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
  }
  function ih(_, e, t) {
    _.set(e, t >>> 0);
  }
  function fh() {
    return g(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function uh(_, e, t) {
    _[e] = t;
  }
  function dh(_, e) {
    _.a = e;
  }
  function gh(_, e) {
    _.access = jS[e];
  }
  function ph(_, e) {
    _.addressModeU = Q_[e];
  }
  function wh(_, e) {
    _.addressModeV = Q_[e];
  }
  function lh(_, e) {
    _.addressModeW = Q_[e];
  }
  function mh(_, e) {
    _.alpha = e;
  }
  function hh(_, e) {
    _.alphaMode = GS[e];
  }
  function yh(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function xh(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function $h(_, e) {
    _.arrayStride = e;
  }
  function vh(_, e) {
    _.aspect = Ht[e];
  }
  function Sh(_, e) {
    _.aspect = Ht[e];
  }
  function Ah(_, e) {
    _.attributes = e;
  }
  function Ih(_, e) {
    _.b = e;
  }
  function Dh(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function Th(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function Fh(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function Bh(_, e) {
    _.bindGroupLayouts = e;
  }
  function Ph(_, e) {
    _.binding = e >>> 0;
  }
  function kh(_, e) {
    _.binding = e >>> 0;
  }
  function Mh(_, e) {
    _.blend = e;
  }
  function Rh(_, e) {
    _.buffer = e;
  }
  function Ch(_, e) {
    _.buffer = e;
  }
  function Vh(_, e) {
    _.buffers = e;
  }
  function Lh(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function Eh(_, e) {
    _.clearValue = e;
  }
  function Gh(_, e, t) {
    _.code = S(e, t);
  }
  function Oh(_, e) {
    _.colorAttachments = e;
  }
  function Wh(_, e) {
    _.color = e;
  }
  function zh(_, e) {
    _.compare = X_[e];
  }
  function Uh(_, e) {
    _.compare = X_[e];
  }
  function qh(_, e) {
    _.count = e >>> 0;
  }
  function Hh(_, e) {
    _.cullMode = OS[e];
  }
  function jh(_, e, t) {
    _[e >>> 0] = t;
  }
  function Kh(_, e) {
    _.depthBias = e;
  }
  function Nh(_, e) {
    _.depthBiasClamp = e;
  }
  function Jh(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function Qh(_, e) {
    _.depthClearValue = e;
  }
  function Xh(_, e) {
    _.depthCompare = X_[e];
  }
  function Yh(_, e) {
    _.depthFailOp = et[e];
  }
  function Zh(_, e) {
    _.depthLoadOp = Z_[e];
  }
  function ey(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function _y(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function ty(_, e) {
    _.depthStencil = e;
  }
  function ry(_, e) {
    _.depthStencilAttachment = e;
  }
  function ny(_, e) {
    _.depthStoreOp = _t[e];
  }
  function ay(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function oy(_, e) {
    _.device = e;
  }
  function cy(_, e) {
    _.dimension = tt[e];
  }
  function by(_, e) {
    _.dimension = KS[e];
  }
  function sy(_, e) {
    _.dstFactor = Ut[e];
  }
  function iy(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function fy(_, e) {
    _.entries = e;
  }
  function uy(_, e) {
    _.entries = e;
  }
  function dy(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function gy(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function py(_, e) {
    _.externalTexture = e;
  }
  function wy(_, e) {
    _.failOp = et[e];
  }
  function ly(_, e) {
    _.format = be[e];
  }
  function my(_, e) {
    _.format = JS[e];
  }
  function hy(_, e) {
    _.format = be[e];
  }
  function yy(_, e) {
    _.format = be[e];
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
    _.fragment = e;
  }
  function Ay(_, e) {
    _.frontFace = WS[e];
  }
  function Iy(_, e) {
    _.g = e;
  }
  function Dy(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function Ty(_, e) {
    _.height = e >>> 0;
  }
  function Fy(_, e) {
    _.height = e >>> 0;
  }
  function By(_, e) {
    _.height = e >>> 0;
  }
  function Py(_, e, t) {
    _.label = S(e, t);
  }
  function ky(_, e, t) {
    _.label = S(e, t);
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
  function qy(_, e) {
    _.layout = e;
  }
  function Hy(_, e) {
    _.layout = e;
  }
  function jy(_, e) {
    _.loadOp = Z_[e];
  }
  function Ky(_, e) {
    _.lodMaxClamp = e;
  }
  function Ny(_, e) {
    _.lodMinClamp = e;
  }
  function Jy(_, e) {
    _.magFilter = qt[e];
  }
  function Qy(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function Xy(_, e) {
    _.mask = e >>> 0;
  }
  function Yy(_, e) {
    _.maxAnisotropy = e;
  }
  function Zy(_, e) {
    _.minBindingSize = e;
  }
  function ex(_, e) {
    _.minFilter = qt[e];
  }
  function _x(_, e) {
    _.mipLevel = e >>> 0;
  }
  function tx(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function rx(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function nx(_, e) {
    _.mipmapFilter = zS[e];
  }
  function ax(_, e) {
    _.module = e;
  }
  function ox(_, e) {
    _.module = e;
  }
  function cx(_, e) {
    _.multisample = e;
  }
  function bx(_, e) {
    _.multisampled = e !== 0;
  }
  function sx(_, e) {
    _.offset = e;
  }
  function ix(_, e) {
    _.offset = e;
  }
  function fx(_, e) {
    _.offset = e;
  }
  function ux(_, e) {
    _.operation = LS[e];
  }
  function dx(_, e) {
    _.origin = e;
  }
  function gx(_, e) {
    _.passOp = et[e];
  }
  function px(_, e) {
    _.powerPreference = US[e];
  }
  function wx(_, e) {
    _.primitive = e;
  }
  function lx(_, e) {
    _.querySet = e;
  }
  function mx(_, e) {
    _.r = e;
  }
  function hx(_, e) {
    _.requiredFeatures = e;
  }
  function yx(_, e) {
    _.requiredLimits = e;
  }
  function xx(_, e) {
    _.resolveTarget = e;
  }
  function $x(_, e) {
    _.resource = e;
  }
  function vx(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function Sx(_, e) {
    _.sampleCount = e >>> 0;
  }
  function Ax(_, e) {
    _.sampleType = NS[e];
  }
  function Ix(_, e) {
    _.sampler = e;
  }
  function Dx(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function Tx(_, e) {
    _.signal = e;
  }
  function Fx(_, e) {
    _.size = e;
  }
  function Bx(_, e) {
    _.size = e;
  }
  function Px(_, e) {
    _.size = e;
  }
  function kx(_, e) {
    _.srcFactor = Ut[e];
  }
  function Mx(_, e) {
    _.stencilBack = e;
  }
  function Rx(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function Cx(_, e) {
    _.stencilFront = e;
  }
  function Vx(_, e) {
    _.stencilLoadOp = Z_[e];
  }
  function Lx(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function Ex(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function Gx(_, e) {
    _.stencilStoreOp = _t[e];
  }
  function Ox(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function Wx(_, e) {
    _.stepMode = QS[e];
  }
  function zx(_, e) {
    _.storageTexture = e;
  }
  function Ux(_, e) {
    _.storeOp = _t[e];
  }
  function qx(_, e) {
    _.stripIndexFormat = Y_[e];
  }
  function Hx(_, e) {
    _.targets = e;
  }
  function jx(_, e) {
    _.texture = e;
  }
  function Kx(_, e) {
    _.texture = e;
  }
  function Nx(_, e) {
    _.timestampWrites = e;
  }
  function Jx(_, e) {
    _.topology = qS[e];
  }
  function Qx(_, e) {
    _.type = ES[e];
  }
  function Xx(_, e) {
    _.type = HS[e];
  }
  function Yx(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function Zx(_, e) {
    _.usage = e >>> 0;
  }
  function e$(_, e) {
    _.usage = e >>> 0;
  }
  function _$(_, e) {
    _.usage = e >>> 0;
  }
  function t$(_, e) {
    _.usage = e >>> 0;
  }
  function r$(_, e) {
    _.vertex = e;
  }
  function n$(_, e) {
    _.view = e;
  }
  function a$(_, e) {
    _.view = e;
  }
  function o$(_, e) {
    _.viewDimension = tt[e];
  }
  function c$(_, e) {
    _.viewDimension = tt[e];
  }
  function b$(_, e) {
    _.viewFormats = e;
  }
  function s$(_, e) {
    _.viewFormats = e;
  }
  function i$(_, e) {
    _.visibility = e >>> 0;
  }
  function f$(_, e) {
    _.width = e >>> 0;
  }
  function u$(_, e) {
    _.width = e >>> 0;
  }
  function d$(_, e) {
    _.width = e >>> 0;
  }
  function g$(_, e) {
    _.writeMask = e >>> 0;
  }
  function p$(_, e) {
    _.x = e >>> 0;
  }
  function w$(_, e) {
    _.y = e >>> 0;
  }
  function l$(_, e) {
    _.z = e >>> 0;
  }
  function m$(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function h$(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function y$(_) {
    return _.shiftKey;
  }
  function x$(_) {
    return _.signal;
  }
  function $$(_, e) {
    const t = e.stack, r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function v$() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return v(_) ? 0 : P(_);
  }
  function S$() {
    const _ = typeof global > "u" ? null : global;
    return v(_) ? 0 : P(_);
  }
  function A$() {
    const _ = typeof self > "u" ? null : self;
    return v(_) ? 0 : P(_);
  }
  function I$() {
    const _ = typeof window > "u" ? null : window;
    return v(_) ? 0 : P(_);
  }
  function D$(_, e) {
    const t = e.statusText, r = O(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function T$(_) {
    return _.status;
  }
  function F$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function B$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function P$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function k$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function M$(_, e) {
    _.stencilMask(e >>> 0);
  }
  function R$(_, e) {
    _.stencilMask(e >>> 0);
  }
  function C$(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function V$(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function L$(_, e) {
    _.submit(e);
  }
  function E$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function G$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function O$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function W$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function z$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function U$(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function q$(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function H$(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function j$(_, e, t, r, n, a, o) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, o);
  }
  function K$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function N$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function J$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Q$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function X$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Y$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Z$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function ev() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function _v() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function tv() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function rv() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function nv() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function av() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function ov() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function cv() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function bv(_, e, t) {
    return _.then(e, t);
  }
  function sv(_, e, t) {
    return _.then(e, t);
  }
  function iv(_, e) {
    return _.then(e);
  }
  function fv(_, e, t) {
    _.uniform1f(e, t);
  }
  function uv(_, e, t) {
    _.uniform1f(e, t);
  }
  function dv(_, e, t) {
    _.uniform1i(e, t);
  }
  function gv(_, e, t) {
    _.uniform1i(e, t);
  }
  function pv(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function wv(_, e, t, r) {
    _.uniform2fv(e, G(t, r));
  }
  function lv(_, e, t, r) {
    _.uniform2fv(e, G(t, r));
  }
  function mv(_, e, t, r) {
    _.uniform2iv(e, ee(t, r));
  }
  function hv(_, e, t, r) {
    _.uniform2iv(e, ee(t, r));
  }
  function yv(_, e, t, r) {
    _.uniform2uiv(e, Se(t, r));
  }
  function xv(_, e, t, r) {
    _.uniform3fv(e, G(t, r));
  }
  function $v(_, e, t, r) {
    _.uniform3fv(e, G(t, r));
  }
  function vv(_, e, t, r) {
    _.uniform3iv(e, ee(t, r));
  }
  function Sv(_, e, t, r) {
    _.uniform3iv(e, ee(t, r));
  }
  function Av(_, e, t, r) {
    _.uniform3uiv(e, Se(t, r));
  }
  function Iv(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function Dv(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function Tv(_, e, t, r) {
    _.uniform4fv(e, G(t, r));
  }
  function Fv(_, e, t, r) {
    _.uniform4fv(e, G(t, r));
  }
  function Bv(_, e, t, r) {
    _.uniform4iv(e, ee(t, r));
  }
  function Pv(_, e, t, r) {
    _.uniform4iv(e, ee(t, r));
  }
  function kv(_, e, t, r) {
    _.uniform4uiv(e, Se(t, r));
  }
  function Mv(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function Rv(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, G(r, n));
  }
  function Cv(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, G(r, n));
  }
  function Vv(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, G(r, n));
  }
  function Lv(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, G(r, n));
  }
  function Ev(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, G(r, n));
  }
  function Gv(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, G(r, n));
  }
  function Ov(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, G(r, n));
  }
  function Wv(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, G(r, n));
  }
  function zv(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, G(r, n));
  }
  function Uv(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, G(r, n));
  }
  function qv(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, G(r, n));
  }
  function Hv(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, G(r, n));
  }
  function jv(_) {
    _.unmap();
  }
  function Kv(_, e) {
    _.useProgram(e);
  }
  function Nv(_, e) {
    _.useProgram(e);
  }
  function Jv(_) {
    return _.value;
  }
  function Qv(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function Xv(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function Yv(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function Zv(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function eS(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function _S(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function tS(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function rS(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function nS(_) {
    return _.width;
  }
  function aS(_) {
    return _.width;
  }
  function oS() {
    return g(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, i_(r, n), a, o);
    }, arguments);
  }
  function cS() {
    return g(function(_, e, t, r, n, a) {
      _.writeTexture(e, i_(t, r), n, a);
    }, arguments);
  }
  function bS(_, e) {
    return _e(_, e, FS);
  }
  function sS(_, e) {
    return _e(_, e, RS);
  }
  function iS(_, e) {
    return _e(_, e, VS);
  }
  function fS(_, e) {
    return _e(_, e, BS);
  }
  function uS(_, e) {
    return _e(_, e, PS);
  }
  function dS(_, e) {
    return _e(_, e, kS);
  }
  function gS(_, e) {
    return _e(_, e, MS);
  }
  function pS(_, e) {
    return _e(_, e, TS);
  }
  function wS(_) {
    return _;
  }
  function lS(_) {
    return _;
  }
  function mS(_, e) {
    return G(_, e);
  }
  function hS(_, e) {
    return XS(_, e);
  }
  function yS(_, e) {
    return ee(_, e);
  }
  function xS(_, e) {
    return YS(_, e);
  }
  function $S(_, e) {
    return ZS(_, e);
  }
  function vS(_, e) {
    return Se(_, e);
  }
  function SS(_, e) {
    return i_(_, e);
  }
  function AS(_, e) {
    return S(_, e);
  }
  function IS(_) {
    return BigInt.asUintN(64, _);
  }
  function DS() {
    const _ = s.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function TS(_, e) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function FS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function BS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function PS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function kS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function MS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6(_, e, t);
  }
  function RS(_, e, t) {
    const r = s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (r[1]) throw F(r[0]);
  }
  function CS(_, e, t, r) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, r);
  }
  function VS(_, e, t) {
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
  ], LS = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], ES = [
    "uniform",
    "storage",
    "read-only-storage"
  ], GS = [
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
  ], OS = [
    "none",
    "front",
    "back"
  ], qt = [
    "nearest",
    "linear"
  ], WS = [
    "ccw",
    "cw"
  ], Y_ = [
    "uint16",
    "uint32"
  ], Z_ = [
    "load",
    "clear"
  ], zS = [
    "nearest",
    "linear"
  ], US = [
    "low-power",
    "high-performance"
  ], qS = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], HS = [
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
  ], jS = [
    "write-only",
    "read-only",
    "read-write"
  ], _t = [
    "store",
    "discard"
  ], Ht = [
    "all",
    "stencil-only",
    "depth-only"
  ], KS = [
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
  ], NS = [
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
  ], JS = [
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
  ], QS = [
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
  function l(_, e) {
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
    return _ = _ >>> 0, eA().subarray(_ / 4, _ / 4 + e);
  }
  function XS(_, e) {
    return _ = _ >>> 0, tA().subarray(_ / 2, _ / 2 + e);
  }
  function ee(_, e) {
    return _ = _ >>> 0, rA().subarray(_ / 4, _ / 4 + e);
  }
  function YS(_, e) {
    return _ = _ >>> 0, nA().subarray(_ / 1, _ / 1 + e);
  }
  function ZS(_, e) {
    return _ = _ >>> 0, aA().subarray(_ / 2, _ / 2 + e);
  }
  function Se(_, e) {
    return _ = _ >>> 0, oA().subarray(_ / 4, _ / 4 + e);
  }
  function i_(_, e) {
    return _ = _ >>> 0, he().subarray(_ / 1, _ / 1 + e);
  }
  let fe = null;
  function M() {
    return (fe === null || fe.buffer.detached === true || fe.buffer.detached === void 0 && fe.buffer !== s.memory.buffer) && (fe = new DataView(s.memory.buffer)), fe;
  }
  let Ne = null;
  function eA() {
    return (Ne === null || Ne.byteLength === 0) && (Ne = new Float32Array(s.memory.buffer)), Ne;
  }
  let Je = null;
  function _A() {
    return (Je === null || Je.byteLength === 0) && (Je = new Float64Array(s.memory.buffer)), Je;
  }
  let Qe = null;
  function tA() {
    return (Qe === null || Qe.byteLength === 0) && (Qe = new Int16Array(s.memory.buffer)), Qe;
  }
  let Xe = null;
  function rA() {
    return (Xe === null || Xe.byteLength === 0) && (Xe = new Int32Array(s.memory.buffer)), Xe;
  }
  let Ye = null;
  function nA() {
    return (Ye === null || Ye.byteLength === 0) && (Ye = new Int8Array(s.memory.buffer)), Ye;
  }
  function S(_, e) {
    return sA(_ >>> 0, e);
  }
  let Ze = null;
  function aA() {
    return (Ze === null || Ze.byteLength === 0) && (Ze = new Uint16Array(s.memory.buffer)), Ze;
  }
  let e_ = null;
  function oA() {
    return (e_ === null || e_.byteLength === 0) && (e_ = new Uint32Array(s.memory.buffer)), e_;
  }
  let __ = null;
  function he() {
    return (__ === null || __.byteLength === 0) && (__ = new Uint8Array(s.memory.buffer)), __;
  }
  function g(_, e) {
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
    return _A().set(_, t / 8), k = _.length, t;
  }
  function cA(_, e) {
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
  const bA = 2146435072;
  let y_ = 0;
  function sA(_, e) {
    return y_ += e, y_ >= bA && (a_ = new TextDecoder("utf-8", {
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
  function iA(_) {
    s = _;
  }
  URL = globalThis.URL;
  const fA = await G_({
    "./proteus_bench_web_bg.js": {
      __wbg_new_typed_00a409eb4ec4f2d9: u9,
      __wbg_then_05edfc8a4fea5106: bv,
      __wbg_call_5575218572ead796: Nm,
      __wbg_next_0c4066e251d2eff9: g9,
      __wbg_done_b62d4a7d2286852a: B6,
      __wbg_value_49f783bb59765962: Jv,
      __wbg_length_c6054974c0a6cdb9: h5,
      __wbg_get_unchecked_54a4374c38e08460: q8,
      __wbg_instanceof_Map_afa18d5840c04c15: n5,
      __wbg_get_197a3fe98f169e38: W8,
      __wbg_new_227d7c05414eb861: o9,
      __wbg_stack_3b0d974bbf31e44f: $$,
      __wbg_error_a6fa202b58aa1cd3: J6,
      __wbg_push_f724b5db8acf89d2: P9,
      __wbg_proteusapp_new: F9,
      __wbg_set_dc601f4a69da0bc2: jh,
      __wbg_call_8e98ed2f3c86c4b5: Jm,
      __wbg_call_0e855b388e315e17: Km,
      __wbg_get_with_ref_key_6412cf3094599694: H8,
      __wbg_set_6be42768c690e380: uh,
      __wbg_String_8564e559799eccda: G4,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: t5,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: j5,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: K5,
      __wbg_maxTextureDimension3D_06ee54121b37d431: N5,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: H5,
      __wbg_maxBindGroups_14611ac9ed1c6b56: I5,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: D5,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: E5,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: L5,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: O5,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: W5,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: U5,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: q5,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: Q5,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: J5,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: z5,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: Z5,
      __wbg_maxBufferSize_f7ce3e1856349d2f: T5,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: X5,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: Y5,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: G5,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: t9,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: _9,
      __wbg_maxColorAttachments_fd9187f9f786da18: B5,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: F5,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: C5,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: P5,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: k5,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: M5,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: R5,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: V5,
      __wbg_description_18d0a6d4077fec8e: $6,
      __wbg_set_dst_factor_1ed75271a89a711e: sy,
      __wbg_set_operation_b5862f5a1a143b30: ux,
      __wbg_set_src_factor_1c4f755f8676df1b: kx,
      __wbg_set_texture_16d2be474ce6ad0c: jx,
      __wbg_set_mip_level_246db61be15bdd69: _x,
      __wbg_set_x_56f0c2c08a62725c: p$,
      __wbg_set_y_04fb8ce84735b4e1: w$,
      __wbg_set_z_a51316db27a4941e: l$,
      __wbg_set_origin_9b3b0fbe0a5dc469: dx,
      __wbg_set_aspect_77332ac136ee94eb: vh,
      __wbg_Window_a07901001eb4269f: O4,
      __wbg_gpu_a7c12045c25d009a: j8,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: W4,
      __wbg_set_a_5f6e488475272136: dh,
      __wbg_set_b_688365d692bba214: Ih,
      __wbg_set_g_d4d1d77cf8fdd362: Iy,
      __wbg_set_r_527e5a41c4b1a846: mx,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: _5,
      __wbg_queue_65d985f3e6d786a6: L9,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: px,
      __wbg_requestAdapter_9ff5c9d1ff271165: j9,
      __wbg_set_required_limits_3b031f66f838f4e3: yx,
      __wbg_set_required_features_54918de8185c5fab: hx,
      __wbg_set_label_bae57fb9f24fde5c: Ly,
      __wbg_requestDevice_c1c34f88a477e509: J9,
      __wbg_limits_50a8c5e629dbfe40: x5,
      __wbg_info_22dcf1fd1b12bc7d: Y8,
      __wbg_set_size_41cd9255ca1e4242: Bx,
      __wbg_set_usage_908213a4d4bb8bde: _$,
      __wbg_set_mapped_at_creation_48de4735fab51e78: Qy,
      __wbg_set_label_cd567b7b35838e4c: Oy,
      __wbg_createBuffer_2f08c0205e04efca: I7,
      __wbg_set_address_mode_u_a37cf1035585c638: ph,
      __wbg_set_address_mode_v_8ac049e029caef76: wh,
      __wbg_set_address_mode_w_eb9260ee11729e92: lh,
      __wbg_set_compare_42211fbf15e3b850: Uh,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: Ky,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: Ny,
      __wbg_set_mag_filter_69d846b974d4bcc0: Jy,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: ex,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: nx,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: Yy,
      __wbg_set_label_dcd98efbb9370da8: zy,
      __wbg_createSampler_248bd67c920af37d: E7,
      __wbg_set_width_1a5e2e86fa5bdcd8: u$,
      __wbg_set_height_e8b5483b8c117d5e: Fy,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: ey,
      __wbg_set_format_e9d4b1475bb3bd3b: $y,
      __wbg_set_size_a61ff22205255d61: Px,
      __wbg_set_usage_7fa9cd18d1104aca: e$,
      __wbg_set_label_0c1bd0e976cf0a9a: ky,
      __wbg_set_dimension_36e13ccecae5af4b: by,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: rx,
      __wbg_set_sample_count_865e1d19b84e27e6: Sx,
      __wbg_set_view_formats_bab284fc81b40e70: b$,
      __wbg_createTexture_9e76b80a2dc0d12e: H7,
      __wbg_set_entries_fc76ca4d7da6a709: uy,
      __wbg_set_layout_eeef59714f5bf48b: Hy,
      __wbg_set_label_f92ae11c77d74198: Uy,
      __wbg_createBindGroup_2320df4db188406c: S7,
      __wbg_set_code_56e2d45ec1ff6c2d: Gh,
      __wbg_set_label_be45aed56e4b9fee: Ey,
      __wbg_createShaderModule_53701de4fb271c90: O7,
      __wbg_set_label_d1c24b5a7a3ac31d: Wy,
      __wbg_createCommandEncoder_cd88faca35d9ed68: T7,
      __wbg_set_bind_group_layouts_5325d038771af328: Bh,
      __wbg_set_label_2f592bd1be3db6b3: Cy,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: P7,
      __wbg_set_module_14e471fdd94c582d: ox,
      __wbg_set_entry_point_8db3b6d103e3b865: gy,
      __wbg_set_buffers_85a7238f4ef28ab4: Vh,
      __wbg_set_layout_7c5ba5bdcde8a0f0: qy,
      __wbg_set_vertex_a4951dd9a7a4ed54: r$,
      __wbg_set_label_c47c451211e2f6d2: Gy,
      __wbg_set_format_f9341112e43ea182: vy,
      __wbg_set_depth_compare_30e9ea552da12fe2: Xh,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: ay,
      __wbg_set_depth_bias_428c9340b0fd937b: Kh,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: Nh,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: Jh,
      __wbg_set_compare_1509dc1a5420943f: zh,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: Yh,
      __wbg_set_fail_op_77ab26c98f847b65: wy,
      __wbg_set_pass_op_e9470d1262fb8a8b: gx,
      __wbg_set_stencil_back_6ef4683123b19b25: Mx,
      __wbg_set_stencil_front_aeb8580a97e5424b: Cx,
      __wbg_set_stencil_read_mask_2954f260d47349ea: Lx,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: Ox,
      __wbg_set_depth_stencil_1bd50dbc450c8650: ty,
      __wbg_set_module_08ad08e736d8edbf: ax,
      __wbg_set_targets_6b0b3bdd87f35668: Hx,
      __wbg_set_entry_point_6fec5723cc790927: dy,
      __wbg_set_fragment_1a595620425637e1: Sy,
      __wbg_set_count_26a934d1cd07d080: qh,
      __wbg_set_mask_0c49a66362fc0079: Xy,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: yh,
      __wbg_set_multisample_85f073947b782d07: cx,
      __wbg_set_cull_mode_9d466c1ab414cac8: Hh,
      __wbg_set_front_face_50cdf4eb61504a46: Ay,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: qx,
      __wbg_set_topology_beefb3aca0612b00: Jx,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: Yx,
      __wbg_set_primitive_369241acd17871f1: wx,
      __wbg_createRenderPipeline_f48187ba9f7701e8: C7,
      __wbg_set_entries_3017e6132f938c6e: fy,
      __wbg_set_label_1175a3329a06e52b: My,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: v7,
      __wbg_limits_1c25cb4f379a4418: y5,
      __wbg_set_color_attachments_abe67f6631926e28: Oh,
      __wbg_set_label_8fd860a36d2c7b74: Vy,
      __wbg_set_view_dbd0294573f64d05: a$,
      __wbg_set_depth_clear_value_442bf492734f63b6: Qh,
      __wbg_set_depth_load_op_34d430b74bb36d91: Zh,
      __wbg_set_depth_store_op_0ea0a215313dbda7: ny,
      __wbg_set_depth_read_only_138a11b10c731094: _y,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: Rx,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: Vx,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: Gx,
      __wbg_set_stencil_read_only_fb489d191b6d969b: Ex,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: ry,
      __wbg_set_query_set_18679a8580267d5a: lx,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: Fh,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: iy,
      __wbg_set_timestamp_writes_c552d52fbb417005: Nx,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: gm,
      __wbg_copyTextureToTexture_1be188df1e535c0a: $7,
      __wbg_label_47480289cc2bce71: l5,
      __wbg_set_label_2d2227f4d5991e50: Ry,
      __wbg_finish_cfaeede3baf55be1: e8,
      __wbg_finish_087cb89c65c06eb1: Z6,
      __wbg_drawIndexed_68637ebab6dd8d6e: G6,
      __wbg_setPipeline_bab24dbce96903b9: oh,
      __wbg_setViewport_f9d423db4f4b4b58: sh,
      __wbg_setBindGroup_4ba56e1e0d26f244: th,
      __wbg_setBindGroup_6124849cc8547086: rh,
      __wbg_setIndexBuffer_17431786d06c1b7c: nh,
      __wbg_setIndexBuffer_a16ed5b869c87507: ah,
      __wbg_setVertexBuffer_b508baf8d0ffe331: bh,
      __wbg_setVertexBuffer_91c4b602d0289943: ch,
      __wbg_end_414453a89205612c: H6,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: A8,
      __wbg_getCurrentTexture_51975ae7185fd15f: m8,
      __wbg_set_device_0d774b66e7288f72: oy,
      __wbg_set_format_d347899cd860709c: xy,
      __wbg_set_usage_ae014e77ff77ce06: t$,
      __wbg_set_alpha_mode_92402195b3ae1ee7: hh,
      __wbg_set_view_formats_fe531a043efb71fa: s$,
      __wbg_configure_3d64c677c7d68a15: w7,
      __wbg_writeBuffer_b4bdd36178348ca5: oS,
      __wbg_set_bytes_per_row_91681ca78d744888: Lh,
      __wbg_set_rows_per_image_d198b7e73a38978b: vx,
      __wbg_set_offset_a097a8050a3a9a33: fx,
      __wbg_writeTexture_b45b69132e46a227: cS,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: $9,
      __wbg_submit_1290d44bb76ecef4: L$,
      __wbg_getMappedRange_5ed22727c9679168: $8,
      __wbg_unmap_8f06698a75b8331a: jv,
      __wbg_destroy_b5b39f25f0799295: v6,
      __wbg_mapAsync_bb0029907dd91181: A5,
      __wbg_set_dimension_174ad7e2fb67fb4e: cy,
      __wbg_set_format_90860b0321868db4: hy,
      __wbg_set_aspect_a823a14d00d42d37: Sh,
      __wbg_set_base_array_layer_cc6c68d233489c4b: Dh,
      __wbg_set_array_layer_count_daec613068108a9d: xh,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: Th,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: tx,
      __wbg_set_label_03d2396d4655a3e1: Py,
      __wbg_set_usage_7f0dda8309469b1c: Zx,
      __wbg_createView_cc96b5bdd3d5bf5e: N7,
      __wbg_set_min_binding_size_689661b9ed25e083: Zy,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: Dy,
      __wbg_set_type_38961e08504ca674: Qx,
      __wbg_requestAdapter_c46930b8bc33722d: K9,
      __wbg_set_alpha_aa2e606e9e647b21: mh,
      __wbg_set_color_bc393d7efc3c8594: Wh,
      __wbg_set_visibility_1bca121a89accba5: i$,
      __wbg_set_storage_texture_ab9eed9786337ef0: zx,
      __wbg_set_external_texture_825fe2bc7a0c0603: py,
      __wbg_set_binding_b6b0fe5c281b8c69: Ph,
      __wbg_set_buffer_e89095a9f0cafad3: Ch,
      __wbg_set_sampler_8c5d7fb1b02058c6: Ix,
      __wbg_set_texture_e25a73da75cf5808: Kx,
      __wbg_set_format_abf7a1bc5425c56a: yy,
      __wbg_set_blend_8d6e9c08b5702a09: Mh,
      __wbg_set_write_mask_144b25e2bd909124: g$,
      __wbg_set_load_op_56844f51434037bf: jy,
      __wbg_set_store_op_caeede4654b3d847: Ux,
      __wbg_set_view_bdeab150b5f0768c: n$,
      __wbg_set_clear_value_642701f928a5ccb3: Eh,
      __wbg_set_resolve_target_fe76b3f99cf72078: xx,
      __wbg_set_buffer_55f096330c8912b4: Rh,
      __wbg_set_offset_73156b0e0b41d79a: sx,
      __wbg_set_size_1e6281b07cd39177: Fx,
      __wbg_set_binding_f3c188a8cd21455b: kh,
      __wbg_set_resource_fe385d2e3dadaf63: $x,
      __wbg_set_format_6606f5c1fba6f459: my,
      __wbg_set_offset_8d9d9afffa18b591: ix,
      __wbg_set_shader_location_0ff30a733291a396: Dx,
      __wbg_set_array_stride_c2c009eabc18b5f6: $h,
      __wbg_set_attributes_05f9117fd32ca606: Ah,
      __wbg_set_step_mode_a35aef328761c452: Wx,
      __wbg_set_type_c1eebc19f8a6aeb9: Xx,
      __wbg_set_multisampled_40505c1381e1c32c: bx,
      __wbg_set_sample_type_7088b1efddce6a69: Ax,
      __wbg_set_view_dimension_3ed01b237e85826f: c$,
      __wbg_set_format_1786adb7bc74c7c9: ly,
      __wbg_set_access_091f317905cd76a5: gh,
      __wbg_set_view_dimension_263387976511ebc9: o$,
      __wbg_includes_83dff8d05da243c5: X8,
      __wbg_clearBufferuiv_1d2d93401c0904a3: Ym,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: u7,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: g7,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: p7,
      __wbg_copyBufferSubData_a944f33b601b822d: m7,
      __wbg_clientWaitSync_7580165bd2eff461: a7,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: d7,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: x7,
      __wbg_createQuery_f013132b870a71ef: R7,
      __wbg_createSampler_9fe50152a2524319: G7,
      __wbg_createVertexArray_8685feb21901c932: K7,
      __wbg_deleteQuery_ef51ea0a52420103: a6,
      __wbg_deleteSampler_5c045e0cc55813d4: b6,
      __wbg_getIndexedParameter_2b18df6fca85f751: x8,
      __wbg_getQueryParameter_0599e85ddb81220b: B8,
      __wbg_getSyncParameter_9a2bda340ebe166f: L8,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: E8,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: i5,
      __wbg_deleteSync_37ca83c429c43d8a: f6,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: p6,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: k6,
      __wbg_drawBuffers_558d96e52e754731: V6,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: E6,
      __wbg_endQuery_161170c5280a8293: q6,
      __wbg_fenceSync_56efc7cc79111e54: Q6,
      __wbg_framebufferTextureLayer_2312acdc74f97676: b8,
      __wbg_getBufferSubData_92680d3a2f7be029: d8,
      __wbg_readBuffer_361ec5474f3aae49: E9,
      __wbg_readPixels_5840000f3e22f3ce: O9,
      __wbg_readPixels_5bf204799ed2272f: W9,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: z9,
      __wbg_texImage3D_8647ef58aef5b912: z$,
      __wbg_texStorage2D_ed5df596c5f1e3af: H$,
      __wbg_texStorage3D_160b0197bc190f04: j$,
      __wbg_texSubImage2D_f03448e182b0820d: ev,
      __wbg_texSubImage2D_d14d9c0a1f627c31: Z$,
      __wbg_texSubImage2D_89866a04ecd0a76b: Q$,
      __wbg_texSubImage2D_5c630043f1c56716: J$,
      __wbg_samplerParameterf_3157ba41c0f4d97a: X9,
      __wbg_samplerParameteri_f85a29156e790189: Y9,
      __wbg_texImage2D_0e0f37b9fb297d01: E$,
      __wbg_texImage2D_0e537dc331652de3: G$,
      __wbg_texImage3D_30dbf7234481b8f5: W$,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: N$,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: X$,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: Y$,
      __wbg_texSubImage3D_933e4cd41cc5376d: av,
      __wbg_texSubImage3D_c3538b28040daac9: cv,
      __wbg_uniform1ui_36c94692177ebf76: pv,
      __wbg_uniform2fv_17592f4dad9798fb: wv,
      __wbg_uniform2iv_d5d29ebbc466977d: hv,
      __wbg_texSubImage3D_0fdbd843482bb916: tv,
      __wbg_texSubImage3D_09a97a968b93253d: _v,
      __wbg_texSubImage3D_355efde0dc047913: rv,
      __wbg_texSubImage3D_bd32c8e29e470904: ov,
      __wbg_texSubImage3D_5a238709d114b609: nv,
      __wbg_uniform2uiv_418ba3bf6a230dd5: yv,
      __wbg_uniform4fv_9e670a001c77dca0: Fv,
      __wbg_uniform4iv_1d57c6b8e5c0e447: Bv,
      __wbg_uniform3fv_dbe44b778e6b89e8: $v,
      __wbg_uniform3iv_d75d3a5f86d54be4: Sv,
      __wbg_uniform3uiv_71c1efc24a662de9: Av,
      __wbg_uniform4uiv_c5d45f5dbdae727a: kv,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: Ev,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: Ov,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: Wv,
      __wbg_uniformBlockBinding_829a71912ad79a04: Mv,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: Rv,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: Vv,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: Lv,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: zv,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: Yv,
      __wbg_activeTexture_525ee3068cb9e8d5: cm,
      __wbg_attachShader_3477e67517b09b6b: fm,
      __wbg_bindAttribLocation_79b5d26727094518: pm,
      __wbg_bindBuffer_d3111de6861cb875: mm,
      __wbg_bindFramebuffer_63e837a5dc0accfb: xm,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: $m,
      __wbg_bindTexture_7ab28ff4ff3dc506: Am,
      __wbg_blendColor_15f26633b646e542: Fm,
      __wbg_blendEquation_7dadb4db540a42da: Mm,
      __wbg_blendEquationSeparate_8240ddfa32266109: Pm,
      __wbg_blendFunc_b15af02643e188f1: Em,
      __wbg_blendFuncSeparate_456410f9919bed39: Vm,
      __wbg_clear_dadcb3e2929388b0: r7,
      __wbg_clearDepth_05c17028494ee4dd: Zm,
      __wbg_clearStencil_917833d1e2ac56e4: t7,
      __wbg_colorMask_f111e3e5796458f4: b7,
      __wbg_compileShader_f5625b583b2c9fd6: s7,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: qv,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: Hv,
      __wbg_vertexAttribDivisor_f17a8585267be92f: Xv,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: h7,
      __wbg_createBuffer_9f602b2dbcbf409c: D7,
      __wbg_createFramebuffer_4a250944a4542bbc: F7,
      __wbg_createProgram_4c8164d471c10346: k7,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: L7,
      __wbg_createShader_9c5cd42709d915ff: z7,
      __wbg_createTexture_3eed23cb87dd35fc: U7,
      __wbg_cullFace_94f24b4fd5e9038b: X7,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: Z7,
      __wbg_getExtension_11824edd67a143d8: y8,
      __wbg_getParameter_7f7f23cae98f2c81: v8,
      __wbg_getProgramInfoLog_cd84be80942f345b: D8,
      __wbg_getProgramParameter_039391d5ba319f50: T8,
      __wbg_getShaderInfoLog_495bddda98172699: P8,
      __wbg_getShaderParameter_4eb65cfb174ceb22: M8,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: C8,
      __wbg_getUniformLocation_ab63f569a4e41744: O8,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: _6,
      __wbg_deleteProgram_eff668280dcb01ca: n6,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: c6,
      __wbg_deleteShader_3339454254c7147c: s6,
      __wbg_deleteTexture_c1c58550dc55af5c: d6,
      __wbg_depthFunc_31b183b5b8ee478e: w6,
      __wbg_depthMask_cab7f2ae7f0e559c: h6,
      __wbg_depthRange_797a71ba3b79267a: y6,
      __wbg_disable_cb1b3e6c1cee5202: T6,
      __wbg_disableVertexAttribArray_b395358ec5084c39: I6,
      __wbg_drawArrays_42dbb4b0349c8f34: R6,
      __wbg_enable_d1f42f78be33a553: U6,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: O6,
      __wbg_flush_7ae42f071230db6b: _8,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: a8,
      __wbg_framebufferTexture2D_367ab597a005e8d9: o8,
      __wbg_frontFace_9bdcf2a758e989e5: i8,
      __wbg_linkProgram_e23a348b0f6e0c4f: v5,
      __wbg_pixelStorei_a78a504be58d1d0a: A9,
      __wbg_polygonOffset_a4f07d97b9b0dced: D9,
      __wbg_renderbufferStorage_3049e13db5c4e60e: q9,
      __wbg_scissor_6c024669fbf4fe72: Z9,
      __wbg_vertexAttribPointer_4e5d289c5d224210: eS,
      __wbg_viewport_a0ca330f9b85397e: _S,
      __wbg_shaderSource_66dce75b25a1a407: h$,
      __wbg_stencilFuncSeparate_ec603976be9569a4: B$,
      __wbg_stencilMask_485dcb5965c79a71: M$,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: k$,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: C$,
      __wbg_texParameteri_c6efffcecb474d2f: U$,
      __wbg_uniform1f_3acd3f3eb50b5e11: fv,
      __wbg_uniform1i_e4f13604354c28ae: gv,
      __wbg_uniform4f_a5008773cfb47d1a: Dv,
      __wbg_useProgram_ab2ee2a13a1fd909: Nv,
      __wbg_bufferSubData_2270f1b9db71e642: qm,
      __wbg_clearBufferfv_6b77b9402254a2bf: Qm,
      __wbg_clearBufferiv_0f056544010eef3e: Xm,
      __wbg_beginQuery_dad334d972fed3cc: dm,
      __wbg_bindBufferRange_16a9d90becc2a7d7: lm,
      __wbg_bindSampler_3c7002cb6d56ae8f: Sm,
      __wbg_bindVertexArray_c391bd47303d75cd: Tm,
      __wbg_blitFramebuffer_ea96ada8bba07582: Gm,
      __wbg_bufferData_64e9905f2b3d3a6f: zm,
      __wbg_bufferData_99bbbc63f02251c4: Um,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: b5,
      __wbg_performance_4c23a97261596fec: v9,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: N9,
      __wbg_fetch_2d913f7108d17a24: X6,
      __wbg_fetch_d8c50740ea23b248: Y6,
      __wbg_navigator_935098efd1dc7fe5: n9,
      __wbg_devicePixelRatio_8e5ca44720abafec: S6,
      __wbg_document_2634180a4c694068: F6,
      __wbg_instanceof_Window_0d356b88a2f77c42: s5,
      __wbg_hidden_cb32701ca3785fea: Q8,
      __wbg_getElementById_c7aba6b93b34bf01: h8,
      __wbg_querySelector_1f3658f4b48e268b: R9,
      __wbg_querySelectorAll_ffda3c891a9eb29a: M9,
      __wbg_hasAttribute_73e1230c9c107e79: K8,
      __wbg_setAttribute_8bccfbabf2a83682: _h,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: u8,
      __wbg_focus_c80921c19b28520b: r8,
      __wbg_uniform2iv_c5e863975dd780d8: mv,
      __wbg_uniform3fv_7723e142be50856f: xv,
      __wbg_uniform3iv_bea3976522e15d48: vv,
      __wbg_uniform4fv_85ad5d23234895d2: Tv,
      __wbg_clear_ff8cfdf420f7dde6: n7,
      __wbg_clearDepth_ac6b54f112feeaf7: e7,
      __wbg_clearStencil_56d6a6308294a749: _7,
      __wbg_colorMask_b0ab9d429a1efa0a: c7,
      __wbg_compileShader_fcf3f3d2891f73f9: i7,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: y7,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: A7,
      __wbg_createFramebuffer_ab73f30b5dc97415: B7,
      __wbg_createProgram_f11c63f59f41b82a: M7,
      __wbg_createRenderbuffer_556000dbb01f5026: V7,
      __wbg_createShader_27d9388313f3b14e: W7,
      __wbg_createTexture_8455c703424c567b: q7,
      __wbg_cullFace_774780fb4177aab8: Q7,
      __wbg_deleteBuffer_d758283bea6e0ccf: e6,
      __wbg_deleteFramebuffer_8953b325144192fe: t6,
      __wbg_deleteProgram_0135c6926e75af75: r6,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: o6,
      __wbg_deleteShader_79dbaaed69b7ca3b: i6,
      __wbg_deleteTexture_3acb672a45f9998a: u6,
      __wbg_depthFunc_eaca1bc79f7bf216: l6,
      __wbg_depthMask_3a9074b08d1f68e5: m6,
      __wbg_depthRange_c24a808b3496e0a9: x6,
      __wbg_uniform4iv_a9aaa92f2f458ec2: Pv,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: Cv,
      __wbg_uniformMatrix3fv_da8c388748c5739b: Gv,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: Uv,
      __wbg_activeTexture_1d5359b20df41710: om,
      __wbg_attachShader_683d1070365e7066: um,
      __wbg_bindAttribLocation_d56d3c40331af7ed: wm,
      __wbg_bindBuffer_e95efaf0d4851845: hm,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: ym,
      __wbg_bindRenderbuffer_d608b211c51ed147: vm,
      __wbg_bindTexture_ffc56f1e5c5526c6: Im,
      __wbg_blendColor_a0ba1cdcecc3a34c: Bm,
      __wbg_blendEquation_8bfa69f639ae92da: Rm,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: km,
      __wbg_blendFunc_713c504adab14f98: Lm,
      __wbg_blendFuncSeparate_3eef699c291dbc87: Cm,
      __wbg_disable_4dca6ee0ccc91e4a: D6,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: A6,
      __wbg_drawArrays_10e1254aa4524ae9: M6,
      __wbg_enable_c6e523307311617a: z6,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: W6,
      __wbg_flush_eb3fb8da2ec00d57: t8,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: n8,
      __wbg_linkProgram_6a2eee02a03b9b00: $5,
      __wbg_pixelStorei_55ad4c67b699537c: S9,
      __wbg_polygonOffset_06dc6468c12a57e1: I9,
      __wbg_renderbufferStorage_2918fb696fd45663: U9,
      __wbg_scissor_f9696c630e464977: eh,
      __wbg_shaderSource_628c37a476ae65f9: m$,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: F$,
      __wbg_stencilMask_f9fe198f7fd6fc9c: R$,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: P$,
      __wbg_stencilOpSeparate_6cf50803475d2640: V$,
      __wbg_texParameteri_fe6210a493d48a16: q$,
      __wbg_framebufferTexture2D_3a558e14f56720d2: c8,
      __wbg_frontFace_c9bb1fa659ffd276: f8,
      __wbg_getParameter_91a344e1a84a4669: S8,
      __wbg_getProgramInfoLog_35410850de9ccefe: I8,
      __wbg_getProgramParameter_bbc667347ac2e882: F8,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: k8,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: R8,
      __wbg_getUniformLocation_340155dc706d3fea: G8,
      __wbg_uniform1f_d34e4b454f7c8e73: uv,
      __wbg_uniform1i_cd9a7f990128ea48: dv,
      __wbg_uniform4f_4410d2faaa7e5dda: Iv,
      __wbg_useProgram_0e1cd86765304939: Kv,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: Zv,
      __wbg_viewport_b5bd46a0d111c83c: tS,
      __wbg_texSubImage2D_1b2ff28f994c325e: K$,
      __wbg_uniform2fv_39277cf2d3cb83c7: lv,
      __wbg_bufferData_5df9bdb32e189eee: Wm,
      __wbg_bufferData_26132561617ce8fb: Om,
      __wbg_bufferSubData_44db8a3b4a70b57d: Hm,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: f7,
      __wbg_readPixels_05377f8b6fa1d8eb: G9,
      __wbg_texImage2D_7bc3001cb8602ed2: O$,
      __wbg_navigator_017bc45e84c473cc: r9,
      __wbg_log_d282446d03691e72: S5,
      __wbg_info_a392cd5b7536cfb5: Z8,
      __wbg_warn_88c4a5bd9a322000: rS,
      __wbg_debug_7271beced8b71cd4: Y7,
      __wbg_error_933f449d72fef598: N6,
      __wbg_error_50f60c611a3dcf64: K6,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: Dm,
      __wbg_width_08e66520b99071f4: nS,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: j7,
      __wbg_height_e9afb506f31052a9: J8,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: g6,
      __wbg_queryCounterEXT_ebb00bcc96221671: k9,
      __wbg_aborted_4d4114700dc4c251: am,
      __wbg_addEventListener_ea90bc131475777e: bm,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: s8,
      __wbg_set_width_f9e631f4ee129e5c: d$,
      __wbg_set_height_ef298446b359b0c5: By,
      __wbg_getContext_70c2d1bed75d4122: w8,
      __wbg_getContext_422b32d0ee4b8076: g8,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: P6,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: L6,
      __wbg_arrayBuffer_ff96d08b7b6be32e: im,
      __wbg_get_37b48b8fa52d1f2c: z8,
      __wbg_status_0053aa6239760447: T$,
      __wbg_ok_c962da6f1a034d81: x9,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: Qv,
      __wbg_statusText_0f412961834ccfe9: D$,
      __wbg_instanceof_Response_79948c98d1d2ba75: o5,
      __wbg_set_signal_4a69430cb12800f3: Tx,
      __wbg_new_1e52e3c919312525: a9,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: C6,
      __wbg_observe_592b94857eed8e27: l9,
      __wbg_altKey_7412dd64f8c921c7: sm,
      __wbg_ctrlKey_00097886a21597a7: J7,
      __wbg_shiftKey_273ee8c901267b55: y$,
      __wbg_metaKey_1c2847b62ad062c1: e9,
      __wbg_repeat_46a5c90df9f6ef0b: H9,
      __wbg_isComposing_e3709163a95a2477: u5,
      __wbg_key_d6b3d2cce3d41872: w5,
      __wbg_code_87bb99fdec02d313: o7,
      __wbg_now_0f628e0e435c541b: w9,
      __wbg_offsetX_0214819d43aaf6d5: h9,
      __wbg_offsetY_f18f571e33b385ab: y9,
      __wbg_button_bb3285fcdf965178: jm,
      __wbg_signal_4d9d567be73ea52c: x$,
      __wbg_new_51233fa2a760b272: s9,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: V8,
      __wbg_abort_6e6ea7d259504afc: nm,
      __wbg_preventDefault_c047d3e292b08cc4: T9,
      __wbg_contentRect_0fb8c8900d689a0c: l7,
      __wbg_width_a86bcd32bd998060: aS,
      __wbg_height_cd732bbdc7b66e49: N8,
      __wbg_set_width_031bdecd763c5855: f$,
      __wbg_set_height_ad5056ea051acd78: Ty,
      __wbg_getContext_486aab500e1c34c9: p8,
      __wbg_getContext_9fd4db9b1cf155db: l8,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: r5,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: a5,
      __wbg_resolve_d82363d90af6928a: Q9,
      __wbg_then_591b6b3a75ee817a: iv,
      __wbg_iterator_cc47ba25a2be735a: p5,
      __wbg_get_9a29be2cb383ed9a: U8,
      __wbg_next_402fa10b59ab20c3: p9,
      __wbg_new_2e117a478906f062: c9,
      __wbg_new_36e147a8ced3c6e0: b9,
      __wbg_of_62183ea089c00bfa: m9,
      __wbg_isArray_145a34fd0a38d37b: f5,
      __wbg_new_e66a4b7758dd2e5c: f9,
      __wbg_isSafeInteger_a3389a198582f5f6: d5,
      __wbg_is_de5b366c746e004c: g5,
      __wbg_entries_c261c3fa1f281256: j6,
      __wbg_then_2a84678a50976959: sv,
      __wbg_length_589238bdcf171f0e: m5,
      __wbg_prototypesetcall_d721637c7ca66eb8: B9,
      __wbg_set_272b80acaf9a75e8: ih,
      __wbg_new_81880fb5002cb255: i9,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: d9,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: v$,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: A$,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: S$,
      __wbg_static_accessor_WINDOW_168f178805d978fe: I$,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: e5,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: c5,
      __wbg_queueMicrotask_1c9b3800e321a967: C9,
      __wbg_queueMicrotask_311744e534a929a3: V9,
      __wbg_set_4564f7dc44fcb0c9: fh,
      __wbg___wbindgen_number_get_1cc01dd708740256: em,
      __wbg___wbindgen_in_4990f46af709e33c: H4,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: tm,
      __wbg___wbindgen_is_null_6d937fbfb6478470: N4,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: Y4,
      __wbg_Number_c4bdf66bb78f7977: E4,
      __wbg_Error_fdd633d4bb5dd76a: L4,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: j4,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: J4,
      __wbg___wbindgen_is_string_1fca8072260dd261: Q4,
      __wbg___wbindgen_string_get_71bb4348194e31f0: _m,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: U4,
      __wbg___wbindgen_is_function_acc5528be2b923f2: K4,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: X4,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: Z4,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: z4,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: rm,
      __wbg___wbindgen_debug_string_8a447059637473e2: q4,
      __wbindgen_init_externref_table: DS,
      __wbindgen_cast_0000000000000001: bS,
      __wbindgen_cast_0000000000000002: sS,
      __wbindgen_cast_0000000000000003: iS,
      __wbindgen_cast_0000000000000004: fS,
      __wbindgen_cast_0000000000000005: uS,
      __wbindgen_cast_0000000000000006: dS,
      __wbindgen_cast_0000000000000007: gS,
      __wbindgen_cast_0000000000000008: pS,
      __wbindgen_cast_0000000000000009: wS,
      __wbindgen_cast_000000000000000a: lS,
      __wbindgen_cast_000000000000000b: mS,
      __wbindgen_cast_000000000000000c: hS,
      __wbindgen_cast_000000000000000d: yS,
      __wbindgen_cast_000000000000000e: xS,
      __wbindgen_cast_000000000000000f: $S,
      __wbindgen_cast_0000000000000010: vS,
      __wbindgen_cast_0000000000000011: SS,
      __wbindgen_cast_0000000000000012: AS,
      __wbindgen_cast_0000000000000013: IS
    }
  }, P4), { memory: uA, clear: dA, on_frame: gA, show: pA, start: wA, stop_frames: lA, mount: mA, __wbg_proteusapp_free: hA, proteusapp_addChild: yA, proteusapp_animateTo: xA, proteusapp_bakeTexture: $A, proteusapp_bakedImageSize: vA, proteusapp_bakedTextSize: SA, proteusapp_bindKey: AA, proteusapp_channelDestroy: IA, proteusapp_channelSet: DA, proteusapp_clearFocus: TA, proteusapp_component: FA, proteusapp_copyBakedImageFrom: BA, proteusapp_createVideo: PA, proteusapp_cropImage: kA, proteusapp_declareGeometry: MA, proteusapp_declaredGeometry: RA, proteusapp_destroy: CA, proteusapp_devices: VA, proteusapp_focus: LA, proteusapp_focused: EA, proteusapp_freeResources: GA, proteusapp_get: OA, proteusapp_hideVideo: WA, proteusapp_inputDevices: zA, proteusapp_inputMode: UA, proteusapp_isFocused: qA, proteusapp_loadTexture: HA, proteusapp_mergeFrom: jA, proteusapp_mergeFromWithBehavior: KA, proteusapp_new: NA, proteusapp_onAppKey: JA, proteusapp_onBlur: QA, proteusapp_onClick: XA, proteusapp_onDrag: YA, proteusapp_onDropped: ZA, proteusapp_onFocus: eI, proteusapp_onFocusLost: _I, proteusapp_onHoverEnter: tI, proteusapp_onHoverExit: rI, proteusapp_onKey: nI, proteusapp_onPress: aI, proteusapp_onRelease: oI, proteusapp_onTransitionComplete: cI, proteusapp_pointerLeft: bI, proteusapp_pointerMoved: sI, proteusapp_pointerPressed: iI, proteusapp_pointerReleased: fI, proteusapp_releaseVideo: uI, proteusapp_removeChild: dI, proteusapp_resetKeyMap: gI, proteusapp_setDeclaredGeometry: pI, proteusapp_setDefaultFocus: wI, proteusapp_setDevices: lI, proteusapp_setDisabled: mI, proteusapp_setFocusGroup: hI, proteusapp_setImage: yI, proteusapp_setInputDevices: xI, proteusapp_setInteractive: $I, proteusapp_setKeyRepeat: vI, proteusapp_setLongPressMs: SI, proteusapp_setNavigatingActions: AI, proteusapp_setNeighbour: II, proteusapp_setOpacity: DI, proteusapp_setReadingDirection: TI, proteusapp_setText: FI, proteusapp_setTexture: BI, proteusapp_setTransitionInteraction: PI, proteusapp_setVideoCrossfade: kI, proteusapp_setVisible: MI, proteusapp_showVideo: RI, proteusapp_splitTo: CI, proteusapp_splitToWithBehavior: VI, proteusapp_splitToWithStates: LI, proteusapp_texture: EI, proteusapp_textureState: GI, proteusapp_tick: OI, proteusapp_transitionChannel: WI, proteusapp_unbindKey: zI, proteusapp_uploadVideoFrame: UI, __wbg_handle_free: qI, __wbg_texturehandle_free: HI, __wbg_transitionchannel_free: jI, __wbg_videohandle_free: KI, handle_fromId: NI, handle_id: JI, texturehandle_fromId: QI, texturehandle_id: XI, __abort_handler: YI, __instance_terminated: ZI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: eD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: _D, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: tD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: rD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: nD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: aD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: oD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: cD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: bD, __wbindgen_malloc: sD, __wbindgen_realloc: iD, __wbindgen_exn_store: fD, __externref_table_alloc: uD, __wbindgen_externrefs: dD, __wbindgen_free: gD, __wbindgen_destroy_closure: pD, __externref_table_dealloc: wD, __wbindgen_start: jt } = fA, lD = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: YI,
    __externref_table_alloc: uD,
    __externref_table_dealloc: wD,
    __instance_terminated: ZI,
    __wbg_handle_free: qI,
    __wbg_proteusapp_free: hA,
    __wbg_texturehandle_free: HI,
    __wbg_transitionchannel_free: jI,
    __wbg_videohandle_free: KI,
    __wbindgen_destroy_closure: pD,
    __wbindgen_exn_store: fD,
    __wbindgen_externrefs: dD,
    __wbindgen_free: gD,
    __wbindgen_malloc: sD,
    __wbindgen_realloc: iD,
    __wbindgen_start: jt,
    clear: dA,
    handle_fromId: NI,
    handle_id: JI,
    memory: uA,
    mount: mA,
    on_frame: gA,
    proteusapp_addChild: yA,
    proteusapp_animateTo: xA,
    proteusapp_bakeTexture: $A,
    proteusapp_bakedImageSize: vA,
    proteusapp_bakedTextSize: SA,
    proteusapp_bindKey: AA,
    proteusapp_channelDestroy: IA,
    proteusapp_channelSet: DA,
    proteusapp_clearFocus: TA,
    proteusapp_component: FA,
    proteusapp_copyBakedImageFrom: BA,
    proteusapp_createVideo: PA,
    proteusapp_cropImage: kA,
    proteusapp_declareGeometry: MA,
    proteusapp_declaredGeometry: RA,
    proteusapp_destroy: CA,
    proteusapp_devices: VA,
    proteusapp_focus: LA,
    proteusapp_focused: EA,
    proteusapp_freeResources: GA,
    proteusapp_get: OA,
    proteusapp_hideVideo: WA,
    proteusapp_inputDevices: zA,
    proteusapp_inputMode: UA,
    proteusapp_isFocused: qA,
    proteusapp_loadTexture: HA,
    proteusapp_mergeFrom: jA,
    proteusapp_mergeFromWithBehavior: KA,
    proteusapp_new: NA,
    proteusapp_onAppKey: JA,
    proteusapp_onBlur: QA,
    proteusapp_onClick: XA,
    proteusapp_onDrag: YA,
    proteusapp_onDropped: ZA,
    proteusapp_onFocus: eI,
    proteusapp_onFocusLost: _I,
    proteusapp_onHoverEnter: tI,
    proteusapp_onHoverExit: rI,
    proteusapp_onKey: nI,
    proteusapp_onPress: aI,
    proteusapp_onRelease: oI,
    proteusapp_onTransitionComplete: cI,
    proteusapp_pointerLeft: bI,
    proteusapp_pointerMoved: sI,
    proteusapp_pointerPressed: iI,
    proteusapp_pointerReleased: fI,
    proteusapp_releaseVideo: uI,
    proteusapp_removeChild: dI,
    proteusapp_resetKeyMap: gI,
    proteusapp_setDeclaredGeometry: pI,
    proteusapp_setDefaultFocus: wI,
    proteusapp_setDevices: lI,
    proteusapp_setDisabled: mI,
    proteusapp_setFocusGroup: hI,
    proteusapp_setImage: yI,
    proteusapp_setInputDevices: xI,
    proteusapp_setInteractive: $I,
    proteusapp_setKeyRepeat: vI,
    proteusapp_setLongPressMs: SI,
    proteusapp_setNavigatingActions: AI,
    proteusapp_setNeighbour: II,
    proteusapp_setOpacity: DI,
    proteusapp_setReadingDirection: TI,
    proteusapp_setText: FI,
    proteusapp_setTexture: BI,
    proteusapp_setTransitionInteraction: PI,
    proteusapp_setVideoCrossfade: kI,
    proteusapp_setVisible: MI,
    proteusapp_showVideo: RI,
    proteusapp_splitTo: CI,
    proteusapp_splitToWithBehavior: VI,
    proteusapp_splitToWithStates: LI,
    proteusapp_texture: EI,
    proteusapp_textureState: GI,
    proteusapp_tick: OI,
    proteusapp_transitionChannel: WI,
    proteusapp_unbindKey: zI,
    proteusapp_uploadVideoFrame: UI,
    show: pA,
    start: wA,
    stop_frames: lA,
    texturehandle_fromId: QI,
    texturehandle_id: XI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: bD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: eD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: nD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: aD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: oD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: cD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: tD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: rD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: _D
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  iA(lD);
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
  const mD = `#version 300 es
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
}`, hD = `#version 300 es
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
}`, yD = `#version 300 es
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
    if (_.attachShader(r, t(_.VERTEX_SHADER, e)), _.attachShader(r, t(_.FRAGMENT_SHADER, mD)), _.linkProgram(r), !_.getProgramParameter(r, _.LINK_STATUS)) throw new Error(_.getProgramInfoLog(r) ?? "program failed to link");
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
  function xD(_) {
    return (e, t, r) => {
      const n = Kt(_, hD), a = Nt(_), o = _.createVertexArray();
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
  function $D(_) {
    return (e, t, r) => {
      const n = Kt(_, yD), a = Nt(_), o = _.createVertexArray();
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
  function vD(_) {
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
  function SD(_) {
    return _ < 0.5 ? 2 * _ * _ : 1 - (-2 * _ + 2) ** 2 / 2;
  }
  const AD = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
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
      const t = SD(Math.min(1, (e - this.movedAt) / C_));
      for (let r = 0; r < this.current.length; r++) this.current[r] = this.from[r] + (this.to[r] - this.from[r]) * t;
    }
  }
  function ID(_, e, t) {
    const r = new nt(e), n = document.createDocumentFragment(), a = e.map((o, c) => {
      const b = document.createElement("div"), f = b.style;
      return f.position = "absolute", f.left = "0", f.top = "0", f.width = `${o.width}px`, f.height = `${o.height}px`, f.borderRadius = `${t}px`, f.background = `rgb(${Math.round(o.r * 255)} ${Math.round(o.g * 255)} ${Math.round(o.b * 255)})`, f.transform = It(r.current[c * 2], r.current[c * 2 + 1], o), f.transition = `transform ${C_}ms ${AD}`, n.append(b), b;
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
  const DD = [
    100,
    1e3,
    5e3,
    1e4,
    25e3,
    5e4,
    1e5
  ], TD = 60, FD = 2e3, V_ = 1e5, Dt = 100, at = `proteus-bench:${location.pathname}`, BD = 300, PD = 15e3, o_ = document.getElementById("status"), Qt = document.getElementById("results"), ye = document.getElementById("run"), b_ = document.getElementById("reset"), xe = {
    proteus: document.getElementById("proteus"),
    proteusRust: document.getElementById("proteus-rust"),
    webgl: document.getElementById("webgl"),
    canvas2d: document.getElementById("canvas2d"),
    css: document.getElementById("css")
  }, Xt = new URLSearchParams(location.search), Te = ((_a2 = Xt.get("counts")) == null ? void 0 : _a2.split(",").map(Number).filter((_) => _ > 0)) ?? DD, ot = (((_b2 = Xt.get("scenes")) == null ? void 0 : _b2.split(",")) ?? [
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
  function kD(_) {
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
        if (r += 1, r === 1 && (o = f), !c && (r >= TD || f - o > FD)) {
          c = true, a = f, n = f;
          return;
        }
        c && t.push(f - n), n = f, c && (t.length >= BD || f - a > PD) && (b(), e(kD(t)));
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
  await D4("proteus", {
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
  await C4("proteus-rust", Zt);
  async function MD(_, e) {
    R4(_, e);
    const t = await ke((r) => (M4(r), () => V4()));
    return k4(), t;
  }
  async function RD(_, e) {
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
  async function CD(_) {
    const e = ID(xe.css, rt("moving", _), j.moving.radius), t = await ke(ct((r) => e.frame(r)));
    return e.dispose(), t;
  }
  function Tt(_) {
    for (const [e, t] of Object.entries(xe)) t.style.visibility = e === _ ? "visible" : "hidden";
  }
  const x_ = {
    title: "Proteus (TypeScript)",
    surface: "proteus",
    time: RD
  }, $_ = {
    title: "Proteus (Rust)",
    surface: "proteusRust",
    time: MD
  }, VD = {
    title: "CSS",
    surface: "css",
    time: (_, e) => CD(e)
  }, v_ = {
    title: "Canvas 2D",
    surface: "canvas2d",
    time: (_, e) => bt(vD(_r), _, e)
  }, S_ = {
    title: "Naive WebGL2",
    surface: "webgl",
    time: (_, e) => bt(xD(we), _, e)
  }, A_ = {
    title: "Batched WebGL2",
    surface: "webgl",
    time: (_, e) => bt($D(we), _, e)
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
      VD,
      v_,
      S_,
      A_
    ]
  }, E_ = {
    small: 1 / 0,
    large: V_,
    moving: 1 / 0
  }, LD = {
    small: `Small components (${j.small.min}\u2013${j.small.max} px), still: the cost per component`,
    large: `Large components (${j.large.min}\u2013${j.large.max} px), still: filling pixels dominates`,
    moving: `Moving components (${j.moving.min}\u2013${j.moving.max} px): every one always moving`
  };
  function ED(_) {
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
  function GD() {
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
  const V = GD();
  if (V.running) {
    const [_, e, t] = V.running.split("|");
    V.cells[V.running] = "crashed | \u2014", V.dropped[`${_}|${t}`] = `crashed at ${e}`, V.running = void 0, c_();
  }
  const OD = (_) => `${_.median.toFixed(2)} | ${_.p99.toFixed(2)}`;
  function rr(_) {
    return Te.filter((e) => e <= E_[_]).flatMap((e) => tr[_].map((t) => [
      e,
      t
    ])).filter(([e, t]) => V.cells[`${_}|${e}|${t.title}`] === void 0);
  }
  async function WD() {
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
        V.cells[r] = OD(a), a.median >= Dt && (V.dropped[`${_}|${t.title}`] = `slower than ${Dt} ms a frame at ${e}`);
      } catch (a) {
        console.error(a), V.cells[r] = "failed | \u2014", V.dropped[`${_}|${t.title}`] = `failed at ${e}: ${String(a)}`;
      }
      V.running = void 0, c_(), Qt.textContent = nr();
    }
    o_.textContent = "Done. Copy the results below.", ye.textContent = "Run", ye.disabled = false, b_.disabled = false;
  }
  function nr() {
    const _ = [
      ED(V.refresh ?? 0)
    ];
    for (const e of ot) {
      const t = tr[e].map((a) => a.title), r = Te.filter((a) => a <= E_[e]).map((a) => t.map((o) => V.cells[`${e}|${a}|${o}`])).map((a, o) => ({
        count: Te.filter((c) => c <= E_[e])[o],
        cells: a
      })).filter(({ cells: a }) => a.some((o) => o !== void 0));
      if (r.length === 0) continue;
      _.push("", `### ${LD[e]}`, "", "Frame interval, median and p99, in milliseconds:", "", `| Components | ${t.map((a) => `${a} | p99`).join(" | ")} |`, `|---:|${t.map(() => "---:|---:").join("|")}|`, ...r.map(({ count: a, cells: o }) => `| ${a} | ${o.map((c) => c ?? "\u2026 | \u2026").join(" | ")} |`));
      const n = t.map((a) => [
        a,
        V.dropped[`${e}|${a}`]
      ]).filter(([, a]) => a).map(([a, o]) => `- ${a}: ${o}; skipped after that.`);
      n.length > 0 && _.push("", ...n), e === "large" && Te.some((a) => a > V_) && _.push("", `The large scene stops at ${V_}: past it, Safari's tab crashes.`);
    }
    return _.join(`
`);
  }
  ye.addEventListener("click", () => void WD());
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
