export interface INFTCardProps {
  data: INFTItem;
}

export interface INFTNameProps {
  name: string;
  creator: string;
}

export interface INFTItem {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: any;
  bids: INFTBidItem[];
}

export interface INFTBidItem {
  id: string;
  name: string;
  price: number;
  image: any;
  date: string;
}
