# Calendar Event

Esta aplicación consiste en montar un calendario de eventos en la que un usuario se registra y apunta los eventos que hay disponibles en la página principal además de poder ver detalles del mismo.

Los eventos abarcan desde aquellos relacionados con Navidad, como conciertos, además de shows y otras cuestiones...

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

También cabe destacar el tipo de dato quue tiene cada campo.

Finalmente tenemos el Modelo Relacional:

![Image text](https://github.com/JohanSantanaGalvanJob/Calendar-Event/blob/developer/readmeImages/Modelo%20Relacional.jpg)

Este es el más cercano a lo que sería la base de datos real.







