<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../../../vendor/phpmailer/phpmailer/src/Exception.php';
require '../../../vendor/phpmailer/phpmailer/src/SMTP.php';

require_once(APIROOT . "/config.php");
    
    

function sendEmail($to, $subject, $message) {
    $mail = new PHPMailer(true);

    try {
        // Konfiguration für SMTP
        $mail->isSMTP();
        $mail->Host = 'keskincoding.de'; // Ihr SMTP-Server
        $mail->SMTPAuth = true;
        $mail->Username = 'no-reply@keskincoding.de'; // Ihr Benutzername
        $mail->Password = 'ngv3BPG.bjy1qgh_pwa'; // Ihr Passwort
        $mail->SMTPSecure = 'ssl';

        $mail->Port = 465 ;

        // Absender- und Empfängerinformationen
        $mail->setFrom('no-reply@keskincoding.de', 'KSS Mailservice');
        $mail->addAddress($to);

        // E-Mail-Inhalt
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $message;

        $mail->send();

        $lol ="";

        return true;
    } catch (Exception $e) {
        return false;
    }
}


?>
