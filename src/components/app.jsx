import React from 'react';
import Hero from './components/Hero';
import ServerCard from './components/ServerCard';

const SERVERS = [
  { name: "Quickdrop Network", role: "Lead Contributor & Backend Developer", status: "Lead" },
  { name: "2Bad MC", role: "Store Configuration & UI Design", status: "Admin" },
  { name: "Vanguard", role: "Discord Systems & Moderation Lead", status: "Staff" }
];

function App() {
  return (
    <main className="min-h-screen pb-20">
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/20 blur-[120px] rounded-full" />
      </div>

      <Hero />

      <div className="max-w-6xl mx-auto mt-24 px-8">
        <h2 className="text-sm font-bold mb-10 text-center text-purple-400/60 uppercase tracking-[0.3em]">
          Staff Positions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVERS.map((server, i) => (
            <ServerCard 
              key={server.name}
              name={server.name}
              role={server.role}
              status={server.status}
              delay={i}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;