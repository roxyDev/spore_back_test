module.exports = {
  friendlyName: 'Add',
	description: 'Add Vehicle.',
  inputs: 
	{
    vehicleUserId:{
      type: 'ref',
      required : true
    },
    vehicleBrand:
    {
      type: 'string',
      required: true, 
    },
    vehicleModel: 
    {
      type: 'string',
      required: true, 
    },
    vehicleYear: 
    {
      type: 'string',
      required: true, 
    },
    vehiclePlateNumber: 
    {
      type: 'string',
      required: true,
    },
    vehicleColor: 
    {
      type: 'string',
      required: true,
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
  success: 
    {
      statusCode: 201,
      description: 'Registro creado correctamente',
    },
  error: 
    {
      statusCode: 500,
      description: 'Error general',
    },
 },
  fn: async function (inputs, exits) 
	{
   
        try {
          var createVehicle =  await Vehicle.create(inputs).fetch();
          return exits.success
          ({
              message: 'Registrado correctamente',
              newId: createVehicle.id
          });  
     
        }
        catch(error){
            return exits.error
            ({
                message: `Error `,
                error: error.message,
            });
        }
    }
}