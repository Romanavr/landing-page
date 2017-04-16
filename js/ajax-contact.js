jQuery(document).ready(function() {
        var $forms = $('[data-ajax-form]');

    $forms.each(function () {
        var $form = $(this);
        // var $formMessages = $form.find('.main_contact_form_message');

        $form.submit(function (e) {
            e.preventDefault();

            var formData = $form.serialize();

            $.ajax({
                    type: 'POST',
                    url: $form.attr('action'),
                    data: formData,
                    dataType: 'json',
                    cache: false
                })
                .done(function (response) {
                    if(response) {
                        if(!response.error && response.message) {
                            // $formMessages.removeClass('error');
                            // $formMessages.addClass('success');
                            // Set the message text.
                            // $formMessages.text('Благодарим вас, ваше сообщение было успешно отправлено!');
                            alert(response.message);
                            // Clear the form.
                            $form[0].reset();
                        } else {
                            alert("Ой! Кажется что-то пошло не так. Пожалуйста, попробуйте еще раз отравить сообщение, либо свяжитесь с нами по телефону.");
                        }
                    }
                    else {
                        alert("Ой! Кажется что-то пошло не так. Пожалуйста, попробуйте еще раз отравить сообщение, либо свяжитесь с нами по телефону.");
                        // $formMessages.removeClass('success');
                        // $formMessages.addClass('error');
                        // $formMessages.text('Попробуйте еще раз отправить сообщение, либо свяжитесь с нами по телефону.');
                    }

                })
                .fail(function (data) {
                    alert("Ой! Кажется что-то пошло не так. Пожалуйста, попробуйте еще раз отравить сообщение, либо свяжитесь с нами по телефону.");
                    // $formMessages.removeClass('success');
                    // $formMessages.addClass('error');
                    // $formMessages.text('Попробуйте еще раз отправить сообщение, либо свяжитесь с нами по телефону.');
                });

        });
    })
});