$(document).ready(function () {
    var $forms = $('[data-ajax-form]');

    $forms.each(function () {
        var $form = $(this);

        $form.submit(function (e) {
            e.preventDefault();

            var formData = $form.serialize();

            $.ajax({
                type: 'POST',
                url: $form.attr('action'),
                data: formData,
                dataType: 'json',
                cache: false
            }).done(function (response) {
                if (response) {
                    if (!response.error && response.message) {
                        alert(response.message);
                        // Clear the form.
                        $form[0].reset();
                    } else {
                        alert("Ой! Кажется что-то пошло не так. Пожалуйста, попробуйте еще раз отравить сообщение, либо свяжитесь с нами по телефону.");
                    }
                }
                else {
                    alert("Ой! Кажется что-то пошло не так. Пожалуйста, попробуйте еще раз отравить сообщение, либо свяжитесь с нами по телефону.");
                }

            }).fail(function (data) {
                alert("Ой! Кажется что-то пошло не так. Пожалуйста, попробуйте еще раз отравить сообщение, либо свяжитесь с нами по телефону.");
            });

        });
    })
});
