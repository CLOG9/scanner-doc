/* tslint:disable */
/* eslint-disable */
/**
* @param {ImageData} data
* @returns {Quad | undefined}
*/
export function find_document(data: ImageData): Quad | undefined;
/**
* @param {ImageData} data
* @param {Quad} region
* @param {number} target_width
* @param {number | undefined} target_height
* @returns {ImageData}
*/
export function extract_document(data: ImageData, region: Quad, target_width: number, target_height?: number): ImageData;
/**
*/
export class Point {
  free(): void;
/**
*/
  x: number;
/**
*/
  y: number;
}
/**
*/
export class Quad {
  free(): void;
/**
* @param {number} ax
* @param {number} ay
* @param {number} bx
* @param {number} by
* @param {number} cx
* @param {number} cy
* @param {number} dx
* @param {number} dy
*/
  constructor(ax: number, ay: number, bx: number, by: number, cx: number, cy: number, dx: number, dy: number);
/**
*/
  a: Point;
/**
*/
  b: Point;
/**
*/
  c: Point;
/**
*/
  d: Point;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_point_free: (a: number) => void;
  readonly __wbg_get_point_x: (a: number) => number;
  readonly __wbg_set_point_x: (a: number, b: number) => void;
  readonly __wbg_get_point_y: (a: number) => number;
  readonly __wbg_set_point_y: (a: number, b: number) => void;
  readonly __wbg_get_quad_a: (a: number) => number;
  readonly __wbg_set_quad_a: (a: number, b: number) => void;
  readonly __wbg_get_quad_b: (a: number) => number;
  readonly __wbg_set_quad_b: (a: number, b: number) => void;
  readonly __wbg_get_quad_c: (a: number) => number;
  readonly __wbg_set_quad_c: (a: number, b: number) => void;
  readonly __wbg_get_quad_d: (a: number) => number;
  readonly __wbg_set_quad_d: (a: number, b: number) => void;
  readonly quad_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => number;
  readonly find_document: (a: number) => number;
  readonly extract_document: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly __wbg_quad_free: (a: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
