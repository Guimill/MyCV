import mail from '../../assets/img/mail.svg'
import github from '../../assets/img/github.svg'
import linkedin from '../../assets/img/linkedin.svg'

function Header() {

    return (
        <header class="banner">
            <nav>
                <div>
                    <a href="https://github.com/Guimill">
                        <img src={github} alt="logo de github redirigeant vers mon github"/></a>
                    <a href="https://www.linkedin.com/in/guillaume-milleret/">
                        <img src={linkedin} alt="logo de linkedin redirigeant vers mon linkedin"/></a>
                    <a href="mailto:guillaume.milleret@gmail.com">
                        <img src={mail} alt="logo d'une enveloppe contenant mon mail"/></a>
                </div>        
            <h1>Milleret Guillaume</h1>               
            </nav>  
        </header>
    );
  }

export default Header;