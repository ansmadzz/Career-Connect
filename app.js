/* =====================================================
   CAREERCONNECT - MULTI-USER FRONT-END DEMO
   Each account has its own personal workspace.
   Job listings are shared between all accounts.
===================================================== */

const demoAccount = {
  name: "Demo User",
  email: "demo@careerconnect.com",
  password: "career123"
};

/* SHARED JOB LISTINGS */
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Information Technology",
    company: "BrightLabs",
    location: "Kuala Lumpur",
    salary: "RM 4,000 – RM 6,000",
    type: "Full-time",
    skills: ["HTML", "CSS", "JavaScript"],
    description: "Build and maintain responsive website interfaces and improve user experience.",
    match: 95
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design & Creative",
    company: "Pixel Studio",
    location: "Petaling Jaya",
    salary: "RM 3,500 – RM 5,000",
    type: "Full-time",
    skills: ["Figma", "UI Design", "Prototyping"],
    description: "Create wireframes, user flows and visual designs for digital products.",
    match: 90
  },
  {
    id: 3,
    title: "Web Developer Intern",
    department: "Information Technology",
    company: "Nexa Digital",
    location: "Shah Alam",
    salary: "RM 1,200 – RM 1,800",
    type: "Internship",
    skills: ["HTML", "CSS", "PHP"],
    description: "Assist with website updates, testing and basic front-end development.",
    match: 88
  },
  {
    id: 4,
    title: "Software Engineer",
    department: "Information Technology",
    company: "CloudTech",
    location: "Cyberjaya",
    salary: "RM 4,500 – RM 7,000",
    type: "Full-time",
    skills: ["JavaScript", "Python", "SQL"],
    description: "Develop software features, troubleshoot issues and maintain applications.",
    match: 82
  },
  {
    id: 5,
    title: "Digital Marketing Intern",
    department: "Marketing",
    company: "Mosaic Media",
    location: "Remote",
    salary: "RM 1,000 – RM 1,500",
    type: "Internship",
    skills: ["SEO", "Marketing", "Analytics"],
    description: "Support online campaigns, prepare content and monitor digital engagement.",
    match: 78
  },
  {
    id: 6,
    title: "Product Designer",
    department: "Design & Creative",
    company: "Orbit Systems",
    location: "Kuala Lumpur",
    salary: "RM 5,000 – RM 7,500",
    type: "Full-time",
    skills: ["Figma", "UX Research", "Design"],
    description: "Research user needs and design clear, accessible product experiences.",
    match: 75
  },
  {
    id: 7,
    title: "IT Support Assistant",
    department: "Information Technology",
    company: "Northstar Group",
    location: "Shah Alam",
    salary: "RM 2,500 – RM 3,400",
    type: "Full-time",
    skills: ["Troubleshooting", "Networking", "Support"],
    description: "Help staff troubleshoot devices, software and basic network issues.",
    match: 84
  },
  {
    id: 8,
    title: "Content Creator",
    department: "Media & Communications",
    company: "Mosaic Media",
    location: "Remote",
    salary: "RM 1,800 – RM 2,500",
    type: "Part-time",
    skills: ["Content", "Canva", "Video"],
    description: "Create short-form videos, captions and engaging content for social platforms.",
    match: 80
  },
  {
    "id": 9,
    "title": "Account Executive",
    "department": "Finance",
    "company": "Apex Advisory",
    "location": "Kuala Lumpur",
    "salary": "RM 3,000 – RM 4,200",
    "type": "Full-time",
    "skills": ["Accounting", "Excel", "Bookkeeping"],
    "match": 82,
    "description": "Prepare invoices, update financial records and assist with monthly accounts."
  },
  {
    "id": 10,
    "title": "Junior Accountant",
    "department": "Finance",
    "company": "LedgerWorks",
    "location": "Petaling Jaya",
    "salary": "RM 3,200 – RM 4,500",
    "type": "Full-time",
    "skills": ["SQL Accounting", "Financial Reports", "Reconciliation"],
    "match": 80,
    "description": "Maintain ledgers, reconcile transactions and prepare financial statements."
  },
  {
    "id": 11,
    "title": "Audit Assistant",
    "department": "Finance",
    "company": "Grant & Co.",
    "location": "Shah Alam",
    "salary": "RM 2,800 – RM 3,800",
    "type": "Full-time",
    "skills": ["Auditing", "Documentation", "Attention to Detail"],
    "match": 78,
    "description": "Check financial documents, prepare audit schedules and support audit fieldwork."
  },
  {
    "id": 12,
    "title": "Payroll Executive",
    "department": "Human Resources",
    "company": "PeopleFirst Group",
    "location": "Kuala Lumpur",
    "salary": "RM 3,000 – RM 4,000",
    "type": "Full-time",
    "skills": ["Payroll", "HRIS", "Employment Act"],
    "match": 81,
    "description": "Process monthly payroll, manage employee claims and maintain salary records."
  },
  {
    "id": 13,
    "title": "Talent Acquisition Intern",
    "department": "Human Resources",
    "company": "NextTalent Malaysia",
    "location": "Cyberjaya",
    "salary": "RM 900 – RM 1,300",
    "type": "Internship",
    "skills": ["Recruitment", "Communication", "Scheduling"],
    "match": 86,
    "description": "Post vacancies, screen applications and coordinate interview sessions."
  },
  {
    "id": 14,
    "title": "HR Executive",
    "department": "Human Resources",
    "company": "Evergreen Holdings",
    "location": "Shah Alam",
    "salary": "RM 3,200 – RM 4,500",
    "type": "Full-time",
    "skills": ["Employee Relations", "HR Administration", "Onboarding"],
    "match": 83,
    "description": "Handle staff records, onboarding, leave administration and employee enquiries."
  },
  {
    "id": 15,
    "title": "Social Media Executive",
    "department": "Marketing",
    "company": "Mosaic Media",
    "location": "Kuala Lumpur",
    "salary": "RM 3,000 – RM 4,200",
    "type": "Full-time",
    "skills": ["Social Media", "Copywriting", "Analytics"],
    "match": 91,
    "description": "Plan social media calendars, create posts and review campaign performance."
  },
  {
    "id": 16,
    "title": "Graphic Designer",
    "department": "Marketing & Creative",
    "company": "Studio Nadi",
    "location": "Petaling Jaya",
    "salary": "RM 2,800 – RM 4,000",
    "type": "Full-time",
    "skills": ["Adobe Illustrator", "Photoshop", "Branding"],
    "match": 88,
    "description": "Design posters, brochures, digital advertisements and marketing materials."
  },
  {
    "id": 17,
    "title": "Public Relations Assistant",
    "department": "Marketing & Communications",
    "company": "BrightPath Communications",
    "location": "Kuala Lumpur",
    "salary": "RM 2,500 – RM 3,400",
    "type": "Full-time",
    "skills": ["Media Relations", "Writing", "Event Support"],
    "match": 79,
    "description": "Draft press materials, coordinate media activities and support public events."
  },
  {
    "id": 18,
    "title": "Market Research Assistant",
    "department": "Marketing",
    "company": "InsightPoint Research",
    "location": "Remote",
    "salary": "RM 2,200 – RM 3,200",
    "type": "Full-time",
    "skills": ["Surveys", "Research", "Data Analysis"],
    "match": 77,
    "description": "Conduct market surveys, organise findings and prepare research summaries."
  },
  {
    "id": 19,
    "title": "Sales Representative",
    "department": "Sales",
    "company": "Nova Consumer Products",
    "location": "Shah Alam",
    "salary": "RM 2,500 – RM 3,500 + commission",
    "type": "Full-time",
    "skills": ["Negotiation", "Customer Relations", "Sales"],
    "match": 84,
    "description": "Meet potential customers, explain products and achieve monthly sales targets."
  },
  {
    "id": 20,
    "title": "Business Development Executive",
    "department": "Sales & Business Development",
    "company": "Elevate Solutions",
    "location": "Kuala Lumpur",
    "salary": "RM 3,500 – RM 5,000",
    "type": "Full-time",
    "skills": ["Lead Generation", "Networking", "Presentations"],
    "match": 85,
    "description": "Identify new clients, prepare proposals and build long-term business relationships."
  },
  {
    "id": 21,
    "title": "Retail Sales Assistant",
    "department": "Retail",
    "company": "Urban Living Store",
    "location": "Petaling Jaya",
    "salary": "RM 1,800 – RM 2,400",
    "type": "Part-time",
    "skills": ["Customer Service", "POS", "Merchandising"],
    "match": 80,
    "description": "Assist shoppers, arrange product displays and process purchases at the cashier."
  },
  {
    "id": 22,
    "title": "Administrative Assistant",
    "department": "Administration",
    "company": "Crescent Services",
    "location": "Shah Alam",
    "salary": "RM 2,000 – RM 2,800",
    "type": "Full-time",
    "skills": ["Filing", "Microsoft Office", "Scheduling"],
    "match": 87,
    "description": "Manage correspondence, organise files and support daily office operations."
  },
  {
    "id": 23,
    "title": "Personal Assistant",
    "department": "Administration",
    "company": "Meridian Group",
    "location": "Kuala Lumpur",
    "salary": "RM 3,000 – RM 4,200",
    "type": "Full-time",
    "skills": ["Calendar Management", "Communication", "Confidentiality"],
    "match": 78,
    "description": "Arrange meetings, manage schedules and prepare documents for management."
  },
  {
    "id": 24,
    "title": "Data Entry Clerk",
    "department": "Administration",
    "company": "MetroLink Services",
    "location": "Remote",
    "salary": "RM 1,800 – RM 2,500",
    "type": "Contract",
    "skills": ["Data Entry", "Accuracy", "Microsoft Excel"],
    "match": 76,
    "description": "Enter, verify and update information in company records and databases."
  },
  {
    "id": 25,
    "title": "Customer Service Officer",
    "department": "Customer Service",
    "company": "CareLine Malaysia",
    "location": "Cyberjaya",
    "salary": "RM 2,300 – RM 3,200",
    "type": "Full-time",
    "skills": ["Communication", "Problem Solving", "CRM"],
    "match": 89,
    "description": "Answer customer questions, resolve complaints and record service requests."
  },
  {
    "id": 26,
    "title": "Call Centre Agent",
    "department": "Customer Service",
    "company": "ConnectPlus",
    "location": "Kuala Lumpur",
    "salary": "RM 2,200 – RM 3,000",
    "type": "Full-time",
    "skills": ["Call Handling", "Active Listening", "CRM"],
    "match": 82,
    "description": "Handle inbound calls, provide product information and follow up on customer cases."
  },
  {
    "id": 27,
    "title": "Primary School Teacher",
    "department": "Education",
    "company": "Bright Future Academy",
    "location": "Shah Alam",
    "salary": "RM 2,500 – RM 3,500",
    "type": "Full-time",
    "skills": ["Lesson Planning", "Classroom Management", "Teaching"],
    "match": 86,
    "description": "Prepare lessons, teach core subjects and assess pupils' learning progress."
  },
  {
    "id": 28,
    "title": "Training Coordinator",
    "department": "Education & Training",
    "company": "SkillBridge Centre",
    "location": "Petaling Jaya",
    "salary": "RM 2,800 – RM 3,800",
    "type": "Full-time",
    "skills": ["Training", "Coordination", "Documentation"],
    "match": 80,
    "description": "Arrange training sessions, prepare materials and track participant attendance."
  },
  {
    "id": 29,
    "title": "Clinic Receptionist",
    "department": "Healthcare",
    "company": "WellCare Clinic",
    "location": "Kuala Lumpur",
    "salary": "RM 1,900 – RM 2,600",
    "type": "Full-time",
    "skills": ["Patient Registration", "Scheduling", "Customer Service"],
    "match": 84,
    "description": "Register patients, arrange appointments and manage front-desk enquiries."
  },
  {
    "id": 30,
    "title": "Pharmacy Assistant",
    "department": "Healthcare",
    "company": "HealthPlus Pharmacy",
    "location": "Shah Alam",
    "salary": "RM 2,000 – RM 2,800",
    "type": "Full-time",
    "skills": ["Inventory", "Customer Care", "Retail"],
    "match": 78,
    "description": "Assist customers, organise medicine stock and support pharmacy operations under supervision."
  },
  {
    "id": 31,
    "title": "Medical Records Assistant",
    "department": "Healthcare Administration",
    "company": "City Medical Centre",
    "location": "Cyberjaya",
    "salary": "RM 2,200 – RM 3,000",
    "type": "Full-time",
    "skills": ["Records Management", "Data Entry", "Confidentiality"],
    "match": 87,
    "description": "Maintain patient files, update records and ensure documents are properly organised."
  },
  {
    "id": 32,
    "title": "Mechanical Engineer",
    "department": "Engineering",
    "company": "Axis Manufacturing",
    "location": "Shah Alam",
    "salary": "RM 3,800 – RM 5,500",
    "type": "Full-time",
    "skills": ["AutoCAD", "Maintenance", "Engineering"],
    "match": 82,
    "description": "Support equipment design, inspect machinery and improve production processes."
  },
  {
    "id": 33,
    "title": "Civil Engineering Assistant",
    "department": "Engineering & Construction",
    "company": "BuildRight Consultants",
    "location": "Kuala Lumpur",
    "salary": "RM 2,800 – RM 4,000",
    "type": "Full-time",
    "skills": ["AutoCAD", "Site Inspection", "Technical Drawing"],
    "match": 79,
    "description": "Assist with site inspections, technical drawings and construction documentation."
  },
  {
    "id": 34,
    "title": "Quality Control Inspector",
    "department": "Manufacturing",
    "company": "PrecisionWorks",
    "location": "Shah Alam",
    "salary": "RM 2,300 – RM 3,200",
    "type": "Full-time",
    "skills": ["Quality Checks", "Reporting", "Manufacturing"],
    "match": 83,
    "description": "Inspect finished products, record defects and ensure quality standards are met."
  },
  {
    "id": 35,
    "title": "Logistics Coordinator",
    "department": "Logistics & Supply Chain",
    "company": "SwiftRoute Logistics",
    "location": "Petaling Jaya",
    "salary": "RM 2,700 – RM 3,800",
    "type": "Full-time",
    "skills": ["Shipment Tracking", "Coordination", "Excel"],
    "match": 85,
    "description": "Coordinate deliveries, monitor shipments and communicate with drivers and suppliers."
  },
  {
    "id": 36,
    "title": "Warehouse Assistant",
    "department": "Logistics & Supply Chain",
    "company": "NorthGate Distribution",
    "location": "Shah Alam",
    "salary": "RM 1,900 – RM 2,600",
    "type": "Full-time",
    "skills": ["Stock Control", "Packing", "Inventory"],
    "match": 80,
    "description": "Receive goods, prepare orders and maintain accurate warehouse stock records."
  },
  {
    "id": 37,
    "title": "Procurement Executive",
    "department": "Procurement",
    "company": "PrimeSource Trading",
    "location": "Kuala Lumpur",
    "salary": "RM 3,000 – RM 4,300",
    "type": "Full-time",
    "skills": ["Vendor Management", "Purchasing", "Negotiation"],
    "match": 81,
    "description": "Request quotations, compare suppliers and process purchase orders."
  },
  {
    "id": 38,
    "title": "Hotel Front Desk Officer",
    "department": "Hospitality & Tourism",
    "company": "Serene Suites",
    "location": "Kuala Lumpur",
    "salary": "RM 2,100 – RM 2,900",
    "type": "Full-time",
    "skills": ["Guest Relations", "Reservations", "Communication"],
    "match": 84,
    "description": "Welcome guests, manage check-ins and respond to booking enquiries."
  },
  {
    "id": 39,
    "title": "Event Coordinator",
    "department": "Events & Hospitality",
    "company": "Gather Events",
    "location": "Petaling Jaya",
    "salary": "RM 2,600 – RM 3,600",
    "type": "Contract",
    "skills": ["Event Planning", "Vendor Coordination", "Budgeting"],
    "match": 88,
    "description": "Coordinate event schedules, liaise with vendors and manage event-day arrangements."
  },
  {
    "id": 40,
    "title": "Chef Assistant",
    "department": "Food & Beverage",
    "company": "The Garden Bistro",
    "location": "Shah Alam",
    "salary": "RM 1,900 – RM 2,600",
    "type": "Full-time",
    "skills": ["Food Preparation", "Kitchen Safety", "Teamwork"],
    "match": 77,
    "description": "Prepare ingredients, maintain kitchen cleanliness and assist chefs during service."
  },
  {
    "id": 41,
    "title": "Legal Secretary",
    "department": "Legal",
    "company": "Carter & Lim Legal",
    "location": "Kuala Lumpur",
    "salary": "RM 2,500 – RM 3,500",
    "type": "Full-time",
    "skills": ["Legal Documents", "Filing", "Scheduling"],
    "match": 78,
    "description": "Format legal documents, arrange appointments and maintain confidential case files."
  },
  {
    "id": 42,
    "title": "Compliance Assistant",
    "department": "Legal & Compliance",
    "company": "TrustMark Services",
    "location": "Cyberjaya",
    "salary": "RM 2,800 – RM 3,900",
    "type": "Full-time",
    "skills": ["Compliance", "Documentation", "Research"],
    "match": 80,
    "description": "Review company documents, maintain compliance records and support internal checks."
  },
  {
    "id": 43,
    "title": "Interior Design Assistant",
    "department": "Design & Architecture",
    "company": "FormSpace Studio",
    "location": "Petaling Jaya",
    "salary": "RM 2,500 – RM 3,600",
    "type": "Full-time",
    "skills": ["SketchUp", "Mood Boards", "Space Planning"],
    "match": 86,
    "description": "Prepare design presentations, source materials and assist with space-planning projects."
  },
  {
    "id": 44,
    "title": "Photographer / Videographer",
    "department": "Creative & Media",
    "company": "FrameHouse Studio",
    "location": "Remote",
    "salary": "RM 2,200 – RM 3,500",
    "type": "Contract",
    "skills": ["Photography", "Video Editing", "Lighting"],
    "match": 83,
    "description": "Capture photos and videos, edit content and prepare media for client projects."
  },
  {
    "id": 45,
    "title": "Research Assistant",
    "department": "Research & Development",
    "company": "Vista Research Centre",
    "location": "Cyberjaya",
    "salary": "RM 2,400 – RM 3,400",
    "type": "Contract",
    "skills": ["Research", "Report Writing", "Data Collection"],
    "match": 81,
    "description": "Collect information, review sources and prepare findings for research projects."
  },
  {
    "id": 46,
    "title": "Environmental Officer",
    "department": "Environment & Sustainability",
    "company": "GreenEarth Services",
    "location": "Shah Alam",
    "salary": "RM 3,000 – RM 4,200",
    "type": "Full-time",
    "skills": ["Environmental Audits", "Safety", "Reporting"],
    "match": 79,
    "description": "Monitor environmental practices, conduct site checks and prepare sustainability reports."
  },
  {
    "id": 47,
    "title": "Insurance Claims Assistant",
    "department": "Insurance",
    "company": "SecureLife Assurance",
    "location": "Kuala Lumpur",
    "salary": "RM 2,400 – RM 3,300",
    "type": "Full-time",
    "skills": ["Claims Processing", "Documentation", "Customer Service"],
    "match": 82,
    "description": "Review claim submissions, request supporting documents and update claim records."
  },
  {
    "id": 48,
    "title": "Real Estate Negotiator",
    "department": "Property & Real Estate",
    "company": "KeyStone Properties",
    "location": "Petaling Jaya",
    "salary": "RM 2,000 – RM 3,000 + commission",
    "type": "Full-time",
    "skills": ["Property Sales", "Negotiation", "Client Relations"],
    "match": 80,
    "description": "Arrange property viewings, assist buyers and sellers and prepare listing information."
  }
];

