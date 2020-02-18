import { mount } from '@vue/test-utils';
import Arrow from '@/components/Arrow.vue';
import SelectMenu from '@/components/SelectMenu.vue';
import VueCascaderSelect from '@/VueCascaderSelect.vue';

const options = [
  {
    label: 'Sibling 1',
    value: 'sibling1',
    options: [
      {
        label: 'Sibling 1 - Child 1',
        value: 'sibling1-child1',
      },
    ],
  },
  {
    label: 'Sibling 2',
    value: 'sibling2',
  },
  {
    label: 'Sibling 3',
    value: 'sibling3',
    options: [
      {
        label: 'Sibling 3 - Child 1',
        value: 'sibling3-child1',
        options: [
          {
            label: 'Sibling 3 - Grand Child 1',
            value: 'sibling3-grand-child1',
          },
        ],
      },
    ],
  },
];

const mountWithProps = props => (
  mount(VueCascaderSelect, {
    propsData: {
      options,
      onClear: jest.fn(),
      onSelect: jest.fn(),
      value: '',
      ...props,
    },
  })
);

describe('VueCascaderSelect.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mountWithProps({});
  });

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should have one Arrow pointing down', (done) => {
    const arrows = wrapper.findAll(Arrow);

    expect(arrows.length).toBe(1);

    const arrow = arrows.at(0);
    expect(arrow.classes('down')).toBe(true);
    done();
  });

  it('should have an input', () => {
    expect(wrapper.contains('input')).toBe(true);
  });

  it('the input should contain the default placeholder', () => {
    const input = wrapper.find('input');
    expect(input.attributes('placeholder'))
      .toBe(VueCascaderSelect.props.placeholder.default);
  });

  it('the input should contain the placeholder passed as a prop', (done) => {
    const placeholder = 'Custom placeholder';
    wrapper.setProps({ placeholder });

    wrapper.vm.$nextTick(() => {
      const input = wrapper.find('input');
      expect(input.attributes('placeholder')).toBe(placeholder);
      done();
    });
  });

  it('triggering the menu should make to Arrow point up', (done) => {
    wrapper.find('.vcs__picker').trigger('click');

    wrapper.vm.$nextTick(() => {
      const arrow = wrapper.find(Arrow);
      expect(arrow.classes('up')).toBe(true);
      done();
    });
  });

  it('triggering the menu should open the SelectMenu', (done) => {
    expect(wrapper.contains(SelectMenu)).toBe(false);

    wrapper.find('.vcs__picker').trigger('click');

    wrapper.vm.$nextTick(() => {
      expect(wrapper.contains(SelectMenu)).toBe(true);
      done();
    });
  });

  it('changing the value should close the SelectMenu', (done) => {
    wrapper.find('.vcs__picker').trigger('click');

    wrapper.vm.$nextTick(() => {
      wrapper.setProps({ value: 'test' });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.contains(SelectMenu)).toBe(false);
        done();
      });
    });
  });

  it('shouldn\'t have a cross', () => {
    expect(wrapper.classes('vcs__cross')).toBe(false);
  });

  it('shoud have a cross if there\'s a value', (done) => {
    wrapper.setProps({ value: 'test' });

    wrapper.vm.$nextTick(() => {
      const cross = wrapper.find('.vcs__cross');
      expect(cross.contains('button')).toBe(true);
      expect(cross.find('button').text()).toBe('×');
      done();
    });
  });
});
