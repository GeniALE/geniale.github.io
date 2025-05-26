<script setup lang="ts">
import logo from '@geniale/assets/media/logo_flag.svg';
import team from '@geniale/assets/media/members.jpg';
import qualite from '@geniale/assets/media/home/qualite.png';
import houblon from '@geniale/assets/media/home/houblon.jpg';
import production from '@geniale/assets/media/home/production.png';
import PartnersComponent from '@geniale/components/PartnersComponent.vue';
import DescriptiveContentComponent from '@geniale/components/DescriptiveContentComponent.vue';
import i18n from '@geniale/plugins/i18n';
</script>

<template>
  <section>
    <DescriptiveContentComponent :image-right="true">
      <template #title>
        <span>
          {{ $t('our') }}
          <span class="text-primary-500">
            {{ $t('mission') }}
          </span>
        </span>
      </template>
      <template #content1>
        {{ $t('mission_content') }}
      </template>
      <template #image>
        <img :src="logo" alt="GéniAle logo" class="rounded-lg w-10/12" />
      </template>
    </DescriptiveContentComponent>
  </section>
  <section>
    <DescriptiveContentComponent :image-right="false">
      <template #title>
        <span v-if="i18n.global.locale.value === 'fr'">
          {{ $t('ingredients') }}
          <span class="text-primary-500">
            {{ $t('local') }}
          </span>
        </span>
        <span v-else>
          <span class="text-primary-500">
            {{ $t('local') }}
          </span>
          {{ $t('ingredients') }}
        </span>
      </template>
      <template #content1>
        {{ $t('ingredients_content') }}
      </template>
      <template #image>
        <img :src="houblon" alt="houblon" class="rounded-lg w-10/12" />
      </template>
    </DescriptiveContentComponent>
  </section>
  <section>
    <DescriptiveContentComponent :image-right="true">
      <template #title>
        <span v-if="i18n.global.locale.value === 'fr'">
          {{ $t('beer_quality_title') }}
          <span class="text-primary-500">
            {{ $t('quality') }}
          </span>
        </span>
        <span v-else>
          <span class="text-primary-500">
            {{ $t('quality') }}
          </span>
          {{ $t('beer_quality_title') }}
        </span>
      </template>
      <template #content1>
        {{ $t('beer_quality_content') }}
      </template>
      <template #image>
        <img :src="qualite" alt="quality" class="rounded-lg w-10/12" />
      </template>
    </DescriptiveContentComponent>
  </section>
  <section>
    <DescriptiveContentComponent :image-right="false">
      <template #title>
        {{ $t('brewing_title') }}
        <span class="text-primary-500">{{ $t('scratch_title') }}</span>
      </template>
      <template #content1>
        {{ $t('brewing_content') }}
      </template>
      <template #image>
        <img :src="production" alt="production" class="rounded-lg w-10/12" />
      </template>
    </DescriptiveContentComponent>
  </section>
  <section>
    <DescriptiveContentComponent
      :button="$t('join_us')"
      link="https://formulaires.etsmtl.ca/ClubEtudiantAdhesion?requete=geni ale&categorie=0"
      :image-right="true"
    >
      <template #title>
        {{ $t('join_our_team_title') }}
      </template>
      <template #content1>
        {{ $t('join_our_team_content') }}
      </template>
      <template #image>
        <img :src="team" alt="team" class="rounded-lg w-full" />
      </template>
    </DescriptiveContentComponent>
  </section>
  <PartnersComponent />
</template>
