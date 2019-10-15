<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
               <button class="modal-default-button" @click="$emit('close')">
                X
              </button>
             <h3> Add a new App </h3>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
            <input v-model="AppIDbyUser" class="userInput bluebox" placeholder="App ID">
            <input v-model="AppKeybyUser" class="userInput bluebox" placeholder="App Key">
            <textarea v-model="DescriptionbyUser" class="textarea userInput bluebox" rows="3" placeholder="Description"></textarea> 
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
             <button class="modal-save-button" @click="saveUserInput">
                Save
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      AppIDbyUser: '',
      AppKeybyUser: '',
      DescriptionbyUser: ''
    };
  },
  methods: {
    saveUserInput() {
      alert('coming soon');
    }
  }
}
</script>


<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #312CA3;
}

.modal-body {
  margin: 20px 0;
}

.userInput {
  padding: 0.25rem;
  margin: 0.5rem;
  width: 200px;
}
textarea {
  width: 200px;
}

.modal-default-button {
  float: right;
  color: #312CA3;
  border: 1px solid;
}

.modal-save-button {
   color: #312CA3;
   border: 1px solid;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>