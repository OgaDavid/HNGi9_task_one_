import React from 'react'

const Profile = () => {
  return (
    <section className="profile">
      <img src="images/profile_pic.JPG" alt="" className="profile__img"  id='profile__img'/>
      <p className='profile__name' id='twitter'>Demiicoder</p>
      <p className="slack" id='slack'>David Oga</p>
    </section>
  )
}

export default Profile