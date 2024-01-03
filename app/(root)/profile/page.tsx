import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

const ProfilePage = async () => {
const {sessionClaims} = auth();

const userId = sessionClaims?.userId as string;
 
const organisedEvents = await getEventsByUser({
    userId : userId,
    page: 1
})

  return (
    <>
      {/* MT TICKETS */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between ">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
          <Button asChild  size="lg" className="button hidden sm:flex">
            <Link href="/#events">Explore more Events</Link>
          </Button>
        </div>
      </section>

        <section className="wrapper my-8">
        {/* <Collection
          data={relatedEvents?.data}
          emptyTitle="No Events Ticket Purchased yet"
          emptyStateSubtext="No Worries - Plenty of exciting ticket to explore"
          collectionType="MY_EVENTS"
          limit={3}
          page={1}
          totalPages={2}
          urlParamName="ordersPage"
        /> */}
        </section>
      {/* Events Organised */}

      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between ">
          <h3 className="h3-bold text-center sm:text-left">Events Organised</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/events/create">Create New Event</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <Collection
          data={organisedEvents?.data}
          emptyTitle="No Events have been created yet"
          emptyStateSubtext="Go create some now"
          collectionType="EVENT_ORGANISED"
          limit={6}
          page={1}
          totalPages={2}
          urlParamName="eventsPage"
        />
        </section>
    </>
  );
};

export default ProfilePage;
