import React, { FunctionComponent } from 'react';

import { CategoryItem, CategoryListContainer, WrapperCenter } from './styles';

export interface CategoryListProps {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
}

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListContainer>
      <WrapperCenter>
        {Object.entries(categoryList).map(([name, count]) => (
          <CategoryItem to={`?category=${name}`} active={name === selectedCategory} key={name}>
            {name}({count})
          </CategoryItem>
        ))}
      </WrapperCenter>
    </CategoryListContainer>
  );
};

export default CategoryList;
