YMaps.jQuery(function () {
        // Создает экземпляр карты и привязывает его к созданному контейнеру
        var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);

        // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
        map.setCenter(new YMaps.GeoPoint(37.632726, 55.758809), 15);

        // Создаем очень уникальную-метку по дизайну Артема Лебдева
        var s = new YMaps.Style();
        s.iconStyle = new YMaps.IconStyle();

        // Делаем её размеры и пропорции по феншую
        s.iconStyle.href = 'images/map-label.png';
        s.iconStyle.size = new YMaps.Point(60, 80);
        s.iconStyle.offset = new YMaps.Point(-20, -70);

        // Создает уникальную метку в центре Москвы
        var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.632706,55.758658), {style: s});

        // Устанавливаем уникальное содержимое балуна
        placemark.name = "Москва";
        placemark.description = "Никольная дом 10 стр.2, офис 315. <p><a class='map-tel-link' href='tel: +7-495-111-11-06'><i style='color: #d62026' class='fa fa-phone'></i><strong>+7 (495) 111-11-06</strong></a></p>";

        // Добавляет метку на карту
        map.addOverlay(placemark);
});

jQuery(document).ready(function() {
        jQuery('.moscow').click(function() {
                jQuery('.group-moscow, .moscow').addClass('active');
                jQuery('.group-mo, .group-other, .mo, .other').removeClass('active');
        });
        jQuery('.mo').click(function() {
                jQuery('.group-mo, .mo').addClass('active');
                jQuery('.group-moscow, .group-other, .moscow, .other').removeClass('active');
        });
        jQuery('.other').click(function() {
                jQuery('.group-other, .other').addClass('active');
                jQuery('.group-moscow, .group-mo, .moscow, .mo').removeClass('active');
        });
});