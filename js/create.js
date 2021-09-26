const form = document.querySelector("form");

function createBlog(e){
    e.preventDefault();

    const URI = "http://localhost:3000/posts"

    let obj = {
        title: form.title.value,
        body: form.body.value,
        likes:0
    }

  fetch(URI,{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(()=>
        window.location.replace("/index.html")
    )

}

form.addEventListener("submit",createBlog);