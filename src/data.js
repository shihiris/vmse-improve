// DATA & CONFIGURATION
const CONFIG = {
    appName: "VMSE Improve",
    appDesc: "Validated Modeling & Simulation Environment",
    version: "v4.3.4-1",
    releaseDate: "Sep 2025",
    managedBy: "Computational Science Center of Excellence (CSCoE) Translational & Development Domain",
    videoEmbed: "https://drive.google.com/file/d/13kr8Qj78syZuotZuKxlLXk7vxsGq3FrD/preview"
};

const NAV_ITEMS = [
    { id: 'home', label: 'Overview' },
    { id: 'components', label: 'Components' },
    { id: 'tools', label: 'Modeling Tools' },
    { id: 'integrations', label: 'Integrations' },
    { id: 'support', label: 'Support & Access' },
];

const UPDATES_DATA = [
    { title: "Roche Single Sign-On (SSO)", desc: "Seamless access using existing Roche account credentials." },
    { title: "Google Drive Integration", desc: "Work with files stored in Google Drive directly within the Improve Client." },
    { title: "New Run Workspace", desc: "Select your preferred local folder for temporary files when using local tools." },
    { title: "Improve CLI", desc: "New Command Line Interface for automation and scripting." }
];

const TOOLS_DATA = [
    { name: "NONMEM", desc: "Nonlinear Mixed Effects Modeling", env: "sHPC Cluster, Local", href: "https://rochewiki.roche.com/search?q=NONMEM" },
    { name: "PsN (Perl-speaks-NONMEM)", desc: "Automation and diagnostics for NONMEM (many PsN utilities available)", env: "sHPC Cluster, Local", href: "https://rochewiki.roche.com/search?q=PsN" },
    { name: "Monolix", desc: "Lixoft Monolix suite for population NLME modeling", env: "sHPC (distMonolix), Server, Local", href: "https://rochewiki.roche.com/search?q=Monolix" },
    { name: "Phoenix", desc: "Certara Phoenix (WinNonlin) — NLME, IVIVC, NCA", env: "Dedicated Server, Local", href: "https://rochewiki.roche.com/search?q=Phoenix" },
    { name: "R / RStudio", desc: "Statistical computing and graphics; multiple run modes (server, local, container)", env: "Docker, sHPC, Local, BEE", href: "https://rochewiki.roche.com/search?q=R+RStudio" },
    { name: "Simcyp", desc: "PBPK Modeling & Simulation", env: "Dedicated Server, Local", href: "https://rochewiki.roche.com/search?q=Simcyp" },
    { name: "Matlab", desc: "Numerical computing environment (2019a+ supported)", env: "sHPC, Dedicated Server, Local", href: "https://rochewiki.roche.com/search?q=Matlab" },
    { name: "Berkeley Madonna", desc: "Differential equation solver (BM v8 supported)", env: "Local", href: "https://rochewiki.roche.com/search?q=Berkeley+Madonna" },
    { name: "SAS", desc: "Statistical Analysis System", env: "Server (rbamvimprove02), Local", href: "https://rochewiki.roche.com/search?q=SAS" },
    { name: "GastroPlus", desc: "PBPK / ADMET simulation (dedicated VM recommended)", env: "Dedicated VM, Local", href: "https://rochewiki.roche.com/search?q=GastroPlus" },
    { name: "GraphPad", desc: "Graphing and statistical analysis (GraphPad Prism)", env: "Local", href: "https://rochewiki.roche.com/search?q=GraphPad" },
    { name: "Simulx", desc: "Monolix/Simulx simulation tooling", env: "Local, Server", href: "https://rochewiki.roche.com/search?q=Simulx" },
    { name: "Python", desc: "Scripting and modeling with Python", env: "sHPC Cluster, Local", href: "https://rochewiki.roche.com/search?q=Python" },
    { name: "Perl", desc: "Scripting language used by PsN and other tools", env: "sHPC Cluster, Local", href: "https://rochewiki.roche.com/search?q=Perl" },
    { name: "Shell", desc: "Shell/command-line execution", env: "Local, Server", href: "https://rochewiki.roche.com/search?q=Shell" },
    { name: "VSCode", desc: "Development editor used to edit/run code locally", env: "Local", href: "https://rochewiki.roche.com/search?q=VSCode" },
    { name: "Cursor", desc: "The AI code editor", env: "Local", href: "https://rochewiki.roche.com/search?q=Cursor" } 
];

const INTEGRATION_DATA = {
    sources: [
        { name: "entimICE", desc: "Clinical data repository. Read/Write support." },
        { name: "Ocean", desc: "Data lake integration (Harbour). Read/Write support." },
        { name: "D360", desc: "Scientific data search and retrieval." },
        { name: "cBDR", desc: "Clinical Biometrics Data Repository." },
        { name: "DCH", desc: "Data Commons Hub (Snowflake) via rDCH." }
    ],
    targets: [
        { name: "IDM", desc: "Integrated Document Management. Automated upload of CSR outputs." },
        { name: "Veeva RIM", desc: "Regulatory Information Management. Direct transfer of PDF/OUT files." },
        { name: "GitLab", desc: "Source control integration for dev projects." }
    ]
};

const SUPPORT_LINKS = {
    access: [
        { label: "Request Improve Access (CIDM)", href: "#" },
        { label: "Request 3rd-Party Software License", href: "#" },
        { label: "Request sHPC (modsim) Access", href: "#" }
    ],
    training: [
        { label: "Cornerstone Trainings", href: "#" },
        { label: "Improve Wiki / gSite", href: "#" },
        { label: "Improve Client FAQ", href: "#" }
    ],
    downloads: [
        { label: "Improve Client v4.3.4-1 (Windows)", href: "#" },
        { label: "Improve Client v4.3.4-1 (MAC)", href: "#" },
        { label: "Improve CLI (Windows/Linux/Mac)", href: "#" }
    ],
    help: [
        { label: "Report an Incident (ServiceNow)", href: "https://roche.service-now.com/rose?id=sc_cat_item_guide&sys_id=bc98c4c71b440910311931da9b4bcb94" },
        { label: "VMSE Improve Peeps Chat", href: "https://chat.google.com/room/AAAAtqcRhyU?cls=7" },
        { label: "Suggestion Box", href: "https://forms.gle/7wcwG9FaDKLCDAFG7" }
    ]
};
