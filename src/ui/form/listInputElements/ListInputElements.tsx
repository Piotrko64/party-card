import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { DragLines } from "components/generatorPage/form/sections/wishesFormSection/dragLines/DragLines";
import { ListTexts } from "types/stores/WishesSectionStore";
import classes from "./listInputElements.module.scss";
import { useListInputElement } from "./hooks/useListInputElement";

type Props = { idElement: string; texts: ListTexts };

const MAX_AMOUNT_INPUTS = 30;

export function ListInputElement({ idElement, texts }: Props) {
    const { dragSingleInput, addEmptyInput, deleteElement, handleChangeValue, t, parent } =
        useListInputElement(idElement);

    return (
        <>
            <h4> {t("elementList")}</h4>
            <DragDropContext onDragEnd={dragSingleInput}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div
                            className={classes.listText}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            <div ref={parent}>
                                {texts.map((text, index) => (
                                    <Draggable key={text.id} draggableId={text.id} index={index}>
                                        {(provided) => (
                                            <div
                                                key={text.id}
                                                style={{ padding: "20px" }}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={classes.singleText}
                                            >
                                                <button onClick={() => deleteElement(text.id)}>
                                                    <img
                                                        src="/icons/trash.png"
                                                        alt="delete"
                                                        className={classes.trash}
                                                    />
                                                </button>

                                                <input
                                                    value={text.content}
                                                    onChange={(event) =>
                                                        handleChangeValue(event.target.value, text.id)
                                                    }
                                                    className={classes.input}
                                                />
                                                <div className={classes.lines}>
                                                    <DragLines />
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
            {texts.length < MAX_AMOUNT_INPUTS && (
                <button onClick={addEmptyInput} className={classes.newText}>
                    {t("addNew")} +
                </button>
            )}
        </>
    );
}