const statuses = [
  "Applied",
  "Under Review",
  "Interview",
  "Offered",
  "Rejected"
];

const pages = [
  "dashboard",
  "jobs",
  "applications",
  "saved",
  "resume",
  "interviews"
];

const pageTitles = {
  dashboard: "Dashboard",
  jobs: "Find jobs",
  applications: "My applications",
  saved: "Saved jobs",
  resume: "Resume builder",
  interviews: "Interview planner"
};

const resumeFields = [
  "Name",
  "Email",
  "Title",
  "Summary",
  "Skills",
  "Education",
  "Experience"
];

/* ACTIVE USER DATA */
let activeUser = null;

let applications = [];
let interviews = [];
let savedJobs = [];
let resumeData = {};

let applicationsChart = null;
let statusChart = null;


/* =====================================================
   1. LOCAL STORAGE
===================================================== */

function readStore(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

/* Generate a separate storage key for each account. */
function userStorageKey(email) {
  return `careerConnectUserData:${encodeURIComponent(
    email.trim().toLowerCase()
  )}`;
}

/* Default information for each user. */
function getDefaultUserData(email) {

  /* Demo account keeps its sample information. */
  if (email === demoAccount.email) {
    return {
      applications: [
        {
          jobId: 1,
          title: "Frontend Developer",
          company: "BrightLabs",
          date: "2026-10-25",
          status: "Interview"
        },
        {
          jobId: 2,
          title: "UI/UX Designer",
          company: "Pixel Studio",
          date: "2026-10-27",
          status: "Under Review"
        },
        {
          jobId: 3,
          title: "Web Developer Intern",
          company: "Nexa Digital",
          date: "2026-10-29",
          status: "Applied"
        }
      ],

      interviews: [
        {
          id: 1,
          company: "BrightLabs",
          position: "Frontend Developer",
          date: "2026-11-15",
          time: "10:30",
          notes: "Prepare portfolio and review JavaScript fundamentals."
        }
      ],

      savedJobs: [2, 6],

      resume: {}
    };
  }

  /* New accounts start with empty personal data. */
  return {
    applications: [],
    interviews: [],
    savedJobs: [],
    resume: {}
  };
}

/* Load the selected user's personal information. */
function loadUserData(email) {

  const key = userStorageKey(email);

  let data = readStore(key, null);

  if (!data) {
    data = getDefaultUserData(email);

    localStorage.setItem(
      key,
      JSON.stringify(data)
    );
  }

  applications = Array.isArray(data.applications)
    ? data.applications
    : [];

  interviews = Array.isArray(data.interviews)
    ? data.interviews
    : [];

  savedJobs = Array.isArray(data.savedJobs)
    ? data.savedJobs
    : [];

  resumeData =
    data.resume && typeof data.resume === "object"
      ? data.resume
      : {};
}

/* Save only the active user's information. */
function persist() {

  if (!activeUser || !activeUser.email) return;

  const data = {
    applications,
    interviews,
    savedJobs,
    resume: resumeData
  };

  localStorage.setItem(
    userStorageKey(activeUser.email),
    JSON.stringify(data)
  );
}


/* =====================================================
   2. GENERAL HELPER FUNCTIONS
===================================================== */

function toast(message) {

  const messageElement =
    document.getElementById("toastMessage");

  const toastElement =
    document.getElementById("appToast");

  if (!messageElement || !toastElement || !window.bootstrap) {
    return;
  }

  messageElement.textContent = message;

  bootstrap.Toast.getOrCreateInstance(
    toastElement,
    { delay: 2600 }
  ).show();
}

function escapeHTML(value = "") {

  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
}

function formatDate(value) {

  if (!value) return "—";

  return new Date(value + "T12:00:00")
    .toLocaleDateString("en-MY", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
}

function shortDate(value) {

  const date = new Date(value + "T12:00:00");

  return {
    day: date.getDate(),

    month: date.toLocaleDateString("en-MY", {
      month: "short"
    })
  };
}

function statusClass(status) {

  return {
    "Applied": "status-applied",
    "Under Review": "status-review",
    "Interview": "status-interview",
    "Offered": "status-offered",
    "Rejected": "status-rejected"
  }[status] || "status-applied";
}

function statusBadge(status) {

  return `
    <span class="status-badge ${statusClass(status)}">
      ${escapeHTML(status)}
    </span>
  `;
}


/* =====================================================
   3. LOGIN AND REGISTRATION
===================================================== */

function showAuth(which) {

  document.getElementById("loginPage")
    .classList.toggle("d-none", which !== "login");

  document.getElementById("registerPage")
    .classList.toggle("d-none", which !== "register");
}

/* Open registration page. */
document.getElementById("showRegister")
  .addEventListener("click", () => {

    document.getElementById("loginError").textContent = "";

    showAuth("register");
  });

/* Return to login page. */
document.getElementById("showLogin")
  .addEventListener("click", event => {

    event.preventDefault();

    document.getElementById("registerError").textContent = "";

    showAuth("login");
  });

/* Show or hide password. */
document.querySelectorAll("[data-toggle-password]")
  .forEach(button => {

    button.addEventListener("click", () => {

      const input = document.getElementById(
        button.dataset.togglePassword
      );

      input.type =
        input.type === "password"
          ? "text"
          : "password";

      button.innerHTML = `
        <i class="bi bi-eye${
          input.type === "password" ? "" : "-slash"
        }"></i>
      `;
    });
  });


/* LOGIN FORM */
document.getElementById("loginForm")
  .addEventListener("submit", event => {

    event.preventDefault();

    const email = document
      .getElementById("loginEmail")
      .value.trim()
      .toLowerCase();

    const password =
      document.getElementById("loginPassword").value;

    const users = readStore("careerUsers", []);

    const user =
      email === demoAccount.email &&
      password === demoAccount.password
        ? demoAccount
        : users.find(account =>
            account.email.toLowerCase() === email &&
            account.password === password
          );

    if (!user) {

      document.getElementById("loginError").textContent =
        "Email or password is incorrect. Please try again.";

      return;
    }

    document.getElementById("loginError").textContent = "";

    activeUser = {
      name: user.name,
      email: user.email.toLowerCase()
    };

    sessionStorage.setItem("careerLoggedIn", "true");
    sessionStorage.setItem("careerUserEmail", activeUser.email);
    sessionStorage.setItem("careerUserName", activeUser.name);

    /* Important: load the correct user's data. */
    loadUserData(activeUser.email);

    showApplication();
  });


/* REGISTER FORM */
document.getElementById("registerForm")
  .addEventListener("submit", event => {

    event.preventDefault();

    const name = document
      .getElementById("registerName")
      .value.trim();

    const email = document
      .getElementById("registerEmail")
      .value.trim()
      .toLowerCase();

    const password =
      document.getElementById("registerPassword").value;

    const users = readStore("careerUsers", []);

    const error =
      document.getElementById("registerError");

    error.textContent = "";

    if (password.length < 6) {

      error.textContent =
        "Password must contain at least 6 characters.";

      return;
    }

    if (
      email === demoAccount.email ||
      users.some(user =>
        user.email.toLowerCase() === email
      )
    ) {

      error.textContent =
        "This email is already registered.";

      return;
    }

    users.push({
      name,
      email,
      password
    });

    localStorage.setItem(
      "careerUsers",
      JSON.stringify(users)
    );

    /* Create a separate empty workspace. */
    localStorage.setItem(
      userStorageKey(email),
      JSON.stringify(getDefaultUserData(email))
    );

    event.target.reset();

    document.getElementById("loginEmail").value = email;

    document.getElementById("loginPassword").value = "";

    showAuth("login");

    toast("Account created. Please sign in.");
  });


/* =====================================================
   4. OPEN MAIN APPLICATION
===================================================== */

function showApplication() {

  showAuth("none");

  document.getElementById("mainApplication")
    .classList.remove("d-none");

  const name = activeUser?.name || "User";

  document.getElementById("headerUserName").textContent =
    name;

  document.getElementById("welcomeName").textContent =
    name.split(" ")[0];

  document.getElementById("userAvatar").textContent =
    name.charAt(0).toUpperCase();

  document.getElementById("todayDate").textContent =
    new Date().toLocaleDateString("en-MY", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });

  showPage("dashboard");
}


/* LOGOUT */
document.getElementById("logoutButton")
  .addEventListener("click", () => {

    persist();

    activeUser = null;

    applications = [];
    interviews = [];
    savedJobs = [];
    resumeData = {};

    sessionStorage.removeItem("careerLoggedIn");
    sessionStorage.removeItem("careerUserEmail");
    sessionStorage.removeItem("careerUserName");

    document.getElementById("mainApplication")
      .classList.add("d-none");

    document.getElementById("loginForm").reset();

    document.getElementById("loginError").textContent = "";

    showAuth("login");
  });


/* =====================================================
   5. PAGE NAVIGATION
===================================================== */

function showPage(page) {

  if (!pages.includes(page)) return;

  pages.forEach(current => {

    document.getElementById(current + "Page")
      .classList.toggle("d-none", current !== page);
  });

  document.querySelectorAll("#sidebar .nav-link")
    .forEach(link => {

      link.classList.toggle(
        "active",
        link.dataset.page === page
      );
    });

  document.getElementById("headerPageTitle").textContent =
    pageTitles[page];

  document.getElementById("sidebar")
    .classList.remove("show");

  if (page === "dashboard") updateDashboard();
  if (page === "jobs") displayJobs();
  if (page === "applications") displayApplications();
  if (page === "saved") displaySavedJobs();
  if (page === "resume") loadResume();
  if (page === "interviews") displayInterviews();
}

/* Sidebar navigation. */
document.querySelectorAll("#sidebar .nav-link")
  .forEach(link => {

    link.addEventListener("click", event => {

      event.preventDefault();

      showPage(link.dataset.page);
    });
  });

/* Dashboard shortcut buttons. */
document.querySelectorAll("[data-go]")
  .forEach(button => {

    button.addEventListener("click", () => {
      showPage(button.dataset.go);
    });
  });

/* Mobile navigation. */
document.getElementById("menuToggle")
  .addEventListener("click", () => {

    document.getElementById("sidebar")
      .classList.toggle("show");
  });


/* =====================================================
   6. DASHBOARD
===================================================== */

function updateDashboard() {

  document.getElementById("totalApplications").textContent =
    applications.length;

  document.getElementById("totalInterviews").textContent =
    interviews.length;

  document.getElementById("totalJobs").textContent =
    jobs.length;

  document.getElementById("totalSaved").textContent =
    savedJobs.length;

  document.getElementById("jobNavCount").textContent =
    jobs.length;

  renderCharts();

  renderRecent();

  renderDashboardInterviews();
}


/* DASHBOARD CHARTS */
function renderCharts() {

  if (!window.Chart) return;

  const monthly = Array(12).fill(0);

  applications.forEach(application => {

    const date = new Date(application.date + "T12:00:00");

    if (!Number.isNaN(date.getTime())) {
      monthly[date.getMonth()]++;
    }
  });

  if (applicationsChart) {
    applicationsChart.destroy();
  }

  applicationsChart = new Chart(
    document.getElementById("applicationsChart"),
    {
      type: "line",

      data: {
        labels: [
          "Jan", "Feb", "Mar", "Apr",
          "May", "Jun", "Jul", "Aug",
          "Sep", "Oct", "Nov", "Dec"
        ],

        datasets: [{
          data: monthly,
          borderColor: "#7C0E44",
          backgroundColor: "rgba(124,14,68,.09)",
          fill: true,
          tension: .4,
          borderWidth: 2.5,
          pointRadius: 3,
          pointBackgroundColor: "#7C0E44"
        }]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: {
            display: false
          }
        },

        scales: {
          x: {
            grid: {
              display: false
            },

            ticks: {
              color: "#A48D98",
              font: {
                size: 10
              }
            }
          },

          y: {
            beginAtZero: true,

            ticks: {
              precision: 0,
              color: "#A48D98",
              font: {
                size: 10
              }
            },

            grid: {
              color: "#F3EAEF"
            }
          }
        }
      }
    }
  );

  const counts = statuses.map(status =>
    applications.filter(application =>
      application.status === status
    ).length
  );

  if (statusChart) {
    statusChart.destroy();
  }

  statusChart = new Chart(
    document.getElementById("statusChart"),
    {
      type: "doughnut",

      data: {
        labels: statuses,

        datasets: [{
          data: counts,

          backgroundColor: [
            "#8D75B6",
            "#D69A4B",
            "#43866C",
            "#AA5E7A",
            "#D66D7B"
          ],

          borderWidth: 3,
          borderColor: "#fff"
        }]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "69%",

        plugins: {
          legend: {
            position: "bottom",

            labels: {
              usePointStyle: true,
              boxWidth: 7,
              padding: 14,

              font: {
                size: 10
              }
            }
          }
        }
      }
    }
  );
}


