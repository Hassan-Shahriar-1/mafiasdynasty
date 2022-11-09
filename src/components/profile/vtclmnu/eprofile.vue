<template>
  <div>
    <div class="card tmibg p-0">
      <div class="card-header p-1">
        <h2 class="text-center tmibg2 py-2 text-white titlefnt">
          Edit Your Account
        </h2>
      </div>
      <br />
      <form action="#" class="mx-2">
        <div class="form-control p-0">
          <div class="position-relative has-icon-right">
            <input
              type="text"
              class="
                form-control
                text-light
                form-control-lg
                rounded-0
                text-left
                tmibg
              "
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
              class="
                form-control
                text-light
                form-control-lg
                rounded-0
                text-left
                tmibg
              "
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
              class="
                form-control form-control-lg
                rounded-0
                text-left
                tmibg
                text-white
              "
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
              rounded-0
              text-light text-left
              tmibg
            "
          >
            <h6 class="dtlsfnt">Please select your gender:</h6>
            <input
              type="radio"
              style="margin-top: 3%; height: 15px; width: 15px"
              id="male"
              name="gender"
              value="male"
            />
            <label for="male" class="">&nbsp;Male</label> &nbsp;&nbsp;
            <input
              type="radio"
              style="margin-top: 3%; height: 15px; width: 15px"
              id="female"
              name="gender"
              value="female"
            />
            <label for="female" class="">&nbsp;Female</label><br />
            <div class="form-control-position">
              <i class="fas fa-user"></i>
            </div>
          </div>
        </div>
        <div class="text-center mt-3 my-2 px-4">
          <button type="submit" class="tmibg m-0 nBtn nBbg btn-lg btn-block">
            Update profile
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.form-control::placeholder {
  color: rgb(255, 255, 255);
  opacity: 1;
}
</style>


<script>
export default {
  data() {},
};
</script>