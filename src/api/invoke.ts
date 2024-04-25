import { useRequest } from 'vue-request'
import { invoke } from '@tauri-apps/api'

// Interact with the backend.
enum InterFace {
  greet = 'greet'
}

export function greet() {
  const { data, loading, error, runAsync }
    = useRequest(
      (name: string) => invoke<string>(InterFace.greet, { name }),
      { manual: true }
    )
  return { data, loading, error, runAsync }
}
