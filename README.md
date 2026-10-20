# Mustafa Yaşar — Portföy

Hızlı açılan, telefonda bozulmayan, sade bir kişisel portföy sitesi. Saf HTML, CSS ve JavaScript; derleme adımı ve bağımlılık yok.

> coder mustıo.co

## Özellikler

- TR / EN / DE dil seçimi (varsayılan TR, seçim tarayıcıda hatırlanır)
- Koyu / açık tema
- Türkiye saati, günün sözü, ilerleme çizgisi
- Dört konsept proje ve detay pencereleri
- Yetenekler, Portföy Vitrini sekmeleri
- İletişim formu (e-posta uygulamasını hazır mesajla açar) ve e-posta kopyalama
- Klavye erişimi, `prefers-reduced-motion` desteği, mobil menü

## Klasör yapısı

```
index.html          Sayfa iskeleti
css/style.css       Tüm stiller
js/app.js           İçerik, çeviriler, etkileşimler, görseller (SVG/canvas)
assets/favicon.svg  Site ikonu
.github/workflows/  GitHub Pages dağıtımı
```

## Yerelde çalıştırma

```bash
python3 -m http.server 8080
# tarayıcıda http://localhost:8080
```

VS Code kullanıyorsan "Live Server" eklentisi de olur.

## İçeriği düzenleme

Her şey `js/app.js` dosyasının başındadır:

| Ne | Nerede |
| --- | --- |
| Metinler ve çeviriler (TR/EN/DE) | `S` nesnesi |
| E-posta, GitHub, WhatsApp, diğer bağlantılar | `EMAIL`, `LINKS` (boş bağlantı gizlenir) |
| Teknoloji yığını | `STACK` |
| Sertifikalar | `CERTS` (doldurulana kadar sekme gizli) |
| Referanslar | `REFS` (yalnızca gerçek, onaylı yorumlar) |
| Projeler | `PROJECTS` |
| Yetenekler | `SKILLS` |

Konsept projeler gerçek ürün değildir; gerçek bir proje eklediğinde etiketi ve açıklamayı güncelle.

## GitHub'a yükleme ve yayınlama

```bash
git init
git add .
git commit -m "İlk sürüm: portföy"
git branch -M main
git remote add origin https://github.com/musto-root/portfolio.git
git push -u origin main
```

Sonra GitHub'da **Settings → Pages → Build and deployment → Source: GitHub Actions** seç. Her `main` push'unda site otomatik yayınlanır: `https://musto-root.github.io/portfolio/`

Özel alan adı kullanacaksan Pages ayarlarından "Custom domain" ekle.

## Notlar

- İletişim formu bir sunucuya veri göndermez. "Gönder" düğmesi `mailto:` ile e-posta uygulamasını açar. Doğrudan gönderim için Formspree gibi bir servis eklenebilir.
- Yazı tipleri (Geist, Geist Mono) Google Fonts'tan yüklenir; yüklenemezse sistem fontuna düşer.

## Lisans

MIT — bkz. [LICENSE](LICENSE).
