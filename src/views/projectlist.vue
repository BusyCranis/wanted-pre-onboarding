<template >
  <div>
    프로젝트 이름
    <input v-model="email" />

    프로젝트 종류
    <input v-model="password" />

    <v-btn @click="onSubmit"> 프로젝트 추가 </v-btn>

    <v-btn @click="whileread"> 프로젝트 목록 보기 </v-btn>

    <div v-for="item in userlist" :key="item._id">
      <div @click="selectinfo(item._id)">
        {{ item.email }}
        {{ item.password }}
      </div>
    </div>

    <div v-for="item in $store.state.project0" :key="item._id">
      <div>
        {{ item.email }}
        {{ item.password }}
      </div>
    </div>




    <div @click="move3">프로젝트 상세 보러 가기</div>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      email: null,
      password: null,

      userlist: [],
    };
  },

  methods: {
    ...mapActions(["login"]),
    ...mapMutations(["loginsuccess"]),
    ...mapMutations(["addproject"]),
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

    whileread() {
      axios
        .get("http://localhost:5200/member/accounts")
        .then((res) => {
          this.userlist = res.data.posts;
          console.log(res.data);
        })
        .catch((e) => {
          console.error(e.message);
        });
    },

    selectinfo(_id) {
      let myid = _id;
      console.log(myid);

      axios
        .post("http://localhost:5200/project/select", {
          yourid: myid,
        })
        .then((res) => {
          console.log(res.data);

          this.addproject(res.data.posts);
        });
    },

    move3() {
      this.$router.push({ name: "projectdetail" });
    },
  },
  computed: {
    ...mapState(["islogin"]),

    ...mapState(["project0"]),

    ...mapState(["tradeditem"]),
    ...mapState(["boughtinfo"]),
    ...mapState(["soldinfo"]),
    ...mapState(["vrcp"]),
  },
};
</script>
<style >
</style>