if (localStorage.getItem('Authorization') === null || localStorage.getItem('Authorization') === undefined) {
    document.location.href = 'index.html';
}

const logout = () => {
    localStorage.removeItem('Authorization');
    document.location.href = 'index.html';
};

$(document).ready(function() {
    $("#btnLogout").click(logout);
});