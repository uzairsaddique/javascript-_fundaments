

// const a = document.querySelector('div');
// const b = d3.select('div');

// console.log(a , b);
// const canvas = d3.select(".canvas");
// const svg = canvas.append('svg').attr('height', 600).attr('width', 600);


// svg.append('rect').attr('width', 200).attr('height', 100),attr('fill', 'blue').attr('x',20).attr('y',20);


console.log('uzair');


function myfunction(){
    document.getElementById("demo").innerHTML = "My First JavaScript";

}

$(document).ready(function(){
    $("p").click(function(){
      $(this).hide(1000);
    });
  });

//   $(document).ready(function(){
//     $("button").click(function(){
//         $("#div1").fadeIn();
//         $("#div3").fadeIn("slow");
//         $("#div2").fadeIn(3000);
//       });
//   });

 
  $(document).ready(function(){
 $("p").on({
     mouseenter: function(){
         $(this).css("background-color", "red");
     },
     mouseleave: function(){
        $(this).css("background-color", "yellow");
    },
    click: function(){
        $(this).css("background-color", "gray")
    }

 });
});



$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeToggle(5000);
        $("#div2").fadeToggle(3000);
        $("#div3").fadeToggle(2000);
        $("#div4").fadeToggle(1000);

    })
});



$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });