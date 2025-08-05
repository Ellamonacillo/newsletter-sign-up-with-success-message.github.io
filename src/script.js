const form = document.querySelector('#form')
const main = document.getElementById('main')
const submission = document.getElementById('submission')
const email_input = document.querySelector('#email')
const email_error = document.querySelector('#email_error')
const subscriber_email = document.querySelector('#subscriber_email')


function handleSubmit(e) {
    e.preventDefault()

    const field = e.target.querySelector("input")
    const data = { [field.name]: field.value}

    const rules = {
        email: 'required|email'
    }

    const validation = new Validator(data, rules)

    email_error.textContent = ''

    if (validation.fails()) {
        email_error.textContent = 'Valid email required'
        email_input.classList.add('isInvalid')
    }
    else {
        email_error.textContent = ''
        email_input.classList.remove('isInvalid')

        subscriber_email.textContent = data.email
        
        main.classList.toggle('d-none')
        submission.classList.toggle('d-none')
    }
}
form.addEventListener('submit', handleSubmit)


const dismiss = document.getElementById('dismiss')
dismiss.addEventListener('click', () => {
    main.classList.toggle('d-none')
    submission.classList.toggle('d-none')

    form.reset()
    email_error.textContent = ''
    email_input.classList.remove('isInvalid') 
})