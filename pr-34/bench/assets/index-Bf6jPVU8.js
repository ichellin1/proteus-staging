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
  const ar = "" + new URL("proteus_sdk_web_bg-y7lBK0eW.wasm", import.meta.url).href, O_ = async (_ = {}, e) => {
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
      w(e, y), w(t, y);
      const r = u.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw F(r[0]);
    }
    animateTo(e, t, r) {
      w(e, y);
      const n = u.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw F(n[0]);
    }
    bakeTexture(e, t, r, n) {
      const a = u_(r, u.__wbindgen_malloc), o = O, c = u.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, o, n);
      return J.__wrap(c);
    }
    bakedImageSize(e) {
      return w(e, y), u.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return w(e, y), u.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bindKey(e, t) {
      const r = Pe(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = O, a = u.proteusapp_bindKey(this.__wbg_ptr, e, r, n);
      if (a[1]) throw F(a[0]);
    }
    channelDestroy(e) {
      w(e, fe);
      var t = e.__destroy_into_raw();
      u.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      w(e, fe), w(t, y), w(r, y);
      const o = u.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (o[1]) throw F(o[0]);
    }
    clearFocus() {
      u.proteusapp_clearFocus(this.__wbg_ptr);
    }
    component(e) {
      const t = u.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw F(t[1]);
      return y.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      w(e, y), w(t, y);
      const r = u.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = u.proteusapp_createVideo(this.__wbg_ptr);
      return ue.__wrap(e);
    }
    cropImage(e, t) {
      w(e, y);
      const r = u.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      w(e, y);
      const r = u.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    declaredGeometry(e) {
      return w(e, y), u.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      w(e, y);
      var t = e.__destroy_into_raw();
      const r = u.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    devices(e) {
      return w(e, y), u.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    focus(e) {
      w(e, y);
      const t = u.proteusapp_focus(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
    }
    focused() {
      const e = u.proteusapp_focused(this.__wbg_ptr);
      return e === 0 ? void 0 : y.__wrap(e);
    }
    freeResources(e) {
      w(e, y);
      const t = u.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
    }
    get(e) {
      return w(e, y), u.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      w(e, y);
      const t = u.proteusapp_hideVideo(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
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
      return w(e, y), u.proteusapp_isFocused(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    loadTexture(e, t) {
      const r = u_(e, u.__wbindgen_malloc), n = O, a = u.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : J.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      w(e, y);
      const a = Le(t, u.__wbindgen_malloc), o = O, c = u.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw F(c[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      w(e, y);
      const o = Le(t, u.__wbindgen_malloc), c = O, b = u.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
      if (b[1]) throw F(b[0]);
    }
    constructor() {
      const e = u.proteusapp_new();
      return this.__wbg_ptr = e, ft.register(this, this.__wbg_ptr, this), this;
    }
    onAppKey(e) {
      u.proteusapp_onAppKey(this.__wbg_ptr, e);
    }
    onBlur(e, t) {
      w(e, y), u.proteusapp_onBlur(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onClick(e, t) {
      w(e, y), u.proteusapp_onClick(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDrag(e, t) {
      w(e, y), u.proteusapp_onDrag(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDropped(e, t) {
      w(e, fe), u.proteusapp_onDropped(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocus(e, t) {
      w(e, y), u.proteusapp_onFocus(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocusLost(e) {
      u.proteusapp_onFocusLost(this.__wbg_ptr, e);
    }
    onHoverEnter(e, t) {
      w(e, y), u.proteusapp_onHoverEnter(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverExit(e, t) {
      w(e, y), u.proteusapp_onHoverExit(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onKey(e, t) {
      w(e, y), u.proteusapp_onKey(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onPress(e, t) {
      w(e, y), u.proteusapp_onPress(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onRelease(e, t) {
      w(e, y), u.proteusapp_onRelease(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onTransitionComplete(e, t) {
      w(e, y), u.proteusapp_onTransitionComplete(this.__wbg_ptr, e.__wbg_ptr, t);
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
      w(e, ue), u.proteusapp_releaseVideo(this.__wbg_ptr, e.__wbg_ptr);
    }
    removeChild(e, t) {
      w(e, y), w(t, y);
      const r = u.proteusapp_removeChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw F(r[0]);
    }
    resetKeyMap() {
      u.proteusapp_resetKeyMap(this.__wbg_ptr);
    }
    setDeclaredGeometry(e, t) {
      w(e, y);
      const r = u.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDefaultFocus(e, t) {
      w(e, y);
      const r = u.proteusapp_setDefaultFocus(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDevices(e, t) {
      w(e, y);
      const r = u.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDisabled(e, t) {
      w(e, y);
      const r = u.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setImage(e, t) {
      w(e, y);
      const r = u.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setInputDevices(e) {
      const t = u.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw F(t[0]);
    }
    setInteractive(e, t) {
      w(e, y);
      const r = u.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setKeyRepeat(e) {
      const t = u.proteusapp_setKeyRepeat(this.__wbg_ptr, e);
      if (t[1]) throw F(t[0]);
    }
    setLongPressMs(e) {
      u.proteusapp_setLongPressMs(this.__wbg_ptr, e);
    }
    setNavigatingActions(e) {
      const t = so(e, u.__wbindgen_malloc), r = O;
      u.proteusapp_setNavigatingActions(this.__wbg_ptr, t, r);
    }
    setOpacity(e, t) {
      w(e, y);
      const r = u.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setText(e, t) {
      w(e, y);
      const r = u.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setTexture(e, t) {
      w(e, y), w(t, J);
      const r = u.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      w(e, y);
      const r = u.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setVideoCrossfade(e, t) {
      w(e, y);
      const r = u.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      w(e, y);
      const r = u.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    showVideo(e, t) {
      w(e, y), w(t, ue);
      const r = u.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      w(e, y);
      const a = Le(t, u.__wbindgen_malloc), o = O, c = u.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw F(c[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      w(e, y);
      const o = Le(t, u.__wbindgen_malloc), c = O, b = u.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
      if (b[1]) throw F(b[0]);
    }
    splitToWithStates(e, t, r, n) {
      w(e, y);
      const a = u.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw F(a[0]);
    }
    texture(e) {
      const t = u.proteusapp_texture(this.__wbg_ptr, e);
      return J.__wrap(t);
    }
    textureState(e) {
      return w(e, J), u.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
    }
    tick(e) {
      u.proteusapp_tick(this.__wbg_ptr, e);
    }
    transitionChannel(e) {
      const t = u.proteusapp_transitionChannel(this.__wbg_ptr, !H(e), H(e) ? 0 : e);
      return fe.__wrap(t);
    }
    unbindKey(e) {
      const t = u.proteusapp_unbindKey(this.__wbg_ptr, e);
      if (t[3]) throw F(t[2]);
      let r;
      return t[0] !== 0 && (r = q(t[0], t[1]).slice(), u.__wbindgen_free(t[0], t[1] * 1, 1)), r;
    }
    uploadVideoFrame(e, t, r, n) {
      w(e, ue);
      const a = u_(n, u.__wbindgen_malloc), o = O;
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
  let fe = class Ft {
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
  Symbol.dispose && (fe.prototype[Symbol.dispose] = fe.prototype.free);
  let ue = class Bt {
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
  Symbol.dispose && (ue.prototype[Symbol.dispose] = ue.prototype.free);
  function or(_, e) {
    return Error(q(_, e));
  }
  function cr(_) {
    return Number(_);
  }
  function br(_, e) {
    const t = String(e), r = Pe(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = O;
    z().setInt32(_ + 4, n, true), z().setInt32(_ + 0, r, true);
  }
  function sr(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    z().setBigInt64(_ + 8, H(r) ? BigInt(0) : r, true), z().setInt32(_ + 0, !H(r), true);
  }
  function ir(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return H(t) ? 16777215 : t ? 1 : 0;
  }
  function fr(_, e) {
    const t = F_(e), r = Pe(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = O;
    z().setInt32(_ + 4, n, true), z().setInt32(_ + 0, r, true);
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
    z().setFloat64(_ + 8, H(r) ? 0 : r, true), z().setInt32(_ + 0, !H(r), true);
  }
  function $r(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = H(r) ? 0 : Pe(r, u.__wbindgen_malloc, u.__wbindgen_realloc), a = O;
    z().setInt32(_ + 4, a, true), z().setInt32(_ + 0, n, true);
  }
  function vr(_, e) {
    throw new Error(q(_, e));
  }
  function Sr(_) {
    _._wbg_cb_unref();
  }
  function Ar() {
    return U(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Ir() {
    return U(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function Dr() {
    return U(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Tr() {
    return U(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function Fr() {
    return U(function(_, e, t, r) {
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
    return U(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function Mr() {
    return U(function(_, e) {
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
    return U(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function zr(_, e) {
    return _[e >>> 0];
  }
  function Ur() {
    return U(function(_, e) {
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
    const t = e.label, r = Pe(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = O;
    z().setInt32(_ + 4, n, true), z().setInt32(_ + 0, r, true);
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
    return U(function(_) {
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
    return U(function(_, e, t, r, n, a, o) {
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
    return H(_) ? 0 : xe(_);
  }
  function Ea() {
    const _ = typeof global > "u" ? null : global;
    return H(_) ? 0 : xe(_);
  }
  function Oa() {
    const _ = typeof self > "u" ? null : self;
    return H(_) ? 0 : xe(_);
  }
  function Ga() {
    const _ = typeof window > "u" ? null : window;
    return H(_) ? 0 : xe(_);
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
    return U(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, z_(r, n), a, o);
    }, arguments);
  }
  function Na() {
    return U(function(_, e, t, r, n, a) {
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
    if (r[1]) throw F(r[0]);
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
  function xe(_) {
    const e = u.__externref_table_alloc();
    return u.__wbindgen_externrefs.set(e, _), e;
  }
  function w(_, e) {
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
    return _ = _ >>> 0, we().subarray(_ / 1, _ / 1 + e);
  }
  let be = null;
  function z() {
    return (be === null || be.buffer.detached === true || be.buffer.detached === void 0 && be.buffer !== u.memory.buffer) && (be = new DataView(u.memory.buffer)), be;
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
  function we() {
    return (Ve === null || Ve.byteLength === 0) && (Ve = new Uint8Array(u.memory.buffer)), Ve;
  }
  function U(_, e) {
    try {
      return _.apply(this, e);
    } catch (t) {
      const r = xe(t);
      u.__wbindgen_exn_store(r);
    }
  }
  function H(_) {
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
    return we().set(_, t / 1), O = _.length, t;
  }
  function Le(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return co().set(_, t / 8), O = _.length, t;
  }
  function so(_, e) {
    const t = e(_.length * 4, 4) >>> 0;
    for (let r = 0; r < _.length; r++) {
      const n = xe(_[r]);
      z().setUint32(t + 4 * r, n, true);
    }
    return O = _.length, t;
  }
  function Pe(_, e, t) {
    if (t === void 0) {
      const c = Se.encode(_), b = e(c.length, 1) >>> 0;
      return we().subarray(b, b + c.length).set(c), O = c.length, b;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = we();
    let o = 0;
    for (; o < r; o++) {
      const c = _.charCodeAt(o);
      if (c > 127) break;
      a[n + o] = c;
    }
    if (o !== r) {
      o !== 0 && (_ = _.slice(o)), n = t(n, r, r = o + _.length * 3, 1) >>> 0;
      const c = we().subarray(n + o, n + r), b = Se.encodeInto(_, c);
      o += b.written, n = t(n, r, o, 1) >>> 0;
    }
    return O = o, n;
  }
  function F(_) {
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
    }), r_.decode(), d_ = e), r_.decode(we().subarray(_, _ + e));
  }
  const Se = new TextEncoder();
  "encodeInto" in Se || (Se.encodeInto = function(_, e) {
    const t = Se.encode(_);
    return e.set(t), {
      read: _.length,
      written: t.length
    };
  });
  let O = 0, u;
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
  }, ar), { memory: po, __wbg_proteusapp_free: wo, proteusapp_addChild: lo, proteusapp_animateTo: mo, proteusapp_bakeTexture: ho, proteusapp_bakedImageSize: yo, proteusapp_bakedTextSize: xo, proteusapp_bindKey: $o, proteusapp_channelDestroy: vo, proteusapp_channelSet: So, proteusapp_clearFocus: Ao, proteusapp_component: Io, proteusapp_copyBakedImageFrom: Do, proteusapp_createVideo: To, proteusapp_cropImage: Fo, proteusapp_declareGeometry: Bo, proteusapp_declaredGeometry: Po, proteusapp_destroy: ko, proteusapp_devices: Mo, proteusapp_focus: Ro, proteusapp_focused: Co, proteusapp_freeResources: Vo, proteusapp_get: Lo, proteusapp_hideVideo: Eo, proteusapp_inputDevices: Oo, proteusapp_inputMode: Go, proteusapp_isFocused: Wo, proteusapp_loadTexture: zo, proteusapp_mergeFrom: Uo, proteusapp_mergeFromWithBehavior: qo, proteusapp_new: Ho, proteusapp_onAppKey: jo, proteusapp_onBlur: Ko, proteusapp_onClick: No, proteusapp_onDrag: Jo, proteusapp_onDropped: Qo, proteusapp_onFocus: Xo, proteusapp_onFocusLost: Yo, proteusapp_onHoverEnter: Zo, proteusapp_onHoverExit: ec, proteusapp_onKey: _c, proteusapp_onPress: tc, proteusapp_onRelease: rc, proteusapp_onTransitionComplete: nc, proteusapp_pointerLeft: ac, proteusapp_pointerMoved: oc, proteusapp_pointerPressed: cc, proteusapp_pointerReleased: bc, proteusapp_releaseVideo: sc, proteusapp_removeChild: ic, proteusapp_resetKeyMap: fc, proteusapp_setDeclaredGeometry: uc, proteusapp_setDefaultFocus: dc, proteusapp_setDevices: gc, proteusapp_setDisabled: pc, proteusapp_setImage: wc, proteusapp_setInputDevices: lc, proteusapp_setInteractive: mc, proteusapp_setKeyRepeat: hc, proteusapp_setLongPressMs: yc, proteusapp_setNavigatingActions: xc, proteusapp_setOpacity: $c, proteusapp_setText: vc, proteusapp_setTexture: Sc, proteusapp_setTransitionInteraction: Ac, proteusapp_setVideoCrossfade: Ic, proteusapp_setVisible: Dc, proteusapp_showVideo: Tc, proteusapp_splitTo: Fc, proteusapp_splitToWithBehavior: Bc, proteusapp_splitToWithStates: Pc, proteusapp_texture: kc, proteusapp_textureState: Mc, proteusapp_tick: Rc, proteusapp_transitionChannel: Cc, proteusapp_unbindKey: Vc, proteusapp_uploadVideoFrame: Lc, __wbg_handle_free: Ec, __wbg_texturehandle_free: Oc, __wbg_transitionchannel_free: Gc, __wbg_videohandle_free: Wc, handle_fromId: zc, handle_id: Uc, texturehandle_fromId: qc, texturehandle_id: Hc, __abort_handler: jc, __instance_terminated: Kc, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Nc, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Jc, __wbindgen_malloc: Qc, __wbindgen_realloc: Xc, __wbindgen_exn_store: Yc, __externref_table_alloc: Zc, __wbindgen_externrefs: eb, __wbindgen_destroy_closure: _b, __externref_table_dealloc: tb, __wbindgen_free: rb, __wbindgen_start: Ct } = go, nb = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: jc,
    __externref_table_alloc: Zc,
    __externref_table_dealloc: tb,
    __instance_terminated: Kc,
    __wbg_handle_free: Ec,
    __wbg_proteusapp_free: wo,
    __wbg_texturehandle_free: Oc,
    __wbg_transitionchannel_free: Gc,
    __wbg_videohandle_free: Wc,
    __wbindgen_destroy_closure: _b,
    __wbindgen_exn_store: Yc,
    __wbindgen_externrefs: eb,
    __wbindgen_free: rb,
    __wbindgen_malloc: Qc,
    __wbindgen_realloc: Xc,
    __wbindgen_start: Ct,
    handle_fromId: zc,
    handle_id: Uc,
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
    proteusapp_setOpacity: $c,
    proteusapp_setText: vc,
    proteusapp_setTexture: Sc,
    proteusapp_setTransitionInteraction: Ac,
    proteusapp_setVideoCrossfade: Ic,
    proteusapp_setVisible: Dc,
    proteusapp_showVideo: Tc,
    proteusapp_splitTo: Fc,
    proteusapp_splitToWithBehavior: Bc,
    proteusapp_splitToWithStates: Pc,
    proteusapp_texture: kc,
    proteusapp_textureState: Mc,
    proteusapp_tick: Rc,
    proteusapp_transitionChannel: Cc,
    proteusapp_unbindKey: Vc,
    proteusapp_uploadVideoFrame: Lc,
    texturehandle_fromId: qc,
    texturehandle_id: Hc,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Jc,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Nc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  uo(nb);
  Ct();
  const ab = "" + new URL("proteus_host_web_bg-B97B-NTd.wasm", import.meta.url).href;
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
      l(e, x), l(t, x);
      const r = i.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw B(r[0]);
    }
    animateTo(e, t, r) {
      l(e, x);
      const n = i.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw B(n[0]);
    }
    bakeTexture(e, t, r, n) {
      const a = p_(r, i.__wbindgen_malloc), o = C, c = i.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, o, n);
      return ae.__wrap(c);
    }
    bakedImageSize(e) {
      return l(e, x), i.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return l(e, x), i.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bindKey(e, t) {
      const r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = C, a = i.proteusapp_bindKey(this.__wbg_ptr, e, r, n);
      if (a[1]) throw B(a[0]);
    }
    channelDestroy(e) {
      l(e, de);
      var t = e.__destroy_into_raw();
      i.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      l(e, de), l(t, x), l(r, x);
      const o = i.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (o[1]) throw B(o[0]);
    }
    clearFocus() {
      i.proteusapp_clearFocus(this.__wbg_ptr);
    }
    component(e) {
      const t = i.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw B(t[1]);
      return x.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      l(e, x), l(t, x);
      const r = i.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw B(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = i.proteusapp_createVideo(this.__wbg_ptr);
      return ge.__wrap(e);
    }
    cropImage(e, t) {
      l(e, x);
      const r = i.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw B(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      l(e, x);
      const r = i.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    declaredGeometry(e) {
      return l(e, x), i.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      l(e, x);
      var t = e.__destroy_into_raw();
      const r = i.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    devices(e) {
      return l(e, x), i.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    focus(e) {
      l(e, x);
      const t = i.proteusapp_focus(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw B(t[0]);
    }
    focused() {
      const e = i.proteusapp_focused(this.__wbg_ptr);
      return e === 0 ? void 0 : x.__wrap(e);
    }
    freeResources(e) {
      l(e, x);
      const t = i.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw B(t[0]);
    }
    get(e) {
      return l(e, x), i.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      l(e, x);
      const t = i.proteusapp_hideVideo(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw B(t[0]);
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
      return l(e, x), i.proteusapp_isFocused(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    loadTexture(e, t) {
      const r = p_(e, i.__wbindgen_malloc), n = C, a = i.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : ae.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      l(e, x);
      const a = je(t, i.__wbindgen_malloc), o = C, c = i.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw B(c[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      l(e, x);
      const o = je(t, i.__wbindgen_malloc), c = C, b = i.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
      if (b[1]) throw B(b[0]);
    }
    constructor() {
      const e = i.proteusapp_new();
      return this.__wbg_ptr = e, g_.register(this, this.__wbg_ptr, this), this;
    }
    onAppKey(e) {
      i.proteusapp_onAppKey(this.__wbg_ptr, e);
    }
    onBlur(e, t) {
      l(e, x), i.proteusapp_onBlur(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onClick(e, t) {
      l(e, x), i.proteusapp_onClick(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDrag(e, t) {
      l(e, x), i.proteusapp_onDrag(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDropped(e, t) {
      l(e, de), i.proteusapp_onDropped(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocus(e, t) {
      l(e, x), i.proteusapp_onFocus(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocusLost(e) {
      i.proteusapp_onFocusLost(this.__wbg_ptr, e);
    }
    onHoverEnter(e, t) {
      l(e, x), i.proteusapp_onHoverEnter(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverExit(e, t) {
      l(e, x), i.proteusapp_onHoverExit(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onKey(e, t) {
      l(e, x), i.proteusapp_onKey(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onPress(e, t) {
      l(e, x), i.proteusapp_onPress(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onRelease(e, t) {
      l(e, x), i.proteusapp_onRelease(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onTransitionComplete(e, t) {
      l(e, x), i.proteusapp_onTransitionComplete(this.__wbg_ptr, e.__wbg_ptr, t);
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
      l(e, ge), i.proteusapp_releaseVideo(this.__wbg_ptr, e.__wbg_ptr);
    }
    removeChild(e, t) {
      l(e, x), l(t, x);
      const r = i.proteusapp_removeChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw B(r[0]);
    }
    resetKeyMap() {
      i.proteusapp_resetKeyMap(this.__wbg_ptr);
    }
    setDeclaredGeometry(e, t) {
      l(e, x);
      const r = i.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setDefaultFocus(e, t) {
      l(e, x);
      const r = i.proteusapp_setDefaultFocus(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setDevices(e, t) {
      l(e, x);
      const r = i.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setDisabled(e, t) {
      l(e, x);
      const r = i.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setImage(e, t) {
      l(e, x);
      const r = i.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setInputDevices(e) {
      const t = i.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw B(t[0]);
    }
    setInteractive(e, t) {
      l(e, x);
      const r = i.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setKeyRepeat(e) {
      const t = i.proteusapp_setKeyRepeat(this.__wbg_ptr, e);
      if (t[1]) throw B(t[0]);
    }
    setLongPressMs(e) {
      i.proteusapp_setLongPressMs(this.__wbg_ptr, e);
    }
    setNavigatingActions(e) {
      const t = ml(e, i.__wbindgen_malloc), r = C;
      i.proteusapp_setNavigatingActions(this.__wbg_ptr, t, r);
    }
    setOpacity(e, t) {
      l(e, x);
      const r = i.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setText(e, t) {
      l(e, x);
      const r = i.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setTexture(e, t) {
      l(e, x), l(t, ae);
      const r = i.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw B(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      l(e, x);
      const r = i.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setVideoCrossfade(e, t) {
      l(e, x);
      const r = i.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw B(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      l(e, x);
      const r = i.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    showVideo(e, t) {
      l(e, x), l(t, ge);
      const r = i.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw B(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      l(e, x);
      const a = je(t, i.__wbindgen_malloc), o = C, c = i.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw B(c[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      l(e, x);
      const o = je(t, i.__wbindgen_malloc), c = C, b = i.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
      if (b[1]) throw B(b[0]);
    }
    splitToWithStates(e, t, r, n) {
      l(e, x);
      const a = i.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw B(a[0]);
    }
    texture(e) {
      const t = i.proteusapp_texture(this.__wbg_ptr, e);
      return ae.__wrap(t);
    }
    textureState(e) {
      return l(e, ae), i.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
    }
    tick(e) {
      i.proteusapp_tick(this.__wbg_ptr, e);
    }
    transitionChannel(e) {
      const t = i.proteusapp_transitionChannel(this.__wbg_ptr, !$(e), $(e) ? 0 : e);
      return de.__wrap(t);
    }
    unbindKey(e) {
      const t = i.proteusapp_unbindKey(this.__wbg_ptr, e);
      if (t[3]) throw B(t[2]);
      let r;
      return t[0] !== 0 && (r = A(t[0], t[1]).slice(), i.__wbindgen_free(t[0], t[1] * 1, 1)), r;
    }
    uploadVideoFrame(e, t, r, n) {
      l(e, ge);
      const a = p_(n, i.__wbindgen_malloc), o = C;
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
  let de = class Lt {
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
  Symbol.dispose && (de.prototype[Symbol.dispose] = de.prototype.free);
  let ge = class Et {
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
  Symbol.dispose && (ge.prototype[Symbol.dispose] = ge.prototype.free);
  function ob(_, e, t, r) {
    const n = W(_, i.__wbindgen_malloc, i.__wbindgen_realloc), a = C;
    return i.mount(n, a, e, $(t) ? 0 : D(t), r);
  }
  function cb(_, e) {
    return Error(A(_, e));
  }
  function bb(_) {
    return Number(_);
  }
  function sb(_, e) {
    const t = String(e), r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = C;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function ib(_) {
    return _.Window;
  }
  function fb(_) {
    return _.WorkerGlobalScope;
  }
  function ub(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    R().setBigInt64(_ + 8, $(r) ? BigInt(0) : r, true), R().setInt32(_ + 0, !$(r), true);
  }
  function db(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return $(t) ? 16777215 : t ? 1 : 0;
  }
  function gb(_, e) {
    const t = M_(e), r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = C;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function pb(_, e) {
    return _ in e;
  }
  function wb(_) {
    return typeof _ == "bigint";
  }
  function lb(_) {
    return typeof _ == "function";
  }
  function mb(_) {
    return _ === null;
  }
  function hb(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function yb(_) {
    return typeof _ == "string";
  }
  function xb(_) {
    return _ === void 0;
  }
  function $b(_, e) {
    return _ === e;
  }
  function vb(_, e) {
    return _ == e;
  }
  function Sb(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    R().setFloat64(_ + 8, $(r) ? 0 : r, true), R().setInt32(_ + 0, !$(r), true);
  }
  function Ab(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = C;
    R().setInt32(_ + 4, a, true), R().setInt32(_ + 0, n, true);
  }
  function Ib(_, e) {
    throw new Error(A(_, e));
  }
  function Db(_) {
    _._wbg_cb_unref();
  }
  function Tb(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Fb(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Bb() {
    return p(function(_, e, t, r) {
      _.addEventListener(A(e, t), r);
    }, arguments);
  }
  function Pb(_) {
    return _.altKey;
  }
  function kb(_, e, t) {
    _.attachShader(e, t);
  }
  function Mb(_, e, t) {
    _.attachShader(e, t);
  }
  function Rb(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function Cb() {
    return p(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Vb(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, A(r, n));
  }
  function Lb(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, A(r, n));
  }
  function Eb(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function Ob(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function Gb(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function Wb(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function zb(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function Ub(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function qb(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Hb(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function jb(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Kb(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Nb(_, e) {
    _.bindVertexArrayOES(e);
  }
  function Jb(_, e) {
    _.bindVertexArray(e);
  }
  function Qb(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Xb(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Yb(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Zb(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function es(_, e) {
    _.blendEquation(e >>> 0);
  }
  function _s(_, e) {
    _.blendEquation(e >>> 0);
  }
  function ts(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function rs(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function ns(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function as(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function os(_, e, t, r, n, a, o, c, b, f, d) {
    _.blitFramebuffer(e, t, r, n, a, o, c, b, f >>> 0, d >>> 0);
  }
  function cs(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function bs(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function ss(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function is(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function fs(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function us(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function ds(_) {
    return _.button;
  }
  function gs() {
    return p(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function ps() {
    return p(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function ws() {
    return p(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function ls(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, L(r, n));
  }
  function ms(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, Y(r, n));
  }
  function hs(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, $e(r, n));
  }
  function ys(_, e) {
    _.clearDepth(e);
  }
  function xs(_, e) {
    _.clearDepth(e);
  }
  function $s(_, e) {
    _.clearStencil(e);
  }
  function vs(_, e) {
    _.clearStencil(e);
  }
  function Ss(_, e) {
    _.clear(e >>> 0);
  }
  function As(_, e) {
    _.clear(e >>> 0);
  }
  function Is(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function Ds(_, e) {
    const t = e.code, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = C;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function Ts(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Fs(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Bs(_, e) {
    _.compileShader(e);
  }
  function Ps(_, e) {
    _.compileShader(e);
  }
  function ks(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function Ms(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function Rs(_, e, t, r, n, a, o, c, b, f) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b, f);
  }
  function Cs(_, e, t, r, n, a, o, c, b, f, d, I) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d, I);
  }
  function Vs(_, e, t, r, n, a, o, c, b, f, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d);
  }
  function Ls() {
    return p(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function Es(_) {
    return _.contentRect;
  }
  function Os(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function Gs(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function Ws(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function zs(_, e, t, r, n, a, o, c, b, f) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f);
  }
  function Us() {
    return p(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function qs() {
    return p(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function Hs(_, e) {
    return _.createBindGroup(e);
  }
  function js(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : D(e);
  }
  function Ks() {
    return p(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function Ns(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : D(e);
  }
  function Js(_, e) {
    return _.createCommandEncoder(e);
  }
  function Qs(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : D(e);
  }
  function Xs(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : D(e);
  }
  function Ys(_, e) {
    return _.createPipelineLayout(e);
  }
  function Zs(_) {
    const e = _.createProgram();
    return $(e) ? 0 : D(e);
  }
  function ei(_) {
    const e = _.createProgram();
    return $(e) ? 0 : D(e);
  }
  function _i(_) {
    const e = _.createQuery();
    return $(e) ? 0 : D(e);
  }
  function ti() {
    return p(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function ri(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : D(e);
  }
  function ni(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : D(e);
  }
  function ai(_, e) {
    return _.createSampler(e);
  }
  function oi(_) {
    const e = _.createSampler();
    return $(e) ? 0 : D(e);
  }
  function ci(_, e) {
    return _.createShaderModule(e);
  }
  function bi(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : D(t);
  }
  function si(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : D(t);
  }
  function ii(_) {
    const e = _.createTexture();
    return $(e) ? 0 : D(e);
  }
  function fi(_) {
    const e = _.createTexture();
    return $(e) ? 0 : D(e);
  }
  function ui() {
    return p(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function di(_) {
    const e = _.createVertexArrayOES();
    return $(e) ? 0 : D(e);
  }
  function gi(_) {
    const e = _.createVertexArray();
    return $(e) ? 0 : D(e);
  }
  function pi() {
    return p(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function wi(_) {
    return _.ctrlKey;
  }
  function li(_, e) {
    _.cullFace(e >>> 0);
  }
  function mi(_, e) {
    _.cullFace(e >>> 0);
  }
  function hi(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function yi(_, e) {
    _.deleteBuffer(e);
  }
  function xi(_, e) {
    _.deleteBuffer(e);
  }
  function $i(_, e) {
    _.deleteFramebuffer(e);
  }
  function vi(_, e) {
    _.deleteFramebuffer(e);
  }
  function Si(_, e) {
    _.deleteProgram(e);
  }
  function Ai(_, e) {
    _.deleteProgram(e);
  }
  function Ii(_, e) {
    _.deleteQuery(e);
  }
  function Di(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Ti(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Fi(_, e) {
    _.deleteSampler(e);
  }
  function Bi(_, e) {
    _.deleteShader(e);
  }
  function Pi(_, e) {
    _.deleteShader(e);
  }
  function ki(_, e) {
    _.deleteSync(e);
  }
  function Mi(_, e) {
    _.deleteTexture(e);
  }
  function Ri(_, e) {
    _.deleteTexture(e);
  }
  function Ci(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function Vi(_, e) {
    _.deleteVertexArray(e);
  }
  function Li(_, e) {
    _.depthFunc(e >>> 0);
  }
  function Ei(_, e) {
    _.depthFunc(e >>> 0);
  }
  function Oi(_, e) {
    _.depthMask(e !== 0);
  }
  function Gi(_, e) {
    _.depthMask(e !== 0);
  }
  function Wi(_, e, t) {
    _.depthRange(e, t);
  }
  function zi(_, e, t) {
    _.depthRange(e, t);
  }
  function Ui(_, e) {
    const t = e.description, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = C;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function qi(_) {
    _.destroy();
  }
  function Hi(_) {
    return _.devicePixelRatio;
  }
  function ji(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function Ki(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function Ni(_, e) {
    _.disable(e >>> 0);
  }
  function Ji(_, e) {
    _.disable(e >>> 0);
  }
  function Qi(_) {
    const e = _.document;
    return $(e) ? 0 : D(e);
  }
  function Xi(_) {
    return _.done;
  }
  function Yi(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function Zi(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function ef(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function _f(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function tf(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function rf(_, e) {
    _.drawBuffers(e);
  }
  function nf(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function af(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function of(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function cf(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function bf(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function sf(_, e) {
    _.enable(e >>> 0);
  }
  function ff(_, e) {
    _.enable(e >>> 0);
  }
  function uf(_, e) {
    _.endQuery(e >>> 0);
  }
  function df(_) {
    _.end();
  }
  function gf(_) {
    return Object.entries(_);
  }
  function pf(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function wf(_) {
    console.error(_);
  }
  function lf(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(A(_, e));
    } finally {
      i.__wbindgen_free(t, r, 1);
    }
  }
  function mf(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return $(r) ? 0 : D(r);
  }
  function hf(_) {
    return _.finish();
  }
  function yf(_, e) {
    return _.finish(e);
  }
  function xf(_) {
    _.flush();
  }
  function $f(_) {
    _.flush();
  }
  function vf() {
    return p(function(_) {
      _.focus();
    }, arguments);
  }
  function Sf(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function Af(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function If(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function Df(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function Tf(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function Ff(_, e, t, r, n, a, o) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, o);
  }
  function Bf(_, e) {
    _.frontFace(e >>> 0);
  }
  function Pf(_, e) {
    _.frontFace(e >>> 0);
  }
  function kf(_) {
    return _.getBoundingClientRect();
  }
  function Mf(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function Rf() {
    return p(function(_, e, t, r) {
      const n = _.getContext(A(e, t), r);
      return $(n) ? 0 : D(n);
    }, arguments);
  }
  function Cf() {
    return p(function(_, e, t) {
      const r = _.getContext(A(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function Vf() {
    return p(function(_, e, t) {
      const r = _.getContext(A(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function Lf() {
    return p(function(_, e, t, r) {
      const n = _.getContext(A(e, t), r);
      return $(n) ? 0 : D(n);
    }, arguments);
  }
  function Ef() {
    return p(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function Of(_, e, t) {
    const r = _.getElementById(A(e, t));
    return $(r) ? 0 : D(r);
  }
  function Gf() {
    return p(function(_, e, t) {
      const r = _.getExtension(A(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function Wf() {
    return p(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function zf() {
    return p(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function Uf() {
    return p(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function qf() {
    return p(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function Hf(_) {
    const e = _.getPreferredCanvasFormat();
    return (oe.indexOf(e) + 1 || 96) - 1;
  }
  function jf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = C;
    R().setInt32(_ + 4, a, true), R().setInt32(_ + 0, n, true);
  }
  function Kf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = C;
    R().setInt32(_ + 4, a, true), R().setInt32(_ + 0, n, true);
  }
  function Nf(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function Jf(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function Qf(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function Xf(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = C;
    R().setInt32(_ + 4, a, true), R().setInt32(_ + 0, n, true);
  }
  function Yf(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = C;
    R().setInt32(_ + 4, a, true), R().setInt32(_ + 0, n, true);
  }
  function Zf(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function eu(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function _u(_) {
    const e = _.getSupportedExtensions();
    return $(e) ? 0 : D(e);
  }
  function tu(_) {
    const e = _.getSupportedProfiles();
    return $(e) ? 0 : D(e);
  }
  function ru(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function nu(_, e, t, r) {
    return _.getUniformBlockIndex(e, A(t, r));
  }
  function au(_, e, t, r) {
    const n = _.getUniformLocation(e, A(t, r));
    return $(n) ? 0 : D(n);
  }
  function ou(_, e, t, r) {
    const n = _.getUniformLocation(e, A(t, r));
    return $(n) ? 0 : D(n);
  }
  function cu(_, e) {
    return _[e >>> 0];
  }
  function bu(_, e) {
    const t = _[e >>> 0];
    return $(t) ? 0 : D(t);
  }
  function su() {
    return p(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function iu(_, e) {
    return _[e >>> 0];
  }
  function fu(_, e) {
    return _[e];
  }
  function uu(_) {
    return _.gpu;
  }
  function du(_, e, t) {
    return _.hasAttribute(A(e, t));
  }
  function gu(_) {
    return _.height;
  }
  function pu(_) {
    return _.height;
  }
  function wu(_) {
    return _.hidden;
  }
  function lu(_, e, t) {
    return _.includes(e, t);
  }
  function mu(_) {
    return _.info;
  }
  function hu(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function yu(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function xu(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function $u(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function vu(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function Su(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function Au(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function Iu(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function Du(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Tu(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function Fu() {
    return p(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function Bu(_) {
    return Array.isArray(_);
  }
  function Pu(_) {
    return _.isComposing;
  }
  function ku(_) {
    return Number.isSafeInteger(_);
  }
  function Mu(_, e) {
    return Object.is(_, e);
  }
  function Ru() {
    return Symbol.iterator;
  }
  function Cu(_, e) {
    const t = e.key, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = C;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function Vu(_, e) {
    const t = e.label, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = C;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function Lu(_) {
    return _.length;
  }
  function Eu(_) {
    return _.length;
  }
  function Ou(_) {
    return _.limits;
  }
  function Gu(_) {
    return _.limits;
  }
  function Wu(_, e) {
    _.linkProgram(e);
  }
  function zu(_, e) {
    _.linkProgram(e);
  }
  function Uu(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function qu(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function Hu(_) {
    return _.maxBindGroups;
  }
  function ju(_) {
    return _.maxBindingsPerBindGroup;
  }
  function Ku(_) {
    return _.maxBufferSize;
  }
  function Nu(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function Ju(_) {
    return _.maxColorAttachments;
  }
  function Qu(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function Xu(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function Yu(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function Zu(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function ed(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function _d(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function td(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function rd(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function nd(_) {
    return _.maxInterStageShaderVariables;
  }
  function ad(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function od(_) {
    return _.maxSamplersPerShaderStage;
  }
  function cd(_) {
    return _.maxStorageBufferBindingSize;
  }
  function bd(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function sd(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function id(_) {
    return _.maxTextureArrayLayers;
  }
  function fd(_) {
    return _.maxTextureDimension1D;
  }
  function ud(_) {
    return _.maxTextureDimension2D;
  }
  function dd(_) {
    return _.maxTextureDimension3D;
  }
  function gd(_) {
    return _.maxUniformBufferBindingSize;
  }
  function pd(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function wd(_) {
    return _.maxVertexAttributes;
  }
  function ld(_) {
    return _.maxVertexBufferArrayStride;
  }
  function md(_) {
    return _.maxVertexBuffers;
  }
  function hd(_) {
    return _.metaKey;
  }
  function yd(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function xd(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function $d(_) {
    return _.navigator;
  }
  function vd(_) {
    return _.navigator;
  }
  function Sd() {
    return p(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function Ad() {
    return new Error();
  }
  function Id() {
    return new Object();
  }
  function Dd() {
    return new Array();
  }
  function Td(_) {
    return new Uint8Array(_);
  }
  function Fd(_, e) {
    return new Error(A(_, e));
  }
  function Bd(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, o) => {
        const c = t.a;
        t.a = 0;
        try {
          return j2(c, t.b, a, o);
        } finally {
          t.a = c;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function Pd(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function kd() {
    return p(function(_) {
      return _.next();
    }, arguments);
  }
  function Md(_) {
    return _.next;
  }
  function Rd(_, e) {
    _.observe(e);
  }
  function Cd(_) {
    return Array.of(_);
  }
  function Vd(_) {
    return _.offsetX;
  }
  function Ld(_) {
    return _.offsetY;
  }
  function Ed(_) {
    return _.onSubmittedWorkDone();
  }
  function Od(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function Gd(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function Wd(_, e, t) {
    _.polygonOffset(e, t);
  }
  function zd(_, e, t) {
    _.polygonOffset(e, t);
  }
  function Ud(_) {
    _.preventDefault();
  }
  function qd(_) {
    return P_.__wrap(_);
  }
  function Hd(_, e, t) {
    Uint8Array.prototype.set.call(s_(_, e), t);
  }
  function jd(_, e) {
    return _.push(e);
  }
  function Kd(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function Nd() {
    return p(function(_, e, t) {
      return _.querySelectorAll(A(e, t));
    }, arguments);
  }
  function Jd() {
    return p(function(_, e, t) {
      const r = _.querySelector(A(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function Qd(_) {
    return _.queueMicrotask;
  }
  function Xd(_) {
    queueMicrotask(_);
  }
  function Yd(_) {
    return _.queue;
  }
  function Zd(_, e) {
    _.readBuffer(e >>> 0);
  }
  function eg() {
    return p(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function _g() {
    return p(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function tg() {
    return p(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function rg(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function ng(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function ag(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function og(_) {
    return _.repeat;
  }
  function cg(_, e) {
    return _.requestAdapter(e);
  }
  function bg(_) {
    return _.requestAdapter();
  }
  function sg() {
    return p(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function ig(_, e) {
    return _.requestDevice(e);
  }
  function fg(_) {
    return Promise.resolve(_);
  }
  function ug(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function dg(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function gg(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function pg(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function wg() {
    return p(function(_, e, t, r, n) {
      _.setAttribute(A(e, t), A(r, n));
    }, arguments);
  }
  function lg() {
    return p(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, $e(r, n), a, o >>> 0);
    }, arguments);
  }
  function mg(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function hg(_, e, t, r, n) {
    _.setIndexBuffer(e, H_[t], r, n);
  }
  function yg(_, e, t, r) {
    _.setIndexBuffer(e, H_[t], r);
  }
  function xg(_, e) {
    _.setPipeline(e);
  }
  function $g(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function vg(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function Sg(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
  }
  function Ag(_, e, t) {
    _.set(e, t >>> 0);
  }
  function Ig() {
    return p(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function Dg(_, e, t) {
    _[e] = t;
  }
  function Tg(_, e) {
    _.a = e;
  }
  function Fg(_, e) {
    _.access = rl[e];
  }
  function Bg(_, e) {
    _.addressModeU = U_[e];
  }
  function Pg(_, e) {
    _.addressModeV = U_[e];
  }
  function kg(_, e) {
    _.addressModeW = U_[e];
  }
  function Mg(_, e) {
    _.alpha = e;
  }
  function Rg(_, e) {
    _.alphaMode = Q2[e];
  }
  function Cg(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function Vg(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function Lg(_, e) {
    _.arrayStride = e;
  }
  function Eg(_, e) {
    _.aspect = Wt[e];
  }
  function Og(_, e) {
    _.aspect = Wt[e];
  }
  function Gg(_, e) {
    _.attributes = e;
  }
  function Wg(_, e) {
    _.b = e;
  }
  function zg(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function Ug(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function qg(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function Hg(_, e) {
    _.bindGroupLayouts = e;
  }
  function jg(_, e) {
    _.binding = e >>> 0;
  }
  function Kg(_, e) {
    _.binding = e >>> 0;
  }
  function Ng(_, e) {
    _.blend = e;
  }
  function Jg(_, e) {
    _.buffer = e;
  }
  function Qg(_, e) {
    _.buffer = e;
  }
  function Xg(_, e) {
    _.buffers = e;
  }
  function Yg(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function Zg(_, e) {
    _.clearValue = e;
  }
  function e0(_, e, t) {
    _.code = A(e, t);
  }
  function _0(_, e) {
    _.colorAttachments = e;
  }
  function t0(_, e) {
    _.color = e;
  }
  function r0(_, e) {
    _.compare = q_[e];
  }
  function n0(_, e) {
    _.compare = q_[e];
  }
  function a0(_, e) {
    _.count = e >>> 0;
  }
  function o0(_, e) {
    _.cullMode = X2[e];
  }
  function c0(_, e, t) {
    _[e >>> 0] = t;
  }
  function b0(_, e) {
    _.depthBias = e;
  }
  function s0(_, e) {
    _.depthBiasClamp = e;
  }
  function i0(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function f0(_, e) {
    _.depthClearValue = e;
  }
  function u0(_, e) {
    _.depthCompare = q_[e];
  }
  function d0(_, e) {
    _.depthFailOp = K_[e];
  }
  function g0(_, e) {
    _.depthLoadOp = j_[e];
  }
  function p0(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function w0(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function l0(_, e) {
    _.depthStencil = e;
  }
  function m0(_, e) {
    _.depthStencilAttachment = e;
  }
  function h0(_, e) {
    _.depthStoreOp = N_[e];
  }
  function y0(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function x0(_, e) {
    _.device = e;
  }
  function $0(_, e) {
    _.dimension = J_[e];
  }
  function v0(_, e) {
    _.dimension = nl[e];
  }
  function S0(_, e) {
    _.dstFactor = Ot[e];
  }
  function A0(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function I0(_, e) {
    _.entries = e;
  }
  function D0(_, e) {
    _.entries = e;
  }
  function T0(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function F0(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function B0(_, e) {
    _.externalTexture = e;
  }
  function P0(_, e) {
    _.failOp = K_[e];
  }
  function k0(_, e) {
    _.format = oe[e];
  }
  function M0(_, e) {
    _.format = ol[e];
  }
  function R0(_, e) {
    _.format = oe[e];
  }
  function C0(_, e) {
    _.format = oe[e];
  }
  function V0(_, e) {
    _.format = oe[e];
  }
  function L0(_, e) {
    _.format = oe[e];
  }
  function E0(_, e) {
    _.format = oe[e];
  }
  function O0(_, e) {
    _.fragment = e;
  }
  function G0(_, e) {
    _.frontFace = Y2[e];
  }
  function W0(_, e) {
    _.g = e;
  }
  function z0(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function U0(_, e) {
    _.height = e >>> 0;
  }
  function q0(_, e) {
    _.height = e >>> 0;
  }
  function H0(_, e) {
    _.height = e >>> 0;
  }
  function j0(_, e, t) {
    _.label = A(e, t);
  }
  function K0(_, e, t) {
    _.label = A(e, t);
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
  function ap(_, e) {
    _.layout = e;
  }
  function op(_, e) {
    _.layout = e;
  }
  function cp(_, e) {
    _.loadOp = j_[e];
  }
  function bp(_, e) {
    _.lodMaxClamp = e;
  }
  function sp(_, e) {
    _.lodMinClamp = e;
  }
  function ip(_, e) {
    _.magFilter = Gt[e];
  }
  function fp(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function up(_, e) {
    _.mask = e >>> 0;
  }
  function dp(_, e) {
    _.maxAnisotropy = e;
  }
  function gp(_, e) {
    _.minBindingSize = e;
  }
  function pp(_, e) {
    _.minFilter = Gt[e];
  }
  function wp(_, e) {
    _.mipLevel = e >>> 0;
  }
  function lp(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function mp(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function hp(_, e) {
    _.mipmapFilter = Z2[e];
  }
  function yp(_, e) {
    _.module = e;
  }
  function xp(_, e) {
    _.module = e;
  }
  function $p(_, e) {
    _.multisample = e;
  }
  function vp(_, e) {
    _.multisampled = e !== 0;
  }
  function Sp(_, e) {
    _.offset = e;
  }
  function Ap(_, e) {
    _.offset = e;
  }
  function Ip(_, e) {
    _.offset = e;
  }
  function Dp(_, e) {
    _.operation = N2[e];
  }
  function Tp(_, e) {
    _.origin = e;
  }
  function Fp(_, e) {
    _.passOp = K_[e];
  }
  function Bp(_, e) {
    _.powerPreference = el[e];
  }
  function Pp(_, e) {
    _.primitive = e;
  }
  function kp(_, e) {
    _.querySet = e;
  }
  function Mp(_, e) {
    _.r = e;
  }
  function Rp(_, e) {
    _.requiredFeatures = e;
  }
  function Cp(_, e) {
    _.requiredLimits = e;
  }
  function Vp(_, e) {
    _.resolveTarget = e;
  }
  function Lp(_, e) {
    _.resource = e;
  }
  function Ep(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function Op(_, e) {
    _.sampleCount = e >>> 0;
  }
  function Gp(_, e) {
    _.sampleType = al[e];
  }
  function Wp(_, e) {
    _.sampler = e;
  }
  function zp(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function Up(_, e) {
    _.size = e;
  }
  function qp(_, e) {
    _.size = e;
  }
  function Hp(_, e) {
    _.size = e;
  }
  function jp(_, e) {
    _.srcFactor = Ot[e];
  }
  function Kp(_, e) {
    _.stencilBack = e;
  }
  function Np(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function Jp(_, e) {
    _.stencilFront = e;
  }
  function Qp(_, e) {
    _.stencilLoadOp = j_[e];
  }
  function Xp(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function Yp(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function Zp(_, e) {
    _.stencilStoreOp = N_[e];
  }
  function ew(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function _w(_, e) {
    _.stepMode = cl[e];
  }
  function tw(_, e) {
    _.storageTexture = e;
  }
  function rw(_, e) {
    _.storeOp = N_[e];
  }
  function nw(_, e) {
    _.stripIndexFormat = H_[e];
  }
  function aw(_, e) {
    _.targets = e;
  }
  function ow(_, e) {
    _.texture = e;
  }
  function cw(_, e) {
    _.texture = e;
  }
  function bw(_, e) {
    _.timestampWrites = e;
  }
  function sw(_, e) {
    _.topology = _l[e];
  }
  function iw(_, e) {
    _.type = J2[e];
  }
  function fw(_, e) {
    _.type = tl[e];
  }
  function uw(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function dw(_, e) {
    _.usage = e >>> 0;
  }
  function gw(_, e) {
    _.usage = e >>> 0;
  }
  function pw(_, e) {
    _.usage = e >>> 0;
  }
  function ww(_, e) {
    _.usage = e >>> 0;
  }
  function lw(_, e) {
    _.vertex = e;
  }
  function mw(_, e) {
    _.view = e;
  }
  function hw(_, e) {
    _.view = e;
  }
  function yw(_, e) {
    _.viewDimension = J_[e];
  }
  function xw(_, e) {
    _.viewDimension = J_[e];
  }
  function $w(_, e) {
    _.viewFormats = e;
  }
  function vw(_, e) {
    _.viewFormats = e;
  }
  function Sw(_, e) {
    _.visibility = e >>> 0;
  }
  function Aw(_, e) {
    _.width = e >>> 0;
  }
  function Iw(_, e) {
    _.width = e >>> 0;
  }
  function Dw(_, e) {
    _.width = e >>> 0;
  }
  function Tw(_, e) {
    _.writeMask = e >>> 0;
  }
  function Fw(_, e) {
    _.x = e >>> 0;
  }
  function Bw(_, e) {
    _.y = e >>> 0;
  }
  function Pw(_, e) {
    _.z = e >>> 0;
  }
  function kw(_, e, t, r) {
    _.shaderSource(e, A(t, r));
  }
  function Mw(_, e, t, r) {
    _.shaderSource(e, A(t, r));
  }
  function Rw(_) {
    return _.shiftKey;
  }
  function Cw(_, e) {
    const t = e.stack, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = C;
    R().setInt32(_ + 4, n, true), R().setInt32(_ + 0, r, true);
  }
  function Vw() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return $(_) ? 0 : D(_);
  }
  function Lw() {
    const _ = typeof global > "u" ? null : global;
    return $(_) ? 0 : D(_);
  }
  function Ew() {
    const _ = typeof self > "u" ? null : self;
    return $(_) ? 0 : D(_);
  }
  function Ow() {
    const _ = typeof window > "u" ? null : window;
    return $(_) ? 0 : D(_);
  }
  function Gw(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function Ww(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function zw(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function Uw(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function qw(_, e) {
    _.stencilMask(e >>> 0);
  }
  function Hw(_, e) {
    _.stencilMask(e >>> 0);
  }
  function jw(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Kw(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Nw(_, e) {
    _.submit(e);
  }
  function Jw() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Qw() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Xw() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Yw() {
    return p(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function Zw() {
    return p(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function e1(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function _1(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function t1(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function r1(_, e, t, r, n, a, o) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, o);
  }
  function n1() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function a1() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function o1() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function c1() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function b1() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function s1() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function i1() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function f1() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function u1() {
    return p(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function d1() {
    return p(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function g1() {
    return p(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function p1() {
    return p(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function w1() {
    return p(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function l1() {
    return p(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function m1() {
    return p(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function h1(_, e, t) {
    return _.then(e, t);
  }
  function y1(_, e, t) {
    return _.then(e, t);
  }
  function x1(_, e) {
    return _.then(e);
  }
  function $1(_, e, t) {
    _.uniform1f(e, t);
  }
  function v1(_, e, t) {
    _.uniform1f(e, t);
  }
  function S1(_, e, t) {
    _.uniform1i(e, t);
  }
  function A1(_, e, t) {
    _.uniform1i(e, t);
  }
  function I1(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function D1(_, e, t, r) {
    _.uniform2fv(e, L(t, r));
  }
  function T1(_, e, t, r) {
    _.uniform2fv(e, L(t, r));
  }
  function F1(_, e, t, r) {
    _.uniform2iv(e, Y(t, r));
  }
  function B1(_, e, t, r) {
    _.uniform2iv(e, Y(t, r));
  }
  function P1(_, e, t, r) {
    _.uniform2uiv(e, $e(t, r));
  }
  function k1(_, e, t, r) {
    _.uniform3fv(e, L(t, r));
  }
  function M1(_, e, t, r) {
    _.uniform3fv(e, L(t, r));
  }
  function R1(_, e, t, r) {
    _.uniform3iv(e, Y(t, r));
  }
  function C1(_, e, t, r) {
    _.uniform3iv(e, Y(t, r));
  }
  function V1(_, e, t, r) {
    _.uniform3uiv(e, $e(t, r));
  }
  function L1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function E1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function O1(_, e, t, r) {
    _.uniform4fv(e, L(t, r));
  }
  function G1(_, e, t, r) {
    _.uniform4fv(e, L(t, r));
  }
  function W1(_, e, t, r) {
    _.uniform4iv(e, Y(t, r));
  }
  function z1(_, e, t, r) {
    _.uniform4iv(e, Y(t, r));
  }
  function U1(_, e, t, r) {
    _.uniform4uiv(e, $e(t, r));
  }
  function q1(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function H1(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, L(r, n));
  }
  function j1(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, L(r, n));
  }
  function K1(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, L(r, n));
  }
  function N1(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, L(r, n));
  }
  function J1(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, L(r, n));
  }
  function Q1(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, L(r, n));
  }
  function X1(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, L(r, n));
  }
  function Y1(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, L(r, n));
  }
  function Z1(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, L(r, n));
  }
  function e2(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, L(r, n));
  }
  function _2(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, L(r, n));
  }
  function t2(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, L(r, n));
  }
  function r2(_) {
    _.unmap();
  }
  function n2(_, e) {
    _.useProgram(e);
  }
  function a2(_, e) {
    _.useProgram(e);
  }
  function o2(_) {
    return _.value;
  }
  function c2(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function b2(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function s2(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function i2(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function f2(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function u2(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function d2(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function g2(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function p2(_) {
    return _.width;
  }
  function w2(_) {
    return _.width;
  }
  function l2() {
    return p(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, s_(r, n), a, o);
    }, arguments);
  }
  function m2() {
    return p(function(_, e, t, r, n, a) {
      _.writeTexture(e, s_(t, r), n, a);
    }, arguments);
  }
  function h2(_, e) {
    return Z(_, e, G2);
  }
  function y2(_, e) {
    return Z(_, e, H2);
  }
  function x2(_, e) {
    return Z(_, e, K2);
  }
  function $2(_, e) {
    return Z(_, e, W2);
  }
  function v2(_, e) {
    return Z(_, e, z2);
  }
  function S2(_, e) {
    return Z(_, e, U2);
  }
  function A2(_, e) {
    return Z(_, e, q2);
  }
  function I2(_, e) {
    return Z(_, e, O2);
  }
  function D2(_) {
    return _;
  }
  function T2(_) {
    return _;
  }
  function F2(_, e) {
    return L(_, e);
  }
  function B2(_, e) {
    return bl(_, e);
  }
  function P2(_, e) {
    return Y(_, e);
  }
  function k2(_, e) {
    return sl(_, e);
  }
  function M2(_, e) {
    return il(_, e);
  }
  function R2(_, e) {
    return $e(_, e);
  }
  function C2(_, e) {
    return s_(_, e);
  }
  function V2(_, e) {
    return A(_, e);
  }
  function L2(_) {
    return BigInt.asUintN(64, _);
  }
  function E2() {
    const _ = i.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function O2(_, e) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function G2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function W2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function z2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function U2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function q2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6(_, e, t);
  }
  function H2(_, e, t) {
    const r = i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (r[1]) throw B(r[0]);
  }
  function j2(_, e, t, r) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, r);
  }
  function K2(_, e, t) {
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
  ], N2 = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], J2 = [
    "uniform",
    "storage",
    "read-only-storage"
  ], Q2 = [
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
  ], X2 = [
    "none",
    "front",
    "back"
  ], Gt = [
    "nearest",
    "linear"
  ], Y2 = [
    "ccw",
    "cw"
  ], H_ = [
    "uint16",
    "uint32"
  ], j_ = [
    "load",
    "clear"
  ], Z2 = [
    "nearest",
    "linear"
  ], el = [
    "low-power",
    "high-performance"
  ], _l = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], tl = [
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
  ], rl = [
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
  ], nl = [
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
  ], al = [
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
  ], ol = [
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
  ], cl = [
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
  function D(_) {
    const e = i.__externref_table_alloc();
    return i.__wbindgen_externrefs.set(e, _), e;
  }
  function l(_, e) {
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
  function L(_, e) {
    return _ = _ >>> 0, fl().subarray(_ / 4, _ / 4 + e);
  }
  function bl(_, e) {
    return _ = _ >>> 0, dl().subarray(_ / 2, _ / 2 + e);
  }
  function Y(_, e) {
    return _ = _ >>> 0, gl().subarray(_ / 4, _ / 4 + e);
  }
  function sl(_, e) {
    return _ = _ >>> 0, pl().subarray(_ / 1, _ / 1 + e);
  }
  function il(_, e) {
    return _ = _ >>> 0, wl().subarray(_ / 2, _ / 2 + e);
  }
  function $e(_, e) {
    return _ = _ >>> 0, ll().subarray(_ / 4, _ / 4 + e);
  }
  function s_(_, e) {
    return _ = _ >>> 0, le().subarray(_ / 1, _ / 1 + e);
  }
  let se = null;
  function R() {
    return (se === null || se.buffer.detached === true || se.buffer.detached === void 0 && se.buffer !== i.memory.buffer) && (se = new DataView(i.memory.buffer)), se;
  }
  let Ee = null;
  function fl() {
    return (Ee === null || Ee.byteLength === 0) && (Ee = new Float32Array(i.memory.buffer)), Ee;
  }
  let Oe = null;
  function ul() {
    return (Oe === null || Oe.byteLength === 0) && (Oe = new Float64Array(i.memory.buffer)), Oe;
  }
  let Ge = null;
  function dl() {
    return (Ge === null || Ge.byteLength === 0) && (Ge = new Int16Array(i.memory.buffer)), Ge;
  }
  let We = null;
  function gl() {
    return (We === null || We.byteLength === 0) && (We = new Int32Array(i.memory.buffer)), We;
  }
  let ze = null;
  function pl() {
    return (ze === null || ze.byteLength === 0) && (ze = new Int8Array(i.memory.buffer)), ze;
  }
  function A(_, e) {
    return yl(_ >>> 0, e);
  }
  let Ue = null;
  function wl() {
    return (Ue === null || Ue.byteLength === 0) && (Ue = new Uint16Array(i.memory.buffer)), Ue;
  }
  let qe = null;
  function ll() {
    return (qe === null || qe.byteLength === 0) && (qe = new Uint32Array(i.memory.buffer)), qe;
  }
  let He = null;
  function le() {
    return (He === null || He.byteLength === 0) && (He = new Uint8Array(i.memory.buffer)), He;
  }
  function p(_, e) {
    try {
      return _.apply(this, e);
    } catch (t) {
      const r = D(t);
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
    return le().set(_, t / 1), C = _.length, t;
  }
  function je(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return ul().set(_, t / 8), C = _.length, t;
  }
  function ml(_, e) {
    const t = e(_.length * 4, 4) >>> 0;
    for (let r = 0; r < _.length; r++) {
      const n = D(_[r]);
      R().setUint32(t + 4 * r, n, true);
    }
    return C = _.length, t;
  }
  function W(_, e, t) {
    if (t === void 0) {
      const c = Ae.encode(_), b = e(c.length, 1) >>> 0;
      return le().subarray(b, b + c.length).set(c), C = c.length, b;
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
    return C = o, n;
  }
  function B(_) {
    const e = i.__wbindgen_externrefs.get(_);
    return i.__externref_table_dealloc(_), e;
  }
  let n_ = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  n_.decode();
  const hl = 2146435072;
  let w_ = 0;
  function yl(_, e) {
    return w_ += e, w_ >= hl && (n_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), n_.decode(), w_ = e), n_.decode(le().subarray(_, _ + e));
  }
  const Ae = new TextEncoder();
  "encodeInto" in Ae || (Ae.encodeInto = function(_, e) {
    const t = Ae.encode(_);
    return e.set(t), {
      read: _.length,
      written: t.length
    };
  });
  let C = 0, i;
  function xl(_) {
    i = _;
  }
  URL = globalThis.URL;
  const $l = await O_({
    "./proteus_host_web_bg.js": {
      __wbg_call_5575218572ead796: ps,
      __wbg_next_0c4066e251d2eff9: kd,
      __wbg_done_b62d4a7d2286852a: Xi,
      __wbg_value_49f783bb59765962: o2,
      __wbg_length_c6054974c0a6cdb9: Eu,
      __wbg_get_unchecked_54a4374c38e08460: iu,
      __wbg_instanceof_Map_afa18d5840c04c15: Su,
      __wbg_new_typed_00a409eb4ec4f2d9: Bd,
      __wbg_get_197a3fe98f169e38: cu,
      __wbg_then_05edfc8a4fea5106: h1,
      __wbg_new_227d7c05414eb861: Ad,
      __wbg_stack_3b0d974bbf31e44f: Cw,
      __wbg_error_a6fa202b58aa1cd3: lf,
      __wbg_push_f724b5db8acf89d2: jd,
      __wbg_proteusapp_new: qd,
      __wbg_call_0e855b388e315e17: gs,
      __wbg_call_8e98ed2f3c86c4b5: ws,
      __wbg_set_dc601f4a69da0bc2: c0,
      __wbg_get_with_ref_key_6412cf3094599694: fu,
      __wbg_set_6be42768c690e380: Dg,
      __wbg_String_8564e559799eccda: sb,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: $u,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: fd,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: ud,
      __wbg_maxTextureDimension3D_06ee54121b37d431: dd,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: id,
      __wbg_maxBindGroups_14611ac9ed1c6b56: Hu,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: ju,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: rd,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: td,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: ad,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: od,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: bd,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: sd,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: pd,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: gd,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: cd,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: md,
      __wbg_maxBufferSize_f7ce3e1856349d2f: Ku,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: wd,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: ld,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: nd,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: xd,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: yd,
      __wbg_maxColorAttachments_fd9187f9f786da18: Ju,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: Nu,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: ed,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: Qu,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: Xu,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: Yu,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: Zu,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: _d,
      __wbg_description_18d0a6d4077fec8e: Ui,
      __wbg_set_dst_factor_1ed75271a89a711e: S0,
      __wbg_set_operation_b5862f5a1a143b30: Dp,
      __wbg_set_src_factor_1c4f755f8676df1b: jp,
      __wbg_set_texture_16d2be474ce6ad0c: ow,
      __wbg_set_mip_level_246db61be15bdd69: wp,
      __wbg_set_x_56f0c2c08a62725c: Fw,
      __wbg_set_y_04fb8ce84735b4e1: Bw,
      __wbg_set_z_a51316db27a4941e: Pw,
      __wbg_set_origin_9b3b0fbe0a5dc469: Tp,
      __wbg_set_aspect_77332ac136ee94eb: Eg,
      __wbg_Window_a07901001eb4269f: ib,
      __wbg_gpu_a7c12045c25d009a: uu,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: fb,
      __wbg_set_a_5f6e488475272136: Tg,
      __wbg_set_b_688365d692bba214: Wg,
      __wbg_set_g_d4d1d77cf8fdd362: W0,
      __wbg_set_r_527e5a41c4b1a846: Mp,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: xu,
      __wbg_queue_65d985f3e6d786a6: Yd,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: Bp,
      __wbg_requestAdapter_9ff5c9d1ff271165: cg,
      __wbg_set_required_limits_3b031f66f838f4e3: Cp,
      __wbg_set_required_features_54918de8185c5fab: Rp,
      __wbg_set_label_bae57fb9f24fde5c: Y0,
      __wbg_requestDevice_c1c34f88a477e509: ig,
      __wbg_limits_50a8c5e629dbfe40: Gu,
      __wbg_info_22dcf1fd1b12bc7d: mu,
      __wbg_set_size_41cd9255ca1e4242: qp,
      __wbg_set_usage_908213a4d4bb8bde: pw,
      __wbg_set_mapped_at_creation_48de4735fab51e78: fp,
      __wbg_set_label_cd567b7b35838e4c: _p,
      __wbg_createBuffer_2f08c0205e04efca: Ks,
      __wbg_set_address_mode_u_a37cf1035585c638: Bg,
      __wbg_set_address_mode_v_8ac049e029caef76: Pg,
      __wbg_set_address_mode_w_eb9260ee11729e92: kg,
      __wbg_set_compare_42211fbf15e3b850: n0,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: bp,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: sp,
      __wbg_set_mag_filter_69d846b974d4bcc0: ip,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: pp,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: hp,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: dp,
      __wbg_set_label_dcd98efbb9370da8: rp,
      __wbg_createSampler_248bd67c920af37d: ai,
      __wbg_set_width_1a5e2e86fa5bdcd8: Iw,
      __wbg_set_height_e8b5483b8c117d5e: q0,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: p0,
      __wbg_set_format_e9d4b1475bb3bd3b: L0,
      __wbg_set_size_a61ff22205255d61: Hp,
      __wbg_set_usage_7fa9cd18d1104aca: gw,
      __wbg_set_label_0c1bd0e976cf0a9a: K0,
      __wbg_set_dimension_36e13ccecae5af4b: v0,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: mp,
      __wbg_set_sample_count_865e1d19b84e27e6: Op,
      __wbg_set_view_formats_bab284fc81b40e70: $w,
      __wbg_createTexture_9e76b80a2dc0d12e: ui,
      __wbg_set_entries_fc76ca4d7da6a709: D0,
      __wbg_set_layout_eeef59714f5bf48b: op,
      __wbg_set_label_f92ae11c77d74198: np,
      __wbg_createBindGroup_2320df4db188406c: Hs,
      __wbg_set_code_56e2d45ec1ff6c2d: e0,
      __wbg_set_label_be45aed56e4b9fee: Z0,
      __wbg_createShaderModule_53701de4fb271c90: ci,
      __wbg_set_label_d1c24b5a7a3ac31d: tp,
      __wbg_createCommandEncoder_cd88faca35d9ed68: Js,
      __wbg_set_bind_group_layouts_5325d038771af328: Hg,
      __wbg_set_label_2f592bd1be3db6b3: Q0,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: Ys,
      __wbg_set_module_14e471fdd94c582d: xp,
      __wbg_set_entry_point_8db3b6d103e3b865: F0,
      __wbg_set_buffers_85a7238f4ef28ab4: Xg,
      __wbg_set_layout_7c5ba5bdcde8a0f0: ap,
      __wbg_set_vertex_a4951dd9a7a4ed54: lw,
      __wbg_set_label_c47c451211e2f6d2: ep,
      __wbg_set_format_f9341112e43ea182: E0,
      __wbg_set_depth_compare_30e9ea552da12fe2: u0,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: y0,
      __wbg_set_depth_bias_428c9340b0fd937b: b0,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: s0,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: i0,
      __wbg_set_compare_1509dc1a5420943f: r0,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: d0,
      __wbg_set_fail_op_77ab26c98f847b65: P0,
      __wbg_set_pass_op_e9470d1262fb8a8b: Fp,
      __wbg_set_stencil_back_6ef4683123b19b25: Kp,
      __wbg_set_stencil_front_aeb8580a97e5424b: Jp,
      __wbg_set_stencil_read_mask_2954f260d47349ea: Xp,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: ew,
      __wbg_set_depth_stencil_1bd50dbc450c8650: l0,
      __wbg_set_module_08ad08e736d8edbf: yp,
      __wbg_set_targets_6b0b3bdd87f35668: aw,
      __wbg_set_entry_point_6fec5723cc790927: T0,
      __wbg_set_fragment_1a595620425637e1: O0,
      __wbg_set_count_26a934d1cd07d080: a0,
      __wbg_set_mask_0c49a66362fc0079: up,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: Cg,
      __wbg_set_multisample_85f073947b782d07: $p,
      __wbg_set_cull_mode_9d466c1ab414cac8: o0,
      __wbg_set_front_face_50cdf4eb61504a46: G0,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: nw,
      __wbg_set_topology_beefb3aca0612b00: sw,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: uw,
      __wbg_set_primitive_369241acd17871f1: Pp,
      __wbg_createRenderPipeline_f48187ba9f7701e8: ti,
      __wbg_set_entries_3017e6132f938c6e: I0,
      __wbg_set_label_1175a3329a06e52b: N0,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: qs,
      __wbg_limits_1c25cb4f379a4418: Ou,
      __wbg_set_color_attachments_abe67f6631926e28: _0,
      __wbg_set_label_8fd860a36d2c7b74: X0,
      __wbg_set_view_dbd0294573f64d05: hw,
      __wbg_set_depth_clear_value_442bf492734f63b6: f0,
      __wbg_set_depth_load_op_34d430b74bb36d91: g0,
      __wbg_set_depth_store_op_0ea0a215313dbda7: h0,
      __wbg_set_depth_read_only_138a11b10c731094: w0,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: Np,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: Qp,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: Zp,
      __wbg_set_stencil_read_only_fb489d191b6d969b: Yp,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: m0,
      __wbg_set_query_set_18679a8580267d5a: kp,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: qg,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: A0,
      __wbg_set_timestamp_writes_c552d52fbb417005: bw,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: Cb,
      __wbg_copyTextureToTexture_1be188df1e535c0a: Us,
      __wbg_label_47480289cc2bce71: Vu,
      __wbg_set_label_2d2227f4d5991e50: J0,
      __wbg_finish_cfaeede3baf55be1: yf,
      __wbg_finish_087cb89c65c06eb1: hf,
      __wbg_drawIndexed_68637ebab6dd8d6e: of,
      __wbg_setPipeline_bab24dbce96903b9: xg,
      __wbg_setViewport_f9d423db4f4b4b58: Sg,
      __wbg_setBindGroup_4ba56e1e0d26f244: lg,
      __wbg_setBindGroup_6124849cc8547086: mg,
      __wbg_setIndexBuffer_17431786d06c1b7c: hg,
      __wbg_setIndexBuffer_a16ed5b869c87507: yg,
      __wbg_setVertexBuffer_b508baf8d0ffe331: vg,
      __wbg_setVertexBuffer_91c4b602d0289943: $g,
      __wbg_end_414453a89205612c: df,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: Hf,
      __wbg_getCurrentTexture_51975ae7185fd15f: Ef,
      __wbg_set_device_0d774b66e7288f72: x0,
      __wbg_set_format_d347899cd860709c: V0,
      __wbg_set_usage_ae014e77ff77ce06: ww,
      __wbg_set_alpha_mode_92402195b3ae1ee7: Rg,
      __wbg_set_view_formats_fe531a043efb71fa: vw,
      __wbg_configure_3d64c677c7d68a15: Ls,
      __wbg_writeBuffer_b4bdd36178348ca5: l2,
      __wbg_set_bytes_per_row_91681ca78d744888: Yg,
      __wbg_set_rows_per_image_d198b7e73a38978b: Ep,
      __wbg_set_offset_a097a8050a3a9a33: Ip,
      __wbg_writeTexture_b45b69132e46a227: m2,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: Ed,
      __wbg_submit_1290d44bb76ecef4: Nw,
      __wbg_getMappedRange_5ed22727c9679168: zf,
      __wbg_unmap_8f06698a75b8331a: r2,
      __wbg_destroy_b5b39f25f0799295: qi,
      __wbg_mapAsync_bb0029907dd91181: qu,
      __wbg_set_dimension_174ad7e2fb67fb4e: $0,
      __wbg_set_format_90860b0321868db4: R0,
      __wbg_set_aspect_a823a14d00d42d37: Og,
      __wbg_set_base_array_layer_cc6c68d233489c4b: zg,
      __wbg_set_array_layer_count_daec613068108a9d: Vg,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: Ug,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: lp,
      __wbg_set_label_03d2396d4655a3e1: j0,
      __wbg_set_usage_7f0dda8309469b1c: dw,
      __wbg_createView_cc96b5bdd3d5bf5e: pi,
      __wbg_set_min_binding_size_689661b9ed25e083: gp,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: z0,
      __wbg_set_type_38961e08504ca674: iw,
      __wbg_requestAdapter_c46930b8bc33722d: bg,
      __wbg_set_alpha_aa2e606e9e647b21: Mg,
      __wbg_set_color_bc393d7efc3c8594: t0,
      __wbg_set_visibility_1bca121a89accba5: Sw,
      __wbg_set_storage_texture_ab9eed9786337ef0: tw,
      __wbg_set_external_texture_825fe2bc7a0c0603: B0,
      __wbg_set_binding_b6b0fe5c281b8c69: jg,
      __wbg_set_buffer_e89095a9f0cafad3: Qg,
      __wbg_set_sampler_8c5d7fb1b02058c6: Wp,
      __wbg_set_texture_e25a73da75cf5808: cw,
      __wbg_set_view_dimension_263387976511ebc9: yw,
      __wbg_set_format_1786adb7bc74c7c9: k0,
      __wbg_set_access_091f317905cd76a5: Fg,
      __wbg_set_format_abf7a1bc5425c56a: C0,
      __wbg_set_blend_8d6e9c08b5702a09: Ng,
      __wbg_set_write_mask_144b25e2bd909124: Tw,
      __wbg_set_load_op_56844f51434037bf: cp,
      __wbg_set_store_op_caeede4654b3d847: rw,
      __wbg_set_view_bdeab150b5f0768c: mw,
      __wbg_set_clear_value_642701f928a5ccb3: Zg,
      __wbg_set_resolve_target_fe76b3f99cf72078: Vp,
      __wbg_set_buffer_55f096330c8912b4: Jg,
      __wbg_set_offset_73156b0e0b41d79a: Sp,
      __wbg_set_size_1e6281b07cd39177: Up,
      __wbg_set_binding_f3c188a8cd21455b: Kg,
      __wbg_set_resource_fe385d2e3dadaf63: Lp,
      __wbg_set_format_6606f5c1fba6f459: M0,
      __wbg_set_offset_8d9d9afffa18b591: Ap,
      __wbg_set_shader_location_0ff30a733291a396: zp,
      __wbg_set_array_stride_c2c009eabc18b5f6: Lg,
      __wbg_set_attributes_05f9117fd32ca606: Gg,
      __wbg_set_step_mode_a35aef328761c452: _w,
      __wbg_set_type_c1eebc19f8a6aeb9: fw,
      __wbg_set_multisampled_40505c1381e1c32c: vp,
      __wbg_set_sample_type_7088b1efddce6a69: Gp,
      __wbg_set_view_dimension_3ed01b237e85826f: xw,
      __wbg_includes_83dff8d05da243c5: lu,
      __wbg_clearBufferuiv_1d2d93401c0904a3: hs,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: Ms,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: Cs,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: Vs,
      __wbg_copyBufferSubData_a944f33b601b822d: Os,
      __wbg_clientWaitSync_7580165bd2eff461: Is,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: Rs,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: zs,
      __wbg_createQuery_f013132b870a71ef: _i,
      __wbg_createSampler_9fe50152a2524319: oi,
      __wbg_createVertexArray_8685feb21901c932: gi,
      __wbg_deleteQuery_ef51ea0a52420103: Ii,
      __wbg_deleteSampler_5c045e0cc55813d4: Fi,
      __wbg_getIndexedParameter_2b18df6fca85f751: Wf,
      __wbg_getQueryParameter_0599e85ddb81220b: Qf,
      __wbg_getSyncParameter_9a2bda340ebe166f: ru,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: nu,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: Fu,
      __wbg_deleteSync_37ca83c429c43d8a: ki,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: Vi,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: Zi,
      __wbg_drawBuffers_558d96e52e754731: rf,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: af,
      __wbg_endQuery_161170c5280a8293: uf,
      __wbg_fenceSync_56efc7cc79111e54: mf,
      __wbg_framebufferTextureLayer_2312acdc74f97676: Tf,
      __wbg_getBufferSubData_92680d3a2f7be029: Mf,
      __wbg_readBuffer_361ec5474f3aae49: Zd,
      __wbg_readPixels_5840000f3e22f3ce: _g,
      __wbg_readPixels_5bf204799ed2272f: tg,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: rg,
      __wbg_texImage3D_8647ef58aef5b912: Zw,
      __wbg_texStorage2D_ed5df596c5f1e3af: t1,
      __wbg_texStorage3D_160b0197bc190f04: r1,
      __wbg_texSubImage2D_f03448e182b0820d: f1,
      __wbg_texSubImage2D_d14d9c0a1f627c31: i1,
      __wbg_texSubImage2D_89866a04ecd0a76b: c1,
      __wbg_texSubImage2D_5c630043f1c56716: o1,
      __wbg_samplerParameterf_3157ba41c0f4d97a: ug,
      __wbg_samplerParameteri_f85a29156e790189: dg,
      __wbg_texImage2D_0e0f37b9fb297d01: Jw,
      __wbg_texImage2D_0e537dc331652de3: Qw,
      __wbg_texImage3D_30dbf7234481b8f5: Yw,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: a1,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: b1,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: s1,
      __wbg_texSubImage3D_933e4cd41cc5376d: w1,
      __wbg_texSubImage3D_c3538b28040daac9: m1,
      __wbg_uniform1ui_36c94692177ebf76: I1,
      __wbg_uniform2fv_17592f4dad9798fb: D1,
      __wbg_uniform2iv_d5d29ebbc466977d: B1,
      __wbg_texSubImage3D_0fdbd843482bb916: d1,
      __wbg_texSubImage3D_09a97a968b93253d: u1,
      __wbg_texSubImage3D_355efde0dc047913: g1,
      __wbg_texSubImage3D_bd32c8e29e470904: l1,
      __wbg_texSubImage3D_5a238709d114b609: p1,
      __wbg_uniform2uiv_418ba3bf6a230dd5: P1,
      __wbg_uniform4fv_9e670a001c77dca0: G1,
      __wbg_uniform4iv_1d57c6b8e5c0e447: W1,
      __wbg_uniform3fv_dbe44b778e6b89e8: M1,
      __wbg_uniform3iv_d75d3a5f86d54be4: C1,
      __wbg_uniform3uiv_71c1efc24a662de9: V1,
      __wbg_uniform4uiv_c5d45f5dbdae727a: U1,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: J1,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: X1,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: Y1,
      __wbg_uniformBlockBinding_829a71912ad79a04: q1,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: H1,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: K1,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: N1,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: Z1,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: s2,
      __wbg_activeTexture_525ee3068cb9e8d5: Fb,
      __wbg_attachShader_3477e67517b09b6b: kb,
      __wbg_bindAttribLocation_79b5d26727094518: Vb,
      __wbg_bindBuffer_d3111de6861cb875: Ob,
      __wbg_bindFramebuffer_63e837a5dc0accfb: zb,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: Ub,
      __wbg_bindTexture_7ab28ff4ff3dc506: jb,
      __wbg_blendColor_15f26633b646e542: Qb,
      __wbg_blendEquation_7dadb4db540a42da: es,
      __wbg_blendEquationSeparate_8240ddfa32266109: Yb,
      __wbg_blendFunc_b15af02643e188f1: as,
      __wbg_blendFuncSeparate_456410f9919bed39: rs,
      __wbg_clear_dadcb3e2929388b0: Ss,
      __wbg_clearDepth_05c17028494ee4dd: ys,
      __wbg_clearStencil_917833d1e2ac56e4: vs,
      __wbg_colorMask_f111e3e5796458f4: Fs,
      __wbg_compileShader_f5625b583b2c9fd6: Bs,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: _2,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: t2,
      __wbg_vertexAttribDivisor_f17a8585267be92f: b2,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: Gs,
      __wbg_createBuffer_9f602b2dbcbf409c: Ns,
      __wbg_createFramebuffer_4a250944a4542bbc: Qs,
      __wbg_createProgram_4c8164d471c10346: Zs,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: ni,
      __wbg_createShader_9c5cd42709d915ff: si,
      __wbg_createTexture_3eed23cb87dd35fc: ii,
      __wbg_cullFace_94f24b4fd5e9038b: mi,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: yi,
      __wbg_getExtension_11824edd67a143d8: Gf,
      __wbg_getParameter_7f7f23cae98f2c81: Uf,
      __wbg_getProgramInfoLog_cd84be80942f345b: Kf,
      __wbg_getProgramParameter_039391d5ba319f50: Nf,
      __wbg_getShaderInfoLog_495bddda98172699: Xf,
      __wbg_getShaderParameter_4eb65cfb174ceb22: Zf,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: _u,
      __wbg_getUniformLocation_ab63f569a4e41744: ou,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: $i,
      __wbg_deleteProgram_eff668280dcb01ca: Ai,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: Ti,
      __wbg_deleteShader_3339454254c7147c: Bi,
      __wbg_deleteTexture_c1c58550dc55af5c: Ri,
      __wbg_depthFunc_31b183b5b8ee478e: Li,
      __wbg_depthMask_cab7f2ae7f0e559c: Gi,
      __wbg_depthRange_797a71ba3b79267a: Wi,
      __wbg_disable_cb1b3e6c1cee5202: Ji,
      __wbg_disableVertexAttribArray_b395358ec5084c39: Ki,
      __wbg_drawArrays_42dbb4b0349c8f34: _f,
      __wbg_enable_d1f42f78be33a553: ff,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: cf,
      __wbg_flush_7ae42f071230db6b: xf,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: Af,
      __wbg_framebufferTexture2D_367ab597a005e8d9: If,
      __wbg_frontFace_9bdcf2a758e989e5: Bf,
      __wbg_linkProgram_e23a348b0f6e0c4f: zu,
      __wbg_pixelStorei_a78a504be58d1d0a: Gd,
      __wbg_polygonOffset_a4f07d97b9b0dced: zd,
      __wbg_renderbufferStorage_3049e13db5c4e60e: ag,
      __wbg_scissor_6c024669fbf4fe72: gg,
      __wbg_vertexAttribPointer_4e5d289c5d224210: f2,
      __wbg_viewport_a0ca330f9b85397e: u2,
      __wbg_shaderSource_66dce75b25a1a407: Mw,
      __wbg_stencilFuncSeparate_ec603976be9569a4: Ww,
      __wbg_stencilMask_485dcb5965c79a71: qw,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: Uw,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: jw,
      __wbg_texParameteri_c6efffcecb474d2f: e1,
      __wbg_uniform1f_3acd3f3eb50b5e11: $1,
      __wbg_uniform1i_e4f13604354c28ae: A1,
      __wbg_uniform4f_a5008773cfb47d1a: E1,
      __wbg_useProgram_ab2ee2a13a1fd909: a2,
      __wbg_bufferSubData_2270f1b9db71e642: fs,
      __wbg_clearBufferfv_6b77b9402254a2bf: ls,
      __wbg_clearBufferiv_0f056544010eef3e: ms,
      __wbg_beginQuery_dad334d972fed3cc: Rb,
      __wbg_bindBufferRange_16a9d90becc2a7d7: Eb,
      __wbg_bindSampler_3c7002cb6d56ae8f: Hb,
      __wbg_bindVertexArray_c391bd47303d75cd: Jb,
      __wbg_blitFramebuffer_ea96ada8bba07582: os,
      __wbg_bufferData_64e9905f2b3d3a6f: ss,
      __wbg_bufferData_99bbbc63f02251c4: is,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: Du,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: sg,
      __wbg_navigator_935098efd1dc7fe5: vd,
      __wbg_devicePixelRatio_8e5ca44720abafec: Hi,
      __wbg_document_2634180a4c694068: Qi,
      __wbg_instanceof_Window_0d356b88a2f77c42: Tu,
      __wbg_hidden_cb32701ca3785fea: wu,
      __wbg_getElementById_c7aba6b93b34bf01: Of,
      __wbg_querySelector_1f3658f4b48e268b: Jd,
      __wbg_querySelectorAll_ffda3c891a9eb29a: Nd,
      __wbg_hasAttribute_73e1230c9c107e79: du,
      __wbg_setAttribute_8bccfbabf2a83682: wg,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: kf,
      __wbg_focus_c80921c19b28520b: vf,
      __wbg_uniform2iv_c5e863975dd780d8: F1,
      __wbg_uniform3fv_7723e142be50856f: k1,
      __wbg_uniform3iv_bea3976522e15d48: R1,
      __wbg_uniform4fv_85ad5d23234895d2: O1,
      __wbg_clear_ff8cfdf420f7dde6: As,
      __wbg_clearDepth_ac6b54f112feeaf7: xs,
      __wbg_clearStencil_56d6a6308294a749: $s,
      __wbg_colorMask_b0ab9d429a1efa0a: Ts,
      __wbg_compileShader_fcf3f3d2891f73f9: Ps,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: Ws,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: js,
      __wbg_createFramebuffer_ab73f30b5dc97415: Xs,
      __wbg_createProgram_f11c63f59f41b82a: ei,
      __wbg_createRenderbuffer_556000dbb01f5026: ri,
      __wbg_createShader_27d9388313f3b14e: bi,
      __wbg_createTexture_8455c703424c567b: fi,
      __wbg_cullFace_774780fb4177aab8: li,
      __wbg_deleteBuffer_d758283bea6e0ccf: xi,
      __wbg_deleteFramebuffer_8953b325144192fe: vi,
      __wbg_deleteProgram_0135c6926e75af75: Si,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: Di,
      __wbg_deleteShader_79dbaaed69b7ca3b: Pi,
      __wbg_deleteTexture_3acb672a45f9998a: Mi,
      __wbg_depthFunc_eaca1bc79f7bf216: Ei,
      __wbg_depthMask_3a9074b08d1f68e5: Oi,
      __wbg_depthRange_c24a808b3496e0a9: zi,
      __wbg_uniform4iv_a9aaa92f2f458ec2: z1,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: j1,
      __wbg_uniformMatrix3fv_da8c388748c5739b: Q1,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: e2,
      __wbg_activeTexture_1d5359b20df41710: Tb,
      __wbg_attachShader_683d1070365e7066: Mb,
      __wbg_bindAttribLocation_d56d3c40331af7ed: Lb,
      __wbg_bindBuffer_e95efaf0d4851845: Gb,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: Wb,
      __wbg_bindRenderbuffer_d608b211c51ed147: qb,
      __wbg_bindTexture_ffc56f1e5c5526c6: Kb,
      __wbg_blendColor_a0ba1cdcecc3a34c: Xb,
      __wbg_blendEquation_8bfa69f639ae92da: _s,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: Zb,
      __wbg_blendFunc_713c504adab14f98: ns,
      __wbg_blendFuncSeparate_3eef699c291dbc87: ts,
      __wbg_disable_4dca6ee0ccc91e4a: Ni,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: ji,
      __wbg_drawArrays_10e1254aa4524ae9: ef,
      __wbg_enable_c6e523307311617a: sf,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: bf,
      __wbg_flush_eb3fb8da2ec00d57: $f,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: Sf,
      __wbg_linkProgram_6a2eee02a03b9b00: Wu,
      __wbg_pixelStorei_55ad4c67b699537c: Od,
      __wbg_polygonOffset_06dc6468c12a57e1: Wd,
      __wbg_renderbufferStorage_2918fb696fd45663: ng,
      __wbg_scissor_f9696c630e464977: pg,
      __wbg_shaderSource_628c37a476ae65f9: kw,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: Gw,
      __wbg_stencilMask_f9fe198f7fd6fc9c: Hw,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: zw,
      __wbg_stencilOpSeparate_6cf50803475d2640: Kw,
      __wbg_texParameteri_fe6210a493d48a16: _1,
      __wbg_framebufferTexture2D_3a558e14f56720d2: Df,
      __wbg_frontFace_c9bb1fa659ffd276: Pf,
      __wbg_getParameter_91a344e1a84a4669: qf,
      __wbg_getProgramInfoLog_35410850de9ccefe: jf,
      __wbg_getProgramParameter_bbc667347ac2e882: Jf,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: Yf,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: eu,
      __wbg_getUniformLocation_340155dc706d3fea: au,
      __wbg_uniform1f_d34e4b454f7c8e73: v1,
      __wbg_uniform1i_cd9a7f990128ea48: S1,
      __wbg_uniform4f_4410d2faaa7e5dda: L1,
      __wbg_useProgram_0e1cd86765304939: n2,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: i2,
      __wbg_viewport_b5bd46a0d111c83c: d2,
      __wbg_texSubImage2D_1b2ff28f994c325e: n1,
      __wbg_uniform2fv_39277cf2d3cb83c7: T1,
      __wbg_bufferData_5df9bdb32e189eee: bs,
      __wbg_bufferData_26132561617ce8fb: cs,
      __wbg_bufferSubData_44db8a3b4a70b57d: us,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: ks,
      __wbg_readPixels_05377f8b6fa1d8eb: eg,
      __wbg_texImage2D_7bc3001cb8602ed2: Xw,
      __wbg_navigator_017bc45e84c473cc: $d,
      __wbg_log_d282446d03691e72: Uu,
      __wbg_info_a392cd5b7536cfb5: hu,
      __wbg_warn_88c4a5bd9a322000: g2,
      __wbg_debug_7271beced8b71cd4: hi,
      __wbg_error_933f449d72fef598: wf,
      __wbg_error_50f60c611a3dcf64: pf,
      __wbg_set_width_031bdecd763c5855: Aw,
      __wbg_set_height_ad5056ea051acd78: U0,
      __wbg_getContext_486aab500e1c34c9: Cf,
      __wbg_getContext_9fd4db9b1cf155db: Lf,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: vu,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: tf,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: tu,
      __wbg_width_a86bcd32bd998060: w2,
      __wbg_height_cd732bbdc7b66e49: gu,
      __wbg_queryCounterEXT_ebb00bcc96221671: Kd,
      __wbg_offsetX_0214819d43aaf6d5: Vd,
      __wbg_offsetY_f18f571e33b385ab: Ld,
      __wbg_button_bb3285fcdf965178: ds,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: Yi,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: nf,
      __wbg_get_37b48b8fa52d1f2c: bu,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: c2,
      __wbg_preventDefault_c047d3e292b08cc4: Ud,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: Ff,
      __wbg_width_08e66520b99071f4: p2,
      __wbg_height_e9afb506f31052a9: pu,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: Nb,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: di,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: Ci,
      __wbg_set_width_f9e631f4ee129e5c: Dw,
      __wbg_set_height_ef298446b359b0c5: H0,
      __wbg_getContext_70c2d1bed75d4122: Vf,
      __wbg_getContext_422b32d0ee4b8076: Rf,
      __wbg_addEventListener_ea90bc131475777e: Bb,
      __wbg_contentRect_0fb8c8900d689a0c: Es,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: Au,
      __wbg_new_1e52e3c919312525: Sd,
      __wbg_observe_592b94857eed8e27: Rd,
      __wbg_altKey_7412dd64f8c921c7: Pb,
      __wbg_ctrlKey_00097886a21597a7: wi,
      __wbg_shiftKey_273ee8c901267b55: Rw,
      __wbg_metaKey_1c2847b62ad062c1: hd,
      __wbg_repeat_46a5c90df9f6ef0b: og,
      __wbg_isComposing_e3709163a95a2477: Pu,
      __wbg_key_d6b3d2cce3d41872: Cu,
      __wbg_code_87bb99fdec02d313: Ds,
      __wbg_resolve_d82363d90af6928a: fg,
      __wbg_then_591b6b3a75ee817a: x1,
      __wbg_iterator_cc47ba25a2be735a: Ru,
      __wbg_get_9a29be2cb383ed9a: su,
      __wbg_next_402fa10b59ab20c3: Md,
      __wbg_new_2e117a478906f062: Id,
      __wbg_new_36e147a8ced3c6e0: Dd,
      __wbg_of_62183ea089c00bfa: Cd,
      __wbg_isArray_145a34fd0a38d37b: Bu,
      __wbg_new_e66a4b7758dd2e5c: Fd,
      __wbg_isSafeInteger_a3389a198582f5f6: ku,
      __wbg_is_de5b366c746e004c: Mu,
      __wbg_entries_c261c3fa1f281256: gf,
      __wbg_then_2a84678a50976959: y1,
      __wbg_length_589238bdcf171f0e: Lu,
      __wbg_prototypesetcall_d721637c7ca66eb8: Hd,
      __wbg_set_272b80acaf9a75e8: Ag,
      __wbg_new_81880fb5002cb255: Td,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: Pd,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: Vw,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: Ew,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Lw,
      __wbg_static_accessor_WINDOW_168f178805d978fe: Ow,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: yu,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: Iu,
      __wbg_queueMicrotask_1c9b3800e321a967: Qd,
      __wbg_queueMicrotask_311744e534a929a3: Xd,
      __wbg_set_4564f7dc44fcb0c9: Ig,
      __wbg___wbindgen_number_get_1cc01dd708740256: Sb,
      __wbg___wbindgen_in_4990f46af709e33c: pb,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: Ib,
      __wbg___wbindgen_is_null_6d937fbfb6478470: mb,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: $b,
      __wbg_Number_c4bdf66bb78f7977: bb,
      __wbg_Error_fdd633d4bb5dd76a: cb,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: wb,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: hb,
      __wbg___wbindgen_is_string_1fca8072260dd261: yb,
      __wbg___wbindgen_string_get_71bb4348194e31f0: Ab,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: db,
      __wbg___wbindgen_is_function_acc5528be2b923f2: lb,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: xb,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: vb,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: ub,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: Db,
      __wbg___wbindgen_debug_string_8a447059637473e2: gb,
      __wbindgen_init_externref_table: E2,
      __wbindgen_cast_0000000000000001: h2,
      __wbindgen_cast_0000000000000002: y2,
      __wbindgen_cast_0000000000000003: x2,
      __wbindgen_cast_0000000000000004: $2,
      __wbindgen_cast_0000000000000005: v2,
      __wbindgen_cast_0000000000000006: S2,
      __wbindgen_cast_0000000000000007: A2,
      __wbindgen_cast_0000000000000008: I2,
      __wbindgen_cast_0000000000000009: D2,
      __wbindgen_cast_000000000000000a: T2,
      __wbindgen_cast_000000000000000b: F2,
      __wbindgen_cast_000000000000000c: B2,
      __wbindgen_cast_000000000000000d: P2,
      __wbindgen_cast_000000000000000e: k2,
      __wbindgen_cast_000000000000000f: M2,
      __wbindgen_cast_0000000000000010: R2,
      __wbindgen_cast_0000000000000011: C2,
      __wbindgen_cast_0000000000000012: V2,
      __wbindgen_cast_0000000000000013: L2
    }
  }, ab), { memory: vl, mount: Sl, __wbg_proteusapp_free: Al, proteusapp_addChild: Il, proteusapp_animateTo: Dl, proteusapp_bakeTexture: Tl, proteusapp_bakedImageSize: Fl, proteusapp_bakedTextSize: Bl, proteusapp_bindKey: Pl, proteusapp_channelDestroy: kl, proteusapp_channelSet: Ml, proteusapp_clearFocus: Rl, proteusapp_component: Cl, proteusapp_copyBakedImageFrom: Vl, proteusapp_createVideo: Ll, proteusapp_cropImage: El, proteusapp_declareGeometry: Ol, proteusapp_declaredGeometry: Gl, proteusapp_destroy: Wl, proteusapp_devices: zl, proteusapp_focus: Ul, proteusapp_focused: ql, proteusapp_freeResources: Hl, proteusapp_get: jl, proteusapp_hideVideo: Kl, proteusapp_inputDevices: Nl, proteusapp_inputMode: Jl, proteusapp_isFocused: Ql, proteusapp_loadTexture: Xl, proteusapp_mergeFrom: Yl, proteusapp_mergeFromWithBehavior: Zl, proteusapp_new: e3, proteusapp_onAppKey: _3, proteusapp_onBlur: t3, proteusapp_onClick: r3, proteusapp_onDrag: n3, proteusapp_onDropped: a3, proteusapp_onFocus: o3, proteusapp_onFocusLost: c3, proteusapp_onHoverEnter: b3, proteusapp_onHoverExit: s3, proteusapp_onKey: i3, proteusapp_onPress: f3, proteusapp_onRelease: u3, proteusapp_onTransitionComplete: d3, proteusapp_pointerLeft: g3, proteusapp_pointerMoved: p3, proteusapp_pointerPressed: w3, proteusapp_pointerReleased: l3, proteusapp_releaseVideo: m3, proteusapp_removeChild: h3, proteusapp_resetKeyMap: y3, proteusapp_setDeclaredGeometry: x3, proteusapp_setDefaultFocus: $3, proteusapp_setDevices: v3, proteusapp_setDisabled: S3, proteusapp_setImage: A3, proteusapp_setInputDevices: I3, proteusapp_setInteractive: D3, proteusapp_setKeyRepeat: T3, proteusapp_setLongPressMs: F3, proteusapp_setNavigatingActions: B3, proteusapp_setOpacity: P3, proteusapp_setText: k3, proteusapp_setTexture: M3, proteusapp_setTransitionInteraction: R3, proteusapp_setVideoCrossfade: C3, proteusapp_setVisible: V3, proteusapp_showVideo: L3, proteusapp_splitTo: E3, proteusapp_splitToWithBehavior: O3, proteusapp_splitToWithStates: G3, proteusapp_texture: W3, proteusapp_textureState: z3, proteusapp_tick: U3, proteusapp_transitionChannel: q3, proteusapp_unbindKey: H3, proteusapp_uploadVideoFrame: j3, __wbg_handle_free: K3, __wbg_texturehandle_free: N3, __wbg_transitionchannel_free: J3, __wbg_videohandle_free: Q3, handle_fromId: X3, handle_id: Y3, texturehandle_fromId: Z3, texturehandle_id: e4, __abort_handler: _4, __instance_terminated: t4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: r4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: n4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: a4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: o4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: c4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: b4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: s4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: i4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: f4, __wbindgen_malloc: u4, __wbindgen_realloc: d4, __wbindgen_exn_store: g4, __externref_table_alloc: p4, __wbindgen_externrefs: w4, __wbindgen_free: l4, __wbindgen_destroy_closure: m4, __externref_table_dealloc: h4, __wbindgen_start: zt } = $l, y4 = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: _4,
    __externref_table_alloc: p4,
    __externref_table_dealloc: h4,
    __instance_terminated: t4,
    __wbg_handle_free: K3,
    __wbg_proteusapp_free: Al,
    __wbg_texturehandle_free: N3,
    __wbg_transitionchannel_free: J3,
    __wbg_videohandle_free: Q3,
    __wbindgen_destroy_closure: m4,
    __wbindgen_exn_store: g4,
    __wbindgen_externrefs: w4,
    __wbindgen_free: l4,
    __wbindgen_malloc: u4,
    __wbindgen_realloc: d4,
    __wbindgen_start: zt,
    handle_fromId: X3,
    handle_id: Y3,
    memory: vl,
    mount: Sl,
    proteusapp_addChild: Il,
    proteusapp_animateTo: Dl,
    proteusapp_bakeTexture: Tl,
    proteusapp_bakedImageSize: Fl,
    proteusapp_bakedTextSize: Bl,
    proteusapp_bindKey: Pl,
    proteusapp_channelDestroy: kl,
    proteusapp_channelSet: Ml,
    proteusapp_clearFocus: Rl,
    proteusapp_component: Cl,
    proteusapp_copyBakedImageFrom: Vl,
    proteusapp_createVideo: Ll,
    proteusapp_cropImage: El,
    proteusapp_declareGeometry: Ol,
    proteusapp_declaredGeometry: Gl,
    proteusapp_destroy: Wl,
    proteusapp_devices: zl,
    proteusapp_focus: Ul,
    proteusapp_focused: ql,
    proteusapp_freeResources: Hl,
    proteusapp_get: jl,
    proteusapp_hideVideo: Kl,
    proteusapp_inputDevices: Nl,
    proteusapp_inputMode: Jl,
    proteusapp_isFocused: Ql,
    proteusapp_loadTexture: Xl,
    proteusapp_mergeFrom: Yl,
    proteusapp_mergeFromWithBehavior: Zl,
    proteusapp_new: e3,
    proteusapp_onAppKey: _3,
    proteusapp_onBlur: t3,
    proteusapp_onClick: r3,
    proteusapp_onDrag: n3,
    proteusapp_onDropped: a3,
    proteusapp_onFocus: o3,
    proteusapp_onFocusLost: c3,
    proteusapp_onHoverEnter: b3,
    proteusapp_onHoverExit: s3,
    proteusapp_onKey: i3,
    proteusapp_onPress: f3,
    proteusapp_onRelease: u3,
    proteusapp_onTransitionComplete: d3,
    proteusapp_pointerLeft: g3,
    proteusapp_pointerMoved: p3,
    proteusapp_pointerPressed: w3,
    proteusapp_pointerReleased: l3,
    proteusapp_releaseVideo: m3,
    proteusapp_removeChild: h3,
    proteusapp_resetKeyMap: y3,
    proteusapp_setDeclaredGeometry: x3,
    proteusapp_setDefaultFocus: $3,
    proteusapp_setDevices: v3,
    proteusapp_setDisabled: S3,
    proteusapp_setImage: A3,
    proteusapp_setInputDevices: I3,
    proteusapp_setInteractive: D3,
    proteusapp_setKeyRepeat: T3,
    proteusapp_setLongPressMs: F3,
    proteusapp_setNavigatingActions: B3,
    proteusapp_setOpacity: P3,
    proteusapp_setText: k3,
    proteusapp_setTexture: M3,
    proteusapp_setTransitionInteraction: R3,
    proteusapp_setVideoCrossfade: C3,
    proteusapp_setVisible: V3,
    proteusapp_showVideo: L3,
    proteusapp_splitTo: E3,
    proteusapp_splitToWithBehavior: O3,
    proteusapp_splitToWithStates: G3,
    proteusapp_texture: W3,
    proteusapp_textureState: z3,
    proteusapp_tick: U3,
    proteusapp_transitionChannel: q3,
    proteusapp_unbindKey: H3,
    proteusapp_uploadVideoFrame: j3,
    texturehandle_fromId: Z3,
    texturehandle_id: e4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: f4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: r4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: c4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: b4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: s4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: i4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: a4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: o4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: n4
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  xl(y4);
  zt();
  async function x4(_, e) {
    await ob(_, (t) => e.setup(new S4(t)), e.update ? (t) => {
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
  }, $4 = class {
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
  }, v4 = class {
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
  }, S4 = class {
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
      return new $4(this, this.wasmApp.transitionChannel(e == null ? void 0 : e.id()));
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
      return new v4(this, this.wasmApp.createVideo());
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
  const A4 = "" + new URL("proteus_bench_web_bg-CaPOF93e.wasm", import.meta.url).href;
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
  class Te {
    static __wrap(e) {
      const t = Object.create(Te.prototype);
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
      m(e, h), m(t, h);
      const r = s.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw P(r[0]);
    }
    animateTo(e, t, r) {
      m(e, h);
      const n = s.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw P(n[0]);
    }
    bakeTexture(e, t, r, n) {
      const a = h_(r, s.__wbindgen_malloc), o = M, c = s.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, o, n);
      return K.__wrap(c);
    }
    bakedImageSize(e) {
      return m(e, h), s.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return m(e, h), s.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bindKey(e, t) {
      const r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M, a = s.proteusapp_bindKey(this.__wbg_ptr, e, r, n);
      if (a[1]) throw P(a[0]);
    }
    channelDestroy(e) {
      m(e, Q);
      var t = e.__destroy_into_raw();
      s.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      m(e, Q), m(t, h), m(r, h);
      const o = s.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (o[1]) throw P(o[0]);
    }
    clearFocus() {
      s.proteusapp_clearFocus(this.__wbg_ptr);
    }
    component(e) {
      const t = s.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw P(t[1]);
      return h.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      m(e, h), m(t, h);
      const r = s.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw P(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = s.proteusapp_createVideo(this.__wbg_ptr);
      return X.__wrap(e);
    }
    cropImage(e, t) {
      m(e, h);
      const r = s.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw P(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      m(e, h);
      const r = s.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw P(r[0]);
    }
    declaredGeometry(e) {
      return m(e, h), s.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      m(e, h);
      var t = e.__destroy_into_raw();
      const r = s.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw P(r[0]);
    }
    devices(e) {
      return m(e, h), s.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    focus(e) {
      m(e, h);
      const t = s.proteusapp_focus(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw P(t[0]);
    }
    focused() {
      const e = s.proteusapp_focused(this.__wbg_ptr);
      return e === 0 ? void 0 : h.__wrap(e);
    }
    freeResources(e) {
      m(e, h);
      const t = s.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw P(t[0]);
    }
    get(e) {
      return m(e, h), s.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      m(e, h);
      const t = s.proteusapp_hideVideo(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw P(t[0]);
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
      return m(e, h), s.proteusapp_isFocused(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    loadTexture(e, t) {
      const r = h_(e, s.__wbindgen_malloc), n = M, a = s.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : K.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      m(e, h);
      const a = t_(t, s.__wbindgen_malloc), o = M, c = s.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw P(c[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      m(e, h);
      const o = t_(t, s.__wbindgen_malloc), c = M, b = s.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
      if (b[1]) throw P(b[0]);
    }
    constructor() {
      const e = s.proteusapp_new();
      return this.__wbg_ptr = e, m_.register(this, this.__wbg_ptr, this), this;
    }
    onAppKey(e) {
      s.proteusapp_onAppKey(this.__wbg_ptr, e);
    }
    onBlur(e, t) {
      m(e, h), s.proteusapp_onBlur(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onClick(e, t) {
      m(e, h), s.proteusapp_onClick(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDrag(e, t) {
      m(e, h), s.proteusapp_onDrag(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDropped(e, t) {
      m(e, Q), s.proteusapp_onDropped(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocus(e, t) {
      m(e, h), s.proteusapp_onFocus(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocusLost(e) {
      s.proteusapp_onFocusLost(this.__wbg_ptr, e);
    }
    onHoverEnter(e, t) {
      m(e, h), s.proteusapp_onHoverEnter(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverExit(e, t) {
      m(e, h), s.proteusapp_onHoverExit(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onKey(e, t) {
      m(e, h), s.proteusapp_onKey(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onPress(e, t) {
      m(e, h), s.proteusapp_onPress(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onRelease(e, t) {
      m(e, h), s.proteusapp_onRelease(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onTransitionComplete(e, t) {
      m(e, h), s.proteusapp_onTransitionComplete(this.__wbg_ptr, e.__wbg_ptr, t);
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
      m(e, X), s.proteusapp_releaseVideo(this.__wbg_ptr, e.__wbg_ptr);
    }
    removeChild(e, t) {
      m(e, h), m(t, h);
      const r = s.proteusapp_removeChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw P(r[0]);
    }
    resetKeyMap() {
      s.proteusapp_resetKeyMap(this.__wbg_ptr);
    }
    setDeclaredGeometry(e, t) {
      m(e, h);
      const r = s.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw P(r[0]);
    }
    setDefaultFocus(e, t) {
      m(e, h);
      const r = s.proteusapp_setDefaultFocus(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw P(r[0]);
    }
    setDevices(e, t) {
      m(e, h);
      const r = s.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw P(r[0]);
    }
    setDisabled(e, t) {
      m(e, h);
      const r = s.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw P(r[0]);
    }
    setImage(e, t) {
      m(e, h);
      const r = s.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw P(r[0]);
    }
    setInputDevices(e) {
      const t = s.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw P(t[0]);
    }
    setInteractive(e, t) {
      m(e, h);
      const r = s.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw P(r[0]);
    }
    setKeyRepeat(e) {
      const t = s.proteusapp_setKeyRepeat(this.__wbg_ptr, e);
      if (t[1]) throw P(t[0]);
    }
    setLongPressMs(e) {
      s.proteusapp_setLongPressMs(this.__wbg_ptr, e);
    }
    setNavigatingActions(e) {
      const t = _A(e, s.__wbindgen_malloc), r = M;
      s.proteusapp_setNavigatingActions(this.__wbg_ptr, t, r);
    }
    setOpacity(e, t) {
      m(e, h);
      const r = s.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw P(r[0]);
    }
    setText(e, t) {
      m(e, h);
      const r = s.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw P(r[0]);
    }
    setTexture(e, t) {
      m(e, h), m(t, K);
      const r = s.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw P(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      m(e, h);
      const r = s.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw P(r[0]);
    }
    setVideoCrossfade(e, t) {
      m(e, h);
      const r = s.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw P(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      m(e, h);
      const r = s.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw P(r[0]);
    }
    showVideo(e, t) {
      m(e, h), m(t, X);
      const r = s.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw P(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      m(e, h);
      const a = t_(t, s.__wbindgen_malloc), o = M, c = s.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw P(c[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      m(e, h);
      const o = t_(t, s.__wbindgen_malloc), c = M, b = s.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
      if (b[1]) throw P(b[0]);
    }
    splitToWithStates(e, t, r, n) {
      m(e, h);
      const a = s.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw P(a[0]);
    }
    texture(e) {
      const t = s.proteusapp_texture(this.__wbg_ptr, e);
      return K.__wrap(t);
    }
    textureState(e) {
      return m(e, K), s.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
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
      if (t[3]) throw P(t[2]);
      let r;
      return t[0] !== 0 && (r = S(t[0], t[1]).slice(), s.__wbindgen_free(t[0], t[1] * 1, 1)), r;
    }
    uploadVideoFrame(e, t, r, n) {
      m(e, X);
      const a = h_(n, s.__wbindgen_malloc), o = M;
      return s.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, o) !== 0;
    }
  }
  Symbol.dispose && (Te.prototype[Symbol.dispose] = Te.prototype.free);
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
  function I4() {
    s.clear();
  }
  function D4(_) {
    s.on_frame(_);
  }
  function T4(_, e) {
    const t = G(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = M;
    s.show(t, r, e);
  }
  function F4(_, e) {
    const t = G(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = M;
    return s.start(t, r, e);
  }
  function B4() {
    s.stop_frames();
  }
  function P4(_, e) {
    return Error(S(_, e));
  }
  function k4(_) {
    return Number(_);
  }
  function M4(_, e) {
    const t = String(e), r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function R4(_) {
    return _.Window;
  }
  function C4(_) {
    return _.WorkerGlobalScope;
  }
  function V4(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    k().setBigInt64(_ + 8, v(r) ? BigInt(0) : r, true), k().setInt32(_ + 0, !v(r), true);
  }
  function L4(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return v(t) ? 16777215 : t ? 1 : 0;
  }
  function E4(_, e) {
    const t = R_(e), r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function O4(_, e) {
    return _ in e;
  }
  function G4(_) {
    return typeof _ == "bigint";
  }
  function W4(_) {
    return typeof _ == "function";
  }
  function z4(_) {
    return _ === null;
  }
  function U4(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function q4(_) {
    return typeof _ == "string";
  }
  function H4(_) {
    return _ === void 0;
  }
  function j4(_, e) {
    return _ === e;
  }
  function K4(_, e) {
    return _ == e;
  }
  function N4(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    k().setFloat64(_ + 8, v(r) ? 0 : r, true), k().setInt32(_ + 0, !v(r), true);
  }
  function J4(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function Q4(_, e) {
    throw new Error(S(_, e));
  }
  function X4(_) {
    _._wbg_cb_unref();
  }
  function Y4(_) {
    _.abort();
  }
  function Z4(_) {
    return _.aborted;
  }
  function em(_, e) {
    _.activeTexture(e >>> 0);
  }
  function _m(_, e) {
    _.activeTexture(e >>> 0);
  }
  function tm() {
    return g(function(_, e, t, r) {
      _.addEventListener(S(e, t), r);
    }, arguments);
  }
  function rm(_) {
    return _.altKey;
  }
  function nm() {
    return g(function(_) {
      return _.arrayBuffer();
    }, arguments);
  }
  function am(_, e, t) {
    _.attachShader(e, t);
  }
  function om(_, e, t) {
    _.attachShader(e, t);
  }
  function cm(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function bm() {
    return g(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function sm(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function im(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function fm(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function um(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function dm(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function gm(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function pm(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function wm(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function lm(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function mm(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function hm(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function ym(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function xm(_, e) {
    _.bindVertexArrayOES(e);
  }
  function $m(_, e) {
    _.bindVertexArray(e);
  }
  function vm(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Sm(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Am(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Im(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Dm(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Tm(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Fm(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Bm(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Pm(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function km(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function Mm(_, e, t, r, n, a, o, c, b, f, d) {
    _.blitFramebuffer(e, t, r, n, a, o, c, b, f >>> 0, d >>> 0);
  }
  function Rm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Cm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Vm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Lm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Em(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function Om(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function Gm(_) {
    return _.button;
  }
  function Wm() {
    return g(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function zm() {
    return g(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Um() {
    return g(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function qm(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, E(r, n));
  }
  function Hm(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, ee(r, n));
  }
  function jm(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, ve(r, n));
  }
  function Km(_, e) {
    _.clearDepth(e);
  }
  function Nm(_, e) {
    _.clearDepth(e);
  }
  function Jm(_, e) {
    _.clearStencil(e);
  }
  function Qm(_, e) {
    _.clearStencil(e);
  }
  function Xm(_, e) {
    _.clear(e >>> 0);
  }
  function Ym(_, e) {
    _.clear(e >>> 0);
  }
  function Zm(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function e7(_, e) {
    const t = e.code, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function _7(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function t7(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function r7(_, e) {
    _.compileShader(e);
  }
  function n7(_, e) {
    _.compileShader(e);
  }
  function a7(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function o7(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function c7(_, e, t, r, n, a, o, c, b, f) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b, f);
  }
  function b7(_, e, t, r, n, a, o, c, b, f, d, I) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d, I);
  }
  function s7(_, e, t, r, n, a, o, c, b, f, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d);
  }
  function i7() {
    return g(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function f7(_) {
    return _.contentRect;
  }
  function u7(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function d7(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function g7(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function p7(_, e, t, r, n, a, o, c, b, f) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f);
  }
  function w7() {
    return g(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function l7() {
    return g(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function m7(_, e) {
    return _.createBindGroup(e);
  }
  function h7(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : T(e);
  }
  function y7() {
    return g(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function x7(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : T(e);
  }
  function $7(_, e) {
    return _.createCommandEncoder(e);
  }
  function v7(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : T(e);
  }
  function S7(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : T(e);
  }
  function A7(_, e) {
    return _.createPipelineLayout(e);
  }
  function I7(_) {
    const e = _.createProgram();
    return v(e) ? 0 : T(e);
  }
  function D7(_) {
    const e = _.createProgram();
    return v(e) ? 0 : T(e);
  }
  function T7(_) {
    const e = _.createQuery();
    return v(e) ? 0 : T(e);
  }
  function F7() {
    return g(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function B7(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : T(e);
  }
  function P7(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : T(e);
  }
  function k7(_, e) {
    return _.createSampler(e);
  }
  function M7(_) {
    const e = _.createSampler();
    return v(e) ? 0 : T(e);
  }
  function R7(_, e) {
    return _.createShaderModule(e);
  }
  function C7(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : T(t);
  }
  function V7(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : T(t);
  }
  function L7(_) {
    const e = _.createTexture();
    return v(e) ? 0 : T(e);
  }
  function E7(_) {
    const e = _.createTexture();
    return v(e) ? 0 : T(e);
  }
  function O7() {
    return g(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function G7(_) {
    const e = _.createVertexArrayOES();
    return v(e) ? 0 : T(e);
  }
  function W7(_) {
    const e = _.createVertexArray();
    return v(e) ? 0 : T(e);
  }
  function z7() {
    return g(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function U7(_) {
    return _.ctrlKey;
  }
  function q7(_, e) {
    _.cullFace(e >>> 0);
  }
  function H7(_, e) {
    _.cullFace(e >>> 0);
  }
  function j7(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function K7(_, e) {
    _.deleteBuffer(e);
  }
  function N7(_, e) {
    _.deleteBuffer(e);
  }
  function J7(_, e) {
    _.deleteFramebuffer(e);
  }
  function Q7(_, e) {
    _.deleteFramebuffer(e);
  }
  function X7(_, e) {
    _.deleteProgram(e);
  }
  function Y7(_, e) {
    _.deleteProgram(e);
  }
  function Z7(_, e) {
    _.deleteQuery(e);
  }
  function e6(_, e) {
    _.deleteRenderbuffer(e);
  }
  function _6(_, e) {
    _.deleteRenderbuffer(e);
  }
  function t6(_, e) {
    _.deleteSampler(e);
  }
  function r6(_, e) {
    _.deleteShader(e);
  }
  function n6(_, e) {
    _.deleteShader(e);
  }
  function a6(_, e) {
    _.deleteSync(e);
  }
  function o6(_, e) {
    _.deleteTexture(e);
  }
  function c6(_, e) {
    _.deleteTexture(e);
  }
  function b6(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function s6(_, e) {
    _.deleteVertexArray(e);
  }
  function i6(_, e) {
    _.depthFunc(e >>> 0);
  }
  function f6(_, e) {
    _.depthFunc(e >>> 0);
  }
  function u6(_, e) {
    _.depthMask(e !== 0);
  }
  function d6(_, e) {
    _.depthMask(e !== 0);
  }
  function g6(_, e, t) {
    _.depthRange(e, t);
  }
  function p6(_, e, t) {
    _.depthRange(e, t);
  }
  function w6(_, e) {
    const t = e.description, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function l6(_) {
    _.destroy();
  }
  function m6(_) {
    return _.devicePixelRatio;
  }
  function h6(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function y6(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function x6(_, e) {
    _.disable(e >>> 0);
  }
  function $6(_, e) {
    _.disable(e >>> 0);
  }
  function v6(_) {
    const e = _.document;
    return v(e) ? 0 : T(e);
  }
  function S6(_) {
    return _.done;
  }
  function A6(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function I6(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function D6(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function T6(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function F6(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function B6(_, e) {
    _.drawBuffers(e);
  }
  function P6(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function k6(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function M6(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function R6(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function C6(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function V6(_, e) {
    _.enable(e >>> 0);
  }
  function L6(_, e) {
    _.enable(e >>> 0);
  }
  function E6(_, e) {
    _.endQuery(e >>> 0);
  }
  function O6(_) {
    _.end();
  }
  function G6(_) {
    return Object.entries(_);
  }
  function W6(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function z6(_) {
    console.error(_);
  }
  function U6(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(S(_, e));
    } finally {
      s.__wbindgen_free(t, r, 1);
    }
  }
  function q6(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return v(r) ? 0 : T(r);
  }
  function H6(_, e, t) {
    return _.fetch(S(e, t));
  }
  function j6(_, e, t, r) {
    return _.fetch(S(e, t), r);
  }
  function K6(_) {
    return _.finish();
  }
  function N6(_, e) {
    return _.finish(e);
  }
  function J6(_) {
    _.flush();
  }
  function Q6(_) {
    _.flush();
  }
  function X6() {
    return g(function(_) {
      _.focus();
    }, arguments);
  }
  function Y6(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function Z6(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function e8(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function _8(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function t8(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function r8(_, e, t, r, n, a, o) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, o);
  }
  function n8(_, e) {
    _.frontFace(e >>> 0);
  }
  function a8(_, e) {
    _.frontFace(e >>> 0);
  }
  function o8(_) {
    return _.getBoundingClientRect();
  }
  function c8(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function b8() {
    return g(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : T(n);
    }, arguments);
  }
  function s8() {
    return g(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : T(r);
    }, arguments);
  }
  function i8() {
    return g(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : T(r);
    }, arguments);
  }
  function f8() {
    return g(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : T(n);
    }, arguments);
  }
  function u8() {
    return g(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function d8(_, e, t) {
    const r = _.getElementById(S(e, t));
    return v(r) ? 0 : T(r);
  }
  function g8() {
    return g(function(_, e, t) {
      const r = _.getExtension(S(e, t));
      return v(r) ? 0 : T(r);
    }, arguments);
  }
  function p8() {
    return g(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function w8() {
    return g(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function l8() {
    return g(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function m8() {
    return g(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function h8(_) {
    const e = _.getPreferredCanvasFormat();
    return (ce.indexOf(e) + 1 || 96) - 1;
  }
  function y8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function x8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function $8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function v8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function S8(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function A8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function I8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function D8(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function T8(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function F8(_) {
    const e = _.getSupportedExtensions();
    return v(e) ? 0 : T(e);
  }
  function B8(_) {
    const e = _.getSupportedProfiles();
    return v(e) ? 0 : T(e);
  }
  function P8(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function k8(_, e, t, r) {
    return _.getUniformBlockIndex(e, S(t, r));
  }
  function M8(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : T(n);
  }
  function R8(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : T(n);
  }
  function C8(_, e) {
    return _[e >>> 0];
  }
  function V8(_, e) {
    const t = _[e >>> 0];
    return v(t) ? 0 : T(t);
  }
  function L8() {
    return g(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function E8(_, e) {
    return _[e >>> 0];
  }
  function O8(_, e) {
    return _[e];
  }
  function G8(_) {
    return _.gpu;
  }
  function W8(_, e, t) {
    return _.hasAttribute(S(e, t));
  }
  function z8(_) {
    return _.height;
  }
  function U8(_) {
    return _.height;
  }
  function q8(_) {
    return _.hidden;
  }
  function H8(_, e, t) {
    return _.includes(e, t);
  }
  function j8(_) {
    return _.info;
  }
  function K8(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function N8(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function J8(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function Q8(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function X8(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function Y8(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function Z8(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function e5(_) {
    let e;
    try {
      e = _ instanceof Response;
    } catch {
      e = false;
    }
    return e;
  }
  function _5(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function t5(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function r5(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function n5() {
    return g(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function a5(_) {
    return Array.isArray(_);
  }
  function o5(_) {
    return _.isComposing;
  }
  function c5(_) {
    return Number.isSafeInteger(_);
  }
  function b5(_, e) {
    return Object.is(_, e);
  }
  function s5() {
    return Symbol.iterator;
  }
  function i5(_, e) {
    const t = e.key, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function f5(_, e) {
    const t = e.label, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function u5(_) {
    return _.length;
  }
  function d5(_) {
    return _.length;
  }
  function g5(_) {
    return _.limits;
  }
  function p5(_) {
    return _.limits;
  }
  function w5(_, e) {
    _.linkProgram(e);
  }
  function l5(_, e) {
    _.linkProgram(e);
  }
  function m5(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function h5(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function y5(_) {
    return _.maxBindGroups;
  }
  function x5(_) {
    return _.maxBindingsPerBindGroup;
  }
  function $5(_) {
    return _.maxBufferSize;
  }
  function v5(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function S5(_) {
    return _.maxColorAttachments;
  }
  function A5(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function I5(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function D5(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function T5(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function F5(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function B5(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function P5(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function k5(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function M5(_) {
    return _.maxInterStageShaderVariables;
  }
  function R5(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function C5(_) {
    return _.maxSamplersPerShaderStage;
  }
  function V5(_) {
    return _.maxStorageBufferBindingSize;
  }
  function L5(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function E5(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function O5(_) {
    return _.maxTextureArrayLayers;
  }
  function G5(_) {
    return _.maxTextureDimension1D;
  }
  function W5(_) {
    return _.maxTextureDimension2D;
  }
  function z5(_) {
    return _.maxTextureDimension3D;
  }
  function U5(_) {
    return _.maxUniformBufferBindingSize;
  }
  function q5(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function H5(_) {
    return _.maxVertexAttributes;
  }
  function j5(_) {
    return _.maxVertexBufferArrayStride;
  }
  function K5(_) {
    return _.maxVertexBuffers;
  }
  function N5(_) {
    return _.metaKey;
  }
  function J5(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function Q5(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function X5(_) {
    return _.navigator;
  }
  function Y5(_) {
    return _.navigator;
  }
  function Z5() {
    return g(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function e9() {
    return new Error();
  }
  function _9() {
    return new Object();
  }
  function t9() {
    return new Array();
  }
  function r9() {
    return g(function() {
      return new AbortController();
    }, arguments);
  }
  function n9(_) {
    return new Uint8Array(_);
  }
  function a9(_, e) {
    return new Error(S(_, e));
  }
  function o9(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, o) => {
        const c = t.a;
        t.a = 0;
        try {
          return FS(c, t.b, a, o);
        } finally {
          t.a = c;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function c9(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function b9() {
    return g(function(_) {
      return _.next();
    }, arguments);
  }
  function s9(_) {
    return _.next;
  }
  function i9(_) {
    return _.now();
  }
  function f9(_, e) {
    _.observe(e);
  }
  function u9(_) {
    return Array.of(_);
  }
  function d9(_) {
    return _.offsetX;
  }
  function g9(_) {
    return _.offsetY;
  }
  function p9(_) {
    return _.ok;
  }
  function w9(_) {
    return _.onSubmittedWorkDone();
  }
  function l9(_) {
    const e = _.performance;
    return v(e) ? 0 : T(e);
  }
  function m9(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function h9(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function y9(_, e, t) {
    _.polygonOffset(e, t);
  }
  function x9(_, e, t) {
    _.polygonOffset(e, t);
  }
  function $9(_) {
    _.preventDefault();
  }
  function v9(_) {
    return Te.__wrap(_);
  }
  function S9(_, e, t) {
    Uint8Array.prototype.set.call(i_(_, e), t);
  }
  function A9(_, e) {
    return _.push(e);
  }
  function I9(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function D9() {
    return g(function(_, e, t) {
      return _.querySelectorAll(S(e, t));
    }, arguments);
  }
  function T9() {
    return g(function(_, e, t) {
      const r = _.querySelector(S(e, t));
      return v(r) ? 0 : T(r);
    }, arguments);
  }
  function F9(_) {
    return _.queueMicrotask;
  }
  function B9(_) {
    queueMicrotask(_);
  }
  function P9(_) {
    return _.queue;
  }
  function k9(_, e) {
    _.readBuffer(e >>> 0);
  }
  function M9() {
    return g(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function R9() {
    return g(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function C9() {
    return g(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function V9(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function L9(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function E9(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function O9(_) {
    return _.repeat;
  }
  function G9(_, e) {
    return _.requestAdapter(e);
  }
  function W9(_) {
    return _.requestAdapter();
  }
  function z9() {
    return g(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function U9(_, e) {
    return _.requestDevice(e);
  }
  function q9(_) {
    return Promise.resolve(_);
  }
  function H9(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function j9(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function K9(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function N9(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function J9() {
    return g(function(_, e, t, r, n) {
      _.setAttribute(S(e, t), S(r, n));
    }, arguments);
  }
  function Q9() {
    return g(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, ve(r, n), a, o >>> 0);
    }, arguments);
  }
  function X9(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function Y9(_, e, t, r, n) {
    _.setIndexBuffer(e, Y_[t], r, n);
  }
  function Z9(_, e, t, r) {
    _.setIndexBuffer(e, Y_[t], r);
  }
  function eh(_, e) {
    _.setPipeline(e);
  }
  function _h(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function th(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function rh(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
  }
  function nh(_, e, t) {
    _.set(e, t >>> 0);
  }
  function ah() {
    return g(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function oh(_, e, t) {
    _[e] = t;
  }
  function ch(_, e) {
    _.a = e;
  }
  function bh(_, e) {
    _.access = GS[e];
  }
  function sh(_, e) {
    _.addressModeU = Q_[e];
  }
  function ih(_, e) {
    _.addressModeV = Q_[e];
  }
  function fh(_, e) {
    _.addressModeW = Q_[e];
  }
  function uh(_, e) {
    _.alpha = e;
  }
  function dh(_, e) {
    _.alphaMode = MS[e];
  }
  function gh(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function ph(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function wh(_, e) {
    _.arrayStride = e;
  }
  function lh(_, e) {
    _.aspect = Ht[e];
  }
  function mh(_, e) {
    _.aspect = Ht[e];
  }
  function hh(_, e) {
    _.attributes = e;
  }
  function yh(_, e) {
    _.b = e;
  }
  function xh(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function $h(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function vh(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function Sh(_, e) {
    _.bindGroupLayouts = e;
  }
  function Ah(_, e) {
    _.binding = e >>> 0;
  }
  function Ih(_, e) {
    _.binding = e >>> 0;
  }
  function Dh(_, e) {
    _.blend = e;
  }
  function Th(_, e) {
    _.buffer = e;
  }
  function Fh(_, e) {
    _.buffer = e;
  }
  function Bh(_, e) {
    _.buffers = e;
  }
  function Ph(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function kh(_, e) {
    _.clearValue = e;
  }
  function Mh(_, e, t) {
    _.code = S(e, t);
  }
  function Rh(_, e) {
    _.colorAttachments = e;
  }
  function Ch(_, e) {
    _.color = e;
  }
  function Vh(_, e) {
    _.compare = X_[e];
  }
  function Lh(_, e) {
    _.compare = X_[e];
  }
  function Eh(_, e) {
    _.count = e >>> 0;
  }
  function Oh(_, e) {
    _.cullMode = RS[e];
  }
  function Gh(_, e, t) {
    _[e >>> 0] = t;
  }
  function Wh(_, e) {
    _.depthBias = e;
  }
  function zh(_, e) {
    _.depthBiasClamp = e;
  }
  function Uh(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function qh(_, e) {
    _.depthClearValue = e;
  }
  function Hh(_, e) {
    _.depthCompare = X_[e];
  }
  function jh(_, e) {
    _.depthFailOp = et[e];
  }
  function Kh(_, e) {
    _.depthLoadOp = Z_[e];
  }
  function Nh(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function Jh(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function Qh(_, e) {
    _.depthStencil = e;
  }
  function Xh(_, e) {
    _.depthStencilAttachment = e;
  }
  function Yh(_, e) {
    _.depthStoreOp = _t[e];
  }
  function Zh(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function ey(_, e) {
    _.device = e;
  }
  function _y(_, e) {
    _.dimension = tt[e];
  }
  function ty(_, e) {
    _.dimension = WS[e];
  }
  function ry(_, e) {
    _.dstFactor = Ut[e];
  }
  function ny(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function ay(_, e) {
    _.entries = e;
  }
  function oy(_, e) {
    _.entries = e;
  }
  function cy(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function by(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function sy(_, e) {
    _.externalTexture = e;
  }
  function iy(_, e) {
    _.failOp = et[e];
  }
  function fy(_, e) {
    _.format = ce[e];
  }
  function uy(_, e) {
    _.format = US[e];
  }
  function dy(_, e) {
    _.format = ce[e];
  }
  function gy(_, e) {
    _.format = ce[e];
  }
  function py(_, e) {
    _.format = ce[e];
  }
  function wy(_, e) {
    _.format = ce[e];
  }
  function ly(_, e) {
    _.format = ce[e];
  }
  function my(_, e) {
    _.fragment = e;
  }
  function hy(_, e) {
    _.frontFace = CS[e];
  }
  function yy(_, e) {
    _.g = e;
  }
  function xy(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function $y(_, e) {
    _.height = e >>> 0;
  }
  function vy(_, e) {
    _.height = e >>> 0;
  }
  function Sy(_, e) {
    _.height = e >>> 0;
  }
  function Ay(_, e, t) {
    _.label = S(e, t);
  }
  function Iy(_, e, t) {
    _.label = S(e, t);
  }
  function Dy(_, e, t) {
    _.label = S(e, t);
  }
  function Ty(_, e, t) {
    _.label = S(e, t);
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
  function Ey(_, e) {
    _.layout = e;
  }
  function Oy(_, e) {
    _.layout = e;
  }
  function Gy(_, e) {
    _.loadOp = Z_[e];
  }
  function Wy(_, e) {
    _.lodMaxClamp = e;
  }
  function zy(_, e) {
    _.lodMinClamp = e;
  }
  function Uy(_, e) {
    _.magFilter = qt[e];
  }
  function qy(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function Hy(_, e) {
    _.mask = e >>> 0;
  }
  function jy(_, e) {
    _.maxAnisotropy = e;
  }
  function Ky(_, e) {
    _.minBindingSize = e;
  }
  function Ny(_, e) {
    _.minFilter = qt[e];
  }
  function Jy(_, e) {
    _.mipLevel = e >>> 0;
  }
  function Qy(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Xy(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Yy(_, e) {
    _.mipmapFilter = VS[e];
  }
  function Zy(_, e) {
    _.module = e;
  }
  function ex(_, e) {
    _.module = e;
  }
  function _x(_, e) {
    _.multisample = e;
  }
  function tx(_, e) {
    _.multisampled = e !== 0;
  }
  function rx(_, e) {
    _.offset = e;
  }
  function nx(_, e) {
    _.offset = e;
  }
  function ax(_, e) {
    _.offset = e;
  }
  function ox(_, e) {
    _.operation = PS[e];
  }
  function cx(_, e) {
    _.origin = e;
  }
  function bx(_, e) {
    _.passOp = et[e];
  }
  function sx(_, e) {
    _.powerPreference = LS[e];
  }
  function ix(_, e) {
    _.primitive = e;
  }
  function fx(_, e) {
    _.querySet = e;
  }
  function ux(_, e) {
    _.r = e;
  }
  function dx(_, e) {
    _.requiredFeatures = e;
  }
  function gx(_, e) {
    _.requiredLimits = e;
  }
  function px(_, e) {
    _.resolveTarget = e;
  }
  function wx(_, e) {
    _.resource = e;
  }
  function lx(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function mx(_, e) {
    _.sampleCount = e >>> 0;
  }
  function hx(_, e) {
    _.sampleType = zS[e];
  }
  function yx(_, e) {
    _.sampler = e;
  }
  function xx(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function $x(_, e) {
    _.signal = e;
  }
  function vx(_, e) {
    _.size = e;
  }
  function Sx(_, e) {
    _.size = e;
  }
  function Ax(_, e) {
    _.size = e;
  }
  function Ix(_, e) {
    _.srcFactor = Ut[e];
  }
  function Dx(_, e) {
    _.stencilBack = e;
  }
  function Tx(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function Fx(_, e) {
    _.stencilFront = e;
  }
  function Bx(_, e) {
    _.stencilLoadOp = Z_[e];
  }
  function Px(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function kx(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function Mx(_, e) {
    _.stencilStoreOp = _t[e];
  }
  function Rx(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function Cx(_, e) {
    _.stepMode = qS[e];
  }
  function Vx(_, e) {
    _.storageTexture = e;
  }
  function Lx(_, e) {
    _.storeOp = _t[e];
  }
  function Ex(_, e) {
    _.stripIndexFormat = Y_[e];
  }
  function Ox(_, e) {
    _.targets = e;
  }
  function Gx(_, e) {
    _.texture = e;
  }
  function Wx(_, e) {
    _.texture = e;
  }
  function zx(_, e) {
    _.timestampWrites = e;
  }
  function Ux(_, e) {
    _.topology = ES[e];
  }
  function qx(_, e) {
    _.type = kS[e];
  }
  function Hx(_, e) {
    _.type = OS[e];
  }
  function jx(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function Kx(_, e) {
    _.usage = e >>> 0;
  }
  function Nx(_, e) {
    _.usage = e >>> 0;
  }
  function Jx(_, e) {
    _.usage = e >>> 0;
  }
  function Qx(_, e) {
    _.usage = e >>> 0;
  }
  function Xx(_, e) {
    _.vertex = e;
  }
  function Yx(_, e) {
    _.view = e;
  }
  function Zx(_, e) {
    _.view = e;
  }
  function e$(_, e) {
    _.viewDimension = tt[e];
  }
  function _$(_, e) {
    _.viewDimension = tt[e];
  }
  function t$(_, e) {
    _.viewFormats = e;
  }
  function r$(_, e) {
    _.viewFormats = e;
  }
  function n$(_, e) {
    _.visibility = e >>> 0;
  }
  function a$(_, e) {
    _.width = e >>> 0;
  }
  function o$(_, e) {
    _.width = e >>> 0;
  }
  function c$(_, e) {
    _.width = e >>> 0;
  }
  function b$(_, e) {
    _.writeMask = e >>> 0;
  }
  function s$(_, e) {
    _.x = e >>> 0;
  }
  function i$(_, e) {
    _.y = e >>> 0;
  }
  function f$(_, e) {
    _.z = e >>> 0;
  }
  function u$(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function d$(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function g$(_) {
    return _.shiftKey;
  }
  function p$(_) {
    return _.signal;
  }
  function w$(_, e) {
    const t = e.stack, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function l$() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return v(_) ? 0 : T(_);
  }
  function m$() {
    const _ = typeof global > "u" ? null : global;
    return v(_) ? 0 : T(_);
  }
  function h$() {
    const _ = typeof self > "u" ? null : self;
    return v(_) ? 0 : T(_);
  }
  function y$() {
    const _ = typeof window > "u" ? null : window;
    return v(_) ? 0 : T(_);
  }
  function x$(_, e) {
    const t = e.statusText, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function $$(_) {
    return _.status;
  }
  function v$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function S$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function A$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function I$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function D$(_, e) {
    _.stencilMask(e >>> 0);
  }
  function T$(_, e) {
    _.stencilMask(e >>> 0);
  }
  function F$(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function B$(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function P$(_, e) {
    _.submit(e);
  }
  function k$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function M$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function R$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function C$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function V$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function L$(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function E$(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function O$(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function G$(_, e, t, r, n, a, o) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, o);
  }
  function W$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function z$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function U$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function q$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
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
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function Q$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function X$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function Y$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
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
  function tv(_, e, t) {
    return _.then(e, t);
  }
  function rv(_, e, t) {
    return _.then(e, t);
  }
  function nv(_, e) {
    return _.then(e);
  }
  function av(_, e, t) {
    _.uniform1f(e, t);
  }
  function ov(_, e, t) {
    _.uniform1f(e, t);
  }
  function cv(_, e, t) {
    _.uniform1i(e, t);
  }
  function bv(_, e, t) {
    _.uniform1i(e, t);
  }
  function sv(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function iv(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function fv(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function uv(_, e, t, r) {
    _.uniform2iv(e, ee(t, r));
  }
  function dv(_, e, t, r) {
    _.uniform2iv(e, ee(t, r));
  }
  function gv(_, e, t, r) {
    _.uniform2uiv(e, ve(t, r));
  }
  function pv(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function wv(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function lv(_, e, t, r) {
    _.uniform3iv(e, ee(t, r));
  }
  function mv(_, e, t, r) {
    _.uniform3iv(e, ee(t, r));
  }
  function hv(_, e, t, r) {
    _.uniform3uiv(e, ve(t, r));
  }
  function yv(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function xv(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function $v(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function vv(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function Sv(_, e, t, r) {
    _.uniform4iv(e, ee(t, r));
  }
  function Av(_, e, t, r) {
    _.uniform4iv(e, ee(t, r));
  }
  function Iv(_, e, t, r) {
    _.uniform4uiv(e, ve(t, r));
  }
  function Dv(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function Tv(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function Fv(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function Bv(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, E(r, n));
  }
  function Pv(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, E(r, n));
  }
  function kv(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function Mv(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function Rv(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, E(r, n));
  }
  function Cv(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, E(r, n));
  }
  function Vv(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function Lv(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function Ev(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, E(r, n));
  }
  function Ov(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, E(r, n));
  }
  function Gv(_) {
    _.unmap();
  }
  function Wv(_, e) {
    _.useProgram(e);
  }
  function zv(_, e) {
    _.useProgram(e);
  }
  function Uv(_) {
    return _.value;
  }
  function qv(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function Hv(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function jv(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function Kv(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function Nv(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function Jv(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function Qv(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function Xv(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function Yv(_) {
    return _.width;
  }
  function Zv(_) {
    return _.width;
  }
  function eS() {
    return g(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, i_(r, n), a, o);
    }, arguments);
  }
  function _S() {
    return g(function(_, e, t, r, n, a) {
      _.writeTexture(e, i_(t, r), n, a);
    }, arguments);
  }
  function tS(_, e) {
    return _e(_, e, vS);
  }
  function rS(_, e) {
    return _e(_, e, TS);
  }
  function nS(_, e) {
    return _e(_, e, BS);
  }
  function aS(_, e) {
    return _e(_, e, SS);
  }
  function oS(_, e) {
    return _e(_, e, AS);
  }
  function cS(_, e) {
    return _e(_, e, IS);
  }
  function bS(_, e) {
    return _e(_, e, DS);
  }
  function sS(_, e) {
    return _e(_, e, $S);
  }
  function iS(_) {
    return _;
  }
  function fS(_) {
    return _;
  }
  function uS(_, e) {
    return E(_, e);
  }
  function dS(_, e) {
    return HS(_, e);
  }
  function gS(_, e) {
    return ee(_, e);
  }
  function pS(_, e) {
    return jS(_, e);
  }
  function wS(_, e) {
    return KS(_, e);
  }
  function lS(_, e) {
    return ve(_, e);
  }
  function mS(_, e) {
    return i_(_, e);
  }
  function hS(_, e) {
    return S(_, e);
  }
  function yS(_) {
    return BigInt.asUintN(64, _);
  }
  function xS() {
    const _ = s.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function $S(_, e) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function vS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function SS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function AS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function IS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function DS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6(_, e, t);
  }
  function TS(_, e, t) {
    const r = s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (r[1]) throw P(r[0]);
  }
  function FS(_, e, t, r) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, r);
  }
  function BS(_, e, t) {
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
  ], PS = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], kS = [
    "uniform",
    "storage",
    "read-only-storage"
  ], MS = [
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
  ], RS = [
    "none",
    "front",
    "back"
  ], qt = [
    "nearest",
    "linear"
  ], CS = [
    "ccw",
    "cw"
  ], Y_ = [
    "uint16",
    "uint32"
  ], Z_ = [
    "load",
    "clear"
  ], VS = [
    "nearest",
    "linear"
  ], LS = [
    "low-power",
    "high-performance"
  ], ES = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], OS = [
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
  ], GS = [
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
  ], WS = [
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
  ], zS = [
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
  ], US = [
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
  ], qS = [
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
  function T(_) {
    const e = s.__externref_table_alloc();
    return s.__wbindgen_externrefs.set(e, _), e;
  }
  function m(_, e) {
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
  function E(_, e) {
    return _ = _ >>> 0, NS().subarray(_ / 4, _ / 4 + e);
  }
  function HS(_, e) {
    return _ = _ >>> 0, QS().subarray(_ / 2, _ / 2 + e);
  }
  function ee(_, e) {
    return _ = _ >>> 0, XS().subarray(_ / 4, _ / 4 + e);
  }
  function jS(_, e) {
    return _ = _ >>> 0, YS().subarray(_ / 1, _ / 1 + e);
  }
  function KS(_, e) {
    return _ = _ >>> 0, ZS().subarray(_ / 2, _ / 2 + e);
  }
  function ve(_, e) {
    return _ = _ >>> 0, eA().subarray(_ / 4, _ / 4 + e);
  }
  function i_(_, e) {
    return _ = _ >>> 0, me().subarray(_ / 1, _ / 1 + e);
  }
  let ie = null;
  function k() {
    return (ie === null || ie.buffer.detached === true || ie.buffer.detached === void 0 && ie.buffer !== s.memory.buffer) && (ie = new DataView(s.memory.buffer)), ie;
  }
  let Ne = null;
  function NS() {
    return (Ne === null || Ne.byteLength === 0) && (Ne = new Float32Array(s.memory.buffer)), Ne;
  }
  let Je = null;
  function JS() {
    return (Je === null || Je.byteLength === 0) && (Je = new Float64Array(s.memory.buffer)), Je;
  }
  let Qe = null;
  function QS() {
    return (Qe === null || Qe.byteLength === 0) && (Qe = new Int16Array(s.memory.buffer)), Qe;
  }
  let Xe = null;
  function XS() {
    return (Xe === null || Xe.byteLength === 0) && (Xe = new Int32Array(s.memory.buffer)), Xe;
  }
  let Ye = null;
  function YS() {
    return (Ye === null || Ye.byteLength === 0) && (Ye = new Int8Array(s.memory.buffer)), Ye;
  }
  function S(_, e) {
    return rA(_ >>> 0, e);
  }
  let Ze = null;
  function ZS() {
    return (Ze === null || Ze.byteLength === 0) && (Ze = new Uint16Array(s.memory.buffer)), Ze;
  }
  let e_ = null;
  function eA() {
    return (e_ === null || e_.byteLength === 0) && (e_ = new Uint32Array(s.memory.buffer)), e_;
  }
  let __ = null;
  function me() {
    return (__ === null || __.byteLength === 0) && (__ = new Uint8Array(s.memory.buffer)), __;
  }
  function g(_, e) {
    try {
      return _.apply(this, e);
    } catch (t) {
      const r = T(t);
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
    return me().set(_, t / 1), M = _.length, t;
  }
  function t_(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return JS().set(_, t / 8), M = _.length, t;
  }
  function _A(_, e) {
    const t = e(_.length * 4, 4) >>> 0;
    for (let r = 0; r < _.length; r++) {
      const n = T(_[r]);
      k().setUint32(t + 4 * r, n, true);
    }
    return M = _.length, t;
  }
  function G(_, e, t) {
    if (t === void 0) {
      const c = Ie.encode(_), b = e(c.length, 1) >>> 0;
      return me().subarray(b, b + c.length).set(c), M = c.length, b;
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
    return M = o, n;
  }
  function P(_) {
    const e = s.__wbindgen_externrefs.get(_);
    return s.__externref_table_dealloc(_), e;
  }
  let a_ = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  a_.decode();
  const tA = 2146435072;
  let y_ = 0;
  function rA(_, e) {
    return y_ += e, y_ >= tA && (a_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), a_.decode(), y_ = e), a_.decode(me().subarray(_, _ + e));
  }
  const Ie = new TextEncoder();
  "encodeInto" in Ie || (Ie.encodeInto = function(_, e) {
    const t = Ie.encode(_);
    return e.set(t), {
      read: _.length,
      written: t.length
    };
  });
  let M = 0, s;
  function nA(_) {
    s = _;
  }
  URL = globalThis.URL;
  const aA = await O_({
    "./proteus_bench_web_bg.js": {
      __wbg_call_5575218572ead796: zm,
      __wbg_new_typed_00a409eb4ec4f2d9: o9,
      __wbg_then_05edfc8a4fea5106: tv,
      __wbg_get_unchecked_54a4374c38e08460: E8,
      __wbg_next_0c4066e251d2eff9: b9,
      __wbg_done_b62d4a7d2286852a: S6,
      __wbg_value_49f783bb59765962: Uv,
      __wbg_length_c6054974c0a6cdb9: d5,
      __wbg_instanceof_Map_afa18d5840c04c15: Y8,
      __wbg_get_197a3fe98f169e38: C8,
      __wbg_new_227d7c05414eb861: e9,
      __wbg_stack_3b0d974bbf31e44f: w$,
      __wbg_error_a6fa202b58aa1cd3: U6,
      __wbg_push_f724b5db8acf89d2: A9,
      __wbg_proteusapp_new: v9,
      __wbg_call_0e855b388e315e17: Wm,
      __wbg_call_8e98ed2f3c86c4b5: Um,
      __wbg_set_dc601f4a69da0bc2: Gh,
      __wbg_get_with_ref_key_6412cf3094599694: O8,
      __wbg_set_6be42768c690e380: oh,
      __wbg_String_8564e559799eccda: M4,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: Q8,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: G5,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: W5,
      __wbg_maxTextureDimension3D_06ee54121b37d431: z5,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: O5,
      __wbg_maxBindGroups_14611ac9ed1c6b56: y5,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: x5,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: k5,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: P5,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: R5,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: C5,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: L5,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: E5,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: q5,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: U5,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: V5,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: K5,
      __wbg_maxBufferSize_f7ce3e1856349d2f: $5,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: H5,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: j5,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: M5,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: Q5,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: J5,
      __wbg_maxColorAttachments_fd9187f9f786da18: S5,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: v5,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: F5,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: A5,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: I5,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: D5,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: T5,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: B5,
      __wbg_description_18d0a6d4077fec8e: w6,
      __wbg_set_dst_factor_1ed75271a89a711e: ry,
      __wbg_set_operation_b5862f5a1a143b30: ox,
      __wbg_set_src_factor_1c4f755f8676df1b: Ix,
      __wbg_set_texture_16d2be474ce6ad0c: Gx,
      __wbg_set_mip_level_246db61be15bdd69: Jy,
      __wbg_set_x_56f0c2c08a62725c: s$,
      __wbg_set_y_04fb8ce84735b4e1: i$,
      __wbg_set_z_a51316db27a4941e: f$,
      __wbg_set_origin_9b3b0fbe0a5dc469: cx,
      __wbg_set_aspect_77332ac136ee94eb: lh,
      __wbg_Window_a07901001eb4269f: R4,
      __wbg_gpu_a7c12045c25d009a: G8,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: C4,
      __wbg_set_a_5f6e488475272136: ch,
      __wbg_set_b_688365d692bba214: yh,
      __wbg_set_g_d4d1d77cf8fdd362: yy,
      __wbg_set_r_527e5a41c4b1a846: ux,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: J8,
      __wbg_queue_65d985f3e6d786a6: P9,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: sx,
      __wbg_requestAdapter_9ff5c9d1ff271165: G9,
      __wbg_set_required_limits_3b031f66f838f4e3: gx,
      __wbg_set_required_features_54918de8185c5fab: dx,
      __wbg_set_label_bae57fb9f24fde5c: Py,
      __wbg_requestDevice_c1c34f88a477e509: U9,
      __wbg_limits_50a8c5e629dbfe40: p5,
      __wbg_info_22dcf1fd1b12bc7d: j8,
      __wbg_set_size_41cd9255ca1e4242: Sx,
      __wbg_set_usage_908213a4d4bb8bde: Jx,
      __wbg_set_mapped_at_creation_48de4735fab51e78: qy,
      __wbg_set_label_cd567b7b35838e4c: Ry,
      __wbg_createBuffer_2f08c0205e04efca: y7,
      __wbg_set_address_mode_u_a37cf1035585c638: sh,
      __wbg_set_address_mode_v_8ac049e029caef76: ih,
      __wbg_set_address_mode_w_eb9260ee11729e92: fh,
      __wbg_set_compare_42211fbf15e3b850: Lh,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: Wy,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: zy,
      __wbg_set_mag_filter_69d846b974d4bcc0: Uy,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: Ny,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: Yy,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: jy,
      __wbg_set_label_dcd98efbb9370da8: Vy,
      __wbg_createSampler_248bd67c920af37d: k7,
      __wbg_set_width_1a5e2e86fa5bdcd8: o$,
      __wbg_set_height_e8b5483b8c117d5e: vy,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: Nh,
      __wbg_set_format_e9d4b1475bb3bd3b: wy,
      __wbg_set_size_a61ff22205255d61: Ax,
      __wbg_set_usage_7fa9cd18d1104aca: Nx,
      __wbg_set_label_0c1bd0e976cf0a9a: Iy,
      __wbg_set_dimension_36e13ccecae5af4b: ty,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: Xy,
      __wbg_set_sample_count_865e1d19b84e27e6: mx,
      __wbg_set_view_formats_bab284fc81b40e70: t$,
      __wbg_createTexture_9e76b80a2dc0d12e: O7,
      __wbg_set_entries_fc76ca4d7da6a709: oy,
      __wbg_set_layout_eeef59714f5bf48b: Oy,
      __wbg_set_label_f92ae11c77d74198: Ly,
      __wbg_createBindGroup_2320df4db188406c: m7,
      __wbg_set_code_56e2d45ec1ff6c2d: Mh,
      __wbg_set_label_be45aed56e4b9fee: ky,
      __wbg_createShaderModule_53701de4fb271c90: R7,
      __wbg_set_label_d1c24b5a7a3ac31d: Cy,
      __wbg_createCommandEncoder_cd88faca35d9ed68: $7,
      __wbg_set_bind_group_layouts_5325d038771af328: Sh,
      __wbg_set_label_2f592bd1be3db6b3: Fy,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: A7,
      __wbg_set_module_14e471fdd94c582d: ex,
      __wbg_set_entry_point_8db3b6d103e3b865: by,
      __wbg_set_buffers_85a7238f4ef28ab4: Bh,
      __wbg_set_layout_7c5ba5bdcde8a0f0: Ey,
      __wbg_set_vertex_a4951dd9a7a4ed54: Xx,
      __wbg_set_label_c47c451211e2f6d2: My,
      __wbg_set_format_f9341112e43ea182: ly,
      __wbg_set_depth_compare_30e9ea552da12fe2: Hh,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: Zh,
      __wbg_set_depth_bias_428c9340b0fd937b: Wh,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: zh,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: Uh,
      __wbg_set_compare_1509dc1a5420943f: Vh,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: jh,
      __wbg_set_fail_op_77ab26c98f847b65: iy,
      __wbg_set_pass_op_e9470d1262fb8a8b: bx,
      __wbg_set_stencil_back_6ef4683123b19b25: Dx,
      __wbg_set_stencil_front_aeb8580a97e5424b: Fx,
      __wbg_set_stencil_read_mask_2954f260d47349ea: Px,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: Rx,
      __wbg_set_depth_stencil_1bd50dbc450c8650: Qh,
      __wbg_set_module_08ad08e736d8edbf: Zy,
      __wbg_set_targets_6b0b3bdd87f35668: Ox,
      __wbg_set_entry_point_6fec5723cc790927: cy,
      __wbg_set_fragment_1a595620425637e1: my,
      __wbg_set_count_26a934d1cd07d080: Eh,
      __wbg_set_mask_0c49a66362fc0079: Hy,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: gh,
      __wbg_set_multisample_85f073947b782d07: _x,
      __wbg_set_cull_mode_9d466c1ab414cac8: Oh,
      __wbg_set_front_face_50cdf4eb61504a46: hy,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: Ex,
      __wbg_set_topology_beefb3aca0612b00: Ux,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: jx,
      __wbg_set_primitive_369241acd17871f1: ix,
      __wbg_createRenderPipeline_f48187ba9f7701e8: F7,
      __wbg_set_entries_3017e6132f938c6e: ay,
      __wbg_set_label_1175a3329a06e52b: Dy,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: l7,
      __wbg_limits_1c25cb4f379a4418: g5,
      __wbg_set_color_attachments_abe67f6631926e28: Rh,
      __wbg_set_label_8fd860a36d2c7b74: By,
      __wbg_set_view_dbd0294573f64d05: Zx,
      __wbg_set_depth_clear_value_442bf492734f63b6: qh,
      __wbg_set_depth_load_op_34d430b74bb36d91: Kh,
      __wbg_set_depth_store_op_0ea0a215313dbda7: Yh,
      __wbg_set_depth_read_only_138a11b10c731094: Jh,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: Tx,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: Bx,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: Mx,
      __wbg_set_stencil_read_only_fb489d191b6d969b: kx,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: Xh,
      __wbg_set_query_set_18679a8580267d5a: fx,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: vh,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: ny,
      __wbg_set_timestamp_writes_c552d52fbb417005: zx,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: bm,
      __wbg_copyTextureToTexture_1be188df1e535c0a: w7,
      __wbg_label_47480289cc2bce71: f5,
      __wbg_set_label_2d2227f4d5991e50: Ty,
      __wbg_finish_cfaeede3baf55be1: N6,
      __wbg_finish_087cb89c65c06eb1: K6,
      __wbg_drawIndexed_68637ebab6dd8d6e: M6,
      __wbg_setPipeline_bab24dbce96903b9: eh,
      __wbg_setViewport_f9d423db4f4b4b58: rh,
      __wbg_setBindGroup_4ba56e1e0d26f244: Q9,
      __wbg_setBindGroup_6124849cc8547086: X9,
      __wbg_setIndexBuffer_17431786d06c1b7c: Y9,
      __wbg_setIndexBuffer_a16ed5b869c87507: Z9,
      __wbg_setVertexBuffer_b508baf8d0ffe331: th,
      __wbg_setVertexBuffer_91c4b602d0289943: _h,
      __wbg_end_414453a89205612c: O6,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: h8,
      __wbg_getCurrentTexture_51975ae7185fd15f: u8,
      __wbg_set_device_0d774b66e7288f72: ey,
      __wbg_set_format_d347899cd860709c: py,
      __wbg_set_usage_ae014e77ff77ce06: Qx,
      __wbg_set_alpha_mode_92402195b3ae1ee7: dh,
      __wbg_set_view_formats_fe531a043efb71fa: r$,
      __wbg_configure_3d64c677c7d68a15: i7,
      __wbg_writeBuffer_b4bdd36178348ca5: eS,
      __wbg_set_bytes_per_row_91681ca78d744888: Ph,
      __wbg_set_rows_per_image_d198b7e73a38978b: lx,
      __wbg_set_offset_a097a8050a3a9a33: ax,
      __wbg_writeTexture_b45b69132e46a227: _S,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: w9,
      __wbg_submit_1290d44bb76ecef4: P$,
      __wbg_getMappedRange_5ed22727c9679168: w8,
      __wbg_unmap_8f06698a75b8331a: Gv,
      __wbg_destroy_b5b39f25f0799295: l6,
      __wbg_mapAsync_bb0029907dd91181: h5,
      __wbg_set_dimension_174ad7e2fb67fb4e: _y,
      __wbg_set_format_90860b0321868db4: dy,
      __wbg_set_aspect_a823a14d00d42d37: mh,
      __wbg_set_base_array_layer_cc6c68d233489c4b: xh,
      __wbg_set_array_layer_count_daec613068108a9d: ph,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: $h,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: Qy,
      __wbg_set_label_03d2396d4655a3e1: Ay,
      __wbg_set_usage_7f0dda8309469b1c: Kx,
      __wbg_createView_cc96b5bdd3d5bf5e: z7,
      __wbg_set_min_binding_size_689661b9ed25e083: Ky,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: xy,
      __wbg_set_type_38961e08504ca674: qx,
      __wbg_requestAdapter_c46930b8bc33722d: W9,
      __wbg_set_alpha_aa2e606e9e647b21: uh,
      __wbg_set_color_bc393d7efc3c8594: Ch,
      __wbg_set_visibility_1bca121a89accba5: n$,
      __wbg_set_storage_texture_ab9eed9786337ef0: Vx,
      __wbg_set_external_texture_825fe2bc7a0c0603: sy,
      __wbg_set_binding_b6b0fe5c281b8c69: Ah,
      __wbg_set_buffer_e89095a9f0cafad3: Fh,
      __wbg_set_sampler_8c5d7fb1b02058c6: yx,
      __wbg_set_texture_e25a73da75cf5808: Wx,
      __wbg_set_format_abf7a1bc5425c56a: gy,
      __wbg_set_blend_8d6e9c08b5702a09: Dh,
      __wbg_set_write_mask_144b25e2bd909124: b$,
      __wbg_set_load_op_56844f51434037bf: Gy,
      __wbg_set_store_op_caeede4654b3d847: Lx,
      __wbg_set_view_bdeab150b5f0768c: Yx,
      __wbg_set_clear_value_642701f928a5ccb3: kh,
      __wbg_set_resolve_target_fe76b3f99cf72078: px,
      __wbg_set_buffer_55f096330c8912b4: Th,
      __wbg_set_offset_73156b0e0b41d79a: rx,
      __wbg_set_size_1e6281b07cd39177: vx,
      __wbg_set_binding_f3c188a8cd21455b: Ih,
      __wbg_set_resource_fe385d2e3dadaf63: wx,
      __wbg_set_format_6606f5c1fba6f459: uy,
      __wbg_set_offset_8d9d9afffa18b591: nx,
      __wbg_set_shader_location_0ff30a733291a396: xx,
      __wbg_set_array_stride_c2c009eabc18b5f6: wh,
      __wbg_set_attributes_05f9117fd32ca606: hh,
      __wbg_set_step_mode_a35aef328761c452: Cx,
      __wbg_set_type_c1eebc19f8a6aeb9: Hx,
      __wbg_set_multisampled_40505c1381e1c32c: tx,
      __wbg_set_sample_type_7088b1efddce6a69: hx,
      __wbg_set_view_dimension_3ed01b237e85826f: _$,
      __wbg_set_format_1786adb7bc74c7c9: fy,
      __wbg_set_access_091f317905cd76a5: bh,
      __wbg_set_view_dimension_263387976511ebc9: e$,
      __wbg_includes_83dff8d05da243c5: H8,
      __wbg_clearBufferuiv_1d2d93401c0904a3: jm,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: o7,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: b7,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: s7,
      __wbg_copyBufferSubData_a944f33b601b822d: u7,
      __wbg_clientWaitSync_7580165bd2eff461: Zm,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: c7,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: p7,
      __wbg_createQuery_f013132b870a71ef: T7,
      __wbg_createSampler_9fe50152a2524319: M7,
      __wbg_createVertexArray_8685feb21901c932: W7,
      __wbg_deleteQuery_ef51ea0a52420103: Z7,
      __wbg_deleteSampler_5c045e0cc55813d4: t6,
      __wbg_getIndexedParameter_2b18df6fca85f751: p8,
      __wbg_getQueryParameter_0599e85ddb81220b: S8,
      __wbg_getSyncParameter_9a2bda340ebe166f: P8,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: k8,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: n5,
      __wbg_deleteSync_37ca83c429c43d8a: a6,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: s6,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: I6,
      __wbg_drawBuffers_558d96e52e754731: B6,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: k6,
      __wbg_endQuery_161170c5280a8293: E6,
      __wbg_fenceSync_56efc7cc79111e54: q6,
      __wbg_framebufferTextureLayer_2312acdc74f97676: t8,
      __wbg_getBufferSubData_92680d3a2f7be029: c8,
      __wbg_readBuffer_361ec5474f3aae49: k9,
      __wbg_readPixels_5840000f3e22f3ce: R9,
      __wbg_readPixels_5bf204799ed2272f: C9,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: V9,
      __wbg_texImage3D_8647ef58aef5b912: V$,
      __wbg_texStorage2D_ed5df596c5f1e3af: O$,
      __wbg_texStorage3D_160b0197bc190f04: G$,
      __wbg_texSubImage2D_f03448e182b0820d: N$,
      __wbg_texSubImage2D_d14d9c0a1f627c31: K$,
      __wbg_texSubImage2D_89866a04ecd0a76b: q$,
      __wbg_texSubImage2D_5c630043f1c56716: U$,
      __wbg_samplerParameterf_3157ba41c0f4d97a: H9,
      __wbg_samplerParameteri_f85a29156e790189: j9,
      __wbg_texImage2D_0e0f37b9fb297d01: k$,
      __wbg_texImage2D_0e537dc331652de3: M$,
      __wbg_texImage3D_30dbf7234481b8f5: C$,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: z$,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: H$,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: j$,
      __wbg_texSubImage3D_933e4cd41cc5376d: Z$,
      __wbg_texSubImage3D_c3538b28040daac9: _v,
      __wbg_uniform1ui_36c94692177ebf76: sv,
      __wbg_uniform2fv_17592f4dad9798fb: iv,
      __wbg_uniform2iv_d5d29ebbc466977d: dv,
      __wbg_texSubImage3D_0fdbd843482bb916: Q$,
      __wbg_texSubImage3D_09a97a968b93253d: J$,
      __wbg_texSubImage3D_355efde0dc047913: X$,
      __wbg_texSubImage3D_bd32c8e29e470904: ev,
      __wbg_texSubImage3D_5a238709d114b609: Y$,
      __wbg_uniform2uiv_418ba3bf6a230dd5: gv,
      __wbg_uniform4fv_9e670a001c77dca0: vv,
      __wbg_uniform4iv_1d57c6b8e5c0e447: Sv,
      __wbg_uniform3fv_dbe44b778e6b89e8: wv,
      __wbg_uniform3iv_d75d3a5f86d54be4: mv,
      __wbg_uniform3uiv_71c1efc24a662de9: hv,
      __wbg_uniform4uiv_c5d45f5dbdae727a: Iv,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: kv,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: Rv,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: Cv,
      __wbg_uniformBlockBinding_829a71912ad79a04: Dv,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: Tv,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: Bv,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: Pv,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: Vv,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: jv,
      __wbg_activeTexture_525ee3068cb9e8d5: _m,
      __wbg_attachShader_3477e67517b09b6b: am,
      __wbg_bindAttribLocation_79b5d26727094518: sm,
      __wbg_bindBuffer_d3111de6861cb875: um,
      __wbg_bindFramebuffer_63e837a5dc0accfb: pm,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: wm,
      __wbg_bindTexture_7ab28ff4ff3dc506: hm,
      __wbg_blendColor_15f26633b646e542: vm,
      __wbg_blendEquation_7dadb4db540a42da: Dm,
      __wbg_blendEquationSeparate_8240ddfa32266109: Am,
      __wbg_blendFunc_b15af02643e188f1: km,
      __wbg_blendFuncSeparate_456410f9919bed39: Bm,
      __wbg_clear_dadcb3e2929388b0: Xm,
      __wbg_clearDepth_05c17028494ee4dd: Km,
      __wbg_clearStencil_917833d1e2ac56e4: Qm,
      __wbg_colorMask_f111e3e5796458f4: t7,
      __wbg_compileShader_f5625b583b2c9fd6: r7,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: Ev,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: Ov,
      __wbg_vertexAttribDivisor_f17a8585267be92f: Hv,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: d7,
      __wbg_createBuffer_9f602b2dbcbf409c: x7,
      __wbg_createFramebuffer_4a250944a4542bbc: v7,
      __wbg_createProgram_4c8164d471c10346: I7,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: P7,
      __wbg_createShader_9c5cd42709d915ff: V7,
      __wbg_createTexture_3eed23cb87dd35fc: L7,
      __wbg_cullFace_94f24b4fd5e9038b: H7,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: K7,
      __wbg_getExtension_11824edd67a143d8: g8,
      __wbg_getParameter_7f7f23cae98f2c81: l8,
      __wbg_getProgramInfoLog_cd84be80942f345b: x8,
      __wbg_getProgramParameter_039391d5ba319f50: $8,
      __wbg_getShaderInfoLog_495bddda98172699: A8,
      __wbg_getShaderParameter_4eb65cfb174ceb22: D8,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: F8,
      __wbg_getUniformLocation_ab63f569a4e41744: R8,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: J7,
      __wbg_deleteProgram_eff668280dcb01ca: Y7,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: _6,
      __wbg_deleteShader_3339454254c7147c: r6,
      __wbg_deleteTexture_c1c58550dc55af5c: c6,
      __wbg_depthFunc_31b183b5b8ee478e: i6,
      __wbg_depthMask_cab7f2ae7f0e559c: d6,
      __wbg_depthRange_797a71ba3b79267a: g6,
      __wbg_disable_cb1b3e6c1cee5202: $6,
      __wbg_disableVertexAttribArray_b395358ec5084c39: y6,
      __wbg_drawArrays_42dbb4b0349c8f34: T6,
      __wbg_enable_d1f42f78be33a553: L6,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: R6,
      __wbg_flush_7ae42f071230db6b: J6,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: Z6,
      __wbg_framebufferTexture2D_367ab597a005e8d9: e8,
      __wbg_frontFace_9bdcf2a758e989e5: n8,
      __wbg_linkProgram_e23a348b0f6e0c4f: l5,
      __wbg_pixelStorei_a78a504be58d1d0a: h9,
      __wbg_polygonOffset_a4f07d97b9b0dced: x9,
      __wbg_renderbufferStorage_3049e13db5c4e60e: E9,
      __wbg_scissor_6c024669fbf4fe72: K9,
      __wbg_vertexAttribPointer_4e5d289c5d224210: Nv,
      __wbg_viewport_a0ca330f9b85397e: Jv,
      __wbg_shaderSource_66dce75b25a1a407: d$,
      __wbg_stencilFuncSeparate_ec603976be9569a4: S$,
      __wbg_stencilMask_485dcb5965c79a71: D$,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: I$,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: F$,
      __wbg_texParameteri_c6efffcecb474d2f: L$,
      __wbg_uniform1f_3acd3f3eb50b5e11: av,
      __wbg_uniform1i_e4f13604354c28ae: bv,
      __wbg_uniform4f_a5008773cfb47d1a: xv,
      __wbg_useProgram_ab2ee2a13a1fd909: zv,
      __wbg_bufferSubData_2270f1b9db71e642: Em,
      __wbg_clearBufferfv_6b77b9402254a2bf: qm,
      __wbg_clearBufferiv_0f056544010eef3e: Hm,
      __wbg_beginQuery_dad334d972fed3cc: cm,
      __wbg_bindBufferRange_16a9d90becc2a7d7: fm,
      __wbg_bindSampler_3c7002cb6d56ae8f: mm,
      __wbg_bindVertexArray_c391bd47303d75cd: $m,
      __wbg_blitFramebuffer_ea96ada8bba07582: Mm,
      __wbg_bufferData_64e9905f2b3d3a6f: Vm,
      __wbg_bufferData_99bbbc63f02251c4: Lm,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: t5,
      __wbg_performance_4c23a97261596fec: l9,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: z9,
      __wbg_fetch_2d913f7108d17a24: H6,
      __wbg_fetch_d8c50740ea23b248: j6,
      __wbg_navigator_935098efd1dc7fe5: Y5,
      __wbg_devicePixelRatio_8e5ca44720abafec: m6,
      __wbg_document_2634180a4c694068: v6,
      __wbg_instanceof_Window_0d356b88a2f77c42: r5,
      __wbg_hidden_cb32701ca3785fea: q8,
      __wbg_getElementById_c7aba6b93b34bf01: d8,
      __wbg_querySelector_1f3658f4b48e268b: T9,
      __wbg_querySelectorAll_ffda3c891a9eb29a: D9,
      __wbg_hasAttribute_73e1230c9c107e79: W8,
      __wbg_setAttribute_8bccfbabf2a83682: J9,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: o8,
      __wbg_focus_c80921c19b28520b: X6,
      __wbg_uniform2iv_c5e863975dd780d8: uv,
      __wbg_uniform3fv_7723e142be50856f: pv,
      __wbg_uniform3iv_bea3976522e15d48: lv,
      __wbg_uniform4fv_85ad5d23234895d2: $v,
      __wbg_clear_ff8cfdf420f7dde6: Ym,
      __wbg_clearDepth_ac6b54f112feeaf7: Nm,
      __wbg_clearStencil_56d6a6308294a749: Jm,
      __wbg_colorMask_b0ab9d429a1efa0a: _7,
      __wbg_compileShader_fcf3f3d2891f73f9: n7,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: g7,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: h7,
      __wbg_createFramebuffer_ab73f30b5dc97415: S7,
      __wbg_createProgram_f11c63f59f41b82a: D7,
      __wbg_createRenderbuffer_556000dbb01f5026: B7,
      __wbg_createShader_27d9388313f3b14e: C7,
      __wbg_createTexture_8455c703424c567b: E7,
      __wbg_cullFace_774780fb4177aab8: q7,
      __wbg_deleteBuffer_d758283bea6e0ccf: N7,
      __wbg_deleteFramebuffer_8953b325144192fe: Q7,
      __wbg_deleteProgram_0135c6926e75af75: X7,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: e6,
      __wbg_deleteShader_79dbaaed69b7ca3b: n6,
      __wbg_deleteTexture_3acb672a45f9998a: o6,
      __wbg_depthFunc_eaca1bc79f7bf216: f6,
      __wbg_depthMask_3a9074b08d1f68e5: u6,
      __wbg_depthRange_c24a808b3496e0a9: p6,
      __wbg_uniform4iv_a9aaa92f2f458ec2: Av,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: Fv,
      __wbg_uniformMatrix3fv_da8c388748c5739b: Mv,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: Lv,
      __wbg_activeTexture_1d5359b20df41710: em,
      __wbg_attachShader_683d1070365e7066: om,
      __wbg_bindAttribLocation_d56d3c40331af7ed: im,
      __wbg_bindBuffer_e95efaf0d4851845: dm,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: gm,
      __wbg_bindRenderbuffer_d608b211c51ed147: lm,
      __wbg_bindTexture_ffc56f1e5c5526c6: ym,
      __wbg_blendColor_a0ba1cdcecc3a34c: Sm,
      __wbg_blendEquation_8bfa69f639ae92da: Tm,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: Im,
      __wbg_blendFunc_713c504adab14f98: Pm,
      __wbg_blendFuncSeparate_3eef699c291dbc87: Fm,
      __wbg_disable_4dca6ee0ccc91e4a: x6,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: h6,
      __wbg_drawArrays_10e1254aa4524ae9: D6,
      __wbg_enable_c6e523307311617a: V6,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: C6,
      __wbg_flush_eb3fb8da2ec00d57: Q6,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: Y6,
      __wbg_linkProgram_6a2eee02a03b9b00: w5,
      __wbg_pixelStorei_55ad4c67b699537c: m9,
      __wbg_polygonOffset_06dc6468c12a57e1: y9,
      __wbg_renderbufferStorage_2918fb696fd45663: L9,
      __wbg_scissor_f9696c630e464977: N9,
      __wbg_shaderSource_628c37a476ae65f9: u$,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: v$,
      __wbg_stencilMask_f9fe198f7fd6fc9c: T$,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: A$,
      __wbg_stencilOpSeparate_6cf50803475d2640: B$,
      __wbg_texParameteri_fe6210a493d48a16: E$,
      __wbg_framebufferTexture2D_3a558e14f56720d2: _8,
      __wbg_frontFace_c9bb1fa659ffd276: a8,
      __wbg_getParameter_91a344e1a84a4669: m8,
      __wbg_getProgramInfoLog_35410850de9ccefe: y8,
      __wbg_getProgramParameter_bbc667347ac2e882: v8,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: I8,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: T8,
      __wbg_getUniformLocation_340155dc706d3fea: M8,
      __wbg_uniform1f_d34e4b454f7c8e73: ov,
      __wbg_uniform1i_cd9a7f990128ea48: cv,
      __wbg_uniform4f_4410d2faaa7e5dda: yv,
      __wbg_useProgram_0e1cd86765304939: Wv,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: Kv,
      __wbg_viewport_b5bd46a0d111c83c: Qv,
      __wbg_texSubImage2D_1b2ff28f994c325e: W$,
      __wbg_uniform2fv_39277cf2d3cb83c7: fv,
      __wbg_bufferData_5df9bdb32e189eee: Cm,
      __wbg_bufferData_26132561617ce8fb: Rm,
      __wbg_bufferSubData_44db8a3b4a70b57d: Om,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: a7,
      __wbg_readPixels_05377f8b6fa1d8eb: M9,
      __wbg_texImage2D_7bc3001cb8602ed2: R$,
      __wbg_navigator_017bc45e84c473cc: X5,
      __wbg_log_d282446d03691e72: m5,
      __wbg_info_a392cd5b7536cfb5: K8,
      __wbg_warn_88c4a5bd9a322000: Xv,
      __wbg_debug_7271beced8b71cd4: j7,
      __wbg_error_933f449d72fef598: z6,
      __wbg_error_50f60c611a3dcf64: W6,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: xm,
      __wbg_width_08e66520b99071f4: Yv,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: G7,
      __wbg_height_e9afb506f31052a9: U8,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: b6,
      __wbg_queryCounterEXT_ebb00bcc96221671: I9,
      __wbg_aborted_4d4114700dc4c251: Z4,
      __wbg_addEventListener_ea90bc131475777e: tm,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: r8,
      __wbg_set_width_f9e631f4ee129e5c: c$,
      __wbg_set_height_ef298446b359b0c5: Sy,
      __wbg_getContext_70c2d1bed75d4122: i8,
      __wbg_getContext_422b32d0ee4b8076: b8,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: A6,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: P6,
      __wbg_arrayBuffer_ff96d08b7b6be32e: nm,
      __wbg_get_37b48b8fa52d1f2c: V8,
      __wbg_status_0053aa6239760447: $$,
      __wbg_ok_c962da6f1a034d81: p9,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: qv,
      __wbg_statusText_0f412961834ccfe9: x$,
      __wbg_instanceof_Response_79948c98d1d2ba75: e5,
      __wbg_set_signal_4a69430cb12800f3: $x,
      __wbg_new_1e52e3c919312525: Z5,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: F6,
      __wbg_observe_592b94857eed8e27: f9,
      __wbg_altKey_7412dd64f8c921c7: rm,
      __wbg_ctrlKey_00097886a21597a7: U7,
      __wbg_shiftKey_273ee8c901267b55: g$,
      __wbg_metaKey_1c2847b62ad062c1: N5,
      __wbg_repeat_46a5c90df9f6ef0b: O9,
      __wbg_isComposing_e3709163a95a2477: o5,
      __wbg_key_d6b3d2cce3d41872: i5,
      __wbg_code_87bb99fdec02d313: e7,
      __wbg_now_0f628e0e435c541b: i9,
      __wbg_offsetX_0214819d43aaf6d5: d9,
      __wbg_offsetY_f18f571e33b385ab: g9,
      __wbg_button_bb3285fcdf965178: Gm,
      __wbg_signal_4d9d567be73ea52c: p$,
      __wbg_new_51233fa2a760b272: r9,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: B8,
      __wbg_abort_6e6ea7d259504afc: Y4,
      __wbg_preventDefault_c047d3e292b08cc4: $9,
      __wbg_contentRect_0fb8c8900d689a0c: f7,
      __wbg_width_a86bcd32bd998060: Zv,
      __wbg_height_cd732bbdc7b66e49: z8,
      __wbg_set_width_031bdecd763c5855: a$,
      __wbg_set_height_ad5056ea051acd78: $y,
      __wbg_getContext_486aab500e1c34c9: s8,
      __wbg_getContext_9fd4db9b1cf155db: f8,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: X8,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: Z8,
      __wbg_resolve_d82363d90af6928a: q9,
      __wbg_then_591b6b3a75ee817a: nv,
      __wbg_iterator_cc47ba25a2be735a: s5,
      __wbg_get_9a29be2cb383ed9a: L8,
      __wbg_next_402fa10b59ab20c3: s9,
      __wbg_new_2e117a478906f062: _9,
      __wbg_new_36e147a8ced3c6e0: t9,
      __wbg_of_62183ea089c00bfa: u9,
      __wbg_isArray_145a34fd0a38d37b: a5,
      __wbg_new_e66a4b7758dd2e5c: a9,
      __wbg_isSafeInteger_a3389a198582f5f6: c5,
      __wbg_is_de5b366c746e004c: b5,
      __wbg_entries_c261c3fa1f281256: G6,
      __wbg_then_2a84678a50976959: rv,
      __wbg_length_589238bdcf171f0e: u5,
      __wbg_prototypesetcall_d721637c7ca66eb8: S9,
      __wbg_set_272b80acaf9a75e8: nh,
      __wbg_new_81880fb5002cb255: n9,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: c9,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: l$,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: h$,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: m$,
      __wbg_static_accessor_WINDOW_168f178805d978fe: y$,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: N8,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: _5,
      __wbg_queueMicrotask_1c9b3800e321a967: F9,
      __wbg_queueMicrotask_311744e534a929a3: B9,
      __wbg_set_4564f7dc44fcb0c9: ah,
      __wbg___wbindgen_number_get_1cc01dd708740256: N4,
      __wbg___wbindgen_in_4990f46af709e33c: O4,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: Q4,
      __wbg___wbindgen_is_null_6d937fbfb6478470: z4,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: j4,
      __wbg_Number_c4bdf66bb78f7977: k4,
      __wbg_Error_fdd633d4bb5dd76a: P4,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: G4,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: U4,
      __wbg___wbindgen_is_string_1fca8072260dd261: q4,
      __wbg___wbindgen_string_get_71bb4348194e31f0: J4,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: L4,
      __wbg___wbindgen_is_function_acc5528be2b923f2: W4,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: H4,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: K4,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: V4,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: X4,
      __wbg___wbindgen_debug_string_8a447059637473e2: E4,
      __wbindgen_init_externref_table: xS,
      __wbindgen_cast_0000000000000001: tS,
      __wbindgen_cast_0000000000000002: rS,
      __wbindgen_cast_0000000000000003: nS,
      __wbindgen_cast_0000000000000004: aS,
      __wbindgen_cast_0000000000000005: oS,
      __wbindgen_cast_0000000000000006: cS,
      __wbindgen_cast_0000000000000007: bS,
      __wbindgen_cast_0000000000000008: sS,
      __wbindgen_cast_0000000000000009: iS,
      __wbindgen_cast_000000000000000a: fS,
      __wbindgen_cast_000000000000000b: uS,
      __wbindgen_cast_000000000000000c: dS,
      __wbindgen_cast_000000000000000d: gS,
      __wbindgen_cast_000000000000000e: pS,
      __wbindgen_cast_000000000000000f: wS,
      __wbindgen_cast_0000000000000010: lS,
      __wbindgen_cast_0000000000000011: mS,
      __wbindgen_cast_0000000000000012: hS,
      __wbindgen_cast_0000000000000013: yS
    }
  }, A4), { memory: oA, clear: cA, on_frame: bA, show: sA, start: iA, stop_frames: fA, mount: uA, __wbg_proteusapp_free: dA, proteusapp_addChild: gA, proteusapp_animateTo: pA, proteusapp_bakeTexture: wA, proteusapp_bakedImageSize: lA, proteusapp_bakedTextSize: mA, proteusapp_bindKey: hA, proteusapp_channelDestroy: yA, proteusapp_channelSet: xA, proteusapp_clearFocus: $A, proteusapp_component: vA, proteusapp_copyBakedImageFrom: SA, proteusapp_createVideo: AA, proteusapp_cropImage: IA, proteusapp_declareGeometry: DA, proteusapp_declaredGeometry: TA, proteusapp_destroy: FA, proteusapp_devices: BA, proteusapp_focus: PA, proteusapp_focused: kA, proteusapp_freeResources: MA, proteusapp_get: RA, proteusapp_hideVideo: CA, proteusapp_inputDevices: VA, proteusapp_inputMode: LA, proteusapp_isFocused: EA, proteusapp_loadTexture: OA, proteusapp_mergeFrom: GA, proteusapp_mergeFromWithBehavior: WA, proteusapp_new: zA, proteusapp_onAppKey: UA, proteusapp_onBlur: qA, proteusapp_onClick: HA, proteusapp_onDrag: jA, proteusapp_onDropped: KA, proteusapp_onFocus: NA, proteusapp_onFocusLost: JA, proteusapp_onHoverEnter: QA, proteusapp_onHoverExit: XA, proteusapp_onKey: YA, proteusapp_onPress: ZA, proteusapp_onRelease: eI, proteusapp_onTransitionComplete: _I, proteusapp_pointerLeft: tI, proteusapp_pointerMoved: rI, proteusapp_pointerPressed: nI, proteusapp_pointerReleased: aI, proteusapp_releaseVideo: oI, proteusapp_removeChild: cI, proteusapp_resetKeyMap: bI, proteusapp_setDeclaredGeometry: sI, proteusapp_setDefaultFocus: iI, proteusapp_setDevices: fI, proteusapp_setDisabled: uI, proteusapp_setImage: dI, proteusapp_setInputDevices: gI, proteusapp_setInteractive: pI, proteusapp_setKeyRepeat: wI, proteusapp_setLongPressMs: lI, proteusapp_setNavigatingActions: mI, proteusapp_setOpacity: hI, proteusapp_setText: yI, proteusapp_setTexture: xI, proteusapp_setTransitionInteraction: $I, proteusapp_setVideoCrossfade: vI, proteusapp_setVisible: SI, proteusapp_showVideo: AI, proteusapp_splitTo: II, proteusapp_splitToWithBehavior: DI, proteusapp_splitToWithStates: TI, proteusapp_texture: FI, proteusapp_textureState: BI, proteusapp_tick: PI, proteusapp_transitionChannel: kI, proteusapp_unbindKey: MI, proteusapp_uploadVideoFrame: RI, __wbg_handle_free: CI, __wbg_texturehandle_free: VI, __wbg_transitionchannel_free: LI, __wbg_videohandle_free: EI, handle_fromId: OI, handle_id: GI, texturehandle_fromId: WI, texturehandle_id: zI, __abort_handler: UI, __instance_terminated: qI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: HI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: jI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: KI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: NI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: JI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: QI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: XI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: YI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: ZI, __wbindgen_malloc: eD, __wbindgen_realloc: _D, __wbindgen_exn_store: tD, __externref_table_alloc: rD, __wbindgen_externrefs: nD, __wbindgen_free: aD, __wbindgen_destroy_closure: oD, __externref_table_dealloc: cD, __wbindgen_start: jt } = aA, bD = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: UI,
    __externref_table_alloc: rD,
    __externref_table_dealloc: cD,
    __instance_terminated: qI,
    __wbg_handle_free: CI,
    __wbg_proteusapp_free: dA,
    __wbg_texturehandle_free: VI,
    __wbg_transitionchannel_free: LI,
    __wbg_videohandle_free: EI,
    __wbindgen_destroy_closure: oD,
    __wbindgen_exn_store: tD,
    __wbindgen_externrefs: nD,
    __wbindgen_free: aD,
    __wbindgen_malloc: eD,
    __wbindgen_realloc: _D,
    __wbindgen_start: jt,
    clear: cA,
    handle_fromId: OI,
    handle_id: GI,
    memory: oA,
    mount: uA,
    on_frame: bA,
    proteusapp_addChild: gA,
    proteusapp_animateTo: pA,
    proteusapp_bakeTexture: wA,
    proteusapp_bakedImageSize: lA,
    proteusapp_bakedTextSize: mA,
    proteusapp_bindKey: hA,
    proteusapp_channelDestroy: yA,
    proteusapp_channelSet: xA,
    proteusapp_clearFocus: $A,
    proteusapp_component: vA,
    proteusapp_copyBakedImageFrom: SA,
    proteusapp_createVideo: AA,
    proteusapp_cropImage: IA,
    proteusapp_declareGeometry: DA,
    proteusapp_declaredGeometry: TA,
    proteusapp_destroy: FA,
    proteusapp_devices: BA,
    proteusapp_focus: PA,
    proteusapp_focused: kA,
    proteusapp_freeResources: MA,
    proteusapp_get: RA,
    proteusapp_hideVideo: CA,
    proteusapp_inputDevices: VA,
    proteusapp_inputMode: LA,
    proteusapp_isFocused: EA,
    proteusapp_loadTexture: OA,
    proteusapp_mergeFrom: GA,
    proteusapp_mergeFromWithBehavior: WA,
    proteusapp_new: zA,
    proteusapp_onAppKey: UA,
    proteusapp_onBlur: qA,
    proteusapp_onClick: HA,
    proteusapp_onDrag: jA,
    proteusapp_onDropped: KA,
    proteusapp_onFocus: NA,
    proteusapp_onFocusLost: JA,
    proteusapp_onHoverEnter: QA,
    proteusapp_onHoverExit: XA,
    proteusapp_onKey: YA,
    proteusapp_onPress: ZA,
    proteusapp_onRelease: eI,
    proteusapp_onTransitionComplete: _I,
    proteusapp_pointerLeft: tI,
    proteusapp_pointerMoved: rI,
    proteusapp_pointerPressed: nI,
    proteusapp_pointerReleased: aI,
    proteusapp_releaseVideo: oI,
    proteusapp_removeChild: cI,
    proteusapp_resetKeyMap: bI,
    proteusapp_setDeclaredGeometry: sI,
    proteusapp_setDefaultFocus: iI,
    proteusapp_setDevices: fI,
    proteusapp_setDisabled: uI,
    proteusapp_setImage: dI,
    proteusapp_setInputDevices: gI,
    proteusapp_setInteractive: pI,
    proteusapp_setKeyRepeat: wI,
    proteusapp_setLongPressMs: lI,
    proteusapp_setNavigatingActions: mI,
    proteusapp_setOpacity: hI,
    proteusapp_setText: yI,
    proteusapp_setTexture: xI,
    proteusapp_setTransitionInteraction: $I,
    proteusapp_setVideoCrossfade: vI,
    proteusapp_setVisible: SI,
    proteusapp_showVideo: AI,
    proteusapp_splitTo: II,
    proteusapp_splitToWithBehavior: DI,
    proteusapp_splitToWithStates: TI,
    proteusapp_texture: FI,
    proteusapp_textureState: BI,
    proteusapp_tick: PI,
    proteusapp_transitionChannel: kI,
    proteusapp_unbindKey: MI,
    proteusapp_uploadVideoFrame: RI,
    show: sA,
    start: iA,
    stop_frames: fA,
    texturehandle_fromId: WI,
    texturehandle_id: zI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: ZI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: HI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: JI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: QI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: XI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: YI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: KI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: NI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: jI
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  nA(bD);
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
  const _Fe = class _Fe {
    constructor() {
      this.state = 0x9e3779b97f4a7c15n;
    }
    next() {
      let e = this.state;
      return e ^= e << 13n & _Fe.MASK, e ^= e >> 7n, e ^= e << 17n & _Fe.MASK, this.state = e, Number(e >> 40n) / 2 ** 24;
    }
    between(e, t) {
      return e + (t - e) * this.next();
    }
  };
  _Fe.MASK = (1n << 64n) - 1n;
  let Fe = _Fe;
  function rt(_, e) {
    const { min: t, max: r } = j[_], n = new Fe();
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
  const sD = `#version 300 es
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
}`, iD = `#version 300 es
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
}`, fD = `#version 300 es
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
    if (_.attachShader(r, t(_.VERTEX_SHADER, e)), _.attachShader(r, t(_.FRAGMENT_SHADER, sD)), _.linkProgram(r), !_.getProgramParameter(r, _.LINK_STATUS)) throw new Error(_.getProgramInfoLog(r) ?? "program failed to link");
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
  function uD(_) {
    return (e, t, r) => {
      const n = Kt(_, iD), a = Nt(_), o = _.createVertexArray();
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
  function dD(_) {
    return (e, t, r) => {
      const n = Kt(_, fD), a = Nt(_), o = _.createVertexArray();
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
  function gD(_) {
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
  function pD(_) {
    return _ < 0.5 ? 2 * _ * _ : 1 - (-2 * _ + 2) ** 2 / 2;
  }
  const wD = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
  class nt {
    constructor(e) {
      this.random = new Fe(), this.movedAt = -1 / 0, this.current = new Float32Array(e.flatMap((t) => [
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
      const t = pD(Math.min(1, (e - this.movedAt) / C_));
      for (let r = 0; r < this.current.length; r++) this.current[r] = this.from[r] + (this.to[r] - this.from[r]) * t;
    }
  }
  function lD(_, e, t) {
    const r = new nt(e), n = document.createDocumentFragment(), a = e.map((o, c) => {
      const b = document.createElement("div"), f = b.style;
      return f.position = "absolute", f.left = "0", f.top = "0", f.width = `${o.width}px`, f.height = `${o.height}px`, f.borderRadius = `${t}px`, f.background = `rgb(${Math.round(o.r * 255)} ${Math.round(o.g * 255)} ${Math.round(o.b * 255)})`, f.transform = It(r.current[c * 2], r.current[c * 2 + 1], o), f.transition = `transform ${C_}ms ${wD}`, n.append(b), b;
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
  const mD = [
    100,
    1e3,
    5e3,
    1e4,
    25e3,
    5e4,
    1e5
  ], hD = 60, yD = 2e3, V_ = 1e5, Dt = 100, at = `proteus-bench:${location.pathname}`, xD = 300, $D = 15e3, o_ = document.getElementById("status"), Qt = document.getElementById("results"), he = document.getElementById("run"), b_ = document.getElementById("reset"), ye = {
    proteus: document.getElementById("proteus"),
    proteusRust: document.getElementById("proteus-rust"),
    webgl: document.getElementById("webgl"),
    canvas2d: document.getElementById("canvas2d"),
    css: document.getElementById("css")
  }, Xt = new URLSearchParams(location.search), De = ((_a2 = Xt.get("counts")) == null ? void 0 : _a2.split(",").map(Number).filter((_) => _ > 0)) ?? mD, ot = (((_b2 = Xt.get("scenes")) == null ? void 0 : _b2.split(",")) ?? [
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
  function vD(_) {
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
        if (r += 1, r === 1 && (o = f), !c && (r >= hD || f - o > yD)) {
          c = true, a = f, n = f;
          return;
        }
        c && t.push(f - n), n = f, c && (t.length >= xD || f - a > $D) && (b(), e(vD(t)));
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
  const Zt = Math.max(4096, 2 ** Math.ceil(Math.log2(Math.max(...De))));
  let er, L_;
  await x4("proteus", {
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
  await F4("proteus-rust", Zt);
  async function SD(_, e) {
    T4(_, e);
    const t = await ke((r) => (D4(r), () => B4()));
    return I4(), t;
  }
  async function AD(_, e) {
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
  const Be = window.devicePixelRatio;
  for (const _ of [
    ye.webgl,
    ye.canvas2d
  ]) _.width = te * Be, _.height = re * Be;
  const pe = ye.webgl.getContext("webgl2", {
    antialias: false
  }), _r = ye.canvas2d.getContext("2d");
  _r.scale(Be, Be);
  async function bt(_, e, t) {
    const r = rt(e, t), n = new nt(r), a = _(r, n.current, j[e].radius), o = await ke(ct((c) => {
      e === "moving" && (n.retarget(c), n.advance(c)), a.draw();
    }));
    return a.dispose(), o;
  }
  async function ID(_) {
    const e = lD(ye.css, rt("moving", _), j.moving.radius), t = await ke(ct((r) => e.frame(r)));
    return e.dispose(), t;
  }
  function Tt(_) {
    for (const [e, t] of Object.entries(ye)) t.style.visibility = e === _ ? "visible" : "hidden";
  }
  const x_ = {
    title: "Proteus (TypeScript)",
    surface: "proteus",
    time: AD
  }, $_ = {
    title: "Proteus (Rust)",
    surface: "proteusRust",
    time: SD
  }, DD = {
    title: "CSS",
    surface: "css",
    time: (_, e) => ID(e)
  }, v_ = {
    title: "Canvas 2D",
    surface: "canvas2d",
    time: (_, e) => bt(gD(_r), _, e)
  }, S_ = {
    title: "Naive WebGL2",
    surface: "webgl",
    time: (_, e) => bt(uD(pe), _, e)
  }, A_ = {
    title: "Batched WebGL2",
    surface: "webgl",
    time: (_, e) => bt(dD(pe), _, e)
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
      DD,
      v_,
      S_,
      A_
    ]
  }, E_ = {
    small: 1 / 0,
    large: V_,
    moving: 1 / 0
  }, TD = {
    small: `Small components (${j.small.min}\u2013${j.small.max} px), still: the cost per component`,
    large: `Large components (${j.large.min}\u2013${j.large.max} px), still: filling pixels dominates`,
    moving: `Moving components (${j.moving.min}\u2013${j.moving.max} px): every one always moving`
  };
  function FD(_) {
    const e = pe.getExtension("WEBGL_debug_renderer_info"), t = e ? pe.getParameter(e.UNMASKED_RENDERER_WEBGL) : pe.getParameter(pe.RENDERER);
    return [
      `- Browser: ${navigator.userAgent}`,
      `- GPU: ${t}`,
      `- Proteus's adapter: ${Yt}`,
      `- Device pixel ratio: ${Be}; canvas ${te} \xD7 ${re} CSS pixels`,
      `- Refresh rate: about ${(1e3 / _).toFixed(0)} Hz (a frame every ${_.toFixed(2)} ms)`
    ].join(`
`);
  }
  function BD() {
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
  const V = BD();
  if (V.running) {
    const [_, e, t] = V.running.split("|");
    V.cells[V.running] = "crashed | \u2014", V.dropped[`${_}|${t}`] = `crashed at ${e}`, V.running = void 0, c_();
  }
  const PD = (_) => `${_.median.toFixed(2)} | ${_.p99.toFixed(2)}`;
  function rr(_) {
    return De.filter((e) => e <= E_[_]).flatMap((e) => tr[_].map((t) => [
      e,
      t
    ])).filter(([e, t]) => V.cells[`${_}|${e}|${t.title}`] === void 0);
  }
  async function kD() {
    he.disabled = true, b_.disabled = true, V.refresh === void 0 && (Tt("webgl"), o_.textContent = "Measuring the refresh rate\u2026", V.refresh = (await ke(ct(() => {
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
        V.cells[r] = PD(a), a.median >= Dt && (V.dropped[`${_}|${t.title}`] = `slower than ${Dt} ms a frame at ${e}`);
      } catch (a) {
        console.error(a), V.cells[r] = "failed | \u2014", V.dropped[`${_}|${t.title}`] = `failed at ${e}: ${String(a)}`;
      }
      V.running = void 0, c_(), Qt.textContent = nr();
    }
    o_.textContent = "Done. Copy the results below.", he.textContent = "Run", he.disabled = false, b_.disabled = false;
  }
  function nr() {
    const _ = [
      FD(V.refresh ?? 0)
    ];
    for (const e of ot) {
      const t = tr[e].map((a) => a.title), r = De.filter((a) => a <= E_[e]).map((a) => t.map((o) => V.cells[`${e}|${a}|${o}`])).map((a, o) => ({
        count: De.filter((c) => c <= E_[e])[o],
        cells: a
      })).filter(({ cells: a }) => a.some((o) => o !== void 0));
      if (r.length === 0) continue;
      _.push("", `### ${TD[e]}`, "", "Frame interval, median and p99, in milliseconds:", "", `| Components | ${t.map((a) => `${a} | p99`).join(" | ")} |`, `|---:|${t.map(() => "---:|---:").join("|")}|`, ...r.map(({ count: a, cells: o }) => `| ${a} | ${o.map((c) => c ?? "\u2026 | \u2026").join(" | ")} |`));
      const n = t.map((a) => [
        a,
        V.dropped[`${e}|${a}`]
      ]).filter(([, a]) => a).map(([a, o]) => `- ${a}: ${o}; skipped after that.`);
      n.length > 0 && _.push("", ...n), e === "large" && De.some((a) => a > V_) && _.push("", `The large scene stops at ${V_}: past it, Safari's tab crashes.`);
    }
    return _.join(`
`);
  }
  he.addEventListener("click", () => void kD());
  b_.addEventListener("click", () => {
    try {
      localStorage.removeItem(at);
    } catch {
    }
    location.reload();
  });
  const Me = Object.keys(V.cells).length > 0, st = ot.some((_) => rr(_).length > 0);
  Me && (Qt.textContent = nr());
  he.textContent = Me && st ? "Resume" : "Run";
  o_.textContent = Me ? st ? "A run was under way, and is saved: Resume carries on from where it stopped." : "The last run is complete; its results are below. Start over to run again." : "Ready. Keep this tab in front while it runs: a hidden tab stops drawing.";
  he.disabled = Me && !st;
  b_.disabled = !Me;
})();
