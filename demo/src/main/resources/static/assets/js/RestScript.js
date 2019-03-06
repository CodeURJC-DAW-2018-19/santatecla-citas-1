   function loadThemes(id){
    $(document).ready(function(){
        var p = document.getElementById(id).value;
        $.ajax({
            url:"https://localhost:8443/api/themes/?page="+p,
            dataType: 'json'
        }).done(function(data) {
            var suma = parseInt(p) + parseInt(1);
            document.getElementById(id).value= suma ; 
            for(var i=(p*6); i<data.content.length; i++){
                $("#home-themes").append(
                    "<div class=\"col-md-6\"><div class=\"card\"><div class=\"card-body\"><a href=\"/theme/"+data.content[i].id+"\" class=\"card-title\">"+data.content[i].name+"</a>"+
                    "<a title=\"Borrar\" id=\"delete\"onclick=\"confirmAlert('¿Está seguro de que quiere borrar este tema?','/theme/deleteTheme/"+data.content[i].id+"')\""+
                    "class=\"btn btn-primary btn-sm active pull-right\" role=\"button\" aria-pressed=\"true\"><i class=\"material-icons\">delete_outline</i></a>"+
                    "</div></div></div>");
            }
        });
    });
}

function loadQuotes(id){
    $(document).ready(function(){
        var p = document.getElementById(id).value;
        $.ajax({
            url:"https://localhost:8443/api/quotes/?page="+p,
            dataType: 'json'
        }).done(function(data) {
            var suma = parseInt(p) + parseInt(1);
            document.getElementById(id).value= suma ; 
            for(var i=(p*6); i<data.content.length; i++){
                $("#home-quotes").append(
                    "<div class=\"col-md-6\"><div class=\"card\"><div class=\"card-body\"><a href=\"/quote/"+data.content[i].id+"\" class=\"card-title\">"+data.content[i].name+"</a>"+
                    "<a title=\"Borrar\" id=\"delete\"onclick=\"confirmAlert('¿Está seguro de que quiere borrar esta cita?','/quote/deleteQuote/"+data.content[i].id+"')\""+
                    "class=\"btn btn-primary btn-sm active pull-right\" role=\"button\" aria-pressed=\"true\"><i class=\"material-icons\">delete_outline</i></a>"+
                    "</div></div></div>");
            }
        });
    });
}
   