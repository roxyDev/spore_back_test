module.exports = 
{
  tableName: "vehicles",

  attributes: 
  {
  id: { 
    type: 'string',  
    columnName : 'vehicle_id',
    columnType : 'integer',  
    autoIncrement: true,
  },
  vehicleUserId: {
    columnName: 'vehicle_user_id',
    model:'user',
  },
  vehicleBrand: {
    type : 'string',
    columnName : 'vehicle_brand', 
    columnType : 'varchar(100)', 
  },
  vehicleModel: {
    type : 'string',
    columnName : 'vehicle_model',
    columnType : 'varchar(100)', 
  },
  vehicleYear: {
    type : 'string',
    columnName : 'vehicle_year',
    columnType : 'varchar(4)', 
  },
  vehiclePlateNumber: {
    type : 'string',
    columnName : 'vehicle_plate_number',
    columnType : 'varchar(8)', 
  },
  vehicleColor: {
    type : 'string',
    columnName : 'vehicle_color',
    columnType : 'varchar(50)', 
  },
  vehicleLat: {
    columnName : 'vehicle_lat',
    type : 'ref',
    columnType : 'float(11,7)', 
  },
  vehicleLng: {
    columnName : 'vehicle_lng',
    type : 'ref',
    columnType : 'float(11,7)', 
  },
  vehicleActive : { 
    type: 'boolean',
    defaultsTo : true, 
    columnType: 'boolean',      
    columnName: 'vehicle_active', 
  }
  },
};

