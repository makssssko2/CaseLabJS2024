import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Image from "../../components/Image/Image";
import ImageStore from "../../controller/ImageStore";
import { observer } from "mobx-react-lite";
import ImageView from "../../components/ImageView/ImageView";


const AlbumPage = () => {
    const [params] = useSearchParams();
    const [imageViewIndex, setImageViewIndex] = useState(0);
    const [imageView, setImageView] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const albumName = params.get("name");

        // Предусматриваем некорректный путь (отсутствие параметра)
        if(!albumName) {
            navigate('./..')
        }

        ImageStore.fetchImages(albumName);

        // Случай перехода по ссылке к конкретной фоттографии конкретного альбома
        if (params.get("image") !== null) {
            setImageView(true);
        }
    }, []);

    if (ImageStore.isLoading) {
        return <></>;
    }

    return (
        <>
            <div className="main__container container main__container_album">
                {ImageStore.images &&
                    ImageStore.images.map((album, index) => {
                        return (
                            <Image
                                {...album}
                                key={index}
                                setIndex={() => setImageViewIndex(index)}
                                setView={(value) => setImageView(value)}
                            />
                        );
                    })}
            </div>
            {imageView && (
                <ImageView
                    currentIndex={imageViewIndex}
                    setIndex={(index) => setImageViewIndex(index)}
                    setView={(value) => setImageView(value)}
                />
            )}
        </>
    );
};

export default observer(AlbumPage);
