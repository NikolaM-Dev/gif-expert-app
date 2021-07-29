import { useState } from 'react';

import AddCategory from './components/AddCategory';

const CATEGORIES = ['One Punch', 'Samurai X', 'Dragon ball'];

const GifExpertApp = () => {
  const [categories, setCategories] = useState(CATEGORIES);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory />
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
