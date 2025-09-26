export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'donor' | 'admin' | 'organization';
  phone?: string;
  avatar?: string;
  createdAt: Date;
}

export interface FundRequest {
  id: string;
  userId: string;
  title: string;
  description: string;
  amount: number;
  category: string;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'approved' | 'rejected' | 'funded' | 'completed';
  documents: string[];
  aiVerificationScore: number;
  fraudDetected: boolean;
  fundedAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Donation {
  id: string;
  donorId: string;
  requestId: string;
  amount: number;
  message?: string;
  isAnonymous: boolean;
  paymentMethod: string;
  transactionId: string;
  createdAt: Date;
}

export interface Wallet {
  id: string;
  userId: string;
  balance: number;
  transactions: Transaction[];
}

export interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  method: 'upi' | 'card' | 'bank' | 'wallet';
  status: 'pending' | 'completed' | 'failed';
  createdAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: Date;
}