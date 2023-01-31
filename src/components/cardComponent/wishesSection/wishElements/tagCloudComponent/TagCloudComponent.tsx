import { TagCloud } from "@frank-mayer/react-tag-cloud";
import { useWishesSectionStore } from "./../../../../../stores/WishesSectionStore/WishesSectionStore";

export function TagCloudComponent() {
    return (
        <div className="tagCloud" style={{}}>
            <TagCloud
                options={(w: Window & typeof globalThis) => ({
                    radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                    maxSpeed: "normal",
                })}
                // onClickOptions={{ passive: true }}
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
