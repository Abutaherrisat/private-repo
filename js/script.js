function setSpecsPrice(specsId, price) {
   const productPrice = document.getElementById(specsId);
   productPrice.innerText = price;
}

function calculateTotalPrice() {
   const updateTotalPrice = document.getElementById('total-cost');
   const memoryPrice = getSpecsPrice('memory-cost');
   const storagePrice = getSpecsPrice('storage-cost');
   const deliveryPrice = getSpecsPrice('delivery-cost');
   const allTotalPrice = 1299 + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
   updateTotalPrice.innerText = allTotalPrice;
   document.getElementById('final-cost').innerText = allTotalPrice;
}

function getSpecsPrice(specsType) {
   const productPrice = document.getElementById(specsType).innerText;
   return productPrice;
}

document.getElementById('free-memory').addEventListener('click', function () {
   setSpecsPrice('memory-cost', 0);
   calculateTotalPrice();
   document.getElementById('apply-btn').removeAttribute('disabled');
})
document.getElementById('priced-memory').addEventListener('click', function () {
   setSpecsPrice('memory-cost', 180);
   calculateTotalPrice();
   document.getElementById('apply-btn').removeAttribute('disabled');
})
document.getElementById('free-storage').addEventListener('click', function () {
   setSpecsPrice('storage-cost', 0);
   calculateTotalPrice();
   document.getElementById('apply-btn').removeAttribute('disabled');
})
document.getElementById('priced-storage').addEventListener('click', function () {
   setSpecsPrice('storage-cost', 100);
   calculateTotalPrice();
   document.getElementById('apply-btn').removeAttribute('disabled');
})
document.getElementById('double-storage').addEventListener('click', function () {
   setSpecsPrice('storage-cost', 180);
   calculateTotalPrice();
   document.getElementById('apply-btn').removeAttribute('disabled');
})
document.getElementById('free-delivery').addEventListener('click', function () {
   setSpecsPrice('delivery-cost', 0);
   calculateTotalPrice();
   document.getElementById('apply-btn').removeAttribute('disabled');
})
document.getElementById('priced-delivery').addEventListener('click', function () {
   setSpecsPrice('delivery-cost', 20);
   calculateTotalPrice();
   document.getElementById('apply-btn').removeAttribute('disabled');
})

document.getElementById("apply-btn").addEventListener('click', function () {
   const promoCode = document.getElementById("promo-code").value;
   if (promoCode == 'stevekaku') {
      const totalPrice = parseInt(document.getElementById("final-cost").innerText);
      const discountPrice = (totalPrice * 20) / 100;
      const finalPrice = totalPrice - discountPrice;
      console.log(finalPrice);
      document.getElementById('final-cost').innerText = finalPrice;
      document.getElementById('apply-btn').setAttribute('disabled', true);
      document.getElementById('success-message').style.display = 'block';
      document.getElementById('error-message').style.display = 'none';
      document.getElementById("promo-code").value = '';
   }
   else {
      document.getElementById('error-message').style.display = 'block';
      document.getElementById('success-message').style.display = 'none';
      document.getElementById("promo-code").value = '';


   }
})





