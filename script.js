function search(){
    if(document.getElementById("search").innerHTML == ""){
        document.getElementById("search-id").innerHTML = "";
        document.getElementById("first-letter").innerHTML = "";
        document.getElementById("menu").innerHTML = "";
    }else{
        document.getElementById("search").innerHTML = "";
        document.getElementById("search-id").innerHTML = "";
        document.getElementById("first-letter").innerHTML = "";
        document.getElementById("menu").innerHTML = "";
    }
    
    var data = document.getElementById("search-by-name").value.toUpperCase();
    if(data.length == 0){
        alert("Seach field is empty");
    }else{
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(this.responseText); 
                var count = 0;
                if(obj.drinks != null){     
                    for( i=0;i<obj.drinks.length;i++){
                        if(count < 6){
                            count++;
                            var divContent = document.createElement("div");
                            var h1 = document.createElement("h1");
                            var img = document.createElement("img");
                            var h4 = document.createElement("h4");
                            h4.setAttribute("class","type")
                            divContent.setAttribute("class","items");
                            h1.setAttribute("class","name");
                            img.setAttribute("class","images");
                            h1.innerHTML = obj.drinks[i].strDrink;
                            img.setAttribute("src", obj.drinks[i].strDrinkThumb); 
                            h4.innerHTML = obj.drinks[i].strAlcoholic;
                            divContent.appendChild(img);
                            divContent.appendChild(h1);
                            divContent.appendChild(h4);
                            document.getElementById("search").appendChild(divContent);
                        }
                    }
                }
            }
        };
        xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + data, true);
        xhttp.send();
    }
}
function firstLetter() {
    if(document.getElementById("first-letter").innerHTML == ""){
        document.getElementById("search").innerHTML = "";
        document.getElementById("search-id").innerHTML = "";
        document.getElementById("menu").innerHTML = "";
    }else{
        document.getElementById("search").innerHTML = "";
        document.getElementById("search-id").innerHTML = "";
        document.getElementById("first-letter").innerHTML = "";
        document.getElementById("menu").innerHTML = "";
    }

    var value = document.getElementById("search-by-first-letter").value;

    if(value.length != 0 && /^[a-zA-Z]/.test(value) == true){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(this.responseText);
                if(obj.drinks != null){
                    var i;
                    var count = 0;
                    for(i = 0; i < obj.drinks.length && count < 9; i++)
                    {
                        count++;
                        var div = document.getElementById("first-letter");
                        var divItems = document.createElement("div");
                        divItems.setAttribute("class","items");
                        var img = document.createElement("img");
                        var divCaption = document.createElement("div");
                        divCaption.setAttribute("class","caption");
                        var p = document.createElement("p");
                        img.setAttribute("src",obj.drinks[i].strDrinkThumb);
                        img.setAttribute("class","images");
                        p.innerHTML = obj.drinks[i].strDrink;
                        divCaption.appendChild(p);
                        divItems.appendChild(img);
                        divItems.appendChild(divCaption);
                        div.appendChild(divItems);
                    }
                }
            }
        };
        xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + value,true);
        xhttp.send();
    }else{
        alert("Input is either empty or numeric value is given");
        document.getElementById("search-by-first-letter").focus();
    }
}

function searchById() {
    if(document.getElementById("search-id").innerHTML == ""){
        document.getElementById("first-letter").innerHTML = "";
        document.getElementById("search").innerHTML = "";
        document.getElementById("menu").innerHTML = "";
    }else{
        document.getElementById("search").innerHTML = "";
        document.getElementById("search-id").innerHTML = "";
        document.getElementById("first-letter").innerHTML = "";
        document.getElementById("menu").innerHTML = "";
    }    

    var value = document.getElementById("search-by-id").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            if(obj.drinks != null){
                var div = document.getElementById("search-id");
                var divItems = document.createElement("div");
                divItems.setAttribute("class","items");
                var img = document.createElement("img");
                var divCaption = document.createElement("div");
                divCaption.setAttribute("class","caption");
                var p = document.createElement("p");
                img.setAttribute("src",obj.drinks[0].strDrinkThumb);
                console.log(typeof(obj.drinks[0].strDrinkThumb));
                img.setAttribute("class","images");
                p.innerHTML = obj.drinks[0].strDrink;
                divCaption.appendChild(p);
                divItems.appendChild(img);
                divItems.appendChild(divCaption);
                div.appendChild(divItems);
            }
        }    
    };
    xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + value, true);
    xhttp.send();
}

