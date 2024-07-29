
    $(document).ready(function(){


        setInterval(function(){

            var width=$('img').width();
            var height=$('img').height()+$('.container-fluid').height();
            var top=height/2-60;
            var left=width/15+5;
          
            $('h1').css({'width':width,'height':height,'padding-top':top,'padding-left':left});

        });

            swal("Enter Your Name: (Maximum 20 characters)", {
  content: "input",
})
.then((value) => {

    if(!value){

        window.location.assign("IAmAProudPakistani.html");

    }
    else if(value.length>20){
        
        swal({
  title: "Warning",
  text: "",
  icon: "warning",
  button: "Try Again!",
  
})
.then((willDelete) => {
    
    window.location.assign("index.html");


});





    }
    else{

        $('h1').html("My Name Is <span style='color:#148e0b !important;'>"+value+"</span>");
        $('.show').css('display','none');
        $('.container').css({'visibility':'visible','height':'auto'});
        html2canvas(document.getElementById("cover"), {
                dpi: 192,
                onrendered: function(canvas) {
                    $('#cover').html(canvas);
                    $('#download').click(function(){
                    $("#blank").attr('href', canvas.toDataURL("image/png"));
                    $("#blank").attr('download','cover.png');
                    $("#blank")[0].click();
                });
                }
            });  
    }
});

    });
