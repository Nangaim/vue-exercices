<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
// component imports
import PostList from '../components/PostList.vue'
export default {
  name: 'home',
  components: { PostList },
  setup() {
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
    const matchingNames = computed(() => {
      // return ['a', 'b', 'c']
      return names.value.filter(name => name.includes(search.value))
    })

    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try{
        let data = await fetch("http://localhost:3000/posts")
        if (!data.ok){
          throw Error('no data available')
        }
        posts.value = await data.json()
        
      }
      catch (err){
        error.value = err.message
      }
    }

    load()

    return { posts, names, search, matchingNames, error }
  },
}
</script>