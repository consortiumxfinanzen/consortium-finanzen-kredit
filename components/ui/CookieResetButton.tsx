'use client'

export default function CookieResetButton() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem('cookie-consent')
        window.location.reload()
      }}
      className="text-primary-700 underline cursor-pointer bg-transparent border-0 p-0 font-[inherit]"
    >
      réinitialiser mes préférences
    </button>
  )
}
