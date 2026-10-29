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
  const ar = "" + new URL("proteus_sdk_web_bg-Bj4K_Uqu.wasm", import.meta.url).href, O_ = async (_ = {}, e) => {
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
      const a = Ee(t, u.__wbindgen_malloc), o = O, c = u.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw F(c[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      w(e, y);
      const o = Ee(t, u.__wbindgen_malloc), c = O, b = u.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
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
      const a = Ee(t, u.__wbindgen_malloc), o = O, c = u.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw F(c[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      w(e, y);
      const o = Ee(t, u.__wbindgen_malloc), c = O, b = u.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
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
      return t[0] !== 0 && (r = j(t[0], t[1]).slice(), u.__wbindgen_free(t[0], t[1] * 1, 1)), r;
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
    return Error(j(_, e));
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
    throw new Error(j(_, e));
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
  function Cr(_) {
    _.destroy();
  }
  function Rr(_) {
    return _.done;
  }
  function Vr(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function Er(_) {
    _.end();
  }
  function Lr(_) {
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
    return new Error(j(_, e));
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
  function Cn(_, e) {
    _.buffer = e;
  }
  function Rn(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function Vn(_, e) {
    _.clearValue = e;
  }
  function En(_, e) {
    _.colorAttachments = e;
  }
  function Ln(_, e, t) {
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
    _.label = j(e, t);
  }
  function ea(_, e, t) {
    _.label = j(e, t);
  }
  function _a(_, e, t) {
    _.label = j(e, t);
  }
  function ta(_, e, t) {
    _.label = j(e, t);
  }
  function ra(_, e, t) {
    _.label = j(e, t);
  }
  function na(_, e, t) {
    _.label = j(e, t);
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
  function Ca(_, e) {
    _.x = e >>> 0;
  }
  function Ra(_, e) {
    _.y = e >>> 0;
  }
  function Va(_, e) {
    _.z = e >>> 0;
  }
  function Ea() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return q(_) ? 0 : Be(_);
  }
  function La() {
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
  function Ha(_) {
    _.unmap();
  }
  function ja(_) {
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
    return Ct(_, e, to);
  }
  function Qa(_, e) {
    return Ct(_, e, ro);
  }
  function Xa(_) {
    return _;
  }
  function Ya(_) {
    return _;
  }
  function Za(_, e) {
    return j(_, e);
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
  let Ce = null;
  function co() {
    return (Ce === null || Ce.byteLength === 0) && (Ce = new Float64Array(u.memory.buffer)), Ce;
  }
  function j(_, e) {
    return io(_ >>> 0, e);
  }
  let Re = null;
  function bo() {
    return (Re === null || Re.byteLength === 0) && (Re = new Uint32Array(u.memory.buffer)), Re;
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
  function Ct(_, e, t) {
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
  function Ee(_, e) {
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
      __wbg_done_b62d4a7d2286852a: Rr,
      __wbg_value_49f783bb59765962: ja,
      __wbg_length_c6054974c0a6cdb9: en,
      __wbg_instanceof_Map_afa18d5840c04c15: Kr,
      __wbg_get_197a3fe98f169e38: zr,
      __wbg_get_unchecked_54a4374c38e08460: qr,
      __wbg_call_5575218572ead796: Dr,
      __wbg_push_f724b5db8acf89d2: un,
      __wbg_call_0e855b388e315e17: Ir,
      __wbg_call_8e98ed2f3c86c4b5: Tr,
      __wbg_set_dc601f4a69da0bc2: Ln,
      __wbg_get_with_ref_key_6412cf3094599694: Hr,
      __wbg_set_6be42768c690e380: Sn,
      __wbg_String_8564e559799eccda: br,
      __wbg_set_texture_16d2be474ce6ad0c: Ia,
      __wbg_set_mip_level_246db61be15bdd69: ca,
      __wbg_set_x_56f0c2c08a62725c: Ca,
      __wbg_set_y_04fb8ce84735b4e1: Ra,
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
      __wbg_set_color_attachments_abe67f6631926e28: En,
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
      __wbg_end_414453a89205612c: Er,
      __wbg_writeBuffer_b4bdd36178348ca5: Ka,
      __wbg_set_bytes_per_row_91681ca78d744888: Rn,
      __wbg_set_rows_per_image_d198b7e73a38978b: la,
      __wbg_set_offset_a097a8050a3a9a33: fa,
      __wbg_writeTexture_b45b69132e46a227: Na,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: sn,
      __wbg_submit_1290d44bb76ecef4: Wa,
      __wbg_getMappedRange_5ed22727c9679168: Wr,
      __wbg_unmap_8f06698a75b8331a: Ha,
      __wbg_destroy_b5b39f25f0799295: Cr,
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
      __wbg_set_buffer_55f096330c8912b4: Cn,
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
      __wbg_entries_c261c3fa1f281256: Lr,
      __wbg_then_2a84678a50976959: Ua,
      __wbg_length_589238bdcf171f0e: Zr,
      __wbg_prototypesetcall_d721637c7ca66eb8: fn,
      __wbg_new_81880fb5002cb255: nn,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: on,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: Ea,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: Oa,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: La,
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
  }, ar), { memory: go, __wbg_proteusapp_free: po, proteusapp_addChild: wo, proteusapp_animateTo: lo, proteusapp_bakeTexture: mo, proteusapp_bakedImageSize: ho, proteusapp_bakedTextSize: yo, proteusapp_bindKey: xo, proteusapp_channelDestroy: $o, proteusapp_channelSet: vo, proteusapp_clearFocus: So, proteusapp_component: Ao, proteusapp_copyBakedImageFrom: Io, proteusapp_createVideo: Do, proteusapp_cropImage: To, proteusapp_declareGeometry: Fo, proteusapp_declaredGeometry: Bo, proteusapp_destroy: Po, proteusapp_devices: ko, proteusapp_focus: Mo, proteusapp_focused: Co, proteusapp_freeResources: Ro, proteusapp_get: Vo, proteusapp_hideVideo: Eo, proteusapp_inputDevices: Lo, proteusapp_isFocused: Oo, proteusapp_loadTexture: Go, proteusapp_mergeFrom: Wo, proteusapp_mergeFromWithBehavior: zo, proteusapp_new: Uo, proteusapp_onAppKey: qo, proteusapp_onBlur: Ho, proteusapp_onClick: jo, proteusapp_onDrag: Ko, proteusapp_onDropped: No, proteusapp_onFocus: Jo, proteusapp_onFocusLost: Qo, proteusapp_onHoverEnter: Xo, proteusapp_onHoverExit: Yo, proteusapp_onKey: Zo, proteusapp_onPress: ec, proteusapp_onRelease: _c, proteusapp_onTransitionComplete: tc, proteusapp_pointerLeft: rc, proteusapp_pointerMoved: nc, proteusapp_pointerPressed: ac, proteusapp_pointerReleased: oc, proteusapp_releaseVideo: cc, proteusapp_removeChild: bc, proteusapp_resetKeyMap: sc, proteusapp_setDeclaredGeometry: ic, proteusapp_setDefaultFocus: fc, proteusapp_setDevices: uc, proteusapp_setDisabled: dc, proteusapp_setImage: gc, proteusapp_setInputDevices: pc, proteusapp_setInteractive: wc, proteusapp_setOpacity: lc, proteusapp_setText: mc, proteusapp_setTexture: hc, proteusapp_setTransitionInteraction: yc, proteusapp_setVideoCrossfade: xc, proteusapp_setVisible: $c, proteusapp_showVideo: vc, proteusapp_splitTo: Sc, proteusapp_splitToWithBehavior: Ac, proteusapp_splitToWithStates: Ic, proteusapp_texture: Dc, proteusapp_textureState: Tc, proteusapp_tick: Fc, proteusapp_transitionChannel: Bc, proteusapp_unbindKey: Pc, proteusapp_uploadVideoFrame: kc, __wbg_handle_free: Mc, __wbg_texturehandle_free: Cc, __wbg_transitionchannel_free: Rc, __wbg_videohandle_free: Vc, handle_fromId: Ec, handle_id: Lc, texturehandle_fromId: Oc, texturehandle_id: Gc, __abort_handler: Wc, __instance_terminated: zc, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Uc, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: qc, __wbindgen_malloc: Hc, __wbindgen_realloc: jc, __wbindgen_exn_store: Kc, __externref_table_alloc: Nc, __wbindgen_externrefs: Jc, __wbindgen_destroy_closure: Qc, __externref_table_dealloc: Xc, __wbindgen_free: Yc, __wbindgen_start: Rt } = uo, Zc = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: Wc,
    __externref_table_alloc: Nc,
    __externref_table_dealloc: Xc,
    __instance_terminated: zc,
    __wbg_handle_free: Mc,
    __wbg_proteusapp_free: po,
    __wbg_texturehandle_free: Cc,
    __wbg_transitionchannel_free: Rc,
    __wbg_videohandle_free: Vc,
    __wbindgen_destroy_closure: Qc,
    __wbindgen_exn_store: Kc,
    __wbindgen_externrefs: Jc,
    __wbindgen_free: Yc,
    __wbindgen_malloc: Hc,
    __wbindgen_realloc: jc,
    __wbindgen_start: Rt,
    handle_fromId: Ec,
    handle_id: Lc,
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
    proteusapp_focused: Co,
    proteusapp_freeResources: Ro,
    proteusapp_get: Vo,
    proteusapp_hideVideo: Eo,
    proteusapp_inputDevices: Lo,
    proteusapp_isFocused: Oo,
    proteusapp_loadTexture: Go,
    proteusapp_mergeFrom: Wo,
    proteusapp_mergeFromWithBehavior: zo,
    proteusapp_new: Uo,
    proteusapp_onAppKey: qo,
    proteusapp_onBlur: Ho,
    proteusapp_onClick: jo,
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
    proteusapp_setOpacity: lc,
    proteusapp_setText: mc,
    proteusapp_setTexture: hc,
    proteusapp_setTransitionInteraction: yc,
    proteusapp_setVideoCrossfade: xc,
    proteusapp_setVisible: $c,
    proteusapp_showVideo: vc,
    proteusapp_splitTo: Sc,
    proteusapp_splitToWithBehavior: Ac,
    proteusapp_splitToWithStates: Ic,
    proteusapp_texture: Dc,
    proteusapp_textureState: Tc,
    proteusapp_tick: Fc,
    proteusapp_transitionChannel: Bc,
    proteusapp_unbindKey: Pc,
    proteusapp_uploadVideoFrame: kc,
    texturehandle_fromId: Oc,
    texturehandle_id: Gc,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: qc,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Uc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  fo(Zc);
  Rt();
  const eb = "" + new URL("proteus_host_web_bg-BetELJ_u.wasm", import.meta.url).href;
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
      const a = p_(r, i.__wbindgen_malloc), o = R, c = i.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, o, n);
      return ae.__wrap(c);
    }
    bakedImageSize(e) {
      return l(e, x), i.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return l(e, x), i.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bindKey(e, t) {
      const r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R, a = i.proteusapp_bindKey(this.__wbg_ptr, e, r, n);
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
      const r = p_(e, i.__wbindgen_malloc), n = R, a = i.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : ae.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      l(e, x);
      const a = je(t, i.__wbindgen_malloc), o = R, c = i.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw B(c[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      l(e, x);
      const o = je(t, i.__wbindgen_malloc), c = R, b = i.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
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
      const a = je(t, i.__wbindgen_malloc), o = R, c = i.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw B(c[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      l(e, x);
      const o = je(t, i.__wbindgen_malloc), c = R, b = i.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
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
  let de = class Et {
    static __wrap(e) {
      const t = Object.create(Et.prototype);
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
  let ge = class Lt {
    static __wrap(e) {
      const t = Object.create(Lt.prototype);
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
  function _b(_, e, t, r) {
    const n = W(_, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    return i.mount(n, a, e, $(t) ? 0 : D(t), r);
  }
  function tb(_, e) {
    return Error(A(_, e));
  }
  function rb(_) {
    return Number(_);
  }
  function nb(_, e) {
    const t = String(e), r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function ab(_) {
    return _.Window;
  }
  function ob(_) {
    return _.WorkerGlobalScope;
  }
  function cb(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    M().setBigInt64(_ + 8, $(r) ? BigInt(0) : r, true), M().setInt32(_ + 0, !$(r), true);
  }
  function bb(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return $(t) ? 16777215 : t ? 1 : 0;
  }
  function sb(_, e) {
    const t = M_(e), r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function ib(_, e) {
    return _ in e;
  }
  function fb(_) {
    return typeof _ == "bigint";
  }
  function ub(_) {
    return typeof _ == "function";
  }
  function db(_) {
    return _ === null;
  }
  function gb(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function pb(_) {
    return typeof _ == "string";
  }
  function wb(_) {
    return _ === void 0;
  }
  function lb(_, e) {
    return _ === e;
  }
  function mb(_, e) {
    return _ == e;
  }
  function hb(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    M().setFloat64(_ + 8, $(r) ? 0 : r, true), M().setInt32(_ + 0, !$(r), true);
  }
  function yb(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function xb(_, e) {
    throw new Error(A(_, e));
  }
  function $b(_) {
    _._wbg_cb_unref();
  }
  function vb(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Sb(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Ab() {
    return p(function(_, e, t, r) {
      _.addEventListener(A(e, t), r);
    }, arguments);
  }
  function Ib(_) {
    return _.altKey;
  }
  function Db(_, e, t) {
    _.attachShader(e, t);
  }
  function Tb(_, e, t) {
    _.attachShader(e, t);
  }
  function Fb(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function Bb() {
    return p(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Pb(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, A(r, n));
  }
  function kb(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, A(r, n));
  }
  function Mb(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function Cb(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function Rb(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function Vb(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function Eb(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function Lb(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Ob(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Gb(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function Wb(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function zb(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Ub(_, e) {
    _.bindVertexArrayOES(e);
  }
  function qb(_, e) {
    _.bindVertexArray(e);
  }
  function Hb(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function jb(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Kb(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Nb(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Jb(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Qb(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Xb(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Yb(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Zb(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function es(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function _s(_, e, t, r, n, a, o, c, b, f, d) {
    _.blitFramebuffer(e, t, r, n, a, o, c, b, f >>> 0, d >>> 0);
  }
  function ts(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function rs(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function ns(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function as(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function os(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function cs(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function bs(_) {
    return _.button;
  }
  function ss() {
    return p(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function is() {
    return p(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function fs() {
    return p(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function us(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, E(r, n));
  }
  function ds(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, Y(r, n));
  }
  function gs(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, xe(r, n));
  }
  function ps(_, e) {
    _.clearDepth(e);
  }
  function ws(_, e) {
    _.clearDepth(e);
  }
  function ls(_, e) {
    _.clearStencil(e);
  }
  function ms(_, e) {
    _.clearStencil(e);
  }
  function hs(_, e) {
    _.clear(e >>> 0);
  }
  function ys(_, e) {
    _.clear(e >>> 0);
  }
  function xs(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function $s(_, e) {
    const t = e.code, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function vs(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Ss(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function As(_, e) {
    _.compileShader(e);
  }
  function Is(_, e) {
    _.compileShader(e);
  }
  function Ds(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function Ts(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function Fs(_, e, t, r, n, a, o, c, b, f) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b, f);
  }
  function Bs(_, e, t, r, n, a, o, c, b, f, d, I) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d, I);
  }
  function Ps(_, e, t, r, n, a, o, c, b, f, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d);
  }
  function ks() {
    return p(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function Ms(_) {
    return _.contentRect;
  }
  function Cs(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function Rs(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function Vs(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function Es(_, e, t, r, n, a, o, c, b, f) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f);
  }
  function Ls() {
    return p(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function Os() {
    return p(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function Gs(_, e) {
    return _.createBindGroup(e);
  }
  function Ws(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : D(e);
  }
  function zs() {
    return p(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function Us(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : D(e);
  }
  function qs(_, e) {
    return _.createCommandEncoder(e);
  }
  function Hs(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : D(e);
  }
  function js(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : D(e);
  }
  function Ks(_, e) {
    return _.createPipelineLayout(e);
  }
  function Ns(_) {
    const e = _.createProgram();
    return $(e) ? 0 : D(e);
  }
  function Js(_) {
    const e = _.createProgram();
    return $(e) ? 0 : D(e);
  }
  function Qs(_) {
    const e = _.createQuery();
    return $(e) ? 0 : D(e);
  }
  function Xs() {
    return p(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function Ys(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : D(e);
  }
  function Zs(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : D(e);
  }
  function ei(_, e) {
    return _.createSampler(e);
  }
  function _i(_) {
    const e = _.createSampler();
    return $(e) ? 0 : D(e);
  }
  function ti(_, e) {
    return _.createShaderModule(e);
  }
  function ri(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : D(t);
  }
  function ni(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : D(t);
  }
  function ai(_) {
    const e = _.createTexture();
    return $(e) ? 0 : D(e);
  }
  function oi(_) {
    const e = _.createTexture();
    return $(e) ? 0 : D(e);
  }
  function ci() {
    return p(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function bi(_) {
    const e = _.createVertexArrayOES();
    return $(e) ? 0 : D(e);
  }
  function si(_) {
    const e = _.createVertexArray();
    return $(e) ? 0 : D(e);
  }
  function ii() {
    return p(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function fi(_) {
    return _.ctrlKey;
  }
  function ui(_, e) {
    _.cullFace(e >>> 0);
  }
  function di(_, e) {
    _.cullFace(e >>> 0);
  }
  function gi(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function pi(_, e) {
    _.deleteBuffer(e);
  }
  function wi(_, e) {
    _.deleteBuffer(e);
  }
  function li(_, e) {
    _.deleteFramebuffer(e);
  }
  function mi(_, e) {
    _.deleteFramebuffer(e);
  }
  function hi(_, e) {
    _.deleteProgram(e);
  }
  function yi(_, e) {
    _.deleteProgram(e);
  }
  function xi(_, e) {
    _.deleteQuery(e);
  }
  function $i(_, e) {
    _.deleteRenderbuffer(e);
  }
  function vi(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Si(_, e) {
    _.deleteSampler(e);
  }
  function Ai(_, e) {
    _.deleteShader(e);
  }
  function Ii(_, e) {
    _.deleteShader(e);
  }
  function Di(_, e) {
    _.deleteSync(e);
  }
  function Ti(_, e) {
    _.deleteTexture(e);
  }
  function Fi(_, e) {
    _.deleteTexture(e);
  }
  function Bi(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function Pi(_, e) {
    _.deleteVertexArray(e);
  }
  function ki(_, e) {
    _.depthFunc(e >>> 0);
  }
  function Mi(_, e) {
    _.depthFunc(e >>> 0);
  }
  function Ci(_, e) {
    _.depthMask(e !== 0);
  }
  function Ri(_, e) {
    _.depthMask(e !== 0);
  }
  function Vi(_, e, t) {
    _.depthRange(e, t);
  }
  function Ei(_, e, t) {
    _.depthRange(e, t);
  }
  function Li(_, e) {
    const t = e.description, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function Oi(_) {
    _.destroy();
  }
  function Gi(_) {
    return _.devicePixelRatio;
  }
  function Wi(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function zi(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function Ui(_, e) {
    _.disable(e >>> 0);
  }
  function qi(_, e) {
    _.disable(e >>> 0);
  }
  function Hi(_) {
    const e = _.document;
    return $(e) ? 0 : D(e);
  }
  function ji(_) {
    return _.done;
  }
  function Ki(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function Ni(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function Ji(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function Qi(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function Xi(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function Yi(_, e) {
    _.drawBuffers(e);
  }
  function Zi(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function ef(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function _f(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function tf(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function rf(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function nf(_, e) {
    _.enable(e >>> 0);
  }
  function af(_, e) {
    _.enable(e >>> 0);
  }
  function of(_, e) {
    _.endQuery(e >>> 0);
  }
  function cf(_) {
    _.end();
  }
  function bf(_) {
    return Object.entries(_);
  }
  function sf(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function ff(_) {
    console.error(_);
  }
  function uf(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(A(_, e));
    } finally {
      i.__wbindgen_free(t, r, 1);
    }
  }
  function df(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return $(r) ? 0 : D(r);
  }
  function gf(_) {
    return _.finish();
  }
  function pf(_, e) {
    return _.finish(e);
  }
  function wf(_) {
    _.flush();
  }
  function lf(_) {
    _.flush();
  }
  function mf() {
    return p(function(_) {
      _.focus();
    }, arguments);
  }
  function hf(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function yf(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function xf(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function $f(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function vf(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function Sf(_, e, t, r, n, a, o) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, o);
  }
  function Af(_, e) {
    _.frontFace(e >>> 0);
  }
  function If(_, e) {
    _.frontFace(e >>> 0);
  }
  function Df(_) {
    return _.getBoundingClientRect();
  }
  function Tf(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function Ff() {
    return p(function(_, e, t, r) {
      const n = _.getContext(A(e, t), r);
      return $(n) ? 0 : D(n);
    }, arguments);
  }
  function Bf() {
    return p(function(_, e, t) {
      const r = _.getContext(A(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function Pf() {
    return p(function(_, e, t) {
      const r = _.getContext(A(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function kf() {
    return p(function(_, e, t, r) {
      const n = _.getContext(A(e, t), r);
      return $(n) ? 0 : D(n);
    }, arguments);
  }
  function Mf() {
    return p(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function Cf(_, e, t) {
    const r = _.getElementById(A(e, t));
    return $(r) ? 0 : D(r);
  }
  function Rf() {
    return p(function(_, e, t) {
      const r = _.getExtension(A(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function Vf() {
    return p(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function Ef() {
    return p(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function Lf() {
    return p(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function Of() {
    return p(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function Gf(_) {
    const e = _.getPreferredCanvasFormat();
    return (oe.indexOf(e) + 1 || 96) - 1;
  }
  function Wf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function zf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function Uf(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function qf(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function Hf(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function jf(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function Kf(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : W(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    M().setInt32(_ + 4, a, true), M().setInt32(_ + 0, n, true);
  }
  function Nf(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function Jf(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function Qf(_) {
    const e = _.getSupportedExtensions();
    return $(e) ? 0 : D(e);
  }
  function Xf(_) {
    const e = _.getSupportedProfiles();
    return $(e) ? 0 : D(e);
  }
  function Yf(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function Zf(_, e, t, r) {
    return _.getUniformBlockIndex(e, A(t, r));
  }
  function eu(_, e, t, r) {
    const n = _.getUniformLocation(e, A(t, r));
    return $(n) ? 0 : D(n);
  }
  function _u(_, e, t, r) {
    const n = _.getUniformLocation(e, A(t, r));
    return $(n) ? 0 : D(n);
  }
  function tu(_, e) {
    return _[e >>> 0];
  }
  function ru(_, e) {
    const t = _[e >>> 0];
    return $(t) ? 0 : D(t);
  }
  function nu() {
    return p(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function au(_, e) {
    return _[e >>> 0];
  }
  function ou(_, e) {
    return _[e];
  }
  function cu(_) {
    return _.gpu;
  }
  function bu(_, e, t) {
    return _.hasAttribute(A(e, t));
  }
  function su(_) {
    return _.height;
  }
  function iu(_) {
    return _.height;
  }
  function fu(_) {
    return _.hidden;
  }
  function uu(_, e, t) {
    return _.includes(e, t);
  }
  function du(_) {
    return _.info;
  }
  function gu(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function pu(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function wu(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function lu(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function mu(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function hu(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function yu(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function xu(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function $u(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function vu(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function Su() {
    return p(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function Au(_) {
    return Array.isArray(_);
  }
  function Iu(_) {
    return _.isComposing;
  }
  function Du(_) {
    return Number.isSafeInteger(_);
  }
  function Tu(_, e) {
    return Object.is(_, e);
  }
  function Fu() {
    return Symbol.iterator;
  }
  function Bu(_, e) {
    const t = e.key, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function Pu(_, e) {
    const t = e.label, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function ku(_) {
    return _.length;
  }
  function Mu(_) {
    return _.length;
  }
  function Cu(_) {
    return _.limits;
  }
  function Ru(_) {
    return _.limits;
  }
  function Vu(_, e) {
    _.linkProgram(e);
  }
  function Eu(_, e) {
    _.linkProgram(e);
  }
  function Lu(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function Ou(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function Gu(_) {
    return _.maxBindGroups;
  }
  function Wu(_) {
    return _.maxBindingsPerBindGroup;
  }
  function zu(_) {
    return _.maxBufferSize;
  }
  function Uu(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function qu(_) {
    return _.maxColorAttachments;
  }
  function Hu(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function ju(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function Ku(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function Nu(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function Ju(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function Qu(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function Xu(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function Yu(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function Zu(_) {
    return _.maxInterStageShaderVariables;
  }
  function ed(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function _d(_) {
    return _.maxSamplersPerShaderStage;
  }
  function td(_) {
    return _.maxStorageBufferBindingSize;
  }
  function rd(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function nd(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function ad(_) {
    return _.maxTextureArrayLayers;
  }
  function od(_) {
    return _.maxTextureDimension1D;
  }
  function cd(_) {
    return _.maxTextureDimension2D;
  }
  function bd(_) {
    return _.maxTextureDimension3D;
  }
  function sd(_) {
    return _.maxUniformBufferBindingSize;
  }
  function id(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function fd(_) {
    return _.maxVertexAttributes;
  }
  function ud(_) {
    return _.maxVertexBufferArrayStride;
  }
  function dd(_) {
    return _.maxVertexBuffers;
  }
  function gd(_) {
    return _.metaKey;
  }
  function pd(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function wd(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function ld(_) {
    return _.navigator;
  }
  function md(_) {
    return _.navigator;
  }
  function hd() {
    return p(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function yd() {
    return new Error();
  }
  function xd() {
    return new Object();
  }
  function $d() {
    return new Array();
  }
  function vd(_) {
    return new Uint8Array(_);
  }
  function Sd(_, e) {
    return new Error(A(_, e));
  }
  function Ad(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, o) => {
        const c = t.a;
        t.a = 0;
        try {
          return W2(c, t.b, a, o);
        } finally {
          t.a = c;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function Id(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function Dd() {
    return p(function(_) {
      return _.next();
    }, arguments);
  }
  function Td(_) {
    return _.next;
  }
  function Fd(_, e) {
    _.observe(e);
  }
  function Bd(_) {
    return Array.of(_);
  }
  function Pd(_) {
    return _.offsetX;
  }
  function kd(_) {
    return _.offsetY;
  }
  function Md(_) {
    return _.onSubmittedWorkDone();
  }
  function Cd(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function Rd(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function Vd(_, e, t) {
    _.polygonOffset(e, t);
  }
  function Ed(_, e, t) {
    _.polygonOffset(e, t);
  }
  function Ld(_) {
    _.preventDefault();
  }
  function Od(_) {
    return P_.__wrap(_);
  }
  function Gd(_, e, t) {
    Uint8Array.prototype.set.call(s_(_, e), t);
  }
  function Wd(_, e) {
    return _.push(e);
  }
  function zd(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function Ud() {
    return p(function(_, e, t) {
      return _.querySelectorAll(A(e, t));
    }, arguments);
  }
  function qd() {
    return p(function(_, e, t) {
      const r = _.querySelector(A(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function Hd(_) {
    return _.queueMicrotask;
  }
  function jd(_) {
    queueMicrotask(_);
  }
  function Kd(_) {
    return _.queue;
  }
  function Nd(_, e) {
    _.readBuffer(e >>> 0);
  }
  function Jd() {
    return p(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function Qd() {
    return p(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function Xd() {
    return p(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function Yd(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function Zd(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function e0(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function _0(_) {
    return _.repeat;
  }
  function t0(_, e) {
    return _.requestAdapter(e);
  }
  function r0(_) {
    return _.requestAdapter();
  }
  function n0() {
    return p(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function a0(_, e) {
    return _.requestDevice(e);
  }
  function o0(_) {
    return Promise.resolve(_);
  }
  function c0(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function b0(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function s0(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function i0(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function f0() {
    return p(function(_, e, t, r, n) {
      _.setAttribute(A(e, t), A(r, n));
    }, arguments);
  }
  function u0() {
    return p(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, xe(r, n), a, o >>> 0);
    }, arguments);
  }
  function d0(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function g0(_, e, t, r, n) {
    _.setIndexBuffer(e, H_[t], r, n);
  }
  function p0(_, e, t, r) {
    _.setIndexBuffer(e, H_[t], r);
  }
  function w0(_, e) {
    _.setPipeline(e);
  }
  function l0(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function m0(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function h0(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
  }
  function y0(_, e, t) {
    _.set(e, t >>> 0);
  }
  function x0() {
    return p(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function $0(_, e, t) {
    _[e] = t;
  }
  function v0(_, e) {
    _.a = e;
  }
  function S0(_, e) {
    _.access = Y2[e];
  }
  function A0(_, e) {
    _.addressModeU = U_[e];
  }
  function I0(_, e) {
    _.addressModeV = U_[e];
  }
  function D0(_, e) {
    _.addressModeW = U_[e];
  }
  function T0(_, e) {
    _.alpha = e;
  }
  function F0(_, e) {
    _.alphaMode = H2[e];
  }
  function B0(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function P0(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function k0(_, e) {
    _.arrayStride = e;
  }
  function M0(_, e) {
    _.aspect = Wt[e];
  }
  function C0(_, e) {
    _.aspect = Wt[e];
  }
  function R0(_, e) {
    _.attributes = e;
  }
  function V0(_, e) {
    _.b = e;
  }
  function E0(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function L0(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function O0(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function G0(_, e) {
    _.bindGroupLayouts = e;
  }
  function W0(_, e) {
    _.binding = e >>> 0;
  }
  function z0(_, e) {
    _.binding = e >>> 0;
  }
  function U0(_, e) {
    _.blend = e;
  }
  function q0(_, e) {
    _.buffer = e;
  }
  function H0(_, e) {
    _.buffer = e;
  }
  function j0(_, e) {
    _.buffers = e;
  }
  function K0(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function N0(_, e) {
    _.clearValue = e;
  }
  function J0(_, e, t) {
    _.code = A(e, t);
  }
  function Q0(_, e) {
    _.colorAttachments = e;
  }
  function X0(_, e) {
    _.color = e;
  }
  function Y0(_, e) {
    _.compare = q_[e];
  }
  function Z0(_, e) {
    _.compare = q_[e];
  }
  function eg(_, e) {
    _.count = e >>> 0;
  }
  function _g(_, e) {
    _.cullMode = j2[e];
  }
  function tg(_, e, t) {
    _[e >>> 0] = t;
  }
  function rg(_, e) {
    _.depthBias = e;
  }
  function ng(_, e) {
    _.depthBiasClamp = e;
  }
  function ag(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function og(_, e) {
    _.depthClearValue = e;
  }
  function cg(_, e) {
    _.depthCompare = q_[e];
  }
  function bg(_, e) {
    _.depthFailOp = K_[e];
  }
  function sg(_, e) {
    _.depthLoadOp = j_[e];
  }
  function ig(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function fg(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function ug(_, e) {
    _.depthStencil = e;
  }
  function dg(_, e) {
    _.depthStencilAttachment = e;
  }
  function gg(_, e) {
    _.depthStoreOp = N_[e];
  }
  function pg(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function wg(_, e) {
    _.device = e;
  }
  function lg(_, e) {
    _.dimension = J_[e];
  }
  function mg(_, e) {
    _.dimension = Z2[e];
  }
  function hg(_, e) {
    _.dstFactor = Ot[e];
  }
  function yg(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function xg(_, e) {
    _.entries = e;
  }
  function $g(_, e) {
    _.entries = e;
  }
  function vg(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function Sg(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function Ag(_, e) {
    _.externalTexture = e;
  }
  function Ig(_, e) {
    _.failOp = K_[e];
  }
  function Dg(_, e) {
    _.format = oe[e];
  }
  function Tg(_, e) {
    _.format = _3[e];
  }
  function Fg(_, e) {
    _.format = oe[e];
  }
  function Bg(_, e) {
    _.format = oe[e];
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
  function Cg(_, e) {
    _.fragment = e;
  }
  function Rg(_, e) {
    _.frontFace = K2[e];
  }
  function Vg(_, e) {
    _.g = e;
  }
  function Eg(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function Lg(_, e) {
    _.height = e >>> 0;
  }
  function Og(_, e) {
    _.height = e >>> 0;
  }
  function Gg(_, e) {
    _.height = e >>> 0;
  }
  function Wg(_, e, t) {
    _.label = A(e, t);
  }
  function zg(_, e, t) {
    _.label = A(e, t);
  }
  function Ug(_, e, t) {
    _.label = A(e, t);
  }
  function qg(_, e, t) {
    _.label = A(e, t);
  }
  function Hg(_, e, t) {
    _.label = A(e, t);
  }
  function jg(_, e, t) {
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
  function ep(_, e) {
    _.layout = e;
  }
  function _p(_, e) {
    _.layout = e;
  }
  function tp(_, e) {
    _.loadOp = j_[e];
  }
  function rp(_, e) {
    _.lodMaxClamp = e;
  }
  function np(_, e) {
    _.lodMinClamp = e;
  }
  function ap(_, e) {
    _.magFilter = Gt[e];
  }
  function op(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function cp(_, e) {
    _.mask = e >>> 0;
  }
  function bp(_, e) {
    _.maxAnisotropy = e;
  }
  function sp(_, e) {
    _.minBindingSize = e;
  }
  function ip(_, e) {
    _.minFilter = Gt[e];
  }
  function fp(_, e) {
    _.mipLevel = e >>> 0;
  }
  function up(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function dp(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function gp(_, e) {
    _.mipmapFilter = N2[e];
  }
  function pp(_, e) {
    _.module = e;
  }
  function wp(_, e) {
    _.module = e;
  }
  function lp(_, e) {
    _.multisample = e;
  }
  function mp(_, e) {
    _.multisampled = e !== 0;
  }
  function hp(_, e) {
    _.offset = e;
  }
  function yp(_, e) {
    _.offset = e;
  }
  function xp(_, e) {
    _.offset = e;
  }
  function $p(_, e) {
    _.operation = U2[e];
  }
  function vp(_, e) {
    _.origin = e;
  }
  function Sp(_, e) {
    _.passOp = K_[e];
  }
  function Ap(_, e) {
    _.powerPreference = J2[e];
  }
  function Ip(_, e) {
    _.primitive = e;
  }
  function Dp(_, e) {
    _.querySet = e;
  }
  function Tp(_, e) {
    _.r = e;
  }
  function Fp(_, e) {
    _.requiredFeatures = e;
  }
  function Bp(_, e) {
    _.requiredLimits = e;
  }
  function Pp(_, e) {
    _.resolveTarget = e;
  }
  function kp(_, e) {
    _.resource = e;
  }
  function Mp(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function Cp(_, e) {
    _.sampleCount = e >>> 0;
  }
  function Rp(_, e) {
    _.sampleType = e3[e];
  }
  function Vp(_, e) {
    _.sampler = e;
  }
  function Ep(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function Lp(_, e) {
    _.size = e;
  }
  function Op(_, e) {
    _.size = e;
  }
  function Gp(_, e) {
    _.size = e;
  }
  function Wp(_, e) {
    _.srcFactor = Ot[e];
  }
  function zp(_, e) {
    _.stencilBack = e;
  }
  function Up(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function qp(_, e) {
    _.stencilFront = e;
  }
  function Hp(_, e) {
    _.stencilLoadOp = j_[e];
  }
  function jp(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function Kp(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function Np(_, e) {
    _.stencilStoreOp = N_[e];
  }
  function Jp(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function Qp(_, e) {
    _.stepMode = t3[e];
  }
  function Xp(_, e) {
    _.storageTexture = e;
  }
  function Yp(_, e) {
    _.storeOp = N_[e];
  }
  function Zp(_, e) {
    _.stripIndexFormat = H_[e];
  }
  function ew(_, e) {
    _.targets = e;
  }
  function _w(_, e) {
    _.texture = e;
  }
  function tw(_, e) {
    _.texture = e;
  }
  function rw(_, e) {
    _.timestampWrites = e;
  }
  function nw(_, e) {
    _.topology = Q2[e];
  }
  function aw(_, e) {
    _.type = q2[e];
  }
  function ow(_, e) {
    _.type = X2[e];
  }
  function cw(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function bw(_, e) {
    _.usage = e >>> 0;
  }
  function sw(_, e) {
    _.usage = e >>> 0;
  }
  function iw(_, e) {
    _.usage = e >>> 0;
  }
  function fw(_, e) {
    _.usage = e >>> 0;
  }
  function uw(_, e) {
    _.vertex = e;
  }
  function dw(_, e) {
    _.view = e;
  }
  function gw(_, e) {
    _.view = e;
  }
  function pw(_, e) {
    _.viewDimension = J_[e];
  }
  function ww(_, e) {
    _.viewDimension = J_[e];
  }
  function lw(_, e) {
    _.viewFormats = e;
  }
  function mw(_, e) {
    _.viewFormats = e;
  }
  function hw(_, e) {
    _.visibility = e >>> 0;
  }
  function yw(_, e) {
    _.width = e >>> 0;
  }
  function xw(_, e) {
    _.width = e >>> 0;
  }
  function $w(_, e) {
    _.width = e >>> 0;
  }
  function vw(_, e) {
    _.writeMask = e >>> 0;
  }
  function Sw(_, e) {
    _.x = e >>> 0;
  }
  function Aw(_, e) {
    _.y = e >>> 0;
  }
  function Iw(_, e) {
    _.z = e >>> 0;
  }
  function Dw(_, e, t, r) {
    _.shaderSource(e, A(t, r));
  }
  function Tw(_, e, t, r) {
    _.shaderSource(e, A(t, r));
  }
  function Fw(_) {
    return _.shiftKey;
  }
  function Bw(_, e) {
    const t = e.stack, r = W(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    M().setInt32(_ + 4, n, true), M().setInt32(_ + 0, r, true);
  }
  function Pw() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return $(_) ? 0 : D(_);
  }
  function kw() {
    const _ = typeof global > "u" ? null : global;
    return $(_) ? 0 : D(_);
  }
  function Mw() {
    const _ = typeof self > "u" ? null : self;
    return $(_) ? 0 : D(_);
  }
  function Cw() {
    const _ = typeof window > "u" ? null : window;
    return $(_) ? 0 : D(_);
  }
  function Rw(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function Vw(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function Ew(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function Lw(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function Ow(_, e) {
    _.stencilMask(e >>> 0);
  }
  function Gw(_, e) {
    _.stencilMask(e >>> 0);
  }
  function Ww(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function zw(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Uw(_, e) {
    _.submit(e);
  }
  function qw() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Hw() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function jw() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Kw() {
    return p(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function Nw() {
    return p(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function Jw(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function Qw(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function Xw(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function Yw(_, e, t, r, n, a, o) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, o);
  }
  function Zw() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function e1() {
    return p(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
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
    return p(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function b1() {
    return p(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
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
  function g1(_, e, t) {
    return _.then(e, t);
  }
  function p1(_, e, t) {
    return _.then(e, t);
  }
  function w1(_, e) {
    return _.then(e);
  }
  function l1(_, e, t) {
    _.uniform1f(e, t);
  }
  function m1(_, e, t) {
    _.uniform1f(e, t);
  }
  function h1(_, e, t) {
    _.uniform1i(e, t);
  }
  function y1(_, e, t) {
    _.uniform1i(e, t);
  }
  function x1(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function $1(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function v1(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function S1(_, e, t, r) {
    _.uniform2iv(e, Y(t, r));
  }
  function A1(_, e, t, r) {
    _.uniform2iv(e, Y(t, r));
  }
  function I1(_, e, t, r) {
    _.uniform2uiv(e, xe(t, r));
  }
  function D1(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function T1(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function F1(_, e, t, r) {
    _.uniform3iv(e, Y(t, r));
  }
  function B1(_, e, t, r) {
    _.uniform3iv(e, Y(t, r));
  }
  function P1(_, e, t, r) {
    _.uniform3uiv(e, xe(t, r));
  }
  function k1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function M1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function C1(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function R1(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function V1(_, e, t, r) {
    _.uniform4iv(e, Y(t, r));
  }
  function E1(_, e, t, r) {
    _.uniform4iv(e, Y(t, r));
  }
  function L1(_, e, t, r) {
    _.uniform4uiv(e, xe(t, r));
  }
  function O1(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function G1(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function W1(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function z1(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, E(r, n));
  }
  function U1(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, E(r, n));
  }
  function q1(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function H1(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function j1(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, E(r, n));
  }
  function K1(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, E(r, n));
  }
  function N1(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function J1(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function Q1(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, E(r, n));
  }
  function X1(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, E(r, n));
  }
  function Y1(_) {
    _.unmap();
  }
  function Z1(_, e) {
    _.useProgram(e);
  }
  function e2(_, e) {
    _.useProgram(e);
  }
  function _2(_) {
    return _.value;
  }
  function t2(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function r2(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function n2(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function a2(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function o2(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function c2(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function b2(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function s2(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function i2(_) {
    return _.width;
  }
  function f2(_) {
    return _.width;
  }
  function u2() {
    return p(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, s_(r, n), a, o);
    }, arguments);
  }
  function d2() {
    return p(function(_, e, t, r, n, a) {
      _.writeTexture(e, s_(t, r), n, a);
    }, arguments);
  }
  function g2(_, e) {
    return Z(_, e, R2);
  }
  function p2(_, e) {
    return Z(_, e, G2);
  }
  function w2(_, e) {
    return Z(_, e, z2);
  }
  function l2(_, e) {
    return Z(_, e, V2);
  }
  function m2(_, e) {
    return Z(_, e, E2);
  }
  function h2(_, e) {
    return Z(_, e, L2);
  }
  function y2(_, e) {
    return Z(_, e, O2);
  }
  function x2(_, e) {
    return Z(_, e, C2);
  }
  function $2(_) {
    return _;
  }
  function v2(_) {
    return _;
  }
  function S2(_, e) {
    return E(_, e);
  }
  function A2(_, e) {
    return r3(_, e);
  }
  function I2(_, e) {
    return Y(_, e);
  }
  function D2(_, e) {
    return n3(_, e);
  }
  function T2(_, e) {
    return a3(_, e);
  }
  function F2(_, e) {
    return xe(_, e);
  }
  function B2(_, e) {
    return s_(_, e);
  }
  function P2(_, e) {
    return A(_, e);
  }
  function k2(_) {
    return BigInt.asUintN(64, _);
  }
  function M2() {
    const _ = i.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function C2(_, e) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function R2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function V2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function E2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function L2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function O2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6(_, e, t);
  }
  function G2(_, e, t) {
    const r = i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (r[1]) throw B(r[0]);
  }
  function W2(_, e, t, r) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, r);
  }
  function z2(_, e, t) {
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
  ], U2 = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], q2 = [
    "uniform",
    "storage",
    "read-only-storage"
  ], H2 = [
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
  ], j2 = [
    "none",
    "front",
    "back"
  ], Gt = [
    "nearest",
    "linear"
  ], K2 = [
    "ccw",
    "cw"
  ], H_ = [
    "uint16",
    "uint32"
  ], j_ = [
    "load",
    "clear"
  ], N2 = [
    "nearest",
    "linear"
  ], J2 = [
    "low-power",
    "high-performance"
  ], Q2 = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], X2 = [
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
  ], Y2 = [
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
  ], Z2 = [
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
  ], e3 = [
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
  ], _3 = [
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
  ], t3 = [
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
  function E(_, e) {
    return _ = _ >>> 0, o3().subarray(_ / 4, _ / 4 + e);
  }
  function r3(_, e) {
    return _ = _ >>> 0, b3().subarray(_ / 2, _ / 2 + e);
  }
  function Y(_, e) {
    return _ = _ >>> 0, s3().subarray(_ / 4, _ / 4 + e);
  }
  function n3(_, e) {
    return _ = _ >>> 0, i3().subarray(_ / 1, _ / 1 + e);
  }
  function a3(_, e) {
    return _ = _ >>> 0, f3().subarray(_ / 2, _ / 2 + e);
  }
  function xe(_, e) {
    return _ = _ >>> 0, u3().subarray(_ / 4, _ / 4 + e);
  }
  function s_(_, e) {
    return _ = _ >>> 0, le().subarray(_ / 1, _ / 1 + e);
  }
  let se = null;
  function M() {
    return (se === null || se.buffer.detached === true || se.buffer.detached === void 0 && se.buffer !== i.memory.buffer) && (se = new DataView(i.memory.buffer)), se;
  }
  let Le = null;
  function o3() {
    return (Le === null || Le.byteLength === 0) && (Le = new Float32Array(i.memory.buffer)), Le;
  }
  let Oe = null;
  function c3() {
    return (Oe === null || Oe.byteLength === 0) && (Oe = new Float64Array(i.memory.buffer)), Oe;
  }
  let Ge = null;
  function b3() {
    return (Ge === null || Ge.byteLength === 0) && (Ge = new Int16Array(i.memory.buffer)), Ge;
  }
  let We = null;
  function s3() {
    return (We === null || We.byteLength === 0) && (We = new Int32Array(i.memory.buffer)), We;
  }
  let ze = null;
  function i3() {
    return (ze === null || ze.byteLength === 0) && (ze = new Int8Array(i.memory.buffer)), ze;
  }
  function A(_, e) {
    return g3(_ >>> 0, e);
  }
  let Ue = null;
  function f3() {
    return (Ue === null || Ue.byteLength === 0) && (Ue = new Uint16Array(i.memory.buffer)), Ue;
  }
  let qe = null;
  function u3() {
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
    return le().set(_, t / 1), R = _.length, t;
  }
  function je(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return c3().set(_, t / 8), R = _.length, t;
  }
  function W(_, e, t) {
    if (t === void 0) {
      const c = Se.encode(_), b = e(c.length, 1) >>> 0;
      return le().subarray(b, b + c.length).set(c), R = c.length, b;
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
    return R = o, n;
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
  const d3 = 2146435072;
  let w_ = 0;
  function g3(_, e) {
    return w_ += e, w_ >= d3 && (n_ = new TextDecoder("utf-8", {
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
  let R = 0, i;
  function p3(_) {
    i = _;
  }
  URL = globalThis.URL;
  const w3 = await O_({
    "./proteus_host_web_bg.js": {
      __wbg_call_5575218572ead796: is,
      __wbg_next_0c4066e251d2eff9: Dd,
      __wbg_done_b62d4a7d2286852a: ji,
      __wbg_value_49f783bb59765962: _2,
      __wbg_new_typed_00a409eb4ec4f2d9: Ad,
      __wbg_then_05edfc8a4fea5106: g1,
      __wbg_get_197a3fe98f169e38: tu,
      __wbg_get_unchecked_54a4374c38e08460: au,
      __wbg_length_c6054974c0a6cdb9: Mu,
      __wbg_new_227d7c05414eb861: yd,
      __wbg_stack_3b0d974bbf31e44f: Bw,
      __wbg_error_a6fa202b58aa1cd3: uf,
      __wbg_instanceof_Map_afa18d5840c04c15: hu,
      __wbg_push_f724b5db8acf89d2: Wd,
      __wbg_proteusapp_new: Od,
      __wbg_call_0e855b388e315e17: ss,
      __wbg_call_8e98ed2f3c86c4b5: fs,
      __wbg_set_dc601f4a69da0bc2: tg,
      __wbg_get_with_ref_key_6412cf3094599694: ou,
      __wbg_set_6be42768c690e380: $0,
      __wbg_String_8564e559799eccda: nb,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: lu,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: od,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: cd,
      __wbg_maxTextureDimension3D_06ee54121b37d431: bd,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: ad,
      __wbg_maxBindGroups_14611ac9ed1c6b56: Gu,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: Wu,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: Yu,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: Xu,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: ed,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: _d,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: rd,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: nd,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: id,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: sd,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: td,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: dd,
      __wbg_maxBufferSize_f7ce3e1856349d2f: zu,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: fd,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: ud,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: Zu,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: wd,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: pd,
      __wbg_maxColorAttachments_fd9187f9f786da18: qu,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: Uu,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: Ju,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: Hu,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: ju,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: Ku,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: Nu,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: Qu,
      __wbg_description_18d0a6d4077fec8e: Li,
      __wbg_set_dst_factor_1ed75271a89a711e: hg,
      __wbg_set_operation_b5862f5a1a143b30: $p,
      __wbg_set_src_factor_1c4f755f8676df1b: Wp,
      __wbg_set_texture_16d2be474ce6ad0c: _w,
      __wbg_set_mip_level_246db61be15bdd69: fp,
      __wbg_set_x_56f0c2c08a62725c: Sw,
      __wbg_set_y_04fb8ce84735b4e1: Aw,
      __wbg_set_z_a51316db27a4941e: Iw,
      __wbg_set_origin_9b3b0fbe0a5dc469: vp,
      __wbg_set_aspect_77332ac136ee94eb: M0,
      __wbg_Window_a07901001eb4269f: ab,
      __wbg_gpu_a7c12045c25d009a: cu,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: ob,
      __wbg_set_a_5f6e488475272136: v0,
      __wbg_set_b_688365d692bba214: V0,
      __wbg_set_g_d4d1d77cf8fdd362: Vg,
      __wbg_set_r_527e5a41c4b1a846: Tp,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: wu,
      __wbg_queue_65d985f3e6d786a6: Kd,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: Ap,
      __wbg_requestAdapter_9ff5c9d1ff271165: t0,
      __wbg_set_required_limits_3b031f66f838f4e3: Bp,
      __wbg_set_required_features_54918de8185c5fab: Fp,
      __wbg_set_label_bae57fb9f24fde5c: Kg,
      __wbg_requestDevice_c1c34f88a477e509: a0,
      __wbg_limits_50a8c5e629dbfe40: Ru,
      __wbg_info_22dcf1fd1b12bc7d: du,
      __wbg_set_size_41cd9255ca1e4242: Op,
      __wbg_set_usage_908213a4d4bb8bde: iw,
      __wbg_set_mapped_at_creation_48de4735fab51e78: op,
      __wbg_set_label_cd567b7b35838e4c: Qg,
      __wbg_createBuffer_2f08c0205e04efca: zs,
      __wbg_set_address_mode_u_a37cf1035585c638: A0,
      __wbg_set_address_mode_v_8ac049e029caef76: I0,
      __wbg_set_address_mode_w_eb9260ee11729e92: D0,
      __wbg_set_compare_42211fbf15e3b850: Z0,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: rp,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: np,
      __wbg_set_mag_filter_69d846b974d4bcc0: ap,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: ip,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: gp,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: bp,
      __wbg_set_label_dcd98efbb9370da8: Yg,
      __wbg_createSampler_248bd67c920af37d: ei,
      __wbg_set_width_1a5e2e86fa5bdcd8: xw,
      __wbg_set_height_e8b5483b8c117d5e: Og,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: ig,
      __wbg_set_format_e9d4b1475bb3bd3b: kg,
      __wbg_set_size_a61ff22205255d61: Gp,
      __wbg_set_usage_7fa9cd18d1104aca: sw,
      __wbg_set_label_0c1bd0e976cf0a9a: zg,
      __wbg_set_dimension_36e13ccecae5af4b: mg,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: dp,
      __wbg_set_sample_count_865e1d19b84e27e6: Cp,
      __wbg_set_view_formats_bab284fc81b40e70: lw,
      __wbg_createTexture_9e76b80a2dc0d12e: ci,
      __wbg_set_entries_fc76ca4d7da6a709: $g,
      __wbg_set_layout_eeef59714f5bf48b: _p,
      __wbg_set_label_f92ae11c77d74198: Zg,
      __wbg_createBindGroup_2320df4db188406c: Gs,
      __wbg_set_code_56e2d45ec1ff6c2d: J0,
      __wbg_set_label_be45aed56e4b9fee: Ng,
      __wbg_createShaderModule_53701de4fb271c90: ti,
      __wbg_set_label_d1c24b5a7a3ac31d: Xg,
      __wbg_createCommandEncoder_cd88faca35d9ed68: qs,
      __wbg_set_bind_group_layouts_5325d038771af328: G0,
      __wbg_set_label_2f592bd1be3db6b3: Hg,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: Ks,
      __wbg_set_module_14e471fdd94c582d: wp,
      __wbg_set_entry_point_8db3b6d103e3b865: Sg,
      __wbg_set_buffers_85a7238f4ef28ab4: j0,
      __wbg_set_layout_7c5ba5bdcde8a0f0: ep,
      __wbg_set_vertex_a4951dd9a7a4ed54: uw,
      __wbg_set_label_c47c451211e2f6d2: Jg,
      __wbg_set_format_f9341112e43ea182: Mg,
      __wbg_set_depth_compare_30e9ea552da12fe2: cg,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: pg,
      __wbg_set_depth_bias_428c9340b0fd937b: rg,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: ng,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: ag,
      __wbg_set_compare_1509dc1a5420943f: Y0,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: bg,
      __wbg_set_fail_op_77ab26c98f847b65: Ig,
      __wbg_set_pass_op_e9470d1262fb8a8b: Sp,
      __wbg_set_stencil_back_6ef4683123b19b25: zp,
      __wbg_set_stencil_front_aeb8580a97e5424b: qp,
      __wbg_set_stencil_read_mask_2954f260d47349ea: jp,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: Jp,
      __wbg_set_depth_stencil_1bd50dbc450c8650: ug,
      __wbg_set_module_08ad08e736d8edbf: pp,
      __wbg_set_targets_6b0b3bdd87f35668: ew,
      __wbg_set_entry_point_6fec5723cc790927: vg,
      __wbg_set_fragment_1a595620425637e1: Cg,
      __wbg_set_count_26a934d1cd07d080: eg,
      __wbg_set_mask_0c49a66362fc0079: cp,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: B0,
      __wbg_set_multisample_85f073947b782d07: lp,
      __wbg_set_cull_mode_9d466c1ab414cac8: _g,
      __wbg_set_front_face_50cdf4eb61504a46: Rg,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: Zp,
      __wbg_set_topology_beefb3aca0612b00: nw,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: cw,
      __wbg_set_primitive_369241acd17871f1: Ip,
      __wbg_createRenderPipeline_f48187ba9f7701e8: Xs,
      __wbg_set_entries_3017e6132f938c6e: xg,
      __wbg_set_label_1175a3329a06e52b: Ug,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: Os,
      __wbg_limits_1c25cb4f379a4418: Cu,
      __wbg_set_color_attachments_abe67f6631926e28: Q0,
      __wbg_set_label_8fd860a36d2c7b74: jg,
      __wbg_set_view_dbd0294573f64d05: gw,
      __wbg_set_depth_clear_value_442bf492734f63b6: og,
      __wbg_set_depth_load_op_34d430b74bb36d91: sg,
      __wbg_set_depth_store_op_0ea0a215313dbda7: gg,
      __wbg_set_depth_read_only_138a11b10c731094: fg,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: Up,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: Hp,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: Np,
      __wbg_set_stencil_read_only_fb489d191b6d969b: Kp,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: dg,
      __wbg_set_query_set_18679a8580267d5a: Dp,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: O0,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: yg,
      __wbg_set_timestamp_writes_c552d52fbb417005: rw,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: Bb,
      __wbg_copyTextureToTexture_1be188df1e535c0a: Ls,
      __wbg_label_47480289cc2bce71: Pu,
      __wbg_set_label_2d2227f4d5991e50: qg,
      __wbg_finish_cfaeede3baf55be1: pf,
      __wbg_finish_087cb89c65c06eb1: gf,
      __wbg_drawIndexed_68637ebab6dd8d6e: _f,
      __wbg_setPipeline_bab24dbce96903b9: w0,
      __wbg_setViewport_f9d423db4f4b4b58: h0,
      __wbg_setBindGroup_4ba56e1e0d26f244: u0,
      __wbg_setBindGroup_6124849cc8547086: d0,
      __wbg_setIndexBuffer_17431786d06c1b7c: g0,
      __wbg_setIndexBuffer_a16ed5b869c87507: p0,
      __wbg_setVertexBuffer_b508baf8d0ffe331: m0,
      __wbg_setVertexBuffer_91c4b602d0289943: l0,
      __wbg_end_414453a89205612c: cf,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: Gf,
      __wbg_getCurrentTexture_51975ae7185fd15f: Mf,
      __wbg_set_device_0d774b66e7288f72: wg,
      __wbg_set_format_d347899cd860709c: Pg,
      __wbg_set_usage_ae014e77ff77ce06: fw,
      __wbg_set_alpha_mode_92402195b3ae1ee7: F0,
      __wbg_set_view_formats_fe531a043efb71fa: mw,
      __wbg_configure_3d64c677c7d68a15: ks,
      __wbg_writeBuffer_b4bdd36178348ca5: u2,
      __wbg_set_bytes_per_row_91681ca78d744888: K0,
      __wbg_set_rows_per_image_d198b7e73a38978b: Mp,
      __wbg_set_offset_a097a8050a3a9a33: xp,
      __wbg_writeTexture_b45b69132e46a227: d2,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: Md,
      __wbg_submit_1290d44bb76ecef4: Uw,
      __wbg_getMappedRange_5ed22727c9679168: Ef,
      __wbg_unmap_8f06698a75b8331a: Y1,
      __wbg_destroy_b5b39f25f0799295: Oi,
      __wbg_mapAsync_bb0029907dd91181: Ou,
      __wbg_set_dimension_174ad7e2fb67fb4e: lg,
      __wbg_set_format_90860b0321868db4: Fg,
      __wbg_set_aspect_a823a14d00d42d37: C0,
      __wbg_set_base_array_layer_cc6c68d233489c4b: E0,
      __wbg_set_array_layer_count_daec613068108a9d: P0,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: L0,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: up,
      __wbg_set_label_03d2396d4655a3e1: Wg,
      __wbg_set_usage_7f0dda8309469b1c: bw,
      __wbg_createView_cc96b5bdd3d5bf5e: ii,
      __wbg_set_min_binding_size_689661b9ed25e083: sp,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: Eg,
      __wbg_set_type_38961e08504ca674: aw,
      __wbg_requestAdapter_c46930b8bc33722d: r0,
      __wbg_set_alpha_aa2e606e9e647b21: T0,
      __wbg_set_color_bc393d7efc3c8594: X0,
      __wbg_set_visibility_1bca121a89accba5: hw,
      __wbg_set_storage_texture_ab9eed9786337ef0: Xp,
      __wbg_set_external_texture_825fe2bc7a0c0603: Ag,
      __wbg_set_binding_b6b0fe5c281b8c69: W0,
      __wbg_set_buffer_e89095a9f0cafad3: H0,
      __wbg_set_sampler_8c5d7fb1b02058c6: Vp,
      __wbg_set_texture_e25a73da75cf5808: tw,
      __wbg_set_view_dimension_263387976511ebc9: pw,
      __wbg_set_format_1786adb7bc74c7c9: Dg,
      __wbg_set_access_091f317905cd76a5: S0,
      __wbg_set_format_abf7a1bc5425c56a: Bg,
      __wbg_set_blend_8d6e9c08b5702a09: U0,
      __wbg_set_write_mask_144b25e2bd909124: vw,
      __wbg_set_load_op_56844f51434037bf: tp,
      __wbg_set_store_op_caeede4654b3d847: Yp,
      __wbg_set_view_bdeab150b5f0768c: dw,
      __wbg_set_clear_value_642701f928a5ccb3: N0,
      __wbg_set_resolve_target_fe76b3f99cf72078: Pp,
      __wbg_set_buffer_55f096330c8912b4: q0,
      __wbg_set_offset_73156b0e0b41d79a: hp,
      __wbg_set_size_1e6281b07cd39177: Lp,
      __wbg_set_binding_f3c188a8cd21455b: z0,
      __wbg_set_resource_fe385d2e3dadaf63: kp,
      __wbg_set_format_6606f5c1fba6f459: Tg,
      __wbg_set_offset_8d9d9afffa18b591: yp,
      __wbg_set_shader_location_0ff30a733291a396: Ep,
      __wbg_set_array_stride_c2c009eabc18b5f6: k0,
      __wbg_set_attributes_05f9117fd32ca606: R0,
      __wbg_set_step_mode_a35aef328761c452: Qp,
      __wbg_set_type_c1eebc19f8a6aeb9: ow,
      __wbg_set_multisampled_40505c1381e1c32c: mp,
      __wbg_set_sample_type_7088b1efddce6a69: Rp,
      __wbg_set_view_dimension_3ed01b237e85826f: ww,
      __wbg_includes_83dff8d05da243c5: uu,
      __wbg_clearBufferuiv_1d2d93401c0904a3: gs,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: Ts,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: Bs,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: Ps,
      __wbg_copyBufferSubData_a944f33b601b822d: Cs,
      __wbg_clientWaitSync_7580165bd2eff461: xs,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: Fs,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: Es,
      __wbg_createQuery_f013132b870a71ef: Qs,
      __wbg_createSampler_9fe50152a2524319: _i,
      __wbg_createVertexArray_8685feb21901c932: si,
      __wbg_deleteQuery_ef51ea0a52420103: xi,
      __wbg_deleteSampler_5c045e0cc55813d4: Si,
      __wbg_getIndexedParameter_2b18df6fca85f751: Vf,
      __wbg_getQueryParameter_0599e85ddb81220b: Hf,
      __wbg_getSyncParameter_9a2bda340ebe166f: Yf,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: Zf,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: Su,
      __wbg_deleteSync_37ca83c429c43d8a: Di,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: Pi,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: Ni,
      __wbg_drawBuffers_558d96e52e754731: Yi,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: ef,
      __wbg_endQuery_161170c5280a8293: of,
      __wbg_fenceSync_56efc7cc79111e54: df,
      __wbg_framebufferTextureLayer_2312acdc74f97676: vf,
      __wbg_getBufferSubData_92680d3a2f7be029: Tf,
      __wbg_readBuffer_361ec5474f3aae49: Nd,
      __wbg_readPixels_5840000f3e22f3ce: Qd,
      __wbg_readPixels_5bf204799ed2272f: Xd,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: Yd,
      __wbg_texImage3D_8647ef58aef5b912: Nw,
      __wbg_texStorage2D_ed5df596c5f1e3af: Xw,
      __wbg_texStorage3D_160b0197bc190f04: Yw,
      __wbg_texSubImage2D_f03448e182b0820d: o1,
      __wbg_texSubImage2D_d14d9c0a1f627c31: a1,
      __wbg_texSubImage2D_89866a04ecd0a76b: t1,
      __wbg_texSubImage2D_5c630043f1c56716: _1,
      __wbg_samplerParameterf_3157ba41c0f4d97a: c0,
      __wbg_samplerParameteri_f85a29156e790189: b0,
      __wbg_texImage2D_0e0f37b9fb297d01: qw,
      __wbg_texImage2D_0e537dc331652de3: Hw,
      __wbg_texImage3D_30dbf7234481b8f5: Kw,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: e1,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: r1,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: n1,
      __wbg_texSubImage3D_933e4cd41cc5376d: f1,
      __wbg_texSubImage3D_c3538b28040daac9: d1,
      __wbg_uniform1ui_36c94692177ebf76: x1,
      __wbg_uniform2fv_17592f4dad9798fb: $1,
      __wbg_uniform2iv_d5d29ebbc466977d: A1,
      __wbg_texSubImage3D_0fdbd843482bb916: b1,
      __wbg_texSubImage3D_09a97a968b93253d: c1,
      __wbg_texSubImage3D_355efde0dc047913: s1,
      __wbg_texSubImage3D_bd32c8e29e470904: u1,
      __wbg_texSubImage3D_5a238709d114b609: i1,
      __wbg_uniform2uiv_418ba3bf6a230dd5: I1,
      __wbg_uniform4fv_9e670a001c77dca0: R1,
      __wbg_uniform4iv_1d57c6b8e5c0e447: V1,
      __wbg_uniform3fv_dbe44b778e6b89e8: T1,
      __wbg_uniform3iv_d75d3a5f86d54be4: B1,
      __wbg_uniform3uiv_71c1efc24a662de9: P1,
      __wbg_uniform4uiv_c5d45f5dbdae727a: L1,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: q1,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: j1,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: K1,
      __wbg_uniformBlockBinding_829a71912ad79a04: O1,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: G1,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: z1,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: U1,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: N1,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: n2,
      __wbg_activeTexture_525ee3068cb9e8d5: Sb,
      __wbg_attachShader_3477e67517b09b6b: Db,
      __wbg_bindAttribLocation_79b5d26727094518: Pb,
      __wbg_bindBuffer_d3111de6861cb875: Cb,
      __wbg_bindFramebuffer_63e837a5dc0accfb: Eb,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: Lb,
      __wbg_bindTexture_7ab28ff4ff3dc506: Wb,
      __wbg_blendColor_15f26633b646e542: Hb,
      __wbg_blendEquation_7dadb4db540a42da: Jb,
      __wbg_blendEquationSeparate_8240ddfa32266109: Kb,
      __wbg_blendFunc_b15af02643e188f1: es,
      __wbg_blendFuncSeparate_456410f9919bed39: Yb,
      __wbg_clear_dadcb3e2929388b0: hs,
      __wbg_clearDepth_05c17028494ee4dd: ps,
      __wbg_clearStencil_917833d1e2ac56e4: ms,
      __wbg_colorMask_f111e3e5796458f4: Ss,
      __wbg_compileShader_f5625b583b2c9fd6: As,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: Q1,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: X1,
      __wbg_vertexAttribDivisor_f17a8585267be92f: r2,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: Rs,
      __wbg_createBuffer_9f602b2dbcbf409c: Us,
      __wbg_createFramebuffer_4a250944a4542bbc: Hs,
      __wbg_createProgram_4c8164d471c10346: Ns,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: Zs,
      __wbg_createShader_9c5cd42709d915ff: ni,
      __wbg_createTexture_3eed23cb87dd35fc: ai,
      __wbg_cullFace_94f24b4fd5e9038b: di,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: pi,
      __wbg_getExtension_11824edd67a143d8: Rf,
      __wbg_getParameter_7f7f23cae98f2c81: Lf,
      __wbg_getProgramInfoLog_cd84be80942f345b: zf,
      __wbg_getProgramParameter_039391d5ba319f50: Uf,
      __wbg_getShaderInfoLog_495bddda98172699: jf,
      __wbg_getShaderParameter_4eb65cfb174ceb22: Nf,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: Qf,
      __wbg_getUniformLocation_ab63f569a4e41744: _u,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: li,
      __wbg_deleteProgram_eff668280dcb01ca: yi,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: vi,
      __wbg_deleteShader_3339454254c7147c: Ai,
      __wbg_deleteTexture_c1c58550dc55af5c: Fi,
      __wbg_depthFunc_31b183b5b8ee478e: ki,
      __wbg_depthMask_cab7f2ae7f0e559c: Ri,
      __wbg_depthRange_797a71ba3b79267a: Vi,
      __wbg_disable_cb1b3e6c1cee5202: qi,
      __wbg_disableVertexAttribArray_b395358ec5084c39: zi,
      __wbg_drawArrays_42dbb4b0349c8f34: Qi,
      __wbg_enable_d1f42f78be33a553: af,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: tf,
      __wbg_flush_7ae42f071230db6b: wf,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: yf,
      __wbg_framebufferTexture2D_367ab597a005e8d9: xf,
      __wbg_frontFace_9bdcf2a758e989e5: Af,
      __wbg_linkProgram_e23a348b0f6e0c4f: Eu,
      __wbg_pixelStorei_a78a504be58d1d0a: Rd,
      __wbg_polygonOffset_a4f07d97b9b0dced: Ed,
      __wbg_renderbufferStorage_3049e13db5c4e60e: e0,
      __wbg_scissor_6c024669fbf4fe72: s0,
      __wbg_vertexAttribPointer_4e5d289c5d224210: o2,
      __wbg_viewport_a0ca330f9b85397e: c2,
      __wbg_shaderSource_66dce75b25a1a407: Tw,
      __wbg_stencilFuncSeparate_ec603976be9569a4: Vw,
      __wbg_stencilMask_485dcb5965c79a71: Ow,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: Lw,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: Ww,
      __wbg_texParameteri_c6efffcecb474d2f: Jw,
      __wbg_uniform1f_3acd3f3eb50b5e11: l1,
      __wbg_uniform1i_e4f13604354c28ae: y1,
      __wbg_uniform4f_a5008773cfb47d1a: M1,
      __wbg_useProgram_ab2ee2a13a1fd909: e2,
      __wbg_bufferSubData_2270f1b9db71e642: os,
      __wbg_clearBufferfv_6b77b9402254a2bf: us,
      __wbg_clearBufferiv_0f056544010eef3e: ds,
      __wbg_beginQuery_dad334d972fed3cc: Fb,
      __wbg_bindBufferRange_16a9d90becc2a7d7: Mb,
      __wbg_bindSampler_3c7002cb6d56ae8f: Gb,
      __wbg_bindVertexArray_c391bd47303d75cd: qb,
      __wbg_blitFramebuffer_ea96ada8bba07582: _s,
      __wbg_bufferData_64e9905f2b3d3a6f: ns,
      __wbg_bufferData_99bbbc63f02251c4: as,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: $u,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: n0,
      __wbg_navigator_935098efd1dc7fe5: md,
      __wbg_devicePixelRatio_8e5ca44720abafec: Gi,
      __wbg_document_2634180a4c694068: Hi,
      __wbg_instanceof_Window_0d356b88a2f77c42: vu,
      __wbg_hidden_cb32701ca3785fea: fu,
      __wbg_getElementById_c7aba6b93b34bf01: Cf,
      __wbg_querySelector_1f3658f4b48e268b: qd,
      __wbg_querySelectorAll_ffda3c891a9eb29a: Ud,
      __wbg_hasAttribute_73e1230c9c107e79: bu,
      __wbg_setAttribute_8bccfbabf2a83682: f0,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: Df,
      __wbg_focus_c80921c19b28520b: mf,
      __wbg_uniform2iv_c5e863975dd780d8: S1,
      __wbg_uniform3fv_7723e142be50856f: D1,
      __wbg_uniform3iv_bea3976522e15d48: F1,
      __wbg_uniform4fv_85ad5d23234895d2: C1,
      __wbg_clear_ff8cfdf420f7dde6: ys,
      __wbg_clearDepth_ac6b54f112feeaf7: ws,
      __wbg_clearStencil_56d6a6308294a749: ls,
      __wbg_colorMask_b0ab9d429a1efa0a: vs,
      __wbg_compileShader_fcf3f3d2891f73f9: Is,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: Vs,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: Ws,
      __wbg_createFramebuffer_ab73f30b5dc97415: js,
      __wbg_createProgram_f11c63f59f41b82a: Js,
      __wbg_createRenderbuffer_556000dbb01f5026: Ys,
      __wbg_createShader_27d9388313f3b14e: ri,
      __wbg_createTexture_8455c703424c567b: oi,
      __wbg_cullFace_774780fb4177aab8: ui,
      __wbg_deleteBuffer_d758283bea6e0ccf: wi,
      __wbg_deleteFramebuffer_8953b325144192fe: mi,
      __wbg_deleteProgram_0135c6926e75af75: hi,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: $i,
      __wbg_deleteShader_79dbaaed69b7ca3b: Ii,
      __wbg_deleteTexture_3acb672a45f9998a: Ti,
      __wbg_depthFunc_eaca1bc79f7bf216: Mi,
      __wbg_depthMask_3a9074b08d1f68e5: Ci,
      __wbg_depthRange_c24a808b3496e0a9: Ei,
      __wbg_uniform4iv_a9aaa92f2f458ec2: E1,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: W1,
      __wbg_uniformMatrix3fv_da8c388748c5739b: H1,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: J1,
      __wbg_activeTexture_1d5359b20df41710: vb,
      __wbg_attachShader_683d1070365e7066: Tb,
      __wbg_bindAttribLocation_d56d3c40331af7ed: kb,
      __wbg_bindBuffer_e95efaf0d4851845: Rb,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: Vb,
      __wbg_bindRenderbuffer_d608b211c51ed147: Ob,
      __wbg_bindTexture_ffc56f1e5c5526c6: zb,
      __wbg_blendColor_a0ba1cdcecc3a34c: jb,
      __wbg_blendEquation_8bfa69f639ae92da: Qb,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: Nb,
      __wbg_blendFunc_713c504adab14f98: Zb,
      __wbg_blendFuncSeparate_3eef699c291dbc87: Xb,
      __wbg_disable_4dca6ee0ccc91e4a: Ui,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: Wi,
      __wbg_drawArrays_10e1254aa4524ae9: Ji,
      __wbg_enable_c6e523307311617a: nf,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: rf,
      __wbg_flush_eb3fb8da2ec00d57: lf,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: hf,
      __wbg_linkProgram_6a2eee02a03b9b00: Vu,
      __wbg_pixelStorei_55ad4c67b699537c: Cd,
      __wbg_polygonOffset_06dc6468c12a57e1: Vd,
      __wbg_renderbufferStorage_2918fb696fd45663: Zd,
      __wbg_scissor_f9696c630e464977: i0,
      __wbg_shaderSource_628c37a476ae65f9: Dw,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: Rw,
      __wbg_stencilMask_f9fe198f7fd6fc9c: Gw,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: Ew,
      __wbg_stencilOpSeparate_6cf50803475d2640: zw,
      __wbg_texParameteri_fe6210a493d48a16: Qw,
      __wbg_framebufferTexture2D_3a558e14f56720d2: $f,
      __wbg_frontFace_c9bb1fa659ffd276: If,
      __wbg_getParameter_91a344e1a84a4669: Of,
      __wbg_getProgramInfoLog_35410850de9ccefe: Wf,
      __wbg_getProgramParameter_bbc667347ac2e882: qf,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: Kf,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: Jf,
      __wbg_getUniformLocation_340155dc706d3fea: eu,
      __wbg_uniform1f_d34e4b454f7c8e73: m1,
      __wbg_uniform1i_cd9a7f990128ea48: h1,
      __wbg_uniform4f_4410d2faaa7e5dda: k1,
      __wbg_useProgram_0e1cd86765304939: Z1,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: a2,
      __wbg_viewport_b5bd46a0d111c83c: b2,
      __wbg_texSubImage2D_1b2ff28f994c325e: Zw,
      __wbg_uniform2fv_39277cf2d3cb83c7: v1,
      __wbg_bufferData_5df9bdb32e189eee: rs,
      __wbg_bufferData_26132561617ce8fb: ts,
      __wbg_bufferSubData_44db8a3b4a70b57d: cs,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: Ds,
      __wbg_readPixels_05377f8b6fa1d8eb: Jd,
      __wbg_texImage2D_7bc3001cb8602ed2: jw,
      __wbg_navigator_017bc45e84c473cc: ld,
      __wbg_log_d282446d03691e72: Lu,
      __wbg_info_a392cd5b7536cfb5: gu,
      __wbg_warn_88c4a5bd9a322000: s2,
      __wbg_debug_7271beced8b71cd4: gi,
      __wbg_error_933f449d72fef598: ff,
      __wbg_error_50f60c611a3dcf64: sf,
      __wbg_set_width_031bdecd763c5855: yw,
      __wbg_set_height_ad5056ea051acd78: Lg,
      __wbg_getContext_486aab500e1c34c9: Bf,
      __wbg_getContext_9fd4db9b1cf155db: kf,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: mu,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: Xi,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: Xf,
      __wbg_width_a86bcd32bd998060: f2,
      __wbg_height_cd732bbdc7b66e49: su,
      __wbg_queryCounterEXT_ebb00bcc96221671: zd,
      __wbg_offsetX_0214819d43aaf6d5: Pd,
      __wbg_offsetY_f18f571e33b385ab: kd,
      __wbg_button_bb3285fcdf965178: bs,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: Ki,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: Zi,
      __wbg_get_37b48b8fa52d1f2c: ru,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: t2,
      __wbg_preventDefault_c047d3e292b08cc4: Ld,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: Sf,
      __wbg_width_08e66520b99071f4: i2,
      __wbg_height_e9afb506f31052a9: iu,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: Ub,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: bi,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: Bi,
      __wbg_set_width_f9e631f4ee129e5c: $w,
      __wbg_set_height_ef298446b359b0c5: Gg,
      __wbg_getContext_70c2d1bed75d4122: Pf,
      __wbg_getContext_422b32d0ee4b8076: Ff,
      __wbg_addEventListener_ea90bc131475777e: Ab,
      __wbg_contentRect_0fb8c8900d689a0c: Ms,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: yu,
      __wbg_new_1e52e3c919312525: hd,
      __wbg_observe_592b94857eed8e27: Fd,
      __wbg_altKey_7412dd64f8c921c7: Ib,
      __wbg_ctrlKey_00097886a21597a7: fi,
      __wbg_shiftKey_273ee8c901267b55: Fw,
      __wbg_metaKey_1c2847b62ad062c1: gd,
      __wbg_repeat_46a5c90df9f6ef0b: _0,
      __wbg_isComposing_e3709163a95a2477: Iu,
      __wbg_key_d6b3d2cce3d41872: Bu,
      __wbg_code_87bb99fdec02d313: $s,
      __wbg_resolve_d82363d90af6928a: o0,
      __wbg_then_591b6b3a75ee817a: w1,
      __wbg_iterator_cc47ba25a2be735a: Fu,
      __wbg_get_9a29be2cb383ed9a: nu,
      __wbg_next_402fa10b59ab20c3: Td,
      __wbg_new_2e117a478906f062: xd,
      __wbg_new_36e147a8ced3c6e0: $d,
      __wbg_of_62183ea089c00bfa: Bd,
      __wbg_isArray_145a34fd0a38d37b: Au,
      __wbg_new_e66a4b7758dd2e5c: Sd,
      __wbg_isSafeInteger_a3389a198582f5f6: Du,
      __wbg_is_de5b366c746e004c: Tu,
      __wbg_entries_c261c3fa1f281256: bf,
      __wbg_then_2a84678a50976959: p1,
      __wbg_length_589238bdcf171f0e: ku,
      __wbg_prototypesetcall_d721637c7ca66eb8: Gd,
      __wbg_set_272b80acaf9a75e8: y0,
      __wbg_new_81880fb5002cb255: vd,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: Id,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: Pw,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: Mw,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: kw,
      __wbg_static_accessor_WINDOW_168f178805d978fe: Cw,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: pu,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: xu,
      __wbg_queueMicrotask_1c9b3800e321a967: Hd,
      __wbg_queueMicrotask_311744e534a929a3: jd,
      __wbg_set_4564f7dc44fcb0c9: x0,
      __wbg___wbindgen_number_get_1cc01dd708740256: hb,
      __wbg___wbindgen_in_4990f46af709e33c: ib,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: xb,
      __wbg___wbindgen_is_null_6d937fbfb6478470: db,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: lb,
      __wbg_Number_c4bdf66bb78f7977: rb,
      __wbg_Error_fdd633d4bb5dd76a: tb,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: fb,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: gb,
      __wbg___wbindgen_is_string_1fca8072260dd261: pb,
      __wbg___wbindgen_string_get_71bb4348194e31f0: yb,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: bb,
      __wbg___wbindgen_is_function_acc5528be2b923f2: ub,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: wb,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: mb,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: cb,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: $b,
      __wbg___wbindgen_debug_string_8a447059637473e2: sb,
      __wbindgen_init_externref_table: M2,
      __wbindgen_cast_0000000000000001: g2,
      __wbindgen_cast_0000000000000002: p2,
      __wbindgen_cast_0000000000000003: w2,
      __wbindgen_cast_0000000000000004: l2,
      __wbindgen_cast_0000000000000005: m2,
      __wbindgen_cast_0000000000000006: h2,
      __wbindgen_cast_0000000000000007: y2,
      __wbindgen_cast_0000000000000008: x2,
      __wbindgen_cast_0000000000000009: $2,
      __wbindgen_cast_000000000000000a: v2,
      __wbindgen_cast_000000000000000b: S2,
      __wbindgen_cast_000000000000000c: A2,
      __wbindgen_cast_000000000000000d: I2,
      __wbindgen_cast_000000000000000e: D2,
      __wbindgen_cast_000000000000000f: T2,
      __wbindgen_cast_0000000000000010: F2,
      __wbindgen_cast_0000000000000011: B2,
      __wbindgen_cast_0000000000000012: P2,
      __wbindgen_cast_0000000000000013: k2
    }
  }, eb), { memory: l3, mount: m3, __wbg_proteusapp_free: h3, proteusapp_addChild: y3, proteusapp_animateTo: x3, proteusapp_bakeTexture: $3, proteusapp_bakedImageSize: v3, proteusapp_bakedTextSize: S3, proteusapp_bindKey: A3, proteusapp_channelDestroy: I3, proteusapp_channelSet: D3, proteusapp_clearFocus: T3, proteusapp_component: F3, proteusapp_copyBakedImageFrom: B3, proteusapp_createVideo: P3, proteusapp_cropImage: k3, proteusapp_declareGeometry: M3, proteusapp_declaredGeometry: C3, proteusapp_destroy: R3, proteusapp_devices: V3, proteusapp_focus: E3, proteusapp_focused: L3, proteusapp_freeResources: O3, proteusapp_get: G3, proteusapp_hideVideo: W3, proteusapp_inputDevices: z3, proteusapp_isFocused: U3, proteusapp_loadTexture: q3, proteusapp_mergeFrom: H3, proteusapp_mergeFromWithBehavior: j3, proteusapp_new: K3, proteusapp_onAppKey: N3, proteusapp_onBlur: J3, proteusapp_onClick: Q3, proteusapp_onDrag: X3, proteusapp_onDropped: Y3, proteusapp_onFocus: Z3, proteusapp_onFocusLost: el, proteusapp_onHoverEnter: _l, proteusapp_onHoverExit: tl, proteusapp_onKey: rl, proteusapp_onPress: nl, proteusapp_onRelease: al, proteusapp_onTransitionComplete: ol, proteusapp_pointerLeft: cl, proteusapp_pointerMoved: bl, proteusapp_pointerPressed: sl, proteusapp_pointerReleased: il, proteusapp_releaseVideo: fl, proteusapp_removeChild: ul, proteusapp_resetKeyMap: dl, proteusapp_setDeclaredGeometry: gl, proteusapp_setDefaultFocus: pl, proteusapp_setDevices: wl, proteusapp_setDisabled: ll, proteusapp_setImage: ml, proteusapp_setInputDevices: hl, proteusapp_setInteractive: yl, proteusapp_setOpacity: xl, proteusapp_setText: $l, proteusapp_setTexture: vl, proteusapp_setTransitionInteraction: Sl, proteusapp_setVideoCrossfade: Al, proteusapp_setVisible: Il, proteusapp_showVideo: Dl, proteusapp_splitTo: Tl, proteusapp_splitToWithBehavior: Fl, proteusapp_splitToWithStates: Bl, proteusapp_texture: Pl, proteusapp_textureState: kl, proteusapp_tick: Ml, proteusapp_transitionChannel: Cl, proteusapp_unbindKey: Rl, proteusapp_uploadVideoFrame: Vl, __wbg_handle_free: El, __wbg_texturehandle_free: Ll, __wbg_transitionchannel_free: Ol, __wbg_videohandle_free: Gl, handle_fromId: Wl, handle_id: zl, texturehandle_fromId: Ul, texturehandle_id: ql, __abort_handler: Hl, __instance_terminated: jl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: Kl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Nl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: Jl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Ql, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: Xl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: Yl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: Zl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: e4, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: _4, __wbindgen_malloc: t4, __wbindgen_realloc: r4, __wbindgen_exn_store: n4, __externref_table_alloc: a4, __wbindgen_externrefs: o4, __wbindgen_free: c4, __wbindgen_destroy_closure: b4, __externref_table_dealloc: s4, __wbindgen_start: zt } = w3, i4 = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: Hl,
    __externref_table_alloc: a4,
    __externref_table_dealloc: s4,
    __instance_terminated: jl,
    __wbg_handle_free: El,
    __wbg_proteusapp_free: h3,
    __wbg_texturehandle_free: Ll,
    __wbg_transitionchannel_free: Ol,
    __wbg_videohandle_free: Gl,
    __wbindgen_destroy_closure: b4,
    __wbindgen_exn_store: n4,
    __wbindgen_externrefs: o4,
    __wbindgen_free: c4,
    __wbindgen_malloc: t4,
    __wbindgen_realloc: r4,
    __wbindgen_start: zt,
    handle_fromId: Wl,
    handle_id: zl,
    memory: l3,
    mount: m3,
    proteusapp_addChild: y3,
    proteusapp_animateTo: x3,
    proteusapp_bakeTexture: $3,
    proteusapp_bakedImageSize: v3,
    proteusapp_bakedTextSize: S3,
    proteusapp_bindKey: A3,
    proteusapp_channelDestroy: I3,
    proteusapp_channelSet: D3,
    proteusapp_clearFocus: T3,
    proteusapp_component: F3,
    proteusapp_copyBakedImageFrom: B3,
    proteusapp_createVideo: P3,
    proteusapp_cropImage: k3,
    proteusapp_declareGeometry: M3,
    proteusapp_declaredGeometry: C3,
    proteusapp_destroy: R3,
    proteusapp_devices: V3,
    proteusapp_focus: E3,
    proteusapp_focused: L3,
    proteusapp_freeResources: O3,
    proteusapp_get: G3,
    proteusapp_hideVideo: W3,
    proteusapp_inputDevices: z3,
    proteusapp_isFocused: U3,
    proteusapp_loadTexture: q3,
    proteusapp_mergeFrom: H3,
    proteusapp_mergeFromWithBehavior: j3,
    proteusapp_new: K3,
    proteusapp_onAppKey: N3,
    proteusapp_onBlur: J3,
    proteusapp_onClick: Q3,
    proteusapp_onDrag: X3,
    proteusapp_onDropped: Y3,
    proteusapp_onFocus: Z3,
    proteusapp_onFocusLost: el,
    proteusapp_onHoverEnter: _l,
    proteusapp_onHoverExit: tl,
    proteusapp_onKey: rl,
    proteusapp_onPress: nl,
    proteusapp_onRelease: al,
    proteusapp_onTransitionComplete: ol,
    proteusapp_pointerLeft: cl,
    proteusapp_pointerMoved: bl,
    proteusapp_pointerPressed: sl,
    proteusapp_pointerReleased: il,
    proteusapp_releaseVideo: fl,
    proteusapp_removeChild: ul,
    proteusapp_resetKeyMap: dl,
    proteusapp_setDeclaredGeometry: gl,
    proteusapp_setDefaultFocus: pl,
    proteusapp_setDevices: wl,
    proteusapp_setDisabled: ll,
    proteusapp_setImage: ml,
    proteusapp_setInputDevices: hl,
    proteusapp_setInteractive: yl,
    proteusapp_setOpacity: xl,
    proteusapp_setText: $l,
    proteusapp_setTexture: vl,
    proteusapp_setTransitionInteraction: Sl,
    proteusapp_setVideoCrossfade: Al,
    proteusapp_setVisible: Il,
    proteusapp_showVideo: Dl,
    proteusapp_splitTo: Tl,
    proteusapp_splitToWithBehavior: Fl,
    proteusapp_splitToWithStates: Bl,
    proteusapp_texture: Pl,
    proteusapp_textureState: kl,
    proteusapp_tick: Ml,
    proteusapp_transitionChannel: Cl,
    proteusapp_unbindKey: Rl,
    proteusapp_uploadVideoFrame: Vl,
    texturehandle_fromId: Ul,
    texturehandle_id: ql,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: _4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: Kl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: Xl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: Yl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: Zl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: e4,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: Jl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Ql,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Nl
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  p3(i4);
  zt();
  async function f4(_, e) {
    await _b(_, (t) => e.setup(new g4(t)), e.update ? (t) => {
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
  }, u4 = class {
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
  }, d4 = class {
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
  }, g4 = class {
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
      return new u4(this, this.wasmApp.transitionChannel(e == null ? void 0 : e.id()));
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
      return new d4(this, this.wasmApp.createVideo());
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
  const p4 = "" + new URL("proteus_bench_web_bg-BhGmyUPN.wasm", import.meta.url).href;
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
      const a = h_(r, s.__wbindgen_malloc), o = C, c = s.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, o, n);
      return K.__wrap(c);
    }
    bakedImageSize(e) {
      return m(e, h), s.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return m(e, h), s.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bindKey(e, t) {
      const r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = C, a = s.proteusapp_bindKey(this.__wbg_ptr, e, r, n);
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
      const r = h_(e, s.__wbindgen_malloc), n = C, a = s.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : K.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      m(e, h);
      const a = t_(t, s.__wbindgen_malloc), o = C, c = s.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw P(c[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      m(e, h);
      const o = t_(t, s.__wbindgen_malloc), c = C, b = s.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
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
      const a = t_(t, s.__wbindgen_malloc), o = C, c = s.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, o, r, n);
      if (c[1]) throw P(c[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      m(e, h);
      const o = t_(t, s.__wbindgen_malloc), c = C, b = s.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, o, c, r, n, a);
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
      const a = h_(n, s.__wbindgen_malloc), o = C;
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
  function w4() {
    s.clear();
  }
  function l4(_) {
    s.on_frame(_);
  }
  function m4(_, e) {
    const t = G(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = C;
    s.show(t, r, e);
  }
  function h4(_, e) {
    const t = G(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = C;
    return s.start(t, r, e);
  }
  function y4() {
    s.stop_frames();
  }
  function x4(_, e) {
    return Error(S(_, e));
  }
  function $4(_) {
    return Number(_);
  }
  function v4(_, e) {
    const t = String(e), r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = C;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function S4(_) {
    return _.Window;
  }
  function A4(_) {
    return _.WorkerGlobalScope;
  }
  function I4(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    k().setBigInt64(_ + 8, v(r) ? BigInt(0) : r, true), k().setInt32(_ + 0, !v(r), true);
  }
  function D4(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return v(t) ? 16777215 : t ? 1 : 0;
  }
  function T4(_, e) {
    const t = C_(e), r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = C;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function F4(_, e) {
    return _ in e;
  }
  function B4(_) {
    return typeof _ == "bigint";
  }
  function P4(_) {
    return typeof _ == "function";
  }
  function k4(_) {
    return _ === null;
  }
  function M4(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function C4(_) {
    return typeof _ == "string";
  }
  function R4(_) {
    return _ === void 0;
  }
  function V4(_, e) {
    return _ === e;
  }
  function E4(_, e) {
    return _ == e;
  }
  function L4(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    k().setFloat64(_ + 8, v(r) ? 0 : r, true), k().setInt32(_ + 0, !v(r), true);
  }
  function O4(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = C;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function G4(_, e) {
    throw new Error(S(_, e));
  }
  function W4(_) {
    _._wbg_cb_unref();
  }
  function z4(_) {
    _.abort();
  }
  function U4(_) {
    return _.aborted;
  }
  function q4(_, e) {
    _.activeTexture(e >>> 0);
  }
  function H4(_, e) {
    _.activeTexture(e >>> 0);
  }
  function j4() {
    return g(function(_, e, t, r) {
      _.addEventListener(S(e, t), r);
    }, arguments);
  }
  function K4(_) {
    return _.altKey;
  }
  function N4() {
    return g(function(_) {
      return _.arrayBuffer();
    }, arguments);
  }
  function J4(_, e, t) {
    _.attachShader(e, t);
  }
  function Q4(_, e, t) {
    _.attachShader(e, t);
  }
  function X4(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function Y4() {
    return g(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Z4(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function em(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function _m(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function tm(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function rm(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function nm(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function am(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function om(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function cm(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function bm(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function sm(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function im(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function fm(_, e) {
    _.bindVertexArrayOES(e);
  }
  function um(_, e) {
    _.bindVertexArray(e);
  }
  function dm(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function gm(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function pm(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function wm(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function lm(_, e) {
    _.blendEquation(e >>> 0);
  }
  function mm(_, e) {
    _.blendEquation(e >>> 0);
  }
  function hm(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function ym(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function xm(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function $m(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function vm(_, e, t, r, n, a, o, c, b, f, d) {
    _.blitFramebuffer(e, t, r, n, a, o, c, b, f >>> 0, d >>> 0);
  }
  function Sm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Am(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Im(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Dm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Tm(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function Fm(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function Bm(_) {
    return _.button;
  }
  function Pm() {
    return g(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function km() {
    return g(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Mm() {
    return g(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function Cm(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, L(r, n));
  }
  function Rm(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, ee(r, n));
  }
  function Vm(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, $e(r, n));
  }
  function Em(_, e) {
    _.clearDepth(e);
  }
  function Lm(_, e) {
    _.clearDepth(e);
  }
  function Om(_, e) {
    _.clearStencil(e);
  }
  function Gm(_, e) {
    _.clearStencil(e);
  }
  function Wm(_, e) {
    _.clear(e >>> 0);
  }
  function zm(_, e) {
    _.clear(e >>> 0);
  }
  function Um(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function qm(_, e) {
    const t = e.code, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = C;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function Hm(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function jm(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Km(_, e) {
    _.compileShader(e);
  }
  function Nm(_, e) {
    _.compileShader(e);
  }
  function Jm(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function Qm(_, e, t, r, n, a, o, c, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b);
  }
  function Xm(_, e, t, r, n, a, o, c, b, f) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b, f);
  }
  function Ym(_, e, t, r, n, a, o, c, b, f, d, I) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d, I);
  }
  function Zm(_, e, t, r, n, a, o, c, b, f, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d);
  }
  function e7() {
    return g(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function _7(_) {
    return _.contentRect;
  }
  function t7(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function r7(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function n7(_, e, t, r, n, a, o, c, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, o, c, b);
  }
  function a7(_, e, t, r, n, a, o, c, b, f) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, o, c, b, f);
  }
  function o7() {
    return g(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function c7() {
    return g(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function b7(_, e) {
    return _.createBindGroup(e);
  }
  function s7(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : T(e);
  }
  function i7() {
    return g(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function f7(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : T(e);
  }
  function u7(_, e) {
    return _.createCommandEncoder(e);
  }
  function d7(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : T(e);
  }
  function g7(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : T(e);
  }
  function p7(_, e) {
    return _.createPipelineLayout(e);
  }
  function w7(_) {
    const e = _.createProgram();
    return v(e) ? 0 : T(e);
  }
  function l7(_) {
    const e = _.createProgram();
    return v(e) ? 0 : T(e);
  }
  function m7(_) {
    const e = _.createQuery();
    return v(e) ? 0 : T(e);
  }
  function h7() {
    return g(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function y7(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : T(e);
  }
  function x7(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : T(e);
  }
  function $7(_, e) {
    return _.createSampler(e);
  }
  function v7(_) {
    const e = _.createSampler();
    return v(e) ? 0 : T(e);
  }
  function S7(_, e) {
    return _.createShaderModule(e);
  }
  function A7(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : T(t);
  }
  function I7(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : T(t);
  }
  function D7(_) {
    const e = _.createTexture();
    return v(e) ? 0 : T(e);
  }
  function T7(_) {
    const e = _.createTexture();
    return v(e) ? 0 : T(e);
  }
  function F7() {
    return g(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function B7(_) {
    const e = _.createVertexArrayOES();
    return v(e) ? 0 : T(e);
  }
  function P7(_) {
    const e = _.createVertexArray();
    return v(e) ? 0 : T(e);
  }
  function k7() {
    return g(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function M7(_) {
    return _.ctrlKey;
  }
  function C7(_, e) {
    _.cullFace(e >>> 0);
  }
  function R7(_, e) {
    _.cullFace(e >>> 0);
  }
  function V7(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function E7(_, e) {
    _.deleteBuffer(e);
  }
  function L7(_, e) {
    _.deleteBuffer(e);
  }
  function O7(_, e) {
    _.deleteFramebuffer(e);
  }
  function G7(_, e) {
    _.deleteFramebuffer(e);
  }
  function W7(_, e) {
    _.deleteProgram(e);
  }
  function z7(_, e) {
    _.deleteProgram(e);
  }
  function U7(_, e) {
    _.deleteQuery(e);
  }
  function q7(_, e) {
    _.deleteRenderbuffer(e);
  }
  function H7(_, e) {
    _.deleteRenderbuffer(e);
  }
  function j7(_, e) {
    _.deleteSampler(e);
  }
  function K7(_, e) {
    _.deleteShader(e);
  }
  function N7(_, e) {
    _.deleteShader(e);
  }
  function J7(_, e) {
    _.deleteSync(e);
  }
  function Q7(_, e) {
    _.deleteTexture(e);
  }
  function X7(_, e) {
    _.deleteTexture(e);
  }
  function Y7(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function Z7(_, e) {
    _.deleteVertexArray(e);
  }
  function e6(_, e) {
    _.depthFunc(e >>> 0);
  }
  function _6(_, e) {
    _.depthFunc(e >>> 0);
  }
  function t6(_, e) {
    _.depthMask(e !== 0);
  }
  function r6(_, e) {
    _.depthMask(e !== 0);
  }
  function n6(_, e, t) {
    _.depthRange(e, t);
  }
  function a6(_, e, t) {
    _.depthRange(e, t);
  }
  function o6(_, e) {
    const t = e.description, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = C;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function c6(_) {
    _.destroy();
  }
  function b6(_) {
    return _.devicePixelRatio;
  }
  function s6(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function i6(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function f6(_, e) {
    _.disable(e >>> 0);
  }
  function u6(_, e) {
    _.disable(e >>> 0);
  }
  function d6(_) {
    const e = _.document;
    return v(e) ? 0 : T(e);
  }
  function g6(_) {
    return _.done;
  }
  function p6(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function w6(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function l6(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function m6(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function h6(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function y6(_, e) {
    _.drawBuffers(e);
  }
  function x6(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function $6(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function v6(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function S6(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function A6(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function I6(_, e) {
    _.enable(e >>> 0);
  }
  function D6(_, e) {
    _.enable(e >>> 0);
  }
  function T6(_, e) {
    _.endQuery(e >>> 0);
  }
  function F6(_) {
    _.end();
  }
  function B6(_) {
    return Object.entries(_);
  }
  function P6(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function k6(_) {
    console.error(_);
  }
  function M6(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(S(_, e));
    } finally {
      s.__wbindgen_free(t, r, 1);
    }
  }
  function C6(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return v(r) ? 0 : T(r);
  }
  function R6(_, e, t) {
    return _.fetch(S(e, t));
  }
  function V6(_, e, t, r) {
    return _.fetch(S(e, t), r);
  }
  function E6(_) {
    return _.finish();
  }
  function L6(_, e) {
    return _.finish(e);
  }
  function O6(_) {
    _.flush();
  }
  function G6(_) {
    _.flush();
  }
  function W6() {
    return g(function(_) {
      _.focus();
    }, arguments);
  }
  function z6(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function U6(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function q6(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function H6(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function j6(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function K6(_, e, t, r, n, a, o) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, o);
  }
  function N6(_, e) {
    _.frontFace(e >>> 0);
  }
  function J6(_, e) {
    _.frontFace(e >>> 0);
  }
  function Q6(_) {
    return _.getBoundingClientRect();
  }
  function X6(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function Y6() {
    return g(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : T(n);
    }, arguments);
  }
  function Z6() {
    return g(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : T(r);
    }, arguments);
  }
  function e8() {
    return g(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : T(r);
    }, arguments);
  }
  function _8() {
    return g(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : T(n);
    }, arguments);
  }
  function t8() {
    return g(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function r8(_, e, t) {
    const r = _.getElementById(S(e, t));
    return v(r) ? 0 : T(r);
  }
  function n8() {
    return g(function(_, e, t) {
      const r = _.getExtension(S(e, t));
      return v(r) ? 0 : T(r);
    }, arguments);
  }
  function a8() {
    return g(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function o8() {
    return g(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function c8() {
    return g(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function b8() {
    return g(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function s8(_) {
    const e = _.getPreferredCanvasFormat();
    return (ce.indexOf(e) + 1 || 96) - 1;
  }
  function i8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = C;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function f8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = C;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function u8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function d8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function g8(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function p8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = C;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function w8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = C;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function l8(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function m8(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function h8(_) {
    const e = _.getSupportedExtensions();
    return v(e) ? 0 : T(e);
  }
  function y8(_) {
    const e = _.getSupportedProfiles();
    return v(e) ? 0 : T(e);
  }
  function x8(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function $8(_, e, t, r) {
    return _.getUniformBlockIndex(e, S(t, r));
  }
  function v8(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : T(n);
  }
  function S8(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : T(n);
  }
  function A8(_, e) {
    return _[e >>> 0];
  }
  function I8(_, e) {
    const t = _[e >>> 0];
    return v(t) ? 0 : T(t);
  }
  function D8() {
    return g(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function T8(_, e) {
    return _[e >>> 0];
  }
  function F8(_, e) {
    return _[e];
  }
  function B8(_) {
    return _.gpu;
  }
  function P8(_, e, t) {
    return _.hasAttribute(S(e, t));
  }
  function k8(_) {
    return _.height;
  }
  function M8(_) {
    return _.height;
  }
  function C8(_) {
    return _.hidden;
  }
  function R8(_, e, t) {
    return _.includes(e, t);
  }
  function V8(_) {
    return _.info;
  }
  function E8(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function L8(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function O8(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function G8(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function W8(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function z8(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function U8(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function q8(_) {
    let e;
    try {
      e = _ instanceof Response;
    } catch {
      e = false;
    }
    return e;
  }
  function H8(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function j8(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function K8(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function N8() {
    return g(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function J8(_) {
    return Array.isArray(_);
  }
  function Q8(_) {
    return _.isComposing;
  }
  function X8(_) {
    return Number.isSafeInteger(_);
  }
  function Y8(_, e) {
    return Object.is(_, e);
  }
  function Z8() {
    return Symbol.iterator;
  }
  function e5(_, e) {
    const t = e.key, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = C;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function _5(_, e) {
    const t = e.label, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = C;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function t5(_) {
    return _.length;
  }
  function r5(_) {
    return _.length;
  }
  function n5(_) {
    return _.limits;
  }
  function a5(_) {
    return _.limits;
  }
  function o5(_, e) {
    _.linkProgram(e);
  }
  function c5(_, e) {
    _.linkProgram(e);
  }
  function b5(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function s5(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function i5(_) {
    return _.maxBindGroups;
  }
  function f5(_) {
    return _.maxBindingsPerBindGroup;
  }
  function u5(_) {
    return _.maxBufferSize;
  }
  function d5(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function g5(_) {
    return _.maxColorAttachments;
  }
  function p5(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function w5(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function l5(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function m5(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function h5(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function y5(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function x5(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function $5(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function v5(_) {
    return _.maxInterStageShaderVariables;
  }
  function S5(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function A5(_) {
    return _.maxSamplersPerShaderStage;
  }
  function I5(_) {
    return _.maxStorageBufferBindingSize;
  }
  function D5(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function T5(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function F5(_) {
    return _.maxTextureArrayLayers;
  }
  function B5(_) {
    return _.maxTextureDimension1D;
  }
  function P5(_) {
    return _.maxTextureDimension2D;
  }
  function k5(_) {
    return _.maxTextureDimension3D;
  }
  function M5(_) {
    return _.maxUniformBufferBindingSize;
  }
  function C5(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function R5(_) {
    return _.maxVertexAttributes;
  }
  function V5(_) {
    return _.maxVertexBufferArrayStride;
  }
  function E5(_) {
    return _.maxVertexBuffers;
  }
  function L5(_) {
    return _.metaKey;
  }
  function O5(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function G5(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function W5(_) {
    return _.navigator;
  }
  function z5(_) {
    return _.navigator;
  }
  function U5() {
    return g(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function q5() {
    return new Error();
  }
  function H5() {
    return new Object();
  }
  function j5() {
    return new Array();
  }
  function K5() {
    return g(function() {
      return new AbortController();
    }, arguments);
  }
  function N5(_) {
    return new Uint8Array(_);
  }
  function J5(_, e) {
    return new Error(S(_, e));
  }
  function Q5(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, o) => {
        const c = t.a;
        t.a = 0;
        try {
          return hS(c, t.b, a, o);
        } finally {
          t.a = c;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function X5(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function Y5() {
    return g(function(_) {
      return _.next();
    }, arguments);
  }
  function Z5(_) {
    return _.next;
  }
  function e9(_) {
    return _.now();
  }
  function _9(_, e) {
    _.observe(e);
  }
  function t9(_) {
    return Array.of(_);
  }
  function r9(_) {
    return _.offsetX;
  }
  function n9(_) {
    return _.offsetY;
  }
  function a9(_) {
    return _.ok;
  }
  function o9(_) {
    return _.onSubmittedWorkDone();
  }
  function c9(_) {
    const e = _.performance;
    return v(e) ? 0 : T(e);
  }
  function b9(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function s9(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function i9(_, e, t) {
    _.polygonOffset(e, t);
  }
  function f9(_, e, t) {
    _.polygonOffset(e, t);
  }
  function u9(_) {
    _.preventDefault();
  }
  function d9(_) {
    return De.__wrap(_);
  }
  function g9(_, e, t) {
    Uint8Array.prototype.set.call(i_(_, e), t);
  }
  function p9(_, e) {
    return _.push(e);
  }
  function w9(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function l9() {
    return g(function(_, e, t) {
      return _.querySelectorAll(S(e, t));
    }, arguments);
  }
  function m9() {
    return g(function(_, e, t) {
      const r = _.querySelector(S(e, t));
      return v(r) ? 0 : T(r);
    }, arguments);
  }
  function h9(_) {
    return _.queueMicrotask;
  }
  function y9(_) {
    queueMicrotask(_);
  }
  function x9(_) {
    return _.queue;
  }
  function $9(_, e) {
    _.readBuffer(e >>> 0);
  }
  function v9() {
    return g(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function S9() {
    return g(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function A9() {
    return g(function(_, e, t, r, n, a, o, c) {
      _.readPixels(e, t, r, n, a >>> 0, o >>> 0, c);
    }, arguments);
  }
  function I9(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function D9(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function T9(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function F9(_) {
    return _.repeat;
  }
  function B9(_, e) {
    return _.requestAdapter(e);
  }
  function P9(_) {
    return _.requestAdapter();
  }
  function k9() {
    return g(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function M9(_, e) {
    return _.requestDevice(e);
  }
  function C9(_) {
    return Promise.resolve(_);
  }
  function R9(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function V9(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function E9(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function L9(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function O9() {
    return g(function(_, e, t, r, n) {
      _.setAttribute(S(e, t), S(r, n));
    }, arguments);
  }
  function G9() {
    return g(function(_, e, t, r, n, a, o) {
      _.setBindGroup(e >>> 0, t, $e(r, n), a, o >>> 0);
    }, arguments);
  }
  function W9(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function z9(_, e, t, r, n) {
    _.setIndexBuffer(e, Y_[t], r, n);
  }
  function U9(_, e, t, r) {
    _.setIndexBuffer(e, Y_[t], r);
  }
  function q9(_, e) {
    _.setPipeline(e);
  }
  function H9(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function j9(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function K9(_, e, t, r, n, a, o) {
    _.setViewport(e, t, r, n, a, o);
  }
  function N9(_, e, t) {
    _.set(e, t >>> 0);
  }
  function J9() {
    return g(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function Q9(_, e, t) {
    _[e] = t;
  }
  function X9(_, e) {
    _.a = e;
  }
  function Y9(_, e) {
    _.access = BS[e];
  }
  function Z9(_, e) {
    _.addressModeU = Q_[e];
  }
  function eh(_, e) {
    _.addressModeV = Q_[e];
  }
  function _h(_, e) {
    _.addressModeW = Q_[e];
  }
  function th(_, e) {
    _.alpha = e;
  }
  function rh(_, e) {
    _.alphaMode = vS[e];
  }
  function nh(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function ah(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function oh(_, e) {
    _.arrayStride = e;
  }
  function ch(_, e) {
    _.aspect = Ht[e];
  }
  function bh(_, e) {
    _.aspect = Ht[e];
  }
  function sh(_, e) {
    _.attributes = e;
  }
  function ih(_, e) {
    _.b = e;
  }
  function fh(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function uh(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function dh(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function gh(_, e) {
    _.bindGroupLayouts = e;
  }
  function ph(_, e) {
    _.binding = e >>> 0;
  }
  function wh(_, e) {
    _.binding = e >>> 0;
  }
  function lh(_, e) {
    _.blend = e;
  }
  function mh(_, e) {
    _.buffer = e;
  }
  function hh(_, e) {
    _.buffer = e;
  }
  function yh(_, e) {
    _.buffers = e;
  }
  function xh(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function $h(_, e) {
    _.clearValue = e;
  }
  function vh(_, e, t) {
    _.code = S(e, t);
  }
  function Sh(_, e) {
    _.colorAttachments = e;
  }
  function Ah(_, e) {
    _.color = e;
  }
  function Ih(_, e) {
    _.compare = X_[e];
  }
  function Dh(_, e) {
    _.compare = X_[e];
  }
  function Th(_, e) {
    _.count = e >>> 0;
  }
  function Fh(_, e) {
    _.cullMode = SS[e];
  }
  function Bh(_, e, t) {
    _[e >>> 0] = t;
  }
  function Ph(_, e) {
    _.depthBias = e;
  }
  function kh(_, e) {
    _.depthBiasClamp = e;
  }
  function Mh(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function Ch(_, e) {
    _.depthClearValue = e;
  }
  function Rh(_, e) {
    _.depthCompare = X_[e];
  }
  function Vh(_, e) {
    _.depthFailOp = et[e];
  }
  function Eh(_, e) {
    _.depthLoadOp = Z_[e];
  }
  function Lh(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function Oh(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function Gh(_, e) {
    _.depthStencil = e;
  }
  function Wh(_, e) {
    _.depthStencilAttachment = e;
  }
  function zh(_, e) {
    _.depthStoreOp = _t[e];
  }
  function Uh(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function qh(_, e) {
    _.device = e;
  }
  function Hh(_, e) {
    _.dimension = tt[e];
  }
  function jh(_, e) {
    _.dimension = PS[e];
  }
  function Kh(_, e) {
    _.dstFactor = Ut[e];
  }
  function Nh(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function Jh(_, e) {
    _.entries = e;
  }
  function Qh(_, e) {
    _.entries = e;
  }
  function Xh(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function Yh(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function Zh(_, e) {
    _.externalTexture = e;
  }
  function ey(_, e) {
    _.failOp = et[e];
  }
  function _y(_, e) {
    _.format = ce[e];
  }
  function ty(_, e) {
    _.format = MS[e];
  }
  function ry(_, e) {
    _.format = ce[e];
  }
  function ny(_, e) {
    _.format = ce[e];
  }
  function ay(_, e) {
    _.format = ce[e];
  }
  function oy(_, e) {
    _.format = ce[e];
  }
  function cy(_, e) {
    _.format = ce[e];
  }
  function by(_, e) {
    _.fragment = e;
  }
  function sy(_, e) {
    _.frontFace = AS[e];
  }
  function iy(_, e) {
    _.g = e;
  }
  function fy(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function uy(_, e) {
    _.height = e >>> 0;
  }
  function dy(_, e) {
    _.height = e >>> 0;
  }
  function gy(_, e) {
    _.height = e >>> 0;
  }
  function py(_, e, t) {
    _.label = S(e, t);
  }
  function wy(_, e, t) {
    _.label = S(e, t);
  }
  function ly(_, e, t) {
    _.label = S(e, t);
  }
  function my(_, e, t) {
    _.label = S(e, t);
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
  function Ty(_, e) {
    _.layout = e;
  }
  function Fy(_, e) {
    _.layout = e;
  }
  function By(_, e) {
    _.loadOp = Z_[e];
  }
  function Py(_, e) {
    _.lodMaxClamp = e;
  }
  function ky(_, e) {
    _.lodMinClamp = e;
  }
  function My(_, e) {
    _.magFilter = qt[e];
  }
  function Cy(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function Ry(_, e) {
    _.mask = e >>> 0;
  }
  function Vy(_, e) {
    _.maxAnisotropy = e;
  }
  function Ey(_, e) {
    _.minBindingSize = e;
  }
  function Ly(_, e) {
    _.minFilter = qt[e];
  }
  function Oy(_, e) {
    _.mipLevel = e >>> 0;
  }
  function Gy(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Wy(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function zy(_, e) {
    _.mipmapFilter = IS[e];
  }
  function Uy(_, e) {
    _.module = e;
  }
  function qy(_, e) {
    _.module = e;
  }
  function Hy(_, e) {
    _.multisample = e;
  }
  function jy(_, e) {
    _.multisampled = e !== 0;
  }
  function Ky(_, e) {
    _.offset = e;
  }
  function Ny(_, e) {
    _.offset = e;
  }
  function Jy(_, e) {
    _.offset = e;
  }
  function Qy(_, e) {
    _.operation = xS[e];
  }
  function Xy(_, e) {
    _.origin = e;
  }
  function Yy(_, e) {
    _.passOp = et[e];
  }
  function Zy(_, e) {
    _.powerPreference = DS[e];
  }
  function ex(_, e) {
    _.primitive = e;
  }
  function _x(_, e) {
    _.querySet = e;
  }
  function tx(_, e) {
    _.r = e;
  }
  function rx(_, e) {
    _.requiredFeatures = e;
  }
  function nx(_, e) {
    _.requiredLimits = e;
  }
  function ax(_, e) {
    _.resolveTarget = e;
  }
  function ox(_, e) {
    _.resource = e;
  }
  function cx(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function bx(_, e) {
    _.sampleCount = e >>> 0;
  }
  function sx(_, e) {
    _.sampleType = kS[e];
  }
  function ix(_, e) {
    _.sampler = e;
  }
  function fx(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function ux(_, e) {
    _.signal = e;
  }
  function dx(_, e) {
    _.size = e;
  }
  function gx(_, e) {
    _.size = e;
  }
  function px(_, e) {
    _.size = e;
  }
  function wx(_, e) {
    _.srcFactor = Ut[e];
  }
  function lx(_, e) {
    _.stencilBack = e;
  }
  function mx(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function hx(_, e) {
    _.stencilFront = e;
  }
  function yx(_, e) {
    _.stencilLoadOp = Z_[e];
  }
  function xx(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function $x(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function vx(_, e) {
    _.stencilStoreOp = _t[e];
  }
  function Sx(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function Ax(_, e) {
    _.stepMode = CS[e];
  }
  function Ix(_, e) {
    _.storageTexture = e;
  }
  function Dx(_, e) {
    _.storeOp = _t[e];
  }
  function Tx(_, e) {
    _.stripIndexFormat = Y_[e];
  }
  function Fx(_, e) {
    _.targets = e;
  }
  function Bx(_, e) {
    _.texture = e;
  }
  function Px(_, e) {
    _.texture = e;
  }
  function kx(_, e) {
    _.timestampWrites = e;
  }
  function Mx(_, e) {
    _.topology = TS[e];
  }
  function Cx(_, e) {
    _.type = $S[e];
  }
  function Rx(_, e) {
    _.type = FS[e];
  }
  function Vx(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function Ex(_, e) {
    _.usage = e >>> 0;
  }
  function Lx(_, e) {
    _.usage = e >>> 0;
  }
  function Ox(_, e) {
    _.usage = e >>> 0;
  }
  function Gx(_, e) {
    _.usage = e >>> 0;
  }
  function Wx(_, e) {
    _.vertex = e;
  }
  function zx(_, e) {
    _.view = e;
  }
  function Ux(_, e) {
    _.view = e;
  }
  function qx(_, e) {
    _.viewDimension = tt[e];
  }
  function Hx(_, e) {
    _.viewDimension = tt[e];
  }
  function jx(_, e) {
    _.viewFormats = e;
  }
  function Kx(_, e) {
    _.viewFormats = e;
  }
  function Nx(_, e) {
    _.visibility = e >>> 0;
  }
  function Jx(_, e) {
    _.width = e >>> 0;
  }
  function Qx(_, e) {
    _.width = e >>> 0;
  }
  function Xx(_, e) {
    _.width = e >>> 0;
  }
  function Yx(_, e) {
    _.writeMask = e >>> 0;
  }
  function Zx(_, e) {
    _.x = e >>> 0;
  }
  function e$(_, e) {
    _.y = e >>> 0;
  }
  function _$(_, e) {
    _.z = e >>> 0;
  }
  function t$(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function r$(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function n$(_) {
    return _.shiftKey;
  }
  function a$(_) {
    return _.signal;
  }
  function o$(_, e) {
    const t = e.stack, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = C;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function c$() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return v(_) ? 0 : T(_);
  }
  function b$() {
    const _ = typeof global > "u" ? null : global;
    return v(_) ? 0 : T(_);
  }
  function s$() {
    const _ = typeof self > "u" ? null : self;
    return v(_) ? 0 : T(_);
  }
  function i$() {
    const _ = typeof window > "u" ? null : window;
    return v(_) ? 0 : T(_);
  }
  function f$(_, e) {
    const t = e.statusText, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = C;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function u$(_) {
    return _.status;
  }
  function d$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function g$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function p$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function w$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function l$(_, e) {
    _.stencilMask(e >>> 0);
  }
  function m$(_, e) {
    _.stencilMask(e >>> 0);
  }
  function h$(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function y$(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function x$(_, e) {
    _.submit(e);
  }
  function $$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function v$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function S$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function A$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function I$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, o, c, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function D$(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function T$(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function F$(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function B$(_, e, t, r, n, a, o) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, o);
  }
  function P$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function k$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function M$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function C$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function R$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function V$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function E$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function L$() {
    return g(function(_, e, t, r, n, a, o, c, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, o, c >>> 0, b >>> 0, f);
    }, arguments);
  }
  function O$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function G$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function W$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function z$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
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
  function H$() {
    return g(function(_, e, t, r, n, a, o, c, b, f, d, I) {
      _.texSubImage3D(e >>> 0, t, r, n, a, o, c, b, f >>> 0, d >>> 0, I);
    }, arguments);
  }
  function j$(_, e, t) {
    return _.then(e, t);
  }
  function K$(_, e, t) {
    return _.then(e, t);
  }
  function N$(_, e) {
    return _.then(e);
  }
  function J$(_, e, t) {
    _.uniform1f(e, t);
  }
  function Q$(_, e, t) {
    _.uniform1f(e, t);
  }
  function X$(_, e, t) {
    _.uniform1i(e, t);
  }
  function Y$(_, e, t) {
    _.uniform1i(e, t);
  }
  function Z$(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function ev(_, e, t, r) {
    _.uniform2fv(e, L(t, r));
  }
  function _v(_, e, t, r) {
    _.uniform2fv(e, L(t, r));
  }
  function tv(_, e, t, r) {
    _.uniform2iv(e, ee(t, r));
  }
  function rv(_, e, t, r) {
    _.uniform2iv(e, ee(t, r));
  }
  function nv(_, e, t, r) {
    _.uniform2uiv(e, $e(t, r));
  }
  function av(_, e, t, r) {
    _.uniform3fv(e, L(t, r));
  }
  function ov(_, e, t, r) {
    _.uniform3fv(e, L(t, r));
  }
  function cv(_, e, t, r) {
    _.uniform3iv(e, ee(t, r));
  }
  function bv(_, e, t, r) {
    _.uniform3iv(e, ee(t, r));
  }
  function sv(_, e, t, r) {
    _.uniform3uiv(e, $e(t, r));
  }
  function iv(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function fv(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function uv(_, e, t, r) {
    _.uniform4fv(e, L(t, r));
  }
  function dv(_, e, t, r) {
    _.uniform4fv(e, L(t, r));
  }
  function gv(_, e, t, r) {
    _.uniform4iv(e, ee(t, r));
  }
  function pv(_, e, t, r) {
    _.uniform4iv(e, ee(t, r));
  }
  function wv(_, e, t, r) {
    _.uniform4uiv(e, $e(t, r));
  }
  function lv(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function mv(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, L(r, n));
  }
  function hv(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, L(r, n));
  }
  function yv(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, L(r, n));
  }
  function xv(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, L(r, n));
  }
  function $v(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, L(r, n));
  }
  function vv(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, L(r, n));
  }
  function Sv(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, L(r, n));
  }
  function Av(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, L(r, n));
  }
  function Iv(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, L(r, n));
  }
  function Dv(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, L(r, n));
  }
  function Tv(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, L(r, n));
  }
  function Fv(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, L(r, n));
  }
  function Bv(_) {
    _.unmap();
  }
  function Pv(_, e) {
    _.useProgram(e);
  }
  function kv(_, e) {
    _.useProgram(e);
  }
  function Mv(_) {
    return _.value;
  }
  function Cv(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function Rv(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function Vv(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function Ev(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function Lv(_, e, t, r, n, a, o) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, o);
  }
  function Ov(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function Gv(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function Wv(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function zv(_) {
    return _.width;
  }
  function Uv(_) {
    return _.width;
  }
  function qv() {
    return g(function(_, e, t, r, n, a, o) {
      _.writeBuffer(e, t, i_(r, n), a, o);
    }, arguments);
  }
  function Hv() {
    return g(function(_, e, t, r, n, a) {
      _.writeTexture(e, i_(t, r), n, a);
    }, arguments);
  }
  function jv(_, e) {
    return _e(_, e, dS);
  }
  function Kv(_, e) {
    return _e(_, e, mS);
  }
  function Nv(_, e) {
    return _e(_, e, yS);
  }
  function Jv(_, e) {
    return _e(_, e, gS);
  }
  function Qv(_, e) {
    return _e(_, e, pS);
  }
  function Xv(_, e) {
    return _e(_, e, wS);
  }
  function Yv(_, e) {
    return _e(_, e, lS);
  }
  function Zv(_, e) {
    return _e(_, e, uS);
  }
  function eS(_) {
    return _;
  }
  function _S(_) {
    return _;
  }
  function tS(_, e) {
    return L(_, e);
  }
  function rS(_, e) {
    return RS(_, e);
  }
  function nS(_, e) {
    return ee(_, e);
  }
  function aS(_, e) {
    return VS(_, e);
  }
  function oS(_, e) {
    return ES(_, e);
  }
  function cS(_, e) {
    return $e(_, e);
  }
  function bS(_, e) {
    return i_(_, e);
  }
  function sS(_, e) {
    return S(_, e);
  }
  function iS(_) {
    return BigInt.asUintN(64, _);
  }
  function fS() {
    const _ = s.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function uS(_, e) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function dS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function gS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function pS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function wS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function lS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6(_, e, t);
  }
  function mS(_, e, t) {
    const r = s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (r[1]) throw P(r[0]);
  }
  function hS(_, e, t, r) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, r);
  }
  function yS(_, e, t) {
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
  ], xS = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], $S = [
    "uniform",
    "storage",
    "read-only-storage"
  ], vS = [
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
  ], SS = [
    "none",
    "front",
    "back"
  ], qt = [
    "nearest",
    "linear"
  ], AS = [
    "ccw",
    "cw"
  ], Y_ = [
    "uint16",
    "uint32"
  ], Z_ = [
    "load",
    "clear"
  ], IS = [
    "nearest",
    "linear"
  ], DS = [
    "low-power",
    "high-performance"
  ], TS = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], FS = [
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
  ], BS = [
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
  ], PS = [
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
  ], kS = [
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
  ], MS = [
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
  ], CS = [
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
  function C_(_) {
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
      n > 0 && (a += C_(_[0]));
      for (let o = 1; o < n; o++) a += ", " + C_(_[o]);
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
    return _ = _ >>> 0, LS().subarray(_ / 4, _ / 4 + e);
  }
  function RS(_, e) {
    return _ = _ >>> 0, GS().subarray(_ / 2, _ / 2 + e);
  }
  function ee(_, e) {
    return _ = _ >>> 0, WS().subarray(_ / 4, _ / 4 + e);
  }
  function VS(_, e) {
    return _ = _ >>> 0, zS().subarray(_ / 1, _ / 1 + e);
  }
  function ES(_, e) {
    return _ = _ >>> 0, US().subarray(_ / 2, _ / 2 + e);
  }
  function $e(_, e) {
    return _ = _ >>> 0, qS().subarray(_ / 4, _ / 4 + e);
  }
  function i_(_, e) {
    return _ = _ >>> 0, me().subarray(_ / 1, _ / 1 + e);
  }
  let ie = null;
  function k() {
    return (ie === null || ie.buffer.detached === true || ie.buffer.detached === void 0 && ie.buffer !== s.memory.buffer) && (ie = new DataView(s.memory.buffer)), ie;
  }
  let Ne = null;
  function LS() {
    return (Ne === null || Ne.byteLength === 0) && (Ne = new Float32Array(s.memory.buffer)), Ne;
  }
  let Je = null;
  function OS() {
    return (Je === null || Je.byteLength === 0) && (Je = new Float64Array(s.memory.buffer)), Je;
  }
  let Qe = null;
  function GS() {
    return (Qe === null || Qe.byteLength === 0) && (Qe = new Int16Array(s.memory.buffer)), Qe;
  }
  let Xe = null;
  function WS() {
    return (Xe === null || Xe.byteLength === 0) && (Xe = new Int32Array(s.memory.buffer)), Xe;
  }
  let Ye = null;
  function zS() {
    return (Ye === null || Ye.byteLength === 0) && (Ye = new Int8Array(s.memory.buffer)), Ye;
  }
  function S(_, e) {
    return jS(_ >>> 0, e);
  }
  let Ze = null;
  function US() {
    return (Ze === null || Ze.byteLength === 0) && (Ze = new Uint16Array(s.memory.buffer)), Ze;
  }
  let e_ = null;
  function qS() {
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
    return me().set(_, t / 1), C = _.length, t;
  }
  function t_(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return OS().set(_, t / 8), C = _.length, t;
  }
  function G(_, e, t) {
    if (t === void 0) {
      const c = Ae.encode(_), b = e(c.length, 1) >>> 0;
      return me().subarray(b, b + c.length).set(c), C = c.length, b;
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
    return C = o, n;
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
  const HS = 2146435072;
  let y_ = 0;
  function jS(_, e) {
    return y_ += e, y_ >= HS && (a_ = new TextDecoder("utf-8", {
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
  let C = 0, s;
  function KS(_) {
    s = _;
  }
  URL = globalThis.URL;
  const NS = await O_({
    "./proteus_bench_web_bg.js": {
      __wbg_call_5575218572ead796: km,
      __wbg_new_typed_00a409eb4ec4f2d9: Q5,
      __wbg_then_05edfc8a4fea5106: j$,
      __wbg_next_0c4066e251d2eff9: Y5,
      __wbg_done_b62d4a7d2286852a: g6,
      __wbg_value_49f783bb59765962: Mv,
      __wbg_get_197a3fe98f169e38: A8,
      __wbg_get_unchecked_54a4374c38e08460: T8,
      __wbg_length_c6054974c0a6cdb9: r5,
      __wbg_new_227d7c05414eb861: q5,
      __wbg_stack_3b0d974bbf31e44f: o$,
      __wbg_error_a6fa202b58aa1cd3: M6,
      __wbg_instanceof_Map_afa18d5840c04c15: z8,
      __wbg_push_f724b5db8acf89d2: p9,
      __wbg_proteusapp_new: d9,
      __wbg_call_0e855b388e315e17: Pm,
      __wbg_call_8e98ed2f3c86c4b5: Mm,
      __wbg_set_dc601f4a69da0bc2: Bh,
      __wbg_get_with_ref_key_6412cf3094599694: F8,
      __wbg_set_6be42768c690e380: Q9,
      __wbg_String_8564e559799eccda: v4,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: G8,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: B5,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: P5,
      __wbg_maxTextureDimension3D_06ee54121b37d431: k5,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: F5,
      __wbg_maxBindGroups_14611ac9ed1c6b56: i5,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: f5,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: $5,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: x5,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: S5,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: A5,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: D5,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: T5,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: C5,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: M5,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: I5,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: E5,
      __wbg_maxBufferSize_f7ce3e1856349d2f: u5,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: R5,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: V5,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: v5,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: G5,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: O5,
      __wbg_maxColorAttachments_fd9187f9f786da18: g5,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: d5,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: h5,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: p5,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: w5,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: l5,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: m5,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: y5,
      __wbg_description_18d0a6d4077fec8e: o6,
      __wbg_set_dst_factor_1ed75271a89a711e: Kh,
      __wbg_set_operation_b5862f5a1a143b30: Qy,
      __wbg_set_src_factor_1c4f755f8676df1b: wx,
      __wbg_set_texture_16d2be474ce6ad0c: Bx,
      __wbg_set_mip_level_246db61be15bdd69: Oy,
      __wbg_set_x_56f0c2c08a62725c: Zx,
      __wbg_set_y_04fb8ce84735b4e1: e$,
      __wbg_set_z_a51316db27a4941e: _$,
      __wbg_set_origin_9b3b0fbe0a5dc469: Xy,
      __wbg_set_aspect_77332ac136ee94eb: ch,
      __wbg_Window_a07901001eb4269f: S4,
      __wbg_gpu_a7c12045c25d009a: B8,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: A4,
      __wbg_set_a_5f6e488475272136: X9,
      __wbg_set_b_688365d692bba214: ih,
      __wbg_set_g_d4d1d77cf8fdd362: iy,
      __wbg_set_r_527e5a41c4b1a846: tx,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: O8,
      __wbg_queue_65d985f3e6d786a6: x9,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: Zy,
      __wbg_requestAdapter_9ff5c9d1ff271165: B9,
      __wbg_set_required_limits_3b031f66f838f4e3: nx,
      __wbg_set_required_features_54918de8185c5fab: rx,
      __wbg_set_label_bae57fb9f24fde5c: xy,
      __wbg_requestDevice_c1c34f88a477e509: M9,
      __wbg_limits_50a8c5e629dbfe40: a5,
      __wbg_info_22dcf1fd1b12bc7d: V8,
      __wbg_set_size_41cd9255ca1e4242: gx,
      __wbg_set_usage_908213a4d4bb8bde: Ox,
      __wbg_set_mapped_at_creation_48de4735fab51e78: Cy,
      __wbg_set_label_cd567b7b35838e4c: Sy,
      __wbg_createBuffer_2f08c0205e04efca: i7,
      __wbg_set_address_mode_u_a37cf1035585c638: Z9,
      __wbg_set_address_mode_v_8ac049e029caef76: eh,
      __wbg_set_address_mode_w_eb9260ee11729e92: _h,
      __wbg_set_compare_42211fbf15e3b850: Dh,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: Py,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: ky,
      __wbg_set_mag_filter_69d846b974d4bcc0: My,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: Ly,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: zy,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: Vy,
      __wbg_set_label_dcd98efbb9370da8: Iy,
      __wbg_createSampler_248bd67c920af37d: $7,
      __wbg_set_width_1a5e2e86fa5bdcd8: Qx,
      __wbg_set_height_e8b5483b8c117d5e: dy,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: Lh,
      __wbg_set_format_e9d4b1475bb3bd3b: oy,
      __wbg_set_size_a61ff22205255d61: px,
      __wbg_set_usage_7fa9cd18d1104aca: Lx,
      __wbg_set_label_0c1bd0e976cf0a9a: wy,
      __wbg_set_dimension_36e13ccecae5af4b: jh,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: Wy,
      __wbg_set_sample_count_865e1d19b84e27e6: bx,
      __wbg_set_view_formats_bab284fc81b40e70: jx,
      __wbg_createTexture_9e76b80a2dc0d12e: F7,
      __wbg_set_entries_fc76ca4d7da6a709: Qh,
      __wbg_set_layout_eeef59714f5bf48b: Fy,
      __wbg_set_label_f92ae11c77d74198: Dy,
      __wbg_createBindGroup_2320df4db188406c: b7,
      __wbg_set_code_56e2d45ec1ff6c2d: vh,
      __wbg_set_label_be45aed56e4b9fee: $y,
      __wbg_createShaderModule_53701de4fb271c90: S7,
      __wbg_set_label_d1c24b5a7a3ac31d: Ay,
      __wbg_createCommandEncoder_cd88faca35d9ed68: u7,
      __wbg_set_bind_group_layouts_5325d038771af328: gh,
      __wbg_set_label_2f592bd1be3db6b3: hy,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: p7,
      __wbg_set_module_14e471fdd94c582d: qy,
      __wbg_set_entry_point_8db3b6d103e3b865: Yh,
      __wbg_set_buffers_85a7238f4ef28ab4: yh,
      __wbg_set_layout_7c5ba5bdcde8a0f0: Ty,
      __wbg_set_vertex_a4951dd9a7a4ed54: Wx,
      __wbg_set_label_c47c451211e2f6d2: vy,
      __wbg_set_format_f9341112e43ea182: cy,
      __wbg_set_depth_compare_30e9ea552da12fe2: Rh,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: Uh,
      __wbg_set_depth_bias_428c9340b0fd937b: Ph,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: kh,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: Mh,
      __wbg_set_compare_1509dc1a5420943f: Ih,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: Vh,
      __wbg_set_fail_op_77ab26c98f847b65: ey,
      __wbg_set_pass_op_e9470d1262fb8a8b: Yy,
      __wbg_set_stencil_back_6ef4683123b19b25: lx,
      __wbg_set_stencil_front_aeb8580a97e5424b: hx,
      __wbg_set_stencil_read_mask_2954f260d47349ea: xx,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: Sx,
      __wbg_set_depth_stencil_1bd50dbc450c8650: Gh,
      __wbg_set_module_08ad08e736d8edbf: Uy,
      __wbg_set_targets_6b0b3bdd87f35668: Fx,
      __wbg_set_entry_point_6fec5723cc790927: Xh,
      __wbg_set_fragment_1a595620425637e1: by,
      __wbg_set_count_26a934d1cd07d080: Th,
      __wbg_set_mask_0c49a66362fc0079: Ry,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: nh,
      __wbg_set_multisample_85f073947b782d07: Hy,
      __wbg_set_cull_mode_9d466c1ab414cac8: Fh,
      __wbg_set_front_face_50cdf4eb61504a46: sy,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: Tx,
      __wbg_set_topology_beefb3aca0612b00: Mx,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: Vx,
      __wbg_set_primitive_369241acd17871f1: ex,
      __wbg_createRenderPipeline_f48187ba9f7701e8: h7,
      __wbg_set_entries_3017e6132f938c6e: Jh,
      __wbg_set_label_1175a3329a06e52b: ly,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: c7,
      __wbg_limits_1c25cb4f379a4418: n5,
      __wbg_set_color_attachments_abe67f6631926e28: Sh,
      __wbg_set_label_8fd860a36d2c7b74: yy,
      __wbg_set_view_dbd0294573f64d05: Ux,
      __wbg_set_depth_clear_value_442bf492734f63b6: Ch,
      __wbg_set_depth_load_op_34d430b74bb36d91: Eh,
      __wbg_set_depth_store_op_0ea0a215313dbda7: zh,
      __wbg_set_depth_read_only_138a11b10c731094: Oh,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: mx,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: yx,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: vx,
      __wbg_set_stencil_read_only_fb489d191b6d969b: $x,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: Wh,
      __wbg_set_query_set_18679a8580267d5a: _x,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: dh,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: Nh,
      __wbg_set_timestamp_writes_c552d52fbb417005: kx,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: Y4,
      __wbg_copyTextureToTexture_1be188df1e535c0a: o7,
      __wbg_label_47480289cc2bce71: _5,
      __wbg_set_label_2d2227f4d5991e50: my,
      __wbg_finish_cfaeede3baf55be1: L6,
      __wbg_finish_087cb89c65c06eb1: E6,
      __wbg_drawIndexed_68637ebab6dd8d6e: v6,
      __wbg_setPipeline_bab24dbce96903b9: q9,
      __wbg_setViewport_f9d423db4f4b4b58: K9,
      __wbg_setBindGroup_4ba56e1e0d26f244: G9,
      __wbg_setBindGroup_6124849cc8547086: W9,
      __wbg_setIndexBuffer_17431786d06c1b7c: z9,
      __wbg_setIndexBuffer_a16ed5b869c87507: U9,
      __wbg_setVertexBuffer_b508baf8d0ffe331: j9,
      __wbg_setVertexBuffer_91c4b602d0289943: H9,
      __wbg_end_414453a89205612c: F6,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: s8,
      __wbg_getCurrentTexture_51975ae7185fd15f: t8,
      __wbg_set_device_0d774b66e7288f72: qh,
      __wbg_set_format_d347899cd860709c: ay,
      __wbg_set_usage_ae014e77ff77ce06: Gx,
      __wbg_set_alpha_mode_92402195b3ae1ee7: rh,
      __wbg_set_view_formats_fe531a043efb71fa: Kx,
      __wbg_configure_3d64c677c7d68a15: e7,
      __wbg_writeBuffer_b4bdd36178348ca5: qv,
      __wbg_set_bytes_per_row_91681ca78d744888: xh,
      __wbg_set_rows_per_image_d198b7e73a38978b: cx,
      __wbg_set_offset_a097a8050a3a9a33: Jy,
      __wbg_writeTexture_b45b69132e46a227: Hv,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: o9,
      __wbg_submit_1290d44bb76ecef4: x$,
      __wbg_getMappedRange_5ed22727c9679168: o8,
      __wbg_unmap_8f06698a75b8331a: Bv,
      __wbg_destroy_b5b39f25f0799295: c6,
      __wbg_mapAsync_bb0029907dd91181: s5,
      __wbg_set_dimension_174ad7e2fb67fb4e: Hh,
      __wbg_set_format_90860b0321868db4: ry,
      __wbg_set_aspect_a823a14d00d42d37: bh,
      __wbg_set_base_array_layer_cc6c68d233489c4b: fh,
      __wbg_set_array_layer_count_daec613068108a9d: ah,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: uh,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: Gy,
      __wbg_set_label_03d2396d4655a3e1: py,
      __wbg_set_usage_7f0dda8309469b1c: Ex,
      __wbg_createView_cc96b5bdd3d5bf5e: k7,
      __wbg_set_min_binding_size_689661b9ed25e083: Ey,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: fy,
      __wbg_set_type_38961e08504ca674: Cx,
      __wbg_requestAdapter_c46930b8bc33722d: P9,
      __wbg_set_alpha_aa2e606e9e647b21: th,
      __wbg_set_color_bc393d7efc3c8594: Ah,
      __wbg_set_visibility_1bca121a89accba5: Nx,
      __wbg_set_storage_texture_ab9eed9786337ef0: Ix,
      __wbg_set_external_texture_825fe2bc7a0c0603: Zh,
      __wbg_set_binding_b6b0fe5c281b8c69: ph,
      __wbg_set_buffer_e89095a9f0cafad3: hh,
      __wbg_set_sampler_8c5d7fb1b02058c6: ix,
      __wbg_set_texture_e25a73da75cf5808: Px,
      __wbg_set_format_abf7a1bc5425c56a: ny,
      __wbg_set_blend_8d6e9c08b5702a09: lh,
      __wbg_set_write_mask_144b25e2bd909124: Yx,
      __wbg_set_load_op_56844f51434037bf: By,
      __wbg_set_store_op_caeede4654b3d847: Dx,
      __wbg_set_view_bdeab150b5f0768c: zx,
      __wbg_set_clear_value_642701f928a5ccb3: $h,
      __wbg_set_resolve_target_fe76b3f99cf72078: ax,
      __wbg_set_buffer_55f096330c8912b4: mh,
      __wbg_set_offset_73156b0e0b41d79a: Ky,
      __wbg_set_size_1e6281b07cd39177: dx,
      __wbg_set_binding_f3c188a8cd21455b: wh,
      __wbg_set_resource_fe385d2e3dadaf63: ox,
      __wbg_set_format_6606f5c1fba6f459: ty,
      __wbg_set_offset_8d9d9afffa18b591: Ny,
      __wbg_set_shader_location_0ff30a733291a396: fx,
      __wbg_set_array_stride_c2c009eabc18b5f6: oh,
      __wbg_set_attributes_05f9117fd32ca606: sh,
      __wbg_set_step_mode_a35aef328761c452: Ax,
      __wbg_set_type_c1eebc19f8a6aeb9: Rx,
      __wbg_set_multisampled_40505c1381e1c32c: jy,
      __wbg_set_sample_type_7088b1efddce6a69: sx,
      __wbg_set_view_dimension_3ed01b237e85826f: Hx,
      __wbg_set_format_1786adb7bc74c7c9: _y,
      __wbg_set_access_091f317905cd76a5: Y9,
      __wbg_set_view_dimension_263387976511ebc9: qx,
      __wbg_includes_83dff8d05da243c5: R8,
      __wbg_clearBufferuiv_1d2d93401c0904a3: Vm,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: Qm,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: Ym,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: Zm,
      __wbg_copyBufferSubData_a944f33b601b822d: t7,
      __wbg_clientWaitSync_7580165bd2eff461: Um,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: Xm,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: a7,
      __wbg_createQuery_f013132b870a71ef: m7,
      __wbg_createSampler_9fe50152a2524319: v7,
      __wbg_createVertexArray_8685feb21901c932: P7,
      __wbg_deleteQuery_ef51ea0a52420103: U7,
      __wbg_deleteSampler_5c045e0cc55813d4: j7,
      __wbg_getIndexedParameter_2b18df6fca85f751: a8,
      __wbg_getQueryParameter_0599e85ddb81220b: g8,
      __wbg_getSyncParameter_9a2bda340ebe166f: x8,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: $8,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: N8,
      __wbg_deleteSync_37ca83c429c43d8a: J7,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: Z7,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: w6,
      __wbg_drawBuffers_558d96e52e754731: y6,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: $6,
      __wbg_endQuery_161170c5280a8293: T6,
      __wbg_fenceSync_56efc7cc79111e54: C6,
      __wbg_framebufferTextureLayer_2312acdc74f97676: j6,
      __wbg_getBufferSubData_92680d3a2f7be029: X6,
      __wbg_readBuffer_361ec5474f3aae49: $9,
      __wbg_readPixels_5840000f3e22f3ce: S9,
      __wbg_readPixels_5bf204799ed2272f: A9,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: I9,
      __wbg_texImage3D_8647ef58aef5b912: I$,
      __wbg_texStorage2D_ed5df596c5f1e3af: F$,
      __wbg_texStorage3D_160b0197bc190f04: B$,
      __wbg_texSubImage2D_f03448e182b0820d: L$,
      __wbg_texSubImage2D_d14d9c0a1f627c31: E$,
      __wbg_texSubImage2D_89866a04ecd0a76b: C$,
      __wbg_texSubImage2D_5c630043f1c56716: M$,
      __wbg_samplerParameterf_3157ba41c0f4d97a: R9,
      __wbg_samplerParameteri_f85a29156e790189: V9,
      __wbg_texImage2D_0e0f37b9fb297d01: $$,
      __wbg_texImage2D_0e537dc331652de3: v$,
      __wbg_texImage3D_30dbf7234481b8f5: A$,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: k$,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: R$,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: V$,
      __wbg_texSubImage3D_933e4cd41cc5376d: U$,
      __wbg_texSubImage3D_c3538b28040daac9: H$,
      __wbg_uniform1ui_36c94692177ebf76: Z$,
      __wbg_uniform2fv_17592f4dad9798fb: ev,
      __wbg_uniform2iv_d5d29ebbc466977d: rv,
      __wbg_texSubImage3D_0fdbd843482bb916: G$,
      __wbg_texSubImage3D_09a97a968b93253d: O$,
      __wbg_texSubImage3D_355efde0dc047913: W$,
      __wbg_texSubImage3D_bd32c8e29e470904: q$,
      __wbg_texSubImage3D_5a238709d114b609: z$,
      __wbg_uniform2uiv_418ba3bf6a230dd5: nv,
      __wbg_uniform4fv_9e670a001c77dca0: dv,
      __wbg_uniform4iv_1d57c6b8e5c0e447: gv,
      __wbg_uniform3fv_dbe44b778e6b89e8: ov,
      __wbg_uniform3iv_d75d3a5f86d54be4: bv,
      __wbg_uniform3uiv_71c1efc24a662de9: sv,
      __wbg_uniform4uiv_c5d45f5dbdae727a: wv,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: $v,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: Sv,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: Av,
      __wbg_uniformBlockBinding_829a71912ad79a04: lv,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: mv,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: yv,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: xv,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: Iv,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: Vv,
      __wbg_activeTexture_525ee3068cb9e8d5: H4,
      __wbg_attachShader_3477e67517b09b6b: J4,
      __wbg_bindAttribLocation_79b5d26727094518: Z4,
      __wbg_bindBuffer_d3111de6861cb875: tm,
      __wbg_bindFramebuffer_63e837a5dc0accfb: am,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: om,
      __wbg_bindTexture_7ab28ff4ff3dc506: sm,
      __wbg_blendColor_15f26633b646e542: dm,
      __wbg_blendEquation_7dadb4db540a42da: lm,
      __wbg_blendEquationSeparate_8240ddfa32266109: pm,
      __wbg_blendFunc_b15af02643e188f1: $m,
      __wbg_blendFuncSeparate_456410f9919bed39: ym,
      __wbg_clear_dadcb3e2929388b0: Wm,
      __wbg_clearDepth_05c17028494ee4dd: Em,
      __wbg_clearStencil_917833d1e2ac56e4: Gm,
      __wbg_colorMask_f111e3e5796458f4: jm,
      __wbg_compileShader_f5625b583b2c9fd6: Km,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: Tv,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: Fv,
      __wbg_vertexAttribDivisor_f17a8585267be92f: Rv,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: r7,
      __wbg_createBuffer_9f602b2dbcbf409c: f7,
      __wbg_createFramebuffer_4a250944a4542bbc: d7,
      __wbg_createProgram_4c8164d471c10346: w7,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: x7,
      __wbg_createShader_9c5cd42709d915ff: I7,
      __wbg_createTexture_3eed23cb87dd35fc: D7,
      __wbg_cullFace_94f24b4fd5e9038b: R7,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: E7,
      __wbg_getExtension_11824edd67a143d8: n8,
      __wbg_getParameter_7f7f23cae98f2c81: c8,
      __wbg_getProgramInfoLog_cd84be80942f345b: f8,
      __wbg_getProgramParameter_039391d5ba319f50: u8,
      __wbg_getShaderInfoLog_495bddda98172699: p8,
      __wbg_getShaderParameter_4eb65cfb174ceb22: l8,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: h8,
      __wbg_getUniformLocation_ab63f569a4e41744: S8,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: O7,
      __wbg_deleteProgram_eff668280dcb01ca: z7,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: H7,
      __wbg_deleteShader_3339454254c7147c: K7,
      __wbg_deleteTexture_c1c58550dc55af5c: X7,
      __wbg_depthFunc_31b183b5b8ee478e: e6,
      __wbg_depthMask_cab7f2ae7f0e559c: r6,
      __wbg_depthRange_797a71ba3b79267a: n6,
      __wbg_disable_cb1b3e6c1cee5202: u6,
      __wbg_disableVertexAttribArray_b395358ec5084c39: i6,
      __wbg_drawArrays_42dbb4b0349c8f34: m6,
      __wbg_enable_d1f42f78be33a553: D6,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: S6,
      __wbg_flush_7ae42f071230db6b: O6,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: U6,
      __wbg_framebufferTexture2D_367ab597a005e8d9: q6,
      __wbg_frontFace_9bdcf2a758e989e5: N6,
      __wbg_linkProgram_e23a348b0f6e0c4f: c5,
      __wbg_pixelStorei_a78a504be58d1d0a: s9,
      __wbg_polygonOffset_a4f07d97b9b0dced: f9,
      __wbg_renderbufferStorage_3049e13db5c4e60e: T9,
      __wbg_scissor_6c024669fbf4fe72: E9,
      __wbg_vertexAttribPointer_4e5d289c5d224210: Lv,
      __wbg_viewport_a0ca330f9b85397e: Ov,
      __wbg_shaderSource_66dce75b25a1a407: r$,
      __wbg_stencilFuncSeparate_ec603976be9569a4: g$,
      __wbg_stencilMask_485dcb5965c79a71: l$,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: w$,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: h$,
      __wbg_texParameteri_c6efffcecb474d2f: D$,
      __wbg_uniform1f_3acd3f3eb50b5e11: J$,
      __wbg_uniform1i_e4f13604354c28ae: Y$,
      __wbg_uniform4f_a5008773cfb47d1a: fv,
      __wbg_useProgram_ab2ee2a13a1fd909: kv,
      __wbg_bufferSubData_2270f1b9db71e642: Tm,
      __wbg_clearBufferfv_6b77b9402254a2bf: Cm,
      __wbg_clearBufferiv_0f056544010eef3e: Rm,
      __wbg_beginQuery_dad334d972fed3cc: X4,
      __wbg_bindBufferRange_16a9d90becc2a7d7: _m,
      __wbg_bindSampler_3c7002cb6d56ae8f: bm,
      __wbg_bindVertexArray_c391bd47303d75cd: um,
      __wbg_blitFramebuffer_ea96ada8bba07582: vm,
      __wbg_bufferData_64e9905f2b3d3a6f: Im,
      __wbg_bufferData_99bbbc63f02251c4: Dm,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: j8,
      __wbg_performance_4c23a97261596fec: c9,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: k9,
      __wbg_fetch_2d913f7108d17a24: R6,
      __wbg_fetch_d8c50740ea23b248: V6,
      __wbg_navigator_935098efd1dc7fe5: z5,
      __wbg_devicePixelRatio_8e5ca44720abafec: b6,
      __wbg_document_2634180a4c694068: d6,
      __wbg_instanceof_Window_0d356b88a2f77c42: K8,
      __wbg_hidden_cb32701ca3785fea: C8,
      __wbg_getElementById_c7aba6b93b34bf01: r8,
      __wbg_querySelector_1f3658f4b48e268b: m9,
      __wbg_querySelectorAll_ffda3c891a9eb29a: l9,
      __wbg_hasAttribute_73e1230c9c107e79: P8,
      __wbg_setAttribute_8bccfbabf2a83682: O9,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: Q6,
      __wbg_focus_c80921c19b28520b: W6,
      __wbg_uniform2iv_c5e863975dd780d8: tv,
      __wbg_uniform3fv_7723e142be50856f: av,
      __wbg_uniform3iv_bea3976522e15d48: cv,
      __wbg_uniform4fv_85ad5d23234895d2: uv,
      __wbg_clear_ff8cfdf420f7dde6: zm,
      __wbg_clearDepth_ac6b54f112feeaf7: Lm,
      __wbg_clearStencil_56d6a6308294a749: Om,
      __wbg_colorMask_b0ab9d429a1efa0a: Hm,
      __wbg_compileShader_fcf3f3d2891f73f9: Nm,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: n7,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: s7,
      __wbg_createFramebuffer_ab73f30b5dc97415: g7,
      __wbg_createProgram_f11c63f59f41b82a: l7,
      __wbg_createRenderbuffer_556000dbb01f5026: y7,
      __wbg_createShader_27d9388313f3b14e: A7,
      __wbg_createTexture_8455c703424c567b: T7,
      __wbg_cullFace_774780fb4177aab8: C7,
      __wbg_deleteBuffer_d758283bea6e0ccf: L7,
      __wbg_deleteFramebuffer_8953b325144192fe: G7,
      __wbg_deleteProgram_0135c6926e75af75: W7,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: q7,
      __wbg_deleteShader_79dbaaed69b7ca3b: N7,
      __wbg_deleteTexture_3acb672a45f9998a: Q7,
      __wbg_depthFunc_eaca1bc79f7bf216: _6,
      __wbg_depthMask_3a9074b08d1f68e5: t6,
      __wbg_depthRange_c24a808b3496e0a9: a6,
      __wbg_uniform4iv_a9aaa92f2f458ec2: pv,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: hv,
      __wbg_uniformMatrix3fv_da8c388748c5739b: vv,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: Dv,
      __wbg_activeTexture_1d5359b20df41710: q4,
      __wbg_attachShader_683d1070365e7066: Q4,
      __wbg_bindAttribLocation_d56d3c40331af7ed: em,
      __wbg_bindBuffer_e95efaf0d4851845: rm,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: nm,
      __wbg_bindRenderbuffer_d608b211c51ed147: cm,
      __wbg_bindTexture_ffc56f1e5c5526c6: im,
      __wbg_blendColor_a0ba1cdcecc3a34c: gm,
      __wbg_blendEquation_8bfa69f639ae92da: mm,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: wm,
      __wbg_blendFunc_713c504adab14f98: xm,
      __wbg_blendFuncSeparate_3eef699c291dbc87: hm,
      __wbg_disable_4dca6ee0ccc91e4a: f6,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: s6,
      __wbg_drawArrays_10e1254aa4524ae9: l6,
      __wbg_enable_c6e523307311617a: I6,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: A6,
      __wbg_flush_eb3fb8da2ec00d57: G6,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: z6,
      __wbg_linkProgram_6a2eee02a03b9b00: o5,
      __wbg_pixelStorei_55ad4c67b699537c: b9,
      __wbg_polygonOffset_06dc6468c12a57e1: i9,
      __wbg_renderbufferStorage_2918fb696fd45663: D9,
      __wbg_scissor_f9696c630e464977: L9,
      __wbg_shaderSource_628c37a476ae65f9: t$,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: d$,
      __wbg_stencilMask_f9fe198f7fd6fc9c: m$,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: p$,
      __wbg_stencilOpSeparate_6cf50803475d2640: y$,
      __wbg_texParameteri_fe6210a493d48a16: T$,
      __wbg_framebufferTexture2D_3a558e14f56720d2: H6,
      __wbg_frontFace_c9bb1fa659ffd276: J6,
      __wbg_getParameter_91a344e1a84a4669: b8,
      __wbg_getProgramInfoLog_35410850de9ccefe: i8,
      __wbg_getProgramParameter_bbc667347ac2e882: d8,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: w8,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: m8,
      __wbg_getUniformLocation_340155dc706d3fea: v8,
      __wbg_uniform1f_d34e4b454f7c8e73: Q$,
      __wbg_uniform1i_cd9a7f990128ea48: X$,
      __wbg_uniform4f_4410d2faaa7e5dda: iv,
      __wbg_useProgram_0e1cd86765304939: Pv,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: Ev,
      __wbg_viewport_b5bd46a0d111c83c: Gv,
      __wbg_texSubImage2D_1b2ff28f994c325e: P$,
      __wbg_uniform2fv_39277cf2d3cb83c7: _v,
      __wbg_bufferData_5df9bdb32e189eee: Am,
      __wbg_bufferData_26132561617ce8fb: Sm,
      __wbg_bufferSubData_44db8a3b4a70b57d: Fm,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: Jm,
      __wbg_readPixels_05377f8b6fa1d8eb: v9,
      __wbg_texImage2D_7bc3001cb8602ed2: S$,
      __wbg_navigator_017bc45e84c473cc: W5,
      __wbg_log_d282446d03691e72: b5,
      __wbg_info_a392cd5b7536cfb5: E8,
      __wbg_warn_88c4a5bd9a322000: Wv,
      __wbg_debug_7271beced8b71cd4: V7,
      __wbg_error_933f449d72fef598: k6,
      __wbg_error_50f60c611a3dcf64: P6,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: fm,
      __wbg_width_08e66520b99071f4: zv,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: B7,
      __wbg_height_e9afb506f31052a9: M8,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: Y7,
      __wbg_queryCounterEXT_ebb00bcc96221671: w9,
      __wbg_aborted_4d4114700dc4c251: U4,
      __wbg_addEventListener_ea90bc131475777e: j4,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: K6,
      __wbg_set_width_f9e631f4ee129e5c: Xx,
      __wbg_set_height_ef298446b359b0c5: gy,
      __wbg_getContext_70c2d1bed75d4122: e8,
      __wbg_getContext_422b32d0ee4b8076: Y6,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: p6,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: x6,
      __wbg_arrayBuffer_ff96d08b7b6be32e: N4,
      __wbg_get_37b48b8fa52d1f2c: I8,
      __wbg_status_0053aa6239760447: u$,
      __wbg_ok_c962da6f1a034d81: a9,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: Cv,
      __wbg_statusText_0f412961834ccfe9: f$,
      __wbg_instanceof_Response_79948c98d1d2ba75: q8,
      __wbg_set_signal_4a69430cb12800f3: ux,
      __wbg_new_1e52e3c919312525: U5,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: h6,
      __wbg_observe_592b94857eed8e27: _9,
      __wbg_altKey_7412dd64f8c921c7: K4,
      __wbg_ctrlKey_00097886a21597a7: M7,
      __wbg_shiftKey_273ee8c901267b55: n$,
      __wbg_metaKey_1c2847b62ad062c1: L5,
      __wbg_repeat_46a5c90df9f6ef0b: F9,
      __wbg_isComposing_e3709163a95a2477: Q8,
      __wbg_key_d6b3d2cce3d41872: e5,
      __wbg_code_87bb99fdec02d313: qm,
      __wbg_now_0f628e0e435c541b: e9,
      __wbg_offsetX_0214819d43aaf6d5: r9,
      __wbg_offsetY_f18f571e33b385ab: n9,
      __wbg_button_bb3285fcdf965178: Bm,
      __wbg_signal_4d9d567be73ea52c: a$,
      __wbg_new_51233fa2a760b272: K5,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: y8,
      __wbg_abort_6e6ea7d259504afc: z4,
      __wbg_preventDefault_c047d3e292b08cc4: u9,
      __wbg_contentRect_0fb8c8900d689a0c: _7,
      __wbg_width_a86bcd32bd998060: Uv,
      __wbg_height_cd732bbdc7b66e49: k8,
      __wbg_set_width_031bdecd763c5855: Jx,
      __wbg_set_height_ad5056ea051acd78: uy,
      __wbg_getContext_486aab500e1c34c9: Z6,
      __wbg_getContext_9fd4db9b1cf155db: _8,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: W8,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: U8,
      __wbg_resolve_d82363d90af6928a: C9,
      __wbg_then_591b6b3a75ee817a: N$,
      __wbg_iterator_cc47ba25a2be735a: Z8,
      __wbg_get_9a29be2cb383ed9a: D8,
      __wbg_next_402fa10b59ab20c3: Z5,
      __wbg_new_2e117a478906f062: H5,
      __wbg_new_36e147a8ced3c6e0: j5,
      __wbg_of_62183ea089c00bfa: t9,
      __wbg_isArray_145a34fd0a38d37b: J8,
      __wbg_new_e66a4b7758dd2e5c: J5,
      __wbg_isSafeInteger_a3389a198582f5f6: X8,
      __wbg_is_de5b366c746e004c: Y8,
      __wbg_entries_c261c3fa1f281256: B6,
      __wbg_then_2a84678a50976959: K$,
      __wbg_length_589238bdcf171f0e: t5,
      __wbg_prototypesetcall_d721637c7ca66eb8: g9,
      __wbg_set_272b80acaf9a75e8: N9,
      __wbg_new_81880fb5002cb255: N5,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: X5,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: c$,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: s$,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: b$,
      __wbg_static_accessor_WINDOW_168f178805d978fe: i$,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: L8,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: H8,
      __wbg_queueMicrotask_1c9b3800e321a967: h9,
      __wbg_queueMicrotask_311744e534a929a3: y9,
      __wbg_set_4564f7dc44fcb0c9: J9,
      __wbg___wbindgen_number_get_1cc01dd708740256: L4,
      __wbg___wbindgen_in_4990f46af709e33c: F4,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: G4,
      __wbg___wbindgen_is_null_6d937fbfb6478470: k4,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: V4,
      __wbg_Number_c4bdf66bb78f7977: $4,
      __wbg_Error_fdd633d4bb5dd76a: x4,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: B4,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: M4,
      __wbg___wbindgen_is_string_1fca8072260dd261: C4,
      __wbg___wbindgen_string_get_71bb4348194e31f0: O4,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: D4,
      __wbg___wbindgen_is_function_acc5528be2b923f2: P4,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: R4,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: E4,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: I4,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: W4,
      __wbg___wbindgen_debug_string_8a447059637473e2: T4,
      __wbindgen_init_externref_table: fS,
      __wbindgen_cast_0000000000000001: jv,
      __wbindgen_cast_0000000000000002: Kv,
      __wbindgen_cast_0000000000000003: Nv,
      __wbindgen_cast_0000000000000004: Jv,
      __wbindgen_cast_0000000000000005: Qv,
      __wbindgen_cast_0000000000000006: Xv,
      __wbindgen_cast_0000000000000007: Yv,
      __wbindgen_cast_0000000000000008: Zv,
      __wbindgen_cast_0000000000000009: eS,
      __wbindgen_cast_000000000000000a: _S,
      __wbindgen_cast_000000000000000b: tS,
      __wbindgen_cast_000000000000000c: rS,
      __wbindgen_cast_000000000000000d: nS,
      __wbindgen_cast_000000000000000e: aS,
      __wbindgen_cast_000000000000000f: oS,
      __wbindgen_cast_0000000000000010: cS,
      __wbindgen_cast_0000000000000011: bS,
      __wbindgen_cast_0000000000000012: sS,
      __wbindgen_cast_0000000000000013: iS
    }
  }, p4), { memory: JS, clear: QS, on_frame: XS, show: YS, start: ZS, stop_frames: eA, mount: _A, __wbg_proteusapp_free: tA, proteusapp_addChild: rA, proteusapp_animateTo: nA, proteusapp_bakeTexture: aA, proteusapp_bakedImageSize: oA, proteusapp_bakedTextSize: cA, proteusapp_bindKey: bA, proteusapp_channelDestroy: sA, proteusapp_channelSet: iA, proteusapp_clearFocus: fA, proteusapp_component: uA, proteusapp_copyBakedImageFrom: dA, proteusapp_createVideo: gA, proteusapp_cropImage: pA, proteusapp_declareGeometry: wA, proteusapp_declaredGeometry: lA, proteusapp_destroy: mA, proteusapp_devices: hA, proteusapp_focus: yA, proteusapp_focused: xA, proteusapp_freeResources: $A, proteusapp_get: vA, proteusapp_hideVideo: SA, proteusapp_inputDevices: AA, proteusapp_isFocused: IA, proteusapp_loadTexture: DA, proteusapp_mergeFrom: TA, proteusapp_mergeFromWithBehavior: FA, proteusapp_new: BA, proteusapp_onAppKey: PA, proteusapp_onBlur: kA, proteusapp_onClick: MA, proteusapp_onDrag: CA, proteusapp_onDropped: RA, proteusapp_onFocus: VA, proteusapp_onFocusLost: EA, proteusapp_onHoverEnter: LA, proteusapp_onHoverExit: OA, proteusapp_onKey: GA, proteusapp_onPress: WA, proteusapp_onRelease: zA, proteusapp_onTransitionComplete: UA, proteusapp_pointerLeft: qA, proteusapp_pointerMoved: HA, proteusapp_pointerPressed: jA, proteusapp_pointerReleased: KA, proteusapp_releaseVideo: NA, proteusapp_removeChild: JA, proteusapp_resetKeyMap: QA, proteusapp_setDeclaredGeometry: XA, proteusapp_setDefaultFocus: YA, proteusapp_setDevices: ZA, proteusapp_setDisabled: eI, proteusapp_setImage: _I, proteusapp_setInputDevices: tI, proteusapp_setInteractive: rI, proteusapp_setOpacity: nI, proteusapp_setText: aI, proteusapp_setTexture: oI, proteusapp_setTransitionInteraction: cI, proteusapp_setVideoCrossfade: bI, proteusapp_setVisible: sI, proteusapp_showVideo: iI, proteusapp_splitTo: fI, proteusapp_splitToWithBehavior: uI, proteusapp_splitToWithStates: dI, proteusapp_texture: gI, proteusapp_textureState: pI, proteusapp_tick: wI, proteusapp_transitionChannel: lI, proteusapp_unbindKey: mI, proteusapp_uploadVideoFrame: hI, __wbg_handle_free: yI, __wbg_texturehandle_free: xI, __wbg_transitionchannel_free: $I, __wbg_videohandle_free: vI, handle_fromId: SI, handle_id: AI, texturehandle_fromId: II, texturehandle_id: DI, __abort_handler: TI, __instance_terminated: FI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: BI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: PI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: kI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: MI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: CI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: RI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: VI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: EI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: LI, __wbindgen_malloc: OI, __wbindgen_realloc: GI, __wbindgen_exn_store: WI, __externref_table_alloc: zI, __wbindgen_externrefs: UI, __wbindgen_free: qI, __wbindgen_destroy_closure: HI, __externref_table_dealloc: jI, __wbindgen_start: jt } = NS, KI = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: TI,
    __externref_table_alloc: zI,
    __externref_table_dealloc: jI,
    __instance_terminated: FI,
    __wbg_handle_free: yI,
    __wbg_proteusapp_free: tA,
    __wbg_texturehandle_free: xI,
    __wbg_transitionchannel_free: $I,
    __wbg_videohandle_free: vI,
    __wbindgen_destroy_closure: HI,
    __wbindgen_exn_store: WI,
    __wbindgen_externrefs: UI,
    __wbindgen_free: qI,
    __wbindgen_malloc: OI,
    __wbindgen_realloc: GI,
    __wbindgen_start: jt,
    clear: QS,
    handle_fromId: SI,
    handle_id: AI,
    memory: JS,
    mount: _A,
    on_frame: XS,
    proteusapp_addChild: rA,
    proteusapp_animateTo: nA,
    proteusapp_bakeTexture: aA,
    proteusapp_bakedImageSize: oA,
    proteusapp_bakedTextSize: cA,
    proteusapp_bindKey: bA,
    proteusapp_channelDestroy: sA,
    proteusapp_channelSet: iA,
    proteusapp_clearFocus: fA,
    proteusapp_component: uA,
    proteusapp_copyBakedImageFrom: dA,
    proteusapp_createVideo: gA,
    proteusapp_cropImage: pA,
    proteusapp_declareGeometry: wA,
    proteusapp_declaredGeometry: lA,
    proteusapp_destroy: mA,
    proteusapp_devices: hA,
    proteusapp_focus: yA,
    proteusapp_focused: xA,
    proteusapp_freeResources: $A,
    proteusapp_get: vA,
    proteusapp_hideVideo: SA,
    proteusapp_inputDevices: AA,
    proteusapp_isFocused: IA,
    proteusapp_loadTexture: DA,
    proteusapp_mergeFrom: TA,
    proteusapp_mergeFromWithBehavior: FA,
    proteusapp_new: BA,
    proteusapp_onAppKey: PA,
    proteusapp_onBlur: kA,
    proteusapp_onClick: MA,
    proteusapp_onDrag: CA,
    proteusapp_onDropped: RA,
    proteusapp_onFocus: VA,
    proteusapp_onFocusLost: EA,
    proteusapp_onHoverEnter: LA,
    proteusapp_onHoverExit: OA,
    proteusapp_onKey: GA,
    proteusapp_onPress: WA,
    proteusapp_onRelease: zA,
    proteusapp_onTransitionComplete: UA,
    proteusapp_pointerLeft: qA,
    proteusapp_pointerMoved: HA,
    proteusapp_pointerPressed: jA,
    proteusapp_pointerReleased: KA,
    proteusapp_releaseVideo: NA,
    proteusapp_removeChild: JA,
    proteusapp_resetKeyMap: QA,
    proteusapp_setDeclaredGeometry: XA,
    proteusapp_setDefaultFocus: YA,
    proteusapp_setDevices: ZA,
    proteusapp_setDisabled: eI,
    proteusapp_setImage: _I,
    proteusapp_setInputDevices: tI,
    proteusapp_setInteractive: rI,
    proteusapp_setOpacity: nI,
    proteusapp_setText: aI,
    proteusapp_setTexture: oI,
    proteusapp_setTransitionInteraction: cI,
    proteusapp_setVideoCrossfade: bI,
    proteusapp_setVisible: sI,
    proteusapp_showVideo: iI,
    proteusapp_splitTo: fI,
    proteusapp_splitToWithBehavior: uI,
    proteusapp_splitToWithStates: dI,
    proteusapp_texture: gI,
    proteusapp_textureState: pI,
    proteusapp_tick: wI,
    proteusapp_transitionChannel: lI,
    proteusapp_unbindKey: mI,
    proteusapp_uploadVideoFrame: hI,
    show: YS,
    start: ZS,
    stop_frames: eA,
    texturehandle_fromId: II,
    texturehandle_id: DI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: LI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: BI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: CI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: RI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: VI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: EI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: kI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: MI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: PI
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  KS(KI);
  jt();
  const te = 1280, re = 800, H = {
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
    const { min: t, max: r } = H[_], n = new Te();
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
  const NI = `#version 300 es
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
}`, JI = `#version 300 es
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
}`, QI = `#version 300 es
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
    if (_.attachShader(r, t(_.VERTEX_SHADER, e)), _.attachShader(r, t(_.FRAGMENT_SHADER, NI)), _.linkProgram(r), !_.getProgramParameter(r, _.LINK_STATUS)) throw new Error(_.getProgramInfoLog(r) ?? "program failed to link");
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
  function XI(_) {
    return (e, t, r) => {
      const n = Kt(_, JI), a = Nt(_), o = _.createVertexArray();
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
  function YI(_) {
    return (e, t, r) => {
      const n = Kt(_, QI), a = Nt(_), o = _.createVertexArray();
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
  function ZI(_) {
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
  const R_ = 500;
  function eD(_) {
    return _ < 0.5 ? 2 * _ * _ : 1 - (-2 * _ + 2) ** 2 / 2;
  }
  const _D = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
  class nt {
    constructor(e) {
      this.random = new Te(), this.movedAt = -1 / 0, this.current = new Float32Array(e.flatMap((t) => [
        t.x,
        t.y
      ])), this.from = this.current.slice(), this.to = this.current.slice();
    }
    retarget(e) {
      if (!(e - this.movedAt < R_)) {
        this.movedAt = e, this.from.set(this.current);
        for (let t = 0; t < this.to.length; t += 2) this.to[t] = this.random.between(0, te), this.to[t + 1] = this.random.between(0, re);
        return this.to;
      }
    }
    advance(e) {
      const t = eD(Math.min(1, (e - this.movedAt) / R_));
      for (let r = 0; r < this.current.length; r++) this.current[r] = this.from[r] + (this.to[r] - this.from[r]) * t;
    }
  }
  function tD(_, e, t) {
    const r = new nt(e), n = document.createDocumentFragment(), a = e.map((o, c) => {
      const b = document.createElement("div"), f = b.style;
      return f.position = "absolute", f.left = "0", f.top = "0", f.width = `${o.width}px`, f.height = `${o.height}px`, f.borderRadius = `${t}px`, f.background = `rgb(${Math.round(o.r * 255)} ${Math.round(o.g * 255)} ${Math.round(o.b * 255)})`, f.transform = It(r.current[c * 2], r.current[c * 2 + 1], o), f.transition = `transform ${R_}ms ${_D}`, n.append(b), b;
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
  const rD = [
    100,
    1e3,
    5e3,
    1e4,
    25e3,
    5e4,
    1e5
  ], nD = 60, aD = 2e3, V_ = 1e5, Dt = 100, at = `proteus-bench:${location.pathname}`, oD = 300, cD = 15e3, o_ = document.getElementById("status"), Qt = document.getElementById("results"), he = document.getElementById("run"), b_ = document.getElementById("reset"), ye = {
    proteus: document.getElementById("proteus"),
    proteusRust: document.getElementById("proteus-rust"),
    webgl: document.getElementById("webgl"),
    canvas2d: document.getElementById("canvas2d"),
    css: document.getElementById("css")
  }, Xt = new URLSearchParams(location.search), Ie = ((_a2 = Xt.get("counts")) == null ? void 0 : _a2.split(",").map(Number).filter((_) => _ > 0)) ?? rD, ot = (((_b2 = Xt.get("scenes")) == null ? void 0 : _b2.split(",")) ?? [
    "small",
    "large",
    "moving"
  ]).filter((_) => _ in H);
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
  function bD(_) {
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
        if (r += 1, r === 1 && (o = f), !c && (r >= nD || f - o > aD)) {
          c = true, a = f, n = f;
          return;
        }
        c && t.push(f - n), n = f, c && (t.length >= oD || f - a > cD) && (b(), e(bD(t)));
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
  let er, E_;
  await f4("proteus", {
    setup(_) {
      er = _;
    },
    update() {
      E_ == null ? void 0 : E_(performance.now());
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
  await h4("proteus-rust", Zt);
  async function sD(_, e) {
    m4(_, e);
    const t = await ke((r) => (l4(r), () => y4()));
    return w4(), t;
  }
  async function iD(_, e) {
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
      cornerRadius: H[_].radius
    }), a = r.map((b, f) => t.component({
      geometry: n(b.x, b.y, f)
    })), o = _ === "moving" ? new nt(r) : void 0, c = await ke((b) => (E_ = (f) => {
      const d = o == null ? void 0 : o.retarget(f);
      d && a.forEach((I, N) => I.animateTo(n(d[N * 2], d[N * 2 + 1], N), {
        duration: 0.5,
        easing: "easeInOutQuad"
      })), b(f);
    }, () => {
      E_ = void 0;
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
    const r = rt(e, t), n = new nt(r), a = _(r, n.current, H[e].radius), o = await ke(ct((c) => {
      e === "moving" && (n.retarget(c), n.advance(c)), a.draw();
    }));
    return a.dispose(), o;
  }
  async function fD(_) {
    const e = tD(ye.css, rt("moving", _), H.moving.radius), t = await ke(ct((r) => e.frame(r)));
    return e.dispose(), t;
  }
  function Tt(_) {
    for (const [e, t] of Object.entries(ye)) t.style.visibility = e === _ ? "visible" : "hidden";
  }
  const x_ = {
    title: "Proteus (TypeScript)",
    surface: "proteus",
    time: iD
  }, $_ = {
    title: "Proteus (Rust)",
    surface: "proteusRust",
    time: sD
  }, uD = {
    title: "CSS",
    surface: "css",
    time: (_, e) => fD(e)
  }, v_ = {
    title: "Canvas 2D",
    surface: "canvas2d",
    time: (_, e) => bt(ZI(_r), _, e)
  }, S_ = {
    title: "Naive WebGL2",
    surface: "webgl",
    time: (_, e) => bt(XI(pe), _, e)
  }, A_ = {
    title: "Batched WebGL2",
    surface: "webgl",
    time: (_, e) => bt(YI(pe), _, e)
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
      uD,
      v_,
      S_,
      A_
    ]
  }, L_ = {
    small: 1 / 0,
    large: V_,
    moving: 1 / 0
  }, dD = {
    small: `Small components (${H.small.min}\u2013${H.small.max} px), still: the cost per component`,
    large: `Large components (${H.large.min}\u2013${H.large.max} px), still: filling pixels dominates`,
    moving: `Moving components (${H.moving.min}\u2013${H.moving.max} px): every one always moving`
  };
  function gD(_) {
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
  function pD() {
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
  const V = pD();
  if (V.running) {
    const [_, e, t] = V.running.split("|");
    V.cells[V.running] = "crashed | \u2014", V.dropped[`${_}|${t}`] = `crashed at ${e}`, V.running = void 0, c_();
  }
  const wD = (_) => `${_.median.toFixed(2)} | ${_.p99.toFixed(2)}`;
  function rr(_) {
    return Ie.filter((e) => e <= L_[_]).flatMap((e) => tr[_].map((t) => [
      e,
      t
    ])).filter(([e, t]) => V.cells[`${_}|${e}|${t.title}`] === void 0);
  }
  async function lD() {
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
        V.cells[r] = wD(a), a.median >= Dt && (V.dropped[`${_}|${t.title}`] = `slower than ${Dt} ms a frame at ${e}`);
      } catch (a) {
        console.error(a), V.cells[r] = "failed | \u2014", V.dropped[`${_}|${t.title}`] = `failed at ${e}: ${String(a)}`;
      }
      V.running = void 0, c_(), Qt.textContent = nr();
    }
    o_.textContent = "Done. Copy the results below.", he.textContent = "Run", he.disabled = false, b_.disabled = false;
  }
  function nr() {
    const _ = [
      gD(V.refresh ?? 0)
    ];
    for (const e of ot) {
      const t = tr[e].map((a) => a.title), r = Ie.filter((a) => a <= L_[e]).map((a) => t.map((o) => V.cells[`${e}|${a}|${o}`])).map((a, o) => ({
        count: Ie.filter((c) => c <= L_[e])[o],
        cells: a
      })).filter(({ cells: a }) => a.some((o) => o !== void 0));
      if (r.length === 0) continue;
      _.push("", `### ${dD[e]}`, "", "Frame interval, median and p99, in milliseconds:", "", `| Components | ${t.map((a) => `${a} | p99`).join(" | ")} |`, `|---:|${t.map(() => "---:|---:").join("|")}|`, ...r.map(({ count: a, cells: o }) => `| ${a} | ${o.map((c) => c ?? "\u2026 | \u2026").join(" | ")} |`));
      const n = t.map((a) => [
        a,
        V.dropped[`${e}|${a}`]
      ]).filter(([, a]) => a).map(([a, o]) => `- ${a}: ${o}; skipped after that.`);
      n.length > 0 && _.push("", ...n), e === "large" && Ie.some((a) => a > V_) && _.push("", `The large scene stops at ${V_}: past it, Safari's tab crashes.`);
    }
    return _.join(`
`);
  }
  he.addEventListener("click", () => void lD());
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
