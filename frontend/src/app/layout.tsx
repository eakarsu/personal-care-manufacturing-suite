import './globals.css';
import { AuthProvider } from '@/components/providers/AuthProvider';

export const metadata = {
  title: 'Personal Care Manufacturing Suite',
  description: 'Merged personal care manufacturing suite with one login, one dashboard, and feature-first navigation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
