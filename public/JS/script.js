let result=document.getElementById('main')
async function searchDb(searchText){
    const res=await fetch(`/search?q=${searchText}`);
    const movies=await res.json();
    console.log(movies);
    movies.forEach(ele=>{
        console.log(ele);
        let newDiv=document.createElement("div");
        newDiv.setAttribute("id","main-div");
        newDiv.textContent=ele.name;
        result.append(newDiv);
    });
}


const inp=document.getElementById('inp');

inp.addEventListener("keyup",()=>{
    let searchText=inp.value;
    console.log(searchText);
    searchDb(searchText);
})