import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
export function WishesFormSection() {
    const [cards, setCards] = useState([
        {
            id: 1,
            text: "Write a cool JS library",
        },
        {
            id: 2,
            text: "Make it generic enough",
        },
        {
            id: 3,
            text: "Write README",
        },
        {
            id: 4,
            text: "Create some examples",
        },
        {
            id: 5,
            text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
        },
        {
            id: 6,
            text: "???",
        },
        {
            id: 7,
            text: "PROFIT",
        },
    ]);

    const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

    return (
        <div className="grayBlock">
            <h1> Sekcja z życzeniami </h1>

            <div className="list">
                <div ref={parent}>
                    {cards.map((card) => (
                        <p
                            onClick={() => {
                                setCards((prev) => [...prev, card]);
                            }}
                        >
                            {card.text}
                        </p>
                    ))}{" "}
                </div>
            </div>
        </div>
    );
}
