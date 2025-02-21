import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";

const SearchButton = () => {
  return (
    <div>
      <Button variant="outline" size="sm">
        Search
        <SearchIcon className="size-4" />
      </Button>
    </div>
  );
};

export default SearchButton;
