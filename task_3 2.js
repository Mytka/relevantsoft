var newPost = [];
(function($){
    var postArray = $("#river").find('article');
    
    for(let i = 0; i<postArray.length; i++){
        newPost.push({
            link: $(postArray[i]).find('.article-media-thumbnail > a').attr('href'),
            imgSrc: $(postArray[i]).find('.article-media-thumbnail .wp-post-image').attr('src'),
            postLabel: $(postArray[i]).find('.article-header > .post-label').text(),
            articleTitle: $(postArray[i]).find('.article-header .article-title > a').text(),
            author: $(postArray[i]).find('.article-byline .author').text(),
            time: $(postArray[i]).find('.article-byline .the-time').text()
        })
    }
}(jQuery));
console.log(newPost)
