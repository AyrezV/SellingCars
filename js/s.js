     
                            
                            var product_json = {"Product_Info" :  [{"Name" : "LAMBOGHINI E",
                                                                   "Image" : "img/s1.jpg",
                                                                   "Link" : "index/superdetail.html"},
                                                                   {"Name" : "FERAGI SS",
                                                                   "Image" : "img/s2.jpg",
                                                                   "Link" : "index/superdetail.html"},
                                                                   {"Name" : "BUGATI S",
                                                                   "Image" : "img/s3.jpg",
                                                                   "Link" : "index/superdetail.html"}]};
                            
                            var product_json_length = product_json.Product_Info.length;
                            
                            for(var i = 0; i < product_json_length; ++i) 
                            {
                                
                                var supercar = document.getElementById('supercar');
                
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
                
                                supercar.appendChild(product);
                            }