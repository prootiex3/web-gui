// @ts-check
class Screen extends WindowEventHandler {
	/**
	 * @type {Game | null}
	 */
	#game = null;

	/**
	 * @type {Screen | null}
	 */
	#parent = null;

	/**
	 * @param {Renderer} renderer
	 * @param {Screen | null} parent
	 */
	constructor(game, parent = null) {
		super();
		this.#game = game;
		this.#parent = parent;
	}

	render() {
		const renderer = this.#game.getRenderer();
		const context = renderer.getContext();
		context.fillStyle = "black";
		context.fillRect(0, 0, renderer.getWidth(), renderer.getHeight());
		context.fillStyle = "red";
		const fontSize =
			renderer.getScale() * (this.#game.getOptions().guiScale + 1);
		context.font = `${fontSize}px Arial`;
		context.textAlign = `left`;
		context.fillText(`${this.#game.getFPS()} FPS`, 0, fontSize / 1.3);
	}

	update() {}
}
