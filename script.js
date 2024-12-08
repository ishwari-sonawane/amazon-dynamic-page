var product={
    title:"Boldfit Water Bottles Stainless Steel Water Bottle 1 Litre Steel Water Bottles for School, Office, Home, Gym 1 Litre Water Bottle for Men Leakproof, Rust free Steel Bottle -1000 ml Water Bottle Black",
    brand:"Visit the Boldfit Store",
    price:349,
    discount:"-56%",
    mrp:800,
    rating:4.5, 
    ratingCount: 4521,
    emiprice:121,
    offer:[{
        offerName:"Bank Offer",
        offerupto:"Upto  34.90",
        offerdiscount:"discount on select..",
        offermore:"4 offers"
    },
    {
    offerName:"Partner Offers",
    offerupto:"Get GST invoice and",
    offerdiscount:"save up to 28% on...",
    offermore:"1 offers"
    },
    {
        offerName:"Partner Offers",
        offerupto:"Get GST invoice and",
        offerdiscount:"save up to 28% on...",
        offermore:"1 offers"
        }
],
    stock:"In stock",
    image:"https://m.media-amazon.com/images/I/31w8mNmhMmL._SX300_SY300_QL70_FMwebp_.jpg",
   
}
var imageContainer = document.querySelector('.image');
imageContainer.style.backgroundImage = `url('${product.image}')`;


var title=document.getElementById('title');
title.textContent=product.title;

var brand=document.getElementById('brand');
brand.textContent=product.brand;

var rating=document.getElementById('rating');
rating.textContent=product.rating;


var span=document.querySelector("#span1")
console.log(span)
       

for(let i=0;i<5;i++){
    if(i<product. rating){
        var star=document.createElement('i');
        star.className="ri-star-s-fill";
        
        // span.appendChild(star)
        
    }
    else
    {
        var Emptystar=document.createElement('i');
        Emptystar.className="ri-star-s-line";
        document.querySelector('#span').appendChild(Emptystar);
        
    }
}


var  discountprice=( product.mrp-product.price)/ product.mrp*100;
discountprice=parseInt(discountprice);

var discount=document.querySelector('#discount');
discount.textContent=`-${discountprice}% OFF`;

var price=document.querySelector('#price');
price.textContent= `RS.${product.price}`;

var mrp=document.querySelector('#mrp');
mrp.textContent=`M.R.P ${product.mrp}`;

var emiprice=document.querySelector('#emiprice');
emiprice.textContent=`EMI starts at RS. ${product.emiprice}starts at EMI option`;

product.offer.forEach(pro =>{

    var box1=document.createElement('div');
    box1.className="box1";


    var h4=document.createElement('h4');
    h4.textContent=pro.offerName;
    box1.appendChild(h4);
    console.log(box1);

    var h5 =document.createElement('h5');
    h5.textContent=pro.offerupto;
    box1.appendChild(h5);

    var p =document.createElement('p');
    p.textContent=pro.offerdiscount;
    box1.appendChild(p);

    var a =document.createElement('a');
    a.textContent=pro.offermore;
    box1.appendChild(a);


   document.querySelector('#offersbox');
   offersbox.appendChild(box1);


})


var stock=document.querySelector('#stock');
stock.textContent=product.stock;