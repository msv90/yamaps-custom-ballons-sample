ymaps.ready(init);

function init () {

    var myMap = new ymaps.Map("map", {
            center: [59.938924, 30.315311],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark1 = new ymaps.Placemark([60.041327132763, 29.97965390874], {
            balloonContentHeader: '<h4>Горская2</h4>',
            balloonContentBody: '<img src="img/gorskaya2.jpg" height="170" width="226"><br/> ' +
                '<a href="http://eco-city.developcraft.ru" target="_blank">Все построенные дома</a>',
            balloonContentFooter: '«Экосити» Дома из SIP-панелей под ключ',
            hintContent: 'Горская2'
        });

        myPlacemark2 = new ymaps.Placemark([59.751154621097, 31.055143326157], {
            balloonContentHeader: '<h4>Мга3</h4>',
            balloonContentBody: '<img src="img/mga3.jpg" height="170" width="226"><br/> ' +
                '<a href="http://eco-city.developcraft.ru" target="_blank">Все построенные дома</a>',
            balloonContentFooter: '«Экосити» Дома из SIP-панелей под ключ',
            hintContent: 'Мга3'
        });

    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);

}