function evenorodd(num){
    if(num%2==0)
      alert("It's an even number "+num);
    else
     alert("It's an odd number "+num); 
  }
  
  function fact(num1){
    let fact = 1;
      for(i =1; i <= num1; i++){
        fact*=i;
  }
  alert("The factorial of " + num1 + " is " +fact);
  }
  
  
  function greatest()
      {
  var a = parseInt(document.getElementById("n1").value);
  var b = parseInt(document.getElementById("n2").value);
  var c = parseInt(document.getElementById("n3").value);
      if(a>b && a>c)
      {
        alert(a+"is greatest");
      }
        else if(b>a && b>c)
      {
        alert(b+" is greatest");
      }
      else if(c>a && c>b)
      {
        alert(c+" is greatest");
      }
      }
  
      