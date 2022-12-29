import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className="page_404" style={{width:"100%", background:"#fff;"}} >
	<div className="container">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-10 col-sm-offset-1  text-center">
		<div className="four_zero_four_bg">
			<h1 className="text-center ">404</h1>
		
		
		</div>
		
		<div className="contant_box_404" style={{
        backgroundImage: `url(${"https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"})`,
		 width:"100%",
  		 height:"100%" , 
  		  top: 0,
          left: 0,
        backgroundRepeat: 'no-repeat',
        minHeight: '83vh',
		backgroundSize: "cover",
      }}>
		<h3 className="h2" >
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<Button fullWidth component={Link} to="/catalog">Go Home You are Drunk</Button> 
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
  )
}

export default NotFoundPage