
ymaps.ready(function() {




    var myMap = new ymaps.Map('map', {
            center: [53.907785, 27.330820],
            zoom: 17,
            controls: []
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
        iconImageOffset: [-35, -38],
        iconContentOffset: [55, 155],
            });

    var position = myMap.getGlobalPixelCenter();
    myMap.setGlobalPixelCenter([ position[0] + 60, position[1] ]);



    // var position = map.getGlobalPixelCenter();
    // map.setGlobalPixelCenter([ position[0] - 30, position[1] ]);

    myMap.geoObjects
        .add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');

    $('.contacts__item-link').each(function() {
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

