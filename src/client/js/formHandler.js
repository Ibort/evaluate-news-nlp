function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    const formName = document.getElementById('name').value;
    const formText = document.getElementById('sentiment').value;
    const formResult = document.getElementById('results');
    if(isEmpty(formText) || isEmpty(formName)){
      alert('Please fill out the fields');
    }
    else {
      Client.checkForName(formName);
      Client.postData('/sentiment',{name: formName,text: formText})
      .then(res => {
          const result = document.createDocumentFragment();
          for (let [key, value] of Object.entries(res)) {
          const element = document.createElement("span");
          element.innerHTML = `${value}`;
          result.appendChild(element);
          }
          setTimeout(()=> {
            formResult.innerHTML = null;
            formResult.appendChild(result);
          }, 500);
          formResult.classList.add('results-anim');
          setTimeout(()=> formResult.classList.remove('results-anim'), 1000);
      })
      .catch(error => alert('There was a problem with the connection to the server, try again.'))
    }
}

function isEmpty(str){
    return str === null || str.match(/^ *$/) !== null;
}

export { handleSubmit }