/* RECENT APPLICATIONS */
function renderRecent() {

  const body =
    document.getElementById("recentApplications");

  const recent = [...applications]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4);

  body.innerHTML = recent.length

    ? recent.map(application => `
        <tr>
          <td class="fw-semibold">
            ${escapeHTML(application.title)}
          </td>

          <td>${escapeHTML(application.company)}</td>

          <td>${formatDate(application.date)}</td>

          <td>${statusBadge(application.status)}</td>
        </tr>
      `).join("")

    : `
        <tr>
          <td colspan="4">
            <div class="empty-state">
              <strong>No applications yet</strong>
              <p>Explore jobs to get started.</p>
            </div>
          </td>
        </tr>
      `;
}


/* UPCOMING INTERVIEWS ON DASHBOARD */
function renderDashboardInterviews() {

  const element =
    document.getElementById("dashboardInterviews");

  const today = new Date().toISOString().slice(0, 10);

  const upcoming = [...interviews]
    .filter(interview => interview.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 3);

  element.innerHTML = upcoming.length

    ? upcoming.map(interview => {

        const date = shortDate(interview.date);

        return `
          <div class="compact-item">
            <div class="compact-date">
              <strong>${date.day}</strong>
              <small>${date.month}</small>
            </div>

            <div>
              <strong>
                ${escapeHTML(interview.position)}
              </strong>

              <small>
                ${escapeHTML(interview.company)} ·
                ${escapeHTML(interview.time)}
              </small>
            </div>

          </div>
        `;
      }).join("")

    : `
        <div class="empty-state">
          <i class="bi bi-calendar2-plus"></i>
          <strong>No upcoming interviews</strong>
          <p>Your scheduled interviews will appear here.</p>
        </div>
      `;
}


