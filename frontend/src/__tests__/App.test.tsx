import { describe, it, expect, vi, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

vi.stubGlobal('fetch', vi.fn(() => Promise.resolve({
  json: () => Promise.resolve({ data: { ads: [] } })
})) as any)

beforeAll(async () => {
  globalThis.expect = expect
  await import('@testing-library/jest-dom')
})

describe('App', () => {
  it('renders header', () => {
    render(<App />)
    expect(screen.getByText('Ads')).toBeInTheDocument()
  })
})