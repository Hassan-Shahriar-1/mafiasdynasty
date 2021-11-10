<template>
    <div class="card-footer Gp0m0 bw100" style="width:100%; border-radious:1px solid red;">
                
        <div class="input-group Gp0m0">
            <div class="input-group-append"> 
                <div class="image-upload">
                    <div class="d-none "> <input id="file-input" type="file">
                    </div>
                    <div class="input-group-append d-flex ">
                        <span class="input-group-text attach_btn blk text-white border-0"><i class="fas fa-paperclip" onclick="document.getElementById('file-input').click();"></i></span>
                    </div>
                </div>
            </div>
            <input v-model="message"  class="form-control type_msg blk text-white border-0" placeholder="Type your message..." />
            <div class="input-group-append" @click="send()">
                <span class="input-group-text send_btn blk text-white border-0"><i class="fas fa-location-arrow"></i></span>
            </div>
        </div> 
    </div>
</template>

