const projects = [
{
id: 1,
title: "Modern Family Residence",
category: "Residential",
desc:
"A contemporary family residence designed around open living spaces, natural light, and a seamless connection between indoor and outdoor areas.",
slug: "modern-family-residence",
location: "Amman, Jordan",
year: "2025",
services: [
"Custom Home Construction",
"Interior Finishing",
"Flooring Installation",
"Painting & Finishing"
],
featured: true,
images: [
"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
"https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
"https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg"
]
},
{
    id: 2,
    title: "Contemporary Home Renovation",
    category: "Residential",
    desc:
        "A complete residential renovation transforming an outdated property into a modern, comfortable, and highly functional home.",
    slug: "contemporary-home-renovation",
    location: "Amman, Jordan",
    year: "2025",
    services: [
        "Home Renovation",
        "Kitchen Remodeling",
        "Bathroom Remodeling",
        "Painting & Finishing"
    ],
    featured: true,
    images: [
        "https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg",
        "https://images.pexels.com/photos/6474458/pexels-photo-6474458.jpeg",
        "https://images.pexels.com/photos/6474459/pexels-photo-6474459.jpeg"
    ]
},

{
    id: 3,
    title: "Luxury Kitchen Transformation",
    category: "Residential",
    desc:
        "A refined kitchen renovation combining custom cabinetry, premium surfaces, modern lighting, and an efficient layout designed for everyday living.",
    slug: "luxury-kitchen-transformation",
    location: "Amman, Jordan",
    year: "2025",
    services: [
        "Kitchen Remodeling",
        "Flooring Installation",
        "Painting & Finishing"
    ],
    featured: true,
    images: [
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
        "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
        "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg"
    ]
},

{
    id: 4,
    title: "Modern Spa Bathroom",
    category: "Residential",
    desc:
        "A complete bathroom transformation featuring contemporary fixtures, refined tilework, custom storage, and a clean spa-inspired aesthetic.",
    slug: "modern-spa-bathroom",
    location: "Amman, Jordan",
    year: "2025",
    services: [
        "Bathroom Remodeling",
        "Flooring Installation",
        "Painting & Finishing"
    ],
    featured: true,
    images: [
        "https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg",
        "https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg",
        "https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg"
    ]
},

{
    id: 5,
    title: "Private Residence Roof Upgrade",
    category: "Residential",
    desc:
        "A comprehensive roofing project focused on improving weather protection, durability, drainage, and the overall performance of the property.",
    slug: "private-residence-roof-upgrade",
    location: "Amman, Jordan",
    year: "2024",
    services: [
        "Roof Installation & Repair",
        "Exterior Remodeling"
    ],
    featured: true,
    images: [
        "https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg",
        "https://images.pexels.com/photos/7931/pexels-photo-7931.jpeg",
        "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg"
    ]
},

{
    id: 6,
    title: "Corporate Office Development",
    category: "Commercial",
    desc:
        "A professional commercial space designed to support collaboration, productivity, and a strong corporate identity through thoughtful planning and high-quality construction.",
    slug: "corporate-office-development",
    location: "Amman, Jordan",
    year: "2024",
    services: [
        "Commercial Construction",
        "Flooring Installation",
        "Painting & Finishing"
    ],
    featured: true,
    images: [
        "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg",
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
        "https://images.pexels.com/photos/37347/office-sky-building-company.jpg"
    ]
},

{
    id: 7,
    title: "Expanded Family Home",
    category: "Residential",
    desc:
        "A carefully integrated home addition that creates additional living space while maintaining the architectural character of the existing residence.",
    slug: "expanded-family-home",
    location: "Amman, Jordan",
    year: "2024",
    services: [
        "Room Additions",
        "Custom Home Construction",
        "Roof Installation & Repair"
    ],
    featured: false,
    images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
    ]
},

{
    id: 8,
    title: "Contemporary Exterior Renovation",
    category: "Residential",
    desc:
        "An exterior transformation focused on improving curb appeal, weather resistance, and the visual character of an existing property.",
    slug: "contemporary-exterior-renovation",
    location: "Amman, Jordan",
    year: "2024",
    services: [
        "Exterior Remodeling",
        "Painting & Finishing",
        "Roof Installation & Repair"
    ],
    featured: false,
    images: [
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
        "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg"
    ]
},

{
    id: 9,
    title: "Private Garden Deck",
    category: "Outdoor",
    desc:
        "A custom outdoor living area designed to extend the home's usable space and create a comfortable setting for entertaining and relaxation.",
    slug: "private-garden-deck",
    location: "Amman, Jordan",
    year: "2024",
    services: [
        "Deck & Patio Construction",
        "Concrete Services",
        "Exterior Remodeling"
    ],
    featured: false,
    images: [
        "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg",
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg"
    ]
},

{
    id: 10,
    title: "Residential Concrete Works",
    category: "Residential",
    desc:
        "Structural and decorative concrete work completed to provide durable foundations, pathways, and outdoor surfaces.",
    slug: "residential-concrete-works",
    location: "Amman, Jordan",
    year: "2024",
    services: [
        "Concrete Services",
        "Deck & Patio Construction"
    ],
    featured: false,
    images: [
        "https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg",
        "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg"
    ]
},

{
    id: 11,
    title: "Oak Flooring Installation",
    category: "Residential",
    desc:
        "A precision flooring installation using high-quality materials to create a warm, durable, and cohesive interior finish.",
    slug: "oak-flooring-installation",
    location: "Amman, Jordan",
    year: "2024",
    services: [
        "Flooring Installation",
        "Painting & Finishing"
    ],
    featured: false,
    images: [
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg",
        "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg"
    ]
},

{
    id: 12,
    title: "Full Interior Refresh",
    category: "Residential",
    desc:
        "A coordinated interior finishing project combining fresh paint, refined surfaces, and carefully selected materials to refresh the entire home.",
    slug: "full-interior-refresh",
    location: "Amman, Jordan",
    year: "2024",
    services: [
        "Painting & Finishing",
        "Flooring Installation",
        "Home Renovation"
    ],
    featured: false,
    images: [
        "https://images.pexels.com/photos/6474459/pexels-photo-6474459.jpeg",
        "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg"
    ]
}

];

export default projects;
