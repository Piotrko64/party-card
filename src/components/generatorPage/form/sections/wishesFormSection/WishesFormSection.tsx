import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";

import { getWishForm } from "helpers/wishesSection/getWishForm";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { useAddWishForm } from "./../../../../../hooks/form/wishes/useAddWishForm";
import { ListAvailableWish } from "./listAvailableWish/ListAvailableWish";
import cx from "classnames";
import classes from "./wishesFormSection.module.scss";

import { DragLines } from "./dragLines/DragLines";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useTranslation } from "react-i18next";

export function WishesFormSection() {
    const { deleteElement, setWishesElements, elements } = useWishesSectionStore();
    const wishElements = useWishesSectionStore((store) => store.elements);
    const [parent, enableAnimations] = useAutoAnimate();

    const { t } = useTranslation("ui");
    function dragElement(result: DropResult) {
        enableAnimations(false);
        if (!result.destination) return;

        const cloneArrayElement = [...elements];
        const [chooseElement] = cloneArrayElement.splice(result.source.index, 1);
        cloneArrayElement.splice(result.destination.index, 0, chooseElement);

        setWishesElements(cloneArrayElement);
    }

    function deleteSection(id: string) {
        enableAnimations(true);
        deleteElement(id);
    }

    return (
        <>
            <h2> Sekcja z życzeniami </h2>
            <p>
                Tutaj możesz popisać się kreatywnością, dodawaj dowolne sekcje dostępne poniżej. Kolejność
                każdej takiej sekcji możesz zmieniać przeciągnięciami{" "}
            </p>

            <ListAvailableWish afterDrop={() => enableAnimations(true)} />
            {wishElements.length > 0 && (
                <div className={cx(classes.container)}>
                    <DragDropContext onDragEnd={dragElement}>
                        <Droppable droppableId="droppable">
                            {(provided) => (
                                <div className="list" {...provided.droppableProps} ref={provided.innerRef}>
                                    <div ref={parent}>
                                        {wishElements.map((element, index) => (
                                            <Draggable
                                                key={element.id}
                                                draggableId={element.id}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <>
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            className={classes.singleWish}
                                                        >
                                                            <div
                                                                {...provided.dragHandleProps}
                                                                className="flexCenter"
                                                            >
                                                                <DragLines />
                                                            </div>
                                                            <div>
                                                                {getWishForm(element.name, { ...element })}
                                                                <button
                                                                    className={classes.deleteButton}
                                                                    onClick={() => deleteSection(element.id)}
                                                                >
                                                                    {t("delete")}
                                                                    <img
                                                                        src="/icons/trash.png"
                                                                        alt="delete"
                                                                    />{" "}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            </Draggable>
                                        ))}
                                    </div>
                                    <>{provided.placeholder}</>
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            )}
        </>
    );
}
