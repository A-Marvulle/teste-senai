export default function Contato() {
    return (
        <>
            <section className="container">
                <div className="text-center">
                    <h2 className="fs-2">Olá! Meu nome é Alfredo!</h2>
                    <p>Entre em contato</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <div className="col-12 col-lg-6 p-3">
                        <a className="btn btn-light" href="https://github.com/A-Marvulle" target="_blank" rel="noopener noreferrer" title="GitHub">GitHub</a>
                    </div>
                    <div className="col-12 col-lg-6 p-3">
                        <a className="btn btn-light" href="mailto:alfredo.marvulle@gmail.com" target="_blank" rel="noopener noreferrer" title="E-mail">alfredo.marvulle@gmail.com</a>
                    </div>
                    <div className="col-12 col-lg-6 p-3">
                        <a className="btn btn-light" href="https://www.linkedin.com/in/alfredoperesmarvulle-87920a1b7/" target="_blank" rel="noopener noreferrer" title="LinkedIn">LinkedIn</a>
                    </div>
                    <div className="col-12 col-lg-6 p-3">
                        <a className="btn btn-light" href="https://api.whatsapp.com/send/?phone=5511976007382&text=&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" title="WhatsApp">+55 11 976007382</a>
                    </div>
                </div>
            </section>
        </>
    );
}