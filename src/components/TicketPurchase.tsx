import React, { useState } from 'react';
import { 
  CreditCard, 
  Smartphone, 
  Plus, 
  Minus, 
  Hash, 
  Shield, 
  CheckCircle,
  Calendar,
  DollarSign
} from 'lucide-react';
import { User, Ticket } from '../types';

interface TicketPurchaseProps {
  user: User;
  onPurchaseComplete: (tickets: Ticket[]) => void;
}

const TicketPurchase: React.FC<TicketPurchaseProps> = ({ user, onPurchaseComplete }) => {
  const [ticketCount, setTicketCount] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<'mobile' | 'card'>('mobile');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [purchasedTickets, setPurchasedTickets] = useState<Ticket[]>([]);

  const ticketPrice = 25;
  const total = ticketCount * ticketPrice;

  const generateTicketHash = (userPhone: string): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const randomPart = Array.from({ length: 8 }, () => 
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join('');
    const phonePart = userPhone.replace(/\D/g, '').slice(-6);
    return `LV${randomPart}${phonePart}`;
  };

  const handlePurchase = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newTickets: Ticket[] = Array.from({ length: ticketCount }, (_, i) => ({
      id: `ticket_${Date.now()}_${i}`,
      hash: generateTicketHash(user.phone),
      purchaseDate: new Date().toISOString().split('T')[0],
      drawDate: '2025-02-15',
      amount: ticketPrice,
      status: 'active' as const
    }));

    setPurchasedTickets(newTickets);
    setIsProcessing(false);
    setShowConfirmation(true);
    
    // Reset form after showing confirmation
    setTimeout(() => {
      onPurchaseComplete(newTickets);
      setShowConfirmation(false);
      setTicketCount(1);
    }, 3000);
  };

  if (showConfirmation) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Purchase Successful!</h2>
        <p className="text-gray-600 mb-6">
          Your tickets have been purchased and are now active for the upcoming draw.
        </p>
        
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-gray-800 mb-4">Your Ticket Hashes</h3>
          <div className="space-y-2">
            {purchasedTickets.map((ticket, index) => (
              <div key={ticket.id} className="flex items-center justify-center space-x-2 font-mono text-sm">
                <Hash className="w-4 h-4 text-gray-400" />
                <span className="text-blue-600 font-bold">{ticket.hash}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-500">
          Redirecting to your dashboard in a few seconds...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Purchase Lottery Tickets</h2>
        
        {/* Current Lottery Info */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-4">
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=1"
              alt="Luxury Villa Paradise"
              className="w-24 h-18 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Luxury Villa Paradise</h3>
              <p className="text-gray-600 mb-4">Prize Value: $850,000</p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Draw: Feb 15, 2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4" />
                  <span>${ticketPrice} per ticket</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticket Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Number of Tickets</h3>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
              className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              disabled={ticketCount <= 1}
            >
              <Minus className="w-4 h-4" />
            </button>
            
            <div className="px-6 py-3 border border-gray-300 rounded-lg bg-gray-50">
              <span className="text-2xl font-bold text-gray-800">{ticketCount}</span>
            </div>
            
            <button
              onClick={() => setTicketCount(Math.min(10, ticketCount + 1))}
              className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              disabled={ticketCount >= 10}
            >
              <Plus className="w-4 h-4" />
            </button>
            
            <div className="ml-6">
              <p className="text-sm text-gray-600">Total: <span className="text-2xl font-bold text-green-600">${total}</span></p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Maximum 10 tickets per purchase</p>
        </div>

        {/* Payment Method */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Payment Method</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => setPaymentMethod('mobile')}
              className={`p-6 border-2 rounded-xl transition-colors ${
                paymentMethod === 'mobile'
                  ? 'border-blue-500 bg-blue-50 text-blue-600'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Smartphone className="w-8 h-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Mobile Payment</h4>
              <p className="text-sm opacity-75">Pay with your mobile wallet</p>
              <div className="mt-3 space-y-1 text-xs">
                <p>• Apple Pay</p>
                <p>• Google Pay</p>
                <p>• Samsung Pay</p>
              </div>
            </button>

            <button
              onClick={() => setPaymentMethod('card')}
              className={`p-6 border-2 rounded-xl transition-colors ${
                paymentMethod === 'card'
                  ? 'border-blue-500 bg-blue-50 text-blue-600'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <CreditCard className="w-8 h-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Credit/Debit Card</h4>
              <p className="text-sm opacity-75">Pay with your card</p>
              <div className="mt-3 space-y-1 text-xs">
                <p>• Visa</p>
                <p>• Mastercard</p>
                <p>• American Express</p>
              </div>
            </button>
          </div>
        </div>

        {/* Security Info */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-green-600" />
            <h4 className="font-semibold text-green-800">Secure Transaction</h4>
          </div>
          <div className="text-sm text-green-700 space-y-2">
            <p>• All payments are encrypted and processed securely</p>
            <p>• Each ticket receives a unique hash for verification</p>
            <p>• Hash combines random characters with your phone number</p>
            <p>• No payment information is stored on our servers</p>
          </div>
        </div>

        {/* Purchase Button */}
        <button
          onClick={handlePurchase}
          disabled={isProcessing}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isProcessing ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Processing Payment...</span>
            </div>
          ) : (
            `Purchase ${ticketCount} Ticket${ticketCount > 1 ? 's' : ''} - $${total}`
          )}
        </button>

        {/* Terms */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          By purchasing tickets, you agree to our Terms of Service and acknowledge that lottery participation 
          involves risk. Must be 18+ years old to participate.
        </p>
      </div>
    </div>
  );
};

export default TicketPurchase;