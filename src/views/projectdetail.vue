<template>
  <div>
    <div v-for="item in $store.state.project0" :key="item._id">
      <div>
        {{ item.address }}
        <div @click="updateinfo(item._id)">멤버 추가</div>
        <div @click="addtask(item._id)">task 추가</div>
      </div>
    </div>

    멤버 이름
    <input v-model="plan0" />

    task 이름
    <input v-model="task0" />

    <div v-for="item in $store.state.project0[0].task" :key="item.taskid">
      <div @click="taskmember(item.taskid)">
        {{ item }}
        참여하기
      </div>
    </div>

    이름
    <input v-model="taskone" />
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

    updateinfo(_id) {
      let myid = _id;
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

    addtask(_id) {
      let myid = _id;
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

      let myrootid = this.$store.state.project0[0]._id


      console.log(mytaskid);

      console.log(myrootid)

      axios
        .post("http://localhost:5200/task/member", {
          yourrootid: myrootid,
          yourtaskid: mytaskid,
          member: this.taskone,
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