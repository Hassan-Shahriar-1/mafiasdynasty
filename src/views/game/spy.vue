 <template>
      <div class="">
  <div class="container text-center trt">
                  <div class="spybg ">

                      <div class="row">

                          <div class="col-6"><h5 class="dtlsfnt">Lorem ipsum dolor sit amet consectetur,Laborum harum fuga sequi laboriosam quidem! 
                              Nulla voluptatibus voluptatum tenetur
                              quasi, maiores dicta dolorum deleniti veritatis alias magni dolore magnam voluptate quidem.</h5></div>
                          <div class="col-6"> 
                              <img src="../../assets/img/custom profile/01.jpg"  class="card-img" style="opacity:1;" alt="">
                          </div>
                      </div>
                         
                  </div>
            </div> 

                <div>
        <div class="bw100 w-100 rounded jaldi blkgry" role="group" aria-label="...">
            <div class="btn-group  bw100 w-100  sizv13">
                <router-link to="spy/type1" tag="button" class="btn nBtn siz15 p-1 Gp0m0 blkgry">  <i class="fas fa-award"></i> <br>Type1</router-link>
                <router-link to="spy/type1" tag="button" class="btn nBtn siz15 p-1 Gp0m0 blkgry"><i class="fas fa-address-card"></i> <br> Type2</router-link>
                <router-link to="spy/type1" tag="button" class="btn nBtn siz15 p-1 Gp0m0 blkgry"><i class="fas fa-trophy"></i><br>Type3</router-link>
                <router-link to="spy/type1" tag="button" class="btn nBtn siz15 p-1 Gp0m0 blkgry"><i class="fas fa-glass-cheers"></i> <br>Type4</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>

      <div class="row no-gutters w-100">
            <ul class="list-group w-100" v-for="(masrc,i) in mafia" :key="i">
                <li class="list-group-item blk50 p-1 "> 
                    <div class="row Gp0m0  rounded blkd75 p-2">
                       
                        <div class="col-8 px-2"> <h6 class="text-info subtitlefnt siz15">{{masrc.mfattl}}</h6> <h6 class="subtitlefnt siz20">{{masrc.mfades}}</h6></div>
                        <div class="col-4 "> <div class=" button4 nBtn mt-2 border py-2 rounded"><h6 class="text-center"><i class="fas fa-plus-square"></i>&nbsp;Grab!</h6></div></div>
                    </div>
                </li>
            </ul>
        </div>
      </div>
</template> 

<script>
export default {
 data(){
        return{
                 mafia:[
                        {
                           
                           mfattl:'Habibur loga agfsch jhasfdcb aufsc jf asfcvacf asfcdga fasfcjfg dfascg',
                           
                        },
                         {
                           
                           mfattl:'Habibur loga agfsch jhasfdcb aufsc jf asfcvacf asfcdga fasfcjfg dfascg',
                           
                        },
                         {
                           
                           mfattl:'Habibur loga agfsch jhasfdcb aufsc jf asfcvacf asfcdga fasfcjfg dfascg',
                           
                        },
                         {
                           
                           mfattl:'Habibur loga agfsch jhasfdcb aufsc jf asfcvacf asfcdga fasfcjfg dfascg',
                           
                        },
                         {
                           
                           mfattl:'Habibur loga agfsch jhasfdcb aufsc jf asfcvacf asfcdga fasfcjfg dfascg',
                           
                        },
                         {
                           
                           mfattl:'Habibur loga agfsch jhasfdcb aufsc jf asfcvacf asfcdga fasfcjfg dfascg',
                           
                        }
                    ]

            }
    }
}
</script>
