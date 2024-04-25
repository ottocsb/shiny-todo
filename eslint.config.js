// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true
  },
  {
    rules: {
      'style/comma-dangle': ['error', 'never'], // 关闭尾随逗号
      'no-console': 'off',
      'antfu/top-level-function': 'off' // 关闭顶级函数检查 可使用箭头函数或function声明
    }
  },
  {
    // 忽略检查 md文件和d.ts文件
    ignores: ['**/*.md', '**/*.d.ts']
  }
)
