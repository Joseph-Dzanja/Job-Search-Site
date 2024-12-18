<script setup lang="ts">
interface Job {
  id: number
  title: string
  type: string
  description: string
  location: string
  salary: string
  company: {
    name: string
    description: string
    contactEmail: string
    contactPhone: string
  }
}

const props = defineProps<{
  jobs: Job
}>()

import { ref, computed } from 'vue'

const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value
}

const showFullDescription = ref(false)
const truncatedDescription = computed(() => {
  let description = props.jobs.description
  if (!showFullDescription.value) {
    description = description.substring(0, 90) + '...'
  }
  return description
})

import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ jobs.type }}</div>
        <h3 class="text-xl font-bold">{{ jobs.title }}</h3>
      </div>

      <div class="mb-5">
        <div>
          {{ truncatedDescription }}
        </div>
        <button @click="toggleFullDescription" class="text-green-500 hover:text-green-600 mb-5">
          {{ showFullDescription ? 'Less' : 'More' }}
        </button>
      </div>

      <h3 class="text-green-500 mb-2">{{ jobs.salary }}</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="pi pi-map-marker text-orange-700"></i>
          {{ jobs.location }}
        </div>
        <RouterLink
          :to="'/jobs/' + jobs.id"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
