function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");

}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
} //end if.
else {
    //Quando o CEP não é encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {


var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    
    var validacep = /^[0-9]{8}$/;

    //Valida o CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";
    
        
        var script = document.createElement('script');

        
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        
        document.body.appendChild(script);

    } 
    else {
        
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} 
else {
    
    limpa_formulário_cep();
}
};

function cadastro(){
    
    alert("Você foi Cadastrado(a)!");

}
