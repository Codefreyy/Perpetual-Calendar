<template>
    <div class="container">
        DayPage
    </div>
</template>

<script>
import getData from '@/services'
import { onMounted } from 'vue';

export default {
    name: 'DayPage',
    setup() {
        onMounted(()=>{
            console.log(123456);
            getData('day', '2020-1-1')
        })
    }
}
</script>

<style lang="scss" scoped>

</style>