(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (!x.$)
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}



// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800)
			+
			String.fromCharCode(code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

var _Json_decodeInt = { $: 2 };
var _Json_decodeBool = { $: 3 };
var _Json_decodeFloat = { $: 4 };
var _Json_decodeValue = { $: 5 };
var _Json_decodeString = { $: 6 };

function _Json_decodeList(decoder) { return { $: 7, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 8, b: decoder }; }

function _Json_decodeNull(value) { return { $: 9, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 10,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 11,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 12,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 13,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 14,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 15,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 3:
			return (typeof value === 'boolean')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a BOOL', value);

		case 2:
			if (typeof value !== 'number') {
				return _Json_expecting('an INT', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return elm$core$Result$Ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return elm$core$Result$Ok(value);
			}

			return _Json_expecting('an INT', value);

		case 4:
			return (typeof value === 'number')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a FLOAT', value);

		case 6:
			return (typeof value === 'string')
				? elm$core$Result$Ok(value)
				: (value instanceof String)
					? elm$core$Result$Ok(value + '')
					: _Json_expecting('a STRING', value);

		case 9:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 5:
			return elm$core$Result$Ok(_Json_wrap(value));

		case 7:
			if (!Array.isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 8:
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 10:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 11:
			var index = decoder.e;
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 12:
			if (typeof value !== 'object' || value === null || Array.isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 13:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 14:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 15:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 3:
		case 2:
		case 4:
		case 6:
		case 5:
			return true;

		case 9:
			return x.c === y.c;

		case 7:
		case 8:
		case 12:
			return _Json_equality(x.b, y.b);

		case 10:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 11:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 13:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 14:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 15:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2(elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});
var author$project$Main$NewUrlChange = function (a) {
	return {$: 'NewUrlChange', a: a};
};
var author$project$Main$NewUrlRequest = function (a) {
	return {$: 'NewUrlRequest', a: a};
};
var elm$core$Basics$False = {$: 'False'};
var elm$core$Basics$True = {$: 'True'};
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$List$cons = _List_cons;
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$core$Platform$Cmd$batch = _Platform_batch;
var Janiczek$cmd_extra$Cmd$Extra$addCmd = F2(
	function (cmd, _n0) {
		var model = _n0.a;
		var oldCmd = _n0.b;
		return _Utils_Tuple2(
			model,
			elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[oldCmd, cmd])));
	});
var Janiczek$cmd_extra$Cmd$Extra$withCmd = F2(
	function (cmd, model) {
		return _Utils_Tuple2(model, cmd);
	});
var author$project$Main$NotConnected = {$: 'NotConnected'};
var author$project$Main$OutgoingTrans = function (a) {
	return {$: 'OutgoingTrans', a: a};
};
var author$project$Config$serverUrl = 'wss://mac1xa3.ca/e/kapooa13';
var author$project$Main$defaultUrl = author$project$Config$serverUrl;
var billstclair$elm_websocket_client$PortFunnel$WebSocket$State = function (a) {
	return {$: 'State', a: a};
};
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var elm$core$Set$empty = elm$core$Set$Set_elm_builtin(elm$core$Dict$empty);
var billstclair$elm_websocket_client$PortFunnel$WebSocket$initialState = billstclair$elm_websocket_client$PortFunnel$WebSocket$State(
	{continuationCounter: 0, continuations: elm$core$Dict$empty, isLoaded: false, noAutoReopenKeys: elm$core$Set$empty, queues: elm$core$Dict$empty, socketStates: elm$core$Dict$empty});
var author$project$Main$initialFunnelState = {socket: billstclair$elm_websocket_client$PortFunnel$WebSocket$initialState};
var author$project$Main$cmdPort = _Platform_outgoingPort('cmdPort', elm$core$Basics$identity);
var author$project$Main$getCmdPort = function (model) {
	return author$project$Main$cmdPort;
};
var elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			elm$core$List$foldl,
			F2(
				function (_n0, obj) {
					var k = _n0.a;
					var v = _n0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var elm$json$Json$Encode$string = _Json_wrap;
var billstclair$elm_port_funnel$PortFunnel$encodeGenericMessage = function (message) {
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'module',
				elm$json$Json$Encode$string(message.moduleName)),
				_Utils_Tuple2(
				'tag',
				elm$json$Json$Encode$string(message.tag)),
				_Utils_Tuple2('args', message.args)
			]));
};
var billstclair$elm_port_funnel$PortFunnel$messageToValue = F2(
	function (_n0, message) {
		var moduleDesc = _n0.a;
		return billstclair$elm_port_funnel$PortFunnel$encodeGenericMessage(
			moduleDesc.encoder(message));
	});
var billstclair$elm_port_funnel$PortFunnel$sendMessage = F3(
	function (moduleDesc, cmdPort, message) {
		return cmdPort(
			A2(billstclair$elm_port_funnel$PortFunnel$messageToValue, moduleDesc, message));
	});
var billstclair$elm_port_funnel$PortFunnel$ModuleDesc = function (a) {
	return {$: 'ModuleDesc', a: a};
};
var billstclair$elm_port_funnel$PortFunnel$ModuleDescRecord = F4(
	function (moduleName, encoder, decoder, process) {
		return {decoder: decoder, encoder: encoder, moduleName: moduleName, process: process};
	});
var billstclair$elm_port_funnel$PortFunnel$makeModuleDesc = F4(
	function (name, encoder, decoder, processor) {
		return billstclair$elm_port_funnel$PortFunnel$ModuleDesc(
			A4(billstclair$elm_port_funnel$PortFunnel$ModuleDescRecord, name, encoder, decoder, processor));
	});
var elm$json$Json$Decode$map2 = _Json_map2;
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = elm$json$Json$Decode$map2(elm$core$Basics$apR);
var elm$json$Json$Decode$andThen = _Json_andThen;
var elm$json$Json$Decode$decodeValue = _Json_run;
var elm$json$Json$Decode$fail = _Json_fail;
var elm$json$Json$Decode$null = _Json_decodeNull;
var elm$json$Json$Decode$oneOf = _Json_oneOf;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$json$Json$Decode$value = _Json_decodeValue;
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder = F3(
	function (pathDecoder, valDecoder, fallback) {
		var nullOr = function (decoder) {
			return elm$json$Json$Decode$oneOf(
				_List_fromArray(
					[
						decoder,
						elm$json$Json$Decode$null(fallback)
					]));
		};
		var handleResult = function (input) {
			var _n0 = A2(elm$json$Json$Decode$decodeValue, pathDecoder, input);
			if (_n0.$ === 'Ok') {
				var rawValue = _n0.a;
				var _n1 = A2(
					elm$json$Json$Decode$decodeValue,
					nullOr(valDecoder),
					rawValue);
				if (_n1.$ === 'Ok') {
					var finalResult = _n1.a;
					return elm$json$Json$Decode$succeed(finalResult);
				} else {
					var finalErr = _n1.a;
					return elm$json$Json$Decode$fail(
						elm$json$Json$Decode$errorToString(finalErr));
				}
			} else {
				return elm$json$Json$Decode$succeed(fallback);
			}
		};
		return A2(elm$json$Json$Decode$andThen, handleResult, elm$json$Json$Decode$value);
	});
var elm$json$Json$Decode$field = _Json_decodeField;
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional = F4(
	function (key, valDecoder, fallback, decoder) {
		return A2(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A3(
				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder,
				A2(elm$json$Json$Decode$field, key, elm$json$Json$Decode$value),
				valDecoder,
				fallback),
			decoder);
	});
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A2(elm$json$Json$Decode$field, key, valDecoder),
			decoder);
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$KeyBufferedAmount = F2(
	function (key, bufferedAmount) {
		return {bufferedAmount: bufferedAmount, key: key};
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$KeyDescription = F2(
	function (key, description) {
		return {description: description, key: key};
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$KeyMessage = F2(
	function (key, message) {
		return {key: key, message: message};
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$KeyReason = F2(
	function (key, reason) {
		return {key: key, reason: reason};
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$KeyUrl = F2(
	function (key, url) {
		return {key: key, url: url};
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$KeyUrlKeepAlive = F3(
	function (key, url, keepAlive) {
		return {keepAlive: keepAlive, key: key, url: url};
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$MillisId = F2(
	function (millis, id) {
		return {id: id, millis: millis};
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$valueDecode = F2(
	function (value, decoder) {
		var _n0 = A2(elm$json$Json$Decode$decodeValue, decoder, value);
		if (_n0.$ === 'Ok') {
			var a = _n0.a;
			return elm$core$Result$Ok(a);
		} else {
			var err = _n0.a;
			return elm$core$Result$Err(
				elm$json$Json$Decode$errorToString(err));
		}
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PIBytesQueued = function (a) {
	return {$: 'PIBytesQueued', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PIClosed = function (a) {
	return {$: 'PIClosed', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PIClosedRecord = F5(
	function (key, bytesQueued, code, reason, wasClean) {
		return {bytesQueued: bytesQueued, code: code, key: key, reason: reason, wasClean: wasClean};
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PIConnected = function (a) {
	return {$: 'PIConnected', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PIDelayed = function (a) {
	return {$: 'PIDelayed', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PIError = function (a) {
	return {$: 'PIError', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PIErrorRecord = F5(
	function (key, code, description, name, message) {
		return {code: code, description: description, key: key, message: message, name: name};
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PIMessageReceived = function (a) {
	return {$: 'PIMessageReceived', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$POBytesQueued = function (a) {
	return {$: 'POBytesQueued', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$POClose = function (a) {
	return {$: 'POClose', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PODelay = function (a) {
	return {$: 'PODelay', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$POOpen = function (a) {
	return {$: 'POOpen', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$POSend = function (a) {
	return {$: 'POSend', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PWillClose = function (a) {
	return {$: 'PWillClose', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PWillOpen = function (a) {
	return {$: 'PWillOpen', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PWillSend = function (a) {
	return {$: 'PWillSend', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$Startup = {$: 'Startup'};
var elm$json$Json$Decode$bool = _Json_decodeBool;
var elm$json$Json$Decode$int = _Json_decodeInt;
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$nullable = function (decoder) {
	return elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				elm$json$Json$Decode$null(elm$core$Maybe$Nothing),
				A2(elm$json$Json$Decode$map, elm$core$Maybe$Just, decoder)
			]));
};
var elm$json$Json$Decode$string = _Json_decodeString;
var billstclair$elm_websocket_client$PortFunnel$WebSocket$decode = function (_n0) {
	var tag = _n0.tag;
	var args = _n0.args;
	switch (tag) {
		case 'startup':
			return elm$core$Result$Ok(billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$Startup);
		case 'open':
			return A2(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$valueDecode,
				args,
				A2(
					elm$json$Json$Decode$map,
					billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$POOpen,
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'url',
						elm$json$Json$Decode$string,
						A3(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'key',
							elm$json$Json$Decode$string,
							elm$json$Json$Decode$succeed(billstclair$elm_websocket_client$PortFunnel$WebSocket$KeyUrl)))));
		case 'send':
			return A2(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$valueDecode,
				args,
				A2(
					elm$json$Json$Decode$map,
					billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$POSend,
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'message',
						elm$json$Json$Decode$string,
						A3(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'key',
							elm$json$Json$Decode$string,
							elm$json$Json$Decode$succeed(billstclair$elm_websocket_client$PortFunnel$WebSocket$KeyMessage)))));
		case 'close':
			return A2(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$valueDecode,
				args,
				A2(
					elm$json$Json$Decode$map,
					billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$POClose,
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'reason',
						elm$json$Json$Decode$string,
						A3(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'key',
							elm$json$Json$Decode$string,
							elm$json$Json$Decode$succeed(billstclair$elm_websocket_client$PortFunnel$WebSocket$KeyReason)))));
		case 'getBytesQueued':
			return A2(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$valueDecode,
				args,
				A2(
					elm$json$Json$Decode$map,
					billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$POBytesQueued,
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'key',
						elm$json$Json$Decode$string,
						elm$json$Json$Decode$succeed(
							function (key) {
								return {key: key};
							}))));
		case 'delay':
			return A2(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$valueDecode,
				args,
				A2(
					elm$json$Json$Decode$map,
					billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PODelay,
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'id',
						elm$json$Json$Decode$string,
						A3(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'millis',
							elm$json$Json$Decode$int,
							elm$json$Json$Decode$succeed(billstclair$elm_websocket_client$PortFunnel$WebSocket$MillisId)))));
		case 'willopen':
			return A2(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$valueDecode,
				args,
				A2(
					elm$json$Json$Decode$map,
					billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PWillOpen,
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'keepAlive',
						elm$json$Json$Decode$bool,
						A3(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'url',
							elm$json$Json$Decode$string,
							A3(
								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
								'key',
								elm$json$Json$Decode$string,
								elm$json$Json$Decode$succeed(billstclair$elm_websocket_client$PortFunnel$WebSocket$KeyUrlKeepAlive))))));
		case 'willsend':
			return A2(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$valueDecode,
				args,
				A2(
					elm$json$Json$Decode$map,
					billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PWillSend,
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'message',
						elm$json$Json$Decode$string,
						A3(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'key',
							elm$json$Json$Decode$string,
							elm$json$Json$Decode$succeed(billstclair$elm_websocket_client$PortFunnel$WebSocket$KeyMessage)))));
		case 'willclose':
			return A2(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$valueDecode,
				args,
				A2(
					elm$json$Json$Decode$map,
					billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PWillClose,
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'reason',
						elm$json$Json$Decode$string,
						A3(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'key',
							elm$json$Json$Decode$string,
							elm$json$Json$Decode$succeed(billstclair$elm_websocket_client$PortFunnel$WebSocket$KeyReason)))));
		case 'connected':
			return A2(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$valueDecode,
				args,
				A2(
					elm$json$Json$Decode$map,
					billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PIConnected,
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'description',
						elm$json$Json$Decode$string,
						A3(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'key',
							elm$json$Json$Decode$string,
							elm$json$Json$Decode$succeed(billstclair$elm_websocket_client$PortFunnel$WebSocket$KeyDescription)))));
		case 'messageReceived':
			return A2(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$valueDecode,
				args,
				A2(
					elm$json$Json$Decode$map,
					billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PIMessageReceived,
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'message',
						elm$json$Json$Decode$string,
						A3(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'key',
							elm$json$Json$Decode$string,
							elm$json$Json$Decode$succeed(billstclair$elm_websocket_client$PortFunnel$WebSocket$KeyMessage)))));
		case 'closed':
			return A2(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$valueDecode,
				args,
				A2(
					elm$json$Json$Decode$map,
					billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PIClosed,
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'wasClean',
						elm$json$Json$Decode$bool,
						A3(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'reason',
							elm$json$Json$Decode$string,
							A3(
								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
								'code',
								elm$json$Json$Decode$int,
								A3(
									NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
									'bytesQueued',
									elm$json$Json$Decode$int,
									A3(
										NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
										'key',
										elm$json$Json$Decode$string,
										elm$json$Json$Decode$succeed(billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PIClosedRecord))))))));
		case 'bytesQueued':
			return A2(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$valueDecode,
				args,
				A2(
					elm$json$Json$Decode$map,
					billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PIBytesQueued,
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'bufferedAmount',
						elm$json$Json$Decode$int,
						A3(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'key',
							elm$json$Json$Decode$string,
							elm$json$Json$Decode$succeed(billstclair$elm_websocket_client$PortFunnel$WebSocket$KeyBufferedAmount)))));
		case 'delayed':
			return A2(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$valueDecode,
				args,
				A2(
					elm$json$Json$Decode$map,
					billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PIDelayed,
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'id',
						elm$json$Json$Decode$string,
						elm$json$Json$Decode$succeed(
							function (id) {
								return {id: id};
							}))));
		case 'error':
			return A2(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$valueDecode,
				args,
				A2(
					elm$json$Json$Decode$map,
					billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PIError,
					A4(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
						'message',
						elm$json$Json$Decode$nullable(elm$json$Json$Decode$string),
						elm$core$Maybe$Nothing,
						A4(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
							'name',
							elm$json$Json$Decode$nullable(elm$json$Json$Decode$string),
							elm$core$Maybe$Nothing,
							A3(
								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
								'description',
								elm$json$Json$Decode$string,
								A3(
									NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
									'code',
									elm$json$Json$Decode$string,
									A4(
										NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
										'key',
										elm$json$Json$Decode$nullable(elm$json$Json$Decode$string),
										elm$core$Maybe$Nothing,
										elm$json$Json$Decode$succeed(billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PIErrorRecord))))))));
		default:
			return elm$core$Result$Err('Unknown tag: ' + tag);
	}
};
var billstclair$elm_port_funnel$PortFunnel$GenericMessage = F3(
	function (moduleName, tag, args) {
		return {args: args, moduleName: moduleName, tag: tag};
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$moduleName = 'WebSocket';
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var elm$json$Json$Encode$bool = _Json_wrap;
var elm$json$Json$Encode$int = _Json_wrap;
var elm$json$Json$Encode$null = _Json_encodeNull;
var billstclair$elm_websocket_client$PortFunnel$WebSocket$encode = function (mess) {
	var gm = F2(
		function (tag, args) {
			return A3(billstclair$elm_port_funnel$PortFunnel$GenericMessage, billstclair$elm_websocket_client$PortFunnel$WebSocket$moduleName, tag, args);
		});
	switch (mess.$) {
		case 'Startup':
			return A2(gm, 'startup', elm$json$Json$Encode$null);
		case 'POOpen':
			var key = mess.a.key;
			var url = mess.a.url;
			return A2(
				gm,
				'open',
				elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'key',
							elm$json$Json$Encode$string(key)),
							_Utils_Tuple2(
							'url',
							elm$json$Json$Encode$string(url))
						])));
		case 'POSend':
			var key = mess.a.key;
			var message = mess.a.message;
			return A2(
				gm,
				'send',
				elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'key',
							elm$json$Json$Encode$string(key)),
							_Utils_Tuple2(
							'message',
							elm$json$Json$Encode$string(message))
						])));
		case 'POClose':
			var key = mess.a.key;
			var reason = mess.a.reason;
			return A2(
				gm,
				'close',
				elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'key',
							elm$json$Json$Encode$string(key)),
							_Utils_Tuple2(
							'reason',
							elm$json$Json$Encode$string(reason))
						])));
		case 'POBytesQueued':
			var key = mess.a.key;
			return A2(
				gm,
				'getBytesQueued',
				elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'key',
							elm$json$Json$Encode$string(key))
						])));
		case 'PODelay':
			var millis = mess.a.millis;
			var id = mess.a.id;
			return A2(
				gm,
				'delay',
				elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'millis',
							elm$json$Json$Encode$int(millis)),
							_Utils_Tuple2(
							'id',
							elm$json$Json$Encode$string(id))
						])));
		case 'PWillOpen':
			var key = mess.a.key;
			var url = mess.a.url;
			var keepAlive = mess.a.keepAlive;
			return A2(
				gm,
				'willopen',
				elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'key',
							elm$json$Json$Encode$string(key)),
							_Utils_Tuple2(
							'url',
							elm$json$Json$Encode$string(url)),
							_Utils_Tuple2(
							'keepAlive',
							elm$json$Json$Encode$bool(keepAlive))
						])));
		case 'PWillSend':
			var key = mess.a.key;
			var message = mess.a.message;
			return A2(
				gm,
				'willsend',
				elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'key',
							elm$json$Json$Encode$string(key)),
							_Utils_Tuple2(
							'message',
							elm$json$Json$Encode$string(message))
						])));
		case 'PWillClose':
			var key = mess.a.key;
			var reason = mess.a.reason;
			return A2(
				gm,
				'willclose',
				elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'key',
							elm$json$Json$Encode$string(key)),
							_Utils_Tuple2(
							'reason',
							elm$json$Json$Encode$string(reason))
						])));
		case 'PIConnected':
			var key = mess.a.key;
			var description = mess.a.description;
			return A2(
				gm,
				'connected',
				elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'key',
							elm$json$Json$Encode$string(key)),
							_Utils_Tuple2(
							'description',
							elm$json$Json$Encode$string(description))
						])));
		case 'PIMessageReceived':
			var key = mess.a.key;
			var message = mess.a.message;
			return A2(
				gm,
				'messageReceived',
				elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'key',
							elm$json$Json$Encode$string(key)),
							_Utils_Tuple2(
							'message',
							elm$json$Json$Encode$string(message))
						])));
		case 'PIClosed':
			var key = mess.a.key;
			var bytesQueued = mess.a.bytesQueued;
			var code = mess.a.code;
			var reason = mess.a.reason;
			var wasClean = mess.a.wasClean;
			return A2(
				gm,
				'closed',
				elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'key',
							elm$json$Json$Encode$string(key)),
							_Utils_Tuple2(
							'bytesQueued',
							elm$json$Json$Encode$int(bytesQueued)),
							_Utils_Tuple2(
							'code',
							elm$json$Json$Encode$int(code)),
							_Utils_Tuple2(
							'reason',
							elm$json$Json$Encode$string(reason)),
							_Utils_Tuple2(
							'wasClean',
							elm$json$Json$Encode$bool(wasClean))
						])));
		case 'PIBytesQueued':
			var key = mess.a.key;
			var bufferedAmount = mess.a.bufferedAmount;
			return A2(
				gm,
				'bytesQueued',
				elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'key',
							elm$json$Json$Encode$string(key)),
							_Utils_Tuple2(
							'bufferedAmount',
							elm$json$Json$Encode$int(bufferedAmount))
						])));
		case 'PIDelayed':
			var id = mess.a.id;
			return A2(
				gm,
				'delayed',
				elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'id',
							elm$json$Json$Encode$string(id))
						])));
		default:
			var key = mess.a.key;
			var code = mess.a.code;
			var description = mess.a.description;
			var name = mess.a.name;
			var message = mess.a.message;
			return A2(
				gm,
				'error',
				elm$json$Json$Encode$object(
					elm$core$List$concat(
						_List_fromArray(
							[
								function () {
								if (key.$ === 'Just') {
									var k = key.a;
									return _List_fromArray(
										[
											_Utils_Tuple2(
											'key',
											elm$json$Json$Encode$string(k))
										]);
								} else {
									return _List_Nil;
								}
							}(),
								_List_fromArray(
								[
									_Utils_Tuple2(
									'code',
									elm$json$Json$Encode$string(code)),
									_Utils_Tuple2(
									'description',
									elm$json$Json$Encode$string(description))
								]),
								function () {
								if (name.$ === 'Just') {
									var n = name.a;
									return _List_fromArray(
										[
											_Utils_Tuple2(
											'name',
											elm$json$Json$Encode$string(n))
										]);
								} else {
									return _List_Nil;
								}
							}(),
								function () {
								if (message.$ === 'Just') {
									var m = message.a;
									return _List_fromArray(
										[
											_Utils_Tuple2(
											'message',
											elm$json$Json$Encode$string(m))
										]);
								} else {
									return _List_Nil;
								}
							}()
							]))));
	}
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$AbnormalClosure = {$: 'AbnormalClosure'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$ClosedResponse = function (a) {
	return {$: 'ClosedResponse', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$ClosingPhase = {$: 'ClosingPhase'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$CmdResponse = function (a) {
	return {$: 'CmdResponse', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$ConnectedPhase = {$: 'ConnectedPhase'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$ConnectedResponse = function (a) {
	return {$: 'ConnectedResponse', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$ConnectingPhase = {$: 'ConnectingPhase'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$ErrorResponse = function (a) {
	return {$: 'ErrorResponse', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InvalidMessageError = function (a) {
	return {$: 'InvalidMessageError', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$LowLevelError = function (a) {
	return {$: 'LowLevelError', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$MessageReceivedResponse = function (a) {
	return {$: 'MessageReceivedResponse', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$NoResponse = {$: 'NoResponse'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$UnexpectedConnectedError = function (a) {
	return {$: 'UnexpectedConnectedError', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$UnexpectedMessageError = function (a) {
	return {$: 'UnexpectedMessageError', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$UnknownClosure = {$: 'UnknownClosure'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$BadGatewayClosure = {$: 'BadGatewayClosure'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$GoingAwayClosure = {$: 'GoingAwayClosure'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalErrorClosure = {$: 'InternalErrorClosure'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$InvalidFramePayloadDataClosure = {$: 'InvalidFramePayloadDataClosure'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$MessageTooBigClosure = {$: 'MessageTooBigClosure'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$MissingExtensionClosure = {$: 'MissingExtensionClosure'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$NoStatusRecvdClosure = {$: 'NoStatusRecvdClosure'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$NormalClosure = {$: 'NormalClosure'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$PolicyViolationClosure = {$: 'PolicyViolationClosure'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$ProtocolErrorClosure = {$: 'ProtocolErrorClosure'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$ServiceRestartClosure = {$: 'ServiceRestartClosure'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$TLSHandshakeClosure = {$: 'TLSHandshakeClosure'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$TimedOutOnReconnect = {$: 'TimedOutOnReconnect'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$TryAgainLaterClosure = {$: 'TryAgainLaterClosure'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$UnsupportedDataClosure = {$: 'UnsupportedDataClosure'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$closurePairs = _List_fromArray(
	[
		_Utils_Tuple2(1000, billstclair$elm_websocket_client$PortFunnel$WebSocket$NormalClosure),
		_Utils_Tuple2(1001, billstclair$elm_websocket_client$PortFunnel$WebSocket$GoingAwayClosure),
		_Utils_Tuple2(1002, billstclair$elm_websocket_client$PortFunnel$WebSocket$ProtocolErrorClosure),
		_Utils_Tuple2(1003, billstclair$elm_websocket_client$PortFunnel$WebSocket$UnsupportedDataClosure),
		_Utils_Tuple2(1005, billstclair$elm_websocket_client$PortFunnel$WebSocket$NoStatusRecvdClosure),
		_Utils_Tuple2(1006, billstclair$elm_websocket_client$PortFunnel$WebSocket$AbnormalClosure),
		_Utils_Tuple2(1007, billstclair$elm_websocket_client$PortFunnel$WebSocket$InvalidFramePayloadDataClosure),
		_Utils_Tuple2(1008, billstclair$elm_websocket_client$PortFunnel$WebSocket$PolicyViolationClosure),
		_Utils_Tuple2(1009, billstclair$elm_websocket_client$PortFunnel$WebSocket$MessageTooBigClosure),
		_Utils_Tuple2(1010, billstclair$elm_websocket_client$PortFunnel$WebSocket$MissingExtensionClosure),
		_Utils_Tuple2(1011, billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalErrorClosure),
		_Utils_Tuple2(1012, billstclair$elm_websocket_client$PortFunnel$WebSocket$ServiceRestartClosure),
		_Utils_Tuple2(1013, billstclair$elm_websocket_client$PortFunnel$WebSocket$TryAgainLaterClosure),
		_Utils_Tuple2(1014, billstclair$elm_websocket_client$PortFunnel$WebSocket$BadGatewayClosure),
		_Utils_Tuple2(1015, billstclair$elm_websocket_client$PortFunnel$WebSocket$TLSHandshakeClosure),
		_Utils_Tuple2(4000, billstclair$elm_websocket_client$PortFunnel$WebSocket$TimedOutOnReconnect)
	]);
var elm$core$Dict$Black = {$: 'Black'};
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$Red = {$: 'Red'};
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1.$) {
				case 'LT':
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$fromList = function (assocs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, dict) {
				var key = _n0.a;
				var value = _n0.b;
				return A3(elm$core$Dict$insert, key, value, dict);
			}),
		elm$core$Dict$empty,
		assocs);
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$closureDict = elm$core$Dict$fromList(billstclair$elm_websocket_client$PortFunnel$WebSocket$closurePairs);
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$closedCode = function (code) {
	return A2(
		elm$core$Maybe$withDefault,
		billstclair$elm_websocket_client$PortFunnel$WebSocket$UnknownClosure,
		A2(elm$core$Dict$get, code, billstclair$elm_websocket_client$PortFunnel$WebSocket$closureDict));
};
var elm_community$list_extra$List$Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$closedCodeNumber = function (code) {
	var _n0 = A2(
		elm_community$list_extra$List$Extra$find,
		function (_n1) {
			var c = _n1.b;
			return _Utils_eq(c, code);
		},
		billstclair$elm_websocket_client$PortFunnel$WebSocket$closurePairs);
	if (_n0.$ === 'Just') {
		var _n2 = _n0.a;
		var _int = _n2.a;
		return _int;
	} else {
		return 0;
	}
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$IdlePhase = {$: 'IdlePhase'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$emptySocketState = {backoff: 0, continuationId: elm$core$Maybe$Nothing, keepAlive: false, phase: billstclair$elm_websocket_client$PortFunnel$WebSocket$IdlePhase, url: ''};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$getSocketState = F2(
	function (key, state) {
		return A2(
			elm$core$Maybe$withDefault,
			billstclair$elm_websocket_client$PortFunnel$WebSocket$emptySocketState,
			A2(elm$core$Dict$get, key, state.socketStates));
	});
var elm$core$Basics$neq = _Utils_notEqual;
var elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var lLeft = _n1.d;
			var lRight = _n1.e;
			var _n2 = dict.e;
			var rClr = _n2.a;
			var rK = _n2.b;
			var rV = _n2.c;
			var rLeft = _n2.d;
			var _n3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _n2.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n4 = dict.d;
			var lClr = _n4.a;
			var lK = _n4.b;
			var lV = _n4.c;
			var lLeft = _n4.d;
			var lRight = _n4.e;
			var _n5 = dict.e;
			var rClr = _n5.a;
			var rK = _n5.b;
			var rV = _n5.c;
			var rLeft = _n5.d;
			var rRight = _n5.e;
			if (clr.$ === 'Black') {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var _n2 = _n1.d;
			var _n3 = _n2.a;
			var llK = _n2.b;
			var llV = _n2.c;
			var llLeft = _n2.d;
			var llRight = _n2.e;
			var lRight = _n1.e;
			var _n4 = dict.e;
			var rClr = _n4.a;
			var rK = _n4.b;
			var rV = _n4.c;
			var rLeft = _n4.d;
			var rRight = _n4.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				elm$core$Dict$Red,
				lK,
				lV,
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n5 = dict.d;
			var lClr = _n5.a;
			var lK = _n5.b;
			var lV = _n5.c;
			var lLeft = _n5.d;
			var lRight = _n5.e;
			var _n6 = dict.e;
			var rClr = _n6.a;
			var rK = _n6.b;
			var rV = _n6.c;
			var rLeft = _n6.d;
			var rRight = _n6.e;
			if (clr.$ === 'Black') {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _n1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_n2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _n3 = right.a;
							var _n4 = right.d;
							var _n5 = _n4.a;
							return elm$core$Dict$moveRedRight(dict);
						} else {
							break _n2$2;
						}
					} else {
						var _n6 = right.a;
						var _n7 = right.d;
						return elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _n2$2;
				}
			}
			return dict;
		}
	});
var elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _n3 = lLeft.a;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					elm$core$Dict$removeMin(left),
					right);
			} else {
				var _n4 = elm$core$Dict$moveRedLeft(dict);
				if (_n4.$ === 'RBNode_elm_builtin') {
					var nColor = _n4.a;
					var nKey = _n4.b;
					var nValue = _n4.c;
					var nLeft = _n4.d;
					var nRight = _n4.e;
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _n4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _n6 = lLeft.a;
						return A5(
							elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2(elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _n7 = elm$core$Dict$moveRedLeft(dict);
						if (_n7.$ === 'RBNode_elm_builtin') {
							var nColor = _n7.a;
							var nKey = _n7.b;
							var nValue = _n7.c;
							var nLeft = _n7.d;
							var nRight = _n7.e;
							return A5(
								elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2(elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2(elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7(elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _n1 = elm$core$Dict$getMin(right);
				if (_n1.$ === 'RBNode_elm_builtin') {
					var minKey = _n1.b;
					var minValue = _n1.c;
					return A5(
						elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						elm$core$Dict$removeMin(right));
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2(elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var elm$core$Dict$remove = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$removeHelp, key, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$doClose = F3(
	function (state, key, reason) {
		var socketState = A2(billstclair$elm_websocket_client$PortFunnel$WebSocket$getSocketState, key, state);
		return (!_Utils_eq(socketState.phase, billstclair$elm_websocket_client$PortFunnel$WebSocket$ConnectedPhase)) ? _Utils_Tuple2(
			billstclair$elm_websocket_client$PortFunnel$WebSocket$State(
				_Utils_update(
					state,
					{
						continuations: function () {
							var _n0 = socketState.continuationId;
							if (_n0.$ === 'Nothing') {
								return state.continuations;
							} else {
								var id = _n0.a;
								return A2(elm$core$Dict$remove, id, state.continuations);
							}
						}(),
						socketStates: A2(elm$core$Dict$remove, key, state.socketStates)
					})),
			billstclair$elm_websocket_client$PortFunnel$WebSocket$NoResponse) : _Utils_Tuple2(
			billstclair$elm_websocket_client$PortFunnel$WebSocket$State(
				_Utils_update(
					state,
					{
						socketStates: A3(
							elm$core$Dict$insert,
							key,
							_Utils_update(
								socketState,
								{phase: billstclair$elm_websocket_client$PortFunnel$WebSocket$ClosingPhase}),
							state.socketStates)
					})),
			billstclair$elm_websocket_client$PortFunnel$WebSocket$CmdResponse(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$POClose(
					{key: key, reason: 'user request'})));
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$SocketAlreadyOpenError = function (a) {
	return {$: 'SocketAlreadyOpenError', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$SocketClosingError = function (a) {
	return {$: 'SocketClosingError', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$SocketConnectingError = function (a) {
	return {$: 'SocketConnectingError', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$checkUsedSocket = F2(
	function (state, key) {
		var socketState = A2(billstclair$elm_websocket_client$PortFunnel$WebSocket$getSocketState, key, state);
		var _n0 = socketState.phase;
		switch (_n0.$) {
			case 'IdlePhase':
				return elm$core$Result$Ok(socketState);
			case 'ConnectedPhase':
				return elm$core$Result$Err(
					_Utils_Tuple2(
						billstclair$elm_websocket_client$PortFunnel$WebSocket$State(state),
						billstclair$elm_websocket_client$PortFunnel$WebSocket$ErrorResponse(
							billstclair$elm_websocket_client$PortFunnel$WebSocket$SocketAlreadyOpenError(key))));
			case 'ConnectingPhase':
				return elm$core$Result$Err(
					_Utils_Tuple2(
						billstclair$elm_websocket_client$PortFunnel$WebSocket$State(state),
						billstclair$elm_websocket_client$PortFunnel$WebSocket$ErrorResponse(
							billstclair$elm_websocket_client$PortFunnel$WebSocket$SocketConnectingError(key))));
			default:
				return elm$core$Result$Err(
					_Utils_Tuple2(
						billstclair$elm_websocket_client$PortFunnel$WebSocket$State(state),
						billstclair$elm_websocket_client$PortFunnel$WebSocket$ErrorResponse(
							billstclair$elm_websocket_client$PortFunnel$WebSocket$SocketClosingError(key))));
		}
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$doOpen = F4(
	function (state, key, url, keepAlive) {
		var _n0 = A2(billstclair$elm_websocket_client$PortFunnel$WebSocket$checkUsedSocket, state, key);
		if (_n0.$ === 'Err') {
			var res = _n0.a;
			return res;
		} else {
			var socketState = _n0.a;
			return _Utils_Tuple2(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$State(
					_Utils_update(
						state,
						{
							socketStates: A3(
								elm$core$Dict$insert,
								key,
								_Utils_update(
									socketState,
									{keepAlive: keepAlive, phase: billstclair$elm_websocket_client$PortFunnel$WebSocket$ConnectingPhase, url: url}),
								state.socketStates)
						})),
				billstclair$elm_websocket_client$PortFunnel$WebSocket$CmdResponse(
					billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$POOpen(
						{key: key, url: url})));
		}
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$SocketNotOpenError = function (a) {
	return {$: 'SocketNotOpenError', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$queueSend = F3(
	function (state, key, message) {
		var queues = state.queues;
		var current = A2(
			elm$core$Maybe$withDefault,
			_List_Nil,
			A2(elm$core$Dict$get, key, queues));
		var _new = A2(
			elm$core$List$append,
			current,
			_List_fromArray(
				[message]));
		return _Utils_Tuple2(
			billstclair$elm_websocket_client$PortFunnel$WebSocket$State(
				_Utils_update(
					state,
					{
						queues: A3(elm$core$Dict$insert, key, _new, queues)
					})),
			billstclair$elm_websocket_client$PortFunnel$WebSocket$NoResponse);
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$doSend = F3(
	function (state, key, message) {
		var socketState = A2(billstclair$elm_websocket_client$PortFunnel$WebSocket$getSocketState, key, state);
		return (!_Utils_eq(socketState.phase, billstclair$elm_websocket_client$PortFunnel$WebSocket$ConnectedPhase)) ? ((!socketState.backoff) ? _Utils_Tuple2(
			billstclair$elm_websocket_client$PortFunnel$WebSocket$State(state),
			billstclair$elm_websocket_client$PortFunnel$WebSocket$ErrorResponse(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$SocketNotOpenError(key))) : A3(billstclair$elm_websocket_client$PortFunnel$WebSocket$queueSend, state, key, message)) : (_Utils_eq(
			A2(elm$core$Dict$get, key, state.queues),
			elm$core$Maybe$Nothing) ? _Utils_Tuple2(
			billstclair$elm_websocket_client$PortFunnel$WebSocket$State(state),
			billstclair$elm_websocket_client$PortFunnel$WebSocket$CmdResponse(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$POSend(
					{key: key, message: message}))) : A3(billstclair$elm_websocket_client$PortFunnel$WebSocket$queueSend, state, key, message));
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$getContinuation = F2(
	function (id, state) {
		var _n0 = A2(elm$core$Dict$get, id, state.continuations);
		if (_n0.$ === 'Nothing') {
			return elm$core$Maybe$Nothing;
		} else {
			var continuation = _n0.a;
			return elm$core$Maybe$Just(
				_Utils_Tuple3(
					continuation.key,
					continuation.kind,
					_Utils_update(
						state,
						{
							continuations: A2(elm$core$Dict$remove, id, state.continuations)
						})));
		}
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$RetryConnection = {$: 'RetryConnection'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$allocateContinuation = F3(
	function (key, kind, state) {
		var counter = state.continuationCounter + 1;
		var id = elm$core$String$fromInt(counter);
		var continuation = {key: key, kind: kind};
		var _n0 = function () {
			var _n1 = A2(elm$core$Dict$get, key, state.socketStates);
			if (_n1.$ === 'Nothing') {
				return _Utils_Tuple2(
					state.continuations,
					A2(billstclair$elm_websocket_client$PortFunnel$WebSocket$getSocketState, key, state));
			} else {
				var sockState = _n1.a;
				var _n2 = sockState.continuationId;
				if (_n2.$ === 'Nothing') {
					return _Utils_Tuple2(
						state.continuations,
						_Utils_update(
							sockState,
							{
								continuationId: elm$core$Maybe$Just(id)
							}));
				} else {
					var oldid = _n2.a;
					return _Utils_Tuple2(
						A2(elm$core$Dict$remove, oldid, state.continuations),
						_Utils_update(
							sockState,
							{
								continuationId: elm$core$Maybe$Just(id)
							}));
				}
			}
		}();
		var continuations = _n0.a;
		var socketState = _n0.b;
		return _Utils_Tuple2(
			id,
			_Utils_update(
				state,
				{
					continuationCounter: counter,
					continuations: A3(elm$core$Dict$insert, id, continuation, continuations),
					socketStates: A3(elm$core$Dict$insert, key, socketState, state.socketStates)
				}));
	});
var elm$core$Basics$pow = _Basics_pow;
var billstclair$elm_websocket_client$PortFunnel$WebSocket$backoffMillis = function (backoff) {
	return 10 * A2(elm$core$Basics$pow, 2, backoff);
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$maxBackoff = 10;
var billstclair$elm_websocket_client$PortFunnel$WebSocket$unexpectedClose = F2(
	function (state, _n0) {
		var key = _n0.key;
		var code = _n0.code;
		var reason = _n0.reason;
		var wasClean = _n0.wasClean;
		return _Utils_Tuple2(
			billstclair$elm_websocket_client$PortFunnel$WebSocket$State(
				_Utils_update(
					state,
					{
						socketStates: A2(elm$core$Dict$remove, key, state.socketStates)
					})),
			billstclair$elm_websocket_client$PortFunnel$WebSocket$ClosedResponse(
				{
					code: billstclair$elm_websocket_client$PortFunnel$WebSocket$closedCode(code),
					expected: false,
					key: key,
					reason: reason,
					wasClean: wasClean
				}));
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$handleUnexpectedClose = F2(
	function (state, closedRecord) {
		var key = closedRecord.key;
		var socketState = A2(billstclair$elm_websocket_client$PortFunnel$WebSocket$getSocketState, key, state);
		var backoff = 1 + socketState.backoff;
		if ((_Utils_cmp(backoff, billstclair$elm_websocket_client$PortFunnel$WebSocket$maxBackoff) > 0) || (((backoff === 1) && (!_Utils_eq(socketState.phase, billstclair$elm_websocket_client$PortFunnel$WebSocket$ConnectedPhase))) || (closedRecord.bytesQueued > 0))) {
			return A2(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$unexpectedClose,
				state,
				_Utils_update(
					closedRecord,
					{
						code: (_Utils_cmp(backoff, billstclair$elm_websocket_client$PortFunnel$WebSocket$maxBackoff) > 0) ? billstclair$elm_websocket_client$PortFunnel$WebSocket$closedCodeNumber(billstclair$elm_websocket_client$PortFunnel$WebSocket$TimedOutOnReconnect) : closedRecord.code
					}));
		} else {
			if (socketState.url === '') {
				return A2(billstclair$elm_websocket_client$PortFunnel$WebSocket$unexpectedClose, state, closedRecord);
			} else {
				var _n0 = A3(billstclair$elm_websocket_client$PortFunnel$WebSocket$allocateContinuation, key, billstclair$elm_websocket_client$PortFunnel$WebSocket$RetryConnection, state);
				var id = _n0.a;
				var state2 = _n0.b;
				var delay = billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PODelay(
					{
						id: id,
						millis: billstclair$elm_websocket_client$PortFunnel$WebSocket$backoffMillis(backoff)
					});
				return _Utils_Tuple2(
					billstclair$elm_websocket_client$PortFunnel$WebSocket$State(
						_Utils_update(
							state2,
							{
								socketStates: A3(
									elm$core$Dict$insert,
									key,
									_Utils_update(
										socketState,
										{backoff: backoff}),
									state.socketStates)
							})),
					billstclair$elm_websocket_client$PortFunnel$WebSocket$CmdResponse(delay));
			}
		}
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$DrainOutputQueue = {$: 'DrainOutputQueue'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$ListResponse = function (a) {
	return {$: 'ListResponse', a: a};
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$processQueuedMessage = F2(
	function (state, key) {
		var queues = state.queues;
		var _n0 = A2(elm$core$Dict$get, key, queues);
		if (_n0.$ === 'Nothing') {
			return _Utils_Tuple2(
				billstclair$elm_websocket_client$PortFunnel$WebSocket$State(state),
				billstclair$elm_websocket_client$PortFunnel$WebSocket$NoResponse);
		} else {
			if (!_n0.a.b) {
				return _Utils_Tuple2(
					billstclair$elm_websocket_client$PortFunnel$WebSocket$State(
						_Utils_update(
							state,
							{
								queues: A2(elm$core$Dict$remove, key, queues)
							})),
					billstclair$elm_websocket_client$PortFunnel$WebSocket$NoResponse);
			} else {
				var _n1 = _n0.a;
				var message = _n1.a;
				var tail = _n1.b;
				var posend = billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$POSend(
					{key: key, message: message});
				var _n2 = A3(billstclair$elm_websocket_client$PortFunnel$WebSocket$allocateContinuation, key, billstclair$elm_websocket_client$PortFunnel$WebSocket$DrainOutputQueue, state);
				var id = _n2.a;
				var state2 = _n2.b;
				var podelay = billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PODelay(
					{id: id, millis: 20});
				var response = billstclair$elm_websocket_client$PortFunnel$WebSocket$ListResponse(
					_List_fromArray(
						[
							billstclair$elm_websocket_client$PortFunnel$WebSocket$CmdResponse(podelay),
							billstclair$elm_websocket_client$PortFunnel$WebSocket$CmdResponse(posend)
						]));
				return _Utils_Tuple2(
					billstclair$elm_websocket_client$PortFunnel$WebSocket$State(
						_Utils_update(
							state2,
							{
								queues: A3(elm$core$Dict$insert, key, tail, queues)
							})),
					response);
			}
		}
	});
var elm$core$Basics$not = _Basics_not;
var elm$core$Dict$member = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$get, key, dict);
		if (_n0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var elm$core$Set$member = F2(
	function (key, _n0) {
		var dict = _n0.a;
		return A2(elm$core$Dict$member, key, dict);
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$process = F2(
	function (mess, unboxed) {
		var state = unboxed.a;
		switch (mess.$) {
			case 'Startup':
				return _Utils_Tuple2(
					billstclair$elm_websocket_client$PortFunnel$WebSocket$State(
						_Utils_update(
							state,
							{isLoaded: true})),
					billstclair$elm_websocket_client$PortFunnel$WebSocket$NoResponse);
			case 'PWillOpen':
				var key = mess.a.key;
				var url = mess.a.url;
				var keepAlive = mess.a.keepAlive;
				return A4(billstclair$elm_websocket_client$PortFunnel$WebSocket$doOpen, state, key, url, keepAlive);
			case 'PWillSend':
				var key = mess.a.key;
				var message = mess.a.message;
				return A3(billstclair$elm_websocket_client$PortFunnel$WebSocket$doSend, state, key, message);
			case 'PWillClose':
				var key = mess.a.key;
				var reason = mess.a.reason;
				return A3(billstclair$elm_websocket_client$PortFunnel$WebSocket$doClose, state, key, reason);
			case 'PIConnected':
				var key = mess.a.key;
				var description = mess.a.description;
				var socketState = A2(billstclair$elm_websocket_client$PortFunnel$WebSocket$getSocketState, key, state);
				if (!_Utils_eq(socketState.phase, billstclair$elm_websocket_client$PortFunnel$WebSocket$ConnectingPhase)) {
					return _Utils_Tuple2(
						billstclair$elm_websocket_client$PortFunnel$WebSocket$State(state),
						billstclair$elm_websocket_client$PortFunnel$WebSocket$ErrorResponse(
							billstclair$elm_websocket_client$PortFunnel$WebSocket$UnexpectedConnectedError(
								{description: description, key: key})));
				} else {
					var newState = _Utils_update(
						state,
						{
							socketStates: A3(
								elm$core$Dict$insert,
								key,
								_Utils_update(
									socketState,
									{backoff: 0, phase: billstclair$elm_websocket_client$PortFunnel$WebSocket$ConnectedPhase}),
								state.socketStates)
						});
					return (!socketState.backoff) ? _Utils_Tuple2(
						billstclair$elm_websocket_client$PortFunnel$WebSocket$State(newState),
						billstclair$elm_websocket_client$PortFunnel$WebSocket$ConnectedResponse(
							{description: description, key: key})) : A2(billstclair$elm_websocket_client$PortFunnel$WebSocket$processQueuedMessage, newState, key);
				}
			case 'PIMessageReceived':
				var key = mess.a.key;
				var message = mess.a.message;
				var socketState = A2(billstclair$elm_websocket_client$PortFunnel$WebSocket$getSocketState, key, state);
				return (!_Utils_eq(socketState.phase, billstclair$elm_websocket_client$PortFunnel$WebSocket$ConnectedPhase)) ? _Utils_Tuple2(
					billstclair$elm_websocket_client$PortFunnel$WebSocket$State(state),
					billstclair$elm_websocket_client$PortFunnel$WebSocket$ErrorResponse(
						billstclair$elm_websocket_client$PortFunnel$WebSocket$UnexpectedMessageError(
							{key: key, message: message}))) : _Utils_Tuple2(
					billstclair$elm_websocket_client$PortFunnel$WebSocket$State(state),
					socketState.keepAlive ? billstclair$elm_websocket_client$PortFunnel$WebSocket$NoResponse : billstclair$elm_websocket_client$PortFunnel$WebSocket$MessageReceivedResponse(
						{key: key, message: message}));
			case 'PIClosed':
				var closedRecord = mess.a;
				var key = closedRecord.key;
				var bytesQueued = closedRecord.bytesQueued;
				var code = closedRecord.code;
				var reason = closedRecord.reason;
				var wasClean = closedRecord.wasClean;
				var socketState = A2(billstclair$elm_websocket_client$PortFunnel$WebSocket$getSocketState, key, state);
				var expected = _Utils_eq(socketState.phase, billstclair$elm_websocket_client$PortFunnel$WebSocket$ClosingPhase);
				return ((!expected) && (!A2(elm$core$Set$member, key, state.noAutoReopenKeys))) ? A2(billstclair$elm_websocket_client$PortFunnel$WebSocket$handleUnexpectedClose, state, closedRecord) : _Utils_Tuple2(
					billstclair$elm_websocket_client$PortFunnel$WebSocket$State(
						_Utils_update(
							state,
							{
								socketStates: A2(elm$core$Dict$remove, key, state.socketStates)
							})),
					billstclair$elm_websocket_client$PortFunnel$WebSocket$ClosedResponse(
						{
							code: billstclair$elm_websocket_client$PortFunnel$WebSocket$closedCode(code),
							expected: expected,
							key: key,
							reason: reason,
							wasClean: wasClean
						}));
			case 'PIBytesQueued':
				var key = mess.a.key;
				var bufferedAmount = mess.a.bufferedAmount;
				return _Utils_Tuple2(
					billstclair$elm_websocket_client$PortFunnel$WebSocket$State(state),
					billstclair$elm_websocket_client$PortFunnel$WebSocket$NoResponse);
			case 'PIDelayed':
				var id = mess.a.id;
				var _n1 = A2(billstclair$elm_websocket_client$PortFunnel$WebSocket$getContinuation, id, state);
				if (_n1.$ === 'Nothing') {
					return _Utils_Tuple2(
						billstclair$elm_websocket_client$PortFunnel$WebSocket$State(state),
						billstclair$elm_websocket_client$PortFunnel$WebSocket$NoResponse);
				} else {
					var _n2 = _n1.a;
					var key = _n2.a;
					var kind = _n2.b;
					var state2 = _n2.c;
					if (kind.$ === 'DrainOutputQueue') {
						return A2(billstclair$elm_websocket_client$PortFunnel$WebSocket$processQueuedMessage, state2, key);
					} else {
						var socketState = A2(billstclair$elm_websocket_client$PortFunnel$WebSocket$getSocketState, key, state);
						var url = socketState.url;
						return (url !== '') ? _Utils_Tuple2(
							billstclair$elm_websocket_client$PortFunnel$WebSocket$State(
								_Utils_update(
									state2,
									{
										socketStates: A3(
											elm$core$Dict$insert,
											key,
											_Utils_update(
												socketState,
												{phase: billstclair$elm_websocket_client$PortFunnel$WebSocket$ConnectingPhase}),
											state.socketStates)
									})),
							billstclair$elm_websocket_client$PortFunnel$WebSocket$CmdResponse(
								billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$POOpen(
									{key: key, url: url}))) : A2(
							billstclair$elm_websocket_client$PortFunnel$WebSocket$unexpectedClose,
							state,
							{
								bytesQueued: 0,
								code: billstclair$elm_websocket_client$PortFunnel$WebSocket$closedCodeNumber(billstclair$elm_websocket_client$PortFunnel$WebSocket$AbnormalClosure),
								key: key,
								reason: 'Missing URL for reconnect',
								wasClean: false
							});
					}
				}
			case 'PIError':
				var key = mess.a.key;
				var code = mess.a.code;
				var description = mess.a.description;
				var name = mess.a.name;
				var message = mess.a.message;
				return _Utils_Tuple2(
					billstclair$elm_websocket_client$PortFunnel$WebSocket$State(state),
					billstclair$elm_websocket_client$PortFunnel$WebSocket$ErrorResponse(
						billstclair$elm_websocket_client$PortFunnel$WebSocket$LowLevelError(
							{code: code, description: description, key: key, message: message, name: name})));
			default:
				return _Utils_Tuple2(
					billstclair$elm_websocket_client$PortFunnel$WebSocket$State(state),
					billstclair$elm_websocket_client$PortFunnel$WebSocket$ErrorResponse(
						billstclair$elm_websocket_client$PortFunnel$WebSocket$InvalidMessageError(
							{message: mess})));
		}
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$moduleDesc = A4(billstclair$elm_port_funnel$PortFunnel$makeModuleDesc, billstclair$elm_websocket_client$PortFunnel$WebSocket$moduleName, billstclair$elm_websocket_client$PortFunnel$WebSocket$encode, billstclair$elm_websocket_client$PortFunnel$WebSocket$decode, billstclair$elm_websocket_client$PortFunnel$WebSocket$process);
var billstclair$elm_websocket_client$PortFunnel$WebSocket$send = billstclair$elm_port_funnel$PortFunnel$sendMessage(billstclair$elm_websocket_client$PortFunnel$WebSocket$moduleDesc);
var author$project$Main$send = F2(
	function (model, message) {
		return A2(
			billstclair$elm_websocket_client$PortFunnel$WebSocket$send,
			author$project$Main$getCmdPort(model),
			message);
	});
var author$project$MyKeyboardNet$Init$myInitColor = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(0, 0),
			_Utils_Tuple2(1, 0),
			_Utils_Tuple2(2, 0),
			_Utils_Tuple2(3, 0),
			_Utils_Tuple2(4, 0),
			_Utils_Tuple2(5, 0),
			_Utils_Tuple2(6, 0),
			_Utils_Tuple2(7, 0),
			_Utils_Tuple2(8, 0),
			_Utils_Tuple2(9, 0),
			_Utils_Tuple2(10, 0),
			_Utils_Tuple2(11, 0),
			_Utils_Tuple2(12, 0),
			_Utils_Tuple2(13, 0),
			_Utils_Tuple2(14, 0),
			_Utils_Tuple2(15, 0),
			_Utils_Tuple2(16, 0),
			_Utils_Tuple2(17, 0),
			_Utils_Tuple2(18, 0),
			_Utils_Tuple2(19, 0),
			_Utils_Tuple2(20, 0),
			_Utils_Tuple2(21, 0),
			_Utils_Tuple2(22, 0),
			_Utils_Tuple2(23, 0),
			_Utils_Tuple2(24, 0),
			_Utils_Tuple2(25, 0),
			_Utils_Tuple2(26, 0),
			_Utils_Tuple2(27, 0),
			_Utils_Tuple2(28, 0),
			_Utils_Tuple2(29, 0),
			_Utils_Tuple2(30, 0),
			_Utils_Tuple2(31, 0),
			_Utils_Tuple2(32, 0),
			_Utils_Tuple2(33, 0),
			_Utils_Tuple2(34, 0),
			_Utils_Tuple2(35, 0),
			_Utils_Tuple2(36, 0),
			_Utils_Tuple2(37, 0),
			_Utils_Tuple2(38, 0),
			_Utils_Tuple2(39, 0),
			_Utils_Tuple2(40, 0),
			_Utils_Tuple2(41, 0),
			_Utils_Tuple2(42, 0),
			_Utils_Tuple2(43, 0),
			_Utils_Tuple2(44, 0),
			_Utils_Tuple2(45, 0),
			_Utils_Tuple2(46, 0),
			_Utils_Tuple2(47, 0),
			_Utils_Tuple2(48, 0),
			_Utils_Tuple2(49, 0),
			_Utils_Tuple2(50, 0),
			_Utils_Tuple2(51, 0),
			_Utils_Tuple2(52, 0),
			_Utils_Tuple2(53, 0),
			_Utils_Tuple2(54, 0),
			_Utils_Tuple2(55, 0),
			_Utils_Tuple2(56, 0),
			_Utils_Tuple2(57, 0),
			_Utils_Tuple2(58, 0),
			_Utils_Tuple2(59, 0),
			_Utils_Tuple2(60, 0)
		]));
var author$project$MyKeyboardNet$Init$myInitState = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(0, false),
			_Utils_Tuple2(1, false),
			_Utils_Tuple2(2, false),
			_Utils_Tuple2(3, false),
			_Utils_Tuple2(4, false),
			_Utils_Tuple2(5, false),
			_Utils_Tuple2(6, false),
			_Utils_Tuple2(7, false),
			_Utils_Tuple2(8, false),
			_Utils_Tuple2(9, false),
			_Utils_Tuple2(10, false),
			_Utils_Tuple2(11, false),
			_Utils_Tuple2(12, false),
			_Utils_Tuple2(13, false),
			_Utils_Tuple2(14, false),
			_Utils_Tuple2(15, false),
			_Utils_Tuple2(16, false),
			_Utils_Tuple2(17, false),
			_Utils_Tuple2(18, false),
			_Utils_Tuple2(19, false),
			_Utils_Tuple2(20, false),
			_Utils_Tuple2(21, false),
			_Utils_Tuple2(22, false),
			_Utils_Tuple2(23, false),
			_Utils_Tuple2(24, false),
			_Utils_Tuple2(25, false),
			_Utils_Tuple2(26, false),
			_Utils_Tuple2(27, false),
			_Utils_Tuple2(28, false),
			_Utils_Tuple2(29, false),
			_Utils_Tuple2(30, false),
			_Utils_Tuple2(31, false),
			_Utils_Tuple2(32, false),
			_Utils_Tuple2(33, false),
			_Utils_Tuple2(34, false),
			_Utils_Tuple2(35, false),
			_Utils_Tuple2(36, false),
			_Utils_Tuple2(37, false),
			_Utils_Tuple2(38, false),
			_Utils_Tuple2(39, false),
			_Utils_Tuple2(40, false),
			_Utils_Tuple2(41, false),
			_Utils_Tuple2(42, false),
			_Utils_Tuple2(43, false),
			_Utils_Tuple2(44, false),
			_Utils_Tuple2(45, false),
			_Utils_Tuple2(46, false),
			_Utils_Tuple2(47, false),
			_Utils_Tuple2(48, false),
			_Utils_Tuple2(49, false),
			_Utils_Tuple2(50, false),
			_Utils_Tuple2(51, false),
			_Utils_Tuple2(52, false),
			_Utils_Tuple2(53, false),
			_Utils_Tuple2(54, false),
			_Utils_Tuple2(55, false),
			_Utils_Tuple2(56, false),
			_Utils_Tuple2(57, false),
			_Utils_Tuple2(58, false),
			_Utils_Tuple2(59, false),
			_Utils_Tuple2(60, false)
		]));
var author$project$MyKeyboardNet$Static$Types$Keyboard = F4(
	function (a, b, c, d) {
		return {$: 'Keyboard', a: a, b: b, c: c, d: d};
	});
var author$project$MyKeyboardNet$Init$init = A4(author$project$MyKeyboardNet$Static$Types$Keyboard, author$project$MyKeyboardNet$Init$myInitState, 16, author$project$MyKeyboardNet$Init$myInitColor, 0);
var author$project$MyKeyboardNet$Static$Types$SKeyboard = function (a) {
	return {$: 'SKeyboard', a: a};
};
var author$project$MyKeyboardNet$Static$Init$init = author$project$MyKeyboardNet$Static$Types$SKeyboard(author$project$MyKeyboardNet$Init$init);
var author$project$Static$Types$MyKeyboardNet = function (a) {
	return {$: 'MyKeyboardNet', a: a};
};
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var author$project$Static$Init$init = _Utils_Tuple2(
	author$project$Static$Types$MyKeyboardNet(author$project$MyKeyboardNet$Static$Init$init),
	elm$core$Platform$Cmd$none);
var billstclair$elm_websocket_client$PortFunnel$WebSocket$makeOpenWithKey = F2(
	function (key, url) {
		return billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PWillOpen(
			{keepAlive: false, key: key, url: url});
	});
var elm$core$Platform$Cmd$map = _Platform_map;
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
var author$project$Main$init = F3(
	function (_n0, url, key) {
		return function (model) {
			return A2(
				Janiczek$cmd_extra$Cmd$Extra$addCmd,
				A2(elm$core$Platform$Cmd$map, author$project$Main$OutgoingTrans, author$project$Static$Init$init.b),
				A2(
					Janiczek$cmd_extra$Cmd$Extra$withCmd,
					A2(
						author$project$Main$send,
						model,
						A2(billstclair$elm_websocket_client$PortFunnel$WebSocket$makeOpenWithKey, model.key, model.url)),
					model));
		}(
			{alert: elm$core$Maybe$Nothing, appModel: author$project$Static$Init$init.a, connectionState: author$project$Main$NotConnected, error: elm$core$Maybe$Nothing, key: 'socket', log: _List_Nil, state: author$project$Main$initialFunnelState, url: author$project$Main$defaultUrl, wasLoaded: false});
	});
var author$project$Main$WSProcess = function (a) {
	return {$: 'WSProcess', a: a};
};
var author$project$Main$subPort = _Platform_incomingPort('subPort', elm$json$Json$Decode$value);
var author$project$MyKeyboardNet$Static$Types$External = function (a) {
	return {$: 'External', a: a};
};
var author$project$MyKeyboardNet$Static$Types$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var author$project$MyKeyboardNet$Static$Types$TBoardKeyPressed = F3(
	function (a, b, c) {
		return {$: 'TBoardKeyPressed', a: a, b: b, c: c};
	});
var author$project$MyKeyboardNet$Static$Types$TInfoUpdating = F2(
	function (a, b) {
		return {$: 'TInfoUpdating', a: a, b: b};
	});
var author$project$MyKeyboardNet$Static$Types$TMakeDark = function (a) {
	return {$: 'TMakeDark', a: a};
};
var author$project$MyKeyboardNet$Static$Types$TMakeLight = function (a) {
	return {$: 'TMakeLight', a: a};
};
var author$project$MyKeyboardNet$Static$Types$TNoOp = {$: 'TNoOp'};
var author$project$MyKeyboardNet$Static$Types$TRandomColorNumber = function (a) {
	return {$: 'TRandomColorNumber', a: a};
};
var author$project$MyKeyboardNet$Static$Types$TRollRandomNum = {$: 'TRollRandomNum'};
var author$project$MyKeyboardNet$Static$Wrappers$Keyboard$unwrap = function (msg) {
	switch (msg.$) {
		case 'BoardKeyPressed':
			var clientKeyColorDict = msg.a;
			var myColor = msg.b;
			var myKeyInt = msg.c;
			return author$project$MyKeyboardNet$Static$Types$External(
				A3(author$project$MyKeyboardNet$Static$Types$TBoardKeyPressed, clientKeyColorDict, myColor, myKeyInt));
		case 'NoOp':
			return author$project$MyKeyboardNet$Static$Types$Internal(author$project$MyKeyboardNet$Static$Types$TNoOp);
		case 'MakeDark':
			var myKeyInt = msg.a;
			return author$project$MyKeyboardNet$Static$Types$External(
				author$project$MyKeyboardNet$Static$Types$TMakeDark(myKeyInt));
		case 'MakeLight':
			var myKeyInt = msg.a;
			return author$project$MyKeyboardNet$Static$Types$External(
				author$project$MyKeyboardNet$Static$Types$TMakeLight(myKeyInt));
		case 'RandomColorNumber':
			var myColor = msg.a;
			return author$project$MyKeyboardNet$Static$Types$Internal(
				author$project$MyKeyboardNet$Static$Types$TRandomColorNumber(myColor));
		case 'RollRandomNum':
			return author$project$MyKeyboardNet$Static$Types$External(author$project$MyKeyboardNet$Static$Types$TRollRandomNum);
		default:
			var clientKeyColorDict = msg.a;
			var playerCounter = msg.b;
			return author$project$MyKeyboardNet$Static$Types$External(
				A2(author$project$MyKeyboardNet$Static$Types$TInfoUpdating, clientKeyColorDict, playerCounter));
	}
};
var author$project$MyKeyboardNet$Static$Types$Keyboard$BoardKeyPressed = F3(
	function (a, b, c) {
		return {$: 'BoardKeyPressed', a: a, b: b, c: c};
	});
var author$project$MyKeyboardNet$Static$Types$Keyboard$InfoUpdating = F2(
	function (a, b) {
		return {$: 'InfoUpdating', a: a, b: b};
	});
var author$project$MyKeyboardNet$Static$Types$Keyboard$MakeDark = function (a) {
	return {$: 'MakeDark', a: a};
};
var author$project$MyKeyboardNet$Static$Types$Keyboard$MakeLight = function (a) {
	return {$: 'MakeLight', a: a};
};
var author$project$MyKeyboardNet$Keys$fromCode = function (keyCode) {
	switch (keyCode) {
		case '1':
			return 0;
		case '2':
			return 1;
		case '3':
			return 2;
		case '4':
			return 3;
		case '5':
			return 4;
		case '6':
			return 5;
		case '7':
			return 6;
		case '8':
			return 7;
		case '9':
			return 8;
		case '0':
			return 9;
		case 'q':
			return 10;
		case 'w':
			return 11;
		case 'e':
			return 12;
		case 'r':
			return 13;
		case 't':
			return 14;
		case 'y':
			return 15;
		case 'u':
			return 16;
		case 'i':
			return 17;
		case 'o':
			return 18;
		case 'p':
			return 19;
		case 'a':
			return 20;
		case 's':
			return 21;
		case 'd':
			return 22;
		case 'f':
			return 23;
		case 'g':
			return 24;
		case 'h':
			return 25;
		case 'j':
			return 26;
		case 'k':
			return 27;
		case 'l':
			return 28;
		case 'z':
			return 29;
		case 'x':
			return 30;
		case 'c':
			return 31;
		case 'v':
			return 32;
		case 'b':
			return 33;
		case 'n':
			return 34;
		case 'm':
			return 35;
		case '!':
			return 36;
		case '@':
			return 37;
		case '$':
			return 38;
		case '%':
			return 39;
		case '^':
			return 40;
		case '&':
			return 41;
		case '*':
			return 42;
		case 'Q':
			return 43;
		case 'W':
			return 44;
		case 'E':
			return 45;
		case 'T':
			return 46;
		case 'Y':
			return 47;
		case 'I':
			return 48;
		case 'O':
			return 49;
		case 'P':
			return 50;
		case 'S':
			return 51;
		case 'D':
			return 52;
		case 'G':
			return 53;
		case 'H':
			return 54;
		case 'J':
			return 55;
		case 'L':
			return 56;
		case 'Z':
			return 57;
		case 'C':
			return 58;
		case 'V':
			return 59;
		case 'B':
			return 60;
		default:
			var otherwise = keyCode;
			return 61;
	}
};
var author$project$MyKeyboardNet$View$Keyboard$keyDecoder = A2(
	elm$json$Json$Decode$map,
	author$project$MyKeyboardNet$Keys$fromCode,
	A2(elm$json$Json$Decode$field, 'key', elm$json$Json$Decode$string));
var elm$browser$Browser$Events$Document = {$: 'Document'};
var elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$browser$Browser$Events$init = elm$core$Task$succeed(
	A2(elm$browser$Browser$Events$State, _List_Nil, elm$core$Dict$empty));
var elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0.a;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0.a;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return _Utils_Tuple0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(_Utils_Tuple0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0.a;
		return elm$core$Task$Perform(
			A2(elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(elm$core$Task$map, toMessage, task)));
	});
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var elm$core$String$length = _String_length;
var elm$core$String$slice = _String_slice;
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = {$: 'Http'};
var elm$url$Url$Https = {$: 'Https'};
var elm$core$String$indexes = _String_indexes;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var elm$core$String$contains = _String_contains;
var elm$core$String$toInt = _String_toInt;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 'Nothing') {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Http,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Https,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$Events$spawn = F3(
	function (router, key, _n0) {
		var node = _n0.a;
		var name = _n0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						elm$core$Platform$sendToSelf,
						router,
						A2(elm$browser$Browser$Events$Event, key, event));
				}));
	});
var elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _n0) {
				stepState:
				while (true) {
					var list = _n0.a;
					var result = _n0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _n2 = list.a;
						var lKey = _n2.a;
						var lValue = _n2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_n0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_n0 = $temp$_n0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _n3 = A3(
			elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _n3.a;
		var intermediateResult = _n3.b;
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n4, result) {
					var k = _n4.a;
					var v = _n4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3(elm$core$Dict$foldl, elm$core$Dict$insert, t2, t1);
	});
var elm$core$Process$kill = _Scheduler_kill;
var elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _n6) {
				var deads = _n6.a;
				var lives = _n6.b;
				var news = _n6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						elm$core$List$cons,
						A3(elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_n4, pid, _n5) {
				var deads = _n5.a;
				var lives = _n5.b;
				var news = _n5.c;
				return _Utils_Tuple3(
					A2(elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _n2, _n3) {
				var deads = _n3.a;
				var lives = _n3.b;
				var news = _n3.c;
				return _Utils_Tuple3(
					deads,
					A3(elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2(elm$core$List$map, elm$browser$Browser$Events$addKey, subs);
		var _n0 = A6(
			elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, elm$core$Dict$empty, _List_Nil));
		var deadPids = _n0.a;
		var livePids = _n0.b;
		var makeNewPids = _n0.c;
		return A2(
			elm$core$Task$andThen,
			function (pids) {
				return elm$core$Task$succeed(
					A2(
						elm$browser$Browser$Events$State,
						newSubs,
						A2(
							elm$core$Dict$union,
							livePids,
							elm$core$Dict$fromList(pids))));
			},
			A2(
				elm$core$Task$andThen,
				function (_n1) {
					return elm$core$Task$sequence(makeNewPids);
				},
				elm$core$Task$sequence(
					A2(elm$core$List$map, elm$core$Process$kill, deadPids))));
	});
var elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _n0 = f(mx);
		if (_n0.$ === 'Just') {
			var x = _n0.a;
			return A2(elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _n0, state) {
		var key = _n0.key;
		var event = _n0.event;
		var toMessage = function (_n2) {
			var subKey = _n2.a;
			var _n3 = _n2.b;
			var node = _n3.a;
			var name = _n3.b;
			var decoder = _n3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : elm$core$Maybe$Nothing;
		};
		var messages = A2(elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			elm$core$Task$andThen,
			function (_n1) {
				return elm$core$Task$succeed(state);
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Platform$sendToApp(router),
					messages)));
	});
var elm$browser$Browser$Events$subMap = F2(
	function (func, _n0) {
		var node = _n0.a;
		var name = _n0.b;
		var decoder = _n0.c;
		return A3(
			elm$browser$Browser$Events$MySub,
			node,
			name,
			A2(elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager(elm$browser$Browser$Events$init, elm$browser$Browser$Events$onEffects, elm$browser$Browser$Events$onSelfMsg, 0, elm$browser$Browser$Events$subMap);
var elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return elm$browser$Browser$Events$subscription(
			A3(elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var elm$browser$Browser$Events$onKeyDown = A2(elm$browser$Browser$Events$on, elm$browser$Browser$Events$Document, 'keydown');
var elm$browser$Browser$Events$onKeyUp = A2(elm$browser$Browser$Events$on, elm$browser$Browser$Events$Document, 'keyup');
var elm$core$Basics$always = F2(
	function (a, _n0) {
		return a;
	});
var elm$core$Platform$Sub$batch = _Platform_batch;
var elm$time$Time$Every = F2(
	function (a, b) {
		return {$: 'Every', a: a, b: b};
	});
var elm$time$Time$State = F2(
	function (taggers, processes) {
		return {processes: processes, taggers: taggers};
	});
var elm$time$Time$init = elm$core$Task$succeed(
	A2(elm$time$Time$State, elm$core$Dict$empty, elm$core$Dict$empty));
var elm$time$Time$addMySub = F2(
	function (_n0, state) {
		var interval = _n0.a;
		var tagger = _n0.b;
		var _n1 = A2(elm$core$Dict$get, interval, state);
		if (_n1.$ === 'Nothing') {
			return A3(
				elm$core$Dict$insert,
				interval,
				_List_fromArray(
					[tagger]),
				state);
		} else {
			var taggers = _n1.a;
			return A3(
				elm$core$Dict$insert,
				interval,
				A2(elm$core$List$cons, tagger, taggers),
				state);
		}
	});
var elm$core$Process$spawn = _Scheduler_spawn;
var elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var elm$time$Time$customZone = elm$time$Time$Zone;
var elm$time$Time$setInterval = _Time_setInterval;
var elm$time$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		if (!intervals.b) {
			return elm$core$Task$succeed(processes);
		} else {
			var interval = intervals.a;
			var rest = intervals.b;
			var spawnTimer = elm$core$Process$spawn(
				A2(
					elm$time$Time$setInterval,
					interval,
					A2(elm$core$Platform$sendToSelf, router, interval)));
			var spawnRest = function (id) {
				return A3(
					elm$time$Time$spawnHelp,
					router,
					rest,
					A3(elm$core$Dict$insert, interval, id, processes));
			};
			return A2(elm$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var elm$time$Time$onEffects = F3(
	function (router, subs, _n0) {
		var processes = _n0.processes;
		var rightStep = F3(
			function (_n6, id, _n7) {
				var spawns = _n7.a;
				var existing = _n7.b;
				var kills = _n7.c;
				return _Utils_Tuple3(
					spawns,
					existing,
					A2(
						elm$core$Task$andThen,
						function (_n5) {
							return kills;
						},
						elm$core$Process$kill(id)));
			});
		var newTaggers = A3(elm$core$List$foldl, elm$time$Time$addMySub, elm$core$Dict$empty, subs);
		var leftStep = F3(
			function (interval, taggers, _n4) {
				var spawns = _n4.a;
				var existing = _n4.b;
				var kills = _n4.c;
				return _Utils_Tuple3(
					A2(elm$core$List$cons, interval, spawns),
					existing,
					kills);
			});
		var bothStep = F4(
			function (interval, taggers, id, _n3) {
				var spawns = _n3.a;
				var existing = _n3.b;
				var kills = _n3.c;
				return _Utils_Tuple3(
					spawns,
					A3(elm$core$Dict$insert, interval, id, existing),
					kills);
			});
		var _n1 = A6(
			elm$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			processes,
			_Utils_Tuple3(
				_List_Nil,
				elm$core$Dict$empty,
				elm$core$Task$succeed(_Utils_Tuple0)));
		var spawnList = _n1.a;
		var existingDict = _n1.b;
		var killTask = _n1.c;
		return A2(
			elm$core$Task$andThen,
			function (newProcesses) {
				return elm$core$Task$succeed(
					A2(elm$time$Time$State, newTaggers, newProcesses));
			},
			A2(
				elm$core$Task$andThen,
				function (_n2) {
					return A3(elm$time$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var elm$time$Time$millisToPosix = elm$time$Time$Posix;
var elm$time$Time$now = _Time_now(elm$time$Time$millisToPosix);
var elm$time$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _n0 = A2(elm$core$Dict$get, interval, state.taggers);
		if (_n0.$ === 'Nothing') {
			return elm$core$Task$succeed(state);
		} else {
			var taggers = _n0.a;
			var tellTaggers = function (time) {
				return elm$core$Task$sequence(
					A2(
						elm$core$List$map,
						function (tagger) {
							return A2(
								elm$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						taggers));
			};
			return A2(
				elm$core$Task$andThen,
				function (_n1) {
					return elm$core$Task$succeed(state);
				},
				A2(elm$core$Task$andThen, tellTaggers, elm$time$Time$now));
		}
	});
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var elm$time$Time$subMap = F2(
	function (f, _n0) {
		var interval = _n0.a;
		var tagger = _n0.b;
		return A2(
			elm$time$Time$Every,
			interval,
			A2(elm$core$Basics$composeL, f, tagger));
	});
_Platform_effectManagers['Time'] = _Platform_createManager(elm$time$Time$init, elm$time$Time$onEffects, elm$time$Time$onSelfMsg, 0, elm$time$Time$subMap);
var elm$time$Time$subscription = _Platform_leaf('Time');
var elm$time$Time$every = F2(
	function (interval, tagger) {
		return elm$time$Time$subscription(
			A2(elm$time$Time$Every, interval, tagger));
	});
var author$project$MyKeyboardNet$View$Keyboard$subs = function (_n0) {
	var clientKeyStateDict = _n0.a;
	var myColor = _n0.b;
	var clientKeyColorDict = _n0.c;
	var pC = _n0.d;
	return elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				A2(
				elm$time$Time$every,
				50,
				elm$core$Basics$always(
					A2(author$project$MyKeyboardNet$Static$Types$Keyboard$InfoUpdating, clientKeyColorDict, pC))),
				elm$browser$Browser$Events$onKeyDown(
				A2(
					elm$json$Json$Decode$map,
					A2(author$project$MyKeyboardNet$Static$Types$Keyboard$BoardKeyPressed, clientKeyColorDict, myColor),
					author$project$MyKeyboardNet$View$Keyboard$keyDecoder)),
				elm$browser$Browser$Events$onKeyDown(
				A2(elm$json$Json$Decode$map, author$project$MyKeyboardNet$Static$Types$Keyboard$MakeDark, author$project$MyKeyboardNet$View$Keyboard$keyDecoder)),
				elm$browser$Browser$Events$onKeyUp(
				A2(elm$json$Json$Decode$map, author$project$MyKeyboardNet$Static$Types$Keyboard$MakeLight, author$project$MyKeyboardNet$View$Keyboard$keyDecoder))
			]));
};
var elm$core$Platform$Sub$map = _Platform_map;
var author$project$MyKeyboardNet$Static$Subs$subs = function (model) {
	var m = model.a;
	return A2(
		elm$core$Platform$Sub$map,
		author$project$MyKeyboardNet$Static$Wrappers$Keyboard$unwrap,
		author$project$MyKeyboardNet$View$Keyboard$subs(m));
};
var author$project$Static$Types$MyKeyboardNetTrans = function (a) {
	return {$: 'MyKeyboardNetTrans', a: a};
};
var author$project$Static$Subs$subscriptions = function (model) {
	var m = model.a;
	return A2(
		elm$core$Platform$Sub$map,
		author$project$Static$Types$MyKeyboardNetTrans,
		author$project$MyKeyboardNet$Static$Subs$subs(m));
};
var author$project$Main$subscriptions = function (model) {
	return elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				author$project$Main$subPort(author$project$Main$WSProcess),
				A2(
				elm$core$Platform$Sub$map,
				author$project$Main$OutgoingTrans,
				author$project$Static$Subs$subscriptions(model.appModel))
			]));
};
var Janiczek$cmd_extra$Cmd$Extra$withNoCmd = function (model) {
	return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
};
var author$project$Main$IncomingMsg = function (a) {
	return {$: 'IncomingMsg', a: a};
};
var Janiczek$cmd_extra$Cmd$Extra$withCmds = F2(
	function (cmds, model) {
		return _Utils_Tuple2(
			model,
			elm$core$Platform$Cmd$batch(cmds));
	});
var billstclair$elm_port_funnel$PortFunnel$process = F4(
	function (accessors, _n0, genericMessage, state) {
		var moduleDesc = _n0.a;
		var _n1 = moduleDesc.decoder(genericMessage);
		if (_n1.$ === 'Err') {
			var err = _n1.a;
			return elm$core$Result$Err(err);
		} else {
			var message = _n1.a;
			var substate = accessors.get(state);
			var _n2 = A2(moduleDesc.process, message, substate);
			var substate2 = _n2.a;
			var response = _n2.b;
			return elm$core$Result$Ok(
				_Utils_Tuple2(
					A2(accessors.set, substate2, state),
					response));
		}
	});
var billstclair$elm_port_funnel$PortFunnel$appProcess = F5(
	function (cmdPort, genericMessage, funnel, state, model) {
		var _n0 = A4(billstclair$elm_port_funnel$PortFunnel$process, funnel.accessors, funnel.moduleDesc, genericMessage, state);
		if (_n0.$ === 'Err') {
			var error = _n0.a;
			return elm$core$Result$Err(error);
		} else {
			var _n1 = _n0.a;
			var state2 = _n1.a;
			var response = _n1.b;
			var gmToCmdPort = function (gm) {
				return cmdPort(
					billstclair$elm_port_funnel$PortFunnel$encodeGenericMessage(gm));
			};
			var cmd = A2(funnel.commander, gmToCmdPort, response);
			var _n2 = A3(funnel.handler, response, state2, model);
			var model2 = _n2.a;
			var cmd2 = _n2.b;
			return elm$core$Result$Ok(
				A2(
					Janiczek$cmd_extra$Cmd$Extra$withCmds,
					_List_fromArray(
						[cmd, cmd2]),
					model2));
		}
	});
var author$project$Main$appTrampoline = F4(
	function (genericMessage, funnel, state, model) {
		var theCmdPort = author$project$Main$getCmdPort(model);
		var appFunnel = funnel.a;
		return A5(billstclair$elm_port_funnel$PortFunnel$appProcess, theCmdPort, genericMessage, appFunnel, state, model);
	});
var author$project$Main$SocketFunnel = function (a) {
	return {$: 'SocketFunnel', a: a};
};
var billstclair$elm_port_funnel$PortFunnel$StateAccessors = F2(
	function (get, set) {
		return {get: get, set: set};
	});
var author$project$Main$socketAccessors = A2(
	billstclair$elm_port_funnel$PortFunnel$StateAccessors,
	function ($) {
		return $.socket;
	},
	F2(
		function (substate, state) {
			return _Utils_update(
				state,
				{socket: substate});
		}));
var author$project$Main$Connected = {$: 'Connected'};
var author$project$Main$ConnectionClosed = {$: 'ConnectionClosed'};
var author$project$Main$WSClose = {$: 'WSClose'};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$closedCodeToString = function (code) {
	switch (code.$) {
		case 'NormalClosure':
			return 'Normal';
		case 'GoingAwayClosure':
			return 'GoingAway';
		case 'ProtocolErrorClosure':
			return 'ProtocolError';
		case 'UnsupportedDataClosure':
			return 'UnsupportedData';
		case 'NoStatusRecvdClosure':
			return 'NoStatusRecvd';
		case 'AbnormalClosure':
			return 'Abnormal';
		case 'InvalidFramePayloadDataClosure':
			return 'InvalidFramePayloadData';
		case 'PolicyViolationClosure':
			return 'PolicyViolation';
		case 'MessageTooBigClosure':
			return 'MessageTooBig';
		case 'MissingExtensionClosure':
			return 'MissingExtension';
		case 'InternalErrorClosure':
			return 'InternalError';
		case 'ServiceRestartClosure':
			return 'ServiceRestart';
		case 'TryAgainLaterClosure':
			return 'TryAgainLater';
		case 'BadGatewayClosure':
			return 'BadGateway';
		case 'TLSHandshakeClosure':
			return 'TLSHandshake';
		case 'TimedOutOnReconnect':
			return 'TimedOutOnReconnect';
		default:
			return 'UnknownClosureCode';
	}
};
var author$project$Main$closedString = F3(
	function (code, wasClean, expected) {
		return 'code: ' + (billstclair$elm_websocket_client$PortFunnel$WebSocket$closedCodeToString(code) + (', ' + ((wasClean ? 'clean' : 'not clean') + (', ' + (expected ? 'expected' : 'NOT expected')))));
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$isLoaded = function (_n0) {
	var state = _n0.a;
	return state.isLoaded;
};
var author$project$Main$doIsLoaded = function (model) {
	return ((!model.wasLoaded) && billstclair$elm_websocket_client$PortFunnel$WebSocket$isLoaded(model.state.socket)) ? _Utils_update(
		model,
		{wasLoaded: true}) : model;
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$makeSend = F2(
	function (key, message) {
		return billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PWillSend(
			{key: key, message: message});
	});
var author$project$Main$wsSend = F2(
	function (m, model) {
		return A2(
			Janiczek$cmd_extra$Cmd$Extra$withCmd,
			A2(
				author$project$Main$send,
				model,
				A2(billstclair$elm_websocket_client$PortFunnel$WebSocket$makeSend, model.key, m)),
			model);
	});
var author$project$MyKeyboardNet$Static$Types$MBoardKeyUnpressed = F3(
	function (a, b, c) {
		return {$: 'MBoardKeyUnpressed', a: a, b: b, c: c};
	});
var author$project$MyKeyboardNet$Static$Types$MInfoUpdated = F2(
	function (a, b) {
		return {$: 'MInfoUpdated', a: a, b: b};
	});
var author$project$MyKeyboardNet$Static$Types$MMadeKeyDark = function (a) {
	return {$: 'MMadeKeyDark', a: a};
};
var author$project$MyKeyboardNet$Static$Types$MMadeKeyLight = function (a) {
	return {$: 'MMadeKeyLight', a: a};
};
var author$project$MyKeyboardNet$Static$Types$MRandomNumRolled = {$: 'MRandomNumRolled'};
var elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return elm$core$Result$Err(e);
		}
	});
var author$project$Utils$Utils$rMap = elm$core$Result$map;
var author$project$Utils$Utils$decodeDict = function (_n0) {
	var res = _n0.a;
	var lst = _n0.b;
	return _Utils_Tuple2(
		A2(author$project$Utils$Utils$rMap, elm$core$Dict$fromList, res),
		lst);
};
var elm$core$Basics$ge = _Utils_ge;
var elm$core$String$foldr = _String_foldr;
var elm$core$String$toList = function (string) {
	return A3(elm$core$String$foldr, elm$core$List$cons, _List_Nil, string);
};
var author$project$Utils$Utils$decodeInt = F3(
	function (low, high, s) {
		var decodeInt_ = F2(
			function (m, s_) {
				if (s_.b) {
					var f = s_.a;
					var rest = s_.b;
					return ((elm$core$Char$toCode(f) - 48) * m) + A2(decodeInt_, m * 64, rest);
				} else {
					return 0;
				}
			});
		var n = A2(
			decodeInt_,
			1,
			elm$core$String$toList(s)) + low;
		return ((_Utils_cmp(n, low) > -1) && (_Utils_cmp(n, high) < 1)) ? elm$core$Result$Ok(n) : elm$core$Result$Err(
			'Could not decode ' + (elm$core$String$fromInt(n) + (' as it is outside the range [' + (elm$core$String$fromInt(low) + (',' + (elm$core$String$fromInt(high) + '].'))))));
	});
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var elm$core$Result$map2 = F3(
	function (func, ra, rb) {
		if (ra.$ === 'Err') {
			var x = ra.a;
			return elm$core$Result$Err(x);
		} else {
			var a = ra.a;
			if (rb.$ === 'Err') {
				var x = rb.a;
				return elm$core$Result$Err(x);
			} else {
				var b = rb.a;
				return elm$core$Result$Ok(
					A2(func, a, b));
			}
		}
	});
var elm$core$Result$withDefault = F2(
	function (def, result) {
		if (result.$ === 'Ok') {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var author$project$Utils$Utils$decodeList = F2(
	function (ls, decodeFn) {
		var n = A2(
			elm$core$Result$withDefault,
			0,
			function () {
				if (ls.b) {
					var nTxt = ls.a;
					var rest = ls.b;
					return A3(author$project$Utils$Utils$decodeInt, 0, 16777215, nTxt);
				} else {
					return elm$core$Result$Err('Could not decode number of items in list.');
				}
			}());
		var aR = F2(
			function (aRes, laRes) {
				return A3(
					elm$core$Result$map2,
					F2(
						function (a, la) {
							return _Utils_ap(
								la,
								_List_fromArray(
									[a]));
						}),
					aRes,
					laRes);
			});
		var decodeList_ = F2(
			function (n_, _n1) {
				var resL = _n1.a;
				var mainLs = _n1.b;
				var _n0 = decodeFn(
					_Utils_Tuple2(
						elm$core$Result$Err(''),
						mainLs));
				var newRes = _n0.a;
				var newLs = _n0.b;
				return _Utils_Tuple2(
					A2(aR, newRes, resL),
					newLs);
			});
		return A3(
			elm$core$List$foldl,
			decodeList_,
			_Utils_Tuple2(
				elm$core$Result$Ok(_List_Nil),
				A2(elm$core$List$drop, 1, ls)),
			A2(elm$core$List$range, 1, n));
	});
var author$project$Utils$Utils$rMap2 = elm$core$Result$map2;
var elm$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		if (ra.$ === 'Err') {
			var x = ra.a;
			return elm$core$Result$Err(x);
		} else {
			var a = ra.a;
			if (rb.$ === 'Err') {
				var x = rb.a;
				return elm$core$Result$Err(x);
			} else {
				var b = rb.a;
				if (rc.$ === 'Err') {
					var x = rc.a;
					return elm$core$Result$Err(x);
				} else {
					var c = rc.a;
					return elm$core$Result$Ok(
						A3(func, a, b, c));
				}
			}
		}
	});
var author$project$Utils$Utils$rMap3 = elm$core$Result$map3;
var elm$core$String$concat = function (strings) {
	return A2(elm$core$String$join, '', strings);
};
var author$project$Utils$Utils$tConcat = elm$core$String$concat;
var elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return elm$core$Result$Err(msg);
		}
	});
var author$project$MyKeyboardNet$Static$Decode$decodeIncomingMessage = function (_n0) {
	var incomingmessageTxts = _n0.b;
	_n1$5:
	while (true) {
		if (incomingmessageTxts.b) {
			switch (incomingmessageTxts.a) {
				case 'MBoardKeyUnpressed':
					var rest = incomingmessageTxts.b;
					return function (_n2) {
						var r3 = _n2.a;
						var l4 = _n2.b;
						return function (_n12) {
							var r4 = _n12.a;
							var l5 = _n12.b;
							return function (_n14) {
								var r5 = _n14.a;
								var l6 = _n14.b;
								return function (_n16) {
									var r6 = _n16.a;
									var l7 = _n16.b;
									return _Utils_Tuple2(
										A4(author$project$Utils$Utils$rMap3, author$project$MyKeyboardNet$Static$Types$MBoardKeyUnpressed, r4, r5, r6),
										l7);
								}(
									function () {
										if (l6.b) {
											var myKeyIntTxt = l6.a;
											var ll6 = l6.b;
											return _Utils_Tuple2(
												A2(
													elm$core$Result$andThen,
													elm$core$Result$Ok,
													A3(author$project$Utils$Utils$decodeInt, 0, 62, myKeyIntTxt)),
												ll6);
										} else {
											return _Utils_Tuple2(
												elm$core$Result$Err('Ran out of string to process while parsing IncomingMessage'),
												_List_Nil);
										}
									}());
							}(
								function () {
									if (l5.b) {
										var myColorTxt = l5.a;
										var ll5 = l5.b;
										return _Utils_Tuple2(
											A2(
												elm$core$Result$andThen,
												elm$core$Result$Ok,
												A3(author$project$Utils$Utils$decodeInt, 0, 24, myColorTxt)),
											ll5);
									} else {
										return _Utils_Tuple2(
											elm$core$Result$Err('Ran out of string to process while parsing IncomingMessage'),
											_List_Nil);
									}
								}());
						}(
							author$project$Utils$Utils$decodeDict(
								A2(
									author$project$Utils$Utils$decodeList,
									l4,
									function (_n3) {
										var r4 = _n3.a;
										var l5 = _n3.b;
										var _n4 = function () {
											if (l5.b) {
												var clientKeyColorDictKeyValPairTxt = l5.a;
												var llf5 = l5.b;
												return function (_n6) {
													var r9 = _n6.a;
													var l10 = _n6.b;
													if (l10.b) {
														var myKeyIntTxt = l10.a;
														var ll10 = l10.b;
														return _Utils_Tuple2(
															A2(
																elm$core$Result$andThen,
																elm$core$Result$Ok,
																A3(author$project$Utils$Utils$decodeInt, 0, 62, myKeyIntTxt)),
															ll10);
													} else {
														return _Utils_Tuple2(
															elm$core$Result$Err('Ran out of string to process while parsing IncomingMessage'),
															_List_Nil);
													}
												}(
													_Utils_Tuple2(
														elm$core$Result$Err(''),
														l5));
											} else {
												return _Utils_Tuple2(
													elm$core$Result$Err('Ran out of string to process while parsing IncomingMessage'),
													_List_Nil);
											}
										}();
										var myKeyInt = _n4.a;
										var lf5 = _n4.b;
										var _n8 = function () {
											if (lf5.b) {
												var clientKeyColorDictKeyValPairTxt = lf5.a;
												var lls5 = lf5.b;
												return function (_n10) {
													var r9 = _n10.a;
													var l10 = _n10.b;
													if (l10.b) {
														var myKeyColorTxt = l10.a;
														var ll10 = l10.b;
														return _Utils_Tuple2(
															A2(
																elm$core$Result$andThen,
																elm$core$Result$Ok,
																A3(author$project$Utils$Utils$decodeInt, 0, 24, myKeyColorTxt)),
															ll10);
													} else {
														return _Utils_Tuple2(
															elm$core$Result$Err('Ran out of string to process while parsing IncomingMessage'),
															_List_Nil);
													}
												}(
													_Utils_Tuple2(
														elm$core$Result$Err(''),
														lf5));
											} else {
												return _Utils_Tuple2(
													elm$core$Result$Err('Ran out of string to process while parsing IncomingMessage'),
													_List_Nil);
											}
										}();
										var myKeyColor = _n8.a;
										var ls5 = _n8.b;
										return _Utils_Tuple2(
											A3(
												elm$core$Result$map2,
												F2(
													function (rff5, rss5) {
														return _Utils_Tuple2(rff5, rss5);
													}),
												myKeyInt,
												myKeyColor),
											ls5);
									})));
					}(
						_Utils_Tuple2(
							elm$core$Result$Err(''),
							rest));
				case 'MMadeKeyDark':
					var rest = incomingmessageTxts.b;
					return function (_n17) {
						var r3 = _n17.a;
						var l4 = _n17.b;
						return function (_n19) {
							var r4 = _n19.a;
							var l5 = _n19.b;
							return _Utils_Tuple2(
								A2(author$project$Utils$Utils$rMap, author$project$MyKeyboardNet$Static$Types$MMadeKeyDark, r4),
								l5);
						}(
							function () {
								if (l4.b) {
									var myKeyIntTxt = l4.a;
									var ll4 = l4.b;
									return _Utils_Tuple2(
										A2(
											elm$core$Result$andThen,
											elm$core$Result$Ok,
											A3(author$project$Utils$Utils$decodeInt, 0, 62, myKeyIntTxt)),
										ll4);
								} else {
									return _Utils_Tuple2(
										elm$core$Result$Err('Ran out of string to process while parsing IncomingMessage'),
										_List_Nil);
								}
							}());
					}(
						_Utils_Tuple2(
							elm$core$Result$Err(''),
							rest));
				case 'MMadeKeyLight':
					var rest = incomingmessageTxts.b;
					return function (_n20) {
						var r3 = _n20.a;
						var l4 = _n20.b;
						return function (_n22) {
							var r4 = _n22.a;
							var l5 = _n22.b;
							return _Utils_Tuple2(
								A2(author$project$Utils$Utils$rMap, author$project$MyKeyboardNet$Static$Types$MMadeKeyLight, r4),
								l5);
						}(
							function () {
								if (l4.b) {
									var myKeyIntTxt = l4.a;
									var ll4 = l4.b;
									return _Utils_Tuple2(
										A2(
											elm$core$Result$andThen,
											elm$core$Result$Ok,
											A3(author$project$Utils$Utils$decodeInt, 0, 62, myKeyIntTxt)),
										ll4);
								} else {
									return _Utils_Tuple2(
										elm$core$Result$Err('Ran out of string to process while parsing IncomingMessage'),
										_List_Nil);
								}
							}());
					}(
						_Utils_Tuple2(
							elm$core$Result$Err(''),
							rest));
				case 'MRandomNumRolled':
					var rest = incomingmessageTxts.b;
					return function (_n23) {
						var r3 = _n23.a;
						var l4 = _n23.b;
						return _Utils_Tuple2(
							elm$core$Result$Ok(author$project$MyKeyboardNet$Static$Types$MRandomNumRolled),
							l4);
					}(
						_Utils_Tuple2(
							elm$core$Result$Err(''),
							rest));
				case 'MInfoUpdated':
					var rest = incomingmessageTxts.b;
					return function (_n24) {
						var r3 = _n24.a;
						var l4 = _n24.b;
						return function (_n34) {
							var r4 = _n34.a;
							var l5 = _n34.b;
							return function (_n36) {
								var r5 = _n36.a;
								var l6 = _n36.b;
								return _Utils_Tuple2(
									A3(author$project$Utils$Utils$rMap2, author$project$MyKeyboardNet$Static$Types$MInfoUpdated, r4, r5),
									l6);
							}(
								function () {
									if (l5.b) {
										var playerCounterTxt = l5.a;
										var ll5 = l5.b;
										return _Utils_Tuple2(
											A2(
												elm$core$Result$andThen,
												elm$core$Result$Ok,
												A3(author$project$Utils$Utils$decodeInt, 0, 100, playerCounterTxt)),
											ll5);
									} else {
										return _Utils_Tuple2(
											elm$core$Result$Err('Ran out of string to process while parsing IncomingMessage'),
											_List_Nil);
									}
								}());
						}(
							author$project$Utils$Utils$decodeDict(
								A2(
									author$project$Utils$Utils$decodeList,
									l4,
									function (_n25) {
										var r4 = _n25.a;
										var l5 = _n25.b;
										var _n26 = function () {
											if (l5.b) {
												var clientKeyColorDictKeyValPairTxt = l5.a;
												var llf5 = l5.b;
												return function (_n28) {
													var r9 = _n28.a;
													var l10 = _n28.b;
													if (l10.b) {
														var myKeyIntTxt = l10.a;
														var ll10 = l10.b;
														return _Utils_Tuple2(
															A2(
																elm$core$Result$andThen,
																elm$core$Result$Ok,
																A3(author$project$Utils$Utils$decodeInt, 0, 62, myKeyIntTxt)),
															ll10);
													} else {
														return _Utils_Tuple2(
															elm$core$Result$Err('Ran out of string to process while parsing IncomingMessage'),
															_List_Nil);
													}
												}(
													_Utils_Tuple2(
														elm$core$Result$Err(''),
														l5));
											} else {
												return _Utils_Tuple2(
													elm$core$Result$Err('Ran out of string to process while parsing IncomingMessage'),
													_List_Nil);
											}
										}();
										var myKeyInt = _n26.a;
										var lf5 = _n26.b;
										var _n30 = function () {
											if (lf5.b) {
												var clientKeyColorDictKeyValPairTxt = lf5.a;
												var lls5 = lf5.b;
												return function (_n32) {
													var r9 = _n32.a;
													var l10 = _n32.b;
													if (l10.b) {
														var myKeyColorTxt = l10.a;
														var ll10 = l10.b;
														return _Utils_Tuple2(
															A2(
																elm$core$Result$andThen,
																elm$core$Result$Ok,
																A3(author$project$Utils$Utils$decodeInt, 0, 24, myKeyColorTxt)),
															ll10);
													} else {
														return _Utils_Tuple2(
															elm$core$Result$Err('Ran out of string to process while parsing IncomingMessage'),
															_List_Nil);
													}
												}(
													_Utils_Tuple2(
														elm$core$Result$Err(''),
														lf5));
											} else {
												return _Utils_Tuple2(
													elm$core$Result$Err('Ran out of string to process while parsing IncomingMessage'),
													_List_Nil);
											}
										}();
										var myKeyColor = _n30.a;
										var ls5 = _n30.b;
										return _Utils_Tuple2(
											A3(
												elm$core$Result$map2,
												F2(
													function (rff5, rss5) {
														return _Utils_Tuple2(rff5, rss5);
													}),
												myKeyInt,
												myKeyColor),
											ls5);
									})));
					}(
						_Utils_Tuple2(
							elm$core$Result$Err(''),
							rest));
				default:
					break _n1$5;
			}
		} else {
			break _n1$5;
		}
	}
	return _Utils_Tuple2(
		elm$core$Result$Err(
			author$project$Utils$Utils$tConcat(
				_List_fromArray(
					[
						'Incorrect input, could not decode value of type IncomingMessage from string \"',
						author$project$Utils$Utils$tConcat(incomingmessageTxts),
						'\"'
					]))),
		_List_Nil);
};
var author$project$Static$Types$MyKeyboardNetInMsg = function (a) {
	return {$: 'MyKeyboardNetInMsg', a: a};
};
var author$project$Static$Decode$decodeIncomingMessage = F2(
	function (txt, clientNet) {
		return A2(
			author$project$Utils$Utils$rMap,
			author$project$Static$Types$MyKeyboardNetInMsg,
			author$project$MyKeyboardNet$Static$Decode$decodeIncomingMessage(
				_Utils_Tuple2(
					elm$core$Result$Err(''),
					A2(elm$core$String$split, '\u0000', txt))).a);
	});
var author$project$Static$Version$version = 'v1556420140518206';
var author$project$Utils$Utils$newMsg = function (msg) {
	return A2(
		elm$core$Task$perform,
		elm$core$Basics$identity,
		elm$core$Task$succeed(msg));
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$maybeStringToString = function (string) {
	if (string.$ === 'Nothing') {
		return 'Nothing';
	} else {
		var s = string.a;
		return 'Just \"' + (s + '\"');
	}
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$maybeString = function (s) {
	if (s.$ === 'Nothing') {
		return 'Nothing';
	} else {
		var string = s.a;
		return 'Just ' + string;
	}
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$toString = function (mess) {
	switch (mess.$) {
		case 'Startup':
			return '<Startup>';
		case 'PWillOpen':
			var key = mess.a.key;
			var url = mess.a.url;
			var keepAlive = mess.a.keepAlive;
			return 'PWillOpen { key = \"' + (key + ('\", url = \"' + (url + ('\", keepAlive = ' + (keepAlive ? 'True' : ('False' + '}'))))));
		case 'POOpen':
			var key = mess.a.key;
			var url = mess.a.url;
			return 'POOpen { key = \"' + (key + ('\", url = \"' + (url + '\"}')));
		case 'PIConnected':
			var key = mess.a.key;
			var description = mess.a.description;
			return 'PIConnected { key = \"' + (key + ('\", description = \"' + (description + '\"}')));
		case 'PWillSend':
			var key = mess.a.key;
			var message = mess.a.message;
			return 'PWillSend { key = \"' + (key + ('\", message = \"' + (message + '\"}')));
		case 'POSend':
			var key = mess.a.key;
			var message = mess.a.message;
			return 'POSend { key = \"' + (key + ('\", message = \"' + (message + '\"}')));
		case 'PIMessageReceived':
			var key = mess.a.key;
			var message = mess.a.message;
			return 'PIMessageReceived { key = \"' + (key + ('\", message = \"' + (message + '\"}')));
		case 'PWillClose':
			var key = mess.a.key;
			var reason = mess.a.reason;
			return 'PWillClose { key = \"' + (key + ('\", reason = \"' + (reason + '\"}')));
		case 'POClose':
			var key = mess.a.key;
			var reason = mess.a.reason;
			return 'POClose { key = \"' + (key + ('\", reason = \"' + (reason + '\"}')));
		case 'PIClosed':
			var key = mess.a.key;
			var bytesQueued = mess.a.bytesQueued;
			var code = mess.a.code;
			var reason = mess.a.reason;
			var wasClean = mess.a.wasClean;
			return 'PIClosed { key = \"' + (key + ('\", bytesQueued = \"' + (elm$core$String$fromInt(bytesQueued) + ('\", code = \"' + (elm$core$String$fromInt(code) + ('\", reason = \"' + (reason + ('\", wasClean = \"' + (wasClean ? 'True' : ('False' + '\"}'))))))))));
		case 'POBytesQueued':
			var key = mess.a.key;
			return 'POBytesQueued { key = \"' + (key + '\"}');
		case 'PIBytesQueued':
			var key = mess.a.key;
			var bufferedAmount = mess.a.bufferedAmount;
			return 'PIBytesQueued { key = \"' + (key + ('\", bufferedAmount = \"' + (elm$core$String$fromInt(bufferedAmount) + '\"}')));
		case 'PODelay':
			var millis = mess.a.millis;
			var id = mess.a.id;
			return 'PODelay { millis = \"' + (elm$core$String$fromInt(millis) + ('\" id = \"' + (id + '\"}')));
		case 'PIDelayed':
			var id = mess.a.id;
			return 'PIDelayed { id = \"' + (id + '\"}');
		default:
			var key = mess.a.key;
			var code = mess.a.code;
			var description = mess.a.description;
			var name = mess.a.name;
			return 'PIError { key = \"' + (billstclair$elm_websocket_client$PortFunnel$WebSocket$maybeString(key) + ('\" code = \"' + (code + ('\" description = \"' + (description + ('\" name = \"' + (billstclair$elm_websocket_client$PortFunnel$WebSocket$maybeString(name) + '\"}')))))));
	}
};
var billstclair$elm_websocket_client$PortFunnel$WebSocket$errorToString = function (theError) {
	switch (theError.$) {
		case 'SocketAlreadyOpenError':
			var key = theError.a;
			return 'SocketAlreadyOpenError \"' + (key + '\"');
		case 'SocketConnectingError':
			var key = theError.a;
			return 'SocketConnectingError \"' + (key + '\"');
		case 'SocketClosingError':
			var key = theError.a;
			return 'SocketClosingError \"' + (key + '\"');
		case 'SocketNotOpenError':
			var key = theError.a;
			return 'SocketNotOpenError \"' + (key + '\"');
		case 'UnexpectedConnectedError':
			var key = theError.a.key;
			var description = theError.a.description;
			return 'UnexpectedConnectedError\n { key = \"' + (key + ('\", description = \"' + (description + '\" }')));
		case 'UnexpectedMessageError':
			var key = theError.a.key;
			var message = theError.a.message;
			return 'UnexpectedMessageError { key = \"' + (key + ('\", message = \"' + (message + '\" }')));
		case 'LowLevelError':
			var key = theError.a.key;
			var code = theError.a.code;
			var description = theError.a.description;
			var name = theError.a.name;
			return 'LowLevelError { key = \"' + (billstclair$elm_websocket_client$PortFunnel$WebSocket$maybeStringToString(key) + ('\", code = \"' + (code + ('\", description = \"' + (description + ('\", code = \"' + (billstclair$elm_websocket_client$PortFunnel$WebSocket$maybeStringToString(name) + '\" }')))))));
		default:
			var message = theError.a.message;
			return 'InvalidMessageError: ' + billstclair$elm_websocket_client$PortFunnel$WebSocket$toString(message);
	}
};
var elm$core$Set$insert = F2(
	function (key, _n0) {
		var dict = _n0.a;
		return elm$core$Set$Set_elm_builtin(
			A3(elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var elm$core$Set$remove = F2(
	function (key, _n0) {
		var dict = _n0.a;
		return elm$core$Set$Set_elm_builtin(
			A2(elm$core$Dict$remove, key, dict));
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$setAutoReopen = F3(
	function (key, autoReopen, _n0) {
		var state = _n0.a;
		var keys = autoReopen ? A2(elm$core$Set$remove, key, state.noAutoReopenKeys) : A2(elm$core$Set$insert, key, state.noAutoReopenKeys);
		return billstclair$elm_websocket_client$PortFunnel$WebSocket$State(
			_Utils_update(
				state,
				{noAutoReopenKeys: keys}));
	});
var elm$core$Debug$log = _Debug_log;
var elm$html$Html$div = _VirtualDom_node('div');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var author$project$Main$socketHandler = F3(
	function (response, state, mdl) {
		var model = author$project$Main$doIsLoaded(
			_Utils_update(
				mdl,
				{error: elm$core$Maybe$Nothing, state: state}));
		switch (response.$) {
			case 'MessageReceivedResponse':
				var message = response.a.message;
				var _n1 = A2(elm$core$Debug$log, 'message', message);
				switch (_n1) {
					case 'resetfadsfjewi':
						return Janiczek$cmd_extra$Cmd$Extra$withNoCmd(
							_Utils_update(
								model,
								{appModel: author$project$Static$Init$init.a}));
					case 's':
						return A2(author$project$Main$wsSend, author$project$Static$Version$version, model);
					case 'v':
						return Janiczek$cmd_extra$Cmd$Extra$withNoCmd(
							_Utils_update(
								model,
								{appModel: author$project$Static$Init$init.a, connectionState: author$project$Main$Connected}));
					case 'i':
						var fState = model.state;
						return A2(
							Janiczek$cmd_extra$Cmd$Extra$withCmd,
							author$project$Utils$Utils$newMsg(author$project$Main$WSClose),
							_Utils_update(
								model,
								{
									alert: elm$core$Maybe$Just(
										{
											body: _List_fromArray(
												[
													elm$html$Html$text('Client-server version mismatch. If you are a user, please contact the creator of the app. Client and server versions must match in order to communicate. If you are a server admin, fix this by making sure the newest client and server versions are compiled. You might have to refresh this page.'),
													A2(
													elm$html$Html$div,
													_List_Nil,
													_List_fromArray(
														[
															elm$html$Html$text('(client version: ' + (author$project$Static$Version$version + ')'))
														]))
												]),
											name: 'Well, this is embarassing.... :('
										}),
									connectionState: author$project$Main$ConnectionClosed,
									state: _Utils_update(
										fState,
										{
											socket: A3(billstclair$elm_websocket_client$PortFunnel$WebSocket$setAutoReopen, model.key, false, fState.socket)
										})
								}));
					default:
						var rincomingMsg = A2(author$project$Static$Decode$decodeIncomingMessage, message, model.appModel);
						var newCmd = function () {
							var _n2 = A2(elm$core$Debug$log, 'decoded message: ', rincomingMsg);
							if (_n2.$ === 'Ok') {
								var incomingMsg = _n2.a;
								return A2(
									elm$core$Task$perform,
									author$project$Main$IncomingMsg,
									elm$core$Task$succeed(incomingMsg));
							} else {
								return elm$core$Platform$Cmd$none;
							}
						}();
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									log: A2(elm$core$List$cons, 'Received \"' + (message + '\"'), model.log)
								}),
							newCmd);
				}
			case 'ConnectedResponse':
				return Janiczek$cmd_extra$Cmd$Extra$withNoCmd(
					_Utils_update(
						model,
						{
							log: A2(elm$core$List$cons, 'Connected', model.log)
						}));
			case 'ClosedResponse':
				var code = response.a.code;
				var wasClean = response.a.wasClean;
				var expected = response.a.expected;
				return Janiczek$cmd_extra$Cmd$Extra$withNoCmd(
					_Utils_update(
						model,
						{
							connectionState: author$project$Main$ConnectionClosed,
							log: A2(
								elm$core$List$cons,
								'Closed, ' + A3(author$project$Main$closedString, code, wasClean, expected),
								model.log)
						}));
			case 'ErrorResponse':
				var error = response.a;
				return Janiczek$cmd_extra$Cmd$Extra$withNoCmd(
					_Utils_update(
						model,
						{
							log: A2(
								elm$core$List$cons,
								billstclair$elm_websocket_client$PortFunnel$WebSocket$errorToString(error),
								model.log)
						}));
			default:
				return Janiczek$cmd_extra$Cmd$Extra$withNoCmd(model);
		}
	});
var billstclair$elm_port_funnel$PortFunnel$FunnelSpec = F4(
	function (accessors, moduleDesc, commander, handler) {
		return {accessors: accessors, commander: commander, handler: handler, moduleDesc: moduleDesc};
	});
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$commander = F2(
	function (gfPort, response) {
		switch (response.$) {
			case 'CmdResponse':
				var message = response.a;
				return gfPort(
					billstclair$elm_websocket_client$PortFunnel$WebSocket$encode(message));
			case 'ListResponse':
				var responses = response.a;
				return elm$core$Platform$Cmd$batch(
					A2(
						elm$core$List$map,
						A2(elm$core$Basics$composeR, billstclair$elm_websocket_client$PortFunnel$WebSocket$encode, gfPort),
						A3(
							elm$core$List$foldl,
							F2(
								function (rsp, res) {
									if (rsp.$ === 'CmdResponse') {
										var message = rsp.a;
										return A2(elm$core$List$cons, message, res);
									} else {
										return res;
									}
								}),
							_List_Nil,
							responses)));
			default:
				return elm$core$Platform$Cmd$none;
		}
	});
var author$project$Main$funnels = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			billstclair$elm_websocket_client$PortFunnel$WebSocket$moduleName,
			author$project$Main$SocketFunnel(
				A4(billstclair$elm_port_funnel$PortFunnel$FunnelSpec, author$project$Main$socketAccessors, billstclair$elm_websocket_client$PortFunnel$WebSocket$moduleDesc, billstclair$elm_websocket_client$PortFunnel$WebSocket$commander, author$project$Main$socketHandler)))
		]));
var elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var elm$core$Basics$modBy = _Basics_modBy;
var elm$core$Char$fromCode = _Char_fromCode;
var elm$core$String$cons = _String_cons;
var elm$core$String$fromChar = function (_char) {
	return A2(elm$core$String$cons, _char, '');
};
var author$project$Utils$Utils$encodeInt = F3(
	function (low, high, n) {
		var encodeInt_ = function (nn) {
			var b = 64;
			var m = (nn / b) | 0;
			var r = A2(elm$core$Basics$modBy, b, nn);
			return (nn < 64) ? elm$core$String$fromChar(
				elm$core$Char$fromCode(r + 48)) : _Utils_ap(
				elm$core$String$fromChar(
					elm$core$Char$fromCode(r + 48)),
				encodeInt_(m));
		};
		return encodeInt_(
			A3(elm$core$Basics$clamp, low, high, n) - low);
	});
var author$project$Utils$Utils$lFoldl = elm$core$List$foldl;
var author$project$Utils$Utils$lLength = elm$core$List$length;
var author$project$Utils$Utils$lRange = elm$core$List$range;
var author$project$Utils$Utils$pFst = elm$core$Tuple$first;
var author$project$MyKeyboardNet$Static$Encode$encodeOutgoingTransition = function (outgoingtransition) {
	switch (outgoingtransition.$) {
		case 'TBoardKeyPressed':
			var clientKeyColorDict = outgoingtransition.a;
			var myColor = outgoingtransition.b;
			var myKeyInt = outgoingtransition.c;
			var myKeyIntTxt = A3(author$project$Utils$Utils$encodeInt, 0, 62, myKeyInt);
			var myColorTxt = A3(author$project$Utils$Utils$encodeInt, 0, 24, myColor);
			var clientKeyColorDictAsList = elm$core$Dict$toList(clientKeyColorDict);
			var clientKeyColorDictAsListTxt = function () {
				var encodeclientKeyColorDictAsList_ = F2(
					function (_n3, _n4) {
						var str0 = _n4.a;
						var clientKeyColorDictAsListList = _n4.b;
						if (clientKeyColorDictAsListList.b) {
							var keyValuePairs = clientKeyColorDictAsListList.a;
							var rest = clientKeyColorDictAsListList.b;
							var keyValuePairsTxt = function () {
								var _n2 = keyValuePairs;
								var fst6 = _n2.a;
								var snd6 = _n2.b;
								var fst6Txt = A3(author$project$Utils$Utils$encodeInt, 0, 62, fst6);
								var snd6Txt = A3(author$project$Utils$Utils$encodeInt, 0, 24, snd6);
								return author$project$Utils$Utils$tConcat(
									_List_fromArray(
										[fst6Txt, '\u0000', snd6Txt]));
							}();
							return _Utils_Tuple2(
								author$project$Utils$Utils$tConcat(
									_List_fromArray(
										[str0, '\u0000', keyValuePairsTxt])),
								rest);
						} else {
							return _Utils_Tuple2(str0, clientKeyColorDictAsListList);
						}
					});
				var encodeclientKeyColorDictAsList = function (ls) {
					return A3(
						author$project$Utils$Utils$lFoldl,
						encodeclientKeyColorDictAsList_,
						_Utils_Tuple2('', ls),
						A2(
							author$project$Utils$Utils$lRange,
							0,
							author$project$Utils$Utils$lLength(clientKeyColorDictAsList)));
				};
				return author$project$Utils$Utils$tConcat(
					_List_fromArray(
						[
							A3(
							author$project$Utils$Utils$encodeInt,
							0,
							16777216,
							author$project$Utils$Utils$lLength(clientKeyColorDictAsList)),
							author$project$Utils$Utils$pFst(
							encodeclientKeyColorDictAsList(clientKeyColorDictAsList))
						]));
			}();
			return author$project$Utils$Utils$tConcat(
				_List_fromArray(
					['TBoardKeyPressed\u0000', clientKeyColorDictAsListTxt, '\u0000', myColorTxt, '\u0000', myKeyIntTxt]));
		case 'TMakeDark':
			var myKeyInt = outgoingtransition.a;
			var myKeyIntTxt = A3(author$project$Utils$Utils$encodeInt, 0, 62, myKeyInt);
			return author$project$Utils$Utils$tConcat(
				_List_fromArray(
					['TMakeDark\u0000', myKeyIntTxt]));
		case 'TMakeLight':
			var myKeyInt = outgoingtransition.a;
			var myKeyIntTxt = A3(author$project$Utils$Utils$encodeInt, 0, 62, myKeyInt);
			return author$project$Utils$Utils$tConcat(
				_List_fromArray(
					['TMakeLight\u0000', myKeyIntTxt]));
		case 'TRollRandomNum':
			return author$project$Utils$Utils$tConcat(
				_List_fromArray(
					['TRollRandomNum']));
		default:
			var clientKeyColorDict = outgoingtransition.a;
			var playerCounter = outgoingtransition.b;
			var playerCounterTxt = A3(author$project$Utils$Utils$encodeInt, 0, 100, playerCounter);
			var clientKeyColorDictAsList = elm$core$Dict$toList(clientKeyColorDict);
			var clientKeyColorDictAsListTxt = function () {
				var encodeclientKeyColorDictAsList_ = F2(
					function (_n7, _n8) {
						var str0 = _n8.a;
						var clientKeyColorDictAsListList = _n8.b;
						if (clientKeyColorDictAsListList.b) {
							var keyValuePairs = clientKeyColorDictAsListList.a;
							var rest = clientKeyColorDictAsListList.b;
							var keyValuePairsTxt = function () {
								var _n6 = keyValuePairs;
								var fst6 = _n6.a;
								var snd6 = _n6.b;
								var fst6Txt = A3(author$project$Utils$Utils$encodeInt, 0, 62, fst6);
								var snd6Txt = A3(author$project$Utils$Utils$encodeInt, 0, 24, snd6);
								return author$project$Utils$Utils$tConcat(
									_List_fromArray(
										[fst6Txt, '\u0000', snd6Txt]));
							}();
							return _Utils_Tuple2(
								author$project$Utils$Utils$tConcat(
									_List_fromArray(
										[str0, '\u0000', keyValuePairsTxt])),
								rest);
						} else {
							return _Utils_Tuple2(str0, clientKeyColorDictAsListList);
						}
					});
				var encodeclientKeyColorDictAsList = function (ls) {
					return A3(
						author$project$Utils$Utils$lFoldl,
						encodeclientKeyColorDictAsList_,
						_Utils_Tuple2('', ls),
						A2(
							author$project$Utils$Utils$lRange,
							0,
							author$project$Utils$Utils$lLength(clientKeyColorDictAsList)));
				};
				return author$project$Utils$Utils$tConcat(
					_List_fromArray(
						[
							A3(
							author$project$Utils$Utils$encodeInt,
							0,
							16777216,
							author$project$Utils$Utils$lLength(clientKeyColorDictAsList)),
							author$project$Utils$Utils$pFst(
							encodeclientKeyColorDictAsList(clientKeyColorDictAsList))
						]));
			}();
			return author$project$Utils$Utils$tConcat(
				_List_fromArray(
					['TInfoUpdating\u0000', clientKeyColorDictAsListTxt, '\u0000', playerCounterTxt]));
	}
};
var author$project$MyKeyboardNet$Static$Encode$encodeTransition = function (trans) {
	if (trans.$ === 'Internal') {
		return elm$core$Maybe$Nothing;
	} else {
		var ext = trans.a;
		return elm$core$Maybe$Just(
			author$project$MyKeyboardNet$Static$Encode$encodeOutgoingTransition(ext));
	}
};
var author$project$Static$Encode$encodeTransition = function (netTrans) {
	var msg = netTrans.a;
	return author$project$MyKeyboardNet$Static$Encode$encodeTransition(msg);
};
var author$project$MyKeyboardNet$Static$Types$MNoOp = {$: 'MNoOp'};
var author$project$MyKeyboardNet$Static$Types$MRandomColorNumber = function (a) {
	return {$: 'MRandomColorNumber', a: a};
};
var author$project$Utils$Utils$Left = function (a) {
	return {$: 'Left', a: a};
};
var author$project$Utils$Utils$Right = function (a) {
	return {$: 'Right', a: a};
};
var author$project$MyKeyboardNet$Static$Update$outgoingToIncoming = function (trans) {
	if (trans.$ === 'Internal') {
		if (trans.a.$ === 'TNoOp') {
			var _n1 = trans.a;
			return author$project$Utils$Utils$Left(author$project$MyKeyboardNet$Static$Types$MNoOp);
		} else {
			var myColor = trans.a.a;
			return author$project$Utils$Utils$Left(
				author$project$MyKeyboardNet$Static$Types$MRandomColorNumber(myColor));
		}
	} else {
		var outT = trans.a;
		return author$project$Utils$Utils$Right(
			author$project$MyKeyboardNet$Static$Types$External(outT));
	}
};
var author$project$Utils$Utils$mapBoth = F3(
	function (fa, fb, eith) {
		if (eith.$ === 'Left') {
			var a = eith.a;
			return author$project$Utils$Utils$Left(
				fa(a));
		} else {
			var b = eith.a;
			return author$project$Utils$Utils$Right(
				fb(b));
		}
	});
var author$project$Static$Update$outgoingToIncoming = function (trans) {
	var tr = trans.a;
	return A3(
		author$project$Utils$Utils$mapBoth,
		author$project$Static$Types$MyKeyboardNetInMsg,
		author$project$Static$Types$MyKeyboardNetTrans,
		author$project$MyKeyboardNet$Static$Update$outgoingToIncoming(tr));
};
var author$project$MyKeyboardNet$Static$Types$BoardKeyUnpressed = F3(
	function (a, b, c) {
		return {$: 'BoardKeyUnpressed', a: a, b: b, c: c};
	});
var author$project$MyKeyboardNet$Static$Types$InfoUpdated = F2(
	function (a, b) {
		return {$: 'InfoUpdated', a: a, b: b};
	});
var author$project$MyKeyboardNet$Static$Types$MadeKeyDark = function (a) {
	return {$: 'MadeKeyDark', a: a};
};
var author$project$MyKeyboardNet$Static$Types$MadeKeyLight = function (a) {
	return {$: 'MadeKeyLight', a: a};
};
var author$project$MyKeyboardNet$Static$Types$NoOp = {$: 'NoOp'};
var author$project$MyKeyboardNet$Static$Types$RandomColorNumber = function (a) {
	return {$: 'RandomColorNumber', a: a};
};
var author$project$MyKeyboardNet$Static$Types$RandomNumRolled = {$: 'RandomNumRolled'};
var author$project$MyKeyboardNet$Static$Wrappers$unwrapNoOp = function (_n0) {
	return author$project$MyKeyboardNet$Static$Types$TNoOp;
};
var author$project$MyKeyboardNet$Static$Wrappers$unwrapRandomColorNumber = function (_n0) {
	var myColor = _n0.a;
	return author$project$MyKeyboardNet$Static$Types$TRandomColorNumber(myColor);
};
var author$project$MyKeyboardNet$Sounds$play = _Platform_outgoingPort('play', elm$core$Basics$identity);
var author$project$MyKeyboardNet$Sounds$playSound = function (url) {
	return author$project$MyKeyboardNet$Sounds$play(
		elm$json$Json$Encode$string(url));
};
var author$project$MyKeyboardNet$Update$updateKeyboardBoardKeyUnpressedKeyboard = F3(
	function (fsp, _n0, _n1) {
		var clientKeyColorDict = _n0.a;
		var myColor = _n0.b;
		var myKeyInt = _n0.c;
		var cKSD = _n1.a;
		var mC = _n1.b;
		var cKCD = _n1.c;
		var playerCounter = _n1.d;
		var keyboard = A4(author$project$MyKeyboardNet$Static$Types$Keyboard, cKSD, mC, clientKeyColorDict, playerCounter);
		var checkState = function () {
			var _n3 = A2(elm$core$Dict$get, myKeyInt, cKSD);
			if (_n3.$ === 'Just') {
				var myBool = _n3.a;
				return !myBool;
			} else {
				return !true;
			}
		}();
		switch (myKeyInt) {
			case 0:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a49.mp3'));
			case 1:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a50.mp3'));
			case 2:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a51.mp3'));
			case 3:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a52.mp3'));
			case 4:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a53.mp3'));
			case 5:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a54.mp3'));
			case 6:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a55.mp3'));
			case 7:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a56.mp3'));
			case 8:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a57.mp3'));
			case 9:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a48.mp3'));
			case 10:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a81.mp3'));
			case 11:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a87.mp3'));
			case 12:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a69.mp3'));
			case 13:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a82.mp3'));
			case 14:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a84.mp3'));
			case 15:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a89.mp3'));
			case 16:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a85.mp3'));
			case 17:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a73.mp3'));
			case 18:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a79.mp3'));
			case 19:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a80.mp3'));
			case 20:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a65.mp3'));
			case 21:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a83.mp3'));
			case 22:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a68.mp3'));
			case 23:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a70.mp3'));
			case 24:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a71.mp3'));
			case 25:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a72.mp3'));
			case 26:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a74.mp3'));
			case 27:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a75.mp3'));
			case 28:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a76.mp3'));
			case 29:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a90.mp3'));
			case 30:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a88.mp3'));
			case 31:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a67.mp3'));
			case 32:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a86.mp3'));
			case 33:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a66.mp3'));
			case 34:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a78.mp3'));
			case 35:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/a77.mp3'));
			case 36:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b49.mp3'));
			case 37:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b50.mp3'));
			case 38:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b52.mp3'));
			case 39:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b53.mp3'));
			case 40:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b54.mp3'));
			case 41:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b56.mp3'));
			case 42:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b57.mp3'));
			case 43:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b81.mp3'));
			case 44:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b87.mp3'));
			case 45:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b69.mp3'));
			case 46:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b84.mp3'));
			case 47:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b89.mp3'));
			case 48:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b73.mp3'));
			case 49:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b79.mp3'));
			case 50:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b80.mp3'));
			case 51:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b83.mp3'));
			case 52:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b68.mp3'));
			case 53:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b71.mp3'));
			case 54:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b72.mp3'));
			case 55:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b74.mp3'));
			case 56:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b76.mp3'));
			case 57:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b90.mp3'));
			case 58:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b67.mp3'));
			case 59:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b86.mp3'));
			case 60:
				return _Utils_Tuple2(
					keyboard,
					checkState ? elm$core$Platform$Cmd$none : author$project$MyKeyboardNet$Sounds$playSound('./piano/b66.mp3'));
			default:
				var otherwise = myKeyInt;
				return _Utils_Tuple2(keyboard, elm$core$Platform$Cmd$none);
		}
	});
var author$project$MyKeyboardNet$Update$updateKeyboardInfoUpdatedKeyboard = F3(
	function (fsp, _n0, _n1) {
		var cKCD = _n0.a;
		var pC = _n0.b;
		var clientKeyStateDict = _n1.a;
		var someCol = _n1.b;
		var a = _n1.c;
		var b = _n1.d;
		return A4(author$project$MyKeyboardNet$Static$Types$Keyboard, clientKeyStateDict, someCol, cKCD, pC);
	});
var elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _n0 = alter(
			A2(elm$core$Dict$get, targetKey, dictionary));
		if (_n0.$ === 'Just') {
			var value = _n0.a;
			return A3(elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2(elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var author$project$MyKeyboardNet$Update$updateKeyboardMadeKeyDarkKeyboard = F3(
	function (fsp, _n0, _n1) {
		var myKeyInt = _n0.a;
		var clientKeyStateDict = _n1.a;
		var myColor = _n1.b;
		var clientKeyColorDict = _n1.c;
		var playerCounter = _n1.d;
		var myDarkFunc = function (someBool) {
			if ((someBool.$ === 'Just') && (!someBool.a)) {
				return elm$core$Maybe$Just(true);
			} else {
				var otherwise = someBool;
				return someBool;
			}
		};
		var myDict = A3(elm$core$Dict$update, myKeyInt, myDarkFunc, clientKeyStateDict);
		return A4(author$project$MyKeyboardNet$Static$Types$Keyboard, myDict, myColor, clientKeyColorDict, playerCounter);
	});
var author$project$MyKeyboardNet$Update$updateKeyboardMadeKeyLightKeyboard = F3(
	function (fsp, _n0, _n1) {
		var myKeyInt = _n0.a;
		var clientKeyStateDict = _n1.a;
		var myColor = _n1.b;
		var cKCD = _n1.c;
		var playerCounter = _n1.d;
		var myLightFunc = function (someBool) {
			if ((someBool.$ === 'Just') && someBool.a) {
				return elm$core$Maybe$Just(false);
			} else {
				var otherwise = someBool;
				return someBool;
			}
		};
		var myDict = A3(elm$core$Dict$update, myKeyInt, myLightFunc, clientKeyStateDict);
		return A4(author$project$MyKeyboardNet$Static$Types$Keyboard, myDict, myColor, cKCD, playerCounter);
	});
var elm$random$Random$Generate = function (a) {
	return {$: 'Generate', a: a};
};
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 'Seed', a: a, b: b};
	});
var elm$random$Random$next = function (_n0) {
	var state0 = _n0.a;
	var incr = _n0.b;
	return A2(elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var elm$random$Random$initialSeed = function (x) {
	var _n0 = elm$random$Random$next(
		A2(elm$random$Random$Seed, 0, 1013904223));
	var state1 = _n0.a;
	var incr = _n0.b;
	var state2 = (state1 + x) >>> 0;
	return elm$random$Random$next(
		A2(elm$random$Random$Seed, state2, incr));
};
var elm$time$Time$posixToMillis = function (_n0) {
	var millis = _n0.a;
	return millis;
};
var elm$random$Random$init = A2(
	elm$core$Task$andThen,
	function (time) {
		return elm$core$Task$succeed(
			elm$random$Random$initialSeed(
				elm$time$Time$posixToMillis(time)));
	},
	elm$time$Time$now);
var elm$random$Random$step = F2(
	function (_n0, seed) {
		var generator = _n0.a;
		return generator(seed);
	});
var elm$random$Random$onEffects = F3(
	function (router, commands, seed) {
		if (!commands.b) {
			return elm$core$Task$succeed(seed);
		} else {
			var generator = commands.a.a;
			var rest = commands.b;
			var _n1 = A2(elm$random$Random$step, generator, seed);
			var value = _n1.a;
			var newSeed = _n1.b;
			return A2(
				elm$core$Task$andThen,
				function (_n2) {
					return A3(elm$random$Random$onEffects, router, rest, newSeed);
				},
				A2(elm$core$Platform$sendToApp, router, value));
		}
	});
var elm$random$Random$onSelfMsg = F3(
	function (_n0, _n1, seed) {
		return elm$core$Task$succeed(seed);
	});
var elm$random$Random$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var elm$random$Random$map = F2(
	function (func, _n0) {
		var genA = _n0.a;
		return elm$random$Random$Generator(
			function (seed0) {
				var _n1 = genA(seed0);
				var a = _n1.a;
				var seed1 = _n1.b;
				return _Utils_Tuple2(
					func(a),
					seed1);
			});
	});
var elm$random$Random$cmdMap = F2(
	function (func, _n0) {
		var generator = _n0.a;
		return elm$random$Random$Generate(
			A2(elm$random$Random$map, func, generator));
	});
_Platform_effectManagers['Random'] = _Platform_createManager(elm$random$Random$init, elm$random$Random$onEffects, elm$random$Random$onSelfMsg, elm$random$Random$cmdMap);
var elm$random$Random$command = _Platform_leaf('Random');
var elm$random$Random$generate = F2(
	function (tagger, generator) {
		return elm$random$Random$command(
			elm$random$Random$Generate(
				A2(elm$random$Random$map, tagger, generator)));
	});
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$core$Bitwise$and = _Bitwise_and;
var elm$core$Bitwise$xor = _Bitwise_xor;
var elm$random$Random$peel = function (_n0) {
	var state = _n0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var elm$random$Random$int = F2(
	function (a, b) {
		return elm$random$Random$Generator(
			function (seed0) {
				var _n0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
				var lo = _n0.a;
				var hi = _n0.b;
				var range = (hi - lo) + 1;
				if (!((range - 1) & range)) {
					return _Utils_Tuple2(
						(((range - 1) & elm$random$Random$peel(seed0)) >>> 0) + lo,
						elm$random$Random$next(seed0));
				} else {
					var threshhold = (((-range) >>> 0) % range) >>> 0;
					var accountForBias = function (seed) {
						accountForBias:
						while (true) {
							var x = elm$random$Random$peel(seed);
							var seedN = elm$random$Random$next(seed);
							if (_Utils_cmp(x, threshhold) < 0) {
								var $temp$seed = seedN;
								seed = $temp$seed;
								continue accountForBias;
							} else {
								return _Utils_Tuple2((x % range) + lo, seedN);
							}
						}
					};
					return accountForBias(seed0);
				}
			});
	});
var author$project$MyKeyboardNet$Update$updateKeyboardRandomNumRolledKeyboard = F3(
	function (fsp, _n0, keyboard) {
		return _Utils_Tuple2(
			keyboard,
			A2(
				elm$random$Random$generate,
				author$project$MyKeyboardNet$Static$Types$RandomColorNumber,
				A2(elm$random$Random$int, 0, 24)));
	});
var author$project$MyKeyboardNet$Update$updateNoOpKeyboard = F3(
	function (fsp, _n0, keyboard) {
		return keyboard;
	});
var author$project$MyKeyboardNet$Update$updateRandomColorNumberKeyboard = F3(
	function (fsp, _n0, _n1) {
		var myColor = _n0.a;
		var clientKeyStateDict = _n1.a;
		var someCol = _n1.b;
		var cKCD = _n1.c;
		var playerCounter = _n1.d;
		return A4(author$project$MyKeyboardNet$Static$Types$Keyboard, clientKeyStateDict, myColor, cKCD, playerCounter);
	});
var author$project$MyKeyboardNet$Static$Update$update = F3(
	function (fsp, trans, state) {
		var _n0 = _Utils_Tuple2(trans, state);
		switch (_n0.a.$) {
			case 'MBoardKeyUnpressed':
				var _n1 = _n0.a;
				var clientKeyColorDict = _n1.a;
				var myColor = _n1.b;
				var myKeyInt = _n1.c;
				var st = _n0.b.a;
				var _n2 = A3(
					author$project$MyKeyboardNet$Update$updateKeyboardBoardKeyUnpressedKeyboard,
					fsp,
					A3(author$project$MyKeyboardNet$Static$Types$BoardKeyUnpressed, clientKeyColorDict, myColor, myKeyInt),
					st);
				var newModel = _n2.a;
				var cmd = _n2.b;
				return _Utils_Tuple2(
					author$project$MyKeyboardNet$Static$Types$SKeyboard(newModel),
					A2(
						elm$core$Platform$Cmd$map,
						A2(elm$core$Basics$composeL, author$project$MyKeyboardNet$Static$Types$Internal, author$project$MyKeyboardNet$Static$Wrappers$unwrapNoOp),
						cmd));
			case 'MNoOp':
				var _n3 = _n0.a;
				var st = _n0.b.a;
				return _Utils_Tuple2(
					author$project$MyKeyboardNet$Static$Types$SKeyboard(
						A3(author$project$MyKeyboardNet$Update$updateNoOpKeyboard, fsp, author$project$MyKeyboardNet$Static$Types$NoOp, st)),
					elm$core$Platform$Cmd$none);
			case 'MMadeKeyDark':
				var myKeyInt = _n0.a.a;
				var st = _n0.b.a;
				return _Utils_Tuple2(
					author$project$MyKeyboardNet$Static$Types$SKeyboard(
						A3(
							author$project$MyKeyboardNet$Update$updateKeyboardMadeKeyDarkKeyboard,
							fsp,
							author$project$MyKeyboardNet$Static$Types$MadeKeyDark(myKeyInt),
							st)),
					elm$core$Platform$Cmd$none);
			case 'MMadeKeyLight':
				var myKeyInt = _n0.a.a;
				var st = _n0.b.a;
				return _Utils_Tuple2(
					author$project$MyKeyboardNet$Static$Types$SKeyboard(
						A3(
							author$project$MyKeyboardNet$Update$updateKeyboardMadeKeyLightKeyboard,
							fsp,
							author$project$MyKeyboardNet$Static$Types$MadeKeyLight(myKeyInt),
							st)),
					elm$core$Platform$Cmd$none);
			case 'MRandomColorNumber':
				var myColor = _n0.a.a;
				var st = _n0.b.a;
				return _Utils_Tuple2(
					author$project$MyKeyboardNet$Static$Types$SKeyboard(
						A3(
							author$project$MyKeyboardNet$Update$updateRandomColorNumberKeyboard,
							fsp,
							author$project$MyKeyboardNet$Static$Types$RandomColorNumber(myColor),
							st)),
					elm$core$Platform$Cmd$none);
			case 'MRandomNumRolled':
				var _n4 = _n0.a;
				var st = _n0.b.a;
				var _n5 = A3(author$project$MyKeyboardNet$Update$updateKeyboardRandomNumRolledKeyboard, fsp, author$project$MyKeyboardNet$Static$Types$RandomNumRolled, st);
				var newModel = _n5.a;
				var cmd = _n5.b;
				return _Utils_Tuple2(
					author$project$MyKeyboardNet$Static$Types$SKeyboard(newModel),
					A2(
						elm$core$Platform$Cmd$map,
						A2(elm$core$Basics$composeL, author$project$MyKeyboardNet$Static$Types$Internal, author$project$MyKeyboardNet$Static$Wrappers$unwrapRandomColorNumber),
						cmd));
			default:
				var _n6 = _n0.a;
				var clientKeyColorDict = _n6.a;
				var playerCounter = _n6.b;
				var st = _n0.b.a;
				return _Utils_Tuple2(
					author$project$MyKeyboardNet$Static$Types$SKeyboard(
						A3(
							author$project$MyKeyboardNet$Update$updateKeyboardInfoUpdatedKeyboard,
							fsp,
							A2(author$project$MyKeyboardNet$Static$Types$InfoUpdated, clientKeyColorDict, playerCounter),
							st)),
					elm$core$Platform$Cmd$none);
		}
	});
var author$project$Static$Update$update = F3(
	function (tld, netInMsg, state) {
		var _n0 = _Utils_Tuple2(netInMsg, state);
		var msg = _n0.a.a;
		var m = _n0.b.a;
		var _n1 = A3(author$project$MyKeyboardNet$Static$Update$update, tld, msg, m);
		var newMyKeyboardNetState = _n1.a;
		var mcmd = _n1.b;
		var newClientState = author$project$Static$Types$MyKeyboardNet(newMyKeyboardNetState);
		return _Utils_Tuple2(
			newClientState,
			A2(elm$core$Platform$Cmd$map, author$project$Static$Types$MyKeyboardNetTrans, mcmd));
	});
var billstclair$elm_port_funnel$PortFunnel$decodeValue = F2(
	function (decoder, value) {
		var _n0 = A2(elm$json$Json$Decode$decodeValue, decoder, value);
		if (_n0.$ === 'Ok') {
			var res = _n0.a;
			return elm$core$Result$Ok(res);
		} else {
			var err = _n0.a;
			return elm$core$Result$Err(
				elm$json$Json$Decode$errorToString(err));
		}
	});
var elm$json$Json$Decode$map3 = _Json_map3;
var billstclair$elm_port_funnel$PortFunnel$genericMessageDecoder = A4(
	elm$json$Json$Decode$map3,
	billstclair$elm_port_funnel$PortFunnel$GenericMessage,
	A2(elm$json$Json$Decode$field, 'module', elm$json$Json$Decode$string),
	A2(elm$json$Json$Decode$field, 'tag', elm$json$Json$Decode$string),
	A2(elm$json$Json$Decode$field, 'args', elm$json$Json$Decode$value));
var billstclair$elm_port_funnel$PortFunnel$decodeGenericMessage = function (value) {
	return A2(billstclair$elm_port_funnel$PortFunnel$decodeValue, billstclair$elm_port_funnel$PortFunnel$genericMessageDecoder, value);
};
var billstclair$elm_port_funnel$PortFunnel$processValue = F5(
	function (funnels, appTrampoline, value, state, model) {
		var _n0 = billstclair$elm_port_funnel$PortFunnel$decodeGenericMessage(value);
		if (_n0.$ === 'Err') {
			var error = _n0.a;
			return elm$core$Result$Err(error);
		} else {
			var genericMessage = _n0.a;
			var moduleName = genericMessage.moduleName;
			var _n1 = A2(elm$core$Dict$get, moduleName, funnels);
			if (_n1.$ === 'Just') {
				var funnel = _n1.a;
				var _n2 = A4(appTrampoline, genericMessage, funnel, state, model);
				if (_n2.$ === 'Err') {
					var error = _n2.a;
					return elm$core$Result$Err(error);
				} else {
					var _n3 = _n2.a;
					var model2 = _n3.a;
					var cmd = _n3.b;
					return elm$core$Result$Ok(
						_Utils_Tuple2(model2, cmd));
				}
			} else {
				return elm$core$Result$Err('Unknown moduleName: ' + moduleName);
			}
		}
	});
var billstclair$elm_websocket_client$PortFunnel$WebSocket$makeClose = function (key) {
	return billstclair$elm_websocket_client$PortFunnel$WebSocket$InternalMessage$PWillClose(
		{key: key, reason: 'user request'});
};
var author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'WSConnect':
				return A2(
					Janiczek$cmd_extra$Cmd$Extra$withCmd,
					A2(
						author$project$Main$send,
						model,
						A2(billstclair$elm_websocket_client$PortFunnel$WebSocket$makeOpenWithKey, model.key, model.url)),
					model);
			case 'WSSend':
				var m = msg.a;
				return A2(
					author$project$Main$wsSend,
					m,
					_Utils_update(
						model,
						{
							log: A2(elm$core$List$cons, 'Sending \"' + (m + '\"'), model.log)
						}));
			case 'WSClose':
				return A2(
					Janiczek$cmd_extra$Cmd$Extra$withCmd,
					A2(
						author$project$Main$send,
						model,
						billstclair$elm_websocket_client$PortFunnel$WebSocket$makeClose(model.key)),
					_Utils_update(
						model,
						{
							log: A2(elm$core$List$cons, 'Closing', model.log)
						}));
			case 'WSProcess':
				var value = msg.a;
				var _n1 = A5(billstclair$elm_port_funnel$PortFunnel$processValue, author$project$Main$funnels, author$project$Main$appTrampoline, value, model.state, model);
				if (_n1.$ === 'Err') {
					var error = _n1.a;
					return Janiczek$cmd_extra$Cmd$Extra$withNoCmd(
						_Utils_update(
							model,
							{
								error: elm$core$Maybe$Just(error)
							}));
				} else {
					var res = _n1.a;
					return res;
				}
			case 'NewUrlRequest':
				var urlReq = msg.a;
				return Janiczek$cmd_extra$Cmd$Extra$withNoCmd(model);
			case 'NewUrlChange':
				var url = msg.a;
				return Janiczek$cmd_extra$Cmd$Extra$withNoCmd(model);
			case 'IncomingMsg':
				var incomingMsg = msg.a;
				var _n2 = A3(author$project$Static$Update$update, _Utils_Tuple0, incomingMsg, model.appModel);
				var newAppModel = _n2.a;
				var mCmd = _n2.b;
				return A2(
					Janiczek$cmd_extra$Cmd$Extra$withCmd,
					A2(
						elm$core$Platform$Cmd$map,
						function (out) {
							var _n3 = author$project$Static$Update$outgoingToIncoming(out);
							if (_n3.$ === 'Left') {
								var cmd = _n3.a;
								return author$project$Main$IncomingMsg(cmd);
							} else {
								var outT = _n3.a;
								return author$project$Main$OutgoingTrans(outT);
							}
						},
						mCmd),
					_Utils_update(
						model,
						{appModel: newAppModel}));
			case 'OutgoingTrans':
				var trans = msg.a;
				var respTxt = author$project$Static$Encode$encodeTransition(trans);
				var newTrans = author$project$Static$Update$outgoingToIncoming(trans);
				var _n4 = _Utils_Tuple2(respTxt, newTrans);
				_n4$2:
				while (true) {
					if (_n4.a.$ === 'Just') {
						if (_n4.b.$ === 'Right') {
							var str = _n4.a.a;
							return A2(author$project$Main$wsSend, str, model);
						} else {
							break _n4$2;
						}
					} else {
						if (_n4.b.$ === 'Left') {
							var _n5 = _n4.a;
							var nt = _n4.b.a;
							return A2(
								Janiczek$cmd_extra$Cmd$Extra$withCmd,
								A2(
									elm$core$Platform$Cmd$map,
									author$project$Main$IncomingMsg,
									author$project$Utils$Utils$newMsg(nt)),
								model);
						} else {
							break _n4$2;
						}
					}
				}
				return Janiczek$cmd_extra$Cmd$Extra$withNoCmd(model);
			default:
				return Janiczek$cmd_extra$Cmd$Extra$withNoCmd(model);
		}
	});
var author$project$Main$WSConnect = {$: 'WSConnect'};
var author$project$Main$NoOp = {$: 'NoOp'};
var rundis$elm_bootstrap$Bootstrap$Modal$Body = function (a) {
	return {$: 'Body', a: a};
};
var rundis$elm_bootstrap$Bootstrap$Modal$Config = function (a) {
	return {$: 'Config', a: a};
};
var rundis$elm_bootstrap$Bootstrap$Modal$body = F3(
	function (attributes, children, _n0) {
		var conf = _n0.a;
		return rundis$elm_bootstrap$Bootstrap$Modal$Config(
			_Utils_update(
				conf,
				{
					body: elm$core$Maybe$Just(
						rundis$elm_bootstrap$Bootstrap$Modal$Body(
							{attributes: attributes, children: children}))
				}));
	});
var rundis$elm_bootstrap$Bootstrap$Modal$config = function (closeMsg) {
	return rundis$elm_bootstrap$Bootstrap$Modal$Config(
		{
			body: elm$core$Maybe$Nothing,
			closeMsg: closeMsg,
			footer: elm$core$Maybe$Nothing,
			header: elm$core$Maybe$Nothing,
			options: {centered: true, hideOnBackdropClick: true, modalSize: elm$core$Maybe$Nothing},
			withAnimation: elm$core$Maybe$Nothing
		});
};
var elm$html$Html$h4 = _VirtualDom_node('h4');
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var rundis$elm_bootstrap$Bootstrap$Modal$Header = function (a) {
	return {$: 'Header', a: a};
};
var rundis$elm_bootstrap$Bootstrap$Modal$header = F3(
	function (attributes, children, _n0) {
		var conf = _n0.a;
		return rundis$elm_bootstrap$Bootstrap$Modal$Config(
			_Utils_update(
				conf,
				{
					header: elm$core$Maybe$Just(
						rundis$elm_bootstrap$Bootstrap$Modal$Header(
							{attributes: attributes, children: children}))
				}));
	});
var rundis$elm_bootstrap$Bootstrap$Modal$titledHeader = F3(
	function (itemFn, attributes, children) {
		return A2(
			rundis$elm_bootstrap$Bootstrap$Modal$header,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					itemFn,
					A2(
						elm$core$List$cons,
						elm$html$Html$Attributes$class('modal-title'),
						attributes),
					children)
				]));
	});
var rundis$elm_bootstrap$Bootstrap$Modal$h4 = rundis$elm_bootstrap$Bootstrap$Modal$titledHeader(elm$html$Html$h4);
var rundis$elm_bootstrap$Bootstrap$Modal$Show = {$: 'Show'};
var rundis$elm_bootstrap$Bootstrap$Modal$shown = rundis$elm_bootstrap$Bootstrap$Modal$Show;
var elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var elm$html$Html$Attributes$attribute = elm$virtual_dom$VirtualDom$attribute;
var elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		elm$core$String$fromInt(n));
};
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var elm$html$Html$Attributes$classList = function (classes) {
	return elm$html$Html$Attributes$class(
		A2(
			elm$core$String$join,
			' ',
			A2(
				elm$core$List$map,
				elm$core$Tuple$first,
				A2(elm$core$List$filter, elm$core$Tuple$second, classes))));
};
var elm$html$Html$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var rundis$elm_bootstrap$Bootstrap$Modal$StartClose = {$: 'StartClose'};
var rundis$elm_bootstrap$Bootstrap$Modal$getCloseMsg = function (config_) {
	var _n0 = config_.withAnimation;
	if (_n0.$ === 'Just') {
		var animationMsg = _n0.a;
		return animationMsg(rundis$elm_bootstrap$Bootstrap$Modal$StartClose);
	} else {
		return config_.closeMsg;
	}
};
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var rundis$elm_bootstrap$Bootstrap$Modal$isFade = function (conf) {
	return A2(
		elm$core$Maybe$withDefault,
		false,
		A2(
			elm$core$Maybe$map,
			function (_n0) {
				return true;
			},
			conf.withAnimation));
};
var rundis$elm_bootstrap$Bootstrap$Modal$backdrop = F2(
	function (visibility, conf) {
		var attributes = function () {
			switch (visibility.$) {
				case 'Show':
					return _Utils_ap(
						_List_fromArray(
							[
								elm$html$Html$Attributes$classList(
								_List_fromArray(
									[
										_Utils_Tuple2('modal-backdrop', true),
										_Utils_Tuple2(
										'fade',
										rundis$elm_bootstrap$Bootstrap$Modal$isFade(conf)),
										_Utils_Tuple2('show', true)
									]))
							]),
						conf.options.hideOnBackdropClick ? _List_fromArray(
							[
								elm$html$Html$Events$onClick(
								rundis$elm_bootstrap$Bootstrap$Modal$getCloseMsg(conf))
							]) : _List_Nil);
				case 'StartClose':
					return _List_fromArray(
						[
							elm$html$Html$Attributes$classList(
							_List_fromArray(
								[
									_Utils_Tuple2('modal-backdrop', true),
									_Utils_Tuple2('fade', true),
									_Utils_Tuple2('show', true)
								]))
						]);
				case 'FadeClose':
					return _List_fromArray(
						[
							elm$html$Html$Attributes$classList(
							_List_fromArray(
								[
									_Utils_Tuple2('modal-backdrop', true),
									_Utils_Tuple2('fade', true),
									_Utils_Tuple2('show', false)
								]))
						]);
				default:
					return _List_fromArray(
						[
							elm$html$Html$Attributes$classList(
							_List_fromArray(
								[
									_Utils_Tuple2('modal-backdrop', false),
									_Utils_Tuple2(
									'fade',
									rundis$elm_bootstrap$Bootstrap$Modal$isFade(conf)),
									_Utils_Tuple2('show', false)
								]))
						]);
			}
		}();
		return _List_fromArray(
			[
				A2(elm$html$Html$div, attributes, _List_Nil)
			]);
	});
var elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields);
	});
var rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$className = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['className']),
	elm$json$Json$Decode$string);
var rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$target = function (decoder) {
	return A2(elm$json$Json$Decode$field, 'target', decoder);
};
var rundis$elm_bootstrap$Bootstrap$Modal$containerClickDecoder = function (closeMsg) {
	return A2(
		elm$json$Json$Decode$andThen,
		function (c) {
			return A2(elm$core$String$contains, 'elm-bootstrap-modal', c) ? elm$json$Json$Decode$succeed(closeMsg) : elm$json$Json$Decode$fail('ignoring');
		},
		rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$target(rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$className));
};
var elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var elm$html$Html$Attributes$style = elm$virtual_dom$VirtualDom$style;
var rundis$elm_bootstrap$Bootstrap$Modal$display = F2(
	function (visibility, conf) {
		switch (visibility.$) {
			case 'Show':
				return _List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'pointer-events', 'none'),
						A2(elm$html$Html$Attributes$style, 'display', 'block'),
						elm$html$Html$Attributes$classList(
						_List_fromArray(
							[
								_Utils_Tuple2('modal', true),
								_Utils_Tuple2(
								'fade',
								rundis$elm_bootstrap$Bootstrap$Modal$isFade(conf)),
								_Utils_Tuple2('show', true)
							]))
					]);
			case 'StartClose':
				return _List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'pointer-events', 'none'),
						A2(elm$html$Html$Attributes$style, 'display', 'block'),
						elm$html$Html$Attributes$classList(
						_List_fromArray(
							[
								_Utils_Tuple2('modal', true),
								_Utils_Tuple2('fade', true),
								_Utils_Tuple2('show', true)
							]))
					]);
			case 'FadeClose':
				return _List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'pointer-events', 'none'),
						A2(elm$html$Html$Attributes$style, 'display', 'block'),
						elm$html$Html$Attributes$classList(
						_List_fromArray(
							[
								_Utils_Tuple2('modal', true),
								_Utils_Tuple2('fade', true),
								_Utils_Tuple2('show', false)
							])),
						A2(
						elm$html$Html$Events$on,
						'transitionend',
						elm$json$Json$Decode$succeed(conf.closeMsg))
					]);
			default:
				return _List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'height', '0px'),
						A2(elm$html$Html$Attributes$style, 'display', 'block'),
						elm$html$Html$Attributes$classList(
						_List_fromArray(
							[
								_Utils_Tuple2('modal', true),
								_Utils_Tuple2(
								'fade',
								rundis$elm_bootstrap$Bootstrap$Modal$isFade(conf)),
								_Utils_Tuple2('show', false)
							]))
					]);
		}
	});
var rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption = function (size) {
	switch (size.$) {
		case 'XS':
			return elm$core$Maybe$Nothing;
		case 'SM':
			return elm$core$Maybe$Just('sm');
		case 'MD':
			return elm$core$Maybe$Just('md');
		case 'LG':
			return elm$core$Maybe$Just('lg');
		default:
			return elm$core$Maybe$Just('xl');
	}
};
var rundis$elm_bootstrap$Bootstrap$Modal$modalClass = function (size) {
	var _n0 = rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(size);
	if (_n0.$ === 'Just') {
		var s = _n0.a;
		return _List_fromArray(
			[
				elm$html$Html$Attributes$class('modal-' + s)
			]);
	} else {
		return _List_Nil;
	}
};
var rundis$elm_bootstrap$Bootstrap$Modal$modalAttributes = function (options) {
	return _Utils_ap(
		_List_fromArray(
			[
				elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2('modal-dialog', true),
						_Utils_Tuple2('modal-dialog-centered', options.centered)
					])),
				A2(elm$html$Html$Attributes$style, 'pointer-events', 'auto')
			]),
		A2(
			elm$core$Maybe$withDefault,
			_List_Nil,
			A2(elm$core$Maybe$map, rundis$elm_bootstrap$Bootstrap$Modal$modalClass, options.modalSize)));
};
var rundis$elm_bootstrap$Bootstrap$Modal$renderBody = function (maybeBody) {
	if (maybeBody.$ === 'Just') {
		var cfg = maybeBody.a.a;
		return elm$core$Maybe$Just(
			A2(
				elm$html$Html$div,
				A2(
					elm$core$List$cons,
					elm$html$Html$Attributes$class('modal-body'),
					cfg.attributes),
				cfg.children));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var rundis$elm_bootstrap$Bootstrap$Modal$renderFooter = function (maybeFooter) {
	if (maybeFooter.$ === 'Just') {
		var cfg = maybeFooter.a.a;
		return elm$core$Maybe$Just(
			A2(
				elm$html$Html$div,
				A2(
					elm$core$List$cons,
					elm$html$Html$Attributes$class('modal-footer'),
					cfg.attributes),
				cfg.children));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$html$Html$button = _VirtualDom_node('button');
var rundis$elm_bootstrap$Bootstrap$Modal$closeButton = function (closeMsg) {
	return A2(
		elm$html$Html$button,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('close'),
				elm$html$Html$Events$onClick(closeMsg)
			]),
		_List_fromArray(
			[
				elm$html$Html$text('×')
			]));
};
var rundis$elm_bootstrap$Bootstrap$Modal$renderHeader = function (conf_) {
	var _n0 = conf_.header;
	if (_n0.$ === 'Just') {
		var cfg = _n0.a.a;
		return elm$core$Maybe$Just(
			A2(
				elm$html$Html$div,
				A2(
					elm$core$List$cons,
					elm$html$Html$Attributes$class('modal-header'),
					cfg.attributes),
				_Utils_ap(
					cfg.children,
					_List_fromArray(
						[
							rundis$elm_bootstrap$Bootstrap$Modal$closeButton(
							rundis$elm_bootstrap$Bootstrap$Modal$getCloseMsg(conf_))
						]))));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var rundis$elm_bootstrap$Bootstrap$Modal$view = F2(
	function (visibility, _n0) {
		var conf = _n0.a;
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_Utils_ap(
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						_Utils_ap(
							_List_fromArray(
								[
									elm$html$Html$Attributes$tabindex(-1)
								]),
							A2(rundis$elm_bootstrap$Bootstrap$Modal$display, visibility, conf)),
						_List_fromArray(
							[
								A2(
								elm$html$Html$div,
								_Utils_ap(
									_List_fromArray(
										[
											A2(elm$html$Html$Attributes$attribute, 'role', 'document'),
											elm$html$Html$Attributes$class('elm-bootstrap-modal')
										]),
									_Utils_ap(
										rundis$elm_bootstrap$Bootstrap$Modal$modalAttributes(conf.options),
										conf.options.hideOnBackdropClick ? _List_fromArray(
											[
												A2(
												elm$html$Html$Events$on,
												'click',
												rundis$elm_bootstrap$Bootstrap$Modal$containerClickDecoder(conf.closeMsg))
											]) : _List_Nil)),
								_List_fromArray(
									[
										A2(
										elm$html$Html$div,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('modal-content')
											]),
										A2(
											elm$core$List$filterMap,
											elm$core$Basics$identity,
											_List_fromArray(
												[
													rundis$elm_bootstrap$Bootstrap$Modal$renderHeader(conf),
													rundis$elm_bootstrap$Bootstrap$Modal$renderBody(conf.body),
													rundis$elm_bootstrap$Bootstrap$Modal$renderFooter(conf.footer)
												])))
									]))
							]))
					]),
				A2(rundis$elm_bootstrap$Bootstrap$Modal$backdrop, visibility, conf)));
	});
var author$project$Main$alert = function (model) {
	var _n0 = model.alert;
	if (_n0.$ === 'Just') {
		var name = _n0.a.name;
		var body = _n0.a.body;
		return A2(
			rundis$elm_bootstrap$Bootstrap$Modal$view,
			rundis$elm_bootstrap$Bootstrap$Modal$shown,
			A3(
				rundis$elm_bootstrap$Bootstrap$Modal$body,
				_List_Nil,
				body,
				A3(
					rundis$elm_bootstrap$Bootstrap$Modal$h4,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(name)
						]),
					rundis$elm_bootstrap$Bootstrap$Modal$config(author$project$Main$NoOp))));
	} else {
		return A2(elm$html$Html$div, _List_Nil, _List_Nil);
	}
};
var author$project$MyKeyboardNet$View$Keyboard$title = function (keyboard) {
	return 'Piano RT';
};
var author$project$MyKeyboardNet$Static$View$title = function (ns) {
	var m = ns.a;
	return author$project$MyKeyboardNet$View$Keyboard$title(m);
};
var author$project$Static$View$title = function (model) {
	var m = model.a;
	return author$project$MyKeyboardNet$Static$View$title(m);
};
var MacCASOutreach$graphicsvg$GraphicSVG$AlphaMask = F2(
	function (a, b) {
		return {$: 'AlphaMask', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$Clip = F2(
	function (a, b) {
		return {$: 'Clip', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$EnterAt = F2(
	function (a, b) {
		return {$: 'EnterAt', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$EnterShape = F2(
	function (a, b) {
		return {$: 'EnterShape', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$Everything = {$: 'Everything'};
var MacCASOutreach$graphicsvg$GraphicSVG$Exit = F2(
	function (a, b) {
		return {$: 'Exit', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$ExitAt = F2(
	function (a, b) {
		return {$: 'ExitAt', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$ForeignObject = F3(
	function (a, b, c) {
		return {$: 'ForeignObject', a: a, b: b, c: c};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$GraphPaper = F3(
	function (a, b, c) {
		return {$: 'GraphPaper', a: a, b: b, c: c};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$Group = function (a) {
	return {$: 'Group', a: a};
};
var MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline = function (a) {
	return {$: 'GroupOutline', a: a};
};
var MacCASOutreach$graphicsvg$GraphicSVG$Inked = F3(
	function (a, b, c) {
		return {$: 'Inked', a: a, b: b, c: c};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$Link = F2(
	function (a, b) {
		return {$: 'Link', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$MouseDown = F2(
	function (a, b) {
		return {$: 'MouseDown', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$MouseDownAt = F2(
	function (a, b) {
		return {$: 'MouseDownAt', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$MouseUp = F2(
	function (a, b) {
		return {$: 'MouseUp', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$MouseUpAt = F2(
	function (a, b) {
		return {$: 'MouseUpAt', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$Move = F2(
	function (a, b) {
		return {$: 'Move', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$MoveOverAt = F2(
	function (a, b) {
		return {$: 'MoveOverAt', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$NoLine = {$: 'NoLine'};
var MacCASOutreach$graphicsvg$GraphicSVG$Notathing = {$: 'Notathing'};
var MacCASOutreach$graphicsvg$GraphicSVG$Rotate = F2(
	function (a, b) {
		return {$: 'Rotate', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$Scale = F3(
	function (a, b, c) {
		return {$: 'Scale', a: a, b: b, c: c};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$Skew = F3(
	function (a, b, c) {
		return {$: 'Skew', a: a, b: b, c: c};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$Tap = F2(
	function (a, b) {
		return {$: 'Tap', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$TapAt = F2(
	function (a, b) {
		return {$: 'TapAt', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$TouchEnd = F2(
	function (a, b) {
		return {$: 'TouchEnd', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$TouchEndAt = F2(
	function (a, b) {
		return {$: 'TouchEndAt', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$TouchMoveAt = F2(
	function (a, b) {
		return {$: 'TouchMoveAt', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$TouchStart = F2(
	function (a, b) {
		return {$: 'TouchStart', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$TouchStartAt = F2(
	function (a, b) {
		return {$: 'TouchStartAt', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$Transformed = F2(
	function (a, b) {
		return {$: 'Transformed', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$RGBA = F4(
	function (a, b, c, d) {
		return {$: 'RGBA', a: a, b: b, c: c, d: d};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$black = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 0, 0, 0, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$blank = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 0, 0, 0, 0);
var MacCASOutreach$graphicsvg$GraphicSVG$repaint = F2(
	function (color, shape) {
		switch (shape.$) {
			case 'Inked':
				if (shape.b.$ === 'Nothing') {
					var _n1 = shape.b;
					var st = shape.c;
					return A3(
						MacCASOutreach$graphicsvg$GraphicSVG$Inked,
						elm$core$Maybe$Just(color),
						elm$core$Maybe$Nothing,
						st);
				} else {
					var _n2 = shape.b.a;
					var lt = _n2.a;
					var st = shape.c;
					return A3(
						MacCASOutreach$graphicsvg$GraphicSVG$Inked,
						elm$core$Maybe$Just(color),
						elm$core$Maybe$Just(
							_Utils_Tuple2(lt, color)),
						st);
				}
			case 'Move':
				var s = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$Move,
					s,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'Rotate':
				var r = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$Rotate,
					r,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'Scale':
				var sx = shape.a;
				var sy = shape.b;
				var sh = shape.c;
				return A3(
					MacCASOutreach$graphicsvg$GraphicSVG$Scale,
					sx,
					sy,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'Skew':
				var skx = shape.a;
				var sky = shape.b;
				var sh = shape.c;
				return A3(
					MacCASOutreach$graphicsvg$GraphicSVG$Skew,
					skx,
					sky,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'Transformed':
				var tm = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$Transformed,
					tm,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'Group':
				var shapes = shape.a;
				return MacCASOutreach$graphicsvg$GraphicSVG$Group(
					A2(
						elm$core$List$map,
						MacCASOutreach$graphicsvg$GraphicSVG$repaint(color),
						shapes));
			case 'GroupOutline':
				var cmbndshp = shape.a;
				return MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline(
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, cmbndshp));
			case 'Link':
				var s = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$Link,
					s,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'AlphaMask':
				var reg = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$AlphaMask,
					reg,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'Clip':
				var reg = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$Clip,
					reg,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'Tap':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$Tap,
					userMsg,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'TapAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$TapAt,
					userMsg,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'EnterShape':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$EnterShape,
					userMsg,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'EnterAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$EnterAt,
					userMsg,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'Exit':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$Exit,
					userMsg,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'ExitAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$ExitAt,
					userMsg,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'MouseDown':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$MouseDown,
					userMsg,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'MouseDownAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$MouseDownAt,
					userMsg,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'MouseUp':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$MouseUp,
					userMsg,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'MouseUpAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$MouseUpAt,
					userMsg,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'MoveOverAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$MoveOverAt,
					userMsg,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'TouchStart':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$TouchStart,
					userMsg,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'TouchEnd':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$TouchEnd,
					userMsg,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'TouchStartAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$TouchStartAt,
					userMsg,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'TouchEndAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$TouchEndAt,
					userMsg,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'TouchMoveAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					MacCASOutreach$graphicsvg$GraphicSVG$TouchMoveAt,
					userMsg,
					A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'ForeignObject':
				var w = shape.a;
				var h = shape.b;
				var htm = shape.c;
				return A3(MacCASOutreach$graphicsvg$GraphicSVG$ForeignObject, w, h, htm);
			case 'Everything':
				return MacCASOutreach$graphicsvg$GraphicSVG$Everything;
			case 'Notathing':
				return MacCASOutreach$graphicsvg$GraphicSVG$Notathing;
			default:
				var s = shape.a;
				var th = shape.b;
				return A3(MacCASOutreach$graphicsvg$GraphicSVG$GraphPaper, s, th, color);
		}
	});
var MacCASOutreach$graphicsvg$GraphicSVG$subtract = F2(
	function (shape1, shape2) {
		return A2(MacCASOutreach$graphicsvg$GraphicSVG$AlphaMask, shape1, shape2);
	});
var MacCASOutreach$graphicsvg$GraphicSVG$addOutline = F3(
	function (style, outlineClr, shape) {
		addOutline:
		while (true) {
			var lineStyle = function () {
				if (style.$ === 'NoLine') {
					return elm$core$Maybe$Nothing;
				} else {
					return elm$core$Maybe$Just(
						_Utils_Tuple2(style, outlineClr));
				}
			}();
			switch (shape.$) {
				case 'Inked':
					var clr = shape.a;
					var st = shape.c;
					return A3(MacCASOutreach$graphicsvg$GraphicSVG$Inked, clr, lineStyle, st);
				case 'Move':
					var s = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$Move,
						s,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'Rotate':
					var r = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$Rotate,
						r,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'Scale':
					var sx = shape.a;
					var sy = shape.b;
					var sh = shape.c;
					return A3(
						MacCASOutreach$graphicsvg$GraphicSVG$Scale,
						sx,
						sy,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'Skew':
					var skx = shape.a;
					var sky = shape.b;
					var sh = shape.c;
					return A3(
						MacCASOutreach$graphicsvg$GraphicSVG$Skew,
						skx,
						sky,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'Transformed':
					var tm = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$Transformed,
						tm,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'Group':
					var list = shape.a;
					var innerlist = A2(
						elm$core$List$filterMap,
						function (shp) {
							if (shp.$ === 'GroupOutline') {
								return elm$core$Maybe$Nothing;
							} else {
								return elm$core$Maybe$Just(
									A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, MacCASOutreach$graphicsvg$GraphicSVG$NoLine, MacCASOutreach$graphicsvg$GraphicSVG$black, shp));
							}
						},
						list);
					if (!innerlist.b) {
						return MacCASOutreach$graphicsvg$GraphicSVG$Group(_List_Nil);
					} else {
						if (!innerlist.b.b) {
							var hd = innerlist.a;
							var $temp$style = style,
								$temp$outlineClr = outlineClr,
								$temp$shape = hd;
							style = $temp$style;
							outlineClr = $temp$outlineClr;
							shape = $temp$shape;
							continue addOutline;
						} else {
							if (_Utils_eq(lineStyle, elm$core$Maybe$Nothing)) {
								return MacCASOutreach$graphicsvg$GraphicSVG$Group(innerlist);
							} else {
								var outlnshp = MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline(
									A2(
										MacCASOutreach$graphicsvg$GraphicSVG$subtract,
										MacCASOutreach$graphicsvg$GraphicSVG$Group(innerlist),
										MacCASOutreach$graphicsvg$GraphicSVG$Group(
											A2(
												elm$core$List$map,
												A2(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr),
												innerlist))));
								return MacCASOutreach$graphicsvg$GraphicSVG$Group(
									_Utils_ap(
										innerlist,
										_List_fromArray(
											[outlnshp])));
							}
						}
					}
				case 'GroupOutline':
					var cmbndshp = shape.a;
					return MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline(cmbndshp);
				case 'AlphaMask':
					var reg = shape.a;
					var sh = shape.b;
					var ptrn = A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, MacCASOutreach$graphicsvg$GraphicSVG$NoLine, MacCASOutreach$graphicsvg$GraphicSVG$black, reg);
					var inside = A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, MacCASOutreach$graphicsvg$GraphicSVG$NoLine, MacCASOutreach$graphicsvg$GraphicSVG$black, sh);
					if (_Utils_eq(lineStyle, elm$core$Maybe$Nothing)) {
						return A2(MacCASOutreach$graphicsvg$GraphicSVG$AlphaMask, ptrn, inside);
					} else {
						var ptrnlnd = A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, reg);
						var ptrnoutln = A2(MacCASOutreach$graphicsvg$GraphicSVG$Clip, inside, ptrnlnd);
						var newshp = A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh);
						var shpoutln = A2(MacCASOutreach$graphicsvg$GraphicSVG$Clip, inside, newshp);
						return A2(
							MacCASOutreach$graphicsvg$GraphicSVG$AlphaMask,
							ptrn,
							MacCASOutreach$graphicsvg$GraphicSVG$Group(
								_List_fromArray(
									[
										inside,
										MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline(
										MacCASOutreach$graphicsvg$GraphicSVG$Group(
											_List_fromArray(
												[shpoutln, ptrnoutln])))
									])));
					}
				case 'Clip':
					var reg = shape.a;
					var sh = shape.b;
					var ptrn = A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, MacCASOutreach$graphicsvg$GraphicSVG$NoLine, MacCASOutreach$graphicsvg$GraphicSVG$black, reg);
					var inside = A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, MacCASOutreach$graphicsvg$GraphicSVG$NoLine, MacCASOutreach$graphicsvg$GraphicSVG$black, sh);
					if (_Utils_eq(lineStyle, elm$core$Maybe$Nothing)) {
						return A2(MacCASOutreach$graphicsvg$GraphicSVG$Clip, ptrn, inside);
					} else {
						var ptrnlnd = A3(
							MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
							style,
							outlineClr,
							A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, MacCASOutreach$graphicsvg$GraphicSVG$blank, reg));
						var ptrnoutln = A2(MacCASOutreach$graphicsvg$GraphicSVG$Clip, inside, ptrnlnd);
						var newshp = A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh);
						var shpoutln = A2(MacCASOutreach$graphicsvg$GraphicSVG$Clip, inside, newshp);
						return A2(
							MacCASOutreach$graphicsvg$GraphicSVG$Clip,
							ptrn,
							MacCASOutreach$graphicsvg$GraphicSVG$Group(
								_List_fromArray(
									[
										inside,
										MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline(
										MacCASOutreach$graphicsvg$GraphicSVG$Group(
											_List_fromArray(
												[shpoutln, ptrnoutln])))
									])));
					}
				case 'Link':
					var s = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$Link,
						s,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'Tap':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$Tap,
						userMsg,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'TapAt':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$TapAt,
						userMsg,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'EnterShape':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$EnterShape,
						userMsg,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'EnterAt':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$EnterAt,
						userMsg,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'Exit':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$Exit,
						userMsg,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'ExitAt':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$ExitAt,
						userMsg,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'MouseDown':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$MouseDown,
						userMsg,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'MouseDownAt':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$MouseDownAt,
						userMsg,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'MouseUp':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$MouseUp,
						userMsg,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'MouseUpAt':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$MouseUpAt,
						userMsg,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'MoveOverAt':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$MoveOverAt,
						userMsg,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'TouchStart':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$TouchStart,
						userMsg,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'TouchEnd':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$TouchEnd,
						userMsg,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'TouchStartAt':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$TouchStartAt,
						userMsg,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'TouchEndAt':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$TouchEndAt,
						userMsg,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'TouchMoveAt':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$TouchMoveAt,
						userMsg,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'ForeignObject':
					var w = shape.a;
					var h = shape.b;
					var htm = shape.c;
					return A3(MacCASOutreach$graphicsvg$GraphicSVG$ForeignObject, w, h, htm);
				case 'Everything':
					return MacCASOutreach$graphicsvg$GraphicSVG$Everything;
				case 'Notathing':
					return MacCASOutreach$graphicsvg$GraphicSVG$Notathing;
				default:
					var s = shape.a;
					var th = shape.b;
					var clr = shape.c;
					return A3(MacCASOutreach$graphicsvg$GraphicSVG$GraphPaper, s, th, clr);
			}
		}
	});
var MacCASOutreach$graphicsvg$GraphicSVG$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var MacCASOutreach$graphicsvg$GraphicSVG$Face = F8(
	function (a, b, c, d, e, f, g, h) {
		return {$: 'Face', a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$Text = F2(
	function (a, b) {
		return {$: 'Text', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$customFont = F2(
	function (fStr, stencil) {
		if (stencil.$ === 'Text') {
			var _n1 = stencil.a;
			var si = _n1.a;
			var bo = _n1.b;
			var i = _n1.c;
			var u = _n1.d;
			var s = _n1.e;
			var sel = _n1.f;
			var f = _n1.g;
			var c = _n1.h;
			var str = stencil.b;
			return A2(
				MacCASOutreach$graphicsvg$GraphicSVG$Text,
				A8(
					MacCASOutreach$graphicsvg$GraphicSVG$Face,
					si,
					bo,
					i,
					u,
					s,
					sel,
					MacCASOutreach$graphicsvg$GraphicSVG$Custom(fStr),
					c),
				str);
		} else {
			var a = stencil;
			return a;
		}
	});
var MacCASOutreach$graphicsvg$GraphicSVG$filled = F2(
	function (color, stencil) {
		return A3(
			MacCASOutreach$graphicsvg$GraphicSVG$Inked,
			elm$core$Maybe$Just(color),
			elm$core$Maybe$Nothing,
			stencil);
	});
var MacCASOutreach$graphicsvg$GraphicSVG$group = function (shapes) {
	return MacCASOutreach$graphicsvg$GraphicSVG$Group(shapes);
};
var MacCASOutreach$graphicsvg$GraphicSVG$hotPink = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 255, 0, 66, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$lightGreen = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 138, 226, 52, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$move = F2(
	function (disp, shape) {
		return A2(MacCASOutreach$graphicsvg$GraphicSVG$Move, disp, shape);
	});
var MacCASOutreach$graphicsvg$GraphicSVG$outlined = F3(
	function (style, outlineClr, stencil) {
		var lineStyle = function () {
			if (style.$ === 'NoLine') {
				return elm$core$Maybe$Nothing;
			} else {
				return elm$core$Maybe$Just(
					_Utils_Tuple2(style, outlineClr));
			}
		}();
		return A3(MacCASOutreach$graphicsvg$GraphicSVG$Inked, elm$core$Maybe$Nothing, lineStyle, stencil);
	});
var MacCASOutreach$graphicsvg$GraphicSVG$ssc = function (n) {
	return A3(elm$core$Basics$clamp, 0, 255, n);
};
var MacCASOutreach$graphicsvg$GraphicSVG$rgb = F3(
	function (r, g, b) {
		return A4(
			MacCASOutreach$graphicsvg$GraphicSVG$RGBA,
			MacCASOutreach$graphicsvg$GraphicSVG$ssc(r),
			MacCASOutreach$graphicsvg$GraphicSVG$ssc(g),
			MacCASOutreach$graphicsvg$GraphicSVG$ssc(b),
			1);
	});
var MacCASOutreach$graphicsvg$GraphicSVG$RoundRect = F3(
	function (a, b, c) {
		return {$: 'RoundRect', a: a, b: b, c: c};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$roundedRect = F3(
	function (w, h, r) {
		return A3(MacCASOutreach$graphicsvg$GraphicSVG$RoundRect, w, h, r);
	});
var MacCASOutreach$graphicsvg$GraphicSVG$size = F2(
	function (sze, stencil) {
		if (stencil.$ === 'Text') {
			var _n1 = stencil.a;
			var si = _n1.a;
			var bo = _n1.b;
			var i = _n1.c;
			var u = _n1.d;
			var s = _n1.e;
			var sel = _n1.f;
			var f = _n1.g;
			var c = _n1.h;
			var str = stencil.b;
			return A2(
				MacCASOutreach$graphicsvg$GraphicSVG$Text,
				A8(MacCASOutreach$graphicsvg$GraphicSVG$Face, sze, bo, i, u, s, sel, f, c),
				str);
		} else {
			var a = stencil;
			return a;
		}
	});
var MacCASOutreach$graphicsvg$GraphicSVG$Solid = function (a) {
	return {$: 'Solid', a: a};
};
var MacCASOutreach$graphicsvg$GraphicSVG$solid = function (th) {
	return MacCASOutreach$graphicsvg$GraphicSVG$Solid(th);
};
var MacCASOutreach$graphicsvg$GraphicSVG$Rect = F2(
	function (a, b) {
		return {$: 'Rect', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$square = function (r) {
	return A2(MacCASOutreach$graphicsvg$GraphicSVG$Rect, r, r);
};
var MacCASOutreach$graphicsvg$GraphicSVG$AlignLeft = {$: 'AlignLeft'};
var MacCASOutreach$graphicsvg$GraphicSVG$Serif = {$: 'Serif'};
var MacCASOutreach$graphicsvg$GraphicSVG$text = function (str) {
	return A2(
		MacCASOutreach$graphicsvg$GraphicSVG$Text,
		A8(MacCASOutreach$graphicsvg$GraphicSVG$Face, 12, false, false, false, false, false, MacCASOutreach$graphicsvg$GraphicSVG$Serif, MacCASOutreach$graphicsvg$GraphicSVG$AlignLeft),
		str);
};
var elm$core$String$fromFloat = _String_fromNumber;
var MacCASOutreach$graphicsvg$GraphicSVG$pairToString = function (_n0) {
	var x = _n0.a;
	var y = _n0.b;
	return elm$core$String$fromFloat(x) + (',' + elm$core$String$fromFloat(y));
};
var MacCASOutreach$graphicsvg$GraphicSVG$bezierStringHelper = function (_n0) {
	var _n1 = _n0.a;
	var a = _n1.a;
	var b = _n1.b;
	var _n2 = _n0.b;
	var c = _n2.a;
	var d = _n2.b;
	return ' Q ' + (MacCASOutreach$graphicsvg$GraphicSVG$pairToString(
		_Utils_Tuple2(a, b)) + (' ' + MacCASOutreach$graphicsvg$GraphicSVG$pairToString(
		_Utils_Tuple2(c, d))));
};
var MacCASOutreach$graphicsvg$GraphicSVG$createBezierString = F2(
	function (first, list) {
		return 'M ' + (MacCASOutreach$graphicsvg$GraphicSVG$pairToString(first) + elm$core$String$concat(
			A2(elm$core$List$map, MacCASOutreach$graphicsvg$GraphicSVG$bezierStringHelper, list)));
	});
var MacCASOutreach$graphicsvg$GraphicSVG$rect = F2(
	function (w, h) {
		return A2(MacCASOutreach$graphicsvg$GraphicSVG$Rect, w, h);
	});
var MacCASOutreach$graphicsvg$GraphicSVG$createGraphX = F5(
	function (h, s, th, c, x) {
		return A2(
			MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(x * s, 0),
			A2(
				MacCASOutreach$graphicsvg$GraphicSVG$filled,
				c,
				A2(MacCASOutreach$graphicsvg$GraphicSVG$rect, th, h)));
	});
var MacCASOutreach$graphicsvg$GraphicSVG$createGraphY = F5(
	function (w, s, th, c, y) {
		return A2(
			MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, y * s),
			A2(
				MacCASOutreach$graphicsvg$GraphicSVG$filled,
				c,
				A2(MacCASOutreach$graphicsvg$GraphicSVG$rect, w, th)));
	});
var MacCASOutreach$graphicsvg$GraphicSVG$createGraph = F4(
	function (_n0, s, th, c) {
		var w = _n0.a;
		var h = _n0.b;
		var syi = elm$core$Basics$ceiling(h / (s * 2));
		var ylisti = A2(elm$core$List$range, -syi, syi);
		var sxi = elm$core$Basics$ceiling(w / (s * 2));
		var xlisti = A2(elm$core$List$range, -sxi, sxi);
		return MacCASOutreach$graphicsvg$GraphicSVG$group(
			_Utils_ap(
				A2(
					elm$core$List$map,
					A2(
						elm$core$Basics$composeL,
						A4(MacCASOutreach$graphicsvg$GraphicSVG$createGraphX, h, s, th, c),
						elm$core$Basics$toFloat),
					xlisti),
				A2(
					elm$core$List$map,
					A2(
						elm$core$Basics$composeL,
						A4(MacCASOutreach$graphicsvg$GraphicSVG$createGraphY, w, s, th, c),
						elm$core$Basics$toFloat),
					ylisti)));
	});
var MacCASOutreach$graphicsvg$GraphicSVG$ident = _Utils_Tuple2(
	_Utils_Tuple3(1, 0, 0),
	_Utils_Tuple3(0, 1, 0));
var MacCASOutreach$graphicsvg$GraphicSVG$matrixMult = F2(
	function (_n0, _n3) {
		var _n1 = _n0.a;
		var a = _n1.a;
		var c = _n1.b;
		var e = _n1.c;
		var _n2 = _n0.b;
		var b = _n2.a;
		var d = _n2.b;
		var f = _n2.c;
		var _n4 = _n3.a;
		var a1 = _n4.a;
		var c1 = _n4.b;
		var e1 = _n4.c;
		var _n5 = _n3.b;
		var b1 = _n5.a;
		var d1 = _n5.b;
		var f1 = _n5.c;
		return _Utils_Tuple2(
			_Utils_Tuple3((a * a1) + (c * b1), (a * c1) + (c * d1), (e + (a * e1)) + (c * f1)),
			_Utils_Tuple3((b * a1) + (d * b1), (b * c1) + (d * d1), (f + (b * e1)) + (d * f1)));
	});
var MacCASOutreach$graphicsvg$GraphicSVG$mkAlpha = function (_n0) {
	var a = _n0.d;
	return elm$core$String$fromFloat(a);
};
var MacCASOutreach$graphicsvg$GraphicSVG$toHexHelper = function (dec) {
	switch (dec) {
		case 0:
			return '0';
		case 1:
			return '1';
		case 2:
			return '2';
		case 3:
			return '3';
		case 4:
			return '4';
		case 5:
			return '5';
		case 6:
			return '6';
		case 7:
			return '7';
		case 8:
			return '8';
		case 9:
			return '9';
		case 10:
			return 'A';
		case 11:
			return 'B';
		case 12:
			return 'C';
		case 13:
			return 'D';
		case 14:
			return 'E';
		case 15:
			return 'F';
		default:
			return '';
	}
};
var MacCASOutreach$graphicsvg$GraphicSVG$toHex = function (dec) {
	var second = A2(elm$core$Basics$modBy, 16, dec);
	var first = (dec / 16) | 0;
	return _Utils_ap(
		MacCASOutreach$graphicsvg$GraphicSVG$toHexHelper(first),
		MacCASOutreach$graphicsvg$GraphicSVG$toHexHelper(second));
};
var elm$core$Basics$round = _Basics_round;
var MacCASOutreach$graphicsvg$GraphicSVG$mkRGB = function (_n0) {
	var r = _n0.a;
	var g = _n0.b;
	var b = _n0.c;
	return '#' + (MacCASOutreach$graphicsvg$GraphicSVG$toHex(
		elm$core$Basics$round(r)) + (MacCASOutreach$graphicsvg$GraphicSVG$toHex(
		elm$core$Basics$round(g)) + MacCASOutreach$graphicsvg$GraphicSVG$toHex(
		elm$core$Basics$round(b))));
};
var MacCASOutreach$graphicsvg$GraphicSVG$moveT = F2(
	function (_n0, _n1) {
		var u = _n0.a;
		var v = _n0.b;
		var _n2 = _n1.a;
		var a = _n2.a;
		var c = _n2.b;
		var tx = _n2.c;
		var _n3 = _n1.b;
		var b = _n3.a;
		var d = _n3.b;
		var ty = _n3.c;
		return _Utils_Tuple2(
			_Utils_Tuple3(a, c, (tx + (a * u)) + (c * v)),
			_Utils_Tuple3(b, d, (ty + (b * u)) + (d * v)));
	});
var elm$json$Json$Decode$float = _Json_decodeFloat;
var MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder = A3(
	elm$json$Json$Decode$map2,
	F2(
		function (x, y) {
			return _Utils_Tuple2(x, -y);
		}),
	A2(elm$json$Json$Decode$field, 'offsetX', elm$json$Json$Decode$float),
	A2(elm$json$Json$Decode$field, 'offsetY', elm$json$Json$Decode$float));
var MacCASOutreach$graphicsvg$GraphicSVG$onEnterAt = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mouseover',
		A2(elm$json$Json$Decode$map, msg, MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder));
};
var MacCASOutreach$graphicsvg$GraphicSVG$onLeaveAt = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mouseleave',
		A2(elm$json$Json$Decode$map, msg, MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder));
};
var MacCASOutreach$graphicsvg$GraphicSVG$onMouseDownAt = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mousedown',
		A2(elm$json$Json$Decode$map, msg, MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder));
};
var MacCASOutreach$graphicsvg$GraphicSVG$onMouseUpAt = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mouseup',
		A2(elm$json$Json$Decode$map, msg, MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder));
};
var MacCASOutreach$graphicsvg$GraphicSVG$onMoveAt = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mousemove',
		A2(elm$json$Json$Decode$map, msg, MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder));
};
var MacCASOutreach$graphicsvg$GraphicSVG$onTapAt = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		A2(elm$json$Json$Decode$map, msg, MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder));
};
var MacCASOutreach$graphicsvg$GraphicSVG$onTouchEnd = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'touchend',
		elm$json$Json$Decode$succeed(msg));
};
var MacCASOutreach$graphicsvg$GraphicSVG$TouchPos = F2(
	function (a, b) {
		return {$: 'TouchPos', a: a, b: b};
	});
var MacCASOutreach$graphicsvg$GraphicSVG$touchDecoder = elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			elm$json$Json$Decode$at,
			_List_fromArray(
				['touches', '0']),
			A3(
				elm$json$Json$Decode$map2,
				MacCASOutreach$graphicsvg$GraphicSVG$TouchPos,
				A2(elm$json$Json$Decode$field, 'pageX', elm$json$Json$Decode$float),
				A2(elm$json$Json$Decode$field, 'pageY', elm$json$Json$Decode$float))),
			A3(
			elm$json$Json$Decode$map2,
			MacCASOutreach$graphicsvg$GraphicSVG$TouchPos,
			A2(elm$json$Json$Decode$field, 'pageX', elm$json$Json$Decode$float),
			A2(elm$json$Json$Decode$field, 'pageY', elm$json$Json$Decode$float))
		]));
var MacCASOutreach$graphicsvg$GraphicSVG$touchToPair = function (tp) {
	var x = tp.a;
	var y = tp.b;
	return _Utils_Tuple2(x, -y);
};
var elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var MacCASOutreach$graphicsvg$GraphicSVG$onTouchMove = function (msg) {
	return A2(
		elm$html$Html$Events$preventDefaultOn,
		'touchmove',
		A2(
			elm$json$Json$Decode$map,
			function (a) {
				return _Utils_Tuple2(
					A2(elm$core$Basics$composeL, msg, MacCASOutreach$graphicsvg$GraphicSVG$touchToPair)(a),
					true);
			},
			MacCASOutreach$graphicsvg$GraphicSVG$touchDecoder));
};
var MacCASOutreach$graphicsvg$GraphicSVG$onTouchStart = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'touchstart',
		elm$json$Json$Decode$succeed(msg));
};
var MacCASOutreach$graphicsvg$GraphicSVG$onTouchStartAt = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'touchstart',
		A2(
			elm$json$Json$Decode$map,
			A2(elm$core$Basics$composeL, msg, MacCASOutreach$graphicsvg$GraphicSVG$touchToPair),
			MacCASOutreach$graphicsvg$GraphicSVG$touchDecoder));
};
var elm$core$Basics$cos = _Basics_cos;
var elm$core$Basics$sin = _Basics_sin;
var MacCASOutreach$graphicsvg$GraphicSVG$rotateT = F2(
	function (rad, _n0) {
		var _n1 = _n0.a;
		var a = _n1.a;
		var c = _n1.b;
		var tx = _n1.c;
		var _n2 = _n0.b;
		var b = _n2.a;
		var d = _n2.b;
		var ty = _n2.c;
		var sinX = elm$core$Basics$sin(rad);
		var cosX = elm$core$Basics$cos(rad);
		return _Utils_Tuple2(
			_Utils_Tuple3((a * cosX) + (c * sinX), (c * cosX) - (a * sinX), tx),
			_Utils_Tuple3((b * cosX) + (d * sinX), (d * cosX) - (b * sinX), ty));
	});
var MacCASOutreach$graphicsvg$GraphicSVG$scaleT = F3(
	function (sx, sy, _n0) {
		var _n1 = _n0.a;
		var a = _n1.a;
		var c = _n1.b;
		var tx = _n1.c;
		var _n2 = _n0.b;
		var b = _n2.a;
		var d = _n2.b;
		var ty = _n2.c;
		return _Utils_Tuple2(
			_Utils_Tuple3(a * sx, c * sy, tx),
			_Utils_Tuple3(b * sx, d * sy, ty));
	});
var elm$core$Basics$tan = _Basics_tan;
var MacCASOutreach$graphicsvg$GraphicSVG$skewT = F3(
	function (skx, sky, _n0) {
		var _n1 = _n0.a;
		var a = _n1.a;
		var c = _n1.b;
		var tx = _n1.c;
		var _n2 = _n0.b;
		var b = _n2.a;
		var d = _n2.b;
		var ty = _n2.c;
		var tanY = elm$core$Basics$tan(-sky);
		var tanX = elm$core$Basics$tan(-skx);
		return _Utils_Tuple2(
			_Utils_Tuple3(a + (c * tanY), c + (a * tanX), tx),
			_Utils_Tuple3(b + (d * tanY), d + (b * tanX), ty));
	});
var MacCASOutreach$graphicsvg$GraphicSVG$white = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 255, 255, 255, 1);
var elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			elm$core$List$any,
			A2(elm$core$Basics$composeL, elm$core$Basics$not, isOkay),
			list);
	});
var elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						elm$core$List$cons,
						sep,
						A2(elm$core$List$cons, x, rest));
				});
			var spersed = A3(elm$core$List$foldr, step, _List_Nil, tl);
			return A2(elm$core$List$cons, hd, spersed);
		}
	});
var elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var elm$html$Html$map = elm$virtual_dom$VirtualDom$map;
var elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$bool(bool));
	});
var elm$html$Html$Attributes$contenteditable = elm$html$Html$Attributes$boolProperty('contentEditable');
var elm$html$Html$Events$onMouseDown = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mousedown',
		elm$json$Json$Decode$succeed(msg));
};
var elm$html$Html$Events$onMouseEnter = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mouseenter',
		elm$json$Json$Decode$succeed(msg));
};
var elm$html$Html$Events$onMouseLeave = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mouseleave',
		elm$json$Json$Decode$succeed(msg));
};
var elm$html$Html$Events$onMouseUp = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mouseup',
		elm$json$Json$Decode$succeed(msg));
};
var elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var elm$svg$Svg$a = elm$svg$Svg$trustedNode('a');
var elm$svg$Svg$circle = elm$svg$Svg$trustedNode('circle');
var elm$svg$Svg$defs = elm$svg$Svg$trustedNode('defs');
var elm$svg$Svg$ellipse = elm$svg$Svg$trustedNode('ellipse');
var elm$svg$Svg$foreignObject = elm$svg$Svg$trustedNode('foreignObject');
var elm$svg$Svg$g = elm$svg$Svg$trustedNode('g');
var elm$svg$Svg$mask = elm$svg$Svg$trustedNode('mask');
var elm$svg$Svg$path = elm$svg$Svg$trustedNode('path');
var elm$svg$Svg$polygon = elm$svg$Svg$trustedNode('polygon');
var elm$svg$Svg$polyline = elm$svg$Svg$trustedNode('polyline');
var elm$svg$Svg$rect = elm$svg$Svg$trustedNode('rect');
var elm$svg$Svg$text = elm$virtual_dom$VirtualDom$text;
var elm$svg$Svg$text_ = elm$svg$Svg$trustedNode('text');
var elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var elm$svg$Svg$Attributes$fillOpacity = _VirtualDom_attribute('fill-opacity');
var elm$svg$Svg$Attributes$fontSize = _VirtualDom_attribute('font-size');
var elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var elm$svg$Svg$Attributes$id = _VirtualDom_attribute('id');
var elm$svg$Svg$Attributes$mask = _VirtualDom_attribute('mask');
var elm$svg$Svg$Attributes$points = _VirtualDom_attribute('points');
var elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var elm$svg$Svg$Attributes$rx = _VirtualDom_attribute('rx');
var elm$svg$Svg$Attributes$ry = _VirtualDom_attribute('ry');
var elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var elm$svg$Svg$Attributes$strokeDasharray = _VirtualDom_attribute('stroke-dasharray');
var elm$svg$Svg$Attributes$strokeOpacity = _VirtualDom_attribute('stroke-opacity');
var elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var elm$svg$Svg$Attributes$style = _VirtualDom_attribute('style');
var elm$svg$Svg$Attributes$target = _VirtualDom_attribute('target');
var elm$svg$Svg$Attributes$textAnchor = _VirtualDom_attribute('text-anchor');
var elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var elm$svg$Svg$Attributes$xlinkHref = function (value) {
	return A3(
		_VirtualDom_attributeNS,
		'http://www.w3.org/1999/xlink',
		'xlink:href',
		_VirtualDom_noJavaScriptUri(value));
};
var elm$svg$Svg$Attributes$xmlSpace = A2(_VirtualDom_attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:space');
var elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var MacCASOutreach$graphicsvg$GraphicSVG$createSVG = F7(
	function (id, w, h, trans, msgWrapper, positionWrapper, shape) {
		createSVG:
		while (true) {
			switch (shape.$) {
				case 'Inked':
					var fillClr = shape.a;
					var lt = shape.b;
					var stencil = shape.c;
					var strokeAttrs = function () {
						if (lt.$ === 'Nothing') {
							return _List_Nil;
						} else {
							switch (lt.a.a.$) {
								case 'Solid':
									var _n11 = lt.a;
									var th = _n11.a.a;
									var strokeClr = _n11.b;
									var nonStroke = function () {
										var _n12 = strokeClr;
										var opcty = _n12.d;
										return (th <= 0) || (opcty <= 0);
									}();
									return nonStroke ? _List_Nil : _List_fromArray(
										[
											elm$svg$Svg$Attributes$strokeWidth(
											elm$core$String$fromFloat(th)),
											elm$svg$Svg$Attributes$stroke(
											MacCASOutreach$graphicsvg$GraphicSVG$mkRGB(strokeClr)),
											elm$svg$Svg$Attributes$strokeOpacity(
											MacCASOutreach$graphicsvg$GraphicSVG$mkAlpha(strokeClr))
										]);
								case 'Broken':
									var _n13 = lt.a;
									var _n14 = _n13.a;
									var dashes = _n14.a;
									var th = _n14.b;
									var strokeClr = _n13.b;
									var nonStroke = function () {
										var _n15 = strokeClr;
										var opcty = _n15.d;
										return (th <= 0) || ((opcty <= 0) || A2(
											elm$core$List$all,
											function (_n16) {
												var on = _n16.a;
												return !on;
											},
											dashes));
									}();
									return nonStroke ? _List_Nil : _Utils_ap(
										_List_fromArray(
											[
												elm$svg$Svg$Attributes$strokeWidth(
												elm$core$String$fromFloat(th)),
												elm$svg$Svg$Attributes$stroke(
												MacCASOutreach$graphicsvg$GraphicSVG$mkRGB(strokeClr)),
												elm$svg$Svg$Attributes$strokeOpacity(
												MacCASOutreach$graphicsvg$GraphicSVG$mkAlpha(strokeClr))
											]),
										_List_fromArray(
											[
												elm$svg$Svg$Attributes$strokeDasharray(
												elm$core$String$concat(
													A2(
														elm$core$List$intersperse,
														',',
														A2(elm$core$List$map, MacCASOutreach$graphicsvg$GraphicSVG$pairToString, dashes))))
											]));
								default:
									var _n17 = lt.a;
									var _n18 = _n17.a;
									return _List_Nil;
							}
						}
					}();
					var nonexistBody = function () {
						if (fillClr.$ === 'Nothing') {
							return true;
						} else {
							return false;
						}
					}();
					var clrAttrs = function () {
						if (fillClr.$ === 'Nothing') {
							return _List_fromArray(
								[
									elm$svg$Svg$Attributes$fill('none')
								]);
						} else {
							var bodyClr = fillClr.a;
							return _List_fromArray(
								[
									elm$svg$Svg$Attributes$fill(
									MacCASOutreach$graphicsvg$GraphicSVG$mkRGB(bodyClr)),
									elm$svg$Svg$Attributes$fillOpacity(
									MacCASOutreach$graphicsvg$GraphicSVG$mkAlpha(bodyClr))
								]);
						}
					}();
					var _n1 = trans;
					var _n2 = _n1.a;
					var a = _n2.a;
					var c = _n2.b;
					var tx = _n2.c;
					var _n3 = _n1.b;
					var b = _n3.a;
					var d = _n3.b;
					var ty = _n3.c;
					var transAttrs = _List_fromArray(
						[
							elm$svg$Svg$Attributes$transform(
							'matrix(' + (elm$core$String$concat(
								A2(
									elm$core$List$intersperse,
									',',
									A2(
										elm$core$List$map,
										elm$core$String$fromFloat,
										_List_fromArray(
											[a, -b, c, -d, tx, -ty])))) + ')'))
						]);
					var attrs = _Utils_ap(
						transAttrs,
						_Utils_ap(clrAttrs, strokeAttrs));
					if (nonexistBody && elm$core$List$isEmpty(strokeAttrs)) {
						return A2(elm$svg$Svg$g, _List_Nil, _List_Nil);
					} else {
						switch (stencil.$) {
							case 'Circle':
								var r = stencil.a;
								return A2(
									elm$svg$Svg$circle,
									_Utils_ap(
										_List_fromArray(
											[
												elm$svg$Svg$Attributes$cx('0'),
												elm$svg$Svg$Attributes$cy('0'),
												elm$svg$Svg$Attributes$r(
												elm$core$String$fromFloat(r))
											]),
										attrs),
									_List_Nil);
							case 'Rect':
								var rw = stencil.a;
								var rh = stencil.b;
								return A2(
									elm$svg$Svg$rect,
									_Utils_ap(
										_List_fromArray(
											[
												elm$svg$Svg$Attributes$x(
												elm$core$String$fromFloat((-rw) / 2)),
												elm$svg$Svg$Attributes$y(
												elm$core$String$fromFloat((-rh) / 2)),
												elm$svg$Svg$Attributes$width(
												elm$core$String$fromFloat(rw)),
												elm$svg$Svg$Attributes$height(
												elm$core$String$fromFloat(rh))
											]),
										attrs),
									_List_Nil);
							case 'RoundRect':
								var rw = stencil.a;
								var rh = stencil.b;
								var r = stencil.c;
								return A2(
									elm$svg$Svg$rect,
									_Utils_ap(
										_List_fromArray(
											[
												elm$svg$Svg$Attributes$x(
												elm$core$String$fromFloat((-rw) / 2)),
												elm$svg$Svg$Attributes$y(
												elm$core$String$fromFloat((-rh) / 2)),
												elm$svg$Svg$Attributes$rx(
												elm$core$String$fromFloat(r)),
												elm$svg$Svg$Attributes$ry(
												elm$core$String$fromFloat(r)),
												elm$svg$Svg$Attributes$width(
												elm$core$String$fromFloat(rw)),
												elm$svg$Svg$Attributes$height(
												elm$core$String$fromFloat(rh))
											]),
										attrs),
									_List_Nil);
							case 'Oval':
								var ow = stencil.a;
								var oh = stencil.b;
								return A2(
									elm$svg$Svg$ellipse,
									_Utils_ap(
										_List_fromArray(
											[
												elm$svg$Svg$Attributes$cx('0'),
												elm$svg$Svg$Attributes$cy('0'),
												elm$svg$Svg$Attributes$rx(
												elm$core$String$fromFloat(0.5 * ow)),
												elm$svg$Svg$Attributes$ry(
												elm$core$String$fromFloat(0.5 * oh))
											]),
										attrs),
									_List_Nil);
							case 'Polygon':
								var vertices = stencil.a;
								return A2(
									elm$svg$Svg$polygon,
									_Utils_ap(
										_List_fromArray(
											[
												elm$svg$Svg$Attributes$points(
												elm$core$String$concat(
													A2(
														elm$core$List$intersperse,
														' ',
														A2(elm$core$List$map, MacCASOutreach$graphicsvg$GraphicSVG$pairToString, vertices))))
											]),
										attrs),
									_List_Nil);
							case 'Path':
								var vertices = stencil.a;
								return A2(
									elm$svg$Svg$polyline,
									_Utils_ap(
										_List_fromArray(
											[
												elm$svg$Svg$Attributes$points(
												elm$core$String$concat(
													A2(
														elm$core$List$intersperse,
														' ',
														A2(elm$core$List$map, MacCASOutreach$graphicsvg$GraphicSVG$pairToString, vertices))))
											]),
										attrs),
									_List_Nil);
							case 'BezierPath':
								var start = stencil.a;
								var pts = stencil.b;
								return A2(
									elm$svg$Svg$path,
									_Utils_ap(
										_List_fromArray(
											[
												elm$svg$Svg$Attributes$d(
												A2(MacCASOutreach$graphicsvg$GraphicSVG$createBezierString, start, pts))
											]),
										attrs),
									_List_Nil);
							default:
								var _n5 = stencil.a;
								var si = _n5.a;
								var bo = _n5.b;
								var i = _n5.c;
								var u = _n5.d;
								var s = _n5.e;
								var sel = _n5.f;
								var f = _n5.g;
								var align = _n5.h;
								var str = stencil.b;
								var txtDec = (u && s) ? 'text-decoration: underline line-through;' : (u ? 'text-decoration: underline;' : (s ? 'text-decoration: line-through;' : ''));
								var select = (!sel) ? '-webkit-touch-callout: none;\n-webkit-user-select: none;\n-khtml-user-select: none;\n-moz-user-select: none;\n-ms-user-select: none;\nuser-select: none;cursor: default;' : '';
								var it = i ? 'font-style: italic;' : '';
								var font = function () {
									switch (f.$) {
										case 'Sansserif':
											return 'sans-serif;';
										case 'Serif':
											return 'serif;';
										case 'FixedWidth':
											return 'monospace;';
										default:
											var fStr = f.a;
											return fStr + ';';
									}
								}();
								var bol = bo ? 'font-weight: bold;' : '';
								var sty = bol + (it + (txtDec + ('font-family: ' + (font + select))));
								var anchor = function () {
									switch (align.$) {
										case 'AlignCentred':
											return 'middle';
										case 'AlignLeft':
											return 'start';
										default:
											return 'end';
									}
								}();
								return A2(
									elm$svg$Svg$text_,
									_Utils_ap(
										_List_fromArray(
											[
												elm$svg$Svg$Attributes$x('0'),
												elm$svg$Svg$Attributes$y('0'),
												elm$svg$Svg$Attributes$style(sty),
												elm$svg$Svg$Attributes$fontSize(
												elm$core$String$fromFloat(si)),
												elm$svg$Svg$Attributes$textAnchor(anchor),
												elm$html$Html$Attributes$contenteditable(true)
											]),
										_Utils_ap(
											_List_fromArray(
												[
													elm$svg$Svg$Attributes$transform(
													'matrix(' + (elm$core$String$concat(
														A2(
															elm$core$List$intersperse,
															',',
															A2(
																elm$core$List$map,
																elm$core$String$fromFloat,
																_List_fromArray(
																	[a, -b, -c, d, tx, -ty])))) + ')'))
												]),
											_Utils_ap(
												_List_fromArray(
													[
														elm$svg$Svg$Attributes$xmlSpace('preserve')
													]),
												_Utils_ap(clrAttrs, strokeAttrs)))),
									_List_fromArray(
										[
											elm$svg$Svg$text(str)
										]));
						}
					}
				case 'ForeignObject':
					var fw = shape.a;
					var fh = shape.b;
					var htm = shape.c;
					var _n19 = trans;
					var _n20 = _n19.a;
					var a = _n20.a;
					var c = _n20.b;
					var tx = _n20.c;
					var _n21 = _n19.b;
					var b = _n21.a;
					var d = _n21.b;
					var ty = _n21.c;
					return A2(
						elm$svg$Svg$foreignObject,
						_List_fromArray(
							[
								elm$svg$Svg$Attributes$width(
								elm$core$String$fromFloat(fw)),
								elm$svg$Svg$Attributes$height(
								elm$core$String$fromFloat(fh)),
								elm$svg$Svg$Attributes$transform(
								'matrix(' + (elm$core$String$concat(
									A2(
										elm$core$List$intersperse,
										',',
										A2(
											elm$core$List$map,
											elm$core$String$fromFloat,
											_List_fromArray(
												[a, -b, -c, d, tx, -ty])))) + ')'))
							]),
						_List_fromArray(
							[
								A2(elm$html$Html$map, msgWrapper, htm)
							]));
				case 'Move':
					var v = shape.a;
					var sh = shape.b;
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = A2(MacCASOutreach$graphicsvg$GraphicSVG$moveT, v, trans),
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = sh;
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 'Everything':
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = MacCASOutreach$graphicsvg$GraphicSVG$ident,
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = A2(
						MacCASOutreach$graphicsvg$GraphicSVG$filled,
						MacCASOutreach$graphicsvg$GraphicSVG$white,
						A2(MacCASOutreach$graphicsvg$GraphicSVG$rect, w, h));
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 'Notathing':
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = MacCASOutreach$graphicsvg$GraphicSVG$ident,
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = A2(
						MacCASOutreach$graphicsvg$GraphicSVG$filled,
						MacCASOutreach$graphicsvg$GraphicSVG$black,
						A2(MacCASOutreach$graphicsvg$GraphicSVG$rect, w, h));
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 'Rotate':
					var deg = shape.a;
					var sh = shape.b;
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = A2(MacCASOutreach$graphicsvg$GraphicSVG$rotateT, deg, trans),
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = sh;
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 'Scale':
					var sx = shape.a;
					var sy = shape.b;
					var sh = shape.c;
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = A3(MacCASOutreach$graphicsvg$GraphicSVG$scaleT, sx, sy, trans),
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = sh;
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 'Skew':
					var sx = shape.a;
					var sy = shape.b;
					var sh = shape.c;
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = A3(MacCASOutreach$graphicsvg$GraphicSVG$skewT, sx, sy, trans),
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = sh;
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 'Transformed':
					var tm = shape.a;
					var sh = shape.b;
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = A2(MacCASOutreach$graphicsvg$GraphicSVG$matrixMult, trans, tm),
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = sh;
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 'Link':
					var href = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$a,
						_List_fromArray(
							[
								elm$svg$Svg$Attributes$xlinkHref(href),
								elm$svg$Svg$Attributes$target('_blank')
							]),
						_List_fromArray(
							[
								A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'AlphaMask':
					var region = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$g,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								elm$svg$Svg$defs,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										elm$svg$Svg$mask,
										_List_fromArray(
											[
												elm$svg$Svg$Attributes$id('m' + id)
											]),
										_List_fromArray(
											[
												A7(
												MacCASOutreach$graphicsvg$GraphicSVG$createSVG,
												id + 'm',
												w,
												h,
												trans,
												msgWrapper,
												positionWrapper,
												MacCASOutreach$graphicsvg$GraphicSVG$Group(
													_List_fromArray(
														[
															MacCASOutreach$graphicsvg$GraphicSVG$Everything,
															A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, MacCASOutreach$graphicsvg$GraphicSVG$black, region)
														])))
											]))
									])),
								A2(
								elm$svg$Svg$g,
								_List_fromArray(
									[
										elm$svg$Svg$Attributes$mask('url(#m' + (id + ')'))
									]),
								_List_fromArray(
									[
										A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id + 'mm', w, h, trans, msgWrapper, positionWrapper, sh)
									]))
							]));
				case 'Clip':
					var region = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$g,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								elm$svg$Svg$defs,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										elm$svg$Svg$mask,
										_List_fromArray(
											[
												elm$svg$Svg$Attributes$id('c' + id)
											]),
										_List_fromArray(
											[
												A7(
												MacCASOutreach$graphicsvg$GraphicSVG$createSVG,
												id + 'c',
												w,
												h,
												trans,
												msgWrapper,
												positionWrapper,
												MacCASOutreach$graphicsvg$GraphicSVG$Group(
													_List_fromArray(
														[
															MacCASOutreach$graphicsvg$GraphicSVG$Notathing,
															A2(MacCASOutreach$graphicsvg$GraphicSVG$repaint, MacCASOutreach$graphicsvg$GraphicSVG$white, region)
														])))
											]))
									])),
								A2(
								elm$svg$Svg$g,
								_List_fromArray(
									[
										elm$svg$Svg$Attributes$mask('url(#c' + (id + ')'))
									]),
								_List_fromArray(
									[
										A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id + 'cc', w, h, trans, msgWrapper, positionWrapper, sh)
									]))
							]));
				case 'Tap':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								elm$html$Html$Events$onClick(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'TapAt':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								MacCASOutreach$graphicsvg$GraphicSVG$onTapAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'EnterShape':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								elm$html$Html$Events$onMouseEnter(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'EnterAt':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								MacCASOutreach$graphicsvg$GraphicSVG$onEnterAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'Exit':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								elm$html$Html$Events$onMouseLeave(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'ExitAt':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								MacCASOutreach$graphicsvg$GraphicSVG$onLeaveAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'MouseDown':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								elm$html$Html$Events$onMouseDown(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'MouseDownAt':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								MacCASOutreach$graphicsvg$GraphicSVG$onMouseDownAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'MouseUp':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								elm$html$Html$Events$onMouseUp(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'MouseUpAt':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								MacCASOutreach$graphicsvg$GraphicSVG$onMouseUpAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'MoveOverAt':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								MacCASOutreach$graphicsvg$GraphicSVG$onMoveAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'TouchStart':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								MacCASOutreach$graphicsvg$GraphicSVG$onTouchStart(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'TouchEnd':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								MacCASOutreach$graphicsvg$GraphicSVG$onTouchEnd(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'TouchStartAt':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								MacCASOutreach$graphicsvg$GraphicSVG$onTouchStartAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'TouchEndAt':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								MacCASOutreach$graphicsvg$GraphicSVG$onTouchStartAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'TouchMoveAt':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								MacCASOutreach$graphicsvg$GraphicSVG$onTouchMove(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7(MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'Group':
					var shapes = shape.a;
					return A2(
						elm$svg$Svg$g,
						_List_Nil,
						A2(
							elm$core$List$indexedMap,
							function (n) {
								return A6(
									MacCASOutreach$graphicsvg$GraphicSVG$createSVG,
									id + ('g' + elm$core$String$fromInt(n)),
									w,
									h,
									trans,
									msgWrapper,
									positionWrapper);
							},
							shapes));
				case 'GroupOutline':
					var cmbndshp = shape.a;
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = trans,
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = cmbndshp;
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				default:
					var s = shape.a;
					var th = shape.b;
					var c = shape.c;
					return ((th <= 0) || (_Utils_cmp(s, 2 * th) < 0)) ? A2(elm$svg$Svg$g, _List_Nil, _List_Nil) : A7(
						MacCASOutreach$graphicsvg$GraphicSVG$createSVG,
						id,
						w,
						h,
						trans,
						msgWrapper,
						positionWrapper,
						A4(
							MacCASOutreach$graphicsvg$GraphicSVG$createGraph,
							_Utils_Tuple2(w, h),
							s,
							th,
							c));
			}
		}
	});
var elm$svg$Svg$clipPath = elm$svg$Svg$trustedNode('clipPath');
var MacCASOutreach$graphicsvg$GraphicSVG$Widget$cPath = F3(
	function (id, w, h) {
		return A2(
			elm$svg$Svg$defs,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$svg$Svg$clipPath,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$id('cPath' + id)
						]),
					_List_fromArray(
						[
							A2(
							elm$svg$Svg$rect,
							_List_fromArray(
								[
									elm$svg$Svg$Attributes$width(
									elm$core$String$fromFloat(w)),
									elm$svg$Svg$Attributes$height(
									elm$core$String$fromFloat(h)),
									elm$svg$Svg$Attributes$x(
									elm$core$String$fromFloat((-w) / 2)),
									elm$svg$Svg$Attributes$y(
									elm$core$String$fromFloat((-h) / 2))
								]),
							_List_Nil)
						]))
				]));
	});
var elm$svg$Svg$svg = elm$svg$Svg$trustedNode('svg');
var elm$svg$Svg$Attributes$clipPath = _VirtualDom_attribute('clip-path');
var elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var MacCASOutreach$graphicsvg$GraphicSVG$Widget$icon = F4(
	function (iid, w, h, shapes) {
		return A2(
			elm$svg$Svg$svg,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$viewBox(
					elm$core$String$fromFloat((-w) / 2) + (' ' + (elm$core$String$fromFloat((-h) / 2) + (' ' + (elm$core$String$fromFloat(w) + (' ' + elm$core$String$fromFloat(h))))))),
					elm$svg$Svg$Attributes$id(iid)
				]),
			A2(
				elm$core$List$cons,
				A3(MacCASOutreach$graphicsvg$GraphicSVG$Widget$cPath, iid, w, h),
				_List_fromArray(
					[
						A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								elm$svg$Svg$Attributes$clipPath('url(#cPath' + (iid + ')'))
							]),
						A2(
							elm$core$List$indexedMap,
							function (n) {
								return A6(
									MacCASOutreach$graphicsvg$GraphicSVG$createSVG,
									_Utils_ap(
										iid,
										elm$core$String$fromInt(n)),
									w,
									h,
									MacCASOutreach$graphicsvg$GraphicSVG$ident,
									elm$core$Basics$never,
									F2(
										function (toMsg, xy) {
											return elm$core$Basics$never(
												toMsg(xy));
										}));
							},
							shapes))
					])));
	});
var author$project$MyKeyboardNet$Keys$fromInt = function (num) {
	switch (num) {
		case 0:
			return '1';
		case 1:
			return '2';
		case 2:
			return '3';
		case 3:
			return '4';
		case 4:
			return '5';
		case 5:
			return '6';
		case 6:
			return '7';
		case 7:
			return '8';
		case 8:
			return '9';
		case 9:
			return '0';
		case 10:
			return 'q';
		case 11:
			return 'w';
		case 12:
			return 'e';
		case 13:
			return 'r';
		case 14:
			return 't';
		case 15:
			return 'y';
		case 16:
			return 'u';
		case 17:
			return 'i';
		case 18:
			return 'o';
		case 19:
			return 'p';
		case 20:
			return 'a';
		case 21:
			return 's';
		case 22:
			return 'd';
		case 23:
			return 'f';
		case 24:
			return 'g';
		case 25:
			return 'h';
		case 26:
			return 'j';
		case 27:
			return 'k';
		case 28:
			return 'l';
		case 29:
			return 'z';
		case 30:
			return 'x';
		case 31:
			return 'c';
		case 32:
			return 'v';
		case 33:
			return 'b';
		case 34:
			return 'n';
		case 35:
			return 'm';
		case 36:
			return '!';
		case 37:
			return '@';
		case 38:
			return '$';
		case 39:
			return '%';
		case 40:
			return '^';
		case 41:
			return '&';
		case 42:
			return '*';
		case 43:
			return 'Q';
		case 44:
			return 'W';
		case 45:
			return 'E';
		case 46:
			return 'T';
		case 47:
			return 'Y';
		case 48:
			return 'I';
		case 49:
			return 'O';
		case 50:
			return 'P';
		case 51:
			return 'S';
		case 52:
			return 'D';
		case 53:
			return 'G';
		case 54:
			return 'H';
		case 55:
			return 'J';
		case 56:
			return 'L';
		case 57:
			return 'Z';
		case 58:
			return 'C';
		case 59:
			return 'V';
		case 60:
			return 'B';
		default:
			var otherwise = num;
			return 'this shouldn\'t be here';
	}
};
var author$project$MyKeyboardNet$Static$Types$Keyboard$RollRandomNum = {$: 'RollRandomNum'};
var MacCASOutreach$graphicsvg$GraphicSVG$blue = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 52, 101, 164, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$brown = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 193, 125, 17, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$charcoal = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 85, 87, 83, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$darkBlue = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 32, 74, 135, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$darkBrown = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 143, 89, 2, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$darkCharcoal = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 46, 52, 54, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$darkGray = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 186, 189, 182, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$darkGreen = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 78, 154, 6, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$darkGrey = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 186, 189, 182, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$darkOrange = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 206, 92, 0, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$darkPurple = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 92, 53, 102, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$darkRed = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 164, 0, 0, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$darkYellow = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 196, 160, 0, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$gray = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 211, 215, 207, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$green = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 115, 210, 22, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$grey = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 211, 215, 207, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$lightBlue = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 114, 159, 207, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$lightBrown = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 233, 185, 110, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$lightCharcoal = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 136, 138, 133, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$lightGray = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 238, 238, 236, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$lightGrey = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 238, 238, 236, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$lightOrange = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 252, 175, 62, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$lightPurple = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 173, 127, 168, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$lightRed = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 239, 41, 41, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$lightYellow = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 255, 233, 79, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$orange = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 245, 121, 0, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$pink = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 255, 105, 180, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$purple = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 117, 80, 123, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$red = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 204, 0, 0, 1);
var MacCASOutreach$graphicsvg$GraphicSVG$yellow = A4(MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 237, 212, 0, 1);
var author$project$MyKeyboardNet$View$Keyboard$myColList = _List_fromArray(
	[MacCASOutreach$graphicsvg$GraphicSVG$blue, MacCASOutreach$graphicsvg$GraphicSVG$brown, MacCASOutreach$graphicsvg$GraphicSVG$charcoal, MacCASOutreach$graphicsvg$GraphicSVG$darkBlue, MacCASOutreach$graphicsvg$GraphicSVG$darkBrown, MacCASOutreach$graphicsvg$GraphicSVG$darkCharcoal, MacCASOutreach$graphicsvg$GraphicSVG$darkGray, MacCASOutreach$graphicsvg$GraphicSVG$darkGreen, MacCASOutreach$graphicsvg$GraphicSVG$darkGrey, MacCASOutreach$graphicsvg$GraphicSVG$darkOrange, MacCASOutreach$graphicsvg$GraphicSVG$darkPurple, MacCASOutreach$graphicsvg$GraphicSVG$darkRed, MacCASOutreach$graphicsvg$GraphicSVG$darkYellow, MacCASOutreach$graphicsvg$GraphicSVG$gray, MacCASOutreach$graphicsvg$GraphicSVG$green, MacCASOutreach$graphicsvg$GraphicSVG$grey, MacCASOutreach$graphicsvg$GraphicSVG$hotPink, MacCASOutreach$graphicsvg$GraphicSVG$lightBlue, MacCASOutreach$graphicsvg$GraphicSVG$lightBrown, MacCASOutreach$graphicsvg$GraphicSVG$lightCharcoal, MacCASOutreach$graphicsvg$GraphicSVG$lightGray, MacCASOutreach$graphicsvg$GraphicSVG$lightGreen, MacCASOutreach$graphicsvg$GraphicSVG$lightGrey, MacCASOutreach$graphicsvg$GraphicSVG$lightOrange, MacCASOutreach$graphicsvg$GraphicSVG$lightPurple, MacCASOutreach$graphicsvg$GraphicSVG$lightRed, MacCASOutreach$graphicsvg$GraphicSVG$lightYellow, MacCASOutreach$graphicsvg$GraphicSVG$orange, MacCASOutreach$graphicsvg$GraphicSVG$pink, MacCASOutreach$graphicsvg$GraphicSVG$purple, MacCASOutreach$graphicsvg$GraphicSVG$red, MacCASOutreach$graphicsvg$GraphicSVG$yellow]);
var elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, list);
			var jsArray = _n0.a;
			var remainingItems = _n0.b;
			if (_Utils_cmp(
				elm$core$Elm$JsArray$length(jsArray),
				elm$core$Array$branchFactor) < 0) {
				return A2(
					elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					elm$core$List$cons,
					elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return elm$core$Array$empty;
	} else {
		return A3(elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var elm$core$Array$bitMask = 4294967295 >>> (32 - elm$core$Array$shiftStep);
var elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = elm$core$Array$bitMask & (index >>> shift);
			var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_n0.$ === 'SubTree') {
				var subTree = _n0.a;
				var $temp$shift = shift - elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _n0.a;
				return A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, values);
			}
		}
	});
var elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var elm$core$Array$get = F2(
	function (index, _n0) {
		var len = _n0.a;
		var startShift = _n0.b;
		var tree = _n0.c;
		var tail = _n0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			elm$core$Array$tailIndex(len)) > -1) ? elm$core$Maybe$Just(
			A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, tail)) : elm$core$Maybe$Just(
			A3(elm$core$Array$getHelp, startShift, index, tree)));
	});
var elm$core$Debug$toString = _Debug_toString;
var elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2(elm$core$Dict$map, func, left),
				A2(elm$core$Dict$map, func, right));
		}
	});
var elm$core$Dict$values = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2(elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var rundis$elm_bootstrap$Bootstrap$Internal$Button$Attrs = function (a) {
	return {$: 'Attrs', a: a};
};
var rundis$elm_bootstrap$Bootstrap$Button$attrs = function (attrs_) {
	return rundis$elm_bootstrap$Bootstrap$Internal$Button$Attrs(attrs_);
};
var elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$html$Html$Attributes$disabled = elm$html$Html$Attributes$boolProperty('disabled');
var rundis$elm_bootstrap$Bootstrap$Internal$Button$applyModifier = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 'Size':
				var size = modifier.a;
				return _Utils_update(
					options,
					{
						size: elm$core$Maybe$Just(size)
					});
			case 'Coloring':
				var coloring = modifier.a;
				return _Utils_update(
					options,
					{
						coloring: elm$core$Maybe$Just(coloring)
					});
			case 'Block':
				return _Utils_update(
					options,
					{block: true});
			case 'Disabled':
				var val = modifier.a;
				return _Utils_update(
					options,
					{disabled: val});
			default:
				var attrs = modifier.a;
				return _Utils_update(
					options,
					{
						attributes: _Utils_ap(options.attributes, attrs)
					});
		}
	});
var rundis$elm_bootstrap$Bootstrap$Internal$Button$defaultOptions = {attributes: _List_Nil, block: false, coloring: elm$core$Maybe$Nothing, disabled: false, size: elm$core$Maybe$Nothing};
var rundis$elm_bootstrap$Bootstrap$Internal$Button$roleClass = function (role) {
	switch (role.$) {
		case 'Primary':
			return 'primary';
		case 'Secondary':
			return 'secondary';
		case 'Success':
			return 'success';
		case 'Info':
			return 'info';
		case 'Warning':
			return 'warning';
		case 'Danger':
			return 'danger';
		case 'Dark':
			return 'dark';
		case 'Light':
			return 'light';
		default:
			return 'link';
	}
};
var rundis$elm_bootstrap$Bootstrap$Internal$Button$buttonAttributes = function (modifiers) {
	var options = A3(elm$core$List$foldl, rundis$elm_bootstrap$Bootstrap$Internal$Button$applyModifier, rundis$elm_bootstrap$Bootstrap$Internal$Button$defaultOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2('btn', true),
						_Utils_Tuple2('btn-block', options.block),
						_Utils_Tuple2('disabled', options.disabled)
					])),
				elm$html$Html$Attributes$disabled(options.disabled)
			]),
		_Utils_ap(
			function () {
				var _n0 = A2(elm$core$Maybe$andThen, rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption, options.size);
				if (_n0.$ === 'Just') {
					var s = _n0.a;
					return _List_fromArray(
						[
							elm$html$Html$Attributes$class('btn-' + s)
						]);
				} else {
					return _List_Nil;
				}
			}(),
			_Utils_ap(
				function () {
					var _n1 = options.coloring;
					if (_n1.$ === 'Just') {
						if (_n1.a.$ === 'Roled') {
							var role = _n1.a.a;
							return _List_fromArray(
								[
									elm$html$Html$Attributes$class(
									'btn-' + rundis$elm_bootstrap$Bootstrap$Internal$Button$roleClass(role))
								]);
						} else {
							var role = _n1.a.a;
							return _List_fromArray(
								[
									elm$html$Html$Attributes$class(
									'btn-outline-' + rundis$elm_bootstrap$Bootstrap$Internal$Button$roleClass(role))
								]);
						}
					} else {
						return _List_Nil;
					}
				}(),
				options.attributes)));
};
var rundis$elm_bootstrap$Bootstrap$Button$button = F2(
	function (options, children) {
		return A2(
			elm$html$Html$button,
			rundis$elm_bootstrap$Bootstrap$Internal$Button$buttonAttributes(options),
			children);
	});
var rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring = function (a) {
	return {$: 'Coloring', a: a};
};
var rundis$elm_bootstrap$Bootstrap$Internal$Button$Dark = {$: 'Dark'};
var rundis$elm_bootstrap$Bootstrap$Internal$Button$Roled = function (a) {
	return {$: 'Roled', a: a};
};
var rundis$elm_bootstrap$Bootstrap$Button$dark = rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring(
	rundis$elm_bootstrap$Bootstrap$Internal$Button$Roled(rundis$elm_bootstrap$Bootstrap$Internal$Button$Dark));
var author$project$MyKeyboardNet$View$Keyboard$view = function (_n0) {
	var myDict = _n0.a;
	var myColor = _n0.b;
	var clientKeyColorDict = _n0.c;
	var pC = _n0.d;
	var someCol = 'moccasin';
	var personalCol = function (idx) {
		var _n7 = A2(
			elm$core$Array$get,
			idx,
			elm$core$Array$fromList(author$project$MyKeyboardNet$View$Keyboard$myColList));
		if (_n7.$ === 'Just') {
			var a = _n7.a;
			return a;
		} else {
			var otherwise = _n7;
			return MacCASOutreach$graphicsvg$GraphicSVG$black;
		}
	};
	var myColTupList = A2(elm$core$List$indexedMap, elm$core$Tuple$pair, author$project$MyKeyboardNet$View$Keyboard$myColList);
	var myColPicker = function (idx) {
		var _n6 = A2(elm$core$Dict$get, idx, clientKeyColorDict);
		if (_n6.$ === 'Just') {
			var a = _n6.a;
			return a;
		} else {
			var otherwise = _n6;
			return 0;
		}
	};
	var myCol = function (idx) {
		var _n5 = A2(
			elm$core$Array$get,
			myColPicker(idx),
			elm$core$Array$fromList(author$project$MyKeyboardNet$View$Keyboard$myColList));
		if (_n5.$ === 'Just') {
			var a = _n5.a;
			return a;
		} else {
			var otherwise = _n5;
			return MacCASOutreach$graphicsvg$GraphicSVG$black;
		}
	};
	var divModFive = function (intNum) {
		return _Utils_Tuple2((intNum / 5) | 0, intNum - (5 * ((intNum / 5) | 0)));
	};
	var drawBlackKeys = F2(
		function (idx, state) {
			var _n3 = divModFive(idx);
			var quotient = _n3.a;
			var remainder = _n3.b;
			switch (remainder) {
				case 1:
					return MacCASOutreach$graphicsvg$GraphicSVG$group(
						_List_fromArray(
							[
								A2(
								MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(((-170) + 5) + (70 * (quotient - 7)), 10),
								A2(
									MacCASOutreach$graphicsvg$GraphicSVG$filled,
									state ? myCol(idx) : MacCASOutreach$graphicsvg$GraphicSVG$black,
									A3(MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 5, 40, 0.3))),
								A2(
								MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(((-171) + 5) + (70 * (quotient - 7)), -5),
								A2(
									MacCASOutreach$graphicsvg$GraphicSVG$filled,
									A3(MacCASOutreach$graphicsvg$GraphicSVG$rgb, 255, 255, 255),
									A2(
										MacCASOutreach$graphicsvg$GraphicSVG$size,
										4,
										MacCASOutreach$graphicsvg$GraphicSVG$text(
											author$project$MyKeyboardNet$Keys$fromInt(idx)))))
							]));
				case 2:
					return MacCASOutreach$graphicsvg$GraphicSVG$group(
						_List_fromArray(
							[
								A2(
								MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(((-170) + 15) + (70 * (quotient - 7)), 10),
								A2(
									MacCASOutreach$graphicsvg$GraphicSVG$filled,
									state ? myCol(idx) : MacCASOutreach$graphicsvg$GraphicSVG$black,
									A3(MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 5, 40, 0.3))),
								A2(
								MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(((-171) + 15) + (70 * (quotient - 7)), -5),
								A2(
									MacCASOutreach$graphicsvg$GraphicSVG$filled,
									A3(MacCASOutreach$graphicsvg$GraphicSVG$rgb, 255, 255, 255),
									A2(
										MacCASOutreach$graphicsvg$GraphicSVG$size,
										4,
										MacCASOutreach$graphicsvg$GraphicSVG$text(
											author$project$MyKeyboardNet$Keys$fromInt(idx)))))
							]));
				case 3:
					return MacCASOutreach$graphicsvg$GraphicSVG$group(
						_List_fromArray(
							[
								A2(
								MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(((-170) + 35) + (70 * (quotient - 7)), 10),
								A2(
									MacCASOutreach$graphicsvg$GraphicSVG$filled,
									state ? myCol(idx) : MacCASOutreach$graphicsvg$GraphicSVG$black,
									A3(MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 5, 40, 0.3))),
								A2(
								MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(((-171) + 35) + (70 * (quotient - 7)), -5),
								A2(
									MacCASOutreach$graphicsvg$GraphicSVG$filled,
									A3(MacCASOutreach$graphicsvg$GraphicSVG$rgb, 255, 255, 255),
									A2(
										MacCASOutreach$graphicsvg$GraphicSVG$size,
										4,
										MacCASOutreach$graphicsvg$GraphicSVG$text(
											author$project$MyKeyboardNet$Keys$fromInt(idx)))))
							]));
				case 4:
					return MacCASOutreach$graphicsvg$GraphicSVG$group(
						_List_fromArray(
							[
								A2(
								MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(((-170) + 45) + (70 * (quotient - 7)), 10),
								A2(
									MacCASOutreach$graphicsvg$GraphicSVG$filled,
									state ? myCol(idx) : MacCASOutreach$graphicsvg$GraphicSVG$black,
									A3(MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 5, 40, 0.3))),
								A2(
								MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(((-171) + 45) + (70 * (quotient - 7)), -5),
								A2(
									MacCASOutreach$graphicsvg$GraphicSVG$filled,
									A3(MacCASOutreach$graphicsvg$GraphicSVG$rgb, 255, 255, 255),
									A2(
										MacCASOutreach$graphicsvg$GraphicSVG$size,
										4,
										MacCASOutreach$graphicsvg$GraphicSVG$text(
											author$project$MyKeyboardNet$Keys$fromInt(idx)))))
							]));
				case 0:
					return MacCASOutreach$graphicsvg$GraphicSVG$group(
						_List_fromArray(
							[
								A2(
								MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(((-170) + 55) + (70 * (quotient - 7)), 10),
								A2(
									MacCASOutreach$graphicsvg$GraphicSVG$filled,
									state ? myCol(idx) : MacCASOutreach$graphicsvg$GraphicSVG$black,
									A3(MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 5, 40, 0.3))),
								A2(
								MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(((-171) + 55) + (70 * (quotient - 7)), -5),
								A2(
									MacCASOutreach$graphicsvg$GraphicSVG$filled,
									A3(MacCASOutreach$graphicsvg$GraphicSVG$rgb, 255, 255, 255),
									A2(
										MacCASOutreach$graphicsvg$GraphicSVG$size,
										4,
										MacCASOutreach$graphicsvg$GraphicSVG$text(
											author$project$MyKeyboardNet$Keys$fromInt(idx)))))
							]));
				default:
					var otherwise = remainder;
					return A2(
						MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(0, 0),
						A2(
							MacCASOutreach$graphicsvg$GraphicSVG$filled,
							state ? MacCASOutreach$graphicsvg$GraphicSVG$hotPink : MacCASOutreach$graphicsvg$GraphicSVG$hotPink,
							A3(MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 25, 25, 0.3)));
			}
		});
	var drawFunc = F2(
		function (idx, state) {
			switch (idx) {
				case 36:
					return A2(drawBlackKeys, idx, state);
				case 37:
					return A2(drawBlackKeys, idx, state);
				case 38:
					return A2(drawBlackKeys, idx, state);
				case 39:
					return A2(drawBlackKeys, idx, state);
				case 40:
					return A2(drawBlackKeys, idx, state);
				case 41:
					return A2(drawBlackKeys, idx, state);
				case 42:
					return A2(drawBlackKeys, idx, state);
				case 43:
					return A2(drawBlackKeys, idx, state);
				case 44:
					return A2(drawBlackKeys, idx, state);
				case 45:
					return A2(drawBlackKeys, idx, state);
				case 46:
					return A2(drawBlackKeys, idx, state);
				case 47:
					return A2(drawBlackKeys, idx, state);
				case 48:
					return A2(drawBlackKeys, idx, state);
				case 49:
					return A2(drawBlackKeys, idx, state);
				case 50:
					return A2(drawBlackKeys, idx, state);
				case 51:
					return A2(drawBlackKeys, idx, state);
				case 52:
					return A2(drawBlackKeys, idx, state);
				case 53:
					return A2(drawBlackKeys, idx, state);
				case 54:
					return A2(drawBlackKeys, idx, state);
				case 55:
					return A2(drawBlackKeys, idx, state);
				case 56:
					return A2(drawBlackKeys, idx, state);
				case 57:
					return A2(drawBlackKeys, idx, state);
				case 58:
					return A2(drawBlackKeys, idx, state);
				case 59:
					return A2(drawBlackKeys, idx, state);
				case 60:
					return A2(drawBlackKeys, idx, state);
				default:
					var otherwise = idx;
					return MacCASOutreach$graphicsvg$GraphicSVG$group(
						_List_fromArray(
							[
								A3(
								MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
								MacCASOutreach$graphicsvg$GraphicSVG$solid(0.42),
								MacCASOutreach$graphicsvg$GraphicSVG$black,
								A2(
									MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2((-170) + (10 * idx), 0.0),
									A2(
										MacCASOutreach$graphicsvg$GraphicSVG$filled,
										state ? myCol(idx) : A3(MacCASOutreach$graphicsvg$GraphicSVG$rgb, 237, 237, 237),
										A3(MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 10, 60, 0.7)))),
								A2(
								MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2((-171) + (9.99 * idx), -25),
								A2(
									MacCASOutreach$graphicsvg$GraphicSVG$filled,
									MacCASOutreach$graphicsvg$GraphicSVG$black,
									A2(
										MacCASOutreach$graphicsvg$GraphicSVG$size,
										4,
										MacCASOutreach$graphicsvg$GraphicSVG$text(
											author$project$MyKeyboardNet$Keys$fromInt(idx)))))
							]));
			}
		});
	var myViewFn = function () {
		var myList = MacCASOutreach$graphicsvg$GraphicSVG$group(
			elm$core$Dict$values(
				A2(elm$core$Dict$map, drawFunc, myDict)));
		var myView = _List_fromArray(
			[
				A2(
				MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-65, 30),
				A3(
					MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
					MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
					MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2(
						MacCASOutreach$graphicsvg$GraphicSVG$filled,
						personalCol(myColor),
						A2(
							MacCASOutreach$graphicsvg$GraphicSVG$customFont,
							'Arial',
							A2(
								MacCASOutreach$graphicsvg$GraphicSVG$size,
								36,
								MacCASOutreach$graphicsvg$GraphicSVG$text('Piano RT')))))),
				A2(
				MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-5, -25),
				myList),
				A2(
				MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(90, 15),
				A2(
					MacCASOutreach$graphicsvg$GraphicSVG$filled,
					MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2(
						MacCASOutreach$graphicsvg$GraphicSVG$size,
						8,
						MacCASOutreach$graphicsvg$GraphicSVG$text(
							'Player Counter: ' + elm$core$Debug$toString(pC)))))
			]);
		var myHtmlMsg = elm$html$Html$text('Randomise Color!!');
		var myButton = MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-15, 0),
					A2(
						MacCASOutreach$graphicsvg$GraphicSVG$filled,
						MacCASOutreach$graphicsvg$GraphicSVG$lightGreen,
						A2(
							MacCASOutreach$graphicsvg$GraphicSVG$customFont,
							'Arial',
							A2(
								MacCASOutreach$graphicsvg$GraphicSVG$size,
								4,
								MacCASOutreach$graphicsvg$GraphicSVG$text('Randomise Colors!!'))))),
					A2(
					MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(1.42, 1),
					A3(
						MacCASOutreach$graphicsvg$GraphicSVG$outlined,
						MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
						MacCASOutreach$graphicsvg$GraphicSVG$lightGreen,
						A3(MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 42, 8, 1)))
				]));
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'margin-left', 'auto'),
					A2(elm$html$Html$Attributes$style, 'margin-right', 'auto'),
					A2(elm$html$Html$Attributes$style, 'background-color', someCol)
				]),
			_List_fromArray(
				[
					A4(MacCASOutreach$graphicsvg$GraphicSVG$Widget$icon, 'myKeyboard', 400, 140, myView),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$style, 'width', '8%'),
							A2(elm$html$Html$Attributes$style, 'margin-left', 'auto'),
							A2(elm$html$Html$Attributes$style, 'margin-right', 'auto'),
							A2(elm$html$Html$Attributes$style, 'background-color', someCol)
						]),
					_List_fromArray(
						[
							A2(
							rundis$elm_bootstrap$Bootstrap$Button$button,
							_List_fromArray(
								[
									rundis$elm_bootstrap$Bootstrap$Button$dark,
									rundis$elm_bootstrap$Bootstrap$Button$attrs(
									_List_fromArray(
										[
											elm$html$Html$Events$onClick(author$project$MyKeyboardNet$Static$Types$Keyboard$RollRandomNum)
										]))
								]),
							_List_fromArray(
								[myHtmlMsg]))
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$style, 'height', '18%'),
							A2(elm$html$Html$Attributes$style, 'background-color', someCol)
						]),
					_List_Nil)
				]));
	}();
	var colorPicker = function (_n1) {
		var idx = _n1.a;
		var col = _n1.b;
		return A2(
			MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(8 * idx, 0),
			A2(
				MacCASOutreach$graphicsvg$GraphicSVG$filled,
				col,
				MacCASOutreach$graphicsvg$GraphicSVG$square(8)));
	};
	return myViewFn;
};
var author$project$MyKeyboardNet$Static$View$view = function (ns) {
	var m = ns.a;
	return A2(
		elm$html$Html$map,
		author$project$MyKeyboardNet$Static$Wrappers$Keyboard$unwrap,
		author$project$MyKeyboardNet$View$Keyboard$view(m));
};
var author$project$Static$View$view = function (model) {
	var m = model.a;
	return A2(
		elm$html$Html$map,
		author$project$Static$Types$MyKeyboardNetTrans,
		author$project$MyKeyboardNet$Static$View$view(m));
};
var author$project$Main$view = function (model) {
	return {
		body: _Utils_ap(
			function () {
				var _n0 = model.connectionState;
				switch (_n0.$) {
					case 'NotConnected':
						return _List_fromArray(
							[
								elm$html$Html$text('Connecting to server....'),
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Events$onClick(author$project$Main$WSConnect)
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Attempt Reconnection')
									]))
							]);
					case 'ConnectionClosed':
						return _List_fromArray(
							[
								elm$html$Html$text('Lost connection. Reconnecting....'),
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Events$onClick(author$project$Main$WSConnect)
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Attempt Reconnection')
									]))
							]);
					default:
						return _List_fromArray(
							[
								A2(
								elm$html$Html$map,
								author$project$Main$OutgoingTrans,
								author$project$Static$View$view(model.appModel))
							]);
				}
			}(),
			_List_fromArray(
				[
					author$project$Main$alert(model)
				])),
		title: author$project$Static$View$title(model.appModel)
	};
};
var elm$browser$Browser$application = _Browser_application;
var author$project$Main$main = elm$browser$Browser$application(
	{init: author$project$Main$init, onUrlChange: author$project$Main$NewUrlChange, onUrlRequest: author$project$Main$NewUrlRequest, subscriptions: author$project$Main$subscriptions, update: author$project$Main$update, view: author$project$Main$view});
_Platform_export({'Main':{'init':author$project$Main$main(elm$json$Json$Decode$value)(0)}});}(this));