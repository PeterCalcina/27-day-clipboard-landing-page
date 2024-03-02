# Clipboard Landing Page

Esta es una página simple pero con un diseño atractivo a la vista, con animaciones para una mejor experiencia de usuario. El diseño es responsivo para que se pueda apreciar desde las pantallas más pequeñas.

# Contenido

- [Recursos](#Recursos)
- [Desarrollo](#Desarrollo)
- [Créditos](#Créditos)

## Recursos

#### Font Family
La fuente usada para este proyecto fue:  **[Bai Jamjuree](https://fonts.google.com/specimen/Bai+Jamjuree).**
> https://fonts.google.com/specimen/Bai+Jamjuree

```html
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&display=swap');
```

Weights:  **400** y **600**

Font Size principal: 18px.

#### Colores

##### Primarios
> Strong Cyan: hsl(171, 66%, 44%)

> Light Blue: hsl(233, 100%, 69%)

##### Neutrales
> Dark Grayish Blue: hsl(210, 10%, 33%)

> Grayish Blue: hsl(201, 11%, 66%)

## Desarrollo

- Como la página tiene varios elementos dentro se elegio cuidadosamente las secciones a repartir y las etiquetas para usar, en este caso se dividio en un ```<header/>``` para el encabezado de la página, un ```<main/>``` para el cuerpo principal y por último un ```<footer/>``` para el final.

- Dentro del ```<main/>``` contamos con 5 etiquetas ```<section/>``` para dividir la información de la página la divisón del contenido ```<header/>``` y ```<footer/>``` es más sencilla ya que no tiene mucho contenido.

- Se definieron los estilos generales como ser: Colores, importación de la fuente, se establecieron variables para los pesos y tamaño de fuente.

- Usamos un archivo JS para almacenar la mayoria de las animaciones que tiene la página, se definieron métodos genéricos para poder reutilizarlos en otros componentes para animarlos y se programo cada animación para iniciarlo según el scroll de la página.

- Finalmente se establecio el estilo responsive para dispositivos más pequeños y se quitaron las animaciones que venian del JS y se mantuvieron las que son con solo CSS.

## Créditos

Este proyecto es una creación de  [Frontend Mentor](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9 "Frontend Mentor")
