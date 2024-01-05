import { VisitExtended } from "@/app/lib/types";
import _ from "lodash";

const useSearchVisits = () => {
  const searchVisits = (visits: VisitExtended[], keysToSearch: Array<keyof VisitExtended>, query: string) => {
    if (query) {
      return visits.filter(visit => {
        // Because we only want to search within a subset of VisitExtended properties, we first need to derive an
        // object with only the properties we want to search on it.
        const searchableVisit = _.pick(visit, keysToSearch);

        // Then we need to convert those values to strings and lowercase them to permit case-insensitive searching.
        const stringifiedVisit = _.mapValues(searchableVisit, val => val?.toString().toLowerCase());

        // Finally, check each stringified value to see if it includes the query string, and if so, return the current
        // Visit object.
        return _.some(_.values(stringifiedVisit), val => val?.includes(query));
      });
    } else {
      return visits;
    }
  }

  const sortAndOrderVisits = (visits: VisitExtended[], sortBy: string, order: "asc" | "desc") => {
    return _.orderBy(visits, [sortBy], [order]);
  }

  return {
    searchVisits,
    sortAndOrderVisits
  };
}

export default useSearchVisits;