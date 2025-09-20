import Card from "../components/card/card";
import ceo from '../assets/ceo.webp';
  const curiosidades = [
    { title: 'Uso de IA', text: ' O programa é um dos softwares que lida melhor com o algoritmo de recomendação, que ajuda o usuário a descobrir novas músicas ou acompanhar o trabalho do seu artista favorito.' },
    { title: 'Pirataria', text: 'Transferências de música por sites de downloads caíram significativamente após a chegada dos serviços de streaming de música.' },
    { title: '25% Sem Play', text: 'Estima-se que cerca de 25% das faixas hospedadas no serviço nunca foram reproduzidas por terceiros.' },
    { title: 'Produtos Físicos', text: 'Spotify é um programa criado para rodar 100% na nuvem e totalmente digitalizado, sem qualquer dependência de hardware.' },
  ]
export default function Home() {
  return (
    <>
      {/* Curiosidades */}
      <section className="container">
        <div className="d-flex flex-column flex-lg-row-reverse">
          <div className="col-12 col-lg-6 p-3">
            <h2 className="fs-2 text-center text-lg-start">Sobre o Spotify</h2>
            <p><strong>Spotify</strong> é um serviço de streaming de música, podcast e vídeo que foi lançado oficialmente em 23 de abril de 2006. É o serviço de streaming de música mais popular e usado do mundo. Ele é desenvolvido pela startup <strong>Spotify</strong> AB em Estocolmo, na Suécia. Ele fornece conteúdo protegido de conteúdo provido de restrição de gestão de direitos digitais de gravadoras e empresas de mídia. O <strong>Spotify</strong> é um serviço freemium; com recursos básicos sendo gratuitos com propagandas ou limitações, enquanto recursos adicionais, como qualidade de transmissão aprimorada e downloads de música, são oferecidos para assinaturas pagas.</p>
             <p className="fonte">Fonte: <a href="https://pt.wikipedia.org/wiki/Spotify" target="_blank" rel="noopener noreferrer" title="Wikipédia">Wikipédia</a></p>
          </div>
          <div className="col-12 col-lg-6 p-3">
            <figure className="img__ceo">
              <img src={ceo} alt="Foto Daniel Ek" title="Foto Daniel Ek" />
              <figcaption>Daniel Ek, Fundador</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Curiosidades */}
      <section className="container">
        <h2 className="fs-2 text-center">Algumas Curiosidades Sobre o Aplicativo</h2>
        <div className="d-flex flex-column flex-lg-row justify-content-center">
          {curiosidades.map((curiosidade, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 p-3">
              <Card
                title={curiosidade.title}
                text={curiosidade.text}
                type="curiosidades"
              />
            </div>
          ))}
        </div>
        <p className="fonte">Fonte: <a href="https://canaltech.com.br/apps/curiosidades-sobre-spotify-que-voce-provavelmente-nao-sabia-205776/" target="_blank" rel="noopener noreferrer" title="CanalTech">Canal Tech</a></p>
        <p>Para efeito de curioside, se você é fã de Star Wars e abrir no computador verá uma mudança: o <span className="fst-italic">timer</span> da música se torna um Sabre de Luz, perceberá também que é possível clicar nele para trocar o tipo de Sabre.</p>
      </section>

    </>
  );
}
