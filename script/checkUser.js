window.onload = function()  {
    let currentUser = JSON.parse(localStorage.getItem('current_user'));
    if(currentUser == null) {
        alert("Bạn chưa đăng nhập!");
        location.href = "./login.html";
    }
}