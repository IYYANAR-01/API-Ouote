    let request = new XMLHttpRequest();
    let url="https://api.api-ninjas.com/v1/quotes?category=happiness";
    request.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) {
            console.log(request.responseText);
            // console.log(typeof(request.responseText));
            var weather=JSON.parse(request.responseText);
            // console.log(weather)
            document.getElementById("quote").innerText = weather[0].quote;
            document.getElementById("author").innerText = "-  "+ weather[0].author;
            // console.log(typeof(weather));
      }
    }  
    request.open("GET",url);
    request.setRequestHeader("X-Api-Key","Ms1VAC/gL54jlauoKtG4vg==Qna7a7Ktwq4BNxCA");
    request.send();