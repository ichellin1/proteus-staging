/* tslint:disable */
/* eslint-disable */

/**
 * A pending hires fetch for the enlarged gallery image — returned by
 * [`ProteusApp::take_pending_gallery_hires_fetch`]. `width`/`height` are
 * the actual on-screen fitted pixel dimensions `Demo` computed, already
 * proportionally capped at `GALLERY_LARGE_IMAGE_MAX_SIDE`; `photo_id`
 * requests the same picsum.photos photo the tile's low-res image already
 * shows, just bigger — `Demo` itself never tracks a photo id (see
 * `ProteusApp::tile_photo_id`'s own doc), so this shell stitches it back
 * in from `Demo::take_pending_gallery_hires_fetch`'s bare `idx`.
 */
export class GalleryHiresFetchRequest {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    height: number;
    photo_id: number;
    tile_idx: number;
    width: number;
}

/**
 * Proteus web application. Create via `ProteusApp.init(canvasId)`.
 */
export class ProteusApp {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Bakes one frame (1-indexed to match `index.html`'s own
     * `frame-NN.png` file naming, 1..=19) of the Splash logo's idle
     * hatch-sweep animation and hands the whole set-so-far to `Demo::
     * set_logo_frames` — see [`ProteusApp::add_frame`]'s own doc for why
     * incrementally, and why that's fine.
     */
    add_logo_frame(frame_idx: number, bytes: Uint8Array): void;
    /**
     * Color-dark counterpart of `add_logo_frame` — feeds `Demo::
     * set_loading_logo_frames_dark` instead (the `Loading` screen's own
     * dark-treatment logo; the Splash logo above never has to
     * theme-crossfade).
     */
    add_logo_frame_dark(frame_idx: number, bytes: Uint8Array): void;
    /**
     * Initialise Proteus on the `<canvas>` element with the given `id`.
     *
     * Returns a JS `Promise<ProteusApp>`. Call `tick(dt_ms)` inside
     * `requestAnimationFrame` to drive the render loop.
     */
    static init(canvas_id: string): Promise<ProteusApp>;
    /**
     * Report a primary-button press.
     * Call from `canvas.addEventListener('mousedown', ...)`.
     */
    on_mouse_down(): void;
    /**
     * Report that the pointer has left the canvas.
     * Call from `canvas.addEventListener('mouseleave', ...)`.
     */
    on_mouse_leave(): void;
    /**
     * Report a pointer move. `x`/`y` are CSS pixels (origin top-left).
     * Converts to world-space (origin center, Y up) before forwarding to
     * `Demo`. Call from `canvas.addEventListener('mousemove', ...)`.
     */
    on_mouse_move(x: number, y: number): void;
    /**
     * Report a primary-button release.
     * Call from `canvas.addEventListener('mouseup', ...)`.
     */
    on_mouse_up(): void;
    /**
     * Uploads one decoded RGBA frame (`width×height×4` bytes, matching
     * whatever `start_video` was called with) straight to the video
     * texture, and latches `Demo::set_video_first_frame_shown` — drives
     * `Demo::advance_video_loading`'s loading-dots visibility. Call once
     * per `<video>` `requestVideoFrameCallback`.
     */
    push_video_frame(rgba: Uint8Array): void;
    /**
     * Notify Proteus that the canvas has been resized to `width` × `height`
     * CSS pixels. Call this from a `ResizeObserver` callback.
     */
    resize(width: number, height: number): void;
    set_background_image(bytes: Uint8Array): void;
    set_background_image_dark(bytes: Uint8Array): void;
    /**
     * Attaches the fetched hires bytes to the enlarged gallery view.
     */
    set_gallery_hires_image(tile_idx: number, bytes: Uint8Array): void;
    /**
     * Attaches a fetched gallery image. Call once per tile, after JS has
     * fetched its bytes. `photo_id` is stashed (`tile_photo_id`) for
     * later reuse if this tile gets enlarged — `Demo::
     * set_gallery_tile_image` only ever needs the aspect ratio, not the
     * id itself.
     */
    set_gallery_tile_image(tile_idx: number, bytes: Uint8Array, photo_id: number, aspect_w: number, aspect_h: number): void;
    set_nav_back_icon(bytes: Uint8Array): void;
    set_nav_back_icon_dark(bytes: Uint8Array): void;
    set_nav_home_icon(bytes: Uint8Array): void;
    set_nav_home_icon_dark(bytes: Uint8Array): void;
    set_nav_home_icon_selected(bytes: Uint8Array): void;
    set_nav_home_icon_selected_dark(bytes: Uint8Array): void;
    set_nav_logo_lockup(bytes: Uint8Array): void;
    set_nav_logo_lockup_dark(bytes: Uint8Array): void;
    set_theme_moon_icon(bytes: Uint8Array): void;
    set_theme_moon_icon_dark(bytes: Uint8Array): void;
    set_theme_sun_icon(bytes: Uint8Array): void;
    set_theme_sun_icon_dark(bytes: Uint8Array): void;
    /**
     * Attaches box-cover art to tile `tile_idx`.
     */
    set_tile_image(tile_idx: number, bytes: Uint8Array): void;
    /**
     * Sizes the pipeline's video texture. Call once `<video>`'s
     * `loadedmetadata` event has fired, passing its `videoWidth`/
     * `videoHeight` — the entity-side `VideoPlayer`/`VideoCrossfade`
     * attachment already happened synchronously inside `Demo` itself, the
     * instant the tile was clicked (see `Demo::take_pending_video_start`'s
     * own doc); this is purely the GPU-texture half `Demo` never touches,
     * mirroring `proteus-shell-native::apply_video_actions` exactly (it
     * doesn't touch any entity either, for the same reason).
     *
     * Rejects `0×0` outright rather than trusting it — some browsers'
     * `loadedmetadata` can fire on an MSE-backed `<video>` before
     * `videoWidth`/`videoHeight` are actually populated, and a `0×0` wgpu
     * texture is itself invalid.
     */
    start_video(tile_idx: number, width: number, height: number): void;
    /**
     * Returns `Some(side_px)` exactly once per `Loading` entry — the
     * square pixel size JS should request each of the 12 gallery images
     * at. `None` if nothing changed since the last call.
     *
     * `request.tile_side_px` is logical and uncapped (see
     * `GalleryFetchRequest`'s doc) — capped here at `MAX_IMAGE_SIDE`: the
     * same 400px cap `bake_pending_images` bakes tiles at, so a big
     * viewport doesn't fetch (and immediately downsample away) far more
     * bytes than any tile can ever show. No `scale_factor` multiply first,
     * unlike `proteus-shell-native::apply_gallery_fetch` — this shell's
     * canvas resolution is already 1:1 CSS pixels (see `ProteusApp::init`'s
     * doc), so there's no separate physical-pixel size to convert to.
     */
    take_pending_gallery_fetch(): number | undefined;
    /**
     * `true` exactly once whenever the hires fetch was just cancelled
     * (backing out of `GalleryImage` before the hires image arrived) — JS
     * should `.abort()` its in-flight fetch's `AbortController`, if any,
     * on seeing this.
     */
    take_pending_gallery_hires_cancel(): boolean;
    /**
     * Returns the pending hires fetch for the enlarged gallery image, once
     * per `GalleryImage` entry — polled once per `tick()` from
     * `index.html`, same "polled take" shape as
     * [`Self::take_pending_gallery_fetch`].
     *
     * `request.width_px`/`height_px` are logical and uncapped (see
     * `GalleryHiresFetchRequest`'s doc) — capped here at
     * `GALLERY_LARGE_IMAGE_MAX_SIDE`, proportionally: the *larger* axis
     * against the cap, both scaled by that same factor, never clamped
     * independently (independent clamping only changes a square request's
     * aspect ratio by construction — both axes equal — but silently
     * distorts a portrait/landscape one the instant just one axis crosses
     * the cap, which would show up as a shift/"different crop" the moment
     * hires swaps in over the low-res stand-in — see `Demo::
     * start_gallery_to_image`'s doc for the same one-extra-degree-of-
     * freedom hazard). No `scale_factor` multiply first — see
     * [`Self::take_pending_gallery_fetch`]'s doc for why. Mirrors
     * `proteus-shell-native::apply_gallery_hires_fetch`.
     */
    take_pending_gallery_hires_fetch(): GalleryHiresFetchRequest | undefined;
    /**
     * Returns `true` once, the first `tick()` after a video load timed
     * out — unlike `take_pending_video_stop`, no cleanup has happened
     * here (the screen stays on `VideoScreen`, now showing the error
     * text); this just tells JS to abort whatever HLS segment fetch is
     * still in flight so a failed load stops burning bandwidth in the
     * background. See `Demo::take_pending_video_cancel`'s own doc.
     */
    take_pending_video_cancel(): boolean;
    /**
     * Returns the tile index playback should start for, once, or
     * `undefined` if nothing changed since the last call. Call once per
     * `tick()`; on `Some`, load/play that tile's HLS stream and — once
     * `loadedmetadata` fires — call [`Self::start_video`].
     */
    take_pending_video_start(): number | undefined;
    /**
     * Returns `true` once, the first `tick()` after the screen was clicked
     * to stop playback — the corresponding `<video>` element should be
     * paused. `Demo`-side texture/component cleanup has already happened
     * by the time this flips true; this call also releases the GPU video
     * texture, since `Demo` itself never touches the GPU.
     */
    take_pending_video_stop(): boolean;
    /**
     * Advance one frame. `dt_ms` is the elapsed time in milliseconds (pass
     * `performance.now()` delta from the rAF callback).
     */
    tick(dt_ms: number): void;
}

