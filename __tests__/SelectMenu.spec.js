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
    attachToDocument: true,
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


  describe('should be able to navigate with keyboard', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mountWithProps({ options, withKeyboard: true });
    });

    it('should open and focus first option', () => {
      const optionsWrapper = wrapper.findAll(Option);
      expect(optionsWrapper.at(0).element).toBe(document.activeElement);
    });

    it('should go to next option', (done) => {
      const optionsWrapper = wrapper.findAll(Option);

      optionsWrapper.at(0).trigger('keydown.down');
      wrapper.vm.$nextTick(() => {
        expect(optionsWrapper.at(1).element).toBe(document.activeElement);
        done();
      });
    });

    it('should go to previous option', (done) => {
      const optionsWrapper = wrapper.findAll(Option);

      optionsWrapper.at(0).trigger('keydown.down');
      wrapper.vm.$nextTick(() => {
        optionsWrapper.at(1).trigger('keydown.up');
        wrapper.vm.$nextTick(() => {
          expect(optionsWrapper.at(0).element).toBe(document.activeElement);
          done();
        });
      });
    });

    it('should open next menu', (done) => {
      const option = wrapper.find(Option);

      option.trigger('keydown.right');
      wrapper.vm.$nextTick(() => {
        expect(wrapper.findAll(SelectMenu).length).toBe(2);
        done();
      });
    });

    it('should close next menu', (done) => {
      const option = wrapper.find(Option);

      option.trigger('keydown.right');
      wrapper.vm.$nextTick(() => {
        const nextMenu = wrapper.findAll(SelectMenu).at(1);

        nextMenu.find(Option).trigger('keydown.left');
        wrapper.vm.$nextTick(() => {
          expect(wrapper.findAll(SelectMenu).length).toBe(1);
          wrapper.find(SelectMenu).find(Option).trigger('keydown.left');
          done();
        });
      });
    });

    it('should go back to first option', (done) => {
      const optionsWrapper = wrapper.findAll(Option);

      optionsWrapper.at(0).trigger('keydown.down');
      wrapper.vm.$nextTick(() => {
        expect(optionsWrapper.at(1).element).toBe(document.activeElement);
        optionsWrapper.at(1).trigger('keydown.down');

        wrapper.vm.$nextTick(() => {
          expect(optionsWrapper.at(2).element).toBe(document.activeElement);
          optionsWrapper.at(2).trigger('keydown.down');

          wrapper.vm.$nextTick(() => {
            expect(optionsWrapper.at(0).element).toBe(document.activeElement);
            done();
          });
        });
      });
    });

    it('should go back the last option', (done) => {
      const optionsWrapper = wrapper.findAll(Option);

      optionsWrapper.at(0).trigger('keydown.up');
      wrapper.vm.$nextTick(() => {
        expect(optionsWrapper.at(2).element).toBe(document.activeElement);
        done();
      });
    });

    it('should close childMenu', (done) => {
      wrapper.vm.$nextTick(() => {
        let optionsWrapper = wrapper.findAll(Option);
        expect(optionsWrapper.length).toBe(3);

        optionsWrapper.at(2).trigger('keydown.right');
        wrapper.vm.$nextTick(() => {
          expect(wrapper.findAll(SelectMenu).length).toBe(2);

          optionsWrapper = wrapper.findAll(Option);
          optionsWrapper.at(-1).trigger('keydown.right');

          wrapper.vm.$nextTick(() => {
            // Open grand child menu
            expect(wrapper.findAll(SelectMenu).length).toBe(3);

            optionsWrapper = wrapper.findAll(Option);

            // Change opened child menu
            optionsWrapper.at(0).trigger('keydown.right');
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
});
