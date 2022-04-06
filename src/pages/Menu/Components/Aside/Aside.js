import React, { useState, useEffect } from 'react';
import CategoryList from './CategoryList/CategoryList';

import './Aside.scss';
const Aside = () => {
  const [category, setCategory] = useState([]);

  const fetchData = () => {
    async function fetchAndSetCategory() {
      const response = await fetch('/data/categoryData.json');
      const data = await response.json();
      setCategory(data);
    }
    fetchAndSetCategory();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <aside className="leftWrap">
      <div className="lnb">
        <div className="lnbInner">
          <ul className="categoryWarp">
            {category.map(({ id, categoryName, categoryList }) => {
              return (
                <li className="category" key={id}>
                  <div className="categoryTitle">{categoryName}</div>
                  <ul className="childWrap">
                    <CategoryList categoryList={categoryList} />
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
