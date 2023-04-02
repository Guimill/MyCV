import { CompetenceData } from "../data/competencesData";

export default function Competences() {

  return (
    <div>
        {CompetenceData.map(({ nom, outils, id }) => (
          <ul class="paragraphe" key={id}>
            <li class="paragraphe__topParagraphe">{nom}</li>
            <li class="paragraphe__bottomParagraphe">{outils}</li>
          </ul>
        ))}
    </div>
);
}