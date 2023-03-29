import { ExperienceData } from "../data/experienceData";

export default function Experiences() {

    return (
            <div>
                {ExperienceData.map(({ nom, duree, intitule, ville, poste, id }) => (
                  <ul class="paragraphe" key={id}>
                    <li class="paragraphe__topParagraphe">{nom} - {duree} - {ville}</li>
                    <li class="paragraphe__bottomParagraphe">{poste}{intitule}</li>
                  </ul>
                ))}
            </div>
    );
  }