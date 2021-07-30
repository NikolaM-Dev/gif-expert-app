import PropTypes from 'prop-types';

const GifGridItem = ({ gif }) => {
  return (
    <figure className="card animate__animated animate__fadeIn">
      <img src={gif.url} alt={gif.title} />
      <figcaption>{gif.title}</figcaption>
    </figure>
  );
};

GifGridItem.propTypes = {
  gif: PropTypes.object.isRequired,
};

export default GifGridItem;
