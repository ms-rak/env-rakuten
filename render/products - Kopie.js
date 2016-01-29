
// JQUERY ANIMAL TEMPLATE
 
var source = $("#productTemplate").html();
var template = Handlebars.compile(source);
var data = {products: [
  {image: "http://files.rakuten-static.de/597116bc6e487090b3daf55c05cf0dd0/thumbs/280/d9/23967e86a3eb3e93e13de49206d5bbbc/20-32-cm-8-medion-lifetab-s8311-md-98983.jpg", name: "tablet", price: "99,99" },
  {image: "http://files.rakuten-static.de/597116bc6e487090b3daf55c05cf0dd0/thumbs/280/d9/23967e86a3eb3e93e13de49206d5bbbc/20-32-cm-8-medion-lifetab-s8311-md-98983.jpg", name: "tablet", price: "99,99" },
  {image: "http://files.rakuten-static.de/597116bc6e487090b3daf55c05cf0dd0/thumbs/280/d9/23967e86a3eb3e93e13de49206d5bbbc/20-32-cm-8-medion-lifetab-s8311-md-98983.jpg", name: "tablet", price: "99,99" },
  {image: "http://files.rakuten-static.de/597116bc6e487090b3daf55c05cf0dd0/thumbs/280/d9/23967e86a3eb3e93e13de49206d5bbbc/20-32-cm-8-medion-lifetab-s8311-md-98983.jpg", name: "tablet", price: "99,99" },
  {image: "http://files.rakuten-static.de/597116bc6e487090b3daf55c05cf0dd0/thumbs/280/d9/23967e86a3eb3e93e13de49206d5bbbc/20-32-cm-8-medion-lifetab-s8311-md-98983.jpg", name: "tablet", price: "99,99" },
  {image: "http://files.rakuten-static.de/597116bc6e487090b3daf55c05cf0dd0/thumbs/280/d9/23967e86a3eb3e93e13de49206d5bbbc/20-32-cm-8-medion-lifetab-s8311-md-98983.jpg", name: "tablet", price: "99,99" },
  {image: "http://files.rakuten-static.de/597116bc6e487090b3daf55c05cf0dd0/thumbs/280/d9/23967e86a3eb3e93e13de49206d5bbbc/20-32-cm-8-medion-lifetab-s8311-md-98983.jpg", name: "tablet", price: "99,99" },
  

]};
$("#productList").html(template(data));