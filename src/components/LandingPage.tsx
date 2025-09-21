import React, { useEffect, useState } from 'react';
import { 
  Home, 
  Trophy, 
  Shield, 
  Star, 
  Users, 
  Calendar, 
  ArrowRight,
  CheckCircle,
  CreditCard,
  Lock,
  Mail,
  Play,
  Award,
  TrendingUp,
  Heart,
  Zap
} from 'lucide-react';
import { Lottery, Winner, Participant } from '../types';

interface LandingPageProps {
  onSignUp: () => void;
  onSignIn: () => void;
  onSocialSignIn: (provider: 'google' | 'instagram' | 'facebook') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSignUp, onSignIn, onSocialSignIn }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const heroImages = [
    'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentLottery: Lottery = {
    id: '1',
    title: 'Luxury Villa Paradise',
    description: 'A stunning 4-bedroom villa with ocean views, private pool, and modern amenities',
    prizeValue: '$850,000',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    drawDate: '2025-02-15',
    ticketPrice: 25,
    totalTickets: 5000,
    soldTickets: 3247,
    status: 'active'
  };

  const upcomingLotteries: Lottery[] = [
    {
      id: '2',
      title: 'Modern City Penthouse',
      description: 'Luxurious penthouse in downtown with panoramic city views',
      prizeValue: '$1,200,000',
      image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      drawDate: '2025-03-20',
      ticketPrice: 30,
      totalTickets: 6000,
      soldTickets: 0,
      status: 'upcoming'
    },
    {
      id: '3',
      title: 'Countryside Estate',
      description: 'Charming estate with gardens, stables, and guest house',
      prizeValue: '$650,000',
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      drawDate: '2025-04-10',
      ticketPrice: 20,
      totalTickets: 4000,
      soldTickets: 0,
      status: 'upcoming'
    },
    {
      id: '4',
      title: 'Beachfront Villa',
      description: 'Exclusive beachfront property with private beach access',
      prizeValue: '$950,000',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      drawDate: '2025-05-15',
      ticketPrice: 28,
      totalTickets: 4500,
      soldTickets: 0,
      status: 'upcoming'
    }
  ];

  const recentWinners: Winner[] = [
    { name: 'Sarah M.', prize: 'Beach House ($750K)', date: '2024-12-20', ticketHash: 'WH7X9K2' },
    { name: 'Michael R.', prize: 'Mountain Cabin ($450K)', date: '2024-11-15', ticketHash: 'MC5Y8L1' },
    { name: 'Emma L.', prize: 'City Apartment ($320K)', date: '2024-10-28', ticketHash: 'CA3Z6N9' },
    { name: 'David K.', prize: 'Luxury Condo ($580K)', date: '2024-09-12', ticketHash: 'LC2M4P7' }
  ];

  const recentParticipants: Participant[] = [
    { maskedName: 'John D.', maskedPhone: '+1***-***-7890', ticketCount: 5, joinDate: '2025-01-15' },
    { maskedName: 'Lisa M.', maskedPhone: '+1***-***-2341', ticketCount: 3, joinDate: '2025-01-15' },
    { maskedName: 'Robert S.', maskedPhone: '+1***-***-8765', ticketCount: 8, joinDate: '2025-01-14' },
    { maskedName: 'Maria G.', maskedPhone: '+1***-***-4523', ticketCount: 2, joinDate: '2025-01-14' },
    { maskedName: 'Alex T.', maskedPhone: '+1***-***-9876', ticketCount: 6, joinDate: '2025-01-13' },
    { maskedName: 'Sophie R.', maskedPhone: '+1***-***-5432', ticketCount: 4, joinDate: '2025-01-13' }
  ];

  const testimonials = [
    {
      name: 'Jennifer K.',
      text: 'I won my dream home! The process was transparent and secure. Highly recommend!',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'David M.',
      text: 'Amazing platform with fair draws. Won a beautiful cabin last year!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Sophie R.',
      text: 'Trustworthy and exciting. Love participating in their lotteries!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Michael T.',
      text: 'The mobile payment system is so convenient. Great user experience!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    }
  ];

  const stats = [
    { label: 'Happy Winners', value: '2,847', icon: Trophy },
    { label: 'Total Prize Value', value: '$45M+', icon: Award },
    { label: 'Active Participants', value: '125K+', icon: Users },
    { label: 'Success Rate', value: '99.9%', icon: TrendingUp }
  ];

  const soldPercentage = (currentLottery.soldTickets / currentLottery.totalTickets) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-x-hidden">
      {/* Header */}
      <header className="bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 animate-fade-in">
              <div className="relative">
                <Home className="w-8 h-8 text-cyan-400 animate-pulse" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                DreamHome Lottery
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={onSignIn}
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
              >
                Sign In
              </button>
              <button
                onClick={onSignUp}
                className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-cyan-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Indicators */}
      <div className="bg-gray-800/90 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-300">
            <div className="flex items-center space-x-2 animate-slide-in-left">
              <Shield className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Secure & Licensed</span>
            </div>
            <div className="flex items-center space-x-2 animate-slide-in-up">
              <Lock className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Encrypted Payments</span>
            </div>
            <div className="flex items-center space-x-2 animate-slide-in-down">
              <CheckCircle className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Verified Winners</span>
            </div>
            <div className="flex items-center space-x-2 animate-slide-in-right">
              <CreditCard className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Mobile Payment Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-purple-900/30 to-pink-900/30"></div>
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-20' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-cyan-400/30 rounded-full blur-xl"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-24 h-24 bg-pink-400/30 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float-slow">
          <div className="w-20 h-20 bg-purple-400/30 rounded-full blur-xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
              Win Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Dream Home
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 animate-fade-in-up-delayed">
              Enter our secure lottery system for a chance to win luxury properties. 
              Transparent draws, verified winners, and your dream home awaits!
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-more-delayed">
              <button
                onClick={onSignUp}
                className="group bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2"
              >
                <span>Start Winning Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="group bg-gray-800/40 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 border border-gray-600/30"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Watch How It Works</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 animate-fade-in-up border border-gray-700/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 animate-bounce" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold"
            >
              ✕ Close
            </button>
            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Current Lottery Showcase */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              Current <span className="text-cyan-400">Lottery</span>
            </h2>
            <p className="text-xl text-gray-300 animate-fade-in-up-delayed">
              Your chance to win starts here
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 animate-fade-in-up border border-gray-700">
            <div className="md:flex">
              <div className="md:w-1/2 relative overflow-hidden">
                <img
                  src={currentLottery.image}
                  alt={currentLottery.title}
                  className="w-full h-64 md:h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                      Active Draw
                    </span>
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {currentLottery.soldTickets} tickets sold
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-3xl font-bold text-white mb-4 animate-slide-in-right">
                  {currentLottery.title}
                </h3>
                <p className="text-gray-300 mb-6 animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
                  {currentLottery.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center transform hover:scale-105 transition-transform animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                    <div className="text-3xl font-bold text-cyan-400 mb-1">{currentLottery.prizeValue}</div>
                    <div className="text-sm text-gray-400">Prize Value</div>
                  </div>
                  <div className="text-center transform hover:scale-105 transition-transform animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                    <div className="text-3xl font-bold text-emerald-400">${currentLottery.ticketPrice}</div>
                    <div className="text-sm text-gray-400">Per Ticket</div>
                  </div>
                </div>

                <div className="mb-6 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Tickets Sold</span>
                    <span>{currentLottery.soldTickets} / {currentLottery.totalTickets}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-pink-500 h-4 rounded-full transition-all duration-1000 relative overflow-hidden"
                      style={{ width: `${soldPercentage}%` }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-8 animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
                  <Calendar className="w-5 h-5 text-gray-300" />
                  <span className="text-gray-300">
                    Draw Date: <strong>{new Date(currentLottery.drawDate).toLocaleDateString()}</strong>
                  </span>
                </div>

                <button
                  onClick={onSignUp}
                  className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-cyan-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 animate-slide-in-right"
                  style={{ animationDelay: '0.6s' }}
                >
                  Buy Tickets Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Lotteries */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              Upcoming <span className="text-pink-400">Lotteries</span>
            </h2>
            <p className="text-xl text-gray-300 animate-fade-in-up-delayed">
              More amazing prizes coming soon
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingLotteries.map((lottery, index) => (
              <div
                key={lottery.id}
                className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up group border border-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={lottery.image}
                    alt={lottery.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                      Coming Soon
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="text-2xl font-bold text-white drop-shadow-lg">{lottery.prizeValue}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {lottery.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{lottery.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-300" />
                      <span className="text-sm text-gray-300">
                        {new Date(lottery.drawDate).toLocaleDateString()}
                      </span>
                    </div>
                    <span className="text-lg font-semibold text-emerald-400">${lottery.ticketPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Winners */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              Recent <span className="text-yellow-400">Winners</span>
            </h2>
            <p className="text-xl text-gray-300 animate-fade-in-up-delayed">
              Real people, real wins, real dreams come true
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentWinners.map((winner, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <Trophy className="w-8 h-8 text-yellow-400 group-hover:animate-bounce" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <div className="font-bold text-white">{winner.name}</div>
                    <div className="text-sm text-gray-300">{winner.date}</div>
                  </div>
                </div>
                <p className="text-gray-200 mb-2 font-semibold">{winner.prize}</p>
                <p className="text-sm text-gray-400 font-mono">Ticket: {winner.ticketHash}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Activity Feed */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              Live <span className="text-cyan-400">Activity</span>
            </h2>
            <p className="text-xl text-gray-300 animate-fade-in-up-delayed">
              See who's joining the excitement right now
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden animate-fade-in-up border border-gray-700">
            <div className="p-6 bg-gradient-to-r from-cyan-600 to-pink-600 text-white">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">Live Participants</span>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentParticipants.map((participant, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 animate-slide-in-up border border-gray-700"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-4 h-4 text-cyan-400" />
                      <span className="font-semibold text-white">{participant.maskedName}</span>
                      <Zap className="w-3 h-3 text-yellow-400 animate-pulse" />
                    </div>
                    <p className="text-sm text-gray-300">{participant.maskedPhone}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-sm text-cyan-400 font-semibold">{participant.ticketCount} tickets</p>
                      <p className="text-xs text-gray-400">{participant.joinDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              What Our <span className="text-pink-600">Winners</span> Say
            </h2>
            <p className="text-xl text-gray-300 animate-fade-in-up-delayed">
              Hear from real winners who changed their lives
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up group border border-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
                <Heart className="w-5 h-5 text-pink-500 mt-3 group-hover:animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-400/20 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-400/20 rounded-full animate-float-slow"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Win Your Dream Home?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up-delayed">
            Join thousands of participants in our secure, transparent lottery system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-more-delayed">
            <button
              onClick={onSignUp}
              className="group bg-white text-cyan-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center space-x-2"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setIsVideoPlaying(true)}
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Success Stories</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-2 mb-6">
                <Home className="w-8 h-8 text-cyan-400" />
                <span className="text-xl font-bold">DreamHome Lottery</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted platform for winning luxury properties through secure, transparent lotteries.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center hover:bg-cyan-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">@</span>
                </div>
                <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h4 className="font-semibold mb-4 text-cyan-400">Lotteries</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Active Draws</li>
                <li className="hover:text-white transition-colors cursor-pointer">Upcoming</li>
                <li className="hover:text-white transition-colors cursor-pointer">Past Winners</li>
                <li className="hover:text-white transition-colors cursor-pointer">Prize Gallery</li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-semibold mb-4 text-cyan-400">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">How It Works</li>
                <li className="hover:text-white transition-colors cursor-pointer">FAQ</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Live Chat</li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h4 className="font-semibold mb-4 text-cyan-400">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
                <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white transition-colors cursor-pointer">Responsible Gaming</li>
                <li className="hover:text-white transition-colors cursor-pointer">Licenses</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-900 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DreamHome Lottery. All rights reserved. Licensed and regulated.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;