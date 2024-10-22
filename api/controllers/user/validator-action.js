const jwt = require('jsonwebtoken');

module.exports = {

  friendlyName: 'Validator action',
  description: 'Session and permission validation action',

  inputs: 
  {
	  module:
	  {
		  type:'string'
	  }
  },

  exits: 
  {
	success: 
	{
      description:'authentication token has been validated',
    },	
	invalidToken: 
	{
      statusCode: 401,
      description: 'The provided token is invalid or expired',
    },
	moduleNotFound: 
	{
      statusCode: 404,
      description: 'The provided module is not found',
    },
	forbiddenModule: 
	{
      statusCode: 403,
      description: 'The provided module is not found',
    },
  },


  fn: async function (inputs, exits) 
  {  
    try
	{
		//valida el token -------------------------------------------------------------------------------------------
		var tkn = this.req.headers['x-access-token']; //obtengo el token del header				
		var decoded = jwt.verify(tkn, sails.config.jwtSecret); //verifico el token
		
	
		//sails.log(decoded.sub);
		//valida el registro del usuario ------------------------------------------------------------------------------
		const user = await User.findOne
		({
                userEmail: decoded.sub
        });		
		if (!user || user.userActive == false) //si el usuario no existe, error 
		{
			return exits.invalidToken();
		}

	
		return exits.success({message:'ok'}); //si todo sale bien procede
		
	}
	catch (error)  //si ocurre un erro rechaza 
	{
		console.log(error);
		return exits.invalidToken({message:error});				
	}
  }


};