(async () => {
  var _a2, _b2;
  (function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
    new MutationObserver((r) => {
      for (const a of r) if (a.type === "childList") for (const b of a.addedNodes) b.tagName === "LINK" && b.rel === "modulepreload" && n(b);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function t(r) {
      const a = {};
      return r.integrity && (a.integrity = r.integrity), r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? a.credentials = "include" : r.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
    }
    function n(r) {
      if (r.ep) return;
      r.ep = true;
      const a = t(r);
      fetch(r.href, a);
    }
  })();
  const an = "" + new URL("proteus_sdk_web_bg-ChbEA5UV.wasm", import.meta.url).href, L_ = async (_ = {}, e) => {
    let t;
    if (e.startsWith("data:")) {
      const n = e.replace(/^data:.*?base64,/, "");
      let r;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") r = Buffer.from(n, "base64");
      else if (typeof atob == "function") {
        const a = atob(n);
        r = new Uint8Array(a.length);
        for (let b = 0; b < a.length; b++) r[b] = a.charCodeAt(b);
      } else throw new Error("Cannot decode base64-encoded data URL");
      t = await WebAssembly.instantiate(r, _);
    } else {
      const n = await fetch(e), r = n.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && r.startsWith("application/wasm")) t = await WebAssembly.instantiateStreaming(n, _);
      else {
        const a = await n.arrayBuffer();
        t = await WebAssembly.instantiate(a, _);
      }
    }
    return t.instance.exports;
  };
  let $ = class A_ {
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
  Symbol.dispose && ($.prototype[Symbol.dispose] = $.prototype.free);
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
      p(e, $), p(t, $);
      const n = u.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (n[1]) throw B(n[0]);
    }
    animateTo(e, t, n) {
      p(e, $);
      const r = u.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, n);
      if (r[1]) throw B(r[0]);
    }
    bakeTexture(e, t, n, r) {
      const a = u_(n, u.__wbindgen_malloc), b = O, c = u.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, b, r);
      return Q.__wrap(c);
    }
    bakedImageSize(e) {
      return p(e, $), u.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return p(e, $), u.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    channelDestroy(e) {
      p(e, fe);
      var t = e.__destroy_into_raw();
      u.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, n, r, a) {
      p(e, fe), p(t, $), p(n, $);
      const b = u.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, r, a);
      if (b[1]) throw B(b[0]);
    }
    component(e) {
      const t = u.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw B(t[1]);
      return $.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      p(e, $), p(t, $);
      const n = u.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (n[2]) throw B(n[1]);
      return n[0] !== 0;
    }
    createVideo() {
      const e = u.proteusapp_createVideo(this.__wbg_ptr);
      return ue.__wrap(e);
    }
    cropImage(e, t) {
      p(e, $);
      const n = u.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[2]) throw B(n[1]);
      return n[0] !== 0;
    }
    destroy(e) {
      p(e, $);
      var t = e.__destroy_into_raw();
      const n = u.proteusapp_destroy(this.__wbg_ptr, t);
      if (n[1]) throw B(n[0]);
    }
    freeResources(e) {
      p(e, $);
      const t = u.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw B(t[0]);
    }
    get(e) {
      return p(e, $), u.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      p(e, $);
      const t = u.proteusapp_hideVideo(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw B(t[0]);
    }
    loadTexture(e, t) {
      const n = u_(e, u.__wbindgen_malloc), r = O, a = u.proteusapp_loadTexture(this.__wbg_ptr, n, r, t);
      return a === 0 ? void 0 : Q.__wrap(a);
    }
    mergeFrom(e, t, n, r) {
      p(e, $);
      const a = Re(t, u.__wbindgen_malloc), b = O, c = u.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, b, n, r);
      if (c[1]) throw B(c[0]);
    }
    mergeFromWithBehavior(e, t, n, r, a) {
      p(e, $);
      const b = Re(t, u.__wbindgen_malloc), c = O, o = u.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, b, c, n, r, a);
      if (o[1]) throw B(o[0]);
    }
    constructor() {
      const e = u.proteusapp_new();
      return this.__wbg_ptr = e, it.register(this, this.__wbg_ptr, this), this;
    }
    onBlur(e, t) {
      p(e, $), u.proteusapp_onBlur(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onClick(e, t) {
      p(e, $), u.proteusapp_onClick(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDrag(e, t) {
      p(e, $), u.proteusapp_onDrag(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDropped(e, t) {
      p(e, fe), u.proteusapp_onDropped(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocus(e, t) {
      p(e, $), u.proteusapp_onFocus(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverEnter(e, t) {
      p(e, $), u.proteusapp_onHoverEnter(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverExit(e, t) {
      p(e, $), u.proteusapp_onHoverExit(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onPress(e, t) {
      p(e, $), u.proteusapp_onPress(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onRelease(e, t) {
      p(e, $), u.proteusapp_onRelease(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onTransitionComplete(e, t) {
      p(e, $), u.proteusapp_onTransitionComplete(this.__wbg_ptr, e.__wbg_ptr, t);
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
      p(e, $), p(t, $);
      const n = u.proteusapp_removeChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (n[1]) throw B(n[0]);
    }
    setDeclaredGeometry(e, t) {
      p(e, $);
      const n = u.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw B(n[0]);
    }
    setDisabled(e, t) {
      p(e, $);
      const n = u.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw B(n[0]);
    }
    setImage(e, t) {
      p(e, $);
      const n = u.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw B(n[0]);
    }
    setInteractive(e, t) {
      p(e, $);
      const n = u.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw B(n[0]);
    }
    setOpacity(e, t) {
      p(e, $);
      const n = u.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw B(n[0]);
    }
    setText(e, t) {
      p(e, $);
      const n = u.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw B(n[0]);
    }
    setTexture(e, t) {
      p(e, $), p(t, Q);
      const n = u.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (n[2]) throw B(n[1]);
      return n[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      p(e, $);
      const n = u.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw B(n[0]);
    }
    setVideoCrossfade(e, t) {
      p(e, $);
      const n = u.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[2]) throw B(n[1]);
      return n[0] !== 0;
    }
    setVisible(e, t) {
      p(e, $);
      const n = u.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw B(n[0]);
    }
    showVideo(e, t) {
      p(e, $), p(t, ue);
      const n = u.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (n[2]) throw B(n[1]);
      return n[0] !== 0;
    }
    splitTo(e, t, n, r) {
      p(e, $);
      const a = Re(t, u.__wbindgen_malloc), b = O, c = u.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, b, n, r);
      if (c[1]) throw B(c[0]);
    }
    splitToWithBehavior(e, t, n, r, a) {
      p(e, $);
      const b = Re(t, u.__wbindgen_malloc), c = O, o = u.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, b, c, n, r, a);
      if (o[1]) throw B(o[0]);
    }
    splitToWithStates(e, t, n, r) {
      p(e, $);
      const a = u.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, n, r);
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
    uploadVideoFrame(e, t, n, r) {
      p(e, ue);
      const a = u_(r, u.__wbindgen_malloc), b = O;
      return u.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, n, a, b) !== 0;
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
  function bn(_, e) {
    return Error(N(_, e));
  }
  function cn(_) {
    return Number(_);
  }
  function on(_, e) {
    const t = String(e), n = o_(t, u.__wbindgen_malloc, u.__wbindgen_realloc), r = O;
    z().setInt32(_ + 4, r, true), z().setInt32(_ + 0, n, true);
  }
  function sn(_, e) {
    const t = e, n = typeof t == "bigint" ? t : void 0;
    z().setBigInt64(_ + 8, U(n) ? BigInt(0) : n, true), z().setInt32(_ + 0, !U(n), true);
  }
  function fn(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return U(t) ? 16777215 : t ? 1 : 0;
  }
  function un(_, e) {
    const t = D_(e), n = o_(t, u.__wbindgen_malloc, u.__wbindgen_realloc), r = O;
    z().setInt32(_ + 4, r, true), z().setInt32(_ + 0, n, true);
  }
  function dn(_, e) {
    return _ in e;
  }
  function gn(_) {
    return typeof _ == "bigint";
  }
  function wn(_) {
    return typeof _ == "function";
  }
  function pn(_) {
    return _ === null;
  }
  function ln(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function mn(_) {
    return _ === void 0;
  }
  function hn(_, e) {
    return _ === e;
  }
  function xn(_, e) {
    return _ == e;
  }
  function yn(_, e) {
    const t = e, n = typeof t == "number" ? t : void 0;
    z().setFloat64(_ + 8, U(n) ? 0 : n, true), z().setInt32(_ + 0, !U(n), true);
  }
  function $n(_, e) {
    const t = e, n = typeof t == "string" ? t : void 0;
    var r = U(n) ? 0 : o_(n, u.__wbindgen_malloc, u.__wbindgen_realloc), a = O;
    z().setInt32(_ + 4, a, true), z().setInt32(_ + 0, r, true);
  }
  function Sn(_, e) {
    throw new Error(N(_, e));
  }
  function vn(_) {
    _._wbg_cb_unref();
  }
  function An() {
    return W(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function In() {
    return W(function(_, e, t, n) {
      return _.call(e, t, n);
    }, arguments);
  }
  function Tn() {
    return W(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function Dn() {
    return W(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function Bn() {
    return W(function(_, e, t, n) {
      _.copyTextureToTexture(e, t, n);
    }, arguments);
  }
  function Fn(_, e) {
    return _.createBindGroup(e);
  }
  function Pn(_, e) {
    return _.createCommandEncoder(e);
  }
  function kn() {
    return W(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function Mn() {
    return W(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function Cn(_) {
    _.destroy();
  }
  function Vn(_) {
    return _.done;
  }
  function Rn(_, e, t, n, r, a) {
    _.drawIndexed(e >>> 0, t >>> 0, n >>> 0, r, a >>> 0);
  }
  function En(_) {
    _.end();
  }
  function Ln(_) {
    return Object.entries(_);
  }
  function On(_) {
    return _.finish();
  }
  function Wn(_, e) {
    return _.finish(e);
  }
  function Gn() {
    return W(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function zn(_, e) {
    return _[e >>> 0];
  }
  function Un() {
    return W(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function qn(_, e) {
    return _[e >>> 0];
  }
  function Hn(_, e) {
    return _[e];
  }
  function jn(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function Nn(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function Jn(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function Qn(_) {
    return Array.isArray(_);
  }
  function Xn(_) {
    return Number.isSafeInteger(_);
  }
  function Yn() {
    return Symbol.iterator;
  }
  function Kn(_, e) {
    const t = e.label, n = o_(t, u.__wbindgen_malloc, u.__wbindgen_realloc), r = O;
    z().setInt32(_ + 4, r, true), z().setInt32(_ + 0, n, true);
  }
  function Zn(_) {
    return _.length;
  }
  function er(_) {
    return _.length;
  }
  function _r(_, e, t, n) {
    return _.mapAsync(e >>> 0, t, n);
  }
  function tr() {
    return new Object();
  }
  function nr() {
    return new Array();
  }
  function rr(_) {
    return new Uint8Array(_);
  }
  function ar(_, e) {
    return new Error(N(_, e));
  }
  function br(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function cr() {
    return W(function(_) {
      return _.next();
    }, arguments);
  }
  function or(_) {
    return _.next;
  }
  function sr(_) {
    return _.onSubmittedWorkDone();
  }
  function ir(_, e, t) {
    Uint8Array.prototype.set.call(G_(_, e), t);
  }
  function fr(_, e) {
    return _.push(e);
  }
  function ur(_) {
    return _.queueMicrotask;
  }
  function dr(_) {
    queueMicrotask(_);
  }
  function gr(_) {
    return Promise.resolve(_);
  }
  function wr() {
    return W(function(_, e, t, n, r, a, b) {
      _.setBindGroup(e >>> 0, t, ab(n, r), a, b >>> 0);
    }, arguments);
  }
  function pr(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function lr(_, e, t, n, r) {
    _.setIndexBuffer(e, Pt[t], n, r);
  }
  function mr(_, e, t, n) {
    _.setIndexBuffer(e, Pt[t], n);
  }
  function hr(_, e) {
    _.setPipeline(e);
  }
  function xr(_, e, t, n) {
    _.setVertexBuffer(e >>> 0, t, n);
  }
  function yr(_, e, t, n, r) {
    _.setVertexBuffer(e >>> 0, t, n, r);
  }
  function $r(_, e, t, n, r, a, b) {
    _.setViewport(e, t, n, r, a, b);
  }
  function Sr(_, e, t) {
    _[e] = t;
  }
  function vr(_, e) {
    _.a = e;
  }
  function Ar(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function Ir(_, e) {
    _.aspect = kt[e];
  }
  function Tr(_, e) {
    _.aspect = kt[e];
  }
  function Dr(_, e) {
    _.b = e;
  }
  function Br(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function Fr(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function Pr(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function kr(_, e) {
    _.binding = e >>> 0;
  }
  function Mr(_, e) {
    _.buffer = e;
  }
  function Cr(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function Vr(_, e) {
    _.clearValue = e;
  }
  function Rr(_, e) {
    _.colorAttachments = e;
  }
  function Er(_, e, t) {
    _[e >>> 0] = t;
  }
  function Lr(_, e) {
    _.depthClearValue = e;
  }
  function Or(_, e) {
    _.depthLoadOp = O_[e];
  }
  function Wr(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function Gr(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function zr(_, e) {
    _.depthStencilAttachment = e;
  }
  function Ur(_, e) {
    _.depthStoreOp = W_[e];
  }
  function qr(_, e) {
    _.dimension = rb[e];
  }
  function Hr(_, e) {
    _.dimension = nb[e];
  }
  function jr(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function Nr(_, e) {
    _.entries = e;
  }
  function Jr(_, e) {
    _.format = Mt[e];
  }
  function Qr(_, e) {
    _.format = Mt[e];
  }
  function Xr(_, e) {
    _.g = e;
  }
  function Yr(_, e) {
    _.height = e >>> 0;
  }
  function Kr(_, e, t) {
    _.label = N(e, t);
  }
  function Zr(_, e, t) {
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
  function na(_, e, t) {
    _.label = N(e, t);
  }
  function ra(_, e) {
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
    _.stencilStoreOp = W_[e];
  }
  function va(_, e) {
    _.storeOp = W_[e];
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
  function Va(_, e) {
    _.z = e >>> 0;
  }
  function Ra() {
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
  function Wa(_, e) {
    _.submit(e);
  }
  function Ga(_, e, t) {
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
    return W(function(_, e, t, n, r, a, b) {
      _.writeBuffer(e, t, G_(n, r), a, b);
    }, arguments);
  }
  function Na() {
    return W(function(_, e, t, n, r, a) {
      _.writeTexture(e, G_(t, n), r, a);
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
    const n = u.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (n[1]) throw B(n[0]);
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
  ], rb = [
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
      const r = _.description;
      return r == null ? "Symbol" : `Symbol(${r})`;
    }
    if (e == "function") {
      const r = _.name;
      return typeof r == "string" && r.length > 0 ? `Function(${r})` : "Function";
    }
    if (Array.isArray(_)) {
      const r = _.length;
      let a = "[";
      r > 0 && (a += D_(_[0]));
      for (let b = 1; b < r; b++) a += ", " + D_(_[b]);
      return a += "]", a;
    }
    const t = /\[object ([^\]]+)\]/.exec(toString.call(_));
    let n;
    if (t && t.length > 1) n = t[1];
    else return toString.call(_);
    if (n == "Object") try {
      return "Object(" + JSON.stringify(_) + ")";
    } catch {
      return "Object";
    }
    return _ instanceof Error ? `${_.name}: ${_.message}
${_.stack}` : n;
  }
  function ab(_, e) {
    return _ = _ >>> 0, cb().subarray(_ / 4, _ / 4 + e);
  }
  function G_(_, e) {
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
  let Ve = null;
  function pe() {
    return (Ve === null || Ve.byteLength === 0) && (Ve = new Uint8Array(u.memory.buffer)), Ve;
  }
  function W(_, e) {
    try {
      return _.apply(this, e);
    } catch (t) {
      const n = Fe(t);
      u.__wbindgen_exn_store(n);
    }
  }
  function U(_) {
    return _ == null;
  }
  function Ct(_, e, t) {
    const n = {
      a: _,
      b: e,
      cnt: 1
    }, r = (...a) => {
      n.cnt++;
      const b = n.a;
      n.a = 0;
      try {
        return t(b, n.b, ...a);
      } finally {
        n.a = b, r._wbg_cb_unref();
      }
    };
    return r._wbg_cb_unref = () => {
      --n.cnt === 0 && (u.__wbindgen_destroy_closure(n.a, n.b), n.a = 0, gt.unregister(n));
    }, gt.register(r, n, n), r;
  }
  function u_(_, e) {
    const t = e(_.length * 1, 1) >>> 0;
    return pe().set(_, t / 1), O = _.length, t;
  }
  function Re(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return bb().set(_, t / 8), O = _.length, t;
  }
  function o_(_, e, t) {
    if (t === void 0) {
      const c = Se.encode(_), o = e(c.length, 1) >>> 0;
      return pe().subarray(o, o + c.length).set(c), O = c.length, o;
    }
    let n = _.length, r = e(n, 1) >>> 0;
    const a = pe();
    let b = 0;
    for (; b < n; b++) {
      const c = _.charCodeAt(b);
      if (c > 127) break;
      a[r + b] = c;
    }
    if (b !== n) {
      b !== 0 && (_ = _.slice(b)), r = t(r, n, n = b + _.length * 3, 1) >>> 0;
      const c = pe().subarray(r + b, r + n), o = Se.encodeInto(_, c);
      b += o.written, r = t(r, n, b, 1) >>> 0;
    }
    return O = b, r;
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
      __wbg_next_0c4066e251d2eff9: cr,
      __wbg_done_b62d4a7d2286852a: Vn,
      __wbg_value_49f783bb59765962: Ha,
      __wbg_length_c6054974c0a6cdb9: er,
      __wbg_instanceof_Map_afa18d5840c04c15: Nn,
      __wbg_get_unchecked_54a4374c38e08460: qn,
      __wbg_set_dc601f4a69da0bc2: Er,
      __wbg_call_8e98ed2f3c86c4b5: Dn,
      __wbg_call_5575218572ead796: Tn,
      __wbg_call_0e855b388e315e17: In,
      __wbg_get_with_ref_key_6412cf3094599694: Hn,
      __wbg_set_6be42768c690e380: Sr,
      __wbg_get_197a3fe98f169e38: zn,
      __wbg_String_8564e559799eccda: on,
      __wbg_set_texture_16d2be474ce6ad0c: Aa,
      __wbg_set_mip_level_246db61be15bdd69: ba,
      __wbg_set_x_56f0c2c08a62725c: Ma,
      __wbg_set_y_04fb8ce84735b4e1: Ca,
      __wbg_set_z_a51316db27a4941e: Va,
      __wbg_set_origin_9b3b0fbe0a5dc469: fa,
      __wbg_set_aspect_77332ac136ee94eb: Ir,
      __wbg_set_a_5f6e488475272136: vr,
      __wbg_set_b_688365d692bba214: Dr,
      __wbg_set_g_d4d1d77cf8fdd362: Xr,
      __wbg_set_r_527e5a41c4b1a846: da,
      __wbg_set_width_1a5e2e86fa5bdcd8: ka,
      __wbg_set_height_e8b5483b8c117d5e: Yr,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: Wr,
      __wbg_set_format_e9d4b1475bb3bd3b: Qr,
      __wbg_set_size_a61ff22205255d61: ha,
      __wbg_set_usage_7fa9cd18d1104aca: Da,
      __wbg_set_label_0c1bd0e976cf0a9a: Zr,
      __wbg_set_dimension_36e13ccecae5af4b: Hr,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: oa,
      __wbg_set_sample_count_865e1d19b84e27e6: la,
      __wbg_push_f724b5db8acf89d2: fr,
      __wbg_set_view_formats_bab284fc81b40e70: Pa,
      __wbg_createTexture_9e76b80a2dc0d12e: kn,
      __wbg_set_entries_fc76ca4d7da6a709: Nr,
      __wbg_set_layout_eeef59714f5bf48b: ra,
      __wbg_set_label_f92ae11c77d74198: na,
      __wbg_createBindGroup_2320df4db188406c: Fn,
      __wbg_set_label_d1c24b5a7a3ac31d: ta,
      __wbg_createCommandEncoder_cd88faca35d9ed68: Pn,
      __wbg_set_color_attachments_abe67f6631926e28: Rr,
      __wbg_set_label_8fd860a36d2c7b74: _a,
      __wbg_set_view_dbd0294573f64d05: Fa,
      __wbg_set_depth_clear_value_442bf492734f63b6: Lr,
      __wbg_set_depth_load_op_34d430b74bb36d91: Or,
      __wbg_set_depth_store_op_0ea0a215313dbda7: Ur,
      __wbg_set_depth_read_only_138a11b10c731094: Gr,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: xa,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: ya,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: Sa,
      __wbg_set_stencil_read_only_fb489d191b6d969b: $a,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: zr,
      __wbg_set_query_set_18679a8580267d5a: ua,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: Pr,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: jr,
      __wbg_set_timestamp_writes_c552d52fbb417005: Ia,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: An,
      __wbg_copyTextureToTexture_1be188df1e535c0a: Bn,
      __wbg_label_47480289cc2bce71: Kn,
      __wbg_set_label_2d2227f4d5991e50: ea,
      __wbg_finish_cfaeede3baf55be1: Wn,
      __wbg_finish_087cb89c65c06eb1: On,
      __wbg_drawIndexed_68637ebab6dd8d6e: Rn,
      __wbg_setPipeline_bab24dbce96903b9: hr,
      __wbg_setViewport_f9d423db4f4b4b58: $r,
      __wbg_setBindGroup_4ba56e1e0d26f244: wr,
      __wbg_setBindGroup_6124849cc8547086: pr,
      __wbg_setIndexBuffer_17431786d06c1b7c: lr,
      __wbg_setIndexBuffer_a16ed5b869c87507: mr,
      __wbg_setVertexBuffer_b508baf8d0ffe331: yr,
      __wbg_setVertexBuffer_91c4b602d0289943: xr,
      __wbg_end_414453a89205612c: En,
      __wbg_writeBuffer_b4bdd36178348ca5: ja,
      __wbg_set_bytes_per_row_91681ca78d744888: Cr,
      __wbg_set_rows_per_image_d198b7e73a38978b: pa,
      __wbg_set_offset_a097a8050a3a9a33: ia,
      __wbg_writeTexture_b45b69132e46a227: Na,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: sr,
      __wbg_submit_1290d44bb76ecef4: Wa,
      __wbg_getMappedRange_5ed22727c9679168: Gn,
      __wbg_unmap_8f06698a75b8331a: qa,
      __wbg_destroy_b5b39f25f0799295: Cn,
      __wbg_mapAsync_bb0029907dd91181: _r,
      __wbg_set_dimension_174ad7e2fb67fb4e: qr,
      __wbg_set_format_90860b0321868db4: Jr,
      __wbg_set_aspect_a823a14d00d42d37: Tr,
      __wbg_set_base_array_layer_cc6c68d233489c4b: Br,
      __wbg_set_array_layer_count_daec613068108a9d: Ar,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: Fr,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: ca,
      __wbg_set_label_03d2396d4655a3e1: Kr,
      __wbg_set_usage_7f0dda8309469b1c: Ta,
      __wbg_createView_cc96b5bdd3d5bf5e: Mn,
      __wbg_then_05edfc8a4fea5106: Ga,
      __wbg_set_load_op_56844f51434037bf: aa,
      __wbg_set_store_op_caeede4654b3d847: va,
      __wbg_set_view_bdeab150b5f0768c: Ba,
      __wbg_set_clear_value_642701f928a5ccb3: Vr,
      __wbg_set_resolve_target_fe76b3f99cf72078: ga,
      __wbg_set_buffer_55f096330c8912b4: Mr,
      __wbg_set_offset_73156b0e0b41d79a: sa,
      __wbg_set_size_1e6281b07cd39177: ma,
      __wbg_set_binding_f3c188a8cd21455b: kr,
      __wbg_set_resource_fe385d2e3dadaf63: wa,
      __wbg_resolve_d82363d90af6928a: gr,
      __wbg_then_591b6b3a75ee817a: Ua,
      __wbg_iterator_cc47ba25a2be735a: Yn,
      __wbg_get_9a29be2cb383ed9a: Un,
      __wbg_next_402fa10b59ab20c3: or,
      __wbg_new_2e117a478906f062: tr,
      __wbg_new_36e147a8ced3c6e0: nr,
      __wbg_isArray_145a34fd0a38d37b: Qn,
      __wbg_new_e66a4b7758dd2e5c: ar,
      __wbg_isSafeInteger_a3389a198582f5f6: Xn,
      __wbg_entries_c261c3fa1f281256: Ln,
      __wbg_then_2a84678a50976959: za,
      __wbg_length_589238bdcf171f0e: Zn,
      __wbg_prototypesetcall_d721637c7ca66eb8: ir,
      __wbg_new_81880fb5002cb255: rr,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: br,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: Ra,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: La,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Ea,
      __wbg_static_accessor_WINDOW_168f178805d978fe: Oa,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: jn,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: Jn,
      __wbg_queueMicrotask_1c9b3800e321a967: ur,
      __wbg_queueMicrotask_311744e534a929a3: dr,
      __wbg___wbindgen_number_get_1cc01dd708740256: yn,
      __wbg___wbindgen_in_4990f46af709e33c: dn,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: Sn,
      __wbg___wbindgen_is_null_6d937fbfb6478470: pn,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: hn,
      __wbg_Number_c4bdf66bb78f7977: cn,
      __wbg_Error_fdd633d4bb5dd76a: bn,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: gn,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: ln,
      __wbg___wbindgen_string_get_71bb4348194e31f0: $n,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: fn,
      __wbg___wbindgen_is_function_acc5528be2b923f2: wn,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: mn,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: xn,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: sn,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: vn,
      __wbg___wbindgen_debug_string_8a447059637473e2: un,
      __wbindgen_init_externref_table: eb,
      __wbindgen_cast_0000000000000001: Ja,
      __wbindgen_cast_0000000000000002: Qa,
      __wbindgen_cast_0000000000000003: Xa,
      __wbindgen_cast_0000000000000004: Ya,
      __wbindgen_cast_0000000000000005: Ka,
      __wbindgen_cast_0000000000000006: Za
    }
  }, an), { memory: ub, __wbg_proteusapp_free: db, proteusapp_addChild: gb, proteusapp_animateTo: wb, proteusapp_bakeTexture: pb, proteusapp_bakedImageSize: lb, proteusapp_bakedTextSize: mb, proteusapp_channelDestroy: hb, proteusapp_channelSet: xb, proteusapp_component: yb, proteusapp_copyBakedImageFrom: $b, proteusapp_createVideo: Sb, proteusapp_cropImage: vb, proteusapp_destroy: Ab, proteusapp_freeResources: Ib, proteusapp_get: Tb, proteusapp_hideVideo: Db, proteusapp_loadTexture: Bb, proteusapp_mergeFrom: Fb, proteusapp_mergeFromWithBehavior: Pb, proteusapp_new: kb, proteusapp_onBlur: Mb, proteusapp_onClick: Cb, proteusapp_onDrag: Vb, proteusapp_onDropped: Rb, proteusapp_onFocus: Eb, proteusapp_onHoverEnter: Lb, proteusapp_onHoverExit: Ob, proteusapp_onPress: Wb, proteusapp_onRelease: Gb, proteusapp_onTransitionComplete: zb, proteusapp_pointerLeft: Ub, proteusapp_pointerMoved: qb, proteusapp_pointerPressed: Hb, proteusapp_pointerReleased: jb, proteusapp_releaseVideo: Nb, proteusapp_removeChild: Jb, proteusapp_setDeclaredGeometry: Qb, proteusapp_setDisabled: Xb, proteusapp_setImage: Yb, proteusapp_setInteractive: Kb, proteusapp_setOpacity: Zb, proteusapp_setText: ec, proteusapp_setTexture: _c, proteusapp_setTransitionInteraction: tc, proteusapp_setVideoCrossfade: nc, proteusapp_setVisible: rc, proteusapp_showVideo: ac, proteusapp_splitTo: bc, proteusapp_splitToWithBehavior: cc, proteusapp_splitToWithStates: oc, proteusapp_texture: sc, proteusapp_textureState: ic, proteusapp_tick: fc, proteusapp_transitionChannel: uc, proteusapp_uploadVideoFrame: dc, __wbg_handle_free: gc, __wbg_texturehandle_free: wc, __wbg_transitionchannel_free: pc, __wbg_videohandle_free: lc, handle_fromId: mc, handle_id: hc, texturehandle_fromId: xc, texturehandle_id: yc, __abort_handler: $c, __instance_terminated: Sc, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: vc, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Ac, __wbindgen_malloc: Ic, __wbindgen_realloc: Tc, __wbindgen_exn_store: Dc, __externref_table_alloc: Bc, __wbindgen_externrefs: Fc, __wbindgen_destroy_closure: Pc, __externref_table_dealloc: kc, __wbindgen_start: Vt } = fb, Mc = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: $c,
    __externref_table_alloc: Bc,
    __externref_table_dealloc: kc,
    __instance_terminated: Sc,
    __wbg_handle_free: gc,
    __wbg_proteusapp_free: db,
    __wbg_texturehandle_free: wc,
    __wbg_transitionchannel_free: pc,
    __wbg_videohandle_free: lc,
    __wbindgen_destroy_closure: Pc,
    __wbindgen_exn_store: Dc,
    __wbindgen_externrefs: Fc,
    __wbindgen_malloc: Ic,
    __wbindgen_realloc: Tc,
    __wbindgen_start: Vt,
    handle_fromId: mc,
    handle_id: hc,
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
    proteusapp_destroy: Ab,
    proteusapp_freeResources: Ib,
    proteusapp_get: Tb,
    proteusapp_hideVideo: Db,
    proteusapp_loadTexture: Bb,
    proteusapp_mergeFrom: Fb,
    proteusapp_mergeFromWithBehavior: Pb,
    proteusapp_new: kb,
    proteusapp_onBlur: Mb,
    proteusapp_onClick: Cb,
    proteusapp_onDrag: Vb,
    proteusapp_onDropped: Rb,
    proteusapp_onFocus: Eb,
    proteusapp_onHoverEnter: Lb,
    proteusapp_onHoverExit: Ob,
    proteusapp_onPress: Wb,
    proteusapp_onRelease: Gb,
    proteusapp_onTransitionComplete: zb,
    proteusapp_pointerLeft: Ub,
    proteusapp_pointerMoved: qb,
    proteusapp_pointerPressed: Hb,
    proteusapp_pointerReleased: jb,
    proteusapp_releaseVideo: Nb,
    proteusapp_removeChild: Jb,
    proteusapp_setDeclaredGeometry: Qb,
    proteusapp_setDisabled: Xb,
    proteusapp_setImage: Yb,
    proteusapp_setInteractive: Kb,
    proteusapp_setOpacity: Zb,
    proteusapp_setText: ec,
    proteusapp_setTexture: _c,
    proteusapp_setTransitionInteraction: tc,
    proteusapp_setVideoCrossfade: nc,
    proteusapp_setVisible: rc,
    proteusapp_showVideo: ac,
    proteusapp_splitTo: bc,
    proteusapp_splitToWithBehavior: cc,
    proteusapp_splitToWithStates: oc,
    proteusapp_texture: sc,
    proteusapp_textureState: ic,
    proteusapp_tick: fc,
    proteusapp_transitionChannel: uc,
    proteusapp_uploadVideoFrame: dc,
    texturehandle_fromId: xc,
    texturehandle_id: yc,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: Ac,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: vc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ib(Mc);
  Vt();
  const Cc = "" + new URL("proteus_host_web_bg-0OZ86gsC.wasm", import.meta.url).href;
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
  let F_ = class Rt {
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
      f.__wbg_proteusapp_free(e, 0);
    }
    addChild(e, t) {
      l(e, S), l(t, S);
      const n = f.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (n[1]) throw F(n[0]);
    }
    animateTo(e, t, n) {
      l(e, S);
      const r = f.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, n);
      if (r[1]) throw F(r[0]);
    }
    bakeTexture(e, t, n, r) {
      const a = w_(n, f.__wbindgen_malloc), b = R, c = f.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, b, r);
      return ne.__wrap(c);
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
    channelSet(e, t, n, r, a) {
      l(e, de), l(t, S), l(n, S);
      const b = f.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, r, a);
      if (b[1]) throw F(b[0]);
    }
    component(e) {
      const t = f.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw F(t[1]);
      return S.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      l(e, S), l(t, S);
      const n = f.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (n[2]) throw F(n[1]);
      return n[0] !== 0;
    }
    createVideo() {
      const e = f.proteusapp_createVideo(this.__wbg_ptr);
      return ge.__wrap(e);
    }
    cropImage(e, t) {
      l(e, S);
      const n = f.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[2]) throw F(n[1]);
      return n[0] !== 0;
    }
    destroy(e) {
      l(e, S);
      var t = e.__destroy_into_raw();
      const n = f.proteusapp_destroy(this.__wbg_ptr, t);
      if (n[1]) throw F(n[0]);
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
      const n = w_(e, f.__wbindgen_malloc), r = R, a = f.proteusapp_loadTexture(this.__wbg_ptr, n, r, t);
      return a === 0 ? void 0 : ne.__wrap(a);
    }
    mergeFrom(e, t, n, r) {
      l(e, S);
      const a = He(t, f.__wbindgen_malloc), b = R, c = f.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, b, n, r);
      if (c[1]) throw F(c[0]);
    }
    mergeFromWithBehavior(e, t, n, r, a) {
      l(e, S);
      const b = He(t, f.__wbindgen_malloc), c = R, o = f.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, b, c, n, r, a);
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
      const n = f.proteusapp_removeChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (n[1]) throw F(n[0]);
    }
    setDeclaredGeometry(e, t) {
      l(e, S);
      const n = f.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw F(n[0]);
    }
    setDisabled(e, t) {
      l(e, S);
      const n = f.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw F(n[0]);
    }
    setImage(e, t) {
      l(e, S);
      const n = f.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw F(n[0]);
    }
    setInteractive(e, t) {
      l(e, S);
      const n = f.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw F(n[0]);
    }
    setOpacity(e, t) {
      l(e, S);
      const n = f.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw F(n[0]);
    }
    setText(e, t) {
      l(e, S);
      const n = f.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw F(n[0]);
    }
    setTexture(e, t) {
      l(e, S), l(t, ne);
      const n = f.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (n[2]) throw F(n[1]);
      return n[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      l(e, S);
      const n = f.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw F(n[0]);
    }
    setVideoCrossfade(e, t) {
      l(e, S);
      const n = f.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[2]) throw F(n[1]);
      return n[0] !== 0;
    }
    setVisible(e, t) {
      l(e, S);
      const n = f.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw F(n[0]);
    }
    showVideo(e, t) {
      l(e, S), l(t, ge);
      const n = f.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (n[2]) throw F(n[1]);
      return n[0] !== 0;
    }
    splitTo(e, t, n, r) {
      l(e, S);
      const a = He(t, f.__wbindgen_malloc), b = R, c = f.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, b, n, r);
      if (c[1]) throw F(c[0]);
    }
    splitToWithBehavior(e, t, n, r, a) {
      l(e, S);
      const b = He(t, f.__wbindgen_malloc), c = R, o = f.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, b, c, n, r, a);
      if (o[1]) throw F(o[0]);
    }
    splitToWithStates(e, t, n, r) {
      l(e, S);
      const a = f.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, n, r);
      if (a[1]) throw F(a[0]);
    }
    texture(e) {
      const t = f.proteusapp_texture(this.__wbg_ptr, e);
      return ne.__wrap(t);
    }
    textureState(e) {
      return l(e, ne), f.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
    }
    tick(e) {
      f.proteusapp_tick(this.__wbg_ptr, e);
    }
    transitionChannel(e) {
      const t = f.proteusapp_transitionChannel(this.__wbg_ptr, !x(e), x(e) ? 0 : e);
      return de.__wrap(t);
    }
    uploadVideoFrame(e, t, n, r) {
      l(e, ge);
      const a = w_(r, f.__wbindgen_malloc), b = R;
      return f.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, n, a, b) !== 0;
    }
  };
  Symbol.dispose && (F_.prototype[Symbol.dispose] = F_.prototype.free);
  let ne = class P_ {
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
  Symbol.dispose && (ne.prototype[Symbol.dispose] = ne.prototype.free);
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
  function Vc(_, e, t, n) {
    const r = H(_, f.__wbindgen_malloc, f.__wbindgen_realloc), a = R;
    return f.mount(r, a, e, x(t) ? 0 : T(t), n);
  }
  function Rc(_, e) {
    return Error(I(_, e));
  }
  function Ec(_) {
    return Number(_);
  }
  function Lc(_, e) {
    const t = String(e), n = H(t, f.__wbindgen_malloc, f.__wbindgen_realloc), r = R;
    C().setInt32(_ + 4, r, true), C().setInt32(_ + 0, n, true);
  }
  function Oc(_) {
    return _.Window;
  }
  function Wc(_) {
    return _.WorkerGlobalScope;
  }
  function Gc(_, e) {
    const t = e, n = typeof t == "bigint" ? t : void 0;
    C().setBigInt64(_ + 8, x(n) ? BigInt(0) : n, true), C().setInt32(_ + 0, !x(n), true);
  }
  function zc(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return x(t) ? 16777215 : t ? 1 : 0;
  }
  function Uc(_, e) {
    const t = k_(e), n = H(t, f.__wbindgen_malloc, f.__wbindgen_realloc), r = R;
    C().setInt32(_ + 4, r, true), C().setInt32(_ + 0, n, true);
  }
  function qc(_, e) {
    return _ in e;
  }
  function Hc(_) {
    return typeof _ == "bigint";
  }
  function jc(_) {
    return typeof _ == "function";
  }
  function Nc(_) {
    return _ === null;
  }
  function Jc(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function Qc(_) {
    return _ === void 0;
  }
  function Xc(_, e) {
    return _ === e;
  }
  function Yc(_, e) {
    return _ == e;
  }
  function Kc(_, e) {
    const t = e, n = typeof t == "number" ? t : void 0;
    C().setFloat64(_ + 8, x(n) ? 0 : n, true), C().setInt32(_ + 0, !x(n), true);
  }
  function Zc(_, e) {
    const t = e, n = typeof t == "string" ? t : void 0;
    var r = x(n) ? 0 : H(n, f.__wbindgen_malloc, f.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, r, true);
  }
  function eo(_, e) {
    throw new Error(I(_, e));
  }
  function _o(_) {
    _._wbg_cb_unref();
  }
  function to(_, e) {
    _.activeTexture(e >>> 0);
  }
  function no(_, e) {
    _.activeTexture(e >>> 0);
  }
  function ro() {
    return w(function(_, e, t, n) {
      _.addEventListener(I(e, t), n);
    }, arguments);
  }
  function ao(_, e, t) {
    _.attachShader(e, t);
  }
  function bo(_, e, t) {
    _.attachShader(e, t);
  }
  function co(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function oo() {
    return w(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function so(_, e, t, n, r) {
    _.bindAttribLocation(e, t >>> 0, I(n, r));
  }
  function io(_, e, t, n, r) {
    _.bindAttribLocation(e, t >>> 0, I(n, r));
  }
  function fo(_, e, t, n, r, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, n, r, a);
  }
  function uo(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function go(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function wo(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function po(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function lo(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function mo(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function ho(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function xo(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function yo(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function $o(_, e) {
    _.bindVertexArrayOES(e);
  }
  function So(_, e) {
    _.bindVertexArray(e);
  }
  function vo(_, e, t, n, r) {
    _.blendColor(e, t, n, r);
  }
  function Ao(_, e, t, n, r) {
    _.blendColor(e, t, n, r);
  }
  function Io(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function To(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function Do(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Bo(_, e) {
    _.blendEquation(e >>> 0);
  }
  function Fo(_, e, t, n, r) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, n >>> 0, r >>> 0);
  }
  function Po(_, e, t, n, r) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, n >>> 0, r >>> 0);
  }
  function ko(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function Mo(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function Co(_, e, t, n, r, a, b, c, o, s, d) {
    _.blitFramebuffer(e, t, n, r, a, b, c, o, s >>> 0, d >>> 0);
  }
  function Vo(_, e, t, n) {
    _.bufferData(e >>> 0, t, n >>> 0);
  }
  function Ro(_, e, t, n) {
    _.bufferData(e >>> 0, t, n >>> 0);
  }
  function Eo(_, e, t, n) {
    _.bufferData(e >>> 0, t, n >>> 0);
  }
  function Lo(_, e, t, n) {
    _.bufferData(e >>> 0, t, n >>> 0);
  }
  function Oo(_, e, t, n) {
    _.bufferSubData(e >>> 0, t, n);
  }
  function Wo(_, e, t, n) {
    _.bufferSubData(e >>> 0, t, n);
  }
  function Go(_) {
    return _.button;
  }
  function zo() {
    return w(function(_, e, t, n) {
      return _.call(e, t, n);
    }, arguments);
  }
  function Uo() {
    return w(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function qo() {
    return w(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function Ho(_, e, t, n, r) {
    _.clearBufferfv(e >>> 0, t, E(n, r));
  }
  function jo(_, e, t, n, r) {
    _.clearBufferiv(e >>> 0, t, K(n, r));
  }
  function No(_, e, t, n, r) {
    _.clearBufferuiv(e >>> 0, t, ye(n, r));
  }
  function Jo(_, e) {
    _.clearDepth(e);
  }
  function Qo(_, e) {
    _.clearDepth(e);
  }
  function Xo(_, e) {
    _.clearStencil(e);
  }
  function Yo(_, e) {
    _.clearStencil(e);
  }
  function Ko(_, e) {
    _.clear(e >>> 0);
  }
  function Zo(_, e) {
    _.clear(e >>> 0);
  }
  function es(_, e, t, n) {
    return _.clientWaitSync(e, t >>> 0, n >>> 0);
  }
  function _s(_, e, t, n, r) {
    _.colorMask(e !== 0, t !== 0, n !== 0, r !== 0);
  }
  function ts(_, e, t, n, r) {
    _.colorMask(e !== 0, t !== 0, n !== 0, r !== 0);
  }
  function ns(_, e) {
    _.compileShader(e);
  }
  function rs(_, e) {
    _.compileShader(e);
  }
  function as(_, e, t, n, r, a, b, c, o) {
    _.compressedTexSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o);
  }
  function bs(_, e, t, n, r, a, b, c, o) {
    _.compressedTexSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o);
  }
  function cs(_, e, t, n, r, a, b, c, o, s) {
    _.compressedTexSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o, s);
  }
  function os(_, e, t, n, r, a, b, c, o, s, d, v) {
    _.compressedTexSubImage3D(e >>> 0, t, n, r, a, b, c, o, s >>> 0, d, v);
  }
  function ss(_, e, t, n, r, a, b, c, o, s, d) {
    _.compressedTexSubImage3D(e >>> 0, t, n, r, a, b, c, o, s >>> 0, d);
  }
  function is() {
    return w(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function fs(_) {
    return _.contentRect;
  }
  function us(_, e, t, n, r, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, n, r, a);
  }
  function ds(_, e, t, n, r, a, b, c, o) {
    _.copyTexSubImage2D(e >>> 0, t, n, r, a, b, c, o);
  }
  function gs(_, e, t, n, r, a, b, c, o) {
    _.copyTexSubImage2D(e >>> 0, t, n, r, a, b, c, o);
  }
  function ws(_, e, t, n, r, a, b, c, o, s) {
    _.copyTexSubImage3D(e >>> 0, t, n, r, a, b, c, o, s);
  }
  function ps() {
    return w(function(_, e, t, n) {
      _.copyTextureToTexture(e, t, n);
    }, arguments);
  }
  function ls() {
    return w(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function ms(_, e) {
    return _.createBindGroup(e);
  }
  function hs(_) {
    const e = _.createBuffer();
    return x(e) ? 0 : T(e);
  }
  function xs() {
    return w(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function ys(_) {
    const e = _.createBuffer();
    return x(e) ? 0 : T(e);
  }
  function $s(_, e) {
    return _.createCommandEncoder(e);
  }
  function Ss(_) {
    const e = _.createFramebuffer();
    return x(e) ? 0 : T(e);
  }
  function vs(_) {
    const e = _.createFramebuffer();
    return x(e) ? 0 : T(e);
  }
  function As(_, e) {
    return _.createPipelineLayout(e);
  }
  function Is(_) {
    const e = _.createProgram();
    return x(e) ? 0 : T(e);
  }
  function Ts(_) {
    const e = _.createProgram();
    return x(e) ? 0 : T(e);
  }
  function Ds(_) {
    const e = _.createQuery();
    return x(e) ? 0 : T(e);
  }
  function Bs() {
    return w(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function Fs(_) {
    const e = _.createRenderbuffer();
    return x(e) ? 0 : T(e);
  }
  function Ps(_) {
    const e = _.createRenderbuffer();
    return x(e) ? 0 : T(e);
  }
  function ks(_, e) {
    return _.createSampler(e);
  }
  function Ms(_) {
    const e = _.createSampler();
    return x(e) ? 0 : T(e);
  }
  function Cs(_, e) {
    return _.createShaderModule(e);
  }
  function Vs(_, e) {
    const t = _.createShader(e >>> 0);
    return x(t) ? 0 : T(t);
  }
  function Rs(_, e) {
    const t = _.createShader(e >>> 0);
    return x(t) ? 0 : T(t);
  }
  function Es(_) {
    const e = _.createTexture();
    return x(e) ? 0 : T(e);
  }
  function Ls(_) {
    const e = _.createTexture();
    return x(e) ? 0 : T(e);
  }
  function Os() {
    return w(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function Ws(_) {
    const e = _.createVertexArrayOES();
    return x(e) ? 0 : T(e);
  }
  function Gs(_) {
    const e = _.createVertexArray();
    return x(e) ? 0 : T(e);
  }
  function zs() {
    return w(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function Us(_, e) {
    _.cullFace(e >>> 0);
  }
  function qs(_, e) {
    _.cullFace(e >>> 0);
  }
  function Hs(_, e, t, n) {
    console.debug(_, e, t, n);
  }
  function js(_, e) {
    _.deleteBuffer(e);
  }
  function Ns(_, e) {
    _.deleteBuffer(e);
  }
  function Js(_, e) {
    _.deleteFramebuffer(e);
  }
  function Qs(_, e) {
    _.deleteFramebuffer(e);
  }
  function Xs(_, e) {
    _.deleteProgram(e);
  }
  function Ys(_, e) {
    _.deleteProgram(e);
  }
  function Ks(_, e) {
    _.deleteQuery(e);
  }
  function Zs(_, e) {
    _.deleteRenderbuffer(e);
  }
  function ei(_, e) {
    _.deleteRenderbuffer(e);
  }
  function _i(_, e) {
    _.deleteSampler(e);
  }
  function ti(_, e) {
    _.deleteShader(e);
  }
  function ni(_, e) {
    _.deleteShader(e);
  }
  function ri(_, e) {
    _.deleteSync(e);
  }
  function ai(_, e) {
    _.deleteTexture(e);
  }
  function bi(_, e) {
    _.deleteTexture(e);
  }
  function ci(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function oi(_, e) {
    _.deleteVertexArray(e);
  }
  function si(_, e) {
    _.depthFunc(e >>> 0);
  }
  function ii(_, e) {
    _.depthFunc(e >>> 0);
  }
  function fi(_, e) {
    _.depthMask(e !== 0);
  }
  function ui(_, e) {
    _.depthMask(e !== 0);
  }
  function di(_, e, t) {
    _.depthRange(e, t);
  }
  function gi(_, e, t) {
    _.depthRange(e, t);
  }
  function wi(_, e) {
    const t = e.description, n = H(t, f.__wbindgen_malloc, f.__wbindgen_realloc), r = R;
    C().setInt32(_ + 4, r, true), C().setInt32(_ + 0, n, true);
  }
  function pi(_) {
    _.destroy();
  }
  function li(_) {
    return _.devicePixelRatio;
  }
  function mi(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function hi(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function xi(_, e) {
    _.disable(e >>> 0);
  }
  function yi(_, e) {
    _.disable(e >>> 0);
  }
  function $i(_) {
    const e = _.document;
    return x(e) ? 0 : T(e);
  }
  function Si(_) {
    return _.done;
  }
  function vi(_, e, t, n, r) {
    _.drawArraysInstancedANGLE(e >>> 0, t, n, r);
  }
  function Ai(_, e, t, n, r) {
    _.drawArraysInstanced(e >>> 0, t, n, r);
  }
  function Ii(_, e, t, n) {
    _.drawArrays(e >>> 0, t, n);
  }
  function Ti(_, e, t, n) {
    _.drawArrays(e >>> 0, t, n);
  }
  function Di(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function Bi(_, e) {
    _.drawBuffers(e);
  }
  function Fi(_, e, t, n, r, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, n >>> 0, r, a);
  }
  function Pi(_, e, t, n, r, a) {
    _.drawElementsInstanced(e >>> 0, t, n >>> 0, r, a);
  }
  function ki(_, e, t, n, r, a) {
    _.drawIndexed(e >>> 0, t >>> 0, n >>> 0, r, a >>> 0);
  }
  function Mi(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function Ci(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function Vi(_, e) {
    _.enable(e >>> 0);
  }
  function Ri(_, e) {
    _.enable(e >>> 0);
  }
  function Ei(_, e) {
    _.endQuery(e >>> 0);
  }
  function Li(_) {
    _.end();
  }
  function Oi(_) {
    return Object.entries(_);
  }
  function Wi(_, e, t, n) {
    console.error(_, e, t, n);
  }
  function Gi(_) {
    console.error(_);
  }
  function zi(_, e) {
    let t, n;
    try {
      t = _, n = e, console.error(I(_, e));
    } finally {
      f.__wbindgen_free(t, n, 1);
    }
  }
  function Ui(_, e, t) {
    const n = _.fenceSync(e >>> 0, t >>> 0);
    return x(n) ? 0 : T(n);
  }
  function qi(_) {
    return _.finish();
  }
  function Hi(_, e) {
    return _.finish(e);
  }
  function ji(_) {
    _.flush();
  }
  function Ni(_) {
    _.flush();
  }
  function Ji(_, e, t, n, r) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, n >>> 0, r);
  }
  function Qi(_, e, t, n, r) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, n >>> 0, r);
  }
  function Xi(_, e, t, n, r, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, n >>> 0, r, a);
  }
  function Yi(_, e, t, n, r, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, n >>> 0, r, a);
  }
  function Ki(_, e, t, n, r, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, n, r, a);
  }
  function Zi(_, e, t, n, r, a, b) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, n, r, a, b);
  }
  function ef(_, e) {
    _.frontFace(e >>> 0);
  }
  function _f(_, e) {
    _.frontFace(e >>> 0);
  }
  function tf(_) {
    return _.getBoundingClientRect();
  }
  function nf(_, e, t, n) {
    _.getBufferSubData(e >>> 0, t, n);
  }
  function rf() {
    return w(function(_, e, t, n) {
      const r = _.getContext(I(e, t), n);
      return x(r) ? 0 : T(r);
    }, arguments);
  }
  function af() {
    return w(function(_, e, t) {
      const n = _.getContext(I(e, t));
      return x(n) ? 0 : T(n);
    }, arguments);
  }
  function bf() {
    return w(function(_, e, t) {
      const n = _.getContext(I(e, t));
      return x(n) ? 0 : T(n);
    }, arguments);
  }
  function cf() {
    return w(function(_, e, t, n) {
      const r = _.getContext(I(e, t), n);
      return x(r) ? 0 : T(r);
    }, arguments);
  }
  function of() {
    return w(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function sf(_, e, t) {
    const n = _.getElementById(I(e, t));
    return x(n) ? 0 : T(n);
  }
  function ff() {
    return w(function(_, e, t) {
      const n = _.getExtension(I(e, t));
      return x(n) ? 0 : T(n);
    }, arguments);
  }
  function uf() {
    return w(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function df() {
    return w(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function gf() {
    return w(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function wf() {
    return w(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function pf(_) {
    const e = _.getPreferredCanvasFormat();
    return (re.indexOf(e) + 1 || 96) - 1;
  }
  function lf(_, e, t) {
    const n = e.getProgramInfoLog(t);
    var r = x(n) ? 0 : H(n, f.__wbindgen_malloc, f.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, r, true);
  }
  function mf(_, e, t) {
    const n = e.getProgramInfoLog(t);
    var r = x(n) ? 0 : H(n, f.__wbindgen_malloc, f.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, r, true);
  }
  function hf(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function xf(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function yf(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function $f(_, e, t) {
    const n = e.getShaderInfoLog(t);
    var r = x(n) ? 0 : H(n, f.__wbindgen_malloc, f.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, r, true);
  }
  function Sf(_, e, t) {
    const n = e.getShaderInfoLog(t);
    var r = x(n) ? 0 : H(n, f.__wbindgen_malloc, f.__wbindgen_realloc), a = R;
    C().setInt32(_ + 4, a, true), C().setInt32(_ + 0, r, true);
  }
  function vf(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function Af(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function If(_) {
    const e = _.getSupportedExtensions();
    return x(e) ? 0 : T(e);
  }
  function Tf(_) {
    const e = _.getSupportedProfiles();
    return x(e) ? 0 : T(e);
  }
  function Df(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function Bf(_, e, t, n) {
    return _.getUniformBlockIndex(e, I(t, n));
  }
  function Ff(_, e, t, n) {
    const r = _.getUniformLocation(e, I(t, n));
    return x(r) ? 0 : T(r);
  }
  function Pf(_, e, t, n) {
    const r = _.getUniformLocation(e, I(t, n));
    return x(r) ? 0 : T(r);
  }
  function kf(_, e) {
    return _[e >>> 0];
  }
  function Mf(_, e) {
    const t = _[e >>> 0];
    return x(t) ? 0 : T(t);
  }
  function Cf() {
    return w(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function Vf(_, e) {
    return _[e >>> 0];
  }
  function Rf(_, e) {
    return _[e];
  }
  function Ef(_) {
    return _.gpu;
  }
  function Lf(_) {
    return _.height;
  }
  function Of(_) {
    return _.height;
  }
  function Wf(_) {
    return _.hidden;
  }
  function Gf(_, e, t) {
    return _.includes(e, t);
  }
  function zf(_) {
    return _.info;
  }
  function Uf(_, e, t, n) {
    console.info(_, e, t, n);
  }
  function qf(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function Hf(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function jf(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Nf(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function Jf(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function Qf(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function Xf(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function Yf(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Kf(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function Zf() {
    return w(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function eu(_) {
    return Array.isArray(_);
  }
  function _u(_) {
    return Number.isSafeInteger(_);
  }
  function tu(_, e) {
    return Object.is(_, e);
  }
  function nu() {
    return Symbol.iterator;
  }
  function ru(_, e) {
    const t = e.label, n = H(t, f.__wbindgen_malloc, f.__wbindgen_realloc), r = R;
    C().setInt32(_ + 4, r, true), C().setInt32(_ + 0, n, true);
  }
  function au(_) {
    return _.length;
  }
  function bu(_) {
    return _.length;
  }
  function cu(_) {
    return _.limits;
  }
  function ou(_) {
    return _.limits;
  }
  function su(_, e) {
    _.linkProgram(e);
  }
  function iu(_, e) {
    _.linkProgram(e);
  }
  function fu(_, e, t, n) {
    console.log(_, e, t, n);
  }
  function uu(_, e, t, n) {
    return _.mapAsync(e >>> 0, t, n);
  }
  function du(_) {
    return _.maxBindGroups;
  }
  function gu(_) {
    return _.maxBindingsPerBindGroup;
  }
  function wu(_) {
    return _.maxBufferSize;
  }
  function pu(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function lu(_) {
    return _.maxColorAttachments;
  }
  function mu(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function hu(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function xu(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function yu(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function $u(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function Su(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function vu(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function Au(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function Iu(_) {
    return _.maxInterStageShaderVariables;
  }
  function Tu(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function Du(_) {
    return _.maxSamplersPerShaderStage;
  }
  function Bu(_) {
    return _.maxStorageBufferBindingSize;
  }
  function Fu(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function Pu(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function ku(_) {
    return _.maxTextureArrayLayers;
  }
  function Mu(_) {
    return _.maxTextureDimension1D;
  }
  function Cu(_) {
    return _.maxTextureDimension2D;
  }
  function Vu(_) {
    return _.maxTextureDimension3D;
  }
  function Ru(_) {
    return _.maxUniformBufferBindingSize;
  }
  function Eu(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function Lu(_) {
    return _.maxVertexAttributes;
  }
  function Ou(_) {
    return _.maxVertexBufferArrayStride;
  }
  function Wu(_) {
    return _.maxVertexBuffers;
  }
  function Gu(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function zu(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function Uu(_) {
    return _.navigator;
  }
  function qu(_) {
    return _.navigator;
  }
  function Hu() {
    return w(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function ju() {
    return new Error();
  }
  function Nu() {
    return new Object();
  }
  function Ju() {
    return new Array();
  }
  function Qu(_) {
    return new Uint8Array(_);
  }
  function Xu(_, e) {
    return new Error(I(_, e));
  }
  function Yu(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, n = (a, b) => {
        const c = t.a;
        t.a = 0;
        try {
          return o2(c, t.b, a, b);
        } finally {
          t.a = c;
        }
      };
      return new Promise(n);
    } finally {
      t.a = 0;
    }
  }
  function Ku(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function Zu() {
    return w(function(_) {
      return _.next();
    }, arguments);
  }
  function ed(_) {
    return _.next;
  }
  function _d(_, e) {
    _.observe(e);
  }
  function td(_) {
    return Array.of(_);
  }
  function nd(_) {
    return _.offsetX;
  }
  function rd(_) {
    return _.offsetY;
  }
  function ad(_) {
    return _.onSubmittedWorkDone();
  }
  function bd(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function cd(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function od(_, e, t) {
    _.polygonOffset(e, t);
  }
  function sd(_, e, t) {
    _.polygonOffset(e, t);
  }
  function id(_) {
    _.preventDefault();
  }
  function fd(_) {
    return F_.__wrap(_);
  }
  function ud(_, e, t) {
    Uint8Array.prototype.set.call(s_(_, e), t);
  }
  function dd(_, e) {
    return _.push(e);
  }
  function gd(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function wd() {
    return w(function(_, e, t) {
      return _.querySelectorAll(I(e, t));
    }, arguments);
  }
  function pd() {
    return w(function(_, e, t) {
      const n = _.querySelector(I(e, t));
      return x(n) ? 0 : T(n);
    }, arguments);
  }
  function ld(_) {
    return _.queueMicrotask;
  }
  function md(_) {
    queueMicrotask(_);
  }
  function hd(_) {
    return _.queue;
  }
  function xd(_, e) {
    _.readBuffer(e >>> 0);
  }
  function yd() {
    return w(function(_, e, t, n, r, a, b, c) {
      _.readPixels(e, t, n, r, a >>> 0, b >>> 0, c);
    }, arguments);
  }
  function $d() {
    return w(function(_, e, t, n, r, a, b, c) {
      _.readPixels(e, t, n, r, a >>> 0, b >>> 0, c);
    }, arguments);
  }
  function Sd() {
    return w(function(_, e, t, n, r, a, b, c) {
      _.readPixels(e, t, n, r, a >>> 0, b >>> 0, c);
    }, arguments);
  }
  function vd(_, e, t, n, r, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, n >>> 0, r, a);
  }
  function Ad(_, e, t, n, r) {
    _.renderbufferStorage(e >>> 0, t >>> 0, n, r);
  }
  function Id(_, e, t, n, r) {
    _.renderbufferStorage(e >>> 0, t >>> 0, n, r);
  }
  function Td(_, e) {
    return _.requestAdapter(e);
  }
  function Dd(_) {
    return _.requestAdapter();
  }
  function Bd() {
    return w(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function Fd(_, e) {
    return _.requestDevice(e);
  }
  function Pd(_) {
    return Promise.resolve(_);
  }
  function kd(_, e, t, n) {
    _.samplerParameterf(e, t >>> 0, n);
  }
  function Md(_, e, t, n) {
    _.samplerParameteri(e, t >>> 0, n);
  }
  function Cd(_, e, t, n, r) {
    _.scissor(e, t, n, r);
  }
  function Vd(_, e, t, n, r) {
    _.scissor(e, t, n, r);
  }
  function Rd() {
    return w(function(_, e, t, n, r, a, b) {
      _.setBindGroup(e >>> 0, t, ye(n, r), a, b >>> 0);
    }, arguments);
  }
  function Ed(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function Ld(_, e, t, n, r) {
    _.setIndexBuffer(e, q_[t], n, r);
  }
  function Od(_, e, t, n) {
    _.setIndexBuffer(e, q_[t], n);
  }
  function Wd(_, e) {
    _.setPipeline(e);
  }
  function Gd(_, e, t, n) {
    _.setVertexBuffer(e >>> 0, t, n);
  }
  function zd(_, e, t, n, r) {
    _.setVertexBuffer(e >>> 0, t, n, r);
  }
  function Ud(_, e, t, n, r, a, b) {
    _.setViewport(e, t, n, r, a, b);
  }
  function qd(_, e, t) {
    _.set(e, t >>> 0);
  }
  function Hd() {
    return w(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function jd(_, e, t) {
    _[e] = t;
  }
  function Nd(_, e) {
    _.a = e;
  }
  function Jd(_, e) {
    _.access = h2[e];
  }
  function Qd(_, e) {
    _.addressModeU = z_[e];
  }
  function Xd(_, e) {
    _.addressModeV = z_[e];
  }
  function Yd(_, e) {
    _.addressModeW = z_[e];
  }
  function Kd(_, e) {
    _.alpha = e;
  }
  function Zd(_, e) {
    _.alphaMode = u2[e];
  }
  function e0(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function _0(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function t0(_, e) {
    _.arrayStride = e;
  }
  function n0(_, e) {
    _.aspect = Gt[e];
  }
  function r0(_, e) {
    _.aspect = Gt[e];
  }
  function a0(_, e) {
    _.attributes = e;
  }
  function b0(_, e) {
    _.b = e;
  }
  function c0(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function o0(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function s0(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function i0(_, e) {
    _.bindGroupLayouts = e;
  }
  function f0(_, e) {
    _.binding = e >>> 0;
  }
  function u0(_, e) {
    _.binding = e >>> 0;
  }
  function d0(_, e) {
    _.blend = e;
  }
  function g0(_, e) {
    _.buffer = e;
  }
  function w0(_, e) {
    _.buffer = e;
  }
  function p0(_, e) {
    _.buffers = e;
  }
  function l0(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function m0(_, e) {
    _.clearValue = e;
  }
  function h0(_, e, t) {
    _.code = I(e, t);
  }
  function x0(_, e) {
    _.colorAttachments = e;
  }
  function y0(_, e) {
    _.color = e;
  }
  function $0(_, e) {
    _.compare = U_[e];
  }
  function S0(_, e) {
    _.compare = U_[e];
  }
  function v0(_, e) {
    _.count = e >>> 0;
  }
  function A0(_, e) {
    _.cullMode = d2[e];
  }
  function I0(_, e, t) {
    _[e >>> 0] = t;
  }
  function T0(_, e) {
    _.depthBias = e;
  }
  function D0(_, e) {
    _.depthBiasClamp = e;
  }
  function B0(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function F0(_, e) {
    _.depthClearValue = e;
  }
  function P0(_, e) {
    _.depthCompare = U_[e];
  }
  function k0(_, e) {
    _.depthFailOp = j_[e];
  }
  function M0(_, e) {
    _.depthLoadOp = H_[e];
  }
  function C0(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function V0(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function R0(_, e) {
    _.depthStencil = e;
  }
  function E0(_, e) {
    _.depthStencilAttachment = e;
  }
  function L0(_, e) {
    _.depthStoreOp = N_[e];
  }
  function O0(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function W0(_, e) {
    _.device = e;
  }
  function G0(_, e) {
    _.dimension = J_[e];
  }
  function z0(_, e) {
    _.dimension = x2[e];
  }
  function U0(_, e) {
    _.dstFactor = Ot[e];
  }
  function q0(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function H0(_, e) {
    _.entries = e;
  }
  function j0(_, e) {
    _.entries = e;
  }
  function N0(_, e, t) {
    _.entryPoint = I(e, t);
  }
  function J0(_, e, t) {
    _.entryPoint = I(e, t);
  }
  function Q0(_, e) {
    _.externalTexture = e;
  }
  function X0(_, e) {
    _.failOp = j_[e];
  }
  function Y0(_, e) {
    _.format = re[e];
  }
  function K0(_, e) {
    _.format = $2[e];
  }
  function Z0(_, e) {
    _.format = re[e];
  }
  function eg(_, e) {
    _.format = re[e];
  }
  function _g(_, e) {
    _.format = re[e];
  }
  function tg(_, e) {
    _.format = re[e];
  }
  function ng(_, e) {
    _.format = re[e];
  }
  function rg(_, e) {
    _.fragment = e;
  }
  function ag(_, e) {
    _.frontFace = g2[e];
  }
  function bg(_, e) {
    _.g = e;
  }
  function cg(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function og(_, e) {
    _.height = e >>> 0;
  }
  function sg(_, e) {
    _.height = e >>> 0;
  }
  function ig(_, e) {
    _.height = e >>> 0;
  }
  function fg(_, e, t) {
    _.label = I(e, t);
  }
  function ug(_, e, t) {
    _.label = I(e, t);
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
  function vg(_, e) {
    _.layout = e;
  }
  function Ag(_, e) {
    _.layout = e;
  }
  function Ig(_, e) {
    _.loadOp = H_[e];
  }
  function Tg(_, e) {
    _.lodMaxClamp = e;
  }
  function Dg(_, e) {
    _.lodMinClamp = e;
  }
  function Bg(_, e) {
    _.magFilter = Wt[e];
  }
  function Fg(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function Pg(_, e) {
    _.mask = e >>> 0;
  }
  function kg(_, e) {
    _.maxAnisotropy = e;
  }
  function Mg(_, e) {
    _.minBindingSize = e;
  }
  function Cg(_, e) {
    _.minFilter = Wt[e];
  }
  function Vg(_, e) {
    _.mipLevel = e >>> 0;
  }
  function Rg(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Eg(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Lg(_, e) {
    _.mipmapFilter = w2[e];
  }
  function Og(_, e) {
    _.module = e;
  }
  function Wg(_, e) {
    _.module = e;
  }
  function Gg(_, e) {
    _.multisample = e;
  }
  function zg(_, e) {
    _.multisampled = e !== 0;
  }
  function Ug(_, e) {
    _.offset = e;
  }
  function qg(_, e) {
    _.offset = e;
  }
  function Hg(_, e) {
    _.offset = e;
  }
  function jg(_, e) {
    _.operation = i2[e];
  }
  function Ng(_, e) {
    _.origin = e;
  }
  function Jg(_, e) {
    _.passOp = j_[e];
  }
  function Qg(_, e) {
    _.powerPreference = p2[e];
  }
  function Xg(_, e) {
    _.primitive = e;
  }
  function Yg(_, e) {
    _.querySet = e;
  }
  function Kg(_, e) {
    _.r = e;
  }
  function Zg(_, e) {
    _.requiredFeatures = e;
  }
  function ew(_, e) {
    _.requiredLimits = e;
  }
  function _w(_, e) {
    _.resolveTarget = e;
  }
  function tw(_, e) {
    _.resource = e;
  }
  function nw(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function rw(_, e) {
    _.sampleCount = e >>> 0;
  }
  function aw(_, e) {
    _.sampleType = y2[e];
  }
  function bw(_, e) {
    _.sampler = e;
  }
  function cw(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function ow(_, e) {
    _.size = e;
  }
  function sw(_, e) {
    _.size = e;
  }
  function iw(_, e) {
    _.size = e;
  }
  function fw(_, e) {
    _.srcFactor = Ot[e];
  }
  function uw(_, e) {
    _.stencilBack = e;
  }
  function dw(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function gw(_, e) {
    _.stencilFront = e;
  }
  function ww(_, e) {
    _.stencilLoadOp = H_[e];
  }
  function pw(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function lw(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function mw(_, e) {
    _.stencilStoreOp = N_[e];
  }
  function hw(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function xw(_, e) {
    _.stepMode = S2[e];
  }
  function yw(_, e) {
    _.storageTexture = e;
  }
  function $w(_, e) {
    _.storeOp = N_[e];
  }
  function Sw(_, e) {
    _.stripIndexFormat = q_[e];
  }
  function vw(_, e) {
    _.targets = e;
  }
  function Aw(_, e) {
    _.texture = e;
  }
  function Iw(_, e) {
    _.texture = e;
  }
  function Tw(_, e) {
    _.timestampWrites = e;
  }
  function Dw(_, e) {
    _.topology = l2[e];
  }
  function Bw(_, e) {
    _.type = f2[e];
  }
  function Fw(_, e) {
    _.type = m2[e];
  }
  function Pw(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function kw(_, e) {
    _.usage = e >>> 0;
  }
  function Mw(_, e) {
    _.usage = e >>> 0;
  }
  function Cw(_, e) {
    _.usage = e >>> 0;
  }
  function Vw(_, e) {
    _.usage = e >>> 0;
  }
  function Rw(_, e) {
    _.vertex = e;
  }
  function Ew(_, e) {
    _.view = e;
  }
  function Lw(_, e) {
    _.view = e;
  }
  function Ow(_, e) {
    _.viewDimension = J_[e];
  }
  function Ww(_, e) {
    _.viewDimension = J_[e];
  }
  function Gw(_, e) {
    _.viewFormats = e;
  }
  function zw(_, e) {
    _.viewFormats = e;
  }
  function Uw(_, e) {
    _.visibility = e >>> 0;
  }
  function qw(_, e) {
    _.width = e >>> 0;
  }
  function Hw(_, e) {
    _.width = e >>> 0;
  }
  function jw(_, e) {
    _.width = e >>> 0;
  }
  function Nw(_, e) {
    _.writeMask = e >>> 0;
  }
  function Jw(_, e) {
    _.x = e >>> 0;
  }
  function Qw(_, e) {
    _.y = e >>> 0;
  }
  function Xw(_, e) {
    _.z = e >>> 0;
  }
  function Yw(_, e, t, n) {
    _.shaderSource(e, I(t, n));
  }
  function Kw(_, e, t, n) {
    _.shaderSource(e, I(t, n));
  }
  function Zw(_, e) {
    const t = e.stack, n = H(t, f.__wbindgen_malloc, f.__wbindgen_realloc), r = R;
    C().setInt32(_ + 4, r, true), C().setInt32(_ + 0, n, true);
  }
  function e1() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return x(_) ? 0 : T(_);
  }
  function _1() {
    const _ = typeof global > "u" ? null : global;
    return x(_) ? 0 : T(_);
  }
  function t1() {
    const _ = typeof self > "u" ? null : self;
    return x(_) ? 0 : T(_);
  }
  function n1() {
    const _ = typeof window > "u" ? null : window;
    return x(_) ? 0 : T(_);
  }
  function r1(_, e, t, n, r) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, n, r >>> 0);
  }
  function a1(_, e, t, n, r) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, n, r >>> 0);
  }
  function b1(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function c1(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function o1(_, e) {
    _.stencilMask(e >>> 0);
  }
  function s1(_, e) {
    _.stencilMask(e >>> 0);
  }
  function i1(_, e, t, n, r) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, n >>> 0, r >>> 0);
  }
  function f1(_, e, t, n, r) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, n >>> 0, r >>> 0);
  }
  function u1(_, e) {
    _.submit(e);
  }
  function d1() {
    return w(function(_, e, t, n, r, a, b, c, o, s) {
      _.texImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function g1() {
    return w(function(_, e, t, n, r, a, b, c, o, s) {
      _.texImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function w1() {
    return w(function(_, e, t, n, r, a, b, c, o, s) {
      _.texImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function p1() {
    return w(function(_, e, t, n, r, a, b, c, o, s, d) {
      _.texImage3D(e >>> 0, t, n, r, a, b, c, o >>> 0, s >>> 0, d);
    }, arguments);
  }
  function l1() {
    return w(function(_, e, t, n, r, a, b, c, o, s, d) {
      _.texImage3D(e >>> 0, t, n, r, a, b, c, o >>> 0, s >>> 0, d);
    }, arguments);
  }
  function m1(_, e, t, n) {
    _.texParameteri(e >>> 0, t >>> 0, n);
  }
  function h1(_, e, t, n) {
    _.texParameteri(e >>> 0, t >>> 0, n);
  }
  function x1(_, e, t, n, r, a) {
    _.texStorage2D(e >>> 0, t, n >>> 0, r, a);
  }
  function y1(_, e, t, n, r, a, b) {
    _.texStorage3D(e >>> 0, t, n >>> 0, r, a, b);
  }
  function $1() {
    return w(function(_, e, t, n, r, a, b, c, o, s) {
      _.texSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function S1() {
    return w(function(_, e, t, n, r, a, b, c, o, s) {
      _.texSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function v1() {
    return w(function(_, e, t, n, r, a, b, c, o, s) {
      _.texSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function A1() {
    return w(function(_, e, t, n, r, a, b, c, o, s) {
      _.texSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function I1() {
    return w(function(_, e, t, n, r, a, b, c, o, s) {
      _.texSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function T1() {
    return w(function(_, e, t, n, r, a, b, c, o, s) {
      _.texSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function D1() {
    return w(function(_, e, t, n, r, a, b, c, o, s) {
      _.texSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function B1() {
    return w(function(_, e, t, n, r, a, b, c, o, s) {
      _.texSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function F1() {
    return w(function(_, e, t, n, r, a, b, c, o, s, d, v) {
      _.texSubImage3D(e >>> 0, t, n, r, a, b, c, o, s >>> 0, d >>> 0, v);
    }, arguments);
  }
  function P1() {
    return w(function(_, e, t, n, r, a, b, c, o, s, d, v) {
      _.texSubImage3D(e >>> 0, t, n, r, a, b, c, o, s >>> 0, d >>> 0, v);
    }, arguments);
  }
  function k1() {
    return w(function(_, e, t, n, r, a, b, c, o, s, d, v) {
      _.texSubImage3D(e >>> 0, t, n, r, a, b, c, o, s >>> 0, d >>> 0, v);
    }, arguments);
  }
  function M1() {
    return w(function(_, e, t, n, r, a, b, c, o, s, d, v) {
      _.texSubImage3D(e >>> 0, t, n, r, a, b, c, o, s >>> 0, d >>> 0, v);
    }, arguments);
  }
  function C1() {
    return w(function(_, e, t, n, r, a, b, c, o, s, d, v) {
      _.texSubImage3D(e >>> 0, t, n, r, a, b, c, o, s >>> 0, d >>> 0, v);
    }, arguments);
  }
  function V1() {
    return w(function(_, e, t, n, r, a, b, c, o, s, d, v) {
      _.texSubImage3D(e >>> 0, t, n, r, a, b, c, o, s >>> 0, d >>> 0, v);
    }, arguments);
  }
  function R1() {
    return w(function(_, e, t, n, r, a, b, c, o, s, d, v) {
      _.texSubImage3D(e >>> 0, t, n, r, a, b, c, o, s >>> 0, d >>> 0, v);
    }, arguments);
  }
  function E1(_, e, t) {
    return _.then(e, t);
  }
  function L1(_, e, t) {
    return _.then(e, t);
  }
  function O1(_, e) {
    return _.then(e);
  }
  function W1(_, e, t) {
    _.uniform1f(e, t);
  }
  function G1(_, e, t) {
    _.uniform1f(e, t);
  }
  function z1(_, e, t) {
    _.uniform1i(e, t);
  }
  function U1(_, e, t) {
    _.uniform1i(e, t);
  }
  function q1(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function H1(_, e, t, n) {
    _.uniform2fv(e, E(t, n));
  }
  function j1(_, e, t, n) {
    _.uniform2fv(e, E(t, n));
  }
  function N1(_, e, t, n) {
    _.uniform2iv(e, K(t, n));
  }
  function J1(_, e, t, n) {
    _.uniform2iv(e, K(t, n));
  }
  function Q1(_, e, t, n) {
    _.uniform2uiv(e, ye(t, n));
  }
  function X1(_, e, t, n) {
    _.uniform3fv(e, E(t, n));
  }
  function Y1(_, e, t, n) {
    _.uniform3fv(e, E(t, n));
  }
  function K1(_, e, t, n) {
    _.uniform3iv(e, K(t, n));
  }
  function Z1(_, e, t, n) {
    _.uniform3iv(e, K(t, n));
  }
  function ep(_, e, t, n) {
    _.uniform3uiv(e, ye(t, n));
  }
  function _p(_, e, t, n, r, a) {
    _.uniform4f(e, t, n, r, a);
  }
  function tp(_, e, t, n, r, a) {
    _.uniform4f(e, t, n, r, a);
  }
  function np(_, e, t, n) {
    _.uniform4fv(e, E(t, n));
  }
  function rp(_, e, t, n) {
    _.uniform4fv(e, E(t, n));
  }
  function ap(_, e, t, n) {
    _.uniform4iv(e, K(t, n));
  }
  function bp(_, e, t, n) {
    _.uniform4iv(e, K(t, n));
  }
  function cp(_, e, t, n) {
    _.uniform4uiv(e, ye(t, n));
  }
  function op(_, e, t, n) {
    _.uniformBlockBinding(e, t >>> 0, n >>> 0);
  }
  function sp(_, e, t, n, r) {
    _.uniformMatrix2fv(e, t !== 0, E(n, r));
  }
  function ip(_, e, t, n, r) {
    _.uniformMatrix2fv(e, t !== 0, E(n, r));
  }
  function fp(_, e, t, n, r) {
    _.uniformMatrix2x3fv(e, t !== 0, E(n, r));
  }
  function up(_, e, t, n, r) {
    _.uniformMatrix2x4fv(e, t !== 0, E(n, r));
  }
  function dp(_, e, t, n, r) {
    _.uniformMatrix3fv(e, t !== 0, E(n, r));
  }
  function gp(_, e, t, n, r) {
    _.uniformMatrix3fv(e, t !== 0, E(n, r));
  }
  function wp(_, e, t, n, r) {
    _.uniformMatrix3x2fv(e, t !== 0, E(n, r));
  }
  function pp(_, e, t, n, r) {
    _.uniformMatrix3x4fv(e, t !== 0, E(n, r));
  }
  function lp(_, e, t, n, r) {
    _.uniformMatrix4fv(e, t !== 0, E(n, r));
  }
  function mp(_, e, t, n, r) {
    _.uniformMatrix4fv(e, t !== 0, E(n, r));
  }
  function hp(_, e, t, n, r) {
    _.uniformMatrix4x2fv(e, t !== 0, E(n, r));
  }
  function xp(_, e, t, n, r) {
    _.uniformMatrix4x3fv(e, t !== 0, E(n, r));
  }
  function yp(_) {
    _.unmap();
  }
  function $p(_, e) {
    _.useProgram(e);
  }
  function Sp(_, e) {
    _.useProgram(e);
  }
  function vp(_) {
    return _.value;
  }
  function Ap(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function Ip(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function Tp(_, e, t, n, r, a) {
    _.vertexAttribIPointer(e >>> 0, t, n >>> 0, r, a);
  }
  function Dp(_, e, t, n, r, a, b) {
    _.vertexAttribPointer(e >>> 0, t, n >>> 0, r !== 0, a, b);
  }
  function Bp(_, e, t, n, r, a, b) {
    _.vertexAttribPointer(e >>> 0, t, n >>> 0, r !== 0, a, b);
  }
  function Fp(_, e, t, n, r) {
    _.viewport(e, t, n, r);
  }
  function Pp(_, e, t, n, r) {
    _.viewport(e, t, n, r);
  }
  function kp(_, e, t, n) {
    console.warn(_, e, t, n);
  }
  function Mp(_) {
    return _.width;
  }
  function Cp(_) {
    return _.width;
  }
  function Vp() {
    return w(function(_, e, t, n, r, a, b) {
      _.writeBuffer(e, t, s_(n, r), a, b);
    }, arguments);
  }
  function Rp() {
    return w(function(_, e, t, n, r, a) {
      _.writeTexture(e, s_(t, n), r, a);
    }, arguments);
  }
  function Ep(_, e) {
    return ae(_, e, n2);
  }
  function Lp(_, e) {
    return ae(_, e, c2);
  }
  function Op(_, e) {
    return ae(_, e, s2);
  }
  function Wp(_, e) {
    return ae(_, e, r2);
  }
  function Gp(_, e) {
    return ae(_, e, a2);
  }
  function zp(_, e) {
    return ae(_, e, b2);
  }
  function Up(_, e) {
    return ae(_, e, t2);
  }
  function qp(_) {
    return _;
  }
  function Hp(_) {
    return _;
  }
  function jp(_, e) {
    return E(_, e);
  }
  function Np(_, e) {
    return v2(_, e);
  }
  function Jp(_, e) {
    return K(_, e);
  }
  function Qp(_, e) {
    return A2(_, e);
  }
  function Xp(_, e) {
    return I2(_, e);
  }
  function Yp(_, e) {
    return ye(_, e);
  }
  function Kp(_, e) {
    return s_(_, e);
  }
  function Zp(_, e) {
    return I(_, e);
  }
  function e2(_) {
    return BigInt.asUintN(64, _);
  }
  function _2() {
    const _ = f.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function t2(_, e) {
    f.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function n2(_, e, t) {
    f.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function r2(_, e, t) {
    f.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function a2(_, e, t) {
    f.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function b2(_, e, t) {
    f.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function c2(_, e, t) {
    const n = f.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (n[1]) throw F(n[0]);
  }
  function o2(_, e, t, n) {
    f.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, n);
  }
  function s2(_, e, t) {
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
  ], i2 = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], f2 = [
    "uniform",
    "storage",
    "read-only-storage"
  ], u2 = [
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
  ], d2 = [
    "none",
    "front",
    "back"
  ], Wt = [
    "nearest",
    "linear"
  ], g2 = [
    "ccw",
    "cw"
  ], q_ = [
    "uint16",
    "uint32"
  ], H_ = [
    "load",
    "clear"
  ], w2 = [
    "nearest",
    "linear"
  ], p2 = [
    "low-power",
    "high-performance"
  ], l2 = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], m2 = [
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
  ], h2 = [
    "write-only",
    "read-only",
    "read-write"
  ], N_ = [
    "store",
    "discard"
  ], Gt = [
    "all",
    "stencil-only",
    "depth-only"
  ], x2 = [
    "1d",
    "2d",
    "3d"
  ], re = [
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
  ], y2 = [
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
  ], $2 = [
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
  ], S2 = [
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
      const r = _.description;
      return r == null ? "Symbol" : `Symbol(${r})`;
    }
    if (e == "function") {
      const r = _.name;
      return typeof r == "string" && r.length > 0 ? `Function(${r})` : "Function";
    }
    if (Array.isArray(_)) {
      const r = _.length;
      let a = "[";
      r > 0 && (a += k_(_[0]));
      for (let b = 1; b < r; b++) a += ", " + k_(_[b]);
      return a += "]", a;
    }
    const t = /\[object ([^\]]+)\]/.exec(toString.call(_));
    let n;
    if (t && t.length > 1) n = t[1];
    else return toString.call(_);
    if (n == "Object") try {
      return "Object(" + JSON.stringify(_) + ")";
    } catch {
      return "Object";
    }
    return _ instanceof Error ? `${_.name}: ${_.message}
${_.stack}` : n;
  }
  function E(_, e) {
    return _ = _ >>> 0, T2().subarray(_ / 4, _ / 4 + e);
  }
  function v2(_, e) {
    return _ = _ >>> 0, B2().subarray(_ / 2, _ / 2 + e);
  }
  function K(_, e) {
    return _ = _ >>> 0, F2().subarray(_ / 4, _ / 4 + e);
  }
  function A2(_, e) {
    return _ = _ >>> 0, P2().subarray(_ / 1, _ / 1 + e);
  }
  function I2(_, e) {
    return _ = _ >>> 0, k2().subarray(_ / 2, _ / 2 + e);
  }
  function ye(_, e) {
    return _ = _ >>> 0, M2().subarray(_ / 4, _ / 4 + e);
  }
  function s_(_, e) {
    return _ = _ >>> 0, le().subarray(_ / 1, _ / 1 + e);
  }
  let se = null;
  function C() {
    return (se === null || se.buffer.detached === true || se.buffer.detached === void 0 && se.buffer !== f.memory.buffer) && (se = new DataView(f.memory.buffer)), se;
  }
  let Ee = null;
  function T2() {
    return (Ee === null || Ee.byteLength === 0) && (Ee = new Float32Array(f.memory.buffer)), Ee;
  }
  let Le = null;
  function D2() {
    return (Le === null || Le.byteLength === 0) && (Le = new Float64Array(f.memory.buffer)), Le;
  }
  let Oe = null;
  function B2() {
    return (Oe === null || Oe.byteLength === 0) && (Oe = new Int16Array(f.memory.buffer)), Oe;
  }
  let We = null;
  function F2() {
    return (We === null || We.byteLength === 0) && (We = new Int32Array(f.memory.buffer)), We;
  }
  let Ge = null;
  function P2() {
    return (Ge === null || Ge.byteLength === 0) && (Ge = new Int8Array(f.memory.buffer)), Ge;
  }
  function I(_, e) {
    return V2(_ >>> 0, e);
  }
  let ze = null;
  function k2() {
    return (ze === null || ze.byteLength === 0) && (ze = new Uint16Array(f.memory.buffer)), ze;
  }
  let Ue = null;
  function M2() {
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
      const n = T(t);
      f.__wbindgen_exn_store(n);
    }
  }
  function x(_) {
    return _ == null;
  }
  function ae(_, e, t) {
    const n = {
      a: _,
      b: e,
      cnt: 1
    }, r = (...a) => {
      n.cnt++;
      const b = n.a;
      n.a = 0;
      try {
        return t(b, n.b, ...a);
      } finally {
        n.a = b, r._wbg_cb_unref();
      }
    };
    return r._wbg_cb_unref = () => {
      --n.cnt === 0 && (f.__wbindgen_destroy_closure(n.a, n.b), n.a = 0, ht.unregister(n));
    }, ht.register(r, n, n), r;
  }
  function w_(_, e) {
    const t = e(_.length * 1, 1) >>> 0;
    return le().set(_, t / 1), R = _.length, t;
  }
  function He(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return D2().set(_, t / 8), R = _.length, t;
  }
  function H(_, e, t) {
    if (t === void 0) {
      const c = ve.encode(_), o = e(c.length, 1) >>> 0;
      return le().subarray(o, o + c.length).set(c), R = c.length, o;
    }
    let n = _.length, r = e(n, 1) >>> 0;
    const a = le();
    let b = 0;
    for (; b < n; b++) {
      const c = _.charCodeAt(b);
      if (c > 127) break;
      a[r + b] = c;
    }
    if (b !== n) {
      b !== 0 && (_ = _.slice(b)), r = t(r, n, n = b + _.length * 3, 1) >>> 0;
      const c = le().subarray(r + b, r + n), o = ve.encodeInto(_, c);
      b += o.written, r = t(r, n, b, 1) >>> 0;
    }
    return R = b, r;
  }
  function F(_) {
    const e = f.__wbindgen_externrefs.get(_);
    return f.__externref_table_dealloc(_), e;
  }
  let n_ = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  n_.decode();
  const C2 = 2146435072;
  let p_ = 0;
  function V2(_, e) {
    return p_ += e, p_ >= C2 && (n_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), n_.decode(), p_ = e), n_.decode(le().subarray(_, _ + e));
  }
  const ve = new TextEncoder();
  "encodeInto" in ve || (ve.encodeInto = function(_, e) {
    const t = ve.encode(_);
    return e.set(t), {
      read: _.length,
      written: t.length
    };
  });
  let R = 0, f;
  function R2(_) {
    f = _;
  }
  URL = globalThis.URL;
  const E2 = await L_({
    "./proteus_host_web_bg.js": {
      __wbg_call_5575218572ead796: Uo,
      __wbg_get_197a3fe98f169e38: kf,
      __wbg_next_0c4066e251d2eff9: Zu,
      __wbg_done_b62d4a7d2286852a: Si,
      __wbg_value_49f783bb59765962: vp,
      __wbg_new_typed_00a409eb4ec4f2d9: Yu,
      __wbg_then_05edfc8a4fea5106: E1,
      __wbg_get_unchecked_54a4374c38e08460: Vf,
      __wbg_length_c6054974c0a6cdb9: bu,
      __wbg_new_227d7c05414eb861: ju,
      __wbg_stack_3b0d974bbf31e44f: Zw,
      __wbg_error_a6fa202b58aa1cd3: zi,
      __wbg_proteusapp_new: fd,
      __wbg_instanceof_Map_afa18d5840c04c15: Jf,
      __wbg_set_dc601f4a69da0bc2: I0,
      __wbg_call_8e98ed2f3c86c4b5: qo,
      __wbg_call_0e855b388e315e17: zo,
      __wbg_get_with_ref_key_6412cf3094599694: Rf,
      __wbg_set_6be42768c690e380: jd,
      __wbg_String_8564e559799eccda: Lc,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: jf,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: Mu,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: Cu,
      __wbg_maxTextureDimension3D_06ee54121b37d431: Vu,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: ku,
      __wbg_maxBindGroups_14611ac9ed1c6b56: du,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: gu,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: Au,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: vu,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: Tu,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: Du,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: Fu,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: Pu,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: Eu,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: Ru,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: Bu,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: Wu,
      __wbg_maxBufferSize_f7ce3e1856349d2f: wu,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: Lu,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: Ou,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: Iu,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: zu,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: Gu,
      __wbg_maxColorAttachments_fd9187f9f786da18: lu,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: pu,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: $u,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: mu,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: hu,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: xu,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: yu,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: Su,
      __wbg_description_18d0a6d4077fec8e: wi,
      __wbg_set_dst_factor_1ed75271a89a711e: U0,
      __wbg_set_operation_b5862f5a1a143b30: jg,
      __wbg_set_src_factor_1c4f755f8676df1b: fw,
      __wbg_set_texture_16d2be474ce6ad0c: Aw,
      __wbg_set_mip_level_246db61be15bdd69: Vg,
      __wbg_set_x_56f0c2c08a62725c: Jw,
      __wbg_set_y_04fb8ce84735b4e1: Qw,
      __wbg_set_z_a51316db27a4941e: Xw,
      __wbg_set_origin_9b3b0fbe0a5dc469: Ng,
      __wbg_set_aspect_77332ac136ee94eb: n0,
      __wbg_Window_a07901001eb4269f: Oc,
      __wbg_gpu_a7c12045c25d009a: Ef,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: Wc,
      __wbg_set_a_5f6e488475272136: Nd,
      __wbg_set_b_688365d692bba214: b0,
      __wbg_set_g_d4d1d77cf8fdd362: bg,
      __wbg_set_r_527e5a41c4b1a846: Kg,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: Hf,
      __wbg_queue_65d985f3e6d786a6: hd,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: Qg,
      __wbg_requestAdapter_9ff5c9d1ff271165: Td,
      __wbg_set_required_limits_3b031f66f838f4e3: ew,
      __wbg_set_required_features_54918de8185c5fab: Zg,
      __wbg_set_label_bae57fb9f24fde5c: lg,
      __wbg_requestDevice_c1c34f88a477e509: Fd,
      __wbg_limits_50a8c5e629dbfe40: ou,
      __wbg_info_22dcf1fd1b12bc7d: zf,
      __wbg_set_size_41cd9255ca1e4242: sw,
      __wbg_set_usage_908213a4d4bb8bde: Cw,
      __wbg_set_mapped_at_creation_48de4735fab51e78: Fg,
      __wbg_set_label_cd567b7b35838e4c: xg,
      __wbg_createBuffer_2f08c0205e04efca: xs,
      __wbg_set_address_mode_u_a37cf1035585c638: Qd,
      __wbg_set_address_mode_v_8ac049e029caef76: Xd,
      __wbg_set_address_mode_w_eb9260ee11729e92: Yd,
      __wbg_set_compare_42211fbf15e3b850: S0,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: Tg,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: Dg,
      __wbg_set_mag_filter_69d846b974d4bcc0: Bg,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: Cg,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: Lg,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: kg,
      __wbg_set_label_dcd98efbb9370da8: $g,
      __wbg_createSampler_248bd67c920af37d: ks,
      __wbg_set_width_1a5e2e86fa5bdcd8: Hw,
      __wbg_set_height_e8b5483b8c117d5e: sg,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: C0,
      __wbg_set_format_e9d4b1475bb3bd3b: tg,
      __wbg_set_size_a61ff22205255d61: iw,
      __wbg_set_usage_7fa9cd18d1104aca: Mw,
      __wbg_set_label_0c1bd0e976cf0a9a: ug,
      __wbg_set_dimension_36e13ccecae5af4b: z0,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: Eg,
      __wbg_set_sample_count_865e1d19b84e27e6: rw,
      __wbg_push_f724b5db8acf89d2: dd,
      __wbg_set_view_formats_bab284fc81b40e70: Gw,
      __wbg_createTexture_9e76b80a2dc0d12e: Os,
      __wbg_set_entries_fc76ca4d7da6a709: j0,
      __wbg_set_layout_eeef59714f5bf48b: Ag,
      __wbg_set_label_f92ae11c77d74198: Sg,
      __wbg_createBindGroup_2320df4db188406c: ms,
      __wbg_set_code_56e2d45ec1ff6c2d: h0,
      __wbg_set_label_be45aed56e4b9fee: mg,
      __wbg_createShaderModule_53701de4fb271c90: Cs,
      __wbg_set_label_d1c24b5a7a3ac31d: yg,
      __wbg_createCommandEncoder_cd88faca35d9ed68: $s,
      __wbg_set_bind_group_layouts_5325d038771af328: i0,
      __wbg_set_label_2f592bd1be3db6b3: wg,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: As,
      __wbg_set_module_14e471fdd94c582d: Wg,
      __wbg_set_entry_point_8db3b6d103e3b865: J0,
      __wbg_set_buffers_85a7238f4ef28ab4: p0,
      __wbg_set_layout_7c5ba5bdcde8a0f0: vg,
      __wbg_set_vertex_a4951dd9a7a4ed54: Rw,
      __wbg_set_label_c47c451211e2f6d2: hg,
      __wbg_set_format_f9341112e43ea182: ng,
      __wbg_set_depth_compare_30e9ea552da12fe2: P0,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: O0,
      __wbg_set_depth_bias_428c9340b0fd937b: T0,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: D0,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: B0,
      __wbg_set_compare_1509dc1a5420943f: $0,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: k0,
      __wbg_set_fail_op_77ab26c98f847b65: X0,
      __wbg_set_pass_op_e9470d1262fb8a8b: Jg,
      __wbg_set_stencil_back_6ef4683123b19b25: uw,
      __wbg_set_stencil_front_aeb8580a97e5424b: gw,
      __wbg_set_stencil_read_mask_2954f260d47349ea: pw,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: hw,
      __wbg_set_depth_stencil_1bd50dbc450c8650: R0,
      __wbg_set_module_08ad08e736d8edbf: Og,
      __wbg_set_targets_6b0b3bdd87f35668: vw,
      __wbg_set_entry_point_6fec5723cc790927: N0,
      __wbg_set_fragment_1a595620425637e1: rg,
      __wbg_set_count_26a934d1cd07d080: v0,
      __wbg_set_mask_0c49a66362fc0079: Pg,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: e0,
      __wbg_set_multisample_85f073947b782d07: Gg,
      __wbg_set_cull_mode_9d466c1ab414cac8: A0,
      __wbg_set_front_face_50cdf4eb61504a46: ag,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: Sw,
      __wbg_set_topology_beefb3aca0612b00: Dw,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: Pw,
      __wbg_set_primitive_369241acd17871f1: Xg,
      __wbg_createRenderPipeline_f48187ba9f7701e8: Bs,
      __wbg_set_entries_3017e6132f938c6e: H0,
      __wbg_set_label_1175a3329a06e52b: dg,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: ls,
      __wbg_limits_1c25cb4f379a4418: cu,
      __wbg_set_color_attachments_abe67f6631926e28: x0,
      __wbg_set_label_8fd860a36d2c7b74: pg,
      __wbg_set_view_dbd0294573f64d05: Lw,
      __wbg_set_depth_clear_value_442bf492734f63b6: F0,
      __wbg_set_depth_load_op_34d430b74bb36d91: M0,
      __wbg_set_depth_store_op_0ea0a215313dbda7: L0,
      __wbg_set_depth_read_only_138a11b10c731094: V0,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: dw,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: ww,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: mw,
      __wbg_set_stencil_read_only_fb489d191b6d969b: lw,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: E0,
      __wbg_set_query_set_18679a8580267d5a: Yg,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: s0,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: q0,
      __wbg_set_timestamp_writes_c552d52fbb417005: Tw,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: oo,
      __wbg_copyTextureToTexture_1be188df1e535c0a: ps,
      __wbg_label_47480289cc2bce71: ru,
      __wbg_set_label_2d2227f4d5991e50: gg,
      __wbg_finish_cfaeede3baf55be1: Hi,
      __wbg_finish_087cb89c65c06eb1: qi,
      __wbg_drawIndexed_68637ebab6dd8d6e: ki,
      __wbg_setPipeline_bab24dbce96903b9: Wd,
      __wbg_setViewport_f9d423db4f4b4b58: Ud,
      __wbg_setBindGroup_4ba56e1e0d26f244: Rd,
      __wbg_setBindGroup_6124849cc8547086: Ed,
      __wbg_setIndexBuffer_17431786d06c1b7c: Ld,
      __wbg_setIndexBuffer_a16ed5b869c87507: Od,
      __wbg_setVertexBuffer_b508baf8d0ffe331: zd,
      __wbg_setVertexBuffer_91c4b602d0289943: Gd,
      __wbg_end_414453a89205612c: Li,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: pf,
      __wbg_getCurrentTexture_51975ae7185fd15f: of,
      __wbg_set_device_0d774b66e7288f72: W0,
      __wbg_set_format_d347899cd860709c: _g,
      __wbg_set_usage_ae014e77ff77ce06: Vw,
      __wbg_set_alpha_mode_92402195b3ae1ee7: Zd,
      __wbg_set_view_formats_fe531a043efb71fa: zw,
      __wbg_configure_3d64c677c7d68a15: is,
      __wbg_writeBuffer_b4bdd36178348ca5: Vp,
      __wbg_set_bytes_per_row_91681ca78d744888: l0,
      __wbg_set_rows_per_image_d198b7e73a38978b: nw,
      __wbg_set_offset_a097a8050a3a9a33: Hg,
      __wbg_writeTexture_b45b69132e46a227: Rp,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: ad,
      __wbg_submit_1290d44bb76ecef4: u1,
      __wbg_getMappedRange_5ed22727c9679168: df,
      __wbg_unmap_8f06698a75b8331a: yp,
      __wbg_destroy_b5b39f25f0799295: pi,
      __wbg_mapAsync_bb0029907dd91181: uu,
      __wbg_set_dimension_174ad7e2fb67fb4e: G0,
      __wbg_set_format_90860b0321868db4: Z0,
      __wbg_set_aspect_a823a14d00d42d37: r0,
      __wbg_set_base_array_layer_cc6c68d233489c4b: c0,
      __wbg_set_array_layer_count_daec613068108a9d: _0,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: o0,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: Rg,
      __wbg_set_label_03d2396d4655a3e1: fg,
      __wbg_set_usage_7f0dda8309469b1c: kw,
      __wbg_createView_cc96b5bdd3d5bf5e: zs,
      __wbg_set_min_binding_size_689661b9ed25e083: Mg,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: cg,
      __wbg_set_type_38961e08504ca674: Bw,
      __wbg_requestAdapter_c46930b8bc33722d: Dd,
      __wbg_set_alpha_aa2e606e9e647b21: Kd,
      __wbg_set_color_bc393d7efc3c8594: y0,
      __wbg_set_visibility_1bca121a89accba5: Uw,
      __wbg_set_storage_texture_ab9eed9786337ef0: yw,
      __wbg_set_external_texture_825fe2bc7a0c0603: Q0,
      __wbg_set_binding_b6b0fe5c281b8c69: f0,
      __wbg_set_buffer_e89095a9f0cafad3: w0,
      __wbg_set_sampler_8c5d7fb1b02058c6: bw,
      __wbg_set_texture_e25a73da75cf5808: Iw,
      __wbg_set_view_dimension_263387976511ebc9: Ow,
      __wbg_set_format_1786adb7bc74c7c9: Y0,
      __wbg_set_access_091f317905cd76a5: Jd,
      __wbg_set_format_abf7a1bc5425c56a: eg,
      __wbg_set_blend_8d6e9c08b5702a09: d0,
      __wbg_set_write_mask_144b25e2bd909124: Nw,
      __wbg_set_load_op_56844f51434037bf: Ig,
      __wbg_set_store_op_caeede4654b3d847: $w,
      __wbg_set_view_bdeab150b5f0768c: Ew,
      __wbg_set_clear_value_642701f928a5ccb3: m0,
      __wbg_set_resolve_target_fe76b3f99cf72078: _w,
      __wbg_set_buffer_55f096330c8912b4: g0,
      __wbg_set_offset_73156b0e0b41d79a: Ug,
      __wbg_set_size_1e6281b07cd39177: ow,
      __wbg_set_binding_f3c188a8cd21455b: u0,
      __wbg_set_resource_fe385d2e3dadaf63: tw,
      __wbg_set_format_6606f5c1fba6f459: K0,
      __wbg_set_offset_8d9d9afffa18b591: qg,
      __wbg_set_shader_location_0ff30a733291a396: cw,
      __wbg_set_array_stride_c2c009eabc18b5f6: t0,
      __wbg_set_attributes_05f9117fd32ca606: a0,
      __wbg_set_step_mode_a35aef328761c452: xw,
      __wbg_set_type_c1eebc19f8a6aeb9: Fw,
      __wbg_set_multisampled_40505c1381e1c32c: zg,
      __wbg_set_sample_type_7088b1efddce6a69: aw,
      __wbg_set_view_dimension_3ed01b237e85826f: Ww,
      __wbg_includes_83dff8d05da243c5: Gf,
      __wbg_clearBufferuiv_1d2d93401c0904a3: No,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: bs,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: os,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: ss,
      __wbg_copyBufferSubData_a944f33b601b822d: us,
      __wbg_clientWaitSync_7580165bd2eff461: es,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: cs,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: ws,
      __wbg_createQuery_f013132b870a71ef: Ds,
      __wbg_createSampler_9fe50152a2524319: Ms,
      __wbg_createVertexArray_8685feb21901c932: Gs,
      __wbg_deleteQuery_ef51ea0a52420103: Ks,
      __wbg_deleteSampler_5c045e0cc55813d4: _i,
      __wbg_getIndexedParameter_2b18df6fca85f751: uf,
      __wbg_getQueryParameter_0599e85ddb81220b: yf,
      __wbg_getSyncParameter_9a2bda340ebe166f: Df,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: Bf,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: Zf,
      __wbg_deleteSync_37ca83c429c43d8a: ri,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: oi,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: Ai,
      __wbg_drawBuffers_558d96e52e754731: Bi,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: Pi,
      __wbg_endQuery_161170c5280a8293: Ei,
      __wbg_fenceSync_56efc7cc79111e54: Ui,
      __wbg_framebufferTextureLayer_2312acdc74f97676: Ki,
      __wbg_getBufferSubData_92680d3a2f7be029: nf,
      __wbg_readBuffer_361ec5474f3aae49: xd,
      __wbg_readPixels_5840000f3e22f3ce: $d,
      __wbg_readPixels_5bf204799ed2272f: Sd,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: vd,
      __wbg_texImage3D_8647ef58aef5b912: l1,
      __wbg_texStorage2D_ed5df596c5f1e3af: x1,
      __wbg_texStorage3D_160b0197bc190f04: y1,
      __wbg_texSubImage2D_f03448e182b0820d: B1,
      __wbg_texSubImage2D_d14d9c0a1f627c31: D1,
      __wbg_texSubImage2D_89866a04ecd0a76b: A1,
      __wbg_texSubImage2D_5c630043f1c56716: v1,
      __wbg_samplerParameterf_3157ba41c0f4d97a: kd,
      __wbg_samplerParameteri_f85a29156e790189: Md,
      __wbg_texImage2D_0e0f37b9fb297d01: d1,
      __wbg_texImage2D_0e537dc331652de3: g1,
      __wbg_texImage3D_30dbf7234481b8f5: p1,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: S1,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: I1,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: T1,
      __wbg_texSubImage3D_933e4cd41cc5376d: C1,
      __wbg_texSubImage3D_c3538b28040daac9: R1,
      __wbg_uniform1ui_36c94692177ebf76: q1,
      __wbg_uniform2fv_17592f4dad9798fb: H1,
      __wbg_uniform2iv_d5d29ebbc466977d: J1,
      __wbg_texSubImage3D_0fdbd843482bb916: P1,
      __wbg_texSubImage3D_09a97a968b93253d: F1,
      __wbg_texSubImage3D_355efde0dc047913: k1,
      __wbg_texSubImage3D_bd32c8e29e470904: V1,
      __wbg_texSubImage3D_5a238709d114b609: M1,
      __wbg_uniform2uiv_418ba3bf6a230dd5: Q1,
      __wbg_uniform4fv_9e670a001c77dca0: rp,
      __wbg_uniform4iv_1d57c6b8e5c0e447: ap,
      __wbg_uniform3fv_dbe44b778e6b89e8: Y1,
      __wbg_uniform3iv_d75d3a5f86d54be4: Z1,
      __wbg_uniform3uiv_71c1efc24a662de9: ep,
      __wbg_uniform4uiv_c5d45f5dbdae727a: cp,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: dp,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: wp,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: pp,
      __wbg_uniformBlockBinding_829a71912ad79a04: op,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: sp,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: fp,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: up,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: lp,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: Tp,
      __wbg_activeTexture_525ee3068cb9e8d5: no,
      __wbg_attachShader_3477e67517b09b6b: ao,
      __wbg_bindAttribLocation_79b5d26727094518: so,
      __wbg_bindBuffer_d3111de6861cb875: uo,
      __wbg_bindFramebuffer_63e837a5dc0accfb: po,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: lo,
      __wbg_bindTexture_7ab28ff4ff3dc506: xo,
      __wbg_blendColor_15f26633b646e542: vo,
      __wbg_blendEquation_7dadb4db540a42da: Do,
      __wbg_blendEquationSeparate_8240ddfa32266109: Io,
      __wbg_blendFunc_b15af02643e188f1: Mo,
      __wbg_blendFuncSeparate_456410f9919bed39: Po,
      __wbg_clear_dadcb3e2929388b0: Ko,
      __wbg_clearDepth_05c17028494ee4dd: Jo,
      __wbg_clearStencil_917833d1e2ac56e4: Yo,
      __wbg_colorMask_f111e3e5796458f4: ts,
      __wbg_compileShader_f5625b583b2c9fd6: ns,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: hp,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: xp,
      __wbg_vertexAttribDivisor_f17a8585267be92f: Ip,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: ds,
      __wbg_createBuffer_9f602b2dbcbf409c: ys,
      __wbg_createFramebuffer_4a250944a4542bbc: Ss,
      __wbg_createProgram_4c8164d471c10346: Is,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: Ps,
      __wbg_createShader_9c5cd42709d915ff: Rs,
      __wbg_createTexture_3eed23cb87dd35fc: Es,
      __wbg_cullFace_94f24b4fd5e9038b: qs,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: js,
      __wbg_getExtension_11824edd67a143d8: ff,
      __wbg_getParameter_7f7f23cae98f2c81: gf,
      __wbg_getProgramInfoLog_cd84be80942f345b: mf,
      __wbg_getProgramParameter_039391d5ba319f50: hf,
      __wbg_getShaderInfoLog_495bddda98172699: $f,
      __wbg_getShaderParameter_4eb65cfb174ceb22: vf,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: If,
      __wbg_getUniformLocation_ab63f569a4e41744: Pf,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: Js,
      __wbg_deleteProgram_eff668280dcb01ca: Ys,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: ei,
      __wbg_deleteShader_3339454254c7147c: ti,
      __wbg_deleteTexture_c1c58550dc55af5c: bi,
      __wbg_depthFunc_31b183b5b8ee478e: si,
      __wbg_depthMask_cab7f2ae7f0e559c: ui,
      __wbg_depthRange_797a71ba3b79267a: di,
      __wbg_disable_cb1b3e6c1cee5202: yi,
      __wbg_disableVertexAttribArray_b395358ec5084c39: hi,
      __wbg_drawArrays_42dbb4b0349c8f34: Ti,
      __wbg_enable_d1f42f78be33a553: Ri,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: Mi,
      __wbg_flush_7ae42f071230db6b: ji,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: Qi,
      __wbg_framebufferTexture2D_367ab597a005e8d9: Xi,
      __wbg_frontFace_9bdcf2a758e989e5: ef,
      __wbg_linkProgram_e23a348b0f6e0c4f: iu,
      __wbg_pixelStorei_a78a504be58d1d0a: cd,
      __wbg_polygonOffset_a4f07d97b9b0dced: sd,
      __wbg_renderbufferStorage_3049e13db5c4e60e: Id,
      __wbg_scissor_6c024669fbf4fe72: Cd,
      __wbg_vertexAttribPointer_4e5d289c5d224210: Bp,
      __wbg_viewport_a0ca330f9b85397e: Fp,
      __wbg_shaderSource_66dce75b25a1a407: Kw,
      __wbg_stencilFuncSeparate_ec603976be9569a4: a1,
      __wbg_stencilMask_485dcb5965c79a71: o1,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: c1,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: i1,
      __wbg_texParameteri_c6efffcecb474d2f: m1,
      __wbg_uniform1f_3acd3f3eb50b5e11: W1,
      __wbg_uniform1i_e4f13604354c28ae: U1,
      __wbg_uniform4f_a5008773cfb47d1a: tp,
      __wbg_useProgram_ab2ee2a13a1fd909: Sp,
      __wbg_bufferSubData_2270f1b9db71e642: Oo,
      __wbg_clearBufferfv_6b77b9402254a2bf: Ho,
      __wbg_clearBufferiv_0f056544010eef3e: jo,
      __wbg_beginQuery_dad334d972fed3cc: co,
      __wbg_bindBufferRange_16a9d90becc2a7d7: fo,
      __wbg_bindSampler_3c7002cb6d56ae8f: ho,
      __wbg_bindVertexArray_c391bd47303d75cd: So,
      __wbg_blitFramebuffer_ea96ada8bba07582: Co,
      __wbg_bufferData_64e9905f2b3d3a6f: Eo,
      __wbg_bufferData_99bbbc63f02251c4: Lo,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: Yf,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: Bd,
      __wbg_navigator_935098efd1dc7fe5: qu,
      __wbg_devicePixelRatio_8e5ca44720abafec: li,
      __wbg_document_2634180a4c694068: $i,
      __wbg_instanceof_Window_0d356b88a2f77c42: Kf,
      __wbg_hidden_cb32701ca3785fea: Wf,
      __wbg_getElementById_c7aba6b93b34bf01: sf,
      __wbg_querySelector_1f3658f4b48e268b: pd,
      __wbg_querySelectorAll_ffda3c891a9eb29a: wd,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: tf,
      __wbg_uniform2iv_c5e863975dd780d8: N1,
      __wbg_uniform3fv_7723e142be50856f: X1,
      __wbg_uniform3iv_bea3976522e15d48: K1,
      __wbg_uniform4fv_85ad5d23234895d2: np,
      __wbg_clear_ff8cfdf420f7dde6: Zo,
      __wbg_clearDepth_ac6b54f112feeaf7: Qo,
      __wbg_clearStencil_56d6a6308294a749: Xo,
      __wbg_colorMask_b0ab9d429a1efa0a: _s,
      __wbg_compileShader_fcf3f3d2891f73f9: rs,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: gs,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: hs,
      __wbg_createFramebuffer_ab73f30b5dc97415: vs,
      __wbg_createProgram_f11c63f59f41b82a: Ts,
      __wbg_createRenderbuffer_556000dbb01f5026: Fs,
      __wbg_createShader_27d9388313f3b14e: Vs,
      __wbg_createTexture_8455c703424c567b: Ls,
      __wbg_cullFace_774780fb4177aab8: Us,
      __wbg_deleteBuffer_d758283bea6e0ccf: Ns,
      __wbg_deleteFramebuffer_8953b325144192fe: Qs,
      __wbg_deleteProgram_0135c6926e75af75: Xs,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: Zs,
      __wbg_deleteShader_79dbaaed69b7ca3b: ni,
      __wbg_deleteTexture_3acb672a45f9998a: ai,
      __wbg_depthFunc_eaca1bc79f7bf216: ii,
      __wbg_depthMask_3a9074b08d1f68e5: fi,
      __wbg_depthRange_c24a808b3496e0a9: gi,
      __wbg_uniform4iv_a9aaa92f2f458ec2: bp,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: ip,
      __wbg_uniformMatrix3fv_da8c388748c5739b: gp,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: mp,
      __wbg_activeTexture_1d5359b20df41710: to,
      __wbg_attachShader_683d1070365e7066: bo,
      __wbg_bindAttribLocation_d56d3c40331af7ed: io,
      __wbg_bindBuffer_e95efaf0d4851845: go,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: wo,
      __wbg_bindRenderbuffer_d608b211c51ed147: mo,
      __wbg_bindTexture_ffc56f1e5c5526c6: yo,
      __wbg_blendColor_a0ba1cdcecc3a34c: Ao,
      __wbg_blendEquation_8bfa69f639ae92da: Bo,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: To,
      __wbg_blendFunc_713c504adab14f98: ko,
      __wbg_blendFuncSeparate_3eef699c291dbc87: Fo,
      __wbg_disable_4dca6ee0ccc91e4a: xi,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: mi,
      __wbg_drawArrays_10e1254aa4524ae9: Ii,
      __wbg_enable_c6e523307311617a: Vi,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: Ci,
      __wbg_flush_eb3fb8da2ec00d57: Ni,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: Ji,
      __wbg_linkProgram_6a2eee02a03b9b00: su,
      __wbg_pixelStorei_55ad4c67b699537c: bd,
      __wbg_polygonOffset_06dc6468c12a57e1: od,
      __wbg_renderbufferStorage_2918fb696fd45663: Ad,
      __wbg_scissor_f9696c630e464977: Vd,
      __wbg_shaderSource_628c37a476ae65f9: Yw,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: r1,
      __wbg_stencilMask_f9fe198f7fd6fc9c: s1,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: b1,
      __wbg_stencilOpSeparate_6cf50803475d2640: f1,
      __wbg_texParameteri_fe6210a493d48a16: h1,
      __wbg_framebufferTexture2D_3a558e14f56720d2: Yi,
      __wbg_frontFace_c9bb1fa659ffd276: _f,
      __wbg_getParameter_91a344e1a84a4669: wf,
      __wbg_getProgramInfoLog_35410850de9ccefe: lf,
      __wbg_getProgramParameter_bbc667347ac2e882: xf,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: Sf,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: Af,
      __wbg_getUniformLocation_340155dc706d3fea: Ff,
      __wbg_uniform1f_d34e4b454f7c8e73: G1,
      __wbg_uniform1i_cd9a7f990128ea48: z1,
      __wbg_uniform4f_4410d2faaa7e5dda: _p,
      __wbg_useProgram_0e1cd86765304939: $p,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: Dp,
      __wbg_viewport_b5bd46a0d111c83c: Pp,
      __wbg_texSubImage2D_1b2ff28f994c325e: $1,
      __wbg_uniform2fv_39277cf2d3cb83c7: j1,
      __wbg_bufferData_5df9bdb32e189eee: Ro,
      __wbg_bufferData_26132561617ce8fb: Vo,
      __wbg_bufferSubData_44db8a3b4a70b57d: Wo,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: as,
      __wbg_readPixels_05377f8b6fa1d8eb: yd,
      __wbg_texImage2D_7bc3001cb8602ed2: w1,
      __wbg_navigator_017bc45e84c473cc: Uu,
      __wbg_log_d282446d03691e72: fu,
      __wbg_info_a392cd5b7536cfb5: Uf,
      __wbg_warn_88c4a5bd9a322000: kp,
      __wbg_debug_7271beced8b71cd4: Hs,
      __wbg_error_933f449d72fef598: Gi,
      __wbg_error_50f60c611a3dcf64: Wi,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: $o,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: Ws,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: ci,
      __wbg_offsetX_0214819d43aaf6d5: nd,
      __wbg_offsetY_f18f571e33b385ab: rd,
      __wbg_preventDefault_c047d3e292b08cc4: id,
      __wbg_button_bb3285fcdf965178: Go,
      __wbg_new_1e52e3c919312525: Hu,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: vi,
      __wbg_observe_592b94857eed8e27: _d,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: Fi,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: Ap,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: Zi,
      __wbg_width_a86bcd32bd998060: Cp,
      __wbg_queryCounterEXT_ebb00bcc96221671: gd,
      __wbg_height_cd732bbdc7b66e49: Lf,
      __wbg_contentRect_0fb8c8900d689a0c: fs,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: Tf,
      __wbg_width_08e66520b99071f4: Mp,
      __wbg_height_e9afb506f31052a9: Of,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: Qf,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: Di,
      __wbg_get_37b48b8fa52d1f2c: Mf,
      __wbg_set_width_031bdecd763c5855: qw,
      __wbg_set_height_ad5056ea051acd78: og,
      __wbg_getContext_486aab500e1c34c9: af,
      __wbg_getContext_9fd4db9b1cf155db: cf,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: Nf,
      __wbg_addEventListener_ea90bc131475777e: ro,
      __wbg_set_width_f9e631f4ee129e5c: jw,
      __wbg_set_height_ef298446b359b0c5: ig,
      __wbg_getContext_70c2d1bed75d4122: bf,
      __wbg_getContext_422b32d0ee4b8076: rf,
      __wbg_resolve_d82363d90af6928a: Pd,
      __wbg_then_591b6b3a75ee817a: O1,
      __wbg_iterator_cc47ba25a2be735a: nu,
      __wbg_get_9a29be2cb383ed9a: Cf,
      __wbg_next_402fa10b59ab20c3: ed,
      __wbg_new_2e117a478906f062: Nu,
      __wbg_new_36e147a8ced3c6e0: Ju,
      __wbg_of_62183ea089c00bfa: td,
      __wbg_isArray_145a34fd0a38d37b: eu,
      __wbg_new_e66a4b7758dd2e5c: Xu,
      __wbg_isSafeInteger_a3389a198582f5f6: _u,
      __wbg_is_de5b366c746e004c: tu,
      __wbg_entries_c261c3fa1f281256: Oi,
      __wbg_then_2a84678a50976959: L1,
      __wbg_length_589238bdcf171f0e: au,
      __wbg_prototypesetcall_d721637c7ca66eb8: ud,
      __wbg_set_272b80acaf9a75e8: qd,
      __wbg_new_81880fb5002cb255: Qu,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: Ku,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: e1,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: t1,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: _1,
      __wbg_static_accessor_WINDOW_168f178805d978fe: n1,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: qf,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: Xf,
      __wbg_queueMicrotask_1c9b3800e321a967: ld,
      __wbg_queueMicrotask_311744e534a929a3: md,
      __wbg_set_4564f7dc44fcb0c9: Hd,
      __wbg___wbindgen_number_get_1cc01dd708740256: Kc,
      __wbg___wbindgen_in_4990f46af709e33c: qc,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: eo,
      __wbg___wbindgen_is_null_6d937fbfb6478470: Nc,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: Xc,
      __wbg_Number_c4bdf66bb78f7977: Ec,
      __wbg_Error_fdd633d4bb5dd76a: Rc,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: Hc,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: Jc,
      __wbg___wbindgen_string_get_71bb4348194e31f0: Zc,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: zc,
      __wbg___wbindgen_is_function_acc5528be2b923f2: jc,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: Qc,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: Yc,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: Gc,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: _o,
      __wbg___wbindgen_debug_string_8a447059637473e2: Uc,
      __wbindgen_init_externref_table: _2,
      __wbindgen_cast_0000000000000001: Ep,
      __wbindgen_cast_0000000000000002: Lp,
      __wbindgen_cast_0000000000000003: Op,
      __wbindgen_cast_0000000000000004: Wp,
      __wbindgen_cast_0000000000000005: Gp,
      __wbindgen_cast_0000000000000006: zp,
      __wbindgen_cast_0000000000000007: Up,
      __wbindgen_cast_0000000000000008: qp,
      __wbindgen_cast_0000000000000009: Hp,
      __wbindgen_cast_000000000000000a: jp,
      __wbindgen_cast_000000000000000b: Np,
      __wbindgen_cast_000000000000000c: Jp,
      __wbindgen_cast_000000000000000d: Qp,
      __wbindgen_cast_000000000000000e: Xp,
      __wbindgen_cast_000000000000000f: Yp,
      __wbindgen_cast_0000000000000010: Kp,
      __wbindgen_cast_0000000000000011: Zp,
      __wbindgen_cast_0000000000000012: e2
    }
  }, Cc), { memory: L2, mount: O2, __wbg_proteusapp_free: W2, proteusapp_addChild: G2, proteusapp_animateTo: z2, proteusapp_bakeTexture: U2, proteusapp_bakedImageSize: q2, proteusapp_bakedTextSize: H2, proteusapp_channelDestroy: j2, proteusapp_channelSet: N2, proteusapp_component: J2, proteusapp_copyBakedImageFrom: Q2, proteusapp_createVideo: X2, proteusapp_cropImage: Y2, proteusapp_destroy: K2, proteusapp_freeResources: Z2, proteusapp_get: e3, proteusapp_hideVideo: _3, proteusapp_loadTexture: t3, proteusapp_mergeFrom: n3, proteusapp_mergeFromWithBehavior: r3, proteusapp_new: a3, proteusapp_onBlur: b3, proteusapp_onClick: c3, proteusapp_onDrag: o3, proteusapp_onDropped: s3, proteusapp_onFocus: i3, proteusapp_onHoverEnter: f3, proteusapp_onHoverExit: u3, proteusapp_onPress: d3, proteusapp_onRelease: g3, proteusapp_onTransitionComplete: w3, proteusapp_pointerLeft: p3, proteusapp_pointerMoved: l3, proteusapp_pointerPressed: m3, proteusapp_pointerReleased: h3, proteusapp_releaseVideo: x3, proteusapp_removeChild: y3, proteusapp_setDeclaredGeometry: $3, proteusapp_setDisabled: S3, proteusapp_setImage: v3, proteusapp_setInteractive: A3, proteusapp_setOpacity: I3, proteusapp_setText: T3, proteusapp_setTexture: D3, proteusapp_setTransitionInteraction: B3, proteusapp_setVideoCrossfade: F3, proteusapp_setVisible: P3, proteusapp_showVideo: k3, proteusapp_splitTo: M3, proteusapp_splitToWithBehavior: C3, proteusapp_splitToWithStates: V3, proteusapp_texture: R3, proteusapp_textureState: E3, proteusapp_tick: L3, proteusapp_transitionChannel: O3, proteusapp_uploadVideoFrame: W3, __wbg_handle_free: G3, __wbg_texturehandle_free: z3, __wbg_transitionchannel_free: U3, __wbg_videohandle_free: q3, handle_fromId: H3, handle_id: j3, texturehandle_fromId: N3, texturehandle_id: J3, __abort_handler: Q3, __instance_terminated: X3, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: Y3, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: K3, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: Z3, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: el, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: _l, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: tl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: nl, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: rl, __wbindgen_malloc: al, __wbindgen_realloc: bl, __wbindgen_exn_store: cl, __externref_table_alloc: ol, __wbindgen_externrefs: sl, __wbindgen_free: il, __wbindgen_destroy_closure: fl, __externref_table_dealloc: ul, __wbindgen_start: zt } = E2, dl = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: Q3,
    __externref_table_alloc: ol,
    __externref_table_dealloc: ul,
    __instance_terminated: X3,
    __wbg_handle_free: G3,
    __wbg_proteusapp_free: W2,
    __wbg_texturehandle_free: z3,
    __wbg_transitionchannel_free: U3,
    __wbg_videohandle_free: q3,
    __wbindgen_destroy_closure: fl,
    __wbindgen_exn_store: cl,
    __wbindgen_externrefs: sl,
    __wbindgen_free: il,
    __wbindgen_malloc: al,
    __wbindgen_realloc: bl,
    __wbindgen_start: zt,
    handle_fromId: H3,
    handle_id: j3,
    memory: L2,
    mount: O2,
    proteusapp_addChild: G2,
    proteusapp_animateTo: z2,
    proteusapp_bakeTexture: U2,
    proteusapp_bakedImageSize: q2,
    proteusapp_bakedTextSize: H2,
    proteusapp_channelDestroy: j2,
    proteusapp_channelSet: N2,
    proteusapp_component: J2,
    proteusapp_copyBakedImageFrom: Q2,
    proteusapp_createVideo: X2,
    proteusapp_cropImage: Y2,
    proteusapp_destroy: K2,
    proteusapp_freeResources: Z2,
    proteusapp_get: e3,
    proteusapp_hideVideo: _3,
    proteusapp_loadTexture: t3,
    proteusapp_mergeFrom: n3,
    proteusapp_mergeFromWithBehavior: r3,
    proteusapp_new: a3,
    proteusapp_onBlur: b3,
    proteusapp_onClick: c3,
    proteusapp_onDrag: o3,
    proteusapp_onDropped: s3,
    proteusapp_onFocus: i3,
    proteusapp_onHoverEnter: f3,
    proteusapp_onHoverExit: u3,
    proteusapp_onPress: d3,
    proteusapp_onRelease: g3,
    proteusapp_onTransitionComplete: w3,
    proteusapp_pointerLeft: p3,
    proteusapp_pointerMoved: l3,
    proteusapp_pointerPressed: m3,
    proteusapp_pointerReleased: h3,
    proteusapp_releaseVideo: x3,
    proteusapp_removeChild: y3,
    proteusapp_setDeclaredGeometry: $3,
    proteusapp_setDisabled: S3,
    proteusapp_setImage: v3,
    proteusapp_setInteractive: A3,
    proteusapp_setOpacity: I3,
    proteusapp_setText: T3,
    proteusapp_setTexture: D3,
    proteusapp_setTransitionInteraction: B3,
    proteusapp_setVideoCrossfade: F3,
    proteusapp_setVisible: P3,
    proteusapp_showVideo: k3,
    proteusapp_splitTo: M3,
    proteusapp_splitToWithBehavior: C3,
    proteusapp_splitToWithStates: V3,
    proteusapp_texture: R3,
    proteusapp_textureState: E3,
    proteusapp_tick: L3,
    proteusapp_transitionChannel: O3,
    proteusapp_uploadVideoFrame: W3,
    texturehandle_fromId: N3,
    texturehandle_id: J3,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: rl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: Y3,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: _l,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: tl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: nl,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: Z3,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: el,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: K3
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  R2(dl);
  zt();
  async function gl(_, e) {
    await Vc(_, (t) => e.setup(new ll(t)), e.update ? (t) => {
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
      this.app.wasmApp.onDrag(this.wasmHandle, (t, n) => e({
        x: t,
        y: n
      }));
    }
    addChild(e) {
      this.app.wasmApp.addChild(this.wasmHandle, e.wasmHandle);
    }
    removeChild(e) {
      this.app.wasmApp.removeChild(this.wasmHandle, e.wasmHandle);
    }
    splitTo(e, t, n, r) {
      const a = new Float64Array(e.map((b) => b.id()));
      r ? this.app.wasmApp.splitToWithBehavior(this.wasmHandle, a, t, n, r) : this.app.wasmApp.splitTo(this.wasmHandle, a, t, n);
    }
    mergeFrom(e, t, n, r) {
      const a = new Float64Array(e.map((b) => b.id()));
      r ? this.app.wasmApp.mergeFromWithBehavior(this.wasmHandle, a, t, n, r) : this.app.wasmApp.mergeFrom(this.wasmHandle, a, t, n);
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
    splitToWithStates(e, t, n) {
      this.app.wasmApp.splitToWithStates(this.wasmHandle, e.map((r) => ({
        id: r.handle.id(),
        state: r.state
      })), t, n);
    }
    setDeclaredGeometry(e) {
      this.app.wasmApp.setDeclaredGeometry(this.wasmHandle, e);
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
  }, wl = class {
    constructor(e, t) {
      this.app = e, this.wasmHandle = t;
    }
    set(e, t, n, r = false) {
      this.app.wasmApp.channelSet(this.wasmHandle, e.wasmHandle, t.wasmHandle, n, r);
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
  }, pl = class {
    constructor(e, t) {
      this.app = e, this.wasmHandle = t;
    }
    uploadFrame(e, t, n) {
      const r = n instanceof Uint8Array ? n : new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
      return this.app.wasmApp.uploadVideoFrame(this.wasmHandle, e, t, r);
    }
    uploadFrom(e) {
      const t = e.videoWidth, n = e.videoHeight;
      if (t === 0 || n === 0) return false;
      if (!this.canvas || !this.context) {
        this.canvas = document.createElement("canvas");
        const a = this.canvas.getContext("2d", {
          willReadFrequently: true
        });
        if (!a) return false;
        this.context = a;
      }
      (this.canvas.width !== t || this.canvas.height !== n) && (this.canvas.width = t, this.canvas.height = n), this.context.drawImage(e, 0, 0, t, n);
      const r = this.context.getImageData(0, 0, t, n).data;
      return this.uploadFrame(t, n, r);
    }
    release() {
      this.app.wasmApp.releaseVideo(this.wasmHandle);
    }
  }, ll = class {
    constructor(e) {
      this.wasmApp = e ?? new I_();
    }
    component(e) {
      return new xt(this, this.wasmApp.component(e));
    }
    handleFromId(e) {
      return new xt(this, $.fromId(e));
    }
    transitionChannel(e) {
      return new wl(this, this.wasmApp.transitionChannel(e == null ? void 0 : e.id()));
    }
    texture(e) {
      return new je(this, this.wasmApp.texture(e));
    }
    loadTexture(e, t) {
      const n = this.wasmApp.loadTexture(e, t ?? null);
      return n ? new je(this, n) : void 0;
    }
    bakeTexture(e, t, n, r) {
      return new je(this, this.wasmApp.bakeTexture(e, t, n, r ?? null));
    }
    createVideo() {
      return new pl(this, this.wasmApp.createVideo());
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
      const n = (r) => {
        t || (e !== null && this.tick((r - e) / 1e3), e = r, requestAnimationFrame(n));
      };
      return requestAnimationFrame(n), () => {
        t = true;
      };
    }
  };
  const ml = "" + new URL("proteus_bench_web_bg-j8MlwOYp.wasm", import.meta.url).href;
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
      i.__wbg_handle_free(e, 0);
    }
    static fromId(e) {
      const t = i.handle_fromId(e);
      return h.__wrap(t);
    }
    id() {
      return i.handle_id(this.__wbg_ptr);
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
      i.__wbg_proteusapp_free(e, 0);
    }
    addChild(e, t) {
      m(e, h), m(t, h);
      const n = i.proteusapp_addChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (n[1]) throw P(n[0]);
    }
    animateTo(e, t, n) {
      m(e, h);
      const r = i.proteusapp_animateTo(this.__wbg_ptr, e.__wbg_ptr, t, n);
      if (r[1]) throw P(r[0]);
    }
    bakeTexture(e, t, n, r) {
      const a = m_(n, i.__wbindgen_malloc), b = M, c = i.proteusapp_bakeTexture(this.__wbg_ptr, e, t, a, b, r);
      return j.__wrap(c);
    }
    bakedImageSize(e) {
      return m(e, h), i.proteusapp_bakedImageSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    bakedTextSize(e) {
      return m(e, h), i.proteusapp_bakedTextSize(this.__wbg_ptr, e.__wbg_ptr);
    }
    channelDestroy(e) {
      m(e, X);
      var t = e.__destroy_into_raw();
      i.proteusapp_channelDestroy(this.__wbg_ptr, t);
    }
    channelSet(e, t, n, r, a) {
      m(e, X), m(t, h), m(n, h);
      const b = i.proteusapp_channelSet(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, r, a);
      if (b[1]) throw P(b[0]);
    }
    component(e) {
      const t = i.proteusapp_component(this.__wbg_ptr, e);
      if (t[2]) throw P(t[1]);
      return h.__wrap(t[0]);
    }
    copyBakedImageFrom(e, t) {
      m(e, h), m(t, h);
      const n = i.proteusapp_copyBakedImageFrom(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (n[2]) throw P(n[1]);
      return n[0] !== 0;
    }
    createVideo() {
      const e = i.proteusapp_createVideo(this.__wbg_ptr);
      return Y.__wrap(e);
    }
    cropImage(e, t) {
      m(e, h);
      const n = i.proteusapp_cropImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[2]) throw P(n[1]);
      return n[0] !== 0;
    }
    destroy(e) {
      m(e, h);
      var t = e.__destroy_into_raw();
      const n = i.proteusapp_destroy(this.__wbg_ptr, t);
      if (n[1]) throw P(n[0]);
    }
    freeResources(e) {
      m(e, h);
      const t = i.proteusapp_freeResources(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw P(t[0]);
    }
    get(e) {
      return m(e, h), i.proteusapp_get(this.__wbg_ptr, e.__wbg_ptr);
    }
    hideVideo(e) {
      m(e, h);
      const t = i.proteusapp_hideVideo(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw P(t[0]);
    }
    loadTexture(e, t) {
      const n = m_(e, i.__wbindgen_malloc), r = M, a = i.proteusapp_loadTexture(this.__wbg_ptr, n, r, t);
      return a === 0 ? void 0 : j.__wrap(a);
    }
    mergeFrom(e, t, n, r) {
      m(e, h);
      const a = __(t, i.__wbindgen_malloc), b = M, c = i.proteusapp_mergeFrom(this.__wbg_ptr, e.__wbg_ptr, a, b, n, r);
      if (c[1]) throw P(c[0]);
    }
    mergeFromWithBehavior(e, t, n, r, a) {
      m(e, h);
      const b = __(t, i.__wbindgen_malloc), c = M, o = i.proteusapp_mergeFromWithBehavior(this.__wbg_ptr, e.__wbg_ptr, b, c, n, r, a);
      if (o[1]) throw P(o[0]);
    }
    constructor() {
      const e = i.proteusapp_new();
      return this.__wbg_ptr = e, l_.register(this, this.__wbg_ptr, this), this;
    }
    onBlur(e, t) {
      m(e, h), i.proteusapp_onBlur(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onClick(e, t) {
      m(e, h), i.proteusapp_onClick(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDrag(e, t) {
      m(e, h), i.proteusapp_onDrag(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onDropped(e, t) {
      m(e, X), i.proteusapp_onDropped(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onFocus(e, t) {
      m(e, h), i.proteusapp_onFocus(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverEnter(e, t) {
      m(e, h), i.proteusapp_onHoverEnter(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onHoverExit(e, t) {
      m(e, h), i.proteusapp_onHoverExit(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onPress(e, t) {
      m(e, h), i.proteusapp_onPress(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onRelease(e, t) {
      m(e, h), i.proteusapp_onRelease(this.__wbg_ptr, e.__wbg_ptr, t);
    }
    onTransitionComplete(e, t) {
      m(e, h), i.proteusapp_onTransitionComplete(this.__wbg_ptr, e.__wbg_ptr, t);
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
      m(e, Y), i.proteusapp_releaseVideo(this.__wbg_ptr, e.__wbg_ptr);
    }
    removeChild(e, t) {
      m(e, h), m(t, h);
      const n = i.proteusapp_removeChild(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (n[1]) throw P(n[0]);
    }
    setDeclaredGeometry(e, t) {
      m(e, h);
      const n = i.proteusapp_setDeclaredGeometry(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw P(n[0]);
    }
    setDisabled(e, t) {
      m(e, h);
      const n = i.proteusapp_setDisabled(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw P(n[0]);
    }
    setImage(e, t) {
      m(e, h);
      const n = i.proteusapp_setImage(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw P(n[0]);
    }
    setInteractive(e, t) {
      m(e, h);
      const n = i.proteusapp_setInteractive(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw P(n[0]);
    }
    setOpacity(e, t) {
      m(e, h);
      const n = i.proteusapp_setOpacity(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw P(n[0]);
    }
    setText(e, t) {
      m(e, h);
      const n = i.proteusapp_setText(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw P(n[0]);
    }
    setTexture(e, t) {
      m(e, h), m(t, j);
      const n = i.proteusapp_setTexture(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (n[2]) throw P(n[1]);
      return n[0] !== 0;
    }
    setTransitionInteraction(e, t) {
      m(e, h);
      const n = i.proteusapp_setTransitionInteraction(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw P(n[0]);
    }
    setVideoCrossfade(e, t) {
      m(e, h);
      const n = i.proteusapp_setVideoCrossfade(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[2]) throw P(n[1]);
      return n[0] !== 0;
    }
    setVisible(e, t) {
      m(e, h);
      const n = i.proteusapp_setVisible(this.__wbg_ptr, e.__wbg_ptr, t);
      if (n[1]) throw P(n[0]);
    }
    showVideo(e, t) {
      m(e, h), m(t, Y);
      const n = i.proteusapp_showVideo(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr);
      if (n[2]) throw P(n[1]);
      return n[0] !== 0;
    }
    splitTo(e, t, n, r) {
      m(e, h);
      const a = __(t, i.__wbindgen_malloc), b = M, c = i.proteusapp_splitTo(this.__wbg_ptr, e.__wbg_ptr, a, b, n, r);
      if (c[1]) throw P(c[0]);
    }
    splitToWithBehavior(e, t, n, r, a) {
      m(e, h);
      const b = __(t, i.__wbindgen_malloc), c = M, o = i.proteusapp_splitToWithBehavior(this.__wbg_ptr, e.__wbg_ptr, b, c, n, r, a);
      if (o[1]) throw P(o[0]);
    }
    splitToWithStates(e, t, n, r) {
      m(e, h);
      const a = i.proteusapp_splitToWithStates(this.__wbg_ptr, e.__wbg_ptr, t, n, r);
      if (a[1]) throw P(a[0]);
    }
    texture(e) {
      const t = i.proteusapp_texture(this.__wbg_ptr, e);
      return j.__wrap(t);
    }
    textureState(e) {
      return m(e, j), i.proteusapp_textureState(this.__wbg_ptr, e.__wbg_ptr);
    }
    tick(e) {
      i.proteusapp_tick(this.__wbg_ptr, e);
    }
    transitionChannel(e) {
      const t = i.proteusapp_transitionChannel(this.__wbg_ptr, !y(e), y(e) ? 0 : e);
      return X.__wrap(t);
    }
    uploadVideoFrame(e, t, n, r) {
      m(e, Y);
      const a = m_(r, i.__wbindgen_malloc), b = M;
      return i.proteusapp_uploadVideoFrame(this.__wbg_ptr, e.__wbg_ptr, t, n, a, b) !== 0;
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
      i.__wbg_texturehandle_free(e, 0);
    }
    static fromId(e) {
      const t = i.texturehandle_fromId(e);
      return j.__wrap(t);
    }
    id() {
      return i.texturehandle_id(this.__wbg_ptr);
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
      i.__wbg_transitionchannel_free(e, 0);
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
      i.__wbg_videohandle_free(e, 0);
    }
  }
  Symbol.dispose && (Y.prototype[Symbol.dispose] = Y.prototype.free);
  function hl() {
    i.clear();
  }
  function xl(_) {
    i.on_frame(_);
  }
  function yl(_, e) {
    const t = G(_, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M;
    i.show(t, n, e);
  }
  function $l(_, e) {
    const t = G(_, i.__wbindgen_malloc, i.__wbindgen_realloc), n = M;
    return i.start(t, n, e);
  }
  function Sl() {
    i.stop_frames();
  }
  function vl(_, e) {
    return Error(A(_, e));
  }
  function Al(_) {
    return Number(_);
  }
  function Il(_, e) {
    const t = String(e), n = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), r = M;
    k().setInt32(_ + 4, r, true), k().setInt32(_ + 0, n, true);
  }
  function Tl(_) {
    return _.Window;
  }
  function Dl(_) {
    return _.WorkerGlobalScope;
  }
  function Bl(_, e) {
    const t = e, n = typeof t == "bigint" ? t : void 0;
    k().setBigInt64(_ + 8, y(n) ? BigInt(0) : n, true), k().setInt32(_ + 0, !y(n), true);
  }
  function Fl(_) {
    const e = _, t = typeof e == "boolean" ? e : void 0;
    return y(t) ? 16777215 : t ? 1 : 0;
  }
  function Pl(_, e) {
    const t = M_(e), n = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), r = M;
    k().setInt32(_ + 4, r, true), k().setInt32(_ + 0, n, true);
  }
  function kl(_, e) {
    return _ in e;
  }
  function Ml(_) {
    return typeof _ == "bigint";
  }
  function Cl(_) {
    return typeof _ == "function";
  }
  function Vl(_) {
    return _ === null;
  }
  function Rl(_) {
    const e = _;
    return typeof e == "object" && e !== null;
  }
  function El(_) {
    return _ === void 0;
  }
  function Ll(_, e) {
    return _ === e;
  }
  function Ol(_, e) {
    return _ == e;
  }
  function Wl(_, e) {
    const t = e, n = typeof t == "number" ? t : void 0;
    k().setFloat64(_ + 8, y(n) ? 0 : n, true), k().setInt32(_ + 0, !y(n), true);
  }
  function Gl(_, e) {
    const t = e, n = typeof t == "string" ? t : void 0;
    var r = y(n) ? 0 : G(n, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, r, true);
  }
  function zl(_, e) {
    throw new Error(A(_, e));
  }
  function Ul(_) {
    _._wbg_cb_unref();
  }
  function ql(_) {
    _.abort();
  }
  function Hl(_) {
    return _.aborted;
  }
  function jl(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Nl(_, e) {
    _.activeTexture(e >>> 0);
  }
  function Jl() {
    return g(function(_, e, t, n) {
      _.addEventListener(A(e, t), n);
    }, arguments);
  }
  function Ql() {
    return g(function(_) {
      return _.arrayBuffer();
    }, arguments);
  }
  function Xl(_, e, t) {
    _.attachShader(e, t);
  }
  function Yl(_, e, t) {
    _.attachShader(e, t);
  }
  function Kl(_, e, t) {
    _.beginQuery(e >>> 0, t);
  }
  function Zl() {
    return g(function(_, e) {
      return _.beginRenderPass(e);
    }, arguments);
  }
  function e4(_, e, t, n, r) {
    _.bindAttribLocation(e, t >>> 0, A(n, r));
  }
  function _4(_, e, t, n, r) {
    _.bindAttribLocation(e, t >>> 0, A(n, r));
  }
  function t4(_, e, t, n, r, a) {
    _.bindBufferRange(e >>> 0, t >>> 0, n, r, a);
  }
  function n4(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function r4(_, e, t) {
    _.bindBuffer(e >>> 0, t);
  }
  function a4(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function b4(_, e, t) {
    _.bindFramebuffer(e >>> 0, t);
  }
  function c4(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function o4(_, e, t) {
    _.bindRenderbuffer(e >>> 0, t);
  }
  function s4(_, e, t) {
    _.bindSampler(e >>> 0, t);
  }
  function i4(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function f4(_, e, t) {
    _.bindTexture(e >>> 0, t);
  }
  function u4(_, e) {
    _.bindVertexArrayOES(e);
  }
  function d4(_, e) {
    _.bindVertexArray(e);
  }
  function g4(_, e, t, n, r) {
    _.blendColor(e, t, n, r);
  }
  function w4(_, e, t, n, r) {
    _.blendColor(e, t, n, r);
  }
  function p4(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function l4(_, e, t) {
    _.blendEquationSeparate(e >>> 0, t >>> 0);
  }
  function m4(_, e) {
    _.blendEquation(e >>> 0);
  }
  function h4(_, e) {
    _.blendEquation(e >>> 0);
  }
  function x4(_, e, t, n, r) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, n >>> 0, r >>> 0);
  }
  function y4(_, e, t, n, r) {
    _.blendFuncSeparate(e >>> 0, t >>> 0, n >>> 0, r >>> 0);
  }
  function $4(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function S4(_, e, t) {
    _.blendFunc(e >>> 0, t >>> 0);
  }
  function v4(_, e, t, n, r, a, b, c, o, s, d) {
    _.blitFramebuffer(e, t, n, r, a, b, c, o, s >>> 0, d >>> 0);
  }
  function A4(_, e, t, n) {
    _.bufferData(e >>> 0, t, n >>> 0);
  }
  function I4(_, e, t, n) {
    _.bufferData(e >>> 0, t, n >>> 0);
  }
  function T4(_, e, t, n) {
    _.bufferData(e >>> 0, t, n >>> 0);
  }
  function D4(_, e, t, n) {
    _.bufferData(e >>> 0, t, n >>> 0);
  }
  function B4(_, e, t, n) {
    _.bufferSubData(e >>> 0, t, n);
  }
  function F4(_, e, t, n) {
    _.bufferSubData(e >>> 0, t, n);
  }
  function P4(_) {
    return _.button;
  }
  function k4() {
    return g(function(_, e, t, n) {
      return _.call(e, t, n);
    }, arguments);
  }
  function M4() {
    return g(function(_, e, t) {
      return _.call(e, t);
    }, arguments);
  }
  function C4() {
    return g(function(_, e) {
      return _.call(e);
    }, arguments);
  }
  function V4(_, e, t, n, r) {
    _.clearBufferfv(e >>> 0, t, L(n, r));
  }
  function R4(_, e, t, n, r) {
    _.clearBufferiv(e >>> 0, t, Z(n, r));
  }
  function E4(_, e, t, n, r) {
    _.clearBufferuiv(e >>> 0, t, $e(n, r));
  }
  function L4(_, e) {
    _.clearDepth(e);
  }
  function O4(_, e) {
    _.clearDepth(e);
  }
  function W4(_, e) {
    _.clearStencil(e);
  }
  function G4(_, e) {
    _.clearStencil(e);
  }
  function z4(_, e) {
    _.clear(e >>> 0);
  }
  function U4(_, e) {
    _.clear(e >>> 0);
  }
  function q4(_, e, t, n) {
    return _.clientWaitSync(e, t >>> 0, n >>> 0);
  }
  function H4(_, e, t, n, r) {
    _.colorMask(e !== 0, t !== 0, n !== 0, r !== 0);
  }
  function j4(_, e, t, n, r) {
    _.colorMask(e !== 0, t !== 0, n !== 0, r !== 0);
  }
  function N4(_, e) {
    _.compileShader(e);
  }
  function J4(_, e) {
    _.compileShader(e);
  }
  function Q4(_, e, t, n, r, a, b, c, o) {
    _.compressedTexSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o);
  }
  function X4(_, e, t, n, r, a, b, c, o) {
    _.compressedTexSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o);
  }
  function Y4(_, e, t, n, r, a, b, c, o, s) {
    _.compressedTexSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o, s);
  }
  function K4(_, e, t, n, r, a, b, c, o, s, d, v) {
    _.compressedTexSubImage3D(e >>> 0, t, n, r, a, b, c, o, s >>> 0, d, v);
  }
  function Z4(_, e, t, n, r, a, b, c, o, s, d) {
    _.compressedTexSubImage3D(e >>> 0, t, n, r, a, b, c, o, s >>> 0, d);
  }
  function em() {
    return g(function(_, e) {
      _.configure(e);
    }, arguments);
  }
  function _m(_) {
    return _.contentRect;
  }
  function tm(_, e, t, n, r, a) {
    _.copyBufferSubData(e >>> 0, t >>> 0, n, r, a);
  }
  function nm(_, e, t, n, r, a, b, c, o) {
    _.copyTexSubImage2D(e >>> 0, t, n, r, a, b, c, o);
  }
  function rm(_, e, t, n, r, a, b, c, o) {
    _.copyTexSubImage2D(e >>> 0, t, n, r, a, b, c, o);
  }
  function am(_, e, t, n, r, a, b, c, o, s) {
    _.copyTexSubImage3D(e >>> 0, t, n, r, a, b, c, o, s);
  }
  function bm() {
    return g(function(_, e, t, n) {
      _.copyTextureToTexture(e, t, n);
    }, arguments);
  }
  function cm() {
    return g(function(_, e) {
      return _.createBindGroupLayout(e);
    }, arguments);
  }
  function om(_, e) {
    return _.createBindGroup(e);
  }
  function sm(_) {
    const e = _.createBuffer();
    return y(e) ? 0 : D(e);
  }
  function im() {
    return g(function(_, e) {
      return _.createBuffer(e);
    }, arguments);
  }
  function fm(_) {
    const e = _.createBuffer();
    return y(e) ? 0 : D(e);
  }
  function um(_, e) {
    return _.createCommandEncoder(e);
  }
  function dm(_) {
    const e = _.createFramebuffer();
    return y(e) ? 0 : D(e);
  }
  function gm(_) {
    const e = _.createFramebuffer();
    return y(e) ? 0 : D(e);
  }
  function wm(_, e) {
    return _.createPipelineLayout(e);
  }
  function pm(_) {
    const e = _.createProgram();
    return y(e) ? 0 : D(e);
  }
  function lm(_) {
    const e = _.createProgram();
    return y(e) ? 0 : D(e);
  }
  function mm(_) {
    const e = _.createQuery();
    return y(e) ? 0 : D(e);
  }
  function hm() {
    return g(function(_, e) {
      return _.createRenderPipeline(e);
    }, arguments);
  }
  function xm(_) {
    const e = _.createRenderbuffer();
    return y(e) ? 0 : D(e);
  }
  function ym(_) {
    const e = _.createRenderbuffer();
    return y(e) ? 0 : D(e);
  }
  function $m(_, e) {
    return _.createSampler(e);
  }
  function Sm(_) {
    const e = _.createSampler();
    return y(e) ? 0 : D(e);
  }
  function vm(_, e) {
    return _.createShaderModule(e);
  }
  function Am(_, e) {
    const t = _.createShader(e >>> 0);
    return y(t) ? 0 : D(t);
  }
  function Im(_, e) {
    const t = _.createShader(e >>> 0);
    return y(t) ? 0 : D(t);
  }
  function Tm(_) {
    const e = _.createTexture();
    return y(e) ? 0 : D(e);
  }
  function Dm(_) {
    const e = _.createTexture();
    return y(e) ? 0 : D(e);
  }
  function Bm() {
    return g(function(_, e) {
      return _.createTexture(e);
    }, arguments);
  }
  function Fm(_) {
    const e = _.createVertexArrayOES();
    return y(e) ? 0 : D(e);
  }
  function Pm(_) {
    const e = _.createVertexArray();
    return y(e) ? 0 : D(e);
  }
  function km() {
    return g(function(_, e) {
      return _.createView(e);
    }, arguments);
  }
  function Mm(_, e) {
    _.cullFace(e >>> 0);
  }
  function Cm(_, e) {
    _.cullFace(e >>> 0);
  }
  function Vm(_, e, t, n) {
    console.debug(_, e, t, n);
  }
  function Rm(_, e) {
    _.deleteBuffer(e);
  }
  function Em(_, e) {
    _.deleteBuffer(e);
  }
  function Lm(_, e) {
    _.deleteFramebuffer(e);
  }
  function Om(_, e) {
    _.deleteFramebuffer(e);
  }
  function Wm(_, e) {
    _.deleteProgram(e);
  }
  function Gm(_, e) {
    _.deleteProgram(e);
  }
  function zm(_, e) {
    _.deleteQuery(e);
  }
  function Um(_, e) {
    _.deleteRenderbuffer(e);
  }
  function qm(_, e) {
    _.deleteRenderbuffer(e);
  }
  function Hm(_, e) {
    _.deleteSampler(e);
  }
  function jm(_, e) {
    _.deleteShader(e);
  }
  function Nm(_, e) {
    _.deleteShader(e);
  }
  function Jm(_, e) {
    _.deleteSync(e);
  }
  function Qm(_, e) {
    _.deleteTexture(e);
  }
  function Xm(_, e) {
    _.deleteTexture(e);
  }
  function Ym(_, e) {
    _.deleteVertexArrayOES(e);
  }
  function Km(_, e) {
    _.deleteVertexArray(e);
  }
  function Zm(_, e) {
    _.depthFunc(e >>> 0);
  }
  function e7(_, e) {
    _.depthFunc(e >>> 0);
  }
  function _7(_, e) {
    _.depthMask(e !== 0);
  }
  function t7(_, e) {
    _.depthMask(e !== 0);
  }
  function n7(_, e, t) {
    _.depthRange(e, t);
  }
  function r7(_, e, t) {
    _.depthRange(e, t);
  }
  function a7(_, e) {
    const t = e.description, n = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), r = M;
    k().setInt32(_ + 4, r, true), k().setInt32(_ + 0, n, true);
  }
  function b7(_) {
    _.destroy();
  }
  function c7(_) {
    return _.devicePixelRatio;
  }
  function o7(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function s7(_, e) {
    _.disableVertexAttribArray(e >>> 0);
  }
  function i7(_, e) {
    _.disable(e >>> 0);
  }
  function f7(_, e) {
    _.disable(e >>> 0);
  }
  function u7(_) {
    const e = _.document;
    return y(e) ? 0 : D(e);
  }
  function d7(_) {
    return _.done;
  }
  function g7(_, e, t, n, r) {
    _.drawArraysInstancedANGLE(e >>> 0, t, n, r);
  }
  function w7(_, e, t, n, r) {
    _.drawArraysInstanced(e >>> 0, t, n, r);
  }
  function p7(_, e, t, n) {
    _.drawArrays(e >>> 0, t, n);
  }
  function l7(_, e, t, n) {
    _.drawArrays(e >>> 0, t, n);
  }
  function m7(_, e) {
    _.drawBuffersWEBGL(e);
  }
  function h7(_, e) {
    _.drawBuffers(e);
  }
  function x7(_, e, t, n, r, a) {
    _.drawElementsInstancedANGLE(e >>> 0, t, n >>> 0, r, a);
  }
  function y7(_, e, t, n, r, a) {
    _.drawElementsInstanced(e >>> 0, t, n >>> 0, r, a);
  }
  function $7(_, e, t, n, r, a) {
    _.drawIndexed(e >>> 0, t >>> 0, n >>> 0, r, a >>> 0);
  }
  function S7(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function v7(_, e) {
    _.enableVertexAttribArray(e >>> 0);
  }
  function A7(_, e) {
    _.enable(e >>> 0);
  }
  function I7(_, e) {
    _.enable(e >>> 0);
  }
  function T7(_, e) {
    _.endQuery(e >>> 0);
  }
  function D7(_) {
    _.end();
  }
  function B7(_) {
    return Object.entries(_);
  }
  function F7(_, e, t, n) {
    console.error(_, e, t, n);
  }
  function P7(_) {
    console.error(_);
  }
  function k7(_, e) {
    let t, n;
    try {
      t = _, n = e, console.error(A(_, e));
    } finally {
      i.__wbindgen_free(t, n, 1);
    }
  }
  function M7(_, e, t) {
    const n = _.fenceSync(e >>> 0, t >>> 0);
    return y(n) ? 0 : D(n);
  }
  function C7(_, e, t) {
    return _.fetch(A(e, t));
  }
  function V7(_, e, t, n) {
    return _.fetch(A(e, t), n);
  }
  function R7(_) {
    return _.finish();
  }
  function E7(_, e) {
    return _.finish(e);
  }
  function L7(_) {
    _.flush();
  }
  function O7(_) {
    _.flush();
  }
  function W7(_, e, t, n, r) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, n >>> 0, r);
  }
  function G7(_, e, t, n, r) {
    _.framebufferRenderbuffer(e >>> 0, t >>> 0, n >>> 0, r);
  }
  function z7(_, e, t, n, r, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, n >>> 0, r, a);
  }
  function U7(_, e, t, n, r, a) {
    _.framebufferTexture2D(e >>> 0, t >>> 0, n >>> 0, r, a);
  }
  function q7(_, e, t, n, r, a) {
    _.framebufferTextureLayer(e >>> 0, t >>> 0, n, r, a);
  }
  function H7(_, e, t, n, r, a, b) {
    _.framebufferTextureMultiviewOVR(e >>> 0, t >>> 0, n, r, a, b);
  }
  function j7(_, e) {
    _.frontFace(e >>> 0);
  }
  function N7(_, e) {
    _.frontFace(e >>> 0);
  }
  function J7(_) {
    return _.getBoundingClientRect();
  }
  function Q7(_, e, t, n) {
    _.getBufferSubData(e >>> 0, t, n);
  }
  function X7() {
    return g(function(_, e, t, n) {
      const r = _.getContext(A(e, t), n);
      return y(r) ? 0 : D(r);
    }, arguments);
  }
  function Y7() {
    return g(function(_, e, t) {
      const n = _.getContext(A(e, t));
      return y(n) ? 0 : D(n);
    }, arguments);
  }
  function K7() {
    return g(function(_, e, t) {
      const n = _.getContext(A(e, t));
      return y(n) ? 0 : D(n);
    }, arguments);
  }
  function Z7() {
    return g(function(_, e, t, n) {
      const r = _.getContext(A(e, t), n);
      return y(r) ? 0 : D(r);
    }, arguments);
  }
  function e6() {
    return g(function(_) {
      return _.getCurrentTexture();
    }, arguments);
  }
  function _6(_, e, t) {
    const n = _.getElementById(A(e, t));
    return y(n) ? 0 : D(n);
  }
  function t6() {
    return g(function(_, e, t) {
      const n = _.getExtension(A(e, t));
      return y(n) ? 0 : D(n);
    }, arguments);
  }
  function n6() {
    return g(function(_, e, t) {
      return _.getIndexedParameter(e >>> 0, t >>> 0);
    }, arguments);
  }
  function r6() {
    return g(function(_, e, t) {
      return _.getMappedRange(e, t);
    }, arguments);
  }
  function a6() {
    return g(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function b6() {
    return g(function(_, e) {
      return _.getParameter(e >>> 0);
    }, arguments);
  }
  function c6(_) {
    const e = _.getPreferredCanvasFormat();
    return (be.indexOf(e) + 1 || 96) - 1;
  }
  function o6(_, e, t) {
    const n = e.getProgramInfoLog(t);
    var r = y(n) ? 0 : G(n, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, r, true);
  }
  function s6(_, e, t) {
    const n = e.getProgramInfoLog(t);
    var r = y(n) ? 0 : G(n, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, r, true);
  }
  function i6(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function f6(_, e, t) {
    return _.getProgramParameter(e, t >>> 0);
  }
  function u6(_, e, t) {
    return _.getQueryParameter(e, t >>> 0);
  }
  function d6(_, e, t) {
    const n = e.getShaderInfoLog(t);
    var r = y(n) ? 0 : G(n, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, r, true);
  }
  function g6(_, e, t) {
    const n = e.getShaderInfoLog(t);
    var r = y(n) ? 0 : G(n, i.__wbindgen_malloc, i.__wbindgen_realloc), a = M;
    k().setInt32(_ + 4, a, true), k().setInt32(_ + 0, r, true);
  }
  function w6(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function p6(_, e, t) {
    return _.getShaderParameter(e, t >>> 0);
  }
  function l6(_) {
    const e = _.getSupportedExtensions();
    return y(e) ? 0 : D(e);
  }
  function m6(_) {
    const e = _.getSupportedProfiles();
    return y(e) ? 0 : D(e);
  }
  function h6(_, e, t) {
    return _.getSyncParameter(e, t >>> 0);
  }
  function x6(_, e, t, n) {
    return _.getUniformBlockIndex(e, A(t, n));
  }
  function y6(_, e, t, n) {
    const r = _.getUniformLocation(e, A(t, n));
    return y(r) ? 0 : D(r);
  }
  function $6(_, e, t, n) {
    const r = _.getUniformLocation(e, A(t, n));
    return y(r) ? 0 : D(r);
  }
  function S6(_, e) {
    return _[e >>> 0];
  }
  function v6(_, e) {
    const t = _[e >>> 0];
    return y(t) ? 0 : D(t);
  }
  function A6() {
    return g(function(_, e) {
      return Reflect.get(_, e);
    }, arguments);
  }
  function I6(_, e) {
    return _[e >>> 0];
  }
  function T6(_, e) {
    return _[e];
  }
  function D6(_) {
    return _.gpu;
  }
  function B6(_) {
    return _.height;
  }
  function F6(_) {
    return _.height;
  }
  function P6(_) {
    return _.hidden;
  }
  function k6(_, e, t) {
    return _.includes(e, t);
  }
  function M6(_) {
    return _.info;
  }
  function C6(_, e, t, n) {
    console.info(_, e, t, n);
  }
  function V6(_) {
    let e;
    try {
      e = _ instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function R6(_) {
    let e;
    try {
      e = _ instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function E6(_) {
    let e;
    try {
      e = _ instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function L6(_) {
    let e;
    try {
      e = _ instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function O6(_) {
    let e;
    try {
      e = _ instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function W6(_) {
    let e;
    try {
      e = _ instanceof ResizeObserverEntry;
    } catch {
      e = false;
    }
    return e;
  }
  function G6(_) {
    let e;
    try {
      e = _ instanceof Response;
    } catch {
      e = false;
    }
    return e;
  }
  function z6(_) {
    let e;
    try {
      e = _ instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function U6(_) {
    let e;
    try {
      e = _ instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function q6(_) {
    let e;
    try {
      e = _ instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function H6() {
    return g(function(_, e, t) {
      _.invalidateFramebuffer(e >>> 0, t);
    }, arguments);
  }
  function j6(_) {
    return Array.isArray(_);
  }
  function N6(_) {
    return Number.isSafeInteger(_);
  }
  function J6(_, e) {
    return Object.is(_, e);
  }
  function Q6() {
    return Symbol.iterator;
  }
  function X6(_, e) {
    const t = e.label, n = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), r = M;
    k().setInt32(_ + 4, r, true), k().setInt32(_ + 0, n, true);
  }
  function Y6(_) {
    return _.length;
  }
  function K6(_) {
    return _.length;
  }
  function Z6(_) {
    return _.limits;
  }
  function e5(_) {
    return _.limits;
  }
  function _5(_, e) {
    _.linkProgram(e);
  }
  function t5(_, e) {
    _.linkProgram(e);
  }
  function n5(_, e, t, n) {
    console.log(_, e, t, n);
  }
  function r5(_, e, t, n) {
    return _.mapAsync(e >>> 0, t, n);
  }
  function a5(_) {
    return _.maxBindGroups;
  }
  function b5(_) {
    return _.maxBindingsPerBindGroup;
  }
  function c5(_) {
    return _.maxBufferSize;
  }
  function o5(_) {
    return _.maxColorAttachmentBytesPerSample;
  }
  function s5(_) {
    return _.maxColorAttachments;
  }
  function i5(_) {
    return _.maxComputeInvocationsPerWorkgroup;
  }
  function f5(_) {
    return _.maxComputeWorkgroupSizeX;
  }
  function u5(_) {
    return _.maxComputeWorkgroupSizeY;
  }
  function d5(_) {
    return _.maxComputeWorkgroupSizeZ;
  }
  function g5(_) {
    return _.maxComputeWorkgroupStorageSize;
  }
  function w5(_) {
    return _.maxComputeWorkgroupsPerDimension;
  }
  function p5(_) {
    return _.maxDynamicStorageBuffersPerPipelineLayout;
  }
  function l5(_) {
    return _.maxDynamicUniformBuffersPerPipelineLayout;
  }
  function m5(_) {
    return _.maxInterStageShaderVariables;
  }
  function h5(_) {
    return _.maxSampledTexturesPerShaderStage;
  }
  function x5(_) {
    return _.maxSamplersPerShaderStage;
  }
  function y5(_) {
    return _.maxStorageBufferBindingSize;
  }
  function $5(_) {
    return _.maxStorageBuffersPerShaderStage;
  }
  function S5(_) {
    return _.maxStorageTexturesPerShaderStage;
  }
  function v5(_) {
    return _.maxTextureArrayLayers;
  }
  function A5(_) {
    return _.maxTextureDimension1D;
  }
  function I5(_) {
    return _.maxTextureDimension2D;
  }
  function T5(_) {
    return _.maxTextureDimension3D;
  }
  function D5(_) {
    return _.maxUniformBufferBindingSize;
  }
  function B5(_) {
    return _.maxUniformBuffersPerShaderStage;
  }
  function F5(_) {
    return _.maxVertexAttributes;
  }
  function P5(_) {
    return _.maxVertexBufferArrayStride;
  }
  function k5(_) {
    return _.maxVertexBuffers;
  }
  function M5(_) {
    return _.minStorageBufferOffsetAlignment;
  }
  function C5(_) {
    return _.minUniformBufferOffsetAlignment;
  }
  function V5(_) {
    return _.navigator;
  }
  function R5(_) {
    return _.navigator;
  }
  function E5() {
    return g(function(_) {
      return new ResizeObserver(_);
    }, arguments);
  }
  function L5() {
    return new Error();
  }
  function O5() {
    return new Object();
  }
  function W5() {
    return new Array();
  }
  function G5() {
    return g(function() {
      return new AbortController();
    }, arguments);
  }
  function z5(_) {
    return new Uint8Array(_);
  }
  function U5(_, e) {
    return new Error(A(_, e));
  }
  function q5(_, e) {
    try {
      var t = {
        a: _,
        b: e
      }, n = (a, b) => {
        const c = t.a;
        t.a = 0;
        try {
          return oS(c, t.b, a, b);
        } finally {
          t.a = c;
        }
      };
      return new Promise(n);
    } finally {
      t.a = 0;
    }
  }
  function H5(_, e, t) {
    return new Uint8Array(_, e >>> 0, t >>> 0);
  }
  function j5() {
    return g(function(_) {
      return _.next();
    }, arguments);
  }
  function N5(_) {
    return _.next;
  }
  function J5(_) {
    return _.now();
  }
  function Q5(_, e) {
    _.observe(e);
  }
  function X5(_) {
    return Array.of(_);
  }
  function Y5(_) {
    return _.offsetX;
  }
  function K5(_) {
    return _.offsetY;
  }
  function Z5(_) {
    return _.ok;
  }
  function e8(_) {
    return _.onSubmittedWorkDone();
  }
  function _8(_) {
    const e = _.performance;
    return y(e) ? 0 : D(e);
  }
  function t8(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function n8(_, e, t) {
    _.pixelStorei(e >>> 0, t);
  }
  function r8(_, e, t) {
    _.polygonOffset(e, t);
  }
  function a8(_, e, t) {
    _.polygonOffset(e, t);
  }
  function b8(_) {
    _.preventDefault();
  }
  function c8(_) {
    return Te.__wrap(_);
  }
  function o8(_, e, t) {
    Uint8Array.prototype.set.call(i_(_, e), t);
  }
  function s8(_, e) {
    return _.push(e);
  }
  function i8(_, e, t) {
    _.queryCounterEXT(e, t >>> 0);
  }
  function f8() {
    return g(function(_, e, t) {
      return _.querySelectorAll(A(e, t));
    }, arguments);
  }
  function u8() {
    return g(function(_, e, t) {
      const n = _.querySelector(A(e, t));
      return y(n) ? 0 : D(n);
    }, arguments);
  }
  function d8(_) {
    return _.queueMicrotask;
  }
  function g8(_) {
    queueMicrotask(_);
  }
  function w8(_) {
    return _.queue;
  }
  function p8(_, e) {
    _.readBuffer(e >>> 0);
  }
  function l8() {
    return g(function(_, e, t, n, r, a, b, c) {
      _.readPixels(e, t, n, r, a >>> 0, b >>> 0, c);
    }, arguments);
  }
  function m8() {
    return g(function(_, e, t, n, r, a, b, c) {
      _.readPixels(e, t, n, r, a >>> 0, b >>> 0, c);
    }, arguments);
  }
  function h8() {
    return g(function(_, e, t, n, r, a, b, c) {
      _.readPixels(e, t, n, r, a >>> 0, b >>> 0, c);
    }, arguments);
  }
  function x8(_, e, t, n, r, a) {
    _.renderbufferStorageMultisample(e >>> 0, t, n >>> 0, r, a);
  }
  function y8(_, e, t, n, r) {
    _.renderbufferStorage(e >>> 0, t >>> 0, n, r);
  }
  function $8(_, e, t, n, r) {
    _.renderbufferStorage(e >>> 0, t >>> 0, n, r);
  }
  function S8(_, e) {
    return _.requestAdapter(e);
  }
  function v8(_) {
    return _.requestAdapter();
  }
  function A8() {
    return g(function(_, e) {
      return _.requestAnimationFrame(e);
    }, arguments);
  }
  function I8(_, e) {
    return _.requestDevice(e);
  }
  function T8(_) {
    return Promise.resolve(_);
  }
  function D8(_, e, t, n) {
    _.samplerParameterf(e, t >>> 0, n);
  }
  function B8(_, e, t, n) {
    _.samplerParameteri(e, t >>> 0, n);
  }
  function F8(_, e, t, n, r) {
    _.scissor(e, t, n, r);
  }
  function P8(_, e, t, n, r) {
    _.scissor(e, t, n, r);
  }
  function k8() {
    return g(function(_, e, t, n, r, a, b) {
      _.setBindGroup(e >>> 0, t, $e(n, r), a, b >>> 0);
    }, arguments);
  }
  function M8(_, e, t) {
    _.setBindGroup(e >>> 0, t);
  }
  function C8(_, e, t, n, r) {
    _.setIndexBuffer(e, Y_[t], n, r);
  }
  function V8(_, e, t, n) {
    _.setIndexBuffer(e, Y_[t], n);
  }
  function R8(_, e) {
    _.setPipeline(e);
  }
  function E8(_, e, t, n) {
    _.setVertexBuffer(e >>> 0, t, n);
  }
  function L8(_, e, t, n, r) {
    _.setVertexBuffer(e >>> 0, t, n, r);
  }
  function O8(_, e, t, n, r, a, b) {
    _.setViewport(e, t, n, r, a, b);
  }
  function W8(_, e, t) {
    _.set(e, t >>> 0);
  }
  function G8() {
    return g(function(_, e, t) {
      return Reflect.set(_, e, t);
    }, arguments);
  }
  function z8(_, e, t) {
    _[e] = t;
  }
  function U8(_, e) {
    _.a = e;
  }
  function q8(_, e) {
    _.access = hS[e];
  }
  function H8(_, e) {
    _.addressModeU = Q_[e];
  }
  function j8(_, e) {
    _.addressModeV = Q_[e];
  }
  function N8(_, e) {
    _.addressModeW = Q_[e];
  }
  function J8(_, e) {
    _.alpha = e;
  }
  function Q8(_, e) {
    _.alphaMode = uS[e];
  }
  function X8(_, e) {
    _.alphaToCoverageEnabled = e !== 0;
  }
  function Y8(_, e) {
    _.arrayLayerCount = e >>> 0;
  }
  function K8(_, e) {
    _.arrayStride = e;
  }
  function Z8(_, e) {
    _.aspect = Ht[e];
  }
  function e9(_, e) {
    _.aspect = Ht[e];
  }
  function _9(_, e) {
    _.attributes = e;
  }
  function t9(_, e) {
    _.b = e;
  }
  function n9(_, e) {
    _.baseArrayLayer = e >>> 0;
  }
  function r9(_, e) {
    _.baseMipLevel = e >>> 0;
  }
  function a9(_, e) {
    _.beginningOfPassWriteIndex = e >>> 0;
  }
  function b9(_, e) {
    _.bindGroupLayouts = e;
  }
  function c9(_, e) {
    _.binding = e >>> 0;
  }
  function o9(_, e) {
    _.binding = e >>> 0;
  }
  function s9(_, e) {
    _.blend = e;
  }
  function i9(_, e) {
    _.buffer = e;
  }
  function f9(_, e) {
    _.buffer = e;
  }
  function u9(_, e) {
    _.buffers = e;
  }
  function d9(_, e) {
    _.bytesPerRow = e >>> 0;
  }
  function g9(_, e) {
    _.clearValue = e;
  }
  function w9(_, e, t) {
    _.code = A(e, t);
  }
  function p9(_, e) {
    _.colorAttachments = e;
  }
  function l9(_, e) {
    _.color = e;
  }
  function m9(_, e) {
    _.compare = X_[e];
  }
  function h9(_, e) {
    _.compare = X_[e];
  }
  function x9(_, e) {
    _.count = e >>> 0;
  }
  function y9(_, e) {
    _.cullMode = dS[e];
  }
  function $9(_, e, t) {
    _[e >>> 0] = t;
  }
  function S9(_, e) {
    _.depthBias = e;
  }
  function v9(_, e) {
    _.depthBiasClamp = e;
  }
  function A9(_, e) {
    _.depthBiasSlopeScale = e;
  }
  function I9(_, e) {
    _.depthClearValue = e;
  }
  function T9(_, e) {
    _.depthCompare = X_[e];
  }
  function D9(_, e) {
    _.depthFailOp = Z_[e];
  }
  function B9(_, e) {
    _.depthLoadOp = K_[e];
  }
  function F9(_, e) {
    _.depthOrArrayLayers = e >>> 0;
  }
  function P9(_, e) {
    _.depthReadOnly = e !== 0;
  }
  function k9(_, e) {
    _.depthStencil = e;
  }
  function M9(_, e) {
    _.depthStencilAttachment = e;
  }
  function C9(_, e) {
    _.depthStoreOp = et[e];
  }
  function V9(_, e) {
    _.depthWriteEnabled = e !== 0;
  }
  function R9(_, e) {
    _.device = e;
  }
  function E9(_, e) {
    _.dimension = _t[e];
  }
  function L9(_, e) {
    _.dimension = xS[e];
  }
  function O9(_, e) {
    _.dstFactor = Ut[e];
  }
  function W9(_, e) {
    _.endOfPassWriteIndex = e >>> 0;
  }
  function G9(_, e) {
    _.entries = e;
  }
  function z9(_, e) {
    _.entries = e;
  }
  function U9(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function q9(_, e, t) {
    _.entryPoint = A(e, t);
  }
  function H9(_, e) {
    _.externalTexture = e;
  }
  function j9(_, e) {
    _.failOp = Z_[e];
  }
  function N9(_, e) {
    _.format = be[e];
  }
  function J9(_, e) {
    _.format = $S[e];
  }
  function Q9(_, e) {
    _.format = be[e];
  }
  function X9(_, e) {
    _.format = be[e];
  }
  function Y9(_, e) {
    _.format = be[e];
  }
  function K9(_, e) {
    _.format = be[e];
  }
  function Z9(_, e) {
    _.format = be[e];
  }
  function eh(_, e) {
    _.fragment = e;
  }
  function _h(_, e) {
    _.frontFace = gS[e];
  }
  function th(_, e) {
    _.g = e;
  }
  function nh(_, e) {
    _.hasDynamicOffset = e !== 0;
  }
  function rh(_, e) {
    _.height = e >>> 0;
  }
  function ah(_, e) {
    _.height = e >>> 0;
  }
  function bh(_, e) {
    _.height = e >>> 0;
  }
  function ch(_, e, t) {
    _.label = A(e, t);
  }
  function oh(_, e, t) {
    _.label = A(e, t);
  }
  function sh(_, e, t) {
    _.label = A(e, t);
  }
  function ih(_, e, t) {
    _.label = A(e, t);
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
  function xh(_, e) {
    _.layout = e;
  }
  function yh(_, e) {
    _.layout = e;
  }
  function $h(_, e) {
    _.loadOp = K_[e];
  }
  function Sh(_, e) {
    _.lodMaxClamp = e;
  }
  function vh(_, e) {
    _.lodMinClamp = e;
  }
  function Ah(_, e) {
    _.magFilter = qt[e];
  }
  function Ih(_, e) {
    _.mappedAtCreation = e !== 0;
  }
  function Th(_, e) {
    _.mask = e >>> 0;
  }
  function Dh(_, e) {
    _.maxAnisotropy = e;
  }
  function Bh(_, e) {
    _.minBindingSize = e;
  }
  function Fh(_, e) {
    _.minFilter = qt[e];
  }
  function Ph(_, e) {
    _.mipLevel = e >>> 0;
  }
  function kh(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Mh(_, e) {
    _.mipLevelCount = e >>> 0;
  }
  function Ch(_, e) {
    _.mipmapFilter = wS[e];
  }
  function Vh(_, e) {
    _.module = e;
  }
  function Rh(_, e) {
    _.module = e;
  }
  function Eh(_, e) {
    _.multisample = e;
  }
  function Lh(_, e) {
    _.multisampled = e !== 0;
  }
  function Oh(_, e) {
    _.offset = e;
  }
  function Wh(_, e) {
    _.offset = e;
  }
  function Gh(_, e) {
    _.offset = e;
  }
  function zh(_, e) {
    _.operation = iS[e];
  }
  function Uh(_, e) {
    _.origin = e;
  }
  function qh(_, e) {
    _.passOp = Z_[e];
  }
  function Hh(_, e) {
    _.powerPreference = pS[e];
  }
  function jh(_, e) {
    _.primitive = e;
  }
  function Nh(_, e) {
    _.querySet = e;
  }
  function Jh(_, e) {
    _.r = e;
  }
  function Qh(_, e) {
    _.requiredFeatures = e;
  }
  function Xh(_, e) {
    _.requiredLimits = e;
  }
  function Yh(_, e) {
    _.resolveTarget = e;
  }
  function Kh(_, e) {
    _.resource = e;
  }
  function Zh(_, e) {
    _.rowsPerImage = e >>> 0;
  }
  function ex(_, e) {
    _.sampleCount = e >>> 0;
  }
  function _x(_, e) {
    _.sampleType = yS[e];
  }
  function tx(_, e) {
    _.sampler = e;
  }
  function nx(_, e) {
    _.shaderLocation = e >>> 0;
  }
  function rx(_, e) {
    _.signal = e;
  }
  function ax(_, e) {
    _.size = e;
  }
  function bx(_, e) {
    _.size = e;
  }
  function cx(_, e) {
    _.size = e;
  }
  function ox(_, e) {
    _.srcFactor = Ut[e];
  }
  function sx(_, e) {
    _.stencilBack = e;
  }
  function ix(_, e) {
    _.stencilClearValue = e >>> 0;
  }
  function fx(_, e) {
    _.stencilFront = e;
  }
  function ux(_, e) {
    _.stencilLoadOp = K_[e];
  }
  function dx(_, e) {
    _.stencilReadMask = e >>> 0;
  }
  function gx(_, e) {
    _.stencilReadOnly = e !== 0;
  }
  function wx(_, e) {
    _.stencilStoreOp = et[e];
  }
  function px(_, e) {
    _.stencilWriteMask = e >>> 0;
  }
  function lx(_, e) {
    _.stepMode = SS[e];
  }
  function mx(_, e) {
    _.storageTexture = e;
  }
  function hx(_, e) {
    _.storeOp = et[e];
  }
  function xx(_, e) {
    _.stripIndexFormat = Y_[e];
  }
  function yx(_, e) {
    _.targets = e;
  }
  function $x(_, e) {
    _.texture = e;
  }
  function Sx(_, e) {
    _.texture = e;
  }
  function vx(_, e) {
    _.timestampWrites = e;
  }
  function Ax(_, e) {
    _.topology = lS[e];
  }
  function Ix(_, e) {
    _.type = fS[e];
  }
  function Tx(_, e) {
    _.type = mS[e];
  }
  function Dx(_, e) {
    _.unclippedDepth = e !== 0;
  }
  function Bx(_, e) {
    _.usage = e >>> 0;
  }
  function Fx(_, e) {
    _.usage = e >>> 0;
  }
  function Px(_, e) {
    _.usage = e >>> 0;
  }
  function kx(_, e) {
    _.usage = e >>> 0;
  }
  function Mx(_, e) {
    _.vertex = e;
  }
  function Cx(_, e) {
    _.view = e;
  }
  function Vx(_, e) {
    _.view = e;
  }
  function Rx(_, e) {
    _.viewDimension = _t[e];
  }
  function Ex(_, e) {
    _.viewDimension = _t[e];
  }
  function Lx(_, e) {
    _.viewFormats = e;
  }
  function Ox(_, e) {
    _.viewFormats = e;
  }
  function Wx(_, e) {
    _.visibility = e >>> 0;
  }
  function Gx(_, e) {
    _.width = e >>> 0;
  }
  function zx(_, e) {
    _.width = e >>> 0;
  }
  function Ux(_, e) {
    _.width = e >>> 0;
  }
  function qx(_, e) {
    _.writeMask = e >>> 0;
  }
  function Hx(_, e) {
    _.x = e >>> 0;
  }
  function jx(_, e) {
    _.y = e >>> 0;
  }
  function Nx(_, e) {
    _.z = e >>> 0;
  }
  function Jx(_, e, t, n) {
    _.shaderSource(e, A(t, n));
  }
  function Qx(_, e, t, n) {
    _.shaderSource(e, A(t, n));
  }
  function Xx(_) {
    return _.signal;
  }
  function Yx(_, e) {
    const t = e.stack, n = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), r = M;
    k().setInt32(_ + 4, r, true), k().setInt32(_ + 0, n, true);
  }
  function Kx() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return y(_) ? 0 : D(_);
  }
  function Zx() {
    const _ = typeof global > "u" ? null : global;
    return y(_) ? 0 : D(_);
  }
  function ey() {
    const _ = typeof self > "u" ? null : self;
    return y(_) ? 0 : D(_);
  }
  function _y() {
    const _ = typeof window > "u" ? null : window;
    return y(_) ? 0 : D(_);
  }
  function ty(_, e) {
    const t = e.statusText, n = G(t, i.__wbindgen_malloc, i.__wbindgen_realloc), r = M;
    k().setInt32(_ + 4, r, true), k().setInt32(_ + 0, n, true);
  }
  function ny(_) {
    return _.status;
  }
  function ry(_, e, t, n, r) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, n, r >>> 0);
  }
  function ay(_, e, t, n, r) {
    _.stencilFuncSeparate(e >>> 0, t >>> 0, n, r >>> 0);
  }
  function by(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function cy(_, e, t) {
    _.stencilMaskSeparate(e >>> 0, t >>> 0);
  }
  function oy(_, e) {
    _.stencilMask(e >>> 0);
  }
  function sy(_, e) {
    _.stencilMask(e >>> 0);
  }
  function iy(_, e, t, n, r) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, n >>> 0, r >>> 0);
  }
  function fy(_, e, t, n, r) {
    _.stencilOpSeparate(e >>> 0, t >>> 0, n >>> 0, r >>> 0);
  }
  function uy(_, e) {
    _.submit(e);
  }
  function dy() {
    return g(function(_, e, t, n, r, a, b, c, o, s) {
      _.texImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function gy() {
    return g(function(_, e, t, n, r, a, b, c, o, s) {
      _.texImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function wy() {
    return g(function(_, e, t, n, r, a, b, c, o, s) {
      _.texImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function py() {
    return g(function(_, e, t, n, r, a, b, c, o, s, d) {
      _.texImage3D(e >>> 0, t, n, r, a, b, c, o >>> 0, s >>> 0, d);
    }, arguments);
  }
  function ly() {
    return g(function(_, e, t, n, r, a, b, c, o, s, d) {
      _.texImage3D(e >>> 0, t, n, r, a, b, c, o >>> 0, s >>> 0, d);
    }, arguments);
  }
  function my(_, e, t, n) {
    _.texParameteri(e >>> 0, t >>> 0, n);
  }
  function hy(_, e, t, n) {
    _.texParameteri(e >>> 0, t >>> 0, n);
  }
  function xy(_, e, t, n, r, a) {
    _.texStorage2D(e >>> 0, t, n >>> 0, r, a);
  }
  function yy(_, e, t, n, r, a, b) {
    _.texStorage3D(e >>> 0, t, n >>> 0, r, a, b);
  }
  function $y() {
    return g(function(_, e, t, n, r, a, b, c, o, s) {
      _.texSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function Sy() {
    return g(function(_, e, t, n, r, a, b, c, o, s) {
      _.texSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function vy() {
    return g(function(_, e, t, n, r, a, b, c, o, s) {
      _.texSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function Ay() {
    return g(function(_, e, t, n, r, a, b, c, o, s) {
      _.texSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function Iy() {
    return g(function(_, e, t, n, r, a, b, c, o, s) {
      _.texSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function Ty() {
    return g(function(_, e, t, n, r, a, b, c, o, s) {
      _.texSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function Dy() {
    return g(function(_, e, t, n, r, a, b, c, o, s) {
      _.texSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function By() {
    return g(function(_, e, t, n, r, a, b, c, o, s) {
      _.texSubImage2D(e >>> 0, t, n, r, a, b, c >>> 0, o >>> 0, s);
    }, arguments);
  }
  function Fy() {
    return g(function(_, e, t, n, r, a, b, c, o, s, d, v) {
      _.texSubImage3D(e >>> 0, t, n, r, a, b, c, o, s >>> 0, d >>> 0, v);
    }, arguments);
  }
  function Py() {
    return g(function(_, e, t, n, r, a, b, c, o, s, d, v) {
      _.texSubImage3D(e >>> 0, t, n, r, a, b, c, o, s >>> 0, d >>> 0, v);
    }, arguments);
  }
  function ky() {
    return g(function(_, e, t, n, r, a, b, c, o, s, d, v) {
      _.texSubImage3D(e >>> 0, t, n, r, a, b, c, o, s >>> 0, d >>> 0, v);
    }, arguments);
  }
  function My() {
    return g(function(_, e, t, n, r, a, b, c, o, s, d, v) {
      _.texSubImage3D(e >>> 0, t, n, r, a, b, c, o, s >>> 0, d >>> 0, v);
    }, arguments);
  }
  function Cy() {
    return g(function(_, e, t, n, r, a, b, c, o, s, d, v) {
      _.texSubImage3D(e >>> 0, t, n, r, a, b, c, o, s >>> 0, d >>> 0, v);
    }, arguments);
  }
  function Vy() {
    return g(function(_, e, t, n, r, a, b, c, o, s, d, v) {
      _.texSubImage3D(e >>> 0, t, n, r, a, b, c, o, s >>> 0, d >>> 0, v);
    }, arguments);
  }
  function Ry() {
    return g(function(_, e, t, n, r, a, b, c, o, s, d, v) {
      _.texSubImage3D(e >>> 0, t, n, r, a, b, c, o, s >>> 0, d >>> 0, v);
    }, arguments);
  }
  function Ey(_, e, t) {
    return _.then(e, t);
  }
  function Ly(_, e, t) {
    return _.then(e, t);
  }
  function Oy(_, e) {
    return _.then(e);
  }
  function Wy(_, e, t) {
    _.uniform1f(e, t);
  }
  function Gy(_, e, t) {
    _.uniform1f(e, t);
  }
  function zy(_, e, t) {
    _.uniform1i(e, t);
  }
  function Uy(_, e, t) {
    _.uniform1i(e, t);
  }
  function qy(_, e, t) {
    _.uniform1ui(e, t >>> 0);
  }
  function Hy(_, e, t, n) {
    _.uniform2fv(e, L(t, n));
  }
  function jy(_, e, t, n) {
    _.uniform2fv(e, L(t, n));
  }
  function Ny(_, e, t, n) {
    _.uniform2iv(e, Z(t, n));
  }
  function Jy(_, e, t, n) {
    _.uniform2iv(e, Z(t, n));
  }
  function Qy(_, e, t, n) {
    _.uniform2uiv(e, $e(t, n));
  }
  function Xy(_, e, t, n) {
    _.uniform3fv(e, L(t, n));
  }
  function Yy(_, e, t, n) {
    _.uniform3fv(e, L(t, n));
  }
  function Ky(_, e, t, n) {
    _.uniform3iv(e, Z(t, n));
  }
  function Zy(_, e, t, n) {
    _.uniform3iv(e, Z(t, n));
  }
  function e$(_, e, t, n) {
    _.uniform3uiv(e, $e(t, n));
  }
  function _$(_, e, t, n, r, a) {
    _.uniform4f(e, t, n, r, a);
  }
  function t$(_, e, t, n, r, a) {
    _.uniform4f(e, t, n, r, a);
  }
  function n$(_, e, t, n) {
    _.uniform4fv(e, L(t, n));
  }
  function r$(_, e, t, n) {
    _.uniform4fv(e, L(t, n));
  }
  function a$(_, e, t, n) {
    _.uniform4iv(e, Z(t, n));
  }
  function b$(_, e, t, n) {
    _.uniform4iv(e, Z(t, n));
  }
  function c$(_, e, t, n) {
    _.uniform4uiv(e, $e(t, n));
  }
  function o$(_, e, t, n) {
    _.uniformBlockBinding(e, t >>> 0, n >>> 0);
  }
  function s$(_, e, t, n, r) {
    _.uniformMatrix2fv(e, t !== 0, L(n, r));
  }
  function i$(_, e, t, n, r) {
    _.uniformMatrix2fv(e, t !== 0, L(n, r));
  }
  function f$(_, e, t, n, r) {
    _.uniformMatrix2x3fv(e, t !== 0, L(n, r));
  }
  function u$(_, e, t, n, r) {
    _.uniformMatrix2x4fv(e, t !== 0, L(n, r));
  }
  function d$(_, e, t, n, r) {
    _.uniformMatrix3fv(e, t !== 0, L(n, r));
  }
  function g$(_, e, t, n, r) {
    _.uniformMatrix3fv(e, t !== 0, L(n, r));
  }
  function w$(_, e, t, n, r) {
    _.uniformMatrix3x2fv(e, t !== 0, L(n, r));
  }
  function p$(_, e, t, n, r) {
    _.uniformMatrix3x4fv(e, t !== 0, L(n, r));
  }
  function l$(_, e, t, n, r) {
    _.uniformMatrix4fv(e, t !== 0, L(n, r));
  }
  function m$(_, e, t, n, r) {
    _.uniformMatrix4fv(e, t !== 0, L(n, r));
  }
  function h$(_, e, t, n, r) {
    _.uniformMatrix4x2fv(e, t !== 0, L(n, r));
  }
  function x$(_, e, t, n, r) {
    _.uniformMatrix4x3fv(e, t !== 0, L(n, r));
  }
  function y$(_) {
    _.unmap();
  }
  function $$(_, e) {
    _.useProgram(e);
  }
  function S$(_, e) {
    _.useProgram(e);
  }
  function v$(_) {
    return _.value;
  }
  function A$(_, e, t) {
    _.vertexAttribDivisorANGLE(e >>> 0, t >>> 0);
  }
  function I$(_, e, t) {
    _.vertexAttribDivisor(e >>> 0, t >>> 0);
  }
  function T$(_, e, t, n, r, a) {
    _.vertexAttribIPointer(e >>> 0, t, n >>> 0, r, a);
  }
  function D$(_, e, t, n, r, a, b) {
    _.vertexAttribPointer(e >>> 0, t, n >>> 0, r !== 0, a, b);
  }
  function B$(_, e, t, n, r, a, b) {
    _.vertexAttribPointer(e >>> 0, t, n >>> 0, r !== 0, a, b);
  }
  function F$(_, e, t, n, r) {
    _.viewport(e, t, n, r);
  }
  function P$(_, e, t, n, r) {
    _.viewport(e, t, n, r);
  }
  function k$(_, e, t, n) {
    console.warn(_, e, t, n);
  }
  function M$(_) {
    return _.width;
  }
  function C$(_) {
    return _.width;
  }
  function V$() {
    return g(function(_, e, t, n, r, a, b) {
      _.writeBuffer(e, t, i_(n, r), a, b);
    }, arguments);
  }
  function R$() {
    return g(function(_, e, t, n, r, a) {
      _.writeTexture(e, i_(t, n), r, a);
    }, arguments);
  }
  function E$(_, e) {
    return ce(_, e, nS);
  }
  function L$(_, e) {
    return ce(_, e, cS);
  }
  function O$(_, e) {
    return ce(_, e, sS);
  }
  function W$(_, e) {
    return ce(_, e, rS);
  }
  function G$(_, e) {
    return ce(_, e, aS);
  }
  function z$(_, e) {
    return ce(_, e, bS);
  }
  function U$(_, e) {
    return ce(_, e, tS);
  }
  function q$(_) {
    return _;
  }
  function H$(_) {
    return _;
  }
  function j$(_, e) {
    return L(_, e);
  }
  function N$(_, e) {
    return vS(_, e);
  }
  function J$(_, e) {
    return Z(_, e);
  }
  function Q$(_, e) {
    return AS(_, e);
  }
  function X$(_, e) {
    return IS(_, e);
  }
  function Y$(_, e) {
    return $e(_, e);
  }
  function K$(_, e) {
    return i_(_, e);
  }
  function Z$(_, e) {
    return A(_, e);
  }
  function eS(_) {
    return BigInt.asUintN(64, _);
  }
  function _S() {
    const _ = i.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  function tS(_, e) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_(_, e);
  }
  function nS(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_(_, e, t);
  }
  function rS(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_(_, e, t);
  }
  function aS(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4(_, e, t);
  }
  function bS(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5(_, e, t);
  }
  function cS(_, e, t) {
    const n = i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_(_, e, t);
    if (n[1]) throw P(n[0]);
  }
  function oS(_, e, t, n) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_(_, e, t, n);
  }
  function sS(_, e, t) {
    i.wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_(_, e, t);
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
  ], K_ = [
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
  ], Z_ = [
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
  ], et = [
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
  ], yS = [
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
  ], SS = [
    "vertex",
    "instance"
  ], yt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbg_handle_free(_, 1)), l_ = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbg_proteusapp_free(_, 1)), $t = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbg_texturehandle_free(_, 1)), St = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbg_transitionchannel_free(_, 1)), vt = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => i.__wbg_videohandle_free(_, 1));
  function D(_) {
    const e = i.__externref_table_alloc();
    return i.__wbindgen_externrefs.set(e, _), e;
  }
  function m(_, e) {
    if (!(_ instanceof e)) throw new Error(`expected instance of ${e.name}`);
  }
  const At = typeof FinalizationRegistry > "u" ? {
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
      const r = _.description;
      return r == null ? "Symbol" : `Symbol(${r})`;
    }
    if (e == "function") {
      const r = _.name;
      return typeof r == "string" && r.length > 0 ? `Function(${r})` : "Function";
    }
    if (Array.isArray(_)) {
      const r = _.length;
      let a = "[";
      r > 0 && (a += M_(_[0]));
      for (let b = 1; b < r; b++) a += ", " + M_(_[b]);
      return a += "]", a;
    }
    const t = /\[object ([^\]]+)\]/.exec(toString.call(_));
    let n;
    if (t && t.length > 1) n = t[1];
    else return toString.call(_);
    if (n == "Object") try {
      return "Object(" + JSON.stringify(_) + ")";
    } catch {
      return "Object";
    }
    return _ instanceof Error ? `${_.name}: ${_.message}
${_.stack}` : n;
  }
  function L(_, e) {
    return _ = _ >>> 0, TS().subarray(_ / 4, _ / 4 + e);
  }
  function vS(_, e) {
    return _ = _ >>> 0, BS().subarray(_ / 2, _ / 2 + e);
  }
  function Z(_, e) {
    return _ = _ >>> 0, FS().subarray(_ / 4, _ / 4 + e);
  }
  function AS(_, e) {
    return _ = _ >>> 0, PS().subarray(_ / 1, _ / 1 + e);
  }
  function IS(_, e) {
    return _ = _ >>> 0, kS().subarray(_ / 2, _ / 2 + e);
  }
  function $e(_, e) {
    return _ = _ >>> 0, MS().subarray(_ / 4, _ / 4 + e);
  }
  function i_(_, e) {
    return _ = _ >>> 0, me().subarray(_ / 1, _ / 1 + e);
  }
  let ie = null;
  function k() {
    return (ie === null || ie.buffer.detached === true || ie.buffer.detached === void 0 && ie.buffer !== i.memory.buffer) && (ie = new DataView(i.memory.buffer)), ie;
  }
  let Ne = null;
  function TS() {
    return (Ne === null || Ne.byteLength === 0) && (Ne = new Float32Array(i.memory.buffer)), Ne;
  }
  let Je = null;
  function DS() {
    return (Je === null || Je.byteLength === 0) && (Je = new Float64Array(i.memory.buffer)), Je;
  }
  let Qe = null;
  function BS() {
    return (Qe === null || Qe.byteLength === 0) && (Qe = new Int16Array(i.memory.buffer)), Qe;
  }
  let Xe = null;
  function FS() {
    return (Xe === null || Xe.byteLength === 0) && (Xe = new Int32Array(i.memory.buffer)), Xe;
  }
  let Ye = null;
  function PS() {
    return (Ye === null || Ye.byteLength === 0) && (Ye = new Int8Array(i.memory.buffer)), Ye;
  }
  function A(_, e) {
    return VS(_ >>> 0, e);
  }
  let Ke = null;
  function kS() {
    return (Ke === null || Ke.byteLength === 0) && (Ke = new Uint16Array(i.memory.buffer)), Ke;
  }
  let Ze = null;
  function MS() {
    return (Ze === null || Ze.byteLength === 0) && (Ze = new Uint32Array(i.memory.buffer)), Ze;
  }
  let e_ = null;
  function me() {
    return (e_ === null || e_.byteLength === 0) && (e_ = new Uint8Array(i.memory.buffer)), e_;
  }
  function g(_, e) {
    try {
      return _.apply(this, e);
    } catch (t) {
      const n = D(t);
      i.__wbindgen_exn_store(n);
    }
  }
  function y(_) {
    return _ == null;
  }
  function ce(_, e, t) {
    const n = {
      a: _,
      b: e,
      cnt: 1
    }, r = (...a) => {
      n.cnt++;
      const b = n.a;
      n.a = 0;
      try {
        return t(b, n.b, ...a);
      } finally {
        n.a = b, r._wbg_cb_unref();
      }
    };
    return r._wbg_cb_unref = () => {
      --n.cnt === 0 && (i.__wbindgen_destroy_closure(n.a, n.b), n.a = 0, At.unregister(n));
    }, At.register(r, n, n), r;
  }
  function m_(_, e) {
    const t = e(_.length * 1, 1) >>> 0;
    return me().set(_, t / 1), M = _.length, t;
  }
  function __(_, e) {
    const t = e(_.length * 8, 8) >>> 0;
    return DS().set(_, t / 8), M = _.length, t;
  }
  function G(_, e, t) {
    if (t === void 0) {
      const c = Ae.encode(_), o = e(c.length, 1) >>> 0;
      return me().subarray(o, o + c.length).set(c), M = c.length, o;
    }
    let n = _.length, r = e(n, 1) >>> 0;
    const a = me();
    let b = 0;
    for (; b < n; b++) {
      const c = _.charCodeAt(b);
      if (c > 127) break;
      a[r + b] = c;
    }
    if (b !== n) {
      b !== 0 && (_ = _.slice(b)), r = t(r, n, n = b + _.length * 3, 1) >>> 0;
      const c = me().subarray(r + b, r + n), o = Ae.encodeInto(_, c);
      b += o.written, r = t(r, n, b, 1) >>> 0;
    }
    return M = b, r;
  }
  function P(_) {
    const e = i.__wbindgen_externrefs.get(_);
    return i.__externref_table_dealloc(_), e;
  }
  let r_ = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  r_.decode();
  const CS = 2146435072;
  let h_ = 0;
  function VS(_, e) {
    return h_ += e, h_ >= CS && (r_ = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), r_.decode(), h_ = e), r_.decode(me().subarray(_, _ + e));
  }
  const Ae = new TextEncoder();
  "encodeInto" in Ae || (Ae.encodeInto = function(_, e) {
    const t = Ae.encode(_);
    return e.set(t), {
      read: _.length,
      written: t.length
    };
  });
  let M = 0, i;
  function RS(_) {
    i = _;
  }
  URL = globalThis.URL;
  const ES = await L_({
    "./proteus_bench_web_bg.js": {
      __wbg_call_5575218572ead796: M4,
      __wbg_new_typed_00a409eb4ec4f2d9: q5,
      __wbg_then_05edfc8a4fea5106: Ey,
      __wbg_get_197a3fe98f169e38: S6,
      __wbg_next_0c4066e251d2eff9: j5,
      __wbg_done_b62d4a7d2286852a: d7,
      __wbg_value_49f783bb59765962: v$,
      __wbg_get_unchecked_54a4374c38e08460: I6,
      __wbg_length_c6054974c0a6cdb9: K6,
      __wbg_new_227d7c05414eb861: L5,
      __wbg_stack_3b0d974bbf31e44f: Yx,
      __wbg_error_a6fa202b58aa1cd3: k7,
      __wbg_proteusapp_new: c8,
      __wbg_instanceof_Map_afa18d5840c04c15: O6,
      __wbg_set_dc601f4a69da0bc2: $9,
      __wbg_call_8e98ed2f3c86c4b5: C4,
      __wbg_call_0e855b388e315e17: k4,
      __wbg_get_with_ref_key_6412cf3094599694: T6,
      __wbg_set_6be42768c690e380: z8,
      __wbg_String_8564e559799eccda: Il,
      __wbg_instanceof_GpuCanvasContext_1a39fd0621603553: E6,
      __wbg_maxTextureDimension1D_e09f86e22ea6bac9: A5,
      __wbg_maxTextureDimension2D_2631916ef9a3efa8: I5,
      __wbg_maxTextureDimension3D_06ee54121b37d431: T5,
      __wbg_maxTextureArrayLayers_c2bf9c85285832d4: v5,
      __wbg_maxBindGroups_14611ac9ed1c6b56: a5,
      __wbg_maxBindingsPerBindGroup_dd3f66044d2a9bfb: b5,
      __wbg_maxDynamicUniformBuffersPerPipelineLayout_6d6cf80f3bd08e52: l5,
      __wbg_maxDynamicStorageBuffersPerPipelineLayout_29399b82af020d86: p5,
      __wbg_maxSampledTexturesPerShaderStage_618a49f33217dde2: h5,
      __wbg_maxSamplersPerShaderStage_aa09fa0311712a1a: x5,
      __wbg_maxStorageBuffersPerShaderStage_0cca5b468fcf10b6: $5,
      __wbg_maxStorageTexturesPerShaderStage_9d6c35770f37866c: S5,
      __wbg_maxUniformBuffersPerShaderStage_f871b70865df8c11: B5,
      __wbg_maxUniformBufferBindingSize_af9e8a077907ed64: D5,
      __wbg_maxStorageBufferBindingSize_0ec83ae10ad73180: y5,
      __wbg_maxVertexBuffers_9c61c5fd286ebcc6: k5,
      __wbg_maxBufferSize_f7ce3e1856349d2f: c5,
      __wbg_maxVertexAttributes_e72dabb2714f5cf5: F5,
      __wbg_maxVertexBufferArrayStride_6a1cd814386082ce: P5,
      __wbg_maxInterStageShaderVariables_8b000f47a166b1d5: m5,
      __wbg_minUniformBufferOffsetAlignment_58b69e1c3924f6a4: C5,
      __wbg_minStorageBufferOffsetAlignment_e214f59628fb3558: M5,
      __wbg_maxColorAttachments_fd9187f9f786da18: s5,
      __wbg_maxColorAttachmentBytesPerSample_55e64194645ea041: o5,
      __wbg_maxComputeWorkgroupStorageSize_fac26e89d99e08f9: g5,
      __wbg_maxComputeInvocationsPerWorkgroup_9b3b1fc261129782: i5,
      __wbg_maxComputeWorkgroupSizeX_c55bbbcc02b75241: f5,
      __wbg_maxComputeWorkgroupSizeY_96f40b1ec3102a3a: u5,
      __wbg_maxComputeWorkgroupSizeZ_c2b1061d521561bb: d5,
      __wbg_maxComputeWorkgroupsPerDimension_cd001f910e9b4d70: w5,
      __wbg_description_18d0a6d4077fec8e: a7,
      __wbg_set_dst_factor_1ed75271a89a711e: O9,
      __wbg_set_operation_b5862f5a1a143b30: zh,
      __wbg_set_src_factor_1c4f755f8676df1b: ox,
      __wbg_set_texture_16d2be474ce6ad0c: $x,
      __wbg_set_mip_level_246db61be15bdd69: Ph,
      __wbg_set_x_56f0c2c08a62725c: Hx,
      __wbg_set_y_04fb8ce84735b4e1: jx,
      __wbg_set_z_a51316db27a4941e: Nx,
      __wbg_set_origin_9b3b0fbe0a5dc469: Uh,
      __wbg_set_aspect_77332ac136ee94eb: Z8,
      __wbg_Window_a07901001eb4269f: Tl,
      __wbg_gpu_a7c12045c25d009a: D6,
      __wbg_WorkerGlobalScope_d1b9459d53a39f3d: Dl,
      __wbg_set_a_5f6e488475272136: U8,
      __wbg_set_b_688365d692bba214: t9,
      __wbg_set_g_d4d1d77cf8fdd362: th,
      __wbg_set_r_527e5a41c4b1a846: Jh,
      __wbg_instanceof_GpuAdapter_fc7b89fc546de0bc: R6,
      __wbg_queue_65d985f3e6d786a6: w8,
      __wbg_set_power_preference_c0d3fa7ce46b1a2e: Hh,
      __wbg_requestAdapter_9ff5c9d1ff271165: S8,
      __wbg_set_required_limits_3b031f66f838f4e3: Xh,
      __wbg_set_required_features_54918de8185c5fab: Qh,
      __wbg_set_label_bae57fb9f24fde5c: dh,
      __wbg_requestDevice_c1c34f88a477e509: I8,
      __wbg_limits_50a8c5e629dbfe40: e5,
      __wbg_info_22dcf1fd1b12bc7d: M6,
      __wbg_set_size_41cd9255ca1e4242: bx,
      __wbg_set_usage_908213a4d4bb8bde: Px,
      __wbg_set_mapped_at_creation_48de4735fab51e78: Ih,
      __wbg_set_label_cd567b7b35838e4c: ph,
      __wbg_createBuffer_2f08c0205e04efca: im,
      __wbg_set_address_mode_u_a37cf1035585c638: H8,
      __wbg_set_address_mode_v_8ac049e029caef76: j8,
      __wbg_set_address_mode_w_eb9260ee11729e92: N8,
      __wbg_set_compare_42211fbf15e3b850: h9,
      __wbg_set_lod_max_clamp_3f157633f32c9f94: Sh,
      __wbg_set_lod_min_clamp_7e246c739fb1a854: vh,
      __wbg_set_mag_filter_69d846b974d4bcc0: Ah,
      __wbg_set_min_filter_fbf2d8d9f503dcd7: Fh,
      __wbg_set_mipmap_filter_17fd50a3898fd5ff: Ch,
      __wbg_set_max_anisotropy_3ef0d5bca2336cc7: Dh,
      __wbg_set_label_dcd98efbb9370da8: mh,
      __wbg_createSampler_248bd67c920af37d: $m,
      __wbg_set_width_1a5e2e86fa5bdcd8: zx,
      __wbg_set_height_e8b5483b8c117d5e: ah,
      __wbg_set_depth_or_array_layers_4bbbeadacb393f02: F9,
      __wbg_set_format_e9d4b1475bb3bd3b: K9,
      __wbg_set_size_a61ff22205255d61: cx,
      __wbg_set_usage_7fa9cd18d1104aca: Fx,
      __wbg_set_label_0c1bd0e976cf0a9a: oh,
      __wbg_set_dimension_36e13ccecae5af4b: L9,
      __wbg_set_mip_level_count_b19a0d9192e62d5d: Mh,
      __wbg_set_sample_count_865e1d19b84e27e6: ex,
      __wbg_push_f724b5db8acf89d2: s8,
      __wbg_set_view_formats_bab284fc81b40e70: Lx,
      __wbg_createTexture_9e76b80a2dc0d12e: Bm,
      __wbg_set_entries_fc76ca4d7da6a709: z9,
      __wbg_set_layout_eeef59714f5bf48b: yh,
      __wbg_set_label_f92ae11c77d74198: hh,
      __wbg_createBindGroup_2320df4db188406c: om,
      __wbg_set_code_56e2d45ec1ff6c2d: w9,
      __wbg_set_label_be45aed56e4b9fee: gh,
      __wbg_createShaderModule_53701de4fb271c90: vm,
      __wbg_set_label_d1c24b5a7a3ac31d: lh,
      __wbg_createCommandEncoder_cd88faca35d9ed68: um,
      __wbg_set_bind_group_layouts_5325d038771af328: b9,
      __wbg_set_label_2f592bd1be3db6b3: fh,
      __wbg_createPipelineLayout_7a186f2e9bf0d605: wm,
      __wbg_set_module_14e471fdd94c582d: Rh,
      __wbg_set_entry_point_8db3b6d103e3b865: q9,
      __wbg_set_buffers_85a7238f4ef28ab4: u9,
      __wbg_set_layout_7c5ba5bdcde8a0f0: xh,
      __wbg_set_vertex_a4951dd9a7a4ed54: Mx,
      __wbg_set_label_c47c451211e2f6d2: wh,
      __wbg_set_format_f9341112e43ea182: Z9,
      __wbg_set_depth_compare_30e9ea552da12fe2: T9,
      __wbg_set_depth_write_enabled_64c2e7f6fa4b6b7b: V9,
      __wbg_set_depth_bias_428c9340b0fd937b: S9,
      __wbg_set_depth_bias_clamp_f009599ca67fa30c: v9,
      __wbg_set_depth_bias_slope_scale_7125880b4cb7a951: A9,
      __wbg_set_compare_1509dc1a5420943f: m9,
      __wbg_set_depth_fail_op_5e42dc3e4c382951: D9,
      __wbg_set_fail_op_77ab26c98f847b65: j9,
      __wbg_set_pass_op_e9470d1262fb8a8b: qh,
      __wbg_set_stencil_back_6ef4683123b19b25: sx,
      __wbg_set_stencil_front_aeb8580a97e5424b: fx,
      __wbg_set_stencil_read_mask_2954f260d47349ea: dx,
      __wbg_set_stencil_write_mask_3f8e9b3781814a95: px,
      __wbg_set_depth_stencil_1bd50dbc450c8650: k9,
      __wbg_set_module_08ad08e736d8edbf: Vh,
      __wbg_set_targets_6b0b3bdd87f35668: yx,
      __wbg_set_entry_point_6fec5723cc790927: U9,
      __wbg_set_fragment_1a595620425637e1: eh,
      __wbg_set_count_26a934d1cd07d080: x9,
      __wbg_set_mask_0c49a66362fc0079: Th,
      __wbg_set_alpha_to_coverage_enabled_b4ce9c3f7f8b7ad7: X8,
      __wbg_set_multisample_85f073947b782d07: Eh,
      __wbg_set_cull_mode_9d466c1ab414cac8: y9,
      __wbg_set_front_face_50cdf4eb61504a46: _h,
      __wbg_set_strip_index_format_0cd0510e166c4ec4: xx,
      __wbg_set_topology_beefb3aca0612b00: Ax,
      __wbg_set_unclipped_depth_5a4f7eb57fe006b2: Dx,
      __wbg_set_primitive_369241acd17871f1: jh,
      __wbg_createRenderPipeline_f48187ba9f7701e8: hm,
      __wbg_set_entries_3017e6132f938c6e: G9,
      __wbg_set_label_1175a3329a06e52b: sh,
      __wbg_createBindGroupLayout_9ea1a44942aaf13e: cm,
      __wbg_limits_1c25cb4f379a4418: Z6,
      __wbg_set_color_attachments_abe67f6631926e28: p9,
      __wbg_set_label_8fd860a36d2c7b74: uh,
      __wbg_set_view_dbd0294573f64d05: Vx,
      __wbg_set_depth_clear_value_442bf492734f63b6: I9,
      __wbg_set_depth_load_op_34d430b74bb36d91: B9,
      __wbg_set_depth_store_op_0ea0a215313dbda7: C9,
      __wbg_set_depth_read_only_138a11b10c731094: P9,
      __wbg_set_stencil_clear_value_10b58f674d0177c2: ix,
      __wbg_set_stencil_load_op_f20a90a66acd3d8c: ux,
      __wbg_set_stencil_store_op_477c4cf6422dfa3f: wx,
      __wbg_set_stencil_read_only_fb489d191b6d969b: gx,
      __wbg_set_depth_stencil_attachment_1ee0d93bc3273369: M9,
      __wbg_set_query_set_18679a8580267d5a: Nh,
      __wbg_set_beginning_of_pass_write_index_27be5b0b35ec3de0: a9,
      __wbg_set_end_of_pass_write_index_e8f52fc08bc0603e: W9,
      __wbg_set_timestamp_writes_c552d52fbb417005: vx,
      __wbg_beginRenderPass_10e1d8bb36f2f74e: Zl,
      __wbg_copyTextureToTexture_1be188df1e535c0a: bm,
      __wbg_label_47480289cc2bce71: X6,
      __wbg_set_label_2d2227f4d5991e50: ih,
      __wbg_finish_cfaeede3baf55be1: E7,
      __wbg_finish_087cb89c65c06eb1: R7,
      __wbg_drawIndexed_68637ebab6dd8d6e: $7,
      __wbg_setPipeline_bab24dbce96903b9: R8,
      __wbg_setViewport_f9d423db4f4b4b58: O8,
      __wbg_setBindGroup_4ba56e1e0d26f244: k8,
      __wbg_setBindGroup_6124849cc8547086: M8,
      __wbg_setIndexBuffer_17431786d06c1b7c: C8,
      __wbg_setIndexBuffer_a16ed5b869c87507: V8,
      __wbg_setVertexBuffer_b508baf8d0ffe331: L8,
      __wbg_setVertexBuffer_91c4b602d0289943: E8,
      __wbg_end_414453a89205612c: D7,
      __wbg_getPreferredCanvasFormat_1b8495aeb1d11ab1: c6,
      __wbg_getCurrentTexture_51975ae7185fd15f: e6,
      __wbg_set_device_0d774b66e7288f72: R9,
      __wbg_set_format_d347899cd860709c: Y9,
      __wbg_set_usage_ae014e77ff77ce06: kx,
      __wbg_set_alpha_mode_92402195b3ae1ee7: Q8,
      __wbg_set_view_formats_fe531a043efb71fa: Ox,
      __wbg_configure_3d64c677c7d68a15: em,
      __wbg_writeBuffer_b4bdd36178348ca5: V$,
      __wbg_set_bytes_per_row_91681ca78d744888: d9,
      __wbg_set_rows_per_image_d198b7e73a38978b: Zh,
      __wbg_set_offset_a097a8050a3a9a33: Gh,
      __wbg_writeTexture_b45b69132e46a227: R$,
      __wbg_onSubmittedWorkDone_1460145eecea40ef: e8,
      __wbg_submit_1290d44bb76ecef4: uy,
      __wbg_getMappedRange_5ed22727c9679168: r6,
      __wbg_unmap_8f06698a75b8331a: y$,
      __wbg_destroy_b5b39f25f0799295: b7,
      __wbg_mapAsync_bb0029907dd91181: r5,
      __wbg_set_dimension_174ad7e2fb67fb4e: E9,
      __wbg_set_format_90860b0321868db4: Q9,
      __wbg_set_aspect_a823a14d00d42d37: e9,
      __wbg_set_base_array_layer_cc6c68d233489c4b: n9,
      __wbg_set_array_layer_count_daec613068108a9d: Y8,
      __wbg_set_base_mip_level_e07a3efe9006d5ea: r9,
      __wbg_set_mip_level_count_72f8bc1f80f7539b: kh,
      __wbg_set_label_03d2396d4655a3e1: ch,
      __wbg_set_usage_7f0dda8309469b1c: Bx,
      __wbg_createView_cc96b5bdd3d5bf5e: km,
      __wbg_set_min_binding_size_689661b9ed25e083: Bh,
      __wbg_set_has_dynamic_offset_7d30014fdbfe90c5: nh,
      __wbg_set_type_38961e08504ca674: Ix,
      __wbg_requestAdapter_c46930b8bc33722d: v8,
      __wbg_set_alpha_aa2e606e9e647b21: J8,
      __wbg_set_color_bc393d7efc3c8594: l9,
      __wbg_set_visibility_1bca121a89accba5: Wx,
      __wbg_set_storage_texture_ab9eed9786337ef0: mx,
      __wbg_set_external_texture_825fe2bc7a0c0603: H9,
      __wbg_set_binding_b6b0fe5c281b8c69: c9,
      __wbg_set_buffer_e89095a9f0cafad3: f9,
      __wbg_set_sampler_8c5d7fb1b02058c6: tx,
      __wbg_set_texture_e25a73da75cf5808: Sx,
      __wbg_set_view_dimension_263387976511ebc9: Rx,
      __wbg_set_format_1786adb7bc74c7c9: N9,
      __wbg_set_access_091f317905cd76a5: q8,
      __wbg_set_format_abf7a1bc5425c56a: X9,
      __wbg_set_blend_8d6e9c08b5702a09: s9,
      __wbg_set_write_mask_144b25e2bd909124: qx,
      __wbg_set_load_op_56844f51434037bf: $h,
      __wbg_set_store_op_caeede4654b3d847: hx,
      __wbg_set_view_bdeab150b5f0768c: Cx,
      __wbg_set_clear_value_642701f928a5ccb3: g9,
      __wbg_set_resolve_target_fe76b3f99cf72078: Yh,
      __wbg_set_buffer_55f096330c8912b4: i9,
      __wbg_set_offset_73156b0e0b41d79a: Oh,
      __wbg_set_size_1e6281b07cd39177: ax,
      __wbg_set_binding_f3c188a8cd21455b: o9,
      __wbg_set_resource_fe385d2e3dadaf63: Kh,
      __wbg_set_format_6606f5c1fba6f459: J9,
      __wbg_set_offset_8d9d9afffa18b591: Wh,
      __wbg_set_shader_location_0ff30a733291a396: nx,
      __wbg_set_array_stride_c2c009eabc18b5f6: K8,
      __wbg_set_attributes_05f9117fd32ca606: _9,
      __wbg_set_step_mode_a35aef328761c452: lx,
      __wbg_set_type_c1eebc19f8a6aeb9: Tx,
      __wbg_set_multisampled_40505c1381e1c32c: Lh,
      __wbg_set_sample_type_7088b1efddce6a69: _x,
      __wbg_set_view_dimension_3ed01b237e85826f: Ex,
      __wbg_includes_83dff8d05da243c5: k6,
      __wbg_clearBufferuiv_1d2d93401c0904a3: E4,
      __wbg_compressedTexSubImage2D_7f963168c14c0082: X4,
      __wbg_compressedTexSubImage3D_73e1f9f3aa71a2da: K4,
      __wbg_compressedTexSubImage3D_e47c04fef5551d29: Z4,
      __wbg_copyBufferSubData_a944f33b601b822d: tm,
      __wbg_clientWaitSync_7580165bd2eff461: q4,
      __wbg_compressedTexSubImage2D_9d66d6214713bbfb: Y4,
      __wbg_copyTexSubImage3D_8ba04135d122a27a: am,
      __wbg_createQuery_f013132b870a71ef: mm,
      __wbg_createSampler_9fe50152a2524319: Sm,
      __wbg_createVertexArray_8685feb21901c932: Pm,
      __wbg_deleteQuery_ef51ea0a52420103: zm,
      __wbg_deleteSampler_5c045e0cc55813d4: Hm,
      __wbg_getIndexedParameter_2b18df6fca85f751: n6,
      __wbg_getQueryParameter_0599e85ddb81220b: u6,
      __wbg_getSyncParameter_9a2bda340ebe166f: h6,
      __wbg_getUniformBlockIndex_3bf387d80cee898d: x6,
      __wbg_invalidateFramebuffer_08fe15b00b070e47: H6,
      __wbg_deleteSync_37ca83c429c43d8a: Jm,
      __wbg_deleteVertexArray_8ee078fdb1fb1ffe: Km,
      __wbg_drawArraysInstanced_999df3e7f5c8762b: w7,
      __wbg_drawBuffers_558d96e52e754731: h7,
      __wbg_drawElementsInstanced_fdc96cf6adbebc12: y7,
      __wbg_endQuery_161170c5280a8293: T7,
      __wbg_fenceSync_56efc7cc79111e54: M7,
      __wbg_framebufferTextureLayer_2312acdc74f97676: q7,
      __wbg_getBufferSubData_92680d3a2f7be029: Q7,
      __wbg_readBuffer_361ec5474f3aae49: p8,
      __wbg_readPixels_5840000f3e22f3ce: m8,
      __wbg_readPixels_5bf204799ed2272f: h8,
      __wbg_renderbufferStorageMultisample_d64a8abb8689a968: x8,
      __wbg_texImage3D_8647ef58aef5b912: ly,
      __wbg_texStorage2D_ed5df596c5f1e3af: xy,
      __wbg_texStorage3D_160b0197bc190f04: yy,
      __wbg_texSubImage2D_f03448e182b0820d: By,
      __wbg_texSubImage2D_d14d9c0a1f627c31: Dy,
      __wbg_texSubImage2D_89866a04ecd0a76b: Ay,
      __wbg_texSubImage2D_5c630043f1c56716: vy,
      __wbg_samplerParameterf_3157ba41c0f4d97a: D8,
      __wbg_samplerParameteri_f85a29156e790189: B8,
      __wbg_texImage2D_0e0f37b9fb297d01: dy,
      __wbg_texImage2D_0e537dc331652de3: gy,
      __wbg_texImage3D_30dbf7234481b8f5: py,
      __wbg_texSubImage2D_3884b5a5c27ca5c4: Sy,
      __wbg_texSubImage2D_bbd523c9ebd9fa99: Iy,
      __wbg_texSubImage2D_ce2585a1bf3d56d9: Ty,
      __wbg_texSubImage3D_933e4cd41cc5376d: Cy,
      __wbg_texSubImage3D_c3538b28040daac9: Ry,
      __wbg_uniform1ui_36c94692177ebf76: qy,
      __wbg_uniform2fv_17592f4dad9798fb: Hy,
      __wbg_uniform2iv_d5d29ebbc466977d: Jy,
      __wbg_texSubImage3D_0fdbd843482bb916: Py,
      __wbg_texSubImage3D_09a97a968b93253d: Fy,
      __wbg_texSubImage3D_355efde0dc047913: ky,
      __wbg_texSubImage3D_bd32c8e29e470904: Vy,
      __wbg_texSubImage3D_5a238709d114b609: My,
      __wbg_uniform2uiv_418ba3bf6a230dd5: Qy,
      __wbg_uniform4fv_9e670a001c77dca0: r$,
      __wbg_uniform4iv_1d57c6b8e5c0e447: a$,
      __wbg_uniform3fv_dbe44b778e6b89e8: Yy,
      __wbg_uniform3iv_d75d3a5f86d54be4: Zy,
      __wbg_uniform3uiv_71c1efc24a662de9: e$,
      __wbg_uniform4uiv_c5d45f5dbdae727a: c$,
      __wbg_uniformMatrix3fv_2ccfe6ff9f4f57ec: d$,
      __wbg_uniformMatrix3x2fv_1083b1ecb80866a1: w$,
      __wbg_uniformMatrix3x4fv_d4cc158d92dbd1ce: p$,
      __wbg_uniformBlockBinding_829a71912ad79a04: o$,
      __wbg_uniformMatrix2fv_b666dc80e084ddbc: s$,
      __wbg_uniformMatrix2x3fv_6a6221d5300ad184: f$,
      __wbg_uniformMatrix2x4fv_68bc9cd1e2d67339: u$,
      __wbg_uniformMatrix4fv_61b1a000cfdc35cc: l$,
      __wbg_vertexAttribIPointer_23b6d6b8b8b79b4d: T$,
      __wbg_activeTexture_525ee3068cb9e8d5: Nl,
      __wbg_attachShader_3477e67517b09b6b: Xl,
      __wbg_bindAttribLocation_79b5d26727094518: e4,
      __wbg_bindBuffer_d3111de6861cb875: n4,
      __wbg_bindFramebuffer_63e837a5dc0accfb: b4,
      __wbg_bindRenderbuffer_7f84d28a1462a95a: c4,
      __wbg_bindTexture_7ab28ff4ff3dc506: i4,
      __wbg_blendColor_15f26633b646e542: g4,
      __wbg_blendEquation_7dadb4db540a42da: m4,
      __wbg_blendEquationSeparate_8240ddfa32266109: p4,
      __wbg_blendFunc_b15af02643e188f1: S4,
      __wbg_blendFuncSeparate_456410f9919bed39: y4,
      __wbg_clear_dadcb3e2929388b0: z4,
      __wbg_clearDepth_05c17028494ee4dd: L4,
      __wbg_clearStencil_917833d1e2ac56e4: G4,
      __wbg_colorMask_f111e3e5796458f4: j4,
      __wbg_compileShader_f5625b583b2c9fd6: N4,
      __wbg_uniformMatrix4x2fv_cb66ed882d29c550: h$,
      __wbg_uniformMatrix4x3fv_99e2e5fabf39e8b6: x$,
      __wbg_vertexAttribDivisor_f17a8585267be92f: I$,
      __wbg_copyTexSubImage2D_3c7de20db5e2b39f: nm,
      __wbg_createBuffer_9f602b2dbcbf409c: fm,
      __wbg_createFramebuffer_4a250944a4542bbc: dm,
      __wbg_createProgram_4c8164d471c10346: pm,
      __wbg_createRenderbuffer_5ada3a0bc7cf3a43: ym,
      __wbg_createShader_9c5cd42709d915ff: Im,
      __wbg_createTexture_3eed23cb87dd35fc: Tm,
      __wbg_cullFace_94f24b4fd5e9038b: Cm,
      __wbg_deleteBuffer_d0fb5f1492ee8c6f: Rm,
      __wbg_getExtension_11824edd67a143d8: t6,
      __wbg_getParameter_7f7f23cae98f2c81: a6,
      __wbg_getProgramInfoLog_cd84be80942f345b: s6,
      __wbg_getProgramParameter_039391d5ba319f50: i6,
      __wbg_getShaderInfoLog_495bddda98172699: d6,
      __wbg_getShaderParameter_4eb65cfb174ceb22: w6,
      __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: l6,
      __wbg_getUniformLocation_ab63f569a4e41744: $6,
      __wbg_deleteFramebuffer_4c0996be4bc30a67: Lm,
      __wbg_deleteProgram_eff668280dcb01ca: Gm,
      __wbg_deleteRenderbuffer_c9320d711ddf649b: qm,
      __wbg_deleteShader_3339454254c7147c: jm,
      __wbg_deleteTexture_c1c58550dc55af5c: Xm,
      __wbg_depthFunc_31b183b5b8ee478e: Zm,
      __wbg_depthMask_cab7f2ae7f0e559c: t7,
      __wbg_depthRange_797a71ba3b79267a: n7,
      __wbg_disable_cb1b3e6c1cee5202: f7,
      __wbg_disableVertexAttribArray_b395358ec5084c39: s7,
      __wbg_drawArrays_42dbb4b0349c8f34: l7,
      __wbg_enable_d1f42f78be33a553: I7,
      __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: S7,
      __wbg_flush_7ae42f071230db6b: L7,
      __wbg_framebufferRenderbuffer_f9d75924fbe9024a: G7,
      __wbg_framebufferTexture2D_367ab597a005e8d9: z7,
      __wbg_frontFace_9bdcf2a758e989e5: j7,
      __wbg_linkProgram_e23a348b0f6e0c4f: t5,
      __wbg_pixelStorei_a78a504be58d1d0a: n8,
      __wbg_polygonOffset_a4f07d97b9b0dced: a8,
      __wbg_renderbufferStorage_3049e13db5c4e60e: $8,
      __wbg_scissor_6c024669fbf4fe72: F8,
      __wbg_vertexAttribPointer_4e5d289c5d224210: B$,
      __wbg_viewport_a0ca330f9b85397e: F$,
      __wbg_shaderSource_66dce75b25a1a407: Qx,
      __wbg_stencilFuncSeparate_ec603976be9569a4: ay,
      __wbg_stencilMask_485dcb5965c79a71: oy,
      __wbg_stencilMaskSeparate_cabcdf843acbf5f1: cy,
      __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: iy,
      __wbg_texParameteri_c6efffcecb474d2f: my,
      __wbg_uniform1f_3acd3f3eb50b5e11: Wy,
      __wbg_uniform1i_e4f13604354c28ae: Uy,
      __wbg_uniform4f_a5008773cfb47d1a: t$,
      __wbg_useProgram_ab2ee2a13a1fd909: S$,
      __wbg_bufferSubData_2270f1b9db71e642: B4,
      __wbg_clearBufferfv_6b77b9402254a2bf: V4,
      __wbg_clearBufferiv_0f056544010eef3e: R4,
      __wbg_beginQuery_dad334d972fed3cc: Kl,
      __wbg_bindBufferRange_16a9d90becc2a7d7: t4,
      __wbg_bindSampler_3c7002cb6d56ae8f: s4,
      __wbg_bindVertexArray_c391bd47303d75cd: d4,
      __wbg_blitFramebuffer_ea96ada8bba07582: v4,
      __wbg_bufferData_64e9905f2b3d3a6f: T4,
      __wbg_bufferData_99bbbc63f02251c4: D4,
      __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: U6,
      __wbg_performance_4c23a97261596fec: _8,
      __wbg_requestAnimationFrame_b92ccfbc8ca777a8: A8,
      __wbg_fetch_2d913f7108d17a24: C7,
      __wbg_fetch_d8c50740ea23b248: V7,
      __wbg_navigator_935098efd1dc7fe5: R5,
      __wbg_devicePixelRatio_8e5ca44720abafec: c7,
      __wbg_document_2634180a4c694068: u7,
      __wbg_instanceof_Window_0d356b88a2f77c42: q6,
      __wbg_hidden_cb32701ca3785fea: P6,
      __wbg_getElementById_c7aba6b93b34bf01: _6,
      __wbg_querySelector_1f3658f4b48e268b: u8,
      __wbg_querySelectorAll_ffda3c891a9eb29a: f8,
      __wbg_getBoundingClientRect_bf4a017da5494fc9: J7,
      __wbg_uniform2iv_c5e863975dd780d8: Ny,
      __wbg_uniform3fv_7723e142be50856f: Xy,
      __wbg_uniform3iv_bea3976522e15d48: Ky,
      __wbg_uniform4fv_85ad5d23234895d2: n$,
      __wbg_clear_ff8cfdf420f7dde6: U4,
      __wbg_clearDepth_ac6b54f112feeaf7: O4,
      __wbg_clearStencil_56d6a6308294a749: W4,
      __wbg_colorMask_b0ab9d429a1efa0a: H4,
      __wbg_compileShader_fcf3f3d2891f73f9: J4,
      __wbg_copyTexSubImage2D_4b1ba73bf053b4e6: rm,
      __wbg_createBuffer_0e42c2e1f7bbaeeb: sm,
      __wbg_createFramebuffer_ab73f30b5dc97415: gm,
      __wbg_createProgram_f11c63f59f41b82a: lm,
      __wbg_createRenderbuffer_556000dbb01f5026: xm,
      __wbg_createShader_27d9388313f3b14e: Am,
      __wbg_createTexture_8455c703424c567b: Dm,
      __wbg_cullFace_774780fb4177aab8: Mm,
      __wbg_deleteBuffer_d758283bea6e0ccf: Em,
      __wbg_deleteFramebuffer_8953b325144192fe: Om,
      __wbg_deleteProgram_0135c6926e75af75: Wm,
      __wbg_deleteRenderbuffer_ada86fd85d32984f: Um,
      __wbg_deleteShader_79dbaaed69b7ca3b: Nm,
      __wbg_deleteTexture_3acb672a45f9998a: Qm,
      __wbg_depthFunc_eaca1bc79f7bf216: e7,
      __wbg_depthMask_3a9074b08d1f68e5: _7,
      __wbg_depthRange_c24a808b3496e0a9: r7,
      __wbg_uniform4iv_a9aaa92f2f458ec2: b$,
      __wbg_uniformMatrix2fv_cd6e1725152efce9: i$,
      __wbg_uniformMatrix3fv_da8c388748c5739b: g$,
      __wbg_uniformMatrix4fv_c8ba105f2ce3edf8: m$,
      __wbg_activeTexture_1d5359b20df41710: jl,
      __wbg_attachShader_683d1070365e7066: Yl,
      __wbg_bindAttribLocation_d56d3c40331af7ed: _4,
      __wbg_bindBuffer_e95efaf0d4851845: r4,
      __wbg_bindFramebuffer_217a1f4d28c6bc77: a4,
      __wbg_bindRenderbuffer_d608b211c51ed147: o4,
      __wbg_bindTexture_ffc56f1e5c5526c6: f4,
      __wbg_blendColor_a0ba1cdcecc3a34c: w4,
      __wbg_blendEquation_8bfa69f639ae92da: h4,
      __wbg_blendEquationSeparate_aed0a34303d3e6ae: l4,
      __wbg_blendFunc_713c504adab14f98: $4,
      __wbg_blendFuncSeparate_3eef699c291dbc87: x4,
      __wbg_disable_4dca6ee0ccc91e4a: i7,
      __wbg_disableVertexAttribArray_25f8b2d699a4387a: o7,
      __wbg_drawArrays_10e1254aa4524ae9: p7,
      __wbg_enable_c6e523307311617a: A7,
      __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: v7,
      __wbg_flush_eb3fb8da2ec00d57: O7,
      __wbg_framebufferRenderbuffer_52ae9fcc29125a07: W7,
      __wbg_linkProgram_6a2eee02a03b9b00: _5,
      __wbg_pixelStorei_55ad4c67b699537c: t8,
      __wbg_polygonOffset_06dc6468c12a57e1: r8,
      __wbg_renderbufferStorage_2918fb696fd45663: y8,
      __wbg_scissor_f9696c630e464977: P8,
      __wbg_shaderSource_628c37a476ae65f9: Jx,
      __wbg_stencilFuncSeparate_a17b2b1cc34fa948: ry,
      __wbg_stencilMask_f9fe198f7fd6fc9c: sy,
      __wbg_stencilMaskSeparate_3bf2cb54cc370b58: by,
      __wbg_stencilOpSeparate_6cf50803475d2640: fy,
      __wbg_texParameteri_fe6210a493d48a16: hy,
      __wbg_framebufferTexture2D_3a558e14f56720d2: U7,
      __wbg_frontFace_c9bb1fa659ffd276: N7,
      __wbg_getParameter_91a344e1a84a4669: b6,
      __wbg_getProgramInfoLog_35410850de9ccefe: o6,
      __wbg_getProgramParameter_bbc667347ac2e882: f6,
      __wbg_getShaderInfoLog_f423ce6d280ccca0: g6,
      __wbg_getShaderParameter_93cc1f20f1dd0b1e: p6,
      __wbg_getUniformLocation_340155dc706d3fea: y6,
      __wbg_uniform1f_d34e4b454f7c8e73: Gy,
      __wbg_uniform1i_cd9a7f990128ea48: zy,
      __wbg_uniform4f_4410d2faaa7e5dda: _$,
      __wbg_useProgram_0e1cd86765304939: $$,
      __wbg_vertexAttribPointer_36c76a0c7e4f0239: D$,
      __wbg_viewport_b5bd46a0d111c83c: P$,
      __wbg_texSubImage2D_1b2ff28f994c325e: $y,
      __wbg_uniform2fv_39277cf2d3cb83c7: jy,
      __wbg_bufferData_5df9bdb32e189eee: I4,
      __wbg_bufferData_26132561617ce8fb: A4,
      __wbg_bufferSubData_44db8a3b4a70b57d: F4,
      __wbg_compressedTexSubImage2D_44c06107dab236a8: Q4,
      __wbg_readPixels_05377f8b6fa1d8eb: l8,
      __wbg_texImage2D_7bc3001cb8602ed2: wy,
      __wbg_navigator_017bc45e84c473cc: V5,
      __wbg_log_d282446d03691e72: n5,
      __wbg_info_a392cd5b7536cfb5: C6,
      __wbg_warn_88c4a5bd9a322000: k$,
      __wbg_debug_7271beced8b71cd4: Vm,
      __wbg_error_933f449d72fef598: P7,
      __wbg_error_50f60c611a3dcf64: F7,
      __wbg_signal_4d9d567be73ea52c: Xx,
      __wbg_new_51233fa2a760b272: G5,
      __wbg_abort_6e6ea7d259504afc: ql,
      __wbg_width_a86bcd32bd998060: C$,
      __wbg_height_cd732bbdc7b66e49: B6,
      __wbg_set_width_031bdecd763c5855: Gx,
      __wbg_set_height_ad5056ea051acd78: rh,
      __wbg_getContext_486aab500e1c34c9: Y7,
      __wbg_getContext_9fd4db9b1cf155db: Z7,
      __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: L6,
      __wbg_drawBuffersWEBGL_3bfb30349766d902: m7,
      __wbg_getSupportedProfiles_e24289cb9a71b3f0: m6,
      __wbg_now_0f628e0e435c541b: J5,
      __wbg_arrayBuffer_ff96d08b7b6be32e: Ql,
      __wbg_status_0053aa6239760447: ny,
      __wbg_ok_c962da6f1a034d81: Z5,
      __wbg_statusText_0f412961834ccfe9: ty,
      __wbg_instanceof_Response_79948c98d1d2ba75: G6,
      __wbg_set_width_f9e631f4ee129e5c: Ux,
      __wbg_set_height_ef298446b359b0c5: bh,
      __wbg_getContext_70c2d1bed75d4122: K7,
      __wbg_getContext_422b32d0ee4b8076: X7,
      __wbg_contentRect_0fb8c8900d689a0c: _m,
      __wbg_offsetX_0214819d43aaf6d5: Y5,
      __wbg_offsetY_f18f571e33b385ab: K5,
      __wbg_button_bb3285fcdf965178: P4,
      __wbg_instanceof_ResizeObserverEntry_17829ecb039c09f2: W6,
      __wbg_set_signal_4a69430cb12800f3: rx,
      __wbg_bindVertexArrayOES_1cb63a86715ea7d5: u4,
      __wbg_createVertexArrayOES_4bbd1b38563aab57: Fm,
      __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: Ym,
      __wbg_new_1e52e3c919312525: E5,
      __wbg_framebufferTextureMultiviewOVR_bab62b45b7debf2c: H7,
      __wbg_observe_592b94857eed8e27: Q5,
      __wbg_queryCounterEXT_ebb00bcc96221671: i8,
      __wbg_preventDefault_c047d3e292b08cc4: b8,
      __wbg_addEventListener_ea90bc131475777e: Jl,
      __wbg_drawArraysInstancedANGLE_83c84d616f54261b: g7,
      __wbg_drawElementsInstancedANGLE_a73eba5955ee33fa: x7,
      __wbg_get_37b48b8fa52d1f2c: v6,
      __wbg_vertexAttribDivisorANGLE_ffd803d04b545670: A$,
      __wbg_width_08e66520b99071f4: M$,
      __wbg_height_e9afb506f31052a9: F6,
      __wbg_aborted_4d4114700dc4c251: Hl,
      __wbg_resolve_d82363d90af6928a: T8,
      __wbg_then_591b6b3a75ee817a: Oy,
      __wbg_iterator_cc47ba25a2be735a: Q6,
      __wbg_get_9a29be2cb383ed9a: A6,
      __wbg_next_402fa10b59ab20c3: N5,
      __wbg_new_2e117a478906f062: O5,
      __wbg_new_36e147a8ced3c6e0: W5,
      __wbg_of_62183ea089c00bfa: X5,
      __wbg_isArray_145a34fd0a38d37b: j6,
      __wbg_new_e66a4b7758dd2e5c: U5,
      __wbg_isSafeInteger_a3389a198582f5f6: N6,
      __wbg_is_de5b366c746e004c: J6,
      __wbg_entries_c261c3fa1f281256: B7,
      __wbg_then_2a84678a50976959: Ly,
      __wbg_length_589238bdcf171f0e: Y6,
      __wbg_prototypesetcall_d721637c7ca66eb8: o8,
      __wbg_set_272b80acaf9a75e8: W8,
      __wbg_new_81880fb5002cb255: z5,
      __wbg_new_with_byte_offset_and_length_f2b65504a914f37a: H5,
      __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: Kx,
      __wbg_static_accessor_SELF_44f6e0cb5e67cdad: ey,
      __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: Zx,
      __wbg_static_accessor_WINDOW_168f178805d978fe: _y,
      __wbg_instanceof_ArrayBuffer_2a7bb09fee70c2da: V6,
      __wbg_instanceof_Uint8Array_f080092dc70f5d58: z6,
      __wbg_queueMicrotask_1c9b3800e321a967: d8,
      __wbg_queueMicrotask_311744e534a929a3: g8,
      __wbg_set_4564f7dc44fcb0c9: G8,
      __wbg___wbindgen_number_get_1cc01dd708740256: Wl,
      __wbg___wbindgen_in_4990f46af709e33c: kl,
      __wbg___wbindgen_throw_ea4887a5f8f9a9db: zl,
      __wbg___wbindgen_is_null_6d937fbfb6478470: Vl,
      __wbg___wbindgen_jsval_eq_4e8c38722cb8ff51: Ll,
      __wbg_Number_c4bdf66bb78f7977: Al,
      __wbg_Error_fdd633d4bb5dd76a: vl,
      __wbg___wbindgen_is_bigint_90b5ccfe67c78460: Ml,
      __wbg___wbindgen_is_object_0beba4a1980d3eea: Rl,
      __wbg___wbindgen_string_get_71bb4348194e31f0: Gl,
      __wbg___wbindgen_boolean_get_edaed31a367ce1bd: Fl,
      __wbg___wbindgen_is_function_acc5528be2b923f2: Cl,
      __wbg___wbindgen_is_undefined_721f8decd50c87a3: El,
      __wbg___wbindgen_jsval_loose_eq_4b9aba9e5b3c4582: Ol,
      __wbg___wbindgen_bigint_get_as_i64_d9e915702856f831: Bl,
      __wbg__wbg_cb_unref_33c39e13d73b25f6: Ul,
      __wbg___wbindgen_debug_string_8a447059637473e2: Pl,
      __wbindgen_init_externref_table: _S,
      __wbindgen_cast_0000000000000001: E$,
      __wbindgen_cast_0000000000000002: L$,
      __wbindgen_cast_0000000000000003: O$,
      __wbindgen_cast_0000000000000004: W$,
      __wbindgen_cast_0000000000000005: G$,
      __wbindgen_cast_0000000000000006: z$,
      __wbindgen_cast_0000000000000007: U$,
      __wbindgen_cast_0000000000000008: q$,
      __wbindgen_cast_0000000000000009: H$,
      __wbindgen_cast_000000000000000a: j$,
      __wbindgen_cast_000000000000000b: N$,
      __wbindgen_cast_000000000000000c: J$,
      __wbindgen_cast_000000000000000d: Q$,
      __wbindgen_cast_000000000000000e: X$,
      __wbindgen_cast_000000000000000f: Y$,
      __wbindgen_cast_0000000000000010: K$,
      __wbindgen_cast_0000000000000011: Z$,
      __wbindgen_cast_0000000000000012: eS
    }
  }, ml), { memory: LS, clear: OS, on_frame: WS, show: GS, start: zS, stop_frames: US, mount: qS, __wbg_proteusapp_free: HS, proteusapp_addChild: jS, proteusapp_animateTo: NS, proteusapp_bakeTexture: JS, proteusapp_bakedImageSize: QS, proteusapp_bakedTextSize: XS, proteusapp_channelDestroy: YS, proteusapp_channelSet: KS, proteusapp_component: ZS, proteusapp_copyBakedImageFrom: ev, proteusapp_createVideo: _v, proteusapp_cropImage: tv, proteusapp_destroy: nv, proteusapp_freeResources: rv, proteusapp_get: av, proteusapp_hideVideo: bv, proteusapp_loadTexture: cv, proteusapp_mergeFrom: ov, proteusapp_mergeFromWithBehavior: sv, proteusapp_new: iv, proteusapp_onBlur: fv, proteusapp_onClick: uv, proteusapp_onDrag: dv, proteusapp_onDropped: gv, proteusapp_onFocus: wv, proteusapp_onHoverEnter: pv, proteusapp_onHoverExit: lv, proteusapp_onPress: mv, proteusapp_onRelease: hv, proteusapp_onTransitionComplete: xv, proteusapp_pointerLeft: yv, proteusapp_pointerMoved: $v, proteusapp_pointerPressed: Sv, proteusapp_pointerReleased: vv, proteusapp_releaseVideo: Av, proteusapp_removeChild: Iv, proteusapp_setDeclaredGeometry: Tv, proteusapp_setDisabled: Dv, proteusapp_setImage: Bv, proteusapp_setInteractive: Fv, proteusapp_setOpacity: Pv, proteusapp_setText: kv, proteusapp_setTexture: Mv, proteusapp_setTransitionInteraction: Cv, proteusapp_setVideoCrossfade: Vv, proteusapp_setVisible: Rv, proteusapp_showVideo: Ev, proteusapp_splitTo: Lv, proteusapp_splitToWithBehavior: Ov, proteusapp_splitToWithStates: Wv, proteusapp_texture: Gv, proteusapp_textureState: zv, proteusapp_tick: Uv, proteusapp_transitionChannel: qv, proteusapp_uploadVideoFrame: Hv, __wbg_handle_free: jv, __wbg_texturehandle_free: Nv, __wbg_transitionchannel_free: Jv, __wbg_videohandle_free: Qv, handle_fromId: Xv, handle_id: Yv, texturehandle_fromId: Kv, texturehandle_id: Zv, __abort_handler: eA, __instance_terminated: _A, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: tA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: nA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: rA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: aA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: bA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: cA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: oA, wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: sA, __wbindgen_malloc: iA, __wbindgen_realloc: fA, __wbindgen_exn_store: uA, __externref_table_alloc: dA, __wbindgen_externrefs: gA, __wbindgen_free: wA, __wbindgen_destroy_closure: pA, __externref_table_dealloc: lA, __wbindgen_start: jt } = ES, mA = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: eA,
    __externref_table_alloc: dA,
    __externref_table_dealloc: lA,
    __instance_terminated: _A,
    __wbg_handle_free: jv,
    __wbg_proteusapp_free: HS,
    __wbg_texturehandle_free: Nv,
    __wbg_transitionchannel_free: Jv,
    __wbg_videohandle_free: Qv,
    __wbindgen_destroy_closure: pA,
    __wbindgen_exn_store: uA,
    __wbindgen_externrefs: gA,
    __wbindgen_free: wA,
    __wbindgen_malloc: iA,
    __wbindgen_realloc: fA,
    __wbindgen_start: jt,
    clear: OS,
    handle_fromId: Xv,
    handle_id: Yv,
    memory: LS,
    mount: qS,
    on_frame: WS,
    proteusapp_addChild: jS,
    proteusapp_animateTo: NS,
    proteusapp_bakeTexture: JS,
    proteusapp_bakedImageSize: QS,
    proteusapp_bakedTextSize: XS,
    proteusapp_channelDestroy: YS,
    proteusapp_channelSet: KS,
    proteusapp_component: ZS,
    proteusapp_copyBakedImageFrom: ev,
    proteusapp_createVideo: _v,
    proteusapp_cropImage: tv,
    proteusapp_destroy: nv,
    proteusapp_freeResources: rv,
    proteusapp_get: av,
    proteusapp_hideVideo: bv,
    proteusapp_loadTexture: cv,
    proteusapp_mergeFrom: ov,
    proteusapp_mergeFromWithBehavior: sv,
    proteusapp_new: iv,
    proteusapp_onBlur: fv,
    proteusapp_onClick: uv,
    proteusapp_onDrag: dv,
    proteusapp_onDropped: gv,
    proteusapp_onFocus: wv,
    proteusapp_onHoverEnter: pv,
    proteusapp_onHoverExit: lv,
    proteusapp_onPress: mv,
    proteusapp_onRelease: hv,
    proteusapp_onTransitionComplete: xv,
    proteusapp_pointerLeft: yv,
    proteusapp_pointerMoved: $v,
    proteusapp_pointerPressed: Sv,
    proteusapp_pointerReleased: vv,
    proteusapp_releaseVideo: Av,
    proteusapp_removeChild: Iv,
    proteusapp_setDeclaredGeometry: Tv,
    proteusapp_setDisabled: Dv,
    proteusapp_setImage: Bv,
    proteusapp_setInteractive: Fv,
    proteusapp_setOpacity: Pv,
    proteusapp_setText: kv,
    proteusapp_setTexture: Mv,
    proteusapp_setTransitionInteraction: Cv,
    proteusapp_setVideoCrossfade: Vv,
    proteusapp_setVisible: Rv,
    proteusapp_showVideo: Ev,
    proteusapp_splitTo: Lv,
    proteusapp_splitToWithBehavior: Ov,
    proteusapp_splitToWithStates: Wv,
    proteusapp_texture: Gv,
    proteusapp_textureState: zv,
    proteusapp_tick: Uv,
    proteusapp_transitionChannel: qv,
    proteusapp_uploadVideoFrame: Hv,
    show: GS,
    start: zS,
    stop_frames: US,
    texturehandle_fromId: Kv,
    texturehandle_id: Zv,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: sA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: tA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: bA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: cA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: oA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: rA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: aA,
    wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: nA
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  RS(mA);
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
    const { min: t, max: n } = q[_], r = new De();
    return Array.from({
      length: e
    }, () => {
      const a = r.between(t, n), b = r.between(t, n);
      return {
        x: r.between(0, ee),
        y: r.between(0, _e),
        width: a,
        height: b,
        r: r.next(),
        g: r.next(),
        b: r.next()
      };
    });
  }
  const hA = `#version 300 es
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
}`, xA = `#version 300 es
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
}`, yA = `#version 300 es
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
    const t = (r, a) => {
      const b = _.createShader(r);
      if (_.shaderSource(b, a), _.compileShader(b), !_.getShaderParameter(b, _.COMPILE_STATUS)) throw new Error(_.getShaderInfoLog(b) ?? "shader failed to compile");
      return b;
    }, n = _.createProgram();
    if (_.attachShader(n, t(_.VERTEX_SHADER, e)), _.attachShader(n, t(_.FRAGMENT_SHADER, hA)), _.linkProgram(n), !_.getProgramParameter(n, _.LINK_STATUS)) throw new Error(_.getProgramInfoLog(n) ?? "program failed to link");
    return n;
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
  function $A(_) {
    return (e, t, n) => {
      const r = Nt(_, xA), a = Jt(_), b = _.createVertexArray();
      _.bindVertexArray(b);
      const c = _.getAttribLocation(r, "a_corner");
      _.enableVertexAttribArray(c), _.vertexAttribPointer(c, 2, _.FLOAT, false, 0, 0);
      const o = _.getUniformLocation(r, "u_rect"), s = _.getUniformLocation(r, "u_color");
      return {
        draw() {
          Qt(_), _.useProgram(r), _.bindVertexArray(b), _.uniform2f(_.getUniformLocation(r, "u_viewport"), ee, _e), _.uniform1f(_.getUniformLocation(r, "u_radius"), n), e.forEach((d, v) => {
            _.uniform4f(o, t[v * 2], t[v * 2 + 1], d.width, d.height), _.uniform3f(s, d.r, d.g, d.b), _.drawArrays(_.TRIANGLE_STRIP, 0, 4);
          });
        },
        dispose() {
          _.deleteProgram(r), _.deleteBuffer(a), _.deleteVertexArray(b);
        }
      };
    };
  }
  function SA(_) {
    return (e, t, n) => {
      const r = Nt(_, yA), a = Jt(_), b = _.createVertexArray();
      _.bindVertexArray(b);
      const c = _.getAttribLocation(r, "a_corner");
      _.enableVertexAttribArray(c), _.vertexAttribPointer(c, 2, _.FLOAT, false, 0, 0);
      const o = new Float32Array(e.length * 7), s = _.createBuffer();
      _.bindBuffer(_.ARRAY_BUFFER, s), _.bufferData(_.ARRAY_BUFFER, o.byteLength, _.DYNAMIC_DRAW);
      const d = _.getAttribLocation(r, "a_rect"), v = _.getAttribLocation(r, "a_color");
      return _.enableVertexAttribArray(d), _.vertexAttribPointer(d, 4, _.FLOAT, false, 28, 0), _.vertexAttribDivisor(d, 1), _.enableVertexAttribArray(v), _.vertexAttribPointer(v, 3, _.FLOAT, false, 28, 16), _.vertexAttribDivisor(v, 1), {
        draw() {
          e.forEach((J, f_) => {
            const te = f_ * 7;
            o[te] = t[f_ * 2], o[te + 1] = t[f_ * 2 + 1], o[te + 2] = J.width, o[te + 3] = J.height, o[te + 4] = J.r, o[te + 5] = J.g, o[te + 6] = J.b;
          }), Qt(_), _.useProgram(r), _.bindVertexArray(b), _.bindBuffer(_.ARRAY_BUFFER, s), _.bufferSubData(_.ARRAY_BUFFER, 0, o), _.uniform2f(_.getUniformLocation(r, "u_viewport"), ee, _e), _.uniform1f(_.getUniformLocation(r, "u_radius"), n), _.drawArraysInstanced(_.TRIANGLE_STRIP, 0, 4, e.length);
        },
        dispose() {
          _.deleteProgram(r), _.deleteBuffer(a), _.deleteBuffer(s), _.deleteVertexArray(b);
        }
      };
    };
  }
  function vA(_) {
    return (e, t, n) => {
      const r = e.map((a) => `rgb(${Math.round(a.r * 255)} ${Math.round(a.g * 255)} ${Math.round(a.b * 255)})`);
      return {
        draw() {
          _.fillStyle = "black", _.fillRect(0, 0, ee, _e), e.forEach((a, b) => {
            _.fillStyle = r[b], _.beginPath(), _.roundRect(t[b * 2] - a.width / 2, t[b * 2 + 1] - a.height / 2, a.width, a.height, n), _.fill();
          });
        },
        dispose() {
        }
      };
    };
  }
  const C_ = 500;
  function AA(_) {
    return _ < 0.5 ? 2 * _ * _ : 1 - (-2 * _ + 2) ** 2 / 2;
  }
  const IA = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
  class nt {
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
      const t = AA(Math.min(1, (e - this.movedAt) / C_));
      for (let n = 0; n < this.current.length; n++) this.current[n] = this.from[n] + (this.to[n] - this.from[n]) * t;
    }
  }
  function TA(_, e, t) {
    const n = new nt(e), r = document.createDocumentFragment(), a = e.map((b, c) => {
      const o = document.createElement("div"), s = o.style;
      return s.position = "absolute", s.left = "0", s.top = "0", s.width = `${b.width}px`, s.height = `${b.height}px`, s.borderRadius = `${t}px`, s.background = `rgb(${Math.round(b.r * 255)} ${Math.round(b.g * 255)} ${Math.round(b.b * 255)})`, s.transform = It(n.current[c * 2], n.current[c * 2 + 1], b), s.transition = `transform ${C_}ms ${IA}`, r.append(o), o;
    });
    return _.append(r), {
      frame(b) {
        const c = n.retarget(b);
        c && a.forEach((o, s) => {
          o.style.transform = It(c[s * 2], c[s * 2 + 1], e[s]);
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
  const DA = [
    100,
    1e3,
    5e3,
    1e4,
    25e3,
    5e4,
    1e5
  ], BA = 60, FA = 2e3, V_ = 5e4, Tt = 100, rt = `proteus-bench:${location.pathname}`, PA = 300, kA = 15e3, a_ = document.getElementById("status"), Xt = document.getElementById("results"), he = document.getElementById("run"), c_ = document.getElementById("reset"), xe = {
    proteus: document.getElementById("proteus"),
    proteusRust: document.getElementById("proteus-rust"),
    webgl: document.getElementById("webgl"),
    canvas2d: document.getElementById("canvas2d"),
    css: document.getElementById("css")
  }, Yt = new URLSearchParams(location.search), Ie = ((_a2 = Yt.get("counts")) == null ? void 0 : _a2.split(",").map(Number).filter((_) => _ > 0)) ?? DA, at = (((_b2 = Yt.get("scenes")) == null ? void 0 : _b2.split(",")) ?? [
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
      const r = String(t[0] ?? "").replace(/%c/g, "").match(/proteus-host-web: adapter (.*)/);
      if (r) {
        const a = ((_a3 = r[1].match(/\((\w+)\)\s*$/)) == null ? void 0 : _a3[1]) ?? "", b = r[1].replace(/\(\w+\)\s*$/, "").trim();
        Kt = `${/WebGpu/i.test(a) ? "WebGPU" : /Gl/i.test(a) ? "WebGL2" : a}${b ? `, ${b}` : " (the browser doesn't name the GPU)"}`;
      }
      e(...t);
    };
  }
  function MA(_) {
    const e = [
      ..._
    ].sort((n, r) => n - r), t = (n) => e[Math.round((e.length - 1) * n)];
    return {
      median: t(0.5),
      p99: t(0.99),
      frames: e.length
    };
  }
  function Pe(_) {
    return new Promise((e) => {
      const t = [];
      let n = 0, r = 0, a = 0, b = 0, c = false;
      const o = _((s) => {
        if (n += 1, n === 1 && (b = s), !c && (n >= BA || s - b > FA)) {
          c = true, a = s, r = s;
          return;
        }
        c && t.push(s - r), r = s, c && (t.length >= PA || s - a > kA) && (o(), e(MA(t)));
      });
    });
  }
  function bt(_) {
    return (e) => {
      let t = true;
      const n = (r) => {
        t && (_(r), e(r), requestAnimationFrame(n));
      };
      return requestAnimationFrame(n), () => {
        t = false;
      };
    };
  }
  const Zt = Math.max(4096, 2 ** Math.ceil(Math.log2(Math.max(...Ie))));
  let en, R_;
  await gl("proteus", {
    setup(_) {
      en = _;
    },
    update() {
      R_ == null ? void 0 : R_(performance.now());
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
      }
    }
  });
  await $l("proteus-rust", Zt);
  async function CA(_, e) {
    yl(_, e);
    const t = await Pe((n) => (xl(n), () => Sl()));
    return hl(), t;
  }
  async function VA(_, e) {
    const t = en, n = tt(_, e), r = (o, s, d) => ({
      position: {
        x: o - ee / 2,
        y: _e / 2 - s,
        z: 0
      },
      size: {
        width: n[d].width,
        height: n[d].height
      },
      rotation: 0,
      scale: 1,
      anchor: {
        x: 0.5,
        y: 0.5
      },
      color: {
        r: n[d].r,
        g: n[d].g,
        b: n[d].b,
        a: 1
      },
      cornerRadius: q[_].radius
    }), a = n.map((o, s) => t.component({
      geometry: r(o.x, o.y, s)
    })), b = _ === "moving" ? new nt(n) : void 0, c = await Pe((o) => (R_ = (s) => {
      const d = b == null ? void 0 : b.retarget(s);
      d && a.forEach((v, J) => v.animateTo(r(d[J * 2], d[J * 2 + 1], J), {
        duration: 0.5,
        easing: "easeInOutQuad"
      })), o(s);
    }, () => {
      R_ = void 0;
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
  }), _n = xe.canvas2d.getContext("2d");
  _n.scale(Be, Be);
  async function ct(_, e, t) {
    const n = tt(e, t), r = new nt(n), a = _(n, r.current, q[e].radius), b = await Pe(bt((c) => {
      e === "moving" && (r.retarget(c), r.advance(c)), a.draw();
    }));
    return a.dispose(), b;
  }
  async function RA(_) {
    const e = TA(xe.css, tt("moving", _), q.moving.radius), t = await Pe(bt((n) => e.frame(n)));
    return e.dispose(), t;
  }
  function Dt(_) {
    for (const [e, t] of Object.entries(xe)) t.style.visibility = e === _ ? "visible" : "hidden";
  }
  const x_ = {
    title: "Proteus (TypeScript)",
    surface: "proteus",
    time: VA
  }, y_ = {
    title: "Proteus (Rust)",
    surface: "proteusRust",
    time: CA
  }, EA = {
    title: "CSS",
    surface: "css",
    time: (_, e) => RA(e)
  }, $_ = {
    title: "Canvas 2D",
    surface: "canvas2d",
    time: (_, e) => ct(vA(_n), _, e)
  }, S_ = {
    title: "Naive WebGL2",
    surface: "webgl",
    time: (_, e) => ct($A(we), _, e)
  }, v_ = {
    title: "Batched WebGL2",
    surface: "webgl",
    time: (_, e) => ct(SA(we), _, e)
  }, tn = {
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
      EA,
      $_,
      S_,
      v_
    ]
  }, E_ = {
    small: 1 / 0,
    large: V_,
    moving: 1 / 0
  }, LA = {
    small: `Small components (${q.small.min}\u2013${q.small.max} px), still: the cost per component`,
    large: `Large components (${q.large.min}\u2013${q.large.max} px), still: filling pixels dominates`,
    moving: `Moving components (${q.moving.min}\u2013${q.moving.max} px): every one always moving`
  };
  function OA(_) {
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
  function WA() {
    const _ = {
      settings: location.search,
      cells: {},
      dropped: {}
    };
    try {
      const e = JSON.parse(localStorage.getItem(rt) ?? "null");
      return e && e.settings === location.search ? e : _;
    } catch {
      return _;
    }
  }
  function b_() {
    try {
      localStorage.setItem(rt, JSON.stringify(V));
    } catch {
    }
  }
  const V = WA();
  if (V.running) {
    const [_, e, t] = V.running.split("|");
    V.cells[V.running] = "crashed | \u2014", V.dropped[`${_}|${t}`] = `crashed at ${e}`, V.running = void 0, b_();
  }
  const GA = (_) => `${_.median.toFixed(2)} | ${_.p99.toFixed(2)}`;
  function nn(_) {
    return Ie.filter((e) => e <= E_[_]).flatMap((e) => tn[_].map((t) => [
      e,
      t
    ])).filter(([e, t]) => V.cells[`${_}|${e}|${t.title}`] === void 0);
  }
  async function zA() {
    he.disabled = true, c_.disabled = true, V.refresh === void 0 && (Dt("webgl"), a_.textContent = "Measuring the refresh rate\u2026", V.refresh = (await Pe(bt(() => {
    }))).median, b_());
    for (const _ of at) for (const [e, t] of nn(_)) {
      const n = `${_}|${e}|${t.title}`;
      if (V.dropped[`${_}|${t.title}`]) {
        V.cells[n] = "skipped | \u2014";
        continue;
      }
      Dt(t.surface), a_.textContent = `${_} scene, ${e} components: ${t.title}\u2026`, V.running = n, b_();
      try {
        const a = await t.time(_, e);
        V.cells[n] = GA(a), a.median >= Tt && (V.dropped[`${_}|${t.title}`] = `slower than ${Tt} ms a frame at ${e}`);
      } catch (a) {
        console.error(a), V.cells[n] = "failed | \u2014", V.dropped[`${_}|${t.title}`] = `failed at ${e}: ${String(a)}`;
      }
      V.running = void 0, b_(), Xt.textContent = rn();
    }
    a_.textContent = "Done. Copy the results below.", he.textContent = "Run", he.disabled = false, c_.disabled = false;
  }
  function rn() {
    const _ = [
      OA(V.refresh ?? 0)
    ];
    for (const e of at) {
      const t = tn[e].map((a) => a.title), n = Ie.filter((a) => a <= E_[e]).map((a) => t.map((b) => V.cells[`${e}|${a}|${b}`])).map((a, b) => ({
        count: Ie.filter((c) => c <= E_[e])[b],
        cells: a
      })).filter(({ cells: a }) => a.some((b) => b !== void 0));
      if (n.length === 0) continue;
      _.push("", `### ${LA[e]}`, "", "Frame interval, median and p99, in milliseconds:", "", `| Components | ${t.map((a) => `${a} | p99`).join(" | ")} |`, `|---:|${t.map(() => "---:|---:").join("|")}|`, ...n.map(({ count: a, cells: b }) => `| ${a} | ${b.map((c) => c ?? "\u2026 | \u2026").join(" | ")} |`));
      const r = t.map((a) => [
        a,
        V.dropped[`${e}|${a}`]
      ]).filter(([, a]) => a).map(([a, b]) => `- ${a}: ${b}; skipped after that.`);
      r.length > 0 && _.push("", ...r), e === "large" && Ie.some((a) => a > V_) && _.push("", `The large scene stops at ${V_}: past it, Safari's tab crashes.`);
    }
    return _.join(`
`);
  }
  he.addEventListener("click", () => void zA());
  c_.addEventListener("click", () => {
    try {
      localStorage.removeItem(rt);
    } catch {
    }
    location.reload();
  });
  const ke = Object.keys(V.cells).length > 0, ot = at.some((_) => nn(_).length > 0);
  ke && (Xt.textContent = rn());
  he.textContent = ke && ot ? "Resume" : "Run";
  a_.textContent = ke ? ot ? "A run was under way, and is saved: Resume carries on from where it stopped." : "The last run is complete; its results are below. Start over to run again." : "Ready. Keep this tab in front while it runs: a hidden tab stops drawing.";
  he.disabled = ke && !ot;
  c_.disabled = !ke;
})();
