// Re-export the Container component as default
export { default as Container } from 'semantic-ui-react/dist/commonjs/elements/Container/Container'

// Re-export the type explicitly (required for isolatedModules)
export type { ContainerProps } from 'semantic-ui-react/dist/commonjs/elements/Container/Container'

// Import your custom CSS styling
import './Container.css'
