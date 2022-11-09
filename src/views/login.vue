<template >
  <div class="signup-form m-0 ptnbg" style="height: 100vh; overflow-y: hidden">
    <div class="lgnFromIcn mt-3">
      <div class="row justify-content-sm-center">
        <div class="col-12">
          <img
            src="../assets/img/logo/logo.png"
            class="img-thumbnail"
            style="height: 100%; width: 60%"
          />
        </div>
      </div>
    </div>
    <h4 class="text-center titlefnt pt-2 rounded">Log in</h4>
    <div class="alert blk50 py-3 pr-4 Gp0m0 my-3" v-show="errormsgsts">
      <h5 class="text-danger text-center">{{ errormsg }}</h5>
      <div
        type="button"
        class="close btn eremsg"
        aria-label="Close"
        style="margin-top: -5%; margin-right: -6%"
      >
        <span
          aria-hidden="true"
          class="text-white"
          style="position: absolute; top: 0px; right: 5px"
          @click="errormsgsts ^= true"
          >&times;</span
        >
      </div>
    </div>

    <div class="pt-3">
      <div class="form-control rounded p-0">
        <div class="position-relative has-icon-right">
          <input
            class="form-control form-control-lg text-left rounded-0"
            v-model="email"
            type="email"
            placeholder="Email"
            required
          />
          <div class="form-control-position">
            <i class="fas fa-envelope-open text-dark"></i>
          </div>
        </div>
        <div class="position-relative has-icon-right">
          <input
            class="form-control form-control-lg text-left rounded-0"
            v-model="password"
            id="myInput"
            autocomplete="ppswd"
            placeholder="Password"
            :type="passwrdfttp"
          />
          <div class="form-control-position" @click="showPasswd()">
            <i class="fas fa-eye text-dark"></i>
          </div>
        </div>
      </div>

      <div class="form-group text-center">
        <button
          type="submit"
          class="button mt-5 py-0 bgD2 nBtn nBbg btn-lg btn-block btnfnt2 siz30"
          @click="logindata()"
        >
          Log In
        </button>
        <!-- bg-dark btn-lg btn-block signup-btn -->
      </div>
    </div>

    <div class="or-seperator text-center">
      <h5 class="dtlsfnt">or</h5>
    </div>
    <h4 class="text-center dtlsfnt">Log in with your social media account</h4>
    <br />

    <div class="row Gp0m0 text-center">
      <div class="col-4 px-0">
        <a href="#" class="btn-lg button3 nBtn d-block"
          ><i class="fab fa-facebook"></i
        ></a>
      </div>
      <div class="col-4 px-0">
        <a href="#" class="btn-lg button6 nBtn d-block"
          ><i class="fab fa-twitter"></i
        ></a>
      </div>
      <div class="col-4 px-0">
        <a href="#" class="btn-lg button7 nBtn d-block"
          ><i class="fab fa-google"></i
        ></a>
      </div>
    </div>
    <br />
    <div class="text-center text-white dtlsfnt">
      <h3>
        <router-link class="text-info siz20" :to="{ name: 'forget' }"
          >Forget Password?
        </router-link>
        |
        <router-link class="text-info siz20" :to="{ name: 'signup' }"
          >Sign Up Here</router-link
        >
      </h3>
    </div>
  </div>
</template>

<script>
//import jQuery from '../assets/js/lib/jquery-min.js'
export default {
  data() {
    return {
      errormsgsts: false,
      errormsg: "",
      passwrdfttp: "password",
      email: "",
      password: "",
    };
  },
  mounted: function () {
    window.localStorage.clear();
  },
  methods: {
    showPasswd: function () {
      this.passwrdfttp = this.passwrdfttp === "password" ? "text" : "password";
    },
    logindata: function () {
      this.$mgo.gp(
        "/auth/login",
        { email: this.email, password: this.password },
        (response) => {
          switch (response.status_code) {
            case "errormsg":
              this.errormsgsts = true;
              this.errormsg = response.msg;
              break;
            case 200:
              if (response.token) {
                // alert('I m fine');
                this.usrtkn = window.localStorage.setItem(
                  "Usrtkn",
                  response.token
                );
                /* window.localStorage.setItem("UsrAuth", 'Bearer '+this.usrtkn); */

                this.axios.defaults.headers.Authorization =
                  "Bearer " + window.localStorage.getItem("Usrtkn");
                this.$router.push("/game/home/gtns");
              } else {
                this.errormsgsts = true;
                this.errormsg = "There is some Other issues";
              }
              break;
          }
          console.log(response);
          console.log(window.localStorage.getItem("UsrAuth"));
        }
      );
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin-bottom: 0px !important;
  /*   margin-bottom: auto; */
}
</style>