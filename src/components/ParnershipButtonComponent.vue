<script lang="ts" setup>
import partnerPlanFr from '@geniale/assets/documents/PlanCommandite.pdf';
const partnerPlanEn = partnerPlanFr; // Assuming the English version is the same for now
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
const i18n = useI18n();

const partnerPlan = computed(() =>
  i18n.locale.value === 'fr' ? partnerPlanFr : partnerPlanEn
);
</script>

<template>
  <a
    class="bg-black hover:border-primary-50 border-2 border-black transition-colors text-white font-medium text-lg py-2 mt-10 px-4 rounded-lg w-fit"
    :href="partnerPlan"
    target="_blank"
  >
    {{ $t('view_partner_plan') }}
  </a>
</template>
