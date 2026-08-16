const products = [
// =====================================================
// WINDOWS
// =====================================================

{
    id: 1,
    title: "Elegance 80",
    category: "Windows",
    type: "Casement",
    group: "Residential",
    material: "PVC",
    opening: "Tilt & Turn",
    slug: "elegance-80",
    desc:
        "A high-performance PVC window system designed for homes requiring strong insulation, durability, and reliable everyday operation.",
    features: [
        "80 mm profile width",
        "3 sealing system",
        "High wind resistance",
        "Thermal insulation",
        "Tilt & turn opening"
    ],
    performance: {
        thermalInsulation: "High",
        soundInsulation: "Up to 40 dB",
        security: "Enhanced",
        maintenance: "Low"
    },
    colors: [
        "White",
        "Anthracite",
        "Golden Oak",
        "Walnut"
    ],
    applications: [
        "Houses",
        "Apartments",
        "Villas",
        "Residential renovations"
    ],
    featured: true,
    images: [
        "https://images.pexels.com/photos/14473771/pexels-photo-14473771.jpeg",
        "https://images.pexels.com/photos/30020797/pexels-photo-30020797.jpeg"
    ]
},

{
    id: 2,
    title: "Redonit 85",
    category: "Windows",
    type: "Casement",
    group: "Premium",
    material: "PVC",
    opening: "Tilt & Turn",
    slug: "redonit-85",
    desc:
        "A premium PVC window system developed for prestigious residential and commercial projects where insulation, durability, and refined aesthetics are priorities.",
    features: [
        "85 mm profile width",
        "3 sealing system",
        "Class A wall thickness",
        "High thermal insulation",
        "Enhanced wind resistance"
    ],
    performance: {
        thermalInsulation: "Very High",
        soundInsulation: "Up to 40 dB",
        security: "High",
        maintenance: "Low"
    },
    colors: [
        "White",
        "Anthracite",
        "Black",
        "Golden Oak",
        "Walnut"
    ],
    applications: [
        "Luxury residences",
        "Villas",
        "Hotels",
        "Commercial buildings"
    ],
    featured: true,
    images: [
        "https://images.pexels.com/photos/9301045/pexels-photo-9301045.jpeg",
        "https://images.pexels.com/photos/30650314/pexels-photo-30650314.jpeg"
    ]
},

{
    id: 3,
    title: "Selenit 75",
    category: "Windows",
    type: "Casement",
    group: "Residential",
    material: "PVC",
    opening: "Tilt & Turn",
    slug: "selenit-75",
    desc:
        "A balanced PVC window solution offering dependable insulation, clean aesthetics, and practical everyday performance.",
    features: [
        "75 mm profile width",
        "Multi-chamber profile",
        "Center sealing system",
        "Energy-efficient design",
        "Tilt & turn operation"
    ],
    performance: {
        thermalInsulation: "High",
        soundInsulation: "Up to 38 dB",
        security: "Enhanced",
        maintenance: "Low"
    },
    colors: [
        "White",
        "Anthracite",
        "Golden Oak",
        "Walnut"
    ],
    applications: [
        "Apartments",
        "Houses",
        "Offices",
        "Renovation projects"
    ],
    featured: true,
    images: [
        "https://images.pexels.com/photos/19013702/pexels-photo-19013702.jpeg",
        "https://images.pexels.com/photos/1005477/pexels-photo-1005477.jpeg"
    ]
},

{
    id: 4,
    title: "Selenit 75 Strong",
    category: "Windows",
    type: "Casement",
    group: "Premium",
    material: "PVC",
    opening: "Tilt & Turn",
    slug: "selenit-75-strong",
    desc:
        "A reinforced version of the Selenit platform designed for projects requiring additional structural performance and long-term durability.",
    features: [
        "75 mm profile width",
        "Reinforced construction",
        "Enhanced wind resistance",
        "Improved structural strength",
        "Tilt & turn operation"
    ],
    performance: {
        thermalInsulation: "High",
        soundInsulation: "Up to 38 dB",
        security: "High",
        maintenance: "Low"
    },
    colors: [
        "White",
        "Anthracite",
        "Golden Oak"
    ],
    applications: [
        "Large residences",
        "High-rise apartments",
        "Commercial projects"
    ],
    featured: false,
    images: [
        "https://images.pexels.com/photos/31375756/pexels-photo-31375756.jpeg",
        "https://images.pexels.com/photos/37060539/pexels-photo-37060539.jpeg"
    ]
},

{
    id: 5,
    title: "Garnet 70",
    category: "Windows",
    type: "Casement",
    group: "Residential",
    material: "PVC",
    opening: "Tilt & Turn",
    slug: "garnet-70",
    desc:
        "A practical and versatile PVC window system designed to provide dependable performance for everyday residential applications.",
    features: [
        "70 mm profile width",
        "Multi-chamber construction",
        "Thermal insulation",
        "Sound reduction",
        "Easy maintenance"
    ],
    performance: {
        thermalInsulation: "Medium-High",
        soundInsulation: "Up to 36 dB",
        security: "Enhanced",
        maintenance: "Low"
    },
    colors: [
        "White",
        "Golden Oak",
        "Walnut"
    ],
    applications: [
        "Apartments",
        "Houses",
        "Renovations"
    ],
    featured: false,
    images: [
        "https://images.pexels.com/photos/28169025/pexels-photo-28169025.jpeg",
        "https://images.pexels.com/photos/30020797/pexels-photo-30020797.jpeg"
    ]
},

{
    id: 6,
    title: "Garnet 70 Selective",
    category: "Windows",
    type: "Casement",
    group: "Energy Efficient",
    material: "PVC",
    opening: "Tilt & Turn",
    slug: "garnet-70-selective",
    desc:
        "An energy-conscious window system combining practical PVC construction with glazing options designed to improve indoor comfort.",
    features: [
        "70 mm profile width",
        "Selective glazing compatibility",
        "Thermal insulation",
        "Reduced heat transfer",
        "Tilt & turn operation"
    ],
    performance: {
        thermalInsulation: "High",
        soundInsulation: "Up to 36 dB",
        security: "Enhanced",
        maintenance: "Low"
    },
    colors: [
        "White",
        "Anthracite",
        "Golden Oak"
    ],
    applications: [
        "Energy-conscious homes",
        "Apartments",
        "Renovation projects"
    ],
    featured: false,
    images: [
        "https://images.pexels.com/photos/31344221/pexels-photo-31344221.jpeg",
        "https://images.pexels.com/photos/20295564/pexels-photo-20295564.jpeg"
    ]
},

// =====================================================
// SLIDING WINDOWS & DOORS
// =====================================================

{
    id: 7,
    title: "Zenia Sliding System",
    category: "Windows",
    type: "Sliding",
    group: "Large Openings",
    material: "PVC",
    opening: "Sliding",
    slug: "zenia-sliding-system",
    desc:
        "A practical sliding system designed for balconies, terraces, and large openings where space-efficient operation is essential.",
    features: [
        "Sliding operation",
        "EPDM sealing",
        "Large opening capability",
        "Smooth operation",
        "Thermal insulation"
    ],
    performance: {
        thermalInsulation: "High",
        soundInsulation: "Up to 32 dB",
        security: "Enhanced",
        maintenance: "Low"
    },
    colors: [
        "White",
        "Anthracite",
        "Black",
        "Wood Effects"
    ],
    applications: [
        "Balconies",
        "Terraces",
        "Patios",
        "Large residential openings"
    ],
    featured: true,
    images: [
        "https://images.pexels.com/photos/4716777/pexels-photo-4716777.jpeg",
        "https://images.pexels.com/photos/34574609/pexels-photo-34574609.jpeg"
    ]
},

{
    id: 8,
    title: "Zenia Hebeschiebe",
    category: "Doors",
    type: "Lift & Slide",
    group: "Large Openings",
    material: "PVC",
    opening: "Lift & Slide",
    slug: "zenia-hebeschiebe",
    desc:
        "A premium lift-and-slide system designed for expansive architectural openings, combining smooth operation with high insulation performance.",
    features: [
        "Lift & slide operation",
        "Large glass areas",
        "High insulation",
        "Smooth movement",
        "Contemporary appearance"
    ],
    performance: {
        thermalInsulation: "Very High",
        soundInsulation: "Up to 40 dB",
        security: "High",
        maintenance: "Low"
    },
    colors: [
        "White",
        "Anthracite",
        "Black",
        "Wood Effects"
    ],
    applications: [
        "Luxury villas",
        "Modern houses",
        "Hotels",
        "Prestige projects"
    ],
    featured: true,
    images: [
        "https://images.pexels.com/photos/34574609/pexels-photo-34574609.jpeg",
        "https://images.pexels.com/photos/4716777/pexels-photo-4716777.jpeg"
    ]
},

// =====================================================
// DOORS
// =====================================================

{
    id: 9,
    title: "Modern Entrance Door",
    category: "Doors",
    type: "Entrance",
    group: "Residential",
    material: "PVC",
    opening: "Single Opening",
    slug: "modern-entrance-door",
    desc:
        "A contemporary entrance door designed to provide security, insulation, and a strong architectural first impression.",
    features: [
        "Reinforced frame",
        "Multi-point locking",
        "Thermal insulation",
        "Weather resistance",
        "Custom color options"
    ],
    performance: {
        thermalInsulation: "High",
        soundInsulation: "Up to 38 dB",
        security: "High",
        maintenance: "Low"
    },
    colors: [
        "White",
        "Anthracite",
        "Black",
        "Walnut"
    ],
    applications: [
        "Houses",
        "Villas",
        "Apartments"
    ],
    featured: true,
    images: [
        "https://images.pexels.com/photos/14473771/pexels-photo-14473771.jpeg",
        "https://images.pexels.com/photos/13011441/pexels-photo-13011441.jpeg"
    ]
},

{
    id: 10,
    title: "Balcony Door System",
    category: "Doors",
    type: "Balcony",
    group: "Residential",
    material: "PVC",
    opening: "Tilt & Turn",
    slug: "balcony-door-system",
    desc:
        "A versatile balcony door system designed to provide comfortable access to outdoor spaces while maintaining insulation and security.",
    features: [
        "Tilt & turn operation",
        "Multi-point locking",
        "Thermal insulation",
        "Slim visual lines",
        "Low maintenance"
    ],
    performance: {
        thermalInsulation: "High",
        soundInsulation: "Up to 38 dB",
        security: "Enhanced",
        maintenance: "Low"
    },
    colors: [
        "White",
        "Anthracite",
        "Golden Oak",
        "Walnut"
    ],
    applications: [
        "Balconies",
        "Terraces",
        "Apartments",
        "Houses"
    ],
    featured: false,
    images: [
        "https://images.pexels.com/photos/5571594/pexels-photo-5571594.jpeg",
        "https://images.pexels.com/photos/7446064/pexels-photo-7446064.jpeg"
    ]
},

{
    id: 11,
    title: "Sliding Patio Door",
    category: "Doors",
    type: "Patio",
    group: "Large Openings",
    material: "PVC",
    opening: "Sliding",
    slug: "sliding-patio-door",
    desc:
        "A spacious sliding door solution that connects interior living areas with balconies, patios, and gardens.",
    features: [
        "Wide opening",
        "Sliding operation",
        "Thermal insulation",
        "Weather resistance",
        "Large glazing areas"
    ],
    performance: {
        thermalInsulation: "High",
        soundInsulation: "Up to 32 dB",
        security: "Enhanced",
        maintenance: "Low"
    },
    colors: [
        "White",
        "Anthracite",
        "Black",
        "Wood Effects"
    ],
    applications: [
        "Patios",
        "Gardens",
        "Terraces",
        "Modern residences"
    ],
    featured: true,
    images: [
        "https://images.pexels.com/photos/4716777/pexels-photo-4716777.jpeg",
        "https://images.pexels.com/photos/10053931/pexels-photo-10053931.jpeg"
    ]
},

{
    id: 12,
    title: "French Door System",
    category: "Doors",
    type: "French",
    group: "Residential",
    material: "PVC",
    opening: "Double Opening",
    slug: "french-door-system",
    desc:
        "A classic double-door configuration adapted for contemporary homes, offering wide access and generous natural light.",
    features: [
        "Double opening",
        "Wide access",
        "Multi-point locking",
        "Thermal insulation",
        "Custom finishes"
    ],
    performance: {
        thermalInsulation: "High",
        soundInsulation: "Up to 38 dB",
        security: "Enhanced",
        maintenance: "Low"
    },
    colors: [
        "White",
        "Anthracite",
        "Golden Oak",
        "Walnut"
    ],
    applications: [
        "Living rooms",
        "Gardens",
        "Balconies",
        "Terraces"
    ],
    featured: false,
    images: [
        "https://images.pexels.com/photos/7446064/pexels-photo-7446064.jpeg",
        "https://images.pexels.com/photos/14788842/pexels-photo-14788842.jpeg"
    ]
},

// =====================================================
// SPECIAL WINDOW SYSTEMS
// =====================================================

{
    id: 13,
    title: "Guillotine Window",
    category: "Windows",
    type: "Guillotine",
    group: "Architectural",
    material: "PVC",
    opening: "Vertical Sliding",
    slug: "guillotine-window",
    desc:
        "A distinctive vertically sliding window system suited to architectural projects seeking a functional alternative to conventional openings.",
    features: [
        "Vertical sliding operation",
        "Space-saving design",
        "Large glass surfaces",
        "Contemporary appearance",
        "Custom configurations"
    ],
    performance: {
        thermalInsulation: "High",
        soundInsulation: "Up to 35 dB",
        security: "Enhanced",
        maintenance: "Low"
    },
    colors: [
        "White",
        "Anthracite",
        "Black"
    ],
    applications: [
        "Restaurants",
        "Terraces",
        "Modern homes",
        "Architectural projects"
    ],
    featured: true,
    images: [
        "https://images.pexels.com/photos/19013702/pexels-photo-19013702.jpeg",
        "https://images.pexels.com/photos/1005477/pexels-photo-1005477.jpeg"
    ]
},

{
    id: 14,
    title: "Outward Opening Window",
    category: "Windows",
    type: "Outward Opening",
    group: "Architectural",
    material: "PVC",
    opening: "Outward",
    slug: "outward-opening-window",
    desc:
        "An outward-opening window solution designed for architectural applications requiring an alternative opening direction and flexible ventilation.",
    features: [
        "Outward opening",
        "Flexible ventilation",
        "Architectural configuration",
        "Weather-resistant seals",
        "Custom dimensions"
    ],
    performance: {
        thermalInsulation: "High",
        soundInsulation: "Up to 35 dB",
        security: "Enhanced",
        maintenance: "Low"
    },
    colors: [
        "White",
        "Anthracite",
        "Black",
        "Wood Effects"
    ],
    applications: [
        "Commercial buildings",
        "Modern residences",
        "Architectural projects"
    ],
    featured: false,
    images: [
        "https://images.pexels.com/photos/28169025/pexels-photo-28169025.jpeg",
        "https://images.pexels.com/photos/31344221/pexels-photo-31344221.jpeg"
    ]
},

// =====================================================
// SHADING
// =====================================================

{
    id: 15,
    title: "Roller Shutter System",
    category: "Shading",
    type: "Roller Shutter",
    group: "Residential",
    material: "PVC",
    opening: "Rolling",
    slug: "roller-shutter-system",
    desc:
        "A practical shading and protection system designed to improve privacy, daylight control, and protection from external conditions.",
    features: [
        "External shading",
        "Privacy control",
        "Sun protection",
        "Weather protection",
        "Multiple color options"
    ],
    performance: {
        thermalInsulation: "Medium-High",
        soundInsulation: "Additional reduction",
        security: "Enhanced",
        maintenance: "Low"
    },
    colors: [
        "White",
        "Anthracite",
        "Beige",
        "Wood Effects"
    ],
    applications: [
        "Houses",
        "Apartments",
        "Offices",
        "Commercial buildings"
    ],
    featured: false,
    images: [
        "https://images.pexels.com/photos/20295564/pexels-photo-20295564.jpeg",
        "https://images.pexels.com/photos/31344221/pexels-photo-31344221.jpeg"
    ]
}

];

export default products;