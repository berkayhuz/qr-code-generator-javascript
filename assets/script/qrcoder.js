$(document).ready(function () {
    var qrcode = new QRCode(document.getElementById("qrCodeImage"), {
        text: "",
        width: 256,
        height: 256,
        colorDark: "#000000", 
        colorLight: "#ffffff" 
    });
    $("#qrContent").on('input', function () {
        var content = $(this).val();
        qrcode.clear();
        qrcode.makeCode(content);
        $("#qrCodeImage").show();
        $("#downloadQRCode").show();
    });
    $("#downloadQRCode").on('click', function () {
        var qrCodeDataURL = $("#qrCodeImage img").attr("src");
        var a = document.createElement("a");
        a.href = qrCodeDataURL;
        a.download = "QRCode.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
    $("#backgroundColor, #qrColor").on('change', function () {
        var backgroundColor = $("#backgroundColor").val();
        var qrColor = $("#qrColor").val();
        $("#qrCodeImage").css("background-color", backgroundColor);
        qrcode._htOption.colorDark = qrColor;
        qrcode._htOption.colorLight = backgroundColor;
        qrcode.makeCode($("#qrContent").val());
    });
});