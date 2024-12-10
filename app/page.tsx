import EnvVariablesDisplay from './components/EnvVariablesDisplay'
import { ModeToggle } from './components/ModeToggle'

const envVariables = [
  'POSTGRES_URL',
  'POSTGRES_PRISMA_URL',
  'DATABASE_URL_UNPOOLED',
  'POSTGRES_URL_NON_POOLING',
  'PGHOST',
  'POSTGRES_USER',
  'DATABASE_URL',
  'POSTGRES_PASSWORD'
]

export default function Home() {
  const envValues: Record<string, string> = {}
  for (const variable of envVariables) {
    envValues[variable] = process.env[variable] || ''
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground transition-colors duration-300">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Environment Variables</h1>
          <ModeToggle />
        </div>
        <EnvVariablesDisplay envValues={envValues} />
      </div>
    </main>
  )
}

