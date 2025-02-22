import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";

const SearchButton = () => {
  return (
    <div>
      <Button variant="outline" size="icon">
        <SearchIcon className="size-4" />
      </Button>
    </div>
  );
};

export default SearchButton;
