import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getAllEvents } from '@/dummy-data';
import EvenList from '@/components/events/event-list';
import EventsSearch from '@/components/events/events-search';

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EvenList items={events} />
    </Fragment>
  );
}
export default AllEventsPage;
