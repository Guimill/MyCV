import lisa from '../../assets/img/lisa.png'
import shiny from '../../assets/img/shiny.jpg'

export default function Realisations() {

  const aStyle = {
    textDecoration: "none",
    fontSize: "2vh",
    color: '#000000'
  };

    return (
      <div>
          <ul class="realisationParagraphe">
            <li className="paragraphe__topParagraphe">
              <a style={aStyle} href=" https://milleretg4progress.shinyapps.io/shinyapps/" target={"blank"}><img style={{height: "30vh", width: "20vw"}} src={shiny} alt="My simpsons voting app" />
              <p>Synthetiseur de fonctionnalitees des Zones Humides</p></a>
            </li>
            <li className="paragraphe__topParagraphe">
              <a style={aStyle} href="https://the-simpsons-politiscales.fr/" target={"blank"}><img style={{height: "30vh"}} src={lisa} alt="My shiny app" />
              <p>The Simpsons PolitiScale</p></a>
            </li>
          </ul>
      </div>
    );
  }