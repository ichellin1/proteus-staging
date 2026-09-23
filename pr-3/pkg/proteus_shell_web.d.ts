/* tslint:disable */
/* eslint-disable */

export class Handle {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Reconstruct a `Handle` from an id previously obtained from
     * [`Handle::id`] or a `ComponentData.children` entry. Does not check
     * the entity is still alive — exactly like holding onto any other stale
     * `Handle`: mutating methods **throw**, and `get()` returns `undefined`.
     * Neither panics (before this was fixed, they panicked, which on wasm
     * takes the whole module down — see `proteus_sdk::HandleError`).
     */
    static fromId(id: number): Handle;
    /**
     * This component's entity id, as `Entity::to_bits()` cast to `f64` —
     * see `dto.rs`'s top doc for the precision note. Round-trips through
     * [`Handle::from_id`].
     */
    id(): number;
}

export class ProteusApp {
    free(): void;
    [Symbol.dispose](): void;
    addChild(parent: Handle, child: Handle): void;
    /**
     * Ad-hoc 1→1 morph with no signal/second entity involved (M13.8 parity
     * audit) — see `proteus-sdk`'s `Handle::animate_to` doc.
     */
    animateTo(handle: Handle, to: any, config: any): void;
    /**
     * Pack already-decoded RGBA pixels (`rgba.len() == width * height * 4`)
     * into `main_atlas` — the raw-pixel counterpart of
     * [`Self::load_texture`], for procedurally generated content.
     */
    bakeTexture(width: number, height: number, rgba: Uint8Array, request: any): TextureHandle;
    /**
     * `undefined` before this component's `Image` has finished baking, or
     * if it was never given one (M13.8 parity audit) — see `proteus-sdk`'s
     * `Handle::baked_image_size` doc.
     */
    bakedImageSize(handle: Handle): any;
    /**
     * `undefined` before this component's `Text` has finished baking, or if
     * it was never given one (M13.8 parity audit) — see `proteus-sdk`'s
     * `Handle::baked_text_size` doc.
     */
    bakedTextSize(handle: Handle): any;
    /**
     * Crops `handle`'s current baked image to a centered square, in place
     * (M13.8 parity audit) — `false` (no-op) if it has no baked image yet.
     * See `proteus-sdk`'s `Handle::center_crop_to_square` doc — the
     * motivating case is exactly a photo grid tile fed from images of
     * varying aspect ratios.
     */
    centerCropToSquare(handle: Handle): boolean;
    /**
     * `spec` is a plain JS object matching the `ComponentSpec` TS
     * interface — see `ts/src/types.ts`. `spec.children`, if present, are
     * `Handle.id()` values (this bridge accepts raw ids here rather than
     * opaque `Handle` objects nested inside the spec, since the whole spec
     * deserializes through one `serde-wasm-bindgen` call).
     */
    component(spec: any): Handle;
    /**
     * Copies whichever baked image `source` currently shows onto `handle`
     * (M13.8 parity audit) — `false` (no-op) if `source` has no baked image
     * yet. See `proteus-sdk`'s `Handle::copy_baked_image_from` doc.
     */
    copyBakedImageFrom(handle: Handle, source: Handle): boolean;
    /**
     * Consumes `handle` — matches `proteus-sdk`'s own `Handle::destroy`,
     * which takes `self` by value. The entity is despawned; further use of
     * the JS `Handle` object after this call is invalid (same as in Rust).
     */
    destroy(handle: Handle): void;
    freeResources(handle: Handle): void;
    /**
     * Returns `undefined` if `handle` no longer refers to a live component.
     */
    get(handle: Handle): any;
    /**
     * Decode an encoded image (PNG/JPEG/…) and pack it into `main_atlas`,
     * returning a `TextureHandle` — A-04. Synchronous: the pixels are on
     * the GPU when this returns, so there is no "ready" event to wait for.
     *
     * `undefined` if the bytes could not be decoded. Replaces the old
     * workaround of spawning an off-screen component with `image: {bytes}`
     * and polling `bakedImageSize()` every frame.
     */
    loadTexture(bytes: Uint8Array, request: any): TextureHandle | undefined;
    /**
     * N→1 group transition (M13.8) — `source_ids` merge into `handle`. See
     * [`Self::split_to`]'s doc for why sources cross as ids, not `Handle`
     * objects.
     */
    mergeFrom(handle: Handle, source_ids: Float64Array, config: any, layout: any): void;
    /**
     * [`Self::merge_from`] with a per-source transition config (A-09). See
     * [`Self::split_to_with_behavior`].
     */
    mergeFromWithBehavior(handle: Handle, source_ids: Float64Array, config: any, layout: any, child_behavior: Function): void;
    constructor();
    onBlur(handle: Handle, cb: Function): void;
    onClick(handle: Handle, cb: Function): void;
    onDrag(handle: Handle, cb: Function): void;
    onDropped(signal: SignalHandle, cb: Function): void;
    onFocus(handle: Handle, cb: Function): void;
    onHoverEnter(handle: Handle, cb: Function): void;
    onHoverExit(handle: Handle, cb: Function): void;
    onPress(handle: Handle, cb: Function): void;
    onRelease(handle: Handle, cb: Function): void;
    /**
     * Fires when a transition targeting `handle` finishes — see
     * `proteus-sdk`'s `Handle::on_transition_complete` for which handle
     * that is per topology.
     */
    onTransitionComplete(handle: Handle, cb: Function): void;
    /**
     * Call when the pointer leaves the window/canvas — distinct from
     * `pointerMoved`, since `proteus-sdk`'s contract represents "no
     * position" as `None`, not a sentinel coordinate.
     */
    pointerLeft(): void;
    /**
     * `x`/`y` are **world-space** (viewport-center origin, Y-up) — not
     * window/CSS pixels. See this crate's top doc.
     */
    pointerMoved(x: number, y: number): void;
    pointerPressed(): void;
    pointerReleased(): void;
    removeChild(parent: Handle, child: Handle, destroy: boolean): void;
    /**
     * Overwrites both `handle`'s live geometry and its declared rest
     * state (M13.8 parity audit) — see `proteus-sdk`'s
     * `Handle::set_declared_geometry` doc: needed whenever a component's
     * real resting layout is only known *after* spawn (e.g. sized from its
     * own baked text/image footprint), since `splitTo`/`mergeFrom` resolve
     * a target's rest state from the declared value, not the live one.
     */
    setDeclaredGeometry(handle: Handle, state: any): void;
    /**
     * Disables or re-enables `handle` — see `proteus-sdk`'s
     * `Handle::set_disabled`.
     */
    setDisabled(handle: Handle, disabled: boolean): void;
    /**
     * Toggles `handle`'s click/hover eligibility at runtime (M13.8 parity
     * audit) — see `proteus-sdk`'s `Handle::set_interactive` doc.
     */
    setInteractive(handle: Handle, interactive: boolean): void;
    /**
     * Sets `handle`'s alpha multiplier — see `proteus-sdk`'s
     * `Handle::set_opacity`.
     */
    setOpacity(handle: Handle, opacity: number): void;
    /**
     * Shows an already-registered texture on `handle`, replacing whatever
     * image/text/composite it previously showed (M13.8 parity audit) —
     * `false` (no-op) if `texture` is evicted/unknown. See `proteus-sdk`'s
     * `Handle::set_texture` doc.
     */
    setTexture(handle: Handle, texture: TextureHandle): boolean;
    /**
     * Sets whether `handle` receives input mid-transition. Pass `null` or
     * `undefined` to remove the opt-in — see `proteus-sdk`'s
     * `Handle::set_transitioning_config`.
     */
    setTransitioningConfig(handle: Handle, config: any): void;
    /**
     * Shows or hides `handle` — see `proteus-sdk`'s `Handle::set_visible`.
     */
    setVisible(handle: Handle, visible: boolean): void;
    /**
     * `owner`, if present, is a `Handle.id()` value — not an opaque `Handle`
     * object. wasm-bindgen doesn't support `Option<&CustomStruct>`
     * parameters (confirmed by trying; `OptionFromWasmAbi` isn't
     * implemented for reference types), and taking `Option<Handle>` by
     * value would consume the caller's `Handle` on every owned-signal
     * creation — same id-based workaround `ComponentSpec.children` already
     * uses for the same reason.
     */
    signal(owner?: number | null): SignalHandle;
    /**
     * Consumes `signal` — matches `proteus-sdk`'s own `SignalHandle::destroy`,
     * which takes `self` by value. Further use of the JS `SignalHandle`
     * object after this call is invalid (same as in Rust).
     */
    signalDestroy(signal: SignalHandle): void;
    signalSet(signal: SignalHandle, to: Handle, from: Handle, config: any, interruptible: boolean): void;
    /**
     * 1→N group transition (M13.8) — `handle` splits into `target_ids`.
     * `target_ids` are `Handle.id()` values, not opaque `Handle` objects —
     * same reasoning as `ComponentSpec.children`/`signal(owner)`: taking a
     * JS `Handle` by value would invalidate the caller's own wrapper, and
     * there's no `Option<&CustomStruct>`-style workaround for a whole list
     * of them. `config`/`strategy` are plain JS objects matching the
     * `TransitionConfig`/`SplitStrategy` TS types — see `ts/src/types.ts`.
     */
    splitTo(handle: Handle, target_ids: Float64Array, config: any, strategy: any): void;
    /**
     * [`Self::split_to`] with a per-target transition config (A-09).
     *
     * `child_behavior` is a JS `(index, total) => TransitionConfig`. It is
     * called once per target here, before the request is enqueued — never
     * from inside an ECS system — so an ordinary JS closure is safe.
     */
    splitToWithBehavior(handle: Handle, target_ids: Float64Array, config: any, strategy: any, child_behavior: Function): void;
    /**
     * [`Self::split_to`], but with each target's rest geometry given
     * explicitly instead of resolved from its own declared/live
     * `QuadState` (M13.8 parity audit) — see `proteus-sdk`'s
     * `Handle::split_to_with_states` doc for when this is needed instead of
     * the plain id-list form. `targets` is a plain JS array of
     * `{id, state}` objects (`id` a `Handle.id()` value, `state` a
     * `QuadState`-shaped object) — one `serde-wasm-bindgen` call for the
     * whole array, same convention as the rest of this bridge.
     */
    splitToWithStates(handle: Handle, targets: any, config: any, strategy: any): void;
    texture(id: number): TextureHandle;
    textureState(handle: TextureHandle): any;
    /**
     * Advance one frame. A host that also owns this `ProteusApp`'s shared
     * `Proteus` (via [`ProteusApp::shared`]) — as `proteus-host-web`'s
     * `JsDriver` does — drives `tick`/`render` itself instead of calling
     * this; it's here for headless/standalone use (Node smoke tests, an app
     * with no host at all).
     */
    tick(dt: number): void;
}

