import type { ISourceOptions } from "tsparticles-engine";

const options: ISourceOptions = {
    name: "Link Triangles",
    particles: {
        number: {
            value: 300,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#CCCCFF",
            animation: {
                enable: true,
                speed: 20,
                sync: true,
            },
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: {
                min: 0.3,
                max: 0.9
            }
        },
        size: {
            value: {
                min: 0.5,
                max: 1,
            },
        },
        links: {
            color: 'random',
            enable: true,
            distance: 100,
            opacity: 0.2,
            width: 1,
        },
        move: {
            enable: true,
            speed: 0.2,
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "bubble",
            },
            onClick: {
                enable: true,
                mode: "repulse"
            }
        },
        modes: {
            bubble: {
                distance: 50,
                size: 3,
                duration: 1,
                opacity: "random",
            },
            repulse: {
                distance: 100,
            },
        },
    },
    background: {
        color: "#000000",
        opacity: 0
    },
    fullScreen: false
};

export default options;
