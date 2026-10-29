/* tslint:disable */
/* eslint-disable */

/**
 * A handle to a component.
 */
export class Handle {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Returns a handle for an ID from [`Handle::id`] or
     * `ComponentData.children`. The ID isn't checked: if its component has
     * been destroyed, methods that change it throw and `get` returns
     * `undefined`.
     */
    static fromId(id: number): Handle;
    /**
     * The component's ID: its entity's bits as a number, which is exact for
     * any realistic app (see the `dto` module). [`Handle::from_id`] turns it
     * back into a handle.
     */
    id(): number;
}

/**
 * A [`Proteus`](sdk::Proteus) app, as JavaScript sees it. Cloning shares the
 * same app.
 */
export class ProteusApp {
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Calls [`Handle::add_child`](sdk::Handle::add_child).
     */
    addChild(parent: Handle, child: Handle): void;
    /**
     * Calls [`Handle::animate_to`](sdk::Handle::animate_to).
     */
    animateTo(handle: Handle, to: any, config: any): void;
    /**
     * Calls [`Proteus::bake_texture`](sdk::Proteus::bake_texture).
     */
    bakeTexture(width: number, height: number, rgba: Uint8Array, request: any): TextureHandle;
    /**
     * Calls [`Handle::baked_image_size`](sdk::Handle::baked_image_size).
     * Returns `undefined` if there is no baked image.
     */
    bakedImageSize(handle: Handle): any;
    /**
     * Calls [`Handle::baked_text_size`](sdk::Handle::baked_text_size).
     * Returns `undefined` if there is no baked text.
     */
    bakedTextSize(handle: Handle): any;
    /**
     * Calls [`Proteus::bind`](sdk::Proteus::bind). `binding` is a
     * `KeyBinding` object, and `action` a built-in action's name or one of the
     * app's, which is defined if it isn't yet. Throws if `binding` isn't
     * valid.
     */
    bindKey(binding: any, action: string): void;
    /**
     * Calls [`TransitionChannel::destroy`](sdk::TransitionChannel::destroy). Consumes
     * `channel`: the JavaScript object can't be used afterwards.
     */
    channelDestroy(channel: TransitionChannel): void;
    /**
     * Calls [`TransitionChannel::set`](sdk::TransitionChannel::set).
     */
    channelSet(channel: TransitionChannel, to: Handle, from: Handle, config: any, interruptible: boolean): void;
    /**
     * Calls [`Proteus::clear_focus`](sdk::Proteus::clear_focus).
     */
    clearFocus(): void;
    /**
     * Calls [`Proteus::component`](sdk::Proteus::component). `spec` is a
     * `ComponentSpec` object; its `children` are handle IDs.
     */
    component(spec: any): Handle;
    /**
     * Calls [`Handle::copy_baked_image_from`](sdk::Handle::copy_baked_image_from).
     */
    copyBakedImageFrom(handle: Handle, source: Handle): boolean;
    /**
     * Calls [`Proteus::create_video`](sdk::Proteus::create_video).
     */
    createVideo(): VideoHandle;
    /**
     * Calls [`Handle::crop_image`](sdk::Handle::crop_image). Throws if
     * `crop` isn't a valid `ImageCrop`.
     */
    cropImage(handle: Handle, crop: any): boolean;
    /**
     * Calls [`Handle::declare_geometry`](sdk::Handle::declare_geometry).
     */
    declareGeometry(handle: Handle, state: any): void;
    /**
     * Calls [`Handle::declared_geometry`](sdk::Handle::declared_geometry):
     * the geometry, or `undefined` if the component no longer exists.
     */
    declaredGeometry(handle: Handle): any;
    /**
     * Calls [`Handle::destroy`](sdk::Handle::destroy). Consumes `handle`: the
     * JavaScript object can't be used afterwards.
     */
    destroy(handle: Handle): void;
    /**
     * Calls [`Handle::devices`](sdk::Handle::devices), as an array of device
     * names, or `undefined` if the component no longer exists.
     */
    devices(handle: Handle): Array<any> | undefined;
    /**
     * Calls [`Handle::focus`](sdk::Handle::focus). Throws, saying why, if the
     * component can't take focus.
     */
    focus(handle: Handle): void;
    /**
     * Calls [`Proteus::focused`](sdk::Proteus::focused).
     */
    focused(): Handle | undefined;
    /**
     * Calls [`Handle::free_resources`](sdk::Handle::free_resources).
     */
    freeResources(handle: Handle): void;
    /**
     * Calls [`Proteus::get`](sdk::Proteus::get). Returns `undefined` if the
     * component has been destroyed.
     */
    get(handle: Handle): any;
    /**
     * Calls [`Handle::hide_video`](sdk::Handle::hide_video).
     */
    hideVideo(handle: Handle): void;
    /**
     * Calls [`Proteus::input_devices`](sdk::Proteus::input_devices), as an
     * array of device names.
     */
    inputDevices(): Array<any>;
    /**
     * Calls [`Handle::is_focused`](sdk::Handle::is_focused).
     */
    isFocused(handle: Handle): boolean;
    /**
     * Calls [`Proteus::load_texture`](sdk::Proteus::load_texture). Returns
     * `undefined` if the bytes can't be decoded.
     */
    loadTexture(bytes: Uint8Array, request: any): TextureHandle | undefined;
    /**
     * Calls [`Handle::merge_from`](sdk::Handle::merge_from). The sources
     * cross as handle IDs.
     */
    mergeFrom(handle: Handle, source_ids: Float64Array, config: any, layout: any): void;
    /**
     * Calls [`Handle::merge_from_with_behavior`](sdk::Handle::merge_from_with_behavior).
     * `child_behavior` is called once per source, before the merge starts.
     */
    mergeFromWithBehavior(handle: Handle, source_ids: Float64Array, config: any, layout: any, child_behavior: Function): void;
    /**
     * Creates a standalone app, with no host, that draws nothing.
     */
    constructor();
    /**
     * Registers `cb` as one of the app's key callbacks; see
     * [`Proteus::on_key`](sdk::Proteus::on_key). `cb` gets a `KeyEvent`
     * object and returns `true` to claim it.
     */
    onAppKey(cb: Function): void;
    /**
     * Calls [`Handle::on_blur`](sdk::Handle::on_blur).
     */
    onBlur(handle: Handle, cb: Function): void;
    /**
     * Calls [`Handle::on_click`](sdk::Handle::on_click).
     */
    onClick(handle: Handle, cb: Function): void;
    /**
     * Calls [`Handle::on_drag`](sdk::Handle::on_drag). `cb` receives the
     * movement as two numbers, `x` and `y`.
     */
    onDrag(handle: Handle, cb: Function): void;
    /**
     * Calls [`TransitionChannel::on_dropped`](sdk::TransitionChannel::on_dropped).
     */
    onDropped(channel: TransitionChannel, cb: Function): void;
    /**
     * Calls [`Handle::on_focus`](sdk::Handle::on_focus).
     */
    onFocus(handle: Handle, cb: Function): void;
    /**
     * Calls [`Proteus::on_focus_lost`](sdk::Proteus::on_focus_lost). `cb`
     * gets the component's ID and the reason's name.
     */
    onFocusLost(cb: Function): void;
    /**
     * Calls [`Handle::on_hover_enter`](sdk::Handle::on_hover_enter).
     */
    onHoverEnter(handle: Handle, cb: Function): void;
    /**
     * Calls [`Handle::on_hover_exit`](sdk::Handle::on_hover_exit).
     */
    onHoverExit(handle: Handle, cb: Function): void;
    /**
     * Registers `cb` as a key callback of `handle`'s component; see
     * [`Handle::on_key`](sdk::Handle::on_key). `cb` gets a `KeyEvent` object
     * and returns `true` to claim it.
     */
    onKey(handle: Handle, cb: Function): void;
    /**
     * Calls [`Handle::on_press`](sdk::Handle::on_press).
     */
    onPress(handle: Handle, cb: Function): void;
    /**
     * Calls [`Handle::on_release`](sdk::Handle::on_release).
     */
    onRelease(handle: Handle, cb: Function): void;
    /**
     * Calls [`Handle::on_transition_complete`](sdk::Handle::on_transition_complete).
     */
    onTransitionComplete(handle: Handle, cb: Function): void;
    /**
     * Records that the pointer left the viewport: `pointer_moved(None)`.
     */
    pointerLeft(): void;
    /**
     * Calls [`Proteus::pointer_moved`](sdk::Proteus::pointer_moved). `x` and
     * `y` are world units: origin at the viewport center, y up.
     */
    pointerMoved(x: number, y: number): void;
    /**
     * Calls [`Proteus::pointer_pressed`](sdk::Proteus::pointer_pressed).
     */
    pointerPressed(): void;
    /**
     * Calls [`Proteus::pointer_released`](sdk::Proteus::pointer_released).
     */
    pointerReleased(): void;
    /**
     * Calls [`VideoHandle::release`](sdk::VideoHandle::release).
     */
    releaseVideo(video: VideoHandle): void;
    /**
     * Calls [`Handle::remove_child`](sdk::Handle::remove_child).
     */
    removeChild(parent: Handle, child: Handle): void;
    /**
     * Calls [`Proteus::reset_key_map`](sdk::Proteus::reset_key_map).
     */
    resetKeyMap(): void;
    /**
     * Calls [`Handle::set_declared_geometry`](sdk::Handle::set_declared_geometry).
     */
    setDeclaredGeometry(handle: Handle, state: any): void;
    /**
     * Calls [`Handle::set_default_focus`](sdk::Handle::set_default_focus).
     */
    setDefaultFocus(handle: Handle, _default: boolean): void;
    /**
     * Calls [`Handle::set_devices`](sdk::Handle::set_devices). Throws if
     * `devices` isn't an array of device names.
     */
    setDevices(handle: Handle, devices: any): void;
    /**
     * Calls [`Handle::set_disabled`](sdk::Handle::set_disabled).
     */
    setDisabled(handle: Handle, disabled: boolean): void;
    /**
     * Calls [`Handle::set_image`](sdk::Handle::set_image).
     */
    setImage(handle: Handle, image: any): void;
    /**
     * Calls [`Proteus::set_input_devices`](sdk::Proteus::set_input_devices).
     * Throws if `devices` isn't an array of device names.
     */
    setInputDevices(devices: any): void;
    /**
     * Calls [`Handle::set_interactive`](sdk::Handle::set_interactive).
     */
    setInteractive(handle: Handle, interactive: boolean): void;
    /**
     * Calls [`Handle::set_opacity`](sdk::Handle::set_opacity).
     */
    setOpacity(handle: Handle, opacity: number): void;
    /**
     * Calls [`Handle::set_text`](sdk::Handle::set_text).
     */
    setText(handle: Handle, text: any): void;
    /**
     * Calls [`Handle::set_texture`](sdk::Handle::set_texture).
     */
    setTexture(handle: Handle, texture: TextureHandle): boolean;
    /**
     * Calls [`Handle::set_transition_interaction`](sdk::Handle::set_transition_interaction).
     * `null` or `undefined` restores the default.
     */
    setTransitionInteraction(handle: Handle, config: any): void;
    /**
     * Calls [`Handle::set_video_crossfade`](sdk::Handle::set_video_crossfade).
     */
    setVideoCrossfade(handle: Handle, video_t: number): boolean;
    /**
     * Calls [`Handle::set_visible`](sdk::Handle::set_visible).
     */
    setVisible(handle: Handle, visible: boolean): void;
    /**
     * Calls [`Handle::show_video`](sdk::Handle::show_video).
     */
    showVideo(handle: Handle, video: VideoHandle): boolean;
    /**
     * Calls [`Handle::split_to`](sdk::Handle::split_to). The targets cross
     * as handle IDs.
     */
    splitTo(handle: Handle, target_ids: Float64Array, config: any, strategy: any): void;
    /**
     * Calls [`Handle::split_to_with_behavior`](sdk::Handle::split_to_with_behavior).
     * `child_behavior` is called once per target, before the split starts.
     */
    splitToWithBehavior(handle: Handle, target_ids: Float64Array, config: any, strategy: any, child_behavior: Function): void;
    /**
     * Calls [`Handle::split_to_with_states`](sdk::Handle::split_to_with_states).
     * `targets` is an array of `{ id, state }` objects.
     */
    splitToWithStates(handle: Handle, targets: any, config: any, strategy: any): void;
    /**
     * Returns a texture handle for a texture ID.
     */
    texture(id: number): TextureHandle;
    /**
     * Calls [`TextureHandle::state`](sdk::TextureHandle::state). Returns
     * `undefined` if the texture has been evicted or never existed.
     */
    textureState(handle: TextureHandle): any;
    /**
     * Calls [`Proteus::tick`](sdk::Proteus::tick). For a standalone app only:
     * a host ticks the shared `Proteus` itself.
     */
    tick(dt: number): void;
    /**
     * Calls [`Proteus::transition_channel`](sdk::Proteus::transition_channel).
     * `owner` is a handle ID, since `wasm-bindgen` can't take an optional
     * reference.
     */
    transitionChannel(owner?: number | null): TransitionChannel;
    /**
     * Calls [`Proteus::unbind`](sdk::Proteus::unbind), and returns the name of
     * the action the binding was bound to, if any. Throws if `binding` isn't
     * valid.
     */
    unbindKey(binding: any): string | undefined;
    /**
     * Calls [`VideoHandle::upload_frame`](sdk::VideoHandle::upload_frame).
     */
    uploadVideoFrame(video: VideoHandle, width: number, height: number, rgba: Uint8Array): boolean;
}

