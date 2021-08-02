import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import GifExpertApp from 'GifExpertApp';

describe('Tests on <GifExpertApp />', () => {
  it('should show <GifExpertApp /> correctly', () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should show a categories list', () => {
    const categories = ['One Punch', 'Dragon Ball'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper.find('GifGrid')).toHaveLength(categories.length);
    expect(wrapper).toMatchSnapshot();
  });
});
