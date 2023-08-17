function menu() {

    opcao = parseInt(prompt(
        "------Menu Principal------\n\n"+
        "1 - Cadastro de Moto \n" +  /* Fabricante, modelo, ano modelo e cor */
        "2 - Cadastro de Ficha Técnica \n" + /* Tipo de combústivel, cilindradas, cavalos, potência do motor */
        "3 - Sair do Sistema"
    
        ));
    
    /* "switch" é usado para enumerar as opções dentro do menu, para que o usuário escolha a opção que desejar executar. Para classificar as opções é usado "case"*/
        switch (opcao) {
            case 1:
                cadastrar_moto();
                break;
            case 2:
                cadastrar_ficha_tecnica();
                break;
            
            
        default:
            alert("Finalizando o Sistema de Cadastro");
            document.getElementById("relatorio").innerHTML = "<p>Obrigado!!!</p>"        
             
        }
    
    };
    
    /* FUNCAO CADASTRAR MOTO */
    
    function cadastrar_moto(){
        let x = "n";
        relatorio = "*- Relatório de Motos -* <br><br> "
    
    
        while(x.toUpperCase() !="S"){
            marca = prompt("Digite a Marca da Moto");
            modelo = prompt("Digite o Modelo da Moto");
            ano = parseInt(prompt("Digite o Ano Modelo"));
            cor = prompt("Digite a Cor da Moto");
    
            relatorio = relatorio +  "MARCA: " + marca.toUpperCase() + "<br>" + 
                                     "MODELO: " + modelo.toUpperCase() + "<br>"+
                                     "ANO MODELO: " + ano + "<br>" 
        
        confirme = prompt("Finalizar Cadastro S - para sim ou N - para não")
        
        if(confirme.toUpperCase() == "S"){
            x = "S";
        };
    
    document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>";
    
    
    
    
        }
    }


    function cadastrar_ficha_tecnica(){
        let x = "n";
        relatorio = "*- Relatório de Motos -* <br><br> "
    
    
        while(x.toUpperCase() !="S"){
            combustivel = prompt("Digite o Tipo de Combustível");
            cilindradas = parseInt(prompt("Digite as Cilindradas da Moto"));
            cv = parseInt(prompt("Digite o CV da Moto"));
            potencia = parseInt(prompt("Digite a Potência do Motor"));
    
            relatorio = relatorio +  "COMBUSTÍVEL: " + combustivel.toUpperCase() + "<br>" + 
                                     "CILINDRADAS : " + cilindradas + "<br>"+
                                     "CV: " + cv + "<br>" + 
                                     "POTÊNCIA: " + potencia + "<br>" 
                                    
        
        confirme = prompt("Finalizar Cadastro S - para sim ou N - para não")
        
        if(confirme.toUpperCase() == "S"){
            x = "S";
        };
    
    document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>";
    
    
    
    
        }
    }