$(document).ready(function () {
    $('.js-documents-tab').click(function () {
        var $group = $($(this).attr('href'));
        $('.documents-group, .js-documents-tab').removeClass('active');
        $(this).addClass('active');
        $group.addClass('active');
        return false;
    });

    $("input[name=phone]").mask("+7(999) 999-99-99");


    $('.js-service-form').on("submit", function () {
        var $form = $(this);
        var formData = new FormData($form[0]);

        $(".js-overlay").addClass('active');
        $("#feedback-modal input[name='service-name']").val( $form.find('input[name="service-name"]').val() );
        $("#feedback-modal input[name='service-price']").val( $form.find('input[name="service-price"]').val() );
        $("#feedback-modal input[name='stamp']").val( $form.find('input[name="stamp"]').val() );

        return false;
    });

    $(".modal-close").click(function () {
        $(".js-overlay").removeClass('active');
    });

    $("[data-type]").click(function () {
        var type = $(this).data("type");
        var typePrice = $(this).data("type-price");
        var $form = $(this).closest("form");

        $form.find("input[name='stamp']").val(type);
        $form.find(".js-service-form-price").html(typePrice);
        $form.find("input[name='service-price']").val(typePrice);
        $form.find("[data-type]").removeClass("active");

        $(this).addClass("active");

        return false;
    });
});