<template>
<div>
<tops></tops>
    <div class="bMbg jaldi">
        <div class="row Gp0m0">
            <img src="../assets/img/item/Gold-bar.jpg" class="card-img rounded" alt="" style="height:120px;">
        </div>
        <div class="itmsdo p-1 rounded">
<ul class="list-group   " v-for="(msnlst,i) in Msnpary" :key="i">
  <li class="list-group-item bMbg Gp0m0 px-1" >
      <div class="container Gp0m0" >
            <h3 class="Gp0m0 text-danger text-left">{{msnlst.tl}}</h3> 
           <h6 class="Go0m0 text-left">{{msnlst.stl}}</h6>
        <div class="row Gp0m0 rounded">
                <div class="col-8 Gp0m0">
                <div class="progress n_bar-a" style="height:12px;">
                    <div class="progress-bar clRBred bgD0" id="itmBr" style="width: 50%;"></div> 
                    </div>
                    <div class="row Gp0m0">
                     <div class="col-6 Gp0m0"><h6>{{msnlst.pst1}}</h6></div>
                    <div class="col-6 Gp0m0"><h6>{{msnlst.pst2}}</h6></div> 
                    </div>
                    </div>
                 <div class="col-4" style="margin-top:-6%;">
                  <div class="btn nBtn blkred">{{msnlst.msnbtn}}</div>
               </div>
        </div>
 </div>
  </li>
</ul>
</div>
    </div>
    <foots></foots>
    </div>
</template>
<script>
export default ({
    data() {
        return{
            Msnpary:[

                {
                tl:"Title is here",
                stl:"Subtitle here",
                pst1:"ajsdfjas",
                pst2:"ajsdfjas",
                msnbtn:"Button"
                },
                 {
                tl:"Title is here",
                stl:"Subtitle here",
                pst1:"ajsdfjas",
                pst2:"ajsdfjas",
                msnbtn:"Button"
                },
                 {
                tl:"Title is here",
                stl:"Subtitle here",
                pst1:"ajsdfjas",
                pst2:"ajsdfjas",
                msnbtn:"Button"
                },
                 {
                tl:"Title is here",
                stl:"Subtitle here",
                pst1:"ajsdfjas",
                pst2:"ajsdfjas",
                msnbtn:"Button"
                },
                 {
                tl:"Title is here",
                stl:"Subtitle here",
                pst1:"ajsdfjas",
                pst2:"ajsdfjas",
                msnbtn:"Button"
                },

            ]
        }
        
    },
})
</script>
