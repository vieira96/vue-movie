<template>
    <div id="home">
        
        <div class="container">
            <h1>Mais populares</h1>
            <Movies :movies="this.filmes" :totalPages="this.pages" :totalItems="this.items" @pagina="paginaClicada($event)"  />            
        </div>
    </div>
</template>

<script>

import api from '../services/api';
import Movies from '../components/Movies';

export default {
    name: 'Home',
    data(){
        return{
            filmes: [],
            pages: 0,
            items: 0,
            pagina: 1
        }
    },
    components: {
        Movies
    },
    methods: {
        async paginaClicada($event) {
            if($event) {
                 var response = await api.get('popular?api_key=8ab9431ad88e200827f790795a5bdc68&language=pt-BR&page='+$event.pagina);
                this.filmes = response.data.results;
            }
        }
    },
    async created() {
        var response = await api.get('popular?api_key=8ab9431ad88e200827f790795a5bdc68&language=pt-BR&page='+this.pagina);
        this.filmes = response.data.results;
        this.pages = response.data.total_pages;
        this.items = response.data.total_results;
    }
}

</script>

<style>
    #home {
        width: 100%;
        min-height: calc(100vh - 80px);
        display: flex;
        justify-content: center;
    }

    .container {
        max-width: 1024px;
        width: 100%;
    }

    
</style>