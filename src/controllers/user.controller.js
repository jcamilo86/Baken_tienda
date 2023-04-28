const User = require("../models/user");
const jwt= require("jsonwebtoken"); 
const bcryptjs =require("bcryptjs");




//CREATE
const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.json({ users });
  } catch (error) {
    res.staus(500).json({ msg: "un error  usuario" });
  }
};

// CREAR UN USUARIO JWT
const createUser = async (req, res) => {
	const { username, email, password } = req.body // OBTENER USUARIO, EMAIL Y PASSWORD DE LA PETICIÓN
	
	// GENERAMOS STRING ALEATORIO PARA USARSE CON EL PASSWORD
	const salt = await bcryptjs.genSalt(10)
	const hashedPassword = await bcryptjs.hash(password, salt)
	console.log(hashedPassword)
	try {
		// CREAMOS UN USUARIO CON SU PASSWORD ENCRIPTADO
		const newUser = await User.create({
			username,
			email,
			password: hashedPassword,
		})

		const payload = {
			user: {
				id: newUser._id,
			},
		}

		// 2. FIRMAR EL JWT
		jwt.sign(
			payload, // DATOS QUE SE ACOMPAÑARÁN EN EL TOKEN
			process.env.SECRET, // LLAVE PARA DESCIFRAR LA FIRMA ELECTRÓNICA DEL TOKEN,
			{
				expiresIn: 360000, // EXPIRACIÓN DEL TOKEN
			},
			(error, token) => {
				// CALLBACK QUE, EN CASO DE QUE EXISTA UN ERROR, DEVUELVA EL TOKEN
				if (error) throw error
				res.json({ token })
			}
		)
	} catch (error) {
		console.log(error)
		return res.status(400).json({
			msg: error,
		})
	}
}

// INICIAR SESIÓN
const loginUser = async (req, res) => {
	const { email, password } = req.body
	try {
		let foundUser = await User.findOne({ email: email }) // ENCONTRAMOS UN USUARIO
		if (!foundUser) {
			// SI NO HUBO UN USUARIO ENCONTRADO, DEVOLVEMOS UN ERROR
			return res.status(400).json({ msg: 'El usuario no existe' })
		}
		// SI TODO OK, HACEMOS LA EVALUACIÓN DE LA CONTRASEÑA ENVIADA CONTRA LA BASE DE DATOS
		const passVerified = await bcryptjs.compare(password, foundUser.password)
		// SI EL PASSWORD ES INCORRECTO, REGRESAMOS UN MENSAJE SOBRE ESTO
		if (!passVerified) {
			return await res.status(400).json({ msg: 'Password incorrecto' })
		}
		// SI TODO CORRECTO, GENERAMOS UN JSON WEB TOKEN
		// 1. DATOS DE ACOMPAÑAMIENTO AL JWT
		const payload = {
			user: {
				id: foundUser.id,
			},
		}
		// 2. FIRMA DEL JWT
		if (email && passVerified) {
			jwt.sign(payload, process.env.SECRET, { expiresIn: 3600000 }, (error, token) => {
				if (error) throw error
				//SI TODO SUCEDIÓ CORRECTAMENTE, RETORNAR EL TOKEN
				res.json({ token })
			})
		} else {
			res.json({ msg: 'Hubo un error', error })
		}
	} catch (error) {
		console.log(error)
		res.json({ msg: 'Hubo un error', error })
	}
}

const verifyUser = async (req, res) => {
	try {
		// CONFIRMAMOS QUE EL USUARIO EXISTA EN BASE DE DATOS Y RETORNAMOS SUS DATOS, EXCLUYENDO EL PASSWORD
		const user = await User.findById(req.user.id).select('-password')
		res.json({ user })
	} catch (error) {
		// EN CASO DE ERROR DEVOLVEMOS UN MENSAJE CON EL ERROR
		res.status(500).json({
			msg: 'Hubo un error',
			error,
		})
	}
}

const updateUser = async (req, res) => {
	const { username, email } = req.body
	try {
		const userUpdated = await User.findByIdAndUpdate(req.user.id, { username, email }, { new: true })
		res.json(userUpdated)
	} catch (error) {
		res.status(500).json({
			msg: 'Hubo un error actualizando la Usuario',
		})
	}
}

module.exports = { getUser,createUser,updateUser,verifyUser,loginUser }
