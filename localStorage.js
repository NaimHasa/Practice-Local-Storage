//------------------ Name filed works -------------------------

document.getElementById('name-send-btn').addEventListener('click', function () {
    const nameInputFiled = document.getElementById('name-text-filed');
    const nameInputFiledText = nameInputFiled.value;
    localStorage.setItem('Name', nameInputFiledText);
    nameInputFiled.value = '';
});


document.getElementById('name-btn-delete').addEventListener('click', function () {
    localStorage.removeItem('Name');
})


//------------------------------Email filed works ------------------------

document.getElementById('email-send-btn').addEventListener('click', function () {
    const emailInputFiled = document.getElementById('email-text-filed')
    const emailFiledText = emailInputFiled.value;
    localStorage.setItem('Email', emailFiledText);

    emailInputFiled.value = '';

})


document.getElementById('email-btn-delete').addEventListener('click', function () {
    localStorage.removeItem('Email');
})


//------------------------ comment section works  ----------------------------------




document.getElementById('commmet-send-btn').addEventListener('click', function () {
    const commentFiled = document.getElementById('comment-text-filed');
    const commentFiledText = commentFiled.value;
    localStorage.setItem('comment', commentFiledText)

    commentFiled.value = '';


})

document.getElementById('comment-delete-btn').addEventListener('click', function () {
    localStorage.removeItem('comment');
})