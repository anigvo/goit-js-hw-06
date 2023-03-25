const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (!email.value || !password.value) {
        alert(`ALARM! Заповни усі поля!`);
        return;
    }
        const data = {
            email: email.value,
            password: password.value,
        };
        console.log(data);
        form.reset()
    }
