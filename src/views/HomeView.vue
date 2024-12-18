<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import HeroCards from '../components/HeroCards.vue'
import JobListings from '../components/JobListings.vue'
</script>

<template>
  <HeroSection title="Become a Vue Dev" subtitle="Find a Vue job that fits your skills and needs." />
  <HeroCards />
  <JobListings :limit="3" :showButton="true" />
</template>
