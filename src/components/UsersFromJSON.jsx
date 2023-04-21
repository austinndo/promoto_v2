import users_data from '../data/users.json'

const Users = () => {
  return (
  <div className='usersContainer'>
    {users_data.map((user) => (
    <div key={user._id} className="usersContainerContent">
    <h4>{user.username}</h4>
    <h5>Favorite Genres: <br></br>{user.favoriteGenres}</h5>
    </div>))}
  </div>
  )
}

export default Users