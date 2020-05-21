function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    const formName = document.getElementById('name').value;
    const formText = document.getElementById('sentiment').value;
    const formResult = document.getElementById('results');
    Client.checkForName(formName);
    Client.postData('/sentiment',{name: formName,text: formText})
    .then(res => {
        setTimeout(()=> formResult.innerHTML = res.message, 500);
        formResult.classList.add('results-anim');
        setTimeout(()=> formResult.classList.remove('results-anim'), 1000);
    });
}

export { handleSubmit }
