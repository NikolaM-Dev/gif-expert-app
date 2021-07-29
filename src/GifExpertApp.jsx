import { useState } from 'react';

const CATEGORIES = ['One Punch', 'Samurai X', 'Dragon ball'];

const GifExpertApp = () => {
  const [categories, setCategories] = useState(CATEGORIES);

  const handleAdd = () => {
    setCategories((categories) => [...categories, 'Hunter X Hunter']);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <button onClick={handleAdd}>Add Category</button>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
