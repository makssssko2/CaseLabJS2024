import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ImageStore from "../../controller/ImageStore";
export default function Album(...props) {
    const navigate = useNavigate();
    const [count,setCount] = useState(null);

    const clickHandler = (e) => {
        e.preventDefault();
        // При клике по компоненту альбома устаавливаем параметр name и переходим в /album
        navigate(`/album?name=${props[0].name}`);
    }

    useEffect(() => {
        ImageStore.fetchAlbumLength(props[0].name).
        then((res) => setCount(res[0].count))
    },[])

    return (
        <div className="main__album album" onClick={(e) => clickHandler(e)}>
            <div className="album__imageWrapper">
                <div className="album__imageContainer">
                    <img
                        src={"http://localhost:8055/assets/" + props[0].preview + "?fit=cover&width=442&height=270"}
                        alt="preview"
                        className="album__image image"
                    />
                </div>
            </div>
            <h3 className="album__name">{props[0].name}</h3>
            <p className="album__count">
                <span>{count !== null ? count : '...'}</span> фотo
            </p>
        </div>
    );
}
