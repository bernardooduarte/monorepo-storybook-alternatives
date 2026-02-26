import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portal',
  description: 'Portal app',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactNode {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}