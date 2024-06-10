export function getGreeting() {
  const currentTime = new Date().getHours()
  if (currentTime >= 5 && currentTime < 12) {
    return "Bom dia"
  } else if (currentTime >= 12 && currentTime < 18) {
    return "Boa tarde"
  }
  return "Boa noite"
}