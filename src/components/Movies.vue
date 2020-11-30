<template>
   <div id="movies">
        <div v-for="movie in this.movies" :key="movie.id" class="movie">
            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" class="img"/>
            <div class="movie-infos">
                <span class="title">{{movie.title}}</span>
                <span class="date">Data lançamento: {{moment(movie.release_date).format('DD/MM/YYYY')}}</span>
                <a href="#" style="width: 100%; text-align: center;">Ver informações</a>
            </div>
        </div>

        <Navigation @paginaClicada="getPagina($event)"/>
           
    </div>
</template>

<script>

import moment from 'moment';
import Navigation from './Navigation';

export default {
    name: 'Movies',
    data() {
        return {
            pageNumber: 10
        }
    },
    props: {
        movies: Array,
        totalPages: Number,
        totalItems: Number
    },
    methods: {
        moment,
        getPagina: function($event) {
            this.$emit('pagina', {pagina: $event.pagina});
        }
    },
    components: {
        Navigation
    }
}
</script>

<style scoped>
    #movies {
        width: 100%;
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }

    .movie {
        margin-right: 20px;
        margin-top: 20px;
        height: 330px; 
        width: 23%; 
        background-color: #fff; 
        display: flex; 
        flex-direction: column;
        box-shadow: 1px 1px 10px #ccc;
    }

    .img {
        width: 100%; 
        background-color: red; 
        height:240px;
    }

    .movie-infos {
        width: 100%; 
        flex: 1;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .title {
        font-size: 20px; 
        margin-left: 5px; 
        height: 50px; 
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .date {
        font-size: 16px; 
        margin-right: 5px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .movie-infos a {
        width: 100%;
        height: 20px;
        background-color: #162026;
        text-decoration: none;
        color: #eee;
    }
</style>