import React from 'react'
import { render, screen } from "@testing-library/react"
import Button from "./Button"

describe('Button', () => {
  it('should render', () => {
    render(<Button />);
    expect(screen.getByTestId("ButtonId")).toBeInTheDocument();
  })

  it('must display the text', () => {
    render(<Button text={"Hola mundo"}/>);
    expect(screen.getByText("Hola mundo")).toBeInTheDocument();
  })

  it('must display an Icon', () => {
    render(<Button icon={"add"}/>)
    expect(screen.getByText("add")).toBeInTheDocument();
  })

})