$(document).ready(function() {
    $("#validateButton").click(function() {
        var isValid = true;

        // Ad kontrolü
        if ($("#name").val().trim() === "") {
            alert("Ad alanı boş olamaz.");
            isValid = false;
        }

        // Soyad kontrolü
        if ($("#surname").val().trim() === "") {
            alert("Soyad alanı boş olamaz.");
            isValid = false;
        }

        // Email kontrolü
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test($("#email").val().trim())) {
            alert("Geçerli bir email adresi giriniz.");
            isValid = false;
        }

        // Telefon kontrolü
        if ($("#phone").val().trim() === "") {
            alert("Telefon alanı boş olamaz.");
            isValid = false;
        }

        // Mesaj kontrolü
        if ($("#message").val().trim() === "") {
            alert("Mesaj alanı boş olamaz.");
            isValid = false;
        }

        if (isValid) {
            alert("Form başarıyla doğrulandı.");
        }
    });

    $("#resetButton").click(function() {
        $("#contactForm")[0].reset();
    });

    $("#contactForm").submit(function(event) {
        // event.preventDefault(); // Formun normalde gönderilmesini engellemeyin
        alert("Form gönderiliyor...");
    });
});

// Vanilla JavaScript kodları
document.addEventListener('DOMContentLoaded', function() {
    // Doğrula butonu için JavaScript
    document.getElementById('validateButtonJs').addEventListener('click', function() {
        let isValid = true;

        // Ad kontrolü
        if (document.getElementById('name').value.trim() === '') {
            alert('Ad alanı boş olamaz.');
            isValid = false;
        }

        // Soyad kontrolü
        if (document.getElementById('surname').value.trim() === '') {
            alert('Soyad alanı boş olamaz.');
            isValid = false;
        }

        // Email kontrolü
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(document.getElementById('email').value.trim())) {
            alert('Geçerli bir email adresi giriniz.');
            isValid = false;
        }

        // Telefon kontrolü
        if (document.getElementById('phone').value.trim() === '') {
            alert('Telefon alanı boş olamaz.');
            isValid = false;
        }

        // Mesaj kontrolü
        if (document.getElementById('message').value.trim() === '') {
            alert('Mesaj alanı boş olamaz.');
            isValid = false;
        }

        if (isValid) {
            alert('Form başarıyla doğrulandı (JavaScript).');
        }
    });

    // Temizle butonu için JavaScript
    document.getElementById('resetButtonJs').addEventListener('click', function() {
        document.getElementById('contactForm').reset();
    });

    // Gönder butonu için JavaScript
    document.getElementById('submitButtonJs').addEventListener('click', function() {
        alert('Form gönderiliyor (JavaScript)...');
        document.getElementById('contactForm').submit();
    });
});
