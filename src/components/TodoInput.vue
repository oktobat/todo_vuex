<template>
    <div>
      <form @submit.prevent="getTodo">
        <input type="text" v-model="newText" />
        <button type="submit">
          <i class="fa-solid fa-plus"></i>
        </button>
      </form>
      <transition name="modal">
        <Modal v-if="showModal" />
      </transition>
    </div>
</template>

<script>
import Modal from "./Modal.vue"

export default {
  name: "TodoInput",
  data() {
    return {
      newText: "",
      // showModal : false
    };
  },
  computed : {
    showModal(){
      return this.$store.getters.fnGetShowModal
    }
  },
  components:{
    Modal : Modal
  },
  methods: {
    getTodo() {
      if (this.newText) {
        let value = this.newText;
        this.$store.commit("add__Todo", value)
        this.newText = "";
      } else {
        this.$store.state.showModal = true
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form { display: flex; height: 43px;
    input { flex: 1; padding-left: 1em; background: #555;
      color: #fff; }
    button { width: 56px; font-size:20px; background:#ddd }
}
.modal-enter-active, .modal-leave-active { 
  transition:all 0.5s
}
.modal-enter, .modal-leave-to { 
  opacity:0;
  transform:scale(0)
 }
</style>
