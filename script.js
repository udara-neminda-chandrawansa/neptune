var navToggler = 0;

function addToCart(productName) {    
    // URL-encode the data
    var encodedProductName = encodeURIComponent(productName);

    // Create a URL with query parameters
    var url = 'product.html?productName=' + encodedProductName;

    // Redirect to the checkout page
    window.location.href = url;
}
// Hamburger button function
function showNavList() {
  if (navToggler == 0){
    // showing nav list  
    var hideable_grid_end = document.getElementsByClassName('hideable-grid-end');
    for (var i = 0; i < hideable_grid_end.length; i++) {
        hideable_grid_end[i].style.display = 'block';
        hideable_grid_end[i].style.width = '85%';
        hideable_grid_end[i].style.fontsize = '51px';
    }
    // increasing font size in nav-links-li
    var nav_list_item = document.getElementsByClassName('nav-links-li');
    for (var i = 0; i < nav_list_item.length; i++) {
        nav_list_item[i].style.fontSize = '15px';
    }
    // losing padding in ul
    var ul = document.getElementById('navUL');
    ul.style.padding = '0px';
    // losing padding in nav
    var nav = document.getElementById('nav');
    nav.style.padding = '0px';
    // hiding brand
    var brand = document.getElementById('brand-h2');
    brand.style.display = 'none';
    // positioning ham
    var ham = document.getElementById('ham');
    ham.style.position = 'absolute';
    // setting toggle value
    navToggler = 1;    
  }
  else{
    // hiding nav list
    var hideable_grid_end = document.getElementsByClassName('hideable-grid-end');
    for (var i = 0; i < hideable_grid_end.length; i++) {
      hideable_grid_end[i].style.display = 'none';
    }
    // display brand
    var brand = document.getElementById('brand-h2');
    brand.style.display = 'flex';
    // flexing nav
    var nav = document.getElementById('nav');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'space-between';
    // adding padding in nav
    var nav = document.getElementById('nav');
    nav.style.padding = '5%';
    // positioning ham
    var ham = document.getElementById('ham');
    ham.style.position = 'relative';
    // setting toggle value
    navToggler = 0;
    
  }
}
// check
function check(){
  var email = document.signForm.userEmail.value;;
  var psw = document.signForm.userPassword.value;;

  if(email == "udaraneminda@gmail.com" || psw == "123"){
    alert("Access Granted !");
  }
  else{
    alert("Access Denied !");
  }
}
// Buy Now button function
function buynow(){
  alert("Purchase Successful!");
}

// Get references to the carousel images and arrow spans
const carouselImages = document.querySelectorAll('.carousel-img');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

let currentIndex = 0; // Track the current image index

// Function to move the carousel to the next image
function moveToNextImage() {
  // Hide the current image
  carouselImages[currentIndex].classList.remove('active');
  
  // Update the current index to the next image
  currentIndex = (currentIndex + 1) % carouselImages.length;
  
  // Show the next image
  carouselImages[currentIndex].classList.add('active');
}

