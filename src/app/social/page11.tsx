'use client';

const posts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'South of Big Sur on the Pacific Coast Highway',
    user: 'Silvia Oviedo',
    platform: 'Lens',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'Blueberry Pancakes',
    user: 'Martha Stewart',
    platform: 'Farcaster',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
    title: 'Great place to have a reading nook in the house',
    user: 'Jason Costa',
    platform: 'Farcaster',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
    title: 'Fresh radishes from the garden',
    user: 'Alice',
    platform: 'Lens',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: "Can't wait to try these out for family brunch",
    user: 'Martha Stewart',
    platform: 'Farcaster',
  },
];

export default function SocialPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-8 px-2">
      <h1 className="text-2xl font-bold text-gray-900 py-6 text-center"></h1>
      <div className="grid grid-cols-2 gap-4 w-full max-w-3xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="rounded-2xl bg-white shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full object-cover aspect-[4/5]" />
            <div className="p-4 flex flex-col">
              <div className="font-semibold text-gray-900 text-base mb-1">{post.title}</div>
              <div className="flex items-center text-xs text-gray-500">
                <span className="font-medium text-gray-700 mr-2">{post.user}</span>
                <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">{post.platform}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 