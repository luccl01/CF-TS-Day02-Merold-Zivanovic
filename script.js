var allProfiles = [];
var Pro = /** @class */ (function () {
    function Pro(name, img, des) {
        this.favorite = false;
        this.name = name;
        this.img = img;
        this.des = des;
        allProfiles.push(this);
    }
    Pro.prototype.chose = function () {
        return "\n      <div class=\"card\">\n      <img class=\"card-img-top\" src=\"" + this.img + "\">\n      <div class=\"text-center card-body\">\n        <h4 class=\"card-title\">" + this.name + "</h4>\n        <p class=\"card-text\">" + this.des + "</p>\n        <a class=\"heart\"><img src=\"img/heart.png\"></a>\n      </div>\n      </div>\n      ";
    };
    Pro.prototype.fav = function () {
        return "        \n      <div class=\"card\">\n      <img class=\"card-img-top\" src=\"" + this.img + "\">\n      <div class=\"text-center card-body\">\n        <h4 class=\"card-title\">" + this.name + "</h4>\n        <p class=\"card-text\">" + this.des + "</p>\n        <a class=\"xkill1\"><img src=\"img/x.png\"></a>\n      </div>\n      </div>";
    };
    return Pro;
}());
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
        var info = allProfiles[i].chose();
        $("#content").append("\n        <div class=\"p-5 col-lg-3\" id=\"" + i + "\">\n        " + info + "\n        </div>\n        ");
    }
    $(".heart").on('click', function () {
        var x = $(this).parent().parent().parent().attr('id');
        if (allProfiles[x].favorite == false) {
            allProfiles[x].favorite = true;
            var info = allProfiles[x].fav();
            $("#fav").append("\n          <div class=\"p-5 col-lg-3\" number=\"" + x + "\">\n            " + info + "\n          </div>\n          ");
        }
        $(this).parent().parent().parent().remove();
    });
    $("#fav").on('click', '.xkill1', function () {
        var x = $(this).parent().parent().parent().attr('number');
        $(this).parent().parent().parent().remove();
        allProfiles[index].favorite = false;
    });
});
