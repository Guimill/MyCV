import { CompetenceData } from "../data/competencesData";
import Sidebar from "../sidebar";

export default function Competences() {

  return (
    <>
    <Sidebar />
    <div>
        {CompetenceData.map(({ nom, outils, id }) => (
          <ul className="paragraphe" key={id}>
            <li className="paragraphe__topParagraphe">{nom}</li>
            <li className="paragraphe__bottomParagraphe">{outils}</li>
          </ul>
        ))}
    </div>
    </>
);
}