export class SignalHandle {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
}

export class TextureHandle {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Reconstruct a `TextureHandle` from an id previously obtained from
     * [`JsTextureHandle::id`]. Real texture *registration* (turning bytes
     * into a `main_atlas` region) isn't exposed by this crate yet — see
     * `proteus-sdk`'s own `TextureHandle` doc for why (M11's ref-counting
     * is entity-scoped, not an independent resource).
     */
    static fromId(id: number): TextureHandle;
    /**
     * This texture's id, as `KeyData::as_ffi()` cast to `f64` — the
     * `slotmap` crate's own documented opaque-FFI-handle round-trip
     * (`as_ffi`/`from_ffi`), same shape as `Handle`'s entity-bits
     * conversion. Round-trips through [`JsTextureHandle::from_id`].
     */
    id(): number;
}

/**
 * Mount a TS-authored app on the `<canvas>` element with the given `id`.
 *
 * Calls `setup(app)` once, synchronously, before the first frame is queued.
 * Calls `update(dtSeconds)` every frame after, if provided. `app` (the same
 * [`ProteusApp`] `setup` received) stays valid for the app's whole
 * lifetime — a JS app that wants access to it in `update` should capture it
 * from `setup`'s own closure rather than expect it passed again; see
 * `ts/src/index.ts`'s `mount()` wrapper.
 */
