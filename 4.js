<!DOCTYPE html>
<html>

<head>
    <title>Página inicial</title>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <script src="js/jquery.min.js"></script>
    <link rel="stylesheet" href="css/css.css" />
    <script src="jsall/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="jsall/jquery-ui.min.css" />
    <title></title>
    <script>
        var saida = "";

        function mostraDados() {
            var data = $('#data').datepicker('getDate');
        }

        function listar(opcao) {
            var flag = 0, valor = 0, desconto = 0;
            var saida = "", servico = "", fidelidade = "";
            flag = opcao;
            if (localStorage.length != null) {
                if (flag == "profissional") {
                    var q = parseInt(localStorage.getItem("qtde"));
                    profissional = $("#pesquisa").val();
                    for (i = 1; i <= q; i++) {
                        if (localStorage.getItem("profissional" + i) == profissional) {
                            flag = i;
                            saida += "<b>Cliente: </b>";
                            saida += localStorage.getItem("cliente" + flag) + "</br>";
                            saida += "<b>Data: </b>";
                            saida += localStorage.getItem("data" + flag) + "</br>";
                            saida += "<b>Horario: </b>";
                            saida += localStorage.getItem("horario" + flag) + "</br>";
                            saida += "<hr />";
                        }
                    }
                    $("#agendamento").html(
                        "<h4>Agendamentos por Profissional</h4>" +
                        saida
                    );
                }
                else {
                    var q = parseInt(localStorage.getItem("qtde"));
                    cliente = $("#pesquisa").val();
                    for (i = 1; i <= q; i++) {
                        if (localStorage.getItem("cliente" + i) == cliente) {
                            flag = i;
                            saida += "<b>Profissional: </b>";
                            saida += localStorage.getItem("profissional" + flag) + "</br>";
                            saida += "<b>Data: </b>";
                            saida += localStorage.getItem("data" + flag) + "</br>";
                            saida += "<b>Horario: </b>";
                            saida += localStorage.getItem("horario" + flag) + "</br>";
                            
                            saida += "<b>Valor do serviço: </b>";
                            servico = localStorage.getItem("servico" + flag);
                            if (servico == "corte"){ 
                                valor = 20; 
                            }else if (servico == "manicure"){ 
                                valor = 30; 
                            }else{ 
                                valor = 40; 
                            }
                            fidelidade = localStorage.getItem("fidelidade" + flag);
                            if (fidelidade == "sim"){
                                desconto = (valor * 5) / 100;
                                total = valor - desconto;
                            }else{
                                total = valor;
                            }
                            saida += total;
                            saida += "<hr />";
                        }
                    }
                    $("#agendamento").html(
                        "<h4>Agendamentos por Cliente</h4>" +
                        saida
                    );
                }
            }
        }
                
                function osvaldo(){
                   var flag = 0, soma = 0;
                   var i = 0;
                   var saida = "";    
                   var q = parseInt(localStorage.getItem("qtde"));    
                   for (i = 1; i <= q; i++){
                       flag = i;
                       saida += "<b>Cliente: </b>";
                       saida += localStorage.getItem("cliente" + flag) + "</br>";
                       saida += "<b>Data: </b>";
                       saida += localStorage.getItem("data" + flag) + "</br>";
                       saida += "<b>Horario: </b>";
                       saida += localStorage.getItem("horario" + flag) + "</br>";
                       saida += "<b>Tipo do serviço: </b>";
                       saida += localStorage.getItem("servico" + flag) + "</br>";
                       saida += "<b>Cartão Fidelidade: </b>";
                       saida += localStorage.getItem("fidelidade" + flag) + "</br>";
                       saida += "<b>Valor do serviço: </b>";
                       servico = localStorage.getItem("servico" + flag);
                       if (servico == "corte"){ 
                           valor = 20; 
                       }else if (servico == "manicure"){ 
                           valor = 30; 
                       }else{ 
                           valor = 40; 
                       }
                       fidelidade = localStorage.getItem("fidelidade" + flag);
                       if (fidelidade == "sim"){
                           desconto = (valor * 5) / 100;
                           total = valor - desconto;
                       }else{
                           total = valor;
                       }
                       fidelidade = localStorage.getItem("fidelidade" + flag);
                       if (fidelidade == "sim"){
                          desconto = (valor * 5) / 100;
                          total = valor - desconto;
                       }else{
                          total = valor;
                       }
                       saida += total;
                       soma += total;  
                       saida += "<hr />";
                   }
                   $("#agendamento").html(
                        "<h4>Todos Agendamentos Cadastrados</h4>" +
                        saida +
                       ("<b>Valor Total: </b>")+ soma
                    );        
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
    </script>
</head>

<body>
    <nav> <a href="index.html">Inicio&nbsp;&nbsp;&nbsp;</a> <a href="2.html">Novo Cadastro&nbsp;&nbsp;&nbsp;</a> <a href="3.html">Agendamento&nbsp;&nbsp;&nbsp;</a><a href="4.html">Listar&nbsp;&nbsp;&nbsp;</a> <a href="5.html">Membros&nbsp;&nbsp;&nbsp;</a></nav>
    <form>
        <div id="agendamento">
            <br> <b>Liste por cliente ou profissional:</b>
            <br>
            <input type="text" id="pesquisa">
            <select id="opcao">
                <option value="profissional">Profissional</option>
                <option value="cliente">Cliente</option> 
            </select>
            <br><br>
            <button type="submit" id="listarbutton">Listar</button>
            <button type="submit" id="osvaldo">Listar Todos</button>
            <div id="msg" title="Sucesso"></div>
        </div>
    </form>
</body>

</html>