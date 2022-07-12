<template>
  <div>
    <!-- <div v-for="item in $store.state.project0" :key="item._id">
      <div>
        <p>프로젝트 이름: {{ item.email }}</p>
        <p>프로젝트 종류: {{ item.password }}</p>
        <v-btn @click="updateinfo(item._id)">멤버 추가</v-btn>
        <v-btn @click="addtask(item._id)">task 추가</v-btn>
      </div>
    </div> -->

    <p>프로젝트 이름: {{ $store.state.project0.email }}</p>
    <p>프로젝트 종류: {{ $store.state.project0.password }}</p>

    <v-btn @click="updateinfo">멤버 추가</v-btn>
    <v-btn @click="addtask">task 추가</v-btn>

    <p>멤버 이름 <input v-model="plan0" /></p>

    <p>task 이름 <input v-model="task0" /></p>

    이 프로젝트의 전체 멤버 목록
    <div v-for="item in $store.state.project0.address" :key="item.id">
      {{ item.firadd }}
    </div>

    <br />

    이 프로젝트의 task 목록
    <div v-for="item in $store.state.project0.task" :key="item.taskid">
      <div>
        {{ item.taskname }}
        {{ item.member }}
        <v-btn @click="taskmember(item.taskid)"> 참여하기 </v-btn>
        <v-btn> 상세 멤버 보기 </v-btn>
      </div>
    </div>

    <p> 참여할 사람 이름 <input v-model="taskone" /></p>
    <p> 참여할 사람의 가격 <input v-model="price" /></p>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      userlist: [],
      plan0: null,
      task0: null,
      taskone: null,
      price: null
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

    updateinfo() {
      let myid = this.$store.state.project0._id;
      console.log(myid);

      axios
        .post("http://localhost:5200/update0/push", {
          yourid: myid,
          member: this.plan0,
        })
        .then((res) => {
          console.log(res.data);
        });
    },

    addtask() {
      let myid = this.$store.state.project0._id;
      console.log(myid);

      axios
        .post("http://localhost:5200/update1/task", {
          yourid: myid,
          task: this.task0,
        })
        .then((res) => {
          console.log(res.data);
        });
    },

    taskmember(taskid) {
      let mytaskid = taskid;

      let myrootid = this.$store.state.project0._id;

      console.log(mytaskid);

      console.log(myrootid);

      axios
        .post("http://localhost:5200/push/task/member", {
          yourrootid: myrootid,
          yourtaskid: mytaskid,
          member: this.taskone,
          price: this.price
        })
        .then((res) => {
          console.log(res.data);
        });
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