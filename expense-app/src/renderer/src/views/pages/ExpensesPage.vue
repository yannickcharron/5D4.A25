<template>
  <DefaultLayout>
    <div class="flex flex-wrap -mx-3">
      <div class="flex-none w-full max-w-full px-3">
        <div
          class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border"
        >
          <div class="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
            <h6 class="dark:text-white">Expenses history</h6>
            <v-container>
              <v-data-table :headers="headers" :items="expenses" :search="searchText">
                <template #top>
                  <v-text-field
                    v-model="searchText"
                    label="Search"
                    prepend-inner-icon="mdi-magnify"
                    variant="outlined"
                    hide-details
                    single-line
                  >
                  </v-text-field>
                </template>
              </v-data-table>
            </v-container>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { AxiosStatic } from 'axios'
import { inject, onMounted, ref } from 'vue'
import { Expense } from '@renderer/models/Expense'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { ExpenseRepository } from '@renderer/repositories/ExpenseRepository'

const axios = inject('Mockoon') as AxiosStatic
const expenseRepository = new ExpenseRepository(axios)

const headers = [
  {
    title: 'Date',
    key: 'date',
    value: (item: Expense) => dayjs(item.date).format('YYYY-MM-DD HH:mm')
  },
  { title: 'Category', value: 'category' },
  { title: 'Description', value: 'description' },
  {
    title: 'Amount',
    key: 'amount',
    value: (item: Expense) => {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
        item.amount
      )
    }
  }
]

const expenses = ref<Expense[]>([])
const searchText = ref('')

onMounted(async () => {
  try {
    expenses.value = await expenseRepository.retrieveAll()
    console.log(expenses.value)
  } catch (err) {
    console.log(err)
  }
})
</script>

<style scoped></style>
