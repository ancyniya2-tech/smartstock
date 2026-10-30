
const motionButton = document.getElementById("motion-toggle");

if (motionButton) {
    const bulb = motionButton.querySelector("i");

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    let animationOff = prefersReducedMotion.matches;

    function updateMotion() {
        document.body.classList.toggle(
            "reduce-motion",
            animationOff
        );

        bulb.className = animationOff
            ? "fa-regular fa-lightbulb"
            : "fa-solid fa-lightbulb";

        motionButton.setAttribute(
            "aria-label",
            animationOff
                ? "Turn background animation on"
                : "Turn background animation off"
        );

        motionButton.title = animationOff
            ? "Turn background animation on"
            : "Turn background animation off";

        motionButton.setAttribute(
            "aria-pressed",
            String(animationOff)
        );
    }

    updateMotion();

    motionButton.addEventListener("click", () => {
        animationOff = !animationOff;
        updateMotion();

        console.log("Animation off:", animationOff);
    });
} else {
    console.error("Motion button not found!");
}
