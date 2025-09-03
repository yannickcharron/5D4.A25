<template>
  <DefaultLayout>
    <div class="flex flex-wrap -mx-3">
      <div class="flex-none w-full max-w-full px-3">
        <div
          class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border"
        >
          <div class="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
            <h6 class="dark:text-white">Expenses history</h6>
            <div>
              <p v-bind:key="index" v-for="(expense, index) in expenses">
                {{ index }} - {{ expense.description }} - {{ expense.amount }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { AxiosStatic } from 'axios'
import { inject, onMounted, ref } from 'vue'
import { Expense } from '@renderer/models/Expense'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { ExpenseRepository } from '@renderer/repositories/ExpenseRepository'

const axios = inject('Mockoon') as AxiosStatic
const expenseRepository = new ExpenseRepository(axios)

const expenses = ref<Expense[]>([])

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
