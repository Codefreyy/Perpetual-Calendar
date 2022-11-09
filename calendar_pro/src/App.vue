<template>
  <div id="app">
    <MyHeader>{{headerTitle}}</MyHeader>
    <router-view></router-view>
    <tab/>
  </div>
</template>

<script>
import MyHeader from '@/components/header'
import Tab from '@/components/Tab'
import { computed, watch } from 'vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name:'App',
  components:{
    MyHeader,
    Tab
  },
  setup(){
    const store = useStore(),
          state = store.state,
          router = useRouter()
    router.push('/')

    watch(()=>{
      return router.currentRoute.value.name
    }, (value)=>{
      console.log(value);
    })

    return computed(()=>state).value
    
  }
}
</script>
