import styled from '@emotion/styled';
import { PurpleColor } from '@utils/utilColor';

export const PostHeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 768px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 20px;
  }
`;

export const PostHeaderTitle = styled.h1`
  font-size: 2.625em;
  color: ${PurpleColor};
  margin-bottom: 8px;
`;

export const PostHeaderDate = styled.div`
  font-size: 1em;
  font-weight: 400;
  opacity: 0.7;
  margin-bottom: 16px;
`;

export const PostHeaderCategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const PostHeaderCategoryItem = styled.div`
  margin-right: 20px;
  margin-bottom: 10px;
  background-color: rgb(241, 243, 245);
  border-radius: 1rem;
  padding: 5px 10px;
  color: ${PurpleColor};
`;
