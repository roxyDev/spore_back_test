const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

module.exports = {
  friendlyName: 'Send mail',
  description: '',
  inputs: {
    options: {
      type: 'ref',
      required: true,
    },
  },
  exits: {
    success: {
      description: 'All done.',
    },
  },
  fn: async function (inputs) 
  {
	  try {
		  
	  var transporter = nodemailer.createTransport(
		{
		  service: 'gmail',
		  auth: {
			user: 'rocio.chavoya@gmail.com',
			pass: 'hhynrcgsjwueteam' 
		  }
		});


	transporter.use(
      'compile',
      hbs({
        viewEngine: {
          extName: '.hbs',
          partialsDir: './views',
          layoutsDir: './views',
          defaultLayout: '',
        },
        viewPath: './views/',
        extName: '.hbs',
      })
    );


		var mailOptions = {
		  from: 'rocio.chavoya@gmail.com',
		  /*to: 'rocio.chavoya@gmail.com',
		  subject: 'Sending Email using Node.js',
		  text: 'That was easy!'*/
		  ...inputs.options,
		};
		
		
		
		await transporter.sendMail(mailOptions, function(error, info)
		{
		  if (error) 
		  {
			console.log(error);
		  } else 
		  {
			console.log('Email sent: ' + info.response);
		  }
		});
	  
	  } catch (error) {
      sails.log(error);
    }
	
    /*const transporter = nodemailer.createTransport(
      nodemailerSendgrid({
        apiKey: sails.config.sendGridAPIKey || process.env.SENDGRID_API_KEY,
      })
    );
	
    transporter.use(
      'compile',
      hbs({
        viewEngine: {
          extName: '.hbs',
          partialsDir: './views',
          layoutsDir: './views',
          defaultLayout: '',
        },
        viewPath: './views/',
        extName: '.hbs',
      })
    );
    try {
      let emailOptions = {
        from: 'LogrocketSailsAPI <alert@logrocketsailsapi.com>',
        ...inputs.options,
      };
      await transporter.sendMail(emailOptions);
    } catch (error) {
      sails.log(error);
    }*/
  },
};