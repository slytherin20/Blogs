const container = document.querySelector(".details");
const deleteBtn = document.querySelector(".delete-btn");
const id = new URLSearchParams(window.location.search).get("id");

window.addEventListener("DOMContentLoaded",()=>showBlog());
deleteBtn.addEventListener("click",()=>deleteBlog());


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

function deleteBlog(){
    const URI = `http://localhost:3000/posts/${id}`;

    fetch(URI,{
        method:'DELETE'
    })
    .then(()=>{
        window.location.replace('/index.html');
    })
}