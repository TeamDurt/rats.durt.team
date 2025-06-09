const COLORS = {
    primary: "#b2ff00",
    paragraph: "#515151",
    heading: "#ffffff",
};

export const redirectToWelcome = false;

export const relicsOpened = {
    musicDisk: false,
    blade: false,
    staff: false,
    egg: false,
    voodoo: false,
};

type ProgressStep = { type: "point", status: "empty" | "point" | "completed", color: string } | { type: "line", progress: number };

export const progressSteps: ProgressStep[] = [
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

export const dungeonNotesOpened = {
    basement: false,
    pyramid: false,
    labyrinth: false,
    final: false,
};

export const notesStatuses = {
    basement: [false, false, false, false],
    pyramid: [false, false, false, false],
    labyrinth: [false, false, false],
    final: [false, false],
}
