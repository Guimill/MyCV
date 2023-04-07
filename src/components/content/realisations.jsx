import { RealisationsData } from "../data/realisationsData";
import Sidebar from "../sidebar";

export default function Realisations() {

  const aStyle = {
    textDecoration: "none",
    fontSize: "2.5vh",
    color: 'rgb(244, 147, 147)',
  };

  return (
    <>
    <Sidebar />
    <div>
      {RealisationsData.map(({ id, src, caption, href }) => (
        <ul className="paragraphe" key={id}>
          <li className="paragraphe__topParagraphe">
            <a style={aStyle} href={ href } target={"blank"}><img style={{ height: "30vh", width: "auto" }} src={ src } alt={ caption } />
              <p><b>{ caption }</b></p></a>
          </li>
        </ul>
      ))}
    </div>
    </>
  );
}