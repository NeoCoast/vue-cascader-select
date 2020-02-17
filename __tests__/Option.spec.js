import { shallowMount, mount } from '@vue/test-utils';
import Arrow from '@/components/Arrow.vue';
import Option from '@/components/Option.vue';

const mountWithProps = props => (
  mount(Option, { propsData: props })
);

describe('Option.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Option);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the label', () => {
    const label = 'NeoCoast';
    const wrapper = mountWithProps({ label });
    expect(wrapper.text()).toBe(label);
  });

  it('shouldn\'t be active', () => {
    let wrapper = mountWithProps({});
    expect(wrapper.classes('vcs__option--active')).toBe(false);

    wrapper = mountWithProps({ active: false });
    expect(wrapper.classes('vcs__option--active')).toBe(false);
  });

  it('should be active', () => {
    const wrapper = mountWithProps({ active: true });
    expect(wrapper.classes('vcs__option--active')).toBe(true);
  });

  it('shouldn\'t be disabled', () => {
    let wrapper = mountWithProps({});
    expect(wrapper.classes('vcs__option--disabled')).toBe(false);

    wrapper = mountWithProps({ disabled: false });
    expect(wrapper.classes('vcs__option--disabled')).toBe(false);
  });

  it('should be disabled', () => {
    const wrapper = mountWithProps({ disabled: true });
    expect(wrapper.classes('vcs__option--disabled')).toBe(true);
  });

  it('should render an Arrow', () => {
    const wrapper = mountWithProps({
      options: [{ label: 'NeoCoast', value: 'neocoast' }],
    });

    expect(wrapper.contains(Arrow)).toBe(true);
  });

  it('shouldn\'t render an Arrow', () => {
    const wrapper = mountWithProps({});

    expect(wrapper.contains(Arrow)).toBe(false);
  });

  it('should emit on mouseenter', () => {
    const wrapper = mountWithProps({});

    wrapper.trigger('mouseenter');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.emitted().openMenu).toBeTruthy();
    });
  });

  it('should call onSelect on click if the option is selectable', () => {
    const onSelect = jest.fn();
    const wrapper = mountWithProps({ onSelect });

    wrapper.trigger('click');
    wrapper.vm.$nextTick(() => {
      expect(onSelect).toBeCalled();
      expect(onSelect).toBeCalledTimes(1);
    });
  });

  it('shouldn\'t call onSelect on click if the option isn\'t selectable', () => {
    const onSelect = jest.fn();
    const wrapper = mountWithProps({ onSelect, selectable: false });

    wrapper.trigger('click');
    wrapper.vm.$nextTick(() => {
      expect(onSelect).not.toBeCalled();
      expect(onSelect).toBeCalledTimes(0);
    });
  });

  it('shouldn\'t call onSelect on click if the option is disabled', () => {
    const onSelect = jest.fn();
    const wrapper = mountWithProps({ onSelect, disabled: true });

    wrapper.trigger('click');
    wrapper.vm.$nextTick(() => {
      expect(onSelect).not.toBeCalled();
      expect(onSelect).toBeCalledTimes(0);
    });
  });
});
