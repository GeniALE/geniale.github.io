<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import logo from '@geniale/assets/media/logo_flag2.svg';
import i18n from '@geniale/plugins/i18n';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const isOpen = ref(false);

const navbarItems = [
  {
    name: 'page_home',
    link: '/',
    selected: false,
  },
  {
    name: 'page_members',
    link: '/members',
    selected: false,
  },
  {
    name: 'page_join',
    link: 'https://formulaires.etsmtl.ca/ClubEtudiantAdhesion?requete=geni ale&categorie=0',
    target: '_blank',
    selected: false,
  },
];

// Hide navbar until scroll
onBeforeMount(() => {
  // Check which page we are on
  for (const item of navbarItems) {
    if (window.location.pathname === item.link) {
      item.selected = true;
    }
  }
});

const languages = [
  {
    name: 'EN',
    code: 'en',
  },
  {
    name: 'FR',
    code: 'fr',
  },
];

let langIndex = languages.findIndex(
  lang => lang.code === i18n.global.locale.value
);

// Hide navbar until scroll
onBeforeMount(() => {
  // Check which page we are on
  for (const item of navbarItems) {
    if (window.location.pathname === item.link) {
      item.selected = true;
    }
  }
});

// Set locale on select change
const onLocaleChange = () => {
  langIndex = (langIndex + 1) % languages.length;
  changeLanguage(languages[langIndex].code);
};

/**
 *
 */
function changeLanguage(newLang: string) {
  window.localStorage.setItem('locale', newLang);
  i18n.global.locale.value = newLang as typeof i18n.global.locale.value;
}
</script>

<template>
  <nav
    id="navbar"
    class="fixed w-full top-0 z-50 shadow bg-[rgba(173,31,49,255)] animate-fade animate-duration-150"
  >
    <div class="container px-4 py-3 mx-auto">
      <div class="md:flex justify-between items-center">
        <!-- left section -->
        <div class="flex justify-between items-center">
          <a href="/" class="text-xl font-bold md:text-2xl">
            <img :src="logo" alt="logo" class="h-12 w-12 md:h-14 md:w-14" />
          </a>
          <div class="md:hidden flex items-center">
            <button
              type="button"
              class="text-white hover:text-primary-300 focus:text-gray-600 focus:outline-none"
              @click="isOpen = !isOpen"
            >
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                <path
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
        <!-- right section -->
        <div
          class="flex-col mt-3 md:flex-row md:mt-0 md:flex"
          :class="isOpen ? 'flex' : 'hidden'"
        >
          <a
            v-for="item in navbarItems"
            :key="item.name"
            :href="item.link"
            class="block md:inline-block px-2 py-1 text-white hover:text-gray-500 md:px-4 md:py-2 md:text-lg"
            :class="item.selected ? '!text-stone-950' : ''"
            :target="item.target"
          >
            {{ $t(item.name) }}
          </a>

          <button
            :aria-label="$t('language')"
            type="button"
            class="block md:inline-block px-2 py-1 text-white hover:text-gray-500 md:px-4 md:py-2 md:text-lg"
            @click="onLocaleChange"
          >
            <FontAwesomeIcon :icon="faEarthAmerica" class="w-6" />
            {{ languages[langIndex].name }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
select {
  -webkit-appearance: none !important;
  -moz-appearance: none !important;

  border: 1px solid gray;
  padding: 5px 10px;
}
</style>
