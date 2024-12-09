import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

export default async function EnvVariablesDisplay() {
  const envValues = await getEnvValues()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      {envVariables.map((variable) => (
        <Card key={variable}>
          <CardHeader>
            <CardTitle>{variable}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-mono break-all">
              {envValues[variable] || 'Not set'}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

async function getEnvValues() {
  const values: Record<string, string> = {}
  for (const variable of envVariables) {
    values[variable] = process.env[variable] || ''
  }
  return values
}