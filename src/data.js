// DATA & CONFIGURATION
const CONFIG = {
    appName: "VMSE Improve",
    appDesc: "Validated Modeling & Simulation Environment",
    version: "v4.3.4-1",
    releaseDate: "Sep 2025",
    managedBy: "pRED D&A Clinical Data Access Value Stream",
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
    { name: "NONMEM", desc: "Nonlinear Mixed Effects Modeling", env: "sHPC Cluster, Local" },
    { name: "Monolix", desc: "Modeling desktop application by Lixoft", env: "sHPC (distMonolix), Server, Local" },
    { name: "Phoenix", desc: "WinNonlin, NLME, IVIVC modules", env: "Dedicated Server, Local" },
    { name: "R / RStudio", desc: "Statistical computing and graphics", env: "Docker, sHPC, Local, BEE" },
    { name: "Simcyp", desc: "PBPK Modeling & Simulation", env: "Dedicated Server, Local" },
    { name: "Matlab", desc: "Numerical computing environment", env: "sHPC, Dedicated Server, Local" },
    { name: "Berkeley Madonna", desc: "Differential equation solver", env: "Local" },
    { name: "SAS", desc: "Statistical Analysis System", env: "Server (rbamvimprove02), Local" }
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
        { label: "Request Phoenix License", href: "#" },
        { label: "Request sHPC Account", href: "#" }
    ],
    training: [
        { label: "Cornerstone Trainings", href: "#" },
        { label: "Improve Wiki / gSite", href: "#" },
        { label: "Improve Client FAQ", href: "#" }
    ],
    downloads: [
        { label: "Improve Client v4.3.4-1", href: "#" },
        { label: "Improve CLI (Windows/Linux/Mac)", href: "#" },
        { label: "GastroPlus / Simcyp Installers", href: "#" }
    ],
    help: [
        { label: "Report an Incident (ServiceNow)", href: "#" },
        { label: "VMSE Improve Peeps Chat", href: "#" },
        { label: "Suggestion Box", href: "#" }
    ]
};
