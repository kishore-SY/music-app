import { FaMusic, FaHome, FaHeart } from "react-icons/fa";

function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          background: "#000",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>🎵 Music App</h2>

        <p><FaHome /> Home</p>
        <p><FaMusic /> Songs</p>
        <p><FaHeart /> Favorites</p>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          background: "#121212",
          color: "white",
          padding: "20px",
        }}
      >
        <h1>Trending Songs</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {["Shape of You", "Believer", "Perfect"].map((song) => (
            <div
              key={song}
              style={{
                width: "200px",
                background: "#282828",
                borderRadius: "10px",
                padding: "15px",
              }}
            >
              <img
                src="https://picsum.photos/200"
                alt="album"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              />

              <h3>{song}</h3>

              <audio controls style={{ width: "100%" }}>
                <source
                  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                  type="audio/mp3"
                />
              </audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;