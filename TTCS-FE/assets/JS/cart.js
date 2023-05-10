const app = {
    listProduct: [
        {
            pathImg: './assets/img/Products/product1.png',
            name: 'DISSOLVE 3D T-SHIRT/RED',
            size: 'XL',
            quantity: '1',
            priceOld: '420.000',
            priceNew: '59.000',
        },
        {
            pathImg: './assets/img/Products/product2.png',
            name: 'DISSOLVE 3D T-SHIRT/DARK GREY',
            size: 'L',
            quantity: '2',
            priceOld: '420.000',
            priceNew: '59.000',
        },
        {
            pathImg: './assets/img/Products/product3.png',
            name: 'DISSOLVE 3D T-SHIRT/DARK BROW',
            size: 'L',
            quantity: '1',
            priceOld: '420.000',
            priceNew: '59.000',
        },
    ],

    render: function() {
        let total_price = 0;
        const html = app.listProduct.map(function(product, index) {
            total_price += product.priceNew * product.quantity;
            return `
                <div class="cart-product__item">
                    <div class="cart-product__img">
                        <a href="#" class="cart-product__link">
                            <img src="${product.pathImg}" alt="">
                        </a>
                    </div>
                    <div class="cart-product__info">
                        <a href="#" class="cart-product__link">
                            <strong class="cart-product__name">${product.name}</strong>
                            <span class="cart-product__size">${product.size}</span>
                        </a>
                        <p class="price-item">
                            <span>${product.priceNew}đ</span>
                            <del>(${product.priceOld}đ)</del>
                        </p>
                        <div class="quantity-select">
                            <button class="minus-btn">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <p class="amount">${product.quantity}</p>
                            <button class="plus-btn">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        <p class="total-price__item">${Number(product.priceNew) * Number(product.quantity)}.000đ</p>
                    </div>
                    <div class="cart-product__remove">
                        <a href="#" class="remove-item">Xóa sản phẩm</a>
                    </div>
                </div>
            `;
        });
        if(html.length == 0) {
            document.querySelector('.head-title-cart').style.display = 'none';
            document.querySelector('.form-cart').innerHTML = `<h1 style="font-size: 3rem; margin-top: 50px; font-weight: 500;">Giỏ hàng của bạn đang trống</h1>`;
        } else {
            document.querySelector('.head-title-cart').style.display = 'block';
            document.querySelector('.form-cart').innerHTML = html.join('');
            document.querySelector('.side-box-group').innerHTML = 
                `<div class="continue-shopping">
                    <div class="continue-shopping--btn">
                        <a href="#">Tiếp tục mua sản phẩm khác</a>
                    </div>
                </div>
                <h3>Ghi chú đơn hàng</h3>
                <div class="checkout-note">
                    <textarea id="box-note" rows="5" placeholder="Ghi chú:"></textarea>
                </div>`;
            document.querySelector('.right-cart .total-price').innerHTML = total_price + '.000đ';
        }
    },

    handleEvent: function() {
        let totalPriceCheckout = Number(document.querySelector('.total-price').textContent.trim().slice(0, -5));
        let productItem = document.querySelectorAll('.cart-product__item');
        for(let i = 0; i < productItem.length; i++) {
            let plusBtn = productItem[i].querySelector('.quantity-select .plus-btn');
            let minusBtn = productItem[i].querySelector('.quantity-select .minus-btn');
            let amount = productItem[i].querySelector('.quantity-select .amount');
            let amountValue = productItem[i].querySelector('.amount').textContent.trim();
            plusBtn.addEventListener('click', function(e) {
                // update quantity
                e.preventDefault();
                amountValue++;
                amount.innerHTML = amountValue;
                // update total price one product
                let priceOneProduct = (productItem[i].querySelector('.price-item span').textContent.trim());
                let totalPrice = amountValue * Number(priceOneProduct.slice(0, -5));
                productItem[i].querySelector('.total-price__item').innerHTML = totalPrice + '.000đ';
                // update total price all product
                totalPriceCheckout += Number(priceOneProduct.slice(0, -5));
                document.querySelector('.total-price').innerHTML = totalPriceCheckout + '.000đ';
            });
            minusBtn.addEventListener('click', function(e) {
                // update quantity
                e.preventDefault();
                if(amountValue > 1) {
                    amountValue--;
                    amount.innerHTML = amountValue;
                    // update total price one product
                    let priceOneProduct = (productItem[i].querySelector('.price-item span').textContent.trim());
                    let totalPrice = amountValue * Number(priceOneProduct.slice(0, -5));
                    productItem[i].querySelector('.total-price__item').innerHTML = totalPrice + '.000đ';
                    // update total price all product
                    totalPriceCheckout -= Number(priceOneProduct.slice(0, -5));
                    document.querySelector('.total-price').innerHTML = totalPriceCheckout + '.000đ';
                }
            });
        }
    },

    start: function() {
        this.render();
        this.handleEvent();
    }
}

app.start();