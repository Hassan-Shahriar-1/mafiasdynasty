


        <template>
    <div>
        <div class="row py-2 text-center Gp0m0">

            <button class="float-left p-1 nBtn tmibg float-left " @click="$router.go(-1)"><i class="fas fa-arrow-left"></i>Back</button>
            <h4 class='hr-sect jaldi'>Topic7</h4>
        </div>

        <div class="row Gp0m0 mt-1 p-1">
         

                 <ul class="list-group w-100" >
                <li class="list-group-item blk50 p-1 my-1 "> 
                    <div class="row Gp0m0  rounded blkd75 my-1 p-3" v-for="(tlst,i) in tl" :key="i">
                        <div class="col-10"> <h5 class=" subtitlefnt">{{tlst.nm}} </h5> </div>
                        <div class="col-2 "> <div class=" rounded" > <i class="fas fa-arrow-circle-right siz20 text-secondary"></i></div></div>
                        
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
            tl:[
                {
                nm:"Title Here"
                },
                {
                nm:"Title Here"
                },
                {
                nm:"Title Here"
                },
                {
                nm:"Title Here"
                },
                {
                nm:"Title Here"
                },
                {
                nm:"Title Here"
                },
                {
                nm:"Title Here"
                },
                {
                nm:"Title Here"
                },
                {
                nm:"Title Here"
                },
                {
                nm:"Title Here"
                },
                {
                nm:"Title Here"
                },
                {
                nm:"Title Here"
                },
            ]
        }
    }
}
</script>
