({
    baseUrl: "../intermediate",
    include: [
        "phaser.min",
        "src/levels/Level1",
        "src/sprites/Player",
        "src/states/MainMenu",
        "src/states/Game",
        "src/states/Preloader",
        "src/states/Boot",
        "src/app"
    ],
    out: "../intermediate/main.js",
    optimize: "none"
})
