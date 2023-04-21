// import { useState, useEffect } from 'react'
// import axios from 'axios'
import Users from '../../components/UsersFromJSON'
import SearchedNav from '../../components/SearchedNav'


const SearchUsers = () => {

  // const [users, setUsers] = useState([])

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const users = await axios.get('http://localhost:3001/users')
  //     setUsers(users.data.users)
  //   }
  //   getUsers()
  // }, [])

  return (
    <div className='searchUsers'>
      <SearchedNav />
      <div>
      <Users />
        {/* <Users users={users} /> */}
      </div>
    </div>
  )

}

export default SearchUsers