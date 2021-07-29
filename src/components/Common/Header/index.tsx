import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faUserCircle, faJournalWhills } from '@fortawesome/free-solid-svg-icons';

import {
  Header,
  Inner,
  Logo,
  Nav,
  IconLabel,
  IconWrapper,
  Wrapper,
  BrandIconContainer,
  CustomIcon,
} from './styles';
import { PurpleColor } from '@utils/utilColor';

const Introduction: FunctionComponent = () => {
  return (
    <Header>
      <Wrapper>
        <Inner>
          <Link to='/'>
            <Logo>CHOI BOO 블로그</Logo>
          </Link>
          <Nav>
            <Link to='/categories'>
              <IconWrapper>
                <FontAwesomeIcon icon={faBookmark} color={PurpleColor} />
                <IconLabel>카테고리</IconLabel>
              </IconWrapper>
            </Link>
            <Link to='/note/techknology'>
              <IconWrapper>
                <FontAwesomeIcon icon={faJournalWhills} color={PurpleColor} />
                <IconLabel>문서</IconLabel>
              </IconWrapper>
            </Link>
          </Nav>
          <BrandIconContainer>
            <Link to='/about'>
              <IconWrapper>
                <CustomIcon icon={faUserCircle} />
              </IconWrapper>
            </Link>
            <IconWrapper>
              <a href='https://github.com/qnrjs42' target='_blank' rel='noreferrer noopener'>
                <CustomIcon icon={faGithub} />
              </a>
            </IconWrapper>
          </BrandIconContainer>
        </Inner>
      </Wrapper>
    </Header>
  );
};

export default Introduction;
