<script setup lang="ts">
// Components
import MemberItemComponent from '@geniale/components/MemberItemComponent.vue';

// Media
import defaultAvatar from '@geniale/assets/media/members/avatar.png';
import { teams } from '@geniale/data/members';
</script>

<template>
  <section>
    <div class="container mx-auto px-4 pt-10 pb-20">
      <div class="pt-10 pb-10">
        <h2 class="text-5xl font-bold font-sans text-center">
          {{ $t('our_team_title') }}
        </h2>
      </div>
      <div class="flex flex-col gap-8 items-center">
        <template v-for="(team, key) in teams" :key="key">
          <div>
            <h2 class="font-bold font-sans text-3xl md:text-4xl text-center">
              {{ $t(team.title) }}
            </h2>
            <p class="text-center text-lg font-medium pt-3">
              {{ $t(team.description) }}
            </p>
          </div>

          <div class="flex flex-wrap justify-center items-center">
            <MemberItemComponent
              v-for="(member, j) in team.members"
              :key="j"
              :name="member.name"
              :img="member.img ?? defaultAvatar"
              :program="$t(member.program)"
              :title="
                member.title == undefined
                  ? $t('title_member')
                  : $t(member.title)
              "
              :link="member.link"
            />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
