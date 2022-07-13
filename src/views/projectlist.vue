<template >
  <div>
    프로젝트 이름
    <input v-model="email" />

    프로젝트 종류
    <input v-model="password" />

    <v-btn @click="onSubmit"> 프로젝트 추가 </v-btn>

    <v-btn @click="whileread"> 프로젝트 목록 보기 </v-btn>

    <div v-for="item in userlist" :key="item._id">
      <div>
        {{ item.email }},
        {{ item.password }}
        <v-btn @click="selectinfo(item._id)"> 조회하기 </v-btn>
      </div>
    </div>


    <!-- <v-btn @click="move3"> 프로젝트 조회 페이지로 이동 </v-btn> -->
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
    ...mapMutations(["reset0"]),
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
        await axios.post("/signup/account", {
          email: this.email,
          password: this.password,
          name: Date.now(),
        });
      } catch (err) {
        console.log(err);
      }
    },

    whileread() {
      axios
        .get("/member/accounts")
        .then((res) => {
          this.userlist = res.data.posts;
          console.log(res.data);
        })
        .catch((e) => {
          console.error(e.message);
        });

      this.reset0();
    },

    selectinfo(_id) {
      let myid = _id;
      console.log(myid);

      axios
        .post("/project/select", {
          yourid: myid,
        })
        .then((res) => {
          //   console.log(res.data);
          let realdata = res.data.posts[0];

          console.log(realdata);

          this.addproject(realdata);

          this.$router.push({ name: "projectdetail" });
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