function menu(){
    if(document.getElementById("menu").innerHTML == ""){
        document.getElementById("search").innerHTML = "";
        document.getElementById("search-id").innerHTML = "";
        document.getElementById("first-letter").innerHTML = "";
    }else{
        document.getElementById("search").innerHTML = "";
        document.getElementById("search-id").innerHTML = "";
        document.getElementById("first-letter").innerHTML = "";
        document.getElementById("menu").innerHTML = "";
    }

    alcoholic();
    nonAlcoholic();
    ordinaryDrink();
    cocktail();
    champagneFlute();
    
    document.getElementById("m").setAttribute("href","#menu");
}

function alcoholic(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            for(var i = 1; i < 4; i++){
                var div = document.getElementById("menu");
                var divItems = document.createElement("div");
                divItems.setAttribute("class","items");
                var img = document.createElement("img");
                var divCaption = document.createElement("div");
                divCaption.setAttribute("class","caption");
                var h2 = document.createElement("h2");
                var h4 = document.createElement("h4");
                img.setAttribute("src",obj.drinks[i].strDrinkThumb);
                img.setAttribute("class","images");
                h2.innerHTML = obj.drinks[i].strDrink;
                h4.innerHTML = "Alcoholic";
                divCaption.appendChild(h2);
                divCaption.appendChild(h4);
                divItems.appendChild(img);
                divItems.appendChild(divCaption);
                div.appendChild(divItems);
            }
        }   
    };
    xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic", true);
    xhttp.send();
}

function nonAlcoholic(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            for(var i = 0; i < 3; i++){
                var div = document.getElementById("menu");
                var divItems = document.createElement("div");
                divItems.setAttribute("class","items");
                var img = document.createElement("img");
                var divCaption = document.createElement("div");
                divCaption.setAttribute("class","caption");
                var h2 = document.createElement("h2");
                var h4 = document.createElement("h4");
                img.setAttribute("src",obj.drinks[i].strDrinkThumb);
                img.setAttribute("class","images");
                h2.innerHTML = obj.drinks[i].strDrink;
                h4.innerHTML = "Non-Alcoholic";
                divCaption.appendChild(h2);
                divCaption.appendChild(h4);
                divItems.appendChild(img);
                divItems.appendChild(divCaption);
                div.appendChild(divItems);
            }
        }
    };
    xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic", true);
    xhttp.send();
}

function ordinaryDrink(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            for(var i = 0; i < 3; i++){
                var div = document.getElementById("menu");
                var divItems = document.createElement("div");
                divItems.setAttribute("class","items");
                var img = document.createElement("img");
                var divCaption = document.createElement("div");
                divCaption.setAttribute("class","caption");
                var h2 = document.createElement("h2");
                var h4 = document.createElement("h4");
                img.setAttribute("src",obj.drinks[i].strDrinkThumb);
                img.setAttribute("class","images");
                h2.innerHTML = obj.drinks[i].strDrink;
                h4.innerHTML = "Ordinary Drink";
                divCaption.appendChild(h2);
                divCaption.appendChild(h4);
                divItems.appendChild(img);
                divItems.appendChild(divCaption);
                div.appendChild(divItems);
            }
        }
    };
    xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink", true);
    xhttp.send();
}

function cocktail(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            for(var i = 1; i < 4; i++){
                var div = document.getElementById("menu");
                var divItems = document.createElement("div");
                divItems.setAttribute("class","items");
                var img = document.createElement("img");
                var divCaption = document.createElement("div");
                divCaption.setAttribute("class","caption");
                var h2 = document.createElement("h2");
                var h4 = document.createElement("h4");
                img.setAttribute("src",obj.drinks[i].strDrinkThumb);
                img.setAttribute("class","images");
                h2.innerHTML = obj.drinks[i].strDrink;
                h4.innerHTML = "Cocktail";
                divCaption.appendChild(h2);
                divCaption.appendChild(h4);
                divItems.appendChild(img);
                divItems.appendChild(divCaption);
                div.appendChild(divItems);
            }
        }
    };
    xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail", true);
    xhttp.send();
}

function champagneFlute(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            for(var i = 0; i < 3; i++){
                var div = document.getElementById("menu");
                var divItems = document.createElement("div");
                divItems.setAttribute("class","items");
                var img = document.createElement("img");
                var divCaption = document.createElement("div");
                divCaption.setAttribute("class","caption");
                var h2 = document.createElement("h2");
                var h4 = document.createElement("h4");
                img.setAttribute("src",obj.drinks[i].strDrinkThumb);
                img.setAttribute("class","images");
                h2.innerHTML = obj.drinks[i].strDrink;
                h4.innerHTML = "Champagne Flute";
                divCaption.appendChild(h2);
                divCaption.appendChild(h4);
                divItems.appendChild(img);
                divItems.appendChild(divCaption);
                div.appendChild(divItems);
            }
        }
    };
    xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute", true);
    xhttp.send();
}