export function mount(canvas_id: string, setup: Function, update: Function | null | undefined, config: any): Promise<void>;

/**
 * Mount the reference demo on the `<canvas>` element with the given `id`.
 * Fetches every asset [`DemoApp`] needs (relative to `images/`), then hands
 * off to `proteus_host_web::run` — nothing further to do here once that
 * returns; the browser's own event loop drives every frame after this.
 */
export function start(canvas_id: string): Promise<void>;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly start: (a: number, b: number) => any;
    readonly mount: (a: number, b: number, c: any, d: number, e: any) => any;
    readonly __wbg_proteusapp_free: (a: number, b: number) => void;
    readonly proteusapp_addChild: (a: number, b: number, c: number) => [number, number];
    readonly proteusapp_animateTo: (a: number, b: number, c: any, d: any) => [number, number];
    readonly proteusapp_bakeTexture: (a: number, b: number, c: number, d: number, e: number, f: any) => number;
    readonly proteusapp_bakedImageSize: (a: number, b: number) => any;
    readonly proteusapp_bakedTextSize: (a: number, b: number) => any;
    readonly proteusapp_centerCropToSquare: (a: number, b: number) => [number, number, number];
    readonly proteusapp_component: (a: number, b: any) => [number, number, number];
    readonly proteusapp_copyBakedImageFrom: (a: number, b: number, c: number) => [number, number, number];
    readonly proteusapp_destroy: (a: number, b: number) => [number, number];
    readonly proteusapp_freeResources: (a: number, b: number) => [number, number];
    readonly proteusapp_get: (a: number, b: number) => any;
    readonly proteusapp_loadTexture: (a: number, b: number, c: number, d: any) => number;
    readonly proteusapp_mergeFrom: (a: number, b: number, c: number, d: number, e: any, f: any) => [number, number];
    readonly proteusapp_mergeFromWithBehavior: (a: number, b: number, c: number, d: number, e: any, f: any, g: any) => [number, number];
    readonly proteusapp_new: () => number;
    readonly proteusapp_onBlur: (a: number, b: number, c: any) => void;
    readonly proteusapp_onClick: (a: number, b: number, c: any) => void;
    readonly proteusapp_onDrag: (a: number, b: number, c: any) => void;
    readonly proteusapp_onDropped: (a: number, b: number, c: any) => void;
    readonly proteusapp_onFocus: (a: number, b: number, c: any) => void;
    readonly proteusapp_onHoverEnter: (a: number, b: number, c: any) => void;
    readonly proteusapp_onHoverExit: (a: number, b: number, c: any) => void;
    readonly proteusapp_onPress: (a: number, b: number, c: any) => void;
    readonly proteusapp_onRelease: (a: number, b: number, c: any) => void;
    readonly proteusapp_onTransitionComplete: (a: number, b: number, c: any) => void;
    readonly proteusapp_pointerLeft: (a: number) => void;
    readonly proteusapp_pointerMoved: (a: number, b: number, c: number) => void;
    readonly proteusapp_pointerPressed: (a: number) => void;
    readonly proteusapp_pointerReleased: (a: number) => void;
    readonly proteusapp_removeChild: (a: number, b: number, c: number, d: number) => [number, number];
    readonly proteusapp_setDeclaredGeometry: (a: number, b: number, c: any) => [number, number];
    readonly proteusapp_setDisabled: (a: number, b: number, c: number) => [number, number];
    readonly proteusapp_setInteractive: (a: number, b: number, c: number) => [number, number];
    readonly proteusapp_setOpacity: (a: number, b: number, c: number) => [number, number];
    readonly proteusapp_setTexture: (a: number, b: number, c: number) => [number, number, number];
    readonly proteusapp_setTransitioningConfig: (a: number, b: number, c: any) => [number, number];
    readonly proteusapp_setVisible: (a: number, b: number, c: number) => [number, number];
    readonly proteusapp_signal: (a: number, b: number, c: number) => number;
    readonly proteusapp_signalDestroy: (a: number, b: number) => void;
    readonly proteusapp_signalSet: (a: number, b: number, c: number, d: number, e: any, f: number) => [number, number];
    readonly proteusapp_splitTo: (a: number, b: number, c: number, d: number, e: any, f: any) => [number, number];
    readonly proteusapp_splitToWithBehavior: (a: number, b: number, c: number, d: number, e: any, f: any, g: any) => [number, number];
    readonly proteusapp_splitToWithStates: (a: number, b: number, c: any, d: any, e: any) => [number, number];
    readonly proteusapp_texture: (a: number, b: number) => number;
    readonly proteusapp_textureState: (a: number, b: number) => any;
    readonly proteusapp_tick: (a: number, b: number) => void;
    readonly __wbg_handle_free: (a: number, b: number) => void;
    readonly __wbg_signalhandle_free: (a: number, b: number) => void;
    readonly __wbg_texturehandle_free: (a: number, b: number) => void;
    readonly handle_fromId: (a: number) => number;
    readonly handle_id: (a: number) => number;
    readonly texturehandle_fromId: (a: number) => number;
    readonly texturehandle_id: (a: number) => number;
    readonly wasm_bindgen_4885b863f3debd44___convert__closures_____invoke___f64______true_: (a: number, b: number, c: number) => void;
    readonly wasm_bindgen_4885b863f3debd44___convert__closures_____invoke___wasm_bindgen_4885b863f3debd44___JsValue__core_ed718c3d60ebd546___result__Result_____wasm_bindgen_4885b863f3debd44___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_4885b863f3debd44___convert__closures_____invoke___js_sys_b69d6bf4f8b2c717___Function_fn_wasm_bindgen_4885b863f3debd44___JsValue_____wasm_bindgen_4885b863f3debd44___sys__Undefined___js_sys_b69d6bf4f8b2c717___Function_fn_wasm_bindgen_4885b863f3debd44___JsValue_____wasm_bindgen_4885b863f3debd44___sys__Undefined_______true_: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_4885b863f3debd44___convert__closures_____invoke___wasm_bindgen_4885b863f3debd44___JsValue______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_4885b863f3debd44___convert__closures_____invoke___js_sys_b69d6bf4f8b2c717___Array______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_4885b863f3debd44___convert__closures_____invoke___js_sys_b69d6bf4f8b2c717___Array______true__4: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_4885b863f3debd44___convert__closures_____invoke___js_sys_b69d6bf4f8b2c717___Array______true__5: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_4885b863f3debd44___convert__closures_____invoke_______true_: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
