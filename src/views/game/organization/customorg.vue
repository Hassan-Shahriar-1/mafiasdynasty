<template>
  <div>
    <h1>asjflasf</h1>

    <div class="container">
      <div class="card rounded-1 clr711">
        <div class="card-header blkrds p-0">
          <h4 class="rounded-0 text-center titlefnt w-100" style="position: sticky">
              Request
            <span class="float-right" style="margin-right: 2%" @click="sho()" ><i class="fas fa-info-circle siz20 text-secondary" ></i>
            </span>
          </h4>
        </div>
        <div class="card-body Gp0m0 pb-2">
          <div class="row Gp0m0">
            <div class="col-2 p-1">
              <img src="../../../assets/img/item/1.gif" class="card-img" alt="" />
            </div>
            <div class="col-10 p-1">
              <div class="row Gp0m0">
                <div class="col-12 Gp0m0">
                    <div class="rounded">
                  <h6 class="dtlsfnt">details about my name and details about it</h6>
                </div>
                </div>
              </div>
              <div class="row no-gutters pt-1">
                <div class="col-6 p-1">
                  <div class="btn nBtn btn-block siz20 p-1 crvstlbtnl  button5">Accept</div>
                </div>
                <div class="col-6 p-1">
                  <div class="btn nBtn btn-block siz20 p-1 mlr1 crvstlbtnr  button4" >Reject</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<br> <br> <br>

        <div class="container">
      <div class="card rounded-1 clr711">
        <div class="card-header blkrds p-0">
          <div class="rounded-0 text-center py-1 w-100" style="position: sticky">
            <h5 class="titlefnt">Habibur Rahman </h5>
            <h6 class="dtlsfnt">Request for Items</h6>
          </div>
        </div>
        <div class="card-body Gp0m0">
          <div class="row Gp0m0">
            <div class="col-2 p-1">
              <img src="../../../assets/img/item/1.gif" class="card-img" alt="" />
            </div>
            <div class="col-10 p-1">
              <div class="row Gp0m0">
                <div class="col-8 Gp0m0">

                    <div class="rounded blk bdr mlr2 p-1">
                  <h6 class="text-center text-white ">Donate 6/5454</h6>
                </div>
                </div>
                <div class="col-4  p-0 btn nBtn btn-block button4 siz20" @click="toggle = !toggle">Donate</div>
              </div>

              <h6 class="text-center">You have:56 items</h6>
             <div class="progress n_bar-a bg-secondary" style="height:10px;">
                    <div class="progress-bar  bg-danger" id="itmBr" style="width: 50%;"> 1/4</div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>



<div>
  <b-button v-b-modal.modal-center>Launch centered modal</b-button>

  <b-modal id="modal-center" centered title="BootstrapVue">
    
    <p class="my-4">Vertically centered modal!</p>
  </b-modal>
</div>


<div>
  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button>

  <b-modal id="bv-modal-example">
    <template modal-title >

      <div class="text-danger">
 Using  Methods
      </div>
     
    </template>
     <template modal-body class="bg-success">
      Using ahsfhasdhufhasdufha Methods
    </template>
     <template modal-footer class="bg-warning">
      Using <code>$bvModal</code> Methods
    </template>
    <div class="d-block text-center">
      <h3>Hello From This Modal!</h3>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
  </b-modal>
</div>



<!-- final modal -->


<div>
    <b-button @click="show=true" variant="primary">Show Modal</b-button>

    <b-modal
      v-model="show"
      title="Mafia's Rivel"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
      :hide-footer="true"
      
    >
      <b-container fluid>
        <b-row class="mb-1 text-center">
          <b-col cols="3"></b-col>
          <b-col>Background</b-col>
          <b-col>Text</b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col cols="3">Header</b-col>
          <b-col>
            <b-form-select
              v-model="headerBgVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="headerTextVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col cols="3">Body</b-col>
          <b-col>
            <b-form-select
              v-model="bodyBgVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="bodyTextVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">Footer</b-col>
          <b-col>
            <b-form-select
              v-model="footerBgVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="footerTextVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
        </b-row>
      </b-container>

      <template #modal-footer>
        <div class="w-100">
          <p class="float-left">Modal Footer Content</p>
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="show=false"
          >
            Close
          </b-button>
        </div>
      </template>

    </b-modal>
  </div>

<template>
  <div>
    <b-button @click="toggle = !toggle">Open Modal</b-button>

    <b-modal v-model="toggle">Hello From Modal!</b-modal>
  </div>
</template>

<notifications  position="top center" color="red">
   <template slot="body" slot-scope="props">
    <div class="blkd50 p-1 rounded my-1" style="height:100px;">
        <a class="title">
          {{props.item.title}}
        </a>
        <a class="close" @click="props.close">
          <i class="fas fa-times text-danger siz20"></i>
        </a>
        <div v-html="props.item.text">
        </div>
    </div>
  </template>
</notifications>
  </div>
</template>

<script>
export default {
    data() {

        return{
            toggle:false,
            show: false,
        variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
        headerBgVariant: 'success',
        headerTextVariant: 'light',
        bodyBgVariant: 'light',
        bodyTextVariant: 'dark',
        footerBgVariant: 'success',
        footerTextVariant: 'danger'

        }
    },
    methods:{
        sho(){
            console.log('callingshow');
                this.$notify({
                title: 'Important message',
                text: 'Hello user! This is a notification!',
                type: 'danger',
                close:''
                });
        },
    }
}
</script>