import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";
import { getWishForm } from "helpers/wishesSection/getWishForm";
import { ListAvailableWish } from "./listAvailableWish/ListAvailableWish";
import cx from "classnames";
import classes from "./wishesFormSection.module.scss";
import { DragLines } from "./dragLines/DragLines";
import { useWishesFormSectionManage } from "./hooks/useWishesFormSectionManage";

export function WishesFormSection() {
    const { afterDropElement, deleteSection, dragElement, t, parent, wishElements } =
        useWishesFormSectionManage();

    return (
        <>
            <h2> Sekcja z życzeniami </h2>
            <p>
                Tutaj możesz popisać się kreatywnością, dodawaj dowolne sekcje dostępne poniżej. Kolejność
                każdej takiej sekcji możesz zmieniać przeciągnięciami{" "}
            </p>

            <ListAvailableWish afterDrop={afterDropElement} />
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
                                                            <div className={classes.maxWidth}>
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
