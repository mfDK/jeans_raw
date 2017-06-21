(function() {
    'use strict';

    angular
        .module('jeansApp')
        .controller('JeansController', JeansController);

    JeansController.$inject = ['Jeans'];

    function JeansController(Jeans) {
        var vm = this;
        vm.getJeans = getJeans;

        launch();

        function launch() {
            getJeans();
        }

        function getJeans() {
            Jeans.get()
                .then(function(response) {
                    vm.jeans = response;
                    return vm.jeans;
                });
        }

        function vote() {

        }
    }
})();