/* =====================================================
   7. FIND JOBS
===================================================== */

function filteredJobs() {

  const keyword = document
    .getElementById("jobSearch")
    .value.trim()
    .toLowerCase();

  const department =
    document.getElementById("departmentFilter").value;

  const location =
    document.getElementById("locationFilter").value;

  const type =
    document.getElementById("typeFilter").value;

  return jobs.filter(job => {

    const searchableText = [
      job.title,
      job.department,
      job.company,
      job.location,
      job.description,
      ...job.skills
    ].join(" ").toLowerCase();

    const matchesKeyword =
      !keyword || searchableText.includes(keyword);

    const matchesDepartment =
      !department || job.department === department;

    const matchesLocation =
      !location || job.location === location;

    const matchesType =
      !type || job.type === type;

    return matchesKeyword &&
      matchesDepartment &&
      matchesLocation &&
      matchesType;
  });
}


/* JOB CARD */
function jobCard(job) {

  const applied = applications.some(
    application => application.jobId === job.id
  );

  const saved = savedJobs.includes(job.id);

  return `
    <div class="col-md-6 col-xl-4">

      <article class="job-card">

        <div class="job-card-top">

          <div class="company-avatar">
            ${escapeHTML(job.company.charAt(0))}
          </div>

          <div class="d-flex align-items-start gap-2">

            <span class="match-pill">
              ${job.match}% match
            </span>

            <button
              class="save-job ${saved ? "saved" : ""}"
              onclick="toggleSaved(${job.id})"
              title="${saved ? "Remove saved job" : "Save job"}"
            >
              <i class="bi bi-bookmark${saved ? "-fill" : ""}"></i>
            </button>

          </div>
        </div>

        <h5>${escapeHTML(job.title)}</h5>

        <p class="company-name">
          ${escapeHTML(job.company)}
        </p>

        <span class="department-pill">
          ${escapeHTML(job.department || "General")}
        </span>

        <p class="job-description">
          ${escapeHTML(job.description || "Contribute to daily team activities and support departmental goals.")}
        </p>

        <div class="job-meta">
          <span>
            <i class="bi bi-geo-alt"></i>
            ${escapeHTML(job.location)}
          </span>

          <span>
            <i class="bi bi-clock"></i>
            ${escapeHTML(job.type)}
          </span>
        </div>

        <div class="job-tags">
          ${job.skills.map(skill => `
            <span class="job-tag">
              ${escapeHTML(skill)}
            </span>
          `).join("")}
        </div>

        <div class="job-card-bottom">

          <span class="job-salary">
            ${escapeHTML(job.salary)}
          </span>

          <button
            class="btn btn-primary"
            onclick="applyJob(${job.id})"
            ${applied ? "disabled" : ""}
          >
            ${applied ? "Applied" : "Apply now"}
          </button>

        </div>

      </article>
    </div>
  `;
}


