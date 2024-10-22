module.exports = {

    friendlyName: "Login",
    description: "Login user.",

    inputs: {
        email: {
            type: "string",
            required: true,
        },
        password: {
            type: "string",
            required: true,
        },
    },

    exits: {
        //200 ok
        success: {
            description: "Autentificación correcta.",
        },
        //la cuenta no ha sido confirmada
        notConfirmed: {
            statusCode: 406,
            description: "Cuenta no confirmada.",
        },
        //el usuario no existe
        notAUser: {
            statusCode: 404,
            description: "Usuario no encontrado.",
        },
        // la cuenta esta desactivada
        disabled: {
            statusCode: 403,
            description: "Cuenta deshabilitada.",
        },
        //error de password
        passwordMismatch: {
            statusCode: 401,
            description: "Usuario o contraseña incorrecta",
        },
        //error general
        operationalError: {
            statusCode: 400,
            description: "Error de petición",
        },
    },

    fn: async function(inputs, exits) {

        try 
		{
            const user = await User.findOne({
                userEmail: inputs.email
            });

            if (!user) //si el usuario no existe, error 
			{
                return exits.notAUser({
                    error: `La cuenta del usuario ${inputs.email} no fue encontrada`,
                });
            }

            if (user.userEmailStatus == "unconfirmed") //si el correo no ha sido confirmado, error 
			{
                return exits.notConfirmed({
                    error: `La cuenta del usuario ${inputs.email} no ha sido confirmada`,
                });
            }

            if (user.userActive == false) //si el usuario ya no esta activo, error 
			{
                return exits.disabled({
                    error: `La cuenta del usuario ${inputs.email} ha sido deshabilitada`,
                });
            }

            if (inputs.password == "") //si el passwotd esta en blanco, error 
			{
                return exits.passwordMismatch({
                    error: error.message
                });
            }

            await sails.helpers.passwords.checkPassword(inputs.password, user.userPassword); //si las contraseñas no coinciden se produce una excepcion que se controla abajo
						

            const token = await sails.helpers.generateNewJwtToken(user.userEmail); //se genera un nuevo token

            return exits.success
			({
                message: `${user.userEmail} ha sido autentificado`,
                data: user,
                token,
            });

        } 
		catch (error) 
		{
            //console.log(error);

            if (error.isOperational) //errores controlados
			{
                if (error.code === 'incorrect') //error por que el password no coincide 
				{
                    return exits.passwordMismatch({
                        error: 'Usuario y/o contraseña incorrectos'
                    });
                }

                return exits.operationalError //algun otro error
				({
                    message: `Error al autentificar el usuario ${inputs.email}`,
                    error: error.raw,
                });
            }


            return exits.error //error inesperado
			({
                message: `Error al autentificar el usuario ${inputs.email}`,
                error: error.message,
            });
        }

    },
};