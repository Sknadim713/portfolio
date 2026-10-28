
    document.addEventListener("DOMContentLoaded", function () {
      /* ============================================
         THEME ACCENT CUSTOMIZER
      ============================================ */
      const themeDots = document.querySelectorAll(".theme-dot");
      const currentAccent = localStorage.getItem("nadim_theme_accent") || "blue";
      setAccentTheme(currentAccent);

      themeDots.forEach(dot => {
        dot.addEventListener("click", function () {
          const accent = this.getAttribute("data-accent");
          setAccentTheme(accent);
        });
      });

      function setAccentTheme(accent) {
        document.documentElement.setAttribute("data-theme-accent", accent);
        localStorage.setItem("nadim_theme_accent", accent);
        themeDots.forEach(d => {
          if (d.getAttribute("data-accent") === accent) {
            d.classList.add("active");
          } else {
            d.classList.remove("active");
          }
        });
      }

      /* ============================================
         CURSOR GLOW FOLLOWER
      ============================================ */
      const glow = document.getElementById("cursor-glow");
      if (glow && window.innerWidth > 768) {
        window.addEventListener("pointermove", (e) => {
          glow.style.left = e.clientX + "px";
          glow.style.top = e.clientY + "px";
        });
      }

      /* ============================================
         TYPEWRITER ANIMATION FOR HERO
      ============================================ */
      const phrases = [
        "// Fintech & Banking Architecture",
        "// High-Throughput AG Grid Grids",
        "// Dynamic KYC & AML Verification",
        "// Enterprise CMS & SFMC Solutions",
        "// NgRx State & Reactive Micro-Frontends"
      ];
      let phraseIdx = 0;
      let letterIdx = 0;
      let isDeleting = false;
      const typewriterElem = document.getElementById("role-typewriter");

      function typeLoop() {
        if (!typewriterElem) return;
        const current = phrases[phraseIdx];
        if (isDeleting) {
          typewriterElem.textContent = current.substring(0, letterIdx - 1);
          letterIdx--;
        } else {
          typewriterElem.textContent = current.substring(0, letterIdx + 1);
          letterIdx++;
        }

        let speed = isDeleting ? 30 : 65;

        if (!isDeleting && letterIdx === current.length) {
          speed = 2200; // Pause at end
          isDeleting = true;
        } else if (isDeleting && letterIdx === 0) {
          isDeleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          speed = 400;
        }

        setTimeout(typeLoop, speed);
      }
      typeLoop();

      /* ============================================
         SCROLL REVEAL OBSERVER
      ============================================ */
      const reveals = document.querySelectorAll(".reveal");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

      reveals.forEach(el => observer.observe(el));

      /* ============================================
         NAVBAR SCROLL STYLING
      ============================================ */
      const nav = document.getElementById("topNavbar");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      });
    });

    /* ============================================
       TERMINAL TABS SWITCHER
    ============================================ */
    const terminalData = {
      profile: `// engineer.ts - Nadim Shaikh
export const Profile: SoftwareEngineer = {
  name: "Shaikh Nadim",
  experience: "4.3+ Years Production",
  domains: ["Fintech & Banking", "Enterprise CMS", "Healthcare"],
  topPriorities: [
    "AG Grid", "Angular Material", "PrimeNG", "NgRx", "RxJS",
    "Apollo Angular", "ngx-formly", "ng-select", "ApexCharts",
    "SweetAlert2", "ngx-toastr", "Luxon", "xlsx", "jsPDF", "Playwright"
  ],
  education: "MCA (In Progress 2026) · B.Sc. IT (Grade A)",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/Sknadim713"
};`,

      fintech: `{\n  "fintech_architecture": {\n    "experience": "Indiconnect Fintech & Banking (Dec 2024 - Present)",\n    "modules": [\n      "Dynamic KYC Onboarding (Aadhaar / PAN verification)",\n      "High-throughput AG Grid real-time ledgers",\n      "NEFT / RTGS / IMPS fund settlement gateways",\n      "eNACH & NACH automated recurring debits",\n      "Real-time WebSocket & GraphQL transaction streams"\n    ],\n    "security": "OAuth 2.0, OpenID Connect, CASL RBAC, JWT Interceptors",\n    "timezones": "Luxon IST / UTC cutoff synchronization"\n  }\n}`,

      stack: `# stack.env - Production Environment
FRAMEWORK=Angular_v11_through_v21
LANGUAGE=TypeScript_Strict_ES6+
DATA_GRID=AG_Grid_Enterprise,PrimeNG_Table
STATE_MGMT=NgRx_Store,NgRx_Effects,RxJS
FORMS=ngx_formly,ReactiveForms,ngx_mask
CMS_EDITORS=ngx_quill,TinyMCE,CKEditor5,SFMC_AMPscript
TESTING=Playwright,Jest,Cypress
FULLSTACK=NodeJS,Express,MongoDB,ReactJS`
    };

    function switchTerminalTab(tab) {
      const container = document.getElementById("terminal-content");
      const buttons = document.querySelectorAll(".terminal-tab-btn");
      buttons.forEach(b => b.classList.remove("active"));
      event.target.classList.add("active");

      if (tab === 'profile') {
        // Restore default layout
        container.innerHTML = `
          <div class="terminal-avatar-wrap">
            <img src="assets/img/profile-img.jpg" alt="Nadim Shaikh" class="terminal-avatar"
              onerror="this.onerror=null; this.src='https://avatars.githubusercontent.com/u/147946016?v=4';">
            <div class="terminal-avatar-info">
              <div class="name">Shaikh Nadim <i class="bi bi-patch-check-fill text-primary"></i></div>
              <div class="title">// Senior Angular &amp; Fintech Specialist</div>
              <div class="sub">github.com/Sknadim713 · Pune, India</div>
            </div>
          </div>
          <div class="terminal-row"><span class="key">experience_years</span><span class="val green">4.3+ Years</span></div>
          <div class="terminal-row"><span class="key">fintech_domain</span><span class="val">Banking, Dynamic KYC, AG Grid, NEFT/RTGS, NACH</span></div>
          <div class="terminal-row"><span class="key">cms_specialty</span><span class="val">Headless CMS, SFMC AMPscript, Rich Editors</span></div>
          <div class="terminal-row"><span class="key">primary_core</span><span class="val">Angular (11–21), TypeScript, Ionic, RxJS, NgRx</span></div>
          <div class="terminal-row"><span class="key">full_stack</span><span class="val">React, Node.js, Express, MongoDB, REST/GraphQL</span></div>
          <div class="terminal-row"><span class="key">grid_and_tables</span><span class="val amber">AG Grid Enterprise, PrimeNG, TanStack</span></div>
          <div class="terminal-row"><span class="key">current_role</span><span class="val green">Angular Developer @ Indiconnect Fintech</span></div>
          <div class="terminal-row"><span class="key">education</span><span class="val">MCA (In Progress 2026) · B.Sc. IT (Grade A)</span></div>
        `;
      } else {
        container.innerHTML = `<pre style="margin:0; font-family: var(--mono); color: #cbd5e1; font-size: 0.78rem;"><code>${terminalData[tab]}</code></pre>`;
      }
    }

    function copyTerminalCode(badge) {
      const code = terminalData.profile;
      navigator.clipboard.writeText(code).then(() => {
        badge.innerHTML = '<i class="bi bi-check2"></i> copied!';
        setTimeout(() => {
          badge.innerHTML = '<i class="bi bi-copy"></i> copy';
        }, 2000);
      });
    }

    /* ============================================
       LIBRARY ECOSYSTEM FILTERING
    ============================================ */
    function filterLibs(category, btn) {
      const pills = document.querySelectorAll(".lib-filter-pill");
      pills.forEach(p => p.classList.remove("active"));
      if (btn) btn.classList.add("active");

      const items = document.querySelectorAll(".lib-item");
      items.forEach(item => {
        const itemCats = item.getAttribute("data-cat");
        if (category === "all") {
          item.style.display = "block";
        } else if (category === "top15") {
          if (itemCats.includes("top15")) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        } else {
          if (itemCats.includes(category)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    }

    function filterByTop15() {
      const pill = document.querySelector(".lib-filter-pill.featured-pill");
      filterLibs('top15', pill);
      document.getElementById('stack').scrollIntoView({ behavior: 'smooth' });
    }

    /* ============================================
       INTERACTIVE FINTECH DEMO CONTROLS
    ============================================ */
    let balanceVal = 1482500;

    function filterDemoGrid() {
      const query = document.getElementById("gridSearchInput").value.toLowerCase();
      const rows = document.querySelectorAll("#demoGridBody tr");
      rows.forEach(r => {
        const text = r.innerText.toLowerCase();
        if (text.includes(query)) {
          r.style.display = "";
        } else {
          r.style.display = "none";
        }
      });
    }

    function setGridCategory(cat, btn) {
      const btns = document.querySelectorAll(".demo-filter-btn");
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const rows = document.querySelectorAll("#demoGridBody tr");
      rows.forEach(r => {
        const rowType = r.getAttribute("data-type");
        if (cat === "ALL" || rowType === cat) {
          r.style.display = "";
        } else {
          r.style.display = "none";
        }
      });
    }

    function viewTxnDetails(txnId, party, amount, status) {
      Swal.fire({
        title: `<strong>${txnId}</strong>`,
        icon: status === 'AML AUDIT' ? 'warning' : 'info',
        html: `
          <div style="text-align: left; font-family: var(--mono); font-size: 0.88rem; padding: 10px;">
            <p><strong>Beneficiary:</strong> ${party}</p>
            <p><strong>Amount:</strong> <span style="color: #10b981; font-weight: bold;">${amount}</span></p>
            <p><strong>Status:</strong> ${status}</p>
            <p><strong>Reconciliation Hash:</strong> <code>0x9a83f1240c57b</code></p>
            <p><strong>Verification Standard:</strong> ISO 20022 Financial Gateway</p>
          </div>
        `,
        showCloseButton: true,
        confirmButtonText: '<i class="bi bi-download"></i> Download Audit Receipt',
        confirmButtonColor: '#3b82f6',
        background: '#0e172a',
        color: '#f1f5f9'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Receipt Generated',
            text: `Statement for ${txnId} rendered via jsPDF engine.`,
            icon: 'success',
            background: '#0e172a',
            color: '#f1f5f9'
          });
        }
      });
    }

    function simulatePaymentTransaction() {
      Swal.fire({
        title: 'Simulate RTGS / Instant Transfer',
        html: `
          <div style="text-align: left; font-family: var(--sans);">
            <div class="mb-3">
              <label class="form-label mono" style="font-size: 0.8rem;">Beneficiary Account</label>
              <input type="text" id="swalParty" class="form-control" value="State Bank of India — Treasury">
            </div>
            <div class="mb-3">
              <label class="form-label mono" style="font-size: 0.8rem;">Amount (INR)</label>
              <input type="number" id="swalAmount" class="form-control font-monospace" value="50000">
            </div>
            <div class="mb-3">
              <label class="form-label mono" style="font-size: 0.8rem;">Settlement Network</label>
              <select id="swalChannel" class="form-select">
                <option value="NEFT">NEFT (Immediate Batch)</option>
                <option value="RTGS" selected>RTGS (Real-Time Gross Settlement)</option>
                <option value="IMPS">IMPS 24x7</option>
              </select>
            </div>
          </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Authorize & Transfer',
        confirmButtonColor: '#10b981',
        cancelButtonColor: '#64748b',
        background: '#0e172a',
        color: '#f1f5f9',
        preConfirm: () => {
          const party = document.getElementById('swalParty').value;
          const amt = parseFloat(document.getElementById('swalAmount').value) || 50000;
          const channel = document.getElementById('swalChannel').value;
          return { party, amt, channel };
        }
      }).then((res) => {
        if (res.isConfirmed) {
          const { party, amt, channel } = res.value;
          balanceVal -= amt;
          document.getElementById('account-balance').textContent = '₹ ' + balanceVal.toLocaleString('en-IN') + '.00';

          const newId = 'TXN-' + Math.floor(100000 + Math.random() * 900000);
          const tbody = document.getElementById('demoGridBody');
          const newRow = document.createElement('tr');
          newRow.setAttribute('data-type', 'NEFT');
          newRow.innerHTML = `
            <td><strong class="text-white">${newId}</strong></td>
            <td>${party}</td>
            <td><span class="badge-chip">${channel} INSTANT</span></td>
            <td>Just Now (Luxon)</td>
            <td class="text-danger font-monospace">- ₹ ${amt.toLocaleString('en-IN')}.00</td>
            <td><span class="status-badge-settled"><i class="bi bi-check2"></i> SETTLED</span></td>
            <td>
              <button class="btn btn-sm btn-outline-primary py-0 px-2" style="font-size: 0.72rem;" onclick="viewTxnDetails('${newId}', '${party}', '- ₹ ${amt.toLocaleString('en-IN')}.00', 'SETTLED')">
                Inspect
              </button>
            </td>
          `;
          tbody.prepend(newRow);

          // Confetti celebration
          if (window.confetti) {
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.7 }
            });
          }

          Swal.fire({
            icon: 'success',
            title: 'Payment Successful',
            text: `${channel} transfer of ₹ ${amt.toLocaleString('en-IN')} to ${party} completed.`,
            background: '#0e172a',
            color: '#f1f5f9'
          });
        }
      });
    }

    function triggerKycSimulation() {
      Swal.fire({
        title: 'Dynamic KYC Verification Simulator',
        html: `
          <div style="text-align: left; font-family: var(--sans);">
            <p style="font-size: 0.85rem; color: #94a3b8;">
              Demonstrating <strong>@ngx-formly/core</strong> dynamic schema generation with <strong>ngx-mask</strong>.
            </p>
            <div class="mb-3">
              <label class="form-label mono" style="font-size: 0.78rem;">Permanent Account Number (PAN)</label>
              <input type="text" class="form-control font-monospace" placeholder="ABCDE1234F" value="ABCDE1234F" readonly>
            </div>
            <div class="mb-3">
              <label class="form-label mono" style="font-size: 0.78rem;">Aadhaar 12-Digit Masked</label>
              <input type="text" class="form-control font-monospace" placeholder="XXXX-XXXX-8921" value="XXXX-XXXX-8921" readonly>
            </div>
            <div class="p-2 mb-2" style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 6px; font-size: 0.8rem; color: #10b981;">
              <i class="bi bi-shield-check"></i> Biometric OCR &amp; Liveness Score: 98.4% Passed
            </div>
          </div>
        `,
        confirmButtonText: 'Approve & Issue Account',
        confirmButtonColor: '#10b981',
        background: '#0e172a',
        color: '#f1f5f9'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: 'KYC Approved',
            text: 'Account status updated to Verified in Core Banking Database.',
            background: '#0e172a',
            color: '#f1f5f9'
          });
        }
      });
    }

    function exportSimulatorData() {
      Swal.fire({
        icon: 'success',
        title: 'XLSX Export Initiated',
        text: 'Exported 6 ledger rows using simulated xlsx (SheetJS) with custom styling and timestamps.',
        background: '#0e172a',
        color: '#f1f5f9',
        timer: 2500
      });
    }

    /* ============================================
       CONTACT FORM & HELPERS
    ============================================ */
    function handleContactSubmit(e) {
      e.preventDefault();
      const name = document.getElementById("contactName").value;
      const email = document.getElementById("contactEmail").value;
      const subject = document.getElementById("contactSubject").value;

      Swal.fire({
        icon: 'success',
        title: 'Message Sent Successfully',
        html: `Thank you <strong>${name}</strong>!<br>Your inquiry regarding <em>${subject}</em> has been dispatched. Nadim Shaikh will respond at <strong>${email}</strong> shortly.`,
        background: '#0e172a',
        color: '#f1f5f9',
        confirmButtonColor: '#3b82f6'
      });

      document.getElementById("contactForm").reset();
    }

    function copyEmailToClipboard() {
      navigator.clipboard.writeText("sknadeem713@gmail.com").then(() => {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Copied sknadeem713@gmail.com',
          showConfirmButton: false,
          timer: 2000,
          background: '#0e172a',
          color: '#f1f5f9'
        });
      });
    }
  