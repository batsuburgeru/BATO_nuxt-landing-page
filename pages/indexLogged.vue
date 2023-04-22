<template>
    <nav>
        <a href="#hero" class="nav-logo"><h1 class="logo">HiveMed</h1></a>
        <ul class="navbar-ul">
        <li><a href="#" class="navbar-links">Book an Appointment</a></li>
        <li><a href="#doctorSection" class="navbar-links">Doctors</a></li>
        <li><a href="#pharmacySection" class="navbar-links">Pharmacies</a></li>
        <li><a href="#descSection" class="navbar-links">About Us</a></li>
        </ul>
        <button @click="ToLogout" class="nav-button">Logout</button>
    </nav>
    
    <section class="hero" id="hero">
          <div class="hero-tags">
            <h1 class="hero-tagline">Best of Care, Easy to reach everywhere.</h1>
            <p class="hero-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum
              obcaecati, molestiae quis aspernatur porro exercitationem possimus et
              nam nihil.
            </p>
          </div>
          <div class="container">
      <div class="box box3">
        <img src='../assets/prescription.jpg' alt=''>
      </div>
      <div class="box box2">
        <img src='../assets/doctor.jpg' alt=''>
      </div>
      <div class="box box1">
        <img src='../assets/hivemed-logo.png' alt=''>
      </div>
      <div class="box box4">
        <img src='../assets/prescription2.jpg' alt=''>
      </div>
      <div class="box box5">
        <img src='../assets/pharmacy.jpg' alt=''>
      </div>
      <div class="box box6">
        <img src='../assets/pharmacy3.jpg' alt=''>
      </div>
      <div class="box box7">
        <img src='../assets/patient.jpg' alt=''>
      </div>
    </div>
        </section>
    </template>
    
    <script>
    import Cookies from 'js-cookie' 
    export default {
        methods: {
            ToLogout() {
                Cookies.remove('auth_token') 
                this.authToken = ''
                this.$router.push('/');
                console.log
            },
            ToReg() {
                this.$router.push('/register');
            },
        },
    }
    </script>
    
    <style>
    :root {
        --gap: .625rem;
        --size: 16.25rem;
        --font-family: roboto, sans-serif;
        --primary-color: #6c8cbf;
        --secondary-color: #e2d36b;
        --bg-color: #96d7c6;
        --secondary-bg-color: #cde0c9;
        --font-color: #edf5e1;
        --normal-font: 400;
        --bold-font: 700;
        --bolder-font: 900;
        --bottom-margin: 0.5rem;
        --bottom-margin-2: 1rem;
        --line-height: 1.7rem;
        --transition: 0.3s;
    }
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    .logo {
        font-weight: bolder;
    }
    ul {
        list-style-type: none;
    }
    
    a {
        text-decoration: none;
        color:var(--primary-color)
    }
    
    nav {
        width: 100vw;
        top: 0;
        left: 0;
        padding: 1rem 3.5rem;
        z-index: 1;
        position: sticky;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
        background-color: var(--secondary-bg-color);
    }
    .nav-logo {
        margin-right: auto;
    }
    nav a {
        color: var(--primary-color);
        transition: var(--transition);
    }
    
    nav ul {
        display: flex;
        gap: 2rem;
    }
    
    nav ul li {
        font-weight: var(--bold-font);
        margin-right: 1rem;
        padding-right: 1rem;
    }
    
    nav a:hover{
        color: var(--secondary-color);
        border-bottom: 2px solid var(--font-color);
    }
    
    .nav-button {
        border-radius: 50%;
        padding: 9px 25px;
        background-color: var(--primary-color);
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: var(--transition);
        font-weight: var(--bold-font);
        color: var(--font-color);
    }
    
    .hero {
        background-image: url("../assets/hero-bg-img.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 100vh;
        width: 100vw;
        margin: 0; 
        padding: 0;
        box-shadow: inset 0 0 0 1000px rgba(0,0,0,.3);
    }
    .hero-tagline {
        padding-left: 3rem;
        font-weight: var(--bolder-font);
        font-size: 3rem;
        color: var(--font-color);
        text-decoration: none;
        position: absolute;
        top: 45%;
    }
    
    .hero-btn {
        padding-left: 3rem;
        position: absolute;
        vertical-align: auto;
        padding-top: 26.5%;
    }
    
    .hero-desc {
        padding-left: 3rem;
        padding-right: 42%;
        font-weight: var(--bold-font);
        font-size: 1.5rem;
        color: rgb(230, 230, 230);
        text-decoration: none;
        text-align: justify;
        position: absolute;
        top: 53%;
    }
    
    .register-btn {
        background-color: var(--primary-color);
        padding: 15px 35px;
        border-radius: 5px;
        border: none;
        font-weight: var(--bold-font);
        cursor: pointer;
        transition: var(--transition);
        color: var(--font-color);
    }
    
    .desc {
        display: flex;
        flex-direction: column;
    }
    
    .register-btn:hover {
        color: var(--primary-color);
        background-color: var(--secondary-bg-color);
        border-bottom: 2px solid var(--font-color);
    }
    
    .container {
      position: absolute;
      width: calc(var(--size) * 0.866);
      height: var(--size);
    }
    .box {
      overflow: hidden;
      position: absolute;
      top: 100%;
      left: 625%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, .5);
      clip-path: polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);
    }
    img {
      transform-origin: center;
      object-fit: contain;
      transition: all .5s ease-out;
    
    }
    .box1 img {
      height: 100vh;
      width: 17rem;
    }
    .box2 img {
      height: 100vh;
      width: 28.5rem;
    }
    .box3 img {
      height: 18rem;
      width: 100vw;
    }
    .box4 img {
      height: 15.5rem;
      width: 100vw;
    }
    .box5 img {
      height: 100vh;
      width: 25rem;
    }
    .box6 img {
      height: 18rem;
      width: 100vw;
    }
    .box7 img {
      height: 100vh;
      width: 25rem;
    }
    img::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, .45);
      transition: all .5s ease-out;
    }
    img:hover {
      transform: scale(1.2);
    }
    img::after {
      background: rgba(0, 0, 0, 0);
    }
     
    .box2.box {
      transform: translate(calc(-50% - (var(--gap) / 2)), calc(-75% - (var(--gap) ) / 2 * 1.732));
    }
    
    .box3.box {
      transform: translate(calc(50% + (var(--gap)  / 2)), calc(-75% - (var(--gap) ) / 2 * 1.732));
    }
    
    .box4.box {
      transform: translate(calc(-100% - var(--gap) ), 0);
    }
    
    .box5.box {
      transform: translate(calc(100% + var(--gap) ), 0);
    }
    
    .box6.box {
      transform: translate(calc(-50% - (var(--gap)  / 2)), calc(75% + (var(--gap) ) / 2 * 1.732));
    }
    
    .box7.box {
      transform: translate(calc(50% + (var(--gap)  / 2)), calc(75% + (var(--gap) ) / 2 * 1.732));
    }
    </style>