<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>School of AI & Emerging Technologies – LPU</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --primary: #1e3c72;
      --secondary: #2a5298;
      --accent: #00d4ff;
      --white: #ffffff;
      --light: #f0f4ff;
      --dark: #0a1628;
      --text: #1a1a2e;
      --gray: #6b7280;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Nunito', sans-serif; color: var(--text); background: var(--white); overflow-x: hidden; }

    /* ===== HEADER ===== */
    header {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      background: rgba(10,22,40,0.97); backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0,212,255,0.2);
      padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; height: 70px;
    }
    .logo { display: flex; align-items: center; gap: 12px; }
    /* CSS-drawn logo badge — no broken image */
    .logo-badge {
      width: 46px; height: 46px;
      background: linear-gradient(135deg, #ffd700, #ff8c00);
      border-radius: 10px; display: flex; align-items: center; justify-content: center;
      font-weight: 900; font-size: 0.8rem; color: #1a1000; letter-spacing: 0.5px;
      box-shadow: 0 4px 15px rgba(255,215,0,0.4);
    }
    .logo-text { display: flex; flex-direction: column; line-height: 1.1; }
    .logo-text span:first-child { font-family: 'Orbitron', monospace; font-size: 0.85rem; font-weight: 900; color: var(--accent); letter-spacing: 1px; }
    .logo-text span:last-child { font-size: 0.62rem; color: rgba(255,255,255,0.55); letter-spacing: 2px; text-transform: uppercase; }
    nav ul { list-style: none; display: flex; gap: 0.4rem; }
    nav ul li a { text-decoration: none; color: rgba(255,255,255,0.8); font-weight: 600; font-size: 0.9rem; padding: 8px 16px; border-radius: 6px; transition: all 0.3s; }
    nav ul li a:hover { color: var(--accent); background: rgba(0,212,255,0.1); }
    .hamburger { display: none; flex-direction: column; cursor: pointer; gap: 5px; }
    .hamburger span { width: 25px; height: 3px; background: var(--accent); border-radius: 3px; }

    /* ===== HERO ===== */
    #home {
      min-height: 100vh; position: relative; display: flex; align-items: center; overflow: hidden;
      background: linear-gradient(135deg, var(--dark) 0%, var(--primary) 60%, var(--secondary) 100%);
    }
    #home::before {
      content: ''; position: absolute; inset: 0;
      background-image: linear-gradient(rgba(0,212,255,0.05) 1px,transparent 1px), linear-gradient(90deg,rgba(0,212,255,0.05) 1px,transparent 1px);
      background-size: 50px 50px; animation: gridMove 20s linear infinite;
    }
    @keyframes gridMove { 0%{transform:translateY(0)} 100%{transform:translateY(50px)} }

    .hero-content {
      position: relative; z-index: 2; max-width: 1200px; margin: 0 auto;
      padding: 6rem 2rem 4rem; display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 3rem;
    }

    /* ===== CSS-ONLY CAMPUS BANNER — No external images ===== */
    .hero-image {
      position: relative; border-radius: 16px; overflow: hidden;
      box-shadow: 0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,212,255,0.2);
      border: 1px solid rgba(0,212,255,0.3); height: 340px;
    }
    .campus-banner {
      width: 100%; height: 100%;
      background: linear-gradient(160deg, #071428 0%, #0d2247 30%, #1a3a6e 60%, #1e3c72 100%);
      position: relative; overflow: hidden;
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
    }
    /* Animated aurora glow */
    .campus-banner::before {
      content: ''; position: absolute; top: -30%; left: -10%; width: 120%; height: 80%;
      background: radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.1) 0%, transparent 65%);
      animation: aurora 6s ease-in-out infinite alternate;
    }
    @keyframes aurora { 0%{transform:translateY(0) scale(1)} 100%{transform:translateY(20px) scale(1.1)} }

    /* Ground / floor */
    .campus-banner::after {
      content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 28%;
      background: linear-gradient(180deg, transparent, rgba(10,22,40,0.9));
    }

    .banner-stars {
      position: absolute; top: 8%; left: 0; right: 0; text-align: center;
      font-size: 0.5rem; letter-spacing: 20px; color: rgba(255,255,255,0.35);
      text-shadow: 0 0 6px rgba(255,255,255,0.5);
    }

    /* University gate structure */
    .gate-wrapper { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; }
    .gate-label {
      font-family: 'Orbitron', monospace; font-size: 0.65rem; letter-spacing: 3px;
      color: rgba(0,212,255,0.8); text-transform: uppercase; margin-bottom: 8px;
    }
    .gate-main { display: flex; align-items: flex-end; gap: 0; }
    .pillar-s { width: 12px; height: 45px; background: linear-gradient(180deg,rgba(255,215,0,0.5),rgba(255,165,0,0.4)); border-radius: 3px 3px 0 0; }
    .pillar-m { width: 12px; height: 65px; background: linear-gradient(180deg,rgba(255,215,0,0.6),rgba(255,165,0,0.5)); border-radius: 3px 3px 0 0; margin: 0 4px; }
    .arch {
      width: 100px; height: 110px;
      border: 3px solid rgba(255,215,0,0.85); border-bottom: none; border-radius: 50px 50px 0 0;
      display: flex; flex-direction: column; align-items: center; justify-content: flex-start; padding-top: 14px;
      margin: 0 4px; position: relative;
    }
    .arch::before { /* dome top dot */
      content: '★'; position: absolute; top: -14px; font-size: 1rem; color: rgba(255,215,0,0.9);
      text-shadow: 0 0 10px rgba(255,215,0,0.8);
    }
    .arch-lpu { font-weight: 900; font-size: 1rem; color: rgba(255,215,0,0.95); letter-spacing: 2px; }
    .arch-year { font-size: 0.55rem; color: rgba(255,215,0,0.6); letter-spacing: 1px; }

    /* Windows */
    .windows-row { display: flex; gap: 5px; margin-top: 4px; position: relative; z-index: 2; }
    .win {
      width: 9px; height: 12px; border-radius: 1px;
      background: rgba(255,220,60,0.85); box-shadow: 0 0 8px rgba(255,220,60,0.7);
    }
    .win.off { background: rgba(255,255,255,0.1); box-shadow: none; }

    .banner-title { position: relative; z-index: 2; font-family: 'Orbitron', monospace; font-size: 0.9rem; font-weight: 900; color: white; letter-spacing: 2px; }
    .banner-sub { position: relative; z-index: 2; font-size: 0.7rem; color: rgba(255,255,255,0.5); letter-spacing: 2px; text-transform: uppercase; }

    .hero-image-badge {
      position: absolute; bottom: 14px; left: 14px; z-index: 5;
      background: rgba(10,22,40,0.9); border: 1px solid var(--accent);
      color: var(--accent); padding: 6px 14px; border-radius: 20px;
      font-size: 0.75rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
    }

    /* Hero text */
    .hero-text .tag { display: inline-block; background: rgba(0,212,255,0.15); color: var(--accent); border: 1px solid rgba(0,212,255,0.4); padding: 6px 16px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 1.5rem; }
    .hero-text h1 { font-family: 'Orbitron', monospace; font-size: clamp(1.8rem,4vw,3rem); font-weight: 900; color: var(--white); line-height: 1.15; margin-bottom: 1rem; }
    .hero-text h1 span { color: var(--accent); }
    .hero-text p { color: rgba(255,255,255,0.7); font-size: 1.05rem; line-height: 1.8; margin-bottom: 2rem; }
    .hero-buttons { display: flex; gap: 1rem; flex-wrap: wrap; }
    .btn-primary { background: linear-gradient(135deg,var(--accent),#0099bb); color: var(--dark); border: none; padding: 14px 30px; border-radius: 8px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.3s; text-decoration: none; display: inline-block; }
    .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0,212,255,0.4); }
    .btn-secondary { background: transparent; color: var(--white); border: 2px solid rgba(255,255,255,0.4); padding: 14px 30px; border-radius: 8px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.3s; text-decoration: none; display: inline-block; }
    .btn-secondary:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-3px); }
    .stats-row { display: flex; gap: 2rem; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1); }
    .stat-number { font-family: 'Orbitron', monospace; font-size: 1.8rem; font-weight: 900; color: var(--accent); }
    .stat-label { font-size: 0.78rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 1px; }

    /* ===== SECTIONS ===== */
    section { padding: 5rem 2rem; }
    .section-header { text-align: center; margin-bottom: 3rem; }
    .section-tag { display: inline-block; background: rgba(30,60,114,0.08); color: var(--secondary); border: 1px solid rgba(30,60,114,0.2); padding: 5px 16px; border-radius: 20px; font-size: 0.78rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 1rem; }
    .section-header h2 { font-family: 'Orbitron', monospace; font-size: clamp(1.6rem,3vw,2.4rem); font-weight: 900; color: var(--primary); margin-bottom: 1rem; }
    .section-header p { color: var(--gray); max-width: 600px; margin: 0 auto; line-height: 1.8; }

    /* ===== ABOUT ===== */
    #about { background: var(--light); }
    .about-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }

    /* CSS-only about illustration */
    .about-art-box {
      height: 350px; border-radius: 16px; overflow: hidden;
      background: linear-gradient(160deg, #071428 0%, #0d2247 40%, #1e3c72 100%);
      box-shadow: 0 20px 50px rgba(30,60,114,0.3);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      position: relative; gap: 10px;
    }
    .about-art-box::before {
      content: ''; position: absolute; top: 10%; left: 50%; transform: translateX(-50%);
      width: 250px; height: 250px;
      background: radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%);
      border-radius: 50%;
    }
    .about-building {
      position: relative; z-index: 2;
      display: flex; flex-direction: column; align-items: center; gap: 6px;
    }
    .ab-label { font-family: 'Orbitron', monospace; font-size: 0.6rem; letter-spacing: 3px; color: rgba(0,212,255,0.7); text-transform: uppercase; }
    .ab-gate { display: flex; align-items: flex-end; }
    .ab-pillar-s { width: 10px; height: 40px; background: rgba(255,215,0,0.55); border-radius: 2px 2px 0 0; }
    .ab-pillar-m { width: 10px; height: 58px; background: rgba(255,215,0,0.65); border-radius: 2px 2px 0 0; margin: 0 3px; }
    .ab-arch {
      width: 80px; height: 90px; margin: 0 3px;
      border: 2px solid rgba(255,215,0,0.85); border-bottom: none; border-radius: 40px 40px 0 0;
      display: flex; flex-direction: column; align-items: center; justify-content: flex-start; padding-top: 12px;
    }
    .ab-arch span:first-child { font-weight: 900; font-size: 0.9rem; color: rgba(255,215,0,0.95); }
    .ab-arch span:last-child { font-size: 0.5rem; color: rgba(255,215,0,0.6); letter-spacing: 1px; }
    .ab-base { width: 160px; height: 3px; background: rgba(255,215,0,0.5); border-radius: 2px; }
    .ab-windows { display: flex; gap: 4px; }
    .ab-win { width: 7px; height: 9px; background: rgba(255,220,60,0.8); border-radius: 1px; box-shadow: 0 0 6px rgba(255,220,60,0.5); }
    .ab-win.d { background: rgba(255,255,255,0.1); box-shadow: none; }
    .about-art-footer {
      position: absolute; bottom: 0; left: 0; right: 0;
      background: linear-gradient(transparent, rgba(10,22,40,0.9));
      padding: 1rem; text-align: center;
      color: white; font-size: 0.85rem; font-weight: 700;
    }

    .about-text h3 { font-family: 'Orbitron', monospace; font-size: 1.4rem; color: var(--primary); margin-bottom: 1rem; }
    .about-text p { color: var(--gray); line-height: 1.9; margin-bottom: 1rem; font-size: 0.95rem; }
    .about-features { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin-top: 1.5rem; }
    .feature-item { display: flex; align-items: center; gap: 8px; font-size: 0.88rem; font-weight: 700; color: var(--primary); }

    /* ===== COURSES ===== */
    #courses { background: var(--white); }
    .courses-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit,minmax(300px,1fr)); gap: 1.5rem; }
    .course-card { background: var(--white); border: 1px solid #e5e7eb; border-radius: 16px; padding: 2rem; transition: all 0.3s; position: relative; overflow: hidden; }
    .course-card::before { content:''; position:absolute; top:0;left:0;right:0;height:4px; background: linear-gradient(90deg,var(--primary),var(--accent)); }
    .course-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(30,60,114,0.15); border-color: rgba(30,60,114,0.3); }
    .course-icon { font-size: 2.5rem; margin-bottom: 1rem; }
    .course-level { display: inline-block; font-size: 0.72rem; font-weight: 700; padding: 3px 10px; border-radius: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.8rem; }
    .level-beginner { background: #d1fae5; color: #065f46; }
    .level-intermediate { background: #fef3c7; color: #92400e; }
    .level-advanced { background: #ede9fe; color: #5b21b6; }
    .course-card h3 { font-family: 'Orbitron', monospace; font-size: 0.95rem; color: var(--primary); margin-bottom: 0.8rem; }
    .course-card p { color: var(--gray); font-size: 0.88rem; line-height: 1.7; margin-bottom: 1.2rem; }
    .course-meta { display: flex; gap: 1rem; font-size: 0.78rem; color: var(--gray); margin-bottom: 1.2rem; }
    .btn-enroll { width:100%; background: linear-gradient(135deg,var(--primary),var(--secondary)); color:white; border:none; padding:12px; border-radius:8px; font-size:0.88rem; font-weight:700; cursor:pointer; transition:all 0.3s; }
    .btn-enroll:hover { background: linear-gradient(135deg,var(--secondary),var(--accent)); transform:translateY(-2px); box-shadow:0 8px 20px rgba(30,60,114,0.3); }

    /* ===== CONTACT ===== */
    #contact { background: linear-gradient(135deg,var(--dark),var(--primary)); position:relative; overflow:hidden; }
    #contact::before { content:''; position:absolute; inset:0; background-image:linear-gradient(rgba(0,212,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.04) 1px,transparent 1px); background-size:40px 40px; }
    #contact .section-tag { color:var(--accent); border-color:rgba(0,212,255,0.3); background:rgba(0,212,255,0.1); }
    #contact .section-header h2 { color:var(--white); }
    #contact .section-header p { color:rgba(255,255,255,0.6); }
    .contact-wrapper { max-width:700px; margin:0 auto; position:relative; z-index:2; }
    .contact-form { background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:2.5rem; backdrop-filter:blur(10px); }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    .form-group { margin-bottom:1.2rem; }
    .form-group label { display:block; color:rgba(255,255,255,0.8); font-size:0.85rem; font-weight:700; margin-bottom:0.5rem; }
    .form-group input, .form-group textarea, .form-group select { width:100%; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); border-radius:8px; padding:12px 16px; color:var(--white); font-family:'Nunito',sans-serif; font-size:0.92rem; transition:all 0.3s; outline:none; }
    .form-group input::placeholder, .form-group textarea::placeholder { color:rgba(255,255,255,0.35); }
    .form-group input:focus, .form-group textarea:focus, .form-group select:focus { border-color:var(--accent); background:rgba(0,212,255,0.08); box-shadow:0 0 0 3px rgba(0,212,255,0.15); }
    .form-group textarea { resize:vertical; min-height:120px; }
    .form-group select option { background:var(--dark); color:white; }
    .error-msg { color:#ff6b6b; font-size:0.78rem; margin-top:4px; display:none; }
    .form-group.error input, .form-group.error textarea, .form-group.error select { border-color:#ff6b6b; }
    .form-group.error .error-msg { display:block; }
    .btn-submit { width:100%; background:linear-gradient(135deg,var(--accent),#0099bb); color:var(--dark); border:none; padding:16px; border-radius:10px; font-size:1rem; font-weight:900; cursor:pointer; transition:all 0.3s; letter-spacing:1px; text-transform:uppercase; margin-top:0.5rem; }
    .btn-submit:hover { transform:translateY(-3px); box-shadow:0 15px 40px rgba(0,212,255,0.4); }
    .success-message { display:none; background:rgba(0,212,255,0.1); border:1px solid var(--accent); border-radius:10px; padding:1.5rem; text-align:center; color:var(--accent); font-weight:700; margin-top:1rem; }

    /* ===== FOOTER ===== */
    footer { background:var(--dark); color:rgba(255,255,255,0.5); text-align:center; padding:2rem; font-size:0.85rem; border-top:1px solid rgba(255,255,255,0.08); }
    footer span { color:var(--accent); }

    /* ===== POPUP ===== */
    .welcome-popup { display:none; position:fixed; inset:0; background:rgba(10,22,40,0.85); z-index:9999; align-items:center; justify-content:center; backdrop-filter:blur(6px); }
    .welcome-popup.active { display:flex; }
    .popup-box { background:linear-gradient(135deg,var(--primary),var(--secondary)); border:1px solid var(--accent); border-radius:20px; padding:3rem; text-align:center; max-width:450px; width:90%; animation:popIn 0.4s ease; box-shadow:0 30px 80px rgba(0,212,255,0.3); }
    @keyframes popIn { from{transform:scale(0.8);opacity:0} to{transform:scale(1);opacity:1} }
    .popup-box .pop-icon { font-size:3rem; margin-bottom:1rem; }
    .popup-box h2 { font-family:'Orbitron',monospace; color:var(--white); margin-bottom:0.8rem; font-size:1.4rem; }
    .popup-box p { color:rgba(255,255,255,0.7); margin-bottom:1.5rem; line-height:1.7; }
    .popup-close { background:var(--accent); color:var(--dark); border:none; padding:12px 28px; border-radius:8px; font-weight:900; font-size:0.9rem; cursor:pointer; transition:all 0.3s; }
    .popup-close:hover { transform:scale(1.05); }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 768px) {
      nav ul { display:none; flex-direction:column; position:absolute; top:70px;left:0;right:0; background:rgba(10,22,40,0.97); padding:1rem; border-bottom:1px solid rgba(0,212,255,0.2); }
      nav ul.open { display:flex; }
      .hamburger { display:flex; }
      .hero-content { grid-template-columns:1fr; text-align:center; }
      .hero-image { order:-1; }
      .hero-buttons { justify-content:center; }
      .stats-row { justify-content:center; gap:1.5rem; }
      .about-grid { grid-template-columns:1fr; }
      .form-row { grid-template-columns:1fr; }
      .about-features { grid-template-columns:1fr; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header>
    <div class="logo">
      <div class="logo-badge">LPU</div>
      <div class="logo-text">
        <span>School of AI &amp; ET</span>
        <span>Lovely Professional University</span>
      </div>
    </div>
    <div class="hamburger" onclick="toggleNav()">
      <span></span><span></span><span></span>
    </div>
    <nav>
      <ul id="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- HOME SECTION -->
  <section id="home">
    <div class="hero-content">

      <div class="hero-text">
        <div class="tag">🚀 LPU – Phagwara, Punjab</div>
        <h1>School of <span>AI</span> &amp; Emerging Technologies</h1>
        <p>Shaping the next generation of AI engineers, data scientists, and technology innovators through world-class education and cutting-edge research.</p>
        <div class="hero-buttons">
          <button class="btn-primary" onclick="showWelcome()">🎓 Welcome Message</button>
          <a href="#courses" class="btn-secondary">Explore Courses →</a>
        </div>
        <div class="stats-row">
          <div class="stat">
            <div class="stat-number">5000+</div>
            <div class="stat-label">Students</div>
          </div>
          <div class="stat">
            <div class="stat-number">50+</div>
            <div class="stat-label">Programs</div>
          </div>
          <div class="stat">
            <div class="stat-number">98%</div>
            <div class="stat-label">Placement</div>
          </div>
        </div>
      </div>

      <!-- CSS-ONLY CAMPUS BANNER (no broken images!) -->
      <div class="hero-image">
        <div class="campus-banner">
          <!-- Stars -->
          <div class="banner-stars">★ &nbsp; ★ &nbsp;&nbsp; ★ &nbsp; ★ &nbsp;&nbsp; ★ &nbsp; ★ &nbsp;&nbsp; ★ &nbsp; ★</div>

          <!-- University Gate (CSS art) -->
          <div class="gate-wrapper">
            <div class="gate-label">Lovely Professional University</div>
            <div class="gate-main">
              <div class="pillar-s"></div>
              <div class="pillar-m"></div>
              <div class="arch">
                <div class="arch-lpu">LPU</div>
                <div class="arch-year">EST 2005</div>
              </div>
              <div class="pillar-m"></div>
              <div class="pillar-s"></div>
            </div>
            <!-- Lit windows -->
            <div class="windows-row">
              <div class="win"></div>
              <div class="win off"></div>
              <div class="win"></div>
              <div class="win"></div>
              <div class="win off"></div>
              <div class="win"></div>
              <div class="win"></div>
            </div>
          </div>

          <div class="banner-title">SCHOOL OF AI &amp; EMERGING TECH</div>
          <div class="banner-sub">Phagwara · Punjab · India</div>
        </div>
        <div class="hero-image-badge">📍 LPU Campus, Phagwara</div>
      </div>

    </div>
  </section>

  <!-- ABOUT SECTION -->
  <section id="about">
    <div class="section-header">
      <div class="section-tag">Who We Are</div>
      <h2>About Our School</h2>
      <p>A centre of excellence in AI, machine learning, and emerging technology research and education.</p>
    </div>
    <div class="about-grid">

      <!-- CSS campus art -->
      <div class="about-art-box">
        <div class="about-building">
          <div class="ab-label">Lovely Professional University</div>
          <div class="ab-gate">
            <div class="ab-pillar-s"></div>
            <div class="ab-pillar-m"></div>
            <div class="ab-arch">
              <span>LPU</span>
              <span>EST. 2005</span>
            </div>
            <div class="ab-pillar-m"></div>
            <div class="ab-pillar-s"></div>
          </div>
          <div class="ab-base"></div>
          <div class="ab-windows">
            <div class="ab-win"></div>
            <div class="ab-win d"></div>
            <div class="ab-win"></div>
            <div class="ab-win"></div>
            <div class="ab-win d"></div>
            <div class="ab-win"></div>
          </div>
        </div>
        <div class="about-art-footer">🏛️ Lovely Professional University — Phagwara, Punjab</div>
      </div>

      <div class="about-text">
        <h3>Pioneering AI Education in India</h3>
        <p>The School of AI &amp; Emerging Technologies at LPU is a premier institution dedicated to advancing artificial intelligence, data science, robotics, and next-generation technology disciplines.</p>
        <p>Located in Phagwara, Punjab, LPU is recognized as one of India's largest and most innovative universities. Our school brings together world-class faculty, state-of-the-art labs, and strong industry connections.</p>
        <p>We believe in learning by doing — hands-on projects, internships, research, and real-world problem solving, not just theory.</p>
        <div class="about-features">
          <div class="feature-item">🤖 AI &amp; ML Labs</div>
          <div class="feature-item">🏆 NAAC A+ Accredited</div>
          <div class="feature-item">🌍 Global Collaborations</div>
          <div class="feature-item">💼 98% Placements</div>
          <div class="feature-item">🔬 Research Centres</div>
          <div class="feature-item">📡 Smart Campus</div>
        </div>
      </div>
    </div>
  </section>

  <!-- COURSES SECTION -->
  <section id="courses">
    <div class="section-header">
      <div class="section-tag">What We Offer</div>
      <h2>Our Programs</h2>
      <p>Industry-aligned programs designed to build real skills in the technologies that matter most right now.</p>
    </div>
    <div class="courses-grid">
      <div class="course-card">
        <div class="course-icon">🤖</div>
        <span class="course-level level-beginner">Beginner</span>
        <h3>Artificial Intelligence &amp; Machine Learning</h3>
        <p>Master the fundamentals of AI, neural networks, deep learning, and ML algorithms used in real industry applications.</p>
        <div class="course-meta"><span>📅 4 Years</span><span>🎓 B.Tech</span><span>💻 Full-Time</span></div>
        <button class="btn-enroll" onclick="enrollAlert('AI & Machine Learning')">Enroll Now</button>
      </div>
      <div class="course-card">
        <div class="course-icon">📊</div>
        <span class="course-level level-intermediate">Intermediate</span>
        <h3>Data Science &amp; Big Data Analytics</h3>
        <p>Learn to collect, process, and visualize massive datasets using Python, Spark, SQL, Tableau, and cloud platforms.</p>
        <div class="course-meta"><span>📅 2 Years</span><span>🎓 M.Sc</span><span>💻 Full-Time</span></div>
        <button class="btn-enroll" onclick="enrollAlert('Data Science & Big Data')">Enroll Now</button>
      </div>
      <div class="course-card">
        <div class="course-icon">⛓️</div>
        <span class="course-level level-advanced">Advanced</span>
        <h3>Blockchain &amp; Web3 Technologies</h3>
        <p>Deep dive into decentralized systems, smart contracts, DeFi, NFTs, and the full Web3 technology stack.</p>
        <div class="course-meta"><span>📅 1 Year</span><span>🎓 PG Diploma</span><span>💻 Hybrid</span></div>
        <button class="btn-enroll" onclick="enrollAlert('Blockchain & Web3')">Enroll Now</button>
      </div>
      <div class="course-card">
        <div class="course-icon">🦾</div>
        <span class="course-level level-intermediate">Intermediate</span>
        <h3>Robotics &amp; Automation Engineering</h3>
        <p>Build intelligent robots and automated systems using ROS, embedded systems, computer vision, and control theory.</p>
        <div class="course-meta"><span>📅 4 Years</span><span>🎓 B.Tech</span><span>💻 Full-Time</span></div>
        <button class="btn-enroll" onclick="enrollAlert('Robotics & Automation')">Enroll Now</button>
      </div>
      <div class="course-card">
        <div class="course-icon">☁️</div>
        <span class="course-level level-beginner">Beginner</span>
        <h3>Cloud Computing &amp; DevOps</h3>
        <p>Learn AWS, Azure, GCP, Kubernetes, Docker, CI/CD pipelines and modern infrastructure management at scale.</p>
        <div class="course-meta"><span>📅 2 Years</span><span>🎓 M.Tech</span><span>💻 Full-Time</span></div>
        <button class="btn-enroll" onclick="enrollAlert('Cloud Computing & DevOps')">Enroll Now</button>
      </div>
      <div class="course-card">
        <div class="course-icon">🔐</div>
        <span class="course-level level-advanced">Advanced</span>
        <h3>Cybersecurity &amp; Ethical Hacking</h3>
        <p>Understand offensive and defensive security, penetration testing, and AI-powered threat detection.</p>
        <div class="course-meta"><span>📅 1 Year</span><span>🎓 PG Certificate</span><span>💻 Online</span></div>
        <button class="btn-enroll" onclick="enrollAlert('Cybersecurity & Ethical Hacking')">Enroll Now</button>
      </div>
    </div>
  </section>

  <!-- CONTACT SECTION -->
  <section id="contact">
    <div class="section-header">
      <div class="section-tag">Get In Touch</div>
      <h2>Contact Us</h2>
      <p>Have a question about admissions, courses, or the school? We'll get back to you within 24 hours.</p>
    </div>
    <div class="contact-wrapper">
      <div class="contact-form">
        <div class="form-row">
          <div class="form-group" id="group-name">
            <label for="name">Full Name</label>
            <input type="text" id="name" placeholder="e.g. Rajveer Singh"/>
            <span class="error-msg">Please enter your full name.</span>
          </div>
          <div class="form-group" id="group-email">
            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="you@email.com"/>
            <span class="error-msg">Please enter a valid email.</span>
          </div>
        </div>
        <div class="form-group">
          <label for="phone">Phone (Optional)</label>
          <input type="tel" id="phone" placeholder="+91 98765 43210"/>
        </div>
        <div class="form-group" id="group-course">
          <label for="course">Interested Program</label>
          <select id="course">
            <option value="">-- Select a Program --</option>
            <option>AI & Machine Learning (B.Tech)</option>
            <option>Data Science & Big Data Analytics (M.Sc)</option>
            <option>Blockchain & Web3 Technologies (PG Diploma)</option>
            <option>Robotics & Automation Engineering (B.Tech)</option>
            <option>Cloud Computing & DevOps (M.Tech)</option>
            <option>Cybersecurity & Ethical Hacking (PG Certificate)</option>
          </select>
          <span class="error-msg">Please select a program.</span>
        </div>
        <div class="form-group" id="group-message">
          <label for="message">Your Message</label>
          <textarea id="message" placeholder="Ask about admissions, fees, scholarships..."></textarea>
          <span class="error-msg">Please write a message.</span>
        </div>
        <button class="btn-submit" onclick="submitForm()">Send Message ✉️</button>
        <div class="success-message" id="success-msg">
          ✅ Message sent successfully!<br/>
          <small style="opacity:0.7">Our team will contact you within 24 hours.</small>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <p>© 2025 <span>School of AI &amp; Emerging Technologies</span> — Lovely Professional University, Phagwara, Punjab, India.</p>
    <p style="margin-top:6px;font-size:0.78rem;">Built with ❤️ by students, for students.</p>
  </footer>

  <!-- WELCOME POPUP -->
  <div class="welcome-popup" id="welcome-popup">
    <div class="popup-box">
      <div class="pop-icon">🎓</div>
      <h2>Welcome to LPU!</h2>
      <p>Welcome to the <strong>School of AI &amp; Emerging Technologies</strong> at Lovely Professional University.<br/><br/>Your journey into the future of technology starts now. 🚀</p>
      <button class="popup-close" onclick="closeWelcome()">Let's Get Started!</button>
    </div>
  </div>

  <!-- JAVASCRIPT -->
  <script>
    // Mobile nav toggle
    function toggleNav() {
      document.getElementById('nav-menu').classList.toggle('open');
    }
    document.querySelectorAll('#nav-menu a').forEach(link => {
      link.addEventListener('click', () => document.getElementById('nav-menu').classList.remove('open'));
    });

    // Welcome popup
    function showWelcome() { document.getElementById('welcome-popup').classList.add('active'); }
    function closeWelcome() { document.getElementById('welcome-popup').classList.remove('active'); }
    document.getElementById('welcome-popup').addEventListener('click', function(e) {
      if (e.target === this) closeWelcome();
    });

    // Enroll button
    function enrollAlert(name) {
      alert('🎉 Interested in "' + name + '"?\n\nFill out the Contact form below and we will send you full admission details!');
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }

    // Form validation
    function submitForm() {
      let valid = true;
      const name    = document.getElementById('name').value.trim();
      const email   = document.getElementById('email').value.trim();
      const course  = document.getElementById('course').value;
      const message = document.getElementById('message').value.trim();

      const gName = document.getElementById('group-name');
      const gEmail = document.getElementById('group-email');
      const gCourse = document.getElementById('group-course');
      const gMsg = document.getElementById('group-message');

      if (name === '') { gName.classList.add('error'); valid = false; } else gName.classList.remove('error');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { gEmail.classList.add('error'); valid = false; } else gEmail.classList.remove('error');
      if (course === '') { gCourse.classList.add('error'); valid = false; } else gCourse.classList.remove('error');
      if (message === '') { gMsg.classList.add('error'); valid = false; } else gMsg.classList.remove('error');

      if (valid) {
        document.getElementById('success-msg').style.display = 'block';
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('course').value = '';
        document.getElementById('message').value = '';
        setTimeout(() => { document.getElementById('success-msg').style.display = 'none'; }, 5000);
      }
    }

    // Active nav on scroll
    window.addEventListener('scroll', () => {
      let current = '';
      document.querySelectorAll('section').forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      document.querySelectorAll('#nav-menu a').forEach(link => {
        link.style.color = '';
        link.style.background = '';
        if (link.getAttribute('href') === '#' + current) {
          link.style.color = '#00d4ff';
          link.style.background = 'rgba(0,212,255,0.1)';
        }
      });
    });
  </script>

</body>
</html>
