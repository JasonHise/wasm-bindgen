(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./webgl.js":
/*!******************!*\
  !*** ./webgl.js ***!
  \******************/
/*! exports provided: draw, __widl_f_get_element_by_id_Document, __widl_instanceof_HTMLCanvasElement, __widl_f_get_context_HTMLCanvasElement, __widl_instanceof_WebGLRenderingContext, __widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext, __widl_f_attach_shader_WebGLRenderingContext, __widl_f_bind_buffer_WebGLRenderingContext, __widl_f_clear_WebGLRenderingContext, __widl_f_clear_color_WebGLRenderingContext, __widl_f_compile_shader_WebGLRenderingContext, __widl_f_create_buffer_WebGLRenderingContext, __widl_f_create_program_WebGLRenderingContext, __widl_f_create_shader_WebGLRenderingContext, __widl_f_draw_arrays_WebGLRenderingContext, __widl_f_enable_vertex_attrib_array_WebGLRenderingContext, __widl_f_get_program_info_log_WebGLRenderingContext, __widl_f_get_program_parameter_WebGLRenderingContext, __widl_f_get_shader_info_log_WebGLRenderingContext, __widl_f_get_shader_parameter_WebGLRenderingContext, __widl_f_link_program_WebGLRenderingContext, __widl_f_shader_source_WebGLRenderingContext, __widl_f_use_program_WebGLRenderingContext, __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext, __widl_instanceof_Window, __widl_f_document_Window, __wbg_instanceof_Memory_8d96eafbe3d5ec19, __wbg_buffer_c6180b818cf4d37e, __wbg_new_e14ec71e4d9dd19f, __wbg_subarray_ba065313e6f98a80, __wbg_newnoargs_96cbdf0d056b2fa8, __wbg_call_ee8306f6b79399de, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbindgen_boolean_get, __wbindgen_memory, __wbindgen_rethrow, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, TextEncoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw\", function() { return draw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_element_by_id_Document\", function() { return __widl_f_get_element_by_id_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_HTMLCanvasElement\", function() { return __widl_instanceof_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_context_HTMLCanvasElement\", function() { return __widl_f_get_context_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_WebGLRenderingContext\", function() { return __widl_instanceof_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext\", function() { return __widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_attach_shader_WebGLRenderingContext\", function() { return __widl_f_attach_shader_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_bind_buffer_WebGLRenderingContext\", function() { return __widl_f_bind_buffer_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_clear_WebGLRenderingContext\", function() { return __widl_f_clear_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_clear_color_WebGLRenderingContext\", function() { return __widl_f_clear_color_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_compile_shader_WebGLRenderingContext\", function() { return __widl_f_compile_shader_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_create_buffer_WebGLRenderingContext\", function() { return __widl_f_create_buffer_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_create_program_WebGLRenderingContext\", function() { return __widl_f_create_program_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_create_shader_WebGLRenderingContext\", function() { return __widl_f_create_shader_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_draw_arrays_WebGLRenderingContext\", function() { return __widl_f_draw_arrays_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_enable_vertex_attrib_array_WebGLRenderingContext\", function() { return __widl_f_enable_vertex_attrib_array_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_program_info_log_WebGLRenderingContext\", function() { return __widl_f_get_program_info_log_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_program_parameter_WebGLRenderingContext\", function() { return __widl_f_get_program_parameter_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_shader_info_log_WebGLRenderingContext\", function() { return __widl_f_get_shader_info_log_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_shader_parameter_WebGLRenderingContext\", function() { return __widl_f_get_shader_parameter_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_link_program_WebGLRenderingContext\", function() { return __widl_f_link_program_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_shader_source_WebGLRenderingContext\", function() { return __widl_f_shader_source_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_use_program_WebGLRenderingContext\", function() { return __widl_f_use_program_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext\", function() { return __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Window\", function() { return __widl_instanceof_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_document_Window\", function() { return __widl_f_document_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Memory_8d96eafbe3d5ec19\", function() { return __wbg_instanceof_Memory_8d96eafbe3d5ec19; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_c6180b818cf4d37e\", function() { return __wbg_buffer_c6180b818cf4d37e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_e14ec71e4d9dd19f\", function() { return __wbg_new_e14ec71e4d9dd19f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_subarray_ba065313e6f98a80\", function() { return __wbg_subarray_ba065313e6f98a80; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_96cbdf0d056b2fa8\", function() { return __wbg_newnoargs_96cbdf0d056b2fa8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_ee8306f6b79399de\", function() { return __wbg_call_ee8306f6b79399de; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_boolean_get\", function() { return __wbindgen_boolean_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return __wbindgen_memory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _webgl_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl_bg */ \"./webgl_bg.wasm\");\n/* tslint:disable */\n\n\n/**\n* @returns {void}\n*/\nfunction draw() {\n    return _webgl_bg__WEBPACK_IMPORTED_MODULE_0__[\"draw\"]();\n}\n\nconst stack = [];\n\nconst slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];\n\nfunction getObject(idx) {\n    if ((idx & 1) === 1) {\n        return stack[idx >> 1];\n    } else {\n        const val = slab[idx >> 1];\n\n        return val.obj;\n\n    }\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _webgl_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_webgl_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nlet slab_next = slab.length;\n\nfunction addHeapObject(obj) {\n    if (slab_next === slab.length) slab.push(slab.length + 1);\n    const idx = slab_next;\n    const next = slab[idx];\n\n    slab_next = next;\n\n    slab[idx] = { obj, cnt: 1 };\n    return idx << 1;\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nconst __widl_f_get_element_by_id_Document_target = typeof Document === 'undefined' ? null : Document.prototype.getElementById || function() {\n    throw new Error(`wasm-bindgen: Document.getElementById does not exist`);\n};\n\nfunction __widl_f_get_element_by_id_Document(arg0, arg1, arg2) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n\n    const val = __widl_f_get_element_by_id_Document_target.call(getObject(arg0), varg1);\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nfunction __widl_instanceof_HTMLCanvasElement(idx) {\n    return getObject(idx) instanceof HTMLCanvasElement ? 1 : 0;\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _webgl_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_webgl_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nconst __widl_f_get_context_HTMLCanvasElement_target = typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype.getContext || function() {\n    throw new Error(`wasm-bindgen: HTMLCanvasElement.getContext does not exist`);\n};\n\nfunction __widl_f_get_context_HTMLCanvasElement(arg0, arg1, arg2, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n\n        const val = __widl_f_get_context_HTMLCanvasElement_target.call(getObject(arg0), varg1);\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_instanceof_WebGLRenderingContext(idx) {\n    return getObject(idx) instanceof WebGLRenderingContext ? 1 : 0;\n}\n\nconst __widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.bufferData || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.bufferData does not exist`);\n};\n\nfunction __widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext(arg0, arg1, arg2, arg3) {\n    __widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext_target.call(getObject(arg0), arg1, getObject(arg2), arg3);\n}\n\nconst __widl_f_attach_shader_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.attachShader || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.attachShader does not exist`);\n};\n\nfunction __widl_f_attach_shader_WebGLRenderingContext(arg0, arg1, arg2) {\n    __widl_f_attach_shader_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), getObject(arg2));\n}\n\nconst __widl_f_bind_buffer_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.bindBuffer || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.bindBuffer does not exist`);\n};\n\nfunction __widl_f_bind_buffer_WebGLRenderingContext(arg0, arg1, arg2) {\n    __widl_f_bind_buffer_WebGLRenderingContext_target.call(getObject(arg0), arg1, getObject(arg2));\n}\n\nconst __widl_f_clear_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.clear || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.clear does not exist`);\n};\n\nfunction __widl_f_clear_WebGLRenderingContext(arg0, arg1) {\n    __widl_f_clear_WebGLRenderingContext_target.call(getObject(arg0), arg1);\n}\n\nconst __widl_f_clear_color_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.clearColor || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.clearColor does not exist`);\n};\n\nfunction __widl_f_clear_color_WebGLRenderingContext(arg0, arg1, arg2, arg3, arg4) {\n    __widl_f_clear_color_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2, arg3, arg4);\n}\n\nconst __widl_f_compile_shader_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.compileShader || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.compileShader does not exist`);\n};\n\nfunction __widl_f_compile_shader_WebGLRenderingContext(arg0, arg1) {\n    __widl_f_compile_shader_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1));\n}\n\nconst __widl_f_create_buffer_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.createBuffer || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.createBuffer does not exist`);\n};\n\nfunction __widl_f_create_buffer_WebGLRenderingContext(arg0) {\n\n    const val = __widl_f_create_buffer_WebGLRenderingContext_target.call(getObject(arg0));\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nconst __widl_f_create_program_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.createProgram || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.createProgram does not exist`);\n};\n\nfunction __widl_f_create_program_WebGLRenderingContext(arg0) {\n\n    const val = __widl_f_create_program_WebGLRenderingContext_target.call(getObject(arg0));\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nconst __widl_f_create_shader_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.createShader || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.createShader does not exist`);\n};\n\nfunction __widl_f_create_shader_WebGLRenderingContext(arg0, arg1) {\n\n    const val = __widl_f_create_shader_WebGLRenderingContext_target.call(getObject(arg0), arg1);\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nconst __widl_f_draw_arrays_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.drawArrays || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.drawArrays does not exist`);\n};\n\nfunction __widl_f_draw_arrays_WebGLRenderingContext(arg0, arg1, arg2, arg3) {\n    __widl_f_draw_arrays_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2, arg3);\n}\n\nconst __widl_f_enable_vertex_attrib_array_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.enableVertexAttribArray || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.enableVertexAttribArray does not exist`);\n};\n\nfunction __widl_f_enable_vertex_attrib_array_WebGLRenderingContext(arg0, arg1) {\n    __widl_f_enable_vertex_attrib_array_WebGLRenderingContext_target.call(getObject(arg0), arg1);\n}\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passStringToWasm(arg) {\n\n    const buf = cachedTextEncoder.encode(arg);\n    const ptr = _webgl_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    WASM_VECTOR_LEN = buf.length;\n    return ptr;\n}\n\nconst __widl_f_get_program_info_log_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.getProgramInfoLog || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.getProgramInfoLog does not exist`);\n};\n\nfunction __widl_f_get_program_info_log_WebGLRenderingContext(ret, arg0, arg1) {\n    const val = __widl_f_get_program_info_log_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1));\n    const retptr = isLikeNone(val) ? [0, 0] : passStringToWasm(val);\n    const retlen = WASM_VECTOR_LEN;\n    const mem = getUint32Memory();\n    mem[ret / 4] = retptr;\n    mem[ret / 4 + 1] = retlen;\n\n}\n\nconst __widl_f_get_program_parameter_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.getProgramParameter || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.getProgramParameter does not exist`);\n};\n\nfunction __widl_f_get_program_parameter_WebGLRenderingContext(arg0, arg1, arg2) {\n    return addHeapObject(__widl_f_get_program_parameter_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), arg2));\n}\n\nconst __widl_f_get_shader_info_log_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.getShaderInfoLog || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.getShaderInfoLog does not exist`);\n};\n\nfunction __widl_f_get_shader_info_log_WebGLRenderingContext(ret, arg0, arg1) {\n    const val = __widl_f_get_shader_info_log_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1));\n    const retptr = isLikeNone(val) ? [0, 0] : passStringToWasm(val);\n    const retlen = WASM_VECTOR_LEN;\n    const mem = getUint32Memory();\n    mem[ret / 4] = retptr;\n    mem[ret / 4 + 1] = retlen;\n\n}\n\nconst __widl_f_get_shader_parameter_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.getShaderParameter || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.getShaderParameter does not exist`);\n};\n\nfunction __widl_f_get_shader_parameter_WebGLRenderingContext(arg0, arg1, arg2) {\n    return addHeapObject(__widl_f_get_shader_parameter_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), arg2));\n}\n\nconst __widl_f_link_program_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.linkProgram || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.linkProgram does not exist`);\n};\n\nfunction __widl_f_link_program_WebGLRenderingContext(arg0, arg1) {\n    __widl_f_link_program_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1));\n}\n\nconst __widl_f_shader_source_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.shaderSource || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.shaderSource does not exist`);\n};\n\nfunction __widl_f_shader_source_WebGLRenderingContext(arg0, arg1, arg2, arg3) {\n    let varg2 = getStringFromWasm(arg2, arg3);\n    __widl_f_shader_source_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), varg2);\n}\n\nconst __widl_f_use_program_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.useProgram || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.useProgram does not exist`);\n};\n\nfunction __widl_f_use_program_WebGLRenderingContext(arg0, arg1) {\n    __widl_f_use_program_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1));\n}\n\nconst __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.vertexAttribPointer || function() {\n    throw new Error(`wasm-bindgen: WebGLRenderingContext.vertexAttribPointer does not exist`);\n};\n\nfunction __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {\n    __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2, arg3, arg4 !== 0, arg5, arg6);\n}\n\nfunction __widl_instanceof_Window(idx) {\n    return getObject(idx) instanceof Window ? 1 : 0;\n}\n\nfunction __widl_f_document_Window(arg0) {\n\n    const val = getObject(arg0).document;\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nfunction __wbg_instanceof_Memory_8d96eafbe3d5ec19(idx) {\n    return getObject(idx) instanceof WebAssembly.Memory ? 1 : 0;\n}\n\nfunction __wbg_buffer_c6180b818cf4d37e(arg0) {\n    return addHeapObject(getObject(arg0).buffer);\n}\n\nfunction __wbg_new_e14ec71e4d9dd19f(arg0) {\n    return addHeapObject(new Float32Array(getObject(arg0)));\n}\n\nfunction __wbg_subarray_ba065313e6f98a80(arg0, arg1, arg2) {\n    return addHeapObject(getObject(arg0).subarray(arg1, arg2));\n}\n\nfunction __wbg_newnoargs_96cbdf0d056b2fa8(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    return addHeapObject(new Function(varg0));\n}\n\nfunction __wbg_call_ee8306f6b79399de(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(getObject(arg0).call(getObject(arg1)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __wbindgen_object_clone_ref(idx) {\n    // If this object is on the stack promote it to the heap.\n    if ((idx & 1) === 1) return addHeapObject(getObject(idx));\n\n    // Otherwise if the object is on the heap just bump the\n    // refcount and move on\n    const val = slab[idx >> 1];\n    val.cnt += 1;\n    return idx;\n}\n\nfunction dropRef(idx) {\n\n    idx = idx >> 1;\n    if (idx < 4) return;\n    let obj = slab[idx];\n\n    obj.cnt -= 1;\n    if (obj.cnt > 0) return;\n\n    // If we hit 0 then free up our space in the slab\n    slab[idx] = slab_next;\n    slab_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) {\n    dropRef(i);\n}\n\nfunction __wbindgen_string_new(p, l) {\n    return addHeapObject(getStringFromWasm(p, l));\n}\n\nfunction __wbindgen_boolean_get(i) {\n    let v = getObject(i);\n    if (typeof(v) === 'boolean') {\n        return v ? 1 : 0;\n    } else {\n        return 2;\n    }\n}\n\nfunction __wbindgen_memory() {\n    return addHeapObject(_webgl_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"]);\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropRef(idx);\n    return ret;\n}\n\nfunction __wbindgen_rethrow(idx) { throw takeObject(idx); }\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"]))\n\n//# sourceURL=webpack:///./webgl.js?");

/***/ }),

/***/ "./webgl_bg.wasm":
/*!***********************!*\
  !*** ./webgl_bg.wasm ***!
  \***********************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, draw, __wbindgen_malloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./webgl */ \"./webgl.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./webgl_bg.wasm?");

/***/ })

}]);