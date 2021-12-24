/* Fill your code*/
class Blog {
    constructor(title, detail) {
      this.title = title;
      this.detail = detail;
      this.addTitle();
      this.addDescription();
    }
    addTitle(){
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;

    }
    addDescription(){
        var descript_card = document.createElement('p');
        descript_card.setAttribute("id","blog-description");
        console.log(descript_card);
        document.getElementById('card-text').appendChild(descript_card);
        descript_card.innerHTML += this.detail;
    }
}
var blog = document.getElementById('addBlog');
blog.addEventListener("click", function(){
    document.getElementById("popupContact").style.display = "block";
});
var closeBtn = document.getElementById('close');
closeBtn.addEventListener("click",function(){
    document.getElementById("popupContact").style.display = "none";
});

var postContent = document.getElementById('post');
postContent.addEventListener("click", function(){
    document.getElementById("popupContact").style.display = "none";
    var imgDis = document.createElement("img");
    imgDis.setAttribute("src","./assets/javascript.png");
    document.getElementById("card-text").appendChild(imgDis);
    var title = document.getElementById("title").value;
    var detail = document.getElementById("detail").value;
    var blog_1 =new Blog(title, detail);
    // blog_1.alert('Enter the details')
})