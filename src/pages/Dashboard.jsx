import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to the Farmer Dashboard</h2>
      <p>Select a feature from the navigation menu to get started.</p>
      
      <div className="millet-info">
        <h3>About Millet Farming</h3>
        <p>
          Millet is a highly nutritious and drought-resistant grain, making it an ideal crop for farmers
          in areas with limited rainfall. Known for its resilience and adaptability, millet is grown in a variety of climates,
          from dry regions to high altitudes. It is rich in proteins, fiber, and essential minerals, offering great potential for
          both food security and economic benefit.
        </p>

        <h3>Guidelines for Successful Millet Farming</h3>
        <ul>
          <li><strong>Soil Preparation:</strong> Millet thrives in well-drained, sandy loam soil. Ensure that the soil is properly tilled and free from weeds.</li>
          <li><strong>Seeding:</strong> Plant millet seeds at a depth of 2–3 cm, ensuring adequate spacing for healthy growth. The ideal planting time is during the monsoon season.</li>
          <li><strong>Irrigation:</strong> Millet is drought-tolerant, but it benefits from occasional irrigation during dry spells. Avoid overwatering as this can harm the roots.</li>
          <li><strong>Pest Management:</strong> Use organic pesticides or neem oil to prevent pest infestations. Regularly inspect crops for signs of damage from pests.</li>
          <li><strong>Harvesting:</strong> Millet is ready for harvest when the grains have turned golden and the plants start to dry. Harvest early in the morning to avoid moisture loss.</li>
        </ul>

        <h3>Benefits of Growing Millet</h3>
        <p>
          Growing millet offers numerous benefits, including increased soil fertility through crop rotation,
          reduced risk of crop failure due to its drought resistance, and enhanced dietary diversity. Millet is
          also an excellent source of food for both humans and livestock.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
