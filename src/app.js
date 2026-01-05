const { useState } = React;

// PAGE SECTIONS
const HomeSection = () => (
    <div className="space-y-12">
        <div className="bg-gradient-to-r from-lime-600 to-green-700 rounded-2xl shadow-xl overflow-hidden text-white p-8 md:p-12 relative">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-white p-2 rounded-full shadow-lg">
                            <Icons.Power size={32} className="text-lime-600" />
                        </div>
                        <h2 className="text-lime-100 font-semibold tracking-wide uppercase text-sm">The Modeling Workbench</h2>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
                        {CONFIG.appName}
                    </h1>
                    <p className="text-lg md:text-xl text-lime-50 mb-8 leading-relaxed font-medium">
                        The central ecosystem for xRED clinical and pre-clinical modelers. 
                        Integrating data access, high-performance computing, and regulatory reporting into one validated environment.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-white text-lime-700 px-6 py-3 rounded-lg font-bold hover:bg-lime-50 transition shadow-md flex items-center">
                            Request Access <Icons.ChevronRight size={18} className="ml-2" />
                        </button>
                        <button className="bg-lime-800 bg-opacity-40 border border-lime-300 text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-60 transition flex items-center">
                            View Documentation <Icons.FileText size={18} className="ml-2" />
                        </button>
                    </div>
                </div>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-lime-500/30 bg-black/20 transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
                    {
                        // Many browsers block autoplay unless the media is muted. Append autoplay and mute params to the embed URL.
                    }
                    {(() => {
                        const sep = CONFIG.videoEmbed.includes('?') ? '&' : '?';
                        const videoSrc = `${CONFIG.videoEmbed}${sep}autoplay=1&mute=1`;
                        return (
                            <div className="absolute top-0 left-0 w-full h-full">
                                <iframe title="VMSE Improve video" src={videoSrc} frameBorder="0" width="100%" height="100%" allow="autoplay; fullscreen; encrypted-media" allowFullScreen={true} className="absolute top-0 left-0 w-full h-full" />
                                <div className="absolute bottom-3 left-3 z-20 p-2 bg-black/60 text-white text-sm rounded">
                                    <a href={CONFIG.videoShare || CONFIG.videoEmbed} target="_blank" rel="noopener noreferrer" className="underline">Open video in Google Drive (sign in / enable Google cookies)</a>
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-y-1/4 translate-x-1/4 text-white pointer-events-none">
                <Icons.Power size={400} />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard icon={<Icons.Shield className="text-lime-600" />} title="GxP Validated" description="A fully validated environment (C3 Data Classification) ensuring compliance for clinical data analysis." />
            <InfoCard icon={<Icons.Cpu className="text-green-600" />} title="HPC Integrated" description="Seamlessly submit jobs to Shared HPC (sHPC) clusters in Kaiseraugst and Indianapolis." />
            <InfoCard icon={<Icons.Database className="text-lime-700" />} title="Data Centric" description="Integrated with Ocean Harbour (aka entimICE), DCH, D360, and more for streamlined data ordering." />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-slate-800">Latest Updates ({CONFIG.version})</h2>
                <span className="bg-lime-100 text-lime-800 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-lime-200">Released {CONFIG.releaseDate}</span>
            </div>
            <div className="space-y-3">
                {UPDATES_DATA.map((update, idx) => (
                    <UpdateItem key={idx} title={update.title} desc={update.desc} />
                ))}
            </div>
        </div>
    </div>
);

const ComponentsSection = () => (
    <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Components</h2>
            <p className="text-lg text-slate-600">The ecosystem consists of several interconnected applications designed to handle specific stages of the modeling and simulation workflow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ComponentCard 
                title="Improve Client" subtitle="The Modeling Workbench" icon={<Icons.Terminal size={32} className="text-white" />} color="bg-lime-600"
                features={["Central hub for all modeling activities", "Analysis Trees for workflow management", "Direct integration with sHPC clusters", "Version control for files and steps"]}
            />
            <ComponentCard
                title="Improve CLI" subtitle="Command-line Interface" icon={<Icons.Terminal size={32} className="text-white" />} color="bg-indigo-600"
                features={["Automation and scripting for workflows", "Integrates with Improve Client for headless runs", "Supports job submission to sHPC and local execution"]}
            />

            <ComponentCard 
                title="MS Data Order" subtitle="Data Request Tool" icon={<Icons.Database size={32} className="text-white" />} color="bg-green-600"
                features={["Web-based application for requesting M&S data", "Automated dataset creation", "Used by pRED PHME and CPDS", "Part of the ADaMO project"]}
            />
            <ComponentCard
                title="ANCA" subtitle="Automated NCA Tool" icon={<Icons.Activity size={32} className="text-white" />} color="bg-rose-600"
                features={[
                    "Automates Non-Compartmental Analysis (NCA)",
                    <span key="anca-link">Learn more: <a href="https://sites.google.com/roche.com/anca" target="_blank" rel="noopener noreferrer" className="text-lime-700 underline">ANCA site</a></span>
                ]}
            />

            <ComponentCard 
                title="NCA Data Order" subtitle="PK Parameter Requests" icon={<Icons.Activity size={32} className="text-white" />} color="bg-slate-700"
                features={["Web tool for NCA data requests", "Used by pRED and gRED CP scientists", "Generates folder structures automatically", "Streamlines PK parameter extraction"]}
            />
            <ComponentCard 
                title="pREDATOR" subtitle="Automated Reporting" icon={<Icons.FileText size={32} className="text-white" />} color="bg-emerald-600"
                features={["Generates non-clinical study plans and reports", "Web-based user interface", "Templates for CNS and Transporter reports", "Automated study metadata ingestion"]}
            />
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg mt-8">
            <div className="flex">
                <div className="flex-shrink-0"><Icons.HelpCircle className="h-5 w-5 text-orange-400" /></div>
                <div className="ml-3"><p className="text-sm text-orange-800"><strong>Note on Improve Office:</strong> As of release {CONFIG.version}, Improve Office has been retired. Users must transition to the Improve Client.</p></div>
            </div>
        </div>
    </div>
);

const ToolsSection = () => (
    <div className="space-y-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center">
                <div className="bg-lime-100 p-2 rounded-lg mr-4"><Icons.Cpu className="text-lime-600" size={24} /></div>
                <div><h2 className="text-2xl font-bold text-slate-900">Supported Modeling Tools</h2><p className="text-slate-600 mt-1">Improve orchestrates these tools on local machines, virtual servers, or the HPC cluster.</p></div>
            </div>
            <div className="p-0 overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tool</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Environment</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                        {TOOLS_DATA.map((tool, idx) => (
                            <ToolRow key={idx} name={tool.name} desc={tool.desc} env={tool.env} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        {/* Infrastructure Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-lime-500">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center"><Icons.Server className="mr-2 text-lime-600" size={20}/> HPC Clusters</h3>
                <ul className="space-y-3">
                    <li className="flex items-center text-sm p-2 bg-slate-50 rounded-lg"><div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div><strong>sHPC Kau:</strong> <span className="ml-2 text-slate-500">Basel (EMEA)</span></li>
                    <li className="flex items-center text-sm p-2 bg-slate-50 rounded-lg"><div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div><strong>sHPC Indy:</strong> <span className="ml-2 text-slate-500">Indianapolis (US)</span></li>
                </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-slate-500">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center"><Icons.Server className="mr-2 text-slate-600" size={20}/> Dedicated Servers</h3>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-lime-50 text-lime-700 border border-lime-200 rounded text-xs font-mono">rbamvimprove01</span>
                    <span className="px-3 py-1 bg-lime-50 text-lime-700 border border-lime-200 rounded text-xs font-mono">rbamvimprove02</span>
                    <span className="px-3 py-1 bg-lime-50 text-lime-700 border border-lime-200 rounded text-xs font-mono">rbamvcpsimcyp01</span>
                </div>
            </div>
        </div>
    </div>
);

const IntegrationsSection = () => (
    <div className="space-y-10">
        <div className="text-center max-w-3xl mx-auto"><h2 className="text-3xl font-bold text-slate-900 mb-4">System Integrations</h2><p className="text-lg text-slate-600">Connecting data sources with reporting systems.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 text-slate-600 px-4 py-1 rounded-full text-xs font-bold uppercase border border-slate-200">Data Sources</div>
                <ul className="space-y-4 mt-4">{INTEGRATION_DATA.sources.map((item, i) => <IntegrationItem key={i} name={item.name} desc={item.desc} />)}</ul>
            </div>
            <div className="bg-lime-600 p-6 rounded-xl shadow-lg border-2 border-lime-400 text-white flex flex-col justify-center items-center text-center transform scale-105 z-10">
                <div className="mb-4 bg-white p-4 rounded-full shadow-inner"><Icons.Power className="text-lime-600" size={48} /></div>
                <h3 className="text-2xl font-bold mb-2">{CONFIG.appName}</h3><p className="text-lime-50 text-sm">Central repository & engine.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 text-slate-600 px-4 py-1 rounded-full text-xs font-bold uppercase border border-slate-200">Reporting Targets</div>
                <ul className="space-y-4 mt-4">{INTEGRATION_DATA.targets.map((item, i) => <IntegrationItem key={i} name={item.name} desc={item.desc} />)}</ul>
            </div>
        </div>
    </div>
);

const SupportSection = () => (
    <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Support & Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SupportCard title="Access Requests" icon={<Icons.Shield size={24} />} links={SUPPORT_LINKS.access} />
            <SupportCard title="Training" icon={<Icons.FileText size={24} />} links={SUPPORT_LINKS.training} />
            <SupportCard title="Downloads" icon={<Icons.Download size={24} />} links={SUPPORT_LINKS.downloads} />
            <SupportCard title="Help & Incidents" icon={<Icons.HelpCircle size={24} />} links={SUPPORT_LINKS.help} />
        </div>
            <div className="bg-lime-50 border border-lime-200 rounded-xl p-6 mt-8">
            <h3 className="text-lg font-bold text-lime-900 mb-2">Technical Contacts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-lime-800">
                <div>
                    <p className="font-semibold">System Owner:</p>
                    <p>
                        <a href="mailto:iris.shih@roche.com" className="text-lime-700 underline">Iris Shih</a>
                    </p>
                </div>
                <div>
                    <p className="font-semibold">Technical Experts:</p>
                    <p>                       
                        <a href="mailto:vmse-improve-support@roche.com" className="text-lime-700 underline">Kamil Jaworski</a>
                        <span className="mx-2">.</span>
                        <a href="mailto:vmse-improve-support@roche.com" className="text-lime-700 underline">Grzegorz Klaczak</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

// MAIN LAYOUT & ROUTING
const ImproveEcosystem = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50 border-b border-lime-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
                            <div className="bg-white p-1.5 rounded-full border-2 border-lime-500">
                                <Icons.Power size={24} className="text-lime-600" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white">{CONFIG.appName}</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {NAV_ITEMS.map((item) => (
                                    <button key={item.id} onClick={() => setActiveTab(item.id)}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                            activeTab === item.id ? 'bg-lime-600 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-800'
                                        }`}>
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="bg-slate-800 p-2 rounded-md text-slate-400 hover:text-white">
                                {mobileMenuOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
                {mobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900">
                            {NAV_ITEMS.map((item) => (
                                <button key={item.id} onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                                        activeTab === item.id ? 'bg-lime-600 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                    }`}>
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {activeTab === 'home' && <HomeSection />}
                {activeTab === 'components' && <ComponentsSection />}
                {activeTab === 'tools' && <ToolsSection />}
                {activeTab === 'integrations' && <IntegrationsSection />}
                {activeTab === 'support' && <SupportSection />}
            </main>

            <footer className="bg-slate-900 text-slate-400 py-8 mt-12 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0 flex items-center space-x-2">
                            <Icons.Power size={16} className="text-lime-500" />
                            <div>
                                <h3 className="text-white font-bold text-lg leading-none">{CONFIG.appName} Ecosystem</h3>
                                <p className="text-xs mt-1 text-slate-500">{CONFIG.appDesc}</p>
                            </div>
                        </div>
                        <div className="text-sm text-right">
                            <p>Latest Release: <span className="text-lime-400 font-mono">{CONFIG.version}</span> ({CONFIG.releaseDate})</p>
                            <p className="mt-1">Managed by {CONFIG.managedBy}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ImproveEcosystem />);
