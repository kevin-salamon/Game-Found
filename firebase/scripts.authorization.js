//Part1)signup auth
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



//Part2) using the ID= logout to set the constent logout
const logout = document.querySelector("#logout")

//a click event listener, taking the event object by default,using it in the arrow function 
logout.addEventListener('click', (e) => {
    e.preventDefault();

    //we use the sign out method using the auth object 
    auth.signOut().then(() => {
        console.log("user signed out");

    });

});


//Part 3)using ID=login-form
const loginForm = document.querySelector("#login-form")

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //grab the info from the form
    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {

        console.log(cred.user);

        const modal = document.querySelector("#modal-login");

        loginForm.reset();

    })

});



