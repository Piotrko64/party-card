import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";
import { DragLines } from "components/generatorPage/form/sections/wishesFormSection/dragLines/DragLines";
import { ChangeEvent } from "react";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { ListTexts } from "types/stores/WishesSectionStore";
import classes from "./listInputElements.module.scss";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Props = { idElement: string; texts: ListTexts };

export function ListInputElement({ idElement, texts }: Props) {
    const { changeValueText, deleteTextInput, addTextInput, moveSingleInputElement } =
        useWishesSectionStore();
    const [parent, enableAnimations] = useAutoAnimate();

    function handleChangeValue(value: string, idText: string) {
        changeValueText(idElement, idText, value);
    }

    function deleteElement(textId: string) {
        enableAnimations(true);
        deleteTextInput(idElement, textId);
    }

    function addEmptyInput() {
        addTextInput(idElement);
        enableAnimations(true);
    }

    function dragSingleInput(result: DropResult) {
        if (!result.destination) return;
        enableAnimations(false);
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
                            </div>
                            <>{provided.placeholder}</>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            {texts.length < 30 && (
                <button onClick={addEmptyInput} className={classes.newText}>
                    Dodaj nowe pole +
                </button>
            )}
        </>
    );
}
