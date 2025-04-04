
  document.addEventListener('DOMContentLoaded', function() {
            // إدارة القائمة المنزلقة
            const menuToggle = document.querySelector('.menu-toggle');
            const mainNav = document.querySelector('.main-nav');
            
            menuToggle.addEventListener('click', function() {
                mainNav.classList.toggle('active');
                this.innerHTML = mainNav.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : 
                    '<i class="fas fa-bars"></i>';
            });
            
            // إدارة الكميات
            const quantityInputs = document.querySelectorAll('.quantity-input');
            const minusBtns = document.querySelectorAll('.minus');
            const plusBtns = document.querySelectorAll('.plus');
            const summaryItems = document.querySelector('.summary-items');
            const totalAmount = document.querySelector('.total-amount');
            
            let cart = [];
            
            // تحديث عربة التسوق
            function updateCart() {
                summaryItems.innerHTML = '';
                let total = 0;
                
                cart.forEach(item => {
                    if(item.quantity > 0) {
                        const itemElement = document.createElement('div');
                        itemElement.className = 'summary-item';
                        itemElement.innerHTML = `
                            <p>${item.name} × ${item.quantity} = ${item.price * item.quantity} جنيه</p>
                        `;
                        summaryItems.appendChild(itemElement);
                        total += item.price * item.quantity;
                    }
                });
                
                totalAmount.textContent = total;
            }
            
            // إضافة منتجات إلى العربة
            const products = [
                { name: 'مياه وديان 330 مل', price: 25 },
                { name: 'مياه وديان 500 مل', price: 35 },
                { name: 'مياه وديان 1 لتر', price: 30 },
                { name: 'مياه وديان 1.5 لتر', price: 45 }
            ];
            
            // تهيئة العربة
            products.forEach(product => {
                cart.push({
                    name: product.name,
                    price: product.price,
                    quantity: 0
                });
            });
            
            // إضافة أحداث للكميات
            quantityInputs.forEach((input, index) => {
                input.addEventListener('change', function() {
                    const value = parseInt(this.value) || 0;
                    this.value = Math.max(0, value);
                    cart[index].quantity = parseInt(this.value);
                    updateCart();
                });
            });
            
            minusBtns.forEach((btn, index) => {
                btn.addEventListener('click', function() {
                    const input = quantityInputs[index];
                    let value = parseInt(input.value) || 0;
                    value = Math.max(0, value - 1);
                    input.value = value;
                    cart[index].quantity = value;
                    updateCart();
                });
            });
            
            plusBtns.forEach((btn, index) => {
                btn.addEventListener('click', function() {
                    const input = quantityInputs[index];
                    let value = parseInt(input.value) || 0;
                    value += 1;
                    input.value = value;
                    cart[index].quantity = value;
                    updateCart();
                });
            });
            
            // زر إتمام الطلب
            document.querySelector('.checkout-btn').addEventListener('click', function() {
                if(parseInt(totalAmount.textContent) > 0) {
                    alert('شكراً لطلبك! سنتصل بك لتأكيد التفاصيل.');
                } else {
                    alert('الرجاء اختيار منتجات أولاً.');
                }
            });
        });