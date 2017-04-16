<?php
define(EMAIL_SENDER_ADDRESS, 'coool.test@yandex.ru'); // Кто отправляет письма
define(EMAIL_SENDER_REPLY_TO, 'coool.test@yandex.ru'); // Ответ-кому в письмах
define(EMAIL_SENDER_NAME, 'Coool test'); // Имя отправителя
define(EMAIL_SENDER_SMTP_ENCRYPTION, 'ssl');
define(EMAIL_SENDER_SMTP_HOST, 'smtp.yandex.ru');
define(EMAIL_SENDER_SMTP_PORT, 465);
define(EMAIL_SENDER_SMTP_USERNAME, 'coool.test@yandex.ru');
define(EMAIL_SENDER_SMTP_PASSWORD, '123456Aa');
define(EMAIL_CHARSET, 'UTF-8');
define(SMS_AUTH_KEY, '');
define(SMS_PHONE_NUMBER, '');   
ini_set('display_errors', 1);
ini_set('display_startup_errors',1);
error_reporting(E_ALL ^ E_NOTICE);
?>