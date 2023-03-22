import mail from '../../assets/img/mail.svg'
import github from '../../assets/img/github.svg'
import linkedin from '../../assets/img/linkedin.svg'

function Header() {

    return (
        <header class="banner" role="banner" style={{minWidth: "100%"}}>
            <div class="banner__containerTop">
                <h1>SIMPSONS PolitiScale</h1>
                <div>
                    <button class="banner__containerTop__buttonLangue"><h3>Dark</h3></button>
                    <button class="banner__containerTop__buttonLangue"><h3>Bright</h3></button>
                    <button class="banner__containerTop__buttonLangue"><h3>Contrast</h3></button>
                </div>
            </div>
            <div class="banner__containerBottom">
                <a class="banner__containerBottom__a" 
                    href="mailto:guillaume.milleret@gmail.com">
                        <img class="banner__containerBottom__a__img" src={mail} alt="logo d'une enveloppe contenant mon mail"/></a>
                <a class="banner__containerBottom__a" 
                    href="https://github.com/Guimill">
                        <img class="banner__containerBottom__a__img" src={github} alt="logo de github redirigeant vers mon github"/></a>
                <a class="banner__containerBottom__a" 
                    href="https://www.linkedin.com/in/guillaume-milleret/">
                        <img class="banner__containerBottom__a__img" src={linkedin} alt="logo de linkedin redirigeant vers mon linkedin"/></a>
            </div>
        </header>
    );
  }

export default Header;