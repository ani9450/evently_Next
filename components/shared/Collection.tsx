import { IEvent } from "@/lib/database/models/event.model";
import Card from "./Card";

type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  collectionType?: "EVENT_ORGANISED" | "MY_EVENTS" | "ALL_EVENTS";
};

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  limit,
  urlParamName,
}: CollectionProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map((event) => {
              const hasOrderLink = collectionType === "EVENT_ORGANISED";
              const hidePrice = collectionType === "MY_EVENTS";
              return (
                <li key={event._id} className="flex justify-center">
                  <Card 
                  event = {event}
                  hasOrderLink = {hasOrderLink}
                  hidePrice = {hidePrice}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className=" flex-center wrapper min-h-[200px] w-full flex flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  );
};

export default Collection;
