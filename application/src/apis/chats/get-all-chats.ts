
export interface Chat {
  id: string;
  message: string;
  sender: {
    profile: string;
    name: string;
  };
  timestamp: Date;
  lastMessage: string[];
}

const allChats: Chat[] = [
  {
    id: "1",
    message: "Hello!",
    sender: {
      profile: "user1.png",
      name: "Dheeraj",
    },
    timestamp: new Date(),
    lastMessage: ["Hello!"],
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "2",
    message: "Hi there!",
    sender: {
      profile: "user2.png",
      name: "Romania",
    },
    lastMessage: ["Hi there!"],
    timestamp: new Date(),
  },
  {
    id: "3",
    message: "Hi there!",
    sender: {
      profile: "user3.png",
      name: "Hankour",
    },
    timestamp: new Date(),
    lastMessage: ["good bye everybody!"],
  },
  {
    id: "4",
    message: "Hi there!",
    sender: {
      profile: "user4.png",
      name: "Aakrash",
    },
    timestamp: new Date(),
    lastMessage: ["Hi there everybody!"],
  },
];

export default async function getAllChats(): Promise<Chat[]> {
  try {
    return allChats;
    const response = await fetch("/api/chats");
    if (!response.ok) {
      throw new Error("Failed to fetch chats");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching chats:", error);
    throw error;
  }
}