create database lol;
use lol;

create table Cadastro (
idUser int primary key auto_increment,
nomeUser varchar (45),
email varchar (45),
apelido varchar (20),
senhaUser varchar (18)
);

select * from Cadastro;
