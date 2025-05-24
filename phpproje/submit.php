<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan gelen verileri al
    $name = htmlspecialchars($_POST['name']);
    $surname = htmlspecialchars($_POST['surname']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Kullanıcıdan alınan verileri görüntülemek için HTML içeren bir PHP sayfası
    echo "
    <!DOCTYPE html>
    <html lang='tr'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <link href='https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap' rel='stylesheet'>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'>
        <link rel='stylesheet' href='iletisim.css'>
        <title>İletişim Bilgileri</title>
        <script>
            setTimeout(function(){
                window.location.href = 'anasayfa.html';
            }, 10000);
        </script>
    </head>
    <body>
        <div class='container'>
            <h1>İletişim Bilgileriniz</h1>
            <p><strong>Ad:</strong> $name</p>
            <p><strong>Soyad:</strong> $surname</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Telefon:</strong> $phone</p>
            <p><strong>Mesaj:</strong> $message</p>
            <p>10 saniye sonra anasayfaya yönlendirileceksiniz.</p>
        </div>
    </body>
    </html>
    ";
} else {
    // GET request ya da başka bir yöntemle gelen isteği işleme
    echo "Form verisi gönderilmedi.";
}
?>
