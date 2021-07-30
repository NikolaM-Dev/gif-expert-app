import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import getGifs from 'services/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ category }).then(setGifs);
  }, [category]);

  return (
    <>
      <h2>{category}</h2>
      <div className="card__grid">
        {gifs.map((gif) => (
          <GifGridItem key={gif.id} gif={gif} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
