// Function to open the popup form
function openPopup() {
    document.getElementById("popup-form").style.display = "flex";
}

// Function to close the popup form
function closePopup() {
    document.getElementById("popup-form").style.display = "none";
}

// Event listener for the booking form submission
document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    const clientName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const serviceType = document.getElementById("service").value;
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    
    // Generate invoice
    const invoiceNumber = generateInvoice(clientName, serviceType, location, date, time);
    
    // Send booking to WhatsApp
    sendBookingToWhatsApp(clientName, serviceType, location, date, time, invoiceNumber);
    
    // Close popup form
    closePopup();
});

// Function to generate invoice using jsPDF
function generateInvoice(clientName, serviceType, location, date, time) {
    const { jsPDF } = window;
    const doc = new jsPDF();
    
    // Generate random invoice number
    const invoiceNumber = "INV-" + Math.floor(Math.random() * 1000000);
    
    // Set up invoice header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Invoice - Mr. Bam's Mobile Car Wash", 20, 20);
    doc.setFontSize(12);
    doc.text(`Invoice No: ${invoiceNumber}`, 20, 30);
    
    // Add booking details
    doc.text(`Client Name: ${clientName}`, 20, 40);
    doc.text(`Service Type: ${serviceType}`, 20, 50);
    doc.text(`Location: ${location}`, 20, 60);
    doc.text(`Scheduled Date: ${date}`, 20, 70);
    doc.text(`Scheduled Time: ${time}`, 20, 80);
    
    // Calculate price
    const price = getPrice(serviceType);
    doc.text(`Total (ZAR): R${price}`, 20, 90);
    
    // Payment details
    doc.setFontSize(10);
    doc.text("Payment Details:", 20, 110);
    doc.text("Account Holder: Ashley Bam", 20, 120);
    doc.text("NedBank Account Number: 1106056434", 20, 130);
    doc.text("Contact: +27815130009", 20, 140);
    
    // Save invoice as PDF
    doc.save("invoice.pdf");
    alert("Booking Invoice Generated! Submit your booking to our Business WhatsApp!");
    
    return invoiceNumber;
}

// Function to send booking details to WhatsApp
function sendBookingToWhatsApp(clientName, serviceType, location, date, time, invoiceNumber) {
    const phoneNumber = "+278151300095"; // Business WhatsApp number
    const message = `Hello,\n\nI would like to book a car wash appointment:\n\n` +
                    `--\nName: ${clientName}\n` +
                    `Service: ${serviceType}\n` +
                    `Location: ${location}\n` +
                    `Date: ${date}\n` +
                    `Time: ${time}\n` +
                    `Invoice Number: ${invoiceNumber}\n--`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

// Function to determine service price
function getPrice(serviceType) {
    switch (serviceType) {
        case "interior": return 150; // R300
        case "exterior": return 150; // R250
        case "full": return 350; // 
        default: return 0;
    }
}
