function test1(form) {
    if (form.text1.value == '') {
        alert('Не залишайте поле пустим!');
    } else {
        alert('Hi, ' + form.text1.value + '! Форму заповнено коректно!');
    }
}
function test2(form) {
    if (form.text2.value == '' || form.text2.value.indexOf('@', 0) == -1) {
        alert('Неправильно введена адреса e-mail!');
    } else {
        alert('OK!');
    }
}
function test3(input) {
    if (isNaN(Number(input))) {
        alert('Номер не коректний.');
    } else {
        alert('Номер коректний!');
    }
}
