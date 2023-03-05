import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";
import { getWishForm } from "helpers/wishesSection/getWishForm";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { ListAvailableWish } from "./listAvailableWish/ListAvailableWish";
import cx from "classnames";
import classes from "./wishesFormSection.module.scss";
import { DragLines } from "./dragLines/DragLines";
import { useTranslation } from "react-i18next";

export function WishesFormSection() {
    const wishElements = useWishesSectionStore((store) => store.elements);
    const { deleteElement, setWishesElements, elements } = useWishesSectionStore();

    const { t } = useTranslation("ui");

    function dragElement(result: DropResult) {
        if (!result.destination) return;

        const cloneArrayElement = [...elements];
        const [chooseElement] = cloneArrayElement.splice(result.source.index, 1);
        cloneArrayElement.splice(result.destination.index, 0, chooseElement);

        setWishesElements(cloneArrayElement);
    }

    return (
        <>
            <h2> Sekcja z życzeniami </h2>
            <p>
                Tutaj możesz popisać się kreatywnością, dodawaj dowolne sekcje dostępne poniżej. Kolejność
                każdej takiej sekcji możesz zmieniać przeciągnięciami{" "}
            </p>

            <ListAvailableWish />

            {wishElements.length > 0 && (
                <div className={cx(classes.container)}>
                    <DragDropContext onDragEnd={dragElement}>
                        <Droppable droppableId="droppable">
                            {(provided) => (
                                <div className="list" {...provided.droppableProps} ref={provided.innerRef}>
                                    {wishElements.map((element, index) => (
                                        <Draggable key={element.id} draggableId={element.id} index={index}>
                                            {(provided) => (
                                                <div>
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

                                                        <div className={classes.maxWidth}>
                                                            {getWishForm(element.name, { ...element })}

                                                            <button
                                                                className={classes.deleteButton}
                                                                onClick={() => deleteElement(element.id)}
                                                            >
                                                                {t("delete")}
                                                                <img src="/icons/trash.png" alt="delete" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
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
