import Konva from "konva";
import React from "react";
import useImage from "use-image";
import { Stage, Layer, Image } from "react-konva";

function OriginImage({ url }: { url: string }) {
    const [image] = useImage(url, "anonymous");
    const imageRef = React.createRef<Konva.Image>();

    React.useEffect(() => {
        if (image && imageRef.current) {
            // you many need to reapply cache on some props changes like shadow, stroke, etc.
            imageRef.current.cache();
        }
    }, [image]);


    return (
        <Layer><Image
            ref={imageRef}
            x={0}
            y={0}
            width={1600}
            height={1200}
            image={image}
        /></Layer>
    );
};

export default OriginImage;