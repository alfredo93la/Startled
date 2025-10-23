<?php
// // Permite que React pueda enviar peticiones desde otro dominio
// header("Access-Control-Allow-Origin: *");

// --- INICIO DE CORRECCIÓN CORS (CON MÚLTIPLES DOMINIOS) ---

// 1. Define tu lista de orígenes permitidos
$allowed_origins = [
    'https://www.startled.com.mx',
    'https://startled.com.mx'
];

// 2. Comprueba si el origen de la petición (enviado por el navegador) está en tu lista
if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
    // Si está, permite ESE origen específico.
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
}
// Nota: Si la petición viene de un origen no listado, no se enviará la cabecera
// y el navegador la bloqueará, que es lo que queremos.

// 3. Agrega los métodos permitidos (los mismos que antes)
header("Access-Control-Allow-Methods: POST, OPTIONS");

// 4. Permite el header 'Content-Type' (el mismo que antes)
header("Access-Control-Allow-Headers: Content-Type");

// 5. Maneja la solicitud 'preflight' (OPTIONS) (la misma que antes)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200); // Responde OK
    exit; // No continúes con el resto del script
}

// --- FIN DE CORRECCIÓN CORS ---

header("Content-Type: application/json");

// Importa PHPMailer (asegúrate de subir la carpeta PHPMailer a tu hosting)
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Recibe los datos enviados desde React
$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    $nombre = htmlspecialchars($data['nombre']);
    $email = htmlspecialchars($data['email']);
    $telefono = htmlspecialchars($data['telefono']);
    $mensaje = htmlspecialchars($data['mensaje']);

    $mail = new PHPMailer(true);

    try {
        // Configuración SMTP de Hostinger
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';     // Cambia por tu SMTP Host
        $mail->SMTPAuth = true;
        $mail->Username = 'contacto@startled.com.mx'; // Tu correo profesional
        $mail->Password = 'Pantalla07#';          // Contraseña del correo
        $mail->SMTPSecure = 'ssl';                  // ssl o tls según tu hosting
        $mail->Port = 465;                          // 465 para SSL, 587 para TLS

        // Remitente y destinatario
        $mail->setFrom('contacto@startled.com.mx', 'Start Led'); // Tu correo
        $mail->addAddress('startled7@gmail.com');       // Donde quieres recibir los mensajes
        $mail->addReplyTo($email, $nombre);               // Responder al usuario

        // Contenido del correo
        $mail->isHTML(false); // Solo texto plano
        $mail->Subject = "Nuevo mensaje de contacto de $nombre";
        $mail->Body = "Nombre: $nombre\nCorreo: $email\nTelefono: $telefono\nMensaje:\n$mensaje";

        // Enviar
        $mail->send();
        echo json_encode(["status" => "success"]);
    } catch (Exception $e) {
        // Registrar errores en el log del servidor
        error_log("Mailer Error: " . $mail->ErrorInfo);
        echo json_encode(["status" => "error", "message" => $mail->ErrorInfo]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Datos inválidos"]);
}