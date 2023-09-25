class Driver {
    constructor(name, experience) {
      this.name = name;
      this.experience = experience;
    }
  }
  
  class Engine {
    constructor(power, manufacturer) {
      this.power = power;
      this.manufacturer = manufacturer;
    }
  }
  
  class Car extends Engine {
    constructor(brand, classCar, weight, driver, power, manufacturer) {
      super(power, manufacturer);
      this.brand = brand;
      this.classCar = classCar;
      this.weight = weight;
      this.driver = driver;
    }
  
    start() {
      console.log("Go");
    }
  
    stop() {
      console.log("Stop");
    }
  
    turnRight() {
      console.log("Turn right");
    }
  
    turnLeft() {
      console.log("Turn left ");
    }
  
    toString() {
        return `Car: ${this.brand}\<br><br>Class: ${this.classCar}\<br><br>weight: ${this.weight}\<br><br>DriverExperience: ${this.driver.name}\<br><br>Experience: ${this.driver.experience} experience\<br><br>Power: ${this.power}\<br><br>Manufacturer: ${this.manufacturer}\<br><br><br>`;
      }
  }

  class Truck extends Car {
    constructor(brand, carClass, weight, driver, power, manufacturer, carryingCapacity) {
        super(brand, carClass, weight, driver, power, manufacturer);
        this.liftability = carryingCapacity;
    }

    toString() {
        return `Car: ${this.brand}\<br><br>Class: ${this.classCar}\<br><br>weight: ${this.weight}\<br><br>DriverExperience: ${this.driver.name}\<br><br>Experience: ${this.driver.experience} experience\<br><br>Power: ${this.power}\<br><br>Manufacturer: ${this.manufacturer}\<br><br>Cargo capacity : ${this.liftability}\<br><br><br>`;
    }Power
  }

  class SportsCar extends Car{
    constructor(brand, carClass, weight, driver, power, manufacturer, topSpeed) {
        super(brand, carClass, weight, driver, power, manufacturer);
        this.topSpeed = topSpeed;
    }

    toString() {
        return `Car: ${this.brand}\<br><br>Class: ${this.classCar}\<br><br>weight: ${this.weight}\<br><br>DriverExperience: ${this.driver.name}\<br><br>Experience: ${this.driver.experience} experience\<br><br>Power: ${this.power}\<br><br>Manufacturer: ${this.manufacturer}\<br><br>Maximum speed: ${this.topSpeed}`;
    }
  }
  
  const driver = new Driver("DodgerJ", 3);
  const car = new Car("Lamborghini Diablo", "Supercar", "1575 kg", driver, "10 hp", "Lamborghini");

  const driver1 = new Driver("DodgerQ", 3);
  const car1 = new Car(" Mercedes-Benz Antos ", "Truck", "7500 kg", driver1, "220 hp", "Mercedes-Benz", "22.000 kg");

  const driver2 = new Driver("DodgerV", 3);
  const car2 = new Car(" Ford Mustang", "Large-scale sports car", "1800 kg", driver2, "666 hp", "Ford ", "325 km/h");
  
  document.write(car.toString());
  document.write(car1.toString());
  document.write(car2.toString());
  car.start();
  car.turnLeft();
  car.stop();