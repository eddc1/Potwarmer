<template>
    <div class="flex flex-col items-center py-10">
      <img :src="step.imgSrc" :alt="step.title" class="mb-4">
      <h2 class="text-xl font-medium mb-2 underline">{{ step.title }}</h2>
      <p class="text-gray-600">{{ step.text }}</p>
    </div>
  </template>

<script>

export default {
  props: {
    step: {
      type: Object,
      required: true,
    },
  },
};

</script>

