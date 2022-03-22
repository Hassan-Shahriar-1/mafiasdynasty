<template>
<div>



       
                <h2 class="text-center text-white titlefnt">Edit Your Account</h2>
                <br>
                <form action="#">
                    <div class="form-control p-0">
                        <div class="position-relative has-icon-right">
                            <input type="text" class="form-control form-control-lg rounded-0 text-left blkd50" name="username" placeholder="Update Username">
                            <div class="form-control-position">
                                <i class="fas fa-user"></i>
                            </div>
                        </div>
                             <div class="position-relative has-icon-right">
                            <input type="email" class="form-control form-control-lg rounded-0 text-left blkd50" name="Email" placeholder="Update Email">
                            <div class="form-control-position">
                               <i class="far fa-envelope"></i>
                            </div>
                        </div>
            
                        <div class="position-relative has-icon-right text-dark">
                            <input type="date" class="form-control form-control-lg rounded-0 text-left blkd50 text-white" name="age" placeholder="Update Age in year">
                            <div class="form-control-position">
                            </div>
                        </div>
                    
                        <div class="position-relative has-icon-right form-control form-control-lg rounded-0 text-left  blkd50">
                            <h6 class="lblblk dtlsfnt ">Please select your gender:</h6>
                            <input type="radio" style="height:20px;width:20px;" id="male" name="gender" value="male">
                            <label for="male" class="lblblk">&nbsp;Male</label> &nbsp;&nbsp;
                            <input type="radio" style="height:20px;width:20px;" id="female" name="gender" value="female">
                            <label for="female" class="lblblk">&nbsp;Female</label><br>
                            <div class="form-control-position">
                                <i class=" fas fa-user"></i>
                            </div>
                        </div>
                    </div>

                    <div class="form-group text-center mt-3 ">
                        <button type="submit" class="bgD2 m-0 nBtn nBbg btn-lg btn-block">Update profile</button>
                    </div>
                </form>
  </div>
</template>

<style>
.blkd50::placeholder {
  color: rgb(255, 255, 255);
  opacity: 1;
}

</style>


<script>
export default{
data(){
  

}
}
</script>