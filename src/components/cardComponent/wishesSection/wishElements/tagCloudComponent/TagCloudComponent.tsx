import { TagCloud } from "@frank-mayer/react-tag-cloud";

export function TagCloudComponent() {
    return (
        <div className="tagCloud" style={{}}>
            <TagCloud
                options={(w: Window & typeof globalThis) => ({
                    radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                    maxSpeed: "normal",
                })}
            >
                {[
                    "VSCode",
                    "TypeScript",
                    "React",
                    "Preact",
                    "Parcel",
                    "Jest",
                    "Next",
                    "ESLint",
                    "Framer Motion",
                    "Three.js",
                ]}
            </TagCloud>
        </div>
    );
}
