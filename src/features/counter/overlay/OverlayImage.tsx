import Konva from "konva";
import React from "react";
import useImage from "use-image";
import { Stage, Layer, Image } from "react-konva";

const URL = "https://dyta7vmv7sqle.cloudfront.net/INSURANCE_RESULT/J6NNGWBnsBEoPjh1mpPu8.png?Expires=1676529845&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9keXRhN3ZtdjdzcWxlLmNsb3VkZnJvbnQubmV0L0lOU1VSQU5DRV9SRVNVTFQvSjZOTkdXQm5zQkVvUGpoMW1wUHU4LnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjUyOTg0NX19fV19&Signature=gCgoj9sP22ptfqEn98I~EAiam14ByflIT11jKZtGN8qfOlv0hZZcbHDQZMCFbhgGkrdeLGUCZ1UWZoWHNJVmf0PiyJKLuDy37~~bH8Oaj75jrYZ4WEMSrnoKsPxeVgUzTu8wDkuXg~8TYI44XtmBkbuVVaVwRA-eL4IcwIIcO4h4tu81a7wYLdSC68WcytFdg3T5N4dS~z498NRr8KoKOg1iyVbX6Y-YDponU1VTf7~ajEomhX1UTvp2b29EBK7ihnyQ7RErgLaoAG7vOGM755QkTqdh3hWb5iylaeiyam2V~QNqH0olOmTGEcotv7~-Npy-KkhObqmcTAjEX-OrUQ__&Key-Pair-Id=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApq6RrV2CurW3jjGnyMOr%0A2o0RQq7HcgWjA52QTOhreyh8wOb7rw%2B74v4G%2FyBFVLuEm2o%2Bwvv9wB%2FXiyNJNzf%2F%0AAsaCnymirBEsi3v2jsx%2FNuwHFb9a9hzYAJo7JjjePi%2BLtMiwSnYzSnHXtptGqSJV%0AJl%2FtPuPOg93Nfjds2CqDRZTmqkfU7Pwoq7RoNV202eRk6RThB12q1nAt1%2BF99tI%2F%0APkGo%2BxJdFcVSb4tXy2LcbjNVt9RWamH3ByQaviFC7Jr2XP8kvQR%2FVAhgiXE6vodJ%0AcEu8SC5QWuMefRnz5eO5rkBFgZnA9xbNUNCn0p1Gxl8pKr%2BgNqjvcR7SlBj2lLsk%0A%2BwIDAQAB%0A-----END%20PUBLIC%20KEY-----";

export interface CanvasProp {
    mask_url: string;
    class: string;
    class_uuid: string;
    location: string;
    score: number;
    car_part_name: string; rawLocation: string; car_part_color: string;
    is_part: boolean;
    mask_path: string;
    box: Array<number>;
}

function hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function FilterViaCanvasImage({ props }: { props: CanvasProp }) {
    const [image] = useImage(props.mask_url, "anonymous");
    const imageRef = React.createRef<Konva.Image>();
    const [red, setRed] = React.useState(0);
    const [blue, setBlue] = React.useState(0);
    const [green, setGreen] = React.useState(0);

    React.useEffect(() => {
        if (image && imageRef.current) {
            // you many need to reapply cache on some props changes like shadow, stroke, etc.
            imageRef.current.cache();

        }
    }, [image]);

    React.useEffect(() => {
        const rgb = hexToRgb(props.car_part_color);
        setRed(rgb?.r ?? 0);
        setBlue(rgb?.b ?? 0);
        setGreen(rgb?.g ?? 0)
    }, [])


    return (
        <Layer><Image
            ref={imageRef}
            x={props.box[0] * 1600}
            y={props.box[1] * 1200}
            width={1600 * (props.box[2] - props.box[0])}
            height={1200 * (props.box[3] - props.box[1])}
            image={image}
            filters={[Konva.Filters.RGB]}
            red={red}
            blue={blue}
            green={green}
            opacity={0.3}
        /></Layer>
    );
};

export default FilterViaCanvasImage;