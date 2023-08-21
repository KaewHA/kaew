<script setup>
const myLogo = '../src/assets/logo.svg'
import { groups } from '../data/groupworks.js'
const member = groups.forEach((group) => {
  group.students.map((student) => {
    const id = student.id
    const name = student.name
    return id, name
  })
})
</script>

<template>
  <div>
    <div class="flex flex-row">
      <div class="basis-1.5/5 mt-6 ml-6">
        <img :src="myLogo" class="h-20 w-20" />
      </div>
      <div class="basis-2/5 mt-12 ml-6">
        <div>
          <p>Vue Group Projects</p>
        </div>
        <div class="pt-1">
          <p>
            Part of Learning Activities for INT203 Client-Side Programming II
          </p>
        </div>
      </div>

      <div class="mt-6 mr-0 h-24 flex flex-row">
        <div class="mt-2 ml-80 pt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16Zm0-2q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
            ></path>
          </svg>
        </div>

        <div class="mt-8 pl-4">
          <input
            :value="text"
            @input="(event) => (text = event.target.value)"
            class="border-solid border-2 border-gray-200"
          />
        </div>
      </div>
    </div>

    <div>
      <table class="w-full mt-4 ml-4">
        <thead>
          <tr class="flex flex-row pl-8">
            <th class="pr-10">Section</th>
            <th class="pl-20 pr-10">Project Name</th>
            <th class="pl-8 pr-96">GitHub Repository</th>
            <th class="pl-9 pr-0">Group Members</th>
          </tr>
        </thead>

        <div class="mb-4">
          <tr
            v-for="(group, index) in groups"
            :key="group.projectName"
            :class="index % 2 !== 0 ? 'bg-white' : 'bg-gray-200'"
            class="mb-4 pb-4"
          >
            <td class="pt-2 pl-14 pb-4 pr-36">{{ group.section }}</td>
            <td class="pt-2 pb-4 pr-4">{{ group.projectName }}</td>
            <td class="pt-2 pb-4 pl-16 pr-2">{{ group.githubRepo }}</td>
            <td class="pt-2 pb-4 pr-4">
              <div v-for="student in group.students" :key="student.id">
                {{ student.id }} {{ student.name }}
              </div>
            </td>
          </tr>
        </div>
      </table>
    </div>
  </div>
</template>

<style scoped>
.bg-white {
  background-color: white;
}

.bg-gray-200 {
  background-color: #f3f4f6;
}
</style>
