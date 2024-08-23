// 1. Use TypeScript to define the User type with the following properties: ID, rank, name, email, image, and friends (array of user IDs).
export type User = {
  id: string;
  rank: number;
  name: string;
  email: string;
  friends: string[];
  friendNames?: string[];
  highestRankingFriend?: string;
  image: string;
}

export type UserCardProps = {
  user: User;
  onClick: (id: string) => void;
  isSelected: boolean;
}

export type SearchBarProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
