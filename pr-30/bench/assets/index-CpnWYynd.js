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
  const ar = "" + new URL("proteus_sdk_web_bg-Dd77RO3T.wasm", import.meta.url).href, L_ = async (_ = {}, e) => {
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
  let x = class A_ {
    static __wrap(e) {
      const t = Object.create(A_.prototype);
      return t.__wbg_ptr = e, st.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, st.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      u.__wbg_handle_free(e, 0);
    }
    static fromId(e) {
      const t = u.handle_fromId(e);
      return A_.__wrap(t);
    }
    id() {
      return u.handle_id(this.__wbg_ptr);
    }
  };
  Symbol.dispose && (x.prototype[Symbol.dispose] = x.prototype.free);
  let I_ = class {
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, it.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      u.__wbg_proteusapp_free(e, 0);
    }
    addChild(e, t) {
      p(e, x), p(t, x);
      const r = u.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw B(r[0]);
    }
    animateTo(e, t, r) {
      p(e, x);
      const n = u.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw B(n[0]);
    }
    bakeTexture(e, t, r, n) {
      const a = u_(r, u.__wbindgen_malloc), c = O, b = u.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, c, n);
      return K.__wrap(b);
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
      if (c[1]) throw B(c[0]);
    }
    component(e) {
      const t = u.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw B(t[1]);
      return x.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      p(e, x), p(t, x);
      const r = u.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw B(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = u.proteusapp_createVideo(this.__wbg_ptr);
      return ue.__wrap(e);
    }
    cropImage(e, t) {
      p(e, x);
      const r = u.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw B(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      p(e, x);
      const r = u.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    declaredGeometry(e) {
      return p(e, x), u.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      p(e, x);
      var t = e.__destroy_into_raw();
      const r = u.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    devices(e) {
      return p(e, x), u.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    freeResources(e) {
      p(e, x);
      const t = u.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw B(t[0]);
    }
    get(e) {
      return p(e, x), u.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      p(e, x);
      const t = u.proteusapp_hideVideo(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw B(t[0]);
    }
    inputDevices() {
      return u.proteusapp_inputDevices(this.__wbg_ptr);
    }
    loadTexture(e, t) {
      const r = u_(e, u.__wbindgen_malloc), n = O, a = u.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : K.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      p(e, x);
      const a = Ve(t, u.__wbindgen_malloc), c = O, b = u.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, c, r, n);
      if (b[1]) throw B(b[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      p(e, x);
      const c = Ve(t, u.__wbindgen_malloc), b = O, o = u.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, c, b, r, n, a);
      if (o[1]) throw B(o[0]);
    }
    constructor() {
      const e = u.proteusapp_new();
      return this.__wbg_ptr = e, it.register(this, this.__wbg_ptr, this), this;
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
      if (r[1]) throw B(r[0]);
    }
    setDeclaredGeometry(e, t) {
      p(e, x);
      const r = u.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setDevices(e, t) {
      p(e, x);
      const r = u.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setDisabled(e, t) {
      p(e, x);
      const r = u.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setImage(e, t) {
      p(e, x);
      const r = u.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setInputDevices(e) {
      const t = u.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw B(t[0]);
    }
    setInteractive(e, t) {
      p(e, x);
      const r = u.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setOpacity(e, t) {
      p(e, x);
      const r = u.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setText(e, t) {
      p(e, x);
      const r = u.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setTexture(e, t) {
      p(e, x), p(t, K);
      const r = u.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw B(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      p(e, x);
      const r = u.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    setVideoCrossfade(e, t) {
      p(e, x);
      const r = u.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw B(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      p(e, x);
      const r = u.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw B(r[0]);
    }
    showVideo(e, t) {
      p(e, x), p(t, ue);
      const r = u.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw B(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      p(e, x);
      const a = Ve(t, u.__wbindgen_malloc), c = O, b = u.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, c, r, n);
      if (b[1]) throw B(b[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      p(e, x);
      const c = Ve(t, u.__wbindgen_malloc), b = O, o = u.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, c, b, r, n, a);
      if (o[1]) throw B(o[0]);
    }
    splitToWithStates(e, t, r, n) {
      p(e, x);
      const a = u.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw B(a[0]);
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
  Symbol.dispose && (I_.prototype[Symbol.dispose] = I_.prototype.free);
  let K = class T_ {
    static __wrap(e) {
      const t = Object.create(T_.prototype);
      return t.__wbg_ptr = e, ft.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ft.unregister(this), e;
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
  let fe = class Bt {
    static __wrap(e) {
      const t = Object.create(Bt.prototype);
      return t.__wbg_ptr = e, ut.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ut.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      u.__wbg_transitionchannel_free(e, 0);
    }
  };
  Symbol.dispose && (fe.prototype[Symbol.dispose] = fe.prototype.free);
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
      u.__wbg_videohandle_free(e, 0);
    }
  };
  Symbol.dispose && (ue.prototype[Symbol.dispose] = ue.prototype.free);
  function cr(_, e) {
    return Error(N(_, e));
  }
  function br(_) {
    return Number(_);
  }
  function or(_, e) {
    const t = String(e), r = o_(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = O;
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
    const t = D_(e), r = o_(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = O;
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
    var n = q(r) ? 0 : o_(r, u.__wbindgen_malloc, u.__wbindgen_realloc), a = O;
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
  function Tr() {
    return W(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Dr() {
    return W(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function Br() {
    return W(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function Fr(_, e) {
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
    const t = e.label, r = o_(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = O;
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
  function bn() {
    return W(function(_) {
      return _.next();
    }, arguments);
  }
  function on(_) {
    return _.next;
  }
  function sn(_) {
    return _.onSubmittedWorkDone();
  }
  function fn(_, e, t) {
    Uint8Array.prototype.set.call(W_(_, e), t);
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
  function Tn(_, e) {
    _.aspect = kt[e];
  }
  function Dn(_, e) {
    _.aspect = kt[e];
  }
  function Bn(_, e) {
    _.b = e;
  }
  function Fn(_, e) {
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
    _.depthStoreOp = G_[e];
  }
  function jn(_, e) {
    _.dimension = ac[e];
  }
  function Hn(_, e) {
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
    _.loadOp = O_[e];
  }
  function ba(_, e) {
    _.mipLevel = e >>> 0;
  }
  function oa(_, e) {
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
    _.stencilLoadOp = O_[e];
  }
  function va(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function Sa(_, e) {
    _.stencilStoreOp = G_[e];
  }
  function Aa(_, e) {
    _.storeOp = G_[e];
  }
  function Ia(_, e) {
    _.texture = e;
  }
  function Ta(_, e) {
    _.timestampWrites = e;
  }
  function Da(_, e) {
    _.usage = e >>> 0;
  }
  function Ba(_, e) {
    _.usage = e >>> 0;
  }
  function Fa(_, e) {
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
  function Ra(_, e) {
    _.y = e >>> 0;
  }
  function Va(_, e) {
    _.z = e >>> 0;
  }
  function Ea() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return q(_) ? 0 : Fe(_);
  }
  function La() {
    const _ = typeof global > "u" ? null : global;
    return q(_) ? 0 : Fe(_);
  }
  function Oa() {
    const _ = typeof self > "u" ? null : self;
    return q(_) ? 0 : Fe(_);
  }
  function Ga() {
    const _ = typeof window > "u" ? null : window;
    return q(_) ? 0 : Fe(_);
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
  function Na() {
    return W(function(_, e, t, r, n, a, c) {
      _.writeBuffer(e, t, W_(r, n), a, c);
    }, arguments);
  }
  function Ja() {
    return W(function(_, e, t, r, n, a) {
      _.writeTexture(e, W_(t, r), n, a);
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
    if (r[1]) throw B(r[0]);
  }
  const Pt = [
    "uint16",
    "uint32"
  ], O_ = [
    "load",
    "clear"
  ], G_ = [
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
  ], st = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => u.__wbg_handle_free(_, 1)), it = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => u.__wbg_proteusapp_free(_, 1)), ft = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => u.__wbg_texturehandle_free(_, 1)), ut = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => u.__wbg_transitionchannel_free(_, 1)), dt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => u.__wbg_videohandle_free(_, 1));
  function Fe(_) {
    const e = u.__externref_table_alloc();
    return u.__wbindgen_externrefs.set(e, _), e;
  }
  function p(_, e) {
    if (!(_ instanceof e)) throw new Error(`expected instance of ${e.name}`);
  }
  const gt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => u.__wbindgen_destroy_closure(_.a, _.b));
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
      for (let c = 1; c < n; c++) a += ", " + D_(_[c]);
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
    return _ = _ >>> 0, oc().subarray(_ / 4, _ / 4 + e);
  }
  function W_(_, e) {
    return _ = _ >>> 0, pe().subarray(_ / 1, _ / 1 + e);
  }
  let oe = null;
  function U() {
    return (oe === null || oe.buffer.detached === true || oe.buffer.detached === void 0 && oe.buffer !== u.memory.buffer) && (oe = new DataView(u.memory.buffer)), oe;
  }
  let Ce = null;
  function bc() {
    return (Ce === null || Ce.byteLength === 0) && (Ce = new Float64Array(u.memory.buffer)), Ce;
  }
  function N(_, e) {
    return ic(_ >>> 0, e);
  }
  let Me = null;
  function oc() {
    return (Me === null || Me.byteLength === 0) && (Me = new Uint32Array(u.memory.buffer)), Me;
  }
  let Re = null;
  function pe() {
    return (Re === null || Re.byteLength === 0) && (Re = new Uint8Array(u.memory.buffer)), Re;
  }
  function W(_, e) {
    try {
      return _.apply(this, e);
    } catch (t) {
      const r = Fe(t);
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
      --r.cnt === 0 && (u.__wbindgen_destroy_closure(r.a, r.b), r.a = 0, gt.unregister(r));
    }, gt.register(n, r, r), n;
  }
  function u_(_, e) {
    const t = e(_.length * 1, 1) >>> 0;
    return pe().set(_, t / 1), O = _.length, t;
  }
  function Ve(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return bc().set(_, t / 8), O = _.length, t;
  }
  function o_(_, e, t) {
    if (t === void 0) {
      const b = ve.encode(_), o = e(b.length, 1) >>> 0;
      return pe().subarray(o, o + b.length).set(b), O = b.length, o;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = pe();
    let c = 0;
    for (; c < r; c++) {
      const b = _.charCodeAt(c);
      if (b > 127) break;
      a[n + c] = b;
    }
    if (c !== r) {
      c !== 0 && (_ = _.slice(c)), n = t(n, r, r = c + _.length * 3, 1) >>> 0;
      const b = pe().subarray(n + c, n + r), o = ve.encodeInto(_, b);
      c += o.written, n = t(n, r, c, 1) >>> 0;
    }
    return O = c, n;
  }
  function B(_) {
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
  const uc = await L_({
    "./proteus_sdk_web_bg.js": {
      __wbg_next_0c4066e251d2eff9: bn,
      __wbg_done_b62d4a7d2286852a: Rr,
      __wbg_value_49f783bb59765962: Ha,
      __wbg_length_c6054974c0a6cdb9: en,
      __wbg_instanceof_Map_afa18d5840c04c15: Nr,
      __wbg_get_197a3fe98f169e38: zr,
      __wbg_get_unchecked_54a4374c38e08460: qr,
      __wbg_push_f724b5db8acf89d2: un,
      __wbg_call_8e98ed2f3c86c4b5: Dr,
      __wbg_call_5575218572ead796: Tr,
      __wbg_call_0e855b388e315e17: Ir,
      __wbg_set_dc601f4a69da0bc2: Ln,
      __wbg_get_with_ref_key_6412cf3094599694: jr,
      __wbg_set_6be42768c690e380: Sn,
      __wbg_String_8564e559799eccda: or,
      __wbg_set_texture_16d2be474ce6ad0c: Ia,
      __wbg_set_mip_level_246db61be15bdd69: ba,
      __wbg_set_x_56f0c2c08a62725c: Ma,
      __wbg_set_y_04fb8ce84735b4e1: Ra,
      __wbg_set_z_a51316db27a4941e: Va,
      __wbg_set_origin_9b3b0fbe0a5dc469: ua,
      __wbg_set_aspect_77332ac136ee94eb: Tn,
      __wbg_set_a_5f6e488475272136: An,
      __wbg_set_b_688365d692bba214: Bn,
      __wbg_set_g_d4d1d77cf8fdd362: Xn,
      __wbg_set_r_527e5a41c4b1a846: ga,
      __wbg_set_width_1a5e2e86fa5bdcd8: Ca,
      __wbg_set_height_e8b5483b8c117d5e: Yn,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: Wn,
      __wbg_set_format_e9d4b1475bb3bd3b: Qn,
      __wbg_set_size_a61ff22205255d61: xa,
      __wbg_set_usage_7fa9cd18d1104aca: Ba,
      __wbg_set_label_0c1bd0e976cf0a9a: ea,
      __wbg_set_dimension_36e13ccecae5af4b: Hn,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: sa,
      __wbg_set_sample_count_865e1d19b84e27e6: ma,
      __wbg_set_view_formats_bab284fc81b40e70: ka,
      __wbg_createTexture_9e76b80a2dc0d12e: kr,
      __wbg_set_entries_fc76ca4d7da6a709: Jn,
      __wbg_set_layout_eeef59714f5bf48b: aa,
      __wbg_set_label_f92ae11c77d74198: na,
      __wbg_createBindGroup_2320df4db188406c: Fr,
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
      __wbg_set_timestamp_writes_c552d52fbb417005: Ta,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: Ar,
      __wbg_copyTextureToTexture_1be188df1e535c0a: Br,
      __wbg_label_47480289cc2bce71: Yr,
      __wbg_set_label_2d2227f4d5991e50: _a,
      __wbg_finish_cfaeede3baf55be1: Gr,
      __wbg_finish_087cb89c65c06eb1: Or,
      __wbg_drawIndexed_68637ebab6dd8d6e: Vr,
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
      __wbg_set_bytes_per_row_91681ca78d744888: Rn,
      __wbg_set_rows_per_image_d198b7e73a38978b: la,
      __wbg_set_offset_a097a8050a3a9a33: fa,
      __wbg_writeTexture_b45b69132e46a227: Ja,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: sn,
      __wbg_submit_1290d44bb76ecef4: Wa,
      __wbg_getMappedRange_5ed22727c9679168: Wr,
      __wbg_unmap_8f06698a75b8331a: ja,
      __wbg_destroy_b5b39f25f0799295: Mr,
      __wbg_mapAsync_bb0029907dd91181: _n,
      __wbg_set_dimension_174ad7e2fb67fb4e: jn,
      __wbg_set_format_90860b0321868db4: Kn,
      __wbg_set_aspect_a823a14d00d42d37: Dn,
      __wbg_set_base_array_layer_cc6c68d233489c4b: Fn,
      __wbg_set_array_layer_count_daec613068108a9d: In,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: Pn,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: oa,
      __wbg_set_label_03d2396d4655a3e1: Zn,
      __wbg_set_usage_7f0dda8309469b1c: Da,
      __wbg_createView_cc96b5bdd3d5bf5e: Cr,
      __wbg_then_05edfc8a4fea5106: za,
      __wbg_set_load_op_56844f51434037bf: ca,
      __wbg_set_store_op_caeede4654b3d847: Aa,
      __wbg_set_view_bdeab150b5f0768c: Fa,
      __wbg_set_clear_value_642701f928a5ccb3: Vn,
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
      __wbg_next_402fa10b59ab20c3: on,
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
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: Hr,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: Jr,
      __wbg_queueMicrotask_1c9b3800e321a967: dn,
      __wbg_queueMicrotask_311744e534a929a3: gn,
      __wbg___wbindgen_number_get_1cc01dd708740256: yr,
      __wbg___wbindgen_in_4990f46af709e33c: ur,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: vr,
      __wbg___wbindgen_is_null_6d937fbfb6478470: wr,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: hr,
      __wbg_Number_c4bdf66bb78f7977: br,
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
  }, ar), { memory: dc, __wbg_proteusapp_free: gc, proteusapp_addChild: wc, proteusapp_animateTo: pc, proteusapp_bakeTexture: lc, proteusapp_bakedImageSize: mc, proteusapp_bakedTextSize: hc, proteusapp_channelDestroy: xc, proteusapp_channelSet: yc, proteusapp_component: $c, proteusapp_copyBakedImageFrom: vc, proteusapp_createVideo: Sc, proteusapp_cropImage: Ac, proteusapp_declareGeometry: Ic, proteusapp_declaredGeometry: Tc, proteusapp_destroy: Dc, proteusapp_devices: Bc, proteusapp_freeResources: Fc, proteusapp_get: Pc, proteusapp_hideVideo: kc, proteusapp_inputDevices: Cc, proteusapp_loadTexture: Mc, proteusapp_mergeFrom: Rc, proteusapp_mergeFromWithBehavior: Vc, proteusapp_new: Ec, proteusapp_onBlur: Lc, proteusapp_onClick: Oc, proteusapp_onDrag: Gc, proteusapp_onDropped: Wc, proteusapp_onFocus: zc, proteusapp_onHoverEnter: Uc, proteusapp_onHoverExit: qc, proteusapp_onPress: jc, proteusapp_onRelease: Hc, proteusapp_onTransitionComplete: Nc, proteusapp_pointerLeft: Jc, proteusapp_pointerMoved: Kc, proteusapp_pointerPressed: Qc, proteusapp_pointerReleased: Xc, proteusapp_releaseVideo: Yc, proteusapp_removeChild: Zc, proteusapp_setDeclaredGeometry: eb, proteusapp_setDevices: _b, proteusapp_setDisabled: tb, proteusapp_setImage: rb, proteusapp_setInputDevices: nb, proteusapp_setInteractive: ab, proteusapp_setOpacity: cb, proteusapp_setText: bb, proteusapp_setTexture: ob, proteusapp_setTransitionInteraction: sb, proteusapp_setVideoCrossfade: ib, proteusapp_setVisible: fb, proteusapp_showVideo: ub, proteusapp_splitTo: db, proteusapp_splitToWithBehavior: gb, proteusapp_splitToWithStates: wb, proteusapp_texture: pb, proteusapp_textureState: lb, proteusapp_tick: mb, proteusapp_transitionChannel: hb, proteusapp_uploadVideoFrame: xb, __wbg_handle_free: yb, __wbg_texturehandle_free: $b, __wbg_transitionchannel_free: vb, __wbg_videohandle_free: Sb, handle_fromId: Ab, handle_id: Ib, texturehandle_fromId: Tb, texturehandle_id: Db, __abort_handler: Bb, __instance_terminated: Fb, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Pb, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: kb, __wbindgen_malloc: Cb, __wbindgen_realloc: Mb, __wbindgen_exn_store: Rb, __externref_table_alloc: Vb, __wbindgen_externrefs: Eb, __wbindgen_destroy_closure: Lb, __externref_table_dealloc: Ob, __wbindgen_start: Rt } = uc, Gb = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: Bb,
    __externref_table_alloc: Vb,
    __externref_table_dealloc: Ob,
    __instance_terminated: Fb,
    __wbg_handle_free: yb,
    __wbg_proteusapp_free: gc,
    __wbg_texturehandle_free: $b,
    __wbg_transitionchannel_free: vb,
    __wbg_videohandle_free: Sb,
    __wbindgen_destroy_closure: Lb,
    __wbindgen_exn_store: Rb,
    __wbindgen_externrefs: Eb,
    __wbindgen_malloc: Cb,
    __wbindgen_realloc: Mb,
    __wbindgen_start: Rt,
    handle_fromId: Ab,
    handle_id: Ib,
    memory: dc,
    proteusapp_addChild: wc,
    proteusapp_animateTo: pc,
    proteusapp_bakeTexture: lc,
    proteusapp_bakedImageSize: mc,
    proteusapp_bakedTextSize: hc,
    proteusapp_channelDestroy: xc,
    proteusapp_channelSet: yc,
    proteusapp_component: $c,
    proteusapp_copyBakedImageFrom: vc,
    proteusapp_createVideo: Sc,
    proteusapp_cropImage: Ac,
    proteusapp_declareGeometry: Ic,
    proteusapp_declaredGeometry: Tc,
    proteusapp_destroy: Dc,
    proteusapp_devices: Bc,
    proteusapp_freeResources: Fc,
    proteusapp_get: Pc,
    proteusapp_hideVideo: kc,
    proteusapp_inputDevices: Cc,
    proteusapp_loadTexture: Mc,
    proteusapp_mergeFrom: Rc,
    proteusapp_mergeFromWithBehavior: Vc,
    proteusapp_new: Ec,
    proteusapp_onBlur: Lc,
    proteusapp_onClick: Oc,
    proteusapp_onDrag: Gc,
    proteusapp_onDropped: Wc,
    proteusapp_onFocus: zc,
    proteusapp_onHoverEnter: Uc,
    proteusapp_onHoverExit: qc,
    proteusapp_onPress: jc,
    proteusapp_onRelease: Hc,
    proteusapp_onTransitionComplete: Nc,
    proteusapp_pointerLeft: Jc,
    proteusapp_pointerMoved: Kc,
    proteusapp_pointerPressed: Qc,
    proteusapp_pointerReleased: Xc,
    proteusapp_releaseVideo: Yc,
    proteusapp_removeChild: Zc,
    proteusapp_setDeclaredGeometry: eb,
    proteusapp_setDevices: _b,
    proteusapp_setDisabled: tb,
    proteusapp_setImage: rb,
    proteusapp_setInputDevices: nb,
    proteusapp_setInteractive: ab,
    proteusapp_setOpacity: cb,
    proteusapp_setText: bb,
    proteusapp_setTexture: ob,
    proteusapp_setTransitionInteraction: sb,
    proteusapp_setVideoCrossfade: ib,
    proteusapp_setVisible: fb,
    proteusapp_showVideo: ub,
    proteusapp_splitTo: db,
    proteusapp_splitToWithBehavior: gb,
    proteusapp_splitToWithStates: wb,
    proteusapp_texture: pb,
    proteusapp_textureState: lb,
    proteusapp_tick: mb,
    proteusapp_transitionChannel: hb,
    proteusapp_uploadVideoFrame: xb,
    texturehandle_fromId: Tb,
    texturehandle_id: Db,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: kb,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Pb
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  fc(Gb);
  Rt();
  const Wb = "" + new URL("proteus_host_web_bg-CeLNZ_1X.wasm", import.meta.url).href;
  let y = class B_ {
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
  Symbol.dispose && (y.prototype[Symbol.dispose] = y.prototype.free);
  let F_ = class Vt {
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
      l(e, y), l(t, y);
      const r = i.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw F(r[0]);
    }
    animateTo(e, t, r) {
      l(e, y);
      const n = i.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw F(n[0]);
    }
    bakeTexture(e, t, r, n) {
      const a = w_(r, i.__wbindgen_malloc), c = R, b = i.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, c, n);
      return ae.__wrap(b);
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
      if (c[1]) throw F(c[0]);
    }
    component(e) {
      const t = i.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw F(t[1]);
      return y.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      l(e, y), l(t, y);
      const r = i.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = i.proteusapp_createVideo(this.__wbg_ptr);
      return ge.__wrap(e);
    }
    cropImage(e, t) {
      l(e, y);
      const r = i.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      l(e, y);
      const r = i.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    declaredGeometry(e) {
      return l(e, y), i.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      l(e, y);
      var t = e.__destroy_into_raw();
      const r = i.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    devices(e) {
      return l(e, y), i.proteusapp_devices(this.__wbg_ptr, e.__wbg_ptr);
    }
    freeResources(e) {
      l(e, y);
      const t = i.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
    }
    get(e) {
      return l(e, y), i.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      l(e, y);
      const t = i.proteusapp_hideVideo(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
    }
    inputDevices() {
      return i.proteusapp_inputDevices(this.__wbg_ptr);
    }
    loadTexture(e, t) {
      const r = w_(e, i.__wbindgen_malloc), n = R, a = i.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : ae.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      l(e, y);
      const a = je(t, i.__wbindgen_malloc), c = R, b = i.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, c, r, n);
      if (b[1]) throw F(b[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      l(e, y);
      const c = je(t, i.__wbindgen_malloc), b = R, o = i.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, c, b, r, n, a);
      if (o[1]) throw F(o[0]);
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
      if (r[1]) throw F(r[0]);
    }
    setDeclaredGeometry(e, t) {
      l(e, y);
      const r = i.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDevices(e, t) {
      l(e, y);
      const r = i.proteusapp_setDevices(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDisabled(e, t) {
      l(e, y);
      const r = i.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setImage(e, t) {
      l(e, y);
      const r = i.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setInputDevices(e) {
      const t = i.proteusapp_setInputDevices(this.__wbg_ptr, e);
      if (t[1]) throw F(t[0]);
    }
    setInteractive(e, t) {
      l(e, y);
      const r = i.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setOpacity(e, t) {
      l(e, y);
      const r = i.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setText(e, t) {
      l(e, y);
      const r = i.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setTexture(e, t) {
      l(e, y), l(t, ae);
      const r = i.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      l(e, y);
      const r = i.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setVideoCrossfade(e, t) {
      l(e, y);
      const r = i.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      l(e, y);
      const r = i.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    showVideo(e, t) {
      l(e, y), l(t, ge);
      const r = i.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      l(e, y);
      const a = je(t, i.__wbindgen_malloc), c = R, b = i.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, c, r, n);
      if (b[1]) throw F(b[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      l(e, y);
      const c = je(t, i.__wbindgen_malloc), b = R, o = i.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, c, b, r, n, a);
      if (o[1]) throw F(o[0]);
    }
    splitToWithStates(e, t, r, n) {
      l(e, y);
      const a = i.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw F(a[0]);
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
      const a = w_(n, i.__wbindgen_malloc), c = R;
      return i.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, c) !== 0;
    }
  };
  Symbol.dispose && (F_.prototype[Symbol.dispose] = F_.prototype.free);
  let ae = class P_ {
    static __wrap(e) {
      const t = Object.create(P_.prototype);
      return t.__wbg_ptr = e, pt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, pt.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      i.__wbg_texturehandle_free(e, 0);
    }
    static fromId(e) {
      const t = i.texturehandle_fromId(e);
      return P_.__wrap(t);
    }
    id() {
      return i.texturehandle_id(this.__wbg_ptr);
    }
  };
  Symbol.dispose && (ae.prototype[Symbol.dispose] = ae.prototype.free);
  let de = class Et {
    static __wrap(e) {
      const t = Object.create(Et.prototype);
      return t.__wbg_ptr = e, lt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, lt.unregister(this), e;
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
      return t.__wbg_ptr = e, mt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, mt.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      i.__wbg_videohandle_free(e, 0);
    }
  };
  Symbol.dispose && (ge.prototype[Symbol.dispose] = ge.prototype.free);
  function zb(_, e, t, r) {
    const n = z(_, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    return i.mount(n, a, e, $(t) ? 0 : T(t), r);
  }
  function Ub(_, e) {
    return Error(I(_, e));
  }
  function qb(_) {
    return Number(_);
  }
  function jb(_, e) {
    const t = String(e), r = z(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Hb(_) {
    return _.Window;
  }
  function Nb(_) {
    return _.WorkerGlobalScope;
  }
  function Jb(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    C().setBigInt64(_ + 8, $(r) ? BigInt(0) : r, true), C().setInt32(_ + 0, !$(r), true);
  }
  function Kb(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return $(t) ? 16777215 : t ? 1 : 0;
  }
  function Qb(_, e) {
    const t = k_(e), r = z(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Xb(_, e) {
    return _ in e;
  }
  function Yb(_) {
    return typeof _ == "bigint";
  }
  function Zb(_) {
    return typeof _ == "function";
  }
  function eo(_) {
    return _ === null;
  }
  function _o(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function to(_) {
    return typeof _ == "string";
  }
  function ro(_) {
    return _ === void 0;
  }
  function no(_, e) {
    return _ === e;
  }
  function ao(_, e) {
    return _ == e;
  }
  function co(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    C().setFloat64(_ + 8, $(r) ? 0 : r, true), C().setInt32(_ + 0, !$(r), true);
  }
  function bo(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = $(r) ? 0 : z(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function oo(_, e) {
    throw new Error(I(_, e));
  }
  function so(_) {
    _._wbg_cb_unref();
  }
  function io(_, e) {
    _.activeTexture(e >>> 0);
  }
  function fo(_, e) {
    _.activeTexture(e >>> 0);
  }
  function uo() {
    return w(function(_, e, t, r) {
      _.addEventListener(I(e, t), r);
    }, arguments);
  }
  function go(_) {
    return _.altKey;
  }
  function wo(_, e, t) {
    _.attachShader(e, t);
  }
  function po(_, e, t) {
    _.attachShader(e, t);
  }
  function lo(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function mo() {
    return w(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function ho(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, I(r, n));
  }
  function xo(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, I(r, n));
  }
  function yo(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function $o(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function vo(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function So(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function Ao(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function Io(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function To(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function Do(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function Bo(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Fo(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function Po(_, e) {
    _.bindVertexArrayOES(e);
  }
  function ko(_, e) {
    _.bindVertexArray(e);
  }
  function Co(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Mo(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Ro(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Vo(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Eo(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Lo(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Oo(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Go(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Wo(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function zo(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function Uo(_, e, t, r, n, a, c, b, o, f, d) {
    _.blitFramebuffer(e, t, r, n, a, c, b, o, f >>> 0, d >>> 0);
  }
  function qo(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function jo(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Ho(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function No(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Jo(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function Ko(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function Qo(_) {
    return _.button;
  }
  function Xo() {
    return w(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function Yo() {
    return w(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Zo() {
    return w(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function es(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, E(r, n));
  }
  function _s(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, Y(r, n));
  }
  function ts(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, ye(r, n));
  }
  function rs(_, e) {
    _.clearDepth(e);
  }
  function ns(_, e) {
    _.clearDepth(e);
  }
  function as(_, e) {
    _.clearStencil(e);
  }
  function cs(_, e) {
    _.clearStencil(e);
  }
  function bs(_, e) {
    _.clear(e >>> 0);
  }
  function os(_, e) {
    _.clear(e >>> 0);
  }
  function ss(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function is(_, e) {
    const t = e.code, r = z(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function fs(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function us(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function ds(_, e) {
    _.compileShader(e);
  }
  function gs(_, e) {
    _.compileShader(e);
  }
  function ws(_, e, t, r, n, a, c, b, o) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o);
  }
  function ps(_, e, t, r, n, a, c, b, o) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o);
  }
  function ls(_, e, t, r, n, a, c, b, o, f) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o, f);
  }
  function ms(_, e, t, r, n, a, c, b, o, f, d, A) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, c, b, o, f >>> 0, d, A);
  }
  function hs(_, e, t, r, n, a, c, b, o, f, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, c, b, o, f >>> 0, d);
  }
  function xs() {
    return w(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function ys(_) {
    return _.contentRect;
  }
  function $s(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function vs(_, e, t, r, n, a, c, b, o) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, c, b, o);
  }
  function Ss(_, e, t, r, n, a, c, b, o) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, c, b, o);
  }
  function As(_, e, t, r, n, a, c, b, o, f) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, c, b, o, f);
  }
  function Is() {
    return w(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function Ts() {
    return w(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function Ds(_, e) {
    return _.createBindGroup(e);
  }
  function Bs(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : T(e);
  }
  function Fs() {
    return w(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function Ps(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : T(e);
  }
  function ks(_, e) {
    return _.createCommandEncoder(e);
  }
  function Cs(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : T(e);
  }
  function Ms(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : T(e);
  }
  function Rs(_, e) {
    return _.createPipelineLayout(e);
  }
  function Vs(_) {
    const e = _.createProgram();
    return $(e) ? 0 : T(e);
  }
  function Es(_) {
    const e = _.createProgram();
    return $(e) ? 0 : T(e);
  }
  function Ls(_) {
    const e = _.createQuery();
    return $(e) ? 0 : T(e);
  }
  function Os() {
    return w(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function Gs(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : T(e);
  }
  function Ws(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : T(e);
  }
  function zs(_, e) {
    return _.createSampler(e);
  }
  function Us(_) {
    const e = _.createSampler();
    return $(e) ? 0 : T(e);
  }
  function qs(_, e) {
    return _.createShaderModule(e);
  }
  function js(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : T(t);
  }
  function Hs(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : T(t);
  }
  function Ns(_) {
    const e = _.createTexture();
    return $(e) ? 0 : T(e);
  }
  function Js(_) {
    const e = _.createTexture();
    return $(e) ? 0 : T(e);
  }
  function Ks() {
    return w(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function Qs(_) {
    const e = _.createVertexArrayOES();
    return $(e) ? 0 : T(e);
  }
  function Xs(_) {
    const e = _.createVertexArray();
    return $(e) ? 0 : T(e);
  }
  function Ys() {
    return w(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function Zs(_) {
    return _.ctrlKey;
  }
  function ei(_, e) {
    _.cullFace(e >>> 0);
  }
  function _i(_, e) {
    _.cullFace(e >>> 0);
  }
  function ti(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function ri(_, e) {
    _.deleteBuffer(e);
  }
  function ni(_, e) {
    _.deleteBuffer(e);
  }
  function ai(_, e) {
    _.deleteFramebuffer(e);
  }
  function ci(_, e) {
    _.deleteFramebuffer(e);
  }
  function bi(_, e) {
    _.deleteProgram(e);
  }
  function oi(_, e) {
    _.deleteProgram(e);
  }
  function si(_, e) {
    _.deleteQuery(e);
  }
  function ii(_, e) {
    _.deleteRenderbuffer(e);
  }
  function fi(_, e) {
    _.deleteRenderbuffer(e);
  }
  function ui(_, e) {
    _.deleteSampler(e);
  }
  function di(_, e) {
    _.deleteShader(e);
  }
  function gi(_, e) {
    _.deleteShader(e);
  }
  function wi(_, e) {
    _.deleteSync(e);
  }
  function pi(_, e) {
    _.deleteTexture(e);
  }
  function li(_, e) {
    _.deleteTexture(e);
  }
  function mi(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function hi(_, e) {
    _.deleteVertexArray(e);
  }
  function xi(_, e) {
    _.depthFunc(e >>> 0);
  }
  function yi(_, e) {
    _.depthFunc(e >>> 0);
  }
  function $i(_, e) {
    _.depthMask(e !== 0);
  }
  function vi(_, e) {
    _.depthMask(e !== 0);
  }
  function Si(_, e, t) {
    _.depthRange(e, t);
  }
  function Ai(_, e, t) {
    _.depthRange(e, t);
  }
  function Ii(_, e) {
    const t = e.description, r = z(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Ti(_) {
    _.destroy();
  }
  function Di(_) {
    return _.devicePixelRatio;
  }
  function Bi(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function Fi(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function Pi(_, e) {
    _.disable(e >>> 0);
  }
  function ki(_, e) {
    _.disable(e >>> 0);
  }
  function Ci(_) {
    const e = _.document;
    return $(e) ? 0 : T(e);
  }
  function Mi(_) {
    return _.done;
  }
  function Ri(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function Vi(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function Ei(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function Li(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function Oi(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function Gi(_, e) {
    _.drawBuffers(e);
  }
  function Wi(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function zi(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function Ui(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function qi(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function ji(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function Hi(_, e) {
    _.enable(e >>> 0);
  }
  function Ni(_, e) {
    _.enable(e >>> 0);
  }
  function Ji(_, e) {
    _.endQuery(e >>> 0);
  }
  function Ki(_) {
    _.end();
  }
  function Qi(_) {
    return Object.entries(_);
  }
  function Xi(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function Yi(_) {
    console.error(_);
  }
  function Zi(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(I(_, e));
    } finally {
      i.__wbindgen_free(t, r, 1);
    }
  }
  function ef(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return $(r) ? 0 : T(r);
  }
  function _f(_) {
    return _.finish();
  }
  function tf(_, e) {
    return _.finish(e);
  }
  function rf(_) {
    _.flush();
  }
  function nf(_) {
    _.flush();
  }
  function af() {
    return w(function(_) {
      _.focus();
    }, arguments);
  }
  function cf(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function bf(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function of(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function sf(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function ff(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function uf(_, e, t, r, n, a, c) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, c);
  }
  function df(_, e) {
    _.frontFace(e >>> 0);
  }
  function gf(_, e) {
    _.frontFace(e >>> 0);
  }
  function wf(_) {
    return _.getBoundingClientRect();
  }
  function pf(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function lf() {
    return w(function(_, e, t, r) {
      const n = _.getContext(I(e, t), r);
      return $(n) ? 0 : T(n);
    }, arguments);
  }
  function mf() {
    return w(function(_, e, t) {
      const r = _.getContext(I(e, t));
      return $(r) ? 0 : T(r);
    }, arguments);
  }
  function hf() {
    return w(function(_, e, t) {
      const r = _.getContext(I(e, t));
      return $(r) ? 0 : T(r);
    }, arguments);
  }
  function xf() {
    return w(function(_, e, t, r) {
      const n = _.getContext(I(e, t), r);
      return $(n) ? 0 : T(n);
    }, arguments);
  }
  function yf() {
    return w(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function $f(_, e, t) {
    const r = _.getElementById(I(e, t));
    return $(r) ? 0 : T(r);
  }
  function vf() {
    return w(function(_, e, t) {
      const r = _.getExtension(I(e, t));
      return $(r) ? 0 : T(r);
    }, arguments);
  }
  function Sf() {
    return w(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function Af() {
    return w(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function If() {
    return w(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function Tf() {
    return w(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function Df(_) {
    const e = _.getPreferredCanvasFormat();
    return (ce.indexOf(e) + 1 || 96) - 1;
  }
  function Bf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : z(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Ff(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : z(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Pf(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function kf(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function Cf(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function Mf(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : z(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Rf(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : z(r, i.__wbindgen_malloc, i.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Vf(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function Ef(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function Lf(_) {
    const e = _.getSupportedExtensions();
    return $(e) ? 0 : T(e);
  }
  function Of(_) {
    const e = _.getSupportedProfiles();
    return $(e) ? 0 : T(e);
  }
  function Gf(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function Wf(_, e, t, r) {
    return _.getUniformBlockIndex(e, I(t, r));
  }
  function zf(_, e, t, r) {
    const n = _.getUniformLocation(e, I(t, r));
    return $(n) ? 0 : T(n);
  }
  function Uf(_, e, t, r) {
    const n = _.getUniformLocation(e, I(t, r));
    return $(n) ? 0 : T(n);
  }
  function qf(_, e) {
    return _[e >>> 0];
  }
  function jf(_, e) {
    const t = _[e >>> 0];
    return $(t) ? 0 : T(t);
  }
  function Hf() {
    return w(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function Nf(_, e) {
    return _[e >>> 0];
  }
  function Jf(_, e) {
    return _[e];
  }
  function Kf(_) {
    return _.gpu;
  }
  function Qf(_, e, t) {
    return _.hasAttribute(I(e, t));
  }
  function Xf(_) {
    return _.height;
  }
  function Yf(_) {
    return _.height;
  }
  function Zf(_) {
    return _.hidden;
  }
  function eu(_, e, t) {
    return _.includes(e, t);
  }
  function _u(_) {
    return _.info;
  }
  function tu(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function ru(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function nu(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function au(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function cu(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function bu(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function ou(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function su(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function iu(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function fu(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function uu() {
    return w(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function du(_) {
    return Array.isArray(_);
  }
  function gu(_) {
    return _.isComposing;
  }
  function wu(_) {
    return Number.isSafeInteger(_);
  }
  function pu(_, e) {
    return Object.is(_, e);
  }
  function lu() {
    return Symbol.iterator;
  }
  function mu(_, e) {
    const t = e.key, r = z(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function hu(_, e) {
    const t = e.label, r = z(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function xu(_) {
    return _.length;
  }
  function yu(_) {
    return _.length;
  }
  function $u(_) {
    return _.limits;
  }
  function vu(_) {
    return _.limits;
  }
  function Su(_, e) {
    _.linkProgram(e);
  }
  function Au(_, e) {
    _.linkProgram(e);
  }
  function Iu(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function Tu(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function Du(_) {
    return _.maxBindGroups;
  }
  function Bu(_) {
    return _.maxBindingsPerBindGroup;
  }
  function Fu(_) {
    return _.maxBufferSize;
  }
  function Pu(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function ku(_) {
    return _.maxColorAttachments;
  }
  function Cu(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function Mu(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function Ru(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function Vu(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function Eu(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function Lu(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function Ou(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function Gu(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function Wu(_) {
    return _.maxInterStageShaderVariables;
  }
  function zu(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function Uu(_) {
    return _.maxSamplersPerShaderStage;
  }
  function qu(_) {
    return _.maxStorageBufferBindingSize;
  }
  function ju(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function Hu(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function Nu(_) {
    return _.maxTextureArrayLayers;
  }
  function Ju(_) {
    return _.maxTextureDimension1D;
  }
  function Ku(_) {
    return _.maxTextureDimension2D;
  }
  function Qu(_) {
    return _.maxTextureDimension3D;
  }
  function Xu(_) {
    return _.maxUniformBufferBindingSize;
  }
  function Yu(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function Zu(_) {
    return _.maxVertexAttributes;
  }
  function ed(_) {
    return _.maxVertexBufferArrayStride;
  }
  function _d(_) {
    return _.maxVertexBuffers;
  }
  function td(_) {
    return _.metaKey;
  }
  function rd(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function nd(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function ad(_) {
    return _.navigator;
  }
  function cd(_) {
    return _.navigator;
  }
  function bd() {
    return w(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function od() {
    return new Error();
  }
  function sd() {
    return new Object();
  }
  function id() {
    return new Array();
  }
  function fd(_) {
    return new Uint8Array(_);
  }
  function ud(_, e) {
    return new Error(I(_, e));
  }
  function dd(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, c) => {
        const b = t.a;
        t.a = 0;
        try {
          return B2(b, t.b, a, c);
        } finally {
          t.a = b;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function gd(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function wd() {
    return w(function(_) {
      return _.next();
    }, arguments);
  }
  function pd(_) {
    return _.next;
  }
  function ld(_, e) {
    _.observe(e);
  }
  function md(_) {
    return Array.of(_);
  }
  function hd(_) {
    return _.offsetX;
  }
  function xd(_) {
    return _.offsetY;
  }
  function yd(_) {
    return _.onSubmittedWorkDone();
  }
  function $d(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function vd(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function Sd(_, e, t) {
    _.polygonOffset(e, t);
  }
  function Ad(_, e, t) {
    _.polygonOffset(e, t);
  }
  function Id(_) {
    _.preventDefault();
  }
  function Td(_) {
    return F_.__wrap(_);
  }
  function Dd(_, e, t) {
    Uint8Array.prototype.set.call(s_(_, e), t);
  }
  function Bd(_, e) {
    return _.push(e);
  }
  function Fd(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function Pd() {
    return w(function(_, e, t) {
      return _.querySelectorAll(I(e, t));
    }, arguments);
  }
  function kd() {
    return w(function(_, e, t) {
      const r = _.querySelector(I(e, t));
      return $(r) ? 0 : T(r);
    }, arguments);
  }
  function Cd(_) {
    return _.queueMicrotask;
  }
  function Md(_) {
    queueMicrotask(_);
  }
  function Rd(_) {
    return _.queue;
  }
  function Vd(_, e) {
    _.readBuffer(e >>> 0);
  }
  function Ed() {
    return w(function(_, e, t, r, n, a, c, b) {
      _.readPixels(e, t, r, n, a >>> 0, c >>> 0, b);
    }, arguments);
  }
  function Ld() {
    return w(function(_, e, t, r, n, a, c, b) {
      _.readPixels(e, t, r, n, a >>> 0, c >>> 0, b);
    }, arguments);
  }
  function Od() {
    return w(function(_, e, t, r, n, a, c, b) {
      _.readPixels(e, t, r, n, a >>> 0, c >>> 0, b);
    }, arguments);
  }
  function Gd(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function Wd(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function zd(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function Ud(_) {
    return _.repeat;
  }
  function qd(_, e) {
    return _.requestAdapter(e);
  }
  function jd(_) {
    return _.requestAdapter();
  }
  function Hd() {
    return w(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function Nd(_, e) {
    return _.requestDevice(e);
  }
  function Jd(_) {
    return Promise.resolve(_);
  }
  function Kd(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function Qd(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function Xd(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function Yd(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function Zd() {
    return w(function(_, e, t, r, n) {
      _.setAttribute(I(e, t), I(r, n));
    }, arguments);
  }
  function e0() {
    return w(function(_, e, t, r, n, a, c) {
      _.setBindGroup(e >>> 0, t, ye(r, n), a, c >>> 0);
    }, arguments);
  }
  function _0(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function t0(_, e, t, r, n) {
    _.setIndexBuffer(e, q_[t], r, n);
  }
  function r0(_, e, t, r) {
    _.setIndexBuffer(e, q_[t], r);
  }
  function n0(_, e) {
    _.setPipeline(e);
  }
  function a0(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function c0(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function b0(_, e, t, r, n, a, c) {
    _.setViewport(e, t, r, n, a, c);
  }
  function o0(_, e, t) {
    _.set(e, t >>> 0);
  }
  function s0() {
    return w(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function i0(_, e, t) {
    _[e] = t;
  }
  function f0(_, e) {
    _.a = e;
  }
  function u0(_, e) {
    _.access = G2[e];
  }
  function d0(_, e) {
    _.addressModeU = z_[e];
  }
  function g0(_, e) {
    _.addressModeV = z_[e];
  }
  function w0(_, e) {
    _.addressModeW = z_[e];
  }
  function p0(_, e) {
    _.alpha = e;
  }
  function l0(_, e) {
    _.alphaMode = C2[e];
  }
  function m0(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function h0(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function x0(_, e) {
    _.arrayStride = e;
  }
  function y0(_, e) {
    _.aspect = Wt[e];
  }
  function $0(_, e) {
    _.aspect = Wt[e];
  }
  function v0(_, e) {
    _.attributes = e;
  }
  function S0(_, e) {
    _.b = e;
  }
  function A0(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function I0(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function T0(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function D0(_, e) {
    _.bindGroupLayouts = e;
  }
  function B0(_, e) {
    _.binding = e >>> 0;
  }
  function F0(_, e) {
    _.binding = e >>> 0;
  }
  function P0(_, e) {
    _.blend = e;
  }
  function k0(_, e) {
    _.buffer = e;
  }
  function C0(_, e) {
    _.buffer = e;
  }
  function M0(_, e) {
    _.buffers = e;
  }
  function R0(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function V0(_, e) {
    _.clearValue = e;
  }
  function E0(_, e, t) {
    _.code = I(e, t);
  }
  function L0(_, e) {
    _.colorAttachments = e;
  }
  function O0(_, e) {
    _.color = e;
  }
  function G0(_, e) {
    _.compare = U_[e];
  }
  function W0(_, e) {
    _.compare = U_[e];
  }
  function z0(_, e) {
    _.count = e >>> 0;
  }
  function U0(_, e) {
    _.cullMode = M2[e];
  }
  function q0(_, e, t) {
    _[e >>> 0] = t;
  }
  function j0(_, e) {
    _.depthBias = e;
  }
  function H0(_, e) {
    _.depthBiasClamp = e;
  }
  function N0(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function J0(_, e) {
    _.depthClearValue = e;
  }
  function K0(_, e) {
    _.depthCompare = U_[e];
  }
  function Q0(_, e) {
    _.depthFailOp = H_[e];
  }
  function X0(_, e) {
    _.depthLoadOp = j_[e];
  }
  function Y0(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function Z0(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function eg(_, e) {
    _.depthStencil = e;
  }
  function _g(_, e) {
    _.depthStencilAttachment = e;
  }
  function tg(_, e) {
    _.depthStoreOp = N_[e];
  }
  function rg(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function ng(_, e) {
    _.device = e;
  }
  function ag(_, e) {
    _.dimension = J_[e];
  }
  function cg(_, e) {
    _.dimension = W2[e];
  }
  function bg(_, e) {
    _.dstFactor = Ot[e];
  }
  function og(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function sg(_, e) {
    _.entries = e;
  }
  function ig(_, e) {
    _.entries = e;
  }
  function fg(_, e, t) {
    _.entryPoint = I(e, t);
  }
  function ug(_, e, t) {
    _.entryPoint = I(e, t);
  }
  function dg(_, e) {
    _.externalTexture = e;
  }
  function gg(_, e) {
    _.failOp = H_[e];
  }
  function wg(_, e) {
    _.format = ce[e];
  }
  function pg(_, e) {
    _.format = U2[e];
  }
  function lg(_, e) {
    _.format = ce[e];
  }
  function mg(_, e) {
    _.format = ce[e];
  }
  function hg(_, e) {
    _.format = ce[e];
  }
  function xg(_, e) {
    _.format = ce[e];
  }
  function yg(_, e) {
    _.format = ce[e];
  }
  function $g(_, e) {
    _.fragment = e;
  }
  function vg(_, e) {
    _.frontFace = R2[e];
  }
  function Sg(_, e) {
    _.g = e;
  }
  function Ag(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function Ig(_, e) {
    _.height = e >>> 0;
  }
  function Tg(_, e) {
    _.height = e >>> 0;
  }
  function Dg(_, e) {
    _.height = e >>> 0;
  }
  function Bg(_, e, t) {
    _.label = I(e, t);
  }
  function Fg(_, e, t) {
    _.label = I(e, t);
  }
  function Pg(_, e, t) {
    _.label = I(e, t);
  }
  function kg(_, e, t) {
    _.label = I(e, t);
  }
  function Cg(_, e, t) {
    _.label = I(e, t);
  }
  function Mg(_, e, t) {
    _.label = I(e, t);
  }
  function Rg(_, e, t) {
    _.label = I(e, t);
  }
  function Vg(_, e, t) {
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
  function zg(_, e) {
    _.layout = e;
  }
  function Ug(_, e) {
    _.layout = e;
  }
  function qg(_, e) {
    _.loadOp = j_[e];
  }
  function jg(_, e) {
    _.lodMaxClamp = e;
  }
  function Hg(_, e) {
    _.lodMinClamp = e;
  }
  function Ng(_, e) {
    _.magFilter = Gt[e];
  }
  function Jg(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function Kg(_, e) {
    _.mask = e >>> 0;
  }
  function Qg(_, e) {
    _.maxAnisotropy = e;
  }
  function Xg(_, e) {
    _.minBindingSize = e;
  }
  function Yg(_, e) {
    _.minFilter = Gt[e];
  }
  function Zg(_, e) {
    _.mipLevel = e >>> 0;
  }
  function ew(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function _w(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function tw(_, e) {
    _.mipmapFilter = V2[e];
  }
  function rw(_, e) {
    _.module = e;
  }
  function nw(_, e) {
    _.module = e;
  }
  function aw(_, e) {
    _.multisample = e;
  }
  function cw(_, e) {
    _.multisampled = e !== 0;
  }
  function bw(_, e) {
    _.offset = e;
  }
  function ow(_, e) {
    _.offset = e;
  }
  function sw(_, e) {
    _.offset = e;
  }
  function iw(_, e) {
    _.operation = P2[e];
  }
  function fw(_, e) {
    _.origin = e;
  }
  function uw(_, e) {
    _.passOp = H_[e];
  }
  function dw(_, e) {
    _.powerPreference = E2[e];
  }
  function gw(_, e) {
    _.primitive = e;
  }
  function ww(_, e) {
    _.querySet = e;
  }
  function pw(_, e) {
    _.r = e;
  }
  function lw(_, e) {
    _.requiredFeatures = e;
  }
  function mw(_, e) {
    _.requiredLimits = e;
  }
  function hw(_, e) {
    _.resolveTarget = e;
  }
  function xw(_, e) {
    _.resource = e;
  }
  function yw(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function $w(_, e) {
    _.sampleCount = e >>> 0;
  }
  function vw(_, e) {
    _.sampleType = z2[e];
  }
  function Sw(_, e) {
    _.sampler = e;
  }
  function Aw(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function Iw(_, e) {
    _.size = e;
  }
  function Tw(_, e) {
    _.size = e;
  }
  function Dw(_, e) {
    _.size = e;
  }
  function Bw(_, e) {
    _.srcFactor = Ot[e];
  }
  function Fw(_, e) {
    _.stencilBack = e;
  }
  function Pw(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function kw(_, e) {
    _.stencilFront = e;
  }
  function Cw(_, e) {
    _.stencilLoadOp = j_[e];
  }
  function Mw(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function Rw(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function Vw(_, e) {
    _.stencilStoreOp = N_[e];
  }
  function Ew(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function Lw(_, e) {
    _.stepMode = q2[e];
  }
  function Ow(_, e) {
    _.storageTexture = e;
  }
  function Gw(_, e) {
    _.storeOp = N_[e];
  }
  function Ww(_, e) {
    _.stripIndexFormat = q_[e];
  }
  function zw(_, e) {
    _.targets = e;
  }
  function Uw(_, e) {
    _.texture = e;
  }
  function qw(_, e) {
    _.texture = e;
  }
  function jw(_, e) {
    _.timestampWrites = e;
  }
  function Hw(_, e) {
    _.topology = L2[e];
  }
  function Nw(_, e) {
    _.type = k2[e];
  }
  function Jw(_, e) {
    _.type = O2[e];
  }
  function Kw(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function Qw(_, e) {
    _.usage = e >>> 0;
  }
  function Xw(_, e) {
    _.usage = e >>> 0;
  }
  function Yw(_, e) {
    _.usage = e >>> 0;
  }
  function Zw(_, e) {
    _.usage = e >>> 0;
  }
  function e1(_, e) {
    _.vertex = e;
  }
  function _1(_, e) {
    _.view = e;
  }
  function t1(_, e) {
    _.view = e;
  }
  function r1(_, e) {
    _.viewDimension = J_[e];
  }
  function n1(_, e) {
    _.viewDimension = J_[e];
  }
  function a1(_, e) {
    _.viewFormats = e;
  }
  function c1(_, e) {
    _.viewFormats = e;
  }
  function b1(_, e) {
    _.visibility = e >>> 0;
  }
  function o1(_, e) {
    _.width = e >>> 0;
  }
  function s1(_, e) {
    _.width = e >>> 0;
  }
  function i1(_, e) {
    _.width = e >>> 0;
  }
  function f1(_, e) {
    _.writeMask = e >>> 0;
  }
  function u1(_, e) {
    _.x = e >>> 0;
  }
  function d1(_, e) {
    _.y = e >>> 0;
  }
  function g1(_, e) {
    _.z = e >>> 0;
  }
  function w1(_, e, t, r) {
    _.shaderSource(e, I(t, r));
  }
  function p1(_, e, t, r) {
    _.shaderSource(e, I(t, r));
  }
  function l1(_) {
    return _.shiftKey;
  }
  function m1(_, e) {
    const t = e.stack, r = z(t, i.__wbindgen_malloc, i.__wbindgen_realloc), n = R;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function h1() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return $(_) ? 0 : T(_);
  }
  function x1() {
    const _ = typeof global > "u" ? null : global;
    return $(_) ? 0 : T(_);
  }
  function y1() {
    const _ = typeof self > "u" ? null : self;
    return $(_) ? 0 : T(_);
  }
  function $1() {
    const _ = typeof window > "u" ? null : window;
    return $(_) ? 0 : T(_);
  }
  function v1(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function S1(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function A1(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function I1(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function T1(_, e) {
    _.stencilMask(e >>> 0);
  }
  function D1(_, e) {
    _.stencilMask(e >>> 0);
  }
  function B1(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function F1(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function P1(_, e) {
    _.submit(e);
  }
  function k1() {
    return w(function(_, e, t, r, n, a, c, b, o, f) {
      _.texImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function C1() {
    return w(function(_, e, t, r, n, a, c, b, o, f) {
      _.texImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function M1() {
    return w(function(_, e, t, r, n, a, c, b, o, f) {
      _.texImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function R1() {
    return w(function(_, e, t, r, n, a, c, b, o, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, c, b, o >>> 0, f >>> 0, d);
    }, arguments);
  }
  function V1() {
    return w(function(_, e, t, r, n, a, c, b, o, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, c, b, o >>> 0, f >>> 0, d);
    }, arguments);
  }
  function E1(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function L1(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function O1(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function G1(_, e, t, r, n, a, c) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, c);
  }
  function W1() {
    return w(function(_, e, t, r, n, a, c, b, o, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function z1() {
    return w(function(_, e, t, r, n, a, c, b, o, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function U1() {
    return w(function(_, e, t, r, n, a, c, b, o, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function q1() {
    return w(function(_, e, t, r, n, a, c, b, o, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function j1() {
    return w(function(_, e, t, r, n, a, c, b, o, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function H1() {
    return w(function(_, e, t, r, n, a, c, b, o, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function N1() {
    return w(function(_, e, t, r, n, a, c, b, o, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function J1() {
    return w(function(_, e, t, r, n, a, c, b, o, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function K1() {
    return w(function(_, e, t, r, n, a, c, b, o, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, b, o, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function Q1() {
    return w(function(_, e, t, r, n, a, c, b, o, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, b, o, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function X1() {
    return w(function(_, e, t, r, n, a, c, b, o, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, b, o, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function Y1() {
    return w(function(_, e, t, r, n, a, c, b, o, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, b, o, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function Z1() {
    return w(function(_, e, t, r, n, a, c, b, o, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, b, o, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function ep() {
    return w(function(_, e, t, r, n, a, c, b, o, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, b, o, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function _p() {
    return w(function(_, e, t, r, n, a, c, b, o, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, b, o, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function tp(_, e, t) {
    return _.then(e, t);
  }
  function rp(_, e, t) {
    return _.then(e, t);
  }
  function np(_, e) {
    return _.then(e);
  }
  function ap(_, e, t) {
    _.uniform1f(e, t);
  }
  function cp(_, e, t) {
    _.uniform1f(e, t);
  }
  function bp(_, e, t) {
    _.uniform1i(e, t);
  }
  function op(_, e, t) {
    _.uniform1i(e, t);
  }
  function sp(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function ip(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function fp(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function up(_, e, t, r) {
    _.uniform2iv(e, Y(t, r));
  }
  function dp(_, e, t, r) {
    _.uniform2iv(e, Y(t, r));
  }
  function gp(_, e, t, r) {
    _.uniform2uiv(e, ye(t, r));
  }
  function wp(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function pp(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function lp(_, e, t, r) {
    _.uniform3iv(e, Y(t, r));
  }
  function mp(_, e, t, r) {
    _.uniform3iv(e, Y(t, r));
  }
  function hp(_, e, t, r) {
    _.uniform3uiv(e, ye(t, r));
  }
  function xp(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function yp(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function $p(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function vp(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function Sp(_, e, t, r) {
    _.uniform4iv(e, Y(t, r));
  }
  function Ap(_, e, t, r) {
    _.uniform4iv(e, Y(t, r));
  }
  function Ip(_, e, t, r) {
    _.uniform4uiv(e, ye(t, r));
  }
  function Tp(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function Dp(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function Bp(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function Fp(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, E(r, n));
  }
  function Pp(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, E(r, n));
  }
  function kp(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function Cp(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function Mp(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, E(r, n));
  }
  function Rp(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, E(r, n));
  }
  function Vp(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function Ep(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function Lp(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, E(r, n));
  }
  function Op(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, E(r, n));
  }
  function Gp(_) {
    _.unmap();
  }
  function Wp(_, e) {
    _.useProgram(e);
  }
  function zp(_, e) {
    _.useProgram(e);
  }
  function Up(_) {
    return _.value;
  }
  function qp(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function jp(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function Hp(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function Np(_, e, t, r, n, a, c) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, c);
  }
  function Jp(_, e, t, r, n, a, c) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, c);
  }
  function Kp(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function Qp(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function Xp(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function Yp(_) {
    return _.width;
  }
  function Zp(_) {
    return _.width;
  }
  function e2() {
    return w(function(_, e, t, r, n, a, c) {
      _.writeBuffer(e, t, s_(r, n), a, c);
    }, arguments);
  }
  function _2() {
    return w(function(_, e, t, r, n, a) {
      _.writeTexture(e, s_(t, r), n, a);
    }, arguments);
  }
  function t2(_, e) {
    return Z(_, e, v2);
  }
  function r2(_, e) {
    return Z(_, e, D2);
  }
  function n2(_, e) {
    return Z(_, e, F2);
  }
  function a2(_, e) {
    return Z(_, e, S2);
  }
  function c2(_, e) {
    return Z(_, e, A2);
  }
  function b2(_, e) {
    return Z(_, e, I2);
  }
  function o2(_, e) {
    return Z(_, e, T2);
  }
  function s2(_, e) {
    return Z(_, e, $2);
  }
  function i2(_) {
    return _;
  }
  function f2(_) {
    return _;
  }
  function u2(_, e) {
    return E(_, e);
  }
  function d2(_, e) {
    return j2(_, e);
  }
  function g2(_, e) {
    return Y(_, e);
  }
  function w2(_, e) {
    return H2(_, e);
  }
  function p2(_, e) {
    return N2(_, e);
  }
  function l2(_, e) {
    return ye(_, e);
  }
  function m2(_, e) {
    return s_(_, e);
  }
  function h2(_, e) {
    return I(_, e);
  }
  function x2(_) {
    return BigInt.asUintN(64, _);
  }
  function y2() {
    const _ = i.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function $2(_, e) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function v2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function S2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function A2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function I2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function T2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6(_, e, t);
  }
  function D2(_, e, t) {
    const r = i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (r[1]) throw F(r[0]);
  }
  function B2(_, e, t, r) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, r);
  }
  function F2(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_(_, e, t);
  }
  const z_ = [
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
  ], P2 = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], k2 = [
    "uniform",
    "storage",
    "read-only-storage"
  ], C2 = [
    "opaque",
    "premultiplied"
  ], U_ = [
    "never",
    "less",
    "equal",
    "less-equal",
    "greater",
    "not-equal",
    "greater-equal",
    "always"
  ], M2 = [
    "none",
    "front",
    "back"
  ], Gt = [
    "nearest",
    "linear"
  ], R2 = [
    "ccw",
    "cw"
  ], q_ = [
    "uint16",
    "uint32"
  ], j_ = [
    "load",
    "clear"
  ], V2 = [
    "nearest",
    "linear"
  ], E2 = [
    "low-power",
    "high-performance"
  ], L2 = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], O2 = [
    "filtering",
    "non-filtering",
    "comparison"
  ], H_ = [
    "keep",
    "zero",
    "replace",
    "invert",
    "increment-clamp",
    "decrement-clamp",
    "increment-wrap",
    "decrement-wrap"
  ], G2 = [
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
  ], W2 = [
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
  ], z2 = [
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
  ], U2 = [
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
  ], q2 = [
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
  } : new FinalizationRegistry((_) => i.__wbg_proteusapp_free(_, 1)), pt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbg_texturehandle_free(_, 1)), lt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbg_transitionchannel_free(_, 1)), mt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbg_videohandle_free(_, 1));
  function T(_) {
    const e = i.__externref_table_alloc();
    return i.__wbindgen_externrefs.set(e, _), e;
  }
  function l(_, e) {
    if (!(_ instanceof e)) throw new Error(`expected instance of ${e.name}`);
  }
  const ht = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbindgen_destroy_closure(_.a, _.b));
  function k_(_) {
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
      n > 0 && (a += k_(_[0]));
      for (let c = 1; c < n; c++) a += ", " + k_(_[c]);
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
    return _ = _ >>> 0, J2().subarray(_ / 4, _ / 4 + e);
  }
  function j2(_, e) {
    return _ = _ >>> 0, Q2().subarray(_ / 2, _ / 2 + e);
  }
  function Y(_, e) {
    return _ = _ >>> 0, X2().subarray(_ / 4, _ / 4 + e);
  }
  function H2(_, e) {
    return _ = _ >>> 0, Y2().subarray(_ / 1, _ / 1 + e);
  }
  function N2(_, e) {
    return _ = _ >>> 0, Z2().subarray(_ / 2, _ / 2 + e);
  }
  function ye(_, e) {
    return _ = _ >>> 0, e3().subarray(_ / 4, _ / 4 + e);
  }
  function s_(_, e) {
    return _ = _ >>> 0, le().subarray(_ / 1, _ / 1 + e);
  }
  let se = null;
  function C() {
    return (se === null || se.buffer.detached === true || se.buffer.detached === void 0 && se.buffer !== i.memory.buffer) && (se = new DataView(i.memory.buffer)), se;
  }
  let Ee = null;
  function J2() {
    return (Ee === null || Ee.byteLength === 0) && (Ee = new Float32Array(i.memory.buffer)), Ee;
  }
  let Le = null;
  function K2() {
    return (Le === null || Le.byteLength === 0) && (Le = new Float64Array(i.memory.buffer)), Le;
  }
  let Oe = null;
  function Q2() {
    return (Oe === null || Oe.byteLength === 0) && (Oe = new Int16Array(i.memory.buffer)), Oe;
  }
  let Ge = null;
  function X2() {
    return (Ge === null || Ge.byteLength === 0) && (Ge = new Int32Array(i.memory.buffer)), Ge;
  }
  let We = null;
  function Y2() {
    return (We === null || We.byteLength === 0) && (We = new Int8Array(i.memory.buffer)), We;
  }
  function I(_, e) {
    return t3(_ >>> 0, e);
  }
  let ze = null;
  function Z2() {
    return (ze === null || ze.byteLength === 0) && (ze = new Uint16Array(i.memory.buffer)), ze;
  }
  let Ue = null;
  function e3() {
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
      const r = T(t);
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
      --r.cnt === 0 && (i.__wbindgen_destroy_closure(r.a, r.b), r.a = 0, ht.unregister(r));
    }, ht.register(n, r, r), n;
  }
  function w_(_, e) {
    const t = e(_.length * 1, 1) >>> 0;
    return le().set(_, t / 1), R = _.length, t;
  }
  function je(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return K2().set(_, t / 8), R = _.length, t;
  }
  function z(_, e, t) {
    if (t === void 0) {
      const b = Se.encode(_), o = e(b.length, 1) >>> 0;
      return le().subarray(o, o + b.length).set(b), R = b.length, o;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = le();
    let c = 0;
    for (; c < r; c++) {
      const b = _.charCodeAt(c);
      if (b > 127) break;
      a[n + c] = b;
    }
    if (c !== r) {
      c !== 0 && (_ = _.slice(c)), n = t(n, r, r = c + _.length * 3, 1) >>> 0;
      const b = le().subarray(n + c, n + r), o = Se.encodeInto(_, b);
      c += o.written, n = t(n, r, c, 1) >>> 0;
    }
    return R = c, n;
  }
  function F(_) {
    const e = i.__wbindgen_externrefs.get(_);
    return i.__externref_table_dealloc(_), e;
  }
  let r_ = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  r_.decode();
  const _3 = 2146435072;
  let p_ = 0;
  function t3(_, e) {
    return p_ += e, p_ >= _3 && (r_ = new TextDecoder("utf-8", {
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
  let R = 0, i;
  function r3(_) {
    i = _;
  }
  URL = globalThis.URL;
  const n3 = await L_({
    "./proteus_host_web_bg.js": {
      __wbg_call_5575218572ead796: Yo,
      __wbg_new_typed_00a409eb4ec4f2d9: dd,
      __wbg_next_0c4066e251d2eff9: wd,
      __wbg_done_b62d4a7d2286852a: Mi,
      __wbg_value_49f783bb59765962: Up,
      __wbg_then_05edfc8a4fea5106: tp,
      __wbg_get_197a3fe98f169e38: qf,
      __wbg_get_unchecked_54a4374c38e08460: Nf,
      __wbg_length_c6054974c0a6cdb9: yu,
      __wbg_new_227d7c05414eb861: od,
      __wbg_stack_3b0d974bbf31e44f: m1,
      __wbg_error_a6fa202b58aa1cd3: Zi,
      __wbg_proteusapp_new: Td,
      __wbg_push_f724b5db8acf89d2: Bd,
      __wbg_instanceof_Map_afa18d5840c04c15: bu,
      __wbg_call_8e98ed2f3c86c4b5: Zo,
      __wbg_call_0e855b388e315e17: Xo,
      __wbg_set_dc601f4a69da0bc2: q0,
      __wbg_get_with_ref_key_6412cf3094599694: Jf,
      __wbg_set_6be42768c690e380: i0,
      __wbg_String_8564e559799eccda: jb,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: au,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: Ju,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: Ku,
      __wbg_maxTextureDimension3D_06ee54121b37d431: Qu,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: Nu,
      __wbg_maxBindGroups_14611ac9ed1c6b56: Du,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: Bu,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: Gu,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: Ou,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: zu,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: Uu,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: ju,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: Hu,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: Yu,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: Xu,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: qu,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: _d,
      __wbg_maxBufferSize_f7ce3e1856349d2f: Fu,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: Zu,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: ed,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: Wu,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: nd,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: rd,
      __wbg_maxColorAttachments_fd9187f9f786da18: ku,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: Pu,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: Eu,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: Cu,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: Mu,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: Ru,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: Vu,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: Lu,
      __wbg_description_18d0a6d4077fec8e: Ii,
      __wbg_set_dst_factor_1ed75271a89a711e: bg,
      __wbg_set_operation_b5862f5a1a143b30: iw,
      __wbg_set_src_factor_1c4f755f8676df1b: Bw,
      __wbg_set_texture_16d2be474ce6ad0c: Uw,
      __wbg_set_mip_level_246db61be15bdd69: Zg,
      __wbg_set_x_56f0c2c08a62725c: u1,
      __wbg_set_y_04fb8ce84735b4e1: d1,
      __wbg_set_z_a51316db27a4941e: g1,
      __wbg_set_origin_9b3b0fbe0a5dc469: fw,
      __wbg_set_aspect_77332ac136ee94eb: y0,
      __wbg_Window_a07901001eb4269f: Hb,
      __wbg_gpu_a7c12045c25d009a: Kf,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: Nb,
      __wbg_set_a_5f6e488475272136: f0,
      __wbg_set_b_688365d692bba214: S0,
      __wbg_set_g_d4d1d77cf8fdd362: Sg,
      __wbg_set_r_527e5a41c4b1a846: pw,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: nu,
      __wbg_queue_65d985f3e6d786a6: Rd,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: dw,
      __wbg_requestAdapter_9ff5c9d1ff271165: qd,
      __wbg_set_required_limits_3b031f66f838f4e3: mw,
      __wbg_set_required_features_54918de8185c5fab: lw,
      __wbg_set_label_bae57fb9f24fde5c: Rg,
      __wbg_requestDevice_c1c34f88a477e509: Nd,
      __wbg_limits_50a8c5e629dbfe40: vu,
      __wbg_info_22dcf1fd1b12bc7d: _u,
      __wbg_set_size_41cd9255ca1e4242: Tw,
      __wbg_set_usage_908213a4d4bb8bde: Yw,
      __wbg_set_mapped_at_creation_48de4735fab51e78: Jg,
      __wbg_set_label_cd567b7b35838e4c: Lg,
      __wbg_createBuffer_2f08c0205e04efca: Fs,
      __wbg_set_address_mode_u_a37cf1035585c638: d0,
      __wbg_set_address_mode_v_8ac049e029caef76: g0,
      __wbg_set_address_mode_w_eb9260ee11729e92: w0,
      __wbg_set_compare_42211fbf15e3b850: W0,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: jg,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: Hg,
      __wbg_set_mag_filter_69d846b974d4bcc0: Ng,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: Yg,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: tw,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: Qg,
      __wbg_set_label_dcd98efbb9370da8: Gg,
      __wbg_createSampler_248bd67c920af37d: zs,
      __wbg_set_width_1a5e2e86fa5bdcd8: s1,
      __wbg_set_height_e8b5483b8c117d5e: Tg,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: Y0,
      __wbg_set_format_e9d4b1475bb3bd3b: xg,
      __wbg_set_size_a61ff22205255d61: Dw,
      __wbg_set_usage_7fa9cd18d1104aca: Xw,
      __wbg_set_label_0c1bd0e976cf0a9a: Fg,
      __wbg_set_dimension_36e13ccecae5af4b: cg,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: _w,
      __wbg_set_sample_count_865e1d19b84e27e6: $w,
      __wbg_set_view_formats_bab284fc81b40e70: a1,
      __wbg_createTexture_9e76b80a2dc0d12e: Ks,
      __wbg_set_entries_fc76ca4d7da6a709: ig,
      __wbg_set_layout_eeef59714f5bf48b: Ug,
      __wbg_set_label_f92ae11c77d74198: Wg,
      __wbg_createBindGroup_2320df4db188406c: Ds,
      __wbg_set_code_56e2d45ec1ff6c2d: E0,
      __wbg_set_label_be45aed56e4b9fee: Vg,
      __wbg_createShaderModule_53701de4fb271c90: qs,
      __wbg_set_label_d1c24b5a7a3ac31d: Og,
      __wbg_createCommandEncoder_cd88faca35d9ed68: ks,
      __wbg_set_bind_group_layouts_5325d038771af328: D0,
      __wbg_set_label_2f592bd1be3db6b3: Cg,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: Rs,
      __wbg_set_module_14e471fdd94c582d: nw,
      __wbg_set_entry_point_8db3b6d103e3b865: ug,
      __wbg_set_buffers_85a7238f4ef28ab4: M0,
      __wbg_set_layout_7c5ba5bdcde8a0f0: zg,
      __wbg_set_vertex_a4951dd9a7a4ed54: e1,
      __wbg_set_label_c47c451211e2f6d2: Eg,
      __wbg_set_format_f9341112e43ea182: yg,
      __wbg_set_depth_compare_30e9ea552da12fe2: K0,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: rg,
      __wbg_set_depth_bias_428c9340b0fd937b: j0,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: H0,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: N0,
      __wbg_set_compare_1509dc1a5420943f: G0,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: Q0,
      __wbg_set_fail_op_77ab26c98f847b65: gg,
      __wbg_set_pass_op_e9470d1262fb8a8b: uw,
      __wbg_set_stencil_back_6ef4683123b19b25: Fw,
      __wbg_set_stencil_front_aeb8580a97e5424b: kw,
      __wbg_set_stencil_read_mask_2954f260d47349ea: Mw,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: Ew,
      __wbg_set_depth_stencil_1bd50dbc450c8650: eg,
      __wbg_set_module_08ad08e736d8edbf: rw,
      __wbg_set_targets_6b0b3bdd87f35668: zw,
      __wbg_set_entry_point_6fec5723cc790927: fg,
      __wbg_set_fragment_1a595620425637e1: $g,
      __wbg_set_count_26a934d1cd07d080: z0,
      __wbg_set_mask_0c49a66362fc0079: Kg,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: m0,
      __wbg_set_multisample_85f073947b782d07: aw,
      __wbg_set_cull_mode_9d466c1ab414cac8: U0,
      __wbg_set_front_face_50cdf4eb61504a46: vg,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: Ww,
      __wbg_set_topology_beefb3aca0612b00: Hw,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: Kw,
      __wbg_set_primitive_369241acd17871f1: gw,
      __wbg_createRenderPipeline_f48187ba9f7701e8: Os,
      __wbg_set_entries_3017e6132f938c6e: sg,
      __wbg_set_label_1175a3329a06e52b: Pg,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: Ts,
      __wbg_limits_1c25cb4f379a4418: $u,
      __wbg_set_color_attachments_abe67f6631926e28: L0,
      __wbg_set_label_8fd860a36d2c7b74: Mg,
      __wbg_set_view_dbd0294573f64d05: t1,
      __wbg_set_depth_clear_value_442bf492734f63b6: J0,
      __wbg_set_depth_load_op_34d430b74bb36d91: X0,
      __wbg_set_depth_store_op_0ea0a215313dbda7: tg,
      __wbg_set_depth_read_only_138a11b10c731094: Z0,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: Pw,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: Cw,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: Vw,
      __wbg_set_stencil_read_only_fb489d191b6d969b: Rw,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: _g,
      __wbg_set_query_set_18679a8580267d5a: ww,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: T0,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: og,
      __wbg_set_timestamp_writes_c552d52fbb417005: jw,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: mo,
      __wbg_copyTextureToTexture_1be188df1e535c0a: Is,
      __wbg_label_47480289cc2bce71: hu,
      __wbg_set_label_2d2227f4d5991e50: kg,
      __wbg_finish_cfaeede3baf55be1: tf,
      __wbg_finish_087cb89c65c06eb1: _f,
      __wbg_drawIndexed_68637ebab6dd8d6e: Ui,
      __wbg_setPipeline_bab24dbce96903b9: n0,
      __wbg_setViewport_f9d423db4f4b4b58: b0,
      __wbg_setBindGroup_4ba56e1e0d26f244: e0,
      __wbg_setBindGroup_6124849cc8547086: _0,
      __wbg_setIndexBuffer_17431786d06c1b7c: t0,
      __wbg_setIndexBuffer_a16ed5b869c87507: r0,
      __wbg_setVertexBuffer_b508baf8d0ffe331: c0,
      __wbg_setVertexBuffer_91c4b602d0289943: a0,
      __wbg_end_414453a89205612c: Ki,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: Df,
      __wbg_getCurrentTexture_51975ae7185fd15f: yf,
      __wbg_set_device_0d774b66e7288f72: ng,
      __wbg_set_format_d347899cd860709c: hg,
      __wbg_set_usage_ae014e77ff77ce06: Zw,
      __wbg_set_alpha_mode_92402195b3ae1ee7: l0,
      __wbg_set_view_formats_fe531a043efb71fa: c1,
      __wbg_configure_3d64c677c7d68a15: xs,
      __wbg_writeBuffer_b4bdd36178348ca5: e2,
      __wbg_set_bytes_per_row_91681ca78d744888: R0,
      __wbg_set_rows_per_image_d198b7e73a38978b: yw,
      __wbg_set_offset_a097a8050a3a9a33: sw,
      __wbg_writeTexture_b45b69132e46a227: _2,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: yd,
      __wbg_submit_1290d44bb76ecef4: P1,
      __wbg_getMappedRange_5ed22727c9679168: Af,
      __wbg_unmap_8f06698a75b8331a: Gp,
      __wbg_destroy_b5b39f25f0799295: Ti,
      __wbg_mapAsync_bb0029907dd91181: Tu,
      __wbg_set_dimension_174ad7e2fb67fb4e: ag,
      __wbg_set_format_90860b0321868db4: lg,
      __wbg_set_aspect_a823a14d00d42d37: $0,
      __wbg_set_base_array_layer_cc6c68d233489c4b: A0,
      __wbg_set_array_layer_count_daec613068108a9d: h0,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: I0,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: ew,
      __wbg_set_label_03d2396d4655a3e1: Bg,
      __wbg_set_usage_7f0dda8309469b1c: Qw,
      __wbg_createView_cc96b5bdd3d5bf5e: Ys,
      __wbg_set_min_binding_size_689661b9ed25e083: Xg,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: Ag,
      __wbg_set_type_38961e08504ca674: Nw,
      __wbg_requestAdapter_c46930b8bc33722d: jd,
      __wbg_set_alpha_aa2e606e9e647b21: p0,
      __wbg_set_color_bc393d7efc3c8594: O0,
      __wbg_set_visibility_1bca121a89accba5: b1,
      __wbg_set_storage_texture_ab9eed9786337ef0: Ow,
      __wbg_set_external_texture_825fe2bc7a0c0603: dg,
      __wbg_set_binding_b6b0fe5c281b8c69: B0,
      __wbg_set_buffer_e89095a9f0cafad3: C0,
      __wbg_set_sampler_8c5d7fb1b02058c6: Sw,
      __wbg_set_texture_e25a73da75cf5808: qw,
      __wbg_set_view_dimension_263387976511ebc9: r1,
      __wbg_set_format_1786adb7bc74c7c9: wg,
      __wbg_set_access_091f317905cd76a5: u0,
      __wbg_set_format_abf7a1bc5425c56a: mg,
      __wbg_set_blend_8d6e9c08b5702a09: P0,
      __wbg_set_write_mask_144b25e2bd909124: f1,
      __wbg_set_load_op_56844f51434037bf: qg,
      __wbg_set_store_op_caeede4654b3d847: Gw,
      __wbg_set_view_bdeab150b5f0768c: _1,
      __wbg_set_clear_value_642701f928a5ccb3: V0,
      __wbg_set_resolve_target_fe76b3f99cf72078: hw,
      __wbg_set_buffer_55f096330c8912b4: k0,
      __wbg_set_offset_73156b0e0b41d79a: bw,
      __wbg_set_size_1e6281b07cd39177: Iw,
      __wbg_set_binding_f3c188a8cd21455b: F0,
      __wbg_set_resource_fe385d2e3dadaf63: xw,
      __wbg_set_format_6606f5c1fba6f459: pg,
      __wbg_set_offset_8d9d9afffa18b591: ow,
      __wbg_set_shader_location_0ff30a733291a396: Aw,
      __wbg_set_array_stride_c2c009eabc18b5f6: x0,
      __wbg_set_attributes_05f9117fd32ca606: v0,
      __wbg_set_step_mode_a35aef328761c452: Lw,
      __wbg_set_type_c1eebc19f8a6aeb9: Jw,
      __wbg_set_multisampled_40505c1381e1c32c: cw,
      __wbg_set_sample_type_7088b1efddce6a69: vw,
      __wbg_set_view_dimension_3ed01b237e85826f: n1,
      __wbg_includes_83dff8d05da243c5: eu,
      __wbg_clearBufferuiv_1d2d93401c0904a3: ts,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: ps,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: ms,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: hs,
      __wbg_copyBufferSubData_a944f33b601b822d: $s,
      __wbg_clientWaitSync_7580165bd2eff461: ss,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: ls,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: As,
      __wbg_createQuery_f013132b870a71ef: Ls,
      __wbg_createSampler_9fe50152a2524319: Us,
      __wbg_createVertexArray_8685feb21901c932: Xs,
      __wbg_deleteQuery_ef51ea0a52420103: si,
      __wbg_deleteSampler_5c045e0cc55813d4: ui,
      __wbg_getIndexedParameter_2b18df6fca85f751: Sf,
      __wbg_getQueryParameter_0599e85ddb81220b: Cf,
      __wbg_getSyncParameter_9a2bda340ebe166f: Gf,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: Wf,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: uu,
      __wbg_deleteSync_37ca83c429c43d8a: wi,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: hi,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: Vi,
      __wbg_drawBuffers_558d96e52e754731: Gi,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: zi,
      __wbg_endQuery_161170c5280a8293: Ji,
      __wbg_fenceSync_56efc7cc79111e54: ef,
      __wbg_framebufferTextureLayer_2312acdc74f97676: ff,
      __wbg_getBufferSubData_92680d3a2f7be029: pf,
      __wbg_readBuffer_361ec5474f3aae49: Vd,
      __wbg_readPixels_5840000f3e22f3ce: Ld,
      __wbg_readPixels_5bf204799ed2272f: Od,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: Gd,
      __wbg_texImage3D_8647ef58aef5b912: V1,
      __wbg_texStorage2D_ed5df596c5f1e3af: O1,
      __wbg_texStorage3D_160b0197bc190f04: G1,
      __wbg_texSubImage2D_f03448e182b0820d: J1,
      __wbg_texSubImage2D_d14d9c0a1f627c31: N1,
      __wbg_texSubImage2D_89866a04ecd0a76b: q1,
      __wbg_texSubImage2D_5c630043f1c56716: U1,
      __wbg_samplerParameterf_3157ba41c0f4d97a: Kd,
      __wbg_samplerParameteri_f85a29156e790189: Qd,
      __wbg_texImage2D_0e0f37b9fb297d01: k1,
      __wbg_texImage2D_0e537dc331652de3: C1,
      __wbg_texImage3D_30dbf7234481b8f5: R1,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: z1,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: j1,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: H1,
      __wbg_texSubImage3D_933e4cd41cc5376d: Z1,
      __wbg_texSubImage3D_c3538b28040daac9: _p,
      __wbg_uniform1ui_36c94692177ebf76: sp,
      __wbg_uniform2fv_17592f4dad9798fb: ip,
      __wbg_uniform2iv_d5d29ebbc466977d: dp,
      __wbg_texSubImage3D_0fdbd843482bb916: Q1,
      __wbg_texSubImage3D_09a97a968b93253d: K1,
      __wbg_texSubImage3D_355efde0dc047913: X1,
      __wbg_texSubImage3D_bd32c8e29e470904: ep,
      __wbg_texSubImage3D_5a238709d114b609: Y1,
      __wbg_uniform2uiv_418ba3bf6a230dd5: gp,
      __wbg_uniform4fv_9e670a001c77dca0: vp,
      __wbg_uniform4iv_1d57c6b8e5c0e447: Sp,
      __wbg_uniform3fv_dbe44b778e6b89e8: pp,
      __wbg_uniform3iv_d75d3a5f86d54be4: mp,
      __wbg_uniform3uiv_71c1efc24a662de9: hp,
      __wbg_uniform4uiv_c5d45f5dbdae727a: Ip,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: kp,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: Mp,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: Rp,
      __wbg_uniformBlockBinding_829a71912ad79a04: Tp,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: Dp,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: Fp,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: Pp,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: Vp,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: Hp,
      __wbg_activeTexture_525ee3068cb9e8d5: fo,
      __wbg_attachShader_3477e67517b09b6b: wo,
      __wbg_bindAttribLocation_79b5d26727094518: ho,
      __wbg_bindBuffer_d3111de6861cb875: $o,
      __wbg_bindFramebuffer_63e837a5dc0accfb: Ao,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: Io,
      __wbg_bindTexture_7ab28ff4ff3dc506: Bo,
      __wbg_blendColor_15f26633b646e542: Co,
      __wbg_blendEquation_7dadb4db540a42da: Eo,
      __wbg_blendEquationSeparate_8240ddfa32266109: Ro,
      __wbg_blendFunc_b15af02643e188f1: zo,
      __wbg_blendFuncSeparate_456410f9919bed39: Go,
      __wbg_clear_dadcb3e2929388b0: bs,
      __wbg_clearDepth_05c17028494ee4dd: rs,
      __wbg_clearStencil_917833d1e2ac56e4: cs,
      __wbg_colorMask_f111e3e5796458f4: us,
      __wbg_compileShader_f5625b583b2c9fd6: ds,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: Lp,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: Op,
      __wbg_vertexAttribDivisor_f17a8585267be92f: jp,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: vs,
      __wbg_createBuffer_9f602b2dbcbf409c: Ps,
      __wbg_createFramebuffer_4a250944a4542bbc: Cs,
      __wbg_createProgram_4c8164d471c10346: Vs,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: Ws,
      __wbg_createShader_9c5cd42709d915ff: Hs,
      __wbg_createTexture_3eed23cb87dd35fc: Ns,
      __wbg_cullFace_94f24b4fd5e9038b: _i,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: ri,
      __wbg_getExtension_11824edd67a143d8: vf,
      __wbg_getParameter_7f7f23cae98f2c81: If,
      __wbg_getProgramInfoLog_cd84be80942f345b: Ff,
      __wbg_getProgramParameter_039391d5ba319f50: Pf,
      __wbg_getShaderInfoLog_495bddda98172699: Mf,
      __wbg_getShaderParameter_4eb65cfb174ceb22: Vf,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: Lf,
      __wbg_getUniformLocation_ab63f569a4e41744: Uf,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: ai,
      __wbg_deleteProgram_eff668280dcb01ca: oi,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: fi,
      __wbg_deleteShader_3339454254c7147c: di,
      __wbg_deleteTexture_c1c58550dc55af5c: li,
      __wbg_depthFunc_31b183b5b8ee478e: xi,
      __wbg_depthMask_cab7f2ae7f0e559c: vi,
      __wbg_depthRange_797a71ba3b79267a: Si,
      __wbg_disable_cb1b3e6c1cee5202: ki,
      __wbg_disableVertexAttribArray_b395358ec5084c39: Fi,
      __wbg_drawArrays_42dbb4b0349c8f34: Li,
      __wbg_enable_d1f42f78be33a553: Ni,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: qi,
      __wbg_flush_7ae42f071230db6b: rf,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: bf,
      __wbg_framebufferTexture2D_367ab597a005e8d9: of,
      __wbg_frontFace_9bdcf2a758e989e5: df,
      __wbg_linkProgram_e23a348b0f6e0c4f: Au,
      __wbg_pixelStorei_a78a504be58d1d0a: vd,
      __wbg_polygonOffset_a4f07d97b9b0dced: Ad,
      __wbg_renderbufferStorage_3049e13db5c4e60e: zd,
      __wbg_scissor_6c024669fbf4fe72: Xd,
      __wbg_vertexAttribPointer_4e5d289c5d224210: Jp,
      __wbg_viewport_a0ca330f9b85397e: Kp,
      __wbg_shaderSource_66dce75b25a1a407: p1,
      __wbg_stencilFuncSeparate_ec603976be9569a4: S1,
      __wbg_stencilMask_485dcb5965c79a71: T1,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: I1,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: B1,
      __wbg_texParameteri_c6efffcecb474d2f: E1,
      __wbg_uniform1f_3acd3f3eb50b5e11: ap,
      __wbg_uniform1i_e4f13604354c28ae: op,
      __wbg_uniform4f_a5008773cfb47d1a: yp,
      __wbg_useProgram_ab2ee2a13a1fd909: zp,
      __wbg_bufferSubData_2270f1b9db71e642: Jo,
      __wbg_clearBufferfv_6b77b9402254a2bf: es,
      __wbg_clearBufferiv_0f056544010eef3e: _s,
      __wbg_beginQuery_dad334d972fed3cc: lo,
      __wbg_bindBufferRange_16a9d90becc2a7d7: yo,
      __wbg_bindSampler_3c7002cb6d56ae8f: Do,
      __wbg_bindVertexArray_c391bd47303d75cd: ko,
      __wbg_blitFramebuffer_ea96ada8bba07582: Uo,
      __wbg_bufferData_64e9905f2b3d3a6f: Ho,
      __wbg_bufferData_99bbbc63f02251c4: No,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: iu,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: Hd,
      __wbg_navigator_935098efd1dc7fe5: cd,
      __wbg_devicePixelRatio_8e5ca44720abafec: Di,
      __wbg_document_2634180a4c694068: Ci,
      __wbg_instanceof_Window_0d356b88a2f77c42: fu,
      __wbg_hidden_cb32701ca3785fea: Zf,
      __wbg_getElementById_c7aba6b93b34bf01: $f,
      __wbg_querySelector_1f3658f4b48e268b: kd,
      __wbg_querySelectorAll_ffda3c891a9eb29a: Pd,
      __wbg_hasAttribute_73e1230c9c107e79: Qf,
      __wbg_setAttribute_8bccfbabf2a83682: Zd,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: wf,
      __wbg_focus_c80921c19b28520b: af,
      __wbg_uniform2iv_c5e863975dd780d8: up,
      __wbg_uniform3fv_7723e142be50856f: wp,
      __wbg_uniform3iv_bea3976522e15d48: lp,
      __wbg_uniform4fv_85ad5d23234895d2: $p,
      __wbg_clear_ff8cfdf420f7dde6: os,
      __wbg_clearDepth_ac6b54f112feeaf7: ns,
      __wbg_clearStencil_56d6a6308294a749: as,
      __wbg_colorMask_b0ab9d429a1efa0a: fs,
      __wbg_compileShader_fcf3f3d2891f73f9: gs,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: Ss,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: Bs,
      __wbg_createFramebuffer_ab73f30b5dc97415: Ms,
      __wbg_createProgram_f11c63f59f41b82a: Es,
      __wbg_createRenderbuffer_556000dbb01f5026: Gs,
      __wbg_createShader_27d9388313f3b14e: js,
      __wbg_createTexture_8455c703424c567b: Js,
      __wbg_cullFace_774780fb4177aab8: ei,
      __wbg_deleteBuffer_d758283bea6e0ccf: ni,
      __wbg_deleteFramebuffer_8953b325144192fe: ci,
      __wbg_deleteProgram_0135c6926e75af75: bi,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: ii,
      __wbg_deleteShader_79dbaaed69b7ca3b: gi,
      __wbg_deleteTexture_3acb672a45f9998a: pi,
      __wbg_depthFunc_eaca1bc79f7bf216: yi,
      __wbg_depthMask_3a9074b08d1f68e5: $i,
      __wbg_depthRange_c24a808b3496e0a9: Ai,
      __wbg_uniform4iv_a9aaa92f2f458ec2: Ap,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: Bp,
      __wbg_uniformMatrix3fv_da8c388748c5739b: Cp,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: Ep,
      __wbg_activeTexture_1d5359b20df41710: io,
      __wbg_attachShader_683d1070365e7066: po,
      __wbg_bindAttribLocation_d56d3c40331af7ed: xo,
      __wbg_bindBuffer_e95efaf0d4851845: vo,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: So,
      __wbg_bindRenderbuffer_d608b211c51ed147: To,
      __wbg_bindTexture_ffc56f1e5c5526c6: Fo,
      __wbg_blendColor_a0ba1cdcecc3a34c: Mo,
      __wbg_blendEquation_8bfa69f639ae92da: Lo,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: Vo,
      __wbg_blendFunc_713c504adab14f98: Wo,
      __wbg_blendFuncSeparate_3eef699c291dbc87: Oo,
      __wbg_disable_4dca6ee0ccc91e4a: Pi,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: Bi,
      __wbg_drawArrays_10e1254aa4524ae9: Ei,
      __wbg_enable_c6e523307311617a: Hi,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: ji,
      __wbg_flush_eb3fb8da2ec00d57: nf,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: cf,
      __wbg_linkProgram_6a2eee02a03b9b00: Su,
      __wbg_pixelStorei_55ad4c67b699537c: $d,
      __wbg_polygonOffset_06dc6468c12a57e1: Sd,
      __wbg_renderbufferStorage_2918fb696fd45663: Wd,
      __wbg_scissor_f9696c630e464977: Yd,
      __wbg_shaderSource_628c37a476ae65f9: w1,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: v1,
      __wbg_stencilMask_f9fe198f7fd6fc9c: D1,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: A1,
      __wbg_stencilOpSeparate_6cf50803475d2640: F1,
      __wbg_texParameteri_fe6210a493d48a16: L1,
      __wbg_framebufferTexture2D_3a558e14f56720d2: sf,
      __wbg_frontFace_c9bb1fa659ffd276: gf,
      __wbg_getParameter_91a344e1a84a4669: Tf,
      __wbg_getProgramInfoLog_35410850de9ccefe: Bf,
      __wbg_getProgramParameter_bbc667347ac2e882: kf,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: Rf,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: Ef,
      __wbg_getUniformLocation_340155dc706d3fea: zf,
      __wbg_uniform1f_d34e4b454f7c8e73: cp,
      __wbg_uniform1i_cd9a7f990128ea48: bp,
      __wbg_uniform4f_4410d2faaa7e5dda: xp,
      __wbg_useProgram_0e1cd86765304939: Wp,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: Np,
      __wbg_viewport_b5bd46a0d111c83c: Qp,
      __wbg_texSubImage2D_1b2ff28f994c325e: W1,
      __wbg_uniform2fv_39277cf2d3cb83c7: fp,
      __wbg_bufferData_5df9bdb32e189eee: jo,
      __wbg_bufferData_26132561617ce8fb: qo,
      __wbg_bufferSubData_44db8a3b4a70b57d: Ko,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: ws,
      __wbg_readPixels_05377f8b6fa1d8eb: Ed,
      __wbg_texImage2D_7bc3001cb8602ed2: M1,
      __wbg_navigator_017bc45e84c473cc: ad,
      __wbg_log_d282446d03691e72: Iu,
      __wbg_info_a392cd5b7536cfb5: tu,
      __wbg_warn_88c4a5bd9a322000: Xp,
      __wbg_debug_7271beced8b71cd4: ti,
      __wbg_error_933f449d72fef598: Yi,
      __wbg_error_50f60c611a3dcf64: Xi,
      __wbg_set_width_031bdecd763c5855: o1,
      __wbg_set_height_ad5056ea051acd78: Ig,
      __wbg_getContext_486aab500e1c34c9: mf,
      __wbg_getContext_9fd4db9b1cf155db: xf,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: cu,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: Oi,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: Of,
      __wbg_width_a86bcd32bd998060: Zp,
      __wbg_height_cd732bbdc7b66e49: Xf,
      __wbg_queryCounterEXT_ebb00bcc96221671: Fd,
      __wbg_offsetX_0214819d43aaf6d5: hd,
      __wbg_offsetY_f18f571e33b385ab: xd,
      __wbg_button_bb3285fcdf965178: Qo,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: Ri,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: Wi,
      __wbg_get_37b48b8fa52d1f2c: jf,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: qp,
      __wbg_preventDefault_c047d3e292b08cc4: Id,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: uf,
      __wbg_width_08e66520b99071f4: Yp,
      __wbg_height_e9afb506f31052a9: Yf,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: Po,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: Qs,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: mi,
      __wbg_set_width_f9e631f4ee129e5c: i1,
      __wbg_set_height_ef298446b359b0c5: Dg,
      __wbg_getContext_70c2d1bed75d4122: hf,
      __wbg_getContext_422b32d0ee4b8076: lf,
      __wbg_addEventListener_ea90bc131475777e: uo,
      __wbg_contentRect_0fb8c8900d689a0c: ys,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: ou,
      __wbg_new_1e52e3c919312525: bd,
      __wbg_observe_592b94857eed8e27: ld,
      __wbg_altKey_7412dd64f8c921c7: go,
      __wbg_ctrlKey_00097886a21597a7: Zs,
      __wbg_shiftKey_273ee8c901267b55: l1,
      __wbg_metaKey_1c2847b62ad062c1: td,
      __wbg_repeat_46a5c90df9f6ef0b: Ud,
      __wbg_isComposing_e3709163a95a2477: gu,
      __wbg_key_d6b3d2cce3d41872: mu,
      __wbg_code_87bb99fdec02d313: is,
      __wbg_resolve_d82363d90af6928a: Jd,
      __wbg_then_591b6b3a75ee817a: np,
      __wbg_iterator_cc47ba25a2be735a: lu,
      __wbg_get_9a29be2cb383ed9a: Hf,
      __wbg_next_402fa10b59ab20c3: pd,
      __wbg_new_2e117a478906f062: sd,
      __wbg_new_36e147a8ced3c6e0: id,
      __wbg_of_62183ea089c00bfa: md,
      __wbg_isArray_145a34fd0a38d37b: du,
      __wbg_new_e66a4b7758dd2e5c: ud,
      __wbg_isSafeInteger_a3389a198582f5f6: wu,
      __wbg_is_de5b366c746e004c: pu,
      __wbg_entries_c261c3fa1f281256: Qi,
      __wbg_then_2a84678a50976959: rp,
      __wbg_length_589238bdcf171f0e: xu,
      __wbg_prototypesetcall_d721637c7ca66eb8: Dd,
      __wbg_set_272b80acaf9a75e8: o0,
      __wbg_new_81880fb5002cb255: fd,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: gd,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: h1,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: y1,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: x1,
      __wbg_static_accessor_WINDOW_168f178805d978fe: $1,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: ru,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: su,
      __wbg_queueMicrotask_1c9b3800e321a967: Cd,
      __wbg_queueMicrotask_311744e534a929a3: Md,
      __wbg_set_4564f7dc44fcb0c9: s0,
      __wbg___wbindgen_number_get_1cc01dd708740256: co,
      __wbg___wbindgen_in_4990f46af709e33c: Xb,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: oo,
      __wbg___wbindgen_is_null_6d937fbfb6478470: eo,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: no,
      __wbg_Number_c4bdf66bb78f7977: qb,
      __wbg_Error_fdd633d4bb5dd76a: Ub,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: Yb,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: _o,
      __wbg___wbindgen_is_string_1fca8072260dd261: to,
      __wbg___wbindgen_string_get_71bb4348194e31f0: bo,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: Kb,
      __wbg___wbindgen_is_function_acc5528be2b923f2: Zb,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: ro,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: ao,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: Jb,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: so,
      __wbg___wbindgen_debug_string_8a447059637473e2: Qb,
      __wbindgen_init_externref_table: y2,
      __wbindgen_cast_0000000000000001: t2,
      __wbindgen_cast_0000000000000002: r2,
      __wbindgen_cast_0000000000000003: n2,
      __wbindgen_cast_0000000000000004: a2,
      __wbindgen_cast_0000000000000005: c2,
      __wbindgen_cast_0000000000000006: b2,
      __wbindgen_cast_0000000000000007: o2,
      __wbindgen_cast_0000000000000008: s2,
      __wbindgen_cast_0000000000000009: i2,
      __wbindgen_cast_000000000000000a: f2,
      __wbindgen_cast_000000000000000b: u2,
      __wbindgen_cast_000000000000000c: d2,
      __wbindgen_cast_000000000000000d: g2,
      __wbindgen_cast_000000000000000e: w2,
      __wbindgen_cast_000000000000000f: p2,
      __wbindgen_cast_0000000000000010: l2,
      __wbindgen_cast_0000000000000011: m2,
      __wbindgen_cast_0000000000000012: h2,
      __wbindgen_cast_0000000000000013: x2
    }
  }, Wb), { memory: a3, mount: c3, __wbg_proteusapp_free: b3, proteusapp_addChild: o3, proteusapp_animateTo: s3, proteusapp_bakeTexture: i3, proteusapp_bakedImageSize: f3, proteusapp_bakedTextSize: u3, proteusapp_channelDestroy: d3, proteusapp_channelSet: g3, proteusapp_component: w3, proteusapp_copyBakedImageFrom: p3, proteusapp_createVideo: l3, proteusapp_cropImage: m3, proteusapp_declareGeometry: h3, proteusapp_declaredGeometry: x3, proteusapp_destroy: y3, proteusapp_devices: $3, proteusapp_freeResources: v3, proteusapp_get: S3, proteusapp_hideVideo: A3, proteusapp_inputDevices: I3, proteusapp_loadTexture: T3, proteusapp_mergeFrom: D3, proteusapp_mergeFromWithBehavior: B3, proteusapp_new: F3, proteusapp_onBlur: P3, proteusapp_onClick: k3, proteusapp_onDrag: C3, proteusapp_onDropped: M3, proteusapp_onFocus: R3, proteusapp_onHoverEnter: V3, proteusapp_onHoverExit: E3, proteusapp_onPress: L3, proteusapp_onRelease: O3, proteusapp_onTransitionComplete: G3, proteusapp_pointerLeft: W3, proteusapp_pointerMoved: z3, proteusapp_pointerPressed: U3, proteusapp_pointerReleased: q3, proteusapp_releaseVideo: j3, proteusapp_removeChild: H3, proteusapp_setDeclaredGeometry: N3, proteusapp_setDevices: J3, proteusapp_setDisabled: K3, proteusapp_setImage: Q3, proteusapp_setInputDevices: X3, proteusapp_setInteractive: Y3, proteusapp_setOpacity: Z3, proteusapp_setText: el, proteusapp_setTexture: _l, proteusapp_setTransitionInteraction: tl, proteusapp_setVideoCrossfade: rl, proteusapp_setVisible: nl, proteusapp_showVideo: al, proteusapp_splitTo: cl, proteusapp_splitToWithBehavior: bl, proteusapp_splitToWithStates: ol, proteusapp_texture: sl, proteusapp_textureState: il, proteusapp_tick: fl, proteusapp_transitionChannel: ul, proteusapp_uploadVideoFrame: dl, __wbg_handle_free: gl, __wbg_texturehandle_free: wl, __wbg_transitionchannel_free: pl, __wbg_videohandle_free: ll, handle_fromId: ml, handle_id: hl, texturehandle_fromId: xl, texturehandle_id: yl, __abort_handler: $l, __instance_terminated: vl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: Sl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Al, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: Il, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Tl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: Dl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: Bl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: Fl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: Pl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: kl, __wbindgen_malloc: Cl, __wbindgen_realloc: Ml, __wbindgen_exn_store: Rl, __externref_table_alloc: Vl, __wbindgen_externrefs: El, __wbindgen_free: Ll, __wbindgen_destroy_closure: Ol, __externref_table_dealloc: Gl, __wbindgen_start: zt } = n3, Wl = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: $l,
    __externref_table_alloc: Vl,
    __externref_table_dealloc: Gl,
    __instance_terminated: vl,
    __wbg_handle_free: gl,
    __wbg_proteusapp_free: b3,
    __wbg_texturehandle_free: wl,
    __wbg_transitionchannel_free: pl,
    __wbg_videohandle_free: ll,
    __wbindgen_destroy_closure: Ol,
    __wbindgen_exn_store: Rl,
    __wbindgen_externrefs: El,
    __wbindgen_free: Ll,
    __wbindgen_malloc: Cl,
    __wbindgen_realloc: Ml,
    __wbindgen_start: zt,
    handle_fromId: ml,
    handle_id: hl,
    memory: a3,
    mount: c3,
    proteusapp_addChild: o3,
    proteusapp_animateTo: s3,
    proteusapp_bakeTexture: i3,
    proteusapp_bakedImageSize: f3,
    proteusapp_bakedTextSize: u3,
    proteusapp_channelDestroy: d3,
    proteusapp_channelSet: g3,
    proteusapp_component: w3,
    proteusapp_copyBakedImageFrom: p3,
    proteusapp_createVideo: l3,
    proteusapp_cropImage: m3,
    proteusapp_declareGeometry: h3,
    proteusapp_declaredGeometry: x3,
    proteusapp_destroy: y3,
    proteusapp_devices: $3,
    proteusapp_freeResources: v3,
    proteusapp_get: S3,
    proteusapp_hideVideo: A3,
    proteusapp_inputDevices: I3,
    proteusapp_loadTexture: T3,
    proteusapp_mergeFrom: D3,
    proteusapp_mergeFromWithBehavior: B3,
    proteusapp_new: F3,
    proteusapp_onBlur: P3,
    proteusapp_onClick: k3,
    proteusapp_onDrag: C3,
    proteusapp_onDropped: M3,
    proteusapp_onFocus: R3,
    proteusapp_onHoverEnter: V3,
    proteusapp_onHoverExit: E3,
    proteusapp_onPress: L3,
    proteusapp_onRelease: O3,
    proteusapp_onTransitionComplete: G3,
    proteusapp_pointerLeft: W3,
    proteusapp_pointerMoved: z3,
    proteusapp_pointerPressed: U3,
    proteusapp_pointerReleased: q3,
    proteusapp_releaseVideo: j3,
    proteusapp_removeChild: H3,
    proteusapp_setDeclaredGeometry: N3,
    proteusapp_setDevices: J3,
    proteusapp_setDisabled: K3,
    proteusapp_setImage: Q3,
    proteusapp_setInputDevices: X3,
    proteusapp_setInteractive: Y3,
    proteusapp_setOpacity: Z3,
    proteusapp_setText: el,
    proteusapp_setTexture: _l,
    proteusapp_setTransitionInteraction: tl,
    proteusapp_setVideoCrossfade: rl,
    proteusapp_setVisible: nl,
    proteusapp_showVideo: al,
    proteusapp_splitTo: cl,
    proteusapp_splitToWithBehavior: bl,
    proteusapp_splitToWithStates: ol,
    proteusapp_texture: sl,
    proteusapp_textureState: il,
    proteusapp_tick: fl,
    proteusapp_transitionChannel: ul,
    proteusapp_uploadVideoFrame: dl,
    texturehandle_fromId: xl,
    texturehandle_id: yl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: kl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: Sl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: Dl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: Bl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: Fl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: Pl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: Il,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Tl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Al
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  r3(Wl);
  zt();
  async function zl(_, e) {
    await zb(_, (t) => e.setup(new jl(t)), e.update ? (t) => {
      var _a3;
      return (_a3 = e.update) == null ? void 0 : _a3.call(e, t);
    } : void 0, e.config ?? null);
  }
  let xt = class {
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
  }, Ul = class {
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
  }, He = class {
    constructor(e, t) {
      this.app = e, this.wasmHandle = t;
    }
    id() {
      return this.wasmHandle.id();
    }
    state() {
      return this.app.wasmApp.textureState(this.wasmHandle);
    }
  }, ql = class {
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
  }, jl = class {
    constructor(e) {
      this.wasmApp = e ?? new I_();
    }
    component(e) {
      return new xt(this, this.wasmApp.component(e));
    }
    handleFromId(e) {
      return new xt(this, x.fromId(e));
    }
    transitionChannel(e) {
      return new Ul(this, this.wasmApp.transitionChannel(e == null ? void 0 : e.id()));
    }
    texture(e) {
      return new He(this, this.wasmApp.texture(e));
    }
    loadTexture(e, t) {
      const r = this.wasmApp.loadTexture(e, t ?? null);
      return r ? new He(this, r) : void 0;
    }
    bakeTexture(e, t, r, n) {
      return new He(this, this.wasmApp.bakeTexture(e, t, r, n ?? null));
    }
    createVideo() {
      return new ql(this, this.wasmApp.createVideo());
    }
    textureFromId(e) {
      return new He(this, K.fromId(e));
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
  const Hl = "" + new URL("proteus_bench_web_bg-BvgUZRZS.wasm", import.meta.url).href;
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
  class Te {
    static __wrap(e) {
      const t = Object.create(Te.prototype);
      return t.__wbg_ptr = e, l_.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, l_.unregister(this), e;
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
      const a = m_(r, s.__wbindgen_malloc), c = M, b = s.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, c, n);
      return H.__wrap(b);
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
    loadTexture(e, t) {
      const r = m_(e, s.__wbindgen_malloc), n = M, a = s.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : H.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      m(e, h);
      const a = __(t, s.__wbindgen_malloc), c = M, b = s.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, c, r, n);
      if (b[1]) throw P(b[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      m(e, h);
      const c = __(t, s.__wbindgen_malloc), b = M, o = s.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, c, b, r, n, a);
      if (o[1]) throw P(o[0]);
    }
    constructor() {
      const e = s.proteusapp_new();
      return this.__wbg_ptr = e, l_.register(this, this.__wbg_ptr, this), this;
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
      m(e, h), m(t, H);
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
      const a = __(t, s.__wbindgen_malloc), c = M, b = s.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, c, r, n);
      if (b[1]) throw P(b[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      m(e, h);
      const c = __(t, s.__wbindgen_malloc), b = M, o = s.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, c, b, r, n, a);
      if (o[1]) throw P(o[0]);
    }
    splitToWithStates(e, t, r, n) {
      m(e, h);
      const a = s.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw P(a[0]);
    }
    texture(e) {
      const t = s.proteusapp_texture(this.__wbg_ptr, e);
      return H.__wrap(t);
    }
    textureState(e) {
      return m(e, H), s.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
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
      const a = m_(n, s.__wbindgen_malloc), c = M;
      return s.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, c) !== 0;
    }
  }
  Symbol.dispose && (Te.prototype[Symbol.dispose] = Te.prototype.free);
  class H {
    static __wrap(e) {
      const t = Object.create(H.prototype);
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
      return H.__wrap(t);
    }
    id() {
      return s.texturehandle_id(this.__wbg_ptr);
    }
  }
  Symbol.dispose && (H.prototype[Symbol.dispose] = H.prototype.free);
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
  function Nl() {
    s.clear();
  }
  function Jl(_) {
    s.on_frame(_);
  }
  function Kl(_, e) {
    const t = G(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = M;
    s.show(t, r, e);
  }
  function Ql(_, e) {
    const t = G(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = M;
    return s.start(t, r, e);
  }
  function Xl() {
    s.stop_frames();
  }
  function Yl(_, e) {
    return Error(S(_, e));
  }
  function Zl(_) {
    return Number(_);
  }
  function e4(_, e) {
    const t = String(e), r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function _4(_) {
    return _.Window;
  }
  function t4(_) {
    return _.WorkerGlobalScope;
  }
  function r4(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    k().setBigInt64(_ + 8, v(r) ? BigInt(0) : r, true), k().setInt32(_ + 0, !v(r), true);
  }
  function n4(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return v(t) ? 16777215 : t ? 1 : 0;
  }
  function a4(_, e) {
    const t = C_(e), r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function c4(_, e) {
    return _ in e;
  }
  function b4(_) {
    return typeof _ == "bigint";
  }
  function o4(_) {
    return typeof _ == "function";
  }
  function s4(_) {
    return _ === null;
  }
  function i4(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function f4(_) {
    return typeof _ == "string";
  }
  function u4(_) {
    return _ === void 0;
  }
  function d4(_, e) {
    return _ === e;
  }
  function g4(_, e) {
    return _ == e;
  }
  function w4(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    k().setFloat64(_ + 8, v(r) ? 0 : r, true), k().setInt32(_ + 0, !v(r), true);
  }
  function p4(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function l4(_, e) {
    throw new Error(S(_, e));
  }
  function m4(_) {
    _._wbg_cb_unref();
  }
  function h4(_) {
    _.abort();
  }
  function x4(_) {
    return _.aborted;
  }
  function y4(_, e) {
    _.activeTexture(e >>> 0);
  }
  function $4(_, e) {
    _.activeTexture(e >>> 0);
  }
  function v4() {
    return g(function(_, e, t, r) {
      _.addEventListener(S(e, t), r);
    }, arguments);
  }
  function S4(_) {
    return _.altKey;
  }
  function A4() {
    return g(function(_) {
      return _.arrayBuffer();
    }, arguments);
  }
  function I4(_, e, t) {
    _.attachShader(e, t);
  }
  function T4(_, e, t) {
    _.attachShader(e, t);
  }
  function D4(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function B4() {
    return g(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function F4(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function P4(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, S(r, n));
  }
  function k4(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function C4(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function M4(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function R4(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function V4(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function E4(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function L4(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function O4(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function G4(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function W4(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function z4(_, e) {
    _.bindVertexArrayOES(e);
  }
  function U4(_, e) {
    _.bindVertexArray(e);
  }
  function q4(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function j4(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function H4(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function N4(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function J4(_, e) {
    _.blendEquation(e >>> 0);
  }
  function K4(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Q4(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function X4(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Y4(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function Z4(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function em(_, e, t, r, n, a, c, b, o, f, d) {
    _.blitFramebuffer(e, t, r, n, a, c, b, o, f >>> 0, d >>> 0);
  }
  function _m(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function tm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function rm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function nm(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function am(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function cm(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function bm(_) {
    return _.button;
  }
  function om() {
    return g(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function sm() {
    return g(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function im() {
    return g(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function fm(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, L(r, n));
  }
  function um(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, ee(r, n));
  }
  function dm(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, $e(r, n));
  }
  function gm(_, e) {
    _.clearDepth(e);
  }
  function wm(_, e) {
    _.clearDepth(e);
  }
  function pm(_, e) {
    _.clearStencil(e);
  }
  function lm(_, e) {
    _.clearStencil(e);
  }
  function mm(_, e) {
    _.clear(e >>> 0);
  }
  function hm(_, e) {
    _.clear(e >>> 0);
  }
  function xm(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function ym(_, e) {
    const t = e.code, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function $m(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function vm(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Sm(_, e) {
    _.compileShader(e);
  }
  function Am(_, e) {
    _.compileShader(e);
  }
  function Im(_, e, t, r, n, a, c, b, o) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o);
  }
  function Tm(_, e, t, r, n, a, c, b, o) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o);
  }
  function Dm(_, e, t, r, n, a, c, b, o, f) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o, f);
  }
  function Bm(_, e, t, r, n, a, c, b, o, f, d, A) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, c, b, o, f >>> 0, d, A);
  }
  function Fm(_, e, t, r, n, a, c, b, o, f, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, c, b, o, f >>> 0, d);
  }
  function Pm() {
    return g(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function km(_) {
    return _.contentRect;
  }
  function Cm(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function Mm(_, e, t, r, n, a, c, b, o) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, c, b, o);
  }
  function Rm(_, e, t, r, n, a, c, b, o) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, c, b, o);
  }
  function Vm(_, e, t, r, n, a, c, b, o, f) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, c, b, o, f);
  }
  function Em() {
    return g(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function Lm() {
    return g(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function Om(_, e) {
    return _.createBindGroup(e);
  }
  function Gm(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : D(e);
  }
  function Wm() {
    return g(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function zm(_) {
    const e = _.createBuffer();
    return v(e) ? 0 : D(e);
  }
  function Um(_, e) {
    return _.createCommandEncoder(e);
  }
  function qm(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : D(e);
  }
  function jm(_) {
    const e = _.createFramebuffer();
    return v(e) ? 0 : D(e);
  }
  function Hm(_, e) {
    return _.createPipelineLayout(e);
  }
  function Nm(_) {
    const e = _.createProgram();
    return v(e) ? 0 : D(e);
  }
  function Jm(_) {
    const e = _.createProgram();
    return v(e) ? 0 : D(e);
  }
  function Km(_) {
    const e = _.createQuery();
    return v(e) ? 0 : D(e);
  }
  function Qm() {
    return g(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function Xm(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : D(e);
  }
  function Ym(_) {
    const e = _.createRenderbuffer();
    return v(e) ? 0 : D(e);
  }
  function Zm(_, e) {
    return _.createSampler(e);
  }
  function e7(_) {
    const e = _.createSampler();
    return v(e) ? 0 : D(e);
  }
  function _7(_, e) {
    return _.createShaderModule(e);
  }
  function t7(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : D(t);
  }
  function r7(_, e) {
    const t = _.createShader(e >>> 0);
    return v(t) ? 0 : D(t);
  }
  function n7(_) {
    const e = _.createTexture();
    return v(e) ? 0 : D(e);
  }
  function a7(_) {
    const e = _.createTexture();
    return v(e) ? 0 : D(e);
  }
  function c7() {
    return g(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function b7(_) {
    const e = _.createVertexArrayOES();
    return v(e) ? 0 : D(e);
  }
  function o7(_) {
    const e = _.createVertexArray();
    return v(e) ? 0 : D(e);
  }
  function s7() {
    return g(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function i7(_) {
    return _.ctrlKey;
  }
  function f7(_, e) {
    _.cullFace(e >>> 0);
  }
  function u7(_, e) {
    _.cullFace(e >>> 0);
  }
  function d7(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function g7(_, e) {
    _.deleteBuffer(e);
  }
  function w7(_, e) {
    _.deleteBuffer(e);
  }
  function p7(_, e) {
    _.deleteFramebuffer(e);
  }
  function l7(_, e) {
    _.deleteFramebuffer(e);
  }
  function m7(_, e) {
    _.deleteProgram(e);
  }
  function h7(_, e) {
    _.deleteProgram(e);
  }
  function x7(_, e) {
    _.deleteQuery(e);
  }
  function y7(_, e) {
    _.deleteRenderbuffer(e);
  }
  function $7(_, e) {
    _.deleteRenderbuffer(e);
  }
  function v7(_, e) {
    _.deleteSampler(e);
  }
  function S7(_, e) {
    _.deleteShader(e);
  }
  function A7(_, e) {
    _.deleteShader(e);
  }
  function I7(_, e) {
    _.deleteSync(e);
  }
  function T7(_, e) {
    _.deleteTexture(e);
  }
  function D7(_, e) {
    _.deleteTexture(e);
  }
  function B7(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function F7(_, e) {
    _.deleteVertexArray(e);
  }
  function P7(_, e) {
    _.depthFunc(e >>> 0);
  }
  function k7(_, e) {
    _.depthFunc(e >>> 0);
  }
  function C7(_, e) {
    _.depthMask(e !== 0);
  }
  function M7(_, e) {
    _.depthMask(e !== 0);
  }
  function R7(_, e, t) {
    _.depthRange(e, t);
  }
  function V7(_, e, t) {
    _.depthRange(e, t);
  }
  function E7(_, e) {
    const t = e.description, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function L7(_) {
    _.destroy();
  }
  function O7(_) {
    return _.devicePixelRatio;
  }
  function G7(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function W7(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function z7(_, e) {
    _.disable(e >>> 0);
  }
  function U7(_, e) {
    _.disable(e >>> 0);
  }
  function q7(_) {
    const e = _.document;
    return v(e) ? 0 : D(e);
  }
  function j7(_) {
    return _.done;
  }
  function H7(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function N7(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function J7(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function K7(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function Q7(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function X7(_, e) {
    _.drawBuffers(e);
  }
  function Y7(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function Z7(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function e6(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function _6(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function t6(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function r6(_, e) {
    _.enable(e >>> 0);
  }
  function n6(_, e) {
    _.enable(e >>> 0);
  }
  function a6(_, e) {
    _.endQuery(e >>> 0);
  }
  function c6(_) {
    _.end();
  }
  function b6(_) {
    return Object.entries(_);
  }
  function o6(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function s6(_) {
    console.error(_);
  }
  function i6(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(S(_, e));
    } finally {
      s.__wbindgen_free(t, r, 1);
    }
  }
  function f6(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return v(r) ? 0 : D(r);
  }
  function u6(_, e, t) {
    return _.fetch(S(e, t));
  }
  function d6(_, e, t, r) {
    return _.fetch(S(e, t), r);
  }
  function g6(_) {
    return _.finish();
  }
  function w6(_, e) {
    return _.finish(e);
  }
  function p6(_) {
    _.flush();
  }
  function l6(_) {
    _.flush();
  }
  function m6() {
    return g(function(_) {
      _.focus();
    }, arguments);
  }
  function h6(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function x6(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function y6(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function $6(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function v6(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function S6(_, e, t, r, n, a, c) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, c);
  }
  function A6(_, e) {
    _.frontFace(e >>> 0);
  }
  function I6(_, e) {
    _.frontFace(e >>> 0);
  }
  function T6(_) {
    return _.getBoundingClientRect();
  }
  function D6(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function B6() {
    return g(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : D(n);
    }, arguments);
  }
  function F6() {
    return g(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : D(r);
    }, arguments);
  }
  function P6() {
    return g(function(_, e, t) {
      const r = _.getContext(S(e, t));
      return v(r) ? 0 : D(r);
    }, arguments);
  }
  function k6() {
    return g(function(_, e, t, r) {
      const n = _.getContext(S(e, t), r);
      return v(n) ? 0 : D(n);
    }, arguments);
  }
  function C6() {
    return g(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function M6(_, e, t) {
    const r = _.getElementById(S(e, t));
    return v(r) ? 0 : D(r);
  }
  function R6() {
    return g(function(_, e, t) {
      const r = _.getExtension(S(e, t));
      return v(r) ? 0 : D(r);
    }, arguments);
  }
  function V6() {
    return g(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function E6() {
    return g(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function L6() {
    return g(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function O6() {
    return g(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function G6(_) {
    const e = _.getPreferredCanvasFormat();
    return (be.indexOf(e) + 1 || 96) - 1;
  }
  function W6(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function z6(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function U6(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function q6(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function j6(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function H6(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function N6(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = v(r) ? 0 : G(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function J6(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function K6(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function Q6(_) {
    const e = _.getSupportedExtensions();
    return v(e) ? 0 : D(e);
  }
  function X6(_) {
    const e = _.getSupportedProfiles();
    return v(e) ? 0 : D(e);
  }
  function Y6(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function Z6(_, e, t, r) {
    return _.getUniformBlockIndex(e, S(t, r));
  }
  function e8(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : D(n);
  }
  function _8(_, e, t, r) {
    const n = _.getUniformLocation(e, S(t, r));
    return v(n) ? 0 : D(n);
  }
  function t8(_, e) {
    return _[e >>> 0];
  }
  function r8(_, e) {
    const t = _[e >>> 0];
    return v(t) ? 0 : D(t);
  }
  function n8() {
    return g(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function a8(_, e) {
    return _[e >>> 0];
  }
  function c8(_, e) {
    return _[e];
  }
  function b8(_) {
    return _.gpu;
  }
  function o8(_, e, t) {
    return _.hasAttribute(S(e, t));
  }
  function s8(_) {
    return _.height;
  }
  function i8(_) {
    return _.height;
  }
  function f8(_) {
    return _.hidden;
  }
  function u8(_, e, t) {
    return _.includes(e, t);
  }
  function d8(_) {
    return _.info;
  }
  function g8(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function w8(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function p8(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function l8(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function m8(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function h8(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function x8(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function y8(_) {
    let e;
    try {
      e = _ instanceof Response;
    } catch {
      e = false;
    }
    return e;
  }
  function $8(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function v8(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function S8(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function A8() {
    return g(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function I8(_) {
    return Array.isArray(_);
  }
  function T8(_) {
    return _.isComposing;
  }
  function D8(_) {
    return Number.isSafeInteger(_);
  }
  function B8(_, e) {
    return Object.is(_, e);
  }
  function F8() {
    return Symbol.iterator;
  }
  function P8(_, e) {
    const t = e.key, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function k8(_, e) {
    const t = e.label, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function C8(_) {
    return _.length;
  }
  function M8(_) {
    return _.length;
  }
  function R8(_) {
    return _.limits;
  }
  function V8(_) {
    return _.limits;
  }
  function E8(_, e) {
    _.linkProgram(e);
  }
  function L8(_, e) {
    _.linkProgram(e);
  }
  function O8(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function G8(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function W8(_) {
    return _.maxBindGroups;
  }
  function z8(_) {
    return _.maxBindingsPerBindGroup;
  }
  function U8(_) {
    return _.maxBufferSize;
  }
  function q8(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function j8(_) {
    return _.maxColorAttachments;
  }
  function H8(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function N8(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function J8(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function K8(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function Q8(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function X8(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function Y8(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function Z8(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function e5(_) {
    return _.maxInterStageShaderVariables;
  }
  function _5(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function t5(_) {
    return _.maxSamplersPerShaderStage;
  }
  function r5(_) {
    return _.maxStorageBufferBindingSize;
  }
  function n5(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function a5(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function c5(_) {
    return _.maxTextureArrayLayers;
  }
  function b5(_) {
    return _.maxTextureDimension1D;
  }
  function o5(_) {
    return _.maxTextureDimension2D;
  }
  function s5(_) {
    return _.maxTextureDimension3D;
  }
  function i5(_) {
    return _.maxUniformBufferBindingSize;
  }
  function f5(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function u5(_) {
    return _.maxVertexAttributes;
  }
  function d5(_) {
    return _.maxVertexBufferArrayStride;
  }
  function g5(_) {
    return _.maxVertexBuffers;
  }
  function w5(_) {
    return _.metaKey;
  }
  function p5(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function l5(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function m5(_) {
    return _.navigator;
  }
  function h5(_) {
    return _.navigator;
  }
  function x5() {
    return g(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function y5() {
    return new Error();
  }
  function $5() {
    return new Object();
  }
  function v5() {
    return new Array();
  }
  function S5() {
    return g(function() {
      return new AbortController();
    }, arguments);
  }
  function A5(_) {
    return new Uint8Array(_);
  }
  function I5(_, e) {
    return new Error(S(_, e));
  }
  function T5(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, c) => {
        const b = t.a;
        t.a = 0;
        try {
          return Qv(b, t.b, a, c);
        } finally {
          t.a = b;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function D5(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function B5() {
    return g(function(_) {
      return _.next();
    }, arguments);
  }
  function F5(_) {
    return _.next;
  }
  function P5(_) {
    return _.now();
  }
  function k5(_, e) {
    _.observe(e);
  }
  function C5(_) {
    return Array.of(_);
  }
  function M5(_) {
    return _.offsetX;
  }
  function R5(_) {
    return _.offsetY;
  }
  function V5(_) {
    return _.ok;
  }
  function E5(_) {
    return _.onSubmittedWorkDone();
  }
  function L5(_) {
    const e = _.performance;
    return v(e) ? 0 : D(e);
  }
  function O5(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function G5(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function W5(_, e, t) {
    _.polygonOffset(e, t);
  }
  function z5(_, e, t) {
    _.polygonOffset(e, t);
  }
  function U5(_) {
    _.preventDefault();
  }
  function q5(_) {
    return Te.__wrap(_);
  }
  function j5(_, e, t) {
    Uint8Array.prototype.set.call(i_(_, e), t);
  }
  function H5(_, e) {
    return _.push(e);
  }
  function N5(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function J5() {
    return g(function(_, e, t) {
      return _.querySelectorAll(S(e, t));
    }, arguments);
  }
  function K5() {
    return g(function(_, e, t) {
      const r = _.querySelector(S(e, t));
      return v(r) ? 0 : D(r);
    }, arguments);
  }
  function Q5(_) {
    return _.queueMicrotask;
  }
  function X5(_) {
    queueMicrotask(_);
  }
  function Y5(_) {
    return _.queue;
  }
  function Z5(_, e) {
    _.readBuffer(e >>> 0);
  }
  function e9() {
    return g(function(_, e, t, r, n, a, c, b) {
      _.readPixels(e, t, r, n, a >>> 0, c >>> 0, b);
    }, arguments);
  }
  function _9() {
    return g(function(_, e, t, r, n, a, c, b) {
      _.readPixels(e, t, r, n, a >>> 0, c >>> 0, b);
    }, arguments);
  }
  function t9() {
    return g(function(_, e, t, r, n, a, c, b) {
      _.readPixels(e, t, r, n, a >>> 0, c >>> 0, b);
    }, arguments);
  }
  function r9(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function n9(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function a9(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function c9(_) {
    return _.repeat;
  }
  function b9(_, e) {
    return _.requestAdapter(e);
  }
  function o9(_) {
    return _.requestAdapter();
  }
  function s9() {
    return g(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function i9(_, e) {
    return _.requestDevice(e);
  }
  function f9(_) {
    return Promise.resolve(_);
  }
  function u9(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function d9(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function g9(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function w9(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function p9() {
    return g(function(_, e, t, r, n) {
      _.setAttribute(S(e, t), S(r, n));
    }, arguments);
  }
  function l9() {
    return g(function(_, e, t, r, n, a, c) {
      _.setBindGroup(e >>> 0, t, $e(r, n), a, c >>> 0);
    }, arguments);
  }
  function m9(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function h9(_, e, t, r, n) {
    _.setIndexBuffer(e, X_[t], r, n);
  }
  function x9(_, e, t, r) {
    _.setIndexBuffer(e, X_[t], r);
  }
  function y9(_, e) {
    _.setPipeline(e);
  }
  function $9(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function v9(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function S9(_, e, t, r, n, a, c) {
    _.setViewport(e, t, r, n, a, c);
  }
  function A9(_, e, t) {
    _.set(e, t >>> 0);
  }
  function I9() {
    return g(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function T9(_, e, t) {
    _[e] = t;
  }
  function D9(_, e) {
    _.a = e;
  }
  function B9(_, e) {
    _.access = bS[e];
  }
  function F9(_, e) {
    _.addressModeU = K_[e];
  }
  function P9(_, e) {
    _.addressModeV = K_[e];
  }
  function k9(_, e) {
    _.addressModeW = K_[e];
  }
  function C9(_, e) {
    _.alpha = e;
  }
  function M9(_, e) {
    _.alphaMode = eS[e];
  }
  function R9(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function V9(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function E9(_, e) {
    _.arrayStride = e;
  }
  function L9(_, e) {
    _.aspect = jt[e];
  }
  function O9(_, e) {
    _.aspect = jt[e];
  }
  function G9(_, e) {
    _.attributes = e;
  }
  function W9(_, e) {
    _.b = e;
  }
  function z9(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function U9(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function q9(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function j9(_, e) {
    _.bindGroupLayouts = e;
  }
  function H9(_, e) {
    _.binding = e >>> 0;
  }
  function N9(_, e) {
    _.binding = e >>> 0;
  }
  function J9(_, e) {
    _.blend = e;
  }
  function K9(_, e) {
    _.buffer = e;
  }
  function Q9(_, e) {
    _.buffer = e;
  }
  function X9(_, e) {
    _.buffers = e;
  }
  function Y9(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function Z9(_, e) {
    _.clearValue = e;
  }
  function eh(_, e, t) {
    _.code = S(e, t);
  }
  function _h(_, e) {
    _.colorAttachments = e;
  }
  function th(_, e) {
    _.color = e;
  }
  function rh(_, e) {
    _.compare = Q_[e];
  }
  function nh(_, e) {
    _.compare = Q_[e];
  }
  function ah(_, e) {
    _.count = e >>> 0;
  }
  function ch(_, e) {
    _.cullMode = _S[e];
  }
  function bh(_, e, t) {
    _[e >>> 0] = t;
  }
  function oh(_, e) {
    _.depthBias = e;
  }
  function sh(_, e) {
    _.depthBiasClamp = e;
  }
  function ih(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function fh(_, e) {
    _.depthClearValue = e;
  }
  function uh(_, e) {
    _.depthCompare = Q_[e];
  }
  function dh(_, e) {
    _.depthFailOp = Z_[e];
  }
  function gh(_, e) {
    _.depthLoadOp = Y_[e];
  }
  function wh(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function ph(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function lh(_, e) {
    _.depthStencil = e;
  }
  function mh(_, e) {
    _.depthStencilAttachment = e;
  }
  function hh(_, e) {
    _.depthStoreOp = et[e];
  }
  function xh(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function yh(_, e) {
    _.device = e;
  }
  function $h(_, e) {
    _.dimension = _t[e];
  }
  function vh(_, e) {
    _.dimension = oS[e];
  }
  function Sh(_, e) {
    _.dstFactor = Ut[e];
  }
  function Ah(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function Ih(_, e) {
    _.entries = e;
  }
  function Th(_, e) {
    _.entries = e;
  }
  function Dh(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function Bh(_, e, t) {
    _.entryPoint = S(e, t);
  }
  function Fh(_, e) {
    _.externalTexture = e;
  }
  function Ph(_, e) {
    _.failOp = Z_[e];
  }
  function kh(_, e) {
    _.format = be[e];
  }
  function Ch(_, e) {
    _.format = iS[e];
  }
  function Mh(_, e) {
    _.format = be[e];
  }
  function Rh(_, e) {
    _.format = be[e];
  }
  function Vh(_, e) {
    _.format = be[e];
  }
  function Eh(_, e) {
    _.format = be[e];
  }
  function Lh(_, e) {
    _.format = be[e];
  }
  function Oh(_, e) {
    _.fragment = e;
  }
  function Gh(_, e) {
    _.frontFace = tS[e];
  }
  function Wh(_, e) {
    _.g = e;
  }
  function zh(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function Uh(_, e) {
    _.height = e >>> 0;
  }
  function qh(_, e) {
    _.height = e >>> 0;
  }
  function jh(_, e) {
    _.height = e >>> 0;
  }
  function Hh(_, e, t) {
    _.label = S(e, t);
  }
  function Nh(_, e, t) {
    _.label = S(e, t);
  }
  function Jh(_, e, t) {
    _.label = S(e, t);
  }
  function Kh(_, e, t) {
    _.label = S(e, t);
  }
  function Qh(_, e, t) {
    _.label = S(e, t);
  }
  function Xh(_, e, t) {
    _.label = S(e, t);
  }
  function Yh(_, e, t) {
    _.label = S(e, t);
  }
  function Zh(_, e, t) {
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
  function ax(_, e) {
    _.layout = e;
  }
  function cx(_, e) {
    _.layout = e;
  }
  function bx(_, e) {
    _.loadOp = Y_[e];
  }
  function ox(_, e) {
    _.lodMaxClamp = e;
  }
  function sx(_, e) {
    _.lodMinClamp = e;
  }
  function ix(_, e) {
    _.magFilter = qt[e];
  }
  function fx(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function ux(_, e) {
    _.mask = e >>> 0;
  }
  function dx(_, e) {
    _.maxAnisotropy = e;
  }
  function gx(_, e) {
    _.minBindingSize = e;
  }
  function wx(_, e) {
    _.minFilter = qt[e];
  }
  function px(_, e) {
    _.mipLevel = e >>> 0;
  }
  function lx(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function mx(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function hx(_, e) {
    _.mipmapFilter = rS[e];
  }
  function xx(_, e) {
    _.module = e;
  }
  function yx(_, e) {
    _.module = e;
  }
  function $x(_, e) {
    _.multisample = e;
  }
  function vx(_, e) {
    _.multisampled = e !== 0;
  }
  function Sx(_, e) {
    _.offset = e;
  }
  function Ax(_, e) {
    _.offset = e;
  }
  function Ix(_, e) {
    _.offset = e;
  }
  function Tx(_, e) {
    _.operation = Yv[e];
  }
  function Dx(_, e) {
    _.origin = e;
  }
  function Bx(_, e) {
    _.passOp = Z_[e];
  }
  function Fx(_, e) {
    _.powerPreference = nS[e];
  }
  function Px(_, e) {
    _.primitive = e;
  }
  function kx(_, e) {
    _.querySet = e;
  }
  function Cx(_, e) {
    _.r = e;
  }
  function Mx(_, e) {
    _.requiredFeatures = e;
  }
  function Rx(_, e) {
    _.requiredLimits = e;
  }
  function Vx(_, e) {
    _.resolveTarget = e;
  }
  function Ex(_, e) {
    _.resource = e;
  }
  function Lx(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function Ox(_, e) {
    _.sampleCount = e >>> 0;
  }
  function Gx(_, e) {
    _.sampleType = sS[e];
  }
  function Wx(_, e) {
    _.sampler = e;
  }
  function zx(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function Ux(_, e) {
    _.signal = e;
  }
  function qx(_, e) {
    _.size = e;
  }
  function jx(_, e) {
    _.size = e;
  }
  function Hx(_, e) {
    _.size = e;
  }
  function Nx(_, e) {
    _.srcFactor = Ut[e];
  }
  function Jx(_, e) {
    _.stencilBack = e;
  }
  function Kx(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function Qx(_, e) {
    _.stencilFront = e;
  }
  function Xx(_, e) {
    _.stencilLoadOp = Y_[e];
  }
  function Yx(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function Zx(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function ey(_, e) {
    _.stencilStoreOp = et[e];
  }
  function _y(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function ty(_, e) {
    _.stepMode = fS[e];
  }
  function ry(_, e) {
    _.storageTexture = e;
  }
  function ny(_, e) {
    _.storeOp = et[e];
  }
  function ay(_, e) {
    _.stripIndexFormat = X_[e];
  }
  function cy(_, e) {
    _.targets = e;
  }
  function by(_, e) {
    _.texture = e;
  }
  function oy(_, e) {
    _.texture = e;
  }
  function sy(_, e) {
    _.timestampWrites = e;
  }
  function iy(_, e) {
    _.topology = aS[e];
  }
  function fy(_, e) {
    _.type = Zv[e];
  }
  function uy(_, e) {
    _.type = cS[e];
  }
  function dy(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function gy(_, e) {
    _.usage = e >>> 0;
  }
  function wy(_, e) {
    _.usage = e >>> 0;
  }
  function py(_, e) {
    _.usage = e >>> 0;
  }
  function ly(_, e) {
    _.usage = e >>> 0;
  }
  function my(_, e) {
    _.vertex = e;
  }
  function hy(_, e) {
    _.view = e;
  }
  function xy(_, e) {
    _.view = e;
  }
  function yy(_, e) {
    _.viewDimension = _t[e];
  }
  function $y(_, e) {
    _.viewDimension = _t[e];
  }
  function vy(_, e) {
    _.viewFormats = e;
  }
  function Sy(_, e) {
    _.viewFormats = e;
  }
  function Ay(_, e) {
    _.visibility = e >>> 0;
  }
  function Iy(_, e) {
    _.width = e >>> 0;
  }
  function Ty(_, e) {
    _.width = e >>> 0;
  }
  function Dy(_, e) {
    _.width = e >>> 0;
  }
  function By(_, e) {
    _.writeMask = e >>> 0;
  }
  function Fy(_, e) {
    _.x = e >>> 0;
  }
  function Py(_, e) {
    _.y = e >>> 0;
  }
  function ky(_, e) {
    _.z = e >>> 0;
  }
  function Cy(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function My(_, e, t, r) {
    _.shaderSource(e, S(t, r));
  }
  function Ry(_) {
    return _.shiftKey;
  }
  function Vy(_) {
    return _.signal;
  }
  function Ey(_, e) {
    const t = e.stack, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function Ly() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return v(_) ? 0 : D(_);
  }
  function Oy() {
    const _ = typeof global > "u" ? null : global;
    return v(_) ? 0 : D(_);
  }
  function Gy() {
    const _ = typeof self > "u" ? null : self;
    return v(_) ? 0 : D(_);
  }
  function Wy() {
    const _ = typeof window > "u" ? null : window;
    return v(_) ? 0 : D(_);
  }
  function zy(_, e) {
    const t = e.statusText, r = G(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function Uy(_) {
    return _.status;
  }
  function qy(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function jy(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function Hy(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function Ny(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function Jy(_, e) {
    _.stencilMask(e >>> 0);
  }
  function Ky(_, e) {
    _.stencilMask(e >>> 0);
  }
  function Qy(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Xy(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Yy(_, e) {
    _.submit(e);
  }
  function Zy() {
    return g(function(_, e, t, r, n, a, c, b, o, f) {
      _.texImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function e$() {
    return g(function(_, e, t, r, n, a, c, b, o, f) {
      _.texImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function _$() {
    return g(function(_, e, t, r, n, a, c, b, o, f) {
      _.texImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function t$() {
    return g(function(_, e, t, r, n, a, c, b, o, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, c, b, o >>> 0, f >>> 0, d);
    }, arguments);
  }
  function r$() {
    return g(function(_, e, t, r, n, a, c, b, o, f, d) {
      _.texImage3D(e >>> 0, t, r, n, a, c, b, o >>> 0, f >>> 0, d);
    }, arguments);
  }
  function n$(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function a$(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function c$(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function b$(_, e, t, r, n, a, c) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, c);
  }
  function o$() {
    return g(function(_, e, t, r, n, a, c, b, o, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function s$() {
    return g(function(_, e, t, r, n, a, c, b, o, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function i$() {
    return g(function(_, e, t, r, n, a, c, b, o, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function f$() {
    return g(function(_, e, t, r, n, a, c, b, o, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function u$() {
    return g(function(_, e, t, r, n, a, c, b, o, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function d$() {
    return g(function(_, e, t, r, n, a, c, b, o, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function g$() {
    return g(function(_, e, t, r, n, a, c, b, o, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function w$() {
    return g(function(_, e, t, r, n, a, c, b, o, f) {
      _.texSubImage2D(e >>> 0, t, r, n, a, c, b >>> 0, o >>> 0, f);
    }, arguments);
  }
  function p$() {
    return g(function(_, e, t, r, n, a, c, b, o, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, b, o, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function l$() {
    return g(function(_, e, t, r, n, a, c, b, o, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, b, o, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function m$() {
    return g(function(_, e, t, r, n, a, c, b, o, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, b, o, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function h$() {
    return g(function(_, e, t, r, n, a, c, b, o, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, b, o, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function x$() {
    return g(function(_, e, t, r, n, a, c, b, o, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, b, o, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function y$() {
    return g(function(_, e, t, r, n, a, c, b, o, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, b, o, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function $$() {
    return g(function(_, e, t, r, n, a, c, b, o, f, d, A) {
      _.texSubImage3D(e >>> 0, t, r, n, a, c, b, o, f >>> 0, d >>> 0, A);
    }, arguments);
  }
  function v$(_, e, t) {
    return _.then(e, t);
  }
  function S$(_, e, t) {
    return _.then(e, t);
  }
  function A$(_, e) {
    return _.then(e);
  }
  function I$(_, e, t) {
    _.uniform1f(e, t);
  }
  function T$(_, e, t) {
    _.uniform1f(e, t);
  }
  function D$(_, e, t) {
    _.uniform1i(e, t);
  }
  function B$(_, e, t) {
    _.uniform1i(e, t);
  }
  function F$(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function P$(_, e, t, r) {
    _.uniform2fv(e, L(t, r));
  }
  function k$(_, e, t, r) {
    _.uniform2fv(e, L(t, r));
  }
  function C$(_, e, t, r) {
    _.uniform2iv(e, ee(t, r));
  }
  function M$(_, e, t, r) {
    _.uniform2iv(e, ee(t, r));
  }
  function R$(_, e, t, r) {
    _.uniform2uiv(e, $e(t, r));
  }
  function V$(_, e, t, r) {
    _.uniform3fv(e, L(t, r));
  }
  function E$(_, e, t, r) {
    _.uniform3fv(e, L(t, r));
  }
  function L$(_, e, t, r) {
    _.uniform3iv(e, ee(t, r));
  }
  function O$(_, e, t, r) {
    _.uniform3iv(e, ee(t, r));
  }
  function G$(_, e, t, r) {
    _.uniform3uiv(e, $e(t, r));
  }
  function W$(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function z$(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function U$(_, e, t, r) {
    _.uniform4fv(e, L(t, r));
  }
  function q$(_, e, t, r) {
    _.uniform4fv(e, L(t, r));
  }
  function j$(_, e, t, r) {
    _.uniform4iv(e, ee(t, r));
  }
  function H$(_, e, t, r) {
    _.uniform4iv(e, ee(t, r));
  }
  function N$(_, e, t, r) {
    _.uniform4uiv(e, $e(t, r));
  }
  function J$(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function K$(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, L(r, n));
  }
  function Q$(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, L(r, n));
  }
  function X$(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, L(r, n));
  }
  function Y$(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, L(r, n));
  }
  function Z$(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, L(r, n));
  }
  function ev(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, L(r, n));
  }
  function _v(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, L(r, n));
  }
  function tv(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, L(r, n));
  }
  function rv(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, L(r, n));
  }
  function nv(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, L(r, n));
  }
  function av(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, L(r, n));
  }
  function cv(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, L(r, n));
  }
  function bv(_) {
    _.unmap();
  }
  function ov(_, e) {
    _.useProgram(e);
  }
  function sv(_, e) {
    _.useProgram(e);
  }
  function iv(_) {
    return _.value;
  }
  function fv(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function uv(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function dv(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function gv(_, e, t, r, n, a, c) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, c);
  }
  function wv(_, e, t, r, n, a, c) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, c);
  }
  function pv(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function lv(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function mv(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function hv(_) {
    return _.width;
  }
  function xv(_) {
    return _.width;
  }
  function yv() {
    return g(function(_, e, t, r, n, a, c) {
      _.writeBuffer(e, t, i_(r, n), a, c);
    }, arguments);
  }
  function $v() {
    return g(function(_, e, t, r, n, a) {
      _.writeTexture(e, i_(t, r), n, a);
    }, arguments);
  }
  function vv(_, e) {
    return _e(_, e, qv);
  }
  function Sv(_, e) {
    return _e(_, e, Kv);
  }
  function Av(_, e) {
    return _e(_, e, Xv);
  }
  function Iv(_, e) {
    return _e(_, e, jv);
  }
  function Tv(_, e) {
    return _e(_, e, Hv);
  }
  function Dv(_, e) {
    return _e(_, e, Nv);
  }
  function Bv(_, e) {
    return _e(_, e, Jv);
  }
  function Fv(_, e) {
    return _e(_, e, Uv);
  }
  function Pv(_) {
    return _;
  }
  function kv(_) {
    return _;
  }
  function Cv(_, e) {
    return L(_, e);
  }
  function Mv(_, e) {
    return uS(_, e);
  }
  function Rv(_, e) {
    return ee(_, e);
  }
  function Vv(_, e) {
    return dS(_, e);
  }
  function Ev(_, e) {
    return gS(_, e);
  }
  function Lv(_, e) {
    return $e(_, e);
  }
  function Ov(_, e) {
    return i_(_, e);
  }
  function Gv(_, e) {
    return S(_, e);
  }
  function Wv(_) {
    return BigInt.asUintN(64, _);
  }
  function zv() {
    const _ = s.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function Uv(_, e) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function qv(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function jv(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function Hv(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function Nv(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function Jv(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6(_, e, t);
  }
  function Kv(_, e, t) {
    const r = s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (r[1]) throw P(r[0]);
  }
  function Qv(_, e, t, r) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, r);
  }
  function Xv(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_(_, e, t);
  }
  const K_ = [
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
  ], Yv = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], Zv = [
    "uniform",
    "storage",
    "read-only-storage"
  ], eS = [
    "opaque",
    "premultiplied"
  ], Q_ = [
    "never",
    "less",
    "equal",
    "less-equal",
    "greater",
    "not-equal",
    "greater-equal",
    "always"
  ], _S = [
    "none",
    "front",
    "back"
  ], qt = [
    "nearest",
    "linear"
  ], tS = [
    "ccw",
    "cw"
  ], X_ = [
    "uint16",
    "uint32"
  ], Y_ = [
    "load",
    "clear"
  ], rS = [
    "nearest",
    "linear"
  ], nS = [
    "low-power",
    "high-performance"
  ], aS = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], cS = [
    "filtering",
    "non-filtering",
    "comparison"
  ], Z_ = [
    "keep",
    "zero",
    "replace",
    "invert",
    "increment-clamp",
    "decrement-clamp",
    "increment-wrap",
    "decrement-wrap"
  ], bS = [
    "write-only",
    "read-only",
    "read-write"
  ], et = [
    "store",
    "discard"
  ], jt = [
    "all",
    "stencil-only",
    "depth-only"
  ], oS = [
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
  ], sS = [
    "float",
    "unfilterable-float",
    "depth",
    "sint",
    "uint"
  ], _t = [
    "1d",
    "2d",
    "2d-array",
    "cube",
    "cube-array",
    "3d"
  ], iS = [
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
  ], fS = [
    "vertex",
    "instance"
  ], yt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => s.__wbg_handle_free(_, 1)), l_ = typeof FinalizationRegistry > "u" ? {
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
  function D(_) {
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
  function L(_, e) {
    return _ = _ >>> 0, wS().subarray(_ / 4, _ / 4 + e);
  }
  function uS(_, e) {
    return _ = _ >>> 0, lS().subarray(_ / 2, _ / 2 + e);
  }
  function ee(_, e) {
    return _ = _ >>> 0, mS().subarray(_ / 4, _ / 4 + e);
  }
  function dS(_, e) {
    return _ = _ >>> 0, hS().subarray(_ / 1, _ / 1 + e);
  }
  function gS(_, e) {
    return _ = _ >>> 0, xS().subarray(_ / 2, _ / 2 + e);
  }
  function $e(_, e) {
    return _ = _ >>> 0, yS().subarray(_ / 4, _ / 4 + e);
  }
  function i_(_, e) {
    return _ = _ >>> 0, me().subarray(_ / 1, _ / 1 + e);
  }
  let ie = null;
  function k() {
    return (ie === null || ie.buffer.detached === true || ie.buffer.detached === void 0 && ie.buffer !== s.memory.buffer) && (ie = new DataView(s.memory.buffer)), ie;
  }
  let Ne = null;
  function wS() {
    return (Ne === null || Ne.byteLength === 0) && (Ne = new Float32Array(s.memory.buffer)), Ne;
  }
  let Je = null;
  function pS() {
    return (Je === null || Je.byteLength === 0) && (Je = new Float64Array(s.memory.buffer)), Je;
  }
  let Ke = null;
  function lS() {
    return (Ke === null || Ke.byteLength === 0) && (Ke = new Int16Array(s.memory.buffer)), Ke;
  }
  let Qe = null;
  function mS() {
    return (Qe === null || Qe.byteLength === 0) && (Qe = new Int32Array(s.memory.buffer)), Qe;
  }
  let Xe = null;
  function hS() {
    return (Xe === null || Xe.byteLength === 0) && (Xe = new Int8Array(s.memory.buffer)), Xe;
  }
  function S(_, e) {
    return vS(_ >>> 0, e);
  }
  let Ye = null;
  function xS() {
    return (Ye === null || Ye.byteLength === 0) && (Ye = new Uint16Array(s.memory.buffer)), Ye;
  }
  let Ze = null;
  function yS() {
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
      const r = D(t);
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
  function m_(_, e) {
    const t = e(_.length * 1, 1) >>> 0;
    return me().set(_, t / 1), M = _.length, t;
  }
  function __(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return pS().set(_, t / 8), M = _.length, t;
  }
  function G(_, e, t) {
    if (t === void 0) {
      const b = Ae.encode(_), o = e(b.length, 1) >>> 0;
      return me().subarray(o, o + b.length).set(b), M = b.length, o;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = me();
    let c = 0;
    for (; c < r; c++) {
      const b = _.charCodeAt(c);
      if (b > 127) break;
      a[n + c] = b;
    }
    if (c !== r) {
      c !== 0 && (_ = _.slice(c)), n = t(n, r, r = c + _.length * 3, 1) >>> 0;
      const b = me().subarray(n + c, n + r), o = Ae.encodeInto(_, b);
      c += o.written, n = t(n, r, c, 1) >>> 0;
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
  const $S = 2146435072;
  let h_ = 0;
  function vS(_, e) {
    return h_ += e, h_ >= $S && (n_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), n_.decode(), h_ = e), n_.decode(me().subarray(_, _ + e));
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
  function SS(_) {
    s = _;
  }
  URL = globalThis.URL;
  const AS = await L_({
    "./proteus_bench_web_bg.js": {
      __wbg_call_5575218572ead796: sm,
      __wbg_new_typed_00a409eb4ec4f2d9: T5,
      __wbg_then_05edfc8a4fea5106: v$,
      __wbg_next_0c4066e251d2eff9: B5,
      __wbg_done_b62d4a7d2286852a: j7,
      __wbg_value_49f783bb59765962: iv,
      __wbg_get_197a3fe98f169e38: t8,
      __wbg_get_unchecked_54a4374c38e08460: a8,
      __wbg_length_c6054974c0a6cdb9: M8,
      __wbg_new_227d7c05414eb861: y5,
      __wbg_stack_3b0d974bbf31e44f: Ey,
      __wbg_error_a6fa202b58aa1cd3: i6,
      __wbg_proteusapp_new: q5,
      __wbg_push_f724b5db8acf89d2: H5,
      __wbg_instanceof_Map_afa18d5840c04c15: h8,
      __wbg_call_8e98ed2f3c86c4b5: im,
      __wbg_call_0e855b388e315e17: om,
      __wbg_set_dc601f4a69da0bc2: bh,
      __wbg_get_with_ref_key_6412cf3094599694: c8,
      __wbg_set_6be42768c690e380: T9,
      __wbg_String_8564e559799eccda: e4,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: l8,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: b5,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: o5,
      __wbg_maxTextureDimension3D_06ee54121b37d431: s5,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: c5,
      __wbg_maxBindGroups_14611ac9ed1c6b56: W8,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: z8,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: Z8,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: Y8,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: _5,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: t5,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: n5,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: a5,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: f5,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: i5,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: r5,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: g5,
      __wbg_maxBufferSize_f7ce3e1856349d2f: U8,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: u5,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: d5,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: e5,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: l5,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: p5,
      __wbg_maxColorAttachments_fd9187f9f786da18: j8,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: q8,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: Q8,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: H8,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: N8,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: J8,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: K8,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: X8,
      __wbg_description_18d0a6d4077fec8e: E7,
      __wbg_set_dst_factor_1ed75271a89a711e: Sh,
      __wbg_set_operation_b5862f5a1a143b30: Tx,
      __wbg_set_src_factor_1c4f755f8676df1b: Nx,
      __wbg_set_texture_16d2be474ce6ad0c: by,
      __wbg_set_mip_level_246db61be15bdd69: px,
      __wbg_set_x_56f0c2c08a62725c: Fy,
      __wbg_set_y_04fb8ce84735b4e1: Py,
      __wbg_set_z_a51316db27a4941e: ky,
      __wbg_set_origin_9b3b0fbe0a5dc469: Dx,
      __wbg_set_aspect_77332ac136ee94eb: L9,
      __wbg_Window_a07901001eb4269f: _4,
      __wbg_gpu_a7c12045c25d009a: b8,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: t4,
      __wbg_set_a_5f6e488475272136: D9,
      __wbg_set_b_688365d692bba214: W9,
      __wbg_set_g_d4d1d77cf8fdd362: Wh,
      __wbg_set_r_527e5a41c4b1a846: Cx,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: p8,
      __wbg_queue_65d985f3e6d786a6: Y5,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: Fx,
      __wbg_requestAdapter_9ff5c9d1ff271165: b9,
      __wbg_set_required_limits_3b031f66f838f4e3: Rx,
      __wbg_set_required_features_54918de8185c5fab: Mx,
      __wbg_set_label_bae57fb9f24fde5c: Yh,
      __wbg_requestDevice_c1c34f88a477e509: i9,
      __wbg_limits_50a8c5e629dbfe40: V8,
      __wbg_info_22dcf1fd1b12bc7d: d8,
      __wbg_set_size_41cd9255ca1e4242: jx,
      __wbg_set_usage_908213a4d4bb8bde: py,
      __wbg_set_mapped_at_creation_48de4735fab51e78: fx,
      __wbg_set_label_cd567b7b35838e4c: _x,
      __wbg_createBuffer_2f08c0205e04efca: Wm,
      __wbg_set_address_mode_u_a37cf1035585c638: F9,
      __wbg_set_address_mode_v_8ac049e029caef76: P9,
      __wbg_set_address_mode_w_eb9260ee11729e92: k9,
      __wbg_set_compare_42211fbf15e3b850: nh,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: ox,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: sx,
      __wbg_set_mag_filter_69d846b974d4bcc0: ix,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: wx,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: hx,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: dx,
      __wbg_set_label_dcd98efbb9370da8: rx,
      __wbg_createSampler_248bd67c920af37d: Zm,
      __wbg_set_width_1a5e2e86fa5bdcd8: Ty,
      __wbg_set_height_e8b5483b8c117d5e: qh,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: wh,
      __wbg_set_format_e9d4b1475bb3bd3b: Eh,
      __wbg_set_size_a61ff22205255d61: Hx,
      __wbg_set_usage_7fa9cd18d1104aca: wy,
      __wbg_set_label_0c1bd0e976cf0a9a: Nh,
      __wbg_set_dimension_36e13ccecae5af4b: vh,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: mx,
      __wbg_set_sample_count_865e1d19b84e27e6: Ox,
      __wbg_set_view_formats_bab284fc81b40e70: vy,
      __wbg_createTexture_9e76b80a2dc0d12e: c7,
      __wbg_set_entries_fc76ca4d7da6a709: Th,
      __wbg_set_layout_eeef59714f5bf48b: cx,
      __wbg_set_label_f92ae11c77d74198: nx,
      __wbg_createBindGroup_2320df4db188406c: Om,
      __wbg_set_code_56e2d45ec1ff6c2d: eh,
      __wbg_set_label_be45aed56e4b9fee: Zh,
      __wbg_createShaderModule_53701de4fb271c90: _7,
      __wbg_set_label_d1c24b5a7a3ac31d: tx,
      __wbg_createCommandEncoder_cd88faca35d9ed68: Um,
      __wbg_set_bind_group_layouts_5325d038771af328: j9,
      __wbg_set_label_2f592bd1be3db6b3: Qh,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: Hm,
      __wbg_set_module_14e471fdd94c582d: yx,
      __wbg_set_entry_point_8db3b6d103e3b865: Bh,
      __wbg_set_buffers_85a7238f4ef28ab4: X9,
      __wbg_set_layout_7c5ba5bdcde8a0f0: ax,
      __wbg_set_vertex_a4951dd9a7a4ed54: my,
      __wbg_set_label_c47c451211e2f6d2: ex,
      __wbg_set_format_f9341112e43ea182: Lh,
      __wbg_set_depth_compare_30e9ea552da12fe2: uh,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: xh,
      __wbg_set_depth_bias_428c9340b0fd937b: oh,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: sh,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: ih,
      __wbg_set_compare_1509dc1a5420943f: rh,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: dh,
      __wbg_set_fail_op_77ab26c98f847b65: Ph,
      __wbg_set_pass_op_e9470d1262fb8a8b: Bx,
      __wbg_set_stencil_back_6ef4683123b19b25: Jx,
      __wbg_set_stencil_front_aeb8580a97e5424b: Qx,
      __wbg_set_stencil_read_mask_2954f260d47349ea: Yx,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: _y,
      __wbg_set_depth_stencil_1bd50dbc450c8650: lh,
      __wbg_set_module_08ad08e736d8edbf: xx,
      __wbg_set_targets_6b0b3bdd87f35668: cy,
      __wbg_set_entry_point_6fec5723cc790927: Dh,
      __wbg_set_fragment_1a595620425637e1: Oh,
      __wbg_set_count_26a934d1cd07d080: ah,
      __wbg_set_mask_0c49a66362fc0079: ux,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: R9,
      __wbg_set_multisample_85f073947b782d07: $x,
      __wbg_set_cull_mode_9d466c1ab414cac8: ch,
      __wbg_set_front_face_50cdf4eb61504a46: Gh,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: ay,
      __wbg_set_topology_beefb3aca0612b00: iy,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: dy,
      __wbg_set_primitive_369241acd17871f1: Px,
      __wbg_createRenderPipeline_f48187ba9f7701e8: Qm,
      __wbg_set_entries_3017e6132f938c6e: Ih,
      __wbg_set_label_1175a3329a06e52b: Jh,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: Lm,
      __wbg_limits_1c25cb4f379a4418: R8,
      __wbg_set_color_attachments_abe67f6631926e28: _h,
      __wbg_set_label_8fd860a36d2c7b74: Xh,
      __wbg_set_view_dbd0294573f64d05: xy,
      __wbg_set_depth_clear_value_442bf492734f63b6: fh,
      __wbg_set_depth_load_op_34d430b74bb36d91: gh,
      __wbg_set_depth_store_op_0ea0a215313dbda7: hh,
      __wbg_set_depth_read_only_138a11b10c731094: ph,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: Kx,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: Xx,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: ey,
      __wbg_set_stencil_read_only_fb489d191b6d969b: Zx,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: mh,
      __wbg_set_query_set_18679a8580267d5a: kx,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: q9,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: Ah,
      __wbg_set_timestamp_writes_c552d52fbb417005: sy,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: B4,
      __wbg_copyTextureToTexture_1be188df1e535c0a: Em,
      __wbg_label_47480289cc2bce71: k8,
      __wbg_set_label_2d2227f4d5991e50: Kh,
      __wbg_finish_cfaeede3baf55be1: w6,
      __wbg_finish_087cb89c65c06eb1: g6,
      __wbg_drawIndexed_68637ebab6dd8d6e: e6,
      __wbg_setPipeline_bab24dbce96903b9: y9,
      __wbg_setViewport_f9d423db4f4b4b58: S9,
      __wbg_setBindGroup_4ba56e1e0d26f244: l9,
      __wbg_setBindGroup_6124849cc8547086: m9,
      __wbg_setIndexBuffer_17431786d06c1b7c: h9,
      __wbg_setIndexBuffer_a16ed5b869c87507: x9,
      __wbg_setVertexBuffer_b508baf8d0ffe331: v9,
      __wbg_setVertexBuffer_91c4b602d0289943: $9,
      __wbg_end_414453a89205612c: c6,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: G6,
      __wbg_getCurrentTexture_51975ae7185fd15f: C6,
      __wbg_set_device_0d774b66e7288f72: yh,
      __wbg_set_format_d347899cd860709c: Vh,
      __wbg_set_usage_ae014e77ff77ce06: ly,
      __wbg_set_alpha_mode_92402195b3ae1ee7: M9,
      __wbg_set_view_formats_fe531a043efb71fa: Sy,
      __wbg_configure_3d64c677c7d68a15: Pm,
      __wbg_writeBuffer_b4bdd36178348ca5: yv,
      __wbg_set_bytes_per_row_91681ca78d744888: Y9,
      __wbg_set_rows_per_image_d198b7e73a38978b: Lx,
      __wbg_set_offset_a097a8050a3a9a33: Ix,
      __wbg_writeTexture_b45b69132e46a227: $v,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: E5,
      __wbg_submit_1290d44bb76ecef4: Yy,
      __wbg_getMappedRange_5ed22727c9679168: E6,
      __wbg_unmap_8f06698a75b8331a: bv,
      __wbg_destroy_b5b39f25f0799295: L7,
      __wbg_mapAsync_bb0029907dd91181: G8,
      __wbg_set_dimension_174ad7e2fb67fb4e: $h,
      __wbg_set_format_90860b0321868db4: Mh,
      __wbg_set_aspect_a823a14d00d42d37: O9,
      __wbg_set_base_array_layer_cc6c68d233489c4b: z9,
      __wbg_set_array_layer_count_daec613068108a9d: V9,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: U9,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: lx,
      __wbg_set_label_03d2396d4655a3e1: Hh,
      __wbg_set_usage_7f0dda8309469b1c: gy,
      __wbg_createView_cc96b5bdd3d5bf5e: s7,
      __wbg_set_min_binding_size_689661b9ed25e083: gx,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: zh,
      __wbg_set_type_38961e08504ca674: fy,
      __wbg_requestAdapter_c46930b8bc33722d: o9,
      __wbg_set_alpha_aa2e606e9e647b21: C9,
      __wbg_set_color_bc393d7efc3c8594: th,
      __wbg_set_visibility_1bca121a89accba5: Ay,
      __wbg_set_storage_texture_ab9eed9786337ef0: ry,
      __wbg_set_external_texture_825fe2bc7a0c0603: Fh,
      __wbg_set_binding_b6b0fe5c281b8c69: H9,
      __wbg_set_buffer_e89095a9f0cafad3: Q9,
      __wbg_set_sampler_8c5d7fb1b02058c6: Wx,
      __wbg_set_texture_e25a73da75cf5808: oy,
      __wbg_set_format_abf7a1bc5425c56a: Rh,
      __wbg_set_blend_8d6e9c08b5702a09: J9,
      __wbg_set_write_mask_144b25e2bd909124: By,
      __wbg_set_load_op_56844f51434037bf: bx,
      __wbg_set_store_op_caeede4654b3d847: ny,
      __wbg_set_view_bdeab150b5f0768c: hy,
      __wbg_set_clear_value_642701f928a5ccb3: Z9,
      __wbg_set_resolve_target_fe76b3f99cf72078: Vx,
      __wbg_set_buffer_55f096330c8912b4: K9,
      __wbg_set_offset_73156b0e0b41d79a: Sx,
      __wbg_set_size_1e6281b07cd39177: qx,
      __wbg_set_binding_f3c188a8cd21455b: N9,
      __wbg_set_resource_fe385d2e3dadaf63: Ex,
      __wbg_set_format_6606f5c1fba6f459: Ch,
      __wbg_set_offset_8d9d9afffa18b591: Ax,
      __wbg_set_shader_location_0ff30a733291a396: zx,
      __wbg_set_array_stride_c2c009eabc18b5f6: E9,
      __wbg_set_attributes_05f9117fd32ca606: G9,
      __wbg_set_step_mode_a35aef328761c452: ty,
      __wbg_set_type_c1eebc19f8a6aeb9: uy,
      __wbg_set_multisampled_40505c1381e1c32c: vx,
      __wbg_set_sample_type_7088b1efddce6a69: Gx,
      __wbg_set_view_dimension_3ed01b237e85826f: $y,
      __wbg_set_format_1786adb7bc74c7c9: kh,
      __wbg_set_access_091f317905cd76a5: B9,
      __wbg_set_view_dimension_263387976511ebc9: yy,
      __wbg_includes_83dff8d05da243c5: u8,
      __wbg_clearBufferuiv_1d2d93401c0904a3: dm,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: Tm,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: Bm,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: Fm,
      __wbg_copyBufferSubData_a944f33b601b822d: Cm,
      __wbg_clientWaitSync_7580165bd2eff461: xm,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: Dm,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: Vm,
      __wbg_createQuery_f013132b870a71ef: Km,
      __wbg_createSampler_9fe50152a2524319: e7,
      __wbg_createVertexArray_8685feb21901c932: o7,
      __wbg_deleteQuery_ef51ea0a52420103: x7,
      __wbg_deleteSampler_5c045e0cc55813d4: v7,
      __wbg_getIndexedParameter_2b18df6fca85f751: V6,
      __wbg_getQueryParameter_0599e85ddb81220b: j6,
      __wbg_getSyncParameter_9a2bda340ebe166f: Y6,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: Z6,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: A8,
      __wbg_deleteSync_37ca83c429c43d8a: I7,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: F7,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: N7,
      __wbg_drawBuffers_558d96e52e754731: X7,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: Z7,
      __wbg_endQuery_161170c5280a8293: a6,
      __wbg_fenceSync_56efc7cc79111e54: f6,
      __wbg_framebufferTextureLayer_2312acdc74f97676: v6,
      __wbg_getBufferSubData_92680d3a2f7be029: D6,
      __wbg_readBuffer_361ec5474f3aae49: Z5,
      __wbg_readPixels_5840000f3e22f3ce: _9,
      __wbg_readPixels_5bf204799ed2272f: t9,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: r9,
      __wbg_texImage3D_8647ef58aef5b912: r$,
      __wbg_texStorage2D_ed5df596c5f1e3af: c$,
      __wbg_texStorage3D_160b0197bc190f04: b$,
      __wbg_texSubImage2D_f03448e182b0820d: w$,
      __wbg_texSubImage2D_d14d9c0a1f627c31: g$,
      __wbg_texSubImage2D_89866a04ecd0a76b: f$,
      __wbg_texSubImage2D_5c630043f1c56716: i$,
      __wbg_samplerParameterf_3157ba41c0f4d97a: u9,
      __wbg_samplerParameteri_f85a29156e790189: d9,
      __wbg_texImage2D_0e0f37b9fb297d01: Zy,
      __wbg_texImage2D_0e537dc331652de3: e$,
      __wbg_texImage3D_30dbf7234481b8f5: t$,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: s$,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: u$,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: d$,
      __wbg_texSubImage3D_933e4cd41cc5376d: x$,
      __wbg_texSubImage3D_c3538b28040daac9: $$,
      __wbg_uniform1ui_36c94692177ebf76: F$,
      __wbg_uniform2fv_17592f4dad9798fb: P$,
      __wbg_uniform2iv_d5d29ebbc466977d: M$,
      __wbg_texSubImage3D_0fdbd843482bb916: l$,
      __wbg_texSubImage3D_09a97a968b93253d: p$,
      __wbg_texSubImage3D_355efde0dc047913: m$,
      __wbg_texSubImage3D_bd32c8e29e470904: y$,
      __wbg_texSubImage3D_5a238709d114b609: h$,
      __wbg_uniform2uiv_418ba3bf6a230dd5: R$,
      __wbg_uniform4fv_9e670a001c77dca0: q$,
      __wbg_uniform4iv_1d57c6b8e5c0e447: j$,
      __wbg_uniform3fv_dbe44b778e6b89e8: E$,
      __wbg_uniform3iv_d75d3a5f86d54be4: O$,
      __wbg_uniform3uiv_71c1efc24a662de9: G$,
      __wbg_uniform4uiv_c5d45f5dbdae727a: N$,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: Z$,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: _v,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: tv,
      __wbg_uniformBlockBinding_829a71912ad79a04: J$,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: K$,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: X$,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: Y$,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: rv,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: dv,
      __wbg_activeTexture_525ee3068cb9e8d5: $4,
      __wbg_attachShader_3477e67517b09b6b: I4,
      __wbg_bindAttribLocation_79b5d26727094518: F4,
      __wbg_bindBuffer_d3111de6861cb875: C4,
      __wbg_bindFramebuffer_63e837a5dc0accfb: V4,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: E4,
      __wbg_bindTexture_7ab28ff4ff3dc506: G4,
      __wbg_blendColor_15f26633b646e542: q4,
      __wbg_blendEquation_7dadb4db540a42da: J4,
      __wbg_blendEquationSeparate_8240ddfa32266109: H4,
      __wbg_blendFunc_b15af02643e188f1: Z4,
      __wbg_blendFuncSeparate_456410f9919bed39: X4,
      __wbg_clear_dadcb3e2929388b0: mm,
      __wbg_clearDepth_05c17028494ee4dd: gm,
      __wbg_clearStencil_917833d1e2ac56e4: lm,
      __wbg_colorMask_f111e3e5796458f4: vm,
      __wbg_compileShader_f5625b583b2c9fd6: Sm,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: av,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: cv,
      __wbg_vertexAttribDivisor_f17a8585267be92f: uv,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: Mm,
      __wbg_createBuffer_9f602b2dbcbf409c: zm,
      __wbg_createFramebuffer_4a250944a4542bbc: qm,
      __wbg_createProgram_4c8164d471c10346: Nm,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: Ym,
      __wbg_createShader_9c5cd42709d915ff: r7,
      __wbg_createTexture_3eed23cb87dd35fc: n7,
      __wbg_cullFace_94f24b4fd5e9038b: u7,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: g7,
      __wbg_getExtension_11824edd67a143d8: R6,
      __wbg_getParameter_7f7f23cae98f2c81: L6,
      __wbg_getProgramInfoLog_cd84be80942f345b: z6,
      __wbg_getProgramParameter_039391d5ba319f50: U6,
      __wbg_getShaderInfoLog_495bddda98172699: H6,
      __wbg_getShaderParameter_4eb65cfb174ceb22: J6,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: Q6,
      __wbg_getUniformLocation_ab63f569a4e41744: _8,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: p7,
      __wbg_deleteProgram_eff668280dcb01ca: h7,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: $7,
      __wbg_deleteShader_3339454254c7147c: S7,
      __wbg_deleteTexture_c1c58550dc55af5c: D7,
      __wbg_depthFunc_31b183b5b8ee478e: P7,
      __wbg_depthMask_cab7f2ae7f0e559c: M7,
      __wbg_depthRange_797a71ba3b79267a: R7,
      __wbg_disable_cb1b3e6c1cee5202: U7,
      __wbg_disableVertexAttribArray_b395358ec5084c39: W7,
      __wbg_drawArrays_42dbb4b0349c8f34: K7,
      __wbg_enable_d1f42f78be33a553: n6,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: _6,
      __wbg_flush_7ae42f071230db6b: p6,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: x6,
      __wbg_framebufferTexture2D_367ab597a005e8d9: y6,
      __wbg_frontFace_9bdcf2a758e989e5: A6,
      __wbg_linkProgram_e23a348b0f6e0c4f: L8,
      __wbg_pixelStorei_a78a504be58d1d0a: G5,
      __wbg_polygonOffset_a4f07d97b9b0dced: z5,
      __wbg_renderbufferStorage_3049e13db5c4e60e: a9,
      __wbg_scissor_6c024669fbf4fe72: g9,
      __wbg_vertexAttribPointer_4e5d289c5d224210: wv,
      __wbg_viewport_a0ca330f9b85397e: pv,
      __wbg_shaderSource_66dce75b25a1a407: My,
      __wbg_stencilFuncSeparate_ec603976be9569a4: jy,
      __wbg_stencilMask_485dcb5965c79a71: Jy,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: Ny,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: Qy,
      __wbg_texParameteri_c6efffcecb474d2f: n$,
      __wbg_uniform1f_3acd3f3eb50b5e11: I$,
      __wbg_uniform1i_e4f13604354c28ae: B$,
      __wbg_uniform4f_a5008773cfb47d1a: z$,
      __wbg_useProgram_ab2ee2a13a1fd909: sv,
      __wbg_bufferSubData_2270f1b9db71e642: am,
      __wbg_clearBufferfv_6b77b9402254a2bf: fm,
      __wbg_clearBufferiv_0f056544010eef3e: um,
      __wbg_beginQuery_dad334d972fed3cc: D4,
      __wbg_bindBufferRange_16a9d90becc2a7d7: k4,
      __wbg_bindSampler_3c7002cb6d56ae8f: O4,
      __wbg_bindVertexArray_c391bd47303d75cd: U4,
      __wbg_blitFramebuffer_ea96ada8bba07582: em,
      __wbg_bufferData_64e9905f2b3d3a6f: rm,
      __wbg_bufferData_99bbbc63f02251c4: nm,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: v8,
      __wbg_performance_4c23a97261596fec: L5,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: s9,
      __wbg_fetch_2d913f7108d17a24: u6,
      __wbg_fetch_d8c50740ea23b248: d6,
      __wbg_navigator_935098efd1dc7fe5: h5,
      __wbg_devicePixelRatio_8e5ca44720abafec: O7,
      __wbg_document_2634180a4c694068: q7,
      __wbg_instanceof_Window_0d356b88a2f77c42: S8,
      __wbg_hidden_cb32701ca3785fea: f8,
      __wbg_getElementById_c7aba6b93b34bf01: M6,
      __wbg_querySelector_1f3658f4b48e268b: K5,
      __wbg_querySelectorAll_ffda3c891a9eb29a: J5,
      __wbg_hasAttribute_73e1230c9c107e79: o8,
      __wbg_setAttribute_8bccfbabf2a83682: p9,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: T6,
      __wbg_focus_c80921c19b28520b: m6,
      __wbg_uniform2iv_c5e863975dd780d8: C$,
      __wbg_uniform3fv_7723e142be50856f: V$,
      __wbg_uniform3iv_bea3976522e15d48: L$,
      __wbg_uniform4fv_85ad5d23234895d2: U$,
      __wbg_clear_ff8cfdf420f7dde6: hm,
      __wbg_clearDepth_ac6b54f112feeaf7: wm,
      __wbg_clearStencil_56d6a6308294a749: pm,
      __wbg_colorMask_b0ab9d429a1efa0a: $m,
      __wbg_compileShader_fcf3f3d2891f73f9: Am,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: Rm,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: Gm,
      __wbg_createFramebuffer_ab73f30b5dc97415: jm,
      __wbg_createProgram_f11c63f59f41b82a: Jm,
      __wbg_createRenderbuffer_556000dbb01f5026: Xm,
      __wbg_createShader_27d9388313f3b14e: t7,
      __wbg_createTexture_8455c703424c567b: a7,
      __wbg_cullFace_774780fb4177aab8: f7,
      __wbg_deleteBuffer_d758283bea6e0ccf: w7,
      __wbg_deleteFramebuffer_8953b325144192fe: l7,
      __wbg_deleteProgram_0135c6926e75af75: m7,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: y7,
      __wbg_deleteShader_79dbaaed69b7ca3b: A7,
      __wbg_deleteTexture_3acb672a45f9998a: T7,
      __wbg_depthFunc_eaca1bc79f7bf216: k7,
      __wbg_depthMask_3a9074b08d1f68e5: C7,
      __wbg_depthRange_c24a808b3496e0a9: V7,
      __wbg_uniform4iv_a9aaa92f2f458ec2: H$,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: Q$,
      __wbg_uniformMatrix3fv_da8c388748c5739b: ev,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: nv,
      __wbg_activeTexture_1d5359b20df41710: y4,
      __wbg_attachShader_683d1070365e7066: T4,
      __wbg_bindAttribLocation_d56d3c40331af7ed: P4,
      __wbg_bindBuffer_e95efaf0d4851845: M4,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: R4,
      __wbg_bindRenderbuffer_d608b211c51ed147: L4,
      __wbg_bindTexture_ffc56f1e5c5526c6: W4,
      __wbg_blendColor_a0ba1cdcecc3a34c: j4,
      __wbg_blendEquation_8bfa69f639ae92da: K4,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: N4,
      __wbg_blendFunc_713c504adab14f98: Y4,
      __wbg_blendFuncSeparate_3eef699c291dbc87: Q4,
      __wbg_disable_4dca6ee0ccc91e4a: z7,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: G7,
      __wbg_drawArrays_10e1254aa4524ae9: J7,
      __wbg_enable_c6e523307311617a: r6,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: t6,
      __wbg_flush_eb3fb8da2ec00d57: l6,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: h6,
      __wbg_linkProgram_6a2eee02a03b9b00: E8,
      __wbg_pixelStorei_55ad4c67b699537c: O5,
      __wbg_polygonOffset_06dc6468c12a57e1: W5,
      __wbg_renderbufferStorage_2918fb696fd45663: n9,
      __wbg_scissor_f9696c630e464977: w9,
      __wbg_shaderSource_628c37a476ae65f9: Cy,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: qy,
      __wbg_stencilMask_f9fe198f7fd6fc9c: Ky,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: Hy,
      __wbg_stencilOpSeparate_6cf50803475d2640: Xy,
      __wbg_texParameteri_fe6210a493d48a16: a$,
      __wbg_framebufferTexture2D_3a558e14f56720d2: $6,
      __wbg_frontFace_c9bb1fa659ffd276: I6,
      __wbg_getParameter_91a344e1a84a4669: O6,
      __wbg_getProgramInfoLog_35410850de9ccefe: W6,
      __wbg_getProgramParameter_bbc667347ac2e882: q6,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: N6,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: K6,
      __wbg_getUniformLocation_340155dc706d3fea: e8,
      __wbg_uniform1f_d34e4b454f7c8e73: T$,
      __wbg_uniform1i_cd9a7f990128ea48: D$,
      __wbg_uniform4f_4410d2faaa7e5dda: W$,
      __wbg_useProgram_0e1cd86765304939: ov,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: gv,
      __wbg_viewport_b5bd46a0d111c83c: lv,
      __wbg_texSubImage2D_1b2ff28f994c325e: o$,
      __wbg_uniform2fv_39277cf2d3cb83c7: k$,
      __wbg_bufferData_5df9bdb32e189eee: tm,
      __wbg_bufferData_26132561617ce8fb: _m,
      __wbg_bufferSubData_44db8a3b4a70b57d: cm,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: Im,
      __wbg_readPixels_05377f8b6fa1d8eb: e9,
      __wbg_texImage2D_7bc3001cb8602ed2: _$,
      __wbg_navigator_017bc45e84c473cc: m5,
      __wbg_log_d282446d03691e72: O8,
      __wbg_info_a392cd5b7536cfb5: g8,
      __wbg_warn_88c4a5bd9a322000: mv,
      __wbg_debug_7271beced8b71cd4: d7,
      __wbg_error_933f449d72fef598: s6,
      __wbg_error_50f60c611a3dcf64: o6,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: z4,
      __wbg_width_08e66520b99071f4: hv,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: b7,
      __wbg_height_e9afb506f31052a9: i8,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: B7,
      __wbg_queryCounterEXT_ebb00bcc96221671: N5,
      __wbg_aborted_4d4114700dc4c251: x4,
      __wbg_addEventListener_ea90bc131475777e: v4,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: S6,
      __wbg_set_width_f9e631f4ee129e5c: Dy,
      __wbg_set_height_ef298446b359b0c5: jh,
      __wbg_getContext_70c2d1bed75d4122: P6,
      __wbg_getContext_422b32d0ee4b8076: B6,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: H7,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: Y7,
      __wbg_arrayBuffer_ff96d08b7b6be32e: A4,
      __wbg_get_37b48b8fa52d1f2c: r8,
      __wbg_status_0053aa6239760447: Uy,
      __wbg_ok_c962da6f1a034d81: V5,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: fv,
      __wbg_statusText_0f412961834ccfe9: zy,
      __wbg_instanceof_Response_79948c98d1d2ba75: y8,
      __wbg_set_signal_4a69430cb12800f3: Ux,
      __wbg_new_1e52e3c919312525: x5,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: Q7,
      __wbg_observe_592b94857eed8e27: k5,
      __wbg_altKey_7412dd64f8c921c7: S4,
      __wbg_ctrlKey_00097886a21597a7: i7,
      __wbg_shiftKey_273ee8c901267b55: Ry,
      __wbg_metaKey_1c2847b62ad062c1: w5,
      __wbg_repeat_46a5c90df9f6ef0b: c9,
      __wbg_isComposing_e3709163a95a2477: T8,
      __wbg_key_d6b3d2cce3d41872: P8,
      __wbg_code_87bb99fdec02d313: ym,
      __wbg_now_0f628e0e435c541b: P5,
      __wbg_offsetX_0214819d43aaf6d5: M5,
      __wbg_offsetY_f18f571e33b385ab: R5,
      __wbg_button_bb3285fcdf965178: bm,
      __wbg_signal_4d9d567be73ea52c: Vy,
      __wbg_new_51233fa2a760b272: S5,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: X6,
      __wbg_abort_6e6ea7d259504afc: h4,
      __wbg_preventDefault_c047d3e292b08cc4: U5,
      __wbg_contentRect_0fb8c8900d689a0c: km,
      __wbg_width_a86bcd32bd998060: xv,
      __wbg_height_cd732bbdc7b66e49: s8,
      __wbg_set_width_031bdecd763c5855: Iy,
      __wbg_set_height_ad5056ea051acd78: Uh,
      __wbg_getContext_486aab500e1c34c9: F6,
      __wbg_getContext_9fd4db9b1cf155db: k6,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: m8,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: x8,
      __wbg_resolve_d82363d90af6928a: f9,
      __wbg_then_591b6b3a75ee817a: A$,
      __wbg_iterator_cc47ba25a2be735a: F8,
      __wbg_get_9a29be2cb383ed9a: n8,
      __wbg_next_402fa10b59ab20c3: F5,
      __wbg_new_2e117a478906f062: $5,
      __wbg_new_36e147a8ced3c6e0: v5,
      __wbg_of_62183ea089c00bfa: C5,
      __wbg_isArray_145a34fd0a38d37b: I8,
      __wbg_new_e66a4b7758dd2e5c: I5,
      __wbg_isSafeInteger_a3389a198582f5f6: D8,
      __wbg_is_de5b366c746e004c: B8,
      __wbg_entries_c261c3fa1f281256: b6,
      __wbg_then_2a84678a50976959: S$,
      __wbg_length_589238bdcf171f0e: C8,
      __wbg_prototypesetcall_d721637c7ca66eb8: j5,
      __wbg_set_272b80acaf9a75e8: A9,
      __wbg_new_81880fb5002cb255: A5,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: D5,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: Ly,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: Gy,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Oy,
      __wbg_static_accessor_WINDOW_168f178805d978fe: Wy,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: w8,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: $8,
      __wbg_queueMicrotask_1c9b3800e321a967: Q5,
      __wbg_queueMicrotask_311744e534a929a3: X5,
      __wbg_set_4564f7dc44fcb0c9: I9,
      __wbg___wbindgen_number_get_1cc01dd708740256: w4,
      __wbg___wbindgen_in_4990f46af709e33c: c4,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: l4,
      __wbg___wbindgen_is_null_6d937fbfb6478470: s4,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: d4,
      __wbg_Number_c4bdf66bb78f7977: Zl,
      __wbg_Error_fdd633d4bb5dd76a: Yl,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: b4,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: i4,
      __wbg___wbindgen_is_string_1fca8072260dd261: f4,
      __wbg___wbindgen_string_get_71bb4348194e31f0: p4,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: n4,
      __wbg___wbindgen_is_function_acc5528be2b923f2: o4,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: u4,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: g4,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: r4,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: m4,
      __wbg___wbindgen_debug_string_8a447059637473e2: a4,
      __wbindgen_init_externref_table: zv,
      __wbindgen_cast_0000000000000001: vv,
      __wbindgen_cast_0000000000000002: Sv,
      __wbindgen_cast_0000000000000003: Av,
      __wbindgen_cast_0000000000000004: Iv,
      __wbindgen_cast_0000000000000005: Tv,
      __wbindgen_cast_0000000000000006: Dv,
      __wbindgen_cast_0000000000000007: Bv,
      __wbindgen_cast_0000000000000008: Fv,
      __wbindgen_cast_0000000000000009: Pv,
      __wbindgen_cast_000000000000000a: kv,
      __wbindgen_cast_000000000000000b: Cv,
      __wbindgen_cast_000000000000000c: Mv,
      __wbindgen_cast_000000000000000d: Rv,
      __wbindgen_cast_000000000000000e: Vv,
      __wbindgen_cast_000000000000000f: Ev,
      __wbindgen_cast_0000000000000010: Lv,
      __wbindgen_cast_0000000000000011: Ov,
      __wbindgen_cast_0000000000000012: Gv,
      __wbindgen_cast_0000000000000013: Wv
    }
  }, Hl), { memory: IS, clear: TS, on_frame: DS, show: BS, start: FS, stop_frames: PS, mount: kS, __wbg_proteusapp_free: CS, proteusapp_addChild: MS, proteusapp_animateTo: RS, proteusapp_bakeTexture: VS, proteusapp_bakedImageSize: ES, proteusapp_bakedTextSize: LS, proteusapp_channelDestroy: OS, proteusapp_channelSet: GS, proteusapp_component: WS, proteusapp_copyBakedImageFrom: zS, proteusapp_createVideo: US, proteusapp_cropImage: qS, proteusapp_declareGeometry: jS, proteusapp_declaredGeometry: HS, proteusapp_destroy: NS, proteusapp_devices: JS, proteusapp_freeResources: KS, proteusapp_get: QS, proteusapp_hideVideo: XS, proteusapp_inputDevices: YS, proteusapp_loadTexture: ZS, proteusapp_mergeFrom: eA, proteusapp_mergeFromWithBehavior: _A, proteusapp_new: tA, proteusapp_onBlur: rA, proteusapp_onClick: nA, proteusapp_onDrag: aA, proteusapp_onDropped: cA, proteusapp_onFocus: bA, proteusapp_onHoverEnter: oA, proteusapp_onHoverExit: sA, proteusapp_onPress: iA, proteusapp_onRelease: fA, proteusapp_onTransitionComplete: uA, proteusapp_pointerLeft: dA, proteusapp_pointerMoved: gA, proteusapp_pointerPressed: wA, proteusapp_pointerReleased: pA, proteusapp_releaseVideo: lA, proteusapp_removeChild: mA, proteusapp_setDeclaredGeometry: hA, proteusapp_setDevices: xA, proteusapp_setDisabled: yA, proteusapp_setImage: $A, proteusapp_setInputDevices: vA, proteusapp_setInteractive: SA, proteusapp_setOpacity: AA, proteusapp_setText: IA, proteusapp_setTexture: TA, proteusapp_setTransitionInteraction: DA, proteusapp_setVideoCrossfade: BA, proteusapp_setVisible: FA, proteusapp_showVideo: PA, proteusapp_splitTo: kA, proteusapp_splitToWithBehavior: CA, proteusapp_splitToWithStates: MA, proteusapp_texture: RA, proteusapp_textureState: VA, proteusapp_tick: EA, proteusapp_transitionChannel: LA, proteusapp_uploadVideoFrame: OA, __wbg_handle_free: GA, __wbg_texturehandle_free: WA, __wbg_transitionchannel_free: zA, __wbg_videohandle_free: UA, handle_fromId: qA, handle_id: jA, texturehandle_fromId: HA, texturehandle_id: NA, __abort_handler: JA, __instance_terminated: KA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: QA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: XA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: YA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: ZA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: eI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: _I, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: tI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: rI, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: nI, __wbindgen_malloc: aI, __wbindgen_realloc: cI, __wbindgen_exn_store: bI, __externref_table_alloc: oI, __wbindgen_externrefs: sI, __wbindgen_free: iI, __wbindgen_destroy_closure: fI, __externref_table_dealloc: uI, __wbindgen_start: Ht } = AS, dI = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: JA,
    __externref_table_alloc: oI,
    __externref_table_dealloc: uI,
    __instance_terminated: KA,
    __wbg_handle_free: GA,
    __wbg_proteusapp_free: CS,
    __wbg_texturehandle_free: WA,
    __wbg_transitionchannel_free: zA,
    __wbg_videohandle_free: UA,
    __wbindgen_destroy_closure: fI,
    __wbindgen_exn_store: bI,
    __wbindgen_externrefs: sI,
    __wbindgen_free: iI,
    __wbindgen_malloc: aI,
    __wbindgen_realloc: cI,
    __wbindgen_start: Ht,
    clear: TS,
    handle_fromId: qA,
    handle_id: jA,
    memory: IS,
    mount: kS,
    on_frame: DS,
    proteusapp_addChild: MS,
    proteusapp_animateTo: RS,
    proteusapp_bakeTexture: VS,
    proteusapp_bakedImageSize: ES,
    proteusapp_bakedTextSize: LS,
    proteusapp_channelDestroy: OS,
    proteusapp_channelSet: GS,
    proteusapp_component: WS,
    proteusapp_copyBakedImageFrom: zS,
    proteusapp_createVideo: US,
    proteusapp_cropImage: qS,
    proteusapp_declareGeometry: jS,
    proteusapp_declaredGeometry: HS,
    proteusapp_destroy: NS,
    proteusapp_devices: JS,
    proteusapp_freeResources: KS,
    proteusapp_get: QS,
    proteusapp_hideVideo: XS,
    proteusapp_inputDevices: YS,
    proteusapp_loadTexture: ZS,
    proteusapp_mergeFrom: eA,
    proteusapp_mergeFromWithBehavior: _A,
    proteusapp_new: tA,
    proteusapp_onBlur: rA,
    proteusapp_onClick: nA,
    proteusapp_onDrag: aA,
    proteusapp_onDropped: cA,
    proteusapp_onFocus: bA,
    proteusapp_onHoverEnter: oA,
    proteusapp_onHoverExit: sA,
    proteusapp_onPress: iA,
    proteusapp_onRelease: fA,
    proteusapp_onTransitionComplete: uA,
    proteusapp_pointerLeft: dA,
    proteusapp_pointerMoved: gA,
    proteusapp_pointerPressed: wA,
    proteusapp_pointerReleased: pA,
    proteusapp_releaseVideo: lA,
    proteusapp_removeChild: mA,
    proteusapp_setDeclaredGeometry: hA,
    proteusapp_setDevices: xA,
    proteusapp_setDisabled: yA,
    proteusapp_setImage: $A,
    proteusapp_setInputDevices: vA,
    proteusapp_setInteractive: SA,
    proteusapp_setOpacity: AA,
    proteusapp_setText: IA,
    proteusapp_setTexture: TA,
    proteusapp_setTransitionInteraction: DA,
    proteusapp_setVideoCrossfade: BA,
    proteusapp_setVisible: FA,
    proteusapp_showVideo: PA,
    proteusapp_splitTo: kA,
    proteusapp_splitToWithBehavior: CA,
    proteusapp_splitToWithStates: MA,
    proteusapp_texture: RA,
    proteusapp_textureState: VA,
    proteusapp_tick: EA,
    proteusapp_transitionChannel: LA,
    proteusapp_uploadVideoFrame: OA,
    show: BS,
    start: FS,
    stop_frames: PS,
    texturehandle_fromId: HA,
    texturehandle_id: NA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: nI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: QA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: eI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: _I,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: tI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: rI,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: YA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: ZA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: XA
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  SS(dI);
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
  const _De = class _De {
    constructor() {
      this.state = 0x9e3779b97f4a7c15n;
    }
    next() {
      let e = this.state;
      return e ^= e << 13n & _De.MASK, e ^= e >> 7n, e ^= e << 17n & _De.MASK, this.state = e, Number(e >> 40n) / 2 ** 24;
    }
    between(e, t) {
      return e + (t - e) * this.next();
    }
  };
  _De.MASK = (1n << 64n) - 1n;
  let De = _De;
  function tt(_, e) {
    const { min: t, max: r } = j[_], n = new De();
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
  const gI = `#version 300 es
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
}`, wI = `#version 300 es
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
}`, pI = `#version 300 es
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
    if (_.attachShader(r, t(_.VERTEX_SHADER, e)), _.attachShader(r, t(_.FRAGMENT_SHADER, gI)), _.linkProgram(r), !_.getProgramParameter(r, _.LINK_STATUS)) throw new Error(_.getProgramInfoLog(r) ?? "program failed to link");
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
  function lI(_) {
    return (e, t, r) => {
      const n = Nt(_, wI), a = Jt(_), c = _.createVertexArray();
      _.bindVertexArray(c);
      const b = _.getAttribLocation(n, "a_corner");
      _.enableVertexAttribArray(b), _.vertexAttribPointer(b, 2, _.FLOAT, false, 0, 0);
      const o = _.getUniformLocation(n, "u_rect"), f = _.getUniformLocation(n, "u_color");
      return {
        draw() {
          Kt(_), _.useProgram(n), _.bindVertexArray(c), _.uniform2f(_.getUniformLocation(n, "u_viewport"), te, re), _.uniform1f(_.getUniformLocation(n, "u_radius"), r), e.forEach((d, A) => {
            _.uniform4f(o, t[A * 2], t[A * 2 + 1], d.width, d.height), _.uniform3f(f, d.r, d.g, d.b), _.drawArrays(_.TRIANGLE_STRIP, 0, 4);
          });
        },
        dispose() {
          _.deleteProgram(n), _.deleteBuffer(a), _.deleteVertexArray(c);
        }
      };
    };
  }
  function mI(_) {
    return (e, t, r) => {
      const n = Nt(_, pI), a = Jt(_), c = _.createVertexArray();
      _.bindVertexArray(c);
      const b = _.getAttribLocation(n, "a_corner");
      _.enableVertexAttribArray(b), _.vertexAttribPointer(b, 2, _.FLOAT, false, 0, 0);
      const o = new Float32Array(e.length * 7), f = _.createBuffer();
      _.bindBuffer(_.ARRAY_BUFFER, f), _.bufferData(_.ARRAY_BUFFER, o.byteLength, _.DYNAMIC_DRAW);
      const d = _.getAttribLocation(n, "a_rect"), A = _.getAttribLocation(n, "a_color");
      return _.enableVertexAttribArray(d), _.vertexAttribPointer(d, 4, _.FLOAT, false, 28, 0), _.vertexAttribDivisor(d, 1), _.enableVertexAttribArray(A), _.vertexAttribPointer(A, 3, _.FLOAT, false, 28, 16), _.vertexAttribDivisor(A, 1), {
        draw() {
          e.forEach((J, f_) => {
            const ne = f_ * 7;
            o[ne] = t[f_ * 2], o[ne + 1] = t[f_ * 2 + 1], o[ne + 2] = J.width, o[ne + 3] = J.height, o[ne + 4] = J.r, o[ne + 5] = J.g, o[ne + 6] = J.b;
          }), Kt(_), _.useProgram(n), _.bindVertexArray(c), _.bindBuffer(_.ARRAY_BUFFER, f), _.bufferSubData(_.ARRAY_BUFFER, 0, o), _.uniform2f(_.getUniformLocation(n, "u_viewport"), te, re), _.uniform1f(_.getUniformLocation(n, "u_radius"), r), _.drawArraysInstanced(_.TRIANGLE_STRIP, 0, 4, e.length);
        },
        dispose() {
          _.deleteProgram(n), _.deleteBuffer(a), _.deleteBuffer(f), _.deleteVertexArray(c);
        }
      };
    };
  }
  function hI(_) {
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
  const M_ = 500;
  function xI(_) {
    return _ < 0.5 ? 2 * _ * _ : 1 - (-2 * _ + 2) ** 2 / 2;
  }
  const yI = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
  class rt {
    constructor(e) {
      this.random = new De(), this.movedAt = -1 / 0, this.current = new Float32Array(e.flatMap((t) => [
        t.x,
        t.y
      ])), this.from = this.current.slice(), this.to = this.current.slice();
    }
    retarget(e) {
      if (!(e - this.movedAt < M_)) {
        this.movedAt = e, this.from.set(this.current);
        for (let t = 0; t < this.to.length; t += 2) this.to[t] = this.random.between(0, te), this.to[t + 1] = this.random.between(0, re);
        return this.to;
      }
    }
    advance(e) {
      const t = xI(Math.min(1, (e - this.movedAt) / M_));
      for (let r = 0; r < this.current.length; r++) this.current[r] = this.from[r] + (this.to[r] - this.from[r]) * t;
    }
  }
  function $I(_, e, t) {
    const r = new rt(e), n = document.createDocumentFragment(), a = e.map((c, b) => {
      const o = document.createElement("div"), f = o.style;
      return f.position = "absolute", f.left = "0", f.top = "0", f.width = `${c.width}px`, f.height = `${c.height}px`, f.borderRadius = `${t}px`, f.background = `rgb(${Math.round(c.r * 255)} ${Math.round(c.g * 255)} ${Math.round(c.b * 255)})`, f.transform = It(r.current[b * 2], r.current[b * 2 + 1], c), f.transition = `transform ${M_}ms ${yI}`, n.append(o), o;
    });
    return _.append(n), {
      frame(c) {
        const b = r.retarget(c);
        b && a.forEach((o, f) => {
          o.style.transform = It(b[f * 2], b[f * 2 + 1], e[f]);
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
  const vI = [
    100,
    1e3,
    5e3,
    1e4,
    25e3,
    5e4,
    1e5
  ], SI = 60, AI = 2e3, R_ = 1e5, Tt = 100, nt = `proteus-bench:${location.pathname}`, II = 300, TI = 15e3, a_ = document.getElementById("status"), Qt = document.getElementById("results"), he = document.getElementById("run"), b_ = document.getElementById("reset"), xe = {
    proteus: document.getElementById("proteus"),
    proteusRust: document.getElementById("proteus-rust"),
    webgl: document.getElementById("webgl"),
    canvas2d: document.getElementById("canvas2d"),
    css: document.getElementById("css")
  }, Xt = new URLSearchParams(location.search), Ie = ((_a2 = Xt.get("counts")) == null ? void 0 : _a2.split(",").map(Number).filter((_) => _ > 0)) ?? vI, at = (((_b2 = Xt.get("scenes")) == null ? void 0 : _b2.split(",")) ?? [
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
        const a = ((_a3 = n[1].match(/\((\w+)\)\s*$/)) == null ? void 0 : _a3[1]) ?? "", c = n[1].replace(/\(\w+\)\s*$/, "").trim();
        Yt = `${/WebGpu/i.test(a) ? "WebGPU" : /Gl/i.test(a) ? "WebGL2" : a}${c ? `, ${c}` : " (the browser doesn't name the GPU)"}`;
      }
      e(...t);
    };
  }
  function DI(_) {
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
      let r = 0, n = 0, a = 0, c = 0, b = false;
      const o = _((f) => {
        if (r += 1, r === 1 && (c = f), !b && (r >= SI || f - c > AI)) {
          b = true, a = f, n = f;
          return;
        }
        b && t.push(f - n), n = f, b && (t.length >= II || f - a > TI) && (o(), e(DI(t)));
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
  let er, V_;
  await zl("proteus", {
    setup(_) {
      er = _;
    },
    update() {
      V_ == null ? void 0 : V_(performance.now());
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
  await Ql("proteus-rust", Zt);
  async function BI(_, e) {
    Kl(_, e);
    const t = await Pe((r) => (Jl(r), () => Xl()));
    return Nl(), t;
  }
  async function FI(_, e) {
    const t = er, r = tt(_, e), n = (o, f, d) => ({
      position: {
        x: o - te / 2,
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
    }), a = r.map((o, f) => t.component({
      geometry: n(o.x, o.y, f)
    })), c = _ === "moving" ? new rt(r) : void 0, b = await Pe((o) => (V_ = (f) => {
      const d = c == null ? void 0 : c.retarget(f);
      d && a.forEach((A, J) => A.animateTo(n(d[J * 2], d[J * 2 + 1], J), {
        duration: 0.5,
        easing: "easeInOutQuad"
      })), o(f);
    }, () => {
      V_ = void 0;
    }));
    for (const o of a) o.destroy();
    return b;
  }
  const Be = window.devicePixelRatio;
  for (const _ of [
    xe.webgl,
    xe.canvas2d
  ]) _.width = te * Be, _.height = re * Be;
  const we = xe.webgl.getContext("webgl2", {
    antialias: false
  }), _r = xe.canvas2d.getContext("2d");
  _r.scale(Be, Be);
  async function bt(_, e, t) {
    const r = tt(e, t), n = new rt(r), a = _(r, n.current, j[e].radius), c = await Pe(ct((b) => {
      e === "moving" && (n.retarget(b), n.advance(b)), a.draw();
    }));
    return a.dispose(), c;
  }
  async function PI(_) {
    const e = $I(xe.css, tt("moving", _), j.moving.radius), t = await Pe(ct((r) => e.frame(r)));
    return e.dispose(), t;
  }
  function Dt(_) {
    for (const [e, t] of Object.entries(xe)) t.style.visibility = e === _ ? "visible" : "hidden";
  }
  const x_ = {
    title: "Proteus (TypeScript)",
    surface: "proteus",
    time: FI
  }, y_ = {
    title: "Proteus (Rust)",
    surface: "proteusRust",
    time: BI
  }, kI = {
    title: "CSS",
    surface: "css",
    time: (_, e) => PI(e)
  }, $_ = {
    title: "Canvas 2D",
    surface: "canvas2d",
    time: (_, e) => bt(hI(_r), _, e)
  }, v_ = {
    title: "Naive WebGL2",
    surface: "webgl",
    time: (_, e) => bt(lI(we), _, e)
  }, S_ = {
    title: "Batched WebGL2",
    surface: "webgl",
    time: (_, e) => bt(mI(we), _, e)
  }, tr = {
    small: [
      x_,
      y_,
      $_,
      v_,
      S_
    ],
    large: [
      x_,
      y_,
      $_,
      v_,
      S_
    ],
    moving: [
      x_,
      y_,
      kI,
      $_,
      v_,
      S_
    ]
  }, E_ = {
    small: 1 / 0,
    large: R_,
    moving: 1 / 0
  }, CI = {
    small: `Small components (${j.small.min}\u2013${j.small.max} px), still: the cost per component`,
    large: `Large components (${j.large.min}\u2013${j.large.max} px), still: filling pixels dominates`,
    moving: `Moving components (${j.moving.min}\u2013${j.moving.max} px): every one always moving`
  };
  function MI(_) {
    const e = we.getExtension("WEBGL_debug_renderer_info"), t = e ? we.getParameter(e.UNMASKED_RENDERER_WEBGL) : we.getParameter(we.RENDERER);
    return [
      `- Browser: ${navigator.userAgent}`,
      `- GPU: ${t}`,
      `- Proteus's adapter: ${Yt}`,
      `- Device pixel ratio: ${Be}; canvas ${te} \xD7 ${re} CSS pixels`,
      `- Refresh rate: about ${(1e3 / _).toFixed(0)} Hz (a frame every ${_.toFixed(2)} ms)`
    ].join(`
`);
  }
  function RI() {
    const _ = {
      settings: location.search,
      cells: {},
      dropped: {}
    };
    try {
      const e = JSON.parse(localStorage.getItem(nt) ?? "null");
      return e && e.settings === location.search ? e : _;
    } catch {
      return _;
    }
  }
  function c_() {
    try {
      localStorage.setItem(nt, JSON.stringify(V));
    } catch {
    }
  }
  const V = RI();
  if (V.running) {
    const [_, e, t] = V.running.split("|");
    V.cells[V.running] = "crashed | \u2014", V.dropped[`${_}|${t}`] = `crashed at ${e}`, V.running = void 0, c_();
  }
  const VI = (_) => `${_.median.toFixed(2)} | ${_.p99.toFixed(2)}`;
  function rr(_) {
    return Ie.filter((e) => e <= E_[_]).flatMap((e) => tr[_].map((t) => [
      e,
      t
    ])).filter(([e, t]) => V.cells[`${_}|${e}|${t.title}`] === void 0);
  }
  async function EI() {
    he.disabled = true, b_.disabled = true, V.refresh === void 0 && (Dt("webgl"), a_.textContent = "Measuring the refresh rate\u2026", V.refresh = (await Pe(ct(() => {
    }))).median, c_());
    for (const _ of at) for (const [e, t] of rr(_)) {
      const r = `${_}|${e}|${t.title}`;
      if (V.dropped[`${_}|${t.title}`]) {
        V.cells[r] = "skipped | \u2014";
        continue;
      }
      Dt(t.surface), a_.textContent = `${_} scene, ${e} components: ${t.title}\u2026`, V.running = r, c_();
      try {
        const a = await t.time(_, e);
        V.cells[r] = VI(a), a.median >= Tt && (V.dropped[`${_}|${t.title}`] = `slower than ${Tt} ms a frame at ${e}`);
      } catch (a) {
        console.error(a), V.cells[r] = "failed | \u2014", V.dropped[`${_}|${t.title}`] = `failed at ${e}: ${String(a)}`;
      }
      V.running = void 0, c_(), Qt.textContent = nr();
    }
    a_.textContent = "Done. Copy the results below.", he.textContent = "Run", he.disabled = false, b_.disabled = false;
  }
  function nr() {
    const _ = [
      MI(V.refresh ?? 0)
    ];
    for (const e of at) {
      const t = tr[e].map((a) => a.title), r = Ie.filter((a) => a <= E_[e]).map((a) => t.map((c) => V.cells[`${e}|${a}|${c}`])).map((a, c) => ({
        count: Ie.filter((b) => b <= E_[e])[c],
        cells: a
      })).filter(({ cells: a }) => a.some((c) => c !== void 0));
      if (r.length === 0) continue;
      _.push("", `### ${CI[e]}`, "", "Frame interval, median and p99, in milliseconds:", "", `| Components | ${t.map((a) => `${a} | p99`).join(" | ")} |`, `|---:|${t.map(() => "---:|---:").join("|")}|`, ...r.map(({ count: a, cells: c }) => `| ${a} | ${c.map((b) => b ?? "\u2026 | \u2026").join(" | ")} |`));
      const n = t.map((a) => [
        a,
        V.dropped[`${e}|${a}`]
      ]).filter(([, a]) => a).map(([a, c]) => `- ${a}: ${c}; skipped after that.`);
      n.length > 0 && _.push("", ...n), e === "large" && Ie.some((a) => a > R_) && _.push("", `The large scene stops at ${R_}: past it, Safari's tab crashes.`);
    }
    return _.join(`
`);
  }
  he.addEventListener("click", () => void EI());
  b_.addEventListener("click", () => {
    try {
      localStorage.removeItem(nt);
    } catch {
    }
    location.reload();
  });
  const ke = Object.keys(V.cells).length > 0, ot = at.some((_) => rr(_).length > 0);
  ke && (Qt.textContent = nr());
  he.textContent = ke && ot ? "Resume" : "Run";
  a_.textContent = ke ? ot ? "A run was under way, and is saved: Resume carries on from where it stopped." : "The last run is complete; its results are below. Start over to run again." : "Ready. Keep this tab in front while it runs: a hidden tab stops drawing.";
  he.disabled = ke && !ot;
  b_.disabled = !ke;
})();
