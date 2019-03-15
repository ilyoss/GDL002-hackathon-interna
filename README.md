![enter image description here](https://lh3.googleusercontent.com/d2xz_LvZSxxTbpOobKFbbdWKSebWUEdDPnZ6vVW94oRBF-KMoMwjl6A7IfuzyVjVQT5FhMPhVuO0 "Logo")

## Planteamiento:
INFINITY MARVEL es una aplicación que está dirigida a personas entre 15 y 40 años que lean comics, les interese el mundo cinematográfico de Marvel; pero a su vez para público en general que no sean fan de Marvel y hayan visto por lo menos una película o les interese adentrarse en este mundo de ciencia ficción, pues mostrará cronológicamente la forma en la que debes ir viendo las películas para poder entender las historias y el seguimiento de las mismas.
Este apartado muestra una breve descripción en un video del orden cronológico del seguimiento de las películas con la intención que si el usuario no tiene mucho conocimiento pueda adentrarse y utilizar este como filtro para llegar a poder ver los trailers o incluso las películas.
Del mismo modo se mostrará un dato icónico de cada persona para que sea de ayuda para poder identificarlos.

## Sección de prototipado:

### Baja fidelidad
![enter image description here](https://lh3.googleusercontent.com/uL0B77jS35l7zs_KuyyUtRgB1WbUK8vhkGN8RYYJsPhSpGPURmEBZN-wb2qFV5GBKgTVHmt2Bi_0 "Ipad view")

![enter image description here](https://lh3.googleusercontent.com/Fgrd0N7CcriT6Za7_gpK9ScA5UZ0O-rds5d26J96CqaDijmXvizRsFlUtR-ExofwhGv4TZWP4XM- "Mockup")

### Alta fidelidad
![enter image description here](https://lh3.googleusercontent.com/H0DOFLRe9OHUNxwgKxRBaIqlVSAEpIodCtiQ8bPFJFV0KsVIjTf1LDramwlIaME7Uv-vxL3YK1rP "Figma")
https://www.figma.com/proto/VU6FuV2OHiGbg9Y5FIXO1hXc/Untitled?node-id=2%3A0&scaling=scale-down

## Historias de usuario:

El usuario ingresará a la aplicación de forma amigable y explicativa y podrá acceder según sea su interés o conocimiento al apartado de categoría por super héroes o bien a la parte de la línea del tiempo donde está ordenado de forma cronológica el seguimiento de las películas.

El usuario necesita botones para dar opción de conocer el Mundo Marvel o para ir a ver películas de un super héroe en específico.

- DoD: Generar el prototipo de baja fidelidad.
- DoD: Generar el esqueleto de las pantallas.
- DoD: Delimitar el tema y usuario objetivo.
- DoD: Delimitar las 21 películas y hacer fetch.
- DoD: Añadir botones y definir botones de las interfaces.
- DoD: Elegir el nombre de la Aplicación.
- DoD: Generar el prototipo de alta fidelidad.

Si el usuario no conoce despliega pantalla con información del mundo marvel y cronología de películas. Al darle click a la imagen puedo abrir el video del trailer mostrados en un modal.

- DoD: Añadir una nueva pantalla que muestre una breve descripción con la conexión entre películas.
- DoD: Desplegar sobreponiendo el video de trailer de la película seleccionada.
- DoD: Añadir una línea del tiempo con cards del orden de las películas.
- DoD: Generar un hoover que al posicionarte en la card te muestre la sinopsis de la película.
- DoD: Ejecutar que los botones tengan interacción con el js para que cumplan una acción.

Si el usuario si conoce Marvel se despliega una pantalla para elegir un super héroe en particular con todas las películas que le correspondan a ese personaje.

- DoD: Buscar y descargar los iconos representativos de las imagenes del super héroe a elegir.
- DoD: Poner un enlace para los videos que muestre el video del trailer encima de la info.
- DoD:Crear un botón para que te lleve a ver la película.

Al dar click a un super héroe como usuario puedo ver el enlace de las películas de ese super héroe.

- DoD: Hacer una nueva interfaz que muestre el logo representativo del super héroe seleccionado.
- DoD: Generar un modal para que sobreponga el video del trailer de la película.
- DoD: Hacer un link o botón que te redireccione a la película.

## Quien utiliza INFINITY MARVEL:
Hombres y mujeres mayores de 15 años que les agrade adentrarse en el mundo Marvel o que en su defecto sean fan de películas, series e incluso comics, pero a su vez también personas que no conozcan del tema pero tengan la inquietud de ver en orden las películas y conocer la historia de los super héroes.
El usuario utiliza mayormente la versión de ipad o incluso laptop ya que en estos dispositivos es mucho más fácil ver las películas, sin embargo la aplicación es responsive por lo que la versión móvil también podrá utilizarse.

## Especificaciones técnicas:
La aplicación utiliza una base de datos que fue extraída de OMDB API, se toma como rango las 21 películas de Marvel, se realizó un fetch y se obtuvo una API Key para poder extraer la data, enseguida se hizo un for. Así mismo se generaron las funciones para poder acceder a las propiedades de un objeto dentro de un arreglo y se hizo filtros para las películas de cada super héroe.

## Pasos para hacer uso de la aplicación:
El usuario puede entrar a la aplicación y encontrar dos botones que te guiarán dependiendo de lo que el usuario quiera, ya sea ir al apartado de la línea del tiempo en el universo marvel, ver el video del intro para darse una idea de los personajes si es un usuario nuevo en el mundo marvel.
A su vez puede ingresar a la parte de héroes donde podrá elegir el que sea de su agrado y lo mandará a una página donde viene más información de cada personaje, de sus comics e incluso novedades del super héroe en acción.
Del mismo modo el usuario puede irse al “About us” y con esto conocer más la página.
El usuario puede navegar a través de la aplicación y ver los trailers de cada película para darse una idea de la historia y si es de su agrado poder ver posteriormente la película.

## Indicadores de OMDb API - The Open Movie Data:
Es una plataforma que tiene data de películas que permite bajarla de la web para hacer uso de ella. Obtuvimos los id de cada película de Marvel (nuestro tema delimitado) y de forma manual se añadieron a un arreglo de forma cronológica.

## Interacción de interfaces
La aplicación contará con distintos filtros para visualizar la información tales como;

Pantalla de inicio mostrará el logo y nombre de la aplicación, botones para ir hacia los super héroes o a la historia de Marvel, así como un About us que llevará al usuario a conocernos mejor.

En la pantalla de la historia de Marvel le mostrará al usuario un video explicando más acerca de Marvel y el orden cronológico de las películas y después estarán acomodadas las películas con su poster con un hover que muestra la sinopsis y el año en que salió la película.

Al darle click a alguna de ellas te mostrará un modal en el que se visualizará un video del trailer de la película.

Al darle click al botón de Héroes te mostrará la imagen de cada super héroe en el cual podrá el usuario de nueva cuenta darle click al personaje que desee ver y dentro estarán las películas filtradas de dicho super héroe.
