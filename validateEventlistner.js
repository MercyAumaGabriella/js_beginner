const usrname = document.registration.username;
const password = document.registration.passid;
const userid = document.registration.userid;
const email = document.registration.Email;


//another way to make a callback
const UserID = () => {
    if (userid.value == ""){
        alert('enter user id');
        userid.focus();
        return false;
    }
};

const Username = () => {
    if (usrname.value == ''){
        alert(' Enter a user name');
        usrname.focus();
        return false;
    }
}

const form = document.getElementById('form');
form.addEventlistener('submit', UserID());
form.addEventlistener('submit', Username());