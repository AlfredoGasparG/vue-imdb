<template>
  <div>
    <br><br>
    <h3>Selección de películas</h3>
    <form action="" @submit.prevent="fetchData">
      <div>
           <label for="titulo">Título:</label>
           <input class="form-control" type="text" id="titulo" v-model="peliABuscar"></input>
       </div>  
        <br><br>       
        <button type="submit" class="btn btn-primary">Buscar</button>
       
      </form>
        
    
    <br> <br>
   
    <table class="table table-striped">
      
      <thead>
        <tr>
          <th>Película</th>
          <th>Año</th>
          <th>Tipo</th>
          <th>
            Rating
            <span  @click="ordenarPelis" 
            class="manita" 
            v-if="ordenAscendente"
            style="{cursor: pointer}"
            aria-hidden="true">&#xf139;</span>

            <span  @click="ordenarPelis" 
            class="manita" 
            v-else="ordenAscendente"
            style="{cursor: pointer}"
            aria-hidden="true">&#xf13a;</span>
          
          </th>
          <th></th>
          <th></th>
        <tr>
      </thead>

       <tbody name="fade" is="transition-group">
        
          <tr  v-for="(peli,index) in pelis" :key="index">
            <td>
              
                <router-link 
                :to="'/peli/'+peli.imdbID"
                >{{peli.title}}
                </router-link>
             
            </td>
            <td>
              {{peli.year}}
            </td>
            <td>
              {{peli.type}}
            </td>
            <td>
              {{peli.rating}}
            </td>
            <td>

              <span class="manita" 
              v-if="peli.favorita"
              @click="cambiarFavorita(peli)"
              style="{cursor: pointer; color:darkorange; }"
              aria-hidden="true"
              >&#xf005;</span>

              <span class="manita" 
              v-else
              @click="cambiarFavorita(peli)"
              style="{cursor: pointer}"
              aria-hidden="true"
              >&#xf006;</span>

            </td>
            <td>
              <span class="manita"  @click="deletePeli(index)">&#xf014;</span>
            </td>
          </tr>
      
     </transition-group>
        
  </table>
 
  </div>
</template>

<script>
export default {

  data () {
    return {
      peliABuscar:'',
      imdbUrl: 'http://www.omdbapi.com/?t=',
      ordenAscendente: false
    }
  },

  computed: {
    pelis() {
      return this.$store.state.pelis;
    }
    
  },

  methods: {
    cambiarFavorita(peli){

      peli.favorita = !peli.favorita;
    },

    deletePeli(index){
      this.$store.state.pelis.splice(index,1);
    },
    ordenarPelis(){
      if (this.ordenAscendente) {
         this.$store.state.pelis.sort(
        (a,b) => { return (a.rating - b.rating) }
      )}
      else {
        this.$store.state.pelis.sort(
        (a,b) => { return (b.rating - a.rating) }
      )};
     
      this.ordenAscendente = !this.ordenAscendente;
    },
//glyphicon glyphicon-triangle-bottom  <span class="glyphicon glyphicon-triangle-bottom " aria-hidden="true"></span>
    fetchData() {
      if (this.peliABuscar!=='') {
      
        this.$http.get(this.imdbUrl+this.peliABuscar)
            .then( response =>{
              
              return response.json();
            }, error => {
              console.log('error');
            })
            .then(data => {

              if (data.Response == 'False') {
                alert (data.Error);
              }
              else{
                let peli = {};
                peli.imdbID = data.imdbID;
                peli.title = data.Title;
                peli.plot = data.Plot;
                peli.year = data.Year;
                peli.type = data.Type;
                peli.poster = data.Poster;
                peli.rating = data.imdbRating;
                peli.favorita = false;

                this.$store.state.pelis.push(peli);
                this.peliABuscar = ''
              }
      
            }, error => {
              console.log('error');
            });

        }
     
    }
  }
}
</script>

<style>

.manita {
  font-family: fontAwesome;
}
.manita:hover {
  cursor:pointer;
  color:mediumvioletred;  
 }

 .fade-enter {
    opacity: 0;
 }

 .fade-enter-active {
   transition: opacity 1s;
 }

 .fade-leave {
   
 }

 .fade-leave-active {
   transition: opacity 1s;
   opacity: 0;
 }
</style>