import React from "react"
import "./header.css"
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink } from "mdb-react-ui-kit"

function Header() {
  return (
    <div>
      <>
        <MDBNavbar light bgColor="light">
          <MDBContainer fluid>
            <MDBNavbarBrand href="#">
              <img src="https://www.bing.com/th/id/OGC.a948950f5151197d3e036a0ffafd9381?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f702128%2fscreenshots%2f2390607%2fmedia%2fe16bdb948f5674572f493783dc746bcf.gif&ehk=wWOW4bCBQeb%2fbAB%2bezFhfvghpU8uovcghdmQ0I4b1ow%3d" height="50" alt="" loading="lazy" />
              EMI CALCULATOR APP
            </MDBNavbarBrand>
          </MDBContainer>
        </MDBNavbar>
      </>

      <div className="container1">
        <div className="box">
          <div className="box1">
            <img src="https://th.bing.com/th/id/OIP.mkdzLuuyIiTz2q_9351jegHaE6?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="icon1" />
            <h5>HOME LOAN EMI CALCULATOR</h5>
          </div>

          <div className="box1">
            <img src="https://th.bing.com/th/id/OIP.iVXYZCQFl1Buce2sYrG6pAHaE8?w=291&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="icon1" />
            <h5>CAR LOAN EMI CALCULATOR</h5>
          </div>

          <div className="box1">
            <img src="https://th.bing.com/th/id/OIP.aDcgSZUBaeandw3SkwU8jQHaFT?w=216&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            <h5>PERSONAL LOAN EMI CALCULATOR</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
