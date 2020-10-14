function guess() {
  let sel = document.getElementById('input1');
    sel.addEventListener("change", function () {
      var type = document.getElementById("input1").value;
        if (type == "car") {
            document.getElementById("input2").innerHTML = `
            <option id="cm1"value="audi">Audi</option>
            <option value="ford">Ford</option>
            <option value="mercedes">Mercedes</option>`
            document.getElementById("disc").innerHTML = info.intro();
        };
        if (type == "truck") {
            document.getElementById("input2").innerHTML = `
            <option value="man">Man</option>
            <option value="daimler">Daimler</option>
            <option value="volvo">Volvo</option>`
        };
        if (type == "bike") {
            document.getElementById("input2").innerHTML = `
            <option value="honda">Honda</option>
            <option value="harley">Harley Davidson</option>
            <option value="kawasaki">Kawasaki</option>`
        };
    });
};

guess()

var box = [];

class Vehicle {
    model;
    year: number;
    ps: number;
    price: number; 
    constructor(model, year, ps, price) {
      this.model = model;
      this.year = year;
      this.ps = ps;
      this.price = price;
      box.push(this);

      }
    intro() { 
      var b = this.year;
      var c = this.ps;
      var d = this.price;
      return `${this.model} ${this.year} ${this.ps}. Old Price ${this.price}. New Price `  + Math.floor(d*c/b);
    }
  }

 var nr = document.getElementById("input3").value;
console.log(nr);

  let info = new Vehicle ("Ford", nr, 100, 10000);

  document.getElementById("disc").innerHTML = info.intro();

  console.log(info.intro());

  console.log(box);


class Planes extends Vehicle {
  fueltype: string;
  seats: number;
  constructor(model, year, ps, price, fueltype, seats) {
    super(model, year, ps, price,);
    this.fueltype = fueltype;
    this.seats = seats;
  }
  intro() {
    return `${super.intro()} ${this.fueltype} ${this.seats}`;
  }
}

let res1 = new Planes ("Airbus", 1970, 2000, 1000000, "Kerosene", 100);

console.log(res1.intro());

class Ships extends Vehicle {
  length: number; 
  constructor(model, year, ps, price, length) {
    super(model, year, ps, price,);
    this.length = length;
  }

  intro() {
    return `${super.intro()} ${this.length}`;
  }
}

let res2 = new Ships ("Dufour", 2014, 1000, 200000, 600);

console.log(res2.intro());