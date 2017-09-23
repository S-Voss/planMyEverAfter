$("#add-submit").on("click", function(event){
    event.preventDefault();
    alert("this has been clicked");
    var newClient = {
        spouse1_first: $("#spouse-1-first").val().trim(),
        spouse1_last: $("#spouse-1-last").val().trim(),
        spouse2_first: $("#spouse-2-first").val().trim(),
        spouse2_last: $("#spouse-2-last").val().trim(),
        email: $("#contact-email").val().trim(),
        phone: $("#contact-phone").val().trim()
    };

    var weddingInfo = {
        maxBudget: $("#max-budget").val().trim(),
        date: $("#event-date").val().trim(),
        zip: $("#wedding-zip").val().trim(),
        numGuest: $("#guests").val().trim()
    };

    $.post("/api/newClient", newClient)
        .done(function(data){
            console.log(data);
            alert("New client submitted");
        });

    $.post("/api/weddingInfo", weddingInfo)
        .done(function(data){
            console.log(data);
            alert("Wedding info added");
        });    

        $("#spouse-1-first").val("");
        $("#spouse-1-last").val("");
        $("#spouse-2-first").val("");
        $("spouse-2-last").val("");
        $("#party-name").val("");
        $("#contact-email").val("");
        $("#contact-phone").val("");
        $("#max-Budget").val("");
        $("#event-date").val("");
        $("#wedding-zip").val("");
        $("#guests").val("");

});