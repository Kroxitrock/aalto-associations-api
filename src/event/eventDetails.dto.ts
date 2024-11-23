export default interface EventDetailsDto {
  id?: number;
  title: string;
  description?: string;
  picture?: string;
  date?: Date;
  location?: string;
  price: number;
  capacity?: number;
  joined: boolean;
}
