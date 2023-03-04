import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";
import { DragLines } from "components/generatorPage/form/sections/wishesFormSection/dragLines/DragLines";
import { ChangeEvent } from "react";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { ListTexts } from "types/stores/WishesSectionStore";
import classes from "./listInputElements.module.scss";

type Props = { idElement: string; texts: ListTexts };

export function ListInputElement({ idElement, texts }: Props) {
    const { changeValueText, deleteTextInput, addTextInput, moveSingleInputElement } =
        useWishesSectionStore();

    function handleChangeValue(value: string, idText: string) {
        changeValueText(idElement, idText, value);
    }

    function addEmptyInput() {
        addTextInput(idElement);
    }

    function dragSingleInput(result: DropResult) {
        if (!result.destination) return;

        moveSingleInputElement(idElement, result.source.index, result.destination.index);
    }

    return (
        <>
            <h4> Lista elementów</h4>
            <DragDropContext onDragEnd={dragSingleInput}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div
                            className={classes.listText}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
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
                                            <button onClick={() => deleteTextInput(idElement, text.id)}>
                                                <img
                                                    src="/icons/trash.png"
                                                    alt="delete"
                                                    className={classes.trash}
                                                />
                                            </button>

                                            <input
                                                value={text.content}
                                                onChange={(event: ChangeEvent) =>
                                                    handleChangeValue(
                                                        (event.target as HTMLInputElement).value,
                                                        text.id
                                                    )
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
                            <>{provided.placeholder}</>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <button onClick={addEmptyInput} className={classes.newText}>
                Dodaj nowe pole +
            </button>
        </>
    );
}
