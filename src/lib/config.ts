const COLORS = {
    primnary: "#b2ff00",
    paragraph: "#515151",
    heading: "#ffffff",
};

export const redirectToWelcome = true;

export const progressSteps = [
    { type: "point", status: "point", color: COLORS.paragraph },
    { type: "line", progress: 0 },
    { type: "point", status: "empty", color: COLORS.paragraph },
    { type: "line", progress: 0 },
    { type: "point", status: "empty", color: COLORS.paragraph },
    { type: "line", progress: 0 },
    { type: "point", status: "empty", color: COLORS.paragraph },
];
