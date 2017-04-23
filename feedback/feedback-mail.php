
<?php
require '../vendor/autoload.php';
require 'config.php';
function sendSms($text) {
    $url = "http://sms.ru/sms/send?api_id=" . SMS_AUTH_KEY . "&to=" . SMS_PHONE_NUMBER . "&text=" . urlencode(substr($text, 0, 180));
    $response = file_get_contents($url);
}
function sendEmail($data) {
    $mail = new PHPMailer;
//    $mail->SMTPDebug = 3;
    $mail->isSMTP();
    $mail->CharSet = EMAIL_CHARSET;
    $mail->Host = EMAIL_SENDER_SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = EMAIL_SENDER_ADDRESS;
    $mail->Password = EMAIL_SENDER_SMTP_PASSWORD;
    $mail->SMTPSecure = EMAIL_SENDER_SMTP_ENCRYPTION;
    $mail->Port = EMAIL_SENDER_SMTP_PORT;
    $mail->From = EMAIL_SENDER_ADDRESS;
    $mail->FromName = EMAIL_SENDER_NAME;
    $mail->addReplyTo(EMAIL_SENDER_REPLY_TO);
    $mail->isHTML(true);
    $mail->addAddress($data['to']);
    $mail->Subject = $data['subject'];
    $mail->Body    = $data['body'];
    $mail->AltBody = $data['altBody'];
    return $mail->send();
}
$response = array(
    "error" => true,
    "message" => null
);
if (isset($_POST['submit'])) {
    if (!empty($_POST['login'])) {
        die('GTFO!');
    }
    if ( !empty($_POST['first_name']) && !empty($_POST['phone']) && !empty($_POST['message']) ) {
        $name = strip_tags($_POST['first_name']);
        $phone = strip_tags($_POST['phone']);
        $message = strip_tags($_POST['message']);
        $cad_num = strip_tags($_POST['cad_num']);
        $service_modal = strip_tags($_POST['service-modal']);
        $service_name = strip_tags($_POST['service-name']);
        $service_price = strip_tags($_POST['service-price']);
        $ip = filter_var($_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP);
        $message_date = date("Y-m-d H:i:s");
        $email_result = sendEmail(array(
            'to' => 'ask@palladium.travel',
            'subject' => "Новое сообщение обратной связи с сайта 'Срочные выписки из ЕГРН'",
            'body' => "Здравствуйте. Вам было отправлено сообщение с сайта 'Срочные выписки из ЕГРН' с помощью обратной связи. Оно содержит следующие данные: <br> Имя: $name <br> Контакты: $phone <br> Вопрос: $message <br>, Кадастровый номер: $cad_num <br> Название услуги: $service_name <br> Цена услуги: $service_price <br> Название IP: $ip <br> Время отправки: $message_date"  ,
            'altBody' => "Здравствуйте. Вам было отправлено сообщение с сайта 'Срочные выписки из ЕГРН' с помощью обратной связи. Оно содержит следующие данные: Имя: $name Контакты: $phone Вопрос: $message Кадастровый номер: $cad_num IP: $ip Время отправки: $message_date"
        ));
        $response['error'] = false;
        $response['message'] = "Благодарим вас, ваше сообщение было успешно отправлено! Наши менеджеры свяжутся с вами в ближайшее время.";
    } else {
        $response['error'] = true;
        $response['message'] = "Пожалуйста, заполните все необходимые поля формы!";
    }
} else {
    $response['error'] = true;
    $response['message'] = "Форма не отправлена";
}
header('Content-Type: application/json');
echo json_encode($response);