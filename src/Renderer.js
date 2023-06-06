// @ts-check
class Renderer {
	/**
	 * @private
	 * @type {HTMLCanvasElement | null}
	 */
	#canvas = null;

	/**
	 * @private
	 * @type {CanvasRenderingContext2D | null}
	 */
	#context = null;

	/**
	 * @private
	 * @type {number | null}
	 */
	#scale = null;

	/**
	 * @param {HTMLCanvasElement} context
	 */
	constructor(canvas) {
		this.#canvas = canvas;
		this.#context = this.#canvas.getContext("2d");
		if (!this.#context)
			throw new Error("Failed to get context for canvas.");
	}

	update() {
		this.#canvas.width = window.innerWidth;
		this.#canvas.height = window.innerHeight;
		this.setScale(this.#canvas.width / 8);
	}

	/**
	 * @param {string} fillStyle
	 */
	setFillStyle(fillStyle) {
		this.#context?.fillStyle = fillStyle;
	}

	/**
	 * @returns {string | null}
	 */
	getFillStyle() {
		return this.#context?.fillStyle ?? null;
	}

	/**
	 * @param {string} font
	 */
	setFont(font) {
		this.#context?.font = font;
	}

	/**
	 * @returns {string | null}
	 */
	getFont() {
		return this.#context?.font ?? null;
	}

	/**
	 * @param {'left' | 'center' | 'right'} alignment
	 */
	getTextAlignment(alignment) {
		this.#context?.textAlign = alignment;
	}

	/**
	 * @returns {('left' | 'center' | 'right') | null}
	 */
	getTextAlignment() {
		return this.#context?.textAlign ?? null;
	}

	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} width
	 * @param {number} height
	 */
	fillRect(x, y, width, height) {
		this.#context?.fillRect(x, y, width, height);
	}

	/**
	 * @param {string} text
	 * @param {number} x
	 * @param {number} y
	 * @param {number} maxWidth
	 */
	fillText(text, x, y, maxWidth) {
		this.#context?.fillText(text, x, y, maxWidth);
	}

	/**
	 * @returns {HTMLCanvasElement | null}
	 */
	getCanvas() {
		return this.#canvas;
	}

	/**
	 * @returns {CanvasRenderingContext2D | null}
	 */
	getContext() {
		return this.#context;
	}

	/**
	 * @returns {number | null}
	 */
	getWidth() {
		return this.#canvas?.width ?? null;
	}

	/**
	 * @returns {number | null}
	 */
	getHeight() {
		return this.#canvas?.height ?? null;
	}

	/**
	 * @returns {number | null}
	 */
	getScale() {
		return this.#scale;
	}

	/**
	 * @param {number} scale
	 */
	setScale(scale) {
		this.#scale = scale;
	}
}
