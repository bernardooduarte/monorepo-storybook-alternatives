export const tokens = {
    color: {
        bg: "#0b1020",
        fg: "#e8eefc",
        primary: "#6ea8fe"
    },
    radius: {
        md: "12px"
    },
    space: {
        sm: "8px",
        md: "12px"
    }
} as const;

export type Tokens = typeof tokens;
