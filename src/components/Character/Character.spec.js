import { render, screen } from "@testing-library/react"
import Character from "./Character"

describe('Character', () => {
    it("should render", () => {
        render(<Character />)
        expect(screen.getByTestId("CharacterId")).toBeInTheDocument();
    })
})