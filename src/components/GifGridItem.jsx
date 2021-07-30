import PropTypes from 'prop-types';

const GifGridItem = ({ gif }) => {
  return (
    <div className="card">
      <figure>
        <img src={gif.url} alt={gif.title} />
        <figcaption>{gif.title}</figcaption>
      </figure>
    </div>
  );
};

GifGridItem.propTypes = {
  gif: PropTypes.object.isRequired,
};

export default GifGridItem;
