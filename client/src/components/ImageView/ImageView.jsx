import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import ImageStore from "../../controller/ImageStore";
import cross from "./../../img/cross.svg";
import arrowL from "./../../img/arrow-left.svg";
import arrowR from "./../../img/arrow-right.svg";
export default function ImageView({ currentIndex, setView, setIndex }) {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        let i = 0;
        for (let image of ImageStore.images) {
            if (image.id === searchParams.get("image")) {
                setIndex(i);
                return;
            }
            i++;
        }
    });

    function closeHandler() {
        searchParams.delete("image");
        setSearchParams(searchParams);
        setView(false);
    }

    function prevHandler() {
        if (!currentIndex) return;
        searchParams.set("image", ImageStore.images[currentIndex - 1].id);
        setSearchParams(searchParams);
        setIndex(currentIndex - 1);
    }

    function nextHandler() {
        if (currentIndex === ImageStore.images.length - 1) return;
        searchParams.set("image", ImageStore.images[currentIndex + 1].id);
        setSearchParams(searchParams);
        setIndex(currentIndex + 1);
    }

    return (
        <div className="imageView-wrapper">
            <div className="imageView">
                <div className="imageView__image-container">
                    <img
                        src={`http://localhost:8055/assets/${ImageStore?.images[currentIndex]?.image}`}
                        alt=""
                    />
                </div>
                <nav className="imageView__nav">
                    <span>
                        {currentIndex + 1} / {ImageStore.images.length}
                    </span>
                    <button
                        type="button"
                        className="imageView__arrow"
                        onClick={() => prevHandler()}
                    >
                        <img src={arrowL} alt="arrowL" />
                    </button>
                    <button
                        type="button"
                        className="imageView__arrow"
                        onClick={() => nextHandler()}
                    >
                        <img src={arrowR} alt="arrowR" />
                    </button>
                    <button type="button" onClick={() => closeHandler()}>
                        <img src={cross} alt="cross" />
                    </button>
                </nav>
            </div>
        </div>
    );
}
