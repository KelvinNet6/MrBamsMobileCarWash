    function openPopup() {
        document.getElementById("popup-form").style.display = "flex";
    }

    function closePopup() {
        document.getElementById("popup-form").style.display = "none";
    }

    document.getElementById("appointment-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const service = document.getElementById("service").value;
        const location = document.getElementById("location").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const message = document.getElementById("message").value;

        const invoiceNumber = generateInvoice(name, service, location, date, time); 
        // Removed totalAmount from being passed to WhatsApp as it's not needed

        sendBookingToWhatsApp(name, service, location, date, time, invoiceNumber);

        closePopup();
    });

    function generateInvoice(name, service, location, date, time) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const invoiceNumber = `INV-${Math.floor(Math.random() * 1000000)}`;

        const logoUrl = 'me.jpg'; 
        const logoX = 20;
        const logoY = 34;
        const logoWidth = 30;
        const logoHeight = 30;
        const logoBorderRadius = 30; 

        doc.setFillColor(255, 255, 255); 
        doc.roundedRect(logoX, logoY, logoWidth, logoHeight, logoBorderRadius, logoBorderRadius, 'F'); 
        doc.addImage(logoUrl, 'JPEG', logoX, logoY, logoWidth, logoHeight); 

        doc.setFontSize(18);
        doc.text("Invoice - Mr.Bams Mobile Car Wash", 105, 50, null, null, "center"); 
        doc.setFontSize(12);
        doc.text(`Invoice No: ${invoiceNumber}`, 105, 60); 

        doc.setFontSize(12);

        const tableStartY = 70; 
        const tableColumnWidths = [60, 80]; 
        const tableHeaders = ["Client Name", "Service Type"];
        
        doc.setFillColor(240, 240, 240);
        doc.rect(20, tableStartY, tableColumnWidths[0] + tableColumnWidths[1], 10, 'F'); 
        doc.text(tableHeaders[0], 20, tableStartY + 7);
        doc.text(tableHeaders[1], 100, tableStartY + 7);

        let currentY = tableStartY + 15;
        const headerData = [
            [name, service]
        ];

        headerData.forEach(row => {
            doc.setFillColor(255, 255, 255); 
            doc.rect(20, currentY, tableColumnWidths[0], 10, 'F');
            doc.rect(100, currentY, tableColumnWidths[1], 10, 'F');
            doc.text(row[0], 20, currentY + 7);
            doc.text(row[1], 100, currentY + 7);
            currentY += 10;
        });

        currentY += 10;

        const serviceTableStartY = currentY;
        const serviceTableColumnWidths = [80, 40, 40];
        const serviceTableHeaders = ["Description", "Amount (ZAR)", "Total (ZAR)"];

        const serviceTableHeaderWidth = serviceTableColumnWidths[0] + serviceTableColumnWidths[1] + serviceTableColumnWidths[2]; 
        doc.setFillColor(240, 240, 240);
        doc.rect(20, serviceTableStartY, serviceTableHeaderWidth, 10, 'F');
        doc.text(serviceTableHeaders[0], 20, serviceTableStartY + 7);
        doc.text(serviceTableHeaders[1], 100, serviceTableStartY + 7);
        doc.text(serviceTableHeaders[2], 140, serviceTableStartY + 7);

        let serviceCurrentY = serviceTableStartY + 15;
        const serviceTableData = [
            ["Charged Fee", `R${getPrice(service)}`, `R${getPrice(service)}`],
            ["Location", location, ""], 
            ["Scheduled Date", date, ""],
            ["Scheduled Time", time, ""]
        ];

        serviceTableData.forEach(row => {
            doc.setFillColor(255, 255, 255); 
            doc.rect(20, serviceCurrentY, serviceTableColumnWidths[0], 10, 'F');
            doc.rect(100, serviceCurrentY, serviceTableColumnWidths[1], 10, 'F');
            doc.rect(140, serviceCurrentY, serviceTableColumnWidths[2], 10, 'F');
            doc.text(row[0], 20, serviceCurrentY + 7);
            doc.text(row[1], 100, serviceCurrentY + 7);
            doc.text(row[2], 140, serviceCurrentY + 7);
            serviceCurrentY += 10;
        });
        
        const totalAmount = getPrice(service);
        doc.setFillColor(240, 240, 240); 
        doc.rect(20, serviceCurrentY, serviceTableColumnWidths[0] + serviceTableColumnWidths[1] + serviceTableColumnWidths[2], 10, 'F'); 
        doc.text("Total", 20, serviceCurrentY + 7);
        doc.text(`R${totalAmount}`, 100, serviceCurrentY + 7);
        doc.text(`R${totalAmount}`, 140, serviceCurrentY + 7);

        doc.setFontSize(12);
        doc.setFont("helvetica", "bold"); 
        doc.text("Payment Details", 20, serviceCurrentY + 15);
        doc.text("NedBank tjeck account number: 1106056434", 20, serviceCurrentY + 25);
        doc.text("Account Holder: Ashley Bam.", 20, serviceCurrentY + 30);
        doc.text("Contact: +27815130009", 20, serviceCurrentY + 40);
        doc.text("Mr.Bam's Mobile Car Wash.", 80, serviceCurrentY + 50);

        doc.save("invoice.pdf");

        alert("Booking Invoice Generated! Submit your Booking To our Business WhatsApp!");

        return invoiceNumber;  // Return the invoice number for the WhatsApp message
    }
function sendBookingToWhatsApp(name, service, location, date, time, invoiceNumber) {
    const message = `Hello-

I would like to book a car wash appointment:\n\n--

Name: ${name}\n--
Service: ${service}\n--
Location: ${location}\n--
Date: ${date}\n--
Time: ${time}\n--
Invoice Number: ${invoiceNumber}`;
    
    // WhatsApp API URL (replace the phone number with the recipient's WhatsApp number)
    const phoneNumber = '+27751101765';  
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open the URL to send the message
    window.open(whatsappURL, '_blank');
}


    function getPrice(service) {
        let price = 0;
        if (service === "interior") price = 300;
        else if (service === "exterior") price = 250;
        else if (service === "full") price = 500;
        return price;
    }
