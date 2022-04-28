var arrow = document.querySelectorAll(".toggle");
arrow.forEach(function(btn) {
      btn.addEventListener("click",function(){
      btn.parentNode.classList.toggle("active");
      });
    });
    

    var add = JSON.parse(localStorage.getItem("checkout"))|| [];
    console.log(add);
     displayadd(add)
    function displayadd(){
      add.map(function(elem){
       var firstname = document.createElement("p");
       firstname.textContent= elem.firstname;
       var lastname = document.createElement("p");
       lastname.textContent= elem.lastname;
       var fullname = document.createElement("p");
       fullname.textContent= elem.fullname;
       var address1 = document.createElement("p");
       address1.textContent= elem.address1;
       var address2 = document.createElement("p");
       address2.textContent= elem.address2;
       var city = document.createElement("p");
       city.textContent= elem.city;
       var state = document.createElement("p");
       state.textContent= elem.state;
       var zip = document.createElement("p");
       zip.textContent= elem.zip;
       var ph = document.createElement("p");
       ph.textContent= elem.ph;
       var email = document.createElement("p");
       email.textContent= elem.email;
     


       document.querySelector("#firstname").append(firstname);
       document.querySelector("#lastname").append(lastname);
       document.querySelector("#fullnam").append(fullname);
       document.querySelector("#add1").append(address1);
       document.querySelector("#add2").append(address2);
       document.querySelector("#city").append(city);
       document.querySelector("#state").append(state);
       document.querySelector("#zip").append(zip);
       document.querySelector("#ph").append(ph);
       document.querySelector("#email").append(email);
        
      })

    }

    var cart = JSON.parse(localStorage.getItem("cartPage"))|| [];
    displaycart(cart);
  function displaycart(){
    document.querySelector(".meal").textContent="" 
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



   document.querySelector(".meal").append(div);


   
    })
  }
  document.querySelector("#form").addEventListener("submit" , function(event){
    event.preventDefault()
    window.location.pathname="Ecommerce_freshly_clone/finalpage/finalpage.html"
  })

    