// Faiz hesaplama fonksiyonu
function faizHesapla(anapara, faizOrani, vadeSuresi) {
  var faizMiktari = (anapara * faizOrani * vadeSuresi) / 100;
  var toplamTutar = anapara + faizMiktari;
  return {
    faizMiktari: faizMiktari,
    toplamTutar: toplamTutar
  };
}

// Kullanıcının girdiği değerleri alın
var anapara = parseFloat(prompt("Anapara miktarını girin:"));
var faizOrani = parseFloat(prompt("Yıllık faiz oranını girin (%):"));
var vadeSuresi = parseInt(prompt("Vade süresini girin (yıl):"));

// Hesaplama fonksiyonunu çağırın
var sonuc = faizHesapla(anapara, faizOrani, vadeSuresi);

// Sonucu konsola yazdırın
console.log("Faiz Miktarı: " + sonuc.faizMiktari.toFixed(2));
console.log("Toplam Tutar: " + sonuc.toplamTutar.toFixed(2));
