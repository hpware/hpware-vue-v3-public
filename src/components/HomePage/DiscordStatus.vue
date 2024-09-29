<script setup>
import { ref ,onMounted  } from "vue";
const error = ref(false);
const DiscordStatus = ref("");
const statusColor = ref("");
const statusIcon = ref("");
const text = ref("");

// Function
onMounted(async () => {
  try {
    const response = await fetch("https://api.lanyard.rest/v1/users/918723093646684180");
    const responseData = await response.json();
    DiscordStatus.value = responseData.data.discord_status;
    CurrentActivites.value = responseData.data.activities.name;
    // Status set & color
    if (DiscordStatus.value === "online") {
      statusColor.value = "color:#23a459;";
      statusIcon.value = "bi-circle-fill";
      text.value = "Online";
    } else if (DiscordStatus.value === "idle") {
      statusColor.value = "color:#eeb132;";
      statusIcon.value = "bi-moon-fill";
      text.value = "Idle";
    } else {
      statusColor.value = "color:grey";
      statusIcon.value = "bi-circle-fill";
      text.value = "Offline";
    }
    console.log(DiscordStatus.value);
    console.log(statusColor.value);
    console.log(text.value);
    console.log(error.value);
    console.log(statusIcon.value);
    // Set Whatever is this
    if (responseData.data.activities.name === "Spotify") {
      SpotifyCurrentlyPlaying.value = responseData.data.activities.details;
      SpotifyCurrentlyPlayingArtist.value = responseData.data.activities.state;
      console.log(SpotifyCurrentlyPlaying.value);
      console.log(SpotifyCurrentlyPlayingArtist.value);
    }

  } catch (error) {
    error.value = true;
  }
});


</script>

<template>
    <span class="onlinepr"><i class="bi" :class="statusIcon" :style="statusColor"></i>&nbsp;
      <span>{{ text }}</span>
    </span>
    <span v-if="error === true">Error</span>
</template>

<style scoped>
.onlinepr {
  font-size: 0.6em;
  margin-top: 0em;
}
</style>