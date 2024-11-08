
      $(document).ready(function(){
        $('#exploreAirBtn').on('click', function(event) {
            var target = $('.mission-section'); 
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - $('.navbar').outerHeight() 
                }, 1000); 
            }
        });
       
         
    });
    function scrollToCampusNews() {
       
        document.getElementById("campusNews").scrollIntoView({ behavior: "smooth" });
    }
    

     