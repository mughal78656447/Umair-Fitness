function calculateTotal() {
    const admissionFee = 500;
    const pkgFee = parseInt(document.getElementById('package').value) || 0;
    const suppFee = parseInt(document.getElementById('supplement').value) || 0;
    const total = admissionFee + pkgFee + suppFee;

    const summary = document.getElementById('feeSummary');
    summary.innerHTML = `
        <strong>Payment Breakdown:</strong><br>
        • One-Time Registration Fee: Rs. ${admissionFee.toLocaleString()}<br>
        • Selected Package: Rs. ${pkgFee.toLocaleString()}<br>
        • Supplement: Rs. ${suppFee.toLocaleString()}<br>
        <hr style="border-color:#334155; margin:8px 0;">
        <strong style="color:#ff3b3f; font-size:16px;">Total Payable at Counter: Rs. ${total.toLocaleString()}</strong>
    `;
}

document.getElementById('enrollmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const pkgText = document.getElementById('package').options[document.getElementById('package').selectedIndex].text;
    const suppText = document.getElementById('supplement').options[document.getElementById('supplement').selectedIndex].text;

    // Direct WhatsApp message integration on form submit
    const waMessage = `*New Admission Request - Umair Fitness*%0A%0A` +
                      `*Name:* ${name}%0A` +
                      `*Phone:* ${phone}%0A` +
                      `*Package:* ${pkgText}%0A` +
                      `*Supplement:* ${suppText}`;

    window.open(`https://wa.me/923072589257?text=${waMessage}`, '_blank');
});
