<h1 align="center"> Doc scanner </h1>
Doc scanner is a document scanning Rust library built with the use of WASM to ship bindings to the JS, Kotlin envs.

<h2> Table of content </h2>
<li> Functionality </li>
<li> Walkthrough </li>
<li> Implemenetation </li>

<h2> Functionality </h2>
doc scanner uses Convolution and other math calculation formulas to detect documents, cards in images in diffrent positions, persepectives with any type of backgrounds and crop the images based on the detected object then perform the perspective correction to turn into a 2D like scanned image.
<h3>Examples:</h3>

<image src="./b1.jpg" alt="before1" ></image>
<image src="./a1.png" alt="after1" ></image>
<image src="./bb.jpg" alt="before2" ></image>
<image src="./a2.png" alt="after2" ></image>

<h2> Walkthrough </h2>

Doc scanner rust lib provides two main functions that can be used to get a scanned document.
the  ``find_document()`` function detects the best quadratic combination in an image that can possibly represent a document while the ``extract_document()`` function does the cropping and perspective transformation.

<h3> <b>find_document()</b> </h3>

```
find_document(data: ImageData): WasmQuad | undefined
```

ImageData: The underlying pixel data of an area of a element. It is created using the ImageData() constructor or creator methods on the CanvasRenderingContext2D object associated with a canvas: createImageData() and getImageData(). It can also be used to set a part of the canvas by using putImageData().

```
 Quad {
            a: Point { x: ax, y: ay },
            b: Point { x: bx, y: by },
            c: Point { x: cx, y: cy },
            d: Point { x: dx, y: dy },
        }
```

the function return an object of quadratic combination of four points that represents the four edges of the detect document.
each point has its own X and Y cordinates.

<h3> <b>extract_document()</b> </h3>

```
extract_document(data: ImageData, region: WasmQuad, target_width: number, target_height?: number | undefined): ImageData
```
data: the actual image binary data.
region: the quadratic combination passed through the WasmQuad function `we will explain it later`.
target_width: the resolution width (highly recommneded to use the default value **1224**). 

to achieve the right extraction follow these steps:
<li> pass the Quad object to the WasmQuad function before passing it to the extraction function </li>
<li> keep the target_width at the default value **1224** </li>
<li> no need to pass the target_height value, leave it undefined </li>

<h3> WasmQuad() </h3>

```WasmQuad(ax: number, ay: number, bx: number, by: number, cx: number, cy: number, dx: number, dy: number): WasmQuad```

accepts quad object returned from the find_document() and returns a WasmQuad object

<h2>Implementation</h2>
to use the library with the use of Wasm u should first initialize the wasm bindings in ur programming env
here's an example with Javascript:

```
//
// IMPORT INIT FUNCTION FROM THE WASM PACKAGE
//
import init from "../../pkg/scanner";

// init
let load = init().catch(() => {});

// create a messaging system to invoke the other functions 
self.onmessage = async (evt: MessageEvent<{ msg: Message }>) => {
  await load;
  const { msg, ...data } = evt.data;
  try {
    const { result, transfer } = handle(msg);
    self.postMessage({ result, ...data }, transfer || []);
  } catch (err) {
    if (!(err instanceof Error)) {
      err = new Error(`Error in process worker: ${err}`);
    }
    self.postMessage({
      error: {
        message: (err as Error).message,
        stack: (err as Error).stack,
        name: (err as Error).name,
      },
      ...data,
    });
  }
};
```

