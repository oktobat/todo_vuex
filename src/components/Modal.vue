<template>
  <div class="modal-mask">
    <div class="modal-container">
        <h2>경고</h2>
        <p>할일을 입력하세요.</p>
        <button @click="closeBox"><i class="fa-solid fa-circle-xmark"></i></button>
    </div>
  </div>
</template>

<script>
export default {
    name:"Modal",
    methods : {
        closeBox(){
            // this.$emit("showModal")
            this.$store.commit("show__Modal")
        }
    }
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  right:0;
  bottom:0;
  background-color: rgba(0, 0, 0, 0.5);
  display:flex; justify-content:center; align-items:center;
  .modal-container {
    width: 300px;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    position:relative;
    button { 
        font-size:30px; 
        position:absolute; top:-15px; right:-15px; 
    }
    }
}
</style>