import { User } from "../types/index.types";

export const sampleData: User[] = [
  { id: "1", rank: 1, name: "John Doe", email: "john.doe@example.com", friends: ["2", "3", "4"], image: 'https://picsum.photos/200' },
  { id: "2", rank: 2, name: "Jane Smith", email: "jane.smith@example.com", friends: ["1", "3"], image: 'https://picsum.photos/200' },
  { id: "3", rank: 3, name: "Alex Johnson", email: "alex.johnson@example.com", friends: ["1", "2"], image: 'https://picsum.photos/200' },
  { id: "4", rank: 4, name: "Sarah Williams", email: "sarah.williams@example.com", friends: ["1"], image: 'https://picsum.photos/200' },
  { id: "5", rank: 5, name: "Michael Brown", email: "michael.brown@example.com", friends: [], image: 'https://picsum.photos/200' },
  { id: "6", rank: 6, name: "Emily Davis", email: "emily.davis@example.com", friends: [], image: 'https://picsum.photos/200' },
  { id: "7", rank: 7, name: "Christopher Wilson", email: "christopher.wilson@example.com", friends: [], image: 'https://picsum.photos/200' },
];