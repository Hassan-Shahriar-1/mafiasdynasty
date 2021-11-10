<template>
  <div class="ptnbg">
    <div class="row no-gutters tmibg6">
      <div class="col-12">
        <p class="py-1 text-center">
          Lorem ipsum dolor sit amet Ad libero deleniti vitae dolore.
        </p>
      </div>
    </div>

    <div class="row no-gutters">

      <div class="col-12 blk">
        <div class="row no-gutters">
          <div class="col-4 Gp0m0">
            <div class="btn nBtn btn-lg btn-block mlr1 siz13 button4 word-warp">Attack</div>
          </div>
          <div class="col-4 Gp0m0">
            <div class="btn nBtn btn-lg btn-block mlr1 siz13 button5 word-warp">Power Attack</div>
          </div>
          <div class="col-4 Gp0m0">
            <div class="btn nBtn btn-lg btn-block mlr1 siz13 blkppl word-warp">Ask For help</div>
          </div>
        </div>

        <div class="row no-gutters my-1 blkbggreen">
          <p class="my-1">Lorem, ipsum dolor sit amet:885,000/885,000</p>
        </div>

        <div class="row no-gutters">
          <img class="card-img" style="height: 300px" src="../../assets/img/agent/screen-1.jpg" alt=""/>

          <div class="col-12">
            <h5 class="text-primary"> <span><i class="fas fa-comments text-success"></i></span> Share boss in jobchat</h5>
          </div>
          <div class="col-3">
            <img class="card-img p-3" src="../../assets/img/logo.png" alt="" />
          </div>
          <div class="col-9">
            <h5 class="pt-5">
              Publish to<strong class="text-warning">[KANO]</strong> message
            </h5>
          </div>
          <h3></h3>
        </div>


        <div class="row no-gutters">
            <div class="card col-6">
                <div class="card-header blkppl subbtitlefnt"><h5>Unlocked Power Attack</h5></div>
                <div class="card-body">
                    <div class="row no-gutters">
                        <div class="col-4"> <img class="card-img" src="../../assets/img/agent/character1.png" alt=""></div>
                        <div class="col-8"><h6>Hooligan Melee</h6><br><h6 class="text-warning"><span><i class="fas fa-frown text-danger "></i></span>+80</h6><h6 class="text-warning"><span><i class="fas fa-frown text-danger"></i></span>+86</h6></div>
                    </div>
                </div>
            </div>

              <div class="card col-6">
                <div class="card-header tmibg3 subbtitlefnt"><h5>Locked Power Attacks</h5></div>
                <div class="card-body">
                    <div class="row no-gutters">
                    <div class="col-3"></div>
                    <div class="col-3"><img class="card-img" src="../../assets/img/agent/character1.png" alt=""></div>
                    <div class="col-3"><img class="card-img" src="../../assets/img/agent/character1.png" alt=""></div>
                    <div class="col-3"></div>
                    </div>
                    <div class="col-12 Gp0m0"><p>Lorem ipsum dolor sit amet,quisquam quam rem distinctio cumque totam dolorem culpa,commodi aliquid!</p></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    transformSlotProps(props) {
      const formattedProps = {};

      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });

      return formattedProps;
    },
  },
};
</script>
