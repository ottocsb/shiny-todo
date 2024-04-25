<script setup lang = "ts">
// const { data, runAsync }=greet()

import Database from 'tauri-plugin-sql-api'

interface todoItem {
  id?: number
  desc: string
  startTime?: string
  endTime?: string
  level: number
  is_completed?: boolean
}

let db

const todoData = ref<todoItem[]>([
  {
    id: 1,
    desc: 'Todo 1',
    level: 1,
    startTime: ''
  },
  {
    id: 2,
    desc: '今日待办2',
    level: 2,
    startTime: ''
  }
])

const levelOptions = [
  {
    label: '一般',
    value: 1,
    style: 'color: green;'
  },
  {
    label: '重要',
    value: 2,
    style: 'color: blue;'
  },
  {
    label: '紧急',
    value: 3,
    style: 'color: red;'
  }
]

const nowItem = ref<todoItem>({
  desc: '',
  level: 1
})

const addItem = () => {
  console.log('addItem:', nowItem.value)
}

// 初始化表语句
const createSql = 'CREATE TABLE IF NOT EXISTS todo ("id INTEGER PRIMARY KEY,desc TEXT NOT NULL, startTime TEXT NOT NULL, endTime TEXT NOT NULL, level INTEGER NOT NULL, is_completed INTEGER NOT NULL")'

onMounted(async () => {
  console.log('index.vue onMounted')
  db = await Database.load('sqlite:todo.db')
  const is = await db.execute(createSql)
  console.log('createSql:', is)
  // await runAsync('Vite And Vue3 ')
  // console.log('data:', data.value)
})
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-2">
    <n-input-group w-400px>
      <n-input v-model:value="nowItem.desc" placeholder="input todo!!" />
      <n-select v-model:value="nowItem.level" :options="levelOptions" placeholder="选择等级" />
      <n-button @click="addItem">
        添加
      </n-button>
    </n-input-group>
    <ul>
      <li v-for="todo in todoData" :key="todo.id">
        {{ todo.desc }}
      </li>
    </ul>
  </div>
</template>

<style>

</style>
