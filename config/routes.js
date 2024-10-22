
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

  
 //######  ##     ##  ######  ########  #######  ##     ## ######## ########   ######  
//##    ## ##     ## ##    ##    ##    ##     ## ###   ### ##       ##     ## ##    ## 
//##       ##     ## ##          ##    ##     ## #### #### ##       ##     ## ##       
//##       ##     ##  ######     ##    ##     ## ## ### ## ######   ########   ######  
//##       ##     ##       ##    ##    ##     ## ##     ## ##       ##   ##         ## 
//##    ## ##     ## ##    ##    ##    ##     ## ##     ## ##       ##    ##  ##    ## 
 //######   #######   ######     ##     #######  ##     ## ######## ##     ##  ######  
	'POST /customer/add': 'customer/add-action',
	'GET /customer/find': 'customer/find-action',
	'PUT /customer/update': 'customer/update-action',
	'PUT /customer/delete': 'customer/delete-action',
	'GET /customer/list': 'customer/list-action',
	'PUT /customer/disable': 'customer/disable-action',

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

	


	//acciones de dashboard
	'GET /dashboard/model-brand': 'dashboard/model-brand-action',
	'GET /dashboard/supply-status': 'dashboard/supply-status-action',
	'GET /dashboard/incidence': 'dashboard/incidence-action',
	'GET /dashboard/category': 'dashboard/category-action',
	'GET /dashboard/active-clients': 'dashboard/active-clients-action',
	'GET /dashboard/quotation-sale': 'dashboard/quotation-sale-action',
	'GET /dashboard/sale-orders': 'dashboard/sale-orders-action',
	'GET /dashboard/ticket-status': 'dashboard/ticket-status-action',




	

	

	//Conversion de divisa
	'GET /currency/converter': 'currency/converter-action',
};
