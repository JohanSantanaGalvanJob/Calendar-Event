
<h1 align="center">Calendar Event</h1>

<br />
<div align="center">
    <img src="https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/master/frontend/public/img/AppLogo.png" alt="Logo">

  <p align="center">
      Project inspired in the islands' events calendar.
  </p>
</div>

When we got the company project assigned, we started to look at what type of projects the company usually did, and based on one of its ex-employees this project was prepared.

This app consists in a event calendar where every registered user can mount all of the available events on the main page, apart from the obvious that they can see every event details.

The events can be related to any festive, christmas, concerts, even shows and other topics...

In this diagram you have detailed every action that you can make:

![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/master/readmeImages/Diagrama%20casos%20de%20uso.jpg)

<details>
  <summary>content table</summary>
    <ol>

- [Installation requirements]((##Installation-requirements))
- [System requirements]((##Requisitos-de-Sistema))
- [Librerías y Gemas usadas]((##Algunas-Librerías-usadas))
- [Empezar]((##Empezar))
- [Comparación de Tecnologías]((##Comparación-de-Tecnologías))
- [Planificación]((##Planificación))
- [Parte del Backend]((##Parte-del-Backend))
- [Código del backend]((##Código-del-backend))
- [Requisitos de usuario]((##Requisitos-de-usuario))
- [Interfaces]((##Interfaces))
- [Conclusión]((##Conclusión))

    </ol>
</details>

## Installation requirements

As a code editor, you can use the one you want, but in our case we used visual Studio Code: https://code.visualstudio.com/download

In order to install Ruby on Rails in Windows we had to follow an installation guide posted on YouTube. The only downside is that every Ruby version must be installed separately. It is suggested to download the exact versions that were used when developing the software in order to evade any port errors:
https://youtu.be/_AJTGLCNRHQ

For the database, we will use PostgreSQL: https://www.postgresql.org/download/

We will need NodeJS in order to start React:

https://nodejs.org/en/

https://es.reactjs.org/docs/getting-started.html

Here's the link to Postman for the requests:

https://documenter.getpostman.com/view/23479991/2s8YzZPeHF

## System Requirements

You must have a considerable space available (20GB) for the installations such as:

- Ruby
- Rails
- The project itself
- PostgreSQL

You shlud have at least 4GB of RAM, but 8GB it's recommended.
The OS is Windows 10.
CPU: Intel Core I3 or equivalent.

## Some libraries used

Even though the libraries should be installed once the bundle install and npm install are used, there's some caviats:



ActiveStorage for image storing in Rails.

ActionCable for WebSocket implementation.

Devise for the user creation and administration.

Devise JWT used for stablishing and controlling tokens and sessions.

On the frontend the most important one is Axios, as this is primarily used  to stablish and control requests from and to the backend.

## Getting started

### Frontend

The first step is to create a new directory in which we will clone the GitHub repository.

* clone repository
    ```sh
    git clone https://github.com/JohanSantanaGalvanJob/Calendar-Event
    ```

Then, we install the dependencies

* npm
    ```sh
    npm install
    ```

When done, we'll have to start the backend

#### Backend

We open the backend on the same Visual Studio window

With the backend opened, we'll only need to open PG Admin in order to import the PostgreSQL database.

Once finished, the last thing needed is to put some environment variables into the .env file, such as the username and password from the database.

## Technology comparison

With the native apps, we'll be able to install and execute the program directly in the system, making it agile and not dependent to our network connection.

With the hybrid apps we'll have an IONIC casing for the system and then execute the app like it was a web app.

And finally, with the web app we have everything remotely, needing a constant network connection but on the other side, not demanding any requirements to the client.

In out case, the app is fully web. That has the advantage of being executable in every device with close to zero requirements, but needing a network connection.

As a note, we should focus it as a PWA in order to take the best of both worlds. Also, as a counterpart, we have some offline functionalities that make it sort of a PWA.

## Planning

We used GitHub to order the upcoming parts of the project.

The first thing was to make the schemas for the backend.

After that, we started looking for some Technologies and ended up using some of them, mixed with some native ones.

Then, we came back and implemented the token, images storing and some user validations in the most relevant endpoints.

Finally, it came the design and optimization phase, which main purpose was to prepare a complete desing, making everything look and feel as good as possible.

Here's the link to the project control.
https://github.com/users/JohanSantanaGalvanJob/projects/2

---

## Backend part

First of all, we have the Entity Relation diagram:

![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/developer/readmeImages/Diseño%20Entidad%20Relación.jpg)

Here we can see the two main entities: User and Event.

+ User:

  - ID: User ID (not null).
  - Name: Username.
  - Surname: Username.
  - Email: User mail.
  - Birthdate: Birthdate.
  - Password: User password.

+ Event:

  - ID: Event ID (not null).
  - Title: Event title.
  - Description: Description.
  - Starting date: Event's starting date.
  - Finishing date: Event's finishing date.
  - URL: The official date.

At the same time, we have an intermediate table between user and event, making possible a connection that points at the favourite events for each user.

+ User_Event

- ID: Main ID (not null)
- ID User: User ID logged in
- ID Event: Selected event's ID

Finally we can take a look at the weak entities like the location and event type:

+ Location

- ID: Main ID (not null)
- Name: Location name

+ Event type

- ID: Own ID (not null)
- Name: Event type name

The event type looks at various concepts such as a concert or christmas.

Regarding the location, it's range is limited to a regional basis, so if we put a name, it will search for it on the Canary Islands.

After this diagram, the next is the UML:

![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/developer/readmeImages/Entidad%20Relación%20UML.jpg)

In this case, new fields worth to name are the location and event type in the event table so in both cases there's a one-to-many relation stablished between:

In a location there could be many events, and a event type could be assigned to many events.

Also to keep in mind the data type on each field.

finally we have the Relational model:

![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/developer/readmeImages/Modelo%20Relacional.jpg)

This is the closest to the real database.

As a bonus, there's more tables generated bu Rails for it to control different aspects of the app. Like the images table.

## Backend code

Now that we've talked about the design part of the backend, it's time to epxlain the code and tools used.

At first glance, the technology used is ruby on Rails. It's a full-stack app framework that can also be used as a backend-only server.

Rails uses SQLite as default, but when creating a new project we can specify which database we want to use, being PostgreSQL our case.

    rails new thenameyouwant --api --database=postgresql

Rails follows the Model-View-Controller pattern, but in our case, as we're working on a Rails API, we're not using the views.

By using the next command, you will generate a route, table migration, model and controller for a determined table:

    rails g scaffold tablename fieldname:datatype

On the next screenshots we have some examples:

Controller:

![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/developer/readmeImages/ejemplocontrolador.PNG)

Model:

![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/developer/readmeImages/ejemplomodelo.PNG)

Schema:

![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/developer/readmeImages/ejemploesquema.PNG)

Migrations:

![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/developer/readmeImages/ejemplomigracion.PNG)

Routes:

![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/developer/readmeImages/ejemploruta.PNG)


## Tips to deep in mind about the backend.

In some migrations, if we want to add a foreign key to a field, we must write "add_foreign_key" into the migrations.

Devise creates by default user and controller tables. But if we wanted to create a specific controller for the user, we must follow the code on the user_controller.rb and later add it on the routes.

The ActiveStorage stores already coded images, ready to be launched. However, if we try to integrate an image into a table, we must put "has_one_attached :image" into the model. Later, into the controller we have to add "permit :image" into the params. Finally, on the Get All and Get One petitions we must use this code fragment "as_json.merge({ image: url_for(image) })" in order to receive said images along with the requests.

We followed a guide to make Devise JWT to learn how to use the gem and use it wherever needed: https://youtu.be/MWuRHY5XF40

Devise has ":authenticate_user!", that makes every request to not work unless the user is previoulsly signed in.



## User requirements

#### Platform:
- **P1**. The software was made mobile-first, so it's recommended to use it in a simillar format.


#### Access:
- **A1**. The app has a page in which you can select to login, register or get in as a guest.
- **A2**. As a guest you can only see the existent events. In order to like them you have to log in or sign in.
- **A3**. As an admin you can create, see, edit or delete data.
  - **A3.1**. As an admin you can make a whole events CRUD.
  - **A3.2**. As an admin you can also make a whole event types CRUD.
  - **A3.3**. As an admin you can make a whole locations CRUD.
  - **A3.4**. For security reasons, the admin can only see the users' mails and delete its accounts.
- **A4**. As a user, you can edit your own profile.
  - **A4.1**. Como usuariAs a user you can like any event, and you'll put it on your favourites page.
  - **A4.2**. As a user you can also remove an event from your favourites list.

#### Interfaces:

- **I1**. There's a main page in which we can log in, sign in or get in as a guest.
- **I2**. On the sign in page you have a form to complete.
- **I3**. On the login page there's also a form to complete in order to log in.
- **I4**. On the main page we have a sidebar, a top menu as a header and a bottom menu i which the icons change whether you're an admin or a user.
  - **I4.1**. If we're logged we can do this on the side bar:
    - **I4.1.1**. Edit our profile.
    - **I4.1.2**. Configure the dark mode.
    - **I4.1.3**. Log out from our session.
  - **I4.2**. If we're not logged we can:
    - **I4.2.1**. Log in.
    - **I4.2.2**. Register.
    - **I4.2.3**. Use the dark mode.
    - **I4.2.4**. Go back.
- **I5**. If we click on the settings icon
  - **I5.1**. When logged in:
    - **I5.1.1**. Change password.
    - **I5.1.2**. change view.
    - **I5.1.3**. Change language.
    - **I5.1.4**. Delete account.
    - **I5.1.5**. Control the emails.
    - **I5.1.6**. Help.
  - **I5.2**. When not logged in.
    - **I5.2.1**. Change view.
    - **I5.2.2**. Change language.
    - **I5.2.3**. Help.
- **I6**. If we're users we can access the favourites page and see our liked events.
- **I7**. If we're admins we can access the add content page.
- **I8**. We can make a whole events CRUD.
- **I9**. We can make a whole event types CRUD.
- **I10**. We can make a whole locations CRUD.
- **I11**. We can see and delete users.

#### Actions:

- **A1**. The user actions (like page accessing, or logging out) will receive a warning and alerts of each case.
- **A2**. When introducing data into a form, in case of fulfilling the form we will receive a notification.

#### Validations:

- **V1**. When writing over a specific field, we will be notified whenever an error appears, and in the case of some important fields, the advice will change colours (i.e: red if its wrong, green if it's good) to make it easier to the end user to understand if it's doing good.

- **V2**. There's more than one type of validation, like using the correct order in a mail field or having a varied password with capped letters and 8+ digits..
  - **V2.1**. When adding a date to the events, the field is made to fit only hour dates.
- **V3**. When putting the URL, we must specify a HTTPS connection.

## Interfaces

#### Main design

The design can be seen through Figma in this link: https://www.figma.com/file/12VH8b6aRBJA8iZgCKcxcw/Calendar-Event?t=ep5i2BLdH1q2RVEd-1.

#### Usability and Accesibility

##### Usability:

In usability terms, we focused on a simple, minimalistic design, with colours that bring simillarities to events.

  - Has a simple structure in which you can navigate easily.

  ![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/master/readmeImages/navegacion.PNG)

  - When the app fails, the error can be seen clearly thanks to the warnings.

  ![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/master/readmeImages/alerta%20error.PNG)

  - We will be notified when something has been done succesfully of not.

  ![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/master/readmeImages/alertas.PNG)

  - The forms are simple and inicate exactly what's needed. The user field has specific validations such as not accepting numbers, even though it admits spaces, accents and a minimum & maximum of 5-30 characters. The mail looks for an "@" and then a "." in order to detect a valid mail. Lastly, the password requires at least a capped letter and a miminum of 8+ characters.

Colour palette used:

![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/master/readmeImages/Paleta%20de%20colores.png)

#####  Accesibility

 - Contrast between soft colours not being too strident, using pastel tone colours to soften the confussion of the end user.

 - Texts proporcionally prepared to be as clean and easy to read as possible.

 - Dark mode:

  ![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/master/readmeImages/navegacion%20oscura.PNG)

## Conclussion

As a conclussion, this project was made in a few months and has served us as an inflection point to locate our strenghts and weaknesses, and optimize our workflow in future projects.

We're conscious about the absence of some elements and we hope to be able to enhance the project in a near future, but the project itself it already is something to be proud of.

With no doubt has been a satisfying but stressing experience.

The next project will be focused around clean code and ease of understanding.
