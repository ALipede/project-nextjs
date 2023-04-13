import { getAllEvents } from '@/dummy-data';
import EvenList from '@/components/events/event-list';

function AllEventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <h1>All Events</h1>
      <EvenList items={events} />
    </div>
  );
}
export default AllEventsPage;
