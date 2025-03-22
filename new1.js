document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.querySelector(".search-btn");
    const clearBtn = document.querySelector(".clear-btn");
    const searchInput = document.querySelector(".search-box input");
    const searchResults = document.getElementById("search-results");

    // Define recommendations
    const recommendations = {
        "temple": [
            { name: "Angkor Wat", location: "Cambodia", image: "images/temple 2.jpg" },
            { name: "Meenakshi Temple", location: "India", image: "images/temple 1.jpg" }
        ],
        "beach": [
            { name: "Bora Bora", location: "French Polynesia", image: "images/beach2.jpg" },
            { name: "Maldives", location: "Indian Ocean", image: "images/beach1.jpg" }
        ],
        "country": [
            { name: "Thailand", description: "Known for its beautiful beaches and temples.", image: "images/country 1.jpg" },
            { name: "Greece", description: "Home to historical landmarks like the Colosseum and Venice.", image: "images/country 2.jpg" }
        ]
    };

    // Search button functionality
    searchBtn.addEventListener("click", function () {
        const query = searchInput.value.trim().toLowerCase();
        searchResults.innerHTML = ""; 
        searchResults.style.display = "none";

        if (query === "") {
            alert("Please enter a valid search keyword.");
            return;
        }

        let foundResults = [];

        // Search for recommendations
        Object.keys(recommendations).forEach(category => {
            recommendations[category].forEach(place => {
                if (place.name.toLowerCase().includes(query)) {
                    foundResults.push(place);
                }
            });
        });

        if (foundResults.length > 0) {
            displayResults(foundResults);
        } else {
            searchResults.innerHTML = "<p style='padding:10px;'>No matching recommendations found.</p>";
            searchResults.style.display = "block";
        }
    });

    // Clear button functionality
    clearBtn.addEventListener("click", function () {
        searchInput.value = "";
        searchResults.innerHTML = ""; 
        searchResults.style.display = "none"; 
    });

    function displayResults(results) {
        results.forEach(place => {
            const card = document.createElement("div");
            card.classList.add("result-card");

            card.innerHTML = `
                <img src="${place.image}" alt="${place.name}" style="width: 300px; height: 170px; border-radius: 5px;">
                <div>
                    <h4>${place.name}</h4>
                    <p>${place.location || place.description}</p>
                </div>
            `;

            searchResults.appendChild(card);
        });

        searchResults.style.display = "block";
    }

    document.addEventListener("click", function (event) {
        if (!document.querySelector(".search-box").contains(event.target)) {
            searchResults.style.display = "none";
        }
    });

    // Contact Form Submission
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); 
            alert("Message sent successfully!");
            contactForm.reset(); 
        });
    }
});
