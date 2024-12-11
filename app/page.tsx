import EnvVariablesDisplay from './components/EnvVariablesDisplay'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Environment Variables</h1>
      <EnvVariablesDisplay />
    </main>
  )
}