<template>
  <v-card
    class="transparent elevation-0"
  >
    <v-card-text class="pl-0">
      <v-btn
        @click="$router.go(-1)"
        class="ml-0"
      >
      <v-icon left>chevron_left</v-icon>
      Go Back
      </v-btn>
    </v-card-text>
  </v-card>
</template>
