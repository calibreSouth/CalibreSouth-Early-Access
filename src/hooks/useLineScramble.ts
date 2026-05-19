import { useRef, useCallback, useEffect } from 'react'

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export function useLineScramble(text: string, startDelayMs = 0) {
  const elRef       = useRef<HTMLSpanElement>(null)
  const intervalRef = useRef<number | null>(null)
  const timeoutRef  = useRef<number | null>(null)

  const run = useCallback(() => {
    let iter = 0
    clearInterval(intervalRef.current ?? undefined)
    intervalRef.current = window.setInterval(() => {
      if (elRef.current) {
        elRef.current.innerHTML = text
          .split('')
          .map((char, i) => {
            if (i < iter) return char
            const rand = SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
            return `<span style="color:var(--color-accent);opacity:0.5">${rand}</span>`
          })
          .join('')
      }
      iter += 0.35
      if (iter >= text.length) {
        clearInterval(intervalRef.current ?? undefined)
        if (elRef.current) elRef.current.textContent = text
      }
    }, 28)
  }, [text])

  const trigger = useCallback(() => {
    clearInterval(intervalRef.current ?? undefined)
    clearTimeout(timeoutRef.current ?? undefined)
    if (startDelayMs > 0) {
      timeoutRef.current = window.setTimeout(run, startDelayMs)
    } else {
      run()
    }
  }, [run, startDelayMs])

  useEffect(() => () => {
    clearInterval(intervalRef.current ?? undefined)
    clearTimeout(timeoutRef.current ?? undefined)
  }, [])

  return { elRef, trigger }
}
