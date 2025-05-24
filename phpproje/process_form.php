<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan gelen verileri al
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);

    // Burada veritabanına bağlantı ve kullanıcı kaydını gerçekleştiren kodları ekleyebilirsiniz
    // Bu örnekte, sadece kullanıcı adını ve email'i alıp işleme devam ediyoruz

    // Kayıt işlemi başarılıysa
    $username = explode('@', $email)[0]; // Kullanıcı adını email adresinin @ işaretinden öncesi olarak belirleyelim

    // Kullanıcıya hoş geldiniz mesajını göster ve sonra yönlendir
    echo "
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Hoşgeldiniz</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                font-family: 'Libre Baskerville', serif;
            }
            .welcome-message {
                text-align: center;
            }
        </style>
        <script>
            setTimeout(function(){
                window.location.href = 'anasayfa.html';
            }, 5000);
        </script>
    </head>
    <body>
        <div class='welcome-message'>
            <h1>Hoşgeldiniz, $username!</h1>
            <p>5 saniye sonra anasayfaya yönlendirileceksiniz.</p>
        </div>
    </body>
    </html>
    ";
}
?>
