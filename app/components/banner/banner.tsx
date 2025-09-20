import "./banner.css";
import banner from '../../assets/banner.webp';

function Banner() {
    return (
        <div
            className="banner d-none d-lg-block"
            style={{ backgroundImage: `linear-gradient(90deg,rgba(26, 26, 26, 0.5) 50%, rgba(26, 26, 26, 0.5) 100%), url(${banner})` }}
        >
            <div className="container h-100 text-center">
                <div className="d-flex justify-content-center align-items-center h-100 w-100">
                    <h2 className="fs-1 text-white">
                        "A música é celeste, de natureza divina e de tal beleza que encanta a alma e a eleva acima da sua condição."
                        <span className="d-block fs-5">Aristóteles</span>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Banner;
