
module.exports.routes = 
{

	'/view' : {view:'vw'},
	
//##     ##  ######  ######## ########   ######  
//##     ## ##    ## ##       ##     ## ##    ## 
//##     ## ##       ##       ##     ## ##       
//##     ##  ######  ######   ########   ######  
//##     ##       ## ##       ##   ##         ## 
//##     ## ##    ## ##       ##    ##  ##    ## 
// #######   ######  ######## ##     ##  ######  
	
	'POST /user/register': 'user/register-action',  
	'GET /user/confirm': 'user/confirm-action',  
	'POST /user/login': 'user/login-action',
	'POST /user/forgot-password': 'user/forgot-password-action',
	'POST /user/reset-password': 'user/reset-password-action',	
	'GET /user/list' : 'user/list-action',
	'PUT /user/disable': 'user/disable-action',
	'DELETE /user/delete': 'user/delete-action',
	'POST /user/add': 'user/add-action',	
	'GET /user/find': 'user/find-action',
	'PUT /user/update': 'user/update-action',
	'POST /user/validator' : 'user/validator-action',
	
	
	//acciones de archivos
	'POST /file/upload' : 'file/upload-action',
	'GET /file/download' : 'file/download-action',
	'DELETE /file/delete' : 'file/delete-action',



//##     ## ######## ##     ## ####  ######  ##       ########  ######  
//##     ## ##       ##     ##  ##  ##    ## ##       ##       ##    ## 
//##     ## ##       ##     ##  ##  ##       ##       ##       ##       
//##     ## ######   #########  ##  ##       ##       ######    ######  
 //##   ##  ##       ##     ##  ##  ##       ##       ##             ## 
  //## ##   ##       ##     ##  ##  ##    ## ##       ##       ##    ## 
   //###    ######## ##     ## ####  ######  ######## ########  ######  

	'POST /vehicle/add': 'vehicle/add-action',
	'GET /vehicle/find': 'vehicle/find-action',
	'DELETE /vehicle/delete': 'vehicle/delete-action',
	'GET /vehicle/list': 'vehicle/list-action',
	'PUT /vehicle/update': 'vehicle/update-action',
	'PUT /vehicle/disable': 'vehicle/disable-action',

};
