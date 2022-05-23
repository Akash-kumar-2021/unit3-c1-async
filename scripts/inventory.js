function append()
{
    let data = JSON.parse(localStorage.getItem("products"));
    console.log(data);
    let all_products = document.getElementById("all_products");
    data.forEach(function (el, index) {
      let div = document.createElement("div");
      let image = document.createElement("img");
      image.src = el.image;
    //   let p = document.createElement("p");
    //   p.innerText = el.price ;
    let btn = document.createElement("button");
    btn.innerText = "remove";
    btn.addEventListener("click",function()
    {
      //   Invoke the remove fubction here
      remove(index);
    })
      div.append(image);
      all_products.append(div,btn);
    });

}
append();

function remove(index)
{
let data = JSON.parse(localStorage.getItem("products")) || [];
let newData = data.filter(function(el,i)
{
    if(i === index)
    {
        let trash = JSON.parse(localStorage.getItem("trash")) || [];
        trash.push(el);
        localStorage.setItem("trash",JSON.stringify(trash));
    }
else{
 return i != index ;
}
   
});
localStorage.setItem("products",JSON.stringify(newData));
append();
}