/**
 * A handle to a texture in the atlas.
 */
export class TextureHandle {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Returns a handle for an ID from [`JsTextureHandle::id`]. To add a
     * texture, use `loadTexture` or `bakeTexture`.
     */
    static fromId(id: number): TextureHandle;
    /**
     * The texture's ID, as a number. [`JsTextureHandle::from_id`] turns it
     * back into a handle.
     */
    id(): number;
}

/**
 * A handle to a transition channel. It has no methods of its own; it is
 * passed to `channelSet`, `channelDestroy` and `onDropped`.
 */
export class TransitionChannel {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
}

/**
 * A handle to a video whose frames the app supplies. It has no methods of
 * its own; it is passed to `uploadVideoFrame`, `releaseVideo` and
 * `showVideo`.
 */
export class VideoHandle {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
}

/**
 * Runs a JavaScript app on the `<canvas>` element with the given `id`.
 *
 * Calls `setup(app)` once, before the first frame, then `update(dtSeconds)`
 * every frame if it is given. To use the app in `update`, keep the one
 * passed to `setup`. `config` is a `ProteusConfigDto` object, or `null`.
 *
 * # Errors
 *
 * Throws if the canvas isn't found, the GPU can't be set up, or `config`
 * is invalid.
 */
export function mount(canvas_id: string, setup: Function, update: Function | null | undefined, config: any): Promise<void>;

