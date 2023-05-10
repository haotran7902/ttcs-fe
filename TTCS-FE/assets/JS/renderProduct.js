const pathAPI = "http://localhost:8080/btlweb/product";
// const pathAPI = "https://api.escuelajs.co/api/v1/products";

async function getProduct() {
    let option = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            origin: 'http://127.0.0.1:5500/'
        },
    };
    let data = await fetch(pathAPI, option);
    let response = await data.json();
    console.log({ response });

    const product_html = await response.map((product) => {
        console.log(product.thumbnail);
        return `
            <div class="col l-3 m-4 c-6">
                <div class="product-information">
                    <a href="#" class="product-item">
                        <div class="product-item__img" style="background-image: url(http://localhost:8080${product.thumbnail});"></div>
                        <h4 class="product-item__name">${product.title}</h4>
                        <p class="product-item__vendor">Vergency</p>
                        <div class="product-item__review">
                            <span class="rating">
                                <i class="star-yellow fa-solid fa-star"></i>
                                <i class="star-yellow fa-solid fa-star"></i>
                                <i class="star-yellow fa-solid fa-star"></i>
                                <i class="star-yellow fa-solid fa-star"></i>
                                <i class="star-yellow fa-solid fa-star"></i>
                            </span>
                        </div>
                        <div class="product-item__price">
                            <span class="price-old">${product.price}$</span>
                            <span class="price-new">${product.price * 0.5}$</span>
                        </div>
                        <div class="product-item__sale-off">50%</div>
                    </a>
                    <div class="product-item__quick-view">
                        <a 
                            class="quick-view--btn" 
                            onclick='showQuickView(${JSON.stringify(product)})'
                        >
                            Xem nhanh
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
    document.querySelector(".product .product-list").innerHTML = await product_html.join("");
    document.querySelector(".product .best-saller").innerHTML = await product_html.join("");
}

function showQuickView(product) {
    console.log(product);
    let modal = document.querySelector(".modal");
    let modalContent = document.querySelector(".modal__content");
    let closeQuickViewBtn = document.querySelector(".quick-view__close-btn");
    let amount = document.querySelector(".amount");
    let plusBtn = document.querySelector(".plus-btn");
    let minusBtn = document.querySelector(".minus-btn");
    let amountValue = 0;

    modal.classList.add("open");

    closeQuickViewBtn.onclick = () => {
        hideQuickView();
    };
    modal.onclick = () => {
        hideQuickView();
    };
    modalContent.onclick = (e) => {
        e.stopPropagation();
    };

    plusBtn.addEventListener("click", function () {
        amountValue++;
        amount.innerText = amountValue;
    });

    minusBtn.addEventListener("click", function () {
        if (amountValue > 0) amountValue--;
        amount.innerText = amountValue;
    });

    // modal.querySelector(".quick-view__img img").setAttribute("src", img);
    // modal.querySelector(".quick-view__title").innerHTML = name;
    modal.querySelector(".price-new").innerHTML = product.price + "$";
    modal.querySelector(".price-old").innerHTML = product.price + "$";

    let addToCartBtn = document.querySelector(".modal .quick-view__add-cart span");
    addToCartBtn.onclick = () => {
        console.log("add to cart");
    };
}

function hideQuickView() {
    let modal = document.querySelector(".modal");
    modal.classList.remove("open");
}

function handleEvent() {}

function start() {
    getProduct();
    handleEvent();
}

start();

// let cart = [];
// const addToCart = async (id) => {
//     let storage = localStorage.getItem("cart");
//     if(storage) {
//         cart = JSON.parse(storage);
//     }
//     let product = await get
// };
