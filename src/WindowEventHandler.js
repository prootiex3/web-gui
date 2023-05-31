// @ts-check
/**
 * @interface WindowEventHandler
 */
class WindowEventHandler {
	constructor() {}

	/**
	 * @param {number} x
	 * @param {number} y
	 */
	on_click(x, y) {}

	/**
	 * @param {number} x
	 * @param {number} y
	 */
	on_mousedown(x, y) {}

	/**
	 * @param {number} x
	 * @param {number} y
	 */
	on_mouseup(x, y) {}

	/**
	 * @param {number} x
	 * @param {number} y
	 */
	on_mousemove(x, y) {}

	/**
	 * @param {number} keyCode
	 */
	on_keydown(keyCode) {}

	/**
	 * @param {number} keyCode
	 */
	on_keyup(keyCode) {}
}
