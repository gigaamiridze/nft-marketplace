export interface INFTCardProps {
  data: INFTItem;
}

interface INFTItem {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: any;
  bids: INFTBidItem[];
}

interface INFTBidItem {
  id: string;
  name: string;
  price: number;
  image: any;
  date: string;
}
