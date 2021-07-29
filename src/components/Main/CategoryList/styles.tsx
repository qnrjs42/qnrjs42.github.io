import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { PurpleColor } from '@utils/utilColor';

type CategoryItemProps = {
  active: boolean;
};

type GatsbyLinkProps = {
  children: React.ReactNode;
  className?: string;
  to: string;
} & CategoryItemProps;

export const CategoryListContainer = styled.div`
  display: flex;
  width: 1024px;
  margin: 0 auto;
  margin-top: 30px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const WrapperCenter = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  margin-bottom: 10px;
  font-size: 1em;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;
  color: ${PurpleColor};

  background-color: rgb(241, 243, 245);
  border-radius: 1rem;
  padding: 5px 10px;

  &:last-of-type {
    margin-right: 0;
  }
`;
