<?php 
require_once("../../base/start.php");
require_once("../contact/sendMail.php");
// require_once(APIROOT . "/controllers/login/login.query.php");

function sendMail () {
    try {
        $post_json  = file_get_contents('php://input');
        $obj = json_decode($post_json);

        // Verwendung der Funktion
        // Verwendung der Funktion
        // Verwendung der Funktion
        // Verwendung der Funktion
        // Verwendung der Funktion
        // Verwendung der Funktion
        // Verwendung der Funktion
        // Verwendung der Funktion
        $emailTo = 'support@keskincoding.de';
        $emailSubject = 'Test-E-Mail';
        $emailMessage = '<h1>Dies ist eine Test-E-Mail.</h1>';
        $emailMessage .= '<p>Das ist der Nachrichtentext.</p>';
        $emailMessage .= '<p>Vorname:'.$obj->firstname.'</p>';
        $emailMessage .= '<p>Nachname:'.$obj->lastname.'</p>';
        $emailMessage .= '<p>E-Mail:'.$obj->mail.'</p>';
        $emailMessage .= '<p>Telefon:'.$obj->phone.'</p>';
        $emailMessage .= '<p>'.$obj->message.'</p>';

        if (sendEmail($emailTo, $emailSubject, $emailMessage)) {
            http_response_code(200);
            echo 'Die E-Mail wurde erfolgreich gesendet.';
        } else {
            throw new Exception("E-Mail delivery failed", 1);
        }
    } catch (Throwable $e) {
        echo  $e->getMessage();
        http_response_code(500);
    }
}

$api = new RestApi(null,'sendMail');
?>