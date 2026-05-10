import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import api, { 
  adminGet, adminCreate, adminUpdate, adminDelete, adminUpdateProfile, adminUpdateAbout 
} from '../../api';

// Config for dynamic CRUD
const config = {
  projects: {
    endpoint: 'projects',
    fields: [
      { name: 'title', type: 'text', required: true },
      { name: 'description', type: 'textarea', required: true },
      { name: 'tags', type: 'text' },
      { name: 'github_link', type: 'text' },
      { name: 'live_link', type: 'text' },
      { name: 'image_url', type: 'image' },
      { name: 'featured', type: 'checkbox' }
    ]
  },
  skills: {
    endpoint: 'skills',
    fields: [
      { name: 'category', type: 'text', required: true },
      { name: 'name', type: 'text', required: true },
      { name: 'proficiency', type: 'number' },
      { name: 'icon_class', type: 'text' }
    ]
  },
  experience: {
    endpoint: 'experience',
    fields: [
      { name: 'role', type: 'text', required: true },
      { name: 'company', type: 'text', required: true },
      { name: 'duration', type: 'text', required: true },
      { name: 'description', type: 'textarea' }
    ]
  },
  education: {
    endpoint: 'education',
    fields: [
      { name: 'degree', type: 'text', required: true },
      { name: 'institution', type: 'text', required: true },
      { name: 'duration', type: 'text', required: true },
      { name: 'description', type: 'textarea' }
    ]
  },
  achievements: {
    endpoint: 'achievements',
    fields: [
      { name: 'title', type: 'text', required: true },
      { name: 'issuer', type: 'text' },
      { name: 'date', type: 'text' },
      { name: 'description', type: 'textarea' }
    ]
  },
  'social-links': {
    endpoint: 'social-links',
    fields: [
      { name: 'platform', type: 'text', required: true },
      { name: 'url', type: 'text', required: true },
      { name: 'icon_class', type: 'text' }
    ]
  }
};

