<?php
$username = $_POST['name'];
$userphone = $_POST['phone'];
$userform = $_POST['form'];
// Формирование заголовка письма
$subject  = "Новая заявка";
// Формирование тела письма
$msg = "Здравствуйте.\r\n";
$msg .= "Получена новая заявка\r\n";
$msg .= "Форма: ".$userform."\r\n";

if($_POST['phone'] != "") {
    $msg .= "Телефон: ".$userphone."\r\n";
}
if($_POST['name'] != "") {
    $msg .= "Имя: ".$username."\r\n";
}


// отправка сообщения
$verify = mail ("desh08@inbox.ru", $subject, $msg,"Content-type:text/plain; charset = utf-8\r\n");
?>