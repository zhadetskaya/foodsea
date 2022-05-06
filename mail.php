<?php
// Проверяем тип запроса, обрабатываем только POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Получаем параметры, посланные с javascript
    $name = $_POST['name'];
    $item = $_POST['item'];
    $phone = $_POST['phone'];

    $content = $name . ' оставил заявку на бронирование ' . $item . '. Его телефон: ' . $phone;
    $success = mail("zhadetskaya@bk.ru", 'Запрос на бронирование', $content);

    if ($success) {
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}


