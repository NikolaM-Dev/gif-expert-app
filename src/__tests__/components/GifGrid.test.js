import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import GifGrid from 'components/GifGrid';
import useGifs from 'hooks/useGifs';
jest.mock('hooks/useGifs');

describe('Test on <GifGrid />', () => {
  const category = 'Dragon Ball';

  it('should show <GifGrid /> correctly', () => {
    useGifs.mockReturnValue({
      gifs: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should show items when images are loaded with useGifs', () => {
    const gifs = [
      {
        id: '01',
        title: 'Goku',
        url: 'https://ghipy/goku.gif',
      },
      {
        id: '02',
        title: 'Vegeta',
        url: 'https://ghipy/vegeta.gif',
      },
    ];

    useGifs.mockReturnValue({
      gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper.find('p').exists()).toBeFalsy();
    expect(wrapper.find('GifGridItem')).toHaveLength(gifs.length);
    expect(wrapper).toMatchSnapshot();
  });
});
