import React from 'react';
import { DiPython,DiReact,DiJava,DiCode } from 'react-icons/di';
import { Gi3DGlasses,Gi3DHammer } from "react-icons/gi";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've learned a range of algorithm in the University. And Taught myself about websit development.
    </SectionText>
    <List>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Python</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size="3rem" />
        <ListContainer>
          <ListTitle>C++</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size="3rem" />
        <ListContainer>
          <ListTitle>Java</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>React</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Gi3DGlasses size="3rem" />
        <ListContainer>
          <ListTitle>Jupyter</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Gi3DHammer size="3rem" />
        <ListContainer>
          <ListTitle>Spyder</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
    
  </Section>
);

export default Technologies;
