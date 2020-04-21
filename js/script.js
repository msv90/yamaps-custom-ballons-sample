ymaps.ready(init);

function init () {

    var myMap = new ymaps.Map("map", {
            center: [59.938924, 30.315311],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        contract1 = '';
        body1 = '<img src="img/gorskaya2.jpg" height="170" width="226"><br/> ';
        if(contract1 !== '') { body1 += 'Номер договора: ' + contract1 + '<br>'; }        
        body1 += '<a href="http://eco-city.developcraft.ru" target="_blank">Все построенные дома</a>';
        myPlacemark1 = new ymaps.Placemark([60.041327132763, 29.97965390874], {
            balloonContentHeader: '<h4>Горская2</h4>',
            balloonContentBody: body1,
            balloonContentFooter: '«Экосити» Дома из SIP-панелей под ключ',
            hintContent: 'Горская2'
        });

        contract2 = '32557-147';
        body2 = '<img src="img/mga3.jpg" height="170" width="226"><br/> ';
        if(contract2 !== '') { body2 += 'Номер договора: ' + contract2 + '<br>'; }        
        body2 += '<a href="http://eco-city.developcraft.ru" target="_blank">Все построенные дома</a>';
        myPlacemark2 = new ymaps.Placemark([59.751154621097, 31.055143326157], {
            balloonContentHeader: '<h4>Мга3</h4>',
            balloonContentBody: body2,
            balloonContentFooter: '«Экосити» Дома из SIP-панелей под ключ',
            hintContent: 'Мга3'
        });

    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);

}