import { Users, MessageCircle, Share, Eye } from 'lucide-react';
import { useState } from 'react';

interface CollaborationProps {
  projectId: string;
  collaborators: { id: string; name: string; avatar: string; status: 'online' | 'offline' }[];
  onInvite: () => void;
}

export const CollaborationPanel: React.FC<CollaborationProps> = ({
  projectId,
  collaborators,
  onInvite
}) => {
  const [showComments, setShowComments] = useState(false);
  
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-semibold text-lg flex items-center">
          <Users className="w-5 h-5 mr-2" />
          Collaboration
        </h3>
        <button
          onClick={onInvite}
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          Invite
        </button>
      </div>

      {/* Collaborators */}
      <div className="space-y-3 mb-6">
        {collaborators.map((collaborator) => (
          <div key={collaborator.id} className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={collaborator.avatar}
                alt={collaborator.name}
                className="w-8 h-8 rounded-full"
              />
              <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-900 ${
                collaborator.status === 'online' ? 'bg-green-400' : 'bg-gray-400'
              }`} />
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">{collaborator.name}</p>
              <p className="text-white/60 text-xs">{collaborator.status}</p>
            </div>
            <div className="flex space-x-1">
              <Eye className="w-4 h-4 text-white/60" />
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white py-2 px-3 rounded-lg text-sm transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Comments</span>
        </button>
        
        <button className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white py-2 px-3 rounded-lg text-sm transition-colors">
          <Share className="w-4 h-4" />
          <span>Share</span>
        </button>
      </div>

      {/* Comments Panel */}
      {showComments && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="space-y-3 max-h-40 overflow-y-auto">
            <div className="bg-white/5 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop" alt="User" className="w-6 h-6 rounded-full" />
                <span className="text-white text-sm font-medium">Sarah</span>
                <span className="text-white/50 text-xs">2m ago</span>
              </div>
              <p className="text-white/80 text-sm">The voice sounds great! Can we make it slightly warmer?</p>
            </div>
          </div>
          
          <div className="mt-3">
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-primary-500 text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CollaborationPanel;