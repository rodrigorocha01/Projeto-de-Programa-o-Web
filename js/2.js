$(function () {
            $("#btnNovoCad").click(function (event) {
                event.preventDefault();
                nome = $("#nome").val();
                endereco = $("#endereco").val();
                logradouro = $("#logradouro").val();
                numero = $("#numero").val();
                cidade = $("#cidade").val();
                cep = $("#cep").val();
                telefone = $("#telfixo").val();
                celular = $("#telcel").val();
                if (validador3()==true){
                    cadastrarUsuario(nome, endereco, logradouro, numero, cidade, cep, telefone, celular);            
                }
            });
            
             $("#msg").dialog({
                autoOpen: false
                , width: 300
                , buttons: {
                    "Fechar": function () {
                        $(this).dialog("close");
                    }
                }
            });
            
            function validador3() {
            nome = $("#nome").val();
            endereco = $("#endereco").val();
            logradouro = $("#nome").val();
            numero = $("#nome").val();
            cidade = $("#nome").val();
            cep = $("#cliente").val();
            telfixo = $("#cliente").val();
            telcel = $("#cliente").val();
                
                if ($("#nome").val() == "") {
                    $("#msg").dialog("open");
                    $("#msg").html("Digite o nome do cliente!!!");
                    return false;
                }
                else {
                    if ($("#endereco").val() == "") {
                        $("#msg").dialog("open");
                        $("#msg").html("Digite o endereço!!!");
                        return false;
                    }
                    else {
                        if ($("#logradouro").val() == "") {
                            $("#msg").dialog("open");
                            $("#msg").html("Digite o logradouro!!!");
                            return false;
                        }
                        else {
                             if($("#numero").val() == "") {
                                $("#msg").dialog("open");
                                $("#msg").html("Digite o número!!!");
                                return false;
                            }
                            else {
                               if($("#cidade").val() == "") {
                                $("#msg").dialog("open");
                                $("#msg").html("Digite o nome da cidade!!!");
                                return false; 
                            }else{
                               if($("#cep").val() == "") {
                                $("#msg").dialog("open");
                                $("#msg").html("Digite o CEP!!!");
                                return false; 
                            }else{
                              if($("#telfixo").val() == "") {
                                $("#msg").dialog("open");
                                $("#msg").html("Digite o telefone!!!");
                                return false;   
                            }else{
                                if($("#telcel").val() == "") {
                                $("#msg").dialog("open");
                                $("#msg").html("Digite o celular!!!");
                                return false; 
                            }
                            }
                        }
                    }
                }
            }
                    }
                }
            
        return true;
    }
                    

            function cadastrarUsuario(nome, endereco, logradouro, numero, cidade, cep, telefone, celular) {
                var flag = 0;
                var u= 0;
                if (localStorage.length > 0) {
                    u = parseInt(localStorage.getItem("qtd")) + 1;
                }
                else {
                    localStorage.setItem("qtd", 1);
                     u = 1;
                }
                
                localStorage.setItem("nome" + u, $("#nome").val());
                localStorage.setItem("endereco" + u, $("#endereco").val());
                localStorage.setItem("logradouro" + u, $("#logradouro").val());
                localStorage.setItem("numero" + u, $("#numero").val());
                localStorage.setItem("cidade" + u, $("#cidade").val());
                localStorage.setItem("cep" +u, $("#cep").val());
                localStorage.setItem("telefone" + u, $("#telfixo").val());
                localStorage.setItem("celular" +u, $("#telcel").val());
                $("#msg").dialog("open");
                $("#msg").html("Cadastrado com Sucesso");
                localStorage.setItem("qtd", u);
                u++;
                
                
            }
            
               
        })