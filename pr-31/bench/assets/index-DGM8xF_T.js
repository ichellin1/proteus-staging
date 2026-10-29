(async () => {
  var _a2, _b2;
  (function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
    new MutationObserver((n) => {
      for (const a of n) if (a.type === "childList") for (const c of a.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && r(c);
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
  const ar = "" + new URL("proteus_sdk_web_bg-DDI9pVw6.wasm", import.meta.url).href, O_ = async (_ = {}, e) => {
    let t;
    if (e.startsWith("data:")) {
      const r = e.replace(/^data:.*?base64,/, "");
      let n;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") n = Buffer.from(r, "base64");
      else if (typeof atob == "function") {
        const a = atob(r);
        n = new Uint8Array(a.length);
        for (let c = 0; c < a.length; c++) n[c] = a.charCodeAt(c);
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
  let x = class I_ {
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
  Symbol.dispose && (x.prototype[Symbol.dispose] = x.prototype.free);
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
      p(e, x), p(t, x);
      const r = u.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw F(r[0]);
    }
    animateTo(e, t, r) {
      p(e, x);
      const n = u.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw F(n[0]);
    }
    bakeTexture(e, t, r, n) {
      const a = u_(r, u.__wbindgen_malloc), c = O, o = u.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, c, n);
      return K.__wrap(o);
    }
    bakedImageSize(e) {
      return p(e, x), u.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return p(e, x), u.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    channelDestroy(e) {
      p(e, fe);
      var t = e.__destroy_into_raw();
      u.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      p(e, fe), p(t, x), p(r, x);
      const c = u.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (c[1]) throw F(c[0]);
    }
    clearFocus() {
      u.proteusapp_clearFocus(this.__wbg_ptr);
    }
    component(e) {
      const t = u.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw F(t[1]);
      return x.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      p(e, x), p(t, x);
      const r = u.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = u.proteusapp_createVideo(this.__wbg_ptr);
      return ue.__wrap(e);
    }
    cropImage(e, t) {
      p(e, x);
      const r = u.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      p(e, x);
      const r = u.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    declaredGeometry(e) {
      return p(e, x), u.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      p(e, x);
      var t = e.__destroy_into_raw();
      const r = u.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    devices(e) {
      return p(e, x), u.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    focus(e) {
      p(e, x);
      const t = u.proteusapp_focus(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
    }
    focused() {
      const e = u.proteusapp_focused(this.__wbg_ptr);
      return e === 0 ? void 0 : x.__wrap(e);
    }
    freeResources(e) {
      p(e, x);
      const t = u.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
    }
    get(e) {
      return p(e, x), u.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      p(e, x);
      const t = u.proteusapp_hideVideo(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
    }
    inputDevices() {
      return u.proteusapp_inputDevices(this.__wbg_ptr);
    }
    isFocused(e) {
      return p(e, x), u.proteusapp_isFocused(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    loadTexture(e, t) {
      const r = u_(e, u.__wbindgen_malloc), n = O, a = u.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : K.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      p(e, x);
      const a = Re(t, u.__wbindgen_malloc), c = O, o = u.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, c, r, n);
      if (o[1]) throw F(o[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      p(e, x);
      const c = Re(t, u.__wbindgen_malloc), o = O, b = u.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, c, o, r, n, a);
      if (b[1]) throw F(b[0]);
    }
    constructor() {
      const e = u.proteusapp_new();
      return this.__wbg_ptr = e, ft.register(this, this.__wbg_ptr, this), this;
    }
    onBlur(e, t) {
      p(e, x), u.proteusapp_onBlur(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onClick(e, t) {
      p(e, x), u.proteusapp_onClick(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDrag(e, t) {
      p(e, x), u.proteusapp_onDrag(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDropped(e, t) {
      p(e, fe), u.proteusapp_onDropped(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocus(e, t) {
      p(e, x), u.proteusapp_onFocus(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocusLost(e) {
      u.proteusapp_onFocusLost(this.__wbg_ptr, e);
    }
    onHoverEnter(e, t) {
      p(e, x), u.proteusapp_onHoverEnter(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverExit(e, t) {
      p(e, x), u.proteusapp_onHoverExit(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onPress(e, t) {
      p(e, x), u.proteusapp_onPress(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onRelease(e, t) {
      p(e, x), u.proteusapp_onRelease(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onTransitionComplete(e, t) {
      p(e, x), u.proteusapp_onTransitionComplete(this.__wbg_ptr, e.__wbg_ptr, t);
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
      p(e, ue), u.proteusapp_releaseVideo(this.__wbg_ptr, e.__wbg_ptr);
    }
    removeChild(e, t) {
      p(e, x), p(t, x);
      const r = u.proteusapp_removeChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw F(r[0]);
    }
    setDeclaredGeometry(e, t) {
      p(e, x);
      const r = u.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDefaultFocus(e, t) {
      p(e, x);
      const r = u.proteusapp_setDefaultFocus(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDevices(e, t) {
      p(e, x);
      const r = u.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDisabled(e, t) {
      p(e, x);
      const r = u.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setImage(e, t) {
      p(e, x);
      const r = u.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setInputDevices(e) {
      const t = u.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw F(t[0]);
    }
    setInteractive(e, t) {
      p(e, x);
      const r = u.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setOpacity(e, t) {
      p(e, x);
      const r = u.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setText(e, t) {
      p(e, x);
      const r = u.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setTexture(e, t) {
      p(e, x), p(t, K);
      const r = u.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      p(e, x);
      const r = u.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setVideoCrossfade(e, t) {
      p(e, x);
      const r = u.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      p(e, x);
      const r = u.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    showVideo(e, t) {
      p(e, x), p(t, ue);
      const r = u.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      p(e, x);
      const a = Re(t, u.__wbindgen_malloc), c = O, o = u.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, c, r, n);
      if (o[1]) throw F(o[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      p(e, x);
      const c = Re(t, u.__wbindgen_malloc), o = O, b = u.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, c, o, r, n, a);
      if (b[1]) throw F(b[0]);
    }
    splitToWithStates(e, t, r, n) {
      p(e, x);
      const a = u.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw F(a[0]);
    }
    texture(e) {
      const t = u.proteusapp_texture(this.__wbg_ptr, e);
      return K.__wrap(t);
    }
    textureState(e) {
      return p(e, K), u.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
    }
    tick(e) {
      u.proteusapp_tick(this.__wbg_ptr, e);
    }
    transitionChannel(e) {
      const t = u.proteusapp_transitionChannel(this.__wbg_ptr, !q(e), q(e) ? 0 : e);
      return fe.__wrap(t);
    }
    uploadVideoFrame(e, t, r, n) {
      p(e, ue);
      const a = u_(n, u.__wbindgen_malloc), c = O;
      return u.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, c) !== 0;
    }
  };
  Symbol.dispose && (D_.prototype[Symbol.dispose] = D_.prototype.free);
  let K = class T_ {
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
  Symbol.dispose && (K.prototype[Symbol.dispose] = K.prototype.free);
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
  function cr(_, e) {
    return Error(N(_, e));
  }
  function or(_) {
    return Number(_);
  }
  function br(_, e) {
    const t = String(e), r = b_(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = O;
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
    const t = F_(e), r = b_(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = O;
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
  function wr(_) {
    return _ === null;
  }
  function pr(_) {
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
  function xr(_, e) {
    return _ == e;
  }
  function yr(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    U().setFloat64(_ + 8, q(r) ? 0 : r, true), U().setInt32(_ + 0, !q(r), true);
  }
  function $r(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = q(r) ? 0 : b_(r, u.__wbindgen_malloc, u.__wbindgen_realloc), a = O;
    U().setInt32(_ + 4, a, true), U().setInt32(_ + 0, n, true);
  }
  function vr(_, e) {
    throw new Error(N(_, e));
  }
  function Sr(_) {
    _._wbg_cb_unref();
  }
  function Ar() {
    return W(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Ir() {
    return W(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function Dr() {
    return W(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Tr() {
    return W(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function Fr() {
    return W(function(_, e, t, r) {
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
    return W(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function Cr() {
    return W(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function Mr(_) {
    _.destroy();
  }
  function Vr(_) {
    return _.done;
  }
  function Rr(_, e, t, r, n, a) {
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
    return W(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function zr(_, e) {
    return _[e >>> 0];
  }
  function Ur() {
    return W(function(_, e) {
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
  function Nr(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function Jr(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function Kr(_) {
    return Array.isArray(_);
  }
  function Qr(_) {
    return Number.isSafeInteger(_);
  }
  function Xr() {
    return Symbol.iterator;
  }
  function Yr(_, e) {
    const t = e.label, r = b_(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = O;
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
    return new Error(N(_, e));
  }
  function cn(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function on() {
    return W(function(_) {
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
  function wn(_) {
    return Promise.resolve(_);
  }
  function pn() {
    return W(function(_, e, t, r, n, a, c) {
      _.setBindGroup(e >>> 0, t, cc(r, n), a, c >>> 0);
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
  function xn(_, e) {
    _.setPipeline(e);
  }
  function yn(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function $n(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function vn(_, e, t, r, n, a, c) {
    _.setViewport(e, t, r, n, a, c);
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
  function Cn(_, e) {
    _.binding = e >>> 0;
  }
  function Mn(_, e) {
    _.buffer = e;
  }
  function Vn(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function Rn(_, e) {
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
    _.dimension = ac[e];
  }
  function jn(_, e) {
    _.dimension = nc[e];
  }
  function Nn(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function Jn(_, e) {
    _.entries = e;
  }
  function Kn(_, e) {
    _.format = Ct[e];
  }
  function Qn(_, e) {
    _.format = Ct[e];
  }
  function Xn(_, e) {
    _.g = e;
  }
  function Yn(_, e) {
    _.height = e >>> 0;
  }
  function Zn(_, e, t) {
    _.label = N(e, t);
  }
  function ea(_, e, t) {
    _.label = N(e, t);
  }
  function _a(_, e, t) {
    _.label = N(e, t);
  }
  function ta(_, e, t) {
    _.label = N(e, t);
  }
  function ra(_, e, t) {
    _.label = N(e, t);
  }
  function na(_, e, t) {
    _.label = N(e, t);
  }
  function aa(_, e) {
    _.layout = e;
  }
  function ca(_, e) {
    _.loadOp = G_[e];
  }
  function oa(_, e) {
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
  function wa(_, e) {
    _.resolveTarget = e;
  }
  function pa(_, e) {
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
  function xa(_, e) {
    _.size = e;
  }
  function ya(_, e) {
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
  function Ca(_, e) {
    _.width = e >>> 0;
  }
  function Ma(_, e) {
    _.x = e >>> 0;
  }
  function Va(_, e) {
    _.y = e >>> 0;
  }
  function Ra(_, e) {
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
  function Na() {
    return W(function(_, e, t, r, n, a, c) {
      _.writeBuffer(e, t, z_(r, n), a, c);
    }, arguments);
  }
  function Ja() {
    return W(function(_, e, t, r, n, a) {
      _.writeTexture(e, z_(t, r), n, a);
    }, arguments);
  }
  function Ka(_, e) {
    return Mt(_, e, tc);
  }
  function Qa(_, e) {
    return Mt(_, e, rc);
  }
  function Xa(_) {
    return _;
  }
  function Ya(_) {
    return _;
  }
  function Za(_, e) {
    return N(_, e);
  }
  function ec(_) {
    return BigInt.asUintN(64, _);
  }
  function _c() {
    const _ = u.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function tc(_, e, t) {
    u.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function rc(_, e, t) {
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
  ], nc = [
    "1d",
    "2d",
    "3d"
  ], Ct = [
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
  ], ac = [
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
  function p(_, e) {
    if (!(_ instanceof e)) throw new Error(`expected instance of ${e.name}`);
  }
  const wt = typeof FinalizationRegistry > "u" ? {
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
      for (let c = 1; c < n; c++) a += ", " + F_(_[c]);
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
  function cc(_, e) {
    return _ = _ >>> 0, bc().subarray(_ / 4, _ / 4 + e);
  }
  function z_(_, e) {
    return _ = _ >>> 0, pe().subarray(_ / 1, _ / 1 + e);
  }
  let be = null;
  function U() {
    return (be === null || be.buffer.detached === true || be.buffer.detached === void 0 && be.buffer !== u.memory.buffer) && (be = new DataView(u.memory.buffer)), be;
  }
  let Ce = null;
  function oc() {
    return (Ce === null || Ce.byteLength === 0) && (Ce = new Float64Array(u.memory.buffer)), Ce;
  }
  function N(_, e) {
    return ic(_ >>> 0, e);
  }
  let Me = null;
  function bc() {
    return (Me === null || Me.byteLength === 0) && (Me = new Uint32Array(u.memory.buffer)), Me;
  }
  let Ve = null;
  function pe() {
    return (Ve === null || Ve.byteLength === 0) && (Ve = new Uint8Array(u.memory.buffer)), Ve;
  }
  function W(_, e) {
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
  function Mt(_, e, t) {
    const r = {
      a: _,
      b: e,
      cnt: 1
    }, n = (...a) => {
      r.cnt++;
      const c = r.a;
      r.a = 0;
      try {
        return t(c, r.b, ...a);
      } finally {
        r.a = c, n._wbg_cb_unref();
      }
    };
    return n._wbg_cb_unref = () => {
      --r.cnt === 0 && (u.__wbindgen_destroy_closure(r.a, r.b), r.a = 0, wt.unregister(r));
    }, wt.register(n, r, r), n;
  }
  function u_(_, e) {
    const t = e(_.length * 1, 1) >>> 0;
    return pe().set(_, t / 1), O = _.length, t;
  }
  function Re(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return oc().set(_, t / 8), O = _.length, t;
  }
  function b_(_, e, t) {
    if (t === void 0) {
      const o = ve.encode(_), b = e(o.length, 1) >>> 0;
      return pe().subarray(b, b + o.length).set(o), O = o.length, b;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = pe();
    let c = 0;
    for (; c < r; c++) {
      const o = _.charCodeAt(c);
      if (o > 127) break;
      a[n + c] = o;
    }
    if (c !== r) {
      c !== 0 && (_ = _.slice(c)), n = t(n, r, r = c + _.length * 3, 1) >>> 0;
      const o = pe().subarray(n + c, n + r), b = ve.encodeInto(_, o);
      c += b.written, n = t(n, r, c, 1) >>> 0;
    }
    return O = c, n;
  }
  function F(_) {
    const e = u.__wbindgen_externrefs.get(_);
    return u.__externref_table_dealloc(_), e;
  }
  let t_ = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  t_.decode();
  const sc = 2146435072;
  let d_ = 0;
  function ic(_, e) {
    return d_ += e, d_ >= sc && (t_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), t_.decode(), d_ = e), t_.decode(pe().subarray(_, _ + e));
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
  function fc(_) {
    u = _;
  }
  URL = globalThis.URL;
  const uc = await O_({
    "./proteus_sdk_web_bg.js": {
      __wbg_next_0c4066e251d2eff9: on,
      __wbg_done_b62d4a7d2286852a: Vr,
      __wbg_value_49f783bb59765962: ja,
      __wbg_length_c6054974c0a6cdb9: en,
      __wbg_instanceof_Map_afa18d5840c04c15: Nr,
      __wbg_get_197a3fe98f169e38: zr,
      __wbg_get_unchecked_54a4374c38e08460: qr,
      __wbg_push_f724b5db8acf89d2: un,
      __wbg_call_8e98ed2f3c86c4b5: Tr,
      __wbg_call_5575218572ead796: Dr,
      __wbg_call_0e855b388e315e17: Ir,
      __wbg_set_dc601f4a69da0bc2: Ln,
      __wbg_get_with_ref_key_6412cf3094599694: Hr,
      __wbg_set_6be42768c690e380: Sn,
      __wbg_String_8564e559799eccda: br,
      __wbg_set_texture_16d2be474ce6ad0c: Ia,
      __wbg_set_mip_level_246db61be15bdd69: oa,
      __wbg_set_x_56f0c2c08a62725c: Ma,
      __wbg_set_y_04fb8ce84735b4e1: Va,
      __wbg_set_z_a51316db27a4941e: Ra,
      __wbg_set_origin_9b3b0fbe0a5dc469: ua,
      __wbg_set_aspect_77332ac136ee94eb: Dn,
      __wbg_set_a_5f6e488475272136: An,
      __wbg_set_b_688365d692bba214: Fn,
      __wbg_set_g_d4d1d77cf8fdd362: Xn,
      __wbg_set_r_527e5a41c4b1a846: ga,
      __wbg_set_width_1a5e2e86fa5bdcd8: Ca,
      __wbg_set_height_e8b5483b8c117d5e: Yn,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: Wn,
      __wbg_set_format_e9d4b1475bb3bd3b: Qn,
      __wbg_set_size_a61ff22205255d61: xa,
      __wbg_set_usage_7fa9cd18d1104aca: Fa,
      __wbg_set_label_0c1bd0e976cf0a9a: ea,
      __wbg_set_dimension_36e13ccecae5af4b: jn,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: sa,
      __wbg_set_sample_count_865e1d19b84e27e6: ma,
      __wbg_set_view_formats_bab284fc81b40e70: ka,
      __wbg_createTexture_9e76b80a2dc0d12e: kr,
      __wbg_set_entries_fc76ca4d7da6a709: Jn,
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
      __wbg_set_stencil_clear_value_10b58f674d0177c2: ya,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: $a,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: Sa,
      __wbg_set_stencil_read_only_fb489d191b6d969b: va,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: Un,
      __wbg_set_query_set_18679a8580267d5a: da,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: kn,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: Nn,
      __wbg_set_timestamp_writes_c552d52fbb417005: Da,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: Ar,
      __wbg_copyTextureToTexture_1be188df1e535c0a: Fr,
      __wbg_label_47480289cc2bce71: Yr,
      __wbg_set_label_2d2227f4d5991e50: _a,
      __wbg_finish_cfaeede3baf55be1: Gr,
      __wbg_finish_087cb89c65c06eb1: Or,
      __wbg_drawIndexed_68637ebab6dd8d6e: Rr,
      __wbg_setPipeline_bab24dbce96903b9: xn,
      __wbg_setViewport_f9d423db4f4b4b58: vn,
      __wbg_setBindGroup_4ba56e1e0d26f244: pn,
      __wbg_setBindGroup_6124849cc8547086: ln,
      __wbg_setIndexBuffer_17431786d06c1b7c: mn,
      __wbg_setIndexBuffer_a16ed5b869c87507: hn,
      __wbg_setVertexBuffer_b508baf8d0ffe331: $n,
      __wbg_setVertexBuffer_91c4b602d0289943: yn,
      __wbg_end_414453a89205612c: Er,
      __wbg_writeBuffer_b4bdd36178348ca5: Na,
      __wbg_set_bytes_per_row_91681ca78d744888: Vn,
      __wbg_set_rows_per_image_d198b7e73a38978b: la,
      __wbg_set_offset_a097a8050a3a9a33: fa,
      __wbg_writeTexture_b45b69132e46a227: Ja,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: sn,
      __wbg_submit_1290d44bb76ecef4: Wa,
      __wbg_getMappedRange_5ed22727c9679168: Wr,
      __wbg_unmap_8f06698a75b8331a: Ha,
      __wbg_destroy_b5b39f25f0799295: Mr,
      __wbg_mapAsync_bb0029907dd91181: _n,
      __wbg_set_dimension_174ad7e2fb67fb4e: Hn,
      __wbg_set_format_90860b0321868db4: Kn,
      __wbg_set_aspect_a823a14d00d42d37: Tn,
      __wbg_set_base_array_layer_cc6c68d233489c4b: Bn,
      __wbg_set_array_layer_count_daec613068108a9d: In,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: Pn,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: ba,
      __wbg_set_label_03d2396d4655a3e1: Zn,
      __wbg_set_usage_7f0dda8309469b1c: Ta,
      __wbg_createView_cc96b5bdd3d5bf5e: Cr,
      __wbg_then_05edfc8a4fea5106: za,
      __wbg_set_load_op_56844f51434037bf: ca,
      __wbg_set_store_op_caeede4654b3d847: Aa,
      __wbg_set_view_bdeab150b5f0768c: Ba,
      __wbg_set_clear_value_642701f928a5ccb3: Rn,
      __wbg_set_resolve_target_fe76b3f99cf72078: wa,
      __wbg_set_buffer_55f096330c8912b4: Mn,
      __wbg_set_offset_73156b0e0b41d79a: ia,
      __wbg_set_size_1e6281b07cd39177: ha,
      __wbg_set_binding_f3c188a8cd21455b: Cn,
      __wbg_set_resource_fe385d2e3dadaf63: pa,
      __wbg_resolve_d82363d90af6928a: wn,
      __wbg_then_591b6b3a75ee817a: qa,
      __wbg_iterator_cc47ba25a2be735a: Xr,
      __wbg_get_9a29be2cb383ed9a: Ur,
      __wbg_next_402fa10b59ab20c3: bn,
      __wbg_new_2e117a478906f062: tn,
      __wbg_new_36e147a8ced3c6e0: rn,
      __wbg_isArray_145a34fd0a38d37b: Kr,
      __wbg_new_e66a4b7758dd2e5c: an,
      __wbg_isSafeInteger_a3389a198582f5f6: Qr,
      __wbg_entries_c261c3fa1f281256: Lr,
      __wbg_then_2a84678a50976959: Ua,
      __wbg_length_589238bdcf171f0e: Zr,
      __wbg_prototypesetcall_d721637c7ca66eb8: fn,
      __wbg_new_81880fb5002cb255: nn,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: cn,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: Ea,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: Oa,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: La,
      __wbg_static_accessor_WINDOW_168f178805d978fe: Ga,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: jr,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: Jr,
      __wbg_queueMicrotask_1c9b3800e321a967: dn,
      __wbg_queueMicrotask_311744e534a929a3: gn,
      __wbg___wbindgen_number_get_1cc01dd708740256: yr,
      __wbg___wbindgen_in_4990f46af709e33c: ur,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: vr,
      __wbg___wbindgen_is_null_6d937fbfb6478470: wr,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: hr,
      __wbg_Number_c4bdf66bb78f7977: or,
      __wbg_Error_fdd633d4bb5dd76a: cr,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: dr,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: pr,
      __wbg___wbindgen_is_string_1fca8072260dd261: lr,
      __wbg___wbindgen_string_get_71bb4348194e31f0: $r,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: ir,
      __wbg___wbindgen_is_function_acc5528be2b923f2: gr,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: mr,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: xr,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: sr,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: Sr,
      __wbg___wbindgen_debug_string_8a447059637473e2: fr,
      __wbindgen_init_externref_table: _c,
      __wbindgen_cast_0000000000000001: Ka,
      __wbindgen_cast_0000000000000002: Qa,
      __wbindgen_cast_0000000000000003: Xa,
      __wbindgen_cast_0000000000000004: Ya,
      __wbindgen_cast_0000000000000005: Za,
      __wbindgen_cast_0000000000000006: ec
    }
  }, ar), { memory: dc, __wbg_proteusapp_free: gc, proteusapp_addChild: wc, proteusapp_animateTo: pc, proteusapp_bakeTexture: lc, proteusapp_bakedImageSize: mc, proteusapp_bakedTextSize: hc, proteusapp_channelDestroy: xc, proteusapp_channelSet: yc, proteusapp_clearFocus: $c, proteusapp_component: vc, proteusapp_copyBakedImageFrom: Sc, proteusapp_createVideo: Ac, proteusapp_cropImage: Ic, proteusapp_declareGeometry: Dc, proteusapp_declaredGeometry: Tc, proteusapp_destroy: Fc, proteusapp_devices: Bc, proteusapp_focus: Pc, proteusapp_focused: kc, proteusapp_freeResources: Cc, proteusapp_get: Mc, proteusapp_hideVideo: Vc, proteusapp_inputDevices: Rc, proteusapp_isFocused: Ec, proteusapp_loadTexture: Lc, proteusapp_mergeFrom: Oc, proteusapp_mergeFromWithBehavior: Gc, proteusapp_new: Wc, proteusapp_onBlur: zc, proteusapp_onClick: Uc, proteusapp_onDrag: qc, proteusapp_onDropped: Hc, proteusapp_onFocus: jc, proteusapp_onFocusLost: Nc, proteusapp_onHoverEnter: Jc, proteusapp_onHoverExit: Kc, proteusapp_onPress: Qc, proteusapp_onRelease: Xc, proteusapp_onTransitionComplete: Yc, proteusapp_pointerLeft: Zc, proteusapp_pointerMoved: eo, proteusapp_pointerPressed: _o, proteusapp_pointerReleased: to, proteusapp_releaseVideo: ro, proteusapp_removeChild: no, proteusapp_setDeclaredGeometry: ao, proteusapp_setDefaultFocus: co, proteusapp_setDevices: oo, proteusapp_setDisabled: bo, proteusapp_setImage: so, proteusapp_setInputDevices: io, proteusapp_setInteractive: fo, proteusapp_setOpacity: uo, proteusapp_setText: go, proteusapp_setTexture: wo, proteusapp_setTransitionInteraction: po, proteusapp_setVideoCrossfade: lo, proteusapp_setVisible: mo, proteusapp_showVideo: ho, proteusapp_splitTo: xo, proteusapp_splitToWithBehavior: yo, proteusapp_splitToWithStates: $o, proteusapp_texture: vo, proteusapp_textureState: So, proteusapp_tick: Ao, proteusapp_transitionChannel: Io, proteusapp_uploadVideoFrame: Do, __wbg_handle_free: To, __wbg_texturehandle_free: Fo, __wbg_transitionchannel_free: Bo, __wbg_videohandle_free: Po, handle_fromId: ko, handle_id: Co, texturehandle_fromId: Mo, texturehandle_id: Vo, __abort_handler: Ro, __instance_terminated: Eo, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Lo, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Oo, __wbindgen_malloc: Go, __wbindgen_realloc: Wo, __wbindgen_exn_store: zo, __externref_table_alloc: Uo, __wbindgen_externrefs: qo, __wbindgen_destroy_closure: Ho, __externref_table_dealloc: jo, __wbindgen_start: Vt } = uc, No = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: Ro,
    __externref_table_alloc: Uo,
    __externref_table_dealloc: jo,
    __instance_terminated: Eo,
    __wbg_handle_free: To,
    __wbg_proteusapp_free: gc,
    __wbg_texturehandle_free: Fo,
    __wbg_transitionchannel_free: Bo,
    __wbg_videohandle_free: Po,
    __wbindgen_destroy_closure: Ho,
    __wbindgen_exn_store: zo,
    __wbindgen_externrefs: qo,
    __wbindgen_malloc: Go,
    __wbindgen_realloc: Wo,
    __wbindgen_start: Vt,
    handle_fromId: ko,
    handle_id: Co,
    memory: dc,
    proteusapp_addChild: wc,
    proteusapp_animateTo: pc,
    proteusapp_bakeTexture: lc,
    proteusapp_bakedImageSize: mc,
    proteusapp_bakedTextSize: hc,
    proteusapp_channelDestroy: xc,
    proteusapp_channelSet: yc,
    proteusapp_clearFocus: $c,
    proteusapp_component: vc,
    proteusapp_copyBakedImageFrom: Sc,
    proteusapp_createVideo: Ac,
    proteusapp_cropImage: Ic,
    proteusapp_declareGeometry: Dc,
    proteusapp_declaredGeometry: Tc,
    proteusapp_destroy: Fc,
    proteusapp_devices: Bc,
    proteusapp_focus: Pc,
    proteusapp_focused: kc,
    proteusapp_freeResources: Cc,
    proteusapp_get: Mc,
    proteusapp_hideVideo: Vc,
    proteusapp_inputDevices: Rc,
    proteusapp_isFocused: Ec,
    proteusapp_loadTexture: Lc,
    proteusapp_mergeFrom: Oc,
    proteusapp_mergeFromWithBehavior: Gc,
    proteusapp_new: Wc,
    proteusapp_onBlur: zc,
    proteusapp_onClick: Uc,
    proteusapp_onDrag: qc,
    proteusapp_onDropped: Hc,
    proteusapp_onFocus: jc,
    proteusapp_onFocusLost: Nc,
    proteusapp_onHoverEnter: Jc,
    proteusapp_onHoverExit: Kc,
    proteusapp_onPress: Qc,
    proteusapp_onRelease: Xc,
    proteusapp_onTransitionComplete: Yc,
    proteusapp_pointerLeft: Zc,
    proteusapp_pointerMoved: eo,
    proteusapp_pointerPressed: _o,
    proteusapp_pointerReleased: to,
    proteusapp_releaseVideo: ro,
    proteusapp_removeChild: no,
    proteusapp_setDeclaredGeometry: ao,
    proteusapp_setDefaultFocus: co,
    proteusapp_setDevices: oo,
    proteusapp_setDisabled: bo,
    proteusapp_setImage: so,
    proteusapp_setInputDevices: io,
    proteusapp_setInteractive: fo,
    proteusapp_setOpacity: uo,
    proteusapp_setText: go,
    proteusapp_setTexture: wo,
    proteusapp_setTransitionInteraction: po,
    proteusapp_setVideoCrossfade: lo,
    proteusapp_setVisible: mo,
    proteusapp_showVideo: ho,
    proteusapp_splitTo: xo,
    proteusapp_splitToWithBehavior: yo,
    proteusapp_splitToWithStates: $o,
    proteusapp_texture: vo,
    proteusapp_textureState: So,
    proteusapp_tick: Ao,
    proteusapp_transitionChannel: Io,
    proteusapp_uploadVideoFrame: Do,
    texturehandle_fromId: Mo,
    texturehandle_id: Vo,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Oo,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Lo
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  fc(No);
  Vt();
  const Jo = "" + new URL("proteus_host_web_bg-WPURiqb_.wasm", import.meta.url).href;
  let y = class B_ {
    static __wrap(e) {
      const t = Object.create(B_.prototype);
      return t.__wbg_ptr = e, pt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, pt.unregister(this), e;
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
  Symbol.dispose && (y.prototype[Symbol.dispose] = y.prototype.free);
  let P_ = class Rt {
    static __wrap(e) {
      const t = Object.create(Rt.prototype);
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
      l(e, y), l(t, y);
      const r = i.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw B(r[0]);
    }
    animateTo(e, t, r) {
      l(e, y);
      const n = i.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw B(n[0]);
    }
    bakeTexture(e, t, r, n) {
      const a = w_(r, i.__wbindgen_malloc), c = V, o = i.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, c, n);
      return ae.__wrap(o);
    }
    bakedImageSize(e) {
      return l(e, y), i.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return l(e, y), i.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    channelDestroy(e) {
      l(e, de);
      var t = e.__destroy_into_raw();
      i.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      l(e, de), l(t, y), l(r, y);
      const c = i.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (c[1]) throw B(c[0]);
    }
    clearFocus() {
      i.proteusapp_clearFocus(this.__wbg_ptr);
    }
    component(e) {
      const t = i.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw B(t[1]);
      return y.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      l(e, y), l(t, y);
      const r = i.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw B(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = i.proteusapp_createVideo(this.__wbg_ptr);
      return ge.__wrap(e);
    }
    cropImage(e, t) {
      l(e, y);
      const r = i.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw B(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      l(e, y);
      const r = i.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    declaredGeometry(e) {
      return l(e, y), i.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      l(e, y);
      var t = e.__destroy_into_raw();
      const r = i.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    devices(e) {
      return l(e, y), i.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    focus(e) {
      l(e, y);
      const t = i.proteusapp_focus(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw B(t[0]);
    }
    focused() {
      const e = i.proteusapp_focused(this.__wbg_ptr);
      return e === 0 ? void 0 : y.__wrap(e);
    }
    freeResources(e) {
      l(e, y);
      const t = i.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw B(t[0]);
    }
    get(e) {
      return l(e, y), i.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      l(e, y);
      const t = i.proteusapp_hideVideo(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw B(t[0]);
    }
    inputDevices() {
      return i.proteusapp_inputDevices(this.__wbg_ptr);
    }
    isFocused(e) {
      return l(e, y), i.proteusapp_isFocused(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    loadTexture(e, t) {
      const r = w_(e, i.__wbindgen_malloc), n = V, a = i.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : ae.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      l(e, y);
      const a = He(t, i.__wbindgen_malloc), c = V, o = i.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, c, r, n);
      if (o[1]) throw B(o[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      l(e, y);
      const c = He(t, i.__wbindgen_malloc), o = V, b = i.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, c, o, r, n, a);
      if (b[1]) throw B(b[0]);
    }
    constructor() {
      const e = i.proteusapp_new();
      return this.__wbg_ptr = e, g_.register(this, this.__wbg_ptr, this), this;
    }
    onBlur(e, t) {
      l(e, y), i.proteusapp_onBlur(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onClick(e, t) {
      l(e, y), i.proteusapp_onClick(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDrag(e, t) {
      l(e, y), i.proteusapp_onDrag(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDropped(e, t) {
      l(e, de), i.proteusapp_onDropped(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocus(e, t) {
      l(e, y), i.proteusapp_onFocus(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocusLost(e) {
      i.proteusapp_onFocusLost(this.__wbg_ptr, e);
    }
    onHoverEnter(e, t) {
      l(e, y), i.proteusapp_onHoverEnter(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverExit(e, t) {
      l(e, y), i.proteusapp_onHoverExit(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onPress(e, t) {
      l(e, y), i.proteusapp_onPress(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onRelease(e, t) {
      l(e, y), i.proteusapp_onRelease(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onTransitionComplete(e, t) {
      l(e, y), i.proteusapp_onTransitionComplete(this.__wbg_ptr, e.__wbg_ptr, t);
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
      l(e, y), l(t, y);
      const r = i.proteusapp_removeChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw B(r[0]);
    }
    setDeclaredGeometry(e, t) {
      l(e, y);
      const r = i.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setDefaultFocus(e, t) {
      l(e, y);
      const r = i.proteusapp_setDefaultFocus(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setDevices(e, t) {
      l(e, y);
      const r = i.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setDisabled(e, t) {
      l(e, y);
      const r = i.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setImage(e, t) {
      l(e, y);
      const r = i.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setInputDevices(e) {
      const t = i.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw B(t[0]);
    }
    setInteractive(e, t) {
      l(e, y);
      const r = i.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setOpacity(e, t) {
      l(e, y);
      const r = i.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setText(e, t) {
      l(e, y);
      const r = i.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setTexture(e, t) {
      l(e, y), l(t, ae);
      const r = i.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw B(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      l(e, y);
      const r = i.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setVideoCrossfade(e, t) {
      l(e, y);
      const r = i.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw B(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      l(e, y);
      const r = i.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    showVideo(e, t) {
      l(e, y), l(t, ge);
      const r = i.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw B(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      l(e, y);
      const a = He(t, i.__wbindgen_malloc), c = V, o = i.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, c, r, n);
      if (o[1]) throw B(o[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      l(e, y);
      const c = He(t, i.__wbindgen_malloc), o = V, b = i.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, c, o, r, n, a);
      if (b[1]) throw B(b[0]);
    }
    splitToWithStates(e, t, r, n) {
      l(e, y);
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
    uploadVideoFrame(e, t, r, n) {
      l(e, ge);
      const a = w_(n, i.__wbindgen_malloc), c = V;
      return i.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, c) !== 0;
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
  function Ko(_, e, t, r) {
    const n = z(_, i.__wbindgen_malloc, i.__wbindgen_realloc), a = V;
    return i.mount(n, a, e, $(t) ? 0 : D(t), r);
  }
  function Qo(_, e) {
    return Error(I(_, e));
  }
  function Xo(_) {
    return Number(_);
  }
  function Yo(_, e) {
    const t = String(e), r = z(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = V;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Zo(_) {
    return _.Window;
  }
  function eb(_) {
    return _.WorkerGlobalScope;
  }
  function _b(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    C().setBigInt64(_ + 8, $(r) ? BigInt(0) : r, true), C().setInt32(_ + 0, !$(r), true);
  }
  function tb(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return $(t) ? 16777215 : t ? 1 : 0;
  }
  function rb(_, e) {
    const t = C_(e), r = z(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = V;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function nb(_, e) {
    return _ in e;
  }
  function ab(_) {
    return typeof _ == "bigint";
  }
  function cb(_) {
    return typeof _ == "function";
  }
  function ob(_) {
    return _ === null;
  }
  function bb(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function sb(_) {
    return typeof _ == "string";
  }
  function ib(_) {
    return _ === void 0;
  }
  function fb(_, e) {
    return _ === e;
  }
  function ub(_, e) {
    return _ == e;
  }
  function db(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    C().setFloat64(_ + 8, $(r) ? 0 : r, true), C().setInt32(_ + 0, !$(r), true);
  }
  function gb(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = $(r) ? 0 : z(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = V;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function wb(_, e) {
    throw new Error(I(_, e));
  }
  function pb(_) {
    _._wbg_cb_unref();
  }
  function lb(_, e) {
    _.activeTexture(e >>> 0);
  }
  function mb(_, e) {
    _.activeTexture(e >>> 0);
  }
  function hb() {
    return w(function(_, e, t, r) {
      _.addEventListener(I(e, t), r);
    }, arguments);
  }
  function xb(_) {
    return _.altKey;
  }
  function yb(_, e, t) {
    _.attachShader(e, t);
  }
  function $b(_, e, t) {
    _.attachShader(e, t);
  }
  function vb(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function Sb() {
    return w(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Ab(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, I(r, n));
  }
  function Ib(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, I(r, n));
  }
  function Db(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function Tb(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function Fb(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function Bb(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function Pb(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function kb(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Cb(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Mb(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function Vb(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Rb(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Eb(_, e) {
    _.bindVertexArrayOES(e);
  }
  function Lb(_, e) {
    _.bindVertexArray(e);
  }
  function Ob(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Gb(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Wb(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function zb(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Ub(_, e) {
    _.blendEquation(e >>> 0);
  }
  function qb(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Hb(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function jb(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Nb(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function Jb(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function Kb(_, e, t, r, n, a, c, o, b, f, d) {
    _.blitFramebuffer(e, t, r, n, a, c, o, b, f >>> 0, d >>> 0);
  }
  function Qb(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Xb(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Yb(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Zb(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function es(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function _s(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function ts(_) {
    return _.button;
  }
  function rs() {
    return w(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function ns() {
    return w(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function as() {
    return w(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function cs(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, E(r, n));
  }
  function os(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, Y(r, n));
  }
  function bs(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, ye(r, n));
  }
  function ss(_, e) {
    _.clearDepth(e);
  }
  function is(_, e) {
    _.clearDepth(e);
  }
  function fs(_, e) {
    _.clearStencil(e);
  }
  function us(_, e) {
    _.clearStencil(e);
  }
  function ds(_, e) {
    _.clear(e >>> 0);
  }
  function gs(_, e) {
    _.clear(e >>> 0);
  }
  function ws(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function ps(_, e) {
    const t = e.code, r = z(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = V;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function ls(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function ms(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function hs(_, e) {
    _.compileShader(e);
  }
  function xs(_, e) {
    _.compileShader(e);
  }
  function ys(_, e, t, r, n, a, c, o, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b);
  }
  function $s(_, e, t, r, n, a, c, o, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b);
  }
  function vs(_, e, t, r, n, a, c, o, b, f) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b, f);
  }
  function Ss(_, e, t, r, n, a, c, o, b, f, d, A) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, c, o, b, f >>> 0, d, A);
  }
  function As(_, e, t, r, n, a, c, o, b, f, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, c, o, b, f >>> 0, d);
  }
  function Is() {
    return w(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function Ds(_) {
    return _.contentRect;
  }
  function Ts(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function Fs(_, e, t, r, n, a, c, o, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, c, o, b);
  }
  function Bs(_, e, t, r, n, a, c, o, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, c, o, b);
  }
  function Ps(_, e, t, r, n, a, c, o, b, f) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, c, o, b, f);
  }
  function ks() {
    return w(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function Cs() {
    return w(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function Ms(_, e) {
    return _.createBindGroup(e);
  }
  function Vs(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : D(e);
  }
  function Rs() {
    return w(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function Es(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : D(e);
  }
  function Ls(_, e) {
    return _.createCommandEncoder(e);
  }
  function Os(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : D(e);
  }
  function Gs(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : D(e);
  }
  function Ws(_, e) {
    return _.createPipelineLayout(e);
  }
  function zs(_) {
    const e = _.createProgram();
    return $(e) ? 0 : D(e);
  }
  function Us(_) {
    const e = _.createProgram();
    return $(e) ? 0 : D(e);
  }
  function qs(_) {
    const e = _.createQuery();
    return $(e) ? 0 : D(e);
  }
  function Hs() {
    return w(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function js(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : D(e);
  }
  function Ns(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : D(e);
  }
  function Js(_, e) {
    return _.createSampler(e);
  }
  function Ks(_) {
    const e = _.createSampler();
    return $(e) ? 0 : D(e);
  }
  function Qs(_, e) {
    return _.createShaderModule(e);
  }
  function Xs(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : D(t);
  }
  function Ys(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : D(t);
  }
  function Zs(_) {
    const e = _.createTexture();
    return $(e) ? 0 : D(e);
  }
  function ei(_) {
    const e = _.createTexture();
    return $(e) ? 0 : D(e);
  }
  function _i() {
    return w(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function ti(_) {
    const e = _.createVertexArrayOES();
    return $(e) ? 0 : D(e);
  }
  function ri(_) {
    const e = _.createVertexArray();
    return $(e) ? 0 : D(e);
  }
  function ni() {
    return w(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function ai(_) {
    return _.ctrlKey;
  }
  function ci(_, e) {
    _.cullFace(e >>> 0);
  }
  function oi(_, e) {
    _.cullFace(e >>> 0);
  }
  function bi(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function si(_, e) {
    _.deleteBuffer(e);
  }
  function ii(_, e) {
    _.deleteBuffer(e);
  }
  function fi(_, e) {
    _.deleteFramebuffer(e);
  }
  function ui(_, e) {
    _.deleteFramebuffer(e);
  }
  function di(_, e) {
    _.deleteProgram(e);
  }
  function gi(_, e) {
    _.deleteProgram(e);
  }
  function wi(_, e) {
    _.deleteQuery(e);
  }
  function pi(_, e) {
    _.deleteRenderbuffer(e);
  }
  function li(_, e) {
    _.deleteRenderbuffer(e);
  }
  function mi(_, e) {
    _.deleteSampler(e);
  }
  function hi(_, e) {
    _.deleteShader(e);
  }
  function xi(_, e) {
    _.deleteShader(e);
  }
  function yi(_, e) {
    _.deleteSync(e);
  }
  function $i(_, e) {
    _.deleteTexture(e);
  }
  function vi(_, e) {
    _.deleteTexture(e);
  }
  function Si(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function Ai(_, e) {
    _.deleteVertexArray(e);
  }
  function Ii(_, e) {
    _.depthFunc(e >>> 0);
  }
  function Di(_, e) {
    _.depthFunc(e >>> 0);
  }
  function Ti(_, e) {
    _.depthMask(e !== 0);
  }
  function Fi(_, e) {
    _.depthMask(e !== 0);
  }
  function Bi(_, e, t) {
    _.depthRange(e, t);
  }
  function Pi(_, e, t) {
    _.depthRange(e, t);
  }
  function ki(_, e) {
    const t = e.description, r = z(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = V;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Ci(_) {
    _.destroy();
  }
  function Mi(_) {
    return _.devicePixelRatio;
  }
  function Vi(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function Ri(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function Ei(_, e) {
    _.disable(e >>> 0);
  }
  function Li(_, e) {
    _.disable(e >>> 0);
  }
  function Oi(_) {
    const e = _.document;
    return $(e) ? 0 : D(e);
  }
  function Gi(_) {
    return _.done;
  }
  function Wi(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function zi(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function Ui(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function qi(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function Hi(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function ji(_, e) {
    _.drawBuffers(e);
  }
  function Ni(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function Ji(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function Ki(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function Qi(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function Xi(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function Yi(_, e) {
    _.enable(e >>> 0);
  }
  function Zi(_, e) {
    _.enable(e >>> 0);
  }
  function ef(_, e) {
    _.endQuery(e >>> 0);
  }
  function _f(_) {
    _.end();
  }
  function tf(_) {
    return Object.entries(_);
  }
  function rf(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function nf(_) {
    console.error(_);
  }
  function af(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(I(_, e));
    } finally {
      i.__wbindgen_free(t, r, 1);
    }
  }
  function cf(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return $(r) ? 0 : D(r);
  }
  function of(_) {
    return _.finish();
  }
  function bf(_, e) {
    return _.finish(e);
  }
  function sf(_) {
    _.flush();
  }
  function ff(_) {
    _.flush();
  }
  function uf() {
    return w(function(_) {
      _.focus();
    }, arguments);
  }
  function df(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function gf(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function wf(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function pf(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function lf(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function mf(_, e, t, r, n, a, c) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, c);
  }
  function hf(_, e) {
    _.frontFace(e >>> 0);
  }
  function xf(_, e) {
    _.frontFace(e >>> 0);
  }
  function yf(_) {
    return _.getBoundingClientRect();
  }
  function $f(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function vf() {
    return w(function(_, e, t, r) {
      const n = _.getContext(I(e, t), r);
      return $(n) ? 0 : D(n);
    }, arguments);
  }
  function Sf() {
    return w(function(_, e, t) {
      const r = _.getContext(I(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function Af() {
    return w(function(_, e, t) {
      const r = _.getContext(I(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function If() {
    return w(function(_, e, t, r) {
      const n = _.getContext(I(e, t), r);
      return $(n) ? 0 : D(n);
    }, arguments);
  }
  function Df() {
    return w(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function Tf(_, e, t) {
    const r = _.getElementById(I(e, t));
    return $(r) ? 0 : D(r);
  }
  function Ff() {
    return w(function(_, e, t) {
      const r = _.getExtension(I(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function Bf() {
    return w(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function Pf() {
    return w(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function kf() {
    return w(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function Cf() {
    return w(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function Mf(_) {
    const e = _.getPreferredCanvasFormat();
    return (ce.indexOf(e) + 1 || 96) - 1;
  }
  function Vf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : z(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = V;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Rf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : z(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = V;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Ef(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function Lf(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function Of(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function Gf(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : z(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = V;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Wf(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : z(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = V;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function zf(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function Uf(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function qf(_) {
    const e = _.getSupportedExtensions();
    return $(e) ? 0 : D(e);
  }
  function Hf(_) {
    const e = _.getSupportedProfiles();
    return $(e) ? 0 : D(e);
  }
  function jf(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function Nf(_, e, t, r) {
    return _.getUniformBlockIndex(e, I(t, r));
  }
  function Jf(_, e, t, r) {
    const n = _.getUniformLocation(e, I(t, r));
    return $(n) ? 0 : D(n);
  }
  function Kf(_, e, t, r) {
    const n = _.getUniformLocation(e, I(t, r));
    return $(n) ? 0 : D(n);
  }
  function Qf(_, e) {
    return _[e >>> 0];
  }
  function Xf(_, e) {
    const t = _[e >>> 0];
    return $(t) ? 0 : D(t);
  }
  function Yf() {
    return w(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function Zf(_, e) {
    return _[e >>> 0];
  }
  function eu(_, e) {
    return _[e];
  }
  function _u(_) {
    return _.gpu;
  }
  function tu(_, e, t) {
    return _.hasAttribute(I(e, t));
  }
  function ru(_) {
    return _.height;
  }
  function nu(_) {
    return _.height;
  }
  function au(_) {
    return _.hidden;
  }
  function cu(_, e, t) {
    return _.includes(e, t);
  }
  function ou(_) {
    return _.info;
  }
  function bu(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function su(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function iu(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function fu(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function uu(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function du(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function gu(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function wu(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function pu(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function lu(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function mu() {
    return w(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function hu(_) {
    return Array.isArray(_);
  }
  function xu(_) {
    return _.isComposing;
  }
  function yu(_) {
    return Number.isSafeInteger(_);
  }
  function $u(_, e) {
    return Object.is(_, e);
  }
  function vu() {
    return Symbol.iterator;
  }
  function Su(_, e) {
    const t = e.key, r = z(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = V;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Au(_, e) {
    const t = e.label, r = z(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = V;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Iu(_) {
    return _.length;
  }
  function Du(_) {
    return _.length;
  }
  function Tu(_) {
    return _.limits;
  }
  function Fu(_) {
    return _.limits;
  }
  function Bu(_, e) {
    _.linkProgram(e);
  }
  function Pu(_, e) {
    _.linkProgram(e);
  }
  function ku(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function Cu(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function Mu(_) {
    return _.maxBindGroups;
  }
  function Vu(_) {
    return _.maxBindingsPerBindGroup;
  }
  function Ru(_) {
    return _.maxBufferSize;
  }
  function Eu(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function Lu(_) {
    return _.maxColorAttachments;
  }
  function Ou(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function Gu(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function Wu(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function zu(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function Uu(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function qu(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function Hu(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function ju(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function Nu(_) {
    return _.maxInterStageShaderVariables;
  }
  function Ju(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function Ku(_) {
    return _.maxSamplersPerShaderStage;
  }
  function Qu(_) {
    return _.maxStorageBufferBindingSize;
  }
  function Xu(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function Yu(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function Zu(_) {
    return _.maxTextureArrayLayers;
  }
  function ed(_) {
    return _.maxTextureDimension1D;
  }
  function _d(_) {
    return _.maxTextureDimension2D;
  }
  function td(_) {
    return _.maxTextureDimension3D;
  }
  function rd(_) {
    return _.maxUniformBufferBindingSize;
  }
  function nd(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function ad(_) {
    return _.maxVertexAttributes;
  }
  function cd(_) {
    return _.maxVertexBufferArrayStride;
  }
  function od(_) {
    return _.maxVertexBuffers;
  }
  function bd(_) {
    return _.metaKey;
  }
  function sd(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function id(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function fd(_) {
    return _.navigator;
  }
  function ud(_) {
    return _.navigator;
  }
  function dd() {
    return w(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function gd() {
    return new Error();
  }
  function wd() {
    return new Object();
  }
  function pd() {
    return new Array();
  }
  function ld(_) {
    return new Uint8Array(_);
  }
  function md(_, e) {
    return new Error(I(_, e));
  }
  function hd(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, c) => {
        const o = t.a;
        t.a = 0;
        try {
          return V2(o, t.b, a, c);
        } finally {
          t.a = o;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function xd(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function yd() {
    return w(function(_) {
      return _.next();
    }, arguments);
  }
  function $d(_) {
    return _.next;
  }
  function vd(_, e) {
    _.observe(e);
  }
  function Sd(_) {
    return Array.of(_);
  }
  function Ad(_) {
    return _.offsetX;
  }
  function Id(_) {
    return _.offsetY;
  }
  function Dd(_) {
    return _.onSubmittedWorkDone();
  }
  function Td(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function Fd(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function Bd(_, e, t) {
    _.polygonOffset(e, t);
  }
  function Pd(_, e, t) {
    _.polygonOffset(e, t);
  }
  function kd(_) {
    _.preventDefault();
  }
  function Cd(_) {
    return P_.__wrap(_);
  }
  function Md(_, e, t) {
    Uint8Array.prototype.set.call(s_(_, e), t);
  }
  function Vd(_, e) {
    return _.push(e);
  }
  function Rd(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function Ed() {
    return w(function(_, e, t) {
      return _.querySelectorAll(I(e, t));
    }, arguments);
  }
  function Ld() {
    return w(function(_, e, t) {
      const r = _.querySelector(I(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function Od(_) {
    return _.queueMicrotask;
  }
  function Gd(_) {
    queueMicrotask(_);
  }
  function Wd(_) {
    return _.queue;
  }
  function zd(_, e) {
    _.readBuffer(e >>> 0);
  }
  function Ud() {
    return w(function(_, e, t, r, n, a, c, o) {
      _.readPixels(e, t, r, n, a >>> 0, c >>> 0, o);
    }, arguments);
  }
  function qd() {
    return w(function(_, e, t, r, n, a, c, o) {
      _.readPixels(e, t, r, n, a >>> 0, c >>> 0, o);
    }, arguments);
  }
  function Hd() {
    return w(function(_, e, t, r, n, a, c, o) {
      _.readPixels(e, t, r, n, a >>> 0, c >>> 0, o);
    }, arguments);
  }
  function jd(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function Nd(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function Jd(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function Kd(_) {
    return _.repeat;
  }
  function Qd(_, e) {
    return _.requestAdapter(e);
  }
  function Xd(_) {
    return _.requestAdapter();
  }
  function Yd() {
    return w(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function Zd(_, e) {
    return _.requestDevice(e);
  }
  function e0(_) {
    return Promise.resolve(_);
  }
  function _0(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function t0(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function r0(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function n0(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function a0() {
    return w(function(_, e, t, r, n) {
      _.setAttribute(I(e, t), I(r, n));
    }, arguments);
  }
  function c0() {
    return w(function(_, e, t, r, n, a, c) {
      _.setBindGroup(e >>> 0, t, ye(r, n), a, c >>> 0);
    }, arguments);
  }
  function o0(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function b0(_, e, t, r, n) {
    _.setIndexBuffer(e, H_[t], r, n);
  }
  function s0(_, e, t, r) {
    _.setIndexBuffer(e, H_[t], r);
  }
  function i0(_, e) {
    _.setPipeline(e);
  }
  function f0(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function u0(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function d0(_, e, t, r, n, a, c) {
    _.setViewport(e, t, r, n, a, c);
  }
  function g0(_, e, t) {
    _.set(e, t >>> 0);
  }
  function w0() {
    return w(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function p0(_, e, t) {
    _[e] = t;
  }
  function l0(_, e) {
    _.a = e;
  }
  function m0(_, e) {
    _.access = j2[e];
  }
  function h0(_, e) {
    _.addressModeU = U_[e];
  }
  function x0(_, e) {
    _.addressModeV = U_[e];
  }
  function y0(_, e) {
    _.addressModeW = U_[e];
  }
  function $0(_, e) {
    _.alpha = e;
  }
  function v0(_, e) {
    _.alphaMode = O2[e];
  }
  function S0(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function A0(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function I0(_, e) {
    _.arrayStride = e;
  }
  function D0(_, e) {
    _.aspect = Wt[e];
  }
  function T0(_, e) {
    _.aspect = Wt[e];
  }
  function F0(_, e) {
    _.attributes = e;
  }
  function B0(_, e) {
    _.b = e;
  }
  function P0(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function k0(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function C0(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function M0(_, e) {
    _.bindGroupLayouts = e;
  }
  function V0(_, e) {
    _.binding = e >>> 0;
  }
  function R0(_, e) {
    _.binding = e >>> 0;
  }
  function E0(_, e) {
    _.blend = e;
  }
  function L0(_, e) {
    _.buffer = e;
  }
  function O0(_, e) {
    _.buffer = e;
  }
  function G0(_, e) {
    _.buffers = e;
  }
  function W0(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function z0(_, e) {
    _.clearValue = e;
  }
  function U0(_, e, t) {
    _.code = I(e, t);
  }
  function q0(_, e) {
    _.colorAttachments = e;
  }
  function H0(_, e) {
    _.color = e;
  }
  function j0(_, e) {
    _.compare = q_[e];
  }
  function N0(_, e) {
    _.compare = q_[e];
  }
  function J0(_, e) {
    _.count = e >>> 0;
  }
  function K0(_, e) {
    _.cullMode = G2[e];
  }
  function Q0(_, e, t) {
    _[e >>> 0] = t;
  }
  function X0(_, e) {
    _.depthBias = e;
  }
  function Y0(_, e) {
    _.depthBiasClamp = e;
  }
  function Z0(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function eg(_, e) {
    _.depthClearValue = e;
  }
  function _g(_, e) {
    _.depthCompare = q_[e];
  }
  function tg(_, e) {
    _.depthFailOp = N_[e];
  }
  function rg(_, e) {
    _.depthLoadOp = j_[e];
  }
  function ng(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function ag(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function cg(_, e) {
    _.depthStencil = e;
  }
  function og(_, e) {
    _.depthStencilAttachment = e;
  }
  function bg(_, e) {
    _.depthStoreOp = J_[e];
  }
  function sg(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function ig(_, e) {
    _.device = e;
  }
  function fg(_, e) {
    _.dimension = K_[e];
  }
  function ug(_, e) {
    _.dimension = N2[e];
  }
  function dg(_, e) {
    _.dstFactor = Ot[e];
  }
  function gg(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function wg(_, e) {
    _.entries = e;
  }
  function pg(_, e) {
    _.entries = e;
  }
  function lg(_, e, t) {
    _.entryPoint = I(e, t);
  }
  function mg(_, e, t) {
    _.entryPoint = I(e, t);
  }
  function hg(_, e) {
    _.externalTexture = e;
  }
  function xg(_, e) {
    _.failOp = N_[e];
  }
  function yg(_, e) {
    _.format = ce[e];
  }
  function $g(_, e) {
    _.format = K2[e];
  }
  function vg(_, e) {
    _.format = ce[e];
  }
  function Sg(_, e) {
    _.format = ce[e];
  }
  function Ag(_, e) {
    _.format = ce[e];
  }
  function Ig(_, e) {
    _.format = ce[e];
  }
  function Dg(_, e) {
    _.format = ce[e];
  }
  function Tg(_, e) {
    _.fragment = e;
  }
  function Fg(_, e) {
    _.frontFace = W2[e];
  }
  function Bg(_, e) {
    _.g = e;
  }
  function Pg(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function kg(_, e) {
    _.height = e >>> 0;
  }
  function Cg(_, e) {
    _.height = e >>> 0;
  }
  function Mg(_, e) {
    _.height = e >>> 0;
  }
  function Vg(_, e, t) {
    _.label = I(e, t);
  }
  function Rg(_, e, t) {
    _.label = I(e, t);
  }
  function Eg(_, e, t) {
    _.label = I(e, t);
  }
  function Lg(_, e, t) {
    _.label = I(e, t);
  }
  function Og(_, e, t) {
    _.label = I(e, t);
  }
  function Gg(_, e, t) {
    _.label = I(e, t);
  }
  function Wg(_, e, t) {
    _.label = I(e, t);
  }
  function zg(_, e, t) {
    _.label = I(e, t);
  }
  function Ug(_, e, t) {
    _.label = I(e, t);
  }
  function qg(_, e, t) {
    _.label = I(e, t);
  }
  function Hg(_, e, t) {
    _.label = I(e, t);
  }
  function jg(_, e, t) {
    _.label = I(e, t);
  }
  function Ng(_, e, t) {
    _.label = I(e, t);
  }
  function Jg(_, e) {
    _.layout = e;
  }
  function Kg(_, e) {
    _.layout = e;
  }
  function Qg(_, e) {
    _.loadOp = j_[e];
  }
  function Xg(_, e) {
    _.lodMaxClamp = e;
  }
  function Yg(_, e) {
    _.lodMinClamp = e;
  }
  function Zg(_, e) {
    _.magFilter = Gt[e];
  }
  function ew(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function _w(_, e) {
    _.mask = e >>> 0;
  }
  function tw(_, e) {
    _.maxAnisotropy = e;
  }
  function rw(_, e) {
    _.minBindingSize = e;
  }
  function nw(_, e) {
    _.minFilter = Gt[e];
  }
  function aw(_, e) {
    _.mipLevel = e >>> 0;
  }
  function cw(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function ow(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function bw(_, e) {
    _.mipmapFilter = z2[e];
  }
  function sw(_, e) {
    _.module = e;
  }
  function iw(_, e) {
    _.module = e;
  }
  function fw(_, e) {
    _.multisample = e;
  }
  function uw(_, e) {
    _.multisampled = e !== 0;
  }
  function dw(_, e) {
    _.offset = e;
  }
  function gw(_, e) {
    _.offset = e;
  }
  function ww(_, e) {
    _.offset = e;
  }
  function pw(_, e) {
    _.operation = E2[e];
  }
  function lw(_, e) {
    _.origin = e;
  }
  function mw(_, e) {
    _.passOp = N_[e];
  }
  function hw(_, e) {
    _.powerPreference = U2[e];
  }
  function xw(_, e) {
    _.primitive = e;
  }
  function yw(_, e) {
    _.querySet = e;
  }
  function $w(_, e) {
    _.r = e;
  }
  function vw(_, e) {
    _.requiredFeatures = e;
  }
  function Sw(_, e) {
    _.requiredLimits = e;
  }
  function Aw(_, e) {
    _.resolveTarget = e;
  }
  function Iw(_, e) {
    _.resource = e;
  }
  function Dw(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function Tw(_, e) {
    _.sampleCount = e >>> 0;
  }
  function Fw(_, e) {
    _.sampleType = J2[e];
  }
  function Bw(_, e) {
    _.sampler = e;
  }
  function Pw(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function kw(_, e) {
    _.size = e;
  }
  function Cw(_, e) {
    _.size = e;
  }
  function Mw(_, e) {
    _.size = e;
  }
  function Vw(_, e) {
    _.srcFactor = Ot[e];
  }
  function Rw(_, e) {
    _.stencilBack = e;
  }
  function Ew(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function Lw(_, e) {
    _.stencilFront = e;
  }
  function Ow(_, e) {
    _.stencilLoadOp = j_[e];
  }
  function Gw(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function Ww(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function zw(_, e) {
    _.stencilStoreOp = J_[e];
  }
  function Uw(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function qw(_, e) {
    _.stepMode = Q2[e];
  }
  function Hw(_, e) {
    _.storageTexture = e;
  }
  function jw(_, e) {
    _.storeOp = J_[e];
  }
  function Nw(_, e) {
    _.stripIndexFormat = H_[e];
  }
  function Jw(_, e) {
    _.targets = e;
  }
  function Kw(_, e) {
    _.texture = e;
  }
  function Qw(_, e) {
    _.texture = e;
  }
  function Xw(_, e) {
    _.timestampWrites = e;
  }
  function Yw(_, e) {
    _.topology = q2[e];
  }
  function Zw(_, e) {
    _.type = L2[e];
  }
  function ep(_, e) {
    _.type = H2[e];
  }
  function _p(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function tp(_, e) {
    _.usage = e >>> 0;
  }
  function rp(_, e) {
    _.usage = e >>> 0;
  }
  function np(_, e) {
    _.usage = e >>> 0;
  }
  function ap(_, e) {
    _.usage = e >>> 0;
  }
  function cp(_, e) {
    _.vertex = e;
  }
  function op(_, e) {
    _.view = e;
  }
  function bp(_, e) {
    _.view = e;
  }
  function sp(_, e) {
    _.viewDimension = K_[e];
  }
  function ip(_, e) {
    _.viewDimension = K_[e];
  }
  function fp(_, e) {
    _.viewFormats = e;
  }
  function up(_, e) {
    _.viewFormats = e;
  }
  function dp(_, e) {
    _.visibility = e >>> 0;
  }
  function gp(_, e) {
    _.width = e >>> 0;
  }
  function wp(_, e) {
    _.width = e >>> 0;
  }
  function pp(_, e) {
    _.width = e >>> 0;
  }
  function lp(_, e) {
    _.writeMask = e >>> 0;
  }
  function mp(_, e) {
    _.x = e >>> 0;
  }
  function hp(_, e) {
    _.y = e >>> 0;
  }
  function xp(_, e) {
    _.z = e >>> 0;
  }
  function yp(_, e, t, r) {
    _.shaderSource(e, I(t, r));
  }
  function $p(_, e, t, r) {
    _.shaderSource(e, I(t, r));
  }
  function vp(_) {
    return _.shiftKey;
  }
  function Sp(_, e) {
    const t = e.stack, r = z(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = V;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Ap() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return $(_) ? 0 : D(_);
  }
  function Ip() {
    const _ = typeof global > "u" ? null : global;
    return $(_) ? 0 : D(_);
  }
  function Dp() {
    const _ = typeof self > "u" ? null : self;
    return $(_) ? 0 : D(_);
  }
  function Tp() {
    const _ = typeof window > "u" ? null : window;
    return $(_) ? 0 : D(_);
  }
  function Fp(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function Bp(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function Pp(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function kp(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function Cp(_, e) {
    _.stencilMask(e >>> 0);
  }
  function Mp(_, e) {
    _.stencilMask(e >>> 0);
  }
  function Vp(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Rp(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Ep(_, e) {
    _.submit(e);
  }
  function Lp() {
    return w(function(_, e, t, r, n, a, c, o, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Op() {
    return w(function(_, e, t, r, n, a, c, o, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Gp() {
    return w(function(_, e, t, r, n, a, c, o, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Wp() {
    return w(function(_, e, t, r, n, a, c, o, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, c, o, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function zp() {
    return w(function(_, e, t, r, n, a, c, o, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, c, o, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function Up(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function qp(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function Hp(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function jp(_, e, t, r, n, a, c) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, c);
  }
  function Np() {
    return w(function(_, e, t, r, n, a, c, o, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Jp() {
    return w(function(_, e, t, r, n, a, c, o, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Kp() {
    return w(function(_, e, t, r, n, a, c, o, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Qp() {
    return w(function(_, e, t, r, n, a, c, o, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Xp() {
    return w(function(_, e, t, r, n, a, c, o, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Yp() {
    return w(function(_, e, t, r, n, a, c, o, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function Zp() {
    return w(function(_, e, t, r, n, a, c, o, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function e1() {
    return w(function(_, e, t, r, n, a, c, o, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function _1() {
    return w(function(_, e, t, r, n, a, c, o, b, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, o, b, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function t1() {
    return w(function(_, e, t, r, n, a, c, o, b, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, o, b, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function r1() {
    return w(function(_, e, t, r, n, a, c, o, b, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, o, b, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function n1() {
    return w(function(_, e, t, r, n, a, c, o, b, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, o, b, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function a1() {
    return w(function(_, e, t, r, n, a, c, o, b, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, o, b, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function c1() {
    return w(function(_, e, t, r, n, a, c, o, b, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, o, b, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function o1() {
    return w(function(_, e, t, r, n, a, c, o, b, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, o, b, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function b1(_, e, t) {
    return _.then(e, t);
  }
  function s1(_, e, t) {
    return _.then(e, t);
  }
  function i1(_, e) {
    return _.then(e);
  }
  function f1(_, e, t) {
    _.uniform1f(e, t);
  }
  function u1(_, e, t) {
    _.uniform1f(e, t);
  }
  function d1(_, e, t) {
    _.uniform1i(e, t);
  }
  function g1(_, e, t) {
    _.uniform1i(e, t);
  }
  function w1(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function p1(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function l1(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function m1(_, e, t, r) {
    _.uniform2iv(e, Y(t, r));
  }
  function h1(_, e, t, r) {
    _.uniform2iv(e, Y(t, r));
  }
  function x1(_, e, t, r) {
    _.uniform2uiv(e, ye(t, r));
  }
  function y1(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function $1(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function v1(_, e, t, r) {
    _.uniform3iv(e, Y(t, r));
  }
  function S1(_, e, t, r) {
    _.uniform3iv(e, Y(t, r));
  }
  function A1(_, e, t, r) {
    _.uniform3uiv(e, ye(t, r));
  }
  function I1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function D1(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function T1(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function F1(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function B1(_, e, t, r) {
    _.uniform4iv(e, Y(t, r));
  }
  function P1(_, e, t, r) {
    _.uniform4iv(e, Y(t, r));
  }
  function k1(_, e, t, r) {
    _.uniform4uiv(e, ye(t, r));
  }
  function C1(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function M1(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function V1(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function R1(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, E(r, n));
  }
  function E1(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, E(r, n));
  }
  function L1(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function O1(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function G1(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, E(r, n));
  }
  function W1(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, E(r, n));
  }
  function z1(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function U1(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function q1(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, E(r, n));
  }
  function H1(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, E(r, n));
  }
  function j1(_) {
    _.unmap();
  }
  function N1(_, e) {
    _.useProgram(e);
  }
  function J1(_, e) {
    _.useProgram(e);
  }
  function K1(_) {
    return _.value;
  }
  function Q1(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function X1(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function Y1(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function Z1(_, e, t, r, n, a, c) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, c);
  }
  function e2(_, e, t, r, n, a, c) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, c);
  }
  function _2(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function t2(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function r2(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function n2(_) {
    return _.width;
  }
  function a2(_) {
    return _.width;
  }
  function c2() {
    return w(function(_, e, t, r, n, a, c) {
      _.writeBuffer(e, t, s_(r, n), a, c);
    }, arguments);
  }
  function o2() {
    return w(function(_, e, t, r, n, a) {
      _.writeTexture(e, s_(t, r), n, a);
    }, arguments);
  }
  function b2(_, e) {
    return Z(_, e, F2);
  }
  function s2(_, e) {
    return Z(_, e, M2);
  }
  function i2(_, e) {
    return Z(_, e, R2);
  }
  function f2(_, e) {
    return Z(_, e, B2);
  }
  function u2(_, e) {
    return Z(_, e, P2);
  }
  function d2(_, e) {
    return Z(_, e, k2);
  }
  function g2(_, e) {
    return Z(_, e, C2);
  }
  function w2(_, e) {
    return Z(_, e, T2);
  }
  function p2(_) {
    return _;
  }
  function l2(_) {
    return _;
  }
  function m2(_, e) {
    return E(_, e);
  }
  function h2(_, e) {
    return X2(_, e);
  }
  function x2(_, e) {
    return Y(_, e);
  }
  function y2(_, e) {
    return Y2(_, e);
  }
  function $2(_, e) {
    return Z2(_, e);
  }
  function v2(_, e) {
    return ye(_, e);
  }
  function S2(_, e) {
    return s_(_, e);
  }
  function A2(_, e) {
    return I(_, e);
  }
  function I2(_) {
    return BigInt.asUintN(64, _);
  }
  function D2() {
    const _ = i.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function T2(_, e) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function F2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function B2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function P2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function k2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function C2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6(_, e, t);
  }
  function M2(_, e, t) {
    const r = i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (r[1]) throw B(r[0]);
  }
  function V2(_, e, t, r) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, r);
  }
  function R2(_, e, t) {
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
  ], E2 = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], L2 = [
    "uniform",
    "storage",
    "read-only-storage"
  ], O2 = [
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
  ], G2 = [
    "none",
    "front",
    "back"
  ], Gt = [
    "nearest",
    "linear"
  ], W2 = [
    "ccw",
    "cw"
  ], H_ = [
    "uint16",
    "uint32"
  ], j_ = [
    "load",
    "clear"
  ], z2 = [
    "nearest",
    "linear"
  ], U2 = [
    "low-power",
    "high-performance"
  ], q2 = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], H2 = [
    "filtering",
    "non-filtering",
    "comparison"
  ], N_ = [
    "keep",
    "zero",
    "replace",
    "invert",
    "increment-clamp",
    "decrement-clamp",
    "increment-wrap",
    "decrement-wrap"
  ], j2 = [
    "write-only",
    "read-only",
    "read-write"
  ], J_ = [
    "store",
    "discard"
  ], Wt = [
    "all",
    "stencil-only",
    "depth-only"
  ], N2 = [
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
  ], J2 = [
    "float",
    "unfilterable-float",
    "depth",
    "sint",
    "uint"
  ], K_ = [
    "1d",
    "2d",
    "2d-array",
    "cube",
    "cube-array",
    "3d"
  ], K2 = [
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
  ], Q2 = [
    "vertex",
    "instance"
  ], pt = typeof FinalizationRegistry > "u" ? {
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
  const xt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbindgen_destroy_closure(_.a, _.b));
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
      for (let c = 1; c < n; c++) a += ", " + C_(_[c]);
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
    return _ = _ >>> 0, e3().subarray(_ / 4, _ / 4 + e);
  }
  function X2(_, e) {
    return _ = _ >>> 0, t3().subarray(_ / 2, _ / 2 + e);
  }
  function Y(_, e) {
    return _ = _ >>> 0, r3().subarray(_ / 4, _ / 4 + e);
  }
  function Y2(_, e) {
    return _ = _ >>> 0, n3().subarray(_ / 1, _ / 1 + e);
  }
  function Z2(_, e) {
    return _ = _ >>> 0, a3().subarray(_ / 2, _ / 2 + e);
  }
  function ye(_, e) {
    return _ = _ >>> 0, c3().subarray(_ / 4, _ / 4 + e);
  }
  function s_(_, e) {
    return _ = _ >>> 0, le().subarray(_ / 1, _ / 1 + e);
  }
  let se = null;
  function C() {
    return (se === null || se.buffer.detached === true || se.buffer.detached === void 0 && se.buffer !== i.memory.buffer) && (se = new DataView(i.memory.buffer)), se;
  }
  let Ee = null;
  function e3() {
    return (Ee === null || Ee.byteLength === 0) && (Ee = new Float32Array(i.memory.buffer)), Ee;
  }
  let Le = null;
  function _3() {
    return (Le === null || Le.byteLength === 0) && (Le = new Float64Array(i.memory.buffer)), Le;
  }
  let Oe = null;
  function t3() {
    return (Oe === null || Oe.byteLength === 0) && (Oe = new Int16Array(i.memory.buffer)), Oe;
  }
  let Ge = null;
  function r3() {
    return (Ge === null || Ge.byteLength === 0) && (Ge = new Int32Array(i.memory.buffer)), Ge;
  }
  let We = null;
  function n3() {
    return (We === null || We.byteLength === 0) && (We = new Int8Array(i.memory.buffer)), We;
  }
  function I(_, e) {
    return b3(_ >>> 0, e);
  }
  let ze = null;
  function a3() {
    return (ze === null || ze.byteLength === 0) && (ze = new Uint16Array(i.memory.buffer)), ze;
  }
  let Ue = null;
  function c3() {
    return (Ue === null || Ue.byteLength === 0) && (Ue = new Uint32Array(i.memory.buffer)), Ue;
  }
  let qe = null;
  function le() {
    return (qe === null || qe.byteLength === 0) && (qe = new Uint8Array(i.memory.buffer)), qe;
  }
  function w(_, e) {
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
      const c = r.a;
      r.a = 0;
      try {
        return t(c, r.b, ...a);
      } finally {
        r.a = c, n._wbg_cb_unref();
      }
    };
    return n._wbg_cb_unref = () => {
      --r.cnt === 0 && (i.__wbindgen_destroy_closure(r.a, r.b), r.a = 0, xt.unregister(r));
    }, xt.register(n, r, r), n;
  }
  function w_(_, e) {
    const t = e(_.length * 1, 1) >>> 0;
    return le().set(_, t / 1), V = _.length, t;
  }
  function He(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return _3().set(_, t / 8), V = _.length, t;
  }
  function z(_, e, t) {
    if (t === void 0) {
      const o = Se.encode(_), b = e(o.length, 1) >>> 0;
      return le().subarray(b, b + o.length).set(o), V = o.length, b;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = le();
    let c = 0;
    for (; c < r; c++) {
      const o = _.charCodeAt(c);
      if (o > 127) break;
      a[n + c] = o;
    }
    if (c !== r) {
      c !== 0 && (_ = _.slice(c)), n = t(n, r, r = c + _.length * 3, 1) >>> 0;
      const o = le().subarray(n + c, n + r), b = Se.encodeInto(_, o);
      c += b.written, n = t(n, r, c, 1) >>> 0;
    }
    return V = c, n;
  }
  function B(_) {
    const e = i.__wbindgen_externrefs.get(_);
    return i.__externref_table_dealloc(_), e;
  }
  let r_ = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  r_.decode();
  const o3 = 2146435072;
  let p_ = 0;
  function b3(_, e) {
    return p_ += e, p_ >= o3 && (r_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), r_.decode(), p_ = e), r_.decode(le().subarray(_, _ + e));
  }
  const Se = new TextEncoder();
  "encodeInto" in Se || (Se.encodeInto = function(_, e) {
    const t = Se.encode(_);
    return e.set(t), {
      read: _.length,
      written: t.length
    };
  });
  let V = 0, i;
  function s3(_) {
    i = _;
  }
  URL = globalThis.URL;
  const i3 = await O_({
    "./proteus_host_web_bg.js": {
      __wbg_call_5575218572ead796: ns,
      __wbg_new_typed_00a409eb4ec4f2d9: hd,
      __wbg_next_0c4066e251d2eff9: yd,
      __wbg_done_b62d4a7d2286852a: Gi,
      __wbg_value_49f783bb59765962: K1,
      __wbg_then_05edfc8a4fea5106: b1,
      __wbg_get_197a3fe98f169e38: Qf,
      __wbg_get_unchecked_54a4374c38e08460: Zf,
      __wbg_length_c6054974c0a6cdb9: Du,
      __wbg_new_227d7c05414eb861: gd,
      __wbg_stack_3b0d974bbf31e44f: Sp,
      __wbg_error_a6fa202b58aa1cd3: af,
      __wbg_push_f724b5db8acf89d2: Vd,
      __wbg_instanceof_Map_afa18d5840c04c15: du,
      __wbg_proteusapp_new: Cd,
      __wbg_call_8e98ed2f3c86c4b5: as,
      __wbg_call_0e855b388e315e17: rs,
      __wbg_set_dc601f4a69da0bc2: Q0,
      __wbg_get_with_ref_key_6412cf3094599694: eu,
      __wbg_set_6be42768c690e380: p0,
      __wbg_String_8564e559799eccda: Yo,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: fu,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: ed,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: _d,
      __wbg_maxTextureDimension3D_06ee54121b37d431: td,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: Zu,
      __wbg_maxBindGroups_14611ac9ed1c6b56: Mu,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: Vu,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: ju,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: Hu,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: Ju,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: Ku,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: Xu,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: Yu,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: nd,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: rd,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: Qu,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: od,
      __wbg_maxBufferSize_f7ce3e1856349d2f: Ru,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: ad,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: cd,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: Nu,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: id,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: sd,
      __wbg_maxColorAttachments_fd9187f9f786da18: Lu,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: Eu,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: Uu,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: Ou,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: Gu,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: Wu,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: zu,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: qu,
      __wbg_description_18d0a6d4077fec8e: ki,
      __wbg_set_dst_factor_1ed75271a89a711e: dg,
      __wbg_set_operation_b5862f5a1a143b30: pw,
      __wbg_set_src_factor_1c4f755f8676df1b: Vw,
      __wbg_set_texture_16d2be474ce6ad0c: Kw,
      __wbg_set_mip_level_246db61be15bdd69: aw,
      __wbg_set_x_56f0c2c08a62725c: mp,
      __wbg_set_y_04fb8ce84735b4e1: hp,
      __wbg_set_z_a51316db27a4941e: xp,
      __wbg_set_origin_9b3b0fbe0a5dc469: lw,
      __wbg_set_aspect_77332ac136ee94eb: D0,
      __wbg_Window_a07901001eb4269f: Zo,
      __wbg_gpu_a7c12045c25d009a: _u,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: eb,
      __wbg_set_a_5f6e488475272136: l0,
      __wbg_set_b_688365d692bba214: B0,
      __wbg_set_g_d4d1d77cf8fdd362: Bg,
      __wbg_set_r_527e5a41c4b1a846: $w,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: iu,
      __wbg_queue_65d985f3e6d786a6: Wd,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: hw,
      __wbg_requestAdapter_9ff5c9d1ff271165: Qd,
      __wbg_set_required_limits_3b031f66f838f4e3: Sw,
      __wbg_set_required_features_54918de8185c5fab: vw,
      __wbg_set_label_bae57fb9f24fde5c: Wg,
      __wbg_requestDevice_c1c34f88a477e509: Zd,
      __wbg_limits_50a8c5e629dbfe40: Fu,
      __wbg_info_22dcf1fd1b12bc7d: ou,
      __wbg_set_size_41cd9255ca1e4242: Cw,
      __wbg_set_usage_908213a4d4bb8bde: np,
      __wbg_set_mapped_at_creation_48de4735fab51e78: ew,
      __wbg_set_label_cd567b7b35838e4c: qg,
      __wbg_createBuffer_2f08c0205e04efca: Rs,
      __wbg_set_address_mode_u_a37cf1035585c638: h0,
      __wbg_set_address_mode_v_8ac049e029caef76: x0,
      __wbg_set_address_mode_w_eb9260ee11729e92: y0,
      __wbg_set_compare_42211fbf15e3b850: N0,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: Xg,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: Yg,
      __wbg_set_mag_filter_69d846b974d4bcc0: Zg,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: nw,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: bw,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: tw,
      __wbg_set_label_dcd98efbb9370da8: jg,
      __wbg_createSampler_248bd67c920af37d: Js,
      __wbg_set_width_1a5e2e86fa5bdcd8: wp,
      __wbg_set_height_e8b5483b8c117d5e: Cg,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: ng,
      __wbg_set_format_e9d4b1475bb3bd3b: Ig,
      __wbg_set_size_a61ff22205255d61: Mw,
      __wbg_set_usage_7fa9cd18d1104aca: rp,
      __wbg_set_label_0c1bd0e976cf0a9a: Rg,
      __wbg_set_dimension_36e13ccecae5af4b: ug,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: ow,
      __wbg_set_sample_count_865e1d19b84e27e6: Tw,
      __wbg_set_view_formats_bab284fc81b40e70: fp,
      __wbg_createTexture_9e76b80a2dc0d12e: _i,
      __wbg_set_entries_fc76ca4d7da6a709: pg,
      __wbg_set_layout_eeef59714f5bf48b: Kg,
      __wbg_set_label_f92ae11c77d74198: Ng,
      __wbg_createBindGroup_2320df4db188406c: Ms,
      __wbg_set_code_56e2d45ec1ff6c2d: U0,
      __wbg_set_label_be45aed56e4b9fee: zg,
      __wbg_createShaderModule_53701de4fb271c90: Qs,
      __wbg_set_label_d1c24b5a7a3ac31d: Hg,
      __wbg_createCommandEncoder_cd88faca35d9ed68: Ls,
      __wbg_set_bind_group_layouts_5325d038771af328: M0,
      __wbg_set_label_2f592bd1be3db6b3: Og,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: Ws,
      __wbg_set_module_14e471fdd94c582d: iw,
      __wbg_set_entry_point_8db3b6d103e3b865: mg,
      __wbg_set_buffers_85a7238f4ef28ab4: G0,
      __wbg_set_layout_7c5ba5bdcde8a0f0: Jg,
      __wbg_set_vertex_a4951dd9a7a4ed54: cp,
      __wbg_set_label_c47c451211e2f6d2: Ug,
      __wbg_set_format_f9341112e43ea182: Dg,
      __wbg_set_depth_compare_30e9ea552da12fe2: _g,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: sg,
      __wbg_set_depth_bias_428c9340b0fd937b: X0,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: Y0,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: Z0,
      __wbg_set_compare_1509dc1a5420943f: j0,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: tg,
      __wbg_set_fail_op_77ab26c98f847b65: xg,
      __wbg_set_pass_op_e9470d1262fb8a8b: mw,
      __wbg_set_stencil_back_6ef4683123b19b25: Rw,
      __wbg_set_stencil_front_aeb8580a97e5424b: Lw,
      __wbg_set_stencil_read_mask_2954f260d47349ea: Gw,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: Uw,
      __wbg_set_depth_stencil_1bd50dbc450c8650: cg,
      __wbg_set_module_08ad08e736d8edbf: sw,
      __wbg_set_targets_6b0b3bdd87f35668: Jw,
      __wbg_set_entry_point_6fec5723cc790927: lg,
      __wbg_set_fragment_1a595620425637e1: Tg,
      __wbg_set_count_26a934d1cd07d080: J0,
      __wbg_set_mask_0c49a66362fc0079: _w,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: S0,
      __wbg_set_multisample_85f073947b782d07: fw,
      __wbg_set_cull_mode_9d466c1ab414cac8: K0,
      __wbg_set_front_face_50cdf4eb61504a46: Fg,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: Nw,
      __wbg_set_topology_beefb3aca0612b00: Yw,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: _p,
      __wbg_set_primitive_369241acd17871f1: xw,
      __wbg_createRenderPipeline_f48187ba9f7701e8: Hs,
      __wbg_set_entries_3017e6132f938c6e: wg,
      __wbg_set_label_1175a3329a06e52b: Eg,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: Cs,
      __wbg_limits_1c25cb4f379a4418: Tu,
      __wbg_set_color_attachments_abe67f6631926e28: q0,
      __wbg_set_label_8fd860a36d2c7b74: Gg,
      __wbg_set_view_dbd0294573f64d05: bp,
      __wbg_set_depth_clear_value_442bf492734f63b6: eg,
      __wbg_set_depth_load_op_34d430b74bb36d91: rg,
      __wbg_set_depth_store_op_0ea0a215313dbda7: bg,
      __wbg_set_depth_read_only_138a11b10c731094: ag,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: Ew,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: Ow,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: zw,
      __wbg_set_stencil_read_only_fb489d191b6d969b: Ww,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: og,
      __wbg_set_query_set_18679a8580267d5a: yw,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: C0,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: gg,
      __wbg_set_timestamp_writes_c552d52fbb417005: Xw,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: Sb,
      __wbg_copyTextureToTexture_1be188df1e535c0a: ks,
      __wbg_label_47480289cc2bce71: Au,
      __wbg_set_label_2d2227f4d5991e50: Lg,
      __wbg_finish_cfaeede3baf55be1: bf,
      __wbg_finish_087cb89c65c06eb1: of,
      __wbg_drawIndexed_68637ebab6dd8d6e: Ki,
      __wbg_setPipeline_bab24dbce96903b9: i0,
      __wbg_setViewport_f9d423db4f4b4b58: d0,
      __wbg_setBindGroup_4ba56e1e0d26f244: c0,
      __wbg_setBindGroup_6124849cc8547086: o0,
      __wbg_setIndexBuffer_17431786d06c1b7c: b0,
      __wbg_setIndexBuffer_a16ed5b869c87507: s0,
      __wbg_setVertexBuffer_b508baf8d0ffe331: u0,
      __wbg_setVertexBuffer_91c4b602d0289943: f0,
      __wbg_end_414453a89205612c: _f,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: Mf,
      __wbg_getCurrentTexture_51975ae7185fd15f: Df,
      __wbg_set_device_0d774b66e7288f72: ig,
      __wbg_set_format_d347899cd860709c: Ag,
      __wbg_set_usage_ae014e77ff77ce06: ap,
      __wbg_set_alpha_mode_92402195b3ae1ee7: v0,
      __wbg_set_view_formats_fe531a043efb71fa: up,
      __wbg_configure_3d64c677c7d68a15: Is,
      __wbg_writeBuffer_b4bdd36178348ca5: c2,
      __wbg_set_bytes_per_row_91681ca78d744888: W0,
      __wbg_set_rows_per_image_d198b7e73a38978b: Dw,
      __wbg_set_offset_a097a8050a3a9a33: ww,
      __wbg_writeTexture_b45b69132e46a227: o2,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: Dd,
      __wbg_submit_1290d44bb76ecef4: Ep,
      __wbg_getMappedRange_5ed22727c9679168: Pf,
      __wbg_unmap_8f06698a75b8331a: j1,
      __wbg_destroy_b5b39f25f0799295: Ci,
      __wbg_mapAsync_bb0029907dd91181: Cu,
      __wbg_set_dimension_174ad7e2fb67fb4e: fg,
      __wbg_set_format_90860b0321868db4: vg,
      __wbg_set_aspect_a823a14d00d42d37: T0,
      __wbg_set_base_array_layer_cc6c68d233489c4b: P0,
      __wbg_set_array_layer_count_daec613068108a9d: A0,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: k0,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: cw,
      __wbg_set_label_03d2396d4655a3e1: Vg,
      __wbg_set_usage_7f0dda8309469b1c: tp,
      __wbg_createView_cc96b5bdd3d5bf5e: ni,
      __wbg_set_min_binding_size_689661b9ed25e083: rw,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: Pg,
      __wbg_set_type_38961e08504ca674: Zw,
      __wbg_requestAdapter_c46930b8bc33722d: Xd,
      __wbg_set_alpha_aa2e606e9e647b21: $0,
      __wbg_set_color_bc393d7efc3c8594: H0,
      __wbg_set_visibility_1bca121a89accba5: dp,
      __wbg_set_storage_texture_ab9eed9786337ef0: Hw,
      __wbg_set_external_texture_825fe2bc7a0c0603: hg,
      __wbg_set_binding_b6b0fe5c281b8c69: V0,
      __wbg_set_buffer_e89095a9f0cafad3: O0,
      __wbg_set_sampler_8c5d7fb1b02058c6: Bw,
      __wbg_set_texture_e25a73da75cf5808: Qw,
      __wbg_set_view_dimension_263387976511ebc9: sp,
      __wbg_set_format_1786adb7bc74c7c9: yg,
      __wbg_set_access_091f317905cd76a5: m0,
      __wbg_set_format_abf7a1bc5425c56a: Sg,
      __wbg_set_blend_8d6e9c08b5702a09: E0,
      __wbg_set_write_mask_144b25e2bd909124: lp,
      __wbg_set_load_op_56844f51434037bf: Qg,
      __wbg_set_store_op_caeede4654b3d847: jw,
      __wbg_set_view_bdeab150b5f0768c: op,
      __wbg_set_clear_value_642701f928a5ccb3: z0,
      __wbg_set_resolve_target_fe76b3f99cf72078: Aw,
      __wbg_set_buffer_55f096330c8912b4: L0,
      __wbg_set_offset_73156b0e0b41d79a: dw,
      __wbg_set_size_1e6281b07cd39177: kw,
      __wbg_set_binding_f3c188a8cd21455b: R0,
      __wbg_set_resource_fe385d2e3dadaf63: Iw,
      __wbg_set_format_6606f5c1fba6f459: $g,
      __wbg_set_offset_8d9d9afffa18b591: gw,
      __wbg_set_shader_location_0ff30a733291a396: Pw,
      __wbg_set_array_stride_c2c009eabc18b5f6: I0,
      __wbg_set_attributes_05f9117fd32ca606: F0,
      __wbg_set_step_mode_a35aef328761c452: qw,
      __wbg_set_type_c1eebc19f8a6aeb9: ep,
      __wbg_set_multisampled_40505c1381e1c32c: uw,
      __wbg_set_sample_type_7088b1efddce6a69: Fw,
      __wbg_set_view_dimension_3ed01b237e85826f: ip,
      __wbg_includes_83dff8d05da243c5: cu,
      __wbg_clearBufferuiv_1d2d93401c0904a3: bs,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: $s,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: Ss,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: As,
      __wbg_copyBufferSubData_a944f33b601b822d: Ts,
      __wbg_clientWaitSync_7580165bd2eff461: ws,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: vs,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: Ps,
      __wbg_createQuery_f013132b870a71ef: qs,
      __wbg_createSampler_9fe50152a2524319: Ks,
      __wbg_createVertexArray_8685feb21901c932: ri,
      __wbg_deleteQuery_ef51ea0a52420103: wi,
      __wbg_deleteSampler_5c045e0cc55813d4: mi,
      __wbg_getIndexedParameter_2b18df6fca85f751: Bf,
      __wbg_getQueryParameter_0599e85ddb81220b: Of,
      __wbg_getSyncParameter_9a2bda340ebe166f: jf,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: Nf,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: mu,
      __wbg_deleteSync_37ca83c429c43d8a: yi,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: Ai,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: zi,
      __wbg_drawBuffers_558d96e52e754731: ji,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: Ji,
      __wbg_endQuery_161170c5280a8293: ef,
      __wbg_fenceSync_56efc7cc79111e54: cf,
      __wbg_framebufferTextureLayer_2312acdc74f97676: lf,
      __wbg_getBufferSubData_92680d3a2f7be029: $f,
      __wbg_readBuffer_361ec5474f3aae49: zd,
      __wbg_readPixels_5840000f3e22f3ce: qd,
      __wbg_readPixels_5bf204799ed2272f: Hd,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: jd,
      __wbg_texImage3D_8647ef58aef5b912: zp,
      __wbg_texStorage2D_ed5df596c5f1e3af: Hp,
      __wbg_texStorage3D_160b0197bc190f04: jp,
      __wbg_texSubImage2D_f03448e182b0820d: e1,
      __wbg_texSubImage2D_d14d9c0a1f627c31: Zp,
      __wbg_texSubImage2D_89866a04ecd0a76b: Qp,
      __wbg_texSubImage2D_5c630043f1c56716: Kp,
      __wbg_samplerParameterf_3157ba41c0f4d97a: _0,
      __wbg_samplerParameteri_f85a29156e790189: t0,
      __wbg_texImage2D_0e0f37b9fb297d01: Lp,
      __wbg_texImage2D_0e537dc331652de3: Op,
      __wbg_texImage3D_30dbf7234481b8f5: Wp,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: Jp,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: Xp,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: Yp,
      __wbg_texSubImage3D_933e4cd41cc5376d: a1,
      __wbg_texSubImage3D_c3538b28040daac9: o1,
      __wbg_uniform1ui_36c94692177ebf76: w1,
      __wbg_uniform2fv_17592f4dad9798fb: p1,
      __wbg_uniform2iv_d5d29ebbc466977d: h1,
      __wbg_texSubImage3D_0fdbd843482bb916: t1,
      __wbg_texSubImage3D_09a97a968b93253d: _1,
      __wbg_texSubImage3D_355efde0dc047913: r1,
      __wbg_texSubImage3D_bd32c8e29e470904: c1,
      __wbg_texSubImage3D_5a238709d114b609: n1,
      __wbg_uniform2uiv_418ba3bf6a230dd5: x1,
      __wbg_uniform4fv_9e670a001c77dca0: F1,
      __wbg_uniform4iv_1d57c6b8e5c0e447: B1,
      __wbg_uniform3fv_dbe44b778e6b89e8: $1,
      __wbg_uniform3iv_d75d3a5f86d54be4: S1,
      __wbg_uniform3uiv_71c1efc24a662de9: A1,
      __wbg_uniform4uiv_c5d45f5dbdae727a: k1,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: L1,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: G1,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: W1,
      __wbg_uniformBlockBinding_829a71912ad79a04: C1,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: M1,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: R1,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: E1,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: z1,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: Y1,
      __wbg_activeTexture_525ee3068cb9e8d5: mb,
      __wbg_attachShader_3477e67517b09b6b: yb,
      __wbg_bindAttribLocation_79b5d26727094518: Ab,
      __wbg_bindBuffer_d3111de6861cb875: Tb,
      __wbg_bindFramebuffer_63e837a5dc0accfb: Pb,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: kb,
      __wbg_bindTexture_7ab28ff4ff3dc506: Vb,
      __wbg_blendColor_15f26633b646e542: Ob,
      __wbg_blendEquation_7dadb4db540a42da: Ub,
      __wbg_blendEquationSeparate_8240ddfa32266109: Wb,
      __wbg_blendFunc_b15af02643e188f1: Jb,
      __wbg_blendFuncSeparate_456410f9919bed39: jb,
      __wbg_clear_dadcb3e2929388b0: ds,
      __wbg_clearDepth_05c17028494ee4dd: ss,
      __wbg_clearStencil_917833d1e2ac56e4: us,
      __wbg_colorMask_f111e3e5796458f4: ms,
      __wbg_compileShader_f5625b583b2c9fd6: hs,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: q1,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: H1,
      __wbg_vertexAttribDivisor_f17a8585267be92f: X1,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: Fs,
      __wbg_createBuffer_9f602b2dbcbf409c: Es,
      __wbg_createFramebuffer_4a250944a4542bbc: Os,
      __wbg_createProgram_4c8164d471c10346: zs,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: Ns,
      __wbg_createShader_9c5cd42709d915ff: Ys,
      __wbg_createTexture_3eed23cb87dd35fc: Zs,
      __wbg_cullFace_94f24b4fd5e9038b: oi,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: si,
      __wbg_getExtension_11824edd67a143d8: Ff,
      __wbg_getParameter_7f7f23cae98f2c81: kf,
      __wbg_getProgramInfoLog_cd84be80942f345b: Rf,
      __wbg_getProgramParameter_039391d5ba319f50: Ef,
      __wbg_getShaderInfoLog_495bddda98172699: Gf,
      __wbg_getShaderParameter_4eb65cfb174ceb22: zf,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: qf,
      __wbg_getUniformLocation_ab63f569a4e41744: Kf,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: fi,
      __wbg_deleteProgram_eff668280dcb01ca: gi,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: li,
      __wbg_deleteShader_3339454254c7147c: hi,
      __wbg_deleteTexture_c1c58550dc55af5c: vi,
      __wbg_depthFunc_31b183b5b8ee478e: Ii,
      __wbg_depthMask_cab7f2ae7f0e559c: Fi,
      __wbg_depthRange_797a71ba3b79267a: Bi,
      __wbg_disable_cb1b3e6c1cee5202: Li,
      __wbg_disableVertexAttribArray_b395358ec5084c39: Ri,
      __wbg_drawArrays_42dbb4b0349c8f34: qi,
      __wbg_enable_d1f42f78be33a553: Zi,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: Qi,
      __wbg_flush_7ae42f071230db6b: sf,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: gf,
      __wbg_framebufferTexture2D_367ab597a005e8d9: wf,
      __wbg_frontFace_9bdcf2a758e989e5: hf,
      __wbg_linkProgram_e23a348b0f6e0c4f: Pu,
      __wbg_pixelStorei_a78a504be58d1d0a: Fd,
      __wbg_polygonOffset_a4f07d97b9b0dced: Pd,
      __wbg_renderbufferStorage_3049e13db5c4e60e: Jd,
      __wbg_scissor_6c024669fbf4fe72: r0,
      __wbg_vertexAttribPointer_4e5d289c5d224210: e2,
      __wbg_viewport_a0ca330f9b85397e: _2,
      __wbg_shaderSource_66dce75b25a1a407: $p,
      __wbg_stencilFuncSeparate_ec603976be9569a4: Bp,
      __wbg_stencilMask_485dcb5965c79a71: Cp,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: kp,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: Vp,
      __wbg_texParameteri_c6efffcecb474d2f: Up,
      __wbg_uniform1f_3acd3f3eb50b5e11: f1,
      __wbg_uniform1i_e4f13604354c28ae: g1,
      __wbg_uniform4f_a5008773cfb47d1a: D1,
      __wbg_useProgram_ab2ee2a13a1fd909: J1,
      __wbg_bufferSubData_2270f1b9db71e642: es,
      __wbg_clearBufferfv_6b77b9402254a2bf: cs,
      __wbg_clearBufferiv_0f056544010eef3e: os,
      __wbg_beginQuery_dad334d972fed3cc: vb,
      __wbg_bindBufferRange_16a9d90becc2a7d7: Db,
      __wbg_bindSampler_3c7002cb6d56ae8f: Mb,
      __wbg_bindVertexArray_c391bd47303d75cd: Lb,
      __wbg_blitFramebuffer_ea96ada8bba07582: Kb,
      __wbg_bufferData_64e9905f2b3d3a6f: Yb,
      __wbg_bufferData_99bbbc63f02251c4: Zb,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: pu,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: Yd,
      __wbg_navigator_935098efd1dc7fe5: ud,
      __wbg_devicePixelRatio_8e5ca44720abafec: Mi,
      __wbg_document_2634180a4c694068: Oi,
      __wbg_instanceof_Window_0d356b88a2f77c42: lu,
      __wbg_hidden_cb32701ca3785fea: au,
      __wbg_getElementById_c7aba6b93b34bf01: Tf,
      __wbg_querySelector_1f3658f4b48e268b: Ld,
      __wbg_querySelectorAll_ffda3c891a9eb29a: Ed,
      __wbg_hasAttribute_73e1230c9c107e79: tu,
      __wbg_setAttribute_8bccfbabf2a83682: a0,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: yf,
      __wbg_focus_c80921c19b28520b: uf,
      __wbg_uniform2iv_c5e863975dd780d8: m1,
      __wbg_uniform3fv_7723e142be50856f: y1,
      __wbg_uniform3iv_bea3976522e15d48: v1,
      __wbg_uniform4fv_85ad5d23234895d2: T1,
      __wbg_clear_ff8cfdf420f7dde6: gs,
      __wbg_clearDepth_ac6b54f112feeaf7: is,
      __wbg_clearStencil_56d6a6308294a749: fs,
      __wbg_colorMask_b0ab9d429a1efa0a: ls,
      __wbg_compileShader_fcf3f3d2891f73f9: xs,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: Bs,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: Vs,
      __wbg_createFramebuffer_ab73f30b5dc97415: Gs,
      __wbg_createProgram_f11c63f59f41b82a: Us,
      __wbg_createRenderbuffer_556000dbb01f5026: js,
      __wbg_createShader_27d9388313f3b14e: Xs,
      __wbg_createTexture_8455c703424c567b: ei,
      __wbg_cullFace_774780fb4177aab8: ci,
      __wbg_deleteBuffer_d758283bea6e0ccf: ii,
      __wbg_deleteFramebuffer_8953b325144192fe: ui,
      __wbg_deleteProgram_0135c6926e75af75: di,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: pi,
      __wbg_deleteShader_79dbaaed69b7ca3b: xi,
      __wbg_deleteTexture_3acb672a45f9998a: $i,
      __wbg_depthFunc_eaca1bc79f7bf216: Di,
      __wbg_depthMask_3a9074b08d1f68e5: Ti,
      __wbg_depthRange_c24a808b3496e0a9: Pi,
      __wbg_uniform4iv_a9aaa92f2f458ec2: P1,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: V1,
      __wbg_uniformMatrix3fv_da8c388748c5739b: O1,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: U1,
      __wbg_activeTexture_1d5359b20df41710: lb,
      __wbg_attachShader_683d1070365e7066: $b,
      __wbg_bindAttribLocation_d56d3c40331af7ed: Ib,
      __wbg_bindBuffer_e95efaf0d4851845: Fb,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: Bb,
      __wbg_bindRenderbuffer_d608b211c51ed147: Cb,
      __wbg_bindTexture_ffc56f1e5c5526c6: Rb,
      __wbg_blendColor_a0ba1cdcecc3a34c: Gb,
      __wbg_blendEquation_8bfa69f639ae92da: qb,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: zb,
      __wbg_blendFunc_713c504adab14f98: Nb,
      __wbg_blendFuncSeparate_3eef699c291dbc87: Hb,
      __wbg_disable_4dca6ee0ccc91e4a: Ei,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: Vi,
      __wbg_drawArrays_10e1254aa4524ae9: Ui,
      __wbg_enable_c6e523307311617a: Yi,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: Xi,
      __wbg_flush_eb3fb8da2ec00d57: ff,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: df,
      __wbg_linkProgram_6a2eee02a03b9b00: Bu,
      __wbg_pixelStorei_55ad4c67b699537c: Td,
      __wbg_polygonOffset_06dc6468c12a57e1: Bd,
      __wbg_renderbufferStorage_2918fb696fd45663: Nd,
      __wbg_scissor_f9696c630e464977: n0,
      __wbg_shaderSource_628c37a476ae65f9: yp,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: Fp,
      __wbg_stencilMask_f9fe198f7fd6fc9c: Mp,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: Pp,
      __wbg_stencilOpSeparate_6cf50803475d2640: Rp,
      __wbg_texParameteri_fe6210a493d48a16: qp,
      __wbg_framebufferTexture2D_3a558e14f56720d2: pf,
      __wbg_frontFace_c9bb1fa659ffd276: xf,
      __wbg_getParameter_91a344e1a84a4669: Cf,
      __wbg_getProgramInfoLog_35410850de9ccefe: Vf,
      __wbg_getProgramParameter_bbc667347ac2e882: Lf,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: Wf,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: Uf,
      __wbg_getUniformLocation_340155dc706d3fea: Jf,
      __wbg_uniform1f_d34e4b454f7c8e73: u1,
      __wbg_uniform1i_cd9a7f990128ea48: d1,
      __wbg_uniform4f_4410d2faaa7e5dda: I1,
      __wbg_useProgram_0e1cd86765304939: N1,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: Z1,
      __wbg_viewport_b5bd46a0d111c83c: t2,
      __wbg_texSubImage2D_1b2ff28f994c325e: Np,
      __wbg_uniform2fv_39277cf2d3cb83c7: l1,
      __wbg_bufferData_5df9bdb32e189eee: Xb,
      __wbg_bufferData_26132561617ce8fb: Qb,
      __wbg_bufferSubData_44db8a3b4a70b57d: _s,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: ys,
      __wbg_readPixels_05377f8b6fa1d8eb: Ud,
      __wbg_texImage2D_7bc3001cb8602ed2: Gp,
      __wbg_navigator_017bc45e84c473cc: fd,
      __wbg_log_d282446d03691e72: ku,
      __wbg_info_a392cd5b7536cfb5: bu,
      __wbg_warn_88c4a5bd9a322000: r2,
      __wbg_debug_7271beced8b71cd4: bi,
      __wbg_error_933f449d72fef598: nf,
      __wbg_error_50f60c611a3dcf64: rf,
      __wbg_set_width_031bdecd763c5855: gp,
      __wbg_set_height_ad5056ea051acd78: kg,
      __wbg_getContext_486aab500e1c34c9: Sf,
      __wbg_getContext_9fd4db9b1cf155db: If,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: uu,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: Hi,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: Hf,
      __wbg_width_a86bcd32bd998060: a2,
      __wbg_height_cd732bbdc7b66e49: ru,
      __wbg_queryCounterEXT_ebb00bcc96221671: Rd,
      __wbg_offsetX_0214819d43aaf6d5: Ad,
      __wbg_offsetY_f18f571e33b385ab: Id,
      __wbg_button_bb3285fcdf965178: ts,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: Wi,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: Ni,
      __wbg_get_37b48b8fa52d1f2c: Xf,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: Q1,
      __wbg_preventDefault_c047d3e292b08cc4: kd,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: mf,
      __wbg_width_08e66520b99071f4: n2,
      __wbg_height_e9afb506f31052a9: nu,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: Eb,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: ti,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: Si,
      __wbg_set_width_f9e631f4ee129e5c: pp,
      __wbg_set_height_ef298446b359b0c5: Mg,
      __wbg_getContext_70c2d1bed75d4122: Af,
      __wbg_getContext_422b32d0ee4b8076: vf,
      __wbg_addEventListener_ea90bc131475777e: hb,
      __wbg_contentRect_0fb8c8900d689a0c: Ds,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: gu,
      __wbg_new_1e52e3c919312525: dd,
      __wbg_observe_592b94857eed8e27: vd,
      __wbg_altKey_7412dd64f8c921c7: xb,
      __wbg_ctrlKey_00097886a21597a7: ai,
      __wbg_shiftKey_273ee8c901267b55: vp,
      __wbg_metaKey_1c2847b62ad062c1: bd,
      __wbg_repeat_46a5c90df9f6ef0b: Kd,
      __wbg_isComposing_e3709163a95a2477: xu,
      __wbg_key_d6b3d2cce3d41872: Su,
      __wbg_code_87bb99fdec02d313: ps,
      __wbg_resolve_d82363d90af6928a: e0,
      __wbg_then_591b6b3a75ee817a: i1,
      __wbg_iterator_cc47ba25a2be735a: vu,
      __wbg_get_9a29be2cb383ed9a: Yf,
      __wbg_next_402fa10b59ab20c3: $d,
      __wbg_new_2e117a478906f062: wd,
      __wbg_new_36e147a8ced3c6e0: pd,
      __wbg_of_62183ea089c00bfa: Sd,
      __wbg_isArray_145a34fd0a38d37b: hu,
      __wbg_new_e66a4b7758dd2e5c: md,
      __wbg_isSafeInteger_a3389a198582f5f6: yu,
      __wbg_is_de5b366c746e004c: $u,
      __wbg_entries_c261c3fa1f281256: tf,
      __wbg_then_2a84678a50976959: s1,
      __wbg_length_589238bdcf171f0e: Iu,
      __wbg_prototypesetcall_d721637c7ca66eb8: Md,
      __wbg_set_272b80acaf9a75e8: g0,
      __wbg_new_81880fb5002cb255: ld,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: xd,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: Ap,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: Dp,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Ip,
      __wbg_static_accessor_WINDOW_168f178805d978fe: Tp,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: su,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: wu,
      __wbg_queueMicrotask_1c9b3800e321a967: Od,
      __wbg_queueMicrotask_311744e534a929a3: Gd,
      __wbg_set_4564f7dc44fcb0c9: w0,
      __wbg___wbindgen_number_get_1cc01dd708740256: db,
      __wbg___wbindgen_in_4990f46af709e33c: nb,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: wb,
      __wbg___wbindgen_is_null_6d937fbfb6478470: ob,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: fb,
      __wbg_Number_c4bdf66bb78f7977: Xo,
      __wbg_Error_fdd633d4bb5dd76a: Qo,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: ab,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: bb,
      __wbg___wbindgen_is_string_1fca8072260dd261: sb,
      __wbg___wbindgen_string_get_71bb4348194e31f0: gb,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: tb,
      __wbg___wbindgen_is_function_acc5528be2b923f2: cb,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: ib,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: ub,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: _b,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: pb,
      __wbg___wbindgen_debug_string_8a447059637473e2: rb,
      __wbindgen_init_externref_table: D2,
      __wbindgen_cast_0000000000000001: b2,
      __wbindgen_cast_0000000000000002: s2,
      __wbindgen_cast_0000000000000003: i2,
      __wbindgen_cast_0000000000000004: f2,
      __wbindgen_cast_0000000000000005: u2,
      __wbindgen_cast_0000000000000006: d2,
      __wbindgen_cast_0000000000000007: g2,
      __wbindgen_cast_0000000000000008: w2,
      __wbindgen_cast_0000000000000009: p2,
      __wbindgen_cast_000000000000000a: l2,
      __wbindgen_cast_000000000000000b: m2,
      __wbindgen_cast_000000000000000c: h2,
      __wbindgen_cast_000000000000000d: x2,
      __wbindgen_cast_000000000000000e: y2,
      __wbindgen_cast_000000000000000f: $2,
      __wbindgen_cast_0000000000000010: v2,
      __wbindgen_cast_0000000000000011: S2,
      __wbindgen_cast_0000000000000012: A2,
      __wbindgen_cast_0000000000000013: I2
    }
  }, Jo), { memory: f3, mount: u3, __wbg_proteusapp_free: d3, proteusapp_addChild: g3, proteusapp_animateTo: w3, proteusapp_bakeTexture: p3, proteusapp_bakedImageSize: l3, proteusapp_bakedTextSize: m3, proteusapp_channelDestroy: h3, proteusapp_channelSet: x3, proteusapp_clearFocus: y3, proteusapp_component: $3, proteusapp_copyBakedImageFrom: v3, proteusapp_createVideo: S3, proteusapp_cropImage: A3, proteusapp_declareGeometry: I3, proteusapp_declaredGeometry: D3, proteusapp_destroy: T3, proteusapp_devices: F3, proteusapp_focus: B3, proteusapp_focused: P3, proteusapp_freeResources: k3, proteusapp_get: C3, proteusapp_hideVideo: M3, proteusapp_inputDevices: V3, proteusapp_isFocused: R3, proteusapp_loadTexture: E3, proteusapp_mergeFrom: L3, proteusapp_mergeFromWithBehavior: O3, proteusapp_new: G3, proteusapp_onBlur: W3, proteusapp_onClick: z3, proteusapp_onDrag: U3, proteusapp_onDropped: q3, proteusapp_onFocus: H3, proteusapp_onFocusLost: j3, proteusapp_onHoverEnter: N3, proteusapp_onHoverExit: J3, proteusapp_onPress: K3, proteusapp_onRelease: Q3, proteusapp_onTransitionComplete: X3, proteusapp_pointerLeft: Y3, proteusapp_pointerMoved: Z3, proteusapp_pointerPressed: el, proteusapp_pointerReleased: _l, proteusapp_releaseVideo: tl, proteusapp_removeChild: rl, proteusapp_setDeclaredGeometry: nl, proteusapp_setDefaultFocus: al, proteusapp_setDevices: cl, proteusapp_setDisabled: ol, proteusapp_setImage: bl, proteusapp_setInputDevices: sl, proteusapp_setInteractive: il, proteusapp_setOpacity: fl, proteusapp_setText: ul, proteusapp_setTexture: dl, proteusapp_setTransitionInteraction: gl, proteusapp_setVideoCrossfade: wl, proteusapp_setVisible: pl, proteusapp_showVideo: ll, proteusapp_splitTo: ml, proteusapp_splitToWithBehavior: hl, proteusapp_splitToWithStates: xl, proteusapp_texture: yl, proteusapp_textureState: $l, proteusapp_tick: vl, proteusapp_transitionChannel: Sl, proteusapp_uploadVideoFrame: Al, __wbg_handle_free: Il, __wbg_texturehandle_free: Dl, __wbg_transitionchannel_free: Tl, __wbg_videohandle_free: Fl, handle_fromId: Bl, handle_id: Pl, texturehandle_fromId: kl, texturehandle_id: Cl, __abort_handler: Ml, __instance_terminated: Vl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: Rl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: El, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: Ll, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Ol, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: Gl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: Wl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: zl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: Ul, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: ql, __wbindgen_malloc: Hl, __wbindgen_realloc: jl, __wbindgen_exn_store: Nl, __externref_table_alloc: Jl, __wbindgen_externrefs: Kl, __wbindgen_free: Ql, __wbindgen_destroy_closure: Xl, __externref_table_dealloc: Yl, __wbindgen_start: zt } = i3, Zl = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: Ml,
    __externref_table_alloc: Jl,
    __externref_table_dealloc: Yl,
    __instance_terminated: Vl,
    __wbg_handle_free: Il,
    __wbg_proteusapp_free: d3,
    __wbg_texturehandle_free: Dl,
    __wbg_transitionchannel_free: Tl,
    __wbg_videohandle_free: Fl,
    __wbindgen_destroy_closure: Xl,
    __wbindgen_exn_store: Nl,
    __wbindgen_externrefs: Kl,
    __wbindgen_free: Ql,
    __wbindgen_malloc: Hl,
    __wbindgen_realloc: jl,
    __wbindgen_start: zt,
    handle_fromId: Bl,
    handle_id: Pl,
    memory: f3,
    mount: u3,
    proteusapp_addChild: g3,
    proteusapp_animateTo: w3,
    proteusapp_bakeTexture: p3,
    proteusapp_bakedImageSize: l3,
    proteusapp_bakedTextSize: m3,
    proteusapp_channelDestroy: h3,
    proteusapp_channelSet: x3,
    proteusapp_clearFocus: y3,
    proteusapp_component: $3,
    proteusapp_copyBakedImageFrom: v3,
    proteusapp_createVideo: S3,
    proteusapp_cropImage: A3,
    proteusapp_declareGeometry: I3,
    proteusapp_declaredGeometry: D3,
    proteusapp_destroy: T3,
    proteusapp_devices: F3,
    proteusapp_focus: B3,
    proteusapp_focused: P3,
    proteusapp_freeResources: k3,
    proteusapp_get: C3,
    proteusapp_hideVideo: M3,
    proteusapp_inputDevices: V3,
    proteusapp_isFocused: R3,
    proteusapp_loadTexture: E3,
    proteusapp_mergeFrom: L3,
    proteusapp_mergeFromWithBehavior: O3,
    proteusapp_new: G3,
    proteusapp_onBlur: W3,
    proteusapp_onClick: z3,
    proteusapp_onDrag: U3,
    proteusapp_onDropped: q3,
    proteusapp_onFocus: H3,
    proteusapp_onFocusLost: j3,
    proteusapp_onHoverEnter: N3,
    proteusapp_onHoverExit: J3,
    proteusapp_onPress: K3,
    proteusapp_onRelease: Q3,
    proteusapp_onTransitionComplete: X3,
    proteusapp_pointerLeft: Y3,
    proteusapp_pointerMoved: Z3,
    proteusapp_pointerPressed: el,
    proteusapp_pointerReleased: _l,
    proteusapp_releaseVideo: tl,
    proteusapp_removeChild: rl,
    proteusapp_setDeclaredGeometry: nl,
    proteusapp_setDefaultFocus: al,
    proteusapp_setDevices: cl,
    proteusapp_setDisabled: ol,
    proteusapp_setImage: bl,
    proteusapp_setInputDevices: sl,
    proteusapp_setInteractive: il,
    proteusapp_setOpacity: fl,
    proteusapp_setText: ul,
    proteusapp_setTexture: dl,
    proteusapp_setTransitionInteraction: gl,
    proteusapp_setVideoCrossfade: wl,
    proteusapp_setVisible: pl,
    proteusapp_showVideo: ll,
    proteusapp_splitTo: ml,
    proteusapp_splitToWithBehavior: hl,
    proteusapp_splitToWithStates: xl,
    proteusapp_texture: yl,
    proteusapp_textureState: $l,
    proteusapp_tick: vl,
    proteusapp_transitionChannel: Sl,
    proteusapp_uploadVideoFrame: Al,
    texturehandle_fromId: kl,
    texturehandle_id: Cl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: ql,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: Rl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: Gl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: Wl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: zl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: Ul,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: Ll,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Ol,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: El
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  s3(Zl);
  zt();
  async function e4(_, e) {
    await Ko(_, (t) => e.setup(new r4(t)), e.update ? (t) => {
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
      const a = new Float64Array(e.map((c) => c.id()));
      n ? this.app.wasmApp.splitToWithBehavior(this.wasmHandle, a, t, r, n) : this.app.wasmApp.splitTo(this.wasmHandle, a, t, r);
    }
    mergeFrom(e, t, r, n) {
      const a = new Float64Array(e.map((c) => c.id()));
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
  }, _4 = class {
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
  }, je = class {
    constructor(e, t) {
      this.app = e, this.wasmHandle = t;
    }
    id() {
      return this.wasmHandle.id();
    }
    state() {
      return this.app.wasmApp.textureState(this.wasmHandle);
    }
  }, t4 = class {
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
  }, r4 = class {
    constructor(e) {
      this.wasmApp = e ?? new D_();
    }
    component(e) {
      return new l_(this, this.wasmApp.component(e));
    }
    handleFromId(e) {
      return new l_(this, x.fromId(e));
    }
    transitionChannel(e) {
      return new _4(this, this.wasmApp.transitionChannel(e == null ? void 0 : e.id()));
    }
    texture(e) {
      return new je(this, this.wasmApp.texture(e));
    }
    loadTexture(e, t) {
      const r = this.wasmApp.loadTexture(e, t ?? null);
      return r ? new je(this, r) : void 0;
    }
    bakeTexture(e, t, r, n) {
      return new je(this, this.wasmApp.bakeTexture(e, t, r, n ?? null));
    }
    createVideo() {
      return new t4(this, this.wasmApp.createVideo());
    }
    textureFromId(e) {
      return new je(this, K.fromId(e));
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
  const n4 = "" + new URL("proteus_bench_web_bg-BdffVrFI.wasm", import.meta.url).href;
  class h {
    static __wrap(e) {
      const t = Object.create(h.prototype);
      return t.__wbg_ptr = e, yt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, yt.unregister(this), e;
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
      const a = h_(r, s.__wbindgen_malloc), c = M, o = s.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, c, n);
      return j.__wrap(o);
    }
    bakedImageSize(e) {
      return m(e, h), s.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return m(e, h), s.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    channelDestroy(e) {
      m(e, Q);
      var t = e.__destroy_into_raw();
      s.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      m(e, Q), m(t, h), m(r, h);
      const c = s.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (c[1]) throw P(c[0]);
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
      const r = h_(e, s.__wbindgen_malloc), n = M, a = s.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : j.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      m(e, h);
      const a = __(t, s.__wbindgen_malloc), c = M, o = s.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, c, r, n);
      if (o[1]) throw P(o[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      m(e, h);
      const c = __(t, s.__wbindgen_malloc), o = M, b = s.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, c, o, r, n, a);
      if (b[1]) throw P(b[0]);
    }
    constructor() {
      const e = s.proteusapp_new();
      return this.__wbg_ptr = e, m_.register(this, this.__wbg_ptr, this), this;
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
      m(e, h), m(t, j);
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
      const a = __(t, s.__wbindgen_malloc), c = M, o = s.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, c, r, n);
      if (o[1]) throw P(o[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      m(e, h);
      const c = __(t, s.__wbindgen_malloc), o = M, b = s.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, c, o, r, n, a);
      if (b[1]) throw P(b[0]);
    }
    splitToWithStates(e, t, r, n) {
      m(e, h);
      const a = s.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw P(a[0]);
    }
    texture(e) {
      const t = s.proteusapp_texture(this.__wbg_ptr, e);
      return j.__wrap(t);
    }
    textureState(e) {
      return m(e, j), s.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
    }
    tick(e) {
      s.proteusapp_tick(this.__wbg_ptr, e);
    }
    transitionChannel(e) {
      const t = s.proteusapp_transitionChannel(this.__wbg_ptr, !v(e), v(e) ? 0 : e);
      return Q.__wrap(t);
    }
    uploadVideoFrame(e, t, r, n) {
      m(e, X);
      const a = h_(n, s.__wbindgen_malloc), c = M;
      return s.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, c) !== 0;
    }
  }
  Symbol.dispose && (De.prototype[Symbol.dispose] = De.prototype.free);
  class j {
    static __wrap(e) {
      const t = Object.create(j.prototype);
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
      return j.__wrap(t);
    }
    id() {
      return s.texturehandle_id(this.__wbg_ptr);
    }
  }
  Symbol.dispose && (j.prototype[Symbol.dispose] = j.prototype.free);
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
  function a4() {
    s.clear();
  }
  function c4(_) {
    s.on_frame(_);
  }
  function o4(_, e) {
    const t = G(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = M;
    s.show(t, r, e);
  }
  function b4(_, e) {
    const t = G(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = M;
    return s.start(t, r, e);
  }
  function s4() {
    s.stop_frames();
  }
  function i4(_, e) {
    return Error(S(_, e));
  }
  function f4(_) {
    return Number(_);
  }
  function u4(_, e) {
    const t = String(e), r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function d4(_) {
    return _.Window;
  }
  function g4(_) {
    return _.WorkerGlobalScope;
  }
  function w4(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    k().setBigInt64(_ + 8, v(r) ? BigInt(0) : r, true), k().setInt32(_ + 0, !v(r), true);
  }
  function p4(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return v(t) ? 16777215 : t ? 1 : 0;
  }
  function l4(_, e) {
    const t = M_(e), r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function m4(_, e) {
    return _ in e;
  }
  function h4(_) {
    return typeof _ == "bigint";
  }
  function x4(_) {
    return typeof _ == "function";
  }
  function y4(_) {
    return _ === null;
  }
  function $4(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function v4(_) {
    return typeof _ == "string";
  }
  function S4(_) {
    return _ === void 0;
  }
  function A4(_, e) {
    return _ === e;
  }
  function I4(_, e) {
    return _ == e;
  }
  function D4(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    k().setFloat64(_ + 8, v(r) ? 0 : r, true), k().setInt32(_ + 0, !v(r), true);
  }
  function T4(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function F4(_, e) {
    throw new Error(S(_, e));
  }
  function B4(_) {
    _._wbg_cb_unref();
  }
  function P4(_) {
    _.abort();
  }
  function k4(_) {
    return _.aborted;
  }
  function C4(_, e) {
    _.activeTexture(e >>> 0);
  }
  function M4(_, e) {
    _.activeTexture(e >>> 0);
  }
  function V4() {
    return g(function(_, e, t, r) {
      _.addEventListener(S(e, t), r);
    }, arguments);
  }
  function R4(_) {
    return _.altKey;
  }
  function E4() {
    return g(function(_) {
      return _.arrayBuffer();
    }, arguments);
  }
  function L4(_, e, t) {
    _.attachShader(e, t);
  }
  function O4(_, e, t) {
    _.attachShader(e, t);
  }
  function G4(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function W4() {
    return g(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function z4(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function U4(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function q4(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function H4(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function j4(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function N4(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function J4(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function K4(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Q4(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function X4(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function Y4(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Z4(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function em(_, e) {
    _.bindVertexArrayOES(e);
  }
  function _m(_, e) {
    _.bindVertexArray(e);
  }
  function tm(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function rm(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function nm(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function am(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function cm(_, e) {
    _.blendEquation(e >>> 0);
  }
  function om(_, e) {
    _.blendEquation(e >>> 0);
  }
  function bm(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function sm(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function im(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function fm(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function um(_, e, t, r, n, a, c, o, b, f, d) {
    _.blitFramebuffer(e, t, r, n, a, c, o, b, f >>> 0, d >>> 0);
  }
  function dm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function gm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function wm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function pm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function lm(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function mm(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function hm(_) {
    return _.button;
  }
  function xm() {
    return g(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function ym() {
    return g(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function $m() {
    return g(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function vm(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, L(r, n));
  }
  function Sm(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, ee(r, n));
  }
  function Am(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, $e(r, n));
  }
  function Im(_, e) {
    _.clearDepth(e);
  }
  function Dm(_, e) {
    _.clearDepth(e);
  }
  function Tm(_, e) {
    _.clearStencil(e);
  }
  function Fm(_, e) {
    _.clearStencil(e);
  }
  function Bm(_, e) {
    _.clear(e >>> 0);
  }
  function Pm(_, e) {
    _.clear(e >>> 0);
  }
  function km(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function Cm(_, e) {
    const t = e.code, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function Mm(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Vm(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Rm(_, e) {
    _.compileShader(e);
  }
  function Em(_, e) {
    _.compileShader(e);
  }
  function Lm(_, e, t, r, n, a, c, o, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b);
  }
  function Om(_, e, t, r, n, a, c, o, b) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b);
  }
  function Gm(_, e, t, r, n, a, c, o, b, f) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b, f);
  }
  function Wm(_, e, t, r, n, a, c, o, b, f, d, A) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, c, o, b, f >>> 0, d, A);
  }
  function zm(_, e, t, r, n, a, c, o, b, f, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, c, o, b, f >>> 0, d);
  }
  function Um() {
    return g(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function qm(_) {
    return _.contentRect;
  }
  function Hm(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function jm(_, e, t, r, n, a, c, o, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, c, o, b);
  }
  function Nm(_, e, t, r, n, a, c, o, b) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, c, o, b);
  }
  function Jm(_, e, t, r, n, a, c, o, b, f) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, c, o, b, f);
  }
  function Km() {
    return g(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function Qm() {
    return g(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function Xm(_, e) {
    return _.createBindGroup(e);
  }
  function Ym(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : T(e);
  }
  function Zm() {
    return g(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function e7(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : T(e);
  }
  function _7(_, e) {
    return _.createCommandEncoder(e);
  }
  function t7(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : T(e);
  }
  function r7(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : T(e);
  }
  function n7(_, e) {
    return _.createPipelineLayout(e);
  }
  function a7(_) {
    const e = _.createProgram();
    return v(e) ? 0 : T(e);
  }
  function c7(_) {
    const e = _.createProgram();
    return v(e) ? 0 : T(e);
  }
  function o7(_) {
    const e = _.createQuery();
    return v(e) ? 0 : T(e);
  }
  function b7() {
    return g(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function s7(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : T(e);
  }
  function i7(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : T(e);
  }
  function f7(_, e) {
    return _.createSampler(e);
  }
  function u7(_) {
    const e = _.createSampler();
    return v(e) ? 0 : T(e);
  }
  function d7(_, e) {
    return _.createShaderModule(e);
  }
  function g7(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : T(t);
  }
  function w7(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : T(t);
  }
  function p7(_) {
    const e = _.createTexture();
    return v(e) ? 0 : T(e);
  }
  function l7(_) {
    const e = _.createTexture();
    return v(e) ? 0 : T(e);
  }
  function m7() {
    return g(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function h7(_) {
    const e = _.createVertexArrayOES();
    return v(e) ? 0 : T(e);
  }
  function x7(_) {
    const e = _.createVertexArray();
    return v(e) ? 0 : T(e);
  }
  function y7() {
    return g(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function $7(_) {
    return _.ctrlKey;
  }
  function v7(_, e) {
    _.cullFace(e >>> 0);
  }
  function S7(_, e) {
    _.cullFace(e >>> 0);
  }
  function A7(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function I7(_, e) {
    _.deleteBuffer(e);
  }
  function D7(_, e) {
    _.deleteBuffer(e);
  }
  function T7(_, e) {
    _.deleteFramebuffer(e);
  }
  function F7(_, e) {
    _.deleteFramebuffer(e);
  }
  function B7(_, e) {
    _.deleteProgram(e);
  }
  function P7(_, e) {
    _.deleteProgram(e);
  }
  function k7(_, e) {
    _.deleteQuery(e);
  }
  function C7(_, e) {
    _.deleteRenderbuffer(e);
  }
  function M7(_, e) {
    _.deleteRenderbuffer(e);
  }
  function V7(_, e) {
    _.deleteSampler(e);
  }
  function R7(_, e) {
    _.deleteShader(e);
  }
  function E7(_, e) {
    _.deleteShader(e);
  }
  function L7(_, e) {
    _.deleteSync(e);
  }
  function O7(_, e) {
    _.deleteTexture(e);
  }
  function G7(_, e) {
    _.deleteTexture(e);
  }
  function W7(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function z7(_, e) {
    _.deleteVertexArray(e);
  }
  function U7(_, e) {
    _.depthFunc(e >>> 0);
  }
  function q7(_, e) {
    _.depthFunc(e >>> 0);
  }
  function H7(_, e) {
    _.depthMask(e !== 0);
  }
  function j7(_, e) {
    _.depthMask(e !== 0);
  }
  function N7(_, e, t) {
    _.depthRange(e, t);
  }
  function J7(_, e, t) {
    _.depthRange(e, t);
  }
  function K7(_, e) {
    const t = e.description, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function Q7(_) {
    _.destroy();
  }
  function X7(_) {
    return _.devicePixelRatio;
  }
  function Y7(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function Z7(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function e6(_, e) {
    _.disable(e >>> 0);
  }
  function _6(_, e) {
    _.disable(e >>> 0);
  }
  function t6(_) {
    const e = _.document;
    return v(e) ? 0 : T(e);
  }
  function r6(_) {
    return _.done;
  }
  function n6(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function a6(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function c6(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function o6(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function b6(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function s6(_, e) {
    _.drawBuffers(e);
  }
  function i6(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function f6(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function u6(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function d6(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function g6(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function w6(_, e) {
    _.enable(e >>> 0);
  }
  function p6(_, e) {
    _.enable(e >>> 0);
  }
  function l6(_, e) {
    _.endQuery(e >>> 0);
  }
  function m6(_) {
    _.end();
  }
  function h6(_) {
    return Object.entries(_);
  }
  function x6(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function y6(_) {
    console.error(_);
  }
  function $6(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(S(_, e));
    } finally {
      s.__wbindgen_free(t, r, 1);
    }
  }
  function v6(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return v(r) ? 0 : T(r);
  }
  function S6(_, e, t) {
    return _.fetch(S(e, t));
  }
  function A6(_, e, t, r) {
    return _.fetch(S(e, t), r);
  }
  function I6(_) {
    return _.finish();
  }
  function D6(_, e) {
    return _.finish(e);
  }
  function T6(_) {
    _.flush();
  }
  function F6(_) {
    _.flush();
  }
  function B6() {
    return g(function(_) {
      _.focus();
    }, arguments);
  }
  function P6(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function k6(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function C6(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function M6(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function V6(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function R6(_, e, t, r, n, a, c) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, c);
  }
  function E6(_, e) {
    _.frontFace(e >>> 0);
  }
  function L6(_, e) {
    _.frontFace(e >>> 0);
  }
  function O6(_) {
    return _.getBoundingClientRect();
  }
  function G6(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function W6() {
    return g(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : T(n);
    }, arguments);
  }
  function z6() {
    return g(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : T(r);
    }, arguments);
  }
  function U6() {
    return g(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : T(r);
    }, arguments);
  }
  function q6() {
    return g(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : T(n);
    }, arguments);
  }
  function H6() {
    return g(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function j6(_, e, t) {
    const r = _.getElementById(S(e, t));
    return v(r) ? 0 : T(r);
  }
  function N6() {
    return g(function(_, e, t) {
      const r = _.getExtension(S(e, t));
      return v(r) ? 0 : T(r);
    }, arguments);
  }
  function J6() {
    return g(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function K6() {
    return g(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function Q6() {
    return g(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function X6() {
    return g(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function Y6(_) {
    const e = _.getPreferredCanvasFormat();
    return (oe.indexOf(e) + 1 || 96) - 1;
  }
  function Z6(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function e8(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function _8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function t8(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function r8(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function n8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function a8(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function c8(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function o8(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function b8(_) {
    const e = _.getSupportedExtensions();
    return v(e) ? 0 : T(e);
  }
  function s8(_) {
    const e = _.getSupportedProfiles();
    return v(e) ? 0 : T(e);
  }
  function i8(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function f8(_, e, t, r) {
    return _.getUniformBlockIndex(e, S(t, r));
  }
  function u8(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : T(n);
  }
  function d8(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : T(n);
  }
  function g8(_, e) {
    return _[e >>> 0];
  }
  function w8(_, e) {
    const t = _[e >>> 0];
    return v(t) ? 0 : T(t);
  }
  function p8() {
    return g(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function l8(_, e) {
    return _[e >>> 0];
  }
  function m8(_, e) {
    return _[e];
  }
  function h8(_) {
    return _.gpu;
  }
  function x8(_, e, t) {
    return _.hasAttribute(S(e, t));
  }
  function y8(_) {
    return _.height;
  }
  function $8(_) {
    return _.height;
  }
  function v8(_) {
    return _.hidden;
  }
  function S8(_, e, t) {
    return _.includes(e, t);
  }
  function A8(_) {
    return _.info;
  }
  function I8(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function D8(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function T8(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function F8(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function B8(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function P8(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function k8(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function C8(_) {
    let e;
    try {
      e = _ instanceof Response;
    } catch {
      e = false;
    }
    return e;
  }
  function M8(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function V8(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function R8(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function E8() {
    return g(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function L8(_) {
    return Array.isArray(_);
  }
  function O8(_) {
    return _.isComposing;
  }
  function G8(_) {
    return Number.isSafeInteger(_);
  }
  function W8(_, e) {
    return Object.is(_, e);
  }
  function z8() {
    return Symbol.iterator;
  }
  function U8(_, e) {
    const t = e.key, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function q8(_, e) {
    const t = e.label, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function H8(_) {
    return _.length;
  }
  function j8(_) {
    return _.length;
  }
  function N8(_) {
    return _.limits;
  }
  function J8(_) {
    return _.limits;
  }
  function K8(_, e) {
    _.linkProgram(e);
  }
  function Q8(_, e) {
    _.linkProgram(e);
  }
  function X8(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function Y8(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function Z8(_) {
    return _.maxBindGroups;
  }
  function e5(_) {
    return _.maxBindingsPerBindGroup;
  }
  function _5(_) {
    return _.maxBufferSize;
  }
  function t5(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function r5(_) {
    return _.maxColorAttachments;
  }
  function n5(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function a5(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function c5(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function o5(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function b5(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function s5(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function i5(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function f5(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function u5(_) {
    return _.maxInterStageShaderVariables;
  }
  function d5(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function g5(_) {
    return _.maxSamplersPerShaderStage;
  }
  function w5(_) {
    return _.maxStorageBufferBindingSize;
  }
  function p5(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function l5(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function m5(_) {
    return _.maxTextureArrayLayers;
  }
  function h5(_) {
    return _.maxTextureDimension1D;
  }
  function x5(_) {
    return _.maxTextureDimension2D;
  }
  function y5(_) {
    return _.maxTextureDimension3D;
  }
  function $5(_) {
    return _.maxUniformBufferBindingSize;
  }
  function v5(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function S5(_) {
    return _.maxVertexAttributes;
  }
  function A5(_) {
    return _.maxVertexBufferArrayStride;
  }
  function I5(_) {
    return _.maxVertexBuffers;
  }
  function D5(_) {
    return _.metaKey;
  }
  function T5(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function F5(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function B5(_) {
    return _.navigator;
  }
  function P5(_) {
    return _.navigator;
  }
  function k5() {
    return g(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function C5() {
    return new Error();
  }
  function M5() {
    return new Object();
  }
  function V5() {
    return new Array();
  }
  function R5() {
    return g(function() {
      return new AbortController();
    }, arguments);
  }
  function E5(_) {
    return new Uint8Array(_);
  }
  function L5(_, e) {
    return new Error(S(_, e));
  }
  function O5(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, c) => {
        const o = t.a;
        t.a = 0;
        try {
          return bS(o, t.b, a, c);
        } finally {
          t.a = o;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function G5(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function W5() {
    return g(function(_) {
      return _.next();
    }, arguments);
  }
  function z5(_) {
    return _.next;
  }
  function U5(_) {
    return _.now();
  }
  function q5(_, e) {
    _.observe(e);
  }
  function H5(_) {
    return Array.of(_);
  }
  function j5(_) {
    return _.offsetX;
  }
  function N5(_) {
    return _.offsetY;
  }
  function J5(_) {
    return _.ok;
  }
  function K5(_) {
    return _.onSubmittedWorkDone();
  }
  function Q5(_) {
    const e = _.performance;
    return v(e) ? 0 : T(e);
  }
  function X5(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function Y5(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function Z5(_, e, t) {
    _.polygonOffset(e, t);
  }
  function e9(_, e, t) {
    _.polygonOffset(e, t);
  }
  function _9(_) {
    _.preventDefault();
  }
  function t9(_) {
    return De.__wrap(_);
  }
  function r9(_, e, t) {
    Uint8Array.prototype.set.call(i_(_, e), t);
  }
  function n9(_, e) {
    return _.push(e);
  }
  function a9(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function c9() {
    return g(function(_, e, t) {
      return _.querySelectorAll(S(e, t));
    }, arguments);
  }
  function o9() {
    return g(function(_, e, t) {
      const r = _.querySelector(S(e, t));
      return v(r) ? 0 : T(r);
    }, arguments);
  }
  function b9(_) {
    return _.queueMicrotask;
  }
  function s9(_) {
    queueMicrotask(_);
  }
  function i9(_) {
    return _.queue;
  }
  function f9(_, e) {
    _.readBuffer(e >>> 0);
  }
  function u9() {
    return g(function(_, e, t, r, n, a, c, o) {
      _.readPixels(e, t, r, n, a >>> 0, c >>> 0, o);
    }, arguments);
  }
  function d9() {
    return g(function(_, e, t, r, n, a, c, o) {
      _.readPixels(e, t, r, n, a >>> 0, c >>> 0, o);
    }, arguments);
  }
  function g9() {
    return g(function(_, e, t, r, n, a, c, o) {
      _.readPixels(e, t, r, n, a >>> 0, c >>> 0, o);
    }, arguments);
  }
  function w9(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function p9(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function l9(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function m9(_) {
    return _.repeat;
  }
  function h9(_, e) {
    return _.requestAdapter(e);
  }
  function x9(_) {
    return _.requestAdapter();
  }
  function y9() {
    return g(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function $9(_, e) {
    return _.requestDevice(e);
  }
  function v9(_) {
    return Promise.resolve(_);
  }
  function S9(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function A9(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function I9(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function D9(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function T9() {
    return g(function(_, e, t, r, n) {
      _.setAttribute(S(e, t), S(r, n));
    }, arguments);
  }
  function F9() {
    return g(function(_, e, t, r, n, a, c) {
      _.setBindGroup(e >>> 0, t, $e(r, n), a, c >>> 0);
    }, arguments);
  }
  function B9(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function P9(_, e, t, r, n) {
    _.setIndexBuffer(e, Y_[t], r, n);
  }
  function k9(_, e, t, r) {
    _.setIndexBuffer(e, Y_[t], r);
  }
  function C9(_, e) {
    _.setPipeline(e);
  }
  function M9(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function V9(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function R9(_, e, t, r, n, a, c) {
    _.setViewport(e, t, r, n, a, c);
  }
  function E9(_, e, t) {
    _.set(e, t >>> 0);
  }
  function L9() {
    return g(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function O9(_, e, t) {
    _[e] = t;
  }
  function G9(_, e) {
    _.a = e;
  }
  function W9(_, e) {
    _.access = hS[e];
  }
  function z9(_, e) {
    _.addressModeU = Q_[e];
  }
  function U9(_, e) {
    _.addressModeV = Q_[e];
  }
  function q9(_, e) {
    _.addressModeW = Q_[e];
  }
  function H9(_, e) {
    _.alpha = e;
  }
  function j9(_, e) {
    _.alphaMode = uS[e];
  }
  function N9(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function J9(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function K9(_, e) {
    _.arrayStride = e;
  }
  function Q9(_, e) {
    _.aspect = Ht[e];
  }
  function X9(_, e) {
    _.aspect = Ht[e];
  }
  function Y9(_, e) {
    _.attributes = e;
  }
  function Z9(_, e) {
    _.b = e;
  }
  function eh(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function _h(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function th(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function rh(_, e) {
    _.bindGroupLayouts = e;
  }
  function nh(_, e) {
    _.binding = e >>> 0;
  }
  function ah(_, e) {
    _.binding = e >>> 0;
  }
  function ch(_, e) {
    _.blend = e;
  }
  function oh(_, e) {
    _.buffer = e;
  }
  function bh(_, e) {
    _.buffer = e;
  }
  function sh(_, e) {
    _.buffers = e;
  }
  function ih(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function fh(_, e) {
    _.clearValue = e;
  }
  function uh(_, e, t) {
    _.code = S(e, t);
  }
  function dh(_, e) {
    _.colorAttachments = e;
  }
  function gh(_, e) {
    _.color = e;
  }
  function wh(_, e) {
    _.compare = X_[e];
  }
  function ph(_, e) {
    _.compare = X_[e];
  }
  function lh(_, e) {
    _.count = e >>> 0;
  }
  function mh(_, e) {
    _.cullMode = dS[e];
  }
  function hh(_, e, t) {
    _[e >>> 0] = t;
  }
  function xh(_, e) {
    _.depthBias = e;
  }
  function yh(_, e) {
    _.depthBiasClamp = e;
  }
  function $h(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function vh(_, e) {
    _.depthClearValue = e;
  }
  function Sh(_, e) {
    _.depthCompare = X_[e];
  }
  function Ah(_, e) {
    _.depthFailOp = et[e];
  }
  function Ih(_, e) {
    _.depthLoadOp = Z_[e];
  }
  function Dh(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function Th(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function Fh(_, e) {
    _.depthStencil = e;
  }
  function Bh(_, e) {
    _.depthStencilAttachment = e;
  }
  function Ph(_, e) {
    _.depthStoreOp = _t[e];
  }
  function kh(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function Ch(_, e) {
    _.device = e;
  }
  function Mh(_, e) {
    _.dimension = tt[e];
  }
  function Vh(_, e) {
    _.dimension = xS[e];
  }
  function Rh(_, e) {
    _.dstFactor = Ut[e];
  }
  function Eh(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function Lh(_, e) {
    _.entries = e;
  }
  function Oh(_, e) {
    _.entries = e;
  }
  function Gh(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function Wh(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function zh(_, e) {
    _.externalTexture = e;
  }
  function Uh(_, e) {
    _.failOp = et[e];
  }
  function qh(_, e) {
    _.format = oe[e];
  }
  function Hh(_, e) {
    _.format = $S[e];
  }
  function jh(_, e) {
    _.format = oe[e];
  }
  function Nh(_, e) {
    _.format = oe[e];
  }
  function Jh(_, e) {
    _.format = oe[e];
  }
  function Kh(_, e) {
    _.format = oe[e];
  }
  function Qh(_, e) {
    _.format = oe[e];
  }
  function Xh(_, e) {
    _.fragment = e;
  }
  function Yh(_, e) {
    _.frontFace = gS[e];
  }
  function Zh(_, e) {
    _.g = e;
  }
  function ex(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function _x(_, e) {
    _.height = e >>> 0;
  }
  function tx(_, e) {
    _.height = e >>> 0;
  }
  function rx(_, e) {
    _.height = e >>> 0;
  }
  function nx(_, e, t) {
    _.label = S(e, t);
  }
  function ax(_, e, t) {
    _.label = S(e, t);
  }
  function cx(_, e, t) {
    _.label = S(e, t);
  }
  function ox(_, e, t) {
    _.label = S(e, t);
  }
  function bx(_, e, t) {
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
  function ux(_, e, t) {
    _.label = S(e, t);
  }
  function dx(_, e, t) {
    _.label = S(e, t);
  }
  function gx(_, e, t) {
    _.label = S(e, t);
  }
  function wx(_, e, t) {
    _.label = S(e, t);
  }
  function px(_, e, t) {
    _.label = S(e, t);
  }
  function lx(_, e) {
    _.layout = e;
  }
  function mx(_, e) {
    _.layout = e;
  }
  function hx(_, e) {
    _.loadOp = Z_[e];
  }
  function xx(_, e) {
    _.lodMaxClamp = e;
  }
  function yx(_, e) {
    _.lodMinClamp = e;
  }
  function $x(_, e) {
    _.magFilter = qt[e];
  }
  function vx(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function Sx(_, e) {
    _.mask = e >>> 0;
  }
  function Ax(_, e) {
    _.maxAnisotropy = e;
  }
  function Ix(_, e) {
    _.minBindingSize = e;
  }
  function Dx(_, e) {
    _.minFilter = qt[e];
  }
  function Tx(_, e) {
    _.mipLevel = e >>> 0;
  }
  function Fx(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Bx(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Px(_, e) {
    _.mipmapFilter = wS[e];
  }
  function kx(_, e) {
    _.module = e;
  }
  function Cx(_, e) {
    _.module = e;
  }
  function Mx(_, e) {
    _.multisample = e;
  }
  function Vx(_, e) {
    _.multisampled = e !== 0;
  }
  function Rx(_, e) {
    _.offset = e;
  }
  function Ex(_, e) {
    _.offset = e;
  }
  function Lx(_, e) {
    _.offset = e;
  }
  function Ox(_, e) {
    _.operation = iS[e];
  }
  function Gx(_, e) {
    _.origin = e;
  }
  function Wx(_, e) {
    _.passOp = et[e];
  }
  function zx(_, e) {
    _.powerPreference = pS[e];
  }
  function Ux(_, e) {
    _.primitive = e;
  }
  function qx(_, e) {
    _.querySet = e;
  }
  function Hx(_, e) {
    _.r = e;
  }
  function jx(_, e) {
    _.requiredFeatures = e;
  }
  function Nx(_, e) {
    _.requiredLimits = e;
  }
  function Jx(_, e) {
    _.resolveTarget = e;
  }
  function Kx(_, e) {
    _.resource = e;
  }
  function Qx(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function Xx(_, e) {
    _.sampleCount = e >>> 0;
  }
  function Yx(_, e) {
    _.sampleType = yS[e];
  }
  function Zx(_, e) {
    _.sampler = e;
  }
  function ey(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function _y(_, e) {
    _.signal = e;
  }
  function ty(_, e) {
    _.size = e;
  }
  function ry(_, e) {
    _.size = e;
  }
  function ny(_, e) {
    _.size = e;
  }
  function ay(_, e) {
    _.srcFactor = Ut[e];
  }
  function cy(_, e) {
    _.stencilBack = e;
  }
  function oy(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function by(_, e) {
    _.stencilFront = e;
  }
  function sy(_, e) {
    _.stencilLoadOp = Z_[e];
  }
  function iy(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function fy(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function uy(_, e) {
    _.stencilStoreOp = _t[e];
  }
  function dy(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function gy(_, e) {
    _.stepMode = vS[e];
  }
  function wy(_, e) {
    _.storageTexture = e;
  }
  function py(_, e) {
    _.storeOp = _t[e];
  }
  function ly(_, e) {
    _.stripIndexFormat = Y_[e];
  }
  function my(_, e) {
    _.targets = e;
  }
  function hy(_, e) {
    _.texture = e;
  }
  function xy(_, e) {
    _.texture = e;
  }
  function yy(_, e) {
    _.timestampWrites = e;
  }
  function $y(_, e) {
    _.topology = lS[e];
  }
  function vy(_, e) {
    _.type = fS[e];
  }
  function Sy(_, e) {
    _.type = mS[e];
  }
  function Ay(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function Iy(_, e) {
    _.usage = e >>> 0;
  }
  function Dy(_, e) {
    _.usage = e >>> 0;
  }
  function Ty(_, e) {
    _.usage = e >>> 0;
  }
  function Fy(_, e) {
    _.usage = e >>> 0;
  }
  function By(_, e) {
    _.vertex = e;
  }
  function Py(_, e) {
    _.view = e;
  }
  function ky(_, e) {
    _.view = e;
  }
  function Cy(_, e) {
    _.viewDimension = tt[e];
  }
  function My(_, e) {
    _.viewDimension = tt[e];
  }
  function Vy(_, e) {
    _.viewFormats = e;
  }
  function Ry(_, e) {
    _.viewFormats = e;
  }
  function Ey(_, e) {
    _.visibility = e >>> 0;
  }
  function Ly(_, e) {
    _.width = e >>> 0;
  }
  function Oy(_, e) {
    _.width = e >>> 0;
  }
  function Gy(_, e) {
    _.width = e >>> 0;
  }
  function Wy(_, e) {
    _.writeMask = e >>> 0;
  }
  function zy(_, e) {
    _.x = e >>> 0;
  }
  function Uy(_, e) {
    _.y = e >>> 0;
  }
  function qy(_, e) {
    _.z = e >>> 0;
  }
  function Hy(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function jy(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function Ny(_) {
    return _.shiftKey;
  }
  function Jy(_) {
    return _.signal;
  }
  function Ky(_, e) {
    const t = e.stack, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function Qy() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return v(_) ? 0 : T(_);
  }
  function Xy() {
    const _ = typeof global > "u" ? null : global;
    return v(_) ? 0 : T(_);
  }
  function Yy() {
    const _ = typeof self > "u" ? null : self;
    return v(_) ? 0 : T(_);
  }
  function Zy() {
    const _ = typeof window > "u" ? null : window;
    return v(_) ? 0 : T(_);
  }
  function e$(_, e) {
    const t = e.statusText, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function _$(_) {
    return _.status;
  }
  function t$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function r$(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function n$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function a$(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function c$(_, e) {
    _.stencilMask(e >>> 0);
  }
  function o$(_, e) {
    _.stencilMask(e >>> 0);
  }
  function b$(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function s$(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function i$(_, e) {
    _.submit(e);
  }
  function f$() {
    return g(function(_, e, t, r, n, a, c, o, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function u$() {
    return g(function(_, e, t, r, n, a, c, o, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function d$() {
    return g(function(_, e, t, r, n, a, c, o, b, f) {
      _.texImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function g$() {
    return g(function(_, e, t, r, n, a, c, o, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, c, o, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function w$() {
    return g(function(_, e, t, r, n, a, c, o, b, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, c, o, b >>> 0, f >>> 0, d);
    }, arguments);
  }
  function p$(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function l$(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function m$(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function h$(_, e, t, r, n, a, c) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, c);
  }
  function x$() {
    return g(function(_, e, t, r, n, a, c, o, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function y$() {
    return g(function(_, e, t, r, n, a, c, o, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function $$() {
    return g(function(_, e, t, r, n, a, c, o, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function v$() {
    return g(function(_, e, t, r, n, a, c, o, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function S$() {
    return g(function(_, e, t, r, n, a, c, o, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function A$() {
    return g(function(_, e, t, r, n, a, c, o, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function I$() {
    return g(function(_, e, t, r, n, a, c, o, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function D$() {
    return g(function(_, e, t, r, n, a, c, o, b, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, o >>> 0, b >>> 0, f);
    }, arguments);
  }
  function T$() {
    return g(function(_, e, t, r, n, a, c, o, b, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, o, b, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function F$() {
    return g(function(_, e, t, r, n, a, c, o, b, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, o, b, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function B$() {
    return g(function(_, e, t, r, n, a, c, o, b, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, o, b, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function P$() {
    return g(function(_, e, t, r, n, a, c, o, b, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, o, b, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function k$() {
    return g(function(_, e, t, r, n, a, c, o, b, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, o, b, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function C$() {
    return g(function(_, e, t, r, n, a, c, o, b, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, o, b, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function M$() {
    return g(function(_, e, t, r, n, a, c, o, b, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, o, b, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function V$(_, e, t) {
    return _.then(e, t);
  }
  function R$(_, e, t) {
    return _.then(e, t);
  }
  function E$(_, e) {
    return _.then(e);
  }
  function L$(_, e, t) {
    _.uniform1f(e, t);
  }
  function O$(_, e, t) {
    _.uniform1f(e, t);
  }
  function G$(_, e, t) {
    _.uniform1i(e, t);
  }
  function W$(_, e, t) {
    _.uniform1i(e, t);
  }
  function z$(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function U$(_, e, t, r) {
    _.uniform2fv(e, L(t, r));
  }
  function q$(_, e, t, r) {
    _.uniform2fv(e, L(t, r));
  }
  function H$(_, e, t, r) {
    _.uniform2iv(e, ee(t, r));
  }
  function j$(_, e, t, r) {
    _.uniform2iv(e, ee(t, r));
  }
  function N$(_, e, t, r) {
    _.uniform2uiv(e, $e(t, r));
  }
  function J$(_, e, t, r) {
    _.uniform3fv(e, L(t, r));
  }
  function K$(_, e, t, r) {
    _.uniform3fv(e, L(t, r));
  }
  function Q$(_, e, t, r) {
    _.uniform3iv(e, ee(t, r));
  }
  function X$(_, e, t, r) {
    _.uniform3iv(e, ee(t, r));
  }
  function Y$(_, e, t, r) {
    _.uniform3uiv(e, $e(t, r));
  }
  function Z$(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function ev(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function _v(_, e, t, r) {
    _.uniform4fv(e, L(t, r));
  }
  function tv(_, e, t, r) {
    _.uniform4fv(e, L(t, r));
  }
  function rv(_, e, t, r) {
    _.uniform4iv(e, ee(t, r));
  }
  function nv(_, e, t, r) {
    _.uniform4iv(e, ee(t, r));
  }
  function av(_, e, t, r) {
    _.uniform4uiv(e, $e(t, r));
  }
  function cv(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function ov(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, L(r, n));
  }
  function bv(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, L(r, n));
  }
  function sv(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, L(r, n));
  }
  function iv(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, L(r, n));
  }
  function fv(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, L(r, n));
  }
  function uv(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, L(r, n));
  }
  function dv(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, L(r, n));
  }
  function gv(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, L(r, n));
  }
  function wv(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, L(r, n));
  }
  function pv(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, L(r, n));
  }
  function lv(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, L(r, n));
  }
  function mv(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, L(r, n));
  }
  function hv(_) {
    _.unmap();
  }
  function xv(_, e) {
    _.useProgram(e);
  }
  function yv(_, e) {
    _.useProgram(e);
  }
  function $v(_) {
    return _.value;
  }
  function vv(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function Sv(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function Av(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function Iv(_, e, t, r, n, a, c) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, c);
  }
  function Dv(_, e, t, r, n, a, c) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, c);
  }
  function Tv(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function Fv(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function Bv(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function Pv(_) {
    return _.width;
  }
  function kv(_) {
    return _.width;
  }
  function Cv() {
    return g(function(_, e, t, r, n, a, c) {
      _.writeBuffer(e, t, i_(r, n), a, c);
    }, arguments);
  }
  function Mv() {
    return g(function(_, e, t, r, n, a) {
      _.writeTexture(e, i_(t, r), n, a);
    }, arguments);
  }
  function Vv(_, e) {
    return _e(_, e, tS);
  }
  function Rv(_, e) {
    return _e(_, e, oS);
  }
  function Ev(_, e) {
    return _e(_, e, sS);
  }
  function Lv(_, e) {
    return _e(_, e, rS);
  }
  function Ov(_, e) {
    return _e(_, e, nS);
  }
  function Gv(_, e) {
    return _e(_, e, aS);
  }
  function Wv(_, e) {
    return _e(_, e, cS);
  }
  function zv(_, e) {
    return _e(_, e, _S);
  }
  function Uv(_) {
    return _;
  }
  function qv(_) {
    return _;
  }
  function Hv(_, e) {
    return L(_, e);
  }
  function jv(_, e) {
    return SS(_, e);
  }
  function Nv(_, e) {
    return ee(_, e);
  }
  function Jv(_, e) {
    return AS(_, e);
  }
  function Kv(_, e) {
    return IS(_, e);
  }
  function Qv(_, e) {
    return $e(_, e);
  }
  function Xv(_, e) {
    return i_(_, e);
  }
  function Yv(_, e) {
    return S(_, e);
  }
  function Zv(_) {
    return BigInt.asUintN(64, _);
  }
  function eS() {
    const _ = s.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function _S(_, e) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function tS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function rS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function nS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function aS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function cS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6(_, e, t);
  }
  function oS(_, e, t) {
    const r = s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (r[1]) throw P(r[0]);
  }
  function bS(_, e, t, r) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, r);
  }
  function sS(_, e, t) {
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
  ], iS = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], fS = [
    "uniform",
    "storage",
    "read-only-storage"
  ], uS = [
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
  ], dS = [
    "none",
    "front",
    "back"
  ], qt = [
    "nearest",
    "linear"
  ], gS = [
    "ccw",
    "cw"
  ], Y_ = [
    "uint16",
    "uint32"
  ], Z_ = [
    "load",
    "clear"
  ], wS = [
    "nearest",
    "linear"
  ], pS = [
    "low-power",
    "high-performance"
  ], lS = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], mS = [
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
  ], hS = [
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
  ], xS = [
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
  ], yS = [
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
  ], $S = [
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
  ], vS = [
    "vertex",
    "instance"
  ], yt = typeof FinalizationRegistry > "u" ? {
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
      for (let c = 1; c < n; c++) a += ", " + M_(_[c]);
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
    return _ = _ >>> 0, DS().subarray(_ / 4, _ / 4 + e);
  }
  function SS(_, e) {
    return _ = _ >>> 0, FS().subarray(_ / 2, _ / 2 + e);
  }
  function ee(_, e) {
    return _ = _ >>> 0, BS().subarray(_ / 4, _ / 4 + e);
  }
  function AS(_, e) {
    return _ = _ >>> 0, PS().subarray(_ / 1, _ / 1 + e);
  }
  function IS(_, e) {
    return _ = _ >>> 0, kS().subarray(_ / 2, _ / 2 + e);
  }
  function $e(_, e) {
    return _ = _ >>> 0, CS().subarray(_ / 4, _ / 4 + e);
  }
  function i_(_, e) {
    return _ = _ >>> 0, me().subarray(_ / 1, _ / 1 + e);
  }
  let ie = null;
  function k() {
    return (ie === null || ie.buffer.detached === true || ie.buffer.detached === void 0 && ie.buffer !== s.memory.buffer) && (ie = new DataView(s.memory.buffer)), ie;
  }
  let Ne = null;
  function DS() {
    return (Ne === null || Ne.byteLength === 0) && (Ne = new Float32Array(s.memory.buffer)), Ne;
  }
  let Je = null;
  function TS() {
    return (Je === null || Je.byteLength === 0) && (Je = new Float64Array(s.memory.buffer)), Je;
  }
  let Ke = null;
  function FS() {
    return (Ke === null || Ke.byteLength === 0) && (Ke = new Int16Array(s.memory.buffer)), Ke;
  }
  let Qe = null;
  function BS() {
    return (Qe === null || Qe.byteLength === 0) && (Qe = new Int32Array(s.memory.buffer)), Qe;
  }
  let Xe = null;
  function PS() {
    return (Xe === null || Xe.byteLength === 0) && (Xe = new Int8Array(s.memory.buffer)), Xe;
  }
  function S(_, e) {
    return VS(_ >>> 0, e);
  }
  let Ye = null;
  function kS() {
    return (Ye === null || Ye.byteLength === 0) && (Ye = new Uint16Array(s.memory.buffer)), Ye;
  }
  let Ze = null;
  function CS() {
    return (Ze === null || Ze.byteLength === 0) && (Ze = new Uint32Array(s.memory.buffer)), Ze;
  }
  let e_ = null;
  function me() {
    return (e_ === null || e_.byteLength === 0) && (e_ = new Uint8Array(s.memory.buffer)), e_;
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
      const c = r.a;
      r.a = 0;
      try {
        return t(c, r.b, ...a);
      } finally {
        r.a = c, n._wbg_cb_unref();
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
  function __(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return TS().set(_, t / 8), M = _.length, t;
  }
  function G(_, e, t) {
    if (t === void 0) {
      const o = Ae.encode(_), b = e(o.length, 1) >>> 0;
      return me().subarray(b, b + o.length).set(o), M = o.length, b;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = me();
    let c = 0;
    for (; c < r; c++) {
      const o = _.charCodeAt(c);
      if (o > 127) break;
      a[n + c] = o;
    }
    if (c !== r) {
      c !== 0 && (_ = _.slice(c)), n = t(n, r, r = c + _.length * 3, 1) >>> 0;
      const o = me().subarray(n + c, n + r), b = Ae.encodeInto(_, o);
      c += b.written, n = t(n, r, c, 1) >>> 0;
    }
    return M = c, n;
  }
  function P(_) {
    const e = s.__wbindgen_externrefs.get(_);
    return s.__externref_table_dealloc(_), e;
  }
  let n_ = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  n_.decode();
  const MS = 2146435072;
  let x_ = 0;
  function VS(_, e) {
    return x_ += e, x_ >= MS && (n_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), n_.decode(), x_ = e), n_.decode(me().subarray(_, _ + e));
  }
  const Ae = new TextEncoder();
  "encodeInto" in Ae || (Ae.encodeInto = function(_, e) {
    const t = Ae.encode(_);
    return e.set(t), {
      read: _.length,
      written: t.length
    };
  });
  let M = 0, s;
  function RS(_) {
    s = _;
  }
  URL = globalThis.URL;
  const ES = await O_({
    "./proteus_bench_web_bg.js": {
      __wbg_call_5575218572ead796: ym,
      __wbg_new_typed_00a409eb4ec4f2d9: O5,
      __wbg_then_05edfc8a4fea5106: V$,
      __wbg_next_0c4066e251d2eff9: W5,
      __wbg_done_b62d4a7d2286852a: r6,
      __wbg_value_49f783bb59765962: $v,
      __wbg_get_197a3fe98f169e38: g8,
      __wbg_get_unchecked_54a4374c38e08460: l8,
      __wbg_length_c6054974c0a6cdb9: j8,
      __wbg_new_227d7c05414eb861: C5,
      __wbg_stack_3b0d974bbf31e44f: Ky,
      __wbg_error_a6fa202b58aa1cd3: $6,
      __wbg_push_f724b5db8acf89d2: n9,
      __wbg_instanceof_Map_afa18d5840c04c15: P8,
      __wbg_proteusapp_new: t9,
      __wbg_call_8e98ed2f3c86c4b5: $m,
      __wbg_call_0e855b388e315e17: xm,
      __wbg_set_dc601f4a69da0bc2: hh,
      __wbg_get_with_ref_key_6412cf3094599694: m8,
      __wbg_set_6be42768c690e380: O9,
      __wbg_String_8564e559799eccda: u4,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: F8,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: h5,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: x5,
      __wbg_maxTextureDimension3D_06ee54121b37d431: y5,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: m5,
      __wbg_maxBindGroups_14611ac9ed1c6b56: Z8,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: e5,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: f5,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: i5,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: d5,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: g5,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: p5,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: l5,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: v5,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: $5,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: w5,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: I5,
      __wbg_maxBufferSize_f7ce3e1856349d2f: _5,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: S5,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: A5,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: u5,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: F5,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: T5,
      __wbg_maxColorAttachments_fd9187f9f786da18: r5,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: t5,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: b5,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: n5,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: a5,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: c5,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: o5,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: s5,
      __wbg_description_18d0a6d4077fec8e: K7,
      __wbg_set_dst_factor_1ed75271a89a711e: Rh,
      __wbg_set_operation_b5862f5a1a143b30: Ox,
      __wbg_set_src_factor_1c4f755f8676df1b: ay,
      __wbg_set_texture_16d2be474ce6ad0c: hy,
      __wbg_set_mip_level_246db61be15bdd69: Tx,
      __wbg_set_x_56f0c2c08a62725c: zy,
      __wbg_set_y_04fb8ce84735b4e1: Uy,
      __wbg_set_z_a51316db27a4941e: qy,
      __wbg_set_origin_9b3b0fbe0a5dc469: Gx,
      __wbg_set_aspect_77332ac136ee94eb: Q9,
      __wbg_Window_a07901001eb4269f: d4,
      __wbg_gpu_a7c12045c25d009a: h8,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: g4,
      __wbg_set_a_5f6e488475272136: G9,
      __wbg_set_b_688365d692bba214: Z9,
      __wbg_set_g_d4d1d77cf8fdd362: Zh,
      __wbg_set_r_527e5a41c4b1a846: Hx,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: T8,
      __wbg_queue_65d985f3e6d786a6: i9,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: zx,
      __wbg_requestAdapter_9ff5c9d1ff271165: h9,
      __wbg_set_required_limits_3b031f66f838f4e3: Nx,
      __wbg_set_required_features_54918de8185c5fab: jx,
      __wbg_set_label_bae57fb9f24fde5c: ix,
      __wbg_requestDevice_c1c34f88a477e509: $9,
      __wbg_limits_50a8c5e629dbfe40: J8,
      __wbg_info_22dcf1fd1b12bc7d: A8,
      __wbg_set_size_41cd9255ca1e4242: ry,
      __wbg_set_usage_908213a4d4bb8bde: Ty,
      __wbg_set_mapped_at_creation_48de4735fab51e78: vx,
      __wbg_set_label_cd567b7b35838e4c: dx,
      __wbg_createBuffer_2f08c0205e04efca: Zm,
      __wbg_set_address_mode_u_a37cf1035585c638: z9,
      __wbg_set_address_mode_v_8ac049e029caef76: U9,
      __wbg_set_address_mode_w_eb9260ee11729e92: q9,
      __wbg_set_compare_42211fbf15e3b850: ph,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: xx,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: yx,
      __wbg_set_mag_filter_69d846b974d4bcc0: $x,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: Dx,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: Px,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: Ax,
      __wbg_set_label_dcd98efbb9370da8: wx,
      __wbg_createSampler_248bd67c920af37d: f7,
      __wbg_set_width_1a5e2e86fa5bdcd8: Oy,
      __wbg_set_height_e8b5483b8c117d5e: tx,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: Dh,
      __wbg_set_format_e9d4b1475bb3bd3b: Kh,
      __wbg_set_size_a61ff22205255d61: ny,
      __wbg_set_usage_7fa9cd18d1104aca: Dy,
      __wbg_set_label_0c1bd0e976cf0a9a: ax,
      __wbg_set_dimension_36e13ccecae5af4b: Vh,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: Bx,
      __wbg_set_sample_count_865e1d19b84e27e6: Xx,
      __wbg_set_view_formats_bab284fc81b40e70: Vy,
      __wbg_createTexture_9e76b80a2dc0d12e: m7,
      __wbg_set_entries_fc76ca4d7da6a709: Oh,
      __wbg_set_layout_eeef59714f5bf48b: mx,
      __wbg_set_label_f92ae11c77d74198: px,
      __wbg_createBindGroup_2320df4db188406c: Xm,
      __wbg_set_code_56e2d45ec1ff6c2d: uh,
      __wbg_set_label_be45aed56e4b9fee: fx,
      __wbg_createShaderModule_53701de4fb271c90: d7,
      __wbg_set_label_d1c24b5a7a3ac31d: gx,
      __wbg_createCommandEncoder_cd88faca35d9ed68: _7,
      __wbg_set_bind_group_layouts_5325d038771af328: rh,
      __wbg_set_label_2f592bd1be3db6b3: bx,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: n7,
      __wbg_set_module_14e471fdd94c582d: Cx,
      __wbg_set_entry_point_8db3b6d103e3b865: Wh,
      __wbg_set_buffers_85a7238f4ef28ab4: sh,
      __wbg_set_layout_7c5ba5bdcde8a0f0: lx,
      __wbg_set_vertex_a4951dd9a7a4ed54: By,
      __wbg_set_label_c47c451211e2f6d2: ux,
      __wbg_set_format_f9341112e43ea182: Qh,
      __wbg_set_depth_compare_30e9ea552da12fe2: Sh,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: kh,
      __wbg_set_depth_bias_428c9340b0fd937b: xh,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: yh,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: $h,
      __wbg_set_compare_1509dc1a5420943f: wh,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: Ah,
      __wbg_set_fail_op_77ab26c98f847b65: Uh,
      __wbg_set_pass_op_e9470d1262fb8a8b: Wx,
      __wbg_set_stencil_back_6ef4683123b19b25: cy,
      __wbg_set_stencil_front_aeb8580a97e5424b: by,
      __wbg_set_stencil_read_mask_2954f260d47349ea: iy,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: dy,
      __wbg_set_depth_stencil_1bd50dbc450c8650: Fh,
      __wbg_set_module_08ad08e736d8edbf: kx,
      __wbg_set_targets_6b0b3bdd87f35668: my,
      __wbg_set_entry_point_6fec5723cc790927: Gh,
      __wbg_set_fragment_1a595620425637e1: Xh,
      __wbg_set_count_26a934d1cd07d080: lh,
      __wbg_set_mask_0c49a66362fc0079: Sx,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: N9,
      __wbg_set_multisample_85f073947b782d07: Mx,
      __wbg_set_cull_mode_9d466c1ab414cac8: mh,
      __wbg_set_front_face_50cdf4eb61504a46: Yh,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: ly,
      __wbg_set_topology_beefb3aca0612b00: $y,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: Ay,
      __wbg_set_primitive_369241acd17871f1: Ux,
      __wbg_createRenderPipeline_f48187ba9f7701e8: b7,
      __wbg_set_entries_3017e6132f938c6e: Lh,
      __wbg_set_label_1175a3329a06e52b: cx,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: Qm,
      __wbg_limits_1c25cb4f379a4418: N8,
      __wbg_set_color_attachments_abe67f6631926e28: dh,
      __wbg_set_label_8fd860a36d2c7b74: sx,
      __wbg_set_view_dbd0294573f64d05: ky,
      __wbg_set_depth_clear_value_442bf492734f63b6: vh,
      __wbg_set_depth_load_op_34d430b74bb36d91: Ih,
      __wbg_set_depth_store_op_0ea0a215313dbda7: Ph,
      __wbg_set_depth_read_only_138a11b10c731094: Th,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: oy,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: sy,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: uy,
      __wbg_set_stencil_read_only_fb489d191b6d969b: fy,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: Bh,
      __wbg_set_query_set_18679a8580267d5a: qx,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: th,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: Eh,
      __wbg_set_timestamp_writes_c552d52fbb417005: yy,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: W4,
      __wbg_copyTextureToTexture_1be188df1e535c0a: Km,
      __wbg_label_47480289cc2bce71: q8,
      __wbg_set_label_2d2227f4d5991e50: ox,
      __wbg_finish_cfaeede3baf55be1: D6,
      __wbg_finish_087cb89c65c06eb1: I6,
      __wbg_drawIndexed_68637ebab6dd8d6e: u6,
      __wbg_setPipeline_bab24dbce96903b9: C9,
      __wbg_setViewport_f9d423db4f4b4b58: R9,
      __wbg_setBindGroup_4ba56e1e0d26f244: F9,
      __wbg_setBindGroup_6124849cc8547086: B9,
      __wbg_setIndexBuffer_17431786d06c1b7c: P9,
      __wbg_setIndexBuffer_a16ed5b869c87507: k9,
      __wbg_setVertexBuffer_b508baf8d0ffe331: V9,
      __wbg_setVertexBuffer_91c4b602d0289943: M9,
      __wbg_end_414453a89205612c: m6,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: Y6,
      __wbg_getCurrentTexture_51975ae7185fd15f: H6,
      __wbg_set_device_0d774b66e7288f72: Ch,
      __wbg_set_format_d347899cd860709c: Jh,
      __wbg_set_usage_ae014e77ff77ce06: Fy,
      __wbg_set_alpha_mode_92402195b3ae1ee7: j9,
      __wbg_set_view_formats_fe531a043efb71fa: Ry,
      __wbg_configure_3d64c677c7d68a15: Um,
      __wbg_writeBuffer_b4bdd36178348ca5: Cv,
      __wbg_set_bytes_per_row_91681ca78d744888: ih,
      __wbg_set_rows_per_image_d198b7e73a38978b: Qx,
      __wbg_set_offset_a097a8050a3a9a33: Lx,
      __wbg_writeTexture_b45b69132e46a227: Mv,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: K5,
      __wbg_submit_1290d44bb76ecef4: i$,
      __wbg_getMappedRange_5ed22727c9679168: K6,
      __wbg_unmap_8f06698a75b8331a: hv,
      __wbg_destroy_b5b39f25f0799295: Q7,
      __wbg_mapAsync_bb0029907dd91181: Y8,
      __wbg_set_dimension_174ad7e2fb67fb4e: Mh,
      __wbg_set_format_90860b0321868db4: jh,
      __wbg_set_aspect_a823a14d00d42d37: X9,
      __wbg_set_base_array_layer_cc6c68d233489c4b: eh,
      __wbg_set_array_layer_count_daec613068108a9d: J9,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: _h,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: Fx,
      __wbg_set_label_03d2396d4655a3e1: nx,
      __wbg_set_usage_7f0dda8309469b1c: Iy,
      __wbg_createView_cc96b5bdd3d5bf5e: y7,
      __wbg_set_min_binding_size_689661b9ed25e083: Ix,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: ex,
      __wbg_set_type_38961e08504ca674: vy,
      __wbg_requestAdapter_c46930b8bc33722d: x9,
      __wbg_set_alpha_aa2e606e9e647b21: H9,
      __wbg_set_color_bc393d7efc3c8594: gh,
      __wbg_set_visibility_1bca121a89accba5: Ey,
      __wbg_set_storage_texture_ab9eed9786337ef0: wy,
      __wbg_set_external_texture_825fe2bc7a0c0603: zh,
      __wbg_set_binding_b6b0fe5c281b8c69: nh,
      __wbg_set_buffer_e89095a9f0cafad3: bh,
      __wbg_set_sampler_8c5d7fb1b02058c6: Zx,
      __wbg_set_texture_e25a73da75cf5808: xy,
      __wbg_set_format_abf7a1bc5425c56a: Nh,
      __wbg_set_blend_8d6e9c08b5702a09: ch,
      __wbg_set_write_mask_144b25e2bd909124: Wy,
      __wbg_set_load_op_56844f51434037bf: hx,
      __wbg_set_store_op_caeede4654b3d847: py,
      __wbg_set_view_bdeab150b5f0768c: Py,
      __wbg_set_clear_value_642701f928a5ccb3: fh,
      __wbg_set_resolve_target_fe76b3f99cf72078: Jx,
      __wbg_set_buffer_55f096330c8912b4: oh,
      __wbg_set_offset_73156b0e0b41d79a: Rx,
      __wbg_set_size_1e6281b07cd39177: ty,
      __wbg_set_binding_f3c188a8cd21455b: ah,
      __wbg_set_resource_fe385d2e3dadaf63: Kx,
      __wbg_set_format_6606f5c1fba6f459: Hh,
      __wbg_set_offset_8d9d9afffa18b591: Ex,
      __wbg_set_shader_location_0ff30a733291a396: ey,
      __wbg_set_array_stride_c2c009eabc18b5f6: K9,
      __wbg_set_attributes_05f9117fd32ca606: Y9,
      __wbg_set_step_mode_a35aef328761c452: gy,
      __wbg_set_type_c1eebc19f8a6aeb9: Sy,
      __wbg_set_multisampled_40505c1381e1c32c: Vx,
      __wbg_set_sample_type_7088b1efddce6a69: Yx,
      __wbg_set_view_dimension_3ed01b237e85826f: My,
      __wbg_set_format_1786adb7bc74c7c9: qh,
      __wbg_set_access_091f317905cd76a5: W9,
      __wbg_set_view_dimension_263387976511ebc9: Cy,
      __wbg_includes_83dff8d05da243c5: S8,
      __wbg_clearBufferuiv_1d2d93401c0904a3: Am,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: Om,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: Wm,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: zm,
      __wbg_copyBufferSubData_a944f33b601b822d: Hm,
      __wbg_clientWaitSync_7580165bd2eff461: km,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: Gm,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: Jm,
      __wbg_createQuery_f013132b870a71ef: o7,
      __wbg_createSampler_9fe50152a2524319: u7,
      __wbg_createVertexArray_8685feb21901c932: x7,
      __wbg_deleteQuery_ef51ea0a52420103: k7,
      __wbg_deleteSampler_5c045e0cc55813d4: V7,
      __wbg_getIndexedParameter_2b18df6fca85f751: J6,
      __wbg_getQueryParameter_0599e85ddb81220b: r8,
      __wbg_getSyncParameter_9a2bda340ebe166f: i8,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: f8,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: E8,
      __wbg_deleteSync_37ca83c429c43d8a: L7,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: z7,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: a6,
      __wbg_drawBuffers_558d96e52e754731: s6,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: f6,
      __wbg_endQuery_161170c5280a8293: l6,
      __wbg_fenceSync_56efc7cc79111e54: v6,
      __wbg_framebufferTextureLayer_2312acdc74f97676: V6,
      __wbg_getBufferSubData_92680d3a2f7be029: G6,
      __wbg_readBuffer_361ec5474f3aae49: f9,
      __wbg_readPixels_5840000f3e22f3ce: d9,
      __wbg_readPixels_5bf204799ed2272f: g9,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: w9,
      __wbg_texImage3D_8647ef58aef5b912: w$,
      __wbg_texStorage2D_ed5df596c5f1e3af: m$,
      __wbg_texStorage3D_160b0197bc190f04: h$,
      __wbg_texSubImage2D_f03448e182b0820d: D$,
      __wbg_texSubImage2D_d14d9c0a1f627c31: I$,
      __wbg_texSubImage2D_89866a04ecd0a76b: v$,
      __wbg_texSubImage2D_5c630043f1c56716: $$,
      __wbg_samplerParameterf_3157ba41c0f4d97a: S9,
      __wbg_samplerParameteri_f85a29156e790189: A9,
      __wbg_texImage2D_0e0f37b9fb297d01: f$,
      __wbg_texImage2D_0e537dc331652de3: u$,
      __wbg_texImage3D_30dbf7234481b8f5: g$,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: y$,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: S$,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: A$,
      __wbg_texSubImage3D_933e4cd41cc5376d: k$,
      __wbg_texSubImage3D_c3538b28040daac9: M$,
      __wbg_uniform1ui_36c94692177ebf76: z$,
      __wbg_uniform2fv_17592f4dad9798fb: U$,
      __wbg_uniform2iv_d5d29ebbc466977d: j$,
      __wbg_texSubImage3D_0fdbd843482bb916: F$,
      __wbg_texSubImage3D_09a97a968b93253d: T$,
      __wbg_texSubImage3D_355efde0dc047913: B$,
      __wbg_texSubImage3D_bd32c8e29e470904: C$,
      __wbg_texSubImage3D_5a238709d114b609: P$,
      __wbg_uniform2uiv_418ba3bf6a230dd5: N$,
      __wbg_uniform4fv_9e670a001c77dca0: tv,
      __wbg_uniform4iv_1d57c6b8e5c0e447: rv,
      __wbg_uniform3fv_dbe44b778e6b89e8: K$,
      __wbg_uniform3iv_d75d3a5f86d54be4: X$,
      __wbg_uniform3uiv_71c1efc24a662de9: Y$,
      __wbg_uniform4uiv_c5d45f5dbdae727a: av,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: fv,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: dv,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: gv,
      __wbg_uniformBlockBinding_829a71912ad79a04: cv,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: ov,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: sv,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: iv,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: wv,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: Av,
      __wbg_activeTexture_525ee3068cb9e8d5: M4,
      __wbg_attachShader_3477e67517b09b6b: L4,
      __wbg_bindAttribLocation_79b5d26727094518: z4,
      __wbg_bindBuffer_d3111de6861cb875: H4,
      __wbg_bindFramebuffer_63e837a5dc0accfb: J4,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: K4,
      __wbg_bindTexture_7ab28ff4ff3dc506: Y4,
      __wbg_blendColor_15f26633b646e542: tm,
      __wbg_blendEquation_7dadb4db540a42da: cm,
      __wbg_blendEquationSeparate_8240ddfa32266109: nm,
      __wbg_blendFunc_b15af02643e188f1: fm,
      __wbg_blendFuncSeparate_456410f9919bed39: sm,
      __wbg_clear_dadcb3e2929388b0: Bm,
      __wbg_clearDepth_05c17028494ee4dd: Im,
      __wbg_clearStencil_917833d1e2ac56e4: Fm,
      __wbg_colorMask_f111e3e5796458f4: Vm,
      __wbg_compileShader_f5625b583b2c9fd6: Rm,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: lv,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: mv,
      __wbg_vertexAttribDivisor_f17a8585267be92f: Sv,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: jm,
      __wbg_createBuffer_9f602b2dbcbf409c: e7,
      __wbg_createFramebuffer_4a250944a4542bbc: t7,
      __wbg_createProgram_4c8164d471c10346: a7,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: i7,
      __wbg_createShader_9c5cd42709d915ff: w7,
      __wbg_createTexture_3eed23cb87dd35fc: p7,
      __wbg_cullFace_94f24b4fd5e9038b: S7,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: I7,
      __wbg_getExtension_11824edd67a143d8: N6,
      __wbg_getParameter_7f7f23cae98f2c81: Q6,
      __wbg_getProgramInfoLog_cd84be80942f345b: e8,
      __wbg_getProgramParameter_039391d5ba319f50: _8,
      __wbg_getShaderInfoLog_495bddda98172699: n8,
      __wbg_getShaderParameter_4eb65cfb174ceb22: c8,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: b8,
      __wbg_getUniformLocation_ab63f569a4e41744: d8,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: T7,
      __wbg_deleteProgram_eff668280dcb01ca: P7,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: M7,
      __wbg_deleteShader_3339454254c7147c: R7,
      __wbg_deleteTexture_c1c58550dc55af5c: G7,
      __wbg_depthFunc_31b183b5b8ee478e: U7,
      __wbg_depthMask_cab7f2ae7f0e559c: j7,
      __wbg_depthRange_797a71ba3b79267a: N7,
      __wbg_disable_cb1b3e6c1cee5202: _6,
      __wbg_disableVertexAttribArray_b395358ec5084c39: Z7,
      __wbg_drawArrays_42dbb4b0349c8f34: o6,
      __wbg_enable_d1f42f78be33a553: p6,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: d6,
      __wbg_flush_7ae42f071230db6b: T6,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: k6,
      __wbg_framebufferTexture2D_367ab597a005e8d9: C6,
      __wbg_frontFace_9bdcf2a758e989e5: E6,
      __wbg_linkProgram_e23a348b0f6e0c4f: Q8,
      __wbg_pixelStorei_a78a504be58d1d0a: Y5,
      __wbg_polygonOffset_a4f07d97b9b0dced: e9,
      __wbg_renderbufferStorage_3049e13db5c4e60e: l9,
      __wbg_scissor_6c024669fbf4fe72: I9,
      __wbg_vertexAttribPointer_4e5d289c5d224210: Dv,
      __wbg_viewport_a0ca330f9b85397e: Tv,
      __wbg_shaderSource_66dce75b25a1a407: jy,
      __wbg_stencilFuncSeparate_ec603976be9569a4: r$,
      __wbg_stencilMask_485dcb5965c79a71: c$,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: a$,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: b$,
      __wbg_texParameteri_c6efffcecb474d2f: p$,
      __wbg_uniform1f_3acd3f3eb50b5e11: L$,
      __wbg_uniform1i_e4f13604354c28ae: W$,
      __wbg_uniform4f_a5008773cfb47d1a: ev,
      __wbg_useProgram_ab2ee2a13a1fd909: yv,
      __wbg_bufferSubData_2270f1b9db71e642: lm,
      __wbg_clearBufferfv_6b77b9402254a2bf: vm,
      __wbg_clearBufferiv_0f056544010eef3e: Sm,
      __wbg_beginQuery_dad334d972fed3cc: G4,
      __wbg_bindBufferRange_16a9d90becc2a7d7: q4,
      __wbg_bindSampler_3c7002cb6d56ae8f: X4,
      __wbg_bindVertexArray_c391bd47303d75cd: _m,
      __wbg_blitFramebuffer_ea96ada8bba07582: um,
      __wbg_bufferData_64e9905f2b3d3a6f: wm,
      __wbg_bufferData_99bbbc63f02251c4: pm,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: V8,
      __wbg_performance_4c23a97261596fec: Q5,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: y9,
      __wbg_fetch_2d913f7108d17a24: S6,
      __wbg_fetch_d8c50740ea23b248: A6,
      __wbg_navigator_935098efd1dc7fe5: P5,
      __wbg_devicePixelRatio_8e5ca44720abafec: X7,
      __wbg_document_2634180a4c694068: t6,
      __wbg_instanceof_Window_0d356b88a2f77c42: R8,
      __wbg_hidden_cb32701ca3785fea: v8,
      __wbg_getElementById_c7aba6b93b34bf01: j6,
      __wbg_querySelector_1f3658f4b48e268b: o9,
      __wbg_querySelectorAll_ffda3c891a9eb29a: c9,
      __wbg_hasAttribute_73e1230c9c107e79: x8,
      __wbg_setAttribute_8bccfbabf2a83682: T9,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: O6,
      __wbg_focus_c80921c19b28520b: B6,
      __wbg_uniform2iv_c5e863975dd780d8: H$,
      __wbg_uniform3fv_7723e142be50856f: J$,
      __wbg_uniform3iv_bea3976522e15d48: Q$,
      __wbg_uniform4fv_85ad5d23234895d2: _v,
      __wbg_clear_ff8cfdf420f7dde6: Pm,
      __wbg_clearDepth_ac6b54f112feeaf7: Dm,
      __wbg_clearStencil_56d6a6308294a749: Tm,
      __wbg_colorMask_b0ab9d429a1efa0a: Mm,
      __wbg_compileShader_fcf3f3d2891f73f9: Em,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: Nm,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: Ym,
      __wbg_createFramebuffer_ab73f30b5dc97415: r7,
      __wbg_createProgram_f11c63f59f41b82a: c7,
      __wbg_createRenderbuffer_556000dbb01f5026: s7,
      __wbg_createShader_27d9388313f3b14e: g7,
      __wbg_createTexture_8455c703424c567b: l7,
      __wbg_cullFace_774780fb4177aab8: v7,
      __wbg_deleteBuffer_d758283bea6e0ccf: D7,
      __wbg_deleteFramebuffer_8953b325144192fe: F7,
      __wbg_deleteProgram_0135c6926e75af75: B7,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: C7,
      __wbg_deleteShader_79dbaaed69b7ca3b: E7,
      __wbg_deleteTexture_3acb672a45f9998a: O7,
      __wbg_depthFunc_eaca1bc79f7bf216: q7,
      __wbg_depthMask_3a9074b08d1f68e5: H7,
      __wbg_depthRange_c24a808b3496e0a9: J7,
      __wbg_uniform4iv_a9aaa92f2f458ec2: nv,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: bv,
      __wbg_uniformMatrix3fv_da8c388748c5739b: uv,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: pv,
      __wbg_activeTexture_1d5359b20df41710: C4,
      __wbg_attachShader_683d1070365e7066: O4,
      __wbg_bindAttribLocation_d56d3c40331af7ed: U4,
      __wbg_bindBuffer_e95efaf0d4851845: j4,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: N4,
      __wbg_bindRenderbuffer_d608b211c51ed147: Q4,
      __wbg_bindTexture_ffc56f1e5c5526c6: Z4,
      __wbg_blendColor_a0ba1cdcecc3a34c: rm,
      __wbg_blendEquation_8bfa69f639ae92da: om,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: am,
      __wbg_blendFunc_713c504adab14f98: im,
      __wbg_blendFuncSeparate_3eef699c291dbc87: bm,
      __wbg_disable_4dca6ee0ccc91e4a: e6,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: Y7,
      __wbg_drawArrays_10e1254aa4524ae9: c6,
      __wbg_enable_c6e523307311617a: w6,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: g6,
      __wbg_flush_eb3fb8da2ec00d57: F6,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: P6,
      __wbg_linkProgram_6a2eee02a03b9b00: K8,
      __wbg_pixelStorei_55ad4c67b699537c: X5,
      __wbg_polygonOffset_06dc6468c12a57e1: Z5,
      __wbg_renderbufferStorage_2918fb696fd45663: p9,
      __wbg_scissor_f9696c630e464977: D9,
      __wbg_shaderSource_628c37a476ae65f9: Hy,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: t$,
      __wbg_stencilMask_f9fe198f7fd6fc9c: o$,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: n$,
      __wbg_stencilOpSeparate_6cf50803475d2640: s$,
      __wbg_texParameteri_fe6210a493d48a16: l$,
      __wbg_framebufferTexture2D_3a558e14f56720d2: M6,
      __wbg_frontFace_c9bb1fa659ffd276: L6,
      __wbg_getParameter_91a344e1a84a4669: X6,
      __wbg_getProgramInfoLog_35410850de9ccefe: Z6,
      __wbg_getProgramParameter_bbc667347ac2e882: t8,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: a8,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: o8,
      __wbg_getUniformLocation_340155dc706d3fea: u8,
      __wbg_uniform1f_d34e4b454f7c8e73: O$,
      __wbg_uniform1i_cd9a7f990128ea48: G$,
      __wbg_uniform4f_4410d2faaa7e5dda: Z$,
      __wbg_useProgram_0e1cd86765304939: xv,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: Iv,
      __wbg_viewport_b5bd46a0d111c83c: Fv,
      __wbg_texSubImage2D_1b2ff28f994c325e: x$,
      __wbg_uniform2fv_39277cf2d3cb83c7: q$,
      __wbg_bufferData_5df9bdb32e189eee: gm,
      __wbg_bufferData_26132561617ce8fb: dm,
      __wbg_bufferSubData_44db8a3b4a70b57d: mm,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: Lm,
      __wbg_readPixels_05377f8b6fa1d8eb: u9,
      __wbg_texImage2D_7bc3001cb8602ed2: d$,
      __wbg_navigator_017bc45e84c473cc: B5,
      __wbg_log_d282446d03691e72: X8,
      __wbg_info_a392cd5b7536cfb5: I8,
      __wbg_warn_88c4a5bd9a322000: Bv,
      __wbg_debug_7271beced8b71cd4: A7,
      __wbg_error_933f449d72fef598: y6,
      __wbg_error_50f60c611a3dcf64: x6,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: em,
      __wbg_width_08e66520b99071f4: Pv,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: h7,
      __wbg_height_e9afb506f31052a9: $8,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: W7,
      __wbg_queryCounterEXT_ebb00bcc96221671: a9,
      __wbg_aborted_4d4114700dc4c251: k4,
      __wbg_addEventListener_ea90bc131475777e: V4,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: R6,
      __wbg_set_width_f9e631f4ee129e5c: Gy,
      __wbg_set_height_ef298446b359b0c5: rx,
      __wbg_getContext_70c2d1bed75d4122: U6,
      __wbg_getContext_422b32d0ee4b8076: W6,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: n6,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: i6,
      __wbg_arrayBuffer_ff96d08b7b6be32e: E4,
      __wbg_get_37b48b8fa52d1f2c: w8,
      __wbg_status_0053aa6239760447: _$,
      __wbg_ok_c962da6f1a034d81: J5,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: vv,
      __wbg_statusText_0f412961834ccfe9: e$,
      __wbg_instanceof_Response_79948c98d1d2ba75: C8,
      __wbg_set_signal_4a69430cb12800f3: _y,
      __wbg_new_1e52e3c919312525: k5,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: b6,
      __wbg_observe_592b94857eed8e27: q5,
      __wbg_altKey_7412dd64f8c921c7: R4,
      __wbg_ctrlKey_00097886a21597a7: $7,
      __wbg_shiftKey_273ee8c901267b55: Ny,
      __wbg_metaKey_1c2847b62ad062c1: D5,
      __wbg_repeat_46a5c90df9f6ef0b: m9,
      __wbg_isComposing_e3709163a95a2477: O8,
      __wbg_key_d6b3d2cce3d41872: U8,
      __wbg_code_87bb99fdec02d313: Cm,
      __wbg_now_0f628e0e435c541b: U5,
      __wbg_offsetX_0214819d43aaf6d5: j5,
      __wbg_offsetY_f18f571e33b385ab: N5,
      __wbg_button_bb3285fcdf965178: hm,
      __wbg_signal_4d9d567be73ea52c: Jy,
      __wbg_new_51233fa2a760b272: R5,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: s8,
      __wbg_abort_6e6ea7d259504afc: P4,
      __wbg_preventDefault_c047d3e292b08cc4: _9,
      __wbg_contentRect_0fb8c8900d689a0c: qm,
      __wbg_width_a86bcd32bd998060: kv,
      __wbg_height_cd732bbdc7b66e49: y8,
      __wbg_set_width_031bdecd763c5855: Ly,
      __wbg_set_height_ad5056ea051acd78: _x,
      __wbg_getContext_486aab500e1c34c9: z6,
      __wbg_getContext_9fd4db9b1cf155db: q6,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: B8,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: k8,
      __wbg_resolve_d82363d90af6928a: v9,
      __wbg_then_591b6b3a75ee817a: E$,
      __wbg_iterator_cc47ba25a2be735a: z8,
      __wbg_get_9a29be2cb383ed9a: p8,
      __wbg_next_402fa10b59ab20c3: z5,
      __wbg_new_2e117a478906f062: M5,
      __wbg_new_36e147a8ced3c6e0: V5,
      __wbg_of_62183ea089c00bfa: H5,
      __wbg_isArray_145a34fd0a38d37b: L8,
      __wbg_new_e66a4b7758dd2e5c: L5,
      __wbg_isSafeInteger_a3389a198582f5f6: G8,
      __wbg_is_de5b366c746e004c: W8,
      __wbg_entries_c261c3fa1f281256: h6,
      __wbg_then_2a84678a50976959: R$,
      __wbg_length_589238bdcf171f0e: H8,
      __wbg_prototypesetcall_d721637c7ca66eb8: r9,
      __wbg_set_272b80acaf9a75e8: E9,
      __wbg_new_81880fb5002cb255: E5,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: G5,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: Qy,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: Yy,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Xy,
      __wbg_static_accessor_WINDOW_168f178805d978fe: Zy,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: D8,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: M8,
      __wbg_queueMicrotask_1c9b3800e321a967: b9,
      __wbg_queueMicrotask_311744e534a929a3: s9,
      __wbg_set_4564f7dc44fcb0c9: L9,
      __wbg___wbindgen_number_get_1cc01dd708740256: D4,
      __wbg___wbindgen_in_4990f46af709e33c: m4,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: F4,
      __wbg___wbindgen_is_null_6d937fbfb6478470: y4,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: A4,
      __wbg_Number_c4bdf66bb78f7977: f4,
      __wbg_Error_fdd633d4bb5dd76a: i4,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: h4,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: $4,
      __wbg___wbindgen_is_string_1fca8072260dd261: v4,
      __wbg___wbindgen_string_get_71bb4348194e31f0: T4,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: p4,
      __wbg___wbindgen_is_function_acc5528be2b923f2: x4,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: S4,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: I4,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: w4,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: B4,
      __wbg___wbindgen_debug_string_8a447059637473e2: l4,
      __wbindgen_init_externref_table: eS,
      __wbindgen_cast_0000000000000001: Vv,
      __wbindgen_cast_0000000000000002: Rv,
      __wbindgen_cast_0000000000000003: Ev,
      __wbindgen_cast_0000000000000004: Lv,
      __wbindgen_cast_0000000000000005: Ov,
      __wbindgen_cast_0000000000000006: Gv,
      __wbindgen_cast_0000000000000007: Wv,
      __wbindgen_cast_0000000000000008: zv,
      __wbindgen_cast_0000000000000009: Uv,
      __wbindgen_cast_000000000000000a: qv,
      __wbindgen_cast_000000000000000b: Hv,
      __wbindgen_cast_000000000000000c: jv,
      __wbindgen_cast_000000000000000d: Nv,
      __wbindgen_cast_000000000000000e: Jv,
      __wbindgen_cast_000000000000000f: Kv,
      __wbindgen_cast_0000000000000010: Qv,
      __wbindgen_cast_0000000000000011: Xv,
      __wbindgen_cast_0000000000000012: Yv,
      __wbindgen_cast_0000000000000013: Zv
    }
  }, n4), { memory: LS, clear: OS, on_frame: GS, show: WS, start: zS, stop_frames: US, mount: qS, __wbg_proteusapp_free: HS, proteusapp_addChild: jS, proteusapp_animateTo: NS, proteusapp_bakeTexture: JS, proteusapp_bakedImageSize: KS, proteusapp_bakedTextSize: QS, proteusapp_channelDestroy: XS, proteusapp_channelSet: YS, proteusapp_clearFocus: ZS, proteusapp_component: eA, proteusapp_copyBakedImageFrom: _A, proteusapp_createVideo: tA, proteusapp_cropImage: rA, proteusapp_declareGeometry: nA, proteusapp_declaredGeometry: aA, proteusapp_destroy: cA, proteusapp_devices: oA, proteusapp_focus: bA, proteusapp_focused: sA, proteusapp_freeResources: iA, proteusapp_get: fA, proteusapp_hideVideo: uA, proteusapp_inputDevices: dA, proteusapp_isFocused: gA, proteusapp_loadTexture: wA, proteusapp_mergeFrom: pA, proteusapp_mergeFromWithBehavior: lA, proteusapp_new: mA, proteusapp_onBlur: hA, proteusapp_onClick: xA, proteusapp_onDrag: yA, proteusapp_onDropped: $A, proteusapp_onFocus: vA, proteusapp_onFocusLost: SA, proteusapp_onHoverEnter: AA, proteusapp_onHoverExit: IA, proteusapp_onPress: DA, proteusapp_onRelease: TA, proteusapp_onTransitionComplete: FA, proteusapp_pointerLeft: BA, proteusapp_pointerMoved: PA, proteusapp_pointerPressed: kA, proteusapp_pointerReleased: CA, proteusapp_releaseVideo: MA, proteusapp_removeChild: VA, proteusapp_setDeclaredGeometry: RA, proteusapp_setDefaultFocus: EA, proteusapp_setDevices: LA, proteusapp_setDisabled: OA, proteusapp_setImage: GA, proteusapp_setInputDevices: WA, proteusapp_setInteractive: zA, proteusapp_setOpacity: UA, proteusapp_setText: qA, proteusapp_setTexture: HA, proteusapp_setTransitionInteraction: jA, proteusapp_setVideoCrossfade: NA, proteusapp_setVisible: JA, proteusapp_showVideo: KA, proteusapp_splitTo: QA, proteusapp_splitToWithBehavior: XA, proteusapp_splitToWithStates: YA, proteusapp_texture: ZA, proteusapp_textureState: eI, proteusapp_tick: _I, proteusapp_transitionChannel: tI, proteusapp_uploadVideoFrame: rI, __wbg_handle_free: nI, __wbg_texturehandle_free: aI, __wbg_transitionchannel_free: cI, __wbg_videohandle_free: oI, handle_fromId: bI, handle_id: sI, texturehandle_fromId: iI, texturehandle_id: fI, __abort_handler: uI, __instance_terminated: dI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: gI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: wI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: pI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: lI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: mI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: hI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: xI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: yI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: $I, __wbindgen_malloc: vI, __wbindgen_realloc: SI, __wbindgen_exn_store: AI, __externref_table_alloc: II, __wbindgen_externrefs: DI, __wbindgen_free: TI, __wbindgen_destroy_closure: FI, __externref_table_dealloc: BI, __wbindgen_start: jt } = ES, PI = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: uI,
    __externref_table_alloc: II,
    __externref_table_dealloc: BI,
    __instance_terminated: dI,
    __wbg_handle_free: nI,
    __wbg_proteusapp_free: HS,
    __wbg_texturehandle_free: aI,
    __wbg_transitionchannel_free: cI,
    __wbg_videohandle_free: oI,
    __wbindgen_destroy_closure: FI,
    __wbindgen_exn_store: AI,
    __wbindgen_externrefs: DI,
    __wbindgen_free: TI,
    __wbindgen_malloc: vI,
    __wbindgen_realloc: SI,
    __wbindgen_start: jt,
    clear: OS,
    handle_fromId: bI,
    handle_id: sI,
    memory: LS,
    mount: qS,
    on_frame: GS,
    proteusapp_addChild: jS,
    proteusapp_animateTo: NS,
    proteusapp_bakeTexture: JS,
    proteusapp_bakedImageSize: KS,
    proteusapp_bakedTextSize: QS,
    proteusapp_channelDestroy: XS,
    proteusapp_channelSet: YS,
    proteusapp_clearFocus: ZS,
    proteusapp_component: eA,
    proteusapp_copyBakedImageFrom: _A,
    proteusapp_createVideo: tA,
    proteusapp_cropImage: rA,
    proteusapp_declareGeometry: nA,
    proteusapp_declaredGeometry: aA,
    proteusapp_destroy: cA,
    proteusapp_devices: oA,
    proteusapp_focus: bA,
    proteusapp_focused: sA,
    proteusapp_freeResources: iA,
    proteusapp_get: fA,
    proteusapp_hideVideo: uA,
    proteusapp_inputDevices: dA,
    proteusapp_isFocused: gA,
    proteusapp_loadTexture: wA,
    proteusapp_mergeFrom: pA,
    proteusapp_mergeFromWithBehavior: lA,
    proteusapp_new: mA,
    proteusapp_onBlur: hA,
    proteusapp_onClick: xA,
    proteusapp_onDrag: yA,
    proteusapp_onDropped: $A,
    proteusapp_onFocus: vA,
    proteusapp_onFocusLost: SA,
    proteusapp_onHoverEnter: AA,
    proteusapp_onHoverExit: IA,
    proteusapp_onPress: DA,
    proteusapp_onRelease: TA,
    proteusapp_onTransitionComplete: FA,
    proteusapp_pointerLeft: BA,
    proteusapp_pointerMoved: PA,
    proteusapp_pointerPressed: kA,
    proteusapp_pointerReleased: CA,
    proteusapp_releaseVideo: MA,
    proteusapp_removeChild: VA,
    proteusapp_setDeclaredGeometry: RA,
    proteusapp_setDefaultFocus: EA,
    proteusapp_setDevices: LA,
    proteusapp_setDisabled: OA,
    proteusapp_setImage: GA,
    proteusapp_setInputDevices: WA,
    proteusapp_setInteractive: zA,
    proteusapp_setOpacity: UA,
    proteusapp_setText: qA,
    proteusapp_setTexture: HA,
    proteusapp_setTransitionInteraction: jA,
    proteusapp_setVideoCrossfade: NA,
    proteusapp_setVisible: JA,
    proteusapp_showVideo: KA,
    proteusapp_splitTo: QA,
    proteusapp_splitToWithBehavior: XA,
    proteusapp_splitToWithStates: YA,
    proteusapp_texture: ZA,
    proteusapp_textureState: eI,
    proteusapp_tick: _I,
    proteusapp_transitionChannel: tI,
    proteusapp_uploadVideoFrame: rI,
    show: WS,
    start: zS,
    stop_frames: US,
    texturehandle_fromId: iI,
    texturehandle_id: fI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: $I,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: gI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: mI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: hI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: xI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: yI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: pI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: lI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: wI
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  RS(PI);
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
      const a = n.between(t, r), c = n.between(t, r);
      return {
        x: n.between(0, te),
        y: n.between(0, re),
        width: a,
        height: c,
        r: n.next(),
        g: n.next(),
        b: n.next()
      };
    });
  }
  const kI = `#version 300 es
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
}`, CI = `#version 300 es
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
}`, MI = `#version 300 es
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
  function Nt(_, e) {
    const t = (n, a) => {
      const c = _.createShader(n);
      if (_.shaderSource(c, a), _.compileShader(c), !_.getShaderParameter(c, _.COMPILE_STATUS)) throw new Error(_.getShaderInfoLog(c) ?? "shader failed to compile");
      return c;
    }, r = _.createProgram();
    if (_.attachShader(r, t(_.VERTEX_SHADER, e)), _.attachShader(r, t(_.FRAGMENT_SHADER, kI)), _.linkProgram(r), !_.getProgramParameter(r, _.LINK_STATUS)) throw new Error(_.getProgramInfoLog(r) ?? "program failed to link");
    return r;
  }
  function Jt(_) {
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
  function Kt(_) {
    _.viewport(0, 0, _.drawingBufferWidth, _.drawingBufferHeight), _.clearColor(0, 0, 0, 1), _.clear(_.COLOR_BUFFER_BIT), _.enable(_.BLEND), _.blendFunc(_.ONE, _.ONE_MINUS_SRC_ALPHA);
  }
  function VI(_) {
    return (e, t, r) => {
      const n = Nt(_, CI), a = Jt(_), c = _.createVertexArray();
      _.bindVertexArray(c);
      const o = _.getAttribLocation(n, "a_corner");
      _.enableVertexAttribArray(o), _.vertexAttribPointer(o, 2, _.FLOAT, false, 0, 0);
      const b = _.getUniformLocation(n, "u_rect"), f = _.getUniformLocation(n, "u_color");
      return {
        draw() {
          Kt(_), _.useProgram(n), _.bindVertexArray(c), _.uniform2f(_.getUniformLocation(n, "u_viewport"), te, re), _.uniform1f(_.getUniformLocation(n, "u_radius"), r), e.forEach((d, A) => {
            _.uniform4f(b, t[A * 2], t[A * 2 + 1], d.width, d.height), _.uniform3f(f, d.r, d.g, d.b), _.drawArrays(_.TRIANGLE_STRIP, 0, 4);
          });
        },
        dispose() {
          _.deleteProgram(n), _.deleteBuffer(a), _.deleteVertexArray(c);
        }
      };
    };
  }
  function RI(_) {
    return (e, t, r) => {
      const n = Nt(_, MI), a = Jt(_), c = _.createVertexArray();
      _.bindVertexArray(c);
      const o = _.getAttribLocation(n, "a_corner");
      _.enableVertexAttribArray(o), _.vertexAttribPointer(o, 2, _.FLOAT, false, 0, 0);
      const b = new Float32Array(e.length * 7), f = _.createBuffer();
      _.bindBuffer(_.ARRAY_BUFFER, f), _.bufferData(_.ARRAY_BUFFER, b.byteLength, _.DYNAMIC_DRAW);
      const d = _.getAttribLocation(n, "a_rect"), A = _.getAttribLocation(n, "a_color");
      return _.enableVertexAttribArray(d), _.vertexAttribPointer(d, 4, _.FLOAT, false, 28, 0), _.vertexAttribDivisor(d, 1), _.enableVertexAttribArray(A), _.vertexAttribPointer(A, 3, _.FLOAT, false, 28, 16), _.vertexAttribDivisor(A, 1), {
        draw() {
          e.forEach((J, f_) => {
            const ne = f_ * 7;
            b[ne] = t[f_ * 2], b[ne + 1] = t[f_ * 2 + 1], b[ne + 2] = J.width, b[ne + 3] = J.height, b[ne + 4] = J.r, b[ne + 5] = J.g, b[ne + 6] = J.b;
          }), Kt(_), _.useProgram(n), _.bindVertexArray(c), _.bindBuffer(_.ARRAY_BUFFER, f), _.bufferSubData(_.ARRAY_BUFFER, 0, b), _.uniform2f(_.getUniformLocation(n, "u_viewport"), te, re), _.uniform1f(_.getUniformLocation(n, "u_radius"), r), _.drawArraysInstanced(_.TRIANGLE_STRIP, 0, 4, e.length);
        },
        dispose() {
          _.deleteProgram(n), _.deleteBuffer(a), _.deleteBuffer(f), _.deleteVertexArray(c);
        }
      };
    };
  }
  function EI(_) {
    return (e, t, r) => {
      const n = e.map((a) => `rgb(${Math.round(a.r * 255)} ${Math.round(a.g * 255)} ${Math.round(a.b * 255)})`);
      return {
        draw() {
          _.fillStyle = "black", _.fillRect(0, 0, te, re), e.forEach((a, c) => {
            _.fillStyle = n[c], _.beginPath(), _.roundRect(t[c * 2] - a.width / 2, t[c * 2 + 1] - a.height / 2, a.width, a.height, r), _.fill();
          });
        },
        dispose() {
        }
      };
    };
  }
  const V_ = 500;
  function LI(_) {
    return _ < 0.5 ? 2 * _ * _ : 1 - (-2 * _ + 2) ** 2 / 2;
  }
  const OI = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
  class nt {
    constructor(e) {
      this.random = new Te(), this.movedAt = -1 / 0, this.current = new Float32Array(e.flatMap((t) => [
        t.x,
        t.y
      ])), this.from = this.current.slice(), this.to = this.current.slice();
    }
    retarget(e) {
      if (!(e - this.movedAt < V_)) {
        this.movedAt = e, this.from.set(this.current);
        for (let t = 0; t < this.to.length; t += 2) this.to[t] = this.random.between(0, te), this.to[t + 1] = this.random.between(0, re);
        return this.to;
      }
    }
    advance(e) {
      const t = LI(Math.min(1, (e - this.movedAt) / V_));
      for (let r = 0; r < this.current.length; r++) this.current[r] = this.from[r] + (this.to[r] - this.from[r]) * t;
    }
  }
  function GI(_, e, t) {
    const r = new nt(e), n = document.createDocumentFragment(), a = e.map((c, o) => {
      const b = document.createElement("div"), f = b.style;
      return f.position = "absolute", f.left = "0", f.top = "0", f.width = `${c.width}px`, f.height = `${c.height}px`, f.borderRadius = `${t}px`, f.background = `rgb(${Math.round(c.r * 255)} ${Math.round(c.g * 255)} ${Math.round(c.b * 255)})`, f.transform = It(r.current[o * 2], r.current[o * 2 + 1], c), f.transition = `transform ${V_}ms ${OI}`, n.append(b), b;
    });
    return _.append(n), {
      frame(c) {
        const o = r.retarget(c);
        o && a.forEach((b, f) => {
          b.style.transform = It(o[f * 2], o[f * 2 + 1], e[f]);
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
  const WI = [
    100,
    1e3,
    5e3,
    1e4,
    25e3,
    5e4,
    1e5
  ], zI = 60, UI = 2e3, R_ = 1e5, Dt = 100, at = `proteus-bench:${location.pathname}`, qI = 300, HI = 15e3, a_ = document.getElementById("status"), Qt = document.getElementById("results"), he = document.getElementById("run"), o_ = document.getElementById("reset"), xe = {
    proteus: document.getElementById("proteus"),
    proteusRust: document.getElementById("proteus-rust"),
    webgl: document.getElementById("webgl"),
    canvas2d: document.getElementById("canvas2d"),
    css: document.getElementById("css")
  }, Xt = new URLSearchParams(location.search), Ie = ((_a2 = Xt.get("counts")) == null ? void 0 : _a2.split(",").map(Number).filter((_) => _ > 0)) ?? WI, ct = (((_b2 = Xt.get("scenes")) == null ? void 0 : _b2.split(",")) ?? [
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
        const a = ((_a3 = n[1].match(/\((\w+)\)\s*$/)) == null ? void 0 : _a3[1]) ?? "", c = n[1].replace(/\(\w+\)\s*$/, "").trim();
        Yt = `${/WebGpu/i.test(a) ? "WebGPU" : /Gl/i.test(a) ? "WebGL2" : a}${c ? `, ${c}` : " (the browser doesn't name the GPU)"}`;
      }
      e(...t);
    };
  }
  function jI(_) {
    const e = [
      ..._
    ].sort((r, n) => r - n), t = (r) => e[Math.round((e.length - 1) * r)];
    return {
      median: t(0.5),
      p99: t(0.99),
      frames: e.length
    };
  }
  function Pe(_) {
    return new Promise((e) => {
      const t = [];
      let r = 0, n = 0, a = 0, c = 0, o = false;
      const b = _((f) => {
        if (r += 1, r === 1 && (c = f), !o && (r >= zI || f - c > UI)) {
          o = true, a = f, n = f;
          return;
        }
        o && t.push(f - n), n = f, o && (t.length >= qI || f - a > HI) && (b(), e(jI(t)));
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
  const Zt = Math.max(4096, 2 ** Math.ceil(Math.log2(Math.max(...Ie))));
  let er, E_;
  await e4("proteus", {
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
  await b4("proteus-rust", Zt);
  async function NI(_, e) {
    o4(_, e);
    const t = await Pe((r) => (c4(r), () => s4()));
    return a4(), t;
  }
  async function JI(_, e) {
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
    })), c = _ === "moving" ? new nt(r) : void 0, o = await Pe((b) => (E_ = (f) => {
      const d = c == null ? void 0 : c.retarget(f);
      d && a.forEach((A, J) => A.animateTo(n(d[J * 2], d[J * 2 + 1], J), {
        duration: 0.5,
        easing: "easeInOutQuad"
      })), b(f);
    }, () => {
      E_ = void 0;
    }));
    for (const b of a) b.destroy();
    return o;
  }
  const Fe = window.devicePixelRatio;
  for (const _ of [
    xe.webgl,
    xe.canvas2d
  ]) _.width = te * Fe, _.height = re * Fe;
  const we = xe.webgl.getContext("webgl2", {
    antialias: false
  }), _r = xe.canvas2d.getContext("2d");
  _r.scale(Fe, Fe);
  async function bt(_, e, t) {
    const r = rt(e, t), n = new nt(r), a = _(r, n.current, H[e].radius), c = await Pe(ot((o) => {
      e === "moving" && (n.retarget(o), n.advance(o)), a.draw();
    }));
    return a.dispose(), c;
  }
  async function KI(_) {
    const e = GI(xe.css, rt("moving", _), H.moving.radius), t = await Pe(ot((r) => e.frame(r)));
    return e.dispose(), t;
  }
  function Tt(_) {
    for (const [e, t] of Object.entries(xe)) t.style.visibility = e === _ ? "visible" : "hidden";
  }
  const y_ = {
    title: "Proteus (TypeScript)",
    surface: "proteus",
    time: JI
  }, $_ = {
    title: "Proteus (Rust)",
    surface: "proteusRust",
    time: NI
  }, QI = {
    title: "CSS",
    surface: "css",
    time: (_, e) => KI(e)
  }, v_ = {
    title: "Canvas 2D",
    surface: "canvas2d",
    time: (_, e) => bt(EI(_r), _, e)
  }, S_ = {
    title: "Naive WebGL2",
    surface: "webgl",
    time: (_, e) => bt(VI(we), _, e)
  }, A_ = {
    title: "Batched WebGL2",
    surface: "webgl",
    time: (_, e) => bt(RI(we), _, e)
  }, tr = {
    small: [
      y_,
      $_,
      v_,
      S_,
      A_
    ],
    large: [
      y_,
      $_,
      v_,
      S_,
      A_
    ],
    moving: [
      y_,
      $_,
      QI,
      v_,
      S_,
      A_
    ]
  }, L_ = {
    small: 1 / 0,
    large: R_,
    moving: 1 / 0
  }, XI = {
    small: `Small components (${H.small.min}\u2013${H.small.max} px), still: the cost per component`,
    large: `Large components (${H.large.min}\u2013${H.large.max} px), still: filling pixels dominates`,
    moving: `Moving components (${H.moving.min}\u2013${H.moving.max} px): every one always moving`
  };
  function YI(_) {
    const e = we.getExtension("WEBGL_debug_renderer_info"), t = e ? we.getParameter(e.UNMASKED_RENDERER_WEBGL) : we.getParameter(we.RENDERER);
    return [
      `- Browser: ${navigator.userAgent}`,
      `- GPU: ${t}`,
      `- Proteus's adapter: ${Yt}`,
      `- Device pixel ratio: ${Fe}; canvas ${te} \xD7 ${re} CSS pixels`,
      `- Refresh rate: about ${(1e3 / _).toFixed(0)} Hz (a frame every ${_.toFixed(2)} ms)`
    ].join(`
`);
  }
  function ZI() {
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
      localStorage.setItem(at, JSON.stringify(R));
    } catch {
    }
  }
  const R = ZI();
  if (R.running) {
    const [_, e, t] = R.running.split("|");
    R.cells[R.running] = "crashed | \u2014", R.dropped[`${_}|${t}`] = `crashed at ${e}`, R.running = void 0, c_();
  }
  const eD = (_) => `${_.median.toFixed(2)} | ${_.p99.toFixed(2)}`;
  function rr(_) {
    return Ie.filter((e) => e <= L_[_]).flatMap((e) => tr[_].map((t) => [
      e,
      t
    ])).filter(([e, t]) => R.cells[`${_}|${e}|${t.title}`] === void 0);
  }
  async function _D() {
    he.disabled = true, o_.disabled = true, R.refresh === void 0 && (Tt("webgl"), a_.textContent = "Measuring the refresh rate\u2026", R.refresh = (await Pe(ot(() => {
    }))).median, c_());
    for (const _ of ct) for (const [e, t] of rr(_)) {
      const r = `${_}|${e}|${t.title}`;
      if (R.dropped[`${_}|${t.title}`]) {
        R.cells[r] = "skipped | \u2014";
        continue;
      }
      Tt(t.surface), a_.textContent = `${_} scene, ${e} components: ${t.title}\u2026`, R.running = r, c_();
      try {
        const a = await t.time(_, e);
        R.cells[r] = eD(a), a.median >= Dt && (R.dropped[`${_}|${t.title}`] = `slower than ${Dt} ms a frame at ${e}`);
      } catch (a) {
        console.error(a), R.cells[r] = "failed | \u2014", R.dropped[`${_}|${t.title}`] = `failed at ${e}: ${String(a)}`;
      }
      R.running = void 0, c_(), Qt.textContent = nr();
    }
    a_.textContent = "Done. Copy the results below.", he.textContent = "Run", he.disabled = false, o_.disabled = false;
  }
  function nr() {
    const _ = [
      YI(R.refresh ?? 0)
    ];
    for (const e of ct) {
      const t = tr[e].map((a) => a.title), r = Ie.filter((a) => a <= L_[e]).map((a) => t.map((c) => R.cells[`${e}|${a}|${c}`])).map((a, c) => ({
        count: Ie.filter((o) => o <= L_[e])[c],
        cells: a
      })).filter(({ cells: a }) => a.some((c) => c !== void 0));
      if (r.length === 0) continue;
      _.push("", `### ${XI[e]}`, "", "Frame interval, median and p99, in milliseconds:", "", `| Components | ${t.map((a) => `${a} | p99`).join(" | ")} |`, `|---:|${t.map(() => "---:|---:").join("|")}|`, ...r.map(({ count: a, cells: c }) => `| ${a} | ${c.map((o) => o ?? "\u2026 | \u2026").join(" | ")} |`));
      const n = t.map((a) => [
        a,
        R.dropped[`${e}|${a}`]
      ]).filter(([, a]) => a).map(([a, c]) => `- ${a}: ${c}; skipped after that.`);
      n.length > 0 && _.push("", ...n), e === "large" && Ie.some((a) => a > R_) && _.push("", `The large scene stops at ${R_}: past it, Safari's tab crashes.`);
    }
    return _.join(`
`);
  }
  he.addEventListener("click", () => void _D());
  o_.addEventListener("click", () => {
    try {
      localStorage.removeItem(at);
    } catch {
    }
    location.reload();
  });
  const ke = Object.keys(R.cells).length > 0, st = ct.some((_) => rr(_).length > 0);
  ke && (Qt.textContent = nr());
  he.textContent = ke && st ? "Resume" : "Run";
  a_.textContent = ke ? st ? "A run was under way, and is saved: Resume carries on from where it stopped." : "The last run is complete; its results are below. Start over to run again." : "Ready. Keep this tab in front while it runs: a hidden tab stops drawing.";
  he.disabled = ke && !st;
  o_.disabled = !ke;
})();
