
  
                        var product_json = {"Product_Info" :  [{"Name" : "HONDA CBR300",
                                                               "Image" : "img/m1.jpg",
                                                               "Link" : "index/motodetail.html"},
                                                               {"Name" : "BMW SS",
                                                               "Image" : "img/m2.jpg",
                                                               "Link" : "index/motodetail.html"},
                                                               {"Name" : "HAYABUSA",
                                                               "Image" : "img/m3.jpg",
                                                               "Link" : "index/motodetail.html"}]};
                        
                        var product_json_length = product_json.Product_Info.length;
                        
                        for(var i = 0; i < product_json_length; ++i) 
                        {
                            
                            var motor = document.getElementById('motor');
            
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
            
                            motor.appendChild(product);
                        }