const COLORS = {
    primary: "#b2ff00",
    paragraph: "#515151",
    heading: "#ffffff",
};

export const redirectToWelcome = false;

export const relicsOpened = {
    musicDisk: true,
    blade: true,
    staff: true,
    egg: true,
    voodoo: true,
};

export const progressSteps = [
    { type: "point", status: "completed", color: COLORS.heading },
    { type: "line", progress: 100 },
    { type: "point", status: "point", color: COLORS.primary },
    { type: "line", progress: 30 },
    { type: "point", status: "empty", color: COLORS.paragraph },
    { type: "line", progress: 0 },
    { type: "point", status: "empty", color: COLORS.paragraph },
];

export const currentStep: "waiting" | "pyramid" | "labyrinth" | "final" = "pyramid";
export const stepNumber = 1;
export const stepOffset = 96 + stepNumber * 336;
