<template>
    <div id="header">
        <header>
            <router-link to="/" exact="">Logo</router-link>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
    #header {
        background-color: #162026;
        height: 80px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    header {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    header a {
        text-decoration: none;
        font-size: 32px;
        color: #eee;
        margin-left: 20px;
    }
</style>