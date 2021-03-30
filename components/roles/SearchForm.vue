<template>
    <div>
    <div>Tiêu đề <input style="width: 80%; margin-left:50px" v-model="keySearch"></div><br>
    <button type="button" placeholder="Tiêu đề.." class="btn btn-success" @click="getKeySearch()">Search</button><br>
    </div>
</template>

<script>
export default {
    data (){
        return{
        keySearch : [],
        }
    },
    methods:{
        getKeySearch(){
            this.$emit('getKeySearch', this.keySearch)
        }
    }
}
</script>

<style>

</style>