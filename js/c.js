
                
                            
                            
                            var product_json = {"Product_Info" :  [{"Name" : "HONDA i300",
                                                                   "Image" : "img/c1.jpg",
                                                                   "Link" : "index/cardetail.html"},
                                                                   {"Name" : "BMW i1000",
                                                                   "Image" : "img/c2.jpg",
                                                                   "Link" : "index/cardetail.html"},
                                                                   {"Name" : "BMW S20",
                                                                   "Image" : "img/c3.jpg",
                                                                   "Link" : "index/cardetail.html"}]};
                            
                            var product_json_length = product_json.Product_Info.length;
                            
                            for(var i = 0; i < product_json_length; ++i) 
                            {
                                
                                var car = document.getElementById('car');
                
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
                
                                car.appendChild(product);
                            }