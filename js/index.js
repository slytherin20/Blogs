const blogContainer = document.querySelector(".blogs");
const searchForm = document.querySelector("form");

window.addEventListener("DOMContentLoaded",()=> showBlogs());
window.addEventListener("submit",searchBlog);


function showBlogs(term){

    let URI = "http://localhost:3000/posts?_sort=likes&_order=desc";

    if(term){
        URI += `&q=${term}`;
    }

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
            <span class="blog-likes"><small>${blog.likes} likes</small></span>
            <p class="blog-content">${blog.body.slice(0,200)}...</p>
            <a href="/details.html?id=${blog.id}" class="read-more"><button class="read-more-btn">Read more</button><a>
            </div>
            `
        });
        blogContainer.innerHTML = template;
}

function searchBlog(e){

    e.preventDefault();
    showBlogs(searchForm.search.value.trim())
}