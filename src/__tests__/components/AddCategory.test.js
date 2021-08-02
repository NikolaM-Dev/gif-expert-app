import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import AddCategory from 'components/AddCategory';

describe('Tests on <AddCategory />', () => {
  const setCategories = jest.fn();
  const value = 'Hello World!';
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  it('should show <AddCategory /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change the text input', () => {
    const input = wrapper.find('input');

    input.simulate('change', { target: { value } });
  });

  it('should not post the information in the submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  it('should call the getCategories and clean up the text input', () => {
    // 1. Simular el inputChange
    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });
    // 2. Simular el submit
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    // 3. setCategories se debe haber llamado
    expect(setCategories).toHaveBeenCalledTimes(1);
    // 3.1 Con una funcion como parametro
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    // 4. El valor del input debe estar en ''
    expect(input.prop('value')).toBe('');
  });
});
