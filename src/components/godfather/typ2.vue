<template>
    <div class="">
        <div class="row py-2 text-center Gp0m0"><h4 class="hr-sect jaldi">Spinner</h4></div>
            <div class="card p-1 Gp0m0">
                <div class="card-header blkgry text-center"><h4 class="titlefnt">Sandra Corleone</h4></div>
                   <h6 class=" dtlsfnt p-2 blk50 bdr1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequatur ipsa nesciunt reiciendis facilis ut adipisci totam,
                         doloribus qui ex quam debitis voluptatem eveniet pariatur delectus quasi alias odit hic!
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur optio reiciendis, quia perferendis iste suscipit soluta 
                         sequi, voluptate accusamus recusandae consequatur hic rem velit accusantium tempore, exercitationem necessitatibus quam laborum!
                    </h6>
                <div class="card-body">
                    <div class="hr-sect">Spin of Fortune</div>
                    <div class="row Gp0m0">
                        <!-- <div class="col-1"></div> -->
                        <div class="col-10 p-0" style="margin:0 auto;"> 
                                <div  class="rotation_ainm m-2 p-0" id="spinanimation">
                                    <img class="card-img" src="../../assets/img/elders/wheel.png" alt="">
                                <div class="card-image-overlay">
                                <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <h4 class="card-title subtitlefnt siz20"> </h4>
                                    <h6 class="card-subtitle mb-2 siz15"></h6>
                                </div>
                            </div>
                                </div>
                                
                        </div>
                        <!-- <div class="col-1"></div> -->


                        <div class="col-12">
                            <div class="nC-pd4p">
                                <h6><em>"I am happy to see your progress. Let's try your luck. May Lord Dracula bless you."</em></h6>
                                <button type="button" class=" mt-2 nBtn nBbg  py-2 button4  btn-block  w-100 float-right" @click= "md()"><h5 class="">
                                    <strong>Spin for 19,470 Blood</strong></h5>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <modal name='Gspnso' :delay="10" :width='300'    class="mblr  bdr p-1 rounded">
            <div class="tmibg">
            <div class="card border-0 tmibg" style="height:300px">
                <div class="card-header blkgry p-1" >
                    <h4 class=" rounded-0 text-center py-1 w-100 " style="position: sticky;">Item Found <span class="float-right" style="margin-right: 2%;" @click="hide()">
                    <div class="crossbtn"><i class="fas fa-times "></i></div></span></h4>
                </div>
                <div class="card-body Gp0m0 tmibg">
                    <div class="row Gp0m0 mt-3">
                        <div class="col-6"><img class="card-img" src="../../assets/img/item/1.gif" alt=""></div>
                        <div class="col-6 Gp0m0"><h3 class="subtitlefnt">You found item name here.</h3></div>
                    </div>
                </div>
                </div>
            </div>
        </modal> 

              
    </div>
</template>

<script>




export default {
    data(){
        return{

            layout:'anm'
        }
    },
   
    
    methods:{
        show(){
            
         setTimeout(() => {
        this.$modal.show('Gspnso')
      }, 2000);
            
        },
        hide(){
            this.$modal.hide('Gspnso')
        },



        md(){
           
            var el = window.jq('#spinanimation');
            if(el.hasClass('rotation_ainm')){
                el.addClass('rotation_ainm2');
                el.removeClass('rotation_ainm');
                    setTimeout(() => {
                    this.$modal.show('Gspnso')
                }, 2000);
            }else{
                //el.addClass('rotation_ainm');
                el.removeClass('rotation_ainm2');
                 el.addClass('rotation_ainm');
            }   
            
           //window.jq('#spinanimation').removeClass('rotation_ainm')
       
             
        },
        /* before(){
            event.target.classList.add('rotation_ainm2');
              event.target.classList.remove('rotation_ainm');
        },
        after(){
            event.target.classList.add('rotation_ainm');
              event.target.classList.remove('rotation_ainm2');

        }, */
         myFilter: function() {
      this.isActive = !this.isActive;
      // some code to filter users
    }
    }
 
}
</script>