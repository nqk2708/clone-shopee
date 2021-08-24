const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const regisBtn = $('.js-regis')
const regisElement = $('.modal .regis-form')
var isRegis = false

const loginBtn = $('.js-login')
const loginElement = $('.modal .login-form')
var isLogin = false

const switchAuthFormBtns = $$('.auth-form__switch-btn')

const modalElement = $('.modal')
const authForms = $$('.auth-form')
const sortMobileItems = $$('.header__sort-item')
const backModalBtns = $$('.auth-form__control-back')

// click regis/login BTN bật modal
regisBtn.onclick = function () {
    modalElement.classList.add('open')
    regisElement.classList.add('open')
    isRegis = true
}

loginBtn.onclick = function () {
    modalElement.classList.add('open')
    loginElement.classList.add('open')
    isLogin = true
}

// tắt modal
turnOffModal = function () {
    modalElement.classList.remove('open')
    loginElement.classList.remove('open')
    regisElement.classList.remove('open')
    menuBarsElement.classList.remove('open')
    isLogin = isRegis = false
}

for (backModalBtn of backModalBtns) {
    backModalBtn.onclick = turnOffModal
}
modalElement.onclick = turnOffModal

for (authForm of authForms) {
    authForm.onclick = function (e) {
        e.stopPropagation()
    }
}

// Chuyển đổi giữa form Regis/Login
for (switchBtn of switchAuthFormBtns) {
    switchBtn.onclick = function () {
        if (isRegis && !isLogin) {
            regisElement.classList.remove('open')
            loginElement.classList.add('open')
            isRegis = false
            isLogin = true
        }
    
        else if (isLogin && !isRegis) {
            loginElement.classList.remove('open')
            regisElement.classList.add('open')
            isLogin = false
            isRegis = true
        }
    }
}

// Chọn Header options
const selectOptions = $$('.header__select-options-item')
const selectOptionsMobiles = $$('.header__select-options-item-mobile')
const headerSelect = $('.header__select span')
const headerSelectMobile = $('.header__select-mobile span')

Array.from(selectOptions).forEach(function (selectOption) {
    selectOption.onclick = function () {
        if ($('.header__select-options-item.header__select-options-item--checked')) {
            $('.header__select-options-item.header__select-options-item--checked').classList.remove('header__select-options-item--checked')
        }
        selectOption.classList.add('header__select-options-item--checked')
        headerSelect.innerText = selectOption.innerText
    }
})

Array.from(selectOptionsMobiles).forEach(function (selectOptionsMobile) {
    selectOptionsMobile.onclick = function () {
        if ($('.header__select-options-item-mobile.header__select-options-item--checked')) {
            $('.header__select-options-item-mobile.header__select-options-item--checked').classList.remove('header__select-options-item--checked')
        }
        selectOptionsMobile.classList.add('header__select-options-item--checked')
        headerSelectMobile.innerText = selectOptionsMobile.innerText
    }
})

// Chọn danh mục sản phẩm
const categoryItems = $$('.category-item')

Array.from(categoryItems).forEach(function (categoryItem) {
    categoryItem.onclick = function (e) {
        e.preventDefault()
        if ($('.category-item.category-item--active')) {
            $('.category-item.category-item--active').classList.remove('category-item--active')
        }
        categoryItem.classList.add('category-item--active')
    }
})

// Sort / Filter
const btnSorts = $$('.home-filter__btn')

Array.from(btnSorts).forEach(function (btnSort) {
    btnSort.onclick = function (e) {
        e.preventDefault()
        if ($('.home-filter__btn.btn--primary')) {
            $('.home-filter__btn.btn--primary').classList.remove('btn--primary')
        }
        btnSort.classList.add('btn--primary')
    }
})

// Like Product Item
const likeProductElements = $$('.home-product-item__action-like')

Array.from(likeProductElements).forEach(function (likeProductElement) {
    likeProductElement.onclick = function () {
        likeProductElement.classList.toggle('active')
    }
})


// Click trang pagination
const pageItems = $$('.pagination-item')

Array.from(pageItems).forEach(function (pageItem) {
    pageItem.onclick = function (e) {
        e.preventDefault()
        if ($('.pagination-item.pagination-item--active')) {
            $('.pagination-item.pagination-item--active').classList.remove('pagination-item--active')
        }
        pageItem.classList.add('pagination-item--active')
    }
})

// Click Search Btn Mobile
const searchBtnMobile = $('.header__mobile-search-btn')
const searchBarMobileElement = $('.searchbar__main-mobile')

searchBtnMobile.onclick = function () {
    if ($('.header__sort-item.header__sort-item--active')) {
        $('.header__sort-item.header__sort-item--active').classList.remove('header__sort-item--active')
    }
    searchBarMobileElement.classList.toggle('searchbar__main-mobile--active')
}

// Click Menu Bars Btn Mobile
const menuBarsBtnMobile = $('.header__mobile-menu-btn')
const menuBarsElement = $('.menu-bars-contain')

menuBarsBtnMobile.onclick = function () {
    modalElement.classList.add('open')
    menuBarsElement.classList.add('open')
}

// Sort item Mobile click
Array.from(sortMobileItems).forEach(function (sortMobileItem) {  
    sortMobileItem.onclick = function (e) {
        e.preventDefault()
        if ($('.header__sort-item.header__sort-item--active')) {
            $('.header__sort-item.header__sort-item--active').classList.remove('header__sort-item--active')
        }
        sortMobileItem.classList.add('header__sort-item--active')
    }
})