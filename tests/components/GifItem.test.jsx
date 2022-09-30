import { GifItem } from "../../src/components/GifItem"
import { render, screen } from "@testing-library/react"



describe('Pruebas en GifItem', () => { 

    const title = 'Fernando'

    test('snapshot', () => { 

        const { container } = render(<GifItem title={ title } url={'www.google.com'}/>)

        expect(container).toMatchSnapshot()
        
     })

     test('should first', () => {  

        render(<GifItem title={ title } url={'www.google.com'}/>)
        expect(screen.getByText(title)).toBeTruthy()
        
        

     })

 })

 