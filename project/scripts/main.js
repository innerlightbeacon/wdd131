document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const thanksMessage = document.getElementById("thanksMessage");
  
    // Retrieve existing messages from localStorage or initialize an empty array
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Collect form data
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const topic = document.getElementById("topic").value;
      const message = document.getElementById("message").value.trim();
  
      // Validate (basic)
      if (!name || !email || !topic || !message) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Create a message object
      const newMessage = {
        name,
        email,
        topic,
        message,
        date: new Date().toLocaleString()
      };
  
      // Add new message to array and update localStorage
      messages.push(newMessage);
      localStorage.setItem("messages", JSON.stringify(messages));
  
      // Use a template literal to create a custom thank-you message
      thanksMessage.innerHTML = `
        <p>Thank you, <strong>${name}</strong>! We received your message on <em>${newMessage.date}</em> 
        about <strong>${topic}</strong>. We’ll get back to you at <strong>${email}</strong> soon.</p>
      `;
      thanksMessage.style.display = "block";
  
      // Clear form
      form.reset();
    });
  });
  