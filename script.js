* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    scroll-behavior: smooth;
}

body {
    background-color: #0d0f12;
    color: #e2e8f0;
    line-height: 1.6;
}

span.highlight {
    color: #ff3b3f;
}

/* Header / Navbar */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 8%;
    background: rgba(13, 15, 18, 0.95);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid #1e293b;
}

.logo {
    font-size: 24px;
    font-weight: 800;
    letter-spacing: 1px;
    color: #ffffff;
}

nav ul {
    display: flex;
    list-style: none;
    align-items: center;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    font-size: 15px;
    transition: 0.3s;
}

nav ul li a:hover {
    color: #ff3b3f;
}

.btn-nav {
    background-color: #ff3b3f;
    color: #fff !important;
    padding: 9px 20px;
    border-radius: 6px;
    font-weight: 600;
}

/* Buttons */
.btn-primary {
    display: inline-block;
    padding: 12px 28px;
    background-color: #ff3b3f;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
}

.btn-primary:hover {
    background-color: #e02d31;
}

.btn-secondary {
    display: inline-block;
    padding: 10px 24px;
    border: 2px solid #ff3b3f;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    border-radius: 6px;
    transition: 0.3s;
}

.btn-secondary:hover {
    background-color: #ff3b3f;
}

.btn-whatsapp {
    display: inline-block;
    padding: 12px 24px;
    background-color: #25d366;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    border-radius: 6px;
    transition: 0.3s;
    margin-left: 10px;
}

.btn-whatsapp:hover {
    background-color: #1da851;
}

/* Hero Section */
.hero {
    height: 92vh;
    background: linear-gradient(rgba(13, 15, 18, 0.7), rgba(13, 15, 18, 0.9)), 
                url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1600') center/cover no-repeat;
    display: flex;
    align-items: center;
    padding: 0 8%;
    margin-top: 60px;
}

.location-badge {
    background: #ff3b3f;
    color: #fff;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 700;
    display: inline-block;
    margin-bottom: 15px;
}

.hero-content h1 {
    font-size: 52px;
    font-weight: 800;
    margin-bottom: 15px;
    line-height: 1.2;
}

.hero-content p {
    font-size: 18px;
    color: #cbd5e1;
    max-width: 600px;
    margin-bottom: 30px;
}

.hero-btns {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

/* Sections General */
section {
    padding: 80px 8%;
    text-align: center;
}

h2 {
    font-size: 36px;
    margin-bottom: 15px;
}

.section-desc {
    color: #94a3b8;
    max-width: 700px;
    margin: 0 auto 40px auto;
}

/* Fee Banner */
.admission-banner {
    background: #1e293b;
    border-left: 5px solid #ff3b3f;
    padding: 25px;
    border-radius: 8px;
    max-width: 800px;
    margin: 0 auto 40px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    text-align: left;
}

.admission-price {
    font-size: 26px;
    font-weight: 800;
    color: #ff3b3f;
}

/* Cards Layout */
.cards-container {
    display: flex;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
}

.plan-card {
    background: #161922;
    padding: 35px 25px;
    border-radius: 10px;
    width: 320px;
    border: 1px solid #232a3b;
    text-align: left;
    position: relative;
}

.plan-card.featured {
    border: 2px solid #ff3b3f;
}

.badge {
    position: absolute;
    top: -12px;
    right: 20px;
    background: #ff3b3f;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 20px;
}

.plan-card .price {
    font-size: 32px;
    font-weight: 800;
    margin: 15px 0;
    color: #ff3b3f;
}

.plan-card ul {
    list-style: none;
    margin-bottom: 25px;
}

.plan-card ul li {
    margin-bottom: 10px;
    font-size: 14px;
}

.plan-card ul li::before {
    content: "✓ ";
    color: #ff3b3f;
}

/* Supplements Section */
.supplements {
    background: #12151c;
}

.supp-card {
    background: #1a1e29;
    border: 1px solid #283044;
    border-radius: 10px;
    width: 330px;
    padding: 20px;
    text-align: left;
}

.img-wrapper img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 15px;
}

.supp-tag {
    background: rgba(255, 59, 63, 0.15);
    color: #ff3b3f;
    padding: 4px 10px;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
}

.supp-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
}

.supp-price {
    font-size: 18px;
    font-weight: 700;
    color: #38bdf8;
}

/* Location & Contact Section */
.location-section {
    background: #161922;
}

.location-grid {
    display: flex;
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;
    flex-wrap: wrap;
}

.location-box {
    background: #0d0f12;
    padding: 30px;
    border-radius: 10px;
    flex: 1;
    min-width: 300px;
    border: 1px solid #232a3b;
    text-align: left;
}

.location-box h3 {
    margin-bottom: 20px;
    font-size: 22px;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 20px;
    font-size: 15px;
}

.contact-item i {
    font-size: 18px;
    margin-top: 4px;
}

.map-container {
    flex: 1;
    min-width: 300px;
    min-height: 350px;
}

/* Enrollment Form */
.form-container {
    max-width: 600px;
    margin: 0 auto;
    background: #161922;
    padding: 35px;
    border-radius: 12px;
    border: 1px solid #232a3b;
    text-align: left;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
}

.form-container input, .form-container select {
    width: 100%;
    padding: 12px;
    background: #0d0f12;
    border: 1px solid #2e374a;
    color: #fff;
    border-radius: 6px;
}

.fee-summary {
    background: rgba(255, 59, 63, 0.08);
    border: 1px dashed #ff3b3f;
    padding: 15px;
    border-radius: 6px;
    margin-bottom: 20px;
    font-size: 14px;
}

footer {
    background: #08090c;
    padding: 20px;
    font-size: 14px;
    color: #64748b;
}

@media (max-width: 768px) {
    header {
        flex-direction: column;
        gap: 10px;
    }
    .hero-content h1 {
        font-size: 36px;
    }
    .location-grid {
        flex-direction: column;
    }
}
