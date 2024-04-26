<script setup lang = "ts">
import dayjs from 'dayjs'
import Database from 'tauri-plugin-sql-api'
import 'dayjs/locale/zh-cn'
// message组件用于系统弹窗提示
// import { message } from '@tauri-apps/api/dialog'

const { data, runAsync } = greet()

dayjs.locale('zh-cn')

interface todoItem {
  id?: number
  desc: string
  startTime?: string
  endTime?: string
  level: number
  is_completed?: boolean
}

let db: Database

const todoData = ref<todoItem[]>([
  {
    id: 1,
    desc: 'Todo 1',
    level: 1,
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

const updateTodo = async () => {
  todoData.value = await db.select('SELECT * FROM todo') as todoItem[]
}

const addItem = async () => {
  const startTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
  const endTime = ''
  const is_completed = 0
  // 插入数据
  await db.execute(
    'INSERT INTO todo (desc, startTime, endTime, level, is_completed) VALUES ($1, $2, $3, $4, $5)',
    [nowItem.value.desc, startTime, endTime, nowItem.value.level, is_completed]
  )
  await updateTodo()
  // await message(`todo已记录，${nowItem.value.desc}`, { title: '日志记录' })
  nowItem.value.desc = ''
  nowItem.value.level = 1
}

// 初始化表语句
const createSql = 'CREATE TABLE IF NOT EXISTS todo (id INTEGER PRIMARY KEY,desc TEXT NOT NULL, startTime TEXT NOT NULL, endTime TEXT NOT NULL, level INTEGER NOT NULL, is_completed INTEGER NOT NULL)'

onMounted(async () => {
  db = await Database.load('sqlite:todo.db')
  await db.execute(createSql)
  // 查询数据并赋值给todoData
  await updateTodo()
  await runAsync('Vite And Vue3 ')
  console.log('data:', data.value)
})
</script>

<template>
  <div class="topBox">
    <Navigation />
    <TransitionGroup name="fade" tag="ul" class="w-full flex flex-1 flex-col gap-6 overflow-auto p-3">
      <li v-for="{ desc, startTime, id } in todoData" :key="id">
        <n-thing>
          <template #default>
            待完成事项：{{ desc }}
          </template>
          <template #footer>
            创建时间：{{ startTime }}
          </template>
        </n-thing>
      </li>
    </TransitionGroup>
    <n-input-group w-400px p-3>
      <n-input v-model:value="nowItem.desc" placeholder="input todo!!!" />
      <n-select v-model:value="nowItem.level" :options="levelOptions" placeholder="选择等级" w-120px />
      <n-button @click="addItem">
        添加
      </n-button>
    </n-input-group>
  </div>
</template>

<style>
.topBox {
  @apply h-screen w-screen flex flex-col items-center justify-center gap-2;
}
</style>
