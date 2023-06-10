window.onload = function() {

    initSelectric();
    checkForm();
    addRemoveFav();
    checkFavorites();

}

function initSelectric() {
    let $allSelect = $('select');

    if ($allSelect.length > 0) {
        $allSelect.selectric();
    }
}

function checkForm() {
    let input = document.forms.search.elements.artist;
    let errMsg = document.querySelector('.filters .error-msg');
    let btn = document.querySelector('.filters button');

    if (input) {
        input.addEventListener('input', function() {
            this.value.length > 10 ? errMsg.style.display = 'block' : errMsg.style.display = 'none';
            this.value.length > 10 ? btn.setAttribute('disabled', 'true') : btn.removeAttribute('disabled');
        })
    }
}

function addRemoveFav() {
    let items = document.querySelectorAll('.list .item');

    for (let key of items) {
        let btn = key.querySelector('.js-favorites');

        btn.addEventListener('click', function(){
            if (localStorage.getItem(key.id)) {
                localStorage.removeItem(key.id);
                key.classList.remove('favorite');
                this.querySelector('span').innerText = 'Add';
            } else {
                localStorage.setItem(key.id, true);
                key.classList.add('favorite');
                this.querySelector('span').innerText = 'Remove';
            }
        })
    }
}

function checkFavorites() {
    let items = document.querySelectorAll('.list .item');

    for (let key of items) {
        if (localStorage.getItem(key.id)) {
            key.classList.add('favorite');
            key.querySelector('.js-favorites span').innerText = 'Remove';
        }
    }
}