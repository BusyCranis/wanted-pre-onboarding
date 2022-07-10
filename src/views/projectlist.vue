<template >
  <div>

<v-input  v-model="email"   >


</v-input>

<v-input    v-model="password"    >


</v-input>







  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {

        email: null,


        password: null






    };
  },

  methods: {
    ...mapActions(["login"]),
    ...mapMutations(["loginsuccess"]),
    ...mapMutations(["addNFT2"]),
    ...mapMutations(["sendNFT"]),
    ...mapMutations(["sendNFTtitle"]),
    ...mapMutations(["sendNFTcontent"]),
    ...mapMutations(["addItems"]),
    ...mapMutations(["sendNewItem"]),
    ...mapMutations(["sendNewItemtitle"]),
    ...mapMutations(["deleteNFT1"]),
    ...mapMutations(["updateNFT1"]),
    ...mapMutations(["addshop"]),
    ...mapMutations(["deleteproduct"]),
    ...mapMutations(["addboughtinfo"]),
    ...mapMutations(["addsoldinfo"]),
    ...mapMutations(["spendmoney"]),
    ...mapMutations(["buyprocess"]),

    ...mapMutations(["submitlogout"]),

    async onSubmit() {
      try {
        await axios.post("http://localhost:5200/signup/account", {
          email: this.email,
          password: this.password,
          name: Date.now(),
          //   firaddress: this.form.firaddress,
          //   secaddress: this.form.secaddress,
          //   thraddress: this.form.thraddress,
        });
      } catch (err) {
        console.log(err);
      }

      //   this.form.email = "";
      //   this.form.password = "";
      //   this.form.name = "";
      //   this.form.passwordConfirm = "";

      //   this.$router.push({ name: "login" });
    },
  },
  computed: {
    ...mapState(["islogin"]),

    ...mapState(["newtradingNFTs"]),

    ...mapState(["tradeditem"]),
    ...mapState(["boughtinfo"]),
    ...mapState(["soldinfo"]),
    ...mapState(["vrcp"]),
  },
};
</script>
<style >
</style>