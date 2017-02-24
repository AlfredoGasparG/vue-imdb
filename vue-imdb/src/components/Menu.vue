<template>
   
  <div class="container-fluid">
      
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">

            <span class="navbar-brand" id="imdb" href="#">&#xf2d8;</span>
           
                <ul class="navbar-nav">
                    <li class="nav-item">
                         <router-link 
                            :to="'/'"
                            tag = "a"
                            class="nav-link"
                            >Home
                        </router-link>
                        
                    </li>
                    <li class="nav-item">
                         <router-link 
                            :to="'/favoritas'"
                            tag = "a"
                            class="nav-link"
                            >Favoritas
                        </router-link>
                        
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#"   id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  style="float:right">
                        Acciones
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#"  @click='Cargar' ><span   class="cargar">&#xf062;</span> <span>Cargar</span></a>
                            <a class="dropdown-item" href="#"  @click='Guardar' ><span  class="grabar">&#xf063;</span></span> <span>Guardar</span></a>
                        </div>
                    </li>
                </ul>
        
        </nav>
        <br><br>

     </div>
</template>

<script>
    export default {
        methods: {
            Guardar(){
                this.$http.put('',this.$store.state.pelis)
                .then(response => {
                    console.log('Grabado');
                })
            },

            Cargar(){
                this.$http.get('')
                    .then( response => {
                        return response.json();
                    })
                    .then( data => {
                        const resultArray = [];
                        for( let key in data) {
                         
                           resultArray.push(data[key]);
                        }
                        this.$store.state.pelis = resultArray;
                    });
            }
        }
    }
</script>

<style>
   nav {
       margin-top: 30px;
   }

   .cargar {
       color: darkgreen;
       font-family: fontAwesome;
   }
   .grabar {
       color: red;
       font-family: fontAwesome;
   }

   #imdb {
       font-size: 70px;
       color: darkorange;
       font-family: fontAwesome;
   }
   
</style>

