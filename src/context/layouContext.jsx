import { createContext } from 'react'

const LayoutContext = createContext([{}, () => {}])

function LayoutProvider({ children }) {
    return <LayoutContext.Provider>{children}</LayoutContext.Provider>
}

export { LayoutContext, LayoutProvider }
