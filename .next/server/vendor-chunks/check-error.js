"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/check-error";
exports.ids = ["vendor-chunks/check-error"];
exports.modules = {

/***/ "(ssr)/./node_modules/check-error/index.js":
/*!*******************************************!*\
  !*** ./node_modules/check-error/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* !\n * Chai - checkError utility\n * Copyright(c) 2012-2016 Jake Luer <jake@alogicalparadox.com>\n * MIT Licensed\n */\n\nvar getFunctionName = __webpack_require__(/*! get-func-name */ \"(ssr)/./node_modules/get-func-name/index.js\");\n/**\n * ### .checkError\n *\n * Checks that an error conforms to a given set of criteria and/or retrieves information about it.\n *\n * @api public\n */\n\n/**\n * ### .compatibleInstance(thrown, errorLike)\n *\n * Checks if two instances are compatible (strict equal).\n * Returns false if errorLike is not an instance of Error, because instances\n * can only be compatible if they're both error instances.\n *\n * @name compatibleInstance\n * @param {Error} thrown error\n * @param {Error|ErrorConstructor} errorLike object to compare against\n * @namespace Utils\n * @api public\n */\n\nfunction compatibleInstance(thrown, errorLike) {\n  return errorLike instanceof Error && thrown === errorLike;\n}\n\n/**\n * ### .compatibleConstructor(thrown, errorLike)\n *\n * Checks if two constructors are compatible.\n * This function can receive either an error constructor or\n * an error instance as the `errorLike` argument.\n * Constructors are compatible if they're the same or if one is\n * an instance of another.\n *\n * @name compatibleConstructor\n * @param {Error} thrown error\n * @param {Error|ErrorConstructor} errorLike object to compare against\n * @namespace Utils\n * @api public\n */\n\nfunction compatibleConstructor(thrown, errorLike) {\n  if (errorLike instanceof Error) {\n    // If `errorLike` is an instance of any error we compare their constructors\n    return thrown.constructor === errorLike.constructor || thrown instanceof errorLike.constructor;\n  } else if (errorLike.prototype instanceof Error || errorLike === Error) {\n    // If `errorLike` is a constructor that inherits from Error, we compare `thrown` to `errorLike` directly\n    return thrown.constructor === errorLike || thrown instanceof errorLike;\n  }\n\n  return false;\n}\n\n/**\n * ### .compatibleMessage(thrown, errMatcher)\n *\n * Checks if an error's message is compatible with a matcher (String or RegExp).\n * If the message contains the String or passes the RegExp test,\n * it is considered compatible.\n *\n * @name compatibleMessage\n * @param {Error} thrown error\n * @param {String|RegExp} errMatcher to look for into the message\n * @namespace Utils\n * @api public\n */\n\nfunction compatibleMessage(thrown, errMatcher) {\n  var comparisonString = typeof thrown === 'string' ? thrown : thrown.message;\n  if (errMatcher instanceof RegExp) {\n    return errMatcher.test(comparisonString);\n  } else if (typeof errMatcher === 'string') {\n    return comparisonString.indexOf(errMatcher) !== -1; // eslint-disable-line no-magic-numbers\n  }\n\n  return false;\n}\n\n/**\n * ### .getConstructorName(errorLike)\n *\n * Gets the constructor name for an Error instance or constructor itself.\n *\n * @name getConstructorName\n * @param {Error|ErrorConstructor} errorLike\n * @namespace Utils\n * @api public\n */\n\nfunction getConstructorName(errorLike) {\n  var constructorName = errorLike;\n  if (errorLike instanceof Error) {\n    constructorName = getFunctionName(errorLike.constructor);\n  } else if (typeof errorLike === 'function') {\n    // If `err` is not an instance of Error it is an error constructor itself or another function.\n    // If we've got a common function we get its name, otherwise we may need to create a new instance\n    // of the error just in case it's a poorly-constructed error. Please see chaijs/chai/issues/45 to know more.\n    constructorName = getFunctionName(errorLike);\n    if (constructorName === '') {\n      var newConstructorName = getFunctionName(new errorLike()); // eslint-disable-line new-cap\n      constructorName = newConstructorName || constructorName;\n    }\n  }\n\n  return constructorName;\n}\n\n/**\n * ### .getMessage(errorLike)\n *\n * Gets the error message from an error.\n * If `err` is a String itself, we return it.\n * If the error has no message, we return an empty string.\n *\n * @name getMessage\n * @param {Error|String} errorLike\n * @namespace Utils\n * @api public\n */\n\nfunction getMessage(errorLike) {\n  var msg = '';\n  if (errorLike && errorLike.message) {\n    msg = errorLike.message;\n  } else if (typeof errorLike === 'string') {\n    msg = errorLike;\n  }\n\n  return msg;\n}\n\nmodule.exports = {\n  compatibleInstance: compatibleInstance,\n  compatibleConstructor: compatibleConstructor,\n  compatibleMessage: compatibleMessage,\n  getMessage: getMessage,\n  getConstructorName: getConstructorName,\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2hlY2stZXJyb3IvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsbUJBQU8sQ0FBQyxrRUFBZTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsd0JBQXdCO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyx3QkFBd0I7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxlQUFlO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSix3REFBd0Q7QUFDeEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHdCQUF3QjtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvL0RvY3VtZW50cy9wcm9ncmFtbWluZy9jbGllbnRzL0dvbnpvXzIvbm9kZV9tb2R1bGVzL2NoZWNrLWVycm9yL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLyogIVxuICogQ2hhaSAtIGNoZWNrRXJyb3IgdXRpbGl0eVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNiBKYWtlIEx1ZXIgPGpha2VAYWxvZ2ljYWxwYXJhZG94LmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbnZhciBnZXRGdW5jdGlvbk5hbWUgPSByZXF1aXJlKCdnZXQtZnVuYy1uYW1lJyk7XG4vKipcbiAqICMjIyAuY2hlY2tFcnJvclxuICpcbiAqIENoZWNrcyB0aGF0IGFuIGVycm9yIGNvbmZvcm1zIHRvIGEgZ2l2ZW4gc2V0IG9mIGNyaXRlcmlhIGFuZC9vciByZXRyaWV2ZXMgaW5mb3JtYXRpb24gYWJvdXQgaXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG4vKipcbiAqICMjIyAuY29tcGF0aWJsZUluc3RhbmNlKHRocm93biwgZXJyb3JMaWtlKVxuICpcbiAqIENoZWNrcyBpZiB0d28gaW5zdGFuY2VzIGFyZSBjb21wYXRpYmxlIChzdHJpY3QgZXF1YWwpLlxuICogUmV0dXJucyBmYWxzZSBpZiBlcnJvckxpa2UgaXMgbm90IGFuIGluc3RhbmNlIG9mIEVycm9yLCBiZWNhdXNlIGluc3RhbmNlc1xuICogY2FuIG9ubHkgYmUgY29tcGF0aWJsZSBpZiB0aGV5J3JlIGJvdGggZXJyb3IgaW5zdGFuY2VzLlxuICpcbiAqIEBuYW1lIGNvbXBhdGlibGVJbnN0YW5jZVxuICogQHBhcmFtIHtFcnJvcn0gdGhyb3duIGVycm9yXG4gKiBAcGFyYW0ge0Vycm9yfEVycm9yQ29uc3RydWN0b3J9IGVycm9yTGlrZSBvYmplY3QgdG8gY29tcGFyZSBhZ2FpbnN0XG4gKiBAbmFtZXNwYWNlIFV0aWxzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNvbXBhdGlibGVJbnN0YW5jZSh0aHJvd24sIGVycm9yTGlrZSkge1xuICByZXR1cm4gZXJyb3JMaWtlIGluc3RhbmNlb2YgRXJyb3IgJiYgdGhyb3duID09PSBlcnJvckxpa2U7XG59XG5cbi8qKlxuICogIyMjIC5jb21wYXRpYmxlQ29uc3RydWN0b3IodGhyb3duLCBlcnJvckxpa2UpXG4gKlxuICogQ2hlY2tzIGlmIHR3byBjb25zdHJ1Y3RvcnMgYXJlIGNvbXBhdGlibGUuXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiByZWNlaXZlIGVpdGhlciBhbiBlcnJvciBjb25zdHJ1Y3RvciBvclxuICogYW4gZXJyb3IgaW5zdGFuY2UgYXMgdGhlIGBlcnJvckxpa2VgIGFyZ3VtZW50LlxuICogQ29uc3RydWN0b3JzIGFyZSBjb21wYXRpYmxlIGlmIHRoZXkncmUgdGhlIHNhbWUgb3IgaWYgb25lIGlzXG4gKiBhbiBpbnN0YW5jZSBvZiBhbm90aGVyLlxuICpcbiAqIEBuYW1lIGNvbXBhdGlibGVDb25zdHJ1Y3RvclxuICogQHBhcmFtIHtFcnJvcn0gdGhyb3duIGVycm9yXG4gKiBAcGFyYW0ge0Vycm9yfEVycm9yQ29uc3RydWN0b3J9IGVycm9yTGlrZSBvYmplY3QgdG8gY29tcGFyZSBhZ2FpbnN0XG4gKiBAbmFtZXNwYWNlIFV0aWxzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNvbXBhdGlibGVDb25zdHJ1Y3Rvcih0aHJvd24sIGVycm9yTGlrZSkge1xuICBpZiAoZXJyb3JMaWtlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAvLyBJZiBgZXJyb3JMaWtlYCBpcyBhbiBpbnN0YW5jZSBvZiBhbnkgZXJyb3Igd2UgY29tcGFyZSB0aGVpciBjb25zdHJ1Y3RvcnNcbiAgICByZXR1cm4gdGhyb3duLmNvbnN0cnVjdG9yID09PSBlcnJvckxpa2UuY29uc3RydWN0b3IgfHwgdGhyb3duIGluc3RhbmNlb2YgZXJyb3JMaWtlLmNvbnN0cnVjdG9yO1xuICB9IGVsc2UgaWYgKGVycm9yTGlrZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBFcnJvciB8fCBlcnJvckxpa2UgPT09IEVycm9yKSB7XG4gICAgLy8gSWYgYGVycm9yTGlrZWAgaXMgYSBjb25zdHJ1Y3RvciB0aGF0IGluaGVyaXRzIGZyb20gRXJyb3IsIHdlIGNvbXBhcmUgYHRocm93bmAgdG8gYGVycm9yTGlrZWAgZGlyZWN0bHlcbiAgICByZXR1cm4gdGhyb3duLmNvbnN0cnVjdG9yID09PSBlcnJvckxpa2UgfHwgdGhyb3duIGluc3RhbmNlb2YgZXJyb3JMaWtlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqICMjIyAuY29tcGF0aWJsZU1lc3NhZ2UodGhyb3duLCBlcnJNYXRjaGVyKVxuICpcbiAqIENoZWNrcyBpZiBhbiBlcnJvcidzIG1lc3NhZ2UgaXMgY29tcGF0aWJsZSB3aXRoIGEgbWF0Y2hlciAoU3RyaW5nIG9yIFJlZ0V4cCkuXG4gKiBJZiB0aGUgbWVzc2FnZSBjb250YWlucyB0aGUgU3RyaW5nIG9yIHBhc3NlcyB0aGUgUmVnRXhwIHRlc3QsXG4gKiBpdCBpcyBjb25zaWRlcmVkIGNvbXBhdGlibGUuXG4gKlxuICogQG5hbWUgY29tcGF0aWJsZU1lc3NhZ2VcbiAqIEBwYXJhbSB7RXJyb3J9IHRocm93biBlcnJvclxuICogQHBhcmFtIHtTdHJpbmd8UmVnRXhwfSBlcnJNYXRjaGVyIHRvIGxvb2sgZm9yIGludG8gdGhlIG1lc3NhZ2VcbiAqIEBuYW1lc3BhY2UgVXRpbHNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY29tcGF0aWJsZU1lc3NhZ2UodGhyb3duLCBlcnJNYXRjaGVyKSB7XG4gIHZhciBjb21wYXJpc29uU3RyaW5nID0gdHlwZW9mIHRocm93biA9PT0gJ3N0cmluZycgPyB0aHJvd24gOiB0aHJvd24ubWVzc2FnZTtcbiAgaWYgKGVyck1hdGNoZXIgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gZXJyTWF0Y2hlci50ZXN0KGNvbXBhcmlzb25TdHJpbmcpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBlcnJNYXRjaGVyID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBjb21wYXJpc29uU3RyaW5nLmluZGV4T2YoZXJyTWF0Y2hlcikgIT09IC0xOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW1hZ2ljLW51bWJlcnNcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiAjIyMgLmdldENvbnN0cnVjdG9yTmFtZShlcnJvckxpa2UpXG4gKlxuICogR2V0cyB0aGUgY29uc3RydWN0b3IgbmFtZSBmb3IgYW4gRXJyb3IgaW5zdGFuY2Ugb3IgY29uc3RydWN0b3IgaXRzZWxmLlxuICpcbiAqIEBuYW1lIGdldENvbnN0cnVjdG9yTmFtZVxuICogQHBhcmFtIHtFcnJvcnxFcnJvckNvbnN0cnVjdG9yfSBlcnJvckxpa2VcbiAqIEBuYW1lc3BhY2UgVXRpbHNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZ2V0Q29uc3RydWN0b3JOYW1lKGVycm9yTGlrZSkge1xuICB2YXIgY29uc3RydWN0b3JOYW1lID0gZXJyb3JMaWtlO1xuICBpZiAoZXJyb3JMaWtlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICBjb25zdHJ1Y3Rvck5hbWUgPSBnZXRGdW5jdGlvbk5hbWUoZXJyb3JMaWtlLmNvbnN0cnVjdG9yKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXJyb3JMaWtlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gSWYgYGVycmAgaXMgbm90IGFuIGluc3RhbmNlIG9mIEVycm9yIGl0IGlzIGFuIGVycm9yIGNvbnN0cnVjdG9yIGl0c2VsZiBvciBhbm90aGVyIGZ1bmN0aW9uLlxuICAgIC8vIElmIHdlJ3ZlIGdvdCBhIGNvbW1vbiBmdW5jdGlvbiB3ZSBnZXQgaXRzIG5hbWUsIG90aGVyd2lzZSB3ZSBtYXkgbmVlZCB0byBjcmVhdGUgYSBuZXcgaW5zdGFuY2VcbiAgICAvLyBvZiB0aGUgZXJyb3IganVzdCBpbiBjYXNlIGl0J3MgYSBwb29ybHktY29uc3RydWN0ZWQgZXJyb3IuIFBsZWFzZSBzZWUgY2hhaWpzL2NoYWkvaXNzdWVzLzQ1IHRvIGtub3cgbW9yZS5cbiAgICBjb25zdHJ1Y3Rvck5hbWUgPSBnZXRGdW5jdGlvbk5hbWUoZXJyb3JMaWtlKTtcbiAgICBpZiAoY29uc3RydWN0b3JOYW1lID09PSAnJykge1xuICAgICAgdmFyIG5ld0NvbnN0cnVjdG9yTmFtZSA9IGdldEZ1bmN0aW9uTmFtZShuZXcgZXJyb3JMaWtlKCkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbiAgICAgIGNvbnN0cnVjdG9yTmFtZSA9IG5ld0NvbnN0cnVjdG9yTmFtZSB8fCBjb25zdHJ1Y3Rvck5hbWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yTmFtZTtcbn1cblxuLyoqXG4gKiAjIyMgLmdldE1lc3NhZ2UoZXJyb3JMaWtlKVxuICpcbiAqIEdldHMgdGhlIGVycm9yIG1lc3NhZ2UgZnJvbSBhbiBlcnJvci5cbiAqIElmIGBlcnJgIGlzIGEgU3RyaW5nIGl0c2VsZiwgd2UgcmV0dXJuIGl0LlxuICogSWYgdGhlIGVycm9yIGhhcyBubyBtZXNzYWdlLCB3ZSByZXR1cm4gYW4gZW1wdHkgc3RyaW5nLlxuICpcbiAqIEBuYW1lIGdldE1lc3NhZ2VcbiAqIEBwYXJhbSB7RXJyb3J8U3RyaW5nfSBlcnJvckxpa2VcbiAqIEBuYW1lc3BhY2UgVXRpbHNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZ2V0TWVzc2FnZShlcnJvckxpa2UpIHtcbiAgdmFyIG1zZyA9ICcnO1xuICBpZiAoZXJyb3JMaWtlICYmIGVycm9yTGlrZS5tZXNzYWdlKSB7XG4gICAgbXNnID0gZXJyb3JMaWtlLm1lc3NhZ2U7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVycm9yTGlrZSA9PT0gJ3N0cmluZycpIHtcbiAgICBtc2cgPSBlcnJvckxpa2U7XG4gIH1cblxuICByZXR1cm4gbXNnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29tcGF0aWJsZUluc3RhbmNlOiBjb21wYXRpYmxlSW5zdGFuY2UsXG4gIGNvbXBhdGlibGVDb25zdHJ1Y3RvcjogY29tcGF0aWJsZUNvbnN0cnVjdG9yLFxuICBjb21wYXRpYmxlTWVzc2FnZTogY29tcGF0aWJsZU1lc3NhZ2UsXG4gIGdldE1lc3NhZ2U6IGdldE1lc3NhZ2UsXG4gIGdldENvbnN0cnVjdG9yTmFtZTogZ2V0Q29uc3RydWN0b3JOYW1lLFxufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/check-error/index.js\n");

/***/ })

};
;