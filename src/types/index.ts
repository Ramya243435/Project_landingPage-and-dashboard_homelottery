export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  socialMediaId: string;
  isApproved: boolean;
  tickets: Ticket[];
}
  profileCompleteness: number;
  signInMethod: 'email' | 'google' | 'instagram' | 'facebook';
  isProfileComplete: boolean;

export interface Ticket {
  id: string;
  hash: string;
  purchaseDate: string;
  drawDate: string;
  amount: number;
  status: 'active' | 'drawn' | 'winner';
}

export interface Lottery {
  id: string;
  title: string;
  description: string;
  prizeValue: string;
  image: string;
  drawDate: string;
  ticketPrice: number;
  totalTickets: number;
  soldTickets: number;
  status: 'active' | 'upcoming' | 'completed';
}

export interface Winner {
  name: string;
  prize: string;
  date: string;
  ticketHash: string;
}

export interface Participant {
  maskedName: string;
  maskedPhone: string;
  ticketCount: number;
  joinDate: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'info' | 'warning' | 'success';
}