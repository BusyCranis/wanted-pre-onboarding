<template>
  <div>
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
        <v-btn @click="taskmember(item.taskid)"> 참여하기 </v-btn>
        <v-btn @click="looktask(item.taskid)">
          이 task를 맡은 멤버 조회하기
        </v-btn>
      </div>
    </div>

    <p>참여할 사람 이름 <input v-model="taskone" /></p>
    <p>참여할 사람의 급여 <input v-model="price" /></p>

    이 task를 맡은 멤버 목록
    <div v-for="item in $store.state.currenttask" :key="item.innerid">
      {{ item.joinname }}, {{ item.price }}
    </div>
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
      price: null,
    };
  },

  methods: {
    ...mapActions(["login"]),
    ...mapMutations(["loginsuccess"]),
    ...mapMutations(["addproject"]),
    ...mapMutations(["sendNFT"]),
    ...mapMutations(["sendNFTtitle"]),
    ...mapMutations(["lookcurrent"]),
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
        .get("/member/accounts")
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
        .post("/update0/push", {
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
        .post("/update1/task", {
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
        .post("/push/task/member", {
          yourrootid: myrootid,
          yourtaskid: mytaskid,
          member: this.taskone,
          price: this.price,
        })
        .then((res) => {
          console.log(res.data);
        });
    },

    looktask(taskid) {
      let taskdetail = this.$store.state.project0.task.filter(
        (item) => item.taskid === taskid
      )[0];

      //   console.log(taskdetail)

      this.lookcurrent(taskdetail);
    },
  },
  computed: {
    ...mapState(["islogin"]),

    ...mapState(["project0"]),

    ...mapState(["currenttask"]),
    ...mapState(["boughtinfo"]),
    ...mapState(["soldinfo"]),
    ...mapState(["vrcp"]),
  },
};
</script>
<style >
</style>