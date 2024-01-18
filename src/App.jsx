import { useState, useEffect } from 'react'

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, filterUsers } from './store/UsersSlice'

function App() {

  const [code, setCode] = useState("")
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [avatar, setAvatar] = useState()


  const dispatch = useDispatch()
  const users = useSelector((store) => {
    return store.userState.users
  })

  const filtredUsers = useSelector((state) => state.userState.usersFiltred)



  const handelChange = (e) => {
    const target = e.target.id
    if (target == "name") {
      setName(e.target.value)
    } else if (target == "code") {
      setCode(e.target.value)
    } else if (target == "location") {
      setLocation(e.target.value)
    } else if (target == "img") {
      const reader = new FileReader()
      reader.onload = () => {
        setAvatar(reader.result)
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }


  const handelClick = () => {
    dispatch(addUser(
      {
        name: name,
        code: code,
        location: location,
        avatar: avatar
      }
    ))
  }
  const handleFilter = () => {
    const value = prompt("Filter Location : ...")
    dispatch(filterUsers(value))
  }


  return (
    <>
      <form>
        <input type="number" id="code" placeholder='Code : ' onChange={handelChange} />
        <br></br>
        <input type="text" id="name" placeholder='name : ' onChange={handelChange} />
        <br></br>
        <input type="text" id="location" placeholder='location : ' onChange={handelChange} />
        <br></br>
        <input type="file" id="img" accept='image/*' placeholder='avatar : ' onChange={handelChange} />
        <br></br>
        <button type='button' onClick={handelClick} >Submit</button>
        <button type='button' onClick={handleFilter} >Filter</button>
      </form>
      <hr></hr>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Avatar</th>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

          {
            filtredUsers.length === 0 ? users.map((ele) => {
              return (<tr>
                <th scope="row"> <img className="img" src={ele.avatar} />  </th>
                <td>{ele.code}</td>
                <td>{ele.name}</td>
                <td>{ele.location}</td>
              </tr>)
            })

              :

              filtredUsers.map((ele) => {
                return (<tr>
                  <th scope="row"> <img className="img" src={ele.avatar} />  </th>
                  <td>{ele.code}</td>
                  <td>{ele.name}</td>
                  <td>{ele.location}</td>
                </tr>)
              })
          }


        </tbody>
      </table>




    </>
  )
}

export default App
