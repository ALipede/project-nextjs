import { Fragment } from 'react';
import { getAllEvents } from '@/dummy-data';
import EvenList from '@/components/events/event-list';
import EventsSearch from '@/components/events/events-search';

function AllEventsPage() {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EvenList items={events} />
    </Fragment>
  );
}
export default AllEventsPage;