/* DISPLAY JOBS */
function displayJobs() {

  const list = filteredJobs();

  document.getElementById("jobResultCount").textContent =
    `${list.length} opportunit${list.length === 1 ? "y" : "ies"}`;

  document.getElementById("jobListings").innerHTML =
    list.length

      ? list.map(jobCard).join("")

      : `
        <div class="col-12">
          <div class="panel-card empty-state">
            <i class="bi bi-search"></i>
            <strong>No matching jobs found</strong>
            <p>Try changing your keywords or filters.</p>
          </div>
        </div>
      `;
}


/* SEARCH INPUTS */
["jobSearch", "departmentFilter", "locationFilter", "typeFilter"]
  .forEach(id => {

    document.getElementById(id)
      .addEventListener("input", displayJobs);
  });


/* RESET FILTERS */
document.getElementById("clearFilters")
  .addEventListener("click", () => {

    document.getElementById("jobSearch").value = "";
    document.getElementById("departmentFilter").value = "";
    document.getElementById("locationFilter").value = "";
    document.getElementById("typeFilter").value = "";

    displayJobs();
  });


/* APPLY FOR JOB */
function applyJob(id) {

  const job = jobs.find(item => item.id === id);

  if (
    !job ||
    applications.some(application => application.jobId === id)
  ) {
    return;
  }

  applications.push({
    jobId: id,
    title: job.title,
    company: job.company,
    date: new Date().toISOString().slice(0, 10),
    status: "Applied"
  });

  persist();

  displayJobs();

  updateDashboard();

  toast("Application submitted successfully!");
}


