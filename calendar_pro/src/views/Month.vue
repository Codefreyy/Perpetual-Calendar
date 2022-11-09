<template>
    <div class="container">
        MonthPage
    </div>
</template>

<script>
import getData from '@/services'
import { onMounted } from 'vue';
export default {
    name: 'MonthPage',
    setup(){
        onMounted(()=>{
            getData('month', '2020-1')
        })
    }
}
</script>

<style lang="scss" scoped>

</style>