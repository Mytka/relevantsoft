


var posts=[];
for (var i=0; i<100; i++){
    var post = document.createElement('div');
post.className = "post success";
post.innerHTML = "<strong>Ура!</strong> НОва новина"+i+"";
    
    posts.push(post);
    
}
var newsList = document.querySelectorAll('.s_1ca2swh9-9');
    console.log(newsList);
var counter = 0;
window.onscroll = function() {
  newsList = document.querySelectorAll('.s_1ca2swh9-9');
    if(counter < newsList.length){
        newsList[counter].append(posts[counter]);
        counter++;        
    }
}
