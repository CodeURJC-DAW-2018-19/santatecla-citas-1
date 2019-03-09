function loadThemes(id){
    $(document).ready(function(){
        var p = document.getElementById(id).value;
        var admin = document.getElementById("isAdmin");

        $('#lThemes').html("<img src='/assets/img/spinner.gif'/>");

        $.ajax({
            url:"https://localhost:8443/api/themes/?page="+p,
            dataType: 'json'
        }).done(function(data) {

            $('#lThemes').html("<i class='material-icons'>more_horiz</i>");

            var suma = parseInt(p) + parseInt(1);
            document.getElementById(id).value= suma ; 
            for(var i=(p*6); i<data.content.length; i++){
                if(admin.textContent == 1){
                $("#home-themes").append(
                    "<div class=\"col-md-6\"><div class=\"card\"><div class=\"card-body\"><a href=\"/theme/"+data.content[i].id+"\" class=\"card-title\">"+data.content[i].name+"</a>"+
                    "<a title=\"Borrar\" id=\"delete\"onclick=\"confirmAlert('¿Está seguro de que quiere borrar este tema?','/theme/deleteTheme/"+data.content[i].id+"')\""+
                    "class=\"btn btn-primary btn-sm active pull-right\" role=\"button\" aria-pressed=\"true\"><i class=\"material-icons\">delete_outline</i></a>"+
                    "</div></div></div>");
                }else{
                    $("#home-themes").append(
                        "<div class=\"col-md-6\"><div class=\"card\"><div class=\"card-body\">"+data.content[i].name+
                        "</div></div></div>");
                }
            }
        });
    });
}

function loadQuotes(id){
    $(document).ready(function(){
        var p = document.getElementById(id).value;
        var admin = document.getElementById("isAdmin");

        $('#lQuotes').html("<img src='/assets/img/spinner.gif'/>");

        $.ajax({
            url:"https://localhost:8443/api/quotes/?page="+p,
            dataType: 'json'
        }).done(function(data) {

            $('#lQuotes').html("<i class='material-icons'>more_horiz</i>");

            var suma = parseInt(p) + parseInt(1);
            document.getElementById(id).value= suma ; 
            for(var i=(p*6); i<data.content.length; i++){
                if(admin.textContent == 1){
                $("#home-quotes").append(
                    "<div class=\"col-md-6\"><div class=\"card\"><div class=\"card-body\"><a href=\"/quote/"+data.content[i].id+"\" class=\"card-title\">"+data.content[i].name+"</a>"+
                    "<a title=\"Borrar\" id=\"delete\"onclick=\"confirmAlert('¿Está seguro de que quiere borrar esta cita?','/quote/deleteQuote/"+data.content[i].id+"')\""+
                    "class=\"btn btn-primary btn-sm active pull-right\" role=\"button\" aria-pressed=\"true\"><i class=\"material-icons\">delete_outline</i></a>"+
                    "</div></div></div>");
                }else{
                    $("#home-quotes").append(
                        "<div class=\"col-md-6\"><div class=\"card\"><div class=\"card-body\">"+data.content[i].name+
                        "</div></div></div>");
                }
            }
        });
    });
}
   