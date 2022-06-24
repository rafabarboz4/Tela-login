
function login(){
    var usuario_input = document.getElementById('idUsuario').value;
    var password_input = document.getElementById('idPassword').value;

    var usuario = "admin";
    var password = "admin";

    if(usuario_input == usuario && password_input == password){
        window.alert("Acertou !");
        //location.href("##"); caso queira mandar para alguma página.

    }else{
        window.alert("Errou !");
    }
}