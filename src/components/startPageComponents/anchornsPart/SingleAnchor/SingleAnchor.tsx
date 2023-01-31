type Props = {
    color: string;
    text: string;
    anchor: string;
};

export function SingleButton({ text, color, anchor }: Props) {
    return (
        <a
            style={{
                color,
                borderColor: color,
            }}
            href={anchor}
        >
            {text}
        </a>
    );
}
