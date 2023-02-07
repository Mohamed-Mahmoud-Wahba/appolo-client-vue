<template>
  <div>
    <div class="container mt-4">
      <form class="col-lg-6 offset-lg-3">
        <div class="row text-center">
          <h4>Create A Gadget</h4>
        </div>
        <input type="text" class="form-control mt-2" placeholder="Enter Name" v-model="gadget.name" />
        <input type="number" class="form-control mt-2" placeholder="Enter id" v-model="gadget.id" />
        <input type="text" class="form-control mt-2" placeholder="Enter title" v-model="gadget.title" />
        <button
          class="btn btn-outline-primary offset-5 mt-2 justify-content-center"
          type="button"
        >Craete</button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
export default {
 name: 'CreateForm',
 data(){
   return{
    gadget:{
        id: "",
        title: "",
        is_public:"",
        user_id:"",

     }
   }
 },
 methods: {
    addGadgets(){
        this.$apollo.mutate({
            mutation: gql`
            mutation insert_todos_one($title: String){
                insert_todos_one(object: {title: $title}) {
                    id
                    title
                    is_public
                    user_id
            }
         }
            `,
          variables: {
            title: 'ddddddddddddddd'
          }  
        });
    }
 }
}
</script>

<style>

</style>