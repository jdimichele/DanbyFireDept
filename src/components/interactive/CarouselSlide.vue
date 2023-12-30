<template>
  <div class="carouselSlide absolute sm:max-h-screen">
    <transition name="carouselSlide">
      <slot />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style>
.carouselSlide-enter-active,
.carouselSlide-leave-active {
  transition: opacity 0.7s ease-in-out;
}

.carouselSlide-enter-from,
.carouselSlide-leave-to {
  opacity: 0;
}

.carouselSlide-enter-to,
.carouselSlide-leave-from {
  opacity: 1;
}
</style>
