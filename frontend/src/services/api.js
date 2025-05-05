
// Fetch energy usage data (staff/executive access)
export const fetchEnergyUsage = async ({ account_no, start_date, end_date }) => {
  try {
    const query = new URLSearchParams({ account_no, start_date, end_date }).toString();
    const response = await fetch(`/api/v1/energyData/usage?${query}`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch energy usage:", err);
    return null;
  }
};

// Fetch pricing analytics (executive only)
export const fetchPricingAnalytics = async () => {
  try {
    const response = await fetch('/api/v1/analytics/pricing');
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch pricing analytics:", err);
    return null;
  }
};

// Fetch plant metadata (public)
export const fetchPlantMetadata = async (plantId) => {
  try {
    const response = await fetch(`/api/v1/plant/${plantId}`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch plant metadata:", err);
    return null;
  }
};
