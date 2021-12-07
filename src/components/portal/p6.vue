<template>

    <div>
        <div class="Gdftrt9bg  py-1 px-2">
            <h4 class="titlefnt">Call of Habib p6</h4>
            <p class="dtlsfnt siz15">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus atque officiis fuga veniam 
                omnis modi porro illum voluptate? Eius inventore laboriosam ab doloremque dicta repellat? Magnam a ex autem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus atque officiis fuga veniam 
                omnis modi porro illum voluptate? Eius inventore laboriosam ab doloremque dicta repellat? Magnam a ex autem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus atque officiis fuga veniam 
                omnis modi porro illum voluptate? Eius inventore laboriosam ab doloremque dicta repellat? Magnam a ex autem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus atque officiis fuga veniam 
                omnis modi porro illum voluptate? Eius inventore laboriosam ab doloremque dicta repellat? Magnam a ex autem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus atque officiis fuga veniam 
                omnis modi porro illum voluptate? Eius inventore laboriosam ab doloremque dicta repellat? Magnam a ex autem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus atque officiis fuga veniam 
                omnis modi porro illum voluptate? Eius inventore laboriosam ab doloremque dicta repellat? Magnam a ex autem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus atque officiis fuga veniam 
                omnis modi porro illum voluptate? Eius inventore laboriosam ab doloremque dicta repellat? Magnam a ex autem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus atque officiis fuga veniam 
                omnis modi porro illum voluptate? Eius inventore laboriosam ab doloremque dicta repellat? Magnam a ex autem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus atque officiis fuga veniam 
                omnis modi porro illum voluptate? Eius inventore laboriosam ab doloremque dicta repellat? Magnam a ex autem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus atque officiis fuga veniam 
                omnis modi porro illum voluptate? Eius inventore laboriosam ab doloremque dicta repellat? Magnam a ex autem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus atque officiis fuga veniam 
                omnis modi porro illum voluptate? Eius inventore laboriosam ab doloremque dicta repellat? Magnam a ex autem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus atque officiis fuga veniam 
                omnis modi porro illum voluptate? Eius inventore laboriosam ab doloremque dicta repellat? Magnam a ex autem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus atque officiis fuga veniam 
                omnis modi porro illum voluptate? Eius inventore laboriosam ab doloremque dicta repellat? Magnam a ex autem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus atque officiis fuga veniam 
                omnis modi porro illum voluptate? Eius inventore laboriosam ab doloremque dicta repellat? Magnam a ex autem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus atque officiis fuga veniam 
                omnis modi porro illum voluptate? Eius inventore laboriosam ab doloremque dicta repellat? Magnam a ex autem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus atque officiis fuga veniam 
                omnis modi porro illum voluptate? Eius inventore laboriosam ab doloremque dicta repellat? Magnam a ex autem.
            </p>
        </div>


        <div class="Gdftrt9bg">
            <div class="p-2" >					
                <div class="row m-0 p-2" v-for="(itm,i) in itmlst" :key="i">
                    <div class="col-3 Gp0m0">
                            <img class="card-img-top nC-pd6p " :src="require('/src/assets/img/item/'+itm.simg)">
                    </div>
                    <div class="col-9">
                        <h6 >{{itm.nm}} <span  class="pull-right">0/2240</span></h6>
                        <div class="clearfix"></div>
                        <div class="progress n_bar-a" style="height:10px;">
                            <div class="progress-bar clRBred bgD0" id="itmBr" style="width:10%;"></div>
                        </div>
                    </div>
                </div>
            <div class="text-center"> <button class="btn nBtn nBbg button4 btn-block"> <h4>Locked <i class="fas fa-lock" style="opacity:0.7;"></i></h4></button></div>
            </div>
        </div>
    </div>                   
</template>

<script>
export default {
    data(){
        return{
itmlst:[
    {
        nm:"Path Tracker",
       
        simg:"1.gif"
    },
     {
        nm:"Path Tracker",
       
        simg:"1.gif"
    },
     {
        nm:"Path Tracker",
       
        simg:"1.gif"
    },
     {
        nm:"Path Tracker",
       
        simg:"1.gif"
    },
     {
        nm:"Path Tracker",
       
        simg:"1.gif"
    },
     {
        nm:"Path Tracker",
       
        simg:"1.gif"
    },
 


]


        }
    }
}
</script>