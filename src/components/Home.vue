<template>
  <div>
      <div class="container">
          <div class="row mt-1">
             <table class="table table-bordered">
                <thead>
                     <tr>
                        <th class="col-lg-3">Id</th>
                        <th class="col-lg-3">user_id</th>
                        <th class="col-lg-3">is_public</th>
                        <th class="col-lg-3">title</th>
                        
                      
                     </tr>
                </thead>
                <tbody>
                    <tr v-for="item in todos" :key="item.it">
                        <td>{{ item.id }}</td>
                        <td>{{ item.user_id }}</td>
                        <td>{{ item.is_public }}</td>
                        <td>{{ item.title }}</td>
                        
                    
                    </tr>
                </tbody>
             </table>
          </div>
      </div>
      
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
name: 'Home',
apollo:{
    todos: {
        query:gql`
        query{
          todos (limit: 13,){
          id
          is_public
          title
          user_id
         }
      }
        `,
    }
},
variable(){
    return{

    }
},
data(){
    return{
        todos: [],
    }
},

}



</script>

<style>

</style>