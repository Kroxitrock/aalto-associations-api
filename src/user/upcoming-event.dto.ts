export interface UpcomingEventDto {
  id: number;
  title: string;
  description: string;
  picture: string;
  date: Date;
  location: string;
  price: number;
  capacity: number;
  associationName: string;
  joined: boolean;
}

export function mapToUpcomingEventDto(data: any): UpcomingEventDto {
  return {
    id: data.event_id,
    title: data.event_title,
    description: data.event_description,
    picture: data.event_picture,
    date: new Date(data.event_date),
    location: data.event_location,
    price: Number(data.event_price),
    capacity: data.event_capacity,
    associationName: data.association_name,
    joined: data.joined,
  };
}
