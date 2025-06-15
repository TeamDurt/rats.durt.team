const COLORS = {
    primary: "#b2ff00",
    paragraph: "#515151",
    heading: "#ffffff",
};

export const redirectToWelcome = false;

export const relicsOpened = {
    musicDisk: false,
    blade: true,
    staff: false,
    egg: true,
    voodoo: true,
};

type ProgressStep = { type: "point", status: "empty" | "point" | "completed", color: string } | { type: "line", progress: number };

export const progressSteps: ProgressStep[] = [
    { type: "point", status: "completed", color: COLORS.heading },
    { type: "line", progress: 100 },
    { type: "point", status: "completed", color: COLORS.heading },
    { type: "line", progress: 100 },
    { type: "point", status: "completed", color: COLORS.heading },
    { type: "line", progress: 100 },
    { type: "point", status: "point", color: COLORS.primary },
];

export const currentStep: "waiting" | "pyramid" | "labyrinth" | "final" = "waiting";
export const stepNumber = 2;
export const stepOffset = 96 + stepNumber * 336;

export const dungeonNotesOpened = {
    basement: true,
    pyramid: true,
    labyrinth: true,
    final: false,
};

export const notesStatuses = {
    basement: [true, true, true, true],
    pyramid: [true, true, true, true],
    labyrinth: [true, true, true],
    final: [false, false],
}
