var saida = "";

        function validador() {
            codigo = $("#codigo").val();
            cliente = $("#cliente").val();
            servico = $("input:radio[name=servico]:checked").val();
            fidelidade = $("input:radio[name=fidelidade]:checked").val();
            if ($("#codigo").val() != "") {
                $("#msg").dialog("open");
                $("#msg").html("Não é permitido colocar um código para o agendamento." + "</br>" +
                                "O codigo é gerado automaticamente."
                              );
                return false;
            }
            else {
                if ($("#cliente").val() == "") {
                    $("#msg").dialog("open");
                    $("#msg").html("Digite o nome do cliente!!!");
                    return false;
                }
                else {
                    if ($("#data").val() == "") {
                        $("#msg").dialog("open");
                        $("#msg").html("Informe a data!!!");
                        return false;
                    }
                    else {
                        if ($("#horario").val() == "") {
                            $("#msg").dialog("open");
                            $("#msg").html("Digite o horário!!!");
                            return false;
                        }
                        else {
                            if ($("#profissional").val() == "") {
                                $("#msg").dialog("open");
                                $("#msg").html("Digite o nome do profissional!!!");
                                return false;
                            }
                            else {
                                if (servico == undefined) {
                                $("#msg").dialog("open");
                                $("#msg").html("Escolha uma opção para serviço!!!");
                                return false;
                            }else{
                                if (fidelidade == undefined){
                                    $("#msg").dialog("open");
                                    $("#msg").html("Escolha uma opção para fidelidade!!!");
                                    return false;    
                                }
                            }
                            }
                        }
                    }
                }
            }
        return true;
    }
        
        function validador2() {
            codigo = $("#codigo").val();
            cliente = $("#cliente").val();
            servico = $("input:radio[name=servico]:checked").val();
            fidelidade = $("input:radio[name=fidelidade]:checked").val();
            q = localStorage.getItem("qtde");
            if ($("#codigo").val() == "") {   
                $("#msg").dialog("open");
                $("#msg").html("Informe um código para pesquisar ou digite um codigo válido!!!");
                return false;            
            }
            return true;
        }
        

        function mostraDados() {
            var data = $('#data').datepicker('getDate');
        }

        function cadastrar(cliente, d, horario, profissional) {
            var cont = 0;
            var mensagem = "";
            var nome = cliente;
            if (localStorage.length != null) {
                var q = parseInt(localStorage.getItem("qtd"));
                for (i = 0; i <= q; i++) {
                    if (localStorage.getItem("nome" + i) == nome) {
                        cont = cont + 1;
                    }
                }
                if (cont == 0) {
                    $("#msg").dialog("open");
                    $("#msg").html("Cliente não cadastrado!!!");
                }
                q = parseInt(localStorage.getItem("qtde"));
                for (i = 1; i <= q; i++) {
                    if (localStorage.getItem("cliente" + i) == cliente && localStorage.getItem("horario" + i) == horario && localStorage.getItem("profissional" + i) == profissional && localStorage.getItem("data" + i) == d) {
                        cont = 2;
                    }
                }
                if (cont == 1) {
                    localStorage.setItem("qtde", 1);
                    if (localStorage.getItem("codigo")) {
                        localStorage.setItem("codigo", Number(localStorage.getItem("codigo")) + 1);
                    }
                    else {
                        var i = 1;
                        localStorage.setItem("codigo", 1);
                    }
                    localStorage.setItem("codigo" + i, Number(localStorage.getItem("codigo")));
                    localStorage.setItem("cliente" + i, $("#cliente").val());
                    localStorage.setItem("data" + i, $("#data").val());
                    localStorage.setItem("horario" + i, $("#horario").val());
                    localStorage.setItem("profissional" + i, $("#profissional").val());
                    localStorage.setItem("servico" + i, $("input[name=servico]:checked").val());
                    localStorage.setItem("fidelidade" + i, $("input[name=fidelidade]:checked").val());
                    $("#msg").dialog("open");
                    $("#msg").html("Dados gravados com sucesso!!!");
                    localStorage.setItem("qtde", i);
                    i++;
                }
                else if (cont == 2) {
                    $("#msg").dialog("open");
                    $("#msg").html("Horário e profissional já agendado!!!");
                }
            }
        }

        function pesquisar(codigo) {
            var flag = 0;
            flag = codigo;
            if (localStorage.length != null) {
                var q=parseInt(localStorage.getItem("qtde"));
                for(i=1; i<=q; i++){
                    if(localStorage.getItem("codigo"+i)==codigo){
                        flag=i;
                    }
                }
                if (flag != 0) {
                    $("#codigo").val(codigo);
                    $("#cliente").val(localStorage.getItem("cliente" + flag));
                    $("#data").val(localStorage.getItem("data" + flag));
                    $("#horario").val(localStorage.getItem("horario" + flag));
                    $("#profissional").val(localStorage.getItem("profissional" + flag));
                }
            }
        }

        function alterar(codigo) {
            var flag = 0;
            flag = codigo;
            if (localStorage.length != null) {
                if (flag != 0) {
                    localStorage.setItem("cliente" + codigo, $("#cliente").val());
                    localStorage.setItem("data" + codigo, $("#data").val());
                    localStorage.setItem("horario" + codigo, $("#horario").val());
                    localStorage.setItem("profissional" + codigo, $("#profissional").val());
                    $("#msg").dialog("open");
                    $("#msg").html("Alterado com Sucesso");
                }
            }
        }

        function excluir(codigo) {
            var flag = 0;
            flag = codigo;
            if (localStorage.length != null) {
                if (flag != 0) {
                    localStorage.removeItem("cliente" + flag);
                    localStorage.removeItem("data" + flag);
                    localStorage.removeItem("horario" + flag);
                    localStorage.removeItem("profissional" + flag);
                    $("#msg").dialog("open");
                    $("#msg").html("Excluido com Sucesso");
                }
            }
        }

        function listar(opcao) {
            var flag = 0
                , valor = 0
                , desconto = 0;
            var saida = ""
                , servico = ""
                , fidelidade = "";
            flag = opcao;
            if (localStorage.length != null) {
                if (flag == "profissional") {
                    var q = parseInt(localStorage.getItem("qtde"));
                    profissional = $("#pesquisa").val();
                    for (i = 1; i <= q; i++) {
                        if (localStorage.getItem("profissional" + i) == profissional) {
                            flag = i;
                            saida += "<b>Profissional:</b> " + profissional + "</br>";
                            saida += "<b>Cliente:</b> " + localStorage.getItem("cliente" + flag) + "</br>";
                            saida += "<b>Data: </b>" + localStorage.getItem("data" + flag) + "</br>";
                            saida += "<b>Horário: </b>" + localStorage.getItem("horario" + flag) + "</br>";
                            saida += "<hr />";
                        }
                    }
                    $("#agendamento").html("<h4>Agendamentos por Profissional</h4>" + saida);
                }
                else {
                    var q = parseInt(localStorage.getItem("qtde"));
                    cliente = $("#pesquisa").val();
                    for (i = 1; i <= q; i++) {
                        if (localStorage.getItem("cliente" + i) == cliente) {
                            flag = i;
                            saida += "<b>Cliente:</b> " + cliente + "</br>";
                            saida += "<b>Profissional:</b> " + localStorage.getItem("profissional" + flag) + "</br>";
                            saida += "<b>Data:</b> " + localStorage.getItem("data" + flag) + "</br>";
                            saida += "<b>Horário:</b> " + localStorage.getItem("horario" + flag) + "</br>";
                            servico = localStorage.getItem("servico" + flag);
                            if (servico == "corte") {
                                valor = 20;
                            }
                            else if (servico == "manicure") {
                                valor = 30;
                            }
                            else {
                                valor = 40;
                            }
                            fidelidade = localStorage.getItem("fidelidade" + flag);
                            if (fidelidade == "sim") {
                                desconto = (valor * 5) / 100;
                                total = valor - desconto;
                            }
                            else {
                                total = valor;
                            }
                            saida += total;
                            saida += "<hr />";
                        }
                    }
                    $("#agendamento").html("<h4>Agendamentos por Cliente</h4>" + saida);
                }
            }
        }

        function osvaldo() {
            var flag = 0
                , soma = 0;
            var servico = ""
                , fidelidade = "";
            var i = 0;
            var saida = "";
            var q = parseInt(localStorage.getItem("qtde"));
            for (i = 1; i <= q; i++) {
                flag = i;
                saida += "<b>Cliente: </b>" + localStorage.getItem("cliente" + flag) + "</br>";
                saida += "<b>Profissional: </b>" + localStorage.getItem("profissional" + flag) + "</br>";
                saida += "<b>Data: </b>" + localStorage.getItem("data" + flag) + "</br>";
                saida += "<b>Horário: </b>" + localStorage.getItem("horario" + flag) + "</br>";
                saida += "<b>Serviço: </b>" + localStorage.getItem("servico" + flag) + "</br>";
                saida += "<b>Fidelidade: </b>" + localStorage.getItem("fidelidade" + flag) + "</br>";
                servico = localStorage.getItem("servico" + flag);
                if (servico == "corte") {
                    valor = 20;
                }
                else if (servico == "manicure") {
                    valor = 30;
                }
                else {
                    valor = 40;
                }
                fidelidade = localStorage.getItem("fidelidade" + flag);
                if (fidelidade == "sim") {
                    desconto = (valor * 5) / 100;
                    total = valor - desconto;
                }
                else {
                    total = valor;
                }
                fidelidade = localStorage.getItem("fidelidade" + flag);
                if (fidelidade == "sim") {
                    desconto = (valor * 5) / 100;
                    total = valor - desconto;
                }
                else {
                    total = valor;
                }
                saida += "<b>Valor: </b>" + total;
                saida += "<hr />";
                soma += total;
            }
            $("#agendamento").html("<h4>Valores Totais</h4>" + saida + "<b>Valor: " + soma);
        }
        $(function () {
            $("#data").datepicker({
                dateFormat: 'dd/mm/yy'
                , monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
                , dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D']
                , onSelect: function () {
                    mostraDados();
                }
            });
            $("#cad").click(function (event) {
                event.preventDefault();
                var cliente = $("#cliente").val();
                var horario = $("#horario").val();
                var data = $('#data').datepicker('getDate');
                var d = $("#data").val();
                var profissional = $("#profissional").val();
                if (validador()==true){
                    cadastrar(cliente,d,horario,profissional);            
                }
            });
            $("#pesquisar").click(function (event) {
                event.preventDefault();
                var codigo = $("#codigo").val();
                if(validador2()==true){
                    pesquisar(codigo);    
                }
            });
            $("#alterar").click(function (event) {
                event.preventDefault();
                var codigo = $("#codigo").val();
                alterar(codigo);
            });
            $("#excluir").click(function (event) {
                event.preventDefault();
                var codigo = $("#codigo").val();
                excluir(codigo);
            });
            $("#listarbutton").click(function () {
                var opcao = $("#opcao").val();
                listar(opcao);
            });
            $("#osvaldo").click(function () {
                osvaldo();
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
            $("#listar").dialog({
                autoOpen: false
                , width: 300
                , buttons: {
                    "Fechar": function () {
                        $(this).dialog("close");
                    }
                }
            });
        });