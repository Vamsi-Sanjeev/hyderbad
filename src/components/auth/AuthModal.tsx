import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, EyeSlashIcon, UserIcon, HeartIcon, BuildingOfficeIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Modal } from '../ui/Modal';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'signup';
  onToggleMode: () => void;
}

const roles = [
  { id: 'user', name: 'Individual in Need', icon: UserIcon, description: 'Seeking emergency financial assistance' },
  { id: 'donor', name: 'Donor', icon: HeartIcon, description: 'Contributing to help others in crisis' },
  { id: 'admin', name: 'Administrator', icon: BuildingOfficeIcon, description: 'Platform management and oversight' },
  { id: 'organization', name: 'Organization', icon: UserGroupIcon, description: 'NGO or institution helping beneficiaries' },
];

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode, onToggleMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: '',
    organization: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { login, signup, loading } = useAuth();
  const { t } = useLanguage();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (mode === 'signup') {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.role) newErrors.role = 'Please select a role';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
      
      if (formData.role === 'organization' && !formData.organization) {
        newErrors.organization = 'Organization name is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      if (mode === 'login') {
        await login(formData.email, formData.password, formData.role || 'user');
      } else {
        await signup(formData);
      }
      onClose();
      setFormData({
        name: '',
        email: '',
        password: '',
        phone: '',
        role: '',
        organization: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
      });
    } catch (error) {
      console.error('Auth error:', error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === 'login' ? t('auth.login') : t('auth.signup')}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Role Selection for Signup */}
        {mode === 'signup' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              {t('auth.role')}
            </label>
            <div className="grid grid-cols-1 gap-3">
              {roles.map((role) => (
                <motion.label
                  key={role.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-start space-x-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                    formData.role === role.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value={role.id}
                    checked={formData.role === role.id}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <role.icon className="h-5 w-5 text-gray-500 dark:text-gray-400 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {role.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {role.description}
                    </div>
                  </div>
                </motion.label>
              ))}
            </div>
            {errors.role && <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.role}</p>}
          </div>
        )}

        {/* Role Selection for Login */}
        {mode === 'login' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('auth.role')}
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              required
            >
              <option value="">Select your role</option>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
            {errors.role && <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.role}</p>}
          </div>
        )}

        {/* Basic Information */}
        {mode === 'signup' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              error={errors.name}
              required
            />
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              error={errors.phone}
              required
            />
          </div>
        )}

        <Input
          label={t('auth.email')}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email address"
          error={errors.email}
          required
        />

        <Input
          label={t('auth.password')}
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
          error={errors.password}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            </button>
          }
          required
        />

        {/* Organization-specific fields */}
        {mode === 'signup' && formData.role === 'organization' && (
          <>
            <Input
              label="Organization Name"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              placeholder="Enter organization name"
              error={errors.organization}
              required
            />
            <Input
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter organization address"
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Input
                label="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
              />
              <Input
                label="State"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="State"
              />
              <Input
                label="PIN Code"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                placeholder="PIN Code"
              />
            </div>
          </>
        )}

        <Button
          type="submit"
          size="lg"
          loading={loading}
          className="w-full"
        >
          {mode === 'login' ? t('auth.login') : t('auth.signup')}
        </Button>

        <div className="text-center">
          <button
            type="button"
            onClick={onToggleMode}
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            {mode === 'login' 
              ? "Don't have an account? Sign up" 
              : 'Already have an account? Sign in'
            }
          </button>
        </div>

        {mode === 'login' && (
          <div className="text-center">
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:underline">
              Forgot your password?
            </a>
          </div>
        )}
      </form>
    </Modal>
  );
};