/* =====================================================
   8. SAVED JOBS
===================================================== */

function toggleSaved(id) {

  savedJobs = savedJobs.includes(id)

    ? savedJobs.filter(jobId => jobId !== id)

    : [...savedJobs, id];

  persist();

  displayJobs();

  displaySavedJobs();

  updateDashboard();

  toast(
    savedJobs.includes(id)
      ? "Job added to saved list."
      : "Job removed from saved list."
  );
}


function displaySavedJobs() {

  const list = jobs.filter(job =>
    savedJobs.includes(job.id)
  );

  document.getElementById("savedListings").innerHTML =
    list.length

      ? list.map(jobCard).join("")

      : `
        <div class="col-12">
          <div class="panel-card empty-state">
            <i class="bi bi-bookmark-heart"></i>
            <strong>No saved jobs yet</strong>
            <p>
              Use the bookmark icon on a job card
              to save opportunities.
            </p>

            <button
              class="btn btn-primary btn-sm mt-3"
              onclick="showPage('jobs')"
            >
              Browse jobs
            </button>
          </div>
        </div>
      `;
}


/* =====================================================
   9. APPLICATION TRACKER
===================================================== */

document.getElementById("applicationFilter")
  .addEventListener("change", displayApplications);


function displayApplications() {

  const filter =
    document.getElementById("applicationFilter").value;

  const rows = applications.filter(application =>
    !filter || application.status === filter
  );

  document.getElementById("applicationTable").innerHTML =
    rows.length

      ? rows.map(application => `
          <tr>

            <td class="fw-semibold">
              ${escapeHTML(application.title)}
            </td>

            <td>${escapeHTML(application.company)}</td>

            <td>${formatDate(application.date)}</td>

            <td>
              <select
                class="form-select status-select"
                aria-label="Update application status"
                onchange="changeApplicationStatus(
                  ${application.jobId},
                  this.value
                )"
              >
                ${statuses.map(status => `
                  <option ${
                    application.status === status
                      ? "selected"
                      : ""
                  }>
                    ${status}
                  </option>
                `).join("")}
              </select>
            </td>

            <td>
              <button
                class="table-action"
                title="Delete application"
                onclick="deleteApplication(${application.jobId})"
              >
                <i class="bi bi-trash3"></i>
              </button>
            </td>

          </tr>
        `).join("")

      : `
        <tr>
          <td colspan="5">
            <div class="empty-state">
              <strong>No applications found</strong>
              <p>
                Applications matching this filter
                will appear here.
              </p>
            </div>
          </td>
        </tr>
      `;
}


