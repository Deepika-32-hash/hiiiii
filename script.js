const wrapper = document.querySelector('.wapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {wrapper.classList.add('active');

});
loginLink.addEventListener('click', ()=> {wrapper.classList.add('active');
});
    
    document.addEventListener('DOMContentLoaded', function() {
        const loginButton = document.getElementById('loginButton');
        const loginFormWrapper = document.getElementById('loginFormWrapper');
        const closeButton = document.querySelector('.icon-close');

        loginButton.addEventListener('click', function() {
            loginFormWrapper.classList.add('active');
        });

        closeButton.addEventListener('click', function() {
            loginFormWrapper.classList.remove('active');
        });

        window.addEventListener('click', function(event) {
            if (event.target === loginFormWrapper) {
                loginFormWrapper.classList.remove('active');
            }
        });
    });
