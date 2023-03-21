import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";
import { getWishForm } from "helpers/wishesSection/getWishForm";
import { ListAvailableWish } from "./listAvailableWish/ListAvailableWish";
import cx from "classnames";
import classes from "./wishesFormSection.module.scss";
import { DragLines } from "./dragLines/DragLines";
import { useWishesFormSectionManage } from "./hooks/useWishesFormSectionManage";
import { useTranslation } from "react-i18next";

export function WishesFormSection() {
    const { afterDropElement, deleteSection, dragElement, t, parent, wishElements } =
        useWishesFormSectionManage();

    const { t: wishTranslation } = useTranslation("generate");

    return (
        <>
            <h2 className="wishes"> {wishTranslation("wishesSection")} </h2>
            <p>{wishTranslation("wishesDescribe")}</p>

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
