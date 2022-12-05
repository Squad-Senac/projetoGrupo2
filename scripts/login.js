function logar(){
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if(login == "admin" && senha == "admin"){
        alert("Acesso permitido");
        location.href = "index.html";
    }
    else{
        alert("Usuário ou Senha incorretos!")
    }
}