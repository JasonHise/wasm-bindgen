(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./wasm_in_wasm.js":
/*!*************************!*\
  !*** ./wasm_in_wasm.js ***!
  \*************************/
/*! exports provided: __wbg_log_993ce57de1915a59, run, __wbg_new_39b60c49dcceb5de, __wbg_exports_6749c2ad98e8167f, __wbg_new_9d53b2f1d59408bc, __wbg_instanceof_Memory_8d96eafbe3d5ec19, __wbg_buffer_c6180b818cf4d37e, __wbg_grow_b9e4fa548b3a0bc0, __wbg_instanceof_Function_421dc24345d3cb0a, __wbg_call_97b5f932edfb8011, __wbg_new_d1ece8a1c42feb00, __wbg_get_2e4828201151a11f, __wbg_new_fb3c8708344cdbe0, __wbg_subarray_aef47917ec2f58bb, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbindgen_number_new, __wbindgen_number_get, __wbindgen_is_null, __wbindgen_is_undefined, __wbindgen_boolean_get, __wbindgen_is_symbol, __wbindgen_string_get, __wbindgen_memory, __wbindgen_rethrow, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, TextEncoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_993ce57de1915a59\", function() { return __wbg_log_993ce57de1915a59; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_39b60c49dcceb5de\", function() { return __wbg_new_39b60c49dcceb5de; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_exports_6749c2ad98e8167f\", function() { return __wbg_exports_6749c2ad98e8167f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_9d53b2f1d59408bc\", function() { return __wbg_new_9d53b2f1d59408bc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Memory_8d96eafbe3d5ec19\", function() { return __wbg_instanceof_Memory_8d96eafbe3d5ec19; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_c6180b818cf4d37e\", function() { return __wbg_buffer_c6180b818cf4d37e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_grow_b9e4fa548b3a0bc0\", function() { return __wbg_grow_b9e4fa548b3a0bc0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Function_421dc24345d3cb0a\", function() { return __wbg_instanceof_Function_421dc24345d3cb0a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_97b5f932edfb8011\", function() { return __wbg_call_97b5f932edfb8011; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_d1ece8a1c42feb00\", function() { return __wbg_new_d1ece8a1c42feb00; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_get_2e4828201151a11f\", function() { return __wbg_get_2e4828201151a11f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_fb3c8708344cdbe0\", function() { return __wbg_new_fb3c8708344cdbe0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_subarray_aef47917ec2f58bb\", function() { return __wbg_subarray_aef47917ec2f58bb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_new\", function() { return __wbindgen_number_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_get\", function() { return __wbindgen_number_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_null\", function() { return __wbindgen_is_null; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_boolean_get\", function() { return __wbindgen_boolean_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_symbol\", function() { return __wbindgen_is_symbol; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return __wbindgen_string_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return __wbindgen_memory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_in_wasm_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_in_wasm_bg */ \"./wasm_in_wasm_bg.wasm\");\n/* tslint:disable */\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _wasm_in_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_wasm_in_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbg_log_993ce57de1915a59(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    console.log(varg0);\n}\n/**\n* @returns {void}\n*/\nfunction run() {\n    return _wasm_in_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _wasm_in_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_wasm_in_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nconst slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];\n\nlet slab_next = slab.length;\n\nfunction addHeapObject(obj) {\n    if (slab_next === slab.length) slab.push(slab.length + 1);\n    const idx = slab_next;\n    const next = slab[idx];\n\n    slab_next = next;\n\n    slab[idx] = { obj, cnt: 1 };\n    return idx << 1;\n}\n\nconst stack = [];\n\nfunction getObject(idx) {\n    if ((idx & 1) === 1) {\n        return stack[idx >> 1];\n    } else {\n        const val = slab[idx >> 1];\n\n        return val.obj;\n\n    }\n}\n\nfunction __wbg_new_39b60c49dcceb5de(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(new WebAssembly.Instance(getObject(arg0), getObject(arg1)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __wbg_exports_6749c2ad98e8167f(arg0) {\n    return addHeapObject(getObject(arg0).exports);\n}\n\nfunction __wbg_new_9d53b2f1d59408bc(arg0, exnptr) {\n    try {\n        return addHeapObject(new WebAssembly.Module(getObject(arg0)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __wbg_instanceof_Memory_8d96eafbe3d5ec19(idx) {\n    return getObject(idx) instanceof WebAssembly.Memory ? 1 : 0;\n}\n\nfunction __wbg_buffer_c6180b818cf4d37e(arg0) {\n    return addHeapObject(getObject(arg0).buffer);\n}\n\nfunction __wbg_grow_b9e4fa548b3a0bc0(arg0, arg1) {\n    return getObject(arg0).grow(arg1);\n}\n\nfunction __wbg_instanceof_Function_421dc24345d3cb0a(idx) {\n    return getObject(idx) instanceof Function ? 1 : 0;\n}\n\nfunction __wbg_call_97b5f932edfb8011(arg0, arg1, arg2, arg3, exnptr) {\n    try {\n        return addHeapObject(getObject(arg0).call(getObject(arg1), getObject(arg2), getObject(arg3)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __wbg_new_d1ece8a1c42feb00() {\n    return addHeapObject(new Object());\n}\n\nfunction __wbg_get_2e4828201151a11f(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(Reflect.get(getObject(arg0), getObject(arg1)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __wbg_new_fb3c8708344cdbe0(arg0) {\n    return addHeapObject(new Uint8Array(getObject(arg0)));\n}\n\nfunction __wbg_subarray_aef47917ec2f58bb(arg0, arg1, arg2) {\n    return addHeapObject(getObject(arg0).subarray(arg1, arg2));\n}\n\nfunction dropRef(idx) {\n\n    idx = idx >> 1;\n    if (idx < 4) return;\n    let obj = slab[idx];\n\n    obj.cnt -= 1;\n    if (obj.cnt > 0) return;\n\n    // If we hit 0 then free up our space in the slab\n    slab[idx] = slab_next;\n    slab_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) {\n    dropRef(i);\n}\n\nfunction __wbindgen_string_new(p, l) {\n    return addHeapObject(getStringFromWasm(p, l));\n}\n\nfunction __wbindgen_number_new(i) {\n    return addHeapObject(i);\n}\n\nfunction __wbindgen_number_get(n, invalid) {\n    let obj = getObject(n);\n    if (typeof(obj) === 'number') return obj;\n    getUint8Memory()[invalid] = 1;\n    return 0;\n}\n\nfunction __wbindgen_is_null(idx) {\n    return getObject(idx) === null ? 1 : 0;\n}\n\nfunction __wbindgen_is_undefined(idx) {\n    return getObject(idx) === undefined ? 1 : 0;\n}\n\nfunction __wbindgen_boolean_get(i) {\n    let v = getObject(i);\n    if (typeof(v) === 'boolean') {\n        return v ? 1 : 0;\n    } else {\n        return 2;\n    }\n}\n\nfunction __wbindgen_is_symbol(i) {\n    return typeof(getObject(i)) === 'symbol' ? 1 : 0;\n}\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passStringToWasm(arg) {\n\n    const buf = cachedTextEncoder.encode(arg);\n    const ptr = _wasm_in_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    WASM_VECTOR_LEN = buf.length;\n    return ptr;\n}\n\nfunction __wbindgen_string_get(i, len_ptr) {\n    let obj = getObject(i);\n    if (typeof(obj) !== 'string') return 0;\n    const ptr = passStringToWasm(obj);\n    getUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;\n    return ptr;\n}\n\nfunction __wbindgen_memory() {\n    return addHeapObject(_wasm_in_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"]);\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropRef(idx);\n    return ret;\n}\n\nfunction __wbindgen_rethrow(idx) { throw takeObject(idx); }\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"]))\n\n//# sourceURL=webpack:///./wasm_in_wasm.js?");

/***/ }),

/***/ "./wasm_in_wasm_bg.wasm":
/*!******************************!*\
  !*** ./wasm_in_wasm_bg.wasm ***!
  \******************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, run, __wbindgen_malloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_in_wasm */ \"./wasm_in_wasm.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./wasm_in_wasm_bg.wasm?");

/***/ })

}]);