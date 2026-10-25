
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("register-form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            if (!form.checkValidity()) {
                alert("Please fill out all required fields correctly (Check Phone, Email & Student ID pattern)!");
                return; 
            }
            const firstName = document.getElementById("fname").value.trim();
            const lastName = document.getElementById("lname").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();
            const studentId = document.getElementById("std-id").value.trim();
            const department = document.getElementById("department").value.trim();
            const semester = document.getElementById("semester").value;
            const eventSelect = document.getElementById("event");
            const eventName = eventSelect.options[eventSelect.selectedIndex].text;

            console.log("--- New Registration Data ---");
            console.log("First Name:", firstName);
            console.log("Last Name:", lastName);
            console.log("Phone:", phone);
            console.log("Email:", email);
            console.log("Student ID:", studentId);
            console.log("Department:", department);
            console.log("Semester:", semester);
            console.log("Selected Event:", eventName);

            alert(`Thank you, ${firstName} ${lastName}! Your registration for the QU Club event has been successfully submitted.`);
            form.reset();
        });
    }
});