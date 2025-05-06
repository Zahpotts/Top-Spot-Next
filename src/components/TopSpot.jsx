const TopSpot = ({ name, description, location }) => {
    // Create the Google Maps URL with the correct template literals
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${location[0]},${location[1]}`;
  
    return (
      <div data-testid="topspot" className="d-flex flex-column align-items-center justify-content-center border rounded-3 p-3 m-2">
        <h4>{name}</h4>
        <p>{description}</p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <button className="btn btn-primary">View on Google Map</button>
        </a>   
      </div>
    );
  };
  
  export default TopSpot;