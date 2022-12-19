# Calendar Event

<h1 align="center">Calendar Event</h1>

<br />
<div align="center">
    <img src="https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/master/frontend/public/img/AppLogo.png" alt="Logo">

  <p align="center">
    Proyecto inspirado en los calendarios de eventos de la isla.
  </p>
</div>

Esta aplicación consiste en montar un calendario de eventos en la que un usuario se registra y apunta los eventos que hay disponibles en la página principal además de poder ver detalles del mismo.

Los eventos abarcan desde aquellos relacionados con Navidad, como conciertos, además de shows y otras cuestiones...

En este diagrama se detallan las acciones que se puede realizar:

![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/master/readmeImages/Diagrama%20casos%20de%20uso.jpg)

## Requisitos de Instalación

Como Editor de código, se puede usar cualquiera, aunque yo he usado Visual Studio Code: https://code.visualstudio.com/download

Para la costosa instalación de Ruby On Rails en Windows he seguido un tutorial en Youtube que, instala Ruby y rails; aunque como rasgo negativo, son versiones algo antiguas de los programas. Recomendable descargar exactamente las versiones de Ruby y Rails que el anfitrión del video utiliza para evitar errores extraños: https://youtu.be/_AJTGLCNRHQ

Para la base de datos usaremos PostgreSQL: https://www.postgresql.org/download/

Necesitaremos NodeJS para posteriormente inicializar React: 

https://nodejs.org/en/

https://es.reactjs.org/docs/getting-started.html

Aqui está el enlace al POSTMAN para realizar peticiones: 

https://documenter.getpostman.com/view/23479991/2s8YzZPeHF

## Algunas Librerías usadas

Aunque todas las librerias deberían instalarse una vez se hace bundle install y npm install respectivamente. Cabe destacar nombrar algunas de ellas:

ActiveStorage para almacenar imágenes en Rails.

Devise para la creación de usuarios y un mejor control del mismo.

Devise JWT que sirve para establecer y controlar tokens y sesiones

Con el Frontend la más importante es Axios que sirve para establecer y controlar peticiones desde el backend.

## Parte del Backend

Para la parte del backend tenemos primeramente el diagrama Entidad Relacion:

![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/developer/readmeImages/Diseño%20Entidad%20Relación.jpg)

Aquí podemos ver dos entidades principales: Usuario y Evento.

Usuario tiene los campos de: nombre, apellido, email, fecha de nacimiento, contraseña.
Evento tiene los campos de: título, descripción, fecha, hora a la que empieza y hora a la que termina, y la URL.

Asimismo tenemos una tabla intermedia entre usuario y evento para que un usuario pueda apuntar varios eventos en su lista de favoritos y tenerlos guardados cuyos campos son el id del usuario y el id del evento.

Finalmente podemos apreciar las entidades débiles que son la localización y el tipo de evento en la que solo está el nombre de ambos.

El tipo de evento abarcan muchos conceptos como un concierto o si es temática navideña.

En cuanto a la localización, he decidido que sea de alcance regional, marcando solamente los municipios de la isla a modo de ejemplo.

Después de hacer el diagrama entidad relación tocaría el diseño en UML:

![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/developer/readmeImages/Entidad%20Relación%20UML.jpg)

En este caso como campos nuevos cabe destacar el id de la localización y del tipo de evento en la tabla evento para que en ambos casos se establezca una relación uno a muchos de:

En una localización pueden haber muchos eventos y un tipo de evento puede pertenecer a muchos eventos.

También cabe destacar el tipo de dato que tiene cada campo.

Finalmente tenemos el Modelo Relacional:

![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/developer/readmeImages/Modelo%20Relacional.jpg)

Este es el más cercano a lo que sería la base de datos real.

A modo de extras, hay que destacar que existen tablas que son generadas por gemas de rails para controlar diferentes aspectos de la aplicación. Tal es el caso de una tabla de imágenes.

## Código del backend

Ahora que ya hemos hablado de la parte de diseñodel backend. Toca explicar la parte de código y de las herramientas utilizadas.

En primera intancia la tecnología usada es Ruby on Rails. Es un Framework para aplicaciones full stack pero que se puede integrar como backend y que solo sirva para gestionar peticiones, hacer migraciones a la base de datos y controlar otras cuestiones, todo ello enfocado a la parte del servidor.

Rails por defecto trabaja con SQLite, pero cuando se inicia el proyecto se puede tanto especificar que lo queremos como API, como que la base de datos sea (al menos en lo concerniente a este proyecto) PostgreSQL.

rails new elnombrequequieras --api --database=postgresql

Rails trabaja bajo un esquema de Modelo, vista, y controlador. Pero como en este caso no usamos la vista, nos queda el modelo y el controlador.

Con el comando rails g scaffold nombretabla nombrecampo:tipodedato se generará una ruta, una migración de creación de tabla, un modelo, y un controlador de una tabla concreta. Sobre el contenido del controlador, será un CRUD completo hecho a partir de esa tabla y esos campos introducidos.

En las siguientes capturas se ven algunos ejemplos de modelos, controladores, rutas, migraciones, y el esquema de la base de datos.

Controlador:
![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/developer/readmeImages/ejemplocontrolador.PNG)

Modelo:
![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/developer/readmeImages/ejemplomodelo.PNG)

Esquema:
![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/developer/readmeImages/ejemploesquema.PNG)

Migraciones:
![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/developer/readmeImages/ejemplomigracion.PNG)

Rutas:
![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/developer/readmeImages/ejemploruta.PNG)

## Consejos a tener en cuenta con el Backend.

En varias migraciones, si queremos añadirles foreign key a algún campo tenemos que poner add_foreign_key en las migraciones.

Devise crea por defecto una tabla de user y un controlador. Sin embargo, si quisiéramos crear un controlador específico para el usuario (tal y como está puesto) hay que seguir el código que vemos en el user_controller.rb y luego en las rutas ponerlas de esa manera.

El ActiveStorage almacena las imágenes ya codificadas listas para ser lanzadas. Sin embargo, si intentamos integrar el atributo imágenes a una tabla tendremos que poner en el modelo has_one_attached :image. Luego en el controlador, en la parte del params tenemos que poner permit :image. Y finalmente en las peticiones Get All y Get One tenemos que usar este fragmento de código as_json.merge({ image: url_for(image) }) para que cuando realicemos dichas peticiones nos devuelva la imagen en 'http://localhost:3000'.

Con el Devise JWT he seguido una serie de vídeos que explican de forma más o menos clara cómo utilizar dicha gema y poder usarse donde se quiera: https://youtu.be/MWuRHY5XF40

Con Devise tenemos el :authenticate_user! que no ejecuta las peticiones a menos que se esté previamente autenticado.





















