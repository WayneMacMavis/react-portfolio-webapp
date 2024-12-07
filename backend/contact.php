<?php

// Check if .env exists and load manually
$envPath = __DIR__ . '/.env';
if (file_exists($envPath)) {
    $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '#') === 0) continue; // Skip comments
        list($key, $value) = explode('=', $line, 2);
        $_ENV[trim($key)] = trim($value);
    }
} else {
    die('Environment file (.env) not found.');
}

// SMTP credentials from .env
$smtpUser = $_ENV['SMTP_USER'] ?? null;
$smtpPass = $_ENV['SMTP_PASS'] ?? null;

if (!$smtpUser || !$smtpPass) {
    die('SMTP_USER or SMTP_PASS not set in .env');
}

// CORS headers for React app communication
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer directly (no composer needed)
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Validate input
if (isset($data['name'], $data['email'], $data['message'])) {
    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $smtpUser;
        $mail->Password = $smtpPass;
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Email settings
        $mail->setFrom($smtpUser, 'Portfolio Contact');
        $mail->addAddress($smtpUser); // Send to yourself
        $mail->addReplyTo($data['email'], $data['name']);
        $mail->Subject = "New Contact Form Message from {$data['name']}";
        $mail->Body = "Name: {$data['name']}\nEmail: {$data['email']}\nMessage:\n{$data['message']}";

        // Send the email
        $mail->send();
        echo json_encode(['success' => true]);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'error' => $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid input']);
}
