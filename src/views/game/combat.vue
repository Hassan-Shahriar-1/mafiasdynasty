<template>
    <div>
        <div class="row py-2 text-center Gp0m0">
        <h4 class='hr-sect titlefnt'>Combat</h4>
        </div>


        <div class="row Gp0m0 ">
            <div class="col-4 ">
            <img class="card-img" src="../../assets/img/custom profile/01.jpg" alt="">
            </div>
            <div class="col-8 Gp0m0">
                <div class="row Gp0m0 py-2 my-1 blkgry">
                    <div class="col-3 "><img  class="card-img" src="../../assets/img/item/1.gif"  alt=""></div>
                    <div class="col-9 Gp0m0"> 
                        <h4 class="subtitlefnt">Fightlist ({{flvl}})</h4>
                        <h5 class="subtitlefnt">{{ftlvl}}</h5>
                    </div>
                    <div class="col-12">
                        <div class="progress n_bar-a w-100" style="height:8px;">
                                <div class="progress-bar clRBrd bgD0" id="itmBr" :style="{width:th.fl+'%'}"></div>
                            </div>
                    </div>
                </div>

                <div class="row Gp0m0 py-2 my-1 blkgry">
                    <div class="col-3 "><img  class="card-img" src="../../assets/img/item/1.gif"  alt=""></div>
                    <div class="col-9 Gp0m0"> 
                        <h4 class="subtitlefnt">Arena List ({{alvl}})</h4>
                        <h5 class="subtitlefnt">{{atlvl}}</h5>
                    </div>
                    <div class="col-12">
                        <div class="progress n_bar-a w-100" style="height:8px;">
                                <div class="progress-bar clRBrd bgD0" id="itmBr" :style="{width:th.al+'%'}"></div>
                            </div>
                    </div>
                </div>


                    <div class="row Gp0m0 py-2 my-1 blkgry">
                    <h4 class="subtitlefnt">Hitlist ({{hlvl}})</h4>
                </div>
            </div>
        </div>


        <div class="row Gp0m0">
            <div class="col-4 blk bdr1 py-3 "><h4 class="Subtitlefnt siz13">Bounty:{{bnty}}</h4></div>
            <div class="col-4 blk bdr1 py-3 "><h4 class="Subtitlefnt siz13">Skill Rank:{{sr}}</h4></div>
            <div class="col-4 blk bdr1 py-3 "><h4 class="Subtitlefnt siz13">Arena Skill Rank:{{asr}}</h4></div>
        </div>

        <div class="row Gp0m0">
            <div class="col-4 Gp0m0">
                    <router-link to="/game/leaderboard/friend" tag="button" class="btn nBtn Gp0m0 blkgry w-100 p-2 my-1"> <i class="fas fa-chess-king"></i><br><h4 class="siz15">Leaderboard</h4></router-link> <br>
                    <router-link to="friendsfeed" tag="button" class="btn nBtn Gp0m0 blkgry w-100 p-2 my-1"><i class="fas fa-rss-square"></i> <br> <h4 class="siz15">Friends feed</h4> </router-link><br>
                    <router-link to="safehouse" tag="button" class="btn nBtn Gp0m0 blkgry w-100 p-2 my-1"><i class="fas fa-shield-alt"></i><br><h4 class="siz15">Safe House</h4></router-link>
                    <router-link to="Threat" tag="button" class="btn nBtn Gp0m0 blkgry w-100 p-2 my-1"><i class="fas fa-hand-middle-finger"></i><br><h4 class="siz15">Threat</h4></router-link>
                    </div>
            <div class="col-8 Gp0m0 bdr1">

                <div class="row Gp0m0 blkgry p-1">
                    <div class="col-9">
                        <h4 class="subtitlefnt">Position in Leader Board <h6>from 100 Mafias</h6></h4>
                    </div>
                    <div class="col-3"><div class="nBtn nBbg blkgry mt3 p-1 "><i class="fas fa-sync-alt"></i></div></div>
                </div>

                <div class="row Gp0m0 blkgry mt-1 p-1">
                        <div class="col-4 p-1"><div class="nBtn nBbg blkgry mt3 "><img  class="card-img p-2"  src="../../assets/img/item/1.gif" alt=""><h5 class="siz8">MR Leader</h5></div></div>
                    <div class="col-8">
                        <h4 class="subtitlefnt">MR Leader <h6>No Possition</h6></h4>
                    </div>
                </div>

                <div class="row Gp0m0 blkgry mt-1 p-1">
                        <div class="col-4 p-1"><div class="nBtn nBbg blkgry mt3 "><img  class="card-img p-2"  src="../../assets/img/item/1.gif" alt=""><h5 class="siz8">Arena Leader</h5></div></div>
                    <div class="col-8">
                        <h4 class="subtitlefnt">Arena Leader <h6>No Possition</h6></h4>
                    </div>
                </div>

                <div class="row Gp0m0 blkgry mt-1 p-1">
                        <div class="col-4 p-1"><div class="nBtn nBbg blkgry mt3 "><img  class="card-img p-2"  src="../../assets/img/item/1.gif" alt=""><h5 class="siz8">Assassin Leader</h5></div></div>
                    <div class="col-8">
                        <h4 class="subtitlefnt">Assassin Leader <h6>No Possition</h6></h4>
                    </div>
                </div>

                <div class="row Gp0m0 blkgry mt-1 p-1">
                        <div class="col-4 p-1"><div class="nBtn nBbg blkgry mt3 "><img  class="card-img p-2"  src="../../assets/img/item/1.gif" alt=""><h5 class="siz8">Bounty Leader</h5></div></div>
                    <div class="col-8">
                        <h4 class="subtitlefnt">Bounty Leader <h6>No Possition</h6></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{

            th:{
                fl:25,
                al:35,
            },
            flvl:'165',
            ftlvl:'Bronze V',
            alvl:'145',
            atlvl:'bronze VI',
            hlvl:'18',
            bnty:100,
            sr:1524,
            asr:459,

        }
    }
}
</script>