(function() {
    angular
        .module('jeansApp')
        .factory('Jeans', Jeans);

    Jeans.$inject = ['$http'];

    function Jeans($http) {
        var url = "http://localhost:3800/jeans";
        var service = {
            get: get
        };

        return service;

        function get() {
            return $http({
                method: 'GET',
                url: url,
            })
            .then(function(response) {
                return response.data;
            });
        }

        function upVote(data) {
            return $http({
                method: 'POST',
                url: url,
                data: data
            })
            .then(function(response) {
                return response.data;
            })
        }
    }
})();
