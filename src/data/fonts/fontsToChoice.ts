import { NamesFont } from "types/typesForStyles/NamesFont";

type FontsArray = Array<{ name: NamesFont; fullName: string }>;

export const fontsToChoice: FontsArray = [
    { name: "Oswald", fullName: "'Oswald', sans-serif" },
    { name: "Noto Serif", fullName: "'Noto Serif', serif" },
    {
        name: "Jost",
        fullName: '"Jost", sans-serif',
    },
    {
        name: "Aboreto",
        fullName: "'Aboreto', cursive",
    },

    {
        name: "Kaushan",
        fullName: '"Kaushan Script", cursive',
    },
    {
        name: "Playfair",
        fullName: "'Playfair Display', serif",
    },
];
