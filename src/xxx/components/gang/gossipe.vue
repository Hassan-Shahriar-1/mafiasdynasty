<template>
    <div id="Gmsg" class="JALDI">
                        <section>

                        <div class="row blkgry Gp0m0 ">

                            <div class="col-8 Gp0m0">
                          
                                <input v-model="Gmessage" @keyup.enter="insrtMsg"  class="form-control" type="text"> 

                                </div>

                                

                            <div class=" col-4 Gp0m0 btn btn-lg bMbg "><i class="fab fa-angellist text-success"></i></div>
                            
                        </div>

                        <div class="row jaldi Gp0m0" v-for="MsgsLt in MsgsLts" :key="MsgsLt.id" style="word-break:break-all;">
                            <ul class="list-group w-100 text-white ">
                                
                            <li class="list-group-item bMbg jaldi"><p>{{ MsgsLt.msg }}<span class="msg_time text-white">{{ MsgsLt.Tm }}</span> </p></li>
                           
                            </ul>
                        </div>
                        </section>
                        
                        
                        </div>
</template>

<script>
export default{
    name:'Family',
    data(){
        return {
            Gmessage:"",
            MsgsLts:[
                {
                    id:1,
                    whm:'r',
                    msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia nam provident deserunt fugit qui quidem consectetur minus suscipit nobis, debitis dignissimos tenetur atque accusamus nihil. Tempore molestiae repellendus temporibus. 2 olor sit amet ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia nam provident deserunt fugit qui quidem consectetur minus suscipit nobis, debitis dignissimos tenetur atque accusamus nihil. Tempore molestiae repellendus temporibus. 2 ol ",
                    Tm:"8:40 AM, Today"
                  
                },
              
            ]
        }
    },
    methods:{
        insrtMsg:function(){           
             this.MsgsLts.push({
                   id:this.MsgsLts.slice(-1)[0]['id']+1,
                   whm:'r',
                   msg:this.Gmessage,
                   Tm:'Exp TYime',
            }); 
            ('#Gmsg').animate({scrollTop: document.body.scrollHeight},"fast");
            this.Gmessage = "";
            
        }
    }


}
</script>