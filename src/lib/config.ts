const COLORS = {
    primary: "#b2ff00",
    paragraph: "#515151",
    heading: "#ffffff",
};

export const redirectToWelcome = true;

export const relicsOpened = {
    musicDisk: false,
    blade: false,
    staff: false,
    egg: false,
    voodoo: false,
};

type ProgressStep = { type: "point", status: "empty" | "point" | "completed", color: string } | { type: "line", progress: number };

export const progressSteps: ProgressStep[] = [
    { type: "point", status: "point", color: COLORS.heading },
    { type: "line", progress: 0 },
    { type: "point", status: "empty", color: COLORS.paragraph },
    { type: "line", progress: 0 },
    { type: "point", status: "empty", color: COLORS.paragraph },
    { type: "line", progress: 0 },
    { type: "point", status: "empty", color: COLORS.paragraph },
];

export const currentStep: "waiting" | "pyramid" | "labyrinth" | "final" = "waiting";
export const stepNumber = 0;
export const stepOffset = 96 + stepNumber * 336;

export const dungeonNotesOpened = {
    basement: true,
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
