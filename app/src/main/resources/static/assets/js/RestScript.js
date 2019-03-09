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

            var j1 = 0;

            for(var i=(p*6); i<data.content.length; i++){
                j1++;
                if(admin.textContent == 1){
                    $("#home-themes").append(
                        "<div class=\"col-md-6\"><div class=\"card\"><div class=\"card-body\"><a href=\"/theme/"+data.content[i].id+"\" class=\"card-title\">"+data.content[i].name+"</a>"+
                        "<a title=\"Borrar\" id=\"delete\"onclick=\"confirmAlert('¿Está seguro de que quiere borrar este tema?','/theme/deleteTheme/"+data.content[i].id+"')\""+
                        "class=\"btn btn-primary btn-sm active pull-right\" role=\"button\" aria-pressed=\"true\"><i class=\"material-icons\">delete_outline</i></a>"+
                        "</div></div></div>");
                }else if(admin.textContent == 2){
                    $("#home-themes").append(
                        "<div class=\"col-md-6\"><div class=\"card\"><div class=\"card-body\">"+data.content[i].name+
                        "</div></div></div>");
                }else{
                    $("#home-themes").append(
                        "<div class=\"col-md-6\"><div class=\"card\"><div class=\"card-body\"><a href=\"/theme/"+data.content[i].id+
                        "\" class=\"card-title\">"+data.content[i].name+"</a>"+
                        "</div></div></div>");
                }
            }

            if( j1 < 6 ){
                document.getElementById(id).disabled = true;
                document.getElementById(id).style.display = 'none';
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

            var j2 = 0;

            for(var i=(p*6); i<data.content.length; i++){
                j2++;
                if(admin.textContent == 1){
                    $("#home-quotes").append(
                        "<div class=\"col-md-6\"><div class=\"card\"><div class=\"card-body\"><a href=\"/quote/"+data.content[i].id+"\" class=\"card-title\">"+data.content[i].name+"</a>"+
                        "<a title=\"Borrar\" id=\"delete\"onclick=\"confirmAlert('¿Está seguro de que quiere borrar esta cita?','/quote/deleteQuote/"+data.content[i].id+"')\""+
                        "class=\"btn btn-primary btn-sm active pull-right\" role=\"button\" aria-pressed=\"true\"><i class=\"material-icons\">delete_outline</i></a>"+
                        "</div></div></div>");
                }else if(admin.textContent == 2){
                    $("#home-quotes").append(
                        "<div class=\"col-md-6\"><div class=\"card\"><div class=\"card-body\">"+data.content[i].name+
                        "</div></div></div>");
                }else{
                    $("#home-quotes").append(
                        "<div class=\"col-md-6\"><div class=\"card\"><div class=\"card-body\"><a href=\"/quote/"+data.content[i].id+
                        "\" class=\"card-title\">"+data.content[i].name+"</a>"+
                        "</div></div></div>");
                }
            }

            if( j2 < 6 ){
                document.getElementById(id).disabled = true;
                document.getElementById(id).style.display = 'none';
            }
        });
    });
}
   
function loadSelectQuotes(id){
    $(document).ready(function(){
        var p = document.getElementById(id).value;
        var ti = document.getElementById("tID");
        var ii = document.getElementById("ID");

        $('#lSelectQuotes').html("<img src='/assets/img/spinner.gif'/>");

        $.ajax({
            url:"https://localhost:8443/api/quotes/?page="+p,
            dataType: 'json'
        }).done(function(data) {

            $('#lSelectQuotes').html("<i class='material-icons'>more_horiz</i>");

            var suma = parseInt(p) + parseInt(1);
            document.getElementById(id).value= suma ; 
            
            for(var i=(p*6); i<data.content.length; i++){
                    $("#select-quotes").append(
                        "<div class=\"col-md-6\"><div class=\"card\"><div class=\"card-body\"><a href=\"/theme/addQuoteToTheme/"+ti.textContent+"/selectQuote/"+(i+1)+"\" class=\"card-title\">"
                        +data.content[i].name+"</a>"+"</div></div></div>");
            }
        });
    });
}