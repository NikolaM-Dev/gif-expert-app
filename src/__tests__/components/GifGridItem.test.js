import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import GifGridItem from 'components/GifGridItem';

describe('Tests on <GifGridItem />', () => {
  const gif = {
    title: 'Gif title',
    url: 'https://gifUrl.com',
  };

  const wrapper = shallow(<GifGridItem gif={gif} />);

  it('should show <GifGridItem /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a figcaption with the gif.title', () => {
    const figcaptionText = wrapper.find('figcaption').text().trim();

    expect(figcaptionText).toBe(gif.title);
  });

  it('should have a img with the url and alt from props', () => {
    const { src, alt } = wrapper.find('img').props();

    expect(src).toBe(gif.url);
    expect(alt).toBe(gif.title);
  });

  it('should have the className animate__fadeIn', () => {
    const figure = wrapper.find('figure');
    const className = figure.prop('className');

    expect(className.includes('animate__fadeIn')).toBe(true);
  });
});
