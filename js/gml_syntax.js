var model_span_tag_closelose = '</span>';

const project_title = 'GMLJS',
gml_class = 'gml_codeblock',
TSE_link = 'https://banack.me',
TSE_title = 'by Zack',
project_link = 'https://banack.me/gml',
TSE_provided_by = 'Made with \u2665 ',
gml_block_name = 'block',
generic_cmt = '///',
generic_div = 'div',
generic_span = 'span',
generic_name = 'name',
generic_class = 'class',
generic_pln = "pln",
generic_fnc = "fnc",
generic_loc = 'loc',
generic_kwd = 'kwd',
generic_pnc = 'pnc',
generic_int = 'int',
generic_var = 'var',
lang = 'GameMaker Language',
lang_name = 'lang-gml',
lang_abb = '&#9698;&nbsp;GML',
url_title = lang_abb + ' function',
snippet = 'code snippet',
wild = '{v}',
google_url = 'https://www.google.com/search?q=site%3Adocs2.yoyogames.com+%22'+wild+'%22',
model_span = span_tag_close() + span_tag_open(generic_fnc),
model_endtag = '"'+(generic_div)+'">',
regex_az09 = /[a-zA-Z0-9_ ]/,
version_number = '0.1',
append_source = '/**\n * Code snippet via: ';
var _key = -1;

/**
 * Determine is ctrl is pressed
 */
function getKey(e) {
    _key = e.keyCode;
}

function resetKey(e) {
    _key = -1;
}

document.onkeydown = getKey;
document.onkeyup = resetKey;

/**
 * URL Parameters (https://stackoverflow.com/a/901144)
 */

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/**
 * Runs the necessary functions in orders, initializer
 */
function gml_syntax() {
    crafter();
    PR.prettyPrint();
    cleaner();
}

/** 
 * Appends headers and footers to each codeblock
 */
function crafter() {
	let code_blocks = get_codeblocks();

    for (var i = 0; i < code_blocks.length; i++) {
        let block = code_blocks[i];
        let div_contents = block.innerHTML;
        if (block.innerHTML.length<2) div_contents+=atob(getParameterByName('c'));
        let div_name = block.getAttribute(generic_name);
        let div_title = lang + ' ' + div_name + ' ' + snippet;
        let snippet_ref = (name_construct(i));
        let copy_region = '\''+ snippet_ref +'\'';

        code_blocks[i].innerHTML = `<div class="gml_capsule"><div class="gml_header" title="${div_title}"> ${lang_abb} &raquo;&nbsp;${div_name}<button class="gml_copy" onclick="copyTextToClipboard(${copy_region})">Copy</button></div><pre class="prettyprint linenums ${lang_name} ${snippet_ref}">${div_contents}</pre><div class="gml_footer"><span style="color:#D73C2C">${TSE_provided_by}</span><a href="${TSE_link}" target="_blank">${TSE_title}</a>&nbsp;&bull;&nbsp;<a href="${project_link}">${project_title} ${version_number}</a></div></div>`;
    }
}

/** 
 * Fallback to copy a class's contents to the clipboard
 * @param {string} text - The text to copy to the clipboard
 * @author Dean Taylor <https://stackoverflow.com/a/30810322>
 */
function fallbackCopyTextToClipboard(text) {

    var textArea = document.createElement("textarea");
    textArea.value = text;

    document.body.appendChild(textArea);

    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
    } catch (err) {}

    document.body.removeChild(textArea);
}

/** 
 * Attempts to copy a class's contents to the clipboard
 * @param {element} containerid - The class containing the text to copy to the clipboard
 * @author: Dean Taylor <https://stackoverflow.com/a/30810322>
 * @author: Gabi Purcaru <https://stackoverflow.com/a/6743966>
 */
function copyTextToClipboard(containerid) {
    // workaround to get div text by Gabi Purcaru
    var element = document.getElementsByClassName(containerid)[0];
    var text = "";
    var div_text = element.innerText || element.textContent;

    // if first line is ///
    if (div_text.slice(0, generic_cmt.length) == generic_cmt) {
        text = div_text;
        text = text.replace('\n', '\n\n' + citation());
    } else {
        text = citation() + div_text;
    }

    if (_key == 16) text = btoa(text);

    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {
        //console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        //console.error('Async: Could not copy text: ', err);
    });
}

