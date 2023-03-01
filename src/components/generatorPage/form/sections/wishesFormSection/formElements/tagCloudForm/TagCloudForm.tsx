import { ChangeEvent } from "react";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { TagCloudType } from "types/stores/WishesSectionStore";
import { OrdinaryColors } from "ui/form/inputColorSection/ordinaryColors/OrdinaryColors";
import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";

export function TagCloudForm({ color, id: idElement, texts }: TagCloudType) {
    const { changeWishValue, changeValueText, addTextInput, deleteTextInput } = useWishesSectionStore();

    function changeColorText(color: string) {
        changeWishValue("color", color, idElement);
    }

    function handleChangeValue(value: string, idText: string) {
        changeValueText(idElement, idText, value);
    }

    function addEmptyInput() {
        addTextInput(idElement);
    }

    return (
        <>
            <h3> Chmura życzeń </h3>

            <OrdinaryColors changeColor={changeColorText} selectedColor={color} />
            <DragDropContext onDragEnd={(r) => console.log(r)}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div className="list" {...provided.droppableProps} ref={provided.innerRef}>
                            {texts.map((text, index) => (
                                <Draggable key={text.id} draggableId={text.id} index={index}>
                                    {(provided) => (
                                        <div
                                            key={text.id}
                                            style={{ padding: "20px" }}
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <input
                                                value={text.content}
                                                onChange={(event: ChangeEvent) =>
                                                    handleChangeValue(
                                                        (event.target as HTMLInputElement).value,
                                                        text.id
                                                    )
                                                }
                                            />
                                            <button onClick={() => deleteTextInput(idElement, text.id)}>
                                                Usuń
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

            <button onClick={addEmptyInput}> Dodaj nowe pole </button>
        </>
    );
}
