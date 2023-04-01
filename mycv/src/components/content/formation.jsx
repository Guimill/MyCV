import { FormationData } from "../data/formationData"
import DownloadButton from "../downloadButton";

export default function Formation() {

  return (
    <div>
        {FormationData.map(({ projets, diplome, intitule, ville, dateAdmission, specialisation, id, downloadLink }) => (
          <ul class="paragraphe" key={id}>
            <li class="paragraphe__topParagraphe">{diplome} - {dateAdmission} - {ville}</li>
            <li class="paragraphe__bottomParagraphe">{specialisation}{intitule}</li>
            <li>{projets}</li>
            <li><DownloadButton downloadLink={downloadLink}/></li>
          </ul>
        ))}
    </div>
);
}