<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import logo from '@geniale/assets/media/logo_flag.svg';

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
  {
    name: 'page_merch',
    link: '/merchandise',
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

onMounted(() => {
  if (window.location.pathname === '/dashboard') {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.classList.remove('bg-white');
      navbar.classList.add('hidden');
    }
  }
});

// Set locale on select change
const onLocaleChange = (event: Event) => {
  window.localStorage.setItem(
    'locale',
    (event.target as HTMLSelectElement).value
  );
};
</script>

<template>
  <nav
    id="navbar"
    class="fixed w-full top-0 z-50 shadow bg-white animate-fade animate-duration-150"
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
              class="text-gray-500 hover:text-primary-700 focus:text-gray-600 focus:outline-none"
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
            class="block md:inline-block px-2 py-1 text-gray-800 hover:text-primary-700 md:px-4 md:py-2 md:text-lg"
            :class="item.selected ? 'text-primary-700' : ''"
            :target="item.target"
          >
            {{ $t(item.name) }}
          </a>
          <select
            v-model="$i18n.locale"
            :aria-label="$t('language')"
            type="button"
            class="text-gray-500 hover:text-primary-700 focus:text-gray-600 focus:outline-none pr-2 border-none"
            @change="onLocaleChange"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
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
