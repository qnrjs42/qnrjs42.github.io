import styled from '@emotion/styled';

import { BlackColor } from '@utils/utilColor';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: ${BlackColor};

  font-size: 16px;

  @media (max-width: 414px) {
    font-size: 14px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;
