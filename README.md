# PortalVacacionesFrontend
Se realizo un sistema de vacaciones que permite los siguientes métodos
- Crear empleado
- Listar empleados
- Buscar empleado por nombre
- Actualizar empleado
- Eliminar empleado
- Crear solicitud de vacaciones
- listar todas las solicitudes en todos sus estados
- Eliminar solicitud vacaciones
  
Repositorio front-end en la rama develop : 
https://github.com/Alejandracarvajalcampo/portal--vacaciones--frontend.git

Se crea una data.sql donde se insertan 4 empleados y  3 solicitudes de vacaciones como carga inicial de datos, para que esto se ejecute se debe crear una base de datos en mysql con el nombre de vacation_request.

Este es el repositorio, donde podrar encontrar la implementacion del backend, en la rama develop : 
https://github.com/Alejandracarvajalcampo/portal-vacaciones-backend.git

En el siguiente drive podrás encontrar la colección completa con las anteriores operaciones descritas, abrir con postman

https://1drv.ms/u/s!ArQ4HoRgNuh9gXm3Yh-cG2i2jlbz?e=3YXyZT

Nota: se deja la propiedad spring.jpa.hibernate.ddl-auto=create-drop en ese estado para que cada vez que se corra la aplicación se borren y se vuelvan a crear los datos iniciales, para que el insert no se ejecute varias veces y se repitan los datos y genere algún tipo de error


