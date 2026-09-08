"use strict"

import * as usefulFunctions from "./components/functions.js"; // Полезные функции
import quantity from './forms/quantity.js' // input number
import fileField from './forms/file-field.js' // Select
import Nav from './components/nav.js';  // Мобильное меню
import collapse from './components/collapse.js'; // Сворачиваемые блоки
import tabs from './components/tabs.js'; // Tabs
import Rating from './components/rating.js'; // Rating plugin
import Spoilers from "./components/spoilers.js";
import Dropdown from "./components/dropdown.js";
import FooterNav from "./components/footer-nav.js";
import Select from './components/select.js' // Select
import Header from './components/header.js' // Header
import customSelect from './components/customSelect.js' // Select
import Choices from 'choices.js'; // Select plugin
import { Fancybox } from "@fancyapps/ui"; // Fancybox modal gallery

// Проверка поддержки webp
usefulFunctions.isWebp();

// Добавление класса после загрузки страницы
usefulFunctions.addLoadedClass();

// Добавление класса touch для мобильных
usefulFunctions.addTouchClass()

// Mobile 100vh
usefulFunctions.fullVHfix();

// Плавный скролл
usefulFunctions.SmoothScroll('[data-anchor]')

// Вкладки (tabs)
tabs();

// Сворачиваемые блоки
collapse();

// input Number
quantity()

// Меню
Nav();

// Spoilers
Spoilers();

// Dropdown
Dropdown();

// Rating
Rating();

// Select Dropdown
Select()

fileField()

FooterNav()

Header()

// Select Dropdown
customSelect()

// Custom Select
document.querySelectorAll('.pretty-select').forEach(el => {
    const prettySelect = new Choices(el,{
        allowHTML: true,
        searchEnabled: false
    });
});


// Modal Fancybox
Fancybox.bind("[data-fancybox]", {
    autoFocus: false
});

// Маска для ввода номера телефона
import "./components/input-mask.js";

/* Модуль работы с ползунком */
/* Документация плагина: https://refreshless.com/nouislider/ */
import "./forms/range.js";


// Sliders
import "./components/sliders.js";

// Favorites
document.addEventListener('click', (event) => {
    if (event.target.closest('[data-add-favorite]')) {
        event.target.closest('[data-add-favorite]').classList.toggle('added-favorite')
    }
})

// Cart
document.addEventListener('click', (event) => {
    if (event.target.closest('[data-cart-open]')) {
        event.preventDefault()
        document.body.classList.add('side-cart-open')
    }
})

document.addEventListener('click', (event) => {
    if (event.target.closest('[data-cart-close]')) {
        event.preventDefault()
        document.body.classList.remove('side-cart-open')
    }
})

// Product Card
document.addEventListener('click', (event) => {
    if (event.target.closest('[data-card-open]')) {
        event.preventDefault()
        document.body.classList.add('product-card-open')
    }
})

document.addEventListener('click', (event) => {
    if (event.target.closest('[data-card-close]')) {
        event.preventDefault()
        document.body.classList.remove('product-card-open')
    }
})


// filter
document.addEventListener('click', (event) => {
    if (event.target.closest('[data-filter-toggle]')) {
        document.body.classList.toggle('filter-open')
    }
})

const Purchase = () => {

    if (document.querySelectorAll('[data-purchase]').length > 0) {

        document.addEventListener('click',  (event) => {

            if(event.target.closest('[data-purchase-add]')) {
                event.preventDefault()
                event.target.closest('[data-purchase]').classList.add('added')
                event.target.closest('[data-purchase]').querySelector('[data-purchase-quantity]').value = 1
            }

            if(event.target.closest('[data-purchase-change]')) {
                event.preventDefault()
                const itemPurchase = event.target.closest('[data-purchase]')
                const itemPurchaseInput = itemPurchase.querySelector('[data-purchase-quantity]')
                const itemPurchaseMin = itemPurchaseInput.min
                const itemPurchaseMax = itemPurchaseInput.max
                const itemPurchaseDirection = event.target.closest('[data-purchase-change]').dataset.purchaseChange
                let itemPurchaseValue = 0;

                if(itemPurchaseDirection === 'minus') {
                    itemPurchaseValue = parseInt(itemPurchaseInput.value) - 1
                }
                else {
                    itemPurchaseValue = parseInt(itemPurchaseInput.value) + 1
                }
                if (itemPurchaseValue > 0) {
                    itemPurchase.classList.add('added')
                }
                else {
                    itemPurchaseValue = 0
                    itemPurchase.classList.remove('added')
                }
                itemPurchaseInput.value = itemPurchaseValue
            }
        })

        document.querySelectorAll('[data-purchase]').forEach(elem => {

            if (elem.querySelector('[data-purchase-quantity]').value > 0) {
                elem.classList.add('added')
            }

            elem.querySelector('[data-purchase-quantity]').addEventListener('change', (el) => {
                let item = el.target.closest('[data-purchase]')

                let val = parseInt(el.target.value)

                if (val > 0) {
                    el.target.value = val
                    item.classList.add('added')
                }
                else {
                    el.target.value = 0
                    item.classList.remove('added')
                }
            })
        });
    }
}
Purchase()

const Gallery = () => {

    if (document.querySelectorAll('[data-gallery]').length > 0) {
        const THUMBS = document.querySelectorAll('[data-gallery-thumb]')
        const IMAGES = document.querySelectorAll('[data-gallery-image]')

        THUMBS.forEach(elem => {

            elem.addEventListener('mouseenter', (event) => {

                let path = event.target.dataset.galleryThumb
                IMAGES.forEach(elem => {
                    elem.classList.remove('active');
                });
                document.querySelector(`[data-gallery-image="${path}"]`).classList.add('active');
            })

            elem.addEventListener('mouseleave', (e) => {

            })
        })
    }
}

Gallery()

if (document.querySelector('[data-page-bar-old]')) {

}

const PageBar = () => {

    if (document.querySelector('[data-page-bar]')) {
        window.addEventListener('scroll', function() {
            const PAGE_BAR = document.querySelector('[data-page-bar]')
            const PAGE_BAR_LABEL = document.querySelector('[data-catalog]')

            let isScrollStatus = document.body.classList.contains('header-scroll');
            let offsetPosition = PAGE_BAR_LABEL.offsetTop - 65

            console.log(offsetPosition)

            if (document.documentElement.scrollTop > offsetPosition) {
                PAGE_BAR.classList.add('fixed');
            } else {
                PAGE_BAR.classList.remove('fixed');
            }
        });
    }
}


PageBar()


