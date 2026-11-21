const destinations = {

    veeranarayana: {
        name: "Veeranarayana Temple",
        location: "Veeranarayana Temple, Gadag, Karnataka",
        image: "images/veeranarayana.jpg",
        video: "videos/veeranarayana.mp4",

        description: `Veeranarayana Temple is an important historical
        Vaishnava temple in Gadag. Traditionally, it is believed to
        have been built around 1117 AD by Hoysala King Vishnuvardhana.
        The temple beautifully combines Chalukya, Hoysala and
        Vijayanagara architectural styles. Its main deity is Lord
        Narayana (Vishnu). The temple is also associated with the
        Kannada poet Kumaravyasa and his literary work.`,

        food: "Explore food outlets and restaurants in Gadag city.",
        hospital: "Search for hospitals and medical facilities in Gadag."
    },

    trikuteshwara: {
        name: "Trikuteshwara Temple",
        location: "Trikuteshwara Temple, Gadag, Karnataka",
        image: "images/trikuteshwara.jpg",
        video: "videos/trikuteshwara.mp4",

        description: `Trikuteshwara Temple is a significant example
        of Kalyana Chalukya architecture. The temple complex is
        known for its intricate stone carvings, decorative pillars
        and sculptures. Its main shrine is associated with three
        Shiva Lingas representing the Hindu Trinity of Brahma,
        Vishnu and Shiva. The nearby Saraswati shrine is also
        noted for its remarkable craftsmanship.`,

        food: "Explore restaurants and local food outlets near Trikuteshwara Temple.",
        hospital: "Search for hospitals and medical facilities near Gadag city."
    },

    lakkundi: {
        name: "Lakkundi",
        location: "Lakkundi, Gadag district, Karnataka",
        image: "images/lakkundi.jpg",
        video: "videos/lakkundi.mp4",

        description: `Lakkundi is a historic village located
        approximately 11 kilometres south-east of Gadag. It is
        famous for its ancient temples, inscriptions and beautifully
        constructed stepped wells known as Kalyanis. The village
        contains important examples of Kalyana Chalukya architecture,
        including the Kashi Vishwanatha Temple and Brahma Jinalaya.
        Lakkundi is an important destination for visitors interested
        in Karnataka's architectural and Jain heritage.`,

        food: "Explore restaurants and food facilities near Lakkundi.",
        hospital: "Search for hospitals and medical facilities near Lakkundi."
    },

    dambal: {
        name: "Dambal",
        location: "Dambal, Gadag district, Karnataka",
        image: "images/dambal.jpg",
        video: "videos/dambal.mp4",

        description: `Dambal is a historical village in Gadag
        district known for its ancient temple heritage. The
        Dodda Basappa Temple is one of its important attractions.
        The temple is associated with the Kalyana Chalukya period
        and is particularly known for its distinctive star-shaped
        architectural plan and detailed stone carvings. Dambal
        offers visitors an opportunity to explore the architectural
        heritage of the region.`,

        food: "Explore food outlets and restaurants near Dambal.",
        hospital: "Search for hospitals and medical facilities near Dambal."
    },

    magadi: {
        name: "Magadi Bird Sanctuary",
        location: "Magadi Bird Sanctuary, Gadag district, Karnataka",
        image: "images/magadi.jpg",
        video: "videos/magadi.mp4",

        description: `Magadi Bird Sanctuary is a natural attraction
        associated with the Magadi reservoir in Gadag district.
        It is known for migratory birds, particularly the
        Bar-headed Goose. The reservoir and its surrounding
        agricultural landscape provide an important habitat
        for birdlife. It is an interesting destination for
        nature lovers, birdwatchers and photography enthusiasts.`,

        food: "Explore food facilities around Magadi and nearby villages.",
        hospital: "Search for hospitals around Magadi and nearby towns."
    },

    bhishma: {
        name: "Bhishma Lake – Basaveshwara Statue",
        location: "Bhishma Lake and Basaveshwara Statue, Gadag, Karnataka",
        image: "images/bhishma.jpg",
        video: "videos/bhishma.mp4",

        description: `Bhishma Lake is a popular visitor attraction
        in Gadag, associated with the large statue of social reformer
        Shri Basaveshwara. The statue is described by the Gadag
        district administration as 116.7 feet tall. The surrounding
        park, lake, sculptures and visitor facilities make this
        location an important place to explore. Basaveshwara is
        remembered for his contributions to social equality and
        Vachana literature.`,

        food: "Explore restaurants and food facilities near Bhishma Lake.",
        hospital: "Search for hospitals and medical facilities in Gadag."
    }
};


// Read selected destination from URL
const params = new URLSearchParams(window.location.search);
const placeId = params.get("place");
const place = destinations[placeId];

if (place) {

    document.title = place.name + " | Explore Gadag";

    document.getElementById("placeName").textContent = place.name;
    document.getElementById("placeLocation").textContent = place.location;
    document.getElementById("locationText").textContent = place.location;
    document.getElementById("placeDescription").textContent = place.description;
    document.getElementById("foodDescription").textContent = place.food;
    document.getElementById("hospitalDescription").textContent = place.hospital;

    // Display destination photograph
    const image = document.getElementById("placeImage");

    image.src = place.image;

    image.onerror = function() {
        this.alt = "Photograph not added yet for " + place.name;
        this.parentElement.classList.add("image-missing");
        this.style.display = "none";

        const message = document.createElement("p");
        message.textContent = "Destination photograph: " + place.name +
            ". Add the correct image file to the images folder.";
        this.parentElement.appendChild(message);
    };

    // Display local destination video
    const video = document.getElementById("placeVideo");
    const videoSource = document.getElementById("videoSource");
    const videoMessage = document.getElementById("videoMessage");

    videoSource.src = place.video;
    video.load();

    video.addEventListener("error", function() {
        video.style.display = "none";
        videoMessage.textContent =
            "The video for " + place.name +
            " has not been added. Place the MP4 file in the videos folder.";
    });

    // Google Maps destination link
    document.getElementById("mapLink").href =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(place.location);

    // Nearby restaurants
    document.getElementById("foodLink").href =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent("Restaurants near " + place.location);

    // Nearby hospitals
    document.getElementById("hospitalLink").href =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent("Hospitals near " + place.location);

} else {

    document.querySelector("main").innerHTML = `
        <section class="details-card">
            <h2>Destination Not Found</h2>
            <p>Please return to the homepage and select a valid destination.</p>
            <a href="index.html" class="action-button">Back to Home</a>
        </section>
    `;
}