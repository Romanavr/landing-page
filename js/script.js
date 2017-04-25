jQuery(document).ready(function() {
        $('.js-documents-tab').click(function() {
                var group = $( $(this).attr('href') );
                $('.documents-group, .js-documents-tab').removeClass('active');
                $(this).addClass('active');
                group.addClass('active');
                return false;
        });

        $("input[name=phone]").mask("+7(999) 999-99-99");

        
        $('.js-service-form').on("submit", function() {
                var form = $(this);
                var formData = new FormData(form[0]);

                $("#myModal").show();
                $("#myModal input[name='service-name']").val(formData.get("service-name"));
                $("#myModal input[name='service-price']").val(formData.get("service-price"));
                $("#myModal input[name='stamp']").val(formData.get("stamp"));


                return false;
        });

        $("[data-type]").click(function() {
                var type = $(this).data("type");
                var typePrice = $(this).data("type-price");
                $(this).closest("form").find("input[name='stamp']").val(type);
                $(this).closest("form").find(".js-service-form-price").html(typePrice);
                $(this).closest("form").find("input[name='service-price']").val(typePrice);
                $(this).closest("form").find("[data-type]").removeClass("active");
                $(this).addClass("active");

                return false;
        });
});