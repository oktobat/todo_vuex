import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        id : 0,
        todos : [],
        showModal : false
    },
    mutations:{
        add__Todo(state, text){
            state.todos.push({ id:state.id, text:text, modify:false, update:true })
            state.id++
            localStorage.setItem("id", state.id)
            localStorage.setItem("todos", JSON.stringify(state.todos))
          },
          on__Remove(state, id) {
            state.todos = state.todos.filter((value)=> value.id !== id )
            localStorage.setItem("todos", JSON.stringify(state.todos))
          },
          finish__Remove(state){
            state.todos = state.todos.filter((value)=>{
              return value.modify == false
            })
            localStorage.setItem("todos", JSON.stringify(state.todos))
          },
          all__Remove(state){
            state.todos.splice(0, state.todos.length)
            localStorage.removeItem("todos")
          },
          on__Toggle(state, num){
            state.todos.map((item)=>{
              if (item.id == num) {
                item.modify = !item.modify
              }
            })
            localStorage.setItem("todos", JSON.stringify(state.todos))
          },
          on__Update(state, num){
              state.todos.map((item)=>{
                if (item.id == num) {
                  item.update = !item.update
                } else {
                  item.update = true
                }
             })
             localStorage.setItem("todos", JSON.stringify(state.todos))      
          },
          on__Input(state, idvalue){
            let { id, value } = idvalue
            state.todos.map((item)=>{
                if (item.id == id) {
                  item.text = value
                }
             })
          },
          show__Modal(state){
            state.showModal = false
          }
    },
    getters:{
        fnGetId(state){
            return state.id
        },
        fnGetTodos(state){
            return state.todos
        }, 
        fnGetShowModal(state){
            return state.showModal
        }
    }
})