export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
}

export interface UserLoginRequest {
  mobileNumber: string;
}

export interface UserSignupRequest {
  fullName: string;
  mobileNumber: string;
  password: string;
}

export interface StoreLoginRequest {
  mobileNumber: string;
  password: string;
}

export interface StoreSignupRequest {
  storeName: string;
  ownerName: string;
  mobileNumber: string;
  password: string;
}