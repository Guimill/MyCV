import styled from "styled-components";

export default function Realisations() {


  const Paragraphe = styled.li`
  padding-top: 45vh;
  padding-bottom: 20vh;
  object-fit: cover;
  color: black;
  object-position: center;
  width: 100%;
  height: 30vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
  `

    return (
            <div>
                  <Paragraphe> bleu
                  </Paragraphe>
            </div>
    );
  }