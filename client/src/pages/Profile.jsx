import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDashboard } from '../context/DashboardContext.jsx';
import { 
  getUserProfile, 
  updateUserProfile, 
  changePassword, 
  deleteAccount 
} from '../services/userService.js';
import { 
  FiUser, 
  FiMail, 
  FiPhone, 
  FiBook, 
  FiMapPin, 
  FiLinkedin, 
  FiGithub, 
  FiGlobe, 
  FiFileText, 
  FiLock, 
  FiAward, 
  FiActivity, 
  FiCamera, 
  FiPlus, 
  FiX, 
  FiTrash2, 
  FiLogOut, 
  FiEdit3, 
  FiCheck,
  FiZap
} from 'react-icons/fi';

const Profile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const resumeInputRef = useRef(null);

  // Consume gamification state from DashboardContext
  const { 
    displayXp, 
    displayLevel, 
    displayStreak, 
    refreshData,
    logout
  } = useDashboard();

  // Profile data from backend
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Edit Mode States
  const [isEditingDetails, setIsEditingDetails] = useState(false);
  const [isEditingTarget, setIsEditingTarget] = useState(false);
  const [isEditingSkills, setIsEditingSkills] = useState(false);

  // Form Fields State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    branch: '',
    cgpa: '',
    graduationYear: '',
    city: '',
    linkedin: '',
    github: '',
    portfolio: '',
    targetCompany: '',
    packageGoal: '',
    preferredRole: '',
    preferredLocation: ''
  });

  // Password Change State
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');

  // Delete Account Confirmation State
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Skills input state
  const [skillInput, setSkillInput] = useState('');

  // Load profile data on mount
  const fetchProfile = async () => {
    try {
      setLoading(true);
      const res = await getUserProfile();
      if (res.success && res.user) {
        setProfile(res.user);
        setFormData({
          name: res.user.name || '',
          email: res.user.email || '',
          phone: res.user.phone || '',
          college: res.user.college || '',
          branch: res.user.branch || '',
          cgpa: res.user.cgpa || '',
          graduationYear: res.user.graduationYear || '',
          city: res.user.city || '',
          linkedin: res.user.linkedin || '',
          github: res.user.github || '',
          portfolio: res.user.portfolio || '',
          targetCompany: res.user.targetCompany || '',
          packageGoal: res.user.packageGoal || '',
          preferredRole: res.user.preferredRole || '',
          preferredLocation: res.user.preferredLocation || ''
        });
      }
    } catch (err) {
      console.error('Error fetching profile:', err);
      setError('Unable to load user profile details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    fetchProfile();
  }, [navigate]);

  // Save fields helper
  const handleSaveField = async (updatedFields) => {
    try {
      const res = await updateUserProfile(updatedFields);
      if (res.success && res.user) {
        setProfile(res.user);
        // Refresh Dashboard Context to sync Target Company and level calculations
        refreshData();
      }
    } catch (err) {
      console.error('Failed to update profile fields:', err);
      alert('Error saving profile changes. Please try again.');
    }
  };

  // Personal details submit
  const handleDetailsSubmit = async (e) => {
    e.preventDefault();
    await handleSaveField({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      college: formData.college,
      branch: formData.branch,
      cgpa: formData.cgpa,
      graduationYear: formData.graduationYear,
      city: formData.city,
      linkedin: formData.linkedin,
      github: formData.github,
      portfolio: formData.portfolio
    });
    setIsEditingDetails(false);
  };

  // Target Company details submit
  const handleTargetSubmit = async (e) => {
    e.preventDefault();
    await handleSaveField({
      targetCompany: formData.targetCompany,
      packageGoal: formData.packageGoal,
      preferredRole: formData.preferredRole,
      preferredLocation: formData.preferredLocation
    });
    setIsEditingTarget(false);
  };

  // Profile Picture base64 handler
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      handleSaveField({ profilePicture: reader.result });
    };
    reader.readAsDataURL(file);
  };

  // Resume base64 handler
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      // Store filename and content payload
      handleSaveField({ resume: file.name });
    };
    reader.readAsDataURL(file);
  };

  // Skills handlers
  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!skillInput.trim()) return;
    const currentSkills = profile?.skills || [];
    if (!currentSkills.includes(skillInput.trim())) {
      const updated = [...currentSkills, skillInput.trim()];
      handleSaveField({ skills: updated });
    }
    setSkillInput('');
  };

  const handleRemoveSkill = (skillToRemove) => {
    const currentSkills = profile?.skills || [];
    const updated = currentSkills.filter(s => s !== skillToRemove);
    handleSaveField({ skills: updated });
  };

  // Password change submission
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }

    try {
      const res = await changePassword({
        oldPassword: passwordForm.oldPassword,
        newPassword: passwordForm.newPassword
      });
      if (res.success) {
        setPasswordSuccess('Password successfully updated!');
        setPasswordForm({ oldPassword: '', newPassword: '', confirmPassword: '' });
        setTimeout(() => setShowPasswordModal(false), 2000);
      }
    } catch (err) {
      console.error(err);
      setPasswordError(err.response?.data?.message || 'Incorrect old password or update failed');
    }
  };

  // Account deletion
  const handleDeleteAccount = async () => {
    try {
      const res = await deleteAccount();
      if (res.success) {
        logout();
        navigate('/');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to delete account. Please try again.');
    }
  };

  // Logout handler
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Helper: Profile Completion Calculation
  const profileFields = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Mobile' },
    { key: 'college', label: 'College' },
    { key: 'branch', label: 'Branch' },
    { key: 'graduationYear', label: 'Graduation Year' },
    { key: 'resume', label: 'Resume Uploaded' },
    { key: 'targetCompany', label: 'Target Company' },
    { key: 'skills', label: 'Skills', isArray: true }
  ];

  const getProfileCompletionPct = () => {
    if (!profile) return 0;
    let completedCount = 0;
    profileFields.forEach((field) => {
      if (field.isArray) {
        if (profile[field.key] && profile[field.key].length > 0) {
          completedCount++;
        }
      } else {
        if (profile[field.key] && profile[field.key].toString().trim() !== '') {
          completedCount++;
        }
      }
    });
    return Math.round((completedCount / profileFields.length) * 100);
  };

  const completionPct = getProfileCompletionPct();

  if (loading) {
    return (
      <div className="flex-grow flex items-center justify-center bg-slate-950 min-h-screen">
        <div className="flex flex-col items-center space-y-4">
          <svg className="animate-spin h-10 w-10 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-slate-400 text-sm font-bold">Loading Profile...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-grow flex items-center justify-center bg-slate-950 min-h-screen">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl max-w-md w-full text-center shadow-xl space-y-4">
          <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 text-2xl mx-auto">⚠</div>
          <h2 className="text-lg font-bold text-slate-200">Unable to load profile</h2>
          <p className="text-xs text-slate-400">{error}</p>
          <button onClick={() => window.location.reload()} className="w-full bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold py-2.5 rounded-xl text-xs transition-colors duration-200">Retry</button>
        </div>
      </div>
    );
  }

  // Derived achievement values
  const questionsSolved = profile?.questionsSolved || 0;
  const mockTestsSolved = profile?.mockTestsSolved || 0;
  const studyHours = profile?.studyHours || 0;

  const achievements = [
    { id: 'first_q', name: 'First Question', desc: 'Solve your first coding problem', unlocked: questionsSolved > 0 },
    { id: 'xp_100', name: '100 XP', desc: 'Gain a total of 100 XP points', unlocked: displayXp >= 100 },
    { id: 'xp_500', name: '500 XP', desc: 'Gain a total of 500 XP points', unlocked: displayXp >= 500 },
    { id: 'streak_7', name: '7 Day Streak', desc: 'Maintain a study streak for 7 days', unlocked: displayStreak >= 7 },
    { id: 'streak_30', name: '30 Day Streak', desc: 'Maintain a study streak for 30 days', unlocked: displayStreak >= 30 },
    { id: 'first_mock', name: 'First Mock', desc: 'Complete your first online assessment', unlocked: mockTestsSolved > 0 },
    { id: 'dsa_explorer', name: 'DSA Explorer', desc: 'Solve 20 or more DSA questions', unlocked: questionsSolved >= 20 }
  ];

  return (
    <div className="flex-grow bg-slate-950 text-slate-100 px-4 sm:px-6 lg:px-8 py-10 select-none">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* ================= SECTION 1 - HEADER ================= */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            {/* Avatar block */}
            <div className="relative group shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400">
                {profile?.profilePicture ? (
                  <img src={profile.profilePicture} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <FiUser className="w-10 h-10" />
                )}
              </div>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 p-2 rounded-full bg-sky-500 hover:bg-sky-600 text-slate-950 shadow border border-slate-900 cursor-pointer"
                title="Change Photo"
              >
                <FiCamera className="w-4 h-4" />
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handlePhotoUpload} 
                accept="image/*" 
                className="hidden" 
              />
            </div>

            <div className="space-y-1.5">
              <h1 className="text-xl sm:text-2xl font-black text-slate-100 tracking-tight">{profile?.name}</h1>
              <p className="text-xs text-sky-400 font-bold">{profile?.email}</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-3 gap-y-1 text-slate-400 text-xs font-semibold">
                <span className="flex items-center gap-1">🏫 {profile?.college}</span>
                <span>•</span>
                <span>🎓 {profile?.branch || 'General'}</span>
                <span>•</span>
                <span>📅 Class of {profile?.graduationYear || 'N/A'}</span>
              </div>
            </div>
          </div>

          {/* Gamified stats panel on right side */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850 text-center min-w-[110px]">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Level</span>
              <span className="text-xl font-extrabold text-slate-200">{displayLevel}</span>
            </div>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850 text-center min-w-[110px]">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">XP</span>
              <span className="text-xl font-extrabold text-amber-400">{displayXp}</span>
            </div>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850 text-center min-w-[110px]">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Streak</span>
              <span className="text-xl font-extrabold text-emerald-400">{displayStreak} Days</span>
            </div>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850 text-center min-w-[110px]">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Target</span>
              <span className="text-xs font-black text-sky-400 uppercase tracking-wide block pt-1.5 truncate max-w-[100px]">{profile?.targetCompany || 'None'}</span>
            </div>
          </div>
        </div>

        {/* ================= SECTION 2 - PROFILE COMPLETION ================= */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5 text-left">
          <div className="space-y-1.5 flex-grow w-full">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-slate-400 uppercase tracking-wider">Profile Setup Progress</span>
              <span className="text-sky-400">{completionPct}% Complete</span>
            </div>
            <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-850">
              <div className="bg-sky-500 h-full rounded-full transition-all duration-500" style={{ width: `${completionPct}%` }}></div>
            </div>
          </div>
          <button 
            onClick={() => {
              setIsEditingDetails(true);
              document.getElementById('personal-details-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full md:w-auto bg-slate-950 hover:bg-slate-850 text-sky-400 border border-slate-800 font-extrabold text-xs px-6 py-3 rounded-xl transition-colors cursor-pointer shrink-0"
          >
            Complete Profile
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT 2 COLS FOR MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* ================= SECTION 3 - PERSONAL DETAILS ================= */}
            <div id="personal-details-section" className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl text-left space-y-6">
              <div className="flex justify-between items-center border-b border-slate-800/60 pb-3">
                <h2 className="text-sm font-black text-slate-200 uppercase tracking-wider">Personal Details</h2>
                {!isEditingDetails && (
                  <button 
                    onClick={() => setIsEditingDetails(true)} 
                    className="flex items-center gap-1 text-xs font-extrabold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <FiEdit3 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>
                )}
              </div>

              {isEditingDetails ? (
                <form onSubmit={handleDetailsSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      value={formData.name} 
                      onChange={(e) => setFormData({...formData, name: e.target.value})} 
                      required 
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      value={formData.email} 
                      onChange={(e) => setFormData({...formData, email: e.target.value})} 
                      required 
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Phone / Mobile</label>
                    <input 
                      type="text" 
                      value={formData.phone} 
                      onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">College Name</label>
                    <input 
                      type="text" 
                      value={formData.college} 
                      onChange={(e) => setFormData({...formData, college: e.target.value})} 
                      required 
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Branch / Stream</label>
                    <input 
                      type="text" 
                      value={formData.branch} 
                      onChange={(e) => setFormData({...formData, branch: e.target.value})} 
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">CGPA</label>
                    <input 
                      type="text" 
                      value={formData.cgpa} 
                      onChange={(e) => setFormData({...formData, cgpa: e.target.value})} 
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Graduation Year</label>
                    <input 
                      type="text" 
                      value={formData.graduationYear} 
                      onChange={(e) => setFormData({...formData, graduationYear: e.target.value})} 
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Current City</label>
                    <input 
                      type="text" 
                      value={formData.city} 
                      onChange={(e) => setFormData({...formData, city: e.target.value})} 
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">LinkedIn Profile URL</label>
                    <input 
                      type="url" 
                      value={formData.linkedin} 
                      onChange={(e) => setFormData({...formData, linkedin: e.target.value})} 
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">GitHub URL</label>
                    <input 
                      type="url" 
                      value={formData.github} 
                      onChange={(e) => setFormData({...formData, github: e.target.value})} 
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Portfolio Website URL</label>
                    <input 
                      type="url" 
                      value={formData.portfolio} 
                      onChange={(e) => setFormData({...formData, portfolio: e.target.value})} 
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div className="flex gap-3 sm:col-span-2 pt-2">
                    <button type="submit" className="bg-sky-500 hover:bg-sky-600 text-slate-955 text-slate-955 text-slate-950 font-bold px-6 py-2 rounded-xl text-xs flex items-center gap-1 cursor-pointer">
                      <FiCheck className="w-3.5 h-3.5" />
                      <span>Save Changes</span>
                    </button>
                    <button type="button" onClick={() => setIsEditingDetails(false)} className="bg-slate-950 hover:bg-slate-850 text-slate-400 border border-slate-850 font-bold px-6 py-2 rounded-xl text-xs cursor-pointer">
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Full Name</span>
                    <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
                      <FiUser className="w-3.5 h-3.5 text-slate-500" />
                      {profile?.name}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Email</span>
                    <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
                      <FiMail className="w-3.5 h-3.5 text-slate-500" />
                      {profile?.email}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Phone</span>
                    <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
                      <FiPhone className="w-3.5 h-3.5 text-slate-500" />
                      {profile?.phone || 'Not Specified'}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">College</span>
                    <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
                      <FiBook className="w-3.5 h-3.5 text-slate-500" />
                      {profile?.college}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Branch / CGPA</span>
                    <span className="text-xs font-bold text-slate-200 block pl-5">
                      {profile?.branch || 'N/A'} (CGPA: {profile?.cgpa || 'N/A'})
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Graduation / City</span>
                    <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
                      <FiMapPin className="w-3.5 h-3.5 text-slate-500" />
                      Class of {profile?.graduationYear || 'N/A'} • {profile?.city || 'N/A'}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">LinkedIn</span>
                    {profile?.linkedin ? (
                      <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-xs font-bold text-sky-400 hover:underline flex items-center gap-2">
                        <FiLinkedin className="w-3.5 h-3.5" />
                        <span>View Profile</span>
                      </a>
                    ) : <span className="text-xs text-slate-500 font-semibold pl-5">Not Connected</span>}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">GitHub</span>
                    {profile?.github ? (
                      <a href={profile.github} target="_blank" rel="noreferrer" className="text-xs font-bold text-sky-400 hover:underline flex items-center gap-2">
                        <FiGithub className="w-3.5 h-3.5" />
                        <span>View GitHub</span>
                      </a>
                    ) : <span className="text-xs text-slate-500 font-semibold pl-5">Not Connected</span>}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Portfolio</span>
                    {profile?.portfolio ? (
                      <a href={profile.portfolio} target="_blank" rel="noreferrer" className="text-xs font-bold text-sky-400 hover:underline flex items-center gap-2">
                        <FiGlobe className="w-3.5 h-3.5" />
                        <span>View Website</span>
                      </a>
                    ) : <span className="text-xs text-slate-500 font-semibold pl-5">Not Connected</span>}
                  </div>
                  <div className="space-y-1 sm:col-span-2 md:col-span-3 pt-2">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Resume Document</span>
                    <div className="flex items-center gap-4 mt-1.5">
                      {profile?.resume ? (
                        <div className="flex items-center gap-2 bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-850 text-xs font-bold text-slate-200">
                          <FiFileText className="w-4 h-4 text-sky-400" />
                          <span>{profile.resume}</span>
                        </div>
                      ) : (
                        <span className="text-xs text-slate-500 font-semibold italic">No Resume Uploaded Yet</span>
                      )}
                      
                      <button 
                        onClick={() => resumeInputRef.current?.click()}
                        className="bg-slate-950 hover:bg-slate-850 text-sky-400 border border-slate-850 px-4 py-2.5 rounded-xl text-xs font-extrabold cursor-pointer transition-colors"
                      >
                        Upload Resume
                      </button>
                      <input 
                        type="file" 
                        ref={resumeInputRef} 
                        onChange={handleResumeUpload} 
                        accept=".pdf,.doc,.docx" 
                        className="hidden" 
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ================= SECTION 4 - TARGET COMPANY ================= */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl text-left space-y-6">
              <div className="flex justify-between items-center border-b border-slate-800/60 pb-3">
                <h2 className="text-sm font-black text-slate-202 text-slate-200 uppercase tracking-wider">Target Placement Goal</h2>
                {!isEditingTarget && (
                  <button 
                    onClick={() => setIsEditingTarget(true)} 
                    className="flex items-center gap-1 text-xs font-extrabold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <FiEdit3 className="w-3.5 h-3.5" />
                    <span>Change Target</span>
                  </button>
                )}
              </div>

              {isEditingTarget ? (
                <form onSubmit={handleTargetSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Target Company</label>
                    <select 
                      value={formData.targetCompany} 
                      onChange={(e) => setFormData({...formData, targetCompany: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                    >
                      <option value="Infosys">Infosys</option>
                      <option value="TCS">TCS</option>
                      <option value="Accenture">Accenture</option>
                      <option value="Capgemini">Capgemini</option>
                      <option value="Cognizant">Cognizant</option>
                      <option value="Wipro">Wipro</option>
                      <option value="IBM">IBM</option>
                      <option value="LTIMindtree">LTIMindtree</option>
                      <option value="Deloitte">Deloitte</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Salary Package Goal</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 12 LPA" 
                      value={formData.packageGoal} 
                      onChange={(e) => setFormData({...formData, packageGoal: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Preferred Engineering Role</label>
                    <input 
                      type="text" 
                      placeholder="e.g. SDE, Data Engineer" 
                      value={formData.preferredRole} 
                      onChange={(e) => setFormData({...formData, preferredRole: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Preferred Location</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Bengaluru, Remote" 
                      value={formData.preferredLocation} 
                      onChange={(e) => setFormData({...formData, preferredLocation: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div className="flex gap-3 sm:col-span-2 pt-2">
                    <button type="submit" className="bg-sky-500 hover:bg-sky-600 text-slate-955 text-slate-950 font-bold px-6 py-2 rounded-xl text-xs flex items-center gap-1 cursor-pointer">
                      <FiCheck className="w-3.5 h-3.5" />
                      <span>Save Target</span>
                    </button>
                    <button type="button" onClick={() => setIsEditingTarget(false)} className="bg-slate-950 hover:bg-slate-850 text-slate-400 border border-slate-850 font-bold px-6 py-2 rounded-xl text-xs cursor-pointer">
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Target Corporate</span>
                    <span className="text-xs font-bold text-slate-200 block">{profile?.targetCompany || 'Not Specified'}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Package Target</span>
                    <span className="text-xs font-bold text-slate-200 block">{profile?.packageGoal || 'Not Specified'}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Preferred Role</span>
                    <span className="text-xs font-bold text-slate-202 text-slate-200 block">{profile?.preferredRole || 'Not Specified'}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Work Location</span>
                    <span className="text-xs font-bold text-slate-200 block">{profile?.preferredLocation || 'Not Specified'}</span>
                  </div>
                </div>
              )}
            </div>

            {/* ================= SECTION 5 - SKILLS ================= */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl text-left space-y-5">
              <div className="flex justify-between items-center border-b border-slate-800/60 pb-3">
                <h2 className="text-sm font-black text-slate-202 text-slate-200 uppercase tracking-wider">Technical Skills</h2>
                <button 
                  onClick={() => setIsEditingSkills(!isEditingSkills)}
                  className="flex items-center gap-1 text-xs font-extrabold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
                >
                  {isEditingSkills ? <span>Done</span> : (
                    <>
                      <FiEdit3 className="w-3.5 h-3.5" />
                      <span>Edit Skills</span>
                    </>
                  )}
                </button>
              </div>

              {isEditingSkills && (
                <form onSubmit={handleAddSkill} className="flex gap-2 max-w-md">
                  <input 
                    type="text" 
                    placeholder="Add a skill (e.g. Python, Docker)" 
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    className="flex-grow bg-slate-950 border border-slate-850 rounded-xl px-4 py-2 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                  <button type="submit" className="bg-sky-500 hover:bg-sky-600 text-slate-955 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1 cursor-pointer">
                    <FiPlus className="w-4 h-4" />
                    <span>Add</span>
                  </button>
                </form>
              )}

              <div className="flex flex-wrap gap-2 pt-1">
                {(profile?.skills && profile.skills.length > 0) ? (
                  profile.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="flex items-center gap-1.5 bg-slate-950 px-3.5 py-1.5 rounded-full border border-slate-850 text-xs font-bold text-slate-250 text-slate-300"
                    >
                      <span>{skill}</span>
                      {isEditingSkills && (
                        <button 
                          type="button" 
                          onClick={() => handleRemoveSkill(skill)}
                          className="text-slate-500 hover:text-rose-500 transition-colors"
                        >
                          <FiX className="w-3 h-3" />
                        </button>
                      )}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-slate-500 font-semibold italic">No skills listed yet. Add skills to complete your profile.</span>
                )}
              </div>
            </div>

            {/* ================= SECTION 6 - PREPARATION STATS ================= */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl text-left space-y-5">
              <div className="border-b border-slate-800/60 pb-3">
                <h2 className="text-sm font-black text-slate-200 uppercase tracking-wider">Placement Preparation Stats</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850 space-y-1">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Solved Problems</span>
                  <span className="text-xl font-extrabold text-slate-200 block">{questionsSolved}</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850 space-y-1">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Mock Tests</span>
                  <span className="text-xl font-extrabold text-slate-200 block">{mockTestsSolved} Completed</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850 space-y-1">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Study Hours</span>
                  <span className="text-xl font-extrabold text-slate-200 block">{studyHours} Hrs</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850 space-y-1">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">XP Earned</span>
                  <span className="text-xl font-extrabold text-amber-400 block">{displayXp}</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850 space-y-1">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Current Level</span>
                  <span className="text-xl font-extrabold text-slate-200 block">Level {displayLevel}</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850 space-y-1">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Current Streak</span>
                  <span className="text-xl font-extrabold text-emerald-400 block">{displayStreak} Days</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850 space-y-1">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Best Topic</span>
                  <span className="text-xs font-black text-sky-400 uppercase tracking-wide block pt-1.5 truncate">{profile?.bestTopic || 'Arrays'}</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850 space-y-1">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Weakest Topic</span>
                  <span className="text-xs font-black text-rose-400 uppercase tracking-wide block pt-1.5 truncate">{profile?.weakestTopic || 'Graphs'}</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT 1 COL FOR ACHIEVEMENTS, TIMELINE, SETTINGS */}
          <div className="space-y-8">
            
            {/* ================= SECTION 7 - ACHIEVEMENTS ================= */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl text-left space-y-5">
              <div className="border-b border-slate-800/60 pb-3">
                <h2 className="text-sm font-black text-slate-200 uppercase tracking-wider">Unlocked Achievements</h2>
              </div>

              <div className="space-y-4">
                {achievements.map((ach) => (
                  <div 
                    key={ach.id} 
                    className={`flex items-start gap-3 p-3 rounded-2xl border transition-all duration-300 ${
                      ach.unlocked 
                        ? 'bg-slate-950 border-slate-800 text-slate-200' 
                        : 'bg-slate-955/50 border-slate-900/40 text-slate-500 grayscale opacity-45'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl border shrink-0 ${
                      ach.unlocked ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' : 'bg-slate-900 border-slate-850 text-slate-600'
                    }`}>
                      <FiAward className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-black tracking-tight">{ach.name}</h4>
                      <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{ach.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= SECTION 8 - RECENT ACTIVITY ================= */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl text-left space-y-5">
              <div className="border-b border-slate-800/60 pb-3">
                <h2 className="text-sm font-black text-slate-202 text-slate-200 uppercase tracking-wider">Recent Activity</h2>
              </div>

              <div className="relative border-l border-slate-800 pl-4 ml-2.5 space-y-5 py-2">
                <div className="relative">
                  <div className="absolute -left-[21px] mt-1.5 w-2.5 h-2.5 rounded-full bg-sky-500 border-2 border-slate-900"></div>
                  <h4 className="text-xs font-black text-slate-200">Completed Arrays Track</h4>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mt-0.5">Today</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] mt-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900"></div>
                  <h4 className="text-xs font-black text-slate-200">Solved Two Sum Challenge</h4>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mt-0.5">Yesterday</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] mt-1.5 w-2.5 h-2.5 rounded-full bg-slate-800 border-2 border-slate-900"></div>
                  <h4 className="text-xs font-black text-slate-400">Finished DBMS Joins Practice</h4>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mt-0.5">3 Days Ago</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] mt-1.5 w-2.5 h-2.5 rounded-full bg-slate-800 border-2 border-slate-900"></div>
                  <h4 className="text-xs font-black text-slate-400">Completed Mock Test 1</h4>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mt-0.5">4 Days Ago</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] mt-1.5 w-2.5 h-2.5 rounded-full bg-slate-800 border-2 border-slate-900"></div>
                  <h4 className="text-xs font-black text-slate-400">Updated Resume Document</h4>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mt-0.5">5 Days Ago</span>
                </div>
              </div>
            </div>

            {/* ================= SECTION 9 - ACCOUNT SETTINGS ================= */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl text-left space-y-4">
              <div className="border-b border-slate-800/60 pb-3 mb-2">
                <h2 className="text-sm font-black text-slate-200 uppercase tracking-wider">Account Settings</h2>
              </div>

              <div className="flex flex-col gap-2.5">
                <button 
                  onClick={() => setShowPasswordModal(true)}
                  className="w-full bg-slate-950 hover:bg-slate-850 text-slate-300 border border-slate-850 py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <FiLock className="w-4 h-4 text-slate-500" />
                  <span>Change Password</span>
                </button>
                <button 
                  onClick={() => {
                    setIsEditingDetails(true);
                    document.getElementById('personal-details-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-slate-955 bg-slate-950 hover:bg-slate-850 text-slate-350 text-slate-300 border border-slate-850 py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <FiUser className="w-4 h-4 text-slate-500" />
                  <span>Update Profile</span>
                </button>
                <button 
                  disabled={!profile?.resume}
                  onClick={() => alert(`Downloading resume: ${profile?.resume}`)}
                  className="w-full bg-slate-950 hover:bg-slate-850 disabled:opacity-40 disabled:cursor-not-allowed text-slate-300 border border-slate-850 py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <FiFileText className="w-4 h-4 text-slate-500" />
                  <span>Download Resume</span>
                </button>
                <button 
                  onClick={handleLogout}
                  className="w-full bg-slate-950 hover:bg-slate-850 text-slate-300 border border-slate-850 py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <FiLogOut className="w-4 h-4 text-slate-500" />
                  <span>Logout</span>
                </button>
                <button 
                  onClick={() => setShowDeleteModal(true)}
                  className="w-full bg-rose-950/20 hover:bg-rose-950/30 text-rose-400 border border-rose-900/30 py-3 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <FiTrash2 className="w-4 h-4 text-rose-500" />
                  <span>Delete Account</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ================= PASSWORD CHANGE MODAL ================= */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full text-left shadow-2xl relative space-y-5">
            <button 
              onClick={() => setShowPasswordModal(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-300"
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <h3 className="text-base font-black text-slate-100 tracking-tight">Change Password</h3>
              <p className="text-[10px] text-slate-400 font-semibold">Update your account credentials to keep your profile secure.</p>
            </div>

            {passwordError && (
              <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-3 text-rose-400 text-xs font-semibold">
                {passwordError}
              </div>
            )}

            {passwordSuccess && (
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-emerald-400 text-xs font-semibold">
                {passwordSuccess}
              </div>
            )}

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Current Password</label>
                <input 
                  type="password" 
                  value={passwordForm.oldPassword}
                  onChange={(e) => setPasswordForm({...passwordForm, oldPassword: e.target.value})}
                  required
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">New Password</label>
                <input 
                  type="password" 
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
                  required
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Confirm New Password</label>
                <input 
                  type="password" 
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
                  required
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-sky-500 hover:bg-sky-600 text-slate-955 text-slate-950 font-bold py-3 rounded-xl text-xs transition-colors cursor-pointer"
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= DELETE ACCOUNT CONFIRMATION MODAL ================= */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center shadow-2xl space-y-5">
            <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-550 text-rose-500 text-2xl mx-auto">
              ⚠
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-black text-slate-100 tracking-tight">Delete Account?</h3>
              <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                This action is irreversible. All your progress, earned XP, solving history, and targets will be deleted permanently.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button 
                onClick={handleDeleteAccount}
                className="flex-grow bg-rose-500 hover:bg-rose-600 text-slate-950 font-black py-3 rounded-xl text-xs cursor-pointer shadow-md"
              >
                Yes, Delete Account
              </button>
              <button 
                onClick={() => setShowDeleteModal(false)}
                className="flex-grow bg-slate-950 hover:bg-slate-850 text-slate-400 border border-slate-850 font-bold py-3 rounded-xl text-xs cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Profile;
