#E-ticaret Sepet Uygulaması

Bu proje, basit bir e-ticaret sepet yönetim sistemi uygulamasıdır. Kullanıcılar ürünleri sepete ekleyebilir, miktarlarını artırabilir veya sepetten çıkarabilirler. Ayrıca, toplam ürün miktarı ve sepetin toplam fiyatı da görüntülenir. Sepet işlemleri, tarayıcıda yerel depolama (local storage) kullanılarak korunur.

**Özellikler

-Ürünleri sepete ekleme
-Sepetteki ürünlerin miktarını artırma
-Sepetten ürün çıkarma
-Sepetin tamamını temizleme
-Sepet bilgilerini tarayıcı yerel depolamasında saklama
-Kullanıcıya bildirimler gösterme (react-toastify)


**Kullanılan Teknolojiler
-React: UI oluşturmak için kullanıldı.
-React Context API: Uygulamanın farklı bölümlerinde sepet verilerini ve işlemlerini paylaşmak için kullanıldı.
-useLocalStorage: Sepet verilerini tarayıcıda saklamak için kullanıldı.
-React Router: Farklı sayfalar arasında geçiş yapmak için kullanıldı.
-React Toastify: Kullanıcıya işlemler hakkında bildirim göstermek için kullanıldı.


**Proje Yapısı
src/context/basketContext.js: Sepet yönetimi fonksiyonlarını içeren context bileşeni.
src/components/BasketItem.js: Sepetteki her bir ürünü temsil eden bileşen.
src/pages/Basket.js: Sepet sayfasını oluşturan bileşen.
src/pages/ProductList.js: Ürünlerin listelendiği ve sepete eklendiği sayfa.
src/App.js: Uygulamanın rotalarını ve provider bileşenini içeren ana bileşen.

**Kullanım
Anasayfada listelenen ürünlerden istediğinizi "Sepete Ekle" butonuna tıklayarak sepete ekleyebilirsiniz.
Sepet sayfasına giderek eklediğiniz ürünleri görebilirsiniz.
Sepetteki ürünlerin miktarını artırabilir veya azaltabilirsiniz.
"Siparişi Onayla" butonuna tıklayarak sepeti tamamen temizleyebilirsiniz.
![etic](https://github.com/user-attachments/assets/787bff67-752f-4184-ae43-a31d320811d9)
