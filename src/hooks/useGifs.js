import { useEffect, useState } from 'react';

import getGifs from 'services/getGifs';

const useGifs = ({ category }) => {
  const [state, setState] = useState({
    gifs: [],
    loading: true,
  });

  useEffect(() => {
    getGifs({ category }).then((gifs) => setState({ gifs, loading: false }));
  }, [category]);

  return state;
};

export default useGifs;
