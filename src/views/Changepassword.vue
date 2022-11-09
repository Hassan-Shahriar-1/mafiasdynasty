<template>
  <div class="container Gp0m0">
    <div class="StryCntnr">
      <!--header content start-->
      <tops></tops>
      <!-- Sticky top end -->
      <!-- body Content Start -->
      <div class="signup-form mt-5 text-dark rounded">
        <div class="lgnFromIcn">
          <div class="row justify-content-sm-center">
            <div class="col htwit">
              <img src="../assets/img/logo.png" class="img-thumbnail" />
            </div>
          </div>
        </div>
        <h2 class="text-center text-white ttlfnt">Update Your Password</h2>
        <br />
        <form action="#">
          <h6>{{ ermsg }}</h6>
          <div class="form-control rounded p-0">
            <div class="position-relative has-icon-right">
              <input
                class="form-control form-control-lg text-left"
                id="myInpt"
                name="password"
                :type="showInput0 ? 'text' : 'password'"
                placeholder="Old Password"
                required
              />
              <div class="form-control-position">
                <i
                  class="fas fa-eye text-dark"
                  v-bind:class="eclg"
                  @click="showPasswd('showInput0')"
                ></i>
              </div>
            </div>

            <div class="position-relative has-icon-right">
              <input
                class="form-control form-control-lg text-left"
                id="myInput"
                name="password"
                v-model="newpass"
                :type="showInput1 ? 'text' : 'password'"
                placeholder="New Password"
                required
              />
              <div class="form-control-position">
                <i
                  class=""
                  v-bind:class="[match2, eclg]"
                  @click="showPasswd('showInput1')"
                ></i>
              </div>
            </div>

            <div class="position-relative has-icon-right">
              <input
                class="form-control form-control-lg text-left"
                id="myInput2"
                name="password"
                v-model="confpass"
                :type="showInput2 ? 'text' : 'password'"
                placeholder="Confirm password"
                required
              />
              <div class="form-control-position">
                <i
                  class=""
                  v-bind:class="[match2, eclg]"
                  @click="showPasswd('showInput2')"
                ></i>
              </div>
            </div>
          </div>

          <div class="text-center mt-5">
            <button type="submit" class="bgD2 nBtn nBbg btn-lg btn-block">
              Update Password
            </button>
          </div>
        </form>
      </div>

      <!-- Body Content End -->

      <!--footer content start-->
      <foots></foots>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showInput0: false,
      showInput1: false,
      showInput2: false,
      newpass: "",
      confpass: "",
      ermsg: "",
      match2: "fas fa-eye",
      eye: '<i class="fas fa-eye"></i>',
      eclg: "",
    };
  },
  created() {},
  updated() {
    if (
      this.newpass != "" &&
      this.confpass != "" &&
      this.newpass == this.confpass
    ) {
      this.match2 = "fas fa-check text-success";
      this.eye = "";
      this.ermsg = "";
    } else {
      this.match2 = "fas fa-eye";
      this.ermsg = "password not matched";
    }
  },
  methods: {
    showPasswd: function (vvf) {
      if (this[vvf]) {
        this[vvf] = false;
        this.eclg = "fas fa-eye-";
      } else {
        this[vvf] = true;
        this.eclg = "";
      }
    },
    matchEs: function () {},
  },
};
</script>