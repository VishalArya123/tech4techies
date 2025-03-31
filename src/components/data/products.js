// products.js - Contains all product data for the robotics shop

export const products = [
    {
      id: 1,
      name: "Arduino Mega 2560",
      slug: "arduino-mega-2560",
      price: 45.99,
      originalPrice: 55.99,
      category: "Microcontrollers",
      brand: "Arduino",
      inStock: true,
      rating: 4.8,
      discount: 10,
      image: "https://store.arduino.cc/cdn/shop/files/A000067_00.front_1000x750.jpg?v=1727098253",
      images: [
        "https://store.arduino.cc/cdn/shop/files/A000067_01.iso_ac4058f0-048a-497d-a924-c5e64ad45dfa_1000x750.jpg?v=1727098253",
        "https://store.arduino.cc/cdn/shop/files/A000067_02.back_cd01aa63-0083-4718-949d-b132faf560f8_1000x750.jpg?v=1727098253",
        "https://store.arduino.cc/cdn/shop/files/A000067_03.unbox_6804911f-5b21-4753-8244-3764bc32eda1_1000x750.jpg?v=1727098253",
        "https://store.arduino.cc/cdn/shop/files/A000067_04.box_1000x750.jpg?v=1727098253"
      ],
      keywords: ["arduino", "mega", "microcontroller", "development board", "electronics", "programming"],
      description: "The Arduino Mega 2560 is a microcontroller board based on the ATmega2560. It has 54 digital input/output pins (of which 15 can be used as PWM outputs), 16 analog inputs, 4 UARTs (hardware serial ports), a 16 MHz crystal oscillator, a USB connection, a power jack, an ICSP header, and a reset button.",
      features: [
        "54 digital I/O pins",
        "16 analog inputs",
        "256KB Flash Memory",
        "16MHz Clock Speed",
        "USB Connectivity"
      ],
      specifications: {
        "Microcontroller": "ATmega2560",
        "Operating Voltage": "5V",
        "Input Voltage": "7-12V",
        "Digital I/O Pins": "54 (of which 15 provide PWM output)",
        "Analog Input Pins": "16",
        "DC Current per I/O Pin": "20 mA",
        "DC Current for 3.3V Pin": "50 mA",
        "Flash Memory": "256 KB of which 8 KB used by bootloader",
        "SRAM": "8 KB",
        "EEPROM": "4 KB",
        "Clock Speed": "16 MHz",
        "Length": "101.52 mm",
        "Width": "53.3 mm",
        "Weight": "37 g"
      },
      reviews: [
        {
          id: 101,
          username: "RoboticsMaster",
          rating: 5,
          date: "2025-02-15",
          title: "Perfect for advanced projects",
          comment: "I've been using Arduino boards for years, and the Mega 2560 offers everything I need for complex robotics projects. Plenty of pins and memory!",
          helpful: 24
        },
        {
          id: 102,
          username: "BeginnerBuilder",
          rating: 4,
          date: "2025-01-28",
          title: "Great board for learning",
          comment: "This is my first Arduino board and I'm impressed with how easy it is to get started. Documentation is excellent and there are tons of projects online.",
          helpful: 15
        },
        {
          id: 103,
          username: "ElectronicsEnthusiast",
          rating: 5,
          date: "2025-02-03",
          title: "Reliable and versatile",
          comment: "The Mega 2560 has been reliable for all my projects. It's worth the extra cost over the Uno if you need more I/O pins and memory.",
          helpful: 10
        }
      ],
      warranty: "1 Year Limited Warranty",
      returnPolicy: "30-day money-back guarantee",
      sellerInfo: "Official Arduino Store",
      relatedProducts: [2, 5, 6, 8]
    },
    {
      id: 2,
      name: "Raspberry Pi 4 Model B",
      slug: "raspberry-pi-4-model-b",
      price: 59.99,
      originalPrice: 59.99,
      category: "Microcontrollers",
      brand: "Raspberry Pi",
      inStock: true,
      rating: 4.9,
      discount: 0,
      image: "https://m.media-amazon.com/images/I/71A14Sz2bWL._AC_SX679_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/51L5hZZGpZL._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/51mgYkpcmyL._AC_.jpg",
        "https://m.media-amazon.com/images/I/61BXlGfh+AL._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/71A14Sz2bWL._AC_SX679_.jpg"
      ],
      keywords: ["raspberry pi", "pi 4", "single board computer", "linux", "programming", "microcontroller"],
      description: "The Raspberry Pi 4 Model B is the latest product in the popular Raspberry Pi range of computers. It offers ground-breaking increases in processor speed, multimedia performance, memory, and connectivity compared to the prior-generation Raspberry Pi 3 Model B+.",
      features: [
        "1.5GHz quad-core 64-bit ARM Cortex-A72 CPU",
        "2GB LPDDR4-3200 SDRAM",
        "True Gigabit Ethernet",
        "2 USB 3.0 and 2 USB 2.0 ports",
        "2 micro-HDMI ports supporting 4K displays"
      ],
      specifications: {
        "Processor": "Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz",
        "Memory": "2GB LPDDR4-3200 SDRAM",
        "Connectivity": "2.4 GHz and 5.0 GHz IEEE 802.11ac wireless, Bluetooth 5.0, BLE",
        "USB": "2 USB 3.0 ports; 2 USB 2.0 ports",
        "GPIO": "Standard 40 pin GPIO header",
        "Video": "2 × micro-HDMI ports (up to 4kp60 supported)",
        "Audio": "4-pole stereo audio and composite video port",
        "Storage": "Micro-SD card slot for loading operating system and data storage",
        "Power": "5V DC via USB-C connector (minimum 3A)",
        "Dimensions": "85.6mm × 56.5mm × 17mm"
      },
      reviews: [
        {
          id: 201,
          username: "LinuxDeveloper",
          rating: 5,
          date: "2025-03-10",
          title: "The ultimate affordable computer",
          comment: "Using this as a desktop replacement for basic programming and web browsing. Performance is excellent for the price. The 2GB RAM is sufficient for most basic tasks.",
          helpful: 32
        },
        {
          id: 202,
          username: "IoTEngineer",
          rating: 5,
          date: "2025-02-22",
          title: "Perfect for IoT projects",
          comment: "The Pi 4 has enough power for running complex IoT applications. WiFi and Bluetooth work flawlessly, and the GPIO pins are perfect for connecting sensors.",
          helpful: 18
        }
      ],
      warranty: "1 Year Limited Warranty",
      returnPolicy: "30-day money-back guarantee",
      sellerInfo: "Authorized Raspberry Pi Reseller",
      relatedProducts: [1, 5, 7, 8]
    },
    {
      id: 3,
      name: "HC-SR04 Ultrasonic Sensor",
      slug: "hc-sr04-ultrasonic-sensor",
      price: 3.99,
      originalPrice: 4.99,
      category: "Sensors",
      brand: "Generic",
      inStock: true,
      rating: 4.2,
      discount: 20,
      image: "https://m.media-amazon.com/images/I/61yp5VAEBEL._SX522_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/61SiRtdK4BL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/615hzq6MxwL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/61ErG7hwzRL._SX522_.jpg"
      ],
      keywords: ["ultrasonic", "sensor", "distance", "proximity", "HC-SR04", "robot"],
      description: "The HC-SR04 ultrasonic sensor uses sonar to determine distance to an object like bats do. It offers excellent non-contact range detection with high accuracy and stable readings in an easy-to-use package.",
      features: [
        "Detection range: 2cm to 400cm",
        "Resolution: 0.3cm",
        "Effective angle: <15°",
        "Operating voltage: 5V DC",
        "Easy to integrate with microcontrollers"
      ],
      specifications: {
        "Power Supply": "5V DC",
        "Working Current": "15mA",
        "Working Frequency": "40Hz",
        "Max Range": "4m",
        "Min Range": "2cm",
        "Measuring Angle": "15 degree",
        "Trigger Input Signal": "10µS TTL pulse",
        "Echo Output Signal": "TTL level signal, proportional to distance",
        "Dimensions": "45 x 20 x 15mm"
      },
      reviews: [
        {
          id: 301,
          username: "RobotBuilder2000",
          rating: 4,
          date: "2025-03-05",
          title: "Great basic sensor",
          comment: "Works well for basic obstacle avoidance in my robot project. Easy to connect to Arduino and the code examples online are helpful.",
          helpful: 8
        },
        {
          id: 302,
          username: "MakerPro",
          rating: 3,
          date: "2025-02-10",
          title: "Decent for the price",
          comment: "The sensor works but has some inconsistencies in readings. For more precise measurements I'd recommend something more expensive.",
          helpful: 12
        }
      ],
      warranty: "30-day limited warranty",
      returnPolicy: "14-day money-back guarantee",
      sellerInfo: "RoboSupplies",
      relatedProducts: [7, 4, 6, 8]
    },
    {
      id: 4,
      name: "Servo Motor SG90",
      slug: "servo-motor-sg90",
      price: 5.99,
      originalPrice: 7.99,
      category: "Motors & Drivers",
      brand: "Tower Pro",
      inStock: true,
      rating: 4.0,
      discount: 25,
      image: "https://m.media-amazon.com/images/I/81MnGggEnLL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/71tNQUKT9nL._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/71TOO8NJYTL._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/71diBKBk6OL._AC_SX679_.jpg"
      ],
      keywords: ["servo", "motor", "SG90", "robotic arm", "control", "movement", "actuator"],
      description: "The Tower Pro SG90 is a tiny and lightweight servo with high output power. It can rotate approximately 180 degrees (90 in each direction) and works just like standard servos but smaller. You can use any servo code, hardware, or library to control these servos.",
      features: [
        "180° rotation range",
        "Compact size and lightweight",
        "Easy to control with PWM",
        "Compatible with Arduino, Raspberry Pi, and other microcontrollers",
        "Perfect for beginners and small projects"
      ],
      specifications: {
        "Weight": "9g",
        "Dimensions": "23 x 12.2 x 22mm",
        "Stall Torque": "1.8kg/cm (4.8V)",
        "Operating Speed": "0.1s/60° (4.8V)",
        "Operating Voltage": "4.8V (~5V)",
        "Temperature Range": "0°C to 55°C",
        "Dead Band Width": "10μs",
        "Connector Wire Length": "15cm"
      },
      reviews: [
        {
          id: 401,
          username: "RoboticsHobbyist",
          rating: 4,
          date: "2025-02-28",
          title: "Good budget servo",
          comment: "These little servos are perfect for small projects. They don't have a lot of torque but work well for lightweight applications.",
          helpful: 14
        },
        {
          id: 402,
          username: "MakerStudent",
          rating: 3,
          date: "2025-02-18",
          title: "Decent for beginners",
          comment: "These are okay for learning but can be a bit jittery. I recommend them for beginners but more serious projects should use higher quality servos.",
          helpful: 7
        }
      ],
      warranty: "30-day limited warranty",
      returnPolicy: "14-day money-back guarantee",
      sellerInfo: "RoboSupplies",
      relatedProducts: [3, 6, 7, 8]
    },
    {
      id: 5,
      name: "ESP32 Development Board",
      slug: "esp32-development-board",
      price: 12.99,
      originalPrice: 15.99,
      category: "Microcontrollers",
      brand: "ESP32",
      inStock: false,
      rating: 4.7,
      discount: 15,
      image: "https://m.media-amazon.com/images/I/612eALAbpgL._SX522_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/61r34gdhxDL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/61xa3vc2TYL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/71D4E5DS-qL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/71d6+P4PUzL._SX522_.jpg"
      ],
      keywords: ["ESP32", "WiFi", "Bluetooth", "IoT", "wireless", "microcontroller", "development board"],
      description: "The ESP32 Development Board is a powerful microcontroller that offers both WiFi and Bluetooth connectivity. It features a dual-core processor running at 240MHz, making it ideal for IoT projects that require wireless connectivity and significant processing power.",
      features: [
        "WiFi & Bluetooth connectivity",
        "Dual-core 32-bit LX6 microprocessor",
        "520 KB SRAM",
        "Ultra-low power consumption",
        "Rich peripheral interface"
      ],
      specifications: {
        "CPU": "Tensilica Xtensa LX6 dual-core processor (32 bit)",
        "Clock Frequency": "Up to 240MHz",
        "ROM": "448 KB",
        "SRAM": "520 KB",
        "Wi-Fi": "802.11 b/g/n/e/i (802.11n up to 150 Mbps)",
        "Bluetooth": "v4.2 BR/EDR and BLE",
        "GPIO": "36",
        "ADC": "18 channels",
        "Operating Voltage": "3.3V",
        "Input Voltage": "5V via USB",
        "Flash Memory": "4MB"
      },
      reviews: [
        {
          id: 501,
          username: "IoTDeveloper",
          rating: 5,
          date: "2025-03-01",
          title: "Amazing value for IoT projects",
          comment: "The ESP32 is a game-changer for wireless projects. It has more than enough power for most IoT applications and the WiFi connectivity is stable and easy to set up.",
          helpful: 19
        },
        {
          id: 502,
          username: "WirelessEnthusiast",
          rating: 4,
          date: "2025-02-12",
          title: "Great board with minor issues",
          comment: "Overall, this is a fantastic board for the price. My only complaint is that the documentation could be better, especially for beginners.",
          helpful: 11
        }
      ],
      warranty: "1 Year Limited Warranty",
      returnPolicy: "30-day money-back guarantee",
      sellerInfo: "TechComponents Inc.",
      relatedProducts: [1, 2, 6, 8]
    },
    {
      id: 6,
      name: "L298N Motor Driver",
      slug: "l298n-motor-driver",
      price: 8.99,
      originalPrice: 10.99,
      category: "Motors & Drivers",
      brand: "Generic",
      inStock: true,
      rating: 4.3,
      discount: 10,
      image: "https://m.media-amazon.com/images/I/61VkNn0PcaL._AC_SX679_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/51HixiEBbcL._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/61vk8Pq04jL._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/6199bxPjI1L._AC_SX679_.jpg"
      ],
      keywords: ["motor driver", "L298N", "H-bridge", "DC motor", "stepper motor", "robot movement"],
      description: "The L298N Motor Driver is a high power motor driver module for driving DC and stepper motors. This module uses the popular L298N dual H-Bridge motor driver IC, which can control the speed and direction of two DC motors, or control one stepper motor with ease.",
      features: [
        "Controls up to 2 DC motors",
        "5V regulator onboard",
        "Heat sink for better performance",
        "Power indicator LED",
        "Up to 2A per channel"
      ],
      specifications: {
        "Driver Chip": "L298N dual H-bridge",
        "Motor Supply Voltage (VM)": "5V to 35V DC",
        "Logic Supply Voltage (VSS)": "5V to 7V DC",
        "Logic Current": "0 to 36mA",
        "Storage Temperature": "-20°C to +135°C",
        "Maximum Power": "25W",
        "Current": "2A (Max single bridge)",
        "Weight": "48g",
        "Dimensions": "55 x 60 x 30mm"
      },
      reviews: [
        {
          id: 601,
          username: "RobotCreator",
          rating: 4,
          date: "2025-02-25",
          title: "Solid motor driver",
          comment: "Works well for controlling motors in my robot project. Easy to connect to Arduino and the onboard voltage regulator is convenient.",
          helpful: 9
        },
        {
          id: 602,
          username: "ElectronicsMaker",
          rating: 5,
          date: "2025-01-30",
          title: "Great value",
          comment: "This motor driver is reliable and handles the current requirements of my project well. The heatsink keeps it cool even under load.",
          helpful: 15
        }
      ],
      warranty: "90-day limited warranty",
      returnPolicy: "14-day money-back guarantee",
      sellerInfo: "Electronics Supply Co.",
      relatedProducts: [4, 3, 7, 8]
    },
    {
      id: 7,
      name: "DHT22 Temperature & Humidity Sensor",
      slug: "dht22-temperature-humidity-sensor",
      price: 4.99,
      originalPrice: 6.99,
      category: "Sensors",
      brand: "Adafruit",
      inStock: true,
      rating: 4.5,
      discount: 20,
      image: "https://m.media-amazon.com/images/I/51J9ha5fZKL._SX522_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/51Wahw9U7lL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/51B2G85wYLL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/51OJAPidhEL._SX522_.jpg"
      ],
      keywords: ["temperature", "humidity", "sensor", "DHT22", "environmental", "weather", "monitoring"],
      description: "The DHT22 is a basic, low-cost digital temperature and humidity sensor. It uses a capacitive humidity sensor and a thermistor to measure the surrounding air, and outputs a digital signal on the data pin (no analog input pins needed).",
      features: [
        "Temperature and humidity sensing",
        "Digital output - no analog pins required",
        "Pre-calibrated digital signal",
        "Excellent long-term stability",
        "Works with 3.3V to 5V power and I/O"
      ],
      specifications: {
        "Power Supply": "3.3V to 5.5V DC",
        "Output Signal": "Digital signal via single-bus",
        "Sensing Element": "Polymer capacitor",
        "Operating Range": "Humidity 0-100%RH; Temperature -40~80℃",
        "Accuracy": "Humidity ±2%RH; Temperature ±0.5℃",
        "Resolution": "Humidity 0.1%RH; Temperature 0.1℃",
        "Long-term Stability": "±0.5%RH/year",
        "Sensing Period": "Average 2s",
        "Dimensions": "15.1 x 25 x 7.7mm"
      },
      reviews: [
        {
          id: 701,
          username: "WeatherEnthusiast",
          rating: 5,
          date: "2025-03-07",
          title: "Accurate and reliable",
          comment: "I've been using this sensor for my weather station project and it's been very accurate when compared to my commercial weather station.",
          helpful: 13
        },
        {
          id: 702,
          username: "SmartHomeBuilder",
          rating: 4,
          date: "2025-02-14",
          title: "Good for home automation",
          comment: "Works well with my Arduino-based home automation system. Library support is good and readings are consistent.",
          helpful: 8
        }
      ],
      warranty: "90-day limited warranty",
      returnPolicy: "30-day money-back guarantee",
      sellerInfo: "Adafruit Authorized Dealer",
      relatedProducts: [3, 1, 2, 8]
    },
    {
      id: 8,
      name: "Robot Kit for Beginners",
      slug: "robot-kit-beginners",
      price: 89.99,
      originalPrice: 99.99,
      category: "Kits & Accessories",
      brand: "Elegoo",
      inStock: true,
      rating: 4.8,
      discount: 10,
      image: "https://www.makeblock.com/cdn/shop/files/mBot2_b0130252-63ea-45ff-845d-6eef94036be7_625x_progressive_webp_1000x.progressive.webp.jpg?v=1736486446",
      images: [
        "https://www.makeblock.com/cdn/shop/files/mBot2_b0130252-63ea-45ff-845d-6eef94036be7_625x_progressive_webp_1000x.progressive.webp.jpg?v=1736486446",
        "https://www.makeblock.com/cdn/shop/files/mBot2overview_1000x.progressive.webp.jpg?v=1736486446",
        "https://www.makeblock.com/cdn/shop/files/Interactive_STEM_Robot_1_1000x.progressive.jpg?v=1740018930",
        "https://www.makeblock.com/cdn/shop/files/mBot2_3_93fdffd3-8e28-4696-a87e-5b5c63c84146_1000x.progressive.jpg?v=1740020091"
      ],
      keywords: ["robot kit", "beginner", "learning", "educational", "DIY", "arduino", "starter kit"],
      description: "The Elegoo Robot Kit for Beginners is a comprehensive starter kit designed to introduce beginners to robotics and programming. This all-in-one package includes everything you need to build a fully functional robot car with obstacle avoidance, line following, and remote control capabilities.",
      features: [
        "Complete kit with all necessary components",
        "Step-by-step instruction manual",
        "Arduino UNO R3 controller board",
        "Multiple sensors included",
        "Bluetooth remote control capability"
      ],
      specifications: {
        "Controller": "Arduino UNO R3 (compatible)",
        "Motors": "4 DC motors with wheels",
        "Sensors": "Ultrasonic sensor, Line tracking module, IR receiver",
        "Power Supply": "9V battery (not included)",
        "Communication": "Bluetooth module",
        "Programming Language": "Arduino (C/C++)",
        "Material": "Acrylic chassis and components",
        "Assembly Time": "Approximately 2-3 hours",
        "Dimensions (Assembled)": "170 x 150 x 90mm"
      },
      reviews: [
        {
          id: 801,
          username: "ParentTeacher",
          rating: 5,
          date: "2025-03-12",
          title: "Perfect educational tool",
          comment: "Bought this for my STEM class and the students love it! The instructions are clear enough for beginners and the project is engaging. Highly recommended for introducing kids to robotics.",
          helpful: 27
        },
        {
          id: 802,
          username: "BeginnerMaker",
          rating: 4,
          date: "2025-02-20",
          title: "Great starter kit",
          comment: "As someone with no prior experience in electronics or programming, I found this kit approachable. Had a few challenges with the software setup but the online community provided solutions.",
          helpful: 19
        },
        {
          id: 803,
          username: "RobotHobbyist",
          rating: 5,
          date: "2025-01-25",
          title: "Excellent quality components",
          comment: "I've tried several beginner robot kits and this one stands out for the quality of components. The chassis is sturdy and the electronics are reliable.",
          helpful: 12
        }
      ],
      warranty: "1 Year Limited Warranty",
      returnPolicy: "45-day money-back guarantee",
      sellerInfo: "Elegoo Official Store",
      relatedProducts: [1, 2, 3, 6]
    }
  ];
  
  // Helper function to get product by ID
  export const getProductById = (id) => {
    return products.find(product => product.id === id);
  };
  
  // Helper function to get product by slug
  export const getProductBySlug = (slug) => {
    return products.find(product => product.slug === slug);
  };
  
  // Get related products for a given product
  export const getRelatedProducts = (productId) => {
    const product = getProductById(productId);
    if (!product) return [];
    
    return product.relatedProducts.map(id => getProductById(id));
  };
  
  // Function to search products
  export const searchProducts = (query) => {
    if (!query) return [];
    
    const searchTerm = query.toLowerCase();
    
    return products.filter(product => {
      // Search in name, description, and keywords
      const nameMatch = product.name.toLowerCase().includes(searchTerm);
      const descMatch = product.description.toLowerCase().includes(searchTerm);
      const keywordMatch = product.keywords.some(keyword => 
        keyword.toLowerCase().includes(searchTerm)
      );
      const categoryMatch = product.category.toLowerCase().includes(searchTerm);
      const brandMatch = product.brand.toLowerCase().includes(searchTerm);
      
      return nameMatch || descMatch || keywordMatch || categoryMatch || brandMatch;
    });
  };
  
  // Get products by category
  export const getProductsByCategory = (category) => {
    if (!category) return products;
    return products.filter(product => product.category === category);
  };
  
  // Get all available categories
  export const getAllCategories = () => {
    const categories = new Set();
    products.forEach(product => categories.add(product.category));
    return Array.from(categories);
  };
  
  // Get all available brands
  export const getAllBrands = () => {
    const brands = new Set();
    products.forEach(product => brands.add(product.brand));
    return Array.from(brands);
  };