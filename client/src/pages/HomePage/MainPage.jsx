import { useEffect } from "react";
import ImageStore from "../../controller/ImageStore";
import Album from "../../components/Album/Album";
import { observer } from "mobx-react-lite";
const MainPage = () => {
    useEffect(() => {
        ImageStore.fetchAlbums();
    }, []);

    return (
        <div className="main__container container">
            {ImageStore.albums &&
                ImageStore.albums.map((album, index) => {
                    return <Album {...album} key={index} index={index}></Album>;
                })}
        </div>
    );
};

export default observer(MainPage);
