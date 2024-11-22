export default interface CreateEventDto {
  title: string;
  description?: string;
  picture?: string;
  date?: Date;
  location?: string;
  price: number;
  capacity?: number;
  associationId: number;
}
