$(document).ready(function () {
    const projects = [
        {
            name: "Password Repository",
            description: "A secure, encrypted password management system designed to safely store and manage users' login credentials. Features include password generation, two-factor authentication, and data encryption to ensure maximum security.",
            link: ""
        },
        {
            name: "Margot Database System",
            description: "A robust database management system built to handle large-scale data storage, retrieval, and manipulation. The system supports complex queries, data indexing, and user-friendly interfaces for managing vast datasets.",
            link: "https://github.com/jayzeld/Margot_System"
        },
        {
            name: "RPG Turn-based Game",
            description: "A text-based RPG game that immerses players in a fantasy world, featuring engaging storylines, character development, and strategic gameplay. The game includes multiple quests, combat mechanics, and options for player choices",
            link: "https://github.com/jyzldmrct/Activity_2"
        }

    ];

    projects.forEach(project => {
        $('#projects-container').append(`
            <div class="project">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            </div>
        `);
    });


});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate inputs
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Create data object
    const formData = new URLSearchParams();
    formData.append("name", name); // Match these names with your Apps Script
    formData.append("email", email);
    formData.append("message", message);

    // Send data to Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbx-x_VdBigXlAGHU4SRGO_W_AFFLmzw0QKJXyLFkOkucyu9Lpef_18r1dhAE5J4k2JQ/exec", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
        .then((response) => response.json())
        .then((data) => {
            // Clear the previous message
            document.getElementById("responseMessage").innerText = "";

            if (data.result === "success") {
                document.getElementById("responseMessage").innerText = "Your message has been sent!";
                document.getElementById("contactForm").reset(); // Reset form
            } else {
                document.getElementById("responseMessage").innerText = "There was an error sending your message.";
            }
        })
        .catch((error) => {
            document.getElementById("responseMessage").innerText = "There was an error sending your message.";
            console.error("Error:", error);
        });
});


