import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BlackColor } from '@utils/utilColor';

export const Header = styled.header`
  width: 100%;
  border-bottom: 1px solid rgb(230, 230, 230);
  color: ${BlackColor};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1024px;
  height: 60px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.h3``;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  margin-left: 5px;
  margin-right: auto;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`;

export const CustomIcon = styled(FontAwesomeIcon)`
  font-size: 1.25em;
`;

export const IconLabel = styled.div`
  margin-left: 3px;

  @media (max-width: 375px) {
    display: none;
  }
`;

export const BrandIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 375px) {
    display: none;
  }
`;
