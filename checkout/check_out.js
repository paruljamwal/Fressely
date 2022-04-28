
var arrow = document.querySelectorAll(".toggle");
arrow.forEach(function(btn) {
      btn.addEventListener("click",function(){
      btn.parentNode.classList.toggle("active");
      });
    });

    document.querySelector("#form").addEventListener("submit" , additem)
      
    var arr = JSON.parse(localStorage.getItem("checkout"))|| [];
   
      function additem(event){
        event.preventDefault();
        var firstname = document.querySelector("#firstname").value;
        var lastname = document.querySelector("#lastname").value;
        var fullname = document.querySelector("#fullname").value;
        var address1 = document.querySelector(".Add1").value;
        var address2 = document.querySelector(".Add2").value;
        var city = document.querySelector("#city").value;
        var state = document.querySelector("#state").value;
        var zip = document.querySelector("#zip").value;
        var ph = document.querySelector("#ph").value;
        var email = document.querySelector("#email").value;
  
        var checkObj = {
          firstname : firstname,
          lastname : lastname,
          fullname : fullname,
          address1: address1,
          address2 : address2,
          city : city,
          state : state,
          zip : zip,
          ph : ph,
          email : email,
        };
         arr.push(checkObj);
         console.log(arr)
         localStorage.setItem("checkout" , JSON.stringify(arr));
         window.location.pathname = "Ecommerce_freshly_clone/payment/payment.html"
      }
  

      var cart = JSON.parse(localStorage.getItem("cartPage"))
        displaycart(cart);
      function displaycart(){
        cart.map(function(elem){
        
        var img = document.createElement("img");
        img.setAttribute( "src" , elem.image);
        img.setAttribute("class", "img")
        var title = document.createElement("p");
        title.textContent= elem.title;
        title.setAttribute("class" , "cont");

        // var price = document.createElement("p");
        // price.textContent= elem.price;
        var div = document.createElement("div");
        div.append(img ,title )



       document.querySelector(".meal").append(div)
        })
      }

    
     
    
    