$(document).ready(function() {
    $("#add-theme").click(function(){
        var value = $("#value-input").val();
        $("#value-input").val('');

        var item = {
            name: value,
        }
        if(item.name != null){
            $.ajax({
                method: "POST",
                url: '/themes/',
                data: JSON.stringify(item),
                processData: false,
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(function (item) {
                console.log("Item created: " + JSON.stringify(item));
            });
        }
    })
})