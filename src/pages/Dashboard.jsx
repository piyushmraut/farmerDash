import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  // Mock data for government schemes
  const governmentSchemes = [
    { name: 'National Food Security Mission', details: 'Aims to increase the production of millet through area expansion and productivity enhancement.' },
    { name: 'Pradhan Mantri Fasal Bima Yojana', details: 'Provides insurance coverage and financial support to farmers in case of crop failure.' },
    { name: 'Rashtriya Krishi Vikas Yojana', details: 'Offers funding for innovative millet farming projects and infrastructure development.' },
    { name: 'Paramparagat Krishi Vikas Yojana', details: 'Promotes organic farming practices including millet cultivation.' },
    { name: 'Mahatma Gandhi National Rural Employment Guarantee Act', details: 'Supports millet farming by offering labor resources and enhancing rural livelihoods.' },
  ];

  // Mock data for subsidies
  const subsidies = [
    { name: 'Millet Seed Subsidy', details: 'Provides subsidized high-quality millet seeds to farmers.' },
    { name: 'Organic Fertilizer Subsidy', details: 'Offers discounts on organic fertilizers for millet farming.' },
    { name: 'Drip Irrigation Subsidy', details: 'Encourages efficient water usage through subsidized drip irrigation systems.' },
    { name: 'Farm Mechanization Subsidy', details: 'Assists farmers in purchasing machinery for millet farming at reduced costs.' },
    { name: 'Storage Infrastructure Subsidy', details: 'Supports the development of storage facilities for millet crops to reduce post-harvest losses.' },
  ];

  // Mock data for market prices
  const marketPrices = [
    { milletName: 'Pearl Millet', price: '₹45/kg', location: 'Wardha' },
    { milletName: 'Finger Millet', price: '₹50/kg', location: 'Nagpur' },
    { milletName: 'Foxtail Millet', price: '₹55/kg', location: 'Pune' },
    { milletName: 'Barnyard Millet', price: '₹60/kg', location: 'Mumbai' },
    { milletName: 'Proso Millet', price: '₹65/kg', location: 'Delhi' },
  ];

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

        <h3>Government Schemes</h3>
        <ul>
          {governmentSchemes.map((scheme, index) => (
            <li key={index}>
              <strong>{scheme.name}:</strong> {scheme.details}
            </li>
          ))}
        </ul>

        <h3>Subsidies</h3>
        <ul>
          {subsidies.map((subsidy, index) => (
            <li key={index}>
              <strong>{subsidy.name}:</strong> {subsidy.details}
            </li>
          ))}
        </ul>

        <h3>Market Prices</h3>
        <ul>
          {marketPrices.map((market, index) => (
            <li key={index}>
              <strong>Millet:</strong> {market.milletName}, <strong>Price:</strong> {market.price}, <strong>Location:</strong> {market.location}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
