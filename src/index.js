// @ts-check
/**
 * @type {Game | null}
 */
let game = null;
(async function main() {
	canvas = document.getElementById("view");
	if (!canvas) throw new Error("Could not find canvas.");
	game = new Game(canvas);
	game.run();
})();
