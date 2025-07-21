// Product data for the e-commerce store
export const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29"
    ],
    rating: 4.5,
    description: "High-quality wireless headphones with noise cancellation technology. Perfect for immersive music experience and clear calls.",
    longDescription: "Experience premium sound quality with these wireless headphones featuring advanced noise cancellation technology. The comfortable over-ear design allows for hours of listening without discomfort, while the long battery life ensures your music keeps playing all day. With quick charging capabilities and premium materials, these headphones are perfect for audiophiles and casual listeners alike.",
    category: "electronics",
    subcategory: "audio",
    brand: "SoundWave",
    features: [
      "Active noise cancellation",
      "40-hour battery life",
      "Bluetooth 5.0 connectivity",
      "Built-in microphone",
      "Foldable design"
    ],
    sizes: [],
    colors: ["black", "silver", "white"],
    stock: 15,
    createdAt: "2023-08-15"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d",
    images: [
      "https://images.unsplash.com/photo-1544117519-31a4b719223d",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1",
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd6b5",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a"
    ],
    rating: 4.8,
    description: "Track your fitness goals with this advanced smartwatch. Features heart rate monitoring, step counting, and more.",
    longDescription: "This advanced fitness tracker helps you stay on top of your health and fitness goals with precision tracking of steps, heart rate, sleep patterns, and workouts. The waterproof design means you can wear it swimming, while the long battery life ensures you're not constantly recharging. The sleek design looks great on your wrist, while the bright display is easy to read even in direct sunlight.",
    category: "electronics",
    subcategory: "wearables",
    brand: "FitTech",
    features: [
      "Heart rate monitoring",
      "Step counter",
      "Sleep tracking",
      "Water resistant (50m)",
      "7-day battery life"
    ],
    sizes: [],
    colors: ["black", "blue", "red"],
    stock: 20,
    createdAt: "2023-09-20"
  },
  {
    id: 3,
    name: "Men's Casual Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93",
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8",
      "https://images.unsplash.com/photo-1563630423918-b58f07336ac5"
    ],
    rating: 4.3,
    description: "Comfortable casual shirt for everyday wear. Made from 100% cotton for breathability and comfort.",
    longDescription: "This versatile casual shirt is perfect for any occasion, from office wear to weekend outings. Crafted from 100% premium cotton, it offers exceptional comfort and breathability. The modern slim fit design flatters your silhouette while providing enough room for movement. Available in multiple colors and sizes, this shirt is a must-have addition to any wardrobe.",
    category: "men",
    subcategory: "shirts",
    brand: "StyleMen",
    features: [
      "100% cotton material",
      "Button-down collar",
      "Regular fit",
      "Machine washable"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["blue", "white", "black"],
    stock: 25,
    createdAt: "2023-07-10"
  },
  {
    id: 4,
    name: "Women's Summer Dress",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223"
    ],
    rating: 4.6,
    description: "Light and stylish summer dress perfect for warm weather. Features a flattering cut and comfortable fabric.",
    longDescription: "This beautiful summer dress is designed to keep you cool and stylish during warm weather. The lightweight fabric drapes elegantly, while the flattering cut accentuates your figure. With its vibrant colors and versatile design, this dress can be dressed up with heels for special occasions or paired with sandals for a casual day out. The breathable material ensures comfort all day long.",
    category: "women",
    subcategory: "dresses",
    brand: "ElegantWear",
    features: [
      "Lightweight fabric",
      "A-line cut",
      "V-neck design",
      "Machine washable"
    ],
    sizes: ["S", "M", "L"],
    colors: ["red", "blue", "green"],
    stock: 18,
    createdAt: "2023-05-15"
  },
  {
    id: 5,
    name: "Kid's Sneakers",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d"
    ],
    rating: 4.4,
    description: "Comfortable and durable sneakers for kids. Perfect for active children who love to play and explore.",
    longDescription: "These kid's sneakers are designed to withstand the active lifestyle of children while providing exceptional comfort. The durable rubber sole offers excellent grip, while the cushioned insole ensures comfort during extended wear. The breathable materials keep feet cool and dry, and the easy-to-use velcro straps make them simple for children to put on and take off independently. Available in multiple fun colors.",
    category: "kids",
    subcategory: "shoes",
    brand: "KidSteps",
    features: [
      "Durable rubber sole",
      "Cushioned insole",
      "Breathable materials",
      "Velcro straps"
    ],
    sizes: ["S", "M", "L"],
    colors: ["blue", "red", "green"],
    stock: 30,
    createdAt: "2023-06-05"
  },
  {
    id: 6,
    name: "Leather Wallet",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93",
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
      "https://images.unsplash.com/photo-1559563458-527698bf5295",
      "https://images.unsplash.com/photo-1627123424574-724758594e93"
    ],
    rating: 4.2,
    description: "Genuine leather wallet with multiple card slots. Slim design fits comfortably in your pocket.",
    longDescription: "Crafted from genuine leather, this wallet combines classic style with practical functionality. The slim design fits comfortably in your pocket without bulging, while still providing ample space for your essentials. With multiple card slots, a bill compartment, and an ID window, everything stays organized and accessible. The premium stitching ensures durability, making this wallet a long-lasting accessory.",
    category: "accessories",
    subcategory: "wallets",
    brand: "LeatherCraft",
    features: [
      "Genuine leather",
      "Multiple card slots",
      "Bill compartment",
      "ID window"
    ],
    sizes: [],
    colors: ["brown", "black"],
    stock: 40,
    createdAt: "2023-04-20"
  },
  {
    id: 7,
    name: "Designer Sunglasses",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
      "https://images.unsplash.com/photo-1577803645773-f96470509666"
    ],
    rating: 4.7,
    description: "Stylish designer sunglasses with UV protection. Perfect for adding a touch of elegance to any outfit.",
    longDescription: "These premium designer sunglasses combine fashion with functionality. The stylish frames are crafted from high-quality materials for durability, while the polarized lenses provide 100% UV protection to keep your eyes safe from harmful rays. The ergonomic design ensures a comfortable fit, even during extended wear. Whether you're driving, at the beach, or just enjoying a sunny day, these sunglasses are the perfect accessory.",
    category: "accessories",
    subcategory: "eyewear",
    brand: "VisionStyle",
    features: [
      "100% UV protection",
      "Polarized lenses",
      "Durable frame",
      "Includes protective case"
    ],
    sizes: [],
    colors: ["black", "brown", "gold"],
    stock: 15,
    createdAt: "2023-03-10"
  },
  {
    id: 8,
    name: "Running Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb"
    ],
    rating: 4.8,
    description: "Professional running shoes for athletes. Features advanced cushioning and support for optimal performance.",
    longDescription: "Designed for serious runners, these professional-grade running shoes offer the perfect combination of cushioning, support, and durability. The advanced sole technology absorbs impact to reduce strain on your joints, while the breathable upper keeps your feet cool and comfortable. The specialized traction pattern provides excellent grip on various surfaces, making these shoes versatile for road running, track workouts, or light trails.",
    category: "men",
    subcategory: "shoes",
    brand: "SpeedRunner",
    features: [
      "Advanced cushioning",
      "Breathable mesh upper",
      "Supportive heel counter",
      "Durable rubber outsole"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["red", "black", "blue"],
    stock: 20,
    createdAt: "2023-02-15"
  },
  {
    id: 9,
    name: "Women's Handbag",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7"
    ],
    rating: 4.5,
    description: "Elegant handbag for everyday use. Features multiple compartments for organization and a stylish design.",
    longDescription: "This elegant handbag combines style with practicality, making it perfect for everyday use. The spacious main compartment easily accommodates your essentials, while multiple interior pockets help keep everything organized. Crafted from high-quality materials, this bag is designed to withstand daily use while maintaining its beautiful appearance. The adjustable strap allows for comfortable carrying, whether as a shoulder bag or crossbody.",
    category: "women",
    subcategory: "bags",
    brand: "FashionStyle",
    features: [
      "Multiple compartments",
      "Adjustable strap",
      "Interior pockets",
      "Durable hardware"
    ],
    sizes: [],
    colors: ["black", "brown", "red"],
    stock: 12,
    createdAt: "2023-01-20"
  },
  {
    id: 10,
    name: "Kid's T-shirt",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea",
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea",
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01",
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea"
    ],
    rating: 4.3,
    description: "Soft and comfortable t-shirt for kids. Made from 100% cotton and available in various fun designs.",
    longDescription: "Keep your child comfortable and stylish with this soft, 100% cotton t-shirt. The breathable fabric is gentle on sensitive skin, while the reinforced stitching ensures durability through countless washes and active play. Available in a variety of fun designs and bright colors that kids love, this t-shirt is perfect for everyday wear, school, or casual outings. The easy-care fabric maintains its shape and color wash after wash.",
    category: "kids",
    subcategory: "clothing",
    brand: "KidStyle",
    features: [
      "100% cotton",
      "Breathable fabric",
      "Reinforced stitching",
      "Machine washable"
    ],
    sizes: ["S", "M", "L"],
    colors: ["blue", "red", "yellow"],
    stock: 35,
    createdAt: "2022-12-10"
  },
  {
    id: 11,
    name: "Smartphone",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9",
      "https://images.unsplash.com/photo-1533228100845-08145b01de14",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0"
    ],
    rating: 4.9,
    description: "Latest smartphone with advanced features. Includes a high-resolution camera, fast processor, and long battery life.",
    longDescription: "Experience the cutting edge of mobile technology with this advanced smartphone. The stunning high-resolution display brings content to life with vibrant colors and sharp details. The powerful processor ensures smooth performance for everything from everyday tasks to demanding games and applications. The professional-grade camera system captures incredible photos and videos in any lighting conditions, while the long-lasting battery keeps you connected all day.",
    category: "electronics",
    subcategory: "phones",
    brand: "TechPro",
    features: [
      "6.5-inch OLED display",
      "Triple camera system",
      "5G connectivity",
      "All-day battery life",
      "Water resistant"
    ],
    sizes: [],
    colors: ["black", "white", "blue"],
    stock: 10,
    createdAt: "2023-10-05"
  },
  {
    id: 12,
    name: "Men's Jeans",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb",
      "https://images.unsplash.com/photo-1604176424472-9d0af5d0d059",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
    ],
    rating: 4.4,
    description: "Classic denim jeans for men. Features a comfortable fit and durable construction for long-lasting wear.",
    longDescription: "These classic denim jeans combine timeless style with modern comfort. The premium denim fabric offers the perfect balance of durability and flexibility, moving with you throughout the day. The classic straight-leg cut provides a flattering fit for most body types, while the five-pocket design offers practical storage. Available in multiple washes and sizes, these versatile jeans pair perfectly with everything from casual t-shirts to button-downs.",
    category: "men",
    subcategory: "pants",
    brand: "DenimCo",
    features: [
      "Premium denim fabric",
      "Straight-leg cut",
      "Five-pocket design",
      "Reinforced stitching"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["blue", "black"],
    stock: 22,
    createdAt: "2023-11-01"
  },
  {
    id: 13,
    name: "Women's Blouse",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992",
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992",
      "https://images.unsplash.com/photo-1551048632-8df86522b8b6",
      "https://images.unsplash.com/photo-1499939667766-4afceb292d05",
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992"
    ],
    rating: 4.5,
    description: "Elegant blouse for women. Perfect for office wear or casual outings with its versatile design.",
    longDescription: "This elegant women's blouse is a versatile addition to any wardrobe. The flowing fabric drapes beautifully for a flattering silhouette, while the classic design ensures it never goes out of style. Wear it to the office with tailored pants, dress it up with a skirt for special occasions, or pair it with jeans for a casual-chic look. The easy-care fabric maintains its appearance wash after wash, making this blouse as practical as it is beautiful.",
    category: "women",
    subcategory: "tops",
    brand: "ElegantWear",
    features: [
      "Flowing fabric",
      "Button-up front",
      "Collared design",
      "Machine washable"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["white", "black", "blue", "pink"],
    stock: 18,
    createdAt: "2023-09-15"
  },
  {
    id: 14,
    name: "Tablet",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764"
    ],
    rating: 4.7,
    description: "Versatile tablet with a high-resolution display. Perfect for work, entertainment, and creative projects.",
    longDescription: "This versatile tablet is designed to handle everything from productivity tasks to entertainment and creative work. The stunning high-resolution display makes everything from documents to videos look crisp and vibrant, while the powerful processor ensures smooth performance across all applications. The long battery life keeps you productive all day, and the lightweight design makes it easy to take anywhere. With support for a stylus and keyboard (sold separately), this tablet can easily replace a laptop for many users.",
    category: "electronics",
    subcategory: "tablets",
    brand: "TechPro",
    features: [
      "10.5-inch display",
      "64GB storage",
      "12-hour battery life",
      "Front and rear cameras",
      "Supports stylus input"
    ],
    sizes: [],
    colors: ["silver", "black", "gold"],
    stock: 15,
    createdAt: "2023-08-20"
  },
  {
    id: 15,
    name: "Kid's Backpack",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1565717237147-85b0a3dcf01c",
    images: [
      "https://images.unsplash.com/photo-1565717237147-85b0a3dcf01c",
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887",
      "https://images.unsplash.com/photo-1565717237147-85b0a3dcf01c",
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887"
    ],
    rating: 4.6,
    description: "Durable and colorful backpack for kids. Features multiple compartments and comfortable straps.",
    longDescription: "This kid-friendly backpack combines fun designs with practical functionality. The durable materials stand up to daily use, while the padded straps ensure comfort even when carrying books and supplies. Multiple compartments help keep everything organized, with special pockets for water bottles and small items. The reinforced bottom and sturdy zippers are designed to withstand the wear and tear of active children, making this backpack a reliable choice for school, travel, or everyday adventures.",
    category: "kids",
    subcategory: "bags",
    brand: "KidStyle",
    features: [
      "Durable materials",
      "Padded straps",
      "Multiple compartments",
      "Water bottle pocket"
    ],
    sizes: [],
    colors: ["blue", "pink", "green", "purple"],
    stock: 25,
    createdAt: "2023-07-15"
  },
  {
    id: 16,
    name: "Coffee Maker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1570108965004-d4575c1b6b32",
    images: [
      "https://images.unsplash.com/photo-1570108965004-d4575c1b6b32",
      "https://images.unsplash.com/photo-1498804103079-a6351b050096",
      "https://images.unsplash.com/photo-1570108965004-d4575c1b6b32",
      "https://images.unsplash.com/photo-1498804103079-a6351b050096"
    ],
    rating: 4.5,
    description: "Programmable coffee maker with multiple brewing options. Start your day with the perfect cup of coffee.",
    longDescription: "Elevate your coffee experience with this programmable coffee maker that puts barista-quality brewing at your fingertips. Choose from multiple brewing strengths and temperatures to customize your perfect cup. The programmable timer allows you to wake up to freshly brewed coffee, while the keep-warm function ensures it stays at the ideal temperature. The sleek design looks great in any kitchen, and the easy-clean components make maintenance simple.",
    category: "home",
    subcategory: "appliances",
    brand: "HomeComfort",
    features: [
      "Programmable timer",
      "Multiple brew strengths",
      "Keep-warm function",
      "12-cup capacity",
      "Auto shut-off"
    ],
    sizes: [],
    colors: ["black", "silver", "white"],
    stock: 20,
    createdAt: "2023-06-10"
  }
];

export default products; 