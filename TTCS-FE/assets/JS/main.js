const app = {
    listProduct: [
        {
            pathImg: "./assets/img/Products/product1.png",
            name: "Cây Cam Ngọt Của Tôi",
            vendor: "VERGENCY",
            priceOld: "108.000",
            priceNew: "86.000đ",
            saleOff: "-20%",
            listSlideImg: [
                "./assets/img/SliderQuickView/image1.png",
                "./assets/img/SliderQuickView/image2.png",
                "./assets/img/SliderQuickView/image3.png",
                "./assets/img/SliderQuickView/image4.png",
                "./assets/img/SliderQuickView/image5.png",
                "./assets/img/SliderQuickView/image6.png",
                "./assets/img/SliderQuickView/image7.png"
            ],
        },
        {
            pathImg: "./assets/img/Products/product2.png",
            name: "Chainsaw Man - Tập 11 - Tặng Kèm Lót Ly + Card PVC",
            vendor: "VERGENCY",
            priceOld: "420.000đ",
            priceNew: "59.000đ",
            saleOff: "-86%",
            listSlideImg: [
                "./assets/img/SliderQuickView/image1.png",
                "./assets/img/SliderQuickView/image2.png",
                "./assets/img/SliderQuickView/image3.png",
                "./assets/img/SliderQuickView/image4.png",
                "./assets/img/SliderQuickView/image5.png",
                "./assets/img/SliderQuickView/image6.png",
                "./assets/img/SliderQuickView/image7.png"
            ],
        },
        {
            pathImg: "./assets/img/Products/product3.png",
            name: "Nuôi Dạy Bé Trai Từ 0 - 6 Tuổi (Tái Bản 2021)",
            vendor: "VERGENCY",
            priceOld: "420.000đ",
            priceNew: "59.000đ",
            saleOff: "-86%",
            listSlideImg: [
                "./assets/img/SliderQuickView/image1.png",
                "./assets/img/SliderQuickView/image2.png",
                "./assets/img/SliderQuickView/image3.png",
                "./assets/img/SliderQuickView/image4.png",
                "./assets/img/SliderQuickView/image5.png",
                "./assets/img/SliderQuickView/image6.png",
                "./assets/img/SliderQuickView/image7.png"
            ],
        },
        {
            pathImg: "./assets/img/Products/product4.png",
            name: "Thay Đổi Cuộc Sống Với Nhân Số Học",
            vendor: "VERGENCY",
            priceOld: "420.000đ",
            priceNew: "59.000đ",
            saleOff: "-86%",
            listSlideImg: [
                "./assets/img/SliderQuickView/image1.png",
                "./assets/img/SliderQuickView/image2.png",
                "./assets/img/SliderQuickView/image3.png",
                "./assets/img/SliderQuickView/image4.png",
                "./assets/img/SliderQuickView/image5.png",
                "./assets/img/SliderQuickView/image6.png",
                "./assets/img/SliderQuickView/image7.png"
            ],
        },
        {
            pathImg: "./assets/img/Products/product5.png",
            name: "Người Bán Hàng Vĩ Đại Nhất Thế Giới",
            vendor: "VERGENCY",
            priceOld: "420.000đ",
            priceNew: "59.000đ",
            saleOff: "-86%",
            listSlideImg: [
                "./assets/img/SliderQuickView/image1.png",
                "./assets/img/SliderQuickView/image2.png",
                "./assets/img/SliderQuickView/image3.png",
                "./assets/img/SliderQuickView/image4.png",
                "./assets/img/SliderQuickView/image5.png",
                "./assets/img/SliderQuickView/image6.png",
                "./assets/img/SliderQuickView/image7.png"
            ],
        },
        {
            pathImg: "./assets/img/Products/product6.png",
            name: "Vẻ Đẹp Của Sự Cô Đơn - Tặng Kèm Bookmark",
            vendor: "VERGENCY",
            priceOld: "420.000đ",
            priceNew: "59.000đ",
            saleOff: "-86%",
            listSlideImg: [
                "./assets/img/SliderQuickView/image1.png",
                "./assets/img/SliderQuickView/image2.png",
                "./assets/img/SliderQuickView/image3.png",
                "./assets/img/SliderQuickView/image4.png",
                "./assets/img/SliderQuickView/image5.png",
                "./assets/img/SliderQuickView/image6.png",
                "./assets/img/SliderQuickView/image7.png"
            ],
        },
        {
            pathImg: "./assets/img/Products/product7.png",
            name: "BTS & A.R.M.Y Thời Khắc Tươi Đẹp Nhất Chúng Ta Có Nhau (Tái Bản)",
            vendor: "VERGENCY",
            priceOld: "420.000đ",
            priceNew: "59.000đ",
            saleOff: "-86%",
            listSlideImg: [
                "./assets/img/SliderQuickView/image1.png",
                "./assets/img/SliderQuickView/image2.png",
                "./assets/img/SliderQuickView/image3.png",
                "./assets/img/SliderQuickView/image4.png",
                "./assets/img/SliderQuickView/image5.png",
                "./assets/img/SliderQuickView/image6.png",
                "./assets/img/SliderQuickView/image7.png"
            ],
        },
        {
            pathImg: "./assets/img/Products/product8.png",
            name: "BLACKPINK - Hãy Mơ Lớn Khi Còn Có Thể - Bản Đặc Biệt - Tặng Kèm Card Bo Góc Nhựa 2 Mặt Kích Thước 7x10cm",
            vendor: "VERGENCY",
            priceOld: "420.000đ",
            priceNew: "59.000đ",
            saleOff: "-86%",
            listSlideImg: [
                "./assets/img/SliderQuickView/image1.png",
                "./assets/img/SliderQuickView/image2.png",
                "./assets/img/SliderQuickView/image3.png",
                "./assets/img/SliderQuickView/image4.png",
                "./assets/img/SliderQuickView/image5.png",
                "./assets/img/SliderQuickView/image6.png",
                "./assets/img/SliderQuickView/image7.png"
            ],
        },
    ],

    render: function () {
        const html = this.listProduct.map((product, index) => {
            return `
                <div class="col l-3 m-4 c-6">
                    <div class="product-information">
                        <a href="#" class="product-item">
                            <div class="product-item__img" style="background-image: url(${product.pathImg});"></div>
                            <h4 class="product-item__name">${product.name}</h4>
                            <p class="product-item__vendor">${product.vendor}</p>
                            <div class="product-item__review">
                                <span class="rating">
                                    <i class="star-yellow fa-solid fa-star"></i>
                                    <i class="star-yellow fa-solid fa-star"></i>
                                    <i class="star-yellow fa-solid fa-star"></i>
                                    <i class="star-yellow fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </div>
                            <div class="product-item__price">
                                <span class="price-old">${product.priceOld}</span>
                                <span class="price-new">${product.priceNew}</span>
                            </div>
                            <div class="product-item__sale-off">${product.saleOff}</div>
                        </a>
                        <div class="product-item__quick-view">
                            <a class="quick-view--btn" onclick="showQuickView()">Xem nhanh</a>
                        </div>
                    </div>
                </div>
            `;
        });
        function showQuickView() {
            console.log("1");
        }
        const shopHtml = this.listProduct.map((product) => {
            return `
                <div class="col l-4 m-6 c-6">
                    <div class="product-information">
                        <a href="#" class="product-item">
                            <div class="product-item__img" style="background-image: url(${product.pathImg});"></div>
                            <h4 class="product-item__name">${product.name}</h4>
                            <p class="product-item__vendor">${product.vendor}</p>
                            <div class="product-item__review">
                                <span class="rating">
                                    <i class="star-yellow fa-solid fa-star"></i>
                                    <i class="star-yellow fa-solid fa-star"></i>
                                    <i class="star-yellow fa-solid fa-star"></i>
                                    <i class="star-yellow fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </div>
                            <div class="product-item__price">
                                <span class="price-old">${product.priceOld}</span>
                                <span class="price-new">${product.priceNew}</span>
                            </div>
                            <div class="product-item__sale-off">${product.saleOff}</div>
                        </a>
                        <div class="product-item__quick-view">
                            <a class="quick-view--btn">Xem nhanh</a>
                        </div>
                    </div>
                </div>
            `;
        });
        if (document.querySelector(".product .product-list")) {
            document.querySelector(".product .product-list").innerHTML = html.join("");
        }
        if (document.querySelector(".product .best-saller")) {
            document.querySelector(".product .best-saller").innerHTML = html.join("");
        }
        if (document.querySelector(".shop-product")) {
            document.querySelector(".product .shop-product").innerHTML = shopHtml.join("");
        }
    },

    handleEvents: function () {
        let quickViewBtn = document.querySelectorAll(".product-item__quick-view .quick-view--btn");
        let modal = document.querySelector(".modal");
        let modalContent = document.querySelector(".modal__content");
        let closeQuickViewBtn = document.querySelector(".quick-view__close-btn");
        let amount = document.querySelector(".amount");
        let plusBtn = document.querySelector(".plus-btn");
        let minusBtn = document.querySelector(".minus-btn");
        let amountValue = 0;

        function getParent(element, selector) {
            while (element.parentElement) {
                if (element.parentElement.matches(selector)) {
                    return element.parentElement;
                }
                element = element.parentElement;
            }
        }

        for (var i = 0; i < quickViewBtn.length; i++) {
            quickViewBtn[i].addEventListener("click", function () {
                modal.classList.add("open");
                let productItem = getParent(this, ".product-information");
                let img = productItem.querySelector(".product-item__img");
                // get background image url
                let bgImage = getComputedStyle(img).getPropertyValue("background-image").slice(4, -1).replace(/"/g, "");
                modal.querySelector(".quick-view__img img").setAttribute("src", bgImage);
                let listImg = modal.querySelectorAll(".slider-product__item");

                for (var i = 0; i < app.listProduct.length; i++) {
                    if (productItem.querySelector(".product-item__name").innerText === app.listProduct[i].name) {
                        console.log(app.listProduct[i].name);
                        for (var j = 0; j < listImg.length; j++) {
                            listImg[j].querySelector("img").src = app.listProduct[i].listSlideImg[j];
                        }
                    }
                }

                modal.querySelector(".quick-view__title h2").innerHTML =
                    productItem.querySelector(".product-item__name").innerText;
                modal.querySelector(".quick-view__price .price-new").innerHTML = productItem.querySelector(
                    ".product-item__price .price-new"
                ).innerText;
                modal.querySelector(".quick-view__price .price-old").innerHTML = productItem.querySelector(
                    ".product-item__price .price-old"
                ).innerText;
            });
        }
        function hideQuickView() {
            modal.classList.remove("open");
        }
        closeQuickViewBtn.onclick = hideQuickView;
        modal.addEventListener("click", hideQuickView);
        modalContent.addEventListener("click", function (e) {
            e.stopPropagation();
        });
        plusBtn.addEventListener("click", function () {
            amountValue++;
            amount.innerText = amountValue;
        });

        minusBtn.addEventListener("click", function () {
            if (amountValue > 0) amountValue--;
            amount.innerText = amountValue;
        });
    },

    start: function () {
        this.render();
        this.handleEvents();
    },
};

app.start();
