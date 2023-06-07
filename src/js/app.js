window.onload = function() {

    initSelectric();
    checkForm();

}

function initSelectric() {
    let $allSelect = $('select');

    if ($allSelect.length > 0) {
        $allSelect.selectric();
    }
}

function checkForm() {
    let input = document.forms.search.elements.artist;
    let errMsg = document.querySelector('.filters .error-mgs');
    let btn = document.querySelector('.filters button');

    if (input) {
        input.addEventListener('input', function() {
            this.value.length > 10 ? errMsg.style.display = 'block' : errMsg.style.display = 'none';
            this.value.length > 10 ? btn.setAttribute('disabled', 'true') : btn.removeAttribute('disabled');
        })
    }
}