/**
 * Legacy entry point. The full `ProteusApp` class is preferred.
 */
export function proteus_init(canvas_id: string): Promise<void>;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_galleryhiresfetchrequest_free: (a: number, b: number) => void;
    readonly __wbg_get_galleryhiresfetchrequest_height: (a: number) => number;
    readonly __wbg_get_galleryhiresfetchrequest_photo_id: (a: number) => number;
    readonly __wbg_get_galleryhiresfetchrequest_tile_idx: (a: number) => number;
    readonly __wbg_get_galleryhiresfetchrequest_width: (a: number) => number;
    readonly __wbg_proteusapp_free: (a: number, b: number) => void;
    readonly __wbg_set_galleryhiresfetchrequest_height: (a: number, b: number) => void;
    readonly __wbg_set_galleryhiresfetchrequest_photo_id: (a: number, b: number) => void;
    readonly __wbg_set_galleryhiresfetchrequest_tile_idx: (a: number, b: number) => void;
    readonly __wbg_set_galleryhiresfetchrequest_width: (a: number, b: number) => void;
    readonly proteus_init: (a: number, b: number) => any;
    readonly proteusapp_add_logo_frame: (a: number, b: number, c: number, d: number) => void;
    readonly proteusapp_add_logo_frame_dark: (a: number, b: number, c: number, d: number) => void;
    readonly proteusapp_init: (a: number, b: number) => any;
    readonly proteusapp_on_mouse_down: (a: number) => void;
    readonly proteusapp_on_mouse_leave: (a: number) => void;
    readonly proteusapp_on_mouse_move: (a: number, b: number, c: number) => void;
    readonly proteusapp_on_mouse_up: (a: number) => void;
    readonly proteusapp_push_video_frame: (a: number, b: number, c: number) => void;
    readonly proteusapp_resize: (a: number, b: number, c: number) => void;
    readonly proteusapp_set_background_image: (a: number, b: number, c: number) => void;
    readonly proteusapp_set_background_image_dark: (a: number, b: number, c: number) => void;
    readonly proteusapp_set_gallery_hires_image: (a: number, b: number, c: number, d: number) => void;
    readonly proteusapp_set_gallery_tile_image: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
    readonly proteusapp_set_nav_back_icon: (a: number, b: number, c: number) => void;
    readonly proteusapp_set_nav_back_icon_dark: (a: number, b: number, c: number) => void;
    readonly proteusapp_set_nav_home_icon: (a: number, b: number, c: number) => void;
    readonly proteusapp_set_nav_home_icon_dark: (a: number, b: number, c: number) => void;
    readonly proteusapp_set_nav_home_icon_selected: (a: number, b: number, c: number) => void;
    readonly proteusapp_set_nav_home_icon_selected_dark: (a: number, b: number, c: number) => void;
    readonly proteusapp_set_nav_logo_lockup: (a: number, b: number, c: number) => void;
    readonly proteusapp_set_nav_logo_lockup_dark: (a: number, b: number, c: number) => void;
    readonly proteusapp_set_theme_moon_icon: (a: number, b: number, c: number) => void;
    readonly proteusapp_set_theme_moon_icon_dark: (a: number, b: number, c: number) => void;
    readonly proteusapp_set_theme_sun_icon: (a: number, b: number, c: number) => void;
    readonly proteusapp_set_theme_sun_icon_dark: (a: number, b: number, c: number) => void;
    readonly proteusapp_set_tile_image: (a: number, b: number, c: number, d: number) => void;
    readonly proteusapp_start_video: (a: number, b: number, c: number, d: number) => void;
    readonly proteusapp_take_pending_gallery_fetch: (a: number) => number;
    readonly proteusapp_take_pending_gallery_hires_cancel: (a: number) => number;
    readonly proteusapp_take_pending_gallery_hires_fetch: (a: number) => number;
    readonly proteusapp_take_pending_video_cancel: (a: number) => number;
    readonly proteusapp_take_pending_video_start: (a: number) => number;
    readonly proteusapp_take_pending_video_stop: (a: number) => number;
    readonly proteusapp_tick: (a: number, b: number) => void;
    readonly wasm_bindgen_4885b863f3debd44___convert__closures_____invoke___wasm_bindgen_4885b863f3debd44___JsValue__core_ed718c3d60ebd546___result__Result_____wasm_bindgen_4885b863f3debd44___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_4885b863f3debd44___convert__closures_____invoke___js_sys_b69d6bf4f8b2c717___Function_fn_wasm_bindgen_4885b863f3debd44___JsValue_____wasm_bindgen_4885b863f3debd44___sys__Undefined___js_sys_b69d6bf4f8b2c717___Function_fn_wasm_bindgen_4885b863f3debd44___JsValue_____wasm_bindgen_4885b863f3debd44___sys__Undefined_______true_: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_4885b863f3debd44___convert__closures_____invoke___wasm_bindgen_4885b863f3debd44___JsValue______true_: (a: number, b: number, c: any) => void;
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
