--CREANDO LA BASE DE DATOS
create DATABASE crud_node;
use crud_node;

CREATE table customer(
id int(6) auto_increment PRIMARY KEY,
nombre VARCHAR(50) not null,
direccion varchar(100)not null,
telefono VARCHAR(15)
);  

--ver las tablas
show tables;

--describiendo la tabla
desc customer;
