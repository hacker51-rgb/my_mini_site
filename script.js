<script>
fetch("https://www.zooplus.de/checkout/api/shop-api/v1/sid", {
  credentials: 'include'
})
.then(res => res.text())
.then(sid => {
  console.log("SID:", sid);
  
  // Можно вставить SID на страницу (для теста)
  document.body.innerHTML += "<p><strong>SID:</strong> " + sid + "</p>";

  // Запрашиваем корзину
  fetch("https://www.zooplus.de/checkout/api/cart-api/v1/cart/" + sid, {
    credentials: 'include'
  })
  .then(r => r.json())
  .then(data => {
    console.log("Cart Data:", data);
    document.body.innerHTML += "<h2>Корзина:</h2><pre>" + JSON.stringify(data, null, 2) + "</pre>";
  })
  .catch(err => {
    console.error("Ошибка при получении корзины:", err);
  });
})
.catch(err => {
  console.error("Ошибка при получении SID:", err);
});
</script>
