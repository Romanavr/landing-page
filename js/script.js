YMaps.jQuery(function () {
        // Создает экземпляр карты и привязывает его к созданному контейнеру
        var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);

        // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
        map.setCenter(new YMaps.GeoPoint(37.632726, 55.758809), 15);

        // Создаем очень уникальную-метку по дизайну Артема Лебдева
        var s = new YMaps.Style();
        s.iconStyle = new YMaps.IconStyle();
        s.hintContentStyle = new YMaps.HintContentStyle(
            new YMaps.Template("<b>$[name]</b><div>$[description]</div>")
        );

        s.balloonContentStyle = new YMaps.BalloonContentStyle(
            new YMaps.Template("<div style=\"color:#0A0\">$[description]</div>")
        );

        // Делаем её размеры и пропорции по феншую
        s.iconStyle.href = 'images/map-label.png';
        s.iconStyle.size = new YMaps.Point(60, 80);
        s.iconStyle.offset = new YMaps.Point(-20, -70);

        // Создает уникальную метку в центре Москвы

        var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.632706,55.758658), {hasHint: true, style: s});

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

        jQuery("input[name=phone]").mask("+7(999) 999-99-99");

        // MODAL WINDOW
        // Get the modal
//         var modal = document.getElementById('myModal');
//
// // Get the button that opens the modal
//         var btn = document.getElementsByClassName("myBtn");
//
// // Get the <span> element that closes the modal
//         var span = document.getElementsByClassName("close")[0];
//
// // When the user clicks on the button, open the modal
//         btn.onclick = function() {
//                 modal.style.display = "block";
//         }
//
// // When the user clicks on <span> (x), close the modal
//         span.onclick = function() {
//                 modal.style.display = "none";
//         }
//
// // When the user clicks anywhere outside of the modal, close it
//         window.onclick = function(event) {
//                 if (event.target == modal) {
//                         modal.style.display = "none";
//                 }
//         }

        jQuery('.myBtn').click(function() {
           jQuery('#myModal').show();
                var serviceName = jQuery(this).attr('data-service-name');
                var servicePrice = jQuery(this).attr('data-service-price');
                jQuery("input[name='service-name']").val(serviceName);
                jQuery("input[name='service-price']").val(servicePrice);
        });
        jQuery("span").click(function() {
                jQuery('#myModal').hide();
        });
        // END

});