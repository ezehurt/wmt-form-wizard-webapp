import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "./App"
import { expect } from "vitest"

describe("App component", () => {
  test("renders Vite and React logos", () => {
    render(<App />)
    const viteLogo = screen.getByAltText("Vite logo")
    const reactLogo = screen.getByAltText("React logo")
    expect(viteLogo).toBeInTheDocument()
    expect(reactLogo).toBeInTheDocument()
  })

  test("renders the heading", () => {
    render(<App />)
    const heading = screen.getByText(/Vite \+ React/i)
    expect(heading).toBeInTheDocument()
  })

  test("increments count on button click", () => {
    render(<App />)
    const button = screen.getByRole("button", { name: /count is 0/i })
    fireEvent.click(button)
    expect(button).toHaveTextContent("count is 1")
    fireEvent.click(button)
    expect(button).toHaveTextContent("count is 2")
  })

  test("renders the learn more text", () => {
    render(<App />)
    const learnMore = screen.getByText(
      /Click on the Vite and React logos to learn more/i,
    )
    expect(learnMore).toBeInTheDocument()
  })
})
