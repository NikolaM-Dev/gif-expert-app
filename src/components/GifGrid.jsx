import PropTypes from 'prop-types';

import GifGridItem from './GifGridItem';
import useGifs from 'hooks/useGifs';

const GifGrid = ({ category }) => {
  const { gifs, loading } = useGifs({ category });

  return (
    <>
      <h2 className="animate__animated animate__fadeIn">{category}</h2>
      {loading && <p className="animate__animated animate__flash">loading</p>}
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
