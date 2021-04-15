var product_json = {"Product_Info" :  [{"Name" : "HONDA i300",
                                                   "Image" : "../img/c1.jpg",
                                                   "Link" : "cardetail.html"},
                                                   {"Name" : "BWM i1000",
                                                   "Image" : "../img/c2.jpg",
                                                   "Link" : "cardetail.html"},
                                                   {"Name" : "BMW SS20",
                                                   "Image" : "../img/c3.jpg",
                                                   "Link" : "cardetail.html"},
                                                   {"Name" : "HONDA S290",
                                                   "Image" : "../img/c4.jpg",
                                                   "Link" : "cardetail.html"},
                                                   {"Name" : "HM SMV",
                                                   "Image" : "../img/c5.jpg",
                                                   "Link" : "cardetail.html"},
                                                   {"Name" : "BW SSS",
                                                   "Image" : "../img/c6.jpg",
                                                   "Link" : "cardetail.html"},
                                                   {"Name" : "MBGN2000",
                                                   "Image" : "../img/c7.jpg",
                                                   "Link" : "cardetail.html"},
                                                   {"Name" : "YAMAHA T500",
                                                   "Image" : "../img/c8.jpg",
                                                   "Link" : "cardetail.html"},
                                                   {"Name" : "HAYA300",
                                                   "Image" : "../img/c9.jpg",
                                                   "Link" : "cardetail.html"}]};
            
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



