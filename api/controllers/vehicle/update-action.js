
module.exports = {
    
    friendlyName: 'Update',
	description: 'Update Vehicle',
    
    
    
    inputs: 
	{   
    id: {  
      type: 'number',
      required: true,
    },
    vehicleUserId:{
      type: 'ref',
      required : true
    },
    vehicleBrand:
    {
      type: 'string',
      required: false, 
    },
    vehicleModel: 
    {
      type: 'string',
      required: false, 
    },
    vehicleYear: 
    {
      type: 'string',
      required: false, 
    },
    vehicleVin: 
    {
      type: 'string',
      required: false,
    },
    vehiclePlateNumber: 
    {
      type: 'string',
      required: false,
    },
    vehicleColor: 
    {
      type: 'string',
      required: false,
    },
    vehicleLat: { 
      required: false,
      type:'number',
    },
    vehicleLng: { 
      required: false,
      type: 'number',
    }
  },
	exits: 
	{
        error: 
        {
          statusCode: 500,
          description: 'Error general',
        },
    },
    fn: async function (inputs, exits) 
	{
      try {
        
        var update =  await Vehicle.update({
              id: inputs.id
          }).set(_.omit (inputs , ['id']));

          // Emitir la actualización a todos los clientes conectados
          sails.sockets.broadcast('vehicle-update', update);
          console.log(update)

          return exits.success
            ({           
              message: `Actualizado`,
            }); 
       
      }
      catch(error){
            return exits.error
            ({
                error: error.message,
            });
        }
    }
}