var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
  
    //Pegando Valores do formulario
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var altura = form.altura.value;
    var peso = form.peso.value;
    var gordura = form.gordura.value;
    //fim
    //Criando Tr
    var pacienteTr = document.createElement("tr");
    //fim
    //criando Td
    var nomeTd = document.createElement("td");
    var alturaTd = document.createElement("td"); 
    var pesoTd = document.createElement("td"); 
    var gorduraTd = document.createElement("td"); 
    var imcTd = document.createElement("td"); 
    //fim
    
    nomeTd.textContent = nome;
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;
    
    //colocando um elemento dentro de outro com appendChild
    nome
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);   
});
