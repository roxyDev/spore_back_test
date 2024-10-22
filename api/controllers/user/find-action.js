module.exports = 
{

  friendlyName: 'Find',
  description: 'Find user.',


  inputs: 
  {
	email: {
      type: "string",
    },  
	  
	id: {
      type: "string",
    },
  },


  exits: 
  {

  },


  fn: async function (inputs, exits) 
  {
	var user;
    if(inputs.id)
	{
		user = await User.findOne({ id:inputs.id });		
	}
	else if(inputs.email)
	{
		user = await User.findOne({ userEmail:inputs.email });
	}
	
    return exits.success
	({
		message: '',
		data: user,
	});
  }
};