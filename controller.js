var userData = [

    {
        user: 'lcordova',
        pass: '123'
    },
    {
        user: 'user02',
        pass: 'abc'
    }
];

const userIsAuthorized = (user, pass) => {

    let isLogin = false;

    userData.forEach((val, ind) => {

        if (val.user === user && val.pass === pass) {
            isLogin = true;
        }
    });
    return { user, isLogin };
}

module.exports = { userIsAuthorized };