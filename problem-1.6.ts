{
    //
    
class Car {
    make: string;
    model: string;
    year: number;
  
    
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    
    getCarAge(currentYear: number = new Date().getFullYear()): number {
      return currentYear - this.year;
    }
  }
  
  
  const car = new Car("Honda", "Civic", 2017);
  console.log(car.getCarAge()); 
  
    //
}