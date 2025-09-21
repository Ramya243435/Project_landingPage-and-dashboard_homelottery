import React, { useState } from 'react';
import { Hash, Calendar, DollarSign, Eye, Filter, Search } from 'lucide-react';
import { Ticket } from '../types';

interface TicketHistoryProps {
  tickets: Ticket[];
}

const TicketHistory: React.FC<TicketHistoryProps> = ({ tickets }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'drawn' | 'winner'>('all');
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.hash.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'drawn':
        return 'bg-gray-100 text-gray-800';
      case 'winner':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const totalAmount = tickets.reduce((sum, ticket) => sum + ticket.amount, 0);
  const activeCount = tickets.filter(t => t.status === 'active').length;
  const winnerCount = tickets.filter(t => t.status === 'winner').length;

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Hash className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-600">Total Tickets</p>
              <p className="text-2xl font-bold text-gray-800">{tickets.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-600">Total Invested</p>
              <p className="text-2xl font-bold text-gray-800">${totalAmount}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-gray-600">Active Tickets</p>
              <p className="text-2xl font-bold text-gray-800">{activeCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">My Tickets</h2>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by ticket hash..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="drawn">Drawn</option>
              <option value="winner">Winner</option>
            </select>
          </div>
        </div>

        {/* Tickets List */}
        <div className="space-y-4">
          {filteredTickets.length === 0 ? (
            <div className="text-center py-12">
              <Hash className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">
                {tickets.length === 0 ? 'No tickets purchased yet.' : 'No tickets match your search.'}
              </p>
            </div>
          ) : (
            filteredTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="flex items-center justify-between p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <Hash className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-mono text-lg font-semibold text-gray-800">{ticket.hash}</p>
                    <p className="text-sm text-gray-600">
                      Purchased: {new Date(ticket.purchaseDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Amount</p>
                    <p className="font-semibold text-gray-800">${ticket.amount}</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Draw Date</p>
                    <p className="font-semibold text-gray-800">
                      {new Date(ticket.drawDate).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Status</p>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(ticket.status)}`}>
                      {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => setSelectedTicket(ticket)}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Ticket Details Modal */}
      {selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Ticket Details</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Ticket Hash</p>
                <p className="font-mono text-lg font-semibold text-blue-600">{selectedTicket.hash}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Purchase Date</p>
                  <p className="font-semibold">{new Date(selectedTicket.purchaseDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Draw Date</p>
                  <p className="font-semibold">{new Date(selectedTicket.drawDate).toLocaleDateString()}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Amount Paid</p>
                  <p className="font-semibold text-green-600">${selectedTicket.amount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(selectedTicket.status)}`}>
                    {selectedTicket.status.charAt(0).toUpperCase() + selectedTicket.status.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">Lottery</p>
                <p className="font-semibold">Luxury Villa Paradise</p>
                <p className="text-sm text-gray-600">Prize Value: $850,000</p>
              </div>
            </div>
            
            <button
              onClick={() => setSelectedTicket(null)}
              className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors mt-6"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketHistory;