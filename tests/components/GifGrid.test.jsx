import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en GifGrid', () => { 
    
    const category = 'One punch'

    test('debe mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        
        render(<GifGrid category={ category } />)
        screen.debug()

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
        
     })

     test('debe mostrar items cuando se cargan las imagenes con fetchUseGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'www.Saitama.com'
            },
            {
                id: '123',
                title: 'GOku',
                url: 'www.GOku.com'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={ category } />)
        screen.debug()
        expect(screen.getAllByRole('img').length).toBe(2)

      })
    
 })