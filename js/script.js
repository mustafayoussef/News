var links = document.getElementsByClassName("nav-link");
var searchInp = document.getElementById("searchInp");
var buttonSearch =document.getElementById("btnSearch");
var news = "";
var term = "";
var category = "general" ;
var country = "us" ;
getNews();

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click",function(e){
        category = e.target.innerHTML;
        getNews();
    })
}
function getNews(){
    var req = new XMLHttpRequest();
    var url = `https://newsapi.org/v2/top-headlines?country=`+ country +`&category=`+ category +`&apiKey=2aa422a15d504a50bd38cfc19f104274
`
    req.open("GET",url);
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200){
            news = JSON.parse(req.response);
            news = news.articles;
            displayNews()
        }
    }
req.send();
}
function displayNews(){
    temp = "";
    for(var i = 0; i < news.length; i++ ){
        temp+= `  <div class="col-md-4 my-3">
        <div class="card bg-outline-info">
          <div class="card-body">
            <img class="img-fluid " src="`+ news[i].urlToImage +`" />
            <h4>`+ news[i].title +`</h4>
            <p class="text-muted">`+ news[i].description +`</p>
          </div>
        </div>
      </div>`
    }
    document.getElementById("rowID").innerHTML = temp;
}
function globalNews(){
    var req = new XMLHttpRequest();
    var url = `https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-02&sortBy=publishedAt&apiKey=2aa422a15d504a50bd38cfc19f104274`
    req.open("GET",url);
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200){
            news = JSON.parse(req.response);
            news = news.articles;
            displayNews()
        }
    }
req.send();
}