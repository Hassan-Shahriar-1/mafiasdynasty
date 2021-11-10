<template>
    <div class="container Gp0m0">
        <div class="StryCntnr">
            <h4 class="blkgry text-center titlefnt p-2">Edit Profile</h4>
            <!--header content start-->
            <!-- body Content Start -->
            <div class="signup-form text-dark rounded tmibg m-0">
                <!-- <h2 class="text-center text-white ttlfnt">Edit Your Account</h2> -->
                <br>
                <form action="#">
                    <div class="form-control  nwfrmclr p-0">
                        <div class="position-relative has-icon-right bg-transparent">
                            <input type="text" class="form-control nwfrmclr form-control-lg text-left" name="username" placeholder="Update Username">
                            <div class="form-control-position">
                                <i class="text-dark  fas fa-user"></i>
                            </div>
                        </div>
                        <div class="position-relative  text-dark bg-transparent">
                            <input type="date" class="form-control  nwfrmclr text-dark form-control-lg text-left" name="age" placeholder="Update Age in year">  
                        </div>
                        <div class="position-relative has-icon-right nwfrmclr  form-control form-control-lg bg-transparent   text-left">
                            <h6 class="lblblk subtitlefnt">Please select your gender:</h6>
                            <input type="radio" class="text-dark" id="male" name="gender" value="male">
                            <label for="male" class="lblblk dtlsfnt pl-1">Male</label>
                            <input type="radio" class="text-dark" id="female" name="gender" value="female">
                            <label for="female" class="lblblk dtlsfnt pl-1">Female</label><br>
                            <div class="form-control-position">
                                <i class=" text-dark fas fa-user"></i>
                            </div>
                        </div>
                    </div>
                    <div class="form-group text-center mt-5">
                        <button type="submit" class="bgD2 nBtn nBbg btn-lg btn-block custom6">Update profile</button>
                    </div>
                </form>
            </div>
      <!-- Body Content End -->
        </div>
    </div>
</template>

<script>
export default{

}
</script>