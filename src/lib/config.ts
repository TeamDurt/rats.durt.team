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

type ProgressStep = { type: "point", status: "empty" | "point" | "completed", color: string } | { type: "line", progress: number };

export const progressSteps: ProgressStep[] = [
    { type: "point", status: "completed", color: COLORS.heading },
    { type: "line", progress: 100 },
    { type: "point", status: "completed", color: COLORS.heading },
    { type: "line", progress: 100 },
    { type: "point", status: "completed", color: COLORS.heading },
    { type: "line", progress: 100 },
    { type: "point", status: "completed", color: COLORS.primary },
];

export const currentStep: "waiting" | "pyramid" | "labyrinth" | "final" = "final";
export const stepNumber = 3;
export const stepOffset = 96 + stepNumber * 336;

export const dungeonNotesOpened = {
    basement: true,
    pyramid: true,
    labyrinth: true,
    final: true,
};

export const notesStatuses = {
    basement: [true, true, true, true],
    pyramid: [true, true, true, true],
    labyrinth: [true, true, true],
    final: [true, true],
}