/**
 * Runs the reference demo on the `<canvas>` element with the given `id`.
 *
 * Downloads every asset [`DemoApp`] needs from `images/`, since `setup` can't
 * wait for a download, then hands off to `proteus_host_web::run`. Returns
 * once the first frame is scheduled; the browser runs every frame after
 * that.
 *
 * # Errors
 *
 * Returns an error if the canvas isn't found or the GPU can't be set up.
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
    readonly proteusapp_bindKey: (a: number, b: any, c: number, d: number) => [number, number];
    readonly proteusapp_channelDestroy: (a: number, b: number) => void;
    readonly proteusapp_channelSet: (a: number, b: number, c: number, d: number, e: any, f: number) => [number, number];
    readonly proteusapp_clearFocus: (a: number) => void;
    readonly proteusapp_component: (a: number, b: any) => [number, number, number];
    readonly proteusapp_copyBakedImageFrom: (a: number, b: number, c: number) => [number, number, number];
    readonly proteusapp_createVideo: (a: number) => number;
    readonly proteusapp_cropImage: (a: number, b: number, c: any) => [number, number, number];
    readonly proteusapp_declareGeometry: (a: number, b: number, c: any) => [number, number];
    readonly proteusapp_declaredGeometry: (a: number, b: number) => any;
    readonly proteusapp_destroy: (a: number, b: number) => [number, number];
    readonly proteusapp_devices: (a: number, b: number) => any;
    readonly proteusapp_focus: (a: number, b: number) => [number, number];
    readonly proteusapp_focused: (a: number) => number;
    readonly proteusapp_freeResources: (a: number, b: number) => [number, number];
    readonly proteusapp_get: (a: number, b: number) => any;
    readonly proteusapp_hideVideo: (a: number, b: number) => [number, number];
    readonly proteusapp_inputDevices: (a: number) => any;
    readonly proteusapp_isFocused: (a: number, b: number) => number;
    readonly proteusapp_loadTexture: (a: number, b: number, c: number, d: any) => number;
    readonly proteusapp_mergeFrom: (a: number, b: number, c: number, d: number, e: any, f: any) => [number, number];
    readonly proteusapp_mergeFromWithBehavior: (a: number, b: number, c: number, d: number, e: any, f: any, g: any) => [number, number];
    readonly proteusapp_new: () => number;
    readonly proteusapp_onAppKey: (a: number, b: any) => void;
    readonly proteusapp_onBlur: (a: number, b: number, c: any) => void;
    readonly proteusapp_onClick: (a: number, b: number, c: any) => void;
    readonly proteusapp_onDrag: (a: number, b: number, c: any) => void;
    readonly proteusapp_onDropped: (a: number, b: number, c: any) => void;
    readonly proteusapp_onFocus: (a: number, b: number, c: any) => void;
    readonly proteusapp_onFocusLost: (a: number, b: any) => void;
    readonly proteusapp_onHoverEnter: (a: number, b: number, c: any) => void;
    readonly proteusapp_onHoverExit: (a: number, b: number, c: any) => void;
    readonly proteusapp_onKey: (a: number, b: number, c: any) => void;
    readonly proteusapp_onPress: (a: number, b: number, c: any) => void;
    readonly proteusapp_onRelease: (a: number, b: number, c: any) => void;
    readonly proteusapp_onTransitionComplete: (a: number, b: number, c: any) => void;
    readonly proteusapp_pointerLeft: (a: number) => void;
    readonly proteusapp_pointerMoved: (a: number, b: number, c: number) => void;
    readonly proteusapp_pointerPressed: (a: number) => void;
    readonly proteusapp_pointerReleased: (a: number) => void;
    readonly proteusapp_releaseVideo: (a: number, b: number) => void;
    readonly proteusapp_removeChild: (a: number, b: number, c: number) => [number, number];
    readonly proteusapp_resetKeyMap: (a: number) => void;
    readonly proteusapp_setDeclaredGeometry: (a: number, b: number, c: any) => [number, number];
    readonly proteusapp_setDefaultFocus: (a: number, b: number, c: number) => [number, number];
    readonly proteusapp_setDevices: (a: number, b: number, c: any) => [number, number];
    readonly proteusapp_setDisabled: (a: number, b: number, c: number) => [number, number];
    readonly proteusapp_setImage: (a: number, b: number, c: any) => [number, number];
    readonly proteusapp_setInputDevices: (a: number, b: any) => [number, number];
    readonly proteusapp_setInteractive: (a: number, b: number, c: number) => [number, number];
    readonly proteusapp_setOpacity: (a: number, b: number, c: number) => [number, number];
    readonly proteusapp_setText: (a: number, b: number, c: any) => [number, number];
    readonly proteusapp_setTexture: (a: number, b: number, c: number) => [number, number, number];
    readonly proteusapp_setTransitionInteraction: (a: number, b: number, c: any) => [number, number];
    readonly proteusapp_setVideoCrossfade: (a: number, b: number, c: number) => [number, number, number];
    readonly proteusapp_setVisible: (a: number, b: number, c: number) => [number, number];
    readonly proteusapp_showVideo: (a: number, b: number, c: number) => [number, number, number];
    readonly proteusapp_splitTo: (a: number, b: number, c: number, d: number, e: any, f: any) => [number, number];
    readonly proteusapp_splitToWithBehavior: (a: number, b: number, c: number, d: number, e: any, f: any, g: any) => [number, number];
    readonly proteusapp_splitToWithStates: (a: number, b: number, c: any, d: any, e: any) => [number, number];
    readonly proteusapp_texture: (a: number, b: number) => number;
    readonly proteusapp_textureState: (a: number, b: number) => any;
    readonly proteusapp_tick: (a: number, b: number) => void;
    readonly proteusapp_transitionChannel: (a: number, b: number, c: number) => number;
    readonly proteusapp_unbindKey: (a: number, b: any) => [number, number, number, number];
    readonly proteusapp_uploadVideoFrame: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
    readonly __wbg_handle_free: (a: number, b: number) => void;
    readonly __wbg_texturehandle_free: (a: number, b: number) => void;
    readonly __wbg_transitionchannel_free: (a: number, b: number) => void;
    readonly __wbg_videohandle_free: (a: number, b: number) => void;
    readonly handle_fromId: (a: number) => number;
    readonly handle_id: (a: number) => number;
    readonly texturehandle_fromId: (a: number) => number;
    readonly texturehandle_id: (a: number) => number;
    readonly wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___f64______true_: (a: number, b: number, c: number) => void;
    readonly wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue__core_37ee0ce0c4cd57d5___result__Result_____wasm_bindgen_947dc3570e8b2613___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined___js_sys_13cd74663037d13c___Function_fn_wasm_bindgen_947dc3570e8b2613___JsValue_____wasm_bindgen_947dc3570e8b2613___sys__Undefined_______true_: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___wasm_bindgen_947dc3570e8b2613___JsValue______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__4: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__5: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke___js_sys_13cd74663037d13c___Array______true__6: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_947dc3570e8b2613___convert__closures_____invoke_______true_: (a: number, b: number) => void;
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
