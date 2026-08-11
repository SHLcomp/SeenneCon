const services = [
    {
        id: 1,
        title: "Custom Home Construction",
        description: "Building personalized homes with quality craftsmanship.",
        slug: "custom-home-construction",
        overview:
            "Complete residential construction services from planning and foundation to the final finishing touches, delivering high-quality custom homes built to last.",
        material: [
            "Concrete",
            "Structural Steel",
            "Lumber",
            "Brick",
            "Roofing Materials"
        ],
        benefits: [
            "Personalized floor plans",
            "High-quality craftsmanship",
            "Energy-efficient construction",
            "Long-lasting durability"
        ],
        performance: [
            "Average completion: 6-12 months",
            "Structural warranty included",
            "Energy-efficient construction standards",
            "Dedicated project supervision"
        ],
        gallery: [
            "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
            "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
            "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg"
        ],
        relatedProjects: [1, 5, 8],
        featured: true,
    },

    {
        id: 2,
        title: "Home Renovation",
        description: "Transforming existing spaces into modern, functional homes.",
        slug: "home-renovation",
        overview:
            "Transform outdated homes into modern, functional spaces with complete renovation and remodeling solutions.",
        material: [
            "Drywall",
            "Paint",
            "Flooring",
            "Cabinetry",
            "Insulation"
        ],
        benefits: [
            "Increase property value",
            "Improve functionality",
            "Modern finishes",
            "Customized designs"
        ],
        performance: [
            "Average completion: 4-12 weeks",
            "Minimal disruption planning",
            "Modern design integration",
            "Detailed finishing inspections"
        ],
        gallery: [
            "https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg",
            "https://images.pexels.com/photos/6474458/pexels-photo-6474458.jpeg",
            "https://images.pexels.com/photos/6474459/pexels-photo-6474459.jpeg"
        ],
        relatedProjects: [2, 6, 9],
        featured: true,
    },

    {
        id: 3,
        title: "Kitchen Remodeling",
        description: "Creating stylish kitchens designed for everyday living.",
        slug: "kitchen-remodeling",
        overview:
            "Create beautiful, efficient kitchens with custom layouts, premium cabinetry, countertops, and modern appliances.",
        material: [
            "Quartz Countertops",
            "Cabinets",
            "Tile",
            "Lighting Fixtures",
            "Hardwood Flooring"
        ],
        benefits: [
            "Better storage",
            "Improved workflow",
            "Modern appearance",
            "Higher resale value"
        ],
        performance: [
            "Average completion: 3-8 weeks",
            "Custom cabinetry installation",
            "Precision measurements and fitting",
            "High-quality finish inspection"
        ],
        gallery: [
            "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
            "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
            "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg"
        ],
        relatedProjects: [3, 10, 12],
        featured: true,
    },

    {
        id: 4,
        title: "Bathroom Remodeling",
        description: "Upgrading bathrooms with modern designs and finishes.",
        slug: "bathroom-remodeling",
        overview:
            "Upgrade bathrooms with stylish fixtures, waterproof finishes, custom showers, and optimized layouts.",
        material: [
            "Ceramic Tile",
            "Glass",
            "Vanities",
            "Waterproof Membranes",
            "Fixtures"
        ],
        benefits: [
            "Enhanced comfort",
            "Water-efficient fixtures",
            "Luxury finishes",
            "Improved accessibility"
        ],
        performance: [
            "Average completion: 2-6 weeks",
            "Waterproofing quality checks",
            "Professional fixture installation",
            "Long-lasting bathroom finishes"
        ],
        gallery: [
            "https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg",
            "https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg",
            "https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg"
        ],
        relatedProjects: [4, 11, 13],
        featured: true,
    },

    {
        id: 5,
        title: "Roof Installation & Repair",
        description: "Protecting properties with reliable roofing solutions.",
        slug: "roof-installation-repair",
        overview:
            "Professional roofing services including new installations, repairs, inspections, and long-term maintenance.",
        material: [
            "Asphalt Shingles",
            "Metal Roofing",
            "Flashing",
            "Underlayment",
            "Gutters"
        ],
        benefits: [
            "Weather protection",
            "Leak prevention",
            "Extended roof lifespan",
            "Improved energy efficiency"
        ],
        performance: [
            "Roof inspection before installation",
            "Weather-resistant materials",
            "Long-term leak protection",
            "Maintenance recommendations provided"
        ],
        gallery: [
            "https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg",
            "https://images.pexels.com/photos/7931/pexels-photo-7931.jpeg",
            "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg"
        ],
        relatedProjects: [5, 14, 15],
        featured: true,
    },

    {
        id: 6,
        title: "Commercial Construction",
        description: "Delivering professional spaces for growing businesses.",
        slug: "commercial-construction",
        overview:
            "Comprehensive commercial construction services for offices, retail spaces, restaurants, and other business facilities.",
        material: [
            "Concrete",
            "Steel",
            "Glass",
            "Aluminum",
            "Commercial Flooring"
        ],
        benefits: [
            "Efficient project management",
            "Code-compliant construction",
            "Scalable solutions",
            "Professional finishes"
        ],
        performance: [
            "Large-scale project management",
            "Compliance with building regulations",
            "Scheduled quality inspections",
            "Commercial-grade materials"
        ],
        gallery: [
            "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg",
            "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
            "https://images.pexels.com/photos/37347/office-sky-building-company.jpg"
        ],
        relatedProjects: [6, 16, 18],
        featured: true,
    },    {
        id: 7,
        title: "Room Additions",
        description: "Expanding homes with seamless new living spaces.",
        slug: "room-additions",
        overview:
            "Expand your living space with seamless home additions designed to match your existing architecture.",
        material: [
            "Concrete",
            "Framing Lumber",
            "Drywall",
            "Roofing",
            "Windows"
        ],
        benefits: [
            "More living space",
            "Increase home value",
            "Seamless integration",
            "Customized layouts"
        ],
        performance: [
            "Structural assessment included",
            "Seamless architectural integration",
            "Efficient construction timeline"
        ],
        gallery: [
            "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
            "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
        ],
        relatedProjects: [7, 19],
        featured: false,
    },

    {
        id: 8,
        title: "Exterior Remodeling",
        description: "Enhancing curb appeal with durable exterior upgrades.",
        slug: "exterior-remodeling",
        overview:
            "Enhance curb appeal through siding replacement, painting, trim work, and exterior upgrades.",
        material: [
            "Vinyl Siding",
            "Fiber Cement",
            "Exterior Paint",
            "Stone Veneer",
            "Trim"
        ],
        benefits: [
            "Better curb appeal",
            "Weather protection",
            "Lower maintenance",
            "Higher property value"
        ],
        performance: [
            "Weather-resistant exterior solutions",
            "Improved curb appeal",
            "Low-maintenance finishes"
        ],
        gallery: [
            "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
            "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg"
        ],
        relatedProjects: [8, 20],
        featured: false,
    },

    {
        id: 9,
        title: "Deck & Patio Construction",
        description: "Designing outdoor spaces built for comfort and style.",
        slug: "deck-patio-construction",
        overview:
            "Design and build beautiful outdoor living spaces that combine comfort, durability, and style.",
        material: [
            "Pressure-Treated Lumber",
            "Composite Decking",
            "Concrete",
            "Stone Pavers",
            "Railings"
        ],
        benefits: [
            "Expanded outdoor living",
            "Durable construction",
            "Low maintenance",
            "Ideal for entertaining"
        ],
        performance: [
            "Custom outdoor designs",
            "Durable outdoor materials",
            "Built for long-term use"
        ],
        gallery: [
            "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg",
            "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg"
        ],
        relatedProjects: [9, 21],
        featured: false,
    },

    {
        id: 10,
        title: "Concrete Services",
        description: "Providing strong and durable concrete solutions.",
        slug: "concrete-services",
        overview:
            "Professional concrete installation for driveways, sidewalks, foundations, patios, and retaining walls.",
        material: [
            "Concrete Mix",
            "Rebar",
            "Gravel",
            "Expansion Joints",
            "Sealants"
        ],
        benefits: [
            "Long-lasting durability",
            "Smooth finish",
            "Minimal maintenance",
            "Structural strength"
        ],
        performance: [
            "Professional surface preparation",
            "Reinforced structural strength",
            "Long-lasting concrete finishes"
        ],
        gallery: [
            "https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg",
            "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg"
        ],
        relatedProjects: [10, 22],
        featured: false,
    },

    {
        id: 11,
        title: "Flooring Installation",
        description: "Installing beautiful floors with precision and care.",
        slug: "flooring-installation",
        overview:
            "Expert installation of hardwood, laminate, tile, vinyl, and engineered flooring for residential and commercial spaces.",
        material: [
            "Hardwood",
            "Laminate",
            "Luxury Vinyl",
            "Tile",
            "Engineered Wood"
        ],
        benefits: [
            "Professional installation",
            "Wide material selection",
            "Improved aesthetics",
            "Long-lasting finish"
        ],
        performance: [
            "Professional material preparation",
            "Precision installation",
            "Clean finishing process"
        ],
        gallery: [
            "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg",
            "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg"
        ],
        relatedProjects: [11, 23],
        featured: false,
    },

    {
        id: 12,
        title: "Painting & Finishing",
        description: "Adding quality finishes that refresh every space.",
        slug: "painting-finishing",
        overview:
            "Interior and exterior painting services with premium finishes that refresh and protect every surface.",
        material: [
            "Primer",
            "Interior Paint",
            "Exterior Paint",
            "Protective Coatings",
            "Sealants"
        ],
        benefits: [
            "Fresh modern appearance",
            "Surface protection",
            "High-quality finishes",
            "Improved property value"
        ],
        performance: [
            "Surface preparation included",
            "Premium paint application",
            "Clean professional finishing"
        ],
        gallery: [
            "https://images.pexels.com/photos/6474459/pexels-photo-6474459.jpeg",
            "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg"
        ],
        relatedProjects: [12, 24],
        featured: false,
    }
];

export default services;