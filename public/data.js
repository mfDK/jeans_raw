module.exports = function() {
    var data = {
        jeans: []
    }

    var brand = ["Naked and Famous", "Levi's", "Gustin", "3sixteeen", "Japan Blue's", "Baldwin", "Left Field"];
    var images = [
        "https://images.pexels.com/photos/42466/pexels-photo-42466.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/8796/car-jeans-shoes-travel.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/82803/pexels-photo-82803.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/6762/wood-light-fashion-people.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/50660/pexels-photo-50660.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/286691/pexels-photo-286691.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/25252/pexels-photo-25252.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/55665/pexels-photo-55665.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/2887/fashion-man-person-model.jpg?h=350&auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/142837/pexels-photo-142837.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
    ];

    function randomNumber(between) {
        if (between) {
            var number = Math.floor(Math.random() * between);
            return number;
        } else {
            return Math.floor(Math.random() * 1000);
        }
    }

    function randomDate() {
        var year = randomNumber(99),
            month = randomNumber(11),
            date = randomNumber(30);

        var randomDate = new Date(year, month, date);
        return randomDate.toJSON();
    }

    function Jean(id, name, url, brand, worn, popularity, created) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.brand = brand;
        this.worn = worn;
        this.popularity = popularity;
        this.created = created;
    }

    for (var i = 0; i < 25; i++) {
        data.jeans.push(new Jean(
            i,
            "Jean" + randomNumber(),
            images[randomNumber(images.length)],
            brand[randomNumber(brand.length)],
            randomNumber(30),
            randomNumber(),
            randomDate()
        ));
    }

    return data;

}
