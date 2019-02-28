$(document).ready(function(){
    $.ajax({
        url:"https://localhost:8443/themes/",
        dataType: 'json'
    }).done(function(data) {
        for(var i=0; i<data.length; i++){
            $("#home-themes").append(
                "<div class=\"col-md-6\"><div class=\"card\"><div class=\"card-body\"><a href=\"/theme/"+data[i].id+"\" class=\"card-title\">"+data[i].name+"</a>"+
                "<a title=\"Borrar\" id=\"delete\"onclick=\"confirmAlert('¿Está seguro de que quiere borrar este tema?','/theme/deleteTheme/"+data[i].id+"')\""+
                "class=\"btn btn-primary btn-sm active pull-right\" role=\"button\" aria-pressed=\"true\"><i class=\"material-icons\">delete_outline</i></a>"+
                "</div></div></div>");
        }
    });
});

$(document).ready(function(){
    $.ajax({
        url:"https://localhost:8443/quotes/",
        dataType: 'json'
    }).done(function(data) {
        for(var i=0; i<data.length; i++){
            $("#home-quotes").append(
                "<div class=\"col-md-6\"><div class=\"card\"><div class=\"card-body\"><a href=\"/quote/"+data[i].id+"\" class=\"card-title\">"+data[i].name+"</a>"+
                "<a title=\"Borrar\" id=\"delete\"onclick=\"confirmAlert('¿Está seguro de que quiere borrar este tema?','/quote/deleteQuote/"+data[i].id+"')\""+
                "class=\"btn btn-primary btn-sm active pull-right\" role=\"button\" aria-pressed=\"true\"><i class=\"material-icons\">delete_outline</i></a>"+
                "</div></div></div>");
        }
    });
});
   
   