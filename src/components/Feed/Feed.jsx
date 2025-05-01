const Feed = ({ posts = [] }) => {
  if (!posts || posts.length === 0) {
    return <div className="p-4 text-center text-gray-500">No posts available.</div>;
  }

  return (
    <div className="w-full p-4 overflow-y-auto space-y-4 h-full bg-gray-100">
      {posts.map((post) => (
        <div key={post.id} className="bg-white border border-gray-300 p-4 rounded-2xl shadow-md">
          <div className="flex items-center space-x-4 mb-2">
            {/* Updated img tag */}
            <img
              src={post.profilePhoto || 'https://i.pravatar.cc/150?img=3'} // Use a valid placeholder URL
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
              onError={(e) => (e.target.src = 'https://i.pravatar.cc/150?img=1')} // Fallback for broken images
            />
            <div>
              <p className="font-bold text-sm">{post.username}</p>
              <p className="text-xs text-gray-500">{new Date(post.time).toLocaleString()}</p>
            </div>
          </div>
          <p className="text-sm mb-2">{post.content}</p>
          {post.image && (
            <img
              src={post.image}
              alt="Post"
              className="w-full rounded-md mb-2"
              onError={(e) => (e.target.src = 'https://picsum.photos/600/400')} // Fallback for broken images
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Feed;