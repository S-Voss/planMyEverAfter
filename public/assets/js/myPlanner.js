$(document).ready(function(){

  var couplesId = 1; //placeholder for starter couple

  happyCouple(couplesId);

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

    $.get("/api/planner/" + couplesId, function(data) {
      if(!data) {
        //TODO: redirect to a 404 page
        alert("Client not found.");
      } else {
        if (data.hire_florist) {
          console.log(data.hire_florist);
          $('#chk-florist').prop('checked', true);
          console.log("Something magical with the code should happen here...");
        } else {
          $('#chk-florist').prop('checked', false);
        }
        if (data.budget) {
          $('#chk-max-price').prop('checked', true);
        } else {
          $('#chk-max-price').prop('checked', false);
        }
        if (data.hire_officiant) {
          $('#chk-officiant').prop('checked', true);
        } else {
          $('#chk-officiant').prop('checked', false);
        }
        if (data.hire_entertainment) {
          $('#chk-entertainment').prop('checked', true);
        } else {
          $('#chk-entertainment').prop('checked', false);
        }
        if (data.hire_catering) {
          $('#chk-catering').prop('checked', true);
        } else {
          $('#chk-catering').prop('checked', false);
        }
        if (data.hire_transportation) {
          $('#chk-transportation').prop('checked', true);
        } else {
          $('#chk-transportation').prop('checked', false);
        }
        if (data.book_venue) {
          $('#chk-venue').prop('checked', true);
        } else {
          $('#chk-venue').prop('checked', false);
        }
      }
    })
  }  //end happyCouple function

});