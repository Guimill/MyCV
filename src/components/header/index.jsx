import { Link } from 'react-router-dom';
import github from '../../assets/img/github.svg'
import linkedin from '../../assets/img/linkedin.svg'

export default function Header() {

    const linkStyle = {
        textDecoration: "none",
        color: "$fourth-color"
    };

    return (
        <header className="banner">
            <nav>
                <div>
                    <a href="https://github.com/Guimill">
                        <img src={github} alt="logo de github redirigeant vers mon github" /></a>
                    <a href="https://www.linkedin.com/in/guillaume-milleret/">
                        <img src={linkedin} alt="logo de linkedin redirigeant vers mon linkedin" /></a>
                </div>
                <Link to={'/'} style={linkStyle}>
                    <h1>Guillaume Milleret</h1>
                </Link>
            </nav>
        </header>
    );
}
