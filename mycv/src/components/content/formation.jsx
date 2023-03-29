import { FormationData } from "../data/formationData"
import styled from "styled-components";

export default function Formation() {


  const Content = styled.div`
  grid-area: 2 / 2 / 7 / 6; 
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  `

  const Paragraphe = styled.li`
  object-fit: cover;
  color: black;
  object-position: center;
  width: 100%;
  height: 50vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
  `

    return (
            <Content>
                {FormationData.map(({ projets, diplome, intitule, ville, dateAdmission, specialisation, id }) => (
                  <Paragraphe key={id}>
                    <b>{diplome} - {dateAdmission} - {ville} </b>
                    <p>{specialisation} <br />{intitule}</p>
                    <p>{projets}</p>
                  </Paragraphe>
                ))}
            </Content>
    );
  }