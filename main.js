
let title= document.getElementById("title");
let price= document.getElementById("price");
let taxes= document.getElementById("taxes");
let ads= document.getElementById("ads");
let discount= document.getElementById("discount");
let total =document.getElementById("total");
let creatbtn=document.getElementById("submit");


let products =[];











creatbtn.addEventListener("click", function() {
    let product = {
        Id: products.length,
        Title: title.value,
        Pricees: price.value,
        TAXES: taxes.value,
        ADS: ads.value,
        DISCOUNT: discount.value,
        total: "0",
        categort:"f"
    };
    products.push(product);

    show_data();
});





function show_data(){
    P_C.innerHTML = "";
    for(let i=0 ; i<products.length ; i++){
       
        let deletebtn=document.createElement("button");
        let updatebtn=document.createElement("button");
        deletebtn.className="bg-purple-900 text-white px-4 py-1 rounded-lg hover:bg-purple-700";
        updatebtn.className="bg-purple-900 text-white px-4 py-1 rounded-lg hover:bg-purple-700";

        deletebtn.innerHTML="delete";
        updatebtn.innerHTML="update";
        
        deletebtn.onclick = function() {
            delete_product(i);
        };



        product=products[i];
        for (let key in product) {
            let childDiv = document.createElement("div");
            childDiv.innerHTML = product[key];
            document.getElementById("P_C").appendChild(childDiv);
        }



    
        document.getElementById("P_C").appendChild(updatebtn);
        document.getElementById("P_C").appendChild(deletebtn);






    }






}



















function delete_product(i){
    products.splice(i, 1); 

    show_data();
}
