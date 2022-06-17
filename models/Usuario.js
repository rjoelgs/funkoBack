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
const Usuario = mongoose.model('Usuario', userSchema)

// 4. EXPORTACIÓN
module.exports = Usuario
