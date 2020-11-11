
ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: [55.75, 37.65],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),



        placemark = new ymaps.Placemark(null),
        longitude, latitude;
    myMap.geoObjects.add(placemark);
    //*console.log(myMap.geoObjects);
    //*console.log(placemark);


    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-5, -38]
    });


    myMap.geoObjects
        .add(myPlacemark);


    $('.contacts__address--link').each(function() {
        var self = $(this);
        self.bind({
            click: function(e) {
                e.preventDefault();
                longitude = self.parents('.contacts__item').attr('data-longitude');
                latitude = self.parents('.contacts__item').attr('data-latitude');
                myPlacemark.geometry.setCoordinates([longitude, latitude]);
                myMap.setCenter(myPlacemark.geometry.getCoordinates());
            }
        })
    });





});