/**
 * Returns a formatted citation of the code snippet
 */
function citation() {
    let loc = window.location.href.split('?')[0];
    return append_source + loc + '\n * ' + formatted_date() + '\n */\n\n';
}

/**
 * Ruturns a formatted date
 * @author Gaurav <https://stackoverflow.com/a/19079425>
 */
function formatted_date() {
    return new Date().toJSON().slice(0,10).split('-').reverse().join('/');
}

/**
 * Returns a truthy based on whether an element is a GML codeblock
 * @param {Div} element - An element to check
 */
function is_codeblock(element) {
    return element === gml_class;
}

/**
 * Returns an array of references to all divs that are GML codeblocks
 */
function get_codeblocks() {
    var b = [], i = 0, div, entry;

    div = document.getElementsByTagName(generic_div);

    while (i < div.length) {
        if (is_codeblock(div[i].getAttribute(generic_class))) b.push(div[i]);
        i++;
    }

    return b;
}

/**
 * Returns a formatted name to reference a codeblock of a given number
 * @param {Int} numb - The codeblock number.
 */
function name_construct(numb) {
    return gml_block_name + numb;
}

/**
 * Creates a span opening tag of a given class.
 * @param {string} class_name - The span class name.
 */
function span_tag_open(class_name) {
    return `<span class="${class_name}">`
}

/**
 * Creates a span closing tag.
 */
function span_tag_close() {
    return '</span>';
}

/**
 * Creates a span element, consisting of content between opening and closing tags 
 * @param {string} class_name - The span class name.
 * @param {string} content - The content of the element.
 */
function span_element(class_name, content) {
    return span_tag_open(class_name) + content + span_tag_close();
}

/**
 * Replaces HTML in a given span
 * @param {string} class_name - The span class name.
 * @param {string} str_before - The string to replace.
 * @param {string} str_after - The string that replaces.
 */
function innerHTML_replace(class_name, str_before, str_after) {
    let re = new RegExp(str_before, "g");

    document.getElementsByClassName(class_name)[0].innerHTML =
        document.getElementsByClassName(class_name)[0].innerHTML.replace(re, str_after);
}

/**
 * Corrects the dot color in global variables.
 * @param {string} block_number - The codeblock number to correct
 */
function global_correction(block_number) {
    let global_kwd = 'global';
    let global_dot = global_kwd + "\\.";

    innerHTML_replace(name_construct(block_number), global_dot, span_element(generic_int, global_kwd) + span_element(generic_pnc, "."));
}

/**
 * Inserts modified HTML in a given span, using an array that replaces 'wildcards'
 * @param {string} class_name - The span class name.
 * @param {Array} arr - The array containing strings to modify
 * @param {string} str_before - The string to replace.
 * @param {string} str_after - The string that replaces.
 */
function insert(class_name, arr, str_before, str_after) {
    var i = 0, a, re, re2, repl, contains_link;
    re = new RegExp(wild, "g");
    re2 = new RegExp('{U}', "g");
    contains_link = false;

    if (str_after.indexOf('{U}') !== -1) contains_link = true;

    while (i < arr.length) {
        a = arr[i];
        repl = '{U}';
        if (contains_link) repl = hyperlink_create(gml_doc_search(a), a);

        innerHTML_replace(class_name, str_before.replace(re, a), str_after.replace(re, a).replace(re2, repl));
        i++;
    }
}

/**
 * Constructs a hyperlink.
 * @param {string} url - The destination address.
 * @param {string} content - The clickable text.
 */
function hyperlink_create(url, content) {
    return `<a href="${url}" target="_blank">${content}</a>`;
}

/**
 * Determine if a string is a span opening tag of a particular class.
 * @param {string} str - The string to test.
 * @param {string} class_name - The span class to test the string against.
 */
