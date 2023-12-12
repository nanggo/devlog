import { inject } from '@vercel/analytics'

export const initializeVercelAnalytics = () => {
  if (typeof window !== 'undefined') {
    inject()
  }
}
