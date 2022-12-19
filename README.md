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
- [Empezar]((##Empezar))
- [Parte del Backend](##Parte-del-Backend)
- [Código del backend](##Código-del-backend)
- [Requisitos de usuario](##Requisitos-de-usuario)
- [Interfaces](##Interfaces)

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

## Empezar 

### Frontend

Para empezar creamos un proyecto en una carpeta y abrimos el terminal.

despues ejecutamos este comando para clonar un repositorio

* clonar repositorio
    ```sh
    git clone https://github.com/JohanSantanaGalvanJob/Calendar-Event
    ```

Instalamos todas las dependencias
 
* npm
    ```sh
    npm install
    ```

Cuando estemos, tendremos que inicializar el backend

#### Backend

Abrimos el backend en el mismo Visual Studio Code

Cuando tenemos el backend abierto tenemos que abrir además PG Admin para importarnos la base de datos de PostgreSQL:

Una vez temrinado, unicamente tendrmeos que cambiar unos cuantos campos en el databse.yml ubicado en la carpeta config del backend como el nombre de usuario y la contraseña.

## Comparación de Tecnologías 

Frontend: 

ReactJS con Angular

Ambos usan el sistema de componentes de muchos Frameworks y librerías. Sin embargo, React usa Javascript en condiciones normales, mientras que Angular usa Typescript los cuales primoridalmente la diferencia reside en que Typescript usa tipos de datos como int o string

Diferencias:

  - React usa un DOM virtual mientras que Angular usa un DOM real.

  - React es más ágil pero menos organizado normalmente que Angular ya que cada página cuenta con su archivo de typescript separado del html en el casod e Angular, mientras que en React todo el código puede estar en un solo archivo

  - React es muy útil y ágil en  whereas Angular.js is used to build complex enterprise apps like progressive web apps and single-page apps.

  - Angular JS is used to build single-page applications using HTML and TypeScript. React JS is commonly used to create user interfaces for single-page applications from isolated components.

  - Angular is a part of the MEAN stack and is very compatible with many code editors. It’s also considered to develop dynamic websites and web apps. On the other hand, React is widely used to develop reusable HTML elements for front end development.

Backend: 

[![Sequelize][sequelize.io]][sequelize.url] to compare with [![Spring][spring.io]][spring.url]

Both technologies are ORMs used for the connection between the backend and the frontend. Therefore, it seems appropriate to compare them. So, let's list the differences:

  - Sequelize is a simpler development tool than Spring with respect to application development.

  - Spring and sequelize focus on creating a backend for frameworks such as frontends, having similar power in their uses. 

  - Spring allows us to work with MVC frameworks with PHP, being the better of the two ORMs in this aspect.

  - Sequelize allows us to perform powerful works in Digital Drawing and Painting environments.

---

## Planification

To organize myself during the development of this project, I have established pending objectives to be done from the beginning, proposing to do them as I finished the ideation of the application.

The first thing I did after establishing the idea of creating the website of a hotel, was to start developing the diagrams of the database and its relationships, as well as its attributes. Once decided, I created a project in GitHub that allowed me to keep a version control and, in turn, a control of the pending tasks I had. Once the tasks were set, create a mockup of the interfaces of my application, to have a reference as soon as I started to develop them with Angular. After finalizing the prototype, I prioritized the development of a stable and complete backend that would allow me to make a CRUD of all the tables and be able to "forget" about it once the frontend was ready.
After the completion of the backend, along with its authentication and its respective tests with Postman, I proceeded with the frontend, taking as a reference my mockup made in Figma, but not before creating the corresponding services and models for a good connection to the database.

When I finished the project, I started to write the project documentation, including the different manuals for future users.

You can see the control of pending tasks in the link of this project, navigating to the "project" section. However, I'll leave the link here for you to go from now on. 
 - [![ControlTasks][controlTasks.io]][controlTasks.url]

---

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
  - **A3.1**. Como administrador puedes hacer un CRUD completo de eventos.
  - **A3.2**. Como administrador puedes hacer un CRUD completo de tipos de eventos.
  - **A3.3**. Como administrador puedes hacer un CRUD completo de localización.
  - **A3.4**. Por razones de seguridad, el administrador solamente puede ver los emails de los usuarios y borrar las cuentas.
- **A4**. Como usuario puedes editar tu propio perfil.
  - **A4.1**. Como usuario puedes darle like a un evento que te guste y entonces se guardará en la página de favoritos.
  - **A4.2**. Como usuario además puedes quitar un evento de la lista de favoritos en caso de que no nos interese o nos hayamos equivocado.

#### Interfaces:

- **I1**. Tenemos una página principal en la que podemos seleccionar si queremos registrarnos, iniciar sesión, o continuar.
- **I2**. En la página de registro tenemos un formulario que rellenar.
- **I3**. En la página de inicio de sesión tenemos un formulario que rellenar.
- **I4**. En la página principal la cual es la de eventos tenemos un menú lateral, el menú de arriba con el perfil y los ajustes, y un menú de abajo que varía según el rol que tengamos.
  - **I4.1**. Si estamos logueados podremos hacer esto en la barra lateral:
    - **I4.1.1**. Editar nuestro perfil.
    - **I4.1.2**. Configurar el modo oscuro.
    - **I4.1.3**. Cerrar sesión con nuestra cuenta.
  - **I4.2**. Si no estamos logueados podremos:
    - **I4.2.1**. Iniciar sesión.
    - **I4.2.2**. Registrarnos.
    - **I4.2.3**. Usar el modo oscuro.
    - **I4.2.4**. Salirnos.
- **I5**. Si hacemos click en el engranaje, accederemos a la página de ajustes.
  - **I5.1**. Si estamos logueados podremos hacer esto en los ajustes.
    - **I5.1.1**. Cambiar contraseña.
    - **I5.1.2**. Cambiar vista.
    - **I5.1.3**. Cambiar idioma.
    - **I5.1.4**. Borrar la cuenta.
    - **I5.1.5**. Controlar los emails.
    - **I5.1.6**. Ayuda.
  - **I5.2**. Si no estamos logueados podremos hacer esto en los ajustes.
    - **I5.2.1**. Cambiar vista.
    - **I5.2.2**. Cambiar idioma.
    - **I5.2.3**. Ayuda.
- **I6**. Si somos usuarios podremos acceder a la página de favoritos y ver los que hemos dado like.
- **I7**. Si somos administradores accedemos a la página de añadir contenido.
- **I8**. Podemos hacer un CRUD completo de eventos.
- **I9**. Podemos hacer un CRUD completo de tipo de eventos.
- **I10**. Podemos hacer un CRUD completo de localizaciones.
- **I11**. Podemos ver y borrar usuarios.

#### Acciones:

- **A1**. Las acciones del usuario ( como acceder a páginas, rellenar formularios o desloguearte) tendrán avisos y alertas para cada caso.
- **A2**. Cuando introducimos datos en un formulario, en caso de éxito seremos notificados y en caso de error también.

#### Validaciones:

- **V1**. Cuando escribimos sobre un campo concreto seremos notificaos si ocurre algun error o de si lo que estamos poniendo no está bien.
- **V2**. Hay más de un tipo de validación, como poner el email con la correcta notación, o la contraseña con mayúscula y + de 8 letras.
  - **V2.1**. Cuando añadimos una hora en los eventos, el campo está hecho para solo podamos meter horas.
- **V3**. Cuando ponemos un URL tenemos que poner https.

## Interfaces

#### Diseño Inicial

Se puede ver el diseño de Figma a través de este enlace: https://www.figma.com/file/12VH8b6aRBJA8iZgCKcxcw/Calendar-Event?t=ep5i2BLdH1q2RVEd-1 .

#### Usabilidad y Accesibilidad

##### Usabilidad:

Como cuestiones de usabilidad, me he centrado en un diseño simple, minimalista, pero con colores que recuerden a un evento o algo por el estilo. Sin embargo, debido a lo global del concepto, el azul claro resulta un color general.

  - Posee una estructura simple en la que se puede navegar fácilmente.
  - Se puede ver claramente cuándo la aplicación falla a través de avisos.
  - Seremos notificados cuando hagamos algo con error o con éxito.
  - Los formularios son simples e indican exactamente qué es lo que se quiere

Paleta de colores usada: 

![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/master/readmeImages/Paleta%20de%20colores.png)

#####  Accesibilidad 
 
 - Contraste entre colores suaves y no colores extremos, valorando los tono pastel para que no sea un choque ni sea demasiado confuso de cara al usuario final.

 - Textos hechos perfectamente en los formularios para que sean lo más limpias y fáciles de leer posibles .

## Conclusion

As a conclusion of this project, I have to say that I was very excited to do it, because I had never been able to experience creating a product before, let alone made by myself. On several occasions I have been able to feel how everything fell apart and, after a hard effort, everything was back on its feet and working again. It is one of the best feelings I have ever had.

This project has made me realize how much I love programming and how much it fills me up to be able to show these feats with this quality that, although it remains to be polished, I consider that it is not a bad start.

I have been satisfied with the result of the product and I have learned new things from the technology stack that I have used, it never hurts to learn something new.
To finish my conclusion, I would like to emphasize what was said at the beginning of this document. And it is that, thanks to this project, I have been able to see and learn something that I had never done before, and from the inside.


