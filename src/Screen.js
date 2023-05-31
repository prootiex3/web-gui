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
		renderer.setFillStyle("black");
		renderer.fillRect(0, 0, renderer.getWidth(), renderer.getHeight());
		renderer.setFillStyle("red");
		const fontSize =
			renderer.getScale() * (this.#game.getOptions().guiScale + 1);
		renderer.setFont(`${fontSize}px Arial`);
		renderer.getTextAlignment(`left`);
		renderer.fillText(`${this.#game.getFPS()} FPS`, 0, fontSize / 1.3);
	}

	update() {}
}
