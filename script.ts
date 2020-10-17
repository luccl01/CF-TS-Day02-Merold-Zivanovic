var allProfiles = [];
class Pro {
    name: string;
    img: string;
    des: string;
    favorite: boolean = false;
    constructor(name: string, img: string, des: string) {
        this.name = name;
        this.img = img;
        this.des = des;
        allProfiles.push(this);
    }
    chose(){
      return  `
      <div class="card">
      <img class="card-img-top" src="${this.img}">
      <div class="text-center card-body">
        <h4 class="card-title">${this.name}</h4>
        <p class="card-text">${this.des}</p>
        <a class="heart"><img src="img/heart.png"></a>
      </div>
      </div>
      `
    }
    fav(){
      return `        
      <div class="card">
      <img class="card-img-top" src="${this.img}">
      <div class="text-center card-body">
        <h4 class="card-title">${this.name}</h4>
        <p class="card-text">${this.des}</p>
        <a class="xkill1"><img src="img/x.png"></a>
      </div>
      </div>`
    }
}

new Pro("BirdPerson 01", "img/pic1.jpg", "Description");
new Pro("BirdPerson 02", "img/pic2.jpg", "Description");
new Pro("BirdPerson 03", "img/pic3.jpg", "Description");
new Pro("BirdPerson 04", "img/pic4.jpg", "Description");
new Pro("BirdPerson 05", "img/pic5.jpg", "Description");
new Pro("BirdPerson 06", "img/pic6.jpg", "Description");
new Pro("BirdPerson 07", "img/pic7.jpg", "Description");
new Pro("BirdPerson 07", "img/pic8.jpg", "Description");

$(document).ready(function () {

    for (i = 0; i < allProfiles.length; i++) {
      let info = allProfiles[i].chose();
        $("#content").append(`
        <div class="p-5 col-lg-3" id="${i}">
        ${info}
        </div>
        `)
    }

    $(`.heart`).on('click', function () {
        let x = $(this).parent().parent().parent().attr('id');
        if(allProfiles[x].favorite == false) {
          allProfiles[x].favorite = true;
          let info = allProfiles[x].fav();
          $("#fav").append(`
          <div class="p-5 col-lg-3" number="${x}">
            ${info}
          </div>
          `);
        }
        $(this).parent().parent().parent().remove();
    });

    $(`#fav`).on('click', '.xkill1', function () {
      let x = $(this).parent().parent().parent().attr('number');
      $(this).parent().parent().parent().remove();
      allProfiles[index].favorite = false;

   });



});