const form = document.querySelector('.login-form');

function onFormSubmit(event) {
    event.preventDefault();

    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
        return alert('Заполните все поля');
    }
    const formData = {
            email: event.currentTarget.elements.email.value,
            password: event.currentTarget.elements.password.value,
        }

        console.log(formData)
        event.currentTarget.reset();
}

form.addEventListener('submit', onFormSubmit)


