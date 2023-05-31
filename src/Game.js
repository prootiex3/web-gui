// @ts-check
class GameOptions {
	/**
	 * @type {Game | null}
	 */
	#game = null;

	/**
	 * @param {Game} game
	 */
	constructor(game) {
		this.#game = game;
		this.guiScale = 0;
		this.maxFps = 60;
	}

	/**
	 * @type {number}
	 */
	guiScale;

	/**
	 * @type {number}
	 */
	maxFps;
}

class Game {
	/**
	 * @private
	 * @type {Renderer | null}
	 */
	#renderer = null;

	/**
	 * @private
	 * @type {GameOptions | null}
	 */
	#options = null;

	/**
	 * @private
	 * @type {Screen | null}
	 */
	#currentScreen = null;

	/**
	 * @private
	 * @type {number | null}
	 */
	#then = null;

	/**
	 * @private
	 * @type {number | null}
	 */
	#lastTime = null;

	/**
	 * @private
	 * @type {number | null}
	 */
	#fps = null;

	/**
	 * @private
	 * @type {boolean}
	 */
	#running = true;

	/**
	 * @private
	 * @type {number}
	 */
	#lastRenderTime = 0;

	/**
	 * @private
	 * @type {number}
	 */
	#interval = null;

	/**
	 * @param {HTMLCanvasElement} canvas
	 */
	constructor(canvas) {
		this.#renderer = new Renderer(canvas);
		this.#options = new GameOptions(this);
		this.#currentScreen = new Screen(this);
		this.#setEventHandlers();
	}

	/**
	 * @returns {Renderer | null}
	 */
	getRenderer() {
		return this.#renderer;
	}

	/**
	 * @returns {GameOptions | null}
	 */
	getOptions() {
		return this.#options;
	}

	/**
	 * @returns {Screen | null}
	 */
	getCurrentScreen() {
		return this.#currentScreen;
	}

	/**
	 * @returns {number | null}
	 */
	getFPS() {
		return this.#fps;
	}

	/**
	 * @returns {boolean}
	 */
	isRunning() {
		return this.#running;
	}

	/**
	 * @param {boolean} bool
	 */
	setRunning(bool) {
		this.#running = bool;
		if (bool) this.run();
	}

	render(timestamp) {
		// figure out fps
		const sp = (timestamp - this.#lastRenderTime) / 1000;
		this.#lastRenderTime = timestamp;
		this.#fps = Math.round(1 / sp);

		// render n stuff
		this.#renderer.update();
		this.#currentScreen?.update();
		this.#currentScreen?.render();

		if (!this.#running) return;

		clearTimeout(this.#interval);
		this.#interval = setInterval(
			this.render.bind(this),
			1000 / this.#options.maxFps,
			performance.now()
		);
	}

	run() {
		this.render(performance.now());
	}

	#setEventHandlers() {
		// Events
		const canvas = this.#renderer.getCanvas();
		canvas.addEventListener("click", (event) => {
			event.preventDefault();
			if (
				this.#currentScreen &&
				this.#currentScreen.on_click &&
				this.#currentScreen.on_click instanceof Function
			)
				this.#currentScreen.on_click(event.clientX, event.clientY);
		});

		canvas.addEventListener("mousedown", (event) => {
			event.preventDefault();
			if (
				this.#currentScreen &&
				this.#currentScreen.on_mousedown &&
				this.#currentScreen.on_mousedown instanceof Function
			)
				this.#currentScreen.on_mousedown(event.clientX, event.clientY);
		});

		canvas.addEventListener("mouseup", (event) => {
			event.preventDefault();
			if (
				this.#currentScreen &&
				this.#currentScreen.on_mouseup &&
				this.#currentScreen.on_mouseup instanceof Function
			)
				this.#currentScreen.on_mouseup(event.clientX, event.clientY);
		});

		canvas.addEventListener("mousemove", (event) => {
			event.preventDefault();
			if (
				this.#currentScreen &&
				this.#currentScreen.on_mousemove &&
				this.#currentScreen.on_mousemove instanceof Function
			)
				this.#currentScreen.on_mousemove(event.clientX, event.clientY);
		});

		canvas.addEventListener("keydown", (event) => {
			event.preventDefault();
			if (
				this.#currentScreen &&
				this.#currentScreen.on_keydown &&
				this.#currentScreen.on_keydown instanceof Function
			)
				this.#currentScreen.on_keydown(event.code);
		});

		canvas.addEventListener("keyup", (event) => {
			event.preventDefault();
			if (
				this.#currentScreen &&
				this.#currentScreen.on_keyup &&
				this.#currentScreen.on_keyup instanceof Function
			)
				this.#currentScreen.on_keyup(event.code);
		});
	}
}
