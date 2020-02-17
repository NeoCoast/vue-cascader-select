import { mount } from '@vue/test-utils';
import Option from '@/components/Option.vue';
import SelectMenu from '@/components/SelectMenu.vue';

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
  mount(SelectMenu, {
    propsData: {
      onSelect: jest.fn(),
      ...props,
    },
  })
);

describe('SelectMenu.vue', () => {
  it('renders', () => {
    const wrapper = mountWithProps({});
    expect(wrapper.exists()).toBe(true);
  });

  it('should be a "main" select menu', () => {
    const wrapper = mountWithProps({});
    expect(wrapper.classes('vcs__select-menu__not-main')).toBe(false);
  });

  it('shouldn\'t be a "main" select menu', () => {
    const wrapper = mountWithProps({ notMain: true });
    expect(wrapper.classes('vcs__select-menu__not-main')).toBe(true);
  });

  it('should open next menu on mouseenter if there are more options', (done) => {
    const wrapper = mountWithProps({ options });

    const option = wrapper.find(Option);
    expect(option.is(Option)).toBe(true);

    option.trigger('mouseenter');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAll(SelectMenu).length).toBe(2);
      done();
    });
  });

  it('shouldn\'t open next menu on mouseenter if there\'re no more options', (done) => {
    const wrapper = mountWithProps({ options });

    wrapper.vm.$nextTick(() => {
      const optionsWrapper = wrapper.findAll(Option);
      expect(optionsWrapper.length).toBe(3);

      optionsWrapper.at(1).trigger('mouseenter');
      wrapper.vm.$nextTick(() => {
        expect(wrapper.findAll(SelectMenu).length).toBe(1);
        done();
      });
    });
  });

  it('should close childMenu', (done) => {
    const wrapper = mountWithProps({ options });

    wrapper.vm.$nextTick(() => {
      let optionsWrapper = wrapper.findAll(Option);
      expect(optionsWrapper.length).toBe(3);

      optionsWrapper.at(2).trigger('mouseenter');
      wrapper.vm.$nextTick(() => {
        expect(wrapper.findAll(SelectMenu).length).toBe(2);

        optionsWrapper = wrapper.findAll(Option);
        optionsWrapper.at(-1).trigger('mouseenter');

        wrapper.vm.$nextTick(() => {
          // Open grand child menu
          expect(wrapper.findAll(SelectMenu).length).toBe(3);

          optionsWrapper = wrapper.findAll(Option);

          // Change opened child menu
          optionsWrapper.at(0).trigger('mouseenter');
          wrapper.vm.$nextTick(() => {
            // Grand child menu shouldn't be rendered
            expect(wrapper.findAll(SelectMenu).length).toBe(2);
            done();
          });
        });
      });
    });
  });
});
