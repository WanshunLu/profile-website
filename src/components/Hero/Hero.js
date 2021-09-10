import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section >
    <LeftSection raw nopadding>
      <SectionTitle main center>
        Welcome To <br />
        My profile
      </SectionTitle>
      <SectionText>
      A Junior student good at using python and C++. More than two years of Python programming experience and more than one year of C++ programming experience. Have development experiences by using python.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;