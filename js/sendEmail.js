const btn = document.getElementById('submitEmail');

document.getElementById('contactForm')
 .addEventListener('submit', function(event) {
    event.preventDefault();
    const serviceID = 'default_service';
    const templateID = 'template_xlgdz68';

    const submitLoader = $('.submit-loader');
    const messageWarning = $('.message-warning');
    const messageSuccess = $('.message-success');
    const contactForm = $('#contactForm');
    submitLoader.slideDown("slow");

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        submitLoader.slideUp("slow") ;
        messageWarning.fadeOut();
        contactForm.fadeOut();
        messageSuccess.fadeIn();
        //alert('Sent!');
    }, (err) => {
        submitLoader.slideUp("slow") ;
        messageWarning.html("Something went wrong. Please try again later.") ;
        messageWarning.slideDown("slow") ;
        //alert(JSON.stringify(err));
    });
});