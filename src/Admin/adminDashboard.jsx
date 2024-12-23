import { useState } from 'react';

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search..."
        className="border p-2 rounded-md w-1/2 mb-4"
      />
      {/* You can add more dashboard content here */}
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
    </div>
  );
}
