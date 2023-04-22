<template>
    <MDBNavbar class="navbar-container" container>
      <MDBNavbarBrand href="#">
        HiveMed
      </MDBNavbarBrand>
    </MDBNavbar>
  
    <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">
  
              <div class="mb-md-5 mt-md-4 pb-5">
  
                <h2 class="fw-bold mb-2 text-uppercase">Welcome Back!</h2>
                <p class="text-white-50 mb-5">Please enter your email and password!</p>
                
                <div class="form-outline form-white mb-4">
                  <input v-model="email" type="email" id='email' class="form-control form-control-lg" />
                  <label class="form-label" for='email'>Email</label>
                </div>
  
                <div class="form-outline form-white mb-4">
                  <input v-model="password" type="password" id='password' class="form-control form-control-lg" />
                  <label class="form-label" for='password'>Password</label>
                </div>
  
                <p class="small mb-5 pb-lg-2 text-start"><a class="text-white-50" href="#!">Forgot password?</a></p>
                <div class="mdb-form-check">
                  <MDBCheckbox label="Remember Me" v-model="checkbox2"/>
                </div>
                <button @click="handleSubmit" class="btn btn-lg px-5" type="submit">Sign In</button>
              </div>
              <div>
                <p class="sign-up mb-0 pb-lg-2 small mb-5">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> 
  </template>

<script setup>
useHead({
  title: 'Login Page',
  link: [
    {
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css',
      rel: 'stylesheet',
      integrity:
        'sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx',
      crossorigin: 'anonymous',
    },
  ],
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js',
      integrity:
        'sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa',
      crossorigin: 'anonymous',
    },
  ],
});
</script>

  <script>
    import Cookies from 'js-cookie' 
    import { MDBNavbar, MDBNavbarBrand } from 'mdb-vue-ui-kit';
  import { MDBCheckbox } from "mdb-vue-ui-kit";
  import { ref } from "vue";

    export default {
        data() {
    return {
      email: '',
      password: '',
    };
  },
      components: {
        MDBCheckbox,MDBNavbar,MDBNavbarBrand,
      },
      setup() {
        const checkbox2 = ref(false);
  
        return {
          checkbox2
        };
      },

  methods: {
   async handleSubmit() {
    try {
        const url = 'http://localhost:5000/api/auth/login';
        const response = await fetch(url , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          console.log('Login successful:', data);

          // Save the response to cookies
          Cookies.set('auth_token', 'your-auth-token');

          // Clear the input fields
          this.email = '';
          this.password = '';

          // Redirect to the dashboard
          this.$router.push('/indexLogged');

        } else {
          console.error('Login failed:', data);
        }
      } catch (error) {
        console.error('Login failed:', error.message);
      }
      // Handle login logic here

      console.log('Email:', this.email, 'Password:', this.password);
    },
  },
    };
  </script> 


  <style scoped>
  .vh-100 {
    height: 93vh;
  }
  .navbar-container {
    height: 7vh;
    background: linear-gradient(to right, #ffe19d, #eacba7,#c49d84,#c49d84,#c49d84,#c49d84);
    font-weight: bolder;
  }
  .gradient-custom {
    background: linear-gradient(to right, #ffe19d, #eacba7,#c49d84,#c49d84,#c49d84,#c49d84)
  }
  .bg-dark {
    background-color: rgba(244,244,244,.5) !important;
  }
  .text-white {
    color: black !important;
  }
  .text-white-50 {
    color: black !important;
    opacity: .70;
  }
  .form-outline{
    border-radius: 50px;
  }
  .form-outline .form-control~.form-label {
    color: gray !important;
  }
  .mdb-form-check {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .form-outline.form-white .form-control {
    color: black;
  }
  .btn {
    border-radius: 50px;
    background-color: #F0B400;
    font-weight: bolder;
    margin-top: .5rem;
  }
  .sign-up {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .sign-up a {
    margin-top: .25rem;
  }
  .container {
    margin-left: 20rem;
  }
  </style>