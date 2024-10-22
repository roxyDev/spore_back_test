module.exports = 
{

  friendlyName: 'Download',
  description: 'Download file.',



  /*exits: {

    success: 
	{
      description: 'Login successful',
    },
    notAUser: 
	{
      statusCode: 404,
      description: 'User not found',
    },
    passwordMismatch: 
	{
      statusCode: 401,
      description: 'Password do not match',
    },
    operationalError: 
	{
      statusCode: 400,
      description: 'The request was formed properly'
    }
  },*/


  /*fn: async function (inputs, exits) 
  {	
		try 
		{					
			var SkipperDisk = require('skipper-disk');
			var fileAdapter = SkipperDisk();  

			this.res.set("Content-disposition", "attachment;");
			fileAdapter.read(sails.config.custom.filePath+this.req.query.id).
			on('error', function (err)
			{
				return exits.error(); //this.res.serverError(err);
			})
			.pipe(this.res);			
		} 
		catch (error) 
		{
		  console.error(error);
		  return exits.error();
		}
  }*/

  fn: async function (inputs, exits) {
    try {
        var SkipperDisk = require('skipper-disk'); //clase manejadora de archvios
        var path = require('path'); //clase maneja rutas
        var fileAdapter = SkipperDisk();

        
        var filePath = sails.config.custom.filePath + this.req.query.id; //ruta del archivo en el file sistem
        var defaultFileName = path.basename(this.req.query.id); //obtenemos el nombre original del id

        
       // var fileName = this.req.query.name || defaultFileName; //si mandan un parametro llamado name, usamos eso en lugar del id

        
        this.res.set("Content-disposition", "attachment; filename=" + defaultFileName);

        fileAdapter.read(filePath)
            .on('error', function (err) {
                return exits.error(); 
            })
            .pipe(this.res);
   
    } catch (error) 
 {
        return exits.error();
    }
}


};