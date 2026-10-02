import { signIn } from "../../../auth"

export default function LoginPage() {
  return (
    <main style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center" }}>
      <form
        action={async () => {
          "use server"
          await signIn("github", { redirectTo: "/dashboard" })
        }}
      >
        <button type="submit" style={{ padding: "12px 24px", fontSize: "16px" }}>
          Sign in with GitHub
        </button>
      </form>
    </main>
  )
}