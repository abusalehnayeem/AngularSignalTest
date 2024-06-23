export interface ContactFormDto {
  id: number | undefined;
  email: string;
  message: string;
}

export interface Recipient {
  id: number;
  name: string;
}
