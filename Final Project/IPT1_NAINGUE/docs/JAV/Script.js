console.log("JavaScript connected!");

const details = {
    "emergency-response": {
        title: "Emergency Response Application",
        description: "An application designed for managing emergency situations efficiently with real-time data and alerts."
    },
    "call-tracker": {
        title: "Call Tracker",
        description: "A tool for tracking and managing calls in a customer support environment."
    },
    "basic-math": {
        title: "Basic Math Website",
        description: "A website that offers interactive tools to solve basic math problems."
    },
    "library-system": {
        title: "Library System",
        description: "A system for managing library inventory, borrowing, and returns."
    },
    "login-register": {
        title: "Login Register System",
        description: "A secure system for user authentication and registration."
    },
    "html": {
        title: "HTML",
        description: "The standard markup language for creating web pages and web applications."
    },
    "javascript": {
        title: "JavaScript",
        description: "A versatile programming language used for interactive web functionality."
    },
    "css": {
        title: "CSS",
        description: "A language for styling and laying out web pages."
    },
    "cisco": {
        title: "Cisco Packet Tracer",
        description: "A network simulation tool used for designing and testing network setups."
    }
};

document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", () => {
        const id = box.getAttribute("data-id");
        const detail = details[id];

        document.getElementById("detail-title").innerText = detail.title;
        document.getElementById("detail-description").innerText = detail.description;

      
        document.getElementById("detail-page").style.display = "flex";
    });
});


document.getElementById("back-button").addEventListener("click", () => {

    document.getElementById("detail-page").style.display = "none";
});
