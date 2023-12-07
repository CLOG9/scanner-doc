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

