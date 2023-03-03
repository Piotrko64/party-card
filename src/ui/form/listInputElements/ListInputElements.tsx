import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { DragLines } from "components/generatorPage/form/sections/wishesFormSection/dragLines/DragLines";
import { ChangeEvent } from "react";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { ListTexts } from "types/stores/WishesSectionStore";
import classes from "./listInputElements.module.scss";

type Props = { idElement: string; texts: ListTexts };

export function ListInputElement({ idElement, texts }: Props) {
    const { changeValueText, deleteTextInput, addTextInput } = useWishesSectionStore();

    function handleChangeValue(value: string, idText: string) {
        changeValueText(idElement, idText, value);
    }

    function addEmptyInput() {
        addTextInput(idElement);
    }

    return (
        <>
            <h4> Lista elementów</h4>
            <DragDropContext onDragEnd={(r) => console.log(r)}>
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
                                            <div className={classes.lines}>
                                                <DragLines more />
                                            </div>

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
                                            <button onClick={() => deleteTextInput(idElement, text.id)}>
                                                <img
                                                    src="/icons/trash.png"
                                                    alt="delete"
                                                    className={classes.trash}
                                                />
                                            </button>
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
