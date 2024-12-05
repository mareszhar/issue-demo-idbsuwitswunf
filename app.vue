<template>
  <div>
    <div v-if="appId">
      <h1>hello</h1>
      <p>Connection status: {{ connectionStatus }}</p>
      <Todo />
      <ClientOnly>
        <Todo />
      </ClientOnly>
      <ClientOnlyTodo />
    </div>
    <p v-else>
      add your instant appId in .env (NUXT_PUBLIC_INSTANT_APP_ID="")
      or directly in nuxt config
    </p>
  </div>
</template>

<script setup lang="ts">
const appId = useRuntimeConfig().public.instantAppId
const db = useDb()
const connectionStatus = db.useConnectionStatus()
</script>
