import { shallowMount, mount } from '@vue/test-utils';
import Arrow from '@/components/Arrow.vue';

const mountWithProps = props => (
  mount(Arrow, { propsData: props })
);

describe('Arrow.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Arrow);
    expect(wrapper.exists()).toBe(true);
  });

  describe('props:', () => {
    it('direction: up', () => {
      const wrapper = mountWithProps({ direction: 'up' });
      expect(wrapper.classes('up')).toBe(true);
    });

    it('direction: down', () => {
      const wrapper = mountWithProps({ direction: 'down' });
      expect(wrapper.classes('down')).toBe(true);
    });

    it('direction: right', () => {
      const wrapper = mountWithProps({ direction: 'right' });
      expect(wrapper.classes('right')).toBe(true);
    });

    it('borderColor', () => {
      const borderColor = '#ccc';
      const wrapper = mountWithProps({ borderColor });
      expect(wrapper.attributes('style')).toBe(`border-color: ${borderColor};`);
    });
  });

  it('should change direction', (done) => {
    const wrapper = mountWithProps({ direction: 'up' });
    expect(wrapper.classes('up')).toBe(true);

    wrapper.setProps({ direction: 'down' });

    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes('down')).toBe(true);
      done();
    });
  });
});
