export interface Event {
  title: string;
  description: string;
  date: Date;
}

export const events: Event[] = [
  {
    title: 'Portes ouvertes',
    description: 'Venez au portes ouvertes!',
    date: new Date('10/15/2025 09:00:00 GMT-0500'),
  },
]
  .filter(e => e.date.getTime() > Date.now())
  .sort((a, b) => (a.date?.getTime() || 0) - (b.date?.getTime() || 0));
