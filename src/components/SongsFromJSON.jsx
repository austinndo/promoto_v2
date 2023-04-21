import songs_data from '../data/songs.json'

const Songs = () => { 
  return (
    <div className="songsContainer">
        {songs_data.map((song) => (
        <div key={song.id} className="songsContainerContent">
        <img className="songContainerCover" src={song.cover} alt="album-cover"/>
        <h2>"{song.name}"</h2>
        <h4>{song.artist}</h4>
        </div>))}
    </div>
  )
}

export default Songs