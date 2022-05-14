const form = document.querySelector('.login-form');

function onFormSubmit(event) {
    event.preventDefault();

    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') { 
        return alert('Заполните все поля');
    }

    const formData = new FormData(event.currentTarget);
    formData.forEach((email, password) => { 
        console.log(email, password);
    }) 

    event.currentTarget.reset();
    
}

form.addEventListener('submit', onFormSubmit)


