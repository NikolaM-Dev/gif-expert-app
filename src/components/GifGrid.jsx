import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const API_KEY = 'gpUFXO3qzly0cHNaGV8lbGzqdpxklvVH';
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=${10}&api_key=${API_KEY}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url,
    }));

    setGifs(gifs);
  };

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
