'use strict';

/**
 * @ngdoc function
 * @name kleineHeldenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kleineHeldenApp
 */
angular.module('kleineHeldenApp')
    .controller('MainCtrl', function($scope) {


        $scope.cards = [{
                pictureFront: 'images/Vincent F.png',
                pictureBack: 'images/Vincent.png',
                tags: ['man', 'baard', 'digitaal'],
                away: false
            }, {
                pictureFront: 'images/Anneleen F.png',
                pictureBack: 'images/Anneleen.png',
                tags: ['vrouw', 'digitaal'],
                away: false
            }, {
                pictureFront: 'images/ariane F.png',
                pictureBack: 'images/ariane.png',
                tags: ['vrouw', 'voorbereiden', 'research', 'sjaal'],
                away: false
            }, {
                pictureFront: 'images/gunter F.png',
                pictureBack: 'images/gunter.png',
                tags: ['man', 'postproductie', 'kleuren'],
                away: false
            }, {
                pictureFront: 'images/filip F.png',
                pictureBack: 'images/filip.png',
                tags: ['man', 'reportagereis', 'buitenland'],
                away: false
            }, {
                pictureFront: 'images/david F.png',
                pictureBack: 'images/david.png',
                tags: ['man', 'postproductie', 'muziek'],
                away: false
            }, {
                pictureFront: 'images/rudi F.png',
                pictureBack: 'images/rudi.png',
                tags: ['man', 'reportagereis', 'voorbereiden', 'sjaal', 'journalist'],
                away: false
            }, {
                pictureFront: 'images/tine F.png',
                pictureBack: 'images/tine.png',
                tags: ['vrouw', 'voorbereiden', 'administratie'],
                away: false
            }, {
                pictureFront: 'images/jochen F.png',
                pictureBack: 'images/jochen.png',
                tags: ['man', 'postproductie', 'montage'],
                away: false
            }, {
                pictureFront: 'images/veronique F.png',
                pictureBack: 'images/veronique.png',
                tags: ['vrouw', 'postproductie', 'openingssequentie'],
                away: false
            }, {
                pictureFront: 'images/jan V F.png',
                pictureBack: 'images/jan V.png',
                tags: ['man', 'voorbereiden', 'baard', 'research'],
                away: false
            }, {
                pictureFront: 'images/mark F.png',
                pictureBack: 'images/mark.png',
                tags: ['man', 'postproductie', 'reportagereis', 'filmenBuitenland', 'regisseur', 'montage'],
                away: false
            }, {
                pictureFront: 'images/ina F.png',
                pictureBack: 'images/ina.png',
                tags: ['vrouw', 'voorbereiden', 'postproductie'],
                away: false
            }, {
                pictureFront: 'images/jan B F.png',
                pictureBack: 'images/jan B.png',
                tags: ['man', 'baard', 'reportagereis', 'geluid'],
                away: false
            }, {
                pictureFront: 'images/joris F.png',
                pictureBack: 'images/joris.png',
                tags: ['man', 'postproductie', 'baard', 'reportagereis', 'buitenland', 'regisseur'],
                away: false
            }

        ];


        $scope.options = [{
                text: 'Is het een man?',
                value: 'man',
                inFilter: false
            }, {
                text: 'Is het een vrouw?',
                value: 'vrouw',
                inFilter: false
            }, {
                text: 'Bereidt hij/zij de reportagereizen voor?',
                value: 'voorbereiden',
                inFilter: false
            }, {
                text: 'Werkt hij/zij aan de postproductie van Kleine Helden?',
                value: 'postproductie',
                inFilter: false
            }, {
                text: 'Heeft hij een baard?',
                value: 'baard',
                inFilter: false
            }, {
                text: 'Gaat hij/zij mee op reportagereis?',
                value: 'reportagereis',
                inFilter: false
            }, {
                text: 'Filmt hij/zij in het buitenland?',
                value: 'filmenBuitenland',
                inFilter: false
            }, {
                text: 'Zoekt hij/zij naar verhalen en personages?',
                value: 'research',
                inFilter: false
            }, {
                text: 'Vertaalt hij/zij de reeks naar online posts, filmpjes en artikels?',
                value: 'digitaal',
                inFilter: false
            }, {
                text: 'Draagt hij/zij een sjaal?',
                value: 'sjaal',
                inFilter: false
            }, {
                text: 'Schrijft hij/zij de muziek voor Kleine Helden?',
                value: 'muziek',
                inFilter: false
            }, {
                text: 'Beheert hij/zij de budgetten, de planning en vertalingen?',
                value: 'administratie',
                inFilter: false
            }, {
                text: 'Is hij/zij journalist?',
                value: 'journalist',
                inFilter: false
            }, {
                text: 'Is hij/zij regisseur van de helft van de reeks?',
                value: 'regisseur',
                inFilter: false
            }, {
                text: 'Draagt hij/zij een hoofddeksel?',
                value: 'hoofddeksel',
                inFilter: false
            }, {
                text: 'Maakte hij/zij de openingssequentie van Kleine Helden?',
                value: 'openingssequentie',
                inFilter: false
            }, {
                text: 'Bewerkt hij/zij de kleuren van de beelden?',
                value: 'kleuren',
                inFilter: false
            }, {
                text: 'Monteert hij/zij de beelden tot een geheel?',
                value: 'montage',
                inFilter: false
            }, {
                text: 'Neemt hij/zij tijdens het filmen het geluid op?',
                value: 'geluid',
                inFilter: false
            }, {
                text: 'Waakt hij/zij als eindredacteur over het hele verhaal?',
                value: 'eindredacteur',
                inFilter: false
            }


        ];




        $scope.filters = [];

        $scope.checkNumberAways = function() {
            $scope.cards.forEach(function(card) {
                if (card.away === true) {
                    $scope.numberAways++;
                    console.log('aways', $scope.numberAways);
                }
            });
        };

        $scope.filterCards = function(filter) {


            console.log('add filter to cards', filter);
            $scope.cards.forEach(function(card) {
                // card.away = false;
                var result = card.tags.indexOf(filter);
                if (result === -1) {
                    // console.log(card);
                    card.away = true;

                } else {

                }
            });
            $scope.numberAways = 0;
            $scope.checkNumberAways();
        };


        $scope.loopFilters = function(filters) {
            $scope.numberAways = 0;
            console.log('loop filters', filters);
            if (filters.length > 0) {
                filters.forEach(function(filter) {

                    $scope.filterCards(filter);
                });
            } else {
                $scope.cards.forEach(function(card) {
                    card.away = false;
                });

            }
        };

        $scope.addFilter = function(select) {
            console.log('adding filter', select);
            $scope.filters.push($scope.options[select].value);
            console.log('filters are now', $scope.filters);
            $scope.options[select].inFilter = true;
            $scope.loopFilters($scope.filters);

        };


        $scope.removeFilter = function(select) {
            console.log('remove filter', select);
            var index = $scope.filters.indexOf($scope.options[select].value);
            if (index > -1) {
                $scope.filters.splice(index, 1);
                $scope.cards.forEach(function(card) {
                    card.away = false;
                });
                $scope.loopFilters($scope.filters);
                $scope.select = '';

            }
            $scope.options[select].inFilter = false;


            console.log($scope.options[select].value);
            console.log($scope.filters);


        };





    });
