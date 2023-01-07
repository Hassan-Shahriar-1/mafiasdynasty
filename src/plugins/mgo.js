import Vue from "vue";

export default {
  gt: (lk, rpR) => {
    // get axios //   [lk= link ,rpR= respobse]
    Vue.axios.get(lk).then(function(rp) {
      rpR(rp);
    });
  },
  gp: (lk, dt, rpR) => {
    // post axios  //   [lk=limk,dt=[data],resp]
    Vue.axios.post(lk, dt).then(function(rp) {
      rpR(rp);
    });
  },
  gpp: (lk, rpR) => {
    // post axios  //   [lk=limk,dt=[data],resp]
    Vue.axios.post(lk).then(function(rp) {
      rpR(rp);
    });
  },
  scrlTbottom: function(id) {
    var div = document.getElementById(id);
    div.scrollBottom = div.scrollHeight - div.clientHeight;
  },
  temp: function(dt) {
    // this.$mgo.temp().save();
    this.save = (kpr) => {
      return window.localStorage.setItem("tmp" + dt, kpr);
    };
    this.get = () => {
      var U = window.localStorage.getItem("tmp" + dt);
      if (U == null) {
        U = false;
      }
      return U;
    };
    this.rmv = () => {
      return window.localStorage.removeItem("tmp" + dt);
    };

    return this;
  },
};
