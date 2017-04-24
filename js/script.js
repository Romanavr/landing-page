

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
        
        
        jQuery('.stamp-true').click(function() {
                jQuery(this).addClass("active");
                jQuery(".stamp-false").removeClass("active");
                jQuery(".service-order").attr("data-stamp", "С печатью");
        });
        jQuery('.stamp-false').click(function() {
                jQuery(this).addClass("active");
                jQuery(".stamp-true").removeClass("active");
                jQuery(".service-order").attr("data-stamp", "Без печати");
        });

        jQuery('.myBtn').click(function() {
           jQuery('#myModal').show();
                var serviceName = jQuery(this).attr('data-service-name');
                var servicePrice = jQuery(this).attr('data-service-price');
                var stamp = jQuery(this).attr('data-stamp');
                // var stamp = jQuery("").attr('data-service-price');
                jQuery("input[name='service-name']").val(serviceName);
                jQuery("input[name='service-price']").val(servicePrice);
                jQuery("input[name='stamp']").val(stamp);
        });
        jQuery("span").click(function() {
                jQuery('#myModal').hide();
        });

        // END

});