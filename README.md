<h1 align="center"> Doc scanner docs </h1>
Doc scanner is a document scanning Rust library built with the use of WASM to ship bindings to the JS, Kotlin envs.

<h2> Table of content </h2>
<li> Functionality </li>
<li> Walkthrough </li>
<li> API </li>
<li> Implemenetation </li>

<h2> Functionality </h2>
doc scanner uses Convolution and other math calculation formulas to detect documents, cards in images in diffrent positions, persepectives with any type of backgrounds and crop the images based on the detected object then perform the perspective correction to turn into a 2D like scanned image.
<h3>Examples:</h3>

<image src="./b1.jpg" alt="before1" ></image>
<image src="./a1.png" alt="after1" ></image>
<image src="./bb.jpg" alt="before2" ></image>
<image src="./a2.png" alt="after2" ></image>
