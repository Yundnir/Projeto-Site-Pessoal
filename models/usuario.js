'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idUser: {
			field: 'idUser',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeUser: {
			field: 'nomeUser',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		apelido: {
			field: 'apelido',
			type: DataTypes.STRING,
			allowNull: false
		},
		senhaUser: {
			field: 'senhaUser',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'Cadastro', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
