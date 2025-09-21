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
                        "Como é que um homem sem as virtudes que lhe são próprias pode cultivar a música ?"
                        <span className="d-block fs-5">Confúcio</span>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Banner;
