export const useCounter = () => {
  const count = useState('count', () => 10086)

  const inc = () => {
    count.value += 1
  }
  const dec = () => {
    count.value -= 1
  }

  return {
    count,
    inc,
    dec
  }
}
