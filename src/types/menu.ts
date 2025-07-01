export interface MenuItem {
  id: number;
  nome: string;
  preço: number;
  ingredientes?: string;
}

export interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}