export const environment = {
  server: 'http://localhost:39890/api/',
  controllers:{
    cars:{
      getCars:'cars/get-cars',
      deleteCar:'cars/delete-car-by-id'
    },
    brands:{
      getBrands:'brands/get-brands',
    },
    models:{
      getModelsByBrand:'brands/get-models-by-idbrand',
    }
  }
};
