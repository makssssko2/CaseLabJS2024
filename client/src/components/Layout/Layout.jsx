import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import cross from "./../../img/cross.svg";

export default function Layout() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const goBack = () => {
        navigate('./..');
    }
    return (
        <>
            <header className="page__header header">
                <div className="header__container container">
                    {searchParams.get("name") && (
                        <button type="button" className="header__goBack" onClick={() => goBack()}>
                            <img src={cross} alt="back" />
                        </button>
                    )}
                    <h1 className="header__title">{searchParams.get("name") || "Альбомы"}</h1>
                </div>
            </header>
            <main className="page__main main">
                <Outlet></Outlet>
            </main>
        </>
    );
}