/* CHANGE APPLICATION STATUS */
function changeApplicationStatus(id, status) {

  const application = applications.find(
    item => item.jobId === id
  );

  if (!application || !statuses.includes(status)) return;

  application.status = status;

  persist();

  displayApplications();

  updateDashboard();

  toast("Application status updated.");
}


/* DELETE APPLICATION */
function deleteApplication(id) {

  if (!confirm("Remove this application from your tracker?")) {
    return;
  }

  applications = applications.filter(
    application => application.jobId !== id
  );

  persist();

  displayApplications();

  displayJobs();

  updateDashboard();

  toast("Application removed.");
}


/* =====================================================
   10. RESUME BUILDER
===================================================== */

function readResumeForm() {

  return Object.fromEntries(
    resumeFields.map(field => [

      field.toLowerCase(),

      document.getElementById(
        "resume" + field
      ).value.trim()

    ])
  );
}


/* UPDATE RESUME PREVIEW */
function updateResumePreview() {

  const resume = readResumeForm();

  document.getElementById("previewName").textContent =
    resume.name || "Your Name";

  document.getElementById("previewTitle").textContent =
    resume.title || "Professional Title";

  document.getElementById("previewEmail").textContent =
    resume.email || "your.email@example.com";

  document.getElementById("previewSummary").textContent =
    resume.summary ||
    "Your professional summary will appear here.";

  document.getElementById("previewSkills").textContent =
    resume.skills ||
    "Your skills will appear here.";

  document.getElementById("previewEducation").textContent =
    resume.education ||
    "Your education details will appear here.";

  document.getElementById("previewExperience").textContent =
    resume.experience ||
    "Your experience and projects will appear here.";
}