const CrudPanel = ({ tabKey }) => {
  const currentConfig = config[tabKey];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({});
  const [editingId, setEditingId] = useState(null);
  const fileInputRef = useRef(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await adminGet(currentConfig.endpoint);
      setData(res.data);
    } catch (err) {
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    setFormData({});
    setEditingId(null);
  }, [tabKey]);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleFileUpload = async (e, fieldName) => {
    const file = e.target.files[0];
    if(!file) return;

    const uploadData = new FormData();
    uploadData.append("file", file);

    const toastId = toast.loading(`Uploading ${fieldName}...`);
    try {
      const res = await api.post('/api/admin/upload', uploadData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setFormData(prev => ({ ...prev, [fieldName]: res.data.url }));
      toast.success("File uploaded", { id: toastId });
    } catch (err) {
      toast.error("Upload failed", { id: toastId });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await adminUpdate(currentConfig.endpoint, editingId, formData);
        toast.success("Updated successfully");
      } else {
        await adminCreate(currentConfig.endpoint, formData);
        toast.success("Created successfully");
      }
      setFormData({});
      setEditingId(null);
      if(fileInputRef.current) fileInputRef.current.value = "";
      fetchData();
    } catch (err) {
      toast.error("Operation failed");
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="glass-panel p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentConfig.fields.map(f => (
              <div key={f.name} className={f.type === 'textarea' ? 'md:col-span-2' : ''}>
                <label className="block text-[10px] font-mono text-accent uppercase tracking-widest mb-2 opacity-70">
                  {f.name.replace("_", " ")}
                </label>
                {f.type === 'textarea' ? (
                  <textarea 
                    name={f.name} 
                    value={formData[f.name] || ''} 
                    onChange={handleChange} 
                    required={f.required}
                    className="w-full bg-bg-main border border-white/5 rounded-xl p-4 text-white outline-none focus:border-accent/50 transition-all"
                    rows="4"
                  />
                ) : f.type === 'image' ? (
                  <div className="flex gap-4 items-center">
                    <input 
                      type="text" 
                      name={f.name} 
                      value={formData[f.name] || ''} 
                      onChange={handleChange} 
                      placeholder="URL or Upload"
                      className="w-full bg-bg-main border border-white/5 rounded-xl p-3 text-sm text-white outline-none focus:border-accent/50"
                    />
                    <input type="file" className="hidden" id={`file-${f.name}`} onChange={(e) => handleFileUpload(e, f.name)} />
                    <label htmlFor={`file-${f.name}`} className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl cursor-pointer text-xs font-bold transition-all">
                      Browse
                    </label>
                  </div>
                ) : f.type === 'checkbox' ? (
                    <input 
                        type="checkbox" 
                        name={f.name} 
                        checked={formData[f.name] || false} 
                        onChange={handleChange}
                        className="w-5 h-5 accent-accent"
                    />
                ) : (
                  <input 
                    type={f.type} 
                    name={f.name} 
                    value={formData[f.name] || ''} 
                    onChange={handleChange} 
                    required={f.required}
                    className="w-full bg-bg-main border border-white/5 rounded-xl p-3 text-sm text-white outline-none focus:border-accent/50"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <button type="submit" className="btn-primary py-2 text-sm">
              {editingId ? "Save Changes" : "Create Entry"}
            </button>
            {editingId && (
              <button type="button" onClick={() => {setEditingId(null); setFormData({});}} className="text-xs text-text-muted hover:text-white transition-colors">
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="glass-panel overflow-hidden">
        <table className="w-full text-left font-sans text-white text-sm">
          <thead>
            <tr className="bg-white/5 border-b border-white/5">
              <th className="p-4 font-mono text-[10px] uppercase text-accent/50 tracking-widest">Entry Details</th>
              <th className="p-4 font-mono text-[10px] uppercase text-accent/50 tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {data.map(item => (
              <tr key={item.id} className="hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <div className="font-bold mb-1">{item.title || item.name || item.role || item.platform}</div>
                  <div className="text-xs text-text-muted opacity-60 truncate max-w-md">{item.description || item.company || item.url}</div>
                </td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-4">
                    <button onClick={() => {setEditingId(item.id); setFormData(item);}} className="text-accent hover:underline text-xs font-bold">Edit</button>
                    <button onClick={async () => {
                      if(window.confirm("Delete entry?")) {
                        await adminDelete(currentConfig.endpoint, item.id);
                        fetchData();
                        toast.success("Entry removed");
                      }
                    }} className="text-red-400 hover:underline text-xs font-bold">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const SingletonPanel = ({ type }) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFunc = type === 'profile' ? api.get('/api/public/personal-profile') : api.get('/api/public/about');
    fetchFunc.then(res => setFormData(res.data)).catch(err => console.error(err)).finally(() => setLoading(false));
  }, [type]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileUpload = async (e, fieldName) => {
    const file = e.target.files[0];
    if(!file) return;
    const uploadData = new FormData();
    uploadData.append("file", file);
    const toastId = toast.loading(`Uploading ${fieldName}...`);
    try {
      const res = await api.post('/api/admin/upload', uploadData, { headers: { 'Content-Type': 'multipart/form-data' } });
      setFormData(prev => ({ ...prev, [fieldName]: res.data.url }));
      toast.success("File synchronized", { id: toastId });
    } catch (err) { toast.error("Upload failed", { id: toastId }); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateFunc = type === 'profile' ? adminUpdateProfile : adminUpdateAbout;
      await updateFunc(formData);
      toast.success(`${type} updated successfully`);
    } catch (err) { toast.error("Synchronization failed"); }
  };

  const profileFields = ['name', 'title', 'tagline', 'email', 'phone', 'location', 'date_of_birth', 'fathers_name', 'nationality'];
  const aboutFields = ['title', 'description', 'image_url', 'resume_url', 'email', 'location'];
  const fields = type === 'profile' ? profileFields : aboutFields;

  return (
    <div className="glass-panel p-8 animate-fadeIn">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields.map(f => (
            <div key={f} className={f === 'description' || f === 'about_text' ? 'md:col-span-2' : ''}>
              <label className="block text-[10px] font-mono text-accent uppercase tracking-widest mb-2 opacity-70">{f.replace("_", " ")}</label>
              {f === 'description' || f === 'about_text' ? (
                <textarea rows="6" name={f} value={formData[f] || ''} onChange={handleChange} className="w-full bg-bg-main border border-white/5 rounded-xl p-4 text-white outline-none focus:border-accent/50 transition-all" />
              ) : f.includes('url') ? (
                <div className="flex gap-4 items-center">
                  <input type="text" name={f} value={formData[f] || ''} onChange={handleChange} className="w-full bg-bg-main border border-white/5 rounded-xl p-3 text-sm text-white outline-none focus:border-accent/50" />
                  <input type="file" className="hidden" id={`file-${f}`} onChange={(e) => handleFileUpload(e, f)} />
                  <label htmlFor={`file-${f}`} className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl cursor-pointer text-xs font-bold whitespace-nowrap">Upload</label>
                </div>
              ) : (
                <input type="text" name={f} value={formData[f] || ''} onChange={handleChange} className="w-full bg-bg-main border border-white/5 rounded-xl p-3 text-sm text-white outline-none focus:border-accent/50" />
              )}
            </div>
          ))}
        </div>
        <button type="submit" className="btn-primary py-3 px-12">Save Configuration</button>
      </form>
    </div>
  );
}

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('personal-profile');
  const navigate = useNavigate();

  const tabs = [
    { id: 'personal-profile', label: 'Personal Profile', icon: 'fingerprint' },
    { id: 'about', label: 'About Me', icon: 'person' },
    { id: 'skills', label: 'Technical Skills', icon: 'layers' },
    { id: 'experience', label: 'Experience', icon: 'work' },
    { id: 'projects', label: 'Projects', icon: 'grid_view' },
    { id: 'education', label: 'Education', icon: 'school' },
    { id: 'achievements', label: 'Achievements', icon: 'emoji_events' },
    { id: 'social-links', label: 'Social Portfolio', icon: 'share' }
  ];

  return (
    <div className="min-h-screen bg-bg-main flex">
      <div className="w-72 border-r border-white/5 bg-card-bg hidden lg:flex flex-col">
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
              <span className="material-symbols-outlined">terminal</span>
            </div>
            <div>
              <h1 className="font-heading font-black text-white tracking-tighter uppercase leading-tight">AS.DEV</h1>
              <p className="text-[10px] font-mono text-accent uppercase tracking-widest opacity-60">System Admin</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-3 rounded-xl font-mono text-[10px] uppercase tracking-widest transition-all duration-300 flex items-center gap-4 ${activeTab === tab.id ? 'bg-accent/10 text-accent border border-accent/20 translate-x-2' : 'text-text-muted hover:bg-white/5'}`}
            >
              <span className="material-symbols-outlined text-sm">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-white/5 space-y-3">
          <button onClick={() => navigate('/')} className="w-full text-left px-4 py-2 text-[10px] font-mono text-text-muted uppercase tracking-widest hover:text-white flex items-center gap-3">
            <span className="material-symbols-outlined text-sm">visibility</span> View Site
          </button>
          <button onClick={() => { localStorage.removeItem('admin_token'); navigate('/admin/login'); }} className="w-full text-left px-4 py-2 text-[10px] font-mono text-red-400 uppercase tracking-widest hover:bg-red-400/5 rounded-xl flex items-center gap-3 transition-all">
            <span className="material-symbols-outlined text-sm">logout</span> Logout
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-[10px] font-mono text-accent uppercase tracking-[0.5em] mb-2 opacity-50">Operational Module</p>
            <h2 className="text-4xl font-heading font-black text-white uppercase tracking-tighter flex items-center gap-4">
              {activeTab.replace('-', ' ')}
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </h2>
          </div>
          {activeTab === 'personal-profile' || activeTab === 'about' ? <SingletonPanel type={activeTab === 'personal-profile' ? 'profile' : 'about'} /> : <CrudPanel tabKey={activeTab} />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
