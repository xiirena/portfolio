import React from 'react';
import { motion } from 'framer-motion';
import { Discord, Globe, User, Calendar } from 'lucide-react';

const InfoItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-4 bg-[#1f1433]/50 p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all">
    <Icon className="text-purple-400 w-5 h-5" />
    <span><strong className="text-purple-300">{label}:</strong> {value}</span>
  </div>
);

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl mx-auto mt-20 p-8 rounded-3xl bg-[#160d24] border border-purple-500/20 shadow-[0_0_60px_-15px_rgba(168,85,247,0.4)]"
    >
      <h1 className="text-6xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">
        User
      </h1>
      <p className="text-gray-400 text-lg mb-8 italic">Software Developer & Network Admin</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoItem icon={Discord} label="Discord" value="2m4d" />
        <InfoItem icon={User} label="Minecraft" value="Caackee" />
        <InfoItem icon={Globe} label="Location" value="Central Europe" />
        <InfoItem icon={Calendar} label="Age" value="14" />
      </div>
    </motion.section>
  );
}