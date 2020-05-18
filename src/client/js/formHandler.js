function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formName = document.getElementById('name').value;
    let formText = document.getElementById('sentiment').value;
    Client.checkForName(formName);
    Client.postData('/sentiment',{name: formName,text: formText})
    .then(res => {
        document.getElementById('results').innerHTML = res.message;
    });
}

export { handleSubmit }
