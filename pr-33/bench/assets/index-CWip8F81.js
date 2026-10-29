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
  const ar = "" + new URL("proteus_sdk_web_bg-IqrpjY51.wasm", import.meta.url).href, O_ = async (_ = {}, e) => {
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
      const t = u.proteusapp_transitionChannel(this.__wbg_ptr, !q(e), q(e) ? 0 : e);
      return fe.__wrap(t);
    }
    unbindKey(e) {
      const t = u.proteusapp_unbindKey(this.__wbg_ptr, e);
      if (t[3]) throw F(t[2]);
      let r;
      return t[0] !== 0 && (r = H(t[0], t[1]).slice(), u.__wbindgen_free(t[0], t[1] * 1, 1)), r;
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
    return Error(H(_, e));
  }
  function cr(_) {
    return Number(_);
  }
  function br(_, e) {
    const t = String(e), r = Pe(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = O;
    U().setInt32(_ + 4, n, true), U().setInt32(_ + 0, r, true);
  }
  function sr(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    U().setBigInt64(_ + 8, q(r) ? BigInt(0) : r, true), U().setInt32(_ + 0, !q(r), true);
  }
  function ir(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return q(t) ? 16777215 : t ? 1 : 0;
  }
  function fr(_, e) {
    const t = F_(e), r = Pe(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = O;
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
    U().setFloat64(_ + 8, q(r) ? 0 : r, true), U().setInt32(_ + 0, !q(r), true);
  }
  function $r(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = q(r) ? 0 : Pe(r, u.__wbindgen_malloc, u.__wbindgen_realloc), a = O;
    U().setInt32(_ + 4, a, true), U().setInt32(_ + 0, n, true);
  }
  function vr(_, e) {
    throw new Error(H(_, e));
  }
  function Sr(_) {
    _._wbg_cb_unref();
  }
  function Ar() {
    return z(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Ir() {
    return z(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function Dr() {
    return z(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Tr() {
    return z(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function Fr() {
    return z(function(_, e, t, r) {
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
    return z(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function Mr() {
    return z(function(_, e) {
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
    return z(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function zr(_, e) {
    return _[e >>> 0];
  }
  function Ur() {
    return z(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function qr(_, e) {
    return _[e >>> 0];
  }
  function jr(_, e) {
    return _[e];
  }
  function Hr(_) {
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
    return z(function(_) {
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
    return z(function(_, e, t, r, n, a, o) {
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
  function jn(_, e) {
    _.dimension = ao[e];
  }
  function Hn(_, e) {
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
    return q(_) ? 0 : Be(_);
  }
  function Ea() {
    const _ = typeof global > "u" ? null : global;
    return q(_) ? 0 : Be(_);
  }
  function Oa() {
    const _ = typeof self > "u" ? null : self;
    return q(_) ? 0 : Be(_);
  }
  function Ga() {
    const _ = typeof window > "u" ? null : window;
    return q(_) ? 0 : Be(_);
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
  function ja(_) {
    _.unmap();
  }
  function Ha(_) {
    return _.value;
  }
  function Ka() {
    return z(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, z_(r, n), a, o);
    }, arguments);
  }
  function Na() {
    return z(function(_, e, t, r, n, a) {
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
  function Be(_) {
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
  function U() {
    return (be === null || be.buffer.detached === true || be.buffer.detached === void 0 && be.buffer !== u.memory.buffer) && (be = new DataView(u.memory.buffer)), be;
  }
  let Re = null;
  function co() {
    return (Re === null || Re.byteLength === 0) && (Re = new Float64Array(u.memory.buffer)), Re;
  }
  function H(_, e) {
    return io(_ >>> 0, e);
  }
  let Ce = null;
  function bo() {
    return (Ce === null || Ce.byteLength === 0) && (Ce = new Uint32Array(u.memory.buffer)), Ce;
  }
  let Ve = null;
  function we() {
    return (Ve === null || Ve.byteLength === 0) && (Ve = new Uint8Array(u.memory.buffer)), Ve;
  }
  function z(_, e) {
    try {
      return _.apply(this, e);
    } catch (t) {
      const r = Be(t);
      u.__wbindgen_exn_store(r);
    }
  }
  function q(_) {
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
  function Pe(_, e, t) {
    if (t === void 0) {
      const c = ve.encode(_), b = e(c.length, 1) >>> 0;
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
      const c = we().subarray(n + o, n + r), b = ve.encodeInto(_, c);
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
  const so = 2146435072;
  let d_ = 0;
  function io(_, e) {
    return d_ += e, d_ >= so && (r_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), r_.decode(), d_ = e), r_.decode(we().subarray(_, _ + e));
  }
  const ve = new TextEncoder();
  "encodeInto" in ve || (ve.encodeInto = function(_, e) {
    const t = ve.encode(_);
    return e.set(t), {
      read: _.length,
      written: t.length
    };
  });
  let O = 0, u;
  function fo(_) {
    u = _;
  }
  URL = globalThis.URL;
  const uo = await O_({
    "./proteus_sdk_web_bg.js": {
      __wbg_next_0c4066e251d2eff9: cn,
      __wbg_done_b62d4a7d2286852a: Cr,
      __wbg_value_49f783bb59765962: Ha,
      __wbg_length_c6054974c0a6cdb9: en,
      __wbg_instanceof_Map_afa18d5840c04c15: Kr,
      __wbg_get_197a3fe98f169e38: zr,
      __wbg_get_unchecked_54a4374c38e08460: qr,
      __wbg_call_5575218572ead796: Dr,
      __wbg_push_f724b5db8acf89d2: un,
      __wbg_call_0e855b388e315e17: Ir,
      __wbg_call_8e98ed2f3c86c4b5: Tr,
      __wbg_set_dc601f4a69da0bc2: En,
      __wbg_get_with_ref_key_6412cf3094599694: jr,
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
      __wbg_set_dimension_36e13ccecae5af4b: Hn,
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
      __wbg_unmap_8f06698a75b8331a: ja,
      __wbg_destroy_b5b39f25f0799295: Rr,
      __wbg_mapAsync_bb0029907dd91181: _n,
      __wbg_set_dimension_174ad7e2fb67fb4e: jn,
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
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: Hr,
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
  }, ar), { memory: go, __wbg_proteusapp_free: po, proteusapp_addChild: wo, proteusapp_animateTo: lo, proteusapp_bakeTexture: mo, proteusapp_bakedImageSize: ho, proteusapp_bakedTextSize: yo, proteusapp_bindKey: xo, proteusapp_channelDestroy: $o, proteusapp_channelSet: vo, proteusapp_clearFocus: So, proteusapp_component: Ao, proteusapp_copyBakedImageFrom: Io, proteusapp_createVideo: Do, proteusapp_cropImage: To, proteusapp_declareGeometry: Fo, proteusapp_declaredGeometry: Bo, proteusapp_destroy: Po, proteusapp_devices: ko, proteusapp_focus: Mo, proteusapp_focused: Ro, proteusapp_freeResources: Co, proteusapp_get: Vo, proteusapp_hideVideo: Lo, proteusapp_inputDevices: Eo, proteusapp_isFocused: Oo, proteusapp_loadTexture: Go, proteusapp_mergeFrom: Wo, proteusapp_mergeFromWithBehavior: zo, proteusapp_new: Uo, proteusapp_onAppKey: qo, proteusapp_onBlur: jo, proteusapp_onClick: Ho, proteusapp_onDrag: Ko, proteusapp_onDropped: No, proteusapp_onFocus: Jo, proteusapp_onFocusLost: Qo, proteusapp_onHoverEnter: Xo, proteusapp_onHoverExit: Yo, proteusapp_onKey: Zo, proteusapp_onPress: ec, proteusapp_onRelease: _c, proteusapp_onTransitionComplete: tc, proteusapp_pointerLeft: rc, proteusapp_pointerMoved: nc, proteusapp_pointerPressed: ac, proteusapp_pointerReleased: oc, proteusapp_releaseVideo: cc, proteusapp_removeChild: bc, proteusapp_resetKeyMap: sc, proteusapp_setDeclaredGeometry: ic, proteusapp_setDefaultFocus: fc, proteusapp_setDevices: uc, proteusapp_setDisabled: dc, proteusapp_setImage: gc, proteusapp_setInputDevices: pc, proteusapp_setInteractive: wc, proteusapp_setKeyRepeat: lc, proteusapp_setLongPressMs: mc, proteusapp_setOpacity: hc, proteusapp_setText: yc, proteusapp_setTexture: xc, proteusapp_setTransitionInteraction: $c, proteusapp_setVideoCrossfade: vc, proteusapp_setVisible: Sc, proteusapp_showVideo: Ac, proteusapp_splitTo: Ic, proteusapp_splitToWithBehavior: Dc, proteusapp_splitToWithStates: Tc, proteusapp_texture: Fc, proteusapp_textureState: Bc, proteusapp_tick: Pc, proteusapp_transitionChannel: kc, proteusapp_unbindKey: Mc, proteusapp_uploadVideoFrame: Rc, __wbg_handle_free: Cc, __wbg_texturehandle_free: Vc, __wbg_transitionchannel_free: Lc, __wbg_videohandle_free: Ec, handle_fromId: Oc, handle_id: Gc, texturehandle_fromId: Wc, texturehandle_id: zc, __abort_handler: Uc, __instance_terminated: qc, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: jc, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Hc, __wbindgen_malloc: Kc, __wbindgen_realloc: Nc, __wbindgen_exn_store: Jc, __externref_table_alloc: Qc, __wbindgen_externrefs: Xc, __wbindgen_destroy_closure: Yc, __externref_table_dealloc: Zc, __wbindgen_free: eb, __wbindgen_start: Ct } = uo, _b = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: Uc,
    __externref_table_alloc: Qc,
    __externref_table_dealloc: Zc,
    __instance_terminated: qc,
    __wbg_handle_free: Cc,
    __wbg_proteusapp_free: po,
    __wbg_texturehandle_free: Vc,
    __wbg_transitionchannel_free: Lc,
    __wbg_videohandle_free: Ec,
    __wbindgen_destroy_closure: Yc,
    __wbindgen_exn_store: Jc,
    __wbindgen_externrefs: Xc,
    __wbindgen_free: eb,
    __wbindgen_malloc: Kc,
    __wbindgen_realloc: Nc,
    __wbindgen_start: Ct,
    handle_fromId: Oc,
    handle_id: Gc,
    memory: go,
    proteusapp_addChild: wo,
    proteusapp_animateTo: lo,
    proteusapp_bakeTexture: mo,
    proteusapp_bakedImageSize: ho,
    proteusapp_bakedTextSize: yo,
    proteusapp_bindKey: xo,
    proteusapp_channelDestroy: $o,
    proteusapp_channelSet: vo,
    proteusapp_clearFocus: So,
    proteusapp_component: Ao,
    proteusapp_copyBakedImageFrom: Io,
    proteusapp_createVideo: Do,
    proteusapp_cropImage: To,
    proteusapp_declareGeometry: Fo,
    proteusapp_declaredGeometry: Bo,
    proteusapp_destroy: Po,
    proteusapp_devices: ko,
    proteusapp_focus: Mo,
    proteusapp_focused: Ro,
    proteusapp_freeResources: Co,
    proteusapp_get: Vo,
    proteusapp_hideVideo: Lo,
    proteusapp_inputDevices: Eo,
    proteusapp_isFocused: Oo,
    proteusapp_loadTexture: Go,
    proteusapp_mergeFrom: Wo,
    proteusapp_mergeFromWithBehavior: zo,
    proteusapp_new: Uo,
    proteusapp_onAppKey: qo,
    proteusapp_onBlur: jo,
    proteusapp_onClick: Ho,
    proteusapp_onDrag: Ko,
    proteusapp_onDropped: No,
    proteusapp_onFocus: Jo,
    proteusapp_onFocusLost: Qo,
    proteusapp_onHoverEnter: Xo,
    proteusapp_onHoverExit: Yo,
    proteusapp_onKey: Zo,
    proteusapp_onPress: ec,
    proteusapp_onRelease: _c,
    proteusapp_onTransitionComplete: tc,
    proteusapp_pointerLeft: rc,
    proteusapp_pointerMoved: nc,
    proteusapp_pointerPressed: ac,
    proteusapp_pointerReleased: oc,
    proteusapp_releaseVideo: cc,
    proteusapp_removeChild: bc,
    proteusapp_resetKeyMap: sc,
    proteusapp_setDeclaredGeometry: ic,
    proteusapp_setDefaultFocus: fc,
    proteusapp_setDevices: uc,
    proteusapp_setDisabled: dc,
    proteusapp_setImage: gc,
    proteusapp_setInputDevices: pc,
    proteusapp_setInteractive: wc,
    proteusapp_setKeyRepeat: lc,
    proteusapp_setLongPressMs: mc,
    proteusapp_setOpacity: hc,
    proteusapp_setText: yc,
    proteusapp_setTexture: xc,
    proteusapp_setTransitionInteraction: $c,
    proteusapp_setVideoCrossfade: vc,
    proteusapp_setVisible: Sc,
    proteusapp_showVideo: Ac,
    proteusapp_splitTo: Ic,
    proteusapp_splitToWithBehavior: Dc,
    proteusapp_splitToWithStates: Tc,
    proteusapp_texture: Fc,
    proteusapp_textureState: Bc,
    proteusapp_tick: Pc,
    proteusapp_transitionChannel: kc,
    proteusapp_unbindKey: Mc,
    proteusapp_uploadVideoFrame: Rc,
    texturehandle_fromId: Wc,
    texturehandle_id: zc,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Hc,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: jc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  fo(_b);
  Ct();
  const tb = "" + new URL("proteus_host_web_bg-olwQVXDY.wasm", import.meta.url).href;
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
    isFocused(e) {
      return l(e, x), i.proteusapp_isFocused(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    loadTexture(e, t) {
      const r = p_(e, i.__wbindgen_malloc), n = C, a = i.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : ae.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      l(e, x);
      const a = He(t, i.__wbindgen_malloc), o = C, c = i.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw B(c[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      l(e, x);
      const o = He(t, i.__wbindgen_malloc), c = C, b = i.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
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
      const a = He(t, i.__wbindgen_malloc), o = C, c = i.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw B(c[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      l(e, x);
      const o = He(t, i.__wbindgen_malloc), c = C, b = i.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
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
  function rb(_, e, t, r) {
    const n = W(_, i.__wbindgen_malloc, i.__wbindgen_realloc), a = C;
    return i.mount(n, a, e, $(t) ? 0 : D(t), r);
  }
  function nb(_, e) {
    return Error(A(_, e));
  }
  function ab(_) {
    return Number(_);
  }
  function ob(_, e) {
    const t = String(e), r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = C;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function cb(_) {
    return _.Window;
  }
  function bb(_) {
    return _.WorkerGlobalScope;
  }
  function sb(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    M().setBigInt64(_ + 8, $(r) ? BigInt(0) : r, true), M().setInt32(_ + 0, !$(r), true);
  }
  function ib(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return $(t) ? 16777215 : t ? 1 : 0;
  }
  function fb(_, e) {
    const t = M_(e), r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = C;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function ub(_, e) {
    return _ in e;
  }
  function db(_) {
    return typeof _ == "bigint";
  }
  function gb(_) {
    return typeof _ == "function";
  }
  function pb(_) {
    return _ === null;
  }
  function wb(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function lb(_) {
    return typeof _ == "string";
  }
  function mb(_) {
    return _ === void 0;
  }
  function hb(_, e) {
    return _ === e;
  }
  function yb(_, e) {
    return _ == e;
  }
  function xb(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    M().setFloat64(_ + 8, $(r) ? 0 : r, true), M().setInt32(_ + 0, !$(r), true);
  }
  function $b(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = C;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function vb(_, e) {
    throw new Error(A(_, e));
  }
  function Sb(_) {
    _._wbg_cb_unref();
  }
  function Ab(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Ib(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Db() {
    return p(function(_, e, t, r) {
      _.addEventListener(A(e, t), r);
    }, arguments);
  }
  function Tb(_) {
    return _.altKey;
  }
  function Fb(_, e, t) {
    _.attachShader(e, t);
  }
  function Bb(_, e, t) {
    _.attachShader(e, t);
  }
  function Pb(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function kb() {
    return p(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Mb(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, A(r, n));
  }
  function Rb(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, A(r, n));
  }
  function Cb(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function Vb(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function Lb(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function Eb(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function Ob(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function Gb(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Wb(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function zb(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function Ub(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function qb(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function jb(_, e) {
    _.bindVertexArrayOES(e);
  }
  function Hb(_, e) {
    _.bindVertexArray(e);
  }
  function Kb(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Nb(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Jb(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Qb(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Xb(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Yb(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Zb(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function es(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function _s(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function ts(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function rs(_, e, t, r, n, a, o, c, b, f, d) {
    _.blitFramebuffer(e, t, r, n, a, o, c, b, f >>> 0, d >>> 0);
  }
  function ns(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function as(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function os(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function cs(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function bs(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function ss(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function is(_) {
    return _.button;
  }
  function fs() {
    return p(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function us() {
    return p(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function ds() {
    return p(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function gs(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, L(r, n));
  }
  function ps(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, Y(r, n));
  }
  function ws(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, xe(r, n));
  }
  function ls(_, e) {
    _.clearDepth(e);
  }
  function ms(_, e) {
    _.clearDepth(e);
  }
  function hs(_, e) {
    _.clearStencil(e);
  }
  function ys(_, e) {
    _.clearStencil(e);
  }
  function xs(_, e) {
    _.clear(e >>> 0);
  }
  function $s(_, e) {
    _.clear(e >>> 0);
  }
  function vs(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function Ss(_, e) {
    const t = e.code, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = C;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function As(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Is(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Ds(_, e) {
    _.compileShader(e);
  }
  function Ts(_, e) {
    _.compileShader(e);
  }
  function Fs(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function Bs(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function Ps(_, e, t, r, n, a, o, c, b, f) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b, f);
  }
  function ks(_, e, t, r, n, a, o, c, b, f, d, I) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d, I);
  }
  function Ms(_, e, t, r, n, a, o, c, b, f, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d);
  }
  function Rs() {
    return p(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function Cs(_) {
    return _.contentRect;
  }
  function Vs(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function Ls(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function Es(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function Os(_, e, t, r, n, a, o, c, b, f) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f);
  }
  function Gs() {
    return p(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function Ws() {
    return p(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function zs(_, e) {
    return _.createBindGroup(e);
  }
  function Us(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : D(e);
  }
  function qs() {
    return p(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function js(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : D(e);
  }
  function Hs(_, e) {
    return _.createCommandEncoder(e);
  }
  function Ks(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : D(e);
  }
  function Ns(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : D(e);
  }
  function Js(_, e) {
    return _.createPipelineLayout(e);
  }
  function Qs(_) {
    const e = _.createProgram();
    return $(e) ? 0 : D(e);
  }
  function Xs(_) {
    const e = _.createProgram();
    return $(e) ? 0 : D(e);
  }
  function Ys(_) {
    const e = _.createQuery();
    return $(e) ? 0 : D(e);
  }
  function Zs() {
    return p(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function ei(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : D(e);
  }
  function _i(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : D(e);
  }
  function ti(_, e) {
    return _.createSampler(e);
  }
  function ri(_) {
    const e = _.createSampler();
    return $(e) ? 0 : D(e);
  }
  function ni(_, e) {
    return _.createShaderModule(e);
  }
  function ai(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : D(t);
  }
  function oi(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : D(t);
  }
  function ci(_) {
    const e = _.createTexture();
    return $(e) ? 0 : D(e);
  }
  function bi(_) {
    const e = _.createTexture();
    return $(e) ? 0 : D(e);
  }
  function si() {
    return p(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function ii(_) {
    const e = _.createVertexArrayOES();
    return $(e) ? 0 : D(e);
  }
  function fi(_) {
    const e = _.createVertexArray();
    return $(e) ? 0 : D(e);
  }
  function ui() {
    return p(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function di(_) {
    return _.ctrlKey;
  }
  function gi(_, e) {
    _.cullFace(e >>> 0);
  }
  function pi(_, e) {
    _.cullFace(e >>> 0);
  }
  function wi(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function li(_, e) {
    _.deleteBuffer(e);
  }
  function mi(_, e) {
    _.deleteBuffer(e);
  }
  function hi(_, e) {
    _.deleteFramebuffer(e);
  }
  function yi(_, e) {
    _.deleteFramebuffer(e);
  }
  function xi(_, e) {
    _.deleteProgram(e);
  }
  function $i(_, e) {
    _.deleteProgram(e);
  }
  function vi(_, e) {
    _.deleteQuery(e);
  }
  function Si(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Ai(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Ii(_, e) {
    _.deleteSampler(e);
  }
  function Di(_, e) {
    _.deleteShader(e);
  }
  function Ti(_, e) {
    _.deleteShader(e);
  }
  function Fi(_, e) {
    _.deleteSync(e);
  }
  function Bi(_, e) {
    _.deleteTexture(e);
  }
  function Pi(_, e) {
    _.deleteTexture(e);
  }
  function ki(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function Mi(_, e) {
    _.deleteVertexArray(e);
  }
  function Ri(_, e) {
    _.depthFunc(e >>> 0);
  }
  function Ci(_, e) {
    _.depthFunc(e >>> 0);
  }
  function Vi(_, e) {
    _.depthMask(e !== 0);
  }
  function Li(_, e) {
    _.depthMask(e !== 0);
  }
  function Ei(_, e, t) {
    _.depthRange(e, t);
  }
  function Oi(_, e, t) {
    _.depthRange(e, t);
  }
  function Gi(_, e) {
    const t = e.description, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = C;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function Wi(_) {
    _.destroy();
  }
  function zi(_) {
    return _.devicePixelRatio;
  }
  function Ui(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function qi(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function ji(_, e) {
    _.disable(e >>> 0);
  }
  function Hi(_, e) {
    _.disable(e >>> 0);
  }
  function Ki(_) {
    const e = _.document;
    return $(e) ? 0 : D(e);
  }
  function Ni(_) {
    return _.done;
  }
  function Ji(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function Qi(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function Xi(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function Yi(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function Zi(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function ef(_, e) {
    _.drawBuffers(e);
  }
  function _f(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function tf(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function rf(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function nf(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function af(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function of(_, e) {
    _.enable(e >>> 0);
  }
  function cf(_, e) {
    _.enable(e >>> 0);
  }
  function bf(_, e) {
    _.endQuery(e >>> 0);
  }
  function sf(_) {
    _.end();
  }
  function ff(_) {
    return Object.entries(_);
  }
  function uf(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function df(_) {
    console.error(_);
  }
  function gf(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(A(_, e));
    } finally {
      i.__wbindgen_free(t, r, 1);
    }
  }
  function pf(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return $(r) ? 0 : D(r);
  }
  function wf(_) {
    return _.finish();
  }
  function lf(_, e) {
    return _.finish(e);
  }
  function mf(_) {
    _.flush();
  }
  function hf(_) {
    _.flush();
  }
  function yf() {
    return p(function(_) {
      _.focus();
    }, arguments);
  }
  function xf(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function $f(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function vf(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function Sf(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function Af(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function If(_, e, t, r, n, a, o) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, o);
  }
  function Df(_, e) {
    _.frontFace(e >>> 0);
  }
  function Tf(_, e) {
    _.frontFace(e >>> 0);
  }
  function Ff(_) {
    return _.getBoundingClientRect();
  }
  function Bf(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function Pf() {
    return p(function(_, e, t, r) {
      const n = _.getContext(A(e, t), r);
      return $(n) ? 0 : D(n);
    }, arguments);
  }
  function kf() {
    return p(function(_, e, t) {
      const r = _.getContext(A(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function Mf() {
    return p(function(_, e, t) {
      const r = _.getContext(A(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function Rf() {
    return p(function(_, e, t, r) {
      const n = _.getContext(A(e, t), r);
      return $(n) ? 0 : D(n);
    }, arguments);
  }
  function Cf() {
    return p(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function Vf(_, e, t) {
    const r = _.getElementById(A(e, t));
    return $(r) ? 0 : D(r);
  }
  function Lf() {
    return p(function(_, e, t) {
      const r = _.getExtension(A(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function Ef() {
    return p(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function Of() {
    return p(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function Gf() {
    return p(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function Wf() {
    return p(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function zf(_) {
    const e = _.getPreferredCanvasFormat();
    return (oe.indexOf(e) + 1 || 96) - 1;
  }
  function Uf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = C;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function qf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = C;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function jf(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function Hf(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function Kf(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function Nf(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = C;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function Jf(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = C;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function Qf(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function Xf(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function Yf(_) {
    const e = _.getSupportedExtensions();
    return $(e) ? 0 : D(e);
  }
  function Zf(_) {
    const e = _.getSupportedProfiles();
    return $(e) ? 0 : D(e);
  }
  function eu(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function _u(_, e, t, r) {
    return _.getUniformBlockIndex(e, A(t, r));
  }
  function tu(_, e, t, r) {
    const n = _.getUniformLocation(e, A(t, r));
    return $(n) ? 0 : D(n);
  }
  function ru(_, e, t, r) {
    const n = _.getUniformLocation(e, A(t, r));
    return $(n) ? 0 : D(n);
  }
  function nu(_, e) {
    return _[e >>> 0];
  }
  function au(_, e) {
    const t = _[e >>> 0];
    return $(t) ? 0 : D(t);
  }
  function ou() {
    return p(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function cu(_, e) {
    return _[e >>> 0];
  }
  function bu(_, e) {
    return _[e];
  }
  function su(_) {
    return _.gpu;
  }
  function iu(_, e, t) {
    return _.hasAttribute(A(e, t));
  }
  function fu(_) {
    return _.height;
  }
  function uu(_) {
    return _.height;
  }
  function du(_) {
    return _.hidden;
  }
  function gu(_, e, t) {
    return _.includes(e, t);
  }
  function pu(_) {
    return _.info;
  }
  function wu(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function lu(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function mu(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function hu(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function yu(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function xu(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function $u(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function vu(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function Su(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Au(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function Iu() {
    return p(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function Du(_) {
    return Array.isArray(_);
  }
  function Tu(_) {
    return _.isComposing;
  }
  function Fu(_) {
    return Number.isSafeInteger(_);
  }
  function Bu(_, e) {
    return Object.is(_, e);
  }
  function Pu() {
    return Symbol.iterator;
  }
  function ku(_, e) {
    const t = e.key, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = C;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function Mu(_, e) {
    const t = e.label, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = C;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function Ru(_) {
    return _.length;
  }
  function Cu(_) {
    return _.length;
  }
  function Vu(_) {
    return _.limits;
  }
  function Lu(_) {
    return _.limits;
  }
  function Eu(_, e) {
    _.linkProgram(e);
  }
  function Ou(_, e) {
    _.linkProgram(e);
  }
  function Gu(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function Wu(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function zu(_) {
    return _.maxBindGroups;
  }
  function Uu(_) {
    return _.maxBindingsPerBindGroup;
  }
  function qu(_) {
    return _.maxBufferSize;
  }
  function ju(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function Hu(_) {
    return _.maxColorAttachments;
  }
  function Ku(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function Nu(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function Ju(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function Qu(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function Xu(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function Yu(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function Zu(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function ed(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function _d(_) {
    return _.maxInterStageShaderVariables;
  }
  function td(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function rd(_) {
    return _.maxSamplersPerShaderStage;
  }
  function nd(_) {
    return _.maxStorageBufferBindingSize;
  }
  function ad(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function od(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function cd(_) {
    return _.maxTextureArrayLayers;
  }
  function bd(_) {
    return _.maxTextureDimension1D;
  }
  function sd(_) {
    return _.maxTextureDimension2D;
  }
  function id(_) {
    return _.maxTextureDimension3D;
  }
  function fd(_) {
    return _.maxUniformBufferBindingSize;
  }
  function ud(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function dd(_) {
    return _.maxVertexAttributes;
  }
  function gd(_) {
    return _.maxVertexBufferArrayStride;
  }
  function pd(_) {
    return _.maxVertexBuffers;
  }
  function wd(_) {
    return _.metaKey;
  }
  function ld(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function md(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function hd(_) {
    return _.navigator;
  }
  function yd(_) {
    return _.navigator;
  }
  function xd() {
    return p(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function $d() {
    return new Error();
  }
  function vd() {
    return new Object();
  }
  function Sd() {
    return new Array();
  }
  function Ad(_) {
    return new Uint8Array(_);
  }
  function Id(_, e) {
    return new Error(A(_, e));
  }
  function Dd(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, o) => {
        const c = t.a;
        t.a = 0;
        try {
          return U2(c, t.b, a, o);
        } finally {
          t.a = c;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function Td(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function Fd() {
    return p(function(_) {
      return _.next();
    }, arguments);
  }
  function Bd(_) {
    return _.next;
  }
  function Pd(_, e) {
    _.observe(e);
  }
  function kd(_) {
    return Array.of(_);
  }
  function Md(_) {
    return _.offsetX;
  }
  function Rd(_) {
    return _.offsetY;
  }
  function Cd(_) {
    return _.onSubmittedWorkDone();
  }
  function Vd(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function Ld(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function Ed(_, e, t) {
    _.polygonOffset(e, t);
  }
  function Od(_, e, t) {
    _.polygonOffset(e, t);
  }
  function Gd(_) {
    _.preventDefault();
  }
  function Wd(_) {
    return P_.__wrap(_);
  }
  function zd(_, e, t) {
    Uint8Array.prototype.set.call(s_(_, e), t);
  }
  function Ud(_, e) {
    return _.push(e);
  }
  function qd(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function jd() {
    return p(function(_, e, t) {
      return _.querySelectorAll(A(e, t));
    }, arguments);
  }
  function Hd() {
    return p(function(_, e, t) {
      const r = _.querySelector(A(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function Kd(_) {
    return _.queueMicrotask;
  }
  function Nd(_) {
    queueMicrotask(_);
  }
  function Jd(_) {
    return _.queue;
  }
  function Qd(_, e) {
    _.readBuffer(e >>> 0);
  }
  function Xd() {
    return p(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function Yd() {
    return p(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function Zd() {
    return p(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function e0(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function _0(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function t0(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function r0(_) {
    return _.repeat;
  }
  function n0(_, e) {
    return _.requestAdapter(e);
  }
  function a0(_) {
    return _.requestAdapter();
  }
  function o0() {
    return p(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function c0(_, e) {
    return _.requestDevice(e);
  }
  function b0(_) {
    return Promise.resolve(_);
  }
  function s0(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function i0(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function f0(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function u0(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function d0() {
    return p(function(_, e, t, r, n) {
      _.setAttribute(A(e, t), A(r, n));
    }, arguments);
  }
  function g0() {
    return p(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, xe(r, n), a, o >>> 0);
    }, arguments);
  }
  function p0(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function w0(_, e, t, r, n) {
    _.setIndexBuffer(e, j_[t], r, n);
  }
  function l0(_, e, t, r) {
    _.setIndexBuffer(e, j_[t], r);
  }
  function m0(_, e) {
    _.setPipeline(e);
  }
  function h0(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function y0(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function x0(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
  }
  function $0(_, e, t) {
    _.set(e, t >>> 0);
  }
  function v0() {
    return p(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function S0(_, e, t) {
    _[e] = t;
  }
  function A0(_, e) {
    _.a = e;
  }
  function I0(_, e) {
    _.access = e3[e];
  }
  function D0(_, e) {
    _.addressModeU = U_[e];
  }
  function T0(_, e) {
    _.addressModeV = U_[e];
  }
  function F0(_, e) {
    _.addressModeW = U_[e];
  }
  function B0(_, e) {
    _.alpha = e;
  }
  function P0(_, e) {
    _.alphaMode = K2[e];
  }
  function k0(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function M0(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function R0(_, e) {
    _.arrayStride = e;
  }
  function C0(_, e) {
    _.aspect = Wt[e];
  }
  function V0(_, e) {
    _.aspect = Wt[e];
  }
  function L0(_, e) {
    _.attributes = e;
  }
  function E0(_, e) {
    _.b = e;
  }
  function O0(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function G0(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function W0(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function z0(_, e) {
    _.bindGroupLayouts = e;
  }
  function U0(_, e) {
    _.binding = e >>> 0;
  }
  function q0(_, e) {
    _.binding = e >>> 0;
  }
  function j0(_, e) {
    _.blend = e;
  }
  function H0(_, e) {
    _.buffer = e;
  }
  function K0(_, e) {
    _.buffer = e;
  }
  function N0(_, e) {
    _.buffers = e;
  }
  function J0(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function Q0(_, e) {
    _.clearValue = e;
  }
  function X0(_, e, t) {
    _.code = A(e, t);
  }
  function Y0(_, e) {
    _.colorAttachments = e;
  }
  function Z0(_, e) {
    _.color = e;
  }
  function eg(_, e) {
    _.compare = q_[e];
  }
  function _g(_, e) {
    _.compare = q_[e];
  }
  function tg(_, e) {
    _.count = e >>> 0;
  }
  function rg(_, e) {
    _.cullMode = N2[e];
  }
  function ng(_, e, t) {
    _[e >>> 0] = t;
  }
  function ag(_, e) {
    _.depthBias = e;
  }
  function og(_, e) {
    _.depthBiasClamp = e;
  }
  function cg(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function bg(_, e) {
    _.depthClearValue = e;
  }
  function sg(_, e) {
    _.depthCompare = q_[e];
  }
  function ig(_, e) {
    _.depthFailOp = K_[e];
  }
  function fg(_, e) {
    _.depthLoadOp = H_[e];
  }
  function ug(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function dg(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function gg(_, e) {
    _.depthStencil = e;
  }
  function pg(_, e) {
    _.depthStencilAttachment = e;
  }
  function wg(_, e) {
    _.depthStoreOp = N_[e];
  }
  function lg(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function mg(_, e) {
    _.device = e;
  }
  function hg(_, e) {
    _.dimension = J_[e];
  }
  function yg(_, e) {
    _.dimension = _3[e];
  }
  function xg(_, e) {
    _.dstFactor = Ot[e];
  }
  function $g(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function vg(_, e) {
    _.entries = e;
  }
  function Sg(_, e) {
    _.entries = e;
  }
  function Ag(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function Ig(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function Dg(_, e) {
    _.externalTexture = e;
  }
  function Tg(_, e) {
    _.failOp = K_[e];
  }
  function Fg(_, e) {
    _.format = oe[e];
  }
  function Bg(_, e) {
    _.format = r3[e];
  }
  function Pg(_, e) {
    _.format = oe[e];
  }
  function kg(_, e) {
    _.format = oe[e];
  }
  function Mg(_, e) {
    _.format = oe[e];
  }
  function Rg(_, e) {
    _.format = oe[e];
  }
  function Cg(_, e) {
    _.format = oe[e];
  }
  function Vg(_, e) {
    _.fragment = e;
  }
  function Lg(_, e) {
    _.frontFace = J2[e];
  }
  function Eg(_, e) {
    _.g = e;
  }
  function Og(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function Gg(_, e) {
    _.height = e >>> 0;
  }
  function Wg(_, e) {
    _.height = e >>> 0;
  }
  function zg(_, e) {
    _.height = e >>> 0;
  }
  function Ug(_, e, t) {
    _.label = A(e, t);
  }
  function qg(_, e, t) {
    _.label = A(e, t);
  }
  function jg(_, e, t) {
    _.label = A(e, t);
  }
  function Hg(_, e, t) {
    _.label = A(e, t);
  }
  function Kg(_, e, t) {
    _.label = A(e, t);
  }
  function Ng(_, e, t) {
    _.label = A(e, t);
  }
  function Jg(_, e, t) {
    _.label = A(e, t);
  }
  function Qg(_, e, t) {
    _.label = A(e, t);
  }
  function Xg(_, e, t) {
    _.label = A(e, t);
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
  function tp(_, e) {
    _.layout = e;
  }
  function rp(_, e) {
    _.layout = e;
  }
  function np(_, e) {
    _.loadOp = H_[e];
  }
  function ap(_, e) {
    _.lodMaxClamp = e;
  }
  function op(_, e) {
    _.lodMinClamp = e;
  }
  function cp(_, e) {
    _.magFilter = Gt[e];
  }
  function bp(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function sp(_, e) {
    _.mask = e >>> 0;
  }
  function ip(_, e) {
    _.maxAnisotropy = e;
  }
  function fp(_, e) {
    _.minBindingSize = e;
  }
  function up(_, e) {
    _.minFilter = Gt[e];
  }
  function dp(_, e) {
    _.mipLevel = e >>> 0;
  }
  function gp(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function pp(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function wp(_, e) {
    _.mipmapFilter = Q2[e];
  }
  function lp(_, e) {
    _.module = e;
  }
  function mp(_, e) {
    _.module = e;
  }
  function hp(_, e) {
    _.multisample = e;
  }
  function yp(_, e) {
    _.multisampled = e !== 0;
  }
  function xp(_, e) {
    _.offset = e;
  }
  function $p(_, e) {
    _.offset = e;
  }
  function vp(_, e) {
    _.offset = e;
  }
  function Sp(_, e) {
    _.operation = j2[e];
  }
  function Ap(_, e) {
    _.origin = e;
  }
  function Ip(_, e) {
    _.passOp = K_[e];
  }
  function Dp(_, e) {
    _.powerPreference = X2[e];
  }
  function Tp(_, e) {
    _.primitive = e;
  }
  function Fp(_, e) {
    _.querySet = e;
  }
  function Bp(_, e) {
    _.r = e;
  }
  function Pp(_, e) {
    _.requiredFeatures = e;
  }
  function kp(_, e) {
    _.requiredLimits = e;
  }
  function Mp(_, e) {
    _.resolveTarget = e;
  }
  function Rp(_, e) {
    _.resource = e;
  }
  function Cp(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function Vp(_, e) {
    _.sampleCount = e >>> 0;
  }
  function Lp(_, e) {
    _.sampleType = t3[e];
  }
  function Ep(_, e) {
    _.sampler = e;
  }
  function Op(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function Gp(_, e) {
    _.size = e;
  }
  function Wp(_, e) {
    _.size = e;
  }
  function zp(_, e) {
    _.size = e;
  }
  function Up(_, e) {
    _.srcFactor = Ot[e];
  }
  function qp(_, e) {
    _.stencilBack = e;
  }
  function jp(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function Hp(_, e) {
    _.stencilFront = e;
  }
  function Kp(_, e) {
    _.stencilLoadOp = H_[e];
  }
  function Np(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function Jp(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function Qp(_, e) {
    _.stencilStoreOp = N_[e];
  }
  function Xp(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function Yp(_, e) {
    _.stepMode = n3[e];
  }
  function Zp(_, e) {
    _.storageTexture = e;
  }
  function ew(_, e) {
    _.storeOp = N_[e];
  }
  function _w(_, e) {
    _.stripIndexFormat = j_[e];
  }
  function tw(_, e) {
    _.targets = e;
  }
  function rw(_, e) {
    _.texture = e;
  }
  function nw(_, e) {
    _.texture = e;
  }
  function aw(_, e) {
    _.timestampWrites = e;
  }
  function ow(_, e) {
    _.topology = Y2[e];
  }
  function cw(_, e) {
    _.type = H2[e];
  }
  function bw(_, e) {
    _.type = Z2[e];
  }
  function sw(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function iw(_, e) {
    _.usage = e >>> 0;
  }
  function fw(_, e) {
    _.usage = e >>> 0;
  }
  function uw(_, e) {
    _.usage = e >>> 0;
  }
  function dw(_, e) {
    _.usage = e >>> 0;
  }
  function gw(_, e) {
    _.vertex = e;
  }
  function pw(_, e) {
    _.view = e;
  }
  function ww(_, e) {
    _.view = e;
  }
  function lw(_, e) {
    _.viewDimension = J_[e];
  }
  function mw(_, e) {
    _.viewDimension = J_[e];
  }
  function hw(_, e) {
    _.viewFormats = e;
  }
  function yw(_, e) {
    _.viewFormats = e;
  }
  function xw(_, e) {
    _.visibility = e >>> 0;
  }
  function $w(_, e) {
    _.width = e >>> 0;
  }
  function vw(_, e) {
    _.width = e >>> 0;
  }
  function Sw(_, e) {
    _.width = e >>> 0;
  }
  function Aw(_, e) {
    _.writeMask = e >>> 0;
  }
  function Iw(_, e) {
    _.x = e >>> 0;
  }
  function Dw(_, e) {
    _.y = e >>> 0;
  }
  function Tw(_, e) {
    _.z = e >>> 0;
  }
  function Fw(_, e, t, r) {
    _.shaderSource(e, A(t, r));
  }
  function Bw(_, e, t, r) {
    _.shaderSource(e, A(t, r));
  }
  function Pw(_) {
    return _.shiftKey;
  }
  function kw(_, e) {
    const t = e.stack, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = C;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function Mw() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return $(_) ? 0 : D(_);
  }
  function Rw() {
    const _ = typeof global > "u" ? null : global;
    return $(_) ? 0 : D(_);
  }
  function Cw() {
    const _ = typeof self > "u" ? null : self;
    return $(_) ? 0 : D(_);
  }
  function Vw() {
    const _ = typeof window > "u" ? null : window;
    return $(_) ? 0 : D(_);
  }
  function Lw(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function Ew(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function Ow(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function Gw(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function Ww(_, e) {
    _.stencilMask(e >>> 0);
  }
  function zw(_, e) {
    _.stencilMask(e >>> 0);
  }
  function Uw(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function qw(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function jw(_, e) {
    _.submit(e);
  }
  function Hw() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Kw() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Nw() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Jw() {
    return p(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function Qw() {
    return p(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function Xw(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function Yw(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function Zw(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function e1(_, e, t, r, n, a, o) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, o);
  }
  function _1() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function t1() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function r1() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
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
    return p(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function i1() {
    return p(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function f1() {
    return p(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
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
  function w1(_, e, t) {
    return _.then(e, t);
  }
  function l1(_, e, t) {
    return _.then(e, t);
  }
  function m1(_, e) {
    return _.then(e);
  }
  function h1(_, e, t) {
    _.uniform1f(e, t);
  }
  function y1(_, e, t) {
    _.uniform1f(e, t);
  }
  function x1(_, e, t) {
    _.uniform1i(e, t);
  }
  function $1(_, e, t) {
    _.uniform1i(e, t);
  }
  function v1(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function S1(_, e, t, r) {
    _.uniform2fv(e, L(t, r));
  }
  function A1(_, e, t, r) {
    _.uniform2fv(e, L(t, r));
  }
  function I1(_, e, t, r) {
    _.uniform2iv(e, Y(t, r));
  }
  function D1(_, e, t, r) {
    _.uniform2iv(e, Y(t, r));
  }
  function T1(_, e, t, r) {
    _.uniform2uiv(e, xe(t, r));
  }
  function F1(_, e, t, r) {
    _.uniform3fv(e, L(t, r));
  }
  function B1(_, e, t, r) {
    _.uniform3fv(e, L(t, r));
  }
  function P1(_, e, t, r) {
    _.uniform3iv(e, Y(t, r));
  }
  function k1(_, e, t, r) {
    _.uniform3iv(e, Y(t, r));
  }
  function M1(_, e, t, r) {
    _.uniform3uiv(e, xe(t, r));
  }
  function R1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function C1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function V1(_, e, t, r) {
    _.uniform4fv(e, L(t, r));
  }
  function L1(_, e, t, r) {
    _.uniform4fv(e, L(t, r));
  }
  function E1(_, e, t, r) {
    _.uniform4iv(e, Y(t, r));
  }
  function O1(_, e, t, r) {
    _.uniform4iv(e, Y(t, r));
  }
  function G1(_, e, t, r) {
    _.uniform4uiv(e, xe(t, r));
  }
  function W1(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function z1(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, L(r, n));
  }
  function U1(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, L(r, n));
  }
  function q1(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, L(r, n));
  }
  function j1(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, L(r, n));
  }
  function H1(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, L(r, n));
  }
  function K1(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, L(r, n));
  }
  function N1(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, L(r, n));
  }
  function J1(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, L(r, n));
  }
  function Q1(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, L(r, n));
  }
  function X1(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, L(r, n));
  }
  function Y1(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, L(r, n));
  }
  function Z1(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, L(r, n));
  }
  function e2(_) {
    _.unmap();
  }
  function _2(_, e) {
    _.useProgram(e);
  }
  function t2(_, e) {
    _.useProgram(e);
  }
  function r2(_) {
    return _.value;
  }
  function n2(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function a2(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function o2(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function c2(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function b2(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function s2(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function i2(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function f2(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function u2(_) {
    return _.width;
  }
  function d2(_) {
    return _.width;
  }
  function g2() {
    return p(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, s_(r, n), a, o);
    }, arguments);
  }
  function p2() {
    return p(function(_, e, t, r, n, a) {
      _.writeTexture(e, s_(t, r), n, a);
    }, arguments);
  }
  function w2(_, e) {
    return Z(_, e, L2);
  }
  function l2(_, e) {
    return Z(_, e, z2);
  }
  function m2(_, e) {
    return Z(_, e, q2);
  }
  function h2(_, e) {
    return Z(_, e, E2);
  }
  function y2(_, e) {
    return Z(_, e, O2);
  }
  function x2(_, e) {
    return Z(_, e, G2);
  }
  function $2(_, e) {
    return Z(_, e, W2);
  }
  function v2(_, e) {
    return Z(_, e, V2);
  }
  function S2(_) {
    return _;
  }
  function A2(_) {
    return _;
  }
  function I2(_, e) {
    return L(_, e);
  }
  function D2(_, e) {
    return a3(_, e);
  }
  function T2(_, e) {
    return Y(_, e);
  }
  function F2(_, e) {
    return o3(_, e);
  }
  function B2(_, e) {
    return c3(_, e);
  }
  function P2(_, e) {
    return xe(_, e);
  }
  function k2(_, e) {
    return s_(_, e);
  }
  function M2(_, e) {
    return A(_, e);
  }
  function R2(_) {
    return BigInt.asUintN(64, _);
  }
  function C2() {
    const _ = i.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function V2(_, e) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function L2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function E2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function O2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function G2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function W2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6(_, e, t);
  }
  function z2(_, e, t) {
    const r = i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (r[1]) throw B(r[0]);
  }
  function U2(_, e, t, r) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, r);
  }
  function q2(_, e, t) {
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
  ], j2 = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], H2 = [
    "uniform",
    "storage",
    "read-only-storage"
  ], K2 = [
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
  ], N2 = [
    "none",
    "front",
    "back"
  ], Gt = [
    "nearest",
    "linear"
  ], J2 = [
    "ccw",
    "cw"
  ], j_ = [
    "uint16",
    "uint32"
  ], H_ = [
    "load",
    "clear"
  ], Q2 = [
    "nearest",
    "linear"
  ], X2 = [
    "low-power",
    "high-performance"
  ], Y2 = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], Z2 = [
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
  ], e3 = [
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
  ], _3 = [
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
  ], t3 = [
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
  ], r3 = [
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
  ], n3 = [
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
    return _ = _ >>> 0, b3().subarray(_ / 4, _ / 4 + e);
  }
  function a3(_, e) {
    return _ = _ >>> 0, i3().subarray(_ / 2, _ / 2 + e);
  }
  function Y(_, e) {
    return _ = _ >>> 0, f3().subarray(_ / 4, _ / 4 + e);
  }
  function o3(_, e) {
    return _ = _ >>> 0, u3().subarray(_ / 1, _ / 1 + e);
  }
  function c3(_, e) {
    return _ = _ >>> 0, d3().subarray(_ / 2, _ / 2 + e);
  }
  function xe(_, e) {
    return _ = _ >>> 0, g3().subarray(_ / 4, _ / 4 + e);
  }
  function s_(_, e) {
    return _ = _ >>> 0, le().subarray(_ / 1, _ / 1 + e);
  }
  let se = null;
  function M() {
    return (se === null || se.buffer.detached === true || se.buffer.detached === void 0 && se.buffer !== i.memory.buffer) && (se = new DataView(i.memory.buffer)), se;
  }
  let Ee = null;
  function b3() {
    return (Ee === null || Ee.byteLength === 0) && (Ee = new Float32Array(i.memory.buffer)), Ee;
  }
  let Oe = null;
  function s3() {
    return (Oe === null || Oe.byteLength === 0) && (Oe = new Float64Array(i.memory.buffer)), Oe;
  }
  let Ge = null;
  function i3() {
    return (Ge === null || Ge.byteLength === 0) && (Ge = new Int16Array(i.memory.buffer)), Ge;
  }
  let We = null;
  function f3() {
    return (We === null || We.byteLength === 0) && (We = new Int32Array(i.memory.buffer)), We;
  }
  let ze = null;
  function u3() {
    return (ze === null || ze.byteLength === 0) && (ze = new Int8Array(i.memory.buffer)), ze;
  }
  function A(_, e) {
    return w3(_ >>> 0, e);
  }
  let Ue = null;
  function d3() {
    return (Ue === null || Ue.byteLength === 0) && (Ue = new Uint16Array(i.memory.buffer)), Ue;
  }
  let qe = null;
  function g3() {
    return (qe === null || qe.byteLength === 0) && (qe = new Uint32Array(i.memory.buffer)), qe;
  }
  let je = null;
  function le() {
    return (je === null || je.byteLength === 0) && (je = new Uint8Array(i.memory.buffer)), je;
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
  function He(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return s3().set(_, t / 8), C = _.length, t;
  }
  function W(_, e, t) {
    if (t === void 0) {
      const c = Se.encode(_), b = e(c.length, 1) >>> 0;
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
      const c = le().subarray(n + o, n + r), b = Se.encodeInto(_, c);
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
  const p3 = 2146435072;
  let w_ = 0;
  function w3(_, e) {
    return w_ += e, w_ >= p3 && (n_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), n_.decode(), w_ = e), n_.decode(le().subarray(_, _ + e));
  }
  const Se = new TextEncoder();
  "encodeInto" in Se || (Se.encodeInto = function(_, e) {
    const t = Se.encode(_);
    return e.set(t), {
      read: _.length,
      written: t.length
    };
  });
  let C = 0, i;
  function l3(_) {
    i = _;
  }
  URL = globalThis.URL;
  const m3 = await O_({
    "./proteus_host_web_bg.js": {
      __wbg_call_5575218572ead796: us,
      __wbg_next_0c4066e251d2eff9: Fd,
      __wbg_done_b62d4a7d2286852a: Ni,
      __wbg_value_49f783bb59765962: r2,
      __wbg_length_c6054974c0a6cdb9: Cu,
      __wbg_get_unchecked_54a4374c38e08460: cu,
      __wbg_instanceof_Map_afa18d5840c04c15: xu,
      __wbg_new_typed_00a409eb4ec4f2d9: Dd,
      __wbg_then_05edfc8a4fea5106: w1,
      __wbg_get_197a3fe98f169e38: nu,
      __wbg_new_227d7c05414eb861: $d,
      __wbg_stack_3b0d974bbf31e44f: kw,
      __wbg_error_a6fa202b58aa1cd3: gf,
      __wbg_push_f724b5db8acf89d2: Ud,
      __wbg_proteusapp_new: Wd,
      __wbg_call_0e855b388e315e17: fs,
      __wbg_call_8e98ed2f3c86c4b5: ds,
      __wbg_set_dc601f4a69da0bc2: ng,
      __wbg_get_with_ref_key_6412cf3094599694: bu,
      __wbg_set_6be42768c690e380: S0,
      __wbg_String_8564e559799eccda: ob,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: hu,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: bd,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: sd,
      __wbg_maxTextureDimension3D_06ee54121b37d431: id,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: cd,
      __wbg_maxBindGroups_14611ac9ed1c6b56: zu,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: Uu,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: ed,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: Zu,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: td,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: rd,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: ad,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: od,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: ud,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: fd,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: nd,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: pd,
      __wbg_maxBufferSize_f7ce3e1856349d2f: qu,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: dd,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: gd,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: _d,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: md,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: ld,
      __wbg_maxColorAttachments_fd9187f9f786da18: Hu,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: ju,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: Xu,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: Ku,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: Nu,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: Ju,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: Qu,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: Yu,
      __wbg_description_18d0a6d4077fec8e: Gi,
      __wbg_set_dst_factor_1ed75271a89a711e: xg,
      __wbg_set_operation_b5862f5a1a143b30: Sp,
      __wbg_set_src_factor_1c4f755f8676df1b: Up,
      __wbg_set_texture_16d2be474ce6ad0c: rw,
      __wbg_set_mip_level_246db61be15bdd69: dp,
      __wbg_set_x_56f0c2c08a62725c: Iw,
      __wbg_set_y_04fb8ce84735b4e1: Dw,
      __wbg_set_z_a51316db27a4941e: Tw,
      __wbg_set_origin_9b3b0fbe0a5dc469: Ap,
      __wbg_set_aspect_77332ac136ee94eb: C0,
      __wbg_Window_a07901001eb4269f: cb,
      __wbg_gpu_a7c12045c25d009a: su,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: bb,
      __wbg_set_a_5f6e488475272136: A0,
      __wbg_set_b_688365d692bba214: E0,
      __wbg_set_g_d4d1d77cf8fdd362: Eg,
      __wbg_set_r_527e5a41c4b1a846: Bp,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: mu,
      __wbg_queue_65d985f3e6d786a6: Jd,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: Dp,
      __wbg_requestAdapter_9ff5c9d1ff271165: n0,
      __wbg_set_required_limits_3b031f66f838f4e3: kp,
      __wbg_set_required_features_54918de8185c5fab: Pp,
      __wbg_set_label_bae57fb9f24fde5c: Jg,
      __wbg_requestDevice_c1c34f88a477e509: c0,
      __wbg_limits_50a8c5e629dbfe40: Lu,
      __wbg_info_22dcf1fd1b12bc7d: pu,
      __wbg_set_size_41cd9255ca1e4242: Wp,
      __wbg_set_usage_908213a4d4bb8bde: uw,
      __wbg_set_mapped_at_creation_48de4735fab51e78: bp,
      __wbg_set_label_cd567b7b35838e4c: Yg,
      __wbg_createBuffer_2f08c0205e04efca: qs,
      __wbg_set_address_mode_u_a37cf1035585c638: D0,
      __wbg_set_address_mode_v_8ac049e029caef76: T0,
      __wbg_set_address_mode_w_eb9260ee11729e92: F0,
      __wbg_set_compare_42211fbf15e3b850: _g,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: ap,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: op,
      __wbg_set_mag_filter_69d846b974d4bcc0: cp,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: up,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: wp,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: ip,
      __wbg_set_label_dcd98efbb9370da8: ep,
      __wbg_createSampler_248bd67c920af37d: ti,
      __wbg_set_width_1a5e2e86fa5bdcd8: vw,
      __wbg_set_height_e8b5483b8c117d5e: Wg,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: ug,
      __wbg_set_format_e9d4b1475bb3bd3b: Rg,
      __wbg_set_size_a61ff22205255d61: zp,
      __wbg_set_usage_7fa9cd18d1104aca: fw,
      __wbg_set_label_0c1bd0e976cf0a9a: qg,
      __wbg_set_dimension_36e13ccecae5af4b: yg,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: pp,
      __wbg_set_sample_count_865e1d19b84e27e6: Vp,
      __wbg_set_view_formats_bab284fc81b40e70: hw,
      __wbg_createTexture_9e76b80a2dc0d12e: si,
      __wbg_set_entries_fc76ca4d7da6a709: Sg,
      __wbg_set_layout_eeef59714f5bf48b: rp,
      __wbg_set_label_f92ae11c77d74198: _p,
      __wbg_createBindGroup_2320df4db188406c: zs,
      __wbg_set_code_56e2d45ec1ff6c2d: X0,
      __wbg_set_label_be45aed56e4b9fee: Qg,
      __wbg_createShaderModule_53701de4fb271c90: ni,
      __wbg_set_label_d1c24b5a7a3ac31d: Zg,
      __wbg_createCommandEncoder_cd88faca35d9ed68: Hs,
      __wbg_set_bind_group_layouts_5325d038771af328: z0,
      __wbg_set_label_2f592bd1be3db6b3: Kg,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: Js,
      __wbg_set_module_14e471fdd94c582d: mp,
      __wbg_set_entry_point_8db3b6d103e3b865: Ig,
      __wbg_set_buffers_85a7238f4ef28ab4: N0,
      __wbg_set_layout_7c5ba5bdcde8a0f0: tp,
      __wbg_set_vertex_a4951dd9a7a4ed54: gw,
      __wbg_set_label_c47c451211e2f6d2: Xg,
      __wbg_set_format_f9341112e43ea182: Cg,
      __wbg_set_depth_compare_30e9ea552da12fe2: sg,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: lg,
      __wbg_set_depth_bias_428c9340b0fd937b: ag,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: og,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: cg,
      __wbg_set_compare_1509dc1a5420943f: eg,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: ig,
      __wbg_set_fail_op_77ab26c98f847b65: Tg,
      __wbg_set_pass_op_e9470d1262fb8a8b: Ip,
      __wbg_set_stencil_back_6ef4683123b19b25: qp,
      __wbg_set_stencil_front_aeb8580a97e5424b: Hp,
      __wbg_set_stencil_read_mask_2954f260d47349ea: Np,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: Xp,
      __wbg_set_depth_stencil_1bd50dbc450c8650: gg,
      __wbg_set_module_08ad08e736d8edbf: lp,
      __wbg_set_targets_6b0b3bdd87f35668: tw,
      __wbg_set_entry_point_6fec5723cc790927: Ag,
      __wbg_set_fragment_1a595620425637e1: Vg,
      __wbg_set_count_26a934d1cd07d080: tg,
      __wbg_set_mask_0c49a66362fc0079: sp,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: k0,
      __wbg_set_multisample_85f073947b782d07: hp,
      __wbg_set_cull_mode_9d466c1ab414cac8: rg,
      __wbg_set_front_face_50cdf4eb61504a46: Lg,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: _w,
      __wbg_set_topology_beefb3aca0612b00: ow,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: sw,
      __wbg_set_primitive_369241acd17871f1: Tp,
      __wbg_createRenderPipeline_f48187ba9f7701e8: Zs,
      __wbg_set_entries_3017e6132f938c6e: vg,
      __wbg_set_label_1175a3329a06e52b: jg,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: Ws,
      __wbg_limits_1c25cb4f379a4418: Vu,
      __wbg_set_color_attachments_abe67f6631926e28: Y0,
      __wbg_set_label_8fd860a36d2c7b74: Ng,
      __wbg_set_view_dbd0294573f64d05: ww,
      __wbg_set_depth_clear_value_442bf492734f63b6: bg,
      __wbg_set_depth_load_op_34d430b74bb36d91: fg,
      __wbg_set_depth_store_op_0ea0a215313dbda7: wg,
      __wbg_set_depth_read_only_138a11b10c731094: dg,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: jp,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: Kp,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: Qp,
      __wbg_set_stencil_read_only_fb489d191b6d969b: Jp,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: pg,
      __wbg_set_query_set_18679a8580267d5a: Fp,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: W0,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: $g,
      __wbg_set_timestamp_writes_c552d52fbb417005: aw,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: kb,
      __wbg_copyTextureToTexture_1be188df1e535c0a: Gs,
      __wbg_label_47480289cc2bce71: Mu,
      __wbg_set_label_2d2227f4d5991e50: Hg,
      __wbg_finish_cfaeede3baf55be1: lf,
      __wbg_finish_087cb89c65c06eb1: wf,
      __wbg_drawIndexed_68637ebab6dd8d6e: rf,
      __wbg_setPipeline_bab24dbce96903b9: m0,
      __wbg_setViewport_f9d423db4f4b4b58: x0,
      __wbg_setBindGroup_4ba56e1e0d26f244: g0,
      __wbg_setBindGroup_6124849cc8547086: p0,
      __wbg_setIndexBuffer_17431786d06c1b7c: w0,
      __wbg_setIndexBuffer_a16ed5b869c87507: l0,
      __wbg_setVertexBuffer_b508baf8d0ffe331: y0,
      __wbg_setVertexBuffer_91c4b602d0289943: h0,
      __wbg_end_414453a89205612c: sf,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: zf,
      __wbg_getCurrentTexture_51975ae7185fd15f: Cf,
      __wbg_set_device_0d774b66e7288f72: mg,
      __wbg_set_format_d347899cd860709c: Mg,
      __wbg_set_usage_ae014e77ff77ce06: dw,
      __wbg_set_alpha_mode_92402195b3ae1ee7: P0,
      __wbg_set_view_formats_fe531a043efb71fa: yw,
      __wbg_configure_3d64c677c7d68a15: Rs,
      __wbg_writeBuffer_b4bdd36178348ca5: g2,
      __wbg_set_bytes_per_row_91681ca78d744888: J0,
      __wbg_set_rows_per_image_d198b7e73a38978b: Cp,
      __wbg_set_offset_a097a8050a3a9a33: vp,
      __wbg_writeTexture_b45b69132e46a227: p2,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: Cd,
      __wbg_submit_1290d44bb76ecef4: jw,
      __wbg_getMappedRange_5ed22727c9679168: Of,
      __wbg_unmap_8f06698a75b8331a: e2,
      __wbg_destroy_b5b39f25f0799295: Wi,
      __wbg_mapAsync_bb0029907dd91181: Wu,
      __wbg_set_dimension_174ad7e2fb67fb4e: hg,
      __wbg_set_format_90860b0321868db4: Pg,
      __wbg_set_aspect_a823a14d00d42d37: V0,
      __wbg_set_base_array_layer_cc6c68d233489c4b: O0,
      __wbg_set_array_layer_count_daec613068108a9d: M0,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: G0,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: gp,
      __wbg_set_label_03d2396d4655a3e1: Ug,
      __wbg_set_usage_7f0dda8309469b1c: iw,
      __wbg_createView_cc96b5bdd3d5bf5e: ui,
      __wbg_set_min_binding_size_689661b9ed25e083: fp,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: Og,
      __wbg_set_type_38961e08504ca674: cw,
      __wbg_requestAdapter_c46930b8bc33722d: a0,
      __wbg_set_alpha_aa2e606e9e647b21: B0,
      __wbg_set_color_bc393d7efc3c8594: Z0,
      __wbg_set_visibility_1bca121a89accba5: xw,
      __wbg_set_storage_texture_ab9eed9786337ef0: Zp,
      __wbg_set_external_texture_825fe2bc7a0c0603: Dg,
      __wbg_set_binding_b6b0fe5c281b8c69: U0,
      __wbg_set_buffer_e89095a9f0cafad3: K0,
      __wbg_set_sampler_8c5d7fb1b02058c6: Ep,
      __wbg_set_texture_e25a73da75cf5808: nw,
      __wbg_set_view_dimension_263387976511ebc9: lw,
      __wbg_set_format_1786adb7bc74c7c9: Fg,
      __wbg_set_access_091f317905cd76a5: I0,
      __wbg_set_format_abf7a1bc5425c56a: kg,
      __wbg_set_blend_8d6e9c08b5702a09: j0,
      __wbg_set_write_mask_144b25e2bd909124: Aw,
      __wbg_set_load_op_56844f51434037bf: np,
      __wbg_set_store_op_caeede4654b3d847: ew,
      __wbg_set_view_bdeab150b5f0768c: pw,
      __wbg_set_clear_value_642701f928a5ccb3: Q0,
      __wbg_set_resolve_target_fe76b3f99cf72078: Mp,
      __wbg_set_buffer_55f096330c8912b4: H0,
      __wbg_set_offset_73156b0e0b41d79a: xp,
      __wbg_set_size_1e6281b07cd39177: Gp,
      __wbg_set_binding_f3c188a8cd21455b: q0,
      __wbg_set_resource_fe385d2e3dadaf63: Rp,
      __wbg_set_format_6606f5c1fba6f459: Bg,
      __wbg_set_offset_8d9d9afffa18b591: $p,
      __wbg_set_shader_location_0ff30a733291a396: Op,
      __wbg_set_array_stride_c2c009eabc18b5f6: R0,
      __wbg_set_attributes_05f9117fd32ca606: L0,
      __wbg_set_step_mode_a35aef328761c452: Yp,
      __wbg_set_type_c1eebc19f8a6aeb9: bw,
      __wbg_set_multisampled_40505c1381e1c32c: yp,
      __wbg_set_sample_type_7088b1efddce6a69: Lp,
      __wbg_set_view_dimension_3ed01b237e85826f: mw,
      __wbg_includes_83dff8d05da243c5: gu,
      __wbg_clearBufferuiv_1d2d93401c0904a3: ws,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: Bs,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: ks,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: Ms,
      __wbg_copyBufferSubData_a944f33b601b822d: Vs,
      __wbg_clientWaitSync_7580165bd2eff461: vs,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: Ps,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: Os,
      __wbg_createQuery_f013132b870a71ef: Ys,
      __wbg_createSampler_9fe50152a2524319: ri,
      __wbg_createVertexArray_8685feb21901c932: fi,
      __wbg_deleteQuery_ef51ea0a52420103: vi,
      __wbg_deleteSampler_5c045e0cc55813d4: Ii,
      __wbg_getIndexedParameter_2b18df6fca85f751: Ef,
      __wbg_getQueryParameter_0599e85ddb81220b: Kf,
      __wbg_getSyncParameter_9a2bda340ebe166f: eu,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: _u,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: Iu,
      __wbg_deleteSync_37ca83c429c43d8a: Fi,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: Mi,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: Qi,
      __wbg_drawBuffers_558d96e52e754731: ef,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: tf,
      __wbg_endQuery_161170c5280a8293: bf,
      __wbg_fenceSync_56efc7cc79111e54: pf,
      __wbg_framebufferTextureLayer_2312acdc74f97676: Af,
      __wbg_getBufferSubData_92680d3a2f7be029: Bf,
      __wbg_readBuffer_361ec5474f3aae49: Qd,
      __wbg_readPixels_5840000f3e22f3ce: Yd,
      __wbg_readPixels_5bf204799ed2272f: Zd,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: e0,
      __wbg_texImage3D_8647ef58aef5b912: Qw,
      __wbg_texStorage2D_ed5df596c5f1e3af: Zw,
      __wbg_texStorage3D_160b0197bc190f04: e1,
      __wbg_texSubImage2D_f03448e182b0820d: b1,
      __wbg_texSubImage2D_d14d9c0a1f627c31: c1,
      __wbg_texSubImage2D_89866a04ecd0a76b: n1,
      __wbg_texSubImage2D_5c630043f1c56716: r1,
      __wbg_samplerParameterf_3157ba41c0f4d97a: s0,
      __wbg_samplerParameteri_f85a29156e790189: i0,
      __wbg_texImage2D_0e0f37b9fb297d01: Hw,
      __wbg_texImage2D_0e537dc331652de3: Kw,
      __wbg_texImage3D_30dbf7234481b8f5: Jw,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: t1,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: a1,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: o1,
      __wbg_texSubImage3D_933e4cd41cc5376d: d1,
      __wbg_texSubImage3D_c3538b28040daac9: p1,
      __wbg_uniform1ui_36c94692177ebf76: v1,
      __wbg_uniform2fv_17592f4dad9798fb: S1,
      __wbg_uniform2iv_d5d29ebbc466977d: D1,
      __wbg_texSubImage3D_0fdbd843482bb916: i1,
      __wbg_texSubImage3D_09a97a968b93253d: s1,
      __wbg_texSubImage3D_355efde0dc047913: f1,
      __wbg_texSubImage3D_bd32c8e29e470904: g1,
      __wbg_texSubImage3D_5a238709d114b609: u1,
      __wbg_uniform2uiv_418ba3bf6a230dd5: T1,
      __wbg_uniform4fv_9e670a001c77dca0: L1,
      __wbg_uniform4iv_1d57c6b8e5c0e447: E1,
      __wbg_uniform3fv_dbe44b778e6b89e8: B1,
      __wbg_uniform3iv_d75d3a5f86d54be4: k1,
      __wbg_uniform3uiv_71c1efc24a662de9: M1,
      __wbg_uniform4uiv_c5d45f5dbdae727a: G1,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: H1,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: N1,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: J1,
      __wbg_uniformBlockBinding_829a71912ad79a04: W1,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: z1,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: q1,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: j1,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: Q1,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: o2,
      __wbg_activeTexture_525ee3068cb9e8d5: Ib,
      __wbg_attachShader_3477e67517b09b6b: Fb,
      __wbg_bindAttribLocation_79b5d26727094518: Mb,
      __wbg_bindBuffer_d3111de6861cb875: Vb,
      __wbg_bindFramebuffer_63e837a5dc0accfb: Ob,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: Gb,
      __wbg_bindTexture_7ab28ff4ff3dc506: Ub,
      __wbg_blendColor_15f26633b646e542: Kb,
      __wbg_blendEquation_7dadb4db540a42da: Xb,
      __wbg_blendEquationSeparate_8240ddfa32266109: Jb,
      __wbg_blendFunc_b15af02643e188f1: ts,
      __wbg_blendFuncSeparate_456410f9919bed39: es,
      __wbg_clear_dadcb3e2929388b0: xs,
      __wbg_clearDepth_05c17028494ee4dd: ls,
      __wbg_clearStencil_917833d1e2ac56e4: ys,
      __wbg_colorMask_f111e3e5796458f4: Is,
      __wbg_compileShader_f5625b583b2c9fd6: Ds,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: Y1,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: Z1,
      __wbg_vertexAttribDivisor_f17a8585267be92f: a2,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: Ls,
      __wbg_createBuffer_9f602b2dbcbf409c: js,
      __wbg_createFramebuffer_4a250944a4542bbc: Ks,
      __wbg_createProgram_4c8164d471c10346: Qs,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: _i,
      __wbg_createShader_9c5cd42709d915ff: oi,
      __wbg_createTexture_3eed23cb87dd35fc: ci,
      __wbg_cullFace_94f24b4fd5e9038b: pi,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: li,
      __wbg_getExtension_11824edd67a143d8: Lf,
      __wbg_getParameter_7f7f23cae98f2c81: Gf,
      __wbg_getProgramInfoLog_cd84be80942f345b: qf,
      __wbg_getProgramParameter_039391d5ba319f50: jf,
      __wbg_getShaderInfoLog_495bddda98172699: Nf,
      __wbg_getShaderParameter_4eb65cfb174ceb22: Qf,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: Yf,
      __wbg_getUniformLocation_ab63f569a4e41744: ru,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: hi,
      __wbg_deleteProgram_eff668280dcb01ca: $i,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: Ai,
      __wbg_deleteShader_3339454254c7147c: Di,
      __wbg_deleteTexture_c1c58550dc55af5c: Pi,
      __wbg_depthFunc_31b183b5b8ee478e: Ri,
      __wbg_depthMask_cab7f2ae7f0e559c: Li,
      __wbg_depthRange_797a71ba3b79267a: Ei,
      __wbg_disable_cb1b3e6c1cee5202: Hi,
      __wbg_disableVertexAttribArray_b395358ec5084c39: qi,
      __wbg_drawArrays_42dbb4b0349c8f34: Yi,
      __wbg_enable_d1f42f78be33a553: cf,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: nf,
      __wbg_flush_7ae42f071230db6b: mf,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: $f,
      __wbg_framebufferTexture2D_367ab597a005e8d9: vf,
      __wbg_frontFace_9bdcf2a758e989e5: Df,
      __wbg_linkProgram_e23a348b0f6e0c4f: Ou,
      __wbg_pixelStorei_a78a504be58d1d0a: Ld,
      __wbg_polygonOffset_a4f07d97b9b0dced: Od,
      __wbg_renderbufferStorage_3049e13db5c4e60e: t0,
      __wbg_scissor_6c024669fbf4fe72: f0,
      __wbg_vertexAttribPointer_4e5d289c5d224210: b2,
      __wbg_viewport_a0ca330f9b85397e: s2,
      __wbg_shaderSource_66dce75b25a1a407: Bw,
      __wbg_stencilFuncSeparate_ec603976be9569a4: Ew,
      __wbg_stencilMask_485dcb5965c79a71: Ww,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: Gw,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: Uw,
      __wbg_texParameteri_c6efffcecb474d2f: Xw,
      __wbg_uniform1f_3acd3f3eb50b5e11: h1,
      __wbg_uniform1i_e4f13604354c28ae: $1,
      __wbg_uniform4f_a5008773cfb47d1a: C1,
      __wbg_useProgram_ab2ee2a13a1fd909: t2,
      __wbg_bufferSubData_2270f1b9db71e642: bs,
      __wbg_clearBufferfv_6b77b9402254a2bf: gs,
      __wbg_clearBufferiv_0f056544010eef3e: ps,
      __wbg_beginQuery_dad334d972fed3cc: Pb,
      __wbg_bindBufferRange_16a9d90becc2a7d7: Cb,
      __wbg_bindSampler_3c7002cb6d56ae8f: zb,
      __wbg_bindVertexArray_c391bd47303d75cd: Hb,
      __wbg_blitFramebuffer_ea96ada8bba07582: rs,
      __wbg_bufferData_64e9905f2b3d3a6f: os,
      __wbg_bufferData_99bbbc63f02251c4: cs,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: Su,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: o0,
      __wbg_navigator_935098efd1dc7fe5: yd,
      __wbg_devicePixelRatio_8e5ca44720abafec: zi,
      __wbg_document_2634180a4c694068: Ki,
      __wbg_instanceof_Window_0d356b88a2f77c42: Au,
      __wbg_hidden_cb32701ca3785fea: du,
      __wbg_getElementById_c7aba6b93b34bf01: Vf,
      __wbg_querySelector_1f3658f4b48e268b: Hd,
      __wbg_querySelectorAll_ffda3c891a9eb29a: jd,
      __wbg_hasAttribute_73e1230c9c107e79: iu,
      __wbg_setAttribute_8bccfbabf2a83682: d0,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: Ff,
      __wbg_focus_c80921c19b28520b: yf,
      __wbg_uniform2iv_c5e863975dd780d8: I1,
      __wbg_uniform3fv_7723e142be50856f: F1,
      __wbg_uniform3iv_bea3976522e15d48: P1,
      __wbg_uniform4fv_85ad5d23234895d2: V1,
      __wbg_clear_ff8cfdf420f7dde6: $s,
      __wbg_clearDepth_ac6b54f112feeaf7: ms,
      __wbg_clearStencil_56d6a6308294a749: hs,
      __wbg_colorMask_b0ab9d429a1efa0a: As,
      __wbg_compileShader_fcf3f3d2891f73f9: Ts,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: Es,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: Us,
      __wbg_createFramebuffer_ab73f30b5dc97415: Ns,
      __wbg_createProgram_f11c63f59f41b82a: Xs,
      __wbg_createRenderbuffer_556000dbb01f5026: ei,
      __wbg_createShader_27d9388313f3b14e: ai,
      __wbg_createTexture_8455c703424c567b: bi,
      __wbg_cullFace_774780fb4177aab8: gi,
      __wbg_deleteBuffer_d758283bea6e0ccf: mi,
      __wbg_deleteFramebuffer_8953b325144192fe: yi,
      __wbg_deleteProgram_0135c6926e75af75: xi,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: Si,
      __wbg_deleteShader_79dbaaed69b7ca3b: Ti,
      __wbg_deleteTexture_3acb672a45f9998a: Bi,
      __wbg_depthFunc_eaca1bc79f7bf216: Ci,
      __wbg_depthMask_3a9074b08d1f68e5: Vi,
      __wbg_depthRange_c24a808b3496e0a9: Oi,
      __wbg_uniform4iv_a9aaa92f2f458ec2: O1,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: U1,
      __wbg_uniformMatrix3fv_da8c388748c5739b: K1,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: X1,
      __wbg_activeTexture_1d5359b20df41710: Ab,
      __wbg_attachShader_683d1070365e7066: Bb,
      __wbg_bindAttribLocation_d56d3c40331af7ed: Rb,
      __wbg_bindBuffer_e95efaf0d4851845: Lb,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: Eb,
      __wbg_bindRenderbuffer_d608b211c51ed147: Wb,
      __wbg_bindTexture_ffc56f1e5c5526c6: qb,
      __wbg_blendColor_a0ba1cdcecc3a34c: Nb,
      __wbg_blendEquation_8bfa69f639ae92da: Yb,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: Qb,
      __wbg_blendFunc_713c504adab14f98: _s,
      __wbg_blendFuncSeparate_3eef699c291dbc87: Zb,
      __wbg_disable_4dca6ee0ccc91e4a: ji,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: Ui,
      __wbg_drawArrays_10e1254aa4524ae9: Xi,
      __wbg_enable_c6e523307311617a: of,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: af,
      __wbg_flush_eb3fb8da2ec00d57: hf,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: xf,
      __wbg_linkProgram_6a2eee02a03b9b00: Eu,
      __wbg_pixelStorei_55ad4c67b699537c: Vd,
      __wbg_polygonOffset_06dc6468c12a57e1: Ed,
      __wbg_renderbufferStorage_2918fb696fd45663: _0,
      __wbg_scissor_f9696c630e464977: u0,
      __wbg_shaderSource_628c37a476ae65f9: Fw,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: Lw,
      __wbg_stencilMask_f9fe198f7fd6fc9c: zw,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: Ow,
      __wbg_stencilOpSeparate_6cf50803475d2640: qw,
      __wbg_texParameteri_fe6210a493d48a16: Yw,
      __wbg_framebufferTexture2D_3a558e14f56720d2: Sf,
      __wbg_frontFace_c9bb1fa659ffd276: Tf,
      __wbg_getParameter_91a344e1a84a4669: Wf,
      __wbg_getProgramInfoLog_35410850de9ccefe: Uf,
      __wbg_getProgramParameter_bbc667347ac2e882: Hf,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: Jf,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: Xf,
      __wbg_getUniformLocation_340155dc706d3fea: tu,
      __wbg_uniform1f_d34e4b454f7c8e73: y1,
      __wbg_uniform1i_cd9a7f990128ea48: x1,
      __wbg_uniform4f_4410d2faaa7e5dda: R1,
      __wbg_useProgram_0e1cd86765304939: _2,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: c2,
      __wbg_viewport_b5bd46a0d111c83c: i2,
      __wbg_texSubImage2D_1b2ff28f994c325e: _1,
      __wbg_uniform2fv_39277cf2d3cb83c7: A1,
      __wbg_bufferData_5df9bdb32e189eee: as,
      __wbg_bufferData_26132561617ce8fb: ns,
      __wbg_bufferSubData_44db8a3b4a70b57d: ss,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: Fs,
      __wbg_readPixels_05377f8b6fa1d8eb: Xd,
      __wbg_texImage2D_7bc3001cb8602ed2: Nw,
      __wbg_navigator_017bc45e84c473cc: hd,
      __wbg_log_d282446d03691e72: Gu,
      __wbg_info_a392cd5b7536cfb5: wu,
      __wbg_warn_88c4a5bd9a322000: f2,
      __wbg_debug_7271beced8b71cd4: wi,
      __wbg_error_933f449d72fef598: df,
      __wbg_error_50f60c611a3dcf64: uf,
      __wbg_set_width_031bdecd763c5855: $w,
      __wbg_set_height_ad5056ea051acd78: Gg,
      __wbg_getContext_486aab500e1c34c9: kf,
      __wbg_getContext_9fd4db9b1cf155db: Rf,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: yu,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: Zi,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: Zf,
      __wbg_width_a86bcd32bd998060: d2,
      __wbg_height_cd732bbdc7b66e49: fu,
      __wbg_queryCounterEXT_ebb00bcc96221671: qd,
      __wbg_offsetX_0214819d43aaf6d5: Md,
      __wbg_offsetY_f18f571e33b385ab: Rd,
      __wbg_button_bb3285fcdf965178: is,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: Ji,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: _f,
      __wbg_get_37b48b8fa52d1f2c: au,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: n2,
      __wbg_preventDefault_c047d3e292b08cc4: Gd,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: If,
      __wbg_width_08e66520b99071f4: u2,
      __wbg_height_e9afb506f31052a9: uu,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: jb,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: ii,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: ki,
      __wbg_set_width_f9e631f4ee129e5c: Sw,
      __wbg_set_height_ef298446b359b0c5: zg,
      __wbg_getContext_70c2d1bed75d4122: Mf,
      __wbg_getContext_422b32d0ee4b8076: Pf,
      __wbg_addEventListener_ea90bc131475777e: Db,
      __wbg_contentRect_0fb8c8900d689a0c: Cs,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: $u,
      __wbg_new_1e52e3c919312525: xd,
      __wbg_observe_592b94857eed8e27: Pd,
      __wbg_altKey_7412dd64f8c921c7: Tb,
      __wbg_ctrlKey_00097886a21597a7: di,
      __wbg_shiftKey_273ee8c901267b55: Pw,
      __wbg_metaKey_1c2847b62ad062c1: wd,
      __wbg_repeat_46a5c90df9f6ef0b: r0,
      __wbg_isComposing_e3709163a95a2477: Tu,
      __wbg_key_d6b3d2cce3d41872: ku,
      __wbg_code_87bb99fdec02d313: Ss,
      __wbg_resolve_d82363d90af6928a: b0,
      __wbg_then_591b6b3a75ee817a: m1,
      __wbg_iterator_cc47ba25a2be735a: Pu,
      __wbg_get_9a29be2cb383ed9a: ou,
      __wbg_next_402fa10b59ab20c3: Bd,
      __wbg_new_2e117a478906f062: vd,
      __wbg_new_36e147a8ced3c6e0: Sd,
      __wbg_of_62183ea089c00bfa: kd,
      __wbg_isArray_145a34fd0a38d37b: Du,
      __wbg_new_e66a4b7758dd2e5c: Id,
      __wbg_isSafeInteger_a3389a198582f5f6: Fu,
      __wbg_is_de5b366c746e004c: Bu,
      __wbg_entries_c261c3fa1f281256: ff,
      __wbg_then_2a84678a50976959: l1,
      __wbg_length_589238bdcf171f0e: Ru,
      __wbg_prototypesetcall_d721637c7ca66eb8: zd,
      __wbg_set_272b80acaf9a75e8: $0,
      __wbg_new_81880fb5002cb255: Ad,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: Td,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: Mw,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: Cw,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Rw,
      __wbg_static_accessor_WINDOW_168f178805d978fe: Vw,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: lu,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: vu,
      __wbg_queueMicrotask_1c9b3800e321a967: Kd,
      __wbg_queueMicrotask_311744e534a929a3: Nd,
      __wbg_set_4564f7dc44fcb0c9: v0,
      __wbg___wbindgen_number_get_1cc01dd708740256: xb,
      __wbg___wbindgen_in_4990f46af709e33c: ub,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: vb,
      __wbg___wbindgen_is_null_6d937fbfb6478470: pb,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: hb,
      __wbg_Number_c4bdf66bb78f7977: ab,
      __wbg_Error_fdd633d4bb5dd76a: nb,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: db,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: wb,
      __wbg___wbindgen_is_string_1fca8072260dd261: lb,
      __wbg___wbindgen_string_get_71bb4348194e31f0: $b,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: ib,
      __wbg___wbindgen_is_function_acc5528be2b923f2: gb,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: mb,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: yb,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: sb,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: Sb,
      __wbg___wbindgen_debug_string_8a447059637473e2: fb,
      __wbindgen_init_externref_table: C2,
      __wbindgen_cast_0000000000000001: w2,
      __wbindgen_cast_0000000000000002: l2,
      __wbindgen_cast_0000000000000003: m2,
      __wbindgen_cast_0000000000000004: h2,
      __wbindgen_cast_0000000000000005: y2,
      __wbindgen_cast_0000000000000006: x2,
      __wbindgen_cast_0000000000000007: $2,
      __wbindgen_cast_0000000000000008: v2,
      __wbindgen_cast_0000000000000009: S2,
      __wbindgen_cast_000000000000000a: A2,
      __wbindgen_cast_000000000000000b: I2,
      __wbindgen_cast_000000000000000c: D2,
      __wbindgen_cast_000000000000000d: T2,
      __wbindgen_cast_000000000000000e: F2,
      __wbindgen_cast_000000000000000f: B2,
      __wbindgen_cast_0000000000000010: P2,
      __wbindgen_cast_0000000000000011: k2,
      __wbindgen_cast_0000000000000012: M2,
      __wbindgen_cast_0000000000000013: R2
    }
  }, tb), { memory: h3, mount: y3, __wbg_proteusapp_free: x3, proteusapp_addChild: $3, proteusapp_animateTo: v3, proteusapp_bakeTexture: S3, proteusapp_bakedImageSize: A3, proteusapp_bakedTextSize: I3, proteusapp_bindKey: D3, proteusapp_channelDestroy: T3, proteusapp_channelSet: F3, proteusapp_clearFocus: B3, proteusapp_component: P3, proteusapp_copyBakedImageFrom: k3, proteusapp_createVideo: M3, proteusapp_cropImage: R3, proteusapp_declareGeometry: C3, proteusapp_declaredGeometry: V3, proteusapp_destroy: L3, proteusapp_devices: E3, proteusapp_focus: O3, proteusapp_focused: G3, proteusapp_freeResources: W3, proteusapp_get: z3, proteusapp_hideVideo: U3, proteusapp_inputDevices: q3, proteusapp_isFocused: j3, proteusapp_loadTexture: H3, proteusapp_mergeFrom: K3, proteusapp_mergeFromWithBehavior: N3, proteusapp_new: J3, proteusapp_onAppKey: Q3, proteusapp_onBlur: X3, proteusapp_onClick: Y3, proteusapp_onDrag: Z3, proteusapp_onDropped: el, proteusapp_onFocus: _l, proteusapp_onFocusLost: tl, proteusapp_onHoverEnter: rl, proteusapp_onHoverExit: nl, proteusapp_onKey: al, proteusapp_onPress: ol, proteusapp_onRelease: cl, proteusapp_onTransitionComplete: bl, proteusapp_pointerLeft: sl, proteusapp_pointerMoved: il, proteusapp_pointerPressed: fl, proteusapp_pointerReleased: ul, proteusapp_releaseVideo: dl, proteusapp_removeChild: gl, proteusapp_resetKeyMap: pl, proteusapp_setDeclaredGeometry: wl, proteusapp_setDefaultFocus: ll, proteusapp_setDevices: ml, proteusapp_setDisabled: hl, proteusapp_setImage: yl, proteusapp_setInputDevices: xl, proteusapp_setInteractive: $l, proteusapp_setKeyRepeat: vl, proteusapp_setLongPressMs: Sl, proteusapp_setOpacity: Al, proteusapp_setText: Il, proteusapp_setTexture: Dl, proteusapp_setTransitionInteraction: Tl, proteusapp_setVideoCrossfade: Fl, proteusapp_setVisible: Bl, proteusapp_showVideo: Pl, proteusapp_splitTo: kl, proteusapp_splitToWithBehavior: Ml, proteusapp_splitToWithStates: Rl, proteusapp_texture: Cl, proteusapp_textureState: Vl, proteusapp_tick: Ll, proteusapp_transitionChannel: El, proteusapp_unbindKey: Ol, proteusapp_uploadVideoFrame: Gl, __wbg_handle_free: Wl, __wbg_texturehandle_free: zl, __wbg_transitionchannel_free: Ul, __wbg_videohandle_free: ql, handle_fromId: jl, handle_id: Hl, texturehandle_fromId: Kl, texturehandle_id: Nl, __abort_handler: Jl, __instance_terminated: Ql, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: Xl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Yl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: Zl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: e4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: _4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: t4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: r4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: n4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: a4, __wbindgen_malloc: o4, __wbindgen_realloc: c4, __wbindgen_exn_store: b4, __externref_table_alloc: s4, __wbindgen_externrefs: i4, __wbindgen_free: f4, __wbindgen_destroy_closure: u4, __externref_table_dealloc: d4, __wbindgen_start: zt } = m3, g4 = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: Jl,
    __externref_table_alloc: s4,
    __externref_table_dealloc: d4,
    __instance_terminated: Ql,
    __wbg_handle_free: Wl,
    __wbg_proteusapp_free: x3,
    __wbg_texturehandle_free: zl,
    __wbg_transitionchannel_free: Ul,
    __wbg_videohandle_free: ql,
    __wbindgen_destroy_closure: u4,
    __wbindgen_exn_store: b4,
    __wbindgen_externrefs: i4,
    __wbindgen_free: f4,
    __wbindgen_malloc: o4,
    __wbindgen_realloc: c4,
    __wbindgen_start: zt,
    handle_fromId: jl,
    handle_id: Hl,
    memory: h3,
    mount: y3,
    proteusapp_addChild: $3,
    proteusapp_animateTo: v3,
    proteusapp_bakeTexture: S3,
    proteusapp_bakedImageSize: A3,
    proteusapp_bakedTextSize: I3,
    proteusapp_bindKey: D3,
    proteusapp_channelDestroy: T3,
    proteusapp_channelSet: F3,
    proteusapp_clearFocus: B3,
    proteusapp_component: P3,
    proteusapp_copyBakedImageFrom: k3,
    proteusapp_createVideo: M3,
    proteusapp_cropImage: R3,
    proteusapp_declareGeometry: C3,
    proteusapp_declaredGeometry: V3,
    proteusapp_destroy: L3,
    proteusapp_devices: E3,
    proteusapp_focus: O3,
    proteusapp_focused: G3,
    proteusapp_freeResources: W3,
    proteusapp_get: z3,
    proteusapp_hideVideo: U3,
    proteusapp_inputDevices: q3,
    proteusapp_isFocused: j3,
    proteusapp_loadTexture: H3,
    proteusapp_mergeFrom: K3,
    proteusapp_mergeFromWithBehavior: N3,
    proteusapp_new: J3,
    proteusapp_onAppKey: Q3,
    proteusapp_onBlur: X3,
    proteusapp_onClick: Y3,
    proteusapp_onDrag: Z3,
    proteusapp_onDropped: el,
    proteusapp_onFocus: _l,
    proteusapp_onFocusLost: tl,
    proteusapp_onHoverEnter: rl,
    proteusapp_onHoverExit: nl,
    proteusapp_onKey: al,
    proteusapp_onPress: ol,
    proteusapp_onRelease: cl,
    proteusapp_onTransitionComplete: bl,
    proteusapp_pointerLeft: sl,
    proteusapp_pointerMoved: il,
    proteusapp_pointerPressed: fl,
    proteusapp_pointerReleased: ul,
    proteusapp_releaseVideo: dl,
    proteusapp_removeChild: gl,
    proteusapp_resetKeyMap: pl,
    proteusapp_setDeclaredGeometry: wl,
    proteusapp_setDefaultFocus: ll,
    proteusapp_setDevices: ml,
    proteusapp_setDisabled: hl,
    proteusapp_setImage: yl,
    proteusapp_setInputDevices: xl,
    proteusapp_setInteractive: $l,
    proteusapp_setKeyRepeat: vl,
    proteusapp_setLongPressMs: Sl,
    proteusapp_setOpacity: Al,
    proteusapp_setText: Il,
    proteusapp_setTexture: Dl,
    proteusapp_setTransitionInteraction: Tl,
    proteusapp_setVideoCrossfade: Fl,
    proteusapp_setVisible: Bl,
    proteusapp_showVideo: Pl,
    proteusapp_splitTo: kl,
    proteusapp_splitToWithBehavior: Ml,
    proteusapp_splitToWithStates: Rl,
    proteusapp_texture: Cl,
    proteusapp_textureState: Vl,
    proteusapp_tick: Ll,
    proteusapp_transitionChannel: El,
    proteusapp_unbindKey: Ol,
    proteusapp_uploadVideoFrame: Gl,
    texturehandle_fromId: Kl,
    texturehandle_id: Nl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: a4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: Xl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: _4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: t4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: r4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: n4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: Zl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: e4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Yl
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  l3(g4);
  zt();
  async function p4(_, e) {
    await rb(_, (t) => e.setup(new m4(t)), e.update ? (t) => {
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
  }, w4 = class {
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
  }, l4 = class {
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
  }, m4 = class {
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
      return new w4(this, this.wasmApp.transitionChannel(e == null ? void 0 : e.id()));
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
      return new l4(this, this.wasmApp.createVideo());
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
  const h4 = "" + new URL("proteus_bench_web_bg-DRFgwvjT.wasm", import.meta.url).href;
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
  class De {
    static __wrap(e) {
      const t = Object.create(De.prototype);
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
      const a = h_(r, s.__wbindgen_malloc), o = R, c = s.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, o, n);
      return K.__wrap(c);
    }
    bakedImageSize(e) {
      return m(e, h), s.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return m(e, h), s.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bindKey(e, t) {
      const r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = R, a = s.proteusapp_bindKey(this.__wbg_ptr, e, r, n);
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
    isFocused(e) {
      return m(e, h), s.proteusapp_isFocused(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    loadTexture(e, t) {
      const r = h_(e, s.__wbindgen_malloc), n = R, a = s.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : K.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      m(e, h);
      const a = t_(t, s.__wbindgen_malloc), o = R, c = s.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw P(c[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      m(e, h);
      const o = t_(t, s.__wbindgen_malloc), c = R, b = s.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
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
      const a = t_(t, s.__wbindgen_malloc), o = R, c = s.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw P(c[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      m(e, h);
      const o = t_(t, s.__wbindgen_malloc), c = R, b = s.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
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
      const a = h_(n, s.__wbindgen_malloc), o = R;
      return s.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, o) !== 0;
    }
  }
  Symbol.dispose && (De.prototype[Symbol.dispose] = De.prototype.free);
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
  function y4() {
    s.clear();
  }
  function x4(_) {
    s.on_frame(_);
  }
  function $4(_, e) {
    const t = G(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = R;
    s.show(t, r, e);
  }
  function v4(_, e) {
    const t = G(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = R;
    return s.start(t, r, e);
  }
  function S4() {
    s.stop_frames();
  }
  function A4(_, e) {
    return Error(S(_, e));
  }
  function I4(_) {
    return Number(_);
  }
  function D4(_, e) {
    const t = String(e), r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = R;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function T4(_) {
    return _.Window;
  }
  function F4(_) {
    return _.WorkerGlobalScope;
  }
  function B4(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    k().setBigInt64(_ + 8, v(r) ? BigInt(0) : r, true), k().setInt32(_ + 0, !v(r), true);
  }
  function P4(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return v(t) ? 16777215 : t ? 1 : 0;
  }
  function k4(_, e) {
    const t = R_(e), r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = R;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function M4(_, e) {
    return _ in e;
  }
  function R4(_) {
    return typeof _ == "bigint";
  }
  function C4(_) {
    return typeof _ == "function";
  }
  function V4(_) {
    return _ === null;
  }
  function L4(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function E4(_) {
    return typeof _ == "string";
  }
  function O4(_) {
    return _ === void 0;
  }
  function G4(_, e) {
    return _ === e;
  }
  function W4(_, e) {
    return _ == e;
  }
  function z4(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    k().setFloat64(_ + 8, v(r) ? 0 : r, true), k().setInt32(_ + 0, !v(r), true);
  }
  function U4(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = R;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function q4(_, e) {
    throw new Error(S(_, e));
  }
  function j4(_) {
    _._wbg_cb_unref();
  }
  function H4(_) {
    _.abort();
  }
  function K4(_) {
    return _.aborted;
  }
  function N4(_, e) {
    _.activeTexture(e >>> 0);
  }
  function J4(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Q4() {
    return g(function(_, e, t, r) {
      _.addEventListener(S(e, t), r);
    }, arguments);
  }
  function X4(_) {
    return _.altKey;
  }
  function Y4() {
    return g(function(_) {
      return _.arrayBuffer();
    }, arguments);
  }
  function Z4(_, e, t) {
    _.attachShader(e, t);
  }
  function em(_, e, t) {
    _.attachShader(e, t);
  }
  function _m(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function tm() {
    return g(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function rm(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function nm(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function am(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function om(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function cm(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function bm(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function sm(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function im(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function fm(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function um(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function dm(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function gm(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function pm(_, e) {
    _.bindVertexArrayOES(e);
  }
  function wm(_, e) {
    _.bindVertexArray(e);
  }
  function lm(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function mm(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function hm(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function ym(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function xm(_, e) {
    _.blendEquation(e >>> 0);
  }
  function $m(_, e) {
    _.blendEquation(e >>> 0);
  }
  function vm(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Sm(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Am(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function Im(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function Dm(_, e, t, r, n, a, o, c, b, f, d) {
    _.blitFramebuffer(e, t, r, n, a, o, c, b, f >>> 0, d >>> 0);
  }
  function Tm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Fm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Bm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Pm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function km(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function Mm(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function Rm(_) {
    return _.button;
  }
  function Cm() {
    return g(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function Vm() {
    return g(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Lm() {
    return g(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function Em(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, E(r, n));
  }
  function Om(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, ee(r, n));
  }
  function Gm(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, $e(r, n));
  }
  function Wm(_, e) {
    _.clearDepth(e);
  }
  function zm(_, e) {
    _.clearDepth(e);
  }
  function Um(_, e) {
    _.clearStencil(e);
  }
  function qm(_, e) {
    _.clearStencil(e);
  }
  function jm(_, e) {
    _.clear(e >>> 0);
  }
  function Hm(_, e) {
    _.clear(e >>> 0);
  }
  function Km(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function Nm(_, e) {
    const t = e.code, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = R;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function Jm(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Qm(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Xm(_, e) {
    _.compileShader(e);
  }
  function Ym(_, e) {
    _.compileShader(e);
  }
  function Zm(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function e7(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function _7(_, e, t, r, n, a, o, c, b, f) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b, f);
  }
  function t7(_, e, t, r, n, a, o, c, b, f, d, I) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d, I);
  }
  function r7(_, e, t, r, n, a, o, c, b, f, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d);
  }
  function n7() {
    return g(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function a7(_) {
    return _.contentRect;
  }
  function o7(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function c7(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function b7(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function s7(_, e, t, r, n, a, o, c, b, f) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f);
  }
  function i7() {
    return g(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function f7() {
    return g(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function u7(_, e) {
    return _.createBindGroup(e);
  }
  function d7(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : T(e);
  }
  function g7() {
    return g(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function p7(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : T(e);
  }
  function w7(_, e) {
    return _.createCommandEncoder(e);
  }
  function l7(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : T(e);
  }
  function m7(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : T(e);
  }
  function h7(_, e) {
    return _.createPipelineLayout(e);
  }
  function y7(_) {
    const e = _.createProgram();
    return v(e) ? 0 : T(e);
  }
  function x7(_) {
    const e = _.createProgram();
    return v(e) ? 0 : T(e);
  }
  function $7(_) {
    const e = _.createQuery();
    return v(e) ? 0 : T(e);
  }
  function v7() {
    return g(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function S7(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : T(e);
  }
  function A7(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : T(e);
  }
  function I7(_, e) {
    return _.createSampler(e);
  }
  function D7(_) {
    const e = _.createSampler();
    return v(e) ? 0 : T(e);
  }
  function T7(_, e) {
    return _.createShaderModule(e);
  }
  function F7(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : T(t);
  }
  function B7(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : T(t);
  }
  function P7(_) {
    const e = _.createTexture();
    return v(e) ? 0 : T(e);
  }
  function k7(_) {
    const e = _.createTexture();
    return v(e) ? 0 : T(e);
  }
  function M7() {
    return g(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function R7(_) {
    const e = _.createVertexArrayOES();
    return v(e) ? 0 : T(e);
  }
  function C7(_) {
    const e = _.createVertexArray();
    return v(e) ? 0 : T(e);
  }
  function V7() {
    return g(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function L7(_) {
    return _.ctrlKey;
  }
  function E7(_, e) {
    _.cullFace(e >>> 0);
  }
  function O7(_, e) {
    _.cullFace(e >>> 0);
  }
  function G7(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function W7(_, e) {
    _.deleteBuffer(e);
  }
  function z7(_, e) {
    _.deleteBuffer(e);
  }
  function U7(_, e) {
    _.deleteFramebuffer(e);
  }
  function q7(_, e) {
    _.deleteFramebuffer(e);
  }
  function j7(_, e) {
    _.deleteProgram(e);
  }
  function H7(_, e) {
    _.deleteProgram(e);
  }
  function K7(_, e) {
    _.deleteQuery(e);
  }
  function N7(_, e) {
    _.deleteRenderbuffer(e);
  }
  function J7(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Q7(_, e) {
    _.deleteSampler(e);
  }
  function X7(_, e) {
    _.deleteShader(e);
  }
  function Y7(_, e) {
    _.deleteShader(e);
  }
  function Z7(_, e) {
    _.deleteSync(e);
  }
  function e6(_, e) {
    _.deleteTexture(e);
  }
  function _6(_, e) {
    _.deleteTexture(e);
  }
  function t6(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function r6(_, e) {
    _.deleteVertexArray(e);
  }
  function n6(_, e) {
    _.depthFunc(e >>> 0);
  }
  function a6(_, e) {
    _.depthFunc(e >>> 0);
  }
  function o6(_, e) {
    _.depthMask(e !== 0);
  }
  function c6(_, e) {
    _.depthMask(e !== 0);
  }
  function b6(_, e, t) {
    _.depthRange(e, t);
  }
  function s6(_, e, t) {
    _.depthRange(e, t);
  }
  function i6(_, e) {
    const t = e.description, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = R;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function f6(_) {
    _.destroy();
  }
  function u6(_) {
    return _.devicePixelRatio;
  }
  function d6(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function g6(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function p6(_, e) {
    _.disable(e >>> 0);
  }
  function w6(_, e) {
    _.disable(e >>> 0);
  }
  function l6(_) {
    const e = _.document;
    return v(e) ? 0 : T(e);
  }
  function m6(_) {
    return _.done;
  }
  function h6(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function y6(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function x6(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function $6(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function v6(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function S6(_, e) {
    _.drawBuffers(e);
  }
  function A6(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function I6(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function D6(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function T6(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function F6(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function B6(_, e) {
    _.enable(e >>> 0);
  }
  function P6(_, e) {
    _.enable(e >>> 0);
  }
  function k6(_, e) {
    _.endQuery(e >>> 0);
  }
  function M6(_) {
    _.end();
  }
  function R6(_) {
    return Object.entries(_);
  }
  function C6(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function V6(_) {
    console.error(_);
  }
  function L6(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(S(_, e));
    } finally {
      s.__wbindgen_free(t, r, 1);
    }
  }
  function E6(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return v(r) ? 0 : T(r);
  }
  function O6(_, e, t) {
    return _.fetch(S(e, t));
  }
  function G6(_, e, t, r) {
    return _.fetch(S(e, t), r);
  }
  function W6(_) {
    return _.finish();
  }
  function z6(_, e) {
    return _.finish(e);
  }
  function U6(_) {
    _.flush();
  }
  function q6(_) {
    _.flush();
  }
  function j6() {
    return g(function(_) {
      _.focus();
    }, arguments);
  }
  function H6(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function K6(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function N6(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function J6(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function Q6(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function X6(_, e, t, r, n, a, o) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, o);
  }
  function Y6(_, e) {
    _.frontFace(e >>> 0);
  }
  function Z6(_, e) {
    _.frontFace(e >>> 0);
  }
  function e8(_) {
    return _.getBoundingClientRect();
  }
  function _8(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function t8() {
    return g(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : T(n);
    }, arguments);
  }
  function r8() {
    return g(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : T(r);
    }, arguments);
  }
  function n8() {
    return g(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : T(r);
    }, arguments);
  }
  function a8() {
    return g(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : T(n);
    }, arguments);
  }
  function o8() {
    return g(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function c8(_, e, t) {
    const r = _.getElementById(S(e, t));
    return v(r) ? 0 : T(r);
  }
  function b8() {
    return g(function(_, e, t) {
      const r = _.getExtension(S(e, t));
      return v(r) ? 0 : T(r);
    }, arguments);
  }
  function s8() {
    return g(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function i8() {
    return g(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function f8() {
    return g(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function u8() {
    return g(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function d8(_) {
    const e = _.getPreferredCanvasFormat();
    return (ce.indexOf(e) + 1 || 96) - 1;
  }
  function g8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = R;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function p8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = R;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function w8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function l8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function m8(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function h8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = R;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function y8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = R;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function x8(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function $8(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function v8(_) {
    const e = _.getSupportedExtensions();
    return v(e) ? 0 : T(e);
  }
  function S8(_) {
    const e = _.getSupportedProfiles();
    return v(e) ? 0 : T(e);
  }
  function A8(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function I8(_, e, t, r) {
    return _.getUniformBlockIndex(e, S(t, r));
  }
  function D8(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : T(n);
  }
  function T8(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : T(n);
  }
  function F8(_, e) {
    return _[e >>> 0];
  }
  function B8(_, e) {
    const t = _[e >>> 0];
    return v(t) ? 0 : T(t);
  }
  function P8() {
    return g(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function k8(_, e) {
    return _[e >>> 0];
  }
  function M8(_, e) {
    return _[e];
  }
  function R8(_) {
    return _.gpu;
  }
  function C8(_, e, t) {
    return _.hasAttribute(S(e, t));
  }
  function V8(_) {
    return _.height;
  }
  function L8(_) {
    return _.height;
  }
  function E8(_) {
    return _.hidden;
  }
  function O8(_, e, t) {
    return _.includes(e, t);
  }
  function G8(_) {
    return _.info;
  }
  function W8(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function z8(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function U8(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function q8(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function j8(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function H8(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function K8(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function N8(_) {
    let e;
    try {
      e = _ instanceof Response;
    } catch {
      e = false;
    }
    return e;
  }
  function J8(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function Q8(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function X8(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function Y8() {
    return g(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function Z8(_) {
    return Array.isArray(_);
  }
  function e5(_) {
    return _.isComposing;
  }
  function _5(_) {
    return Number.isSafeInteger(_);
  }
  function t5(_, e) {
    return Object.is(_, e);
  }
  function r5() {
    return Symbol.iterator;
  }
  function n5(_, e) {
    const t = e.key, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = R;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function a5(_, e) {
    const t = e.label, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = R;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function o5(_) {
    return _.length;
  }
  function c5(_) {
    return _.length;
  }
  function b5(_) {
    return _.limits;
  }
  function s5(_) {
    return _.limits;
  }
  function i5(_, e) {
    _.linkProgram(e);
  }
  function f5(_, e) {
    _.linkProgram(e);
  }
  function u5(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function d5(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function g5(_) {
    return _.maxBindGroups;
  }
  function p5(_) {
    return _.maxBindingsPerBindGroup;
  }
  function w5(_) {
    return _.maxBufferSize;
  }
  function l5(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function m5(_) {
    return _.maxColorAttachments;
  }
  function h5(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function y5(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function x5(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function $5(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function v5(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function S5(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function A5(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function I5(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function D5(_) {
    return _.maxInterStageShaderVariables;
  }
  function T5(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function F5(_) {
    return _.maxSamplersPerShaderStage;
  }
  function B5(_) {
    return _.maxStorageBufferBindingSize;
  }
  function P5(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function k5(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function M5(_) {
    return _.maxTextureArrayLayers;
  }
  function R5(_) {
    return _.maxTextureDimension1D;
  }
  function C5(_) {
    return _.maxTextureDimension2D;
  }
  function V5(_) {
    return _.maxTextureDimension3D;
  }
  function L5(_) {
    return _.maxUniformBufferBindingSize;
  }
  function E5(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function O5(_) {
    return _.maxVertexAttributes;
  }
  function G5(_) {
    return _.maxVertexBufferArrayStride;
  }
  function W5(_) {
    return _.maxVertexBuffers;
  }
  function z5(_) {
    return _.metaKey;
  }
  function U5(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function q5(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function j5(_) {
    return _.navigator;
  }
  function H5(_) {
    return _.navigator;
  }
  function K5() {
    return g(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function N5() {
    return new Error();
  }
  function J5() {
    return new Object();
  }
  function Q5() {
    return new Array();
  }
  function X5() {
    return g(function() {
      return new AbortController();
    }, arguments);
  }
  function Y5(_) {
    return new Uint8Array(_);
  }
  function Z5(_, e) {
    return new Error(S(_, e));
  }
  function e9(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, o) => {
        const c = t.a;
        t.a = 0;
        try {
          return vS(c, t.b, a, o);
        } finally {
          t.a = c;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function _9(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function t9() {
    return g(function(_) {
      return _.next();
    }, arguments);
  }
  function r9(_) {
    return _.next;
  }
  function n9(_) {
    return _.now();
  }
  function a9(_, e) {
    _.observe(e);
  }
  function o9(_) {
    return Array.of(_);
  }
  function c9(_) {
    return _.offsetX;
  }
  function b9(_) {
    return _.offsetY;
  }
  function s9(_) {
    return _.ok;
  }
  function i9(_) {
    return _.onSubmittedWorkDone();
  }
  function f9(_) {
    const e = _.performance;
    return v(e) ? 0 : T(e);
  }
  function u9(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function d9(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function g9(_, e, t) {
    _.polygonOffset(e, t);
  }
  function p9(_, e, t) {
    _.polygonOffset(e, t);
  }
  function w9(_) {
    _.preventDefault();
  }
  function l9(_) {
    return De.__wrap(_);
  }
  function m9(_, e, t) {
    Uint8Array.prototype.set.call(i_(_, e), t);
  }
  function h9(_, e) {
    return _.push(e);
  }
  function y9(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function x9() {
    return g(function(_, e, t) {
      return _.querySelectorAll(S(e, t));
    }, arguments);
  }
  function $9() {
    return g(function(_, e, t) {
      const r = _.querySelector(S(e, t));
      return v(r) ? 0 : T(r);
    }, arguments);
  }
  function v9(_) {
    return _.queueMicrotask;
  }
  function S9(_) {
    queueMicrotask(_);
  }
  function A9(_) {
    return _.queue;
  }
  function I9(_, e) {
    _.readBuffer(e >>> 0);
  }
  function D9() {
    return g(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function T9() {
    return g(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function F9() {
    return g(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function B9(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function P9(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function k9(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function M9(_) {
    return _.repeat;
  }
  function R9(_, e) {
    return _.requestAdapter(e);
  }
  function C9(_) {
    return _.requestAdapter();
  }
  function V9() {
    return g(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function L9(_, e) {
    return _.requestDevice(e);
  }
  function E9(_) {
    return Promise.resolve(_);
  }
  function O9(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function G9(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function W9(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function z9(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function U9() {
    return g(function(_, e, t, r, n) {
      _.setAttribute(S(e, t), S(r, n));
    }, arguments);
  }
  function q9() {
    return g(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, $e(r, n), a, o >>> 0);
    }, arguments);
  }
  function j9(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function H9(_, e, t, r, n) {
    _.setIndexBuffer(e, Y_[t], r, n);
  }
  function K9(_, e, t, r) {
    _.setIndexBuffer(e, Y_[t], r);
  }
  function N9(_, e) {
    _.setPipeline(e);
  }
  function J9(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function Q9(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function X9(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
  }
  function Y9(_, e, t) {
    _.set(e, t >>> 0);
  }
  function Z9() {
    return g(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function eh(_, e, t) {
    _[e] = t;
  }
  function _h(_, e) {
    _.a = e;
  }
  function th(_, e) {
    _.access = RS[e];
  }
  function rh(_, e) {
    _.addressModeU = Q_[e];
  }
  function nh(_, e) {
    _.addressModeV = Q_[e];
  }
  function ah(_, e) {
    _.addressModeW = Q_[e];
  }
  function oh(_, e) {
    _.alpha = e;
  }
  function ch(_, e) {
    _.alphaMode = DS[e];
  }
  function bh(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function sh(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function ih(_, e) {
    _.arrayStride = e;
  }
  function fh(_, e) {
    _.aspect = jt[e];
  }
  function uh(_, e) {
    _.aspect = jt[e];
  }
  function dh(_, e) {
    _.attributes = e;
  }
  function gh(_, e) {
    _.b = e;
  }
  function ph(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function wh(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function lh(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function mh(_, e) {
    _.bindGroupLayouts = e;
  }
  function hh(_, e) {
    _.binding = e >>> 0;
  }
  function yh(_, e) {
    _.binding = e >>> 0;
  }
  function xh(_, e) {
    _.blend = e;
  }
  function $h(_, e) {
    _.buffer = e;
  }
  function vh(_, e) {
    _.buffer = e;
  }
  function Sh(_, e) {
    _.buffers = e;
  }
  function Ah(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function Ih(_, e) {
    _.clearValue = e;
  }
  function Dh(_, e, t) {
    _.code = S(e, t);
  }
  function Th(_, e) {
    _.colorAttachments = e;
  }
  function Fh(_, e) {
    _.color = e;
  }
  function Bh(_, e) {
    _.compare = X_[e];
  }
  function Ph(_, e) {
    _.compare = X_[e];
  }
  function kh(_, e) {
    _.count = e >>> 0;
  }
  function Mh(_, e) {
    _.cullMode = TS[e];
  }
  function Rh(_, e, t) {
    _[e >>> 0] = t;
  }
  function Ch(_, e) {
    _.depthBias = e;
  }
  function Vh(_, e) {
    _.depthBiasClamp = e;
  }
  function Lh(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function Eh(_, e) {
    _.depthClearValue = e;
  }
  function Oh(_, e) {
    _.depthCompare = X_[e];
  }
  function Gh(_, e) {
    _.depthFailOp = et[e];
  }
  function Wh(_, e) {
    _.depthLoadOp = Z_[e];
  }
  function zh(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function Uh(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function qh(_, e) {
    _.depthStencil = e;
  }
  function jh(_, e) {
    _.depthStencilAttachment = e;
  }
  function Hh(_, e) {
    _.depthStoreOp = _t[e];
  }
  function Kh(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function Nh(_, e) {
    _.device = e;
  }
  function Jh(_, e) {
    _.dimension = tt[e];
  }
  function Qh(_, e) {
    _.dimension = CS[e];
  }
  function Xh(_, e) {
    _.dstFactor = Ut[e];
  }
  function Yh(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function Zh(_, e) {
    _.entries = e;
  }
  function ey(_, e) {
    _.entries = e;
  }
  function _y(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function ty(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function ry(_, e) {
    _.externalTexture = e;
  }
  function ny(_, e) {
    _.failOp = et[e];
  }
  function ay(_, e) {
    _.format = ce[e];
  }
  function oy(_, e) {
    _.format = LS[e];
  }
  function cy(_, e) {
    _.format = ce[e];
  }
  function by(_, e) {
    _.format = ce[e];
  }
  function sy(_, e) {
    _.format = ce[e];
  }
  function iy(_, e) {
    _.format = ce[e];
  }
  function fy(_, e) {
    _.format = ce[e];
  }
  function uy(_, e) {
    _.fragment = e;
  }
  function dy(_, e) {
    _.frontFace = FS[e];
  }
  function gy(_, e) {
    _.g = e;
  }
  function py(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function wy(_, e) {
    _.height = e >>> 0;
  }
  function ly(_, e) {
    _.height = e >>> 0;
  }
  function my(_, e) {
    _.height = e >>> 0;
  }
  function hy(_, e, t) {
    _.label = S(e, t);
  }
  function yy(_, e, t) {
    _.label = S(e, t);
  }
  function xy(_, e, t) {
    _.label = S(e, t);
  }
  function $y(_, e, t) {
    _.label = S(e, t);
  }
  function vy(_, e, t) {
    _.label = S(e, t);
  }
  function Sy(_, e, t) {
    _.label = S(e, t);
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
  function ky(_, e) {
    _.layout = e;
  }
  function My(_, e) {
    _.layout = e;
  }
  function Ry(_, e) {
    _.loadOp = Z_[e];
  }
  function Cy(_, e) {
    _.lodMaxClamp = e;
  }
  function Vy(_, e) {
    _.lodMinClamp = e;
  }
  function Ly(_, e) {
    _.magFilter = qt[e];
  }
  function Ey(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function Oy(_, e) {
    _.mask = e >>> 0;
  }
  function Gy(_, e) {
    _.maxAnisotropy = e;
  }
  function Wy(_, e) {
    _.minBindingSize = e;
  }
  function zy(_, e) {
    _.minFilter = qt[e];
  }
  function Uy(_, e) {
    _.mipLevel = e >>> 0;
  }
  function qy(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function jy(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Hy(_, e) {
    _.mipmapFilter = BS[e];
  }
  function Ky(_, e) {
    _.module = e;
  }
  function Ny(_, e) {
    _.module = e;
  }
  function Jy(_, e) {
    _.multisample = e;
  }
  function Qy(_, e) {
    _.multisampled = e !== 0;
  }
  function Xy(_, e) {
    _.offset = e;
  }
  function Yy(_, e) {
    _.offset = e;
  }
  function Zy(_, e) {
    _.offset = e;
  }
  function ex(_, e) {
    _.operation = AS[e];
  }
  function _x(_, e) {
    _.origin = e;
  }
  function tx(_, e) {
    _.passOp = et[e];
  }
  function rx(_, e) {
    _.powerPreference = PS[e];
  }
  function nx(_, e) {
    _.primitive = e;
  }
  function ax(_, e) {
    _.querySet = e;
  }
  function ox(_, e) {
    _.r = e;
  }
  function cx(_, e) {
    _.requiredFeatures = e;
  }
  function bx(_, e) {
    _.requiredLimits = e;
  }
  function sx(_, e) {
    _.resolveTarget = e;
  }
  function ix(_, e) {
    _.resource = e;
  }
  function fx(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function ux(_, e) {
    _.sampleCount = e >>> 0;
  }
  function dx(_, e) {
    _.sampleType = VS[e];
  }
  function gx(_, e) {
    _.sampler = e;
  }
  function px(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function wx(_, e) {
    _.signal = e;
  }
  function lx(_, e) {
    _.size = e;
  }
  function mx(_, e) {
    _.size = e;
  }
  function hx(_, e) {
    _.size = e;
  }
  function yx(_, e) {
    _.srcFactor = Ut[e];
  }
  function xx(_, e) {
    _.stencilBack = e;
  }
  function $x(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function vx(_, e) {
    _.stencilFront = e;
  }
  function Sx(_, e) {
    _.stencilLoadOp = Z_[e];
  }
  function Ax(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function Ix(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function Dx(_, e) {
    _.stencilStoreOp = _t[e];
  }
  function Tx(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function Fx(_, e) {
    _.stepMode = ES[e];
  }
  function Bx(_, e) {
    _.storageTexture = e;
  }
  function Px(_, e) {
    _.storeOp = _t[e];
  }
  function kx(_, e) {
    _.stripIndexFormat = Y_[e];
  }
  function Mx(_, e) {
    _.targets = e;
  }
  function Rx(_, e) {
    _.texture = e;
  }
  function Cx(_, e) {
    _.texture = e;
  }
  function Vx(_, e) {
    _.timestampWrites = e;
  }
  function Lx(_, e) {
    _.topology = kS[e];
  }
  function Ex(_, e) {
    _.type = IS[e];
  }
  function Ox(_, e) {
    _.type = MS[e];
  }
  function Gx(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function Wx(_, e) {
    _.usage = e >>> 0;
  }
  function zx(_, e) {
    _.usage = e >>> 0;
  }
  function Ux(_, e) {
    _.usage = e >>> 0;
  }
  function qx(_, e) {
    _.usage = e >>> 0;
  }
  function jx(_, e) {
    _.vertex = e;
  }
  function Hx(_, e) {
    _.view = e;
  }
  function Kx(_, e) {
    _.view = e;
  }
  function Nx(_, e) {
    _.viewDimension = tt[e];
  }
  function Jx(_, e) {
    _.viewDimension = tt[e];
  }
  function Qx(_, e) {
    _.viewFormats = e;
  }
  function Xx(_, e) {
    _.viewFormats = e;
  }
  function Yx(_, e) {
    _.visibility = e >>> 0;
  }
  function Zx(_, e) {
    _.width = e >>> 0;
  }
  function e$(_, e) {
    _.width = e >>> 0;
  }
  function _$(_, e) {
    _.width = e >>> 0;
  }
  function t$(_, e) {
    _.writeMask = e >>> 0;
  }
  function r$(_, e) {
    _.x = e >>> 0;
  }
  function n$(_, e) {
    _.y = e >>> 0;
  }
  function a$(_, e) {
    _.z = e >>> 0;
  }
  function o$(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function c$(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function b$(_) {
    return _.shiftKey;
  }
  function s$(_) {
    return _.signal;
  }
  function i$(_, e) {
    const t = e.stack, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = R;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function f$() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return v(_) ? 0 : T(_);
  }
  function u$() {
    const _ = typeof global > "u" ? null : global;
    return v(_) ? 0 : T(_);
  }
  function d$() {
    const _ = typeof self > "u" ? null : self;
    return v(_) ? 0 : T(_);
  }
  function g$() {
    const _ = typeof window > "u" ? null : window;
    return v(_) ? 0 : T(_);
  }
  function p$(_, e) {
    const t = e.statusText, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = R;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function w$(_) {
    return _.status;
  }
  function l$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function m$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function h$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function y$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function x$(_, e) {
    _.stencilMask(e >>> 0);
  }
  function $$(_, e) {
    _.stencilMask(e >>> 0);
  }
  function v$(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function S$(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function A$(_, e) {
    _.submit(e);
  }
  function I$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function D$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function T$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function F$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function B$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function P$(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function k$(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function M$(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function R$(_, e, t, r, n, a, o) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, o);
  }
  function C$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function V$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function L$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function E$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function O$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function G$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
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
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function q$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function j$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function H$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function K$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function N$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function J$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function Q$(_, e, t) {
    return _.then(e, t);
  }
  function X$(_, e, t) {
    return _.then(e, t);
  }
  function Y$(_, e) {
    return _.then(e);
  }
  function Z$(_, e, t) {
    _.uniform1f(e, t);
  }
  function ev(_, e, t) {
    _.uniform1f(e, t);
  }
  function _v(_, e, t) {
    _.uniform1i(e, t);
  }
  function tv(_, e, t) {
    _.uniform1i(e, t);
  }
  function rv(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function nv(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function av(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function ov(_, e, t, r) {
    _.uniform2iv(e, ee(t, r));
  }
  function cv(_, e, t, r) {
    _.uniform2iv(e, ee(t, r));
  }
  function bv(_, e, t, r) {
    _.uniform2uiv(e, $e(t, r));
  }
  function sv(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function iv(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function fv(_, e, t, r) {
    _.uniform3iv(e, ee(t, r));
  }
  function uv(_, e, t, r) {
    _.uniform3iv(e, ee(t, r));
  }
  function dv(_, e, t, r) {
    _.uniform3uiv(e, $e(t, r));
  }
  function gv(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function pv(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function wv(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function lv(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function mv(_, e, t, r) {
    _.uniform4iv(e, ee(t, r));
  }
  function hv(_, e, t, r) {
    _.uniform4iv(e, ee(t, r));
  }
  function yv(_, e, t, r) {
    _.uniform4uiv(e, $e(t, r));
  }
  function xv(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function $v(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function vv(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function Sv(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, E(r, n));
  }
  function Av(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, E(r, n));
  }
  function Iv(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function Dv(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function Tv(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, E(r, n));
  }
  function Fv(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, E(r, n));
  }
  function Bv(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function Pv(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function kv(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, E(r, n));
  }
  function Mv(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, E(r, n));
  }
  function Rv(_) {
    _.unmap();
  }
  function Cv(_, e) {
    _.useProgram(e);
  }
  function Vv(_, e) {
    _.useProgram(e);
  }
  function Lv(_) {
    return _.value;
  }
  function Ev(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function Ov(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function Gv(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function Wv(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function zv(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function Uv(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function qv(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function jv(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function Hv(_) {
    return _.width;
  }
  function Kv(_) {
    return _.width;
  }
  function Nv() {
    return g(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, i_(r, n), a, o);
    }, arguments);
  }
  function Jv() {
    return g(function(_, e, t, r, n, a) {
      _.writeTexture(e, i_(t, r), n, a);
    }, arguments);
  }
  function Qv(_, e) {
    return _e(_, e, lS);
  }
  function Xv(_, e) {
    return _e(_, e, $S);
  }
  function Yv(_, e) {
    return _e(_, e, SS);
  }
  function Zv(_, e) {
    return _e(_, e, mS);
  }
  function eS(_, e) {
    return _e(_, e, hS);
  }
  function _S(_, e) {
    return _e(_, e, yS);
  }
  function tS(_, e) {
    return _e(_, e, xS);
  }
  function rS(_, e) {
    return _e(_, e, wS);
  }
  function nS(_) {
    return _;
  }
  function aS(_) {
    return _;
  }
  function oS(_, e) {
    return E(_, e);
  }
  function cS(_, e) {
    return OS(_, e);
  }
  function bS(_, e) {
    return ee(_, e);
  }
  function sS(_, e) {
    return GS(_, e);
  }
  function iS(_, e) {
    return WS(_, e);
  }
  function fS(_, e) {
    return $e(_, e);
  }
  function uS(_, e) {
    return i_(_, e);
  }
  function dS(_, e) {
    return S(_, e);
  }
  function gS(_) {
    return BigInt.asUintN(64, _);
  }
  function pS() {
    const _ = s.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function wS(_, e) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function lS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function mS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function hS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function yS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function xS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6(_, e, t);
  }
  function $S(_, e, t) {
    const r = s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (r[1]) throw P(r[0]);
  }
  function vS(_, e, t, r) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, r);
  }
  function SS(_, e, t) {
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
  ], AS = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], IS = [
    "uniform",
    "storage",
    "read-only-storage"
  ], DS = [
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
  ], TS = [
    "none",
    "front",
    "back"
  ], qt = [
    "nearest",
    "linear"
  ], FS = [
    "ccw",
    "cw"
  ], Y_ = [
    "uint16",
    "uint32"
  ], Z_ = [
    "load",
    "clear"
  ], BS = [
    "nearest",
    "linear"
  ], PS = [
    "low-power",
    "high-performance"
  ], kS = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], MS = [
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
  ], RS = [
    "write-only",
    "read-only",
    "read-write"
  ], _t = [
    "store",
    "discard"
  ], jt = [
    "all",
    "stencil-only",
    "depth-only"
  ], CS = [
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
  ], VS = [
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
  ], LS = [
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
  ], ES = [
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
    return _ = _ >>> 0, zS().subarray(_ / 4, _ / 4 + e);
  }
  function OS(_, e) {
    return _ = _ >>> 0, qS().subarray(_ / 2, _ / 2 + e);
  }
  function ee(_, e) {
    return _ = _ >>> 0, jS().subarray(_ / 4, _ / 4 + e);
  }
  function GS(_, e) {
    return _ = _ >>> 0, HS().subarray(_ / 1, _ / 1 + e);
  }
  function WS(_, e) {
    return _ = _ >>> 0, KS().subarray(_ / 2, _ / 2 + e);
  }
  function $e(_, e) {
    return _ = _ >>> 0, NS().subarray(_ / 4, _ / 4 + e);
  }
  function i_(_, e) {
    return _ = _ >>> 0, me().subarray(_ / 1, _ / 1 + e);
  }
  let ie = null;
  function k() {
    return (ie === null || ie.buffer.detached === true || ie.buffer.detached === void 0 && ie.buffer !== s.memory.buffer) && (ie = new DataView(s.memory.buffer)), ie;
  }
  let Ne = null;
  function zS() {
    return (Ne === null || Ne.byteLength === 0) && (Ne = new Float32Array(s.memory.buffer)), Ne;
  }
  let Je = null;
  function US() {
    return (Je === null || Je.byteLength === 0) && (Je = new Float64Array(s.memory.buffer)), Je;
  }
  let Qe = null;
  function qS() {
    return (Qe === null || Qe.byteLength === 0) && (Qe = new Int16Array(s.memory.buffer)), Qe;
  }
  let Xe = null;
  function jS() {
    return (Xe === null || Xe.byteLength === 0) && (Xe = new Int32Array(s.memory.buffer)), Xe;
  }
  let Ye = null;
  function HS() {
    return (Ye === null || Ye.byteLength === 0) && (Ye = new Int8Array(s.memory.buffer)), Ye;
  }
  function S(_, e) {
    return QS(_ >>> 0, e);
  }
  let Ze = null;
  function KS() {
    return (Ze === null || Ze.byteLength === 0) && (Ze = new Uint16Array(s.memory.buffer)), Ze;
  }
  let e_ = null;
  function NS() {
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
    return me().set(_, t / 1), R = _.length, t;
  }
  function t_(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return US().set(_, t / 8), R = _.length, t;
  }
  function G(_, e, t) {
    if (t === void 0) {
      const c = Ae.encode(_), b = e(c.length, 1) >>> 0;
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
      const c = me().subarray(n + o, n + r), b = Ae.encodeInto(_, c);
      o += b.written, n = t(n, r, o, 1) >>> 0;
    }
    return R = o, n;
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
  const JS = 2146435072;
  let y_ = 0;
  function QS(_, e) {
    return y_ += e, y_ >= JS && (a_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), a_.decode(), y_ = e), a_.decode(me().subarray(_, _ + e));
  }
  const Ae = new TextEncoder();
  "encodeInto" in Ae || (Ae.encodeInto = function(_, e) {
    const t = Ae.encode(_);
    return e.set(t), {
      read: _.length,
      written: t.length
    };
  });
  let R = 0, s;
  function XS(_) {
    s = _;
  }
  URL = globalThis.URL;
  const YS = await O_({
    "./proteus_bench_web_bg.js": {
      __wbg_call_5575218572ead796: Vm,
      __wbg_new_typed_00a409eb4ec4f2d9: e9,
      __wbg_then_05edfc8a4fea5106: Q$,
      __wbg_next_0c4066e251d2eff9: t9,
      __wbg_done_b62d4a7d2286852a: m6,
      __wbg_value_49f783bb59765962: Lv,
      __wbg_length_c6054974c0a6cdb9: c5,
      __wbg_get_unchecked_54a4374c38e08460: k8,
      __wbg_instanceof_Map_afa18d5840c04c15: H8,
      __wbg_get_197a3fe98f169e38: F8,
      __wbg_new_227d7c05414eb861: N5,
      __wbg_stack_3b0d974bbf31e44f: i$,
      __wbg_error_a6fa202b58aa1cd3: L6,
      __wbg_push_f724b5db8acf89d2: h9,
      __wbg_proteusapp_new: l9,
      __wbg_call_0e855b388e315e17: Cm,
      __wbg_call_8e98ed2f3c86c4b5: Lm,
      __wbg_set_dc601f4a69da0bc2: Rh,
      __wbg_get_with_ref_key_6412cf3094599694: M8,
      __wbg_set_6be42768c690e380: eh,
      __wbg_String_8564e559799eccda: D4,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: q8,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: R5,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: C5,
      __wbg_maxTextureDimension3D_06ee54121b37d431: V5,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: M5,
      __wbg_maxBindGroups_14611ac9ed1c6b56: g5,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: p5,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: I5,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: A5,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: T5,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: F5,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: P5,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: k5,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: E5,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: L5,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: B5,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: W5,
      __wbg_maxBufferSize_f7ce3e1856349d2f: w5,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: O5,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: G5,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: D5,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: q5,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: U5,
      __wbg_maxColorAttachments_fd9187f9f786da18: m5,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: l5,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: v5,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: h5,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: y5,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: x5,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: $5,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: S5,
      __wbg_description_18d0a6d4077fec8e: i6,
      __wbg_set_dst_factor_1ed75271a89a711e: Xh,
      __wbg_set_operation_b5862f5a1a143b30: ex,
      __wbg_set_src_factor_1c4f755f8676df1b: yx,
      __wbg_set_texture_16d2be474ce6ad0c: Rx,
      __wbg_set_mip_level_246db61be15bdd69: Uy,
      __wbg_set_x_56f0c2c08a62725c: r$,
      __wbg_set_y_04fb8ce84735b4e1: n$,
      __wbg_set_z_a51316db27a4941e: a$,
      __wbg_set_origin_9b3b0fbe0a5dc469: _x,
      __wbg_set_aspect_77332ac136ee94eb: fh,
      __wbg_Window_a07901001eb4269f: T4,
      __wbg_gpu_a7c12045c25d009a: R8,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: F4,
      __wbg_set_a_5f6e488475272136: _h,
      __wbg_set_b_688365d692bba214: gh,
      __wbg_set_g_d4d1d77cf8fdd362: gy,
      __wbg_set_r_527e5a41c4b1a846: ox,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: U8,
      __wbg_queue_65d985f3e6d786a6: A9,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: rx,
      __wbg_requestAdapter_9ff5c9d1ff271165: R9,
      __wbg_set_required_limits_3b031f66f838f4e3: bx,
      __wbg_set_required_features_54918de8185c5fab: cx,
      __wbg_set_label_bae57fb9f24fde5c: Ay,
      __wbg_requestDevice_c1c34f88a477e509: L9,
      __wbg_limits_50a8c5e629dbfe40: s5,
      __wbg_info_22dcf1fd1b12bc7d: G8,
      __wbg_set_size_41cd9255ca1e4242: mx,
      __wbg_set_usage_908213a4d4bb8bde: Ux,
      __wbg_set_mapped_at_creation_48de4735fab51e78: Ey,
      __wbg_set_label_cd567b7b35838e4c: Ty,
      __wbg_createBuffer_2f08c0205e04efca: g7,
      __wbg_set_address_mode_u_a37cf1035585c638: rh,
      __wbg_set_address_mode_v_8ac049e029caef76: nh,
      __wbg_set_address_mode_w_eb9260ee11729e92: ah,
      __wbg_set_compare_42211fbf15e3b850: Ph,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: Cy,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: Vy,
      __wbg_set_mag_filter_69d846b974d4bcc0: Ly,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: zy,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: Hy,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: Gy,
      __wbg_set_label_dcd98efbb9370da8: By,
      __wbg_createSampler_248bd67c920af37d: I7,
      __wbg_set_width_1a5e2e86fa5bdcd8: e$,
      __wbg_set_height_e8b5483b8c117d5e: ly,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: zh,
      __wbg_set_format_e9d4b1475bb3bd3b: iy,
      __wbg_set_size_a61ff22205255d61: hx,
      __wbg_set_usage_7fa9cd18d1104aca: zx,
      __wbg_set_label_0c1bd0e976cf0a9a: yy,
      __wbg_set_dimension_36e13ccecae5af4b: Qh,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: jy,
      __wbg_set_sample_count_865e1d19b84e27e6: ux,
      __wbg_set_view_formats_bab284fc81b40e70: Qx,
      __wbg_createTexture_9e76b80a2dc0d12e: M7,
      __wbg_set_entries_fc76ca4d7da6a709: ey,
      __wbg_set_layout_eeef59714f5bf48b: My,
      __wbg_set_label_f92ae11c77d74198: Py,
      __wbg_createBindGroup_2320df4db188406c: u7,
      __wbg_set_code_56e2d45ec1ff6c2d: Dh,
      __wbg_set_label_be45aed56e4b9fee: Iy,
      __wbg_createShaderModule_53701de4fb271c90: T7,
      __wbg_set_label_d1c24b5a7a3ac31d: Fy,
      __wbg_createCommandEncoder_cd88faca35d9ed68: w7,
      __wbg_set_bind_group_layouts_5325d038771af328: mh,
      __wbg_set_label_2f592bd1be3db6b3: vy,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: h7,
      __wbg_set_module_14e471fdd94c582d: Ny,
      __wbg_set_entry_point_8db3b6d103e3b865: ty,
      __wbg_set_buffers_85a7238f4ef28ab4: Sh,
      __wbg_set_layout_7c5ba5bdcde8a0f0: ky,
      __wbg_set_vertex_a4951dd9a7a4ed54: jx,
      __wbg_set_label_c47c451211e2f6d2: Dy,
      __wbg_set_format_f9341112e43ea182: fy,
      __wbg_set_depth_compare_30e9ea552da12fe2: Oh,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: Kh,
      __wbg_set_depth_bias_428c9340b0fd937b: Ch,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: Vh,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: Lh,
      __wbg_set_compare_1509dc1a5420943f: Bh,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: Gh,
      __wbg_set_fail_op_77ab26c98f847b65: ny,
      __wbg_set_pass_op_e9470d1262fb8a8b: tx,
      __wbg_set_stencil_back_6ef4683123b19b25: xx,
      __wbg_set_stencil_front_aeb8580a97e5424b: vx,
      __wbg_set_stencil_read_mask_2954f260d47349ea: Ax,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: Tx,
      __wbg_set_depth_stencil_1bd50dbc450c8650: qh,
      __wbg_set_module_08ad08e736d8edbf: Ky,
      __wbg_set_targets_6b0b3bdd87f35668: Mx,
      __wbg_set_entry_point_6fec5723cc790927: _y,
      __wbg_set_fragment_1a595620425637e1: uy,
      __wbg_set_count_26a934d1cd07d080: kh,
      __wbg_set_mask_0c49a66362fc0079: Oy,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: bh,
      __wbg_set_multisample_85f073947b782d07: Jy,
      __wbg_set_cull_mode_9d466c1ab414cac8: Mh,
      __wbg_set_front_face_50cdf4eb61504a46: dy,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: kx,
      __wbg_set_topology_beefb3aca0612b00: Lx,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: Gx,
      __wbg_set_primitive_369241acd17871f1: nx,
      __wbg_createRenderPipeline_f48187ba9f7701e8: v7,
      __wbg_set_entries_3017e6132f938c6e: Zh,
      __wbg_set_label_1175a3329a06e52b: xy,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: f7,
      __wbg_limits_1c25cb4f379a4418: b5,
      __wbg_set_color_attachments_abe67f6631926e28: Th,
      __wbg_set_label_8fd860a36d2c7b74: Sy,
      __wbg_set_view_dbd0294573f64d05: Kx,
      __wbg_set_depth_clear_value_442bf492734f63b6: Eh,
      __wbg_set_depth_load_op_34d430b74bb36d91: Wh,
      __wbg_set_depth_store_op_0ea0a215313dbda7: Hh,
      __wbg_set_depth_read_only_138a11b10c731094: Uh,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: $x,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: Sx,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: Dx,
      __wbg_set_stencil_read_only_fb489d191b6d969b: Ix,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: jh,
      __wbg_set_query_set_18679a8580267d5a: ax,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: lh,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: Yh,
      __wbg_set_timestamp_writes_c552d52fbb417005: Vx,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: tm,
      __wbg_copyTextureToTexture_1be188df1e535c0a: i7,
      __wbg_label_47480289cc2bce71: a5,
      __wbg_set_label_2d2227f4d5991e50: $y,
      __wbg_finish_cfaeede3baf55be1: z6,
      __wbg_finish_087cb89c65c06eb1: W6,
      __wbg_drawIndexed_68637ebab6dd8d6e: D6,
      __wbg_setPipeline_bab24dbce96903b9: N9,
      __wbg_setViewport_f9d423db4f4b4b58: X9,
      __wbg_setBindGroup_4ba56e1e0d26f244: q9,
      __wbg_setBindGroup_6124849cc8547086: j9,
      __wbg_setIndexBuffer_17431786d06c1b7c: H9,
      __wbg_setIndexBuffer_a16ed5b869c87507: K9,
      __wbg_setVertexBuffer_b508baf8d0ffe331: Q9,
      __wbg_setVertexBuffer_91c4b602d0289943: J9,
      __wbg_end_414453a89205612c: M6,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: d8,
      __wbg_getCurrentTexture_51975ae7185fd15f: o8,
      __wbg_set_device_0d774b66e7288f72: Nh,
      __wbg_set_format_d347899cd860709c: sy,
      __wbg_set_usage_ae014e77ff77ce06: qx,
      __wbg_set_alpha_mode_92402195b3ae1ee7: ch,
      __wbg_set_view_formats_fe531a043efb71fa: Xx,
      __wbg_configure_3d64c677c7d68a15: n7,
      __wbg_writeBuffer_b4bdd36178348ca5: Nv,
      __wbg_set_bytes_per_row_91681ca78d744888: Ah,
      __wbg_set_rows_per_image_d198b7e73a38978b: fx,
      __wbg_set_offset_a097a8050a3a9a33: Zy,
      __wbg_writeTexture_b45b69132e46a227: Jv,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: i9,
      __wbg_submit_1290d44bb76ecef4: A$,
      __wbg_getMappedRange_5ed22727c9679168: i8,
      __wbg_unmap_8f06698a75b8331a: Rv,
      __wbg_destroy_b5b39f25f0799295: f6,
      __wbg_mapAsync_bb0029907dd91181: d5,
      __wbg_set_dimension_174ad7e2fb67fb4e: Jh,
      __wbg_set_format_90860b0321868db4: cy,
      __wbg_set_aspect_a823a14d00d42d37: uh,
      __wbg_set_base_array_layer_cc6c68d233489c4b: ph,
      __wbg_set_array_layer_count_daec613068108a9d: sh,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: wh,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: qy,
      __wbg_set_label_03d2396d4655a3e1: hy,
      __wbg_set_usage_7f0dda8309469b1c: Wx,
      __wbg_createView_cc96b5bdd3d5bf5e: V7,
      __wbg_set_min_binding_size_689661b9ed25e083: Wy,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: py,
      __wbg_set_type_38961e08504ca674: Ex,
      __wbg_requestAdapter_c46930b8bc33722d: C9,
      __wbg_set_alpha_aa2e606e9e647b21: oh,
      __wbg_set_color_bc393d7efc3c8594: Fh,
      __wbg_set_visibility_1bca121a89accba5: Yx,
      __wbg_set_storage_texture_ab9eed9786337ef0: Bx,
      __wbg_set_external_texture_825fe2bc7a0c0603: ry,
      __wbg_set_binding_b6b0fe5c281b8c69: hh,
      __wbg_set_buffer_e89095a9f0cafad3: vh,
      __wbg_set_sampler_8c5d7fb1b02058c6: gx,
      __wbg_set_texture_e25a73da75cf5808: Cx,
      __wbg_set_format_abf7a1bc5425c56a: by,
      __wbg_set_blend_8d6e9c08b5702a09: xh,
      __wbg_set_write_mask_144b25e2bd909124: t$,
      __wbg_set_load_op_56844f51434037bf: Ry,
      __wbg_set_store_op_caeede4654b3d847: Px,
      __wbg_set_view_bdeab150b5f0768c: Hx,
      __wbg_set_clear_value_642701f928a5ccb3: Ih,
      __wbg_set_resolve_target_fe76b3f99cf72078: sx,
      __wbg_set_buffer_55f096330c8912b4: $h,
      __wbg_set_offset_73156b0e0b41d79a: Xy,
      __wbg_set_size_1e6281b07cd39177: lx,
      __wbg_set_binding_f3c188a8cd21455b: yh,
      __wbg_set_resource_fe385d2e3dadaf63: ix,
      __wbg_set_format_6606f5c1fba6f459: oy,
      __wbg_set_offset_8d9d9afffa18b591: Yy,
      __wbg_set_shader_location_0ff30a733291a396: px,
      __wbg_set_array_stride_c2c009eabc18b5f6: ih,
      __wbg_set_attributes_05f9117fd32ca606: dh,
      __wbg_set_step_mode_a35aef328761c452: Fx,
      __wbg_set_type_c1eebc19f8a6aeb9: Ox,
      __wbg_set_multisampled_40505c1381e1c32c: Qy,
      __wbg_set_sample_type_7088b1efddce6a69: dx,
      __wbg_set_view_dimension_3ed01b237e85826f: Jx,
      __wbg_set_format_1786adb7bc74c7c9: ay,
      __wbg_set_access_091f317905cd76a5: th,
      __wbg_set_view_dimension_263387976511ebc9: Nx,
      __wbg_includes_83dff8d05da243c5: O8,
      __wbg_clearBufferuiv_1d2d93401c0904a3: Gm,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: e7,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: t7,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: r7,
      __wbg_copyBufferSubData_a944f33b601b822d: o7,
      __wbg_clientWaitSync_7580165bd2eff461: Km,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: _7,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: s7,
      __wbg_createQuery_f013132b870a71ef: $7,
      __wbg_createSampler_9fe50152a2524319: D7,
      __wbg_createVertexArray_8685feb21901c932: C7,
      __wbg_deleteQuery_ef51ea0a52420103: K7,
      __wbg_deleteSampler_5c045e0cc55813d4: Q7,
      __wbg_getIndexedParameter_2b18df6fca85f751: s8,
      __wbg_getQueryParameter_0599e85ddb81220b: m8,
      __wbg_getSyncParameter_9a2bda340ebe166f: A8,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: I8,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: Y8,
      __wbg_deleteSync_37ca83c429c43d8a: Z7,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: r6,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: y6,
      __wbg_drawBuffers_558d96e52e754731: S6,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: I6,
      __wbg_endQuery_161170c5280a8293: k6,
      __wbg_fenceSync_56efc7cc79111e54: E6,
      __wbg_framebufferTextureLayer_2312acdc74f97676: Q6,
      __wbg_getBufferSubData_92680d3a2f7be029: _8,
      __wbg_readBuffer_361ec5474f3aae49: I9,
      __wbg_readPixels_5840000f3e22f3ce: T9,
      __wbg_readPixels_5bf204799ed2272f: F9,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: B9,
      __wbg_texImage3D_8647ef58aef5b912: B$,
      __wbg_texStorage2D_ed5df596c5f1e3af: M$,
      __wbg_texStorage3D_160b0197bc190f04: R$,
      __wbg_texSubImage2D_f03448e182b0820d: z$,
      __wbg_texSubImage2D_d14d9c0a1f627c31: W$,
      __wbg_texSubImage2D_89866a04ecd0a76b: E$,
      __wbg_texSubImage2D_5c630043f1c56716: L$,
      __wbg_samplerParameterf_3157ba41c0f4d97a: O9,
      __wbg_samplerParameteri_f85a29156e790189: G9,
      __wbg_texImage2D_0e0f37b9fb297d01: I$,
      __wbg_texImage2D_0e537dc331652de3: D$,
      __wbg_texImage3D_30dbf7234481b8f5: F$,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: V$,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: O$,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: G$,
      __wbg_texSubImage3D_933e4cd41cc5376d: K$,
      __wbg_texSubImage3D_c3538b28040daac9: J$,
      __wbg_uniform1ui_36c94692177ebf76: rv,
      __wbg_uniform2fv_17592f4dad9798fb: nv,
      __wbg_uniform2iv_d5d29ebbc466977d: cv,
      __wbg_texSubImage3D_0fdbd843482bb916: q$,
      __wbg_texSubImage3D_09a97a968b93253d: U$,
      __wbg_texSubImage3D_355efde0dc047913: j$,
      __wbg_texSubImage3D_bd32c8e29e470904: N$,
      __wbg_texSubImage3D_5a238709d114b609: H$,
      __wbg_uniform2uiv_418ba3bf6a230dd5: bv,
      __wbg_uniform4fv_9e670a001c77dca0: lv,
      __wbg_uniform4iv_1d57c6b8e5c0e447: mv,
      __wbg_uniform3fv_dbe44b778e6b89e8: iv,
      __wbg_uniform3iv_d75d3a5f86d54be4: uv,
      __wbg_uniform3uiv_71c1efc24a662de9: dv,
      __wbg_uniform4uiv_c5d45f5dbdae727a: yv,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: Iv,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: Tv,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: Fv,
      __wbg_uniformBlockBinding_829a71912ad79a04: xv,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: $v,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: Sv,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: Av,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: Bv,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: Gv,
      __wbg_activeTexture_525ee3068cb9e8d5: J4,
      __wbg_attachShader_3477e67517b09b6b: Z4,
      __wbg_bindAttribLocation_79b5d26727094518: rm,
      __wbg_bindBuffer_d3111de6861cb875: om,
      __wbg_bindFramebuffer_63e837a5dc0accfb: sm,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: im,
      __wbg_bindTexture_7ab28ff4ff3dc506: dm,
      __wbg_blendColor_15f26633b646e542: lm,
      __wbg_blendEquation_7dadb4db540a42da: xm,
      __wbg_blendEquationSeparate_8240ddfa32266109: hm,
      __wbg_blendFunc_b15af02643e188f1: Im,
      __wbg_blendFuncSeparate_456410f9919bed39: Sm,
      __wbg_clear_dadcb3e2929388b0: jm,
      __wbg_clearDepth_05c17028494ee4dd: Wm,
      __wbg_clearStencil_917833d1e2ac56e4: qm,
      __wbg_colorMask_f111e3e5796458f4: Qm,
      __wbg_compileShader_f5625b583b2c9fd6: Xm,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: kv,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: Mv,
      __wbg_vertexAttribDivisor_f17a8585267be92f: Ov,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: c7,
      __wbg_createBuffer_9f602b2dbcbf409c: p7,
      __wbg_createFramebuffer_4a250944a4542bbc: l7,
      __wbg_createProgram_4c8164d471c10346: y7,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: A7,
      __wbg_createShader_9c5cd42709d915ff: B7,
      __wbg_createTexture_3eed23cb87dd35fc: P7,
      __wbg_cullFace_94f24b4fd5e9038b: O7,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: W7,
      __wbg_getExtension_11824edd67a143d8: b8,
      __wbg_getParameter_7f7f23cae98f2c81: f8,
      __wbg_getProgramInfoLog_cd84be80942f345b: p8,
      __wbg_getProgramParameter_039391d5ba319f50: w8,
      __wbg_getShaderInfoLog_495bddda98172699: h8,
      __wbg_getShaderParameter_4eb65cfb174ceb22: x8,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: v8,
      __wbg_getUniformLocation_ab63f569a4e41744: T8,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: U7,
      __wbg_deleteProgram_eff668280dcb01ca: H7,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: J7,
      __wbg_deleteShader_3339454254c7147c: X7,
      __wbg_deleteTexture_c1c58550dc55af5c: _6,
      __wbg_depthFunc_31b183b5b8ee478e: n6,
      __wbg_depthMask_cab7f2ae7f0e559c: c6,
      __wbg_depthRange_797a71ba3b79267a: b6,
      __wbg_disable_cb1b3e6c1cee5202: w6,
      __wbg_disableVertexAttribArray_b395358ec5084c39: g6,
      __wbg_drawArrays_42dbb4b0349c8f34: $6,
      __wbg_enable_d1f42f78be33a553: P6,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: T6,
      __wbg_flush_7ae42f071230db6b: U6,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: K6,
      __wbg_framebufferTexture2D_367ab597a005e8d9: N6,
      __wbg_frontFace_9bdcf2a758e989e5: Y6,
      __wbg_linkProgram_e23a348b0f6e0c4f: f5,
      __wbg_pixelStorei_a78a504be58d1d0a: d9,
      __wbg_polygonOffset_a4f07d97b9b0dced: p9,
      __wbg_renderbufferStorage_3049e13db5c4e60e: k9,
      __wbg_scissor_6c024669fbf4fe72: W9,
      __wbg_vertexAttribPointer_4e5d289c5d224210: zv,
      __wbg_viewport_a0ca330f9b85397e: Uv,
      __wbg_shaderSource_66dce75b25a1a407: c$,
      __wbg_stencilFuncSeparate_ec603976be9569a4: m$,
      __wbg_stencilMask_485dcb5965c79a71: x$,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: y$,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: v$,
      __wbg_texParameteri_c6efffcecb474d2f: P$,
      __wbg_uniform1f_3acd3f3eb50b5e11: Z$,
      __wbg_uniform1i_e4f13604354c28ae: tv,
      __wbg_uniform4f_a5008773cfb47d1a: pv,
      __wbg_useProgram_ab2ee2a13a1fd909: Vv,
      __wbg_bufferSubData_2270f1b9db71e642: km,
      __wbg_clearBufferfv_6b77b9402254a2bf: Em,
      __wbg_clearBufferiv_0f056544010eef3e: Om,
      __wbg_beginQuery_dad334d972fed3cc: _m,
      __wbg_bindBufferRange_16a9d90becc2a7d7: am,
      __wbg_bindSampler_3c7002cb6d56ae8f: um,
      __wbg_bindVertexArray_c391bd47303d75cd: wm,
      __wbg_blitFramebuffer_ea96ada8bba07582: Dm,
      __wbg_bufferData_64e9905f2b3d3a6f: Bm,
      __wbg_bufferData_99bbbc63f02251c4: Pm,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: Q8,
      __wbg_performance_4c23a97261596fec: f9,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: V9,
      __wbg_fetch_2d913f7108d17a24: O6,
      __wbg_fetch_d8c50740ea23b248: G6,
      __wbg_navigator_935098efd1dc7fe5: H5,
      __wbg_devicePixelRatio_8e5ca44720abafec: u6,
      __wbg_document_2634180a4c694068: l6,
      __wbg_instanceof_Window_0d356b88a2f77c42: X8,
      __wbg_hidden_cb32701ca3785fea: E8,
      __wbg_getElementById_c7aba6b93b34bf01: c8,
      __wbg_querySelector_1f3658f4b48e268b: $9,
      __wbg_querySelectorAll_ffda3c891a9eb29a: x9,
      __wbg_hasAttribute_73e1230c9c107e79: C8,
      __wbg_setAttribute_8bccfbabf2a83682: U9,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: e8,
      __wbg_focus_c80921c19b28520b: j6,
      __wbg_uniform2iv_c5e863975dd780d8: ov,
      __wbg_uniform3fv_7723e142be50856f: sv,
      __wbg_uniform3iv_bea3976522e15d48: fv,
      __wbg_uniform4fv_85ad5d23234895d2: wv,
      __wbg_clear_ff8cfdf420f7dde6: Hm,
      __wbg_clearDepth_ac6b54f112feeaf7: zm,
      __wbg_clearStencil_56d6a6308294a749: Um,
      __wbg_colorMask_b0ab9d429a1efa0a: Jm,
      __wbg_compileShader_fcf3f3d2891f73f9: Ym,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: b7,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: d7,
      __wbg_createFramebuffer_ab73f30b5dc97415: m7,
      __wbg_createProgram_f11c63f59f41b82a: x7,
      __wbg_createRenderbuffer_556000dbb01f5026: S7,
      __wbg_createShader_27d9388313f3b14e: F7,
      __wbg_createTexture_8455c703424c567b: k7,
      __wbg_cullFace_774780fb4177aab8: E7,
      __wbg_deleteBuffer_d758283bea6e0ccf: z7,
      __wbg_deleteFramebuffer_8953b325144192fe: q7,
      __wbg_deleteProgram_0135c6926e75af75: j7,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: N7,
      __wbg_deleteShader_79dbaaed69b7ca3b: Y7,
      __wbg_deleteTexture_3acb672a45f9998a: e6,
      __wbg_depthFunc_eaca1bc79f7bf216: a6,
      __wbg_depthMask_3a9074b08d1f68e5: o6,
      __wbg_depthRange_c24a808b3496e0a9: s6,
      __wbg_uniform4iv_a9aaa92f2f458ec2: hv,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: vv,
      __wbg_uniformMatrix3fv_da8c388748c5739b: Dv,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: Pv,
      __wbg_activeTexture_1d5359b20df41710: N4,
      __wbg_attachShader_683d1070365e7066: em,
      __wbg_bindAttribLocation_d56d3c40331af7ed: nm,
      __wbg_bindBuffer_e95efaf0d4851845: cm,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: bm,
      __wbg_bindRenderbuffer_d608b211c51ed147: fm,
      __wbg_bindTexture_ffc56f1e5c5526c6: gm,
      __wbg_blendColor_a0ba1cdcecc3a34c: mm,
      __wbg_blendEquation_8bfa69f639ae92da: $m,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: ym,
      __wbg_blendFunc_713c504adab14f98: Am,
      __wbg_blendFuncSeparate_3eef699c291dbc87: vm,
      __wbg_disable_4dca6ee0ccc91e4a: p6,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: d6,
      __wbg_drawArrays_10e1254aa4524ae9: x6,
      __wbg_enable_c6e523307311617a: B6,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: F6,
      __wbg_flush_eb3fb8da2ec00d57: q6,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: H6,
      __wbg_linkProgram_6a2eee02a03b9b00: i5,
      __wbg_pixelStorei_55ad4c67b699537c: u9,
      __wbg_polygonOffset_06dc6468c12a57e1: g9,
      __wbg_renderbufferStorage_2918fb696fd45663: P9,
      __wbg_scissor_f9696c630e464977: z9,
      __wbg_shaderSource_628c37a476ae65f9: o$,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: l$,
      __wbg_stencilMask_f9fe198f7fd6fc9c: $$,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: h$,
      __wbg_stencilOpSeparate_6cf50803475d2640: S$,
      __wbg_texParameteri_fe6210a493d48a16: k$,
      __wbg_framebufferTexture2D_3a558e14f56720d2: J6,
      __wbg_frontFace_c9bb1fa659ffd276: Z6,
      __wbg_getParameter_91a344e1a84a4669: u8,
      __wbg_getProgramInfoLog_35410850de9ccefe: g8,
      __wbg_getProgramParameter_bbc667347ac2e882: l8,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: y8,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: $8,
      __wbg_getUniformLocation_340155dc706d3fea: D8,
      __wbg_uniform1f_d34e4b454f7c8e73: ev,
      __wbg_uniform1i_cd9a7f990128ea48: _v,
      __wbg_uniform4f_4410d2faaa7e5dda: gv,
      __wbg_useProgram_0e1cd86765304939: Cv,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: Wv,
      __wbg_viewport_b5bd46a0d111c83c: qv,
      __wbg_texSubImage2D_1b2ff28f994c325e: C$,
      __wbg_uniform2fv_39277cf2d3cb83c7: av,
      __wbg_bufferData_5df9bdb32e189eee: Fm,
      __wbg_bufferData_26132561617ce8fb: Tm,
      __wbg_bufferSubData_44db8a3b4a70b57d: Mm,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: Zm,
      __wbg_readPixels_05377f8b6fa1d8eb: D9,
      __wbg_texImage2D_7bc3001cb8602ed2: T$,
      __wbg_navigator_017bc45e84c473cc: j5,
      __wbg_log_d282446d03691e72: u5,
      __wbg_info_a392cd5b7536cfb5: W8,
      __wbg_warn_88c4a5bd9a322000: jv,
      __wbg_debug_7271beced8b71cd4: G7,
      __wbg_error_933f449d72fef598: V6,
      __wbg_error_50f60c611a3dcf64: C6,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: pm,
      __wbg_width_08e66520b99071f4: Hv,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: R7,
      __wbg_height_e9afb506f31052a9: L8,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: t6,
      __wbg_queryCounterEXT_ebb00bcc96221671: y9,
      __wbg_aborted_4d4114700dc4c251: K4,
      __wbg_addEventListener_ea90bc131475777e: Q4,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: X6,
      __wbg_set_width_f9e631f4ee129e5c: _$,
      __wbg_set_height_ef298446b359b0c5: my,
      __wbg_getContext_70c2d1bed75d4122: n8,
      __wbg_getContext_422b32d0ee4b8076: t8,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: h6,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: A6,
      __wbg_arrayBuffer_ff96d08b7b6be32e: Y4,
      __wbg_get_37b48b8fa52d1f2c: B8,
      __wbg_status_0053aa6239760447: w$,
      __wbg_ok_c962da6f1a034d81: s9,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: Ev,
      __wbg_statusText_0f412961834ccfe9: p$,
      __wbg_instanceof_Response_79948c98d1d2ba75: N8,
      __wbg_set_signal_4a69430cb12800f3: wx,
      __wbg_new_1e52e3c919312525: K5,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: v6,
      __wbg_observe_592b94857eed8e27: a9,
      __wbg_altKey_7412dd64f8c921c7: X4,
      __wbg_ctrlKey_00097886a21597a7: L7,
      __wbg_shiftKey_273ee8c901267b55: b$,
      __wbg_metaKey_1c2847b62ad062c1: z5,
      __wbg_repeat_46a5c90df9f6ef0b: M9,
      __wbg_isComposing_e3709163a95a2477: e5,
      __wbg_key_d6b3d2cce3d41872: n5,
      __wbg_code_87bb99fdec02d313: Nm,
      __wbg_now_0f628e0e435c541b: n9,
      __wbg_offsetX_0214819d43aaf6d5: c9,
      __wbg_offsetY_f18f571e33b385ab: b9,
      __wbg_button_bb3285fcdf965178: Rm,
      __wbg_signal_4d9d567be73ea52c: s$,
      __wbg_new_51233fa2a760b272: X5,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: S8,
      __wbg_abort_6e6ea7d259504afc: H4,
      __wbg_preventDefault_c047d3e292b08cc4: w9,
      __wbg_contentRect_0fb8c8900d689a0c: a7,
      __wbg_width_a86bcd32bd998060: Kv,
      __wbg_height_cd732bbdc7b66e49: V8,
      __wbg_set_width_031bdecd763c5855: Zx,
      __wbg_set_height_ad5056ea051acd78: wy,
      __wbg_getContext_486aab500e1c34c9: r8,
      __wbg_getContext_9fd4db9b1cf155db: a8,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: j8,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: K8,
      __wbg_resolve_d82363d90af6928a: E9,
      __wbg_then_591b6b3a75ee817a: Y$,
      __wbg_iterator_cc47ba25a2be735a: r5,
      __wbg_get_9a29be2cb383ed9a: P8,
      __wbg_next_402fa10b59ab20c3: r9,
      __wbg_new_2e117a478906f062: J5,
      __wbg_new_36e147a8ced3c6e0: Q5,
      __wbg_of_62183ea089c00bfa: o9,
      __wbg_isArray_145a34fd0a38d37b: Z8,
      __wbg_new_e66a4b7758dd2e5c: Z5,
      __wbg_isSafeInteger_a3389a198582f5f6: _5,
      __wbg_is_de5b366c746e004c: t5,
      __wbg_entries_c261c3fa1f281256: R6,
      __wbg_then_2a84678a50976959: X$,
      __wbg_length_589238bdcf171f0e: o5,
      __wbg_prototypesetcall_d721637c7ca66eb8: m9,
      __wbg_set_272b80acaf9a75e8: Y9,
      __wbg_new_81880fb5002cb255: Y5,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: _9,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: f$,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: d$,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: u$,
      __wbg_static_accessor_WINDOW_168f178805d978fe: g$,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: z8,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: J8,
      __wbg_queueMicrotask_1c9b3800e321a967: v9,
      __wbg_queueMicrotask_311744e534a929a3: S9,
      __wbg_set_4564f7dc44fcb0c9: Z9,
      __wbg___wbindgen_number_get_1cc01dd708740256: z4,
      __wbg___wbindgen_in_4990f46af709e33c: M4,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: q4,
      __wbg___wbindgen_is_null_6d937fbfb6478470: V4,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: G4,
      __wbg_Number_c4bdf66bb78f7977: I4,
      __wbg_Error_fdd633d4bb5dd76a: A4,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: R4,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: L4,
      __wbg___wbindgen_is_string_1fca8072260dd261: E4,
      __wbg___wbindgen_string_get_71bb4348194e31f0: U4,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: P4,
      __wbg___wbindgen_is_function_acc5528be2b923f2: C4,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: O4,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: W4,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: B4,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: j4,
      __wbg___wbindgen_debug_string_8a447059637473e2: k4,
      __wbindgen_init_externref_table: pS,
      __wbindgen_cast_0000000000000001: Qv,
      __wbindgen_cast_0000000000000002: Xv,
      __wbindgen_cast_0000000000000003: Yv,
      __wbindgen_cast_0000000000000004: Zv,
      __wbindgen_cast_0000000000000005: eS,
      __wbindgen_cast_0000000000000006: _S,
      __wbindgen_cast_0000000000000007: tS,
      __wbindgen_cast_0000000000000008: rS,
      __wbindgen_cast_0000000000000009: nS,
      __wbindgen_cast_000000000000000a: aS,
      __wbindgen_cast_000000000000000b: oS,
      __wbindgen_cast_000000000000000c: cS,
      __wbindgen_cast_000000000000000d: bS,
      __wbindgen_cast_000000000000000e: sS,
      __wbindgen_cast_000000000000000f: iS,
      __wbindgen_cast_0000000000000010: fS,
      __wbindgen_cast_0000000000000011: uS,
      __wbindgen_cast_0000000000000012: dS,
      __wbindgen_cast_0000000000000013: gS
    }
  }, h4), { memory: ZS, clear: eA, on_frame: _A, show: tA, start: rA, stop_frames: nA, mount: aA, __wbg_proteusapp_free: oA, proteusapp_addChild: cA, proteusapp_animateTo: bA, proteusapp_bakeTexture: sA, proteusapp_bakedImageSize: iA, proteusapp_bakedTextSize: fA, proteusapp_bindKey: uA, proteusapp_channelDestroy: dA, proteusapp_channelSet: gA, proteusapp_clearFocus: pA, proteusapp_component: wA, proteusapp_copyBakedImageFrom: lA, proteusapp_createVideo: mA, proteusapp_cropImage: hA, proteusapp_declareGeometry: yA, proteusapp_declaredGeometry: xA, proteusapp_destroy: $A, proteusapp_devices: vA, proteusapp_focus: SA, proteusapp_focused: AA, proteusapp_freeResources: IA, proteusapp_get: DA, proteusapp_hideVideo: TA, proteusapp_inputDevices: FA, proteusapp_isFocused: BA, proteusapp_loadTexture: PA, proteusapp_mergeFrom: kA, proteusapp_mergeFromWithBehavior: MA, proteusapp_new: RA, proteusapp_onAppKey: CA, proteusapp_onBlur: VA, proteusapp_onClick: LA, proteusapp_onDrag: EA, proteusapp_onDropped: OA, proteusapp_onFocus: GA, proteusapp_onFocusLost: WA, proteusapp_onHoverEnter: zA, proteusapp_onHoverExit: UA, proteusapp_onKey: qA, proteusapp_onPress: jA, proteusapp_onRelease: HA, proteusapp_onTransitionComplete: KA, proteusapp_pointerLeft: NA, proteusapp_pointerMoved: JA, proteusapp_pointerPressed: QA, proteusapp_pointerReleased: XA, proteusapp_releaseVideo: YA, proteusapp_removeChild: ZA, proteusapp_resetKeyMap: eI, proteusapp_setDeclaredGeometry: _I, proteusapp_setDefaultFocus: tI, proteusapp_setDevices: rI, proteusapp_setDisabled: nI, proteusapp_setImage: aI, proteusapp_setInputDevices: oI, proteusapp_setInteractive: cI, proteusapp_setKeyRepeat: bI, proteusapp_setLongPressMs: sI, proteusapp_setOpacity: iI, proteusapp_setText: fI, proteusapp_setTexture: uI, proteusapp_setTransitionInteraction: dI, proteusapp_setVideoCrossfade: gI, proteusapp_setVisible: pI, proteusapp_showVideo: wI, proteusapp_splitTo: lI, proteusapp_splitToWithBehavior: mI, proteusapp_splitToWithStates: hI, proteusapp_texture: yI, proteusapp_textureState: xI, proteusapp_tick: $I, proteusapp_transitionChannel: vI, proteusapp_unbindKey: SI, proteusapp_uploadVideoFrame: AI, __wbg_handle_free: II, __wbg_texturehandle_free: DI, __wbg_transitionchannel_free: TI, __wbg_videohandle_free: FI, handle_fromId: BI, handle_id: PI, texturehandle_fromId: kI, texturehandle_id: MI, __abort_handler: RI, __instance_terminated: CI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: VI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: LI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: EI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: OI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: GI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: WI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: zI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: UI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: qI, __wbindgen_malloc: jI, __wbindgen_realloc: HI, __wbindgen_exn_store: KI, __externref_table_alloc: NI, __wbindgen_externrefs: JI, __wbindgen_free: QI, __wbindgen_destroy_closure: XI, __externref_table_dealloc: YI, __wbindgen_start: Ht } = YS, ZI = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: RI,
    __externref_table_alloc: NI,
    __externref_table_dealloc: YI,
    __instance_terminated: CI,
    __wbg_handle_free: II,
    __wbg_proteusapp_free: oA,
    __wbg_texturehandle_free: DI,
    __wbg_transitionchannel_free: TI,
    __wbg_videohandle_free: FI,
    __wbindgen_destroy_closure: XI,
    __wbindgen_exn_store: KI,
    __wbindgen_externrefs: JI,
    __wbindgen_free: QI,
    __wbindgen_malloc: jI,
    __wbindgen_realloc: HI,
    __wbindgen_start: Ht,
    clear: eA,
    handle_fromId: BI,
    handle_id: PI,
    memory: ZS,
    mount: aA,
    on_frame: _A,
    proteusapp_addChild: cA,
    proteusapp_animateTo: bA,
    proteusapp_bakeTexture: sA,
    proteusapp_bakedImageSize: iA,
    proteusapp_bakedTextSize: fA,
    proteusapp_bindKey: uA,
    proteusapp_channelDestroy: dA,
    proteusapp_channelSet: gA,
    proteusapp_clearFocus: pA,
    proteusapp_component: wA,
    proteusapp_copyBakedImageFrom: lA,
    proteusapp_createVideo: mA,
    proteusapp_cropImage: hA,
    proteusapp_declareGeometry: yA,
    proteusapp_declaredGeometry: xA,
    proteusapp_destroy: $A,
    proteusapp_devices: vA,
    proteusapp_focus: SA,
    proteusapp_focused: AA,
    proteusapp_freeResources: IA,
    proteusapp_get: DA,
    proteusapp_hideVideo: TA,
    proteusapp_inputDevices: FA,
    proteusapp_isFocused: BA,
    proteusapp_loadTexture: PA,
    proteusapp_mergeFrom: kA,
    proteusapp_mergeFromWithBehavior: MA,
    proteusapp_new: RA,
    proteusapp_onAppKey: CA,
    proteusapp_onBlur: VA,
    proteusapp_onClick: LA,
    proteusapp_onDrag: EA,
    proteusapp_onDropped: OA,
    proteusapp_onFocus: GA,
    proteusapp_onFocusLost: WA,
    proteusapp_onHoverEnter: zA,
    proteusapp_onHoverExit: UA,
    proteusapp_onKey: qA,
    proteusapp_onPress: jA,
    proteusapp_onRelease: HA,
    proteusapp_onTransitionComplete: KA,
    proteusapp_pointerLeft: NA,
    proteusapp_pointerMoved: JA,
    proteusapp_pointerPressed: QA,
    proteusapp_pointerReleased: XA,
    proteusapp_releaseVideo: YA,
    proteusapp_removeChild: ZA,
    proteusapp_resetKeyMap: eI,
    proteusapp_setDeclaredGeometry: _I,
    proteusapp_setDefaultFocus: tI,
    proteusapp_setDevices: rI,
    proteusapp_setDisabled: nI,
    proteusapp_setImage: aI,
    proteusapp_setInputDevices: oI,
    proteusapp_setInteractive: cI,
    proteusapp_setKeyRepeat: bI,
    proteusapp_setLongPressMs: sI,
    proteusapp_setOpacity: iI,
    proteusapp_setText: fI,
    proteusapp_setTexture: uI,
    proteusapp_setTransitionInteraction: dI,
    proteusapp_setVideoCrossfade: gI,
    proteusapp_setVisible: pI,
    proteusapp_showVideo: wI,
    proteusapp_splitTo: lI,
    proteusapp_splitToWithBehavior: mI,
    proteusapp_splitToWithStates: hI,
    proteusapp_texture: yI,
    proteusapp_textureState: xI,
    proteusapp_tick: $I,
    proteusapp_transitionChannel: vI,
    proteusapp_unbindKey: SI,
    proteusapp_uploadVideoFrame: AI,
    show: tA,
    start: rA,
    stop_frames: nA,
    texturehandle_fromId: kI,
    texturehandle_id: MI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: qI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: VI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: GI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: WI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: zI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: UI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: EI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: OI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: LI
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  XS(ZI);
  Ht();
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
  const _Te = class _Te {
    constructor() {
      this.state = 0x9e3779b97f4a7c15n;
    }
    next() {
      let e = this.state;
      return e ^= e << 13n & _Te.MASK, e ^= e >> 7n, e ^= e << 17n & _Te.MASK, this.state = e, Number(e >> 40n) / 2 ** 24;
    }
    between(e, t) {
      return e + (t - e) * this.next();
    }
  };
  _Te.MASK = (1n << 64n) - 1n;
  let Te = _Te;
  function rt(_, e) {
    const { min: t, max: r } = j[_], n = new Te();
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
  const eD = `#version 300 es
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
}`, _D = `#version 300 es
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
}`, tD = `#version 300 es
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
    if (_.attachShader(r, t(_.VERTEX_SHADER, e)), _.attachShader(r, t(_.FRAGMENT_SHADER, eD)), _.linkProgram(r), !_.getProgramParameter(r, _.LINK_STATUS)) throw new Error(_.getProgramInfoLog(r) ?? "program failed to link");
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
  function rD(_) {
    return (e, t, r) => {
      const n = Kt(_, _D), a = Nt(_), o = _.createVertexArray();
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
  function nD(_) {
    return (e, t, r) => {
      const n = Kt(_, tD), a = Nt(_), o = _.createVertexArray();
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
  function aD(_) {
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
  function oD(_) {
    return _ < 0.5 ? 2 * _ * _ : 1 - (-2 * _ + 2) ** 2 / 2;
  }
  const cD = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
  class nt {
    constructor(e) {
      this.random = new Te(), this.movedAt = -1 / 0, this.current = new Float32Array(e.flatMap((t) => [
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
      const t = oD(Math.min(1, (e - this.movedAt) / C_));
      for (let r = 0; r < this.current.length; r++) this.current[r] = this.from[r] + (this.to[r] - this.from[r]) * t;
    }
  }
  function bD(_, e, t) {
    const r = new nt(e), n = document.createDocumentFragment(), a = e.map((o, c) => {
      const b = document.createElement("div"), f = b.style;
      return f.position = "absolute", f.left = "0", f.top = "0", f.width = `${o.width}px`, f.height = `${o.height}px`, f.borderRadius = `${t}px`, f.background = `rgb(${Math.round(o.r * 255)} ${Math.round(o.g * 255)} ${Math.round(o.b * 255)})`, f.transform = It(r.current[c * 2], r.current[c * 2 + 1], o), f.transition = `transform ${C_}ms ${cD}`, n.append(b), b;
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
  const sD = [
    100,
    1e3,
    5e3,
    1e4,
    25e3,
    5e4,
    1e5
  ], iD = 60, fD = 2e3, V_ = 1e5, Dt = 100, at = `proteus-bench:${location.pathname}`, uD = 300, dD = 15e3, o_ = document.getElementById("status"), Qt = document.getElementById("results"), he = document.getElementById("run"), b_ = document.getElementById("reset"), ye = {
    proteus: document.getElementById("proteus"),
    proteusRust: document.getElementById("proteus-rust"),
    webgl: document.getElementById("webgl"),
    canvas2d: document.getElementById("canvas2d"),
    css: document.getElementById("css")
  }, Xt = new URLSearchParams(location.search), Ie = ((_a2 = Xt.get("counts")) == null ? void 0 : _a2.split(",").map(Number).filter((_) => _ > 0)) ?? sD, ot = (((_b2 = Xt.get("scenes")) == null ? void 0 : _b2.split(",")) ?? [
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
  function gD(_) {
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
        if (r += 1, r === 1 && (o = f), !c && (r >= iD || f - o > fD)) {
          c = true, a = f, n = f;
          return;
        }
        c && t.push(f - n), n = f, c && (t.length >= uD || f - a > dD) && (b(), e(gD(t)));
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
  const Zt = Math.max(4096, 2 ** Math.ceil(Math.log2(Math.max(...Ie))));
  let er, L_;
  await p4("proteus", {
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
  await v4("proteus-rust", Zt);
  async function pD(_, e) {
    $4(_, e);
    const t = await ke((r) => (x4(r), () => S4()));
    return y4(), t;
  }
  async function wD(_, e) {
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
  const Fe = window.devicePixelRatio;
  for (const _ of [
    ye.webgl,
    ye.canvas2d
  ]) _.width = te * Fe, _.height = re * Fe;
  const pe = ye.webgl.getContext("webgl2", {
    antialias: false
  }), _r = ye.canvas2d.getContext("2d");
  _r.scale(Fe, Fe);
  async function bt(_, e, t) {
    const r = rt(e, t), n = new nt(r), a = _(r, n.current, j[e].radius), o = await ke(ct((c) => {
      e === "moving" && (n.retarget(c), n.advance(c)), a.draw();
    }));
    return a.dispose(), o;
  }
  async function lD(_) {
    const e = bD(ye.css, rt("moving", _), j.moving.radius), t = await ke(ct((r) => e.frame(r)));
    return e.dispose(), t;
  }
  function Tt(_) {
    for (const [e, t] of Object.entries(ye)) t.style.visibility = e === _ ? "visible" : "hidden";
  }
  const x_ = {
    title: "Proteus (TypeScript)",
    surface: "proteus",
    time: wD
  }, $_ = {
    title: "Proteus (Rust)",
    surface: "proteusRust",
    time: pD
  }, mD = {
    title: "CSS",
    surface: "css",
    time: (_, e) => lD(e)
  }, v_ = {
    title: "Canvas 2D",
    surface: "canvas2d",
    time: (_, e) => bt(aD(_r), _, e)
  }, S_ = {
    title: "Naive WebGL2",
    surface: "webgl",
    time: (_, e) => bt(rD(pe), _, e)
  }, A_ = {
    title: "Batched WebGL2",
    surface: "webgl",
    time: (_, e) => bt(nD(pe), _, e)
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
      mD,
      v_,
      S_,
      A_
    ]
  }, E_ = {
    small: 1 / 0,
    large: V_,
    moving: 1 / 0
  }, hD = {
    small: `Small components (${j.small.min}\u2013${j.small.max} px), still: the cost per component`,
    large: `Large components (${j.large.min}\u2013${j.large.max} px), still: filling pixels dominates`,
    moving: `Moving components (${j.moving.min}\u2013${j.moving.max} px): every one always moving`
  };
  function yD(_) {
    const e = pe.getExtension("WEBGL_debug_renderer_info"), t = e ? pe.getParameter(e.UNMASKED_RENDERER_WEBGL) : pe.getParameter(pe.RENDERER);
    return [
      `- Browser: ${navigator.userAgent}`,
      `- GPU: ${t}`,
      `- Proteus's adapter: ${Yt}`,
      `- Device pixel ratio: ${Fe}; canvas ${te} \xD7 ${re} CSS pixels`,
      `- Refresh rate: about ${(1e3 / _).toFixed(0)} Hz (a frame every ${_.toFixed(2)} ms)`
    ].join(`
`);
  }
  function xD() {
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
  const V = xD();
  if (V.running) {
    const [_, e, t] = V.running.split("|");
    V.cells[V.running] = "crashed | \u2014", V.dropped[`${_}|${t}`] = `crashed at ${e}`, V.running = void 0, c_();
  }
  const $D = (_) => `${_.median.toFixed(2)} | ${_.p99.toFixed(2)}`;
  function rr(_) {
    return Ie.filter((e) => e <= E_[_]).flatMap((e) => tr[_].map((t) => [
      e,
      t
    ])).filter(([e, t]) => V.cells[`${_}|${e}|${t.title}`] === void 0);
  }
  async function vD() {
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
        V.cells[r] = $D(a), a.median >= Dt && (V.dropped[`${_}|${t.title}`] = `slower than ${Dt} ms a frame at ${e}`);
      } catch (a) {
        console.error(a), V.cells[r] = "failed | \u2014", V.dropped[`${_}|${t.title}`] = `failed at ${e}: ${String(a)}`;
      }
      V.running = void 0, c_(), Qt.textContent = nr();
    }
    o_.textContent = "Done. Copy the results below.", he.textContent = "Run", he.disabled = false, b_.disabled = false;
  }
  function nr() {
    const _ = [
      yD(V.refresh ?? 0)
    ];
    for (const e of ot) {
      const t = tr[e].map((a) => a.title), r = Ie.filter((a) => a <= E_[e]).map((a) => t.map((o) => V.cells[`${e}|${a}|${o}`])).map((a, o) => ({
        count: Ie.filter((c) => c <= E_[e])[o],
        cells: a
      })).filter(({ cells: a }) => a.some((o) => o !== void 0));
      if (r.length === 0) continue;
      _.push("", `### ${hD[e]}`, "", "Frame interval, median and p99, in milliseconds:", "", `| Components | ${t.map((a) => `${a} | p99`).join(" | ")} |`, `|---:|${t.map(() => "---:|---:").join("|")}|`, ...r.map(({ count: a, cells: o }) => `| ${a} | ${o.map((c) => c ?? "\u2026 | \u2026").join(" | ")} |`));
      const n = t.map((a) => [
        a,
        V.dropped[`${e}|${a}`]
      ]).filter(([, a]) => a).map(([a, o]) => `- ${a}: ${o}; skipped after that.`);
      n.length > 0 && _.push("", ...n), e === "large" && Ie.some((a) => a > V_) && _.push("", `The large scene stops at ${V_}: past it, Safari's tab crashes.`);
    }
    return _.join(`
`);
  }
  he.addEventListener("click", () => void vD());
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