/* LOAD THE CURRENT USER'S RESUME */
function loadResume() {

  resumeFields.forEach(field => {

    const input = document.getElementById(
      "resume" + field
    );

    input.value =
      resumeData[field.toLowerCase()] || "";
  });

  updateResumePreview();
}


/* LIVE PREVIEW */
resumeFields.forEach(field => {

  document.getElementById("resume" + field)
    .addEventListener("input", updateResumePreview);
});


/* SAVE RESUME */
document.getElementById("resumeForm")
  .addEventListener("submit", event => {

    event.preventDefault();

    resumeData = readResumeForm();

    persist();

    updateResumePreview();

    toast("Resume details saved to your account.");
  });


/* PRINT OR SAVE AS PDF */
document.getElementById("printResume")
  .addEventListener("click", () => {

    updateResumePreview();

    window.print();
  });


/* =====================================================
   11. INTERVIEW PLANNER
===================================================== */

/* Set minimum date to today. */
document.getElementById("interviewDate").min =
  new Date().toISOString().slice(0, 10);


/* ADD INTERVIEW */
document.getElementById("interviewForm")
  .addEventListener("submit", event => {

    event.preventDefault();

    interviews.push({

      id: Date.now(),

      company: document
        .getElementById("interviewCompany")
        .value.trim(),

      position: document
        .getElementById("interviewPosition")
        .value.trim(),

      date: document.getElementById("interviewDate").value,

      time: document.getElementById("interviewTime").value,

      notes: document
        .getElementById("interviewNotes")
        .value.trim()
    });

    persist();

    event.target.reset();

    document.getElementById("interviewDate").min =
      new Date().toISOString().slice(0, 10);

    displayInterviews();

    updateDashboard();

    toast("Interview added to your planner.");
  });


/* DISPLAY INTERVIEWS */
function displayInterviews() {

  const sorted = [...interviews].sort(
    (a, b) =>
      a.date.localeCompare(b.date) ||
      a.time.localeCompare(b.time)
  );

  document.getElementById("interviewCount").textContent =
    `${interviews.length} SCHEDULED`;

  document.getElementById("interviewList").innerHTML =
    sorted.length

      ? sorted.map(interview => {

          const date = shortDate(interview.date);

          return `
            <article class="interview-card">

              <div class="interview-date">
                <strong>${date.day}</strong>
                <small>${date.month}</small>
              </div>

              <div class="interview-info">

                <strong>
                  ${escapeHTML(interview.position)}
                </strong>

                <div class="company-name">
                  ${escapeHTML(interview.company)} ·
                  ${escapeHTML(interview.time)}
                </div>

                ${
                  interview.notes
                    ? `<p>${escapeHTML(interview.notes)}</p>`
                    : ""
                }

              </div>

              <div class="interview-actions">

                <button
                  class="table-action"
                  title="Remove interview"
                  onclick="deleteInterview(${interview.id})"
                >
                  <i class="bi bi-trash3"></i>
                </button>

              </div>

            </article>
          `;
        }).join("")

      : `
        <div class="empty-state">
          <i class="bi bi-calendar2-plus"></i>
          <strong>No interviews scheduled</strong>
          <p>
            Add an interview using the form
            to keep your schedule organised.
          </p>
        </div>
      `;
}


/* DELETE INTERVIEW */
function deleteInterview(id) {

  if (!confirm("Remove this interview?")) {
    return;
  }

  interviews = interviews.filter(
    interview => interview.id !== id
  );

  persist();

  displayInterviews();

  updateDashboard();

  toast("Interview removed.");
}


/* =====================================================
   12. RESTORE LOGIN SESSION
===================================================== */

function restoreSession() {

  const loggedIn =
    sessionStorage.getItem("careerLoggedIn") === "true";

  const email =
    sessionStorage.getItem("careerUserEmail");

  const name =
    sessionStorage.getItem("careerUserName");

  if (loggedIn && email && name) {

    activeUser = {
      email,
      name
    };

    /* Restore only this account's personal information. */
    loadUserData(email);

    showApplication();

  } else {

    showAuth("login");
  }
}


/* START APPLICATION */
restoreSession();

