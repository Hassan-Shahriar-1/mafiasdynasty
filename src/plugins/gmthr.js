export default {
  lgnchk: (rt) => {
    // login Check // this.gm.lgnchk(this);
    rt.sktd.tmr = "";
    rt.sktd.sts = false;
    let jttkn = window.localStorage.getItem("Usrtkn");
    rt.socket.on("connect", function() {
      rt.sktd.sts = true;
      console.log("Socket Connected");
      clearInterval(rt.sktd.tmr);
      console.log("My connection is not Established yet" + jttkn);
      rt.socket.emit("usrinfo", jttkn);
      rt.socket.on("scrCstbl", (sckt) => {
        console.log("sckt", sckt);
        if (sckt[0] == jttkn) {
          console.log("My connection Established I can go any where");
          rt.socket.on("ntmsg", (data) => {
            console.log(data);
          });
        }
      });
    });
    rt.socket.on("error", function() {
      console.log("Socket error");
      rt.socket.connect();
    });
    rt.socket.on("disconnect", function() {
      rt.sktd.sts = false;
      console.log("Socket disconnect");
      rt.sktd.tmr = setInterval(() => {
        rt.socket.connect();
        console.log("Trying to Connect");
      }, 1000);
    });

    if (
      rt.axios.defaults.headers.Authorization == null ||
      rt.axios.defaults.headers.Authorization == "Bearer null"
    ) {
      rt.$router.push("/login");
    }
  },
};
