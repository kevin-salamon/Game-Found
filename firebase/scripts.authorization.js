//signup auth
const signupForm = document.querySelector("#signup-form");

//submit event, using a call back function
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //using square braket notation[] to access
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;

    // console.log(email ,password);

    // asynchronous task so i'm using .then method
    auth.createUserWithEmailAndPassword(email, password).then(cred => {

        console.log(cred.user);

        const modal = document.querySelectorAll("#modal-signup");

        //reset the form using reset method
        signupForm.reset();

    });

});



