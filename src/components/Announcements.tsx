import React from 'react';
import { Bell, Calendar, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import { Announcement } from '../types';

interface AnnouncementsProps {
  announcements: Announcement[];
}

const Announcements: React.FC<AnnouncementsProps> = ({ announcements }) => {
  const getAnnouncementIcon = (type: string) => {
    switch (type) {
      case 'info':
        return <Info className="w-5 h-5 text-blue-600" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  const getAnnouncementStyle = (type: string) => {
    switch (type) {
      case 'info':
        return 'border-blue-200 bg-blue-50';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50';
      case 'success':
        return 'border-green-200 bg-green-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  const sortedAnnouncements = [...announcements].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Bell className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Announcements</h2>
        </div>

        <div className="space-y-4">
          {sortedAnnouncements.length === 0 ? (
            <div className="text-center py-12">
              <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No announcements at this time.</p>
            </div>
          ) : (
            sortedAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                className={`border rounded-xl p-6 ${getAnnouncementStyle(announcement.type)}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {getAnnouncementIcon(announcement.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {announcement.title}
                      </h3>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 flex-shrink-0 ml-4">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(announcement.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {announcement.content}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Tips</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            <p className="text-gray-700">Check announcements regularly for important updates</p>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            <p className="text-gray-700">Draw dates and results are always announced here first</p>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            <p className="text-gray-700">Payment system updates and security notices are posted here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;