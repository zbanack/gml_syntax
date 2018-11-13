# gml_syntax.js

A JavaScript syntax highligher for the GameMaker Language, [YoYo Games' GameMaker Studio 1.4 and 2.x](https://yoyogames.com) programming language. Created for [The Step Event](http://thestepevent.com).

**Includes:**
* Color-coded syntax near-1:1 to what you'll find in GameMaker Studio 2.x
* Local and global variable scoping
* In-function [documentation linking](http://docs2.yoyogames.com/) for easy referencing
* Clipboard copying support

## Demo

[screenshot goes here]

You can check out a live demo of gml_syntax.js in your browser **[here](https://banack.me/gm/gml_syntax/)**.

## Getting Started

1. Download the files contained within **[gml_syntax/src](https://github.com/zbanack/gml_syntax/tree/master/src)**
	1. Minified versions of the JavaScript code and CSS are available (and recommended): **[gml_syntax/src/min](https://github.com/zbanack/gml_syntax/tree/master/src/min)**
2. Upload the files to your webhost
	1. Alternatively, you can use a CDN to serve raw files

### Setup

* Once the files are uploaded, you must reference them in a script tag in the `<head>` of your document (e.g. `index.html`):
	* `gm_docs2.js`/`gm_docs2-min.js` is optional. If you don't care for in-function documentation linking, it can be excluded.

```
<!-- gml_syntax JavaScript -->
<script src="src/min/gml_syntax-min.js"></script>
<script src="src/min/gm_docs2-min.js"></script>

<!-- gml_syntax Stylesheet -->
<link rel="stylesheet" href="src/min/gml_style-min.css">
```

### Usage

1. Put GameMaker Language code snippets in `<div class="gm_codeblock">...</div>`.
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

### Attributes

Inside the `<div class="gm_codeblock">`, you can define codeblock-specific attributes that will be appended to the snippet's header and footer.

Attribute     | Description
------------- | -------------
@author 	  | The author of the script
@source 	  | A URL to the source of the script
@title  	  | The name of the code snippet

## Examples

```
<div class="gm_codeblock" author="xot" source="https://www.gmlscripts.com/script/unix_timestamp" title="unix_timestamp([datetime])">
/// unix_timestamp([datetime])
//
//  Returns a Unix timestamp for the current time
//  or optionally given GameMaker datetime value.
//
//      datetime    GameMaker datetime, real
//
/// GMLscripts.com/license
{
    var timezone = date_get_timezone();
 
    date_set_timezone(timezone_utc);
 
    if (argument_count > 0) {
        var datetime = argument[0];
    } else {
        var datetime = date_current_datetime();
    }
 
    var timestamp = round(date_second_span(25569, datetime));
 
    date_set_timezone(timezone);
 
    return timestamp;
}
</div>
```

[insert image here]

```
<div class="gm_codeblock" author="xot" source="https://www.gmlscripts.com/script/fibonacci" title="fibonacci(n)">
/// fibonacci(n)
//
//  Returns the nth number of the Fibonacci sequence.
//
//      n           desired Fibonacci number, non-negative integer, real
//
/// GMLscripts.com/license
{
    return round(power((1+sqrt(5))/2,argument0)/sqrt(5));
}
</div>
```

[insert image here]

```
<div class="gm_codeblock" author="xot" source="https://www.gmlscripts.com/script/ds_grid_translate" title="ds_grid_translate(id,horiz,vert) ">
/// ds_grid_translate(id,horiz,vert)
//
//  Shifts the contents of a grid by a given number of rows
//  and columns. The contents are shifted so that they wrap
//  around to the opposite side of the grid data structure.
//
//      id          grid data structure, real
//      horiz       horizontal shift, real
//      vert        vertical shift, real
//
/// GMLscripts.com/license
{
    var dsid,w,h,sx,sy,mx,my,dx,dy,temp;
    dsid = argument0;
    w = ds_grid_width(dsid);
    h = ds_grid_height(dsid);
    sx = (((argument1 mod w)+w) mod w);
    sy = (((argument2 mod h)+h) mod h);
    mx = w-1;
    my = h-1;
    dx = mx-sx;
    dy = my-sy;
    temp = ds_grid_create(w,h);
    ds_grid_set_grid_region(temp,dsid,0,0,dx,dy,sx,sy);
    if (sx>0) ds_grid_set_grid_region(temp,dsid,dx+1,0,mx,dy,0,sy);
    if (sy>0) ds_grid_set_grid_region(temp,dsid,0,dy+1,dx,my,sx,0);
    if ((sx>0) && (sy>0)) ds_grid_set_grid_region(temp,dsid,dx+1,dy+1,mx,my,0,0);
    ds_grid_copy(dsid,temp);
    ds_grid_destroy(temp);
    return 0;
}
</div>
```

[insert image here]

## Compression/Minifying

* For JavaScript code compression, this project uses [Closure Compiler](https://closure-compiler.appspot.com/home).
* For CSS compression, this project uses [CSSO](https://css.github.io/csso/csso.html).

## Browser Support

This project performs as intended on the following web browsers:
* Microsoft Edge v42.17134.1.0
* Microsoft EdgeHTML v17.17134
* Google Chrome v70.0.3538.102
* Firefox Firefox v63.0.1
* Internet Explorer v11.345.17134.0

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