<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  Bars3Icon,
  XMarkIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from "@heroicons/vue/24/outline";

const solutions = [
  {
    name: "Analytics",
    description: "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: Squares2X2Icon,
  },
];

const navigation = ref([
  {
    name: "Facebook",
    href: "#",
    image: "",
  },
  {
    name: "Twitter",
    href: "#",
    image: "/_nuxt/assets/images/twitter.svg",
  },
  {
    name: "Localizacion",
    href: "#",
    image: "/_nuxt/assets/images/location.svg",
  },
  { name: "Contacto", href: "#", image: "/_nuxt/assets/images/mail.svg" },
]);
</script>

<template>
  <Disclosure as="nav" class="bg-white bg-opacity-70">
    <!-- <div class="mx-auto max-w-7xl py-8"> -->
    <div class="py-8">
      <div class="relative flex h-16 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center ml-8">
            <img
              class="block h-1 w-auto lg:hidden"
              src="@/assets/images/logo-museo-historia-natual-bogota.svg"
              alt="Logo del museo de historia natural de bogota"
            />
            <img
              class="hidden w-auto lg:block"
              src="@/assets/images/logo-museo-historia-natual-bogota.svg"
              alt="Logo del museo de historia natural de bogota"
            />
          </div>
        </div>
        <div class="hidden sm:block">
          <div class="flex space-x-4">
            <a href="#">
              <img
                src="@/assets/images/facebook.svg"
                alt="facebook"
                class="sm:mx-6"
                width="18"
              />
            </a>
            <a href="#">
              <img
                src="@/assets/images/twitter.svg"
                alt="twitter"
                class="sm:mx-6"
                width="18"
              />
            </a>
            <a href="#">
              <img
                src="@/assets/images/location.svg"
                alt="mapa"
                class="sm:mx-6"
                width="18"
              />
            </a>
            <a href="#">
              <img src="@/assets/images/mail.svg" alt="mail" class="sm:mx-6" width="18" />
            </a>
          </div>
          <form action="#" method="POST" class="mt-6">
            <div>
              <div class="flex mt-1">
                <input
                  id="search"
                  type="text"
                  name="search"
                  placeholder="Buscar"
                  class="block w-full rounded-tl-lg rounded-bl-lg border-gray-300 py-1 px-2 shadow-sm focus:border-orange-400 focus:ring-orange-400"
                />
                <button
                  type="submit"
                  class="inline-flex items-center justify-center rounded-tr-lg rounded-br-lg border border-transparent bg-white py-1 px-2 text-base font-medium text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                  <img src="@/assets/images/search.svg" alt="" srcset="" width="20" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div
          class="absolute inset-y-0 flex items-center pr-2 sm:static sm:inset-auto sm:mx-6 sm:pr-0"
        >
          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton
                class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Your Profile</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Sign out</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <div class="flex items-center">
          <PopoverGroup as="nav" class="flex space-x-10">
            <Popover v-slot="{ open }">
              <PopoverButton
                class="relative py-12 px-12 bg-slate-600 inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray"
              >
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-8 w-8" aria-hidden="true" />
                <XMarkIcon v-else class="block h-8 w-8" aria-hidden="true" />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1"
              >
                <PopoverPanel
                  class="absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block"
                >
                  <div
                    class="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16"
                  >
                    <a
                      v-for="item in solutions"
                      :key="item.name"
                      :href="item.href"
                      class="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div class="flex md:h-full lg:flex-col">
                        <div class="flex-shrink-0">
                          <span
                            class="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
                          >
                            <component
                              :is="item.icon"
                              class="h-6 w-6"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div
                          class="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4"
                        >
                          <div>
                            <p class="text-base font-medium text-gray-900">
                              {{ item.name }}
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                              {{ item.description }}
                            </p>
                          </div>
                          <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                            Learn more
                            <span aria-hidden="true"> &rarr;</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="bg-gray-50">
                    <div
                      class="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8"
                    >
                      <div
                        v-for="item in callsToAction"
                        :key="item.name"
                        class="flow-root"
                      >
                        <a
                          :href="item.href"
                          class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                          <component
                            :is="item.icon"
                            class="h-6 w-6 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span class="ml-3">{{ item.name }}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
        </div>
      </div>
    </div>
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
        >
          {{ item.image }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
