import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";

import { getWishForm } from "helpers/wishesSection/getWishForm";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { useAddWishForm } from "./../../../../../hooks/form/wishes/useAddWishForm";
import { ListAvailableWish } from "./listAvailableWish/ListAvailableWish";
import cx from "classnames";
import classes from "./wishesFormSection.module.scss";

import { DragLines } from "./dragLines/DragLines";

export function WishesFormSection() {
    const wishElements = useWishesSectionStore((store) => store.elements);

    const addElement = useAddWishForm();

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
                    <DragDropContext onDragEnd={(r) => console.log(r)}>
                        <Droppable droppableId="droppable">
                            {(provided) => (
                                <div className="list" {...provided.droppableProps} ref={provided.innerRef}>
                                    {wishElements.map((element, index) => (
                                        <Draggable key={element.id} draggableId={element.id} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    className={classes.singleWish}
                                                >
                                                    <div {...provided.dragHandleProps} className="flexCenter">
                                                        <DragLines />
                                                    </div>
                                                    <div> {getWishForm(element.name, { ...element })}</div>
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
