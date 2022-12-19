# Calendar Event

<h1 align="center">Calendar Event</h1>

<br />
<div align="center">
    <img src="https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/master/frontend/public/img/AppLogo.png" alt="Logo">

  <p align="center">
    Proyecto inspirado en los calendarios de eventos de la isla.
  </p>
</div>

Cuando se me asignó un proyecto para una empresa, empecé a buscar qué hacían concretamente y fue en base a la recomendación de un empleado de la empresa que hice este pequeño pero arduo proyecto.

Esta aplicación consiste en montar un calendario de eventos en la que un usuario se registra y apunta los eventos que hay disponibles en la página principal además de poder ver detalles del mismo.

Los eventos abarcan desde aquellos relacionados con Navidad, como conciertos, además de shows y otras cuestiones...

En este diagrama se detallan las acciones que se puede realizar:

![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/master/readmeImages/Diagrama%20casos%20de%20uso.jpg)

<details>
  <summary>Tabla de contenidos</summary>
    <ol>

- [Requisitos de instalación](##Requisitos-de-Instalación)
- [Librerías y Gemas usadas]((##Algunas-Librerías-Usadas)
- [Parte del Backend](##Parte-del-Backend)
- [Código del backend](##Código-del-backend)
- [System operation and technical specifications](##Consejos-a-tener-en-cuenta-con-el-Backend)

    </ol>
</details>

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

+ Usuario:

  - ID: Identificador de cada usuario (no null).
  - Nombre: Nombre de usuario.
  - Apellido: Apellido de usuario.
  - Email: Email del usuario.
  - Fecha de nacimiento: Fecha de nacimiento del usuario.
  - Contraseña: contraseña del usuario.

+ Evento:

  - ID: Identificador de cada evento (no null).
  - Título: Título del evento.
  - Descripción: Descripción del evento.
  - Hora a la que empieza: La hora a la que empieza el proyecto.
  - Hora a la que termina: La hora a la que termina el proyecto.
  - URL: La URL que redirecciona a la página.

Asimismo tenemos una tabla intermedia entre usuario y evento para que un usuario pueda apuntar varios eventos en su lista de favoritos y tenerlos guardados:

+ Usuario_Evento

- ID: Identificador propio (no null)
- ID Usuario: El ID del usuario con la sesión iniciada
- ID Evento: El ID del evento seleccionado

Finalmente podemos apreciar las entidades débiles que son la localización y el tipo de evento:

+ Localización

- ID: Identificador propio (no null)
- Nombre: nombre de la localización

+ Tipo de evento

- ID: Identificador propio (no null)
- Nombre: nombre del tipo de evento

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

## Requisitos de usuario

#### Plataforma:
- **P1**. Dado que no está del todo bien hecha la parte de ordenador, es bastante recomendable que se use solamente en móviles.


#### Acceso:
- **A1**. La aplicación cuenta con una página en la que se puede seleccionar si nos queremos registrar, iniciar sesión, o continuar como invitado.
- **A2**. Como invitado solamente puedes ver los eventos que existen en la página. Para poder darles like necesitas iniciar sesión o registrarte.
- **A3**. Como administrador puedes crear, ver, editar o borrar datos.
  - **A3.1**.Como administrador puedes hacer un CRUD completo de eventos.
  - **A3.2**.Como administrador puedes hacer un CRUD completo de tipos de eventos.
  - **A3.3*.Como administrador puedes hacer un CRUD completo de localización.
  - **A3.4**. Por razones de seguridad, el administrador solamente puede ver los emails de los usuarios y borrar las cuentas.
- **A4**. Como usuario puedes editar tu propio perfil.
  - **A4.1**.Como usuario puedes darle like a un evento que te guste y entonces se guardará en la página de favoritos.
  - **A4.2**. Como usuario además puedes quitar un evento de la lista de favoritos en caso de que no nos interese o nos hayamos equivocado.

#### Interfaces:

- **I1**. The application has two main interface where you can see all types of apartments.
- **I2**. In the first main interface, you can navigate between help, login or apartment details and there is slider.
  - **I2.1**. In the help interface, you will find cards with some places to go.
    - **I2.1.1**. The first card you will find is the help system.
    - **I2.1.2**. The second card you will fin is the application information.
    - **I2.1.3**. The third card you will find is the additional information.
    - **I2.1.4**. The fourth card you will find is the contact.
  - **I2.2**. You will find a form and some actions in login interface.
    - **I2.2.1**. You will be able to login to these interfaces by filling in the form with your account data.
    - **I2.2.2**. You will be able to register if you do not have an account by clicking on a button.
    - **I2.2.3**. You will be able to recover your password if you do not remember it.
- **I3**. As a user you will be able to find more options than before.
  - **I3.1**. In the help interface, you will find a card to delete your account.
  - **I3.2**. You will be able to book an apartment.
  - **I3.3**. You will be able to see all the reservations you have made.
    - **I3.3.1**. You will be able to delete or edit your reservations depending on whether you have your reservation that day or not.
  - **I3.4**. You will be able to log out.
- **I4**. As a administrator, you will be able to see the second main interface.
  - **I4.1**. You will be able to add new types of apartments.
  - **I4.2**. You will be able to edit or delete existing apartment types.
  - **I4.3**. You will be able to see all the reservations of all users.
    -**I4.3.1**. You will be able to delete user reservations.

#### Acciones:

- **A1**. Las acciones del usuario ( como acceder a páginas, rellenar formularios o desloguearte) tendrán avisos y alertas para cada caso.
- **A2**. Cuando introducimos datos en un formulario, en caso de éxito seremos notificados y en caso de error también.

#### Validaciones:

- **V1**. When typing or adding data, if an error occurs with respect to any character, you will be warned and the desired action will not be allowed.
- **V2**. There are more than one type of validations, such as when you do not have the required credentials or the date is incorrect.
  - **V2.1**. When you book an apartment, you cannot choose dates less than the current date at that time.
- **V3**. When you enter your email address to log in or register, we will apply a mask to see if it is a valid email address.





















