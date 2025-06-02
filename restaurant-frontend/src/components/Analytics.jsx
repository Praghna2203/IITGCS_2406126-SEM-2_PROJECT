import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Analytics = () => {
  const [data, setData] = useState({ labels: [], values: [] });

  useEffect(() => {
    const fetchAnalytics = async () => {
      const res = await axios.get("http://localhost:5000/api/analytics/most-ordered");
      const labels = res.data.map(item => item._id);
      const values = res.data.map(item => item.count);
      setData({ labels, values });
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Most Ordered Dishes</h2>
      <Bar
        data={{
          labels: data.labels,
          datasets: [{
            label: 'Orders',
            data: data.values,
            backgroundColor: 'rgba(75,192,192,0.6)',
          }]
        }}
        options={{
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }}
      />
    </div>
  );
};

export default Analytics;
