interface ShowcaseItem {
  caption: string;
  svgContent: React.ReactNode;
}

interface ShowcaseSectionProps {
  headerLabel?: string;
  headerTitle?: string;
  headerDescription?: string;
  items: ShowcaseItem[];
}