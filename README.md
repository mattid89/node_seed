Semilla de la cual partir para realizar una api con express js, sequelize y jwt, pegandole a una base sql server. 

Para poder usarlo levantar el siguiente docker container:

- levanto el container

   sudo docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Jko3va-D9821jhsvGD" \
      -v sqlvolume:/var/opt/mssql \
      -p 1433:1433 --name sql \
      -d mcr.microsoft.com/mssql/server:2017-latest
      
- me conecto por bash

   docker exec -it sql bash  
   

- me conecto por sqlcmd

   /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P Jko3va-D9821jhsvGD
   
- creo base de datos mapa y tabla users. ver diseño en el modelo creado en el proyecto.
