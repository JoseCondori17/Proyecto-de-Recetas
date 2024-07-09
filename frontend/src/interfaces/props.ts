export interface ItemProps {
  href: string,
  name: string,
  icon: React.ComponentType<{className ?: string}>
  isOpen: boolean
}