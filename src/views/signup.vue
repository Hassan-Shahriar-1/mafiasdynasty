<template>
  <div class="ptnbg" style="height: 100vh; position: fixedl; overflow: scroll">
    <div class="signup-form m-0">
      <div class="lgnFromIcn mt-1">
        <div class="row justify-content-sm-center">
          <div class="col-12 htwit">
            <img src="../assets/img/logo.png" class="img-thumbnail" />
          </div>
        </div>
      </div>
      <h2 class="text-center text-white titlefnt mb-1">Create an Account</h2>

      <div class="alert blk50 py-3 pr-4 Gp0m0 my-3 rounded" v-show="errorsts">
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
            @click="errorsts ^= true"
            >&times;</span
          >
        </div>
      </div>

      <!-- <div class="or-seperator text-center desfnt">
                    <h3>or</h3>
                </div> -->

      <div class="pt-2">
        <div class="form-control rounded p-0">
          <div class="position-relative has-icon-right">
            <input
              type="text"
              class="form-control form-control-lg text-left rounded-0"
              v-model="usrname"
              placeholder="Username"
              required
            />
            <div class="form-control-position">
              <i class="fas fa-user text-dark"></i>
            </div>
          </div>

          <div class="position-relative has-icon-right">
            <input
              type="email"
              class="form-control form-control-lg text-left rounded-0"
              v-model="ueemail"
              placeholder="Email Address"
              required
            />
            <div class="form-control-position">
              <i class="fas fa-envelope-open text-dark"></i>
            </div>
          </div>

          <div class="position-relative has-icon-right">
            <input
              class="form-control form-control-lg text-left rounded-0"
              id="myInput"
              v-model="pass1"
              name="password"
              :type="paswshw1 ? 'text' : 'password'"
              placeholder="Password"
              required
            />
            <div class="form-control-position">
              <i
                class="fas fa-eye text-dark"
                @click="showPasswd('paswshw1')"
              ></i>
            </div>
          </div>

          <div class="position-relative has-icon-right">
            <input
              class="form-control form-control-lg text-left rounded-0"
              id="myInput2"
              v-model="pass2"
              name="password"
              :type="paswshw2 ? 'text' : 'password'"
              placeholder="Confirm password"
              required
            />
            <div class="form-control-position">
              <i
                class="fas fa-eye text-dark"
                @click="showPasswd('paswshw2')"
              ></i>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-5">
        <button
          type="submit"
          @click="signup"
          class="bgD2 nBtn nBbg btn-lg btn-block siz25 btnfnt2"
        >
          Sign Up
        </button>
      </div>

      <div class="text-center dtlsfnt">
        <h3 class="siz20">Already have an account?</h3>
        <router-link to="/login">
          <h3 class="text-info siz20">Login here</h3></router-link
        >
      </div>

      <h4 class="text-center dtlsfnt siz20">
        Sign up with your social media account or email address
      </h4>
      <br />

      <div class="social-btn text-center">
        <div class="row Gp0m0">
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
      </div>

      <!-- <div class="row ">
                    <a href="#" class="  d-block btn nBbg nBtn button2"><i class="fab fa-facebook">Facebook</i></a>
                    <a href="#" class=" d-block btn nBbg nBtn button3"><i class="fab fa-facebook">Facebook</i></a>
                    <a href="#" class="  d-block btn nBbg nBtn button4"><i class="fab fa-facebook">Facebook</i></a>
                </div> -->
    </div>
  </div>
</template>

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

<script>
export default {
  data() {
    return {
      errorsts: false,
      errormsg: "",
      ueemail: "",
      usrname: "",
      pass1: "",
      pass2: "",

      paswshw1: false,
      paswshw2: false,
    };
  },
  watch: {},
  methods: {
    showPasswd: function (vvf) {
      if (this[vvf]) {
        this[vvf] = false;
      } else {
        this[vvf] = true;
      }
    },
    signup: function () {
      this.errormsg = "";
      this.errorsts = true;
      if (this.usrname == "") {
        this.errormsg = "Username empty ";
      }
      if (this.usrname.length > 15 || this.usrname.length < 8) {
        this.errormsg = "Username have to be between 8 to 15 ";
      }
      if (this.pass1.length > 25 || this.pass1.length < 8) {
        this.errormsg = "Password have to be between 8 to 25 ";
      }
      if ((this.pass1 == this.pass2) == "") {
        this.errormsg = "Password cannot be empty";
      }
      if (this.pass1 != this.pass2) {
        this.errormsg = "Password dose not match";
      }

      if (this.ueemail == "") {
        this.errormsg = "Email empty ";
      }

      if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          this.ueemail
        )
      ) {
        this.errormsg = "Invalid Email";
      }

      if (this.errormsg == "") {
        alert("send this info to the servber");
        this.$mgo.gp(
          "auth/signup",
          {
            name: this.usrname,
            email: this.ueemail,
            password: this.pass1,
          },
          (response) => {
            console.log("this is from response", response.msg);
            switch (response.status_code) {
              case 200:
                this.errorsts = true;
                this.errormsg = response.msg;
                break;
              case 400:
                this.errorsts = true;
                this.errormsg = response.msg;
            }
          }
        );
      } else {
        this.errorsts = true;
      }
    },
  },
  name: "signup",
};
</script>