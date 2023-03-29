import { ExperienceData } from "../data/experienceData";
import styled from "styled-components";
import React, { useState } from "react";

export default function Experiences() {


  const Content = styled.div`
  grid-area: 2 / 2 / 7 / 6; 
  background-color: cadetblue;
  `

  const Paragraphe = styled.li`
  font-size: 2rem;
  background-color: black;
  `

  const [scrollTop, setScrollTop] = useState(1);

  const onScroll = (event) =>{
      if(event.currentTarget.scrollTop >0 && event.currentTarget.scrollTop <200){
        setScrollTop(2)
    }
      if(event.currentTarget.scrollTop >200 && event.currentTarget.scrollTop <400){
        setScrollTop(3)
    }
      if(event.currentTarget.scrollTop >400 && event.currentTarget.scrollTop <600){
        setScrollTop(4)
    }
      if(event.currentTarget.scrollTop >600 && event.currentTarget.scrollTop <800){
        setScrollTop(5)
    }
      if(event.currentTarget.scrollTop >800 && event.currentTarget.scrollTop <100){
        setScrollTop(6)
    }
  }

    return (
            <Content style={{overflow: 'scroll', fontSize: '5rem'}} onScroll={onScroll}>
              <div>
                scroll top: <b>{scrollTop}</b>
              </div>
              <div>
                {ExperienceData.map(({ nom, duree, intitule, ville, poste, id }) => (
                  <Paragraphe key={id}>
                    {nom}{duree}{intitule}{ville}{poste}{id}
                  </Paragraphe>
                ))}
              </div>
            </Content>
    );
  }