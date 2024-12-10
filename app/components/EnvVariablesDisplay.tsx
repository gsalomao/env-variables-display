"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle } from 'lucide-react'

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

export default function EnvVariablesDisplay({ envValues }: { envValues: Record<string, string> }) {
  const [userValues, setUserValues] = useState<Record<string, string>>({})

  const handleInputChange = (variable: string, value: string) => {
    setUserValues(prev => ({ ...prev, [variable]: value }))
  }

  const compareValues = (envValue: string, userValue: string) => {
    if (!userValue) return null
    return envValue === userValue
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {envVariables.map((variable) => (
        <Card key={variable} className="overflow-hidden transition-all hover:shadow-lg">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-lg font-semibold">{variable}</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            <div>
              <Label className="text-sm font-medium">Environment Value:</Label>
              {envValues[variable] ? (
                <p className="text-sm font-mono break-all mt-1">
                  {envValues[variable]}
                </p>
              ) : (
                <Badge variant="outline" className="text-muted-foreground mt-1">Not set</Badge>
              )}
            </div>
            <div>
              <Label htmlFor={`user-${variable}`} className="text-sm font-medium">Your Value:</Label>
              <Input
                id={`user-${variable}`}
                value={userValues[variable] || ''}
                onChange={(e) => handleInputChange(variable, e.target.value)}
                className="mt-1"
                placeholder="Enter your value"
              />
            </div>
            {userValues[variable] && (
              <div className="flex items-center space-x-2">
                <Label className="text-sm font-medium">Comparison:</Label>
                {compareValues(envValues[variable], userValues[variable]) ? (
                  <div className="flex items-center text-green-500">
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    <span className="text-sm">Match</span>
                  </div>
                ) : (
                  <div className="flex items-center text-red-500">
                    <XCircle className="w-4 h-4 mr-1" />
                    <span className="text-sm">Mismatch</span>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

