# gml_syntax.js

A JavaScript syntax highligher for the GameMaker Language, [YoYo Games' GameMaker Studio 1.4 and 2.x](https://yoyogames.com) programming language.

**Includes:**
* Local and global variable scoping
* In-function [documentation linking](http://docs2.yoyogames.com/) for easy referencing

## Demo

[screenshot goes here]

You can check out a live demo of gml_syntax.js in your browser **[here](https://banack.me/gm/gml_syntax/)**.

## Getting Started

1. Download the files contained within **[gml_syntax/src](https://github.com/zbanack/gml_syntax/tree/master/src)**
	1. Minified versions of the JavaScript code and CSS are available (and recommended): **[gml_syntax/src/min](https://github.com/zbanack/gml_syntax/tree/master/src/min)**
2. Upload the files to your webhost
	1. Alternatively, you can use a CDN to serve raw files

### Setup

* Once the files are uploaded, you must reference them in a script tag in the `<head>` of your document (e.g. index.html):
	* gm_docs2.js/gm_docs2-min.js is optional. If you don't care for in-function documentation linking, it can be excluded.

```
<script src="src/min/gml_syntax-min.js"></script>
<script src="src/min/gm_docs2-min.js"></script>

<link rel="stylesheet" href="src/min/gml_style-min.css">
```

### Usage

1. Put GameMaker Language code snippets in `<div class="gml_syntax">...</div>`.
2. Call the function, `gml_syntax()`, on `<body>` load.

```
<body onload="gml_syntax()">
```

If you don't have access to the `<body>` tag, you can do something similar to the following:

```
<script>
window.onload = function() {
  gml_syntax();
};
</script>
```

## Compression/Minifying

* For JavaScript code compression, this project uses [Closure Compiler](https://closure-compiler.appspot.com/home).
* For CSS compression, this project uses [CSSO](https://css.github.io/csso/csso.html).

## Authors

* **Zack Banack** - *Initial work* - [Github](https://github.com/zbanack), [Website](https://zackbanack.com)

## License

This project is licensed under the GNU AGPLv3 License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

* **Richard Knoll** - *JavaScript lexer* [rknoll](https://github.com/joeattardi/json-colorizer)
* **Google Code Prettify** - *Tokenizing/regex syntax* [JavaScript code prettifier](https://github.com/google/code-prettify)
* **GMLScripts.com** - *Hundreds of GameMaker Language code snippets to test* [GML Scripts](https://www.gmlscripts.com/)
* **Hani** - *Clipboard copying* [Stack Overflow](https://stackoverflow.com/a/38672314)
* **The Step Event** - *A side project for which this project was created* [The Step Event](http://thestepevent.com)