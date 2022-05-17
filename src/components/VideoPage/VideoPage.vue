
<template>
  <div id="videoPage">
    <div class="row">
        <div class="col-lg-9 order-lg-2">
          <VideoHeading>{{ getData.videoTitle }}</VideoHeading>
          <div class="embed-responsive embed-responsive-16by9"> 
            <WhatWeWannaSee id="mainVideo" :key="getData.videoUrl" controls>
              <source :src="getData.videoUrl" type="video/mp4" />
            </WhatWeWannaSee>
          </div>
          <VideoNav>
            <div class="row">
              <div class="col-sm-6 col-6 prev">
                <NavButton v-if="getData.currentVideoId > 1" @click="Navigate('prev')">&laquo; Prev</NavButton>
              </div>
              <div class="col-sm-6 col-6 next">
                <NavButton v-if="getData.currentVideoId < videos.length" @click="Navigate('next')">Next &raquo;</NavButton>
              </div>
            </div>
          </VideoNav>
          <VideoDescription>{{ getData.videoDescription }}</VideoDescription>
        </div>
        <div class="col-lg-3 order-lg-1">
          <Sidebar :videoList="videos" :onClick="selectVideo" />
        </div>
    </div>
  </div>
</template>

<script>

import Sidebar from '../Sidebar/Sidebar.vue';
import searchArray from '../../common/utils'

import {
  VideoHeading,
  VideoDescription,
  WhatWeWannaSee,
  VideoNav,
  NavButton,
} from './style'

export default {
  name: "VideoPage",
  methods: {
    selectVideo(i) {
      this.$store.dispatch('addData', { currentVideoId: i })
      this.getVideo()
    },
    getVideo() {
      const current = searchArray(this.getData.currentVideoId, this.videos)
      this.$store.dispatch('addData', { 
        videoTitle: current.title, 
        videoDescription: current.description, 
        videoUrl: current.url 
      })
    },
    Navigate(direction) {
      let validNavigation = false
      const totalVideos = this.videos.length
      const currentId = this.getData.currentVideoId
      if (direction === 'next' && currentId < totalVideos) {
        this.$store.dispatch('addData', { currentVideoId: (currentId + 1) })
        validNavigation = true
      } else if (direction === 'prev' && (currentId <= totalVideos && currentId !== 1)) {
        this.$store.dispatch('addData', { currentVideoId: (currentId - 1) })
        validNavigation = true
      }
      if (validNavigation) this.getVideo()
    }
  },
  data() {
    return {
      videos: [
        {
          id: 1,
          title: 'Some rather interesting video',
          url: 'https://patchs-public.s3.eu-west-2.amazonaws.com/instruction-videos/how_to_1_about_this_guide.mp4',
          description: 'Chuck Norris has two speeds. Walk, and Kill Chuck Norris invented Kentucky Fried Chicken\'s famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear, Chuck Norris will attain statehood in 2009. His state flower will be the Magnolia. If you ask Chuck Norris what time it is, he always says, "Two seconds \'til." After you ask, "Two seconds \'til what?" he roundhouse kicks you in the face.',
        },
        {
          id: 2,
          title: 'Equally as interesting',
          url: 'https://patchs-public.s3.eu-west-2.amazonaws.com/instruction-videos/how_to_2_what_is_patchs.mp4',
          description: 'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis. Chuck Norris can win a game of Connect Four in only three moves. What was going through the minds of all of Chuck Norris\' victims before they died? His shoe There is no chin behind Chuck Norris\' beard. There is only another fist. ',
        },
        {
          id: 3,
          title: 'Why not watch this as well?',
          url: 'https://patchs-public.s3.eu-west-2.amazonaws.com/instruction-videos/how_to_1_about_this_guide.mp4',
          description: 'Chuck Norris can hear you type Chuck Norris on your keyboard Chuck invented Texas Hold\'em.',
        }
      ]
    }
  },
  components: { 
    Sidebar,
    VideoHeading,
    VideoDescription,
    WhatWeWannaSee,
    VideoNav,
    NavButton,
  },
  computed: {
    getData() {
      return this.$store.getters.getData
    }
  },
  beforeMount() {
    this.getVideo()
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
