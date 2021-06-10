// js to store subscription_form data in sheet
const scriptURL1 = 'https://script.google.com/macros/s/AKfycbySx672NRZpXOKH_q9OssH49xgooJEXph8kge_ilUUs3HBxCxXHIHIIFmu6wu0D0JT1/exec'
const form1 = document.forms['subscription_form']
function handler(f) {
    f.stopPropagation();
    f.preventDefault();
}
form1.addEventListener('submit', f => {
    f.preventDefault()
    document.addEventListener("click", handler, true);
    fetch(scriptURL1, { method: 'POST', body: new FormData(form1) })
        .then(response => {
            alert("Thanks for subscribing us!")
            window.location.reload()
        })
        .catch(error => console.error('Error!', error.message))
})


// js to store registration_form data in sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzLK0vZRKyZKQEKEY8d4rMUfQoDzX6yjjWCE_3BC85cdKYEsl4utZvQj9K8p8xS5L78Zw/exec'
const form = document.forms['registration_form']
function handler(e) {
    e.stopPropagation();
    e.preventDefault();
}
form.addEventListener('submit', e => {
    e.preventDefault();
    document.addEventListener("click", handler, true);
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Your Registration was successful!\n\nPlease check your Email ID. You will recieve a confirmation mail within 1-2 minutes.")
            window.location.reload()
        })
        .catch(error => console.error('Error!', error.message))
})

