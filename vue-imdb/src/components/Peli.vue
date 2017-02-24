<template>
   
<div class="card" style="width: 20rem;">
  <img class="card-img-top" :src="peli.poster" :alt="peli.title + ' poster'">
  <div class="card-block">
    <h4 class="card-title">{{peli.title}}</h4>
    <p class="card-text">{{peli.plot}}</p>
    <router-link 
        to="/"
        class="btn btn-primary"
         tag="button"
        >Volver
    </router-link>
  </div>
</div>
    
</template>

<script>
export default {
   data(){
       return {
          peli: {}
       }
   },

    computed: {
            peliId() {
                 //return this.$store.state.peliSeleccionada;
                // console.log($route.params.id);
                     }
        
            },
    methods: {
        findPeli(p) { 
            return p.imdbID ===  this.$route.params.id;
        }

    },

    created() {
    
       
        this.peli =  this.$store.state.pelis.find(this.findPeli);

    }
}
   
</script>

<styles>

</styles>