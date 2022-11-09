<template>
  <div class="container Gp0m0 hbg">
    <div class="StryCntnr">
      <div class="signup-form bgfrm text-dark rounded bmb">
        <div class="lgnFromIcn">
          <div class="row justify-content-sm-center">
            <div class="col htwit">
              <img src="../../assets/img/logo.png" class="img-thumbnail" />
            </div>
          </div>
        </div>
        <h2 class="text-center text-white titlefnt">Edit Your Account</h2>
        <br />
        <form action="#">
          <div class="form-control p-0">
            <div class="position-relative has-icon-right">
              <input
                type="text"
                class="form-control form-control-lg text-left"
                name="username"
                placeholder="Update Username"
              />
              <div class="form-control-position">
                <i class="fas fa-user"></i>
              </div>
            </div>
            <div class="position-relative has-icon-right">
              <input
                type="email"
                class="form-control form-control-lg text-left"
                name="Email"
                placeholder="Update Email"
              />
              <div class="form-control-position">
                <i class="far fa-envelope"></i>
              </div>
            </div>

            <div class="position-relative has-icon-right text-dark">
              <input
                type="date"
                class="form-control form-control-lg text-left"
                name="age"
                placeholder="Update Age in year"
              />
              <div class="form-control-position"></div>
            </div>

            <div
              class="
                position-relative
                has-icon-right
                form-control form-control-lg
                text-left
              "
            >
              <h6 class="lblblk dtlsfnt">Please select your gender:</h6>
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male" class="lblblk">Male</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label for="female" class="lblblk">Female</label><br />
              <div class="form-control-position">
                <i class="fas fa-user"></i>
              </div>
            </div>
          </div>

          <div class="form-group text-center mt-5">
            <button type="submit" class="bgD2 nBtn nBbg btn-lg btn-block">
              Update profile
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>