const questions = [

    // =====================================================
    // 1. HOSPITAL OPERATING ROOM
    // =====================================================

    {
        id: 1,
        application: "Hospital Operating Room",
        question: "Which lighting characteristic is most important in an operating room?",
        options: [
            "High colour rendering and shadow-free illumination",
            "Very low light output",
            "Strong coloured lighting",
            "Decorative lighting only"
        ],
        answer: 0,
        explanation: "Operating rooms require high-quality, shadow-free illumination and accurate colour rendering."
    },

    {
        id: 2,
        application: "Hospital Operating Room",
        question: "Why is high CRI lighting preferred in an operating room?",
        options: [
            "To accurately distinguish tissue and colours",
            "To increase decorative effect",
            "To reduce the room temperature",
            "To produce coloured shadows"
        ],
        answer: 0,
        explanation: "High CRI lighting helps medical professionals distinguish colours and tissue accurately."
    },

    {
        id: 3,
        application: "Hospital Operating Room",
        question: "Which problem should operating-room lighting particularly minimize?",
        options: [
            "Shadows and glare",
            "Colour rendering",
            "Illumination",
            "Visibility"
        ],
        answer: 0,
        explanation: "Minimizing shadows and glare is essential for clear visibility during medical procedures."
    },


    // =====================================================
    // 2. HOSPITAL PATIENT ROOM
    // =====================================================

    {
        id: 4,
        application: "Hospital Patient Room",
        question: "Which type of lighting is most suitable for a comfortable hospital patient room?",
        options: [
            "Soft, comfortable and adjustable lighting",
            "Extremely bright floodlighting",
            "High-intensity stadium lighting",
            "Uncontrolled coloured lighting"
        ],
        answer: 0,
        explanation: "Patient rooms require comfortable lighting that can be adjusted according to the patient's needs."
    },

    {
        id: 5,
        application: "Hospital Patient Room",
        question: "What is an advantage of tunable-white lighting in a patient room?",
        options: [
            "The colour temperature can be adjusted",
            "It produces only red light",
            "It requires no electrical supply",
            "It works only outdoors"
        ],
        answer: 0,
        explanation: "Tunable-white lighting allows the colour temperature to be adjusted for different situations."
    },

    {
        id: 6,
        application: "Hospital Patient Room",
        question: "Which lighting approach helps reduce discomfort for patients?",
        options: [
            "Low-glare indirect illumination",
            "Direct high-intensity glare",
            "Unshielded floodlights",
            "Stadium floodlighting"
        ],
        answer: 0,
        explanation: "Indirect and low-glare lighting provides a more comfortable environment for patients."
    },


    // =====================================================
    // 3. RESIDENTIAL LIVING ROOM
    // =====================================================

    {
        id: 7,
        application: "Residential Living Room",
        question: "Which lighting is generally suitable for a comfortable residential living room?",
        options: [
            "Warm, dimmable LED lighting",
            "Industrial high-bay lighting",
            "Stadium floodlighting",
            "Roadway lighting"
        ],
        answer: 0,
        explanation: "Warm and dimmable lighting is commonly used to create a comfortable residential environment."
    },

    {
        id: 8,
        application: "Residential Living Room",
        question: "What is a major advantage of dimmable lighting in a living room?",
        options: [
            "Light level can be adjusted according to activity",
            "It always operates at maximum brightness",
            "It eliminates the need for switches",
            "It produces only coloured light"
        ],
        answer: 0,
        explanation: "Dimming allows the illumination level to be adjusted for different activities and moods."
    },

    {
        id: 9,
        application: "Residential Living Room",
        question: "Which characteristic is desirable for comfortable living-room lighting?",
        options: [
            "Low glare",
            "Extremely narrow road optics",
            "Very high industrial mounting height",
            "Strong directional vehicle beams"
        ],
        answer: 0,
        explanation: "Low-glare lighting improves visual comfort in residential spaces."
    },


    // =====================================================
    // 4. STADIUM / SPORTS FIELD
    // =====================================================

    {
        id: 10,
        application: "Stadium / Sports Field",
        question: "Which lighting system is suitable for illuminating a large sports field?",
        options: [
            "High-output LED floodlights",
            "Small stairwell lamps",
            "Residential night lamps",
            "Underwater pool lamps"
        ],
        answer: 0,
        explanation: "High-output floodlights provide the large amount of illumination required for sports fields."
    },

    {
        id: 11,
        application: "Stadium / Sports Field",
        question: "Why are narrow-beam floodlights useful in stadium lighting?",
        options: [
            "They direct high-intensity light toward the playing area",
            "They eliminate all illumination",
            "They are designed only for bedrooms",
            "They operate only underwater"
        ],
        answer: 0,
        explanation: "Narrow-beam optics help direct high-intensity light efficiently toward the playing surface."
    },

    {
        id: 12,
        application: "Stadium / Sports Field",
        question: "Which requirement is particularly important for televised sports?",
        options: [
            "Uniform and adequate illumination",
            "Random coloured lighting",
            "Very low illumination",
            "Complete darkness around the field"
        ],
        answer: 0,
        explanation: "Uniform and adequate illumination is important for players, spectators and television cameras."
    },


    // =====================================================
    // 5. STREET / HIGHWAY
    // =====================================================

    {
        id: 13,
        application: "Street / Highway",
        question: "Which lighting system is commonly used for modern street and highway lighting?",
        options: [
            "LED street lighting",
            "Stage spotlights",
            "Underwater lamps",
            "Residential table lamps"
        ],
        answer: 0,
        explanation: "LED street lighting is widely used because of its efficiency, controllability and directional optics."
    },

    {
        id: 14,
        application: "Street / Highway",
        question: "Why are cutoff optics useful in street lighting?",
        options: [
            "They help control glare and unwanted light",
            "They increase underwater pressure",
            "They create stage effects",
            "They produce coloured shadows"
        ],
        answer: 0,
        explanation: "Cutoff optics help direct light toward the road while reducing unwanted glare and spill."
    },

    {
        id: 15,
        application: "Street / Highway",
        question: "Which light distribution is desirable for illuminating a long roadway?",
        options: [
            "Wide asymmetric distribution",
            "Only a small circular spot",
            "Random upward illumination",
            "Only downward illumination at one point"
        ],
        answer: 0,
        explanation: "Wide asymmetric distribution helps illuminate the roadway over a useful length and width."
    },


    // =====================================================
    // 6. VEHICLE HEADLIGHT
    // =====================================================

    {
        id: 16,
        application: "Vehicle Headlight",
        question: "What is the main purpose of a vehicle headlight?",
        options: [
            "To illuminate the road ahead",
            "To illuminate a swimming pool",
            "To light a warehouse ceiling",
            "To illuminate a billboard"
        ],
        answer: 0,
        explanation: "Vehicle headlights provide forward illumination so the driver can see the road."
    },

    {
        id: 17,
        application: "Vehicle Headlight",
        question: "What is an important advantage of matrix LED headlights?",
        options: [
            "They can adapt the illuminated beam pattern",
            "They are designed only for indoor use",
            "They require no electrical power",
            "They work only underwater"
        ],
        answer: 0,
        explanation: "Matrix LED systems can control different parts of the beam to adapt illumination to driving conditions."
    },

    {
        id: 18,
        application: "Vehicle Headlight",
        question: "Why is glare control important in vehicle headlights?",
        options: [
            "To avoid disturbing oncoming drivers",
            "To increase glare toward other drivers",
            "To reduce road visibility",
            "To illuminate the vehicle interior"
        ],
        answer: 0,
        explanation: "Proper beam control reduces glare and improves safety for other road users."
    },


    // =====================================================
    // 7. SWIMMING POOL
    // =====================================================

    {
        id: 19,
        application: "Swimming Pool (Underwater)",
        question: "Which protection rating is particularly suitable for underwater lighting?",
        options: [
            "IP68",
            "IP20",
            "IP00",
            "IP10"
        ],
        answer: 0,
        explanation: "IP68 provides a high level of protection against water ingress and is suitable for suitable underwater fixtures."
    },

    {
        id: 20,
        application: "Swimming Pool (Underwater)",
        question: "Why are low-voltage sealed LED lamps preferred for many underwater applications?",
        options: [
            "For improved electrical safety and water protection",
            "Because they require no enclosure",
            "Because they produce only heat",
            "Because they are designed for roadways"
        ],
        answer: 0,
        explanation: "Sealed low-voltage fixtures provide appropriate electrical safety and protection for underwater environments."
    },

    {
        id: 21,
        application: "Swimming Pool (Underwater)",
        question: "What is essential for a light installed underwater?",
        options: [
            "A properly sealed and water-resistant enclosure",
            "An open electrical terminal",
            "A paper enclosure",
            "An unprotected filament"
        ],
        answer: 0,
        explanation: "Underwater fixtures must be properly sealed and designed to prevent water from reaching electrical components."
    },


    // =====================================================
    // 8. AUDITORIUM STAGE
    // =====================================================

    {
        id: 22,
        application: "Auditorium Stage",
        question: "Which type of lighting is commonly used to focus light on performers?",
        options: [
            "Stage spotlights",
            "Street lamps",
            "Underwater lamps",
            "Warehouse high-bay lamps"
        ],
        answer: 0,
        explanation: "Stage spotlights are designed to provide controlled directional illumination for performers."
    },

    {
        id: 23,
        application: "Auditorium Stage",
        question: "What is the purpose of DMX control in stage lighting?",
        options: [
            "To control lighting fixtures electronically",
            "To provide water resistance",
            "To increase road traction",
            "To measure electrical energy consumption"
        ],
        answer: 0,
        explanation: "DMX is widely used for electronic control of stage lighting fixtures and their parameters."
    },

    {
        id: 24,
        application: "Auditorium Stage",
        question: "Which feature allows a stage light to create different lighting effects?",
        options: [
            "Adjustable intensity and beam control",
            "Fixed underwater sealing only",
            "Roadway cutoff only",
            "High-bay mounting only"
        ],
        answer: 0,
        explanation: "Stage fixtures can provide adjustable intensity and beam control for different theatrical effects."
    },


    // =====================================================
    // 9. STAIRS / STAIRWELL
    // =====================================================

    {
        id: 25,
        application: "Stairs / Stairwell",
        question: "What is the main purpose of lighting on stairs?",
        options: [
            "To clearly illuminate the steps",
            "To illuminate a sports field",
            "To illuminate vehicle headlights",
            "To illuminate underwater surfaces"
        ],
        answer: 0,
        explanation: "Stair lighting should make the treads and changes in level clearly visible."
    },

    {
        id: 26,
        application: "Stairs / Stairwell",
        question: "Which type of fixture is suitable for highlighting individual stair treads?",
        options: [
            "Recessed LED step light",
            "High-output stadium floodlight",
            "Vehicle headlight",
            "Warehouse high-bay lamp"
        ],
        answer: 0,
        explanation: "Recessed step lights can provide focused illumination directly around stair treads."
    },

    {
        id: 27,
        application: "Stairs / Stairwell",
        question: "Which lighting characteristic is desirable in a stairwell?",
        options: [
            "Adequate illumination with low glare",
            "Extreme glare",
            "Very low visibility",
            "Random flashing light"
        ],
        answer: 0,
        explanation: "Adequate, low-glare illumination improves safety and visibility on stairs."
    },


    // =====================================================
    // 10. HOARDING / BILLBOARD
    // =====================================================

    {
        id: 28,
        application: "Hoarding / Billboard",
        question: "What is the main purpose of lighting a billboard at night?",
        options: [
            "To make the advertisement clearly visible",
            "To illuminate a swimming pool",
            "To illuminate stair treads",
            "To provide vehicle headlight control"
        ],
        answer: 0,
        explanation: "Billboard lighting improves the visibility and readability of advertisements during low-light conditions."
    },

    {
        id: 29,
        application: "Hoarding / Billboard",
        question: "Which lighting characteristic helps illuminate a large billboard uniformly?",
        options: [
            "Wide and controlled light distribution",
            "A tiny concentrated beam only",
            "Random upward light",
            "Uncontrolled flashing light"
        ],
        answer: 0,
        explanation: "Controlled wide distribution helps provide more uniform illumination across a large advertising surface."
    },

    {
        id: 30,
        application: "Hoarding / Billboard",
        question: "Which fixture can be used for controlled illumination of a large vertical advertising surface?",
        options: [
            "LED wall-washer",
            "Recessed stair light",
            "Vehicle headlight",
            "Underwater pool lamp"
        ],
        answer: 0,
        explanation: "Wall-washer fixtures are designed to spread light across vertical surfaces."
    },


    // =====================================================
    // 11. INDUSTRIAL WAREHOUSE
    // =====================================================

    {
        id: 31,
        application: "Industrial Warehouse",
        question: "Which lighting fixture is commonly used in warehouses with high ceilings?",
        options: [
            "High-bay LED fixture",
            "Underwater LED lamp",
            "Stage spotlight",
            "Vehicle headlight"
        ],
        answer: 0,
        explanation: "High-bay fixtures are specifically designed for spaces with high mounting heights."
    },

    {
        id: 32,
        application: "Industrial Warehouse",
        question: "Why are high-bay lights suitable for warehouses?",
        options: [
            "They provide high-output illumination from greater mounting heights",
            "They operate only underwater",
            "They are designed for vehicle headlights",
            "They provide only decorative illumination"
        ],
        answer: 0,
        explanation: "High-bay fixtures provide suitable light output and distribution for high-ceiling industrial spaces."
    },

    {
        id: 33,
        application: "Industrial Warehouse",
        question: "Which factor is important when selecting warehouse lighting?",
        options: [
            "Mounting height and required illumination",
            "Swimming depth",
            "Vehicle speed",
            "Stage performance"
        ],
        answer: 0,
        explanation: "Mounting height and required illumination are important when selecting appropriate industrial lighting."
    },


    // =====================================================
    // 12. RETAIL DISPLAY WINDOW
    // =====================================================

    {
        id: 34,
        application: "Retail Display Window",
        question: "Which lighting is suitable for highlighting products in a retail display?",
        options: [
            "Adjustable high-CRI LED spotlights",
            "Industrial high-bay lamps only",
            "Underwater lamps",
            "Roadway lamps"
        ],
        answer: 0,
        explanation: "Adjustable high-CRI LED spotlights can highlight products while maintaining good colour appearance."
    },

    {
        id: 35,
        application: "Retail Display Window",
        question: "Why is high CRI useful in retail display lighting?",
        options: [
            "It makes product colours appear more accurately",
            "It increases water resistance",
            "It reduces road glare",
            "It increases mounting height"
        ],
        answer: 0,
        explanation: "High CRI lighting helps products appear closer to their actual colours."
    },

    {
        id: 36,
        application: "Retail Display Window",
        question: "Which beam characteristic is useful for highlighting a specific product?",
        options: [
            "Narrow and adjustable beam",
            "Uncontrolled upward beam",
            "Very wide road distribution",
            "Underwater beam"
        ],
        answer: 0,
        explanation: "A narrow, adjustable beam can focus light precisely on selected merchandise."
    }

];
// Distribute correct answers across A, B, C and D
// without randomizing them on every attempt.

questions.forEach((question) => {

    const shift = (question.id - 1) % 4;

    question.options = [
        ...question.options.slice(shift),
        ...question.options.slice(0, shift)
    ];

    question.answer =
        (question.answer - shift + question.options.length)
        % question.options.length;

});