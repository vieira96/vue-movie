
<template>
    <div id="navigation">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <button type="button" class="page-link" v-if="page != 1" @click="previous()"> Previous </button>
                </li>
                <li class="page-item">
                    <button type="button" class="page-link" v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber" @click="mudarPagina(pageNumber)"> {{pageNumber}} </button>
                </li>
                <li class="page-item">
                    <button type="button" @click="next()" v-if="page < pages.length" class="page-link"> Next </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data(){
		return {
			posts : [''],
			page: 1,
			perPage: 20,
			pages: [],			
		}
	},

	methods: {
		mudarPagina(pageNumber){
			this.page = pageNumber;
			this.$emit('paginaClicada', {pagina: this.page});

		},
		previous(){
			this.page--;
			this.$emit('paginaClicada', {pagina: this.page});
		},

		next() {
			this.page++;
			this.$emit('paginaClicada', {pagina: this.page});
		},

		getPosts () {	
		for(let i = 0; i < 200; i++){
			this.posts.push({first: 'John',
				last:'Doe', 
				suffix:'#' + i});
		}  
		},
		setPages () {
			let numberOfPages = 500;
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}

		},
		paginate (posts) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			console.log(this.page);
			return  posts.slice(from, to);
		}
	},
	computed: {
		displayedPosts () {
			return this.paginate(this.posts);
			
		}
	},watch: {
		posts () {
			this.setPages();
		}
	},
	created(){
		this.getPosts();
	},
	filters: {
		trimWords(value){
			return value.split(" ").splice(0,20).join(" ") + '...';
		}
	}

}
</script>

<style>
    button.page-link {
	display: inline-block;
    }
    button.page-link {
        font-size: 20px;
        color: #29b3ed;
        font-weight: 500;
    }
    .offset{
    width: 500px !important;
    margin: 20px auto;  
    }
</style>