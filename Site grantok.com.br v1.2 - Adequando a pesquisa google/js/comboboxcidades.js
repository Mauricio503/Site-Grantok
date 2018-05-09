$(document).ready(function () {

        var cidadesfelix = ["Anchieta","Águas de Chapecó","Águas Frias","Barra Bonita","Bandeirante","Barracao","Belmonte","Bom Jesus do Oeste","Caibi","Campo Erê",
        "Caxambu do Sul","Cunha Porã","Cunhataí","Descanso","Dionisio Cerqueira","Flor da Serra do Sul","Flor do Sertão",
        "Guaraciaba","Guaruja do Sul","Guatambu","Iporã do Oeste","Iraceminha","Itapejara do Oeste","Itapiranga","Maravilha","Mariópolis","Modelo","Mondai","Nova Erechim",
        "Nova Itaberaba","Palma Sola","Palmitos","Paraíso","Pato Branco","Pinhalzinho","Planalto Alegre","Princesa","Riqueza","Romelândia","São Carlos","São João do Oeste",
        "São José do Cedro","São Miguel do Oeste","Saltinho","Santa Helena","Santa Terezinha do Progresso","Saudades","Selbach","Serra Alta","Sul Brasil","Tigrinhos",
        "Tunapolis","União do Oeste","Verê"]; //Lista retornada pelo banco
        var comboboxfelix = $("#felix");

        for (var i = 0; i < cidadesfelix.length; i++) {
            comboboxfelix.append(
                    $('<option>', {value: cidadesfelix[i], text: cidadesfelix[i]})
            );
        }

        $("#exibirComboboxfelix").click(function () {
            comboboxfelix.toggle(); //Pode usar .show() para mostrar
        }); 

        var cidadessilvio = ["Abelardo Luz","Água Doce","Arrio Trinta","Barra do Rio Azul","Bom Jesus","Brunópolis","Caçador","Campos Novos",
        "Cerro Negro","Chapecó","Cordilheira Alta","Coronel Martins","Coronel Freitas","Curitibanos","Entre Rios","Faxinal dos Guedes","Formosa do Sul",
        "Fraiburgo","Galvão","Guaruja do Sul","Ibicaré","Iomerê","Ipuaçu","Irani","Irati","Jardinópolis","Jupiá","Lajeado Grande","Lebon Régis","Macieira",
        "Marema","Mangueirinha","Matel","Monte Carlo","Nova Candelaria","Nova Itaberaba","Nova Prata do Iguaçu","Novo Horinzonte","Otacílio Costa",
        "Ouro Verde","Passos Maia","Pinheiro Preto","Ponte Serrada","Quilombo","Rio das Antas","São Cristovão do Sul","São Domingos","São Jorge do Oeste",
        "São Lourenço do Oeste","Salto Veloso","Sananduva","Santa Cecilia","Santiago do Sul","Tangará","Treze Tilias","União da Vitória","Vargem Bonita","Videira",
        "Xanxerê","Xaxim","Zortéa"];
        var comboboxsilvio = $("#silvio");

        for (var i = 0; i < cidadessilvio.length; i++) {
            comboboxsilvio.append(
                    $('<option>', {value: cidadessilvio[i], text: cidadessilvio[i]})
            );
        }

        $("#exibirComboboxsilvio").click(function () {
            comboboxsilvio.toggle();
        });

        var cidadesadriano = ["Alto Bela Vista","Anita Garibaldi","Arabutã","Aratiba","Aurea","Barão de Cotegipe","Campo Belo do Sul","Capinzal",
        "Celso Ramos","Centenário","Concordia","Erechim","Erval Velho","Estação","Floriano Peixoto","Gaurama","Getúlio Vargas","Herval do Oeste","Ipira",
        "Ipumirim","Itá","Joaçaba","Lacerdópolis","Lindóia do Sul","Luzerna","Marcelino Ramos","Mariano Moro","Ouro","Paial","Passo Fundo","Peritiba","Piratuba",
        "Presidente Castelo Branco","São José do Cerrito","Seara","Severiano de Almeida","Tapejara","Três Arroio","Xavantina"];
        var comboboxadriano = $("#adriano");

        for (var i = 0; i < cidadesadriano.length; i++) {
            comboboxadriano.append(
                    $('<option>', {value: cidadesadriano[i], text: cidadesadriano[i]})
            );
        }

        $("#exibirComboboxadriano").click(function () {
            comboboxadriano.toggle();
        });

        var cidadeseverton = ["Agrolandia","Agronomica","Apiuna","Ascurra","Aurora","Braço do Trombudo","Chapadão do Lajeado","Correia Pinto","Dona Emma","Rio do Sul",
        "Ibirama","Imbuia","Ituporanga","José Boitex","Lages","Laurentino","Lontras","Mirim Doce","Pomerode","Ponte Alta","Pouso Redondo","Presidente Getúlio",
        "Rio do Campo","Rio do Oeste","Rio do Sul","Salete","Santa Terezinha","Taió","Trombudo Central","Vidal Ramos","Vitor Meireles","Witmarsum"];
        var comboboxeverton = $("#everton");

        for (var i = 0; i < cidadeseverton.length; i++) {
            comboboxeverton.append(
                    $('<option>', {value: cidadeseverton[i], text: cidadeseverton[i]})
            );
        }

        $("#exibirComboboxeverton").click(function () {
            comboboxeverton.toggle();
        });  
  
        var cidadesjoao = ["Abdon Batista","Alfredo Vagner","Atalanta","Aurora","Bocaina do Sul","Bom Jardim da Serra","Bom Retiro","Campo Belo do Sul","Celso Ramos",
        "Chapadão do Lajeado","Ibirama","Imbuia","Ituporanga","Joinvile","Lages","Monte Carlo","Monte Castelo","Otacílio Costa","Painel","Papanduva","Petrolândia",
        "Presidente Getúlio","Rio Rufino","São Joaquim","Taió","Três Barrras","Urubici","Urupema","Vargem"];
        var comboboxjoao = $("#joao");

        for (var i = 0; i < cidadesjoao.length; i++) {
            comboboxjoao.append(
                    $('<option>', {value: cidadesjoao[i], text: cidadesjoao[i]})
            );
        }

        $("#exibirComboboxjoao").click(function () {
            comboboxjoao.toggle();
        });

        var cidadesremacol = ["Ascurra","Balneario Camburiu","Balneario Picarras","Barra Velha","Benedito Novo","Blumenau","Bombinhas","Botuvera","Brusque",
        "Camburiu","Canelinha","Doutor Pedrinho","Gaspar","Guariruba","Ilhota","Indaial","Irineópolis","Itajai","Itapema","Joinvile","Luiz Alves","Major Gercino",
        "Massaranduba","Navegantes","Pomerode","Penha","Porto Belo","Rodeio","São João Batista","São João do Itaperiu","Tijucas","Timbó"];
        var comboboxremacol = $("#remacol");

        for (var i = 0; i < cidadesremacol.length; i++) {
            comboboxremacol.append(
                    $('<option>', {value: cidadesremacol[i], text: cidadesremacol[i]})
            );
        }

        $("#exibirComboboxremacol").click(function () {
            comboboxremacol.toggle();
        });  
    
        var cidadesjairo = ["Campos Borges","Carazinho","Não Me Toque","Novo Xingu","Palmitinho","Pananbi","Ronda Alta","Sarandi","Soledade","Tapejara",
        "Tenente Portela","Tio Hugo","Tres Passos","Vacaria"];
        var comboboxjairo = $("#jairo");

        for (var i = 0; i < cidadesjairo.length; i++) {
            comboboxjairo.append(
                    $('<option>', {value: cidadesjairo[i], text: cidadesjairo[i]})
            );
        }

        $("#exibirComboboxjairo").click(function () {
            comboboxjairo.toggle();
        });  

        var cidadesmaxivenda = ["Alto Feliz","Alvorada","Arroio dos Ratos","Bento Gonçalves","Cachoerinha","Camaqua","Canela","Canoas","Capao na Canoa","Capela de Santana",
        "Caxias do Sul","Charqueadas","Eldorado do Sul","Esteio","Farropilha","Flores da Cunha","Gravataí","Guaíba","Guaporé","Harmonia","Ibiruba",
        "Macambara","Minas do Leão","Nova Araça","Nova Santa Rita","Novo Hamburgo","Osório","Parobé","Pelotas","Porto Alegre","Rio Grande",
        "São Borja","São Francisco de Paula","São Leopoldo","São Lourenço do Sul","Salvador do Sul","Santa Maria do Herval",
        "Santana do Livramento","Santo Antonio das Missões","Santo Cristo","Sapucaia do Sul","Selbach","Três Cachoeiras","Uruguaiana","Viamão"];
        var comboboxmaxivenda = $("#maxivenda");

        for (var i = 0; i < cidadesmaxivenda.length; i++) {
            comboboxmaxivenda.append(
                    $('<option>', {value: cidadesmaxivenda[i], text: cidadesmaxivenda[i]})
            );
        }

        $("#exibirComboboxmaxivenda").click(function () {
            comboboxmaxivenda.toggle();
        });

        var cidadesafonso = ["Ajuricaba","Alecrim","Alegria","Augusto Pestano","Boa Vista do Cadeado","Bonzano","Candido Godoi","Catuipe","Chiapetta","Crissiumal",
        "Cruz Alta","Dezesseis de Novembro","Dois Irmãos das Missões","Eugenio de Castro","Horizontina","Humaitá","Ijui","Independência","Mato Queimado","Miraguai",
        "Nova Candelaria","Nova Ramada","Panambi","Pejucara","Porto Xavier","Roque Gonzales","São Luiz Gonzaga","Salvador das Missões","São José do Inhacora",
        "São Martinho","São Miguel das Missões","Santa Rosa","Santo Angelo","Sede Nova","Tiradentes do Sul","Vitória das Missões"];
        var comboboxafonso = $("#afonso");

        for (var i = 0; i < cidadesafonso.length; i++) {
            comboboxafonso.append(
                    $('<option>', {value: cidadesafonso[i], text: cidadesafonso[i]})
            );
        }

        $("#exibirComboboxafonso").click(function () {
            comboboxafonso.toggle();
        });

        var cidadesfracaro = ["Altamira","Ampére","Assis Chateaubriand","Bela Vista da Caroba","Bom Jesus do Sul","Campina da Lagoa","Capanema","Capitão Leonidas Marques",
        "Cascavel","Catanduvas","Clevelândia","Coronel Vivida","Diamante do Oeste","Dois Vizinhos","Foz do Iguaçu","Francisco Beltrão","Guaira","Guaraniaçu",
        "Jandaia do Sul","Lindoeste","Mariópolis","Maripa","Matelândia","Medianeira","Nova Esperança do Sul","Nova Prata do Iguaçu","Ouro Verde do Oeste",
        "Palotina","Pato Branco","Pérola do Oeste","Pinhal de São Bento","Pranchita","Quedas do Iguaçu","Realeza","Rio Bonito do Iguaçu","São José das Palmeiras",
        "Salto do Lontra","Santa Helena","Santa Lucia","Santa Tereza do Oeste","Santa Terezinha de Itaipu","Santo Antonio do Sudoeste","Toledo","Três Barras do Parana",
        "Ubirata","Vera Cruz do Oeste"];
        var comboboxfracaro = $("#fracaro");

        for (var i = 0; i < cidadesfracaro.length; i++) {
            comboboxfracaro.append(
                    $('<option>', {value: cidadesfracaro[i], text: cidadesfracaro[i]})
            );
        }

        $("#exibirComboboxfracaro").click(function () {
            comboboxfracaro.toggle();
        });

        var cidadesrecrol = ["Apucarana","Arapongas","Arapuna","Astorga","Barbosa Ferraz","Bela Vista do Paraiso","Campina da Lagoa","Cidade Gaucha","Cornélio Procópio",
        "Florestópolis","Ibiporã","Jacarezinho","Jataizinho","Maringa","Moreira Sales","Nova Esperança","Paranavai","Sarandi","Teodoro Sampaio","Terra Rica",
        "Tomazina","Ubirata","Umuarama","Wenceslau Braz"];
        var comboboxrecrol = $("#recrol");

        for (var i = 0; i < cidadesrecrol.length; i++) {
            comboboxrecrol.append(
                    $('<option>', {value: cidadesrecrol[i], text: cidadesrecrol[i]})
            );
        }

        $("#exibirComboboxrecrol").click(function () {
            comboboxrecrol.toggle();
        });         
});