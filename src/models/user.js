// 1. IMPORTACIONES
const mongoose = require('mongoose')

// 2. SCHEMA
const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true, // Permite agregar la fecha en el que fue generado el documento.
	}
)

// 3. MODELO
const User= mongoose.model('User', userSchema)

// 4. EXPORTACIÓN
module.exports = User
