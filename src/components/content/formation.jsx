import { FormationData } from "../data/formationData"
import Sidebar from "../sidebar"

/* import DownloadButton from "../downloadButton"; */

export default function Formation() {

  /* <li><DownloadButton downloadLink={downloadLink} diplomeName={diplomeName} /></li> */

  return (
    <>
      <Sidebar />
      <div>
        {FormationData.map(({ projets, diplome, intitule, ville, dateAdmission, specialisation, id, downloadLink, diplomeName }) => (
          <ul className="paragraphe" key={id}>
            <li className="paragraphe__topParagraphe">{diplome} - {dateAdmission} - {ville}</li>
            <li className="paragraphe__bottomParagraphe">{specialisation} {intitule}</li>
            <li style={{color:"burlywood", fontSize:"2vh", width:"50%", textAlign:"center"}}><b>{projets}</b></li>
          </ul>
        ))}
      </div>
    </>
  );
}