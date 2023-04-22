<template>
    <MDBNavbar class="navbar-container" container>
        <MDBNavbarBrand href="#" style="color:black;">
      HiveMed
    </MDBNavbarBrand>
  </MDBNavbar>

  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-20 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
              <div class="card-body p-5 text-center">

                <div class = "left-forms">
                  <div class="mb-md-0 mt-md-0 pb-0">
                    <p class="out-label text-start">First Name *</p>
                    <div class="form-outline form-white mb-4">
                        <input type="text" id="firstNameX" class="form-control form-control-lg" />
                        <label class="form-label" for="firstNameX">First Name</label>
                    </div>
                  </div>

                  <div class="mb-md-0 mt-md-0 pb-0">
                    <p class="out-label text-start">Username</p>
                    <div class="form-outline form-white mb-4">
                      <input v-model="username" type="text" id="username" class="form-control form-control-lg" />
                      <label class="form-label" for="username">@</label>
                    </div>
                  </div>

                  <div class="mb-md-0 mt-md-0 pb-0">
                    <p class = "out-label text-start">Password *</p>
                    <div class="form-outline form-white mb-4">
                      <input v-model="password" type="password" id="typePasswordX" class="form-control form-control-lg" />
                      <label class="form-label" for="password">Password</label>
                    </div>
                  </div>
                      </div>

                      <div class = "right-forms">
                        <div class="mb-md-0 mt-md-0 pb-0">
                            <p class="out-label text-start">Last Name *</p>
                            <div class="form-outline form-white mb-4">
                                <input type="text" id="lastNameX" class="form-control form-control-lg" />
                                <label class="form-label" for="lastNameX">Last Name</label>
                            </div>
                        </div>

                        <div class="mb-md-0 mt-md-0 pb-0">
                            <p class="out-label text-start">E-mail address *</p>
                            <div class="form-outline form-white mb-4">
                                <input v-model="email" type="text" id="emailX" class="form-control form-control-lg" />
                                <label class="form-label" for="email">Email Address</label>
                            </div>
                        </div>

                        <div class="mb-md-0 mt-md-0 pb-0">
                          <p class = "out-label text-start">Confirm Password *</p>
                          <div class="form-outline form-white mb-4">
                          <input type="password" id="confirmPasswordX" class="form-control form-control-lg" />
                          <label class="form-label" for="confirmPasswordX">Re-type Password</label>
                          </div>
                        </div>
                      </div>       
                    </div>
                    <div>
                      <button @click="handleSubmit"  class="btn btn-lg px-5" type="submit">Register</button>
                    </div>
                </div>
              </div>
        </div>
    </div>


  </section>


</template>

<script>
import Cookies from 'js-cookie';
import { MDBNavbar, MDBNavbarBrand } from 'mdb-vue-ui-kit';

export default {
    components: {
      MDBNavbar,MDBNavbarBrand,
    },
    data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },

  methods: {
   async handleSubmit() {
    try {
        const url = 'http://localhost:5000/api/auth/signup';
        const response = await fetch(url , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
            username: this.username
          }),
        });
        const data = await response.json();
        if (response.ok) {
          console.log('Register successful:', data);

          // Save the response to cookies
          Cookies.set('auth_token', 'your-auth-token');

          // Clear the input fields
          this.email = '';
          this.password = '';

          // Redirect to the dashboard
          this.$router.push('/login');

        } else {
          console.error('Register failed:', data);
        }
      } catch (error) {
        console.error('Register failed:', error.message);
      }
      // Handle login logic here

      console.log('Email:', this.email, 'Password:', this.password, 'Username:', this.username);
    },
  },
    };


</script>

<style scoped>
.vh-100 {
  height: 93vh !important;
}
.navbar-container {
  height: 7vh;
  background: linear-gradient(to right, #ffe19d, #eacba7,#c49d84,#c49d84,#c49d84,#c49d84);
  font-weight: bolder;
  font-size: xx-large;
}
.gradient-custom {
  background: linear-gradient(to right, #ffe19d, #eacba7,#c49d84,#c49d84,#c49d84,#c49d84)
}
.card {
  width: 60rem;
  height: 30rem;
  margin: 5rem 27rem;

}
.card-body {
  padding-bottom: 1rem !important;
  padding-top: 5rem;
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
  padding: 0;
  margin: 0;
}
.form-outline .form-control~.form-label {
  color: gray !important;
}
.form-outline.form-white .form-control {
  color: black;
}
.out-label {
  margin-bottom: .5rem;
  margin-left: .5rem;
  font-weight: bold;
}
.left-forms {
  float: left;
  width: 50%;
  padding: 0 1.5rem 0 1.5rem;
}

.right-forms {
  float: right;
  width: 50%;
  padding: 0 1.5rem 0 1.5rem;
}
.col-xl-5 {
  width: 60rem;
}
#formFile {
  border-radius: 50px;
}
.btn {
  border-radius: 50px;
  background-color: #F0B400;
  font-weight: bolder;
  margin-right: 5rem;
  margin-top: 4rem;
  float: right;
  font-size: larger;
  padding: .5rem;
  
}
.form-control {
    padding: .3rem;
    margin: 1rem;
    border-radius: 50px;
}
.form-label {
    padding: 0;
    margin: 0;
}
</style>