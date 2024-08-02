import { useSearchParams} from "react-router-dom";
export default function Image(...props) {
    const [params,setParams] = useSearchParams();

    const clickHandler = (e) => {
        e.preventDefault();
        // При клике по компоненоту фото мы устанавливаем индекс в стейт из родительского компонента
        props[0].setIndex();
        // Также устанавливаем true в стейт родителя, который отвечает за показ поп-апа
        props[0].setView(true);
        // Ну и добавляем параметр с айдишником изображения
        params.set("image",props[0].id);
        setParams(params);
    };
    return (
        <div className="main__album album" onClick={(e) => clickHandler(e)}>
            <div className="album__imageWrapper">
                <div className="album__imageContainer">
                    <img
                        src={"http://localhost:8055/assets/" + props[0].image + "?fit=cover&width=292&height=170"}
                        alt="preview"
                        className="album__image image"
                    />
                </div>
            </div>
            {/*В бд предусмотрено поле заголовка фото, но для сходства с примером убрал*/}
            {/* <h3 className="album__name">{props[0].title}</h3> */}
        </div>
    );
}
