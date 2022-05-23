//store the products array in localstorage as "products"
// Using Contructor function
function PumaProduct(t,d,p,i)
{
    this.type = t ;
    this.decs = d ;
    this.price = p ;
    this.image = i ;
}

//scriptin on form fuction
function storeData(e)
{
    event.preventDefault();
    let form = document.getElementById("products");
    // console.log("some one click");
    let type = form.type.value ;
    let deccription = form.desc.value; 
    let price = form.price.value;
    let imageUrl = form.image.value ;
    let p1 = new PumaProduct(type,deccription,price,imageUrl);
    // Stored the value in local storage
    let data = JSON.parse(localStorage.getItem("products")) || [];
    data.push(p1);
    // Set the local storage
    localStorage.setItem("products",JSON.stringify(data));
    console.log(p1);
}