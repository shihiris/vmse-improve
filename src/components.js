// ICONS and Reusable UI Components
const IconBase = ({ size = 24, className = "", children, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        {children}
    </svg>
);

const Icons = {
    Power: (p) => <IconBase {...p}><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></IconBase>,
    Menu: (p) => <IconBase {...p}><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></IconBase>,
    X: (p) => <IconBase {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></IconBase>,
    ChevronRight: (p) => <IconBase {...p}><polyline points="9 18 15 12 9 6"/></IconBase>,
    FileText: (p) => <IconBase {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></IconBase>,
    Shield: (p) => <IconBase {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></IconBase>,
    Cpu: (p) => <IconBase {...p}><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></IconBase>,
    Database: (p) => <IconBase {...p}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></IconBase>,
    Terminal: (p) => <IconBase {...p}><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></IconBase>,
    Activity: (p) => <IconBase {...p}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></IconBase>,
    Server: (p) => <IconBase {...p}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></IconBase>,
    Grid: (p) => <IconBase {...p}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></IconBase>,
    Share2: (p) => <IconBase {...p}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></IconBase>,
    ExternalLink: (p) => <IconBase {...p}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></IconBase>,
    Download: (p) => <IconBase {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></IconBase>,
    HelpCircle: (p) => <IconBase {...p}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></IconBase>
};

// Reusable UI components
const InfoCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center mb-4">
            <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
            <h3 className="ml-3 text-lg font-bold text-slate-800">{title}</h3>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
);

const UpdateItem = ({ title, desc }) => (
    <div className="flex items-start p-3 hover:bg-slate-50 rounded-lg transition-colors group">
        <div className="flex-shrink-0 mt-1">
            <div className="h-2 w-2 rounded-full bg-lime-500 group-hover:bg-lime-600 transition-colors"></div>
        </div>
        <div className="ml-4">
            <h4 className="text-sm font-semibold text-slate-800">{title}</h4>
            <p className="text-sm text-slate-600">{desc}</p>
        </div>
    </div>
);

const ComponentCard = ({ title, subtitle, icon, color, features }) => (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
        <div className={`${color} p-6 flex items-center justify-between`}>
            <div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-white text-opacity-90 text-sm">{subtitle}</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">{icon}</div>
        </div>
        <div className="p-6">
            <ul className="space-y-3">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-600">
                        <Icons.ChevronRight className="flex-shrink-0 h-5 w-5 text-lime-500 mr-2" />
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const ToolRow = ({ name, desc, env }) => (
    <tr className="hover:bg-slate-50 transition-colors">
        <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm font-bold text-slate-900">{name}</div></td>
        <td className="px-6 py-4"><div className="text-sm text-slate-600">{desc}</div></td>
        <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-slate-100 text-slate-700 border border-slate-200">{env}</span></td>
    </tr>
);

const IntegrationItem = ({ name, desc }) => (
    <li className="flex items-start">
        <div className="bg-lime-100 rounded-md p-1 mr-3 flex-shrink-0"><Icons.Grid size={16} className="text-lime-700" /></div>
        <div><span className="font-bold text-slate-800 block">{name}</span><span className="text-xs text-slate-500">{desc}</span></div>
    </li>
);

const SupportCard = ({ title, icon, links }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-lime-200 transition-colors">
        <div className="flex items-center mb-4 text-lime-700">
            {icon}
            <h3 className="ml-2 text-lg font-bold text-slate-800">{title}</h3>
        </div>
        <ul className="space-y-3">
            {links.map((link, idx) => (
                <li key={idx}>
                    <a href={link.href} className="group flex items-center text-sm text-slate-600 hover:text-lime-700 transition-colors">
                        <Icons.ExternalLink size={14} className="mr-2 text-slate-400 group-hover:text-lime-500" />
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);
