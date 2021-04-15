   var product_json = {"Product_Info" :  [{"Name" : "LAMBORGHINI E",
                                                   "Image" : "../img/s1.jpg",
                                                   "Link" : "supercardetail.html"},
                                                   {"Name" : "LAMBOGHINI H",
                                                   "Image" : "../img/s2.jpg",
                                                   "Link" : "supercardetail.html"},
                                                   {"Name" : "LAMBOGHINI G",
                                                   "Image" : "../img/s3.jpg",
                                                   "Link" : "supercardetail.html"},
                                                   {"Name" : "FERAGI SS",
                                                   "Image" : "../img/s4.jpg",
                                                   "Link" : "supercardetail.html"},
                                                   {"Name" : "FERAGI S10",
                                                   "Image" : "../img/s5.jpg",
                                                   "Link" : "supercardetail.htmll"},
                                                   {"Name" : "FERAGI D",
                                                   "Image" : "../img/s6.jpg",
                                                   "Link" : "supercardetail.html"},
                                                   {"Name" : "BUGATI V",
                                                   "Image" : "../img/s7.jpg",
                                                   "Link" : "supercardetail.html"},
                                                   {"Name" : "BUGATI S",
                                                   "Image" : "../img/s8.jpg",
                                                   "Link" : "supercardetail.html"},
                                                   {"Name" : "BUGATI SS9",
                                                   "Image" : "../img/s9.jpg",
                                                   "Link" : "supercardetail.html"}]};
            
            var product_json_length = product_json.Product_Info.length;
            
            for(var i = 0; i < product_json_length; ++i) {
                
                var body = document.getElementById('body');

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

                body.appendChild(product);
            }




              

