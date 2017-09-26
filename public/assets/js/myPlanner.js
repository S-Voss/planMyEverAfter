$(document).ready(function(){

  var coupleId = 1; //placeholder for starter couple

  happyCouple(coupleId);

  function happyCouple(couplesId){
    $.get("/api/clients/" + couplesId, function(data) {
      if(!data) {
        //TODO: redirect to a 404 page
        alert("Client not found.");
      } else {
        console.log("here i am");
        var coupleText1 = data.spouse1_first;
        var coupleText2 = data.spouse2_first;
        $("#happy-couple").text(coupleText1 + " & " + coupleText2);
      }
    })

    $.get("/api/weddings/" + couplesId, function(data) {
      if(!data) {
        //TODO: redirect to a 404 page
        alert("Client not found.");
      } else {
        console.log("here i am");
        var budget = data.max_price;
        var date = data.date;
        var guests = data.num_of_guests;
        $(".wedding-date").text(date); //TODO: Format wedding date (moment.js)
        $(".wedding-guests").text(guests);
        $(".wedding-budget").text(budget);       
      }
    })
  }

});