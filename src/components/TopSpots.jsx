import TopSpot from "./TopSpot";

const TopSpots = ({ spots }) => {
  return (
    <div data-testid="top-spots" className="topspots">
      {spots.map((topspot) => (
        <TopSpot
          key={topspot.id}
          name={topspot.name}
          description={topspot.description}
          location={topspot.location}
        />
      ))}
    </div>
  );
};

export default TopSpots;