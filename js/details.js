const container = document.querySelector(".details");
const id = new URLSearchParams(window.location.search).get("id");

window.addEventListener("DOMContentLoaded",()=>showBlog());


function showBlog(){

    const URI = `http://localhost:3000/posts/${id}`;

    fetch(URI)
    .then((res)=> res.json())
    .then((blog)=>{
        renderBlog(blog);
    })
}

function renderBlog(blog){
    let template= `
        <div class="blog">
        <h1 class="blog-title">${blog.title}</h1>
        <span><small>${blog.likes} likes</small></span>
        <p class="blog-content">${blog.body}</p>
        </div>
    `
    container.innerHTML = template;
}