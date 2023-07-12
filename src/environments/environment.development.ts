export const environment = {
  server: 'http://localhost:39890/api/',
  controllers:{
    cars:{
      getCars:'cars/get-cars',
      deleteCar:'cars/delete-car-by-id',
      newCar: 'cars/new-car',
      updateCar: 'cars/update-car'
    },
    brands:{
      getBrands:'brands/get-brands',
    },
    models:{
      getModelsByBrand:'models/get-models-by-idbrand',
    }
  }
};
