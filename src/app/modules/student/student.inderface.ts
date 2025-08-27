export interface AddressInterface {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface StudentInterface {
  _id: string;
  name: string;
  age: number;
  grade: string;
  email: string;
  address?: AddressInterface; // Optional field
  phone?: string; // Optional field
}
