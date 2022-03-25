import { render, screen } from "@testing-library/react"
import Icon from "../Icon"
import Input from "./Input"

describe('Input', () => {
  
  it("should render", () => {
    render(<Input />)

    expect(screen.getByTestId("InputId")).toBeInTheDocument();
    expect(screen.getByTestId("InnerInputId")).toBeInTheDocument();
  })

  it("should have placeholder", () => {
    render(<Input placeholder={"Buscar"}/>);
    const element = screen.getByTestId("InnerInputId");
    
    expect(element).toHaveAttribute("placeholder", "Buscar");
  })

  it("should have an icon", () => {
    render(<Input icon="search"/>)
    expect(screen.getByText("search")).toBeInTheDocument();
  })
  
})