<template>
  <div id="sidebar">
    <SidebarHeading>Topics</SidebarHeading>
    <VideoList>
      <li v-for="video in videoList" :key="video.id">
        <button 
          @click="onClick(video.id)" :class="{ active: video.id === getData.currentVideoId }"
        >
            {{video.title}}
        </button>
      </li>
    </VideoList>
  </div>
</template>

<script>
  import {
    SidebarHeading,
    VideoList,
  } from './style'

  export default {
    name: 'Sidebar',
    props: {
      videoList: Array,
      onClick: Function,
    },
    components: {
      SidebarHeading,
      VideoList,
    },
    computed: {
      getData() {
        return this.$store.getters.getData
      }
    }
  }
</script>