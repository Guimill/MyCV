import { ExperienceData } from "../data/experienceData";
import styled from "styled-components";

export default function Experiences() {


  const Content = styled.div`
  grid-area: 2 / 2 / 7 / 6; 
  scrollbar-width: none;
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
                {ExperienceData.map(({ nom, duree, intitule, ville, poste, id }) => (
                  <Paragraphe key={id}>
                    <b>{nom} - {duree} - {ville} </b>
                    <p>{poste} <br />{intitule}</p>
                  </Paragraphe>
                ))}
            </Content>
    );
  }