# Personalización

La forma más fácil de personalizar el componente es sobrescribir los estilos por defecto. La siguiente tabla muestra las clases disponibles y su propósito:

| Clase                  | Propósito                                            |
|------------------------|------------------------------------------------------|
| .vcs__picker input     | Estilos para el input                                |
| .vcs__arrow-container  | Estilos para el contenedor de la flecha del dropdown |
| .vcs__select-menu      | Estilos para todos los menús del cascader select     |
| .vcs__option           | Estilos para las opciones                            |
| .vcs__option--active   | Estilos para la opción activa                        |
| .vcs__option--disabled | Estilos para las opciones que están deshabilitadas   |
| .vcs__arrow            | Estilos para todas las flechas del cascader select   |
| .vcs__cross button     | Estilos para la cruz                                 |

## Ejemplo

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

<VCSTheming
  placeholder="Seleccione una opción..."
/>
