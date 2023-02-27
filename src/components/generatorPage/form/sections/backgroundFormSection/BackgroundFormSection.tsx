import { BackgroundColorForm } from "./formElements/BackgroundColorForm/BackgroundColorForm";

export function BackgroundFormSection() {
    return (
        <>
            <h2>Tło i poboczne efekty</h2>
            <p>Nadaj koloru oraz wykaż się kreatywnością poprzez nasz panel w którym zadbasz o efekt WoW!</p>
            <div className="grayBlock">
                <BackgroundColorForm />
            </div>
        </>
    );
}
