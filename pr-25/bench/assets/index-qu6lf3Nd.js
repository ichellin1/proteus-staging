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
  const ar = "" + new URL("proteus_sdk_web_bg-gdH0nc_7.wasm", import.meta.url).href, L_ = async (_ = {}, e) => {
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
      const a = u_(r, u.__wbindgen_malloc), b = O, c = u.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, b, n);
      return Q.__wrap(c);
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
      const b = u.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (b[1]) throw B(b[0]);
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
    loadTexture(e, t) {
      const r = u_(e, u.__wbindgen_malloc), n = O, a = u.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : Q.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      p(e, x);
      const a = Ve(t, u.__wbindgen_malloc), b = O, c = u.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, b, r, n);
      if (c[1]) throw B(c[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      p(e, x);
      const b = Ve(t, u.__wbindgen_malloc), c = O, o = u.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, b, c, r, n, a);
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
      p(e, x), p(t, Q);
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
      const a = Ve(t, u.__wbindgen_malloc), b = O, c = u.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, b, r, n);
      if (c[1]) throw B(c[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      p(e, x);
      const b = Ve(t, u.__wbindgen_malloc), c = O, o = u.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, b, c, r, n, a);
      if (o[1]) throw B(o[0]);
    }
    splitToWithStates(e, t, r, n) {
      p(e, x);
      const a = u.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw B(a[0]);
    }
    texture(e) {
      const t = u.proteusapp_texture(this.__wbg_ptr, e);
      return Q.__wrap(t);
    }
    textureState(e) {
      return p(e, Q), u.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
    }
    tick(e) {
      u.proteusapp_tick(this.__wbg_ptr, e);
    }
    transitionChannel(e) {
      const t = u.proteusapp_transitionChannel(this.__wbg_ptr, !U(e), U(e) ? 0 : e);
      return fe.__wrap(t);
    }
    uploadVideoFrame(e, t, r, n) {
      p(e, ue);
      const a = u_(n, u.__wbindgen_malloc), b = O;
      return u.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, b) !== 0;
    }
  };
  Symbol.dispose && (I_.prototype[Symbol.dispose] = I_.prototype.free);
  let Q = class T_ {
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
  Symbol.dispose && (Q.prototype[Symbol.dispose] = Q.prototype.free);
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
  function br(_, e) {
    return Error(N(_, e));
  }
  function cr(_) {
    return Number(_);
  }
  function or(_, e) {
    const t = String(e), r = o_(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = O;
    z().setInt32(_ + 4, n, true), z().setInt32(_ + 0, r, true);
  }
  function sr(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    z().setBigInt64(_ + 8, U(r) ? BigInt(0) : r, true), z().setInt32(_ + 0, !U(r), true);
  }
  function ir(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return U(t) ? 16777215 : t ? 1 : 0;
  }
  function fr(_, e) {
    const t = D_(e), r = o_(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = O;
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
  function wr(_) {
    return _ === null;
  }
  function pr(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function lr(_) {
    return _ === void 0;
  }
  function mr(_, e) {
    return _ === e;
  }
  function hr(_, e) {
    return _ == e;
  }
  function xr(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    z().setFloat64(_ + 8, U(r) ? 0 : r, true), z().setInt32(_ + 0, !U(r), true);
  }
  function yr(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = U(r) ? 0 : o_(r, u.__wbindgen_malloc, u.__wbindgen_realloc), a = O;
    z().setInt32(_ + 4, a, true), z().setInt32(_ + 0, n, true);
  }
  function $r(_, e) {
    throw new Error(N(_, e));
  }
  function Sr(_) {
    _._wbg_cb_unref();
  }
  function vr() {
    return G(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function Ar() {
    return G(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function Ir() {
    return G(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Tr() {
    return G(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function Dr() {
    return G(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function Br(_, e) {
    return _.createBindGroup(e);
  }
  function Fr(_, e) {
    return _.createCommandEncoder(e);
  }
  function Pr() {
    return G(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function kr() {
    return G(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function Mr(_) {
    _.destroy();
  }
  function Cr(_) {
    return _.done;
  }
  function Rr(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function Vr(_) {
    _.end();
  }
  function Er(_) {
    return Object.entries(_);
  }
  function Lr(_) {
    return _.finish();
  }
  function Or(_, e) {
    return _.finish(e);
  }
  function Gr() {
    return G(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function Wr(_, e) {
    return _[e >>> 0];
  }
  function zr() {
    return G(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function Ur(_, e) {
    return _[e >>> 0];
  }
  function qr(_, e) {
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
  function jr(_) {
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
    const t = e.label, r = o_(t, u.__wbindgen_malloc, u.__wbindgen_realloc), n = O;
    z().setInt32(_ + 4, n, true), z().setInt32(_ + 0, r, true);
  }
  function Kr(_) {
    return _.length;
  }
  function Zr(_) {
    return _.length;
  }
  function en(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function _n() {
    return new Object();
  }
  function tn() {
    return new Array();
  }
  function rn(_) {
    return new Uint8Array(_);
  }
  function nn(_, e) {
    return new Error(N(_, e));
  }
  function an(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function bn() {
    return G(function(_) {
      return _.next();
    }, arguments);
  }
  function cn(_) {
    return _.next;
  }
  function on(_) {
    return _.onSubmittedWorkDone();
  }
  function sn(_, e, t) {
    Uint8Array.prototype.set.call(W_(_, e), t);
  }
  function fn(_, e) {
    return _.push(e);
  }
  function un(_) {
    return _.queueMicrotask;
  }
  function dn(_) {
    queueMicrotask(_);
  }
  function gn(_) {
    return Promise.resolve(_);
  }
  function wn() {
    return G(function(_, e, t, r, n, a, b) {
      _.setBindGroup(e >>> 0, t, ab(r, n), a, b >>> 0);
    }, arguments);
  }
  function pn(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function ln(_, e, t, r, n) {
    _.setIndexBuffer(e, Pt[t], r, n);
  }
  function mn(_, e, t, r) {
    _.setIndexBuffer(e, Pt[t], r);
  }
  function hn(_, e) {
    _.setPipeline(e);
  }
  function xn(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function yn(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function $n(_, e, t, r, n, a, b) {
    _.setViewport(e, t, r, n, a, b);
  }
  function Sn(_, e, t) {
    _[e] = t;
  }
  function vn(_, e) {
    _.a = e;
  }
  function An(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function In(_, e) {
    _.aspect = kt[e];
  }
  function Tn(_, e) {
    _.aspect = kt[e];
  }
  function Dn(_, e) {
    _.b = e;
  }
  function Bn(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function Fn(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function Pn(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function kn(_, e) {
    _.binding = e >>> 0;
  }
  function Mn(_, e) {
    _.buffer = e;
  }
  function Cn(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function Rn(_, e) {
    _.clearValue = e;
  }
  function Vn(_, e) {
    _.colorAttachments = e;
  }
  function En(_, e, t) {
    _[e >>> 0] = t;
  }
  function Ln(_, e) {
    _.depthClearValue = e;
  }
  function On(_, e) {
    _.depthLoadOp = O_[e];
  }
  function Gn(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function Wn(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function zn(_, e) {
    _.depthStencilAttachment = e;
  }
  function Un(_, e) {
    _.depthStoreOp = G_[e];
  }
  function qn(_, e) {
    _.dimension = nb[e];
  }
  function Hn(_, e) {
    _.dimension = rb[e];
  }
  function jn(_, e) {
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
  function Kn(_, e, t) {
    _.label = N(e, t);
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
  function na(_, e) {
    _.layout = e;
  }
  function aa(_, e) {
    _.loadOp = O_[e];
  }
  function ba(_, e) {
    _.mipLevel = e >>> 0;
  }
  function ca(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function oa(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function sa(_, e) {
    _.offset = e;
  }
  function ia(_, e) {
    _.offset = e;
  }
  function fa(_, e) {
    _.origin = e;
  }
  function ua(_, e) {
    _.querySet = e;
  }
  function da(_, e) {
    _.r = e;
  }
  function ga(_, e) {
    _.resolveTarget = e;
  }
  function wa(_, e) {
    _.resource = e;
  }
  function pa(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function la(_, e) {
    _.sampleCount = e >>> 0;
  }
  function ma(_, e) {
    _.size = e;
  }
  function ha(_, e) {
    _.size = e;
  }
  function xa(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function ya(_, e) {
    _.stencilLoadOp = O_[e];
  }
  function $a(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function Sa(_, e) {
    _.stencilStoreOp = G_[e];
  }
  function va(_, e) {
    _.storeOp = G_[e];
  }
  function Aa(_, e) {
    _.texture = e;
  }
  function Ia(_, e) {
    _.timestampWrites = e;
  }
  function Ta(_, e) {
    _.usage = e >>> 0;
  }
  function Da(_, e) {
    _.usage = e >>> 0;
  }
  function Ba(_, e) {
    _.view = e;
  }
  function Fa(_, e) {
    _.view = e;
  }
  function Pa(_, e) {
    _.viewFormats = e;
  }
  function ka(_, e) {
    _.width = e >>> 0;
  }
  function Ma(_, e) {
    _.x = e >>> 0;
  }
  function Ca(_, e) {
    _.y = e >>> 0;
  }
  function Ra(_, e) {
    _.z = e >>> 0;
  }
  function Va() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return U(_) ? 0 : Fe(_);
  }
  function Ea() {
    const _ = typeof global > "u" ? null : global;
    return U(_) ? 0 : Fe(_);
  }
  function La() {
    const _ = typeof self > "u" ? null : self;
    return U(_) ? 0 : Fe(_);
  }
  function Oa() {
    const _ = typeof window > "u" ? null : window;
    return U(_) ? 0 : Fe(_);
  }
  function Ga(_, e) {
    _.submit(e);
  }
  function Wa(_, e, t) {
    return _.then(e, t);
  }
  function za(_, e, t) {
    return _.then(e, t);
  }
  function Ua(_, e) {
    return _.then(e);
  }
  function qa(_) {
    _.unmap();
  }
  function Ha(_) {
    return _.value;
  }
  function ja() {
    return G(function(_, e, t, r, n, a, b) {
      _.writeBuffer(e, t, W_(r, n), a, b);
    }, arguments);
  }
  function Na() {
    return G(function(_, e, t, r, n, a) {
      _.writeTexture(e, W_(t, r), n, a);
    }, arguments);
  }
  function Ja(_, e) {
    return Ct(_, e, _b);
  }
  function Qa(_, e) {
    return Ct(_, e, tb);
  }
  function Xa(_) {
    return _;
  }
  function Ya(_) {
    return _;
  }
  function Ka(_, e) {
    return N(_, e);
  }
  function Za(_) {
    return BigInt.asUintN(64, _);
  }
  function eb() {
    const _ = u.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function _b(_, e, t) {
    u.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function tb(_, e, t) {
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
  ], rb = [
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
  ], nb = [
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
      for (let b = 1; b < n; b++) a += ", " + D_(_[b]);
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
  function ab(_, e) {
    return _ = _ >>> 0, cb().subarray(_ / 4, _ / 4 + e);
  }
  function W_(_, e) {
    return _ = _ >>> 0, pe().subarray(_ / 1, _ / 1 + e);
  }
  let oe = null;
  function z() {
    return (oe === null || oe.buffer.detached === true || oe.buffer.detached === void 0 && oe.buffer !== u.memory.buffer) && (oe = new DataView(u.memory.buffer)), oe;
  }
  let Me = null;
  function bb() {
    return (Me === null || Me.byteLength === 0) && (Me = new Float64Array(u.memory.buffer)), Me;
  }
  function N(_, e) {
    return sb(_ >>> 0, e);
  }
  let Ce = null;
  function cb() {
    return (Ce === null || Ce.byteLength === 0) && (Ce = new Uint32Array(u.memory.buffer)), Ce;
  }
  let Re = null;
  function pe() {
    return (Re === null || Re.byteLength === 0) && (Re = new Uint8Array(u.memory.buffer)), Re;
  }
  function G(_, e) {
    try {
      return _.apply(this, e);
    } catch (t) {
      const r = Fe(t);
      u.__wbindgen_exn_store(r);
    }
  }
  function U(_) {
    return _ == null;
  }
  function Ct(_, e, t) {
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
      --r.cnt === 0 && (u.__wbindgen_destroy_closure(r.a, r.b), r.a = 0, gt.unregister(r));
    }, gt.register(n, r, r), n;
  }
  function u_(_, e) {
    const t = e(_.length * 1, 1) >>> 0;
    return pe().set(_, t / 1), O = _.length, t;
  }
  function Ve(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return bb().set(_, t / 8), O = _.length, t;
  }
  function o_(_, e, t) {
    if (t === void 0) {
      const c = Se.encode(_), o = e(c.length, 1) >>> 0;
      return pe().subarray(o, o + c.length).set(c), O = c.length, o;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = pe();
    let b = 0;
    for (; b < r; b++) {
      const c = _.charCodeAt(b);
      if (c > 127) break;
      a[n + b] = c;
    }
    if (b !== r) {
      b !== 0 && (_ = _.slice(b)), n = t(n, r, r = b + _.length * 3, 1) >>> 0;
      const c = pe().subarray(n + b, n + r), o = Se.encodeInto(_, c);
      b += o.written, n = t(n, r, b, 1) >>> 0;
    }
    return O = b, n;
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
  const ob = 2146435072;
  let d_ = 0;
  function sb(_, e) {
    return d_ += e, d_ >= ob && (t_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), t_.decode(), d_ = e), t_.decode(pe().subarray(_, _ + e));
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
  function ib(_) {
    u = _;
  }
  URL = globalThis.URL;
  const fb = await L_({
    "./proteus_sdk_web_bg.js": {
      __wbg_next_0c4066e251d2eff9: bn,
      __wbg_done_b62d4a7d2286852a: Cr,
      __wbg_value_49f783bb59765962: Ha,
      __wbg_length_c6054974c0a6cdb9: Zr,
      __wbg_instanceof_Map_afa18d5840c04c15: jr,
      __wbg_get_unchecked_54a4374c38e08460: Ur,
      __wbg_set_dc601f4a69da0bc2: En,
      __wbg_call_8e98ed2f3c86c4b5: Tr,
      __wbg_call_5575218572ead796: Ir,
      __wbg_call_0e855b388e315e17: Ar,
      __wbg_get_with_ref_key_6412cf3094599694: qr,
      __wbg_set_6be42768c690e380: Sn,
      __wbg_get_197a3fe98f169e38: Wr,
      __wbg_String_8564e559799eccda: or,
      __wbg_set_texture_16d2be474ce6ad0c: Aa,
      __wbg_set_mip_level_246db61be15bdd69: ba,
      __wbg_set_x_56f0c2c08a62725c: Ma,
      __wbg_set_y_04fb8ce84735b4e1: Ca,
      __wbg_set_z_a51316db27a4941e: Ra,
      __wbg_set_origin_9b3b0fbe0a5dc469: fa,
      __wbg_set_aspect_77332ac136ee94eb: In,
      __wbg_set_a_5f6e488475272136: vn,
      __wbg_set_b_688365d692bba214: Dn,
      __wbg_set_g_d4d1d77cf8fdd362: Xn,
      __wbg_set_r_527e5a41c4b1a846: da,
      __wbg_set_width_1a5e2e86fa5bdcd8: ka,
      __wbg_set_height_e8b5483b8c117d5e: Yn,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: Gn,
      __wbg_set_format_e9d4b1475bb3bd3b: Qn,
      __wbg_set_size_a61ff22205255d61: ha,
      __wbg_set_usage_7fa9cd18d1104aca: Da,
      __wbg_set_label_0c1bd0e976cf0a9a: Zn,
      __wbg_set_dimension_36e13ccecae5af4b: Hn,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: oa,
      __wbg_set_sample_count_865e1d19b84e27e6: la,
      __wbg_push_f724b5db8acf89d2: fn,
      __wbg_set_view_formats_bab284fc81b40e70: Pa,
      __wbg_createTexture_9e76b80a2dc0d12e: Pr,
      __wbg_set_entries_fc76ca4d7da6a709: Nn,
      __wbg_set_layout_eeef59714f5bf48b: na,
      __wbg_set_label_f92ae11c77d74198: ra,
      __wbg_createBindGroup_2320df4db188406c: Br,
      __wbg_set_label_d1c24b5a7a3ac31d: ta,
      __wbg_createCommandEncoder_cd88faca35d9ed68: Fr,
      __wbg_set_color_attachments_abe67f6631926e28: Vn,
      __wbg_set_label_8fd860a36d2c7b74: _a,
      __wbg_set_view_dbd0294573f64d05: Fa,
      __wbg_set_depth_clear_value_442bf492734f63b6: Ln,
      __wbg_set_depth_load_op_34d430b74bb36d91: On,
      __wbg_set_depth_store_op_0ea0a215313dbda7: Un,
      __wbg_set_depth_read_only_138a11b10c731094: Wn,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: xa,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: ya,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: Sa,
      __wbg_set_stencil_read_only_fb489d191b6d969b: $a,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: zn,
      __wbg_set_query_set_18679a8580267d5a: ua,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: Pn,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: jn,
      __wbg_set_timestamp_writes_c552d52fbb417005: Ia,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: vr,
      __wbg_copyTextureToTexture_1be188df1e535c0a: Dr,
      __wbg_label_47480289cc2bce71: Yr,
      __wbg_set_label_2d2227f4d5991e50: ea,
      __wbg_finish_cfaeede3baf55be1: Or,
      __wbg_finish_087cb89c65c06eb1: Lr,
      __wbg_drawIndexed_68637ebab6dd8d6e: Rr,
      __wbg_setPipeline_bab24dbce96903b9: hn,
      __wbg_setViewport_f9d423db4f4b4b58: $n,
      __wbg_setBindGroup_4ba56e1e0d26f244: wn,
      __wbg_setBindGroup_6124849cc8547086: pn,
      __wbg_setIndexBuffer_17431786d06c1b7c: ln,
      __wbg_setIndexBuffer_a16ed5b869c87507: mn,
      __wbg_setVertexBuffer_b508baf8d0ffe331: yn,
      __wbg_setVertexBuffer_91c4b602d0289943: xn,
      __wbg_end_414453a89205612c: Vr,
      __wbg_writeBuffer_b4bdd36178348ca5: ja,
      __wbg_set_bytes_per_row_91681ca78d744888: Cn,
      __wbg_set_rows_per_image_d198b7e73a38978b: pa,
      __wbg_set_offset_a097a8050a3a9a33: ia,
      __wbg_writeTexture_b45b69132e46a227: Na,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: on,
      __wbg_submit_1290d44bb76ecef4: Ga,
      __wbg_getMappedRange_5ed22727c9679168: Gr,
      __wbg_unmap_8f06698a75b8331a: qa,
      __wbg_destroy_b5b39f25f0799295: Mr,
      __wbg_mapAsync_bb0029907dd91181: en,
      __wbg_set_dimension_174ad7e2fb67fb4e: qn,
      __wbg_set_format_90860b0321868db4: Jn,
      __wbg_set_aspect_a823a14d00d42d37: Tn,
      __wbg_set_base_array_layer_cc6c68d233489c4b: Bn,
      __wbg_set_array_layer_count_daec613068108a9d: An,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: Fn,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: ca,
      __wbg_set_label_03d2396d4655a3e1: Kn,
      __wbg_set_usage_7f0dda8309469b1c: Ta,
      __wbg_createView_cc96b5bdd3d5bf5e: kr,
      __wbg_then_05edfc8a4fea5106: Wa,
      __wbg_set_load_op_56844f51434037bf: aa,
      __wbg_set_store_op_caeede4654b3d847: va,
      __wbg_set_view_bdeab150b5f0768c: Ba,
      __wbg_set_clear_value_642701f928a5ccb3: Rn,
      __wbg_set_resolve_target_fe76b3f99cf72078: ga,
      __wbg_set_buffer_55f096330c8912b4: Mn,
      __wbg_set_offset_73156b0e0b41d79a: sa,
      __wbg_set_size_1e6281b07cd39177: ma,
      __wbg_set_binding_f3c188a8cd21455b: kn,
      __wbg_set_resource_fe385d2e3dadaf63: wa,
      __wbg_resolve_d82363d90af6928a: gn,
      __wbg_then_591b6b3a75ee817a: Ua,
      __wbg_iterator_cc47ba25a2be735a: Xr,
      __wbg_get_9a29be2cb383ed9a: zr,
      __wbg_next_402fa10b59ab20c3: cn,
      __wbg_new_2e117a478906f062: _n,
      __wbg_new_36e147a8ced3c6e0: tn,
      __wbg_isArray_145a34fd0a38d37b: Jr,
      __wbg_new_e66a4b7758dd2e5c: nn,
      __wbg_isSafeInteger_a3389a198582f5f6: Qr,
      __wbg_entries_c261c3fa1f281256: Er,
      __wbg_then_2a84678a50976959: za,
      __wbg_length_589238bdcf171f0e: Kr,
      __wbg_prototypesetcall_d721637c7ca66eb8: sn,
      __wbg_new_81880fb5002cb255: rn,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: an,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: Va,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: La,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Ea,
      __wbg_static_accessor_WINDOW_168f178805d978fe: Oa,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: Hr,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: Nr,
      __wbg_queueMicrotask_1c9b3800e321a967: un,
      __wbg_queueMicrotask_311744e534a929a3: dn,
      __wbg___wbindgen_number_get_1cc01dd708740256: xr,
      __wbg___wbindgen_in_4990f46af709e33c: ur,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: $r,
      __wbg___wbindgen_is_null_6d937fbfb6478470: wr,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: mr,
      __wbg_Number_c4bdf66bb78f7977: cr,
      __wbg_Error_fdd633d4bb5dd76a: br,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: dr,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: pr,
      __wbg___wbindgen_string_get_71bb4348194e31f0: yr,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: ir,
      __wbg___wbindgen_is_function_acc5528be2b923f2: gr,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: lr,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: hr,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: sr,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: Sr,
      __wbg___wbindgen_debug_string_8a447059637473e2: fr,
      __wbindgen_init_externref_table: eb,
      __wbindgen_cast_0000000000000001: Ja,
      __wbindgen_cast_0000000000000002: Qa,
      __wbindgen_cast_0000000000000003: Xa,
      __wbindgen_cast_0000000000000004: Ya,
      __wbindgen_cast_0000000000000005: Ka,
      __wbindgen_cast_0000000000000006: Za
    }
  }, ar), { memory: ub, __wbg_proteusapp_free: db, proteusapp_addChild: gb, proteusapp_animateTo: wb, proteusapp_bakeTexture: pb, proteusapp_bakedImageSize: lb, proteusapp_bakedTextSize: mb, proteusapp_channelDestroy: hb, proteusapp_channelSet: xb, proteusapp_component: yb, proteusapp_copyBakedImageFrom: $b, proteusapp_createVideo: Sb, proteusapp_cropImage: vb, proteusapp_declareGeometry: Ab, proteusapp_declaredGeometry: Ib, proteusapp_destroy: Tb, proteusapp_freeResources: Db, proteusapp_get: Bb, proteusapp_hideVideo: Fb, proteusapp_loadTexture: Pb, proteusapp_mergeFrom: kb, proteusapp_mergeFromWithBehavior: Mb, proteusapp_new: Cb, proteusapp_onBlur: Rb, proteusapp_onClick: Vb, proteusapp_onDrag: Eb, proteusapp_onDropped: Lb, proteusapp_onFocus: Ob, proteusapp_onHoverEnter: Gb, proteusapp_onHoverExit: Wb, proteusapp_onPress: zb, proteusapp_onRelease: Ub, proteusapp_onTransitionComplete: qb, proteusapp_pointerLeft: Hb, proteusapp_pointerMoved: jb, proteusapp_pointerPressed: Nb, proteusapp_pointerReleased: Jb, proteusapp_releaseVideo: Qb, proteusapp_removeChild: Xb, proteusapp_setDeclaredGeometry: Yb, proteusapp_setDisabled: Kb, proteusapp_setImage: Zb, proteusapp_setInteractive: ec, proteusapp_setOpacity: _c, proteusapp_setText: tc, proteusapp_setTexture: rc, proteusapp_setTransitionInteraction: nc, proteusapp_setVideoCrossfade: ac, proteusapp_setVisible: bc, proteusapp_showVideo: cc, proteusapp_splitTo: oc, proteusapp_splitToWithBehavior: sc, proteusapp_splitToWithStates: ic, proteusapp_texture: fc, proteusapp_textureState: uc, proteusapp_tick: dc, proteusapp_transitionChannel: gc, proteusapp_uploadVideoFrame: wc, __wbg_handle_free: pc, __wbg_texturehandle_free: lc, __wbg_transitionchannel_free: mc, __wbg_videohandle_free: hc, handle_fromId: xc, handle_id: yc, texturehandle_fromId: $c, texturehandle_id: Sc, __abort_handler: vc, __instance_terminated: Ac, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Ic, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Tc, __wbindgen_malloc: Dc, __wbindgen_realloc: Bc, __wbindgen_exn_store: Fc, __externref_table_alloc: Pc, __wbindgen_externrefs: kc, __wbindgen_destroy_closure: Mc, __externref_table_dealloc: Cc, __wbindgen_start: Rt } = fb, Rc = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: vc,
    __externref_table_alloc: Pc,
    __externref_table_dealloc: Cc,
    __instance_terminated: Ac,
    __wbg_handle_free: pc,
    __wbg_proteusapp_free: db,
    __wbg_texturehandle_free: lc,
    __wbg_transitionchannel_free: mc,
    __wbg_videohandle_free: hc,
    __wbindgen_destroy_closure: Mc,
    __wbindgen_exn_store: Fc,
    __wbindgen_externrefs: kc,
    __wbindgen_malloc: Dc,
    __wbindgen_realloc: Bc,
    __wbindgen_start: Rt,
    handle_fromId: xc,
    handle_id: yc,
    memory: ub,
    proteusapp_addChild: gb,
    proteusapp_animateTo: wb,
    proteusapp_bakeTexture: pb,
    proteusapp_bakedImageSize: lb,
    proteusapp_bakedTextSize: mb,
    proteusapp_channelDestroy: hb,
    proteusapp_channelSet: xb,
    proteusapp_component: yb,
    proteusapp_copyBakedImageFrom: $b,
    proteusapp_createVideo: Sb,
    proteusapp_cropImage: vb,
    proteusapp_declareGeometry: Ab,
    proteusapp_declaredGeometry: Ib,
    proteusapp_destroy: Tb,
    proteusapp_freeResources: Db,
    proteusapp_get: Bb,
    proteusapp_hideVideo: Fb,
    proteusapp_loadTexture: Pb,
    proteusapp_mergeFrom: kb,
    proteusapp_mergeFromWithBehavior: Mb,
    proteusapp_new: Cb,
    proteusapp_onBlur: Rb,
    proteusapp_onClick: Vb,
    proteusapp_onDrag: Eb,
    proteusapp_onDropped: Lb,
    proteusapp_onFocus: Ob,
    proteusapp_onHoverEnter: Gb,
    proteusapp_onHoverExit: Wb,
    proteusapp_onPress: zb,
    proteusapp_onRelease: Ub,
    proteusapp_onTransitionComplete: qb,
    proteusapp_pointerLeft: Hb,
    proteusapp_pointerMoved: jb,
    proteusapp_pointerPressed: Nb,
    proteusapp_pointerReleased: Jb,
    proteusapp_releaseVideo: Qb,
    proteusapp_removeChild: Xb,
    proteusapp_setDeclaredGeometry: Yb,
    proteusapp_setDisabled: Kb,
    proteusapp_setImage: Zb,
    proteusapp_setInteractive: ec,
    proteusapp_setOpacity: _c,
    proteusapp_setText: tc,
    proteusapp_setTexture: rc,
    proteusapp_setTransitionInteraction: nc,
    proteusapp_setVideoCrossfade: ac,
    proteusapp_setVisible: bc,
    proteusapp_showVideo: cc,
    proteusapp_splitTo: oc,
    proteusapp_splitToWithBehavior: sc,
    proteusapp_splitToWithStates: ic,
    proteusapp_texture: fc,
    proteusapp_textureState: uc,
    proteusapp_tick: dc,
    proteusapp_transitionChannel: gc,
    proteusapp_uploadVideoFrame: wc,
    texturehandle_fromId: $c,
    texturehandle_id: Sc,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Tc,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: Ic
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ib(Rc);
  Rt();
  const Vc = "" + new URL("proteus_host_web_bg-C1DZv60-.wasm", import.meta.url).href;
  let S = class B_ {
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
      f.__wbg_handle_free(e, 0);
    }
    static fromId(e) {
      const t = f.handle_fromId(e);
      return B_.__wrap(t);
    }
    id() {
      return f.handle_id(this.__wbg_ptr);
    }
  };
  Symbol.dispose && (S.prototype[Symbol.dispose] = S.prototype.free);
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
      f.__wbg_proteusapp_free(e, 0);
    }
    addChild(e, t) {
      l(e, S), l(t, S);
      const r = f.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw F(r[0]);
    }
    animateTo(e, t, r) {
      l(e, S);
      const n = f.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, r);
      if (n[1]) throw F(n[0]);
    }
    bakeTexture(e, t, r, n) {
      const a = w_(r, f.__wbindgen_malloc), b = V, c = f.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, b, n);
      return re.__wrap(c);
    }
    bakedImageSize(e) {
      return l(e, S), f.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return l(e, S), f.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    channelDestroy(e) {
      l(e, de);
      var t = e.__destroy_into_raw();
      f.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      l(e, de), l(t, S), l(r, S);
      const b = f.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (b[1]) throw F(b[0]);
    }
    component(e) {
      const t = f.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw F(t[1]);
      return S.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      l(e, S), l(t, S);
      const r = f.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    createVideo() {
      const e = f.proteusapp_createVideo(this.__wbg_ptr);
      return ge.__wrap(e);
    }
    cropImage(e, t) {
      l(e, S);
      const r = f.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    declareGeometry(e, t) {
      l(e, S);
      const r = f.proteusapp_declareGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    declaredGeometry(e) {
      return l(e, S), f.proteusapp_declaredGeometry(this.__wbg_ptr, e.__wbg_ptr);
    }
    destroy(e) {
      l(e, S);
      var t = e.__destroy_into_raw();
      const r = f.proteusapp_destroy(this.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    freeResources(e) {
      l(e, S);
      const t = f.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
    }
    get(e) {
      return l(e, S), f.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      l(e, S);
      const t = f.proteusapp_hideVideo(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw F(t[0]);
    }
    loadTexture(e, t) {
      const r = w_(e, f.__wbindgen_malloc), n = V, a = f.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : re.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      l(e, S);
      const a = He(t, f.__wbindgen_malloc), b = V, c = f.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, b, r, n);
      if (c[1]) throw F(c[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      l(e, S);
      const b = He(t, f.__wbindgen_malloc), c = V, o = f.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, b, c, r, n, a);
      if (o[1]) throw F(o[0]);
    }
    constructor() {
      const e = f.proteusapp_new();
      return this.__wbg_ptr = e, g_.register(this, this.__wbg_ptr, this), this;
    }
    onBlur(e, t) {
      l(e, S), f.proteusapp_onBlur(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onClick(e, t) {
      l(e, S), f.proteusapp_onClick(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDrag(e, t) {
      l(e, S), f.proteusapp_onDrag(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDropped(e, t) {
      l(e, de), f.proteusapp_onDropped(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocus(e, t) {
      l(e, S), f.proteusapp_onFocus(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverEnter(e, t) {
      l(e, S), f.proteusapp_onHoverEnter(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverExit(e, t) {
      l(e, S), f.proteusapp_onHoverExit(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onPress(e, t) {
      l(e, S), f.proteusapp_onPress(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onRelease(e, t) {
      l(e, S), f.proteusapp_onRelease(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onTransitionComplete(e, t) {
      l(e, S), f.proteusapp_onTransitionComplete(this.__wbg_ptr, e.__wbg_ptr, t);
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
      l(e, ge), f.proteusapp_releaseVideo(this.__wbg_ptr, e.__wbg_ptr);
    }
    removeChild(e, t) {
      l(e, S), l(t, S);
      const r = f.proteusapp_removeChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[1]) throw F(r[0]);
    }
    setDeclaredGeometry(e, t) {
      l(e, S);
      const r = f.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setDisabled(e, t) {
      l(e, S);
      const r = f.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setImage(e, t) {
      l(e, S);
      const r = f.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setInteractive(e, t) {
      l(e, S);
      const r = f.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setOpacity(e, t) {
      l(e, S);
      const r = f.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setText(e, t) {
      l(e, S);
      const r = f.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setTexture(e, t) {
      l(e, S), l(t, re);
      const r = f.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      l(e, S);
      const r = f.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    setVideoCrossfade(e, t) {
      l(e, S);
      const r = f.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    setVisible(e, t) {
      l(e, S);
      const r = f.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (r[1]) throw F(r[0]);
    }
    showVideo(e, t) {
      l(e, S), l(t, ge);
      const r = f.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw F(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      l(e, S);
      const a = He(t, f.__wbindgen_malloc), b = V, c = f.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, b, r, n);
      if (c[1]) throw F(c[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      l(e, S);
      const b = He(t, f.__wbindgen_malloc), c = V, o = f.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, b, c, r, n, a);
      if (o[1]) throw F(o[0]);
    }
    splitToWithStates(e, t, r, n) {
      l(e, S);
      const a = f.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, r, n);
      if (a[1]) throw F(a[0]);
    }
    texture(e) {
      const t = f.proteusapp_texture(this.__wbg_ptr, e);
      return re.__wrap(t);
    }
    textureState(e) {
      return l(e, re), f.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
    }
    tick(e) {
      f.proteusapp_tick(this.__wbg_ptr, e);
    }
    transitionChannel(e) {
      const t = f.proteusapp_transitionChannel(this.__wbg_ptr, !y(e), y(e) ? 0 : e);
      return de.__wrap(t);
    }
    uploadVideoFrame(e, t, r, n) {
      l(e, ge);
      const a = w_(n, f.__wbindgen_malloc), b = V;
      return f.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, b) !== 0;
    }
  };
  Symbol.dispose && (F_.prototype[Symbol.dispose] = F_.prototype.free);
  let re = class P_ {
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
      f.__wbg_texturehandle_free(e, 0);
    }
    static fromId(e) {
      const t = f.texturehandle_fromId(e);
      return P_.__wrap(t);
    }
    id() {
      return f.texturehandle_id(this.__wbg_ptr);
    }
  };
  Symbol.dispose && (re.prototype[Symbol.dispose] = re.prototype.free);
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
      f.__wbg_transitionchannel_free(e, 0);
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
      f.__wbg_videohandle_free(e, 0);
    }
  };
  Symbol.dispose && (ge.prototype[Symbol.dispose] = ge.prototype.free);
  function Ec(_, e, t, r) {
    const n = H(_, f.__wbindgen_malloc, f.__wbindgen_realloc), a = V;
    return f.mount(n, a, e, y(t) ? 0 : T(t), r);
  }
  function Lc(_, e) {
    return Error(I(_, e));
  }
  function Oc(_) {
    return Number(_);
  }
  function Gc(_, e) {
    const t = String(e), r = H(t, f.__wbindgen_malloc, f.__wbindgen_realloc), n = V;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function Wc(_) {
    return _.Window;
  }
  function zc(_) {
    return _.WorkerGlobalScope;
  }
  function Uc(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    C().setBigInt64(_ + 8, y(r) ? BigInt(0) : r, true), C().setInt32(_ + 0, !y(r), true);
  }
  function qc(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return y(t) ? 16777215 : t ? 1 : 0;
  }
  function Hc(_, e) {
    const t = k_(e), r = H(t, f.__wbindgen_malloc, f.__wbindgen_realloc), n = V;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function jc(_, e) {
    return _ in e;
  }
  function Nc(_) {
    return typeof _ == "bigint";
  }
  function Jc(_) {
    return typeof _ == "function";
  }
  function Qc(_) {
    return _ === null;
  }
  function Xc(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function Yc(_) {
    return _ === void 0;
  }
  function Kc(_, e) {
    return _ === e;
  }
  function Zc(_, e) {
    return _ == e;
  }
  function eo(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    C().setFloat64(_ + 8, y(r) ? 0 : r, true), C().setInt32(_ + 0, !y(r), true);
  }
  function _o(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = y(r) ? 0 : H(r, f.__wbindgen_malloc, f.__wbindgen_realloc), a = V;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function to(_, e) {
    throw new Error(I(_, e));
  }
  function ro(_) {
    _._wbg_cb_unref();
  }
  function no(_, e) {
    _.activeTexture(e >>> 0);
  }
  function ao(_, e) {
    _.activeTexture(e >>> 0);
  }
  function bo() {
    return w(function(_, e, t, r) {
      _.addEventListener(I(e, t), r);
    }, arguments);
  }
  function co(_, e, t) {
    _.attachShader(e, t);
  }
  function oo(_, e, t) {
    _.attachShader(e, t);
  }
  function so(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function io() {
    return w(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function fo(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, I(r, n));
  }
  function uo(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, I(r, n));
  }
  function go(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function wo(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function po(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function lo(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function mo(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function ho(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function xo(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function yo(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function $o(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function So(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function vo(_, e) {
    _.bindVertexArrayOES(e);
  }
  function Ao(_, e) {
    _.bindVertexArray(e);
  }
  function Io(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function To(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function Do(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Bo(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Fo(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Po(_, e) {
    _.blendEquation(e >>> 0);
  }
  function ko(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Mo(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function Co(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function Ro(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function Vo(_, e, t, r, n, a, b, c, o, i, d) {
    _.blitFramebuffer(e, t, r, n, a, b, c, o, i >>> 0, d >>> 0);
  }
  function Eo(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Lo(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Oo(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Go(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function Wo(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function zo(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function Uo(_) {
    return _.button;
  }
  function qo() {
    return w(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function Ho() {
    return w(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function jo() {
    return w(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function No(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, E(r, n));
  }
  function Jo(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, K(r, n));
  }
  function Qo(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, ye(r, n));
  }
  function Xo(_, e) {
    _.clearDepth(e);
  }
  function Yo(_, e) {
    _.clearDepth(e);
  }
  function Ko(_, e) {
    _.clearStencil(e);
  }
  function Zo(_, e) {
    _.clearStencil(e);
  }
  function es(_, e) {
    _.clear(e >>> 0);
  }
  function _s(_, e) {
    _.clear(e >>> 0);
  }
  function ts(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function rs(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function ns(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function as(_, e) {
    _.compileShader(e);
  }
  function bs(_, e) {
    _.compileShader(e);
  }
  function cs(_, e, t, r, n, a, b, c, o) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o);
  }
  function os(_, e, t, r, n, a, b, c, o) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o);
  }
  function ss(_, e, t, r, n, a, b, c, o, i) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o, i);
  }
  function is(_, e, t, r, n, a, b, c, o, i, d, v) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, b, c, o, i >>> 0, d, v);
  }
  function fs(_, e, t, r, n, a, b, c, o, i, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, b, c, o, i >>> 0, d);
  }
  function us() {
    return w(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function ds(_) {
    return _.contentRect;
  }
  function gs(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function ws(_, e, t, r, n, a, b, c, o) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, b, c, o);
  }
  function ps(_, e, t, r, n, a, b, c, o) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, b, c, o);
  }
  function ls(_, e, t, r, n, a, b, c, o, i) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, b, c, o, i);
  }
  function ms() {
    return w(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function hs() {
    return w(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function xs(_, e) {
    return _.createBindGroup(e);
  }
  function ys(_) {
    const e = _.createBuffer();
    return y(e) ? 0 : T(e);
  }
  function $s() {
    return w(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function Ss(_) {
    const e = _.createBuffer();
    return y(e) ? 0 : T(e);
  }
  function vs(_, e) {
    return _.createCommandEncoder(e);
  }
  function As(_) {
    const e = _.createFramebuffer();
    return y(e) ? 0 : T(e);
  }
  function Is(_) {
    const e = _.createFramebuffer();
    return y(e) ? 0 : T(e);
  }
  function Ts(_, e) {
    return _.createPipelineLayout(e);
  }
  function Ds(_) {
    const e = _.createProgram();
    return y(e) ? 0 : T(e);
  }
  function Bs(_) {
    const e = _.createProgram();
    return y(e) ? 0 : T(e);
  }
  function Fs(_) {
    const e = _.createQuery();
    return y(e) ? 0 : T(e);
  }
  function Ps() {
    return w(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function ks(_) {
    const e = _.createRenderbuffer();
    return y(e) ? 0 : T(e);
  }
  function Ms(_) {
    const e = _.createRenderbuffer();
    return y(e) ? 0 : T(e);
  }
  function Cs(_, e) {
    return _.createSampler(e);
  }
  function Rs(_) {
    const e = _.createSampler();
    return y(e) ? 0 : T(e);
  }
  function Vs(_, e) {
    return _.createShaderModule(e);
  }
  function Es(_, e) {
    const t = _.createShader(e >>> 0);
    return y(t) ? 0 : T(t);
  }
  function Ls(_, e) {
    const t = _.createShader(e >>> 0);
    return y(t) ? 0 : T(t);
  }
  function Os(_) {
    const e = _.createTexture();
    return y(e) ? 0 : T(e);
  }
  function Gs(_) {
    const e = _.createTexture();
    return y(e) ? 0 : T(e);
  }
  function Ws() {
    return w(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function zs(_) {
    const e = _.createVertexArrayOES();
    return y(e) ? 0 : T(e);
  }
  function Us(_) {
    const e = _.createVertexArray();
    return y(e) ? 0 : T(e);
  }
  function qs() {
    return w(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function Hs(_, e) {
    _.cullFace(e >>> 0);
  }
  function js(_, e) {
    _.cullFace(e >>> 0);
  }
  function Ns(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function Js(_, e) {
    _.deleteBuffer(e);
  }
  function Qs(_, e) {
    _.deleteBuffer(e);
  }
  function Xs(_, e) {
    _.deleteFramebuffer(e);
  }
  function Ys(_, e) {
    _.deleteFramebuffer(e);
  }
  function Ks(_, e) {
    _.deleteProgram(e);
  }
  function Zs(_, e) {
    _.deleteProgram(e);
  }
  function ei(_, e) {
    _.deleteQuery(e);
  }
  function _i(_, e) {
    _.deleteRenderbuffer(e);
  }
  function ti(_, e) {
    _.deleteRenderbuffer(e);
  }
  function ri(_, e) {
    _.deleteSampler(e);
  }
  function ni(_, e) {
    _.deleteShader(e);
  }
  function ai(_, e) {
    _.deleteShader(e);
  }
  function bi(_, e) {
    _.deleteSync(e);
  }
  function ci(_, e) {
    _.deleteTexture(e);
  }
  function oi(_, e) {
    _.deleteTexture(e);
  }
  function si(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function ii(_, e) {
    _.deleteVertexArray(e);
  }
  function fi(_, e) {
    _.depthFunc(e >>> 0);
  }
  function ui(_, e) {
    _.depthFunc(e >>> 0);
  }
  function di(_, e) {
    _.depthMask(e !== 0);
  }
  function gi(_, e) {
    _.depthMask(e !== 0);
  }
  function wi(_, e, t) {
    _.depthRange(e, t);
  }
  function pi(_, e, t) {
    _.depthRange(e, t);
  }
  function li(_, e) {
    const t = e.description, r = H(t, f.__wbindgen_malloc, f.__wbindgen_realloc), n = V;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function mi(_) {
    _.destroy();
  }
  function hi(_) {
    return _.devicePixelRatio;
  }
  function xi(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function yi(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function $i(_, e) {
    _.disable(e >>> 0);
  }
  function Si(_, e) {
    _.disable(e >>> 0);
  }
  function vi(_) {
    const e = _.document;
    return y(e) ? 0 : T(e);
  }
  function Ai(_) {
    return _.done;
  }
  function Ii(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function Ti(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function Di(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function Bi(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function Fi(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function Pi(_, e) {
    _.drawBuffers(e);
  }
  function ki(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function Mi(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function Ci(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function Ri(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function Vi(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function Ei(_, e) {
    _.enable(e >>> 0);
  }
  function Li(_, e) {
    _.enable(e >>> 0);
  }
  function Oi(_, e) {
    _.endQuery(e >>> 0);
  }
  function Gi(_) {
    _.end();
  }
  function Wi(_) {
    return Object.entries(_);
  }
  function zi(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function Ui(_) {
    console.error(_);
  }
  function qi(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(I(_, e));
    } finally {
      f.__wbindgen_free(t, r, 1);
    }
  }
  function Hi(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return y(r) ? 0 : T(r);
  }
  function ji(_) {
    return _.finish();
  }
  function Ni(_, e) {
    return _.finish(e);
  }
  function Ji(_) {
    _.flush();
  }
  function Qi(_) {
    _.flush();
  }
  function Xi(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function Yi(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function Ki(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function Zi(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function ef(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function _f(_, e, t, r, n, a, b) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, b);
  }
  function tf(_, e) {
    _.frontFace(e >>> 0);
  }
  function rf(_, e) {
    _.frontFace(e >>> 0);
  }
  function nf(_) {
    return _.getBoundingClientRect();
  }
  function af(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function bf() {
    return w(function(_, e, t, r) {
      const n = _.getContext(I(e, t), r);
      return y(n) ? 0 : T(n);
    }, arguments);
  }
  function cf() {
    return w(function(_, e, t) {
      const r = _.getContext(I(e, t));
      return y(r) ? 0 : T(r);
    }, arguments);
  }
  function of() {
    return w(function(_, e, t) {
      const r = _.getContext(I(e, t));
      return y(r) ? 0 : T(r);
    }, arguments);
  }
  function sf() {
    return w(function(_, e, t, r) {
      const n = _.getContext(I(e, t), r);
      return y(n) ? 0 : T(n);
    }, arguments);
  }
  function ff() {
    return w(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function uf(_, e, t) {
    const r = _.getElementById(I(e, t));
    return y(r) ? 0 : T(r);
  }
  function df() {
    return w(function(_, e, t) {
      const r = _.getExtension(I(e, t));
      return y(r) ? 0 : T(r);
    }, arguments);
  }
  function gf() {
    return w(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function wf() {
    return w(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function pf() {
    return w(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function lf() {
    return w(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function mf(_) {
    const e = _.getPreferredCanvasFormat();
    return (ne.indexOf(e) + 1 || 96) - 1;
  }
  function hf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = y(r) ? 0 : H(r, f.__wbindgen_malloc, f.__wbindgen_realloc), a = V;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function xf(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = y(r) ? 0 : H(r, f.__wbindgen_malloc, f.__wbindgen_realloc), a = V;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function yf(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function $f(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function Sf(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function vf(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = y(r) ? 0 : H(r, f.__wbindgen_malloc, f.__wbindgen_realloc), a = V;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function Af(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = y(r) ? 0 : H(r, f.__wbindgen_malloc, f.__wbindgen_realloc), a = V;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, n, true);
  }
  function If(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function Tf(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function Df(_) {
    const e = _.getSupportedExtensions();
    return y(e) ? 0 : T(e);
  }
  function Bf(_) {
    const e = _.getSupportedProfiles();
    return y(e) ? 0 : T(e);
  }
  function Ff(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function Pf(_, e, t, r) {
    return _.getUniformBlockIndex(e, I(t, r));
  }
  function kf(_, e, t, r) {
    const n = _.getUniformLocation(e, I(t, r));
    return y(n) ? 0 : T(n);
  }
  function Mf(_, e, t, r) {
    const n = _.getUniformLocation(e, I(t, r));
    return y(n) ? 0 : T(n);
  }
  function Cf(_, e) {
    return _[e >>> 0];
  }
  function Rf(_, e) {
    const t = _[e >>> 0];
    return y(t) ? 0 : T(t);
  }
  function Vf() {
    return w(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function Ef(_, e) {
    return _[e >>> 0];
  }
  function Lf(_, e) {
    return _[e];
  }
  function Of(_) {
    return _.gpu;
  }
  function Gf(_) {
    return _.height;
  }
  function Wf(_) {
    return _.height;
  }
  function zf(_) {
    return _.hidden;
  }
  function Uf(_, e, t) {
    return _.includes(e, t);
  }
  function qf(_) {
    return _.info;
  }
  function Hf(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function jf(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function Nf(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function Jf(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Qf(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function Xf(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function Yf(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function Kf(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function Zf(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function eu(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function _u() {
    return w(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function tu(_) {
    return Array.isArray(_);
  }
  function ru(_) {
    return Number.isSafeInteger(_);
  }
  function nu(_, e) {
    return Object.is(_, e);
  }
  function au() {
    return Symbol.iterator;
  }
  function bu(_, e) {
    const t = e.label, r = H(t, f.__wbindgen_malloc, f.__wbindgen_realloc), n = V;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function cu(_) {
    return _.length;
  }
  function ou(_) {
    return _.length;
  }
  function su(_) {
    return _.limits;
  }
  function iu(_) {
    return _.limits;
  }
  function fu(_, e) {
    _.linkProgram(e);
  }
  function uu(_, e) {
    _.linkProgram(e);
  }
  function du(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function gu(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function wu(_) {
    return _.maxBindGroups;
  }
  function pu(_) {
    return _.maxBindingsPerBindGroup;
  }
  function lu(_) {
    return _.maxBufferSize;
  }
  function mu(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function hu(_) {
    return _.maxColorAttachments;
  }
  function xu(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function yu(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function $u(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function Su(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function vu(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function Au(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function Iu(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function Tu(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function Du(_) {
    return _.maxInterStageShaderVariables;
  }
  function Bu(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function Fu(_) {
    return _.maxSamplersPerShaderStage;
  }
  function Pu(_) {
    return _.maxStorageBufferBindingSize;
  }
  function ku(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function Mu(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function Cu(_) {
    return _.maxTextureArrayLayers;
  }
  function Ru(_) {
    return _.maxTextureDimension1D;
  }
  function Vu(_) {
    return _.maxTextureDimension2D;
  }
  function Eu(_) {
    return _.maxTextureDimension3D;
  }
  function Lu(_) {
    return _.maxUniformBufferBindingSize;
  }
  function Ou(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function Gu(_) {
    return _.maxVertexAttributes;
  }
  function Wu(_) {
    return _.maxVertexBufferArrayStride;
  }
  function zu(_) {
    return _.maxVertexBuffers;
  }
  function Uu(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function qu(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function Hu(_) {
    return _.navigator;
  }
  function ju(_) {
    return _.navigator;
  }
  function Nu() {
    return w(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function Ju() {
    return new Error();
  }
  function Qu() {
    return new Object();
  }
  function Xu() {
    return new Array();
  }
  function Yu(_) {
    return new Uint8Array(_);
  }
  function Ku(_, e) {
    return new Error(I(_, e));
  }
  function Zu(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, b) => {
        const c = t.a;
        t.a = 0;
        try {
          return i2(c, t.b, a, b);
        } finally {
          t.a = c;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function ed(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function _d() {
    return w(function(_) {
      return _.next();
    }, arguments);
  }
  function td(_) {
    return _.next;
  }
  function rd(_, e) {
    _.observe(e);
  }
  function nd(_) {
    return Array.of(_);
  }
  function ad(_) {
    return _.offsetX;
  }
  function bd(_) {
    return _.offsetY;
  }
  function cd(_) {
    return _.onSubmittedWorkDone();
  }
  function od(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function sd(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function id(_, e, t) {
    _.polygonOffset(e, t);
  }
  function fd(_, e, t) {
    _.polygonOffset(e, t);
  }
  function ud(_) {
    _.preventDefault();
  }
  function dd(_) {
    return F_.__wrap(_);
  }
  function gd(_, e, t) {
    Uint8Array.prototype.set.call(s_(_, e), t);
  }
  function wd(_, e) {
    return _.push(e);
  }
  function pd(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function ld() {
    return w(function(_, e, t) {
      return _.querySelectorAll(I(e, t));
    }, arguments);
  }
  function md() {
    return w(function(_, e, t) {
      const r = _.querySelector(I(e, t));
      return y(r) ? 0 : T(r);
    }, arguments);
  }
  function hd(_) {
    return _.queueMicrotask;
  }
  function xd(_) {
    queueMicrotask(_);
  }
  function yd(_) {
    return _.queue;
  }
  function $d(_, e) {
    _.readBuffer(e >>> 0);
  }
  function Sd() {
    return w(function(_, e, t, r, n, a, b, c) {
      _.readPixels(e, t, r, n, a >>> 0, b >>> 0, c);
    }, arguments);
  }
  function vd() {
    return w(function(_, e, t, r, n, a, b, c) {
      _.readPixels(e, t, r, n, a >>> 0, b >>> 0, c);
    }, arguments);
  }
  function Ad() {
    return w(function(_, e, t, r, n, a, b, c) {
      _.readPixels(e, t, r, n, a >>> 0, b >>> 0, c);
    }, arguments);
  }
  function Id(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function Td(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function Dd(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function Bd(_, e) {
    return _.requestAdapter(e);
  }
  function Fd(_) {
    return _.requestAdapter();
  }
  function Pd() {
    return w(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function kd(_, e) {
    return _.requestDevice(e);
  }
  function Md(_) {
    return Promise.resolve(_);
  }
  function Cd(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function Rd(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function Vd(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function Ed(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function Ld() {
    return w(function(_, e, t, r, n, a, b) {
      _.setBindGroup(e >>> 0, t, ye(r, n), a, b >>> 0);
    }, arguments);
  }
  function Od(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function Gd(_, e, t, r, n) {
    _.setIndexBuffer(e, q_[t], r, n);
  }
  function Wd(_, e, t, r) {
    _.setIndexBuffer(e, q_[t], r);
  }
  function zd(_, e) {
    _.setPipeline(e);
  }
  function Ud(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function qd(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function Hd(_, e, t, r, n, a, b) {
    _.setViewport(e, t, r, n, a, b);
  }
  function jd(_, e, t) {
    _.set(e, t >>> 0);
  }
  function Nd() {
    return w(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function Jd(_, e, t) {
    _[e] = t;
  }
  function Qd(_, e) {
    _.a = e;
  }
  function Xd(_, e) {
    _.access = y2[e];
  }
  function Yd(_, e) {
    _.addressModeU = z_[e];
  }
  function Kd(_, e) {
    _.addressModeV = z_[e];
  }
  function Zd(_, e) {
    _.addressModeW = z_[e];
  }
  function e0(_, e) {
    _.alpha = e;
  }
  function _0(_, e) {
    _.alphaMode = g2[e];
  }
  function t0(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function r0(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function n0(_, e) {
    _.arrayStride = e;
  }
  function a0(_, e) {
    _.aspect = Wt[e];
  }
  function b0(_, e) {
    _.aspect = Wt[e];
  }
  function c0(_, e) {
    _.attributes = e;
  }
  function o0(_, e) {
    _.b = e;
  }
  function s0(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function i0(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function f0(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function u0(_, e) {
    _.bindGroupLayouts = e;
  }
  function d0(_, e) {
    _.binding = e >>> 0;
  }
  function g0(_, e) {
    _.binding = e >>> 0;
  }
  function w0(_, e) {
    _.blend = e;
  }
  function p0(_, e) {
    _.buffer = e;
  }
  function l0(_, e) {
    _.buffer = e;
  }
  function m0(_, e) {
    _.buffers = e;
  }
  function h0(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function x0(_, e) {
    _.clearValue = e;
  }
  function y0(_, e, t) {
    _.code = I(e, t);
  }
  function $0(_, e) {
    _.colorAttachments = e;
  }
  function S0(_, e) {
    _.color = e;
  }
  function v0(_, e) {
    _.compare = U_[e];
  }
  function A0(_, e) {
    _.compare = U_[e];
  }
  function I0(_, e) {
    _.count = e >>> 0;
  }
  function T0(_, e) {
    _.cullMode = w2[e];
  }
  function D0(_, e, t) {
    _[e >>> 0] = t;
  }
  function B0(_, e) {
    _.depthBias = e;
  }
  function F0(_, e) {
    _.depthBiasClamp = e;
  }
  function P0(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function k0(_, e) {
    _.depthClearValue = e;
  }
  function M0(_, e) {
    _.depthCompare = U_[e];
  }
  function C0(_, e) {
    _.depthFailOp = j_[e];
  }
  function R0(_, e) {
    _.depthLoadOp = H_[e];
  }
  function V0(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function E0(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function L0(_, e) {
    _.depthStencil = e;
  }
  function O0(_, e) {
    _.depthStencilAttachment = e;
  }
  function G0(_, e) {
    _.depthStoreOp = N_[e];
  }
  function W0(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function z0(_, e) {
    _.device = e;
  }
  function U0(_, e) {
    _.dimension = J_[e];
  }
  function q0(_, e) {
    _.dimension = $2[e];
  }
  function H0(_, e) {
    _.dstFactor = Ot[e];
  }
  function j0(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function N0(_, e) {
    _.entries = e;
  }
  function J0(_, e) {
    _.entries = e;
  }
  function Q0(_, e, t) {
    _.entryPoint = I(e, t);
  }
  function X0(_, e, t) {
    _.entryPoint = I(e, t);
  }
  function Y0(_, e) {
    _.externalTexture = e;
  }
  function K0(_, e) {
    _.failOp = j_[e];
  }
  function Z0(_, e) {
    _.format = ne[e];
  }
  function eg(_, e) {
    _.format = v2[e];
  }
  function _g(_, e) {
    _.format = ne[e];
  }
  function tg(_, e) {
    _.format = ne[e];
  }
  function rg(_, e) {
    _.format = ne[e];
  }
  function ng(_, e) {
    _.format = ne[e];
  }
  function ag(_, e) {
    _.format = ne[e];
  }
  function bg(_, e) {
    _.fragment = e;
  }
  function cg(_, e) {
    _.frontFace = p2[e];
  }
  function og(_, e) {
    _.g = e;
  }
  function sg(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function ig(_, e) {
    _.height = e >>> 0;
  }
  function fg(_, e) {
    _.height = e >>> 0;
  }
  function ug(_, e) {
    _.height = e >>> 0;
  }
  function dg(_, e, t) {
    _.label = I(e, t);
  }
  function gg(_, e, t) {
    _.label = I(e, t);
  }
  function wg(_, e, t) {
    _.label = I(e, t);
  }
  function pg(_, e, t) {
    _.label = I(e, t);
  }
  function lg(_, e, t) {
    _.label = I(e, t);
  }
  function mg(_, e, t) {
    _.label = I(e, t);
  }
  function hg(_, e, t) {
    _.label = I(e, t);
  }
  function xg(_, e, t) {
    _.label = I(e, t);
  }
  function yg(_, e, t) {
    _.label = I(e, t);
  }
  function $g(_, e, t) {
    _.label = I(e, t);
  }
  function Sg(_, e, t) {
    _.label = I(e, t);
  }
  function vg(_, e, t) {
    _.label = I(e, t);
  }
  function Ag(_, e, t) {
    _.label = I(e, t);
  }
  function Ig(_, e) {
    _.layout = e;
  }
  function Tg(_, e) {
    _.layout = e;
  }
  function Dg(_, e) {
    _.loadOp = H_[e];
  }
  function Bg(_, e) {
    _.lodMaxClamp = e;
  }
  function Fg(_, e) {
    _.lodMinClamp = e;
  }
  function Pg(_, e) {
    _.magFilter = Gt[e];
  }
  function kg(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function Mg(_, e) {
    _.mask = e >>> 0;
  }
  function Cg(_, e) {
    _.maxAnisotropy = e;
  }
  function Rg(_, e) {
    _.minBindingSize = e;
  }
  function Vg(_, e) {
    _.minFilter = Gt[e];
  }
  function Eg(_, e) {
    _.mipLevel = e >>> 0;
  }
  function Lg(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Og(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Gg(_, e) {
    _.mipmapFilter = l2[e];
  }
  function Wg(_, e) {
    _.module = e;
  }
  function zg(_, e) {
    _.module = e;
  }
  function Ug(_, e) {
    _.multisample = e;
  }
  function qg(_, e) {
    _.multisampled = e !== 0;
  }
  function Hg(_, e) {
    _.offset = e;
  }
  function jg(_, e) {
    _.offset = e;
  }
  function Ng(_, e) {
    _.offset = e;
  }
  function Jg(_, e) {
    _.operation = u2[e];
  }
  function Qg(_, e) {
    _.origin = e;
  }
  function Xg(_, e) {
    _.passOp = j_[e];
  }
  function Yg(_, e) {
    _.powerPreference = m2[e];
  }
  function Kg(_, e) {
    _.primitive = e;
  }
  function Zg(_, e) {
    _.querySet = e;
  }
  function ew(_, e) {
    _.r = e;
  }
  function _w(_, e) {
    _.requiredFeatures = e;
  }
  function tw(_, e) {
    _.requiredLimits = e;
  }
  function rw(_, e) {
    _.resolveTarget = e;
  }
  function nw(_, e) {
    _.resource = e;
  }
  function aw(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function bw(_, e) {
    _.sampleCount = e >>> 0;
  }
  function cw(_, e) {
    _.sampleType = S2[e];
  }
  function ow(_, e) {
    _.sampler = e;
  }
  function sw(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function iw(_, e) {
    _.size = e;
  }
  function fw(_, e) {
    _.size = e;
  }
  function uw(_, e) {
    _.size = e;
  }
  function dw(_, e) {
    _.srcFactor = Ot[e];
  }
  function gw(_, e) {
    _.stencilBack = e;
  }
  function ww(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function pw(_, e) {
    _.stencilFront = e;
  }
  function lw(_, e) {
    _.stencilLoadOp = H_[e];
  }
  function mw(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function hw(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function xw(_, e) {
    _.stencilStoreOp = N_[e];
  }
  function yw(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function $w(_, e) {
    _.stepMode = A2[e];
  }
  function Sw(_, e) {
    _.storageTexture = e;
  }
  function vw(_, e) {
    _.storeOp = N_[e];
  }
  function Aw(_, e) {
    _.stripIndexFormat = q_[e];
  }
  function Iw(_, e) {
    _.targets = e;
  }
  function Tw(_, e) {
    _.texture = e;
  }
  function Dw(_, e) {
    _.texture = e;
  }
  function Bw(_, e) {
    _.timestampWrites = e;
  }
  function Fw(_, e) {
    _.topology = h2[e];
  }
  function Pw(_, e) {
    _.type = d2[e];
  }
  function kw(_, e) {
    _.type = x2[e];
  }
  function Mw(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function Cw(_, e) {
    _.usage = e >>> 0;
  }
  function Rw(_, e) {
    _.usage = e >>> 0;
  }
  function Vw(_, e) {
    _.usage = e >>> 0;
  }
  function Ew(_, e) {
    _.usage = e >>> 0;
  }
  function Lw(_, e) {
    _.vertex = e;
  }
  function Ow(_, e) {
    _.view = e;
  }
  function Gw(_, e) {
    _.view = e;
  }
  function Ww(_, e) {
    _.viewDimension = J_[e];
  }
  function zw(_, e) {
    _.viewDimension = J_[e];
  }
  function Uw(_, e) {
    _.viewFormats = e;
  }
  function qw(_, e) {
    _.viewFormats = e;
  }
  function Hw(_, e) {
    _.visibility = e >>> 0;
  }
  function jw(_, e) {
    _.width = e >>> 0;
  }
  function Nw(_, e) {
    _.width = e >>> 0;
  }
  function Jw(_, e) {
    _.width = e >>> 0;
  }
  function Qw(_, e) {
    _.writeMask = e >>> 0;
  }
  function Xw(_, e) {
    _.x = e >>> 0;
  }
  function Yw(_, e) {
    _.y = e >>> 0;
  }
  function Kw(_, e) {
    _.z = e >>> 0;
  }
  function Zw(_, e, t, r) {
    _.shaderSource(e, I(t, r));
  }
  function e1(_, e, t, r) {
    _.shaderSource(e, I(t, r));
  }
  function _1(_, e) {
    const t = e.stack, r = H(t, f.__wbindgen_malloc, f.__wbindgen_realloc), n = V;
    C().setInt32(_ + 4, n, true), C().setInt32(_ + 0, r, true);
  }
  function t1() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return y(_) ? 0 : T(_);
  }
  function r1() {
    const _ = typeof global > "u" ? null : global;
    return y(_) ? 0 : T(_);
  }
  function n1() {
    const _ = typeof self > "u" ? null : self;
    return y(_) ? 0 : T(_);
  }
  function a1() {
    const _ = typeof window > "u" ? null : window;
    return y(_) ? 0 : T(_);
  }
  function b1(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function c1(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function o1(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function s1(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function i1(_, e) {
    _.stencilMask(e >>> 0);
  }
  function f1(_, e) {
    _.stencilMask(e >>> 0);
  }
  function u1(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function d1(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function g1(_, e) {
    _.submit(e);
  }
  function w1() {
    return w(function(_, e, t, r, n, a, b, c, o, i) {
      _.texImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function p1() {
    return w(function(_, e, t, r, n, a, b, c, o, i) {
      _.texImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function l1() {
    return w(function(_, e, t, r, n, a, b, c, o, i) {
      _.texImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function m1() {
    return w(function(_, e, t, r, n, a, b, c, o, i, d) {
      _.texImage3D(e >>> 0, t, r, n, a, b, c, o >>> 0, i >>> 0, d);
    }, arguments);
  }
  function h1() {
    return w(function(_, e, t, r, n, a, b, c, o, i, d) {
      _.texImage3D(e >>> 0, t, r, n, a, b, c, o >>> 0, i >>> 0, d);
    }, arguments);
  }
  function x1(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function y1(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function $1(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function S1(_, e, t, r, n, a, b) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, b);
  }
  function v1() {
    return w(function(_, e, t, r, n, a, b, c, o, i) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function A1() {
    return w(function(_, e, t, r, n, a, b, c, o, i) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function I1() {
    return w(function(_, e, t, r, n, a, b, c, o, i) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function T1() {
    return w(function(_, e, t, r, n, a, b, c, o, i) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function D1() {
    return w(function(_, e, t, r, n, a, b, c, o, i) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function B1() {
    return w(function(_, e, t, r, n, a, b, c, o, i) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function F1() {
    return w(function(_, e, t, r, n, a, b, c, o, i) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function P1() {
    return w(function(_, e, t, r, n, a, b, c, o, i) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function k1() {
    return w(function(_, e, t, r, n, a, b, c, o, i, d, v) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, c, o, i >>> 0, d >>> 0, v);
    }, arguments);
  }
  function M1() {
    return w(function(_, e, t, r, n, a, b, c, o, i, d, v) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, c, o, i >>> 0, d >>> 0, v);
    }, arguments);
  }
  function C1() {
    return w(function(_, e, t, r, n, a, b, c, o, i, d, v) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, c, o, i >>> 0, d >>> 0, v);
    }, arguments);
  }
  function R1() {
    return w(function(_, e, t, r, n, a, b, c, o, i, d, v) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, c, o, i >>> 0, d >>> 0, v);
    }, arguments);
  }
  function V1() {
    return w(function(_, e, t, r, n, a, b, c, o, i, d, v) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, c, o, i >>> 0, d >>> 0, v);
    }, arguments);
  }
  function E1() {
    return w(function(_, e, t, r, n, a, b, c, o, i, d, v) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, c, o, i >>> 0, d >>> 0, v);
    }, arguments);
  }
  function L1() {
    return w(function(_, e, t, r, n, a, b, c, o, i, d, v) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, c, o, i >>> 0, d >>> 0, v);
    }, arguments);
  }
  function O1(_, e, t) {
    return _.then(e, t);
  }
  function G1(_, e, t) {
    return _.then(e, t);
  }
  function W1(_, e) {
    return _.then(e);
  }
  function z1(_, e, t) {
    _.uniform1f(e, t);
  }
  function U1(_, e, t) {
    _.uniform1f(e, t);
  }
  function q1(_, e, t) {
    _.uniform1i(e, t);
  }
  function H1(_, e, t) {
    _.uniform1i(e, t);
  }
  function j1(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function N1(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function J1(_, e, t, r) {
    _.uniform2fv(e, E(t, r));
  }
  function Q1(_, e, t, r) {
    _.uniform2iv(e, K(t, r));
  }
  function X1(_, e, t, r) {
    _.uniform2iv(e, K(t, r));
  }
  function Y1(_, e, t, r) {
    _.uniform2uiv(e, ye(t, r));
  }
  function K1(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function Z1(_, e, t, r) {
    _.uniform3fv(e, E(t, r));
  }
  function ep(_, e, t, r) {
    _.uniform3iv(e, K(t, r));
  }
  function _p(_, e, t, r) {
    _.uniform3iv(e, K(t, r));
  }
  function tp(_, e, t, r) {
    _.uniform3uiv(e, ye(t, r));
  }
  function rp(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function np(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function ap(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function bp(_, e, t, r) {
    _.uniform4fv(e, E(t, r));
  }
  function cp(_, e, t, r) {
    _.uniform4iv(e, K(t, r));
  }
  function op(_, e, t, r) {
    _.uniform4iv(e, K(t, r));
  }
  function sp(_, e, t, r) {
    _.uniform4uiv(e, ye(t, r));
  }
  function ip(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function fp(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function up(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, E(r, n));
  }
  function dp(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, E(r, n));
  }
  function gp(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, E(r, n));
  }
  function wp(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function pp(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, E(r, n));
  }
  function lp(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, E(r, n));
  }
  function mp(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, E(r, n));
  }
  function hp(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function xp(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, E(r, n));
  }
  function yp(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, E(r, n));
  }
  function $p(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, E(r, n));
  }
  function Sp(_) {
    _.unmap();
  }
  function vp(_, e) {
    _.useProgram(e);
  }
  function Ap(_, e) {
    _.useProgram(e);
  }
  function Ip(_) {
    return _.value;
  }
  function Tp(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function Dp(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function Bp(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function Fp(_, e, t, r, n, a, b) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, b);
  }
  function Pp(_, e, t, r, n, a, b) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, b);
  }
  function kp(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function Mp(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function Cp(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function Rp(_) {
    return _.width;
  }
  function Vp(_) {
    return _.width;
  }
  function Ep() {
    return w(function(_, e, t, r, n, a, b) {
      _.writeBuffer(e, t, s_(r, n), a, b);
    }, arguments);
  }
  function Lp() {
    return w(function(_, e, t, r, n, a) {
      _.writeTexture(e, s_(t, r), n, a);
    }, arguments);
  }
  function Op(_, e) {
    return ae(_, e, a2);
  }
  function Gp(_, e) {
    return ae(_, e, s2);
  }
  function Wp(_, e) {
    return ae(_, e, f2);
  }
  function zp(_, e) {
    return ae(_, e, b2);
  }
  function Up(_, e) {
    return ae(_, e, c2);
  }
  function qp(_, e) {
    return ae(_, e, o2);
  }
  function Hp(_, e) {
    return ae(_, e, n2);
  }
  function jp(_) {
    return _;
  }
  function Np(_) {
    return _;
  }
  function Jp(_, e) {
    return E(_, e);
  }
  function Qp(_, e) {
    return I2(_, e);
  }
  function Xp(_, e) {
    return K(_, e);
  }
  function Yp(_, e) {
    return T2(_, e);
  }
  function Kp(_, e) {
    return D2(_, e);
  }
  function Zp(_, e) {
    return ye(_, e);
  }
  function e2(_, e) {
    return s_(_, e);
  }
  function _2(_, e) {
    return I(_, e);
  }
  function t2(_) {
    return BigInt.asUintN(64, _);
  }
  function r2() {
    const _ = f.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function n2(_, e) {
    f.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function a2(_, e, t) {
    f.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function b2(_, e, t) {
    f.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function c2(_, e, t) {
    f.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function o2(_, e, t) {
    f.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function s2(_, e, t) {
    const r = f.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (r[1]) throw F(r[0]);
  }
  function i2(_, e, t, r) {
    f.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, r);
  }
  function f2(_, e, t) {
    f.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_(_, e, t);
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
  ], u2 = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], d2 = [
    "uniform",
    "storage",
    "read-only-storage"
  ], g2 = [
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
  ], w2 = [
    "none",
    "front",
    "back"
  ], Gt = [
    "nearest",
    "linear"
  ], p2 = [
    "ccw",
    "cw"
  ], q_ = [
    "uint16",
    "uint32"
  ], H_ = [
    "load",
    "clear"
  ], l2 = [
    "nearest",
    "linear"
  ], m2 = [
    "low-power",
    "high-performance"
  ], h2 = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], x2 = [
    "filtering",
    "non-filtering",
    "comparison"
  ], j_ = [
    "keep",
    "zero",
    "replace",
    "invert",
    "increment-clamp",
    "decrement-clamp",
    "increment-wrap",
    "decrement-wrap"
  ], y2 = [
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
  ], $2 = [
    "1d",
    "2d",
    "3d"
  ], ne = [
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
  ], S2 = [
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
  ], v2 = [
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
  ], A2 = [
    "vertex",
    "instance"
  ], wt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => f.__wbg_handle_free(_, 1)), g_ = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => f.__wbg_proteusapp_free(_, 1)), pt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => f.__wbg_texturehandle_free(_, 1)), lt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => f.__wbg_transitionchannel_free(_, 1)), mt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => f.__wbg_videohandle_free(_, 1));
  function T(_) {
    const e = f.__externref_table_alloc();
    return f.__wbindgen_externrefs.set(e, _), e;
  }
  function l(_, e) {
    if (!(_ instanceof e)) throw new Error(`expected instance of ${e.name}`);
  }
  const ht = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => f.__wbindgen_destroy_closure(_.a, _.b));
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
      for (let b = 1; b < n; b++) a += ", " + k_(_[b]);
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
    return _ = _ >>> 0, B2().subarray(_ / 4, _ / 4 + e);
  }
  function I2(_, e) {
    return _ = _ >>> 0, P2().subarray(_ / 2, _ / 2 + e);
  }
  function K(_, e) {
    return _ = _ >>> 0, k2().subarray(_ / 4, _ / 4 + e);
  }
  function T2(_, e) {
    return _ = _ >>> 0, M2().subarray(_ / 1, _ / 1 + e);
  }
  function D2(_, e) {
    return _ = _ >>> 0, C2().subarray(_ / 2, _ / 2 + e);
  }
  function ye(_, e) {
    return _ = _ >>> 0, R2().subarray(_ / 4, _ / 4 + e);
  }
  function s_(_, e) {
    return _ = _ >>> 0, le().subarray(_ / 1, _ / 1 + e);
  }
  let se = null;
  function C() {
    return (se === null || se.buffer.detached === true || se.buffer.detached === void 0 && se.buffer !== f.memory.buffer) && (se = new DataView(f.memory.buffer)), se;
  }
  let Ee = null;
  function B2() {
    return (Ee === null || Ee.byteLength === 0) && (Ee = new Float32Array(f.memory.buffer)), Ee;
  }
  let Le = null;
  function F2() {
    return (Le === null || Le.byteLength === 0) && (Le = new Float64Array(f.memory.buffer)), Le;
  }
  let Oe = null;
  function P2() {
    return (Oe === null || Oe.byteLength === 0) && (Oe = new Int16Array(f.memory.buffer)), Oe;
  }
  let Ge = null;
  function k2() {
    return (Ge === null || Ge.byteLength === 0) && (Ge = new Int32Array(f.memory.buffer)), Ge;
  }
  let We = null;
  function M2() {
    return (We === null || We.byteLength === 0) && (We = new Int8Array(f.memory.buffer)), We;
  }
  function I(_, e) {
    return E2(_ >>> 0, e);
  }
  let ze = null;
  function C2() {
    return (ze === null || ze.byteLength === 0) && (ze = new Uint16Array(f.memory.buffer)), ze;
  }
  let Ue = null;
  function R2() {
    return (Ue === null || Ue.byteLength === 0) && (Ue = new Uint32Array(f.memory.buffer)), Ue;
  }
  let qe = null;
  function le() {
    return (qe === null || qe.byteLength === 0) && (qe = new Uint8Array(f.memory.buffer)), qe;
  }
  function w(_, e) {
    try {
      return _.apply(this, e);
    } catch (t) {
      const r = T(t);
      f.__wbindgen_exn_store(r);
    }
  }
  function y(_) {
    return _ == null;
  }
  function ae(_, e, t) {
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
      --r.cnt === 0 && (f.__wbindgen_destroy_closure(r.a, r.b), r.a = 0, ht.unregister(r));
    }, ht.register(n, r, r), n;
  }
  function w_(_, e) {
    const t = e(_.length * 1, 1) >>> 0;
    return le().set(_, t / 1), V = _.length, t;
  }
  function He(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return F2().set(_, t / 8), V = _.length, t;
  }
  function H(_, e, t) {
    if (t === void 0) {
      const c = ve.encode(_), o = e(c.length, 1) >>> 0;
      return le().subarray(o, o + c.length).set(c), V = c.length, o;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = le();
    let b = 0;
    for (; b < r; b++) {
      const c = _.charCodeAt(b);
      if (c > 127) break;
      a[n + b] = c;
    }
    if (b !== r) {
      b !== 0 && (_ = _.slice(b)), n = t(n, r, r = b + _.length * 3, 1) >>> 0;
      const c = le().subarray(n + b, n + r), o = ve.encodeInto(_, c);
      b += o.written, n = t(n, r, b, 1) >>> 0;
    }
    return V = b, n;
  }
  function F(_) {
    const e = f.__wbindgen_externrefs.get(_);
    return f.__externref_table_dealloc(_), e;
  }
  let r_ = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  r_.decode();
  const V2 = 2146435072;
  let p_ = 0;
  function E2(_, e) {
    return p_ += e, p_ >= V2 && (r_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), r_.decode(), p_ = e), r_.decode(le().subarray(_, _ + e));
  }
  const ve = new TextEncoder();
  "encodeInto" in ve || (ve.encodeInto = function(_, e) {
    const t = ve.encode(_);
    return e.set(t), {
      read: _.length,
      written: t.length
    };
  });
  let V = 0, f;
  function L2(_) {
    f = _;
  }
  URL = globalThis.URL;
  const O2 = await L_({
    "./proteus_host_web_bg.js": {
      __wbg_call_5575218572ead796: Ho,
      __wbg_next_0c4066e251d2eff9: _d,
      __wbg_done_b62d4a7d2286852a: Ai,
      __wbg_value_49f783bb59765962: Ip,
      __wbg_new_typed_00a409eb4ec4f2d9: Zu,
      __wbg_then_05edfc8a4fea5106: O1,
      __wbg_get_197a3fe98f169e38: Cf,
      __wbg_get_unchecked_54a4374c38e08460: Ef,
      __wbg_length_c6054974c0a6cdb9: ou,
      __wbg_new_227d7c05414eb861: Ju,
      __wbg_stack_3b0d974bbf31e44f: _1,
      __wbg_error_a6fa202b58aa1cd3: qi,
      __wbg_proteusapp_new: dd,
      __wbg_instanceof_Map_afa18d5840c04c15: Xf,
      __wbg_set_dc601f4a69da0bc2: D0,
      __wbg_call_8e98ed2f3c86c4b5: jo,
      __wbg_call_0e855b388e315e17: qo,
      __wbg_get_with_ref_key_6412cf3094599694: Lf,
      __wbg_set_6be42768c690e380: Jd,
      __wbg_String_8564e559799eccda: Gc,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: Jf,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: Ru,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: Vu,
      __wbg_maxTextureDimension3D_06ee54121b37d431: Eu,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: Cu,
      __wbg_maxBindGroups_14611ac9ed1c6b56: wu,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: pu,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: Tu,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: Iu,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: Bu,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: Fu,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: ku,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: Mu,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: Ou,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: Lu,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: Pu,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: zu,
      __wbg_maxBufferSize_f7ce3e1856349d2f: lu,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: Gu,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: Wu,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: Du,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: qu,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: Uu,
      __wbg_maxColorAttachments_fd9187f9f786da18: hu,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: mu,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: vu,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: xu,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: yu,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: $u,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: Su,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: Au,
      __wbg_description_18d0a6d4077fec8e: li,
      __wbg_set_dst_factor_1ed75271a89a711e: H0,
      __wbg_set_operation_b5862f5a1a143b30: Jg,
      __wbg_set_src_factor_1c4f755f8676df1b: dw,
      __wbg_set_texture_16d2be474ce6ad0c: Tw,
      __wbg_set_mip_level_246db61be15bdd69: Eg,
      __wbg_set_x_56f0c2c08a62725c: Xw,
      __wbg_set_y_04fb8ce84735b4e1: Yw,
      __wbg_set_z_a51316db27a4941e: Kw,
      __wbg_set_origin_9b3b0fbe0a5dc469: Qg,
      __wbg_set_aspect_77332ac136ee94eb: a0,
      __wbg_Window_a07901001eb4269f: Wc,
      __wbg_gpu_a7c12045c25d009a: Of,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: zc,
      __wbg_set_a_5f6e488475272136: Qd,
      __wbg_set_b_688365d692bba214: o0,
      __wbg_set_g_d4d1d77cf8fdd362: og,
      __wbg_set_r_527e5a41c4b1a846: ew,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: Nf,
      __wbg_queue_65d985f3e6d786a6: yd,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: Yg,
      __wbg_requestAdapter_9ff5c9d1ff271165: Bd,
      __wbg_set_required_limits_3b031f66f838f4e3: tw,
      __wbg_set_required_features_54918de8185c5fab: _w,
      __wbg_set_label_bae57fb9f24fde5c: hg,
      __wbg_requestDevice_c1c34f88a477e509: kd,
      __wbg_limits_50a8c5e629dbfe40: iu,
      __wbg_info_22dcf1fd1b12bc7d: qf,
      __wbg_set_size_41cd9255ca1e4242: fw,
      __wbg_set_usage_908213a4d4bb8bde: Vw,
      __wbg_set_mapped_at_creation_48de4735fab51e78: kg,
      __wbg_set_label_cd567b7b35838e4c: $g,
      __wbg_createBuffer_2f08c0205e04efca: $s,
      __wbg_set_address_mode_u_a37cf1035585c638: Yd,
      __wbg_set_address_mode_v_8ac049e029caef76: Kd,
      __wbg_set_address_mode_w_eb9260ee11729e92: Zd,
      __wbg_set_compare_42211fbf15e3b850: A0,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: Bg,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: Fg,
      __wbg_set_mag_filter_69d846b974d4bcc0: Pg,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: Vg,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: Gg,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: Cg,
      __wbg_set_label_dcd98efbb9370da8: vg,
      __wbg_createSampler_248bd67c920af37d: Cs,
      __wbg_set_width_1a5e2e86fa5bdcd8: Nw,
      __wbg_set_height_e8b5483b8c117d5e: fg,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: V0,
      __wbg_set_format_e9d4b1475bb3bd3b: ng,
      __wbg_set_size_a61ff22205255d61: uw,
      __wbg_set_usage_7fa9cd18d1104aca: Rw,
      __wbg_set_label_0c1bd0e976cf0a9a: gg,
      __wbg_set_dimension_36e13ccecae5af4b: q0,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: Og,
      __wbg_set_sample_count_865e1d19b84e27e6: bw,
      __wbg_push_f724b5db8acf89d2: wd,
      __wbg_set_view_formats_bab284fc81b40e70: Uw,
      __wbg_createTexture_9e76b80a2dc0d12e: Ws,
      __wbg_set_entries_fc76ca4d7da6a709: J0,
      __wbg_set_layout_eeef59714f5bf48b: Tg,
      __wbg_set_label_f92ae11c77d74198: Ag,
      __wbg_createBindGroup_2320df4db188406c: xs,
      __wbg_set_code_56e2d45ec1ff6c2d: y0,
      __wbg_set_label_be45aed56e4b9fee: xg,
      __wbg_createShaderModule_53701de4fb271c90: Vs,
      __wbg_set_label_d1c24b5a7a3ac31d: Sg,
      __wbg_createCommandEncoder_cd88faca35d9ed68: vs,
      __wbg_set_bind_group_layouts_5325d038771af328: u0,
      __wbg_set_label_2f592bd1be3db6b3: lg,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: Ts,
      __wbg_set_module_14e471fdd94c582d: zg,
      __wbg_set_entry_point_8db3b6d103e3b865: X0,
      __wbg_set_buffers_85a7238f4ef28ab4: m0,
      __wbg_set_layout_7c5ba5bdcde8a0f0: Ig,
      __wbg_set_vertex_a4951dd9a7a4ed54: Lw,
      __wbg_set_label_c47c451211e2f6d2: yg,
      __wbg_set_format_f9341112e43ea182: ag,
      __wbg_set_depth_compare_30e9ea552da12fe2: M0,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: W0,
      __wbg_set_depth_bias_428c9340b0fd937b: B0,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: F0,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: P0,
      __wbg_set_compare_1509dc1a5420943f: v0,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: C0,
      __wbg_set_fail_op_77ab26c98f847b65: K0,
      __wbg_set_pass_op_e9470d1262fb8a8b: Xg,
      __wbg_set_stencil_back_6ef4683123b19b25: gw,
      __wbg_set_stencil_front_aeb8580a97e5424b: pw,
      __wbg_set_stencil_read_mask_2954f260d47349ea: mw,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: yw,
      __wbg_set_depth_stencil_1bd50dbc450c8650: L0,
      __wbg_set_module_08ad08e736d8edbf: Wg,
      __wbg_set_targets_6b0b3bdd87f35668: Iw,
      __wbg_set_entry_point_6fec5723cc790927: Q0,
      __wbg_set_fragment_1a595620425637e1: bg,
      __wbg_set_count_26a934d1cd07d080: I0,
      __wbg_set_mask_0c49a66362fc0079: Mg,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: t0,
      __wbg_set_multisample_85f073947b782d07: Ug,
      __wbg_set_cull_mode_9d466c1ab414cac8: T0,
      __wbg_set_front_face_50cdf4eb61504a46: cg,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: Aw,
      __wbg_set_topology_beefb3aca0612b00: Fw,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: Mw,
      __wbg_set_primitive_369241acd17871f1: Kg,
      __wbg_createRenderPipeline_f48187ba9f7701e8: Ps,
      __wbg_set_entries_3017e6132f938c6e: N0,
      __wbg_set_label_1175a3329a06e52b: wg,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: hs,
      __wbg_limits_1c25cb4f379a4418: su,
      __wbg_set_color_attachments_abe67f6631926e28: $0,
      __wbg_set_label_8fd860a36d2c7b74: mg,
      __wbg_set_view_dbd0294573f64d05: Gw,
      __wbg_set_depth_clear_value_442bf492734f63b6: k0,
      __wbg_set_depth_load_op_34d430b74bb36d91: R0,
      __wbg_set_depth_store_op_0ea0a215313dbda7: G0,
      __wbg_set_depth_read_only_138a11b10c731094: E0,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: ww,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: lw,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: xw,
      __wbg_set_stencil_read_only_fb489d191b6d969b: hw,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: O0,
      __wbg_set_query_set_18679a8580267d5a: Zg,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: f0,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: j0,
      __wbg_set_timestamp_writes_c552d52fbb417005: Bw,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: io,
      __wbg_copyTextureToTexture_1be188df1e535c0a: ms,
      __wbg_label_47480289cc2bce71: bu,
      __wbg_set_label_2d2227f4d5991e50: pg,
      __wbg_finish_cfaeede3baf55be1: Ni,
      __wbg_finish_087cb89c65c06eb1: ji,
      __wbg_drawIndexed_68637ebab6dd8d6e: Ci,
      __wbg_setPipeline_bab24dbce96903b9: zd,
      __wbg_setViewport_f9d423db4f4b4b58: Hd,
      __wbg_setBindGroup_4ba56e1e0d26f244: Ld,
      __wbg_setBindGroup_6124849cc8547086: Od,
      __wbg_setIndexBuffer_17431786d06c1b7c: Gd,
      __wbg_setIndexBuffer_a16ed5b869c87507: Wd,
      __wbg_setVertexBuffer_b508baf8d0ffe331: qd,
      __wbg_setVertexBuffer_91c4b602d0289943: Ud,
      __wbg_end_414453a89205612c: Gi,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: mf,
      __wbg_getCurrentTexture_51975ae7185fd15f: ff,
      __wbg_set_device_0d774b66e7288f72: z0,
      __wbg_set_format_d347899cd860709c: rg,
      __wbg_set_usage_ae014e77ff77ce06: Ew,
      __wbg_set_alpha_mode_92402195b3ae1ee7: _0,
      __wbg_set_view_formats_fe531a043efb71fa: qw,
      __wbg_configure_3d64c677c7d68a15: us,
      __wbg_writeBuffer_b4bdd36178348ca5: Ep,
      __wbg_set_bytes_per_row_91681ca78d744888: h0,
      __wbg_set_rows_per_image_d198b7e73a38978b: aw,
      __wbg_set_offset_a097a8050a3a9a33: Ng,
      __wbg_writeTexture_b45b69132e46a227: Lp,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: cd,
      __wbg_submit_1290d44bb76ecef4: g1,
      __wbg_getMappedRange_5ed22727c9679168: wf,
      __wbg_unmap_8f06698a75b8331a: Sp,
      __wbg_destroy_b5b39f25f0799295: mi,
      __wbg_mapAsync_bb0029907dd91181: gu,
      __wbg_set_dimension_174ad7e2fb67fb4e: U0,
      __wbg_set_format_90860b0321868db4: _g,
      __wbg_set_aspect_a823a14d00d42d37: b0,
      __wbg_set_base_array_layer_cc6c68d233489c4b: s0,
      __wbg_set_array_layer_count_daec613068108a9d: r0,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: i0,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: Lg,
      __wbg_set_label_03d2396d4655a3e1: dg,
      __wbg_set_usage_7f0dda8309469b1c: Cw,
      __wbg_createView_cc96b5bdd3d5bf5e: qs,
      __wbg_set_min_binding_size_689661b9ed25e083: Rg,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: sg,
      __wbg_set_type_38961e08504ca674: Pw,
      __wbg_requestAdapter_c46930b8bc33722d: Fd,
      __wbg_set_alpha_aa2e606e9e647b21: e0,
      __wbg_set_color_bc393d7efc3c8594: S0,
      __wbg_set_visibility_1bca121a89accba5: Hw,
      __wbg_set_storage_texture_ab9eed9786337ef0: Sw,
      __wbg_set_external_texture_825fe2bc7a0c0603: Y0,
      __wbg_set_binding_b6b0fe5c281b8c69: d0,
      __wbg_set_buffer_e89095a9f0cafad3: l0,
      __wbg_set_sampler_8c5d7fb1b02058c6: ow,
      __wbg_set_texture_e25a73da75cf5808: Dw,
      __wbg_set_view_dimension_263387976511ebc9: Ww,
      __wbg_set_format_1786adb7bc74c7c9: Z0,
      __wbg_set_access_091f317905cd76a5: Xd,
      __wbg_set_format_abf7a1bc5425c56a: tg,
      __wbg_set_blend_8d6e9c08b5702a09: w0,
      __wbg_set_write_mask_144b25e2bd909124: Qw,
      __wbg_set_load_op_56844f51434037bf: Dg,
      __wbg_set_store_op_caeede4654b3d847: vw,
      __wbg_set_view_bdeab150b5f0768c: Ow,
      __wbg_set_clear_value_642701f928a5ccb3: x0,
      __wbg_set_resolve_target_fe76b3f99cf72078: rw,
      __wbg_set_buffer_55f096330c8912b4: p0,
      __wbg_set_offset_73156b0e0b41d79a: Hg,
      __wbg_set_size_1e6281b07cd39177: iw,
      __wbg_set_binding_f3c188a8cd21455b: g0,
      __wbg_set_resource_fe385d2e3dadaf63: nw,
      __wbg_set_format_6606f5c1fba6f459: eg,
      __wbg_set_offset_8d9d9afffa18b591: jg,
      __wbg_set_shader_location_0ff30a733291a396: sw,
      __wbg_set_array_stride_c2c009eabc18b5f6: n0,
      __wbg_set_attributes_05f9117fd32ca606: c0,
      __wbg_set_step_mode_a35aef328761c452: $w,
      __wbg_set_type_c1eebc19f8a6aeb9: kw,
      __wbg_set_multisampled_40505c1381e1c32c: qg,
      __wbg_set_sample_type_7088b1efddce6a69: cw,
      __wbg_set_view_dimension_3ed01b237e85826f: zw,
      __wbg_includes_83dff8d05da243c5: Uf,
      __wbg_clearBufferuiv_1d2d93401c0904a3: Qo,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: os,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: is,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: fs,
      __wbg_copyBufferSubData_a944f33b601b822d: gs,
      __wbg_clientWaitSync_7580165bd2eff461: ts,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: ss,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: ls,
      __wbg_createQuery_f013132b870a71ef: Fs,
      __wbg_createSampler_9fe50152a2524319: Rs,
      __wbg_createVertexArray_8685feb21901c932: Us,
      __wbg_deleteQuery_ef51ea0a52420103: ei,
      __wbg_deleteSampler_5c045e0cc55813d4: ri,
      __wbg_getIndexedParameter_2b18df6fca85f751: gf,
      __wbg_getQueryParameter_0599e85ddb81220b: Sf,
      __wbg_getSyncParameter_9a2bda340ebe166f: Ff,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: Pf,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: _u,
      __wbg_deleteSync_37ca83c429c43d8a: bi,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: ii,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: Ti,
      __wbg_drawBuffers_558d96e52e754731: Pi,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: Mi,
      __wbg_endQuery_161170c5280a8293: Oi,
      __wbg_fenceSync_56efc7cc79111e54: Hi,
      __wbg_framebufferTextureLayer_2312acdc74f97676: ef,
      __wbg_getBufferSubData_92680d3a2f7be029: af,
      __wbg_readBuffer_361ec5474f3aae49: $d,
      __wbg_readPixels_5840000f3e22f3ce: vd,
      __wbg_readPixels_5bf204799ed2272f: Ad,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: Id,
      __wbg_texImage3D_8647ef58aef5b912: h1,
      __wbg_texStorage2D_ed5df596c5f1e3af: $1,
      __wbg_texStorage3D_160b0197bc190f04: S1,
      __wbg_texSubImage2D_f03448e182b0820d: P1,
      __wbg_texSubImage2D_d14d9c0a1f627c31: F1,
      __wbg_texSubImage2D_89866a04ecd0a76b: T1,
      __wbg_texSubImage2D_5c630043f1c56716: I1,
      __wbg_samplerParameterf_3157ba41c0f4d97a: Cd,
      __wbg_samplerParameteri_f85a29156e790189: Rd,
      __wbg_texImage2D_0e0f37b9fb297d01: w1,
      __wbg_texImage2D_0e537dc331652de3: p1,
      __wbg_texImage3D_30dbf7234481b8f5: m1,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: A1,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: D1,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: B1,
      __wbg_texSubImage3D_933e4cd41cc5376d: V1,
      __wbg_texSubImage3D_c3538b28040daac9: L1,
      __wbg_uniform1ui_36c94692177ebf76: j1,
      __wbg_uniform2fv_17592f4dad9798fb: N1,
      __wbg_uniform2iv_d5d29ebbc466977d: X1,
      __wbg_texSubImage3D_0fdbd843482bb916: M1,
      __wbg_texSubImage3D_09a97a968b93253d: k1,
      __wbg_texSubImage3D_355efde0dc047913: C1,
      __wbg_texSubImage3D_bd32c8e29e470904: E1,
      __wbg_texSubImage3D_5a238709d114b609: R1,
      __wbg_uniform2uiv_418ba3bf6a230dd5: Y1,
      __wbg_uniform4fv_9e670a001c77dca0: bp,
      __wbg_uniform4iv_1d57c6b8e5c0e447: cp,
      __wbg_uniform3fv_dbe44b778e6b89e8: Z1,
      __wbg_uniform3iv_d75d3a5f86d54be4: _p,
      __wbg_uniform3uiv_71c1efc24a662de9: tp,
      __wbg_uniform4uiv_c5d45f5dbdae727a: sp,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: wp,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: lp,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: mp,
      __wbg_uniformBlockBinding_829a71912ad79a04: ip,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: fp,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: dp,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: gp,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: hp,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: Bp,
      __wbg_activeTexture_525ee3068cb9e8d5: ao,
      __wbg_attachShader_3477e67517b09b6b: co,
      __wbg_bindAttribLocation_79b5d26727094518: fo,
      __wbg_bindBuffer_d3111de6861cb875: wo,
      __wbg_bindFramebuffer_63e837a5dc0accfb: mo,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: ho,
      __wbg_bindTexture_7ab28ff4ff3dc506: $o,
      __wbg_blendColor_15f26633b646e542: Io,
      __wbg_blendEquation_7dadb4db540a42da: Fo,
      __wbg_blendEquationSeparate_8240ddfa32266109: Do,
      __wbg_blendFunc_b15af02643e188f1: Ro,
      __wbg_blendFuncSeparate_456410f9919bed39: Mo,
      __wbg_clear_dadcb3e2929388b0: es,
      __wbg_clearDepth_05c17028494ee4dd: Xo,
      __wbg_clearStencil_917833d1e2ac56e4: Zo,
      __wbg_colorMask_f111e3e5796458f4: ns,
      __wbg_compileShader_f5625b583b2c9fd6: as,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: yp,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: $p,
      __wbg_vertexAttribDivisor_f17a8585267be92f: Dp,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: ws,
      __wbg_createBuffer_9f602b2dbcbf409c: Ss,
      __wbg_createFramebuffer_4a250944a4542bbc: As,
      __wbg_createProgram_4c8164d471c10346: Ds,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: Ms,
      __wbg_createShader_9c5cd42709d915ff: Ls,
      __wbg_createTexture_3eed23cb87dd35fc: Os,
      __wbg_cullFace_94f24b4fd5e9038b: js,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: Js,
      __wbg_getExtension_11824edd67a143d8: df,
      __wbg_getParameter_7f7f23cae98f2c81: pf,
      __wbg_getProgramInfoLog_cd84be80942f345b: xf,
      __wbg_getProgramParameter_039391d5ba319f50: yf,
      __wbg_getShaderInfoLog_495bddda98172699: vf,
      __wbg_getShaderParameter_4eb65cfb174ceb22: If,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: Df,
      __wbg_getUniformLocation_ab63f569a4e41744: Mf,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: Xs,
      __wbg_deleteProgram_eff668280dcb01ca: Zs,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: ti,
      __wbg_deleteShader_3339454254c7147c: ni,
      __wbg_deleteTexture_c1c58550dc55af5c: oi,
      __wbg_depthFunc_31b183b5b8ee478e: fi,
      __wbg_depthMask_cab7f2ae7f0e559c: gi,
      __wbg_depthRange_797a71ba3b79267a: wi,
      __wbg_disable_cb1b3e6c1cee5202: Si,
      __wbg_disableVertexAttribArray_b395358ec5084c39: yi,
      __wbg_drawArrays_42dbb4b0349c8f34: Bi,
      __wbg_enable_d1f42f78be33a553: Li,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: Ri,
      __wbg_flush_7ae42f071230db6b: Ji,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: Yi,
      __wbg_framebufferTexture2D_367ab597a005e8d9: Ki,
      __wbg_frontFace_9bdcf2a758e989e5: tf,
      __wbg_linkProgram_e23a348b0f6e0c4f: uu,
      __wbg_pixelStorei_a78a504be58d1d0a: sd,
      __wbg_polygonOffset_a4f07d97b9b0dced: fd,
      __wbg_renderbufferStorage_3049e13db5c4e60e: Dd,
      __wbg_scissor_6c024669fbf4fe72: Vd,
      __wbg_vertexAttribPointer_4e5d289c5d224210: Pp,
      __wbg_viewport_a0ca330f9b85397e: kp,
      __wbg_shaderSource_66dce75b25a1a407: e1,
      __wbg_stencilFuncSeparate_ec603976be9569a4: c1,
      __wbg_stencilMask_485dcb5965c79a71: i1,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: s1,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: u1,
      __wbg_texParameteri_c6efffcecb474d2f: x1,
      __wbg_uniform1f_3acd3f3eb50b5e11: z1,
      __wbg_uniform1i_e4f13604354c28ae: H1,
      __wbg_uniform4f_a5008773cfb47d1a: np,
      __wbg_useProgram_ab2ee2a13a1fd909: Ap,
      __wbg_bufferSubData_2270f1b9db71e642: Wo,
      __wbg_clearBufferfv_6b77b9402254a2bf: No,
      __wbg_clearBufferiv_0f056544010eef3e: Jo,
      __wbg_beginQuery_dad334d972fed3cc: so,
      __wbg_bindBufferRange_16a9d90becc2a7d7: go,
      __wbg_bindSampler_3c7002cb6d56ae8f: yo,
      __wbg_bindVertexArray_c391bd47303d75cd: Ao,
      __wbg_blitFramebuffer_ea96ada8bba07582: Vo,
      __wbg_bufferData_64e9905f2b3d3a6f: Oo,
      __wbg_bufferData_99bbbc63f02251c4: Go,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: Zf,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: Pd,
      __wbg_navigator_935098efd1dc7fe5: ju,
      __wbg_devicePixelRatio_8e5ca44720abafec: hi,
      __wbg_document_2634180a4c694068: vi,
      __wbg_instanceof_Window_0d356b88a2f77c42: eu,
      __wbg_hidden_cb32701ca3785fea: zf,
      __wbg_getElementById_c7aba6b93b34bf01: uf,
      __wbg_querySelector_1f3658f4b48e268b: md,
      __wbg_querySelectorAll_ffda3c891a9eb29a: ld,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: nf,
      __wbg_uniform2iv_c5e863975dd780d8: Q1,
      __wbg_uniform3fv_7723e142be50856f: K1,
      __wbg_uniform3iv_bea3976522e15d48: ep,
      __wbg_uniform4fv_85ad5d23234895d2: ap,
      __wbg_clear_ff8cfdf420f7dde6: _s,
      __wbg_clearDepth_ac6b54f112feeaf7: Yo,
      __wbg_clearStencil_56d6a6308294a749: Ko,
      __wbg_colorMask_b0ab9d429a1efa0a: rs,
      __wbg_compileShader_fcf3f3d2891f73f9: bs,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: ps,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: ys,
      __wbg_createFramebuffer_ab73f30b5dc97415: Is,
      __wbg_createProgram_f11c63f59f41b82a: Bs,
      __wbg_createRenderbuffer_556000dbb01f5026: ks,
      __wbg_createShader_27d9388313f3b14e: Es,
      __wbg_createTexture_8455c703424c567b: Gs,
      __wbg_cullFace_774780fb4177aab8: Hs,
      __wbg_deleteBuffer_d758283bea6e0ccf: Qs,
      __wbg_deleteFramebuffer_8953b325144192fe: Ys,
      __wbg_deleteProgram_0135c6926e75af75: Ks,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: _i,
      __wbg_deleteShader_79dbaaed69b7ca3b: ai,
      __wbg_deleteTexture_3acb672a45f9998a: ci,
      __wbg_depthFunc_eaca1bc79f7bf216: ui,
      __wbg_depthMask_3a9074b08d1f68e5: di,
      __wbg_depthRange_c24a808b3496e0a9: pi,
      __wbg_uniform4iv_a9aaa92f2f458ec2: op,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: up,
      __wbg_uniformMatrix3fv_da8c388748c5739b: pp,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: xp,
      __wbg_activeTexture_1d5359b20df41710: no,
      __wbg_attachShader_683d1070365e7066: oo,
      __wbg_bindAttribLocation_d56d3c40331af7ed: uo,
      __wbg_bindBuffer_e95efaf0d4851845: po,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: lo,
      __wbg_bindRenderbuffer_d608b211c51ed147: xo,
      __wbg_bindTexture_ffc56f1e5c5526c6: So,
      __wbg_blendColor_a0ba1cdcecc3a34c: To,
      __wbg_blendEquation_8bfa69f639ae92da: Po,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: Bo,
      __wbg_blendFunc_713c504adab14f98: Co,
      __wbg_blendFuncSeparate_3eef699c291dbc87: ko,
      __wbg_disable_4dca6ee0ccc91e4a: $i,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: xi,
      __wbg_drawArrays_10e1254aa4524ae9: Di,
      __wbg_enable_c6e523307311617a: Ei,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: Vi,
      __wbg_flush_eb3fb8da2ec00d57: Qi,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: Xi,
      __wbg_linkProgram_6a2eee02a03b9b00: fu,
      __wbg_pixelStorei_55ad4c67b699537c: od,
      __wbg_polygonOffset_06dc6468c12a57e1: id,
      __wbg_renderbufferStorage_2918fb696fd45663: Td,
      __wbg_scissor_f9696c630e464977: Ed,
      __wbg_shaderSource_628c37a476ae65f9: Zw,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: b1,
      __wbg_stencilMask_f9fe198f7fd6fc9c: f1,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: o1,
      __wbg_stencilOpSeparate_6cf50803475d2640: d1,
      __wbg_texParameteri_fe6210a493d48a16: y1,
      __wbg_framebufferTexture2D_3a558e14f56720d2: Zi,
      __wbg_frontFace_c9bb1fa659ffd276: rf,
      __wbg_getParameter_91a344e1a84a4669: lf,
      __wbg_getProgramInfoLog_35410850de9ccefe: hf,
      __wbg_getProgramParameter_bbc667347ac2e882: $f,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: Af,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: Tf,
      __wbg_getUniformLocation_340155dc706d3fea: kf,
      __wbg_uniform1f_d34e4b454f7c8e73: U1,
      __wbg_uniform1i_cd9a7f990128ea48: q1,
      __wbg_uniform4f_4410d2faaa7e5dda: rp,
      __wbg_useProgram_0e1cd86765304939: vp,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: Fp,
      __wbg_viewport_b5bd46a0d111c83c: Mp,
      __wbg_texSubImage2D_1b2ff28f994c325e: v1,
      __wbg_uniform2fv_39277cf2d3cb83c7: J1,
      __wbg_bufferData_5df9bdb32e189eee: Lo,
      __wbg_bufferData_26132561617ce8fb: Eo,
      __wbg_bufferSubData_44db8a3b4a70b57d: zo,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: cs,
      __wbg_readPixels_05377f8b6fa1d8eb: Sd,
      __wbg_texImage2D_7bc3001cb8602ed2: l1,
      __wbg_navigator_017bc45e84c473cc: Hu,
      __wbg_log_d282446d03691e72: du,
      __wbg_info_a392cd5b7536cfb5: Hf,
      __wbg_warn_88c4a5bd9a322000: Cp,
      __wbg_debug_7271beced8b71cd4: Ns,
      __wbg_error_933f449d72fef598: Ui,
      __wbg_error_50f60c611a3dcf64: zi,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: vo,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: zs,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: si,
      __wbg_offsetX_0214819d43aaf6d5: ad,
      __wbg_offsetY_f18f571e33b385ab: bd,
      __wbg_preventDefault_c047d3e292b08cc4: ud,
      __wbg_button_bb3285fcdf965178: Uo,
      __wbg_new_1e52e3c919312525: Nu,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: Ii,
      __wbg_observe_592b94857eed8e27: rd,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: ki,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: Tp,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: _f,
      __wbg_width_a86bcd32bd998060: Vp,
      __wbg_queryCounterEXT_ebb00bcc96221671: pd,
      __wbg_height_cd732bbdc7b66e49: Gf,
      __wbg_contentRect_0fb8c8900d689a0c: ds,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: Bf,
      __wbg_width_08e66520b99071f4: Rp,
      __wbg_height_e9afb506f31052a9: Wf,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: Yf,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: Fi,
      __wbg_get_37b48b8fa52d1f2c: Rf,
      __wbg_set_width_031bdecd763c5855: jw,
      __wbg_set_height_ad5056ea051acd78: ig,
      __wbg_getContext_486aab500e1c34c9: cf,
      __wbg_getContext_9fd4db9b1cf155db: sf,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: Qf,
      __wbg_addEventListener_ea90bc131475777e: bo,
      __wbg_set_width_f9e631f4ee129e5c: Jw,
      __wbg_set_height_ef298446b359b0c5: ug,
      __wbg_getContext_70c2d1bed75d4122: of,
      __wbg_getContext_422b32d0ee4b8076: bf,
      __wbg_resolve_d82363d90af6928a: Md,
      __wbg_then_591b6b3a75ee817a: W1,
      __wbg_iterator_cc47ba25a2be735a: au,
      __wbg_get_9a29be2cb383ed9a: Vf,
      __wbg_next_402fa10b59ab20c3: td,
      __wbg_new_2e117a478906f062: Qu,
      __wbg_new_36e147a8ced3c6e0: Xu,
      __wbg_of_62183ea089c00bfa: nd,
      __wbg_isArray_145a34fd0a38d37b: tu,
      __wbg_new_e66a4b7758dd2e5c: Ku,
      __wbg_isSafeInteger_a3389a198582f5f6: ru,
      __wbg_is_de5b366c746e004c: nu,
      __wbg_entries_c261c3fa1f281256: Wi,
      __wbg_then_2a84678a50976959: G1,
      __wbg_length_589238bdcf171f0e: cu,
      __wbg_prototypesetcall_d721637c7ca66eb8: gd,
      __wbg_set_272b80acaf9a75e8: jd,
      __wbg_new_81880fb5002cb255: Yu,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: ed,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: t1,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: n1,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: r1,
      __wbg_static_accessor_WINDOW_168f178805d978fe: a1,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: jf,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: Kf,
      __wbg_queueMicrotask_1c9b3800e321a967: hd,
      __wbg_queueMicrotask_311744e534a929a3: xd,
      __wbg_set_4564f7dc44fcb0c9: Nd,
      __wbg___wbindgen_number_get_1cc01dd708740256: eo,
      __wbg___wbindgen_in_4990f46af709e33c: jc,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: to,
      __wbg___wbindgen_is_null_6d937fbfb6478470: Qc,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: Kc,
      __wbg_Number_c4bdf66bb78f7977: Oc,
      __wbg_Error_fdd633d4bb5dd76a: Lc,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: Nc,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: Xc,
      __wbg___wbindgen_string_get_71bb4348194e31f0: _o,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: qc,
      __wbg___wbindgen_is_function_acc5528be2b923f2: Jc,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: Yc,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: Zc,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: Uc,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: ro,
      __wbg___wbindgen_debug_string_8a447059637473e2: Hc,
      __wbindgen_init_externref_table: r2,
      __wbindgen_cast_0000000000000001: Op,
      __wbindgen_cast_0000000000000002: Gp,
      __wbindgen_cast_0000000000000003: Wp,
      __wbindgen_cast_0000000000000004: zp,
      __wbindgen_cast_0000000000000005: Up,
      __wbindgen_cast_0000000000000006: qp,
      __wbindgen_cast_0000000000000007: Hp,
      __wbindgen_cast_0000000000000008: jp,
      __wbindgen_cast_0000000000000009: Np,
      __wbindgen_cast_000000000000000a: Jp,
      __wbindgen_cast_000000000000000b: Qp,
      __wbindgen_cast_000000000000000c: Xp,
      __wbindgen_cast_000000000000000d: Yp,
      __wbindgen_cast_000000000000000e: Kp,
      __wbindgen_cast_000000000000000f: Zp,
      __wbindgen_cast_0000000000000010: e2,
      __wbindgen_cast_0000000000000011: _2,
      __wbindgen_cast_0000000000000012: t2
    }
  }, Vc), { memory: G2, mount: W2, __wbg_proteusapp_free: z2, proteusapp_addChild: U2, proteusapp_animateTo: q2, proteusapp_bakeTexture: H2, proteusapp_bakedImageSize: j2, proteusapp_bakedTextSize: N2, proteusapp_channelDestroy: J2, proteusapp_channelSet: Q2, proteusapp_component: X2, proteusapp_copyBakedImageFrom: Y2, proteusapp_createVideo: K2, proteusapp_cropImage: Z2, proteusapp_declareGeometry: el, proteusapp_declaredGeometry: _l, proteusapp_destroy: tl, proteusapp_freeResources: rl, proteusapp_get: nl, proteusapp_hideVideo: al, proteusapp_loadTexture: bl, proteusapp_mergeFrom: cl, proteusapp_mergeFromWithBehavior: ol, proteusapp_new: sl, proteusapp_onBlur: il, proteusapp_onClick: fl, proteusapp_onDrag: ul, proteusapp_onDropped: dl, proteusapp_onFocus: gl, proteusapp_onHoverEnter: wl, proteusapp_onHoverExit: pl, proteusapp_onPress: ll, proteusapp_onRelease: ml, proteusapp_onTransitionComplete: hl, proteusapp_pointerLeft: xl, proteusapp_pointerMoved: yl, proteusapp_pointerPressed: $l, proteusapp_pointerReleased: Sl, proteusapp_releaseVideo: vl, proteusapp_removeChild: Al, proteusapp_setDeclaredGeometry: Il, proteusapp_setDisabled: Tl, proteusapp_setImage: Dl, proteusapp_setInteractive: Bl, proteusapp_setOpacity: Fl, proteusapp_setText: Pl, proteusapp_setTexture: kl, proteusapp_setTransitionInteraction: Ml, proteusapp_setVideoCrossfade: Cl, proteusapp_setVisible: Rl, proteusapp_showVideo: Vl, proteusapp_splitTo: El, proteusapp_splitToWithBehavior: Ll, proteusapp_splitToWithStates: Ol, proteusapp_texture: Gl, proteusapp_textureState: Wl, proteusapp_tick: zl, proteusapp_transitionChannel: Ul, proteusapp_uploadVideoFrame: ql, __wbg_handle_free: Hl, __wbg_texturehandle_free: jl, __wbg_transitionchannel_free: Nl, __wbg_videohandle_free: Jl, handle_fromId: Ql, handle_id: Xl, texturehandle_fromId: Yl, texturehandle_id: Kl, __abort_handler: Zl, __instance_terminated: e3, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: _3, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: t3, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: r3, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: n3, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: a3, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: b3, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: c3, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: o3, __wbindgen_malloc: s3, __wbindgen_realloc: i3, __wbindgen_exn_store: f3, __externref_table_alloc: u3, __wbindgen_externrefs: d3, __wbindgen_free: g3, __wbindgen_destroy_closure: w3, __externref_table_dealloc: p3, __wbindgen_start: zt } = O2, l3 = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: Zl,
    __externref_table_alloc: u3,
    __externref_table_dealloc: p3,
    __instance_terminated: e3,
    __wbg_handle_free: Hl,
    __wbg_proteusapp_free: z2,
    __wbg_texturehandle_free: jl,
    __wbg_transitionchannel_free: Nl,
    __wbg_videohandle_free: Jl,
    __wbindgen_destroy_closure: w3,
    __wbindgen_exn_store: f3,
    __wbindgen_externrefs: d3,
    __wbindgen_free: g3,
    __wbindgen_malloc: s3,
    __wbindgen_realloc: i3,
    __wbindgen_start: zt,
    handle_fromId: Ql,
    handle_id: Xl,
    memory: G2,
    mount: W2,
    proteusapp_addChild: U2,
    proteusapp_animateTo: q2,
    proteusapp_bakeTexture: H2,
    proteusapp_bakedImageSize: j2,
    proteusapp_bakedTextSize: N2,
    proteusapp_channelDestroy: J2,
    proteusapp_channelSet: Q2,
    proteusapp_component: X2,
    proteusapp_copyBakedImageFrom: Y2,
    proteusapp_createVideo: K2,
    proteusapp_cropImage: Z2,
    proteusapp_declareGeometry: el,
    proteusapp_declaredGeometry: _l,
    proteusapp_destroy: tl,
    proteusapp_freeResources: rl,
    proteusapp_get: nl,
    proteusapp_hideVideo: al,
    proteusapp_loadTexture: bl,
    proteusapp_mergeFrom: cl,
    proteusapp_mergeFromWithBehavior: ol,
    proteusapp_new: sl,
    proteusapp_onBlur: il,
    proteusapp_onClick: fl,
    proteusapp_onDrag: ul,
    proteusapp_onDropped: dl,
    proteusapp_onFocus: gl,
    proteusapp_onHoverEnter: wl,
    proteusapp_onHoverExit: pl,
    proteusapp_onPress: ll,
    proteusapp_onRelease: ml,
    proteusapp_onTransitionComplete: hl,
    proteusapp_pointerLeft: xl,
    proteusapp_pointerMoved: yl,
    proteusapp_pointerPressed: $l,
    proteusapp_pointerReleased: Sl,
    proteusapp_releaseVideo: vl,
    proteusapp_removeChild: Al,
    proteusapp_setDeclaredGeometry: Il,
    proteusapp_setDisabled: Tl,
    proteusapp_setImage: Dl,
    proteusapp_setInteractive: Bl,
    proteusapp_setOpacity: Fl,
    proteusapp_setText: Pl,
    proteusapp_setTexture: kl,
    proteusapp_setTransitionInteraction: Ml,
    proteusapp_setVideoCrossfade: Cl,
    proteusapp_setVisible: Rl,
    proteusapp_showVideo: Vl,
    proteusapp_splitTo: El,
    proteusapp_splitToWithBehavior: Ll,
    proteusapp_splitToWithStates: Ol,
    proteusapp_texture: Gl,
    proteusapp_textureState: Wl,
    proteusapp_tick: zl,
    proteusapp_transitionChannel: Ul,
    proteusapp_uploadVideoFrame: ql,
    texturehandle_fromId: Yl,
    texturehandle_id: Kl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: o3,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: _3,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: a3,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: b3,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: c3,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: r3,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: n3,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: t3
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  L2(l3);
  zt();
  async function m3(_, e) {
    await Ec(_, (t) => e.setup(new y3(t)), e.update ? (t) => {
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
  }, h3 = class {
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
  }, x3 = class {
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
  }, y3 = class {
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
      return new h3(this, this.wasmApp.transitionChannel(e == null ? void 0 : e.id()));
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
      return new x3(this, this.wasmApp.createVideo());
    }
    textureFromId(e) {
      return new je(this, Q.fromId(e));
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
  const $3 = "" + new URL("proteus_bench_web_bg-IC59UNfR.wasm", import.meta.url).href;
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
      const a = m_(r, s.__wbindgen_malloc), b = M, c = s.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, b, n);
      return j.__wrap(c);
    }
    bakedImageSize(e) {
      return m(e, h), s.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return m(e, h), s.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    channelDestroy(e) {
      m(e, X);
      var t = e.__destroy_into_raw();
      s.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, r, n, a) {
      m(e, X), m(t, h), m(r, h);
      const b = s.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n, a);
      if (b[1]) throw P(b[0]);
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
      return Y.__wrap(e);
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
    loadTexture(e, t) {
      const r = m_(e, s.__wbindgen_malloc), n = M, a = s.proteusapp_loadTexture(this.__wbg_ptr, r, n, t);
      return a === 0 ? void 0 : j.__wrap(a);
    }
    mergeFrom(e, t, r, n) {
      m(e, h);
      const a = __(t, s.__wbindgen_malloc), b = M, c = s.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, b, r, n);
      if (c[1]) throw P(c[0]);
    }
    mergeFromWithBehavior(e, t, r, n, a) {
      m(e, h);
      const b = __(t, s.__wbindgen_malloc), c = M, o = s.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, b, c, r, n, a);
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
      m(e, X), s.proteusapp_onDropped(this.__wbg_ptr, e.__wbg_ptr, t);
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
      m(e, Y), s.proteusapp_releaseVideo(this.__wbg_ptr, e.__wbg_ptr);
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
      m(e, h), m(t, Y);
      const r = s.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (r[2]) throw P(r[1]);
      return r[0] !== 0;
    }
    splitTo(e, t, r, n) {
      m(e, h);
      const a = __(t, s.__wbindgen_malloc), b = M, c = s.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, b, r, n);
      if (c[1]) throw P(c[0]);
    }
    splitToWithBehavior(e, t, r, n, a) {
      m(e, h);
      const b = __(t, s.__wbindgen_malloc), c = M, o = s.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, b, c, r, n, a);
      if (o[1]) throw P(o[0]);
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
      const t = s.proteusapp_transitionChannel(this.__wbg_ptr, !$(e), $(e) ? 0 : e);
      return X.__wrap(t);
    }
    uploadVideoFrame(e, t, r, n) {
      m(e, Y);
      const a = m_(n, s.__wbindgen_malloc), b = M;
      return s.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, r, a, b) !== 0;
    }
  }
  Symbol.dispose && (Te.prototype[Symbol.dispose] = Te.prototype.free);
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
      s.__wbg_transitionchannel_free(e, 0);
    }
  }
  Symbol.dispose && (X.prototype[Symbol.dispose] = X.prototype.free);
  class Y {
    static __wrap(e) {
      const t = Object.create(Y.prototype);
      return t.__wbg_ptr = e, vt.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, vt.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_videohandle_free(e, 0);
    }
  }
  Symbol.dispose && (Y.prototype[Symbol.dispose] = Y.prototype.free);
  function S3() {
    s.clear();
  }
  function v3(_) {
    s.on_frame(_);
  }
  function A3(_, e) {
    const t = W(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = M;
    s.show(t, r, e);
  }
  function I3(_, e) {
    const t = W(_, s.__wbindgen_malloc, s.__wbindgen_realloc), r = M;
    return s.start(t, r, e);
  }
  function T3() {
    s.stop_frames();
  }
  function D3(_, e) {
    return Error(A(_, e));
  }
  function B3(_) {
    return Number(_);
  }
  function F3(_, e) {
    const t = String(e), r = W(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function P3(_) {
    return _.Window;
  }
  function k3(_) {
    return _.WorkerGlobalScope;
  }
  function M3(_, e) {
    const t = e, r = typeof t == "bigint" ? t : void 0;
    k().setBigInt64(_ + 8, $(r) ? BigInt(0) : r, true), k().setInt32(_ + 0, !$(r), true);
  }
  function C3(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return $(t) ? 16777215 : t ? 1 : 0;
  }
  function R3(_, e) {
    const t = M_(e), r = W(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function V3(_, e) {
    return _ in e;
  }
  function E3(_) {
    return typeof _ == "bigint";
  }
  function L3(_) {
    return typeof _ == "function";
  }
  function O3(_) {
    return _ === null;
  }
  function G3(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function W3(_) {
    return _ === void 0;
  }
  function z3(_, e) {
    return _ === e;
  }
  function U3(_, e) {
    return _ == e;
  }
  function q3(_, e) {
    const t = e, r = typeof t == "number" ? t : void 0;
    k().setFloat64(_ + 8, $(r) ? 0 : r, true), k().setInt32(_ + 0, !$(r), true);
  }
  function H3(_, e) {
    const t = e, r = typeof t == "string" ? t : void 0;
    var n = $(r) ? 0 : W(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function j3(_, e) {
    throw new Error(A(_, e));
  }
  function N3(_) {
    _._wbg_cb_unref();
  }
  function J3(_) {
    _.abort();
  }
  function Q3(_) {
    return _.aborted;
  }
  function X3(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Y3(_, e) {
    _.activeTexture(e >>> 0);
  }
  function K3() {
    return g(function(_, e, t, r) {
      _.addEventListener(A(e, t), r);
    }, arguments);
  }
  function Z3() {
    return g(function(_) {
      return _.arrayBuffer();
    }, arguments);
  }
  function e4(_, e, t) {
    _.attachShader(e, t);
  }
  function _4(_, e, t) {
    _.attachShader(e, t);
  }
  function t4(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function r4() {
    return g(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function n4(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, A(r, n));
  }
  function a4(_, e, t, r, n) {
    _.bindAttribLocation(e, t >>> 0, A(r, n));
  }
  function b4(_, e, t, r, n, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, r, n, a);
  }
  function c4(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function o4(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function s4(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function i4(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function f4(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function u4(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function d4(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function g4(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function w4(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function p4(_, e) {
    _.bindVertexArrayOES(e);
  }
  function l4(_, e) {
    _.bindVertexArray(e);
  }
  function m4(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function h4(_, e, t, r, n) {
    _.blendColor(e, t, r, n);
  }
  function x4(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function y4(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function $4(_, e) {
    _.blendEquation(e >>> 0);
  }
  function S4(_, e) {
    _.blendEquation(e >>> 0);
  }
  function v4(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function A4(_, e, t, r, n) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function I4(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function T4(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function D4(_, e, t, r, n, a, b, c, o, i, d) {
    _.blitFramebuffer(e, t, r, n, a, b, c, o, i >>> 0, d >>> 0);
  }
  function B4(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function F4(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function P4(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function k4(_, e, t, r) {
    _.bufferData(e >>> 0, t, r >>> 0);
  }
  function M4(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function C4(_, e, t, r) {
    _.bufferSubData(e >>> 0, t, r);
  }
  function R4(_) {
    return _.button;
  }
  function V4() {
    return g(function(_, e, t, r) {
      return _.call(e, t, r);
    }, arguments);
  }
  function E4() {
    return g(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function L4() {
    return g(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function O4(_, e, t, r, n) {
    _.clearBufferfv(e >>> 0, t, L(r, n));
  }
  function G4(_, e, t, r, n) {
    _.clearBufferiv(e >>> 0, t, Z(r, n));
  }
  function W4(_, e, t, r, n) {
    _.clearBufferuiv(e >>> 0, t, $e(r, n));
  }
  function z4(_, e) {
    _.clearDepth(e);
  }
  function U4(_, e) {
    _.clearDepth(e);
  }
  function q4(_, e) {
    _.clearStencil(e);
  }
  function H4(_, e) {
    _.clearStencil(e);
  }
  function j4(_, e) {
    _.clear(e >>> 0);
  }
  function N4(_, e) {
    _.clear(e >>> 0);
  }
  function J4(_, e, t, r) {
    return _.clientWaitSync(e, t >>> 0, r >>> 0);
  }
  function Q4(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function X4(_, e, t, r, n) {
    _.colorMask(e !== 0, t !== 0, r !== 0, n !== 0);
  }
  function Y4(_, e) {
    _.compileShader(e);
  }
  function K4(_, e) {
    _.compileShader(e);
  }
  function Z4(_, e, t, r, n, a, b, c, o) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o);
  }
  function em(_, e, t, r, n, a, b, c, o) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o);
  }
  function _m(_, e, t, r, n, a, b, c, o, i) {
    _.compressedTexSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o, i);
  }
  function tm(_, e, t, r, n, a, b, c, o, i, d, v) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, b, c, o, i >>> 0, d, v);
  }
  function rm(_, e, t, r, n, a, b, c, o, i, d) {
    _.compressedTexSubImage3D(e >>> 0, t, r, n, a, b, c, o, i >>> 0, d);
  }
  function nm() {
    return g(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function am(_) {
    return _.contentRect;
  }
  function bm(_, e, t, r, n, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, r, n, a);
  }
  function cm(_, e, t, r, n, a, b, c, o) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, b, c, o);
  }
  function om(_, e, t, r, n, a, b, c, o) {
    _.copyTexSubImage2D(e >>> 0, t, r, n, a, b, c, o);
  }
  function sm(_, e, t, r, n, a, b, c, o, i) {
    _.copyTexSubImage3D(e >>> 0, t, r, n, a, b, c, o, i);
  }
  function im() {
    return g(function(_, e, t, r) {
      _.copyTextureToTexture(e, t, r);
    }, arguments);
  }
  function fm() {
    return g(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function um(_, e) {
    return _.createBindGroup(e);
  }
  function dm(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : D(e);
  }
  function gm() {
    return g(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function wm(_) {
    const e = _.createBuffer();
    return $(e) ? 0 : D(e);
  }
  function pm(_, e) {
    return _.createCommandEncoder(e);
  }
  function lm(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : D(e);
  }
  function mm(_) {
    const e = _.createFramebuffer();
    return $(e) ? 0 : D(e);
  }
  function hm(_, e) {
    return _.createPipelineLayout(e);
  }
  function xm(_) {
    const e = _.createProgram();
    return $(e) ? 0 : D(e);
  }
  function ym(_) {
    const e = _.createProgram();
    return $(e) ? 0 : D(e);
  }
  function $m(_) {
    const e = _.createQuery();
    return $(e) ? 0 : D(e);
  }
  function Sm() {
    return g(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function vm(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : D(e);
  }
  function Am(_) {
    const e = _.createRenderbuffer();
    return $(e) ? 0 : D(e);
  }
  function Im(_, e) {
    return _.createSampler(e);
  }
  function Tm(_) {
    const e = _.createSampler();
    return $(e) ? 0 : D(e);
  }
  function Dm(_, e) {
    return _.createShaderModule(e);
  }
  function Bm(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : D(t);
  }
  function Fm(_, e) {
    const t = _.createShader(e >>> 0);
    return $(t) ? 0 : D(t);
  }
  function Pm(_) {
    const e = _.createTexture();
    return $(e) ? 0 : D(e);
  }
  function km(_) {
    const e = _.createTexture();
    return $(e) ? 0 : D(e);
  }
  function Mm() {
    return g(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function Cm(_) {
    const e = _.createVertexArrayOES();
    return $(e) ? 0 : D(e);
  }
  function Rm(_) {
    const e = _.createVertexArray();
    return $(e) ? 0 : D(e);
  }
  function Vm() {
    return g(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function Em(_, e) {
    _.cullFace(e >>> 0);
  }
  function Lm(_, e) {
    _.cullFace(e >>> 0);
  }
  function Om(_, e, t, r) {
    console.debug(_, e, t, r);
  }
  function Gm(_, e) {
    _.deleteBuffer(e);
  }
  function Wm(_, e) {
    _.deleteBuffer(e);
  }
  function zm(_, e) {
    _.deleteFramebuffer(e);
  }
  function Um(_, e) {
    _.deleteFramebuffer(e);
  }
  function qm(_, e) {
    _.deleteProgram(e);
  }
  function Hm(_, e) {
    _.deleteProgram(e);
  }
  function jm(_, e) {
    _.deleteQuery(e);
  }
  function Nm(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Jm(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Qm(_, e) {
    _.deleteSampler(e);
  }
  function Xm(_, e) {
    _.deleteShader(e);
  }
  function Ym(_, e) {
    _.deleteShader(e);
  }
  function Km(_, e) {
    _.deleteSync(e);
  }
  function Zm(_, e) {
    _.deleteTexture(e);
  }
  function e7(_, e) {
    _.deleteTexture(e);
  }
  function _7(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function t7(_, e) {
    _.deleteVertexArray(e);
  }
  function r7(_, e) {
    _.depthFunc(e >>> 0);
  }
  function n7(_, e) {
    _.depthFunc(e >>> 0);
  }
  function a7(_, e) {
    _.depthMask(e !== 0);
  }
  function b7(_, e) {
    _.depthMask(e !== 0);
  }
  function c7(_, e, t) {
    _.depthRange(e, t);
  }
  function o7(_, e, t) {
    _.depthRange(e, t);
  }
  function s7(_, e) {
    const t = e.description, r = W(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function i7(_) {
    _.destroy();
  }
  function f7(_) {
    return _.devicePixelRatio;
  }
  function u7(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function d7(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function g7(_, e) {
    _.disable(e >>> 0);
  }
  function w7(_, e) {
    _.disable(e >>> 0);
  }
  function p7(_) {
    const e = _.document;
    return $(e) ? 0 : D(e);
  }
  function l7(_) {
    return _.done;
  }
  function m7(_, e, t, r, n) {
    _.drawArraysInstancedANGLE(e >>> 0, t, r, n);
  }
  function h7(_, e, t, r, n) {
    _.drawArraysInstanced(e >>> 0, t, r, n);
  }
  function x7(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function y7(_, e, t, r) {
    _.drawArrays(e >>> 0, t, r);
  }
  function $7(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function S7(_, e) {
    _.drawBuffers(e);
  }
  function v7(_, e, t, r, n, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, r >>> 0, n, a);
  }
  function A7(_, e, t, r, n, a) {
    _.drawElementsInstanced(e >>> 0, t, r >>> 0, n, a);
  }
  function I7(_, e, t, r, n, a) {
    _.drawIndexed(e >>> 0, t >>> 0, r >>> 0, n, a >>> 0);
  }
  function T7(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function D7(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function B7(_, e) {
    _.enable(e >>> 0);
  }
  function F7(_, e) {
    _.enable(e >>> 0);
  }
  function P7(_, e) {
    _.endQuery(e >>> 0);
  }
  function k7(_) {
    _.end();
  }
  function M7(_) {
    return Object.entries(_);
  }
  function C7(_, e, t, r) {
    console.error(_, e, t, r);
  }
  function R7(_) {
    console.error(_);
  }
  function V7(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(A(_, e));
    } finally {
      s.__wbindgen_free(t, r, 1);
    }
  }
  function E7(_, e, t) {
    const r = _.fenceSync(e >>> 0, t >>> 0);
    return $(r) ? 0 : D(r);
  }
  function L7(_, e, t) {
    return _.fetch(A(e, t));
  }
  function O7(_, e, t, r) {
    return _.fetch(A(e, t), r);
  }
  function G7(_) {
    return _.finish();
  }
  function W7(_, e) {
    return _.finish(e);
  }
  function z7(_) {
    _.flush();
  }
  function U7(_) {
    _.flush();
  }
  function q7(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function H7(_, e, t, r, n) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, r >>> 0, n);
  }
  function j7(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function N7(_, e, t, r, n, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, r >>> 0, n, a);
  }
  function J7(_, e, t, r, n, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, r, n, a);
  }
  function Q7(_, e, t, r, n, a, b) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, r, n, a, b);
  }
  function X7(_, e) {
    _.frontFace(e >>> 0);
  }
  function Y7(_, e) {
    _.frontFace(e >>> 0);
  }
  function K7(_) {
    return _.getBoundingClientRect();
  }
  function Z7(_, e, t, r) {
    _.getBufferSubData(e >>> 0, t, r);
  }
  function e6() {
    return g(function(_, e, t, r) {
      const n = _.getContext(A(e, t), r);
      return $(n) ? 0 : D(n);
    }, arguments);
  }
  function _6() {
    return g(function(_, e, t) {
      const r = _.getContext(A(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function t6() {
    return g(function(_, e, t) {
      const r = _.getContext(A(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function r6() {
    return g(function(_, e, t, r) {
      const n = _.getContext(A(e, t), r);
      return $(n) ? 0 : D(n);
    }, arguments);
  }
  function n6() {
    return g(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function a6(_, e, t) {
    const r = _.getElementById(A(e, t));
    return $(r) ? 0 : D(r);
  }
  function b6() {
    return g(function(_, e, t) {
      const r = _.getExtension(A(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function c6() {
    return g(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function o6() {
    return g(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function s6() {
    return g(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function i6() {
    return g(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function f6(_) {
    const e = _.getPreferredCanvasFormat();
    return (be.indexOf(e) + 1 || 96) - 1;
  }
  function u6(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : W(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function d6(_, e, t) {
    const r = e.getProgramInfoLog(t);
    var n = $(r) ? 0 : W(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function g6(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function w6(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function p6(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function l6(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : W(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function m6(_, e, t) {
    const r = e.getShaderInfoLog(t);
    var n = $(r) ? 0 : W(r, s.__wbindgen_malloc, s.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, n, true);
  }
  function h6(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function x6(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function y6(_) {
    const e = _.getSupportedExtensions();
    return $(e) ? 0 : D(e);
  }
  function $6(_) {
    const e = _.getSupportedProfiles();
    return $(e) ? 0 : D(e);
  }
  function S6(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function v6(_, e, t, r) {
    return _.getUniformBlockIndex(e, A(t, r));
  }
  function A6(_, e, t, r) {
    const n = _.getUniformLocation(e, A(t, r));
    return $(n) ? 0 : D(n);
  }
  function I6(_, e, t, r) {
    const n = _.getUniformLocation(e, A(t, r));
    return $(n) ? 0 : D(n);
  }
  function T6(_, e) {
    return _[e >>> 0];
  }
  function D6(_, e) {
    const t = _[e >>> 0];
    return $(t) ? 0 : D(t);
  }
  function B6() {
    return g(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function F6(_, e) {
    return _[e >>> 0];
  }
  function P6(_, e) {
    return _[e];
  }
  function k6(_) {
    return _.gpu;
  }
  function M6(_) {
    return _.height;
  }
  function C6(_) {
    return _.height;
  }
  function R6(_) {
    return _.hidden;
  }
  function V6(_, e, t) {
    return _.includes(e, t);
  }
  function E6(_) {
    return _.info;
  }
  function L6(_, e, t, r) {
    console.info(_, e, t, r);
  }
  function O6(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function G6(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function W6(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function z6(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function U6(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function q6(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function H6(_) {
    let e;
    try {
      e = _ instanceof Response;
    } catch {
      e = false;
    }
    return e;
  }
  function j6(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function N6(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function J6(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function Q6() {
    return g(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function X6(_) {
    return Array.isArray(_);
  }
  function Y6(_) {
    return Number.isSafeInteger(_);
  }
  function K6(_, e) {
    return Object.is(_, e);
  }
  function Z6() {
    return Symbol.iterator;
  }
  function e5(_, e) {
    const t = e.label, r = W(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function _5(_) {
    return _.length;
  }
  function t5(_) {
    return _.length;
  }
  function r5(_) {
    return _.limits;
  }
  function n5(_) {
    return _.limits;
  }
  function a5(_, e) {
    _.linkProgram(e);
  }
  function b5(_, e) {
    _.linkProgram(e);
  }
  function c5(_, e, t, r) {
    console.log(_, e, t, r);
  }
  function o5(_, e, t, r) {
    return _.mapAsync(e >>> 0, t, r);
  }
  function s5(_) {
    return _.maxBindGroups;
  }
  function i5(_) {
    return _.maxBindingsPerBindGroup;
  }
  function f5(_) {
    return _.maxBufferSize;
  }
  function u5(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function d5(_) {
    return _.maxColorAttachments;
  }
  function g5(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function w5(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function p5(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function l5(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function m5(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function h5(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function x5(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function y5(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function $5(_) {
    return _.maxInterStageShaderVariables;
  }
  function S5(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function v5(_) {
    return _.maxSamplersPerShaderStage;
  }
  function A5(_) {
    return _.maxStorageBufferBindingSize;
  }
  function I5(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function T5(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function D5(_) {
    return _.maxTextureArrayLayers;
  }
  function B5(_) {
    return _.maxTextureDimension1D;
  }
  function F5(_) {
    return _.maxTextureDimension2D;
  }
  function P5(_) {
    return _.maxTextureDimension3D;
  }
  function k5(_) {
    return _.maxUniformBufferBindingSize;
  }
  function M5(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function C5(_) {
    return _.maxVertexAttributes;
  }
  function R5(_) {
    return _.maxVertexBufferArrayStride;
  }
  function V5(_) {
    return _.maxVertexBuffers;
  }
  function E5(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function L5(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function O5(_) {
    return _.navigator;
  }
  function G5(_) {
    return _.navigator;
  }
  function W5() {
    return g(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function z5() {
    return new Error();
  }
  function U5() {
    return new Object();
  }
  function q5() {
    return new Array();
  }
  function H5() {
    return g(function() {
      return new AbortController();
    }, arguments);
  }
  function j5(_) {
    return new Uint8Array(_);
  }
  function N5(_, e) {
    return new Error(A(_, e));
  }
  function J5(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, r = (a, b) => {
        const c = t.a;
        t.a = 0;
        try {
          return uS(c, t.b, a, b);
        } finally {
          t.a = c;
        }
      };
      return new Promise(r);
    } finally {
      t.a = 0;
    }
  }
  function Q5(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function X5() {
    return g(function(_) {
      return _.next();
    }, arguments);
  }
  function Y5(_) {
    return _.next;
  }
  function K5(_) {
    return _.now();
  }
  function Z5(_, e) {
    _.observe(e);
  }
  function e8(_) {
    return Array.of(_);
  }
  function _8(_) {
    return _.offsetX;
  }
  function t8(_) {
    return _.offsetY;
  }
  function r8(_) {
    return _.ok;
  }
  function n8(_) {
    return _.onSubmittedWorkDone();
  }
  function a8(_) {
    const e = _.performance;
    return $(e) ? 0 : D(e);
  }
  function b8(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function c8(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function o8(_, e, t) {
    _.polygonOffset(e, t);
  }
  function s8(_, e, t) {
    _.polygonOffset(e, t);
  }
  function i8(_) {
    _.preventDefault();
  }
  function f8(_) {
    return Te.__wrap(_);
  }
  function u8(_, e, t) {
    Uint8Array.prototype.set.call(i_(_, e), t);
  }
  function d8(_, e) {
    return _.push(e);
  }
  function g8(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function w8() {
    return g(function(_, e, t) {
      return _.querySelectorAll(A(e, t));
    }, arguments);
  }
  function p8() {
    return g(function(_, e, t) {
      const r = _.querySelector(A(e, t));
      return $(r) ? 0 : D(r);
    }, arguments);
  }
  function l8(_) {
    return _.queueMicrotask;
  }
  function m8(_) {
    queueMicrotask(_);
  }
  function h8(_) {
    return _.queue;
  }
  function x8(_, e) {
    _.readBuffer(e >>> 0);
  }
  function y8() {
    return g(function(_, e, t, r, n, a, b, c) {
      _.readPixels(e, t, r, n, a >>> 0, b >>> 0, c);
    }, arguments);
  }
  function $8() {
    return g(function(_, e, t, r, n, a, b, c) {
      _.readPixels(e, t, r, n, a >>> 0, b >>> 0, c);
    }, arguments);
  }
  function S8() {
    return g(function(_, e, t, r, n, a, b, c) {
      _.readPixels(e, t, r, n, a >>> 0, b >>> 0, c);
    }, arguments);
  }
  function v8(_, e, t, r, n, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, r >>> 0, n, a);
  }
  function A8(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function I8(_, e, t, r, n) {
    _.renderbufferStorage(e >>> 0, t >>> 0, r, n);
  }
  function T8(_, e) {
    return _.requestAdapter(e);
  }
  function D8(_) {
    return _.requestAdapter();
  }
  function B8() {
    return g(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function F8(_, e) {
    return _.requestDevice(e);
  }
  function P8(_) {
    return Promise.resolve(_);
  }
  function k8(_, e, t, r) {
    _.samplerParameterf(e, t >>> 0, r);
  }
  function M8(_, e, t, r) {
    _.samplerParameteri(e, t >>> 0, r);
  }
  function C8(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function R8(_, e, t, r, n) {
    _.scissor(e, t, r, n);
  }
  function V8() {
    return g(function(_, e, t, r, n, a, b) {
      _.setBindGroup(e >>> 0, t, $e(r, n), a, b >>> 0);
    }, arguments);
  }
  function E8(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function L8(_, e, t, r, n) {
    _.setIndexBuffer(e, Y_[t], r, n);
  }
  function O8(_, e, t, r) {
    _.setIndexBuffer(e, Y_[t], r);
  }
  function G8(_, e) {
    _.setPipeline(e);
  }
  function W8(_, e, t, r) {
    _.setVertexBuffer(e >>> 0, t, r);
  }
  function z8(_, e, t, r, n) {
    _.setVertexBuffer(e >>> 0, t, r, n);
  }
  function U8(_, e, t, r, n, a, b) {
    _.setViewport(e, t, r, n, a, b);
  }
  function q8(_, e, t) {
    _.set(e, t >>> 0);
  }
  function H8() {
    return g(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function j8(_, e, t) {
    _[e] = t;
  }
  function N8(_, e) {
    _.a = e;
  }
  function J8(_, e) {
    _.access = SS[e];
  }
  function Q8(_, e) {
    _.addressModeU = Q_[e];
  }
  function X8(_, e) {
    _.addressModeV = Q_[e];
  }
  function Y8(_, e) {
    _.addressModeW = Q_[e];
  }
  function K8(_, e) {
    _.alpha = e;
  }
  function Z8(_, e) {
    _.alphaMode = pS[e];
  }
  function e9(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function _9(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function t9(_, e) {
    _.arrayStride = e;
  }
  function r9(_, e) {
    _.aspect = Ht[e];
  }
  function n9(_, e) {
    _.aspect = Ht[e];
  }
  function a9(_, e) {
    _.attributes = e;
  }
  function b9(_, e) {
    _.b = e;
  }
  function c9(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function o9(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function s9(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function i9(_, e) {
    _.bindGroupLayouts = e;
  }
  function f9(_, e) {
    _.binding = e >>> 0;
  }
  function u9(_, e) {
    _.binding = e >>> 0;
  }
  function d9(_, e) {
    _.blend = e;
  }
  function g9(_, e) {
    _.buffer = e;
  }
  function w9(_, e) {
    _.buffer = e;
  }
  function p9(_, e) {
    _.buffers = e;
  }
  function l9(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function m9(_, e) {
    _.clearValue = e;
  }
  function h9(_, e, t) {
    _.code = A(e, t);
  }
  function x9(_, e) {
    _.colorAttachments = e;
  }
  function y9(_, e) {
    _.color = e;
  }
  function $9(_, e) {
    _.compare = X_[e];
  }
  function S9(_, e) {
    _.compare = X_[e];
  }
  function v9(_, e) {
    _.count = e >>> 0;
  }
  function A9(_, e) {
    _.cullMode = lS[e];
  }
  function I9(_, e, t) {
    _[e >>> 0] = t;
  }
  function T9(_, e) {
    _.depthBias = e;
  }
  function D9(_, e) {
    _.depthBiasClamp = e;
  }
  function B9(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function F9(_, e) {
    _.depthClearValue = e;
  }
  function P9(_, e) {
    _.depthCompare = X_[e];
  }
  function k9(_, e) {
    _.depthFailOp = Z_[e];
  }
  function M9(_, e) {
    _.depthLoadOp = K_[e];
  }
  function C9(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function R9(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function V9(_, e) {
    _.depthStencil = e;
  }
  function E9(_, e) {
    _.depthStencilAttachment = e;
  }
  function L9(_, e) {
    _.depthStoreOp = et[e];
  }
  function O9(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function G9(_, e) {
    _.device = e;
  }
  function W9(_, e) {
    _.dimension = _t[e];
  }
  function z9(_, e) {
    _.dimension = vS[e];
  }
  function U9(_, e) {
    _.dstFactor = Ut[e];
  }
  function q9(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function H9(_, e) {
    _.entries = e;
  }
  function j9(_, e) {
    _.entries = e;
  }
  function N9(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function J9(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function Q9(_, e) {
    _.externalTexture = e;
  }
  function X9(_, e) {
    _.failOp = Z_[e];
  }
  function Y9(_, e) {
    _.format = be[e];
  }
  function K9(_, e) {
    _.format = IS[e];
  }
  function Z9(_, e) {
    _.format = be[e];
  }
  function eh(_, e) {
    _.format = be[e];
  }
  function _h(_, e) {
    _.format = be[e];
  }
  function th(_, e) {
    _.format = be[e];
  }
  function rh(_, e) {
    _.format = be[e];
  }
  function nh(_, e) {
    _.fragment = e;
  }
  function ah(_, e) {
    _.frontFace = mS[e];
  }
  function bh(_, e) {
    _.g = e;
  }
  function ch(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function oh(_, e) {
    _.height = e >>> 0;
  }
  function sh(_, e) {
    _.height = e >>> 0;
  }
  function ih(_, e) {
    _.height = e >>> 0;
  }
  function fh(_, e, t) {
    _.label = A(e, t);
  }
  function uh(_, e, t) {
    _.label = A(e, t);
  }
  function dh(_, e, t) {
    _.label = A(e, t);
  }
  function gh(_, e, t) {
    _.label = A(e, t);
  }
  function wh(_, e, t) {
    _.label = A(e, t);
  }
  function ph(_, e, t) {
    _.label = A(e, t);
  }
  function lh(_, e, t) {
    _.label = A(e, t);
  }
  function mh(_, e, t) {
    _.label = A(e, t);
  }
  function hh(_, e, t) {
    _.label = A(e, t);
  }
  function xh(_, e, t) {
    _.label = A(e, t);
  }
  function yh(_, e, t) {
    _.label = A(e, t);
  }
  function $h(_, e, t) {
    _.label = A(e, t);
  }
  function Sh(_, e, t) {
    _.label = A(e, t);
  }
  function vh(_, e) {
    _.layout = e;
  }
  function Ah(_, e) {
    _.layout = e;
  }
  function Ih(_, e) {
    _.loadOp = K_[e];
  }
  function Th(_, e) {
    _.lodMaxClamp = e;
  }
  function Dh(_, e) {
    _.lodMinClamp = e;
  }
  function Bh(_, e) {
    _.magFilter = qt[e];
  }
  function Fh(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function Ph(_, e) {
    _.mask = e >>> 0;
  }
  function kh(_, e) {
    _.maxAnisotropy = e;
  }
  function Mh(_, e) {
    _.minBindingSize = e;
  }
  function Ch(_, e) {
    _.minFilter = qt[e];
  }
  function Rh(_, e) {
    _.mipLevel = e >>> 0;
  }
  function Vh(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Eh(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Lh(_, e) {
    _.mipmapFilter = hS[e];
  }
  function Oh(_, e) {
    _.module = e;
  }
  function Gh(_, e) {
    _.module = e;
  }
  function Wh(_, e) {
    _.multisample = e;
  }
  function zh(_, e) {
    _.multisampled = e !== 0;
  }
  function Uh(_, e) {
    _.offset = e;
  }
  function qh(_, e) {
    _.offset = e;
  }
  function Hh(_, e) {
    _.offset = e;
  }
  function jh(_, e) {
    _.operation = gS[e];
  }
  function Nh(_, e) {
    _.origin = e;
  }
  function Jh(_, e) {
    _.passOp = Z_[e];
  }
  function Qh(_, e) {
    _.powerPreference = xS[e];
  }
  function Xh(_, e) {
    _.primitive = e;
  }
  function Yh(_, e) {
    _.querySet = e;
  }
  function Kh(_, e) {
    _.r = e;
  }
  function Zh(_, e) {
    _.requiredFeatures = e;
  }
  function ex(_, e) {
    _.requiredLimits = e;
  }
  function _x(_, e) {
    _.resolveTarget = e;
  }
  function tx(_, e) {
    _.resource = e;
  }
  function rx(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function nx(_, e) {
    _.sampleCount = e >>> 0;
  }
  function ax(_, e) {
    _.sampleType = AS[e];
  }
  function bx(_, e) {
    _.sampler = e;
  }
  function cx(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function ox(_, e) {
    _.signal = e;
  }
  function sx(_, e) {
    _.size = e;
  }
  function ix(_, e) {
    _.size = e;
  }
  function fx(_, e) {
    _.size = e;
  }
  function ux(_, e) {
    _.srcFactor = Ut[e];
  }
  function dx(_, e) {
    _.stencilBack = e;
  }
  function gx(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function wx(_, e) {
    _.stencilFront = e;
  }
  function px(_, e) {
    _.stencilLoadOp = K_[e];
  }
  function lx(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function mx(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function hx(_, e) {
    _.stencilStoreOp = et[e];
  }
  function xx(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function yx(_, e) {
    _.stepMode = TS[e];
  }
  function $x(_, e) {
    _.storageTexture = e;
  }
  function Sx(_, e) {
    _.storeOp = et[e];
  }
  function vx(_, e) {
    _.stripIndexFormat = Y_[e];
  }
  function Ax(_, e) {
    _.targets = e;
  }
  function Ix(_, e) {
    _.texture = e;
  }
  function Tx(_, e) {
    _.texture = e;
  }
  function Dx(_, e) {
    _.timestampWrites = e;
  }
  function Bx(_, e) {
    _.topology = yS[e];
  }
  function Fx(_, e) {
    _.type = wS[e];
  }
  function Px(_, e) {
    _.type = $S[e];
  }
  function kx(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function Mx(_, e) {
    _.usage = e >>> 0;
  }
  function Cx(_, e) {
    _.usage = e >>> 0;
  }
  function Rx(_, e) {
    _.usage = e >>> 0;
  }
  function Vx(_, e) {
    _.usage = e >>> 0;
  }
  function Ex(_, e) {
    _.vertex = e;
  }
  function Lx(_, e) {
    _.view = e;
  }
  function Ox(_, e) {
    _.view = e;
  }
  function Gx(_, e) {
    _.viewDimension = _t[e];
  }
  function Wx(_, e) {
    _.viewDimension = _t[e];
  }
  function zx(_, e) {
    _.viewFormats = e;
  }
  function Ux(_, e) {
    _.viewFormats = e;
  }
  function qx(_, e) {
    _.visibility = e >>> 0;
  }
  function Hx(_, e) {
    _.width = e >>> 0;
  }
  function jx(_, e) {
    _.width = e >>> 0;
  }
  function Nx(_, e) {
    _.width = e >>> 0;
  }
  function Jx(_, e) {
    _.writeMask = e >>> 0;
  }
  function Qx(_, e) {
    _.x = e >>> 0;
  }
  function Xx(_, e) {
    _.y = e >>> 0;
  }
  function Yx(_, e) {
    _.z = e >>> 0;
  }
  function Kx(_, e, t, r) {
    _.shaderSource(e, A(t, r));
  }
  function Zx(_, e, t, r) {
    _.shaderSource(e, A(t, r));
  }
  function ey(_) {
    return _.signal;
  }
  function _y(_, e) {
    const t = e.stack, r = W(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function ty() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return $(_) ? 0 : D(_);
  }
  function ry() {
    const _ = typeof global > "u" ? null : global;
    return $(_) ? 0 : D(_);
  }
  function ny() {
    const _ = typeof self > "u" ? null : self;
    return $(_) ? 0 : D(_);
  }
  function ay() {
    const _ = typeof window > "u" ? null : window;
    return $(_) ? 0 : D(_);
  }
  function by(_, e) {
    const t = e.statusText, r = W(t, s.__wbindgen_malloc, s.__wbindgen_realloc), n = M;
    k().setInt32(_ + 4, n, true), k().setInt32(_ + 0, r, true);
  }
  function cy(_) {
    return _.status;
  }
  function oy(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function sy(_, e, t, r, n) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, r, n >>> 0);
  }
  function iy(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function fy(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function uy(_, e) {
    _.stencilMask(e >>> 0);
  }
  function dy(_, e) {
    _.stencilMask(e >>> 0);
  }
  function gy(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function wy(_, e, t, r, n) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, r >>> 0, n >>> 0);
  }
  function py(_, e) {
    _.submit(e);
  }
  function ly() {
    return g(function(_, e, t, r, n, a, b, c, o, i) {
      _.texImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function my() {
    return g(function(_, e, t, r, n, a, b, c, o, i) {
      _.texImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function hy() {
    return g(function(_, e, t, r, n, a, b, c, o, i) {
      _.texImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function xy() {
    return g(function(_, e, t, r, n, a, b, c, o, i, d) {
      _.texImage3D(e >>> 0, t, r, n, a, b, c, o >>> 0, i >>> 0, d);
    }, arguments);
  }
  function yy() {
    return g(function(_, e, t, r, n, a, b, c, o, i, d) {
      _.texImage3D(e >>> 0, t, r, n, a, b, c, o >>> 0, i >>> 0, d);
    }, arguments);
  }
  function $y(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function Sy(_, e, t, r) {
    _.texParameteri(e >>> 0, t >>> 0, r);
  }
  function vy(_, e, t, r, n, a) {
    _.texStorage2D(e >>> 0, t, r >>> 0, n, a);
  }
  function Ay(_, e, t, r, n, a, b) {
    _.texStorage3D(e >>> 0, t, r >>> 0, n, a, b);
  }
  function Iy() {
    return g(function(_, e, t, r, n, a, b, c, o, i) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function Ty() {
    return g(function(_, e, t, r, n, a, b, c, o, i) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function Dy() {
    return g(function(_, e, t, r, n, a, b, c, o, i) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function By() {
    return g(function(_, e, t, r, n, a, b, c, o, i) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function Fy() {
    return g(function(_, e, t, r, n, a, b, c, o, i) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function Py() {
    return g(function(_, e, t, r, n, a, b, c, o, i) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function ky() {
    return g(function(_, e, t, r, n, a, b, c, o, i) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function My() {
    return g(function(_, e, t, r, n, a, b, c, o, i) {
      _.texSubImage2D(e >>> 0, t, r, n, a, b, c >>> 0, o >>> 0, i);
    }, arguments);
  }
  function Cy() {
    return g(function(_, e, t, r, n, a, b, c, o, i, d, v) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, c, o, i >>> 0, d >>> 0, v);
    }, arguments);
  }
  function Ry() {
    return g(function(_, e, t, r, n, a, b, c, o, i, d, v) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, c, o, i >>> 0, d >>> 0, v);
    }, arguments);
  }
  function Vy() {
    return g(function(_, e, t, r, n, a, b, c, o, i, d, v) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, c, o, i >>> 0, d >>> 0, v);
    }, arguments);
  }
  function Ey() {
    return g(function(_, e, t, r, n, a, b, c, o, i, d, v) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, c, o, i >>> 0, d >>> 0, v);
    }, arguments);
  }
  function Ly() {
    return g(function(_, e, t, r, n, a, b, c, o, i, d, v) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, c, o, i >>> 0, d >>> 0, v);
    }, arguments);
  }
  function Oy() {
    return g(function(_, e, t, r, n, a, b, c, o, i, d, v) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, c, o, i >>> 0, d >>> 0, v);
    }, arguments);
  }
  function Gy() {
    return g(function(_, e, t, r, n, a, b, c, o, i, d, v) {
      _.texSubImage3D(e >>> 0, t, r, n, a, b, c, o, i >>> 0, d >>> 0, v);
    }, arguments);
  }
  function Wy(_, e, t) {
    return _.then(e, t);
  }
  function zy(_, e, t) {
    return _.then(e, t);
  }
  function Uy(_, e) {
    return _.then(e);
  }
  function qy(_, e, t) {
    _.uniform1f(e, t);
  }
  function Hy(_, e, t) {
    _.uniform1f(e, t);
  }
  function jy(_, e, t) {
    _.uniform1i(e, t);
  }
  function Ny(_, e, t) {
    _.uniform1i(e, t);
  }
  function Jy(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function Qy(_, e, t, r) {
    _.uniform2fv(e, L(t, r));
  }
  function Xy(_, e, t, r) {
    _.uniform2fv(e, L(t, r));
  }
  function Yy(_, e, t, r) {
    _.uniform2iv(e, Z(t, r));
  }
  function Ky(_, e, t, r) {
    _.uniform2iv(e, Z(t, r));
  }
  function Zy(_, e, t, r) {
    _.uniform2uiv(e, $e(t, r));
  }
  function e$(_, e, t, r) {
    _.uniform3fv(e, L(t, r));
  }
  function _$(_, e, t, r) {
    _.uniform3fv(e, L(t, r));
  }
  function t$(_, e, t, r) {
    _.uniform3iv(e, Z(t, r));
  }
  function r$(_, e, t, r) {
    _.uniform3iv(e, Z(t, r));
  }
  function n$(_, e, t, r) {
    _.uniform3uiv(e, $e(t, r));
  }
  function a$(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function b$(_, e, t, r, n, a) {
    _.uniform4f(e, t, r, n, a);
  }
  function c$(_, e, t, r) {
    _.uniform4fv(e, L(t, r));
  }
  function o$(_, e, t, r) {
    _.uniform4fv(e, L(t, r));
  }
  function s$(_, e, t, r) {
    _.uniform4iv(e, Z(t, r));
  }
  function i$(_, e, t, r) {
    _.uniform4iv(e, Z(t, r));
  }
  function f$(_, e, t, r) {
    _.uniform4uiv(e, $e(t, r));
  }
  function u$(_, e, t, r) {
    _.uniformBlockBinding(e, t >>> 0, r >>> 0);
  }
  function d$(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, L(r, n));
  }
  function g$(_, e, t, r, n) {
    _.uniformMatrix2fv(e, t !== 0, L(r, n));
  }
  function w$(_, e, t, r, n) {
    _.uniformMatrix2x3fv(e, t !== 0, L(r, n));
  }
  function p$(_, e, t, r, n) {
    _.uniformMatrix2x4fv(e, t !== 0, L(r, n));
  }
  function l$(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, L(r, n));
  }
  function m$(_, e, t, r, n) {
    _.uniformMatrix3fv(e, t !== 0, L(r, n));
  }
  function h$(_, e, t, r, n) {
    _.uniformMatrix3x2fv(e, t !== 0, L(r, n));
  }
  function x$(_, e, t, r, n) {
    _.uniformMatrix3x4fv(e, t !== 0, L(r, n));
  }
  function y$(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, L(r, n));
  }
  function $$(_, e, t, r, n) {
    _.uniformMatrix4fv(e, t !== 0, L(r, n));
  }
  function S$(_, e, t, r, n) {
    _.uniformMatrix4x2fv(e, t !== 0, L(r, n));
  }
  function v$(_, e, t, r, n) {
    _.uniformMatrix4x3fv(e, t !== 0, L(r, n));
  }
  function A$(_) {
    _.unmap();
  }
  function I$(_, e) {
    _.useProgram(e);
  }
  function T$(_, e) {
    _.useProgram(e);
  }
  function D$(_) {
    return _.value;
  }
  function B$(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function F$(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function P$(_, e, t, r, n, a) {
    _.vertexAttribIPointer(e >>> 0, t, r >>> 0, n, a);
  }
  function k$(_, e, t, r, n, a, b) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, b);
  }
  function M$(_, e, t, r, n, a, b) {
    _.vertexAttribPointer(e >>> 0, t, r >>> 0, n !== 0, a, b);
  }
  function C$(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function R$(_, e, t, r, n) {
    _.viewport(e, t, r, n);
  }
  function V$(_, e, t, r) {
    console.warn(_, e, t, r);
  }
  function E$(_) {
    return _.width;
  }
  function L$(_) {
    return _.width;
  }
  function O$() {
    return g(function(_, e, t, r, n, a, b) {
      _.writeBuffer(e, t, i_(r, n), a, b);
    }, arguments);
  }
  function G$() {
    return g(function(_, e, t, r, n, a) {
      _.writeTexture(e, i_(t, r), n, a);
    }, arguments);
  }
  function W$(_, e) {
    return ce(_, e, cS);
  }
  function z$(_, e) {
    return ce(_, e, fS);
  }
  function U$(_, e) {
    return ce(_, e, dS);
  }
  function q$(_, e) {
    return ce(_, e, oS);
  }
  function H$(_, e) {
    return ce(_, e, sS);
  }
  function j$(_, e) {
    return ce(_, e, iS);
  }
  function N$(_, e) {
    return ce(_, e, bS);
  }
  function J$(_) {
    return _;
  }
  function Q$(_) {
    return _;
  }
  function X$(_, e) {
    return L(_, e);
  }
  function Y$(_, e) {
    return DS(_, e);
  }
  function K$(_, e) {
    return Z(_, e);
  }
  function Z$(_, e) {
    return BS(_, e);
  }
  function eS(_, e) {
    return FS(_, e);
  }
  function _S(_, e) {
    return $e(_, e);
  }
  function tS(_, e) {
    return i_(_, e);
  }
  function rS(_, e) {
    return A(_, e);
  }
  function nS(_) {
    return BigInt.asUintN(64, _);
  }
  function aS() {
    const _ = s.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function bS(_, e) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function cS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function oS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function sS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function iS(_, e, t) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function fS(_, e, t) {
    const r = s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (r[1]) throw P(r[0]);
  }
  function uS(_, e, t, r) {
    s.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, r);
  }
  function dS(_, e, t) {
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
  ], gS = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], wS = [
    "uniform",
    "storage",
    "read-only-storage"
  ], pS = [
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
  ], lS = [
    "none",
    "front",
    "back"
  ], qt = [
    "nearest",
    "linear"
  ], mS = [
    "ccw",
    "cw"
  ], Y_ = [
    "uint16",
    "uint32"
  ], K_ = [
    "load",
    "clear"
  ], hS = [
    "nearest",
    "linear"
  ], xS = [
    "low-power",
    "high-performance"
  ], yS = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], $S = [
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
  ], SS = [
    "write-only",
    "read-only",
    "read-write"
  ], et = [
    "store",
    "discard"
  ], Ht = [
    "all",
    "stencil-only",
    "depth-only"
  ], vS = [
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
  ], AS = [
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
  ], IS = [
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
  ], TS = [
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
  } : new FinalizationRegistry((_) => s.__wbg_texturehandle_free(_, 1)), St = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => s.__wbg_transitionchannel_free(_, 1)), vt = typeof FinalizationRegistry > "u" ? {
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
  function L(_, e) {
    return _ = _ >>> 0, PS().subarray(_ / 4, _ / 4 + e);
  }
  function DS(_, e) {
    return _ = _ >>> 0, MS().subarray(_ / 2, _ / 2 + e);
  }
  function Z(_, e) {
    return _ = _ >>> 0, CS().subarray(_ / 4, _ / 4 + e);
  }
  function BS(_, e) {
    return _ = _ >>> 0, RS().subarray(_ / 1, _ / 1 + e);
  }
  function FS(_, e) {
    return _ = _ >>> 0, VS().subarray(_ / 2, _ / 2 + e);
  }
  function $e(_, e) {
    return _ = _ >>> 0, ES().subarray(_ / 4, _ / 4 + e);
  }
  function i_(_, e) {
    return _ = _ >>> 0, me().subarray(_ / 1, _ / 1 + e);
  }
  let ie = null;
  function k() {
    return (ie === null || ie.buffer.detached === true || ie.buffer.detached === void 0 && ie.buffer !== s.memory.buffer) && (ie = new DataView(s.memory.buffer)), ie;
  }
  let Ne = null;
  function PS() {
    return (Ne === null || Ne.byteLength === 0) && (Ne = new Float32Array(s.memory.buffer)), Ne;
  }
  let Je = null;
  function kS() {
    return (Je === null || Je.byteLength === 0) && (Je = new Float64Array(s.memory.buffer)), Je;
  }
  let Qe = null;
  function MS() {
    return (Qe === null || Qe.byteLength === 0) && (Qe = new Int16Array(s.memory.buffer)), Qe;
  }
  let Xe = null;
  function CS() {
    return (Xe === null || Xe.byteLength === 0) && (Xe = new Int32Array(s.memory.buffer)), Xe;
  }
  let Ye = null;
  function RS() {
    return (Ye === null || Ye.byteLength === 0) && (Ye = new Int8Array(s.memory.buffer)), Ye;
  }
  function A(_, e) {
    return OS(_ >>> 0, e);
  }
  let Ke = null;
  function VS() {
    return (Ke === null || Ke.byteLength === 0) && (Ke = new Uint16Array(s.memory.buffer)), Ke;
  }
  let Ze = null;
  function ES() {
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
  function $(_) {
    return _ == null;
  }
  function ce(_, e, t) {
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
  function m_(_, e) {
    const t = e(_.length * 1, 1) >>> 0;
    return me().set(_, t / 1), M = _.length, t;
  }
  function __(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return kS().set(_, t / 8), M = _.length, t;
  }
  function W(_, e, t) {
    if (t === void 0) {
      const c = Ae.encode(_), o = e(c.length, 1) >>> 0;
      return me().subarray(o, o + c.length).set(c), M = c.length, o;
    }
    let r = _.length, n = e(r, 1) >>> 0;
    const a = me();
    let b = 0;
    for (; b < r; b++) {
      const c = _.charCodeAt(b);
      if (c > 127) break;
      a[n + b] = c;
    }
    if (b !== r) {
      b !== 0 && (_ = _.slice(b)), n = t(n, r, r = b + _.length * 3, 1) >>> 0;
      const c = me().subarray(n + b, n + r), o = Ae.encodeInto(_, c);
      b += o.written, n = t(n, r, b, 1) >>> 0;
    }
    return M = b, n;
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
  const LS = 2146435072;
  let h_ = 0;
  function OS(_, e) {
    return h_ += e, h_ >= LS && (n_ = new TextDecoder("utf-8", {
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
  function GS(_) {
    s = _;
  }
  URL = globalThis.URL;
  const WS = await L_({
    "./proteus_bench_web_bg.js": {
      __wbg_call_5575218572ead796: E4,
      __wbg_new_typed_00a409eb4ec4f2d9: J5,
      __wbg_then_05edfc8a4fea5106: Wy,
      __wbg_get_unchecked_54a4374c38e08460: F6,
      __wbg_next_0c4066e251d2eff9: X5,
      __wbg_done_b62d4a7d2286852a: l7,
      __wbg_value_49f783bb59765962: D$,
      __wbg_get_197a3fe98f169e38: T6,
      __wbg_length_c6054974c0a6cdb9: t5,
      __wbg_new_227d7c05414eb861: z5,
      __wbg_stack_3b0d974bbf31e44f: _y,
      __wbg_error_a6fa202b58aa1cd3: V7,
      __wbg_proteusapp_new: f8,
      __wbg_instanceof_Map_afa18d5840c04c15: U6,
      __wbg_set_dc601f4a69da0bc2: I9,
      __wbg_call_8e98ed2f3c86c4b5: L4,
      __wbg_call_0e855b388e315e17: V4,
      __wbg_get_with_ref_key_6412cf3094599694: P6,
      __wbg_set_6be42768c690e380: j8,
      __wbg_String_8564e559799eccda: F3,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: W6,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: B5,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: F5,
      __wbg_maxTextureDimension3D_06ee54121b37d431: P5,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: D5,
      __wbg_maxBindGroups_14611ac9ed1c6b56: s5,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: i5,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: y5,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: x5,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: S5,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: v5,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: I5,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: T5,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: M5,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: k5,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: A5,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: V5,
      __wbg_maxBufferSize_f7ce3e1856349d2f: f5,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: C5,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: R5,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: $5,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: L5,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: E5,
      __wbg_maxColorAttachments_fd9187f9f786da18: d5,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: u5,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: m5,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: g5,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: w5,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: p5,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: l5,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: h5,
      __wbg_description_18d0a6d4077fec8e: s7,
      __wbg_set_dst_factor_1ed75271a89a711e: U9,
      __wbg_set_operation_b5862f5a1a143b30: jh,
      __wbg_set_src_factor_1c4f755f8676df1b: ux,
      __wbg_set_texture_16d2be474ce6ad0c: Ix,
      __wbg_set_mip_level_246db61be15bdd69: Rh,
      __wbg_set_x_56f0c2c08a62725c: Qx,
      __wbg_set_y_04fb8ce84735b4e1: Xx,
      __wbg_set_z_a51316db27a4941e: Yx,
      __wbg_set_origin_9b3b0fbe0a5dc469: Nh,
      __wbg_set_aspect_77332ac136ee94eb: r9,
      __wbg_Window_a07901001eb4269f: P3,
      __wbg_gpu_a7c12045c25d009a: k6,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: k3,
      __wbg_set_a_5f6e488475272136: N8,
      __wbg_set_b_688365d692bba214: b9,
      __wbg_set_g_d4d1d77cf8fdd362: bh,
      __wbg_set_r_527e5a41c4b1a846: Kh,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: G6,
      __wbg_queue_65d985f3e6d786a6: h8,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: Qh,
      __wbg_requestAdapter_9ff5c9d1ff271165: T8,
      __wbg_set_required_limits_3b031f66f838f4e3: ex,
      __wbg_set_required_features_54918de8185c5fab: Zh,
      __wbg_set_label_bae57fb9f24fde5c: lh,
      __wbg_requestDevice_c1c34f88a477e509: F8,
      __wbg_limits_50a8c5e629dbfe40: n5,
      __wbg_info_22dcf1fd1b12bc7d: E6,
      __wbg_set_size_41cd9255ca1e4242: ix,
      __wbg_set_usage_908213a4d4bb8bde: Rx,
      __wbg_set_mapped_at_creation_48de4735fab51e78: Fh,
      __wbg_set_label_cd567b7b35838e4c: xh,
      __wbg_createBuffer_2f08c0205e04efca: gm,
      __wbg_set_address_mode_u_a37cf1035585c638: Q8,
      __wbg_set_address_mode_v_8ac049e029caef76: X8,
      __wbg_set_address_mode_w_eb9260ee11729e92: Y8,
      __wbg_set_compare_42211fbf15e3b850: S9,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: Th,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: Dh,
      __wbg_set_mag_filter_69d846b974d4bcc0: Bh,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: Ch,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: Lh,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: kh,
      __wbg_set_label_dcd98efbb9370da8: $h,
      __wbg_createSampler_248bd67c920af37d: Im,
      __wbg_set_width_1a5e2e86fa5bdcd8: jx,
      __wbg_set_height_e8b5483b8c117d5e: sh,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: C9,
      __wbg_set_format_e9d4b1475bb3bd3b: th,
      __wbg_set_size_a61ff22205255d61: fx,
      __wbg_set_usage_7fa9cd18d1104aca: Cx,
      __wbg_set_label_0c1bd0e976cf0a9a: uh,
      __wbg_set_dimension_36e13ccecae5af4b: z9,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: Eh,
      __wbg_set_sample_count_865e1d19b84e27e6: nx,
      __wbg_push_f724b5db8acf89d2: d8,
      __wbg_set_view_formats_bab284fc81b40e70: zx,
      __wbg_createTexture_9e76b80a2dc0d12e: Mm,
      __wbg_set_entries_fc76ca4d7da6a709: j9,
      __wbg_set_layout_eeef59714f5bf48b: Ah,
      __wbg_set_label_f92ae11c77d74198: Sh,
      __wbg_createBindGroup_2320df4db188406c: um,
      __wbg_set_code_56e2d45ec1ff6c2d: h9,
      __wbg_set_label_be45aed56e4b9fee: mh,
      __wbg_createShaderModule_53701de4fb271c90: Dm,
      __wbg_set_label_d1c24b5a7a3ac31d: yh,
      __wbg_createCommandEncoder_cd88faca35d9ed68: pm,
      __wbg_set_bind_group_layouts_5325d038771af328: i9,
      __wbg_set_label_2f592bd1be3db6b3: wh,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: hm,
      __wbg_set_module_14e471fdd94c582d: Gh,
      __wbg_set_entry_point_8db3b6d103e3b865: J9,
      __wbg_set_buffers_85a7238f4ef28ab4: p9,
      __wbg_set_layout_7c5ba5bdcde8a0f0: vh,
      __wbg_set_vertex_a4951dd9a7a4ed54: Ex,
      __wbg_set_label_c47c451211e2f6d2: hh,
      __wbg_set_format_f9341112e43ea182: rh,
      __wbg_set_depth_compare_30e9ea552da12fe2: P9,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: O9,
      __wbg_set_depth_bias_428c9340b0fd937b: T9,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: D9,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: B9,
      __wbg_set_compare_1509dc1a5420943f: $9,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: k9,
      __wbg_set_fail_op_77ab26c98f847b65: X9,
      __wbg_set_pass_op_e9470d1262fb8a8b: Jh,
      __wbg_set_stencil_back_6ef4683123b19b25: dx,
      __wbg_set_stencil_front_aeb8580a97e5424b: wx,
      __wbg_set_stencil_read_mask_2954f260d47349ea: lx,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: xx,
      __wbg_set_depth_stencil_1bd50dbc450c8650: V9,
      __wbg_set_module_08ad08e736d8edbf: Oh,
      __wbg_set_targets_6b0b3bdd87f35668: Ax,
      __wbg_set_entry_point_6fec5723cc790927: N9,
      __wbg_set_fragment_1a595620425637e1: nh,
      __wbg_set_count_26a934d1cd07d080: v9,
      __wbg_set_mask_0c49a66362fc0079: Ph,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: e9,
      __wbg_set_multisample_85f073947b782d07: Wh,
      __wbg_set_cull_mode_9d466c1ab414cac8: A9,
      __wbg_set_front_face_50cdf4eb61504a46: ah,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: vx,
      __wbg_set_topology_beefb3aca0612b00: Bx,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: kx,
      __wbg_set_primitive_369241acd17871f1: Xh,
      __wbg_createRenderPipeline_f48187ba9f7701e8: Sm,
      __wbg_set_entries_3017e6132f938c6e: H9,
      __wbg_set_label_1175a3329a06e52b: dh,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: fm,
      __wbg_limits_1c25cb4f379a4418: r5,
      __wbg_set_color_attachments_abe67f6631926e28: x9,
      __wbg_set_label_8fd860a36d2c7b74: ph,
      __wbg_set_view_dbd0294573f64d05: Ox,
      __wbg_set_depth_clear_value_442bf492734f63b6: F9,
      __wbg_set_depth_load_op_34d430b74bb36d91: M9,
      __wbg_set_depth_store_op_0ea0a215313dbda7: L9,
      __wbg_set_depth_read_only_138a11b10c731094: R9,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: gx,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: px,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: hx,
      __wbg_set_stencil_read_only_fb489d191b6d969b: mx,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: E9,
      __wbg_set_query_set_18679a8580267d5a: Yh,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: s9,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: q9,
      __wbg_set_timestamp_writes_c552d52fbb417005: Dx,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: r4,
      __wbg_copyTextureToTexture_1be188df1e535c0a: im,
      __wbg_label_47480289cc2bce71: e5,
      __wbg_set_label_2d2227f4d5991e50: gh,
      __wbg_finish_cfaeede3baf55be1: W7,
      __wbg_finish_087cb89c65c06eb1: G7,
      __wbg_drawIndexed_68637ebab6dd8d6e: I7,
      __wbg_setPipeline_bab24dbce96903b9: G8,
      __wbg_setViewport_f9d423db4f4b4b58: U8,
      __wbg_setBindGroup_4ba56e1e0d26f244: V8,
      __wbg_setBindGroup_6124849cc8547086: E8,
      __wbg_setIndexBuffer_17431786d06c1b7c: L8,
      __wbg_setIndexBuffer_a16ed5b869c87507: O8,
      __wbg_setVertexBuffer_b508baf8d0ffe331: z8,
      __wbg_setVertexBuffer_91c4b602d0289943: W8,
      __wbg_end_414453a89205612c: k7,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: f6,
      __wbg_getCurrentTexture_51975ae7185fd15f: n6,
      __wbg_set_device_0d774b66e7288f72: G9,
      __wbg_set_format_d347899cd860709c: _h,
      __wbg_set_usage_ae014e77ff77ce06: Vx,
      __wbg_set_alpha_mode_92402195b3ae1ee7: Z8,
      __wbg_set_view_formats_fe531a043efb71fa: Ux,
      __wbg_configure_3d64c677c7d68a15: nm,
      __wbg_writeBuffer_b4bdd36178348ca5: O$,
      __wbg_set_bytes_per_row_91681ca78d744888: l9,
      __wbg_set_rows_per_image_d198b7e73a38978b: rx,
      __wbg_set_offset_a097a8050a3a9a33: Hh,
      __wbg_writeTexture_b45b69132e46a227: G$,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: n8,
      __wbg_submit_1290d44bb76ecef4: py,
      __wbg_getMappedRange_5ed22727c9679168: o6,
      __wbg_unmap_8f06698a75b8331a: A$,
      __wbg_destroy_b5b39f25f0799295: i7,
      __wbg_mapAsync_bb0029907dd91181: o5,
      __wbg_set_dimension_174ad7e2fb67fb4e: W9,
      __wbg_set_format_90860b0321868db4: Z9,
      __wbg_set_aspect_a823a14d00d42d37: n9,
      __wbg_set_base_array_layer_cc6c68d233489c4b: c9,
      __wbg_set_array_layer_count_daec613068108a9d: _9,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: o9,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: Vh,
      __wbg_set_label_03d2396d4655a3e1: fh,
      __wbg_set_usage_7f0dda8309469b1c: Mx,
      __wbg_createView_cc96b5bdd3d5bf5e: Vm,
      __wbg_set_write_mask_144b25e2bd909124: Jx,
      __wbg_set_format_abf7a1bc5425c56a: eh,
      __wbg_set_blend_8d6e9c08b5702a09: d9,
      __wbg_set_min_binding_size_689661b9ed25e083: Mh,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: ch,
      __wbg_set_type_38961e08504ca674: Fx,
      __wbg_set_sample_type_7088b1efddce6a69: ax,
      __wbg_set_multisampled_40505c1381e1c32c: zh,
      __wbg_set_view_dimension_3ed01b237e85826f: Wx,
      __wbg_requestAdapter_c46930b8bc33722d: D8,
      __wbg_set_alpha_aa2e606e9e647b21: K8,
      __wbg_set_color_bc393d7efc3c8594: y9,
      __wbg_set_visibility_1bca121a89accba5: qx,
      __wbg_set_storage_texture_ab9eed9786337ef0: $x,
      __wbg_set_external_texture_825fe2bc7a0c0603: Q9,
      __wbg_set_binding_b6b0fe5c281b8c69: f9,
      __wbg_set_buffer_e89095a9f0cafad3: w9,
      __wbg_set_sampler_8c5d7fb1b02058c6: bx,
      __wbg_set_texture_e25a73da75cf5808: Tx,
      __wbg_set_view_dimension_263387976511ebc9: Gx,
      __wbg_set_format_1786adb7bc74c7c9: Y9,
      __wbg_set_access_091f317905cd76a5: J8,
      __wbg_set_load_op_56844f51434037bf: Ih,
      __wbg_set_store_op_caeede4654b3d847: Sx,
      __wbg_set_view_bdeab150b5f0768c: Lx,
      __wbg_set_clear_value_642701f928a5ccb3: m9,
      __wbg_set_resolve_target_fe76b3f99cf72078: _x,
      __wbg_set_buffer_55f096330c8912b4: g9,
      __wbg_set_offset_73156b0e0b41d79a: Uh,
      __wbg_set_size_1e6281b07cd39177: sx,
      __wbg_set_binding_f3c188a8cd21455b: u9,
      __wbg_set_resource_fe385d2e3dadaf63: tx,
      __wbg_set_format_6606f5c1fba6f459: K9,
      __wbg_set_offset_8d9d9afffa18b591: qh,
      __wbg_set_shader_location_0ff30a733291a396: cx,
      __wbg_set_array_stride_c2c009eabc18b5f6: t9,
      __wbg_set_attributes_05f9117fd32ca606: a9,
      __wbg_set_step_mode_a35aef328761c452: yx,
      __wbg_set_type_c1eebc19f8a6aeb9: Px,
      __wbg_includes_83dff8d05da243c5: V6,
      __wbg_clearBufferuiv_1d2d93401c0904a3: W4,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: em,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: tm,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: rm,
      __wbg_copyBufferSubData_a944f33b601b822d: bm,
      __wbg_clientWaitSync_7580165bd2eff461: J4,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: _m,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: sm,
      __wbg_createQuery_f013132b870a71ef: $m,
      __wbg_createSampler_9fe50152a2524319: Tm,
      __wbg_createVertexArray_8685feb21901c932: Rm,
      __wbg_deleteQuery_ef51ea0a52420103: jm,
      __wbg_deleteSampler_5c045e0cc55813d4: Qm,
      __wbg_getIndexedParameter_2b18df6fca85f751: c6,
      __wbg_getQueryParameter_0599e85ddb81220b: p6,
      __wbg_getSyncParameter_9a2bda340ebe166f: S6,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: v6,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: Q6,
      __wbg_deleteSync_37ca83c429c43d8a: Km,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: t7,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: h7,
      __wbg_drawBuffers_558d96e52e754731: S7,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: A7,
      __wbg_endQuery_161170c5280a8293: P7,
      __wbg_fenceSync_56efc7cc79111e54: E7,
      __wbg_framebufferTextureLayer_2312acdc74f97676: J7,
      __wbg_getBufferSubData_92680d3a2f7be029: Z7,
      __wbg_readBuffer_361ec5474f3aae49: x8,
      __wbg_readPixels_5840000f3e22f3ce: $8,
      __wbg_readPixels_5bf204799ed2272f: S8,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: v8,
      __wbg_texImage3D_8647ef58aef5b912: yy,
      __wbg_texStorage2D_ed5df596c5f1e3af: vy,
      __wbg_texStorage3D_160b0197bc190f04: Ay,
      __wbg_texSubImage2D_f03448e182b0820d: My,
      __wbg_texSubImage2D_d14d9c0a1f627c31: ky,
      __wbg_texSubImage2D_89866a04ecd0a76b: By,
      __wbg_texSubImage2D_5c630043f1c56716: Dy,
      __wbg_samplerParameterf_3157ba41c0f4d97a: k8,
      __wbg_samplerParameteri_f85a29156e790189: M8,
      __wbg_texImage2D_0e0f37b9fb297d01: ly,
      __wbg_texImage2D_0e537dc331652de3: my,
      __wbg_texImage3D_30dbf7234481b8f5: xy,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: Ty,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: Fy,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: Py,
      __wbg_texSubImage3D_933e4cd41cc5376d: Ly,
      __wbg_texSubImage3D_c3538b28040daac9: Gy,
      __wbg_uniform1ui_36c94692177ebf76: Jy,
      __wbg_uniform2fv_17592f4dad9798fb: Qy,
      __wbg_uniform2iv_d5d29ebbc466977d: Ky,
      __wbg_texSubImage3D_0fdbd843482bb916: Ry,
      __wbg_texSubImage3D_09a97a968b93253d: Cy,
      __wbg_texSubImage3D_355efde0dc047913: Vy,
      __wbg_texSubImage3D_bd32c8e29e470904: Oy,
      __wbg_texSubImage3D_5a238709d114b609: Ey,
      __wbg_uniform2uiv_418ba3bf6a230dd5: Zy,
      __wbg_uniform4fv_9e670a001c77dca0: o$,
      __wbg_uniform4iv_1d57c6b8e5c0e447: s$,
      __wbg_uniform3fv_dbe44b778e6b89e8: _$,
      __wbg_uniform3iv_d75d3a5f86d54be4: r$,
      __wbg_uniform3uiv_71c1efc24a662de9: n$,
      __wbg_uniform4uiv_c5d45f5dbdae727a: f$,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: l$,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: h$,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: x$,
      __wbg_uniformBlockBinding_829a71912ad79a04: u$,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: d$,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: w$,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: p$,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: y$,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: P$,
      __wbg_activeTexture_525ee3068cb9e8d5: Y3,
      __wbg_attachShader_3477e67517b09b6b: e4,
      __wbg_bindAttribLocation_79b5d26727094518: n4,
      __wbg_bindBuffer_d3111de6861cb875: c4,
      __wbg_bindFramebuffer_63e837a5dc0accfb: i4,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: f4,
      __wbg_bindTexture_7ab28ff4ff3dc506: g4,
      __wbg_blendColor_15f26633b646e542: m4,
      __wbg_blendEquation_7dadb4db540a42da: $4,
      __wbg_blendEquationSeparate_8240ddfa32266109: x4,
      __wbg_blendFunc_b15af02643e188f1: T4,
      __wbg_blendFuncSeparate_456410f9919bed39: A4,
      __wbg_clear_dadcb3e2929388b0: j4,
      __wbg_clearDepth_05c17028494ee4dd: z4,
      __wbg_clearStencil_917833d1e2ac56e4: H4,
      __wbg_colorMask_f111e3e5796458f4: X4,
      __wbg_compileShader_f5625b583b2c9fd6: Y4,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: S$,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: v$,
      __wbg_vertexAttribDivisor_f17a8585267be92f: F$,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: cm,
      __wbg_createBuffer_9f602b2dbcbf409c: wm,
      __wbg_createFramebuffer_4a250944a4542bbc: lm,
      __wbg_createProgram_4c8164d471c10346: xm,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: Am,
      __wbg_createShader_9c5cd42709d915ff: Fm,
      __wbg_createTexture_3eed23cb87dd35fc: Pm,
      __wbg_cullFace_94f24b4fd5e9038b: Lm,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: Gm,
      __wbg_getExtension_11824edd67a143d8: b6,
      __wbg_getParameter_7f7f23cae98f2c81: s6,
      __wbg_getProgramInfoLog_cd84be80942f345b: d6,
      __wbg_getProgramParameter_039391d5ba319f50: g6,
      __wbg_getShaderInfoLog_495bddda98172699: l6,
      __wbg_getShaderParameter_4eb65cfb174ceb22: h6,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: y6,
      __wbg_getUniformLocation_ab63f569a4e41744: I6,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: zm,
      __wbg_deleteProgram_eff668280dcb01ca: Hm,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: Jm,
      __wbg_deleteShader_3339454254c7147c: Xm,
      __wbg_deleteTexture_c1c58550dc55af5c: e7,
      __wbg_depthFunc_31b183b5b8ee478e: r7,
      __wbg_depthMask_cab7f2ae7f0e559c: b7,
      __wbg_depthRange_797a71ba3b79267a: c7,
      __wbg_disable_cb1b3e6c1cee5202: w7,
      __wbg_disableVertexAttribArray_b395358ec5084c39: d7,
      __wbg_drawArrays_42dbb4b0349c8f34: y7,
      __wbg_enable_d1f42f78be33a553: F7,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: T7,
      __wbg_flush_7ae42f071230db6b: z7,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: H7,
      __wbg_framebufferTexture2D_367ab597a005e8d9: j7,
      __wbg_frontFace_9bdcf2a758e989e5: X7,
      __wbg_linkProgram_e23a348b0f6e0c4f: b5,
      __wbg_pixelStorei_a78a504be58d1d0a: c8,
      __wbg_polygonOffset_a4f07d97b9b0dced: s8,
      __wbg_renderbufferStorage_3049e13db5c4e60e: I8,
      __wbg_scissor_6c024669fbf4fe72: C8,
      __wbg_vertexAttribPointer_4e5d289c5d224210: M$,
      __wbg_viewport_a0ca330f9b85397e: C$,
      __wbg_shaderSource_66dce75b25a1a407: Zx,
      __wbg_stencilFuncSeparate_ec603976be9569a4: sy,
      __wbg_stencilMask_485dcb5965c79a71: uy,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: fy,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: gy,
      __wbg_texParameteri_c6efffcecb474d2f: $y,
      __wbg_uniform1f_3acd3f3eb50b5e11: qy,
      __wbg_uniform1i_e4f13604354c28ae: Ny,
      __wbg_uniform4f_a5008773cfb47d1a: b$,
      __wbg_useProgram_ab2ee2a13a1fd909: T$,
      __wbg_bufferSubData_2270f1b9db71e642: M4,
      __wbg_clearBufferfv_6b77b9402254a2bf: O4,
      __wbg_clearBufferiv_0f056544010eef3e: G4,
      __wbg_beginQuery_dad334d972fed3cc: t4,
      __wbg_bindBufferRange_16a9d90becc2a7d7: b4,
      __wbg_bindSampler_3c7002cb6d56ae8f: d4,
      __wbg_bindVertexArray_c391bd47303d75cd: l4,
      __wbg_blitFramebuffer_ea96ada8bba07582: D4,
      __wbg_bufferData_64e9905f2b3d3a6f: P4,
      __wbg_bufferData_99bbbc63f02251c4: k4,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: N6,
      __wbg_performance_4c23a97261596fec: a8,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: B8,
      __wbg_fetch_2d913f7108d17a24: L7,
      __wbg_fetch_d8c50740ea23b248: O7,
      __wbg_navigator_935098efd1dc7fe5: G5,
      __wbg_devicePixelRatio_8e5ca44720abafec: f7,
      __wbg_document_2634180a4c694068: p7,
      __wbg_instanceof_Window_0d356b88a2f77c42: J6,
      __wbg_hidden_cb32701ca3785fea: R6,
      __wbg_getElementById_c7aba6b93b34bf01: a6,
      __wbg_querySelector_1f3658f4b48e268b: p8,
      __wbg_querySelectorAll_ffda3c891a9eb29a: w8,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: K7,
      __wbg_uniform2iv_c5e863975dd780d8: Yy,
      __wbg_uniform3fv_7723e142be50856f: e$,
      __wbg_uniform3iv_bea3976522e15d48: t$,
      __wbg_uniform4fv_85ad5d23234895d2: c$,
      __wbg_clear_ff8cfdf420f7dde6: N4,
      __wbg_clearDepth_ac6b54f112feeaf7: U4,
      __wbg_clearStencil_56d6a6308294a749: q4,
      __wbg_colorMask_b0ab9d429a1efa0a: Q4,
      __wbg_compileShader_fcf3f3d2891f73f9: K4,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: om,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: dm,
      __wbg_createFramebuffer_ab73f30b5dc97415: mm,
      __wbg_createProgram_f11c63f59f41b82a: ym,
      __wbg_createRenderbuffer_556000dbb01f5026: vm,
      __wbg_createShader_27d9388313f3b14e: Bm,
      __wbg_createTexture_8455c703424c567b: km,
      __wbg_cullFace_774780fb4177aab8: Em,
      __wbg_deleteBuffer_d758283bea6e0ccf: Wm,
      __wbg_deleteFramebuffer_8953b325144192fe: Um,
      __wbg_deleteProgram_0135c6926e75af75: qm,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: Nm,
      __wbg_deleteShader_79dbaaed69b7ca3b: Ym,
      __wbg_deleteTexture_3acb672a45f9998a: Zm,
      __wbg_depthFunc_eaca1bc79f7bf216: n7,
      __wbg_depthMask_3a9074b08d1f68e5: a7,
      __wbg_depthRange_c24a808b3496e0a9: o7,
      __wbg_uniform4iv_a9aaa92f2f458ec2: i$,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: g$,
      __wbg_uniformMatrix3fv_da8c388748c5739b: m$,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: $$,
      __wbg_activeTexture_1d5359b20df41710: X3,
      __wbg_attachShader_683d1070365e7066: _4,
      __wbg_bindAttribLocation_d56d3c40331af7ed: a4,
      __wbg_bindBuffer_e95efaf0d4851845: o4,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: s4,
      __wbg_bindRenderbuffer_d608b211c51ed147: u4,
      __wbg_bindTexture_ffc56f1e5c5526c6: w4,
      __wbg_blendColor_a0ba1cdcecc3a34c: h4,
      __wbg_blendEquation_8bfa69f639ae92da: S4,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: y4,
      __wbg_blendFunc_713c504adab14f98: I4,
      __wbg_blendFuncSeparate_3eef699c291dbc87: v4,
      __wbg_disable_4dca6ee0ccc91e4a: g7,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: u7,
      __wbg_drawArrays_10e1254aa4524ae9: x7,
      __wbg_enable_c6e523307311617a: B7,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: D7,
      __wbg_flush_eb3fb8da2ec00d57: U7,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: q7,
      __wbg_linkProgram_6a2eee02a03b9b00: a5,
      __wbg_pixelStorei_55ad4c67b699537c: b8,
      __wbg_polygonOffset_06dc6468c12a57e1: o8,
      __wbg_renderbufferStorage_2918fb696fd45663: A8,
      __wbg_scissor_f9696c630e464977: R8,
      __wbg_shaderSource_628c37a476ae65f9: Kx,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: oy,
      __wbg_stencilMask_f9fe198f7fd6fc9c: dy,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: iy,
      __wbg_stencilOpSeparate_6cf50803475d2640: wy,
      __wbg_texParameteri_fe6210a493d48a16: Sy,
      __wbg_framebufferTexture2D_3a558e14f56720d2: N7,
      __wbg_frontFace_c9bb1fa659ffd276: Y7,
      __wbg_getParameter_91a344e1a84a4669: i6,
      __wbg_getProgramInfoLog_35410850de9ccefe: u6,
      __wbg_getProgramParameter_bbc667347ac2e882: w6,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: m6,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: x6,
      __wbg_getUniformLocation_340155dc706d3fea: A6,
      __wbg_uniform1f_d34e4b454f7c8e73: Hy,
      __wbg_uniform1i_cd9a7f990128ea48: jy,
      __wbg_uniform4f_4410d2faaa7e5dda: a$,
      __wbg_useProgram_0e1cd86765304939: I$,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: k$,
      __wbg_viewport_b5bd46a0d111c83c: R$,
      __wbg_texSubImage2D_1b2ff28f994c325e: Iy,
      __wbg_uniform2fv_39277cf2d3cb83c7: Xy,
      __wbg_bufferData_5df9bdb32e189eee: F4,
      __wbg_bufferData_26132561617ce8fb: B4,
      __wbg_bufferSubData_44db8a3b4a70b57d: C4,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: Z4,
      __wbg_readPixels_05377f8b6fa1d8eb: y8,
      __wbg_texImage2D_7bc3001cb8602ed2: hy,
      __wbg_navigator_017bc45e84c473cc: O5,
      __wbg_log_d282446d03691e72: c5,
      __wbg_info_a392cd5b7536cfb5: L6,
      __wbg_warn_88c4a5bd9a322000: V$,
      __wbg_debug_7271beced8b71cd4: Om,
      __wbg_error_933f449d72fef598: R7,
      __wbg_error_50f60c611a3dcf64: C7,
      __wbg_signal_4d9d567be73ea52c: ey,
      __wbg_new_51233fa2a760b272: H5,
      __wbg_abort_6e6ea7d259504afc: J3,
      __wbg_width_a86bcd32bd998060: L$,
      __wbg_height_cd732bbdc7b66e49: M6,
      __wbg_set_width_031bdecd763c5855: Hx,
      __wbg_set_height_ad5056ea051acd78: oh,
      __wbg_getContext_486aab500e1c34c9: _6,
      __wbg_getContext_9fd4db9b1cf155db: r6,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: z6,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: $7,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: $6,
      __wbg_now_0f628e0e435c541b: K5,
      __wbg_arrayBuffer_ff96d08b7b6be32e: Z3,
      __wbg_status_0053aa6239760447: cy,
      __wbg_ok_c962da6f1a034d81: r8,
      __wbg_statusText_0f412961834ccfe9: by,
      __wbg_instanceof_Response_79948c98d1d2ba75: H6,
      __wbg_set_width_f9e631f4ee129e5c: Nx,
      __wbg_set_height_ef298446b359b0c5: ih,
      __wbg_getContext_70c2d1bed75d4122: t6,
      __wbg_getContext_422b32d0ee4b8076: e6,
      __wbg_contentRect_0fb8c8900d689a0c: am,
      __wbg_offsetX_0214819d43aaf6d5: _8,
      __wbg_offsetY_f18f571e33b385ab: t8,
      __wbg_button_bb3285fcdf965178: R4,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: q6,
      __wbg_set_signal_4a69430cb12800f3: ox,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: p4,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: Cm,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: _7,
      __wbg_new_1e52e3c919312525: W5,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: Q7,
      __wbg_observe_592b94857eed8e27: Z5,
      __wbg_queryCounterEXT_ebb00bcc96221671: g8,
      __wbg_preventDefault_c047d3e292b08cc4: i8,
      __wbg_addEventListener_ea90bc131475777e: K3,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: m7,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: v7,
      __wbg_get_37b48b8fa52d1f2c: D6,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: B$,
      __wbg_width_08e66520b99071f4: E$,
      __wbg_height_e9afb506f31052a9: C6,
      __wbg_aborted_4d4114700dc4c251: Q3,
      __wbg_resolve_d82363d90af6928a: P8,
      __wbg_then_591b6b3a75ee817a: Uy,
      __wbg_iterator_cc47ba25a2be735a: Z6,
      __wbg_get_9a29be2cb383ed9a: B6,
      __wbg_next_402fa10b59ab20c3: Y5,
      __wbg_new_2e117a478906f062: U5,
      __wbg_new_36e147a8ced3c6e0: q5,
      __wbg_of_62183ea089c00bfa: e8,
      __wbg_isArray_145a34fd0a38d37b: X6,
      __wbg_new_e66a4b7758dd2e5c: N5,
      __wbg_isSafeInteger_a3389a198582f5f6: Y6,
      __wbg_is_de5b366c746e004c: K6,
      __wbg_entries_c261c3fa1f281256: M7,
      __wbg_then_2a84678a50976959: zy,
      __wbg_length_589238bdcf171f0e: _5,
      __wbg_prototypesetcall_d721637c7ca66eb8: u8,
      __wbg_set_272b80acaf9a75e8: q8,
      __wbg_new_81880fb5002cb255: j5,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: Q5,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: ty,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: ny,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: ry,
      __wbg_static_accessor_WINDOW_168f178805d978fe: ay,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: O6,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: j6,
      __wbg_queueMicrotask_1c9b3800e321a967: l8,
      __wbg_queueMicrotask_311744e534a929a3: m8,
      __wbg_set_4564f7dc44fcb0c9: H8,
      __wbg___wbindgen_number_get_1cc01dd708740256: q3,
      __wbg___wbindgen_in_4990f46af709e33c: V3,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: j3,
      __wbg___wbindgen_is_null_6d937fbfb6478470: O3,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: z3,
      __wbg_Number_c4bdf66bb78f7977: B3,
      __wbg_Error_fdd633d4bb5dd76a: D3,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: E3,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: G3,
      __wbg___wbindgen_string_get_71bb4348194e31f0: H3,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: C3,
      __wbg___wbindgen_is_function_acc5528be2b923f2: L3,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: W3,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: U3,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: M3,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: N3,
      __wbg___wbindgen_debug_string_8a447059637473e2: R3,
      __wbindgen_init_externref_table: aS,
      __wbindgen_cast_0000000000000001: W$,
      __wbindgen_cast_0000000000000002: z$,
      __wbindgen_cast_0000000000000003: U$,
      __wbindgen_cast_0000000000000004: q$,
      __wbindgen_cast_0000000000000005: H$,
      __wbindgen_cast_0000000000000006: j$,
      __wbindgen_cast_0000000000000007: N$,
      __wbindgen_cast_0000000000000008: J$,
      __wbindgen_cast_0000000000000009: Q$,
      __wbindgen_cast_000000000000000a: X$,
      __wbindgen_cast_000000000000000b: Y$,
      __wbindgen_cast_000000000000000c: K$,
      __wbindgen_cast_000000000000000d: Z$,
      __wbindgen_cast_000000000000000e: eS,
      __wbindgen_cast_000000000000000f: _S,
      __wbindgen_cast_0000000000000010: tS,
      __wbindgen_cast_0000000000000011: rS,
      __wbindgen_cast_0000000000000012: nS
    }
  }, $3), { memory: zS, clear: US, on_frame: qS, show: HS, start: jS, stop_frames: NS, mount: JS, __wbg_proteusapp_free: QS, proteusapp_addChild: XS, proteusapp_animateTo: YS, proteusapp_bakeTexture: KS, proteusapp_bakedImageSize: ZS, proteusapp_bakedTextSize: ev, proteusapp_channelDestroy: _v, proteusapp_channelSet: tv, proteusapp_component: rv, proteusapp_copyBakedImageFrom: nv, proteusapp_createVideo: av, proteusapp_cropImage: bv, proteusapp_declareGeometry: cv, proteusapp_declaredGeometry: ov, proteusapp_destroy: sv, proteusapp_freeResources: iv, proteusapp_get: fv, proteusapp_hideVideo: uv, proteusapp_loadTexture: dv, proteusapp_mergeFrom: gv, proteusapp_mergeFromWithBehavior: wv, proteusapp_new: pv, proteusapp_onBlur: lv, proteusapp_onClick: mv, proteusapp_onDrag: hv, proteusapp_onDropped: xv, proteusapp_onFocus: yv, proteusapp_onHoverEnter: $v, proteusapp_onHoverExit: Sv, proteusapp_onPress: vv, proteusapp_onRelease: Av, proteusapp_onTransitionComplete: Iv, proteusapp_pointerLeft: Tv, proteusapp_pointerMoved: Dv, proteusapp_pointerPressed: Bv, proteusapp_pointerReleased: Fv, proteusapp_releaseVideo: Pv, proteusapp_removeChild: kv, proteusapp_setDeclaredGeometry: Mv, proteusapp_setDisabled: Cv, proteusapp_setImage: Rv, proteusapp_setInteractive: Vv, proteusapp_setOpacity: Ev, proteusapp_setText: Lv, proteusapp_setTexture: Ov, proteusapp_setTransitionInteraction: Gv, proteusapp_setVideoCrossfade: Wv, proteusapp_setVisible: zv, proteusapp_showVideo: Uv, proteusapp_splitTo: qv, proteusapp_splitToWithBehavior: Hv, proteusapp_splitToWithStates: jv, proteusapp_texture: Nv, proteusapp_textureState: Jv, proteusapp_tick: Qv, proteusapp_transitionChannel: Xv, proteusapp_uploadVideoFrame: Yv, __wbg_handle_free: Kv, __wbg_texturehandle_free: Zv, __wbg_transitionchannel_free: eA, __wbg_videohandle_free: _A, handle_fromId: tA, handle_id: rA, texturehandle_fromId: nA, texturehandle_id: aA, __abort_handler: bA, __instance_terminated: cA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: oA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: sA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: iA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: fA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: uA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: dA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: gA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: wA, __wbindgen_malloc: pA, __wbindgen_realloc: lA, __wbindgen_exn_store: mA, __externref_table_alloc: hA, __wbindgen_externrefs: xA, __wbindgen_free: yA, __wbindgen_destroy_closure: $A, __externref_table_dealloc: SA, __wbindgen_start: jt } = WS, vA = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: bA,
    __externref_table_alloc: hA,
    __externref_table_dealloc: SA,
    __instance_terminated: cA,
    __wbg_handle_free: Kv,
    __wbg_proteusapp_free: QS,
    __wbg_texturehandle_free: Zv,
    __wbg_transitionchannel_free: eA,
    __wbg_videohandle_free: _A,
    __wbindgen_destroy_closure: $A,
    __wbindgen_exn_store: mA,
    __wbindgen_externrefs: xA,
    __wbindgen_free: yA,
    __wbindgen_malloc: pA,
    __wbindgen_realloc: lA,
    __wbindgen_start: jt,
    clear: US,
    handle_fromId: tA,
    handle_id: rA,
    memory: zS,
    mount: JS,
    on_frame: qS,
    proteusapp_addChild: XS,
    proteusapp_animateTo: YS,
    proteusapp_bakeTexture: KS,
    proteusapp_bakedImageSize: ZS,
    proteusapp_bakedTextSize: ev,
    proteusapp_channelDestroy: _v,
    proteusapp_channelSet: tv,
    proteusapp_component: rv,
    proteusapp_copyBakedImageFrom: nv,
    proteusapp_createVideo: av,
    proteusapp_cropImage: bv,
    proteusapp_declareGeometry: cv,
    proteusapp_declaredGeometry: ov,
    proteusapp_destroy: sv,
    proteusapp_freeResources: iv,
    proteusapp_get: fv,
    proteusapp_hideVideo: uv,
    proteusapp_loadTexture: dv,
    proteusapp_mergeFrom: gv,
    proteusapp_mergeFromWithBehavior: wv,
    proteusapp_new: pv,
    proteusapp_onBlur: lv,
    proteusapp_onClick: mv,
    proteusapp_onDrag: hv,
    proteusapp_onDropped: xv,
    proteusapp_onFocus: yv,
    proteusapp_onHoverEnter: $v,
    proteusapp_onHoverExit: Sv,
    proteusapp_onPress: vv,
    proteusapp_onRelease: Av,
    proteusapp_onTransitionComplete: Iv,
    proteusapp_pointerLeft: Tv,
    proteusapp_pointerMoved: Dv,
    proteusapp_pointerPressed: Bv,
    proteusapp_pointerReleased: Fv,
    proteusapp_releaseVideo: Pv,
    proteusapp_removeChild: kv,
    proteusapp_setDeclaredGeometry: Mv,
    proteusapp_setDisabled: Cv,
    proteusapp_setImage: Rv,
    proteusapp_setInteractive: Vv,
    proteusapp_setOpacity: Ev,
    proteusapp_setText: Lv,
    proteusapp_setTexture: Ov,
    proteusapp_setTransitionInteraction: Gv,
    proteusapp_setVideoCrossfade: Wv,
    proteusapp_setVisible: zv,
    proteusapp_showVideo: Uv,
    proteusapp_splitTo: qv,
    proteusapp_splitToWithBehavior: Hv,
    proteusapp_splitToWithStates: jv,
    proteusapp_texture: Nv,
    proteusapp_textureState: Jv,
    proteusapp_tick: Qv,
    proteusapp_transitionChannel: Xv,
    proteusapp_uploadVideoFrame: Yv,
    show: HS,
    start: jS,
    stop_frames: NS,
    texturehandle_fromId: nA,
    texturehandle_id: aA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: wA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: oA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: uA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: dA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: gA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: iA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: fA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: sA
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  GS(vA);
  jt();
  const ee = 1280, _e = 800, q = {
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
    const { min: t, max: r } = q[_], n = new De();
    return Array.from({
      length: e
    }, () => {
      const a = n.between(t, r), b = n.between(t, r);
      return {
        x: n.between(0, ee),
        y: n.between(0, _e),
        width: a,
        height: b,
        r: n.next(),
        g: n.next(),
        b: n.next()
      };
    });
  }
  const AA = `#version 300 es
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
}`, IA = `#version 300 es
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
}`, TA = `#version 300 es
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
      const b = _.createShader(n);
      if (_.shaderSource(b, a), _.compileShader(b), !_.getShaderParameter(b, _.COMPILE_STATUS)) throw new Error(_.getShaderInfoLog(b) ?? "shader failed to compile");
      return b;
    }, r = _.createProgram();
    if (_.attachShader(r, t(_.VERTEX_SHADER, e)), _.attachShader(r, t(_.FRAGMENT_SHADER, AA)), _.linkProgram(r), !_.getProgramParameter(r, _.LINK_STATUS)) throw new Error(_.getProgramInfoLog(r) ?? "program failed to link");
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
  function Qt(_) {
    _.viewport(0, 0, _.drawingBufferWidth, _.drawingBufferHeight), _.clearColor(0, 0, 0, 1), _.clear(_.COLOR_BUFFER_BIT), _.enable(_.BLEND), _.blendFunc(_.ONE, _.ONE_MINUS_SRC_ALPHA);
  }
  function DA(_) {
    return (e, t, r) => {
      const n = Nt(_, IA), a = Jt(_), b = _.createVertexArray();
      _.bindVertexArray(b);
      const c = _.getAttribLocation(n, "a_corner");
      _.enableVertexAttribArray(c), _.vertexAttribPointer(c, 2, _.FLOAT, false, 0, 0);
      const o = _.getUniformLocation(n, "u_rect"), i = _.getUniformLocation(n, "u_color");
      return {
        draw() {
          Qt(_), _.useProgram(n), _.bindVertexArray(b), _.uniform2f(_.getUniformLocation(n, "u_viewport"), ee, _e), _.uniform1f(_.getUniformLocation(n, "u_radius"), r), e.forEach((d, v) => {
            _.uniform4f(o, t[v * 2], t[v * 2 + 1], d.width, d.height), _.uniform3f(i, d.r, d.g, d.b), _.drawArrays(_.TRIANGLE_STRIP, 0, 4);
          });
        },
        dispose() {
          _.deleteProgram(n), _.deleteBuffer(a), _.deleteVertexArray(b);
        }
      };
    };
  }
  function BA(_) {
    return (e, t, r) => {
      const n = Nt(_, TA), a = Jt(_), b = _.createVertexArray();
      _.bindVertexArray(b);
      const c = _.getAttribLocation(n, "a_corner");
      _.enableVertexAttribArray(c), _.vertexAttribPointer(c, 2, _.FLOAT, false, 0, 0);
      const o = new Float32Array(e.length * 7), i = _.createBuffer();
      _.bindBuffer(_.ARRAY_BUFFER, i), _.bufferData(_.ARRAY_BUFFER, o.byteLength, _.DYNAMIC_DRAW);
      const d = _.getAttribLocation(n, "a_rect"), v = _.getAttribLocation(n, "a_color");
      return _.enableVertexAttribArray(d), _.vertexAttribPointer(d, 4, _.FLOAT, false, 28, 0), _.vertexAttribDivisor(d, 1), _.enableVertexAttribArray(v), _.vertexAttribPointer(v, 3, _.FLOAT, false, 28, 16), _.vertexAttribDivisor(v, 1), {
        draw() {
          e.forEach((J, f_) => {
            const te = f_ * 7;
            o[te] = t[f_ * 2], o[te + 1] = t[f_ * 2 + 1], o[te + 2] = J.width, o[te + 3] = J.height, o[te + 4] = J.r, o[te + 5] = J.g, o[te + 6] = J.b;
          }), Qt(_), _.useProgram(n), _.bindVertexArray(b), _.bindBuffer(_.ARRAY_BUFFER, i), _.bufferSubData(_.ARRAY_BUFFER, 0, o), _.uniform2f(_.getUniformLocation(n, "u_viewport"), ee, _e), _.uniform1f(_.getUniformLocation(n, "u_radius"), r), _.drawArraysInstanced(_.TRIANGLE_STRIP, 0, 4, e.length);
        },
        dispose() {
          _.deleteProgram(n), _.deleteBuffer(a), _.deleteBuffer(i), _.deleteVertexArray(b);
        }
      };
    };
  }
  function FA(_) {
    return (e, t, r) => {
      const n = e.map((a) => `rgb(${Math.round(a.r * 255)} ${Math.round(a.g * 255)} ${Math.round(a.b * 255)})`);
      return {
        draw() {
          _.fillStyle = "black", _.fillRect(0, 0, ee, _e), e.forEach((a, b) => {
            _.fillStyle = n[b], _.beginPath(), _.roundRect(t[b * 2] - a.width / 2, t[b * 2 + 1] - a.height / 2, a.width, a.height, r), _.fill();
          });
        },
        dispose() {
        }
      };
    };
  }
  const C_ = 500;
  function PA(_) {
    return _ < 0.5 ? 2 * _ * _ : 1 - (-2 * _ + 2) ** 2 / 2;
  }
  const kA = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
  class rt {
    constructor(e) {
      this.random = new De(), this.movedAt = -1 / 0, this.current = new Float32Array(e.flatMap((t) => [
        t.x,
        t.y
      ])), this.from = this.current.slice(), this.to = this.current.slice();
    }
    retarget(e) {
      if (!(e - this.movedAt < C_)) {
        this.movedAt = e, this.from.set(this.current);
        for (let t = 0; t < this.to.length; t += 2) this.to[t] = this.random.between(0, ee), this.to[t + 1] = this.random.between(0, _e);
        return this.to;
      }
    }
    advance(e) {
      const t = PA(Math.min(1, (e - this.movedAt) / C_));
      for (let r = 0; r < this.current.length; r++) this.current[r] = this.from[r] + (this.to[r] - this.from[r]) * t;
    }
  }
  function MA(_, e, t) {
    const r = new rt(e), n = document.createDocumentFragment(), a = e.map((b, c) => {
      const o = document.createElement("div"), i = o.style;
      return i.position = "absolute", i.left = "0", i.top = "0", i.width = `${b.width}px`, i.height = `${b.height}px`, i.borderRadius = `${t}px`, i.background = `rgb(${Math.round(b.r * 255)} ${Math.round(b.g * 255)} ${Math.round(b.b * 255)})`, i.transform = It(r.current[c * 2], r.current[c * 2 + 1], b), i.transition = `transform ${C_}ms ${kA}`, n.append(o), o;
    });
    return _.append(n), {
      frame(b) {
        const c = r.retarget(b);
        c && a.forEach((o, i) => {
          o.style.transform = It(c[i * 2], c[i * 2 + 1], e[i]);
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
  const CA = [
    100,
    1e3,
    5e3,
    1e4,
    25e3,
    5e4,
    1e5
  ], RA = 60, VA = 2e3, R_ = 1e5, Tt = 100, nt = `proteus-bench:${location.pathname}`, EA = 300, LA = 15e3, a_ = document.getElementById("status"), Xt = document.getElementById("results"), he = document.getElementById("run"), c_ = document.getElementById("reset"), xe = {
    proteus: document.getElementById("proteus"),
    proteusRust: document.getElementById("proteus-rust"),
    webgl: document.getElementById("webgl"),
    canvas2d: document.getElementById("canvas2d"),
    css: document.getElementById("css")
  }, Yt = new URLSearchParams(location.search), Ie = ((_a2 = Yt.get("counts")) == null ? void 0 : _a2.split(",").map(Number).filter((_) => _ > 0)) ?? CA, at = (((_b2 = Yt.get("scenes")) == null ? void 0 : _b2.split(",")) ?? [
    "small",
    "large",
    "moving"
  ]).filter((_) => _ in q);
  let Kt = "unknown";
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
        Kt = `${/WebGpu/i.test(a) ? "WebGPU" : /Gl/i.test(a) ? "WebGL2" : a}${b ? `, ${b}` : " (the browser doesn't name the GPU)"}`;
      }
      e(...t);
    };
  }
  function OA(_) {
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
      let r = 0, n = 0, a = 0, b = 0, c = false;
      const o = _((i) => {
        if (r += 1, r === 1 && (b = i), !c && (r >= RA || i - b > VA)) {
          c = true, a = i, n = i;
          return;
        }
        c && t.push(i - n), n = i, c && (t.length >= EA || i - a > LA) && (o(), e(OA(t)));
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
  const Zt = Math.max(4096, 2 ** Math.ceil(Math.log2(Math.max(...Ie))));
  let er, V_;
  await m3("proteus", {
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
  await I3("proteus-rust", Zt);
  async function GA(_, e) {
    A3(_, e);
    const t = await Pe((r) => (v3(r), () => T3()));
    return S3(), t;
  }
  async function WA(_, e) {
    const t = er, r = tt(_, e), n = (o, i, d) => ({
      position: {
        x: o - ee / 2,
        y: _e / 2 - i,
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
      cornerRadius: q[_].radius
    }), a = r.map((o, i) => t.component({
      geometry: n(o.x, o.y, i)
    })), b = _ === "moving" ? new rt(r) : void 0, c = await Pe((o) => (V_ = (i) => {
      const d = b == null ? void 0 : b.retarget(i);
      d && a.forEach((v, J) => v.animateTo(n(d[J * 2], d[J * 2 + 1], J), {
        duration: 0.5,
        easing: "easeInOutQuad"
      })), o(i);
    }, () => {
      V_ = void 0;
    }));
    for (const o of a) o.destroy();
    return c;
  }
  const Be = window.devicePixelRatio;
  for (const _ of [
    xe.webgl,
    xe.canvas2d
  ]) _.width = ee * Be, _.height = _e * Be;
  const we = xe.webgl.getContext("webgl2", {
    antialias: false
  }), _r = xe.canvas2d.getContext("2d");
  _r.scale(Be, Be);
  async function ct(_, e, t) {
    const r = tt(e, t), n = new rt(r), a = _(r, n.current, q[e].radius), b = await Pe(bt((c) => {
      e === "moving" && (n.retarget(c), n.advance(c)), a.draw();
    }));
    return a.dispose(), b;
  }
  async function zA(_) {
    const e = MA(xe.css, tt("moving", _), q.moving.radius), t = await Pe(bt((r) => e.frame(r)));
    return e.dispose(), t;
  }
  function Dt(_) {
    for (const [e, t] of Object.entries(xe)) t.style.visibility = e === _ ? "visible" : "hidden";
  }
  const x_ = {
    title: "Proteus (TypeScript)",
    surface: "proteus",
    time: WA
  }, y_ = {
    title: "Proteus (Rust)",
    surface: "proteusRust",
    time: GA
  }, UA = {
    title: "CSS",
    surface: "css",
    time: (_, e) => zA(e)
  }, $_ = {
    title: "Canvas 2D",
    surface: "canvas2d",
    time: (_, e) => ct(FA(_r), _, e)
  }, S_ = {
    title: "Naive WebGL2",
    surface: "webgl",
    time: (_, e) => ct(DA(we), _, e)
  }, v_ = {
    title: "Batched WebGL2",
    surface: "webgl",
    time: (_, e) => ct(BA(we), _, e)
  }, tr = {
    small: [
      x_,
      y_,
      $_,
      S_,
      v_
    ],
    large: [
      x_,
      y_,
      $_,
      S_,
      v_
    ],
    moving: [
      x_,
      y_,
      UA,
      $_,
      S_,
      v_
    ]
  }, E_ = {
    small: 1 / 0,
    large: R_,
    moving: 1 / 0
  }, qA = {
    small: `Small components (${q.small.min}\u2013${q.small.max} px), still: the cost per component`,
    large: `Large components (${q.large.min}\u2013${q.large.max} px), still: filling pixels dominates`,
    moving: `Moving components (${q.moving.min}\u2013${q.moving.max} px): every one always moving`
  };
  function HA(_) {
    const e = we.getExtension("WEBGL_debug_renderer_info"), t = e ? we.getParameter(e.UNMASKED_RENDERER_WEBGL) : we.getParameter(we.RENDERER);
    return [
      `- Browser: ${navigator.userAgent}`,
      `- GPU: ${t}`,
      `- Proteus's adapter: ${Kt}`,
      `- Device pixel ratio: ${Be}; canvas ${ee} \xD7 ${_e} CSS pixels`,
      `- Refresh rate: about ${(1e3 / _).toFixed(0)} Hz (a frame every ${_.toFixed(2)} ms)`
    ].join(`
`);
  }
  function jA() {
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
  function b_() {
    try {
      localStorage.setItem(nt, JSON.stringify(R));
    } catch {
    }
  }
  const R = jA();
  if (R.running) {
    const [_, e, t] = R.running.split("|");
    R.cells[R.running] = "crashed | \u2014", R.dropped[`${_}|${t}`] = `crashed at ${e}`, R.running = void 0, b_();
  }
  const NA = (_) => `${_.median.toFixed(2)} | ${_.p99.toFixed(2)}`;
  function rr(_) {
    return Ie.filter((e) => e <= E_[_]).flatMap((e) => tr[_].map((t) => [
      e,
      t
    ])).filter(([e, t]) => R.cells[`${_}|${e}|${t.title}`] === void 0);
  }
  async function JA() {
    he.disabled = true, c_.disabled = true, R.refresh === void 0 && (Dt("webgl"), a_.textContent = "Measuring the refresh rate\u2026", R.refresh = (await Pe(bt(() => {
    }))).median, b_());
    for (const _ of at) for (const [e, t] of rr(_)) {
      const r = `${_}|${e}|${t.title}`;
      if (R.dropped[`${_}|${t.title}`]) {
        R.cells[r] = "skipped | \u2014";
        continue;
      }
      Dt(t.surface), a_.textContent = `${_} scene, ${e} components: ${t.title}\u2026`, R.running = r, b_();
      try {
        const a = await t.time(_, e);
        R.cells[r] = NA(a), a.median >= Tt && (R.dropped[`${_}|${t.title}`] = `slower than ${Tt} ms a frame at ${e}`);
      } catch (a) {
        console.error(a), R.cells[r] = "failed | \u2014", R.dropped[`${_}|${t.title}`] = `failed at ${e}: ${String(a)}`;
      }
      R.running = void 0, b_(), Xt.textContent = nr();
    }
    a_.textContent = "Done. Copy the results below.", he.textContent = "Run", he.disabled = false, c_.disabled = false;
  }
  function nr() {
    const _ = [
      HA(R.refresh ?? 0)
    ];
    for (const e of at) {
      const t = tr[e].map((a) => a.title), r = Ie.filter((a) => a <= E_[e]).map((a) => t.map((b) => R.cells[`${e}|${a}|${b}`])).map((a, b) => ({
        count: Ie.filter((c) => c <= E_[e])[b],
        cells: a
      })).filter(({ cells: a }) => a.some((b) => b !== void 0));
      if (r.length === 0) continue;
      _.push("", `### ${qA[e]}`, "", "Frame interval, median and p99, in milliseconds:", "", `| Components | ${t.map((a) => `${a} | p99`).join(" | ")} |`, `|---:|${t.map(() => "---:|---:").join("|")}|`, ...r.map(({ count: a, cells: b }) => `| ${a} | ${b.map((c) => c ?? "\u2026 | \u2026").join(" | ")} |`));
      const n = t.map((a) => [
        a,
        R.dropped[`${e}|${a}`]
      ]).filter(([, a]) => a).map(([a, b]) => `- ${a}: ${b}; skipped after that.`);
      n.length > 0 && _.push("", ...n), e === "large" && Ie.some((a) => a > R_) && _.push("", `The large scene stops at ${R_}: past it, Safari's tab crashes.`);
    }
    return _.join(`
`);
  }
  he.addEventListener("click", () => void JA());
  c_.addEventListener("click", () => {
    try {
      localStorage.removeItem(nt);
    } catch {
    }
    location.reload();
  });
  const ke = Object.keys(R.cells).length > 0, ot = at.some((_) => rr(_).length > 0);
  ke && (Xt.textContent = nr());
  he.textContent = ke && ot ? "Resume" : "Run";
  a_.textContent = ke ? ot ? "A run was under way, and is saved: Resume carries on from where it stopped." : "The last run is complete; its results are below. Start over to run again." : "Ready. Keep this tab in front while it runs: a hidden tab stops drawing.";
  he.disabled = ke && !ot;
  c_.disabled = !ke;
})();