// Function to move the carousel to the previous image
function moveToPreviousImage() {
  // Hide the current image
  carouselImages[currentIndex].classList.remove('active');
  
  // Update the current index to the previous image
  currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  
  // Show the previous image
  carouselImages[currentIndex].classList.add('active');
}
function setProduct(myArray){
  if(document.title != "Neptune | E - Commerce for the Modern World !" && document.title != "Sign In to your account | Neptune.com"){
        // Set Document Title
        document.title = "Buy " + myArray[0] + " / " + myArray[1];
        // Set the product name and price on the page
        document.getElementById('productName').textContent = myArray[0];
        document.getElementById('price').textContent = myArray[1];
        document.getElementById('productDesc').textContent = myArray[3];
        // Display the product image
        var productImage = document.createElement('img');
        productImage.className = "prodImage";
        productImage.style.minHeight = "100%";
        productImage.style.maxWidth = "100%";
        productImage.src = myArray[2];
        document.getElementById('productImage').appendChild(productImage);    
  }
}
document.addEventListener('DOMContentLoaded',function(){
  var btn = document.getElementById('ham');
  if(btn){
      btn.onclick = function() {
          showNavList();
  }
  };
});
document.addEventListener('DOMContentLoaded', function() {
  // Creating an array for storing product names
  // var prodnames = ["laserPrinter","plotter","cargoPants","bicycle","airPods","camaTshirt","scooter","bicycle2","sweater","soundboard","coffeeMug","whiteHoodie","laptop"];

  // Creating arrays for storing product details
  var laserPrinter = ["Laser Printer","$1200","https://s.alicdn.com/@sc04/kf/H94b2dfe3b9044a7b8622755f7ef754bew.png_250x250xz.jpg","Introducing our high-performance laser printer, a reliable solution for all your printing needs. Engineered with precision and efficiency in mind, this printer delivers crisp and professional-quality prints with exceptional speed. With its advanced laser technology, you can expect sharp text, vibrant graphics, and precise details on every page. The user-friendly interface and seamless connectivity options make it effortless to print from various devices. Whether you're a busy professional, a student, or a home user, our laser printer ensures reliable and impressive printing results, making it an essential addition to any workspace. Experience the convenience and excellence of our laser printer and elevate your printing experience to a whole new level."];
  var plotter = ["Plotter","$500","https://s.alicdn.com/@sc04/kf/Ha45b18fe060e44e88f31aa43c8b9788bc.jpg_250x250xz.jpg","Introducing our state-of-the-art plotter, designed to bring your creative visions to life. This high-quality plotting device combines precision and speed to deliver stunningly detailed prints and designs. Whether you're an architect, engineer, or artist, our plotter offers exceptional performance and versatility. With its sleek design and advanced features, it's the perfect tool for professionals and enthusiasts alike."];
  var cargoPants = ["Cargo Pants","$10","https://s.alicdn.com/@sc04/kf/A1866b91aa97a41d4a3e439d8ff6f4b8a3.jpeg_250x250xz.jpg","Experience the perfect blend of style and functionality with our cargo pants. Crafted from durable and breathable fabric, these pants are designed to withstand any adventure while keeping you comfortable. The multiple pockets provide ample storage space for your essentials, making them ideal for outdoor activities or casual outings. The versatile design and superior craftsmanship ensure that these cargo pants will be your go-to choice for both fashion and practicality."];
  var bicycle = ["Bicycle","$300","https://s.alicdn.com/@sc04/kf/Ha0aa25b57d4f42d69c69a8ffc1e6ea0bi.jpg_250x250xz.jpg","Rediscover the joy of cycling with our premium bicycle. Engineered for smooth rides and optimal performance, this bicycle combines cutting-edge technology with a timeless design. The lightweight frame offers agility and speed, while the comfortable seat and adjustable handlebars ensure a customized fit. Whether you're commuting to work or exploring scenic routes, our bicycle promises a delightful journey every time."];
  var airPods = ["Air Pods","$25","https://s.alicdn.com/@sc04/kf/Hb017eea7b02f476999b4e5d943d17ea8u.jpg_250x250xz.jpg","Immerse yourself in a world of wireless convenience and exceptional sound quality with our Air Pods. These sleek and stylish wireless earbuds deliver crystal-clear audio and seamless connectivity. With their ergonomic design and long battery life, they provide hours of uninterrupted music playback or hands-free calls. Experience the freedom of wireless audio with our Air Pods, the perfect companion for your daily activities."];
  var camaTshirt = ["Cama T Shirt","$12","https://s.alicdn.com/@sc04/kf/H65bdfd339ff94ad6a7e8b048ef2ce1597.jpg_480x480.jpg","Elevate your wardrobe with our Cama T-Shirt, a perfect blend of comfort and style. Crafted from premium cotton, this t-shirt offers a soft and luxurious feel against your skin. The unique design and attention to detail make it a versatile piece that can be dressed up or down. Whether you're going for a casual look or want to make a fashion statement, our Cama T-Shirt is a must-have addition to your collection."];
  var scooter = ["Scooter","$65","https://s.alicdn.com/@sc04/kf/Hcca4ce37c04947ad922084e6522bd115k.jpg_480x480.jpg","Introducing our sleek and reliable scooter, your ideal companion for urban commuting. With its powerful motor and efficient battery, this scooter offers a smooth and eco-friendly mode of transportation. The sturdy construction and intuitive controls ensure a safe and enjoyable ride. Whether you're navigating busy city streets or exploring your neighborhood, our scooter provides a convenient and fun way to get around."];
  var bicycle2 = ["Bicycle","$50","https://s.alicdn.com/@sc04/kf/A17019eeaa8e64060a64dbf9a08077795q.jpg_480x480.jpg","Rediscover the joy of cycling with our premium bicycle. Engineered for smooth rides and optimal performance, this bicycle combines cutting-edge technology with a timeless design. The lightweight frame offers agility and speed, while the comfortable seat and adjustable handlebars ensure a customized fit. Whether you're commuting to work or exploring scenic routes, our bicycle promises a delightful journey every time."];
  var sweater = ["Sweater","$11","https://s.alicdn.com/@sc04/kf/A0db09a4450af40b7b3c2028aabec8e7aQ.jpg_480x480.jpg","Embrace warmth and style with our exquisite sweater collection. Each sweater is meticulously crafted from premium materials to provide ultimate comfort and durability. The cozy knit and thoughtful design details make these sweaters perfect for chilly days and cozy evenings. Whether you're dressing up for a formal occasion or seeking a cozy companion for a casual outing, our sweaters offer timeless elegance and superior craftsmanship."];
  var soundboard = ["Sound Board","$150","https://s.alicdn.com/@sc04/kf/H6c4c79c402024625bed588847228f1daQ.jpg_480x480.jpg","Unleash your creativity and amplify your audio experience with our top-of-the-line soundboard. This professional-grade equipment is designed for musicians, producers, and sound enthusiasts. With its extensive range of controls and advanced features, you can fine-tune every aspect of your sound. From live performances to studio recordings, our soundboard ensures exceptional sound quality and precise control over your audio."];
  var coffeeMug = ["Coffee Mug","$12","https://s.alicdn.com/@sc04/kf/H20b1a8a8be934579b8ccaa3fd31ffae0G.jpg_480x480.jpg","Start your day with a touch of elegance and charm with our coffee mug collection. Crafted with care, these mugs feature beautiful designs and high-quality materials that enhance your coffee-drinking experience. The ergonomic handles provide a comfortable grip, while the durable construction ensures long-lasting use. Whether you're enjoying a relaxing morning or sipping your favorite beverage throughout the day, our coffee mugs add a touch of sophistication to every sip."];
  var whiteHoodie = ["White Hoodie","$10","https://s.alicdn.com/@sc04/kf/A0cd4acc866fd45fd8e14effb6a5db801R.jpg_480x480.jpg","Experience comfort and style with our classic white hoodie. Made from soft and breathable fabric, this hoodie offers a cozy feel while keeping you effortlessly cool. The versatile design and relaxed fit make it a perfect choice for various occasions, from casual outings to lounging at home. With its attention to detail and timeless appeal, our white hoodie is a wardrobe essential that combines comfort and fashion in one."];
  var laptop = ["Laptop","$1250","https://s.alicdn.com/@sc04/kf/Sb3fdebdda7c64e2fb7529cbf08b8fb154.jpg_480x480.jpg","Unleash your productivity and creativity with our cutting-edge laptop. Engineered with powerful hardware and advanced features, this laptop delivers exceptional performance for work, entertainment, and everything in between. The sleek design and high-resolution display provide a visually stunning experience, while the intuitive interface ensures effortless navigation. Whether you're a professional, student, or tech enthusiast, our laptop offers the perfect blend of power and portability."];
  var waterBottle = ["Water Bottle","$5","https://s.alicdn.com/@sc04/kf/H2613c03e53664dc286b154facea6d140e.jpg_480x480.jpg","Stay hydrated on the go with our durable and stylish water bottle. Made from high-quality materials, this bottle is designed to keep your beverages cold or hot for extended periods. The leak-proof lid and convenient size make it ideal for outdoor activities, workouts, or daily use. With its sleek design and reliable performance, our water bottle is a must-have accessory for those who prioritize hydration and sustainability."];
  var Tractor = ["Tractor","$125,000","https://s.alicdn.com/@sc04/kf/H12ca2d06b7e348cbaae53a9c01345a9ad.png_480x480.jpg","Experience the power and versatility of our premium tractor. Designed for heavy-duty tasks and rugged terrains, this tractor offers exceptional performance and reliability. With its advanced features and ergonomic controls, you can tackle any agricultural or landscaping project with ease. From plowing fields to hauling loads, our tractor is built to withstand the toughest challenges while providing comfort and efficiency."];
  var storageBox = ["Storage Box","$36","https://s.alicdn.com/@sc04/kf/Hdd679c4b25ea4a0ab3e3dcba79d44574v.jpg_480x480.jpg","Keep your belongings organized and secure with our versatile storage box. Crafted from sturdy materials, this box offers ample space to store various items, from clothing to documents and more. The stackable design and convenient handles make it easy to transport and maximize storage efficiency. Whether you're decluttering your home or organizing your office, our storage box is a practical solution that combines functionality and durability."];
  var casualHoodie = ["Casual Hoodie","$25","https://s.alicdn.com/@sc04/kf/Ad47c90828a194dc988a8eeed4ae1a82fO.jpeg_480x480.jpg","Embrace casual comfort with our stylish casual hoodie. Made from soft and breathable fabric, this hoodie offers a relaxed fit and effortless style. The hood and front pockets add a touch of functionality, making it perfect for everyday wear. Whether you're running errands, meeting friends, or lounging at home, our casual hoodie provides a cozy and fashionable option for any laid-back occasion."];

  // Get the query parameters from the URL
  var urlParams = new URLSearchParams(window.location.search);

  // Retrieve the specific values
  var productName = urlParams.get('productName');

  // selecting product details array
  if (productName == "laserPrinter"){
     setProduct(laserPrinter);
  }
  else if(productName == "plotter"){
      setProduct(plotter);
  }
  else if(productName == "cargoPants"){
      setProduct(cargoPants);
  }
  else if(productName == "bicycle"){
      setProduct(bicycle);
  }
  else if(productName == "airPods"){
      setProduct(airPods);
  }
  else if(productName == "camaTshirt"){
      setProduct(camaTshirt);
  }
  else if(productName == "scooter"){
      setProduct(scooter);
  }
  else if(productName == "bicycle2"){
      setProduct(bicycle2);
  }
  else if(productName == "sweater"){
      setProduct(sweater);
  }
  else if(productName == "soundboard"){
      setProduct(soundboard);
  }
  else if(productName == "coffeeMug"){
      setProduct(coffeeMug);
  }
  else if(productName == "whiteHoodie"){
    setProduct(whiteHoodie);
  }
  else if(productName == "laptop"){
    setProduct(laptop);
  }
  else if(productName == "waterBottle"){
    setProduct(waterBottle);
  }
  else if(productName == "Tractor"){
    setProduct(Tractor);
  }
  else if(productName == "storageBox"){
    setProduct(storageBox);
  }
  else{
      setProduct(casualHoodie);
  }
});
/*document.addEventListener('click', function(){
  if(navToggler == 1){
        // hiding nav list
        var hideable_grid_end = document.getElementsByClassName('hideable-grid-end');
        for (var i = 0; i < hideable_grid_end.length; i++) {
          hideable_grid_end[i].style.display = 'none';
        }
        // display brand
        var brand = document.getElementById('brand-h2');
        brand.style.display = 'flex';
        // flexing nav
        var nav = document.getElementById('nav');
        nav.style.display = 'flex';
        nav.style.justifyContent = 'space-between';
        navToggler = 0;
        // adding padding in nav
        var nav = document.getElementById('nav');
        nav.style.padding = '5%';
    
  }
});*/
