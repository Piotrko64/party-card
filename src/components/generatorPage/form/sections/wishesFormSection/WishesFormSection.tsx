import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { getWishForm } from "helpers/wishesSection/getWishForm";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { useAddWishForm } from "./../../../../../hooks/form/wishes/useAddWishForm";
export function WishesFormSection() {
    const wishElements = useWishesSectionStore((store) => store.elements);

    const addElement = useAddWishForm();

    return (
        <>
            <h2> Sekcja z życzeniami </h2>
            <p></p>
            <div className="grayBlock">
                <div className="list">
                    <div>{wishElements.map((element) => getWishForm(element.name, { ...element }))}</div>
                </div>
                <button onClick={() => addElement("tagCloud")}>aaaaaaaaaaaaa</button>
            </div>
        </>
    );
}
