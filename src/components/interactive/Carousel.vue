<template>
  <!-- Add expand feature to carousel to see image full size. -->
  <div class="flex h-full items-center bg-black rounded-lg">
    <slot :currentImage="currentImage" />
    <!-- Navigation for Carousel -->
    <div v-if="navEnabled" class="w-full p-3 absolute flex items-center">
      <div class="toggle-left flex-1">
        <i
          @click="prevSlide"
          class="fa-solid fa-chevron-left flex cursor-pointer items-center justify-center rounded-full h-10 w-10 bg-opacity-75 bg-danby-yellow"
        ></i>
      </div>
      <div class="toggle-right justify-end">
        <i
          @click="nextSlide"
          class="fa-solid fa-chevron-right flex cursor-pointer items-center justify-center rounded-full h-10 w-10 bg-opacity-75 bg-danby-yellow"
        ></i>
      </div>
    </div>

    <!-- Pagination (which for now, I'm not entirely sure I like this just yet. Will ask Derek on his opinions later.) -->
    <div
      v-if="paginationEnabled"
      class="absolute bottom-6 w-5 h-5 flex justify-center items-center gap-4"
    >
      <span
        @click="goToSlide(index)"
        class="cursor-pointer bg-white shadow-sm rounded-full w-20 h-5 active:bg-danby-yellow"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentImage }"
      >
      </span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  name: 'carousel-component',
  props: ['startAutoPlay', 'timeout', 'navigation', 'pagination'],
  setup(props) {
    const currentImage = ref(1)
    const getSlideCount = ref(null)
    const autoPlayEnable = ref(props.startAutoPlay === undefined ? true : props.startAutoPlay)
    const timeoutDuration = ref(props.timeout === undefined ? 5000 : props.timeout)
    const paginationEnabled = ref(props.pagination === undefined ? true : props.pagination)
    const navEnabled = ref(props.navigation === undefined ? true : props.navigation)

    // Next slide
    const nextSlide = () => {
      if (currentImage.value === getSlideCount.value) {
        currentImage.value = 1
        return
      }
      currentImage.value += 1
    }
    // Previous slide
    const prevSlide = () => {
      if (currentImage.value === 1) {
        currentImage.value = 1
        return
      }
      currentImage.value -= 1
    }

    // Autoplay
    const autoPlayer = () => {
      setInterval(() => {
        nextSlide()
      }, timeoutDuration.value)
    }

    if (autoPlayEnable.value) {
      autoPlayer()
    }

    const goToSlide = (index) => {
      currentImage.value = index + 1
    }

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll('.carouselSlide').length
    })

    return {
      currentImage,
      nextSlide,
      prevSlide,
      getSlideCount,
      goToSlide,
      paginationEnabled,
      navEnabled
    }
  }
}
</script>
