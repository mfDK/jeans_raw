module.exports = function() {
    var data = {
        jeans: []
    }

    var brand = ["Naked and Famous", "Levi's", "Nudies", "3sixteeen", "Japan Blue's", "Baldwin", "Left Field"];

    function randomNumber(between) {
        if (between) {
            var number = Math.floor(Math.random() * between);
            return number;
        } else {
            return Math.floor(Math.random() * 10);
        }
    }

    function Jean(id, name, brand, worn, popularity) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.worn = worn;
        this.popularity = popularity;
    }

    for (var i = 0; i < 50; i++) {
        data.jeans.push(new Jean(i,"Jean" + randomNumber(),brand[randomNumber(brand.length)],randomNumber(),randomNumber()));
    }

    return data;

}
