$(document).ready(function() {
    $('#btnAccess').click(function() { validateCredentials(); });
});

const validateCredentials = () => {
    const userForm = $('#inputUser').val();
    const passwordForm = $('#inputPassword').val();
    $.ajax({
        url : 'http://localhost:3000/v1/login',
        method: 'POST',
        data: { 
            user : userForm,
            password: passwordForm
        },
        success: (res) => {
            if (res.isLogin === true) {
                generateKeys('Authorization', res.user);
                document.location.href = 'authorized.html';
            }
        },
        error: (err) => {
            console.log(err);
            console.log('Error en el SERVER, intentelo nuevamente.');
        }
    });
};

function generateKeys(key, value) {
    localStorage.setItem(key, value);
}