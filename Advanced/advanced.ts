class Vehicles {
    name: string;
    image: string;
    description: string;
    constructor(name: string, image: string, description: string){
        this.name = name;
        this.image = image;
        this.description = description;
    }
}
class Moreinfo extends Vehicles{
    seats;
    kilometers;
    age;
    constructor (name: string, image: string, description: string, seats: number, kilometers: number, age: number){
        super(name, image, description)
        this.seats = seats
        this.kilometers = kilometers
        this.age = age
    }
    calculatePrice (){
        var sitze = this.seats
        var kilometer = this.kilometers
        var alter = this.age
        var price = alter * sitze * kilometer
        return(price)
    }
}
    var Limo1 = new Moreinfo("Limo","./images/Unknown.jpg","Relativ neu",4,5000,2)
    var Limo2 = new Moreinfo("Limo1","./images/images3.jpg","Relativ neu",4,3000,2)
    var Limo3 = new Moreinfo("Limo2","./images/images4.jpg","Relativ neu",4,5000,5)
    var Limo4 = new Moreinfo("Limo2","./images/images.jpg","Relativ neu",4,2500,5)

    var Honda1 = new Moreinfo("Honda", "./images/Honda.jpeg","gebraucht",3,4000,3)
    var Honda2 = new Moreinfo("Honda1", "./images/pimpedHonda2.jpeg","gebraucht",3,4000,3)
    var Honda3 = new Moreinfo("Honda2", "./images/pimpedHonda3.jpeg", "neu" ,3,4000,3)
    var Honda4 = new Moreinfo("Honda3", "./images/hondapimped4.jpeg","gebraucht",3,4000,3)

    var Mitsubishi1 = new Moreinfo("Mitsubishi1", "./images/Mitsubishi1.jpeg","gebraucht",3,4000,3)
    var Mitsubishi2 = new Moreinfo("Mitsubishi2", "./images/Mitshubishi2.jpg","gebraucht",3,4000,3)
    var Mitsubishi3 = new Moreinfo("Mitsubishi3", "./images/Mitsubishi3.jpg", "neu" ,3,4000,3)
    var Mitsubishi4 = new Moreinfo("Mitsubishi4", "./images/Mitsubishi4.jpg","gebraucht",3,4000,3)

    var Motorbike1 = new Moreinfo("Motorbike1", "./images/Motorbike1.jpeg","gebraucht",2,2000,2)
    var Motorbike2 = new Moreinfo("Motorbike2", "./images/Motorbike2.jpeg","gebraucht",2,2000,2)
    var Motorbike3 = new Moreinfo("Motorbike3", "./images/Motorbike3.jpg", "neu" ,2,2000,2)
    var Motorbike4 = new Moreinfo("Motorbike4", "./images/Motorbike4.jpg","gebraucht",2,2000,2)
    
    var vehiclesPool = []
    vehiclesPool.push(Limo1,Limo2,Limo3,Limo4)
    console.log (vehiclesPool)
    // console.log (car1.calculatePrice())
    // console.log (car2.calculatePrice())
    // console.log (car3.calculatePrice())
    // console.log (car4.calculatePrice())

    var hondaPool = []
    hondaPool.push(Honda1,Honda2,Honda3,Honda4)
    var mitshubishiPool = []
    mitshubishiPool.push(Mitsubishi1,Mitsubishi2,Mitsubishi3,Mitsubishi4)
    var motorbikePool = []
    motorbikePool.push(Motorbike1,Motorbike2,Motorbike3,Motorbike4)


let option1 = document.getElementById('carOpt')
option1.addEventListener('change', function(){
    $("#content").html("");
for (let i in vehiclesPool){
    var type = option1.value;

if (type == "limousines"){
        console.log ("hello")
        $('#brand').html(`Limousines`)
        $('#content').append(`
        <div id="" class='row col-lg-6 col-md-6 text-white my-5'><img id="${i}" class="img-fluid col-lg-8 py-2" src="${vehiclesPool[i].image}"><div class="col-lg-4 py-2"><p id="result${i}">${vehiclesPool[i].name}<br>${vehiclesPool[i].description}</p></div></div>`
        )
        document.getElementById(`${i}`).addEventListener('click', function(){
            $(this).parent().find("p").html(`${vehiclesPool[i].calculatePrice()}`)
        })}
    ;
if (type == "honda"){
        console.log ("hello")
        $('#brand').html(`<img class="logo" src="./images/hondalogo.png"> Honda <img class="logo" src="./images/hondalogo.png">`)
        $('#content').append(` 
        <div id="" class='row col-lg-6 col-md-6 text-white my-5'><img id="${i}" class="img-fluid col-lg-8 py-2" src="${hondaPool[i].image}"><div class="col-lg-4 py-2"><p id="result${i}">${hondaPool[i].name}<br>${hondaPool[i].description}</p></div></div>`
        )
        document.getElementById(`${i}`).addEventListener('click', function(){
            $(this).parent().find("p").html(`${hondaPool[i].calculatePrice()}`)
        })}
    ;
if (type == "Mitshubishi"){
        console.log ("hello")
        $('#brand').html(`Mitshubishi`)
        $('#content').append(` 
        <div id="" class='row col-lg-6 col-md-6 text-white my-5'><img id="${i}" class="img-fluid col-lg-8 py-2" src="${mitshubishiPool[i].image}"><div class="col-lg-4 py-2"><p id="result${i}">${mitshubishiPool[i].name}<br>${mitshubishiPool[i].description}</p></div></div>`
        )
        document.getElementById(`${i}`).addEventListener('click', function(){
            $(this).parent().find("p").html(`${mitshubishiPool[i].calculatePrice()}`)
        })}
    ;
if (type == "motorbikes"){
        console.log ("hello")
        $('#brand').html(`Motorbikes`)
        $('#content').append(` 
        <div id="" class='row col-lg-6 col-md-6 text-white my-5'><img id="${i}" class="img-fluid col-lg-8 py-2" src="${motorbikePool[i].image}"><div class="col-lg-4 py-2"><p id="result${i}">${motorbikePool[i].name}<br>${motorbikePool[i].description}</p></div></div>`
        )
        document.getElementById(`${i}`).addEventListener('click', function(){
            $(this).parent().find("p").html(`${motorbikePool[i].calculatePrice()}`)
        })}
    
}
        // for (let i in vehiclesPool){
})

    


//     document.getElementById('content').innerHTML =` 
//     <div class="mx-5">
//     <div class="row">            
//         <div class='car${i} row col-lg-6 col-md-6 text-white'><img class="img-fluid col-lg-6 py-2" src="./images/Unknown.jpg"><div class="col-lg-6 py-2"><p id="result"></p></div></div>
//         <div class="car${i} row col-lg-6 col-md-6 text-white"><img class="img-fluid col-lg-6 py-2" src="./images/images.jpg"><div class="col-lg-6 py-2"><p id="result"></p></div></div>
//     </div>
//     <div class='row'>
//         <div class="car${i} row col-lg-6 col-md-6 text-white"><img class="img-fluid col-lg-6 py-2" src="./images/images3.jpg"><div class="col-lg-6 py-2"><p id="result"></p></div></div>
//         <div class="car${i} row col-lg-6 col-md-6 text-white"><img class="img-fluid col-lg-6 py-2" src="./images/images4.jpg"><div class="col-lg-6 py-2"><p id="result"></p></div></div>
//     </div>
// </div>`

// function showInfo(){
//     console.log("hello")
// }
// document.getElementById(`car${i}`).addEventListener('click', showInfo, false)

