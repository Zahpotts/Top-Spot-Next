import { getTopSpots } from "@/lib/api";
import TopSpot from "@/components/TopSpot";

export default async function Home() {
  const topSpots = await getTopSpots();
  return(
    <div className = "container">
       <header className='d-flex justify-content-center align-items-center py-3 mb-4 border-bottom'>
        <span className='fs-4'>San Diego Top Spots</span>
      </header>
      <p className='text-center'>A list of the top 30 places to see in San Diego, California</p>
      <TopSpots spots={topSpots} />
    </div>
  );
}