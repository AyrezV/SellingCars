           
var product_json = {"Product_Info" :  [{"Name" : "HONDA CBR300",
                                                    "Image" : "../img/m1.jpg",
                                                    "Link" : "motodetail.html"},
                                                    {"Name" : "BWM 1000RR",
                                                    "Image" : "../img/m2.jpg",
                                                    "Link" : "motodetail.html"},
                                                    {"Name" : "BMW SS",
                                                    "Image" : "../img/m3.jpg",
                                                    "Link" : "motodetail.html"},
                                                    {"Name" : "HONDA CBS",
                                                    "Image" : "../img/m4.jpg",
                                                    "Link" : "motodetail.html"},
                                                    {"Name" : "HONDA SMV",
                                                    "Image" : "../img/m5.jpg",
                                                    "Link" : "motodetail.html"},
                                                    {"Name" : "BWM SSS",
                                                    "Image" : "../img/m6.jpg",
                                                    "Link" : "motodetail.html"},
                                                    {"Name" : "H2 Ninja",
                                                    "Image" : "../img/m7.jpg",
                                                    "Link" : "motodetail.html"},
                                                    {"Name" : "YAMAHA R1",
                                                    "Image" : "../img/m8.jpg",
                                                    "Link" : "motodetail.html"},
                                                    {"Name" : "HAYABUSA",
                                                    "Image" : "../img/m9.jpg",
                                                    "Link" : "motodetail.html"}]};

var product_json_length = product_json.Product_Info.length;

for(var i = 0; i < product_json_length; ++i)
{
var main_content = document.getElementById('main-content');

var product = document.createElement('div');
product.classList.add('product');

var a = document.createElement('a');
a.href = product_json.Product_Info[i].Link;

var image = document.createElement('img');
image.src = product_json.Product_Info[i].Image;

a.appendChild(image);
product.appendChild(a);

var img_name = document.createElement('p');
img_name.appendChild(document.createTextNode(product_json.Product_Info[i].Name));
product.appendChild(img_name);

main_content.appendChild(product);
}
