import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PerformanceGraph = () => {
  // Sample data for the graph
  const performanceData = [
    { name: 'IX-B', attempts: 120, correct: 85, performance: (85 / 120) * 100 },
    { name: 'X-A', attempts: 95, correct: 70, performance: (70 / 95) * 100 },
    { name: 'XI-G', attempts: 110, correct: 90, performance: (90 / 110) * 100 },
    { name: 'IX-A', attempts: 80, correct: 60, performance: (60 / 80) * 100 },
    { name: 'VIII-A', attempts: 100, correct: 75, performance: (75 / 100) * 100 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Performance</h2>
      <div className="flex justify-between mb-4">
        <div>
          <span className="text-gray-600">Last 7 Days</span>
          <span className="text-gray-400 ml-2">▼</span>
        </div>
        <div>
          <span className="text-gray-600">All Class</span>
          <span className="text-gray-400 ml-2">▼</span>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={performanceData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="attempts" fill="#8884d8" name="Attempts" />
            <Bar dataKey="correct" fill="#82ca9d" name="Correct Answers" />
            <Bar dataKey="performance" fill="#ffc658" name="Performance (%)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceGraph;