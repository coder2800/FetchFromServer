let container=document.querySelector(".container");
let serverUrl="https://jsonplaceholder.typicode.com/users";

fetch(serverUrl).then(data=>{
    return data.text();
}).then(result=>{
    const array1=JSON.parse(result);
    // console.log(array1);

    array1.forEach(ele=>{
        const card=document.createElement("div");
        card.classList.add("card");
        card.innerHTML=`<div class="name">Name</div><div class="name-content">${ele.name}</div><div class="email">Email</div><div class="email-content">${ele.email}</div>`;

        container.appendChild(card);
    });

     
    
    console.log(document);
})

