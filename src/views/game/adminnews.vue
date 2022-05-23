<template>
    <div class="tmibg px-1" style="min-height:800px;">
        <h3  class="subtitlefnt text-center">Admin News</h3> <br>
        <div class="card px-2 ">
            <div class="form-group">
                <select name="" id="" class=" form-control text-dark form-select text-black">
                    <option value="">Select Type</option>
                    <option value=""> Announcements </option>
                    <option value=""> General Discusstion </option>
                    <option value=""> New Player Area </option>
                    <option value=""> Question & Answer </option>
                     <option value="">  Suggestions  </option>
                    <option value="">  Bugs/Issues  </option>
                    <option value="">  Supports  </option>
                    <option value=""> News </option>
                </select> <br>
                <label for="news"><h4>Title</h4></label>
                <input type="text" name="title"  placeholder="Title" class="form-control form-control-lg">  <br><br>
                <textarea name="news"  cols="30" rows="6" placeholder=" write here to post news" class="form-control form-control-lg w-100 "></textarea> <br>
               <!--  <label for=""><h4>Title2</h4></label>
                <input type="text" name="title2"  placeholder="Title2" class="form-control form-control-lg"> <br><br>
                <textarea name="text1"  cols="30" rows="6" placeholder=" write here to post news" class="form-control form-control-lg w-100 "></textarea> <br>
                <label for=""><h4>Title3</h4></label>
                <input type="text"  name="title3"  placeholder="Title3" class="form-control form-control-lg"> <br><br>
                <textarea name="text1"  cols="30" rows="6" placeholder=" write here to post news"  class="form-control form-control-lg w-100 "></textarea> <br> -->
                <div class="btn nBtn nBbg blkgry btn-lg btn-block">Post</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }   
    },
}
</script>