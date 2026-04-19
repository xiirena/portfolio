import React from 'react';
import { motion } from 'framer-motion';

export default function ServerCard({ name, role, status, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-[#160d24] p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/40 transition-all cursor-default group shadow-lg"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors uppercase tracking-tight">
          {name}
        </h3>
        <span className={`text-[10px] px-2 py-0.5 rounded-full border border-purple-500/30 text-purple-300 uppercase font-bold tracking-tighter`}>
          {status}
        </span>
      </div>
      <p className="text-gray-400 text-sm">{role}</p>
      <div className="w-full h-1 bg-white/5 mt-6 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-full bg-gradient-to-r from-purple-600 to-indigo-500"
        />
      </div>
    </motion.div>
  );
}