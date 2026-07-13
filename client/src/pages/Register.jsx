import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../services/authService.js';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    college: '',
    currentYear: '',
    targetCompany: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const yearOptions = ['2nd Year', '3rd Year', '4th Year', 'Passout'];
  const companyOptions = ['Infosys', 'TCS', 'Accenture', 'Capgemini', 'Cognizant', 'Wipro', 'IBM', 'LTIMindtree', 'Deloitte', 'Other'];

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const validate = () => {
    const tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) {
      tempErrors.fullName = 'Full Name is required';
    }

    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      tempErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters long';
    }

    if (!formData.confirmPassword) {
      tempErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.confirmPassword !== formData.password) {
      tempErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.college.trim()) {
      tempErrors.college = 'College name is required';
    }

    if (!formData.currentYear) {
      tempErrors.currentYear = 'Please select your current year';
    }

    if (!formData.targetCompany) {
      tempErrors.targetCompany = 'Please select your target company';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error for field when user starts typing/selecting
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const { fullName, email, password, college, currentYear, targetCompany } = formData;
      const response = await register({
        fullName,
        email,
        password,
        college,
        currentYear,
        targetCompany
      });

      showToast('success', response.message || 'Registration Successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Registration failed. Please try again.';
      showToast('error', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center bg-slate-950 px-4 py-16 sm:py-24">
      <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl max-w-lg w-full shadow-xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold text-sky-400 tracking-tight">
            Create Your Account
          </h1>
          <p className="text-sm text-slate-400">
            Start your placement preparation today.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className={`bg-slate-950 border ${
                errors.fullName ? 'border-rose-500' : 'border-slate-800 focus:border-sky-500'
              } rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none`}
            />
            {errors.fullName && (
              <span className="text-xs text-rose-400 mt-1">{errors.fullName}</span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@college.edu"
              className={`bg-slate-950 border ${
                errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-sky-500'
              } rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none`}
            />
            {errors.email && (
              <span className="text-xs text-rose-400 mt-1">{errors.email}</span>
            )}
          </div>

          {/* Password & Confirm Password Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Password */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`bg-slate-950 border ${
                  errors.password ? 'border-rose-500' : 'border-slate-800 focus:border-sky-500'
                } rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none`}
              />
              {errors.password && (
                <span className="text-xs text-rose-400 mt-1">{errors.password}</span>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={`bg-slate-950 border ${
                  errors.confirmPassword ? 'border-rose-500' : 'border-slate-800 focus:border-sky-500'
                } rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none`}
              />
              {errors.confirmPassword && (
                <span className="text-xs text-rose-400 mt-1">{errors.confirmPassword}</span>
              )}
            </div>
          </div>

          {/* College */}
          <div className="flex flex-col">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              College
            </label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              placeholder="National Institute of Technology"
              className={`bg-slate-950 border ${
                errors.college ? 'border-rose-500' : 'border-slate-800 focus:border-sky-500'
              } rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none`}
            />
            {errors.college && (
              <span className="text-xs text-rose-400 mt-1">{errors.college}</span>
            )}
          </div>

          {/* Current Year & Target Company Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Current Year */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Current Year
              </label>
              <select
                name="currentYear"
                value={formData.currentYear}
                onChange={handleChange}
                className={`bg-slate-950 border ${
                  errors.currentYear ? 'border-rose-500' : 'border-slate-800 focus:border-sky-500'
                } rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none cursor-pointer`}
              >
                <option value="" disabled>Select Year</option>
                {yearOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-slate-950">{opt}</option>
                ))}
              </select>
              {errors.currentYear && (
                <span className="text-xs text-rose-400 mt-1">{errors.currentYear}</span>
              )}
            </div>

            {/* Target Company */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Target Company
              </label>
              <select
                name="targetCompany"
                value={formData.targetCompany}
                onChange={handleChange}
                className={`bg-slate-950 border ${
                  errors.targetCompany ? 'border-rose-500' : 'border-slate-800 focus:border-sky-500'
                } rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none cursor-pointer`}
              >
                <option value="" disabled>Select Company</option>
                {companyOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-slate-950">{opt}</option>
                ))}
              </select>
              {errors.targetCompany && (
                <span className="text-xs text-rose-400 mt-1">{errors.targetCompany}</span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold py-3 rounded-xl text-sm transition-colors duration-200 shadow-md mt-6 flex items-center justify-center gap-2 ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Registering...
              </>
            ) : (
              'Register'
            )}
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center text-xs text-slate-400 pt-2">
          Already have an account?{' '}
          <Link to="/login" className="text-sky-400 hover:text-sky-350 font-bold">
            Login
          </Link>
        </div>
      </div>

      {/* Floating Toast Notification */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg transition-all duration-300 ${
          toast.type === 'success' 
            ? 'bg-emerald-950/95 border-emerald-800 text-emerald-200' 
            : 'bg-rose-950/95 border-rose-800 text-rose-200'
        }`}>
          {toast.type === 'success' ? (
            <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          <span className="text-sm font-medium">{toast.message}</span>
          <button onClick={() => setToast(null)} className="ml-2 hover:opacity-85">
            <svg className="w-4 h-4 opacity-70 hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Register;
