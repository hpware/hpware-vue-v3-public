<script setup>
// Setup
import { onMounted, ref } from "vue";

// Set Vars for this thingy
const error = ref(false);
const DiscordStatus = ref("");
const statusColor = ref("");
const statusIcon = ref("");
const text = ref("");

// Function
onMounted(async () => {
  try {
    const response = await fetch("https://api.lanyard.rest/v1/users/918723093646684180");
    const data = await response.json();
    DiscordStatus.value = data.data.discord_status;
    // Status set & color
    if (DiscordStatus.value === "online") {
      statusColor.value = "color:#23a459;";
      statusIcon.value = "bi-circle-fill";
      text.value = "Online";
    } else if (DiscordStatus.value === "idle") {
      statusColor.value = "color:#eeb132;";
      statusIcon.value = "bi-moon-fill";
      text.value = "Idle";
    } else if (DiscordStatus.value === "dnd" ){
      statusColor.value = "color:#f03f42";
      statusIcon.value = "bi-circle-fill";
      text.value = "Do not Disturb";
    }else {
      statusColor.value = "color:grey";
      statusIcon.value = "bi-circle-fill";
      text.value = "Offline";
    }
    // Activity Listening to Spotify or Playing
    const ActivityStatus0 = data.data.activities[0];
    if (ActivityStatus0) {
      if (ActivityStatus0.type === 0) {
        const ActivityName = ref(ActivityStatus0.name);
        text.value = `Playing ${ActivityName.value}`;
        statusIcon.value = "bi-controller .fontsize1";
      } else if (ActivityStatus0.type === 2) {
        const SpotifyCurrentlyPlayingSong = ref(ActivityStatus0.details);
        const SpotifyCurrentlyPlayingArtist = ref(ActivityStatus0.state);
        const SpotifyCurrentlyPlayingArtistComma = ref(SpotifyCurrentlyPlayingArtist.value.replace(/;/g, ", "));
        const SpotifyCurrentlyPlaying = ref(`${SpotifyCurrentlyPlayingSong.value} - ${SpotifyCurrentlyPlayingArtistComma.value}`);
        text.value = SpotifyCurrentlyPlaying.value;
        statusIcon.value = "bi-music-note fontsize1";
      } else if (ActivityStatus0.type === 3) {
        const Watching = ref(ActivityStatus0.name);
        const Details = ref(ActivityStatus0.details);
        text.value = `Watching: ${Watching.value} - ${Details.value}`;
        text.value = SpotifyCurrentlyPlaying.value;
        statusIcon.value = "bi-music-note fontsize1";
      } else if (ActivityStatus0.type === 4) {
        const ActivityName= ref(ActivityStatus0.state);
        text.value = `Status: ${ActivityName.value}`;
      }
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
.fontsize1 {
  font-size:1.123em;
}
</style>