import React, { useState } from 'react';
import { 
  Home, 
  User, 
  CreditCard, 
  History, 
  Bell, 
  LogOut, 
  Plus,
  Calendar,
  Hash,
  DollarSign,
  Trophy,
  Shield,
  Smartphone,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { User as UserType, Ticket, Announcement } from '../types';
import TicketPurchase from './TicketPurchase';
import TicketHistory from './TicketHistory';
import Announcements from './Announcements';
import { ProfileCompletion } from './ProfileCompletion';

interface DashboardProps {
  user: UserType;
  onLogout: () => void;
  onCompleteProfile: () => void;
}

type ActiveTab = 'overview' | 'purchase' | 'history' | 'announcements' | 'profile';

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout, onCompleteProfile }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: '1',
      hash: 'LV7X9K2M1234567890',
      purchaseDate: '2025-01-10',
      drawDate: '2025-02-15',
      amount: 75,
      status: 'active'
    },
    {
      id: '2',
      hash: 'LV3Y8L5N1234567890',
      purchaseDate: '2025-01-08',
      drawDate: '2025-02-15',
      amount: 50,
      status: 'active'
    }
  ]);

  const announcements: Announcement[] = [
    {
      id: '1',
      title: 'New Luxury Villa Draw Starting Soon',
      content: 'Get ready for our biggest prize yet! A $1.2M penthouse with stunning city views.',
      date: '2025-01-15',
      type: 'info'
    },
    {
      id: '2',
      title: 'Payment System Upgrade Complete',
      content: 'We have successfully upgraded our mobile payment system for faster, more secure transactions.',
      date: '2025-01-14',
      type: 'success'
    },
    {
      id: '3',
      title: 'Draw Date Reminder',
      content: 'The Luxury Villa Paradise draw is scheduled for February 15th, 2025. Make sure to purchase your tickets!',
      date: '2025-01-12',
      type: 'warning'
    }
  ];

  const handleTicketPurchase = (newTickets: Ticket[]) => {
    setTickets(prev => [...prev, ...newTickets]);
  };

  const totalSpent = tickets.reduce((sum, ticket) => sum + ticket.amount, 0);
  const activeTickets = tickets.filter(ticket => ticket.status === 'active').length;

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'purchase', label: 'Buy Tickets', icon: Plus },
    { id: 'history', label: 'My Tickets', icon: History },
    { id: 'announcements', label: 'Announcements', icon: Bell }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Home className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">DreamHome Dashboard</h1>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-600">Welcome back, {user.name}</p>
                  {!user.isProfileComplete && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                      <AlertCircle className="w-3 h-3" />
                      Profile {user.profileCompleteness}% complete
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-800 font-medium">Verified</span>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-white">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-blue-200">{user.email}</p>
                  </div>
                </div>
              </div>
              <nav className="p-2">
                {!user.isProfileComplete && (
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === 'profile'
                        ? 'bg-yellow-50 text-yellow-700 border-r-2 border-yellow-500'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Complete Profile</span>
                    <span className="ml-auto bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                      {user.profileCompleteness}%
                    </span>
                  </button>
                )}
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id as ActiveTab)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Tickets</span>
                  <span className="font-bold text-blue-600">{activeTickets}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Spent</span>
                  <span className="font-bold text-green-600">${totalSpent}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Next Draw</span>
                  <span className="font-bold text-orange-600">Feb 15</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {!user.isProfileComplete && activeTab !== 'profile' && (
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="font-medium text-yellow-800">Complete Your Profile</h3>
                    <p className="text-sm text-yellow-700 mt-1">
                      Your profile is {user.profileCompleteness}% complete. Complete it to unlock all features and increase your credibility.
                    </p>
                    <button
                      onClick={() => setActiveTab('profile')}
                      className="mt-2 text-sm bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded transition-colors"
                    >
                      Complete Now
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-bold mb-4">Welcome to Your Dashboard!</h2>
                  <p className="text-blue-100 mb-6">
                    You're all set to participate in our luxury home lotteries. Your account is verified and ready to go!
                  </p>
                  <button
                    onClick={() => setActiveTab('purchase')}
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Buy Tickets Now
                  </button>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-600">Active Tickets</p>
                        <p className="text-2xl font-bold text-gray-800">{activeTickets}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-600">Total Invested</p>
                        <p className="text-2xl font-bold text-gray-800">${totalSpent}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-gray-600">Potential Prize</p>
                        <p className="text-2xl font-bold text-gray-800">$850K</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Lottery */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Current Lottery</h3>
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                          alt="Luxury Villa Paradise"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">Luxury Villa Paradise</h4>
                        <p className="text-gray-600 mb-4">
                          A stunning 4-bedroom villa with ocean views, private pool, and modern amenities
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-500">Prize Value</p>
                            <p className="text-xl font-bold text-blue-600">$850,000</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Draw Date</p>
                            <p className="text-lg font-semibold text-gray-800">Feb 15, 2025</p>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Tickets Sold</span>
                            <span>3,247 / 5,000</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Tickets */}
                <div className="bg-white rounded-2xl shadow-lg">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-gray-800">Recent Tickets</h3>
                      <button
                        onClick={() => setActiveTab('history')}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        View All
                      </button>
                    </div>
                    <div className="space-y-4">
                      {tickets.slice(0, 3).map((ticket) => (
                        <div key={ticket.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Hash className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="font-mono text-sm text-gray-800">{ticket.hash}</p>
                              <p className="text-xs text-gray-500">Purchased {ticket.purchaseDate}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-800">${ticket.amount}</p>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Active
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Security Info */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-800">Security & Payment</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Secure Transactions</h4>
                      <p className="text-gray-600 text-sm">
                        All payments are processed through encrypted mobile payment gateways for maximum security.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Unique Ticket Hashes</h4>
                      <p className="text-gray-600 text-sm">
                        Each ticket generates a unique hash combining random elements and your phone number for authenticity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'purchase' && (
              <TicketPurchase user={user} onPurchaseComplete={handleTicketPurchase} />
            )}

            {activeTab === 'history' && (
              <TicketHistory tickets={tickets} />
            )}

            {activeTab === 'announcements' && (
              <Announcements announcements={announcements} />
            )}

            {activeTab === 'profile' && (
              <ProfileCompletion 
                user={user} 
                onComplete={onCompleteProfile}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;