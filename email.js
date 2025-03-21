import emailjs from "@emailjs/browser";
document.addEventListener("DOMContentLoaded", () => {
    if (emailjs) {
        emailjs.init("4FAQaNAaZFVOPpBKy"); // Replace with your actual Public Key
    } else {
        console.error("EmailJS library not loaded.");
    }
});

const sendEmail = async (name, email, contact, message) => {
    try {
        const response = await emailjs.send("service_33bqzq4", "template_6z6v617", {
            user_name: name,
            user_email: email,
            user_phone: phone,
            user_message: message
        });

        alert("Message Sent Successfully!");
        console.log("SUCCESS!", response);
    } catch (error) {
        alert("Failed to Send Message. Please try again!");
        console.error("FAILED...", error);
    }
};
