const blogContainer = document.querySelector(".blogs");

window.addEventListener("DOMContentLoaded",showBlogs);


function showBlogs(){
    const URI = "http://localhost:3000/posts";

    let responseObject = fetch(URI);
    responseObject
    .then((res)=> res.json())
    .then((posts)=> renderBlogs(posts))
}

function renderBlogs(blogs){
        let template = "";
        blogs.map((blog)=>{
            template += `
            <div class="blog">
            <h2 class="blog-title">${blog.title}</h2>
            <span class="blog-likes"><small>${blog.likes}</small></span>
            <p class="blog-content">${blog.body.slice(0,200)}...</p>
            <a href="/details.html" class="read-more"><button class="read-more-btn">Read more</button><a>
            </div>
            `
        });
        blogContainer.innerHTML = template;
}