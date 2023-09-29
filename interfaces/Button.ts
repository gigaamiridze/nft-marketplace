export interface ICircleButtonProps {
  iconUrl: any;
  top: number;
  right: number;
  handlePress?: () => void;
}

export interface IRectButtonProps {
  title: string;
  minWidth: number;
  headingType: 1 | 2 | 3 | 4 | 5 | 6;
  handlePress: () => void;
}
