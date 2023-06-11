document.getElementById('name-send-btn').addEventListener('click', function () {
    const nameInputFiled = document.getElementById('name-text-filed');
    const nameInputFiledText = nameInputFiled.value;
    localStorage.setItem('Name', nameInputFiledText);
    nameInputFiled.value = '';
});

document.getElementById('name-btn-delete').addEventListener('click', function () {
    localStorage.removeItem('Name');
})
