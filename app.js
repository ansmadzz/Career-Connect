
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
    company: "BrightLabs",
    location: "Kuala Lumpur",
    salary: "RM 4,000 – RM 6,000",
    type: "Full-time",
    skills: ["HTML", "CSS", "JavaScript"],
    match: 95
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Pixel Studio",
    location: "Petaling Jaya",
    salary: "RM 3,500 – RM 5,000",
    type: "Full-time",
    skills: ["Figma", "UI Design", "Prototyping"],
    match: 90
  },
  {
    id: 3,
    title: "Web Developer Intern",
    company: "Nexa Digital",
    location: "Shah Alam",
    salary: "RM 1,200 – RM 1,800",
    type: "Internship",
    skills: ["HTML", "CSS", "PHP"],
    match: 88
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "CloudTech",
    location: "Cyberjaya",
    salary: "RM 4,500 – RM 7,000",
    type: "Full-time",
    skills: ["JavaScript", "Python", "SQL"],
    match: 82
  },
  {
    id: 5,
    title: "Digital Marketing Intern",
    company: "Mosaic Media",
    location: "Remote",
    salary: "RM 1,000 – RM 1,500",
    type: "Internship",
    skills: ["SEO", "Marketing", "Analytics"],
    match: 78
  },
  {
    id: 6,
    title: "Product Designer",
    company: "Orbit Systems",
    location: "Kuala Lumpur",
    salary: "RM 5,000 – RM 7,500",
    type: "Full-time",
    skills: ["Figma", "UX Research", "Design"],
    match: 75
  },
  {
    id: 7,
    title: "IT Support Assistant",
    company: "Northstar Group",
    location: "Shah Alam",
    salary: "RM 2,500 – RM 3,400",
    type: "Full-time",
    skills: ["Troubleshooting", "Networking", "Support"],
    match: 84
  },
  {
    id: 8,
    title: "Content Creator",
    company: "Mosaic Media",
    location: "Remote",
    salary: "RM 1,800 – RM 2,500",
    type: "Part-time",
    skills: ["Content", "Canva", "Video"],
    match: 80
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

  const location =
    document.getElementById("locationFilter").value;

  const type =
    document.getElementById("typeFilter").value;

  return jobs.filter(job => {

    const matchesKeyword =
      !keyword ||
      [
        job.title,
        job.company,
        job.location,
        ...job.skills
      ].join(" ").toLowerCase().includes(keyword);

    const matchesLocation =
      !location || job.location === location;

    const matchesType =
      !type || job.type === type;

    return matchesKeyword &&
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
["jobSearch", "locationFilter", "typeFilter"]
  .forEach(id => {

    document.getElementById(id)
      .addEventListener("input", displayJobs);
  });


/* RESET FILTERS */
document.getElementById("clearFilters")
  .addEventListener("click", () => {

    document.getElementById("jobSearch").value = "";
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
