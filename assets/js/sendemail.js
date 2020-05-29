function sendMail (contactForm){
        emailjs.send("gmail","emal", {
            "from_name" : contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "contact_form": contactForm.projectsummary.value
        })
        .then (
            function(response){
                console.log("SUCCESS", response);
            },
            function(error){
                console.log("FAILED", error);
            }
        )
        return false;
}