function is_tag(str, class_name) {
    return str === span_tag_open(class_name);
}

/**
 * Extract the content (between opening and closing tags) of a span element
 * @param {string} span - The input span.
 * @param {string} class_name - The span class name.
 */
function span_element_extract_content(span, class_name) {
    let len_span = span.length;
    let len_open = span_tag_open(class_name).length;
    let len_close = span_tag_close().length;

    return span.substr(len_open, len_span - len_open - len_close);
}

/**
 * Bulk clean-up operations; tokenizes local variables, scripts, and doc linking
 */
function cleaner() {
    var line_str = "", code_blocks = get_codeblocks();

    // iterate over all code blocks
    for (var k = 0; k < code_blocks.length; k++) {

        var class_name = name_construct(k), changeme = document.getElementsByClassName(class_name)[0], el = changeme.innerHTML+"...L\n", str = "", build_line = "", build_var = "", build_class = "", build_pln = "", line_contains_var = false, track_i_class = 0, track_line_class = 0, track_i_var = 0, track_i_pln = 0, open_par = 0, locals = [], locals_ref = [], links = [], funcs = [], tag = "", tag2 = "", t = 0, line_data = [], len = span_tag_open('abc').length, closec = span_tag_close(), len2 = closec.length, spn = '<spanclass="kwd">var</span>', related_var = 0;


        for (var i = 0; i < el.length - len - len2; i++) {
        	if (el[i]!="<" ) continue;
            // construct tag
            tag = el.slice(i, i + len);
            tag2 = "";
            var j = 0, p = 0, skip = false;

            while(el.slice(i + len + j, i + len + j + len2)!=closec && !skip) {
            	j++;
            	if (el[j] == '\n' || el[j] == '\r') skip = true;
            }
            if (!skip) tag2 = el.slice(i + len, i + len + j + len2);

            var div = tag + tag2, li_start = '<li class="L', li_end = '</li>';

            if (el.slice(i, i+(li_start.length)) == li_start) {
                var j = i + li_start.length;
                while(el[j]!=">") j++;

                j++;
                line_str = "";
				while (el.slice(j, j+(li_end.length)) != li_end) {
					line_str += el[j];
					j++;
				}
				
				line_contains_var = line_str.replace(/ /g, '').indexOf(spn)!=-1;
            	line_data.push(line_str);
            	related_var = 0;
            }

            var tmp = "", save_j = i + len, j = save_j;

            if (div.indexOf(';')!=-1) related_var++;
            if (div.indexOf('var')!=-1) related_var=0;

            // all references to vars
            if (is_tag(tag, generic_pln)) {
				var extract = span_element_extract_content(div, generic_pln);
				var without_spaces = extract.replace(/ /g, "");
	            if (extract.length > 0 && locals.includes(extract) == false && (line_contains_var && related_var==0)) {
	            	locals.push(without_spaces);
	            }

	            if (locals.includes(without_spaces) && without_spaces.length > 0) locals_ref.push(extract);

				tmp = "";
				j = save_j;

				while (regex_az09.test(el[j])) {
					tmp += el[j];
					j++;
				}

				if (tmp.length > 1 && el[j + model_span.length] == "(") funcs.push(tmp);

            } // all references to links
			else if (is_tag(tag, generic_fnc)) {
				var extract = span_element_extract_content(div, generic_fnc);
	            if (extract.length > 0 && links.includes(extract) == false)
	            	links.push(extract);
            }
        }

        // global dot correction
        global_correction(k);

        // insert local variables
        insert(class_name, locals_ref, span_tag_open(generic_pln) + wild + span_tag_close(), span_tag_open(generic_loc) + wild + span_tag_close());

        // insert links
        insert(class_name, links, span_tag_open(generic_fnc) + wild + span_tag_close(),
        	span_tag_open(generic_fnc).slice(0,-1) + ' title = "' + url_title + ' ' + wild + '"'+wild+'>{U}' + span_tag_close());

        // insert scripts
        insert(class_name, funcs, span_tag_open(generic_pln) + wild,
            span_tag_open(generic_fnc) + wild);
    }
}