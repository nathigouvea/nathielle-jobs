const JOBS = [
  // ── SUBMITTED ──
  {
    id: 1, company: "Engine AI", role: "Graphic / Web Designer",
    status: "submitted", date: "2026-03-16", method: "LinkedIn Easy Apply",
    url: "https://www.linkedin.com/jobs/view/4381985195/",
    notes: "Submitted via LinkedIn Easy Apply. Application confirmed.",
    urgent: false
  },
  {
    id: 2, company: "Level", role: "Frontend Engineer",
    status: "submitted", date: "2026-03-16", method: "Tally form",
    url: "https://tally.so/r/ODAKrA",
    notes: "Fully filled via Tally. Confirmed: 'Thanks for completing this form!'",
    urgent: false
  },
  {
    id: 3, company: "Douro Labs", role: "Design Lead",
    status: "submitted", date: "2026-03-16", method: "Ashby",
    url: "https://jobs.ashbyhq.com/dourolabs.xyz/b40f164c",
    notes: "Submitted via Ashby. Application confirmed.",
    urgent: false
  },
  {
    id: 4, company: "Brave", role: "Software Engineer UI (Sr.)",
    status: "submitted", date: "2026-03-16", method: "Greenhouse",
    url: "https://job-boards.greenhouse.io/brave/jobs/7636723",
    notes: "Submitted via Greenhouse. Confirmed: 'Thank you for applying with Brave.'",
    urgent: false
  },
  {
    id: 5, company: "FS Studio", role: "WordPress Web Developer",
    status: "submitted", date: "2026-03-17", method: "Ashby",
    url: "https://jobs.ashbyhq.com/fs-studio/92ba03c7-b5cc-40bb-abc6-e8e5b3c5cfa8",
    notes: "Submitted today via Ashby. CV attached. Rate: $3500/month.",
    urgent: false
  },

  // ── NEEDS ACTION ──
  {
    id: 6, company: "Tarlogic", role: "Web Designer & Frontend Developer",
    status: "action", date: "2026-03-17", method: "TalentClue form",
    url: "https://tarlogic.talentclue.com/es/node/123318722/66909823",
    notes: "Form 100% filled. BLOCKED by reCAPTCHA. Open the browser and solve captcha to submit.",
    urgent: true, urgentLabel: "Captcha needed"
  },
  {
    id: 7, company: "ELECTE S.R.L.", role: "Full-Stack Developer",
    status: "action", date: "2026-03-17", method: "Email",
    url: "",
    notes: "Send email to anne.anderson@electe.net — Subject: 'Full-Stack Developer @ ELECTE S.R.L.' — include word CHEAPER. CV attached.",
    urgent: true, urgentLabel: "Send email"
  },
  {
    id: 8, company: "MapTiler", role: "Senior UX/UI Designer (Web)",
    status: "action", date: "2026-03-17", method: "Email",
    url: "",
    notes: "Send email to jobs@maptiler.com — Subject: 'Senior UX/UI Designer (Web) Application'. Deadline: April 9.",
    urgent: false, urgentLabel: "Send email"
  },
  {
    id: 9, company: "KillerSpots Agency", role: "WordPress Developer (Remote)",
    status: "action", date: "2026-03-16", method: "Email / JazzHR",
    url: "http://killerspotscominc.applytojob.com/apply/9fHEekpSXz/WordPress-Developer-RemoteUSA",
    notes: "JazzHR form blocked by reCAPTCHA. Alternative: email hr@killerspots.com with portfolio link.",
    urgent: false, urgentLabel: "Send email"
  },
  {
    id: 10, company: "Typeform", role: "Senior Product Designer (Typeform AI)",
    status: "action", date: "2026-03-17", method: "Greenhouse",
    url: "https://job-boards.greenhouse.io/typeform/jobs/7510928",
    notes: "Form partially filled (name, email, CV, location=Yes, no sponsorship). Needs final submission.",
    urgent: false, urgentLabel: "Finish form"
  },
  {
    id: 11, company: "Canonical", role: "UX Designer - Infrastructure",
    status: "action", date: "2026-03-17", method: "Canonical careers",
    url: "https://canonical.com/careers/6072086/apply",
    notes: "Detailed text questions required. Deadline March 21. NO AI-generated content policy.",
    urgent: true, urgentLabel: "Deadline Mar 21"
  },
  {
    id: 12, company: "Canonical", role: "UX Designer - Design Systems",
    status: "action", date: "2026-03-17", method: "Canonical careers",
    url: "https://canonical.com/careers/7043028",
    notes: "Same form structure as Infrastructure role.",
    urgent: false
  },
  {
    id: 13, company: "Canonical", role: "Visual Designer",
    status: "action", date: "2026-03-17", method: "Canonical careers",
    url: "https://canonical.com/careers/5326986",
    notes: "Same form structure as other Canonical roles.",
    urgent: false
  },

  // ── NEEDS YOUR LOGIN ──
  {
    id: 14, company: "Growmodo", role: "Graphic Designer / AI Specialist",
    status: "login", date: "2026-03-16", method: "Growmodo careers (hCaptcha)",
    url: "https://careers.growmodo.com/o/graphic-designer-ai-expert/c/new",
    notes: "Form fully filled and ready. Blocked by hCaptcha. Open URL and solve captcha to submit.",
    urgent: false
  },
  {
    id: 15, company: "Represent Studio", role: "UI Designer for Motion & Animation",
    status: "login", date: "2026-03-16", method: "Dribbble",
    url: "https://dribbble.com/jobs/301529-UI-Designer-for-Motion-Animation",
    notes: "Requires Dribbble account to apply.",
    urgent: false
  },
  {
    id: 16, company: "ContrastUX", role: "Freelance Design Systems Designer",
    status: "login", date: "2026-03-16", method: "Dribbble",
    url: "https://dribbble.com/jobs/301397-Freelance-Design-Systems-Designer",
    notes: "Requires Dribbble account to apply.",
    urgent: false
  },
  {
    id: 17, company: "BetterMe", role: "AI Creative Designer",
    status: "login", date: "2026-03-16", method: "WeWorkRemotely",
    url: "https://weworkremotely.com/remote-jobs/betterme-ai-creative-designer",
    notes: "Requires WWR account to apply.",
    urgent: false
  },

  // ── CLOSED / REJECTED ──
  {
    id: 18, company: "Everywhen", role: "Junior Web Developer",
    status: "closed", date: "2026-03-17", method: "LinkedIn",
    url: "https://www.linkedin.com/jobs/view/4383092984/",
    notes: "No longer accepting applications.",
    urgent: false
  },
  {
    id: 19, company: "Fuelerate", role: "CRO-Focused Web Designer",
    status: "closed", date: "2026-03-17", method: "LinkedIn",
    url: "https://www.linkedin.com/jobs/view/4361480726/",
    notes: "No longer accepting applications.",
    urgent: false
  },
];
