# Theming

The easiest way to customize the component is to override the default styles. The following table shows all the available classes and their purpose:

| Class                  | Purpose                                              |
|------------------------|------------------------------------------------------|
| .vcs__picker input     | Styles for the input element                         |
| .vcs__arrow-container  | Styles for the container of the dropdown arrow       |
| .vcs__select-menu      | Styles for all the menus across the cascader select  |
| .vcs__option           | Styles for the options                               |
| .vcs__option--active   | Styles for the active option                         |
| .vcs__option--disabled | Styles for disabled options                          |
| .vcs__arrow            | Styles for all arrows across the cascader select     |
| .vcs__cross button     | Styles for the cross                                 |

## Example

```css
.vcs__picker input,
.vcs__select-menu {
  background: #282b34;
  color: white;
  border-color: #282b34;
}

.vcs__picker input::placeholder {
  color: #bbb;
}

.vcs__option--active {
  background: #41444e;
}

.vcs__option:hover {
  background: #474b56;
}
```

<VCSTheming />