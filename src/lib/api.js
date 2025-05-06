export async function getTopSpots() {
    const response = await fetch('https://ccc.helloworldbox.com/items/top_spots', { next: { revalidate: 3600 } });
    
    if (!response.ok) {
      throw new Error('Failed to fetch top spots');
    }
    
    const data = await response.json();
    return data.data;
  }