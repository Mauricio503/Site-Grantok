$(document).ready(function () {

        var cidadesfelix = ["São Miguel do Oeste", "Maravilha"]; //Lista retornada pelo banco
        var comboboxfelix = $("#felix");

        for (var i = 0; i < cidadesfelix.length; i++) {
            comboboxfelix.append(
                    $('<option>', {value: cidadesfelix[i], text: cidadesfelix[i]})
            );
        }

        $("#exibirComboboxfelix").click(function () {
            comboboxfelix.toggle(); //Pode usar .show() para mostrar
        }); 

        var cidadessilvio = ["Xanxere", "Chapeco"];
        var comboboxsilvio = $("#silvio");

        for (var i = 0; i < cidadessilvio.length; i++) {
            comboboxsilvio.append(
                    $('<option>', {value: cidadessilvio[i], text: cidadessilvio[i]})
            );
        }

        $("#exibirComboboxsilvio").click(function () {
            comboboxsilvio.toggle();
        });

        var cidadesadriano = ["Concordia", "Erechim"];
        var comboboxadriano = $("#adriano");

        for (var i = 0; i < cidadesadriano.length; i++) {
            comboboxadriano.append(
                    $('<option>', {value: cidadesadriano[i], text: cidadesadriano[i]})
            );
        }

        $("#exibirComboboxadriano").click(function () {
            comboboxadriano.toggle();
        });

        var cidadeseverton = ["Rio do Sul", "Ituporanga"];
        var comboboxeverton = $("#everton");

        for (var i = 0; i < cidadeseverton.length; i++) {
            comboboxeverton.append(
                    $('<option>', {value: cidadeseverton[i], text: cidadeseverton[i]})
            );
        }

        $("#exibirComboboxeverton").click(function () {
            comboboxeverton.toggle();
        });  
  
        var cidadesjoao = ["Lages", "Urupema"];
        var comboboxjoao = $("#joao");

        for (var i = 0; i < cidadesjoao.length; i++) {
            comboboxjoao.append(
                    $('<option>', {value: cidadesjoao[i], text: cidadesjoao[i]})
            );
        }

        $("#exibirComboboxjoao").click(function () {
            comboboxjoao.toggle();
        });

        var cidadesremacol = ["Camburiu", "Blumenau"];
        var comboboxremacol = $("#remacol");

        for (var i = 0; i < cidadesremacol.length; i++) {
            comboboxremacol.append(
                    $('<option>', {value: cidadesremacol[i], text: cidadesremacol[i]})
            );
        }

        $("#exibirComboboxremacol").click(function () {
            comboboxremacol.toggle();
        });  
    
        var cidadesjairo = ["Carazinho", "Tres Passos"];
        var comboboxjairo = $("#jairo");

        for (var i = 0; i < cidadesjairo.length; i++) {
            comboboxjairo.append(
                    $('<option>', {value: cidadesjairo[i], text: cidadesjairo[i]})
            );
        }

        $("#exibirComboboxjairo").click(function () {
            comboboxjairo.toggle();
        });  

        var cidadesmaxivenda = ["Caxias do Sul", "Porto Alegre"];
        var comboboxmaxivenda = $("#maxivenda");

        for (var i = 0; i < cidadesmaxivenda.length; i++) {
            comboboxmaxivenda.append(
                    $('<option>', {value: cidadesmaxivenda[i], text: cidadesmaxivenda[i]})
            );
        }

        $("#exibirComboboxmaxivenda").click(function () {
            comboboxmaxivenda.toggle();
        });

        var cidadesafonso = ["Santa Rosa", "Crissiumal"];
        var comboboxafonso = $("#afonso");

        for (var i = 0; i < cidadesafonso.length; i++) {
            comboboxafonso.append(
                    $('<option>', {value: cidadesafonso[i], text: cidadesafonso[i]})
            );
        }

        $("#exibirComboboxafonso").click(function () {
            comboboxafonso.toggle();
        });

        var cidadesfracaro = ["Cascavel", "Ampere"];
        var comboboxfracaro = $("#fracaro");

        for (var i = 0; i < cidadesfracaro.length; i++) {
            comboboxfracaro.append(
                    $('<option>', {value: cidadesfracaro[i], text: cidadesfracaro[i]})
            );
        }

        $("#exibirComboboxfracaro").click(function () {
            comboboxfracaro.toggle();
        });

        var cidadesrecrol = ["Paranavai", "Umuarama"];
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