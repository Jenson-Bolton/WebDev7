function hide(id) {
    let element = document.getElementById(id);
    element.classList.add('hide');
}

function showForm() {
    let element = document.getElementById('form');
    element.classList.remove('hide')
}