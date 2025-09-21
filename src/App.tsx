import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import { User } from './types';

type AppState = 'landing' | 'registration' | 'pending-approval' | 'dashboard';

function App() {
  const [currentView, setCurrentView] = useState<AppState>('landing');
  const [user, setUser] = useState<User | null>(null);
  const [socialProvider, setSocialProvider] = useState<'google' | 'instagram' | 'facebook' | null>(null);

  const handleRegistration = (userData: User) => {
    setUser(userData);
    setCurrentView('pending-approval');
  };

  const handleApproval = () => {
    setCurrentView('dashboard');
  };

  const handleSignIn = () => {
    // Simulate existing user sign in
    setUser({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      address: '123 Main St, City, State',
      dateOfBirth: '1990-01-01',
      socialMediaId: '@johndoe_insta',
      isApproved: true,
      tickets: []
    });
    setCurrentView('dashboard');
  };

  const handleSocialSignIn = (provider: 'google' | 'instagram' | 'facebook') => {
    setSocialProvider(provider);
    setCurrentView('registration');
  };

  const handleSkipRegistration = () => {
    const incompleteUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: '',
      email: '',
      phone: '',
      address: '',
      dateOfBirth: '',
      socialMediaId: '',
      socialMediaPlatform: 'instagram',
      isApproved: false,
      isVerified: false,
      profileCompleteness: 20,
      signInMethod: socialProvider || 'email',
      isProfileComplete: false
    };
    setUser(incompleteUser);
    setCurrentView('dashboard');
  };

  const handleCompleteProfile = () => {
    if (user) {
      setUser({
        ...user,
        profileCompleteness: 100,
        isProfileComplete: true
      });
    }
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'landing':
        return (
          <LandingPage
            onSignUp={() => setCurrentView('registration')}
            onSignIn={handleSignIn}
            onSocialSignIn={handleSocialSignIn}
          />
        );
      case 'registration':
        return (
          <Registration
            onComplete={handleRegistration}
            onBack={() => setCurrentView('landing')}
            onSkip={handleSkipRegistration}
            onSocialSignIn={handleSocialSignIn}
          />
        );
      case 'pending-approval':
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Pending Approval</h2>
              <p className="text-gray-600 mb-6">
                Your registration is under review. You'll receive access to your dashboard once approved by our admin team.
              </p>
              <button
                onClick={handleApproval}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Simulate Approval
              </button>
            </div>
          </div>
        );
      case 'dashboard':
        return user ? <Dashboard user={user} onLogout={() => { setUser(null); setSocialProvider(null); setCurrentView('landing'); }} onCompleteProfile={handleCompleteProfile} /> : null;
      default:
        return null;
    }
  };

  return <div className="font-sans">{renderCurrentView()}</div>;
}

export default App;