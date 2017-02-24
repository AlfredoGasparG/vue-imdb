<template>


<div class="card-columns">
  
         <div class="card"  v-for="peli in favoritas" >
            <img class="card-img-top img-fluid" :src="peli.poster" :alt="peli.title + ' poster'">
            <div class="card-block">
                <h4 class="card-title">{{peli.title}}</h4>
                <p class="card-text">{{peli.plot}}</p>
                <p class="card-text"><small class="text-muted">{{peli.rating}}</small></p>
            </div>
        </div>
  
   

</div>
</template>
<script>
   

    export default {
       computed: {
            favoritas() {
                 return this.$store.state.pelis.filter(el => el.favorita);
            }
    
         }
    }

</script>