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
  const ar = "" + new URL("proteus_sdk_web_bg-BZ1-Lzx0.wasm", import.meta.url).href, O_ = async (_ = {}, e) => {
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
  function Or(_) {
    return _.finish();
  }
  function Gr(_, e) {
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
  function On(_, e) {
    _.depthClearValue = e;
  }
  function Gn(_, e) {
    _.depthLoadOp = G_[e];
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
    _.loadOp = G_[e];
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
    _.stencilLoadOp = G_[e];
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
  function Oa() {
    const _ = typeof self > "u" ? null : self;
    return z(_) ? 0 : $e(_);
  }
  function Ga() {
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
  ], G_ = [
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
  const go = await O_({
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
      __wbg_call_0e855b388e315e17: Ir,
      __wbg_call_8e98ed2f3c86c4b5: Tr,
      __wbg_set_dc601f4a69da0bc2: En,
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
      __wbg_set_depth_clear_value_442bf492734f63b6: On,
      __wbg_set_depth_load_op_34d430b74bb36d91: Gn,
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
      __wbg_finish_cfaeede3baf55be1: Gr,
      __wbg_finish_087cb89c65c06eb1: Or,
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
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: Oa,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Ea,
      __wbg_static_accessor_WINDOW_168f178805d978fe: Ga,
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
  }, ar), { memory: po, __wbg_proteusapp_free: wo, proteusapp_addChild: lo, proteusapp_animateTo: mo, proteusapp_bakeTexture: ho, proteusapp_bakedImageSize: yo, proteusapp_bakedTextSize: xo, proteusapp_bindKey: $o, proteusapp_channelDestroy: vo, proteusapp_channelSet: So, proteusapp_clearFocus: Ao, proteusapp_component: Io, proteusapp_copyBakedImageFrom: Do, proteusapp_createVideo: To, proteusapp_cropImage: Fo, proteusapp_declareGeometry: Bo, proteusapp_declaredGeometry: Po, proteusapp_destroy: ko, proteusapp_devices: Mo, proteusapp_focus: Ro, proteusapp_focused: Co, proteusapp_freeResources: Vo, proteusapp_get: Lo, proteusapp_hideVideo: Eo, proteusapp_inputDevices: Oo, proteusapp_inputMode: Go, proteusapp_isFocused: Wo, proteusapp_loadTexture: zo, proteusapp_mergeFrom: Uo, proteusapp_mergeFromWithBehavior: qo, proteusapp_new: Ho, proteusapp_onAppKey: jo, proteusapp_onBlur: Ko, proteusapp_onClick: No, proteusapp_onDrag: Jo, proteusapp_onDropped: Qo, proteusapp_onFocus: Xo, proteusapp_onFocusLost: Yo, proteusapp_onHoverEnter: Zo, proteusapp_onHoverExit: ec, proteusapp_onKey: _c, proteusapp_onPress: tc, proteusapp_onRelease: rc, proteusapp_onTransitionComplete: nc, proteusapp_pointerLeft: ac, proteusapp_pointerMoved: oc, proteusapp_pointerPressed: cc, proteusapp_pointerReleased: bc, proteusapp_releaseVideo: sc, proteusapp_removeChild: ic, proteusapp_resetKeyMap: fc, proteusapp_setDeclaredGeometry: uc, proteusapp_setDefaultFocus: dc, proteusapp_setDevices: gc, proteusapp_setDisabled: pc, proteusapp_setImage: wc, proteusapp_setInputDevices: lc, proteusapp_setInteractive: mc, proteusapp_setKeyRepeat: hc, proteusapp_setLongPressMs: yc, proteusapp_setNavigatingActions: xc, proteusapp_setNeighbour: $c, proteusapp_setOpacity: vc, proteusapp_setReadingDirection: Sc, proteusapp_setText: Ac, proteusapp_setTexture: Ic, proteusapp_setTransitionInteraction: Dc, proteusapp_setVideoCrossfade: Tc, proteusapp_setVisible: Fc, proteusapp_showVideo: Bc, proteusapp_splitTo: Pc, proteusapp_splitToWithBehavior: kc, proteusapp_splitToWithStates: Mc, proteusapp_texture: Rc, proteusapp_textureState: Cc, proteusapp_tick: Vc, proteusapp_transitionChannel: Lc, proteusapp_unbindKey: Ec, proteusapp_uploadVideoFrame: Oc, __wbg_handle_free: Gc, __wbg_texturehandle_free: Wc, __wbg_transitionchannel_free: zc, __wbg_videohandle_free: Uc, handle_fromId: qc, handle_id: Hc, texturehandle_fromId: jc, texturehandle_id: Kc, __abort_handler: Nc, __instance_terminated: Jc, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Qc, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Xc, __wbindgen_malloc: Yc, __wbindgen_realloc: Zc, __wbindgen_exn_store: eb, __externref_table_alloc: _b, __wbindgen_externrefs: tb, __wbindgen_destroy_closure: rb, __externref_table_dealloc: nb, __wbindgen_free: ab, __wbindgen_start: Ct } = go, ob = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: Nc,
    __externref_table_alloc: _b,
    __externref_table_dealloc: nb,
    __instance_terminated: Jc,
    __wbg_handle_free: Gc,
    __wbg_proteusapp_free: wo,
    __wbg_texturehandle_free: Wc,
    __wbg_transitionchannel_free: zc,
    __wbg_videohandle_free: Uc,
    __wbindgen_destroy_closure: rb,
    __wbindgen_exn_store: eb,
    __wbindgen_externrefs: tb,
    __wbindgen_free: ab,
    __wbindgen_malloc: Yc,
    __wbindgen_realloc: Zc,
    __wbindgen_start: Ct,
    handle_fromId: qc,
    handle_id: Hc,
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
    proteusapp_inputDevices: Oo,
    proteusapp_inputMode: Go,
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
    proteusapp_setImage: wc,
    proteusapp_setInputDevices: lc,
    proteusapp_setInteractive: mc,
    proteusapp_setKeyRepeat: hc,
    proteusapp_setLongPressMs: yc,
    proteusapp_setNavigatingActions: xc,
    proteusapp_setNeighbour: $c,
    proteusapp_setOpacity: vc,
    proteusapp_setReadingDirection: Sc,
    proteusapp_setText: Ac,
    proteusapp_setTexture: Ic,
    proteusapp_setTransitionInteraction: Dc,
    proteusapp_setVideoCrossfade: Tc,
    proteusapp_setVisible: Fc,
    proteusapp_showVideo: Bc,
    proteusapp_splitTo: Pc,
    proteusapp_splitToWithBehavior: kc,
    proteusapp_splitToWithStates: Mc,
    proteusapp_texture: Rc,
    proteusapp_textureState: Cc,
    proteusapp_tick: Vc,
    proteusapp_transitionChannel: Lc,
    proteusapp_unbindKey: Ec,
    proteusapp_uploadVideoFrame: Oc,
    texturehandle_fromId: jc,
    texturehandle_id: Kc,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Xc,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Qc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  uo(ob);
  Ct();
  const cb = "" + new URL("proteus_host_web_bg-BR5zQP0s.wasm", import.meta.url).href;
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
      const t = yl(e, i.__wbindgen_malloc), r = R;
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
  function bb(_, e, t, r) {
    const n = W(_, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    return i.mount(n, a, e, $(t) ? 0 : B(t), r);
  }
  function sb(_, e) {
    return Error(A(_, e));
  }
  function ib(_) {
    return Number(_);
  }
  function fb(_, e) {
    const t = String(e), r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function ub(_) {
    return _.Window;
  }
  function db(_) {
    return _.WorkerGlobalScope;
  }
  function gb(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    C().setBigInt64(_ + 8, $(r) ? BigInt(0) : r, true), C().setInt32(_ + 0, !$(r), true);
  }
  function pb(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return $(t) ? 16777215 : t ? 1 : 0;
  }
  function wb(_, e) {
    const t = M_(e), r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function lb(_, e) {
    return _ in e;
  }
  function mb(_) {
    return typeof _ == "bigint";
  }
  function hb(_) {
    return typeof _ == "function";
  }
  function yb(_) {
    return _ === null;
  }
  function xb(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function $b(_) {
    return typeof _ == "string";
  }
  function vb(_) {
    return _ === void 0;
  }
  function Sb(_, e) {
    return _ === e;
  }
  function Ab(_, e) {
    return _ == e;
  }
  function Ib(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    C().setFloat64(_ + 8, $(r) ? 0 : r, true), C().setInt32(_ + 0, !$(r), true);
  }
  function Db(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Tb(_, e) {
    throw new Error(A(_, e));
  }
  function Fb(_) {
    _._wbg_cb_unref();
  }
  function Bb(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Pb(_, e) {
    _.activeTexture(e >>> 0);
  }
  function kb() {
    return m(function(_, e, t, r) {
      _.addEventListener(A(e, t), r);
    }, arguments);
  }
  function Mb(_) {
    return _.altKey;
  }
  function Rb(_, e, t) {
    _.attachShader(e, t);
  }
  function Cb(_, e, t) {
    _.attachShader(e, t);
  }
  function Vb(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function Lb() {
    return m(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Eb(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, A(r, n));
  }
  function Ob(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, A(r, n));
  }
  function Gb(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function Wb(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function zb(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function Ub(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function qb(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function Hb(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function jb(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Kb(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function Nb(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Jb(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Qb(_, e) {
    _.bindVertexArrayOES(e);
  }
  function Xb(_, e) {
    _.bindVertexArray(e);
  }
  function Yb(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Zb(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function es(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function _s(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function ts(_, e) {
    _.blendEquation(e >>> 0);
  }
  function rs(_, e) {
    _.blendEquation(e >>> 0);
  }
  function ns(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function as(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function os(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function cs(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function bs(_, e, t, r, n, a, o, c, b, f, d) {
    _.blitFramebuffer(e, t, r, n, a, o, c, b, f >>> 0, d >>> 0);
  }
  function ss(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
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
    _.bufferSubData(e >>> 0, t, r);
  }
  function gs(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function ps(_) {
    return _.button;
  }
  function ws() {
    return m(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function ls() {
    return m(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function ms() {
    return m(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function hs(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, E(r, n));
  }
  function ys(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, Y(r, n));
  }
  function xs(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, ve(r, n));
  }
  function $s(_, e) {
    _.clearDepth(e);
  }
  function vs(_, e) {
    _.clearDepth(e);
  }
  function Ss(_, e) {
    _.clearStencil(e);
  }
  function As(_, e) {
    _.clearStencil(e);
  }
  function Is(_, e) {
    _.clear(e >>> 0);
  }
  function Ds(_, e) {
    _.clear(e >>> 0);
  }
  function Ts(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function Fs(_, e) {
    const t = e.code, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Bs(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Ps(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function ks(_, e) {
    _.compileShader(e);
  }
  function Ms(_, e) {
    _.compileShader(e);
  }
  function Rs(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function Cs(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function Vs(_, e, t, r, n, a, o, c, b, f) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b, f);
  }
  function Ls(_, e, t, r, n, a, o, c, b, f, d, I) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d, I);
  }
  function Es(_, e, t, r, n, a, o, c, b, f, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d);
  }
  function Os() {
    return m(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function Gs(_) {
    return _.contentRect;
  }
  function Ws(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function zs(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function Us(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function qs(_, e, t, r, n, a, o, c, b, f) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f);
  }
  function Hs() {
    return m(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function js() {
    return m(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function Ks(_, e) {
    return _.createBindGroup(e);
  }
  function Ns(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : B(e);
  }
  function Js() {
    return m(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function Qs(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : B(e);
  }
  function Xs(_, e) {
    return _.createCommandEncoder(e);
  }
  function Ys(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : B(e);
  }
  function Zs(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : B(e);
  }
  function ei(_, e) {
    return _.createPipelineLayout(e);
  }
  function _i(_) {
    const e = _.createProgram();
    return $(e) ? 0 : B(e);
  }
  function ti(_) {
    const e = _.createProgram();
    return $(e) ? 0 : B(e);
  }
  function ri(_) {
    const e = _.createQuery();
    return $(e) ? 0 : B(e);
  }
  function ni() {
    return m(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function ai(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : B(e);
  }
  function oi(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : B(e);
  }
  function ci(_, e) {
    return _.createSampler(e);
  }
  function bi(_) {
    const e = _.createSampler();
    return $(e) ? 0 : B(e);
  }
  function si(_, e) {
    return _.createShaderModule(e);
  }
  function ii(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : B(t);
  }
  function fi(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : B(t);
  }
  function ui(_) {
    const e = _.createTexture();
    return $(e) ? 0 : B(e);
  }
  function di(_) {
    const e = _.createTexture();
    return $(e) ? 0 : B(e);
  }
  function gi() {
    return m(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function pi(_) {
    const e = _.createVertexArrayOES();
    return $(e) ? 0 : B(e);
  }
  function wi(_) {
    const e = _.createVertexArray();
    return $(e) ? 0 : B(e);
  }
  function li() {
    return m(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function mi(_) {
    return _.ctrlKey;
  }
  function hi(_, e) {
    _.cullFace(e >>> 0);
  }
  function yi(_, e) {
    _.cullFace(e >>> 0);
  }
  function xi(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function $i(_, e) {
    _.deleteBuffer(e);
  }
  function vi(_, e) {
    _.deleteBuffer(e);
  }
  function Si(_, e) {
    _.deleteFramebuffer(e);
  }
  function Ai(_, e) {
    _.deleteFramebuffer(e);
  }
  function Ii(_, e) {
    _.deleteProgram(e);
  }
  function Di(_, e) {
    _.deleteProgram(e);
  }
  function Ti(_, e) {
    _.deleteQuery(e);
  }
  function Fi(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Bi(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Pi(_, e) {
    _.deleteSampler(e);
  }
  function ki(_, e) {
    _.deleteShader(e);
  }
  function Mi(_, e) {
    _.deleteShader(e);
  }
  function Ri(_, e) {
    _.deleteSync(e);
  }
  function Ci(_, e) {
    _.deleteTexture(e);
  }
  function Vi(_, e) {
    _.deleteTexture(e);
  }
  function Li(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function Ei(_, e) {
    _.deleteVertexArray(e);
  }
  function Oi(_, e) {
    _.depthFunc(e >>> 0);
  }
  function Gi(_, e) {
    _.depthFunc(e >>> 0);
  }
  function Wi(_, e) {
    _.depthMask(e !== 0);
  }
  function zi(_, e) {
    _.depthMask(e !== 0);
  }
  function Ui(_, e, t) {
    _.depthRange(e, t);
  }
  function qi(_, e, t) {
    _.depthRange(e, t);
  }
  function Hi(_, e) {
    const t = e.description, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function ji(_) {
    _.destroy();
  }
  function Ki(_) {
    return _.devicePixelRatio;
  }
  function Ni(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function Ji(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function Qi(_, e) {
    _.disable(e >>> 0);
  }
  function Xi(_, e) {
    _.disable(e >>> 0);
  }
  function Yi(_) {
    const e = _.document;
    return $(e) ? 0 : B(e);
  }
  function Zi(_) {
    return _.done;
  }
  function ef(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function _f(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function tf(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function rf(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function nf(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function af(_, e) {
    _.drawBuffers(e);
  }
  function of(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function cf(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function bf(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function sf(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function ff(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function uf(_, e) {
    _.enable(e >>> 0);
  }
  function df(_, e) {
    _.enable(e >>> 0);
  }
  function gf(_, e) {
    _.endQuery(e >>> 0);
  }
  function pf(_) {
    _.end();
  }
  function wf(_) {
    return Object.entries(_);
  }
  function lf(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function mf(_) {
    console.error(_);
  }
  function hf(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(A(_, e));
    } finally {
      i.__wbindgen_free(t, r, 1);
    }
  }
  function yf(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return $(r) ? 0 : B(r);
  }
  function xf(_) {
    return _.finish();
  }
  function $f(_, e) {
    return _.finish(e);
  }
  function vf(_) {
    _.flush();
  }
  function Sf(_) {
    _.flush();
  }
  function Af() {
    return m(function(_) {
      _.focus();
    }, arguments);
  }
  function If(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function Df(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function Tf(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function Ff(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function Bf(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function Pf(_, e, t, r, n, a, o) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, o);
  }
  function kf(_, e) {
    _.frontFace(e >>> 0);
  }
  function Mf(_, e) {
    _.frontFace(e >>> 0);
  }
  function Rf(_) {
    return _.getBoundingClientRect();
  }
  function Cf(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function Vf() {
    return m(function(_, e, t, r) {
      const n = _.getContext(A(e, t), r);
      return $(n) ? 0 : B(n);
    }, arguments);
  }
  function Lf() {
    return m(function(_, e, t) {
      const r = _.getContext(A(e, t));
      return $(r) ? 0 : B(r);
    }, arguments);
  }
  function Ef() {
    return m(function(_, e, t) {
      const r = _.getContext(A(e, t));
      return $(r) ? 0 : B(r);
    }, arguments);
  }
  function Of() {
    return m(function(_, e, t, r) {
      const n = _.getContext(A(e, t), r);
      return $(n) ? 0 : B(n);
    }, arguments);
  }
  function Gf() {
    return m(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function Wf(_, e, t) {
    const r = _.getElementById(A(e, t));
    return $(r) ? 0 : B(r);
  }
  function zf() {
    return m(function(_, e, t) {
      const r = _.getExtension(A(e, t));
      return $(r) ? 0 : B(r);
    }, arguments);
  }
  function Uf() {
    return m(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function qf() {
    return m(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function Hf() {
    return m(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function jf() {
    return m(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function Kf(_) {
    const e = _.getPreferredCanvasFormat();
    return (ce.indexOf(e) + 1 || 96) - 1;
  }
  function Nf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Jf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Qf(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function Xf(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function Yf(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function Zf(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function eu(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function _u(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function tu(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function ru(_) {
    const e = _.getSupportedExtensions();
    return $(e) ? 0 : B(e);
  }
  function nu(_) {
    const e = _.getSupportedProfiles();
    return $(e) ? 0 : B(e);
  }
  function au(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function ou(_, e, t, r) {
    return _.getUniformBlockIndex(e, A(t, r));
  }
  function cu(_, e, t, r) {
    const n = _.getUniformLocation(e, A(t, r));
    return $(n) ? 0 : B(n);
  }
  function bu(_, e, t, r) {
    const n = _.getUniformLocation(e, A(t, r));
    return $(n) ? 0 : B(n);
  }
  function su(_, e) {
    return _[e >>> 0];
  }
  function iu(_, e) {
    const t = _[e >>> 0];
    return $(t) ? 0 : B(t);
  }
  function fu() {
    return m(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function uu(_, e) {
    return _[e >>> 0];
  }
  function du(_, e) {
    return _[e];
  }
  function gu(_) {
    return _.gpu;
  }
  function pu(_, e, t) {
    return _.hasAttribute(A(e, t));
  }
  function wu(_) {
    return _.height;
  }
  function lu(_) {
    return _.height;
  }
  function mu(_) {
    return _.hidden;
  }
  function hu(_, e, t) {
    return _.includes(e, t);
  }
  function yu(_) {
    return _.info;
  }
  function xu(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function $u(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function vu(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function Su(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Au(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function Iu(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function Du(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function Tu(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function Fu(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Bu(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function Pu() {
    return m(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function ku(_) {
    return Array.isArray(_);
  }
  function Mu(_) {
    return _.isComposing;
  }
  function Ru(_) {
    return Number.isSafeInteger(_);
  }
  function Cu(_, e) {
    return Object.is(_, e);
  }
  function Vu() {
    return Symbol.iterator;
  }
  function Lu(_, e) {
    const t = e.key, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Eu(_, e) {
    const t = e.label, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Ou(_) {
    return _.length;
  }
  function Gu(_) {
    return _.length;
  }
  function Wu(_) {
    return _.limits;
  }
  function zu(_) {
    return _.limits;
  }
  function Uu(_, e) {
    _.linkProgram(e);
  }
  function qu(_, e) {
    _.linkProgram(e);
  }
  function Hu(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function ju(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function Ku(_) {
    return _.maxBindGroups;
  }
  function Nu(_) {
    return _.maxBindingsPerBindGroup;
  }
  function Ju(_) {
    return _.maxBufferSize;
  }
  function Qu(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function Xu(_) {
    return _.maxColorAttachments;
  }
  function Yu(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function Zu(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function ed(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function _d(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function td(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function rd(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function nd(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function ad(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function od(_) {
    return _.maxInterStageShaderVariables;
  }
  function cd(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function bd(_) {
    return _.maxSamplersPerShaderStage;
  }
  function sd(_) {
    return _.maxStorageBufferBindingSize;
  }
  function id(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function fd(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function ud(_) {
    return _.maxTextureArrayLayers;
  }
  function dd(_) {
    return _.maxTextureDimension1D;
  }
  function gd(_) {
    return _.maxTextureDimension2D;
  }
  function pd(_) {
    return _.maxTextureDimension3D;
  }
  function wd(_) {
    return _.maxUniformBufferBindingSize;
  }
  function ld(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function md(_) {
    return _.maxVertexAttributes;
  }
  function hd(_) {
    return _.maxVertexBufferArrayStride;
  }
  function yd(_) {
    return _.maxVertexBuffers;
  }
  function xd(_) {
    return _.metaKey;
  }
  function $d(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function vd(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function Sd(_) {
    return _.navigator;
  }
  function Ad(_) {
    return _.navigator;
  }
  function Id() {
    return m(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function Dd() {
    return new Error();
  }
  function Td() {
    return new Object();
  }
  function Fd() {
    return new Array();
  }
  function Bd(_) {
    return new Uint8Array(_);
  }
  function Pd(_, e) {
    return new Error(A(_, e));
  }
  function kd(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, o) => {
        const c = t.a;
        t.a = 0;
        try {
          return N2(c, t.b, a, o);
        } finally {
          t.a = c;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function Md(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function Rd() {
    return m(function(_) {
      return _.next();
    }, arguments);
  }
  function Cd(_) {
    return _.next;
  }
  function Vd(_, e) {
    _.observe(e);
  }
  function Ld(_) {
    return Array.of(_);
  }
  function Ed(_) {
    return _.offsetX;
  }
  function Od(_) {
    return _.offsetY;
  }
  function Gd(_) {
    return _.onSubmittedWorkDone();
  }
  function Wd(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function zd(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function Ud(_, e, t) {
    _.polygonOffset(e, t);
  }
  function qd(_, e, t) {
    _.polygonOffset(e, t);
  }
  function Hd(_) {
    _.preventDefault();
  }
  function jd(_) {
    return P_.__wrap(_);
  }
  function Kd(_, e, t) {
    Uint8Array.prototype.set.call(s_(_, e), t);
  }
  function Nd(_, e) {
    return _.push(e);
  }
  function Jd(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function Qd() {
    return m(function(_, e, t) {
      return _.querySelectorAll(A(e, t));
    }, arguments);
  }
  function Xd() {
    return m(function(_, e, t) {
      const r = _.querySelector(A(e, t));
      return $(r) ? 0 : B(r);
    }, arguments);
  }
  function Yd(_) {
    return _.queueMicrotask;
  }
  function Zd(_) {
    queueMicrotask(_);
  }
  function eg(_) {
    return _.queue;
  }
  function _g(_, e) {
    _.readBuffer(e >>> 0);
  }
  function tg() {
    return m(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function rg() {
    return m(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function ng() {
    return m(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function ag(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function og(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function cg(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function bg(_) {
    return _.repeat;
  }
  function sg(_, e) {
    return _.requestAdapter(e);
  }
  function ig(_) {
    return _.requestAdapter();
  }
  function fg() {
    return m(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function ug(_, e) {
    return _.requestDevice(e);
  }
  function dg(_) {
    return Promise.resolve(_);
  }
  function gg(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function pg(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function wg(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function lg(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function mg() {
    return m(function(_, e, t, r, n) {
      _.setAttribute(A(e, t), A(r, n));
    }, arguments);
  }
  function hg() {
    return m(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, ve(r, n), a, o >>> 0);
    }, arguments);
  }
  function yg(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function xg(_, e, t, r, n) {
    _.setIndexBuffer(e, H_[t], r, n);
  }
  function $g(_, e, t, r) {
    _.setIndexBuffer(e, H_[t], r);
  }
  function vg(_, e) {
    _.setPipeline(e);
  }
  function Sg(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function Ag(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function Ig(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
  }
  function Dg(_, e, t) {
    _.set(e, t >>> 0);
  }
  function Tg() {
    return m(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function Fg(_, e, t) {
    _[e] = t;
  }
  function Bg(_, e) {
    _.a = e;
  }
  function Pg(_, e) {
    _.access = al[e];
  }
  function kg(_, e) {
    _.addressModeU = U_[e];
  }
  function Mg(_, e) {
    _.addressModeV = U_[e];
  }
  function Rg(_, e) {
    _.addressModeW = U_[e];
  }
  function Cg(_, e) {
    _.alpha = e;
  }
  function Vg(_, e) {
    _.alphaMode = Y2[e];
  }
  function Lg(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function Eg(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function Og(_, e) {
    _.arrayStride = e;
  }
  function Gg(_, e) {
    _.aspect = Wt[e];
  }
  function Wg(_, e) {
    _.aspect = Wt[e];
  }
  function zg(_, e) {
    _.attributes = e;
  }
  function Ug(_, e) {
    _.b = e;
  }
  function qg(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function Hg(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function jg(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function Kg(_, e) {
    _.bindGroupLayouts = e;
  }
  function Ng(_, e) {
    _.binding = e >>> 0;
  }
  function Jg(_, e) {
    _.binding = e >>> 0;
  }
  function Qg(_, e) {
    _.blend = e;
  }
  function Xg(_, e) {
    _.buffer = e;
  }
  function Yg(_, e) {
    _.buffer = e;
  }
  function Zg(_, e) {
    _.buffers = e;
  }
  function e0(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function _0(_, e) {
    _.clearValue = e;
  }
  function t0(_, e, t) {
    _.code = A(e, t);
  }
  function r0(_, e) {
    _.colorAttachments = e;
  }
  function n0(_, e) {
    _.color = e;
  }
  function a0(_, e) {
    _.compare = q_[e];
  }
  function o0(_, e) {
    _.compare = q_[e];
  }
  function c0(_, e) {
    _.count = e >>> 0;
  }
  function b0(_, e) {
    _.cullMode = Z2[e];
  }
  function s0(_, e, t) {
    _[e >>> 0] = t;
  }
  function i0(_, e) {
    _.depthBias = e;
  }
  function f0(_, e) {
    _.depthBiasClamp = e;
  }
  function u0(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function d0(_, e) {
    _.depthClearValue = e;
  }
  function g0(_, e) {
    _.depthCompare = q_[e];
  }
  function p0(_, e) {
    _.depthFailOp = K_[e];
  }
  function w0(_, e) {
    _.depthLoadOp = j_[e];
  }
  function l0(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function m0(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function h0(_, e) {
    _.depthStencil = e;
  }
  function y0(_, e) {
    _.depthStencilAttachment = e;
  }
  function x0(_, e) {
    _.depthStoreOp = N_[e];
  }
  function $0(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function v0(_, e) {
    _.device = e;
  }
  function S0(_, e) {
    _.dimension = J_[e];
  }
  function A0(_, e) {
    _.dimension = ol[e];
  }
  function I0(_, e) {
    _.dstFactor = Ot[e];
  }
  function D0(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function T0(_, e) {
    _.entries = e;
  }
  function F0(_, e) {
    _.entries = e;
  }
  function B0(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function P0(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function k0(_, e) {
    _.externalTexture = e;
  }
  function M0(_, e) {
    _.failOp = K_[e];
  }
  function R0(_, e) {
    _.format = ce[e];
  }
  function C0(_, e) {
    _.format = bl[e];
  }
  function V0(_, e) {
    _.format = ce[e];
  }
  function L0(_, e) {
    _.format = ce[e];
  }
  function E0(_, e) {
    _.format = ce[e];
  }
  function O0(_, e) {
    _.format = ce[e];
  }
  function G0(_, e) {
    _.format = ce[e];
  }
  function W0(_, e) {
    _.fragment = e;
  }
  function z0(_, e) {
    _.frontFace = el[e];
  }
  function U0(_, e) {
    _.g = e;
  }
  function q0(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function H0(_, e) {
    _.height = e >>> 0;
  }
  function j0(_, e) {
    _.height = e >>> 0;
  }
  function K0(_, e) {
    _.height = e >>> 0;
  }
  function N0(_, e, t) {
    _.label = A(e, t);
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
  function cp(_, e) {
    _.layout = e;
  }
  function bp(_, e) {
    _.layout = e;
  }
  function sp(_, e) {
    _.loadOp = j_[e];
  }
  function ip(_, e) {
    _.lodMaxClamp = e;
  }
  function fp(_, e) {
    _.lodMinClamp = e;
  }
  function up(_, e) {
    _.magFilter = Gt[e];
  }
  function dp(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function gp(_, e) {
    _.mask = e >>> 0;
  }
  function pp(_, e) {
    _.maxAnisotropy = e;
  }
  function wp(_, e) {
    _.minBindingSize = e;
  }
  function lp(_, e) {
    _.minFilter = Gt[e];
  }
  function mp(_, e) {
    _.mipLevel = e >>> 0;
  }
  function hp(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function yp(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function xp(_, e) {
    _.mipmapFilter = _l[e];
  }
  function $p(_, e) {
    _.module = e;
  }
  function vp(_, e) {
    _.module = e;
  }
  function Sp(_, e) {
    _.multisample = e;
  }
  function Ap(_, e) {
    _.multisampled = e !== 0;
  }
  function Ip(_, e) {
    _.offset = e;
  }
  function Dp(_, e) {
    _.offset = e;
  }
  function Tp(_, e) {
    _.offset = e;
  }
  function Fp(_, e) {
    _.operation = Q2[e];
  }
  function Bp(_, e) {
    _.origin = e;
  }
  function Pp(_, e) {
    _.passOp = K_[e];
  }
  function kp(_, e) {
    _.powerPreference = tl[e];
  }
  function Mp(_, e) {
    _.primitive = e;
  }
  function Rp(_, e) {
    _.querySet = e;
  }
  function Cp(_, e) {
    _.r = e;
  }
  function Vp(_, e) {
    _.requiredFeatures = e;
  }
  function Lp(_, e) {
    _.requiredLimits = e;
  }
  function Ep(_, e) {
    _.resolveTarget = e;
  }
  function Op(_, e) {
    _.resource = e;
  }
  function Gp(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function Wp(_, e) {
    _.sampleCount = e >>> 0;
  }
  function zp(_, e) {
    _.sampleType = cl[e];
  }
  function Up(_, e) {
    _.sampler = e;
  }
  function qp(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function Hp(_, e) {
    _.size = e;
  }
  function jp(_, e) {
    _.size = e;
  }
  function Kp(_, e) {
    _.size = e;
  }
  function Np(_, e) {
    _.srcFactor = Ot[e];
  }
  function Jp(_, e) {
    _.stencilBack = e;
  }
  function Qp(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function Xp(_, e) {
    _.stencilFront = e;
  }
  function Yp(_, e) {
    _.stencilLoadOp = j_[e];
  }
  function Zp(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function ew(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function _w(_, e) {
    _.stencilStoreOp = N_[e];
  }
  function tw(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function rw(_, e) {
    _.stepMode = sl[e];
  }
  function nw(_, e) {
    _.storageTexture = e;
  }
  function aw(_, e) {
    _.storeOp = N_[e];
  }
  function ow(_, e) {
    _.stripIndexFormat = H_[e];
  }
  function cw(_, e) {
    _.targets = e;
  }
  function bw(_, e) {
    _.texture = e;
  }
  function sw(_, e) {
    _.texture = e;
  }
  function iw(_, e) {
    _.timestampWrites = e;
  }
  function fw(_, e) {
    _.topology = rl[e];
  }
  function uw(_, e) {
    _.type = X2[e];
  }
  function dw(_, e) {
    _.type = nl[e];
  }
  function gw(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function pw(_, e) {
    _.usage = e >>> 0;
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
    _.vertex = e;
  }
  function yw(_, e) {
    _.view = e;
  }
  function xw(_, e) {
    _.view = e;
  }
  function $w(_, e) {
    _.viewDimension = J_[e];
  }
  function vw(_, e) {
    _.viewDimension = J_[e];
  }
  function Sw(_, e) {
    _.viewFormats = e;
  }
  function Aw(_, e) {
    _.viewFormats = e;
  }
  function Iw(_, e) {
    _.visibility = e >>> 0;
  }
  function Dw(_, e) {
    _.width = e >>> 0;
  }
  function Tw(_, e) {
    _.width = e >>> 0;
  }
  function Fw(_, e) {
    _.width = e >>> 0;
  }
  function Bw(_, e) {
    _.writeMask = e >>> 0;
  }
  function Pw(_, e) {
    _.x = e >>> 0;
  }
  function kw(_, e) {
    _.y = e >>> 0;
  }
  function Mw(_, e) {
    _.z = e >>> 0;
  }
  function Rw(_, e, t, r) {
    _.shaderSource(e, A(t, r));
  }
  function Cw(_, e, t, r) {
    _.shaderSource(e, A(t, r));
  }
  function Vw(_) {
    return _.shiftKey;
  }
  function Lw(_, e) {
    const t = e.stack, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Ew() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return $(_) ? 0 : B(_);
  }
  function Ow() {
    const _ = typeof global > "u" ? null : global;
    return $(_) ? 0 : B(_);
  }
  function Gw() {
    const _ = typeof self > "u" ? null : self;
    return $(_) ? 0 : B(_);
  }
  function Ww() {
    const _ = typeof window > "u" ? null : window;
    return $(_) ? 0 : B(_);
  }
  function zw(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function Uw(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function qw(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function Hw(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function jw(_, e) {
    _.stencilMask(e >>> 0);
  }
  function Kw(_, e) {
    _.stencilMask(e >>> 0);
  }
  function Nw(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Jw(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Qw(_, e) {
    _.submit(e);
  }
  function Xw() {
    return m(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Yw() {
    return m(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Zw() {
    return m(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function e1() {
    return m(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function _1() {
    return m(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function t1(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function r1(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function n1(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function a1(_, e, t, r, n, a, o) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, o);
  }
  function o1() {
    return m(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function c1() {
    return m(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function b1() {
    return m(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function s1() {
    return m(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function i1() {
    return m(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function f1() {
    return m(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function u1() {
    return m(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function d1() {
    return m(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function g1() {
    return m(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function p1() {
    return m(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function w1() {
    return m(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function l1() {
    return m(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function m1() {
    return m(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function h1() {
    return m(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function y1() {
    return m(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function x1(_, e, t) {
    return _.then(e, t);
  }
  function $1(_, e, t) {
    return _.then(e, t);
  }
  function v1(_, e) {
    return _.then(e);
  }
  function S1(_, e, t) {
    _.uniform1f(e, t);
  }
  function A1(_, e, t) {
    _.uniform1f(e, t);
  }
  function I1(_, e, t) {
    _.uniform1i(e, t);
  }
  function D1(_, e, t) {
    _.uniform1i(e, t);
  }
  function T1(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function F1(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function B1(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function P1(_, e, t, r) {
    _.uniform2iv(e, Y(t, r));
  }
  function k1(_, e, t, r) {
    _.uniform2iv(e, Y(t, r));
  }
  function M1(_, e, t, r) {
    _.uniform2uiv(e, ve(t, r));
  }
  function R1(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function C1(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function V1(_, e, t, r) {
    _.uniform3iv(e, Y(t, r));
  }
  function L1(_, e, t, r) {
    _.uniform3iv(e, Y(t, r));
  }
  function E1(_, e, t, r) {
    _.uniform3uiv(e, ve(t, r));
  }
  function O1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function G1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function W1(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function z1(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function U1(_, e, t, r) {
    _.uniform4iv(e, Y(t, r));
  }
  function q1(_, e, t, r) {
    _.uniform4iv(e, Y(t, r));
  }
  function H1(_, e, t, r) {
    _.uniform4uiv(e, ve(t, r));
  }
  function j1(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function K1(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function N1(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function J1(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, E(r, n));
  }
  function Q1(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, E(r, n));
  }
  function X1(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function Y1(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function Z1(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, E(r, n));
  }
  function e2(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, E(r, n));
  }
  function _2(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function t2(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function r2(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, E(r, n));
  }
  function n2(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, E(r, n));
  }
  function a2(_) {
    _.unmap();
  }
  function o2(_, e) {
    _.useProgram(e);
  }
  function c2(_, e) {
    _.useProgram(e);
  }
  function b2(_) {
    return _.value;
  }
  function s2(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function i2(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function f2(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function u2(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function d2(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function g2(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function p2(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function w2(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function l2(_) {
    return _.width;
  }
  function m2(_) {
    return _.width;
  }
  function h2() {
    return m(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, s_(r, n), a, o);
    }, arguments);
  }
  function y2() {
    return m(function(_, e, t, r, n, a) {
      _.writeTexture(e, s_(t, r), n, a);
    }, arguments);
  }
  function x2(_, e) {
    return Z(_, e, z2);
  }
  function $2(_, e) {
    return Z(_, e, K2);
  }
  function v2(_, e) {
    return Z(_, e, J2);
  }
  function S2(_, e) {
    return Z(_, e, U2);
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
    return Z(_, e, W2);
  }
  function F2(_) {
    return _;
  }
  function B2(_) {
    return _;
  }
  function P2(_, e) {
    return E(_, e);
  }
  function k2(_, e) {
    return il(_, e);
  }
  function M2(_, e) {
    return Y(_, e);
  }
  function R2(_, e) {
    return fl(_, e);
  }
  function C2(_, e) {
    return ul(_, e);
  }
  function V2(_, e) {
    return ve(_, e);
  }
  function L2(_, e) {
    return s_(_, e);
  }
  function E2(_, e) {
    return A(_, e);
  }
  function O2(_) {
    return BigInt.asUintN(64, _);
  }
  function G2() {
    const _ = i.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function W2(_, e) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function z2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function U2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function q2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function H2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function j2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6(_, e, t);
  }
  function K2(_, e, t) {
    const r = i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (r[1]) throw T(r[0]);
  }
  function N2(_, e, t, r) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, r);
  }
  function J2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_(_, e, t);
  }
  const U_ = [
    "clamp-to-edge",
    "repeat",
    "mirror-repeat"
  ], Ot = [
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
  ], Q2 = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], X2 = [
    "uniform",
    "storage",
    "read-only-storage"
  ], Y2 = [
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
  ], Z2 = [
    "none",
    "front",
    "back"
  ], Gt = [
    "nearest",
    "linear"
  ], el = [
    "ccw",
    "cw"
  ], H_ = [
    "uint16",
    "uint32"
  ], j_ = [
    "load",
    "clear"
  ], _l = [
    "nearest",
    "linear"
  ], tl = [
    "low-power",
    "high-performance"
  ], rl = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], nl = [
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
  ], al = [
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
  ], ol = [
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
  ], cl = [
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
  ], bl = [
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
  ], sl = [
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
    return _ = _ >>> 0, dl().subarray(_ / 4, _ / 4 + e);
  }
  function il(_, e) {
    return _ = _ >>> 0, pl().subarray(_ / 2, _ / 2 + e);
  }
  function Y(_, e) {
    return _ = _ >>> 0, wl().subarray(_ / 4, _ / 4 + e);
  }
  function fl(_, e) {
    return _ = _ >>> 0, ll().subarray(_ / 1, _ / 1 + e);
  }
  function ul(_, e) {
    return _ = _ >>> 0, ml().subarray(_ / 2, _ / 2 + e);
  }
  function ve(_, e) {
    return _ = _ >>> 0, hl().subarray(_ / 4, _ / 4 + e);
  }
  function s_(_, e) {
    return _ = _ >>> 0, me().subarray(_ / 1, _ / 1 + e);
  }
  let ie = null;
  function C() {
    return (ie === null || ie.buffer.detached === true || ie.buffer.detached === void 0 && ie.buffer !== i.memory.buffer) && (ie = new DataView(i.memory.buffer)), ie;
  }
  let Ee = null;
  function dl() {
    return (Ee === null || Ee.byteLength === 0) && (Ee = new Float32Array(i.memory.buffer)), Ee;
  }
  let Oe = null;
  function gl() {
    return (Oe === null || Oe.byteLength === 0) && (Oe = new Float64Array(i.memory.buffer)), Oe;
  }
  let Ge = null;
  function pl() {
    return (Ge === null || Ge.byteLength === 0) && (Ge = new Int16Array(i.memory.buffer)), Ge;
  }
  let We = null;
  function wl() {
    return (We === null || We.byteLength === 0) && (We = new Int32Array(i.memory.buffer)), We;
  }
  let ze = null;
  function ll() {
    return (ze === null || ze.byteLength === 0) && (ze = new Int8Array(i.memory.buffer)), ze;
  }
  function A(_, e) {
    return $l(_ >>> 0, e);
  }
  let Ue = null;
  function ml() {
    return (Ue === null || Ue.byteLength === 0) && (Ue = new Uint16Array(i.memory.buffer)), Ue;
  }
  let qe = null;
  function hl() {
    return (qe === null || qe.byteLength === 0) && (qe = new Uint32Array(i.memory.buffer)), qe;
  }
  let He = null;
  function me() {
    return (He === null || He.byteLength === 0) && (He = new Uint8Array(i.memory.buffer)), He;
  }
  function m(_, e) {
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
    return gl().set(_, t / 8), R = _.length, t;
  }
  function yl(_, e) {
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
  const xl = 2146435072;
  let w_ = 0;
  function $l(_, e) {
    return w_ += e, w_ >= xl && (n_ = new TextDecoder("utf-8", {
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
  function vl(_) {
    i = _;
  }
  URL = globalThis.URL;
  const Sl = await O_({
    "./proteus_host_web_bg.js": {
      __wbg_call_5575218572ead796: ls,
      __wbg_next_0c4066e251d2eff9: Rd,
      __wbg_done_b62d4a7d2286852a: Zi,
      __wbg_value_49f783bb59765962: b2,
      __wbg_length_c6054974c0a6cdb9: Gu,
      __wbg_get_unchecked_54a4374c38e08460: uu,
      __wbg_instanceof_Map_afa18d5840c04c15: Iu,
      __wbg_new_typed_00a409eb4ec4f2d9: kd,
      __wbg_get_197a3fe98f169e38: su,
      __wbg_then_05edfc8a4fea5106: x1,
      __wbg_new_227d7c05414eb861: Dd,
      __wbg_stack_3b0d974bbf31e44f: Lw,
      __wbg_error_a6fa202b58aa1cd3: hf,
      __wbg_push_f724b5db8acf89d2: Nd,
      __wbg_proteusapp_new: jd,
      __wbg_call_0e855b388e315e17: ws,
      __wbg_call_8e98ed2f3c86c4b5: ms,
      __wbg_set_dc601f4a69da0bc2: s0,
      __wbg_get_with_ref_key_6412cf3094599694: du,
      __wbg_set_6be42768c690e380: Fg,
      __wbg_String_8564e559799eccda: fb,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: Su,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: dd,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: gd,
      __wbg_maxTextureDimension3D_06ee54121b37d431: pd,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: ud,
      __wbg_maxBindGroups_14611ac9ed1c6b56: Ku,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: Nu,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: ad,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: nd,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: cd,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: bd,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: id,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: fd,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: ld,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: wd,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: sd,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: yd,
      __wbg_maxBufferSize_f7ce3e1856349d2f: Ju,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: md,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: hd,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: od,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: vd,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: $d,
      __wbg_maxColorAttachments_fd9187f9f786da18: Xu,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: Qu,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: td,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: Yu,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: Zu,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: ed,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: _d,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: rd,
      __wbg_description_18d0a6d4077fec8e: Hi,
      __wbg_set_dst_factor_1ed75271a89a711e: I0,
      __wbg_set_operation_b5862f5a1a143b30: Fp,
      __wbg_set_src_factor_1c4f755f8676df1b: Np,
      __wbg_set_texture_16d2be474ce6ad0c: bw,
      __wbg_set_mip_level_246db61be15bdd69: mp,
      __wbg_set_x_56f0c2c08a62725c: Pw,
      __wbg_set_y_04fb8ce84735b4e1: kw,
      __wbg_set_z_a51316db27a4941e: Mw,
      __wbg_set_origin_9b3b0fbe0a5dc469: Bp,
      __wbg_set_aspect_77332ac136ee94eb: Gg,
      __wbg_Window_a07901001eb4269f: ub,
      __wbg_gpu_a7c12045c25d009a: gu,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: db,
      __wbg_set_a_5f6e488475272136: Bg,
      __wbg_set_b_688365d692bba214: Ug,
      __wbg_set_g_d4d1d77cf8fdd362: U0,
      __wbg_set_r_527e5a41c4b1a846: Cp,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: vu,
      __wbg_queue_65d985f3e6d786a6: eg,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: kp,
      __wbg_requestAdapter_9ff5c9d1ff271165: sg,
      __wbg_set_required_limits_3b031f66f838f4e3: Lp,
      __wbg_set_required_features_54918de8185c5fab: Vp,
      __wbg_set_label_bae57fb9f24fde5c: ep,
      __wbg_requestDevice_c1c34f88a477e509: ug,
      __wbg_limits_50a8c5e629dbfe40: zu,
      __wbg_info_22dcf1fd1b12bc7d: yu,
      __wbg_set_size_41cd9255ca1e4242: jp,
      __wbg_set_usage_908213a4d4bb8bde: lw,
      __wbg_set_mapped_at_creation_48de4735fab51e78: dp,
      __wbg_set_label_cd567b7b35838e4c: rp,
      __wbg_createBuffer_2f08c0205e04efca: Js,
      __wbg_set_address_mode_u_a37cf1035585c638: kg,
      __wbg_set_address_mode_v_8ac049e029caef76: Mg,
      __wbg_set_address_mode_w_eb9260ee11729e92: Rg,
      __wbg_set_compare_42211fbf15e3b850: o0,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: ip,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: fp,
      __wbg_set_mag_filter_69d846b974d4bcc0: up,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: lp,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: xp,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: pp,
      __wbg_set_label_dcd98efbb9370da8: ap,
      __wbg_createSampler_248bd67c920af37d: ci,
      __wbg_set_width_1a5e2e86fa5bdcd8: Tw,
      __wbg_set_height_e8b5483b8c117d5e: j0,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: l0,
      __wbg_set_format_e9d4b1475bb3bd3b: O0,
      __wbg_set_size_a61ff22205255d61: Kp,
      __wbg_set_usage_7fa9cd18d1104aca: ww,
      __wbg_set_label_0c1bd0e976cf0a9a: J0,
      __wbg_set_dimension_36e13ccecae5af4b: A0,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: yp,
      __wbg_set_sample_count_865e1d19b84e27e6: Wp,
      __wbg_set_view_formats_bab284fc81b40e70: Sw,
      __wbg_createTexture_9e76b80a2dc0d12e: gi,
      __wbg_set_entries_fc76ca4d7da6a709: F0,
      __wbg_set_layout_eeef59714f5bf48b: bp,
      __wbg_set_label_f92ae11c77d74198: op,
      __wbg_createBindGroup_2320df4db188406c: Ks,
      __wbg_set_code_56e2d45ec1ff6c2d: t0,
      __wbg_set_label_be45aed56e4b9fee: _p,
      __wbg_createShaderModule_53701de4fb271c90: si,
      __wbg_set_label_d1c24b5a7a3ac31d: np,
      __wbg_createCommandEncoder_cd88faca35d9ed68: Xs,
      __wbg_set_bind_group_layouts_5325d038771af328: Kg,
      __wbg_set_label_2f592bd1be3db6b3: Y0,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: ei,
      __wbg_set_module_14e471fdd94c582d: vp,
      __wbg_set_entry_point_8db3b6d103e3b865: P0,
      __wbg_set_buffers_85a7238f4ef28ab4: Zg,
      __wbg_set_layout_7c5ba5bdcde8a0f0: cp,
      __wbg_set_vertex_a4951dd9a7a4ed54: hw,
      __wbg_set_label_c47c451211e2f6d2: tp,
      __wbg_set_format_f9341112e43ea182: G0,
      __wbg_set_depth_compare_30e9ea552da12fe2: g0,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: $0,
      __wbg_set_depth_bias_428c9340b0fd937b: i0,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: f0,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: u0,
      __wbg_set_compare_1509dc1a5420943f: a0,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: p0,
      __wbg_set_fail_op_77ab26c98f847b65: M0,
      __wbg_set_pass_op_e9470d1262fb8a8b: Pp,
      __wbg_set_stencil_back_6ef4683123b19b25: Jp,
      __wbg_set_stencil_front_aeb8580a97e5424b: Xp,
      __wbg_set_stencil_read_mask_2954f260d47349ea: Zp,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: tw,
      __wbg_set_depth_stencil_1bd50dbc450c8650: h0,
      __wbg_set_module_08ad08e736d8edbf: $p,
      __wbg_set_targets_6b0b3bdd87f35668: cw,
      __wbg_set_entry_point_6fec5723cc790927: B0,
      __wbg_set_fragment_1a595620425637e1: W0,
      __wbg_set_count_26a934d1cd07d080: c0,
      __wbg_set_mask_0c49a66362fc0079: gp,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: Lg,
      __wbg_set_multisample_85f073947b782d07: Sp,
      __wbg_set_cull_mode_9d466c1ab414cac8: b0,
      __wbg_set_front_face_50cdf4eb61504a46: z0,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: ow,
      __wbg_set_topology_beefb3aca0612b00: fw,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: gw,
      __wbg_set_primitive_369241acd17871f1: Mp,
      __wbg_createRenderPipeline_f48187ba9f7701e8: ni,
      __wbg_set_entries_3017e6132f938c6e: T0,
      __wbg_set_label_1175a3329a06e52b: Q0,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: js,
      __wbg_limits_1c25cb4f379a4418: Wu,
      __wbg_set_color_attachments_abe67f6631926e28: r0,
      __wbg_set_label_8fd860a36d2c7b74: Z0,
      __wbg_set_view_dbd0294573f64d05: xw,
      __wbg_set_depth_clear_value_442bf492734f63b6: d0,
      __wbg_set_depth_load_op_34d430b74bb36d91: w0,
      __wbg_set_depth_store_op_0ea0a215313dbda7: x0,
      __wbg_set_depth_read_only_138a11b10c731094: m0,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: Qp,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: Yp,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: _w,
      __wbg_set_stencil_read_only_fb489d191b6d969b: ew,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: y0,
      __wbg_set_query_set_18679a8580267d5a: Rp,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: jg,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: D0,
      __wbg_set_timestamp_writes_c552d52fbb417005: iw,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: Lb,
      __wbg_copyTextureToTexture_1be188df1e535c0a: Hs,
      __wbg_label_47480289cc2bce71: Eu,
      __wbg_set_label_2d2227f4d5991e50: X0,
      __wbg_finish_cfaeede3baf55be1: $f,
      __wbg_finish_087cb89c65c06eb1: xf,
      __wbg_drawIndexed_68637ebab6dd8d6e: bf,
      __wbg_setPipeline_bab24dbce96903b9: vg,
      __wbg_setViewport_f9d423db4f4b4b58: Ig,
      __wbg_setBindGroup_4ba56e1e0d26f244: hg,
      __wbg_setBindGroup_6124849cc8547086: yg,
      __wbg_setIndexBuffer_17431786d06c1b7c: xg,
      __wbg_setIndexBuffer_a16ed5b869c87507: $g,
      __wbg_setVertexBuffer_b508baf8d0ffe331: Ag,
      __wbg_setVertexBuffer_91c4b602d0289943: Sg,
      __wbg_end_414453a89205612c: pf,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: Kf,
      __wbg_getCurrentTexture_51975ae7185fd15f: Gf,
      __wbg_set_device_0d774b66e7288f72: v0,
      __wbg_set_format_d347899cd860709c: E0,
      __wbg_set_usage_ae014e77ff77ce06: mw,
      __wbg_set_alpha_mode_92402195b3ae1ee7: Vg,
      __wbg_set_view_formats_fe531a043efb71fa: Aw,
      __wbg_configure_3d64c677c7d68a15: Os,
      __wbg_writeBuffer_b4bdd36178348ca5: h2,
      __wbg_set_bytes_per_row_91681ca78d744888: e0,
      __wbg_set_rows_per_image_d198b7e73a38978b: Gp,
      __wbg_set_offset_a097a8050a3a9a33: Tp,
      __wbg_writeTexture_b45b69132e46a227: y2,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: Gd,
      __wbg_submit_1290d44bb76ecef4: Qw,
      __wbg_getMappedRange_5ed22727c9679168: qf,
      __wbg_unmap_8f06698a75b8331a: a2,
      __wbg_destroy_b5b39f25f0799295: ji,
      __wbg_mapAsync_bb0029907dd91181: ju,
      __wbg_set_dimension_174ad7e2fb67fb4e: S0,
      __wbg_set_format_90860b0321868db4: V0,
      __wbg_set_aspect_a823a14d00d42d37: Wg,
      __wbg_set_base_array_layer_cc6c68d233489c4b: qg,
      __wbg_set_array_layer_count_daec613068108a9d: Eg,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: Hg,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: hp,
      __wbg_set_label_03d2396d4655a3e1: N0,
      __wbg_set_usage_7f0dda8309469b1c: pw,
      __wbg_createView_cc96b5bdd3d5bf5e: li,
      __wbg_set_min_binding_size_689661b9ed25e083: wp,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: q0,
      __wbg_set_type_38961e08504ca674: uw,
      __wbg_requestAdapter_c46930b8bc33722d: ig,
      __wbg_set_alpha_aa2e606e9e647b21: Cg,
      __wbg_set_color_bc393d7efc3c8594: n0,
      __wbg_set_visibility_1bca121a89accba5: Iw,
      __wbg_set_storage_texture_ab9eed9786337ef0: nw,
      __wbg_set_external_texture_825fe2bc7a0c0603: k0,
      __wbg_set_binding_b6b0fe5c281b8c69: Ng,
      __wbg_set_buffer_e89095a9f0cafad3: Yg,
      __wbg_set_sampler_8c5d7fb1b02058c6: Up,
      __wbg_set_texture_e25a73da75cf5808: sw,
      __wbg_set_view_dimension_263387976511ebc9: $w,
      __wbg_set_format_1786adb7bc74c7c9: R0,
      __wbg_set_access_091f317905cd76a5: Pg,
      __wbg_set_format_abf7a1bc5425c56a: L0,
      __wbg_set_blend_8d6e9c08b5702a09: Qg,
      __wbg_set_write_mask_144b25e2bd909124: Bw,
      __wbg_set_load_op_56844f51434037bf: sp,
      __wbg_set_store_op_caeede4654b3d847: aw,
      __wbg_set_view_bdeab150b5f0768c: yw,
      __wbg_set_clear_value_642701f928a5ccb3: _0,
      __wbg_set_resolve_target_fe76b3f99cf72078: Ep,
      __wbg_set_buffer_55f096330c8912b4: Xg,
      __wbg_set_offset_73156b0e0b41d79a: Ip,
      __wbg_set_size_1e6281b07cd39177: Hp,
      __wbg_set_binding_f3c188a8cd21455b: Jg,
      __wbg_set_resource_fe385d2e3dadaf63: Op,
      __wbg_set_format_6606f5c1fba6f459: C0,
      __wbg_set_offset_8d9d9afffa18b591: Dp,
      __wbg_set_shader_location_0ff30a733291a396: qp,
      __wbg_set_array_stride_c2c009eabc18b5f6: Og,
      __wbg_set_attributes_05f9117fd32ca606: zg,
      __wbg_set_step_mode_a35aef328761c452: rw,
      __wbg_set_type_c1eebc19f8a6aeb9: dw,
      __wbg_set_multisampled_40505c1381e1c32c: Ap,
      __wbg_set_sample_type_7088b1efddce6a69: zp,
      __wbg_set_view_dimension_3ed01b237e85826f: vw,
      __wbg_includes_83dff8d05da243c5: hu,
      __wbg_clearBufferuiv_1d2d93401c0904a3: xs,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: Cs,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: Ls,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: Es,
      __wbg_copyBufferSubData_a944f33b601b822d: Ws,
      __wbg_clientWaitSync_7580165bd2eff461: Ts,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: Vs,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: qs,
      __wbg_createQuery_f013132b870a71ef: ri,
      __wbg_createSampler_9fe50152a2524319: bi,
      __wbg_createVertexArray_8685feb21901c932: wi,
      __wbg_deleteQuery_ef51ea0a52420103: Ti,
      __wbg_deleteSampler_5c045e0cc55813d4: Pi,
      __wbg_getIndexedParameter_2b18df6fca85f751: Uf,
      __wbg_getQueryParameter_0599e85ddb81220b: Yf,
      __wbg_getSyncParameter_9a2bda340ebe166f: au,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: ou,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: Pu,
      __wbg_deleteSync_37ca83c429c43d8a: Ri,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: Ei,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: _f,
      __wbg_drawBuffers_558d96e52e754731: af,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: cf,
      __wbg_endQuery_161170c5280a8293: gf,
      __wbg_fenceSync_56efc7cc79111e54: yf,
      __wbg_framebufferTextureLayer_2312acdc74f97676: Bf,
      __wbg_getBufferSubData_92680d3a2f7be029: Cf,
      __wbg_readBuffer_361ec5474f3aae49: _g,
      __wbg_readPixels_5840000f3e22f3ce: rg,
      __wbg_readPixels_5bf204799ed2272f: ng,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: ag,
      __wbg_texImage3D_8647ef58aef5b912: _1,
      __wbg_texStorage2D_ed5df596c5f1e3af: n1,
      __wbg_texStorage3D_160b0197bc190f04: a1,
      __wbg_texSubImage2D_f03448e182b0820d: d1,
      __wbg_texSubImage2D_d14d9c0a1f627c31: u1,
      __wbg_texSubImage2D_89866a04ecd0a76b: s1,
      __wbg_texSubImage2D_5c630043f1c56716: b1,
      __wbg_samplerParameterf_3157ba41c0f4d97a: gg,
      __wbg_samplerParameteri_f85a29156e790189: pg,
      __wbg_texImage2D_0e0f37b9fb297d01: Xw,
      __wbg_texImage2D_0e537dc331652de3: Yw,
      __wbg_texImage3D_30dbf7234481b8f5: e1,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: c1,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: i1,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: f1,
      __wbg_texSubImage3D_933e4cd41cc5376d: m1,
      __wbg_texSubImage3D_c3538b28040daac9: y1,
      __wbg_uniform1ui_36c94692177ebf76: T1,
      __wbg_uniform2fv_17592f4dad9798fb: F1,
      __wbg_uniform2iv_d5d29ebbc466977d: k1,
      __wbg_texSubImage3D_0fdbd843482bb916: p1,
      __wbg_texSubImage3D_09a97a968b93253d: g1,
      __wbg_texSubImage3D_355efde0dc047913: w1,
      __wbg_texSubImage3D_bd32c8e29e470904: h1,
      __wbg_texSubImage3D_5a238709d114b609: l1,
      __wbg_uniform2uiv_418ba3bf6a230dd5: M1,
      __wbg_uniform4fv_9e670a001c77dca0: z1,
      __wbg_uniform4iv_1d57c6b8e5c0e447: U1,
      __wbg_uniform3fv_dbe44b778e6b89e8: C1,
      __wbg_uniform3iv_d75d3a5f86d54be4: L1,
      __wbg_uniform3uiv_71c1efc24a662de9: E1,
      __wbg_uniform4uiv_c5d45f5dbdae727a: H1,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: X1,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: Z1,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: e2,
      __wbg_uniformBlockBinding_829a71912ad79a04: j1,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: K1,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: J1,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: Q1,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: _2,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: f2,
      __wbg_activeTexture_525ee3068cb9e8d5: Pb,
      __wbg_attachShader_3477e67517b09b6b: Rb,
      __wbg_bindAttribLocation_79b5d26727094518: Eb,
      __wbg_bindBuffer_d3111de6861cb875: Wb,
      __wbg_bindFramebuffer_63e837a5dc0accfb: qb,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: Hb,
      __wbg_bindTexture_7ab28ff4ff3dc506: Nb,
      __wbg_blendColor_15f26633b646e542: Yb,
      __wbg_blendEquation_7dadb4db540a42da: ts,
      __wbg_blendEquationSeparate_8240ddfa32266109: es,
      __wbg_blendFunc_b15af02643e188f1: cs,
      __wbg_blendFuncSeparate_456410f9919bed39: as,
      __wbg_clear_dadcb3e2929388b0: Is,
      __wbg_clearDepth_05c17028494ee4dd: $s,
      __wbg_clearStencil_917833d1e2ac56e4: As,
      __wbg_colorMask_f111e3e5796458f4: Ps,
      __wbg_compileShader_f5625b583b2c9fd6: ks,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: r2,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: n2,
      __wbg_vertexAttribDivisor_f17a8585267be92f: i2,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: zs,
      __wbg_createBuffer_9f602b2dbcbf409c: Qs,
      __wbg_createFramebuffer_4a250944a4542bbc: Ys,
      __wbg_createProgram_4c8164d471c10346: _i,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: oi,
      __wbg_createShader_9c5cd42709d915ff: fi,
      __wbg_createTexture_3eed23cb87dd35fc: ui,
      __wbg_cullFace_94f24b4fd5e9038b: yi,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: $i,
      __wbg_getExtension_11824edd67a143d8: zf,
      __wbg_getParameter_7f7f23cae98f2c81: Hf,
      __wbg_getProgramInfoLog_cd84be80942f345b: Jf,
      __wbg_getProgramParameter_039391d5ba319f50: Qf,
      __wbg_getShaderInfoLog_495bddda98172699: Zf,
      __wbg_getShaderParameter_4eb65cfb174ceb22: _u,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: ru,
      __wbg_getUniformLocation_ab63f569a4e41744: bu,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: Si,
      __wbg_deleteProgram_eff668280dcb01ca: Di,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: Bi,
      __wbg_deleteShader_3339454254c7147c: ki,
      __wbg_deleteTexture_c1c58550dc55af5c: Vi,
      __wbg_depthFunc_31b183b5b8ee478e: Oi,
      __wbg_depthMask_cab7f2ae7f0e559c: zi,
      __wbg_depthRange_797a71ba3b79267a: Ui,
      __wbg_disable_cb1b3e6c1cee5202: Xi,
      __wbg_disableVertexAttribArray_b395358ec5084c39: Ji,
      __wbg_drawArrays_42dbb4b0349c8f34: rf,
      __wbg_enable_d1f42f78be33a553: df,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: sf,
      __wbg_flush_7ae42f071230db6b: vf,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: Df,
      __wbg_framebufferTexture2D_367ab597a005e8d9: Tf,
      __wbg_frontFace_9bdcf2a758e989e5: kf,
      __wbg_linkProgram_e23a348b0f6e0c4f: qu,
      __wbg_pixelStorei_a78a504be58d1d0a: zd,
      __wbg_polygonOffset_a4f07d97b9b0dced: qd,
      __wbg_renderbufferStorage_3049e13db5c4e60e: cg,
      __wbg_scissor_6c024669fbf4fe72: wg,
      __wbg_vertexAttribPointer_4e5d289c5d224210: d2,
      __wbg_viewport_a0ca330f9b85397e: g2,
      __wbg_shaderSource_66dce75b25a1a407: Cw,
      __wbg_stencilFuncSeparate_ec603976be9569a4: Uw,
      __wbg_stencilMask_485dcb5965c79a71: jw,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: Hw,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: Nw,
      __wbg_texParameteri_c6efffcecb474d2f: t1,
      __wbg_uniform1f_3acd3f3eb50b5e11: S1,
      __wbg_uniform1i_e4f13604354c28ae: D1,
      __wbg_uniform4f_a5008773cfb47d1a: G1,
      __wbg_useProgram_ab2ee2a13a1fd909: c2,
      __wbg_bufferSubData_2270f1b9db71e642: ds,
      __wbg_clearBufferfv_6b77b9402254a2bf: hs,
      __wbg_clearBufferiv_0f056544010eef3e: ys,
      __wbg_beginQuery_dad334d972fed3cc: Vb,
      __wbg_bindBufferRange_16a9d90becc2a7d7: Gb,
      __wbg_bindSampler_3c7002cb6d56ae8f: Kb,
      __wbg_bindVertexArray_c391bd47303d75cd: Xb,
      __wbg_blitFramebuffer_ea96ada8bba07582: bs,
      __wbg_bufferData_64e9905f2b3d3a6f: fs,
      __wbg_bufferData_99bbbc63f02251c4: us,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: Fu,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: fg,
      __wbg_navigator_935098efd1dc7fe5: Ad,
      __wbg_devicePixelRatio_8e5ca44720abafec: Ki,
      __wbg_document_2634180a4c694068: Yi,
      __wbg_instanceof_Window_0d356b88a2f77c42: Bu,
      __wbg_hidden_cb32701ca3785fea: mu,
      __wbg_getElementById_c7aba6b93b34bf01: Wf,
      __wbg_querySelector_1f3658f4b48e268b: Xd,
      __wbg_querySelectorAll_ffda3c891a9eb29a: Qd,
      __wbg_hasAttribute_73e1230c9c107e79: pu,
      __wbg_setAttribute_8bccfbabf2a83682: mg,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: Rf,
      __wbg_focus_c80921c19b28520b: Af,
      __wbg_uniform2iv_c5e863975dd780d8: P1,
      __wbg_uniform3fv_7723e142be50856f: R1,
      __wbg_uniform3iv_bea3976522e15d48: V1,
      __wbg_uniform4fv_85ad5d23234895d2: W1,
      __wbg_clear_ff8cfdf420f7dde6: Ds,
      __wbg_clearDepth_ac6b54f112feeaf7: vs,
      __wbg_clearStencil_56d6a6308294a749: Ss,
      __wbg_colorMask_b0ab9d429a1efa0a: Bs,
      __wbg_compileShader_fcf3f3d2891f73f9: Ms,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: Us,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: Ns,
      __wbg_createFramebuffer_ab73f30b5dc97415: Zs,
      __wbg_createProgram_f11c63f59f41b82a: ti,
      __wbg_createRenderbuffer_556000dbb01f5026: ai,
      __wbg_createShader_27d9388313f3b14e: ii,
      __wbg_createTexture_8455c703424c567b: di,
      __wbg_cullFace_774780fb4177aab8: hi,
      __wbg_deleteBuffer_d758283bea6e0ccf: vi,
      __wbg_deleteFramebuffer_8953b325144192fe: Ai,
      __wbg_deleteProgram_0135c6926e75af75: Ii,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: Fi,
      __wbg_deleteShader_79dbaaed69b7ca3b: Mi,
      __wbg_deleteTexture_3acb672a45f9998a: Ci,
      __wbg_depthFunc_eaca1bc79f7bf216: Gi,
      __wbg_depthMask_3a9074b08d1f68e5: Wi,
      __wbg_depthRange_c24a808b3496e0a9: qi,
      __wbg_uniform4iv_a9aaa92f2f458ec2: q1,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: N1,
      __wbg_uniformMatrix3fv_da8c388748c5739b: Y1,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: t2,
      __wbg_activeTexture_1d5359b20df41710: Bb,
      __wbg_attachShader_683d1070365e7066: Cb,
      __wbg_bindAttribLocation_d56d3c40331af7ed: Ob,
      __wbg_bindBuffer_e95efaf0d4851845: zb,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: Ub,
      __wbg_bindRenderbuffer_d608b211c51ed147: jb,
      __wbg_bindTexture_ffc56f1e5c5526c6: Jb,
      __wbg_blendColor_a0ba1cdcecc3a34c: Zb,
      __wbg_blendEquation_8bfa69f639ae92da: rs,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: _s,
      __wbg_blendFunc_713c504adab14f98: os,
      __wbg_blendFuncSeparate_3eef699c291dbc87: ns,
      __wbg_disable_4dca6ee0ccc91e4a: Qi,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: Ni,
      __wbg_drawArrays_10e1254aa4524ae9: tf,
      __wbg_enable_c6e523307311617a: uf,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: ff,
      __wbg_flush_eb3fb8da2ec00d57: Sf,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: If,
      __wbg_linkProgram_6a2eee02a03b9b00: Uu,
      __wbg_pixelStorei_55ad4c67b699537c: Wd,
      __wbg_polygonOffset_06dc6468c12a57e1: Ud,
      __wbg_renderbufferStorage_2918fb696fd45663: og,
      __wbg_scissor_f9696c630e464977: lg,
      __wbg_shaderSource_628c37a476ae65f9: Rw,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: zw,
      __wbg_stencilMask_f9fe198f7fd6fc9c: Kw,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: qw,
      __wbg_stencilOpSeparate_6cf50803475d2640: Jw,
      __wbg_texParameteri_fe6210a493d48a16: r1,
      __wbg_framebufferTexture2D_3a558e14f56720d2: Ff,
      __wbg_frontFace_c9bb1fa659ffd276: Mf,
      __wbg_getParameter_91a344e1a84a4669: jf,
      __wbg_getProgramInfoLog_35410850de9ccefe: Nf,
      __wbg_getProgramParameter_bbc667347ac2e882: Xf,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: eu,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: tu,
      __wbg_getUniformLocation_340155dc706d3fea: cu,
      __wbg_uniform1f_d34e4b454f7c8e73: A1,
      __wbg_uniform1i_cd9a7f990128ea48: I1,
      __wbg_uniform4f_4410d2faaa7e5dda: O1,
      __wbg_useProgram_0e1cd86765304939: o2,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: u2,
      __wbg_viewport_b5bd46a0d111c83c: p2,
      __wbg_texSubImage2D_1b2ff28f994c325e: o1,
      __wbg_uniform2fv_39277cf2d3cb83c7: B1,
      __wbg_bufferData_5df9bdb32e189eee: is,
      __wbg_bufferData_26132561617ce8fb: ss,
      __wbg_bufferSubData_44db8a3b4a70b57d: gs,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: Rs,
      __wbg_readPixels_05377f8b6fa1d8eb: tg,
      __wbg_texImage2D_7bc3001cb8602ed2: Zw,
      __wbg_navigator_017bc45e84c473cc: Sd,
      __wbg_log_d282446d03691e72: Hu,
      __wbg_info_a392cd5b7536cfb5: xu,
      __wbg_warn_88c4a5bd9a322000: w2,
      __wbg_debug_7271beced8b71cd4: xi,
      __wbg_error_933f449d72fef598: mf,
      __wbg_error_50f60c611a3dcf64: lf,
      __wbg_set_width_031bdecd763c5855: Dw,
      __wbg_set_height_ad5056ea051acd78: H0,
      __wbg_getContext_486aab500e1c34c9: Lf,
      __wbg_getContext_9fd4db9b1cf155db: Of,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: Au,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: nf,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: nu,
      __wbg_width_a86bcd32bd998060: m2,
      __wbg_height_cd732bbdc7b66e49: wu,
      __wbg_queryCounterEXT_ebb00bcc96221671: Jd,
      __wbg_offsetX_0214819d43aaf6d5: Ed,
      __wbg_offsetY_f18f571e33b385ab: Od,
      __wbg_button_bb3285fcdf965178: ps,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: ef,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: of,
      __wbg_get_37b48b8fa52d1f2c: iu,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: s2,
      __wbg_preventDefault_c047d3e292b08cc4: Hd,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: Pf,
      __wbg_width_08e66520b99071f4: l2,
      __wbg_height_e9afb506f31052a9: lu,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: Qb,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: pi,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: Li,
      __wbg_set_width_f9e631f4ee129e5c: Fw,
      __wbg_set_height_ef298446b359b0c5: K0,
      __wbg_getContext_70c2d1bed75d4122: Ef,
      __wbg_getContext_422b32d0ee4b8076: Vf,
      __wbg_addEventListener_ea90bc131475777e: kb,
      __wbg_contentRect_0fb8c8900d689a0c: Gs,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: Du,
      __wbg_new_1e52e3c919312525: Id,
      __wbg_observe_592b94857eed8e27: Vd,
      __wbg_altKey_7412dd64f8c921c7: Mb,
      __wbg_ctrlKey_00097886a21597a7: mi,
      __wbg_shiftKey_273ee8c901267b55: Vw,
      __wbg_metaKey_1c2847b62ad062c1: xd,
      __wbg_repeat_46a5c90df9f6ef0b: bg,
      __wbg_isComposing_e3709163a95a2477: Mu,
      __wbg_key_d6b3d2cce3d41872: Lu,
      __wbg_code_87bb99fdec02d313: Fs,
      __wbg_resolve_d82363d90af6928a: dg,
      __wbg_then_591b6b3a75ee817a: v1,
      __wbg_iterator_cc47ba25a2be735a: Vu,
      __wbg_get_9a29be2cb383ed9a: fu,
      __wbg_next_402fa10b59ab20c3: Cd,
      __wbg_new_2e117a478906f062: Td,
      __wbg_new_36e147a8ced3c6e0: Fd,
      __wbg_of_62183ea089c00bfa: Ld,
      __wbg_isArray_145a34fd0a38d37b: ku,
      __wbg_new_e66a4b7758dd2e5c: Pd,
      __wbg_isSafeInteger_a3389a198582f5f6: Ru,
      __wbg_is_de5b366c746e004c: Cu,
      __wbg_entries_c261c3fa1f281256: wf,
      __wbg_then_2a84678a50976959: $1,
      __wbg_length_589238bdcf171f0e: Ou,
      __wbg_prototypesetcall_d721637c7ca66eb8: Kd,
      __wbg_set_272b80acaf9a75e8: Dg,
      __wbg_new_81880fb5002cb255: Bd,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: Md,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: Ew,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: Gw,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Ow,
      __wbg_static_accessor_WINDOW_168f178805d978fe: Ww,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: $u,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: Tu,
      __wbg_queueMicrotask_1c9b3800e321a967: Yd,
      __wbg_queueMicrotask_311744e534a929a3: Zd,
      __wbg_set_4564f7dc44fcb0c9: Tg,
      __wbg___wbindgen_number_get_1cc01dd708740256: Ib,
      __wbg___wbindgen_in_4990f46af709e33c: lb,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: Tb,
      __wbg___wbindgen_is_null_6d937fbfb6478470: yb,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: Sb,
      __wbg_Number_c4bdf66bb78f7977: ib,
      __wbg_Error_fdd633d4bb5dd76a: sb,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: mb,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: xb,
      __wbg___wbindgen_is_string_1fca8072260dd261: $b,
      __wbg___wbindgen_string_get_71bb4348194e31f0: Db,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: pb,
      __wbg___wbindgen_is_function_acc5528be2b923f2: hb,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: vb,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: Ab,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: gb,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: Fb,
      __wbg___wbindgen_debug_string_8a447059637473e2: wb,
      __wbindgen_init_externref_table: G2,
      __wbindgen_cast_0000000000000001: x2,
      __wbindgen_cast_0000000000000002: $2,
      __wbindgen_cast_0000000000000003: v2,
      __wbindgen_cast_0000000000000004: S2,
      __wbindgen_cast_0000000000000005: A2,
      __wbindgen_cast_0000000000000006: I2,
      __wbindgen_cast_0000000000000007: D2,
      __wbindgen_cast_0000000000000008: T2,
      __wbindgen_cast_0000000000000009: F2,
      __wbindgen_cast_000000000000000a: B2,
      __wbindgen_cast_000000000000000b: P2,
      __wbindgen_cast_000000000000000c: k2,
      __wbindgen_cast_000000000000000d: M2,
      __wbindgen_cast_000000000000000e: R2,
      __wbindgen_cast_000000000000000f: C2,
      __wbindgen_cast_0000000000000010: V2,
      __wbindgen_cast_0000000000000011: L2,
      __wbindgen_cast_0000000000000012: E2,
      __wbindgen_cast_0000000000000013: O2
    }
  }, cb), { memory: Al, mount: Il, __wbg_proteusapp_free: Dl, proteusapp_addChild: Tl, proteusapp_animateTo: Fl, proteusapp_bakeTexture: Bl, proteusapp_bakedImageSize: Pl, proteusapp_bakedTextSize: kl, proteusapp_bindKey: Ml, proteusapp_channelDestroy: Rl, proteusapp_channelSet: Cl, proteusapp_clearFocus: Vl, proteusapp_component: Ll, proteusapp_copyBakedImageFrom: El, proteusapp_createVideo: Ol, proteusapp_cropImage: Gl, proteusapp_declareGeometry: Wl, proteusapp_declaredGeometry: zl, proteusapp_destroy: Ul, proteusapp_devices: ql, proteusapp_focus: Hl, proteusapp_focused: jl, proteusapp_freeResources: Kl, proteusapp_get: Nl, proteusapp_hideVideo: Jl, proteusapp_inputDevices: Ql, proteusapp_inputMode: Xl, proteusapp_isFocused: Yl, proteusapp_loadTexture: Zl, proteusapp_mergeFrom: e3, proteusapp_mergeFromWithBehavior: _3, proteusapp_new: t3, proteusapp_onAppKey: r3, proteusapp_onBlur: n3, proteusapp_onClick: a3, proteusapp_onDrag: o3, proteusapp_onDropped: c3, proteusapp_onFocus: b3, proteusapp_onFocusLost: s3, proteusapp_onHoverEnter: i3, proteusapp_onHoverExit: f3, proteusapp_onKey: u3, proteusapp_onPress: d3, proteusapp_onRelease: g3, proteusapp_onTransitionComplete: p3, proteusapp_pointerLeft: w3, proteusapp_pointerMoved: l3, proteusapp_pointerPressed: m3, proteusapp_pointerReleased: h3, proteusapp_releaseVideo: y3, proteusapp_removeChild: x3, proteusapp_resetKeyMap: $3, proteusapp_setDeclaredGeometry: v3, proteusapp_setDefaultFocus: S3, proteusapp_setDevices: A3, proteusapp_setDisabled: I3, proteusapp_setImage: D3, proteusapp_setInputDevices: T3, proteusapp_setInteractive: F3, proteusapp_setKeyRepeat: B3, proteusapp_setLongPressMs: P3, proteusapp_setNavigatingActions: k3, proteusapp_setNeighbour: M3, proteusapp_setOpacity: R3, proteusapp_setReadingDirection: C3, proteusapp_setText: V3, proteusapp_setTexture: L3, proteusapp_setTransitionInteraction: E3, proteusapp_setVideoCrossfade: O3, proteusapp_setVisible: G3, proteusapp_showVideo: W3, proteusapp_splitTo: z3, proteusapp_splitToWithBehavior: U3, proteusapp_splitToWithStates: q3, proteusapp_texture: H3, proteusapp_textureState: j3, proteusapp_tick: K3, proteusapp_transitionChannel: N3, proteusapp_unbindKey: J3, proteusapp_uploadVideoFrame: Q3, __wbg_handle_free: X3, __wbg_texturehandle_free: Y3, __wbg_transitionchannel_free: Z3, __wbg_videohandle_free: e4, handle_fromId: _4, handle_id: t4, texturehandle_fromId: r4, texturehandle_id: n4, __abort_handler: a4, __instance_terminated: o4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: c4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: b4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: s4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: i4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: f4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: u4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: d4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: g4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: p4, __wbindgen_malloc: w4, __wbindgen_realloc: l4, __wbindgen_exn_store: m4, __externref_table_alloc: h4, __wbindgen_externrefs: y4, __wbindgen_free: x4, __wbindgen_destroy_closure: $4, __externref_table_dealloc: v4, __wbindgen_start: zt } = Sl, S4 = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: a4,
    __externref_table_alloc: h4,
    __externref_table_dealloc: v4,
    __instance_terminated: o4,
    __wbg_handle_free: X3,
    __wbg_proteusapp_free: Dl,
    __wbg_texturehandle_free: Y3,
    __wbg_transitionchannel_free: Z3,
    __wbg_videohandle_free: e4,
    __wbindgen_destroy_closure: $4,
    __wbindgen_exn_store: m4,
    __wbindgen_externrefs: y4,
    __wbindgen_free: x4,
    __wbindgen_malloc: w4,
    __wbindgen_realloc: l4,
    __wbindgen_start: zt,
    handle_fromId: _4,
    handle_id: t4,
    memory: Al,
    mount: Il,
    proteusapp_addChild: Tl,
    proteusapp_animateTo: Fl,
    proteusapp_bakeTexture: Bl,
    proteusapp_bakedImageSize: Pl,
    proteusapp_bakedTextSize: kl,
    proteusapp_bindKey: Ml,
    proteusapp_channelDestroy: Rl,
    proteusapp_channelSet: Cl,
    proteusapp_clearFocus: Vl,
    proteusapp_component: Ll,
    proteusapp_copyBakedImageFrom: El,
    proteusapp_createVideo: Ol,
    proteusapp_cropImage: Gl,
    proteusapp_declareGeometry: Wl,
    proteusapp_declaredGeometry: zl,
    proteusapp_destroy: Ul,
    proteusapp_devices: ql,
    proteusapp_focus: Hl,
    proteusapp_focused: jl,
    proteusapp_freeResources: Kl,
    proteusapp_get: Nl,
    proteusapp_hideVideo: Jl,
    proteusapp_inputDevices: Ql,
    proteusapp_inputMode: Xl,
    proteusapp_isFocused: Yl,
    proteusapp_loadTexture: Zl,
    proteusapp_mergeFrom: e3,
    proteusapp_mergeFromWithBehavior: _3,
    proteusapp_new: t3,
    proteusapp_onAppKey: r3,
    proteusapp_onBlur: n3,
    proteusapp_onClick: a3,
    proteusapp_onDrag: o3,
    proteusapp_onDropped: c3,
    proteusapp_onFocus: b3,
    proteusapp_onFocusLost: s3,
    proteusapp_onHoverEnter: i3,
    proteusapp_onHoverExit: f3,
    proteusapp_onKey: u3,
    proteusapp_onPress: d3,
    proteusapp_onRelease: g3,
    proteusapp_onTransitionComplete: p3,
    proteusapp_pointerLeft: w3,
    proteusapp_pointerMoved: l3,
    proteusapp_pointerPressed: m3,
    proteusapp_pointerReleased: h3,
    proteusapp_releaseVideo: y3,
    proteusapp_removeChild: x3,
    proteusapp_resetKeyMap: $3,
    proteusapp_setDeclaredGeometry: v3,
    proteusapp_setDefaultFocus: S3,
    proteusapp_setDevices: A3,
    proteusapp_setDisabled: I3,
    proteusapp_setImage: D3,
    proteusapp_setInputDevices: T3,
    proteusapp_setInteractive: F3,
    proteusapp_setKeyRepeat: B3,
    proteusapp_setLongPressMs: P3,
    proteusapp_setNavigatingActions: k3,
    proteusapp_setNeighbour: M3,
    proteusapp_setOpacity: R3,
    proteusapp_setReadingDirection: C3,
    proteusapp_setText: V3,
    proteusapp_setTexture: L3,
    proteusapp_setTransitionInteraction: E3,
    proteusapp_setVideoCrossfade: O3,
    proteusapp_setVisible: G3,
    proteusapp_showVideo: W3,
    proteusapp_splitTo: z3,
    proteusapp_splitToWithBehavior: U3,
    proteusapp_splitToWithStates: q3,
    proteusapp_texture: H3,
    proteusapp_textureState: j3,
    proteusapp_tick: K3,
    proteusapp_transitionChannel: N3,
    proteusapp_unbindKey: J3,
    proteusapp_uploadVideoFrame: Q3,
    texturehandle_fromId: r4,
    texturehandle_id: n4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: p4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: c4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: f4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: u4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: d4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: g4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: s4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: i4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: b4
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  vl(S4);
  zt();
  async function A4(_, e) {
    await bb(_, (t) => e.setup(new T4(t)), e.update ? (t) => {
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
  }, I4 = class {
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
  }, D4 = class {
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
  }, T4 = class {
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
      return new I4(this, this.wasmApp.transitionChannel(e == null ? void 0 : e.id()));
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
      return new D4(this, this.wasmApp.createVideo());
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
  const F4 = "" + new URL("proteus_bench_web_bg-FdbMNici.wasm", import.meta.url).href;
  class h {
    static __wrap(e) {
      const t = Object.create(h.prototype);
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
      return h.__wrap(t);
    }
    id() {
      return s.handle_id(this.__wbg_ptr);
    }
  }
  Symbol.dispose && (h.prototype[Symbol.dispose] = h.prototype.free);
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
      l(e, h), l(t, h);
      const r = s.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw F(r[0]);
    }
    animateTo(e, t, r) {
      l(e, h);
      const n = s.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw F(n[0]);
    }
    bakeTexture(e, t, r, n) {
      const a = h_(r, s.__wbindgen_malloc), o = k, c = s.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, o, n);
      return K.__wrap(c);
    }
    bakedImageSize(e) {
      return l(e, h), s.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return l(e, h), s.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bindKey(e, t) {
      const r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k, a = s.proteusapp_bindKey(this.__wbg_ptr, e, r, n);
      if (a[1]) throw F(a[0]);
    }
    channelDestroy(e) {
      l(e, Q);
      var t = e.__destroy_into_raw();
      s.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      l(e, Q), l(t, h), l(r, h);
      const o = s.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (o[1]) throw F(o[0]);
    }
    clearFocus() {
      s.proteusapp_clearFocus(this.__wbg_ptr);
    }
    component(e) {
      const t = s.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw F(t[1]);
      return h.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      l(e, h), l(t, h);
      const r = s.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = s.proteusapp_createVideo(this.__wbg_ptr);
      return X.__wrap(e);
    }
    cropImage(e, t) {
      l(e, h);
      const r = s.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      l(e, h);
      const r = s.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    declaredGeometry(e) {
      return l(e, h), s.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      l(e, h);
      var t = e.__destroy_into_raw();
      const r = s.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    devices(e) {
      return l(e, h), s.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    focus(e) {
      l(e, h);
      const t = s.proteusapp_focus(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
    }
    focused() {
      const e = s.proteusapp_focused(this.__wbg_ptr);
      return e === 0 ? void 0 : h.__wrap(e);
    }
    freeResources(e) {
      l(e, h);
      const t = s.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
    }
    get(e) {
      return l(e, h), s.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      l(e, h);
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
      return l(e, h), s.proteusapp_isFocused(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    loadTexture(e, t) {
      const r = h_(e, s.__wbindgen_malloc), n = k, a = s.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : K.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      l(e, h);
      const a = t_(t, s.__wbindgen_malloc), o = k, c = s.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw F(c[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      l(e, h);
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
      l(e, h), s.proteusapp_onBlur(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onClick(e, t) {
      l(e, h), s.proteusapp_onClick(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDrag(e, t) {
      l(e, h), s.proteusapp_onDrag(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDropped(e, t) {
      l(e, Q), s.proteusapp_onDropped(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocus(e, t) {
      l(e, h), s.proteusapp_onFocus(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocusLost(e) {
      s.proteusapp_onFocusLost(this.__wbg_ptr, e);
    }
    onHoverEnter(e, t) {
      l(e, h), s.proteusapp_onHoverEnter(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverExit(e, t) {
      l(e, h), s.proteusapp_onHoverExit(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onKey(e, t) {
      l(e, h), s.proteusapp_onKey(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onPress(e, t) {
      l(e, h), s.proteusapp_onPress(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onRelease(e, t) {
      l(e, h), s.proteusapp_onRelease(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onTransitionComplete(e, t) {
      l(e, h), s.proteusapp_onTransitionComplete(this.__wbg_ptr, e.__wbg_ptr, t);
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
      l(e, h), l(t, h);
      const r = s.proteusapp_removeChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw F(r[0]);
    }
    resetKeyMap() {
      s.proteusapp_resetKeyMap(this.__wbg_ptr);
    }
    setDeclaredGeometry(e, t) {
      l(e, h);
      const r = s.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDefaultFocus(e, t) {
      l(e, h);
      const r = s.proteusapp_setDefaultFocus(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDevices(e, t) {
      l(e, h);
      const r = s.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDisabled(e, t) {
      l(e, h);
      const r = s.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setImage(e, t) {
      l(e, h);
      const r = s.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setInputDevices(e) {
      const t = s.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw F(t[0]);
    }
    setInteractive(e, t) {
      l(e, h);
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
      const t = aA(e, s.__wbindgen_malloc), r = k;
      s.proteusapp_setNavigatingActions(this.__wbg_ptr, t, r);
    }
    setNeighbour(e, t, r) {
      l(e, h);
      const n = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k, o = s.proteusapp_setNeighbour(this.__wbg_ptr, e.__wbg_ptr, n, a, !v(r), v(r) ? 0 : r);
      if (o[1]) throw F(o[0]);
    }
    setOpacity(e, t) {
      l(e, h);
      const r = s.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setReadingDirection(e) {
      const t = G(e, s.__wbindgen_malloc, s.__wbindgen_realloc), r = k, n = s.proteusapp_setReadingDirection(this.__wbg_ptr, t, r);
      if (n[1]) throw F(n[0]);
    }
    setText(e, t) {
      l(e, h);
      const r = s.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setTexture(e, t) {
      l(e, h), l(t, K);
      const r = s.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      l(e, h);
      const r = s.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setVideoCrossfade(e, t) {
      l(e, h);
      const r = s.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      l(e, h);
      const r = s.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    showVideo(e, t) {
      l(e, h), l(t, X);
      const r = s.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      l(e, h);
      const a = t_(t, s.__wbindgen_malloc), o = k, c = s.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw F(c[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      l(e, h);
      const o = t_(t, s.__wbindgen_malloc), c = k, b = s.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
      if (b[1]) throw F(b[0]);
    }
    splitToWithStates(e, t, r, n) {
      l(e, h);
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
  function B4() {
    s.clear();
  }
  function P4(_) {
    s.on_frame(_);
  }
  function k4(_, e) {
    const t = G(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = k;
    s.show(t, r, e);
  }
  function M4(_, e) {
    const t = G(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = k;
    return s.start(t, r, e);
  }
  function R4() {
    s.stop_frames();
  }
  function C4(_, e) {
    return Error(S(_, e));
  }
  function V4(_) {
    return Number(_);
  }
  function L4(_, e) {
    const t = String(e), r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function E4(_) {
    return _.Window;
  }
  function O4(_) {
    return _.WorkerGlobalScope;
  }
  function G4(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    M().setBigInt64(_ + 8, v(r) ? BigInt(0) : r, true), M().setInt32(_ + 0, !v(r), true);
  }
  function W4(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return v(t) ? 16777215 : t ? 1 : 0;
  }
  function z4(_, e) {
    const t = R_(e), r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function U4(_, e) {
    return _ in e;
  }
  function q4(_) {
    return typeof _ == "bigint";
  }
  function H4(_) {
    return typeof _ == "function";
  }
  function j4(_) {
    return _ === null;
  }
  function K4(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function N4(_) {
    return typeof _ == "string";
  }
  function J4(_) {
    return _ === void 0;
  }
  function Q4(_, e) {
    return _ === e;
  }
  function X4(_, e) {
    return _ == e;
  }
  function Y4(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    M().setFloat64(_ + 8, v(r) ? 0 : r, true), M().setInt32(_ + 0, !v(r), true);
  }
  function Z4(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function em(_, e) {
    throw new Error(S(_, e));
  }
  function _m(_) {
    _._wbg_cb_unref();
  }
  function tm(_) {
    _.abort();
  }
  function rm(_) {
    return _.aborted;
  }
  function nm(_, e) {
    _.activeTexture(e >>> 0);
  }
  function am(_, e) {
    _.activeTexture(e >>> 0);
  }
  function om() {
    return g(function(_, e, t, r) {
      _.addEventListener(S(e, t), r);
    }, arguments);
  }
  function cm(_) {
    return _.altKey;
  }
  function bm() {
    return g(function(_) {
      return _.arrayBuffer();
    }, arguments);
  }
  function sm(_, e, t) {
    _.attachShader(e, t);
  }
  function im(_, e, t) {
    _.attachShader(e, t);
  }
  function fm(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function um() {
    return g(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function dm(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function gm(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function pm(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function wm(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function lm(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function mm(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function hm(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function ym(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function xm(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function $m(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function vm(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Sm(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Am(_, e) {
    _.bindVertexArrayOES(e);
  }
  function Im(_, e) {
    _.bindVertexArray(e);
  }
  function Dm(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Tm(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Fm(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Bm(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Pm(_, e) {
    _.blendEquation(e >>> 0);
  }
  function km(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Mm(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Rm(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Cm(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function Vm(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function Lm(_, e, t, r, n, a, o, c, b, f, d) {
    _.blitFramebuffer(e, t, r, n, a, o, c, b, f >>> 0, d >>> 0);
  }
  function Em(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Om(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Gm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Wm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function zm(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function Um(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function qm(_) {
    return _.button;
  }
  function Hm() {
    return g(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function jm() {
    return g(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Km() {
    return g(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function Nm(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, O(r, n));
  }
  function Jm(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, ee(r, n));
  }
  function Qm(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, Se(r, n));
  }
  function Xm(_, e) {
    _.clearDepth(e);
  }
  function Ym(_, e) {
    _.clearDepth(e);
  }
  function Zm(_, e) {
    _.clearStencil(e);
  }
  function e7(_, e) {
    _.clearStencil(e);
  }
  function _7(_, e) {
    _.clear(e >>> 0);
  }
  function t7(_, e) {
    _.clear(e >>> 0);
  }
  function r7(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function n7(_, e) {
    const t = e.code, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function a7(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function o7(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function c7(_, e) {
    _.compileShader(e);
  }
  function b7(_, e) {
    _.compileShader(e);
  }
  function s7(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function i7(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function f7(_, e, t, r, n, a, o, c, b, f) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b, f);
  }
  function u7(_, e, t, r, n, a, o, c, b, f, d, I) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d, I);
  }
  function d7(_, e, t, r, n, a, o, c, b, f, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d);
  }
  function g7() {
    return g(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function p7(_) {
    return _.contentRect;
  }
  function w7(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function l7(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function m7(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function h7(_, e, t, r, n, a, o, c, b, f) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f);
  }
  function y7() {
    return g(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function x7() {
    return g(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function $7(_, e) {
    return _.createBindGroup(e);
  }
  function v7(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : P(e);
  }
  function S7() {
    return g(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function A7(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : P(e);
  }
  function I7(_, e) {
    return _.createCommandEncoder(e);
  }
  function D7(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : P(e);
  }
  function T7(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : P(e);
  }
  function F7(_, e) {
    return _.createPipelineLayout(e);
  }
  function B7(_) {
    const e = _.createProgram();
    return v(e) ? 0 : P(e);
  }
  function P7(_) {
    const e = _.createProgram();
    return v(e) ? 0 : P(e);
  }
  function k7(_) {
    const e = _.createQuery();
    return v(e) ? 0 : P(e);
  }
  function M7() {
    return g(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function R7(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : P(e);
  }
  function C7(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : P(e);
  }
  function V7(_, e) {
    return _.createSampler(e);
  }
  function L7(_) {
    const e = _.createSampler();
    return v(e) ? 0 : P(e);
  }
  function E7(_, e) {
    return _.createShaderModule(e);
  }
  function O7(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : P(t);
  }
  function G7(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : P(t);
  }
  function W7(_) {
    const e = _.createTexture();
    return v(e) ? 0 : P(e);
  }
  function z7(_) {
    const e = _.createTexture();
    return v(e) ? 0 : P(e);
  }
  function U7() {
    return g(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function q7(_) {
    const e = _.createVertexArrayOES();
    return v(e) ? 0 : P(e);
  }
  function H7(_) {
    const e = _.createVertexArray();
    return v(e) ? 0 : P(e);
  }
  function j7() {
    return g(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function K7(_) {
    return _.ctrlKey;
  }
  function N7(_, e) {
    _.cullFace(e >>> 0);
  }
  function J7(_, e) {
    _.cullFace(e >>> 0);
  }
  function Q7(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function X7(_, e) {
    _.deleteBuffer(e);
  }
  function Y7(_, e) {
    _.deleteBuffer(e);
  }
  function Z7(_, e) {
    _.deleteFramebuffer(e);
  }
  function e6(_, e) {
    _.deleteFramebuffer(e);
  }
  function _6(_, e) {
    _.deleteProgram(e);
  }
  function t6(_, e) {
    _.deleteProgram(e);
  }
  function r6(_, e) {
    _.deleteQuery(e);
  }
  function n6(_, e) {
    _.deleteRenderbuffer(e);
  }
  function a6(_, e) {
    _.deleteRenderbuffer(e);
  }
  function o6(_, e) {
    _.deleteSampler(e);
  }
  function c6(_, e) {
    _.deleteShader(e);
  }
  function b6(_, e) {
    _.deleteShader(e);
  }
  function s6(_, e) {
    _.deleteSync(e);
  }
  function i6(_, e) {
    _.deleteTexture(e);
  }
  function f6(_, e) {
    _.deleteTexture(e);
  }
  function u6(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function d6(_, e) {
    _.deleteVertexArray(e);
  }
  function g6(_, e) {
    _.depthFunc(e >>> 0);
  }
  function p6(_, e) {
    _.depthFunc(e >>> 0);
  }
  function w6(_, e) {
    _.depthMask(e !== 0);
  }
  function l6(_, e) {
    _.depthMask(e !== 0);
  }
  function m6(_, e, t) {
    _.depthRange(e, t);
  }
  function h6(_, e, t) {
    _.depthRange(e, t);
  }
  function y6(_, e) {
    const t = e.description, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function x6(_) {
    _.destroy();
  }
  function $6(_) {
    return _.devicePixelRatio;
  }
  function v6(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function S6(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function A6(_, e) {
    _.disable(e >>> 0);
  }
  function I6(_, e) {
    _.disable(e >>> 0);
  }
  function D6(_) {
    const e = _.document;
    return v(e) ? 0 : P(e);
  }
  function T6(_) {
    return _.done;
  }
  function F6(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function B6(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function P6(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function k6(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function M6(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function R6(_, e) {
    _.drawBuffers(e);
  }
  function C6(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function V6(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function L6(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function E6(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function O6(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function G6(_, e) {
    _.enable(e >>> 0);
  }
  function W6(_, e) {
    _.enable(e >>> 0);
  }
  function z6(_, e) {
    _.endQuery(e >>> 0);
  }
  function U6(_) {
    _.end();
  }
  function q6(_) {
    return Object.entries(_);
  }
  function H6(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function j6(_) {
    console.error(_);
  }
  function K6(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(S(_, e));
    } finally {
      s.__wbindgen_free(t, r, 1);
    }
  }
  function N6(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return v(r) ? 0 : P(r);
  }
  function J6(_, e, t) {
    return _.fetch(S(e, t));
  }
  function Q6(_, e, t, r) {
    return _.fetch(S(e, t), r);
  }
  function X6(_) {
    return _.finish();
  }
  function Y6(_, e) {
    return _.finish(e);
  }
  function Z6(_) {
    _.flush();
  }
  function e8(_) {
    _.flush();
  }
  function _8() {
    return g(function(_) {
      _.focus();
    }, arguments);
  }
  function t8(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function r8(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function n8(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function a8(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function o8(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function c8(_, e, t, r, n, a, o) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, o);
  }
  function b8(_, e) {
    _.frontFace(e >>> 0);
  }
  function s8(_, e) {
    _.frontFace(e >>> 0);
  }
  function i8(_) {
    return _.getBoundingClientRect();
  }
  function f8(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function u8() {
    return g(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : P(n);
    }, arguments);
  }
  function d8() {
    return g(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : P(r);
    }, arguments);
  }
  function g8() {
    return g(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : P(r);
    }, arguments);
  }
  function p8() {
    return g(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : P(n);
    }, arguments);
  }
  function w8() {
    return g(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function l8(_, e, t) {
    const r = _.getElementById(S(e, t));
    return v(r) ? 0 : P(r);
  }
  function m8() {
    return g(function(_, e, t) {
      const r = _.getExtension(S(e, t));
      return v(r) ? 0 : P(r);
    }, arguments);
  }
  function h8() {
    return g(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function y8() {
    return g(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function x8() {
    return g(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function $8() {
    return g(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function v8(_) {
    const e = _.getPreferredCanvasFormat();
    return (be.indexOf(e) + 1 || 96) - 1;
  }
  function S8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function A8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function I8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function D8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function T8(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function F8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function B8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = k;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function P8(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function k8(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function M8(_) {
    const e = _.getSupportedExtensions();
    return v(e) ? 0 : P(e);
  }
  function R8(_) {
    const e = _.getSupportedProfiles();
    return v(e) ? 0 : P(e);
  }
  function C8(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function V8(_, e, t, r) {
    return _.getUniformBlockIndex(e, S(t, r));
  }
  function L8(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : P(n);
  }
  function E8(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : P(n);
  }
  function O8(_, e) {
    return _[e >>> 0];
  }
  function G8(_, e) {
    const t = _[e >>> 0];
    return v(t) ? 0 : P(t);
  }
  function W8() {
    return g(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function z8(_, e) {
    return _[e >>> 0];
  }
  function U8(_, e) {
    return _[e];
  }
  function q8(_) {
    return _.gpu;
  }
  function H8(_, e, t) {
    return _.hasAttribute(S(e, t));
  }
  function j8(_) {
    return _.height;
  }
  function K8(_) {
    return _.height;
  }
  function N8(_) {
    return _.hidden;
  }
  function J8(_, e, t) {
    return _.includes(e, t);
  }
  function Q8(_) {
    return _.info;
  }
  function X8(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function Y8(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function Z8(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function e5(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function _5(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function t5(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function r5(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function n5(_) {
    let e;
    try {
      e = _ instanceof Response;
    } catch {
      e = false;
    }
    return e;
  }
  function a5(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function o5(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function c5(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function b5() {
    return g(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function s5(_) {
    return Array.isArray(_);
  }
  function i5(_) {
    return _.isComposing;
  }
  function f5(_) {
    return Number.isSafeInteger(_);
  }
  function u5(_, e) {
    return Object.is(_, e);
  }
  function d5() {
    return Symbol.iterator;
  }
  function g5(_, e) {
    const t = e.key, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function p5(_, e) {
    const t = e.label, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function w5(_) {
    return _.length;
  }
  function l5(_) {
    return _.length;
  }
  function m5(_) {
    return _.limits;
  }
  function h5(_) {
    return _.limits;
  }
  function y5(_, e) {
    _.linkProgram(e);
  }
  function x5(_, e) {
    _.linkProgram(e);
  }
  function $5(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function v5(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function S5(_) {
    return _.maxBindGroups;
  }
  function A5(_) {
    return _.maxBindingsPerBindGroup;
  }
  function I5(_) {
    return _.maxBufferSize;
  }
  function D5(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function T5(_) {
    return _.maxColorAttachments;
  }
  function F5(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function B5(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function P5(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function k5(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function M5(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function R5(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function C5(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function V5(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function L5(_) {
    return _.maxInterStageShaderVariables;
  }
  function E5(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function O5(_) {
    return _.maxSamplersPerShaderStage;
  }
  function G5(_) {
    return _.maxStorageBufferBindingSize;
  }
  function W5(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function z5(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function U5(_) {
    return _.maxTextureArrayLayers;
  }
  function q5(_) {
    return _.maxTextureDimension1D;
  }
  function H5(_) {
    return _.maxTextureDimension2D;
  }
  function j5(_) {
    return _.maxTextureDimension3D;
  }
  function K5(_) {
    return _.maxUniformBufferBindingSize;
  }
  function N5(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function J5(_) {
    return _.maxVertexAttributes;
  }
  function Q5(_) {
    return _.maxVertexBufferArrayStride;
  }
  function X5(_) {
    return _.maxVertexBuffers;
  }
  function Y5(_) {
    return _.metaKey;
  }
  function Z5(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function e9(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function _9(_) {
    return _.navigator;
  }
  function t9(_) {
    return _.navigator;
  }
  function r9() {
    return g(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function n9() {
    return new Error();
  }
  function a9() {
    return new Object();
  }
  function o9() {
    return new Array();
  }
  function c9() {
    return g(function() {
      return new AbortController();
    }, arguments);
  }
  function b9(_) {
    return new Uint8Array(_);
  }
  function s9(_, e) {
    return new Error(S(_, e));
  }
  function i9(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, o) => {
        const c = t.a;
        t.a = 0;
        try {
          return MS(c, t.b, a, o);
        } finally {
          t.a = c;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function f9(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function u9() {
    return g(function(_) {
      return _.next();
    }, arguments);
  }
  function d9(_) {
    return _.next;
  }
  function g9(_) {
    return _.now();
  }
  function p9(_, e) {
    _.observe(e);
  }
  function w9(_) {
    return Array.of(_);
  }
  function l9(_) {
    return _.offsetX;
  }
  function m9(_) {
    return _.offsetY;
  }
  function h9(_) {
    return _.ok;
  }
  function y9(_) {
    return _.onSubmittedWorkDone();
  }
  function x9(_) {
    const e = _.performance;
    return v(e) ? 0 : P(e);
  }
  function $9(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function v9(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function S9(_, e, t) {
    _.polygonOffset(e, t);
  }
  function A9(_, e, t) {
    _.polygonOffset(e, t);
  }
  function I9(_) {
    _.preventDefault();
  }
  function D9(_) {
    return Fe.__wrap(_);
  }
  function T9(_, e, t) {
    Uint8Array.prototype.set.call(i_(_, e), t);
  }
  function F9(_, e) {
    return _.push(e);
  }
  function B9(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function P9() {
    return g(function(_, e, t) {
      return _.querySelectorAll(S(e, t));
    }, arguments);
  }
  function k9() {
    return g(function(_, e, t) {
      const r = _.querySelector(S(e, t));
      return v(r) ? 0 : P(r);
    }, arguments);
  }
  function M9(_) {
    return _.queueMicrotask;
  }
  function R9(_) {
    queueMicrotask(_);
  }
  function C9(_) {
    return _.queue;
  }
  function V9(_, e) {
    _.readBuffer(e >>> 0);
  }
  function L9() {
    return g(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function E9() {
    return g(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function O9() {
    return g(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function G9(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function W9(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function z9(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function U9(_) {
    return _.repeat;
  }
  function q9(_, e) {
    return _.requestAdapter(e);
  }
  function H9(_) {
    return _.requestAdapter();
  }
  function j9() {
    return g(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function K9(_, e) {
    return _.requestDevice(e);
  }
  function N9(_) {
    return Promise.resolve(_);
  }
  function J9(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function Q9(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function X9(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function Y9(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function Z9() {
    return g(function(_, e, t, r, n) {
      _.setAttribute(S(e, t), S(r, n));
    }, arguments);
  }
  function eh() {
    return g(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, Se(r, n), a, o >>> 0);
    }, arguments);
  }
  function _h(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function th(_, e, t, r, n) {
    _.setIndexBuffer(e, Y_[t], r, n);
  }
  function rh(_, e, t, r) {
    _.setIndexBuffer(e, Y_[t], r);
  }
  function nh(_, e) {
    _.setPipeline(e);
  }
  function ah(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function oh(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function ch(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
  }
  function bh(_, e, t) {
    _.set(e, t >>> 0);
  }
  function sh() {
    return g(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function ih(_, e, t) {
    _[e] = t;
  }
  function fh(_, e) {
    _.a = e;
  }
  function uh(_, e) {
    _.access = qS[e];
  }
  function dh(_, e) {
    _.addressModeU = Q_[e];
  }
  function gh(_, e) {
    _.addressModeV = Q_[e];
  }
  function ph(_, e) {
    _.addressModeW = Q_[e];
  }
  function wh(_, e) {
    _.alpha = e;
  }
  function lh(_, e) {
    _.alphaMode = LS[e];
  }
  function mh(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function hh(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function yh(_, e) {
    _.arrayStride = e;
  }
  function xh(_, e) {
    _.aspect = Ht[e];
  }
  function $h(_, e) {
    _.aspect = Ht[e];
  }
  function vh(_, e) {
    _.attributes = e;
  }
  function Sh(_, e) {
    _.b = e;
  }
  function Ah(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function Ih(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function Dh(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function Th(_, e) {
    _.bindGroupLayouts = e;
  }
  function Fh(_, e) {
    _.binding = e >>> 0;
  }
  function Bh(_, e) {
    _.binding = e >>> 0;
  }
  function Ph(_, e) {
    _.blend = e;
  }
  function kh(_, e) {
    _.buffer = e;
  }
  function Mh(_, e) {
    _.buffer = e;
  }
  function Rh(_, e) {
    _.buffers = e;
  }
  function Ch(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function Vh(_, e) {
    _.clearValue = e;
  }
  function Lh(_, e, t) {
    _.code = S(e, t);
  }
  function Eh(_, e) {
    _.colorAttachments = e;
  }
  function Oh(_, e) {
    _.color = e;
  }
  function Gh(_, e) {
    _.compare = X_[e];
  }
  function Wh(_, e) {
    _.compare = X_[e];
  }
  function zh(_, e) {
    _.count = e >>> 0;
  }
  function Uh(_, e) {
    _.cullMode = ES[e];
  }
  function qh(_, e, t) {
    _[e >>> 0] = t;
  }
  function Hh(_, e) {
    _.depthBias = e;
  }
  function jh(_, e) {
    _.depthBiasClamp = e;
  }
  function Kh(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function Nh(_, e) {
    _.depthClearValue = e;
  }
  function Jh(_, e) {
    _.depthCompare = X_[e];
  }
  function Qh(_, e) {
    _.depthFailOp = et[e];
  }
  function Xh(_, e) {
    _.depthLoadOp = Z_[e];
  }
  function Yh(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function Zh(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function ey(_, e) {
    _.depthStencil = e;
  }
  function _y(_, e) {
    _.depthStencilAttachment = e;
  }
  function ty(_, e) {
    _.depthStoreOp = _t[e];
  }
  function ry(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function ny(_, e) {
    _.device = e;
  }
  function ay(_, e) {
    _.dimension = tt[e];
  }
  function oy(_, e) {
    _.dimension = HS[e];
  }
  function cy(_, e) {
    _.dstFactor = Ut[e];
  }
  function by(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function sy(_, e) {
    _.entries = e;
  }
  function iy(_, e) {
    _.entries = e;
  }
  function fy(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function uy(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function dy(_, e) {
    _.externalTexture = e;
  }
  function gy(_, e) {
    _.failOp = et[e];
  }
  function py(_, e) {
    _.format = be[e];
  }
  function wy(_, e) {
    _.format = KS[e];
  }
  function ly(_, e) {
    _.format = be[e];
  }
  function my(_, e) {
    _.format = be[e];
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
    _.fragment = e;
  }
  function vy(_, e) {
    _.frontFace = OS[e];
  }
  function Sy(_, e) {
    _.g = e;
  }
  function Ay(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function Iy(_, e) {
    _.height = e >>> 0;
  }
  function Dy(_, e) {
    _.height = e >>> 0;
  }
  function Ty(_, e) {
    _.height = e >>> 0;
  }
  function Fy(_, e, t) {
    _.label = S(e, t);
  }
  function By(_, e, t) {
    _.label = S(e, t);
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
  function Oy(_, e, t) {
    _.label = S(e, t);
  }
  function Gy(_, e, t) {
    _.label = S(e, t);
  }
  function Wy(_, e, t) {
    _.label = S(e, t);
  }
  function zy(_, e) {
    _.layout = e;
  }
  function Uy(_, e) {
    _.layout = e;
  }
  function qy(_, e) {
    _.loadOp = Z_[e];
  }
  function Hy(_, e) {
    _.lodMaxClamp = e;
  }
  function jy(_, e) {
    _.lodMinClamp = e;
  }
  function Ky(_, e) {
    _.magFilter = qt[e];
  }
  function Ny(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function Jy(_, e) {
    _.mask = e >>> 0;
  }
  function Qy(_, e) {
    _.maxAnisotropy = e;
  }
  function Xy(_, e) {
    _.minBindingSize = e;
  }
  function Yy(_, e) {
    _.minFilter = qt[e];
  }
  function Zy(_, e) {
    _.mipLevel = e >>> 0;
  }
  function ex(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function _x(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function tx(_, e) {
    _.mipmapFilter = GS[e];
  }
  function rx(_, e) {
    _.module = e;
  }
  function nx(_, e) {
    _.module = e;
  }
  function ax(_, e) {
    _.multisample = e;
  }
  function ox(_, e) {
    _.multisampled = e !== 0;
  }
  function cx(_, e) {
    _.offset = e;
  }
  function bx(_, e) {
    _.offset = e;
  }
  function sx(_, e) {
    _.offset = e;
  }
  function ix(_, e) {
    _.operation = CS[e];
  }
  function fx(_, e) {
    _.origin = e;
  }
  function ux(_, e) {
    _.passOp = et[e];
  }
  function dx(_, e) {
    _.powerPreference = WS[e];
  }
  function gx(_, e) {
    _.primitive = e;
  }
  function px(_, e) {
    _.querySet = e;
  }
  function wx(_, e) {
    _.r = e;
  }
  function lx(_, e) {
    _.requiredFeatures = e;
  }
  function mx(_, e) {
    _.requiredLimits = e;
  }
  function hx(_, e) {
    _.resolveTarget = e;
  }
  function yx(_, e) {
    _.resource = e;
  }
  function xx(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function $x(_, e) {
    _.sampleCount = e >>> 0;
  }
  function vx(_, e) {
    _.sampleType = jS[e];
  }
  function Sx(_, e) {
    _.sampler = e;
  }
  function Ax(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function Ix(_, e) {
    _.signal = e;
  }
  function Dx(_, e) {
    _.size = e;
  }
  function Tx(_, e) {
    _.size = e;
  }
  function Fx(_, e) {
    _.size = e;
  }
  function Bx(_, e) {
    _.srcFactor = Ut[e];
  }
  function Px(_, e) {
    _.stencilBack = e;
  }
  function kx(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function Mx(_, e) {
    _.stencilFront = e;
  }
  function Rx(_, e) {
    _.stencilLoadOp = Z_[e];
  }
  function Cx(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function Vx(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function Lx(_, e) {
    _.stencilStoreOp = _t[e];
  }
  function Ex(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function Ox(_, e) {
    _.stepMode = NS[e];
  }
  function Gx(_, e) {
    _.storageTexture = e;
  }
  function Wx(_, e) {
    _.storeOp = _t[e];
  }
  function zx(_, e) {
    _.stripIndexFormat = Y_[e];
  }
  function Ux(_, e) {
    _.targets = e;
  }
  function qx(_, e) {
    _.texture = e;
  }
  function Hx(_, e) {
    _.texture = e;
  }
  function jx(_, e) {
    _.timestampWrites = e;
  }
  function Kx(_, e) {
    _.topology = zS[e];
  }
  function Nx(_, e) {
    _.type = VS[e];
  }
  function Jx(_, e) {
    _.type = US[e];
  }
  function Qx(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function Xx(_, e) {
    _.usage = e >>> 0;
  }
  function Yx(_, e) {
    _.usage = e >>> 0;
  }
  function Zx(_, e) {
    _.usage = e >>> 0;
  }
  function e$(_, e) {
    _.usage = e >>> 0;
  }
  function _$(_, e) {
    _.vertex = e;
  }
  function t$(_, e) {
    _.view = e;
  }
  function r$(_, e) {
    _.view = e;
  }
  function n$(_, e) {
    _.viewDimension = tt[e];
  }
  function a$(_, e) {
    _.viewDimension = tt[e];
  }
  function o$(_, e) {
    _.viewFormats = e;
  }
  function c$(_, e) {
    _.viewFormats = e;
  }
  function b$(_, e) {
    _.visibility = e >>> 0;
  }
  function s$(_, e) {
    _.width = e >>> 0;
  }
  function i$(_, e) {
    _.width = e >>> 0;
  }
  function f$(_, e) {
    _.width = e >>> 0;
  }
  function u$(_, e) {
    _.writeMask = e >>> 0;
  }
  function d$(_, e) {
    _.x = e >>> 0;
  }
  function g$(_, e) {
    _.y = e >>> 0;
  }
  function p$(_, e) {
    _.z = e >>> 0;
  }
  function w$(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function l$(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function m$(_) {
    return _.shiftKey;
  }
  function h$(_) {
    return _.signal;
  }
  function y$(_, e) {
    const t = e.stack, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function x$() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return v(_) ? 0 : P(_);
  }
  function $$() {
    const _ = typeof global > "u" ? null : global;
    return v(_) ? 0 : P(_);
  }
  function v$() {
    const _ = typeof self > "u" ? null : self;
    return v(_) ? 0 : P(_);
  }
  function S$() {
    const _ = typeof window > "u" ? null : window;
    return v(_) ? 0 : P(_);
  }
  function A$(_, e) {
    const t = e.statusText, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = k;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function I$(_) {
    return _.status;
  }
  function D$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function T$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function F$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function B$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function P$(_, e) {
    _.stencilMask(e >>> 0);
  }
  function k$(_, e) {
    _.stencilMask(e >>> 0);
  }
  function M$(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function R$(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function C$(_, e) {
    _.submit(e);
  }
  function V$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function L$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function E$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function O$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function G$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function W$(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function z$(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function U$(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function q$(_, e, t, r, n, a, o) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, o);
  }
  function H$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function j$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
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
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function ev() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
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
  function ov(_, e, t) {
    return _.then(e, t);
  }
  function cv(_, e, t) {
    return _.then(e, t);
  }
  function bv(_, e) {
    return _.then(e);
  }
  function sv(_, e, t) {
    _.uniform1f(e, t);
  }
  function iv(_, e, t) {
    _.uniform1f(e, t);
  }
  function fv(_, e, t) {
    _.uniform1i(e, t);
  }
  function uv(_, e, t) {
    _.uniform1i(e, t);
  }
  function dv(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function gv(_, e, t, r) {
    _.uniform2fv(e, O(t, r));
  }
  function pv(_, e, t, r) {
    _.uniform2fv(e, O(t, r));
  }
  function wv(_, e, t, r) {
    _.uniform2iv(e, ee(t, r));
  }
  function lv(_, e, t, r) {
    _.uniform2iv(e, ee(t, r));
  }
  function mv(_, e, t, r) {
    _.uniform2uiv(e, Se(t, r));
  }
  function hv(_, e, t, r) {
    _.uniform3fv(e, O(t, r));
  }
  function yv(_, e, t, r) {
    _.uniform3fv(e, O(t, r));
  }
  function xv(_, e, t, r) {
    _.uniform3iv(e, ee(t, r));
  }
  function $v(_, e, t, r) {
    _.uniform3iv(e, ee(t, r));
  }
  function vv(_, e, t, r) {
    _.uniform3uiv(e, Se(t, r));
  }
  function Sv(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function Av(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function Iv(_, e, t, r) {
    _.uniform4fv(e, O(t, r));
  }
  function Dv(_, e, t, r) {
    _.uniform4fv(e, O(t, r));
  }
  function Tv(_, e, t, r) {
    _.uniform4iv(e, ee(t, r));
  }
  function Fv(_, e, t, r) {
    _.uniform4iv(e, ee(t, r));
  }
  function Bv(_, e, t, r) {
    _.uniform4uiv(e, Se(t, r));
  }
  function Pv(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function kv(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, O(r, n));
  }
  function Mv(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, O(r, n));
  }
  function Rv(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, O(r, n));
  }
  function Cv(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, O(r, n));
  }
  function Vv(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, O(r, n));
  }
  function Lv(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, O(r, n));
  }
  function Ev(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, O(r, n));
  }
  function Ov(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, O(r, n));
  }
  function Gv(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, O(r, n));
  }
  function Wv(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, O(r, n));
  }
  function zv(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, O(r, n));
  }
  function Uv(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, O(r, n));
  }
  function qv(_) {
    _.unmap();
  }
  function Hv(_, e) {
    _.useProgram(e);
  }
  function jv(_, e) {
    _.useProgram(e);
  }
  function Kv(_) {
    return _.value;
  }
  function Nv(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function Jv(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function Qv(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function Xv(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function Yv(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function Zv(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function eS(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function _S(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function tS(_) {
    return _.width;
  }
  function rS(_) {
    return _.width;
  }
  function nS() {
    return g(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, i_(r, n), a, o);
    }, arguments);
  }
  function aS() {
    return g(function(_, e, t, r, n, a) {
      _.writeTexture(e, i_(t, r), n, a);
    }, arguments);
  }
  function oS(_, e) {
    return _e(_, e, DS);
  }
  function cS(_, e) {
    return _e(_, e, kS);
  }
  function bS(_, e) {
    return _e(_, e, RS);
  }
  function sS(_, e) {
    return _e(_, e, TS);
  }
  function iS(_, e) {
    return _e(_, e, FS);
  }
  function fS(_, e) {
    return _e(_, e, BS);
  }
  function uS(_, e) {
    return _e(_, e, PS);
  }
  function dS(_, e) {
    return _e(_, e, IS);
  }
  function gS(_) {
    return _;
  }
  function pS(_) {
    return _;
  }
  function wS(_, e) {
    return O(_, e);
  }
  function lS(_, e) {
    return JS(_, e);
  }
  function mS(_, e) {
    return ee(_, e);
  }
  function hS(_, e) {
    return QS(_, e);
  }
  function yS(_, e) {
    return XS(_, e);
  }
  function xS(_, e) {
    return Se(_, e);
  }
  function $S(_, e) {
    return i_(_, e);
  }
  function vS(_, e) {
    return S(_, e);
  }
  function SS(_) {
    return BigInt.asUintN(64, _);
  }
  function AS() {
    const _ = s.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function IS(_, e) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function DS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function TS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function FS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function BS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function PS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6(_, e, t);
  }
  function kS(_, e, t) {
    const r = s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (r[1]) throw F(r[0]);
  }
  function MS(_, e, t, r) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, r);
  }
  function RS(_, e, t) {
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
  ], CS = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], VS = [
    "uniform",
    "storage",
    "read-only-storage"
  ], LS = [
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
  ], ES = [
    "none",
    "front",
    "back"
  ], qt = [
    "nearest",
    "linear"
  ], OS = [
    "ccw",
    "cw"
  ], Y_ = [
    "uint16",
    "uint32"
  ], Z_ = [
    "load",
    "clear"
  ], GS = [
    "nearest",
    "linear"
  ], WS = [
    "low-power",
    "high-performance"
  ], zS = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], US = [
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
  ], qS = [
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
  ], HS = [
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
  ], jS = [
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
  ], KS = [
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
  ], NS = [
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
  function O(_, e) {
    return _ = _ >>> 0, YS().subarray(_ / 4, _ / 4 + e);
  }
  function JS(_, e) {
    return _ = _ >>> 0, eA().subarray(_ / 2, _ / 2 + e);
  }
  function ee(_, e) {
    return _ = _ >>> 0, _A().subarray(_ / 4, _ / 4 + e);
  }
  function QS(_, e) {
    return _ = _ >>> 0, tA().subarray(_ / 1, _ / 1 + e);
  }
  function XS(_, e) {
    return _ = _ >>> 0, rA().subarray(_ / 2, _ / 2 + e);
  }
  function Se(_, e) {
    return _ = _ >>> 0, nA().subarray(_ / 4, _ / 4 + e);
  }
  function i_(_, e) {
    return _ = _ >>> 0, he().subarray(_ / 1, _ / 1 + e);
  }
  let fe = null;
  function M() {
    return (fe === null || fe.buffer.detached === true || fe.buffer.detached === void 0 && fe.buffer !== s.memory.buffer) && (fe = new DataView(s.memory.buffer)), fe;
  }
  let Ne = null;
  function YS() {
    return (Ne === null || Ne.byteLength === 0) && (Ne = new Float32Array(s.memory.buffer)), Ne;
  }
  let Je = null;
  function ZS() {
    return (Je === null || Je.byteLength === 0) && (Je = new Float64Array(s.memory.buffer)), Je;
  }
  let Qe = null;
  function eA() {
    return (Qe === null || Qe.byteLength === 0) && (Qe = new Int16Array(s.memory.buffer)), Qe;
  }
  let Xe = null;
  function _A() {
    return (Xe === null || Xe.byteLength === 0) && (Xe = new Int32Array(s.memory.buffer)), Xe;
  }
  let Ye = null;
  function tA() {
    return (Ye === null || Ye.byteLength === 0) && (Ye = new Int8Array(s.memory.buffer)), Ye;
  }
  function S(_, e) {
    return cA(_ >>> 0, e);
  }
  let Ze = null;
  function rA() {
    return (Ze === null || Ze.byteLength === 0) && (Ze = new Uint16Array(s.memory.buffer)), Ze;
  }
  let e_ = null;
  function nA() {
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
    return ZS().set(_, t / 8), k = _.length, t;
  }
  function aA(_, e) {
    const t = e(_.length * 4, 4) >>> 0;
    for (let r = 0; r < _.length; r++) {
      const n = P(_[r]);
      M().setUint32(t + 4 * r, n, true);
    }
    return k = _.length, t;
  }
  function G(_, e, t) {
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
  const oA = 2146435072;
  let y_ = 0;
  function cA(_, e) {
    return y_ += e, y_ >= oA && (a_ = new TextDecoder("utf-8", {
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
  function bA(_) {
    s = _;
  }
  URL = globalThis.URL;
  const sA = await O_({
    "./proteus_bench_web_bg.js": {
      __wbg_call_5575218572ead796: jm,
      __wbg_new_typed_00a409eb4ec4f2d9: i9,
      __wbg_then_05edfc8a4fea5106: ov,
      __wbg_get_unchecked_54a4374c38e08460: z8,
      __wbg_next_0c4066e251d2eff9: u9,
      __wbg_done_b62d4a7d2286852a: T6,
      __wbg_value_49f783bb59765962: Kv,
      __wbg_length_c6054974c0a6cdb9: l5,
      __wbg_instanceof_Map_afa18d5840c04c15: t5,
      __wbg_get_197a3fe98f169e38: O8,
      __wbg_new_227d7c05414eb861: n9,
      __wbg_stack_3b0d974bbf31e44f: y$,
      __wbg_error_a6fa202b58aa1cd3: K6,
      __wbg_push_f724b5db8acf89d2: F9,
      __wbg_proteusapp_new: D9,
      __wbg_call_0e855b388e315e17: Hm,
      __wbg_call_8e98ed2f3c86c4b5: Km,
      __wbg_set_dc601f4a69da0bc2: qh,
      __wbg_get_with_ref_key_6412cf3094599694: U8,
      __wbg_set_6be42768c690e380: ih,
      __wbg_String_8564e559799eccda: L4,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: e5,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: q5,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: H5,
      __wbg_maxTextureDimension3D_06ee54121b37d431: j5,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: U5,
      __wbg_maxBindGroups_14611ac9ed1c6b56: S5,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: A5,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: V5,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: C5,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: E5,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: O5,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: W5,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: z5,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: N5,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: K5,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: G5,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: X5,
      __wbg_maxBufferSize_f7ce3e1856349d2f: I5,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: J5,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: Q5,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: L5,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: e9,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: Z5,
      __wbg_maxColorAttachments_fd9187f9f786da18: T5,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: D5,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: M5,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: F5,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: B5,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: P5,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: k5,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: R5,
      __wbg_description_18d0a6d4077fec8e: y6,
      __wbg_set_dst_factor_1ed75271a89a711e: cy,
      __wbg_set_operation_b5862f5a1a143b30: ix,
      __wbg_set_src_factor_1c4f755f8676df1b: Bx,
      __wbg_set_texture_16d2be474ce6ad0c: qx,
      __wbg_set_mip_level_246db61be15bdd69: Zy,
      __wbg_set_x_56f0c2c08a62725c: d$,
      __wbg_set_y_04fb8ce84735b4e1: g$,
      __wbg_set_z_a51316db27a4941e: p$,
      __wbg_set_origin_9b3b0fbe0a5dc469: fx,
      __wbg_set_aspect_77332ac136ee94eb: xh,
      __wbg_Window_a07901001eb4269f: E4,
      __wbg_gpu_a7c12045c25d009a: q8,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: O4,
      __wbg_set_a_5f6e488475272136: fh,
      __wbg_set_b_688365d692bba214: Sh,
      __wbg_set_g_d4d1d77cf8fdd362: Sy,
      __wbg_set_r_527e5a41c4b1a846: wx,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: Z8,
      __wbg_queue_65d985f3e6d786a6: C9,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: dx,
      __wbg_requestAdapter_9ff5c9d1ff271165: q9,
      __wbg_set_required_limits_3b031f66f838f4e3: mx,
      __wbg_set_required_features_54918de8185c5fab: lx,
      __wbg_set_label_bae57fb9f24fde5c: Cy,
      __wbg_requestDevice_c1c34f88a477e509: K9,
      __wbg_limits_50a8c5e629dbfe40: h5,
      __wbg_info_22dcf1fd1b12bc7d: Q8,
      __wbg_set_size_41cd9255ca1e4242: Tx,
      __wbg_set_usage_908213a4d4bb8bde: Zx,
      __wbg_set_mapped_at_creation_48de4735fab51e78: Ny,
      __wbg_set_label_cd567b7b35838e4c: Ey,
      __wbg_createBuffer_2f08c0205e04efca: S7,
      __wbg_set_address_mode_u_a37cf1035585c638: dh,
      __wbg_set_address_mode_v_8ac049e029caef76: gh,
      __wbg_set_address_mode_w_eb9260ee11729e92: ph,
      __wbg_set_compare_42211fbf15e3b850: Wh,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: Hy,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: jy,
      __wbg_set_mag_filter_69d846b974d4bcc0: Ky,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: Yy,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: tx,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: Qy,
      __wbg_set_label_dcd98efbb9370da8: Gy,
      __wbg_createSampler_248bd67c920af37d: V7,
      __wbg_set_width_1a5e2e86fa5bdcd8: i$,
      __wbg_set_height_e8b5483b8c117d5e: Dy,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: Yh,
      __wbg_set_format_e9d4b1475bb3bd3b: yy,
      __wbg_set_size_a61ff22205255d61: Fx,
      __wbg_set_usage_7fa9cd18d1104aca: Yx,
      __wbg_set_label_0c1bd0e976cf0a9a: By,
      __wbg_set_dimension_36e13ccecae5af4b: oy,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: _x,
      __wbg_set_sample_count_865e1d19b84e27e6: $x,
      __wbg_set_view_formats_bab284fc81b40e70: o$,
      __wbg_createTexture_9e76b80a2dc0d12e: U7,
      __wbg_set_entries_fc76ca4d7da6a709: iy,
      __wbg_set_layout_eeef59714f5bf48b: Uy,
      __wbg_set_label_f92ae11c77d74198: Wy,
      __wbg_createBindGroup_2320df4db188406c: $7,
      __wbg_set_code_56e2d45ec1ff6c2d: Lh,
      __wbg_set_label_be45aed56e4b9fee: Vy,
      __wbg_createShaderModule_53701de4fb271c90: E7,
      __wbg_set_label_d1c24b5a7a3ac31d: Oy,
      __wbg_createCommandEncoder_cd88faca35d9ed68: I7,
      __wbg_set_bind_group_layouts_5325d038771af328: Th,
      __wbg_set_label_2f592bd1be3db6b3: My,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: F7,
      __wbg_set_module_14e471fdd94c582d: nx,
      __wbg_set_entry_point_8db3b6d103e3b865: uy,
      __wbg_set_buffers_85a7238f4ef28ab4: Rh,
      __wbg_set_layout_7c5ba5bdcde8a0f0: zy,
      __wbg_set_vertex_a4951dd9a7a4ed54: _$,
      __wbg_set_label_c47c451211e2f6d2: Ly,
      __wbg_set_format_f9341112e43ea182: xy,
      __wbg_set_depth_compare_30e9ea552da12fe2: Jh,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: ry,
      __wbg_set_depth_bias_428c9340b0fd937b: Hh,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: jh,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: Kh,
      __wbg_set_compare_1509dc1a5420943f: Gh,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: Qh,
      __wbg_set_fail_op_77ab26c98f847b65: gy,
      __wbg_set_pass_op_e9470d1262fb8a8b: ux,
      __wbg_set_stencil_back_6ef4683123b19b25: Px,
      __wbg_set_stencil_front_aeb8580a97e5424b: Mx,
      __wbg_set_stencil_read_mask_2954f260d47349ea: Cx,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: Ex,
      __wbg_set_depth_stencil_1bd50dbc450c8650: ey,
      __wbg_set_module_08ad08e736d8edbf: rx,
      __wbg_set_targets_6b0b3bdd87f35668: Ux,
      __wbg_set_entry_point_6fec5723cc790927: fy,
      __wbg_set_fragment_1a595620425637e1: $y,
      __wbg_set_count_26a934d1cd07d080: zh,
      __wbg_set_mask_0c49a66362fc0079: Jy,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: mh,
      __wbg_set_multisample_85f073947b782d07: ax,
      __wbg_set_cull_mode_9d466c1ab414cac8: Uh,
      __wbg_set_front_face_50cdf4eb61504a46: vy,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: zx,
      __wbg_set_topology_beefb3aca0612b00: Kx,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: Qx,
      __wbg_set_primitive_369241acd17871f1: gx,
      __wbg_createRenderPipeline_f48187ba9f7701e8: M7,
      __wbg_set_entries_3017e6132f938c6e: sy,
      __wbg_set_label_1175a3329a06e52b: Py,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: x7,
      __wbg_limits_1c25cb4f379a4418: m5,
      __wbg_set_color_attachments_abe67f6631926e28: Eh,
      __wbg_set_label_8fd860a36d2c7b74: Ry,
      __wbg_set_view_dbd0294573f64d05: r$,
      __wbg_set_depth_clear_value_442bf492734f63b6: Nh,
      __wbg_set_depth_load_op_34d430b74bb36d91: Xh,
      __wbg_set_depth_store_op_0ea0a215313dbda7: ty,
      __wbg_set_depth_read_only_138a11b10c731094: Zh,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: kx,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: Rx,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: Lx,
      __wbg_set_stencil_read_only_fb489d191b6d969b: Vx,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: _y,
      __wbg_set_query_set_18679a8580267d5a: px,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: Dh,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: by,
      __wbg_set_timestamp_writes_c552d52fbb417005: jx,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: um,
      __wbg_copyTextureToTexture_1be188df1e535c0a: y7,
      __wbg_label_47480289cc2bce71: p5,
      __wbg_set_label_2d2227f4d5991e50: ky,
      __wbg_finish_cfaeede3baf55be1: Y6,
      __wbg_finish_087cb89c65c06eb1: X6,
      __wbg_drawIndexed_68637ebab6dd8d6e: L6,
      __wbg_setPipeline_bab24dbce96903b9: nh,
      __wbg_setViewport_f9d423db4f4b4b58: ch,
      __wbg_setBindGroup_4ba56e1e0d26f244: eh,
      __wbg_setBindGroup_6124849cc8547086: _h,
      __wbg_setIndexBuffer_17431786d06c1b7c: th,
      __wbg_setIndexBuffer_a16ed5b869c87507: rh,
      __wbg_setVertexBuffer_b508baf8d0ffe331: oh,
      __wbg_setVertexBuffer_91c4b602d0289943: ah,
      __wbg_end_414453a89205612c: U6,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: v8,
      __wbg_getCurrentTexture_51975ae7185fd15f: w8,
      __wbg_set_device_0d774b66e7288f72: ny,
      __wbg_set_format_d347899cd860709c: hy,
      __wbg_set_usage_ae014e77ff77ce06: e$,
      __wbg_set_alpha_mode_92402195b3ae1ee7: lh,
      __wbg_set_view_formats_fe531a043efb71fa: c$,
      __wbg_configure_3d64c677c7d68a15: g7,
      __wbg_writeBuffer_b4bdd36178348ca5: nS,
      __wbg_set_bytes_per_row_91681ca78d744888: Ch,
      __wbg_set_rows_per_image_d198b7e73a38978b: xx,
      __wbg_set_offset_a097a8050a3a9a33: sx,
      __wbg_writeTexture_b45b69132e46a227: aS,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: y9,
      __wbg_submit_1290d44bb76ecef4: C$,
      __wbg_getMappedRange_5ed22727c9679168: y8,
      __wbg_unmap_8f06698a75b8331a: qv,
      __wbg_destroy_b5b39f25f0799295: x6,
      __wbg_mapAsync_bb0029907dd91181: v5,
      __wbg_set_dimension_174ad7e2fb67fb4e: ay,
      __wbg_set_format_90860b0321868db4: ly,
      __wbg_set_aspect_a823a14d00d42d37: $h,
      __wbg_set_base_array_layer_cc6c68d233489c4b: Ah,
      __wbg_set_array_layer_count_daec613068108a9d: hh,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: Ih,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: ex,
      __wbg_set_label_03d2396d4655a3e1: Fy,
      __wbg_set_usage_7f0dda8309469b1c: Xx,
      __wbg_createView_cc96b5bdd3d5bf5e: j7,
      __wbg_set_min_binding_size_689661b9ed25e083: Xy,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: Ay,
      __wbg_set_type_38961e08504ca674: Nx,
      __wbg_requestAdapter_c46930b8bc33722d: H9,
      __wbg_set_alpha_aa2e606e9e647b21: wh,
      __wbg_set_color_bc393d7efc3c8594: Oh,
      __wbg_set_visibility_1bca121a89accba5: b$,
      __wbg_set_storage_texture_ab9eed9786337ef0: Gx,
      __wbg_set_external_texture_825fe2bc7a0c0603: dy,
      __wbg_set_binding_b6b0fe5c281b8c69: Fh,
      __wbg_set_buffer_e89095a9f0cafad3: Mh,
      __wbg_set_sampler_8c5d7fb1b02058c6: Sx,
      __wbg_set_texture_e25a73da75cf5808: Hx,
      __wbg_set_format_abf7a1bc5425c56a: my,
      __wbg_set_blend_8d6e9c08b5702a09: Ph,
      __wbg_set_write_mask_144b25e2bd909124: u$,
      __wbg_set_load_op_56844f51434037bf: qy,
      __wbg_set_store_op_caeede4654b3d847: Wx,
      __wbg_set_view_bdeab150b5f0768c: t$,
      __wbg_set_clear_value_642701f928a5ccb3: Vh,
      __wbg_set_resolve_target_fe76b3f99cf72078: hx,
      __wbg_set_buffer_55f096330c8912b4: kh,
      __wbg_set_offset_73156b0e0b41d79a: cx,
      __wbg_set_size_1e6281b07cd39177: Dx,
      __wbg_set_binding_f3c188a8cd21455b: Bh,
      __wbg_set_resource_fe385d2e3dadaf63: yx,
      __wbg_set_format_6606f5c1fba6f459: wy,
      __wbg_set_offset_8d9d9afffa18b591: bx,
      __wbg_set_shader_location_0ff30a733291a396: Ax,
      __wbg_set_array_stride_c2c009eabc18b5f6: yh,
      __wbg_set_attributes_05f9117fd32ca606: vh,
      __wbg_set_step_mode_a35aef328761c452: Ox,
      __wbg_set_type_c1eebc19f8a6aeb9: Jx,
      __wbg_set_multisampled_40505c1381e1c32c: ox,
      __wbg_set_sample_type_7088b1efddce6a69: vx,
      __wbg_set_view_dimension_3ed01b237e85826f: a$,
      __wbg_set_format_1786adb7bc74c7c9: py,
      __wbg_set_access_091f317905cd76a5: uh,
      __wbg_set_view_dimension_263387976511ebc9: n$,
      __wbg_includes_83dff8d05da243c5: J8,
      __wbg_clearBufferuiv_1d2d93401c0904a3: Qm,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: i7,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: u7,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: d7,
      __wbg_copyBufferSubData_a944f33b601b822d: w7,
      __wbg_clientWaitSync_7580165bd2eff461: r7,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: f7,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: h7,
      __wbg_createQuery_f013132b870a71ef: k7,
      __wbg_createSampler_9fe50152a2524319: L7,
      __wbg_createVertexArray_8685feb21901c932: H7,
      __wbg_deleteQuery_ef51ea0a52420103: r6,
      __wbg_deleteSampler_5c045e0cc55813d4: o6,
      __wbg_getIndexedParameter_2b18df6fca85f751: h8,
      __wbg_getQueryParameter_0599e85ddb81220b: T8,
      __wbg_getSyncParameter_9a2bda340ebe166f: C8,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: V8,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: b5,
      __wbg_deleteSync_37ca83c429c43d8a: s6,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: d6,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: B6,
      __wbg_drawBuffers_558d96e52e754731: R6,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: V6,
      __wbg_endQuery_161170c5280a8293: z6,
      __wbg_fenceSync_56efc7cc79111e54: N6,
      __wbg_framebufferTextureLayer_2312acdc74f97676: o8,
      __wbg_getBufferSubData_92680d3a2f7be029: f8,
      __wbg_readBuffer_361ec5474f3aae49: V9,
      __wbg_readPixels_5840000f3e22f3ce: E9,
      __wbg_readPixels_5bf204799ed2272f: O9,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: G9,
      __wbg_texImage3D_8647ef58aef5b912: G$,
      __wbg_texStorage2D_ed5df596c5f1e3af: U$,
      __wbg_texStorage3D_160b0197bc190f04: q$,
      __wbg_texSubImage2D_f03448e182b0820d: Y$,
      __wbg_texSubImage2D_d14d9c0a1f627c31: X$,
      __wbg_texSubImage2D_89866a04ecd0a76b: N$,
      __wbg_texSubImage2D_5c630043f1c56716: K$,
      __wbg_samplerParameterf_3157ba41c0f4d97a: J9,
      __wbg_samplerParameteri_f85a29156e790189: Q9,
      __wbg_texImage2D_0e0f37b9fb297d01: V$,
      __wbg_texImage2D_0e537dc331652de3: L$,
      __wbg_texImage3D_30dbf7234481b8f5: O$,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: j$,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: J$,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: Q$,
      __wbg_texSubImage3D_933e4cd41cc5376d: rv,
      __wbg_texSubImage3D_c3538b28040daac9: av,
      __wbg_uniform1ui_36c94692177ebf76: dv,
      __wbg_uniform2fv_17592f4dad9798fb: gv,
      __wbg_uniform2iv_d5d29ebbc466977d: lv,
      __wbg_texSubImage3D_0fdbd843482bb916: ev,
      __wbg_texSubImage3D_09a97a968b93253d: Z$,
      __wbg_texSubImage3D_355efde0dc047913: _v,
      __wbg_texSubImage3D_bd32c8e29e470904: nv,
      __wbg_texSubImage3D_5a238709d114b609: tv,
      __wbg_uniform2uiv_418ba3bf6a230dd5: mv,
      __wbg_uniform4fv_9e670a001c77dca0: Dv,
      __wbg_uniform4iv_1d57c6b8e5c0e447: Tv,
      __wbg_uniform3fv_dbe44b778e6b89e8: yv,
      __wbg_uniform3iv_d75d3a5f86d54be4: $v,
      __wbg_uniform3uiv_71c1efc24a662de9: vv,
      __wbg_uniform4uiv_c5d45f5dbdae727a: Bv,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: Vv,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: Ev,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: Ov,
      __wbg_uniformBlockBinding_829a71912ad79a04: Pv,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: kv,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: Rv,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: Cv,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: Gv,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: Qv,
      __wbg_activeTexture_525ee3068cb9e8d5: am,
      __wbg_attachShader_3477e67517b09b6b: sm,
      __wbg_bindAttribLocation_79b5d26727094518: dm,
      __wbg_bindBuffer_d3111de6861cb875: wm,
      __wbg_bindFramebuffer_63e837a5dc0accfb: hm,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: ym,
      __wbg_bindTexture_7ab28ff4ff3dc506: vm,
      __wbg_blendColor_15f26633b646e542: Dm,
      __wbg_blendEquation_7dadb4db540a42da: Pm,
      __wbg_blendEquationSeparate_8240ddfa32266109: Fm,
      __wbg_blendFunc_b15af02643e188f1: Vm,
      __wbg_blendFuncSeparate_456410f9919bed39: Rm,
      __wbg_clear_dadcb3e2929388b0: _7,
      __wbg_clearDepth_05c17028494ee4dd: Xm,
      __wbg_clearStencil_917833d1e2ac56e4: e7,
      __wbg_colorMask_f111e3e5796458f4: o7,
      __wbg_compileShader_f5625b583b2c9fd6: c7,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: zv,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: Uv,
      __wbg_vertexAttribDivisor_f17a8585267be92f: Jv,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: l7,
      __wbg_createBuffer_9f602b2dbcbf409c: A7,
      __wbg_createFramebuffer_4a250944a4542bbc: D7,
      __wbg_createProgram_4c8164d471c10346: B7,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: C7,
      __wbg_createShader_9c5cd42709d915ff: G7,
      __wbg_createTexture_3eed23cb87dd35fc: W7,
      __wbg_cullFace_94f24b4fd5e9038b: J7,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: X7,
      __wbg_getExtension_11824edd67a143d8: m8,
      __wbg_getParameter_7f7f23cae98f2c81: x8,
      __wbg_getProgramInfoLog_cd84be80942f345b: A8,
      __wbg_getProgramParameter_039391d5ba319f50: I8,
      __wbg_getShaderInfoLog_495bddda98172699: F8,
      __wbg_getShaderParameter_4eb65cfb174ceb22: P8,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: M8,
      __wbg_getUniformLocation_ab63f569a4e41744: E8,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: Z7,
      __wbg_deleteProgram_eff668280dcb01ca: t6,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: a6,
      __wbg_deleteShader_3339454254c7147c: c6,
      __wbg_deleteTexture_c1c58550dc55af5c: f6,
      __wbg_depthFunc_31b183b5b8ee478e: g6,
      __wbg_depthMask_cab7f2ae7f0e559c: l6,
      __wbg_depthRange_797a71ba3b79267a: m6,
      __wbg_disable_cb1b3e6c1cee5202: I6,
      __wbg_disableVertexAttribArray_b395358ec5084c39: S6,
      __wbg_drawArrays_42dbb4b0349c8f34: k6,
      __wbg_enable_d1f42f78be33a553: W6,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: E6,
      __wbg_flush_7ae42f071230db6b: Z6,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: r8,
      __wbg_framebufferTexture2D_367ab597a005e8d9: n8,
      __wbg_frontFace_9bdcf2a758e989e5: b8,
      __wbg_linkProgram_e23a348b0f6e0c4f: x5,
      __wbg_pixelStorei_a78a504be58d1d0a: v9,
      __wbg_polygonOffset_a4f07d97b9b0dced: A9,
      __wbg_renderbufferStorage_3049e13db5c4e60e: z9,
      __wbg_scissor_6c024669fbf4fe72: X9,
      __wbg_vertexAttribPointer_4e5d289c5d224210: Yv,
      __wbg_viewport_a0ca330f9b85397e: Zv,
      __wbg_shaderSource_66dce75b25a1a407: l$,
      __wbg_stencilFuncSeparate_ec603976be9569a4: T$,
      __wbg_stencilMask_485dcb5965c79a71: P$,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: B$,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: M$,
      __wbg_texParameteri_c6efffcecb474d2f: W$,
      __wbg_uniform1f_3acd3f3eb50b5e11: sv,
      __wbg_uniform1i_e4f13604354c28ae: uv,
      __wbg_uniform4f_a5008773cfb47d1a: Av,
      __wbg_useProgram_ab2ee2a13a1fd909: jv,
      __wbg_bufferSubData_2270f1b9db71e642: zm,
      __wbg_clearBufferfv_6b77b9402254a2bf: Nm,
      __wbg_clearBufferiv_0f056544010eef3e: Jm,
      __wbg_beginQuery_dad334d972fed3cc: fm,
      __wbg_bindBufferRange_16a9d90becc2a7d7: pm,
      __wbg_bindSampler_3c7002cb6d56ae8f: $m,
      __wbg_bindVertexArray_c391bd47303d75cd: Im,
      __wbg_blitFramebuffer_ea96ada8bba07582: Lm,
      __wbg_bufferData_64e9905f2b3d3a6f: Gm,
      __wbg_bufferData_99bbbc63f02251c4: Wm,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: o5,
      __wbg_performance_4c23a97261596fec: x9,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: j9,
      __wbg_fetch_2d913f7108d17a24: J6,
      __wbg_fetch_d8c50740ea23b248: Q6,
      __wbg_navigator_935098efd1dc7fe5: t9,
      __wbg_devicePixelRatio_8e5ca44720abafec: $6,
      __wbg_document_2634180a4c694068: D6,
      __wbg_instanceof_Window_0d356b88a2f77c42: c5,
      __wbg_hidden_cb32701ca3785fea: N8,
      __wbg_getElementById_c7aba6b93b34bf01: l8,
      __wbg_querySelector_1f3658f4b48e268b: k9,
      __wbg_querySelectorAll_ffda3c891a9eb29a: P9,
      __wbg_hasAttribute_73e1230c9c107e79: H8,
      __wbg_setAttribute_8bccfbabf2a83682: Z9,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: i8,
      __wbg_focus_c80921c19b28520b: _8,
      __wbg_uniform2iv_c5e863975dd780d8: wv,
      __wbg_uniform3fv_7723e142be50856f: hv,
      __wbg_uniform3iv_bea3976522e15d48: xv,
      __wbg_uniform4fv_85ad5d23234895d2: Iv,
      __wbg_clear_ff8cfdf420f7dde6: t7,
      __wbg_clearDepth_ac6b54f112feeaf7: Ym,
      __wbg_clearStencil_56d6a6308294a749: Zm,
      __wbg_colorMask_b0ab9d429a1efa0a: a7,
      __wbg_compileShader_fcf3f3d2891f73f9: b7,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: m7,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: v7,
      __wbg_createFramebuffer_ab73f30b5dc97415: T7,
      __wbg_createProgram_f11c63f59f41b82a: P7,
      __wbg_createRenderbuffer_556000dbb01f5026: R7,
      __wbg_createShader_27d9388313f3b14e: O7,
      __wbg_createTexture_8455c703424c567b: z7,
      __wbg_cullFace_774780fb4177aab8: N7,
      __wbg_deleteBuffer_d758283bea6e0ccf: Y7,
      __wbg_deleteFramebuffer_8953b325144192fe: e6,
      __wbg_deleteProgram_0135c6926e75af75: _6,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: n6,
      __wbg_deleteShader_79dbaaed69b7ca3b: b6,
      __wbg_deleteTexture_3acb672a45f9998a: i6,
      __wbg_depthFunc_eaca1bc79f7bf216: p6,
      __wbg_depthMask_3a9074b08d1f68e5: w6,
      __wbg_depthRange_c24a808b3496e0a9: h6,
      __wbg_uniform4iv_a9aaa92f2f458ec2: Fv,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: Mv,
      __wbg_uniformMatrix3fv_da8c388748c5739b: Lv,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: Wv,
      __wbg_activeTexture_1d5359b20df41710: nm,
      __wbg_attachShader_683d1070365e7066: im,
      __wbg_bindAttribLocation_d56d3c40331af7ed: gm,
      __wbg_bindBuffer_e95efaf0d4851845: lm,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: mm,
      __wbg_bindRenderbuffer_d608b211c51ed147: xm,
      __wbg_bindTexture_ffc56f1e5c5526c6: Sm,
      __wbg_blendColor_a0ba1cdcecc3a34c: Tm,
      __wbg_blendEquation_8bfa69f639ae92da: km,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: Bm,
      __wbg_blendFunc_713c504adab14f98: Cm,
      __wbg_blendFuncSeparate_3eef699c291dbc87: Mm,
      __wbg_disable_4dca6ee0ccc91e4a: A6,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: v6,
      __wbg_drawArrays_10e1254aa4524ae9: P6,
      __wbg_enable_c6e523307311617a: G6,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: O6,
      __wbg_flush_eb3fb8da2ec00d57: e8,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: t8,
      __wbg_linkProgram_6a2eee02a03b9b00: y5,
      __wbg_pixelStorei_55ad4c67b699537c: $9,
      __wbg_polygonOffset_06dc6468c12a57e1: S9,
      __wbg_renderbufferStorage_2918fb696fd45663: W9,
      __wbg_scissor_f9696c630e464977: Y9,
      __wbg_shaderSource_628c37a476ae65f9: w$,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: D$,
      __wbg_stencilMask_f9fe198f7fd6fc9c: k$,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: F$,
      __wbg_stencilOpSeparate_6cf50803475d2640: R$,
      __wbg_texParameteri_fe6210a493d48a16: z$,
      __wbg_framebufferTexture2D_3a558e14f56720d2: a8,
      __wbg_frontFace_c9bb1fa659ffd276: s8,
      __wbg_getParameter_91a344e1a84a4669: $8,
      __wbg_getProgramInfoLog_35410850de9ccefe: S8,
      __wbg_getProgramParameter_bbc667347ac2e882: D8,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: B8,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: k8,
      __wbg_getUniformLocation_340155dc706d3fea: L8,
      __wbg_uniform1f_d34e4b454f7c8e73: iv,
      __wbg_uniform1i_cd9a7f990128ea48: fv,
      __wbg_uniform4f_4410d2faaa7e5dda: Sv,
      __wbg_useProgram_0e1cd86765304939: Hv,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: Xv,
      __wbg_viewport_b5bd46a0d111c83c: eS,
      __wbg_texSubImage2D_1b2ff28f994c325e: H$,
      __wbg_uniform2fv_39277cf2d3cb83c7: pv,
      __wbg_bufferData_5df9bdb32e189eee: Om,
      __wbg_bufferData_26132561617ce8fb: Em,
      __wbg_bufferSubData_44db8a3b4a70b57d: Um,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: s7,
      __wbg_readPixels_05377f8b6fa1d8eb: L9,
      __wbg_texImage2D_7bc3001cb8602ed2: E$,
      __wbg_navigator_017bc45e84c473cc: _9,
      __wbg_log_d282446d03691e72: $5,
      __wbg_info_a392cd5b7536cfb5: X8,
      __wbg_warn_88c4a5bd9a322000: _S,
      __wbg_debug_7271beced8b71cd4: Q7,
      __wbg_error_933f449d72fef598: j6,
      __wbg_error_50f60c611a3dcf64: H6,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: Am,
      __wbg_width_08e66520b99071f4: tS,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: q7,
      __wbg_height_e9afb506f31052a9: K8,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: u6,
      __wbg_queryCounterEXT_ebb00bcc96221671: B9,
      __wbg_aborted_4d4114700dc4c251: rm,
      __wbg_addEventListener_ea90bc131475777e: om,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: c8,
      __wbg_set_width_f9e631f4ee129e5c: f$,
      __wbg_set_height_ef298446b359b0c5: Ty,
      __wbg_getContext_70c2d1bed75d4122: g8,
      __wbg_getContext_422b32d0ee4b8076: u8,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: F6,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: C6,
      __wbg_arrayBuffer_ff96d08b7b6be32e: bm,
      __wbg_get_37b48b8fa52d1f2c: G8,
      __wbg_status_0053aa6239760447: I$,
      __wbg_ok_c962da6f1a034d81: h9,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: Nv,
      __wbg_statusText_0f412961834ccfe9: A$,
      __wbg_instanceof_Response_79948c98d1d2ba75: n5,
      __wbg_set_signal_4a69430cb12800f3: Ix,
      __wbg_new_1e52e3c919312525: r9,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: M6,
      __wbg_observe_592b94857eed8e27: p9,
      __wbg_altKey_7412dd64f8c921c7: cm,
      __wbg_ctrlKey_00097886a21597a7: K7,
      __wbg_shiftKey_273ee8c901267b55: m$,
      __wbg_metaKey_1c2847b62ad062c1: Y5,
      __wbg_repeat_46a5c90df9f6ef0b: U9,
      __wbg_isComposing_e3709163a95a2477: i5,
      __wbg_key_d6b3d2cce3d41872: g5,
      __wbg_code_87bb99fdec02d313: n7,
      __wbg_now_0f628e0e435c541b: g9,
      __wbg_offsetX_0214819d43aaf6d5: l9,
      __wbg_offsetY_f18f571e33b385ab: m9,
      __wbg_button_bb3285fcdf965178: qm,
      __wbg_signal_4d9d567be73ea52c: h$,
      __wbg_new_51233fa2a760b272: c9,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: R8,
      __wbg_abort_6e6ea7d259504afc: tm,
      __wbg_preventDefault_c047d3e292b08cc4: I9,
      __wbg_contentRect_0fb8c8900d689a0c: p7,
      __wbg_width_a86bcd32bd998060: rS,
      __wbg_height_cd732bbdc7b66e49: j8,
      __wbg_set_width_031bdecd763c5855: s$,
      __wbg_set_height_ad5056ea051acd78: Iy,
      __wbg_getContext_486aab500e1c34c9: d8,
      __wbg_getContext_9fd4db9b1cf155db: p8,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: _5,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: r5,
      __wbg_resolve_d82363d90af6928a: N9,
      __wbg_then_591b6b3a75ee817a: bv,
      __wbg_iterator_cc47ba25a2be735a: d5,
      __wbg_get_9a29be2cb383ed9a: W8,
      __wbg_next_402fa10b59ab20c3: d9,
      __wbg_new_2e117a478906f062: a9,
      __wbg_new_36e147a8ced3c6e0: o9,
      __wbg_of_62183ea089c00bfa: w9,
      __wbg_isArray_145a34fd0a38d37b: s5,
      __wbg_new_e66a4b7758dd2e5c: s9,
      __wbg_isSafeInteger_a3389a198582f5f6: f5,
      __wbg_is_de5b366c746e004c: u5,
      __wbg_entries_c261c3fa1f281256: q6,
      __wbg_then_2a84678a50976959: cv,
      __wbg_length_589238bdcf171f0e: w5,
      __wbg_prototypesetcall_d721637c7ca66eb8: T9,
      __wbg_set_272b80acaf9a75e8: bh,
      __wbg_new_81880fb5002cb255: b9,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: f9,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: x$,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: v$,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: $$,
      __wbg_static_accessor_WINDOW_168f178805d978fe: S$,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: Y8,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: a5,
      __wbg_queueMicrotask_1c9b3800e321a967: M9,
      __wbg_queueMicrotask_311744e534a929a3: R9,
      __wbg_set_4564f7dc44fcb0c9: sh,
      __wbg___wbindgen_number_get_1cc01dd708740256: Y4,
      __wbg___wbindgen_in_4990f46af709e33c: U4,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: em,
      __wbg___wbindgen_is_null_6d937fbfb6478470: j4,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: Q4,
      __wbg_Number_c4bdf66bb78f7977: V4,
      __wbg_Error_fdd633d4bb5dd76a: C4,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: q4,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: K4,
      __wbg___wbindgen_is_string_1fca8072260dd261: N4,
      __wbg___wbindgen_string_get_71bb4348194e31f0: Z4,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: W4,
      __wbg___wbindgen_is_function_acc5528be2b923f2: H4,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: J4,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: X4,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: G4,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: _m,
      __wbg___wbindgen_debug_string_8a447059637473e2: z4,
      __wbindgen_init_externref_table: AS,
      __wbindgen_cast_0000000000000001: oS,
      __wbindgen_cast_0000000000000002: cS,
      __wbindgen_cast_0000000000000003: bS,
      __wbindgen_cast_0000000000000004: sS,
      __wbindgen_cast_0000000000000005: iS,
      __wbindgen_cast_0000000000000006: fS,
      __wbindgen_cast_0000000000000007: uS,
      __wbindgen_cast_0000000000000008: dS,
      __wbindgen_cast_0000000000000009: gS,
      __wbindgen_cast_000000000000000a: pS,
      __wbindgen_cast_000000000000000b: wS,
      __wbindgen_cast_000000000000000c: lS,
      __wbindgen_cast_000000000000000d: mS,
      __wbindgen_cast_000000000000000e: hS,
      __wbindgen_cast_000000000000000f: yS,
      __wbindgen_cast_0000000000000010: xS,
      __wbindgen_cast_0000000000000011: $S,
      __wbindgen_cast_0000000000000012: vS,
      __wbindgen_cast_0000000000000013: SS
    }
  }, F4), { memory: iA, clear: fA, on_frame: uA, show: dA, start: gA, stop_frames: pA, mount: wA, __wbg_proteusapp_free: lA, proteusapp_addChild: mA, proteusapp_animateTo: hA, proteusapp_bakeTexture: yA, proteusapp_bakedImageSize: xA, proteusapp_bakedTextSize: $A, proteusapp_bindKey: vA, proteusapp_channelDestroy: SA, proteusapp_channelSet: AA, proteusapp_clearFocus: IA, proteusapp_component: DA, proteusapp_copyBakedImageFrom: TA, proteusapp_createVideo: FA, proteusapp_cropImage: BA, proteusapp_declareGeometry: PA, proteusapp_declaredGeometry: kA, proteusapp_destroy: MA, proteusapp_devices: RA, proteusapp_focus: CA, proteusapp_focused: VA, proteusapp_freeResources: LA, proteusapp_get: EA, proteusapp_hideVideo: OA, proteusapp_inputDevices: GA, proteusapp_inputMode: WA, proteusapp_isFocused: zA, proteusapp_loadTexture: UA, proteusapp_mergeFrom: qA, proteusapp_mergeFromWithBehavior: HA, proteusapp_new: jA, proteusapp_onAppKey: KA, proteusapp_onBlur: NA, proteusapp_onClick: JA, proteusapp_onDrag: QA, proteusapp_onDropped: XA, proteusapp_onFocus: YA, proteusapp_onFocusLost: ZA, proteusapp_onHoverEnter: eI, proteusapp_onHoverExit: _I, proteusapp_onKey: tI, proteusapp_onPress: rI, proteusapp_onRelease: nI, proteusapp_onTransitionComplete: aI, proteusapp_pointerLeft: oI, proteusapp_pointerMoved: cI, proteusapp_pointerPressed: bI, proteusapp_pointerReleased: sI, proteusapp_releaseVideo: iI, proteusapp_removeChild: fI, proteusapp_resetKeyMap: uI, proteusapp_setDeclaredGeometry: dI, proteusapp_setDefaultFocus: gI, proteusapp_setDevices: pI, proteusapp_setDisabled: wI, proteusapp_setImage: lI, proteusapp_setInputDevices: mI, proteusapp_setInteractive: hI, proteusapp_setKeyRepeat: yI, proteusapp_setLongPressMs: xI, proteusapp_setNavigatingActions: $I, proteusapp_setNeighbour: vI, proteusapp_setOpacity: SI, proteusapp_setReadingDirection: AI, proteusapp_setText: II, proteusapp_setTexture: DI, proteusapp_setTransitionInteraction: TI, proteusapp_setVideoCrossfade: FI, proteusapp_setVisible: BI, proteusapp_showVideo: PI, proteusapp_splitTo: kI, proteusapp_splitToWithBehavior: MI, proteusapp_splitToWithStates: RI, proteusapp_texture: CI, proteusapp_textureState: VI, proteusapp_tick: LI, proteusapp_transitionChannel: EI, proteusapp_unbindKey: OI, proteusapp_uploadVideoFrame: GI, __wbg_handle_free: WI, __wbg_texturehandle_free: zI, __wbg_transitionchannel_free: UI, __wbg_videohandle_free: qI, handle_fromId: HI, handle_id: jI, texturehandle_fromId: KI, texturehandle_id: NI, __abort_handler: JI, __instance_terminated: QI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: XI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: YI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: ZI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: eD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: _D, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: tD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: rD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: nD, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: aD, __wbindgen_malloc: oD, __wbindgen_realloc: cD, __wbindgen_exn_store: bD, __externref_table_alloc: sD, __wbindgen_externrefs: iD, __wbindgen_free: fD, __wbindgen_destroy_closure: uD, __externref_table_dealloc: dD, __wbindgen_start: jt } = sA, gD = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: JI,
    __externref_table_alloc: sD,
    __externref_table_dealloc: dD,
    __instance_terminated: QI,
    __wbg_handle_free: WI,
    __wbg_proteusapp_free: lA,
    __wbg_texturehandle_free: zI,
    __wbg_transitionchannel_free: UI,
    __wbg_videohandle_free: qI,
    __wbindgen_destroy_closure: uD,
    __wbindgen_exn_store: bD,
    __wbindgen_externrefs: iD,
    __wbindgen_free: fD,
    __wbindgen_malloc: oD,
    __wbindgen_realloc: cD,
    __wbindgen_start: jt,
    clear: fA,
    handle_fromId: HI,
    handle_id: jI,
    memory: iA,
    mount: wA,
    on_frame: uA,
    proteusapp_addChild: mA,
    proteusapp_animateTo: hA,
    proteusapp_bakeTexture: yA,
    proteusapp_bakedImageSize: xA,
    proteusapp_bakedTextSize: $A,
    proteusapp_bindKey: vA,
    proteusapp_channelDestroy: SA,
    proteusapp_channelSet: AA,
    proteusapp_clearFocus: IA,
    proteusapp_component: DA,
    proteusapp_copyBakedImageFrom: TA,
    proteusapp_createVideo: FA,
    proteusapp_cropImage: BA,
    proteusapp_declareGeometry: PA,
    proteusapp_declaredGeometry: kA,
    proteusapp_destroy: MA,
    proteusapp_devices: RA,
    proteusapp_focus: CA,
    proteusapp_focused: VA,
    proteusapp_freeResources: LA,
    proteusapp_get: EA,
    proteusapp_hideVideo: OA,
    proteusapp_inputDevices: GA,
    proteusapp_inputMode: WA,
    proteusapp_isFocused: zA,
    proteusapp_loadTexture: UA,
    proteusapp_mergeFrom: qA,
    proteusapp_mergeFromWithBehavior: HA,
    proteusapp_new: jA,
    proteusapp_onAppKey: KA,
    proteusapp_onBlur: NA,
    proteusapp_onClick: JA,
    proteusapp_onDrag: QA,
    proteusapp_onDropped: XA,
    proteusapp_onFocus: YA,
    proteusapp_onFocusLost: ZA,
    proteusapp_onHoverEnter: eI,
    proteusapp_onHoverExit: _I,
    proteusapp_onKey: tI,
    proteusapp_onPress: rI,
    proteusapp_onRelease: nI,
    proteusapp_onTransitionComplete: aI,
    proteusapp_pointerLeft: oI,
    proteusapp_pointerMoved: cI,
    proteusapp_pointerPressed: bI,
    proteusapp_pointerReleased: sI,
    proteusapp_releaseVideo: iI,
    proteusapp_removeChild: fI,
    proteusapp_resetKeyMap: uI,
    proteusapp_setDeclaredGeometry: dI,
    proteusapp_setDefaultFocus: gI,
    proteusapp_setDevices: pI,
    proteusapp_setDisabled: wI,
    proteusapp_setImage: lI,
    proteusapp_setInputDevices: mI,
    proteusapp_setInteractive: hI,
    proteusapp_setKeyRepeat: yI,
    proteusapp_setLongPressMs: xI,
    proteusapp_setNavigatingActions: $I,
    proteusapp_setNeighbour: vI,
    proteusapp_setOpacity: SI,
    proteusapp_setReadingDirection: AI,
    proteusapp_setText: II,
    proteusapp_setTexture: DI,
    proteusapp_setTransitionInteraction: TI,
    proteusapp_setVideoCrossfade: FI,
    proteusapp_setVisible: BI,
    proteusapp_showVideo: PI,
    proteusapp_splitTo: kI,
    proteusapp_splitToWithBehavior: MI,
    proteusapp_splitToWithStates: RI,
    proteusapp_texture: CI,
    proteusapp_textureState: VI,
    proteusapp_tick: LI,
    proteusapp_transitionChannel: EI,
    proteusapp_unbindKey: OI,
    proteusapp_uploadVideoFrame: GI,
    show: dA,
    start: gA,
    stop_frames: pA,
    texturehandle_fromId: KI,
    texturehandle_id: NI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: aD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: XI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: _D,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: tD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: rD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: nD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: ZI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: eD,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: YI
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  bA(gD);
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
  const pD = `#version 300 es
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
}`, wD = `#version 300 es
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
}`, lD = `#version 300 es
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
    if (_.attachShader(r, t(_.VERTEX_SHADER, e)), _.attachShader(r, t(_.FRAGMENT_SHADER, pD)), _.linkProgram(r), !_.getProgramParameter(r, _.LINK_STATUS)) throw new Error(_.getProgramInfoLog(r) ?? "program failed to link");
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
  function mD(_) {
    return (e, t, r) => {
      const n = Kt(_, wD), a = Nt(_), o = _.createVertexArray();
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
  function hD(_) {
    return (e, t, r) => {
      const n = Kt(_, lD), a = Nt(_), o = _.createVertexArray();
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
  function yD(_) {
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
  function xD(_) {
    return _ < 0.5 ? 2 * _ * _ : 1 - (-2 * _ + 2) ** 2 / 2;
  }
  const $D = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
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
      const t = xD(Math.min(1, (e - this.movedAt) / C_));
      for (let r = 0; r < this.current.length; r++) this.current[r] = this.from[r] + (this.to[r] - this.from[r]) * t;
    }
  }
  function vD(_, e, t) {
    const r = new nt(e), n = document.createDocumentFragment(), a = e.map((o, c) => {
      const b = document.createElement("div"), f = b.style;
      return f.position = "absolute", f.left = "0", f.top = "0", f.width = `${o.width}px`, f.height = `${o.height}px`, f.borderRadius = `${t}px`, f.background = `rgb(${Math.round(o.r * 255)} ${Math.round(o.g * 255)} ${Math.round(o.b * 255)})`, f.transform = It(r.current[c * 2], r.current[c * 2 + 1], o), f.transition = `transform ${C_}ms ${$D}`, n.append(b), b;
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
  const SD = [
    100,
    1e3,
    5e3,
    1e4,
    25e3,
    5e4,
    1e5
  ], AD = 60, ID = 2e3, V_ = 1e5, Dt = 100, at = `proteus-bench:${location.pathname}`, DD = 300, TD = 15e3, o_ = document.getElementById("status"), Qt = document.getElementById("results"), ye = document.getElementById("run"), b_ = document.getElementById("reset"), xe = {
    proteus: document.getElementById("proteus"),
    proteusRust: document.getElementById("proteus-rust"),
    webgl: document.getElementById("webgl"),
    canvas2d: document.getElementById("canvas2d"),
    css: document.getElementById("css")
  }, Xt = new URLSearchParams(location.search), Te = ((_a2 = Xt.get("counts")) == null ? void 0 : _a2.split(",").map(Number).filter((_) => _ > 0)) ?? SD, ot = (((_b2 = Xt.get("scenes")) == null ? void 0 : _b2.split(",")) ?? [
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
  function FD(_) {
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
        if (r += 1, r === 1 && (o = f), !c && (r >= AD || f - o > ID)) {
          c = true, a = f, n = f;
          return;
        }
        c && t.push(f - n), n = f, c && (t.length >= DD || f - a > TD) && (b(), e(FD(t)));
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
  await A4("proteus", {
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
  await M4("proteus-rust", Zt);
  async function BD(_, e) {
    k4(_, e);
    const t = await ke((r) => (P4(r), () => R4()));
    return B4(), t;
  }
  async function PD(_, e) {
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
  async function kD(_) {
    const e = vD(xe.css, rt("moving", _), j.moving.radius), t = await ke(ct((r) => e.frame(r)));
    return e.dispose(), t;
  }
  function Tt(_) {
    for (const [e, t] of Object.entries(xe)) t.style.visibility = e === _ ? "visible" : "hidden";
  }
  const x_ = {
    title: "Proteus (TypeScript)",
    surface: "proteus",
    time: PD
  }, $_ = {
    title: "Proteus (Rust)",
    surface: "proteusRust",
    time: BD
  }, MD = {
    title: "CSS",
    surface: "css",
    time: (_, e) => kD(e)
  }, v_ = {
    title: "Canvas 2D",
    surface: "canvas2d",
    time: (_, e) => bt(yD(_r), _, e)
  }, S_ = {
    title: "Naive WebGL2",
    surface: "webgl",
    time: (_, e) => bt(mD(we), _, e)
  }, A_ = {
    title: "Batched WebGL2",
    surface: "webgl",
    time: (_, e) => bt(hD(we), _, e)
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
      MD,
      v_,
      S_,
      A_
    ]
  }, E_ = {
    small: 1 / 0,
    large: V_,
    moving: 1 / 0
  }, RD = {
    small: `Small components (${j.small.min}\u2013${j.small.max} px), still: the cost per component`,
    large: `Large components (${j.large.min}\u2013${j.large.max} px), still: filling pixels dominates`,
    moving: `Moving components (${j.moving.min}\u2013${j.moving.max} px): every one always moving`
  };
  function CD(_) {
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
  function VD() {
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
  const V = VD();
  if (V.running) {
    const [_, e, t] = V.running.split("|");
    V.cells[V.running] = "crashed | \u2014", V.dropped[`${_}|${t}`] = `crashed at ${e}`, V.running = void 0, c_();
  }
  const LD = (_) => `${_.median.toFixed(2)} | ${_.p99.toFixed(2)}`;
  function rr(_) {
    return Te.filter((e) => e <= E_[_]).flatMap((e) => tr[_].map((t) => [
      e,
      t
    ])).filter(([e, t]) => V.cells[`${_}|${e}|${t.title}`] === void 0);
  }
  async function ED() {
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
        V.cells[r] = LD(a), a.median >= Dt && (V.dropped[`${_}|${t.title}`] = `slower than ${Dt} ms a frame at ${e}`);
      } catch (a) {
        console.error(a), V.cells[r] = "failed | \u2014", V.dropped[`${_}|${t.title}`] = `failed at ${e}: ${String(a)}`;
      }
      V.running = void 0, c_(), Qt.textContent = nr();
    }
    o_.textContent = "Done. Copy the results below.", ye.textContent = "Run", ye.disabled = false, b_.disabled = false;
  }
  function nr() {
    const _ = [
      CD(V.refresh ?? 0)
    ];
    for (const e of ot) {
      const t = tr[e].map((a) => a.title), r = Te.filter((a) => a <= E_[e]).map((a) => t.map((o) => V.cells[`${e}|${a}|${o}`])).map((a, o) => ({
        count: Te.filter((c) => c <= E_[e])[o],
        cells: a
      })).filter(({ cells: a }) => a.some((o) => o !== void 0));
      if (r.length === 0) continue;
      _.push("", `### ${RD[e]}`, "", "Frame interval, median and p99, in milliseconds:", "", `| Components | ${t.map((a) => `${a} | p99`).join(" | ")} |`, `|---:|${t.map(() => "---:|---:").join("|")}|`, ...r.map(({ count: a, cells: o }) => `| ${a} | ${o.map((c) => c ?? "\u2026 | \u2026").join(" | ")} |`));
      const n = t.map((a) => [
        a,
        V.dropped[`${e}|${a}`]
      ]).filter(([, a]) => a).map(([a, o]) => `- ${a}: ${o}; skipped after that.`);
      n.length > 0 && _.push("", ...n), e === "large" && Te.some((a) => a > V_) && _.push("", `The large scene stops at ${V_}: past it, Safari's tab crashes.`);
    }
    return _.join(`
`);
  }
  ye.addEventListener("click", () => void ED());
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
