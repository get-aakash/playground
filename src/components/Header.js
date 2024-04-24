import { signOut } from 'firebase/auth'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { auth } from './firebase-config/firebaseConfig'
import { useDispatch } from 'react-redux'
import { setUser } from './userSlice'
import { toast } from 'react-toastify'

const Header = () => {
  const dispatch = useDispatch()

  const handleLogout = ()=>{
    signOut(auth).then(()=>{
      dispatch(setUser({}))
    }).catch(error=>toast.error(error.message))
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2">
            <Link to="/signup">SignUp</Link>
            <Link to="/signin">SignIn</Link>
            <Link to="/signin" onClick={handleLogout}>SignOut</Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
