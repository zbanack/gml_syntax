# gml_syntax.js

A JavaScript syntax parser for the GameMaker Language, [YoYo Games' GameMaker Studio 1.4 and 2.x](https://yoyogames.com) programming language. Created for [The Step Event](http://thestepevent.com).

**Includes:**
* Local, global, and resource-level variable scoping
* Macros, enums, and regions
* Faux resource referencing (sprite*, object*, spr_*, obj_*)

## Demo

You can check out a live demo of gml_syntax.js, with pretty-printing applied, in your browser at **[GMLsnip.com](http://gmlsnip.com)**.

![gml_syntax demo image 0](https://github.com/zbanack/gml_syntax/blob/master/promo/img0.png?raw=true)
![gml_syntax demo image 1](https://github.com/zbanack/gml_syntax/blob/master/promo/img1.png?raw=true)
![gml_syntax demo image 2](https://github.com/zbanack/gml_syntax/blob/master/promo/img2.png?raw=true)
![gml_syntax demo image 3](https://github.com/zbanack/gml_syntax/blob/master/promo/img3.png?raw=true)

### Usage

Call function gml_syntax(input_str)
 * @param [String]   input_str      Optional, string to tokenize
 * @return {Array}   return_stack   Token objects (class and nanme)


## Compression/Minifying

* For JavaScript code compression, this project uses [Closure Compiler](https://closure-compiler.appspot.com/home).
* For CSS compression, this project uses [CSSO](https://css.github.io/csso/csso.html).

## Browser Support

This project performs as intended on the following web browsers:
* Google Chrome v70.0.3538.102
* Firefox Firefox v63.0.1
* Internet Explorer v11.345.17134.0
* Safari (macOS) Version 12.0 (14606.1.36.1.9)
* Microsoft Edge v42.17134.1.0
* Microsoft EdgeHTML v17.17134

## Authors

* **Zack Banack** - *Initial work* - [Github](https://github.com/zbanack), [Website](https://zackbanack.com)

## License

This project is licensed under the GNU GPLv3 License - see the [LICENSE.md](LICENSE) file for details.

## Acknowledgments

* **Richard Knoll** - *JavaScript lexer*, [rknoll](https://github.com/joeattardi/json-colorizer)
* **Google Code Prettify** - *Tokenizing/regex syntax*,  [JavaScript code prettifier](https://github.com/google/code-prettify)
* **GMLScripts.com** - *Hundreds of GameMaker Language code snippets to test*,  [GML Scripts](https://www.gmlscripts.com/)
* **Hani** - *Clipboard copying*,  [Stack Overflow](https://stackoverflow.com/a/38672314)
* **The Step Event** - *A side project for which this project was created*,  [The Step Event](http://thestepevent.com)
